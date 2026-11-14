import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Download, FileText, Shield, BookMarked, GraduationCap, Building2 } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Downloads & Official Documents | University of Swat',
  description: 'Download official statutes, research synopses guidelines, examination forms, and proformas from University of Swat.',
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
    description: 'Official statutory framework governing academic faculties, administration, service structure, and institutional powers.',
  },
  {
    title: 'Approved Uniform Format for MS / MPhil & PhD Synopses',
    category: 'Research & ASRB',
    format: 'PDF',
    size: '850 KB',
    url: 'https://uswat.edu.pk/approved-uniform-format-for-synopses/',
    description: 'Mandatory template and formatting guidelines for submitting research proposals to the Advanced Studies and Research Board.',
  },
  {
    title: 'Affiliation Rules & Guidelines for Public/Private Colleges',
    category: 'Affiliations',
    format: 'PDF',
    size: '1.4 MB',
    url: 'https://uswat.edu.pk/affiliation-rules/',
    description: 'Criteria, infrastructure standards, faculty qualifications, and application procedures for college affiliation with UOS.',
  },
  {
    title: 'Undergraduate Semester Regulations (BS 4-Year)',
    category: 'Academic Rules',
    format: 'PDF',
    size: '1.1 MB',
    url: 'https://uswat.edu.pk/rules/',
    description: 'Comprehensive guidelines on GPA calculation, probation, course repeat, attendance thresholds, and drop policies.',
  },
  {
    title: 'University Model Act (Khyber Pakhtunkhwa)',
    category: 'Statutory Regulations',
    format: 'PDF',
    size: '3.6 MB',
    url: 'https://uswat.edu.pk/university-model-act/',
    description: 'Khyber Pakhtunkhwa Universities Act 2012 (amended) governing provincial public universities.',
  },
  {
    title: 'Degree & Transcript Verification Proforma',
    category: 'Examinations',
    format: 'PDF',
    size: '320 KB',
    url: 'https://uswat.edu.pk/downloads/',
    description: 'Official application for employment or immigration verification of degrees and detailed marks certificates (DMC).',
  },
  {
    title: 'Final Clearance Proforma (Graduation & Library)',
    category: 'Student Services',
    format: 'PDF',
    size: '280 KB',
    url: 'https://uswat.edu.pk/downloads/',
    description: 'Multi-department clearance form required before issuance of final degree diplomas and security refunds.',
  },
  {
    title: 'KPEF Scholarship Application Form 2025–26',
    category: 'Financial Aid',
    format: 'PDF',
    size: '450 KB',
    url: 'https://uswat.edu.pk/downloads/',
    description: 'Application for Khyber Pakhtunkhwa Education Foundation scholarship for deserving undergraduate students.',
  },
];

export default function DownloadsPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Document Repository"
        title="Downloads &amp; Statutory Forms"
        subtitle="Access official statutes, academic regulations, research synopses guidelines, and administrative proformas."
        eyebrow="Download Center · University of Swat"
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20">
        
        {/* Back link */}
        <div className="mb-10">
          <Link
            href="/academics"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-[#153B27] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Academics Overview</span>
          </Link>
        </div>

        {/* Documents Table / Grid */}
        <div className="space-y-4">
          {officialDocuments.map((doc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:border-[#153B27]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-stone-100 text-[#7F1D1D] shrink-0 group-hover:bg-[#7F1D1D]/10 transition-colors">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                      {doc.category}
                    </span>
                    <span className="text-xs font-mono text-stone-400">
                      {doc.format} · {doc.size}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#153B27] transition-colors">
                    {doc.title}
                  </h3>
                  <p className="font-sans text-xs text-stone-600 mt-1 max-w-2xl leading-relaxed">
                    {doc.description}
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#153B27] text-white hover:bg-[#153B27]/90 text-xs font-semibold transition-colors shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Document</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
