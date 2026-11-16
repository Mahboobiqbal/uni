'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MonitorPlay,
  Phone,
  Search,
  ShieldCheck,
  X,
} from 'lucide-react';
import { adminPages, type AdminPage, type AdminWing } from '@/data/administration';

/* ─────────────────────────────────────────────────────────────
 * Types & constants
 * ───────────────────────────────────────────────────────────── */

type CategoryId = 'overview' | AdminPage['slug'];

const WING_FILTERS: { id: AdminWing | 'all'; label: string }[] = [
  { id: 'all', label: 'All Wings' },
  { id: 'statutory', label: 'Statutory Offices' },
  { id: 'directorates', label: 'Directorates' },
  { id: 'students', label: 'Student Services' },
];

const PILLS: { id: CategoryId; label: string; count: number }[] = [
  { id: 'overview', label: 'Overview', count: adminPages.length },
  ...adminPages.map((p) => ({ id: p.slug as CategoryId, label: p.shortTitle, count: p.highlights.length })),
];

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'] as const;

/* ─────────────────────────────────────────────────────────────
 * Search helpers
 * ───────────────────────────────────────────────────────────── */

const haystack = (p: AdminPage): string =>
  [
    p.title,
    p.summary,
    p.description,
    p.eyebrow,
    ...p.highlights.flatMap((h) => [h.title, h.text]),
    ...p.staff.flatMap((s) => [s.name, s.role, s.email ?? '']),
    ...p.contact.flatMap((c) => [c.label, c.value]),
  ]
    .join(' ')
    .toLowerCase();

const matches = (p: AdminPage, q: string): boolean => {
  if (!q) return true;
  return haystack(p).includes(q);
};

/* ─────────────────────────────────────────────────────────────
 * Shared editorial primitives
 * ───────────────────────────────────────────────────────────── */

function SectionHeader({ eyebrow, title, count, tone = 'green' }: { eyebrow: string; title: string; count?: string; tone?: 'green' | 'crimson' }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 border-b border-stone-300 pb-4 mb-6">
      <div>
        <span className={`block text-xs font-bold uppercase tracking-widest mb-1 ${tone === 'crimson' ? 'text-[#7F1D1D]' : 'text-[#153B27]'}`}>
          {eyebrow}
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D] tracking-[-0.02em]">{title}</h2>
      </div>
      {count && (
        <span className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest ${tone === 'crimson' ? 'bg-[#7F1D1D] text-white' : 'bg-[#153B27] text-[#C8A96E]'}`}>
          {count}
        </span>
      )}
    </div>
  );
}

function Monogram({ name, size = 'lg' }: { name: string; size?: 'sm' | 'lg' }) {
  const initials = name
    .replace(/^(Prof\.|Dr\.|Mr\.|Ms\.|Mrs\.)\s*/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
  return (
    <div className={`rounded-full bg-[#153B27] text-white flex items-center justify-center font-serif font-bold ring-2 ring-[#C8A96E]/40 ${size === 'sm' ? 'w-9 h-9 text-sm' : 'w-14 h-14 text-lg'}`}>
      {initials}
    </div>
  );
}

function ContactLine({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-5 h-5 text-[#C8A96E] shrink-0 mt-0.5" />
      <div>
        <p className="text-xs text-white/60 uppercase tracking-wider font-bold">{label}</p>
        <p className="text-sm text-white mt-1">{value}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 1. Overview — Executive directory & quick-switch grid
 * ───────────────────────────────────────────────────────────── */

function OverviewTab({ units, onSelect }: { units: AdminPage[]; onSelect: (slug: AdminPage['slug']) => void }) {
  return (
    <div className="space-y-12">
      {/* Top asymmetric split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <span className="block text-xs font-bold uppercase tracking-widest text-[#153B27] mb-2">How we are organized</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D] tracking-[-0.02em] mb-4">
            One university, three campuses, seven wings
          </h2>
          <p className="font-sans text-stone-600 text-base leading-[1.75] max-w-2xl">
            The University of Swat is governed from the Administration Block at Charbagh Main Campus, with
            dedicated services on the Women Sub-Campus and the Shangla Sub-Campus. Day-to-day operations are
            run by seven statutory offices, directorates, and student-service units — each with a clear role
            and a named contact.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Charbagh Main Campus', value: 'HQ & Administration' },
              { label: 'Women Sub-Campus', value: 'Female programs' },
              { label: 'Shangla Sub-Campus', value: 'Regional programs' },
            ].map((c) => (
              <div key={c.label} className="bg-white border border-stone-200 border-t-[3px] border-t-[#153B27] rounded-xl p-4">
                <p className="font-serif font-bold text-stone-900 text-sm">{c.label}</p>
                <p className="text-xs text-stone-500 mt-1">{c.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-[#153B27] text-white border-t-4 border-t-[#C8A96E] rounded-2xl p-6 sm:p-8">
            <h3 className="font-serif text-xl sm:text-2xl font-bold mb-5">Central Administration Desk</h3>
            <div className="space-y-4">
              <ContactLine icon={Phone} label="Telephone" value="0946-730510" />
              <ContactLine icon={Mail} label="Email" value="info@uswat.edu.pk" />
              <ContactLine icon={Clock} label="Office hours" value="Mon – Fri · 08:30 AM – 04:30 PM" />
              <ContactLine icon={MapPin} label="Location" value="Administration Block, Charbagh Main Campus" />
            </div>
          </div>
        </div>
      </div>

      {/* 7-wing navigation matrix */}
      <div>
        <SectionHeader eyebrow="University wings" title="Find the office you need" count={`${units.length} wings`} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {units.map((p, idx) => {
            const Icon = p.icon;
            return (
              <article
                key={p.slug}
                className="group bg-white border border-stone-200 border-t-[3px] border-t-[#153B27] hover:border-[#7F1D1D] hover:border-t-[#7F1D1D] rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#153B27]/10 text-[#153B27] flex items-center justify-center group-hover:bg-[#7F1D1D]/10 group-hover:text-[#7F1D1D] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-3xl font-bold text-[#C8A96E] tabular-nums">{ROMAN[idx]}</span>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7F1D1D] mt-4">{p.eyebrow}</p>
                  <h3 className="font-serif text-lg font-bold text-stone-900 mt-1 leading-snug group-hover:text-[#7F1D1D] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">{p.summary}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
                  <span className="text-[11px] font-bold text-[#153B27] uppercase tracking-wider">
                    {p.highlights.length} {p.highlights.length === 1 ? 'Function' : 'Functions'}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelect(p.slug)}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#7F1D1D] hover:text-[#661717] transition-colors min-h-[36px]"
                  >
                    Open Wing
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 2. Offices — Numbered statutory ledger + leadership roster
 * ───────────────────────────────────────────────────────────── */

const OFFICE_FLOORS: Record<string, string> = {
  'Office of the Vice Chancellor': 'Admin Block • 1st Floor',
  'Office of the Registrar': 'Admin Block • Ground Floor',
  'Office of the Treasurer': 'Admin Block • Ground Floor',
  'Office of the Controller of Examinations': 'Admin Block • 1st Floor',
  'Office of the Provost': 'Admin Block • Ground Floor',
  'Quality Enhancement Cell (QEC)': 'Admin Block • 2nd Floor',
  'University Advancement & Financial Aid Office (UAFAO)': 'Admin Block • 2nd Floor',
};

const OFFICE_EMAILS: Record<string, string> = {
  'Office of the Vice Chancellor': 'vc@uswat.edu.pk',
  'Office of the Registrar': 'registrar@uswat.edu.pk',
  'Office of the Treasurer': 'treasurer@uswat.edu.pk',
  'Office of the Controller of Examinations': 'controller@uswat.edu.pk',
  'Office of the Provost': 'provost@uswat.edu.pk',
  'Quality Enhancement Cell (QEC)': 'qec@uswat.edu.pk',
  'University Advancement & Financial Aid Office (UAFAO)': 'uafao@uswat.edu.pk',
};

function OfficesTab({ page }: { page: AdminPage }) {
  return (
    <div className="space-y-12">
      {/* Numbered statutory ledger */}
      <div>
        <SectionHeader eyebrow="Statutory offices" title="The numbered ledger of governance" count={`${page.highlights.length} offices`} tone="crimson" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {page.highlights.map((h, idx) => (
            <article
              key={h.title}
              className="group bg-white border border-stone-200 border-t-[3px] border-t-[#7F1D1D] hover:border-[#153B27] hover:border-t-[#153B27] rounded-xl p-5 sm:p-6 flex flex-col transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-serif text-3xl font-bold text-[#7F1D1D] tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 text-right">
                  {OFFICE_FLOORS[h.title] ?? 'Admin Block'}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900 mt-3 leading-snug group-hover:text-[#153B27] transition-colors">
                {h.title}
              </h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed flex-1 line-clamp-2">{h.text}</p>
              <div className="mt-5 pt-3 border-t border-stone-100">
                <a
                  href={`mailto:${OFFICE_EMAILS[h.title] ?? page.contact[0]?.value ?? 'info@uswat.edu.pk'}`}
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#153B27] hover:text-[#7F1D1D] transition-colors min-h-[32px]"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {OFFICE_EMAILS[h.title] ?? page.contact[0]?.value ?? 'info@uswat.edu.pk'}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Leadership strip */}
      <div>
        <SectionHeader eyebrow="University officers" title="The officers who lead these offices" count={`${page.staff.length} officers`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {page.staff.map((person) => (
            <article key={person.name} className="bg-white border border-stone-200 border-t-[3px] border-t-[#153B27] rounded-xl p-5 flex flex-col items-center text-center transition-all hover:shadow-md">
              <Monogram name={person.name} />
              <h4 className="font-serif font-bold text-stone-900 text-base leading-snug mt-3">{person.name}</h4>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7F1D1D] mt-1.5">{person.role}</p>
              {person.email && (
                <a href={`mailto:${person.email}`} className="mt-2.5 inline-flex items-center gap-1 text-[11px] text-stone-500 hover:text-[#153B27] transition-colors">
                  <Mail className="w-3 h-3" />
                  {person.email}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 3. Directorates — Operational mandate banner + split cards
 * ───────────────────────────────────────────────────────────── */

const DIRECTORATE_HEADS: Record<string, string> = {
  'Directorate of Administration': 'Prof. Dr. Hazrat Bilal',
  'Directorate of Information Technology': 'Director, IT',
  'Directorate of Works': 'Director, Works',
  'Directorate of Research & Technological Development (ORIC)': 'Dr. Anwar Hussain',
  'Directorate of Advanced Studies & Research (DASR)': 'Director, DASR',
  'Directorate of Planning & Development': 'Director, Planning',
};

function DirectoratesTab({ page }: { page: AdminPage }) {
  return (
    <div className="space-y-12">
      {/* Full-width operational banner */}
      <div className="bg-[#153B27] text-white rounded-2xl border-l-4 border-l-[#7F1D1D] p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8">
            <span className="block text-xs font-bold uppercase tracking-widest text-[#C8A96E] mb-2">Operational mandate</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-[-0.02em]">
              The teams that keep the campus running
            </h2>
            <p className="font-sans text-white/75 text-sm sm:text-base leading-relaxed mt-3 max-w-2xl">
              Six directorates manage the university’s day-to-day work — administration, information
              technology, buildings and works, research and commercialization, postgraduate studies, and
              campus planning. Each is led by a director who reports into the Registrar’s office.
            </p>
          </div>
          <div className="lg:col-span-4 bg-white/5 border border-white/15 rounded-xl p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#C8A96E]">Director Administration</p>
            <p className="font-serif font-bold text-lg mt-1.5">Prof. Dr. Hazrat Bilal</p>
            <a href="mailto:ao@uswat.edu.pk" className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-[#C8A96E] transition-colors">
              <Mail className="w-3.5 h-3.5" />ao@uswat.edu.pk
            </a>
          </div>
        </div>
      </div>

      {/* Directorate split cards */}
      <div>
        <SectionHeader eyebrow="Operational directorates" title="Who runs what" count={`${page.highlights.length} directorates`} tone="crimson" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {page.highlights.map((h) => (
            <article key={h.title} className="group bg-white border border-stone-200 border-l-4 border-l-[#7F1D1D] hover:border-l-[#153B27] rounded-xl p-5 sm:p-6 flex flex-col transition-all hover:shadow-md">
              <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug group-hover:text-[#153B27] transition-colors">
                {h.title}
              </h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed flex-1">{h.text}</p>
              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <Monogram name={DIRECTORATE_HEADS[h.title] ?? 'Director'} size="sm" />
                  <span className="text-xs font-semibold text-stone-700">{DIRECTORATE_HEADS[h.title] ?? 'Director'}</span>
                </div>
                <a
                  href="mailto:ao@uswat.edu.pk"
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#153B27] hover:text-[#7F1D1D] transition-colors min-h-[32px]"
                >
                  <Mail className="w-3.5 h-3.5" />
                  ao@uswat.edu.pk
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 4. Central Library — Stats strip + editorial split
 * ───────────────────────────────────────────────────────────── */

function LibraryTab({ page }: { page: AdminPage }) {
  const stats = [
    { value: '45,000+', label: 'Print Volumes' },
    { value: 'HEC', label: 'Digital Library Access' },
    { value: '08:30 – 18:00', label: 'Reading Hours' },
    { value: 'Charbagh & Women', label: 'Campuses Served' },
  ];
  const chief = page.staff[0];

  return (
    <div className="space-y-12">
      {/* Top 4-stat architectural strip */}
      <div className="bg-white border border-stone-200 rounded-2xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-stone-200 overflow-hidden shadow-xs">
        {stats.map((s) => (
          <div key={s.label} className="p-5 sm:p-6 text-center">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#153B27] leading-none">{s.value}</p>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-500 font-bold mt-2">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Editorial split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <SectionHeader eyebrow="Using the library" title="Borrowing, membership & research" count={`${page.highlights.length} services`} />
          <div className="space-y-4">
            {page.highlights.map((h, idx) => (
              <div key={h.title} className="flex gap-4">
                <span className="font-serif text-2xl font-bold text-[#C8A96E] w-8 shrink-0 tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-lg">{h.title}</h4>
                  <p className="text-sm text-stone-600 mt-1 leading-relaxed">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-[#153B27] text-white border-t-4 border-t-[#C8A96E] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-6">
              <Monogram name={chief?.name ?? 'Chief Librarian'} />
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider font-bold">Chief Librarian</p>
                <p className="font-serif font-bold text-lg mt-0.5">{chief?.name ?? 'Dr. Wajid Rashid'}</p>
              </div>
            </div>
            <div className="space-y-4 border-t border-white/15 pt-6">
              {page.contact.map((c) => (
                <ContactLine key={c.label} icon={c.icon} label={c.label} value={c.value} />
              ))}
              <ContactLine icon={Phone} label="Circulation desk" value="0946-730540" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 5. Youth Development Centre — Opportunities hub + team
 * ───────────────────────────────────────────────────────────── */

function YDCTab({ page }: { page: AdminPage }) {
  return (
    <div className="space-y-12">
      {/* Warm editorial showcase */}
      <div className="bg-[#153B27] text-white border-t-4 border-t-[#C8A96E] rounded-2xl p-6 sm:p-10">
        <span className="block text-xs font-bold uppercase tracking-widest text-[#C8A96E] mb-2">HEC-supported • Near Main Gate, Charbagh</span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-[-0.02em]">
          Your hub for opportunities beyond the classroom
        </h2>
        <p className="font-sans text-white/75 text-sm sm:text-base leading-relaxed mt-3 max-w-2xl">
          The Youth Development Centre helps students plan careers, find national and international
          scholarships, join societies and sports, and build new skills through workshops and training.
        </p>
        <a
          href="mailto:ydc@uswat.edu.pk"
          className="mt-5 inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-[#C8A96E] transition-colors"
        >
          <Mail className="w-3.5 h-3.5" />ydc@uswat.edu.pk
        </a>
      </div>

      {/* Opportunities */}
      <div>
        <SectionHeader eyebrow="What we offer" title="Careers, scholarships, societies & sports" count={`${page.highlights.length} programs`} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {page.highlights.map((h) => (
            <article key={h.title} className="bg-white border border-stone-200 border-t-[3px] border-t-[#153B27] rounded-xl p-5 sm:p-6 flex gap-4 transition-all hover:shadow-md">
              <CheckCircle2 className="w-5 h-5 text-[#153B27] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif font-bold text-stone-900 text-lg">{h.title}</h4>
                <p className="text-sm text-stone-600 mt-1.5 leading-relaxed">{h.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Facilitation team */}
      <div>
        <SectionHeader eyebrow="Facilitation team" title="Talk to an officer" count={`${page.staff.length} officers`} tone="crimson" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {page.staff.map((person) => (
            <article key={person.name} className="bg-white border border-stone-200 border-t-[3px] border-t-[#7F1D1D] rounded-xl p-5 flex flex-col items-center text-center transition-all hover:shadow-md">
              <Monogram name={person.name} />
              <h4 className="font-serif font-bold text-stone-900 text-base mt-3">{person.name}</h4>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7F1D1D] mt-1.5">{person.role}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * 6–8. Alumni / Media Cell / Proctorial Board — tailored splits
 * ───────────────────────────────────────────────────────────── */

function AlumniTab({ page }: { page: AdminPage }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Green registration & verification callout */}
      <div className="lg:col-span-5">
        <div className="bg-[#153B27] text-white border-t-4 border-t-[#C8A96E] rounded-2xl p-6 sm:p-8">
          <h3 className="font-serif text-xl sm:text-2xl font-bold mb-3">Register &amp; verify</h3>
          <p className="text-white/75 text-sm leading-relaxed">
            Keep your details current with UOSAA to receive chapter invitations and request official degree
            or transcript verification.
          </p>
          <a
            href="mailto:alumni@uswat.edu.pk"
            className="mt-5 inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-[#C8A96E] transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />alumni@uswat.edu.pk
          </a>
        </div>
      </div>

      {/* Network benefits */}
      <div className="lg:col-span-7">
        <SectionHeader eyebrow="University of Swat Alumni Association" title="A lifelong network" count={`${page.highlights.length} benefits`} />
        <div className="space-y-4">
          {page.highlights.map((h, idx) => (
            <div key={h.title} className="flex gap-4">
              <span className="font-serif text-2xl font-bold text-[#C8A96E] w-8 shrink-0 tabular-nums">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div>
                <h4 className="font-serif font-bold text-stone-900 text-lg">{h.title}</h4>
                <p className="text-sm text-stone-600 mt-1 leading-relaxed">{h.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MediaCellTab({ page }: { page: AdminPage }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Press & media guidelines */}
      <div className="lg:col-span-7">
        <SectionHeader eyebrow="Media Cell" title="Press & media inquiries" count={`${page.highlights.length} services`} />
        <div className="space-y-4">
          {page.highlights.map((h, idx) => (
            <div key={h.title} className="flex gap-4">
              <span className="font-serif text-2xl font-bold text-[#C8A96E] w-8 shrink-0 tabular-nums">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div>
                <h4 className="font-serif font-bold text-stone-900 text-lg">{h.title}</h4>
                <p className="text-sm text-stone-600 mt-1 leading-relaxed">{h.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Official channels */}
      <div className="lg:col-span-5">
        <div className="bg-[#153B27] text-white border-t-4 border-t-[#C8A96E] rounded-2xl p-6 sm:p-8">
          <h3 className="font-serif text-xl sm:text-2xl font-bold mb-3">Official channels</h3>
          <p className="text-white/75 text-sm leading-relaxed">
            Follow the university’s official accounts for press releases, event coverage, and Campus TV.
          </p>
          <div className="mt-5 space-y-3">
            {[
              { label: 'Media inquiries', value: 'media@uswat.edu.pk', icon: Mail },
              { label: 'Campus TV', value: 'YouTube · @Campus_Tv_UoS', icon: MonitorPlay },
            ].map((c) => (
              <ContactLine key={c.label} icon={c.icon} label={c.label} value={c.value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProctorialTab({ page }: { page: AdminPage }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Conduct & safety charter */}
      <div className="lg:col-span-5">
        <div className="bg-[#153B27] text-white border-t-4 border-t-[#C8A96E] rounded-2xl p-6 sm:p-8">
          <h3 className="font-serif text-xl sm:text-2xl font-bold mb-3">Campus conduct &amp; safety charter</h3>
          <p className="text-white/75 text-sm leading-relaxed">
            The Proctorial Board keeps campus safe, fair, and disciplined — enforcing the code of conduct
            and running awareness programs.
          </p>
          <div className="mt-6 space-y-3">
            {page.highlights.map((h) => (
              <div key={h.title} className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#C8A96E] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white">{h.title}</p>
                  <p className="text-xs text-white/70 mt-0.5">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Roster */}
      <div className="lg:col-span-7">
        <SectionHeader eyebrow="Proctorial Board" title="The deputy chief proctors" count={`${page.staff.length} officers`} tone="crimson" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {page.staff.map((person) => (
            <article key={person.name} className="bg-white border border-stone-200 border-t-[3px] border-t-[#7F1D1D] rounded-xl p-5 flex items-center gap-4 transition-all hover:shadow-md">
              <Monogram name={person.name} />
              <div className="min-w-0">
                <h4 className="font-serif font-bold text-stone-900 text-base leading-snug">{person.name}</h4>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7F1D1D] mt-1">{person.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * Main explorer
 * ───────────────────────────────────────────────────────────── */

export default function AdministrationExplorer() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');
  const initialCategory: CategoryId = tabParam && PILLS.some((p) => p.id === tabParam) ? tabParam : 'overview';

  const [category, setCategory] = useState<CategoryId>(initialCategory);
  const [query, setQuery] = useState('');
  const [wing, setWing] = useState<AdminWing | 'all'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const editable =
        t instanceof HTMLInputElement ||
        t instanceof HTMLTextAreaElement ||
        (t instanceof HTMLElement && t.isContentEditable);
      if (e.key === '/' && !editable) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /** Filtered units for the overview view (search + wing). */
  const overviewUnits = useMemo(() => {
    const q = query.trim().toLowerCase();
    return adminPages.filter((p) => {
      if (wing !== 'all' && p.wing !== wing) return false;
      return matches(p, q);
    });
  }, [query, wing]);

  const activePage = category === 'overview' ? undefined : adminPages.find((p) => p.slug === category);

  const hasActiveFilter = query.trim() !== '' || wing !== 'all';

  const resetFilters = () => {
    setQuery('');
    setWing('all');
  };

  const resultLabel = category === 'overview'
    ? `${overviewUnits.length} ${overviewUnits.length === 1 ? 'section' : 'sections'}`
    : activePage ? activePage.title : '';

  const renderTab = () => {
    if (category === 'overview') {
      if (overviewUnits.length === 0) {
        return (
          <div className="p-12 text-center bg-white border border-stone-300 rounded-2xl shadow-xs">
            <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-600 mx-auto flex items-center justify-center mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-800">No matching sections</h3>
            <p className="text-xs text-stone-600 mt-2">Try a different search or wing filter.</p>
          </div>
        );
      }
      return <OverviewTab units={overviewUnits} onSelect={(slug) => setCategory(slug)} />;
    }

    if (!activePage) {
      return (
        <div className="p-12 text-center bg-white border border-stone-300 rounded-2xl shadow-xs">
          <p className="text-sm text-stone-500">This section is not available.</p>
        </div>
      );
    }

    switch (activePage.slug) {
      case 'offices':
        return <OfficesTab page={activePage} />;
      case 'directorates':
        return <DirectoratesTab page={activePage} />;
      case 'central-library':
        return <LibraryTab page={activePage} />;
      case 'ydc':
        return <YDCTab page={activePage} />;
      case 'alumni':
        return <AlumniTab page={activePage} />;
      case 'media-cell':
        return <MediaCellTab page={activePage} />;
      case 'proctorial-board':
        return <ProctorialTab page={activePage} />;
      default:
        return <OverviewTab units={overviewUnits} onSelect={(slug) => setCategory(slug)} />;
    }
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-10 lg:px-14 -mt-10 sm:-mt-12 relative z-20">
      {/* Part A — search + wing toggle */}
      <div
        role="search"
        aria-label="Filter administration sections"
        className="bg-white border border-stone-300 border-t-4 border-t-[#7F1D1D] rounded-2xl p-3.5 sm:p-5 shadow-[0_24px_50px_-22px_rgba(12,25,18,0.45)] flex flex-col lg:flex-row lg:items-center gap-3 sm:gap-4"
      >
        <div className="relative min-w-0 flex-1">
          <Search className="w-4 h-4 text-stone-600 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search offices, directorates, officers, or services — try "Registrar", "Library", "YDC", "Proctor"…'
            aria-label="Search administration"
            className="w-full pl-11 pr-16 lg:pr-14 h-12 rounded-xl bg-stone-50 border border-stone-300 text-[16px] sm:text-sm text-[#14291D] placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-[#153B27] focus:border-transparent focus:bg-white transition-all"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-stone-600 hover:text-stone-800 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd
              aria-hidden="true"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 items-center justify-center text-[11px] font-sans font-bold text-stone-600 bg-white border border-stone-300 rounded-md hidden lg:flex pointer-events-none"
            >
              /
            </kbd>
          )}
        </div>

        <div
          role="group"
          aria-label="Filter by wing"
          className="flex items-center gap-1.5 p-1 bg-stone-100/90 rounded-xl overflow-x-auto pb-1.5 sm:pb-1 scrollbar-none max-w-full shrink-0"
        >
          {WING_FILTERS.map((w) => {
            const isActive = wing === w.id;
            return (
              <button
                key={w.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setWing(w.id)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.98] min-h-[40px] shrink-0 ${
                  isActive ? 'bg-[#153B27] text-white shadow-sm' : 'text-stone-600 hover:text-[#14291D] hover:bg-white/70'
                }`}
              >
                {w.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Part B — results counter */}
      <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 px-1">
        <span className="font-medium" aria-live="polite">
          Showing <strong className="text-[#153B27] font-bold tabular-nums">{resultLabel}</strong>
        </span>
        {hasActiveFilter && (
          <button
            type="button"
            onClick={resetFilters}
            className="text-[#7F1D1D] hover:text-[#661717] underline underline-offset-2 decoration-[#7F1D1D]/30 hover:decoration-[#7F1D1D] font-semibold transition-colors active:scale-[0.985]"
          >
            Reset All Filters
          </button>
        )}
      </div>

      {/* Category pill row — buttons (never links) */}
      <div className="mt-4 flex flex-wrap items-center gap-2.5" role="group" aria-label="Administration sections">
        {PILLS.map((pill) => {
          const isActive = category === pill.id;
          return (
            <button
              key={pill.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setCategory(pill.id)}
              className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-[11px] font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.985] ${
                isActive ? 'bg-[#153B27] text-white shadow-sm' : 'bg-white border border-stone-200 text-stone-800 hover:border-[#153B27]'
              }`}
            >
              <span>{pill.label}</span>
              <span
                className={`text-[10px] font-bold tabular-nums px-1.5 py-0.5 rounded-md ${
                  isActive ? 'bg-white/15 text-[#E5CD9B]' : 'bg-stone-100 text-stone-600'
                }`}
              >
                {pill.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Content area — swaps in-page, never navigates */}
      <div className="pt-10 pb-20 sm:pb-28">{renderTab()}</div>
    </div>
  );
}
