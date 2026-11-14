'use client';

import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Users,
  Compass,
  Building2,
  ArrowUpRight,
  FlaskConical,
  Library,
  ChevronRight,
  ScrollText,
  Network
} from 'lucide-react';
import MagicBento, { type MagicBentoItem } from '@/components/ui/MagicBento';

const overviewItems: MagicBentoItem[] = [
  // Card 1 — Institutional Heritage (Large 2x2 card)
  {
    id: 'heritage',
    colSpan: 2,
    rowSpan: 2,
    content: (
      <div className="flex flex-col justify-between h-full text-left">
        <div>
          {/* Top Tag & Crest */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <span className="h-0.5 w-7 bg-[#7F1D1D]" />
              <span className="text-xs sm:text-[12.5px] uppercase tracking-wider text-[#7F1D1D] font-bold">
                Institutional Heritage
              </span>
            </div>
            <div className="w-11 h-11 rounded-full overflow-hidden border border-stone-200 shadow-xs p-0.5 bg-white shrink-0 hover:scale-105 transition-transform">
              <img
                src="/uos-logo-circle.png"
                alt="University of Swat Crest"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>

          {/* Heading */}
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-[38px] text-stone-900 font-bold tracking-[-0.025em] leading-[1.12] mb-5">
            About University of Swat
          </h3>

          {/* Main Description */}
          <p className="font-sans text-stone-700 text-[15px] sm:text-base lg:text-[16.5px] leading-[1.72] mb-4 font-normal">
            The University of Swat is a public-sector higher education institution established on 7
            July 2010 by the Government of Khyber Pakhtunkhwa. Located in the Swat Valley, the
            university provides undergraduate, postgraduate and doctoral education across a range of
            academic disciplines.
          </p>

          <p className="font-sans text-stone-600 text-sm sm:text-[14.5px] lg:text-[15px] leading-[1.7] font-normal">
            Surrounded by historical Gandharan heritage and the high-altitude biodiversity of northern
            Pakistan, the university combines academic rigor with regionally anchored research,
            fostering socio-economic advancement and scientific inquiry.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-6 mt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="flex items-center flex-wrap gap-2 text-stone-700 font-sans text-xs sm:text-[13.5px]">
            <span className="font-bold text-[#153B27]">Established 2010</span>
            <span className="text-stone-300">·</span>
            <span className="font-medium text-stone-600">Public-sector university</span>
            <span className="text-stone-300">·</span>
            <span className="font-bold text-stone-800">HEC recognized</span>
          </div>
          <span className="px-3 py-1.5 rounded-full bg-[#153B27]/10 text-[#153B27] border border-[#153B27]/20 text-xs font-bold tracking-wide">
            Swat Valley, KP
          </span>
        </div>
      </div>
    )
  },

  // Card 2 — Academic Programs (Academic Breadth)
  {
    id: 'programs',
    colSpan: 2,
    rowSpan: 1,
    content: (
      <div className="flex flex-col justify-between h-full text-left">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5 text-stone-600 text-xs sm:text-[12.5px] font-bold uppercase tracking-wider">
              <span className="p-1.5 rounded-lg bg-[#153B27]/10 text-[#153B27]">
                <BookOpen className="w-4 h-4" />
              </span>
              <span>Academic Programs</span>
            </div>
            <span className="text-xs text-stone-700 font-semibold bg-stone-100 border border-stone-200 px-2.5 py-1 rounded-full">
              Undergraduate · Postgrad · Ph.D.
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-[26px] text-stone-900 font-bold tracking-[-0.02em] leading-tight mb-2">
            Academic Breadth
          </h3>

          <p className="font-sans text-stone-600 text-sm sm:text-[14.5px] leading-[1.62] mb-4">
            Discover diverse fields of study across sciences, computing, management, social sciences,
            law, languages and humanities.
          </p>
        </div>

        {/* Disciplines Visualization - Standardized brand accents */}
        <div className="pt-3 border-t border-stone-200/80">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
            <div className="py-2.5 px-3 rounded-xl bg-stone-50 border border-stone-200/90 hover:border-[#153B27]/40 transition-all hover:shadow-xs">
              <span className="block text-sm sm:text-[14.5px] font-bold text-stone-900">Sciences</span>
              <span className="text-xs text-[#153B27] font-semibold">Natural &amp; Life</span>
            </div>
            <div className="py-2.5 px-3 rounded-xl bg-stone-50 border border-stone-200/90 hover:border-[#B48A3E]/50 transition-all hover:shadow-xs">
              <span className="block text-sm sm:text-[14.5px] font-bold text-stone-900">Computing</span>
              <span className="text-xs text-[#B48A3E] font-semibold">CS &amp; Software</span>
            </div>
            <div className="py-2.5 px-3 rounded-xl bg-stone-50 border border-stone-200/90 hover:border-[#7F1D1D]/40 transition-all hover:shadow-xs">
              <span className="block text-sm sm:text-[14.5px] font-bold text-stone-900">Management</span>
              <span className="text-xs text-[#7F1D1D] font-semibold">Business &amp; Econ</span>
            </div>
            <div className="py-2.5 px-3 rounded-xl bg-stone-50 border border-stone-200/90 hover:border-stone-400 transition-all hover:shadow-xs">
              <span className="block text-sm sm:text-[14.5px] font-bold text-stone-900">Humanities</span>
              <span className="text-xs text-stone-600 font-semibold">Law &amp; Social</span>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Card 3 — Institutional Metrics (10,130 Students Across Degree Levels)
  {
    id: 'metrics',
    colSpan: 2,
    rowSpan: 1,
    content: (
      <div className="flex flex-col justify-between h-full text-left">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5 text-stone-600 text-xs sm:text-[12.5px] font-bold uppercase tracking-wider">
              <span className="p-1.5 rounded-lg bg-stone-100 text-[#153B27] border border-stone-200">
                <Users className="w-4 h-4" />
              </span>
              <span>Institutional Metrics</span>
            </div>
            <span className="text-xs font-semibold text-stone-700 bg-stone-100 border border-stone-200 px-2.5 py-1 rounded-full">
              Historical Figures · 2023–24
            </span>
          </div>

          <div className="flex flex-wrap items-baseline gap-3 mb-2">
            <span className="font-serif text-4xl sm:text-5xl font-bold tracking-[-0.025em] text-stone-900">
              10,130
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-stone-800 font-bold">
              Students Across Degree Levels
            </h3>
          </div>

          <p className="font-sans text-stone-600 text-sm sm:text-[14px] leading-[1.6] mb-3">
            9,059 BS students, 756 MPhil/MS students and 315 PhD scholars, reported for the 2023–24
            academic year (clearly reported historical figures, not current enrollment).
          </p>
        </div>

        {/* Degree Breakdown Proportion Bar & Legends with brand colors */}
        <div className="pt-3 border-t border-stone-200/80 flex flex-col gap-2">
          <div className="w-full h-2.5 rounded-full bg-stone-200/80 overflow-hidden flex shadow-inner">
            <div
              className="bg-[#153B27] h-full"
              style={{ width: '89.4%' }}
              title="BS Students: 9,059 (89.4%)"
            />
            <div
              className="bg-[#7F1D1D] h-full"
              style={{ width: '7.5%' }}
              title="MPhil/MS Students: 756 (7.5%)"
            />
            <div
              className="bg-[#B48A3E] h-full"
              style={{ width: '3.1%' }}
              title="PhD Scholars: 315 (3.1%)"
            />
          </div>
          <div className="flex items-center justify-between text-xs sm:text-[13px] text-stone-700 font-semibold">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#153B27]" />
              <strong className="text-stone-900">9,059</strong> BS (89.4%)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7F1D1D]" />
              <strong className="text-stone-900">756</strong> MPhil/MS (7.5%)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B48A3E]" />
              <strong className="text-stone-900">315</strong> PhD Scholars (3.1%)
            </span>
          </div>
        </div>
      </div>
    )
  },

  // Card 4 — Research & Innovation (Interdisciplinary Research / ORIC)
  {
    id: 'research',
    colSpan: 2,
    rowSpan: 1,
    content: (
      <div className="flex flex-col justify-between h-full text-left">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5 text-stone-600 text-xs sm:text-[12.5px] font-bold uppercase tracking-wider">
              <span className="p-1.5 rounded-lg bg-[#153B27]/10 text-[#153B27]">
                <FlaskConical className="w-4 h-4" />
              </span>
              <span>Research &amp; Innovation</span>
            </div>
            <span className="text-xs font-bold text-[#7F1D1D] bg-[#7F1D1D]/10 border border-[#7F1D1D]/20 px-2.5 py-1 rounded-full">
              ORIC Division
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-[26px] text-stone-900 font-bold tracking-[-0.02em] leading-tight mb-2">
            Interdisciplinary Research
          </h3>

          <p className="font-sans text-stone-600 text-sm sm:text-[14.5px] leading-[1.62] mb-3">
            The Office of Research, Innovation and Commercialization (ORIC) supports research
            activities, institutional collaboration and research partnerships.
          </p>
        </div>

        {/* Elegant Research Collaboration Box */}
        <div className="pt-3 border-t border-stone-200/80">
          <div className="flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-2xl bg-stone-50 border border-stone-200/90 transition-all hover:border-[#153B27]/40 hover:shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#153B27]/10 text-[#153B27] flex items-center justify-center shrink-0">
                <Network className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-[14.5px] font-bold text-stone-900 leading-tight">
                  Academic Linkages &amp; Research Partnerships
                </span>
                <span className="text-xs sm:text-[12.5px] text-stone-600 font-medium mt-0.5">
                  Regional field laboratories, Gandharan studies &amp; high-altitude botany clusters
                </span>
              </div>
            </div>
            <Link
              href="#research"
              className="p-1.5 rounded-lg text-[#153B27] hover:bg-[#153B27]/10 transition-all"
              title="Explore ORIC"
            >
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    )
  },

  // Card 5 — Student Resources (Your University Journey)
  {
    id: 'student-resources',
    colSpan: 1,
    rowSpan: 1,
    content: (
      <div className="flex flex-col justify-between h-full text-left">
        <div>
          <div className="flex items-center gap-2 mb-2.5 text-stone-600 text-xs sm:text-[12px] font-bold uppercase tracking-wider">
            <span className="p-1.5 rounded-lg bg-[#7F1D1D]/10 text-[#7F1D1D]">
              <Compass className="w-4 h-4" />
            </span>
            <span>Student Resources</span>
          </div>

          <h3 className="font-serif text-xl sm:text-[22px] text-stone-900 font-bold tracking-[-0.015em] mb-1.5">
            Your University Journey
          </h3>

          <p className="font-sans text-stone-600 text-xs sm:text-[13px] leading-[1.55] mb-2.5">
            Access essential university resources, academic information, admission services and
            student support.
          </p>
        </div>

        {/* Cohesive Stone & Brand Pill Links */}
        <div className="flex flex-col gap-2 pt-2.5 border-t border-stone-200/80">
          <Link
            href="#admissions-desk"
            className="group flex items-center justify-between px-3 py-2 rounded-xl bg-stone-50 border border-stone-200/90 hover:bg-stone-100 hover:border-stone-300 transition-all"
          >
            <span className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-stone-900">
              <span className="w-2 h-2 rounded-full bg-[#7F1D1D] group-hover:scale-125 transition-transform" />
              Admissions
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[#7F1D1D] group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#portal"
            className="group flex items-center justify-between px-3 py-2 rounded-xl bg-stone-50 border border-stone-200/90 hover:bg-stone-100 hover:border-stone-300 transition-all"
          >
            <span className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-stone-900">
              <span className="w-2 h-2 rounded-full bg-[#153B27] group-hover:scale-125 transition-transform" />
              Student Portal
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[#153B27] group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#programs"
            className="group flex items-center justify-between px-3 py-2 rounded-xl bg-stone-50 border border-stone-200/90 hover:bg-stone-100 hover:border-stone-300 transition-all"
          >
            <span className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-stone-900">
              <span className="w-2 h-2 rounded-full bg-[#B48A3E] group-hover:scale-125 transition-transform" />
              Enrollment &amp; Registration
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[#B48A3E] group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#announcements-section"
            className="group flex items-center justify-between px-3 py-2 rounded-xl bg-stone-50 border border-stone-200/90 hover:bg-stone-100 hover:border-stone-300 transition-all"
          >
            <span className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-stone-900">
              <span className="w-2 h-2 rounded-full bg-stone-500 group-hover:scale-125 transition-transform" />
              Examinations
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    )
  },

  // Card 6 — Institutional Resources (University Administration & Information)
  {
    id: 'institutional-resources',
    colSpan: 1,
    rowSpan: 1,
    content: (
      <div className="flex flex-col justify-between h-full text-left">
        <div>
          <div className="flex items-center gap-2 mb-2.5 text-stone-600 text-xs sm:text-[12px] font-bold uppercase tracking-wider">
            <span className="p-1.5 rounded-lg bg-[#153B27]/10 text-[#153B27]">
              <Building2 className="w-4 h-4" />
            </span>
            <span>Institutional Resources</span>
          </div>

          <h3 className="font-serif text-xl sm:text-[22px] text-stone-900 font-bold tracking-[-0.015em] mb-1.5">
            University Administration &amp; Information
          </h3>

          <p className="font-sans text-stone-600 text-xs sm:text-[13px] leading-[1.55] mb-2.5">
            Find important university information, administrative resources, institutional contacts
            and official services.
          </p>
        </div>

        {/* Compact Functional Action Links */}
        <div className="flex flex-col gap-2 pt-2.5 border-t border-stone-200/80">
          <Link
            href="#faculty"
            className="group flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-stone-50 border border-stone-200/90 hover:bg-stone-100 hover:border-stone-300 transition-all"
          >
            <span className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-stone-900">
              <Library className="w-4 h-4 text-[#153B27] group-hover:scale-110 transition-transform" />
              University Directory
            </span>
            <ArrowUpRight className="w-4 h-4 text-[#153B27] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="#locations-mega"
            className="group flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-stone-50 border border-stone-200/90 hover:bg-stone-100 hover:border-stone-300 transition-all"
          >
            <span className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-stone-900">
              <ScrollText className="w-4 h-4 text-[#7F1D1D] group-hover:scale-110 transition-transform" />
              Official Contacts
            </span>
            <ArrowUpRight className="w-4 h-4 text-[#7F1D1D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    )
  }
];

export default function UniversityOverview() {
  return (
    <section
      className="py-20 sm:py-28 bg-[#0C1912] border-b border-white/10 text-white relative overflow-hidden"
      data-purpose="bento-overview"
      id="about-uni"
    >
      {/* Hairline Grid Pattern Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* Subtle, Low-Opacity Top Radial Emerald Glow */}
      <div className="absolute inset-x-0 top-0 h-[450px] bg-[radial-gradient(ellipse_75%_320px_at_50%_0%,rgba(26,67,46,0.35),transparent_75%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="h-0.5 w-7 bg-[#7F1D1D]" />
            <span className="text-xs uppercase tracking-widest text-[#B48A3E] font-bold">
              Institutional Foundations
            </span>
            <span className="h-0.5 w-7 bg-[#7F1D1D]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-[-0.025em] text-white leading-[1.12]">
            Academic Foundations, Research &amp; Institutional Impact
          </h2>
          <p className="font-sans text-base sm:text-lg text-stone-300/90 max-w-3xl mx-auto mt-4 leading-[1.68]">
            Explore the academic disciplines, research initiatives and institutional resources that
            shape the University of Swat.
          </p>
        </div>

        {/* Six-Card Bento Grid */}
        <MagicBento
          columns={4}
          rowHeight={300}
          gap={18}
          radius={24}
          theme="light"
          glowColor="#153B27"
          enableBorderGlow={true}
          enableSpotlight={true}
          spotlightRadius={380}
          enableStars={false}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          textAutoHide={false}
          items={overviewItems}
        />
      </div>
    </section>
  );
}
