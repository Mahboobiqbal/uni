import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import AffiliatedCollegesClient from '@/components/academics/AffiliatedCollegesClient';

export const metadata: Metadata = {
  title: 'Affiliated Colleges | University of Swat',
  description: 'Public and private sector affiliated colleges in Swat, Shangla, and Malakand division regulated by University of Swat.',
};

export default function AffiliatedCollegesPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Academic Affiliations"
        title="Affiliated Colleges Directory"
        description="Regulating academic quality, semester curriculum, and terminal examinations across premier public and private colleges in Swat and Shangla."
        eyebrow="Academic Regulatory Oversight · University of Swat"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academics' },
          { label: 'Affiliated Colleges' },
        ]}
        backgroundImage="/images/campus/charbagh-campus.jpg"
      >
        <dl className="flex flex-wrap items-stretch border-t border-white/15 pt-6 sm:pt-7 gap-y-4">
          {[
            { value: '14', label: 'Affiliated Colleges' },
            { value: '09', label: 'Public Sector' },
            { value: '05', label: 'Private Sector' },
            { value: '02', label: 'Districts' },
          ].map((fact, idx, arr) => (
            <div
              key={fact.label}
              className={`flex flex-col justify-center pr-6 mr-6 sm:pr-8 sm:mr-8 ${idx < arr.length - 1 ? 'border-r border-white/15' : ''}`}
            >
              <dt className="order-2 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-white/55 font-semibold mt-1.5">
                {fact.label}
              </dt>
              <dd className="order-1 font-serif text-2xl sm:text-3xl lg:text-4xl text-[#D4B87A] font-bold leading-none tabular-nums">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      <AffiliatedCollegesClient />
    </div>
  );
}
