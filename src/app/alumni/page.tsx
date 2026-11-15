import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BadgeCheck, Building2, GraduationCap, Handshake, Heart, Users } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Alumni | University of Swat',
  description: 'Alumni network, degree verification and career services at the University of Swat.',
};

const programmes = [
  {
    icon: <BadgeCheck className="w-5 h-5" />,
    title: 'Degree Verification',
    text: 'Official verification of degrees and transcripts for employers, universities, and government bodies. Requests are processed by the Controller of Examinations.',
    href: '/contact',
    cta: 'Submit a verification request',
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: 'Careers & Placements',
    text: 'The Career Development Centre connects graduates with regional employers, industry job fairs, and recruitment drives hosted on campus.',
    href: '/campus-life',
    cta: 'Explore careers',
  },
  {
    icon: <Handshake className="w-5 h-5" />,
    title: 'Alumni Network',
    text: 'Stay connected with fellow graduates of 2014–2026 batches through departmental chapters and the annual alumni gathering at convocation.',
    href: '/events',
    cta: 'See upcoming events',
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: 'Giving Back',
    text: 'Support scholarships, the endowment, and campus infrastructure through institutional giving and HEC-aligned development funds.',
    href: '/contact',
    cta: 'Contact the development office',
  },
];

export default function AlumniPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="University of Swat"
        title="Alumni"
        subtitle="A lifelong connection between the university and its graduates — verification, careers, network, and giving."
        eyebrow="Alumni · University of Swat"
      />

      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-20 space-y-14 lg:space-y-20">
        {/* Intro narrative */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-0.5 w-7 bg-[#7F1D1D]" />
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                Our Graduates
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#14291D] font-bold tracking-[-0.025em] leading-[1.15] mb-5">
              Alumni of the First Generation of Swat Valley Scholars
            </h2>
            <p className="font-sans text-stone-600 text-base leading-relaxed mb-5">
              Since its first cohorts graduated in 2014, the University of Swat has produced
              graduates serving across education, science, law, administration, and industry in
              Pakistan and abroad. Every batch is part of the university&rsquo;s continuing mission:
              quality education with relevance to the valley and the nation.
            </p>
            <p className="font-sans text-stone-600 text-base leading-relaxed">
              The alumni office works with the Registrar&rsquo;s and Controller of Examinations offices
              to issue verifications and transcripts, and with the Career Development Centre to
              keep the network professionally connected.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#153B27] to-[#14291D] text-white">
              <GraduationCap className="w-10 h-10 text-[#E0C078] mb-6" />
              <p className="font-serif text-3xl font-bold leading-snug mb-3">
                First graduating cohort: 2014
              </p>
              <p className="text-white/75 text-sm leading-relaxed">
                Alumni records are held for every batch from 2014 through 2026 across BS,
                MA/MSc, MS/MPhil, and PhD programmes.
              </p>
            </div>
          </div>
        </section>

        {/* Programme cards */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {programmes.map((programme) => (
              <article
                key={programme.title}
                className="group flex flex-col p-6 rounded-xl bg-white border border-stone-300 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-[0_16px_36px_-18px_rgba(21,59,39,0.25)]"
              >
                <span className="w-11 h-11 rounded-xl bg-[#153B27]/8 text-[#153B27] flex items-center justify-center mb-4">
                  {programme.icon}
                </span>
                <h3 className="font-serif text-lg text-[#14291D] font-bold mb-2">{programme.title}</h3>
                <p className="text-sm text-stone-600 leading-[1.65] mb-5">{programme.text}</p>
                <Link
                  href={programme.href}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#153B27] hover:text-[#14291D] transition-colors"
                >
                  {programme.cta}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Contact strip */}
        <section className="p-6 sm:p-8 rounded-xl bg-white border border-stone-300 shadow-xs flex flex-col sm:flex-row items-start gap-5">
          <span className="w-11 h-11 rounded-xl bg-[#7F1D1D]/10 text-[#7F1D1D] flex items-center justify-center shrink-0">
            <Users className="w-5 h-5" />
          </span>
          <div>
            <h3 className="font-serif text-xl text-[#14291D] font-bold mb-1.5">
              Update your alumni record
            </h3>
            <p className="text-sm text-stone-600 leading-[1.65] max-w-2xl">
              Alumni are invited to keep their contact and professional details current with the
              alumni office so that you receive convocation invitations, departmental news, and
              career announcements.
            </p>
          </div>
          <Link
            href="/contact"
            className="sm:ml-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#153B27] text-white text-sm font-semibold hover:bg-[#14291D] transition-colors"
          >
            Contact alumni office
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
