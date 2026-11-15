import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock, Download, Info } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Official Academic Calendar 2026–2027 | University of Swat',
  description:
    'Semester schedules, examination dates, registration periods, and statutory holidays at the University of Swat.',
};

const fallSemester2026 = [
  { event: 'Commencement of Fall Semester Classes', date: 'September 01, 2026', status: 'Completed' },
  { event: 'Last Date for Course Add / Drop', date: 'September 15, 2026', status: 'Completed' },
  { event: 'Mid-Term Examinations', date: 'November 02 – November 10, 2026', status: 'Ongoing' },
  { event: 'Submission of Mid-Term Award Lists', date: 'November 18, 2026', status: 'Upcoming' },
  { event: 'Final Terminal Examinations', date: 'January 04 – January 18, 2027', status: 'Upcoming' },
  { event: 'Declaration of Fall 2026 Results', date: 'January 28, 2027', status: 'Upcoming' },
  { event: 'Winter Break / Semester Intermission', date: 'January 19 – January 31, 2027', status: 'Upcoming' },
];

const springSemester2027 = [
  { event: 'Online Course Registration for Spring 2027', date: 'January 20 – January 31, 2027', status: 'Upcoming' },
  { event: 'Commencement of Spring 2027 Classes', date: 'February 01, 2027', status: 'Upcoming' },
  { event: 'Mid-Term Examinations (Spring 2027)', date: 'April 05 – April 14, 2027', status: 'Upcoming' },
  { event: 'Final Terminal Examinations (Spring 2027)', date: 'June 07 – June 22, 2027', status: 'Upcoming' },
  { event: 'Declaration of Spring 2027 Results', date: 'July 05, 2027', status: 'Upcoming' },
  { event: 'Summer Vacation (Faculty & Scholars)', date: 'July 01 – August 31, 2027', status: 'Upcoming' },
];

function statusClasses(status: string) {
  if (status === 'Completed') {
    return 'bg-stone-100 text-stone-600 border-stone-200';
  }
  if (status === 'Ongoing') {
    return 'bg-[#C8A96E]/20 text-[#7A5A1E] border-[#C8A96E]/50';
  }
  return 'bg-[#153B27]/8 text-[#153B27] border-[#153B27]/20';
}

function Timeline({ items, tone }: { items: typeof fallSemester2026; tone: 'forest' | 'crimson' }) {
  const iconTone = tone === 'forest' ? 'text-[#153B27]' : 'text-[#7F1D1D]';
  const lineTone = tone === 'forest' ? 'bg-[#153B27]/20' : 'bg-[#7F1D1D]/20';

  return (
    <ol className="relative space-y-0">
      {items.map((item, idx) => (
        <li key={item.event} className="relative pl-10 sm:pl-12 pb-6 last:pb-0">
          {idx < items.length - 1 && (
            <span aria-hidden="true" className={`absolute left-[15px] sm:left-[17px] top-8 bottom-0 w-px ${lineTone}`} />
          )}
          <span
            aria-hidden="true"
            className="absolute left-0 top-1.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-stone-200 shadow-xs flex items-center justify-center"
          >
            <CalendarDays className={`w-4 h-4 ${iconTone}`} />
          </span>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 p-4 rounded-xl bg-stone-50/80 border border-stone-200/80 hover:bg-white hover:border-stone-300 transition-colors">
            <div className="min-w-0">
              <h4 className="font-serif text-[1.05rem] sm:text-lg font-bold text-[#14291D] leading-snug">
                {item.event}
              </h4>
              <p className="font-mono text-[11px] sm:text-xs text-stone-500 mt-1 tabular-nums">{item.date}</p>
            </div>
            <span
              className={`inline-flex items-center self-start text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full border shrink-0 ${statusClasses(item.status)}`}
            >
              {item.status}
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function AcademicCalendarPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen text-[#14291D]">
      <PageHeader
        tag="Academic Schedule"
        eyebrow="Academic Affairs · University of Swat"
        title="Official Academic Calendar 2026–2027"
        subtitle="Approved semester timelines, examination sessions, registration periods, and statutory holidays for the University of Swat."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academics' },
          { label: 'Academic Calendar' },
        ]}
      >
        <dl className="flex flex-wrap items-stretch border-t border-white/15 pt-6 sm:pt-7 gap-y-4">
          {[
            { value: '02', label: 'Semesters' },
            { value: '13', label: 'Key Milestones' },
            { value: '2026–27', label: 'Academic Year' },
          ].map((fact, idx, arr) => (
            <div
              key={fact.label}
              className={`flex flex-col justify-center pr-6 mr-6 sm:pr-8 sm:mr-8 ${
                idx < arr.length - 1 ? 'border-r border-white/15' : ''
              }`}
            >
              <dt className="order-2 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-white/55 font-semibold mt-1.5">
                {fact.label}
              </dt>
              <dd className="order-1 font-serif text-2xl sm:text-3xl text-[#C8A96E] font-bold leading-none tabular-nums">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-14 sm:py-16 lg:py-20">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            href="/academics"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500 hover:text-[#153B27] transition-colors min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Academics</span>
          </Link>

          <Link
            href="/academics/downloads"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-stone-200 text-stone-800 hover:bg-stone-50 hover:border-stone-300 text-[11px] font-bold uppercase tracking-[0.12em] transition-all active:scale-[0.985] shadow-xs"
          >
            <Download className="w-4 h-4 text-[#7F1D1D]" />
            <span>Open Downloads &amp; Forms</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          {/* Fall Semester */}
          <section className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-stone-200/90 shadow-xs" aria-labelledby="fall-semester-heading">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b border-stone-100 mb-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#7F1D1D] font-bold block mb-1.5">
                  Odd Semester
                </span>
                <h2 id="fall-semester-heading" className="font-serif text-2xl sm:text-[1.85rem] font-bold text-[#14291D] tracking-[-0.01em]">
                  Fall Semester 2026
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.14em] bg-[#153B27]/10 text-[#153B27] border border-[#153B27]/20 self-start">
                <Clock className="w-3.5 h-3.5" />
                Current Term
              </span>
            </div>
            <Timeline items={fallSemester2026} tone="forest" />
          </section>

          {/* Spring Semester */}
          <section className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-stone-200/90 shadow-xs" aria-labelledby="spring-semester-heading">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b border-stone-100 mb-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#153B27] font-bold block mb-1.5">
                  Even Semester
                </span>
                <h2 id="spring-semester-heading" className="font-serif text-2xl sm:text-[1.85rem] font-bold text-[#14291D] tracking-[-0.01em]">
                  Spring Semester 2027
                </h2>
              </div>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.14em] bg-stone-100 text-stone-600 border border-stone-200 self-start">
                Upcoming Term
              </span>
            </div>
            <Timeline items={springSemester2027} tone="crimson" />
          </section>
        </div>

        <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-[#0F291B] text-white border border-[#0C1912] flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-[#C8A96E]/15 text-[#C8A96E] flex items-center justify-center shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-1.5">Statutory Advisory on Attendance &amp; Examinations</h3>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
              In accordance with University of Swat Examination Statutes, a minimum 75% attendance in lectures, practicals, and clinical sessions is mandatory for admission to terminal semester examinations. Dates may be revised by the Academic Council in response to weather or administrative contingencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
