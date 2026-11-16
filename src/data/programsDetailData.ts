/**
 * Detailed Academic Program Specifications for Key Degrees
 * Extracted from official University of Swat curricula & prospectuses
 */

export interface ProgramDetail {
  slug: string;
  name: string;
  degreeLevel: "Undergraduate (BS)" | "Graduate (MS/MPhil)" | "Doctoral (PhD)";
  duration: string;
  creditHours: number;
  facultyGroup: string;
  departmentId: string;
  departmentName: string;
  description: string;
  eligibility: string;
  learningOutcomes: string[];
  careerProspects: string[];
  semesterOutline: {
    semester: string;
    courses: string[];
  }[];
  feePerSemester: string;
}

export const programsDetailCatalog: ProgramDetail[] = [
  {
    slug: "bs-computer-science",
    name: "BS Computer Science (BSCS)",
    degreeLevel: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    creditHours: 132,
    facultyGroup: "Faculty of Physical, Numerical & Computational Sciences",
    departmentId: "computer-software-technology",
    departmentName: "Department of Computer and Software Technology",
    description: "Learn algorithms, software engineering, AI, databases, and how computers work. Accredited by NCEAC / HEC.",
    eligibility: "Intermediate (F.Sc Pre-Engineering / ICS / General Science with Mathematics) or equivalent with minimum 50% marks.",
    learningOutcomes: [
      "Master software development life cycle using modern frameworks and languages (Python, Java, C++, TypeScript).",
      "Design efficient algorithmic solutions, data structures, and distributed databases.",
      "Apply machine learning and computer vision to regional and national industrial challenges.",
      "Understand computer systems architecture, operating systems, and computer network security.",
    ],
    careerProspects: [
      "Software Engineer / Full-Stack Developer",
      "Data Scientist / AI Engineer",
      "Systems Architect & Cloud Administrator",
      "Information Security & Cyber Analyst",
      "Database Administrator & DevSecOps Engineer",
    ],
    semesterOutline: [
      { semester: "Semester 1", courses: ["Programming Fundamentals", "Programming Fundamentals Lab", "Discrete Structures", "English Composition", "Applied Physics"] },
      { semester: "Semester 2", courses: ["Object-Oriented Programming", "OOP Lab", "Calculus & Analytical Geometry", "Digital Logic Design", "Pakistan Studies"] },
      { semester: "Semester 3", courses: ["Data Structures & Algorithms", "DSA Lab", "Computer Organization & Assembly", "Linear Algebra", "Technical Writing"] },
      { semester: "Semester 4", courses: ["Database Systems", "Database Lab", "Operating Systems", "OS Lab", "Probability & Statistics"] },
      { semester: "Semester 5", courses: ["Computer Networks", "Theory of Automata", "Software Engineering", "Artificial Intelligence", "University Elective I"] },
      { semester: "Semester 6", courses: ["Compiler Construction", "Design & Analysis of Algorithms", "Information Security", "Web Technologies", "CS Elective I"] },
      { semester: "Semester 7", courses: ["Final Year Project I (Capstone)", "Parallel & Distributed Computing", "CS Elective II", "CS Elective III", "Professional Ethics"] },
      { semester: "Semester 8", courses: ["Final Year Project II (Capstone)", "CS Elective IV", "Entrepreneurship", "General Elective"] },
    ],
    feePerSemester: "PKR 34,500 (Open Merit) / PKR 58,000 (Self Finance)",
  },
  {
    slug: "bs-software-engineering",
    name: "BS Software Engineering (BSSE)",
    degreeLevel: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    creditHours: 130,
    facultyGroup: "Faculty of Physical, Numerical & Computational Sciences",
    departmentId: "computer-software-technology",
    departmentName: "Department of Computer and Software Technology",
    description: "Build complex, dependable software using modern methods — agile development, cloud systems, testing, and DevOps.",
    eligibility: "F.Sc Pre-Engineering / ICS / A-Level with Mathematics (minimum 50% marks).",
    learningOutcomes: [
      "Specify, model, design, and verify high-performance enterprise software systems.",
      "Apply automated testing, continuous integration, and continuous deployment (CI/CD).",
      "Architect microservices, RESTful APIs, and secure cloud applications.",
      "Lead collaborative software engineering teams using modern agile paradigms.",
    ],
    careerProspects: [
      "Software Quality Assurance (SQA) Engineer",
      "Frontend / Backend / Full-Stack Engineer",
      "DevOps & Infrastructure Architect",
      "Scrum Master & Technical Product Manager",
    ],
    semesterOutline: [
      { semester: "Semester 1", courses: ["Introduction to Computing", "Programming Fundamentals", "Calculus", "Functional English", "Applied Physics"] },
      { semester: "Semester 2", courses: ["Object-Oriented Software Design", "OOP Lab", "Software Engineering Concepts", "Discrete Mathematics", "Islamic Studies"] },
      { semester: "Semester 3", courses: ["Data Structures", "Software Requirement Engineering", "Linear Algebra", "Digital Logic", "Communication Skills"] },
      { semester: "Semester 4", courses: ["Software Architecture & Design", "Database Management Systems", "Operating Systems", "Statistics & Probability"] },
      { semester: "Semester 5", courses: ["Software Construction & Development", "Software Quality Engineering", "Computer Networks", "Technical & Business Writing"] },
      { semester: "Semester 6", courses: ["Software Project Management", "Web Application Development", "Information Security", "SE Elective I"] },
      { semester: "Semester 7", courses: ["Senior Design Project I", "Formal Methods in SE", "SE Elective II", "Cloud Computing"] },
      { semester: "Semester 8", courses: ["Senior Design Project II", "Software Verification & Validation", "Professional Practice", "General Elective"] },
    ],
    feePerSemester: "PKR 34,500 (Open Merit) / PKR 58,000 (Self Finance)",
  },
  {
    slug: "bs-chemistry",
    name: "BS Chemistry (4-Year)",
    degreeLevel: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    creditHours: 134,
    facultyGroup: "Faculty of Chemical & Life Sciences",
    departmentId: "chemistry",
    departmentName: "Department of Chemistry",
    description: "Study organic synthesis, spectroscopy, thermodynamics, and lab instruments for work in medicine and industry.",
    eligibility: "F.Sc Pre-Medical / Pre-Engineering with minimum 45% marks.",
    learningOutcomes: [
      "Operate advanced spectrophotometers, chromatography systems, and chemical synthesis rigs.",
      "Design organic reaction mechanisms, polymers, and organometallic compounds.",
      "Execute quality assurance protocols for pharmaceuticals, fertilizers, and environmental samples.",
    ],
    careerProspects: [
      "Pharmaceutical Research Scientist",
      "Quality Control Chemist (QC/QA)",
      "Environmental & Forensic Chemical Analyst",
      "Chemical Production & Polymer Technologist",
    ],
    semesterOutline: [
      { semester: "Semester 1", courses: ["Inorganic Chemistry I", "English I", "Mathematics I", "Physics I", "Islamic Studies"] },
      { semester: "Semester 2", courses: ["Organic Chemistry I", "English II", "Mathematics II", "Physics II", "Pakistan Studies"] },
      { semester: "Semester 3", courses: ["Physical Chemistry I", "Analytical Chemistry I", "English III", "General Elective I"] },
      { semester: "Semester 4", courses: ["Inorganic Chemistry II", "Organic Chemistry II", "Physical Chemistry II", "General Elective II"] },
      { semester: "Semester 5", courses: ["Advanced Organic Synthesis", "Spectroscopy", "Coordination Chemistry", "Chemical Kinetics"] },
      { semester: "Semester 6", courses: ["Quantum Chemistry", "Chromatography Techniques", "Polymer Chemistry", "Instrumental Analysis"] },
      { semester: "Semester 7", courses: ["Research Project / Thesis I", "Special Paper I", "Nuclear Chemistry", "Industrial Chemistry"] },
      { semester: "Semester 8", courses: ["Research Project / Thesis II", "Special Paper II", "Bio-inorganic Chemistry", "Seminar"] },
    ],
    feePerSemester: "PKR 31,000 (Open Merit) / PKR 52,000 (Self Finance)",
  },
  {
    slug: "bba-hons",
    name: "Bachelor of Business Administration (BBA Hons)",
    degreeLevel: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    creditHours: 132,
    facultyGroup: "Faculty of Management, Art & Social Sciences",
    departmentId: "management-commerce",
    departmentName: "Department of Management & Commerce",
    description: "Prepare for management and starting your own business — finance, marketing, supply chains, and teamwork.",
    eligibility: "Intermediate (FA / F.Sc / I.Com / ICS / A-Level) with minimum 45% marks.",
    learningOutcomes: [
      "Analyze financial statements, corporate valuation, and capital investment budgets.",
      "Formulate international marketing campaigns and digital growth strategies.",
      "Manage human capital, organizational culture, and business supply chains.",
    ],
    careerProspects: [
      "Corporate Financial Analyst",
      "Brand & Marketing Manager",
      "Banking & Investment Operations Officer",
      "Supply Chain & Operations Strategist",
      "Venture Founder & Entrepreneur",
    ],
    semesterOutline: [
      { semester: "Semester 1", courses: ["Principles of Management", "Financial Accounting I", "Microeconomics", "Business Mathematics", "English I"] },
      { semester: "Semester 2", courses: ["Principles of Marketing", "Financial Accounting II", "Macroeconomics", "Business Statistics", "English II"] },
      { semester: "Semester 3", courses: ["Cost Accounting", "Business Communication", "Organizational Behavior", "Sociology", "Pakistan Studies"] },
      { semester: "Semester 4", courses: ["Financial Management", "Marketing Management", "Business Law", "Human Resource Management", "Islamic Studies"] },
      { semester: "Semester 5", courses: ["Consumer Behavior", "Business Research Methods", "Operations Management", "Business Ethics"] },
      { semester: "Semester 6", courses: ["Strategic Management", "International Business", "Corporate Finance", "Major Specialization I"] },
      { semester: "Semester 7", courses: ["Entrepreneurship & SME Management", "Management Information Systems", "Major Specialization II", "Major Specialization III"] },
      { semester: "Semester 8", courses: ["Business Internship / Capstone Project", "Major Specialization IV", "Leadership & Governance", "Comprehensive Exam"] },
    ],
    feePerSemester: "PKR 32,500 (Open Merit) / PKR 55,000 (Self Finance)",
  },
  {
    slug: "ba-llb-law-and-shariah",
    name: "Bachelor of Laws (BA / LLB 5-Year)",
    degreeLevel: "Undergraduate (BS)",
    duration: "5 Years (10 Semesters)",
    creditHours: 166,
    facultyGroup: "Faculty of Religious, Languages, Humanities & Legal Studies",
    departmentId: "law-shariah",
    departmentName: "Department of Law & Shariah",
    description: "Recognized by the Pakistan Bar Council and HEC. Trains future lawyers and judges in constitutional, criminal, and Islamic law, with moot-court practice.",
    eligibility: "Intermediate / HSSC with minimum 50% marks + Valid LAT (Law Admission Test) score.",
    learningOutcomes: [
      "Draft legal briefs, pleadings, writs, contracts, and constitutional petitions.",
      "Master legal reasoning, advocacy, evidence evaluation, and judicial precedents.",
      "Advocate effectively in civil, criminal, and appellate judicial proceedings.",
    ],
    careerProspects: [
      "Advocate in High Court & District Judiciary",
      "Civil Judge / Judicial Magistrate",
      "Corporate Legal Advisor & In-House Counsel",
      "Public Prosecutor & Legal Officer",
    ],
    semesterOutline: [
      { semester: "Year 1", courses: ["English I & II", "Pakistan Studies & Islamic Studies", "Introduction to Sociology", "Principles of Political Science", "History of Legal Systems"] },
      { semester: "Year 2", courses: ["Islamic Jurisprudence", "English Jurisprudence", "Law of Torts", "Constitutional Law I (UK & US)", "Law of Contract I & II"] },
      { semester: "Year 3", courses: ["Pakistan Penal Code (Criminal Law)", "Law of Criminal Procedure", "Constitutional Law II (Pakistan)", "Human Rights Law", "Public International Law"] },
      { semester: "Year 4", courses: ["Civil Procedure Code", "Law of Evidence (Qanun-e-Shahadat)", "Company Law", "Transfer of Property Act", "Administrative Law"] },
      { semester: "Year 5", courses: ["Moot Court Trials & Trial Advocacy", "Legal Ethics & Professional Conduct", "Taxation & Banking Laws", "Alternative Dispute Resolution (ADR)", "Internship"] },
    ],
    feePerSemester: "PKR 36,000 (Open Merit) / PKR 60,000 (Self Finance)",
  },
  {
    slug: "bs-environmental-sciences",
    name: "BS Environmental Sciences (4-Year)",
    degreeLevel: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    creditHours: 134,
    facultyGroup: "Faculty of Chemical & Life Sciences",
    departmentId: "environmental-sciences",
    departmentName: "Department of Environmental Sciences",
    description: "Study climate change, rivers, pollution, disaster risk, and the mountain environment of the Hindukush-Himalaya.",
    eligibility: "F.Sc Pre-Medical / Pre-Engineering with minimum 45% marks.",
    learningOutcomes: [
      "Monitor air, water, and soil contaminants using EPA analytical standards.",
      "Conduct Environmental Impact Assessments (EIA) and Strategic Environmental Assessments (SEA).",
      "Formulate regional watershed management and disaster risk mitigation policies.",
    ],
    careerProspects: [
      "Environmental Protection Officer (EPA / Govt)",
      "EIA / HSE Consultant in Construction & Industry",
      "Climate Policy Researcher in International NGOs",
      "GIS & Hydrological Risk Analyst",
    ],
    semesterOutline: [
      { semester: "Semester 1", courses: ["Introduction to Environmental Science", "Biology I", "Chemistry I", "English I", "Islamic Studies"] },
      { semester: "Semester 2", courses: ["Environmental Chemistry", "Earth Sciences", "Mathematics", "English II", "Pakistan Studies"] },
      { semester: "Semester 3", courses: ["Ecology & Biodiversity", "Environmental Physics", "Statistics", "Computer Applications"] },
      { semester: "Semester 4", courses: ["Environmental Pollution", "Water Resource Management", "Environmental Microbiology", "Sociology"] },
      { semester: "Semester 5", courses: ["Environmental Impact Assessment (EIA)", "Solid Waste Management", "GIS & Remote Sensing", "Climate Change"] },
      { semester: "Semester 6", courses: ["Environmental Toxicology", "Air & Noise Pollution Control", "Environmental Biotechnology", "Environmental Law"] },
      { semester: "Semester 7", courses: ["Research Project / Thesis I", "Watershed Management", "Occupational Health & Safety (HSE)", "Elective I"] },
      { semester: "Semester 8", courses: ["Research Project / Thesis II", "Natural Disaster Management", "Renewable Energy Systems", "Seminar"] },
    ],
    feePerSemester: "PKR 31,000 (Open Merit) / PKR 50,000 (Self Finance)",
  },
];
