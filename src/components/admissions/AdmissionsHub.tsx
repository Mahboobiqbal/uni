'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  BadgeCheck,
  Banknote,
  ClipboardList,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Search,
  Send,
} from 'lucide-react';

/* ── Data (consolidated from the removed sub-pages) ────────────────────────── */

const steps = [
  { icon: Send, title: 'Online Application', text: 'Submit personal, academic, and domicile credentials through the official University of Swat admissions portal.' },
  { icon: ClipboardList, title: 'Fee Deposit & Verification', text: 'Generate the Bank of Khyber challan slip (PKR 1,500) and deposit it at any authorized BOK branch.' },
  { icon: BadgeCheck, title: 'Merit Lists & Scrutiny', text: 'Review provisional departmental merit lists and appear before the Scrutiny Committee with original documents.' },
  { icon: GraduationCap, title: 'Enrollment & Orientation', text: 'Deposit semester dues, receive your student registration card, and attend departmental orientation.' },
];

const requiredDocs = ['Matric / O-Level Certificate & DMC', 'F.Sc / A-Level / Equivalent DMC', 'Domicile Certificate', 'CNIC / Form-B (B-Form)', '01 Recent Passport-Sized Photograph'];

const feeData = [
  {
    faculty: 'Faculty of Physical, Numerical & Computational Sciences',
    programs: [
      { name: 'BS Computer Science / Software Engineering', openMerit: 'PKR 34,500', selfFinance: 'PKR 58,000' },
      { name: 'BS Physics / Mathematics / Geology', openMerit: 'PKR 28,000', selfFinance: 'PKR 48,000' },
      { name: 'MS / M.Phil Computing & Physical Sciences', openMerit: 'PKR 42,000', selfFinance: 'PKR 65,000' },
      { name: 'PhD Computing / Physics', openMerit: 'PKR 48,000', selfFinance: 'PKR 75,000' },
    ],
  },
  {
    faculty: 'Faculty of Chemical & Life Sciences',
    programs: [
      { name: 'BS Chemistry / Environmental Sciences', openMerit: 'PKR 31,000', selfFinance: 'PKR 52,000' },
      { name: 'BS Biotechnology / Genetics / Microbiology', openMerit: 'PKR 33,500', selfFinance: 'PKR 56,000' },
      { name: 'BS Botany / Zoology', openMerit: 'PKR 27,500', selfFinance: 'PKR 46,000' },
      { name: 'M.Phil / PhD Life Sciences', openMerit: 'PKR 44,000', selfFinance: 'PKR 70,000' },
    ],
  },
  {
    faculty: 'Faculty of Management, Art & Social Sciences',
    programs: [
      { name: 'Bachelor of Business Administration (BBA Hons)', openMerit: 'PKR 32,500', selfFinance: 'PKR 55,000' },
      { name: 'BS Economics / Tourism & Hospitality', openMerit: 'PKR 26,000', selfFinance: 'PKR 44,000' },
      { name: 'BS Media & Communication / Psychology', openMerit: 'PKR 28,000', selfFinance: 'PKR 46,000' },
      { name: 'MS Management Sciences / Economics', openMerit: 'PKR 38,000', selfFinance: 'PKR 62,000' },
    ],
  },
  {
    faculty: 'Faculty of Religious, Languages, Humanities & Legal Studies',
    programs: [
      { name: 'BA / LLB (5-Year Integrated Law)', openMerit: 'PKR 36,000', selfFinance: 'PKR 60,000' },
      { name: 'BS English / Urdu / Pashto', openMerit: 'PKR 24,000', selfFinance: 'PKR 40,000' },
      { name: 'BS Islamic & Arabic Studies', openMerit: 'PKR 22,500', selfFinance: 'PKR 38,000' },
      { name: 'LLM / M.Phil Humanities', openMerit: 'PKR 38,000', selfFinance: 'PKR 58,000' },
    ],
  },
];

const oneTimeDues = [
  { label: 'Admission Processing Fee', amount: 'PKR 2,500' },
  { label: 'Registration & Enrollment Fee', amount: 'PKR 2,000' },
  { label: 'Refundable Library & Lab Security', amount: 'PKR 5,000' },
  { label: 'Student Smart Card Fee', amount: 'PKR 500' },
];

const hostelDues = [
  { label: 'Hostel Room Rent (Per Semester)', amount: 'PKR 14,000' },
  { label: 'Mess Security (Refundable)', amount: 'PKR 6,000' },
  { label: 'Utility & Maintenance Dues', amount: 'PKR 3,500' },
  { label: 'Campus Bus Shuttle Transport (Per Term)', amount: 'PKR 6,500' },
];

const meritLists = [
  { department: 'Department of Computer and Software Technology', program: 'BS Computer Science (BSCS)', round: '1st Merit List (Fall 2026)', cutoff: '82.4%' },
  { department: 'Department of Computer and Software Technology', program: 'BS Software Engineering (BSSE)', round: '1st Merit List (Fall 2026)', cutoff: '79.1%' },
  { department: 'Department of Chemistry', program: 'BS Chemistry', round: '1st Merit List (Fall 2026)', cutoff: '74.6%' },
  { department: 'Department of Management & Commerce', program: 'BBA (Honors)', round: '1st Merit List (Fall 2026)', cutoff: '68.5%' },
  { department: 'Department of Law & Shariah', program: 'BA / LLB (5-Year)', round: '1st Merit List (Fall 2026)', cutoff: '76.2% (LAT + FSC)' },
  { department: 'Department of Biotechnology & Genetics', program: 'BS Biotechnology', round: '1st Merit List (Fall 2026)', cutoff: '78.0%' },
  { department: 'Department of Environmental Sciences', program: 'BS Environmental Sciences', round: '1st Merit List (Fall 2026)', cutoff: '65.2%' },
  { department: 'Department of English & Foreign Languages', program: 'BS English', round: '1st Merit List (Fall 2026)', cutoff: '71.0%' },
];

const quotaCategories = [
  { name: 'Merged Districts (Ex-FATA) Quota', seats: 'Reserved per department', eligibility: 'Valid domicile of erstwhile FATA tribal agencies.' },
  { name: 'Other Provinces & AJK Quota', seats: '2 seats per program', eligibility: 'Nomination through respective provincial education secretariats.' },
  { name: 'Persons with Disabilities (Special Quota)', seats: '1 seat per program', eligibility: 'Disability certificate issued by authorized government medical board.' },
  { name: 'Sports Merit Quota', seats: 'Open trials', eligibility: 'District/Provincial/National level sports participation certificate.' },
  { name: 'Women Reserved Quota', seats: 'Statutory seats', eligibility: 'Female applicants across all programs per HEC policy.' },
  { name: 'Shangla / Regional Quota', seats: 'Statutory seats', eligibility: 'Valid domicile of District Shangla.' },
];

const scholarships = [
  { title: 'HEC Need-Based Scholarship', description: 'Full tuition coverage and monthly living stipend for underprivileged undergraduate scholars.', deadline: 'Fall Semester Cycle' },
  { title: 'KPEF Merit-cum-Inaffordability', description: 'Khyber Pakhtunkhwa Education Foundation financial assistance for deserving students.', deadline: 'Nov 2026' },
  { title: 'University Merit Concessions', description: 'Top academic performers of each entering cohort receive up to 100% tuition waivers.', deadline: 'Semester Basis' },
  { title: 'Orphan & Special Student Subsidies', description: 'Statutory institutional concessions for persons with disabilities and orphan scholars.', deadline: 'Rolling' },
];

const JUMP_LINKS = [
  { href: '#how-to-apply', label: 'Application Steps' },
  { href: '#eligibility', label: 'Eligibility & Quotas' },
  { href: '#fees', label: 'Semester Fee Structure' },
  { href: '#merit-lists', label: 'Merit Lists' },
  { href: '#scholarships', label: 'Scholarships & Aid' },
  { href: '#help-desk', label: 'Admissions Help Desk' },
];

type FeeTab = 'Program Fees' | 'Hostel & Transport' | 'One-Time Dues';

export default function AdmissionsHub() {
  const [feeTab, setFeeTab] = useState<FeeTab>('Program Fees');
  const [feeQuery, setFeeQuery] = useState('');
  const [meritQuery, setMeritQuery] = useState('');

  const feeRows = useMemo(() => {
    const q = feeQuery.trim().toLowerCase();
    if (feeTab !== 'Program Fees') return [];
    return feeData
      .flatMap((f) => f.programs.map((p) => ({ faculty: f.faculty, ...p })))
      .filter((r) => !q || r.name.toLowerCase().includes(q) || r.faculty.toLowerCase().includes(q));
  }, [feeTab, feeQuery]);

  const meritRows = useMemo(() => {
    const q = meritQuery.trim().toLowerCase();
    return meritLists.filter(
      (m) => !q || m.department.toLowerCase().includes(q) || m.program.toLowerCase().includes(q) || m.round.toLowerCase().includes(q)
    );
  }, [meritQuery]);

  return (
    <div className="pb-16 sm:pb-28">
      {/* Sticky in-page quick-jump bar */}
      <div className="sticky top-20 lg:top-24 z-30">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-14">
          <div className="bg-white border border-stone-300 border-t-4 border-t-[#7F1D1D] rounded-2xl p-2.5 sm:p-3 shadow-[0_24px_50px_-22px_rgba(12,25,18,0.3)] mb-8 sm:mb-12">
            <div className="flex overflow-x-auto pb-1 scrollbar-none momentum-scroll sm:flex-wrap items-center gap-1.5">
              {JUMP_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-3 py-1.5 rounded-lg text-[11px] font-semibold text-stone-700 hover:text-[#7F1D1D] hover:bg-stone-100 transition-colors shrink-0 whitespace-nowrap min-h-[34px] flex items-center"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 1 · How to apply ── */}
      <section id="how-to-apply" className="scroll-mt-36 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-14 mb-12 sm:mb-16">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="h-0.5 w-7 bg-[#7F1D1D]" />
          <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">01 · Apply</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14291D] tracking-[-0.02em] mb-8">
          Apply in Four Clear Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="bg-white border border-stone-200 border-t-[3px] border-t-[#153B27] rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#153B27]/10 text-[#153B27] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-serif text-2xl font-bold text-[#7F1D1D]/40">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900">{s.title}</h3>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">{s.text}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="flex-1">
            <h3 className="font-serif text-xl font-bold text-[#14291D] mb-4">Required Documents</h3>
            <ul className="space-y-2.5">
              {requiredDocs.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm text-stone-700">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#7F1D1D] shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="https://admissions.uswat.edu.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#7F1D1D] hover:bg-[#991B1B] text-white text-sm font-semibold shadow-md transition-colors"
          >
            Launch Online Admission Portal <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Section · Eligibility & quotas ── */}
      <section id="eligibility" className="scroll-mt-36 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-14 mb-12 sm:mb-16">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="h-0.5 w-7 bg-[#153B27]" />
          <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">02 · Eligibility</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14291D] tracking-[-0.02em] mb-6">
          Eligibility &amp; Reserved Quotas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {quotaCategories.map((q) => (
            <div key={q.name} className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#7F1D1D]/10 text-[#7F1D1D]">
                {q.seats}
              </span>
              <h3 className="font-serif text-base font-bold text-stone-900 mt-3">{q.name}</h3>
              <p className="text-sm text-stone-600 mt-1.5">{q.eligibility}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section · Fee structure ── */}
      <section id="fees" className="scroll-mt-36 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-14 mb-12 sm:mb-16">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="h-0.5 w-7 bg-[#B48A3E]" />
          <span className="text-xs uppercase tracking-widest text-[#7A5A1E] font-bold">03 · Fees</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14291D] tracking-[-0.02em] mb-6">
          Semester Fee Structure 2026–2027
        </h2>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          {(['Program Fees', 'Hostel & Transport', 'One-Time Dues'] as FeeTab[]).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFeeTab(tab)}
              aria-pressed={feeTab === tab}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all active:scale-[0.98] ${
                feeTab === tab ? 'bg-[#7F1D1D] text-white shadow-sm' : 'bg-white border border-stone-200 text-stone-700 hover:border-[#153B27]'
              }`}
            >
              {tab}
            </button>
          ))}
          {feeTab === 'Program Fees' && (
            <div className="relative ml-auto w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
              <input
                type="text"
                value={feeQuery}
                onChange={(e) => setFeeQuery(e.target.value)}
                placeholder="Search program…"
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-300 bg-white text-[16px] sm:text-sm focus:outline-none focus:border-[#153B27] focus:ring-2 focus:ring-[#153B27]/20 transition-colors"
              />
            </div>
          )}
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
          {feeTab === 'Program Fees' && (
            <div>
              {/* Mobile Card-Based Data Display */}
              <div className="block sm:hidden divide-y divide-stone-200">
                {feeRows.map((r, i) => (
                  <div key={i} className="p-4 space-y-2">
                    <div>
                      <span className="block text-sm font-semibold text-stone-900">{r.name}</span>
                      <span className="block text-[11px] text-stone-500 mt-0.5">{r.faculty}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs pt-1 bg-stone-50/60 p-2.5 rounded-lg border border-stone-100">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-stone-400 block">Open Merit</span>
                        <span className="font-bold text-sm text-[#153B27]">{r.openMerit}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase font-bold text-stone-400 block">Self-Finance</span>
                        <span className="font-medium text-xs text-stone-700">{r.selfFinance}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Table View */}
              <div className="hidden sm:block overflow-x-auto momentum-scroll">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-600 font-bold uppercase tracking-[0.14em] text-[10px]">
                      <th className="py-3 px-5">Program / Discipline</th>
                      <th className="py-3 px-5">Open Merit</th>
                      <th className="py-3 px-5">Self-Finance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {feeRows.map((r, i) => (
                      <tr key={i} className="hover:bg-stone-50/70 transition-colors">
                        <td className="py-3.5 px-5">
                          <span className="block text-sm font-semibold text-stone-900">{r.name}</span>
                          <span className="block text-[11px] text-stone-500 mt-0.5">{r.faculty}</span>
                        </td>
                        <td className="py-3.5 px-5 text-sm font-semibold text-[#153B27]">{r.openMerit}</td>
                        <td className="py-3.5 px-5 text-sm text-stone-700">{r.selfFinance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {feeTab === 'Hostel & Transport' && (
            <div className="divide-y divide-stone-200">
              {hostelDues.map((d) => (
                <div key={d.label} className="flex items-center justify-between gap-4 px-6 py-4">
                  <span className="text-sm text-stone-700">{d.label}</span>
                  <span className="text-sm font-bold text-[#153B27]">{d.amount}</span>
                </div>
              ))}
            </div>
          )}
          {feeTab === 'One-Time Dues' && (
            <div className="divide-y divide-stone-200">
              {oneTimeDues.map((d) => (
                <div key={d.label} className="flex items-center justify-between gap-4 px-6 py-4">
                  <span className="text-sm text-stone-700">{d.label}</span>
                  <span className="text-sm font-bold text-[#153B27]">{d.amount}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Section · Merit lists ── */}
      <section id="merit-lists" className="scroll-mt-36 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-14 mb-12 sm:mb-16">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="h-0.5 w-7 bg-[#7F1D1D]" />
          <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">04 · Merit</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14291D] tracking-[-0.02em] mb-6">
          Fall 2026 Merit Lists
        </h2>

        <div className="relative max-w-xl mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
          <input
            type="text"
            value={meritQuery}
            onChange={(e) => setMeritQuery(e.target.value)}
            placeholder="Search department or program…"
            className="w-full pl-9 pr-3 py-3 rounded-xl border border-stone-300 bg-white text-[16px] sm:text-sm focus:outline-none focus:border-[#153B27] focus:ring-2 focus:ring-[#153B27]/20 transition-colors"
          />
        </div>

        <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden divide-y divide-stone-200">
          {meritRows.map((m, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 px-4 sm:px-6 py-3.5 sm:py-4">
              <div className="min-w-0">
                <span className="block text-sm font-bold text-stone-900">{m.program}</span>
                <span className="block text-xs text-stone-500 mt-0.5">{m.department}</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                <span className="inline-flex items-center px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider bg-[#EFF5EE] text-[#153B27] border border-[#C9D6C2]">
                  1st Merit List
                </span>
                <span className="text-xs font-semibold text-stone-600 tabular-nums">{m.cutoff}</span>
              </div>
            </div>
          ))}
          {meritRows.length === 0 && (
            <div className="px-6 py-10 text-center text-sm text-stone-500">No merit list entries matched your search.</div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
          {['Women', 'Sports', 'Disabled', 'FATA/Merged Districts', 'Shangla'].map((q) => (
            <span key={q} className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-[10.5px] sm:text-[11px] font-semibold bg-[#153B27]/8 text-[#153B27] border border-[#153B27]/15">
              Reserved: {q}
            </span>
          ))}
        </div>
      </section>

      {/* ── Section · Scholarships ── */}
      <section id="scholarships" className="scroll-mt-36 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-14 mb-12 sm:mb-16">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="h-0.5 w-7 bg-[#C8A96E]" />
          <span className="text-xs uppercase tracking-widest text-[#7A5A1E] font-bold">05 · Financial Aid</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14291D] tracking-[-0.02em] mb-6">
          Scholarships &amp; Financial Aid
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {scholarships.map((s) => (
            <div key={s.title} className="bg-white border border-stone-200 border-t-[3px] border-t-[#C8A96E] rounded-xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-stone-900">{s.title}</h3>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">{s.description}</p>
              </div>
              <span className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-900/10 text-amber-900 self-start">
                Deadline: {s.deadline}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section · Help desk ── */}
      <section id="help-desk" className="scroll-mt-36 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-14">
        <div className="rounded-2xl bg-[#153B27] border-l-4 border-l-[#7F1D1D] text-white p-8 sm:p-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-6">Directorate of Admissions · Help Desk</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#C8A96E] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider font-bold">Office</p>
                <p className="text-sm text-white mt-1">Academic Block C, Charbagh Main Campus</p>
                <p className="text-xs text-white/70 mt-1">Mon–Fri · 09:00 AM – 04:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#C8A96E] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider font-bold">Phone</p>
                <p className="text-sm text-white mt-1">0946-730514 · 0946-730516</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#C8A96E] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider font-bold">Email</p>
                <p className="text-sm text-white mt-1">admissions@uswat.edu.pk</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row gap-3">
            <a
              href="https://uswat.edu.pk/downloads/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#7F1D1D] hover:bg-[#991B1B] text-white text-xs font-bold uppercase tracking-[0.1em] transition-colors"
            >
              <Download className="w-4 h-4" /> Download Admission Prospectus (PDF)
            </a>
            <Link
              href="/portal"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white/90 hover:border-[#C8A96E] hover:text-[#C8A96E] text-xs font-bold uppercase tracking-[0.1em] transition-colors"
            >
              Student Portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
