export default function UniversityOverview() {
  return (
    <section
      className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      data-purpose="bento-overview"
      id="about-uni"
    >
      {/* Full-Width Horizontal Metric Counters Ribbon */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="alpine-card p-6 flex items-center gap-5 border-t-2 border-t-brand-emerald">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-brand-emerald flex items-center justify-center font-serif text-2xl font-bold border border-emerald-200">
            2010
          </div>
          <div>
            <span className="block font-serif text-2xl font-bold text-slate-900">
              2010
            </span>
            <span className="text-xs text-slate-500 font-medium">Charter Year</span>
          </div>
        </div>

        <div className="alpine-card p-6 flex items-center gap-5 border-t-2 border-t-teal-600">
          <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-serif text-2xl font-bold border border-teal-200">
            14k
          </div>
          <div>
            <span className="block font-serif text-2xl font-bold text-slate-900">
              14,000+
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Alumni Worldwide
            </span>
          </div>
        </div>

        <div className="alpine-card p-6 flex items-center gap-5 border-t-2 border-t-amber-500">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-serif text-2xl font-bold border border-amber-200">
            1.8k
          </div>
          <div>
            <span className="block font-serif text-2xl font-bold text-slate-900">
              1,800+
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Canal Campus Acres
            </span>
          </div>
        </div>
      </div>

      {/* Bento Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Large "About Uni" Bento Card */}
        <div className="lg:col-span-7 alpine-card p-8 sm:p-12 flex flex-col justify-between border-t-4 border-t-brand-emerald relative overflow-hidden">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-0.5 w-8 bg-brand-gold" />
              <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                Institutional Heritage
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-bold leading-tight mb-6">
              About University of Swat
            </h2>
            <p className="text-slate-700 text-base leading-relaxed mb-6 font-normal">
              The University of Swat was established under the Khyber Pakhtunkhwa Act to
              advance higher education in northern Pakistan. Located amidst the
              awe-inspiring Hindu Raj mountains and Gandharan heritage sites, the
              university integrates traditional scholarly rigor with modern research
              frontiers.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              From botanical genomics of medicinal flora in the Swat basin to quantum
              computing, archaeological preservation, and sustainable alpine tourism, our
              interdisciplinary centers cultivate critical inquiry and regional
              socioeconomic development.
            </p>
          </div>
          <div className="pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-brand-emerald">
            <span>Chartered by Government of Khyber Pakhtunkhwa</span>
            <span>•</span>
            <span className="text-slate-500">
              Higher Education Commission Accredited
            </span>
          </div>
        </div>

        {/* Right Column: Bento Cards (Total Disciplines + Analytics) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Top Right Card: Total Disciplines */}
          <div className="alpine-card p-7 border-l-4 border-l-brand-emerald flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-widest text-brand-emerald font-bold">
                  Academic Breadth
                </span>
                <span className="p-2 rounded-xl bg-emerald-50 text-brand-emerald border border-emerald-100">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="font-serif text-2xl text-slate-900 font-bold mb-2">
                Total Disciplines
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mb-5 leading-relaxed">
                Comprehensive degree programs spanning modern computing, cellular
                microbiology, legal studies, linguistics, and high-altitude agronomy.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
              <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200">
                <span className="block text-2xl font-bold text-slate-900 font-serif">
                  35+
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Academic Departments
                </span>
              </div>
              <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200">
                <span className="block text-2xl font-bold text-slate-900 font-serif">
                  104
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Degree Specializations
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Right Card: Analytics */}
          <div className="alpine-card p-7 border-l-4 border-l-brand-gold flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                  Institutional Metrics
                </span>
                <span className="p-2 rounded-xl bg-amber-50 text-brand-gold border border-amber-100">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </div>
              <h3 className="font-serif text-2xl text-slate-900 font-bold mb-2">
                Analytics &amp; Research
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mb-5 leading-relaxed">
                ORIC-driven research enterprise with top quartile international impact
                factor papers and national patent grants.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-slate-100 text-center">
              <div className="bg-amber-50/40 p-2.5 rounded-xl border border-amber-100">
                <span className="block text-xl font-bold text-amber-700 font-serif">
                  1,240+
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  W-Cat Publications
                </span>
              </div>
              <div className="bg-emerald-50/40 p-2.5 rounded-xl border border-emerald-100">
                <span className="block text-xl font-bold text-brand-emerald font-serif">
                  18:1
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  Student-Faculty Ratio
                </span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <span className="block text-xl font-bold text-slate-800 font-serif">
                  ₨ 480M
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  Research Grants
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

