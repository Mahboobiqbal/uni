'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, Search, X } from 'lucide-react';
import TopNoticeRibbon from './TopNoticeRibbon';
import MegaMenuPanel from './MegaMenuPanel';
import { navItems, primaryActions } from '@/data/navigation';

const panelId = (anchor: string) => `nav-panel-${anchor}`;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const headerRef = useRef<HTMLElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  const activeItem = navItems.find((item) => item.label === activeDropdown) ?? null;

  const closeAll = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  };

  // Close any open surface after a route change.
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setActiveDropdown(null);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Outside click closes the mega panel.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const focusFirstPanelLink = (anchor: string) => {
    window.setTimeout(() => {
      document
        .querySelector<HTMLAnchorElement>(`#${panelId(anchor)} a[href]`)
        ?.focus();
    }, 40);
  };

  const moveBetweenTriggers = (direction: number, current: number) => {
    const triggers = Array.from(
      desktopNavRef.current?.querySelectorAll<HTMLElement>('[data-nav-trigger]') ?? []
    );
    if (!triggers.length) return;
    const next = (current + direction + triggers.length) % triggers.length;
    triggers[next].focus();
  };

  const handleHeaderKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key !== 'Escape') return;
    if (!activeDropdown && !mobileMenuOpen) return;
    event.preventDefault();
    const restoreFocus = activeDropdown !== null;
    closeAll();
    if (restoreFocus) lastTriggerRef.current?.focus();
  };

  return (
    <header
      ref={headerRef}
      onKeyDown={handleHeaderKeyDown}
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/15 bg-[#0C1912]/92 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.8)] backdrop-blur-xl'
          : 'bg-gradient-to-b from-black/75 via-black/35 to-transparent'
      }`}
    >
      <TopNoticeRibbon />

      <div className="relative" onMouseLeave={() => setActiveDropdown(null)}>
        <div
          className={`mx-auto flex w-full max-w-[1360px] items-center justify-between gap-6 px-4 transition-all duration-300 sm:px-6 lg:px-12 ${
            isScrolled ? 'py-2.5' : 'py-3.5'
          }`}
        >
          {/* ── Branding ───────────────────────────────────────────────── */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3 text-white focus:outline-none"
            title="University of Swat"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 p-0.5 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-white/50 sm:h-11 sm:w-11">
              <img
                src="/uos-logo-circle.png"
                alt="University of Swat crest"
                className="h-full w-full rounded-full object-contain"
              />
            </span>
            <span className="flex flex-col text-left">
              <span className="font-serif text-lg font-bold leading-tight tracking-[-0.02em] text-white sm:text-[19px] 2xl:text-[21px]">
                University of Swat
              </span>
              <span className="mt-0.5 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-white/60">
                Khyber Pakhtunkhwa, Pakistan
              </span>
            </span>
          </Link>

          {/* ── Desktop navigation ─────────────────────────────────────── */}
          <nav
            ref={desktopNavRef}
            aria-label="Primary"
            className="hidden items-center gap-1 xl:flex"
          >
            {navItems.map((item, index) => {
              const isOpen = activeDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={(event) => {
                    lastTriggerRef.current =
                      event.currentTarget.querySelector<HTMLElement>('[data-nav-trigger]');
                    setActiveDropdown(item.label);
                  }}
                >
                  <Link
                    href={item.href}
                    data-nav-trigger={item.anchor}
                    aria-expanded={isOpen}
                    aria-controls={panelId(item.anchor)}
                    onClick={(event) => {
                      // Click goes to the section's own page; hover opens the panel.
                      lastTriggerRef.current = event.currentTarget;
                      setActiveDropdown(null);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                        event.preventDefault();
                        moveBetweenTriggers(event.key === 'ArrowRight' ? 1 : -1, index);
                        return;
                      }
                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        lastTriggerRef.current = event.currentTarget;
                        setActiveDropdown(item.label);
                        focusFirstPanelLink(item.anchor);
                      }
                    }}
                    className={`relative flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-md px-2 py-2 text-[12.5px] font-semibold transition-colors duration-150 focus:outline-none 2xl:px-2.5 2xl:text-[13px] ${
                      isOpen ? 'text-white' : 'text-white/85 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      aria-hidden="true"
                      strokeWidth={2.2}
                      className={`h-3 w-3 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#C8A96E]' : 'text-white/50'
                      }`}
                    />
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-2.5 -bottom-px h-[2px] rounded-full bg-[#C8A96E] transition-opacity duration-200 ${
                        isOpen ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* ── Actions ────────────────────────────────────────────────── */}
          <div className="hidden shrink-0 items-center gap-2.5 md:flex">
            <Link
              href={primaryActions.search.href}
              aria-label={primaryActions.search.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/85 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href={primaryActions.portal.href}
              className="inline-flex items-center justify-center rounded-lg bg-[#7F1D1D] px-4 py-2.5 text-[13px] font-semibold text-white shadow-[0_10px_24px_-12px_rgba(0,0,0,0.9)] transition-all duration-150 hover:bg-[#681818] active:translate-y-px active:bg-[#521313]"
            >
              {primaryActions.portal.label}
            </Link>
          </div>

          {/* ── Drawer toggle ──────────────────────────────────────────── */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="-mr-1 flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 focus:outline-none xl:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop mega panel — one instance, always inside the viewport */}
        <div className="hidden xl:block">
          {activeItem && (
            <MegaMenuPanel
              item={activeItem}
              panelId={panelId(activeItem.anchor)}
              onNavigate={() => setActiveDropdown(null)}
            />
          )}
        </div>
      </div>

      {/* ── Mobile / tablet drawer ─────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="max-h-[calc(100vh-4.5rem)] overflow-y-auto overscroll-contain border-t border-white/10 bg-[#0C1912]/97 px-4 pb-8 pt-2 backdrop-blur-2xl sm:px-6 xl:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {navItems.map((item) => {
              const isOpen = mobileSubmenu === item.label;
              const drawerPanelId = `mobile-panel-${item.anchor}`;

              return (
                <div key={item.label} className="border-b border-white/10 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setMobileSubmenu(isOpen ? null : item.label)}
                    aria-expanded={isOpen}
                    aria-controls={drawerPanelId}
                    className="flex min-h-[52px] w-full items-center justify-between gap-3 py-3.5 text-left"
                  >
                    <span className="flex flex-col">
                      <span className="text-[15px] font-semibold text-white">{item.label}</span>
                      <span className="mt-0.5 text-[11px] text-white/60">{item.summary}</span>
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      strokeWidth={2}
                      className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#C8A96E]' : 'text-white/50'
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div id={drawerPanelId} className="pb-4">
                      <Link
                        href={item.href}
                        onClick={closeAll}
                        className="mb-3 flex items-center justify-between gap-2 rounded-lg border border-[#C8A96E]/25 bg-white/[0.04] px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#C8A96E]"
                      >
                        {item.viewAllLabel}
                        <ArrowIcon />
                      </Link>

                      <div className="flex flex-col gap-4">
                        {item.groups.map((group) => (
                          <div key={group.title}>
                            <p className="mb-1.5 pl-3 text-[9.5px] font-bold uppercase tracking-[0.2em] text-white/55">
                              {group.title}
                            </p>
                            <ul className="flex flex-col">
                              {group.links.map((link) => {
                                const Icon = link.icon;
                                return (
                                  <li key={`${group.title}-${link.label}`}>
                                    <Link
                                      href={link.href}
                                      onClick={closeAll}
                                      className="flex min-h-[46px] items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-white/5"
                                    >
                                      <Icon
                                        aria-hidden="true"
                                        strokeWidth={1.7}
                                        className="h-4 w-4 shrink-0 text-[#C8A96E]/80"
                                      />
                                      <span className="min-w-0 flex-1 text-[13.5px] font-medium leading-snug text-white/85">
                                        {link.label}
                                      </span>
                                      {link.meta && (
                                        <span className="shrink-0 text-[9.5px] font-semibold uppercase tracking-[0.08em] text-white/55">
                                          {link.meta}
                                        </span>
                                      )}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="mt-6 flex flex-col gap-2.5">
            <Link
              href={primaryActions.search.href}
              onClick={closeAll}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-white/15"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
              {primaryActions.search.label}
            </Link>
            <Link
              href={primaryActions.portal.href}
              onClick={closeAll}
              className="flex w-full items-center justify-center rounded-xl bg-[#7F1D1D] py-3 text-[14px] font-semibold text-white shadow-md transition-colors hover:bg-[#681818]"
            >
              {primaryActions.portal.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
