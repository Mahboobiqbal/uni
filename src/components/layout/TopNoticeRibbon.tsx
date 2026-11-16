'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

interface NoticeItem {
  id: string;
  category: string;
  text: string;
  href: string;
  linkText: string;
}

const notices: NoticeItem[] = [
  {
    id: 'academic-calendar',
    category: 'Academic Calendar',
    text: 'Fall 2026 Academic Calendar is now live.',
    href: '/academics/calendar',
    linkText: 'View Calendar',
  },
  {
    id: 'oric-research',
    category: 'Research & Innovation',
    text: 'ORIC research grants are open for applications.',
    href: '/research/oric',
    linkText: 'Learn more',
  },
  {
    id: 'downloads-statutes',
    category: 'Downloads & Statutes',
    text: 'Official statutes and proformas are available.',
    href: '/academics/downloads',
    linkText: 'Browse files',
  },
];

const CYCLE_MS = 3500;

export default function TopNoticeRibbon() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const hoverRef = useRef(false);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      if (!hoverRef.current) {
        setLeaving(true);
        window.setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % notices.length);
          setLeaving(false);
        }, 180);
      }
    }, CYCLE_MS);
    return () => clearInterval(timer);
  }, [isVisible]);

  if (!isVisible) return null;

  const currentNotice = notices[currentIndex];

  return (
    <aside
      aria-label="University Announcement Strip"
      className="relative z-50 min-h-[38px] bg-[#7F1D1D] text-white border-b border-[#C8A96E]/20"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
      onFocus={() => (hoverRef.current = true)}
      onBlur={() => (hoverRef.current = false)}
    >
      {/* Centered announcement container — responsive padding clears the pinned close button */}
      <div className="flex min-h-[38px] items-center justify-center gap-1.5 sm:gap-2.5 pl-4 pr-11 sm:px-12 py-2">
        <div
          className={`flex items-center gap-1.5 sm:gap-2.5 min-w-0 transition-all duration-300 ease-out ${
            leaving ? 'opacity-0 -translate-y-1' : 'opacity-100 translate-y-0'
          }`}
          aria-live="polite"
        >
          {/* Category prefix — hidden on small screens to keep one crisp line */}
          <span className="hidden sm:inline text-[#C8A96E] text-[11px] font-semibold tracking-[0.16em] uppercase whitespace-nowrap">
            {currentNotice.category}
          </span>
          <span aria-hidden="true" className="hidden sm:inline text-[#C8A96E]/50 text-xs select-none">
            •
          </span>

          {/* Announcement copy */}
          <p className="truncate text-stone-100 text-xs sm:text-[13px] font-normal">
            {currentNotice.text}
          </p>

          {/* Action link */}
          <Link
            href={currentNotice.href}
            className="whitespace-nowrap shrink-0 text-[#C8A96E] hover:text-white font-medium underline underline-offset-4 decoration-[#C8A96E]/60 text-xs sm:text-[13px] transition-colors"
          >
            {currentNotice.linkText} →
          </Link>
        </div>
      </div>

      {/* Pinned far-right dismiss button */}
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        aria-label="Dismiss announcement"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white/75 hover:text-white transition-colors p-1.5"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}
