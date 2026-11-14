"use client";

import { useState } from "react";
import {
  announcementsData,
  announcementCategories,
  type Announcement,
} from "@/data/announcements";

export default function AnnouncementsBoard() {
  const [activeCategory, setActiveCategory] = useState<string>("News");
  const [selectedId, setSelectedId] = useState<number>(0);
  const [isFading, setIsFading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const selectedAnnouncement: Announcement =
    announcementsData.find((a) => a.id === selectedId) ?? announcementsData[0];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setIsFading(true);
    setTimeout(() => {
      setIsFading(false);
    }, 150);

    // If an announcement exists with this category, auto-select it
    const matching = announcementsData.find((a) => a.category === category);
    if (matching) {
      setSelectedId(matching.id);
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.share) {
      navigator
        .share({
          title: selectedAnnouncement.title,
          url: window.location.href,
        })
        .catch(() => {});
    } else if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast("Notice link copied to clipboard!");
    } else {
      showToast("Notice link copied to clipboard!");
    }
  };

  const handleDownload = () => {
    showToast(
      `Preparing official university sealed PDF for: ${selectedAnnouncement.title}`
    );
  };

  return (
    <section
      className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      data-purpose="announcements-board"
      id="announcements-section"
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 border border-slate-700 animate-in fade-in slide-in-from-bottom-2">
          <span className="w-2 h-2 rounded-full bg-brand-emerald" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200">
        <div>
          <span className="text-xs uppercase tracking-widest text-brand-emerald font-bold">
            Official Communications
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight">
            Announcements
          </h2>
        </div>
        <p className="text-slate-500 text-xs sm:text-sm mt-2 sm:mt-0">
          Official administrative, academic, and examination gazettes
        </p>
      </div>

      {/* Main Announcement Box Container */}
      <div className="alpine-card overflow-hidden border border-slate-200 bg-white">
        {/* 3-Column Layout: Categories on Left Rail, List in Center, Preview on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
          {/* Category Rail (Left 2-3 Columns on Desktop) */}
          <div className="md:col-span-3 lg:col-span-2 bg-slate-50/80 border-r border-slate-200 p-4 flex flex-row md:flex-col gap-1.5 overflow-x-auto">
            {announcementCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryClick(cat)}
                  className={`announcement-tab w-full text-left px-3.5 py-3 rounded-xl text-xs font-semibold whitespace-nowrap focus:outline-none flex items-center justify-between transition ${
                    isActive
                      ? "active font-bold bg-white text-brand-emerald shadow-sm border border-emerald-200"
                      : "text-slate-600 hover:bg-white/80"
                  }`}
                >
                  <span>{cat}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-brand-emerald" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Middle: Scrollable Notice Cards (4 cols on lg) */}
          <div
            id="announcements-list-container"
            style={{
              opacity: isFading ? 0.5 : 1,
              transition: "opacity 150ms ease",
            }}
            className="md:col-span-4 lg:col-span-4 border-r border-slate-200 p-4 sm:p-5 overflow-y-auto max-h-[540px] custom-scroll space-y-3 bg-slate-50/30"
          >
            {announcementsData.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`ann-item p-4 rounded-xl cursor-pointer bg-white transition hover:shadow-md ${
                    isSelected
                      ? "border-2 border-emerald-500 shadow-sm"
                      : "border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/20"
                  }`}
                >
                  <div className="flex justify-between items-center text-[11px] mb-1">
                    <span
                      className={
                        isSelected
                          ? "text-brand-gold font-semibold"
                          : "text-slate-500 font-medium"
                      }
                    >
                      {item.shortDate}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                        item.badgeClass.includes("bg-brand-maroon")
                          ? "bg-brand-maroon text-white"
                          : item.badgeClass
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <h5 className="text-slate-900 font-semibold text-sm">
                    {item.title}
                  </h5>
                  <p className="text-slate-600 text-xs mt-1 truncate">
                    {item.shortSnippet}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Detailed Bulletin Showcase (6 cols on lg) */}
          <div className="md:col-span-5 lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div>
                  <span
                    id="preview-badge"
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md ${
                      selectedAnnouncement.badgeClass.includes("bg-brand-maroon")
                        ? "bg-brand-maroon text-white"
                        : selectedAnnouncement.badgeClass
                    }`}
                  >
                    {selectedAnnouncement.badge}
                  </span>
                  <span
                    id="preview-date"
                    className="ml-3 text-xs text-slate-500 font-medium"
                  >
                    {selectedAnnouncement.date}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center p-1 bg-slate-50 shadow-sm shrink-0">
                  <img
                    alt="University Crest"
                    className="w-full h-full object-contain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgzmIrs6_MC6GpfwvkgSo_JupG-LjrQP4YFhvV_KC8w9GKo2DAIn1mG3OqCS3OZN-dN5MWw6fpljvGNRf_56iQDSMseGC-OSbMsDJQ9A_gbskmgYvTVoAGKVijz-CRqm-TEHQ_AufIH9gVAFruEl_-0PdJSEryeaqSooM2Xc57DfimRbyL6weSr0igSXt28CrlHQp7a4bcXFIsSxUTwnYhsYPMk5ciXNccP2kV9x4302tD4FYIX44e"
                  />
                </div>
              </div>

              {/* Main Preview Title */}
              <h3
                id="preview-title"
                className="font-serif text-2xl sm:text-3xl text-slate-900 font-bold mb-4 leading-tight"
              >
                {selectedAnnouncement.title}
              </h3>

              {/* Notice Narrative Body */}
              <div
                id="preview-body"
                className="space-y-4 text-slate-700 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedAnnouncement.body }}
              />
            </div>

            {/* Action Buttons: Share & Download */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleShare}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition flex items-center gap-2 focus:outline-none"
              >
                <svg
                  className="w-4 h-4 text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <span>Share</span>
              </button>

              <button
                type="button"
                onClick={handleDownload}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white text-xs font-bold transition flex items-center gap-2 shadow-md shadow-emerald-700/20 focus:outline-none"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <span>Download Notice (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

