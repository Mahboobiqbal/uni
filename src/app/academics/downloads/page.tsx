import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import DownloadsClient, { type DocumentItem } from '@/components/academics/DownloadsClient';

export const metadata: Metadata = {
  title: 'Official Downloads, Forms & Statutes | University of Swat',
  description:
    'Download official statutes 2016, academic regulations, research synopsis templates, degree clearance forms, and affiliation rules from the University of Swat.',
};

const officialDocuments: DocumentItem[] = [
  {
    id: 'statutes-2016',
    title: 'University of Swat Statutes 2016 (Complete Edition)',
    category: 'Statutory Regulations',
    format: 'PDF',
    size: '4.2 MB',
    url: 'https://uswat.edu.pk/statutes-2016/',
    description:
      'Official statutory framework governing academic faculties, administration, service structure, and institutional powers.',
    targetAudience: 'Faculty, Administration & Scholars',
  },
  {
    id: 'asrb-synopsis-format',
    title: 'Approved Uniform Format for MS / MPhil & PhD Synopses',
    category: 'Research & ASRB',
    format: 'PDF',
    size: '850 KB',
    url: 'https://uswat.edu.pk/approved-uniform-format-for-synopses/',
    description:
      'Mandatory template, referencing standard, and formatting guidelines for submitting research proposals to the Advanced Studies and Research Board.',
    targetAudience: 'Postgraduate & Doctoral Scholars',
  },
  {
    id: 'affiliation-rules',
    title: 'Affiliation Rules & Guidelines for Public/Private Colleges',
    category: 'Statutory Regulations',
    format: 'PDF',
    size: '1.4 MB',
    url: 'https://uswat.edu.pk/affiliation-rules/',
    description:
      'Criteria, infrastructure standards, faculty qualifications, and inspection application procedures for college affiliation with the university.',
    targetAudience: 'College Principals & Administrators',
  },
  {
    id: 'undergraduate-semester-rules',
    title: 'Undergraduate Semester Regulations (BS 4-Year Framework)',
    category: 'Academic Rules',
    format: 'PDF',
    size: '1.1 MB',
    url: 'https://uswat.edu.pk/rules/',
    description:
      'Statutory rules on GPA calculation, probation thresholds, course repeat policies, attendance criteria, and degree completion guidelines.',
    targetAudience: 'All Undergraduate Students & Faculty',
  },
  {
    id: 'kp-university-model-act',
    title: 'Khyber Pakhtunkhwa Universities Model Act (Amended)',
    category: 'Statutory Regulations',
    format: 'PDF',
    size: '3.6 MB',
    url: 'https://uswat.edu.pk/university-model-act/',
    description:
      'Provincial legislation governing governance structures, statutory authorities, and the university syndicate.',
    targetAudience: 'Institutional Governance Bodies',
  },
  {
    id: 'degree-verification-proforma',
    title: 'Degree & Transcript Verification Proforma',
    category: 'Examinations',
    format: 'PDF',
    size: '320 KB',
    url: 'https://uswat.edu.pk/downloads/',
    description:
      'Application for official verification of degrees, DMC transcripts, and bonafide student certificates for employment or foreign study.',
    targetAudience: 'Alumni & Graduating Students',
  },
  {
    id: 'final-clearance-proforma',
    title: 'Final Clearance Proforma (Graduation, Hostel & Library)',
    category: 'Student Services',
    format: 'PDF',
    size: '280 KB',
    url: 'https://uswat.edu.pk/downloads/',
    description:
      'Multi-department clearance form required prior to the issuance of final degree diplomas and release of security deposits.',
    targetAudience: 'Graduating Students',
  },
  {
    id: 'kpef-scholarship-form',
    title: 'KPEF Need-Based Scholarship Application Form 2026–2027',
    category: 'Financial Aid',
    format: 'PDF',
    size: '450 KB',
    url: 'https://uswat.edu.pk/downloads/',
    description:
      'Application form for Khyber Pakhtunkhwa Education Foundation financial assistance for deserving undergraduate scholars.',
    targetAudience: 'Deserving & Talented Scholars',
  },
];

export default function DownloadsPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen text-[#14291D] relative">
      {/* ─── Ambient Glow ─── */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(21,59,39,0.06),rgba(255,255,255,0))] pointer-events-none"
      />

      {/* ─── 1. Deep Forest Green (#153B27) Page Header ─── */}
      <PageHeader
        tag="OFFICIAL REPOSITORY & STATUTES"
        eyebrow="DOWNLOAD CENTER · UNIVERSITY OF SWAT"
        title="Downloads & Statutory Forms"
        subtitle="Access official statutes 2016, academic regulations, research synopsis templates, degree verification forms, and administrative proformas."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academics' },
          { label: 'Downloads & Forms' },
        ]}
        backgroundImage="/images/campus/charbagh-campus.jpg"
      />

      {/* ─── 2. Interactive Client Explorer ─── */}
      <DownloadsClient documents={officialDocuments} />
    </div>
  );
}
