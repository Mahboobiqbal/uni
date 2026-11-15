/**
 * University of Swat — Leadership & Administrative Governance
 * Verified from uswat.edu.pk
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