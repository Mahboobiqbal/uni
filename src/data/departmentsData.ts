/**
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

export interface FacultyCategory {
  name: string;
  slug: string;
  color: string;
  departments: FacultyDepartment[];
}

export const facultiesCatalog: FacultyCategory[] = [
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

export const allDepartments: FacultyDepartment[] = facultiesCatalog.flatMap((f) => f.departments);
