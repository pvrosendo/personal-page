# ADR 0001: Viewport Shell and Theme Toggle

- Status: accepted
- Date: 2026-08-21

## Context

The first visual pass allowed the landing route to overflow vertically because its viewport-based minimum height was combined with a fixed header and a footer in the normal flow. Header and footer also applied the content max-width to their visible surfaces, making the site appear confined to the center. On small screens, the portrait placeholder competed with the primary content. The theme toggler raised `Illegal invocation` because `Document.startViewTransition` was called after being detached from its `document` receiver.

## Decisions

- The application shell spans the viewport width; max-width containers are reserved for editorial content alignment.
- The landing route uses the available space between header and footer and does not intentionally scroll. About and Projects remain normal scrollable pages.
- The portrait placeholder is hidden below the `md` breakpoint. Mobile landing content is centered while the header and footer remain visible.
- Supporting text uses a minimum readable scale of `12px`; meaningful descriptions use at least the body text scale.
- The primary CTA keeps the Witcher accent with an explicit dark `cta-foreground` token instead of white text.
- `startViewTransition` is invoked as a method of `document`, with an immediate fallback for unsupported browsers and reduced-motion users.

## Consequences

- Viewport sizing must be tested with short and narrow screens, not only standard desktop dimensions.
- Full-width shell surfaces and constrained editorial content now have separate responsibilities.
- The theme provider remains the source of truth; the animated toggler only coordinates the transition and requested theme change.
