'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Download,
  FileCheck2,
  FileText,
  Filter,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';

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

interface DownloadsClientProps {
  documents: DocumentItem[];
}

export default function DownloadsClient({ documents }: DownloadsClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Documents');

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      const matchesCategory =
        selectedCategory === 'All Documents' || doc.category === selectedCategory;
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
    <div className="max-w-[1360px] mx-auto px-6 lg:px-12 pb-20 sm:pb-28 relative z-10">
      {/* ─── Editorial Year-at-a-Glance Strip (replaces overlapping crimson stat bar) ─── */}
      <div className="-mt-10 sm:-mt-12 relative z-20 mb-12 lg:mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 rounded-2xl overflow-hidden border border-stone-200 shadow-xs">
          {[
            { value: String(documents.length).padStart(2, '0'), label: 'Official Documents', detail: 'Verified Statutory Files' },
            { value: 'PDF', label: 'Standard Format', detail: 'Certified Printable Copies' },
            { value: '2016', label: 'Statutes Enacted', detail: 'Khyber Pakhtunkhwa Act' },
            { value: '100%', label: 'Public Repository', detail: 'Accessible to Scholars' },
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

      {/* ─── Navigation & Search Bar ─── */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link
          href="/academics"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-600 hover:text-[#153B27] transition-colors min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4 text-[#7F1D1D]" />
          <span>Return to Academics Overview</span>
        </Link>

        <p className="text-xs text-stone-500 max-w-md sm:text-right">
          Documents open directly from the official university servers. Always ensure you download the most recent approved revision.
        </p>
      </div>

      {/* ─── Interactive Filter & Search Controls ─── */}
      <div className="bg-white rounded-2xl border border-stone-300 p-4 sm:p-5 shadow-xs mb-8 space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {/* Search input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, proforma name, regulation, or keyword..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm text-stone-800 placeholder-stone-500 focus:outline-none focus:border-[#153B27] focus:ring-1 focus:ring-[#153B27] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-stone-500 hover:text-stone-700"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="text-xs text-stone-600 shrink-0 font-medium px-2">
            Showing <strong className="text-stone-800">{filteredDocuments.length}</strong> of{' '}
            <strong className="text-stone-800">{documents.length}</strong> files
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 mr-1 shrink-0 flex items-center gap-1">
            <Filter className="w-3 h-3" />
            Filter:
          </span>
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 active:scale-[0.98] ${
                  isActive
                    ? 'bg-[#153B27] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200/80 border border-transparent'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── Document List ─── */}
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
        <div className="space-y-4" role="list" aria-label="Official downloadable documents">
          {filteredDocuments.map((doc, idx) => (
            <article
              key={doc.id}
              role="listitem"
              className="group p-5 sm:p-6 rounded-2xl bg-white border border-stone-300 shadow-xs hover:border-[#153B27]/40 hover:-translate-y-[2px] hover:shadow-[0_24px_44px_-24px_rgba(21,59,39,0.35)] transition-all duration-200 ease-out"
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
                      <span className="text-[11px] font-mono text-stone-500 tabular-nums">
                        {doc.format} · {doc.size}
                      </span>
                      <span className="hidden sm:inline-block text-[10px] text-stone-500">
                        Target: {doc.targetAudience}
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
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#153B27] text-white hover:bg-[#0F2D1E] text-xs font-bold uppercase tracking-[0.12em] transition-all active:scale-[0.985] shadow-[0_12px_24px_-14px_rgba(21,59,39,0.6)]"
                    aria-label={`Download ${doc.title}`}
                  >
                    <Download className="w-4 h-4 text-[#C8A96E]" />
                    <span>Download File</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* ─── Statutory Attestation & Authentication Box ─── */}
      <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#153B27] text-white border border-white/10 shadow-[0_24px_48px_-22px_rgba(12,25,18,0.5)] flex flex-col md:flex-row items-start gap-5">
        <div className="w-12 h-12 rounded-xl bg-white/10 text-[#C8A96E] border border-white/15 flex items-center justify-center shrink-0">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold text-white mb-1.5">
            Document Attestation &amp; Statutory Authenticity
          </h3>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-3">
            All forms and regulations hosted on this repository represent approved statutes of the University of Swat. If you require verified physical stamp copies, degree attestation, or equivalence certifications, please submit your request along with original credentials to the Controller of Examinations or Registrar&apos;s Office at the Charbagh Main Campus.
          </p>
          <div className="flex items-center gap-4 text-xs font-semibold text-[#C8A96E] flex-wrap">
            <Link href="/contact" className="hover:text-white transition-colors underline">
              Registrar Office Helpdesk
            </Link>
            <span>·</span>
            <Link href="/academics" className="hover:text-white transition-colors underline">
              Academics Overview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
