p = 'src/data/leadershipData.ts'
s = open(p, encoding='utf-8').read()
idx = s.index('export const administrativeGovernance')
head = s[:idx]
new_tail = r'''export const administrativeGovernance: LeadershipGroup[] = [
  {
    category: "Executive Statutory Officers",
    description: "Principal administrative and academic executive officers of the university.",
    officers: [
      {
        name: "Prof. Dr. Husnul Amin",
        designation: "Vice Chancellor",
        departmentOffice: "Office of the Vice Chancellor",
        email: "vc@uswat.edu.pk",
        phone: "+92-946-730510",
        image: "/images/leadership/vc-prof-dr-husnul-amin.jpeg",
        bio: "Vice Chancellor, University of Swat.",
      },
      {
        name: "Prof. Dr. Muhammad Qasim",
        designation: "Pro-Vice Chancellor",
        departmentOffice: "Office of the Pro-Vice Chancellor",
        email: "",
        image: "/images/leadership/pro-vc-prof-dr-muhammad-qasim.jpg",
        bio: "Pro-Vice Chancellor, University of Swat.",
      },
      {
        name: "Dr. Arshad Ali Khan",
        designation: "Registrar",
        departmentOffice: "Office of the Registrar",
        email: "registrar@uswat.edu.pk",
        image: "/images/leadership/registrar-dr-arshad-ali-khan.jpg",
        bio: "Oversees academic statutory bodies, syndicate meetings, human resources, faculty appointments, and regulatory compliance.",
      },
      {
        name: "Mr. Mahboob Ur Rahman",
        designation: "Treasurer",
        departmentOffice: "Treasurer Office",
        email: "mahboob@uswat.edu.pk",
        bio: "Manages university fiscal budgets, financial accounts, student fee reconciliation, and annual audits.",
      },
      {
        name: "Aziz ur Rehman",
        designation: "Controller of Examinations",
        departmentOffice: "Controller of Examination Office",
        email: "",
        bio: "Supervises university-wide semester examinations, transcript generation, degree verifications, and convocation rosters.",
      },
      {
        name: "Dr. Muhammad Imad Khan",
        designation: "Provost",
        departmentOffice: "Provost Office",
        email: "provost@uswat.edu.pk",
        bio: "Provost and In-charge Guest House, University of Swat.",
      },
    ],
  },
  {
    category: "Directorates and Student Support Services",
    description: "Specialized directorates ensuring institutional growth, research development, and campus welfare.",
    officers: [
      {
        name: "Dr. Anwar Hussain",
        designation: "Director ORIC",
        departmentOffice: "Office of Research, Innovation and Commercialization",
        email: "anwar@uswat.edu.pk",
        image: "/images/leadership/oric-dr-anwar-hussain.jpg",
        bio: "Heads industrial linkages, academic patents, faculty research grants, and student entrepreneurship incubators.",
      },
    ],
  },
];
'''
open(p, 'w', encoding='utf-8').write(head + new_tail)
print('updated')
'''
open('D:/projects/uni/scripts/update_leadership.py','w',encoding='utf-8').write('''
p = 'src/data/leadershipData.ts'
s = open(p, encoding='utf-8').read()
idx = s.index('export const administrativeGovernance')
head = s[:idx]
new_tail = """export const administrativeGovernance: LeadershipGroup[] = [
  {
    category: "Executive Statutory Officers",
    description: "Principal administrative and academic executive officers of the university.",
    officers: [
      {
        name: "Prof. Dr. Husnul Amin",
        designation: "Vice Chancellor",
        departmentOffice: "Office of the Vice Chancellor",
        email: "vc@uswat.edu.pk",
        phone: "+92-946-730510",
        image: "/images/leadership/vc-prof-dr-husnul-amin.jpeg",
        bio: "Vice Chancellor, University of Swat.",
      },
      {
        name: "Prof. Dr. Muhammad Qasim",
        designation: "Pro-Vice Chancellor",
        departmentOffice: "Office of the Pro-Vice Chancellor",
        email: "",
        image: "/images/leadership/pro-vc-prof-dr-muhammad-qasim.jpg",
        bio: "Pro-Vice Chancellor, University of Swat.",
      },
      {
        name: "Dr. Arshad Ali Khan",
        designation: "Registrar",
        departmentOffice: "Office of the Registrar",
        email: "registrar@uswat.edu.pk",
        image: "/images/leadership/registrar-dr-arshad-ali-khan.jpg",
        bio: "Oversees academic statutory bodies, syndicate meetings, human resources, faculty appointments, and regulatory compliance.",
      },
      {
        name: "Mr. Mahboob Ur Rahman",
        designation: "Treasurer",
        departmentOffice: "Treasurer Office",
        email: "mahboob@uswat.edu.pk",
        bio: "Manages university fiscal budgets, financial accounts, student fee reconciliation, and annual audits.",
      },
      {
        name: "Aziz ur Rehman",
        designation: "Controller of Examinations",
        departmentOffice: "Controller of Examination Office",
        email: "",
        bio: "Supervises university-wide semester examinations, transcript generation, degree verifications, and convocation rosters.",
      },
      {
        name: "Dr. Muhammad Imad Khan",
        designation: "Provost",
        departmentOffice: "Provost Office",
        email: "provost@uswat.edu.pk",
        bio: "Provost and In-charge Guest House, University of Swat.",
      },
    ],
  },
  {
    category: "Directorates and Student Support Services",
    description: "Specialized directorates ensuring institutional growth, research development, and campus welfare.",
    officers: [
      {
        name: "Dr. Anwar Hussain",
        designation: "Director ORIC",
        departmentOffice: "Office of Research, Innovation and Commercialization",
        email: "anwar@uswat.edu.pk",
        image: "/images/leadership/oric-dr-anwar-hussain.jpg",
        bio: "Heads industrial linkages, academic patents, faculty research grants, and student entrepreneurship incubators.",
      },
    ],
  },
];
"""
open(p, 'w', encoding='utf-8').write(head + new_tail)
print('updated')
''')
print("script written")