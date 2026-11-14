"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  programsMegaData,
  departmentsMegaData,
  locationsMegaData,
  portalsMegaData,
} from "@/data/navigation";

type ActiveMenu = "programs" | "departments" | "locations" | "portals" | null;

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (menu: ActiveMenu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const closeAllMegaMenus = () => {
    setActiveMenu(null);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        closeAllMegaMenus();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeAllMegaMenus();
        setMobileNavOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 pb-2 transition-all duration-300"
    >
      <header className="max-w-7xl mx-auto bg-white/90 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-floating transition-all duration-300">
        <div className="px-5 sm:px-7 flex items-center justify-between h-20">
          {/* Institutional Logo & Title */}
          <Link href="/" className="flex items-center space-x-3.5 group">
            <div className="w-12 h-12 rounded-2xl p-1 bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-amber-500/20 border border-emerald-500/30 group-hover:border-brand-emerald transition-all duration-300 shadow-sm flex items-center justify-center shrink-0">
              <img
                alt="University of Swat Logo"
                className="w-full h-full object-contain rounded-xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgzmIrs6_MC6GpfwvkgSo_JupG-LjrQP4YFhvV_KC8w9GKo2DAIn1mG3OqCS3OZN-dN5MWw6fpljvGNRf_56iQDSMseGC-OSbMsDJQ9A_gbskmgYvTVoAGKVijz-CRqm-TEHQ_AufIH9gVAFruEl_-0PdJSEryeaqSooM2Xc57DfimRbyL6weSr0igSXt28CrlHQp7a4bcXFIsSxUTwnYhsYPMk5ciXNccP2kV9x4302tD4FYIX44e"
              />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-slate-900 uppercase group-hover:text-brand-emerald transition-colors">
                University of Swat
              </span>
              <span className="block text-[10px] tracking-widest text-emerald-700 font-sans uppercase font-semibold">
                Khyber Pakhtunkhwa, Pakistan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 font-sans text-sm font-medium">
            {/* Programs Menu Trigger */}
            <div className="relative group">
              <button
                type="button"
                className={`nav-btn px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 focus:outline-none ${
                  activeMenu === "programs"
                    ? "text-brand-emerald bg-slate-50"
                    : "text-slate-700 hover:text-brand-emerald hover:bg-slate-50"
                }`}
                onClick={() => toggleMenu("programs")}
                aria-expanded={activeMenu === "programs"}
              >
                <span>Programs</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "programs"
                      ? "rotate-180 text-brand-emerald"
                      : "text-slate-400 group-hover:text-brand-emerald"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>

            {/* Departments Menu Trigger */}
            <div className="relative group">
              <button
                type="button"
                className={`nav-btn px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 focus:outline-none ${
                  activeMenu === "departments"
                    ? "text-brand-emerald bg-slate-50"
                    : "text-slate-700 hover:text-brand-emerald hover:bg-slate-50"
                }`}
                onClick={() => toggleMenu("departments")}
                aria-expanded={activeMenu === "departments"}
              >
                <span>Departments</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "departments"
                      ? "rotate-180 text-brand-emerald"
                      : "text-slate-400 group-hover:text-brand-emerald"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>

            {/* Locations Menu Trigger */}
            <div className="relative group">
              <button
                type="button"
                className={`nav-btn px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 focus:outline-none ${
                  activeMenu === "locations"
                    ? "text-brand-emerald bg-slate-50"
                    : "text-slate-700 hover:text-brand-emerald hover:bg-slate-50"
                }`}
                onClick={() => toggleMenu("locations")}
                aria-expanded={activeMenu === "locations"}
              >
                <span>Locations</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "locations"
                      ? "rotate-180 text-brand-emerald"
                      : "text-slate-400 group-hover:text-brand-emerald"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>

            {/* Portals Menu Trigger */}
            <div className="relative group">
              <button
                type="button"
                className={`nav-btn px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 focus:outline-none ${
                  activeMenu === "portals"
                    ? "text-brand-emerald bg-slate-50"
                    : "text-slate-700 hover:text-brand-emerald hover:bg-slate-50"
                }`}
                onClick={() => toggleMenu("portals")}
                aria-expanded={activeMenu === "portals"}
              >
                <span>Portals</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "portals"
                      ? "rotate-180 text-brand-emerald"
                      : "text-slate-400 group-hover:text-brand-emerald"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>

            {/* Apply Now CTA */}
            <a
              className="ml-3 px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white text-xs uppercase tracking-wider font-semibold rounded-xl shadow-lg shadow-emerald-700/20 hover:shadow-emerald-700/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              href="#admissions-desk"
            >
              Apply Now
            </a>
          </nav>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              className="px-3.5 py-1.5 bg-brand-emerald text-white text-[11px] uppercase tracking-wider font-semibold rounded-lg shadow-sm"
              href="#admissions-desk"
            >
              Apply
            </a>
            <button
              type="button"
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              onClick={() => setMobileNavOpen((prev) => !prev)}
              aria-label="Toggle Navigation Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileNavOpen ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav Accordion / Dropdown */}
        {mobileNavOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white/95 px-5 py-4 space-y-3 rounded-b-2xl">
            <div className="space-y-1">
              <button
                type="button"
                className="w-full flex items-center justify-between py-2 text-sm font-semibold text-slate-800"
                onClick={() => toggleMenu("programs")}
              >
                <span>Programs</span>
                <span className="text-xs text-slate-400">
                  {activeMenu === "programs" ? "−" : "+"}
                </span>
              </button>
              {activeMenu === "programs" && (
                <div className="pl-3 pb-2 space-y-2 text-xs text-slate-600">
                  <p className="font-bold text-brand-emerald pt-1">Undergraduate</p>
                  <ul className="space-y-1 pl-2">
                    {programsMegaData.columns[0].links.map((link, idx) => (
                      <li key={idx}>
                        <a href={link.href} className="hover:text-brand-emerald">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="font-bold text-brand-emerald pt-1">Postgraduate</p>
                  <ul className="space-y-1 pl-2">
                    {programsMegaData.columns[1].links.map((link, idx) => (
                      <li key={idx}>
                        <a href={link.href} className="hover:text-brand-emerald">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                type="button"
                className="w-full flex items-center justify-between py-2 text-sm font-semibold text-slate-800"
                onClick={() => toggleMenu("departments")}
              >
                <span>Departments</span>
                <span className="text-xs text-slate-400">
                  {activeMenu === "departments" ? "−" : "+"}
                </span>
              </button>
              {activeMenu === "departments" && (
                <div className="pl-3 pb-2 space-y-2 text-xs text-slate-600">
                  {departmentsMegaData.map((col, idx) => (
                    <div key={idx}>
                      <p className="font-bold text-brand-emerald pt-1">{col.title}</p>
                      <ul className="space-y-1 pl-2">
                        {col.links.map((l, i) => (
                          <li key={i}>
                            <a href={l.href} className="hover:text-brand-emerald">
                              {l.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              <button
                type="button"
                className="w-full flex items-center justify-between py-2 text-sm font-semibold text-slate-800"
                onClick={() => toggleMenu("locations")}
              >
                <span>Locations</span>
                <span className="text-xs text-slate-400">
                  {activeMenu === "locations" ? "−" : "+"}
                </span>
              </button>
              {activeMenu === "locations" && (
                <div className="pl-3 pb-2 space-y-2 text-xs text-slate-600">
                  {locationsMegaData.map((loc, idx) => (
                    <div key={idx} className="p-2 bg-slate-50 rounded-lg">
                      <p className="font-bold text-brand-emerald">{loc.title}</p>
                      <p className="text-[11px] text-slate-500">{loc.badge}</p>
                    </div>
                  ))}
                </div>
              )}

              <button
                type="button"
                className="w-full flex items-center justify-between py-2 text-sm font-semibold text-slate-800"
                onClick={() => toggleMenu("portals")}
              >
                <span>Portals</span>
                <span className="text-xs text-slate-400">
                  {activeMenu === "portals" ? "−" : "+"}
                </span>
              </button>
              {activeMenu === "portals" && (
                <div className="pl-3 pb-2 space-y-1 text-xs">
                  {portalsMegaData.map((portal, idx) => (
                    <a
                      key={idx}
                      href={portal.href}
                      className="flex items-center gap-2 py-1 text-slate-700 hover:text-brand-emerald"
                    >
                      <span className={`w-2 h-2 rounded-full ${portal.dotColor}`} />
                      <span>{portal.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mega Menu Drops (Re-styled Clean Floating Drawers) */}
        {/* Programs Mega Menu */}
        <div
          className={`mega-panel w-full bg-white/95 backdrop-blur-md border-t border-slate-100 rounded-b-2xl shadow-xl transition-all duration-300 ${
            activeMenu === "programs" ? "block" : "hidden"
          }`}
          id="programs-mega"
        >
          <div className="max-w-7xl mx-auto py-7 px-8 grid grid-cols-4 gap-8">
            {programsMegaData.columns.map((column, idx) => (
              <div key={idx}>
                <h4 className="font-serif text-brand-emerald text-lg mb-3 font-bold border-b border-emerald-100 pb-2">
                  {column.title}
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a className="hover:text-brand-gold transition" href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Admission Cycle Promo Card */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50/50 p-5 rounded-xl border border-emerald-100">
              <span className="text-xs uppercase text-brand-gold font-bold tracking-wider">
                {programsMegaData.banner.tag}
              </span>
              <h5 className="text-slate-900 font-semibold mt-1 mb-2 text-sm">
                {programsMegaData.banner.title}
              </h5>
              <p className="text-xs text-slate-600 mb-4">
                {programsMegaData.banner.description}
              </p>
              <a
                className="inline-block text-xs font-semibold text-brand-emerald hover:text-brand-emeraldDark hover:underline"
                href={programsMegaData.banner.ctaHref}
              >
                {programsMegaData.banner.ctaText}
              </a>
            </div>
          </div>
        </div>

        {/* Departments Mega Menu */}
        <div
          className={`mega-panel w-full bg-white/95 backdrop-blur-md border-t border-slate-100 rounded-b-2xl shadow-xl transition-all duration-300 ${
            activeMenu === "departments" ? "block" : "hidden"
          }`}
          id="departments-mega"
        >
          <div className="max-w-7xl mx-auto py-7 px-8 grid grid-cols-3 gap-8">
            {departmentsMegaData.map((dept, idx) => (
              <div key={idx}>
                <h4 className="font-serif text-brand-emerald text-lg mb-3 font-bold border-b border-emerald-100 pb-2">
                  {dept.title}
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  {dept.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a className="hover:text-brand-gold transition" href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Locations Mega Menu */}
        <div
          className={`mega-panel w-full bg-white/95 backdrop-blur-md border-t border-slate-100 rounded-b-2xl shadow-xl transition-all duration-300 ${
            activeMenu === "locations" ? "block" : "hidden"
          }`}
          id="locations-mega"
        >
          <div className="max-w-7xl mx-auto py-7 px-8 grid grid-cols-3 gap-6">
            {locationsMegaData.map((loc, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white transition-all"
              >
                <h4 className="text-brand-emerald font-bold text-base mb-1">
                  {loc.title}
                </h4>
                <p className="text-xs text-slate-600 mb-3">{loc.description}</p>
                <span className="text-[11px] text-brand-gold font-medium bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                  {loc.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Portals Mega Menu */}
        <div
          className={`mega-panel w-full bg-white/95 backdrop-blur-md border-t border-slate-100 rounded-b-2xl shadow-xl transition-all duration-300 ${
            activeMenu === "portals" ? "block" : "hidden"
          }`}
          id="portals-mega"
        >
          <div className="max-w-7xl mx-auto py-6 px-8 flex justify-between items-center text-sm">
            <div className="flex flex-wrap gap-8">
              {portalsMegaData.map((portal, idx) => (
                <a
                  key={idx}
                  className="flex items-center gap-2 text-slate-700 hover:text-brand-emerald font-medium"
                  href={portal.href}
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${portal.dotColor}`} />
                  <span>{portal.label}</span>
                </a>
              ))}
            </div>
            <button
              type="button"
              className="text-xs text-slate-500 hover:text-slate-800 underline focus:outline-none"
              onClick={closeAllMegaMenus}
            >
              Close
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

