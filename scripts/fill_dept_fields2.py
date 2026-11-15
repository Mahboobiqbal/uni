path = 'D:/projects/uni/src/data/departmentsData.ts'
src = open(path, encoding='utf-8').read()

data = {
 'agricultural-sciences-forestry': {
   'aims': 'Focus on sustainable management and promotion of forest conservation for biological diversity, ecological, recreational, scientific and educational values and quality water production, for the greater good of the people of Pakistan and the world.',
   'description': 'Established in 2014. Provides quality education with relevance by acquiring highly qualified staff and state-of-the-art equipment and facilities in forestry.',
   'head': '',
   'email': '',
 },
 'archaeology': {
   'aims': 'Conduct exploration, excavation, conservation and joint research publications with stakeholders, following the HEC New Undergraduate Education Policy. Offers internships, capstone projects, field experiences, museum management training and research paper writing.',
   'description': 'Formally started academic activities from Fall 2025 in Academic Block-B. Signed MoUs with the Directorate General of Archaeology and Museums, KP, and the Italian Archaeological Mission to Pakistan.',
   'head': 'Dr. Zarawar Khan',
   'email': '',
 },
 'education-staff-training': {
   'aims': 'Cater to the needs of prospective school teachers and university faculty through pre-service teacher education programs and training. Produce educational managers, teacher educators and researchers.',
   'description': 'Established in 2010. Offers B.Ed (4-Year), Associate Degree in Education (2-Year), MPhil Education and PhD in Education.',
   'head': 'Dr. Nasir Ahmad',
   'email': 'cest@uswat.edu.pk',
 },
 'pakistan-studies': {
   'aims': 'Provide excellence in Area Studies, especially Caucasia, Asia and China. Educate, train and produce highly skilled scholars in Pakistan Studies and related areas; promote research and quality education.',
   'description': 'Newly established multi-disciplinary department. Covers courses from Political Science, International Relations, Geography, History, Law, Arts, Languages, Economics, Sociology and Comparative Religions.',
   'head': 'Dr. Sarfaraz Khan',
   'email': '',
 },
 'social-gender-studies': {
   'aims': 'Multidisciplinary social sciences training; facilitate students academically and professionally; produce socially active and productive citizens.',
   'description': 'Encompasses multidisciplinary approach from orthodox to heterodox sociological concepts. Offers BS Sociology, BS Criminology, MPhil in Sociology and PhD in Sociology.',
   'head': 'Dr. Ihsan Ullah Khan',
   'email': 'deptsgs@uswat.edu.pk',
 },
 'urdu': {
   'aims': 'Cultivate deep appreciation and understanding of Urdu language, literature and culture; equip students with knowledge and skills to engage critically with Urdu literature.',
   'description': 'Vibrant hub for Urdu studies and scholarship, with distinguished faculty contributing to national and international Urdu studies discourse.',
   'head': '',
   'email': '',
 },
}

def esc(s):
    return s.replace('"', '\\"')

for did, info in data.items():
    marker = 'id: "%s",' % did
    idx = src.find(marker)
    if idx == -1:
        print('not found', did); continue
    next_idx = src.find('id: "', idx + len(marker))
    if next_idx == -1:
        next_idx = len(src)
    block = src[idx:next_idx]
    new_block = block
    if info['aims']:
        new_block = new_block.replace('aims: "",', 'aims: "%s",' % esc(info['aims']), 1)
    if info['description']:
        new_block = new_block.replace('description: "",', 'description: "%s",' % esc(info['description']), 1)
    if info['head']:
        new_block = new_block.replace('headOfDepartment: "",', 'headOfDepartment: "%s",' % esc(info['head']), 1)
    if info['email']:
        new_block = new_block.replace('contactEmail: "",', 'contactEmail: "%s",' % esc(info['email']), 1)
    src = src[:idx] + new_block + src[next_idx:]
    print('updated', did)

open(path, 'w', encoding='utf-8').write(src)
print('done')
