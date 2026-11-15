import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Mail, MapPin, Phone, UserCheck } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { viceChancellorProfile } from '@/data/leadershipData';

export const metadata: Metadata = {
  title: 'Vice Chancellor’s Secretariat & Message | University of Swat',
  description: 'Official message, strategic vision, and secretariat contact of Prof. Dr. Husnul Amin, Vice Chancellor of University of Swat.',
};

export default function ViceChancellorDetailPage() {
  return (
    <main id="main-content" className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Executive Leadership"
        title="Voice of the Vice Chancellor"
        subtitle="A message from Prof. Dr. Husnul Amin on the values, aspirations, and strategic roadmap guiding the University of Swat."
        eyebrow="Vice Chancellor’s Secretariat · University of Swat"
      />

      {/* ── Official Inaugural Discourse & portrait ───────────────────────────────── */}
      <section id="discourse" className="py-10 sm:py-24 bg-[#F6F5F0]">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14">
          <div className="mb-6 sm:mb-8">
            <Link
              href="/leadership"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-[#153B27] transition-colors min-h-[44px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Leadership Directory</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Main Column: Full Discourse & Vision */}
            <div className="lg:col-span-8">
              <div className="p-5 sm:p-12 rounded-2xl sm:rounded-3xl bg-white border border-stone-300 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-0.5 w-6 bg-[#7F1D1D]" />
                  <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                    Official Inaugural Discourse
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-4xl text-stone-900 font-bold mb-6">
                  Shaping the Scholastic Future of Swat
                </h2>

                <div className="font-sans text-stone-700 text-base sm:text-lg leading-relaxed space-y-6">
                  <p className="italic font-serif text-lg sm:text-2xl text-white leading-snug bg-[#153B27] border-l-4 border-[#C8A96E] pl-4 pr-4 sm:pl-6 sm:pr-6 py-4 sm:py-5 rounded-r-xl">
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
                  <div className="text-xs font-mono text-stone-500">
                    Notification: HED / Govt of KP
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Column: Portrait & Direct Email */}
            <div className="lg:col-span-4">
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-stone-300 shadow-sm text-center">
                <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden shadow-md mb-6 border-4 border-stone-200">
                  <Image
                    src={viceChancellorProfile.image}
                    alt={viceChancellorProfile.name}
                    fill
                    sizes="(min-width: 1024px) 360px, 100vw"
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

                <div className="text-left border-t border-stone-200 pt-6">
                  <span className="text-stone-500 uppercase tracking-wider block font-bold text-[10px]">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${viceChancellorProfile.email}`}
                    className="font-mono text-stone-800 hover:text-[#7F1D1D] flex items-center gap-1.5 mt-0.5 min-h-[44px]"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#7F1D1D]" />
                    {viceChancellorProfile.email}
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col gap-2">
                  <Link
                    href="/about"
                    className="w-full min-h-[44px] py-3 px-4 rounded-xl bg-[#153B27] text-white font-semibold text-xs hover:bg-[#153B27]/90 hover:-translate-y-[2px] active:scale-[0.985] active:translate-y-px transition-all duration-150"
                  >
                    About University of Swat
                  </Link>
                  <Link
                    href="/campuses/main-campus"
                    className="w-full min-h-[44px] py-3 px-4 rounded-xl bg-stone-100 text-stone-700 font-semibold text-xs hover:bg-stone-200 active:scale-[0.985] active:translate-y-px transition-all duration-150"
                  >
                    Explore Charbagh Main Campus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Vice Chancellor's Office: text-left / photo-right split ───────────── */}
      <section id="vice-chancellor-office" className="py-10 sm:py-24 bg-[#F6F5F0] relative overflow-hidden">
        <div className="absolute top-1/3 -left-24 w-80 h-80 rounded-full bg-[#153B27]/5 blur-3xl pointer-events-none" />
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Text (left) */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-0.5 w-7 bg-[#7F1D1D]" />
                <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                  The Vice Chancellor&rsquo;s Secretariat
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold tracking-tight leading-[1.14] mb-4">
                The Vice Chancellor&rsquo;s Office
              </h2>
              <p className="font-sans text-stone-600 text-base leading-[1.75] mb-8">
                The executive office of the Vice Chancellor at the Administration Complex, Charbagh Main Campus.
              </p>

              <div className="divide-y divide-stone-200 border-y border-stone-200">
                <div className="py-4 flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#153B27] shrink-0 mt-1" />
                  <div>
                    <span className="text-stone-500 uppercase tracking-wider block font-bold text-[10px]">
                      Secretariat Landline
                    </span>
                    <span className="font-mono text-stone-800 text-sm mt-0.5 block">
                      {viceChancellorProfile.phone}
                    </span>
                  </div>
                </div>
                <div className="py-4 flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#153B27] shrink-0 mt-1" />
                  <div>
                    <span className="text-stone-500 uppercase tracking-wider block font-bold text-[10px]">
                      Executive Office
                    </span>
                    <span className="text-sm text-stone-700 font-medium mt-0.5 block">
                      Administration Complex, Charbagh Main Campus
                    </span>
                  </div>
                </div>
                <div className="py-4 flex items-start gap-3">
                  <UserCheck className="w-4 h-4 text-[#153B27] shrink-0 mt-1" />
                  <div>
                    <span className="text-stone-500 uppercase tracking-wider block font-bold text-[10px]">
                      PM Citizen Portal Focal Person
                    </span>
                    <span className="text-sm text-stone-700 font-medium mt-0.5 block">
                      Mr. Tariq Kamal (PS to VC)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo (right): the Administration Complex interior */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[420px] rounded-2xl overflow-hidden border border-stone-300 shadow-sm bg-white">
                <Image
                  src="/images/campus/admin-block.jpg"
                  alt="Conference room inside the Administration Block of the University of Swat, Charbagh Main Campus"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Secretariat Staff */}
          <h3 className="font-serif text-xl font-bold text-stone-900 mt-12 mb-5">
            Secretariat Staff
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {viceChancellorProfile.secretariat.map((staff) => (
              <div
                key={staff.email}
                className="p-5 rounded-2xl bg-white border border-stone-300 shadow-xs flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-stone-200 shrink-0 relative">
                  <Image
                    src={staff.image}
                    alt={staff.name}
                    fill
                    sizes="64px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-serif text-base font-bold text-stone-900">
                    {staff.name}
                  </h4>
                  <span className="text-xs text-[#153B27] font-semibold block mt-0.5">
                    {staff.designation}
                  </span>
                  <a
                    href={`mailto:${staff.email}`}
                    className="inline-flex items-center gap-1 mt-1.5 font-mono text-[11px] text-stone-600 hover:text-[#7F1D1D] transition-colors min-h-[24px]"
                  >
                    <Mail className="w-3 h-3" />
                    {staff.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Correspondence: the page's single forest contrast band ────────────────── */}
      <section
        id="correspondence"
        className="py-16 sm:py-24 relative overflow-hidden bg-[#153B27] text-white border-y border-[#0C1912]/40"
      >
        <div className="absolute right-6 -bottom-10 w-72 h-72 opacity-[0.05] pointer-events-none hidden lg:block">
          <img src="/uos-logo-circle.png" alt="" className="w-full h-full object-contain invert" />
        </div>
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#C8A96E]/10 blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="h-0.5 w-7 bg-[#C8A96E]" />
            <span className="text-xs uppercase tracking-widest text-[#C8A96E] font-bold">
              Correspondence
            </span>
          </div>
          <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-white leading-[1.3] max-w-3xl">
            &ldquo;I invite our faculty, students, alumni, community leaders, and international partners to join hands with us in elevating the University of Swat into an internationally benchmarked center of learning and societal service.&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C8A96E]/60" />
            <span className="text-xs sm:text-sm text-white/70 font-sans font-medium">
              Prof. Dr. Husnul Amin · Vice Chancellor, University of Swat
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${viceChancellorProfile.email}`}
              className="inline-flex items-center gap-2 px-6 min-h-[44px] rounded-xl bg-white text-[#153B27] text-sm font-bold hover:bg-[#F6F5F0] hover:-translate-y-[2px] active:scale-[0.985] active:translate-y-px transition-all duration-150 shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Email the Vice Chancellor</span>
            </a>
            <Link
              href="/leadership"
              className="inline-flex items-center gap-2 px-6 min-h-[44px] rounded-xl bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 hover:-translate-y-[2px] active:scale-[0.985] active:translate-y-px transition-all duration-150"
            >
              <span>Back to Leadership Directory</span>
              <ArrowUpRight className="w-4 h-4 text-[#E5CD9B]" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
