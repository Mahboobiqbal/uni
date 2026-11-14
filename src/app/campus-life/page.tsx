import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Bus, Compass, Pill, Shield, Users } from 'lucide-react';
import CampusLifeHeritage from '@/components/home/CampusLifeHeritage';

export const metadata: Metadata = {
  title: 'Campus Life | University of Swat',
  description: 'Campus life at the University of Swat — facilities, sports, societies, transport and student services.',
};

const lifeAreas = [
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Societies & Clubs',
    text: 'Literary, debating, environmental and coding societies run events through the academic year.',
  },
  {
    icon: <Pill className="w-5 h-5" />,
    title: 'Health & Wellness',
    text: 'Campus dispensary, counseling service and anti-harassment cell on both campuses.',
  },
  {
    icon: <Bus className="w-5 h-5" />,
    title: 'Transport',
    text: 'Daily shuttles between Mingora, Saidu Sharif and the Charbagh Main Campus.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Security & Safety',
    text: '24/7 campus security with a women-only transport fleet and secure hostels.',
  },
];

export default function CampusLifePage() {
  return (
    <>
      <h1 className="sr-only">Campus Life & Swat Valley Heritage</h1>
      {/* Gallery section (includes its own split header) */}
      <CampusLifeHeritage />

      <main className="pb-14 lg:pb-20 bg-[#F6F5F0]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
          <section className="pt-14 lg:pt-20">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
              <h2 className="font-serif text-3xl text-[#14291D] font-bold tracking-[-0.02em]">
                Everyday Student Life
              </h2>
              <p className="text-sm text-stone-500 max-w-md lg:text-right leading-[1.65]">
                Services and spaces that make the University of Swat a complete living-learning
                environment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {lifeAreas.map(area => (
                <article
                  key={area.title}
                  className="p-6 rounded-xl bg-white border border-stone-200/90 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-[0_16px_36px_-18px_rgba(21,59,39,0.25)]"
                >
                  <span className="w-11 h-11 rounded-xl bg-[#153B27]/8 text-[#153B27] flex items-center justify-center mb-4">
                    {area.icon}
                  </span>
                  <h3 className="font-serif text-lg text-[#14291D] font-bold mb-2">{area.title}</h3>
                  <p className="text-sm text-stone-500 leading-[1.6]">{area.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12 p-6 sm:p-8 rounded-xl bg-white border border-stone-200/90 shadow-xs flex flex-col sm:flex-row items-start gap-5">
            <span className="w-11 h-11 rounded-xl bg-[#7F1D1D]/10 text-[#7F1D1D] flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-serif text-xl text-[#14291D] font-bold mb-1.5">
                Explore the Swat Valley
              </h3>
              <p className="text-sm text-stone-500 leading-[1.65] max-w-2xl">
                From the ancient stupas of Butkara to alpine meadows and rivers, the valley is an
                extension of the classroom. The Department of Archaeology and heritage centres
                run guided field excursions each semester.
              </p>
            </div>
            <Link
              href="/research"
              className="sm:ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#153B27] hover:text-[#14291D] transition-colors"
            >
              Research & heritage
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
