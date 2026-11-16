'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Download, MapPin, Search } from 'lucide-react';

const publicColleges = [
  { name: 'Govt. Post Graduate Jahanzeb College', location: 'Saidu Sharif, Swat', established: '1952', programs: 'BS 4-Year (Natural Sciences, Humanities, Management), Associate Degrees' },
  { name: 'Govt. Girls Post Graduate College', location: 'Saidu Sharif, Swat', established: '1974', programs: 'BS 4-Year (Biological Sciences, Computer Science, English, Islamic Studies)' },
  { name: 'Govt. Degree College Mingora', location: 'Mingora, Swat', established: '1988', programs: 'BS 4-Year (Physics, Chemistry, Mathematics, Political Science)' },
  { name: 'Govt. Degree College Matta', location: 'Matta, Upper Swat', established: '2004', programs: 'BS 4-Year (Botany, Zoology, Economics, Urdu)' },
  { name: 'Govt. Degree College Kabal', location: 'Kabal, Swat', established: '2007', programs: 'BS 4-Year (Computer Science, Chemistry, English)' },
  { name: 'Govt. Degree College Khwazakhela', location: 'Khwazakhela, Swat', established: '2010', programs: 'BS 4-Year (Social Sciences, Islamic Studies, Pakistan Studies)' },
  { name: 'Govt. Degree College Madyan', location: 'Madyan, Swat', established: '2014', programs: 'BS 4-Year (Environmental Studies, Languages, Arts)' },
  { name: 'Govt. Degree College Alpuri', location: 'Alpuri, District Shangla', established: '2009', programs: 'BS 4-Year (Natural Sciences, Humanities)' },
  { name: 'Govt. Degree College Puran', location: 'Puran, District Shangla', established: '2012', programs: 'BS 4-Year (General Sciences, Arts)' },
];

const privateColleges = [
  { name: 'Swat College of Science and Technology', location: 'G.T. Road, Mingora, Swat', programs: 'BS Computer Science, BS Software Engineering, BBA' },
  { name: 'Swat Law College', location: 'Saidu Sharif, Swat', programs: 'BA / LLB (5-Year Integrated Law, recognized by PBC)' },
  { name: 'Apex College of Management Sciences', location: 'Saidu Sharif, Swat', programs: 'BBA, BS Accounting & Finance' },
  { name: 'Tipu Shaheed Institute of Education', location: 'Mingora, Swat', programs: 'B.Ed (Hons) 4-Year, ADE (Associate Degree in Education)' },
  { name: 'National College of Computer Science', location: 'Matta Road, Swat', programs: 'BS Information Technology, BS Computer Science' },
];

type SectorFilter = 'all' | 'public' | 'private';

const matchesQuery = (q: string, name: string, location: string, programs: string): boolean => {
  if (!q) return true;
  return (
    name.toLowerCase().includes(q) ||
    location.toLowerCase().includes(q) ||
    programs.toLowerCase().includes(q)
  );
};

export default function AffiliatedCollegesClient() {
  const [sector, setSector] = useState<SectorFilter>('all');
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();

  const pubVisible = useMemo(
    () => publicColleges.filter((c) => matchesQuery(q, c.name, c.location, c.programs)),
    [q]
  );
  const privVisible = useMemo(
    () => privateColleges.filter((c) => matchesQuery(q, c.name, c.location, c.programs)),
    [q]
  );

  const showPublic = sector !== 'private';
  const showPrivate = sector !== 'public';
  const totalVisible = (showPublic ? pubVisible.length : 0) + (showPrivate ? privVisible.length : 0);

  return (
    <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-14 py-12 sm:py-20">
      {/* Back + Download row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-[#153B27] transition-colors min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4 text-[#7F1D1D]" />
          <span>Back to About University</span>
        </Link>

        <a
          href="https://uswat.edu.pk/affiliation-rules/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#7F1D1D] hover:bg-[#991B1B] text-white text-xs font-semibold shadow-sm transition-colors w-full sm:w-auto"
        >
          <Download className="w-4 h-4" />
          <span>Download Affiliation Rules &amp; Inspection Criteria</span>
        </a>
      </div>

      {/* Two-tier search & filter bar — matches /programs */}
      <div className="relative z-20 -mt-6 sm:-mt-8 mb-8 sm:mb-12">
        <div role="search" aria-label="Filter colleges"
          className="bg-white border border-stone-300 border-t-4 border-t-[#7F1D1D] rounded-2xl p-3.5 sm:p-5 shadow-[0_24px_50px_-22px_rgba(12,25,18,0.45)] flex flex-col lg:flex-row lg:items-center gap-3 sm:gap-4">
          <div className="relative min-w-0 flex-1">
            <Search className="w-4 h-4 text-stone-600 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search colleges, degree programs, or city — try "Mingora", "Saidu Sharif", "Law"…'
              aria-label="Search colleges"
              className="w-full pl-11 pr-4 h-12 rounded-xl bg-stone-50 border border-stone-300 text-[16px] sm:text-sm text-[#14291D] placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-[#153B27] focus:border-transparent focus:bg-white transition-all"
            />
          </div>

          <div role="group" aria-label="Filter by sector" className="flex items-center gap-1.5 p-1 bg-stone-100/90 rounded-xl overflow-x-auto pb-1.5 sm:pb-1 scrollbar-none max-w-full shrink-0">
            {[
              { id: 'all' as SectorFilter, label: 'All Sectors' },
              { id: 'public' as SectorFilter, label: 'Public Sector' },
              { id: 'private' as SectorFilter, label: 'Private Sector' },
            ].map((f) => {
              const isActive = sector === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSector(f.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.98] min-h-[40px] shrink-0 ${
                    isActive ? 'bg-[#153B27] text-white shadow-sm' : 'text-stone-600 hover:text-[#14291D] hover:bg-white/70'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 px-1">
          <span className="font-medium" aria-live="polite">
            Showing <strong className="text-[#153B27] font-bold tabular-nums">{totalVisible}</strong> affiliated colleges
          </span>
          {(query.trim() || sector !== 'all') && (
            <button type="button" onClick={() => { setQuery(''); setSector('all'); }} className="text-[#7F1D1D] hover:text-[#661717] underline underline-offset-2 font-semibold transition-colors">
              Reset All Filters
            </button>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2.5" role="group" aria-label="Sector group">
          {[
            { id: 'all' as SectorFilter, label: 'All Colleges', count: publicColleges.length + privateColleges.length },
            { id: 'public' as SectorFilter, label: 'Public Sector', count: publicColleges.length },
            { id: 'private' as SectorFilter, label: 'Private Sector', count: privateColleges.length },
          ].map((f) => {
            const isActive = sector === f.id;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSector(f.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-[11px] font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.985] ${
                  isActive ? 'bg-[#153B27] text-white shadow-sm' : 'bg-white border border-stone-200 text-stone-800 hover:border-[#153B27]'
                }`}
              >
                <span>{f.label}</span>
                <span className={`text-[10px] font-bold tabular-nums px-1.5 py-0.5 rounded-md ${isActive ? 'bg-white/15 text-[#E5CD9B]' : 'bg-stone-100 text-stone-600'}`}>
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Public sector */}
      {showPublic && (
        <section className="mb-16" aria-labelledby="public-heading">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-stone-300 pb-4 mb-6">
            <div>
              <span className="text-[#153B27] font-bold text-xs tracking-widest uppercase block mb-1">
                I. Government Institutions
              </span>
              <h2 id="public-heading" className="font-serif text-2xl lg:text-3xl font-bold text-stone-900">
                Public Sector Affiliated Colleges
              </h2>
            </div>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#153B27] text-[#C8A96E]">
              {pubVisible.length} Government Colleges in Swat &amp; Shangla
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pubVisible.map((c, idx) => (
              <article
                key={idx}
                className="bg-white border border-stone-200 border-t-[3px] border-t-[#153B27] hover:border-[#153B27] rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="bg-[#153B27]/10 text-[#153B27] font-bold text-xs px-2.5 py-0.5 rounded">Est. {c.established}</span>
                    <span className="text-xs font-medium text-stone-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#153B27]" />
                      {c.location}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 mt-3 leading-snug">{c.name}</h3>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">{c.programs}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#153B27]">Public Sector</span>
                  <span className="text-[11px] font-semibold text-stone-500">UoS Affiliated</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Private sector */}
      {showPrivate && (
        <section aria-labelledby="private-heading">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-stone-300 pb-4 mb-6">
            <div>
              <span className="text-[#7F1D1D] font-bold text-xs tracking-widest uppercase block mb-1">
                II. Private Institutions
              </span>
              <h2 id="private-heading" className="font-serif text-2xl lg:text-3xl font-bold text-stone-900">
                Private Sector Affiliated Colleges
              </h2>
            </div>
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#7F1D1D] text-white">
              Regulated under University Affiliation Statutes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {privVisible.map((c, idx) => (
              <article
                key={idx}
                className="bg-white border border-stone-200 border-t-[3px] border-t-[#7F1D1D] hover:border-[#7F1D1D] rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="bg-[#7F1D1D]/10 text-[#7F1D1D] font-bold text-xs px-2.5 py-0.5 rounded">Chartered Affiliate</span>
                    <span className="text-xs font-medium text-stone-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#7F1D1D]" />
                      {c.location}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 mt-3 leading-snug">{c.name}</h3>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">{c.programs}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#7F1D1D]">Private Sector</span>
                  <span className="text-[11px] font-semibold text-stone-500">UoS Exam Supervision</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {totalVisible === 0 && (
        <div className="text-center py-16 px-6 bg-white rounded-2xl border border-stone-300 shadow-xs">
          <Search className="w-10 h-10 text-stone-300 mx-auto mb-3" />
          <h3 className="font-serif text-xl font-bold text-stone-800 mb-1">No Affiliated Colleges Found</h3>
          <p className="text-xs text-stone-600 max-w-md mx-auto mb-5">
            We couldn&apos;t find any colleges matching your search or sector filter. Try broadening your search.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setSector('all');
            }}
            className="px-4 py-2 rounded-xl bg-[#153B27] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0F2D1E] transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
