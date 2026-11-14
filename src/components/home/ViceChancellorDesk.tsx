export default function ViceChancellorDesk() {
  return (
    <section
      className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      data-purpose="vice-chancellor-section"
    >
      <div className="alpine-card overflow-hidden border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/40 to-emerald-50/20 p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left VC Portrait Container */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full max-w-xs">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-b from-slate-100 via-emerald-50/30 to-amber-50/30 border border-slate-200 overflow-hidden flex flex-col items-center justify-end p-5 relative shadow-inner">
                {/* Academic Robe Figure SVG */}
                <svg
                  className="w-56 h-56 text-slate-300 mb-2"
                  fill="currentColor"
                  viewBox="0 0 200 200"
                >
                  <circle cx="100" cy="55" fill="#059669" opacity="0.3" r="35" />
                  <path
                    d="M40 180 C40 120 70 100 100 100 C130 100 160 120 160 180 Z"
                    fill="#047857"
                    opacity="0.22"
                  />
                  <path
                    d="M70 105 L100 145 L130 105 Z"
                    fill="#f59e0b"
                    opacity="0.6"
                  />
                </svg>
                <div className="text-center z-10 bg-white/95 backdrop-blur-sm p-3.5 rounded-xl border border-slate-200 w-full shadow-sm">
                  <span className="inline-block px-3 py-1 bg-brand-maroon text-white text-[11px] font-semibold uppercase tracking-wider rounded-md mb-1 shadow-sm">
                    Office of the Vice Chancellor
                  </span>
                  <h4 className="font-serif text-xl font-bold text-slate-900">
                    Prof. Dr. Hassan Sher
                  </h4>
                  <p className="text-xs text-brand-gold font-sans font-medium">
                    D.Sc, Post-Doc, Meritorious Professor
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Leadership Message */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-0.5 w-8 bg-brand-emerald" />
              <span className="text-xs uppercase tracking-widest text-brand-emerald font-bold">
                Leadership Discourse
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-bold mb-6">
              Voice of the Vice Chancellor
            </h2>
            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                “Welcome to the University of Swat, an academy steeped in historical
                veneration and energized by modern academic zeal. Our institutional
                ambition is not merely granting diplomas, but cultivating analytical
                thinkers who illuminate solutions for climate resilience, digital
                technologies, and societal harmony.”
              </p>
              <p className="text-slate-600 text-sm">
                “With our sprawling new Charbagh main campus, modern laboratories, and
                collaborative research linkages across the globe, we are positioned to offer
                student generations an empowering space where intellect transforms into
                human service.”
              </p>
            </div>

            {/* Signature & Quick Links */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="font-serif italic text-2xl text-brand-emerald font-semibold">
                Prof. Dr. Hassan Sher
              </div>
              <div className="flex items-center gap-4 text-xs font-semibold">
                <a
                  className="px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100 transition"
                  href="#locations-mega"
                >
                  Campuses &amp; Locations
                </a>
                <span className="text-slate-300">•</span>
                <a
                  className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
                  href="#"
                >
                  Statutory Regulations
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

