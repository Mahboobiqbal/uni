import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  ShieldCheck,
} from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Official Academic Calendar 2026–2027 | University of Swat',
  description:
    'Approved semester timelines, examination sessions, registration periods, and statutory holidays for Fall 2026 and Spring 2027 at the University of Swat.',
};

const fallSemester2026 = [
  { event: 'Commencement of Fall Semester Classes', date: 'September 01, 2026', status: 'Completed', milestone: false },
  { event: 'Last Date for Course Add / Drop', date: 'September 15, 2026', status: 'Completed', milestone: false },
  { event: 'Mid-Term Examinations (Fall 2026)', date: 'November 02 – November 10, 2026', status: 'Ongoing', milestone: true },
  { event: 'Submission of Mid-Term Award Lists', date: 'November 18, 2026', status: 'Upcoming', milestone: false },
  { event: 'Final Terminal Examinations', date: 'January 04 – January 18, 2027', status: 'Upcoming', milestone: true },
  { event: 'Winter Break & Semester Intermission', date: 'January 19 – January 31, 2027', status: 'Upcoming', milestone: false },
  { event: 'Declaration of Fall 2026 Official Results', date: 'January 28, 2027', status: 'Upcoming', milestone: true },
];

const springSemester2027 = [
  { event: 'Online Course Registration for Spring 2027', date: 'January 20 – January 31, 2027', status: 'Upcoming', milestone: false },
  { event: 'Commencement of Spring 2027 Classes', date: 'February 01, 2027', status: 'Upcoming', milestone: false },
  { event: 'Mid-Term Examinations (Spring 2027)', date: 'April 05 – April 14, 2027', status: 'Upcoming', milestone: true },
  { event: 'Final Terminal Examinations (Spring 2027)', date: 'June 07 – June 22, 2027', status: 'Upcoming', milestone: true },
  { event: 'Declaration of Spring 2027 Official Results', date: 'July 05, 2027', status: 'Upcoming', milestone: true },
  { event: 'Summer Vacation (Faculty & Scholars)', date: 'July 01 – August 31, 2027', status: 'Upcoming', milestone: false },
];

function statusClasses(status: string) {
  if (status === 'Completed') {
    return 'bg-stone-100 text-stone-600 border-stone-200';
  }
  if (status === 'Ongoing') {
    return 'bg-[#C8A96E]/20 text-[#7A5A1E] border-[#C8A96E]/50 font-bold';
  }
  return 'bg-[#153B27]/8 text-[#153B27] border-[#153B27]/20 font-semibold';
}

function Timeline({ items, tone }: { items: typeof fallSemester2026; tone: 'forest' | 'crimson' }) {
  const iconTone = tone === 'forest' ? 'text-[#153B27]' : 'text-[#7F1D1D]';
  const lineTone = tone === 'forest' ? 'bg-[#153B27]/20' : 'bg-[#7F1D1D]/20';

  return (
    <ol className="relative space-y-0">
      {items.map((item, idx) => (
        <li key={item.event} className="relative pl-10 sm:pl-12 pb-5 last:pb-0">
          {idx < items.length - 1 && (
            <span aria-hidden="true" className={`absolute left-[15px] sm:left-[17px] top-8 bottom-0 w-px ${lineTone}`} />
          )}
          <span
            aria-hidden="true"
            className="absolute left-0 top-1.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-stone-300 shadow-xs flex items-center justify-center"
          >
            <CalendarDays className={`w-4 h-4 ${iconTone}`} />
          </span>

          <div
            className={`flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 p-4 rounded-xl border transition-all duration-150 ${
              item.status === 'Ongoing'
                ? 'bg-amber-50/60 border-[#C8A96E]/60 shadow-xs'
                : 'bg-stone-50/80 border-stone-200 hover:bg-white hover:border-stone-400'
            }`}
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <h4 className="font-serif text-[1.05rem] sm:text-lg font-bold text-[#14291D] leading-snug">
                  {item.event}
                </h4>
                {item.milestone && (
                  <span className="hidden sm:inline-block text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-stone-200/80 text-stone-700">
                    Exam
                  </span>
                )}
              </div>
              <p className="font-mono text-[11px] sm:text-xs text-stone-600 tabular-nums">{item.date}</p>
            </div>
            <span
              className={`inline-flex items-center self-start text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full border shrink-0 ${statusClasses(item.status)}`}
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
    <div className="bg-[#F6F5F0] min-h-screen text-[#14291D] relative">
      {/* ─── Ambient Glow ─── */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(21,59,39,0.06),rgba(255,255,255,0))] pointer-events-none"
      />

      {/* ─── 1. Deep Forest Green (#153B27) Page Header ─── */}
      <PageHeader
        tag="OFFICIAL SEMESTER SCHEDULE"
        eyebrow="ACADEMIC AFFAIRS & EXAMINATIONS"
        title="Official Academic Calendar 2026–2027"
        subtitle="Statutory timelines approved by the Academic Council for Fall 2026 and Spring 2027, including registration windows, examination sessions, and term intermissions."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academics' },
          { label: 'Academic Calendar' },
        ]}
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 pb-20 sm:pb-28 relative z-10">
        {/* ─── 2. Editorial Year-at-a-Glance Strip (replaces overlapping crimson stat bar) ─── */}
        <div className="-mt-10 sm:-mt-12 relative z-20 mb-12 lg:mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 rounded-2xl overflow-hidden border border-stone-200 shadow-xs">
            {[
              { value: '02', label: 'Academic Semesters', detail: 'Fall 2026 & Spring 2027' },
              { value: '13', label: 'Official Milestones', detail: 'Exams, Add/Drop & Results' },
              { value: '16–18', label: 'Weeks per Semester', detail: 'Instructional Contact Hours' },
              { value: '75%', label: 'Attendance Threshold', detail: 'Statutory Exam Requirement' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white p-5 sm:p-6 text-center sm:text-left">
                <span className="block font-serif text-3xl sm:text-4xl font-bold text-[#153B27] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-stone-700 font-bold mt-1 block">
                  {stat.label}
                </span>
                <span className="text-[11px] text-stone-500 mt-0.5 block">{stat.detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 3. Quick Actions ─── */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            href="/academics"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-600 hover:text-[#153B27] transition-colors min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 text-[#7F1D1D]" />
            <span>Return to Academics Overview</span>
          </Link>

          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="/academics/downloads"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-stone-800 hover:bg-stone-50 hover:border-stone-400 text-xs font-bold uppercase tracking-[0.12em] transition-all active:scale-[0.985] shadow-xs"
            >
              <FileText className="w-4 h-4 text-[#7F1D1D]" />
              <span>Downloads &amp; Forms</span>
            </Link>

            <a
              href="https://uswat.edu.pk/downloads/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#153B27] text-white hover:bg-[#0F2D1E] text-xs font-bold uppercase tracking-[0.12em] transition-all active:scale-[0.985] shadow-[0_12px_24px_-14px_rgba(21,59,39,0.6)]"
            >
              <Download className="w-4 h-4 text-[#C8A96E]" />
              <span>Download Calendar PDF</span>
            </a>
          </div>
        </div>

        {/* ─── 4. Side-by-Side Semester Milestones ─── */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10 mb-14">
          {/* Fall Semester 2026 */}
          <section
            className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-stone-300 shadow-xs hover:-translate-y-[2px] transition-all duration-200"
            aria-labelledby="fall-semester-heading"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b border-stone-200 mb-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#7F1D1D] font-bold block mb-1.5">
                  Odd Semester · Term 01
                </span>
                <h2
                  id="fall-semester-heading"
                  className="font-serif text-2xl sm:text-[1.85rem] font-bold text-[#14291D] tracking-[-0.01em]"
                >
                  Fall Semester 2026
                </h2>
                <p className="text-xs text-stone-600 mt-1">September 01, 2026 – January 31, 2027</p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.14em] bg-[#153B27]/10 text-[#153B27] border border-[#153B27]/20 self-start">
                <Clock className="w-3.5 h-3.5" />
                Current Term
              </span>
            </div>

            <Timeline items={fallSemester2026} tone="forest" />
          </section>

          {/* Spring Semester 2027 */}
          <section
            className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-stone-300 shadow-xs hover:-translate-y-[2px] transition-all duration-200"
            aria-labelledby="spring-semester-heading"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b border-stone-200 mb-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#153B27] font-bold block mb-1.5">
                  Even Semester · Term 02
                </span>
                <h2
                  id="spring-semester-heading"
                  className="font-serif text-2xl sm:text-[1.85rem] font-bold text-[#14291D] tracking-[-0.01em]"
                >
                  Spring Semester 2027
                </h2>
                <p className="text-xs text-stone-600 mt-1">February 01, 2027 – August 31, 2027</p>
              </div>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.14em] bg-stone-100 text-stone-600 border border-stone-200 self-start">
                Upcoming Term
              </span>
            </div>

            <Timeline items={springSemester2027} tone="crimson" />
          </section>
        </div>

        {/* ─── 5. Statutory Advisory Notice Box ─── */}
        <div className="p-7 sm:p-8 rounded-2xl bg-[#0F291B] text-white border border-[#0C1912] shadow-xl relative overflow-hidden">
          <div aria-hidden="true" className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#C8A96E]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#C8A96E]/15 text-[#C8A96E] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-0.5 w-6 bg-[#C8A96E]" />
                <span className="text-xs uppercase tracking-[0.18em] text-[#C8A96E] font-bold">
                  Statutory Examination Advisory
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                Mandatory Attendance &amp; Schedule Contingency Regulations
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-4xl mb-4">
                Under Section 8 of the University Examination Statutes, scholars failing to achieve 75% physical attendance in any course are disqualified from sitting the terminal examination. Semester dates may be subject to minor administrative modifications by the Academic Council in accordance with provincial directives or weather contingencies in the Swat alpine region.
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold text-stone-300 flex-wrap">
                <span className="text-[#C8A96E] font-bold">Office of the Controller of Examinations</span>
                <span>·</span>
                <span>Directorate of Academics</span>
                <span>·</span>
                <Link href="/contact" className="underline hover:text-white transition-colors">
                  Contact Examinations Helpdesk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
