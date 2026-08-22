# ADR 0004: Vercel Web Analytics

- Status: accepted
- Date: 2026-08-22

## Context

The portfolio is a Vite SPA deployed through Vercel. It needs privacy-conscious, first-party traffic and page-view measurement without adding custom tracking code to individual routes.

## Decision

- Use `@vercel/analytics` and render its `Analytics` component in the TanStack Router root layout so every route is covered.
- Keep analytics integration outside page components; route tracking belongs to the application shell.
- The Vercel project must be deployed and analytics must be enabled in its dashboard before data can be verified.

## Consequences

- The package adds a small client-side analytics script to the production bundle.
- Local development and Lighthouse runs do not prove that dashboard data is being collected.
- Deployment verification requires authenticated Vercel CLI access and a real production visit after deployment.
