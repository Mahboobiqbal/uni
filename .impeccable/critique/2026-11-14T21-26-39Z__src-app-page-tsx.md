---
target: homepage / system
total_score: 30
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 2
target_identity: "file:D:\\projects\\uni\\src\\app\\page.tsx"
target_fingerprint: "sha256:dd0a556e565b98643a3544492785573a154e774a6c5f7dd80606147942777d7e"
target_path: "D:\\projects\\uni\\src\\app\\page.tsx"
timestamp: 2026-11-14T21-26-39Z
slug: src-app-page-tsx
---
# Impeccable Critique — University of Swat Homepage (and system)

Method: dual-agent (A: ses_e240dddf7ffeQcUJbJgMCXb6kJ · B: ses_e240dddf6ffebgyTDj45M4RYJD)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | Feed auto-loop, sliding tab pill, pause state, toast — clearly communicated |
| 2 | Match System / Real World | 3 | "Virtual Campus Tour" leads to a static photo gallery, not a tour |
| 3 | User Control and Freedom | 4 | Escape closes lightbox/dropdowns; pause control; outside-click dismiss |
| 4 | Consistency and Standards | 3 | Dual green dialects (emerald utility vs brand forest), slate vs stone grays; "Faculties" vs "Faculty" naming |
| 5 | Error Prevention | 3 | No destructive paths, but Download/Share simulate success without a real artifact |
| 6 | Recognition Rather Than Recall | 4 | Full mega-menus + labeled sections make deep content findable |
| 7 | Flexibility and Efficiency | 2 | No skip-to-content link, no keyboard short, home stack demands long repetitive scroll |
| 8 | Aesthetic and Minimalist Design | 3 | Strong aesthetic; stars/tilt/magnetism/spotlight/sheen + hero video exceed institutional restraint |
| 9 | Error Recovery | 2 | Download toast is a false success — no PDF materializes; share failure silently swallowed |
| 10 | Help and Documentation | 2 | Jargon-laden metrics (W-Category, NAEAC CGPA, Ecosystem Campus) unexplained |
| **Total** | | **30/40** | **Good** |

## Design Specificity Verdict

Ground in real local facts — Charbagh Campus, Women Campus, Gandharan heritage (real NIIBS MOU photo), 100% solarization, HEC 91.4% W-Category, Malakand #1, THE 301–400, GreenMetric Top 15. Palette (alabaster/obsidian/forest/crimson/gold) and Cormorant + Jakarta pairing are original, institutional.

Three things could transplant onto any institution:
- **P0 factual conflict:** Hero "Leadership" pillar names Prof. Dr. Hassan Sher; the VC section, `/leadership`, and portraiture all feature Prof. Dr. Husnul Amin (appointed Oct 2026).
- Hero pillar copy is stock marketing ("unlock your potential," "transformative journey").
- Stats (200+ papers, 10,130 students) presented without source/context — read as badgeware.

Deterministic scan (Assessment B): 8 detector findings — 2 warnings (side-tab accent border FacultyProgramsGrid:115; gold border-t on rounded hero card HeroSection:168), 5 bounce-easing advisories in MagicBento.css, 1 grid-line background advisory (globals.css:79). 0 console errors, 0 broken images, 0 horizontal overflow in 12 runs. 2 empty-alt decorative imgs (bulletin watermark, VC mini-crest; parents aria-hidden). Focus-visible: 240 samples, 0 missing affordances. One client-side media abort on /1114.mp4 (file serves 200 — not a missing asset).

## Overall Impression

A genuinely grounded, well-crafted system with two credibility hazards (wrong VC name on the most public surface; a Download button that never downloads) and a motion budget that outshouts its own restraint rule. The VC section is the emotional peak; the hero claims are the weakest specificity.

## What's Working

1. One real system: split headers, 1360px grid, PageHeader — /programs, /about, home feel like one institution.
2. Above-average accessibility groundwork: focus-visible everywhere, reduced-motion honored, aria-pressed, inert feed copy, Escape handling, zero console errors.
3. Authentic local artifacts: crest, campuses, Gandhara MOU, solarization.

## Priority Issues

- [P0] Hero credits the wrong Vice Chancellor (Hassan Sher vs Husnul Amin). Fix: update pillar II to Prof. Dr. Husnul Amin; audit Hassan Sher references incl. ProfileCard default. Command: harden
- [P1] "Download Notice (PDF)" is a phantom action — toast only, no file. Fix: real pdfUrl per notice or link to downloads page; else remove button. Command: harden
- [P1] "Virtual Campus Tour" overpromises (routes to static gallery). Fix: rename "Explore Campus Life" or build a real tour. Command: clarify
- [P2] Motion budget is a showroom: tilt/magnetism/stars/spotlight/click-wave + sheen sweeps + video exceed restraint; three rAF loops on one page. Fix: one sign of life per section. Command: quieter
- [P2] Micro-type (11px caps) and unexplained metrics on first/last screens. Fix: stat type ≥13px; one-line glossary or benchmark-credentials link. Commands: typeset + distill

## Persona Red Flags

- Alex: no skip link; all "Explore programs" cards → same /programs; no fast path to fees/merit.
- Jordan: "Virtual Campus Tour" bait-and-switch; three claim blocks before a choice; W-Category unexplained.
- Sam: 40×40 pause button (<44px); 11px type; lightbox lacks focus trap; auto-scrolling feed can desync screen readers.
- Riley: line-clamp-2 truncates notice headlines; opaque video asset naming; leader stat diverges from data.
- Casey: hero stacks into a ~1200px wall of three crimson cards; 8-category bulletin rail scrolls off-screen; hero cards bleed into VC padding.

## Minor Observations

- 5 faculty families on home vs "4 faculties & 28 departments" in nav/AGENTS.
- "Ph.D Scholar" badge phrasing.
- Active tab pill uses emerald vs brand forest — two greens.
- #1 appears twice with different referents.
- Ranking chart has three colored bands with no legend.

## Questions to Consider

1. Should an institutional homepage sell or orient? This one tries both and the claims win.
2. Why is the HEC 91.4% crown jewel not linked to its source?
3. Why is the VC emotional peak buried 1.5 scrolls down?
4. Why does the most useful object (notice reader) read like a finance dashboard?
5. Why do authentic differentiators (Women Campus, Gandhara) get one tile each while generic Quality/Leadership/Experience get a full hero third?

## Run Notes

Target slug: src-app-page-tsx. Ignore list: none. Assessment independence: isolated dual-agent. CLI detector: ran, 8 findings (exit 1 anomaly). Browser: headless Chromium, 6 routes × 2 widths, 12 runs. Overlay injection: not applied (desktop browser disconnected in B; headless used). Live server: dev server on :3000 used, left running. Output cleanup: temp body deleted after write.
