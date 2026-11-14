import type { Metadata } from 'next';
import { ArrowUpRight, Banknote, FileCheck2, FileText, GraduationCap, LayoutDashboard, MonitorPlay, ScrollText } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Student Portal | University of Swat',
  description: 'Single sign-on gateway to University of Swat online services — LMS, CMS, SUJRIS, e-Office and more.',
};

const portals = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: 'Student LMS',
    text: 'Course materials, assignments, grades and attendance.',
  },
  {
    icon: <LayoutDashboard className="w-5 h-5" />,
    title: 'CMS',
    text: 'Content management for faculty and departments.',
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'SUJRIS',
    text: 'Student registration & record system.',
  },
  {
    icon: <ScrollText className="w-5 h-5" />,
    title: 'e-Office',
    text: 'Official correspondence and digital workflows.',
  },
  {
    icon: <MonitorPlay className="w-5 h-5" />,
    title: 'Campus TV',
    text: 'Live lectures and event broadcasts.',
  },
  {
    icon: <Banknote className="w-5 h-5" />,
    title: 'Fee Challan',
    text: 'Generate and pay semester fee slips.',
  },
  {
    icon: <FileCheck2 className="w-5 h-5" />,
    title: 'Examination Results',
    text: 'Roll-number slips, date sheets and results.',
  },
  {
    icon: <ArrowUpRight className="w-5 h-5" />,
    title: 'Digital Library',
    text: 'HEC e-resources and institutional repository.',
  },
];

export default function PortalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Online Services"
        title="Student Portal"
        description="Single sign-on gateway to the University of Swat’s online services. Sign in with your university credentials."
      />

      <main className="py-14 lg:py-20 bg-[#F6F5F0]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {portals.map(portal => (
              <a
                key={portal.title}
                href="#"
                className="group p-6 rounded-xl bg-white border border-stone-200/90 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-[0_16px_36px_-18px_rgba(21,59,39,0.25)]"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="w-11 h-11 rounded-xl bg-[#153B27]/8 text-[#153B27] flex items-center justify-center">
                    {portal.icon}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#153B27] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="font-serif text-lg text-[#14291D] font-bold mb-1.5">{portal.title}</h3>
                <p className="text-sm text-stone-500 leading-[1.6]">{portal.text}</p>
              </a>
            ))}
          </div>

          <section className="mt-10 p-6 sm:p-8 rounded-xl bg-white border border-stone-200/90 shadow-xs">
            <h2 className="font-serif text-xl text-[#14291D] font-bold mb-2">
              First time signing in?
            </h2>
            <p className="text-sm text-stone-500 leading-[1.65] max-w-2xl">
              Your username is your university registration number; initial password is your CNIC
              number unless changed. For issues, contact the IT Services Help Desk at
              helpdesk@uswat.edu.pk.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
