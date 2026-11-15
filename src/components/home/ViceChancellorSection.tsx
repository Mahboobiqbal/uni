'use client';

import React from 'react';
import Link from 'next/link';
import ProfileCard from '@/components/ui/ProfileCard';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function ViceChancellorSection() {
  return (
    <section
      className="pt-52 sm:pt-64 lg:pt-72 pb-8 sm:pb-10 bg-[#F6F5F0] relative z-10 overflow-hidden"
      data-purpose="vice-chancellor-section"
      id="vice-chancellor"
    >
      {/* Subtle Background Accent Lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#153B27]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#7F1D1D]/5 blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Portrait frame — clean photo, caption strip below */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group w-full flex justify-center">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#153B27]/15 via-[#7F1D1D]/10 to-[#B48A3E]/10 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none" />

              <div className="w-full max-w-[420px]">
                <ProfileCard
                  avatarUrl="/vc-portrait.jpg"
                  iconUrl="/pattern-crest.svg"
                  name=""
                  title=""
                  showUserInfo={false}
                  theme="light"
                  backdropColor="#153B27"
                  width="100%"
                  radius={22}
                  holo={0.85}
                  glare={0.65}
                  tiltStrength={14}
                  parallax={10}
                  enableTilt={true}
                  intro={true}
                />
              </div>
            </div>

            {/* Caption strip — crest + bold name */}
            <div className="flex items-center pt-4 px-2 pb-1 w-full max-w-[420px]">
              <div className="flex items-center gap-3">
                <img
                  src="/uos-logo-circle.png"
                  alt="University of Swat crest"
                  className="h-10 w-10 rounded-full object-contain"
                />
                <span className="font-serif text-xl font-bold text-stone-900 tracking-[-0.01em]">
                  Prof. Dr. Husnul Amin
                </span>
              </div>
            </div>
          </div>

          {/* Right: Leadership editorial discourse */}
          <div className="lg:col-span-7 flex flex-col justify-center pl-0 lg:pl-6">
            <div>
              {/* Section tag */}
              <div className="flex items-center gap-2.5 mb-3">
                <span className="h-0.5 w-7 bg-[#7F1D1D]" />
                <span className="text-xs sm:text-[12.5px] uppercase tracking-wider text-[#7F1D1D] font-bold">
                  Leadership Discourse
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-stone-900 font-bold tracking-[-0.025em] leading-[1.12] mb-6">
                Voice of the Vice Chancellor
              </h2>

              {/* Editorial quote — oversized gold mark + crimson accent bar, key phrases in forest */}
              <blockquote className="relative border-l-4 border-[#7F1D1D] pl-6 sm:pl-7">
                <span
                  aria-hidden="true"
                  className="absolute -top-7 -left-2 font-serif text-6xl leading-none text-[#C8A96E] select-none"
                >
                  &ldquo;
                </span>
                <p className="font-serif text-xl lg:text-2xl text-stone-900 leading-relaxed">
                  It is with immense pride, humility, and a profound sense of responsibility that I assume
                  the office of Vice Chancellor of the University of Swat. We stand at a pivotal moment to
                  cultivate{' '}
                  <strong className="text-[#153B27] font-semibold">
                    intellectual excellence, good governance, campus-wide green solarization
                  </strong>
                  , and dedicated empowerment for our scholars across Swat and beyond.
                </p>
              </blockquote>

              {/* Architectural pillar strip — borderless, stone-divided */}
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-stone-300 py-5 my-7 border-y border-stone-300/80">
                <div className="py-3 sm:py-1 sm:px-5 first:pl-0">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-[#7F1D1D]">
                    Academic Credential
                  </p>
                  <p className="mt-1.5 text-base font-bold text-[#153B27]">PhD Doctoral Scholar</p>
                </div>
                <div className="py-3 sm:py-1 sm:px-5">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-[#7F1D1D]">
                    Campus Initiative
                  </p>
                  <p className="mt-1.5 text-base font-bold text-[#153B27]">100% Solarized Campus</p>
                </div>
                <div className="py-3 sm:py-1 sm:px-5">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-[#7F1D1D]">
                    Tenure &amp; Mandate
                  </p>
                  <p className="mt-1.5 text-base font-bold text-[#153B27]">Appointed Oct 2026</p>
                </div>
              </div>
            </div>

            {/* Clean action row — no repeated name */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <Link
                href="/leadership/vice-chancellor"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 sm:py-2.5 rounded-xl bg-[#153B27] text-white hover:bg-[#153B27]/90 active:scale-[0.985] active:translate-y-px transition-all duration-150 shadow-xs min-h-[44px]"
              >
                <span>Full Message &amp; Secretariat</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 sm:py-2.5 rounded-xl border border-stone-300 text-stone-800 hover:border-[#7F1D1D] hover:text-[#7F1D1D] active:scale-[0.985] transition-all duration-150 min-h-[44px]"
              >
                <span>About University</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
