'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import AcademicShowcase from './AcademicShowcase';
import AdmissionsFinancialAid from './AdmissionsFinancialAid';

export default function FacultyProgramsGrid() {
  return (
    <section
      id="faculties-programs"
      data-purpose="faculties-programs"
      className="relative overflow-hidden py-16 sm:py-20 bg-[#F6F5F0]"
    >
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#153B27]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-24 w-[420px] h-[420px] rounded-full bg-[#7F1D1D]/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Split Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-0.5 w-7 bg-[#7F1D1D]" />
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                Academic Programs
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#14291D] font-bold tracking-[-0.025em] leading-[1.12]">
              Five faculties, one focus: your future
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3">
            <p className="font-sans text-sm sm:text-base text-stone-600 max-w-md lg:text-right leading-[1.68]">
              Our program areas span five faculties and 28 departments, from computing to the sciences, management, law, and the humanities.
            </p>
            <Link
              href="/programs"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7F1D1D] hover:text-[#991B1B] transition-colors group"
            >
              <span>View Full Academic Catalog</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Interactive Academic Showcase — left index + right photographic spotlight */}
        <AcademicShowcase />

        {/* Admissions, Scholarships & Financial Aid showcase */}
        <AdmissionsFinancialAid />
      </div>
    </section>
  );
}
