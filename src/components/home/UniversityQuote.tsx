export default function UniversityQuote() {
  return (
    <section
      className="py-14 px-6 max-w-4xl mx-auto text-center"
      data-purpose="institutional-quote"
    >
      <div className="inline-flex justify-center text-brand-gold/70 mb-3">
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#111827] italic leading-[1.3] tracking-[-0.015em]">
        “Knowledge is the sanctuary of noble character. In the quiet heights of Swat, we
        build an eternal bastion of truth, critical thinking, and humanitarian stewardship
        for Pakistan and the world.”
      </blockquote>
      <p className="mt-4 text-xs font-sans uppercase tracking-widest text-[#1D3523] font-semibold">
        — Swat University Institutional Creed
      </p>
    </section>
  );
}

