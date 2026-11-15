'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface AidCard {
  id: string;
  badge: string;
  badgeClass: string;
  title: string;
  copy: string;
  highlights: string[];
  cta: string;
  ctaHref: string;
  ctaClass: string;
  cardClass: string;
  dividerClass: string;
}

const aidCards: AidCard[] = [
  {
    id: 'admissions',
    badge: 'Open Now • Fall / Spring Intake',
    badgeClass: 'bg-white/10 text-[#C8A96E]',
    title: 'Undergraduate & Graduate Admissions',
    copy:
      'Merit-based admissions across 28 teaching departments at Charbagh Main Campus, Women Campus, and Shangla Sub-Campus.',
    highlights: ['Online Portal Application', 'NTS / University Entry Test', 'Open Merit & Self-Finance Seats'],
    cta: 'Apply via Admission Portal',
    ctaHref: '/admissions',
    ctaClass: 'bg-[#7F1D1D] hover:bg-[#991B1B] text-white',
    cardClass: 'bg-[#153B27] text-white border-t-4 border-t-[#C8A96E] shadow-xl',
    dividerClass: 'divide-white/15',
  },
  {
    id: 'scholarships',
    badge: 'PKR 45M+ Annual Aid Disbursed',
    badgeClass: 'bg-black/20 text-[#E2C07D]',
    title: 'Merit & Need-Based Scholarships',
    copy:
      'Ensuring zero deserving students are turned away through HEC, KPEF, Ehsaas, and University Merit fee-waiver schemes.',
    highlights: ['HEC Need-Based & Ehsaas', 'KPEF Merit Scholarships', 'Hafiz-e-Quran & Kinship Concessions'],
    cta: 'Check Scholarship Eligibility',
    ctaHref: '/admissions',
    ctaClass: 'bg-white text-[#7F1D1D] hover:bg-stone-100',
    cardClass: 'bg-[#7F1D1D] text-white border-t-4 border-t-[#C8A96E] shadow-xl',
    dividerClass: 'divide-white/15',
  },
  {
    id: 'fees',
    badge: 'Transparent Guidelines',
    badgeClass: 'bg-[#153B27]/10 text-[#153B27]',
    title: 'Fee Structure, Hostels & Transport',
    copy:
      'Subsidized public-sector semester dues, dedicated university shuttle routes across Swat Valley, and secure on-campus hostels.',
    highlights: ['Semester-Wise Fee Schedule', 'Swat Valley Bus Routes', 'Male & Female Hostel Facilities'],
    cta: 'View Fee Structure & Facilities',
    ctaHref: '/admissions/fee-structure',
    ctaClass: 'bg-[#153B27] hover:bg-[#0F291B] text-white',
    cardClass: 'bg-white text-stone-900 border border-stone-200 border-t-4 border-t-[#153B27] shadow-md',
    dividerClass: 'divide-stone-200',
  },
];

export default function AdmissionsFinancialAid() {
  return (
    <div className="mt-16 sm:mt-24 pt-16 sm:pt-20 border-t border-stone-300">
      {/* Section header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2.5">
            <span className="h-0.5 w-7 bg-[#7F1D1D]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#7F1D1D]">
              Admissions &amp; Scholarships • 2026–2027
            </span>
          </div>
          <h3 className="font-serif text-3xl lg:text-4xl font-bold text-[#14291D] tracking-[-0.02em]">
            Accessible Excellence &amp; Student Financial Support
          </h3>
        </div>

        <Link
          href="/admissions"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#153B27] hover:text-[#7F1D1D] transition-colors group"
        >
          <span>Download Admissions Prospectus (PDF)</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </Link>
      </div>

      {/* 3-column architectural pathway cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        {aidCards.map((card) => (
          <article
            key={card.id}
            className={`rounded-2xl p-7 flex flex-col justify-between ${card.cardClass}`}
          >
            <div>
              <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${card.badgeClass}`}>
                {card.badge}
              </span>
              <h4 className="font-serif text-xl font-bold mt-5 mb-3 leading-snug">{card.title}</h4>
              <p className="text-sm leading-relaxed opacity-90">{card.copy}</p>

              <ul className={`mt-5 divide-y ${card.dividerClass}`}>
                {card.highlights.map((item) => (
                  <li key={item} className="py-2.5 text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={card.ctaHref}
              className={`inline-flex items-center justify-between w-full py-3 px-5 rounded-xl font-semibold text-center transition-colors mt-6 group ${card.ctaClass}`}
            >
              <span>{card.cta}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
