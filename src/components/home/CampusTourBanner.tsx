'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, Eye, MapPin, Play, X } from 'lucide-react';

export default function CampusTourBanner() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section
      id="campus-tour"
      data-purpose="campus-tour-banner"
      className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#0C1912] text-white"
    >
      {/* Background Scenic Image with Parallax & Dark Vignette */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <img
          src="/images/campus/charbagh-campus.jpg"
          alt="University of Swat Charbagh Campus Landscape"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1912]/90 via-[#0C1912]/75 to-[#0C1912]/85" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0C1912]/50 to-[#0C1912]" />
      </div>

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-emerald-300 uppercase tracking-widest mb-6">
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span>Charbagh · Swat Valley · Khyber Pakhtunkhwa</span>
        </div>

        {/* Display Serif Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.025em] max-w-4xl mx-auto leading-[1.12] mb-6 text-white drop-shadow-sm">
          Experience the University of Swat Firsthand
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-stone-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Walk across our 350-canal solar-powered campus, tour high-tech computing labs,
          and discover why scholars from across Pakistan choose to study in the heart of the Swat Valley.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/campuses/main-campus"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#7F1D1D] hover:bg-[#681818] hover:-translate-y-[2px] active:scale-[0.985] active:translate-y-px text-white text-base font-semibold shadow-lg transition-all duration-150 group"
          >
            <span>Plan an On-Campus Visit</span>
            <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            type="button"
            onClick={() => setIsVideoModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 hover:-translate-y-[2px] active:scale-[0.985] active:translate-y-px text-white text-base font-semibold backdrop-blur-md border border-white/20 transition-all duration-150 group"
          >
            <span className="w-6 h-6 rounded-full bg-emerald-500/30 flex items-center justify-center text-emerald-300 group-hover:scale-105 transition-transform">
              <Play className="w-3.5 h-3.5 fill-current" />
            </span>
            <span>Watch Campus Video Tour</span>
          </button>
        </div>

        {/* Campus key stats pill row */}
        <div className="mt-14 pt-8 border-t border-white/15 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-xl sm:text-2xl font-serif font-bold text-white">350+</p>
            <p className="text-[11px] text-stone-400 uppercase tracking-wider mt-0.5">Canal Grounds</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-serif font-bold text-emerald-400">100%</p>
            <p className="text-[11px] text-stone-400 uppercase tracking-wider mt-0.5">Green Solarized</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-serif font-bold text-amber-300">28</p>
            <p className="text-[11px] text-stone-400 uppercase tracking-wider mt-0.5">Academic Depts</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-serif font-bold text-white">10,130</p>
            <p className="text-[11px] text-stone-400 uppercase tracking-wider mt-0.5">Active Scholars</p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(false)}
              aria-label="Close video"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video w-full bg-black">
              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
                poster="/campus-shot-1.jpg"
              >
                <source src="/1114.mp4" type="video/mp4" />
                <source src="/swat-university.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
