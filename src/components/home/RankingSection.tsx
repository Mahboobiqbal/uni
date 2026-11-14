'use client';

import React from 'react';
import MagicBento, { type MagicBentoItem } from '@/components/ui/MagicBento';

/* ─── Mini charts (inline SVG) ─────────────────────────────────────────────── */

/** Area sparkline for the lead card */
function AreaChart() {
  return (
    <svg viewBox="0 0 220 64" className="w-full h-16" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#153B27" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#153B27" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path
        d="M0 50 C22 46 30 30 48 34 S76 46 92 36 S118 14 138 20 S166 40 184 28 S208 10 220 14 L220 64 L0 64 Z"
        fill="url(#areaFill)"
      />
      <path
        d="M0 50 C22 46 30 30 48 34 S76 46 92 36 S118 14 138 20 S166 40 184 28 S208 10 220 14"
        fill="none"
        stroke="#153B27"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="220" cy="14" r="3" fill="#153B27" />
    </svg>
  );
}

/** Segmented performance bar (91.4% HEC) */
function RatingBar() {
  return (
    <div className="relative h-2.5 rounded-full bg-stone-200/80 overflow-hidden flex" aria-hidden="true">
      <div className="bg-[#153B27] h-full" style={{ width: '91.4%' }} />
      <div className="bg-[#7F1D1D] h-full" style={{ width: '7.5%' }} />
      <div className="bg-[#C8A96E] h-full" style={{ width: '1.1%' }} />
    </div>
  );
}

/** Bar chart for GreenMetric progress */
function BarsChart() {
  const bars = [34, 46, 41, 58, 66, 74, 82];
  return (
    <div className="flex items-end gap-1.5 h-14" aria-hidden="true">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm bg-[#153B27]/85"
          style={{ height: `${h}%`, opacity: 0.45 + (i / bars.length) * 0.55 }}
        />
      ))}
    </div>
  );
}

/** Sparkline for THE Impact */
function Sparkline() {
  return (
    <svg viewBox="0 0 160 40" className="w-full h-10" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0 32 C20 30 32 22 52 26 S84 30 100 18 S132 8 160 12"
        fill="none"
        stroke="#153B27"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ─── Bento items ─────────────────────────────────────────────────────────── */

const rankingItems: MagicBentoItem[] = [
  {
    id: 'lead',
    colSpan: 2,
    rowSpan: 2,
    content: (
      <div className="flex flex-col justify-between h-full text-left">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="h-0.5 w-7 bg-[#7F1D1D]" />
            <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
              Benchmark Scorecard
            </span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#14291D] font-bold tracking-[-0.025em] leading-[1.12] mb-3">
            Top Ranked Public University in KP
          </h3>
          <p className="font-sans text-sm text-stone-600 leading-[1.68]">
            Consistently evaluated by the HEC and global ranking frameworks for research growth,
            sustainable stewardship and academic vitality.
          </p>
        </div>

        <div className="mt-5 pt-5 border-t border-stone-200/80 space-y-4">
          <AreaChart />
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="font-serif text-3xl font-bold text-[#14291D] leading-none">
                91.4<span className="text-xl">%</span>
              </p>
              <p className="text-xs text-stone-500 font-medium mt-1.5">HEC W-Category Rating</p>
            </div>
            <div className="h-10 w-px bg-stone-200" />
            <div className="text-right">
              <p className="font-serif text-3xl font-bold text-[#14291D] leading-none">#1</p>
              <p className="text-xs text-stone-500 font-medium mt-1.5">Malakand Citations 2025</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'hec',
    colSpan: 2,
    rowSpan: 1,
    content: (
      <div className="flex flex-col justify-between h-full text-left">
        <div>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500 font-bold mb-1">
                HEC Quality Assurance Agency
              </p>
              <p className="font-serif text-4xl font-bold text-[#14291D] leading-none">91.4%</p>
            </div>
            <p className="text-[13px] text-stone-500 font-medium">W-Category</p>
          </div>
        </div>
        <div className="mt-4">
          <RatingBar />
          <div className="flex justify-between text-[11px] text-stone-500 font-medium mt-2">
            <span>BS &amp; programs</span>
            <span>91.4 / 100</span>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 'malakand',
    colSpan: 1,
    rowSpan: 1,
    content: (
      <div className="flex flex-col items-start justify-center h-full text-left">
        <p className="font-serif text-4xl font-bold text-[#14291D] leading-none">#1</p>
        <p className="text-xs text-stone-500 font-medium mt-2">
          Malakand Division Research Citations 2025
        </p>
      </div>
    ),
  },

  {
    id: 'naeac',
    colSpan: 1,
    rowSpan: 1,
    content: (
      <div className="flex flex-col items-start justify-center h-full text-left">
        <p className="font-serif text-4xl font-bold text-[#14291D] leading-none">3.68</p>
        <p className="text-xs text-stone-500 font-medium mt-2">Highest NAEAC CGPA</p>
      </div>
    ),
  },

  {
    id: 'greenmetric',
    colSpan: 2,
    rowSpan: 1,
    content: (
      <div className="flex flex-col justify-between h-full text-left">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-500 font-bold mb-1">
              UI GreenMetric
            </p>
            <p className="font-serif text-4xl font-bold text-[#14291D] leading-none">Top 15</p>
          </div>
          <div className="w-24">
            <BarsChart />
          </div>
        </div>
        <p className="text-[13px] text-stone-500 mt-3">
          World campus sustainability — nationally ranked
        </p>
      </div>
    ),
  },

  {
    id: 'the',
    colSpan: 2,
    rowSpan: 1,
    content: (
      <div className="flex flex-col justify-between h-full text-left">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-500 font-bold mb-1">
              Times Higher Education Impact
            </p>
            <p className="font-serif text-4xl font-bold text-[#14291D] leading-none">301–400</p>
          </div>
          <div className="w-28">
            <Sparkline />
          </div>
        </div>
        <p className="text-[13px] text-stone-500 mt-3">Globally · SDG 4 &amp; SDG 15</p>
      </div>
    ),
  },

  {
    id: 'hec100',
    colSpan: 2,
    rowSpan: 1,
    content: (
      <div className="flex flex-col justify-between h-full text-left">
        <div>
          <p className="font-serif text-4xl font-bold text-[#14291D] leading-none">100%</p>
          <p className="text-xs uppercase tracking-widest text-stone-500 font-bold mt-2">
            HEC Recognized
          </p>
        </div>
        <p className="text-[13px] text-stone-500 mt-3">Degrees validated across the Commonwealth</p>
      </div>
    ),
  },

  {
    id: 'ecosystem',
    colSpan: 2,
    rowSpan: 1,
    content: (
      <div className="flex flex-col justify-between h-full text-left">
        <div>
          <p className="font-serif text-4xl font-bold text-[#14291D] leading-none">Top 5</p>
          <p className="text-xs uppercase tracking-widest text-stone-500 font-bold mt-2">
            Ecosystem Campus
          </p>
        </div>
        <p className="text-[13px] text-stone-500 mt-3">Carbon-neutral clean-green initiative</p>
      </div>
    ),
  },
];

export default function RankingSection() {
  return (
    <section
      id="institutional-rankings"
      data-purpose="institutional-rankings"
      className="relative overflow-hidden py-16 sm:py-20 bg-[#F6F5F0]"
    >
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#C8A96E]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full bg-[#153B27]/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Split Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-0.5 w-7 bg-[#7F1D1D]" />
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                Evaluations &amp; Accreditations
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#14291D] font-bold tracking-[-0.025em] leading-[1.12]">
              Ranking &amp; Recognition
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-stone-500 max-w-md lg:text-right leading-[1.68]">
            National and global benchmarking evaluations of the University of Swat.
          </p>
        </div>

        {/* React Bits MagicBento — graphs, lights and motion */}
        <MagicBento
          columns={4}
          rowHeight={190}
          gap={18}
          radius={14}
          theme="light"
          glowColor="#153B27"
          enableBorderGlow={true}
          enableSpotlight={true}
          spotlightRadius={320}
          enableStars={true}
          particleCount={20}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          textAutoHide={false}
          items={rankingItems}
        />
      </div>
    </section>
  );
}
