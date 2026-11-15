import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  BadgeCheck,
  Banknote,
  CalendarCheck,
  ClipboardList,
  GraduationCap,
  HeartHandshake,
  Send,
  Users,
} from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Admissions 2026–2027 | University of Swat',
  description:
    'Admissions criteria, application steps, fee schedule, merit lists and scholarships at the University of Swat.',
};

const steps = [
  {
    icon: Send,
    title: 'Online Application',
    text: 'Submit personal, academic, and domicile credentials through the official University of Swat admissions portal.',
  },
  {
    icon: ClipboardList,
    title: 'Fee Deposit & Verification',
    text: 'Generate the Bank of Khyber challan slip (PKR 1,500) and deposit it at any authorized BOK branch.',
  },
  {
    icon: BadgeCheck,
    title: 'Merit Lists & Scrutiny',
    text: 'Review provisional departmental merit lists and appear before the Scrutiny Committee with original documents.',
  },
  {
    icon: GraduationCap,
    title: 'Enrollment & Orientation',
    text: 'Deposit semester dues, receive your student registration card, and attend departmental orientation.',
  },
];

const scholarshipSchemes = [
  {
    title: 'HEC Need-Based Scholarship',
    description: 'Full tuition coverage and monthly living stipend for underprivileged undergraduate scholars.',
    deadline: 'Fall Semester Cycle',
  },
  {
    title: 'KPEF Merit-cum-Inaffordability',
    description: 'Khyber Pakhtunkhwa Education Foundation financial assistance for deserving students.',
    deadline: 'Nov 2026',
  },
  {
    title: 'University Merit Concessions',
    description: 'Top academic performers of each entering cohort receive up to 100% tuition waivers.',
    deadline: 'Semester Basis',
  },
  {
    title: 'Orphan & Special Student Subsidies',
    description: 'Statutory institutional concessions for persons with disabilities and orphan scholars.',
    deadline: 'Rolling',
  },
];

const admissionActions = [
  {
    href: '/admissions/fee-structure',
    tag: 'Tuition & Dues',
    title: 'Fee Structure',
    description:
      'Semester tuition by faculty and program, open-merit and self-finance schedules, hostel and transport charges.',
    cta: 'View Fee Schedule',
    icon: Banknote,
    surfaceClass: 'bg-white border border-stone-300 shadow-xs',
    accent: 'text-[#153B27]',
    accentBg: 'bg-[#153B27]/10',
    accentBorder: 'group-hover:border-[#153B27]/35',
    titleClass: 'text-[#14291D] group-hover:text-[#153B27]',
    bodyClass: 'text-stone-600',
    footerClass: 'border-stone-200 text-[#153B27]',
    ctaClass: 'group-hover:text-[#7F1D1D]',
  },
  {
    href: '/admissions/merit-lists',
    tag: 'Selected Candidates',
    title: 'Merit Lists & Quotas',
    description:
      'Provisional merit lists, closing percentages, and reserved quota distribution for Fall 2026 admissions.',
    cta: 'View Merit Lists',
    icon: BadgeCheck,
    surfaceClass:
      'bg-[#7F1D1D] text-white border border-[#661717] shadow-[0_24px_48px_-22px_rgba(102,23,23,0.5)] hover:bg-[#661717]',
    accent: 'text-[#E5CD9B]',
    accentBg: 'bg-white/10 border border-white/20',
    accentBorder: '',
    titleClass: 'text-white group-hover:text-[#E5CD9B]',
    bodyClass: 'text-white/80',
    footerClass: 'border-white/20 text-[#E5CD9B]',
    ctaClass: 'group-hover:text-white',
  },
  {
    href: '/programs',
    tag: 'Degree Finder',
    title: 'Explore Programs',
    description:
      'Eligibility criteria, credit hours, semester roadmaps, and career prospects across undergraduate and graduate degrees.',
    cta: 'Browse All Degrees',
    icon: GraduationCap,
    surfaceClass: 'bg-white border border-stone-300 shadow-xs',
    accent: 'text-[#7A5A1E]',
    accentBg: 'bg-[#C8A96E]/20',
    accentBorder: 'group-hover:border-[#C8A96E]/60',
    titleClass: 'text-[#14291D] group-hover:text-[#153B27]',
    bodyClass: 'text-stone-600',
    footerClass: 'border-stone-200 text-[#153B27]',
    ctaClass: 'group-hover:text-[#7F1D1D]',
  },
];

export default function AdmissionsPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen text-[#14291D]">
      <PageHeader
        tag="Admissions 2026–2027"
        eyebrow="Admissions & Financial Aid"
        title="Join the University of Swat"
        subtitle="Apply for undergraduate, master's, and doctoral programs at a chartered public university in the heart of Swat Valley."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admissions' },
        ]}
      >
        <dl className="flex flex-wrap items-stretch border-t border-white/15 pt-6 sm:pt-7 gap-y-4">
          {[
            { value: '04', label: 'Application Steps' },
            { value: '05', label: 'Faculties' },
            { value: '60+', label: 'Degree Programs' },
            { value: 'Fall 2026', label: 'Admission Cycle' },
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

      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 py-14 sm:py-16 lg:py-20 space-y-14 sm:space-y-16">
        {/* Primary admission actions */}
        <section aria-labelledby="admissions-actions-heading">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-0.5 w-6 bg-[#7F1D1D]" />
                <span className="text-xs uppercase tracking-[0.18em] text-[#7F1D1D] font-bold">
                  Admissions Essentials
                </span>
              </div>
              <h2
                id="admissions-actions-heading"
                className="font-serif text-3xl sm:text-4xl text-[#14291D] font-bold tracking-[-0.02em]"
              >
                Fees, Merit &amp; Degree Pathways
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md sm:text-right leading-relaxed">
              Review tuition, check merit standings, and find the right program before submitting your application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {admissionActions.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl ${item.surfaceClass} hover:-translate-y-[2px] hover:shadow-[0_28px_48px_-22px_rgba(12,25,18,0.35)] transition-all duration-200 ease-out ${item.accentBorder}`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl ${item.accentBg} ${item.accent} flex items-center justify-center mb-5`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] uppercase tracking-[0.18em] ${item.accent} font-bold block mb-2`}>
                      {item.tag}
                    </span>
                    <h3 className={`font-serif text-2xl font-bold ${item.titleClass} transition-colors mb-3 leading-tight tracking-[-0.01em]`}>
                      {item.title}
                    </h3>
                    <p className={`font-sans text-xs sm:text-sm ${item.bodyClass} leading-relaxed`}>{item.description}</p>
                  </div>
                  <div className={`pt-5 mt-6 border-t ${item.footerClass} flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.12em]`}>
                    <span className={`${item.ctaClass} transition-colors`}>{item.cta}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Photo-led admissions moment */}
        <section
          aria-labelledby="apply-charbagh-heading"
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
        >
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-stone-300 bg-stone-200 min-h-[320px] sm:min-h-[420px] lg:min-h-[520px]">
            <Image
              src="/images/campus/main-campus-gate.jpeg"
              alt="Main entrance of the University of Swat Charbagh campus"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1912]/70 via-[#0C1912]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 text-[#153B27] text-[10px] font-bold uppercase tracking-[0.16em] backdrop-blur-sm">
                <Users className="w-3.5 h-3.5" />
                Charbagh Main Campus
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl bg-[#0F291B] text-white border border-[#0C1912] p-7 sm:p-8 lg:p-9 flex flex-col justify-between relative overflow-hidden">
            <div aria-hidden="true" className="absolute -top-20 -right-16 w-64 h-64 rounded-full bg-[#C8A96E]/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-0.5 w-6 bg-[#C8A96E]" />
                <span className="text-xs uppercase tracking-[0.18em] text-[#C8A96E] font-bold">
                  Admissions Office
                </span>
              </div>
              <h2
                id="apply-charbagh-heading"
                className="font-serif text-3xl sm:text-[2.1rem] text-white font-bold tracking-[-0.02em] leading-[1.12] mb-4"
              >
                Apply to study in the Swat Valley
              </h2>
              <p className="font-sans text-sm sm:text-[15px] text-stone-200 leading-relaxed mb-6">
                Admissions are merit-based and department-wise. Prepare your academic credentials, domicile, and required documents before the scrutiny and fee submission deadlines.
              </p>

              <ul className="space-y-3 text-xs sm:text-[13px] text-stone-200">
                {[
                  'Online application with verified academic records',
                  'Bank of Khyber challan processing (PKR 1,500)',
                  'Departmental merit lists and document scrutiny',
                  'Fee deposit, enrollment, and orientation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CalendarCheck className="w-4 h-4 text-[#C8A96E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative pt-7 mt-7 border-t border-white/15 flex flex-col sm:flex-row gap-3">
              <Link
                href="/admissions/merit-lists"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#C8A96E] text-[#14291D] hover:bg-[#D6BC84] text-[11px] font-bold uppercase tracking-[0.12em] transition-all active:scale-[0.985]"
              >
                <span>Check Merit Lists</span>
              </Link>
              <Link
                href="/admissions/fee-structure"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/15 text-[11px] font-bold uppercase tracking-[0.12em] transition-all active:scale-[0.985]"
              >
                <span>View Fee Structure</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Application steps */}
        <section aria-labelledby="admission-steps-heading" className="p-7 sm:p-10 lg:p-12 rounded-2xl bg-[#153B27] text-white border border-white/10 shadow-[0_24px_48px_-22px_rgba(12,25,18,0.5)]">
          <div className="pb-5 border-b border-white/15 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-0.5 w-6 bg-[#C8A96E]" />
              <span className="text-xs uppercase tracking-[0.18em] text-[#C8A96E] font-bold">
                Admission Procedure
              </span>
            </div>
            <h2 id="admission-steps-heading" className="font-serif text-3xl font-bold text-white tracking-[-0.02em]">
              Apply in Four Clear Steps
            </h2>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              return (
                <li
                  key={st.title}
                  className="relative p-6 rounded-xl bg-white/[0.07] border border-white/[0.12] hover:bg-white/[0.12] hover:border-white/25 hover:-translate-y-[2px] hover:shadow-[0_18px_36px_-20px_rgba(0,0,0,0.45)] transition-all duration-200 ease-out"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-5 font-serif text-4xl font-bold text-[#C8A96E]/25 tabular-nums leading-none"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 text-[#C8A96E] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug pr-8">{st.title}</h3>
                  <p className="font-sans text-xs sm:text-[13px] text-white/70 leading-relaxed">{st.text}</p>
                </li>
              );
            })}
          </ol>
        </section>

        {/* Scholarships */}
        <section aria-labelledby="scholarships-heading" className="p-7 sm:p-10 lg:p-12 rounded-2xl bg-white border border-stone-300 shadow-xs">
          <div className="pb-5 border-b border-stone-200 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-0.5 w-6 bg-[#7F1D1D]" />
                <span className="text-xs uppercase tracking-[0.18em] text-[#7F1D1D] font-bold">
                  Student Support
                </span>
              </div>
              <h2 id="scholarships-heading" className="font-serif text-3xl font-bold text-[#14291D] tracking-[-0.02em]">
                Scholarships &amp; Financial Aid (UAFAO)
              </h2>
            </div>
            <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-stone-500">
              University Advancement &amp; Financial Aid Office
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {scholarshipSchemes.map((sc) => (
              <article
                key={sc.title}
                className="p-6 rounded-xl bg-stone-50/70 border border-stone-300 flex items-start gap-4 hover:bg-white hover:border-[#153B27]/25 transition-colors"
              >
                <div className="p-3 rounded-xl bg-white border border-stone-300 text-[#153B27] shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h3 className="font-serif text-lg font-bold text-[#14291D] leading-snug">{sc.title}</h3>
                    <span className="text-[10px] font-mono text-stone-600 bg-white px-2 py-0.5 rounded border border-stone-300 whitespace-nowrap shrink-0">
                      {sc.deadline}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-[13px] text-stone-600 leading-relaxed">{sc.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
