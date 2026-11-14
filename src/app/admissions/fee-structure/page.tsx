import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Banknote, DollarSign, CheckCircle2, AlertCircle, Download } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Official Fee Structure 2026–2027 | University of Swat',
  description: 'Complete tuition and examination fee structure for BS, MS/MPhil, and PhD programs at University of Swat.',
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
  },
  {
    faculty: 'Faculty of Chemical & Life Sciences',
    programs: [
      { name: 'BS Chemistry / Environmental Sciences', openMerit: 'PKR 31,000', selfFinance: 'PKR 52,000' },
      { name: 'BS Biotechnology / Genetics / Microbiology', openMerit: 'PKR 33,500', selfFinance: 'PKR 56,000' },
      { name: 'BS Botany / Zoology', openMerit: 'PKR 27,500', selfFinance: 'PKR 46,000' },
      { name: 'M.Phil / PhD Life Sciences', openMerit: 'PKR 44,000', selfFinance: 'PKR 70,000' },
    ],
  },
  {
    faculty: 'Faculty of Management, Art & Social Sciences',
    programs: [
      { name: 'Bachelor of Business Administration (BBA Hons)', openMerit: 'PKR 32,500', selfFinance: 'PKR 55,000' },
      { name: 'BS Economics / Tourism & Hospitality', openMerit: 'PKR 26,000', selfFinance: 'PKR 44,000' },
      { name: 'BS Media & Communication / Psychology', openMerit: 'PKR 28,000', selfFinance: 'PKR 46,000' },
      { name: 'MS Management Sciences / Economics', openMerit: 'PKR 38,000', selfFinance: 'PKR 62,000' },
    ],
  },
  {
    faculty: 'Faculty of Religious, Languages, Humanities & Legal Studies',
    programs: [
      { name: 'BA / LLB (5-Year Integrated Law)', openMerit: 'PKR 36,000', selfFinance: 'PKR 60,000' },
      { name: 'BS English / Urdu / Pashto', openMerit: 'PKR 24,000', selfFinance: 'PKR 40,000' },
      { name: 'BS Islamic & Arabic Studies', openMerit: 'PKR 22,500', selfFinance: 'PKR 38,000' },
      { name: 'LLM / M.Phil Humanities', openMerit: 'PKR 38,000', selfFinance: 'PKR 58,000' },
    ],
  },
];

export default function FeeStructurePage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Admissions &amp; Aid"
        title="Official Schedule of Fees 2026–2027"
        subtitle="Transparent semester tuition fees, laboratory dues, and registration charges across all university faculties."
        eyebrow="Financial Information · University of Swat"
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

          <Link
            href="/academics/downloads"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 text-xs font-semibold shadow-xs"
          >
            <Download className="w-4 h-4 text-[#7F1D1D]" />
            <span>Download Bank Challan Template</span>
          </Link>
        </div>

        {/* Fees by Faculty */}
        <div className="space-y-12 mb-16">
          {feeData.map((fGroup, idx) => (
            <div key={idx} className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <div className="pb-4 border-b border-stone-100 mb-6">
                <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold block mb-1">
                  Tuition Schedule
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  {fGroup.faculty}
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-400 font-bold uppercase tracking-wider text-[11px]">
                      <th className="py-3">Program / Degree</th>
                      <th className="py-3">Open Merit (Per Semester)</th>
                      <th className="py-3">Self Finance (Per Semester)</th>
                      <th className="py-3">Payment Mode</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-700 font-medium">
                    {fGroup.programs.map((prog, pIdx) => (
                      <tr key={pIdx} className="hover:bg-stone-50/60 transition-colors">
                        <td className="py-3.5 font-serif font-bold text-stone-900">
                          {prog.name}
                        </td>
                        <td className="py-3.5 font-mono text-[#153B27] font-semibold">
                          {prog.openMerit}
                        </td>
                        <td className="py-3.5 font-mono text-stone-700">
                          {prog.selfFinance}
                        </td>
                        <td className="py-3.5 text-xs text-stone-500">
                          Bank of Khyber (Online Slip)
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* One-time and Hostel Charges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
            <h4 className="font-serif text-xl font-bold text-stone-900 mb-4">
              One-Time Admission Dues (At First Registration)
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
              <li className="flex items-center justify-between py-2 border-b border-stone-100">
                <span>Admission Processing Fee:</span>
                <strong className="font-mono text-stone-900">PKR 2,500</strong>
              </li>
              <li className="flex items-center justify-between py-2 border-b border-stone-100">
                <span>Registration &amp; Enrollment Fee:</span>
                <strong className="font-mono text-stone-900">PKR 2,000</strong>
              </li>
              <li className="flex items-center justify-between py-2 border-b border-stone-100">
                <span>Refundable Library &amp; Lab Security:</span>
                <strong className="font-mono text-stone-900">PKR 5,000</strong>
              </li>
              <li className="flex items-center justify-between py-2">
                <span>Student Smart Card Fee:</span>
                <strong className="font-mono text-stone-900">PKR 500</strong>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
            <h4 className="font-serif text-xl font-bold text-stone-900 mb-4">
              Hostel Accommodation Charges
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
              <li className="flex items-center justify-between py-2 border-b border-stone-100">
                <span>Hostel Room Rent (Per Semester):</span>
                <strong className="font-mono text-stone-900">PKR 14,000</strong>
              </li>
              <li className="flex items-center justify-between py-2 border-b border-stone-100">
                <span>Mess Security (Refundable):</span>
                <strong className="font-mono text-stone-900">PKR 6,000</strong>
              </li>
              <li className="flex items-center justify-between py-2 border-b border-stone-100">
                <span>Utility &amp; Maintenance Dues:</span>
                <strong className="font-mono text-stone-900">PKR 3,500</strong>
              </li>
              <li className="flex items-center justify-between py-2">
                <span>Campus Bus Shuttle Transport (Per Term):</span>
                <strong className="font-mono text-stone-900">PKR 6,500</strong>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
