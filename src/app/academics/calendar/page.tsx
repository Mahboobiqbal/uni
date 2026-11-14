import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Download, AlertCircle, Clock, CheckCircle2 } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Official Academic Calendar 2026–2027 | University of Swat',
  description: 'Semester schedules, examination dates, registration periods, and holidays at University of Swat.',
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

export default function AcademicCalendarPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Academic Schedule"
        title="Official Academic Calendar 2026–2027"
        subtitle="Approved semester timelines, examination sessions, registration periods, and statutory holidays for the University of Swat."
        eyebrow="Academic Affairs · University of Swat"
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20">
        
        {/* Back link */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            href="/academics"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-[#153B27] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Academics Overview</span>
          </Link>

          <Link
            href="/academics/downloads"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 text-xs font-semibold shadow-xs"
          >
            <Download className="w-4 h-4 text-[#7F1D1D]" />
            <span>Download Calendar PDF</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Fall Semester 2026 */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold block mb-1">
                  Odd Semester
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Fall Semester 2026
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-[#153B27] border border-emerald-200">
                Current Term
              </span>
            </div>

            <div className="space-y-4">
              {fallSemester2026.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-[#153B27] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-serif text-sm font-bold text-stone-900 block">
                        {item.event}
                      </span>
                      <span className="font-mono text-xs text-stone-500 block mt-0.5">
                        {item.date}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full shrink-0 ${
                      item.status === 'Completed'
                        ? 'bg-stone-200 text-stone-600'
                        : item.status === 'Ongoing'
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Spring Semester 2027 */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold block mb-1">
                  Even Semester
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Spring Semester 2027
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-600 border border-stone-200">
                Upcoming Term
              </span>
            </div>

            <div className="space-y-4">
              {springSemester2027.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-[#7F1D1D] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-serif text-sm font-bold text-stone-900 block">
                        {item.event}
                      </span>
                      <span className="font-mono text-xs text-stone-500 block mt-0.5">
                        {item.date}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full shrink-0 bg-stone-100 text-stone-500">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Regulatory Advisory */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-stone-100 border border-stone-200 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-[#7F1D1D] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            <strong className="font-bold text-stone-900 block mb-1">Statutory Advisory on Attendance &amp; Exams:</strong>
            In accordance with the University of Swat Examination Statutes, minimum 75% attendance in lectures, practicals, and clinical sessions is mandatory for admitting scholars to terminal semester examinations. Discretionary dates are subject to revision by the Academic Council upon unforeseen weather emergencies.
          </div>
        </div>

      </div>
    </div>
  );
}
