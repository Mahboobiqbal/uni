'use client';

import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-black text-white">
      {/* Background Video with Poster Fallback & Dark Vignette Overlay */}
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
        {/* Dark Vignette Overlay for Ultra Contrast */}
        <div className="absolute inset-0 bg-black/45 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/60 z-10" />
      </div>

      {/* Main Center Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-5 sm:px-6 text-center my-auto pt-36 sm:pt-40 pb-16">
        {/* Hero Headline: Cormorant Garamond, Ultra-Bold, Tracking -0.025em, Leading 1.08 */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-[-0.025em] text-white leading-[1.08] drop-shadow-md">
          Good Education to Build A Better Future
        </h1>

        {/* Hero Paragraph: Plus Jakarta Sans, Weight 400, Leading 1.65 */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto mt-6 leading-[1.65] font-normal drop-shadow-sm">
          We offer a quality education that provides not only lessons but also real experience
          in every field. Embrace the future with our quality education, where lessons come to
          life through immersive.
        </p>

        {/* Hero Action Button: Crimson Maroon #731C1C, Weight 600 */}
        <div className="mt-8 sm:mt-10">
          <Link
            href="#explore"
            className="inline-flex items-center justify-center bg-[#731C1C] hover:bg-[#5c1616] active:bg-[#481010] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-sm transition-all shadow-lg shadow-black/30 hover:scale-[1.02] active:scale-100"
          >
            Take a Tour
          </Link>
        </div>
      </div>

      {/* Bottom Translucent Crimson Maroon 3-Pillar Ribbon: #5D1616 */}
      <div className="relative z-20 w-full bg-[#5D1616]/92 backdrop-blur-md border-t border-white/15 shadow-2xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {/* Pillar 1: Quality */}
          <div className="py-10 sm:py-12 md:py-14 px-8 sm:px-12 text-center flex flex-col items-center justify-center group transition-colors hover:bg-white/[0.03]">
            <div className="flex items-center justify-center gap-2.5 text-white">
              {/* Star Circle / Quality Icon */}
              <svg
                className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="12" r="9.5" />
                <polygon
                  points="12 6.5 13.5 10 17.5 10.4 14.5 13.1 15.3 17 12 15 8.7 17 9.5 13.1 6.5 10.4 10.5 10 12 6.5"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
              <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-[-0.015em] text-white">
                Quality
              </h3>
            </div>
            <p className="font-sans text-xs sm:text-[13.5px] text-white/85 leading-[1.65] max-w-sm mx-auto mt-3.5 sm:mt-4">
              Experience a world-class education and unlock your potential at our university
            </p>
          </div>

          {/* Pillar 2: Leadership */}
          <div className="py-10 sm:py-12 md:py-14 px-8 sm:px-12 text-center flex flex-col items-center justify-center group transition-colors hover:bg-white/[0.03]">
            <div className="flex items-center justify-center gap-2.5 text-white">
              {/* Mortarboard / Leadership Icon */}
              <svg
                className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-[-0.015em] text-white">
                Leadership
              </h3>
            </div>
            <p className="font-sans text-xs sm:text-[13.5px] text-white/85 leading-[1.65] max-w-sm mx-auto mt-3.5 sm:mt-4">
              Guided by visionary leadership, inspires growth, and shapes future leaders
            </p>
          </div>

          {/* Pillar 3: Experience */}
          <div className="py-10 sm:py-12 md:py-14 px-8 sm:px-12 text-center flex flex-col items-center justify-center group transition-colors hover:bg-white/[0.03]">
            <div className="flex items-center justify-center gap-2.5 text-white">
              {/* Document / Certificate Experience Icon */}
              <svg
                className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-[-0.015em] text-white">
                Experience
              </h3>
            </div>
            <p className="font-sans text-xs sm:text-[13.5px] text-white/85 leading-[1.65] max-w-sm mx-auto mt-3.5 sm:mt-4">
              Embark on a transformative journey of personal and professional growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
