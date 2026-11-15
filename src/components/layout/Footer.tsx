'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer
      className="bg-white border-t border-stone-200 pt-14 pb-10 text-[#14291D] font-sans"
      data-purpose="site-footer"
      id="site-footer"
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        {/* ─── Top Header Row: University Branding & Subscribe Box ─── */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-12">
          {/* Left: University Crest Logo & Typography */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none max-w-fit"
            title="University of Swat"
          >
            <div className="w-12 h-12 rounded-full p-0.5 border border-stone-200 bg-white shadow-xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/uos-logo-circle.png"
                alt="University of Swat Crest"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-2xl text-[#14291D] leading-tight tracking-tight">
                University of Swat
              </span>
              <span className="text-[11px] font-medium tracking-wider text-stone-500 uppercase">
                Khyber Pakhtunkhwa, Pakistan
              </span>
            </div>
          </Link>

          {/* Right: Subscribe — Get University Updates Box */}
          <div className="w-full md:w-auto md:min-w-[340px]">
            <label
              htmlFor="footer-subscribe-input"
              className="block text-xs font-medium text-stone-700 mb-2"
            >
              Subscribe - Get university Updates
            </label>

            {subscribed ? (
              <div className="flex items-center gap-2 py-2 px-3.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Thank you! You are subscribed to university updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center">
                <div className="relative flex-1">
                  <input
                    id="footer-subscribe-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Get University Updates"
                    className="w-full px-3.5 py-2.5 rounded-l-lg border border-r-0 border-stone-300 bg-white text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#153B27] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  aria-label="Subscribe to university notifications"
                  className="px-4 py-2.5 rounded-r-lg bg-[#14291D] hover:bg-[#153B27] text-white flex items-center justify-center transition-colors border border-[#14291D]"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ─── Main 4-Column Directory (Stacked Sub-Sections) ─── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-14 pt-4">
          
          {/* Column 1: Explore UoS & Connect */}
          <div className="space-y-9">
            {/* Block 1: Explore UoS */}
            <div>
              <h4 className="font-semibold text-stone-900 text-sm sm:text-[15px] mb-3.5 tracking-tight">
                Explore UoS
              </h4>
              <ul className="space-y-2 text-[13px] text-stone-600">
                <li>
                  <Link href="/about" className="hover:text-[#153B27] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/leadership" className="hover:text-[#153B27] transition-colors">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/#university-story" className="hover:text-[#153B27] transition-colors">
                    Why Choose UoS
                  </Link>
                </li>
                <li>
                  <Link href="/campus-life" className="hover:text-[#153B27] transition-colors">
                    Campus Life
                  </Link>
                </li>
                <li>
                  <Link href="/research/oric" className="hover:text-[#153B27] transition-colors">
                    Our Ventures
                  </Link>
                </li>
                <li>
                  <Link href="/alumni" className="hover:text-[#153B27] transition-colors">
                    Placements
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-[#153B27] transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/academics/downloads" className="hover:text-[#153B27] transition-colors">
                    Mandatory Disclosure
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#153B27] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Block 2: Connect */}
            <div>
              <h4 className="font-semibold text-stone-900 text-sm sm:text-[15px] mb-3.5 tracking-tight">
                Connect
              </h4>
              <ul className="space-y-2 text-[13px] text-stone-600">
                <li>
                  <Link href="/#campus-life" className="hover:text-[#153B27] transition-colors">
                    Image Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/campuses/main-campus" className="hover:text-[#153B27] transition-colors">
                    Video Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-[#153B27] transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/portal" className="hover:text-[#153B27] transition-colors">
                    Media Coverage
                  </Link>
                </li>
                <li>
                  <Link href="/admissions/merit-lists" className="hover:text-[#153B27] transition-colors">
                    Newsletters
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Admissions & Campus Life */}
          <div className="space-y-9">
            {/* Block 1: Admissions */}
            <div>
              <h4 className="font-semibold text-stone-900 text-sm sm:text-[15px] mb-3.5 tracking-tight">
                Admissions
              </h4>
              <ul className="space-y-2 text-[13px] text-stone-600">
                <li>
                  <Link href="/admissions" className="hover:text-[#153B27] transition-colors">
                    Admission
                  </Link>
                </li>
                <li>
                  <Link href="/admissions" className="hover:text-[#153B27] transition-colors">
                    How to Apply
                  </Link>
                </li>
                <li>
                  <Link href="/#alumni-success" className="hover:text-[#153B27] transition-colors">
                    Why Choose UoS
                  </Link>
                </li>
                <li>
                  <Link href="/faculty" className="hover:text-[#153B27] transition-colors">
                    Department
                  </Link>
                </li>
                <li>
                  <Link href="/admissions/fee-structure" className="hover:text-[#153B27] transition-colors">
                    Fee Structure
                  </Link>
                </li>
              </ul>
            </div>

            {/* Block 2: Campus Life */}
            <div>
              <h4 className="font-semibold text-stone-900 text-sm sm:text-[15px] mb-3.5 tracking-tight">
                Campus Life
              </h4>
              <ul className="space-y-2 text-[13px] text-stone-600">
                <li>
                  <Link href="/campus-life" className="hover:text-[#153B27] transition-colors">
                    Clubs
                  </Link>
                </li>
                <li>
                  <Link href="/campus-life" className="hover:text-[#153B27] transition-colors">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link href="/campus-life" className="hover:text-[#153B27] transition-colors">
                    NCC / NSS
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-[#153B27] transition-colors">
                    Webinar / Workshop
                  </Link>
                </li>
                <li>
                  <Link href="/research/oric" className="hover:text-[#153B27] transition-colors">
                    UBA
                  </Link>
                </li>
                <li>
                  <Link href="/admissions" className="hover:text-[#153B27] transition-colors">
                    Student Welfare
                  </Link>
                </li>
                <li>
                  <Link href="/leadership" className="hover:text-[#153B27] transition-colors">
                    Faculty Welfare
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#153B27] transition-colors">
                    UGC e-Samadhan
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Programmes & Top Programmes */}
          <div className="space-y-9">
            {/* Block 1: Programmes */}
            <div>
              <h4 className="font-semibold text-stone-900 text-sm sm:text-[15px] mb-3.5 tracking-tight">
                Programmes
              </h4>
              <ul className="space-y-2 text-[13px] text-stone-600">
                <li>
                  <Link href="/programs" className="hover:text-[#153B27] transition-colors">
                    Graduate
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-[#153B27] transition-colors">
                    PhD Program
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-[#153B27] transition-colors">
                    Post Graduate
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-[#153B27] transition-colors">
                    Diploma Courses
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-[#153B27] transition-colors">
                    Integrated Courses
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-[#153B27] transition-colors">
                    Certification Courses
                  </Link>
                </li>
              </ul>
            </div>

            {/* Block 2: Top Programmes */}
            <div>
              <h4 className="font-semibold text-stone-900 text-sm sm:text-[15px] mb-3.5 tracking-tight">
                Top Programmes
              </h4>
              <ul className="space-y-2 text-[13px] text-stone-600">
                <li>
                  <Link href="/programs/bs-computer-science" className="hover:text-[#153B27] transition-colors">
                    B Tech in Artificial Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="/programs/bs-software-engineering" className="hover:text-[#153B27] transition-colors">
                    Bachelor in Science
                  </Link>
                </li>
                <li>
                  <Link href="/departments/allied-health-sciences" className="hover:text-[#153B27] transition-colors">
                    B Pharmacy
                  </Link>
                </li>
                <li>
                  <Link href="/programs/bba-honors" className="hover:text-[#153B27] transition-colors">
                    Bachelor in Commerce
                  </Link>
                </li>
                <li>
                  <Link href="/programs/bs-environmental-sciences" className="hover:text-[#153B27] transition-colors">
                    B Sc Agriculture
                  </Link>
                </li>
                <li>
                  <Link href="/programs/bba-honors" className="hover:text-[#153B27] transition-colors">
                    Bachelor of Business Administration
                  </Link>
                </li>
                <li>
                  <Link href="/programs/bs-chemistry" className="hover:text-[#153B27] transition-colors">
                    Bachelor of Ayurvedic Medicine and Surgery
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: School */}
          <div>
            <h4 className="font-semibold text-stone-900 text-sm sm:text-[15px] mb-3.5 tracking-tight">
              School
            </h4>
            <ul className="space-y-2 text-[13px] text-stone-600">
              <li>
                <Link href="/departments/computer-software-technology" className="hover:text-[#153B27] transition-colors">
                  Engineering
                </Link>
              </li>
              <li>
                <Link href="/departments/environmental-sciences" className="hover:text-[#153B27] transition-colors">
                  Agriculture
                </Link>
              </li>
              <li>
                <Link href="/departments/tourism-hospitality" className="hover:text-[#153B27] transition-colors">
                  Hotel Management
                </Link>
              </li>
              <li>
                <Link href="/departments/allied-health-sciences" className="hover:text-[#153B27] transition-colors">
                  Pharmacy
                </Link>
              </li>
              <li>
                <Link href="/departments/allied-health-sciences" className="hover:text-[#153B27] transition-colors">
                  Paramedical Science
                </Link>
              </li>
              <li>
                <Link href="/campuses/women-campus" className="hover:text-[#153B27] transition-colors">
                  Fashion Design
                </Link>
              </li>
              <li>
                <Link href="/departments/chemistry" className="hover:text-[#153B27] transition-colors">
                  Basic Science
                </Link>
              </li>
              <li>
                <Link href="/departments/management-commerce" className="hover:text-[#153B27] transition-colors">
                  Commerce
                </Link>
              </li>
              <li>
                <Link href="/campus-life" className="hover:text-[#153B27] transition-colors">
                  Physical Education
                </Link>
              </li>
              <li>
                <Link href="/departments/english-foreign-languages" className="hover:text-[#153B27] transition-colors">
                  Educations
                </Link>
              </li>
              <li>
                <Link href="/departments/allied-health-sciences" className="hover:text-[#153B27] transition-colors">
                  Nursing
                </Link>
              </li>
              <li>
                <Link href="/departments/media-communication" className="hover:text-[#153B27] transition-colors">
                  Journalism &amp; Mass Communication
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* ─── Bottom Bar: Copyright & Clean Circular Social Media Icons ─── */}
        <div className="border-t border-stone-200/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p className="font-normal text-stone-500 text-center sm:text-left">
            &copy; 2026 University of Swat. All rights reserved
          </p>

          {/* Social Media Circular Glyphs (Facebook, LinkedIn, Instagram, X, YouTube) */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href="https://facebook.com/UniversityOfSwatOfficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-7 h-7 rounded-full bg-stone-900 hover:bg-[#153B27] text-white flex items-center justify-center transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/school/university-of-swat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-7 h-7 rounded-full bg-stone-900 hover:bg-[#153B27] text-white flex items-center justify-center transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/UniversityOfSwatOfficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 rounded-full bg-stone-900 hover:bg-[#153B27] text-white flex items-center justify-center transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* X (formerly Twitter) */}
            <a
              href="https://x.com/UniversitySwat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="w-7 h-7 rounded-full bg-stone-900 hover:bg-[#153B27] text-white flex items-center justify-center transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@UniversityOfSwat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-7 h-7 rounded-full bg-stone-900 hover:bg-[#153B27] text-white flex items-center justify-center transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
