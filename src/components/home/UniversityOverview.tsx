'use client';

import React from 'react';
import MagicBento, { type MagicBentoItem } from '@/components/ui/MagicBento';

const overviewItems: MagicBentoItem[] = [
  {
    id: 'heritage',
    colSpan: 2,
    rowSpan: 2,
    content: (
      <div className="flex flex-col justify-between h-full text-left p-1">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <span className="h-0.5 w-6 bg-[#731C1C]" />
              <span className="text-xs uppercase tracking-widest text-[#731C1C] font-semibold">
                Institutional Heritage
              </span>
            </div>
            <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-200/80 shadow-xs p-0.5 bg-white shrink-0">
              <img
                src="/uos-logo-circle.png"
                alt="University of Swat Crest"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] text-[#111827] font-bold tracking-[-0.02em] leading-[1.15] mb-4">
            About University of Swat
          </h3>
          <p className="font-sans text-slate-700 text-sm sm:text-[14.5px] leading-[1.68] mb-4 font-normal">
            The University of Swat was established under the Khyber Pakhtunkhwa Act to advance
            higher education in northern Pakistan. Located amidst the awe-inspiring Hindu Raj
            mountains and Gandharan heritage sites, the university integrates traditional
            scholarly rigor with modern research frontiers.
          </p>
          <p className="font-sans text-slate-600 text-xs sm:text-[13.5px] leading-[1.65] font-normal">
            From botanical genomics of medicinal flora in the Swat basin to quantum computing,
            archaeological preservation, and sustainable alpine tourism, our interdisciplinary
            centers cultivate critical inquiry and regional socioeconomic development.
          </p>
        </div>
        <div className="pt-5 mt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-[#1D3523]">
          <div className="flex items-center gap-2">
            <span>Chartered by Government of Khyber Pakhtunkhwa</span>
            <span>•</span>
            <span className="text-slate-500">Higher Education Commission Accredited</span>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-[#1D3523]/10 text-[#1D3523] text-[11px] font-semibold">
            Est. 2010
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'disciplines',
    colSpan: 2,
    rowSpan: 1,
    label: 'Academic Breadth',
    title: 'Total Disciplines & Degree Programs',
    description:
      '35+ Academic Departments & 104 Specializations spanning Computing, Health, Law & Sciences.',
    visual: 'dashboard'
  },
  {
    id: 'analytics',
    colSpan: 2,
    rowSpan: 1,
    label: 'Institutional Metrics',
    title: 'Analytics & ORIC Research Enterprise',
    description:
      '1,240+ W-Cat Publications, 18:1 Student-Faculty Ratio, and ₨ 480M in Research Grants.',
    visual: 'analytics'
  },
  {
    id: 'collaboration',
    colSpan: 2,
    rowSpan: 1,
    label: 'Research Alliances',
    title: 'Interdisciplinary Collaboration',
    description:
      'Joint research clusters across high-altitude alpine ecology and Gandharan antiquities.',
    visual: 'collaboration'
  },
  {
    id: 'automation',
    colSpan: 1,
    rowSpan: 1,
    label: 'Student Gateway',
    title: 'Admissions Automation',
    description: 'End-to-end digital enrollment & merit verification.',
    visual: 'automation'
  },
  {
    id: 'security',
    colSpan: 1,
    rowSpan: 1,
    label: 'Enterprise Security',
    title: 'Identity & Access (2FA / SSO)',
    description: 'Secure student portal, LMS & controller records.',
    visual: 'security'
  }
];

export default function UniversityOverview() {
  return (
    <section
      className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      data-purpose="bento-overview"
      id="about-uni"
    >
      {/* Editorial Section Header */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="h-0.5 w-6 bg-[#731C1C]" />
          <span className="text-xs uppercase tracking-widest text-[#731C1C] font-semibold">
            Institutional Overview
          </span>
          <span className="h-0.5 w-6 bg-[#731C1C]" />
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.025em] text-[#111827] leading-[1.12]">
          Heritage, Breadth &amp; Research Enterprise
        </h2>
        <p className="font-sans text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-3.5 leading-[1.65]">
          Explore the academic foundations, research institutes, and modern digital ecosystems
          advancing education at the University of Swat.
        </p>
      </div>

      {/* Interactive Magic Bento Grid from React Bits */}
      <MagicBento
        columns={4}
        rowHeight={235}
        gap={16}
        radius={22}
        theme="light"
        glowColor="#1D3523"
        enableBorderGlow={true}
        enableSpotlight={true}
        spotlightRadius={320}
        enableStars={true}
        particleCount={20}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        textAutoHide={false}
        items={overviewItems}
      />
    </section>
  );
}
