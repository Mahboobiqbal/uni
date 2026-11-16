import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail, MapPin, Users } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { allDepartments } from '@/data/departmentsData';
import { programsDetailCatalog } from '@/data/programsDetailData';
import { slugify } from '@/lib/slugify';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const FALLBACK_HERO = '/images/campus/charbagh-campus.jpg';

/** Authentic campus & laboratory facility photos for departmental banners. */
const HERO_IMAGES: Record<string, string> = {
  chemistry: '/campus-shot-2.jpg',
  botany: '/campus-shot-3.jpg',
  zoology: '/campus-shot-1.jpg',
  'environmental-sciences': '/campus-main.jpg',
  'biotechnology-genetics-forensic-and-microbiology': '/campus-shot-2.jpg',
  'english-and-foreign-languages': '/campus-shot-1.jpg',
};

const durationOf = (prog: string): string => {
  const l = prog.toLowerCase();
  if (l.includes('phd') || l.includes('ph.d') || l.includes('doctorate')) return '3–5 Years';
  if (l.startsWith('llb') || l.includes('law') || l.startsWith('dpt') || l.startsWith('doctor of')) return '5 Years';
  if (
    l.startsWith('ms') ||
    l.startsWith('mphil') ||
    l.startsWith('m.phil') ||
    l.startsWith('mba') ||
    l.startsWith('llm') ||
    l.startsWith('master')
  ) {
    return '2 Years';
  }
  return '4 Years';
};

const durationBadgeClass = (prog: string): string => {
  const l = prog.toLowerCase();
  if (l.includes('phd') || l.includes('ph.d') || l.includes('doctorate')) {
    return 'bg-amber-900/10 text-amber-900 border-[#C8A96E]/70';
  }
  if (
    l.startsWith('ms') ||
    l.startsWith('mphil') ||
    l.startsWith('m.phil') ||
    l.startsWith('mba') ||
    l.startsWith('llm') ||
    l.startsWith('master')
  ) {
    return 'bg-[#7F1D1D]/10 text-[#7F1D1D] border-[#E4C6C6]';
  }
  return 'bg-[#153B27]/10 text-[#153B27] border-[#C9D6C2]';
};

const flagshipSlug = (prog: string): string | undefined => {
  const norm = prog.toLowerCase();
  const found = programsDetailCatalog.find(
    (p) =>
      norm.includes(p.slug.replace(/-/g, ' ')) ||
      norm.includes(p.name.toLowerCase()) ||
      p.name.toLowerCase().includes(norm.split('(')[0].trim())
  );
  return found?.slug;
};

const initials = (name: string): string =>
  name
    .replace(/^(Dr\.|Prof\.|Mr\.|Ms\.|Mrs\.)\s*/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

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

  const heroImage = HERO_IMAGES[dept.id] ?? FALLBACK_HERO;

  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag={dept.facultyGroup}
        title={dept.name}
        eyebrow="Academic Department · University of Swat"
        backgroundImage={heroImage}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Faculties', href: '/faculty' },
          { label: dept.name },
        ]}
      />

      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-14">
            {/* About the Department — editorial, on the page canvas */}
            <section aria-labelledby="about-heading">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="h-0.5 w-7 bg-[#7F1D1D]" />
                <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                  Departmental Overview
                </span>
              </div>
              <h2 id="about-heading" className="font-serif text-3xl sm:text-4xl font-bold text-[#14291D] tracking-[-0.02em] mb-5">
                About the Department
              </h2>
              <p className="font-sans text-stone-600 text-base sm:text-lg leading-[1.75]">
                {dept.description}
              </p>

              <div className="mt-7 border-l-4 border-[#7F1D1D] pl-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#7F1D1D]">
                  Departmental Mission
                </h4>
                <p className="text-stone-700 mt-2 text-sm sm:text-base leading-relaxed">
                  {dept.aims}
                </p>
              </div>
            </section>

            {/* Offered Degree Programs — sharp white cards on canvas */}
            <section aria-labelledby="programs-heading">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="h-0.5 w-7 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">
                  Curriculum &amp; Academic Degrees
                </span>
              </div>
              <h2 id="programs-heading" className="font-serif text-3xl sm:text-4xl font-bold text-[#14291D] tracking-[-0.02em] mb-6">
                Offered Degree Programs
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dept.programsOffered.map((program) => {
                  const slugPath = flagshipSlug(program) ?? '/programs';
                  return (
                    <div
                      key={program}
                      className="bg-white border border-stone-200 hover:border-[#153B27] rounded-xl p-5 shadow-xs transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${durationBadgeClass(program)}`}>
                          {durationOf(program)}
                        </span>
                        <h3 className="font-serif text-lg font-bold text-stone-900 mt-3 leading-snug">
                          {program}
                        </h3>
                        <p className="text-xs text-stone-500 mt-1.5">HEC Recognized • Semester System</p>
                      </div>
                      <Link
                        href={slugPath}
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#7F1D1D] hover:text-[#661717] transition-colors group"
                      >
                        <span>View Syllabus</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Teaching Faculty — clean uniform grid (photo + name + role only) */}
            <section aria-labelledby="faculty-heading">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="h-0.5 w-7 bg-[#B48A3E]" />
                <span className="text-xs uppercase tracking-widest text-[#B48A3E] font-bold">
                  Academic Faculty
                </span>
              </div>
              <h2 id="faculty-heading" className="font-serif text-3xl sm:text-4xl font-bold text-[#14291D] tracking-[-0.02em] mb-6">
                Teaching Faculty &amp; Researchers
              </h2>

              {dept.facultyMembers && dept.facultyMembers.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {dept.facultyMembers.map((member, idx) => (
                    <Link
                      key={idx}
                      href={`/faculty/${slugify(`${member.name}-${dept.id}`)}`}
                      className="bg-white border border-stone-200 rounded-xl p-4 flex items-center gap-4 hover:border-[#153B27] transition-colors"
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#153B27] shrink-0 flex items-center justify-center text-white font-serif text-lg font-bold border border-stone-200">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover object-top"
                          />
                        ) : (
                          initials(member.name)
                        )}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-serif font-bold text-stone-900 text-base leading-snug">
                          {member.name}
                        </h4>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#7F1D1D] mt-1 truncate">
                          {member.designation}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-white border border-dashed border-stone-300 text-center">
                  <Users className="w-8 h-8 text-stone-400 mx-auto mb-2" />
                  <h4 className="font-serif text-base font-bold text-stone-800">Department Faculty</h4>
                  <p className="text-xs text-stone-600 max-w-sm mx-auto mt-1">
                    Supervised by {dept.headOfDepartment || 'Head of Department'}. Official faculty directory and office hours are available via the departmental secretariat.
                  </p>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar — sticky */}
          <div className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              {/* Department Directory */}
              <div className="bg-[#153B27] text-white rounded-2xl p-6 border-t-4 border-t-[#7F1D1D]">
                <h3 className="font-serif text-xl font-bold text-white mb-6 pb-4 border-b border-white/15">
                  Department Directory
                </h3>

                <div className="space-y-4 text-xs sm:text-[13px]">
                  <div>
                    <span className="text-white/60 uppercase tracking-wider block font-bold text-[10px]">Head of Department</span>
                    <span className="font-semibold text-white text-sm">{dept.headOfDepartment || 'Academic Chairperson'}</span>
                  </div>
                  <div>
                    <span className="text-white/60 uppercase tracking-wider block font-bold text-[10px]">Faculty Division</span>
                    <span className="font-semibold text-white">{dept.facultyGroup}</span>
                  </div>
                  <div>
                    <span className="text-white/60 uppercase tracking-wider block font-bold text-[10px]">Campus Location</span>
                    <span className="font-medium text-white/75 flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C8A96E]" />
                      Academic Block C, Charbagh Main Campus
                    </span>
                  </div>
                  <div>
                    <span className="text-white/60 uppercase tracking-wider block font-bold text-[10px]">Official Inquiry Email</span>
                    <span className="font-mono text-white/75 flex items-center gap-1.5 mt-0.5">
                      <Mail className="w-3.5 h-3.5 text-[#C8A96E]" />
                      {dept.contactEmail}
                    </span>
                  </div>
                  <div>
                    <span className="text-white/60 uppercase tracking-wider block font-bold text-[10px]">Accreditation &amp; Standards</span>
                    <span className="font-medium text-white/75">Higher Education Commission (HEC) of Pakistan</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/15 flex flex-col gap-2.5">
                  <Link
                    href="/academics/downloads"
                    className="w-full py-3 rounded-xl bg-white/10 text-white/80 font-semibold text-xs text-center hover:bg-white/20 transition-colors"
                  >
                    Download Syllabi &amp; Rules
                  </Link>
                </div>
              </div>

              {/* Other Departments */}
              <div className="bg-white border border-stone-200 rounded-2xl p-6">
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
                        className="block p-3 rounded-xl bg-stone-50 border border-stone-200 hover:border-stone-400 text-stone-700 hover:text-[#153B27] font-medium transition-colors"
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
    </div>
  );
}
