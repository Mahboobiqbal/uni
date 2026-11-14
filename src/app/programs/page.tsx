import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Briefcase, Cpu, FlaskConical, GraduationCap, Scale } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Programs | University of Swat',
  description:
    'Undergraduate, graduate and doctoral degree programs at the University of Swat — BS, MS, MPhil and PhD across five academic faculties.',
};

const levels = [
  {
    id: 'undergraduate',
    icon: <GraduationCap className="w-5 h-5" />,
    title: 'Undergraduate',
    subtitle: '4-year BS & professional degrees',
    programs: [
      'BS Computer Science',
      'BS Software Engineering',
      'BS Information Technology',
      'BS Environmental Sciences',
      'BS Biotechnology',
      'BS Microbiology',
      'BS Chemistry',
      'BS Physics',
      'BS Botany',
      'BS Zoology',
      'Doctor of Pharmacy (Pharm-D)',
      'BBA (Honors)',
      'BS Economics',
      'LLB (5-Year)',
      'BS English',
      'BS Urdu',
      'BS Pashto',
      'BS Islamic Studies',
      'BS Sociology',
      'BS Applied Psychology',
      'BS Mass Communication',
    ],
  },
  {
    id: 'graduate',
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Graduate · MS / MPhil',
    subtitle: 'Research and professional master\u2019s degrees',
    programs: [
      'MS Computer Science',
      'MS Software Engineering',
      'MS Information Technology',
      'MS Management Sciences',
      'MS Economics',
      'MS Microbiology',
      'MPhil Archaeology & Heritage',
      'MPhil Chemistry',
      'MPhil Physics',
      'MPhil Mathematics',
      'MPhil Botany',
      'MPhil Zoology',
      'MPhil English',
      'MPhil Islamic Studies',
      'LLM',
      'MA Sociology',
      'MA Psychology',
    ],
  },
  {
    id: 'doctoral',
    icon: <FlaskConical className="w-5 h-5" />,
    title: 'Doctoral · PhD',
    subtitle: 'Doctoral research programs',
    programs: [
      'PhD Computer Science',
      'PhD Chemistry',
      'PhD Physics',
      'PhD Mathematics',
      'PhD Botany & Herbal Studies',
      'PhD Zoology & Wildlife',
      'PhD Economics',
      'PhD English',
      'PhD Islamic Studies',
    ],
  },
];

const facultyShortcuts = [
  { label: 'Computing & IT', href: '/faculty#computing', icon: <Cpu className="w-4 h-4" /> },
  { label: 'Sciences', href: '/faculty#sciences', icon: <FlaskConical className="w-4 h-4" /> },
  { label: 'Management Sciences', href: '/faculty#management', icon: <Briefcase className="w-4 h-4" /> },
  { label: 'Law & Legal Studies', href: '/faculty#law', icon: <Scale className="w-4 h-4" /> },
  { label: 'Humanities & Languages', href: '/faculty#humanities', icon: <BookOpen className="w-4 h-4" /> },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academic Programs"
        title="Programs"
        description="Complete degree catalogue across undergraduate, graduate and doctoral levels, organized by faculty."
      />

      <main className="py-14 lg:py-20 bg-[#F6F5F0]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          {/* Level sections */}
          <div className="space-y-12 lg:space-y-16">
            {levels.map(level => (
              <section key={level.id} id={level.id} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-10 rounded-xl bg-[#153B27]/8 text-[#153B27] flex items-center justify-center shrink-0">
                    {level.icon}
                  </span>
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#14291D] font-bold tracking-[-0.02em]">
                      {level.title}
                    </h2>
                    <p className="text-xs text-stone-500 font-medium mt-0.5">{level.subtitle}</p>
                  </div>
                  <span className="ml-auto text-xs font-bold text-[#7F1D1D] bg-[#7F1D1D]/8 border border-[#7F1D1D]/20 px-3 py-1.5 rounded-full">
                    {level.programs.length} programs
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {level.programs.map(program => (
                    <Link
                      key={program}
                      href="/admissions"
                      className="group flex items-center justify-between gap-3 p-4 rounded-xl bg-white border border-stone-200/90 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-[0_14px_30px_-16px_rgba(21,59,39,0.25)]"
                    >
                      <span className="text-sm font-semibold text-[#14291D] group-hover:text-[#153B27] transition-colors">
                        {program}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#153B27] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Faculty shortcuts */}
          <section className="mt-14 lg:mt-20 p-6 sm:p-8 rounded-xl bg-white border border-stone-200/90 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
              <h2 className="font-serif text-2xl text-[#14291D] font-bold">
                Explore by Faculty
              </h2>
              <p className="text-sm text-stone-500 sm:ml-auto">
                Department-level details for each academic family.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {facultyShortcuts.map(f => (
                <Link
                  key={f.label}
                  href={f.href}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-stone-200/90 bg-stone-50/60 transition-all duration-300 hover:bg-white hover:border-emerald-500/40 hover:shadow-[0_12px_26px_-14px_rgba(21,59,39,0.25)]"
                >
                  <span className="text-[#153B27]">{f.icon}</span>
                  <span className="text-sm font-semibold text-[#14291D]">{f.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#153B27] ml-auto transition-all" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
