import os
import re
import json
import urllib3
import requests
from urllib.parse import urlparse
from concurrent.futures import ThreadPoolExecutor, as_completed

urllib3.disable_warnings()

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def clean_filename(name):
    name = re.sub(r'[^\w\-_\.]', '_', name)
    return name[:70].strip('_')

def download_one(task):
    url, target_dir, fallback_name = task
    os.makedirs(target_dir, exist_ok=True)
    parsed = urlparse(url)
    ext = os.path.splitext(parsed.path)[1].lower()
    if ext not in ['.jpg', '.jpeg', '.png', '.webp']:
        ext = '.jpg'
    
    filename = clean_filename(fallback_name) + ext
    target_path = os.path.join(target_dir, filename)
    relative_path = target_path.replace('\\', '/')
    
    if os.path.exists(target_path) and os.path.getsize(target_path) > 1000:
        return url, relative_path
        
    try:
        # Try high res first by stripping dimensions like -150x150, -1024x...
        high_res_url = re.sub(r'-\d+x\d+(\.[a-zA-Z]+)$', r'\1', url)
        res = requests.get(high_res_url, headers=HEADERS, verify=False, timeout=12)
        if res.status_code != 200 or len(res.content) < 500:
            res = requests.get(url, headers=HEADERS, verify=False, timeout=12)
            
        if res.status_code == 200 and len(res.content) > 500:
            with open(target_path, 'wb') as f:
                f.write(res.content)
            return url, relative_path
    except Exception as e:
        pass
        
    return url, None

def main():
    crawled_file = 'src/data/crawled_pages.json'
    if not os.path.exists(crawled_file):
        print(f"File {crawled_file} not found!")
        return

    with open(crawled_file, 'r', encoding='utf-8') as f:
        pages = json.load(f)

    print(f"Processing {len(pages)} crawled pages...")
    
    download_tasks = []
    seen_urls = set()
    page_img_map = {}
    
    inventory_items = []
    
    for url, data in pages.items():
        slug = urlparse(url).path.strip('/')
        title = data.get('title', '').replace('– UNIVERSITY OF SWAT', '').replace('- UNIVERSITY OF SWAT', '').strip()
        status_code = data.get('status', 200)
        headings = [h['text'] for h in data.get('headings', [])]
        paragraphs = data.get('paragraphs', [])
        images = data.get('images', [])
        documents = data.get('documents', [])
        
        # Determine proposed Next.js route & category
        proposed_route = "/"
        category = "General"
        
        if slug == '' or slug == 'home':
            proposed_route = "/"
            category = "Homepage"
        elif 'vice-chancellor' in slug or slug in ['vc-office', 'registeror-office', 'treasurer-office', 'controller-of-examination-office', 'provost-office', 'proctorial-board', 'pro-2', 'office-of-the-pro-vice-chancellor-pro-vc', 'office-of-the-deans']:
            proposed_route = f"/leadership/{slug}" if slug != 'vc-office' and slug != 'vice-chancellors-message-2' else ("/leadership/vice-chancellor" if 'chancellor' in slug else f"/leadership/{slug}")
            category = "Leadership & Administration"
        elif slug.startswith('directorate-') or slug in ['qec', 'quality-enhancement-cell', 'oric-2', 'advanced-studies-and-research-board', 'university-advancement-financial-aid-office']:
            proposed_route = f"/administration/{slug}"
            category = "Administration & Directorates"
        elif slug.startswith('department') or slug.startswith('institute-') or slug.startswith('college-') or slug.startswith('shangla-'):
            dept_slug = slug.replace('department-of-', '').replace('department_of_', '')
            proposed_route = f"/departments/{dept_slug}"
            category = "Academic Departments"
        elif slug.startswith('bs-') or slug.startswith('ba-') or slug.startswith('bba-') or slug.startswith('b-ed'):
            proposed_route = f"/programs/{slug}"
            category = "Academic Programs"
        elif slug in ['online-admissions', 'admission-rules', 'fee-structure', 'merit-list', 'directorate-of-admissions']:
            proposed_route = f"/admissions/{slug}"
            category = "Admissions & Aid"
        elif slug in ['maincampus', 'women-campus', 'sangota-campus']:
            proposed_route = f"/campus/{slug}"
            category = "Campuses"
        elif slug in ['central-library-office', 'digital-library', 'facilities', 'societies', 'activities', 'alumni', 'kamyab-jawan-markaz', 'hunerkada-center-for-excellence']:
            proposed_route = f"/campus-life/{slug}"
            category = "Campus Life & Facilities"
        elif 'category/' in url:
            cat_name = url.split('category/')[-1].strip('/')
            proposed_route = f"/news/{cat_name}"
            category = "News & Media"
        elif re.match(r'20\d\d/\d\d/', slug):
            post_slug = slug.split('/')[-1]
            proposed_route = f"/news/{post_slug}"
            category = "News Articles & Notices"
        elif slug in ['academic-calendar', 'curriculum', 'curriculum-2', 'downloads', 'rules', 'statutes-2016', 'pqr']:
            proposed_route = f"/academics/{slug}"
            category = "Academics & Resources"
        else:
            proposed_route = f"/{slug}"
            category = "Institutional"

        page_img_map[url] = []
        for idx, img_info in enumerate(images):
            img_url = img_info['src']
            alt = img_info.get('alt', '')
            
            # Select target directory
            if category == "Leadership & Administration":
                target_dir = "public/images/leadership"
            elif category == "Academic Departments":
                target_dir = "public/images/departments"
            elif category == "Campuses":
                target_dir = "public/images/campus"
            elif category == "Campus Life & Facilities":
                target_dir = "public/images/facilities"
            elif category in ["News & Media", "News Articles & Notices"]:
                target_dir = "public/images/news"
            else:
                target_dir = "public/images/campus"
                
            base_name = f"{slug}_{idx}_{clean_filename(alt or 'img')}"
            if img_url not in seen_urls:
                seen_urls.add(img_url)
                download_tasks.append((img_url, target_dir, base_name))
            page_img_map[url].append(img_url)
                
        inventory_items.append({
            'original_url': url,
            'title': title or slug,
            'category': category,
            'proposed_route': proposed_route,
            'status_code': status_code,
            'research_status': 'Complete' if status_code == 200 else f'Failed ({status_code})',
            'implementation_status': 'Implemented' if proposed_route in ['/', '/programs', '/faculty', '/academics', '/admissions', '/campus-life', '/research', '/portal'] else 'Pending',
            'headings_count': len(headings),
            'paragraphs_count': len(paragraphs),
            'sample_heading': headings[0] if headings else 'N/A',
            'images_found': len(images),
            'documents_count': len(documents),
            'documents': documents
        })

    print(f"Total unique images to download: {len(download_tasks)}")
    
    asset_mapping = {}
    completed = 0
    with ThreadPoolExecutor(max_workers=16) as executor:
        futures = {executor.submit(download_one, t): t for t in download_tasks}
        for future in as_completed(futures):
            url, local_path = future.result()
            completed += 1
            if local_path:
                asset_mapping[url] = local_path.replace('public/', '/')
            if completed % 50 == 0 or completed == len(download_tasks):
                print(f"Downloaded {completed}/{len(download_tasks)} images...")

    # Attach local images to inventory items
    for it in inventory_items:
        u = it['original_url']
        it['local_images'] = [asset_mapping[img_u] for img_u in page_img_map.get(u, []) if img_u in asset_mapping]

    # Save asset mapping
    with open('src/data/asset_mapping.json', 'w', encoding='utf-8') as f:
        json.dump(asset_mapping, f, ensure_ascii=False, indent=2)

    # Save structured inventory JSON
    with open('src/data/source_inventory.json', 'w', encoding='utf-8') as f:
        json.dump(inventory_items, f, ensure_ascii=False, indent=2)

    # Generate source-inventory.md
    md_content = ["# University of Swat — Source Research Inventory\n\n",
                  f"**Last Updated**: 2026-11-15\n\n",
                  f"**Total Discovered Pages**: {len(inventory_items)}\n\n",
                  f"**Total Downloaded Original Images**: {len(asset_mapping)}\n\n",
                  "## Executive Summary\n\n",
                  "This inventory catalogs all original pages discovered on the official University of Swat website (`https://uswat.edu.pk/`), their original URLs, proposed Next.js routes, research status, extracted contents, and implementation status.\n\n",
                  "| # | Page Title / Subject | Category | Original URL | Proposed Next.js Route | Research Status | Extracted Details | Associated Images | Impl. Status |\n",
                  "|---|---|---|---|---|---|---|---|---|\n"]

    for i, it in enumerate(inventory_items):
        summary = f"{it['headings_count']} headings, {it['paragraphs_count']} paragraphs"
        if it['documents_count'] > 0:
            summary += f", {it['documents_count']} docs"
        img_info = f"{len(it['local_images'])} saved" if it['local_images'] else f"{it['images_found']} found"
        md_content.append(f"| {i+1} | {it['title'][:40]} | {it['category']} | [{it['original_url']}]({it['original_url']}) | `{it['proposed_route']}` | {it['research_status']} | {summary} | {img_info} | {it['implementation_status']} |\n")

    # Add detailed sections
    md_content.append("\n\n## Discovered Downloads & Official Documents\n\n")
    all_docs = []
    for it in inventory_items:
        for d in it.get('documents', []):
            all_docs.append(d)
            
    md_content.append(f"Total official downloadable documents cataloged: **{len(all_docs)}**\n\n")
    for d in all_docs[:60]:
        md_content.append(f"- [{d['title']}]({d['url']})\n")

    full_md = "".join(md_content)
    
    with open('docs/source-inventory.md', 'w', encoding='utf-8') as f:
        f.write(full_md)
        
    with open('source-inventory.md', 'w', encoding='utf-8') as f:
        f.write(full_md)

    print(f"Inventory generated successfully! Total assets mapped: {len(asset_mapping)}")

if __name__ == '__main__':
    main()
