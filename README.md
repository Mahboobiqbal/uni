# University of Swat — Official Web Portal

Production-ready Next.js application for the University of Swat (Swat Valley, Khyber Pakhtunkhwa, Pakistan). This is a statically generated, editorial-institutional site covering academics, the, research, campus life, and administration — built on the Next.js App Router with a custom design system.

---

## Tech Stack

| Tool | Version | Notes |
|---|---|---|
| Next.js | 16.4.6 | App Router, Turbopack, Static Generation (SSG) |
| React | 19 | Server + Client components |
| TypeScript | 5 | Strict mode, `noEmit` |
| Tailwind CSS | 4 | CSS-first config via `@theme` in `globals.css` |
| Node.js | 26 | Local runtime |

Fonts are self-hosted via `next/font/google`: **Cormorant Garamond** (serif) and **Plus Jakarta Sans** (sans).

---

## Getting Started

```bash
npm install       # install dependencies
npm run dev       # start dev server → http://localhost:3000
npm run build     # production build (static export)
npm run start     # serve production build
npm run lint      # ESLint (next/core-web-vitals + typescript)
npx tsc --noEmit # typecheck
```

---

## Project Structure

```
src/
├── app/                 # App Router — routes, layouts, global styles
│   ├── layout.tsx       # Root layout (fonts, navbar, footer, UoS Assistant)
│   ├── globals.css      # Design tokens + Tailwind v4 theme
│   ├── page.tsx         # Home (/)
│   ├── not-found.tsx    # Custom 404
│   └── (route folders)  # See Routes below
├── components/
│   ├── ui/              # Primitives (ProfileCard, UosAssistant)
│   ├── layout/          # Chrome (Navbar, Footer, MegaMenuPanel, PageHeader)
│   ├── home/            # Homepage sections
│   ├── academics/       # Downloads & AffiliatedColleges clients
│   └── administration/  # Administration explorer (client)
├── data/                # Static content stores (departments, programs, news…)
├── lib/                 # Utilities (slugify, cn)
└── config/
    └── site.ts          # Global site metadata / contact
public/                  # Static assets (logos, images, video)
```

Path alias: `@/*` → `./src/*`.

---

## Routes

| Route | Description |
|---|---|
| `/` | Home |
| `/about` | About & heritage |
| `/faculty` `/faculty/[slug]` | Faculties & departments |
| `/departments/[slug]` | Teaching department profiles |
| `/programs` `/programs/[slug]` | Degrees & curricula |
| `/academics` | Academics hub (rules, QEC, authorities) |
| `/academics/calendar` | Academic calendar |
| `/academics/downloads` | Official forms & statutes |
| `/administration` | Administration & services (tabbed, `?tab=…`) |
| `/research` `/research/oric` `/research/asrb` | Research & innovation |
| `/leadership` `/leadership/[slug]` | Leadership & governance |
| `/campuses/main-campus` `/campuses/women-campus` | Campuses |
| `/campus-life` | Campus life & hostels |
| `/news` `/news/[slug]` | News & press |
| `/events` `/events/[slug]` | Events |
| `/affiliated-colleges` | Affiliated colleges |
| `/alumni` | Alumni |
| `/contact` | Contact & directory |
| `/portal` | Student/faculty portal hub |

All routes are statically generated from data; dynamic segments use `generateStaticParams`.

---

## Design System

Tokens live in the `@theme` block of `src/app/globals.css`.

| Token | Hex | Usage |
|---|---|---|
| `--color-uni-forest` | `#153B27` | Deep Forest Green — primary surfaces, actions |
| `--color-uni-forest-dark` | `#0F2D1E` | Forest green hover |
| `--color-uni-crimson` | `#7F1D1D` | University Crimson — accents, CTAs, eyebrows |
| `--color-uni-crimson-dark` | `#661717` | Crimson hover |
| `--color-uni-gold` | `#C8A96E` | Muted Gold — heritage accents, rules |
| `--color-uni-gold-muted` | `#B48A3E` | Muted gold borders |
| `--color-uni-alabaster` | `#F6F5F0` | Warm Alabaster — page canvas |
| `--color-uni-charcoal` | `#14291D` | Deep charcoal body text |

Typography: **Cormorant Garamond** (`--font-serif`) for headings; **Plus Jakarta Sans** (`--font-sans`) for UI/body.

---

## Interaction Features

- **UoS Navigation Guide** (`src/components/ui/UosAssistant.tsx`) — a floating, rule-based guided assistant that routes visitors to real pages in 2–3 taps (no external AI).
- **Tabbed Administration explorer** (`/administration`) — in-page category tabs with live search.
- **Two-tier search & filter bars** on `/programs`, `/faculty`, `/administration`, `/academics/downloads`, `/affiliated-colleges`.
- **Custom 404** with brand crest and verified action links.

---

## Deployment

The site is deployed to Vercel. `npm run build` produces the full static export (currently ~300 pages). No server-side secrets are required.
