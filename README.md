# University of Swat — Official Website

Production-ready Next.js project for the University of Swat official website.

## Tech Stack

| Tool | Version |
|---|---|
| Next.js | 16 (App Router) |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| Node.js | 26 |

## Project Structure

```
src/
├── app/                  # App Router — pages, layouts, global CSS
│   ├── layout.tsx        # Root layout (fonts, metadata)
│   ├── globals.css       # Design tokens, base styles
│   └── page.tsx          # Home page (/)
├── components/
│   ├── ui/               # Primitive components (Button, Badge, Card…)
│   └── layout/           # Site-wide layout pieces (Header, Footer, Nav…)
├── config/
│   └── site.ts           # Site metadata, contact info, social links
├── hooks/
│   └── index.ts          # Shared React hooks
├── lib/
│   └── utils.ts          # cn(), formatDate(), truncate()
└── types/
    └── index.ts          # Shared TypeScript types
public/
├── fonts/                # Self-hosted fonts (if needed)
└── images/               # Static images, logos
```

## Getting Started

```bash
npm install       # install dependencies
npm run dev       # start dev server → http://localhost:3000
npm run build     # production build
npm run lint      # lint check
```

## Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#1a4731` | Deep Forest Green — primary actions, headers |
| `--color-accent` | `#c9a84c` | University Gold — highlights, CTAs |
| `--color-background` | `#ffffff` | Page background |
| `--color-surface` | `#f8f9fa` | Cards, sections |

## Font Stack

- **Inter** (sans-serif) — UI text, body copy
- **Merriweather** (serif) — headings, academic content
