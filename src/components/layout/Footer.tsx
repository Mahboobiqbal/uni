import React from 'react';
import Link from 'next/link';

const academicsCol = [
  { label: 'All Degree Programs', href: '/programs' },
  { label: 'Faculties & Departments', href: '/faculty' },
  { label: 'Academic Calendar', href: '/academics/calendar' },
  { label: 'Downloads & Statutes', href: '/academics/downloads' },
  { label: 'Affiliated Colleges', href: '/affiliated-colleges' },
];

const admissionsCol = [
  { label: 'Admissions 2026', href: '/admissions' },
  { label: 'Fee Structure', href: '/admissions#fees' },
  { label: 'Merit Lists & Quotas', href: '/admissions#merit-lists' },
  { label: 'Scholarships & Aid', href: '/admissions#scholarships' },
  { label: 'ORIC & Research', href: '/research' },
];

const universityCol = [
  { label: 'About & Heritage', href: '/about' },
  { label: "Vice Chancellor's Office", href: '/leadership/vice-chancellor' },
  { label: 'Quality Enhancement Cell (QEC)', href: '/academics#qec' },
  { label: 'Campus Life & Hostels', href: '/campus-life' },
  { label: 'Tenders & Careers', href: '/portal' },
];

const social = [
  { label: 'Facebook', href: 'https://facebook.com/UniversityOfSwatOfficial', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'LinkedIn', href: 'https://linkedin.com/school/university-of-swat', path: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.39 9.74v-8.37H5.07v8.37h2.78z' },
  { label: 'Instagram', href: 'https://instagram.com/UniversityOfSwatOfficial', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { label: 'X (Twitter)', href: 'https://x.com/UniversitySwat', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { label: 'YouTube', href: 'https://youtube.com/@UniversityOfSwat', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
];

export default function Footer() {
  return (
    <footer
      className="bg-[#0F291B] text-stone-300 border-t-2 border-[#C8A96E]/50 font-sans"
      data-purpose="site-footer"
      id="site-footer"
    >
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1 · Institutional identity & contact */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3.5 group focus:outline-none" title="University of Swat">
              <img
                src="/uos-logo-circle.png"
                alt="University of Swat Crest"
                className="w-11 h-11 rounded-full object-contain"
              />
              <span className="flex flex-col">
                <span className="font-serif font-bold text-2xl text-white leading-tight tracking-tight">University of Swat</span>
                <span className="text-[11px] font-medium tracking-wider text-[#C8A96E] uppercase">Khyber Pakhtunkhwa, Pakistan</span>
              </span>
            </Link>

            <p className="text-stone-300 text-sm leading-relaxed max-w-sm mt-4">
              A chartered public-sector university dedicated to academic excellence, alpine research, and regional leadership across Swat Valley.
            </p>

            <div className="text-xs text-stone-400 space-y-1.5 mt-5">
              <p>Charbagh Main Campus, Swat, Khyber Pakhtunkhwa</p>
              <p>info@uswat.edu.pk &nbsp;•&nbsp; +92 (0) 946-613061</p>
            </div>
          </div>

          {/* Column 2 · Academics */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C8A96E] mb-4">Academics</h3>
            <ul className="space-y-1 sm:space-y-2.5 text-sm text-stone-300">
              {academicsCol.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="inline-block py-1 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 · Admissions & Campus */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C8A96E] mb-4">Admissions &amp; Campus</h3>
            <ul className="space-y-1 sm:space-y-2.5 text-sm text-stone-300">
              {admissionsCol.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="inline-block py-1 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 · University */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C8A96E] mb-4">University</h3>
            <ul className="space-y-1 sm:space-y-2.5 text-sm text-stone-300">
              {universityCol.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="inline-block py-1 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quiet legal & social colophon */}
        <div className="border-t border-white/10 pt-8 mt-14 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-400 text-center sm:text-left">
            &copy; 2026 University of Swat. All rights reserved.
          </p>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-stone-400 hover:text-[#C8A96E] transition-colors p-2 inline-flex items-center justify-center min-w-[44px] min-h-[44px]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
