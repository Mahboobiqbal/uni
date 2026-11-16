import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative bg-[#F6F5F0] min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Crimson editorial hairline accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-[#7F1D1D]" aria-hidden="true" />

      {/* Ultra-subtle crest watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <img
          src="/uos-logo-circle.png"
          alt=""
          className="h-[70vh] w-auto object-contain opacity-[0.035] select-none"
        />
      </div>

      <div className="relative max-w-xl w-full text-center py-20">
        {/* Official crest in a Muted Gold ring badge */}
        <div className="mx-auto mb-8 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-sm ring-2 ring-[#C8A96E]/50 p-2 flex items-center justify-center">
          <img
            src="/uos-logo-circle.png"
            alt="University of Swat crest"
            className="w-full h-full object-contain"
          />
        </div>

        <p className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold mb-4">
          Error 404 · University of Swat
        </p>

        {/* Oversized serif 404 numeral */}
        <div className="relative" aria-hidden="true">
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 font-serif text-7xl sm:text-8xl text-stone-200/80 select-none whitespace-nowrap">
            404
          </span>
          <h1 className="relative font-serif text-3xl sm:text-5xl text-[#153B27] font-bold tracking-tight leading-[1.08]">
            This page has not been enrolled
          </h1>
        </div>

        <p className="relative text-stone-600 text-base leading-relaxed max-w-md mx-auto mt-5">
          The page you’re looking for may have moved or no longer exists. Use the links below
          to return to the main university portal.
        </p>

        <div className="relative flex flex-wrap items-center justify-center gap-3 mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#153B27] hover:bg-[#0F291B] text-white px-6 py-3 text-sm font-semibold transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-stone-300 hover:border-[#7F1D1D] hover:text-[#7F1D1D] text-stone-800 px-6 py-3 text-sm font-semibold transition-colors"
          >
            Browse All Programs
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/administration"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-stone-300 hover:border-[#153B27] text-stone-800 px-6 py-3 text-sm font-semibold transition-colors"
          >
            Administration &amp; Offices
          </Link>
        </div>
      </div>
    </div>
  );
}
