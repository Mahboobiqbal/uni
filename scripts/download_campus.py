import requests, os, json

HEADERS = {'User-Agent':'Mozilla/5.0'}
r = requests.get('https://uswat.edu.pk/', headers=HEADERS, timeout=30)
from bs4 import BeautifulSoup
soup = BeautifulSoup(r.text, 'html.parser')
imgs = [i.get('src') for i in soup.find_all('img') if 'logo' not in (i.get('src') or '').lower() and '776305345' not in (i.get('src') or '')]

manifest = json.load(open('D:/projects/uni/src/data/uos-scraped-manifest.json', encoding='utf-8'))
manifest.setdefault('campus_images', [])

os.makedirs('D:/projects/uni/public/images/uos/campus-and-events', exist_ok=True)
for idx, url in enumerate(imgs, 1):
    try:
        rr = requests.get(url, headers=HEADERS, timeout=30)
        if rr.status_code != 200 or len(rr.content) < 1000:
            print('skip', url[:60]); continue
        ct = rr.headers.get('content-type','')
        ext = '.jpg'
        if 'png' in ct: ext='.png'
        elif 'webp' in ct: ext='.webp'
        fname = 'campus-event-%d%s' % (idx, ext)
        path = 'D:/projects/uni/public/images/uos/campus-and-events/' + fname
        with open(path, 'wb') as f:
            f.write(rr.content)
        rel = '/images/uos/campus-and-events/' + fname
        manifest['campus_images'].append({'source_url': url, 'local_image': rel})
        print('saved', fname, len(rr.content))
    except Exception as e:
        print('err', e, url[:60])

json.dump(manifest, open('D:/projects/uni/src/data/uos-scraped-manifest.json','w',encoding='utf-8'), indent=2, ensure_ascii=False)
print('total campus images:', len(manifest['campus_images']))
