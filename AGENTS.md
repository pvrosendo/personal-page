# Repository Guide

## Project

Single-package React 19 + Vite SPA. Bilingual (pt-BR / en) personal portfolio using TanStack Router, Tailwind CSS v4, Radix/shadcn-style UI, Lucide, LinguiJS, and self-hosted variable fonts. Deployed to Vercel.

## Commands

- Use `pnpm`. Keep `pnpm-lock.yaml` authoritative; install with `pnpm install`.
- Dev server runs on port 3000: `pnpm dev`.
- Validate in order: `pnpm check` (tsc -b) → `pnpm lint` (oxlint src) → `pnpm build` (tsc -b + vite build).
- Format with `pnpm format` (Biome, writes in place).
- Lighthouse audits must use `pnpm build && pnpm preview` — never the dev server.
- No test suite is configured.

## Repository Layout

```
personal-page/
├── public/                  # Static assets served at root
│   ├── favicon.ico / favicon-*.png / apple-touch-icon.png / icon-*.png
│   ├── site.webmanifest
│   ├── robots.txt
│   └── llms.txt
├── src/
│   ├── main.tsx             # Browser entrypoint
│   ├── router.tsx           # TanStack Router tree + RootLayout + Analytics
│   ├── styles.css           # Tailwind v4 @theme, OKLCH tokens, dark variant, View Transitions
│   ├── assets/              # Vite-imported static resources
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx   # Global nav, locale and theme switchers
│   │   │   └── footer.tsx
│   │   └── ui/
│   │       ├── animated-theme-toggler.tsx  # Local copy of Magic UI (controlled mode)
│   │       ├── badge.tsx
│   │       └── button.tsx
│   ├── hooks/
│   │   └── use-theme.tsx    # ThemeProvider + useTheme
│   ├── lib/
│   │   ├── data.ts          # Profile, experiences, education, projects (locale-aware)
│   │   ├── i18n.ts          # LinguiJS bootstrap, static copy object, localizedPaths, helpers
│   │   ├── site.ts          # Canonical name, email, social URLs
│   │   └── utils.ts         # cn() (clsx + tailwind-merge)
│   └── pages/
│       ├── landing.tsx      # /:locale
│       ├── about.tsx        # /:locale/sobre and /:locale/about
│       └── projects.tsx     # /:locale/projetos and /:locale/projects
├── docs/
│   ├── adr/                 # Architectural Decision Records (ADR 0001–0004)
│   └── glossary.md
├── index.html               # HTML entrypoint + anti-FOUC inline script
├── vercel.json              # SPA rewrite: /* → /index.html
├── lingui.config.ts         # LinguiJS config (catalogs not yet wired)
├── biome.json
├── .oxlintrc.json
└── vite.config.ts
```

## Routing

Routes are registered as a hand-built tree in `src/router.tsx`. No file-based routing under `src/routes/` exists.

| Path | Component |
|---|---|
| `/` | Locale redirect via `navigator.language` |
| `/:locale` | `LandingPage` |
| `/:locale/sobre` | `AboutPage` (pt-BR slug) |
| `/:locale/about` | `AboutPage` (en slug) |
| `/:locale/projetos` | `ProjectsPage` (pt-BR slug) |
| `/:locale/projects` | `ProjectsPage` (en slug) |

Valid locale param values: `pt-br`, `en`. Unrecognised paths fall through without a localised 404.

## Localization

- **UI copy**: static `copy` object in `src/lib/i18n.ts`, keyed by locale (`'pt-BR'` / `'en'`). Accessed via `i18n._` after `activateLocale()`.
- **Editorial content**: `src/lib/data.ts` exports typed objects (`profile`, `experiences`, `education`, `projects`) as `Record<Locale, string>`, selected at render time by the active locale.
- **Slug mapping**: `localizedPaths` in `src/lib/i18n.ts` maps canonical page keys (`about`, `projects`) to their per-locale slugs. The header uses this to build nav links.
- LinguiJS is installed and configured in `lingui.config.ts` for a future catalog migration. `.po` catalogs do not exist yet. `pnpm i18n:extract` is not wired in `package.json`.

## Theme

- `ThemeProvider`/`useTheme` in `src/hooks/use-theme.tsx` is the single source of theme state.
- Default: system preference (`prefers-color-scheme`). Persisted in `localStorage`. Applied as `.dark` on `<html>`.
- Anti-FOUC inline script lives in `index.html`.
- `AnimatedThemeToggler` is a repository-owned copy from Magic UI, used in controlled mode. It guards `startViewTransition` with `prefers-reduced-motion`.

## Styling Rules

- `src/styles.css` owns all Tailwind v4 `@theme` tokens, the custom `.dark` variant, OKLCH colour tokens, font declarations, global reduced-motion rules, and View Transitions CSS. Do not add a separate Tailwind config.
- Use the `@/*` alias for all `src/` imports. Follow the existing shadcn aliases in `components.json`.
- OKLCH tokens use the `witcher` (gold) and `biolum` (green) accent vocabulary. Shadows and heavy decorative effects are not part of the design.

## Code Quality

- TypeScript: strict, `erasableSyntaxOnly`, no emit, unused locals/parameters are errors.
- Formatting: Biome — 2 spaces, single quotes in JS/TS, double quotes in JSX, no semicolons, trailing commas.
- Linting: Oxlint over `src/`.
- Verification order: `pnpm check` → `pnpm lint` → `pnpm build`. Do not claim a change is complete without passing all three.

## Documentation Rules

- Every architectural, UX, visual, content-model, or localization decision must be recorded in `docs/adr/` in the same commit. Update an existing ADR when a decision evolves — do not create redundant files.
- Add or update terms in `docs/glossary.md` when a change introduces project-specific vocabulary.
- Keep `README.md` in sync with the actual file layout, routes, and stack whenever they change.
- Documentation is part of the implementation, not an optional follow-up.

## Deploy

`vercel.json` rewrites all unmatched paths to `/index.html` so TanStack Router handles navigation client-side. Direct URL access and page refresh on locale routes work without a 404. The absolute URLs in `public/llms.txt` must be updated if the deployment hostname changes.
