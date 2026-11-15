import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Building, Download, GraduationCap, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Affiliated Colleges | University of Swat',
  description: 'Public and private sector affiliated colleges in Swat, Shangla, and Malakand division regulated by University of Swat.',
};

const publicColleges = [
  { name: 'Govt. Post Graduate Jahanzeb College', location: 'Saidu Sharif, Swat', established: '1952', programs: 'BS 4-Year (Natural Sciences, Humanities, Management), Associate Degrees' },
  { name: 'Govt. Girls Post Graduate College', location: 'Saidu Sharif, Swat', established: '1974', programs: 'BS 4-Year (Biological Sciences, Computer Science, English, Islamic Studies)' },
  { name: 'Govt. Degree College Mingora', location: 'Mingora, Swat', established: '1988', programs: 'BS 4-Year (Physics, Chemistry, Mathematics, Political Science)' },
  { name: 'Govt. Degree College Matta', location: 'Matta, Upper Swat', established: '2004', programs: 'BS 4-Year (Botany, Zoology, Economics, Urdu)' },
  { name: 'Govt. Degree College Kabal', location: 'Kabal, Swat', established: '2007', programs: 'BS 4-Year (Computer Science, Chemistry, English)' },
  { name: 'Govt. Degree College Khwazakhela', location: 'Khwazakhela, Swat', established: '2010', programs: 'BS 4-Year (Social Sciences, Islamic Studies, Pakistan Studies)' },
  { name: 'Govt. Degree College Madyan', location: 'Madyan, Swat', established: '2014', programs: 'BS 4-Year (Environmental Studies, Languages, Arts)' },
  { name: 'Govt. Degree College Alpuri', location: 'Alpuri, District Shangla', established: '2009', programs: 'BS 4-Year (Natural Sciences, Humanities)' },
  { name: 'Govt. Degree College Puran', location: 'Puran, District Shangla', established: '2012', programs: 'BS 4-Year (General Sciences, Arts)' },
];

const privateColleges = [
  { name: 'Swat College of Science and Technology', location: 'G.T. Road, Mingora, Swat', programs: 'BS Computer Science, BS Software Engineering, BBA' },
  { name: 'Swat Law College', location: 'Saidu Sharif, Swat', programs: 'BA / LLB (5-Year Integrated Law, recognized by PBC)' },
  { name: 'Apex College of Management Sciences', location: 'Saidu Sharif, Swat', programs: 'BBA, BS Accounting & Finance' },
  { name: 'Tipu Shaheed Institute of Education', location: 'Mingora, Swat', programs: 'B.Ed (Hons) 4-Year, ADE (Associate Degree in Education)' },
  { name: 'National College of Computer Science', location: 'Matta Road, Swat', programs: 'BS Information Technology, BS Computer Science' },
];

export default function AffiliatedCollegesPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Academic Affiliations"
        title="Affiliated Colleges Directory"
        subtitle="Regulating academic quality, semester curriculum, and terminal examinations across premier public and private colleges in Swat and Shangla."
        eyebrow="Academic Regulatory Oversight · University of Swat"
      />

      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-20 space-y-16">
        
        {/* Back Link & Rules */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-[#153B27] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to About University</span>
          </Link>

          <a
            href="https://uswat.edu.pk/affiliation-rules/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 text-xs font-semibold shadow-xs"
          >
            <Download className="w-4 h-4 text-[#7F1D1D]" />
            <span>Download Affiliation Rules &amp; Inspection Criteria</span>
          </a>
        </div>

        {/* Public Sector Colleges */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#153B27] text-white border border-white/10 shadow-[0_24px_48px_-22px_rgba(12,25,18,0.5)]">
          <div className="pb-4 border-b border-white/15 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C8A96E] font-bold block mb-1">
                Government Institutions
              </span>
              <h2 className="font-serif text-3xl font-bold text-white">
                Public Sector Affiliated Colleges
              </h2>
            </div>
            <span className="text-xs font-semibold text-white/60">
              {publicColleges.length} Government Colleges in Swat &amp; Shangla
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicColleges.map((c, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/[0.07] border border-white/[0.12] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono text-[#C8A96E] bg-white/10 px-2 py-0.5 rounded border border-white/15">
                      Est. {c.established}
                    </span>
                    <span className="text-[11px] font-semibold text-[#C8A96E] flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {c.location}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white mb-2">
                    {c.name}
                  </h3>

                  <p className="font-sans text-xs text-white/70 leading-relaxed mb-4">
                    {c.programs}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/15 text-[11px] text-white/60 font-medium">
                  Degree Conferring Authority: University of Swat
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Private Sector Colleges */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-300 shadow-xs">
          <div className="pb-4 border-b border-stone-200 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold block mb-1">
                Private Institutions
              </span>
              <h2 className="font-serif text-3xl font-bold text-stone-900">
                Private Sector Affiliated Colleges
              </h2>
            </div>
            <span className="text-xs font-semibold text-stone-600">
              Regulated under University Affiliation Statutes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {privateColleges.map((pc, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-stone-50 border border-stone-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-600 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#7F1D1D]" />
                    <span className="font-medium text-stone-700">{pc.location}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                    {pc.name}
                  </h3>

                  <p className="font-sans text-xs text-stone-600 leading-relaxed mb-4">
                    {pc.programs}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-300 text-[11px] text-stone-600 font-medium">
                  Curriculum &amp; Exam Supervision: UOS
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
