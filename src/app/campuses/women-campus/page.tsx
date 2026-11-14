import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Building2, CheckCircle2, HeartHandshake, MapPin, Sparkles, Users } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Women Campus & College of Home Sciences | University of Swat',
  description: 'Profile of University of Swat Women Campus: constituent College of Home Sciences, dedicated facilities, and female academic empowerment.',
};

export default function WomenCampusPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Specialized Campus"
        title="Women Campus &amp; College of Home Sciences"
        subtitle="A dedicated, self-contained scholastic sanctuary fostering academic leadership, healthcare sciences, and artistic innovation for female scholars."
        eyebrow="Campuses · University of Swat"
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20">
        
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/campus-life"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-[#153B27] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Campus Life Overview</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-8 space-y-12">
            
            {/* Campus Image */}
            <div className="relative w-full aspect-16/9 rounded-3xl overflow-hidden shadow-sm border border-stone-200">
              <Image
                src="/images/campus/women-campus.jpg"
                alt="Women Campus University of Swat"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Overview */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-0.5 w-6 bg-[#7F1D1D]" />
                <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                  Vision for Female Higher Education
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
                Center of Excellence for Female Education
              </h2>
              <p className="font-sans text-stone-700 text-base sm:text-lg leading-relaxed mb-6">
                The Women Campus of the University of Swat was established to bridge gender educational gaps in Northern Pakistan. In October 2026, Vice Chancellor Prof. Dr. Husnul Amin reaffirmed the university’s commitment to transform the Women Campus into an internationally benchmarked center of excellence, equipped with cutting-edge laboratories, scholarship endowments, and secure transportation fleets.
              </p>
            </div>

            {/* College of Home Sciences */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-0.5 w-6 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">
                  Constituent Institution
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">
                College of Home Sciences
              </h3>
              <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                The College of Home Sciences is a constituent college of the University of Swat offering 4-year BS degrees blending art, textile engineering, food nutrition, and child development:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                  <strong className="font-serif text-stone-900 block mb-1">Food &amp; Clinical Nutrition</strong>
                  <span className="text-xs text-stone-500">Dietetics, clinical biochemistry, and community health.</span>
                </div>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                  <strong className="font-serif text-stone-900 block mb-1">Textile &amp; Fashion Design</strong>
                  <span className="text-xs text-stone-500">Apparel manufacture, fabric printing, and indigenous craft revitalization.</span>
                </div>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                  <strong className="font-serif text-stone-900 block mb-1">Human Development &amp; Family Studies</strong>
                  <span className="text-xs text-stone-500">Early childhood education, psychology, and counseling.</span>
                </div>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                  <strong className="font-serif text-stone-900 block mb-1">Art &amp; Interior Architecture</strong>
                  <span className="text-xs text-stone-500">Space planning, visual aesthetics, and craft entrepreneurship.</span>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <h3 className="font-serif text-xl font-bold text-stone-900 pb-3 border-b border-stone-100 mb-4">
                Campus Details
              </h3>
              <div className="space-y-4 text-xs sm:text-[13px] text-stone-700">
                <div>
                  <span className="text-stone-400 uppercase tracking-wider block font-bold text-[10px]">
                    Campus Coordinator
                  </span>
                  <span className="font-semibold text-stone-900 block mt-0.5">
                    Office of the Campus Coordinator (Women Campus)
                  </span>
                </div>
                <div>
                  <span className="text-stone-400 uppercase tracking-wider block font-bold text-[10px]">
                    Programs Offered
                  </span>
                  <span className="text-stone-600 block mt-0.5">
                    BS Home Economics, BS Botany (Women), BS Zoology (Women), BS Psychology (Women)
                  </span>
                </div>
                <div>
                  <span className="text-stone-400 uppercase tracking-wider block font-bold text-[10px]">
                    Specialized Amenities
                  </span>
                  <span className="text-stone-600 block mt-0.5">
                    Women-only Transport Fleet, Gated Hostels, Daycare Center, Psychological Counseling Cell
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col gap-2">
                <Link
                  href="/admissions"
                  className="w-full py-3 rounded-xl bg-[#7F1D1D] text-white font-semibold text-xs text-center hover:bg-[#7F1D1D]/90 transition-colors shadow-xs"
                >
                  Apply to Women Campus Programs
                </Link>
                <Link
                  href="/campuses/main-campus"
                  className="w-full py-3 rounded-xl bg-stone-100 text-stone-700 font-semibold text-xs text-center hover:bg-stone-200 transition-colors"
                >
                  Charbagh Main Campus
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
