import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, CalendarDays, FileCheck2, FileText, Landmark, Library, ShieldCheck, GraduationCap } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
  title: 'Academic Structure & Regulations | University of Swat',
  description: 'Academic calendar, semester regulations, curricula framework, Central Library and quality standards at the University of Swat.',
};

export default function AcademicsPage() {
  return (
    <div className="bg-[#F6F5F0] min-h-screen">
      <PageHeader
        tag="Academic Affairs"
        title="Academics &amp; Scholastic Framework"
        subtitle="The academic policies, semester regulations, library resources, and quality standards supporting teaching, learning, and research across the University of Swat."
        eyebrow="Academic Policies · University of Swat"
      />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 py-16 sm:py-20">
        
        {/* Academic Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Link
            href="/academics/calendar"
            className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs hover:border-[#153B27]/40 hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#153B27]/10 text-[#153B27] flex items-center justify-center mb-6">
                <CalendarDays className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold block mb-1">
                Semester Timeline
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-[#153B27] transition-colors mb-3">
                Academic Calendar
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed">
                Semester commencement dates, midterm evaluations, final examinations, registration deadlines, and holidays.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#153B27]">
              <span>View Full Calendar 2026–27</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            href="/academics/downloads"
            className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs hover:border-[#7F1D1D]/40 hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#7F1D1D]/10 text-[#7F1D1D] flex items-center justify-center mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold block mb-1">
                Official Documents
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-[#7F1D1D] transition-colors mb-3">
                Downloads &amp; Forms
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed">
                Statutes 2016, uniform format for research synopses, admission forms, clearance proformas, and affiliation rules.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#7F1D1D]">
              <span>Access Download Center</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            href="/programs"
            className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xs hover:border-[#B48A3E]/40 hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#B48A3E]/10 text-[#B48A3E] flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#B48A3E] font-bold block mb-1">
                Academic Degrees
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-[#B48A3E] transition-colors mb-3">
                Degree Specifications
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed">
                Undergraduate BS, graduate MS/MPhil, and doctoral PhD syllabi across all four major university faculties.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#B48A3E]">
              <span>Explore Degree Directory</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* In-Depth Academic Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Semester Regulations & Grading System */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-0.5 w-6 bg-[#153B27]" />
              <span className="text-xs uppercase tracking-widest text-[#153B27] font-bold">
                Grading &amp; Assessment
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">
              Semester Grading &amp; GPA Framework
            </h3>
            <p className="font-sans text-sm text-stone-600 leading-relaxed mb-6">
              The University of Swat follows the standard HEC Semester Examination Regulations. Student performance is assessed through continuous assessment, mid-term examinations, and final terminal evaluations.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-400 font-bold uppercase tracking-wider text-[10px]">
                    <th className="py-2.5">Marks Percentage</th>
                    <th className="py-2.5">Letter Grade</th>
                    <th className="py-2.5">Grade Points (GPA)</th>
                    <th className="py-2.5">Remarks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-700 font-medium">
                  <tr>
                    <td className="py-2.5">85% and above</td>
                    <td className="font-bold text-[#153B27]">A</td>
                    <td>4.00</td>
                    <td>Outstanding</td>
                  </tr>
                  <tr>
                    <td className="py-2.5">80% – 84%</td>
                    <td className="font-bold text-[#153B27]">A-</td>
                    <td>3.66 – 3.99</td>
                    <td>Excellent</td>
                  </tr>
                  <tr>
                    <td className="py-2.5">75% – 79%</td>
                    <td className="font-bold text-stone-800">B+</td>
                    <td>3.33 – 3.65</td>
                    <td>Very Good</td>
                  </tr>
                  <tr>
                    <td className="py-2.5">70% – 74%</td>
                    <td className="font-bold text-stone-800">B</td>
                    <td>3.00 – 3.32</td>
                    <td>Good</td>
                  </tr>
                  <tr>
                    <td className="py-2.5">60% – 69%</td>
                    <td className="font-bold text-stone-800">C</td>
                    <td>2.00 – 2.99</td>
                    <td>Satisfactory</td>
                  </tr>
                  <tr>
                    <td className="py-2.5">Below 50%</td>
                    <td className="font-bold text-[#7F1D1D]">F</td>
                    <td>0.00</td>
                    <td>Fail</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Quality Enhancement Cell (QEC) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-0.5 w-6 bg-[#7F1D1D]" />
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                Quality Assurance
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">
              Quality Enhancement Cell (QEC)
            </h3>
            <p className="font-sans text-sm text-stone-600 leading-relaxed mb-6">
              The Quality Enhancement Cell at University of Swat is entrusted with maintaining high standards of education and research. UOS holds an exemplary <strong>91.4% score in HEC W-Category</strong> rankings.
            </p>

            <div className="space-y-4 text-xs text-stone-700">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                <strong className="block text-stone-900 font-semibold mb-1">Self-Assessment Reports (SAR):</strong>
                Periodic academic audits of all undergraduate and postgraduate departments to ensure outcome-based education (OBE).
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                <strong className="block text-stone-900 font-semibold mb-1">Faculty &amp; Course Evaluations:</strong>
                Online end-of-semester feedback mechanism allowing scholars to review teaching pedagogy confidentially.
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                <strong className="block text-stone-900 font-semibold mb-1">Accreditation Councils:</strong>
                Direct coordination with NCEAC, Pakistan Bar Council (PBC), and HEC Quality Assurance Agency.
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
