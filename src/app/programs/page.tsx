'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { facultiesCatalog } from '@/data/departmentsData';
import { ALL_PROGRAMS, type ProgramData } from '@/data/programs';

type DegreeLevel = 'all' | 'undergraduate' | 'graduate' | 'doctorate';

const FACULTY_TABS = [
  { id: 'all', label: 'All Faculties' },
  { id: 'physical-computational-sciences', label: 'Physical & Computational' },
  { id: 'chemical-life-sciences', label: 'Chemical & Life' },
  { id: 'allied-health-sciences', label: 'Allied Health' },
  { id: 'management-social-sciences', label: 'Management & Social' },
  { id: 'languages-humanities-law', label: 'Languages, Hum. & Law' },
] as const;

const shortCode = (prog: string): string => {
  const l = prog.toLowerCase();
  if (l.includes('phd') || l.includes('ph.d') || l.includes('doctorate')) return 'PhD';
  if (l.startsWith('mphil') || l.startsWith('m.phil')) return 'MPhil';
  if (l.startsWith('mba')) return 'MBA';
  if (l.startsWith('llm')) return 'LLM';
  if (l.startsWith('ms')) return 'MS';
  if (l.startsWith('llb') || l.includes('law')) return 'LLB';
  if (l.startsWith('dpt') || l.includes('doctor of physical therapy')) return 'DPT';
  if (l.startsWith('bba')) return 'BBA';
  if (l.startsWith('bs') || l.includes('bachelor')) return 'BS';
  return prog.split(' ')[0];
};

const pillTone = (level: ProgramData['degreeLevel']): string =>
  level === 'Doctorate'
    ? 'bg-amber-900/10 text-amber-900'
    : level === 'Graduate'
    ? 'bg-[#7F1D1D]/10 text-[#7F1D1D]'
    : 'bg-[#153B27]/10 text-[#153B27]';

const levelToFilter = (level: ProgramData['degreeLevel']): Exclude<DegreeLevel, 'all'> =>
  level === 'Doctorate' ? 'doctorate' : level === 'Graduate' ? 'graduate' : 'undergraduate';

export default function ProgramsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<DegreeLevel>('all');
  const [selectedFaculty, setSelectedFaculty] = useState<string>('all');
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const editable = t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || (t instanceof HTMLElement && t.isContentEditable);
      if (e.key === '/' && !editable) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const facultyCount = (slug: string): number => {
    if (slug === 'all') return ALL_PROGRAMS.length;
    const cat = facultiesCatalog.find((f) => f.slug === slug);
    if (!cat) return 0;
    return ALL_PROGRAMS.filter((p) => cat.departments.some((d) => d.id === p.departmentSlug)).length;
  };

  const filtered = useMemo(() => {
    return ALL_PROGRAMS.filter((p) => {
      if (selectedFaculty !== 'all') {
        const cat = facultiesCatalog.find((f) => f.slug === selectedFaculty);
        if (cat && !cat.departments.some((d) => d.id === p.departmentSlug)) return false;
      }
      if (selectedLevel !== 'all' && levelToFilter(p.degreeLevel) !== selectedLevel) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.departmentName.toLowerCase().includes(q) ||
          p.facultyGroup.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedFaculty, selectedLevel, searchQuery]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedLevel('all');
    setSelectedFaculty('all');
  };

  const hasActiveFilter = searchQuery.trim() !== '' || selectedLevel !== 'all' || selectedFaculty !== 'all';

  return (
    <main id="main-content" className="bg-[#F6F5F0] min-h-screen text-[#14291D]">
      <PageHeader
        eyebrow="Academic Programs &amp; Schemes of Study"
        title="Degrees &amp; Curricula"
        description="HEC-recognized undergraduate, master's, and doctoral degree programs across five faculties — from Charbagh Main Campus to the Women Campus and Shangla."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Programs' },
        ]}
        backgroundImage="/campus-main.jpg"
      >
        <dl className="grid grid-cols-2 sm:flex sm:flex-wrap items-stretch border-t border-white/15 pt-6 sm:pt-7 gap-y-5 sm:gap-y-4">
          {[
            { value: '05', label: 'Faculties' },
            { value: '20', label: 'Departments' },
            { value: String(ALL_PROGRAMS.length), label: 'Degree Programs' },
            { value: '03', label: 'Campuses' },
            { value: 'HEC', label: 'Recognized' },
          ].map((fact, idx, arr) => (
            <div key={fact.label} className={`flex flex-col justify-center pr-4 sm:pr-8 sm:mr-8 ${idx % 2 === 0 ? 'border-r sm:border-r border-white/15' : idx < arr.length - 1 ? 'sm:border-r border-white/15' : ''}`}>
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

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14 -mt-10 sm:-mt-12 relative z-20">
        <div
          role="search"
          aria-label="Filter degree programs"
          className="bg-white border border-stone-300 border-t-4 border-t-[#7F1D1D] rounded-2xl p-3.5 sm:p-5 shadow-[0_24px_50px_-22px_rgba(12,25,18,0.45)] flex flex-col lg:flex-row lg:items-center gap-3 sm:gap-4"
        >
          <div className="relative min-w-0 flex-1">
            <Search className="w-4 h-4 text-stone-600 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Search degree programs — try "Computer", "DPT", "Law", "MPhil"…'
              aria-label="Search degree programs"
              className="w-full pl-11 pr-16 lg:pr-14 h-12 rounded-xl bg-stone-50 border border-stone-300 text-[16px] sm:text-sm text-[#14291D] placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-[#153B27] focus:border-transparent focus:bg-white transition-all"
            />
            {searchQuery ? (
              <button type="button" onClick={() => setSearchQuery('')} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-stone-600 hover:text-stone-800 rounded-full transition-colors">
                <X className="w-4 h-4" />
              </button>
            ) : (
              <kbd aria-hidden="true" className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 items-center justify-center text-[11px] font-sans font-bold text-stone-600 bg-white border border-stone-300 rounded-md hidden lg:flex pointer-events-none">
                /
              </kbd>
            )}
          </div>

          <div role="group" aria-label="Filter by degree level" className="flex items-center gap-1.5 p-1 bg-stone-100/90 rounded-xl overflow-x-auto pb-1.5 sm:pb-1 scrollbar-none momentum-scroll max-w-full shrink-0">
            {[
              { id: 'all', label: 'All Levels' },
              { id: 'undergraduate', label: 'Undergraduate' },
              { id: 'graduate', label: 'Graduate' },
              { id: 'doctorate', label: 'Doctorate' },
            ].map((lvl) => {
              const isActive = selectedLevel === lvl.id;
              return (
                <button
                  key={lvl.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSelectedLevel(lvl.id as DegreeLevel)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.98] min-h-[40px] shrink-0 ${
                    isActive ? 'bg-[#153B27] text-white shadow-sm' : 'text-stone-600 hover:text-[#14291D] hover:bg-white/70'
                  }`}
                >
                  {lvl.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 px-1">
          <span className="font-medium" aria-live="polite">
            Showing{' '}
            <strong className="text-[#153B27] font-bold tabular-nums">{filtered.length}</strong> degree programs
          </span>
          {hasActiveFilter && (
            <button type="button" onClick={resetFilters} className="text-[#7F1D1D] hover:text-[#661717] underline underline-offset-2 decoration-[#7F1D1D]/30 hover:decoration-[#7F1D1D] font-semibold transition-colors active:scale-[0.985]">
              Reset All Filters
            </button>
          )}
        </div>
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14 py-8 sm:py-16">
        <div className="flex items-center gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2 scrollbar-none momentum-scroll -mx-1 px-1 lg:flex-wrap lg:overflow-visible lg:pb-0" role="group" aria-label="Filter by faculty">
          {FACULTY_TABS.map((fac) => {
            const isActive = selectedFaculty === fac.id;
            const count = facultyCount(fac.id);
            return (
              <button
                key={fac.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelectedFaculty(fac.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-[11px] font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.985] shrink-0 lg:shrink ${
                  isActive ? 'bg-[#153B27] text-white shadow-sm' : 'bg-white border border-stone-300 text-stone-600 hover:text-[#14291D] hover:border-stone-400'
                }`}
              >
                <span>{fac.label}</span>
                <span className={`text-[10px] font-bold tabular-nums px-1.5 py-0.5 rounded-md ${isActive ? 'bg-white/15 text-[#E5CD9B]' : 'bg-stone-100 text-stone-600'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <div className="p-12 sm:p-16 text-center space-y-4 bg-white border border-stone-300 rounded-2xl shadow-xs">
            <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-600 mx-auto flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-800">No Matching Degree Programs Found</h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
              We could not find any degree programs matching your search, level, or faculty filter. Try broadening your search or resetting filters.
            </p>
            <button type="button" onClick={resetFilters} className="px-6 py-3 rounded-xl bg-[#153B27] hover:bg-[#0F2D1E] text-white text-[11px] font-bold uppercase tracking-[0.12em] min-h-[44px] transition-all active:scale-[0.985]">
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <Link
                key={p.slug}
                href={`/programs/${p.slug}`}
                className="group bg-white border border-stone-200 hover:border-[#153B27] rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md font-bold text-xs ${pillTone(p.degreeLevel)}`}>
                      {shortCode(p.name)} • {p.duration}
                    </span>
                    <span className="text-xs text-stone-500 font-medium">{p.creditHours} Credits</span>
                  </div>

                  <div className="my-4">
                    <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-[#7F1D1D] transition-colors leading-snug">
                      {p.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      {p.departmentName.replace('Department of ', 'Dept. of ').replace('Institute of ', 'Institute of ')}
                    </p>
                    <p className="text-sm text-stone-600 line-clamp-2 mt-2.5 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#153B27]">HEC Recognized</span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#7F1D1D] group-hover:text-[#661717] transition-colors">
                    View Syllabus &amp; Details
                    <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
