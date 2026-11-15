'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { ArrowUpRight, BookOpen, Building2, FileText, Landmark, Search, Users } from 'lucide-react';
import { allDepartments } from '@/data/departmentsData';
import { programsDetailCatalog } from '@/data/programsDetailData';
import { officialNewsArticles } from '@/data/newsData';
import { universityEvents } from '@/data/eventsData';
import { facultyProfiles } from '@/data/facultyData';
import { administrativeGovernance } from '@/data/leadershipData';
import { universityCampuses } from '@/data/campusData';

interface SearchItem {
  title: string;
  excerpt: string;
  href: string;
  section: string;
  icon: React.ReactNode;
}

const normalize = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

function buildIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  for (const dept of allDepartments) {
    items.push({
      title: dept.name,
      excerpt: dept.aims || dept.description,
      href: `/departments/${dept.id}`,
      section: 'Departments',
      icon: <Building2 className="w-4 h-4" />,
    });
    for (const program of dept.programsOffered) {
      items.push({
        title: program,
        excerpt: dept.name,
        href: `/departments/${dept.id}`,
        section: 'Programs',
        icon: <BookOpen className="w-4 h-4" />,
      });
    }
  }

  const programEntries = programsDetailCatalog;
  for (const program of programEntries) {
    const slug = program.slug.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    if (!slug) continue;
    items.push({
      title: program.name,
      excerpt: program.description,
      href: `/programs/${slug}`,
      section: 'Programs',
      icon: <BookOpen className="w-4 h-4" />,
    });
  }

  for (const article of officialNewsArticles) {
    items.push({
      title: article.title,
      excerpt: article.summary || '',
      href: `/news/${article.id}`,
      section: 'News',
      icon: <FileText className="w-4 h-4" />,
    });
  }

  for (const event of universityEvents) {
    items.push({
      title: event.title,
      excerpt: `${event.date} · ${event.location}`,
      href: `/events/${event.id}`,
      section: 'Events',
      icon: <Landmark className="w-4 h-4" />,
    });
  }

  for (const profile of facultyProfiles) {
    items.push({
      title: profile.name,
      excerpt: `${profile.designation} · ${profile.departmentName}`,
      href: `/faculty/${profile.slug}`,
      section: 'Faculty',
      icon: <Users className="w-4 h-4" />,
    });
  }

  for (const group of administrativeGovernance) {
    for (const officer of group.officers ?? []) {
      if (!officer.name) continue;
      items.push({
        title: officer.name,
        excerpt: officer.departmentOffice || group.category,
        href: '/leadership',
        section: 'Leadership',
        icon: <Users className="w-4 h-4" />,
      });
    }
  }

  for (const campus of universityCampuses) {
    items.push({
      title: campus.name,
      excerpt: campus.overview,
      href: campus.id === 'women-campus' ? '/campuses/women-campus' : '/campuses/main-campus',
      section: 'Campuses',
      icon: <Building2 className="w-4 h-4" />,
    });
  }

  return items;
}

function SearchPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get('q') ?? '');

  useEffect(() => {
    setQuery(searchParams.get('q') ?? '');
  }, [searchParams]);

  const index = useMemo(buildIndex, []);

  const results = useMemo(() => {
    const q = normalize(query);
    if (!q) return [];
    return index
      .filter((item) => {
        const haystack = normalize(`${item.title} ${item.excerpt} ${item.section}`);
        return q.split(/\s+/).every((token) => haystack.includes(token));
      })
      .slice(0, 40);
  }, [query, index]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  const sections = Array.from(new Set(results.map((r) => r.section)));

  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <div className="relative overflow-hidden bg-[#F6F5F0] border-b border-stone-200/80">
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#C8A96E]/8 blur-3xl pointer-events-none" />
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-14 lg:py-20 relative z-10">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="h-0.5 w-7 bg-[#7F1D1D]" />
            <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
              Search · University of Swat
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] text-[#14291D] font-bold tracking-[-0.025em] leading-[1.08] mb-8">
            Search the University
          </h1>

          <form onSubmit={handleSubmit} className="max-w-2xl">
            <div className="flex items-center gap-3 p-2 rounded-2xl bg-white border border-stone-200/90 shadow-xs focus-within:border-[#153B27]/50">
              <Search className="w-5 h-5 text-stone-400 ml-3 shrink-0" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search programs, departments, faculty, news, events…"
                aria-label="Search the university website"
                className="w-full bg-transparent text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none py-2.5"
              />
              <button
                type="submit"
                className="shrink-0 px-5 py-2.5 rounded-xl bg-[#153B27] text-white text-sm font-semibold hover:bg-[#14291D] transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-14 lg:py-16">
        {!query ? (
          <div className="py-20 text-center">
            <Search className="w-10 h-10 text-stone-300 mx-auto mb-4" />
            <h2 className="font-serif text-2xl text-[#14291D] font-bold mb-2">
              Search across the university
            </h2>
            <p className="text-sm text-stone-500">
              Departments, programs, faculty, leadership, news, events and campuses.
            </p>
          </div>
        ) : results.length === 0 ? (
          <div className="py-20 text-center">
            <Search className="w-10 h-10 text-stone-300 mx-auto mb-4" />
            <h2 className="font-serif text-2xl text-[#14291D] font-bold mb-2">
              No results for “{query}”
            </h2>
            <p className="text-sm text-stone-500 max-w-md mx-auto">
              Try a different keyword (e.g., “chemistry”, “admissions”, “solar”), or browse the
              departments and programs directly.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/faculty" className="px-5 py-2.5 rounded-xl bg-[#153B27] text-white text-sm font-semibold hover:bg-[#14291D] transition-colors">
                Browse departments
              </Link>
              <Link href="/programs" className="px-5 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-700 text-sm font-semibold hover:bg-stone-50 transition-colors">
                Browse programs
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-sm text-stone-500 mb-6">
              {results.length} result{results.length === 1 ? '' : 's'} for “{query}”
            </p>

            {sections.map((section) => (
              <div key={section} className="mb-10">
                <h2 className="font-serif text-xl text-[#14291D] font-bold mb-4 pb-3 border-b border-stone-200">
                  {section}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {results
                    .filter((r) => r.section === section)
                    .map((result) => (
                      <Link
                        key={`${result.section}-${result.title}-${result.href}`}
                        href={result.href}
                        className="group flex items-start gap-4 p-5 rounded-xl bg-white border border-stone-200/90 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-[0_14px_30px_-16px_rgba(21,59,39,0.25)]"
                      >
                        <span className="w-9 h-9 rounded-lg bg-[#153B27]/8 text-[#153B27] flex items-center justify-center shrink-0">
                          {result.icon}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-bold text-[#14291D] group-hover:text-[#153B27] transition-colors">
                            {result.title}
                          </span>
                          <span className="block text-xs text-stone-500 mt-1 line-clamp-2">
                            {result.excerpt}
                          </span>
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#153B27] ml-auto shrink-0 transition-all" />
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center bg-[#F6F5F0]">
          <div className="w-8 h-8 rounded-full border-2 border-[#153B27] border-t-transparent animate-spin" />
        </div>
      }
    >
      <SearchPageContent />
    </Suspense>
  );
}
