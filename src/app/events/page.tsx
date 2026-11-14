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

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20 space-y-8">
        
        <div className="space-y-6">
          {eventsList.map((evt) => (
            <Link
              key={evt.id}
              href={`/events/${evt.id}`}
              className="group block p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs hover:border-[#153B27]/40 hover:shadow-md transition-all"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#153B27] font-semibold border border-emerald-200">
                    {evt.category}
                  </span>
                  <span className="text-stone-400 font-mono flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-stone-500" />
                    {evt.date}
                  </span>
                  <span className="text-stone-400 font-mono flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-stone-500" />
                    {evt.time}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-stone-900 leading-snug group-hover:text-[#153B27] transition-colors">
                  {evt.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed">
                  {evt.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#7F1D1D]" />
                    {evt.location}
                  </span>
                  <span>•</span>
                  <span>Organized by: <strong>{evt.organizer}</strong></span>
                </div>

                <div className="pt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[#153B27]">
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
