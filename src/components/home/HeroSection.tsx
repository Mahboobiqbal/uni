export default function HeroSection() {
  return (
    <section
      className="relative pt-6 pb-20 lg:pt-12 lg:pb-28 overflow-hidden"
      data-purpose="hero-banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Main Hero Typography */}
          <div className="lg:col-span-8 text-left">
            {/* Official Crest Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50/80 border border-emerald-200/80 text-brand-emerald text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              Centre of Higher Learning in Ancient Uddiyana
            </div>

            {/* Main Hero Heading */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-6">
              Where Ancient Wisdom Meets <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 bg-clip-text text-transparent">
                Modern Scientific Excellence
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8">
              Established to illuminate the historic Swat Valley, the University of Swat
              empowers future leaders, researchers, and innovators through world-class
              academic disciplines, cutting-edge laboratories, and profound cultural
              scholarship.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-semibold text-sm rounded-xl shadow-xl shadow-emerald-700/20 hover:shadow-emerald-700/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                href="#about-uni"
              >
                Explore University
              </a>
              <a
                className="px-7 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl text-sm font-semibold transition-all shadow-sm hover:border-slate-400"
                href="#announcements-section"
              >
                View Announcements
              </a>
            </div>
          </div>

          {/* Right Floating Quick Utilities Showcase */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="alpine-card p-6 border-l-4 border-l-brand-emerald bg-white">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider font-bold text-brand-emerald">
                  Quick Portal Gateway
                </span>
                <span className="w-2 h-2 rounded-full bg-brand-emerald" />
              </div>
              <p className="text-xs text-slate-600 mb-4">
                Instant direct access for enrolled students, scholarly researchers, and
                university staff.
              </p>
              <div className="space-y-2">
                <a
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 hover:bg-emerald-50/70 border border-slate-200 text-xs font-semibold text-slate-800 hover:text-brand-emerald transition"
                  href="#admissions-desk"
                >
                  <span>Admissions &amp; Prospectus 2026</span>
                  <span>→</span>
                </a>
                <a
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 hover:bg-emerald-50/70 border border-slate-200 text-xs font-semibold text-slate-800 hover:text-brand-emerald transition"
                  href="#announcements-section"
                >
                  <span>Official Announcements Gazette</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Alpine Silhouette Card Graphic Element */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900 p-6 text-white shadow-xl">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />
              <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-widest block mb-1">
                Swat River Basin &amp; Hindu Raj
              </span>
              <h4 className="font-serif text-xl font-bold text-white mb-2">
                Charbagh Main Campus
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Surrounded by ancient stupas and alpine peaks, fostering an ideal
                ecological haven for higher education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

