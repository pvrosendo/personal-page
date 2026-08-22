# Glossary

- **Application shell**: The full-viewport layout containing the global header, route main content, and footer.
- **Editorial container**: A max-width content region used to keep reading measure and composition controlled inside the full-width shell.
- **Landing viewport**: The space available to the landing route between the header and footer; it is designed not to scroll.
- **Witcher accent**: The gold visual token used for primary actions, active links, timeline markers, and interaction emphasis.
- **Biolum accent**: The green visual token reserved for secondary highlights such as blog badges and language-link hover states.
- **Controlled theme toggler**: The UI trigger that receives `theme` and `onThemeChange` from `ThemeProvider`; persistence and the canonical theme state stay outside the trigger.
- **Editorial content**: Portfolio-specific writing kept in typed data files, distinct from translatable UI chrome.
- **Localized value**: A data value with an equivalent entry for every supported locale, such as a date, role, description, or label.
- **Company timeline group**: A single timeline marker for one employer or organization containing its roles in chronological sequence.
- **Production-like audit**: A Lighthouse run against the built application served by `pnpm preview`, without Vite development tooling or browser extensions affecting the result.
- **Static discovery files**: Root-served `robots.txt` and `llms.txt` files in `public/` that must not be handled by the SPA fallback.
- **Favicon set**: The small browser, iOS, and manifest icons served from `public/` using semantic filenames instead of generator-specific names.
- **SPA fallback (Vercel rewrite)**: The `vercel.json` rewrite rule that directs all unmatched paths to `/index.html`, enabling TanStack Router client-side navigation and supporting direct URL access and page refresh on locale routes.
- **Vercel Web Analytics**: Vercel's route-level traffic measurement integrated through the root application layout.