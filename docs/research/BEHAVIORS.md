# Page Behaviors — creme.digital

## Global scroll
- Native scroll (no Lenis / Locomotive).
- Page height: 12,062 px.

## Navbar (sticky pill)
- Fixed centered pill, white/light frosted glass background `rgba(242,242,242,0.8)` with backdrop blur.
- Sits above content; visible at all scroll positions.
- Links: About, Work, Pricing, [Book a Call (dark pill button)]
- On mobile: collapses to hamburger (TBD on inspection)

## Hero
- Static. Single H1, body subtitle, two CTA buttons (Book a Call solid black, View Pricing outline).
- "Official Gold Partner of [Lovable]" badge above heading, rounded pill with logo.

## Work showcase carousel (Section 2)
- Auto-scrolling horizontal marquee of cards.
- Cards alternate: phone screenshots (250×550) and dashboard screenshots (880×550).
- Each card has small logo + title underneath (e.g., "App UI for Knimble").
- Repeats infinitely (duplicate-and-translate marquee pattern).
- 5+ unique project mockups visible.

## Stats trio
- 3 equal cards in a row, light gray bg.
- Label top-left small text, large gradient number bottom-left.
- Gradient: pink-magenta to purple.

## Trusted-by logos
- Single-row marquee, slow horizontal auto-scroll.
- Faded gray logos: LAUNCH POP, HUMI, hornbeam, Myodetox, GrantMatch, lendly, Affinity.

## How we work? (Section 5 — KEY scroll behavior)
- **INTERACTION MODEL: scroll-driven sticky-stack**
- Container is ~3606 px tall (3× viewport height).
- 4 cards stack on top of each other using `position: sticky; top: nav-height`.
- As you scroll, each card pins, the next slides up under it (or over it).
- Background gradient transitions through scroll: blue → indigo → purple → pink → coral/red.
- Cards: Build / Itirate / Grow / Collaborate.
- Each card: icon-tag (top-left), big H2 heading, body paragraph, large UI mockup on right.
- Card style: white bg, rounded 24px+, soft pink/peach inner accent gradient.

## Explore work (Section 6)
- Heading center + body + "View all work" dark pill button.
- 3 dark-bg project preview cards in a row, each with logo + title + subtitle below.

## Why subscribe? (Section 7)
- 2x2 grid (desktop) of 4 cards.
- Cards: AI Native (icon-heart) / Clear async collab (chat mock) / Design matters (project board mock) / Operate with freedom (red-X "say no more to" list).
- Heights vary; uses fr-grid layout.

## Pricing (Section 8)
- 2 cards side-by-side. Left = Sprints (light bg), Right = MVP Development (dark bg).
- Big gradient price. Checkmark list of inclusions. CTA pill button.

## Testimonials (Section 9)
- 3 cards in horizontal scroll/carousel. White cards, fade-edge on left/right.
- Each: testimonial text, avatar + name + role, company logo bottom-right.

## FAQs (Section 10)
- **INTERACTION MODEL: click-to-toggle accordion**
- 3 category groups: General FAQ's / Pricing & Timelines / AI & Integrations
- Each row: pill-shaped row, question on left, +/× icon on right
- Default first question open (with X icon), rest closed (with + icon)
- Click toggles expanded content with answer.

## CTA pill (between FAQ and footer)
- Centered dark pill: "Start your project with us today! [Start a Project →]"

## Footer
- Dark background `#131314`.
- 2-column: Subscribe form (email input + Sign Up pill button) on left, nav links on right.
- Bottom row: copyright + social icons (Instagram, X).

## Responsive breakpoints (Framer convention)
- Desktop: ≥1200
- Tablet: 810–1199
- Mobile: ≤809
- Mobile-specific behaviors TBD per section (capture during extraction).

## Hover effects
- Pill buttons: subtle bg darken / scale.
- Nav links: opacity transition.
- (Detailed extraction per-component during Phase 3.)
