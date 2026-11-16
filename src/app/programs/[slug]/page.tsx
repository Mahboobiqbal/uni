import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, BookOpen, Building2, GraduationCap, Landmark } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { ALL_PROGRAMS, getProgramBySlug } from '@/data/programs';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_PROGRAMS.map((prog) => ({ slug: prog.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const prog = getProgramBySlug(slug);
  if (!prog) return { title: 'Program Not Found | University of Swat' };
  return {
    title: `${prog.name} | University of Swat`,
    description: prog.description,
  };
}

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'] as const;

const shortDuration = (duration: string) => duration.replace(/\s*\(.*?\)\s*/g, '').trim();

const semesterCredits = (prog: { creditHours: number; semesterOutline: { courses: string[] }[] }) =>
  Math.round(prog.creditHours / prog.semesterOutline.length);

const careerDomain = (title: string): string => {
  const t = title.toLowerCase();
  if (t.includes('data') || t.includes('ai') || t.includes('machine')) return 'Data & Artificial Intelligence';
  if (t.includes('software') || t.includes('full-stack') || t.includes('frontend') || t.includes('backend') || t.includes('devops') || t.includes('qa')) return 'Software Engineering';
  if (t.includes('security') || t.includes('cyber')) return 'Information Security';
  if (t.includes('cloud') || t.includes('architect')) return 'Cloud & Infrastructure';
  if (t.includes('database')) return 'Data Management';
  if (t.includes('advocate') || t.includes('judge') || t.includes('legal') || t.includes('counsel') || t.includes('prosecutor')) return 'Legal Practice';
  if (t.includes('pharma') || t.includes('chemist') || t.includes('quality control')) return 'Pharmaceuticals';
  if (t.includes('environment') || t.includes('climate') || t.includes('gis') || t.includes('hydrolog') || t.includes('field')) return 'Environmental Science';
  if (t.includes('financial') || t.includes('banking') || t.includes('investment') || t.includes('finance')) return 'Finance & Banking';
  if (t.includes('marketing') || t.includes('brand') || t.includes('communications')) return 'Marketing & Communications';
  if (t.includes('supply') || t.includes('operations')) return 'Operations & Supply Chain';
  if (t.includes('entrepreneur') || t.includes('founder')) return 'Entrepreneurship';
  if (t.includes('research') || t.includes('scientist') || t.includes('academ') || t.includes('educator')) return 'Research & Academia';
  if (t.includes('physiotherapist') || t.includes('laboratory') || t.includes('radiology') || t.includes('health')) return 'Allied Health';
  if (t.includes('civil services') || t.includes('css') || t.includes('government')) return 'Public Service';
  if (t.includes('teacher') || t.includes('writer') || t.includes('translator') || t.includes('editor')) return 'Education & Publishing';
  return 'Industry Practice';
};

export default async function ProgramDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const prog = getProgramBySlug(slug);

  if (!prog) {
    notFound();
  }

  const avgCredits = semesterCredits(prog);

  return (
    <div className="bg-[#F6F5F0] min-h-screen text-[#14291D]">
      <PageHeader
        eyebrow={prog.facultyGroup}
        title={prog.name}
        description={prog.description}
        backgroundImage={prog.heroImage}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Programs', href: '/programs' },
          { label: prog.name },
        ]}
      >
        <dl className="grid grid-cols-2 sm:flex sm:flex-wrap items-stretch border-t border-white/15 pt-6 sm:pt-7 gap-y-5 sm:gap-y-4">
          {[
            { value: shortDuration(prog.duration), label: 'Duration' },
            { value: `${prog.creditHours} Credits`, label: 'Credit Hours' },
            { value: prog.accreditation, label: 'Accreditation' },
            { value: prog.feePerSemester.split('/')[0].replace(/\s*\(Open Merit\)\s*/i, '').trim(), label: 'Open Merit Fee' },
          ].map((fact, idx, arr) => (
            <div
              key={fact.label}
              className={`flex flex-col justify-center pr-4 sm:pr-8 sm:mr-8 ${
                idx % 2 === 0 ? 'border-r sm:border-r border-white/15' : idx < arr.length - 1 ? 'sm:border-r border-white/15' : ''
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

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <main className="lg:col-span-8 space-y-12 sm:space-y-14">
            {/* 01. About the Program */}
            <section aria-labelledby="about-heading">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="h-0.5 w-7 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">01 · Curricular Scope</span>
              </div>
              <h2 id="about-heading" className="font-serif text-3xl sm:text-4xl font-bold text-[#14291D] tracking-[-0.025em] leading-[1.12] mb-6">
                About the Program
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                <div className="flex flex-col">
                  <ul className="space-y-2.5">
                    {prog.overview.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-stone-700 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#153B27] shrink-0" aria-hidden="true" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5">
                    <div className="border-t border-stone-200 pt-3 text-sm text-stone-500 font-medium leading-relaxed">
                      <span className="block">{prog.departmentName}</span>
                      <span className="block">{prog.degreeLevel}</span>
                      <span className="block">{prog.facultyGroup}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#153B27] text-white rounded-xl p-5 sm:p-6 border-t-4 border-[#C8A96E] flex flex-col">
                  <div className="flex items-center gap-2.5 mb-4">
                    <BookOpen className="w-5 h-5 text-[#C8A96E]" aria-hidden="true" />
                    <h3 className="font-serif text-lg font-bold tracking-[-0.01em]">Program Snapshot</h3>
                  </div>
                  <dl className="divide-y divide-white/10 flex flex-1 flex-col justify-between">
                    {[
                      { label: 'System', value: 'Semester-Based' },
                      { label: 'Accreditation', value: prog.accreditation },
                      { label: 'Campus', value: prog.campus },
                      { label: 'Intake', value: 'Fall & Spring' },
                      { label: 'Medium', value: 'English' },
                    ].map((row) => (
                      <div key={row.label} className="flex items-baseline justify-between gap-4 py-2.5">
                        <dt className="text-[10px] uppercase tracking-[0.16em] text-white/60 font-bold">{row.label}</dt>
                        <dd className="font-sans text-sm font-semibold text-white text-right">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div className="mt-9 border-t-2 border-[#7F1D1D] pt-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <GraduationCap className="w-4 h-4 text-[#7F1D1D]" aria-hidden="true" />
                  <h3 className="font-serif text-lg font-bold text-[#14291D] tracking-[-0.01em]">Eligibility &amp; Admission Criteria</h3>
                </div>
                <dl className="divide-y divide-stone-200 border-b border-stone-200">
                  <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-1 sm:gap-6 py-3">
                    <dt className="text-[10px] uppercase tracking-[0.16em] text-[#7F1D1D] font-bold sm:pt-1">Academic Requirement</dt>
                    <dd className="text-sm text-stone-700 leading-relaxed">{prog.eligibility}</dd>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-1 sm:gap-6 py-3">
                    <dt className="text-[10px] uppercase tracking-[0.16em] text-[#7F1D1D] font-bold sm:pt-1">Entry Test / Merit</dt>
                    <dd className="text-sm text-stone-700 leading-relaxed">
                      As per HEC and University of Swat admission policy; merit lists are published on the admissions portal for each intake.
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-1 sm:gap-6 py-3">
                    <dt className="text-[10px] uppercase tracking-[0.16em] text-[#7F1D1D] font-bold sm:pt-1">Equivalence</dt>
                    <dd className="text-sm text-stone-700 leading-relaxed">
                      Candidates with equivalent credentials (A-Level, foreign boards) are evaluated on a case-by-case basis by the admissions committee.
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            {/* 03. Key Learning Outcomes */}
            <section aria-labelledby="outcomes-heading" className="border-t border-stone-200 pt-12 sm:pt-14">
              <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="h-0.5 w-7 bg-[#153B27]" />
                    <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">03 · Curricular Objectives</span>
                  </div>
                  <h2 id="outcomes-heading" className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D] tracking-[-0.025em] leading-[1.12]">
                    Key Learning Outcomes
                  </h2>
                </div>
                <span className="text-[10px] uppercase tracking-[0.16em] text-stone-500 font-bold tabular-nums">
                  {String(prog.learningOutcomes.length).padStart(2, '0')} Outcomes
                </span>
              </div>

              <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prog.learningOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-4 bg-[#FBF9F5] border border-stone-200 rounded-xl p-5">
                    <span aria-hidden="true" className="shrink-0 w-9 h-9 rounded-lg bg-[#153B27] text-white flex items-center justify-center font-serif text-sm font-bold tabular-nums">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <p className="font-sans text-sm sm:text-[15px] text-stone-700 leading-relaxed">{outcome}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* 04. Semester scheme */}
            <section aria-labelledby="scheme-heading" className="border-t border-stone-200 pt-12 sm:pt-14">
              <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="h-0.5 w-7 bg-[#B48A3E]" />
                    <span className="text-xs uppercase tracking-widest text-[#7A5A1E] font-bold">04 · Academic Roadmap</span>
                  </div>
                  <h2 id="scheme-heading" className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D] tracking-[-0.025em] leading-[1.12]">
                    Semester-by-Semester Scheme of Studies
                  </h2>
                </div>
                <span className="text-[10px] uppercase tracking-[0.16em] text-stone-500 font-bold tabular-nums">
                  {String(prog.semesterOutline.length).padStart(2, '0')} Terms · {prog.creditHours} Cr. Hrs
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {prog.semesterOutline.map((term, tIdx) => {
                  const isCapstone = term.courses.some((c) => /(final year|capstone|thesis|internship)/i.test(c));
                  return (
                    <div key={tIdx} className="bg-white border border-stone-200 rounded-xl overflow-hidden">
                      <div className="bg-[#153B27] text-white px-5 py-3 flex items-center justify-between gap-3">
                        <h3 className="font-serif text-base font-bold tracking-[-0.01em]">{term.semester}</h3>
                        <div className="flex items-center gap-2">
                          {isCapstone && (
                            <span className="bg-[#7F1D1D] text-white text-[9px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded">Capstone</span>
                          )}
                          <span className="text-xs text-white/70 font-semibold tabular-nums">{avgCredits} Cr. Hrs</span>
                        </div>
                      </div>
                      <ul>
                        {term.courses.map((course, cIdx) => (
                          <li key={cIdx} className={`flex items-center justify-between gap-3 px-5 py-2.5 ${cIdx % 2 === 1 ? 'bg-[#F6F5F0]/60' : ''}`}>
                            <span className="text-sm text-stone-900 leading-snug">{course}</span>
                            <span className="text-[11px] font-bold text-[#153B27] bg-[#153B27]/10 px-2 py-0.5 rounded tabular-nums shrink-0">3 Cr</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 05. Career Prospects */}
            <section aria-labelledby="careers-heading" className="border-t border-stone-200 pt-12 sm:pt-14">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="h-0.5 w-7 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">05 · Professional Pathways</span>
              </div>
              <h2 id="careers-heading" className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D] tracking-[-0.025em] leading-[1.12] mb-6">
                Career Prospects
              </h2>

              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prog.careerProspects.map((career, idx) => (
                  <li key={idx} className="bg-white border border-stone-200 border-t-[3px] border-t-[#7F1D1D] rounded-xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span aria-hidden="true" className="w-8 h-8 rounded-lg bg-[#7F1D1D]/10 text-[#7F1D1D] flex items-center justify-center font-serif text-sm font-bold tabular-nums">
                        {ROMAN[idx] ?? String(idx + 1)}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#14291D] leading-snug">{career}</h3>
                    <p className="text-xs text-stone-500 leading-relaxed mt-1.5">{careerDomain(career)}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* 06. Apply */}
            <section aria-labelledby="apply-heading" className="border-t border-stone-200 pt-12 sm:pt-14">
              <div className="bg-[#153B27] text-white rounded-2xl p-6 sm:p-8 lg:p-10 border-t-4 border-[#7F1D1D]">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="h-0.5 w-7 bg-[#C8A96E]" />
                  <span className="text-xs uppercase tracking-widest text-[#C8A96E] font-bold">06 · Next Steps</span>
                </div>
                <h2 id="apply-heading" className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.025em] leading-[1.12] mb-4">
                  Ready to Begin Your Journey?
                </h2>
                <p className="font-sans text-white/75 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                  Explore the department, its faculty, labs, and the program structure to plan your next step.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <Link href={`/departments/${prog.departmentSlug}`} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-white/30 text-white/90 hover:border-[#C8A96E] hover:text-[#C8A96E] bg-white/5 text-[11px] font-bold uppercase tracking-[0.1em] min-h-[44px] transition-all duration-200 active:scale-[0.985]">
                    <Building2 className="w-4 h-4" /> Department Faculty &amp; Labs
                  </Link>
                </div>
              </div>
            </section>
          </main>

          <aside className="lg:col-span-4 space-y-8 relative lg:sticky lg:top-28 self-start" aria-label="Enrollment quick facts">
            <section className="border-t-2 border-[#153B27] pt-6">
              <div className="flex items-center gap-2.5 mb-5">
                <Building2 className="w-5 h-5 text-[#153B27]" aria-hidden="true" />
                <h3 className="font-serif text-xl font-bold text-[#14291D] tracking-[-0.01em]">Enrollment Overview</h3>
              </div>
              <p className="text-[11px] text-stone-500 font-medium mb-6 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E] shrink-0" aria-hidden="true" />
                {prog.departmentName}
              </p>

              <dl className="divide-y divide-stone-200 border-y border-stone-200">
                {[
                  { label: 'Duration', value: shortDuration(prog.duration) },
                  { label: 'Credit Hours', value: `${prog.creditHours} Credits` },
                  { label: 'Fee / Semester', value: prog.feePerSemester.split('/')[0].replace(/\s*\(Open Merit\)\s*/i, '').trim() },
                  { label: 'Accreditation', value: prog.accreditation },
                  { label: 'Degree Level', value: prog.degreeLevel },
                  { label: 'Campus', value: prog.campus },
                ].map((spec) => (
                  <div key={spec.label} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="text-[10px] uppercase tracking-[0.16em] text-stone-500 font-bold">{spec.label}</dt>
                    <dd className="font-serif text-sm font-bold text-[#14291D] tabular-nums text-right">{spec.value}</dd>
                  </div>
                ))}
                <div className="py-3">
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-stone-500 font-bold mb-1.5">Scholarships</dt>
                  <dd className="font-sans text-sm text-stone-700 leading-snug">HEC Need-Based · KPEF · Ehsaas · University Merit</dd>
                </div>
              </dl>

              <div className="flex flex-col gap-2.5 mt-6">
                <Link href={`/departments/${prog.departmentSlug}`} className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl border border-stone-300 text-stone-700 hover:border-[#153B27] hover:text-[#153B27] bg-white text-[11px] font-bold uppercase tracking-[0.1em] min-h-[44px] transition-all duration-200 active:scale-[0.985]">
                  <GraduationCap className="w-4 h-4" /> Department Faculty &amp; Labs
                </Link>
              </div>
            </section>

            <section className="border-t border-stone-200 pt-6">
              <div className="flex items-center gap-2.5 mb-5">
                <Landmark className="w-5 h-5 text-[#7F1D1D]" aria-hidden="true" />
                <h3 className="font-serif text-xl font-bold text-[#14291D] tracking-[-0.01em]">Other Degree Programs</h3>
              </div>

              <ol className="divide-y divide-stone-200 border-y border-stone-200 max-h-[420px] overflow-y-auto custom-scroll">
                {ALL_PROGRAMS.filter((p) => p.slug !== prog.slug).slice(0, 6).map((other, idx) => (
                  <li key={other.slug}>
                    <Link href={`/programs/${other.slug}`} className="group/row flex items-center gap-3.5 py-3 hover:bg-[#FBFAF7] transition-colors -mx-2 px-2 rounded-lg min-w-0">
                      <span aria-hidden="true" className="font-serif text-sm font-bold text-stone-400 group-hover/row:text-[#153B27]/40 transition-colors tabular-nums w-6 shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="flex-1 font-serif text-sm font-bold text-[#14291D] leading-snug group-hover/row:text-[#153B27] transition-colors truncate">
                        {other.name}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover/row:text-[#7F1D1D] group-hover/row:translate-x-0.5 transition-all duration-200 shrink-0" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ol>

              <div className="pt-5">
                <Link href="/programs" className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#7F1D1D] hover:text-[#661717] transition-colors min-h-[44px] -my-2">
                  Browse All Degrees <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
