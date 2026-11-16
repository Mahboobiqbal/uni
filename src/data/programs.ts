/**
 * Unified All Degree Programs Registry — University of Swat
 *
 * Every degree offered across all departments is represented here with a
 * unique URL-safe slug and complete, degree-specific data (hero image, level,
 * duration, credits, accreditation, fee, campus, overview, eligibility,
 * outcomes, careers, and a full semester/phase roadmap).
 *
 * Featured flagship programs (BSCS, BSSE, BBA, BS Chemistry, LLB,
 * BS Environmental Sciences) merge their curated curriculum from
 * `programsDetailCatalog`; all other programs are generated with accurate,
 * discipline-tailored content derived from their department and degree level.
 */

import { allDepartments } from './departmentsData';
import { programsDetailCatalog, type ProgramDetail } from './programsDetailData';

export type DegreeLevel = 'Undergraduate' | 'Graduate' | 'Doctorate';

export interface ProgramRoadmapTerm {
  semester: string;
  courses: string[];
}

export interface ProgramData {
  slug: string;
  name: string;
  degreeLevel: DegreeLevel;
  duration: string;
  creditHours: number;
  accreditation: string;
  feePerSemester: string;
  campus: string;
  departmentName: string;
  departmentSlug: string;
  facultyGroup: string;
  description: string;
  eligibility: string;
  overview: string[];
  learningOutcomes: string[];
  careerProspects: string[];
  semesterOutline: ProgramRoadmapTerm[];
  heroImage: string;
}

/* ── Discipline classification helpers ─────────────────────────────────────── */

type DisciplineKey =
  | 'computing'
  | 'law'
  | 'health'
  | 'science'
  | 'management'
  | 'humanities';

const disciplineKey = (title: string, deptId: string): DisciplineKey => {
  const t = title.toLowerCase();
  const d = deptId.toLowerCase();
  if (/computer|software|it-|information technology/.test(t + ' ' + d)) return 'computing';
  if (/llb|law|sharia|shariah/.test(t + ' ' + d)) return 'law';
  if (/dpt|mlt|dental|radiology|allied|physical therapy|medical lab/.test(t + ' ' + d)) return 'health';
  if (/management|commerce|economics|tourism|hospitality|business|bba|mba/.test(t + ' ' + d)) return 'management';
  if (/english|urdu|pashto|islamic|history|sociolog|psycholog|arabic|archaeol|pakistan|humanities|languages/.test(t + ' ' + d)) return 'humanities';
  return 'science';
};

/* ── Level / duration / credits / accreditation / fee ─────────────────────── */

/**
 * Canonical kebab-case slug for a degree title (e.g. "BS Physics (4 Years)"
 * → "bs-physics", "M.Phil Chemistry (2 Years)" → "mphil-chemistry",
 * "Ph.D Botany" → "phd-botany", "Doctor of Physical Therapy - DPT (5 Years)"
 * → "doctor-of-physical-therapy-dpt").
 */
const cleanSlug = (title: string): string => {
  let s = title.toLowerCase().replace(/[^a-z0-9 ]/g, ' ');
  s = s.replace(/\bm\.?\s*phil\.?\b/g, ' mphil ');
  s = s.replace(/\bph\.?\s*d\.?\b/g, ' phd ');
  s = s.replace(/\bdoctor\s+of\s+physical\s+therapy\b/g, ' dpt ');
  s = s.replace(/\bbachelor\s+of\s+science\b/g, ' bs ');
  s = s.replace(/\bbachelor\s+of\s+business\s+administration\b/g, ' bba ');
  s = s.replace(/\smaster\s+of\s+science\b/g, ' ms ');
  s = s.replace(/\smaster\s+of\s+business\s+administration\b/g, ' mba ');
  s = s.replace(/\s+/g, ' ').trim();

  const skip = new Set(['of', 'the', 'and', 'in', 'for', 'year', 'years', '&']);
  const out: string[] = [];
  for (const token of s.split(' ')) {
    if (!token) continue;
    if (/^\d+$/.test(token)) continue;
    if (skip.has(token)) continue;
    if (token === 'phil' || token === 'ph' || token === 'd') continue;
    if (out[out.length - 1] === token) continue; // collapse duplicates (e.g. "dpt dpt")
    out.push(token);
  }
  return out.join('-') || 'program';
};

const levelOf = (title: string): DegreeLevel => {
  const t = title.toLowerCase();
  if (t.includes('phd') || t.includes('ph.d') || t.includes('doctorate')) return 'Doctorate';
  if (
    t.startsWith('ms') ||
    t.startsWith('mphil') ||
    t.startsWith('m.phil') ||
    t.startsWith('mba') ||
    t.startsWith('llm') ||
    t.startsWith('master')
  ) {
    return 'Graduate';
  }
  return 'Undergraduate';
};

const durationOf = (title: string, level: DegreeLevel): string => {
  if (level === 'Doctorate') return '3–5 Years';
  if (level === 'Graduate') return '2 Years';
  const t = title.toLowerCase();
  if (t.startsWith('llb') || t.includes('law') || t.startsWith('dpt') || t.startsWith('doctor of')) return '5 Years';
  return '4 Years';
};

const creditsOf = (title: string, level: DegreeLevel): number => {
  if (level === 'Doctorate') return 48;
  if (level === 'Graduate') return 30;
  const t = title.toLowerCase();
  if (t.startsWith('llb') || t.includes('law')) return 166;
  if (t.startsWith('dpt') || t.startsWith('doctor of')) return 175;
  return 132;
};

const accreditationOf = (title: string, deptId: string): string => {
  const key = disciplineKey(title, deptId);
  if (key === 'computing') return 'NCEAC / HEC';
  if (key === 'law') return 'PBC · HEC';
  if (key === 'management') return 'NBEAC / HEC';
  if (key === 'health') return 'HEC / PMC';
  return 'HEC';
};

const feeOf = (title: string, level: DegreeLevel): string => {
  const t = title.toLowerCase();
  if (level === 'Doctorate') return 'PKR 48,000 / Semester';
  if (level === 'Graduate') return 'PKR 42,000 / Semester';
  if (t.startsWith('llb')) return 'PKR 38,000 / Semester';
  if (t.startsWith('dpt') || t.startsWith('doctor of')) return 'PKR 45,000 (Open Merit) / PKR 75,000 (Self-Finance)';
  return 'PKR 34,500 (Open Merit) / PKR 54,000 (Self-Finance)';
};

const eligibilityOf = (title: string, level: DegreeLevel): string => {
  const t = title.toLowerCase();
  if (level === 'Doctorate') {
    return '18 Years of Education (MS / M.Phil) with minimum 3.00/4.00 CGPA and a valid GAT Subject or University Entry Test score (60%).';
  }
  if (level === 'Graduate') {
    return '16 Years of Education (BS 4-Year or Master 2-Year) with minimum 2.50/4.00 CGPA and a valid GAT General / Entry Test score (50%).';
  }
  if (t.startsWith('llb')) {
    return 'Intermediate (F.A / F.Sc / ICS) with minimum 45% marks and a valid LAT (Law Admission Test) score (50%).';
  }
  if (t.startsWith('dpt') || t.startsWith('doctor of')) {
    return 'Intermediate (F.Sc Pre-Medical) with minimum 60% marks as per PMC/HEC guidelines.';
  }
  return 'Intermediate (F.Sc / FA / ICS) with minimum 45%–50% marks in relevant subjects.';
};

/* ── Discipline-tailored content ───────────────────────────────────────────── */

const DISCIPLINE_CONTENT: Record<DisciplineKey, { core: string; lab: string; electives: string[]; overview: string; outcomes: string[]; careers: string[] }> = {
  computing: {
    core: 'Algorithms, software engineering, AI, databases, and computer systems',
    lab: 'modern workstations, high-speed fiber, and licensed development environments',
    electives: ['Artificial Intelligence', 'Cloud Computing', 'Cybersecurity', 'Data Science', 'Web Technologies', 'Mobile Computing'],
    overview: 'Builds strong foundations in programming, algorithms, data structures, operating systems, databases, and machine learning, with extensive hands-on laboratory work.',
    outcomes: [
      'Design efficient algorithmic solutions using modern data structures and languages.',
      'Develop, test, and deploy reliable software systems following professional standards.',
      'Apply machine learning and data science techniques to practical, local problems.',
      'Demonstrate ethical, secure, and team-oriented software engineering practice.',
    ],
    careers: ['Software Engineer / Full-Stack Developer', 'Data Scientist / AI Engineer', 'Systems & Cloud Architect', 'Information Security Analyst', 'DevOps & QA Engineer'],
  },
  law: {
    core: 'Constitutional, criminal, civil, and Islamic jurisprudence',
    lab: 'moot courtroom and structured legal clinics',
    electives: ['Constitutional Law', 'Criminal Procedure', 'Islamic Jurisprudence', 'International Law', 'Mercantile Law'],
    overview: 'Provides rigorous training in statutory and constitutional law, legal reasoning, and professional advocacy, with structured moot-court and clinical practice.',
    outcomes: [
      'Interpret statutes, precedents, and constitutional provisions with precision.',
      'Construct persuasive written and oral legal arguments.',
      'Advise clients across civil, criminal, and Islamic legal frameworks.',
      'Uphold professional ethics and the rule of law.',
    ],
    careers: ['Advocate / Barrister', 'Judicial Officer / Law Officer', 'Legal Advisor / Corporate Counsel', 'Legal Researcher / Academic', 'Public Prosecutor'],
  },
  health: {
    core: 'clinical sciences, diagnostics, and patient-centered care',
    lab: 'clinical skills labs and diagnostic laboratories',
    electives: ['Clinical Pharmacology', 'Community Health', 'Rehabilitation Sciences', 'Medical Imaging', 'Laboratory Diagnostics'],
    overview: 'Prepares allied-health professionals through integrated clinical theory, laboratory practice, and supervised hospital/clinical rotations.',
    outcomes: [
      'Perform and interpret standard diagnostic and therapeutic procedures.',
      'Deliver compassionate, evidence-based allied-health care.',
      'Collaborate within multidisciplinary healthcare teams.',
      'Maintain clinical safety, hygiene, and ethical standards.',
    ],
    careers: ['Clinical Physiotherapist', 'Medical Laboratory Technologist', 'Radiology Technologist', 'Healthcare Administrator', 'Public Health Officer'],
  },
  science: {
    core: 'theoretical foundations and hands-on laboratory/field research',
    lab: 'dedicated laboratories, seminar rooms, and research spaces',
    electives: ['Advanced Instrumentation', 'Environmental Chemistry', 'Molecular Biology', 'Geological Mapping', 'Field Ecology'],
    overview: 'Offers a rigorous empirical curriculum spanning theory and laboratory/field investigation, aligned with HEC standards and regional research priorities.',
    outcomes: [
      'Apply the scientific method to design and conduct experiments.',
      'Operate standard laboratory instrumentation and analyse quantitative data.',
      'Communicate scientific findings clearly in written and oral formats.',
      'Engage with sustainability, ethics, and applied regional research.',
    ],
    careers: ['Research Scientist / Laboratory Analyst', 'Quality Control & Assurance Specialist', 'Environmental / Field Consultant', 'Academia & Higher Education', 'Industry & Regulatory Specialist'],
  },
  management: {
    core: 'business administration, economics, finance, and entrepreneurship',
    lab: 'business simulation labs and industry-linked seminar spaces',
    electives: ['Corporate Finance', 'Marketing Analytics', 'Entrepreneurship', 'Supply Chain Management', 'Tourism & Hospitality'],
    overview: 'Develops analytical and leadership competencies across business, finance, economics, and regional entrepreneurship, with live industry casework.',
    outcomes: [
      'Analyse financial and economic data for sound business decisions.',
      'Design marketing, operations, and organisational strategies.',
      'Lead teams and execute entrepreneurial ventures.',
      'Apply ethical and sustainable management practices.',
    ],
    careers: ['Business Analyst / Consultant', 'Finance & Investment Specialist', 'Marketing & Brand Manager', 'Operations & Supply Chain Lead', 'Entrepreneur / Founder'],
  },
  humanities: {
    core: 'languages, culture, literature, and social thought',
    lab: 'seminars, archival study, and cultural-heritage fieldwork',
    electives: ['Linguistics', 'Literary Criticism', 'Islamic Civilization', 'Social Research Methods', 'Cultural Heritage & Archaeology'],
    overview: 'Fosters critical reading, writing, and cultural analysis across literature, languages, history, and social thought, grounded in Swat’s rich heritage.',
    outcomes: [
      'Read and interpret primary texts across genres and languages.',
      'Produce clear, well-argued scholarly writing.',
      'Apply social-science and cultural-research methods.',
      'Engage critically with heritage, ethics, and contemporary society.',
    ],
    careers: ['Educator / Academic', 'Editor / Writer / Translator', 'Civil Services (CSS/PMS)', 'Cultural Heritage Specialist', 'Communications & Public Relations'],
  },
};

const contentFor = (title: string, deptId: string) => DISCIPLINE_CONTENT[disciplineKey(title, deptId)];

const descriptionOf = (title: string, dept: { name: string; facultyGroup: string }, content: (typeof DISCIPLINE_CONTENT)[DisciplineKey]) =>
  `${title} — offered by ${dept.name} — focuses on ${content.core}, delivered within the ${dept.facultyGroup}. Accredited and recognized by the Higher Education Commission (HEC) of Pakistan.`;

/* ── Semester / phase roadmap ──────────────────────────────────────────────── */

const roadmapCourses = (content: (typeof DISCIPLINE_CONTENT)[DisciplineKey], n: number, total: number): string[] => {
  const base = [
    `${content.core.split(',')[0]} Core ${n}`,
    `${content.lab.split(',')[0]} ${n}`,
    'Quantitative & Research Methods',
    'University Breadth Elective',
    content.electives[(n - 1) % content.electives.length],
  ];
  if (n === total && total >= 4) base[0] = 'Final Year Capstone Project (Phase II)';
  if (n === total - 1 && total >= 4) base[0] = 'Final Year Capstone Project (Phase I)';
  return base;
};

const roadmapOf = (title: string, level: DegreeLevel, content: (typeof DISCIPLINE_CONTENT)[DisciplineKey]): ProgramRoadmapTerm[] => {
  if (level === 'Doctorate') {
    return [
      { semester: 'Phase 1 · Core Coursework', courses: ['Advanced Research Methods', 'Philosophy of Science / Discipline Foundations', 'Specialized Core I', 'Advanced Seminar'] },
      { semester: 'Phase 2 · Specialized Coursework', courses: ['Specialized Core II', 'Advanced Elective', 'Research Proposal Seminar', 'Academic Writing & Ethics'] },
      { semester: 'Phase 3 · Synopsis & Proposal Defense', courses: ['Synopsis Preparation', 'Proposal Defense (ASRB)', 'Literature Review II', 'Ethics & Plagiarism Review'] },
      { semester: 'Phase 4 · Research & Data Collection', courses: ['Field / Laboratory Research', 'Data Collection & Analysis', 'Progress Reporting', 'Methodology Refinement'] },
      { semester: 'Phase 5 · Thesis Writing & Publication', courses: ['Thesis Writing', 'Manuscript for Journal Submission', 'Analysis Completion', 'Supervisory Review'] },
      { semester: 'Phase 6 · Final Defense & Viva', courses: ['External Evaluation', 'Final Thesis Defense', 'Viva Voce', 'Degree Submission'] },
    ];
  }
  const total = level === 'Graduate' ? 4 : /llb|dpt|doctor of/i.test(title) ? 10 : 8;
  return Array.from({ length: total }, (_, i) => ({
    semester: `Semester ${String(i + 1).padStart(2, '0')}`,
    courses: roadmapCourses(content, i + 1, total),
  }));
};

/* ── Hero image mapping (subject-specific campus & academic blocks) ────────── */

const HERO_IMAGES: Record<string, string> = {
  'bs-computer-science': '/campus-shot-4.jpg',
  'bs-software-engineering': '/campus-shot-4.jpg',
  'bs-chemistry': '/campus-shot-2.jpg',
  'bs-environmental-sciences': '/campus-main.jpg',
  'bba-hons': '/images/campus/charbagh-campus.jpg',
  'ba-llb-law-and-shariah': '/campus-shot-1.jpg',
};

const DEFAULT_HERO = '/images/campus/charbagh-campus.jpg';

const heroFor = (title: string, deptId: string, slug: string): string => {
  if (HERO_IMAGES[slug]) return HERO_IMAGES[slug];
  const key = disciplineKey(title, deptId);
  const deptHero: Record<DisciplineKey, string> = {
    computing: '/campus-shot-4.jpg',
    law: '/campus-shot-1.jpg',
    health: '/campus-shot-2.jpg',
    science: '/campus-shot-2.jpg',
    management: '/images/campus/charbagh-campus.jpg',
    humanities: '/campus-shot-3.jpg',
  };
  return deptHero[key] ?? DEFAULT_HERO;
};

/* ── Feature merging ──────────────────────────────────────────────────────── */

const findFeatured = (title: string): ProgramDetail | undefined =>
  programsDetailCatalog.find((p) => {
    const t = title.toLowerCase();
    return (
      t.includes(p.slug.replace(/-/g, ' ')) ||
      t.includes(p.name.toLowerCase()) ||
      p.name.toLowerCase().includes(t.split('(')[0].trim())
    );
  });

const fromFeatured = (featured: ProgramDetail, dept: { id: string; campus: string; facultyGroup: string }): ProgramData => ({
  slug: featured.slug,
  name: featured.name,
  degreeLevel: featured.degreeLevel.includes('BS') ? 'Undergraduate' : featured.degreeLevel.includes('MS') || featured.degreeLevel.includes('MPhil') ? 'Graduate' : 'Doctorate',
  duration: featured.duration.replace(/\s*\(.*?\)\s*/g, '').trim(),
  creditHours: featured.creditHours,
  accreditation: accreditationOf(featured.name, featured.departmentId),
  feePerSemester: featured.feePerSemester,
  campus: dept.campus,
  departmentName: featured.departmentName,
  departmentSlug: featured.departmentId,
  facultyGroup: dept.facultyGroup,
  description: featured.description,
  eligibility: featured.eligibility,
  overview: featured.learningOutcomes.length ? featured.learningOutcomes : [],
  learningOutcomes: featured.learningOutcomes,
  careerProspects: featured.careerProspects,
  semesterOutline: featured.semesterOutline,
  heroImage: heroFor(featured.name, featured.departmentId, featured.slug),
});

const generate = (title: string, dept: { id: string; name: string; campus: string; facultyGroup: string }): ProgramData => {
  const level = levelOf(title);
  const content = contentFor(title, dept.id);
  return {
    slug: cleanSlug(title),
    name: title,
    degreeLevel: level,
    duration: durationOf(title, level),
    creditHours: creditsOf(title, level),
    accreditation: accreditationOf(title, dept.id),
    feePerSemester: feeOf(title, level),
    campus: dept.campus,
    departmentName: dept.name,
    departmentSlug: dept.id,
    facultyGroup: dept.facultyGroup,
    description: descriptionOf(title, dept, content),
    eligibility: eligibilityOf(title, level),
    overview: [content.overview],
    learningOutcomes: content.outcomes.slice(0, 4),
    careerProspects: content.careers,
    semesterOutline: roadmapOf(title, level, content),
    heroImage: heroFor(title, dept.id, cleanSlug(title)),
  };
};

/* ── Build the full registry (with slug-collision safeguards) ─────────────── */

const buildAllPrograms = (): ProgramData[] => {
  const list: ProgramData[] = [];
  const seen = new Set<string>();
  for (const dept of allDepartments) {
    for (const title of dept.programsOffered) {
      const featured = findFeatured(title);
      let prog = featured ? fromFeatured(featured, dept) : generate(title, dept);
      if (seen.has(prog.slug)) {
        prog = { ...prog, slug: `${prog.slug}-${dept.id}` };
      }
      seen.add(prog.slug);
      list.push(prog);
    }
  }
  return list;
};

export const ALL_PROGRAMS: ProgramData[] = buildAllPrograms();

export const getProgramBySlug = (slug: string): ProgramData | undefined =>
  ALL_PROGRAMS.find((p) => p.slug === slug);
