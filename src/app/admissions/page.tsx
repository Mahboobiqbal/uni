import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import AdmissionsHub from '@/components/admissions/AdmissionsHub';

export const metadata: Metadata = {
  title: 'Admissions 2026–2027 | University of Swat',
  description:
    'Admissions criteria, application steps, fee schedule, merit lists and scholarships at the University of Swat.',
};

export default function AdmissionsPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen text-[#14291D]">
      <PageHeader
        tag="Admissions 2026–2027"
        eyebrow="Admissions & Financial Aid"
        title="Join the University of Swat"
        description="Apply for undergraduate, master's, and doctoral programs at a chartered public university in the heart of Swat Valley."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admissions' },
        ]}
        backgroundImage="/images/campus/charbagh-campus.jpg"
      >
        <dl className="grid grid-cols-2 sm:flex sm:flex-wrap items-stretch border-t border-white/15 pt-6 sm:pt-7 gap-y-5 sm:gap-y-4">
          {[
            { value: '04', label: 'Application Steps' },
            { value: '05', label: 'Faculties' },
            { value: '73', label: 'Degree Programs' },
            { value: 'Fall 2026', label: 'Admission Cycle' },
          ].map((fact, idx, arr) => (
            <div
              key={fact.label}
              className={`flex flex-col justify-center pr-4 sm:pr-8 sm:mr-8 ${
                idx % 2 === 0 ? 'border-r sm:border-r border-white/15' : idx < arr.length - 1 ? 'sm:border-r border-white/15' : ''
              }`}
            >
              <dt className="order-2 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-white/55 font-semibold mt-1.5">
                {fact.label}
              </dt>
              <dd className="order-1 font-serif text-2xl sm:text-3xl lg:text-4xl text-[#C8A96E] font-bold leading-none tabular-nums">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      <AdmissionsHub />
    </div>
  );
}
