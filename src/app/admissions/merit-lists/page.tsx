import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ArrowLeft, Download } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Merit Lists & Quota Allotment | University of Swat',
  description:
    'Download official provisional merit lists, quota allotments, and interview schedules for the University of Swat.',
};

const meritLists = [
  { department: 'Department of Computer and Software Technology', program: 'BS Computer Science (BSCS)', round: '1st Merit List (Fall 2026)', cutoff: '82.4%', status: 'Available' },
  { department: 'Department of Computer and Software Technology', program: 'BS Software Engineering (BSSE)', round: '1st Merit List (Fall 2026)', cutoff: '79.1%', status: 'Available' },
  { department: 'Department of Chemistry', program: 'BS Chemistry', round: '1st Merit List (Fall 2026)', cutoff: '74.6%', status: 'Available' },
  { department: 'Department of Management & Commerce', program: 'BBA (Honors)', round: '1st Merit List (Fall 2026)', cutoff: '68.5%', status: 'Available' },
  { department: 'Department of Law & Shariah', program: 'BA / LLB (5-Year)', round: '1st Merit List (Fall 2026)', cutoff: '76.2% (LAT + FSC)', status: 'Available' },
  { department: 'Department of Biotechnology & Genetics', program: 'BS Biotechnology', round: '1st Merit List (Fall 2026)', cutoff: '78.0%', status: 'Available' },
  { department: 'Department of Environmental Sciences', program: 'BS Environmental Sciences', round: '1st Merit List (Fall 2026)', cutoff: '65.2%', status: 'Available' },
  { department: 'Department of English & Foreign Languages', program: 'BS English', round: '1st Merit List (Fall 2026)', cutoff: '71.0%', status: 'Available' },
];

const quotaCategories = [
  { name: 'Merged Districts (Ex-FATA) Quota', seats: 'Reserved per department', eligibility: 'Valid domicile of erstwhile FATA tribal agencies.' },
  { name: 'Other Provinces & AJK Quota', seats: '2 seats per program', eligibility: 'Nomination through respective provincial education secretariats.' },
  { name: 'Persons with Disabilities (Special Quota)', seats: '1 seat per program', eligibility: 'Disability certificate issued by authorized government medical board.' },
  { name: 'Sports Merit Quota', seats: 'Open trials', eligibility: 'District/Provincial/National level sports participation certificate.' },
  { name: 'University Employee Children Quota', seats: 'Statutory quota', eligibility: 'Verified service credentials of UOS regular employee.' },
  { name: 'Minority Communities Quota', seats: '1 seat per program', eligibility: 'Proof of belonging to recognized religious minority communities.' },
];

export default function MeritListsPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen text-[#14291D]">
      <PageHeader
        tag="Admissions Office"
        eyebrow="Directorate of Admissions · University of Swat"
        title="Provisional Merit Lists & Quotas"
        subtitle="Official merit lists, minimum cutoff percentages, quota seat distribution, and document verification schedules for Fall 2026."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admissions', href: '/admissions' },
          { label: 'Merit Lists & Quotas' },
        ]}
      >
        <dl className="flex flex-wrap items-stretch border-t border-white/15 pt-6 sm:pt-7 gap-y-4">
          {[
            { value: String(meritLists.length).padStart(2, '0'), label: 'Program Lists' },
            { value: String(quotaCategories.length).padStart(2, '0'), label: 'Reserved Quotas' },
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

          <a
            href="https://uswat.edu.pk/merit-list/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-stone-200 text-stone-800 hover:bg-stone-50 hover:border-stone-300 text-[11px] font-bold uppercase tracking-[0.12em] transition-all active:scale-[0.985] shadow-xs"
          >
            <Download className="w-4 h-4 text-[#7F1D1D]" />
            <span>Download Official PDF Archive</span>
          </a>
        </div>

        <section
          aria-labelledby="verification-instructions"
          className="p-6 sm:p-7 rounded-2xl bg-[#7F1D1D]/[0.06] border border-[#7F1D1D]/20 mb-10 flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-lg bg-[#7F1D1D]/10 text-[#7F1D1D] flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h2 id="verification-instructions" className="font-serif text-lg sm:text-xl font-bold text-[#14291D] mb-1.5">
              Instructions for Selected Candidates
            </h2>
            <p>
              Candidates appearing in provisional merit lists must present original documents (Matric, F.Sc/DMC, Domicile, CNIC/Form-B, and 3 passport photos) before the respective Departmental Admission Committee by 04:00 PM on the cutoff date. Failure to deposit dues within the specified schedule results in automatic forfeiture of the seat to waiting-list candidates.
            </p>
          </div>
        </section>

        <section aria-labelledby="merit-lists-heading" className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-stone-200/90 shadow-xs mb-10 lg:mb-12">
          <div className="pb-5 border-b border-stone-100 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-0.5 w-6 bg-[#7F1D1D]" />
                <span className="text-xs uppercase tracking-[0.18em] text-[#7F1D1D] font-bold">
                  Fall 2026 Admissions
                </span>
              </div>
              <h2 id="merit-lists-heading" className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D] tracking-[-0.02em]">
                Departmental Open Merit Lists
              </h2>
            </div>
            <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-stone-400">
              Updated: Phase-II Admissions
            </span>
          </div>

          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <table className="w-full min-w-[760px] text-left border-collapse">
              <caption className="sr-only">Provisional departmental merit lists for Fall 2026 admissions</caption>
              <thead>
                <tr className="border-b border-stone-200 text-stone-500 font-bold uppercase tracking-[0.14em] text-[10px]">
                  <th scope="col" className="py-3 px-2 sm:px-0">Program / Department</th>
                  <th scope="col" className="py-3 px-2 sm:px-0">Merit List Round</th>
                  <th scope="col" className="py-3 px-2 sm:px-0">Closing Merit</th>
                  <th scope="col" className="py-3 px-2 sm:px-0">Status</th>
                  <th scope="col" className="py-3 px-2 sm:px-0 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-xs sm:text-sm text-stone-700">
                {meritLists.map((item) => (
                  <tr key={`${item.program}-${item.round}`} className="hover:bg-stone-50/70 transition-colors">
                    <td className="py-4 px-2 sm:px-0">
                      <span className="font-serif font-bold text-[#14291D] block text-sm sm:text-base leading-snug">
                        {item.program}
                      </span>
                      <span className="text-[11px] text-stone-500 block mt-0.5">{item.department}</span>
                    </td>
                    <td className="py-4 px-2 sm:px-0 text-stone-600">{item.round}</td>
                    <td className="py-4 px-2 sm:px-0 font-mono font-bold text-[#153B27] tabular-nums">{item.cutoff}</td>
                    <td className="py-4 px-2 sm:px-0">
                      <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full bg-[#153B27]/10 text-[#153B27] border border-[#153B27]/20">
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 px-2 sm:px-0 text-right">
                      <a
                        href="https://uswat.edu.pk/merit-list/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-end text-[11px] font-bold uppercase tracking-[0.12em] text-[#153B27] hover:text-[#7F1D1D] transition-colors"
                      >
                        View Full List
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="quota-heading" className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
          <div className="pb-5 border-b border-stone-100 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-0.5 w-6 bg-[#153B27]" />
              <span className="text-xs uppercase tracking-[0.18em] text-[#153B27] font-bold">
                Affirmative Inclusion
              </span>
            </div>
            <h2 id="quota-heading" className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D] tracking-[-0.02em]">
              Reserved Quota Allocations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {quotaCategories.map((q, idx) => (
              <article
                key={q.name}
                className="p-5 sm:p-6 rounded-xl bg-stone-50/70 border border-stone-200/80 hover:bg-white hover:border-[#153B27]/25 hover:-translate-y-[2px] hover:shadow-[0_18px_36px_-20px_rgba(12,25,18,0.3)] transition-all duration-200 ease-out"
              >
                <span
                  aria-hidden="true"
                  className="block font-serif text-sm font-bold text-stone-300 tabular-nums mb-2"
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-[10px] uppercase tracking-[0.14em] font-bold text-[#7F1D1D] block mb-1.5">
                  {q.seats}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#14291D] mb-2 leading-snug">{q.name}</h3>
                <p className="font-sans text-xs sm:text-[13px] text-stone-600 leading-relaxed">{q.eligibility}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
