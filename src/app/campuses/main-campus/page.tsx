import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Building2, CheckCircle2, MapPin, Sun, Zap, Users, ShieldCheck } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Charbagh Main Campus | University of Swat',
  description: 'Profile of Charbagh Main Campus: academic blocks, 100% solar power array, library, and sports facilities.',
};

export default function MainCampusPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Central Campus"
        title="Charbagh Main Campus"
        subtitle="Spread along the banks of River Swat, Charbagh Main Campus serves as the heart of academic, research, and administrative life."
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
            
            {/* Hero Image */}
            <div className="relative w-full aspect-16/9 rounded-3xl overflow-hidden shadow-sm border border-stone-200">
              <Image
                src="/images/campus/charbagh-campus.jpg"
                alt="Charbagh Main Campus University of Swat"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Overview */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-0.5 w-6 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">
                  Campus Profile
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
                The Central Scholastic Hub of Swat
              </h2>
              <p className="font-sans text-stone-700 text-base sm:text-lg leading-relaxed mb-6">
                Situated in Charbagh along the arterial highway of Swat, the Main Campus encompasses Academic Block C, executive administrative secretariats, automated Central Library, high-tech computer and chemical research laboratories, multipurpose examination complexes, and varsity sports grounds.
              </p>
            </div>

            {/* Landmark Solarization Project */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-0.5 w-6 bg-[#7F1D1D]" />
                <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                  Green Energy Milestone
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">
                Provincial Pioneer in 100% Solarization
              </h3>
              <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                In October 2026, the University of Swat inaugurated its landmark solar energy installation across Charbagh Main Campus, becoming the first university in Khyber Pakhtunkhwa to transition its academic buildings, laboratories, and server rooms to clean, uninterrupted solar electricity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                  <Sun className="w-5 h-5 text-amber-600 mb-2" />
                  <strong className="text-xs font-bold text-stone-900 block">Zero Emissions</strong>
                  <span className="text-[11px] text-stone-500">100% clean solar generation</span>
                </div>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                  <Zap className="w-5 h-5 text-emerald-600 mb-2" />
                  <strong className="text-xs font-bold text-stone-900 block">Uninterrupted Labs</strong>
                  <span className="text-[11px] text-stone-500">Continuous power for servers &amp; PCRs</span>
                </div>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                  <Building2 className="w-5 h-5 text-blue-600 mb-2" />
                  <strong className="text-xs font-bold text-stone-900 block">All Academic Blocks</strong>
                  <span className="text-[11px] text-stone-500">Block C, Admin, Exam &amp; Library</span>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
              <h3 className="font-serif text-xl font-bold text-stone-900 pb-3 border-b border-stone-100 mb-4">
                Campus Location
              </h3>
              <div className="space-y-4 text-xs sm:text-[13px] text-stone-700">
                <div>
                  <span className="text-stone-400 uppercase tracking-wider block font-bold text-[10px]">
                    Address
                  </span>
                  <span className="font-medium text-stone-900 block mt-0.5">
                    Main Campus, Charbagh, District Swat, KP
                  </span>
                </div>
                <div>
                  <span className="text-stone-400 uppercase tracking-wider block font-bold text-[10px]">
                    Key Departments Housed
                  </span>
                  <span className="text-stone-600 block mt-0.5">
                    Computer Science, Chemistry, Physics, Mathematics, Environmental Sciences, Management, Law
                  </span>
                </div>
                <div>
                  <span className="text-stone-400 uppercase tracking-wider block font-bold text-[10px]">
                    Administrative Offices
                  </span>
                  <span className="text-stone-600 block mt-0.5">
                    Vice Chancellor Secretariat, Registrar, Treasurer, Controller Exams, ORIC, QEC
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col gap-2">
                <Link
                  href="/campuses/women-campus"
                  className="w-full py-3 rounded-xl bg-stone-100 text-stone-700 font-semibold text-xs text-center hover:bg-stone-200 transition-colors"
                >
                  Visit Women Campus Profile
                </Link>
                <Link
                  href="/contact"
                  className="w-full py-3 rounded-xl bg-[#153B27] text-white font-semibold text-xs text-center hover:bg-[#153B27]/90 transition-colors"
                >
                  Campus Map &amp; Directions
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
