import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BookMarked, CalendarDays, FileCheck2, Landmark, Library } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Academics | University of Swat',
  description: 'Academic calendar, examination services, central library and quality assurance at the University of Swat.',
};

const blocks = [
  {
    id: 'calendar',
    icon: <CalendarDays className="w-5 h-5" />,
    eyebrow: 'Semester Schedule',
    title: 'Academic Calendar',
    text: 'Key dates for the Fall 2026 and Spring 2027 semesters — registration, classes, examinations and recesses.',
    items: [
      'Fall 2026 classes: Aug 31 – Dec 18, 2026',
      'Terminal examinations: Dec 21, 2026 – Jan 15, 2027',
      'Spring 2027 registration opens: Jan 4, 2027',
      'Spring 2027 classes begin: Feb 1, 2027',
    ],
  },
  {
    id: 'examinations',
    icon: <FileCheck2 className="w-5 h-5" />,
    eyebrow: 'Controller of Examinations',
    title: 'Examination Office',
    text: 'Date sheets, roll-number slips, supplementary exams and result processing.',
    items: [
      'Roll-number slips via the student portal',
      'Supplementary exam registration: Nov 1–20, 2026',
      'Result notification within 30 days of the last paper',
      'Verification & degree processing desk',
    ],
  },
  {
    id: 'library',
    icon: <Library className="w-5 h-5" />,
    eyebrow: 'Central Library',
    title: 'Library & Digital Resources',
    text: 'Collections, reading halls and 24/7 digital access for students and faculty.',
    items: [
      'Open-stack collection of 120,000+ volumes',
      'HEC digital library terminals in every reading hall',
      'Extended hours during examination season',
      'Research support & citation assistance',
    ],
  },
  {
    id: 'quality',
    icon: <Landmark className="w-5 h-5" />,
    eyebrow: 'Quality Assurance',
    title: 'Quality Enhancement Cell',
    text: 'Internal quality audits, faculty development and program reviews aligned to HEC standards.',
    items: [
      'Annual program self-assessment reports',
      'Faculty development workshops & NFDP',
      'Course evaluation system',
      'HEC W-Category 91.4% rating maintained',
    ],
  },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Academics"
        description="The academic framework that supports teaching, learning and research — calendar, examinations, library and quality."
      />

      <main className="py-14 lg:py-20 bg-[#F6F5F0]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {blocks.map(block => (
              <article
                key={block.id}
                className="group flex flex-col p-6 sm:p-8 rounded-xl bg-white border border-stone-200/90 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-[0_18px_40px_-18px_rgba(21,59,39,0.25)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-11 h-11 rounded-xl bg-[#153B27]/8 text-[#153B27] flex items-center justify-center shrink-0">
                    {block.icon}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                    {block.eyebrow}
                  </span>
                </div>
                <h2 className="font-serif text-2xl text-[#14291D] font-bold tracking-[-0.02em] mb-2">
                  {block.title}
                </h2>
                <p className="text-sm text-stone-500 leading-[1.65] mb-5">{block.text}</p>
                <ul className="space-y-2.5 mb-6">
                  {block.items.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-stone-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#153B27] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/campus-life"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#153B27] hover:text-[#14291D] transition-colors"
                >
                  Visit campus facilities
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>

          {/* Quick links strip */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#153B27] text-white text-sm font-semibold hover:bg-[#14291D] transition-colors"
            >
              <BookMarked className="w-4 h-4" />
              Admissions & registration
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-stone-200 text-stone-700 text-sm font-semibold hover:bg-stone-50 transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
              Research & ORIC
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
