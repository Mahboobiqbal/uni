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
      <div className="flex flex-col justify-between h-full text-left p-1 sm:p-2">
        <div>
          {/* Top Tag & Crest */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <span className="h-0.5 w-7 bg-[#731C1C]" />
              <span className="text-xs sm:text-[12.5px] uppercase tracking-wider text-[#731C1C] font-bold">
                Institutional Heritage
              </span>
            </div>
            <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-200/90 shadow-sm p-0.5 bg-white shrink-0 hover:scale-105 transition-transform">
              <img
                src="/uos-logo-circle.png"
                alt="University of Swat Crest"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>

          {/* Heading */}
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-[38px] text-[#111827] font-bold tracking-[-0.025em] leading-[1.12] mb-5">
            About University of Swat
          </h3>

          {/* Main Description */}
          <p className="font-sans text-slate-700 text-[15px] sm:text-base lg:text-[16.5px] leading-[1.72] mb-4 font-normal">
            The University of Swat is a public-sector higher education institution established on 7
            July 2010 by the Government of Khyber Pakhtunkhwa. Located in the Swat Valley, the
            university provides undergraduate, postgraduate and doctoral education across a range of
            academic disciplines.
          </p>

          <p className="font-sans text-slate-600 text-sm sm:text-[14.5px] lg:text-[15px] leading-[1.7] font-normal">
            Surrounded by historical Gandharan heritage and the high-altitude biodiversity of northern
            Pakistan, the university combines academic rigor with regionally anchored research,
            fostering socio-economic advancement and scientific inquiry.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-6 mt-6 border-t border-slate-200/90 flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="flex items-center flex-wrap gap-2 text-slate-700 font-sans text-xs sm:text-[13.5px]">
            <span className="font-bold text-[#1D3523]">Established 2010</span>
            <span className="text-slate-400">·</span>
            <span className="font-medium text-slate-700">Public-sector university</span>
            <span className="text-slate-400">·</span>
            <span className="font-bold text-slate-800">HEC recognized</span>
          </div>
          <span className="px-3 py-1.5 rounded-full bg-[#1D3523]/10 text-[#1D3523] text-xs font-bold tracking-wide">
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
      <div className="flex flex-col justify-between h-full text-left p-1 sm:p-2">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5 text-slate-600 text-xs sm:text-[12.5px] font-bold uppercase tracking-wider">
              <span className="p-1.5 rounded-lg bg-[#1D3523]/10 text-[#1D3523]">
                <BookOpen className="w-4 h-4" />
              </span>
              <span>Academic Programs</span>
            </div>
            <span className="text-xs text-slate-500 font-medium bg-slate-100/80 px-2.5 py-1 rounded-full">
              Undergraduate · Postgrad · Ph.D.
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-[26px] text-[#111827] font-bold tracking-[-0.02em] leading-tight mb-2">
            Academic Breadth
          </h3>

          <p className="font-sans text-slate-600 text-sm sm:text-[14.5px] leading-[1.62] mb-4">
            Discover diverse fields of study across sciences, computing, management, social sciences,
            law, languages and humanities.
          </p>
        </div>

        {/* Subtle Academic Disciplines Visualization */}
        <div className="pt-3 border-t border-slate-100">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
            <div className="py-2.5 px-3 rounded-xl bg-teal-50/85 border border-teal-200/80 transition-all hover:bg-teal-100/80 hover:border-teal-300 hover:shadow-xs">
              <span className="block text-sm sm:text-[14.5px] font-bold text-teal-950">Sciences</span>
              <span className="text-xs text-teal-700/90 font-medium">Natural &amp; Life</span>
            </div>
            <div className="py-2.5 px-3 rounded-xl bg-indigo-50/85 border border-indigo-200/80 transition-all hover:bg-indigo-100/80 hover:border-indigo-300 hover:shadow-xs">
              <span className="block text-sm sm:text-[14.5px] font-bold text-indigo-950">Computing</span>
              <span className="text-xs text-indigo-700/90 font-medium">CS &amp; Software</span>
            </div>
            <div className="py-2.5 px-3 rounded-xl bg-orange-50/85 border border-orange-200/80 transition-all hover:bg-orange-100/80 hover:border-orange-300 hover:shadow-xs">
              <span className="block text-sm sm:text-[14.5px] font-bold text-orange-950">Management</span>
              <span className="text-xs text-orange-700/90 font-medium">Business &amp; Econ</span>
            </div>
            <div className="py-2.5 px-3 rounded-xl bg-purple-50/85 border border-purple-200/80 transition-all hover:bg-purple-100/80 hover:border-purple-300 hover:shadow-xs">
              <span className="block text-sm sm:text-[14.5px] font-bold text-purple-950">Humanities</span>
              <span className="text-xs text-purple-700/90 font-medium">Law &amp; Social</span>
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
      <div className="flex flex-col justify-between h-full text-left p-1 sm:p-2">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5 text-slate-600 text-xs sm:text-[12.5px] font-bold uppercase tracking-wider">
              <span className="p-1.5 rounded-lg bg-amber-50 text-amber-700 border border-amber-200/80">
                <Users className="w-4 h-4" />
              </span>
              <span>Institutional Metrics</span>
            </div>
            <span className="text-xs font-semibold text-amber-900 bg-amber-50/90 border border-amber-200/80 px-2.5 py-1 rounded-full">
              Historical Figures · 2023–24
            </span>
          </div>

          <div className="flex flex-wrap items-baseline gap-3 mb-2">
            <span className="font-serif text-4xl sm:text-5xl font-bold tracking-[-0.025em] text-[#111827]">
              10,130
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-slate-800 font-bold">
              Students Across Degree Levels
            </h3>
          </div>

          <p className="font-sans text-slate-600 text-sm sm:text-[14px] leading-[1.6] mb-3">
            9,059 BS students, 756 MPhil/MS students and 315 PhD scholars, reported for the 2023–24
            academic year (clearly reported historical figures, not current enrollment).
          </p>
        </div>

        {/* Degree Breakdown Proportion Bar & Legends */}
        <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
          <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden flex shadow-inner">
            <div
              className="bg-[#1D3523] h-full"
              style={{ width: '89.4%' }}
              title="BS Students: 9,059 (89.4%)"
            />
            <div
              className="bg-[#731C1C] h-full"
              style={{ width: '7.5%' }}
              title="MPhil/MS Students: 756 (7.5%)"
            />
            <div
              className="bg-amber-600 h-full"
              style={{ width: '3.1%' }}
              title="PhD Scholars: 315 (3.1%)"
            />
          </div>
          <div className="flex items-center justify-between text-xs sm:text-[13px] text-slate-700 font-semibold">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1D3523]" />
              <strong>9,059</strong> BS (89.4%)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#731C1C]" />
              <strong>756</strong> MPhil/MS (7.5%)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
              <strong>315</strong> PhD Scholars (3.1%)
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
      <div className="flex flex-col justify-between h-full text-left p-1 sm:p-2">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5 text-slate-600 text-xs sm:text-[12.5px] font-bold uppercase tracking-wider">
              <span className="p-1.5 rounded-lg bg-[#1D3523]/10 text-[#1D3523]">
                <FlaskConical className="w-4 h-4" />
              </span>
              <span>Research &amp; Innovation</span>
            </div>
            <span className="text-xs font-bold text-[#731C1C] bg-[#731C1C]/10 px-2.5 py-1 rounded-full">
              ORIC Division
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-[26px] text-[#111827] font-bold tracking-[-0.02em] leading-tight mb-2">
            Interdisciplinary Research
          </h3>

          <p className="font-sans text-slate-600 text-sm sm:text-[14.5px] leading-[1.62] mb-3">
            The Office of Research, Innovation and Commercialization (ORIC) supports research
            activities, institutional collaboration and research partnerships.
          </p>
        </div>

        {/* Elegant Research Collaboration Visualization */}
        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-2xl bg-indigo-50/80 border border-indigo-200/80 transition-all hover:bg-indigo-100/70 hover:border-indigo-300 hover:shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                <Network className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-[14.5px] font-bold text-indigo-950 leading-tight">
                  Academic Linkages &amp; Research Partnerships
                </span>
                <span className="text-xs sm:text-[12.5px] text-indigo-700/90 font-medium mt-0.5">
                  Regional field laboratories, Gandharan studies &amp; high-altitude botany clusters
                </span>
              </div>
            </div>
            <Link
              href="#research"
              className="p-1.5 rounded-lg text-indigo-500 hover:text-indigo-900 hover:bg-indigo-200/50 transition-all"
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
      <div className="flex flex-col justify-between h-full text-left p-1 sm:p-2">
        <div>
          <div className="flex items-center gap-2 mb-2.5 text-slate-600 text-xs sm:text-[12px] font-bold uppercase tracking-wider">
            <span className="p-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-100">
              <Compass className="w-4 h-4" />
            </span>
            <span>Student Resources</span>
          </div>

          <h3 className="font-serif text-xl sm:text-[22px] text-[#111827] font-bold tracking-[-0.015em] mb-1.5">
            Your University Journey
          </h3>

          <p className="font-sans text-slate-600 text-xs sm:text-[13px] leading-[1.55] mb-2.5">
            Access essential university resources, academic information, admission services and
            student support.
          </p>
        </div>

        {/* Compact Functional Links with light vibrant colors */}
        <div className="flex flex-col gap-2 pt-2.5 border-t border-slate-100">
          <Link
            href="#admissions-desk"
            className="group flex items-center justify-between px-3 py-2 rounded-xl bg-pink-50/85 border border-pink-200/75 hover:bg-pink-100/80 hover:border-pink-300 transition-all"
          >
            <span className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-pink-950">
              <span className="w-2 h-2 rounded-full bg-pink-500 group-hover:scale-125 transition-transform" />
              Admissions
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-pink-500 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#portal"
            className="group flex items-center justify-between px-3 py-2 rounded-xl bg-sky-50/85 border border-sky-200/75 hover:bg-sky-100/80 hover:border-sky-300 transition-all"
          >
            <span className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-sky-950">
              <span className="w-2 h-2 rounded-full bg-sky-500 group-hover:scale-125 transition-transform" />
              Student Portal
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-sky-500 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#programs"
            className="group flex items-center justify-between px-3 py-2 rounded-xl bg-purple-50/85 border border-purple-200/75 hover:bg-purple-100/80 hover:border-purple-300 transition-all"
          >
            <span className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-purple-950">
              <span className="w-2 h-2 rounded-full bg-purple-500 group-hover:scale-125 transition-transform" />
              Enrollment &amp; Registration
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-purple-500 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#announcements-section"
            className="group flex items-center justify-between px-3 py-2 rounded-xl bg-amber-50/85 border border-amber-200/75 hover:bg-amber-100/80 hover:border-amber-300 transition-all"
          >
            <span className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-amber-950">
              <span className="w-2 h-2 rounded-full bg-amber-500 group-hover:scale-125 transition-transform" />
              Examinations
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
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
      <div className="flex flex-col justify-between h-full text-left p-1 sm:p-2">
        <div>
          <div className="flex items-center gap-2 mb-2.5 text-slate-600 text-xs sm:text-[12px] font-bold uppercase tracking-wider">
            <span className="p-1.5 rounded-lg bg-[#731C1C]/10 text-[#731C1C] border border-[#731C1C]/15">
              <Building2 className="w-4 h-4" />
            </span>
            <span>Institutional Resources</span>
          </div>

          <h3 className="font-serif text-xl sm:text-[22px] text-[#111827] font-bold tracking-[-0.015em] mb-1.5">
            University Administration &amp; Information
          </h3>

          <p className="font-sans text-slate-600 text-xs sm:text-[13px] leading-[1.55] mb-2.5">
            Find important university information, administrative resources, institutional contacts
            and official services.
          </p>
        </div>

        {/* Compact Functional Action Links */}
        <div className="flex flex-col gap-2 pt-2.5 border-t border-slate-100">
          <Link
            href="#faculty"
            className="group flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-blue-50/85 border border-blue-200/75 hover:bg-blue-100/80 hover:border-blue-300 hover:shadow-xs transition-all"
          >
            <span className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-blue-950">
              <Library className="w-4 h-4 text-blue-600 group-hover:text-blue-800" />
              University Directory
            </span>
            <ArrowUpRight className="w-4 h-4 text-blue-500 group-hover:text-blue-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="#locations-mega"
            className="group flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-orange-50/85 border border-orange-200/75 hover:bg-orange-100/80 hover:border-orange-300 hover:shadow-xs transition-all"
          >
            <span className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-orange-950">
              <ScrollText className="w-4 h-4 text-orange-600 group-hover:text-orange-800" />
              Official Contacts
            </span>
            <ArrowUpRight className="w-4 h-4 text-orange-500 group-hover:text-orange-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    )
  }
];

export default function UniversityOverview() {
  return (
    <section
      className="py-20 sm:py-28 bg-uni-mesh text-white relative overflow-hidden"
      data-purpose="bento-overview"
      id="about-uni"
    >
      {/* Top Green Transition: Seamlessly connects with the Hero bottom gradient, eliminating any hard border */}
      <div
        className="absolute inset-x-0 top-0 h-48 pointer-events-none z-0"
        style={{
          background:
            'linear-gradient(to bottom, #1D3523 0%, #1D3523 40px, rgba(29, 53, 35, 0.88) 100px, rgba(29, 53, 35, 0.45) 160px, transparent 100%)'
        }}
      />

      {/* Atmospheric Mesh Lighting Accents (University Colors: Crimson, Alpine Green, Gold) */}
      <div className="absolute -top-24 right-5 w-[420px] h-[420px] rounded-full bg-[#731C1C]/25 blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/3 -left-20 w-[460px] h-[460px] rounded-full bg-[#2f3e29]/70 blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-[#731C1C]/20 blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="h-0.5 w-7 bg-[#731C1C]" />
            <span className="text-xs uppercase tracking-widest text-emerald-200 font-bold">
              Institutional Foundations
            </span>
            <span className="h-0.5 w-7 bg-[#731C1C]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-[-0.025em] text-white leading-[1.12]">
            Academic Foundations, Research &amp; Institutional Impact
          </h2>
          <p className="font-sans text-base sm:text-lg text-emerald-100/80 max-w-3xl mx-auto mt-4 leading-[1.68]">
            Explore the academic disciplines, research initiatives and institutional resources that
            shape the University of Swat.
          </p>
        </div>

        {/* Six-Card Bento Grid with Expanded Card Dimensions and Enhanced Readability */}
        <MagicBento
          columns={4}
          rowHeight={300}
          gap={18}
          radius={24}
          theme="light"
          glowColor="#2f3e29"
          enableBorderGlow={true}
          enableSpotlight={true}
          spotlightRadius={380}
          enableStars={true}
          particleCount={24}
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
