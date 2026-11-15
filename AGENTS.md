# Sowat University Website — Agent Instructions

You are redesigning the complete Sowat University website.

This is not a one-page landing page. It is a full institutional university website with approximately 15–30 pages.

Your goal is to create a premium, award-winning, editorial, credible, and distinctive university experience. It must feel like a real university—not a generic AI-generated SaaS template.

## Non-negotiable rules

1. Understand before designing.
   - First read the existing website, sitemap, navigation, pages, programs, faculty, news, events, admissions, research, and contact content.
   - Identify the university’s purpose, audiences, academic structure, and user journeys.
   - Never invent programs, faculty, research, statistics, dates, or testimonials.

2. Design the whole system first.
   - Produce a complete sitemap, URL map, navigation structure, content model, page templates, and card system before writing production code.
   - Treat every page as part of one coherent university ecosystem.

3. Use a premium editorial direction.
   - Typography-led, spacious, confident, warm, institutional, and modern.
   - Strong visual hierarchy.
   - Real photography and meaningful imagery.
   - Restrained color and motion.
   - Distinctive layouts, not repeated generic sections.

4. Avoid AI-slop patterns.
   - No generic centered hero on every page.
   - No purple gradients, gradient text, or gradient-heavy sections.
   - No emoji as icons.
   - No identical three-column card grids across every page.
   - No decorative animation that does not improve comprehension.
   - No stock-photo clichés.
   - No fake startup-style marketing language.

5. Cards must have a purpose.
   - Use cards only when they represent repeatable content: programs, faculty, news, events, research, campus life, announcements, locations, or quick links.
   - Define required fields, image ratio, hierarchy, hover behavior, mobile layout, and accessibility for every card.
   - Vary layouts: feature stories, directories, profiles, timelines, calendars, maps, indexes, and narrative sections.

6. Motion must serve comprehension.
   - Use subtle, purposeful transitions.
   - Respect reduced-motion preferences.
   - Do not animate everything.
   - Motion should guide attention, reveal hierarchy, and improve orientation.

7. Accessibility is mandatory.
   - Maintain strong color contrast.
   - Use semantic HTML.
   - Ensure keyboard navigation.
   - Provide alt text guidance for meaningful images.
   - Ensure readable typography and touch targets.

8. Preserve factual content.
   - Keep existing university facts unless the user explicitly approves a change.
   - Flag missing, outdated, conflicting, or unclear content instead of inventing replacements.

## Required workflow

Follow this exact sequence:

1. Crawl and analyze the existing website.
2. Create `UNIVERSITY-BRIEF.md`.
3. Create `SITEMAP.md`, `URL-MAP.md`, `NAVIGATION.md`, and `CONTENT-MODEL.md`.
4. Create `LAYOUT-SYSTEM.md`, `CARD-SYSTEM.md`, and `PAGE-BLUEPRINTS.md`.
5. Create `DESIGN-TOKENS.md`, `TYPOGRAPHY.md`, `COLOR-SYSTEM.md`, `MOTION-SYSTEM.md`, and `ACCESSIBILITY.md`.
6. Wait for user approval.
7. Implement the design system and shared components.
8. Build the homepage.
9. Build the remaining page templates.
10. Run a final quality review for consistency, accessibility, responsiveness, performance, and content accuracy.

## Required deliverables

Create these files before implementation:

- `docs/UNIVERSITY-BRIEF.md`
- `docs/SITEMAP.md`
- `docs/URL-MAP.md`
- `docs/NAVIGATION.md`
- `docs/CONTENT-MODEL.md`
- `docs/LAYOUT-SYSTEM.md`
- `docs/CARD-SYSTEM.md`
- `docs/PAGE-BLUEPRINTS.md`
- `docs/DESIGN-TOKENS.md`
- `docs/TYPOGRAPHY.md`
- `docs/COLOR-SYSTEM.md`
- `docs/MOTION-SYSTEM.md`
- `docs/ACCESSIBILITY.md`
- `docs/IMPLEMENTATION-PLAN.md`

## Definition of done

The website is complete only when:

- Every page has a clear purpose and audience.
- Navigation is intuitive across all 15–30 pages.
- Every repeated content type uses a consistent template.
- Cards are meaningful, varied, and reusable.
- The visual language is consistent across the entire site.
- The homepage, academics, admissions, research, campus life, faculty, news, events, alumni, and contact pages feel like one university.
- The site is responsive, accessible, fast, and production-ready.
- It feels crafted, premium, and worthy of a high-end university web experience.

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

- **`Navbar`** (`src/components/layout/Navbar.tsx`): High-contrast editorial navigation overlay with official circular University crest (`/uos-logo-circle.png`), "University of Swat" branding, horizontal menu triggers with smooth cubic-bezier fade-in 2-column floating mega-menu cards, academic taxonomy (Programs, Faculty, Academics, Admissions, Campus Life, Research), and University Crimson (`#7F1D1D`) "Student Portal" button. Hosts the sticky `TopNoticeRibbon`.
- **`TopNoticeRibbon`** (`src/components/layout/TopNoticeRibbon.tsx`): Topmost announcement ticker with rotating notifications (Admissions Fall 2026, Merit Lists, HEC Need-Based Scholarships), quick action triggers, and ticker controls.
- **`HeroSection`** (`src/components/home/HeroSection.tsx`): Full-viewport cinematic video background hero with multi-stop vignette dissolving into Warm Alabaster (`#F6F5F0`), authoritative display serif H1 ("Shaping Scholars & Innovators in the Heart of Swat"), dual CTA ("Explore Programs" & "Virtual Campus Tour"), and three distinct University Crimson (`#7F1D1D`) architectural cards (Quality, Leadership, Experience) with muted gold top border (`border-[#C8A96E]`) and Roman numerals, overlapping the hero's bottom edge onto the light section below.
- **`ViceChancellorSection`** (`src/components/home/ViceChancellorSection.tsx`): Full wide-screen "Voice of the Vice Chancellor" leadership discourse section on Warm Alabaster (`#F6F5F0`) aligned to the shared 1360px grid, featuring an enlarged 420px React Bits `<ProfileCard />` (`src/components/ui/ProfileCard.tsx`) with 3D interactive physics tilt, cursor glare, authentic portrait of newly appointed Vice Chancellor Prof. Dr. Husnul Amin (`/images/leadership/vc-prof-dr-husnul-amin.jpeg`), concise inspirational leadership statement, unified neutral stone achievement badges, signature, and direct communication links.
- **`EditorialStorytelling`** (`src/components/home/EditorialStorytelling.tsx`): Alternating editorial narrative storytelling rows on Charbagh 100% solarized alpine campus sustainability (UI GreenMetric leader) and frontier alpine research (Gandhara heritage excavations, ORIC metrics).
- **`FacultyProgramsGrid`** (`src/components/home/FacultyProgramsGrid.tsx`): Interactive academic grid with split header and 5 faculty cards (Computing & IT, Sciences, Management Sciences, Law & Legal Studies, Humanities & Languages) integrated seamlessly with `FlagshipDegreeSpotlight`.
- **`FlagshipDegreeSpotlight`** (`src/components/home/FlagshipDegreeSpotlight.tsx`): Curated undergraduate degree spotlight cards (BSCS, BSSE, BBA, BS Environmental Sciences) with duration chips, career focuses, and direct syllabus links.
- **`CampusBulletin`** (`src/components/home/CampusBulletin.tsx`): Flagship 2-column master-detail bulletin styled to match the bento & VC-card visual language (rounded surface gradient, cursor-following spotlight, ambient aura, sheen-sweep tiles, gradient action buttons, sliding active-tab pill on a full-width category rail, scroll-hint edge fades, crest watermark) — Recent/News/Admissions/Exams/Teachers/Students/Vacations, seamless auto-looping notice feed (pause on hover; resume unless a card was clicked), and full official notice reader with serif headline, callout box, Share/Download action bar, and Web Share API + toast feedback. Replaces the legacy `AnnouncementsBoard` gazette.
- **`CampusTourBanner`** (`src/components/home/CampusTourBanner.tsx`): Panoramic full-bleed alpine campus photograph with dark vignette, visit booking CTA, and interactive 360° video tour modal.
- **`UpcomingEvents`** (`src/components/home/UpcomingEvents.tsx`): Interactive academic and cultural events carousel with date badges, category tags, time, and venue details.
- **`RankingSection`** (`src/components/home/RankingSection.tsx`): Institutional Scorecard & Accreditation Registry rebuilt strictly under `design-taste-frontend` rules: flagship HEC 91.4% W-Category audit with 5-year SVG trajectory curve and #1 Malakand citations; UI GreenMetric Top 15 multi-bar sustainability chart; Times Higher Education 301–400 SDG sparkline; 4 statutory accreditation cards (NAEAC 3.68, 100% HEC Charter, Top 5 Green Campus, PKR 85M ORIC Grants); and reassurance banner with QEC PDF audit report download action. The legacy `<MagicBento />` component was removed.
- **`CampusLifeHeritage`** (`src/components/home/CampusLifeHeritage.tsx`): Bento gallery with split header — featured Charbagh Main Campus tile (`/images/campus/charbagh-campus.jpg`, span 2×2) beside an aligned 2×2 of Women Campus / Central Library / Sports Complex / Heritage tiles; hover zoom, frosted captions, hairline rings, and keyboard lightbox; supplies the `#campus-life` anchor.
- **`StudentAlumniSuccess`** (`src/components/home/StudentAlumniSuccess.tsx`): Testimonials and outcomes section with authentic quotes from engineering, environmental, and business graduates alongside 4-column metric stat counters.
- **`AdmissionsInquiryFunnel`** (`src/components/home/AdmissionsInquiryFunnel.tsx`): Two-column lead capture funnel with admissions hotline, contact desk, and prospectus PDF download on the left, and fast interactive application inquiry form on the right.
- **`CampusPhotoRibbon`** (`src/components/home/CampusPhotoRibbon.tsx`): 6-photo edge-to-edge student life gallery strip with Instagram community link (`@UniversityOfSwatOfficial`).
- **`Footer`** (`src/components/layout/Footer.tsx`): Commanding Deep Forest Green (`#0F291B`) architectural footer with University Crimson top border (`border-t-4 border-[#7F1D1D]`), official circular crest branding, newsletter subscribe input with Crimson arrow action, 4 main columns with verified UoS statutory and academic links (Explore UoS / Connect, Admissions / Campus Life, Programmes / Top Programmes, School), bottom legal copyright, and circular Facebook, LinkedIn, Instagram, X, and YouTube glyphs.
- **Multi-page site (103 static routes prerendered)**: Comprehensive university ecosystem built in the approved editorial design language using the shared `PageHeader` component and structured data stores (`src/data/`). `/programs` was upgraded under `design-taste-frontend` rules (2026-11-15): shared `PageHeader` with `children` fact strip (verified counts: 05 faculties / 20 departments / 59 degree tracks / 03 campuses), `/` keyboard shortcut + `aria-pressed` pills, Roman-numeral flagship spec cards with gold top-rule, 3-tier institutional degree tags (undergraduate sage / graduate stone / doctorate muted gold), hairline directory rows with index numerals, and a full-screen slide-over syllabus drawer (forest spec-sheet header, hairline Duration/Credits/Accreditation/Fee strip, numbered 01–08 semester roadmap, focus trap, Escape-to-close, focus return). `PageHeader` now accepts an optional `children?: React.ReactNode` slot (no visual change for other consumers).
  - Catalog & Profiles: `/faculty`, `/departments/[slug]` (all 28 departments), `/programs`, `/programs/[slug]` (premium editorial syllabus template for BSCS, BSSE, BBA, BS Chemistry, LLB, BS Env Sci — breadcrumbed fact-strip header, real departmental photography where it exists, numbered outcome index, ruled semester/year roadmap with Capstone chips).
  - Leadership: `/leadership`, `/leadership/vice-chancellor`, `/leadership/[slug]` (Registrar, Treasurer, Controller, Provost).
  - Academics: `/academics`, `/academics/calendar`, `/academics/downloads`.
  - Admissions: `/admissions`, `/admissions/fee-structure`, `/admissions/merit-lists`.
  - Research: `/research`, `/research/oric`, `/research/asrb`.
  - Campuses & Life: `/campus-life`, `/campuses/main-campus`, `/campuses/women-campus`.
  - News & Events: `/news`, `/news/[slug]`, `/events`, `/events/[slug]`.
  - Governance & Access: `/about`, `/affiliated-colleges`, `/contact`, `/portal`, `/alumni`, `/search`.
