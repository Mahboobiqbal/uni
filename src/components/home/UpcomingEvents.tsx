'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Clock, MapPin, Tag } from 'lucide-react';

interface EventItem {
  id: string;
  month: string;
  day: string;
  year: string;
  category: string;
  title: string;
  time: string;
  venue: string;
  description: string;
  image: string;
  badgeTone: string;
}

const events: EventItem[] = [
  {
    id: 'eco-symposium-2026',
    month: 'DEC',
    day: '12',
    year: '2026',
    category: 'International Symposium',
    title: 'National Symposium on Mountain Biodiversity & Alpine Water Security',
    time: '09:30 AM – 04:30 PM PKT',
    venue: 'Main Auditorium · Charbagh Campus',
    description: 'Climate scientists discuss Hindu Kush glacial melt and protecting Swat alpine plants.',
    image: '/images/news/news-symposium-nov2026.jpeg',
    badgeTone: 'bg-[#153B27] text-white',
  },
  {
    id: 'sports-gala-2026',
    month: 'DEC',
    day: '18',
    year: '2026',
    category: 'Sports & Athletics',
    title: 'Annual Inter-Faculty Sports Tournament & Athletics Championship',
    time: '10:00 AM – 05:00 PM PKT',
    venue: 'Sports Grounds · Main Campus',
    description: 'University varsity teams compete in cricket, football, volleyball, and track events for the prestigious Chancellor Trophy.',
    image: '/images/campus/main-campus-gate.jpeg',
    badgeTone: 'bg-[#7F1D1D] text-white',
  },
  {
    id: 'gandhara-heritage-2027',
    month: 'JAN',
    day: '08',
    year: '2027',
    category: 'Cultural Heritage',
    title: 'Gandhara Archaeological Excavations & Italian Mission Colloquium',
    time: '11:00 AM – 03:00 PM PKT',
    venue: 'Archaeology Center · Sub-Campus',
    description: 'Researchers share new findings from Buddhist monastery digs across the Swat Valley.',
    image: '/images/news/news-italian-mission-oct2026.jpeg',
    badgeTone: 'bg-[#B48A3E] text-white',
  },
  {
    id: 'hackathon-ai-2027',
    month: 'JAN',
    day: '22',
    year: '2027',
    category: 'Computing & AI',
    title: 'Swat Valley IT Hackathon: Machine Learning for Mountain Agriculture',
    time: '09:00 AM – 08:00 PM PKT',
    venue: 'Academic Block C · Computer Labs',
    description: 'A 36-hour sprint for undergraduate software engineering teams designing automated plant pathology tools.',
    image: '/images/facilities/oric-building.jpeg',
    badgeTone: 'bg-[#153B27] text-white',
  },
];

export default function UpcomingEvents() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="events"
      data-purpose="upcoming-events"
      className="py-20 sm:py-28 bg-[#F6F5F0] relative overflow-hidden"
    >
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14 relative z-10">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-0.5 w-7 bg-[#7F1D1D]" />
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                Campus Calendar &amp; Gatherings
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#14291D] font-bold tracking-[-0.025em] leading-[1.14]">
              Upcoming Events &amp; Academic Symposia
            </h2>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/events"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#153B27] hover:underline underline-offset-4 mr-2"
            >
              <span>View Full Calendar</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Slider Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={scrollLeft}
                aria-label="Previous events"
                className="w-10 h-10 rounded-full border border-stone-300 bg-white hover:bg-[#153B27] hover:text-white hover:border-[#153B27] active:scale-95 flex items-center justify-center text-stone-700 shadow-xs transition-all duration-150"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={scrollRight}
                aria-label="Next events"
                className="w-10 h-10 rounded-full border border-stone-300 bg-white hover:bg-[#153B27] hover:text-white hover:border-[#153B27] active:scale-95 flex items-center justify-center text-stone-700 shadow-xs transition-all duration-150"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Card Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory momentum-scroll"
        >
          {events.map((event) => (
            <article
              key={event.id}
              className="group relative flex-none w-[84vw] max-w-[340px] sm:w-[350px] lg:w-[390px] rounded-2xl border border-stone-300 bg-white shadow-xs overflow-hidden snap-start transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-xl first:bg-[#153B27] first:text-white first:border-white/10 first:shadow-[0_24px_48px_-22px_rgba(12,25,18,0.5)] first:hover:bg-[#0F2D1E] first:hover:shadow-[0_28px_56px_-24px_rgba(12,25,18,0.55)]"
            >
              {/* Event Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.025] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Calendar Date Badge */}
                <div className="absolute top-4 left-4 rounded-xl bg-white/95 backdrop-blur-md shadow-md text-center px-3 py-1.5 border border-stone-200/80">
                  <span className="block text-[10px] font-bold tracking-widest text-[#7F1D1D] uppercase">
                    {event.month}
                  </span>
                  <span className="block text-2xl font-serif font-bold text-[#14291D] leading-none">
                    {event.day}
                  </span>
                </div>

                {/* Category Pill */}
                <div className="absolute bottom-3 left-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide ${event.badgeTone}`}
                  >
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 flex flex-col h-[230px]">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#14291D] group-first:text-white leading-snug line-clamp-2 group-hover:text-[#153B27] group-first:group-hover:text-[#C8A96E] transition-colors mb-2.5">
                  {event.title}
                </h3>

                <p className="text-xs text-stone-600 group-first:text-white/70 line-clamp-2 leading-relaxed mb-4">
                  {event.description}
                </p>

                {/* Time & Venue */}
                <div className="mt-auto space-y-1.5 pt-3 border-t border-stone-200 group-first:border-white/15 text-xs text-stone-500 group-first:text-white/65">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-stone-500 group-first:text-[#C8A96E] shrink-0" />
                    <span className="truncate">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-stone-500 group-first:text-[#C8A96E] shrink-0" />
                    <span className="truncate">{event.venue}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#153B27]"
          >
            <span>View Full University Calendar</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
