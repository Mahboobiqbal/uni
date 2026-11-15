import re

path = 'D:/projects/uni/src/data/departmentsData.ts'
src = open(path, encoding='utf-8').read()

def clean_desig(s):
    s = s.replace('DirectorAssociate Professor', 'Director / Associate Professor')
    s = s.replace('Assistant | Professor', 'Assistant Professor')
    s = s.replace('Associate | Professor', 'Associate Professor')
    s = s.replace('on study LeaveLecturer', 'Lecturer (on study leave)')
    s = s.replace('on study Leave', '(on study leave)')
    s = s.replace('Gold Medalist ', 'Gold Medalist, ')
    s = re.sub(r'\s+', ' ', s).strip()
    s = s.strip('|').strip()
    return s

def clean_qual(s):
    for junk in ['E-mail', 'Email', 'CV', 'Google Scholar', 'Research Gate', '\u202a', '\u202c', '\u200b', '‪', '‬']:
        s = s.replace(junk, '')
    s = re.sub(r'\s*\|\s*\|\s*', ' | ', s)
    s = re.sub(r'\s+', ' ', s).strip()
    s = s.strip('|').strip()
    # collapse duplicate pipes
    while ' |  | ' in s:
        s = s.replace(' |  | ', ' | ')
    return s

def repl_desig(m):
    return 'designation: "%s"' % clean_desig(m.group(1))

def repl_qual(m):
    return 'qualification: "%s"' % clean_qual(m.group(1))

src = re.sub(r'designation: "([^"]*)"', repl_desig, src)
src = re.sub(r'qualification: "([^"]*)"', repl_qual, src)

open(path, 'w', encoding='utf-8').write(src)
print('done')
