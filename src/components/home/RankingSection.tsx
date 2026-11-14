export default function RankingSection() {
  return (
    <section
      className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      data-purpose="institutional-rankings"
    >
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-widest text-brand-emerald font-bold">
          Evaluations &amp; Accreditations
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-bold mt-1">
          Ranking &amp; Recognition
        </h2>
        <p className="text-slate-500 text-sm mt-2">
          National and global benchmarking evaluations
        </p>
      </div>

      {/* Dashboard Scorecard Card */}
      <div className="alpine-card p-8 sm:p-12 border border-slate-200 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Benchmark Gauges */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-brand-gold tracking-widest uppercase">
              Benchmark Scorecard
            </span>
            <h3 className="font-serif text-3xl text-slate-900 font-bold">
              Top Ranked Public University in KP
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Consistently evaluated by the Higher Education Commission (HEC) of Pakistan
              and global ranking frameworks for research growth, sustainable campus
              stewardship, and academic vitality.
            </p>

            {/* Progress Metric 1 */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1.5">
                <span className="text-slate-700">
                  HEC Quality Assurance Agency Rating
                </span>
                <span className="text-brand-emerald font-bold">
                  91.4% (W-Category)
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200">
                <div
                  className="bg-gradient-to-r from-emerald-600 to-teal-500 h-full rounded-full"
                  style={{ width: "91.4%" }}
                />
              </div>
            </div>

            {/* Progress Metric 2 */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1.5">
                <span className="text-slate-700">
                  UI GreenMetric World Campus Sustainability
                </span>
                <span className="text-emerald-700 font-bold">Top 15 Nationally</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200">
                <div
                  className="bg-gradient-to-r from-teal-600 to-emerald-500 h-full rounded-full"
                  style={{ width: "86%" }}
                />
              </div>
            </div>

            {/* Progress Metric 3 */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1.5">
                <span className="text-slate-700">
                  Times Higher Education Impact (SDG 4 &amp; SDG 15)
                </span>
                <span className="text-amber-700 font-bold">
                  Ranked 301-400 Globally
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200">
                <div
                  className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full"
                  style={{ width: "78%" }}
                />
              </div>
            </div>
          </div>

          {/* Right: Visual Infographic Badges */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl font-bold font-serif text-brand-gold mb-1">
                #1
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-800 font-bold mb-1">
                Regional Category
              </span>
              <span className="text-[11px] text-slate-600 font-medium">
                Malakand Division Research Citations 2025
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl font-bold font-serif text-brand-emerald mb-1">
                3.68
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-800 font-bold mb-1">
                Highest NAEAC CGPA
              </span>
              <span className="text-[11px] text-slate-600 font-medium">
                Accreditation Council Evaluation
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl font-bold font-serif text-slate-900 mb-1">
                100%
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-800 font-bold mb-1">
                HEC Recognized
              </span>
              <span className="text-[11px] text-slate-600 font-medium">
                Degrees Validated Across Commonwealth
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-red-50/60 border border-red-200/80 flex flex-col items-center text-center shadow-sm">
              <span className="text-3xl font-bold font-serif text-brand-maroon mb-1">
                Top 5
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-800 font-bold mb-1">
                Ecosystem Campus
              </span>
              <span className="text-[11px] text-slate-600 font-medium">
                Carbon-Neutral Clean Green Initiative
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

