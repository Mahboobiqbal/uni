# Component Catalog & Status

This file tracks every component in the University of Swat project, its source location, dependencies, status, and replacement history.

| Component | Path | Type | Status | Description |
|---|---|---|---|---|
| `Navbar` | `src/components/layout/Navbar.tsx` | Client | **Active (Flagship Academic Nav & Portal CTA)** | Transparent-to-frosted top navigation with circular crest, "University of Swat" branding, smooth cubic-bezier fade-in 2-column floating mega-menu cards, academic taxonomy (Programs, Faculty, Academics, Admissions, Campus Life, Research), and University Crimson (#7F1D1D) "Student Portal" button |
| `HeroSection` | `src/components/home/HeroSection.tsx` | Client | **Active (Cinematic Video, 3 Architectural Crimson Cards)** | Full-screen background video hero with multi-stop vignette dissolving into Warm Alabaster (`#F6F5F0`), authoritative display serif H1, dual CTA, and three distinct University Crimson (`#7F1D1D`) architectural cards (Quality, Leadership, Experience) with muted gold top border + Roman numerals, overlapping the hero's bottom edge onto the light section below |
| `ViceChancellorSection` | `src/components/home/ViceChancellorSection.tsx` | Client | **Active (Warm Alabaster Wide Grid, Cohesive Stone Badges)** | Full-width open leadership discourse section on Warm Alabaster (`#F6F5F0`), aligned to the shared 1360px grid, featuring enlarged 420px React Bits `<ProfileCard />` with official portrait, concise inspirational quote, and unified neutral stone achievement badges |
| `ProfileCard` | `src/components/ui/ProfileCard.tsx` | Client | **Active (Primitive)** | React Bits interactive 3D holographic profile card component with configurable width (`--pc-width`), institutional `caption` support, cursor-following glare, specular sheen, parallax portrait, and Hugeicons mail trigger |
| `MagicBento` | `src/components/ui/MagicBento.tsx` | Client | **Active (Primitive)** | React Bits interactive bento grid component with crisp 1px borders (`border-stone-200` in light, `border-white/10` in dark), consistent `p-7` (`28px`) internal padding, eliminated heavy drop shadows, border glow, spotlight, and physics |
| `CampusBulletin` | `src/components/home/CampusBulletin.tsx` | Client | **Active (Flagship 2-Column Master-Detail)** | Unified `rounded-xl` bento-style container (surface gradient, cursor-following spotlight, VC-card ambient aura blobs) on the shared 1360px grid with a split header, full-width category rail with a sliding active-tab pill (OriginKit Tabs pattern) over Recent/News/Admissions/Exams/Teachers/Students/Vacations, a seamless auto-looping notice feed (bento tiles with sheen sweep, hover glow, scroll-hint edge fades; pause on hover, resume unless a card was clicked), and a full official notice reader with serif headline, emerald callout box, crest watermark, gradient Share/Download action bar, and Web Share API + toast feedback. Replaces the legacy `AnnouncementsBoard` gazette. |
| `FacultyProgramsGrid` | `src/components/home/FacultyProgramsGrid.tsx` | Client | **Active (Interactive Academic Grid)** | Split-header section with 5 interactive faculty cards (Computing &amp; IT, Sciences, Management Sciences, Law &amp; Legal Studies, Humanities &amp; Languages) featuring serif degree-count readouts, level chips, accent left borders, sheen-sweep hover + lift, and "Explore programs" links |
| `CampusLifeHeritage` | `src/components/home/CampusLifeHeritage.tsx` | Client | **Active (Bento Gallery)** | Split-header bento grid: featured Charbagh Main Campus tile (span 2×2) beside an aligned 2×2 of Women Campus / Central Library / Sports Complex / Heritage tiles — hover zoom, frosted captions, hairline rings, and keyboard lightbox |
| `RankingSection` | `src/components/home/RankingSection.tsx` | Client | **Active (React Bits Bento Scorecard)** | HEC 91.4% W-Category, GreenMetric Top 15, THE 301–400, and 4 badge tiles on the React Bits `<MagicBento />` grid with embedded graphs (area chart, rating bar, bar chart, sparkline) and full motion (tilt, magnetism, click wave, stars, intro stagger, spotlight, border glow) — light editorial tiles, forest glow; split header |
| `Footer` | `src/components/layout/Footer.tsx` | Server | **Active (Quick Portals + Institutional Columns)** | White footer on the 1360px grid with a Quick Portals card row (CMS, SUJRIS, e-Office, Campus TV) above four institutional columns (Admissions, In Focus, Quick Links, Contact Us), green-tinted headings/links, social icons, and bottom crest/copyright/legal bar |
| `PageHeader` | `src/components/layout/PageHeader.tsx` | Server | **Active (Shared Page Hero)** | Reusable split page header (eyebrow + serif H1 + right description + back link) used by all sub-pages |

---

## Deprecated & Replaced Components

| Legacy Component | Previous Path | Replaced By | Date | Reason |
|---|---|---|---|---|
| `ViceChancellorDesk` | `src/components/home/ViceChancellorDesk.tsx` | *(Removed)* | 2026-11-14 | Section removed per user design request |
| `UniversityQuote` | `src/components/home/UniversityQuote.tsx` | *(Removed)* | 2026-11-14 | Section removed per user design request |
| `Header` | `src/components/layout/Header.tsx` | `Navbar` (`CardNav`) | 2026-11-14 | Replaced with modern React Bits `<CardNav />` component |
| `CardNav` | `src/components/ui/CardNav.tsx` | `Navbar` (Editorial Header) | 2026-11-14 | Replaced with high-contrast editorial navigation overlay matching design |
| `HeroSection` (v1) | `src/components/home/HeroSection.tsx` | `HeroSection` (v2) | 2026-11-14 | Replaced with cinematic video background hero and translucent crimson 3-pillar ribbon |
| `AnnouncementsBoard` | `src/components/home/AnnouncementsBoard.tsx` | `CampusBulletin` | 2026-11-14 | Replaced with flagship 3-column Campus Bulletin section (auto-looping feed + notice reader) |
| `FeaturedSpotlight` | `src/components/home/FeaturedSpotlight.tsx` | *(Removed)* | 2026-11-14 | Spotlight research banner deleted per user request |
| `DiamondFeaturesGrid` | `src/components/home/DiamondFeaturesGrid.tsx` | *(Removed)* | 2026-11-14 | Academic Spectrum diamond grid deleted per user request |
| `UniversityOverview` | `src/components/home/UniversityOverview.tsx` | *(Removed)* | 2026-11-14 | Academic Foundations bento section deleted per user request; Hero now flows directly into the Vice Chancellor section |

---

## Data Models & Utilities

| Module | Path | Description |
|---|---|---|
| Navigation Data | `src/data/navigation.ts` | Mega menu links, categories, campus details |
| Announcements Data | `src/data/announcements.ts` | Structured typed notices (13 items, all 7 tabs), tone-based badges, official references, callout boxes |
| Site Config | `src/config/site.ts` | University metadata, contact information, social URLs |
| Utilities | `src/lib/utils.ts` | `cn()`, `formatDate()`, `truncate()` |
| Shared Types | `src/types/index.ts` | `NavItem`, `SEOProps`, `ContactInfo` |
| Custom Hooks | `src/hooks/index.ts` | `useIsMounted`, `useScrollPosition`, `useMediaQuery` |
