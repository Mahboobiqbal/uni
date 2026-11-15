import Link from 'next/link';
import { ArrowUpRight, GraduationCap } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center py-20">
        <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-[#153B27] border border-white/10 shadow-[0_24px_48px_-22px_rgba(12,25,18,0.5)] flex items-center justify-center">
          <GraduationCap className="w-7 h-7 text-[#C8A96E]" />
        </div>

        <p className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold mb-4">
          Error 404 · University of Swat
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl text-[#14291D] font-bold tracking-[-0.025em] leading-[1.05] mb-5">
          This page has not been enrolled
        </h1>
        <p className="text-stone-600 text-base leading-relaxed max-w-md mx-auto mb-10">
          The page you are looking for does not exist or has moved. The Registrar&rsquo;s office
          suggests starting from one of the campuses below.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#153B27] text-white text-sm font-semibold hover:bg-[#14291D] transition-colors"
          >
            Return home
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-stone-300 text-stone-700 text-sm font-semibold hover:bg-stone-50 transition-colors"
          >
            Browse programs
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-stone-300 text-stone-700 text-sm font-semibold hover:bg-stone-50 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
