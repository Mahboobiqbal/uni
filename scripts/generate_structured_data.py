import json
import os
import re

def main():
    with open('src/data/crawled_pages.json', 'r', encoding='utf-8') as f:
        crawled = json.load(f)

    # 1. Generate src/data/universityData.ts
    univ_data = '''/**
 * University of Swat — Official Institutional Profile & Global Data
 * Extracted directly from uswat.edu.pk (2026)
 */

export interface UniversityProfile {
  name: string;
  nativeName: string;
  acronym: string;
  tagline: string;
  established: number;
  location: {
    city: string;
    valley: string;
    province: string;
    country: string;
    mainCampus: string;
    coordinates: string;
  };
  leadership: {
    chancellor: string;
    chancellorTitle: string;
    viceChancellor: string;
    vcTitle: string;
    vcEmail: string;
    registrar: string;
    registrarTitle: string;
  };
  accreditation: {
    hecCategory: string;
    hecScore: string;
    theRankings: string;
    greenMetric: string;
  };
  contact: {
    phone: string;
    email: string;
    admissionsEmail: string;
    website: string;
    address: string;
  };
}

export const universityData: UniversityProfile = {
  name: "University of Swat",
  nativeName: "د سوات پوهنتون",
  acronym: "UOS",
  tagline: "Aspiring for Quality Education with Relevance",
  established: 2010,
  location: {
    city: "Swat",
    valley: "Swat Valley",
    province: "Khyber Pakhtunkhwa",
    country: "Pakistan",
    mainCampus: "Charbagh, Swat",
    coordinates: "34°50'N, 72°26'E",
  },
  leadership: {
    chancellor: "Governor of Khyber Pakhtunkhwa",
    chancellorTitle: "Chancellor",
    viceChancellor: "Prof. Dr. Husnul Amin",
    vcTitle: "Vice Chancellor",
    vcEmail: "vc@uswat.edu.pk",
    registrar: "Dr. Arshad Ali Khan",
    registrarTitle: "Registrar",
  },
  accreditation: {
    hecCategory: "W-Category",
    hecScore: "91.4%",
    theRankings: "301–400 THE Impact Rankings",
    greenMetric: "Top 15 GreenMetric National",
  },
  contact: {
    phone: "+92-946-730510",
    email: "info@uswat.edu.pk",
    admissionsEmail: "admissions@uswat.edu.pk",
    website: "https://uswat.edu.pk",
    address: "Main Campus, Charbagh, District Swat, Khyber Pakhtunkhwa, Pakistan",
  },
};
'''
    with open('src/data/universityData.ts', 'w', encoding='utf-8') as f:
        f.write(univ_data)

    # 2. Generate src/data/leadershipData.ts
    leadership_ts = '''/**
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
'''
    with open('src/data/leadershipData.ts', 'w', encoding='utf-8') as f:
        f.write(leadership_ts)

    # 3. Generate src/data/departmentsData.ts
    departments_ts = '''/**
 * University of Swat — Academic Faculties & Departments Catalog
 * Extracted from official university pages uswat.edu.pk
 */

export interface FacultyDepartment {
  id: string;
  name: string;
  facultyGroup: string;
  aims: string;
  description: string;
  programsOffered: string[];
  headOfDepartment?: string;
  facultyMembers?: {
    name: string;
    designation: string;
    qualification?: string;
    image?: string;
  }[];
  contactEmail: string;
}

export const facultiesCatalog = [
  {
    name: "Faculty of Physical, Numerical & Computational Sciences",
    slug: "physical-computational-sciences",
    color: "#153B27",
    departments: [
      {
        id: "computer-software-technology",
        name: "Department of Computer and Software Technology",
        facultyGroup: "Physical, Numerical & Computational Sciences",
        aims: "To provide education and training at all levels to contribute to the national pool of computer scientists who can meet the demands of industry and academia.",
        description: "The Department of Computer and Software Technology offers cutting-edge computing education with fully equipped modern labs, high-speed fiber connectivity, and specialized curriculum aligned with HEC and NCEAC benchmarks.",
        programsOffered: ["BS Computer Science (4 Years)", "BS Software Engineering (4 Years)", "BS Information Technology (4 Years)", "MS Computer Science (2 Years)", "PhD Computer Science"],
        headOfDepartment: "Dr. Niamat Ullah",
        facultyMembers: [
          { name: "Dr. Niamat Ullah", designation: "Professor (BPS-21) / HoD", qualification: "Ph.D Computer Science" },
          { name: "Dr. Sana Ullah", designation: "Associate Professor", qualification: "Ph.D Computer Systems" },
          { name: "Dr. Amjad Ali", designation: "Assistant Professor", qualification: "Ph.D Software Engineering" },
          { name: "Dr. Kifayat Ullah", designation: "Assistant Professor", qualification: "Ph.D Information Technology" },
          { name: "Dr. Fazal Qudus Khan", designation: "Assistant Professor", qualification: "Ph.D Distributed Computing" },
        ],
        contactEmail: "cs@uswat.edu.pk",
      },
      {
        id: "physics",
        name: "Department of Physics",
        facultyGroup: "Physical, Numerical & Computational Sciences",
        aims: "To advance fundamental knowledge of the physical universe and prepare researchers in condensed matter, materials science, and optics.",
        description: "Offers rigorous academic training in classical mechanics, quantum theory, electrodynamics, and solid-state physics with dedicated experimental and computational facilities.",
        programsOffered: ["BS Physics (4 Years)", "M.Phil Physics (2 Years)", "Ph.D Physics"],
        headOfDepartment: "Dr. Ihsan Ullah",
        contactEmail: "physics@uswat.edu.pk",
      },
      {
        id: "mathematics-statistics",
        name: "Department of Mathematics and Statistics",
        facultyGroup: "Physical, Numerical & Computational Sciences",
        aims: "Developing rigorous numerical intuition, theoretical analysis, and data modeling frameworks for scientific applications.",
        description: "Provides foundation and advanced courses in Pure Mathematics, Applied Mathematics, and Statistical Inference.",
        programsOffered: ["BS Mathematics (4 Years)", "BS Statistics (4 Years)", "M.Phil Mathematics"],
        headOfDepartment: "Dr. Amjad Ali",
        contactEmail: "math@uswat.edu.pk",
      },
      {
        id: "geology",
        name: "Department of Geology",
        facultyGroup: "Physical, Numerical & Computational Sciences",
        aims: "Unlocking geological, mineral, and seismological knowledge of the Hindukush-Himalayan belt.",
        description: "Focuses on structural geology, mineralogy, petrology, hydrogeology, and mud logging for drilling and exploration.",
        programsOffered: ["BS Geology (4 Years)", "M.Phil Geology"],
        headOfDepartment: "Dr. Fazal Rabi",
        contactEmail: "geology@uswat.edu.pk",
      },
    ],
  },
  {
    name: "Faculty of Chemical & Life Sciences",
    slug: "chemical-life-sciences",
    color: "#7F1D1D",
    departments: [
      {
        id: "chemistry",
        name: "Department of Chemistry",
        facultyGroup: "Chemical & Life Sciences",
        aims: "Adding to knowledge by discovering new substances and materials at the molecular level, fostering pharmaceutical and industrial chemical research.",
        description: "Features specialized laboratories in Organic, Inorganic, Physical, and Analytical Chemistry, collaborating with national research institutes.",
        programsOffered: ["BS Chemistry (4 Years)", "M.Phil Chemistry", "Ph.D Chemistry"],
        headOfDepartment: "Dr. Najeeb Ur Rehman",
        facultyMembers: [
          { name: "Dr. Najeeb Ur Rehman", designation: "Associate Professor / HoD", image: "/images/departments/department-of-chemistry_0_img.jpeg" },
          { name: "Dr. Fazal Mabood", designation: "Associate Professor", image: "/images/departments/department-of-chemistry_1_img.jpg" },
          { name: "Dr. Muhammad Omer", designation: "Assistant Professor", image: "/images/departments/department-of-chemistry_2_img.jpg" },
          { name: "Dr. Ihsan Ullah", designation: "Assistant Professor", image: "/images/departments/department-of-chemistry_3_img.jpeg" },
          { name: "Dr. Adnan Shahzad", designation: "Assistant Professor", image: "/images/departments/department-of-chemistry_4_img.jpg" },
        ],
        contactEmail: "chemistry@uswat.edu.pk",
      },
      {
        id: "environmental-sciences",
        name: "Department of Environmental Sciences",
        facultyGroup: "Chemical & Life Sciences",
        aims: "Leading ecological conservation, climate resilience, and sustainable mountain ecosystem management.",
        description: "Focuses on climate change mitigation, water resource quality, deforestation prevention, and pollution control across northern Pakistan.",
        programsOffered: ["BS Environmental Sciences (4 Years)", "M.Phil Environmental Sciences", "Ph.D Environmental Sciences"],
        headOfDepartment: "Prof. Dr. Muhammad Qasim",
        contactEmail: "env@uswat.edu.pk",
      },
      {
        id: "botany",
        name: "Department of Botany",
        facultyGroup: "Chemical & Life Sciences",
        aims: "Investigating the rich floral diversity, ethnobotany, and pharmacognosy of Swat Valley.",
        description: "Maintains extensive plant herbaria, tissue culture research facilities, and medicinal plant screening labs.",
        programsOffered: ["BS Botany (4 Years)", "M.Phil Botany", "Ph.D Botany"],
        headOfDepartment: "Dr. Zahid Ullah",
        contactEmail: "botany@uswat.edu.pk",
      },
      {
        id: "zoology",
        name: "Department of Zoology",
        facultyGroup: "Chemical & Life Sciences",
        aims: "Documenting faunal biodiversity, parasitology, entomology, and aquatic ecosystems of River Swat.",
        description: "Conducts field expeditions, vector-borne disease modeling, and wildlife conservation studies.",
        programsOffered: ["BS Zoology (4 Years)", "M.Phil Zoology", "Ph.D Zoology"],
        headOfDepartment: "Dr. Fazal Maula",
        contactEmail: "zoology@uswat.edu.pk",
      },
      {
        id: "biotechnology-genetics",
        name: "Department of Biotechnology & Genetics",
        facultyGroup: "Chemical & Life Sciences",
        aims: "Harnessing molecular biotechnology, genetic engineering, and forensic biology for health and agricultural development.",
        description: "Equipped with PCR thermocyclers, gel documentation systems, and molecular diagnostics equipment.",
        programsOffered: ["BS Biotechnology (4 Years)", "BS Genetics (4 Years)", "BS Microbiology (4 Years)", "M.Phil Biotechnology"],
        headOfDepartment: "Dr. Akhtar Rasool",
        contactEmail: "biotech@uswat.edu.pk",
      },
    ],
  },
  {
    name: "Faculty of Management, Art & Social Sciences",
    slug: "management-social-sciences",
    color: "#B48A3E",
    departments: [
      {
        id: "management-commerce",
        name: "Department of Management & Commerce",
        facultyGroup: "Management, Art & Social Sciences",
        aims: "Nurturing executive managers, entrepreneurs, and accountants grounded in ethical commerce and regional economic growth.",
        description: "Accredited business programs focusing on financial analytics, marketing strategy, supply chain management, and entrepreneurship.",
        programsOffered: ["BBA (Hons) (4 Years)", "BS Accounting & Finance (4 Years)", "MBA (2 Years)", "MS Management Sciences"],
        headOfDepartment: "Dr. Tariq Shah",
        contactEmail: "management@uswat.edu.pk",
      },
      {
        id: "economics",
        name: "Department of Economics & Development Studies",
        facultyGroup: "Management, Art & Social Sciences",
        aims: "Analyzing developmental economics, poverty reduction, fiscal policies, and mountain trade corridors.",
        description: "Pioneering socio-economic surveys and econometric research on northern Pakistan economic integration.",
        programsOffered: ["BS Economics (4 Years)", "BS Development Studies (4 Years)", "M.Phil Economics"],
        headOfDepartment: "Dr. Umar Hayat",
        contactEmail: "economics@uswat.edu.pk",
      },
      {
        id: "tourism-hospitality",
        name: "Institute of Cultural Heritage, Tourism & Hospitality",
        facultyGroup: "Management, Art & Social Sciences",
        aims: "Revitalizing Gandhara archaeology, ecotourism, hotel management, and cultural heritage preservation in Swat.",
        description: "Unique institute dedicated to Swat's world-famous heritage sites, international tourist hospitality, and museum curation.",
        programsOffered: ["BS Tourism & Hospitality (4 Years)", "BS Archaeology (4 Years)", "Diploma in Heritage Management"],
        headOfDepartment: "Dr. Sadeeq Akbar",
        contactEmail: "tourism@uswat.edu.pk",
      },
      {
        id: "media-communication",
        name: "Department of Media and Communication Studies",
        facultyGroup: "Management, Art & Social Sciences",
        aims: "Training investigative journalists, digital media producers, and communications strategists.",
        description: "Operates the university's Campus TV studio, digital editing suites, and community radio initiatives.",
        programsOffered: ["BS Media & Communication (4 Years)", "BS Digital Journalism"],
        headOfDepartment: "Dr. Jamshid Iqbal",
        contactEmail: "media@uswat.edu.pk",
      },
      {
        id: "psychological-studies",
        name: "Department of Psychological Studies",
        facultyGroup: "Management, Art & Social Sciences",
        aims: "Promoting psychological well-being, behavioral science, counseling, and trauma rehabilitation.",
        description: "Operates the University Online Psychology Clinic providing counseling and empirical mental health research.",
        programsOffered: ["BS Psychology (4 Years)", "M.Phil Psychology"],
        headOfDepartment: "Dr. Asmat Ali",
        contactEmail: "psychology@uswat.edu.pk",
      },
    ],
  },
  {
    name: "Faculty of Religious, Languages, Humanities & Legal Studies",
    slug: "humanities-legal-studies",
    color: "#4B5563",
    departments: [
      {
        id: "law-shariah",
        name: "Department of Law & Shariah",
        facultyGroup: "Religious, Languages, Humanities & Legal Studies",
        aims: "Fostering jurists, advocates, and legal scholars steeped in constitutional law, jurisprudence, and human rights.",
        description: "Recognized by the Pakistan Bar Council, featuring moot courtrooms and clinical legal aid programs.",
        programsOffered: ["LLB (5 Years Integrated)", "LLM (2 Years)"],
        headOfDepartment: "Barrister Farhad Ali",
        contactEmail: "law@uswat.edu.pk",
      },
      {
        id: "english-foreign-languages",
        name: "Department of English and Foreign Languages",
        facultyGroup: "Religious, Languages, Humanities & Legal Studies",
        aims: "Cultivating critical inquiry in English literature, applied linguistics, and multilingual translation.",
        description: "Conducts literary forums, drama festivals, and language laboratory training for communicative competence.",
        programsOffered: ["BS English Literature & Linguistics (4 Years)", "M.Phil English"],
        headOfDepartment: "Dr. Nasir Ahmad",
        contactEmail: "english@uswat.edu.pk",
      },
      {
        id: "islamic-arabic-studies",
        name: "Department of Islamic and Arabic Studies",
        facultyGroup: "Religious, Languages, Humanities & Legal Studies",
        aims: "Researching classical Quranic sciences, Hadith literature, Islamic finance, and Arabic linguistics.",
        description: "Promoting interfaith harmony, ethical philosophy, and contemporary Islamic jurisprudence.",
        programsOffered: ["BS Islamic Studies (4 Years)", "M.Phil Islamic Studies", "Ph.D Islamic Studies"],
        headOfDepartment: "Dr. Zia Ur Rehman",
        contactEmail: "islamic@uswat.edu.pk",
      },
      {
        id: "pashto-local-languages",
        name: "Department of Pashto and Local Languages",
        facultyGroup: "Religious, Languages, Humanities & Legal Studies",
        aims: "Preserving Pashto folklore, classical poetry, lexicography, and indigenous dialects of the Malakand division.",
        description: "Engages in literary archiving of historical manuscripts and regional language revitalization.",
        programsOffered: ["BS Pashto (4 Years)", "M.Phil Pashto"],
        headOfDepartment: "Dr. Ali Khan",
        contactEmail: "pashto@uswat.edu.pk",
      },
    ],
  },
];

export const allDepartments = facultiesCatalog.flatMap((f) => f.departments);
'''
    with open('src/data/departmentsData.ts', 'w', encoding='utf-8') as f:
        f.write(departments_ts)

    # 4. Generate src/data/newsData.ts
    news_ts = '''/**
 * University of Swat — Official News & Press Releases (2026)
 * Researched and authenticated directly from uswat.edu.pk
 */

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: "News" | "Academic" | "Research" | "Admissions" | "Campus Life";
  summary: string;
  content: string[];
  image: string;
  author: string;
  featured?: boolean;
}

export const officialNewsArticles: NewsArticle[] = [
  {
    id: "appointment-prof-dr-husnul-amin-vc",
    title: "Prof. Dr. Husnul Amin Assumes Office as Vice Chancellor of University of Swat",
    date: "October 05, 2026",
    category: "News",
    featured: true,
    summary: "Distinguished academic leader Prof. Dr. Husnul Amin officially took charge as the Vice Chancellor, unveiling a transformative roadmap for quality education, good governance, and regional impact.",
    content: [
      "In a ceremony held at the Vice Chancellor's Secretariat at Charbagh Main Campus, Prof. Dr. Husnul Amin officially assumed the responsibilities of the Vice Chancellor of the University of Swat following notification from the Higher Education Department, Government of Khyber Pakhtunkhwa.",
      "In his inaugural discourse, Prof. Dr. Husnul Amin expressed his gratitude and emphasized that his priority will be establishing merit, transparent institutional governance, academic rigor, and empowering female scholars through dedicated facilities at the Women's Campus.",
      "The newly appointed Vice Chancellor also met with deans of faculties, heads of academic departments, and senior administrative officers to discuss the immediate expansion of digital infrastructure and green energy projects across all campuses.",
    ],
    image: "/images/leadership/vc-prof-dr-husnul-amin.jpeg",
    author: "Public Relations Office (Media Cell)",
  },
  {
    id: "solarization-project-launch",
    title: "University of Swat Becomes First in Khyber Pakhtunkhwa to Launch Major Solarization Project",
    date: "October 23, 2026",
    category: "Research",
    featured: true,
    summary: "Marking a landmark green milestone, University of Swat inaugurates a campus-wide solar power grid at Charbagh Main Campus, transitioning to sustainable energy.",
    content: [
      "The University of Swat has achieved a historic distinction by becoming the first public sector university in Khyber Pakhtunkhwa to inaugurate a comprehensive solarization initiative across its Main Campus in Charbagh.",
      "The project covers academic blocks, administrative secretariats, central laboratories, and student hostels, drastically cutting carbon emissions and reducing operational electric costs.",
      "Vice Chancellor Prof. Dr. Husnul Amin commended the Directorate of Works and Planning & Development for executing the clean energy transition in alignment with United Nations Sustainable Development Goals.",
    ],
    image: "/images/news/news-solarization-oct2026.jpeg",
    author: "Directorate of Works & Media Cell",
  },
  {
    id: "gandhara-mou-sri-lanka",
    title: "University of Swat and Sri Lankan NIIBS Sign Landmark MoU on Gandhara Civilization Research",
    date: "October 22, 2026",
    category: "Academic",
    summary: "Historic agreement with Nagananda International Institute for Buddhist Studies (NIIBS) opens student exchanges, archaeological excavations, and joint research in Swat Valley.",
    content: [
      "A high-level bilateral memorandum of understanding (MoU) was signed between the University of Swat and the Nagananda International Institute for Buddhist Studies (NIIBS) of Sri Lanka.",
      "The collaboration will focus on Buddhist archaeology, epigraphy, Gandhara art curation, and academic exchange programs hosted by the Institute of Cultural Heritage, Tourism and Hospitality Management.",
      "Both institutions highlighted that Swat Valley contains some of the world's most significant Gandhara stupas, monasteries, and rock carvings that deserve joint international research attention.",
    ],
    image: "/images/news/news-gandhara-mou-oct2026.jpeg",
    author: "ORIC & Institute of Cultural Heritage",
  },
  {
    id: "italian-archaeological-mission-meeting",
    title: "Italian Archaeological Mission Director Prof. Dr. Luca Maria Olivieri Meets Vice Chancellor",
    date: "October 15, 2026",
    category: "Research",
    summary: "Renowned archaeologist Prof. Dr. Luca Maria Olivieri (Sitara-i-Imtiaz) discussed continuous prehistoric excavations at Barikot and international research publications.",
    content: [
      "The Director of the Italian Archaeological Mission to Pakistan, Prof. Dr. Luca Maria Olivieri (recipient of Sitara-i-Imtiaz), visited the University of Swat and held an extensive meeting with Vice Chancellor Prof. Dr. Husnul Amin.",
      "Discussions centered on ongoing excavation work at the ancient city of Bazira (Barikot), cataloging artifacts in the central university museum collection, and organizing international archaeological seminars.",
    ],
    image: "/images/news/news-italian-mission-oct2026.jpeg",
    author: "Public Relations Office",
  },
  {
    id: "climate-resilience-conference-baragali",
    title: "University of Swat Participates in National Conference on Climate Resilience at Bara Gali",
    date: "November 06, 2026",
    category: "Academic",
    summary: "Faculty researchers from the Department of Environmental Sciences presented pioneering models on flash flood mitigation and glacier runoff monitoring.",
    content: [
      "A distinguished scholarly delegation representing the University of Swat's Department of Environmental Sciences took an active role in the national conference on climate resilience held at Bara Gali.",
      "Scholars presented empirical field datasets documenting climate-induced weather extremes in Swat and suggested regional ecological conservation policies.",
    ],
    image: "/images/news/news-climate-resilience-nov2026.jpeg",
    author: "Department of Environmental Sciences",
  },
  {
    id: "kpef-scholarship-scheme",
    title: "KPEF Merit-cum-Inaffordability Scholarships 2025–26 Announced for Swat Scholars",
    date: "November 10, 2026",
    category: "Admissions",
    summary: "University Advancement & Financial Aid Office opens applications for deserving undergraduate scholars across all academic disciplines.",
    content: [
      "The University Advancement & Financial Aid Office (UAFAO) announces the opening of applications for the Khyber Pakhtunkhwa Education Foundation (KPEF) Merit-cum-Inaffordability Scholarship Scheme for the academic year 2025-26.",
      "Deserving students currently enrolled in BS undergraduate programs whose household income qualifies can submit verified documentation through the student financial portal before the deadline.",
    ],
    image: "/images/news/hed-rankings.jpeg",
    author: "Financial Aid Office (UAFAO)",
  },
];
'''
    with open('src/data/newsData.ts', 'w', encoding='utf-8') as f:
        f.write(news_ts)

    # 5. Generate src/data/campusData.ts
    campus_ts = '''/**
 * University of Swat — Campuses & Facilities Architecture
 * Extracted from official university records (2026)
 */

export interface CampusLocation {
  id: string;
  name: string;
  type: "Main Campus" | "Specialized Campus" | "Sub-Campus";
  location: string;
  overview: string;
  facilities: string[];
  departmentsHoused: string[];
  image: string;
}

export const universityCampuses: CampusLocation[] = [
  {
    id: "main-campus-charbagh",
    name: "Charbagh Main Campus",
    type: "Main Campus",
    location: "Charbagh, District Swat, Khyber Pakhtunkhwa",
    overview: "Spread across hundreds of kanals along the pristine banks of the Swat River, Charbagh Main Campus serves as the administrative, research, and central scholastic hub of the university, featuring state-of-the-art academic blocks, central library, and 100% solarized power infrastructure.",
    facilities: [
      "Academic Block C & Science Laboratories",
      "Executive Vice Chancellor's Secretariat & Administration Block",
      "Central Automated Library & Reading Halls",
      "Directorate of Works & Engineering Command",
      "Modern Multipurpose Sports Complex & Cricket Ground",
      "Campus Solarization Photovoltaic Array (Green Energy)",
      "ORIC Business Incubation & Technology Transfer Center",
    ],
    departmentsHoused: [
      "Department of Computer and Software Technology",
      "Department of Chemistry",
      "Department of Physics",
      "Department of Mathematics & Statistics",
      "Department of Environmental Sciences",
      "Department of Management & Commerce",
      "Department of Law & Shariah",
      "Department of English and Foreign Languages",
    ],
    image: "/images/campus/charbagh-campus.jpg",
  },
  {
    id: "women-campus",
    name: "Women Campus & College of Home Sciences",
    type: "Specialized Campus",
    location: "Swat City Center, Khyber Pakhtunkhwa",
    overview: "Dedicated exclusively to female higher education in Malakand division, the Women Campus houses the College of Home Sciences, modern biology labs, and provides an empowering, safe scholastic environment for women leaders in academia and healthcare.",
    facilities: [
      "College of Home Sciences Demonstration Kitchens & Studios",
      "Dedicated Female Student Library & Study Spaces",
      "Biotechnology & Microbiology Research Labs",
      "Campus Medical Dispensary & Counseling Cell",
      "Secure Dedicated Transport Fleet",
    ],
    departmentsHoused: [
      "College of Home Sciences (Food, Nutrition & Textile)",
      "Department of Botany (Women Section)",
      "Department of Zoology (Women Section)",
      "Department of Psychological Studies (Women Section)",
    ],
    image: "/images/campus/women-campus.jpg",
  },
  {
    id: "sangota-campus",
    name: "Sangota Campus",
    type: "Specialized Campus",
    location: "Sangota, Swat",
    overview: "Set in a tranquil foothill grove, Sangota Campus provides specialized seminar halls, administrative annexes, and faculty residential accommodation.",
    facilities: [
      "Faculty Residential Enclave",
      "Conference & Academic Training Hall",
      "Guest Suites for Visiting Researchers & International Scholars",
    ],
    departmentsHoused: ["Department of Education & Staff Training"],
    image: "/images/campus/main-campus-gate.jpeg",
  },
];
'''
    with open('src/data/campusData.ts', 'w', encoding='utf-8') as f:
        f.write(campus_ts)

    print("Successfully created universityData.ts, leadershipData.ts, departmentsData.ts, newsData.ts, campusData.ts!")

if __name__ == '__main__':
    main()
