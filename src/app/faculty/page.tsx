import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Briefcase, Cpu, FlaskConical, Scale } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Faculty | University of Swat',
  description: 'Departments and institutes across the five faculties of the University of Swat.',
};

const faculties = [
  {
    id: 'computing',
    icon: <Cpu className="w-5 h-5" />,
    title: 'Computing & IT',
    departments: [
      'Department of Computer Science',
      'Department of Software Engineering',
      'Department of Information Technology',
      'Centre for Artificial Intelligence & Data Science',
    ],
  },
  {
    id: 'sciences',
    icon: <FlaskConical className="w-5 h-5" />,
    title: 'Sciences',
    departments: [
      'Institute of Chemical Sciences',
      'Department of Physics',
      'Department of Botany',
      'Department of Zoology',
      'Department of Earth & Environmental Sciences',
      'Centre for Biotechnology & Microbiology',
    ],
  },
  {
    id: 'management',
    icon: <Briefcase className="w-5 h-5" />,
    title: 'Management Sciences',
    departments: [
      'Institute of Management Sciences (IMS)',
      'Department of Economics & Development',
      'Centre for Tourism & Hospitality Management',
    ],
  },
  {
    id: 'law',
    icon: <Scale className="w-5 h-5" />,
    title: 'Law & Legal Studies',
    departments: [
      'Department of Law',
      'Department of Sharia Studies',
      'Department of Public Administration',
    ],
  },
  {
    id: 'humanities',
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Humanities & Languages',
    departments: [
      'Department of English',
      'Department of Urdu',
      'Department of Pashto',
      'Department of Islamic Studies',
      'Department of History & Pakistan Studies',
      'Department of Sociology',
      'Department of Applied Psychology',
      'Department of Media & Communication Studies',
    ],
  },
];

export default function FacultyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academic Structure"
        title="Faculty & Departments"
        description="The departments, institutes and centres that deliver teaching and research at the University of Swat."
      />

      <main className="py-14 lg:py-20 bg-[#F6F5F0]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          {faculties.map((faculty, index) => (
            <section
              key={faculty.id}
              id={faculty.id}
              className={
                index % 2 === 0
                  ? 'scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 lg:mb-16'
                  : 'scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 lg:mb-16'
              }
            >
              {/* Summary card */}
              <div className="lg:col-span-4 flex flex-col justify-between p-6 lg:p-8 rounded-xl bg-white border border-stone-200/90 shadow-xs">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#153B27]/8 text-[#153B27] flex items-center justify-center mb-4">
                    {faculty.icon}
                  </div>
                  <h2 className="font-serif text-2xl lg:text-3xl text-[#14291D] font-bold tracking-[-0.02em] mb-2">
                    {faculty.title}
                  </h2>
                  <p className="text-sm text-stone-500 leading-[1.65]">
                    {faculty.departments.length} departments and centres offering programs from BS
                    to doctoral level.
                  </p>
                </div>
                <Link
                  href="/programs"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#153B27] hover:text-[#14291D] transition-colors"
                >
                  View programs
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Department list */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
                {faculty.departments.map(department => (
                  <div
                    key={department}
                    className="group p-5 rounded-xl bg-white border border-stone-200/90 shadow-xs border-l-2 border-l-[#153B27] hover:border-l-[#7F1D1D] transition-colors"
                  >
                    <p className="text-sm font-bold text-[#14291D]">{department}</p>
                    <p className="text-xs text-stone-500 mt-1.5">
                      Faculty of {faculty.title}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
