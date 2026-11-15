import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Download, FileText, ShieldCheck } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Downloads & Official Documents | University of Swat',
  description:
    'Download official statutes, academic regulations, research synopsis formats, and administrative proformas from the University of Swat.',
};

interface DocumentItem {
  title: string;
  category: string;
  format: string;
  size: string;
  url: string;
  description: string;
}

const officialDocuments: DocumentItem[] = [
  {
    title: 'University of Swat Statutes 2016 (Complete)',
    category: 'Statutory Regulations',
    format: 'PDF',
    size: '4.2 MB',
    url: 'https://uswat.edu.pk/statutes-2016/',
    description:
      'Official statutory framework governing academic faculties, administration, service structure, and institutional powers.',
  },
  {
    title: 'Approved Uniform Format for MS / MPhil & PhD Synopses',
    category: 'Research & ASRB',
    format: 'PDF',
    size: '850 KB',
    url: 'https://uswat.edu.pk/approved-uniform-format-for-synopses/',
    description:
      'Mandatory template and formatting guidelines for submitting research proposals to the Advanced Studies and Research Board.',
  },
  {
    title: 'Affiliation Rules & Guidelines for Public/Private Colleges',
    category: 'Affiliations',
    format: 'PDF',
    size: '1.4 MB',
    url: 'https://uswat.edu.pk/affiliation-rules/',
    description:
      'Criteria, infrastructure standards, faculty qualifications, and application procedures for college affiliation with the university.',
  },
  {
    title: 'Undergraduate Semester Regulations (BS 4-Year)',
    category: 'Academic Rules',
    format: 'PDF',
    size: '1.1 MB',
    url: 'https://uswat.edu.pk/rules/',
    description:
      'Guidelines on GPA calculation, probation, course repeat, attendance thresholds, and academic progression policies.',
  },
  {
    title: 'University Model Act (Khyber Pakhtunkhwa)',
    category: 'Statutory Regulations',
    format: 'PDF',
    size: '3.6 MB',
    url: 'https://uswat.edu.pk/university-model-act/',
    description:
      'Khyber Pakhtunkhwa Universities Act governing provincial public sector universities and statutory authorities.',
  },
  {
    title: 'Degree & Transcript Verification Proforma',
    category: 'Examinations',
    format: 'PDF',
    size: '320 KB',
    url: 'https://uswat.edu.pk/downloads/',
    description:
      'Application for official verification of degrees and detailed marks certificates for employment or immigration purposes.',
  },
  {
    title: 'Final Clearance Proforma (Graduation & Library)',
    category: 'Student Services',
    format: 'PDF',
    size: '280 KB',
    url: 'https://uswat.edu.pk/downloads/',
    description:
      'Multi-department clearance form required before issuance of final degree diplomas and release of security refunds.',
  },
  {
    title: 'KPEF Scholarship Application Form 2025–26',
    category: 'Financial Aid',
    format: 'PDF',
    size: '450 KB',
    url: 'https://uswat.edu.pk/downloads/',
    description:
      'Application for Khyber Pakhtunkhwa Education Foundation scholarship support for eligible undergraduate students.',
  },
];

export default function DownloadsPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen text-[#14291D]">
      <PageHeader
        tag="Document Repository"
        eyebrow="Download Center · University of Swat"
        title="Downloads & Statutory Forms"
        subtitle="Access official statutes, academic regulations, research synopsis formats, and administrative proformas maintained by the University of Swat."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academics' },
          { label: 'Downloads & Forms' },
        ]}
      >
        <dl className="flex flex-wrap items-stretch border-t border-white/15 pt-6 sm:pt-7 gap-y-4">
          {[
            { value: String(officialDocuments.length).padStart(2, '0'), label: 'Official Documents' },
            { value: 'PDF', label: 'Primary Format' },
            { value: '2026–27', label: 'Academic Cycle' },
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <Link
            href="/academics"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500 hover:text-[#153B27] transition-colors min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Academics</span>
          </Link>
          <p className="text-xs text-stone-500 max-w-md sm:text-right">
            Documents open on the official university website. Verify the latest revision before submission.
          </p>
        </div>

        <div className="space-y-4" role="list" aria-label="Official downloadable documents">
          {officialDocuments.map((doc, idx) => (
            <article
              key={doc.title}
              role="listitem"
              className="group p-5 sm:p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:border-[#153B27]/35 hover:-translate-y-[2px] hover:shadow-[0_24px_44px_-24px_rgba(12,25,18,0.35)] transition-all duration-200 ease-out"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 lg:gap-8">
                <div className="flex items-start gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 text-[#153B27] flex items-center justify-center shrink-0 group-hover:bg-[#153B27] group-hover:text-white transition-colors">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-serif text-sm font-bold text-stone-300 tabular-nums" aria-hidden="true">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
                        {doc.category}
                      </span>
                      <span className="text-[11px] font-mono text-stone-400 tabular-nums">
                        {doc.format} · {doc.size}
                      </span>
                    </div>
                    <h2 className="font-serif text-xl sm:text-[1.35rem] font-bold text-[#14291D] group-hover:text-[#153B27] transition-colors leading-snug tracking-[-0.01em]">
                      {doc.title}
                    </h2>
                    <p className="font-sans text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed max-w-3xl">
                      {doc.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 lg:pl-4">
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#153B27] text-white hover:bg-[#0F2D1E] text-[11px] font-bold uppercase tracking-[0.12em] transition-all active:scale-[0.985] shadow-[0_12px_24px_-14px_rgba(21,59,39,0.6)]"
                    aria-label={`Download ${doc.title}`}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-white border border-stone-200/90 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-[#7F1D1D]/10 text-[#7F1D1D] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-[#14291D] mb-1">Document authenticity</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              For certified copies, attestation, or the most recent statutory revisions, contact the Registrar’s Office or the relevant academic department at the University of Swat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
