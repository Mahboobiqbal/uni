import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  GraduationCap,
  Landmark,
  Sparkles,
} from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { programsDetailCatalog } from '@/data/programsDetailData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return programsDetailCatalog.map((prog) => ({
    slug: prog.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const prog = programsDetailCatalog.find((p) => p.slug === slug);
  if (!prog) return { title: 'Program Not Found | University of Swat' };
  return {
    title: `${prog.name} | University of Swat`,
    description: prog.description,
  };
}

/** Real departmental photography — only where an authentic subject image exists. */
const PROGRAM_PHOTO: Record<string, { src: string; alt: string }> = {
  'bs-chemistry': {
    src: '/images/departments/department-of-chemistry_1_img.jpg',
    alt: 'Department of Chemistry at the University of Swat',
  },
  'bs-environmental-sciences': {
    src: '/images/departments/department-of-environmental-sciences_4_img.jpg',
    alt: 'Department of Environmental Sciences at the University of Swat',
  },
};

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'] as const;

const accreditedBy = (prog: { slug: string; name: string }) =>
  prog.slug.includes('llb') ? 'PBC · HEC Recognized' : 'HEC Recognized';

const termType = (prog: { slug: string }, term: string) =>
  prog.slug.includes('llb') ? term.replace('Year', 'Year of Study') : term;

const shortDuration = (duration: string) => duration.replace(/\s*\(.*?\)\s*/g, '').trim();

export default async function ProgramDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const prog = programsDetailCatalog.find((p) => p.slug === slug);

  if (!prog) {
    notFound();
  }

  const photo = PROGRAM_PHOTO[prog.slug];

  return (
    <div className="bg-[#F6F5F0] min-h-screen text-[#14291D]">
      <PageHeader
        eyebrow={prog.facultyGroup}
        title={prog.name}
        description={prog.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academics' },
          { label: 'Degrees & Curricula', href: '/programs' },
          { label: prog.name },
        ]}
      >
        {/* Verified institutional fact strip — same language as /programs */}
        <dl className="flex flex-wrap items-stretch border-t border-white/15 pt-6 sm:pt-7 gap-y-4">
          {[
            { value: shortDuration(prog.duration), label: 'Duration' },
            { value: `${prog.creditHours} Credits`, label: 'Credit Hours' },
            { value: accreditedBy(prog), label: 'Accreditation' },
            { value: prog.feePerSemester.split('/')[0].replace(/\s*\(Open Merit\)\s*/i, '').trim(), label: 'Open Merit Fee' },
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

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* ─── Main Column ─── */}
          <div className="lg:col-span-8 space-y-12 lg:space-y-14">
            {/* Curricular Scope — editorial split, photograph when one exists */}
            <section aria-labelledby="scope-heading" className="scroll-mt-24">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="h-0.5 w-6 bg-[#C8A96E]" />
                <span className="text-xs uppercase tracking-widest text-[#7A5A1E] font-bold">
                  Curricular Scope
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
                <div>
                  <h2
                    id="scope-heading"
                    className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D] tracking-[-0.02em] leading-[1.2] mb-5"
                  >
                    About the <span className="italic text-[#153B27]">Program</span>
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-stone-600 leading-relaxed">
                    {prog.description}
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-[11px] text-stone-500 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7F1D1D] shrink-0" />
                    <span>{prog.departmentName}</span>
                  </div>
                </div>

                {photo ? (
                  <div className="group relative rounded-3xl overflow-hidden border border-stone-300 shadow-[0_24px_50px_-24px_rgba(12,25,18,0.35)]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={960}
                      height={720}
                      className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#0C1912]/25 via-transparent to-transparent"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute top-0 left-0 h-[3px] w-16 bg-[#C8A96E]"
                    />
                  </div>
                ) : (
                  <div className="relative rounded-3xl bg-[#153B27] text-white overflow-hidden min-h-[280px] flex flex-col justify-end p-7 sm:p-8">
                    <div
                      aria-hidden="true"
                      className="absolute -top-20 -right-16 w-64 h-64 rounded-full bg-[#C8A96E]/15 blur-3xl pointer-events-none"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute right-5 -bottom-12 w-44 h-44 opacity-[0.07] pointer-events-none"
                    >
                      <img src="/uos-logo-circle.png" alt="" className="w-full h-full object-contain invert" />
                    </div>
                    <span
                      aria-hidden="true"
                      className="absolute top-0 left-0 h-[3px] w-16 bg-[#C8A96E]"
                    />
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#C8A96E] font-bold mb-3">
                      Semester System · HEC Recognized
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-bold leading-[1.25] max-w-sm">
                      {prog.degreeLevel} degree delivered across {shortDuration(prog.duration).toLowerCase()} on the
                      Charbagh Main Campus, Swat.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Eligibility — gold-rule callout */}
            <section aria-labelledby="eligibility-heading" className="scroll-mt-24">
              <div className="relative pl-6 sm:pl-7 py-1">
                <div aria-hidden="true" className="absolute left-0 top-1 bottom-1 w-[3px] bg-[#C8A96E]" />
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xs uppercase tracking-widest text-[#7A5A1E] font-bold">
                    Eligibility &amp; Admission Requisites
                  </span>
                </div>
                <h2
                  id="eligibility-heading"
                  className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D] tracking-[-0.02em] mb-4"
                >
                  Who Can Apply
                </h2>
                <p className="font-sans text-sm sm:text-base text-stone-600 leading-relaxed max-w-prose">
                  {prog.eligibility}
                </p>
                <p className="mt-4 flex items-start gap-2 text-xs text-stone-500 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#B48A3E] shrink-0 mt-0.5" />
                  <span>
                    Candidates with equivalent credentials are evaluated on a case-by-case basis by the
                    admissions committee.
                  </span>
                </p>
              </div>
            </section>

            {/* Learning Outcomes — numbered serif index */}
            <section aria-labelledby="outcomes-heading" className="scroll-mt-24">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="h-0.5 w-6 bg-[#7F1D1D]" />
                <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                  Curricular Objectives
                </span>
              </div>
              <div className="flex items-end justify-between gap-4 mb-6">
                <h2
                  id="outcomes-heading"
                  className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D] tracking-[-0.02em]"
                >
                  Key Learning Outcomes
                </h2>
                <span className="text-[10px] uppercase tracking-[0.16em] text-stone-500 font-bold tabular-nums whitespace-nowrap">
                  {String(prog.learningOutcomes.length).padStart(2, '0')} Outcomes
                </span>
              </div>
              <ol className="bg-white border border-stone-300 rounded-3xl divide-y divide-stone-200 overflow-hidden shadow-xs">
                {prog.learningOutcomes.map((outcome, idx) => (
                  <li
                    key={idx}
                    className="group grid grid-cols-[auto_1fr] gap-4 sm:gap-5 p-5 sm:p-6 items-start hover:bg-[#FBFAF7] transition-colors"
                  >
                    <span
                      aria-hidden="true"
                      className="font-serif text-xl sm:text-2xl font-bold text-[#153B27] tabular-nums leading-none pt-0.5 border-r border-stone-200 pr-4 sm:pr-5 shrink-0"
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-sans text-sm sm:text-base text-stone-700 leading-relaxed group-hover:text-[#14291D] transition-colors">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Semester Scheme — ruled index timeline */}
            <section aria-labelledby="scheme-heading" className="scroll-mt-24">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="h-0.5 w-6 bg-[#B48A3E]" />
                <span className="text-xs uppercase tracking-widest text-[#7A5A1E] font-bold">
                  Academic Roadmap
                </span>
              </div>
              <div className="flex items-end justify-between gap-4 mb-6">
                <h2
                  id="scheme-heading"
                  className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D] tracking-[-0.02em]"
                >
                  Semester-by-Semester Scheme of Studies
                </h2>
                <span className="text-[10px] uppercase tracking-[0.16em] text-stone-500 font-bold tabular-nums whitespace-nowrap">
                  {String(prog.semesterOutline.length).padStart(2, '0')} Terms
                </span>
              </div>

              <ol className="bg-white border border-stone-300 rounded-3xl divide-y divide-stone-200 overflow-hidden shadow-xs">
                {prog.semesterOutline.map((term, tIdx) => {
                  const capstoneHighlight = term.courses.some((c) =>
                    /\b(final year|capstone|thesis|internship)\b/i.test(c)
                  );
                  return (
                    <li
                      key={tIdx}
                      className="group grid grid-cols-[auto_1fr] sm:grid-cols-[auto_auto_1fr] gap-3 sm:gap-5 p-5 sm:p-6 items-start hover:bg-[#FBFAF7] transition-colors"
                    >
                      {/* Term numeral */}
                      <div className="flex flex-col items-center self-stretch pt-0.5">
                        <span
                          aria-hidden="true"
                          className="font-serif text-base sm:text-lg font-bold text-[#153B27] tabular-nums leading-none"
                        >
                          {String(tIdx + 1).padStart(2, '0')}
                        </span>
                        <span aria-hidden="true" className="mt-2 w-px flex-1 bg-stone-200" />
                      </div>

                      {/* Term label */}
                      <div className="shrink-0 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs sm:text-[13px] font-bold text-[#14291D] leading-snug">
                            {termType(prog, term.semester)}
                          </span>
                          {capstoneHighlight && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FBF6EA] border border-[#C8A96E]/60 text-[9px] font-bold uppercase tracking-[0.12em] text-[#7A5A1E]">
                              <Sparkles className="w-2.5 h-2.5" />
                              Capstone
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.14em] text-stone-500 font-bold tabular-nums mt-1 block">
                          {term.courses.length} Courses
                        </span>
                      </div>

                      {/* Courses */}
                      <ul className="min-w-0 text-[11px] sm:text-xs text-stone-600 leading-snug flex flex-wrap gap-x-4 gap-y-1.5">
                        {term.courses.map((course, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-1.5">
                            <span aria-hidden="true" className="text-[#C8A96E] font-bold" style={{ fontSize: '0.7em' }}>
                              &mdash;
                            </span>
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ol>
            </section>

            {/* Career Prospects — Roman numeral hairline rows */}
            <section aria-labelledby="careers-heading" className="scroll-mt-24">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="h-0.5 w-6 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">
                  Professional Pathways
                </span>
              </div>
              <div className="flex items-end justify-between gap-4 mb-6">
                <h2
                  id="careers-heading"
                  className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D] tracking-[-0.02em]"
                >
                  Career Prospects
                </h2>
              </div>
              <ol className="bg-white border border-stone-300 rounded-3xl divide-y divide-stone-200 overflow-hidden shadow-xs">
                {prog.careerProspects.map((career, idx) => (
                  <li
                    key={idx}
                    className="group flex items-center gap-4 sm:gap-5 p-5 sm:p-6 hover:bg-[#FBFAF7] transition-colors"
                  >
                    <span
                      aria-hidden="true"
                      className="font-serif text-2xl sm:text-3xl font-bold text-[#153B27]/[0.18] group-hover:text-[#153B27]/40 transition-colors tabular-nums w-10 shrink-0 leading-none"
                    >
                      {ROMAN[idx] ?? String(idx + 1)}
                    </span>
                    <span className="font-serif text-base sm:text-lg font-bold text-[#14291D] leading-snug group-hover:text-[#153B27] transition-colors">
                      {career}
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          {/* ─── Sidebar Column ─── */}
          <aside className="lg:col-span-4 space-y-6" aria-label="Enrollment quick facts">
            {/* Enrollment Overview */}
            <div className="rounded-3xl bg-[#153B27] text-white border border-white/10 shadow-[0_24px_48px_-22px_rgba(12,25,18,0.5)] overflow-hidden">
              <div className="relative bg-[#153B27] text-white px-6 sm:px-7 pt-6 pb-5">
                <div aria-hidden="true" className="absolute top-0 left-0 h-[3px] w-16 bg-[#C8A96E]" />
                <div
                  aria-hidden="true"
                  className="absolute right-4 -bottom-8 w-28 h-28 opacity-[0.06] pointer-events-none"
                >
                  <img src="/uos-logo-circle.png" alt="" className="w-full h-full object-contain invert" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white tracking-[-0.01em]">
                  Enrollment Overview
                </h3>
                <p className="text-[11px] text-white/60 font-medium mt-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#C8A96E]" />
                  {prog.departmentName}
                </p>
              </div>

              <dl className="px-6 sm:px-7 py-5 space-y-4 text-xs sm:text-[13px] divide-y divide-white/15">
                <div className="flex items-start justify-between gap-4 pt-1">
                  <dt className="text-[10px] uppercase tracking-wider text-white/60 font-bold pt-0.5">
                    Duration
                  </dt>
                  <dd className="font-semibold text-white text-right">
                    {shortDuration(prog.duration)}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4 pt-4">
                  <dt className="text-[10px] uppercase tracking-wider text-white/60 font-bold pt-0.5">
                    Credit Hours
                  </dt>
                  <dd className="font-semibold text-white text-right tabular-nums">
                    {prog.creditHours} Credits
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4 pt-4">
                  <dt className="text-[10px] uppercase tracking-wider text-white/60 font-bold pt-0.5">
                    Fee / Semester
                  </dt>
                  <dd className="font-medium text-white/80 text-right leading-snug max-w-[14rem]">
                    {prog.feePerSemester}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4 pt-4">
                  <dt className="text-[10px] uppercase tracking-wider text-white/60 font-bold pt-0.5">
                    Scholarships
                  </dt>
                  <dd className="font-medium text-white/80 text-right leading-snug max-w-[14rem]">
                    HEC Need-Based · KPEF · Ehsaas · University Merit
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4 pt-4 pb-1">
                  <dt className="text-[10px] uppercase tracking-wider text-white/60 font-bold pt-0.5">
                    Accreditation
                  </dt>
                  <dd className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#C8A96E] border border-[#C8A96E]/30 bg-[#C8A96E]/15 rounded-full px-2.5 py-1">
                    <Award className="w-3.5 h-3.5" />
                    {accreditedBy(prog)}
                  </dd>
                </div>
              </dl>

              <div className="px-6 sm:px-7 pb-6 pt-1 flex flex-col gap-2.5">
                <Link
                  href="/admissions"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#7F1D1D] hover:bg-[#661717] text-white text-[11px] font-bold uppercase tracking-[0.1em] min-h-[44px] shadow-[0_10px_24px_-12px_rgba(127,29,29,0.6)] transition-all duration-200 active:scale-[0.985]"
                >
                  Apply Fall 2026
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={`/departments/${prog.departmentId}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl border border-white/20 text-white/80 hover:border-[#C8A96E] hover:text-[#C8A96E] bg-white/10 text-[11px] font-bold uppercase tracking-[0.1em] min-h-[44px] transition-all duration-200 active:scale-[0.985]"
                >
                  <GraduationCap className="w-4 h-4" />
                  Department Faculty &amp; Labs
                </Link>
              </div>
            </div>

            {/* Other Degree Programs */}
            <div className="rounded-3xl bg-white border border-stone-300 shadow-xs overflow-hidden">
              <div className="px-6 sm:px-7 pt-6 pb-4 flex items-center gap-2.5">
                <Landmark className="w-4 h-4 text-[#7F1D1D]" />
                <h4 className="font-serif text-lg font-bold text-[#14291D]">Other Degree Programs</h4>
              </div>
              <ol className="divide-y divide-stone-200">
                {programsDetailCatalog
                  .filter((p) => p.slug !== prog.slug)
                  .slice(0, 5)
                  .map((other, idx) => (
                    <li key={other.slug}>
                      <Link
                        href={`/programs/${other.slug}`}
                        className="group flex items-center gap-3.5 px-6 sm:px-7 py-3.5 hover:bg-[#FBFAF7] transition-colors"
                      >
                        <span
                          aria-hidden="true"
                          className="font-serif text-sm font-bold text-stone-400 group-hover:text-[#153B27]/40 transition-colors tabular-nums w-6 shrink-0"
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="flex-1 font-serif text-sm font-bold text-[#14291D] leading-snug group-hover:text-[#153B27] transition-colors">
                          {other.name}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#7F1D1D] group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
                      </Link>
                    </li>
                  ))}
              </ol>
              <div className="px-6 sm:px-7 py-4 border-t border-stone-200">
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#7F1D1D] hover:text-[#661717] transition-colors min-h-[44px] -my-2"
                >
                  Browse All Degrees
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
