'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  Download,
  GraduationCap,
  Layers,
  MapPin,
  Search,
  X,
} from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { allDepartments, facultiesCatalog, type FacultyDepartment } from '@/data/departmentsData';
import { programsDetailCatalog } from '@/data/programsDetailData';

const FACULTY_TABS = [
  { id: 'all', label: 'All Faculties' },
  { id: 'physical-computational-sciences', label: 'Physical & Computational' },
  { id: 'chemical-life-sciences', label: 'Chemical & Life' },
  { id: 'allied-health-sciences', label: 'Allied Health' },
  { id: 'management-social-sciences', label: 'Management & Social' },
  { id: 'languages-humanities-law', label: 'Languages, Hum. & Law' },
] as const;

const facultyProgramCount = (slug: string) => {
  if (slug === 'all') {
    return allDepartments.reduce((sum, d) => sum + d.programsOffered.length, 0);
  }
  const cat = facultiesCatalog.find((f) => f.slug === slug);
  return cat ? cat.departments.reduce((sum, d) => sum + d.programsOffered.length, 0) : 0;
};

/** Pill style for the faculty-grouped directory cards (forest / crimson / amber). */
const degreePillClass = (prog: string) => {
  const lower = prog.toLowerCase();
  if (lower.includes('phd') || lower.includes('ph.d') || lower.includes('doctorate')) {
    return 'border-[#C8A96E]/70 bg-amber-900/10 text-amber-900';
  }
  if (
    lower.startsWith('ms') ||
    lower.startsWith('mphil') ||
    lower.startsWith('m.phil') ||
    lower.startsWith('mba') ||
    lower.startsWith('llm') ||
    lower.startsWith('master')
  ) {
    return 'border-[#E4C6C6] bg-[#7F1D1D]/10 text-[#7F1D1D]';
  }
  return 'border-[#C9D6C2] bg-[#153B27]/10 text-[#153B27]';
};

/** Resolve a degree title to a flagship detail route slug when one exists. */
const resolveSlug = (progTitle: string): string | undefined => {
  const norm = progTitle.toLowerCase();
  const found = programsDetailCatalog.find(
    (p) =>
      norm.includes(p.slug.replace(/-/g, ' ')) ||
      norm.includes(p.name.toLowerCase()) ||
      p.name.toLowerCase().includes(norm.split('(')[0].trim())
  );
  return found?.slug;
};

type DegreeLevelFilter = 'all' | 'undergraduate' | 'graduate' | 'doctorate';

interface DegreeModalData {
  title: string;
  level: string;
  duration: string;
  creditHours: number;
  departmentName: string;
  departmentId: string;
  facultyGroup: string;
  campus: string;
  description: string;
  eligibility: string;
  feePerSemester: string;
  learningOutcomes: string[];
  careerProspects: string[];
  semesterOutline: { semester: string; courses: string[] }[];
}

export default function ProgramsPage() {
  const router = useRouter();

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<DegreeLevelFilter>('all');
  const [selectedFaculty, setSelectedFaculty] = useState<string>('all');

  // Modal / Drawer State
  const [selectedProgram, setSelectedProgram] = useState<DegreeModalData | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  // DOM refs for keyboard shortcut + focus management
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const drawerRef = React.useRef<HTMLDivElement>(null);
  const lastFocusedRef = React.useRef<HTMLElement | null>(null);

  // Keyboard: "/" focuses search, Escape closes drawer, Tab stays inside drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const inEditable =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        (target instanceof HTMLElement && target.isContentEditable);

      if (e.key === '/' && !inEditable) {
        e.preventDefault();
        searchInputRef.current?.focus();
        return;
      }

      if (!selectedProgram) return;

      if (e.key === 'Escape') {
        setSelectedProgram(null);
        return;
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProgram]);

  // Lock body scroll + manage focus while drawer is open
  useEffect(() => {
    if (selectedProgram) {
      lastFocusedRef.current = document.activeElement as HTMLElement | null;
      document.body.style.overflow = 'hidden';
      const focusTimer = window.setTimeout(() => drawerRef.current?.focus(), 60);
      return () => {
        window.clearTimeout(focusTimer);
        document.body.style.overflow = '';
        lastFocusedRef.current?.focus?.();
      };
    }
    return;
  }, [selectedProgram]);

  // Helper to resolve detailed degree data
  const openProgramModal = (progTitle: string, dept: FacultyDepartment) => {
    // Check if it matches a flagship program
    const norm = progTitle.toLowerCase();
    const flagship = programsDetailCatalog.find(
      (p) =>
        norm.includes(p.slug.replace(/-/g, ' ')) ||
        norm.includes(p.name.toLowerCase()) ||
        p.name.toLowerCase().includes(norm.split('(')[0].trim())
    );

    if (flagship) {
      setSelectedProgram({
        title: flagship.name,
        level: flagship.degreeLevel,
        duration: flagship.duration,
        creditHours: flagship.creditHours,
        departmentName: flagship.departmentName,
        departmentId: flagship.departmentId,
        facultyGroup: flagship.facultyGroup,
        campus: dept.campus || 'Charbagh Main Campus',
        description: flagship.description,
        eligibility: flagship.eligibility,
        feePerSemester: flagship.feePerSemester,
        learningOutcomes: flagship.learningOutcomes,
        careerProspects: flagship.careerProspects,
        semesterOutline: flagship.semesterOutline,
      });
      return;
    }

    // Determine degree characteristics dynamically
    const isDoc = norm.includes('phd') || norm.includes('doctorate') || norm.includes('ph.d');
    const isGrad =
      norm.includes('ms') ||
      norm.includes('mphil') ||
      norm.includes('m.phil') ||
      norm.includes('mba') ||
      norm.includes('llm') ||
      norm.includes('master');
    const isDpt = norm.includes('dpt') || norm.includes('doctor of physical therapy');
    const isLlb = norm.includes('llb') || norm.includes('law');

    let level = 'Undergraduate (BS / Professional)';
    let duration = '4 Years (8 Semesters)';
    let credits = 132;
    let fee = 'PKR 34,500 (Open Merit) / PKR 54,000 (Self-Finance)';
    let eligibility = 'Intermediate (F.Sc / FA / ICS) with minimum 45%–50% marks in relevant subjects.';
    let semCount = 8;

    if (isDoc) {
      level = 'Doctoral (PhD)';
      duration = '3–5 Years (6–10 Semesters)';
      credits = 48;
      fee = 'PKR 48,000 / Semester';
      eligibility = '18 Years of Education (MS / M.Phil) with minimum 3.00/4.00 CGPA and valid GAT Subject / University Entry Test score (60%).';
      semCount = 4;
    } else if (isGrad) {
      level = 'Graduate (MS / MPhil)';
      duration = '2 Years (4 Semesters)';
      credits = 30;
      fee = 'PKR 42,000 / Semester';
      eligibility = '16 Years of Education (BS 4-Year or Master 2-Year) with minimum 2.50/4.00 CGPA and valid GAT General / Entry Test (50%).';
      semCount = 4;
    } else if (isDpt) {
      level = 'Undergraduate (Professional 5-Year)';
      duration = '5 Years (10 Semesters)';
      credits = 175;
      fee = 'PKR 45,000 (Open Merit) / PKR 75,000 (Self-Finance)';
      eligibility = 'Intermediate (F.Sc Pre-Medical) with minimum 60% marks as per PMC/HEC guidelines.';
      semCount = 10;
    } else if (isLlb) {
      level = 'Undergraduate (Law 5-Year)';
      duration = '5 Years (10 Semesters)';
      credits = 166;
      fee = 'PKR 38,000 / Semester';
      eligibility = 'Intermediate (F.A / F.Sc / ICS) with minimum 45% marks and valid LAT (Law Admission Test) score (50%).';
      semCount = 10;
    }

    const generatedSemesters = Array.from({ length: semCount }, (_, i) => {
      const semNum = i + 1;
      return {
        semester: `Semester ${semNum}`,
        courses: [
          `${dept.name.replace('Department of ', '').replace('Institute of ', '')} Core Course ${semNum}.1`,
          `Applied Discipline Lab / Seminar ${semNum}.2`,
          `Quantitative Analytics & Research Methods ${semNum}.3`,
          `University Breadth Elective ${semNum}.4`,
          semNum >= semCount - 1
            ? `Final Year Capstone Research & Viva ${semNum}.5`
            : `Specialized Track Elective ${semNum}.5`,
        ],
      };
    });

    setSelectedProgram({
      title: progTitle,
      level,
      duration,
      creditHours: credits,
      departmentName: dept.name,
      departmentId: dept.id,
      facultyGroup: dept.facultyGroup,
      campus: dept.campus || 'Charbagh Main Campus',
      description: `${progTitle} offered by the ${dept.name} provides students with rigorous academic foundations, state-of-the-art laboratory/practical experience, and mentorship under esteemed faculty.`,
      eligibility,
      feePerSemester: fee,
      learningOutcomes: [
        `Demonstrate comprehensive theoretical and applied mastery in ${dept.name}.`,
        'Formulate scientific inquiry and evidence-based problem-solving strategies.',
        'Communicate scholarly findings effectively across professional, industrial, and academic forums.',
        'Adhere to high ethical standards, regional development ethics, and professional codes of conduct.',
      ],
      careerProspects: [
        'Academia, Research Institutes & Higher Education',
        'Provincial & Federal Civil Services (CSS/PMS)',
        'Industry & Corporate Sector Specialists',
        'National and International Development Organizations / NGOs',
      ],
      semesterOutline: generatedSemesters,
    });
  };

  // Trigger Scheme of Studies PDF Download Simulation
  const handleDownloadScheme = (programName: string) => {
    setDownloadToast(`Generating official Scheme of Studies PDF for ${programName}...`);
    setTimeout(() => {
      setDownloadToast(`Scheme of Studies (${programName}) downloaded successfully.`);
      setTimeout(() => setDownloadToast(null), 3500);
    }, 1200);
  };

  // Helper to test if a program string matches the selected degree level
  const matchesDegreeLevel = (progStr: string, level: DegreeLevelFilter) => {
    if (level === 'all') return true;
    const lower = progStr.toLowerCase();
    if (level === 'undergraduate') {
      return (
        lower.startsWith('bs') ||
        lower.startsWith('bba') ||
        lower.startsWith('llb') ||
        lower.startsWith('doctor of') ||
        lower.startsWith('dpt') ||
        lower.startsWith('diploma')
      );
    }
    if (level === 'graduate') {
      return (
        lower.startsWith('ms') ||
        lower.startsWith('mphil') ||
        lower.startsWith('m.phil') ||
        lower.startsWith('mba') ||
        lower.startsWith('llm') ||
        lower.startsWith('master')
      );
    }
    if (level === 'doctorate') {
      return lower.startsWith('phd') || lower.startsWith('ph.d') || lower.includes('phd');
    }
    return true;
  };

  // Filtered Departments
  const filteredDepartments = useMemo(() => {
    return allDepartments.filter((dept) => {
      // 1. Faculty Filter
      if (selectedFaculty !== 'all') {
        const cat = facultiesCatalog.find((f) => f.slug === selectedFaculty);
        if (cat && !cat.departments.some((d) => d.id === dept.id)) {
          return false;
        }
      }

      // 2. Degree Level Filter
      const hasMatchingLevel = dept.programsOffered.some((p) =>
        matchesDegreeLevel(p, selectedLevel)
      );
      if (!hasMatchingLevel) return false;

      // 3. Search Query
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const inName = dept.name.toLowerCase().includes(q);
      const inAims = dept.aims.toLowerCase().includes(q);
      const inCampus = dept.campus.toLowerCase().includes(q);
      const inFaculty = dept.facultyGroup.toLowerCase().includes(q);
      const inProgs = dept.programsOffered.some((p) => p.toLowerCase().includes(q));

      return inName || inAims || inCampus || inFaculty || inProgs;
    });
  }, [selectedFaculty, selectedLevel, searchQuery]);

  // Total program count matching current filters
  const totalProgramsCount = useMemo(() => {
    let count = 0;
    filteredDepartments.forEach((d) => {
      count += d.programsOffered.filter((p) => matchesDegreeLevel(p, selectedLevel)).length;
    });
    return count;
  }, [filteredDepartments, selectedLevel]);

  // Verified catalog totals (static, computed from the data store)
  const programsTotal = useMemo(
    () => allDepartments.reduce((sum, d) => sum + d.programsOffered.length, 0),
    []
  );

  return (
    <main id="main-content" className="bg-[#F6F5F0] min-h-screen text-[#14291D]">
      {/* ─── Hero Header & Academic Fact Strip (Deep Forest Green) ─── */}
      <PageHeader
        eyebrow="Academic Programs &amp; Schemes of Study"
        title="Degrees &amp; Curricula"
        description="HEC-recognized undergraduate, master's, and doctoral degrees across five faculties — from Charbagh Main Campus to the Women Campus and Shangla."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Programs' },
        ]}
        backgroundImage="/campus-main.jpg"
      >
        {/* Verified institutional fact strip — reads as one line with hairline dividers */}
        <dl className="flex flex-wrap items-stretch border-t border-white/15 pt-6 sm:pt-7 gap-y-4">
          {[
            { value: '05', label: 'Faculties' },
            { value: '20', label: 'Teaching Departments' },
            { value: String(programsTotal), label: 'Degree Tracks' },
            { value: '03', label: 'Campuses' },
            { value: 'HEC', label: 'Recognized Programs' },
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
              <dd className="order-1 font-serif text-2xl sm:text-3xl lg:text-4xl text-[#D4B87A] font-bold leading-none tabular-nums">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      {/* ─── Program Finder Bar (Overlaps header with Crimson top accent) ─── */}
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 -mt-10 sm:-mt-12 relative z-20">
        <div
          role="search"
          aria-label="Filter degree programs"
          className="bg-white border border-stone-300 border-t-4 border-t-[#7F1D1D] rounded-2xl p-4 sm:p-5 shadow-[0_24px_50px_-22px_rgba(12,25,18,0.45)] flex flex-col lg:flex-row lg:items-center gap-4"
        >
          {/* Left: Instant Search Input */}
          <div className="relative min-w-0 flex-1">
            <Search className="w-4 h-4 text-stone-600 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search degrees or departments — try “Chemistry”…"
              aria-label="Search degree programs, departments, or disciplines"
              className="w-full pl-11 pr-16 lg:pr-14 h-12 rounded-xl bg-stone-50 border border-stone-300 text-sm text-[#14291D] placeholder:text-stone-600 placeholder:truncate focus:outline-none focus:ring-2 focus:ring-[#153B27] focus:border-transparent focus:bg-white transition-all"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-stone-600 hover:text-stone-800 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <kbd
                aria-hidden="true"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 items-center justify-center text-[11px] font-sans font-bold text-stone-600 bg-white border border-stone-300 rounded-md shadow-[0_1px_0_0_#e7e5e4] hidden lg:flex pointer-events-none"
              >
                /
              </kbd>
            )}
          </div>

          {/* Right: Segmented Degree-Level Filter Pills */}
          <div
            role="group"
            aria-label="Filter by degree level"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100/90 rounded-xl shrink-0 self-start xl:self-auto"
          >
            {[
              { id: 'all', label: 'All Levels' },
              { id: 'undergraduate', label: 'Undergraduate' },
              { id: 'graduate', label: 'Graduate' },
              { id: 'doctorate', label: 'Doctorate' },
            ].map((lvl) => {
              const isActive = selectedLevel === lvl.id;
              return (
                <button
                  key={lvl.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSelectedLevel(lvl.id as DegreeLevelFilter)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.98] min-h-[40px] ${
                    isActive
                      ? 'bg-[#153B27] text-white shadow-sm'
                      : 'text-stone-600 hover:text-[#14291D] hover:bg-white/70'
                  }`}
                >
                  {lvl.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Metrics & Results Readout */}
        <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 px-1">
          <span className="font-medium" aria-live="polite">
            Showing{' '}
            <strong className="text-[#14291D] font-bold tabular-nums">{filteredDepartments.length}</strong>{' '}
            departments &bull;{' '}
            <strong className="text-[#153B27] font-bold tabular-nums">{totalProgramsCount}</strong> degree tracks
          </span>
          {(searchQuery || selectedLevel !== 'all' || selectedFaculty !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedLevel('all');
                setSelectedFaculty('all');
              }}
              className="text-[#7F1D1D] hover:text-[#661717] underline underline-offset-2 decoration-[#7F1D1D]/30 hover:decoration-[#7F1D1D] font-semibold transition-colors active:scale-[0.985]"
            >
              Reset All Filters
            </button>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-20 space-y-20">
        {/* ─── Interactive Faculty Directory ─── */}
        <section id="faculty-directory" aria-labelledby="directory-heading">
          {/* Section Heading */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-0.5 w-6 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-[0.18em] text-[#153B27] font-bold">
                  Academic Faculties &amp; Teaching Departments
                </span>
              </div>
              <h2
                id="directory-heading"
                className="font-serif text-3xl sm:text-4xl text-[#14291D] font-bold tracking-[-0.02em]"
              >
                Comprehensive Degree Directory
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md sm:text-right leading-relaxed">
              Filter by faculty, then click any degree tag for the full syllabus — eligibility, fees, and outcomes.
            </p>
          </div>

          {/* Faculty Filter Tabs (wrap on mobile so every tab is visible & tappable) */}
          <div
            className="flex flex-wrap items-center gap-2 pb-4 mb-6"
            role="group"
            aria-label="Filter by faculty"
          >
            {FACULTY_TABS.map((fac) => {
              const isActive = selectedFaculty === fac.id;
              const count = facultyProgramCount(fac.id);
              return (
                <button
                  key={fac.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSelectedFaculty(fac.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-[11px] font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.985] ${
                    isActive
                      ? 'bg-[#153B27] text-white shadow-sm'
                      : 'bg-white border border-stone-300 text-stone-600 hover:text-[#14291D] hover:border-stone-400'
                  }`}
                >
                  <span>{fac.label}</span>
                  <span
                    className={`text-[10px] font-bold tabular-nums px-1.5 py-0.5 rounded-md ${
                      isActive ? 'bg-white/15 text-[#E5CD9B]' : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

                    {/* Directory legend (degree tiers) */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-6 px-1 text-[10px] text-stone-600">
            <span className="uppercase tracking-[0.16em] font-bold text-stone-600">Key</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-[2px] bg-[#153B27]/10 border border-[#C9D6C2]" /> Undergraduate</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-[2px] bg-[#7F1D1D]/10 border border-[#E4C6C6]" /> Graduate</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-[2px] bg-amber-900/10 border border-[#C8A96E]/70" /> Doctorate</span>
          </div>

          {filteredDepartments.length === 0 ? (
            <div className="p-12 sm:p-16 text-center space-y-4 bg-white border border-stone-300 rounded-2xl shadow-xs">
              <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-600 mx-auto flex items-center justify-center">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-800">No Matching Degree Programs Found</h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                We could not find any programs matching &ldquo;{searchQuery}&rdquo; in the selected
                faculty or degree level filter. Try broadening your search or resetting filters.
              </p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSelectedFaculty('all'); setSelectedLevel('all'); }}
                className="px-6 py-3 rounded-xl bg-[#153B27] hover:bg-[#0F2D1E] text-white text-[11px] font-bold uppercase tracking-[0.12em] min-h-[44px] transition-all active:scale-[0.985]"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="space-y-10">
              {facultiesCatalog.map((fac, fi) => {
                const depts = filteredDepartments.filter((d) =>
                  fac.departments.some((fd) => fd.id === d.id)
                );
                if (depts.length === 0) return null;
                let degreeTotal = 0;
                depts.forEach((d) => {
                  degreeTotal += d.programsOffered.filter((p) => matchesDegreeLevel(p, selectedLevel)).length;
                });
                const dark = fi % 2 === 0;
                return (
                  <div key={fac.slug}>
                    <div className={`${dark ? 'bg-[#153B27]' : 'bg-[#7F1D1D]'} text-white rounded-t-2xl px-6 py-4 flex flex-wrap items-center justify-between gap-3`}>
                      <div>
                        <h3 className="font-serif text-xl font-bold">{fac.name}</h3>
                        <p className="text-xs text-white/75 mt-0.5">{depts.length} Departments · {degreeTotal} Degree Tracks</p>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/10 border border-white/20">{degreeTotal} Programs</span>
                    </div>
                    <div className="bg-white border border-t-0 border-stone-200 rounded-b-2xl p-5 sm:p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {depts.map((dept) => {
                          const visible = dept.programsOffered.filter((p) => matchesDegreeLevel(p, selectedLevel));
                          return (
                            <article
                              key={dept.id}
                              role="link"
                              tabIndex={0}
                              onClick={() => router.push(`/departments/${dept.id}`)}
                              onKeyDown={(e) => {
                                if ((e.key === 'Enter' || e.key === ' ') && !(e.target as HTMLElement).closest('a,button')) {
                                  e.preventDefault();
                                  router.push(`/departments/${dept.id}`);
                                }
                              }}
                              className="bg-white border border-stone-200 hover:border-[#153B27] rounded-xl p-5 shadow-xs transition-colors flex flex-col cursor-pointer group"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                  <Link
                                    href={`/departments/${dept.id}`}
                                    onClick={(e) => e.stopPropagation()}
                                    className="font-bold text-stone-900 hover:text-[#153B27] leading-snug transition-colors block"
                                  >
                                    {dept.name}
                                  </Link>
                                  <span className="inline-flex items-center gap-1 text-[11px] text-stone-600 mt-1.5">
                                    <MapPin className="w-3.5 h-3.5 text-[#153B27]" />
                                    {dept.campus}
                                  </span>
                                </div>
                                <Link
                                  href={`/departments/${dept.id}`}
                                  onClick={(e) => e.stopPropagation()}
                                  className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-[#7F1D1D] hover:text-[#661717] transition-colors whitespace-nowrap"
                                >
                                  Deptt. Profile
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>
                              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-stone-100">
                                {visible.map((prog) => {
                                  const slug = resolveSlug(prog);
                                  const pillCls = degreePillClass(prog);
                                  return slug ? (
                                    <Link
                                      key={prog}
                                      href={`/programs/${slug}`}
                                      onClick={(e) => e.stopPropagation()}
                                      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-[11px] font-semibold border ${pillCls} transition-transform active:scale-[0.98]`}
                                    >
                                      {prog}
                                    </Link>
                                  ) : (
                                    <button
                                      key={prog}
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        openProgramModal(prog, dept);
                                      }}
                                      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-[11px] font-semibold border ${pillCls} transition-transform active:scale-[0.98]`}
                                    >
                                      {prog}
                                    </button>
                                  );
                                })}
                              </div>
                            </article>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}        </section>
      </div>

      {/* ─── Interactive Syllabus Slide-Over Drawer ─── */}
      {selectedProgram && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-title"
          className="fixed inset-0 z-50 overflow-hidden"
        >
          {/* Backdrop */}
          <div
            aria-hidden="true"
            onClick={() => setSelectedProgram(null)}
            className="absolute inset-0 bg-[#0C1912]/70 backdrop-blur-[3px] animate-backdrop-fade"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
            <div
              ref={drawerRef}
              tabIndex={-1}
              className="w-screen max-w-2xl bg-[#F6F5F0] shadow-2xl border-l border-[#C8A96E]/30 flex flex-col overflow-hidden outline-none animate-drawer-in"
            >
              {/* Drawer Header — Deep Forest Green spec sheet */}
              <div className="relative bg-[#153B27] text-white border-b border-[#0C1912] px-6 sm:px-8 pt-6 sm:pt-7 pb-6 shrink-0">
                {/* Gold hairline rule */}
                <div aria-hidden="true" className="absolute top-0 left-0 h-[3px] w-24 bg-[#C8A96E]" />

                <button
                  type="button"
                  onClick={() => setSelectedProgram(null)}
                  aria-label="Close syllabus drawer"
                  className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white/85 hover:text-white transition-colors active:scale-95"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="pr-14 space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.18em] bg-[#C8A96E] text-[#14291D]">
                      {selectedProgram.level}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.14em] text-white/60 font-semibold">
                      {selectedProgram.facultyGroup}
                    </span>
                  </div>

                  <h3
                    id="drawer-title"
                    className="font-serif text-2xl sm:text-[1.75rem] font-bold text-white leading-[1.12] tracking-[-0.01em]"
                  >
                    {selectedProgram.title}
                  </h3>

                  <p className="text-[11px] text-white/75 font-medium flex items-center gap-2 flex-wrap">
                    <Building2 className="w-3.5 h-3.5 text-[#D4B87A]" />
                    <span>{selectedProgram.departmentName}</span>
                    <span aria-hidden="true" className="text-white/30">&bull;</span>
                    <span className="text-[#D4B87A]">{selectedProgram.campus}</span>
                  </p>
                </div>
              </div>

              {/* Spec strip — single hairline row, no nested boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-stone-200 bg-white divide-x divide-stone-200 shrink-0">
                {[
                  { label: 'Duration', value: selectedProgram.duration.replace(/\s*\(.*?\)\s*/g, '').trim() || selectedProgram.duration },
                  { label: 'Credit Hours', value: `${selectedProgram.creditHours} Credits` },
                  { label: 'Accreditation', value: 'HEC Recognized' },
                  { label: 'Open Merit Fee', value: selectedProgram.feePerSemester.split('/')[0].trim() },
                ].map((spec) => (
                  <div key={spec.label} className="px-4 py-3.5 sm:py-4">
                    <span className="text-[9px] uppercase font-bold tracking-[0.16em] text-stone-600 block mb-1">
                      {spec.label}
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold text-[#14291D] leading-tight block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Drawer Body — scrollable spec sheet */}
              <div className="flex-1 overflow-y-auto custom-scroll bg-[#F6F5F0]">
                <div className="px-6 sm:px-8 py-6 sm:py-7 space-y-7">
                  {/* 1. Description */}
                  <section>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#153B27] mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4" />
                      <span>Curricular Scope &amp; Focus</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {selectedProgram.description}
                    </p>
                  </section>

                  {/* 2. Eligibility — single callout with gold rule, no heavy amber box */}
                  <section className="relative pl-5 py-1 border-l-2 border-[#C8A96E]">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7A5A1E] mb-1.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#B48A3E]" />
                      <span>Eligibility Criteria</span>
                    </h4>
                    <p className="text-xs sm:text-[13px] text-stone-700 leading-relaxed">
                      {selectedProgram.eligibility}
                    </p>
                  </section>

                  {/* 3. Semester-by-Semester Scheme of Studies */}
                  <section>
                    <div className="flex items-end justify-between gap-3 mb-3">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#153B27] flex items-center gap-1.5">
                        <Layers className="w-4 h-4" />
                        <span>Semester Roadmap &amp; Course Structure</span>
                      </h4>
                      <span className="text-[10px] uppercase tracking-[0.14em] text-stone-600 font-bold tabular-nums whitespace-nowrap">
                        {selectedProgram.semesterOutline.length} Terms
                      </span>
                    </div>

                    <ol className="border border-stone-200 rounded-xl overflow-hidden divide-y divide-stone-200 bg-white">
                      {selectedProgram.semesterOutline.map((term, tIdx) => (
                        <li key={tIdx} className="grid grid-cols-[auto_1fr] gap-4 sm:gap-5 p-4">
                          <div className="flex flex-col items-center pt-0.5">
                            <span
                              aria-hidden="true"
                              className="font-serif text-base sm:text-lg font-bold text-[#153B27] tabular-nums leading-none"
                            >
                              {String(tIdx + 1).padStart(2, '0')}
                            </span>
                            <span className="mt-1.5 w-px flex-1 bg-stone-200" aria-hidden="true" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-baseline justify-between gap-3 mb-1.5">
                              <span className="text-xs sm:text-[13px] font-bold text-[#14291D] leading-snug">
                                {term.semester}
                              </span>
                              <span className="text-[9px] uppercase tracking-[0.14em] font-bold text-stone-600 tabular-nums shrink-0">
                                {term.courses.length} Courses
                              </span>
                            </div>
                            <ul className="text-[11px] text-stone-600 leading-snug flex flex-wrap gap-x-3 gap-y-1">
                              {term.courses.map((course, cIdx) => (
                                <li key={cIdx} className="flex items-start gap-1.5">
                                  <span aria-hidden="true" className="text-[#D4B87A] font-bold">&mdash;</span>
                                  <span>{course}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </section>

                  {/* 4. Career Opportunities */}
                  <section>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#153B27] mb-2 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4" />
                      <span>Graduate Outcomes &amp; Career Trajectories</span>
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-stone-700">
                      {selectedProgram.careerProspects.map((career, i) => (
                        <li key={i} className="flex items-start gap-2 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#153B27] shrink-0 mt-0.5" />
                          <span>{career}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="px-5 sm:px-6 py-4 bg-white border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() => handleDownloadScheme(selectedProgram.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-stone-100 border border-stone-300 text-stone-800 text-[11px] font-bold uppercase tracking-[0.1em] min-h-[44px] transition-all active:scale-[0.985]"
                >
                  <Download className="w-4 h-4 text-[#7F1D1D]" />
                  <span>Download Scheme of Studies</span>
                </button>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Link
                    href={`/departments/${selectedProgram.departmentId}`}
                    className="flex-1 sm:flex-initial text-center px-4 py-3 rounded-xl border border-stone-300 text-[11px] font-bold uppercase tracking-[0.1em] text-stone-700 hover:bg-stone-50 hover:border-stone-400 min-h-[44px] inline-flex items-center justify-center transition-all active:scale-[0.985]"
                  >
                    Dept. Profile
                  </Link>

                  <Link
                    href="/admissions"
                    className="flex-1 sm:flex-initial text-center px-5 py-3 rounded-xl bg-[#7F1D1D] hover:bg-[#661717] text-white text-[11px] font-bold uppercase tracking-[0.1em] min-h-[44px] inline-flex items-center justify-center shadow-[0_10px_24px_-12px_rgba(127,29,29,0.6)] transition-all active:scale-[0.985]"
                  >
                    Apply Fall 2026
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toast Feedback */}
      {downloadToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-[#0C1912] text-white px-5 py-3 rounded-xl shadow-2xl border border-[#C8A96E]/30 text-xs font-semibold flex items-center gap-2.5 animate-toast-in"
        >
          <Download className="w-4 h-4 text-[#D4B87A]" />
          <span>{downloadToast}</span>
        </div>
      )}
    </main>
  );
}
