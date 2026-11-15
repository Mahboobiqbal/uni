path = 'D:/projects/uni/src/data/departmentsData.ts'
src = open(path, encoding='utf-8').read()

entries = [
 ('Dr. Niamat Ullah', 'Professor', 'E-mail: niamat@uswat.edu.pk', '/images/uos/faculty/dr-niamat-ullah-department-of-computer-and-software-technology-1.png'),
 ('Dr. Sana Ullah', 'Professor and Chairman', 'Postdoc, GYEONGSANG National University South Korea (2019) | Postdoc, ISEP/INESC-TEC, Porto, Portugal (2015) | PhD (Wireless Networks), Inha University, South Korea (2011) | E-mail: sana@uswat.edu.pk', '/images/uos/faculty/dr-sana-ullah-department-of-computer-and-software-technology-1.jpg'),
 ('Dr. Amjad Ali', 'Associate Professor', 'E-mail: amjad@uswat.edu.pk', '/images/uos/faculty/dr-amjad-ali-department-of-computer-and-software-technology-1.jpg'),
 ('Dr. Kifayat Ullah', 'Assistant Professor', 'MS Coordinator | E-mail: kifayat@uswat.edu.pk', '/images/uos/faculty/dr-kifayat-ullah-department-of-computer-and-software-technology-1.jpg'),
 ('Dr. Fazal Qudus Khan', 'Assistant Professor', 'E-mail: fazal.qadus@uswat.edu.pk', '/images/uos/faculty/dr-fazal-qudus-khan-department-of-computer-and-software-technology-1.jpg'),
 ('Mr. Kiramat Rahman', 'Assistant Professor', 'E-mail: kiramat@uswat.edu.pk', '/images/uos/faculty/mr-kiramat-rahman-department-of-computer-and-software-technology-1.jpg'),
 ('Mr. Fida Hussain', 'Assistant Professor', 'E-mail: fida@uswat.edu.pk', '/images/uos/faculty/mr-fida-hussain-department-of-computer-and-software-technology-1.jpg'),
 ('Dr. Muzammil Khan', 'Assistant Professor', 'HEC Approved PhD Supervisor | PhD (Data Science and Text Processing), Preston University Islamabad | E-mail: muzammil@uswat.edu.pk', None),
 ('Mr. Umar Ali', 'Lecturer', 'MS Computer Science (Asian Institute of Technology, Thailand) | E-mail: umarali@uswat.edu.pk', '/images/uos/faculty/mr-umar-ali-department-of-computer-and-software-technology-1.jpg'),
 ('Mr. Naeem Ullah', 'Lecturer', 'E-mail: naeem@uswat.edu.pk', '/images/uos/faculty/mr-naeem-ullah-department-of-computer-and-software-technology-1.jpg'),
 ('Dr. Usman Ali', 'Lecturer', 'E-mail: usman@uswat.edu.pk', '/images/uos/faculty/dr-usman-ali-department-of-computer-and-software-technology-1.jpg'),
 ('Mr. Abdul Haq', 'Lecturer', 'E-mail: abdulhaq@uswat.edu.pk', '/images/uos/faculty/mr-abdul-haq-department-of-computer-and-software-technology-1.png'),
]

def esc(s):
    return s.replace('"', '\\"')

lines = []
for name, desig, qual, img in entries:
    parts = [' name: "%s"' % esc(name), ' designation: "%s"' % esc(desig), ' qualification: "%s"' % esc(qual)]
    if img:
        parts.append(' image: "%s"' % img)
    lines.append(' { ' + ', '.join(parts) + ' },')
new_block = ' facultyMembers: [\n' + '\n'.join(lines) + '\n ],'

# Find the computer-software-technology block
marker = 'id: "computer-software-technology",'
idx = src.find(marker)
# find facultyMembers: [ after idx
fm = src.find('facultyMembers: [', idx)
# find the closing ], after fm
close = src.find('],', fm)
assert fm != -1 and close != -1
src = src[:fm] + new_block + src[close+2:]

open(path, 'w', encoding='utf-8').write(src)
print('done')
