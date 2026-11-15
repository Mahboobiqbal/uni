import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  FileCheck2,
  FileText,
  GraduationCap,
  Landmark,
  Library,
  ShieldCheck,
} from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Academic Structure & Regulations | University of Swat',
  description:
    'Academic calendar, semester regulations, curricula framework, library resources, and quality standards at the University of Swat.',
};

const academicActions = [
  {
    href: '/academics/calendar',
    tag: 'Semester Timeline',
    title: 'Academic Calendar 2026–27',
    description:
      'Semester commencement, midterm and final examinations, registration windows, and statutory holidays for each term.',
    cta: 'View Academic Calendar',
    icon: CalendarDays,
    accent: 'text-[#153B27]',
    accentBg: 'bg-[#153B27]/10',
    accentBorder: 'group-hover:border-[#153B27]/35',
  },
  {
    href: '/academics/downloads',
    tag: 'Official Documents',
    title: 'Downloads & Forms',
    description:
      'Statutes 2016, research synopsis formats, admission and clearance proformas, and affiliation regulations in one repository.',
    cta: 'Open Download Center',
    icon: FileText,
    accent: 'text-[#7F1D1D]',
    accentBg: 'bg-[#7F1D1D]/10',
    accentBorder: 'group-hover:border-[#7F1D1D]/35',
  },
  {
    href: '/programs',
    tag: 'Academic Degrees',
    title: 'Degrees & Curricula',
    description:
      'Undergraduate, graduate, and doctoral degree specifications, credit structures, and scheme of studies across five faculties.',
    cta: 'Explore Degree Directory',
    icon: GraduationCap,
    accent: 'text-[#7A5A1E]',
    accentBg: 'bg-[#C8A96E]/20',
    accentBorder: 'group-hover:border-[#C8A96E]/60',
  },
];

const gradeRows = [
  { marks: '85% and above', grade: 'A', points: '4.00', remark: 'Outstanding', tone: 'text-[#153B27]' },
  { marks: '80% – 84%', grade: 'A-', points: '3.66 – 3.99', remark: 'Excellent', tone: 'text-[#153B27]' },
  { marks: '75% – 79%', grade: 'B+', points: '3.33 – 3.65', remark: 'Very Good', tone: 'text-[#14291D]' },
  { marks: '70% – 74%', grade: 'B', points: '3.00 – 3.32', remark: 'Good', tone: 'text-[#14291D]' },
  { marks: '60% – 69%', grade: 'C', points: '2.00 – 2.99', remark: 'Satisfactory', tone: 'text-[#14291D]' },
  { marks: 'Below 50%', grade: 'F', points: '0.00', remark: 'Fail', tone: 'text-[#7F1D1D]' },
];

const qecHighlights = [
  {
    title: 'Self-Assessment Reports (SAR)',
    text: 'Periodic academic audits of undergraduate and postgraduate departments to ensure outcome-based education across disciplines.',
    icon: FileCheck2,
  },
  {
    title: 'Faculty & Course Evaluations',
    text: 'Confidential end-of-semester feedback that strengthens teaching pedagogy, curricula, and the student learning experience.',
    icon: BookOpen,
  },
  {
    title: 'Accreditation & Councils',
    text: 'Direct coordination with HEC Quality Assurance Agency and statutory councils including NCEAC and the Pakistan Bar Council.',
    icon: ShieldCheck,
  },
];

const frameworkLinks = [
  {
    href: '/admissions',
    title: 'Admissions & Eligibility',
    description: 'Entry requirements, quotas, and application steps for BS, MS/MPhil, and PhD programs.',
    icon: Landmark,
  },
  {
    href: '/faculty',
    title: 'Faculties & Departments',
    description: 'Teaching departments, faculty directories, and academic units across Charbagh and sub-campuses.',
    icon: Library,
  },
  {
    href: '/research',
    title: 'Research & ORIC',
    description: 'Advanced studies, funded projects, and institutional research priorities in Swat Valley.',
    icon: BookOpen,
  },
  {
    href: '/about',
    title: 'University Charter & Governance',
    description: 'Statutory mandate, institutional history, and the academic mission of University of Swat.',
    icon: ShieldCheck,
  },
];

export default function AcademicsPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen text-[#14291D]">
      <PageHeader
        tag="Academic Affairs"
        eyebrow="Academic Policies · University of Swat"
        title="Academics & Scholastic Framework"
        subtitle="Semester regulations, academic calendars, statutory forms, and quality standards that support teaching, learning, and research at the University of Swat."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Academics' },
        ]}
      >
        <dl className="flex flex-wrap items-stretch border-t border-white/15 pt-6 sm:pt-7 gap-y-4">
          {[
            { value: '05', label: 'Faculties' },
            { value: '20', label: 'Departments' },
            { value: '02', label: 'Semesters / Year' },
            { value: '91.4%', label: 'HEC QEC Score' },
            { value: 'HEC', label: 'Chartered & Recognized' },
          ].map((fact, idx, arr) => (
            <div
              key={fact.label}
              className={`flex flex-col justify-center pr-6 mr-6 sm:pr-8 sm:mr-8 ${
                idx < arr.length - 1 ? 'border-r border-white/15' : ''
              }`}
            >
              <dt className="order-2 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-white/55 font-semibold mt-1.5">
                {fact.label}
              </dt>
              <dd className="order-1 font-serif text-2xl sm:text-3xl lg:text-4xl text-[#C8A96E] font-bold leading-none tabular-nums">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-14 sm:py-16 lg:py-20 space-y-14 sm:space-y-16">
        {/* Primary academic actions */}
        <section aria-labelledby="academic-actions-heading">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-0.5 w-6 bg-[#7F1D1D]" />
                <span className="text-xs uppercase tracking-[0.18em] text-[#7F1D1D] font-bold">
                  Academic Services
                </span>
              </div>
              <h2
                id="academic-actions-heading"
                className="font-serif text-3xl sm:text-4xl text-[#14291D] font-bold tracking-[-0.02em]"
              >
                Schedules, Documents &amp; Degree Pathways
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 max-w-md sm:text-right leading-relaxed">
              Access the academic calendar, statutory downloads, and complete degree specifications from a single academic hub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {academicActions.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:-translate-y-[2px] hover:shadow-[0_28px_48px_-22px_rgba(12,25,18,0.35)] transition-all duration-200 ease-out ${item.accentBorder}`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl ${item.accentBg} ${item.accent} flex items-center justify-center mb-5`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] uppercase tracking-[0.18em] ${item.accent} font-bold block mb-2`}>
                      {item.tag}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#14291D] group-hover:text-[#153B27] transition-colors mb-3 leading-tight tracking-[-0.01em]">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-5 mt-6 border-t border-stone-100 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.12em] text-[#153B27]">
                    <span className="group-hover:text-[#7F1D1D] transition-colors">{item.cta}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Scholarly environment — photo-led editorial split */}
        <section
          aria-labelledby="scholarly-environment-heading"
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
        >
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-stone-200/80 bg-stone-200 min-h-[320px] sm:min-h-[420px] lg:min-h-[520px]">
            <Image
              src="/images/campus/charbagh-campus.jpg"
              alt="Charbagh Main Campus academic blocks at the University of Swat"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.025]"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1912]/70 via-[#0C1912]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 text-[#153B27] text-[10px] font-bold uppercase tracking-[0.16em] backdrop-blur-sm">
                <Library className="w-3.5 h-3.5" />
                Charbagh Main Campus
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl bg-white border border-stone-200/90 p-7 sm:p-8 lg:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-0.5 w-6 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-[0.18em] text-[#153B27] font-bold">
                  Scholarly Environment
                </span>
              </div>
              <h2
                id="scholarly-environment-heading"
                className="font-serif text-3xl sm:text-[2.1rem] text-[#14291D] font-bold tracking-[-0.02em] leading-[1.12] mb-4"
              >
                A regulated, student-centered academic framework
              </h2>
              <p className="font-sans text-sm sm:text-[15px] text-stone-600 leading-relaxed mb-6">
                From semester registration to final examinations, University of Swat follows HEC-aligned academic regulations, transparent assessment, and continuous quality review across every faculty and department.
              </p>
            </div>

            <ul className="space-y-4 border-t border-stone-100 pt-6">
              {[
                { title: 'Semester System', text: 'Two regular semesters each academic year with structured coursework, midterms, and terminal examinations.' },
                { title: 'Regulatory Compliance', text: 'Academic conduct governed by University Statutes 2016 and HEC semester examination regulations.' },
                { title: 'Student Records & Support', text: 'Clearance, transcripts, and degree verification coordinated through examinations and departmental offices.' },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#7F1D1D] shrink-0" />
                  <div>
                    <span className="block text-sm font-semibold text-[#14291D] mb-0.5">{item.title}</span>
                    <span className="block text-xs sm:text-[13px] text-stone-600 leading-relaxed">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Regulations & quality */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8" aria-label="Academic regulations and quality assurance">
          {/* Grading framework */}
          <article className="p-7 sm:p-8 lg:p-10 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-0.5 w-6 bg-[#153B27]" />
              <span className="text-xs uppercase tracking-[0.18em] text-[#153B27] font-bold">
                Grading &amp; Assessment
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-[1.7rem] font-bold text-[#14291D] mb-3 tracking-[-0.01em]">
              Semester Grading &amp; GPA Framework
            </h3>
            <p className="font-sans text-sm text-stone-600 leading-relaxed mb-6">
              Student performance is assessed through continuous assessment, mid-term examinations, and final terminal evaluations under HEC-aligned semester regulations.
            </p>

            <div className="overflow-x-auto -mx-2 sm:mx-0">
              <table className="w-full min-w-[520px] text-left border-collapse">
                <caption className="sr-only">University of Swat grading scale and grade point averages</caption>
                <thead>
                  <tr className="border-b border-stone-200 text-stone-500 font-bold uppercase tracking-[0.14em] text-[10px]">
                    <th scope="col" className="py-3 px-2 sm:px-0">Marks Percentage</th>
                    <th scope="col" className="py-3 px-2 sm:px-0">Grade</th>
                    <th scope="col" className="py-3 px-2 sm:px-0">Grade Points</th>
                    <th scope="col" className="py-3 px-2 sm:px-0">Remarks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-xs sm:text-[13px] text-stone-700">
                  {gradeRows.map((row) => (
                    <tr key={row.grade} className="hover:bg-stone-50/70 transition-colors">
                      <td className="py-3 px-2 sm:px-0 font-medium">{row.marks}</td>
                      <td className={`py-3 px-2 sm:px-0 font-bold ${row.tone}`}>{row.grade}</td>
                      <td className="py-3 px-2 sm:px-0 tabular-nums">{row.points}</td>
                      <td className="py-3 px-2 sm:px-0">{row.remark}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-5 text-[11px] text-stone-500 leading-relaxed border-t border-stone-100 pt-4">
              Minimum attendance and progression requirements are defined in the University examination statutes and departmental regulations.
            </p>
          </article>

          {/* Quality enhancement */}
          <article className="p-7 sm:p-8 lg:p-10 rounded-2xl bg-[#0F291B] text-white border border-[#0C1912] shadow-[0_24px_50px_-28px_rgba(12,25,18,0.7)] relative overflow-hidden">
            <div aria-hidden="true" className="absolute -top-20 -right-16 w-64 h-64 rounded-full bg-[#C8A96E]/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-0.5 w-6 bg-[#C8A96E]" />
                <span className="text-xs uppercase tracking-[0.18em] text-[#C8A96E] font-bold">
                  Quality Assurance
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-[1.7rem] font-bold text-white mb-3 tracking-[-0.01em]">
                Quality Enhancement Cell (QEC)
              </h3>
              <p className="font-sans text-sm text-stone-200 leading-relaxed mb-7">
                The Quality Enhancement Cell upholds academic standards across teaching and research. The University of Swat holds a <strong className="text-[#C8A96E] font-semibold">91.4% score in HEC W-Category</strong> institutional evaluation.
              </p>

              <div className="space-y-3">
                {qecHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-4 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-[1px]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#C8A96E]/15 text-[#C8A96E] flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="block text-sm font-semibold text-white mb-0.5">{item.title}</span>
                          <span className="block text-xs sm:text-[13px] text-stone-300 leading-relaxed">{item.text}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        </section>

        {/* Framework links */}
        <section aria-labelledby="framework-links-heading" className="border-t border-stone-200 pt-12 sm:pt-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-0.5 w-6 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-[0.18em] text-[#153B27] font-bold">
                  Academic Framework
                </span>
              </div>
              <h2
                id="framework-links-heading"
                className="font-serif text-2xl sm:text-3xl text-[#14291D] font-bold tracking-[-0.02em]"
              >
                Related Academic Pathways
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {frameworkLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group p-5 rounded-xl bg-white border border-stone-200/90 hover:border-[#153B27]/35 hover:-translate-y-[2px] hover:shadow-[0_18px_36px_-20px_rgba(12,25,18,0.35)] transition-all duration-200 ease-out"
                >
                  <div className="w-10 h-10 rounded-lg bg-stone-100 text-[#153B27] flex items-center justify-center mb-4 group-hover:bg-[#153B27] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#14291D] mb-1.5 leading-snug">{item.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{item.description}</p>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
