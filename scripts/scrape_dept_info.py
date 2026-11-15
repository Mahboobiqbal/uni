import requests
from bs4 import BeautifulSoup
import json

urls = {
 'agricultural-sciences-forestry': 'https://uswat.edu.pk/department-of-agricultural-sciences-and-forestry/',
 'archaeology': 'https://uswat.edu.pk/department-of-archaeology/',
 'education-staff-training': 'https://uswat.edu.pk/department_of_education_and_staff_training/',
 'pakistan-studies': 'https://uswat.edu.pk/department_of_pakistan_studies/',
 'social-gender-studies': 'https://uswat.edu.pk/department-of-social-and-gender-studies/',
 'urdu': 'https://uswat.edu.pk/department-of-urdu/',
}

out = {}
for k,u in urls.items():
    r = requests.get(u, timeout=30, headers={'User-Agent':'Mozilla/5.0'})
    soup = BeautifulSoup(r.text, 'html.parser')
    # Collect all text blocks (p, li, h*) in order
    blocks = []
    for el in soup.find_all(['h1','h2','h3','h4','h5','p','li']):
        t = el.get_text(' ', strip=True)
        if t and len(t) > 2:
            blocks.append(t)
    out[k] = blocks
    # write per-dept file
    with open('D:/projects/uni/deptinfo_%s.txt' % k, 'w', encoding='utf-8') as f:
        f.write('\n'.join(blocks))

print('done')
