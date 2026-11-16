'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, Download, FileText, Search, ShieldCheck, X } from 'lucide-react';

export interface DocumentItem {
  id: string;
  title: string;
  category: string;
  format: string;
  size: string;
  url: string;
  description: string;
  targetAudience: string;
}

const CATEGORIES = [
  'All Documents',
  'Statutory Regulations',
  'Research & ASRB',
  'Academic Rules',
  'Examinations',
  'Student Services',
  'Financial Aid',
] as const;

const catPill = (category: string): string => {
  const t = category.toLowerCase();
  if (t.includes('statutory') || t.includes('academic rules')) return 'bg-[#153B27]/10 text-[#153B27]';
  if (t.includes('exam') || t.includes('research')) return 'bg-[#7F1D1D]/10 text-[#7F1D1D]';
  return 'bg-amber-900/10 text-amber-900';
};

interface DownloadsClientProps {
  documents: DocumentItem[];
}

export default function DownloadsClient({ documents }: DownloadsClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Documents');
  const [preview, setPreview] = useState<DocumentItem | null>(null);

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      const matchesCategory = selectedCategory === 'All Documents' || doc.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        doc.title.toLowerCase().includes(q) ||
        doc.description.toLowerCase().includes(q) ||
        doc.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [documents, selectedCategory, searchQuery]);

  return (
    <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-14 pb-16 sm:pb-28 relative z-10">
      {/* ─── Editorial stat strip (overlaps photographic hero) ─── */}
      <div className="-mt-10 sm:-mt-12 relative z-20 mb-8 sm:mb-12 lg:mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 rounded-2xl overflow-hidden border border-stone-200 shadow-xs">
          {[
            { value: String(documents.length).padStart(2, '0'), label: 'Official Documents', detail: 'Verified Statutory Files' },
            { value: 'PDF', label: 'Standard Format', detail: 'Certified Printable Copies' },
            { value: '2016', label: 'Statutes Enacted', detail: 'Khyber Pakhtunkhwa Act' },
            { value: '100%', label: 'Public Repository', detail: 'Accessible to Scholars' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-3.5 sm:p-6 text-center sm:text-left">
              <span className="block font-serif text-2xl sm:text-4xl font-bold text-[#153B27] tracking-tight">{stat.value}</span>
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-stone-700 font-bold mt-1 block">{stat.label}</span>
              <span className="text-[10px] sm:text-[11px] text-stone-500 mt-0.5 block">{stat.detail}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Navigation row ─── */}
      <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <Link href="/academics" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-600 hover:text-[#153B27] transition-colors min-h-[44px]">
          <ArrowLeft className="w-4 h-4 text-[#7F1D1D]" />
          <span>Return to Academics Overview</span>
        </Link>
        <p className="text-xs text-stone-500 max-w-md sm:text-right">
          Documents open directly from the official university servers. Always ensure you download the most recent approved revision.
        </p>
      </div>

      {/* Two-tier search & filter bar — matches /programs */}
      <div className="relative z-20 -mt-8 sm:-mt-10 mb-8 sm:mb-10">
        <div role="search" aria-label="Filter documents"
          className="bg-white border border-stone-300 border-t-4 border-t-[#7F1D1D] rounded-2xl p-3.5 sm:p-5 shadow-[0_24px_50px_-22px_rgba(12,25,18,0.45)]">
          <div className="relative min-w-0">
            <Search className="w-4 h-4 text-stone-600 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Search statutory forms, regulations, or templates — try "Statutes", "Synopsis", "KPEF"…'
              aria-label="Search documents"
              className="w-full pl-11 pr-10 h-12 rounded-xl bg-stone-50 border border-stone-300 text-[16px] sm:text-sm text-[#14291D] placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-[#153B27] focus:border-transparent focus:bg-white transition-all"
            />
            {searchQuery && (
              <button type="button" onClick={() => setSearchQuery('')} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-stone-600 hover:text-stone-800 rounded-full transition-colors">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 px-1">
          <span className="font-medium" aria-live="polite">
            Showing <strong className="text-[#153B27] font-bold tabular-nums">{filteredDocuments.length}</strong> of{' '}
            <strong className="text-stone-800">{documents.length}</strong> files
          </span>
          {(searchQuery || selectedCategory !== 'All Documents') && (
            <button type="button" onClick={() => { setSearchQuery(''); setSelectedCategory('All Documents'); }} className="text-[#7F1D1D] hover:text-[#661717] underline underline-offset-2 font-semibold transition-colors">
              Reset All Filters
            </button>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2.5" role="group" aria-label="Filter by category">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            const count = cat === 'All Documents' ? documents.length : documents.filter((d) => d.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-[11px] font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.985] ${
                  isActive ? 'bg-[#153B27] text-white shadow-sm' : 'bg-white border border-stone-200 text-stone-800 hover:border-[#153B27]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] font-bold tabular-nums px-1.5 py-0.5 rounded-md ${isActive ? 'bg-white/15 text-[#E5CD9B]' : 'bg-stone-100 text-stone-600'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── 2-column architectural document grid ─── */}
      {filteredDocuments.length === 0 ? (
        <div className="text-center py-16 px-6 bg-white rounded-2xl border border-stone-300 shadow-xs">
          <FileText className="w-12 h-12 text-stone-300 mx-auto mb-3" />
          <h3 className="font-serif text-xl font-bold text-stone-800 mb-1">No documents matched your search</h3>
          <p className="text-xs text-stone-600 max-w-md mx-auto mb-5">
            We couldn&apos;t find any forms or statutes matching &ldquo;{searchQuery}&rdquo; in the &ldquo;{selectedCategory}&rdquo; category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All Documents');
            }}
            className="px-4 py-2 rounded-xl bg-[#153B27] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0F2D1E] transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5" role="list" aria-label="Official downloadable documents">
          {filteredDocuments.map((doc, idx) => (
            <article
              key={doc.id}
              role="listitem"
              className="bg-white border border-stone-200 border-t-[3px] border-t-[#153B27] hover:border-[#7F1D1D] hover:border-t-[#7F1D1D] rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-md font-bold text-[10px] uppercase tracking-wider ${catPill(doc.category)}`}>
                    {doc.category}
                  </span>
                  <span className="text-xs font-medium text-stone-500">{doc.format} • {doc.size}</span>
                </div>

                <div className="my-4">
                  <h2 className="font-serif font-bold text-lg text-stone-900 leading-snug">
                    {String(idx + 1).padStart(2, '0')}. {doc.title}
                  </h2>
                  <p className="text-sm text-stone-600 mt-1.5 leading-relaxed">{doc.description}</p>
                  <p className="text-xs text-stone-500 mt-2">Target: {doc.targetAudience}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setPreview(doc)}
                  className="text-xs font-semibold text-stone-700 hover:text-[#7F1D1D] transition-colors min-h-[44px] flex items-center -my-2"
                >
                  Preview Proforma
                </button>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Download ${doc.title}`}
                  className="inline-flex items-center gap-1.5 bg-[#153B27] hover:bg-[#0F291B] text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors min-h-[44px]"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download PDF ↓
                </a>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* ─── Upgrade attestation banner ─── */}
      <div className="mt-12 p-5 sm:p-8 rounded-2xl bg-[#153B27] border-l-4 border-l-[#7F1D1D] text-white flex flex-col md:flex-row items-start gap-5 shadow-lg">
        <div className="w-12 h-12 rounded-xl bg-white/10 text-[#C8A96E] border border-white/15 flex items-center justify-center shrink-0">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold text-white mb-1.5">Document Attestation &amp; Statutory Authenticity</h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-3">
            All forms and regulations hosted on this repository represent approved statutes of the University of Swat. If you require verified physical stamp copies, degree attestation, or equivalence certifications, please submit your request along with original credentials to the Controller of Examinations or Registrar&apos;s Office at the Charbagh Main Campus.
          </p>
          <div className="flex items-center gap-4 text-xs font-semibold text-[#C8A96E] flex-wrap">
            <Link href="/contact" className="hover:text-white transition-colors underline">Registrar Office Helpdesk</Link>
            <span>·</span>
            <Link href="/academics" className="hover:text-white transition-colors underline">Academics Overview</Link>
          </div>
        </div>
      </div>

      {/* ─── Preview modal ─── */}
      {preview && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center p-4 sm:p-8">
          <div className="absolute inset-0 bg-[#0C1912]/70 backdrop-blur-[3px]" onClick={() => setPreview(null)} />
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 sm:p-8 mt-6">
            <div className="flex items-center justify-between gap-4 mb-5">
              <span className={`inline-flex items-center px-3 py-1 rounded-md font-bold text-[10px] uppercase tracking-wider ${catPill(preview.category)}`}>
                {preview.category}
              </span>
              <button type="button" onClick={() => setPreview(null)} aria-label="Close preview" className="p-2 rounded-full hover:bg-stone-100 text-stone-500">
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="font-serif text-2xl font-bold text-stone-900 leading-snug">{preview.title}</h3>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-4 border-y border-stone-200 py-4 text-xs">
              <div><span className="block text-stone-500 uppercase tracking-wider font-bold">Format</span><strong className="text-stone-800">{preview.format}</strong></div>
              <div><span className="block text-stone-500 uppercase tracking-wider font-bold">Size</span><strong className="text-stone-800">{preview.size}</strong></div>
              <div className="col-span-2"><span className="block text-stone-500 uppercase tracking-wider font-bold">Target</span><strong className="text-stone-800">{preview.targetAudience}</strong></div>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed mt-4">{preview.description}</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#7F1D1D] hover:bg-[#661717] text-white text-xs font-bold uppercase tracking-[0.1em] transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Save as PDF / Print
              </button>
              <a
                href={preview.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-stone-300 text-stone-700 hover:border-[#153B27] hover:text-[#153B27] text-xs font-bold uppercase tracking-[0.1em] transition-colors"
              >
                Open Original
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
