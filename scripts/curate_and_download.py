import os
import re
import json
import time
import urllib3
import requests
from urllib.parse import urlparse

urllib3.disable_warnings()

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def clean_filename(name):
    name = re.sub(r'[^\w\-_\.]', '_', name)
    return name[:60].strip('_')

def download_file(url, target_path):
    os.makedirs(os.path.dirname(target_path), exist_ok=True)
    if os.path.exists(target_path) and os.path.getsize(target_path) > 1000:
        return True
    
    # Try high-res first
    high_res_url = re.sub(r'-\d+x\d+(\.[a-zA-Z]+)$', r'\1', url)
    for u in [high_res_url, url]:
        try:
            res = requests.get(u, headers=HEADERS, verify=False, timeout=12)
            if res.status_code == 200 and len(res.content) > 500:
                with open(target_path, 'wb') as f:
                    f.write(res.content)
                print(f"Downloaded: {os.path.basename(target_path)} ({len(res.content)} bytes)")
                return True
        except Exception:
            pass
        time.sleep(0.05)
    return False

def main():
    with open('src/data/crawled_pages.json', 'r', encoding='utf-8') as f:
        pages = json.load(f)

    asset_map = {}
    
    # Specific Curated Downloads for Each Section
    
    # 1. Leadership
    leadership_targets = [
        ('https://uswat.edu.pk/wp-content/uploads/2026/10/WhatsApp-Image-2026-10-05-at-10.42.00.jpeg', 'public/images/leadership/vc-prof-dr-husnul-amin.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/2022/04/unnamed-19-150x150.jpg', 'public/images/leadership/ps-to-vc-tariq-kamal.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/2019/10/Naveed-Iqbal-Picture.jpg', 'public/images/leadership/naveed-iqbal-vc-office.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/2025/10/wajid-Rashid-removebg-preview-e1759734976721-150x150.png', 'public/images/leadership/dr-wajid-rashid-librarian.png'),
        ('https://uswat.edu.pk/wp-content/uploads/2019/09/Amjad-Ali-Picture-150x150.jpeg', 'public/images/leadership/dr-amjad-ali-director-sports.jpg'),
    ]
    
    # 2. Campus & Scenery
    campus_targets = [
        ('https://uswat.edu.pk/wp-content/uploads/2019/09/River_Swat_Pakistan_3.jpg', 'public/images/campus/river-swat-valley.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2021-11-05-at-10.51.45-AM-pflqkzvktg8ddutd0sn4prwl1tj4kzufodulzc1nea.jpeg', 'public/images/campus/main-campus-gate.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/elementor/thumbs/WC-01-qifli6radkjm2a5bb91tvyv4g9k11d9zck5nxzbeeq.jpg', 'public/images/campus/women-campus-building.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/elementor/thumbs/admin-p8hrk8vsk45l6ari014ojebledgmeg2aw4enkbd1o2.jpg', 'public/images/campus/administration-block.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/elementor/thumbs/exam-p8hrn65ptk5pamikxamwanr7xj1qcjo8mlh1bb0yb6.jpg', 'public/images/campus/examination-block.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/elementor/thumbs/uswat1-rc51evr8y8oyeetuy6h6hbdtiros5qns10scre2xo0.jpg', 'public/images/campus/charbagh-campus-aerial.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-06-at-14.57.18-1024x341.jpeg', 'public/images/campus/campus-landscape-panorama.jpg'),
    ]
    
    # 3. Facilities & Student Life
    facilities_targets = [
        ('https://uswat.edu.pk/wp-content/uploads/2022/09/Honarable-VC-Sb-with-runniner-up-badminton-team-Zona-A-of-HEC.jpg', 'public/images/facilities/sports-badminton-hec-championship.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/2022/09/IMG-20220129-WA0015-1-1-1024x462.jpg', 'public/images/facilities/cricket-tournament.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/2022/09/IMG-20220313-WA0080-1-1024x462.jpg', 'public/images/facilities/football-tournament.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/2022/09/IMG-20220217-WA0022-1-1024x462.jpg', 'public/images/facilities/sports-award-ceremony.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/2019/09/WhatsApp-Image-2021-06-01-at-4.17.57-PM-e1622630495596-150x150.jpeg', 'public/images/facilities/central-library-reading-hall.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/elementor/thumbs/ORIC-okbh91fiha4e6no6guo2gtcj25nohm5k8yo2pewble.jpeg', 'public/images/facilities/oric-incubation-center.jpg'),
    ]
    
    # 4. Department Faculty Portraits
    department_faculty_targets = [
        ('https://uswat.edu.pk/wp-content/uploads/2025/09/Niamat-Ullah-Professor-BPS-21-UoS-Picture-1.png', 'public/images/departments/dr-niamat-ullah-cs.png'),
        ('https://uswat.edu.pk/wp-content/uploads/2019/09/sanaullah-1.jpg', 'public/images/departments/dr-sana-ullah-cs.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/2019/09/DSCN0300.jpg', 'public/images/departments/dr-amjad-ali-cs.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-25-at-12.51.17-e1706263309704-150x150.jpeg', 'public/images/departments/dr-najeeb-ur-rehman-chemistry.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/2021/04/fazal-150x150.jpg', 'public/images/departments/dr-fazal-mabood-chemistry.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/2020/05/Dr-M-Omer-pic-for-UoS-Website.jpg', 'public/images/departments/dr-muhammad-omer-chemistry.jpg'),
    ]
    
    # 5. News & Events (from October & November 2026)
    news_targets = [
        ('https://uswat.edu.pk/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2026-11-12-at-10.14.51-3-rw8c5wii3ht4ae9deu24pg4djcy1pwwzjlo7ej51bk.jpeg', 'public/images/news/news-nov-2026-symposium.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2026-11-12-at-10.28.04-3-e1794464892286-rw8fb1d6omojorxbs8klbecnhxbh6f1xfkf3uhe6eo.jpeg', 'public/images/news/news-nov-2026-academic-council.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2026-11-06-at-09.18.39-7-1-e1794464806778-rw8f8sj2cvlvyb6qw9mocyr0esdwsg50ggbckoq19s.jpeg', 'public/images/news/news-nov-2026-climate-conference.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2026-11-05-at-12.15.49-e1794464913272-rw8fbm1muzgus73afhidu94skehjvrc0uersekjils.jpeg', 'public/images/news/news-nov-2026-mou-signing.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2026-10-23-at-15.15.02-4-1-e1794464967317-rw8fczv2x7d1vj2xcl1m0ek81to07ptsp9ciu8hng0.jpeg', 'public/images/news/news-oct-2026-solarization-launch.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2026-10-26-at-09.55.49-1-e1794464984863-rw8fdfuc5dyxcwfpr9y9osj25dh8ukl8fgfrzxtyi8.jpeg', 'public/images/news/news-oct-2026-scci-collaboration.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2026-10-22-at-09.37.19-3-1-e1794465003688-rw8fdxp9r8ndhhpruzo6i60tfp17wtk4twu0473h80.jpeg', 'public/images/news/news-oct-2026-gandhara-mou.jpg'),
        ('https://uswat.edu.pk/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2026-10-15-at-11.56.56-4-1-e1794465026107-rw8fejbk4fgywiudcr0llikf3k2ntuxykvu65k7f8w.jpeg', 'public/images/news/news-oct-2026-italian-mission.jpg'),
    ]
    
    # 6. Automatic collection of additional department faculty photos
    for url, data in pages.items():
        slug = urlparse(url).path.strip('/')
        if slug.startswith('department') or slug.startswith('institute-') or slug.startswith('college-'):
            dept_name = slug.replace('department-of-', '').replace('department_of_', '')[:20]
            for i, img in enumerate(data.get('images', [])[:4]):
                src = img['src']
                alt = clean_filename(img.get('alt') or f'faculty_{i}')
                if any(x in src.lower() for x in ['.jpg', '.jpeg', '.png']) and not 'logo' in src.lower():
                    local_dest = f"public/images/departments/{dept_name}_{i}_{alt}.jpg"
                    department_faculty_targets.append((src, local_dest))

    all_download_lists = [
        leadership_targets,
        campus_targets,
        facilities_targets,
        department_faculty_targets,
        news_targets
    ]
    
    total_downloaded = 0
    for lst in all_download_lists:
        for orig_url, target_path in lst:
            if download_file(orig_url, target_path):
                asset_map[orig_url] = target_path.replace('public/', '/')
                total_downloaded += 1
            time.sleep(0.08)

    print(f"Successfully curated and downloaded {total_downloaded} primary assets!")
    
    with open('src/data/curated_assets.json', 'w', encoding='utf-8') as f:
        json.dump(asset_map, f, ensure_ascii=False, indent=2)

if __name__ == '__main__':
    main()
