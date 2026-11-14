# Component Catalog & Status

This file tracks every component in the University of Swat project, its source location, dependencies, status, and replacement history.

| Component | Path | Type | Status | Description |
|---|---|---|---|---|
| `Navbar` | `src/components/layout/Navbar.tsx` | Client | **Active (Smooth Fade-In & Expanded 2-Col Mega Menu)** | Transparent-to-frosted top navigation with circular crest, "University of Swat" branding, smooth cubic-bezier fade-in 2-column floating mega-menu card with top caret, expanded padding/grid spacing, and #731C1C button |
| `HeroSection` | `src/components/home/HeroSection.tsx` | Client | **Active (Cinematic Video, 10% Lowered 3-Pillar Box & Seamless Dissolve)** | Full-screen background video hero with tightened typography (-0.025em tracking, 1.08 leading), "Take a Tour" CTA, side-cropped floating translucent crimson #731C1C container (Quality, Leadership, Experience) lowered by 10% over the green section, and 380px multi-stop seamless green dissolve |
| `UniversityOverview` | `src/components/home/UniversityOverview.tsx` | Client | **Active (University Colors Mesh Canvas & Dual Top/Bottom Green Dissolve Glow)** | Academic Foundations, Research & Institutional Impact 6-card bento grid framed on a university colors mesh gradient canvas (`#1D3523`, `#731C1C`, `#2f3e29`, `#D4AF37`) with matching top dissolve gradient and bottom green glow dissolve (zero-border continuous flow at both ends) and light vibrant pastel subcards |
| `ViceChancellorSection` | `src/components/home/ViceChancellorSection.tsx` | Client | **Active (Enlarged ProfileCard & Streamlined Executive Discourse)** | Full-width open leadership discourse section featuring enlarged 420px React Bits `<ProfileCard />` with official portrait of Prof. Dr. Hassan Sher, 3D tilt, holo foil, concise punchy institutional quote, compact credentials, and statutory links |
| `ProfileCard` | `src/components/ui/ProfileCard.tsx` | Client | **Active (Primitive)** | React Bits interactive 3D holographic profile card component with configurable width (`--pc-width`), cursor-following glare, specular sheen, parallax portrait, and Hugeicons mail trigger |
| `MagicBento` | `src/components/ui/MagicBento.tsx` | Client | **Active (Primitive)** | React Bits interactive bento grid component with high-intensity #2f3e29 border glow (alpha 1.0), spotlight (alpha 0.22), star particles, tilt, and shockwave physics |
| `AnnouncementsBoard` | `src/components/home/AnnouncementsBoard.tsx` | Client | Baseline | Interactive gazette with category tabs, notice list, and live bulletin preview |
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
