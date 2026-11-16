import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail, ShieldCheck } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { viceChancellorProfile, administrativeGovernance } from '@/data/leadershipData';

export const metadata: Metadata = {
  title: 'University Leadership & Administration | University of Swat',
  description: 'Executive officers, statutory administrative bodies, and directorates of the University of Swat.',
};

/* Crest-monogram tile for officers without a portrait file — never an invented face. */
const HONORIFICS = ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Prof.', 'Engr.'];
const initialsOf = (name: string) =>
  name
    .split(' ')
    .filter((w) => !HONORIFICS.includes(w))
    .slice(0, 2)
    .map((w) => w.charAt(0))
    .join('');

function OfficerMonogram({ name, dark = false }: { name: string; dark?: boolean }) {
  return (
    <div
      className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 ${
        dark ? 'bg-white/10 border border-white/15' : 'bg-[#153B27]'
      }`}
      aria-hidden="true"
    >
      <img
        src="/uos-logo-circle.png"
        alt=""
        className={`absolute inset-0 w-full h-full object-contain p-1 ${dark ? 'opacity-15' : 'opacity-20'}`}
      />
      <span className="relative z-10 flex items-center justify-center h-full font-serif text-lg font-bold text-[#E5CD9B]">
        {initialsOf(name)}
      </span>
    </div>
  );
}

export default function LeadershipPage() {
  const [executiveGroup, directorateGroup] = administrativeGovernance;

  return (
    <main id="main-content" className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Governance &amp; Leadership"
        title="University Leadership &amp; Administration"
        subtitle="Meet the people who lead and run the University of Swat."
        eyebrow="Executive Governance · University of Swat"
      />

      {/* ── Executive Leadership: featured pair (real portraits lead) ─────────────── */}
      <section id="executive-leadership" className="py-16 sm:py-24 bg-[#F6F5F0] relative overflow-hidden">
        <div className="absolute top-16 -right-24 w-80 h-80 rounded-full bg-[#153B27]/5 blur-3xl pointer-events-none" />
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-7 bg-[#7F1D1D]" />
            <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
              Executive Leadership
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold tracking-tight mb-10">
            The Vice Chancellor &amp; the Registrar
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Forest feature card: the Vice Chancellor */}
            <div className="lg:col-span-8 rounded-3xl bg-[#153B27] border border-[#0C1912]/40 text-white overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-0 h-full">
                <div className="sm:col-span-2 relative min-h-[320px] sm:min-h-[420px]">
                  <Image
                    src={viceChancellorProfile.image}
                    alt={viceChancellorProfile.name}
                    fill
                    sizes="(min-width: 1280px) 300px, (min-width: 640px) 240px, 100vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1912]/50 via-transparent to-transparent pointer-events-none sm:bg-gradient-to-r sm:from-transparent sm:to-[#153B27]/30" />
                </div>

                <div className="sm:col-span-3 p-7 sm:p-9 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-0.5 w-6 bg-[#C8A96E]" />
                    <span className="text-xs uppercase tracking-widest text-[#C8A96E] font-bold">
                      Chief Academic &amp; Executive Officer
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-[34px] text-white font-bold leading-tight">
                    {viceChancellorProfile.name}
                  </h3>
                  <span className="text-sm font-semibold text-[#E5CD9B] block mt-1">
                    {viceChancellorProfile.designation}, {viceChancellorProfile.institution}
                  </span>

                  <blockquote className="font-sans text-white/85 text-sm sm:text-[15px] leading-relaxed mt-5 mb-6 border-l-2 border-[#C8A96E] pl-4 italic">
                    &ldquo;{viceChancellorProfile.message.split('\n\n')[0]}&rdquo;
                  </blockquote>

                  <div className="grid grid-cols-1 gap-2.5 mb-7">
                    {viceChancellorProfile.credentials.map((cred, cIdx) => (
                      <div
                        key={cIdx}
                        className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 flex items-baseline gap-2.5"
                      >
                        <span className="text-xs font-bold text-white shrink-0">{cred.title}</span>
                        <span className="text-[11px] text-white/70">{cred.detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-3">
                    <Link
                      href="/leadership/vice-chancellor"
                      className="inline-flex items-center gap-2 px-5 min-h-[44px] rounded-xl bg-white text-[#153B27] text-xs font-bold hover:bg-[#F6F5F0] hover:-translate-y-[2px] active:scale-[0.985] active:translate-y-px transition-all duration-150 shadow-xs"
                    >
                      <span>Read Full VC Discourse &amp; Secretariat</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={`mailto:${viceChancellorProfile.email}`}
                      className="inline-flex items-center gap-2 px-5 min-h-[44px] rounded-xl bg-white/10 border border-white/20 text-white text-xs font-semibold hover:bg-white/20 hover:-translate-y-[2px] active:scale-[0.985] active:translate-y-px transition-all duration-150"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#E5CD9B]" />
                      <span>{viceChancellorProfile.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Light companion card: the Registrar (real portrait) */}
            <div className="lg:col-span-4 rounded-3xl bg-white border border-stone-300 shadow-xs overflow-hidden flex flex-col">
              {executiveGroup.officers
                .filter((o) => o.image)
                .slice(0, 1)
                .map((officer) => (
                  <div key={officer.email} className="flex flex-col h-full">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={officer.image as string}
                        alt={officer.name}
                        fill
                        sizes="(min-width: 1024px) 400px, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="h-0.5 w-6 bg-[#7F1D1D]" />
                        <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                          Executive Statutory Officer
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl text-stone-900 font-bold leading-tight">
                        {officer.name}
                      </h3>
                      <span className="text-sm font-semibold text-[#153B27] block mt-1">
                        {officer.designation}, University of Swat
                      </span>
                      <p className="font-sans text-sm text-stone-600 leading-relaxed mt-4 mb-6">
                        {officer.bio}
                      </p>
                      <div className="mt-auto flex flex-col gap-2.5">
                        <a
                          href={`mailto:${officer.email}`}
                          className="inline-flex items-center gap-2 px-4 min-h-[44px] rounded-xl bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold hover:bg-stone-200 active:scale-[0.985] transition-all duration-150 w-fit"
                        >
                          <Mail className="w-3.5 h-3.5 text-[#7F1D1D]" />
                          <span>{officer.email}</span>
                        </a>
                        <Link
                          href="/leadership/registeror-office"
                          className="inline-flex items-center gap-2 px-4 min-h-[44px] rounded-xl bg-[#153B27] text-white text-xs font-bold hover:bg-[#153B27]/90 hover:-translate-y-[2px] active:scale-[0.985] active:translate-y-px transition-all duration-150 w-fit"
                        >
                          <span>Visit the Registrar&rsquo;s Office</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Executive Statutory Officers: ruled directory rows ────────────────────── */}
      <section id="statutory-officers" className="py-16 sm:py-24 bg-[#F6F5F0]">
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14">
          <div className="pb-4 border-b-2 border-stone-300 mb-8">
            <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold block mb-1">
              Administrative Body
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              {executiveGroup.category}
            </h3>
            <p className="text-sm text-stone-600 font-sans mt-1">{executiveGroup.description}</p>
          </div>

          <div className="rounded-3xl bg-white border border-stone-300 shadow-xs px-6 sm:px-10 divide-y divide-stone-200">
            {executiveGroup.officers.map((officer, oIdx) => (
              <div
                key={officer.email}
                className="py-6 sm:py-7 flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-7 hover:bg-stone-50/80 transition-colors"
              >
                <span
                  className="hidden sm:block w-8 shrink-0 font-serif text-2xl font-bold text-[#B48A3E] pt-1"
                  aria-hidden="true"
                >
                  {String(oIdx + 1).padStart(2, '0')}
                </span>

                {officer.image ? (
                  <div className="relative w-24 h-28 rounded-xl overflow-hidden shrink-0 border border-stone-200">
                    <Image
                      src={officer.image}
                      alt={officer.name}
                      fill
                      sizes="96px"
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <OfficerMonogram name={officer.name} />
                )}

                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                    {officer.name}
                  </h4>
                  <span className="text-xs font-semibold text-[#153B27] block mt-0.5">
                    {officer.designation}
                  </span>
                  <span className="text-[11px] text-stone-600 block mt-0.5">
                    {officer.departmentOffice}
                  </span>
                  {officer.bio && (
                    <p className="font-sans text-sm text-stone-600 leading-relaxed mt-2.5 max-w-2xl">
                      {officer.bio}
                    </p>
                  )}
                </div>

                <a
                  href={`mailto:${officer.email}`}
                  className="inline-flex items-center gap-1.5 px-3.5 min-h-[44px] rounded-lg bg-stone-50 border border-stone-200 font-mono text-xs text-stone-600 hover:text-[#7F1D1D] hover:border-[#7F1D1D]/40 hover:-translate-y-[2px] active:scale-[0.985] transition-all duration-150 self-start sm:self-center shrink-0"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{officer.email}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Directorates & Student Support Services: the page's forest contrast band ── */}
      <section
        id="directorates"
        className="py-16 sm:py-24 relative overflow-hidden bg-[#153B27] text-white border-y border-[#0C1912]/40"
      >
        <div className="absolute right-6 -bottom-10 w-72 h-72 opacity-[0.05] pointer-events-none hidden lg:block">
          <img src="/uos-logo-circle.png" alt="" className="w-full h-full object-contain invert" />
        </div>
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#C8A96E]/10 blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
          <div className="pb-4 border-b border-white/15 mb-10">
            <span className="text-xs uppercase tracking-widest text-[#C8A96E] font-bold block mb-1">
              Administrative Body
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {directorateGroup.category}
            </h3>
            <p className="text-sm text-white/70 font-sans mt-1">{directorateGroup.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {directorateGroup.officers.map((officer, oIdx) => (
              <div
                key={officer.email}
                className={`p-6 rounded-2xl border flex flex-col hover:-translate-y-[2px] transition-all duration-200 ease-out ${
                  oIdx === 0
                    ? 'sm:col-span-2 lg:col-span-1 bg-white/[0.08] border-[#C8A96E]/50'
                    : 'bg-white/5 border-white/10 hover:border-[#C8A96E]/40'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <OfficerMonogram name={officer.name} dark />
                  <div className="min-w-0">
                    <h4 className="font-serif text-lg font-bold text-white leading-snug">
                      {officer.name}
                    </h4>
                    <span className="text-xs font-semibold text-[#E5CD9B] block mt-0.5">
                      {officer.designation}
                    </span>
                  </div>
                </div>

                <span className="text-[11px] uppercase tracking-wider text-white/60 font-bold block mb-2">
                  {officer.departmentOffice}
                </span>
                {officer.bio && (
                  <p className="font-sans text-[13px] text-white/75 leading-relaxed mb-5">
                    {officer.bio}
                  </p>
                )}

                <a
                  href={`mailto:${officer.email}`}
                  className="mt-auto inline-flex items-center gap-1.5 px-3.5 min-h-[44px] rounded-lg bg-white/5 border border-white/15 font-mono text-xs text-[#E5CD9B] hover:bg-white/15 hover:border-[#C8A96E]/50 active:scale-[0.985] transition-all duration-150 w-fit"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{officer.email}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Statutory office directory: onward links to the executive offices ─────── */}
      <section id="office-directory" className="py-16 sm:py-24 bg-[#F6F5F0]">
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-7 bg-[#7F1D1D]" />
            <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
              Executive Office Directory
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
            Visit the Statutory Offices
          </h3>
          <p className="text-sm text-stone-600 font-sans mb-8 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#153B27] shrink-0" />
            <span>Each office maintains its own mandate, staff roster, and public contact desk.</span>
          </p>

          <div className="divide-y divide-stone-300 border-y border-stone-300">
            {[
              { href: '/leadership/registeror-office', title: 'Office of the Registrar', note: 'Dr. Arshad Ali Khan, Registrar' },
              { href: '/leadership/treasurer-office', title: 'Treasurer’s Office', note: 'Mr. Munir Ahmad, Treasurer' },
              { href: '/leadership/controller-of-examination-office', title: 'Controller of Examination Office', note: 'Mr. Muhammad Riaz, Controller of Examinations' },
              { href: '/leadership/provost-office', title: 'Provost Office', note: 'Prof. Dr. Zahid Ullah, University Provost' },
            ].map((office) => (
              <Link
                key={office.href}
                href={office.href}
                className="group flex items-center justify-between gap-6 py-5 px-3 -mx-3 rounded-xl hover:bg-white/70 hover:-translate-y-[2px] transition-all duration-200 ease-out min-h-[64px]"
              >
                <div className="min-w-0">
                  <span className="font-serif text-lg sm:text-xl font-bold text-stone-900 group-hover:text-[#153B27] transition-colors block">
                    {office.title}
                  </span>
                  <span className="text-xs text-stone-600 block mt-0.5">{office.note}</span>
                </div>
                <span className="shrink-0 w-10 h-10 rounded-full bg-white border border-stone-300 flex items-center justify-center text-[#153B27] group-hover:bg-[#153B27] group-hover:text-white group-hover:border-[#153B27] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
