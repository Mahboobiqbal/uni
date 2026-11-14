import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
  GraduationCap,
  LayoutDashboard,
  MonitorPlay,
} from "lucide-react";

interface PortalCard {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const portals: PortalCard[] = [
  {
    name: "CMS",
    description: "Content management for faculty, departments and the university web team.",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    name: "SUJRIS",
    description: "Student registration and record system — joint HEC / university interface.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    name: "e-Office",
    description: "Digital workflows for official correspondence, files and approvals.",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    name: "Campus TV",
    description: "Live programmes, lectures and campus event broadcasts.",
    icon: <MonitorPlay className="w-5 h-5" />,
  },
];

export default function Footer() {
  return (
    <footer
      className="bg-white border-t border-stone-200 pt-12 pb-10 font-sans"
      data-purpose="site-footer"
      id="admissions-desk"
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        {/* ── Quick Portals ── */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="h-0.5 w-7 bg-[#7F1D1D]" />
                <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                  Quick Portals
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#14291D] font-bold tracking-[-0.02em]">
                Direct Access Portals
              </h3>
            </div>
            <p className="text-sm text-stone-500 max-w-sm sm:text-right leading-[1.6]">
              One-click access to the university&rsquo;s day-to-day platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portals.map((portal) => (
              <Link
                key={portal.name}
                href="/portal"
                className="group flex items-start gap-4 p-5 rounded-xl border border-stone-200/90 bg-stone-50/60 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-white hover:shadow-[0_14px_32px_-16px_rgba(21,59,39,0.25)]"
              >
                <span className="w-10 h-10 rounded-lg bg-[#153B27]/8 text-[#153B27] flex items-center justify-center shrink-0">
                  {portal.icon}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-bold text-[#14291D] group-hover:text-[#153B27] transition-colors">
                    {portal.name}
                  </span>
                  <span className="block text-xs text-stone-500 leading-[1.55] mt-1">
                    {portal.description}
                  </span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#153B27] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        {/* ── Institutional Columns ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-stone-200">
          {/* Column 1: Admissions */}
          <div>
            <h4 className="font-serif text-[#153B27] text-base font-bold mb-4 uppercase tracking-wider">
              Admissions
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link className="hover:text-[#153B27] font-medium transition" href="/admissions">
                  Undergraduate Admissions
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#153B27] font-medium transition" href="/admissions">
                  Graduate &amp; MS Admissions
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#153B27] font-medium transition" href="/admissions/fee-structure">
                  Official Fee Structure &amp; Dues
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#153B27] font-medium transition" href="/admissions/merit-lists">
                  Merit Lists &amp; Quotas
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#153B27] font-medium transition" href="/admissions">
                  Scholarships &amp; Financial Aid (UAFAO)
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#153B27] font-medium transition" href="/academics/downloads">
                  Downloads &amp; Forms
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: In Focus */}
          <div>
            <h4 className="font-serif text-[#153B27] text-base font-bold mb-4 uppercase tracking-wider">
              In Focus
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link className="hover:text-[#153B27] font-medium transition" href="/research/oric">
                  Office of Research (ORIC)
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#153B27] font-medium transition" href="/research/asrb">
                  ASRB Research Board
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#153B27] font-medium transition" href="/campuses/main-campus">
                  Charbagh Main Campus (100% Solar)
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#153B27] font-medium transition" href="/campuses/women-campus">
                  Women Campus &amp; Home Sciences
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#153B27] font-medium transition" href="/news">
                  University News &amp; Press Releases
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#153B27] font-medium transition" href="/events">
                  Conferences &amp; Academic Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-serif text-[#153B27] text-base font-bold mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link className="hover:text-[#153B27] font-medium transition" href="/about">
                  About University &amp; Swat History
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#153B27] font-medium transition" href="/leadership">
                  University Leadership &amp; Governance
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#153B27] font-medium transition" href="/alumni">
                  Alumni &amp; Graduates
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#153B27] font-medium transition" href="/search">
                  Search the University
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#153B27] font-medium transition" href="/affiliated-colleges">
                  Affiliated Colleges Directory
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#153B27] font-medium transition" href="/academics/calendar">
                  Academic Calendar 2026–2027
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#153B27] font-medium transition" href="/portal">
                  Digital Library &amp; CMS Portal
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#153B27] font-medium transition" href="/contact">
                  Campus Directory &amp; Location Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="font-serif text-[#153B27] text-base font-bold mb-4 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-[#153B27] font-semibold">Location:</span>
                <span>
                  Charbagh Main Campus, District Swat, Khyber Pakhtunkhwa, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#153B27] font-semibold">Exchange:</span>
                <span>+92 (946) 920800 - 803</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#153B27] font-semibold">Registrar:</span>
                <span>registrar@uswat.edu.pk</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#153B27] font-semibold">Admissions:</span>
                <span>admissions@uswat.edu.pk</span>
              </li>
              <li className="pt-2 flex gap-3 text-slate-600">
                <a className="hover:text-[#153B27] transition" href="#" aria-label="Twitter / X">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a className="hover:text-[#153B27] transition" href="#" aria-label="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a className="hover:text-[#153B27] transition" href="#" aria-label="Facebook">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Logo, Copyright, Legal Bar ── */}
        <div className="pt-8 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full overflow-hidden p-0.5 border border-stone-200 bg-white mb-3 shadow-sm flex items-center justify-center">
            <img
              alt="University of Swat Crest"
              className="w-full h-full object-contain rounded-full"
              src="/uos-logo-circle.png"
            />
          </div>
          <span className="font-serif text-lg font-bold text-stone-900 tracking-wide">
            University of Swat
          </span>
          <p className="text-xs text-slate-500 mt-1">
            © 2026 University of Swat. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 mt-2">
            <Link className="hover:text-[#153B27] font-medium transition" href="#">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link className="hover:text-[#153B27] font-medium transition" href="#">
              Terms of Use
            </Link>
            <span>|</span>
            <Link className="hover:text-[#153B27] font-medium transition" href="#">
              Sitemap
            </Link>
            <span>|</span>
            <Link className="hover:text-[#153B27] font-medium transition" href="#">
              HEC Ordinance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
