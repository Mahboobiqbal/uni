'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Bell, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface NoticeItem {
  id: string;
  badge: string;
  text: string;
  href: string;
  linkText: string;
}

const notices: NoticeItem[] = [
  {
    id: 'admissions-fall-2026',
    badge: 'Admissions 2026',
    text: 'Fall 2026 Admissions are now open across 28 Academic Departments (BS, MS/MPhil & PhD).',
    href: '/admissions',
    linkText: 'Apply Online',
  },
  {
    id: 'merit-list-notice',
    badge: 'Merit List',
    text: 'Spring 2026 Official Merit Lists & Quota Allocation Registers released by the Directorate of Admissions.',
    href: '/admissions/merit-lists',
    linkText: 'View Lists',
  },
  {
    id: 'scholarship-aid',
    badge: 'Financial Aid',
    text: 'HEC Need-Based & Ehsaas Scholarships: Phase VIII Application Submission Deadline extended.',
    href: '/admissions/fee-structure',
    linkText: 'Learn More',
  },
];

export default function TopNoticeRibbon() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notices.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const currentNotice = notices[currentIndex];

  return (
    <aside
      aria-label="University Announcement Banner"
      className="relative z-50 bg-[#7F1D1D] text-white border-b border-[#991B1B]/60 text-xs py-1.5 px-3 sm:px-6 transition-all duration-300"
    >
      <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-3">
        {/* Left: Live Notification Badge */}
        <div className="flex items-center gap-2.5 shrink-0">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/15 border border-white/20 text-[10px] font-bold tracking-wider uppercase text-amber-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <Bell className="w-2.5 h-2.5 hidden sm:inline" />
            {currentNotice.badge}
          </span>
        </div>

        {/* Center: Dynamic Announcement Ticker */}
        <div className="flex-1 overflow-hidden min-w-0 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
          <p className="truncate text-[11px] sm:text-xs font-medium text-white/95">
            {currentNotice.text}
          </p>
          <Link
            href={currentNotice.href}
            className="inline-flex items-center gap-1 font-semibold text-amber-300 hover:text-white underline underline-offset-2 shrink-0 text-[11px] sm:text-xs transition-colors ml-1"
          >
            {currentNotice.linkText}
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Right: Ticker Navigation & Dismiss */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0 text-white/80">
          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => (prev - 1 + notices.length) % notices.length)}
            aria-label="Previous announcement"
            className="p-1 rounded hover:bg-white/10 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <span className="text-[10px] tabular-nums text-white/60 select-none">
            {currentIndex + 1}/{notices.length}
          </span>
          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % notices.length)}
            aria-label="Next announcement"
            className="p-1 rounded hover:bg-white/10 hover:text-white transition-colors"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
          <div className="w-px h-3 bg-white/20 mx-1 hidden sm:block" />
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss banner"
            className="p-1 rounded hover:bg-white/10 hover:text-white transition-colors hidden sm:block"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
