import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, FlaskConical, GraduationCap, Lightbulb } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Research, Innovation & Commercialization | University of Swat',
  description: 'Explore ORIC, ASRB, SUJRIS research journal, patents, international archaeological missions, and entrepreneurship incubators at University of Swat.',
};

export default function ResearchPage() {
  return (
    <div id="main-content" className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Research &amp; Discovery"
        title="Innovation &amp; Scholastic Impact"
        subtitle="Empowering cutting-edge empirical inquiry across mountain biodiversity, renewable solar systems, Gandhara archaeology, and applied computational sciences."
        eyebrow="Office of Research, Innovation &amp; Commercialization (ORIC)"
      />

      {/* ─── Section 1 · Flagship pillars — ORIC & ASRB photo-led directory rows ── */}
      <section id="pillars" className="py-16 sm:py-24">
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 space-y-8">

          {/* ORIC — forest lead row */}
          <article className="group relative overflow-hidden rounded-3xl bg-[#153B27] text-white border border-white/10 shadow-[0_24px_48px_-22px_rgba(12,25,18,0.5)] hover:border-[#C8A96E]/40 hover:-translate-y-[2px] transition-all duration-200 ease-out">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-[#C8A96E] border border-white/15 flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7" aria-hidden="true" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#C8A96E] font-bold mb-3">
                  Industry &amp; Technology Transfer
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight mb-4">
                  Office of Research, Innovation &amp; Commercialization (ORIC)
                </h2>
                <p className="font-sans text-white/75 text-base leading-relaxed">
                  Led by Director Dr. Anwar Hussain, ORIC spearheads competitive research grants, patent registrations, business incubation for student startups, and strategic industry collaboration with the Swat Chamber of Commerce and Industry (SCCI).
                </p>

                <div className="mt-auto pt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-white/15 text-xs mb-7">
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-white/60 font-semibold">Director</span>
                      <span className="text-[#E5CD9B] font-semibold">Dr. Anwar Hussain</span>
                    </div>
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-white/60 font-semibold">Industry Partner</span>
                      <span className="text-[#E5CD9B] font-semibold">SCCI, Swat</span>
                    </div>
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-white/60 font-semibold">Focus</span>
                      <span className="text-[#E5CD9B] font-semibold">Grants &middot; Patents &middot; Incubation</span>
                    </div>
                  </div>
                  <Link
                    href="/research/oric"
                    className="self-start inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-[#C8A96E] text-sm font-semibold hover:bg-[#C8A96E] hover:text-[#14291D] active:scale-[0.985] transition-all duration-150"
                  >
                    <span>Explore ORIC Division &amp; Incubation</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative min-h-[240px] lg:min-h-[340px]">
                <img
                  src="/images/news/news-scci-meeting-oct2026.jpeg"
                  alt="University of Swat officials in a collaboration meeting with the Swat Chamber of Commerce and Industry"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#153B27]/55 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
              </div>
            </div>
          </article>

          {/* ASRB — strengthened light row */}
          <article className="group relative overflow-hidden rounded-3xl bg-white border border-stone-300 shadow-xs hover:border-[#7F1D1D]/40 hover:-translate-y-[2px] hover:shadow-md transition-all duration-200 ease-out">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-[#7F1D1D]/10 text-[#7F1D1D] flex items-center justify-center mb-6">
                  <GraduationCap className="w-7 h-7" aria-hidden="true" />
                </div>
                <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold mb-3">
                  Postgraduate Research Governance
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight mb-4">
                  Advanced Studies &amp; Research Board (ASRB)
                </h2>
                <p className="font-sans text-stone-600 text-base leading-relaxed">
                  Statutory regulatory board approving MS, M.Phil, and PhD research proposals, uniform synopses standards, research supervisor appointments, and external doctoral thesis defense evaluations.
                </p>

                <div className="mt-auto pt-8">
                  <div className="flex flex-wrap items-center gap-2 mb-7">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#153B27]/5 border border-[#153B27]/20 text-[11px] font-semibold text-[#153B27]">
                      MS &amp; M.Phil Proposals
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#153B27]/5 border border-[#153B27]/20 text-[11px] font-semibold text-[#153B27]">
                      PhD Synopses &amp; Defenses
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#153B27]/5 border border-[#153B27]/20 text-[11px] font-semibold text-[#153B27]">
                      Supervisor Appointments
                    </span>
                  </div>
                  <Link
                    href="/research/asrb"
                    className="self-start inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-50 border border-stone-300 text-stone-700 text-sm font-semibold hover:bg-[#7F1D1D] hover:border-[#7F1D1D] hover:text-white active:scale-[0.985] transition-all duration-150"
                  >
                    <span>ASRB Synopses Guidelines &amp; Minutes</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative min-h-[240px] lg:min-h-[340px]">
                <img
                  src="/images/news/news-academic-council-nov2026.jpeg"
                  alt="Statutory academic bodies of the University of Swat in session"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* ─── Section 2 · Discovery statement — full-width photo band ──────────── */}
      <section
        id="discovery"
        className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#0C1912] text-white"
      >
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <img
            src="/images/campus/14_img.jpeg"
            alt="University of Swat campus grounds where its research community works"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C1912]/90 via-[#0C1912]/75 to-[#0C1912]/85" aria-hidden="true" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#0C1912]/50 to-[#0C1912]" aria-hidden="true" />
        </div>

        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#E5CD9B] uppercase tracking-widest mb-6">
            <FlaskConical className="w-3.5 h-3.5 text-[#C8A96E]" aria-hidden="true" />
            <span>Research, Innovation &amp; Commercialization</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.025em] max-w-4xl mx-auto leading-[1.12] mb-6 text-white drop-shadow-sm">
            Empirical Inquiry Across Mountains, Ecosystems &amp; Ancient Gandhara
          </h2>

          <p className="font-sans text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            Empowering cutting-edge empirical inquiry across mountain biodiversity, renewable solar systems, Gandhara archaeology, and applied computational sciences.
          </p>

          <div className="pt-8 border-t border-white/15 max-w-2xl mx-auto grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xl sm:text-2xl font-serif font-bold text-white">200+</p>
              <p className="text-[11px] text-stone-400 uppercase tracking-wider mt-0.5">Annual Papers</p>
            </div>
            <div className="border-x border-white/15">
              <p className="text-xl sm:text-2xl font-serif font-bold text-emerald-400">50+</p>
              <p className="text-[11px] text-stone-400 uppercase tracking-wider mt-0.5">Research Labs</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-serif font-bold text-amber-300">PKR 85M</p>
              <p className="text-[11px] text-stone-400 uppercase tracking-wider mt-0.5">Research Grants</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 3 · Gandhara heritage — editorial split ──────────────────── */}
      <section id="gandhara" className="py-16 sm:py-24">
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="h-0.5 w-7 bg-[#7F1D1D]" />
                <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                  Gandhara Archaeology &amp; Living Heritage
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#14291D] font-bold tracking-[-0.025em] leading-[1.14]">
                Excavating Ancient Bazira with the Italian Archaeological Mission
              </h2>

              <p className="font-sans text-stone-600 text-base sm:text-lg leading-[1.75]">
                The Italian Archaeological Mission to Pakistan, headed by Prof. Dr. Luca Maria Olivieri (Sitara-i-Imtiaz), works in continuous partnership with University of Swat researchers on ongoing joint excavations at the ancient city of Bazira (Barikot)&mdash;unearthing Gandharan Buddhist stupas and prehistoric settlements.
              </p>

              <p className="font-sans text-stone-600 text-base sm:text-sm leading-relaxed">
                Mission fieldwork supports the cataloging of artifacts in the central university museum collection and the organization of international archaeological seminars hosted with partners across continents.
              </p>

              <div className="pt-2">
                <Link
                  href="/news/italian-archaeological-mission-meeting"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#153B27] hover:bg-[#0F291C] hover:-translate-y-[2px] active:scale-[0.985] active:translate-y-px text-white text-sm font-semibold shadow-sm transition-all duration-150 group"
                >
                  <span>Read the Mission Story</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div
                  className="absolute -inset-3 rounded-2xl bg-gradient-to-tl from-[#7F1D1D]/15 via-[#153B27]/10 to-transparent blur-xl pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative rounded-2xl overflow-hidden border border-stone-300/80 shadow-xl bg-white aspect-[4/3] group">
                  <img
                    src="/images/news/news-italian-mission-oct2026.jpeg"
                    alt="Italian Archaeological Mission Director Prof. Dr. Luca Maria Olivieri meeting the Vice Chancellor at University of Swat"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.025] transition-transform duration-500 ease-out"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0C1912]/50 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Section 4 · International collaborations — ruled directory rows ──── */}
      <section id="partnerships" className="pb-0">
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14">
          <div className="pb-4 border-b border-stone-200 mb-2 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold block mb-1">
                Global Collaboration
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-[-0.02em]">
                International Collaborations &amp; Research Missions
              </h2>
            </div>
            <p className="text-sm text-stone-600 max-w-md font-sans sm:text-right">
              Bilateral agreements and joint field programs extending University of Swat research beyond Pakistan.
            </p>
          </div>

          <div className="divide-y divide-stone-200">

            {/* NIIBS partnership row */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-8 items-center py-8 sm:py-10">
              <div className="sm:col-span-9">
                <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                  Academic Partnership &middot; Sri Lanka
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-1.5 mb-2">
                  Sri Lankan NIIBS Partnership
                </h3>
                <p className="font-sans text-base sm:text-sm text-stone-600 leading-relaxed mb-3 max-w-2xl">
                  Bilateral agreement with Nagananda International Institute for Buddhist Studies for student exchanges, manuscript preservation, and Gandhara art curation.
                </p>
                <p className="text-xs text-stone-600 font-medium">
                  MoU signed October 2026 &middot; Institute of Cultural Heritage, Tourism &amp; Hospitality Management
                </p>
              </div>
              <div className="sm:col-span-3 relative h-44 sm:h-32 rounded-xl overflow-hidden border border-stone-300 bg-stone-200">
                <img
                  src="/images/news/news-gandhara-mou-oct2026.jpeg"
                  alt="Signing of the MoU between University of Swat and the Sri Lankan NIIBS"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Mountain Climate Consortium row */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-8 items-center py-8 sm:py-10">
              <div className="sm:col-span-9">
                <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">
                  Environmental Research &middot; Northern Pakistan
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-1.5 mb-2">
                  Mountain Climate Consortium
                </h3>
                <p className="font-sans text-base sm:text-sm text-stone-600 leading-relaxed mb-3 max-w-2xl">
                  Collaborative environmental monitoring of alpine glaciers, flash flood hydrodynamics, and sustainable forest ecosystems across Northern Pakistan.
                </p>
                <p className="text-xs text-stone-600 font-medium">
                  Department of Environmental Sciences &middot; National Conference on Climate Resilience, Bara Gali
                </p>
              </div>
              <div className="sm:col-span-3 relative h-44 sm:h-32 rounded-xl overflow-hidden border border-stone-300 bg-stone-200">
                <img
                  src="/images/news/news-climate-resilience-nov2026.jpeg"
                  alt="University of Swat faculty researchers at the National Conference on Climate Resilience"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Section 5 · SUJRIS research journal ──────────────────────────────── */}
      <section id="sujris" className="py-16 sm:py-24">
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14">
          <div className="rounded-3xl bg-gradient-to-br from-[#153B27] to-[#0D2418] text-white shadow-md p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#C8A96E] font-bold block mb-2">
                HEC Recognized Peer-Reviewed Journal
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 tracking-[-0.02em]">
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
                className="px-6 py-3.5 rounded-xl bg-[#C8A96E] text-[#14291D] font-bold text-sm hover:bg-[#E5CD9B] hover:-translate-y-[2px] active:scale-[0.985] transition-all duration-150 shadow-xs text-center"
              >
                Access SUJRIS Journal Portal
              </a>
              <Link
                href="/portal"
                className="px-6 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 hover:-translate-y-[2px] active:scale-[0.985] transition-all duration-150 text-center"
              >
                Digital Library Access
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
