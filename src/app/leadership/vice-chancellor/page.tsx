import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, Award, CheckCircle2, ShieldAlert, Sparkles, Building2 } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { viceChancellorProfile } from '@/data/leadershipData';

export const metadata: Metadata = {
  title: 'Vice Chancellor’s Secretariat & Message | University of Swat',
  description: 'Official message, strategic vision, and secretariat contact of Prof. Dr. Husnul Amin, Vice Chancellor of University of Swat.',
};

export default function ViceChancellorDetailPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Executive Leadership"
        title="Voice of the Vice Chancellor"
        subtitle="A message from Prof. Dr. Husnul Amin on the values, aspirations, and strategic roadmap guiding the University of Swat."
        eyebrow="Vice Chancellor’s Secretariat · University of Swat"
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20">
        
        {/* Back link */}
        <div className="mb-10">
          <Link
            href="/leadership"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-[#153B27] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Leadership Directory</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Column: Full Discourse & Vision */}
          <div className="lg:col-span-8 space-y-10">
            
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-200/90 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-0.5 w-6 bg-[#7F1D1D]" />
                <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                  Official Inaugural Discourse
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mb-6">
                Shaping the Scholastic Future of Swat
              </h2>

              <div className="font-sans text-stone-700 text-base sm:text-lg leading-relaxed space-y-6">
                <p className="italic font-serif text-xl sm:text-2xl text-stone-900 leading-snug border-l-4 border-[#153B27] pl-6 py-1">
                  &ldquo;It is with immense pride, humility, and a profound sense of responsibility that I assume the office of Vice Chancellor of the University of Swat. I am honored to serve this distinguished institution at a pivotal moment in its journey.&rdquo;
                </p>
                <p>
                  The University of Swat stands at the historic crossroad of ancient civilization and contemporary scholastic ambitions. Located in the fertile and picturesque valley of Swat—a region renowned globally for its Gandhara heritage and scenic alpine landscapes—our university carries the profound obligation of translating historical eminence into 21st-century academic and societal impact.
                </p>
                <p>
                  As we embark upon this new chapter of institutional growth, our overarching priority is to guarantee an environment of academic excellence, intellectual integrity, and transparent governance. We are dedicated to nurturing graduates who are not simply degree-holders, but critical thinkers, innovators, and responsible global citizens equipped to confront local and international challenges.
                </p>
                <p>
                  Our institutional roadmap rests upon four strategic pillars:
                </p>
                <ul className="space-y-4 pl-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#153B27] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900">Good Governance &amp; Meritocracy:</strong> Establishing transparent administrative mechanisms, student-first support services, and merit-based faculty appointments.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#153B27] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900">Green Campus &amp; Solarization:</strong> Leading sustainable mountain development as the first university in the province to inaugurate a campus-wide solar energy grid.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#153B27] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900">Empowering Female Higher Education:</strong> Transforming the Women’s Campus and College of Home Sciences into regional centers of excellence.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#153B27] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900">Applied Research &amp; Commercialization:</strong> Expanding ORIC industrial partnerships with the Swat Chamber of Commerce and international archaeological missions.
                    </div>
                  </li>
                </ul>
                <p>
                  I invite our faculty, students, alumni, community leaders, and international partners to join hands with us in elevating the University of Swat into an internationally benchmarked center of learning and societal service.
                </p>
              </div>

              <div className="pt-8 mt-10 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-serif italic text-2xl text-[#153B27] font-bold block">
                    Prof. Dr. Husnul Amin
                  </span>
                  <span className="text-xs text-stone-500 font-sans">
                    Vice Chancellor, University of Swat
                  </span>
                </div>
                <div className="text-xs font-mono text-stone-400">
                  Notification: HED / Govt of KP
                </div>
              </div>
            </div>

            {/* Secretariat Staff */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-0.5 w-6 bg-[#B48A3E]" />
                <span className="text-xs uppercase tracking-widest text-[#B48A3E] font-bold">
                  Secretariat Officers
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">
                Vice Chancellor’s Secretariat Staff
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {viceChancellorProfile.secretariat.map((staff, sIdx) => (
                  <div key={sIdx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-stone-200 shrink-0 relative flex items-center justify-center text-stone-400 font-serif text-lg font-bold">
                      {staff.image ? (
                        <Image
                          src={staff.image}
                          alt={staff.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        staff.name.slice(0, 2)
                      )}
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-stone-900">
                        {staff.name}
                      </h4>
                      <span className="text-xs text-[#153B27] font-semibold block">
                        {staff.designation}
                      </span>
                      <a
                        href={`mailto:${staff.email}`}
                        className="text-[11px] font-mono text-stone-500 hover:text-[#7F1D1D] flex items-center gap-1 mt-1"
                      >
                        <Mail className="w-3 h-3" />
                        {staff.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Column: Portrait & Direct Contact */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Portrait Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm text-center">
              <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden shadow-md mb-6 border-4 border-stone-100">
                <Image
                  src={viceChancellorProfile.image}
                  alt={viceChancellorProfile.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900">
                {viceChancellorProfile.name}
              </h3>
              <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider block mt-1 mb-6">
                Vice Chancellor · University of Swat
              </span>

              <div className="space-y-3 text-left text-xs sm:text-[13px] border-t border-stone-100 pt-6">
                <div>
                  <span className="text-stone-400 uppercase tracking-wider block font-bold text-[10px]">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${viceChancellorProfile.email}`}
                    className="font-mono text-stone-800 hover:text-[#7F1D1D] flex items-center gap-1.5 mt-0.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#7F1D1D]" />
                    {viceChancellorProfile.email}
                  </a>
                </div>

                <div>
                  <span className="text-stone-400 uppercase tracking-wider block font-bold text-[10px]">
                    Secretariat Landline
                  </span>
                  <span className="font-mono text-stone-800 flex items-center gap-1.5 mt-0.5">
                    <Phone className="w-3.5 h-3.5 text-[#153B27]" />
                    {viceChancellorProfile.phone}
                  </span>
                </div>

                <div>
                  <span className="text-stone-400 uppercase tracking-wider block font-bold text-[10px]">
                    Executive Office
                  </span>
                  <span className="font-medium text-stone-700 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#153B27]" />
                    Administration Complex, Charbagh Main Campus
                  </span>
                </div>

                <div>
                  <span className="text-stone-400 uppercase tracking-wider block font-bold text-[10px]">
                    PM Citizen Portal Focal Person
                  </span>
                  <span className="font-medium text-stone-700 block mt-0.5">
                    Mr. Tariq Kamal (PS to VC)
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col gap-2">
                <Link
                  href="/about"
                  className="w-full py-3 rounded-xl bg-[#153B27] text-white font-semibold text-xs hover:bg-[#153B27]/90 transition-colors"
                >
                  About University of Swat
                </Link>
                <Link
                  href="/campuses/main-campus"
                  className="w-full py-3 rounded-xl bg-stone-100 text-stone-700 font-semibold text-xs hover:bg-stone-200 transition-colors"
                >
                  Explore Charbagh Main Campus
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
