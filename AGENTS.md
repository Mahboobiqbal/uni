<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# University of Swat — Agent Workflow & Guidelines

This document governs agent instructions, component replacement protocols, documentation mandates, and codebase standards for the University of Swat official website.

---

## 1. Operating Rules & Component Replacement Protocol

Whenever the user provides new component code, markup, or design specifications:

1. **Delete / Replace Old Component**:
   - Locate the existing component in `src/components/` (or related subfolder).
   - Delete or replace the legacy implementation cleanly. Do not leave orphan unused component files behind.
2. **Implement New Component**:
   - Build the replacement strictly matching the user's provided design, styles, and requirements.
   - Use Tailwind CSS v4 design tokens defined in `src/app/globals.css`.
   - Adhere to TypeScript typing with zero any/implicit type issues.
   - Preserve or enhance accessibility (`aria-*`, keyboard navigation, semantic HTML).
3. **Integrate Seamlessly**:
   - Update `src/app/page.tsx` or layout imports/renderings to hook up the new component.
   - Ensure clean prop interfaces and state management.
4. **Mandatory Documentation Step**:
   - Document the replacement in `docs/CHANGELOG.md` with timestamps, files modified/deleted/created, and key architectural changes.
   - Update the component status and path in `docs/COMPONENTS.md`.
   - Update this file (`AGENTS.md`) with any updated conventions or component registry changes.
5. **Verify Quality**:
   - Run typecheck: `npx tsc --noEmit`.
   - Ensure development server runs without runtime or hydration errors.

---

## 2. Tech Stack & Environment

- **Framework**: Next.js 16.4+ (App Router, Turbopack)
- **Runtime & Language**: React 19, TypeScript 5, Node.js 26
- **Styling**: Tailwind CSS v4 (`@theme` tokens in `src/app/globals.css`)
- **Fonts**: `Cormorant_Garamond` (`font-serif`) & `Plus_Jakarta_Sans` (`font-sans`) via `next/font/google`
- **Iconography**: Hugeicons (`@hugeicons/react`, `@hugeicons/core-free-icons`)
- **Package Manager**: npm

---

## 3. Directory Layout

```
uni/
├── docs/                     # Step-by-step project documentation
│   ├── CHANGELOG.md          # Chronological log of all modifications & replacements
│   └── COMPONENTS.md         # Component catalog & replacement status
├── src/
│   ├── app/                  # App Router pages, layout, and global CSS
│   ├── components/
│   │   ├── layout/           # Navbar, Footer, Site chrome
│   │   ├── home/             # Home page modular sections
│   │   └── ui/               # Reusable primitive UI components (CardNav, etc.)
│   ├── config/               # Site configuration (siteConfig)
│   ├── data/                 # Static data stores (navigation, announcements)
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Shared utilities (cn, date formatters)
│   └── types/                # Shared TypeScript interfaces
├── public/                   # Static assets (images, fonts, crests)
└── AGENTS.md                 # Agent guidelines, workflow rules, and project state
```

---

## 4. Current Component Registry

- **`Navbar`** (`src/components/layout/Navbar.tsx`): High-contrast editorial navigation overlay with official circular University crest (`/uos-logo-circle.png`), "University of Swat" branding, horizontal menu triggers with smooth cubic-bezier fade-in 2-column floating mega-menu cards, academic taxonomy (Programs, Faculty, Academics, Admissions, Campus Life, Research), and University Crimson (`#7F1D1D`) "Student Portal" button.
- **`HeroSection`** (`src/components/home/HeroSection.tsx`): Full-viewport cinematic video background hero with multi-stop vignette dissolving into Warm Alabaster (`#F6F5F0`), authoritative display serif H1 ("Shaping Scholars & Innovators in the Heart of Swat"), dual CTA ("Explore Programs" & "Virtual Campus Tour"), and three distinct University Crimson (`#7F1D1D`) architectural cards (Quality, Leadership, Experience) with muted gold top border (`border-[#C8A96E]`) and Roman numerals, overlapping the hero's bottom edge onto the light section below.
- **`ViceChancellorSection`** (`src/components/home/ViceChancellorSection.tsx`): Full wide-screen "Voice of the Vice Chancellor" leadership discourse section on Warm Alabaster (`#F6F5F0`) aligned to the shared 1360px grid, featuring an enlarged 420px React Bits `<ProfileCard />` (`src/components/ui/ProfileCard.tsx`) with 3D interactive physics tilt, cursor glare, authentic portrait of Prof. Dr. Hassan Sher at his executive office desk, concise inspirational leadership statement, unified neutral stone achievement badges, signature, and direct communication links.
- **`CampusBulletin`** (`src/components/home/CampusBulletin.tsx`): Flagship 2-column master-detail bulletin styled to match the bento & VC-card visual language (rounded surface gradient, cursor-following spotlight, ambient aura, sheen-sweep tiles, gradient action buttons, sliding active-tab pill on a full-width category rail, scroll-hint edge fades, crest watermark) — Recent/News/Admissions/Exams/Teachers/Students/Vacations, seamless auto-looping notice feed (pause on hover; resume unless a card was clicked), and full official notice reader with serif headline, callout box, Share/Download action bar, and Web Share API + toast feedback. Replaces the legacy `AnnouncementsBoard` gazette.
- **`FacultyProgramsGrid`** (`src/components/home/FacultyProgramsGrid.tsx`): Interactive academic grid with split header and 5 faculty cards (Computing & IT, Sciences, Management Sciences, Law & Legal Studies, Humanities & Languages) — serif degree counts, level chips, forest/crimson accent borders, sheen hover + lift, and "Explore programs" links.
- **`CampusLifeHeritage`** (`src/components/home/CampusLifeHeritage.tsx`): Bento gallery with split header — featured Charbagh Main Campus tile (`/campus-main.jpg`, span 2×2) beside an aligned 2×2 of Women Campus / Central Library / Sports Complex / Heritage tiles; hover zoom, frosted captions, hairline rings, and keyboard lightbox; supplies the `#campus-life` anchor.
- **`RankingSection`** (`src/components/home/RankingSection.tsx`): React Bits `<MagicBento />` scorecard grid with embedded graphs (area chart, rating bar, bar chart, sparkline) and full motion (tilt, magnetism, click wave, stars, intro stagger, spotlight, border glow) — HEC 91.4% W-Category, GreenMetric Top 15, THE 301–400, #1 Malakand, 3.68 NAEAC, 100% HEC, Top 5 Ecosystem tiles; light editorial styling with forest glow.
- **`Footer`** (`src/components/layout/Footer.tsx`): White footer with a Quick Portals card row (CMS, SUJRIS, e-Office, Campus TV) above four institutional columns (Admissions, In Focus, Quick Links, Contact Us), green-tinted headings/links, social icons, and bottom crest/copyright/legal bar.
