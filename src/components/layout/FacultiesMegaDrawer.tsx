'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { facultiesCatalog } from '@/data/departmentsData';
import type { NavItem } from '@/data/navigation';

interface FacultiesMegaDrawerProps {
  item: NavItem;
  onNavigate: () => void;
}

/**
 * Unified "Faculty → Departments" mega-drawer.
 *
 * Left: the 5 academic faculties (interactive, default-active on the first).
 * Right: the teaching departments of the selected faculty, linking to their
 * dedicated department detail pages. No "Flagship vs. Graduate" splits — every
 * department is a single academic unit.
 */
export default function FacultiesMegaDrawer({ item, onNavigate }: FacultiesMegaDrawerProps) {
  const [activeSlug, setActiveSlug] = useState<string>(facultiesCatalog[0]?.slug ?? '');
  const activeFaculty = facultiesCatalog.find((f) => f.slug === activeSlug) ?? facultiesCatalog[0];

  return (
    <div className="w-full">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 lg:grid-cols-12 px-6 sm:px-10 lg:px-14 py-7 lg:py-8">
        {/* ── Left: 5 Faculties ── */}
        <div className="lg:col-span-5 pr-0 lg:pr-10 border-b lg:border-b-0 lg:border-r border-stone-200 pb-6 lg:pb-0">
          <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#7F1D1D] mb-4">
            <span className="h-px w-4 bg-[#C8A96E]" aria-hidden="true" />
            Academic Faculties (05)
          </p>
          <div className="flex flex-col gap-1.5">
            {facultiesCatalog.map((fac) => {
              const isActive = fac.slug === activeFaculty.slug;
              return (
                <button
                  key={fac.slug}
                  type="button"
                  onMouseEnter={() => setActiveSlug(fac.slug)}
                  onClick={() => setActiveSlug(fac.slug)}
                  aria-pressed={isActive}
                  className={`group/fac relative flex items-center justify-between gap-3 text-left rounded-xl pl-5 pr-4 py-3.5 transition-all duration-200 ${
                    isActive ? 'bg-[#153B27] text-white' : 'bg-transparent text-[#14291D] hover:bg-stone-100/70'
                  }`}
                >
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-7 w-[3px] rounded-full bg-[#C8A96E]"
                    />
                  )}
                  <span className={`font-serif text-[15px] font-bold leading-snug ${isActive ? 'text-white' : 'group-hover/fac:text-[#153B27]'}`}>
                    {fac.name}
                  </span>
                  <span
                    className={`shrink-0 inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold tabular-nums ${
                      isActive ? 'bg-white/15 text-[#E5CD9B]' : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    {fac.departments.length} DEPTS
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Right: Teaching Departments in Selected Faculty ── */}
        <div className="lg:col-span-7 pt-6 lg:pt-0 lg:pl-10">
          <div className="flex items-center justify-between gap-4 mb-5">
            <h3 className="font-serif text-xl font-bold text-[#14291D] tracking-[-0.01em]">
              {activeFaculty.name}
            </h3>
            <Link
              href={item.href}
              onClick={onNavigate}
              className="shrink-0 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#7F1D1D] hover:text-[#661717] transition-colors min-h-[44px] -my-2"
            >
              View All Faculties &amp; Departments
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activeFaculty.departments.map((dept) => (
              <Link
                key={dept.id}
                href={`/departments/${dept.id}`}
                onClick={onNavigate}
                className="group/dept block bg-white border border-stone-200 rounded-xl p-4 hover:border-[#153B27] hover:shadow-sm transition-all duration-200"
              >
                <span className="block font-serif text-sm font-bold text-[#14291D] leading-snug group-hover/dept:text-[#153B27] transition-colors">
                  {dept.name}
                </span>
                <span className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-medium text-stone-500">
                  <MapPin className="w-3 h-3 text-[#153B27]" />
                  {dept.campus}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
