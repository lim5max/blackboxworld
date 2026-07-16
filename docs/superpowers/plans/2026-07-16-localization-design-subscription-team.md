# BlackBoxWorld Localization, Design Subscription, and Team Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship locale-prefixed Russian and English versions of the whole marketing site, add geo/cookie language selection and a design-subscription pricing mode, and add a generated premium team portrait grid.

**Architecture:** Move the App Router root under `app/[locale]`, keep locale detection as pure helpers used by `src/proxy.ts`, and pass typed locale dictionaries into existing presentation components. Keep the current page design, adding one client-side pricing selector and one client-side language switch; legal documents remain server-rendered and are selected by locale.

**Tech Stack:** Next.js 16.2.6 App Router, React 19.2.4, TypeScript 5, Tailwind CSS 4, Vitest, Next.js proxy test utilities, built-in image generation.

## Global Constraints

- Supported locales are exactly `en` and `ru`.
- Public URLs use `/en` and `/ru` prefixes.
- Locale priority is URL, valid `bbworld-locale` cookie, `x-vercel-ip-country`, Russian `Accept-Language`, then English.
- Only country code `RU` selects Russian from geo headers; all other countries select English.
- Manual language selection overrides geo detection by writing the locale cookie.
- Prices are fixed market prices, not live conversions.
- Existing product-development plans remain available.
- Do not invent names, biographies, or employment claims for generated team portraits.
- Store final generated portraits under `public/images/team`.
- Follow local Next.js 16 documentation; use `src/proxy.ts`, not deprecated middleware.

---

### Task 1: Locale routing primitives and proxy

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `src/lib/i18n/config.ts`
- Create: `src/lib/i18n/config.test.ts`
- Create: `src/proxy.ts`
- Create: `src/proxy.test.ts`

**Interfaces:**
- Produces: `Locale = "en" | "ru"`
- Produces: `isLocale(value: string | undefined): value is Locale`
- Produces: `detectLocale(input: { cookie?: string; country?: string; acceptLanguage?: string }): Locale`
- Produces: `replaceLocale(pathname: string, locale: Locale): string`
- Produces: `proxy(request: NextRequest): NextResponse | undefined`

- [ ] **Step 1: Install Vitest and add the test script**

Run: `npm install --save-dev vitest`

Add to `package.json` scripts:

```json
"test": "vitest run"
```

- [ ] **Step 2: Write failing locale helper tests**

Create `src/lib/i18n/config.test.ts` with exact cases for valid cookie precedence, RU geo, non-RU geo, Russian browser fallback, English fallback, invalid cookie handling, and both locale-path replacement directions:

```ts
import { describe, expect, it } from "vitest";
import { detectLocale, replaceLocale } from "./config";

describe("detectLocale", () => {
  it("prefers a valid saved locale", () => expect(detectLocale({ cookie: "en", country: "RU" })).toBe("en"));
  it("selects Russian for RU geo", () => expect(detectLocale({ country: "ru" })).toBe("ru"));
  it("selects English for non-RU geo", () => expect(detectLocale({ country: "DE", acceptLanguage: "ru-RU" })).toBe("en"));
  it("uses Russian browser language when geo is absent", () => expect(detectLocale({ acceptLanguage: "ru-RU,ru;q=0.9,en;q=0.8" })).toBe("ru"));
  it("ignores invalid cookies", () => expect(detectLocale({ cookie: "de", country: "RU" })).toBe("ru"));
  it("falls back to English", () => expect(detectLocale({})).toBe("en"));
});

describe("replaceLocale", () => {
  it("switches a nested localized path", () => expect(replaceLocale("/en/about", "ru")).toBe("/ru/about"));
  it("prefixes an unlocalized path", () => expect(replaceLocale("/privacy", "en")).toBe("/en/privacy"));
  it("handles the locale root", () => expect(replaceLocale("/ru", "en")).toBe("/en"));
});
```

- [ ] **Step 3: Run the helper tests and verify the red state**

Run: `npm test -- src/lib/i18n/config.test.ts`

Expected: FAIL because `./config` does not exist.

- [ ] **Step 4: Implement the locale helpers**

Create `src/lib/i18n/config.ts` with constants `LOCALES`, `DEFAULT_LOCALE`, `LOCALE_COOKIE`, strict validation, RU-only geo selection, browser fallback only when country is absent, and locale-safe path replacement. Preserve query strings outside this helper in the switch component.

- [ ] **Step 5: Run the helper tests and verify green**

Run: `npm test -- src/lib/i18n/config.test.ts`

Expected: 9 tests pass.

- [ ] **Step 6: Write failing proxy tests**

Create `src/proxy.test.ts` using `NextRequest` and `getRedirectUrl` from `next/experimental/testing/server`. Assert:

```ts
expect(getRedirectUrl(await proxy(new NextRequest("https://blackboxworld.com/", {
  headers: { "x-vercel-ip-country": "RU" },
})))).toBe("https://blackboxworld.com/ru");
```

Also assert cookie override, `/about` suffix preservation, query preservation, and `undefined` for `/en/about`, `/ru`, `/_next/static/a.js`, and `/images/a.png`.

- [ ] **Step 7: Run proxy tests and verify the red state**

Run: `npm test -- src/proxy.test.ts`

Expected: FAIL because `src/proxy.ts` does not exist.

- [ ] **Step 8: Implement `src/proxy.ts`**

Use `NextResponse.redirect`, read `request.cookies.get(LOCALE_COOKIE)?.value`, `x-vercel-ip-country`, and `accept-language`, and export this static matcher:

```ts
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|seo|images|.*\\..*).*)"],
};
```

Return without redirect when the first path segment is a supported locale.

- [ ] **Step 9: Run task tests and commit**

Run: `npm test -- src/lib/i18n/config.test.ts src/proxy.test.ts`

Expected: all tests pass.

Commit:

```bash
git add package.json package-lock.json src/lib/i18n src/proxy.ts src/proxy.test.ts
git commit -m "feat: add locale routing and geo detection"
```

---

### Task 2: Typed English and Russian site dictionaries

**Files:**
- Modify: `src/types/content.ts`
- Replace: `src/lib/content.ts`
- Create: `src/lib/i18n/content.ts`
- Create: `src/lib/i18n/content.test.ts`

**Interfaces:**
- Consumes: `Locale` from `src/lib/i18n/config.ts`
- Produces: `SiteContent` containing `meta`, `nav`, all home sections, `pricing`, `about`, `legalNav`, `cta`, and `footer`
- Produces: `getSiteContent(locale: Locale): SiteContent`
- Produces: `getLocalizedMetadata(locale: Locale, page: "home" | "about" | "terms" | "privacy" | "refund")`

- [ ] **Step 1: Write dictionary completeness tests**

Create `src/lib/i18n/content.test.ts`. Walk both dictionary objects recursively and assert identical key shapes. Assert Russian marker copy (`"Дизайн по подписке"`, `"Попробовать разово"`) and English marker copy (`"Design subscription"`, `"Try a one-off project"`). Assert plan prices are exactly `79 000 ₽`, `329 000 ₽`, `549 000 ₽`, `$950`, `$3,900`, `$6,500`.

- [ ] **Step 2: Run dictionary tests and verify red**

Run: `npm test -- src/lib/i18n/content.test.ts`

Expected: FAIL because the dictionary module does not exist.

- [ ] **Step 3: Extend content types**

Add `Cta`, `NavContent`, `PricingPlan`, `PricingMode`, `PricingContent`, `AboutContent`, `TeamMember`, and `SiteContent`. `PricingPlan` must include `kind: "trial" | "subscription" | "development"`, `featured?: boolean`, and localized strings for price, cadence, description, note, CTA, and included items.

- [ ] **Step 4: Create complete dictionaries**

Move all current English display copy from `src/lib/content.ts` into `src/lib/i18n/content.ts`, correct existing brand leakage such as “Creme” and “Process” to BlackBoxWorld, and supply natural Russian translations. Keep image/logo paths shared through builder constants so English and Russian object shapes cannot drift.

The design pricing dictionaries must expose:

```ts
design: {
  label: "Design subscription",
  plans: [
    { kind: "trial", price: "$950", cadence: "/ One-time", featured: false },
    { kind: "subscription", price: "$3,900", cadence: "/ Month", featured: true },
    { kind: "subscription", price: "$6,500", cadence: "/ Month", featured: false },
  ],
}
```

and the Russian equivalent with fixed ruble prices. Include localized Test Drive credit copy and the full About/team copy.

- [ ] **Step 5: Run dictionary tests and commit**

Run: `npm test -- src/lib/i18n/content.test.ts`

Expected: all tests pass.

Commit:

```bash
git add src/types/content.ts src/lib/content.ts src/lib/i18n/content.ts src/lib/i18n/content.test.ts
git commit -m "feat: add complete Russian and English content"
```

---

### Task 3: Locale-prefixed App Router and language-aware shared UI

**Files:**
- Delete: `src/app/layout.tsx`
- Delete: `src/app/page.tsx`
- Create: `src/app/[locale]/layout.tsx`
- Create: `src/app/[locale]/page.tsx`
- Create: `src/components/LanguageSwitcher.tsx`
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/components/HeroSection.tsx`
- Modify: `src/components/WorkCarousel.tsx`
- Modify: `src/components/StatsSection.tsx`
- Modify: `src/components/LogosMarquee.tsx`
- Modify: `src/components/HowWeWorkSection.tsx`
- Modify: `src/components/ExploreWorkSection.tsx`
- Modify: `src/components/WhySubscribeSection.tsx`
- Modify: `src/components/TestimonialsSection.tsx`
- Modify: `src/components/FaqsSection.tsx`

**Interfaces:**
- Consumes: `Locale`, `replaceLocale`, and `SiteContent`
- Produces: locale-aware root layout with matching `<html lang>` and per-locale static params
- Produces: `LanguageSwitcher({ locale, label }: { locale: Locale; label: string })`

- [ ] **Step 1: Create the localized root layout**

Move font and global CSS setup into `src/app/[locale]/layout.tsx`. Await `params`, reject unsupported values with `notFound()`, return `generateStaticParams()` for `en` and `ru`, and render `<html lang={locale}>`.

- [ ] **Step 2: Create localized metadata and home route**

In `src/app/[locale]/page.tsx`, validate locale, load its dictionary once, export `generateMetadata`, and pass section-specific content props into every component.

- [ ] **Step 3: Implement the manual language switch**

`LanguageSwitcher` must set:

```ts
document.cookie = `bbworld-locale=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
router.push(`${replaceLocale(pathname, nextLocale)}${searchParams.size ? `?${searchParams}` : ""}`);
```

Render a two-state RU/EN pill with an accessible label and `aria-current` on the active locale.

- [ ] **Step 4: Make Navbar and Footer locale-aware**

Accept content and locale props, prefix internal routes, keep `mailto:` links untouched, add the switch to the navbar, and hide secondary nav links below 720px so the pill never overflows. Translate footer headings “Site” and “Legal”.

- [ ] **Step 5: Convert all home sections to props**

Remove direct imports from `@/lib/content`. Each section accepts the exact content slice supplied by the page. Translate hard-coded headings such as “Trusted by industry leaders”, “Say no more to”, “What’s included”, and “Questions? Answers.” through dictionary fields.

- [ ] **Step 6: Run tests, lint, build, and commit**

Run:

```bash
npm test
npm run lint
npm run build
```

Expected: all commands exit 0 and the build lists both `/en` and `/ru` route trees.

Commit:

```bash
git add src/app src/components src/lib src/types
git commit -m "feat: render localized marketing routes"
```

---

### Task 4: Design subscription pricing selector

**Files:**
- Modify: `src/components/PricingSection.tsx`
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: `PricingContent` and `Locale`
- Produces: accessible `Design subscription` / `Product development` tabs and plan-card grid

- [ ] **Step 1: Add the pricing mode state and accessible tabs**

Keep `PricingSection` as a client component. Initialize the selected mode to `"design"`. Use buttons with `role="tab"`, `aria-selected`, and keyboard-focus styles. The selected button uses the dark pill style.

- [ ] **Step 2: Render mode-specific plan cards**

Map the active mode’s plans. Design mode uses a responsive three-card grid; product development keeps two cards. Show the trial-credit note prominently on Test Drive, the featured label on Design Partner, included items, localized cadence, and a locale-aware mail CTA.

- [ ] **Step 3: Add restrained visual polish**

Add only the utilities needed for a subtle gradient border/halo on the featured plan and a muted lavender background behind the design mode. Preserve existing CSS tokens and reduce card headline/price sizes on 390px screens.

- [ ] **Step 4: Verify and commit**

Run:

```bash
npm test
npm run lint
npm run build
```

Expected: all commands exit 0.

Commit:

```bash
git add src/components/PricingSection.tsx src/app/globals.css
git commit -m "feat: add design subscription pricing"
```

---

### Task 5: Localized About page and generated team portraits

**Files:**
- Delete: `src/app/about/page.tsx`
- Create: `src/app/[locale]/about/page.tsx`
- Create: `src/components/TeamSection.tsx`
- Create: `public/images/team/product-strategy.webp`
- Create: `public/images/team/product-design.webp`
- Create: `public/images/team/ai-engineering.webp`
- Create: `public/images/team/brand-growth.webp`

**Interfaces:**
- Consumes: `AboutContent`, `Locale`, localized Navbar/Footer content
- Produces: a four-card role-based team grid with local raster assets

- [ ] **Step 1: Generate four distinct portraits**

Use one built-in image generation call per portrait with this shared direction and role-specific gender/wardrobe variation:

```text
Use case: photorealistic-natural
Asset type: About-page team portrait
Primary request: premium editorial studio portrait of a contemporary technology and design professional
Scene/backdrop: seamless warm-neutral light gray studio background
Style/medium: photorealistic high-end keynote/editorial photography
Composition/framing: waist-up portrait, centered, direct calm gaze, generous crop room, 4:5 aspect ratio
Lighting/mood: large soft key light, subtle rim light, confident and approachable
Constraints: varied men and women, simple modern wardrobe, natural skin texture, no logos, no text, no props, no celebrity resemblance, no watermark
```

Inspect each result, persist it under `public/images/team`, and convert to optimized WebP if needed without altering the image content.

- [ ] **Step 2: Build TeamSection**

Render a two-column mobile / four-column desktop grid. Each card has a 4:5 portrait, localized role, and one short responsibility sentence. Do not render a name field.

- [ ] **Step 3: Localize About**

Move the page under `[locale]`, load `about` content, keep the real founder image and founder story, add TeamSection after the founder block, localize principles and CTA, and export locale-specific metadata.

- [ ] **Step 4: Verify and commit**

Run:

```bash
npm run lint
npm run build
```

Expected: both commands exit 0 and image optimization finds all four local files.

Commit:

```bash
git add src/app src/components/TeamSection.tsx public/images/team
git commit -m "feat: add localized team presentation"
```

---

### Task 6: Localized legal routes and locale-safe legal links

**Files:**
- Delete: `src/app/terms/page.tsx`
- Delete: `src/app/privacy/page.tsx`
- Delete: `src/app/refund/page.tsx`
- Create: `src/app/[locale]/terms/page.tsx`
- Create: `src/app/[locale]/privacy/page.tsx`
- Create: `src/app/[locale]/refund/page.tsx`
- Create: `src/components/legal/TermsDocument.tsx`
- Create: `src/components/legal/PrivacyDocument.tsx`
- Create: `src/components/legal/RefundDocument.tsx`
- Modify: `src/components/LegalPage.tsx`

**Interfaces:**
- Consumes: `Locale` and shared Navbar/Footer dictionaries
- Produces: English and Russian server-rendered legal documents with localized metadata and locale-safe cross-links

- [ ] **Step 1: Extract English legal bodies**

Move the current JSX bodies into the three focused document components. Each accepts `locale: Locale`; English returns the existing legal wording without substantive changes.

- [ ] **Step 2: Add faithful Russian translations**

Add complete Russian versions for every current heading, paragraph, and list item. Preserve company name, email addresses, UK statute names, article/section numbers, placeholder company fields, and legal meaning. Cross-links use `/${locale}/terms`, `/${locale}/privacy`, and `/${locale}/refund`.

- [ ] **Step 3: Create localized legal pages**

Each route validates locale, exports localized metadata through `generateMetadata`, and renders `LegalPage` with localized title and update date. `LegalPage` receives locale plus nav/footer props.

- [ ] **Step 4: Search for localization leaks**

Run:

```bash
rg -n 'href="/(about|terms|privacy|refund)|from "@/lib/content"|Creme|Hear what clients are saying about Process' src
```

Expected: no stale unprefixed internal links, no direct old content imports, and no stale borrowed-brand copy.

- [ ] **Step 5: Verify and commit**

Run:

```bash
npm test
npm run lint
npm run build
```

Expected: all commands exit 0.

Commit:

```bash
git add src/app src/components/legal src/components/LegalPage.tsx
git commit -m "feat: localize legal pages"
```

---

### Task 7: End-to-end locale and responsive verification

**Files:**
- Modify if evidence requires fixes: localized app/components/styles only
- Create: `docs/verification/2026-07-16-localization-design-subscription-team.md`

**Interfaces:**
- Consumes: the complete implementation
- Produces: fresh evidence for each requirement and screenshots for desktop/mobile review

- [ ] **Step 1: Run the full automated gate**

Run:

```bash
npm test
npm run lint
npm run build
git diff --check
```

Expected: all commands exit 0 with zero test failures, lint errors, build errors, or whitespace errors.

- [ ] **Step 2: Start the production server**

Run `npm start` after the build and keep it in a PTY session.

- [ ] **Step 3: Verify server redirects**

Run:

```bash
curl -sSI -H 'x-vercel-ip-country: RU' http://localhost:3000/ | rg -i 'HTTP/|location:'
curl -sSI -H 'x-vercel-ip-country: DE' http://localhost:3000/ | rg -i 'HTTP/|location:'
curl -sSI -H 'Cookie: bbworld-locale=en' -H 'x-vercel-ip-country: RU' http://localhost:3000/about | rg -i 'HTTP/|location:'
```

Expected locations: `/ru`, `/en`, and `/en/about` respectively.

- [ ] **Step 4: Verify rendered locales in a browser**

Capture and inspect `/en`, `/ru`, `/en/about`, and `/ru/about` at 1440×900 and 390×844. Check navbar fit, RU/EN switching, query preservation, both pricing modes, price/copy accuracy, team image consistency, legal link locale preservation, and no horizontal overflow.

- [ ] **Step 5: Record evidence and any limitations**

Write exact commands, exit codes, redirect results, screenshot paths, and visual findings to the verification document. Do not claim production IP behavior beyond the tested proxy headers.

- [ ] **Step 6: Final requirement audit**

Check the implementation against every bullet in the design spec. If any requirement lacks direct evidence, gather it or keep the goal active.

- [ ] **Step 7: Commit final verification fixes and evidence**

```bash
git add src docs/verification public/images/team
git commit -m "test: verify localized subscription experience"
```
