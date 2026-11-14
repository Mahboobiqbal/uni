import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Award, BookOpen, CheckCircle2, DollarSign, GraduationCap, Building2, Briefcase } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { programsDetailCatalog } from '@/data/programsDetailData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return programsDetailCatalog.map((prog) => ({
    slug: prog.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const prog = programsDetailCatalog.find((p) => p.slug === slug);
  if (!prog) return { title: 'Program Not Found | University of Swat' };
  return {
    title: `${prog.name} | University of Swat`,
    description: prog.description,
  };
}

export default async function ProgramDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const prog = programsDetailCatalog.find((p) => p.slug === slug);

  if (!prog) {
    notFound();
  }

  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag={prog.degreeLevel}
        title={prog.name}
        subtitle={prog.description}
        eyebrow={prog.facultyGroup}
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20">
        
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-[#153B27] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Programs</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Degree Specification Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-[#153B27] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Duration</span>
                  <span className="font-semibold text-xs sm:text-sm text-stone-800">{prog.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-rose-50 text-[#7F1D1D] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Credit Hours</span>
                  <span className="font-semibold text-xs sm:text-sm text-stone-800">{prog.creditHours} Credits</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-50 text-[#B48A3E] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">System</span>
                  <span className="font-semibold text-xs sm:text-sm text-stone-800">Semester System</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-stone-100 text-stone-700 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">Campus</span>
                  <span className="font-semibold text-xs sm:text-sm text-stone-800">Main Charbagh</span>
                </div>
              </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="h-0.5 w-6 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">
                  Eligibility &amp; Admission Requisites
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
                Who Can Apply
              </h2>
              <p className="font-sans text-stone-700 text-base leading-relaxed p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
                {prog.eligibility}
              </p>
            </div>

            {/* Program Learning Outcomes */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="h-0.5 w-6 bg-[#7F1D1D]" />
                <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                  Curricular Objectives
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-6">
                Key Learning Outcomes
              </h2>
              <div className="space-y-3">
                {prog.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#153B27] shrink-0 mt-0.5" />
                    <span className="font-sans text-stone-700 text-sm sm:text-base leading-relaxed">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Semester-Wise Roadmap */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="h-0.5 w-6 bg-[#B48A3E]" />
                <span className="text-xs uppercase tracking-widest text-[#B48A3E] font-bold">
                  Academic Roadmap
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-6">
                Semester Course Breakdown
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prog.semesterOutline.map((sem, sIdx) => (
                  <div key={sIdx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
                    <h4 className="font-serif text-base font-bold text-stone-900 pb-2 border-b border-stone-200/60 mb-3">
                      {sem.semester}
                    </h4>
                    <ul className="space-y-1.5">
                      {sem.courses.map((c, cIdx) => (
                        <li key={cIdx} className="text-xs text-stone-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#153B27] shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="h-0.5 w-6 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">
                  Professional Pathways
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-6">
                Career Prospects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {prog.careerProspects.map((career, cIdx) => (
                  <div key={cIdx} className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex items-center gap-3">
                    <Briefcase className="w-4 h-4 text-[#7F1D1D] shrink-0" />
                    <span className="font-semibold text-xs sm:text-sm text-stone-800">{career}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Action Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-4 pb-4 border-b border-stone-100">
                Enrollment Overview
              </h3>

              <div className="space-y-4 text-xs sm:text-[13px] mb-8">
                <div>
                  <span className="text-stone-400 uppercase tracking-wider block font-bold text-[10px]">
                    Teaching Department
                  </span>
                  <Link
                    href={`/departments/${prog.departmentId}`}
                    className="font-semibold text-[#153B27] hover:underline"
                  >
                    {prog.departmentName}
                  </Link>
                </div>

                <div>
                  <span className="text-stone-400 uppercase tracking-wider block font-bold text-[10px]">
                    Estimated Tuition Fee
                  </span>
                  <span className="font-medium text-stone-700">
                    {prog.feePerSemester}
                  </span>
                </div>

                <div>
                  <span className="text-stone-400 uppercase tracking-wider block font-bold text-[10px]">
                    Scholarships Available
                  </span>
                  <span className="font-medium text-stone-700">
                    HEC Need-Based, KPEF, Ehsaas, University Merit
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <Link
                  href="/admissions"
                  className="w-full py-3 rounded-xl bg-[#7F1D1D] text-white font-semibold text-xs text-center hover:bg-[#7F1D1D]/90 transition-colors shadow-xs"
                >
                  Apply Online Now
                </Link>
                <Link
                  href={`/departments/${prog.departmentId}`}
                  className="w-full py-3 rounded-xl bg-[#153B27] text-white font-semibold text-xs text-center hover:bg-[#153B27]/90 transition-colors"
                >
                  Department Faculty &amp; Labs
                </Link>
              </div>
            </div>

            {/* Other Featured Programs */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <h4 className="font-serif text-lg font-bold text-stone-900 mb-4">
                Other Degree Programs
              </h4>
              <div className="space-y-2 text-xs">
                {programsDetailCatalog
                  .filter((p) => p.slug !== prog.slug)
                  .map((other) => (
                    <Link
                      key={other.slug}
                      href={`/programs/${other.slug}`}
                      className="block p-3 rounded-xl bg-stone-50 border border-stone-100 hover:border-stone-300 text-stone-700 hover:text-[#153B27] font-medium transition-colors"
                    >
                      {other.name}
                    </Link>
                  ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
