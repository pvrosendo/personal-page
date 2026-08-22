# ADR 0003: Production Audit and Static Discovery

- Status: accepted
- Date: 2026-08-22

## Context

The Lighthouse report was run against `http://localhost:3000/en` using the Vite development server. Its poor FCP/LCP and large JavaScript payload included HMR, development builds, and browser extensions, so those numbers cannot be used as production performance results. The report also exposed a real dark-mode contrast failure and showed that `/robots.txt` and `/llms.txt` were falling through to the SPA HTML document.

## Decisions

- The landing surname uses a stronger muted foreground opacity in both themes so large display text remains distinguishable in dark mode.
- The primary Witcher CTA uses an explicit dark foreground color to preserve readable contrast against the gold background.
- `robots.txt` and `llms.txt` are static files in `public/`, allowing Vite and the production host to serve them as files instead of routing them to `index.html`.
- Lighthouse performance audits must use `pnpm build` and `pnpm preview`. Development-server payloads and extension-injected scripts are not application performance evidence.

## Consequences

- The deployed host must preserve static-file serving and must not rewrite `robots.txt` or `llms.txt` to the SPA entrypoint.
- The absolute URLs in `public/llms.txt` must be changed if the final deployment hostname differs from `pvrosendo.is-a.dev`.
- A production Lighthouse run should be repeated with browser extensions disabled before comparing metrics or setting performance targets.
