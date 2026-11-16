'use client';

import { useCallback, useEffect, useState } from 'react';

interface CampusTile {
  id: string;
  image: string;
  title: string;
  description: string;
  alt: string;
  badge?: string;
  featured?: boolean;
}

const tiles: CampusTile[] = [
  {
    id: 'main-campus',
    image: '/campus-shot-1.jpg',
    title: 'Charbagh Main Campus',
    description: 'Central administration, Academic Block C, science laboratories, and 100% green solarized campus facilities.',
    alt: 'Charbagh Main Campus of the University of Swat',
    badge: 'Main Campus',
    featured: true,
  },
  {
    id: 'women-campus',
    image: '/images/campus/women-campus.jpg',
    title: 'Women Campus',
    description: 'Dedicated campus for female students housing the College of Home Sciences, modern biology labs, and specialized facilities.',
    alt: 'Women Campus of the University of Swat',
    badge: 'Women Campus',
  },
  {
    id: 'library',
    image: '/campus-shot-2.jpg',
    title: 'Central Library & Administration',
    description: 'Executive secretariats, automated book catalog, HEC Digital Library access, and dedicated scholar reading halls.',
    alt: 'Central Administration and Library at University of Swat',
    badge: 'Administration',
  },
  {
    id: 'sports',
    image: '/campus-shot-4.jpg',
    title: 'Main Campus Portal & Sports',
    description: 'Official main gate, sports pavilions, cricket grounds, and athletic tournament fields for university varsity teams.',
    alt: 'University of Swat Main Campus Entrance',
    badge: 'Campus Gate',
  },
  {
    id: 'heritage',
    image: '/campus-shot-3.jpg',
    title: 'Swat Valley & Gandhara Heritage',
    description: 'World-famous Gandhara Buddhist stupas, archaeology collaborations with Sri Lankan NIIBS, and valley alpine heritage.',
    alt: 'Gandhara heritage and international research at University of Swat',
    badge: 'Heritage',
  },
];

export default function CampusLifeHeritage() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = tiles.find(t => t.id === activeId) ?? null;

  const close = useCallback(() => setActiveId(null), []);

  useEffect(() => {
    if (!activeId) return undefined;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'Tab') {
        // Minimal focus trap: keep focus inside the dialog while open.
        const dialog = document.querySelector('[role="dialog"]');
        if (!dialog) return;
        const focusables = dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeId, close]);

  return (
    <section
      id="campus-life"
      data-purpose="campus-life-heritage"
      className="relative overflow-hidden py-16 sm:py-20 bg-[#F6F5F0]"
    >
      <div className="absolute -top-24 right-0 w-[400px] h-[400px] rounded-full bg-[#C8A96E]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full bg-[#153B27]/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14 relative z-10">
        {/* Split Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8 sm:mb-10 lg:mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-0.5 w-7 bg-[#7F1D1D]" />
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                Campus Life &amp; Heritage
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-[44px] text-[#14291D] font-bold tracking-[-0.025em] leading-[1.12]">
              Campus life, set in Swat&rsquo;s heritage
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-stone-600 max-w-md lg:text-right leading-[1.68]">
            A tour of the university: Charbagh Main Campus, the Women Campus, libraries, sports, and the Gandharan heritage around the valley.
          </p>
        </div>

        {/* Bento Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {tiles.map(tile => (
            <article
              key={tile.id}
              className={
                tile.featured
                  ? 'group relative min-h-[260px] sm:min-h-[380px] lg:col-span-2 lg:row-span-2 lg:min-h-[520px] rounded-xl border border-stone-300 bg-white shadow-xs overflow-hidden hover:-translate-y-[2px] transition-all duration-200 ease-out'
                  : 'group relative min-h-[220px] rounded-xl border border-stone-300 bg-white shadow-xs overflow-hidden hover:-translate-y-[2px] transition-all duration-200 ease-out'
              }
            >
              <button
                type="button"
                onClick={() => setActiveId(tile.id)}
                className="absolute inset-0 w-full h-full p-0 border-0 bg-transparent cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#153B27] focus-visible:ring-offset-2"
              >
                <img
                  src={tile.image}
                  alt={tile.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                />

                {/* Hairline ring */}
                <span className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_0_0_1px_rgba(231,229,228,0.95)]" />

                {/* Frosted editorial caption */}
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 text-left p-4 sm:p-5 bg-gradient-to-t from-white via-white/90 to-transparent border-t border-stone-200/70 pointer-events-none">
                  {tile.badge && (
                    <span className="inline-block text-[10px] uppercase tracking-widest font-bold text-[#7F1D1D] mb-1">
                      {tile.badge}
                    </span>
                  )}
                  <span className="block font-serif text-base sm:text-lg font-bold text-[#14291D] leading-snug">
                    {tile.title}
                  </span>
                  <span className="block text-xs text-stone-600 leading-[1.5] mt-1 line-clamp-2">
                    {tile.description}
                  </span>
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <div
            className="absolute inset-0 bg-[#0C1912]/95"
            onClick={close}
            aria-hidden="true"
          />
          <figure className="relative max-w-5xl w-full">
            <img
              src={active.image}
              alt={active.alt}
              className="w-full max-h-[72vh] object-contain rounded-lg shadow-2xl"
            />
            <figcaption className="mt-4 text-center">
              <p className="font-serif text-xl font-bold text-white">{active.title}</p>
              <p className="text-sm text-white/70 mt-1 max-w-xl mx-auto">{active.description}</p>
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0C078]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
