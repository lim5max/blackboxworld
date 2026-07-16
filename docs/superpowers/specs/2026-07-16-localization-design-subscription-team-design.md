# BlackBoxWorld Localization, Design Subscription, and Team Design

## Goal

Add a complete Russian and English experience to the existing BlackBoxWorld marketing site, introduce a commercially sustainable design-subscription offer without removing the current product-development packages, and add a premium team presentation using generated studio portraits.

## Product decisions

- English and Russian are first-class locales.
- Public URLs use locale prefixes: `/en` and `/ru`.
- First-time visitors are redirected from unprefixed URLs using, in priority order: a saved locale cookie, deployment geo headers, the browser `Accept-Language` header, and English as the final fallback.
- A manual RU/EN switch is always available. A manual choice writes the locale cookie and overrides future geo detection.
- Russian prices are fixed in rubles and English prices are fixed in US dollars. They are market prices, not live currency conversions.
- Existing product-development pricing remains available.
- Design subscription is presented as a separate pricing mode with a low-risk paid trial.
- Generated people are not assigned fabricated names or biographies. Cards describe delivery roles instead.

## Information architecture

### Localized routes

- `/en`, `/ru`
- `/en/about`, `/ru/about`
- `/en/terms`, `/ru/terms`
- `/en/privacy`, `/ru/privacy`
- `/en/refund`, `/ru/refund`

Requests to the current unprefixed routes redirect to the best locale. Existing links are made locale-aware so navigation never unexpectedly changes language.

### Home page

The existing section order stays intact. The pricing surface gains a two-option selector:

1. Design subscription
2. Product development

Design subscription is selected by default because it is the new offer. Product development contains the current Sprint and MVP packages.

### About page

The founder story remains. A new team section follows it with four role cards:

- Product & Strategy
- Product Design
- AI Engineering
- Brand & Growth

Each card uses a generated, high-end studio portrait with varied gender presentation. Names and personal claims are intentionally omitted until real team data is supplied.

## Localization architecture

Localized content lives in typed dictionaries rather than being duplicated across page components. Components receive or read one complete dictionary for the active locale. Navigation helpers preserve the active locale when linking to another page or anchor.

A request proxy handles only locale selection and redirects. It does not translate content. Selection precedence is:

1. Explicit locale already present in the URL
2. Saved `bbworld-locale` cookie
3. `x-vercel-ip-country` or compatible country header (`RU` selects Russian)
4. `Accept-Language` beginning with Russian
5. English

The language switch writes the cookie and navigates to the equivalent path in the other locale. Query parameters are preserved. Unknown paths keep their relative suffix under the selected locale.

The root HTML `lang` attribute and localized metadata must match the active locale. There must be no client-only language flash.

## Design subscription offer

### Test Drive

- Price: `79,000 ₽` / `$950`
- One-time, 3–5 business days
- Choice of one landing-page section or 3–5 marketing creatives
- One revision round
- 50% of the trial price is credited toward the first subscription month if the client subscribes within 14 days

### Design Partner

- Price: `329,000 ₽ / month` / `$3,900 / month`
- One active request at a time
- Landing pages, product UI, presentations, brand and marketing assets
- Typical request turnaround: 2–4 business days
- Async collaboration and a weekly review
- Pause or cancel monthly

### Design + Growth

- Price: `549,000 ₽ / month` / `$6,500 / month`
- Two active requests at a time
- Everything in Design Partner
- Ongoing campaign creatives, social assets, pitch and sales collateral
- Priority queue and twice-weekly review
- Pause or cancel monthly

## Unit economics

The following is an internal planning model, not public page copy. It assumes a blended senior production rate of `$22/hour`, design-lead review at `$40/hour`, PM at `$22/hour`, payment fees near 3%, and plan-specific tooling costs.

| Offer | Revenue | Modeled delivery cost | Contribution | Contribution margin |
|---|---:|---:|---:|---:|
| Test Drive | $950 | $525 | $425 | 44.7% |
| Design Partner | $3,900 | $1,713 | $2,187 | 56.1% |
| Design + Growth | $6,500 | $2,871 | $3,629 | 55.8% |

The subscription tiers target a 55% contribution margin. The trial runs at a lower margin because it is an acquisition product. Capacity limits are enforced through active-request count and clear turnaround expectations rather than public hourly quotas.

## Visual direction

The new UI stays inside the current restrained BlackBoxWorld system: white space, soft gray cards, black pill controls, large tight headlines, and the existing magenta-to-violet accent.

The pricing selector is a compact segmented pill. Design subscription uses one smaller trial card followed by two stronger monthly cards. The recommended Design Partner plan receives a subtle gradient edge or label, not a loud redesign.

Team portraits use premium editorial studio photography: soft high-key lighting, warm-neutral gray background, simple contemporary clothing, calm direct expressions, and consistent waist-up framing. No logos, text, props, exaggerated beauty retouching, or celebrity resemblance.

## Error handling and fallbacks

- Missing or malformed geo headers fall back to `Accept-Language` and then English.
- An unsupported locale prefix resolves through the localized not-found behavior rather than silently rendering the wrong language.
- If the locale cookie is invalid, it is ignored.
- Portrait files are stored locally under `public/images/team`; the page does not depend on remote image URLs.
- If JavaScript is disabled, localized links and server-rendered content still work. Only the cookie-writing convenience of the switch is reduced.

## Verification

- Unit tests cover locale detection priority, cookie validation, and path switching.
- Build and lint must pass.
- Requests with RU and non-RU geo headers are checked against the redirect behavior.
- Manual switching is checked in both directions and across nested pages.
- Desktop and mobile screenshots verify the navbar, pricing selector/cards, team grid, text wrapping, and absence of horizontal overflow.
- Both locale trees are reviewed for untranslated visible copy and correct metadata/HTML language.

## Out of scope

- Live exchange-rate conversion
- Checkout or recurring billing integration
- CMS integration
- Fabricated employee names, employment histories, or customer claims
- Additional locales beyond Russian and English
