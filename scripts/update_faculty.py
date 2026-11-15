import json, re

manifest = json.load(open('D:/projects/uni/src/data/uos-scraped-manifest.json', encoding='utf-8'))
people = manifest['people']

def norm(s):
    s = (s or '').lower()
    s = s.replace('&', 'and')
    s = re.sub(r'[^a-z0-9 ]+', ' ', s)
    s = re.sub(r'\s+', ' ', s).strip()
    return s

# group scraped people by normalized dept name
by_dept = {}
for p in people:
    by_dept.setdefault(norm(p['department']), []).append(p)

path = 'D:/projects/uni/src/data/departmentsData.ts'
src = open(path, encoding='utf-8').read()

# For each department in file, find its name, match to scraped, replace facultyMembers
# We'll process department blocks: find 'id: "xxx",\n        name: "YYY",' then later facultyMembers: [...]
# Strategy: use regex to replace facultyMembers arrays one at a time, tracking which department we're in.

# Find all department names in file in order
dept_name_pattern = re.compile(r'name: "(Department[^"]*)",')
names_in_file = dept_name_pattern.findall(src)
print("departments in file:", len(names_in_file))

# We'll do a global replace using a function that needs context (current dept).
# Instead, iterate: find positions of each 'facultyMembers: [...]' and preceding department name.

# Build list of (start, end) of facultyMembers arrays
arr_pattern = re.compile(r'facultyMembers: \[[^\]]*\]', re.DOTALL)
matches = list(arr_pattern.finditer(src))
print("facultyMembers arrays:", len(matches))

# Determine department for each array by searching backwards for the nearest 'name: "Department..."'
def nearest_dept_name(pos):
    # search backwards from pos for name: "Department..."
    segment = src[:pos]
    idx = segment.rfind('name: "Department')
    if idx == -1:
        return None
    m = re.search(r'name: "(Department[^"]*)"', segment[idx:idx+120])
    return m.group(1) if m else None

new_src = src
# process from end to start to keep offsets
for m in reversed(matches):
    dept_name = nearest_dept_name(m.start())
    nd = norm(dept_name) if dept_name else None
    scraped = by_dept.get(nd, []) if nd else []
    # build replacement array
    if scraped:
        entries = []
        for p in scraped:
            # skip leadership offices (not academic) - already filtered by dept match
            name = p['name'].replace('"', '\\"')
            desig = (p.get('designation') or '').replace('"', '\\"')
            qual = (p.get('qualification') or '').replace('"', '\\"')
            img = p.get('local_image')
            img_part = ', image: "%s"' % img if img else ''
            qual_part = ', qualification: "%s"' % qual if qual else ''
            entries.append('          { name: "%s", designation: "%s"%s%s }' % (name, desig, qual_part, img_part))
        replacement = 'facultyMembers: [\n' + ',\n'.join(entries) + '\n        ]'
    else:
        replacement = m.group(0)  # keep as-is
    new_src = new_src[:m.start()] + replacement + new_src[m.end():]
    print(f"  {dept_name}: {len(scraped)} scraped -> {'updated' if scraped else 'kept'}")

open(path, 'w', encoding='utf-8').write(new_src)
print("done")
