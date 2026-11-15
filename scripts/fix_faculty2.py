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

path = 'D:/projects/uni/src/data/departmentsData.ts'
src = open(path, encoding='utf-8').read()

# Fix image paths globally: public/images/uos/ -> /images/uos/
src = src.replace('image: "public/images/uos/', 'image: "/images/uos/')

# For each department with scraped data but no facultyMembers, insert before contactEmail
# Find department blocks: locate 'name: "Department XXX",' then find the next 'contactEmail:' 
# and insert facultyMembers before it if not already present.

lines = src.split('\n')
out = []
i = 0
n = len(lines)
while i < n:
    out.append(lines[i])
    # detect a Department name line
    m = re.search(r'name: "(Department[^"]*)",', lines[i])
    if m:
        dept_name = m.group(1)
        scraped = by_dept.get(norm(dept_name), [])
        # look ahead for contactEmail, ensuring no facultyMembers in between
        # find the index of next contactEmail
        j = i
        has_fm = False
        ce_idx = None
        while j < n and j < i + 60:
            if 'facultyMembers:' in lines[j]:
                has_fm = True
            if 'contactEmail:' in lines[j]:
                ce_idx = j
                break
            j += 1
        if scraped and ce_idx is not None and not has_fm:
            # build facultyMembers block at correct indentation (8 spaces)
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
            block = ['        facultyMembers: ['] + [e + (',' if k < len(entries)-1 else '') for k,e in enumerate(entries)] + ['        ],']
            # insert before ce_idx (relative to current out length)
            # We've already appended up to i; need to append lines i+1..ce_idx-1, then block, then continue
            # Append intermediate lines
            for k in range(i+1, ce_idx):
                out.append(lines[k])
            out.extend(block)
            i = ce_idx - 1  # will i+=1 -> ce_idx
    i += 1

new_src = '\n'.join(out)
open(path, 'w', encoding='utf-8').write(new_src)
print("done")