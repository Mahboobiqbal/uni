'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { facultiesCatalog, allDepartments } from '@/data/departmentsData';

const ROMAN = ['I', 'II', 'III', 'IV', 'V'] as const;

const FACULTY_FILTERS = [
  { id: 'all', label: 'All Faculties' },
  { id: 'physical-computational-sciences', label: 'Physical & Computational' },
  { id: 'chemical-life-sciences', label: 'Chemical & Life' },
  { id: 'allied-health-sciences', label: 'Allied Health' },
  { id: 'management-social-sciences', label: 'Management & Social' },
  { id: 'languages-humanities-law', label: 'Languages, Hum. & Law' },
] as const;

const campusPill = (campus: string): string => {
  const c = campus.toLowerCase();
  if (c.includes('women')) return 'bg-[#7F1D1D]/10 text-[#7F1D1D] border-[#E4C6C6]';
  if (c.includes('shangla')) return 'bg-amber-900/10 text-amber-900 border-[#C8A96E]/70';
  return 'bg-[#153B27]/10 text-[#153B27] border-[#C9D6C2]';
};

const cleanHod = (hod?: string): string => {
  if (!hod) return 'Office of the Chairperson';
  const t = hod.trim().toLowerCase();
  if (!t || t === 'university dept.' || t === 'university dept') return 'Office of the Chairperson';
  return hod.trim();
};

const facultyStats = (() => {
  const deptCount = allDepartments.length;
  const programCount = allDepartments.reduce((s, d) => s + d.programsOffered.length, 0);
  return { facultyCount: facultiesCatalog.length, deptCount, programCount };
})();

const CAMPUS_FILTERS = [
  { id: 'all', label: 'All Campuses' },
  { id: 'charbagh', label: 'Charbagh Main' },
  { id: 'women', label: 'Women Campus' },
  { id: 'shangla', label: 'Shangla' },
] as const;

const campusMatches = (campus: string, id: string): boolean => {
  if (id === 'all') return true;
  const c = campus.toLowerCase();
  if (id === 'women') return c.includes('women');
  if (id === 'shangla') return c.includes('shangla');
  return c.includes('charbagh') || c.includes('main');
};

export default function FacultyPage() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeCampus, setActiveCampus] = useState<string>('all');

  const visibleFaculties = useMemo(() => {
    const q = query.trim().toLowerCase();
    return facultiesCatalog
      .map((fac) => {
        if (activeFilter !== 'all' && fac.slug !== activeFilter) return null;
        const depts = fac.departments.filter((d) => {
          if (!campusMatches(d.campus, activeCampus)) return false;
          if (!q) return true;
          return (
            d.name.toLowerCase().includes(q) ||
            (d.headOfDepartment ?? '').toLowerCase().includes(q) ||
            d.aims.toLowerCase().includes(q) ||
            d.campus.toLowerCase().includes(q)
          );
        });
        return depts.length ? { fac, depts } : null;
      })
      .filter((x): x is { fac: (typeof facultiesCatalog)[number]; depts: (typeof facultiesCatalog)[number]['departments'] } => x !== null);
  }, [query, activeFilter, activeCampus]);

  const totalShown = visibleFaculties.reduce((s, v) => s + v.depts.length, 0);

  return (
    <div className="bg-[#F6F5F0] min-h-screen text-[#14291D]">
      {/* Photographic hero with Deep Forest Green glow */}
      <PageHeader
        title="Faculties & Teaching Departments"
        description="Five faculties group our teaching departments, research institutes, and regional sub-campuses."
        eyebrow="Academic Structure"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Faculties' },
        ]}
        backgroundImage="/images/campus/charbagh-campus.jpg"
      >
        <dl className="grid grid-cols-2 sm:flex sm:flex-wrap items-stretch border-t border-white/15 pt-6 sm:pt-7 gap-y-5 sm:gap-y-4">
          {[
            { value: String(facultyStats.facultyCount), label: 'Academic Faculties' },
            { value: String(facultyStats.deptCount), label: 'Teaching Departments' },
            { value: `${facultyStats.programCount}+`, label: 'Degree Programs' },
            { value: '250+', label: 'Scholarly Faculty' },
          ].map((fact, idx, arr) => (
            <div
              key={fact.label}
              className={`flex flex-col justify-center pr-4 sm:pr-8 sm:mr-8 ${
                idx % 2 === 0 ? 'border-r sm:border-r border-white/15' : idx < arr.length - 1 ? 'sm:border-r border-white/15' : ''
              }`}
            >
              <dt className="order-2 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-white/55 font-semibold mt-1.5">
                {fact.label}
              </dt>
              <dd className="order-1 font-serif text-2xl sm:text-3xl lg:text-4xl text-[#D4B87A] font-bold leading-none tabular-nums">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      {/* Two-tier search & filter bar — matches /programs */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14 -mt-10 sm:-mt-12 relative z-20">
        <div role="search" aria-label="Filter departments"
          className="bg-white border border-stone-300 border-t-4 border-t-[#7F1D1D] rounded-2xl p-3.5 sm:p-5 shadow-[0_24px_50px_-22px_rgba(12,25,18,0.45)] flex flex-col lg:flex-row lg:items-center gap-3 sm:gap-4">
          <div className="relative min-w-0 flex-1">
            <Search className="w-4 h-4 text-stone-600 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search departments, Heads of Department, or campus — try "Computer", "Women Campus"…'
              aria-label="Search departments"
              className="w-full pl-11 pr-4 h-12 rounded-xl bg-stone-50 border border-stone-300 text-[16px] sm:text-sm text-[#14291D] placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-[#153B27] focus:border-transparent focus:bg-white transition-all"
            />
          </div>

          <div role="group" aria-label="Filter by campus" className="flex items-center gap-1.5 p-1 bg-stone-100/90 rounded-xl overflow-x-auto pb-1.5 sm:pb-1 scrollbar-none max-w-full shrink-0">
            {CAMPUS_FILTERS.map((c) => {
              const isActive = activeCampus === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCampus(c.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.98] min-h-[40px] shrink-0 ${
                    isActive ? 'bg-[#153B27] text-white shadow-sm' : 'text-stone-600 hover:text-[#14291D] hover:bg-white/70'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 px-1">
          <span className="font-medium" aria-live="polite">
            Showing{' '}
            <strong className="text-[#153B27] font-bold tabular-nums">{totalShown}</strong> departments
          </span>
          {(query.trim() || activeFilter !== 'all' || activeCampus !== 'all') && (
            <button type="button" onClick={() => { setQuery(''); setActiveFilter('all'); setActiveCampus('all'); }} className="text-[#7F1D1D] hover:text-[#661717] underline underline-offset-2 decoration-[#7F1D1D]/30 hover:decoration-[#7F1D1D] font-semibold transition-colors">
              Reset All Filters
            </button>
          )}
        </div>
      </div>

      {/* Faculty pills with counts — second tier */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14 pt-6">
        <div className="flex flex-wrap items-center gap-2.5" role="group" aria-label="Filter by faculty">
          {FACULTY_FILTERS.map((f) => {
            const isActive = activeFilter === f.id;
            const count = f.id === 'all' ? allDepartments.length : facultiesCatalog.find((x) => x.slug === f.id)?.departments.length ?? 0;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(f.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-[11px] font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.985] ${
                  isActive ? 'bg-[#153B27] text-white shadow-sm' : 'bg-white border border-stone-200 text-stone-800 hover:border-[#153B27]'
                }`}
              >
                <span>{f.label}</span>
                <span className={`text-[10px] font-bold tabular-nums px-1.5 py-0.5 rounded-md ${isActive ? 'bg-white/15 text-[#E5CD9B]' : 'bg-stone-100 text-stone-600'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Editorial canvas */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14 pb-20 sm:pb-28">
        {visibleFaculties.length === 0 ? (
          <div className="p-12 sm:p-16 text-center space-y-4 bg-white border border-stone-300 rounded-2xl shadow-xs">
            <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-600 mx-auto flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-800">No Matching Departments Found</h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
              We could not find any departments matching your search or faculty filter. Try broadening your search.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setActiveFilter('all');
              }}
              className="px-6 py-3 rounded-xl bg-[#153B27] hover:bg-[#0F2D1E] text-white text-[11px] font-bold uppercase tracking-[0.12em] min-h-[44px] transition-all active:scale-[0.985]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-20">
            {visibleFaculties.map(({ fac, depts }, fi) => {
              const badgeCrimson = fi % 2 === 1;
              return (
                <section key={fac.slug} id={fac.slug} className="scroll-mt-40" aria-labelledby={`heading-${fac.slug}`}>
                  {/* Architectural Faculty Header Strip */}
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-stone-300 pb-4 mb-6">
                    <div className="flex items-end gap-4">
                      <span aria-hidden="true" className="font-serif text-3xl sm:text-4xl font-bold text-[#7F1D1D] leading-none">
                        {ROMAN[fi] ?? String(fi + 1)}.
                      </span>
                      <div>
                        <h2
                          id={`heading-${fac.slug}`}
                          className="font-serif text-2xl lg:text-3xl font-bold text-[#153B27] tracking-[-0.02em] leading-tight"
                        >
                          {fac.name}
                        </h2>
                        <p className="text-xs text-stone-500 mt-1 font-medium">
                          {depts.length} Teaching Department{depts.length === 1 ? '' : 's'}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`shrink-0 inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest ${
                        badgeCrimson ? 'bg-[#7F1D1D] text-white' : 'bg-[#153B27] text-[#C8A96E]'
                      }`}
                    >
                      Faculty Division
                    </span>
                  </div>

                  {/* Uniform department cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {depts.map((dept) => {
                      const hod = cleanHod(dept.headOfDepartment);
                      const hasEmail = Boolean(dept.contactEmail && dept.contactEmail.trim());
                      return (
                        <article
                          key={dept.id}
                          className="group bg-white border border-stone-200 border-t-[3px] border-t-[#153B27] hover:border-[#7F1D1D] hover:border-t-[#7F1D1D] rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all hover:shadow-md"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2">
                              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${campusPill(dept.campus)}`}>
                                {dept.campus}
                              </span>
                              <span className="text-xs font-semibold text-stone-500">
                                {dept.programsOffered.length} Programs
                              </span>
                            </div>

                            <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#7F1D1D] mt-3 leading-snug transition-colors">
                              <Link href={`/departments/${dept.id}`}>{dept.name}</Link>
                            </h3>

                            <p className="text-sm text-stone-600 line-clamp-2 mt-2 leading-relaxed">
                              {dept.aims || dept.description}
                            </p>
                          </div>

                          <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                            <div className="min-w-0">
                              <div className="text-xs font-bold text-[#153B27] truncate">{hod}</div>
                              {hasEmail && (
                                <div className="text-xs text-stone-500 truncate mt-0.5">{dept.contactEmail}</div>
                              )}
                            </div>
                            <Link
                              href={`/departments/${dept.id}`}
                              className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-[#7F1D1D] hover:text-[#661717] transition-colors"
                            >
                              <span>Profile &amp; Faculty</span>
                              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
