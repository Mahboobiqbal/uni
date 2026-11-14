export interface Announcement {
  id: number;
  badge: string;
  badgeClass: string;
  category: "News" | "Admissions" | "Exams" | "Teachers" | "Students" | "Vacations";
  date: string;
  shortDate: string;
  title: string;
  shortSnippet: string;
  body: string;
}

export const announcementsData: Announcement[] = [
  {
    id: 0,
    badge: "Important",
    badgeClass: "bg-brand-maroon text-white",
    category: "News",
    date: "Reference: UOS/REG/NOTIF-2026/894 • Oct 24, 2026",
    shortDate: "Oct 24, 2026",
    title: "Convocation 2026: Registration Deadline Extended",
    shortSnippet: "All graduating scholars of batch 2022-2026 must register before the cutoff.",
    body: `<p>It is hereby notified for the information of all concerned that the competent authority of the University of Swat has graciously extended the registration cutoff date for the 7th General Convocation.</p>
           <p>Graduates of BS, MA, MSc, MS, MPhil, and PhD programs who completed their degree credentials in the academic sessions 2022 through 2026 are instructed to deposit the requisite convocation fee at designated Bank of Khyber branches and upload verified clearance forms.</p>
           <div class="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-200/60 text-xs text-slate-700 font-medium"><strong class="text-brand-emerald">Venue:</strong> Main Auditorium, Charbagh Campus &bull; <strong class="text-brand-emerald">Rehearsal:</strong> Thursday, Nov 12, 2026</div>`,
  },
  {
    id: 1,
    badge: "Academic",
    badgeClass: "bg-emerald-50 text-emerald-800 border border-emerald-300",
    category: "Admissions",
    date: "Reference: UOS/ADM/FALL26/102 • Oct 20, 2026",
    shortDate: "Oct 20, 2026",
    title: "Fall Semester 2026 Merit Lists (Round 2)",
    shortSnippet: "Departmental merit lists for BS and MS candidates now published online.",
    body: `<p>The Directorate of Admissions announces the Second Provisional Merit List for BS 4-Year and MS Degree programs for the Fall 2026 intake across all Main and Sub Campuses.</p>
           <p>Successful candidates must present their original educational transcripts, CNIC/Form-B, and character certificates before the Departmental Scrutiny Committee for document verification.</p>
           <div class="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-200/60 text-xs text-slate-700 font-medium"><strong class="text-brand-emerald">Fee Clearance Cutoff:</strong> Friday, Oct 30, 2026 &bull; <strong class="text-brand-emerald">Orientation Day:</strong> Monday, Nov 03, 2026</div>`,
  },
  {
    id: 2,
    badge: "Examinations",
    badgeClass: "bg-amber-50 text-amber-800 border border-amber-300",
    category: "Exams",
    date: "Reference: UOS/EXAM/TERM/412 • Oct 18, 2026",
    shortDate: "Oct 18, 2026",
    title: "Date Sheet Notification: Terminal Fall 2026",
    shortSnippet: "Controller of Examinations circular for semester & annual composite models.",
    body: `<p>Controller of Examinations notifies that the Terminal Examinations for all Regular and Affiliated institutions will commence per the promulgated gazette.</p>
           <p>Students must download their computerized roll number slips with verified QR credentials from the university student portal. Unregistered candidates will not be seated.</p>
           <div class="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-200/60 text-xs text-slate-700 font-medium"><strong class="text-brand-emerald">Morning Session:</strong> 09:30 AM &bull; <strong class="text-brand-emerald">Afternoon Session:</strong> 02:00 PM</div>`,
  },
  {
    id: 3,
    badge: "Research Grant",
    badgeClass: "bg-blue-50 text-blue-800 border border-blue-300",
    category: "Teachers",
    date: "Reference: UOS/ORIC/GRANTS/67 • Oct 14, 2026",
    shortDate: "Oct 14, 2026",
    title: "ORIC International Seed Grants Allocation",
    shortSnippet: "Submissions invited for biodiversity and renewable mountain energy research.",
    body: `<p>The Office of Research, Innovation, and Commercialization (ORIC) invites competitive seed research proposals from early-career faculty and postgraduate fellows.</p>
           <p>Priority areas include Swat river hydrology, high-altitude medicinal plant biotechnology, and conservation of Gandharan sculptural sites.</p>
           <div class="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-200/60 text-xs text-slate-700 font-medium"><strong class="text-brand-emerald">Max Grant Per Project:</strong> PKR 1,500,000 &bull; <strong class="text-brand-emerald">Deadline:</strong> November 15, 2026</div>`,
  },
  {
    id: 4,
    badge: "Campus Transit",
    badgeClass: "bg-purple-50 text-purple-800 border border-purple-300",
    category: "Students",
    date: "Reference: UOS/TRANS/SCH-26/19 • Oct 08, 2026",
    shortDate: "Oct 08, 2026",
    title: "Revised Shuttle Schedules (Mingora - Charbagh)",
    shortSnippet: "Transport directorate updates daily departure points for student buses.",
    body: `<p>Transport Directorate has updated daily scheduled departure timings for student transport buses running between Mingora City, Saidu Sharif, and the Charbagh Main Campus.</p>
           <p>Female student commuter special express coaches have been inducted into the fleet to facilitate comfortable morning and evening transit.</p>
           <div class="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-200/60 text-xs text-slate-700 font-medium"><strong class="text-brand-emerald">Fleet Route:</strong> Kanju - Mingora Central - Khwazakhela - Charbagh Bypass</div>`,
  },
];

export const announcementCategories = [
  "News",
  "Admissions",
  "Exams",
  "Teachers",
  "Students",
  "Vacations",
] as const;

