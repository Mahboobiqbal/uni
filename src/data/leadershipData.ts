/**
 * University of Swat — Leadership & Administrative Governance
 * Authenticated from uswat.edu.pk (2026)
 */

export interface Officer {
  name: string;
  designation: string;
  departmentOffice: string;
  email: string;
  phone?: string;
  image?: string;
  bio?: string;
}

export interface LeadershipGroup {
  category: string;
  description: string;
  officers: Officer[];
}

export const viceChancellorProfile = {
  name: "Prof. Dr. Husnul Amin",
  designation: "Vice Chancellor",
  institution: "University of Swat",
  image: "/images/leadership/vc-prof-dr-husnul-amin.jpeg",
  email: "vc@uswat.edu.pk",
  phone: "+92-946-730510",
  message: `It is with immense pride, humility, and a profound sense of responsibility that I assume the office of Vice Chancellor of the University of Swat. I am honored to serve this distinguished institution at a pivotal moment in its journey and look forward to working collectively with our students, faculty, staff, alumni, partners, and stakeholders to shape a future defined by excellence, innovation, and impact.

The University of Swat stands at the historic crossroad of ancient civilization and contemporary scholastic ambitions. Our primary mission is to expand academic horizons, ensure merit and transparent governance, empower our female scholars across specialized sub-campuses, and integrate modern green technologies such as campus-wide solarization into sustainable regional development.`,
  secretariat: [
    {
      name: "Mr. Tariq Kamal",
      designation: "Private Secretary to Vice Chancellor / Focal Person PM Portal",
      email: "pstovc@uswat.edu.pk",
      phone: "+92-946-730510",
      image: "/images/leadership/vc-office_1_img.jpg",
    },
    {
      name: "Mr. Naveed Iqbal",
      designation: "Assistant / Staff Officer to Vice Chancellor",
      email: "naveediqbal@uswat.edu.pk",
      image: "/images/leadership/vc-office_2_img.jpg",
    },
  ],
  credentials: [
    { title: "Ph.D & Post-Doctorate", detail: "Distinguished Academic Scholar" },
    { title: "Strategic Vision", detail: "Institutional Excellence & Solarization" },
    { title: "Appointed", detail: "Competent Authority, KP (Oct 2026)" },
  ],
};

export const administrativeGovernance: LeadershipGroup[] = [
  {
    category: "Executive Statutory Officers",
    description: "Principal administrative and academic executive officers of the university.",
    officers: [
      {
        name: "Dr. Arshad Ali Khan",
        designation: "Registrar",
        departmentOffice: "Office of the Registrar",
        email: "registrar@uswat.edu.pk",
        image: "/images/leadership/registrar-dr-arshad-ali.jpeg",
        bio: "Oversees academic statutory bodies, syndicate meetings, human resources, faculty appointments, and regulatory compliance.",
      },
      {
        name: "Mr. Munir Ahmad",
        designation: "Treasurer",
        departmentOffice: "Treasurer Office",
        email: "treasurer@uswat.edu.pk",
        bio: "Manages university fiscal budgets, financial accounts, student fee reconciliation, and annual audits.",
      },
      {
        name: "Mr. Muhammad Riaz",
        designation: "Controller of Examinations",
        departmentOffice: "Controller of Examination Office",
        email: "controller@uswat.edu.pk",
        bio: "Supervises university-wide semester examinations, transcript generation, degree verifications, and convocation rosters.",
      },
      {
        name: "Prof. Dr. Muhammad Qasim",
        designation: "Dean, Faculty of Chemical & Life Sciences",
        departmentOffice: "Deans Council",
        email: "dean.cls@uswat.edu.pk",
        bio: "Coordinates academic curriculum and research development across Chemistry, Environmental Sciences, Botany, and Zoology.",
      },
    ],
  },
  {
    category: "Directorates & Student Support Services",
    description: "Specialized directorates ensuring institutional growth, research development, and campus welfare.",
    officers: [
      {
        name: "Dr. Anwar Hussain",
        designation: "Director ORIC",
        departmentOffice: "Office of Research, Innovation & Commercialization",
        email: "oric@uswat.edu.pk",
        bio: "Heads industrial linkages, academic patents, faculty research grants, and student entrepreneurship incubators.",
      },
      {
        name: "Dr. Amjad Ali",
        designation: "Director of Sports",
        departmentOffice: "Directorate of Sports",
        email: "dsports@uswat.edu.pk",
        bio: "Organizes HEC inter-varsity athletic tournaments, badminton championships, cricket leagues, and youth fitness programs.",
      },
      {
        name: "Dr. Wajid Rashid",
        designation: "Chief Librarian",
        departmentOffice: "Central Library Office",
        email: "wajid@uswat.edu.pk",
        bio: "Oversees the central library catalog, HEC Digital Library subscriptions, research journal access, and student reading halls.",
      },
      {
        name: "Engr. Muhammad Ali",
        designation: "Director of Works",
        departmentOffice: "Directorate of Works",
        email: "works@uswat.edu.pk",
        bio: "Manages infrastructure development at Charbagh Main Campus, civil construction, and the campus solarization project.",
      },
      {
        name: "Mr. Asad Ullah",
        designation: "Director IT",
        departmentOffice: "Directorate of Information Technology",
        email: "dit@uswat.edu.pk",
        bio: "Administers campus-wide optical fiber network, Campus Management System (CMS), e-Office, and high-speed Wi-Fi.",
      },
    ],
  },
];
