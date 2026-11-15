'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Compass, Leaf, Sparkles, SunMedium, BookOpenCheck, Microscope } from 'lucide-react';

export default function EditorialStorytelling() {
  return (
    <section
      id="university-story"
      data-purpose="editorial-storytelling"
      className="pt-12 sm:pt-14 pb-20 sm:pb-28 bg-[#F6F5F0] relative overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#153B27]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#7F1D1D]/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14 relative z-10 space-y-16 sm:space-y-32">
        {/* ─── Story Row 1: Alpine Sanctuary & Green Campus ─────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text Content (Left, 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="h-0.5 w-7 bg-[#153B27]" />
              <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">
                Campus Environment &amp; Sustainability
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-[42px] text-[#14291D] font-bold tracking-[-0.025em] leading-[1.14]">
              An Alpine Sanctuary Designed for Inspired Scholars &amp; Natural Harmony
            </h2>

            <p className="font-sans text-stone-600 text-sm sm:text-lg leading-[1.75]">
              Spread across the verdant foothills of Charbagh, the University of Swat combines majestic
              alpine geography with purpose-built collegiate architecture. Recognized among Pakistan&rsquo;s
              top institutions in the UI GreenMetric World University Rankings, our flagship grounds provide a
              peaceful sanctuary where mountain air meets state-of-the-art computing laboratories, high-speed
              fiber networks, and expansive botanical lawns.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white/70 border border-stone-300 shadow-xs hover:border-stone-400 hover:-translate-y-[2px] transition-all duration-200 ease-out">
                <SunMedium className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-xs text-[#14291D]">100% Solar-Powered</p>
                  <p className="text-[11px] text-stone-600">Green clean energy grid across all blocks</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white/70 border border-stone-300 shadow-xs hover:border-stone-400 hover:-translate-y-[2px] transition-all duration-200 ease-out">
                <Leaf className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-xs text-[#14291D]">Top 15 UI GreenMetric</p>
                  <p className="text-[11px] text-stone-600">National leader in ecological stewardship</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white/70 border border-stone-300 shadow-xs hover:border-stone-400 hover:-translate-y-[2px] transition-all duration-200 ease-out">
                <BookOpenCheck className="w-5 h-5 text-[#7F1D1D] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-xs text-[#14291D]">Central Scholar Halls</p>
                  <p className="text-[11px] text-stone-600">HEC Digital Library &amp; 25,000+ journals</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white/70 border border-stone-300 shadow-xs hover:border-stone-400 hover:-translate-y-[2px] transition-all duration-200 ease-out">
                <Compass className="w-5 h-5 text-[#7F1D1D] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-xs text-[#14291D]">Scenic Valley Location</p>
                  <p className="text-[11px] text-stone-600">Serene Charbagh foothills, Swat</p>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/campuses/main-campus"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#153B27] hover:bg-[#0F291C] hover:-translate-y-[2px] active:scale-[0.985] active:translate-y-px text-white text-sm font-semibold shadow-sm transition-all duration-150 group min-h-[44px]"
              >
                <span>Explore Charbagh Main Campus</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Visual Collage / Photo (Right, 6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#153B27]/20 via-[#C8A96E]/20 to-transparent blur-xl pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border border-stone-300/80 shadow-xl bg-white group">
                <img
                  src="/campus-main.jpg"
                  alt="University of Swat Charbagh Main Campus entrance in Swat Valley"
                  loading="lazy"
                  className="w-full h-auto object-contain group-hover:scale-[1.025] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                {/* Floating badge */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-[#153B27] px-2.5 py-1 rounded-full text-emerald-200 border border-emerald-400/30">
                      Charbagh Main Campus
                    </span>
                    <p className="font-serif text-lg font-bold mt-1.5 text-white drop-shadow-sm">
                      Foothills of the Hindu Kush
                    </p>
                  </div>
                  <span className="text-xs text-white/80 font-mono hidden sm:block">
                    350+ Canals · 100% Solar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Story Row 2: Frontier Research & Gandhara Heritage ─────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual (Left, 6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tl from-[#7F1D1D]/20 via-[#153B27]/15 to-transparent blur-xl pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border border-stone-300/80 shadow-xl bg-white aspect-[4/3] group">
                <img
                  src="/images/news/news-gandhara-mou-oct2026.jpeg"
                  alt="Swat Valley Buddhist Heritage & Archaeological Research"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.025] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-[#7F1D1D] px-2.5 py-1 rounded-full text-amber-200 border border-amber-400/30">
                      ORIC &amp; Cultural Heritage
                    </span>
                    <p className="font-serif text-lg font-bold mt-1.5 text-white drop-shadow-sm">
                      Ancient Gandhara Excavation &amp; Fieldwork
                    </p>
                  </div>
                  <span className="text-xs text-white/80 font-mono hidden sm:block">
                    International Missions
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content (Right, 6 cols) */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="h-0.5 w-7 bg-[#7F1D1D]" />
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                Research &amp; Scholarly Impact
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-[42px] text-[#14291D] font-bold tracking-[-0.025em] leading-[1.14]">
              Frontier Alpine Research, Herbal Therapeutics &amp; Gandhara Preservation
            </h2>

            <p className="font-sans text-stone-600 text-sm sm:text-lg leading-[1.75]">
              The University of Swat sits at the historic crossroads of Buddhist antiquity and the fragile
              mountain ecosystems of Northern Pakistan. Through the Office of Research, Innovation &amp;
              Commercialization (ORIC), our faculty collaborate with international archaeological missions,
              investigate medicinal flora endemic to the Swat Valley, and formulate climate resilience
              strategies for alpine watersheds.
            </p>

            {/* Research stats bar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 py-3 border-y border-stone-300 text-center">
              <div>
                <p className="font-serif text-xl sm:text-3xl font-bold text-[#7F1D1D]">200+</p>
                <p className="text-[10px] sm:text-[11px] text-stone-600 uppercase tracking-wider font-semibold mt-0.5">
                  Annual Papers
                </p>
              </div>
              <div className="border-x border-stone-300">
                <p className="font-serif text-xl sm:text-3xl font-bold text-[#153B27]">50+</p>
                <p className="text-[10px] sm:text-[11px] text-stone-600 uppercase tracking-wider font-semibold mt-0.5">
                  Research Labs
                </p>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-3xl font-bold text-[#14291D]">PKR 85M</p>
                <p className="text-[10px] sm:text-[11px] text-stone-600 uppercase tracking-wider font-semibold mt-0.5">
                  Research Grants
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center">
              <Link
                href="/research/oric"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#7F1D1D] hover:bg-[#681818] hover:-translate-y-[2px] active:scale-[0.985] active:translate-y-px text-white text-sm font-semibold shadow-sm transition-all duration-150 group min-h-[44px]"
              >
                <span>Discover Research &amp; ORIC</span>
                <ArrowUpRight className="w-4 h-4 text-amber-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/research"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-lg border border-stone-300 text-sm font-semibold text-stone-700 hover:text-[#153B27] hover:border-[#153B27] active:scale-[0.985] active:translate-y-px transition-all duration-150 min-h-[44px]"
              >
                <span>View Publications Directory</span>
                <ArrowUpRight className="w-4 h-4 text-stone-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
