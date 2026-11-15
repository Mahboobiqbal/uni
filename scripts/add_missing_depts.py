import json

manifest = json.load(open('D:/projects/uni/src/data/uos-scraped-manifest.json', encoding='utf-8'))
people = manifest['people']

def norm_img(p):
    if not p: return None
    return p.replace('public/images/uos/', '/images/uos/')

def esc(s):
    return (s or '').replace('"', '\\"').replace('\n', ' ')

targets = [
    ('Department of Agricultural Sciences and Forestry', 'agricultural-sciences-forestry', 'Chemical & Life Sciences'),
    ('Department of Archaeology', 'archaeology', 'Languages, Humanities & Law'),
    ('Department of Education and Staff Training', 'education-staff-training', 'Management & Social Sciences'),
    ('Department of Pakistan Studies', 'pakistan-studies', 'Languages, Humanities & Law'),
    ('Department of Social and Gender Studies', 'social-gender-studies', 'Management & Social Sciences'),
    ('Department of Urdu', 'urdu', 'Languages, Humanities & Law'),
]

def build_dept(name, did, faculty_group):
    ps = [p for p in people if p['department'] == name]
    entries = []
    for p in ps:
        parts = ['name: "%s"' % esc(p['name']), 'designation: "%s"' % esc(p.get('designation') or '')]
        q = esc(p.get('qualification') or '')
        if q:
            parts.append('qualification: "%s"' % q)
        img = norm_img(p.get('local_image'))
        if img:
            parts.append('image: "%s"' % img)
        entries.append('          { ' + ', '.join(parts) + ' }')
    fm = '        facultyMembers: [\n' + ',\n'.join(entries) + '\n        ],\n' if entries else ''
    obj = '''      {
        id: "%s",
        name: "%s",
        facultyGroup: "%s",
        campus: "Charbagh Main Campus",
        aims: "",
        description: "",
        programsOffered: [],
        headOfDepartment: "",
%s        contactEmail: "",
      },
''' % (did, esc(name), faculty_group, fm)
    return obj

# anchor includes the opening brace of the original department
anchors = {
    'agricultural-sciences-forestry': '      {\n        id: "zoology",\n',
    'archaeology': '      {\n        id: "shangla-subcampus",\n',
    'education-staff-training': '      {\n        id: "media-communication",\n',
    'pakistan-studies': '      {\n        id: "shangla-subcampus",\n',
    'social-gender-studies': '      {\n        id: "media-communication",\n',
    'urdu': '      {\n        id: "shangla-subcampus",\n',
}

path = 'D:/projects/uni/src/data/departmentsData.ts'
src = open(path, encoding='utf-8').read()

by_anchor = {}
for name, did, fg in targets:
    by_anchor.setdefault(anchors[did], []).append((name, did, fg))

for anchor, items in by_anchor.items():
    block = ''
    for name, did, fg in items:
        block += build_dept(name, did, fg)
    idx = src.find(anchor)
    if idx == -1:
        print('anchor not found:', repr(anchor))
        continue
    src = src[:idx] + block + src[idx:]
    print('inserted', len(items), 'before', anchor.strip().split(chr(10))[1].strip())

open(path, 'w', encoding='utf-8').write(src)
print('done')
