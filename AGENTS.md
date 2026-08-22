# Repository Guide

## Direction

- This portfolio is actively being migrated toward the implementation plan below. Treat the plan as the project objective, not the current scaffold as the design authority; when they conflict, implement the planned target incrementally.
- It is a single-package React 19 + Vite SPA using TanStack Router file-based routing, Tailwind CSS v4, Radix/shadcn-style UI, Lucide, LinguiJS, and self-hosted variable fonts.
- The visual target is a restrained editorial portfolio: Witcher gold and bioluminescent green accents, OKLCH design tokens, Space Grotesk/Instrument Sans/JetBrains Mono typography, responsive layouts, subtle motion, and no heavy decorative effects or shadows.

## Commands

- Use `pnpm` and keep `pnpm-lock.yaml` authoritative; install with `pnpm install`.
- Run the dev server on port 3000 with `pnpm dev`.
- Validate in order with `pnpm check`, then `pnpm lint`, then `pnpm build`. `check` runs `tsc -b`; `build` runs it again before `vite build`.
- Use `pnpm format` for Biome formatting; it writes changes across the repository. There is no configured test suite, so focused typecheck/lint/build verification is the available automated check.
- The target workflow includes `pnpm i18n:extract` after changing `<Trans>`/Lingui messages or catalog source text.

## Target Architecture

- `src/main.tsx` is the browser entrypoint. Move routing from the current hand-built tree in `src/router.tsx` toward generated file-based routes under `src/routes/`, with `__root.tsx`, locale layouts, localized 404, and code-split route chunks.
- Target routes are `/` (language-aware redirect), `/:locale`, `/:locale/sobre`, and `/:locale/projetos`; only `pt-br` and `en` are valid locale values, with invalid values going to a localized 404.
- Load Lingui catalogs dynamically when the locale changes so each locale is a separate chunk. UI chrome uses Lingui `<Trans>`/macros and `.po` catalogs; portfolio content is not catalog text.
- Keep projects, experience, and education as typed locale-aware data files under `src/lib/data/` (`projects.ts`, `experience.ts`, `education.ts`), rather than one monolithic data file or translated catalog entries.
- Shared layout/components belong under `src/components/`; page components belong with their routes. Keep `src/lib/site.ts` as the source for name, email, social URLs, and handle.

## Theme And UI

- `src/styles.css` is the source for Tailwind v4 `@theme`, custom dark variant, OKLCH tokens, fonts, global reduced-motion rules, and View Transitions CSS. Do not introduce a separate Tailwind config unless the migration requires it.
- Theme state is centralized in `ThemeProvider`/`useTheme`: system preference is the default, `localStorage` persists the choice, `.dark` is applied to `<html>`, and `index.html` contains the anti-FOUC inline script.
- The Magic UI `AnimatedThemeToggler` is copied into `src/components/ui/`, used in controlled mode with `useTheme`, and remains repository-owned. Preserve its native fallback and add a `prefers-reduced-motion` guard before `startViewTransition`.
- Use the `@/*` alias for `src` imports. Follow the existing shadcn aliases in `components.json`; add only the UI primitives needed by the plan.

## Implementation Priorities

- Complete the migration in order: scaffold/tooling, design tokens/theme, file-based routing/i18n/shell, landing, about/timelines, projects/cards, motion/accessibility, then SEO/build/deploy preparation.
- Keep responsive behavior and accessibility part of each phase: semantic landmarks and heading hierarchy, keyboard-visible focus rings, icon-link labels, reactive `html[lang]`, reduced-motion handling, and no horizontal/vertical overflow at supported breakpoints.
- SEO is client-side: update title, description, canonical, Open Graph/Twitter metadata, locale alternates, and static `hreflang`; final deploys need an SPA rewrite from `/*` to `/index.html`.
- Public deployment assets belong in `public/` (favicon, placeholder `og-image.png`, `robots.txt`, and static sitemap). Document the rewrite setup and content editing workflow in `README.md`.

## Verification

- There are no tests or CI workflows configured. Do not claim a feature is complete without running the relevant `pnpm check`, `pnpm lint`, and `pnpm build` commands, plus manual responsive/locale/theme checks for UI changes.
- TypeScript is strict about unused locals/parameters, emits no files, and uses `erasableSyntaxOnly`; formatting is Biome (2 spaces, single quotes in JS/TS, double quotes in JSX, no semicolons, trailing commas), and linting is Oxlint over `src`.
