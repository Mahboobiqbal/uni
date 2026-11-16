'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { NavItem } from '@/data/navigation';
import FacultiesMegaDrawer from './FacultiesMegaDrawer';

interface MegaMenuPanelProps {
  item: NavItem;
  panelId: string;
  onNavigate: () => void;
}

const GRID_BY_COLUMNS: Record<NavItem['columns'], string> = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
};

/**
 * Full-width architectural mega-drawer.
 *
 * Anchored flush to the bottom edge of the navbar — spans 100% of the screen
 * width with zero margins, rounded corners, or floating-card shadows. A single
 * unified Warm Alabaster directory surface holds the section header and the
 * balanced link columns.
 */
export default function MegaMenuPanel({ item, panelId, onNavigate }: MegaMenuPanelProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const keys = ['ArrowDown', 'ArrowUp', 'Home', 'End'];
    if (!keys.includes(event.key)) return;

    const links = Array.from(
      contentRef.current?.querySelectorAll<HTMLAnchorElement>('a[href]') ?? []
    );
    if (!links.length) return;

    const active = document.activeElement as HTMLElement | null;
    const index = links.findIndex((link) => link === active);

    if (event.key === 'Home') {
      event.preventDefault();
      links[0].focus();
      return;
    }
    if (event.key === 'End') {
      event.preventDefault();
      links[links.length - 1].focus();
      return;
    }

    event.preventDefault();
    const direction = event.key === 'ArrowDown' ? 1 : -1;
    const next = index === -1 ? 0 : (index + direction + links.length) % links.length;
    links[next].focus();
  };

  return (
    <div
      id={panelId}
      role="region"
      aria-label={`${item.label} menu`}
      className="absolute inset-x-0 top-full z-40"
    >
      <div
        ref={contentRef}
        onKeyDown={handleKeyDown}
        className="animate-mega-drawer w-full overflow-hidden border-t border-white/15 border-b-2 border-b-[#7F1D1D] bg-[#F6F5F0] text-left shadow-2xl"
      >
        {item.anchor === 'faculties' ? (
          <FacultiesMegaDrawer item={item} onNavigate={onNavigate} />
        ) : (
        <div className="mx-auto w-full max-w-[1440px] px-6 py-8 sm:px-10 lg:px-14">
          {/* ── Header row ─────────────────────────────────────────────── */}
          <div className="flex items-start justify-between gap-8 border-b border-stone-200 pb-4">
            <div className="min-w-0">
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#7F1D1D]">
                <span className="h-px w-4 bg-[#C8A96E]" aria-hidden="true" />
                {item.label}
              </p>
              <p className="mt-1.5 font-serif text-[19px] font-semibold leading-tight tracking-[-0.01em] text-[#14291D]">
                {item.summary}
              </p>
            </div>

            <Link
              href={item.href}
              onClick={onNavigate}
              className="group/view mt-1 inline-flex shrink-0 items-center gap-1.5 rounded-sm text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#153B27] transition-colors hover:text-[#7F1D1D]"
            >
              {item.viewAllLabel}
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover/view:-translate-y-0.5 group-hover/view:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* ── Link columns ───────────────────────────────────────────── */}
          <div className={`mt-6 grid gap-x-12 gap-y-8 ${GRID_BY_COLUMNS[item.columns]}`}>
            {item.groups.map((group) => (
              <div key={group.title}>
                <p className="mb-3 text-[11px] font-bold tracking-[0.18em] text-stone-500 uppercase">
                  {group.title}
                </p>
                <ul className="space-y-px">
                  {group.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <li key={`${group.title}-${link.label}-${link.href}`}>
                        <Link
                          href={link.href}
                          onClick={onNavigate}
                          className="group/link relative -mx-2 flex items-baseline gap-2.5 rounded-lg px-2 py-[7px] transition-colors duration-150 hover:bg-white focus-visible:bg-white"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full bg-[#C8A96E] opacity-0 transition-opacity duration-150 group-hover/link:opacity-100"
                          />
                          <Icon
                            className="h-[15px] w-[15px] shrink-0 translate-y-[2px] text-[#153B27]/45 transition-colors duration-150 group-hover/link:text-[#7F1D1D]"
                            strokeWidth={1.7}
                            aria-hidden="true"
                          />
                          <span className="min-w-0 flex-1 text-[13.5px] font-semibold leading-snug text-[#14291D] transition-colors duration-150 group-hover/link:text-[#7F1D1D]">
                            {link.label}
                          </span>
                          {link.meta && (
                            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.08em] tabular-nums text-stone-600 transition-colors duration-150 group-hover/link:text-stone-800">
                              {link.meta}
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>
    </div>
  );
}
