import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Building,
  ChevronRight,
  Cpu,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Mail,
  MapPin,
  Scale,
  Sparkles,
} from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { facultiesCatalog, allDepartments } from '@/data/departmentsData';

export const metadata: Metadata = {
  title: 'Faculties & Academic Departments | University of Swat',
  description: 'Explore the 4 official faculties and 28 teaching departments at the University of Swat.',
};

const facultyIcons: Record<string, React.ReactNode> = {
  'physical-computational-sciences': <Cpu className="w-5 h-5 text-white" />,
  'chemical-life-sciences': <FlaskConical className="w-5 h-5 text-white" />,
  'allied-health-sciences': <HeartPulse className="w-5 h-5 text-white" />,
  'management-social-sciences': <Briefcase className="w-5 h-5 text-white" />,
  'languages-humanities-law': <Scale className="w-5 h-5 text-white" />,
  'humanities-legal-studies': <Scale className="w-5 h-5 text-white" />,
};

export default function FacultyPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen text-[#14291D]">
      {/* ─── 1. Deep Forest Green (#153B27) Architectural Hero Banner ─── */}
      <PageHeader
        tag="ACADEMIC STRUCTURE"
        title="Faculties & Teaching Departments"
        subtitle="The University of Swat is organized into specialized academic faculties encompassing 28 teaching departments, research institutes, and regional sub-campuses."
        eyebrow="ACADEMIC STRUCTURE"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academics' },
          { label: 'Faculties' },
        ]}
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 pb-20 sm:pb-28">
        {/* ─── 2. Overlapping 4-Stat Summary Bar with Bold Crimson Top Border (#7F1D1D) ─── */}
        <div className="-mt-10 sm:-mt-12 relative z-20 rounded-2xl bg-[#153B27] text-white border border-white/10 border-t-4 border-t-[#C8A96E] shadow-[0_24px_48px_-22px_rgba(12,25,18,0.5)] p-6 sm:p-8 mb-16 lg:mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            <div className="text-center sm:text-left sm:pr-4">
              <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#C8A96E]">
                5
              </span>
              <span className="text-xs uppercase tracking-wider text-white/70 font-bold mt-1 block">
                Academic Faculties
              </span>
              <span className="text-[11px] text-white/60 mt-0.5 block">
                Approved by Academic Council
              </span>
            </div>

            <div className="text-center sm:text-left pt-4 sm:pt-0 sm:px-6">
              <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#C8A96E]">
                28
              </span>
              <span className="text-xs uppercase tracking-wider text-white/70 font-bold mt-1 block">
                Teaching Departments
              </span>
              <span className="text-[11px] text-white/60 mt-0.5 block">
                Undergraduate &amp; Postgrad
              </span>
            </div>

            <div className="text-center sm:text-left pt-4 sm:pt-0 sm:px-6">
              <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#C8A96E]">
                60+
              </span>
              <span className="text-xs uppercase tracking-wider text-white/70 font-bold mt-1 block">
                Degree Programs
              </span>
              <span className="text-[11px] text-white/60 mt-0.5 block">
                BS, MS, MPhil &amp; PhD Tracks
              </span>
            </div>

            <div className="text-center sm:text-left pt-4 sm:pt-0 sm:pl-6">
              <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                250+
              </span>
              <span className="text-xs uppercase tracking-wider text-white/70 font-bold mt-1 block">
                Scholarly Faculty
              </span>
              <span className="text-[11px] text-white/60 mt-0.5 block">
                PhD Professors &amp; Researchers
              </span>
            </div>
          </div>
        </div>

        {/* ─── 3. Faculties & Departments with Forest Green & Crimson Contrast ─── */}
        <div className="space-y-20">
          {facultiesCatalog.map((faculty) => (
            <section
              key={faculty.slug}
              id={faculty.slug}
              className="scroll-mt-32"
              aria-labelledby={`heading-${faculty.slug}`}
            >
              {/* Faculty Group Header with Forest Green Badge (#153B27) & Subtle Bottom Divider Rule */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-300 mb-8 gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#153B27] flex items-center justify-center shrink-0 shadow-sm">
                    {facultyIcons[faculty.slug] ?? <GraduationCap className="w-5 h-5 text-white" />}
                  </div>
                  <div>
                    <h2
                      id={`heading-${faculty.slug}`}
                      className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D] tracking-tight"
                    >
                      {faculty.name}
                    </h2>
                    <span className="text-xs text-stone-500 uppercase tracking-widest font-semibold mt-0.5 block">
                      {faculty.departments.length} Departments &amp; Research Centers
                    </span>
                  </div>
                </div>

                <div className="text-xs font-semibold text-[#153B27] hidden sm:block">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                    Active Faculty Group
                  </span>
                </div>
              </div>

              {/* Department Cards Grid with 3px Forest Green / Crimson Top Accent Bar */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {faculty.departments.map((dept) => (
                  <article
                    key={dept.id}
                    className="p-6 rounded-2xl bg-white border border-stone-300 border-t-[3px] border-t-[#153B27] shadow-xs hover:border-[#7F1D1D] hover:border-t-[#7F1D1D] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group first:bg-[#153B27] first:text-white first:border-white/10 first:border-t-[#C8A96E] first:shadow-[0_24px_48px_-22px_rgba(12,25,18,0.5)] first:hover:bg-[#0F2D1E]! first:hover:border-white/10! first:hover:border-t-[#C8A96E]!"
                  >
                    <div>
                      {/* Top Row: HoD Badge in Forest Green Tint */}
                      <div className="flex items-start justify-between gap-3 mb-3.5">
                        <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-[#153B27]/10 text-[#153B27] border border-[#153B27]/20 group-first:bg-[#C8A96E]/15 group-first:text-[#C8A96E] group-first:border-[#C8A96E]/30">
                          {dept.headOfDepartment ? `HoD: ${dept.headOfDepartment}` : 'University Dept.'}
                        </span>

                        <div className="flex items-center gap-1 text-[11px] text-stone-600 group-first:text-white/60">
                          <MapPin className="w-3 h-3 text-emerald-700 shrink-0 group-first:text-[#C8A96E]" />
                          <span>{dept.campus.split(' ')[0]}</span>
                        </div>
                      </div>

                      {/* Department Title */}
                      <h3 className="font-serif text-xl font-bold text-[#14291D] group-hover:text-[#153B27] group-first:text-white group-first:group-hover:text-[#C8A96E]! transition-colors mb-2.5 leading-snug">
                        <Link href={`/departments/${dept.id}`}>
                          {dept.name}
                        </Link>
                      </h3>

                      <p className="font-sans text-xs sm:text-[13px] text-stone-600 leading-relaxed mb-4 line-clamp-3 group-first:text-white/70">
                        {dept.aims || dept.description}
                      </p>

                      {/* Programs Offered Chips */}
                      <div className="space-y-1.5 mb-6">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block group-first:text-[#C8A96E]">
                          Offered Degrees:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {dept.programsOffered.slice(0, 3).map((prog, pIdx) => (
                            <span
                              key={pIdx}
                              className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-stone-50 border border-stone-200 text-stone-700 group-first:bg-white/[0.07] group-first:border-white/[0.12] group-first:text-white/75"
                            >
                              {prog.split('(')[0].trim()}
                            </span>
                          ))}
                          {dept.programsOffered.length > 3 && (
                            <span className="text-[11px] font-semibold text-stone-600 self-center group-first:text-white/60">
                              +{dept.programsOffered.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Row: Contact Email & Bold Crimson "Profile & Faculty →" Link */}
                    <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs mt-auto group-first:border-white/15">
                      <span className="text-stone-600 font-mono text-[11px] flex items-center gap-1 group-first:text-white/60">
                        <Mail className="w-3 h-3 text-stone-500 shrink-0 group-first:text-white/60" />
                        <span className="truncate max-w-[130px]">{dept.contactEmail}</span>
                      </span>

                      <Link
                        href={`/departments/${dept.id}`}
                        className="font-semibold text-[#7F1D1D] hover:text-[#991B1B] hover:underline flex items-center gap-1 transition-colors group-first:text-[#C8A96E] group-first:hover:text-[#E5CD9B]!"
                      >
                        <span>Profile &amp; Faculty</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
