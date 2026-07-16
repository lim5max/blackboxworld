# Localization, Design Subscription, and Team Verification

Verified on 16 July 2026 against the production build in the `feat/localized-design-subscription` worktree.

## Automated checks

Commands:

```bash
npm test
npm run lint
npx tsc --noEmit
npm run build
git diff --check
```

Results:

- Vitest: 4 files, 22 tests passed, 0 failed.
- ESLint: exit 0, no errors or warnings.
- TypeScript: exit 0.
- Next.js production build: exit 0.
- Static routes generated for `/en`, `/ru`, both About pages, and both versions of Terms, Privacy, and Refund pages.
- `/api/locale` remained a dynamic route and `src/proxy.ts` was detected by the build.
- Whitespace validation: exit 0.

## Redirect checks

```bash
curl -sSI -H 'x-vercel-ip-country: RU' http://localhost:3000/
curl -sSI -H 'x-vercel-ip-country: DE' http://localhost:3000/
curl -sSI -H 'Cookie: bbworld-locale=en' -H 'x-vercel-ip-country: RU' http://localhost:3000/about
```

Observed:

- RU geo header: `307`, location `/ru`.
- DE geo header: `307`, location `/en`.
- Saved EN choice plus RU geo header: `307`, location `/en/about`.
- `/ru` rendered `<html lang="ru">`, Russian design copy, and `79 000 ₽`.
- `/en` rendered `<html lang="en">`, English design copy, and `$950`.

## Browser checks

The production server was exercised in the in-app browser.

- Manual EN selection changed `/ru` to `/en`; the HTML language and localized metadata changed with it.
- Manual EN selection from `/ru/about?ref=qa` produced `/en/about?ref=qa`, preserving the nested path and query string.
- The Design subscription tab was selected by default and displayed `79 000 ₽`, `329 000 ₽`, and `549 000 ₽` in Russian.
- Selecting Product development changed the panel to the Sprint and MVP plans with `$4,500` and `$9,500` prices.
- At 390×844, document width and viewport width were both 390 px; no horizontal overflow was present.
- At 390×844, the team section rendered four cards in two 169 px columns and the navbar remained within the viewport.
- At 1440×900, document width and viewport width were both 1440 px; the team section rendered four 285 px columns.
- Four local generated portraits loaded in the team grid with consistent 4:5 crops.
- Browser console check returned no errors or warnings.

## Asset checks

All final portraits are local 900×1125 WebP files:

- `public/images/team/product-strategy.webp` — 60 KB
- `public/images/team/product-design.webp` — 56 KB
- `public/images/team/ai-engineering.webp` — 68 KB
- `public/images/team/brand-growth.webp` — 52 KB

## Known limits

- Geo behavior was verified using the same `x-vercel-ip-country` header the production proxy consumes. The actual deployment platform is not part of this local verification.
- The repository currently reports five dependency audit findings from the pre-existing dependency tree: one low, three moderate, and one high. No force-upgrade was applied because dependency remediation is outside this feature scope.
