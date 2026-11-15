import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, BookOpen, Trophy, Palette, Sparkles, Bus, Shield, HeartPulse, Building2 } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import CampusLifeHeritage from '@/components/home/CampusLifeHeritage';

export const metadata: Metadata = {
  title: 'Campus Life & Facilities | University of Swat',
  description: 'Student societies, Central Library, sports championships, Women Campus, and campus facilities at University of Swat.',
};

const campusHighlights = [
  {
    title: 'Central Automated Library',
    tag: 'Scholastic Hub',
    description: 'Headed by Dr. Wajid Rashid, the Central Library houses over 120,000 print volumes, specialized archives, and high-speed terminals connecting to the HEC National Digital Library.',
    image: '/images/campus/admin-block.jpg',
    link: '/portal',
    linkText: 'Explore Digital Library',
  },
  {
    title: 'Directorate of Sports & Athletics',
    tag: 'Fitness & Championships',
    description: 'Led by Director Dr. Amjad Ali, university athletes compete in HEC Inter-Varsity Zone-A tournaments across badminton, cricket, football, and table tennis.',
    image: '/images/campus/main-campus-gate.jpeg',
    link: '/campuses/main-campus',
    linkText: 'View Sports Complex',
  },
  {
    title: 'Women’s Campus & Home Sciences',
    tag: 'Empowering Women',
    description: 'A self-contained safe campus housing the College of Home Sciences, textile studios, food & nutrition labs, and dedicated women-only shuttle buses.',
    image: '/images/campus/women-campus.jpg',
    link: '/campuses/women-campus',
    linkText: 'Explore Women Campus',
  },
  {
    title: 'Hunerkada: Center for Art & Culture',
    tag: 'Heritage & Creativity',
    description: 'Promoting traditional Swati embroidery, Gandharan sculpture, calligraphy, painting, and regional folklore revitalization in collaboration with national artists.',
    image: '/images/news/news-gandhara-mou-oct2026.jpeg',
    link: '/about',
    linkText: 'Cultural Heritage Overview',
  },
];

export default function CampusLifePage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Student Experience"
        title="Vibrant Campus Life &amp; Alpine Valley"
        subtitle="From athletic championships and high-tech digital reading halls to artistic societies and Gandhara excavations, life at Swat is an immersive journey."
        eyebrow="Campus Life · University of Swat"
      />

      {/* Interactive Photo Gallery from approved home design */}
      <CampusLifeHeritage />

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14 py-10 sm:py-20 space-y-12 sm:space-y-16">
        
        {/* Core Student Life Pillars */}
        <div>
          <div className="pb-4 border-b border-stone-200 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold block mb-1">
                Campus Facilities
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Pillars of the Student Experience
              </h2>
            </div>
            <p className="text-sm text-stone-500 max-w-md font-sans">
              Dedicated infrastructure supporting physical fitness, academic research, creative expression, and inclusive empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {campusHighlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-stone-300 shadow-xs flex flex-col justify-between group hover:border-[#153B27]/60 hover:shadow-md transition-all"
              >
                <div>
                  <div className="relative w-full aspect-16/9 rounded-2xl overflow-hidden mb-6 bg-stone-100 border border-stone-200">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>

                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200 mb-2 inline-block">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3 group-hover:text-[#153B27] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                  <Link
                    href={item.link}
                    className="text-xs font-semibold text-[#153B27] hover:underline flex items-center gap-1.5"
                  >
                    <span>{item.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Welfare & Transportation */}
        <div className="p-5 sm:p-12 rounded-2xl sm:rounded-3xl bg-[#153B27] text-white border border-white/10 shadow-[0_24px_48px_-22px_rgba(12,25,18,0.5)]">
          <div className="pb-4 border-b border-white/15 mb-8">
            <span className="text-xs uppercase tracking-widest text-[#C8A96E] font-bold block mb-1">
              Welfare &amp; Services
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Health, Mobility &amp; Student Safety
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.07] border border-white/[0.12]">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#C8A96E] mb-4">
                <Bus className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-white mb-2">
                University Shuttle Fleet
              </h4>
              <p className="font-sans text-xs text-white/70 leading-relaxed">
                Daily bus shuttles connect Mingora, Saidu Sharif, Barikot, and Matta with Charbagh Main Campus and Women Campus at subsidized student fares.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.07] border border-white/[0.12]">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#C8A96E] mb-4">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-white mb-2">
                Campus Health Dispensary
              </h4>
              <p className="font-sans text-xs text-white/70 leading-relaxed">
                On-campus medical officers provide free basic healthcare, emergency triage, and prescription medicines for enrolled students and resident staff.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.07] border border-white/[0.12]">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#C8A96E] mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-white mb-2">
                Proctorial Board &amp; Security
              </h4>
              <p className="font-sans text-xs text-white/70 leading-relaxed">
                The Proctorial Board guarantees a peaceful scholastic environment, enforces anti-harassment regulations, and maintains 24/7 gated security.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
