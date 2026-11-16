export type AnnouncementCategory =
  | "News"
  | "Admissions"
  | "Exams"
  | "Teachers"
  | "Students"
  | "Vacations";

export type BadgeTone =
  | "critical"
  | "emerald"
  | "amber"
  | "blue"
  | "purple"
  | "stone";

export interface NoticeCallout {
  title: string;
  text: string;
}

export interface Announcement {
  id: number;
  category: AnnouncementCategory;
  /** Badge pill label shown on the feed card & reader header. */
  badge: string;
  /** Visual tone of the badge pill (critical renders solid University Crimson). */
  tone: BadgeTone;
  /** Official reference number (without the "Reference:" prefix). */
  reference: string;
  /** Human-readable publish date (also used on cards). */
  date: string;
  title: string;
  snippet: string;
  paragraphs: string[];
  callout?: NoticeCallout;
  /** Sort timestamp (descending = most recent first). */
  ts: number;
}

/** Ordered sidebar categories — "Recent" is the default aggregated view. */
export const announcementCategories = [
  "Recent",
  "News",
  "Admissions",
  "Exams",
  "Teachers",
  "Students",
  "Vacations",
] as const;

export type CategoryView = (typeof announcementCategories)[number];

export const announcementsData: Announcement[] = [
  {
    id: 0,
    category: "News",
    badge: "Milestone",
    tone: "critical",
    reference: "UOS/WORKS/SOLAR-2026/102",
    date: "Oct 23, 2026",
    title: "University of Swat Launches Major Campus Solarization Project",
    snippet:
      "The first public university in KP to run its campus on solar energy.",
    paragraphs: [
      "In a landmark development for environmental sustainability, the University of Swat has become the first public sector university in Khyber Pakhtunkhwa to inaugurate a comprehensive solarization project across its Main Campus in Charbagh.",
      "The newly commissioned photovoltaic array powers academic blocks, research laboratories, the central library, and administrative secretariats, significantly mitigating carbon footprint and eliminating power disruptions during academic hours.",
      "Vice Chancellor Prof. Dr. Husnul Amin congratulated the Directorate of Works and Directorate of Planning and Development, underscoring that this initiative manifests the university's commitment to climate resilience and the UN Sustainable Development Goals.",
    ],
    callout: {
      title: "Environmental Impact",
      text: "Location: Charbagh Main Campus • Capacity: Grid-tied Clean Energy Infrastructure",
    },
    ts: 28,
  },
  {
    id: 1,
    category: "News",
    badge: "Official",
    tone: "emerald",
    reference: "UOS/REG/APPT-2026/911",
    date: "Oct 05, 2026",
    title: "Prof. Dr. Husnul Amin Assumes Office as Vice Chancellor",
    snippet:
      "Prof. Dr. Husnul Amin begins his term as Vice Chancellor.",
    paragraphs: [
      "It is hereby notified that Prof. Dr. Husnul Amin has assumed the charge of the office of Vice Chancellor, University of Swat, pursuant to the notification issued by the Higher Education Department, Government of Khyber Pakhtunkhwa.",
      "In his address to academic deans, chairpersons, and heads of sections, the Vice Chancellor declared that transparency, meritocracy, empowerment of female scholars across the Women's Campus, and technological modernization will form the bedrock of his tenure.",
      "All administrative directorates and academic departments are instructed to coordinate directly with the Vice Chancellor's Secretariat to ensure seamless execution of institutional roadmaps.",
    ],
    callout: {
      title: "VC Secretariat Secretariat",
      text: "Focal Person: PS to VC Mr. Tariq Kamal • Email: pstovc@uswat.edu.pk • Landline: 0946-730510",
    },
    ts: 27,
  },
  {
    id: 2,
    category: "Admissions",
    badge: "Admissions",
    tone: "blue",
    reference: "UOS/ADM/FALL-2026/044",
    date: "Oct 20, 2026",
    title: "Undergraduate Admissions Fall 2026 (Phase-II & Self-Finance)",
    snippet:
      "Online portal open for remaining seats in BS Computer Science, Software Engineering, Chemistry, BBA, and LLB programs.",
    paragraphs: [
      "Applications are invited from eligible candidates for admission to undergraduate degree programs (BS 4-Year and LLB 5-Year) for Fall 2026 Phase-II and Self-Finance quotas.",
      "Candidates can submit applications through the official online admission portal (admissions.uswat.edu.pk) and deposit processing fees at designated Bank of Khyber branches.",
      "Provisional merit lists and interview schedules will be uploaded to the official portal following the document verification cutoff.",
    ],
    callout: {
      title: "Admissions Helpline",
      text: "Directorate of Admissions: admissions@uswat.edu.pk • Phone: 0946-730514",
    },
    ts: 26,
  },
  {
    id: 3,
    category: "News",
    badge: "International",
    tone: "purple",
    reference: "UOS/ORIC/MOU-2026/018",
    date: "Oct 22, 2026",
    title: "Bilateral MoU Signed with Sri Lankan NIIBS for Gandhara Studies",
    snippet:
      "University of Swat partners with Nagananda International Institute for Buddhist Studies for joint excavations, conferences, and student exchanges.",
    paragraphs: [
      "A historic memorandum of understanding was officially signed between the University of Swat and the Nagananda International Institute for Buddhist Studies (NIIBS), Sri Lanka.",
      "The agreement establishes academic partnerships for cultural heritage conservation, joint archaeological research on ancient Gandhara sites in Swat, and faculty exchange programs.",
      "The Institute of Cultural Heritage, Tourism and Hospitality Management at UOS will spearhead the collaboration alongside international visiting delegations.",
    ],
    ts: 25,
  },
  {
    id: 4,
    category: "Students",
    badge: "Scholarships",
    tone: "amber",
    reference: "UOS/UAFAO/KPEF-2026/115",
    date: "Nov 10, 2026",
    title: "KPEF Merit-cum-Inaffordability Scholarships 2025–26",
    snippet:
      "Financial assistance announced for needy undergraduate students enrolled across all departments at University of Swat.",
    paragraphs: [
      "The University Advancement and Financial Aid Office (UAFAO) notifies that applications for the Khyber Pakhtunkhwa Education Foundation (KPEF) scholarship scheme are now open.",
      "Undergraduate scholars belonging to marginalized socio-economic backgrounds and maintaining satisfactory academic progress are eligible to apply through the student financial assistance desk.",
    ],
    callout: {
      title: "Submission Desk",
      text: "UAFAO Office, Academic Block C, Charbagh Main Campus",
    },
    ts: 24,
  },
  {
    id: 5,
    category: "Exams",
    badge: "Examination",
    tone: "stone",
    reference: "UOS/EXAM/NOTIF-2026/304",
    date: "Nov 02, 2026",
    title: "Date Sheet for BS Mid-Term & MA/MSc Annual Examinations",
    snippet:
      "The official exam schedule for all affiliated colleges and campus departments has been released.",
    paragraphs: [
      "The Controller of Examination Office has notified the schedule for BS Fall Mid-Term examinations and annual examinations for affiliated institutions.",
      "Roll number slips and center allotments are accessible through the online examination portal (exam.uswat.edu.pk).",
    ],
    ts: 23,
  },
  {
    id: 6,
    category: "Teachers",
    badge: "Faculty",
    tone: "emerald",
    reference: "UOS/ORIC/TRAIN-2026/78",
    date: "Nov 08, 2026",
    title: "ORIC Training & Research Grant Workshop for PhD Faculty",
    snippet:
      "A workshop on winning research grants, for early-career faculty.",
    paragraphs: [
      "The Office of Research, Innovation and Commercialization (ORIC) organized an intensive capacity-building session for PhD faculty members on competitive grant formulation and HEC research funding.",
      "Director ORIC Dr. Anwar Hussain shared strategic frameworks on industry-academia collaborative projects and patent filings.",
    ],
    ts: 22,
  },
  {
    id: 7,
    category: "Vacations",
    badge: "Calendar",
    tone: "amber",
    reference: "UOS/REG/ACAD-2026/19",
    date: "Nov 09, 2026",
    title: "Iqbal Day & Winter Break Academic Schedule",
    snippet:
      "All teaching departments and administrative offices observe public holidays in accordance with the official University Academic Calendar.",
    paragraphs: [
      "The University observed Iqbal Day with solemn literary seminars at the Department of Urdu and Department of Pashto celebrating national philosophy.",
      "The winter break schedule for high-altitude sub-campuses has been notified by the Directorate of Administration.",
    ],
    ts: 21,
  },
];

/** Select announcements for a given category ("Recent" returns everything). */
export function announcementsForCategory(
  category: CategoryView
): Announcement[] {
  if (category === "Recent") {
    return [...announcementsData].sort((a, b) => b.ts - a.ts);
  }
  return announcementsData
    .filter((item) => item.category === category)
    .sort((a, b) => b.ts - a.ts);
}
