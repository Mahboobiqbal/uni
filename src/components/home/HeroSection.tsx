'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const heroPillars = [
  {
    numeral: 'I.',
    title: 'Quality',
    description: 'HEC-accredited programs recognized across Pakistan',
    stats: [
      { label: 'HEC Rating', value: '91.4% · W-Category' },
      { label: 'Recognition', value: '100% HEC Recognized' },
    ],
    icon: (
      <svg className="w-5 h-5 text-[#E0C078] shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3.75l1.88 3.81 4.21.61-3.05 2.97.72 4.19L12 15.35l-3.76 1.98.72-4.19-3.05-2.97 4.21-.61L12 5.75z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    numeral: 'II.',
    title: 'Leadership',
    description: 'Led by Vice Chancellor Prof. Dr. Husnul Amin',
    stats: [
      { label: 'Vice Chancellor', value: 'Prof. Dr. Husnul Amin' },
      { label: 'Research Output', value: '200+ High-Impact Papers' },
    ],
    icon: (
      <svg className="w-5 h-5 text-[#E0C078] shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="6" r="2.2" />
        <path d="M12 9.5c-2.2 0-4 1.1-4.4 2.8.5 1.5 2.3 2.4 4.4 2.4s3.9-.9 4.4-2.4c-.4-1.7-2.2-2.8-4.4-2.8z" />
        <circle cx="6" cy="8" r="1.8" opacity="0.75" />
        <path d="M6 11c-1.6 0-3 .8-3.4 2 .4 1.1 1.7 1.8 3.4 1.8.7 0 1.3-.1 1.8-.4-.3-.7-.3-1.4 0-2.1-.5-.8-1.2-1.3-1.8-1.3z" opacity="0.75" />
        <circle cx="18" cy="8" r="1.8" opacity="0.75" />
        <path d="M18 11c1.6 0 3 .8 3.4 2-.4 1.1-1.7 1.8-3.4 1.8-.7 0-1.3-.1-1.8-.4.3-.7.3-1.4 0-2.1.5-.8 1.2-1.3 1.8-1.3z" opacity="0.75" />
      </svg>
    ),
  },
  {
    numeral: 'III.',
    title: 'Experience',
    description: 'Study in the Swat Valley at Charbagh Main Campus',
    stats: [
      { label: 'Students', value: '10,130 Across Degree Levels' },
      { label: 'Campus', value: 'Charbagh · Swat Valley' },
    ],
    icon: (
      <svg className="w-5 h-5 text-[#E0C078] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="8" cy="8" r="2.2" fill="currentColor" stroke="none" />
        <path d="M7 10.2l-.8 3 1.8-.6 1.8.6-.8-3" fill="currentColor" stroke="none" />
        <line x1="10" y1="13.5" x2="16" y2="13.5" />
        <line x1="8" y1="17" x2="16" y2="17" />
      </svg>
    ),
  },
];

interface NewsEventItem {
  type: 'announcement' | 'event';
  category: string;
  title: string;
  date: string;
  announcementId?: number;
  announcementCategory?: string;
  eventHref?: string;
}

const newsEventItems: NewsEventItem[] = [
  {
    type: 'announcement',
    category: 'ADMISSIONS',
    title: 'Spring 2026 Admissions & Merit Lists',
    date: 'Nov 2026',
    announcementId: 2,
    announcementCategory: 'Admissions',
  },
  {
    type: 'event',
    category: 'EVENT',
    title: 'National Symposium on Mountain Biodiversity',
    date: 'Nov 2026',
    eventHref: '/events',
  },
  {
    type: 'announcement',
    category: 'NEWS',
    title: '100% Solar-Powered Main Campus Launch',
    date: 'Oct 2026',
    announcementId: 0,
    announcementCategory: 'News',
  },
  {
    type: 'announcement',
    category: 'ADMISSIONS',
    title: 'Convocation 2026 Registration Notice',
    date: 'Nov 2026',
    announcementId: 2,
    announcementCategory: 'Admissions',
  },
  {
    type: 'announcement',
    category: 'NEWS',
    title: 'ORIC International Research Grants 2026',
    date: 'Oct 2026',
    announcementId: 0,
    announcementCategory: 'News',
  },
];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Respect reduced motion: don't autoplay the video.
  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      const video = videoRef.current;
      if (video) video.pause();
    }
  }, []);

  const handleAnnouncementClick = (item: NewsEventItem) => {
    const announcementsSection = document.getElementById('announcements');
    if (announcementsSection) {
      announcementsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (item.announcementId !== undefined && item.announcementCategory) {
      window.dispatchEvent(
        new CustomEvent('hero-announcement-select', {
          detail: {
            category: item.announcementCategory,
            announcementId: item.announcementId,
          },
        })
      );
    }
  };

  const handleEventClick = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section className="relative z-20 w-full min-h-[580px] sm:min-h-[640px] lg:min-h-screen flex flex-col justify-center overflow-x-clip bg-[#0C1912] text-white pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-28 lg:pb-20">
      {/* Inline keyframes for the seamless vertical auto-scroll loop */}
      <style>{`
        @keyframes hero-widget-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .hero-widget-scroll-track {
          animation: hero-widget-scroll 20s linear infinite;
        }
        .hero-widget-card:hover .hero-widget-scroll-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Video with Poster Fallback & Multi-stop Cinematic Vignette Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/campus-shot-1.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="/1114.mp4" type="video/mp4" />
          <source src="/swat-university.mp4" type="video/mp4" />
        </video>

        {/* Vignette dissolves from Forest Obsidian into Warm Alabaster at the fold */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(8,15,11,0.75) 0%, rgba(8,15,11,0.45) 45%, rgba(246,245,240,0.12) 88%, rgba(246,245,240,0.42) 97%, #F6F5F0 100%)'
          }}
        />
      </div>

      {/* Bottom content area — centered on mobile, editorial left-to-right on desktop */}
      <div className="relative z-20 w-full flex flex-col justify-center items-center text-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:py-32 lg:items-start lg:text-left">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14 relative">
          <div className="flex flex-col">
            {/* Bottom-Left — Main Hero Headline & CTAs */}
            <div className="max-w-2xl flex flex-col items-center lg:items-start">
              {/* Headline — balanced 2-line structure, research ↔ student */}
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-md text-balance">
                Where Rigorous Research
                <span className="block mt-1">
                  Meets Student{' '}
                  <span className="italic text-[#C8A96E] underline decoration-[#C8A96E]/80 decoration-2 underline-offset-8 whitespace-nowrap">
                    Discovery
                  </span>
                </span>
              </h1>

              {/* Subtext */}
              <p className="font-sans text-stone-200/95 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mt-4">
                A chartered public university in Swat Valley uniting 250+ dedicated faculty and 10,000+ scholars across 73 HEC-recognized degrees.
              </p>

              {/* CTAs */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/programs"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#7F1D1D] hover:bg-[#681818] active:bg-[#521313] active:scale-[0.985] active:translate-y-px text-white font-semibold text-sm sm:text-base px-7 sm:px-8 py-3.5 rounded-lg shadow-lg shadow-black/40 hover:-translate-y-[2px] transition-all duration-150"
                >
                  Explore Programs
                </Link>
                <Link
                  href="/campus-life"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 active:bg-white/15 active:scale-[0.985] active:translate-y-px text-white backdrop-blur-md border border-white/20 font-semibold text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-lg transition-all duration-150 shadow-md shadow-black/20 hover:-translate-y-[2px]"
                >
                  Explore Campus Life
                </Link>
              </div>
            </div>

            {/* Bottom-Right — Compact Frosted-Glass News & Events Widget (desktop only) */}
            <div className="hidden lg:block relative w-full mt-8 h-[240px] lg:mt-0 lg:absolute lg:right-4 xl:right-8 lg:top-1/2 lg:-translate-y-1/2 z-20 lg:w-[400px] xl:w-[420px] lg:h-[48vh] lg:min-h-[380px] lg:max-h-[480px] shrink-0">
              {/* Organic multi-lobe mesh blur cluster — full text coverage, zero rectangular edges */}
              <div className="absolute -inset-20 -z-10 pointer-events-none">
                {/* Layer 1 (Full-Text Consistent Core) */}
                <div
                  className="absolute inset-4 rounded-full bg-black/15 backdrop-blur-md"
                  style={{
                    maskImage: 'radial-gradient(closest-side, black 62%, rgba(0,0,0,0.6) 80%, transparent 98%)',
                    WebkitMaskImage: 'radial-gradient(closest-side, black 62%, rgba(0,0,0,0.6) 80%, transparent 98%)',
                  }}
                />
                {/* Layer 2 (Top-Right Organic Extension — covers All Updates →) */}
                <div
                  className="absolute top-2 right-2 w-[78%] h-[65%] rounded-full bg-transparent backdrop-blur-md"
                  style={{
                    maskImage: 'radial-gradient(closest-side, black 55%, rgba(0,0,0,0.4) 78%, transparent 96%)',
                    WebkitMaskImage: 'radial-gradient(closest-side, black 55%, rgba(0,0,0,0.4) 78%, transparent 96%)',
                  }}
                />
                {/* Layer 3 (Bottom-Right Organic Extension) */}
                <div
                  className="absolute bottom-2 right-4 w-[80%] h-[65%] rounded-full bg-transparent backdrop-blur-md"
                  style={{
                    maskImage: 'radial-gradient(closest-side, black 55%, rgba(0,0,0,0.4) 78%, transparent 96%)',
                    WebkitMaskImage: 'radial-gradient(closest-side, black 55%, rgba(0,0,0,0.4) 78%, transparent 96%)',
                  }}
                />
                {/* Layer 4 (Left-Edge Organic Softener) */}
                <div
                  className="absolute top-6 left-2 w-[75%] h-[82%] rounded-full bg-transparent backdrop-blur-md"
                  style={{
                    maskImage: 'radial-gradient(closest-side, black 55%, rgba(0,0,0,0.35) 78%, transparent 96%)',
                    WebkitMaskImage: 'radial-gradient(closest-side, black 55%, rgba(0,0,0,0.35) 78%, transparent 96%)',
                  }}
                />
              </div>
              <div
                className="hero-widget-card p-6 h-full flex flex-col drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)]"
              >
                {/* Widget Header */}
                <div className="flex items-center justify-between pb-2.5 border-b border-white/15 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#E2C07D]">
                      Latest News &amp; Events
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const section = document.getElementById('announcements');
                      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="text-[11px] text-white/80 hover:text-white transition-colors"
                  >
                    All Updates →
                  </button>
                </div>

                {/* Auto-scrolling items viewport */}
                <div
                  className="flex-1 overflow-hidden relative"
                  style={{
                    maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                  }}
                >
                  <div className="hero-widget-scroll-track">
                    {/* First set of items */}
                    {newsEventItems.map((item, idx) => (
                      <button
                        key={`a-${idx}`}
                        type="button"
                        onClick={() => {
                          if (item.type === 'announcement') {
                            handleAnnouncementClick(item);
                          } else {
                            handleEventClick();
                          }
                        }}
                        className="w-full text-left py-2.5 px-2 -mx-2 rounded-lg group hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${item.category === 'ADMISSIONS'
                                ? 'bg-[#7F1D1D] text-white'
                                : item.category === 'EVENT'
                                  ? 'bg-[#153B27] text-white'
                                  : 'bg-white/20 text-white'
                              }`}
                          >
                            {item.category}
                          </span>
                          <span className="text-[10px] text-white/60 font-medium">{item.date}</span>
                        </div>
                        <p className="text-xs font-semibold text-white leading-snug group-hover:text-[#E2C07D] transition-colors">
                          {item.title}
                        </p>
                      </button>
                    ))}
                    {/* Duplicated set for seamless loop */}
                    {newsEventItems.map((item, idx) => (
                      <button
                        key={`b-${idx}`}
                        type="button"
                        onClick={() => {
                          if (item.type === 'announcement') {
                            handleAnnouncementClick(item);
                          } else {
                            handleEventClick();
                          }
                        }}
                        className="w-full text-left py-2.5 px-2 -mx-2 rounded-lg group hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${item.category === 'ADMISSIONS'
                                ? 'bg-[#7F1D1D] text-white'
                                : item.category === 'EVENT'
                                  ? 'bg-[#153B27] text-white'
                                  : 'bg-white/20 text-white'
                              }`}
                          >
                            {item.category}
                          </span>
                          <span className="text-[10px] text-white/60 font-medium">{item.date}</span>
                        </div>
                        <p className="text-xs font-semibold text-white leading-snug group-hover:text-[#E2C07D] transition-colors">
                          {item.title}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </section>

      {/* Three Architectural Crimson Pillars — standalone section distinctly below the hero fold */}
      <section
        className="relative z-20 w-full bg-[#F6F5F0] pt-8 pb-6 sm:pt-14 sm:pb-8 lg:pt-16 lg:pb-10"
        aria-label="Core Institutional Pillars"
        id="core-pillars"
      >
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14">
          {/* Mobile: Horizontal swipeable rail with compact cards. Desktop: 3-column grid */}
          <div className="flex md:grid md:grid-cols-3 gap-3.5 md:gap-5 lg:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none momentum-scroll -mt-8 sm:-mt-10 pb-2 px-1">
            {heroPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="w-[78vw] min-w-[260px] max-w-[295px] shrink-0 snap-start md:w-auto md:min-w-0 md:max-w-none md:shrink bg-[#7F1D1D] text-white rounded-xl sm:rounded-2xl border-t-2 border-[#C8A96E] shadow-[0_12px_28px_-10px_rgba(127,29,29,0.35)] p-4 sm:p-6 lg:p-7 flex flex-col gap-2 sm:gap-3 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_20px_42px_-10px_rgba(127,29,29,0.45)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif italic text-sm sm:text-lg text-[#E0C078]">{pillar.numeral}</span>
                  {pillar.icon}
                </div>
                <h2 className="font-serif text-base sm:text-xl lg:text-2xl font-bold tracking-tight">{pillar.title}</h2>
                <p className="font-sans text-white/90 leading-snug text-xs sm:text-sm">{pillar.description}</p>

                {/* Key institutional facts */}
                <div className="mt-auto border-t border-white/15 pt-2.5 sm:pt-3.5 flex flex-col gap-1.5 sm:gap-2">
                  {pillar.stats.map((stat) => (
                    <div key={stat.label} className="flex items-baseline justify-between gap-2 text-xs sm:text-[13px]">
                      <span className="text-white/70 uppercase tracking-wider font-medium text-[10.5px] sm:text-xs shrink-0">{stat.label}</span>
                      <span className="text-[#E0C078] font-bold text-right text-[11.5px] sm:text-[13px]">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Mobile subtle swipe indicator dots */}
          <div className="flex md:hidden items-center justify-center gap-1.5 pt-2" aria-hidden="true">
            <span className="h-1 w-5 rounded-full bg-[#7F1D1D]/70" />
            <span className="h-1 w-1.5 rounded-full bg-[#7F1D1D]/25" />
            <span className="h-1 w-1.5 rounded-full bg-[#7F1D1D]/25" />
          </div>
        </div>
      </section>
    </>
  );
}
