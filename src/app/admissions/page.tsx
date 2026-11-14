import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BadgeCheck, Banknote, CalendarCheck, ClipboardList, GraduationCap, Send, Users } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Admissions | University of Swat',
  description: 'Admissions criteria, application steps, deadlines and financial aid at the University of Swat.',
};

const steps = [
  {
    icon: <Send className="w-5 h-5" />,
    title: 'Apply Online',
    text: 'Complete the online application on the student portal and deposit the application fee.',
  },
  {
    icon: <ClipboardList className="w-5 h-5" />,
    title: 'Entry Test',
    text: 'Appear for the departmental entry test (or use valid HEC/AT results where applicable).',
  },
  {
    icon: <BadgeCheck className="w-5 h-5" />,
    title: 'Merit Lists',
    text: 'Provisional merit lists are published per department, followed by document verification.',
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: 'Enroll',
    text: 'Pay the fee, submit originals and complete orientation to begin your semester.',
  },
];

const dates = [
  { label: 'Online applications open', value: 'Oct 19, 2026' },
  { label: 'Applications close', value: 'Dec 10, 2026' },
  { label: 'Entry test', value: 'Dec 20, 2026' },
  { label: 'Merit lists', value: 'Dec 28, 2026' },
  { label: 'Classes begin (Spring 2027)', value: 'Feb 1, 2027' },
];

const aid = [
  { title: 'HEC Need-Based Scholarship', text: 'Full tuition for eligible, low-income students.' },
  { title: 'Ehsaas / BMIT Programme', text: 'Combined financial assistance for underprivileged students.' },
  { title: 'Merit Scholarships', text: 'Top performers of each entering cohort receive fee waivers.' },
  { title: 'University Fee Concessions', text: 'For orphans, persons with disabilities and remote-area students.' },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Admissions"
        description="Everything you need to join the University of Swat — criteria, steps, timings and financial aid."
      />

      <main className="py-14 lg:py-20 bg-[#F6F5F0]">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-12 space-y-14 lg:space-y-20">
          {/* Steps */}
          <section>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#14291D] font-bold mb-6">
              How to Apply
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="relative p-6 rounded-xl bg-white border border-stone-200/90 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-[0_16px_36px_-18px_rgba(21,59,39,0.25)]"
                >
                  <span className="absolute top-5 right-5 font-serif text-3xl font-bold text-stone-200">
                    {index + 1}
                  </span>
                  <span className="w-11 h-11 rounded-xl bg-[#153B27]/8 text-[#153B27] flex items-center justify-center mb-4">
                    {step.icon}
                  </span>
                  <h3 className="font-serif text-lg text-[#14291D] font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-stone-500 leading-[1.6]">{step.text}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Dates + Fees */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <section className="p-6 sm:p-8 rounded-xl bg-white border border-stone-200/90 shadow-xs">
              <h2 className="font-serif text-2xl text-[#14291D] font-bold mb-5 flex items-center gap-3">
                <CalendarCheck className="w-5 h-5 text-[#7F1D1D]" />
                Key Dates
              </h2>
              <ul className="divide-y divide-stone-100">
                {dates.map(d => (
                  <li key={d.label} className="flex items-center justify-between gap-4 py-3.5">
                    <span className="text-sm text-stone-600">{d.label}</span>
                    <span className="text-sm font-bold text-[#14291D]">{d.value}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="p-6 sm:p-8 rounded-xl bg-white border border-stone-200/90 shadow-xs">
              <h2 className="font-serif text-2xl text-[#14291D] font-bold mb-5 flex items-center gap-3">
                <Banknote className="w-5 h-5 text-[#7F1D1D]" />
                Fees & Aid
              </h2>
              <p className="text-sm text-stone-500 leading-[1.65] mb-5">
                Semester fees are set by the University finance committee. The application fee is
                PKR 1,500 for BS programmes and PKR 2,500 for graduate programmes.
              </p>
              <div className="space-y-2.5">
                {aid.map(a => (
                  <div key={a.title} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#153B27] mt-2 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-[#14291D]">{a.title}</p>
                      <p className="text-xs text-stone-500 mt-0.5">{a.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Support CTA */}
          <section className="p-6 sm:p-10 rounded-xl bg-gradient-to-b from-[#153B27] to-[#14291D] text-white">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex-1">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
                  Need help with your application?
                </h2>
                <p className="text-white/75 text-sm leading-[1.65] max-w-xl">
                  The Directorate of Admissions answers queries on working days, 09:00 – 16:00,
                  at admissions@uswat.edu.pk or +92 (946) 920800–803.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:admissions@uswat.edu.pk"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#153B27] text-sm font-bold hover:bg-stone-100 transition-colors"
                >
                  <Users className="w-4 h-4" />
                  Email Admissions
                </a>
                <Link
                  href="/portal"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/25 text-white text-sm font-bold hover:bg-white/10 transition-colors"
                >
                  Student portal
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
