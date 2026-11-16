import type { LucideIcon } from 'lucide-react';
import {
  Award,
  BookOpen,
  Building2,
  Calendar,
  Camera,
  ClipboardList,
  GraduationCap,
  Landmark,
  Mail,
  Monitor,
  Newspaper,
  Phone,
  Scale,
  ShieldCheck,
  Users,
  Wallet,
} from 'lucide-react';

export interface AdminStaff {
  name: string;
  role: string;
  email?: string;
  extension?: string;
  image?: string;
}

export type AdminWing = 'statutory' | 'directorates' | 'students';

export interface AdminPage {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  heroImage: string;
  icon: LucideIcon;
  wing: AdminWing;
  description: string;
  highlights: { title: string; text: string }[];
  staff: AdminStaff[];
  contact: { label: string; value: string; icon: LucideIcon }[];
}

export const adminPages: AdminPage[] = [
  {
    slug: 'offices',
    title: 'University Offices',
    shortTitle: 'Offices',
    eyebrow: 'Statutory Offices',
    summary: 'The people who run the university, what each office does, and how to reach them.',
    heroImage: '/images/campus/charbagh-campus.jpg',
    icon: Building2,
    wing: 'statutory',
    description:
      'These are the main statutory offices responsible for running the university. Each office has a clear role, a location in the Administration Block at Charbagh Main Campus, and a contact for enquiries.',
    highlights: [
      { title: 'Office of the Vice Chancellor', text: 'The university’s chief executive. Sets direction, chairs the Academic Council, and represents the university.' },
      { title: 'Office of the Registrar', text: 'Keeps student records, issues degrees and transcripts, and manages admissions and enrollments.' },
      { title: 'Office of the Treasurer', text: 'Manages the university budget, accounts, and payments.' },
      { title: 'Office of the Controller of Examinations', text: 'Plans and runs all examinations, issues results, and manages roll-number slips.' },
      { title: 'Office of the Provost', text: 'Oversees student hostels and campus welfare.' },
      { title: 'Quality Enhancement Cell (QEC)', text: 'Monitors and improves teaching quality and institutional standards.' },
      { title: 'University Advancement & Financial Aid Office (UAFAO)', text: 'Runs scholarships, financial aid, and donations.' },
    ],
    staff: [
      { name: 'Prof. Dr. Husnul Amin', role: 'Vice Chancellor' },
      { name: 'Dr. Arshad Ali Khan', role: 'Registrar' },
      { name: 'Dr. Anwar Hussain', role: 'Treasurer (Director, ORIC)' },
      { name: 'Dr. Muhammad Qasim', role: 'Controller of Examinations / Pro Vice Chancellor' },
      { name: 'Mr. Tariq Kamal', role: 'PS to Vice Chancellor', email: 'pstovc@uswat.edu.pk' },
    ],
    contact: [
      { label: 'Location', value: 'Administration Block, Charbagh Main Campus', icon: Landmark },
      { label: 'General enquiry', value: 'info@uswat.edu.pk', icon: Mail },
    ],
  },
  {
    slug: 'directorates',
    title: 'Directorates',
    shortTitle: 'Directorates',
    eyebrow: 'Operational Directorates',
    summary: 'The operational teams that keep the university running day to day.',
    heroImage: '/images/campus/charbagh-campus.jpg',
    icon: ClipboardList,
    wing: 'directorates',
    description:
      'Directorates manage the day-to-day operations of the university. Each one leads a specific area such as administration, IT, buildings, research, or planning.',
    highlights: [
      { title: 'Directorate of Administration', text: 'Looks after staff, offices, and day-to-day university administration.' },
      { title: 'Directorate of Information Technology', text: 'Runs the network, student portal, and IT services.' },
      { title: 'Directorate of Works', text: 'Builds and maintains campus buildings, roads, and services.' },
      { title: 'Directorate of Research & Technological Development (ORIC)', text: 'Supports research grants, innovation, and commercialization.' },
      { title: 'Directorate of Advanced Studies & Research (DASR)', text: 'Manages postgraduate admissions, synopses, and research board matters.' },
      { title: 'Directorate of Planning & Development', text: 'Plans campus growth and development projects.' },
    ],
    staff: [
      { name: 'Prof. Dr. Hazrat Bilal', role: 'Director Administration', email: 'ao@uswat.edu.pk' },
      { name: 'Dr. Anwar Hussain', role: 'Director ORIC' },
    ],
    contact: [
      { label: 'Administration', value: 'ao@uswat.edu.pk', icon: Mail },
      { label: 'Location', value: 'Administration Block, Charbagh Main Campus', icon: Landmark },
    ],
  },
  {
    slug: 'alumni',
    title: 'Alumni Association (UOSAA)',
    shortTitle: 'Alumni',
    eyebrow: 'University of Swat Alumni Association',
    summary: 'A lifelong network for graduates of the University of Swat.',
    heroImage: '/images/campus/charbagh-campus.jpg',
    icon: GraduationCap,
    wing: 'students',
    description:
      'The University of Swat Alumni Association (UOSAA) keeps graduates connected to the university and to each other, wherever they are in the world.',
    highlights: [
      { title: 'Global alumni network', text: 'Graduates connected through chapters and events across Pakistan and abroad.' },
      { title: 'Registration & verification', text: 'Register your details and request official degree or transcript verification.' },
      { title: 'Mentorship & careers', text: 'Current students connect with alumni for guidance and job opportunities.' },
      { title: 'Chapters', text: 'Active alumni chapters in major cities, built around student interests.' },
    ],
    staff: [
      { name: 'Alumni Relations Office', role: 'Coordinator' },
    ],
    contact: [
      { label: 'Email', value: 'alumni@uswat.edu.pk', icon: Mail },
    ],
  },
  {
    slug: 'central-library',
    title: 'Central Library',
    shortTitle: 'Central Library',
    eyebrow: 'Library & Learning Resources',
    summary: 'Books, journals, and digital research access for the whole university.',
    heroImage: '/images/campus/charbagh-campus.jpg',
    icon: BookOpen,
    wing: 'students',
    description:
      'The Central Library is the university’s main library. It holds a large print collection and gives students and staff access to the HEC national digital library.',
    highlights: [
      { title: 'Print collection', text: 'Over 120,000 books and research volumes across all subjects.' },
      { title: 'HEC Digital Library', text: 'Online access to thousands of international journals from on-campus computers.' },
      { title: 'Reading rooms', text: 'Quiet spaces for study, open during the academic day.' },
      { title: 'Membership', text: 'Students and staff get a library card on enrollment.' },
    ],
    staff: [
      { name: 'Dr. Wajid Rashid', role: 'Chief Librarian' },
    ],
    contact: [
      { label: 'Location', value: 'Central Library, Charbagh Main Campus', icon: Landmark },
      { label: 'Email', value: 'library@uswat.edu.pk', icon: Mail },
    ],
  },
  {
    slug: 'media-cell',
    title: 'Media Cell',
    shortTitle: 'Media Cell',
    eyebrow: 'Communications & Media',
    summary: 'The university’s news, media, and social channels.',
    heroImage: '/images/campus/charbagh-campus.jpg',
    icon: Camera,
    wing: 'students',
    description:
      'The Media Cell handles official communications for the university. It publishes news and press releases, records events, and runs the university’s social media channels.',
    highlights: [
      { title: 'Press releases', text: 'Official announcements and statements to the media.' },
      { title: 'Campus TV', text: 'Recording of convocations, lectures, and campus events.' },
      { title: 'Event coverage', text: 'Photography and video for university events.' },
      { title: 'Media inquiries', text: 'A single contact for journalists and the public.' },
    ],
    staff: [
      { name: 'Media Cell Office', role: 'Coordinator' },
    ],
    contact: [
      { label: 'Email', value: 'media@uswat.edu.pk', icon: Mail },
    ],
  },
  {
    slug: 'proctorial-board',
    title: 'Proctorial Board',
    shortTitle: 'Proctorial Board',
    eyebrow: 'Student Discipline & Campus Safety',
    summary: 'Keeping campus safe, fair, and disciplined.',
    heroImage: '/images/campus/charbagh-campus.jpg',
    icon: ShieldCheck,
    wing: 'students',
    description:
      'The Proctorial Board promotes campus safety and fair behavior. It handles student discipline, enforces the code of conduct, and runs anti-drug and safety awareness programs.',
    highlights: [
      { title: 'Student discipline', text: 'Ensures a safe and respectful environment for study.' },
      { title: 'Code of conduct', text: 'Clear rules for behavior on campus.' },
      { title: 'Anti-drug awareness', text: 'Programs to keep campus free of drugs.' },
      { title: 'Campus safety', text: 'Works with security to protect students and staff.' },
    ],
    staff: [
      { name: 'Dr. Arshad Iqbal', role: 'Deputy Chief Proctor' },
      { name: 'Mr. Islahudin', role: 'Deputy Chief Proctor' },
      { name: 'Ms. Rohi Naz', role: 'Deputy Chief Proctor (Women Campus)' },
      { name: 'Ms. Shazia', role: 'Deputy Chief Proctor (Women Campus)' },
    ],
    contact: [
      { label: 'Location', value: 'Administration Block, Charbagh Main Campus', icon: Landmark },
    ],
  },
  {
    slug: 'ydc',
    title: 'Youth Development Centre (YDC)',
    shortTitle: 'Youth Development Centre',
    eyebrow: 'Student Support & Development',
    summary: 'Careers, scholarships, societies, and sports for students.',
    heroImage: '/images/campus/charbagh-campus.jpg',
    icon: Users,
    wing: 'students',
    description:
      'The Youth Development Centre (YDC) is an HEC-supported centre near the Main Gate at Charbagh Campus. It helps students with careers, scholarships, societies, and talent development.',
    highlights: [
      { title: 'Career counseling', text: 'Guidance on jobs, internships, and career planning.' },
      { title: 'Scholarship guidance', text: 'Help finding national and international scholarship opportunities.' },
      { title: 'Student societies & sports', text: 'Support for clubs, teams, and cultural activities.' },
      { title: 'Talent development', text: 'Workshops and training to build student skills.' },
    ],
    staff: [
      { name: 'Dr. Imran', role: 'Facilitation Officer' },
      { name: 'Mr. Tariq Ziad', role: 'Facilitation Officer' },
      { name: 'Dr. Amjad Ali', role: 'Facilitation Officer' },
    ],
    contact: [
      { label: 'Location', value: 'Near Main Gate, Charbagh Campus', icon: Landmark },
      { label: 'Email', value: 'ydc@uswat.edu.pk', icon: Mail },
    ],
  },
];

/** Nav icons for the mega-drawer (one per admin page). Deep-links pre-select the tab on /administration. */
export const adminNavLinks = adminPages.map((p) => ({
  label: p.shortTitle,
  href: `/administration?tab=${p.slug}`,
  icon: p.icon,
}));
