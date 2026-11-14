'use client';

import React, { useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons';
import './CardNav.css';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export interface CardNavLink {
  label: string;
  href?: string;
  ariaLabel?: string;
  description?: string;
  badge?: string;
  badgeColor?: 'emerald' | 'amber' | 'blue' | 'purple' | 'slate';
}

export interface CardNavItem {
  label: string;
  description?: string;
  bgColor?: string;
  textColor?: string;
  links: CardNavLink[];
}

export interface CardNavCta {
  label: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

export interface CardNavProps {
  logo?: ReactNode;
  logoAlt?: string;
  logoHref?: string;
  items?: CardNavItem[];
  cta?: CardNavCta;
  theme?: 'dark' | 'light';
  surface?: 'glass' | 'solid';
  openOn?: 'click' | 'hover';
  cardEffect?: 'rise' | 'unfold' | 'fade';
  stagger?: number;
  bounce?: number;
  speed?: number;
  cardHeight?: number;
  maxWidth?: number | string;
  accentColor?: string;
  intro?: boolean;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  linkComponent?: ElementType;
  onLinkClick?: (link: CardNavLink, item: CardNavItem, event: React.MouseEvent) => void;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

const THEMES = {
  dark: {
    '--cn-panel': 'rgba(15, 23, 42, 0.95)',
    '--cn-solid': '#0f172a',
    '--cn-edge': 'rgba(255, 255, 255, 0.08)',
    '--cn-highlight': 'rgba(255, 255, 255, 0.07)',
    '--cn-shadow': '0 24px 48px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)',
    '--cn-text': '#f4f4f5',
    '--cn-muted': 'rgba(244, 244, 245, 0.65)',
    '--cn-hover': 'rgba(255, 255, 255, 0.08)',
    '--cn-ring': 'rgba(16, 185, 129, 0.55)',
    '--cn-tile': 'rgba(30, 41, 59, 0.85)',
    '--cn-tile-rim': 'inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
    '--cn-cta': 'linear-gradient(180deg, #059669 0%, #047857 100%)',
    '--cn-cta-ink': '#ffffff',
    '--cn-cta-shadow': '0 4px 12px rgba(5, 150, 105, 0.4)',
    '--cn-cta-hover': 'brightness(1.1)'
  },
  light: {
    '--cn-panel': '#ffffff',
    '--cn-solid': '#ffffff',
    '--cn-edge': 'rgba(15, 23, 42, 0.08)',
    '--cn-highlight': 'rgba(255, 255, 255, 0.98)',
    '--cn-shadow': '0 20px 48px -12px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.05)',
    '--cn-text': '#334155',
    '--cn-muted': '#64748b',
    '--cn-hover': 'rgba(15, 23, 42, 0.04)',
    '--cn-ring': 'rgba(5, 150, 105, 0.45)',
    '--cn-tile': '#ffffff',
    '--cn-tile-rim': 'none',
    '--cn-cta': '#059669',
    '--cn-cta-ink': '#ffffff',
    '--cn-cta-shadow': '0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(5, 150, 105, 0.25)',
    '--cn-cta-hover': '#047857'
  }
};

const ROOT = 'card-nav';
const PANEL = 'card-nav__panel';
const RIM = 'card-nav__rim';
const BAR = 'card-nav__bar';
const LOGO = 'card-nav__logo';
const NAV_ITEMS = 'card-nav__nav-items';
const NAV_ITEM_BTN = 'card-nav__nav-btn';
const BAR_RIGHT = 'card-nav__bar-right';
const MOBILE_TOGGLE = 'card-nav__mobile-toggle';
const BURGER = 'card-nav__burger';
const LINE_TOP = 'card-nav__line card-nav__line--top';
const LINE_BOTTOM = 'card-nav__line card-nav__line--bottom';
const CTA = 'card-nav__cta';
const CTA_WIDE = 'card-nav__cta card-nav__cta--wide';
const CONTENT = 'card-nav__content';
const CARD_FULL = 'card-nav__card-full';
const CARD_HEAD_FULL = 'card-nav__card-head-full';
const LABEL_FULL = 'card-nav__label-full';
const DESCRIPTION_FULL = 'card-nav__description-full';
const LINKS_GRID = 'card-nav__links-grid';
const LINK_CARD = 'card-nav__link-card';
const ARROW = 'card-nav__arrow';
const ARROW_OUT = 'card-nav__arrow-icon card-nav__arrow-icon--out';
const ARROW_IN = 'card-nav__arrow-icon card-nav__arrow-icon--in';

const DEFAULT_ITEMS: CardNavItem[] = [
  {
    label: 'Programs',
    description: 'Undergraduate, MS and Ph.D. degree offerings.',
    links: [
      { label: 'BS Computer Science', href: '#' },
      { label: 'BS Software Engineering', href: '#' }
    ]
  },
  {
    label: 'Departments',
    description: 'Academic departments and faculties.',
    links: [
      { label: 'Sciences & IT', href: '#' },
      { label: 'Social Sciences', href: '#' }
    ]
  }
];

const NARROW = 768;
const EASE_OUT = 'cubic-bezier(0.22, 1, 0.36, 1)';

const clamp = (value: number, min: number, max: number): number => Math.min(max, Math.max(min, value));

const easeOut = (t: number): number => 1 - (1 - t) ** 3;

const contrastInk = (color?: string): string | null => {
  const hex = String(color || '')
    .trim()
    .replace('#', '');
  if (!/^([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hex)) return null;
  const full =
    hex.length === 3
      ? hex
          .split('')
          .map(c => c + c)
          .join('')
      : hex;
  const channel = (index: number) => {
    const value = parseInt(full.slice(index, index + 2), 16) / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  };
  const luminance = 0.2126 * channel(0) + 0.7152 * channel(2) + 0.0722 * channel(4);
  return luminance > 0.36 ? '#121016' : '#ffffff';
};

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = 'Logo',
  logoHref = '#',
  items = DEFAULT_ITEMS,
  cta,
  theme = 'light',
  surface = 'glass',
  openOn = 'click',
  cardEffect = 'rise',
  stagger = 0.12,
  bounce = 0.2,
  speed = 1,
  cardHeight = 176,
  maxWidth = '100%',
  accentColor,
  intro = true,
  defaultOpen = false,
  open: openProp,
  onOpenChange,
  linkComponent: LinkComponent = 'a',
  onLinkClick,
  ariaLabel = 'Main',
  className = '',
  style
}) => {
  const contentId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const engineRef = useRef<{ wake: () => void; refresh: () => void } | null>(null);
  const leaveRef = useRef<number>(0);
  const barRef = useRef<HTMLDivElement>(null);
  const introRef = useRef(intro);
  const [openState, setOpenState] = useState(defaultOpen);
  const [narrow, setNarrow] = useState(false);
  const [shown, setShown] = useState(defaultOpen);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const controlled = openProp !== undefined;
  const hasCta = Boolean(cta);
  const open = controlled ? openProp : openState;

  const settings = {
    open,
    cardEffect,
    stagger: clamp(stagger, 0, 0.3),
    bounce: clamp(bounce, 0, 1),
    speed: clamp(speed, 0.2, 3)
  };
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  const palette = THEMES[theme] ?? THEMES.light;
  const maxWVal = typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth;
  const vars: Record<string, string> = {
    ...palette,
    '--cn-max': maxWVal,
    '--cn-bar': '88px',
    '--cn-inset': '8px',
    '--cn-gap': '12px',
    '--cn-radius': '24px',
    '--cn-logo': '60px',
    '--cn-card': `${cardHeight}px`
  };
  if (surface === 'glass') vars['--cn-blur'] = 'blur(20px) saturate(1.6)';
  if (surface === 'solid') {
    vars['--cn-panel'] = palette['--cn-solid'];
    vars['--cn-blur'] = 'none';
  }
  if (accentColor) {
    vars['--cn-cta'] = accentColor;
    vars['--cn-cta-ink'] = contrastInk(accentColor) || '#ffffff';
    vars['--cn-cta-shadow'] = 'inset 0 1px 0 rgba(255, 255, 255, 0.22), 0 6px 16px -6px rgba(0, 0, 0, 0.45)';
    vars['--cn-cta-hover'] = 'brightness(1.08)';
  }

  const setOpen = (next: boolean) => {
    if (next === open) return;
    if (!controlled) setOpenState(next);
    onOpenChange?.(next);
  };
  const setOpenRef = useRef(setOpen);
  setOpenRef.current = setOpen;

  const handleBarItemClick = (index: number) => {
    if (!open) {
      setActiveIndex(index);
      setOpen(true);
    } else if (activeIndex === index) {
      setOpen(false);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const panel = panelRef.current;
    const content = contentRef.current;
    if (!panel || !content) return undefined;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const state = { p: settingsRef.current.open ? 1 : 0, v: 0, height: content.offsetHeight, bar: 88 };
    let raf = 0;
    let last = 0;

    const render = () => {
      const s = settingsRef.current;
      state.bar = parseFloat(getComputedStyle(panel).getPropertyValue('--cn-bar')) || 88;
      panel.style.height = `${state.bar + Math.max(0, state.p) * state.height}px`;
      const cards = cardRefs.current.filter(Boolean);
      cards.forEach((card) => {
        if (!card) return;
        const local = clamp(state.p, 0, 1);
        const e = easeOut(local);
        if (s.cardEffect === 'unfold') {
          card.style.transform = `translateY(${(1 - e) * -12}px) rotateX(${(1 - e) * -60}deg)`;
          card.style.opacity = `${clamp(local * 1.8, 0, 1)}`;
          card.style.filter = '';
        } else if (s.cardEffect === 'fade') {
          card.style.transform = `translateY(${(1 - e) * 8}px)`;
          card.style.opacity = `${e}`;
          card.style.filter = e < 0.999 ? `blur(${(1 - e) * 6}px)` : '';
        } else {
          card.style.transform = `translateY(${(1 - e) * 16}px) scale(${0.99 + 0.01 * e})`;
          card.style.opacity = `${e}`;
          card.style.filter = '';
        }
      });
    };

    const tick = (now: number) => {
      raf = 0;
      const s = settingsRef.current;
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
      last = now;
      const target = s.open ? 1 : 0;
      if (reduce) {
        state.p = target;
        state.v = 0;
      } else {
        const k = 160 * s.speed * s.speed;
        const zeta = s.open ? 1 - 0.68 * s.bounce : 1;
        const steps = Math.ceil(dt / (1 / 240));
        const h = dt / steps;
        for (let i = 0; i < steps; i++) {
          state.v += (-k * (state.p - target) - 2 * zeta * Math.sqrt(k) * state.v) * h;
          state.p += state.v * h;
        }
      }
      const done = Math.abs(state.p - target) < 0.0005 && Math.abs(state.v) < 0.002;
      if (done) {
        state.p = target;
        state.v = 0;
      }
      render();
      if (done && target === 0) {
        setShown(false);
        setActiveIndex(null);
      }
      if (!done) raf = requestAnimationFrame(tick);
    };

    const wake = () => {
      if (!raf) {
        last = 0;
        raf = requestAnimationFrame(tick);
      }
    };

    engineRef.current = {
      wake,
      refresh: () => {
        state.height = content.offsetHeight;
        render();
      }
    };

    render();
    const observer = new ResizeObserver(() => {
      state.height = content.offsetHeight;
      render();
    });
    observer.observe(content);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      engineRef.current = null;
    };
  }, [items.length, hasCta, narrow, activeIndex]);

  useIsomorphicLayoutEffect(() => {
    if (open) setShown(true);
    engineRef.current?.refresh();
    engineRef.current?.wake();
  }, [open, activeIndex]);

  useEffect(() => {
    engineRef.current?.refresh();
  });

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const measure = () => setNarrow(root.offsetWidth < NARROW);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof Node && rootRef.current?.contains(target)) return;
      setOpenRef.current(false);
      setActiveIndex(null);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpenRef.current(false);
      setActiveIndex(null);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  useEffect(() => () => window.clearTimeout(leaveRef.current), []);

  useIsomorphicLayoutEffect(() => {
    const panel = panelRef.current;
    const bar = barRef.current;
    if (!panel || !bar || !introRef.current) return;
    introRef.current = false;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const width = panel.offsetWidth;
    const height = panel.offsetHeight;
    const radius = parseFloat(getComputedStyle(panel).borderTopLeftRadius) || 24;
    panel.animate(
      [
        { clipPath: `inset(0px ${Math.max(0, (width - height) / 2)}px round ${height / 2}px)`, opacity: 0 },
        { clipPath: `inset(0px 0px round ${radius}px)`, opacity: 1 }
      ],
      { duration: 820, easing: EASE_OUT, fill: 'backwards' }
    );
    Array.from(bar.children).forEach((child, index) => {
      (child as HTMLElement).animate(
        [
          { opacity: 0, transform: 'translateY(8px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 560, delay: 220 + index * 70, easing: EASE_OUT, fill: 'backwards' }
      );
    });
  }, []);

  const hover = openOn === 'hover';

  const onPointerEnter = (event: React.PointerEvent) => {
    if (!hover || event.pointerType === 'touch') return;
    window.clearTimeout(leaveRef.current);
    if (activeIndex === null && items.length > 0) setActiveIndex(0);
    setOpen(true);
  };

  const onPointerLeave = (event: React.PointerEvent) => {
    if (!hover || event.pointerType === 'touch') return;
    window.clearTimeout(leaveRef.current);
    leaveRef.current = window.setTimeout(() => setOpenRef.current(false), 160);
  };

  const anchor = (target: { href?: string; onClick?: (event: React.MouseEvent<any>) => void; [key: string]: any }, props: Record<string, any>, children: ReactNode) => {
    if (!target.href) {
      return (
        <button type="button" {...props}>
          {children}
        </button>
      );
    }
    return (
      <LinkComponent href={target.href} {...props}>
        {children}
      </LinkComponent>
    );
  };

  const ctaButton = (target: CardNavCta, wide: boolean) =>
    anchor(
      target,
      {
        className: wide ? CTA_WIDE : CTA,
        tabIndex: wide && !open ? -1 : undefined,
        onClick: (event: React.MouseEvent<any>) => {
          target.onClick?.(event);
          if (wide) setOpen(false);
        }
      },
      target.label
    );

  const [persistedIndex, setPersistedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex !== null) {
      setPersistedIndex(activeIndex);
    }
  }, [activeIndex]);

  const currentIdx = activeIndex !== null ? activeIndex : (open || shown ? persistedIndex : null);
  const activeItem = currentIdx !== null ? items[currentIdx] : (narrow && items.length > 0 ? items[0] : null);

  const renderLinkCard = (link: CardNavLink, index: number, offset: number) => {
    return (
      <li key={`${link.label}-${offset + index}`}>
        {anchor(
          link,
          {
            className: 'card-nav__text-link group',
            'aria-label': link.ariaLabel || link.label,
            tabIndex: open ? undefined : -1,
            onClick: (event: React.MouseEvent<any>) => {
              if (activeItem) {
                onLinkClick?.(link, activeItem, event);
              }
              setOpen(false);
            }
          },
          <>
            <span className="card-nav__text-arrow" aria-hidden="true">
              <HugeiconsIcon
                className="card-nav__text-arrow-icon card-nav__text-arrow-icon--out"
                icon={ArrowUpRight01Icon}
                size={14}
                strokeWidth={1.8}
              />
              <HugeiconsIcon
                className="card-nav__text-arrow-icon card-nav__text-arrow-icon--in"
                icon={ArrowUpRight01Icon}
                size={14}
                strokeWidth={1.8}
              />
            </span>
            <span className="card-nav__text-label">
              {link.label}
            </span>
          </>
        )}
      </li>
    );
  };

  return (
    <div
      ref={rootRef}
      className={[ROOT, className].filter(Boolean).join(' ')}
      data-open={open ? '' : undefined}
      data-shown={shown || open ? '' : undefined}
      data-narrow={narrow ? '' : undefined}
      style={{ ...vars, ...style } as CSSProperties}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <nav ref={panelRef} className={PANEL} aria-label={ariaLabel}>
        <div ref={barRef} className={BAR}>
          {/* 1. Left Side: University Logo */}
          {logo && (
            <LinkComponent href={logoHref} className={LOGO} aria-label={logoAlt}>
              {typeof logo === 'string' ? <img src={logo} alt="" draggable={false} /> : logo}
            </LinkComponent>
          )}

          {/* 2. Middle: Multiple Navigation Links (Opens specific card full screen) */}
          {!narrow && (
            <div className={NAV_ITEMS} role="menubar">
              {items.map((item, index) => {
                const isActive = open && activeIndex === index;
                return (
                  <button
                    key={`bar-link-${item.label}-${index}`}
                    type="button"
                    className={NAV_ITEM_BTN}
                    data-active={isActive ? '' : undefined}
                    aria-expanded={isActive}
                    aria-controls={contentId}
                    onClick={() => handleBarItemClick(index)}
                    onMouseEnter={() => {
                      if (hover) {
                        setActiveIndex(index);
                        setOpen(true);
                      }
                    }}
                  >
                    <span>{item.label}</span>
                    <svg
                      className="card-nav__chevron"
                      data-open={isActive ? '' : undefined}
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                );
              })}
            </div>
          )}

          {/* 3. Right Side: CTA Button + Mobile Toggle */}
          <div className={BAR_RIGHT}>
            {cta && !narrow && ctaButton(cta, false)}
            {narrow && (
              <button
                type="button"
                className={MOBILE_TOGGLE}
                aria-expanded={open}
                aria-controls={contentId}
                aria-label={open ? 'Close menu' : 'Open menu'}
                onClick={() => {
                  if (!open) {
                    setActiveIndex(0);
                    setOpen(true);
                  } else {
                    setOpen(false);
                  }
                }}
              >
                <span className={BURGER} aria-hidden="true">
                  <span className={LINE_TOP} />
                  <span className={LINE_BOTTOM} />
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Full-Width Dropdown Container */}
        <div ref={contentRef} id={contentId} className={CONTENT} aria-hidden={!open}>
          {/* Mobile Category Selector when narrow */}
          {narrow && (
            <div className="flex overflow-x-auto gap-2 px-4 pt-3 pb-2 border-b border-slate-200/80 bg-slate-50/70">
              {items.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={`mobile-tab-${item.label}-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                      isActive
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-white text-slate-700 border border-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Single Specific Card Opened in Full Width */}
          {activeItem && (
            <div
              key={`active-card-${activeItem.label}`}
              ref={element => {
                cardRefs.current[0] = element;
              }}
              className={CARD_FULL}
            >
              <div className={CARD_HEAD_FULL}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-4 mb-5">
                  <div>
                    <h3 className={LABEL_FULL}>{activeItem.label}</h3>
                    {activeItem.description && (
                      <p className="text-slate-500 font-normal text-sm leading-relaxed mt-1">{activeItem.description}</p>
                    )}
                  </div>
                  <span className="text-xs font-medium text-slate-500 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 shrink-0 self-start sm:self-auto">
                    University of Swat Directory
                  </span>
                </div>
              </div>

              {/* 2-Column Vertical Order Layout */}
              {(() => {
                const links = activeItem.links ?? [];
                const midpoint = Math.ceil(links.length / 2);
                const col1 = links.slice(0, midpoint);
                const col2 = links.slice(midpoint);

                return (
                  <div className="card-nav__two-columns">
                    <ul className="card-nav__column">
                      {col1.map((link, idx) => renderLinkCard(link, idx, 0))}
                    </ul>
                    <ul className="card-nav__column">
                      {col2.map((link, idx) => renderLinkCard(link, idx, midpoint))}
                    </ul>
                  </div>
                );
              })()}
            </div>
          )}

          {cta && narrow && (
            <div
              ref={element => {
                cardRefs.current[1] = element;
              }}
              className="p-4 border-t border-slate-100"
            >
              {ctaButton(cta, true)}
            </div>
          )}
        </div>
        <span className={RIM} />
      </nav>
    </div>
  );
};

export default CardNav;
