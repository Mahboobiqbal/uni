import re

path = 'D:/projects/uni/src/data/departmentsData.ts'
src = open(path, encoding='utf-8').read()

data = {
 'agricultural-sciences-forestry': {
   'aims': 'Focus on sustainable management and promotion of forest conservation for biological diversity, ecological, recreational, scientific and educational values and quality water production, for the greater good of the people of Pakistan and the world.',
   'description': 'Established in 2014. Provides quality education with relevance by acquiring highly qualified staff and state-of-the-art equipment and facilities in forestry.',
   'programs': ['BS Forestry (4 Years)', 'M.Phil. Forestry (2 Years)'],
   'head': '',
   'email': '',
 },
 'archaeology': {
   'aims': 'Conduct exploration, excavation, conservation and joint research publications with stakeholders, following the HEC New Undergraduate Education Policy. Offers internships, capstone projects, field experiences, museum management training and research paper writing.',
   'description': 'Formally started academic activities from Fall 2025 in Academic Block-B. Signed MoUs with the Directorate General of Archaeology and Museums, KP, and the Italian Archaeological Mission to Pakistan.',
   'programs': ['BS Archaeology (4 Years)'],
   'head': 'Dr. Zarawar Khan',
   'email': '',
 },
 'education-staff-training': {
   'aims': 'Cater to the needs of prospective school teachers and university faculty through pre-service teacher education programs and training. Produce educational managers, teacher educators and researchers.',
   'description': 'Established in 2010. Offers B.Ed (4-Year), Associate Degree in Education (2-Year), MPhil Education and PhD in Education.',
   'programs': ['B.Ed (Hons) (4 Years)', 'ADE (2 Years)', 'MPhil Education (2 Years)', 'PhD Education'],
   'head': 'Dr. Nasir Ahmad',
   'email': 'cest@uswat.edu.pk',
 },
 'pakistan-studies': {
   'aims': 'Provide excellence in Area Studies, especially Caucasia, Asia and China. Educate, train and produce highly skilled scholars in Pakistan Studies and related areas; promote research and quality education.',
   'description': 'Newly established multi-disciplinary department. Covers courses from Political Science, International Relations, Geography, History, Law, Arts, Languages, Economics, Sociology and Comparative Religions.',
   'programs': ['BS Pakistan Studies (4 Years)', 'MS Pakistan Studies (2 Years)'],
   'head': 'Dr. Sarfaraz Khan',
   'email': '',
 },
 'social-gender-studies': {
   'aims': 'Multidisciplinary social sciences training; facilitate students academically and professionally; produce socially active and productive citizens.',
   'description': 'Encompasses multidisciplinary approach from orthodox to heterodox sociological concepts. Offers BS Sociology, BS Criminology, MPhil in Sociology and PhD in Sociology.',
   'programs': ['BS Sociology (4 Years)', 'BS Criminology (4 Years)', 'MPhil Sociology (2 Years)', 'PhD Sociology'],
   'head': 'Dr. Ihsan Ullah Khan',
   'email': 'deptsgs@uswat.edu.pk',
 },
 'urdu': {
   'aims': 'Cultivate deep appreciation and understanding of Urdu language, literature and culture; equip students with knowledge and skills to engage critically with Urdu literature.',
   'description': 'Vibrant hub for Urdu studies and scholarship, with distinguished faculty contributing to national and international Urdu studies discourse.',
   'programs': ['BS Urdu (4 Years)'],
   'head': '',
   'email': '',
 },
}

for did, info in data.items():
    marker = 'id: "%s",' % did
    idx = src.find(marker)
    if idx == -1:
        print('not found', did); continue
    # find the block boundaries: from marker to the next 'contactEmail:' after idx
    ce_idx = src.find('contactEmail:', idx)
    # replace aims
    # aims field
    src = re.sub(r'(id: "%s",.*?aims: ")("")' % did, r'\g<1>%s"' % info['aims'].replace('"','\\"'), src, count=1, flags=re.DOTALL)
    # description
    src = re.sub(r'(id: "%s",.*?description: ")("")' % did, r'\g<1>%s"' % info['description'].replace('"','\\"'), src, count=1, flags=re.DOTALL)
    # programsOffered: [] -> list
    progs = '[' + ', '.join('"%s"' % p for p in info['programs']) + ']'
    src = re.sub(r'(id: "%s",.*?programsOffered: )\[\]' % did, r'\g<1>%s' % progs, src, count=1, flags=re.DOTALL)
    # headOfDepartment: "" -> value
    if info['head']:
        src = re.sub(r'(id: "%s",.*?headOfDepartment: )""' % did, r'\g<1>"%s"' % info['head'], src, count=1, flags=re.DOTALL)
    # contactEmail: "" -> value
    if info['email']:
        # replace the contactEmail that follows this dept block
        # find position
        block_start = src.find(marker)
        ce = src.find('contactEmail:', block_start)
        # ensure it's the one in this block (before next 'id: "')
        next_id = src.find('id: "', ce+1)
        if next_id == -1: next_id = len(src)
        if ce < next_id:
            src = src[:ce] + 'contactEmail: "%s",' % info['email'] + src[ce+len('contactEmail: "",'):]
            # fix if it was contactEmail: "",
            pass

open(path, 'w', encoding='utf-8').write(src)
print('done')
