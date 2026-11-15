import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  CheckCircle2,
  GraduationCap,
  Landmark,
} from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { programsDetailCatalog } from '@/data/programsDetailData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return programsDetailCatalog.map((prog) => ({ slug: prog.slug }));
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

/** Real departmental photography â€” only where an authentic subject image exists. */
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

const accreditedBy = (prog: { slug: string }) =>
  prog.slug.includes('llb') ? 'PBC Â· HEC' : 'NCEAC / HEC';

const termType = (prog: { slug: string }, term: string) =>
  prog.slug.includes('llb') ? term.replace('Year', 'Year of Study') : term;

const shortDuration = (duration: string) => duration.replace(/\s*\(.*?\)\s*/g, '').trim();

/** Derived average credit hours per semester (total / terms), rounded. */
const semesterCredits = (prog: { creditHours: number; semesterOutline: { courses: string[] }[] }) =>
  Math.round(prog.creditHours / prog.semesterOutline.length);

/** Map a career title to a one-line industry domain note (derived classification). */
const careerDomain = (title: string): string => {
  const t = title.toLowerCase();
  if (t.includes('data') || t.includes('ai') || t.includes('machine')) return 'Data & Artificial Intelligence';
  if (t.includes('software') || t.includes('full-stack') || t.includes('frontend') || t.includes('backend') || t.includes('devops')) return 'Software Engineering';
  if (t.includes('security') || t.includes('cyber')) return 'Information Security';
  if (t.includes('cloud') || t.includes('architect')) return 'Cloud & Infrastructure';
  if (t.includes('database') || t.includes('dba')) return 'Data Management';
  if (t.includes('qa') || t.includes('quality')) return 'Quality Assurance';
  if (t.includes('scrum') || t.includes('product') || t.includes('manager')) return 'Product & Delivery';
  if (t.includes('advocate') || t.includes('judge') || t.includes('legal') || t.includes('counsel')) return 'Legal Practice';
  if (t.includes('pharma') || t.includes('chemist') || t.includes('quality control')) return 'Pharmaceuticals';
  if (t.includes('environment') || t.includes('climate') || t.includes('gis') || t.includes('hydrolog')) return 'Environmental Science';
  if (t.includes('financial') || t.includes('banking') || t.includes('investment')) return 'Finance & Banking';
  if (t.includes('marketing') || t.includes('brand')) return 'Marketing & Growth';
  if (t.includes('supply') || t.includes('operations')) return 'Operations & Supply Chain';
  if (t.includes('entrepreneur') || t.includes('founder')) return 'Entrepreneurship';
  if (t.includes('research') || t.includes('scientist')) return 'Research & Academia';
  return 'Industry Practice';
};

/** Compact bullet overview â€” minimal text, story-hierarchy style. */
const academicOverview = (prog: { name: string; facultyGroup: string; degreeLevel: string; slug: string }) => {
  const isComputing = prog.slug.includes('computer') || prog.slug.includes('software');
  const isLaw = prog.slug.includes('llb');
  const bullets: string[] = [];
  if (isComputing) {
    bullets.push('Core tracks: algorithms, software engineering, AI, databases, and computer systems.');
    bullets.push('Labs: modern workstations, high-speed fiber, licensed dev environments (Charbagh).');
    bullets.push('Accreditation: NCEAC / HEC recognized; pathway to MS & PhD.');
  } else if (isLaw) {
    bullets.push('Core: constitutional jurisprudence, criminal & civil procedure, Islamic jurisprudence.');
    bullets.push('Practice: moot courtroom, legal clinics, structured final-year internship.');
    bullets.push('Accreditation: PBC Â· HEC recognized; pathway to LLM & PhD.');
  } else {
    bullets.push(`Core: theoretical foundations + hands-on lab/field practice across ${prog.facultyGroup}.`);
    bullets.push('Facilities: dedicated labs, seminar rooms, and research spaces (Charbagh).');
    bullets.push('Accreditation: HEC recognized; pathway to MS & PhD programs.');
  }
  bullets.push(`Format: semester-based Â· ${prog.degreeLevel} Â· medium English.`);
  return bullets;
};

export default async function ProgramDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const prog = programsDetailCatalog.find((p) => p.slug === slug);

  if (!prog) {
    notFound();
  }

  const photo = PROGRAM_PHOTO[prog.slug];
  const overview = academicOverview(prog);
  const avgCredits = semesterCredits(prog);
  const isLaw = prog.slug.includes('llb');
  const isComputing = prog.slug.includes('computer') || prog.slug.includes('software');

  return (
    <div className="bg-[#F6F5F0] min-h-screen text-[#14291D]">
      <PageHeader
        eyebrow={prog.facultyGroup}
        title={prog.name}
        description={prog.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Programs', href: '/programs' },
          { label: prog.name },
        ]}
      >
        {/* Verified institutional fact strip */}
        <dl className="flex flex-wrap items-stretch border-t border-white/15 pt-6 sm:pt-7 gap-y-4">
          {[
            { value: shortDuration(prog.duration), label: 'Duration' },
            { value: `${prog.creditHours} Credits`, label: 'Credit Hours' },
            { value: accreditedBy(prog), label: 'Accreditation' },
            {
              value: prog.feePerSemester.split('/')[0].replace(/\s*\(Open Merit\)\s*/i, '').trim(),
              label: 'Open Merit Fee',
            },
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

      {/* â”€â”€â”€ Main content â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* â”€â”€â”€ Main Column â”€â”€â”€ */}
          <main className="lg:col-span-8 space-y-12 sm:space-y-14">
            {/* 01. About the Program + Snapshot + Eligibility */}
            <section aria-labelledby="about-heading">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="h-0.5 w-7 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">
                  01 Â· Curricular Scope
                </span>
              </div>
              <h2
                id="about-heading"
                className="font-serif text-3xl sm:text-4xl font-bold text-[#14291D] tracking-[-0.025em] leading-[1.12] mb-6"
              >
                About the Program
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
                {/* Left: 2-paragraph overview + photo */}
                <div className="space-y-4">
                  <ul className="space-y-2.5">
                    {overview.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-stone-700 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#153B27] shrink-0" aria-hidden="true" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-stone-500 font-medium pt-3 border-t border-stone-200">
                    <span>{prog.departmentName}</span>
                    <span className="w-px h-4 bg-stone-300" aria-hidden="true" />
                    <span>{prog.degreeLevel}</span>
                    <span className="w-px h-4 bg-stone-300" aria-hidden="true" />
                    <span>{prog.facultyGroup}</span>
                  </div>

                  {photo && (
                    <figure className="relative rounded-xl overflow-hidden border border-stone-200 bg-white mt-4">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={960}
                        height={720}
                        className="w-full h-auto object-cover aspect-[16/10]"
                      />
                      <figcaption className="px-4 py-2.5 text-xs text-stone-500 font-medium border-t border-stone-200">
                        {prog.departmentName} Â· Charbagh Main Campus
                      </figcaption>
                    </figure>
                  )}
                </div>

                {/* Right: Program Snapshot Card + Eligibility Card */}
                <div className="space-y-5">
                  {/* Program Snapshot Card */}
                  <div className="bg-[#153B27] text-white rounded-xl p-6 border-t-4 border-[#C8A96E]">
                    <div className="flex items-center gap-2.5 mb-4">
                      <BookOpen className="w-5 h-5 text-[#C8A96E]" aria-hidden="true" />
                      <h3 className="font-serif text-lg font-bold tracking-[-0.01em]">
                        Program Snapshot
                      </h3>
                    </div>
                    <dl className="divide-y divide-white/10">
                      {[
                        { label: 'System', value: 'Semester-Based' },
                        { label: 'Accreditation', value: accreditedBy(prog) },
                        { label: 'Campus', value: 'Charbagh Main Campus' },
                        { label: 'Intake', value: 'Fall & Spring' },
                        { label: 'Medium', value: 'English' },
                      ].map((row) => (
                        <div
                          key={row.label}
                          className="flex items-baseline justify-between gap-4 py-2.5"
                        >
                          <dt className="text-[10px] uppercase tracking-[0.16em] text-white/60 font-bold">
                            {row.label}
                          </dt>
                          <dd className="font-sans text-sm font-semibold text-white text-right">
                            {row.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                </div>
              </div>

              {/* Eligibility & Admission Criteria — full width below the overview */}
<div className="bg-white border border-stone-200 border-l-4 border-l-[#7F1D1D] rounded-xl p-6">
                    <div className="flex items-center gap-2.5 mb-4">
                      <GraduationCap className="w-5 h-5 text-[#7F1D1D]" aria-hidden="true" />
                      <h3 className="font-serif text-lg font-bold text-[#14291D] tracking-[-0.01em]">
                        Eligibility &amp; Admission Criteria
                      </h3>
                    </div>
                    <ul className="space-y-3 text-sm text-stone-700 leading-relaxed">
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#7F1D1D] shrink-0" aria-hidden="true" />
                        <span>
                          <strong className="text-[#14291D] font-semibold">Academic Requirement:</strong>{' '}
                          {prog.eligibility}
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#7F1D1D] shrink-0" aria-hidden="true" />
                        <span>
                          <strong className="text-[#14291D] font-semibold">Entry Test / Merit Weightage:</strong>{' '}
                          As per HEC and University of Swat admission policy; merit lists published on the
                          admissions portal for each intake.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#7F1D1D] shrink-0" aria-hidden="true" />
                        <span>
                          <strong className="text-[#14291D] font-semibold">Equivalence Rule:</strong>{' '}
                          Candidates with equivalent credentials (A-Level, foreign boards) are evaluated on a
                          case-by-case basis by the admissions committee.
                        </span>
                      </li>
                    </ul>
                  </div>
            </section>

            {/* 02. Eligibility (legacy anchor kept for deep links) */}
            <section id="eligibility" aria-labelledby="eligibility-heading" className="scroll-mt-24">
              <h2 id="eligibility-heading" className="sr-only">
                Eligibility &amp; Admission
              </h2>
            </section>

            {/* 03. Key Learning Outcomes â€” 2x2 grid */}
            <section aria-labelledby="outcomes-heading" className="border-t border-stone-200 pt-12 sm:pt-14">
              <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="h-0.5 w-7 bg-[#153B27]" />
                    <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">
                      03 Â· Curricular Objectives
                    </span>
                  </div>
                  <h2
                    id="outcomes-heading"
                    className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D] tracking-[-0.025em] leading-[1.12]"
                  >
                    Key Learning Outcomes
                  </h2>
                </div>
                <span className="text-[10px] uppercase tracking-[0.16em] text-stone-500 font-bold tabular-nums">
                  {String(prog.learningOutcomes.length).padStart(2, '0')} Outcomes
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prog.learningOutcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-stone-200 rounded-xl p-5 flex items-start gap-4"
                  >
                    <span
                      aria-hidden="true"
                      className="shrink-0 w-9 h-9 rounded-lg bg-[#153B27] text-white font-serif font-bold text-sm tabular-nums flex items-center justify-center"
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <p className="font-sans text-sm sm:text-[15px] text-stone-700 leading-relaxed">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 04. Semester scheme â€” 2-column grid */}
            <section aria-labelledby="scheme-heading" className="border-t border-stone-200 pt-12 sm:pt-14">
              <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="h-0.5 w-7 bg-[#B48A3E]" />
                    <span className="text-xs uppercase tracking-widest text-[#7A5A1E] font-bold">
                      04 Â· Academic Roadmap
                    </span>
                  </div>
                  <h2
                    id="scheme-heading"
                    className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D] tracking-[-0.025em] leading-[1.12]"
                  >
                    Semester-by-Semester Scheme of Studies
                  </h2>
                </div>
                <span className="text-[10px] uppercase tracking-[0.16em] text-stone-500 font-bold tabular-nums">
                  {String(prog.semesterOutline.length).padStart(2, '0')} Terms Â· {prog.creditHours} Cr. Hrs
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {prog.semesterOutline.map((term, tIdx) => {
                  const isCapstone = term.courses.some((c) =>
                    /\b(final year|capstone|thesis|internship)\b/i.test(c),
                  );
                  return (
                    <article
                      key={tIdx}
                      className="bg-white border border-stone-200 rounded-xl overflow-hidden"
                    >
                      <header className="bg-[#153B27] text-white px-5 py-3 flex justify-between items-center">
                        <div className="flex items-center gap-2.5">
                          <span className="font-serif text-base font-bold tracking-[-0.01em]">
                            Semester {String(tIdx + 1).padStart(2, '0')}
                          </span>
                          {isCapstone && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#7F1D1D] text-white text-[9px] font-bold uppercase tracking-[0.12em]">
                              Capstone
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] font-bold tabular-nums text-[#C8A96E]">
                          {avgCredits} Cr. Hrs
                        </span>
                      </header>
                      <ul className="divide-y divide-stone-100 px-5 py-2">
                        {term.courses.map((course, cIdx) => (
                          <li
                            key={cIdx}
                            className="flex items-center justify-between gap-3 py-2"
                          >
                            <span className="text-sm font-medium text-stone-800 leading-snug">
                              {course}
                            </span>
                            <span className="text-xs text-stone-500 tabular-nums shrink-0">
                              3 Cr
                            </span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </div>
            </section>

            {/* 05. Career Prospects â€” 3-column grid */}
            <section aria-labelledby="careers-heading" className="border-t border-stone-200 pt-12 sm:pt-14">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="h-0.5 w-7 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">
                  05 Â· Professional Pathways
                </span>
              </div>
              <h2
                id="careers-heading"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D] tracking-[-0.025em] leading-[1.12] mb-6"
              >
                Career Prospects
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {prog.careerProspects.map((career, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-stone-200 border-t-[3px] border-t-[#153B27] rounded-xl p-5"
                  >
                    <span className="block text-[10px] uppercase tracking-[0.16em] text-[#153B27] font-bold mb-2 tabular-nums">
                      {ROMAN[idx] ?? String(idx + 1)}.
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#14291D] leading-snug mb-1.5">
                      {career}
                    </h3>
                    <p className="text-xs text-stone-500 leading-relaxed">{careerDomain(career)}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 06. Apply â€” full-width CTA banner */}
            <section aria-labelledby="apply-heading" className="border-t border-stone-200 pt-12 sm:pt-14">
              <div className="bg-[#153B27] text-white rounded-2xl p-8 lg:p-10 border-t-4 border-[#7F1D1D]">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="h-0.5 w-7 bg-[#C8A96E]" />
                  <span className="text-xs uppercase tracking-widest text-[#C8A96E] font-bold">
                    06 Â· Next Steps
                  </span>
                </div>
                <h2
                  id="apply-heading"
                  className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.025em] leading-[1.12] mb-4"
                >
                  Ready to Begin Your Journey?
                </h2>
                <p className="font-sans text-white/75 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                  Admissions for Fall 2026 are open. Review the eligibility criteria, gather your documents, and
                  submit your application through the student portal.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <Link
                    href="/admissions"
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#7F1D1D] hover:bg-[#661717] text-white text-[11px] font-bold uppercase tracking-[0.1em] min-h-[44px] shadow-[0_10px_24px_-12px_rgba(127,29,29,0.6)] transition-all duration-200 active:scale-[0.985]"
                  >
                    Apply Fall 2026 <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/admissions/fee-structure"
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-white/30 text-white/90 hover:border-[#C8A96E] hover:text-[#C8A96E] bg-white/5 text-[11px] font-bold uppercase tracking-[0.1em] min-h-[44px] transition-all duration-200 active:scale-[0.985]"
                  >
                    View Fee Structure <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/departments/${prog.departmentId}`}
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-white/30 text-white/90 hover:border-[#C8A96E] hover:text-[#C8A96E] bg-white/5 text-[11px] font-bold uppercase tracking-[0.1em] min-h-[44px] transition-all duration-200 active:scale-[0.985]"
                  >
                    <Building2 className="w-4 h-4" /> Department Faculty &amp; Labs
                  </Link>
                </div>
              </div>
            </section>
          </main>

          {/* â”€â”€â”€ Sidebar (sticky) â”€â”€â”€ */}
          <aside
            className="lg:col-span-4 space-y-8 sticky top-28 self-start"
            aria-label="Enrollment quick facts"
          >
            {/* Enrollment overview */}
            <section className="border-t-2 border-[#153B27] pt-6">
              <div className="flex items-center gap-2.5 mb-5">
                <Building2 className="w-5 h-5 text-[#153B27]" aria-hidden="true" />
                <h3 className="font-serif text-xl font-bold text-[#14291D] tracking-[-0.01em]">
                  Enrollment Overview
                </h3>
              </div>
              <p className="text-[11px] text-stone-500 font-medium mb-6 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E] shrink-0" aria-hidden="true" />
                {prog.departmentName}
              </p>

              <dl className="divide-y divide-stone-200 border-y border-stone-200">
                {[
                  { label: 'Duration', value: shortDuration(prog.duration) },
                  { label: 'Credit Hours', value: `${prog.creditHours} Credits` },
                  {
                    label: 'Fee / Semester',
                    value: prog.feePerSemester.split('/')[0].replace(/\s*\(Open Merit\)\s*/i, '').trim(),
                  },
                  { label: 'Accreditation', value: accreditedBy(prog) },
                  { label: 'Degree Level', value: prog.degreeLevel },
                  { label: 'Campus', value: 'Charbagh Main' },
                ].map((spec) => (
                  <div key={spec.label} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="text-[10px] uppercase tracking-[0.16em] text-stone-500 font-bold">
                      {spec.label}
                    </dt>
                    <dd className="font-serif text-sm font-bold text-[#14291D] tabular-nums text-right">
                      {spec.value}
                    </dd>
                  </div>
                ))}
                <div className="py-3">
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-stone-500 font-bold mb-1.5">
                    Scholarships
                  </dt>
                  <dd className="font-sans text-sm text-stone-700 leading-snug">
                    HEC Need-Based Â· KPEF Â· Ehsaas Â· University Merit
                  </dd>
                </div>
              </dl>

              <div className="flex flex-col gap-2.5 mt-6">
                <Link
                  href="/admissions"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#7F1D1D] hover:bg-[#661717] text-white text-[11px] font-bold uppercase tracking-[0.1em] min-h-[44px] shadow-[0_10px_24px_-12px_rgba(127,29,29,0.6)] transition-all duration-200 active:scale-[0.985]"
                >
                  Apply Fall 2026 <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={`/departments/${prog.departmentId}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl border border-stone-300 text-stone-700 hover:border-[#153B27] hover:text-[#153B27] bg-white text-[11px] font-bold uppercase tracking-[0.1em] min-h-[44px] transition-all duration-200 active:scale-[0.985]"
                >
                  <GraduationCap className="w-4 h-4" /> Department Faculty &amp; Labs
                </Link>
              </div>
            </section>

            {/* Other degree programs */}
            <section className="border-t border-stone-200 pt-6">
              <div className="flex items-center gap-2.5 mb-5">
                <Landmark className="w-5 h-5 text-[#7F1D1D]" aria-hidden="true" />
                <h3 className="font-serif text-xl font-bold text-[#14291D] tracking-[-0.01em]">
                  Other Degree Programs
                </h3>
              </div>

              <ol className="divide-y divide-stone-200 border-y border-stone-200 max-h-[420px] overflow-y-auto custom-scroll">
                {programsDetailCatalog
                  .filter((p) => p.slug !== prog.slug)
                  .slice(0, 6)
                  .map((other, idx) => (
                    <li key={other.slug}>
                      <Link
                        href={`/programs/${other.slug}`}
                        className="group/row flex items-center gap-3.5 py-3 hover:bg-[#FBFAF7] transition-colors -mx-2 px-2 rounded-lg"
                      >
                        <span
                          aria-hidden="true"
                          className="font-serif text-sm font-bold text-stone-400 group-hover/row:text-[#153B27]/40 transition-colors tabular-nums w-6 shrink-0"
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="flex-1 font-serif text-sm font-bold text-[#14291D] leading-snug group-hover/row:text-[#153B27] transition-colors truncate">
                          {other.name}
                        </span>
                        <ArrowRight
                          className="w-3.5 h-3.5 text-stone-400 group-hover/row:text-[#7F1D1D] group-hover/row:translate-x-0.5 transition-all duration-200 shrink-0"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
              </ol>

              <div className="pt-5">
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#7F1D1D] hover:text-[#661717] transition-colors min-h-[44px] -my-2"
                >
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

