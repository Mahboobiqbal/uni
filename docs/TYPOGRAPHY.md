# University of Swat — Typography System & Editorial Guidelines
**Document Status**: Official Architecture Specification (Pre-Implementation)  
**Typefaces**: `Cormorant Garamond` (Display Serif) & `Plus Jakarta Sans` (Body & UI Sans)  
**Loading Method**: `next/font/google` with zero layout shift (font-display: swap)

---

## 1. Typeface Pairing Rationale

A world-class university website requires typography that balances **institutional authority, historic dignity, and modern clarity**:

1. **Display Face — `Cormorant Garamond`**:
   - A revival of Claude Garamont's classic 16th-century typeface.
   - Conveys 500 years of collegiate heritage, scholarly rigor, and intellectual grace.
   - Characterized by razor-sharp serifs, high stroke contrast, and poetic elegance.
   - Applied to all H1 display titles, editorial dropheads, Vice Chancellor quotes, and major section titles.

2. **Workhorse Body & UI Face — `Plus Jakarta Sans`**:
   - A crisp, modern geometric sans-serif designed for clean digital interfaces.
   - Exceptionally legible at small sizes (12px to 14px) on mobile displays.
   - Features clear aperture, balanced x-height, and full tabular numerals (`font-variant-numeric: tabular-nums`) for merit list percentages, fees, and credit hour tables.
   - Applied to all navigation menus, body paragraphs, course syllabi, forms, and button labels.

---

## 2. Complete Typographic Scale

| Token Name | Font Family | Size (Desktop / Mobile) | Line Height | Letter Spacing | Weight | Typical Application |
|---|---|---|---|---|---|---|
| `text-display-hero` | `Cormorant Garamond` | `56px` / `38px` | `1.08` | `-0.025em` | Bold (700) | Homepage Hero display title |
| `text-display-page` | `Cormorant Garamond` | `48px` / `34px` | `1.12` | `-0.02em` | Bold (700) | Sub-page PageHeader H1 titles |
| `text-h2` | `Cormorant Garamond` | `36px` / `28px` | `1.18` | `-0.015em` | Bold (700) | Major section headers (e.g. VC discourse, bulletin) |
| `text-h3` | `Cormorant Garamond` | `24px` / `20px` | `1.25` | `-0.01em` | SemiBold (600) | Card headlines, faculty names, department titles |
| `text-pullquote` | `Cormorant Garamond` | `24px` / `18px` | `1.4` | `0` | Italic (400) | Vice Chancellor quotation, scholar reflections |
| `text-body-lg` | `Plus Jakarta Sans` | `18px` / `16px` | `1.6` | `0` | Regular (400) | Editorial introductory dropheads, standfirsts |
| `text-body` | `Plus Jakarta Sans` | `15px` / `14px` | `1.65` | `0` | Regular (400) | Standard multi-paragraph reading text |
| `text-body-sm` | `Plus Jakarta Sans` | `13px` / `12px` | `1.5` | `0` | Regular (400) | Course outlines, metadata, table rows |
| `text-caption` | `Plus Jakarta Sans` | `12px` / `11px` | `1.4` | `0` | Medium (500) | Photo captions, breadcrumbs, timestamps |
| `text-eyebrow` | `Plus Jakarta Sans` | `11px` / `10px` | `1.2` | `0.1em` | Bold (700) | Category tags, statutory indicators |
| `text-button` | `Plus Jakarta Sans` | `13px` / `12px` | `1.0` | `0.02em` | SemiBold (600) | Portal triggers, primary CTAs, download buttons |

---

## 3. Strict Typographic Craft Rules

1. **No Single Italic Words in Headings (Hallmark Rule 3)**:
   - Never format a heading with a single italic word (e.g. *"Shaping *Scholars* and Innovators"* is prohibited). Italicization is reserved for full pull quotes and latin species names in biology departments (e.g., *Swertia chirayita*).
2. **Untracked Label Formatting (Hallmark Rule 9)**:
   - Labels, nav links, table headers, and form captions must use the body face (`Plus Jakarta Sans`), untracked or lightly tracked, in sentence case or natural title case. No aggressive, spaced-out ALL-CAPS body text.
3. **Strict Line-Length Ceiling (The 70ch Rule)**:
   - Reading paragraphs must carry `max-w-[70ch]` (65–75 characters per line). Text blocks that stretch across full 1360px widths cause severe visual fatigue and reading disorientation.
4. **Tight Display Leading**:
   - Serif headings larger than 32px must use leading between `1.08` and `1.15`. Standard HTML leading (`1.5`) looks amateurish and disconnected at large sizes.
5. **Tabular Numerals for Data Accuracy**:
   - All merit percentages, fee amounts, and course credit tables must utilize tabular figures (`font-mono` or `font-feature-settings: 'tnum' 1`) so decimal points align vertically.
