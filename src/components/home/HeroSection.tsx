'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const heroPillars = [
  {
    numeral: 'I.',
    title: 'Quality',
    description: 'Experience a world-class education and unlock your potential at our university',
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
    description: 'Guided by visionary leadership, inspires growth, and shapes future leaders',
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
    description: 'Embark on a transformative journey of personal and professional growth',
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
    <section className="relative z-30 w-full min-h-screen flex flex-col justify-between bg-[#0C1912] text-white">
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

      {/* Bottom content area — editorial left-to-right balance, vertically centered */}
      <div className="relative z-20 mt-auto w-full pb-44 sm:pb-48 md:pb-52">
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 relative">
          <div className="flex flex-col">
            {/* Bottom-Left — Main Hero Headline & CTAs */}
            <div className="max-w-2xl text-left">
              {/* Headline with italic gold "Innovators" + hand-drawn gold SVG underline */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight text-white leading-[1.08] drop-shadow-md">
                Shaping Scholars &amp;{' '}
                <span className="relative inline-block italic font-serif text-[#E2C07D]">
                  Innovators
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#E2C07D]"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 8 C 40 2, 80 10, 120 6 S 180 2, 198 8"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>{' '}
                in the Heart of Swat
              </h1>

              {/* Subtext */}
              <p className="font-sans text-sm sm:text-base md:text-lg text-white/90 max-w-xl mt-5 leading-[1.65] font-normal drop-shadow-sm">
                Rooted in ancient Gandharan heritage and energized by modern academic zeal, the
                University of Swat provides world-class education, transformative scientific inquiry,
                and regional leadership.
              </p>

              {/* CTAs */}
              <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center bg-[#7F1D1D] hover:bg-[#681818] active:bg-[#521313] active:scale-[0.985] active:translate-y-px text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-lg shadow-lg shadow-black/40 hover:-translate-y-[2px] transition-all duration-150"
                >
                  Explore Programs
                </Link>
                <Link
                  href="/campus-life"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 active:bg-white/15 active:scale-[0.985] active:translate-y-px text-white backdrop-blur-md border border-white/20 font-semibold text-sm sm:text-base px-7 py-3.5 rounded-lg transition-all duration-150 shadow-md shadow-black/20 hover:-translate-y-[2px]"
                >
                  Explore Campus Life
                </Link>
              </div>
            </div>

            {/* Bottom-Right — Compact Frosted-Glass News & Events Widget */}
            <div className="relative w-full mt-8 h-[240px] lg:mt-0 lg:absolute lg:right-4 xl:right-8 lg:top-1/2 lg:-translate-y-1/2 z-20 lg:w-[400px] xl:w-[420px] lg:h-[48vh] lg:min-h-[380px] lg:max-h-[480px] shrink-0">
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
                            className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                              item.category === 'ADMISSIONS'
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
                            className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                              item.category === 'ADMISSIONS'
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

      {/* Three Architectural Crimson Pillars — overlapping the bottom edge onto Warm Alabaster */}
      <div className="absolute bottom-0 inset-x-0 z-30 pointer-events-none">
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 translate-y-[78%] md:translate-y-[82%] pointer-events-auto relative z-30">
            {heroPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="bg-[#7F1D1D] text-white rounded-xl border-t-2 border-[#C8A96E] shadow-[0_18px_42px_-16px_rgba(127,29,29,0.5)] px-3 py-4 sm:px-7 sm:py-6 flex flex-col gap-2 sm:gap-3 transition-all duration-200 ease-out hover:-translate-y-[2px]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif italic text-base sm:text-lg text-[#E0C078]">{pillar.numeral}</span>
                  {pillar.icon}
                </div>
                <h2 className="font-serif text-sm sm:text-xl font-bold tracking-tight">{pillar.title}</h2>
                <p className="font-sans text-white/85 leading-[1.62] text-[11px] sm:text-sm hidden sm:block">{pillar.description}</p>

                {/* Key institutional facts */}
                <div className="hidden sm:flex mt-1 border-t border-white/15 pt-3 flex-col gap-2">
                  {pillar.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between gap-3 text-[13px]">
                      <span className="text-white/70 uppercase tracking-wider font-medium">{stat.label}</span>
                      <span className="text-[#E0C078] font-bold text-right">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
