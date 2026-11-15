import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { universityEvents } from '@/data/eventsData';

export const metadata: Metadata = {
  title: 'University Events & Academic Seminars | University of Swat',
  description: 'Conferences, symposia, convocation, Allama Iqbal Day, and public lectures at University of Swat.',
};

const eventsList = universityEvents;

export default function EventsPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Academic Calendar &amp; Gatherings"
        title="University Events &amp; Public Lectures"
        subtitle="Conferences, scholarly symposiums, convocation ceremonies, and cultural gatherings across the campuses of University of Swat."
        eyebrow="Events · University of Swat"
      />

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14 py-10 sm:py-20 space-y-8">
        
        <div className="space-y-6">
          {eventsList.map((evt) => (
            <Link
              key={evt.id}
              href={`/events/${evt.id}`}
              className="group block p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-stone-300 shadow-xs hover:border-[#153B27]/40 hover:shadow-md transition-all first:bg-[#153B27] first:text-white first:border-white/10 first:shadow-[0_24px_48px_-22px_rgba(12,25,18,0.5)] first:hover:bg-[#0F2D1E] first:hover:border-white/20! first:hover:shadow-[0_28px_56px_-24px_rgba(12,25,18,0.55)]"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#153B27] font-semibold border border-emerald-200 group-first:bg-[#C8A96E]/15 group-first:text-[#C8A96E] group-first:border-[#C8A96E]/30">
                    {evt.category}
                  </span>
                  <span className="text-stone-500 font-mono flex items-center gap-1 group-first:text-white/60">
                    <Calendar className="w-3.5 h-3.5 text-stone-500 group-first:text-[#C8A96E]" />
                    {evt.date}
                  </span>
                  <span className="text-stone-500 font-mono flex items-center gap-1 group-first:text-white/60">
                    <Clock className="w-3.5 h-3.5 text-stone-500 group-first:text-[#C8A96E]" />
                    {evt.time}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-stone-900 leading-snug group-hover:text-[#153B27] transition-colors group-first:text-white group-first:group-hover:text-[#C8A96E]!">
                  {evt.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed group-first:text-white/70">
                  {evt.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-stone-600 pt-1 group-first:text-white/65">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#7F1D1D] group-first:text-[#C8A96E]" />
                    {evt.location}
                  </span>
                  <span>•</span>
                  <span>Organized by: <strong>{evt.organizer}</strong></span>
                </div>

                <div className="pt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[#153B27] group-first:text-[#C8A96E]">
                  Event details
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
