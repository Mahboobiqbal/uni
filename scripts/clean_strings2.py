import re

path = 'D:/projects/uni/src/data/departmentsData.ts'
src = open(path, encoding='utf-8').read()

# Targeted concatenation fixes
repls = [
    ('Gold MedalistAssistant Professor', 'Assistant Professor'),
    ('Gold MedalistIn-charge', 'In-charge'),
    ('LecturerGold Medalist', 'Lecturer'),
    ('LecturerStudy Leave', 'Lecturer (on study leave)'),
    ('Professor & ChairpersonPro Vice Chancellor', 'Professor & Chairperson / Pro Vice Chancellor'),
    ('Director /Professor', 'Director / Professor'),
    ('Assistant | Professor', 'Assistant Professor'),
]
for a,b in repls:
    src = src.replace(a, b)

# 'Dr. Shahid Ali' and 'Statistics' as standalone designation -> empty
src = src.replace('designation: "Dr. Shahid Ali"', 'designation: ""')
src = src.replace('designation: "Statistics"', 'designation: ""')

# Gold Medalist alone: move to qualification. Handle pattern:
# designation: "Gold Medalist", qualification: "X"  -> designation: "", qualification: "Gold Medalist | X" (if X not already gold)
def fix_gold(m):
    qual = m.group(1)
    if 'Gold Medalist' not in qual:
        qual = 'Gold Medalist | ' + qual if qual else 'Gold Medalist'
    return 'designation: "", qualification: "%s"' % qual
src = re.sub(r'designation: "Gold Medalist", qualification: "([^"]*)"', fix_gold, src)

# 'Gold Medalist | :' junk in qualification
src = src.replace('Gold Medalist | :', '')

# Normalize 'Assistant Professor of | Mathematics' style junk: remove stray pipes
def clean_qual_pipes(m):
    q = m.group(1)
    q = q.replace(' | :', '').replace('| :', '')
    q = re.sub(r'\s*\|\s*\|\s*', ' | ', q)
    q = q.strip(' |').strip()
    return 'qualification: "%s"' % q
src = re.sub(r'qualification: "([^"]*)"', clean_qual_pipes, src)

# collapse double spaces
src = re.sub(r'  +', ' ', src)

open(path, 'w', encoding='utf-8').write(src)
print('done')
