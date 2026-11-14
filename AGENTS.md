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

- **`Navbar`** (`src/components/layout/Navbar.tsx`): High-contrast editorial navigation overlay with official circular University crest (`/uos-logo-circle.png`), "University of Swat" branding, horizontal menu triggers with smooth cubic-bezier fade-in 2-column floating mega-menu cards (with top caret and expanded spacing) matching the reference design, and Crimson Maroon (`#731C1C`) "Sign up" button.
- **`HeroSection`** (`src/components/home/HeroSection.tsx`): Full-viewport cinematic video background hero with tightened headline typography (-0.025em tracking, 1.08 leading), loose body copy (1.65 leading), "Take a Tour" CTA button, bottom side-cropped floating translucent Crimson Maroon (`#731C1C`) box (`Quality`, `Leadership`, `Experience`) lowered by 10% over the green section, and extended 380px multi-stop green dissolve gradient eliminating any hard boundary seam.
- **`UniversityOverview`** (`src/components/home/UniversityOverview.tsx`): Academic Foundations, Research & Institutional Impact 6-card bento grid framed on a university colors mesh gradient canvas (`#1D3523`, `#731C1C`, `#2f3e29`, `#D4AF37`) with continuous top green dissolve gradient (seamlessly blending into the Hero section as one flowing section), powered by React Bits `<MagicBento />` (`src/components/ui/MagicBento.tsx`), featuring cursor spotlights, `#2f3e29` border and card hover glows, canvas stars, physics tilt, click wave shockwaves, Lucide icons, light vibrant pastel subcards (pink, purple, orange, indigo, blue, amber), and verified academic content (Institutional Heritage, Academic Breadth, 10,130 Historical Metrics, ORIC Research, Student Resources, Administration).
- **`AnnouncementsBoard`** (`src/components/home/AnnouncementsBoard.tsx`): 3-column interactive gazette with bulletin preview.
- **`FeaturedSpotlight`** (`src/components/home/FeaturedSpotlight.tsx`): Research spotlight card.
- **`DiamondFeaturesGrid`** (`src/components/home/DiamondFeaturesGrid.tsx`): 6 diamond faculty cells.
- **`RankingSection`** (`src/components/home/RankingSection.tsx`): Benchmark scorecard and badges.
- **`Footer`** (`src/components/layout/Footer.tsx`): 4-column institutional footer.
