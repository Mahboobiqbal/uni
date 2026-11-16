import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, GraduationCap, Mail, MapPin, Users } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { facultyProfiles } from '@/data/facultyData';
import { allDepartments } from '@/data/departmentsData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return facultyProfiles.map((profile) => ({ slug: profile.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = facultyProfiles.find((p) => p.slug === slug);
  if (!profile) return { title: 'Faculty Member Not Found | University of Swat' };
  return {
    title: `${profile.name} — ${profile.designation} | University of Swat`,
    description: `${profile.name}, ${profile.designation} at the ${profile.departmentName}, University of Swat.`,
  };
}

export default async function FacultyProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const profile = facultyProfiles.find((p) => p.slug === slug);

  if (!profile) {
    notFound();
  }

  const colleagues = facultyProfiles.filter(
    (p) => p.departmentId === profile.departmentId && p.slug !== profile.slug
  ).slice(0, 4);

  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag={profile.facultyGroup}
        title={profile.name}
        subtitle={`${profile.designation}${profile.qualification ? ` · ${profile.qualification}` : ''}`}
        eyebrow="Faculty Profile · University of Swat"
        backHref="/faculty"
        backLabel="Faculties & Departments"
      />

      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Profile card column */}
          <div className="lg:col-span-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#153B27] text-white border border-white/10 shadow-[0_24px_48px_-22px_rgba(12,25,18,0.5)] lg:sticky lg:top-24">
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 relative flex items-center justify-center mb-6">
                {profile.image ? (
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span className="font-serif text-6xl font-bold text-stone-300">
                    {profile.name.slice(0, 2)}
                  </span>
                )}
              </div>

              <h2 className="font-serif text-2xl font-bold text-white">{profile.name}</h2>
              <p className="text-sm font-semibold text-[#C8A96E] mt-1">{profile.designation}</p>
              {profile.qualification && (
                <p className="text-xs text-white/60 mt-1">{profile.qualification}</p>
              )}

              <div className="mt-6 pt-6 border-t border-white/15 space-y-3 text-sm">
                <Link
                  href={`/departments/${profile.departmentId}`}
                  className="flex items-center gap-2.5 text-white/80 hover:text-[#C8A96E] transition-colors"
                >
                  <Users className="w-4 h-4 text-[#C8A96E] shrink-0" />
                  <span className="font-medium">{profile.departmentName}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-white/60" />
                </Link>
                <div className="flex items-center gap-2.5 text-white/80">
                  <MapPin className="w-4 h-4 text-[#C8A96E] shrink-0" />
                  <span className="font-medium">{profile.facultyGroup}</span>
                </div>
                <div className="flex items-center gap-2.5 text-white/80">
                  <Mail className="w-4 h-4 text-[#C8A96E] shrink-0" />
                  <span className="font-mono text-xs">{profile.contactEmail}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detail column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-300 shadow-xs">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-6">
                Department & Teaching
              </h2>
              <p className="font-sans text-stone-700 text-base leading-relaxed mb-6">
                {profile.name} serves as {profile.designation} at the {profile.departmentName},
                University of Swat. The department operates under the {profile.facultyGroup}.
              </p>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-300">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-stone-900 mb-3">
                  Degree Programs Offered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {profile.programsOffered.map((program) => (
                    <span
                      key={program}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-stone-300 text-xs font-semibold text-stone-700"
                    >
                      <GraduationCap className="w-3.5 h-3.5 text-[#153B27]" />
                      {program}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {colleagues.length > 0 && (
              <div className="p-8 rounded-3xl bg-white border border-stone-300 shadow-xs">
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-5">
                  Colleagues in {profile.departmentName.replace('Department of ', '')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {colleagues.map((colleague) => (
                    <Link
                      key={colleague.slug}
                      href={`/faculty/${colleague.slug}`}
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 hover:border-stone-400 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-stone-200 shrink-0 relative flex items-center justify-center text-stone-400 font-serif font-bold">
                        {colleague.image ? (
                          <Image src={colleague.image} alt={colleague.name} fill className="object-cover" />
                        ) : (
                          colleague.name.slice(0, 2)
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-stone-800 group-hover:text-[#153B27] transition-colors truncate">
                          {colleague.name}
                        </p>
                        <p className="text-xs text-stone-600 truncate">{colleague.designation}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-100 text-stone-700 text-sm font-semibold hover:bg-stone-200 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact Department
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
