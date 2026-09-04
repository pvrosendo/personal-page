# Portfolio

Personal portfolio with a restrained editorial identity.

## About

A bilingual (pt-BR / en) personal portfolio built as a single-page application. The visual identity draws from two pillars: a The Witcher-inspired gold accent for primary actions and a bioluminescent green for secondary highlights — both expressed through OKLCH tokens over a dark-by-default shell.

## Stack

| Technology | Role |
|---|---|
| React 19 | UI |
| TanStack Router | Client-side routing |
| Tailwind CSS v4 | Utility-first styling |
| LinguiJS | Internationalization (i18n) |
| Vite | Build tool |
| Vercel Analytics | Route-level traffic |
| Biome | Formatter |
| Oxlint | Linter |
| TypeScript | Static typing |
| Lucide React | Icons |
| Radix UI | Accessible primitives |

## Project Structure

```
src/
├── main.tsx                    # Browser entrypoint
├── router.tsx                  # TanStack Router tree + root layout
├── styles.css                  # Tailwind @theme, OKLCH tokens, View Transitions
├── components/
│   ├── layout/
│   │   ├── header.tsx          # Global nav, locale/theme switchers
│   │   └── footer.tsx
│   └── ui/
│       ├── animated-theme-toggler.tsx
│       ├── badge.tsx
│       └── button.tsx
├── hooks/
│   └── use-theme.tsx           # ThemeProvider + useTheme
├── lib/
│   ├── data.ts                 # Profile, experience, education, projects
│   ├── i18n.ts                 # Copy object, localized slugs, locale helpers
│   ├── site.ts                 # Name, email, social URLs
│   └── utils.ts                # cn()
└── pages/
    ├── landing.tsx             # /:locale
    ├── about.tsx               # /:locale/sobre · /:locale/about
    └── projects.tsx            # /:locale/projetos · /:locale/projects
```

## Routes

| Path | Page |
|---|---|
| `/` | Locale redirect (`navigator.language`) |
| `/:locale` | Landing |
| `/:locale/sobre` · `/:locale/about` | About |
| `/:locale/projetos` · `/:locale/projects` | Projects |

## Visual Theme

### Palette

| Token | Value | Usage |
|---|---|---|
| `abyss` | `oklch(14% 0.02 260)` | Primary background |
| `surface` | `oklch(18% 0.02 260)` | Cards and elevated surfaces |
| `witcher` | `oklch(75% 0.15 80)` | Primary accent — gold |
| `biolum` | `oklch(78% 0.14 165)` | Secondary accent — green |
| `muted` | `oklch(55% 0.02 260)` | Secondary text |
| `parchment` | `oklch(92% 0.01 80)` | Primary text |

### Typography

- **Space Grotesk** — display, headings
- **Instrument Sans** — body text
- **JetBrains Mono** — code, technical labels
