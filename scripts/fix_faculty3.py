import json, re

manifest = json.load(open('D:/projects/uni/src/data/uos-scraped-manifest.json', encoding='utf-8'))
people = manifest['people']

def norm(s):
    s = (s or '').lower()
    s = s.replace('&', 'and')
    s = re.sub(r'[^a-z0-9 ]+', ' ', s)
    s = re.sub(r'\s+', ' ', s).strip()
    return s

by_dept = {}
for p in people:
    by_dept.setdefault(norm(p['department']), []).append(p)

# manual mapping: file dept id -> scraped dept name
mapping = {
    "law-shariah": "Department of Law & Shari�a",
    "pashto-local-languages": "Department of Pashto",
    "tourism-hospitality": "Department of Tourism and Hospitality",
    "biotechnology-genetics": "Department of Biotechnology, Genetics, Forensic and Microbiology",
}

path = 'D:/projects/uni/src/data/departmentsData.ts'
src = open(path, encoding='utf-8').read()

for dept_id, scraped_name in mapping.items():
    scraped = by_dept.get(norm(scraped_name), [])
    if not scraped:
        print(dept_id, "no scraped data")
        continue
    # find the department block by id
    id_marker = 'id: "%s",' % dept_id
    idx = src.find(id_marker)
    if idx == -1:
        print(dept_id, "not found")
        continue
    # find contactEmail after idx
    ce = src.find('contactEmail:', idx)
    # check if facultyMembers already between
    segment = src[idx:ce]
    if 'facultyMembers:' in segment:
        print(dept_id, "already has facultyMembers")
        continue
    # build block
    entries = []
    for p in scraped:
        name = p['name'].replace('"', '\\"')
        desig = (p.get('designation') or '').replace('"', '\\"')
        qual = (p.get('qualification') or '').replace('"', '\\"')
        img = p.get('local_image')
        if img:
            img = img.replace('public/images/uos/', '/images/uos/')
        parts = ['name: "%s"' % name, 'designation: "%s"' % desig]
        if qual:
            parts.append('qualification: "%s"' % qual)
        if img:
            parts.append('image: "%s"' % img)
        entries.append('          { ' + ', '.join(parts) + ' }')
    block = '        facultyMembers: [\n' + ',\n'.join(entries) + '\n        ],\n'
    # insert before contactEmail line: find the newline before 'contactEmail:'
    insert_pos = src.rfind('\n', 0, ce) + 1
    src = src[:insert_pos] + block + src[insert_pos:]
    print(dept_id, "inserted", len(scraped))

open(path, 'w', encoding='utf-8').write(src)
print("done")
