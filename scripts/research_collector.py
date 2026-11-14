import os
import re
import json
import time
import urllib3
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin

urllib3.disable_warnings()

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

BASE_URL = 'https://uswat.edu.pk'

def get_soup(url):
    try:
        res = requests.get(url, headers=HEADERS, verify=False, timeout=20)
        if res.status_code == 200:
            return BeautifulSoup(res.text, 'html.parser'), res.status_code
        return None, res.status_code
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None, 500

def extract_page_data(url):
    soup, status = get_soup(url)
    if not soup:
        return {
            'url': url,
            'status': status,
            'title': 'Inaccessible / Failed',
            'headings': [],
            'paragraphs': [],
            'tables': [],
            'links': [],
            'images': [],
            'documents': []
        }
    
    title = soup.title.string.strip() if soup.title else ''
    content_area = soup.find('div', class_='entry-content') or soup.find('main') or soup.body
    
    headings = []
    paragraphs = []
    tables = []
    links = []
    images = []
    documents = []
    
    if content_area:
        for h in content_area.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']):
            htxt = h.get_text(strip=True)
            if htxt:
                headings.append({'level': h.name, 'text': htxt})
                
        for p in content_area.find_all(['p', 'li']):
            ptxt = p.get_text(strip=True)
            if len(ptxt) > 15:
                paragraphs.append(ptxt)
                
        for table in content_area.find_all('table'):
            rows = []
            for tr in table.find_all('tr'):
                cells = [td.get_text(strip=True) for td in tr.find_all(['th', 'td'])]
                if cells:
                    rows.append(cells)
            if rows:
                tables.append(rows)
                
        for a in content_area.find_all('a', href=True):
            href = a['href'].strip()
            txt = a.get_text(strip=True)
            if not href.startswith('#') and not href.startswith('javascript:'):
                full_href = urljoin(url, href)
                links.append({'text': txt, 'url': full_href})
                if full_href.lower().endswith(('.pdf', '.doc', '.docx', '.xls', '.xlsx', '.zip')):
                    documents.append({'title': txt or os.path.basename(full_href), 'url': full_href})
                    
        for img in content_area.find_all('img'):
            src = img.get('src') or img.get('data-src')
            if src:
                alt = img.get('alt', '').strip()
                full_src = urljoin(url, src)
                
                # Check for high-res version if it's a thumbnail like -150x150 or -1024x...
                high_res = re.sub(r'-\d+x\d+(\.[a-zA-Z]+)$', r'\1', full_src)
                
                images.append({
                    'src': full_src,
                    'high_res': high_res,
                    'alt': alt
                })
                
    return {
        'url': url,
        'status': status,
        'title': title,
        'headings': headings,
        'paragraphs': paragraphs[:50],  # first 50 meaningful paragraphs
        'tables': tables,
        'links': links[:30],
        'images': images,
        'documents': documents
    }

def main():
    print("Fetching sitemaps...")
    r = requests.get(f'{BASE_URL}/wp-sitemap-posts-page-1.xml', headers=HEADERS, verify=False, timeout=15)
    page_urls = re.findall(r'<loc>(https?://[^<]+)</loc>', r.text)
    print(f"Discovered {len(page_urls)} static pages from sitemap.")
    
    # Also fetch recent news / posts
    r_post = requests.get(f'{BASE_URL}/wp-sitemap-posts-post-1.xml', headers=HEADERS, verify=False, timeout=15)
    post_urls = re.findall(r'<loc>(https?://[^<]+)</loc>', r_post.text)
    recent_posts = post_urls[-40:]  # latest 40 news/events/announcements
    print(f"Selected {len(recent_posts)} latest posts.")
    
    # Priority list of pages
    priority_categories = [
        f'{BASE_URL}/category/latestnews/',
        f'{BASE_URL}/category/announcements/',
        f'{BASE_URL}/category/events/',
        f'{BASE_URL}/category/jobs/',
        f'{BASE_URL}/category/tender/'
    ]
    
    all_targets = []
    seen = set()
    
    for u in page_urls:
        if u not in seen:
            all_targets.append(u)
            seen.add(u)
            
    for u in priority_categories:
        if u not in seen:
            all_targets.append(u)
            seen.add(u)
            
    for u in recent_posts:
        if u not in seen:
            all_targets.append(u)
            seen.add(u)
            
    print(f"Total target URLs to research: {len(all_targets)}")
    
    results = {}
    total = len(all_targets)
    
    for idx, u in enumerate(all_targets):
        print(f"[{idx+1}/{total}] Extracting: {u}")
        data = extract_page_data(u)
        results[u] = data
        time.sleep(0.1)  # small courteous pause
        
    os.makedirs('src/data', exist_ok=True)
    with open('src/data/crawled_pages.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
        
    print(f"Successfully saved {len(results)} researched pages to src/data/crawled_pages.json")

if __name__ == '__main__':
    main()
