import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin, Tag, Users } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { universityEvents } from '@/data/eventsData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return universityEvents.map((event) => ({ slug: event.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = universityEvents.find((e) => e.id === slug);
  if (!event) return { title: 'Event Not Found | University of Swat' };
  return {
    title: `${event.title} | University of Swat`,
    description: event.description,
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = universityEvents.find((e) => e.id === slug);

  if (!event) {
    notFound();
  }

  const related = universityEvents.filter((e) => e.id !== event.id).slice(0, 3);

  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag={event.category}
        title={event.title}
        subtitle={event.description}
        eyebrow="Event · University of Swat"
        backHref="/events"
        backLabel="All Events"
      />

      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Details column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-300 shadow-xs">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-6">
                About the Event
              </h2>
              <p className="font-sans text-stone-700 text-base leading-relaxed">
                {event.description}
              </p>

              <div className="mt-8 pt-6 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-emerald-50 text-[#153B27] flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-500 font-bold">Date</p>
                    <p className="font-semibold text-stone-800">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-emerald-50 text-[#153B27] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-500 font-bold">Timing</p>
                    <p className="font-semibold text-stone-800">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-red-50 text-[#7F1D1D] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-500 font-bold">Venue</p>
                    <p className="font-semibold text-stone-800">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-amber-50 text-[#B48A3E] flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-500 font-bold">Organizer</p>
                    <p className="font-semibold text-stone-800">{event.organizer}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#153B27] to-[#14291D] text-white">
              <h3 className="font-serif text-xl font-bold mb-3">Attendance & Registration</h3>
              <p className="text-white/75 text-sm leading-relaxed mb-5">
                Participation is open to students, faculty, and the public. Confirm attendance with
                the organizing department or through the university contact directory below.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#153B27] text-sm font-bold hover:bg-stone-100 transition-colors"
                >
                  Contact Organizer
                </Link>
                <Link
                  href="/academics/calendar"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/25 text-white text-sm font-bold hover:bg-white/10 transition-colors"
                >
                  View Academic Calendar
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-3xl bg-white border border-stone-300 shadow-xs lg:sticky lg:top-24">
              <div className="flex items-center gap-2 mb-5">
                <Tag className="w-4 h-4 text-[#7F1D1D]" />
                <h3 className="font-serif text-lg font-bold text-stone-900">More Events</h3>
              </div>
              <div className="space-y-3">
                {related.map((evt) => (
                  <Link
                    key={evt.id}
                    href={`/events/${evt.id}`}
                    className="block p-4 rounded-2xl bg-stone-50 border border-stone-200 hover:border-stone-400 transition-colors"
                  >
                    <span className="block text-xs font-semibold text-[#153B27] mb-1">
                      {evt.date}
                    </span>
                    <span className="block text-sm font-bold text-stone-800 leading-snug">
                      {evt.title}
                    </span>
                    <span className="block text-xs text-stone-600 mt-1">{evt.category}</span>
                  </Link>
                ))}
              </div>
              <Link
                href="/events"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#153B27] hover:text-[#14291D] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                All Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
