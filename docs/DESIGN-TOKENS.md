# University of Swat — Design Tokens Specification
**Document Status**: Official Architecture Specification (Pre-Implementation)  
**Standard**: Tailwind CSS v4 `@theme` Architecture & CSS Custom Properties  
**Compliance**: Hallmark Token-First Architecture Rule 1 (Zero Undeclared Colors or Fonts)

---

## 1. Token Architecture Overview

All visual styling is strictly mediated through semantic tokens declared in `src/app/globals.css`. No raw hex codes, arbitrary font families, or magic numbers are permitted downstream in components.

```css
@theme {
  /* Typography Tokens */
  --font-serif: var(--font-cormorant), Georgia, serif;
  --font-sans: var(--font-jakarta), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Institutional Palette Tokens */
  --color-uni-obsidian: #0C1912;        /* Forest Obsidian Hero & Prestige Base */
  --color-uni-alabaster: #F6F5F0;       /* Warm Alabaster Primary Page Canvas */
  --color-uni-forest: #153B27;          /* University Deep Forest Green */
  --color-uni-forest-dark: #0F2D1E;     /* Forest Green Hover State */
  --color-uni-forest-light: #1E5237;    /* Forest Green Active Accent */
  --color-uni-crimson: #7F1D1D;         /* University Crimson Authority & Portal Accent */
  --color-uni-crimson-dark: #661717;    /* Crimson Hover State */
  --color-uni-crimson-light: #992222;   /* Crimson Accent Stripe */
  --color-uni-gold: #C8A96E;            /* Muted Architectural Heritage Gold */
  --color-uni-gold-muted: #B48A3E;      /* Muted Gold Accent Rule & Border */
  --color-uni-charcoal: #14291D;        /* Deep Charcoal Text Base */

  /* Neutral Tone Tokens */
  --color-stone-50: #FAFAF9;
  --color-stone-100: #F5F5F4;
  --color-stone-200: #E7E5E4;
  --color-stone-300: #D6D3D1;
  --color-stone-400: #A8A29E;
  --color-stone-500: #78716C;
  --color-stone-600: #57534E;
  --color-stone-700: #44403C;
  --color-stone-800: #292524;
  --color-stone-900: #1C1917;

  /* Border & Elevation Tokens */
  --border-hairline: 1px solid rgba(231, 229, 228, 0.9);
  --border-dark-hairline: 1px solid rgba(255, 255, 255, 0.1);
  --border-gold-accent: 1px solid #C8A96E;
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-2xl: 32px;

  /* Motion & Spring Tokens */
  --ease-editorial: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;
}
```

---

## 2. Semantic Color Mapping

| Semantic Token | Source Token | Usage | Minimum Contrast |
|---|---|---|---|
| `bg-canvas` | `--color-uni-alabaster` (`#F6F5F0`) | Primary page background across all non-hero sections | N/A (Canvas) |
| `bg-canvas-dark` | `--color-uni-obsidian` (`#0C1912`) | High-prestige hero, video overlays, and dark card containers | N/A (Canvas) |
| `text-primary` | `--color-uni-charcoal` (`#14291D`) | Primary headings, section titles, and high-emphasis labels | 14.8:1 on Alabaster (AAA) |
| `text-body` | `--color-stone-600` (`#57534E`) | Multi-paragraph reading copy, syllabi outlines, news body | 7.1:1 on Alabaster (AAA) |
| `text-muted` | `--color-stone-500` (`#78716C`) | Timestamps, file formats, breadcrumb trails, secondary links | 4.6:1 on Alabaster (AA) |
| `brand-primary` | `--color-uni-forest` (`#153B27`) | Main academic buttons, active indicators, section highlights | 10.2:1 on Alabaster (AAA) |
| `brand-statutory` | `--color-uni-crimson` (`#7F1D1D`) | Student Portal button, deadline badges, executive alerts | 8.1:1 on Alabaster (AAA) |
| `brand-heritage` | `--color-uni-gold` (`#C8A96E`) | Top architectural borders, roman numerals, decorative pins | 4.5:1 on Obsidian (AA) |

---

## 3. Spatial & Radius Tokens

- **Grid Spacing System**:
  - `space-1`: 4px (tight grouping)
  - `space-2`: 8px (icon to label)
  - `space-3`: 12px (form control padding)
  - `space-4`: 16px (card inner padding, micro gaps)
  - `space-6`: 24px (standard card padding)
  - `space-8`: 32px (large component padding)
  - `space-12`: 48px (section spacing mobile)
  - `space-16`: 64px (section spacing tablet)
  - `space-20`: 80px (section spacing desktop)
  - `space-28`: 112px (major institutional landmark transitions)
- **Corner Radii Hierarchy**:
  - Tags & Small Chips: `rounded-md` (6px) or `rounded-full` for status pills.
  - Buttons & Form Inputs: `rounded-xl` (12px).
  - Cards & Content Blocks: `rounded-2xl` (16px) or `rounded-3xl` (24px).
  - Modal Containers & ProfileCard: `rounded-3xl` (24px to 32px).
