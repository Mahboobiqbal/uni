# Component Catalog & Status

This file tracks every component in the University of Swat project, its source location, dependencies, status, and replacement history.

| Component | Path | Type | Status | Description |
|---|---|---|---|---|
| `Navbar` | `src/components/layout/Navbar.tsx` | Client | **Active (Flagship Academic Nav & Portal CTA)** | Transparent-to-frosted top navigation with circular crest, "University of Swat" branding, smooth cubic-bezier fade-in 2-column floating mega-menu cards, academic taxonomy (Programs, Faculty, Academics, Admissions, Campus Life, Research), and University Crimson (#7F1D1D) "Student Portal" button |
| `HeroSection` | `src/components/home/HeroSection.tsx` | Client | **Active (Cinematic Video, Vignette Overlay, Dual CTA & Elevated Architectural Bar)** | Full-screen background video hero with multi-stop vignette overlay (into Forest Obsidian #0C1912), authoritative display serif H1, dual CTA ("Explore Programs" & "Virtual Campus Tour"), and sleek elevated architectural 3-pillar bar (#6B1818/95, Quality, Leadership, Experience) |
| `UniversityOverview` | `src/components/home/UniversityOverview.tsx` | Client | **Active (Forest Obsidian Canvas, Hairline Grid & Standardized Brand Accents)** | Academic Foundations, Research & Institutional Impact 6-card bento grid framed on a Forest Obsidian canvas (`#0C1912`) with subtle top radial emerald glow (`rgba(26,67,46,0.35)`), hairline grid, crisp architectural transition to Warm Alabaster, and standardized Deep Forest Green, University Crimson, and Warm Muted Gold accents (zero SaaS pastels) |
| `ViceChancellorSection` | `src/components/home/ViceChancellorSection.tsx` | Client | **Active (Warm Alabaster Canvas, Institutional Caption & Cohesive Stone Badges)** | Full-width open leadership discourse section on Warm Alabaster (`#F8F7F4`), featuring enlarged 420px React Bits `<ProfileCard />` with official portrait, institutional caption without social handle/status dot, concise inspirational quote, and unified neutral stone achievement badges |
| `ProfileCard` | `src/components/ui/ProfileCard.tsx` | Client | **Active (Primitive)** | React Bits interactive 3D holographic profile card component with configurable width (`--pc-width`), institutional `caption` support, cursor-following glare, specular sheen, parallax portrait, and Hugeicons mail trigger |
| `MagicBento` | `src/components/ui/MagicBento.tsx` | Client | **Active (Primitive)** | React Bits interactive bento grid component with crisp 1px borders (`border-stone-200` in light, `border-white/10` in dark), consistent `p-7` (`28px`) internal padding, eliminated heavy drop shadows, border glow, spotlight, and physics |
| `CampusBulletin` | `src/components/home/CampusBulletin.tsx` | Client | **Active (Flagship 3-Column Master-Detail)** | Unified `rounded-[28px]` bento-style container (surface gradient, cursor-following spotlight, VC-card ambient aura blobs) with category sidebar (Recent/News/Admissions/Exams/Teachers/Students/Vacations), seamless auto-looping notice feed (bento tiles with sheen sweep, hover glow; pause on hover, resume unless a card was clicked), and full official notice reader with serif headline, emerald callout box, gradient Share/Download action bar, and Web Share API + toast feedback. Replaces the legacy `AnnouncementsBoard` gazette. |
| `FeaturedSpotlight` | `src/components/home/FeaturedSpotlight.tsx` | Server | Baseline | Alpine Biodiversity & Gandhara Heritage Studies research banner |
| `DiamondFeaturesGrid` | `src/components/home/DiamondFeaturesGrid.tsx` | Server | Baseline | 6 interlocking 45° diamond cells for faculty centers |
| `RankingSection` | `src/components/home/RankingSection.tsx` | Server | Baseline | HEC W-category 91.4% rating, GreenMetric, THE rankings + 4 visual badges |

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
