'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, Download, Info, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  announcementCategories,
  announcementsForCategory,
  type Announcement,
  type BadgeTone,
  type CategoryView,
} from '@/data/announcements';

/* ─── Badge pill tones ─────────────────────────────────────────────────────── */

const BADGE_TONES: Record<BadgeTone, string> = {
  critical: 'bg-[#7F1D1D] text-white ring-1 ring-white/40',
  emerald: 'bg-emerald-50 text-emerald-800 border border-emerald-300',
  amber: 'bg-amber-50 text-amber-800 border border-amber-300',
  blue: 'bg-blue-50 text-blue-800 border border-blue-300',
  purple: 'bg-purple-50 text-purple-800 border border-purple-300',
  stone: 'bg-stone-100 text-stone-700 border border-stone-200',
};

const BADGE_BASE = 'inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide whitespace-nowrap';

/* ─── Middle column: auto-looping, pause-on-hover feed ─────────────────────── */

interface AutoScrollingFeedProps {
  items: Announcement[];
  selectedId: number;
  onSelect: (item: Announcement) => void;
  /** User has clicked a notice → do not auto-resume after hover ends. */
  lockOnLeave: boolean;
}

function AutoScrollingFeed({ items, selectedId, onSelect, lockOnLeave }: AutoScrollingFeedProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Reset scroll position when the filtered category changes.
  useEffect(() => {
    const el = viewportRef.current;
    if (el) el.scrollTop = 0;
  }, [items]);

  // Seamless auto-scroll loop: content is rendered twice, so jumping from the
  // bottom half back to the top half is visually invisible.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    let prev = performance.now();
    let raf = 0;

    const step = (now: number) => {
      const dt = Math.min(0.05, (now - prev) / 1000);
      prev = now;
      const track = trackRef.current;
      const half = track ? track.scrollHeight / 2 : 0;
      if (!hovered && !lockOnLeave && half > el.clientHeight) {
        el.scrollTop += 42 * dt;
        if (el.scrollTop >= half) el.scrollTop -= half;
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [items, hovered, lockOnLeave]);

  const renderFeed = (hidden: boolean) => (
    <div
      className="flex flex-col gap-3 pb-3"
      aria-hidden={hidden || undefined}
      {...(hidden ? { inert: true as unknown as boolean } : {})}
    >
      {items.map((item) => {
        const active = item.id === selectedId;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item)}
            aria-pressed={active}
            className={cn(
              'group/bullet relative w-full text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/50 overflow-hidden',
              active
                ? 'border-emerald-600/70 ring-1 ring-emerald-600/20 bg-gradient-to-b from-emerald-50/50 to-white shadow-[0_10px_28px_-14px_rgba(21,59,39,0.22)]'
                : 'border-stone-300 bg-gradient-to-b from-white to-stone-50/60 shadow-[0_1px_2px_rgba(28,25,23,0.04)] hover:-translate-y-[2px] active:scale-[0.985] active:translate-y-px hover:border-emerald-500/40 hover:shadow-[0_16px_34px_-16px_rgba(21,59,39,0.25)]'
            )}
          >
            {/* VC-card sheen sweep on hover */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-700 ease-out group-hover/bullet:translate-x-full"
            />
            <div className="flex items-center justify-between gap-2 mb-1">
              <span
                className={cn(
                  'text-[11px] font-medium',
                  active ? 'text-amber-700' : 'text-stone-500'
                )}
              >
                {item.date}
              </span>
              <span className={cn(BADGE_BASE, BADGE_TONES[item.tone])}>{item.badge}</span>
            </div>
            <span className="text-sm font-bold text-stone-900 leading-snug mt-1.5 line-clamp-2 group-hover:text-[#153B27] transition-colors block">
              {item.title}
            </span>
            <p className="text-xs text-stone-600 line-clamp-1 mt-1">{item.snippet}</p>
          </button>
        );
      })}
    </div>
  );

  return (
    <div
      ref={viewportRef}
      className="h-full min-h-[220px] overflow-y-auto custom-scroll pr-1.5 -mr-1.5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div ref={trackRef}>
        {renderFeed(false)}
        {items.length > 1 && renderFeed(true)}
      </div>
    </div>
  );
}

/* ─── Campus Bulletin section ──────────────────────────────────────────────── */

export default function CampusBulletin() {
  const [activeCategory, setActiveCategory] = useState<CategoryView>('Recent');
  const [selectedId, setSelectedId] = useState<number>(
    () => announcementsForCategory('Recent')[0]?.id ?? 0
  );
  const [lockOnLeave, setLockOnLeave] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  /* Sliding active-tab pill geometry */
  const railRef = useRef<HTMLDivElement>(null);
  const catBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [pillPos, setPillPos] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  const measurePill = useCallback(() => {
    const idx = announcementCategories.indexOf(activeCategory);
    const rail = railRef.current;
    const btn = catBtnRefs.current[idx];
    if (!rail || !btn) return;
    const rr = rail.getBoundingClientRect();
    const br = btn.getBoundingClientRect();
    setPillPos({
      left: br.left - rr.left,
      top: br.top - rr.top,
      width: br.width,
      height: br.height,
    });
  }, [activeCategory]);

  useEffect(() => {
    measurePill();
  }, [measurePill]);

  useEffect(() => {
    const onResize = () => measurePill();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [measurePill]);

  /* Bento-style cursor spotlight over the unified container */
  const handleSpotMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = spotRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.background = `radial-gradient(560px circle at ${x.toFixed(2)}% ${y.toFixed(2)}%, rgba(21,59,39,0.10), rgba(127,29,29,0.05) 40%, transparent 68%)`;
  };

  const feedItems = useMemo(() => announcementsForCategory(activeCategory), [activeCategory]);

  const selectedAnnouncement = useMemo(
    () =>
      announcementsForCategory('Recent').find((a) => a.id === selectedId) ??
      feedItems[0] ??
      announcementsForCategory('Recent')[0],
    [selectedId, feedItems]
  );

  const showToast = useCallback((msg: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToastMessage(msg);
    toastTimer.current = setTimeout(() => setToastMessage(null), 3000);
  }, []);

  useEffect(
    () => () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    },
    []
  );

  const handleCategoryClick = (view: CategoryView) => {
    if (view === activeCategory) return;
    const list = announcementsForCategory(view);
    setActiveCategory(view);
    setSelectedId(list[0]?.id ?? 0);
    setLockOnLeave(false);
  };

  const handleSelect = (item: Announcement) => {
    setSelectedId(item.id);
    setLockOnLeave(true);
  };

  /* Listen for hero widget announcement selection */
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (!detail) return;
      const { category, announcementId } = detail;
      if (category && announcementCategories.includes(category as CategoryView)) {
        const view = category as CategoryView;
        if (view !== activeCategory) {
          const list = announcementsForCategory(view);
          setActiveCategory(view);
          setSelectedId(announcementId ?? list[0]?.id ?? 0);
          setLockOnLeave(true);
        } else {
          setSelectedId(announcementId ?? 0);
          setLockOnLeave(true);
        }
      }
    };
    window.addEventListener('hero-announcement-select', handler);
    return () => window.removeEventListener('hero-announcement-select', handler);
  }, [activeCategory]);

  const handleShare = async () => {
    const shareData = {
      title: selectedAnnouncement.title,
      text: `${selectedAnnouncement.title} — University of Swat official notice (${selectedAnnouncement.reference})`,
      url: typeof window !== 'undefined' ? window.location.href : '',
    };
    try {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share(shareData);
        return;
      }
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);
        showToast('Notice link copied to clipboard!');
        return;
      }
      showToast('Notice link copied to clipboard!');
    } catch {
      // User dismissed the native share sheet.
    }
  };

  const handleDownload = () => {
    const announcement = selectedAnnouncement;
    const text = [
      'UNIVERSITY OF SWAT',
      'Official Announcement / Gazette',
      '',
      `Title: ${announcement.title}`,
      `Category: ${announcement.category}`,
      `Badge: ${announcement.badge}`,
      `Reference: ${announcement.reference}`,
      `Date: ${announcement.date}`,
      '',
      ...announcement.paragraphs,
      '',
      announcement.callout ? `${announcement.callout.title}: ${announcement.callout.text}` : '',
      '',
      '© University of Swat · Charbagh, Swat, Khyber Pakhtunkhwa, Pakistan',
    ]
      .filter((line) => line !== '')
      .join('\n');

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${announcement.reference.replace(/[^a-z0-9]/gi, '-')}.txt`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast(`Downloaded official notice: ${announcement.title}`);
  };

  return (
    <section
      id="announcements"
      data-purpose="campus-bulletin"
      className="relative overflow-hidden pt-16 sm:pt-20 pb-8 sm:pb-10 bg-[#F6F5F0]"
    >
      {/* VC-style ambient color aura behind the bulletin */}
      <div className="absolute -top-24 -right-16 w-[420px] h-[420px] rounded-full bg-[#153B27]/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-24 w-[380px] h-[380px] rounded-full bg-[#7F1D1D]/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-[460px] h-[460px] rounded-full bg-[#B48A3E]/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Split Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-0.5 w-7 bg-[#7F1D1D]" />
              <span className="text-xs uppercase tracking-widest text-[#7F1D1D] font-bold">
                Official Communications
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#14291D] font-bold tracking-[-0.025em] leading-[1.12]">
              Campus Bulletin &amp; Official Announcements
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-stone-600 max-w-md lg:text-right leading-[1.68]">
            Official administrative, academic, examination and campus gazettes issued by the
            Registrar&rsquo;s Office of the University of Swat.
          </p>
        </div>

        {/* Unified 3-Column Master-Detail Container — bento tile surface + spotlight */}
        <div
          className="group relative rounded-xl bg-gradient-to-b from-white to-[#FBF9F6] border border-stone-300 shadow-[0_24px_70px_-28px_rgba(21,59,39,0.16),0_2px_6px_rgba(21,59,39,0.05)] overflow-hidden"
          onMouseEnter={() => {
            const el = spotRef.current;
            if (el) el.style.opacity = '1';
          }}
          onMouseLeave={() => {
            const el = spotRef.current;
            if (el) el.style.opacity = '0';
          }}
          onMouseMove={handleSpotMove}
        >
          {/* Cursor-following spotlight (bento-style light) */}
          <div
            ref={spotRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
            style={{ opacity: 0 }}
          />

          <div className="relative z-10">
            {/* ── Top Row — Full-Width Category Rail ── */}
            <div className="border-b border-stone-200 bg-[#FAF9F6] p-4 min-w-0">
              <div
                ref={railRef}
                className="relative flex gap-1.5 overflow-x-auto pb-1"
              >
                {/* Sliding active pill (Origin Tabs-style) */}
                <div
                  aria-hidden="true"
                  className="absolute z-0 rounded-xl border border-emerald-600/30 bg-gradient-to-b from-emerald-50 to-white shadow-[0_2px_8px_-2px_rgba(21,59,39,0.10)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={
                    pillPos
                      ? { left: pillPos.left, top: pillPos.top, width: pillPos.width, height: pillPos.height }
                      : { display: 'none' }
                  }
                />
                {announcementCategories.map((cat, index) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      ref={(node) => {
                        catBtnRefs.current[index] = node;
                      }}
                      type="button"
                      onClick={() => handleCategoryClick(cat)}
                      aria-pressed={isActive}
                      className={cn(
                        'group relative z-10 flex items-center justify-between gap-2 px-3.5 py-3 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/50 shrink-0',
                        isActive
                          ? 'text-[#153B27]'
                          : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/70 hover:-translate-y-px'
                      )}
                    >
                      <span>{cat}</span>
                      <span
                        className={cn(
                          'w-2 h-2 rounded-full transition-all duration-200',
                          isActive
                            ? 'bg-[#153B27] opacity-100 scale-110 ring-2 ring-emerald-100'
                            : 'bg-stone-300 opacity-0 group-hover:opacity-40'
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── Two-Column Master-Detail ── */}
            <div className="grid grid-cols-12">
              {/* ── Left Column — Scrollable Auto-Looping Notice Feed ── */}
              <div className="col-span-12 lg:col-span-5 border-b lg:border-b-0 lg:border-r border-stone-200 p-4 max-h-[420px] lg:max-h-[720px] relative overflow-hidden bg-white min-w-0">
                <AutoScrollingFeed
                  items={feedItems}
                  selectedId={selectedId}
                  onSelect={handleSelect}
                  lockOnLeave={lockOnLeave}
                />
                {/* Scroll-hint edge fades */}
                <div aria-hidden="true" className="pointer-events-none absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-white to-transparent z-10" />
                <div aria-hidden="true" className="pointer-events-none absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-white to-transparent z-10" />
              </div>

              {/* ── Right Column — Full Official Notice Reader ── */}
              <div className="col-span-12 lg:col-span-7 relative overflow-hidden p-6 sm:p-8 flex flex-col justify-between bg-[#7F1D1D] text-white min-w-0">
                {/* Faint institutional watermark filling the reader's tail space */}
                <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 -right-8 w-64 h-64 opacity-[0.045] select-none">
                  <img src="/uos-logo-circle.png" alt="" aria-hidden="true" className="w-full h-full object-contain rounded-full" />
                </div>

                <div key={selectedAnnouncement.id} className="animate-notice-rise relative">
                  {/* Header Metadata Row */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className={cn(BADGE_BASE, BADGE_TONES[selectedAnnouncement.tone])}>
                        {selectedAnnouncement.badge}
                      </span>
                      <span className="text-xs text-white/70 font-medium">
                        Reference: {selectedAnnouncement.reference} &bull; {selectedAnnouncement.date}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-xl border border-white/20 p-1 bg-white/10 shrink-0">
                      <img
                        alt="University of Swat Crest"
                        src="/uos-logo-circle.png"
                        className="w-full h-full object-contain rounded-md"
                      />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/20 my-5" />

                  {/* Main Content Body */}
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white leading-tight tracking-[-0.015em]">
                    {selectedAnnouncement.title}
                  </h3>

                  <div className="space-y-4 mt-4 text-white/80 text-sm lg:text-base leading-relaxed">
                    {selectedAnnouncement.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Highlighted Callout Box */}
                  {selectedAnnouncement.callout && (
                    <div className="bg-white/10 border border-white/20 rounded-xl p-4 mt-6 flex gap-3">
                      <span className="w-8 h-8 rounded-lg bg-white/10 text-[#E5CD9B] border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Info className="w-4 h-4" />
                      </span>
                      <div>
                        <p className="text-[11px] uppercase tracking-widest font-bold text-[#E5CD9B] mb-1">
                          {selectedAnnouncement.callout.title}
                        </p>
                        <p className="text-sm text-white/90 leading-relaxed font-medium">
                          {selectedAnnouncement.callout.text}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Action Bar */}
                <div className="border-t border-white/20 pt-5 mt-6 flex flex-wrap items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleShare}
                    className="inline-flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer hover:-translate-y-[2px] active:scale-[0.985] active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/50"
                  >
                    <Share2 className="w-4 h-4 text-[#E5CD9B]" />
                    Share
                  </button>
                  <button
                    type="button"
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 bg-[#E5CD9B] text-[#661717] px-5 py-2.5 rounded-xl text-sm font-semibold shadow-[0_12px_26px_-12px_rgba(0,0,0,0.45)] hover:bg-white hover:shadow-[0_16px_34px_-12px_rgba(0,0,0,0.5)] transition-all duration-150 cursor-pointer hover:-translate-y-[2px] active:scale-[0.985] active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/50"
                  >
                    <Download className="w-4 h-4" />
                    Download Notice (PDF)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div role="alert" className="fixed bottom-6 right-6 z-50 bg-[#0C1912] text-white text-xs px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 border border-white/10 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </section>
  );
}
