import type { Metadata } from 'next';
import { Suspense } from 'react';
import PageHeader from '@/components/layout/PageHeader';
import AdministrationExplorer from '@/components/administration/AdministrationExplorer';

export const metadata: Metadata = {
  title: 'Administration | University of Swat',
  description: 'University offices, directorates, library, alumni, media, and student support at the University of Swat.',
};

export default function AdministrationOverviewPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen text-[#14291D]">
      <PageHeader
        tag="Administration"
        title="Administration & University Services"
        description="The offices and teams that run the University of Swat, and the services they offer."
        eyebrow="University Administration"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Administration' },
        ]}
        backgroundImage="/images/campus/charbagh-campus.jpg"
      />

      <Suspense fallback={null}>
        <AdministrationExplorer />
      </Suspense>
    </div>
  );
}
