'use client';

import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative z-20 w-full min-h-screen flex flex-col justify-between bg-[#0C1912] text-white">
      {/* Background Video with Poster Fallback & Multi-stop Cinematic Vignette Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/campus-shot-1.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          {/* Newly provided video asset */}
          <source src="/1114.mp4" type="video/mp4" />
          <source src="/swat-university.mp4" type="video/mp4" />
        </video>

        {/* Multi-stop Cinematic Vignette Overlay: Razor-sharp Contrast into Forest Obsidian #0C1912 */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(8,15,11,0.75) 0%, rgba(8,15,11,0.45) 45%, #0C1912 100%)'
          }}
        />
      </div>

      {/* Main Center Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-5 sm:px-6 text-center my-auto pt-32 sm:pt-36 pb-8 sm:pb-10">
        {/* Hero Headline: Authoritative Institutional Display Serif */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-extrabold tracking-tight text-white leading-[1.08] drop-shadow-md">
          Shaping Scholars &amp; Innovators in the Heart of Swat
        </h1>

        {/* Hero Paragraph */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto mt-6 leading-[1.65] font-normal drop-shadow-sm">
          Rooted in ancient Gandharan heritage and energized by modern academic zeal, the
          University of Swat provides world-class education, transformative scientific inquiry,
          and regional leadership.
        </p>

        {/* Dual-Action CTA: Primary University Crimson & Secondary Glassmorphic Button */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#programs"
            className="inline-flex items-center justify-center bg-[#7F1D1D] hover:bg-[#681818] active:bg-[#521313] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-lg shadow-lg shadow-black/40 hover:scale-[1.02] active:scale-100 transition-all"
          >
            Explore Programs
          </Link>
          <Link
            href="#explore"
            className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 active:bg-white/15 text-white backdrop-blur-md border border-white/20 font-semibold text-sm sm:text-base px-7 py-3.5 rounded-lg transition-all shadow-md shadow-black/20 hover:scale-[1.02] active:scale-100"
          >
            Virtual Campus Tour
          </Link>
        </div>
      </div>

      {/* Bottom Architectural 3-Pillar Feature Strip: Sleek #6B1818/95 bar cleanly bridging into Forest Obsidian */}
      <div className="relative z-30 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 translate-y-[8%]">
        <div className="w-full bg-[#6B1818]/95 backdrop-blur-md rounded-2xl border border-white/15 shadow-2xl shadow-black/50 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {/* Pillar 1: Quality */}
            <div className="py-6 sm:py-7 md:py-8 px-6 sm:px-8 text-center flex flex-col items-center justify-center transition-colors hover:bg-white/[0.04]">
              <div className="flex items-center justify-center gap-2.5 text-white mb-2.5">
                {/* Star in Circle Badge */}
                <svg
                  className="w-5 h-5 text-white shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3.75l1.88 3.81 4.21.61-3.05 2.97.72 4.19L12 15.35l-3.76 1.98.72-4.19-3.05-2.97 4.21-.61L12 5.75z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="font-serif text-xl sm:text-[22px] font-bold tracking-tight text-white">
                  Quality
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-[13px] text-white/90 leading-[1.62] max-w-xs mx-auto">
                Experience a world-class education and unlock your potential at our university
              </p>
            </div>

            {/* Pillar 2: Leadership */}
            <div className="py-6 sm:py-7 md:py-8 px-6 sm:px-8 text-center flex flex-col items-center justify-center transition-colors hover:bg-white/[0.04]">
              <div className="flex items-center justify-center gap-2.5 text-white mb-2.5">
                {/* Leadership Group Icon */}
                <svg
                  className="w-5 h-5 text-white shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="6" r="2.2" />
                  <path d="M12 9.5c-2.2 0-4 1.1-4.4 2.8.5 1.5 2.3 2.4 4.4 2.4s3.9-.9 4.4-2.4c-.4-1.7-2.2-2.8-4.4-2.8z" />
                  <circle cx="6" cy="8" r="1.8" opacity="0.8" />
                  <path d="M6 11c-1.6 0-3 .8-3.4 2 .4 1.1 1.7 1.8 3.4 1.8.7 0 1.3-.1 1.8-.4-.3-.7-.3-1.4 0-2.1-.5-.8-1.2-1.3-1.8-1.3z" opacity="0.8" />
                  <circle cx="18" cy="8" r="1.8" opacity="0.8" />
                  <path d="M18 11c1.6 0 3 .8 3.4 2-.4 1.1-1.7 1.8-3.4 1.8-.7 0-1.3-.1-1.8-.4.3-.7.3-1.4 0-2.1.5-.8 1.2-1.3 1.8-1.3z" opacity="0.8" />
                </svg>
                <h3 className="font-serif text-xl sm:text-[22px] font-bold tracking-tight text-white">
                  Leadership
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-[13px] text-white/90 leading-[1.62] max-w-xs mx-auto">
                Guided by visionary leadership, inspires growth, and shapes future leaders
              </p>
            </div>

            {/* Pillar 3: Experience */}
            <div className="py-6 sm:py-7 md:py-8 px-6 sm:px-8 text-center flex flex-col items-center justify-center transition-colors hover:bg-white/[0.04]">
              <div className="flex items-center justify-center gap-2.5 text-white mb-2.5">
                {/* Document Certificate Icon */}
                <svg
                  className="w-5 h-5 text-white shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <circle cx="8" cy="8" r="2.2" fill="currentColor" stroke="none" />
                  <path d="M7 10.2l-.8 3 1.8-.6 1.8.6-.8-3" fill="currentColor" stroke="none" />
                  <line x1="10" y1="13.5" x2="16" y2="13.5" />
                  <line x1="8" y1="17" x2="16" y2="17" />
                </svg>
                <h3 className="font-serif text-xl sm:text-[22px] font-bold tracking-tight text-white">
                  Experience
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-[13px] text-white/90 leading-[1.62] max-w-xs mx-auto">
                Embark on a transformative journey of personal and professional growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
