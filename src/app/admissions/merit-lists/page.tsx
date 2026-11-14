import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Download, FileText, Search, UserCheck, AlertTriangle } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Merit Lists & Quota Allotment | University of Swat',
  description: 'Download official provisional merit lists, quota allotments, and interview schedules for University of Swat.',
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
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Admissions Office"
        title="Provisional Merit Lists &amp; Quotas"
        subtitle="Official merit lists, minimum cutoff percentages, quota seat distribution, and document verification schedules."
        eyebrow="Directorate of Admissions · University of Swat"
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20">
        
        {/* Back link */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-[#153B27] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Admissions Overview</span>
          </Link>

          <a
            href="https://uswat.edu.pk/merit-list/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 text-xs font-semibold shadow-xs"
          >
            <Download className="w-4 h-4 text-[#7F1D1D]" />
            <span>Download Official PDF Archive</span>
          </a>
        </div>

        {/* Verification Alert */}
        <div className="p-6 sm:p-8 rounded-3xl bg-amber-50 border border-amber-200 mb-12 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-800 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            <strong className="block font-bold text-amber-950 mb-1">
              Important Instructions for Selected Candidates:
            </strong>
            Candidates appearing in the provisional merit lists must present original documents (Matric, F.Sc/DMC, Domicile, CNIC/Form-B, and 3 passport photos) at the respective Departmental Admission Committee before 04:00 PM on the cutoff date. Failure to deposit fee within the specified schedule results in automatic forfeiture of the seat to waiting list scholars.
          </div>
        </div>

        {/* Merit Lists Table */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs mb-16">
          <div className="pb-4 border-b border-stone-100 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold block mb-1">
                Fall 2026 Admissions
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Departmental Open Merit Lists
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-400">
              Updated: Phase-II Admissions
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-stone-200 text-stone-400 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-3">Program / Department</th>
                  <th className="py-3">Merit List Round</th>
                  <th className="py-3">Closing Merit</th>
                  <th className="py-3">Status</th>
                  <th className="py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700 font-medium">
                {meritLists.map((item, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/60 transition-colors">
                    <td className="py-4">
                      <strong className="font-serif text-stone-900 block text-sm sm:text-base">
                        {item.program}
                      </strong>
                      <span className="text-[11px] text-stone-500 font-sans block mt-0.5">
                        {item.department}
                      </span>
                    </td>
                    <td className="py-4 text-xs text-stone-600">
                      {item.round}
                    </td>
                    <td className="py-4 font-mono font-bold text-[#153B27]">
                      {item.cutoff}
                    </td>
                    <td className="py-4">
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#153B27] border border-emerald-200">
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <a
                        href="https://uswat.edu.pk/merit-list/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#153B27] hover:underline"
                      >
                        View Full List
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reserved Quotas Table */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
          <div className="pb-4 border-b border-stone-100 mb-6">
            <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold block mb-1">
              Affirmative Inclusion
            </span>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Reserved Quota Allocations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quotaCategories.map((q, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#7F1D1D] block mb-1">
                  {q.seats}
                </span>
                <h4 className="font-serif text-base font-bold text-stone-900 mb-2">
                  {q.name}
                </h4>
                <p className="font-sans text-xs text-stone-600 leading-relaxed">
                  {q.eligibility}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
