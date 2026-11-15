# Component Catalog & Status

This file tracks every component in the University of Swat project, its source location, dependencies, status, and replacement history.

## Card Surface System (2026-11-15 sitewide restyle)

All cards follow one of three surfaces (full recipes in `docs/CHANGELOG.md`, entry "Sitewide Card Surface System"):

- **FOREST `bg-[#153B27]`** — featured/lead cards, primary stat blocks, spotlight leads. Gold `#C8A96E` labels, white headings, `white/70+` body, `white/15` hairlines, `hover:bg-[#0F2D1E]`.
- **CRIMSON `bg-[#7F1D1D]`** — priority notices, admissions/deadline callouts, key metrics (max one per grid). Small labels `#E5CD9B` (AA-safe on crimson), `hover:bg-[#661717]`.
- **LIGHT (strengthened)** — everything else: `border-stone-300` containers, `stone-200` internals, `text-stone-500/600` minimums, no faint greys.

Rhythm: one dark surface per grid/row; never two adjacent crimsons. Carried today by: RankingSection (forest lead + forest/crimson/light/forest tiles), FacultyProgramsGrid & FlagshipDegreeSpotlight (featured flag), CampusBulletin (crimson reader pane), AdmissionsInquiryFunnel (crimson contacts column), StudentAlumniSuccess & UpcomingEvents (forest leads via `featured` / `first:` variants), HeroSection (pre-existing crimson pillars), PageHeader-band + per-page metric bars/callouts on inner routes.

| Component | Path | Type | Status | Description |
| --- | --- | --- | --- | --- |
| `TopNoticeRibbon` | `src/components/layout/TopNoticeRibbon.tsx` | Client | **Active (Live Announcement Ticker)** | Topmost sticky ribbon with rotating admissions, merit list, and scholarship notices, direct CTA links, ticker controls, and dismiss trigger |
| `Navbar` | `src/components/layout/Navbar.tsx` | Client | **Active (Link Triggers + Hover Mega Nav & Portal CTA)** | Editorial top navigation: circular crest + "University of Swat" branding, seven mega-menu triggers driven by `src/data/navigation.ts` (Programs, Faculties, Academics, Admissions, Campus Life, Research, University). Each trigger is a link — **hover opens the panel, click opens the section's own page** — with viewport-safe single panel beneath the bar, `aria-expanded`/`aria-controls` wiring, ArrowDown-to-open, ArrowLeft/Right roving, Escape-to-close with focus return, close-on-scroll/route-change, university-grid aligned bar (`max-w-[1360px] px-6 lg:px-12`), search action and University Crimson (`#7F1D1D`) "Student Portal" button. Desktop nav at `xl+`, drawer below |
| `MegaMenuPanel` | `src/components/layout/MegaMenuPanel.tsx` | Client | **Active (Editorial Mega-Menu Surface)** | Warm alabaster card (`#FCFBF8`, 20px radius, forest shadow) with crimson eyebrow + serif section summary, grouped hairline link columns (factual right-aligned qualifier, gold tick + crimson label on hover), and a Deep Forest editorial fact rail with crest watermark and one CTA; Arrow-key link navigation; 760 / 1080 / 1180px widths by column count |
| `HeroSection` | `src/components/home/HeroSection.tsx` | Client | **Active (Cinematic Video, 3 Architectural Crimson Cards)** | Full-screen background video hero with multi-stop vignette dissolving into Warm Alabaster (`#F6F5F0`), authoritative display serif H1, dual CTA, and three distinct University Crimson (`#7F1D1D`) architectural cards (Quality, Leadership, Experience) with muted gold top border + Roman numerals, overlapping the hero's bottom edge onto the light section below |
| `ViceChancellorSection` | `src/components/home/ViceChancellorSection.tsx` | Client | **Active (Warm Alabaster Wide Grid, Cohesive Stone Badges)** | Full-width open leadership discourse section on Warm Alabaster (`#F6F5F0`), aligned to the shared 1360px grid, featuring enlarged 420px React Bits `<ProfileCard />` with official portrait, concise inspirational quote, and unified neutral stone achievement badges |
| `EditorialStorytelling` | `src/components/home/EditorialStorytelling.tsx` | Client | **Active (Alternating Editorial Rows)** | High-impact alternating storytelling section featuring Swat Valley alpine campus sustainability (100% solarized, UI GreenMetric) and frontier research (Gandhara heritage & ORIC metrics) |
| `FacultyProgramsGrid` | `src/components/home/FacultyProgramsGrid.tsx` | Client | **Active (Interactive Academic Grid)** | Split-header section with 5 interactive faculty cards (Computing & IT, Sciences, Management Sciences, Law & Legal Studies, Humanities & Languages) combined with the Flagship Degree Spotlight |
| `FlagshipDegreeSpotlight` | `src/components/home/FlagshipDegreeSpotlight.tsx` | Client | **Active (Degree Spotlight Grid)** | Curated cards for flagship degrees (BS Computer Science, BS Software Engineering, BBA Honors, BS Environmental Sciences) with duration chips, career focuses, and syllabus links |
| `CampusBulletin` | `src/components/home/CampusBulletin.tsx` | Client | **Active (Flagship 2-Column Master-Detail)** | Unified `rounded-xl` bento-style container (surface gradient, cursor-following spotlight, VC-card ambient aura blobs) on the shared 1360px grid with a split header, full-width category rail with a sliding active-tab pill (OriginKit Tabs pattern) over Recent/News/Admissions/Exams/Teachers/Students/Vacations, a seamless auto-looping notice feed (bento tiles with sheen sweep, hover glow, scroll-hint edge fades; pause on hover, resume unless a card was clicked), and a full official notice reader with serif headline, emerald callout box, crest watermark, gradient Share/Download action bar, and Web Share API + toast feedback. Replaces the legacy `AnnouncementsBoard` gazette. |
| `CampusTourBanner` | `src/components/home/CampusTourBanner.tsx` | Client | **Active (Full-Bleed Panoramic Callout)** | Panoramic alpine campus photo banner with dark vignette, headline, visit booking CTA, and interactive 360° video tour modal |
| `UpcomingEvents` | `src/components/home/UpcomingEvents.tsx` | Client | **Active (Events Calendar Carousel)** | Interactive event cards with calendar date badges, category tags, time, venue, and horizontal scroll controls |
| `RankingSection` | `src/components/home/RankingSection.tsx` | Client | **Active (Institutional Scorecard & Accreditation Registry)** | Rebuilt under `design-taste-frontend`: HEC 91.4% W-Category audit with 5-year SVG trajectory curve, UI GreenMetric Top 15 multi-bar sustainability chart, Times Higher Education 301–400 SDG sparkline, 4 statutory accreditation cards (NAEAC 3.68, 100% HEC Charter, Top 5 Green Campus, PKR 85M ORIC Grants), and reassurance banner with QEC PDF audit report download |
| `CampusLifeHeritage` | `src/components/home/CampusLifeHeritage.tsx` | Client | **Active (Bento Gallery)** | Split-header bento grid: featured Charbagh Main Campus tile (span 2×2) beside an aligned 2×2 of Women Campus / Central Library / Sports Complex / Heritage tiles — hover zoom, frosted captions, hairline rings, and keyboard lightbox |
| `StudentAlumniSuccess` | `src/components/home/StudentAlumniSuccess.tsx` | Client | **Active (Testimonials & Outcomes)** | Authentic alumni & student quotes from tech, hydrology, and business graduates paired with 4-column institutional outcome counters |
| `AdmissionsInquiryFunnel` | `src/components/home/AdmissionsInquiryFunnel.tsx` | Client | **Active (Interactive Lead-Gen Funnel)** | Split-tone section with admissions helpline and prospectus download on the left, and fast interactive lead capture form on the right |
| `CampusPhotoRibbon` | `src/components/home/CampusPhotoRibbon.tsx` | Client | **Active (6-Photo Social Strip)** | Edge-to-edge student life gallery strip featuring campus landmarks, laboratories, graduation, and Swat heritage with Instagram follow tag |
| `ProfileCard` | `src/components/ui/ProfileCard.tsx` | Client | **Active (Primitive)** | React Bits interactive 3D holographic profile card component with configurable width (`--pc-width`), institutional `caption` support, cursor-following glare, specular sheen, parallax portrait, and Hugeicons mail trigger |
| `Footer` | `src/components/layout/Footer.tsx` | Client | **Active (Deep Forest Green Directory & Crimson Accent)** | Commanding Deep Forest Green (`bg-[#0F291B]`) footer with a University Crimson (`border-t-4 border-[#7F1D1D]`) top border, circular crest branding, white headings, Crimson subscribe action, 4 main columns with verified UoS statutory links, and circular social media glyphs |
| `PageHeader` | `src/components/layout/PageHeader.tsx` | Server | **Active (Deep Forest Green Architectural Hero)** | High-contrast Deep Forest Green (`bg-[#153B27]`) architectural inner-page hero banner with Muted Gold (`#C8A96E`) eyebrow, pure white serif H1, integrated breadcrumb trail, and full navbar clearance |
| `DownloadsClient` | `src/components/academics/DownloadsClient.tsx` | Client | **Active (Interactive Repository Explorer)** | Interactive download center with live search, 7 category filter pills, overlapping 4-metric crimson stat bar, verified PDF cards, and statutory attestation advisory |
| `UosAssistant` | `src/components/ui/UosAssistant.tsx` + `UosAssistant.css` | Client | **Active (React Bits–style AI Assistant)** | Fixed bottom-right assistant rebuilt in the React Bits style: physics-based tilt engine on the circular Forest Green (`#153B27`) crest toggle badge (serif "UoS" monogram, double-ring seal), letterhead panel with serif `Cormorant Garamond` headings, hairline rules, Muted Gold (`#C8A96E`) accent rule, and University Crimson (`#7F1D1D`) send button. Micro-animations: panel scale/fade entrance, staggered message rise, three-dot typing pulse, tactile send press. `role="dialog"`, `aria-expanded`/`aria-controls`, Escape-to-close with focus return, Enter-to-send, `aria-live` announcements. No real LLM backend wired by default — set `NEXT_PUBLIC_CHATBOT_API_URL` / pass `apiEndpoint` to connect one; otherwise replies with an honest contact-direction message |
| `NotFound` | `src/app/not-found.tsx` | Server | **Active (Custom 404)** | Editorial "page not enrolled" 404 with home/programs/contact actions |


---

## Page Route Directory & Prerendered Templates

| Route Pattern | File Path | Type | Status | Description |
| --- | --- | --- | --- | --- |
| `/` | `src/app/page.tsx` | Static / Client | **Active (Flagship Homepage)** | Approved full homepage (Hero, VC discourse, Campus Bulletin, Faculty Grid, Bento Heritage, Ranking Scorecard, Footer) |
| `/faculty` | `src/app/faculty/page.tsx` | Static | **Active** | Catalog of all 4 faculties and 28 academic departments with direct links to dynamic profiles |
| `/departments/[slug]` | `src/app/departments/[slug]/page.tsx` | SSG (Dynamic) | **Active (18+ Paths)** | Detailed department page with faculty directory, research aims, programs offered, and contact proforma |
| `/programs` | `src/app/programs/page.tsx` | Client | **Active (Interactive Program Finder & Syllabus Drawer)** | Redesigned academic program finder with top clearance breadcrumb, search & degree-level segmented pills, 3x2 flagship cards with interactive slide-over syllabus drawer, horizontal faculty tabs, and unified 3-column architectural department directory container |
| `/programs/[slug]` | `src/app/programs/[slug]/page.tsx` | SSG (Dynamic) | **Active (6 Paths) — Premium Editorial Template** | Breadcrumbed `PageHeader` with fact strip (Duration / Credit / Accreditation / Fee), editorial scope split with real departmental photography (Chemistry, Env Sci) or forest type-panel, numbered serif learning-outcome index, ruled semester/LLB-year timeline with auto Capstone chips, Roman-numeral career rows, forest-header Enrollment Overview sidebar, and index-style other-programs directory (BSCS, BSSE, BBA, BS Chemistry, LLB, BS Env Sci) |
| `/leadership` | `src/app/leadership/page.tsx` | Static | **Active** | Statutory university leadership catalog and administrative council |
| `/leadership/vice-chancellor` | `src/app/leadership/vice-chancellor/page.tsx` | Static | **Active** | Full discourse, vision, curriculum vitae, and secretariat of Prof. Dr. Husnul Amin |
| `/leadership/[slug]` | `src/app/leadership/[slug]/page.tsx` | SSG (Dynamic) | **Active (4 Paths)** | Administrative profiles for Registrar, Treasurer, Controller of Examinations, and Provost |
| `/academics` | `src/app/academics/page.tsx` | Static | **Active (Design-Taste Institutional Hub)** | Comprehensive academic ecosystem: Deep Forest Green PageHeader, overlapping 4-metric crimson stat bar, 3 core gateway spec cards (I–III), Charbagh alpine complex editorial split, 8-bracket HEC grading scale with academic progression rules, QEC 91.4% W-Category showcase, 4 academic authorities, and 4-way pathway navigation |
| `/academics/calendar` | `src/app/academics/calendar/page.tsx` | Static | **Active (Design-Taste Semester Calendar)** | Official Academic Calendar 2026–2027: Deep Forest Green PageHeader, overlapping 4-metric crimson stat bar, side-by-side Fall 2026 & Spring 2027 timelines with status pills, exam badges, PDF download action, and statutory examination advisory |
| `/academics/downloads` | `src/app/academics/downloads/page.tsx` | Static / Client | **Active (Interactive Download Center)** | Official Statutes & Forms repository: Deep Forest Green PageHeader, `DownloadsClient` with live search, 7 category filter pills, verified PDF proformas, and Registrar attestation advisory |
| `/admissions` | `src/app/admissions/page.tsx` | Static | **Active** | Comprehensive admissions prospectus, eligibility requirements, step-by-step application pipeline |
| `/admissions/fee-structure` | `src/app/admissions/fee-structure/page.tsx` | Static | **Active** | Official fee schedule breakdown for all BS, MS/MPhil, PhD, and Self-Finance programs |
| `/admissions/merit-lists` | `src/app/admissions/merit-lists/page.tsx` | Static | **Active** | Departmental provisional and final merit lists with downloadable official gazettes |
| `/research` | `src/app/research/page.tsx` | Static | **Active** | Research pillars, patents, Gandhara archaeological excavations, and SUJRIS publications |
| `/research/oric` | `src/app/research/oric/page.tsx` | Static | **Active** | Office of Research, Innovation & Commercialization, business incubation, and technology transfer |
| `/research/asrb` | `src/app/research/asrb/page.tsx` | Static | **Active** | Advanced Studies & Research Board policies, thesis submission rules, and MS/PhD approvals |
| `/campus-life` | `src/app/campus-life/page.tsx` | Static | **Active** | Student societies, sports complex, hostels, alpine outdoor clubs, and transport |
| `/campuses/main-campus` | `src/app/campuses/main-campus/page.tsx` | Static | **Active** | Charbagh Main Campus overview, 100% solarization, administrative blocks, and masterplan |
| `/campuses/women-campus` | `src/app/campuses/women-campus/page.tsx` | Static | **Active** | Women Sub-Campus academic facilities, safety, transport, and dedicated female education |
| `/news` | `src/app/news/page.tsx` | Static | **Active** | University press bureau with verified 2026 press releases and research breakthroughs |
| `/news/[slug]` | `src/app/news/[slug]/page.tsx` | SSG (Dynamic) | **Active (6 Paths)** | Individual press release articles with authentic photography and official statements |
| `/events` | `src/app/events/page.tsx` | Static | **Active** | University event calendar, academic symposia, convocation dates, and sports galas |
| `/about` | `src/app/about/page.tsx` | Static | **Active** | Institutional history from 2010 charter, statutory governance, mission, and valley heritage |
| `/affiliated-colleges` | `src/app/affiliated-colleges/page.tsx` | Static | **Active** | Affiliated public and private degree colleges across Swat, Shangla, and Buner |
| `/contact` | `src/app/contact/page.tsx` | Static | **Active** | Departmental telephone directory, email addresses, campus addresses, and inquiry form |
| `/portal` | `src/app/portal/page.tsx` | Static | **Active** | Central gateway for Student CMS, LMS, Staff e-Office, Admissions, and SUJRIS journal |

---

## Deprecated & Replaced Components

| Legacy Component | Previous Path | Replaced By | Date | Reason |
| --- | --- | --- | --- | --- |
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
| --- | --- | --- |
| Navigation Data | `src/data/navigation.ts` | Single source of truth for the primary navigation: typed `NavItem` / `NavGroup` / `NavLink` / `NavRail` model, seven taxonomy groups (Programs, Faculties, Academics, Admissions, Campus Life, Research, University), per-panel factual qualifiers and rail figures, and `primaryActions`. Consumed by `Navbar` and `MegaMenuPanel`; replaces the legacy placeholder mega data (`href: "#"`) |
| Announcements Data | `src/data/announcements.ts` | Structured typed notices (13 items, all 7 tabs), tone-based badges, official references, callout boxes |
| University Data | `src/data/universityData.ts` | Statutory history, governance, accreditation metrics, official email/phone directory |
| Leadership Data | `src/data/leadershipData.ts` | VC credentials (Prof. Dr. Husnul Amin), Secretariat roster, Statutory Officers profiles |
| Departments Catalog | `src/data/departmentsData.ts` | All 4 official faculties, 28 teaching departments, faculty rosters, programs, and contact proformas |
| Program Syllabi | `src/data/programsDetailData.ts` | Deep curriculum specifications, 8-semester course outlines, credit hours, and eligibility criteria |
| Verified News | `src/data/newsData.ts` | Authentic press releases and research breakthroughs from official university coverage |
| Campus Specifications | `src/data/campusData.ts` | Specifications, acreage, facilities, and programs for Charbagh and Women Sub-Campus |
| Crawled Web Data | `src/data/crawled_pages.json` | 1.2 MB raw structured extraction of 258 pages from `uswat.edu.pk` |
| Site Config | `src/config/site.ts` | University metadata, contact information, social URLs |
| Utilities | `src/lib/utils.ts` | `cn()`, `formatDate()`, `truncate()` |
| Shared Types | `src/types/index.ts` | `NavItem`, `SEOProps`, `ContactInfo` |
| Custom Hooks | `src/hooks/index.ts` | `useIsMounted`, `useScrollPosition`, `useMediaQuery` |
