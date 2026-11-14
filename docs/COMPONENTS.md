# Component Catalog & Status

This file tracks every component in the University of Swat project, its source location, dependencies, status, and replacement history.

| Component | Path | Type | Status | Description |
|---|---|---|---|---|
| `Navbar` | `src/components/layout/Navbar.tsx` | Client | **Active (Stageshow Craft Polish)** | Edge-to-edge top navigation with calibrated logo nested insets, clean text category triggers, and stageshow design tokens |
| `CardNav` | `src/components/ui/CardNav.tsx` | Client | **Active (Stageshow Tokens & Spring Physics)** | Card navbar with full-width spring physics, stageshow design tokens (`--ss-*`), restrained text links with micro-animated arrows, and clean 2-column layout |
| `Footer` | `src/components/layout/Footer.tsx` | Server | Baseline | 4-column directory, campus contacts, social links, legal bar |
| `HeroSection` | `src/components/home/HeroSection.tsx` | Server | Baseline | Split hero with ancient/modern headline, quick portal gateway, campus card |
| `UniversityOverview` | `src/components/home/UniversityOverview.tsx` | Server | Baseline | 3-item metrics ribbon + 2-column bento card (About, Disciplines, Analytics) |
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
