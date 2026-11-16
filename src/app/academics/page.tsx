import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock,
  Download,
  FileCheck2,
  FileText,
  GraduationCap,
  Landmark,
  Layers,
  Library,
  Scale,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Academic Structure & Scholastic Framework | University of Swat',
  description:
    'Semester regulations 2016, academic calendars, curriculum governance, grading framework, QEC quality assurance, and degree progression at the University of Swat.',
};

const academicGateways = [
  {
    roman: 'I',
    href: '/academics/calendar',
    tag: 'Semester Timelines',
    title: 'Academic Calendar 2026–2027',
    description:
      'The official Fall 2026 and Spring 2027 schedule — registration, midterms, exams, and holidays.',
    liveStatus: 'Fall 2026 Midterm Ongoing · Spring 2027 Classes Feb 01',
    cta: 'View Semester Calendar',
    icon: CalendarDays,
    accent: 'text-[#C8A96E]',
    accentBg: 'bg-white/10 border border-white/15',
    accentBorder:
      'bg-[#153B27] text-white border border-white/10 shadow-[0_24px_48px_-22px_rgba(12,25,18,0.5)] hover:bg-[#0F2D1E] hover:border-white/20 hover:shadow-[0_28px_48px_-22px_rgba(12,25,18,0.55)]',
    titleClass: 'text-white group-hover:text-[#C8A96E]',
    bodyClass: 'text-white/70',
    statusClass: 'bg-white/[0.07] border border-white/[0.12] text-white/75',
    statusDotClass: 'bg-[#C8A96E]',
    footerClass: 'border-white/15 text-[#C8A96E]',
    ctaHoverClass: 'group-hover:text-white',
  },
  {
    roman: 'II',
    href: '/academics/downloads',
    tag: 'Statutory Repository',
    title: 'Downloads & Official Forms',
    description:
      'Download University Statutes 2016, research synopsis templates, degree verification forms, and clearance proformas.',
    liveStatus: '8 Verified Statutory Documents Available in PDF',
    cta: 'Open Download Center',
    icon: FileText,
    accent: 'text-[#7F1D1D]',
    accentBg: 'bg-[#7F1D1D]/10',
    accentBorder:
      'bg-white border border-stone-300 shadow-xs group-hover:border-[#7F1D1D]/40 hover:shadow-[0_28px_48px_-22px_rgba(21,59,39,0.35)]',
    titleClass: 'text-[#14291D] group-hover:text-[#153B27]',
    bodyClass: 'text-stone-600',
    statusClass: 'bg-stone-50 border border-stone-200 text-stone-600',
    statusDotClass: 'bg-[#153B27]',
    footerClass: 'border-stone-200 text-[#153B27]',
    ctaHoverClass: 'group-hover:text-[#7F1D1D]',
  },
  {
    roman: 'III',
    href: '/programs',
    tag: 'Curricular Schemes',
    title: 'Degrees & Curricula Directory',
    description:
      'Browse all 73 undergraduate, graduate, and doctoral degree tracks across 28 departments, with semester course breakdowns.',
    liveStatus: 'Approved by Academic Council & Boards of Studies',
    cta: 'Explore Degree Directory',
    icon: GraduationCap,
    accent: 'text-[#7A5A1E]',
    accentBg: 'bg-[#C8A96E]/20',
    accentBorder:
      'bg-white border border-stone-300 shadow-xs group-hover:border-[#C8A96E]/60 hover:shadow-[0_28px_48px_-22px_rgba(21,59,39,0.35)]',
    titleClass: 'text-[#14291D] group-hover:text-[#153B27]',
    bodyClass: 'text-stone-600',
    statusClass: 'bg-stone-50 border border-stone-200 text-stone-600',
    statusDotClass: 'bg-[#153B27]',
    footerClass: 'border-stone-200 text-[#153B27]',
    ctaHoverClass: 'group-hover:text-[#7F1D1D]',
  },
];

const gradeMatrix = [
  { marks: '85% & above', grade: 'A', points: '4.00', remark: 'Outstanding', tone: 'text-[#153B27] bg-[#153B27]/10' },
  { marks: '80% – 84%', grade: 'A-', points: '3.66 – 3.99', remark: 'Excellent', tone: 'text-[#153B27] bg-[#153B27]/8' },
  { marks: '75% – 79%', grade: 'B+', points: '3.33 – 3.65', remark: 'Very Good', tone: 'text-[#14291D] bg-stone-100' },
  { marks: '70% – 74%', grade: 'B', points: '3.00 – 3.32', remark: 'Good', tone: 'text-[#14291D] bg-stone-100' },
  { marks: '65% – 69%', grade: 'C+', points: '2.50 – 2.99', remark: 'Fair', tone: 'text-[#14291D] bg-stone-100' },
  { marks: '60% – 64%', grade: 'C', points: '2.00 – 2.49', remark: 'Satisfactory', tone: 'text-[#B48A3E] bg-[#C8A96E]/15' },
  { marks: '50% – 59%', grade: 'D', points: '1.00 – 1.99', remark: 'Probation Risk', tone: 'text-amber-800 bg-amber-100' },
  { marks: 'Below 50%', grade: 'F', points: '0.00', remark: 'Fail', tone: 'text-[#7F1D1D] bg-[#7F1D1D]/10' },
];

const progressionRules = [
  {
    title: 'Good Academic Standing',
    threshold: 'CGPA ≥ 2.00 (BS) / ≥ 2.50 (MS) / ≥ 3.00 (PhD)',
    detail:
      'Scholars maintaining this cumulative average are eligible for normal semester progression, scholarships, and degree award upon completion of credit hours.',
    icon: CheckCircle2,
    badgeColor: 'text-[#C8A96E] bg-[#C8A96E]/15 border-[#C8A96E]/30',
  },
  {
    title: 'Academic Probation Protocol',
    threshold: 'Semester GPA < 2.00',
    detail:
      'Scholars falling below the minimum threshold are placed on probation. Two consecutive probations result in academic dismissal or program repeat under Statutes 2016.',
    icon: Scale,
    badgeColor: 'text-[#E5CD9B] bg-[#E5CD9B]/10 border-[#E5CD9B]/25',
  },
  {
    title: 'Course Repeat & Grade Improvement',
    threshold: 'Grade C or Below (GP ≤ 2.49)',
    detail:
      'Students may repeat a maximum of 4 courses during their BS tenure for grade improvement. The higher grade is computed in the cumulative GPA record.',
    icon: Layers,
    badgeColor: 'text-[#C8A96E] bg-[#C8A96E]/15 border-[#C8A96E]/30',
  },
  {
    title: 'Statutory Degree Tenure Limits',
    threshold: 'Maximum 6 Years for 4-Year BS',
    detail:
      'The normal duration for undergraduate programs is 8 semesters (4 years), with a statutory maximum ceiling of 12 semesters (6 years) permitted by the Academic Council.',
    icon: Clock,
    badgeColor: 'text-white/80 bg-white/10 border-white/15',
  },
];

const qecPillars = [
  {
    title: 'Self-Assessment Reports (SAR)',
    text: 'Every department reviews its programs each year against HEC and international standards.',
    icon: FileCheck2,
  },
  {
    title: 'Student & Teaching Feedback',
    text: 'Students rate their courses in a private end-of-semester survey, which we use to improve teaching.',
    icon: Users,
  },
  {
    title: 'Professional Accreditations',
    text: 'We work with NCEAC (Computing), the Pakistan Bar Council (Law), and NAEAC (Agricultural Sciences).',
    icon: ShieldCheck,
  },
];

const academicAuthorities = [
  {
    title: 'The Academic Council',
    role: 'Supreme Academic Authority',
    statute: 'Khyber Pakhtunkhwa Universities Model Act',
    description:
      'Chaired by the Vice Chancellor, the Academic Council approves degree curricula, establishes examination regulations, sanctions new departments, and sets admission policies.',
    icon: Landmark,
    accentBorder: 'border-t-[3px] border-t-[#7F1D1D]',
  },
  {
    title: 'Advanced Studies & Research Board',
    role: 'Postgraduate Governance (ASRB)',
    statute: 'Statutes 2016 Section 14',
    description:
      'Regulates MS/MPhil and PhD admissions, approves research synopses, appoints external thesis evaluators, and ensures rigorous doctoral defense protocols.',
    icon: BookOpen,
    accentBorder: 'border-t-[3px] border-t-[#7F1D1D]',
  },
  {
    title: 'Boards of Studies (BoS)',
    role: 'Departmental Curriculum Committees',
    statute: 'Faculty Level Regulation',
    description:
      'Each academic department maintains a Board of Studies comprising senior faculty and external academic experts who periodically modernize syllabi and recommend course schemes.',
    icon: ScrollText,
    accentBorder: 'border-t-[3px] border-t-[#7F1D1D]',
  },
  {
    title: 'Board of Advanced Studies & Syndicate',
    role: 'Governance & Oversight Committees',
    statute: 'University Model Act · Statutes 2016',
    description:
      'The Syndicate oversees financial and administrative governance while the Affiliation & Examination Committee regulates affiliated colleges, examination conduct, and academic standards.',
    icon: Award,
    accentBorder: 'border-t-[3px] border-t-[#7F1D1D]',
  },
];

const relatedPathways = [
  {
    href: '/faculty',
    title: 'Faculties & 28 Departments',
    description: 'Explore our 5 academic faculties and teaching departments across Charbagh Main Campus and regional branches.',
    icon: Library,
  },
  {
    href: '/research/oric',
    title: 'ORIC & Research Initiatives',
    description: 'Office of Research, Innovation & Commercialization managing alpine research grants, Gandhara archaeology, and patents.',
    icon: BookOpen,
  },
  {
    href: '/affiliated-colleges',
    title: 'Affiliated Colleges Network',
    description: 'Regulatory standards, annual affiliation guidelines, and institutional registry for regional degree colleges.',
    icon: Landmark,
  },
];

export default function AcademicsPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen text-[#14291D] relative">
      {/* ─── Subtle Architectural Ambient Glow ─── */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-[650px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(21,59,39,0.06),rgba(255,255,255,0))] pointer-events-none"
      />

      {/* ─── 1. Deep Forest Green (#153B27) Page Header ─── */}
      <PageHeader
        tag="ACADEMIC EXCELLENCE & CURRICULAR FRAMEWORK"
        eyebrow="ACADEMIC AFFAIRS & GOVERNANCE"
        title="Academics & Scholastic Framework"
        subtitle="How our courses, semesters, grading, and quality checks work — across 28 teaching departments at Charbagh Main Campus."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Academics' },
        ]}
        backgroundImage="/images/campus/charbagh-campus.jpg"
      />

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14 pb-20 sm:pb-28 relative z-10">
        {/* ─── 2. Editorial Year-at-a-Glance Strip (replaces overlapping crimson stat bar) ─── */}
        <div className="-mt-10 sm:-mt-12 relative z-20 mb-14 lg:mb-18">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 rounded-2xl overflow-hidden border border-stone-200 shadow-xs">
            {[
              { value: '05', label: 'Academic Faculties', detail: 'Statutory University Faculties' },
              { value: '28', label: 'Teaching Departments', detail: 'Undergraduate & Postgraduate' },
              { value: '91.4%', label: 'HEC QEC Rating', detail: 'W-Category National Quality' },
              { value: '100%', label: 'Chartered & Recognized', detail: 'HEC & Statutory Councils' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white p-4 sm:p-6 text-center sm:text-left">
                <span className="block font-serif text-2xl sm:text-4xl font-bold text-[#153B27] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-stone-700 font-bold mt-1 block">
                  {stat.label}
                </span>
                <span className="text-[10px] sm:text-[11px] text-stone-500 mt-0.5 block">{stat.detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 3. Primary Academic Gateways: 3 High-Impact Spec Cards ─── */}
        <section aria-labelledby="academic-gateways-heading" className="mb-16 lg:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-0.5 w-6 bg-[#7F1D1D]" />
                <span className="text-xs uppercase tracking-[0.18em] text-[#7F1D1D] font-bold">
                  Core Academic Portals
                </span>
              </div>
              <h2
                id="academic-gateways-heading"
                className="font-serif text-2xl sm:text-4xl text-[#14291D] font-bold tracking-[-0.02em]"
              >
                Schedules, Documents &amp; Degree Pathways
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md sm:text-right leading-relaxed">
              Official portals providing verified academic timetables, downloadable statutory forms, and comprehensive degree curricula.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {academicGateways.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative flex flex-col justify-between bg-white border border-stone-200 border-t-[3px] border-t-[#153B27] hover:border-[#7F1D1D] hover:border-t-[#7F1D1D] rounded-xl p-5 sm:p-6 shadow-sm hover:-translate-y-[2px] hover:shadow-md transition-all duration-200 ease-out"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-stone-100 text-[#153B27] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-serif text-lg font-bold text-[#7F1D1D] tracking-widest tabular-nums">
                        {item.roman}
                      </span>
                    </div>

                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#7F1D1D] font-bold block mb-2">
                      {item.tag}
                    </span>

                    <h3 className="font-serif text-2xl font-bold text-[#14291D] group-hover:text-[#153B27] transition-colors mb-3 leading-tight tracking-[-0.01em]">
                      {item.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed mb-5">
                      {item.description}
                    </p>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium bg-stone-50 border border-stone-200 text-stone-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7F1D1D] shrink-0" />
                      <span>{item.liveStatus}</span>
                    </div>
                  </div>

                  <div className="pt-5 mt-6 border-t border-stone-200 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.12em] text-[#7F1D1D]">
                    <span>{item.cta}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ─── 4. Scholarly Infrastructure & Semester System (Editorial Split) ─── */}
        <section
          aria-labelledby="scholarly-ecosystem-heading"
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-16 lg:mb-20"
        >
          {/* Authentic Campus Photograph Frame */}
          <div className="lg:col-span-7 group relative rounded-2xl overflow-hidden shadow-lg min-h-[360px] sm:min-h-[440px] lg:min-h-[540px]">
            <Image
              src="/images/campus/charbagh-campus.jpg"
              alt="Charbagh Main Campus academic and administration blocks at the University of Swat"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1912]/80 via-[#0C1912]/20 to-transparent" />

            {/* Frosted Glass Badge */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/95 text-[#153B27] text-xs font-bold uppercase tracking-[0.14em] shadow-lg backdrop-blur-md">
                <Library className="w-4 h-4 text-[#7F1D1D]" />
                <span>Charbagh Main Campus · Alpine Academic Complex</span>
              </div>
              <p className="text-xs text-stone-200 mt-2 font-medium drop-shadow-sm max-w-md">
                100% solar-powered academic faculties surrounded by the Hindukush foothills, housing state-of-the-art computational and natural science research facilities.
              </p>
            </div>
          </div>

          {/* Editorial Discourse & Standards */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-0.5 w-6 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-[0.18em] text-[#153B27] font-bold">
                  Academic Framework
                </span>
              </div>

              <h2
                id="scholarly-ecosystem-heading"
                className="font-serif text-2xl sm:text-3xl lg:text-[2rem] text-[#14291D] font-bold tracking-[-0.02em] leading-[1.15] mb-4"
              >
                A rigorous, student-centered academic framework
              </h2>

              <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                Teaching and assessment at the University of Swat are governed by the statutory Semester Regulations 2016. Every discipline integrates continuous formative assessment, midterm evaluation, and rigorous terminal examinations aligned with HEC guidelines.
              </p>
            </div>

            <ul className="space-y-4 border-t border-stone-200 pt-6">
              {[
                {
                  title: 'Two Regular Terms / Year',
                  text: 'Fall and Spring semesters comprise 16–18 instructional weeks each with structured coursework, midterms, and terminal examinations.',
                },
                {
                  title: 'Mandatory 75% Attendance',
                  text: 'Scholars must maintain a minimum 75% physical attendance in classroom lectures and laboratory practicals to qualify for examination entry.',
                },
                {
                  title: 'Outcome-Based Education (OBE)',
                  text: 'Curricula are mapped directly to program learning outcomes (PLOs), ensuring modern market readiness across technology, sciences, and humanities.',
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#7F1D1D] shrink-0" />
                  <div>
                    <span className="block text-sm font-bold text-[#14291D] mb-0.5">{item.title}</span>
                    <span className="block text-xs sm:text-[13px] text-stone-600 leading-relaxed">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ─── 5. Grading Scale & Academic Progression Framework (2-Column Grid) ─── */}
        <section aria-labelledby="assessment-framework-heading" className="mb-16 lg:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-0.5 w-6 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-[0.18em] text-[#153B27] font-bold">
                  Standards &amp; Regulations
                </span>
              </div>
              <h2
                id="assessment-framework-heading"
                className="font-serif text-3xl sm:text-4xl text-[#14291D] font-bold tracking-[-0.02em]"
              >
                Semester Grading &amp; Academic Progression
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md sm:text-right leading-relaxed">
              Transparent assessment standards, GPA calculation formulas, and statutory probation rules governed by University of Swat Examination Statutes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left: Official Grading Table (7 cols) */}
            <article className="lg:col-span-7 p-5 sm:p-8 rounded-2xl bg-white border border-stone-300 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-200">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#14291D] tracking-[-0.01em]">
                    HEC-Aligned Grading System
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Continuous assessment (40%) + Terminal examination (60%)
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#153B27]/10 text-[#153B27]">
                  Statutes 2016
                </span>
              </div>

              {/* Mobile Card Layout for small screens */}
              <div className="sm:hidden space-y-2.5">
                {gradeMatrix.map((row) => (
                  <div key={row.grade} className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`inline-block font-bold px-2 py-0.5 rounded text-xs ${row.tone}`}>
                          {row.grade}
                        </span>
                        <span className="font-semibold text-stone-900 text-xs">{row.marks}</span>
                      </div>
                      <span className="text-[11px] text-stone-500 mt-0.5 block">{row.remark}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-stone-400 block">Grade Points</span>
                      <span className="tabular-nums font-bold text-sm text-stone-800">{row.points}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Table View */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full min-w-[500px] text-left border-collapse">
                  <caption className="sr-only">University of Swat official grading scale and grade points</caption>
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-600 font-bold uppercase tracking-[0.14em] text-[10px]">
                      <th scope="col" className="py-2.5 px-3">Marks Percentage</th>
                      <th scope="col" className="py-2.5 px-3">Grade</th>
                      <th scope="col" className="py-2.5 px-3">Grade Points</th>
                      <th scope="col" className="py-2.5 px-3">Academic Remark</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs sm:text-[13px] text-stone-700">
                    {gradeMatrix.map((row) => (
                      <tr key={row.grade} className="hover:bg-stone-50/70 transition-colors">
                        <td className="py-3 px-3 font-medium text-stone-900">{row.marks}</td>
                        <td className="py-3 px-3">
                          <span className={`inline-block font-bold px-2 py-0.5 rounded text-xs ${row.tone}`}>
                            {row.grade}
                          </span>
                        </td>
                        <td className="py-3 px-3 tabular-nums font-semibold text-stone-800">{row.points}</td>
                        <td className="py-3 px-3 text-stone-600">{row.remark}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-5 p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#C8A96E] shrink-0 mt-0.5" />
                <p className="text-[11px] text-stone-600 leading-relaxed">
                  <strong>Graduation Benchmark:</strong> A minimum Cumulative Grade Point Average (CGPA) of <strong>2.00 / 4.00</strong> is required for undergraduate BS degrees; <strong>2.50 / 4.00</strong> for MS/MPhil; and <strong>3.00 / 4.00</strong> for PhD doctoral dissertations.
                </p>
              </div>
            </article>

            {/* Right: Progression & Probation Standards (5 cols) */}
            <article className="lg:col-span-5 p-5 sm:p-8 rounded-2xl bg-[#153B27] text-white border border-white/10 shadow-[0_24px_48px_-22px_rgba(12,25,18,0.5)] space-y-5">
              <div className="pb-4 border-b border-white/15">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-[-0.01em]">
                  Academic Standing &amp; Probation
                </h3>
                <p className="text-xs text-white/60 mt-0.5">
                  Statutory guidelines governing student progression and course repeats
                </p>
              </div>

              <div className="space-y-4">
                {progressionRules.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-4 rounded-xl bg-white/[0.07] border border-white/[0.12] hover:bg-white/[0.12] hover:border-white/20 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-3 mb-1.5">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-[#C8A96E]" />
                          <h4 className="font-serif text-base font-bold text-white">{item.title}</h4>
                        </div>
                      </div>
                      <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border mb-2 ${item.badgeColor}`}>
                        {item.threshold}
                      </span>
                      <p className="text-xs text-white/70 leading-relaxed">{item.detail}</p>
                    </div>
                  );
                })}
              </div>
            </article>
          </div>
        </section>

        {/* ─── 6. Quality Enhancement Cell (QEC) & National Accreditations ─── */}
        <section aria-labelledby="qec-heading" className="mb-16 lg:mb-20">
          <div className="rounded-2xl bg-[#0F291B] text-white border border-[#0C1912] shadow-xl p-5 sm:p-10 lg:p-12 relative overflow-hidden">
            {/* Ambient gold glow */}
            <div aria-hidden="true" className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#C8A96E]/12 blur-3xl pointer-events-none" />
            <div aria-hidden="true" className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#153B27]/40 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: QEC Standing & Scorecard */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-0.5 w-6 bg-[#C8A96E]" />
                  <span className="text-xs uppercase tracking-[0.18em] text-[#C8A96E] font-bold">
                    Quality Assurance
                  </span>
                </div>

                <h2
                  id="qec-heading"
                  className="font-serif text-3xl sm:text-4xl text-white font-bold tracking-tight mb-4 leading-tight"
                >
                  Quality Enhancement Cell (QEC)
                </h2>

                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6">
                  The Quality Enhancement Cell at University of Swat enforces institutional excellence across pedagogy, research integrity, and student learning environments. In the latest HEC national audit, University of Swat achieved a commanding score:
                </p>

                {/* Big Score Callout */}
                <div className="p-5 rounded-xl bg-white/[0.07] border border-white/10 backdrop-blur-sm flex items-center justify-between mb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.16em] text-stone-300 font-bold block mb-1">
                      HEC National Standing
                    </span>
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#C8A96E]">
                      91.4% Score
                    </span>
                    <span className="text-[11px] text-stone-300 block mt-0.5">
                      W-Category Highest Quality Bracket
                    </span>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-[#C8A96E]/15 border border-[#C8A96E]/30 flex items-center justify-center text-[#C8A96E]">
                    <Award className="w-7 h-7" />
                  </div>
                </div>

                <Link
                  href="/academics/downloads"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#C8A96E] hover:text-white transition-colors"
                >
                  <span>Download Quality Evaluation Guidelines</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right Column: 3 Core QEC Functions */}
              <div className="lg:col-span-7 space-y-4">
                {qecPillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="p-5 sm:p-6 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-sm hover:bg-white/[0.09] transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#C8A96E]/15 text-[#C8A96E] flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-serif text-lg font-bold text-white mb-1.5">{pillar.title}</h3>
                          <p className="text-xs sm:text-[13px] text-stone-300 leading-relaxed">{pillar.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 7. Statutory Academic Authorities & Governance ─── */}
        <section aria-labelledby="authorities-heading" className="mb-16 lg:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-0.5 w-6 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-[0.18em] text-[#153B27] font-bold">
                  Statutory Oversight
                </span>
              </div>
              <h2
                id="authorities-heading"
                className="font-serif text-3xl sm:text-4xl text-[#14291D] font-bold tracking-[-0.02em]"
              >
                Academic Authorities &amp; Governance
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md sm:text-right leading-relaxed">
              Statutory bodies empowered under the University Model Act to formulate curricula, approve examination statutes, and oversee doctoral research.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicAuthorities.map((auth) => {
              const Icon = auth.icon;
              return (
                <div
                  key={auth.title}
                  className={`p-6 sm:p-7 rounded-2xl bg-white border border-stone-300 shadow-xs hover:-translate-y-[2px] transition-all duration-200 flex flex-col justify-between ${auth.accentBorder}`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-stone-100 text-[#153B27] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7F1D1D] block mb-1.5">
                      {auth.role}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#14291D] mb-1.5 leading-snug">
                      {auth.title}
                    </h3>
                    <span className="inline-block text-[11px] font-medium text-[#C8A96E] mb-3">
                      {auth.statute}
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {auth.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── 8. Comprehensive Academic Navigation Gateways ─── */}
        <section aria-labelledby="pathways-heading" className="border-t border-stone-200 pt-12 sm:pt-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-0.5 w-6 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-[0.18em] text-[#153B27] font-bold">
                  Academic Ecosystem
                </span>
              </div>
              <h2
                id="pathways-heading"
                className="font-serif text-2xl sm:text-3xl text-[#14291D] font-bold tracking-[-0.02em]"
              >
                Related Academic Pathways
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md sm:text-right leading-relaxed">
              Explore teaching faculties, admission requirements, funded research centers, and affiliated colleges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {relatedPathways.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group p-5 rounded-xl bg-white border border-stone-300 hover:border-[#153B27]/40 hover:-translate-y-[2px] hover:shadow-[0_18px_36px_-20px_rgba(21,59,39,0.35)] transition-all duration-200 ease-out flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-stone-100 text-[#153B27] flex items-center justify-center mb-4 group-hover:bg-[#153B27] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#14291D] mb-1.5 leading-snug group-hover:text-[#153B27] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7F1D1D]">
                    <span>Explore Pathway</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
