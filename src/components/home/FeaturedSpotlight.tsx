export default function FeaturedSpotlight() {
  return (
    <section
      className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      data-purpose="featured-banner"
    >
      <div className="relative rounded-3xl overflow-hidden alpine-card border border-emerald-200/80 p-8 sm:p-14 bg-gradient-to-r from-emerald-50/80 via-white to-amber-50/40">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-maroon text-white text-xs tracking-wider uppercase font-semibold mb-4 shadow-sm">
            Spotlight: Research &amp; Innovation
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-slate-900 font-bold leading-tight mb-6">
            Alpine Biodiversity &amp; Gandhara Heritage Studies
          </h2>
          <p className="text-slate-700 text-base leading-relaxed mb-8">
            The Valley of Swat offers one of the world&apos;s richest ecological and
            archaeological matrices. Our research teams lead international consortiums
            investigating ancient Buddhist monasteries of Butkara, alongside modern
            ethno-botanical discoveries aimed at developing novel biopharmaceuticals.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              className="px-6 py-3.5 rounded-xl bg-brand-emerald hover:bg-brand-emeraldDark text-white font-semibold text-xs tracking-wider uppercase shadow-lg shadow-emerald-700/20 transition-all"
              href="#faculties-grid"
            >
              Discover Faculties
            </a>
            <a
              className="px-6 py-3.5 text-xs tracking-wider uppercase font-bold text-amber-700 hover:text-brand-emerald flex items-center gap-2 transition"
              href="#"
            >
              <span>Read Annual Fieldwork Report</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

