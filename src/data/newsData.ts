/**
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
