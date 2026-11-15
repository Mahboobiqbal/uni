# University of Swat — Agent Instructions

Next.js 16 App Router site for the University of Swat (~15–30 pages, editorial/institutional design). Compact ramp-up file: every line targets something an agent would likely miss without help.

## Tech stack (verified in package.json)
- Next.js 16.4.6 (App Router, Turbopack), React 19, TypeScript 5, Tailwind CSS v4, Node.js 26, npm.
- Fonts (next/font/google): `Cormorant_Garamond` → `--font-serif`, `Plus_Jakarta_Sans` → `--font-sans`. The README's Inter/Merriweather listing is stale; trust `src/app/globals.css`.

## Commands
- `npm run dev` — dev server → http://localhost:3000
- `npm run build` — production build
- `npm run start` — production server
- `npm run lint` — ESLint (eslint-config-next)
- `npx tsc --noEmit` — typecheck (tsconfig `noEmit: true`)

## Windows PowerShell gotcha (this host)
- npm `.ps1` shims are blocked by execution policy. Run npm commands directly (`npm run dev`, not `npm.cmd run dev`). If invoking the Cloudflare `cf` CLI, use `cf.cmd`, not `cf`.

## Directory layout (src is the app)
```
src/
  app/          # App Router: layout.tsx, globals.css, page.tsx (/), and route folders
  components/   # ui/ (primitives), layout/ (chrome), home/ (sections), academics/
  config/       # siteConfig (site.ts)
  data/         # static data stores
  hooks/, lib/, types/
public/         # static assets (images, crests)
```
Absolute imports: `@/*` → `./src/*` (tsconfig `paths`).

## Styling & design tokens
- Tailwind v4. Tokens live in the `@theme` block of `src/app/globals.css` (e.g. `--color-uni-forest`, `--color-uni-crimson`, `--color-uni-gold`, `--font-serif`, `--font-sans`). Use tokens; avoid arbitrary values where a token exists.
- Body canvas is `--color-uni-alabaster` (#F6F5F0), text `--color-uni-charcoal` (#14291D). Palette: Forest Green `#153B27` (primary), University Crimson `#7F1D1D` (accent), Muted Gold `#C8A96E`.

## AI Chatbot
- A floating assistant (`src/components/ui/UosAssistant.tsx` + `UosAssistant.css`) is rendered globally in `src/app/layout.tsx` after `<Footer />`, so it appears on every page.
- University-specific React Bits style: circular crest toggle badge with a serif "UoS" monogram (Forest Green `#153B27`), physics tilt engine on hover, letterhead panel with serif `Cormorant Garamond` headings, hairline rules, Muted Gold (`#C8A96E`) accent rule, and crimson (`#7F1D1D`) send button. No generic chat bubble, no emoji.
- Micro-animations: physics tilt badge, panel scale/fade entrance, staggered message rise, three-dot typing pulse, tactile send press.
- No real LLM backend is wired by default. Connect one via `NEXT_PUBLIC_CHATBOT_API_URL` / the `apiEndpoint` prop; otherwise the bot replies with an honest contact-direction message.
- Accessible: `role="dialog"`, `aria-expanded`/`aria-controls`, Escape-to-close with focus return, Enter-to-send.

## Component replacement protocol (when given new component code)
1. **Delete/replace** the old component in `src/components/`. Leave no orphan files.
2. **Implement** matching the provided design; Tailwind v4 tokens; zero `any`/implicit types; preserve/enhance accessibility (aria, keyboard, semantic HTML).
3. **Integrate** into `src/app/page.tsx` or layout as needed; clean prop interfaces.
4. **Document** in `docs/CHANGELOG.md` (timestamp, files modified/deleted/created), update `docs/COMPONENTS.md`, and update this `AGENTS.md` if conventions change.
5. **Verify**: `npx tsc --noEmit` passes and `npm run dev` runs without runtime/hydration errors.

## Docs
`docs/` holds the design system (BRIEF, SITEMAP, URL-MAP, NAVIGATION, CONTENT-MODEL, LAYOUT-SYSTEM, CARD-SYSTEM, PAGE-BLUEPRINTS, DESIGN-TOKENS, TYPOGRAPHY, COLOR-SYSTEM, MOTION-SYSTEM, ACCESSIBILITY, IMPLEMENTATION-PLAN). When docs conflict with config/scripts, trust the executable source.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
