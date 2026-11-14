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
    badge: "Important",
    tone: "critical",
    reference: "UOS/REG/NOTIF-2026/894",
    date: "Oct 24, 2026",
    title: "Convocation 2026: Registration Deadline Extended",
    snippet:
      "All graduating scholars of batch 2022–2026 must register before the new cutoff.",
    paragraphs: [
      "It is hereby notified for the information of all concerned that the competent authority of the University of Swat has graciously extended the registration cutoff date for the 7th General Convocation.",
      "Graduates of BS, MA, MSc, MS, MPhil, and PhD programs who completed their degree credentials in the academic sessions 2022 through 2026 are instructed to deposit the requisite convocation fee at designated Bank of Khyber branches and upload verified clearance forms through the student portal before the revised deadline.",
      "Incomplete applications or unpaid dues shall not be accommodated in the convocation programme. Scholars are advised to retain their fee receipt and clearance acknowledgement for verification at the venue.",
    ],
    callout: {
      title: "Venue & Rehearsal",
      text: "Venue: Main Auditorium, Charbagh Campus • Rehearsal: Thursday, Nov 12, 2026 — 10:00 AM",
    },
    ts: 24,
  },
  {
    id: 1,
    category: "Vacations",
    badge: "Vacations",
    tone: "amber",
    reference: "UOS/REG/VAC-26/98",
    date: "Oct 23, 2026",
    title: "Winter Recess 2026–27: Academic Calendar Circular",
    snippet:
      "Annual winter break schedule for all teaching departments and administrative offices.",
    paragraphs: [
      "The Registrar notifies the approved Winter Recess 2026–27 for all academic and administrative units of the University of Swat, including Charbagh Main Campus, Kanju Sub-Campus, and the Shangla Satellite Campus.",
      "Teaching will conclude on Friday, December 18, 2026, and will resume on Monday, January 4, 2027. Administrative offices shall observe a shorter winter closure from December 24 to December 31, 2026.",
      "Examination branches and the office of the Controller of Examinations shall remain partially staffed during the recess to process supplementary examination records and date sheets.",
    ],
    callout: {
      title: "Recess Dates",
      text: "Teaching ends: Fri, Dec 18, 2026 • Teaching resumes: Mon, Jan 04, 2027 • Admin closure: Dec 24–31, 2026",
    },
    ts: 23,
  },
  {
    id: 2,
    category: "News",
    badge: "Faculty Development",
    tone: "emerald",
    reference: "UOS/ACAD/NFDP-26/121",
    date: "Oct 22, 2026",
    title: "HEC National Faculty Development Program — Nominations Open",
    snippet:
      "Submit nominations for Phase-II NFDP training in research methodology and digital pedagogy.",
    paragraphs: [
      "The Directorate of Academics invites nominations from eligible faculty members for Phase-II of the Higher Education Commission (HEC) National Faculty Development Program (NFDP).",
      "The program comprises two weeks of intensive residential training focusing on research methodology, digital pedagogy, grantsmanship, and quality assurance standards, to be hosted at HEC-designated centres.",
      "Nominees must hold a minimum of MPPhil/MS qualification, be on regular university rolls, and have served at least two years in teaching. Departmental heads are requested to forward nominations through the office of the Dean by the closing date.",
    ],
    callout: {
      title: "Nomination Window",
      text: "Deadline: Friday, Nov 06, 2026 • Training commences: Dec 07–18, 2026",
    },
    ts: 22,
  },
  {
    id: 3,
    category: "News",
    badge: "Heritage",
    tone: "blue",
    reference: "UOS/ORIC/GANDHARA-26/09",
    date: "Oct 21, 2026",
    title: "UoS Joins International Consortium on Gandharan Digital Heritage",
    snippet:
      "New collaboration with European and South Asian partners on 3D documentation of Butkara.",
    paragraphs: [
      "The University of Swat, through the Office of Research, Innovation and Commercialization (ORIC), has formally joined an international consortium dedicated to the digital documentation and preservation of Gandharan heritage.",
      "Under the memorandum, UoS researchers will contribute to high-resolution 3D scanning of the ancient Buddhist stupas of Butkara and the archaeological estates of the Swat Valley, in partnership with European and South Asian academic institutions.",
      "The project will also establish a digital archive accessible to scholars, students, and the public, strengthening the region's role as a centre of Gandharan scholarship.",
    ],
    callout: {
      title: "Inaugural Workshop",
      text: "Field documentation workshop: Nov 20–22, 2026 • Main Campus Charbagh, Archaeology Block",
    },
    ts: 21,
  },
  {
    id: 4,
    category: "Admissions",
    badge: "Academic",
    tone: "emerald",
    reference: "UOS/ADM/SPRING27/01",
    date: "Oct 19, 2026",
    title: "Spring 2027 Admissions Open: BS, MS, MPhil & PhD",
    snippet:
      "Online application forms are now live for all programs across Main and Sub-Campuses.",
    paragraphs: [
      "The Directorate of Admissions announces the opening of online admissions for the Spring 2027 session across BS (4-Year), MS, MPhil, and PhD programs at the Charbagh Main Campus, Kanju Sub-Campus, and Shangla Satellite Campus.",
      "Candidates are required to complete the online application, upload scanned transcripts, CNIC/Form-B, and a passport-size photograph, and deposit the application processing fee through the University challan module.",
      "Merit will be determined on the basis of academic record, entry test performance, and the university's approved admission policy. Foreign and overseas candidates may apply through the designated international quota.",
    ],
    callout: {
      title: "Important Dates",
      text: "Applications close: Dec 10, 2026 • Entry test: Dec 20, 2026 • Merit lists: Dec 28, 2026",
    },
    ts: 19,
  },
  {
    id: 5,
    category: "Admissions",
    badge: "Academic",
    tone: "emerald",
    reference: "UOS/ADM/FALL26/102",
    date: "Oct 18, 2026",
    title: "Fall Semester 2026 Merit Lists (Round 2)",
    snippet:
      "Departmental merit lists for BS and MS candidates now published online.",
    paragraphs: [
      "The Directorate of Admissions announces the Second Provisional Merit List for BS 4-Year and MS Degree programs for the Fall 2026 intake across all Main and Sub Campuses.",
      "Successful candidates must present their original educational transcripts, CNIC/Form-B, and character certificates before the Departmental Scrutiny Committee for document verification.",
      "Candidates failing to complete verification by the given date shall forfeit their seat, which will be offered to the next candidate on the waiting list.",
    ],
    callout: {
      title: "Fee Clearance",
      text: "Fee Clearance Cutoff: Friday, Oct 30, 2026 • Orientation Day: Monday, Nov 03, 2026",
    },
    ts: 18,
  },
  {
    id: 6,
    category: "Exams",
    badge: "Examinations",
    tone: "amber",
    reference: "UOS/EXAM/TERM/412",
    date: "Oct 17, 2026",
    title: "Date Sheet Notification: Terminal Fall 2026",
    snippet:
      "Controller of Examinations circular for semester & annual composite models.",
    paragraphs: [
      "Controller of Examinations notifies that the Terminal Examinations for all Regular and Affiliated institutions will commence per the promulgated gazette.",
      "Students must download their computerized roll number slips with verified QR credentials from the university student portal. Unregistered candidates will not be seated.",
      "Examination halls will open thirty minutes before the scheduled commencement. Mobile phones and unauthorized material are strictly prohibited in examination premises.",
    ],
    callout: {
      title: "Examination Timings",
      text: "Morning Session: 09:30 AM • Afternoon Session: 02:00 PM",
    },
    ts: 17,
  },
  {
    id: 7,
    category: "Exams",
    badge: "Examinations",
    tone: "amber",
    reference: "UOS/COE/SUPP-26/78",
    date: "Oct 15, 2026",
    title: "Supplementary Examination 2026 — Fee Schedule",
    snippet:
      "Challan-based fee structure for repeat and back-paper candidates notified.",
    paragraphs: [
      "The Controller of Examinations announces the fee schedule and registration procedure for the Supplementary Examination 2026 for candidates appearing in repeat or back papers.",
      "Eligible students may generate their customized fee challan through the online student portal and deposit the prescribed fee at any branch of the Bank of Khyber.",
      "Registration will close on the date notified on the portal; no late submissions shall be entertained by the examination branch.",
    ],
    callout: {
      title: "Registration",
      text: "Challan generation opens: Nov 01, 2026 • Submission deadline: Nov 20, 2026",
    },
    ts: 15,
  },
  {
    id: 8,
    category: "Teachers",
    badge: "Research Grant",
    tone: "blue",
    reference: "UOS/ORIC/GRANTS/67",
    date: "Oct 14, 2026",
    title: "ORIC International Seed Grants Allocation",
    snippet:
      "Submissions invited for biodiversity and renewable mountain energy research.",
    paragraphs: [
      "The Office of Research, Innovation, and Commercialization (ORIC) invites competitive seed research proposals from early-career faculty and postgraduate fellows.",
      "Priority areas include Swat river hydrology, high-altitude medicinal plant biotechnology, and conservation of Gandharan sculptural sites.",
      "Proposals will be reviewed by the ORIC review committee against scientific merit, feasibility, and alignment with the university's strategic research priorities.",
    ],
    callout: {
      title: "Grant Details",
      text: "Max Grant Per Project: PKR 1,500,000 • Deadline: November 15, 2026",
    },
    ts: 14,
  },
  {
    id: 9,
    category: "Teachers",
    badge: "Administration",
    tone: "stone",
    reference: "UOS/RECT/PROMO-26/233",
    date: "Oct 12, 2026",
    title: "Call for Promotion Dossiers FY 2026–27",
    snippet:
      "Tenured faculty may submit promotion dossiers through their department heads.",
    paragraphs: [
      "The office of the Registrar invites tenured faculty members eligible for promotion for the financial year 2026–27 to submit their dossiers through the respective department head.",
      "Dossiers must include the prescribed proformas, teaching portfolio, research publications with impact factor details, institutional service record, and the departmental evaluation report.",
      "Incomplete dossiers will be returned; last date of receipt is fixed and will be strictly observed by the establishment section.",
    ],
    callout: {
      title: "Submission",
      text: "Dossier submission deadline: Nov 30, 2026 • Establishment Section, Main Campus Charbagh",
    },
    ts: 12,
  },
  {
    id: 10,
    category: "Vacations",
    badge: "Campus Notice",
    tone: "stone",
    reference: "UOS/ESTATE/CAMPUS-26/31",
    date: "Oct 11, 2026",
    title: "Scheduled Power & Maintenance Closure — Main Campus",
    snippet:
      "Estate office schedules a brief utility closure of select academic blocks.",
    paragraphs: [
      "The Estate Office notifies all faculty, students, and staff of a scheduled maintenance closure affecting select academic blocks at the Charbagh Main Campus.",
      "The closure will include transformer maintenance and replacement of electrical panels in the Science and Computer Science blocks. Emergency power supply will remain available for the Central Library and the Examination Branch.",
      "Departments affected are requested to adjust laboratory schedules accordingly. Safety teams will ensure the areas are cordoned off during the works.",
    ],
    callout: {
      title: "Schedule",
      text: "Closure: Sat, Oct 31, 2026, 08:00 AM – 06:00 PM • Blocks: Science, CS & Engineering",
    },
    ts: 11,
  },
  {
    id: 11,
    category: "Students",
    badge: "Campus Transit",
    tone: "purple",
    reference: "UOS/TRANS/SCH-26/19",
    date: "Oct 10, 2026",
    title: "Revised Shuttle Schedules (Mingora – Charbagh)",
    snippet:
      "Transport directorate updates daily departure points for student buses.",
    paragraphs: [
      "Transport Directorate has updated daily scheduled departure timings for student transport buses running between Mingora City, Saidu Sharif, and the Charbagh Main Campus.",
      "Female student commuter special express coaches have been inducted into the fleet to facilitate comfortable morning and evening transit.",
      "Students are advised to display their valid transport cards while boarding. Fares remain unchanged for the current semester.",
    ],
    callout: {
      title: "Fleet Route",
      text: "Kanju – Mingora Central – Khwazakhela – Charbagh Bypass",
    },
    ts: 10,
  },
  {
    id: 12,
    category: "Students",
    badge: "Library",
    tone: "emerald",
    reference: "UOS/LIB/EXAMS-26/55",
    date: "Oct 09, 2026",
    title: "Central Library Extended Hours During Examination Season",
    snippet:
      "Reading halls will remain open until midnight from Oct 26 through Dec 18.",
    paragraphs: [
      "The Central Library, Charbagh Main Campus, will observe extended working hours during the terminal examination season to support student preparation.",
      "Reading halls will remain open from 08:00 AM to 12:00 midnight, including Saturdays and Sundays, from October 26 through December 18, 2026.",
      "Issuance and return counters will operate as usual, and the digital research corner will remain available with full HEC digital library access.",
    ],
    callout: {
      title: "Timings",
      text: "Mon–Sun: 08:00 AM – 12:00 midnight • Digital Research Corner: 24/7 access",
    },
    ts: 9,
  },
];

/** Sorted view of announcements for the given sidebar category ("Recent" = all). */
export function announcementsForCategory(
  view: CategoryView
): Announcement[] {
  const list =
    view === "Recent"
      ? [...announcementsData]
      : announcementsData.filter((a) => a.category === view);
  return list.sort((a, b) => b.ts - a.ts);
}
