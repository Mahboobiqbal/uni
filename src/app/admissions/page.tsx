import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BadgeCheck, Banknote, CalendarCheck, ClipboardList, GraduationCap, Send, Users, ShieldCheck, HeartHandshake } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Admissions 2026–2027 | University of Swat',
  description: 'Admissions criteria, application steps, fee schedule, merit lists and scholarships at the University of Swat.',
};

const steps = [
  {
    icon: <Send className="w-5 h-5 text-[#153B27]" />,
    title: '1. Online Application',
    text: 'Submit personal, academic and domicile credentials through the official UOS online admissions portal.',
  },
  {
    icon: <ClipboardList className="w-5 h-5 text-[#7F1D1D]" />,
    title: '2. Fee Deposit & Verification',
    text: 'Generate the system Bank of Khyber challan slip (PKR 1,500) and deposit at any online BOK branch.',
  },
  {
    icon: <BadgeCheck className="w-5 h-5 text-[#B48A3E]" />,
    title: '3. Merit Lists & Scrutiny',
    text: 'Check departmental provisional merit lists. Appear before the Scrutiny Committee with original certificates.',
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-[#153B27]" />,
    title: '4. Fee Deposit & Enrollment',
    text: 'Deposit semester tuition dues, receive your student registration card, and attend departmental orientation.',
  },
];

const scholarshipSchemes = [
  { title: 'HEC Need-Based Scholarship', description: 'Full tuition coverage and monthly living stipend for underprivileged undergraduate scholars.', deadline: 'Fall Semester Cycle' },
  { title: 'KPEF Merit-cum-Inaffordability', description: 'Khyber Pakhtunkhwa Education Foundation financial assistance for deserving students.', deadline: 'Nov 2026' },
  { title: 'University Merit Concessions', description: 'Top academic performers of each entering cohort receive up to 100% tuition waivers.', deadline: 'Semester Basis' },
  { title: 'Orphan & Special Student Subsidies', description: 'Statutory institutional concessions for persons with disabilities and orphan scholars.', deadline: 'Rolling' },
];

export default function AdmissionsPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Admissions 2026–2027"
        title="Join the University of Swat"
        subtitle="Embark upon an inspiring academic journey in the heart of the Swat Valley. Applications open for undergraduate, master's, and doctoral programs."
        eyebrow="Admissions &amp; Financial Aid"
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20 space-y-16">
        
        {/* Quick Portal Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/admissions/fee-structure"
            className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs hover:border-[#153B27]/40 hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#153B27]/10 text-[#153B27] flex items-center justify-center mb-6">
                <Banknote className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold block mb-1">
                Tuition &amp; Dues
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-[#153B27] transition-colors mb-3">
                Fee Structure
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed">
                Detailed semester tuition schedule for all departments, merit vs self-finance quotas, hostel and transport charges.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#153B27]">
              <span>View Fee Schedule</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            href="/admissions/merit-lists"
            className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs hover:border-[#7F1D1D]/40 hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#7F1D1D]/10 text-[#7F1D1D] flex items-center justify-center mb-6">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold block mb-1">
                Selected Candidates
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-[#7F1D1D] transition-colors mb-3">
                Merit Lists &amp; Quotas
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed">
                Provisional merit lists, closing percentages, quota seat distribution (FATA, disabled, sports, employee children).
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#7F1D1D]">
              <span>View Merit Lists</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            href="/programs"
            className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs hover:border-[#B48A3E]/40 hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#B48A3E]/10 text-[#B48A3E] flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#B48A3E] font-bold block mb-1">
                Degree Finder
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-[#B48A3E] transition-colors mb-3">
                Explore Programs
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed">
                Review eligibility criteria, credit hours, semester roadmaps, and career prospects for 60+ academic degrees.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#B48A3E]">
              <span>Browse All Degrees</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* Step by step application guide */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
          <div className="pb-4 border-b border-stone-100 mb-8">
            <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold block mb-1">
              Admission Procedure
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-900">
              How to Apply in 4 Simple Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, sIdx) => (
              <div key={sIdx} className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center mb-4">
                    {st.icon}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">
                    {st.title}
                  </h4>
                  <p className="font-sans text-xs text-stone-600 leading-relaxed">
                    {st.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Aid & Scholarships */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
          <div className="pb-4 border-b border-stone-100 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold block mb-1">
                Student Support
              </span>
              <h2 className="font-serif text-3xl font-bold text-stone-900">
                Scholarships &amp; Financial Aid (UAFAO)
              </h2>
            </div>
            <span className="text-xs font-semibold text-stone-500">
              University Advancement &amp; Financial Aid Office
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {scholarshipSchemes.map((sc, scIdx) => (
              <div key={scIdx} className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white border border-stone-200 text-[#153B27] shrink-0">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-serif text-base font-bold text-stone-900">
                      {sc.title}
                    </h4>
                    <span className="text-[10px] font-mono text-stone-400 bg-white px-2 py-0.5 rounded border border-stone-200">
                      {sc.deadline}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-stone-600 leading-relaxed">
                    {sc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
