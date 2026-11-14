# Component Catalog & Status

This file tracks every component in the University of Swat project, its source location, dependencies, status, and replacement history.

| Component | Path | Type | Status | Description |
|---|---|---|---|---|
| `Navbar` | `src/components/layout/Navbar.tsx` | Client | **Active (Smooth Fade-In & Expanded 2-Col Mega Menu)** | Transparent-to-frosted top navigation with circular crest, "University of Swat" branding, smooth cubic-bezier fade-in 2-column floating mega-menu card with top caret, expanded padding/grid spacing, and #731C1C button |
| `HeroSection` | `src/components/home/HeroSection.tsx` | Client | **Active (Cinematic Video & Expanded 3-Pillar Ribbon)** | Full-screen background video hero with tightened typography (-0.025em tracking, 1.08 leading), "Take a Tour" CTA, and expanded translucent #5D1616 crimson ribbon (Quality, Leadership, Experience) |
| `UniversityOverview` | `src/components/home/UniversityOverview.tsx` | Client | **Active (React Bits MagicBento)** | Interactive 6-card bento grid powered by `<MagicBento />` (Heritage, Disciplines, Analytics, Collaboration, Automation, Security) |
| `MagicBento` | `src/components/ui/MagicBento.tsx` | Client | **Active (Primitive)** | React Bits interactive bento grid component with border glow, spotlight, star particles, tilt, and shockwave physics |
| `ViceChancellorDesk` | `src/components/home/ViceChancellorDesk.tsx` | Server | Baseline | VC Prof. Dr. Hassan Sher message and credentials |
| `UniversityQuote` | `src/components/home/UniversityQuote.tsx` | Server | Baseline | Institutional creed quote |
| `AnnouncementsBoard` | `src/components/home/AnnouncementsBoard.tsx` | Client | Baseline | Interactive gazette with category tabs, notice list, and live bulletin preview |
| `FeaturedSpotlight` | `src/components/home/FeaturedSpotlight.tsx` | Server | Baseline | Alpine Biodiversity & Gandhara Heritage Studies research banner |
| `DiamondFeaturesGrid` | `src/components/home/DiamondFeaturesGrid.tsx` | Server | Baseline | 6 interlocking 45° diamond cells for faculty centers |
| `RankingSection` | `src/components/home/RankingSection.tsx` | Server | Baseline | HEC W-category 91.4% rating, GreenMetric, THE rankings + 4 visual badges |

---

## Deprecated & Replaced Components

| Legacy Component | Previous Path | Replaced By | Date | Reason |
|---|---|---|---|---|
| `Header` | `src/components/layout/Header.tsx` | `Navbar` (`CardNav`) | 2026-11-14 | Replaced with modern React Bits `<CardNav />` component |
| `CardNav` | `src/components/ui/CardNav.tsx` | `Navbar` (Editorial Header) | 2026-11-14 | Replaced with high-contrast editorial navigation overlay matching design |
| `HeroSection` (v1) | `src/components/home/HeroSection.tsx` | `HeroSection` (v2) | 2026-11-14 | Replaced with cinematic video background hero and translucent crimson 3-pillar ribbon |

---

## Data Models & Utilities

| Module | Path | Description |
|---|---|---|
| Navigation Data | `src/data/navigation.ts` | Mega menu links, categories, campus details |
| Announcements Data | `src/data/announcements.ts` | Gazette items, categories, full HTML bulletins |
| Site Config | `src/config/site.ts` | University metadata, contact information, social URLs |
| Utilities | `src/lib/utils.ts` | `cn()`, `formatDate()`, `truncate()` |
| Shared Types | `src/types/index.ts` | `NavItem`, `SEOProps`, `ContactInfo` |
| Custom Hooks | `src/hooks/index.ts` | `useIsMounted`, `useScrollPosition`, `useMediaQuery` |
