'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Clock, Award, BookOpen, GraduationCap, Sparkles } from 'lucide-react';

interface ProgramCard {
  id: string;
  slug: string;
  title: string;
  degree: string;
  duration: string;
  department: string;
  faculty: string;
  description: string;
  careerFocus: string;
  image: string;
  accent: string;
}

const flagshipPrograms: ProgramCard[] = [
  {
    id: 'bs-cs',
    slug: 'bs-computer-science',
    title: 'BS Computer Science',
    degree: 'Bachelor of Science (BS)',
    duration: '4 Years · 8 Semesters',
    department: 'Department of Computer Science',
    faculty: 'Computing & IT',
    description: 'Master algorithms, artificial intelligence, operating systems, and distributed cloud computing with modern computer lab facilities.',
    careerFocus: 'AI Engineer · Systems Architect · Data Scientist',
    image: '/campus-shot-2.jpg',
    accent: 'border-[#153B27]',
  },
  {
    id: 'bs-se',
    slug: 'bs-software-engineering',
    title: 'BS Software Engineering',
    degree: 'Bachelor of Science (BS)',
    duration: '4 Years · 8 Semesters',
    department: 'Institute of Computing',
    faculty: 'Computing & IT',
    description: 'Rigorous engineering of high-concurrency systems, microservices, mobile applications, and software quality assurance methodologies.',
    careerFocus: 'Full-Stack Developer · Cloud DevOps · Lead QA Engineer',
    image: '/campus-shot-3.jpg',
    accent: 'border-[#7F1D1D]',
  },
  {
    id: 'bba-honors',
    slug: 'bba-honors',
    title: 'BBA (Honors) Business Admin',
    degree: 'Bachelor of Business Administration',
    duration: '4 Years · 8 Semesters',
    department: 'Department of Management Sciences',
    faculty: 'Management Sciences',
    description: 'Strategic management, financial modeling, marketing innovation, and regional enterprise development across Northern Pakistan.',
    careerFocus: 'Corporate Executive · Financial Analyst · Entrepreneur',
    image: '/campus-shot-4.jpg',
    accent: 'border-[#153B27]',
  },
  {
    id: 'bs-env-sci',
    slug: 'bs-environmental-sciences',
    title: 'BS Environmental Sciences',
    degree: 'Bachelor of Science (BS)',
    duration: '4 Years · 8 Semesters',
    department: 'Dept. of Environmental Sciences',
    faculty: 'Sciences',
    description: 'Field-based research in Swat watershed hydrology, alpine biodiversity conservation, climate adaptation, and environmental monitoring.',
    careerFocus: 'Environmental Consultant · Climate Policy Advisor · Hydrologist',
    image: '/campus-shot-5.jpg',
    accent: 'border-[#7F1D1D]',
  },
];

export default function FlagshipDegreeSpotlight() {
  return (
    <div className="mt-16 sm:mt-24 pt-16 sm:pt-20 border-t border-stone-200/90">
      {/* Header for Flagship Degrees */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2.5">
            <Sparkles className="w-4 h-4 text-[#7F1D1D]" />
            <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
              Flagship Curricula
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#14291D] font-bold tracking-[-0.02em]">
            Popular Degree Programs
          </h3>
        </div>
        <Link
          href="/programs"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#153B27] hover:text-[#0C1912] active:scale-[0.985] active:translate-y-px transition-all duration-150"
        >
          <span>Explore All 28 Degree Syllabi</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Program Cards Grid (Matching Section 4 of reference template) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {flagshipPrograms.map((program) => (
          <article
            key={program.id}
            className="group relative flex flex-col rounded-2xl border border-stone-200/90 bg-white shadow-xs overflow-hidden transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-xl hover:border-stone-300"
          >
            {/* Card Image with duration pill */}
            <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
              <img
                src={program.image}
                alt={program.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.025] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#153B27]/90 text-white backdrop-blur-xs border border-white/20">
                  <Clock className="w-2.5 h-2.5" />
                  {program.duration.split('·')[0].trim()}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-semibold text-amber-200 uppercase tracking-wider">
                  {program.faculty}
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 flex-1 flex flex-col">
              <h4 className="font-serif text-lg sm:text-xl font-bold text-[#14291D] tracking-[-0.01em] group-hover:text-[#153B27] transition-colors mb-2">
                {program.title}
              </h4>

              <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                {program.description}
              </p>

              {/* Career focus pill */}
              <div className="mt-auto pt-3 border-t border-stone-100 mb-4">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">
                  Career Trajectory
                </p>
                <p className="text-[11px] font-medium text-stone-700 truncate">
                  {program.careerFocus}
                </p>
              </div>

              {/* CTA link */}
              <Link
                href={`/programs/${program.slug}`}
                className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-lg bg-stone-50 hover:bg-[#153B27] hover:text-white active:scale-[0.985] active:translate-y-px text-[#14291D] text-xs font-semibold border border-stone-200/80 transition-all duration-150 group/btn"
              >
                <span>View Full Syllabus</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover/btn:text-white transition-colors" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
