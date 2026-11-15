import os, re, json, time
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

BASE = "https://uswat.edu.pk"
OUT = "D:/projects/uni/public/images/uos"
MANIFEST = "D:/projects/uni/src/data/uos-scraped-manifest.json"

for sub in ["leadership","faculty","campus-and-events","unassigned-queue"]:
    os.makedirs(f"{OUT}/{sub}", exist_ok=True)

HEADERS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}

def fetch(url, retries=3):
    for i in range(retries):
        try:
            r = requests.get(url, headers=HEADERS, timeout=30)
            if r.status_code == 200:
                return r.text
            print("  HTTP", r.status_code, url)
        except Exception as e:
            print("  ERR", e, url)
        time.sleep(2)
    return None

def slugify(s):
    s = re.sub(r'[^a-zA-Z0-9]+', '-', (s or '').strip().lower())
    return s.strip('-')[:80] or "item"

def download_image(url, folder, name_hint):
    try:
        r = requests.get(url, headers=HEADERS, timeout=30)
        if r.status_code != 200 or len(r.content) < 500:
            return None
        ct = r.headers.get('content-type','')
        ext = '.jpg'
        if 'png' in ct: ext='.png'
        elif 'webp' in ct: ext='.webp'
        else:
            p = urlparse(url).path.lower()
            for e in ['.png','.jpg','.jpeg','.webp','.gif']:
                if p.endswith(e):
                    ext = '.jpg' if e=='.jpeg' else e
        base = slugify(name_hint)
        path = os.path.join(folder, base + ext)
        i=1
        while os.path.exists(path):
            path = os.path.join(folder, f"{base}-{i}{ext}")
            i+=1
        with open(path, 'wb') as f:
            f.write(r.content)
        return path.replace("D:/projects/uni/", "").replace("\\","/")
    except Exception as e:
        print("  DL ERR", e, url)
        return None

manifest = {"people": [], "images": []}

# ---------- Department list ----------
print("Fetching main campus for department links...")
html = fetch(BASE + "/maincampus")
soup = BeautifulSoup(html, 'html.parser')
dept_urls = set()
for a in soup.find_all('a', href=True):
    h = a['href']
    if 'department' in h.lower():
        dept_urls.add(h if h.startswith('http') else urljoin(BASE, h))

def dept_slug(url):
    path = urlparse(url).path.rstrip('/')
    return path.split('/')[-1].lower()

seen_slugs = set()
unique_depts = []
for u in dept_urls:
    sl = dept_slug(u)
    if sl in seen_slugs:
        continue
    seen_slugs.add(sl)
    unique_depts.append(u)
print("Unique departments:", len(unique_depts))

def parse_faculty_table(soup, dept_name, dept_url):
    people = []
    table = soup.find('table')
    if not table:
        return people
    for tr in table.find_all('tr'):
        img = tr.find('img')
        img_url = None
        if img and img.get('src'):
            src = img['src']
            low = src.lower()
            if 'silhouette' not in low and 'default' not in low and 'placeholder' not in low and 'logo' not in low:
                img_url = urljoin(dept_url, src)
        text_cell = None
        for td in tr.find_all('td'):
            if td.find(['h3','h4','h5','h6']) or td.find('b'):
                text_cell = td
                break
        if not text_cell:
            continue
        name = ""
        for tag in ['h3','h4','h5','h6']:
            h = text_cell.find(tag)
            if h:
                name = h.get_text(strip=True)
                break
        if not name:
            b = text_cell.find('b')
            if b:
                name = b.get_text(strip=True)
        if not name:
            continue
        # designation: first bold not name/email/cv
        designation = ""
        for b in text_cell.find_all('b'):
            bt = b.get_text(strip=True)
            if bt and bt != name and 'e-mail' not in bt.lower() and 'email' not in bt.lower() and 'cv' not in bt.lower():
                designation = bt
                break
        # email
        email = ""
        a = text_cell.find('a', href=lambda x: x and x.startswith('mailto:'))
        if a:
            email = a['href'].replace('mailto:','').strip()
        # qualifications: remaining text lines
        lines = [l.strip() for l in text_cell.get_text('\n').split('\n') if l.strip()]
        lines = [l for l in lines if l not in (name, designation) and '@' not in l and l.lower() not in ('e-mail:','email:','cv')]
        qualification = " | ".join(lines)
        people.append({
            "name": name,
            "designation": designation,
            "qualification": qualification,
            "email": email,
            "department": dept_name,
            "image_url": img_url,
            "source_url": dept_url,
        })
    return people

all_people = []

# ---------- Scrape departments ----------
for url in unique_depts:
    print("\n===", url)
    html = fetch(url)
    if not html:
        continue
    soup = BeautifulSoup(html, 'html.parser')
    title = soup.find('title')
    dept_name = title.get_text().split('–')[0].strip() if title else url
    dept_name = dept_name.replace('– UNIVERSITY OF SWAT','').strip()
    h1 = soup.find('h1')
    if (not dept_name or 'department' not in dept_name.lower()) and h1:
        dept_name = h1.get_text(strip=True)
    people = parse_faculty_table(soup, dept_name, url)
    print(f"  found {len(people)} faculty")
    for p in people:
        local = None
        if p['image_url']:
            hint = slugify(p['name']) + "-" + slugify(dept_name)
            local = download_image(p['image_url'], f"{OUT}/faculty", hint)
        p['local_image'] = local
        all_people.append(p)
        manifest["people"].append(p)
    time.sleep(0.8)

# ---------- Leadership / office pages ----------
print("\n=== Leadership offices ===")
office_pages = [
    ("https://uswat.edu.pk/vc-office", "Vice Chancellor's Secretariat"),
    ("https://uswat.edu.pk/provost-office", "Provost Office"),
    ("https://uswat.edu.pk/registeror-office", "Registrar Office"),
    ("https://uswat.edu.pk/controller-of-examination-office", "Controller of Examinations"),
    ("https://uswat.edu.pk/treasurer-office", "Treasurer Office"),
    ("https://uswat.edu.pk/oric-2", "ORIC"),
    ("https://uswat.edu.pk/office-of-the-pro-vice-chancellor-pro-vc", "Pro-Vice Chancellor"),
]
for url, label in office_pages:
    print("\n---", label, url)
    html = fetch(url)
    if not html:
        continue
    soup = BeautifulSoup(html, 'html.parser')
    # find all img + nearby text
    for img in soup.find_all('img'):
        src = img.get('src','')
        if not src or 'logo' in src.lower() or 'icon' in src.lower():
            continue
        alt = img.get('alt','').strip()
        container = img.find_parent(['div','td','section','article','li','figure'])
        text = container.get_text(' ', strip=True) if container else ''
        # try to extract a name: look for "Dr." / "Prof." / "Mr." / "Ms." patterns
        m = re.search(r'(Prof\.?\s*Dr\.?|Dr\.?|Mr\.?|Ms\.?|Mrs\.?)\s+[A-Z][a-zA-Z\. ]{3,40}', text)
        name = m.group(0).strip() if m else alt
        # email
        em = re.search(r'[\w.\-]+@uswat\.edu\.pk', text)
        email = em.group(0) if em else ''
        # designation: line after name maybe; grab text snippet
        print(f"   IMG alt='{alt[:40]}' name='{name[:50]}' email='{email}' src={src[:70]}")
        # download
        hint = slugify(name) + "-" + slugify(label)
        local = download_image(src, f"{OUT}/leadership", hint)
        # only record if we got a plausible name
        if name and len(name) > 4:
            manifest["people"].append({
                "name": name,
                "designation": label,
                "qualification": "",
                "email": email,
                "department": label,
                "image_url": src,
                "local_image": local,
                "source_url": url,
            })
    time.sleep(0.8)

# ---------- Save manifest ----------
with open(MANIFEST, 'w', encoding='utf-8') as f:
    json.dump(manifest, f, indent=2, ensure_ascii=False)
print("\nManifest saved. People:", len(manifest['people']))
print("Images downloaded:", sum(1 for _ in __import__('os').walk(OUT) for f in _[2]))

