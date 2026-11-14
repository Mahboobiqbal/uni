export default function DiamondFeaturesGrid() {
  const faculties = [
    {
      title: "Natural Sciences",
      description:
        "Institute of Chemical Sciences, Physics laboratory networks, and alpine botanical research preserves.",
      icon: (
        <svg
          className="w-10 h-10 text-brand-emerald group-hover:scale-110 group-hover:text-amber-600 transition duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      ),
    },
    {
      title: "Computer & IT",
      description:
        "AI laboratories, software engineering incubators, distributed computing, and regional data centers.",
      icon: (
        <svg
          className="w-10 h-10 text-brand-emerald group-hover:scale-110 group-hover:text-amber-600 transition duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      ),
    },
    {
      title: "Archaeology & Heritage",
      description:
        "Centre for Uddiyana studies, Gandharan artifacts digital archives, and historic preservation.",
      icon: (
        <svg
          className="w-10 h-10 text-brand-emerald group-hover:scale-110 group-hover:text-amber-600 transition duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 21l-8-4.5v-9L12 3l8 4.5v9L12 21z M12 3v18"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      ),
    },
    {
      title: "Health & Pharmacy",
      description:
        "Pharm-D programs, clinical microbiology analysis, and high-altitude pharmacology laboratories.",
      icon: (
        <svg
          className="w-10 h-10 text-brand-emerald group-hover:scale-110 group-hover:text-amber-600 transition duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      ),
    },
    {
      title: "Management Studies",
      description:
        "Institute of Management Sciences, Eco-tourism management, entrepreneurial incubation center.",
      icon: (
        <svg
          className="w-10 h-10 text-brand-emerald group-hover:scale-110 group-hover:text-amber-600 transition duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      ),
    },
    {
      title: "Law & Social Sciences",
      description:
        "Department of Law, Sharia jurisprudence, Applied Psychology, and public administration degrees.",
      icon: (
        <svg
          className="w-10 h-10 text-brand-emerald group-hover:scale-110 group-hover:text-amber-600 transition duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      data-purpose="diamond-faculties"
      id="faculties-grid"
    >
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest text-brand-emerald font-bold">
          Academic Spectrum
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-bold mt-1">
          Centres of Scholarly Pursuit
        </h2>
        <p className="text-slate-500 text-sm mt-2">
          Pioneering academic faculties established across our campuses
        </p>
      </div>

      {/* 6 Diamond Elements: 3 Cols x 2 Rows with Halo Styling */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 justify-items-center">
        {faculties.map((faculty, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center max-w-xs group"
          >
            <div className="diamond-cell">
              <div className="diamond-content">{faculty.icon}</div>
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900 mt-10 mb-2 group-hover:text-brand-emerald transition">
              {faculty.title}
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              {faculty.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

