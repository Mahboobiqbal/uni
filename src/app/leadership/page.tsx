import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Award, Building2, Mail, Phone, ShieldCheck, UserCheck } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { viceChancellorProfile, administrativeGovernance } from '@/data/leadershipData';

export const metadata: Metadata = {
  title: 'University Leadership & Administration | University of Swat',
  description: 'Executive officers, statutory administrative bodies, and directorates of the University of Swat.',
};

export default function LeadershipPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Governance &amp; Leadership"
        title="University Leadership &amp; Administration"
        subtitle="Meet the executive leadership and statutory administrative officers steering the academic and institutional growth of the University of Swat."
        eyebrow="Executive Governance · University of Swat"
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20">
        
        {/* Vice Chancellor Featured Showcase */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-300 shadow-sm mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg border-4 border-stone-200">
                <Image
                  src={viceChancellorProfile.image}
                  alt={viceChancellorProfile.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-0.5 w-6 bg-[#7F1D1D]" />
                <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                  Chief Academic &amp; Executive Officer
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mb-2">
                {viceChancellorProfile.name}
              </h2>
              <span className="text-sm font-semibold text-[#153B27] block mb-6">
                {viceChancellorProfile.designation}, {viceChancellorProfile.institution}
              </span>

              <p className="font-sans text-white/85 text-base leading-relaxed mb-8 line-clamp-4 italic bg-[#153B27] border-l-4 border-[#C8A96E] pl-5 pr-5 py-4 rounded-r-xl">
                &ldquo;{viceChancellorProfile.message.split('\n\n')[0]}&rdquo;
              </p>

              {/* Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                {viceChancellorProfile.credentials.map((cred, cIdx) => (
                  <div key={cIdx} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80">
                    <span className="block text-xs font-bold text-stone-900">{cred.title}</span>
                    <span className="text-[11px] text-stone-600">{cred.detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/leadership/vice-chancellor"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#153B27] text-white text-xs font-semibold hover:bg-[#153B27]/90 transition-colors shadow-xs"
                >
                  <span>Read Full VC Discourse &amp; Secretariat</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href={`mailto:${viceChancellorProfile.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold hover:bg-stone-200 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{viceChancellorProfile.email}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Administrative Governance Groups */}
        <div className="space-y-16">
          {administrativeGovernance.map((group, gIdx) => (
            <div key={gIdx}>
              <div className="pb-4 border-b border-stone-200 mb-8">
                <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold block mb-1">
                  Administrative Body
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  {group.category}
                </h3>
                <p className="text-sm text-stone-600 font-sans mt-1">
                  {group.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.officers.map((officer, oIdx) => (
                  <div
                    key={oIdx}
                    className="p-6 rounded-3xl bg-white border border-stone-300 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shrink-0 relative flex items-center justify-center text-stone-500 font-serif text-lg font-bold">
                          {officer.image ? (
                            <Image
                              src={officer.image}
                              alt={officer.name}
                              fill
                              className="object-cover object-top"
                            />
                          ) : (
                            <UserCheck className="w-6 h-6 text-stone-500" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-serif text-lg font-bold text-stone-900">
                            {officer.name}
                          </h4>
                          <span className="text-xs font-semibold text-[#153B27] block">
                            {officer.designation}
                          </span>
                          <span className="text-[11px] text-stone-600 block">
                            {officer.departmentOffice}
                          </span>
                        </div>
                      </div>

                      {officer.bio && (
                        <p className="font-sans text-xs text-stone-600 leading-relaxed mb-4">
                          {officer.bio}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs">
                      <a
                        href={`mailto:${officer.email}`}
                        className="font-mono text-stone-600 hover:text-[#7F1D1D] flex items-center gap-1.5 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>{officer.email}</span>
                      </a>
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
