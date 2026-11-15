import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, CheckCircle2, Download, FileText, GraduationCap, Scale, ShieldCheck } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'ASRB (Advanced Studies & Research Board) | University of Swat',
  description: 'Uniform synopsis format, PhD thesis defense regulations, and ASRB minutes at University of Swat.',
};

const asrbGuidelines = [
  { step: '1. Topic Approval & Supervisory Committee', detail: 'Scholars consult Departmental Graduate Committee (DGC) to nominate verified research supervisor and co-supervisor.' },
  { step: '2. Synopsis Defense & Scrutiny', detail: 'Presentation of research synopsis before Departmental Scrutiny Committee, addressing literature review, methodology, and ethical approvals.' },
  { step: '3. ASRB Board Submission & Uniform Format', detail: 'Submission of formal synopsis in strict compliance with the UOS Approved Uniform Format for Synopses for final approval by the Vice Chancellor / ASRB.' },
  { step: '4. Research Execution & Progress Reports', detail: 'Bi-annual progress reporting signed by supervisor and submitted to the Directorate of Advanced Studies.' },
  { step: '5. External Evaluation & Public Defense', detail: 'PhD dissertations are dispatched to international subject experts (USA, UK, Europe) followed by open public viva voce defense.' },
];

export default function AsrbPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Postgraduate Governance"
        title="Advanced Studies &amp; Research Board"
        subtitle="Statutory guidelines for MS, M.Phil, and PhD research synopses, dissertation evaluations, and doctoral defenses."
        eyebrow="ASRB · Directorate of Advanced Studies"
      />

      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-20">
        
        {/* Back link */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-[#153B27] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Research Overview</span>
          </Link>

          <a
            href="https://uswat.edu.pk/approved-uniform-format-for-synopses/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 text-xs font-semibold shadow-xs"
          >
            <Download className="w-4 h-4 text-[#7F1D1D]" />
            <span>Download Approved Uniform Synopsis Format</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-300 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-0.5 w-6 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">
                  Statutory Mandate
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
                Role of the Advanced Studies &amp; Research Board
              </h2>
              <p className="font-sans text-stone-700 text-base leading-relaxed mb-6">
                Under the University of Swat Statutes, the Advanced Studies and Research Board (ASRB) advises authorities on all matters connected with the promotion of advanced studies and research in the university. ASRB approves synopsis topics, supervises progress of MS/MPhil and PhD scholars, appoints external examiners, and evaluates thesis examiners’ reports.
              </p>
            </div>

            {/* Postgraduate Research Lifecycle */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#153B27] text-white border border-white/10 shadow-[0_24px_48px_-22px_rgba(12,25,18,0.5)]">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-0.5 w-6 bg-[#C8A96E]" />
                <span className="text-xs uppercase tracking-widest text-[#C8A96E] font-bold">
                  Doctoral &amp; MS Workflow
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Step-by-Step Thesis Approval Process
              </h3>

              <div className="space-y-4">
                {asrbGuidelines.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/[0.07] border border-white/[0.12]">
                    <h4 className="font-serif text-base font-bold text-white mb-1.5">
                      {item.step}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-300 shadow-xs">
              <h3 className="font-serif text-xl font-bold text-stone-900 pb-3 border-b border-stone-200 mb-4">
                ASRB Secretariat
              </h3>
              <div className="space-y-3 text-xs sm:text-[13px] text-stone-700">
                <p>
                  <strong>Chairperson:</strong> Prof. Dr. Husnul Amin (Vice Chancellor)
                </p>
                <p>
                  <strong>Secretary:</strong> Director of Advanced Studies &amp; Research
                </p>
                <p>
                  <strong>Office:</strong> Directorate of Advanced Studies, Charbagh Main Campus
                </p>
                <p>
                  <strong>Inquiries:</strong> asrb@uswat.edu.pk
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col gap-2">
                <a
                  href="https://uswat.edu.pk/approved-uniform-format-for-synopses/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#7F1D1D] text-white font-semibold text-xs text-center hover:bg-[#7F1D1D]/90 transition-colors shadow-xs"
                >
                  Download Synopsis Template
                </a>
                <Link
                  href="/academics/downloads"
                  className="w-full py-3 rounded-xl bg-stone-100 text-stone-700 font-semibold text-xs text-center hover:bg-stone-200 transition-colors"
                >
                  Statutes &amp; Academic Rules
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
