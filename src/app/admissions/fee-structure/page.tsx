import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Download, Info } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Official Fee Structure 2026–2027 | University of Swat',
  description:
    'Complete tuition and examination fee structure for BS, MS/MPhil, and PhD programs at the University of Swat.',
};

const feeData = [
  {
    faculty: 'Faculty of Physical, Numerical & Computational Sciences',
    programs: [
      { name: 'BS Computer Science / Software Engineering', openMerit: 'PKR 34,500', selfFinance: 'PKR 58,000' },
      { name: 'BS Physics / Mathematics / Geology', openMerit: 'PKR 28,000', selfFinance: 'PKR 48,000' },
      { name: 'MS / M.Phil Computing & Physical Sciences', openMerit: 'PKR 42,000', selfFinance: 'PKR 65,000' },
      { name: 'PhD Computing / Physics', openMerit: 'PKR 48,000', selfFinance: 'PKR 75,000' },
    ],
    cardClass: 'bg-[#153B27] text-white border border-white/10 shadow-[0_24px_48px_-22px_rgba(12,25,18,0.5)]',
    ruleClass: 'border-white/15',
    titleClass: 'text-white',
    headClass: 'border-b border-white/15 text-[#C8A96E]',
    bodyClass: 'divide-y divide-white/15 text-white/80',
    rowClass: 'hover:bg-white/[0.06]',
    nameClass: 'text-white',
    openClass: 'text-[#C8A96E]',
    selfClass: 'text-white/75',
    modeClass: 'text-white/60',
  },
  {
    faculty: 'Faculty of Chemical & Life Sciences',
    programs: [
      { name: 'BS Chemistry / Environmental Sciences', openMerit: 'PKR 31,000', selfFinance: 'PKR 52,000' },
      { name: 'BS Biotechnology / Genetics / Microbiology', openMerit: 'PKR 33,500', selfFinance: 'PKR 56,000' },
      { name: 'BS Botany / Zoology', openMerit: 'PKR 27,500', selfFinance: 'PKR 46,000' },
      { name: 'M.Phil / PhD Life Sciences', openMerit: 'PKR 44,000', selfFinance: 'PKR 70,000' },
    ],
    cardClass: 'bg-white border border-stone-300 shadow-xs',
    ruleClass: 'border-stone-200',
    titleClass: 'text-[#14291D]',
    headClass: 'border-b border-stone-200 text-stone-600',
    bodyClass: 'divide-y divide-stone-200 text-stone-700',
    rowClass: 'hover:bg-stone-50/70',
    nameClass: 'text-[#14291D]',
    openClass: 'text-[#153B27]',
    selfClass: 'text-stone-700',
    modeClass: 'text-stone-600',
  },
  {
    faculty: 'Faculty of Management, Art & Social Sciences',
    programs: [
      { name: 'Bachelor of Business Administration (BBA Hons)', openMerit: 'PKR 32,500', selfFinance: 'PKR 55,000' },
      { name: 'BS Economics / Tourism & Hospitality', openMerit: 'PKR 26,000', selfFinance: 'PKR 44,000' },
      { name: 'BS Media & Communication / Psychology', openMerit: 'PKR 28,000', selfFinance: 'PKR 46,000' },
      { name: 'MS Management Sciences / Economics', openMerit: 'PKR 38,000', selfFinance: 'PKR 62,000' },
    ],
    cardClass: 'bg-white border border-stone-300 shadow-xs',
    ruleClass: 'border-stone-200',
    titleClass: 'text-[#14291D]',
    headClass: 'border-b border-stone-200 text-stone-600',
    bodyClass: 'divide-y divide-stone-200 text-stone-700',
    rowClass: 'hover:bg-stone-50/70',
    nameClass: 'text-[#14291D]',
    openClass: 'text-[#153B27]',
    selfClass: 'text-stone-700',
    modeClass: 'text-stone-600',
  },
  {
    faculty: 'Faculty of Religious, Languages, Humanities & Legal Studies',
    programs: [
      { name: 'BA / LLB (5-Year Integrated Law)', openMerit: 'PKR 36,000', selfFinance: 'PKR 60,000' },
      { name: 'BS English / Urdu / Pashto', openMerit: 'PKR 24,000', selfFinance: 'PKR 40,000' },
      { name: 'BS Islamic & Arabic Studies', openMerit: 'PKR 22,500', selfFinance: 'PKR 38,000' },
      { name: 'LLM / M.Phil Humanities', openMerit: 'PKR 38,000', selfFinance: 'PKR 58,000' },
    ],
    cardClass: 'bg-white border border-stone-300 shadow-xs',
    ruleClass: 'border-stone-200',
    titleClass: 'text-[#14291D]',
    headClass: 'border-b border-stone-200 text-stone-600',
    bodyClass: 'divide-y divide-stone-200 text-stone-700',
    rowClass: 'hover:bg-stone-50/70',
    nameClass: 'text-[#14291D]',
    openClass: 'text-[#153B27]',
    selfClass: 'text-stone-700',
    modeClass: 'text-stone-600',
  },
];

const oneTimeDues = [
  { label: 'Admission Processing Fee', amount: 'PKR 2,500' },
  { label: 'Registration & Enrollment Fee', amount: 'PKR 2,000' },
  { label: 'Refundable Library & Lab Security', amount: 'PKR 5,000' },
  { label: 'Student Smart Card Fee', amount: 'PKR 500' },
];

const hostelDues = [
  { label: 'Hostel Room Rent (Per Semester)', amount: 'PKR 14,000' },
  { label: 'Mess Security (Refundable)', amount: 'PKR 6,000' },
  { label: 'Utility & Maintenance Dues', amount: 'PKR 3,500' },
  { label: 'Campus Bus Shuttle Transport (Per Term)', amount: 'PKR 6,500' },
];

export default function FeeStructurePage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen text-[#14291D]">
      <PageHeader
        tag="Admissions & Aid"
        eyebrow="Financial Information · University of Swat"
        title="Official Schedule of Fees 2026–2027"
        subtitle="Semester tuition, laboratory dues, and registration charges across all faculties, with open-merit and self-finance schedules."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admissions', href: '/admissions' },
          { label: 'Fee Structure' },
        ]}
      >
        <dl className="flex flex-wrap items-stretch border-t border-white/15 pt-6 sm:pt-7 gap-y-4">
          {[
            { value: '04', label: 'Faculties' },
            { value: '02', label: 'Fee Categories' },
            { value: '2026–27', label: 'Academic Session' },
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
              <dd className="order-1 font-serif text-2xl sm:text-3xl text-[#C8A96E] font-bold leading-none tabular-nums">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-14 sm:py-16 lg:py-20">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500 hover:text-[#153B27] transition-colors min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Admissions</span>
          </Link>

          <Link
            href="/academics/downloads"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-stone-200 text-stone-800 hover:bg-stone-50 hover:border-stone-300 text-[11px] font-bold uppercase tracking-[0.12em] transition-all active:scale-[0.985] shadow-xs"
          >
            <Download className="w-4 h-4 text-[#7F1D1D]" />
            <span>Download Bank Challan Template</span>
          </Link>
        </div>

        <section aria-labelledby="tuition-heading" className="space-y-6 lg:space-y-8 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-2">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-0.5 w-6 bg-[#7F1D1D]" />
                <span className="text-xs uppercase tracking-[0.18em] text-[#7F1D1D] font-bold">
                  Tuition Schedule
                </span>
              </div>
              <h2 id="tuition-heading" className="font-serif text-3xl sm:text-4xl text-[#14291D] font-bold tracking-[-0.02em]">
                Semester Fees by Faculty
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md sm:text-right leading-relaxed">
              Fees shown are per semester. Open Merit and Self Finance categories are listed separately for each program group.
            </p>
          </div>

          {feeData.map((fGroup) => (
            <article key={fGroup.faculty} className={`p-6 sm:p-8 lg:p-10 rounded-2xl ${fGroup.cardClass}`}>
              <div className={`pb-4 border-b ${fGroup.ruleClass} mb-5`}>
                <h3 className={`font-serif text-xl sm:text-2xl font-bold ${fGroup.titleClass} tracking-[-0.01em]`}>
                  {fGroup.faculty}
                </h3>
              </div>

              <div className="overflow-x-auto -mx-2 sm:mx-0">
                <table className="w-full min-w-[680px] text-left border-collapse">
                  <caption className="sr-only">Semester tuition fees for {fGroup.faculty}</caption>
                  <thead>
                    <tr className={`${fGroup.headClass} font-bold uppercase tracking-[0.14em] text-[10px]`}>
                      <th scope="col" className="py-3 px-2 sm:px-0">Program / Degree</th>
                      <th scope="col" className="py-3 px-2 sm:px-0">Open Merit (Per Semester)</th>
                      <th scope="col" className="py-3 px-2 sm:px-0">Self Finance (Per Semester)</th>
                      <th scope="col" className="py-3 px-2 sm:px-0">Payment Mode</th>
                    </tr>
                  </thead>
                  <tbody className={`${fGroup.bodyClass} text-xs sm:text-sm`}>
                    {fGroup.programs.map((prog) => (
                      <tr key={prog.name} className={`${fGroup.rowClass} transition-colors`}>
                        <td className={`py-3.5 px-2 sm:px-0 font-serif font-bold ${fGroup.nameClass} leading-snug`}>{prog.name}</td>
                        <td className={`py-3.5 px-2 sm:px-0 font-mono ${fGroup.openClass} font-semibold tabular-nums`}>{prog.openMerit}</td>
                        <td className={`py-3.5 px-2 sm:px-0 font-mono ${fGroup.selfClass} font-semibold tabular-nums`}>{prog.selfFinance}</td>
                        <td className={`py-3.5 px-2 sm:px-0 text-[11px] sm:text-xs ${fGroup.modeClass}`}>Bank of Khyber (Online Slip)</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </section>

        <section aria-labelledby="additional-dues-heading" className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <article className="p-6 sm:p-8 rounded-2xl bg-[#153B27] text-white border border-white/10 shadow-[0_24px_48px_-22px_rgba(12,25,18,0.5)]">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-0.5 w-6 bg-[#C8A96E]" />
              <span className="text-xs uppercase tracking-[0.18em] text-[#C8A96E] font-bold">One-Time Dues</span>
            </div>
            <h3 id="additional-dues-heading" className="font-serif text-xl sm:text-2xl font-bold text-white mb-5 tracking-[-0.01em]">
              Admission & Registration Charges
            </h3>
            <ul className="divide-y divide-white/15">
              {oneTimeDues.map((item) => (
                <li key={item.label} className="flex items-center justify-between gap-4 py-3 text-xs sm:text-sm">
                  <span className="text-white/75">{item.label}</span>
                  <strong className="font-mono text-white tabular-nums shrink-0">{item.amount}</strong>
                </li>
              ))}
            </ul>
          </article>

          <article className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-300 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-0.5 w-6 bg-[#7F1D1D]" />
              <span className="text-xs uppercase tracking-[0.18em] text-[#7F1D1D] font-bold">Accommodation & Transport</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#14291D] mb-5 tracking-[-0.01em]">
              Hostel & Shuttle Charges
            </h3>
            <ul className="divide-y divide-stone-200">
              {hostelDues.map((item) => (
                <li key={item.label} className="flex items-center justify-between gap-4 py-3 text-xs sm:text-sm">
                  <span className="text-stone-700">{item.label}</span>
                  <strong className="font-mono text-[#14291D] tabular-nums shrink-0">{item.amount}</strong>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-[#0F291B] text-white border border-[#0C1912] flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-[#C8A96E]/15 text-[#C8A96E] flex items-center justify-center shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-1.5">Fee Payment Advisory</h3>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
              Fees are deposited through official Bank of Khyber challans issued by the University of Swat. Confirm the latest schedule and deadlines with the Directorate of Admissions or the Treasurer’s Office before payment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
