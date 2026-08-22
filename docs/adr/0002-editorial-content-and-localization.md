# ADR 0002: Editorial Content and Localization

- Status: accepted
- Date: 2026-08-22

## Context

The portfolio content initially used generic placeholder copy and LinkedIn-like experience bullets. The site has two locales, but dates and some About labels were hardcoded in Portuguese. The intended experience is an editorial portfolio: concise writing should communicate scope and impact without reproducing a resume layout.

## Decisions

- UI chrome is localized through `src/lib/i18n.ts`; language-specific portfolio content stays in typed data under `src/lib/data.ts` and is selected by the active locale.
- Experience descriptions are concise paragraphs, not bullet lists. They summarize the technical scope, systems, technologies, and impact of each role.
- The About timeline groups repeated roles under one company marker. Each role is separated visually without repeating the company, and the experience metadata shows only the timestamp.
- All user-facing dates and labels that vary by language require localized values. Company names and technology names remain unchanged unless they have an established translated form.
- The landing copy emphasizes web software development, curiosity, and persistence. The About introduction connects software engineering, critical systems, robotics, and leadership without duplicating the full timeline.
- Projects are presented as a numbered editorial index rather than image cards. Each row shows the title, concise description, stack, and icon-only external links; `status` remains in the data model but is not displayed, while `featured` is omitted because all current projects were marked featured and did not create a meaningful distinction.

## Consequences

- Data entries may use localized strings even when the underlying value is not a Lingui UI message.
- New experience or education content must provide equivalent Portuguese and English copy before it is considered complete.
- Visual review must check writing density and hierarchy together with responsive layout; content that is technically accurate can still violate the editorial goal if it reads like a resume export.
