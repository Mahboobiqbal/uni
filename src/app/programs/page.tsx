'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Download,
  FileText,
  Filter,
  GraduationCap,
  Layers,
  MapPin,
  Printer,
  Search,
  Sparkles,
  X,
} from 'lucide-react';
import { allDepartments, facultiesCatalog, type FacultyDepartment } from '@/data/departmentsData';
import { programsDetailCatalog, type ProgramDetail } from '@/data/programsDetailData';

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
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<DegreeLevelFilter>('all');
  const [selectedFaculty, setSelectedFaculty] = useState<string>('all');

  // Modal / Drawer State
  const [selectedProgram, setSelectedProgram] = useState<DegreeModalData | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProgram(null);
      }
    };
    if (selectedProgram) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
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

  // Filtered Flagship Cards (Matches search or level)
  const filteredFlagship = useMemo(() => {
    return programsDetailCatalog.filter((prog) => {
      if (selectedLevel === 'graduate' || selectedLevel === 'doctorate') return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        prog.name.toLowerCase().includes(q) ||
        prog.departmentName.toLowerCase().includes(q) ||
        prog.description.toLowerCase().includes(q)
      );
    });
  }, [selectedLevel, searchQuery]);

  return (
    <div className="bg-[#F6F5F0] min-h-screen text-[#14291D]">
      {/* ─── Hero Header & Clean Breadcrumb (Fixed overlap, high clearance) ─── */}
      <section className="relative overflow-hidden bg-[#F6F5F0] border-b border-stone-200/80 pt-32 sm:pt-40 pb-14 sm:pb-18">
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#C8A96E]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-[#153B27]/8 blur-3xl pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Clean Integrated Breadcrumb (Inside container, strictly below navbar) */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-medium text-stone-500 flex-wrap">
              <li>
                <Link href="/" className="hover:text-[#153B27] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </li>
              <li>
                <Link href="/academics" className="hover:text-[#153B27] transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </li>
              <li className="text-[#153B27] font-semibold" aria-current="page">
                Degrees &amp; Curricula
              </li>
            </ol>
          </nav>

          {/* Section Eyebrow + Title */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="h-0.5 w-7 bg-[#7F1D1D]" />
                <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                  Academic Programs &amp; Schemes of Study
                </span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#14291D] font-bold tracking-tight leading-[1.08]">
                Degrees &amp; Curricula
              </h1>
            </div>
            <p className="font-sans text-sm sm:text-base text-stone-600 max-w-lg lg:text-right leading-relaxed">
              Explore our accredited undergraduate, master&rsquo;s, and doctoral programs designed for
              academic rigor, alpine field research, and career distinction.
            </p>
          </div>

          {/* ─── Program Finder Bar (Bridges header & content) ─── */}
          <div className="bg-white border border-stone-200/90 rounded-2xl p-3 sm:p-4 shadow-sm flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Left: Instant Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search degree programs, departments, or disciplines (e.g., Software, DPT, Law, Chemistry)..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-stone-50 border border-stone-200/80 text-xs sm:text-sm text-[#14291D] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#153B27] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700 rounded-full"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Right: Segmented Degree-Level Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-100/90 rounded-xl overflow-x-auto shrink-0 scrollbar-none">
              {[
                { id: 'all', label: 'All Levels' },
                { id: 'undergraduate', label: 'Undergraduate (BS / LLB)' },
                { id: 'graduate', label: 'Graduate (MS / MPhil / MBA)' },
                { id: 'doctorate', label: 'Doctorate (PhD)' },
              ].map((lvl) => {
                const isActive = selectedLevel === lvl.id;
                return (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => setSelectedLevel(lvl.id as DegreeLevelFilter)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'bg-[#153B27] text-white shadow-xs'
                        : 'text-stone-600 hover:text-[#14291D] hover:bg-white/60'
                    }`}
                  >
                    {lvl.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Metrics & Results Readout */}
          <div className="mt-3.5 flex items-center justify-between text-xs text-stone-500 px-1">
            <span className="font-medium">
              Showing{' '}
              <strong className="text-[#14291D] font-bold">{filteredDepartments.length}</strong>{' '}
              departments &bull;{' '}
              <strong className="text-[#153B27] font-bold">{totalProgramsCount}</strong> degree
              tracks
            </span>
            {(searchQuery || selectedLevel !== 'all' || selectedFaculty !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLevel('all');
                  setSelectedFaculty('all');
                }}
                className="text-[#7F1D1D] hover:underline font-semibold"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20 space-y-20">
        {/* ─── Part 1: Featured Degree Specifications (3x2 Grid) ─── */}
        {filteredFlagship.length > 0 && (
          <section id="flagship-degrees" aria-labelledby="flagship-heading">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#7F1D1D]" />
                  <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                    Flagship Programs
                  </span>
                </div>
                <h2
                  id="flagship-heading"
                  className="font-serif text-3xl sm:text-4xl text-[#14291D] font-bold tracking-tight"
                >
                  Featured Degree Specifications
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-stone-500 max-w-md sm:text-right">
                Semester-by-semester course roadmaps, credit allocations, and eligibility criteria.
              </p>
            </div>

            {/* 3x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFlagship.map((prog) => (
                <article
                  key={prog.slug}
                  className="group relative flex flex-col justify-between p-7 rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:border-[#153B27]/40 hover:shadow-xl transition-all duration-300"
                >
                  <div>
                    {/* Top Row: Duration & Credits */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#153B27] border border-emerald-200">
                        <Clock className="w-3 h-3" />
                        {prog.duration.split('(')[0].trim()}
                      </span>
                      <span className="text-[11px] font-mono text-stone-500 font-medium">
                        {prog.creditHours} Credit Hours
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#14291D] group-hover:text-[#153B27] transition-colors mb-2.5 leading-snug">
                      {prog.name}
                    </h3>

                    <p className="font-sans text-xs text-stone-600 leading-relaxed mb-5 line-clamp-3">
                      {prog.description}
                    </p>

                    <div className="text-xs text-stone-500 font-medium mb-5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7F1D1D] shrink-0" />
                      <span className="truncate">{prog.departmentName}</span>
                    </div>
                  </div>

                  {/* Interactive Trigger for Slide-Over Drawer */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        const matchingDept = allDepartments.find(
                          (d) => d.id === prog.departmentId
                        ) || {
                          id: prog.departmentId,
                          name: prog.departmentName,
                          facultyGroup: prog.facultyGroup,
                          campus: 'Charbagh Main Campus',
                          aims: '',
                          description: '',
                          programsOffered: [],
                          contactEmail: '',
                        };
                        openProgramModal(prog.name, matchingDept);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#153B27] hover:text-[#7F1D1D] transition-colors"
                    >
                      <span>View Detailed Syllabus</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <Link
                      href={`/programs/${prog.slug}`}
                      className="p-2 rounded-lg bg-stone-50 hover:bg-[#153B27] hover:text-white text-stone-600 border border-stone-200 transition-colors"
                      title={`Direct link to ${prog.name}`}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ─── Part 2: Interactive Faculty Directory (Replacing 2x2 double-nested boxes) ─── */}
        <section id="faculty-directory" aria-labelledby="directory-heading">
          {/* Section Heading */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-0.5 w-6 bg-[#153B27]" />
                <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">
                  Academic Faculties &amp; Teaching Departments
                </span>
              </div>
              <h2
                id="directory-heading"
                className="font-serif text-3xl sm:text-4xl text-[#14291D] font-bold tracking-tight"
              >
                Comprehensive Degree Directory
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 max-w-md sm:text-right">
              Filter by faculty or click any degree tag to preview course breakdowns, eligibility, and fees.
            </p>
          </div>

          {/* Horizontal Faculty Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
            {[
              { id: 'all', label: 'All Faculties' },
              { id: 'physical-computational-sciences', label: 'Physical & Computational Sciences' },
              { id: 'chemical-life-sciences', label: 'Chemical & Life Sciences' },
              { id: 'allied-health-sciences', label: 'Allied Health Sciences' },
              { id: 'management-social-sciences', label: 'Management & Social Sciences' },
              { id: 'languages-humanities-law', label: 'Languages, Humanities & Law' },
            ].map((fac) => {
              const isActive = selectedFaculty === fac.id;
              return (
                <button
                  key={fac.id}
                  type="button"
                  onClick={() => setSelectedFaculty(fac.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-[#153B27] text-white shadow-sm ring-1 ring-[#153B27]'
                      : 'bg-white border border-stone-200/90 text-stone-600 hover:text-[#14291D] hover:bg-stone-50'
                  }`}
                >
                  {fac.label}
                </button>
              );
            })}
          </div>

          {/* Single Clean Architectural Directory Container (divide-y) */}
          <div className="bg-white border border-stone-200/90 rounded-2xl divide-y divide-stone-200 overflow-hidden shadow-xs">
            {filteredDepartments.length === 0 ? (
              /* Empty State */
              <div className="p-12 sm:p-16 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 mx-auto flex items-center justify-center">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-800">
                  No Matching Degree Programs Found
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
                  We could not find any programs matching &ldquo;{searchQuery}&rdquo; in the selected
                  faculty or degree level filter. Try broadening your search or resetting filters.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedFaculty('all');
                    setSelectedLevel('all');
                  }}
                  className="px-5 py-2.5 rounded-lg bg-[#153B27] text-white text-xs font-semibold hover:bg-[#0F291C] transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              filteredDepartments.map((dept) => {
                const visiblePrograms = dept.programsOffered.filter((p) =>
                  matchesDegreeLevel(p, selectedLevel)
                );

                return (
                  <div
                    key={dept.id}
                    className="p-5 sm:p-6 lg:p-7 hover:bg-stone-50/70 transition-colors"
                  >
                    {/* 3-Column Desktop Alignment (35% Left, 50% Middle, 15% Right) */}
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
                      
                      {/* Left Column (35%): Faculty Eyebrow, Department Name, Campus */}
                      <div className="lg:w-[35%] space-y-1.5 shrink-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#7F1D1D] block">
                          {dept.facultyGroup}
                        </span>

                        <Link
                          href={`/departments/${dept.id}`}
                          className="font-serif text-lg sm:text-xl font-bold text-[#14291D] hover:text-[#153B27] transition-colors block leading-snug"
                        >
                          {dept.name}
                        </Link>

                        <div className="flex items-center gap-1.5 text-xs text-stone-500">
                          <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                          <span>{dept.campus}</span>
                        </div>
                      </div>

                      {/* Middle Column (50%): Interactive Degree Tags */}
                      <div className="lg:w-[50%] flex flex-wrap gap-2">
                        {visiblePrograms.map((prog, pIdx) => {
                          const lower = prog.toLowerCase();
                          const isPhd = lower.includes('phd');
                          const isGrad = lower.includes('ms') || lower.includes('mphil') || lower.includes('mba');
                          
                          let badgeStyle =
                            'bg-emerald-50/80 text-[#153B27] border-emerald-200 hover:bg-emerald-100/90';
                          if (isPhd) {
                            badgeStyle =
                              'bg-amber-50/80 text-amber-900 border-amber-300 hover:bg-amber-100';
                          } else if (isGrad) {
                            badgeStyle =
                              'bg-blue-50/80 text-blue-900 border-blue-200 hover:bg-blue-100';
                          }

                          return (
                            <button
                              key={pIdx}
                              type="button"
                              onClick={() => openProgramModal(prog, dept)}
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all text-left shadow-2xs group/tag ${badgeStyle}`}
                              title={`Click to view syllabus outline for ${prog}`}
                            >
                              <GraduationCap className="w-3.5 h-3.5 shrink-0 opacity-70 group-hover/tag:opacity-100" />
                              <span>{prog}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Right Column (15%): Dept Profile Link */}
                      <div className="lg:w-[15%] lg:text-right shrink-0 pt-2 lg:pt-0">
                        <Link
                          href={`/departments/${dept.id}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#153B27] hover:text-[#7F1D1D] transition-colors group/link"
                        >
                          <span>Dept. Profile</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>

                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>
      </div>

      {/* ─── Interactive Syllabus Slide-Over Drawer / Modal ─── */}
      {selectedProgram && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-title"
          className="fixed inset-0 z-50 overflow-hidden"
        >
          {/* Backdrop */}
          <div
            onClick={() => setSelectedProgram(null)}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
            <div className="w-screen max-w-2xl bg-white shadow-2xl border-l border-stone-200 flex flex-col justify-between overflow-y-auto">
              
              {/* Drawer Header */}
              <div className="p-6 sm:p-8 bg-[#F6F5F0] border-b border-stone-200/90 relative">
                <button
                  type="button"
                  onClick={() => setSelectedProgram(null)}
                  aria-label="Close syllabus drawer"
                  className="absolute top-5 right-5 p-2 rounded-full bg-white border border-stone-300 text-stone-500 hover:text-stone-900 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="pr-10 space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#7F1D1D] text-white">
                      {selectedProgram.level}
                    </span>
                    <span className="text-xs text-stone-500 font-medium">
                      {selectedProgram.facultyGroup}
                    </span>
                  </div>

                  <h3
                    id="drawer-title"
                    className="font-serif text-2xl sm:text-3xl font-bold text-[#14291D] leading-tight"
                  >
                    {selectedProgram.title}
                  </h3>

                  <p className="text-xs text-stone-600 font-medium flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#153B27]" />
                    <span>{selectedProgram.departmentName}</span>
                    <span className="text-stone-300">&bull;</span>
                    <span className="text-emerald-800">{selectedProgram.campus}</span>
                  </p>
                </div>

                {/* 4-Spec Snapshot Bar */}
                <div className="mt-6 pt-5 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-2.5 rounded-lg bg-white border border-stone-200/80">
                    <span className="text-[10px] uppercase font-bold text-stone-400 block">Duration</span>
                    <span className="text-xs font-bold text-[#14291D]">{selectedProgram.duration}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-stone-200/80">
                    <span className="text-[10px] uppercase font-bold text-stone-400 block">Credit Hours</span>
                    <span className="text-xs font-bold text-[#153B27]">{selectedProgram.creditHours} Credits</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-stone-200/80">
                    <span className="text-[10px] uppercase font-bold text-stone-400 block">Accreditation</span>
                    <span className="text-xs font-bold text-stone-800">HEC Recognized</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-stone-200/80">
                    <span className="text-[10px] uppercase font-bold text-stone-400 block">Open Merit Fee</span>
                    <span className="text-xs font-bold text-[#7F1D1D] truncate block">
                      {selectedProgram.feePerSemester.split('/')[0].trim()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Drawer Body: Detailed Scheme of Studies */}
              <div className="p-6 sm:p-8 space-y-8 flex-1">
                {/* 1. Description */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#153B27] mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    <span>Curricular Scope &amp; Focus</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {selectedProgram.description}
                  </p>
                </div>

                {/* 2. Eligibility & Admission Requirements */}
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/90 text-xs text-amber-950 space-y-1.5">
                  <p className="font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-700" />
                    <span>Eligibility Criteria</span>
                  </p>
                  <p className="leading-relaxed font-sans">{selectedProgram.eligibility}</p>
                </div>

                {/* 3. Semester-by-Semester Scheme of Studies */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#153B27] flex items-center gap-1.5">
                      <Layers className="w-4 h-4" />
                      <span>Semester Roadmap &amp; Course Structure</span>
                    </h4>
                    <span className="text-[11px] text-stone-400">
                      {selectedProgram.semesterOutline.length} Terms
                    </span>
                  </div>

                  <div className="space-y-3">
                    {selectedProgram.semesterOutline.map((term, tIdx) => (
                      <div
                        key={tIdx}
                        className="rounded-xl border border-stone-200 bg-stone-50/60 p-3.5 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#14291D]">{term.semester}</span>
                          <span className="text-[10px] font-semibold text-stone-400">
                            {term.courses.length} Courses
                          </span>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {term.courses.map((course, cIdx) => (
                            <li
                              key={cIdx}
                              className="text-[11px] text-stone-600 flex items-start gap-1.5 bg-white p-1.5 rounded-md border border-stone-100"
                            >
                              <span className="text-[#153B27] font-bold">&bull;</span>
                              <span className="leading-tight">{course}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Career Opportunities */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#153B27] mb-3 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4" />
                    <span>Graduate Outcomes &amp; Career Trajectories</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                    {selectedProgram.careerProspects.map((career, i) => (
                      <li key={i} className="flex items-center gap-2 p-2 rounded-lg bg-stone-50 border border-stone-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{career}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="p-5 sm:p-6 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => handleDownloadScheme(selectedProgram.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-stone-100 border border-stone-300 text-stone-700 text-xs font-bold shadow-xs transition-colors"
                >
                  <Download className="w-4 h-4 text-[#7F1D1D]" />
                  <span>Download Scheme of Studies (PDF)</span>
                </button>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Link
                    href={`/departments/${selectedProgram.departmentId}`}
                    className="flex-1 sm:flex-initial text-center px-4 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-white transition-colors"
                  >
                    Dept. Profile
                  </Link>

                  <Link
                    href="/admissions"
                    className="flex-1 sm:flex-initial text-center px-5 py-2.5 rounded-xl bg-[#7F1D1D] hover:bg-[#681818] text-white text-xs font-bold shadow-xs transition-colors"
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
        <div className="fixed bottom-6 right-6 z-50 bg-[#0C1912] text-white px-5 py-3 rounded-xl shadow-2xl border border-white/20 text-xs font-semibold flex items-center gap-2.5 animate-bounce">
          <Download className="w-4 h-4 text-amber-300" />
          <span>{downloadToast}</span>
        </div>
      )}
    </div>
  );
}
