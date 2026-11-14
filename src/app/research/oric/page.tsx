import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Lightbulb, Handshake, ShieldCheck, Award, Building, Users, Mail, Phone } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'ORIC (Office of Research, Innovation & Commercialization) | University of Swat',
  description: 'Industrial linkages, patent applications, business incubators, and research grants at University of Swat ORIC.',
};

const oricTeam = [
  { name: 'Dr. Anwar Hussain', designation: 'Director ORIC', email: 'oric@uswat.edu.pk' },
  { name: 'Mr. Khurshid Alam', designation: 'Deputy Director (Manager Research Operations)' },
  { name: 'Dr. Ghulam Nabi', designation: 'Manager University-Industry Linkages' },
  { name: 'Dr. Naseer Ullah', designation: 'Manager Technology Transfer & IP' },
  { name: 'Mr. Iftikhar Alam', designation: 'Research & Grants Officer' },
  { name: 'Mr. Muhammad Saleem', designation: 'Incubator Coordinator' },
];

export default function OricPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Research &amp; Commercialization"
        title="Office of Research, Innovation &amp; Commercialization"
        subtitle="Empowering scholars and student entrepreneurs to transform academic discoveries into scalable commercial products and community solutions."
        eyebrow="ORIC · University of Swat"
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20">
        
        {/* Back link */}
        <div className="mb-10">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-[#153B27] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Research Overview</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Vision & Mission */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-0.5 w-6 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">
                  Institutional Mission
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
                Vision of ORIC
              </h2>
              <blockquote className="font-serif italic text-xl text-stone-900 border-l-4 border-[#153B27] pl-5 py-1 mb-6">
                &ldquo;Support University of Swat into becoming a regional center of innovation, high-impact applied research, and entrepreneurship.&rdquo;
              </blockquote>
              <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed">
                The Office of Research, Innovation and Commercialization (ORIC) provides central administrative and financial architecture to facilitate high-level multidisciplinary research. ORIC connects university researchers with provincial industries, manages IP portfolios, fosters patent filings, and mentors young entrepreneurs through the university incubation center.
              </p>
            </div>

            {/* Core Functions */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-0.5 w-6 bg-[#7F1D1D]" />
                <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                  Strategic Scope
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">
                ORIC Operational Divisions
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-[#153B27] mb-3">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-stone-900 mb-1.5">
                    Research Grants &amp; Funding
                  </h4>
                  <p className="font-sans text-xs text-stone-600 leading-relaxed">
                    Assisting faculty in drafting proposals for HEC National Research Program for Universities (NRPU), Grand Challenge Fund (GCF), and international research grants.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-[#7F1D1D] mb-3">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-stone-900 mb-1.5">
                    Industry Linkages &amp; SCCI
                  </h4>
                  <p className="font-sans text-xs text-stone-600 leading-relaxed">
                    Strategic industrial collaboration with the Swat Chamber of Commerce &amp; Industry to commercialize mountain fruits, honey, gemstone mining, and tourism technologies.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-[#B48A3E] mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-stone-900 mb-1.5">
                    Intellectual Property &amp; Patents
                  </h4>
                  <p className="font-sans text-xs text-stone-600 leading-relaxed">
                    Patent drafting and filing assistance through the Intellectual Property Organization (IPO) Pakistan to safeguard scientific discoveries and commercial licensing.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-[#153B27] mb-3">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-stone-900 mb-1.5">
                    Business Incubation Center (BIC)
                  </h4>
                  <p className="font-sans text-xs text-stone-600 leading-relaxed">
                    Seed funding, co-working office space, and business mentorship for graduating scholars launching tech startups and green initiatives.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Roster */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-0.5 w-6 bg-[#B48A3E]" />
                <span className="text-xs uppercase tracking-widest text-[#B48A3E] font-bold">
                  ORIC Secretariat
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">
                ORIC Officers &amp; Managers
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {oricTeam.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-stone-900">
                        {m.name}
                      </h4>
                      <span className="text-xs text-[#153B27] font-semibold block mt-0.5">
                        {m.designation}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <h3 className="font-serif text-xl font-bold text-stone-900 pb-3 border-b border-stone-100 mb-4">
                Contact ORIC
              </h3>

              <div className="space-y-4 text-xs sm:text-[13px]">
                <div>
                  <span className="text-stone-400 uppercase tracking-wider block font-bold text-[10px]">
                    Director ORIC
                  </span>
                  <span className="font-semibold text-stone-900 text-sm">
                    Dr. Anwar Hussain
                  </span>
                </div>

                <div>
                  <span className="text-stone-400 uppercase tracking-wider block font-bold text-[10px]">
                    Official Inquiries
                  </span>
                  <a
                    href="mailto:oric@uswat.edu.pk"
                    className="font-mono text-stone-700 hover:text-[#7F1D1D] flex items-center gap-1.5 mt-0.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#7F1D1D]" />
                    oric@uswat.edu.pk
                  </a>
                </div>

                <div>
                  <span className="text-stone-400 uppercase tracking-wider block font-bold text-[10px]">
                    Office Location
                  </span>
                  <span className="font-medium text-stone-700 block mt-0.5">
                    ORIC &amp; Incubation Center, Academic Block C, Charbagh Main Campus
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col gap-2">
                <Link
                  href="/academics/downloads"
                  className="w-full py-3 rounded-xl bg-[#153B27] text-white font-semibold text-xs text-center hover:bg-[#153B27]/90 transition-colors"
                >
                  Download Research Grants Forms
                </Link>
                <Link
                  href="/research/asrb"
                  className="w-full py-3 rounded-xl bg-stone-100 text-stone-700 font-semibold text-xs text-center hover:bg-stone-200 transition-colors"
                >
                  ASRB Synopses Guidelines
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
