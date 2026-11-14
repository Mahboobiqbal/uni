import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Cpu, FlaskConical, Briefcase, Scale, GraduationCap, Building, Mail } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { facultiesCatalog, allDepartments } from '@/data/departmentsData';

export const metadata: Metadata = {
  title: 'Faculties & Academic Departments | University of Swat',
  description: 'Explore the 4 official faculties and 28 teaching departments at the University of Swat.',
};

const facultyIcons: Record<string, React.ReactNode> = {
  'physical-computational-sciences': <Cpu className="w-5 h-5 text-[#153B27]" />,
  'chemical-life-sciences': <FlaskConical className="w-5 h-5 text-[#7F1D1D]" />,
  'management-social-sciences': <Briefcase className="w-5 h-5 text-[#B48A3E]" />,
  'humanities-legal-studies': <Scale className="w-5 h-5 text-stone-700" />,
};

export default function FacultyPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Academic Structure"
        title="Faculties & Teaching Departments"
        subtitle="The University of Swat is organized into 4 major academic faculties encompassing 28 specialized teaching departments and research institutes."
        eyebrow="Scholastic Excellence in the Valley of Swat"
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20">
        
        {/* Quick Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs mb-16">
          <div>
            <span className="block font-serif text-3xl sm:text-4xl font-bold text-[#153B27]">4</span>
            <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">Academic Faculties</span>
          </div>
          <div>
            <span className="block font-serif text-3xl sm:text-4xl font-bold text-[#7F1D1D]">28</span>
            <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">Teaching Departments</span>
          </div>
          <div>
            <span className="block font-serif text-3xl sm:text-4xl font-bold text-[#B48A3E]">60+</span>
            <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">Degree Programs</span>
          </div>
          <div>
            <span className="block font-serif text-3xl sm:text-4xl font-bold text-stone-900">250+</span>
            <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">Scholarly Faculty</span>
          </div>
        </div>

        {/* Faculties & Departments */}
        <div className="space-y-16">
          {facultiesCatalog.map((faculty, fIdx) => (
            <div key={faculty.slug} id={faculty.slug} className="scroll-mt-28">
              {/* Faculty Group Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 mb-8 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-stone-100 border border-stone-200">
                    {facultyIcons[faculty.slug] ?? <GraduationCap className="w-5 h-5 text-stone-700" />}
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                      {faculty.name}
                    </h2>
                    <span className="text-xs text-stone-500 uppercase tracking-widest font-medium">
                      {faculty.departments.length} Departments &amp; Research Centers
                    </span>
                  </div>
                </div>
              </div>

              {/* Department Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {faculty.departments.map((dept) => (
                  <div
                    key={dept.id}
                    className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:border-[#153B27]/40 hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-stone-100 text-stone-700 border border-stone-200">
                          {dept.headOfDepartment ? `HoD: ${dept.headOfDepartment}` : 'University Dept.'}
                        </span>
                        <Link
                          href={`/departments/${dept.id}`}
                          className="text-stone-400 group-hover:text-[#153B27] transition-colors"
                          aria-label={`View ${dept.name}`}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>

                      <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#153B27] transition-colors mb-2.5">
                        <Link href={`/departments/${dept.id}`}>
                          {dept.name}
                        </Link>
                      </h3>

                      <p className="font-sans text-xs sm:text-[13px] text-stone-600 leading-relaxed mb-4 line-clamp-3">
                        {dept.aims || dept.description}
                      </p>

                      {/* Programs Chips */}
                      <div className="space-y-1.5 mb-6">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                          Offered Degrees:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {dept.programsOffered.slice(0, 3).map((prog, pIdx) => (
                            <span
                              key={pIdx}
                              className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-stone-50 border border-stone-200 text-stone-700"
                            >
                              {prog.split('(')[0].trim()}
                            </span>
                          ))}
                          {dept.programsOffered.length > 3 && (
                            <span className="text-[11px] font-semibold text-stone-400 self-center">
                              +{dept.programsOffered.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                      <span className="text-stone-400 font-mono text-[11px] flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {dept.contactEmail}
                      </span>
                      <Link
                        href={`/departments/${dept.id}`}
                        className="font-semibold text-[#153B27] hover:underline flex items-center gap-1"
                      >
                        Profile &amp; Faculty
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
