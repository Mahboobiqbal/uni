import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Award, Building2, Landmark, ShieldCheck, Sun } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'About University of Swat | History, Heritage & Mission',
  description: 'History, vision, strategic roadmap, and Gandhara cultural heritage of the University of Swat.',
};

const campusValues = [
  {
    icon: ShieldCheck,
    accent: 'text-[#153B27]',
    text: 'Meritocracy, transparency, and academic integrity',
  },
  {
    icon: Sun,
    accent: 'text-[#7F1D1D]',
    text: '100% green solarized campus infrastructure',
  },
  {
    icon: Building2,
    accent: 'text-[#153B27]',
    text: 'Dedicated Women Campus & College of Home Sciences',
  },
  {
    icon: Award,
    accent: 'text-[#7F1D1D]',
    text: 'HEC W-Category 91.4% rating maintained',
  },
] as const;

export default function AboutPage() {
  return (
    <div id="main-content" className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Institutional Profile"
        title="About the University of Swat"
        subtitle="Aspiring for Quality Education with Relevance in the historic, alpine cradle of Gandhara civilization."
        eyebrow="History, Vision &amp; Strategic Roadmap"
      />

      {/* ─── Section 1 · The Valley of Swat — editorial split ─────────────────── */}
      <section id="valley" className="py-12 sm:py-24">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="h-0.5 w-7 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">
                  The Valley of Swat (Uddiyana)
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-[42px] text-[#14291D] font-bold tracking-[-0.025em] leading-[1.14]">
                Where Ancient Gandhara Meets Modern Intellect
              </h2>

              <p className="font-sans text-stone-600 text-sm sm:text-lg leading-[1.75]">
                The lush green forests, running clear streams, and historic Swat Valley lies between 34°-40′ to 35°N latitude and 72′ to 74°-6′ E longitude. The valley is an integral part of the strategic and significant region where three parts of the Asian continent&mdash;South Asia, Central Asia and China&mdash;meet.
              </p>

              <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed">
                The River Swat is a clear water river starting from the Ushu mountain range to the wide spread of the valley. Swat was historically known as Uddiyana (the garden), famous worldwide for its Buddhist stupas, rock carvings, ancient monastic sanctuaries, and peaceful hospitality inherited from the historic era of the Wali of Swat.
              </p>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div
                  className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#153B27]/15 via-[#C8A96E]/15 to-transparent blur-xl pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative rounded-2xl overflow-hidden border border-stone-300/80 shadow-xl bg-white aspect-[4/3] group">
                  <img
                    src="/images/campus/charbagh-campus.jpg"
                    alt="University of Swat Charbagh Main Campus set in the green foothills of the Swat Valley"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.025] transition-transform duration-500 ease-out"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0C1912]/50 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Section 2 · Founding statement — full-width photo band ───────────── */}
      <section
        id="founding"
        className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#0C1912] text-white"
      >
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <img
            src="/images/campus/14_img.jpeg"
            alt="University of Swat campus grounds at the foothills of the Swat Valley"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C1912]/90 via-[#0C1912]/75 to-[#0C1912]/85" aria-hidden="true" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#0C1912]/50 to-[#0C1912]" aria-hidden="true" />
        </div>

        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#E5CD9B] uppercase tracking-widest mb-6">
            <Landmark className="w-3.5 h-3.5 text-[#C8A96E]" />
            <span>Established 2010 &middot; Government of Khyber Pakhtunkhwa Charter</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.025em] max-w-4xl mx-auto leading-[1.12] mb-6 text-white drop-shadow-sm">
            A Young University in the Ancient Cradle of Gandhara
          </h2>

          <p className="font-sans text-stone-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-12">
            The University of Swat was formally chartered in 2010 by the Government of Khyber Pakhtunkhwa to advance higher education in Swat, Shangla, Buner, and neighboring districts&mdash;growing from humble beginnings into a purpose-built, 100% solarized academic community in Charbagh.
          </p>

          <div className="pt-8 border-t border-white/15 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-xl sm:text-2xl font-serif font-bold text-white">2010</p>
              <p className="text-[11px] text-stone-400 uppercase tracking-wider mt-0.5">Chartered</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-serif font-bold text-emerald-400">6,000+</p>
              <p className="text-[11px] text-stone-400 uppercase tracking-wider mt-0.5">Active Scholars</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-serif font-bold text-amber-300">28</p>
              <p className="text-[11px] text-stone-400 uppercase tracking-wider mt-0.5">Teaching Departments</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-serif font-bold text-white">3</p>
              <p className="text-[11px] text-stone-400 uppercase tracking-wider mt-0.5">Campuses</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 3 · Motto, mission & values — editorial split ────────────── */}
      <section id="mission" className="py-12 sm:py-24">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

            <div className="lg:col-span-7 space-y-7">
              <div className="space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="h-0.5 w-7 bg-[#7F1D1D]" />
                  <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                    Motto &amp; Values
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-4xl lg:text-[42px] text-[#14291D] font-bold tracking-[-0.025em] leading-[1.14]">
                  Aspiring for Quality Education with Relevance
                </h2>

                <p className="font-sans text-stone-600 text-sm sm:text-lg leading-[1.75]">
                  Our academic philosophy centers on &ldquo;relevance&rdquo;&mdash;ensuring that our research programs in botany, geology, environmental resilience, law, business, and software engineering directly address the industrial and environmental imperatives of northern Pakistan.
                </p>
              </div>

              {/* Statutory leadership strip */}
              <div className="rounded-2xl bg-[#7F1D1D] text-white border border-[#661717] shadow-[0_24px_48px_-22px_rgba(102,23,23,0.5)] p-5 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <strong className="block text-white text-sm font-semibold">Governor of Khyber Pakhtunkhwa</strong>
                    <span className="text-xs text-[#E5CD9B] font-medium">Chancellor</span>
                  </div>
                  <div className="sm:border-l sm:border-white/20 sm:pl-4">
                    <strong className="block text-white text-sm font-semibold">Prof. Dr. Husnul Amin</strong>
                    <span className="text-xs text-[#E5CD9B] font-medium">Vice Chancellor</span>
                  </div>
                </div>
              </div>

              {/* Values checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {campusValues.map((value) => (
                  <div
                    key={value.text}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-stone-300 shadow-xs hover:border-stone-400 hover:-translate-y-[2px] transition-all duration-200 ease-out"
                  >
                    <value.icon className={`w-5 h-5 ${value.accent} shrink-0 mt-0.5`} aria-hidden="true" />
                    <p className="text-xs font-medium text-stone-700 leading-relaxed">{value.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div
                  className="absolute -inset-3 rounded-2xl bg-gradient-to-tl from-[#7F1D1D]/15 via-[#153B27]/10 to-transparent blur-xl pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative rounded-2xl overflow-hidden border border-stone-300/80 shadow-xl bg-white aspect-[3/2] group">
                  <img
                    src="/images/news/news-solarization-oct2026.jpeg"
                    alt="Inauguration of the campus-wide solar power grid at the Charbagh Main Campus"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.025] transition-transform duration-500 ease-out"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0C1912]/50 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Section 4 · Campuses directory ───────────────────────────────────── */}
      <section id="campuses" className="pb-16 sm:pb-24">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14">
          <div className="pb-4 border-b border-stone-200 mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold block mb-1">
                Geographic Presence
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 tracking-[-0.02em]">
                Campuses of the University of Swat
              </h2>
            </div>
            <p className="text-sm text-stone-600 max-w-md font-sans sm:text-right">
              Three grounds across the Swat Valley&mdash;from the solarized foothills of Charbagh to specialized academic annexes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Charbagh — forest lead tile */}
            <Link
              href="/campuses/main-campus"
              className="group flex flex-col rounded-2xl overflow-hidden bg-[#153B27] text-white border border-white/10 shadow-[0_24px_48px_-22px_rgba(12,25,18,0.5)] hover:border-[#C8A96E]/50 hover:-translate-y-[2px] hover:shadow-lg active:scale-[0.985] transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8A96E]"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src="/images/campus/charbagh-campus.jpg"
                  alt="Charbagh Main Campus"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#153B27]/70 via-transparent to-transparent" aria-hidden="true" />
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="font-serif text-lg font-bold text-white mb-1">
                  Charbagh Main Campus
                </h3>
                <span className="text-xs text-[#C8A96E] font-semibold block mb-2">Central Campus &middot; Charbagh</span>
                <p className="font-sans text-xs text-white/70 leading-relaxed mb-6">
                  Houses all 4 faculties, Central Library, Vice Chancellor&rsquo;s Secretariat, and solarized labs.
                </p>
                <span className="mt-auto pt-4 border-t border-white/15 text-xs font-semibold text-[#C8A96E] flex items-center justify-between group-hover:text-[#E5CD9B] transition-colors">
                  <span>View Campus Profile</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </span>
              </div>
            </Link>

            {/* Women Campus — photo-led light tile */}
            <Link
              href="/campuses/women-campus"
              className="group flex flex-col rounded-2xl overflow-hidden bg-white text-stone-900 border border-stone-300 shadow-xs hover:border-[#153B27]/40 hover:-translate-y-[2px] hover:shadow-lg active:scale-[0.985] transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#153B27]"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden bg-stone-200">
                <img
                  src="/images/campus/women-campus.jpg"
                  alt="Women Campus"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1912]/40 via-transparent to-transparent" aria-hidden="true" />
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">
                  Women Campus
                </h3>
                <span className="text-xs text-[#7F1D1D] font-semibold block mb-2">Specialized Campus &middot; Swat</span>
                <p className="font-sans text-xs text-stone-600 leading-relaxed mb-6">
                  Home to the College of Home Sciences, women-only laboratories, and dedicated transit fleet.
                </p>
                <span className="mt-auto pt-4 border-t border-stone-200 text-xs font-semibold text-[#7F1D1D] flex items-center justify-between">
                  <span>View Campus Profile</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </span>
              </div>
            </Link>

            {/* Sangota — photo-led light tile */}
            <Link
              href="/contact"
              className="group flex flex-col rounded-2xl overflow-hidden bg-white text-stone-900 border border-stone-300 shadow-xs hover:border-[#153B27]/40 hover:-translate-y-[2px] hover:shadow-lg active:scale-[0.985] transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#153B27]"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden bg-stone-200">
                <img
                  src="/images/campus/main-campus-gate.jpeg"
                  alt="Sangota Campus"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1912]/40 via-transparent to-transparent" aria-hidden="true" />
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">
                  Sangota Campus
                </h3>
                <span className="text-xs text-[#153B27] font-semibold block mb-2">Academic Annex &middot; Sangota</span>
                <p className="font-sans text-xs text-stone-600 leading-relaxed mb-6">
                  Houses the Department of Education &amp; Staff Training, residential quarters, and conference suites.
                </p>
                <span className="mt-auto pt-4 border-t border-stone-200 text-xs font-semibold text-[#153B27] flex items-center justify-between">
                  <span>Contact Sangota Campus</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}
