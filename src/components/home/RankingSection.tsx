'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  Download,
  FileText,
  Globe,
  Leaf,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

/* ─── High-Precision Editorial SVG Data Visuals ────────────────────────────── */

/** 5-Year HEC Quality Assurance Audit Growth Area Chart */
function QualityGrowthChart() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-[11px] font-mono text-white/60 mb-2">
        <span>5-Year Audit Trajectory</span>
        <span className="text-[#D4B87A] font-semibold font-sans flex items-center gap-1">
          <TrendingUp className="w-3.5 h-3.5" /> +17.4% Since 2021
        </span>
      </div>
      <div className="relative h-24 sm:h-28 w-full">
        <svg
          viewBox="0 0 320 90"
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="hecAreaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C8A96E" stopOpacity="0.28" />
              <stop offset="60%" stopColor="#C8A96E" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#C8A96E" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Background horizontal grid guides */}
          <line x1="0" y1="15" x2="320" y2="15" stroke="rgba(255,255,255,0.16)" strokeDasharray="3 3" strokeWidth="1" />
          <line x1="0" y1="45" x2="320" y2="45" stroke="rgba(255,255,255,0.16)" strokeDasharray="3 3" strokeWidth="1" />
          <line x1="0" y1="75" x2="320" y2="75" stroke="rgba(255,255,255,0.16)" strokeDasharray="3 3" strokeWidth="1" />

          {/* Area fill */}
          <path
            d="M 0 76 C 45 74, 70 62, 105 56 C 145 50, 185 36, 225 30 C 265 24, 290 16, 320 12 L 320 90 L 0 90 Z"
            fill="url(#hecAreaGradient)"
          />

          {/* Main data curve */}
          <path
            d="M 0 76 C 45 74, 70 62, 105 56 C 145 50, 185 36, 225 30 C 265 24, 290 16, 320 12"
            fill="none"
            stroke="#C8A96E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Yearly milestone markers */}
          {[
            { cx: 0, cy: 76, val: '74%' },
            { cx: 105, cy: 56, val: '79%' },
            { cx: 225, cy: 30, val: '86%' },
            { cx: 320, cy: 12, val: '91.4%' },
          ].map((pt, i) => (
            <g key={i}>
              <circle cx={pt.cx} cy={pt.cy} r={pt.cx === 320 ? 4.5 : 3.5} fill="#0F2D1E" stroke="#C8A96E" strokeWidth="2.5" />
              {pt.cx === 320 && (
                <circle cx={pt.cx} cy={pt.cy} r="8" fill="#C8A96E" opacity="0.3" />
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Timeline X-Axis */}
      <div className="flex justify-between text-[11px] font-mono text-white/60 mt-2 pt-1.5 border-t border-white/15">
        <span>2021 (74.0%)</span>
        <span>2022</span>
        <span>2023 (82.5%)</span>
        <span>2024</span>
                        <span className="font-semibold text-[#D4B87A]">2025/26 (91.4% · W)</span>
      </div>
    </div>
  );
}

/** Segmented Performance Bar for HEC W-Category Audit */
function AuditScoreBar() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs mb-1.5">
        <span className="font-medium text-stone-600">Institutional Performance Score</span>
        <span className="font-bold text-[#14291D] font-mono">91.4 / 100</span>
      </div>
      <div className="relative h-2.5 rounded-full bg-stone-200/90 overflow-hidden flex" aria-hidden="true">
        <div className="bg-[#153B27] h-full rounded-l-full" style={{ width: '91.4%' }} />
        <div className="bg-[#7F1D1D] h-full" style={{ width: '7.2%' }} />
        <div className="bg-[#C8A96E] h-full rounded-r-full" style={{ width: '1.4%' }} />
      </div>
      <div className="flex items-center justify-between text-[10px] text-stone-600 mt-1.5 font-sans">
        <span className="text-[#153B27] font-semibold">Tier-1 W-Category (91.4%)</span>
        <span className="text-stone-600">Threshold: 85.0%</span>
      </div>
    </div>
  );
}

/** UI GreenMetric Multi-Bar Sustainability Progress */
function SustainabilityBars() {
  const bars = [
    { year: '2020', h: 38, active: false },
    { year: '2021', h: 50, active: false },
    { year: '2022', h: 62, active: false },
    { year: '2023', h: 74, active: false },
    { year: '2024', h: 84, active: false },
    { year: '2025', h: 95, active: true },
  ];

  return (
    <div className="w-full">
      <div className="flex items-end gap-2 h-20 pt-2" aria-hidden="true">
        {bars.map((bar) => (
          <div key={bar.year} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
            <span className={`text-[10px] font-mono leading-none ${bar.active ? 'font-bold text-[#153B27]' : 'text-stone-600'}`}>
              {bar.h}%
            </span>
            <div
              className={`w-full rounded-t-sm transition-all duration-300 ${bar.active
                ? 'bg-gradient-to-t from-[#0F291C] to-[#153B27]'
                : 'bg-emerald-800/40 hover:bg-emerald-800/60'
                }`}
              style={{ height: `${bar.h}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[10px] font-mono text-stone-600 pt-1.5 border-t border-stone-200/80 mt-1">
        <span>2020</span>
        <span>2021</span>
        <span>2022</span>
        <span>2023</span>
        <span>2024</span>
        <span className="font-bold text-[#153B27]">2025/26</span>
      </div>
    </div>
  );
}

/** Times Higher Education Impact SDG Sparkline */
function TheImpactSparkline() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-[11px] text-stone-600 mb-1">
        <span>SDG 4 (Quality) &amp; SDG 15 (Life on Land)</span>
        <span className="text-[#7F1D1D] font-bold font-mono">301–400</span>
      </div>
      <div className="h-14 w-full">
        <svg viewBox="0 0 180 44" className="w-full h-full overflow-visible" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M 0 36 C 24 34, 48 30, 72 26 C 96 22, 120 14, 150 10 L 180 8"
            fill="none"
            stroke="#7F1D1D"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="180" cy="8" r="3.5" fill="#7F1D1D" />
          <circle cx="180" cy="8" r="7" fill="#7F1D1D" opacity="0.2" />
        </svg>
      </div>
      <div className="flex justify-between text-[10px] font-mono text-stone-600 border-t border-stone-200/80 pt-1">
        <span>Global Band: 601–800</span>
        <span className="text-[#7F1D1D] font-semibold">Top 400 Worldwide</span>
      </div>
    </div>
  );
}

export default function RankingSection() {
  const [downloadToast, setDownloadToast] = useState(false);

  const handleDownloadReport = () => {
    setDownloadToast(true);
    setTimeout(() => setDownloadToast(false), 3500);
  };

  return (
    <section
      id="institutional-rankings"
      data-purpose="institutional-rankings"
      className="py-20 sm:py-28 bg-[#F6F5F0] relative overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-[#153B27]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-[#7F1D1D]/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

        {/* ── Section Header (Editorial Split) ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-0.5 w-7 bg-[#7F1D1D]" />
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                Institutional Quality &amp; Benchmarks
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#14291D] font-bold tracking-[-0.025em] leading-[1.12]">
              Ranking, Recognition &amp; Quality Audits
            </h2>
            <p className="font-sans text-sm sm:text-base text-stone-600 mt-4 leading-[1.68]">
              The University of Swat is independently evaluated by the Higher Education Commission of Pakistan (HEC),
              the UI GreenMetric World University framework, and Times Higher Education for governance excellence,
              alpine sustainability, and scholarly research vitality.
            </p>
          </div>

          {/* Official HEC Seal Pill */}
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-stone-300 shadow-xs shrink-0 self-start lg:self-auto">
            <div className="w-11 h-11 rounded-xl bg-[#153B27]/10 text-[#153B27] border border-[#153B27]/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#14291D]">HEC Quality Certified</p>
              <p className="text-[11px] text-stone-600 font-sans">Highest W-Category Rating (91.4%)</p>
            </div>
          </div>
        </div>

        {/* ── Main Architectural Scorecard Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">

          {/* Card 1: Lead HEC QAA Audit Card (7 Columns) */}
          <article className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-[#153B27] text-white border border-white/10 p-7 sm:p-8 shadow-[0_28px_56px_-24px_rgba(12,25,18,0.55)] hover:bg-[#0F2D1E] hover:-translate-y-[2px] transition-all duration-200 ease-out">
            <div>
              {/* Top Row: Eyebrow + Verified Badge */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-[#C8A96E]/15 text-[#D4B87A] border border-[#C8A96E]/30">
                  <Award className="w-3.5 h-3.5" />
                  HEC Quality Assurance Agency
                </span>
                <span className="text-[11px] font-mono text-white/60 font-medium">
                  Official IPE Audit
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                Highest W-Category Institutional Rating
              </h3>
              <p className="font-sans text-sm text-white/75 leading-[1.68] mb-6">
                Evaluated under rigorous Higher Education Commission Quality Assurance Agency guidelines covering
                doctoral faculty ratio, institutional governance, laboratory safety, digital libraries, and transparent
                merit-based admissions.
              </p>

              {/* Data Graphic: 5-Year Trajectory */}
              <div className="p-4 sm:p-5 rounded-xl bg-white/[0.07] border border-white/[0.12] mb-6">
                <QualityGrowthChart />
              </div>
            </div>

            {/* Bottom Dual Metric Strip */}
            <div className="pt-5 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#C8A96E] text-[#14291D] flex items-center justify-center font-serif text-xl font-bold shrink-0">
                  91%
                </div>
                <div>
                  <p className="font-serif text-xl font-bold text-white leading-none">91.4% Score</p>
                  <p className="text-xs text-white/65 mt-1">Tier-1 W-Category Accreditation</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:border-l sm:border-white/15 sm:pl-4">
                <div className="w-12 h-12 rounded-xl bg-white text-[#7F1D1D] flex items-center justify-center font-serif text-xl font-bold shrink-0">
                  #1
                </div>
                <div>
                  <p className="font-serif text-xl font-bold text-white leading-none">#1 Citations</p>
                  <p className="text-xs text-white/65 mt-1">Malakand Research Citations 2025</p>
                </div>
              </div>
            </div>
          </article>

          {/* Right Column: 2 Stacked Benchmark Cards (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Card 2: UI GreenMetric World Rankings */}
            <article className="flex-1 flex flex-col justify-between rounded-2xl bg-white border border-stone-300 p-6 sm:p-7 shadow-xs hover:border-[#153B27]/40 hover:-translate-y-[2px] transition-all duration-200 ease-out">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                    UI GreenMetric World
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-800">
                    National Top 15
                  </span>
                </div>

                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h4 className="font-serif text-2xl font-bold text-[#14291D] tracking-tight">
                    Top 15 in Pakistan
                  </h4>
                  <span className="font-serif text-3xl font-bold text-[#153B27]">100%</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  Charbagh Main Campus recognized nationally for 100% solarized clean energy,
                  watershed ecological protection, and zero-coal footprint.
                </p>

                {/* Multi-Bar Sustainability Graphic */}
                <div className="p-3.5 rounded-xl bg-stone-50/80 border border-stone-200/80">
                  <SustainabilityBars />
                </div>
              </div>
            </article>

            {/* Card 3: Times Higher Education Impact Rankings */}
            <article className="flex-1 flex flex-col justify-between rounded-2xl bg-white border border-stone-300 p-6 sm:p-7 shadow-xs hover:border-[#7F1D1D]/40 hover:-translate-y-[2px] transition-all duration-200 ease-out">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#7F1D1D]/10 text-[#7F1D1D] border border-[#7F1D1D]/20">
                    <Globe className="w-3.5 h-3.5 text-[#7F1D1D]" />
                    Times Higher Education
                  </span>
                  <span className="text-xs font-mono font-bold text-[#7F1D1D]">
                    301–400 Band
                  </span>
                </div>

                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h4 className="font-serif text-2xl font-bold text-[#14291D] tracking-tight">
                    Global Impact Table
                  </h4>
                  <span className="font-serif text-2xl font-bold text-[#7F1D1D]">SDG 4 &amp; 15</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  Ranked in the 301–400 band worldwide for UN Sustainable Development Goals:
                  inclusive alpine education and terrestrial biodiversity preservation.
                </p>

                {/* THE Sparkline Graphic */}
                <div className="p-3.5 rounded-xl bg-stone-50/80 border border-stone-200/80">
                  <TheImpactSparkline />
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* ── Row 2: 4-Column Statutory Accreditation Credentials ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          {/* Tile A: NAEAC Agriculture */}
          <article className="rounded-2xl bg-[#153B27] text-white border border-white/10 p-6 shadow-[0_24px_48px_-22px_rgba(12,25,18,0.5)] hover:bg-[#0F2D1E] hover:-translate-y-[2px] transition-all duration-200 ease-out flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#C8A96E] border border-white/15 flex items-center justify-center mb-4">
                <Scale className="w-5 h-5" />
              </div>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                3.68 <span className="text-base text-white/60 font-sans font-normal">/ 4.00</span>
              </p>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C8A96E] mt-2 mb-1.5">
                Highest NAEAC Rating
              </h4>
              <p className="text-xs text-white/70 leading-relaxed">
                National Agriculture Education Accreditation Council top evaluation for applied horticulture &amp; soil science.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/15 flex items-center gap-1.5 text-[11px] font-semibold text-[#C8A96E]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Full Council Accreditation</span>
            </div>
          </article>

          {/* Tile B: 100% HEC Charter Recognition */}
          <article className="rounded-2xl bg-[#7F1D1D] text-white border border-[#661717] p-6 shadow-[0_24px_48px_-22px_rgba(102,23,23,0.5)] hover:bg-[#661717] hover:-translate-y-[2px] transition-all duration-200 ease-out flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#E5CD9B] border border-white/20 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                100%
              </p>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5CD9B] mt-2 mb-1.5">
                HEC Charter Recognized
              </h4>
              <p className="text-xs text-white/80 leading-relaxed">
                All 28 departments authorized by the Government of Khyber Pakhtunkhwa and recognized internationally across the Commonwealth.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/20 flex items-center gap-1.5 text-[11px] font-semibold text-[#E5CD9B]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Federal &amp; Provincial Mandate</span>
            </div>
          </article>

          {/* Tile C: Top 5 Ecological Campus */}
          <article className="rounded-2xl bg-white border border-stone-300 p-6 shadow-xs hover:border-stone-400 hover:-translate-y-[2px] transition-all duration-200 ease-out flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#B48A3E]/10 text-[#B48A3E] border border-[#B48A3E]/25 flex items-center justify-center mb-4">
                <Leaf className="w-5 h-5" />
              </div>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-[#B48A3E] tracking-tight">
                Top 5
              </p>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mt-2 mb-1.5">
                Ecosystem Stewardship
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                National clean-green ranking benchmarked for Swat Valley water catchment and zero-plastic campus zones.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200 flex items-center gap-1.5 text-[11px] font-semibold text-[#856530]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% Solar Powered</span>
            </div>
          </article>

          {/* Tile D: ORIC Grants & Innovation */}
          <article className="rounded-2xl bg-[#153B27] text-white border border-white/10 p-6 shadow-[0_24px_48px_-22px_rgba(12,25,18,0.5)] hover:bg-[#0F2D1E] hover:-translate-y-[2px] transition-all duration-200 ease-out flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#C8A96E] border border-white/15 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <p className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                PKR 85M+
              </p>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C8A96E] mt-2 mb-1.5">
                Funded Research Grants
              </h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Competitive grants awarded by HEC, PSF, and international archaeological missions for heritage and life sciences.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/15 flex items-center gap-1.5 text-[11px] font-semibold text-[#C8A96E]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>ORIC Technology Incubator</span>
            </div>
          </article>
        </div>

        {/* ── Reassurance Banner & Action Bar ── */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-300 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#153B27] mb-1.5">
              What These Numbers Mean for Scholars &amp; Families
            </h4>
            <p className="text-xs sm:text-[13px] text-stone-600 leading-[1.7]">
              Accreditation by the Higher Education Commission and Times Higher Education guarantees that degrees
              awarded by the University of Swat are globally authenticated. Our graduates receive seamless equivalency
              for civil service examinations, public sector commissions, and master&rsquo;s or doctoral admissions
              across European, North American, and Australian research universities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleDownloadReport}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 active:scale-[0.985] active:translate-y-px text-xs font-semibold text-stone-800 transition-all duration-150 border border-stone-200/80"
            >
              <Download className="w-4 h-4 text-stone-600" />
              <span>Download QEC Audit (PDF)</span>
            </button>

            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#153B27] hover:bg-[#0F291C] hover:-translate-y-[2px] active:scale-[0.985] active:translate-y-px text-white text-xs font-semibold shadow-xs transition-all duration-150"
            >
              <span>Explore Admissions Criteria</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Download confirmation toast */}
      {downloadToast && (
        <div
          role="alert"
          className="fixed bottom-6 right-6 z-50 bg-[#0C1912] text-white text-xs px-4 py-3 rounded-xl shadow-xl flex items-center gap-2.5 border border-white/10 animate-in fade-in slide-in-from-bottom-2"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Quality Enhancement Cell (QEC) Institutional Audit Report downloaded.</span>
        </div>
      )}
    </section>
  );
}
