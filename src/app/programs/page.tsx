import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Briefcase, Cpu, FlaskConical, GraduationCap, Scale, CheckCircle2 } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { programsDetailCatalog } from '@/data/programsDetailData';
import { facultiesCatalog } from '@/data/departmentsData';

export const metadata: Metadata = {
  title: 'Academic Degree Programs | University of Swat',
  description:
    'Undergraduate, graduate and doctoral degree programs at the University of Swat — BS, MS, MPhil and PhD across 4 faculties.',
};

export default function ProgramsPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Academic Programs"
        title="Degrees &amp; Curricula"
        subtitle="Explore our comprehensive array of accredited undergraduate, master's, and doctoral programs designed for academic rigor and career readiness."
        eyebrow="Scholastic Degree Finder"
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20">
        
        {/* Featured Key Degree Programs with Dedicated Specification Pages */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="h-0.5 w-7 bg-[#7F1D1D]" />
            <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
              Flagship Degrees
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mb-4">
            Featured Degree Specifications
          </h2>
          <p className="font-sans text-stone-600 max-w-2xl text-sm sm:text-base leading-relaxed mb-8">
            Detailed semester-by-semester course roadmaps, credit allocations, eligibility requirements, and career pathways.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programsDetailCatalog.map((prog) => (
              <div
                key={prog.slug}
                className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-xs hover:border-[#153B27]/40 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-[#153B27] border border-emerald-200">
                      {prog.duration}
                    </span>
                    <span className="text-[11px] font-mono text-stone-400">
                      {prog.creditHours} Credits
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#153B27] transition-colors mb-2">
                    <Link href={`/programs/${prog.slug}`}>
                      {prog.name}
                    </Link>
                  </h3>

                  <p className="font-sans text-xs text-stone-600 leading-relaxed mb-4 line-clamp-3">
                    {prog.description}
                  </p>

                  <div className="text-[11px] text-stone-500 font-medium mb-4 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7F1D1D] shrink-0" />
                    <span>{prog.departmentName}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#153B27]">
                    View Detailed Syllabus
                  </span>
                  <Link
                    href={`/programs/${prog.slug}`}
                    className="p-2 rounded-xl bg-stone-50 border border-stone-200 text-stone-600 group-hover:bg-[#153B27] group-hover:text-white transition-colors"
                    aria-label={`View details of ${prog.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Academic Catalog by Faculty */}
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="h-0.5 w-7 bg-[#153B27]" />
            <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">
              Full Program Directory
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mb-8">
            Complete Degrees by Academic Faculty
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {facultiesCatalog.map((faculty) => (
              <div
                key={faculty.slug}
                className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs"
              >
                <div className="pb-4 border-b border-stone-100 mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#7F1D1D] block mb-1">
                    Faculty
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">
                    {faculty.name}
                  </h3>
                </div>

                <div className="space-y-6">
                  {faculty.departments.map((dept) => (
                    <div key={dept.id} className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70">
                      <div className="flex items-center justify-between mb-2">
                        <Link
                          href={`/departments/${dept.id}`}
                          className="font-serif text-base font-bold text-stone-900 hover:text-[#153B27] transition-colors"
                        >
                          {dept.name}
                        </Link>
                        <Link
                          href={`/departments/${dept.id}`}
                          className="text-xs font-semibold text-[#153B27] hover:underline"
                        >
                          Dept. Profile
                        </Link>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {dept.programsOffered.map((p, pIdx) => (
                          <span
                            key={pIdx}
                            className="text-xs px-2.5 py-1 rounded-lg bg-white border border-stone-200 text-stone-700 font-medium"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
