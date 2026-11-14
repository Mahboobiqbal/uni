import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, FlaskConical, Microscope, Lightbulb, Landmark, BookOpen, ShieldCheck, Award, Handshake, GraduationCap } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Research, Innovation & Commercialization | University of Swat',
  description: 'Explore ORIC, ASRB, SUJRIS research journal, patents, international archaeological missions, and entrepreneurship incubators at University of Swat.',
};

export default function ResearchPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Research &amp; Discovery"
        title="Innovation &amp; Scholastic Impact"
        subtitle="Empowering cutting-edge empirical inquiry across mountain biodiversity, renewable solar systems, Gandhara archaeology, and applied computational sciences."
        eyebrow="Office of Research, Innovation &amp; Commercialization (ORIC)"
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20 space-y-16">
        
        {/* Flagship Pillars: ORIC & ASRB */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs flex flex-col justify-between group hover:border-[#153B27]/40 hover:shadow-md transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#153B27]/10 text-[#153B27] flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold block mb-1">
                Industry &amp; Technology Transfer
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 group-hover:text-[#153B27] transition-colors mb-4">
                Office of Research, Innovation &amp; Commercialization (ORIC)
              </h3>
              <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                Led by Director Dr. Anwar Hussain, ORIC spearheads competitive research grants, patent registrations, business incubation for student startups, and strategic industry collaboration with the Swat Chamber of Commerce and Industry (SCCI).
              </p>
            </div>
            <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#153B27]">
                Explore ORIC Division &amp; Incubation
              </span>
              <Link
                href="/research/oric"
                className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 group-hover:bg-[#153B27] group-hover:text-white transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs flex flex-col justify-between group hover:border-[#7F1D1D]/40 hover:shadow-md transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#7F1D1D]/10 text-[#7F1D1D] flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold block mb-1">
                Postgraduate Research Governance
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 group-hover:text-[#7F1D1D] transition-colors mb-4">
                Advanced Studies &amp; Research Board (ASRB)
              </h3>
              <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                Statutory regulatory board approving MS, M.Phil, and PhD research proposals, uniform synopses standards, research supervisor appointments, and external doctoral thesis defense evaluations.
              </p>
            </div>
            <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#7F1D1D]">
                ASRB Synopses Guidelines &amp; Minutes
              </span>
              <Link
                href="/research/asrb"
                className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 group-hover:bg-[#7F1D1D] group-hover:text-white transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* International Research Partnerships */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
          <div className="pb-4 border-b border-stone-100 mb-8">
            <span className="text-xs uppercase tracking-widest text-[#B48A3E] font-bold block mb-1">
              Global Collaboration
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-900">
              International Collaborations &amp; Research Missions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 bg-stone-200">
                <Image
                  src="/images/news/news-italian-mission-oct2026.jpeg"
                  alt="Italian Archaeological Mission"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">
                Italian Archaeological Mission
              </h4>
              <p className="font-sans text-xs text-stone-600 leading-relaxed">
                Ongoing joint excavations at ancient Bazira (Barikot) headed by Prof. Dr. Luca Maria Olivieri (Sitara-i-Imtiaz), excavating Gandharan Buddhist stupas and prehistoric settlements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 bg-stone-200">
                <Image
                  src="/images/news/news-gandhara-mou-oct2026.jpeg"
                  alt="Sri Lankan NIIBS MoU"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">
                Sri Lankan NIIBS Partnership
              </h4>
              <p className="font-sans text-xs text-stone-600 leading-relaxed">
                Bilateral agreement with Nagananda International Institute for Buddhist Studies for student exchanges, manuscript preservation, and Gandhara art curation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 bg-stone-200">
                <Image
                  src="/images/news/news-climate-resilience-nov2026.jpeg"
                  alt="Climate Resilience Consortium"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">
                Mountain Climate Consortium
              </h4>
              <p className="font-sans text-xs text-stone-600 leading-relaxed">
                Collaborative environmental monitoring of alpine glaciers, flash flood hydrodynamics, and sustainable forest ecosystems across Northern Pakistan.
              </p>
            </div>
          </div>
        </div>

        {/* Official Research Journal: SUJRIS */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#153B27] to-[#0D2418] text-white shadow-md flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#B48A3E] font-bold block mb-2">
              HEC Recognized Peer-Reviewed Journal
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              SUJRIS: Swat University Journal of Research &amp; Innovative Studies
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              SUJRIS publishes high-quality empirical and theoretical papers across social sciences, natural sciences, computational modeling, and cultural heritage with open-access indexing.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <a
              href="https://sujris.uswat.edu.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#B48A3E] text-stone-950 font-bold text-xs hover:bg-[#B48A3E]/90 transition-colors shadow-xs text-center"
            >
              Access SUJRIS Journal Portal
            </a>
            <Link
              href="/portal"
              className="px-6 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-xs hover:bg-white/20 transition-colors text-center"
            >
              Digital Library Access
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
