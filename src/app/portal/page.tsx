import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Banknote, BookOpen, ExternalLink, FileCheck2, FileText, GraduationCap, LayoutDashboard, MonitorPlay, ScrollText, ShieldCheck, Mail } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Digital Services & Student Portal | University of Swat',
  description: 'Single sign-on gateway to University of Swat digital ecosystem — CMS, SUJRIS, e-Office, Examination, Digital Library, and Office 365.',
};

const portals = [
  {
    icon: <LayoutDashboard className="w-6 h-6 text-[#153B27]" />,
    title: 'Campus Management System (CMS)',
    url: 'http://cms1.uswat.edu.pk/',
    external: true,
    tag: 'Student & Faculty Portal',
    text: 'Course registration, semester attendance, transcript viewing, fee voucher generation, and faculty grade submissions.',
  },
  {
    icon: <ScrollText className="w-6 h-6 text-[#7F1D1D]" />,
    title: 'e-Office Government Portal',
    url: 'https://uswat.edu.pk/e-office/',
    external: true,
    tag: 'Administrative Workflow',
    text: 'Official digital correspondence, paperless file routing, and departmental file tracking across university directorates.',
  },
  {
    icon: <FileText className="w-6 h-6 text-[#B48A3E]" />,
    title: 'SUJRIS Journal Portal',
    url: 'https://sujris.uswat.edu.pk/',
    external: true,
    tag: 'Research & Publishing',
    text: 'Swat University Journal of Research & Innovative Studies — online submission and peer-review repository.',
  },
  {
    icon: <FileCheck2 className="w-6 h-6 text-[#153B27]" />,
    title: 'Online Examination Portal',
    url: 'http://exam.uswat.edu.pk/',
    external: true,
    tag: 'Controller of Exams',
    text: 'Download roll-number slips, annual and semester date sheets, and computerized provisional results.',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#7F1D1D]" />,
    title: 'HEC National Digital Library',
    url: 'http://www.digitallibrary.edu.pk/uniofswat.html',
    external: true,
    tag: 'Scholastic Databases',
    text: 'Access over 20,000 international peer-reviewed journals, IEEE Xplore, ScienceDirect, and JSTOR from on-campus IP.',
  },
  {
    icon: <Mail className="w-6 h-6 text-[#B48A3E]" />,
    title: 'Office 365 & Institutional Email',
    url: 'https://uswat.edu.pk/office-365/',
    external: true,
    tag: 'Faculty & Student Email',
    text: 'Official university mail accounts (@uswat.edu.pk), Microsoft Teams, OneDrive cloud storage, and Word/Excel suite.',
  },
  {
    icon: <MonitorPlay className="w-6 h-6 text-[#153B27]" />,
    title: 'Campus TV (UOS Studio)',
    url: 'https://www.youtube.com/@Campus_Tv_UoS',
    external: true,
    tag: 'Broadcast Media',
    text: 'Official YouTube broadcast channel: live convocation streaming, public lectures, sports events, and documentary features.',
  },
  {
    icon: <Banknote className="w-6 h-6 text-[#7F1D1D]" />,
    title: 'Digital Payments & Fee Vouchers',
    url: '/admissions/fee-structure',
    external: false,
    tag: 'Bank of Khyber Integration',
    text: 'Direct banking instructions for tuition deposits, online 1Link Kuickpay options, and fee structure breakdowns.',
  },
];

export default function PortalPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Digital Gateway"
        title="University Online Services &amp; Portals"
        subtitle="Unified institutional gateway for students, faculty members, researchers, and administrative officers."
        eyebrow="Single Sign-On &amp; Electronic Workflows"
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20 space-y-12">
        
        {/* Portals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portals.map((portal) => {
            const isExt = portal.external;
            const Component = isExt ? 'a' : Link;
            const extraProps = isExt ? { target: '_blank', rel: 'noopener noreferrer' } : {};

            return (
              <Component
                key={portal.title}
                href={portal.url}
                {...extraProps}
                className="group p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-xs hover:border-[#153B27]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-center">
                      {portal.icon}
                    </div>
                    {isExt ? (
                      <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#153B27] transition-colors" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#153B27] transition-colors" />
                    )}
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block mb-1">
                    {portal.tag}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#153B27] transition-colors mb-2">
                    {portal.title}
                  </h3>
                  <p className="font-sans text-xs text-stone-600 leading-relaxed mb-4">
                    {portal.text}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#153B27]">
                  <span>Launch Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Component>
            );
          })}
        </div>

        {/* Credentials & Helpdesk Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold block mb-1">
              IT Support &amp; Single Sign-On Help
            </span>
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Forgot Your Credentials or Facing Login Issues?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
              Your default username is your official university registration number (e.g., 2026-UOS-1234). For password resets, Office 365 licensing, or CMS module access, contact the Directorate of IT Helpdesk.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href="mailto:dit@uswat.edu.pk"
              className="px-6 py-3 rounded-xl bg-[#153B27] text-white text-xs font-semibold hover:bg-[#153B27]/90 transition-colors shadow-xs"
            >
              Contact IT Helpdesk
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
