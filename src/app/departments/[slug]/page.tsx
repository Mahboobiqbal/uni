import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BookOpen, GraduationCap, Mail, MapPin, Award, CheckCircle2, FlaskConical, Users } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { allDepartments, facultiesCatalog } from '@/data/departmentsData';
import { slugify } from '@/lib/slugify';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allDepartments.map((dept) => ({
    slug: dept.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const dept = allDepartments.find((d) => d.id === slug);
  if (!dept) return { title: 'Department Not Found | University of Swat' };
  return {
    title: `${dept.name} | University of Swat`,
    description: dept.aims || dept.description,
  };
}

export default async function DepartmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const dept = allDepartments.find((d) => d.id === slug);

  if (!dept) {
    notFound();
  }

  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag={dept.facultyGroup}
        title={dept.name}
        subtitle={dept.aims}
        eyebrow="Academic Department · University of Swat"
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20">
        
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/faculty"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-[#153B27] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Faculties &amp; Departments</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview & Mission */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="h-0.5 w-6 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">
                  Departmental Mission &amp; Overview
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-6">
                About the Department
              </h2>
              <p className="font-sans text-stone-700 text-base sm:text-lg leading-relaxed mb-6">
                {dept.description}
              </p>
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                  Academic Aims &amp; Strategic Purpose
                </h4>
                <p className="font-sans text-sm text-stone-600 leading-relaxed">
                  {dept.aims}
                </p>
              </div>
            </div>

            {/* Degree Programs Offered */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="h-0.5 w-6 bg-[#7F1D1D]" />
                <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                  Curriculum &amp; Academic Degrees
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-6">
                Offered Degree Programs
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dept.programsOffered.map((program, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-[#153B27]/40 transition-colors flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-xl bg-white border border-stone-200 text-[#153B27] shrink-0 mt-0.5">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-stone-900">
                        {program}
                      </h4>
                      <span className="text-xs text-stone-500 font-sans block mt-1">
                        HEC Recognized · Semester System
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scholarly Faculty Roster */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="h-0.5 w-6 bg-[#B48A3E]" />
                <span className="text-xs uppercase tracking-widest text-[#B48A3E] font-bold">
                  Academic Faculty
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-6">
                Teaching Faculty &amp; Researchers
              </h2>

              {dept.facultyMembers && dept.facultyMembers.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {dept.facultyMembers.map((member, idx) => (
                    <Link
                      key={idx}
                      href={`/faculty/${slugify(`${member.name}-${dept.id}`)}`}
                      className="group p-5 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center gap-4 hover:border-stone-300 transition-colors"
                    >
                      <div className="w-16 h-16 rounded-2xl overflow-hidden bg-stone-200 shrink-0 relative flex items-center justify-center text-stone-400 font-serif text-xl font-bold">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          member.name.slice(0, 2)
                        )}
                      </div>
                      <div>
                        <h4 className="font-serif text-base font-bold text-stone-900 group-hover:text-[#153B27] transition-colors">
                          {member.name}
                        </h4>
                        <span className="text-xs font-semibold text-[#153B27] block">
                          {member.designation}
                        </span>
                        {member.qualification && (
                          <span className="text-[11px] text-stone-500 block mt-0.5">
                            {member.qualification}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-stone-50 border border-dashed border-stone-200 text-center">
                  <Users className="w-8 h-8 text-stone-400 mx-auto mb-2" />
                  <h4 className="font-serif text-base font-bold text-stone-800">
                    Department Faculty
                  </h4>
                  <p className="text-xs text-stone-500 max-w-sm mx-auto mt-1">
                    Supervised by {dept.headOfDepartment || 'Head of Department'}. Official faculty directory and office hours are available via the departmental secretariat.
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Department Facts Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-6 pb-4 border-b border-stone-100">
                Department Directory
              </h3>

              <div className="space-y-4 text-xs sm:text-[13px]">
                <div>
                  <span className="text-stone-400 uppercase tracking-wider block font-bold text-[10px]">
                    Head of Department
                  </span>
                  <span className="font-semibold text-stone-800 text-sm">
                    {dept.headOfDepartment || 'Academic Chairperson'}
                  </span>
                </div>

                <div>
                  <span className="text-stone-400 uppercase tracking-wider block font-bold text-[10px]">
                    Faculty Division
                  </span>
                  <span className="font-semibold text-stone-800">
                    {dept.facultyGroup}
                  </span>
                </div>

                <div>
                  <span className="text-stone-400 uppercase tracking-wider block font-bold text-[10px]">
                    Campus Location
                  </span>
                  <span className="font-medium text-stone-700 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#153B27]" />
                    Academic Block C, Charbagh Main Campus
                  </span>
                </div>

                <div>
                  <span className="text-stone-400 uppercase tracking-wider block font-bold text-[10px]">
                    Official Inquiry Email
                  </span>
                  <span className="font-mono text-stone-700 flex items-center gap-1.5 mt-0.5">
                    <Mail className="w-3.5 h-3.5 text-[#7F1D1D]" />
                    {dept.contactEmail}
                  </span>
                </div>

                <div>
                  <span className="text-stone-400 uppercase tracking-wider block font-bold text-[10px]">
                    Accreditation &amp; Standards
                  </span>
                  <span className="font-medium text-stone-700">
                    Higher Education Commission (HEC) of Pakistan
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col gap-2.5">
                <Link
                  href="/admissions"
                  className="w-full py-3 rounded-xl bg-[#153B27] text-white font-semibold text-xs text-center hover:bg-[#153B27]/90 transition-colors shadow-xs"
                >
                  Apply for Admission
                </Link>
                <Link
                  href="/academics/downloads"
                  className="w-full py-3 rounded-xl bg-stone-100 text-stone-700 font-semibold text-xs text-center hover:bg-stone-200 transition-colors"
                >
                  Download Syllabi &amp; Rules
                </Link>
              </div>
            </div>

            {/* Other Departments in Faculty */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <h4 className="font-serif text-lg font-bold text-stone-900 mb-4">
                Other Departments in {dept.facultyGroup.split('&')[0]}
              </h4>
              <div className="space-y-2 text-xs">
                {allDepartments
                  .filter((d) => d.facultyGroup === dept.facultyGroup && d.id !== dept.id)
                  .slice(0, 4)
                  .map((od) => (
                    <Link
                      key={od.id}
                      href={`/departments/${od.id}`}
                      className="block p-3 rounded-xl bg-stone-50 border border-stone-100 hover:border-stone-300 text-stone-700 hover:text-[#153B27] font-medium transition-colors"
                    >
                      {od.name}
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
