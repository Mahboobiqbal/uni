# Editorial Alignment Brief — Inner Pages to Home Language

Date: 2026-11-15. Skill: `design-taste-frontend` (adapted to the existing Next.js stack per its step 0 — keep the project's own components/tokens, apply its taste rules and checker scripts).

## The reference: home page language

Warm Alabaster `#F6F5F0` canvas · Deep Forest `#153B27` bands/cards · University Crimson `#7F1D1D` priority/metric accents · Muted Gold `#C8A96E` labels/rules · serif-led display headings (`font-serif`, Cormorant Garamond) over Plus Jakarta Sans body · 1360px grid (`max-w-[1360px] mx-auto px-6 lg:px-12`) · shared `PageHeader` forest band · surface system per `AGENTS.md` §Card surface system (forest leads, crimson callouts max one per grid, strengthened light cards) · hover: lift 2px + brand-tinted border + gold accent (home's existing vocabulary — reuse, never invent new motion idioms).

## Audit findings (what inner pages get wrong today)

1. **No section-level rhythm** — everything floats as white/rounded cards on one continuous alabaster ground; home alternates alabaster → forest band → photo section → dark band. Inner pages need ONE full-width contrasting band per page (forest `bg-[#153B27]` or Forest Obsidian `#0C1912` photo band) holding that page's strongest visual, placed mid-page or later.
2. **No semantic sections** — pages are `<div>` soups; restructure so each page is `main`-level `<section>`s (or one `<div>` root whose direct children are `<section>`s) with consistent `py-16 sm:py-24` rhythm. This alone fixes the "1 giant section" read.
3. **Uniform card rows** (the AI-slop tell) — news archive 3×2 identical cards, portal grid, leadership admin grid, colleges list. Break symmetry: mix a directory-row list layout with one featured card, or pair one large card + smaller rows. Never the same layout twice in a row.
4. **Photo absence** — real photography exists and must lead sections: `public/images/campus/` (charbagh-campus.jpg, women-campus.jpg, admin-block.jpg, exam-block.jpg, main-campus-gate.jpeg, 19_University_Main_Gate.jpeg, 15_admin.jpg, 16_exam.jpg, 18_ORIC.jpeg, 17_HEDRankingsAnnounced.jpeg, 9_34ty.jpg, 11_uswat1.jpg, 13_img.jpeg, 14_img.jpeg…), `public/images/leadership/` (vc-prof-dr-husnul-amin.jpeg, registrar-dr-arshad-ali.jpeg, vc-office_*.jpg, registeror-office_*.jpg), `public/images/news/*.jpeg` (8 real news photos), plus `events/`, `facilities/`, `faculties/`, `academics/`, `administration/` folders. Use `<img>`/`next/image` with real alt text. No captions under photos (skill house rule 1).
5. **Editorial splits, never mirrored** — text left, photo right, top-aligned; the ONE photo split per section; on phone stack text first. Photos span column lines (half the wrap), one ratio per row (4:3, 3:2, 1:1, 4:5), never taller than ~700px outside a band.
6. **Full-bleed photo bands** — a `media band` (full-width photo layer with dark forest/obsidian gradient scrim + white serif statement, like home's `CampusTourBanner`) is the strongest device; at most one per page, never directly after the PageHeader.
7. **Short pages** (portal ~2.6 screens, search ~2, contact ~2.8) — merge short blocks; a sub-495px block merges into the section above; give one strong moment instead of scattered stubs.
8. **Hover/press** — every linked card lifts 2px with brand-tinted border; photos inside linked cards zoom 1.02–1.03; buttons press (`active:scale-[0.985]`); underlines draw on text links. No tilt, no scroll-jacking, respect `prefers-reduced-motion` (already global in globals.css).

## Per-page prescriptions

- **/about** — keep PageHeader + content. Add: a full-width photo band (charbagh campus aerial, forest scrim, white serif statement about the university's founding) after the intro; photo-led editorial split for vision/mission (admin-block.jpg right); campuses grid: keep forest Charbagh lead tile, make Women Campus + Sangota tiles photo-led (women-campus.jpg exists); values stay light-strengthened.
- **/research** — photo band with `18_ORIC.jpeg` or `17_HEDRankingsAnnounced.jpeg` under a research statement; Gandhara heritage split with a real excavation/department photo; keep forest ORIC pillar + ASRB cards; ORIC/ASRB become two distinct photo-topped directory rows.
- **/leadership + /leadership/vice-chancellor** — people-row with real portraits (`vc-prof-dr-husnul-amin.jpeg`, `registrar-dr-arshad-ali.jpeg`; officers without portraits get crest-monogram tiles, never invented faces); forest quote block stays; VC page: fix the **hydration error** first (likely invalid HTML nesting or window/document access during render — check for `<div>` inside `<p>`, Date.now/random in render, or duplicate ids), then photo-led office split (`vc-office_1_img.jpg`).
- **/portal** — merge the grid into one strong panel: forest login/quick-links panel left (crimson helpdesk card stays crimson, keep exactly one), photo of exam-block/admin-block right; short page, keep it tight — no padding out.
- **/contact** — photo split: main campus gate (`19_University_Main_Gate.jpeg` or `main-campus-gate.jpeg`) right of the directory; crimson Telephone card stays; merge sparse rows; directory table keep as ruled rows (skill: a list may close each row with a 1px rule).
- **/news** — featured pair (forest) stays; archive becomes editorial index: photo-topped rows (real `news-*.jpeg` photos already map to articles) instead of identical cards — list rows with thumbnail left, meta right, hairline rules.
- **/events** — next-event feature (forest, full-width with photo if the event has one) + the rest as a ruled calendar list (date block left, details right) instead of six identical stacked cards.
- **/faculty** — keep the 4-stat forest bar and directory; add faculty-group anchor nav (sticky within page is banned by skill — use a simple anchor pill row under PageHeader); department cards keep `first:` forest lead per group; calm the back third: last group as ruled rows.
- **/affiliated-colleges** — colleges as photo-topped directory rows or paired cards using real college/campus photos where they exist; keep light with ONE forest lead card.
- **/search** — editorial search page: large serif-led search field on alabaster, results as ruled rows, quick-links chips to top destinations; strengthen empty state (no stub cards).
- **/alumni** — photo band (graduation/campus photos from `campus/` — e.g. `9_34ty.jpg`, `11_uswat1.jpg` if graduation-appropriate) with the outcomes story; keep forest cohort card + metric counters; testimonials as one featured quote + ruled list.
- **/not-found** — proper editorial 404: forest band page (no PageHeader), oversized serif "404"/statement, crest medallion, 3 real quick links (Home, Programs, Contact), search hint. One screen, no scroll.

## Preservation rules (hard)

- Keep every route, link, href, form behaviour, data import (`src/data/*`), metadata export, aria attribute, and keyboard path.
- Never invent facts, programs, people, dates, or quotes. Real photos only from `public/`.
- No emoji icons; icons stay Hugeicons/lucide as the file already uses.
- Alt text on every meaningful image; decorative images `alt=""` + `aria-hidden`.
- Touch targets ≥44px; text contrast: `stone-500` floor on light, `white/60` floor on dark, `#E5CD9B` for small gold on crimson.

## Verification loop (per page)

```bash
node .claude/skills/design-taste-frontend/scripts/shoot.mjs --url http://localhost:3000/<route> --w 1440 --out shots/<route>/1440.png --profile .taste-skill/chrome-verify
node .claude/skills/design-taste-frontend/scripts/shoot.mjs --url http://localhost:3000/<route> --w 390  --out shots/<route>/390.png  --profile .taste-skill/chrome-verify
```
Read both PNGs, compare against `shots/audit/home-1440.png` language; fix regressions; also run `consistency.mjs --quick --widths 1440,390` where practical. Dev server runs at http://localhost:3000 (shared with the user's other session — do not kill it).
