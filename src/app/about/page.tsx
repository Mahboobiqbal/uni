import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Award, BookOpen, Building2, CheckCircle2, Globe, Landmark, MapPin, ShieldCheck, Sun } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { universityData } from '@/data/universityData';

export const metadata: Metadata = {
  title: 'About University of Swat | History, Heritage & Mission',
  description: 'History, vision, strategic roadmap, and Gandhara cultural heritage of the University of Swat.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Institutional Profile"
        title="About the University of Swat"
        subtitle="Aspiring for Quality Education with Relevance in the historic, alpine cradle of Gandhara civilization."
        eyebrow="History, Vision &amp; Strategic Roadmap"
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20 space-y-16">
        
        {/* Swat Valley Scenery & Heritage */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-6 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">
                  The Valley of Swat (Uddiyana)
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                Where Ancient Gandhara Meets Modern Intellect
              </h2>
              <p className="font-sans text-stone-700 text-base leading-relaxed">
                The lush green forests, running clear streams, and historic Swat Valley lies between 34°-40′ to 35°N latitude and 72′ to 74°-6′ E longitude. The valley is an integral part of the strategic and significant region where three parts of the Asian continent—South Asia, Central Asia and China—meet.
              </p>
              <p className="font-sans text-stone-600 text-sm leading-relaxed">
                The River Swat is a clear water river starting from the Ushu mountain range to the wide spread of the valley. Swat was historically known as Uddiyana (the garden), famous worldwide for its Buddhist stupas, rock carvings, ancient monastic sanctuaries, and peaceful hospitality inherited from the historic era of the Wali of Swat.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-sm border border-stone-200">
                <Image
                  src="/images/campus/charbagh-campus.jpg"
                  alt="Swat Valley University Campus"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </div>

        {/* University Establishment & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-0.5 w-6 bg-[#7F1D1D]" />
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                Establishment (2010)
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">
              Founding &amp; Statutory Origin
            </h3>
            <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
              The University of Swat was formally chartered in 2010 by the Government of Khyber Pakhtunkhwa to advance higher education in Swat, Shangla, Buner, and neighboring districts. From humble beginnings, the university has rapidly expanded to over 6,000 scholars, 28 teaching departments, four major academic faculties, and a purpose-built 100% solarized Main Campus in Charbagh.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-100 text-xs">
              <div>
                <strong className="block text-stone-900 text-sm">Governor of KP</strong>
                <span className="text-stone-500">Chancellor</span>
              </div>
              <div>
                <strong className="block text-stone-900 text-sm">Prof. Dr. Husnul Amin</strong>
                <span className="text-stone-500">Vice Chancellor</span>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-0.5 w-6 bg-[#B48A3E]" />
              <span className="text-xs uppercase tracking-widest text-[#B48A3E] font-bold">
                Motto &amp; Values
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">
              Aspiring for Quality Education with Relevance
            </h3>
            <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
              Our academic philosophy centers on &ldquo;relevance&rdquo;—ensuring that our research programs in botany, geology, environmental resilience, law, business, and software engineering directly address the industrial and environmental imperatives of northern Pakistan.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#153B27]" />
                <span>Meritocracy, transparency, and academic integrity</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#153B27]" />
                <span>100% green solarized campus infrastructure</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#153B27]" />
                <span>Dedicated Women Campus &amp; College of Home Sciences</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#153B27]" />
                <span>HEC W-Category 91.4% rating maintained</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Sub-Campuses Overview */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
          <div className="pb-4 border-b border-stone-100 mb-8">
            <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold block mb-1">
              Geographic Presence
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-900">
              Campuses of the University of Swat
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 bg-stone-200">
                <Image
                  src="/images/campus/charbagh-campus.jpg"
                  alt="Charbagh Main Campus"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-900 mb-1">
                Charbagh Main Campus
              </h4>
              <span className="text-xs text-[#153B27] font-semibold block mb-2">Central Campus · Charbagh</span>
              <p className="font-sans text-xs text-stone-600 leading-relaxed mb-4">
                Houses all 4 faculties, Central Library, Vice Chancellor’s Secretariat, and solarized labs.
              </p>
              <Link href="/campuses/main-campus" className="text-xs font-semibold text-[#153B27] hover:underline flex items-center gap-1">
                <span>View Campus Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 bg-stone-200">
                <Image
                  src="/images/campus/women-campus.jpg"
                  alt="Women Campus"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-900 mb-1">
                Women Campus
              </h4>
              <span className="text-xs text-[#7F1D1D] font-semibold block mb-2">Specialized Campus · Swat</span>
              <p className="font-sans text-xs text-stone-600 leading-relaxed mb-4">
                Home to the College of Home Sciences, women-only laboratories, and dedicated transit fleet.
              </p>
              <Link href="/campuses/women-campus" className="text-xs font-semibold text-[#7F1D1D] hover:underline flex items-center gap-1">
                <span>View Campus Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 bg-stone-200">
                <Image
                  src="/images/campus/main-campus-gate.jpeg"
                  alt="Sangota Campus"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-serif text-lg font-bold text-stone-900 mb-1">
                Sangota Campus
              </h4>
              <span className="text-xs text-[#B48A3E] font-semibold block mb-2">Academic Annex · Sangota</span>
              <p className="font-sans text-xs text-stone-600 leading-relaxed mb-4">
                Houses the Department of Education &amp; Staff Training, residential quarters, and conference suites.
              </p>
              <Link href="/contact" className="text-xs font-semibold text-[#B48A3E] hover:underline flex items-center gap-1">
                <span>Contact Sangota Campus</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
