'use client';

import Link from 'next/link';
import { ArrowUpRight, BookOpen, Briefcase, Cpu, FlaskConical, Scale } from 'lucide-react';

interface Faculty {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  degrees: string;
  levels: string[];
  accent: string;
}

const faculties: Faculty[] = [
  {
    id: 'computing',
    icon: <Cpu className="w-5 h-5" />,
    title: 'Computing & IT',
    description:
      'Artificial intelligence, software engineering, data networks and cybersecurity across four-year and graduate programs.',
    degrees: '9',
    levels: ['BS', 'MS / MPhil', 'PhD'],
    accent: 'border-[#153B27]',
  },
  {
    id: 'sciences',
    icon: <FlaskConical className="w-5 h-5" />,
    title: 'Sciences',
    description:
      'Chemistry, physics, botany, zoology, microbiology, biotechnology and environmental sciences with strong alpine-field research.',
    degrees: '12',
    levels: ['BS', 'MS / MPhil', 'PhD'],
    accent: 'border-[#7F1D1D]',
  },
  {
    id: 'management',
    icon: <Briefcase className="w-5 h-5" />,
    title: 'Management Sciences',
    description:
      'Business administration, economics, tourism and hospitality management with a focus on regional entrepreneurship.',
    degrees: '7',
    levels: ['BBA', 'MBA / MS', 'PhD'],
    accent: 'border-[#153B27]',
  },
  {
    id: 'law',
    icon: <Scale className="w-5 h-5" />,
    title: 'Law & Legal Studies',
    description:
      'LLB and LLM programs covering constitutional, Islamic (Sharia) and criminal law, plus public administration studies.',
    degrees: '8',
    levels: ['LLB', 'LLM', 'MPhil'],
    accent: 'border-[#7F1D1D]',
  },
  {
    id: 'humanities',
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Humanities & Languages',
    description:
      'English, Urdu, Pashto, Islamic studies, history, sociology and applied psychology across undergraduate and graduate levels.',
    degrees: '10',
    levels: ['BS / BA', 'MA / MPhil', 'PhD'],
    accent: 'border-[#153B27]',
  },
];

export default function FacultyProgramsGrid() {
  return (
    <section
      id="faculties-programs"
      data-purpose="faculties-programs"
      className="relative overflow-hidden py-16 sm:py-20 bg-[#F6F5F0]"
    >
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#153B27]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-24 w-[420px] h-[420px] rounded-full bg-[#7F1D1D]/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Split Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-0.5 w-7 bg-[#7F1D1D]" />
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                Academic Programs
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#14291D] font-bold tracking-[-0.025em] leading-[1.12]">
              Faculties &amp; Academic Programs
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-stone-500 max-w-md lg:text-right leading-[1.68]">
            Interactive overview of the university&rsquo;s five academic families — with the degree
            programs each faculty offers across undergraduate, graduate and doctoral levels.
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculties.map((faculty) => (
            <article
              key={faculty.id}
              className="group relative flex flex-col rounded-xl border border-stone-200/90 bg-white shadow-xs p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_20px_44px_-18px_rgba(21,59,39,0.28)]"
            >
              {/* VC-card sheen sweep on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
              />

              {/* Top row: icon + degree count */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div
                  className={`w-11 h-11 rounded-xl bg-[#153B27]/8 text-[#153B27] border border-l-2 ${faculty.accent} border-l-[#153B27]/0 flex items-center justify-center shrink-0`}
                >
                  {faculty.icon}
                </div>
                <div className="text-right">
                  <p className="font-serif text-3xl font-bold text-[#14291D] leading-none">
                    {faculty.degrees}
                  </p>
                  <p className="text-[11px] text-stone-500 font-medium uppercase tracking-wider mt-1">
                    Degree Programs
                  </p>
                </div>
              </div>

              <h3 className="font-serif text-xl sm:text-[22px] font-bold text-[#14291D] tracking-[-0.015em] mb-2">
                {faculty.title}
              </h3>
              <p className="font-sans text-sm text-stone-600 leading-[1.62] mb-5">
                {faculty.description}
              </p>

              {/* Level chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {faculty.levels.map((level) => (
                  <span
                    key={level}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#153B27] bg-[#153B27]/8 border border-[#153B27]/15"
                  >
                    {level}
                  </span>
                ))}
              </div>

              {/* Explore link */}
              <Link
                href="#programs"
                className="group/link relative mt-auto flex items-center justify-between pt-4 border-t border-stone-100 text-sm font-semibold text-[#14291D] hover:text-[#153B27] transition-colors"
              >
                Explore programs
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover/link:text-[#153B27] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
