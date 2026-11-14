import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="bg-slate-50 border-t border-slate-200 pt-16 pb-12 font-sans"
      data-purpose="site-footer"
      id="admissions-desk"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Structured Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-slate-200">
          {/* Column 1: Admissions */}
          <div>
            <h4 className="font-serif text-brand-emerald text-base font-bold mb-4 uppercase tracking-wider">
              Admissions
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a className="hover:text-brand-emerald font-medium transition" href="#">
                  Undergraduate Admissions
                </a>
              </li>
              <li>
                <a className="hover:text-brand-emerald font-medium transition" href="#">
                  Graduate &amp; MS Admissions
                </a>
              </li>
              <li>
                <a className="hover:text-brand-emerald font-medium transition" href="#">
                  Doctoral Fellowships
                </a>
              </li>
              <li>
                <a className="hover:text-brand-emerald font-medium transition" href="#">
                  Fee Structure &amp; Dues
                </a>
              </li>
              <li>
                <a className="hover:text-brand-emerald font-medium transition" href="#">
                  Scholarships &amp; Financial Aid
                </a>
              </li>
              <li>
                <a className="hover:text-brand-emerald font-medium transition" href="#">
                  Prospectus 2026-27 (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: In Focus */}
          <div>
            <h4 className="font-serif text-brand-emerald text-base font-bold mb-4 uppercase tracking-wider">
              In Focus
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a className="hover:text-brand-emerald font-medium transition" href="#">
                  Office of Research (ORIC)
                </a>
              </li>
              <li>
                <a className="hover:text-brand-emerald font-medium transition" href="#">
                  Quality Enhancement Cell
                </a>
              </li>
              <li>
                <a className="hover:text-brand-emerald font-medium transition" href="#">
                  Gandhara Heritage Museum
                </a>
              </li>
              <li>
                <a className="hover:text-brand-emerald font-medium transition" href="#">
                  Directorate of Sports
                </a>
              </li>
              <li>
                <a className="hover:text-brand-emerald font-medium transition" href="#">
                  Career Development Centre
                </a>
              </li>
              <li>
                <a className="hover:text-brand-emerald font-medium transition" href="#">
                  Anti-Harassment Syndicate
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-serif text-brand-emerald text-base font-bold mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a className="hover:text-brand-emerald font-medium transition" href="#">
                  HEC Digital Library
                </a>
              </li>
              <li>
                <a className="hover:text-brand-emerald font-medium transition" href="#">
                  University Statutes &amp; Acts
                </a>
              </li>
              <li>
                <a className="hover:text-brand-emerald font-medium transition" href="#">
                  Tender Notices &amp; Procurement
                </a>
              </li>
              <li>
                <a className="hover:text-brand-emerald font-medium transition" href="#">
                  Careers &amp; Faculty Jobs
                </a>
              </li>
              <li>
                <a className="hover:text-brand-emerald font-medium transition" href="#">
                  Official University Gazette
                </a>
              </li>
              <li>
                <a className="hover:text-brand-emerald font-medium transition" href="#">
                  Affiliated Degree Colleges
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="font-serif text-brand-emerald text-base font-bold mb-4 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-brand-emerald font-semibold">Location:</span>
                <span>
                  Charbagh Main Campus, District Swat, Khyber Pakhtunkhwa, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-emerald font-semibold">Exchange:</span>
                <span>+92 (946) 920800 - 803</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-emerald font-semibold">Registrar:</span>
                <span>registrar@uswat.edu.pk</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-emerald font-semibold">Admissions:</span>
                <span>admissions@uswat.edu.pk</span>
              </li>
              <li className="pt-2 flex gap-3 text-slate-600">
                {/* Twitter / X */}
                <a
                  className="hover:text-brand-emerald transition"
                  href="#"
                  aria-label="Twitter / X"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  className="hover:text-brand-emerald transition"
                  href="#"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  className="hover:text-brand-emerald transition"
                  href="#"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Logo, Copyright, and Legal Bar */}
        <div className="pt-8 flex flex-col items-center justify-center text-center">
          {/* Logo centered */}
          <div className="w-12 h-12 rounded-full overflow-hidden p-0.5 border border-slate-200 bg-white mb-3 shadow-sm flex items-center justify-center">
            <img
              alt="University of Swat Crest"
              className="w-full h-full object-contain rounded-full"
              src="/uos-logo-circle.png"
            />
          </div>
          <span className="font-serif text-lg font-bold text-slate-900 tracking-wide">
            University of Swat
          </span>
          <p className="text-xs text-slate-500 mt-1">
            © 2026 University of Swat. All Rights Reserved.
          </p>
          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 mt-2">
            <Link className="hover:text-brand-emerald font-medium transition" href="#">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link className="hover:text-brand-emerald font-medium transition" href="#">
              Terms of Use
            </Link>
            <span>|</span>
            <Link className="hover:text-brand-emerald font-medium transition" href="#">
              Sitemap
            </Link>
            <span>|</span>
            <Link className="hover:text-brand-emerald font-medium transition" href="#">
              HEC Ordinance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

