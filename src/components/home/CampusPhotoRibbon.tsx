'use client';

import React from 'react';
import Link from 'next/link';
import { Camera, ExternalLink, Sparkles } from 'lucide-react';

interface GalleryPhoto {
  id: string;
  image: string;
  caption: string;
  category: string;
}

const photos: GalleryPhoto[] = [
  {
    id: 'photo-1',
    image: '/images/campus/main-campus-gate.jpeg',
    caption: 'Official Charbagh Campus Portal & Main Gates',
    category: 'Campus Grounds',
  },
  {
    id: 'photo-2',
    image: '/images/campus/admin-block.jpg',
    caption: 'Central Administration Block & Scholar Halls',
    category: 'Academics',
  },
  {
    id: 'photo-3',
    image: '/images/campus/women-campus.jpg',
    caption: 'Dedicated Women Sub-Campus Facilities',
    category: 'Student Life',
  },
  {
    id: 'photo-4',
    image: '/images/facilities/oric-building.jpeg',
    caption: 'ORIC Research Center & Technology Incubators',
    category: 'Innovation',
  },
  {
    id: 'photo-5',
    image: '/images/campus/charbagh-campus.jpg',
    caption: 'Alpine Campus Block C & Solar Energy Grid',
    category: 'Green Campus',
  },
  {
    id: 'photo-6',
    image: '/images/campus/heritage-swat.jpg',
    caption: 'Swat Valley Heritage & Field Archeology',
    category: 'Fieldwork',
  },
];

export default function CampusPhotoRibbon() {
  return (
    <section
      id="campus-life-ribbon"
      data-purpose="campus-photo-ribbon"
      className="py-16 sm:py-20 bg-white border-t border-stone-300 overflow-hidden"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Camera className="w-4 h-4 text-[#7F1D1D]" />
            <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
              Moments &amp; Campus Spirit
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#14291D] font-bold tracking-tight">
            Life Across Our Swat Valley Campuses
          </h3>
        </div>

        <Link
          href="/campus-life"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#153B27] hover:text-[#0C1912] active:scale-[0.985] active:translate-y-px transition-all duration-150"
        >
          <svg className="w-4 h-4 text-[#7F1D1D] fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span>Follow @UniversityOfSwatOfficial</span>
        </Link>
      </div>

      {/* 6-Photo Responsive Strip with Strict 1360px Edge Alignment */}
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {photos.map((p) => (
            <Link
              key={p.id}
              href="/campus-life"
              className="group relative aspect-square rounded-xl overflow-hidden bg-stone-100 border border-stone-200/80 shadow-xs block hover:-translate-y-[2px] transition-all duration-200 ease-out"
            >
              <img
                src={p.image}
                alt={p.caption}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              />
              {/* Frosted hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1912]/85 via-[#0C1912]/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 text-white">
                <span className="text-[9px] font-bold uppercase tracking-wider text-amber-300">
                  {p.category}
                </span>
                <p className="text-xs font-serif font-bold leading-tight mt-0.5 line-clamp-2">
                  {p.caption}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
