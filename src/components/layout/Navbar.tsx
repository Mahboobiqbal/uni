'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import TopNoticeRibbon from './TopNoticeRibbon';

interface SubmenuItem {
  label: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  submenu?: SubmenuItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Programs',
    href: '/programs',
    hasDropdown: true,
    submenu: [
      {
        label: 'BS Computer Science',
        href: '/programs/bs-computer-science',
        description: 'Artificial Intelligence, Software Systems & Data Networks',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        label: 'BS Software Engineering',
        href: '/programs/bs-software-engineering',
        description: 'Full-Stack Architecture, Cloud & Software Engineering',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        )
      },
      {
        label: 'BBA (Honors) Business Admin',
        href: '/programs/bba-honors',
        description: 'Strategic Leadership, Corporate Finance & HR Analytics',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        label: 'BS Chemistry (4-Year)',
        href: '/programs/bs-chemistry',
        description: 'Organic, Inorganic, Physical & Analytical Chemistry',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        )
      },
      {
        label: 'BS Environmental Sciences',
        href: '/programs/bs-environmental-sciences',
        description: 'Alpine Ecology, Mountain Hydrology & Climate Change',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        label: 'Bachelor of Laws (LLB 5-Yr)',
        href: '/programs/llb-5-years',
        description: 'Constitutional, Criminal & Corporate Jurisprudence',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
        )
      }
    ]
  },
  { label: 'Faculty', href: '/faculty' },
  {
    label: 'Academics',
    href: '/academics',
    hasDropdown: true,
    submenu: [
      {
        label: 'Faculties & Departments',
        href: '/faculty',
        description: 'All 4 faculties & 28 academic departments',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      },
      {
        label: 'Academic Calendar',
        href: '/academics/calendar',
        description: 'Semester schedules, gazettes & date sheets',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        label: 'Official Downloads & Forms',
        href: '/academics/downloads',
        description: 'Proformas, examination forms & regulations',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        )
      },
      {
        label: 'University Leadership',
        href: '/leadership',
        description: 'Statutory officers & administrative directory',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      },
      {
        label: 'Vice Chancellor\'s Office',
        href: '/leadership/vice-chancellor',
        description: 'Prof. Dr. Husnul Amin\'s vision & secretariat',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        label: 'Affiliated Colleges',
        href: '/affiliated-colleges',
        description: 'Registered public and private degree colleges',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      }
    ]
  },
  {
    label: 'Admissions',
    href: '/admissions',
    hasDropdown: true,
    submenu: [
      {
        label: 'Admissions 2026',
        href: '/admissions',
        description: 'Application criteria, timeline & procedures',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        )
      },
      {
        label: 'Fee Structure',
        href: '/admissions/fee-structure',
        description: 'Semester dues for BS, MS, PhD & Self-Finance',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        )
      },
      {
        label: 'Merit Lists & Quotas',
        href: '/admissions/merit-lists',
        description: 'Departmental provisional & final merit lists',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        label: 'Scholarships & Aid',
        href: '/admissions',
        description: 'HEC Need-Based, Ehsaas & KPEF scholarships',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        )
      },
      {
        label: 'Student CMS Portal',
        href: '/portal',
        description: 'Enrollment, course registration & grades',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        label: 'Contact Admissions Desk',
        href: '/contact',
        description: 'Directorate guidance & helpline support',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )
      }
    ]
  },
  {
    label: 'Campus Life',
    href: '/campus-life',
    hasDropdown: true,
    submenu: [
      {
        label: 'Charbagh Main Campus',
        href: '/campuses/main-campus',
        description: 'Flagship academic and administrative grounds',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      },
      {
        label: 'Women Sub-Campus',
        href: '/campuses/women-campus',
        description: 'Dedicated center for women\'s higher education',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )
      },
      {
        label: 'Campus Life & Facilities',
        href: '/campus-life',
        description: 'Hostels, sports complex & student societies',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        label: 'News & Press Releases',
        href: '/news',
        description: 'Official university notifications & press',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        )
      },
      {
        label: 'Events & Conferences',
        href: '/events',
        description: 'Symposia, sports tournaments & workshops',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        label: 'About University of Swat',
        href: '/about',
        description: 'Heritage, vision, mission & governance',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      }
    ]
  },
  {
    label: 'Research',
    href: '/research',
    hasDropdown: true,
    submenu: [
      {
        label: 'Research & Innovation (ORIC)',
        href: '/research/oric',
        description: 'Commercialization, grants & industry liaison',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
      },
      {
        label: 'Advanced Studies (ASRB)',
        href: '/research/asrb',
        description: 'Postgraduate thesis policies & oversight',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
          </svg>
        )
      },
      {
        label: 'Research Overview',
        href: '/research',
        description: 'Focus areas, patents & Gandhara archaeology',
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        )
      }
    ]
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  const focusNavItem = (dir: number, current: number) => {
    const nav = desktopNavRef.current;
    if (!nav) return;
    const triggers = Array.from(nav.querySelectorAll('[data-nav-idx]')) as HTMLElement[];
    if (!triggers.length) return;
    const next = (current + dir + triggers.length) % triggers.length;
    triggers[next].focus();
  };

  const handleHeaderKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Escape') {
      if (activeDropdown || mobileMenuOpen) {
        e.preventDefault();
        const restoreFocus = activeDropdown != null;
        setActiveDropdown(null);
        setMobileMenuOpen(false);
        if (restoreFocus && lastTriggerRef.current) lastTriggerRef.current.focus();
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      ref={navRef}
      onKeyDown={handleHeaderKeyDown}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0C1912]/90 backdrop-blur-xl border-b border-white/15 shadow-lg'
          : 'bg-gradient-to-b from-black/75 via-black/35 to-transparent'
      }`}
    >
      <TopNoticeRibbon />
      <div className={`w-full pl-3 sm:pl-4 pr-4 sm:pr-6 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-3.5 sm:py-4'
      }`}>
        {/* Left Branding: Circular Crest Logo + "University of Swat" */}
        <Link
          href="/"
          className="flex items-center gap-3 text-white group focus:outline-none"
          title="University of Swat"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full p-0.5 bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 group-hover:border-white/50 transition-all">
            <img
              src="/uos-logo-circle.png"
              alt="University of Swat Crest"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif font-bold text-xl sm:text-2xl tracking-[-0.02em] text-white leading-tight">
              University of Swat
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-wider text-white/70 uppercase font-sans font-semibold">
              Khyber Pakhtunkhwa, Pakistan
            </span>
          </div>
        </Link>

        {/* Middle Navigation Links (Desktop) */}
        <nav ref={desktopNavRef} className="hidden md:flex items-center gap-6 lg:gap-8" role="menubar">
          {navItems.map((item, index) => {
            const isDropdownOpen = activeDropdown === item.label;

            if (item.hasDropdown) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={(e) => {
                    lastTriggerRef.current = e.currentTarget as HTMLElement;
                    setActiveDropdown(item.label);
                  }}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    data-nav-idx={index}
                    onClick={(e) => {
                      lastTriggerRef.current = e.currentTarget as HTMLElement;
                      setActiveDropdown(isDropdownOpen ? null : item.label);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                        e.preventDefault();
                        focusNavItem(e.key === 'ArrowRight' ? 1 : -1, index);
                      }
                    }}
                    aria-expanded={isDropdownOpen}
                    className="flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white transition-colors cursor-pointer py-2 focus:outline-none"
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-3.5 h-3.5 text-white/70 transition-transform duration-300 ${
                        isDropdownOpen ? 'rotate-180 text-white' : ''
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {/* Dropdown Menu Card (Smooth Fade In with Generously Increased Spacing) */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-3.5 z-50 w-[740px] lg:w-[760px] max-w-[95vw] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top before:content-[''] before:absolute before:-top-3.5 before:left-0 before:right-0 before:h-3.5 ${
                      isDropdownOpen
                        ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto visible'
                        : 'opacity-0 translate-y-2 scale-[0.985] pointer-events-none invisible'
                    }`}
                  >
                    {/* Top Centered Pointer Arrow/Caret */}
                    <div className="relative">
                      <div
                        className="absolute -top-2 left-1/2 -translate-x-1/2 w-4.5 h-4.5 bg-white rotate-45 border-t border-l border-slate-200/80 rounded-tl-[3px] shadow-[-2px_-2px_4px_rgba(0,0,0,0.03)] z-20"
                        aria-hidden="true"
                      />

                      {/* Card Content Surface with Generously Increased Spacing */}
                      <div className="relative bg-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(15,23,42,0.18),0_0_0_1px_rgba(15,23,42,0.06)] border border-slate-100 p-9 sm:p-10 lg:p-11 text-left z-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 sm:gap-x-14 gap-y-7 sm:gap-y-8">
                          {item.submenu?.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setActiveDropdown(null)}
                              className="group flex items-start gap-4 sm:gap-4.5 p-3 -m-3 rounded-xl hover:bg-[#F9FAFB] transition-all duration-200"
                            >
                              {/* Left Line Icon */}
                              <div className="w-11.5 h-11.5 sm:w-12 sm:h-12 rounded-xl bg-slate-50 border border-slate-200/75 flex items-center justify-center shrink-0 text-[#1D3523] group-hover:bg-[#1D3523]/10 group-hover:text-[#1D3523] group-hover:scale-105 transition-all">
                                {sub.icon}
                              </div>

                              {/* Right Text Stack */}
                              <div className="flex flex-col">
                                <span className="text-[15.5px] sm:text-[16px] font-semibold text-[#111827] group-hover:text-[#1D3523] transition-colors leading-snug">
                                  {sub.label}
                                </span>
                                <span className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed mt-1.5">
                                  {sub.description}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                data-nav-idx={index}
                className="text-sm font-semibold text-white/90 hover:text-white transition-colors py-1.5"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Button: "Student Portal" in Official University Crimson #7F1D1D */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/search"
            aria-label="Search the university"
            className="w-10 h-10 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-white/10 border border-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </Link>
          <Link
            href="/portal"
            className="inline-flex items-center justify-center bg-[#7F1D1D] hover:bg-[#681818] active:bg-[#521313] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow-md shadow-black/20 focus:outline-none"
          >
            Student Portal
          </Link>
        </div>

        {/* Mobile Menu Hamburger Toggle */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="p-2 text-white/90 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0C1912]/80 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                const isOpen = mobileSubmenu === item.label;
                return (
                  <div key={item.label} className="border-b border-white/10 pb-2">
                    <button
                      type="button"
                      onClick={() => setMobileSubmenu(isOpen ? null : item.label)}
                      className="w-full flex items-center justify-between text-base font-semibold text-white py-1"
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="mt-2 pl-3 flex flex-col gap-2.5 border-l border-white/20">
                        {item.submenu?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-2.5 py-1 text-sm text-white/80 hover:text-white"
                          >
                            <span className="text-[#1D3523] bg-white/20 p-1 rounded-md">{sub.icon}</span>
                            <div className="flex flex-col">
                              <span className="font-semibold text-white">{sub.label}</span>
                              <span className="text-[11px] text-white/60">{sub.description}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-white/90 hover:text-white py-1 border-b border-white/10"
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-3">
              <Link
                href="/portal"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center bg-[#7F1D1D] hover:bg-[#681818] text-white text-base font-semibold py-3 rounded-lg transition-colors shadow-md"
              >
                Student Portal
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
