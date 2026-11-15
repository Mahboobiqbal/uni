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

export default function FacultyPage() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const visibleFaculties = useMemo(() => {
    const q = query.trim().toLowerCase();
    return facultiesCatalog
      .map((fac) => {
        if (activeFilter !== 'all' && fac.slug !== activeFilter) return null;
        const depts = fac.departments.filter((d) => {
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
  }, [query, activeFilter]);

  const totalShown = visibleFaculties.reduce((s, v) => s + v.depts.length, 0);

  return (
    <div className="bg-[#F6F5F0] min-h-screen text-[#14291D]">
      {/* Photographic hero with Deep Forest Green glow */}
      <PageHeader
        tag="ACADEMIC STRUCTURE"
        title="Faculties & Teaching Departments"
        description="The University of Swat is organized into specialized academic faculties encompassing its teaching departments, research institutes, and regional sub-campuses."
        eyebrow="ACADEMIC STRUCTURE"
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

      {/* Faculty Quick-Jump & Search Filter Bar */}
      <div className="relative lg:sticky lg:top-24 z-30">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14">
          <div className="bg-white border border-stone-300 border-t-4 border-t-[#7F1D1D] rounded-2xl p-3.5 sm:p-4 shadow-[0_24px_50px_-22px_rgba(12,25,18,0.35)] flex flex-col lg:flex-row lg:items-center gap-3 mb-8 sm:mb-10">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none momentum-scroll -mx-1 px-1 lg:flex-wrap lg:overflow-visible lg:pb-0" role="group" aria-label="Filter by faculty">
              {FACULTY_FILTERS.map((f) => {
                const isActive = activeFilter === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveFilter(f.id)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.98] min-h-[36px] shrink-0 lg:shrink ${
                      isActive ? 'bg-[#153B27] text-white shadow-sm' : 'text-stone-600 hover:text-[#14291D] hover:bg-stone-100'
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>

            <div className="relative min-w-0 flex-1">
              <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search department, Head of Department, or campus…"
                aria-label="Search departments"
                className="w-full pl-10 pr-4 h-10 rounded-lg bg-stone-50 border border-stone-300 text-[16px] sm:text-sm text-[#14291D] placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-[#153B27] focus:border-transparent focus:bg-white transition-all"
              />
            </div>
          </div>
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
