'use client';

import React from 'react';

const pillars = [
  'Chartered Public University • Est. 2010',
  '100% Solar-Powered Charbagh Campus',
  'HEC W-Category Accredited Programs',
  'Gandharan Heritage & Alpine Research',
  '10,130+ Scholars Across 28 Departments',
  'UI GreenMetric World Ranked Campus',
];

function MarqueeTrack({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {pillars.map((text, i) => (
        <React.Fragment key={i}>
          <span className="mx-10 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.22em] text-[#F6F5F0]">
            {text}
          </span>
          <span className="text-sm text-[#C8A96E]" aria-hidden="true">
            ◆
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}

/**
 * Institutional Pillars & Heritage marquee — a full-width Deep Forest Green ribbon
 * that separates leadership from campus life. Auto-scrolls continuously and
 * pauses gently on hover.
 */
export default function InstitutionalPillarsMarquee() {
  return (
    <div className="overflow-hidden border-y-2 border-[#C8A96E]/40 bg-[#153B27] py-4">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <MarqueeTrack />
        <MarqueeTrack hidden />
      </div>
    </div>
  );
}
