# University of Swat — Editorial Layout System & Grid Foundations
**Document Status**: Official Architecture Specification (Pre-Implementation)  
**Standard**: Responsive 12-Column Fluid Institutional Grid (Max 1360px Measure)  
**Design Philosophy**: Editorial Poise, Typographic Authority, and Spacious Cadence

---

## 1. Core Layout Foundations

The layout system strictly rejects generic AI-slop templates (such as centered hero sections with purple gradients, repetitive 3-column card grids on every page, and noisy decorative cards). 

Instead, it employs a disciplined **editorial layout architecture** inspired by the world's most prestigious collegiate institutions and high-end publications.

```
+-------------------------------------------------------------------------+
| Global Utility Bar (h-10)                                               |
+-------------------------------------------------------------------------+
| Primary Navigation Bar (h-20, Sticky, Frosted Warm Alabaster)           |
+-------------------------------------------------------------------------+
|                                                                         |
| Contextual Page Header / Hero Zone (Split Layout or Editorial Feature)  |
|                                                                         |
+-------------------------------------------------------------------------+
|                                                                         |
| Main Content Area (Max 1360px Container, 12-Column Grid)                |
| - Primary Editorial Measure (8-9 Cols) / Context Rail (3-4 Cols)        |
| - Full-Width Bento Scorecards & Interactive Grids                       |
| - Asymmetric Master-Detail Split Sections                               |
|                                                                         |
+-------------------------------------------------------------------------+
| Deep Institutional Footer (Quick Portals + 4 Columns + Legal Bar)       |
+-------------------------------------------------------------------------+
```

---

## 2. Container Measure & Responsive Breakpoints

To ensure optimal typographic line length and balanced visual density, the layout is capped at **1360px**:

| Breakpoint | Minimum Width | Margin / Gutter | Maximum Container Width | Target Devices |
|---|---|---|---|---|
| `xs` | `< 640px` | `px-4` (16px) | 100% fluid | Mobile portrait |
| `sm` | `640px` | `px-6` (24px) | 100% fluid | Mobile landscape / Small tablets |
| `md` | `768px` | `px-8` (32px) | 100% fluid | Tablets portrait |
| `lg` | `1024px` | `px-12` (48px) | 100% fluid | Laptops / Tablets landscape |
| `xl` | `1280px` | `px-12` (48px) | 1280px capped | Desktop displays |
| `2xl` | `1536px+` | Auto-centered | **1360px fixed** (Gutters expand) | Ultrawide & High-DPI monitors |

*Rule*: At 1920px+ viewports, the content container never stretches into unreadable expanses; the gutters grow gracefully while the typography and columns preserve their golden-ratio proportions.

---

## 3. Typographic Measure & Line-Length Rules

- **Editorial Body Prose**: Strictly capped at `max-w-[70ch]` (65–75 characters per line) to maintain effortless readability during extended reading (e.g. course syllabi, vice chancellor messages, research abstracts).
- **Display Serif Headlines**: Styled with `tracking-[-0.025em]` and tight leading (`1.08` to `1.15`), preventing unsightly line gaps.
- **Micro-Copy & Eyebrows**: Set in untracked or lightly tracked uppercase (`tracking-widest`, `text-xs`) in bold University Crimson (`#7F1D1D`) or Deep Forest Green (`#153B27`), anchored by a 28px horizontal accent rule (`h-0.5 w-7`).

---

## 4. Distinctive Section Layout Archetypes

Rather than repeating the same card grid across all pages, the design system defines **8 distinct structural archetypes**:

### Archetype 1: Split Editorial Master-Detail
- **Usage**: Department pages, Campus Bulletin, Research divisions.
- **Structure**: Left-hand sticky navigation / category feed (4 columns) paired with a deep reading pane (8 columns).
- **Benefit**: Users can quickly skim categories or announcements without losing their place in the detailed reader.

### Archetype 2: The Architectural Asymmetric Bento
- **Usage**: Ranking Section, Campus Life Heritage, Research Overview.
- **Structure**: Varied aspect-ratio tiles (e.g. 2×2 flagship tile beside 2×1 and 1×1 tiles) with embedded sparkline graphs, metric readouts, and hover sheen sweeps.
- **Benefit**: Creates visual drama and hierarchy; immediately identifies flagship achievements.

### Archetype 3: The Curricular Syllabus Table Matrix
- **Usage**: Individual Degree Pages (`/programs/[slug]`).
- **Structure**: Two-column alternating semester cards (Semesters 1 to 8) with distinct course codes, credit-hour counters, and lab markers, framed by an admission requirement sidebar.
- **Benefit**: Clear, digestible roadmap for prospective students.

### Archetype 4: The Leadership Discourse Feature
- **Usage**: Vice Chancellor's Message (`/leadership/vice-chancellor`), Executive Profiles.
- **Structure**: Prominent 420px 3D tilt portrait card on the left with cursor glare, balanced against a wide typographic discourse column on the right featuring pull quotes, signatures, and credentials.
- **Benefit**: Establishes executive credibility and human warmth.

### Archetype 5: The Institutional Gazette & Document Index
- **Usage**: Merit Lists (`/admissions/merit-lists`), Downloads (`/academics/downloads`).
- **Structure**: Instant live-search input above a clean tabular register with category chips, publication timestamps, file-size badges, and direct PDF download triggers.
- **Benefit**: Ultra-fast utility for students seeking critical statutory notifications.

### Archetype 6: The Academic Department Directory Index
- **Usage**: Faculties Hub (`/faculty`).
- **Structure**: Faculty category accordions displaying department cards with serif student/degree counts, department heads, and quick links.
- **Benefit**: Comprehensive bird's-eye view of all 28 departments.

### Archetype 7: The Editorial Press Story Layout
- **Usage**: News Article Views (`/news/[slug]`).
- **Structure**: High-impact full-bleed photograph with italic caption, bold 2-sentence drophead, multi-paragraph reading column with drop caps, pull quotes, and related press releases.
- **Benefit**: Reads like an article in *The Financial Times* or *The Guardian*.

### Archetype 8: The Dual Campus Photographic Narrative
- **Usage**: Charbagh Main Campus and Women Sub-Campus tours.
- **Structure**: Interlocking full-width landscape photography, architectural blueprints, facility statistics, and transport accessibility maps.
- **Benefit**: Conveys the physical grandeur and safety of the university environment.

---

## 5. Spacing Rhythm & Vertical Cadence

Vertical rhythm is governed by an **8px base grid** with proportional scaling:

- Micro Spacing (within elements): `gap-1.5` (6px), `gap-2` (8px), `gap-3` (12px), `gap-4` (16px).
- Component Padding: `p-6` (24px) to `p-8` (32px) for cards and modals.
- Section Padding:
  - Mobile: `py-12` (48px) to `py-16` (64px).
  - Tablet: `py-16` (64px) to `py-20` (80px).
  - Desktop: `py-20` (80px) to `py-28` (112px).
- Inter-Section Transition: Crisp `1px` architectural hairline borders (`border-stone-200/90` or `border-white/10`) with zero blurry gradients.
