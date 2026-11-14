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
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-[38px] text-[#14291D] font-bold tracking-[-0.025em] leading-[1.12] mb-5">
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

          <h3 className="font-serif text-2xl sm:text-[26px] text-[#14291D] font-bold tracking-[-0.02em] leading-tight mb-2">
            Academic Breadth
          </h3>

          <p className="font-sans text-stone-600 text-sm sm:text-[14.5px] leading-[1.62] mb-4">
            Discover diverse fields of study across sciences, computing, management, social sciences,
            law, languages and humanities.
          </p>
        </div>

        {/* Structured Academic Faculty Blocks */}
        <div className="pt-3 border-t border-stone-200/80">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {[
              { name: 'Sciences', note: 'Natural & Life Sciences', accent: 'border-[#153B27]' },
              { name: 'Computing', note: 'CS & Software Engineering', accent: 'border-[#7F1D1D]' },
              { name: 'Management', note: 'Business & Economics', accent: 'border-[#153B27]' },
              { name: 'Humanities', note: 'Law & Social Sciences', accent: 'border-[#7F1D1D]' },
            ].map((d) => (
              <div key={d.name} className={`group flex items-start justify-between gap-3 border-l-2 ${d.accent} pl-3 cursor-pointer`}>
                <div>
                  <p className="text-sm font-bold text-[#14291D]">{d.name}</p>
                  <p className="text-xs text-stone-500 mt-0.5">{d.note}</p>
                </div>
                <span className="text-stone-300 group-hover:text-[#153B27] transition-colors">→</span>
              </div>
            ))}
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
            <span className="font-serif text-4xl sm:text-5xl font-bold tracking-[-0.025em] text-[#14291D]">
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

        {/* Academic Ledger — 3-column breakdown separated by hairline dividers */}
        <div className="pt-4 border-t border-stone-200/80">
          <div className="grid grid-cols-3 divide-x divide-stone-200">
            <div className="pr-4">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D]">9,059</p>
              <p className="text-xs text-stone-500 font-medium mt-1">BS Students</p>
            </div>
            <div className="px-4">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D]">756</p>
              <p className="text-xs text-stone-500 font-medium mt-1">MPhil / MS</p>
            </div>
            <div className="pl-4">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D]">315</p>
              <p className="text-xs text-stone-500 font-medium mt-1">PhD Scholars</p>
            </div>
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

          <h3 className="font-serif text-2xl sm:text-[26px] text-[#14291D] font-bold tracking-[-0.02em] leading-tight mb-2">
            Interdisciplinary Research
          </h3>

          <p className="font-sans text-stone-600 text-sm sm:text-[14.5px] leading-[1.62] mb-3">
            The Office of Research, Innovation and Commercialization (ORIC) supports research
            activities, institutional collaboration and research partnerships.
          </p>
        </div>

        {/* Academic Linkage Directory Row */}
        <div className="pt-3 border-t border-stone-200/80">
          <Link
            href="#research"
            className="group flex items-center justify-between gap-4 py-3 border-b border-stone-100"
            title="Explore ORIC"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#153B27]/8 text-[#153B27] flex items-center justify-center shrink-0">
                <Network className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#14291D]">Academic Linkages &amp; Research Partnerships</p>
                <p className="text-xs text-stone-500 mt-0.5">Regional field laboratories, Gandharan studies &amp; high-altitude botany clusters</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#153B27] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </Link>
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

          <h3 className="font-serif text-xl sm:text-[22px] text-[#14291D] font-bold tracking-[-0.015em] mb-1.5">
            Your University Journey
          </h3>

          <p className="font-sans text-stone-600 text-xs sm:text-[13px] leading-[1.55] mb-2.5">
            Access essential university resources, academic information, admission services and
            student support.
          </p>
        </div>

        {/* Academic Directory Rows */}
        <div className="pt-2.5 border-t border-stone-200/80">
          {[
            { label: 'Admissions', href: '#admissions-desk' },
            { label: 'Student Portal', href: '#portal' },
            { label: 'Enrollment & Registration', href: '#programs' },
            { label: 'Examinations', href: '#announcements-section' },
          ].map((row) => (
            <Link
              key={row.label}
              href={row.href}
              className="group flex items-center justify-between py-3 border-b border-stone-100 last:border-b-0 text-sm font-semibold text-[#14291D] hover:text-[#153B27] transition-colors"
            >
              <span>{row.label}</span>
              <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#153B27] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          ))}
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

          <h3 className="font-serif text-xl sm:text-[22px] text-[#14291D] font-bold tracking-[-0.015em] mb-1.5">
            University Administration &amp; Information
          </h3>

          <p className="font-sans text-stone-600 text-xs sm:text-[13px] leading-[1.55] mb-2.5">
            Find important university information, administrative resources, institutional contacts
            and official services.
          </p>
        </div>

        {/* Academic Directory Rows */}
        <div className="pt-2.5 border-t border-stone-200/80">
          {[
            { label: 'University Directory', href: '#faculty', icon: <Library className="w-4 h-4" /> },
            { label: 'Official Contacts', href: '#locations-mega', icon: <ScrollText className="w-4 h-4" /> },
          ].map((row) => (
            <Link
              key={row.label}
              href={row.href}
              className="group flex items-center justify-between py-3 border-b border-stone-100 last:border-b-0"
            >
              <span className="flex items-center gap-3 text-sm font-semibold text-[#14291D] group-hover:text-[#153B27] transition-colors">
                <span className="text-[#153B27]/70">{row.icon}</span>
                {row.label}
              </span>
              <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#153B27] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    )
  }
];

export default function UniversityOverview() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32 bg-[#F6F5F0] text-[#14291D]"
      data-purpose="bento-overview"
      id="about-uni"
    >
      {/* Subtle academic atmosphere accents */}
      <div className="absolute -top-28 -left-24 w-[440px] h-[440px] rounded-full bg-[#153B27]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-24 w-[460px] h-[460px] rounded-full bg-[#7F1D1D]/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 w-96 h-96 -translate-x-1/2 rounded-full bg-[#C8A96E]/8 blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Split Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12 lg:mb-16">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-0.5 w-7 bg-[#7F1D1D]" />
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                Institutional Foundations
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold tracking-[-0.025em] text-[#14291D] leading-[1.12]">
              Academic Foundations, Research &amp; Institutional Impact
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-stone-500 max-w-md lg:text-right leading-[1.68]">
            Explore the academic disciplines, research initiatives and institutional resources that
            shape the University of Swat.
          </p>
        </div>

        {/* Six-Card Bento Grid — crisp academic tiles */}
        <MagicBento
          columns={4}
          rowHeight={288}
          gap={18}
          radius={12}
          theme="light"
          glowColor="#153B27"
          enableBorderGlow={true}
          enableSpotlight={true}
          spotlightRadius={320}
          enableStars={false}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={false}
          textAutoHide={false}
          items={overviewItems}
        />
      </div>
    </section>
  );
}
