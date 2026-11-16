'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  ClipboardCopy,
  Copy,
  Inbox,
  Landmark,
  Mail,
  Phone,
  RotateCcw,
  Search,
  ShieldCheck,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
 * Data & types
 * ───────────────────────────────────────────────────────────── */

type Role = 'Student' | 'Faculty / Teacher' | 'Administrative Staff' | 'Visitor / Parent';

const ROLES: Role[] = ['Student', 'Faculty / Teacher', 'Administrative Staff', 'Visitor / Parent'];

const CATEGORIES = [
  'Classes, Faculty & Teaching',
  'Departments, Labs & Classrooms',
  'Exams, Results & Registrar Office',
  'Hostels, Transport & Campus Facilities',
  'Staff Conduct & Harassment / Discipline',
  'Study Tours, Events & General Requests',
] as const;

const CAMPUSES = ['Charbagh Main Campus', 'Women Campus', 'Shangla Sub-Campus'];

interface ComplaintRecord {
  ref: string;
  name: string;
  role: Role;
  category: string;
  department: string;
  contact: string;
  subject: string;
  submittedAt: string;
  status: string;
}

const STATUS = 'Received • Under Review by Registrar / Proctorial Office';

const refToStored = (ref: string) => `uos-complaint-${ref}`;

const makeRef = (): string => {
  const year = new Date().getFullYear();
  const seq = Math.floor(1000 + Math.random() * 9000);
  return `UOS-${year}-${seq}`;
};

const loadStored = (ref: string): ComplaintRecord | undefined => {
  if (typeof window === 'undefined') return undefined;
  try {
    const raw = window.localStorage.getItem(refToStored(ref));
    return raw ? (JSON.parse(raw) as ComplaintRecord) : undefined;
  } catch {
    return undefined;
  }
};

const storeRecord = (rec: ComplaintRecord) => {
  try {
    window.localStorage.setItem(refToStored(rec.ref), JSON.stringify(rec));
  } catch {
    /* storage unavailable — ignore */
  }
};

/* ─────────────────────────────────────────────────────────────
 * Small presentational bits
 * ───────────────────────────────────────────────────────────── */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-xs font-semibold text-stone-700 mb-1.5">{children}</label>
  );
}

const inputClass =
  'w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-[#FBF9F5] text-[16px] sm:text-sm text-[#14291D] placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-[#153B27] focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed';

/* ─────────────────────────────────────────────────────────────
 * Main component
 * ───────────────────────────────────────────────────────────── */

export default function ComplaintPortal() {
  const [role, setRole] = useState<Role>('Student');
  const [category, setCategory] = useState<string>(CATEGORIES[0]);
  const [campus, setCampus] = useState<string>(CAMPUSES[0]);
  const [anonymous, setAnonymous] = useState(false);

  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [contact, setContact] = useState('');
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');

  const [submitted, setSubmitted] = useState<ComplaintRecord | null>(null);
  const [copied, setCopied] = useState(false);

  const [lookupRef, setLookupRef] = useState('');
  const [lookupResult, setLookupResult] = useState<ComplaintRecord | null | 'not-found'>(null);
  const [lookupSearched, setLookupSearched] = useState(false);

  const canSubmit = useMemo(() => {
    const needsName = !anonymous && name.trim().length < 2;
    const needsContact = contact.trim().length < 5;
    const needsSubject = subject.trim().length < 3;
    const needsDetails = details.trim().length < 10;
    return !needsName && !needsContact && !needsSubject && !needsDetails;
  }, [anonymous, name, contact, subject, details]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    const rec: ComplaintRecord = {
      ref: makeRef(),
      name: anonymous ? 'Anonymous' : name.trim(),
      role,
      category,
      department: campus,
      contact: contact.trim(),
      subject: subject.trim(),
      submittedAt: new Date().toISOString(),
      status: STATUS,
    };
    storeRecord(rec);
    setSubmitted(rec);
    setCopied(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setSubmitted(null);
    setRole('Student');
    setCategory(CATEGORIES[0]);
    setCampus(CAMPUSES[0]);
    setAnonymous(false);
    setName('');
    setRollNo('');
    setContact('');
    setSubject('');
    setDetails('');
  };

  const handleCopy = async () => {
    if (!submitted) return;
    try {
      await navigator.clipboard.writeText(submitted.ref);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setLookupSearched(true);
    const ref = lookupRef.trim().toUpperCase();
    if (!ref) {
      setLookupResult('not-found');
      return;
    }
    const rec = loadStored(ref);
    setLookupResult(rec ?? 'not-found');
  };

  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      {/* ───────────────────────── Hero ───────────────────────── */}
      <div className="relative overflow-hidden bg-[#153B27] text-white pt-28 sm:pt-36 pb-12 sm:pb-16">
        <img
          src="/images/campus/charbagh-campus.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0B1F14]/95 via-[#153B27]/88 to-[#153B27]/75"
        />
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6">
            <ol className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium text-white/70 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-white/45">›</li>
              <li aria-current="page" className="text-[#C8A96E] font-semibold">
                Complaints &amp; Feedback
              </li>
            </ol>
          </nav>
          <div className="flex items-center gap-2 sm:gap-2.5 mb-2.5">
            <span className="h-0.5 w-5 sm:w-7 bg-[#C8A96E]" />
            <span className="text-[10.5px] sm:text-xs uppercase tracking-widest text-[#C8A96E] font-bold">
              Student &amp; Staff Grievances
            </span>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight leading-[1.15] max-w-3xl">
            Student &amp; Staff Complaint Portal
          </h1>
          <p className="mt-4 font-sans text-sm sm:text-base text-stone-200 max-w-2xl leading-relaxed">
            Report classroom or lab issues, staff concerns, transport or hostel needs, or suggest
            improvements — reviewed directly by the University Administration &amp; Proctorial Office.
          </p>
        </div>
      </div>

      {/* ───────────────────────── 2-Column layout ───────────────────────── */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-14 py-10 sm:py-14">
        {submitted ? (
          /* Confirmation state */
          <div className="max-w-2xl mx-auto bg-[#153B27] text-white border-t-4 border-t-[#C8A96E] rounded-2xl p-8 sm:p-10 shadow-lg">
            <div className="w-14 h-14 rounded-full bg-white/10 text-[#C8A96E] flex items-center justify-center mb-5">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <p className="text-xs uppercase tracking-widest text-[#C8A96E] font-bold mb-2">
              Complaint submitted
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
              Thank you — we&rsquo;ve received your report
            </h2>
            <p className="text-white/75 text-sm leading-relaxed mb-6">
              Your complaint has been logged and routed to the University Administration &amp; Proctorial
              Office. Save your tracking reference to follow up.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/15 mb-6">
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-widest text-white/55 font-bold mb-1">
                  Tracking reference
                </p>
                <p className="font-mono text-xl font-bold text-[#E5CD9B]">{submitted.ref}</p>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#C8A96E] text-[#0F291B] text-xs font-bold px-4 py-2.5 hover:bg-[#D4B87A] transition-colors min-h-[44px]"
              >
                {copied ? <Copy className="w-4 h-4" /> : <ClipboardCopy className="w-4 h-4" />}
                {copied ? 'Copied' : 'Copy Reference'}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
              <div className="p-4 rounded-xl bg-white/5 border border-white/15">
                <p className="text-[10px] uppercase tracking-widest text-white/55 font-bold mb-1">Category</p>
                <p className="text-sm font-semibold">{submitted.category}</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/15">
                <p className="text-[10px] uppercase tracking-widest text-white/55 font-bold mb-1">Expected response</p>
                <p className="text-sm font-semibold">2–3 working days</p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 text-white text-sm font-semibold px-5 py-3 hover:bg-white/10 transition-colors min-h-[44px]"
            >
              <RotateCcw className="w-4 h-4" />
              Submit Another Complaint
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* ── Left: Form ── */}
            <div className="lg:col-span-8">
              <div className="bg-white border border-stone-200 border-t-4 border-t-[#7F1D1D] rounded-2xl p-6 sm:p-8 shadow-sm">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D] mb-1">
                  Submit a complaint
                </h2>
                <p className="text-sm text-stone-600 mb-6">
                  Please share as much detail as you can — it helps us resolve things faster.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Role selector */}
                  <fieldset>
                    <legend className="block text-xs font-semibold text-stone-700 mb-2">
                      Who are you?
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {ROLES.map((r) => {
                        const active = role === r;
                        return (
                          <button
                            key={r}
                            type="button"
                            onClick={() => setRole(r)}
                            aria-pressed={active}
                            className={`px-4 py-2.5 rounded-full text-xs font-semibold border transition-all duration-200 active:scale-[0.98] min-h-[42px] ${
                              active
                                ? 'bg-[#153B27] text-white border-[#153B27] shadow-sm'
                                : 'bg-white border-stone-300 text-stone-700 hover:border-[#153B27]'
                            }`}
                          >
                            {r}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  {/* Category selector */}
                  <fieldset>
                    <legend className="block text-xs font-semibold text-stone-700 mb-2">
                      Complaint category
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {CATEGORIES.map((c) => {
                        const active = category === c;
                        return (
                          <button
                            key={c}
                            type="button"
                            onClick={() => setCategory(c)}
                            aria-pressed={active}
                            className={`px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-200 active:scale-[0.98] min-h-[42px] text-left ${
                              active
                                ? 'bg-[#7F1D1D] text-white border-[#7F1D1D] shadow-sm'
                                : 'bg-white border-stone-300 text-stone-700 hover:border-[#7F1D1D]'
                            }`}
                          >
                            {c}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  {/* Name + anonymous toggle */}
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <Label>Full Name</Label>
                      <label className="inline-flex items-center gap-2 text-xs font-medium text-stone-600 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={anonymous}
                          onChange={(e) => setAnonymous(e.target.checked)}
                          className="h-4 w-4 rounded border-stone-300 text-[#153B27] focus:ring-[#153B27]"
                        />
                        Submit without showing my name
                      </label>
                    </div>
                    <input
                      type="text"
                      value={anonymous ? '' : name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={anonymous}
                      placeholder="e.g. Ayesha Khan"
                      className={inputClass}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label>Registration / Roll No. or Employee ID</Label>
                      <input
                        type="text"
                        value={anonymous ? '' : rollNo}
                        onChange={(e) => setRollNo(e.target.value)}
                        disabled={anonymous}
                        placeholder="Optional when anonymous"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <Label>Department / Campus</Label>
                      <select value={campus} onChange={(e) => setCampus(e.target.value)} className={inputClass}>
                        {CAMPUSES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label>Email or Phone Number</Label>
                    <input
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="For follow-up updates"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <Label>Subject / Short Title</Label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Projector not working in CS Lab 2"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <Label>Full Details</Label>
                    <textarea
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      rows={5}
                      placeholder="Please include helpful details — e.g. the date, room or office involved, and what happened."
                      className={`${inputClass} resize-y`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#7F1D1D] hover:bg-[#661717] text-white text-sm font-semibold px-6 py-3.5 transition-all active:scale-[0.99] min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Complaint
                  </button>
                </form>
              </div>
            </div>

            {/* ── Right: Status lookup + direct desks ── */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white border border-stone-200 rounded-2xl p-6">
                <h3 className="font-serif text-lg font-bold text-[#14291D] mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5 text-[#7F1D1D]" />
                  Check complaint status
                </h3>
                <form onSubmit={handleLookup} className="space-y-3">
                  <input
                    type="text"
                    value={lookupRef}
                    onChange={(e) => setLookupRef(e.target.value)}
                    placeholder="Enter tracking reference, e.g. UOS-2026-4819"
                    className={inputClass}
                  />
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#153B27] hover:bg-[#0F291B] text-white text-sm font-semibold px-5 py-3 transition-colors min-h-[44px]"
                  >
                    <Search className="w-4 h-4" />
                    Look up status
                  </button>
                </form>

                {lookupSearched && (
                  <div className="mt-4">
                    {lookupResult === 'not-found' ? (
                      <p className="text-sm text-stone-600 p-4 rounded-xl bg-stone-50 border border-stone-200">
                        No record found for that reference. Double-check the number, or submit a new
                        complaint above.
                      </p>
                    ) : lookupResult ? (
                      <div className="p-4 rounded-xl bg-[#F6F5F0] border border-stone-200">
                        <p className="font-mono text-xs text-stone-500 mb-1">{lookupResult.ref}</p>
                        <p className="font-serif font-bold text-stone-900 mb-1">{lookupResult.subject}</p>
                        <p className="text-xs text-stone-500 mb-2">
                          {lookupResult.category} · {lookupResult.department}
                        </p>
                        <p className="text-xs font-semibold text-[#153B27] flex items-center gap-1.5">
                          <Inbox className="w-3.5 h-3.5" />
                          {lookupResult.status}
                        </p>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>

              {/* Direct escalation contacts */}
              <div className="bg-[#153B27] text-white rounded-2xl p-6">
                <h3 className="font-serif text-lg font-bold mb-1">Urgent matters</h3>
                <p className="text-white/70 text-xs mb-5 leading-relaxed">
                  For immediate or sensitive concerns, reach the relevant office directly.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 text-[#C8A96E] flex items-center justify-center shrink-0">
                      <Landmark className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold">Office of the Registrar</p>
                      <a href="mailto:registrar@uswat.edu.pk" className="text-[#C8A96E] hover:text-white text-xs transition-colors">
                        registrar@uswat.edu.pk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 text-[#C8A96E] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold">Proctorial Board</p>
                      <a href="mailto:proctor@uswat.edu.pk" className="text-[#C8A96E] hover:text-white text-xs transition-colors">
                        proctor@uswat.edu.pk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 text-[#C8A96E] flex items-center justify-center shrink-0">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold">Vice Chancellor&rsquo;s Secretariat</p>
                      <a href="mailto:info@uswat.edu.pk" className="text-[#C8A96E] hover:text-white text-xs transition-colors">
                        info@uswat.edu.pk
                      </a>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/15 flex items-center gap-2 text-xs text-white/60">
                    <Phone className="w-3.5 h-3.5 text-[#C8A96E]" />
                    Administration Block, Charbagh Main Campus
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
