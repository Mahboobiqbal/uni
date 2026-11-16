'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Track {
  label: string;
  href: string;
}

interface ProgramArea {
  id: string;
  index: string;
  title: string;
  degrees: string;
  levels: string[];
  description: string;
  image: string;
  imageAlt: string;
  tracks: Track[];
  ctaLabel: string;
  ctaHref: string;
}

const programAreas: ProgramArea[] = [
  {
    id: 'computing',
    index: '01',
    title: 'Computing & IT',
    degrees: '9',
    levels: ['BS', 'MS / MPhil', 'PhD'],
    description:
      'Artificial intelligence, software engineering, data networks and cybersecurity across four-year and graduate programs.',
    image: '/images/campus/main-campus-gate.jpeg',
    imageAlt: 'University of Swat academic gate',
    tracks: [
      { label: 'BS Computer Science', href: '/programs/bs-computer-science' },
      { label: 'BS Software Engineering', href: '/programs/bs-software-engineering' },
      { label: 'MS Computer Science', href: '/departments/computer-software-technology' },
    ],
    ctaLabel: 'Explore Computing & IT Programs',
    ctaHref: '/programs',
  },
  {
    id: 'sciences',
    index: '02',
    title: 'Sciences',
    degrees: '12',
    levels: ['BS', 'MS / MPhil', 'PhD'],
    description:
      'Chemistry, physics, botany, zoology, microbiology, biotechnology and environmental sciences with strong alpine-field research.',
    image: '/campus-shot-2.jpg',
    imageAlt: 'University of Swat academic science complex',
    tracks: [
      { label: 'BS Chemistry', href: '/programs/bs-chemistry' },
      { label: 'BS Environmental Sciences', href: '/programs/bs-environmental-sciences' },
      { label: 'M.Phil Chemistry', href: '/departments/chemistry' },
    ],
    ctaLabel: 'Explore Sciences Programs',
    ctaHref: '/programs',
  },
  {
    id: 'management',
    index: '03',
    title: 'Management Sciences',
    degrees: '7',
    levels: ['BBA', 'MBA / MS', 'PhD'],
    description:
      'Business administration, economics, tourism and hospitality management with a focus on regional entrepreneurship.',
    image: '/images/campus/charbagh-campus.jpg',
    imageAlt: 'University of Swat Charbagh Main Campus',
    tracks: [
      { label: 'BBA (Hons)', href: '/programs/bba-hons' },
      { label: 'MBA / MS', href: '/departments/management-commerce' },
      { label: 'PhD Management', href: '/departments/management-commerce' },
    ],
    ctaLabel: 'Explore Management Programs',
    ctaHref: '/programs',
  },
  {
    id: 'law',
    index: '04',
    title: 'Law & Legal Studies',
    degrees: '8',
    levels: ['LLB', 'LLM', 'MPhil'],
    description:
      'LLB and LLM programs covering constitutional, Islamic (Sharia) and criminal law, plus public administration studies.',
    image: '/campus-shot-1.jpg',
    imageAlt: 'University of Swat academic block and lecture halls',
    tracks: [
      { label: 'LLB (Integrated)', href: '/programs/ba-llb-law-and-shariah' },
      { label: 'LLM', href: '/departments/law-shariah' },
      { label: 'M.Phil Law', href: '/departments/law-shariah' },
    ],
    ctaLabel: 'Explore Law Programs',
    ctaHref: '/programs',
  },
  {
    id: 'humanities',
    index: '05',
    title: 'Humanities & Languages',
    degrees: '10',
    levels: ['BS / BA', 'MA / MPhil', 'PhD'],
    description:
      'English, Urdu, Pashto, Islamic studies, history, sociology and applied psychology across undergraduate and graduate levels.',
    image: '/campus-shot-3.jpg',
    imageAlt: 'Swat Valley alpine landscape and heritage',
    tracks: [
      { label: 'MA / M.Phil English', href: '/departments/english-foreign-languages' },
      { label: 'PhD Islamic Studies', href: '/departments/islamic-arabic-studies' },
      { label: 'BA / BS Humanities', href: '/faculty' },
    ],
    ctaLabel: 'Explore Humanities Programs',
    ctaHref: '/programs',
  },
];

export default function AcademicShowcase() {
  const [activeId, setActiveId] = useState(programAreas[0].id);
  const active = programAreas.find((a) => a.id === activeId) ?? programAreas[0];
  const spotlightRef = React.useRef<HTMLDivElement>(null);

  const handleSelectArea = (id: string, isClick = false) => {
    setActiveId(id);
    if (isClick && typeof window !== 'undefined' && window.innerWidth < 1024) {
      spotlightRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch mt-8 sm:mt-10">
      {/* ── Left: Interactive 5-Row Architectural Index ─────────────────── */}
      <div className="lg:col-span-7 flex flex-col gap-2.5 sm:gap-3">
        {programAreas.map((area) => {
          const isActive = area.id === activeId;
          return (
            <button
              key={area.id}
              type="button"
              onMouseEnter={() => handleSelectArea(area.id, false)}
              onClick={() => handleSelectArea(area.id, true)}
              className={`text-left flex flex-col justify-between gap-2.5 sm:gap-3 rounded-xl px-4 py-3.5 sm:px-6 sm:py-4 transition-all duration-300 cursor-pointer ${isActive
                  ? 'bg-[#153B27] text-white border-l-4 border-l-[#C8A96E] shadow-lg lg:translate-x-1.5'
                  : 'bg-white border border-stone-200 hover:border-[#153B27]'
                }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <span
                    className={`font-serif text-lg font-bold ${isActive ? 'text-[#C8A96E]' : 'text-[#7F1D1D]'
                      }`}
                  >
                    {area.index}
                  </span>
                  <span
                    className={`font-serif text-lg sm:text-xl font-bold tracking-[-0.01em] ${isActive ? 'text-white' : 'text-[#14291D]'
                      }`}
                  >
                    {area.title}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {area.levels.map((level) => (
                    <span
                      key={level}
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold ${isActive
                          ? 'text-[#D4B87A] bg-[#C8A96E]/15 border border-[#C8A96E]/30'
                          : 'text-[#153B27] bg-[#153B27]/8 border border-[#153B27]/15'
                        }`}
                    >
                      {level}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-medium ${isActive ? 'text-white/70' : 'text-stone-500'
                    }`}
                >
                  {area.description.slice(0, 72)}…
                </span>
                <span
                  className={`shrink-0 text-xs font-bold uppercase tracking-wider pl-3 ${isActive ? 'text-[#C8A96E]' : 'text-[#7F1D1D]'
                    }`}
                >
                  {area.degrees} Programs
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Right: Dynamic Photographic Spotlight Card ─────────────────── */}
      <div ref={spotlightRef} className="lg:col-span-5 bg-[#153B27] text-white rounded-2xl overflow-hidden border-t-4 border-t-[#7F1D1D] shadow-2xl flex flex-col justify-between">
        {/* Crossfading image */}
        <div key={active.id} className="animate-backdrop-fade">
          <div className="relative h-56 overflow-hidden">
            <img
              src={active.image}
              alt={active.imageAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#153B27] via-[#153B27]/30 to-transparent" />
            <span className="absolute bottom-4 left-5 inline-flex items-center bg-[#7F1D1D] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              {active.degrees} Degree Programs
            </span>
          </div>

          <div className="p-7 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold text-white">{active.title}</h3>
              <p className="text-stone-200 text-sm leading-relaxed mt-2">
                {active.description}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-white/15">
              <p className="text-[10px] tracking-widest uppercase text-[#C8A96E] font-bold">
                Popular Tracks
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.tracks.map((track) => (
                  <Link
                    key={track.label}
                    href={track.href}
                    className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[12px] font-semibold text-white transition-colors hover:bg-white/20 hover:border-white/40"
                  >
                    {track.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href={active.ctaHref}
              className="mt-6 inline-flex w-full sm:w-auto items-center justify-between sm:justify-center gap-3 bg-[#7F1D1D] hover:bg-[#991B1B] text-white font-semibold py-3.5 px-5 rounded-xl transition-colors group min-h-[44px]"
            >
              <span>{active.ctaLabel}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
