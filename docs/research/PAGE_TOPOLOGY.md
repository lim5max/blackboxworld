# Page Topology — creme.digital

Source: https://www.creme.digital/
Viewport tested: 1440x900 desktop, 390x844 mobile.
Page height: 12,062 px desktop.
Site built on Framer. No Lenis/Locomotive detected — uses Framer's own scroll.

## Global layout
- Single-column scroll page, white default background.
- Sticky pill navbar overlays content (center top, frosted glass effect).
- z-index layers: nav (top) > section content (mid) > gradient backgrounds (bottom).

## Sections (top → bottom)

| # | ID | Top px | Height px | Name | Component file |
|---|----|--------|-----------|------|----------------|
| 0 | — | 0 | 64 | Sticky Navbar (overlay) | `Navbar.tsx` |
| 1 | `#landing` | 0 | 573 | Hero | `HeroSection.tsx` |
| 2 | — | 573 | 600 | Work showcase carousel (marquee) | `WorkCarousel.tsx` |
| 3 | — | 1173 | 341 | Stats trio (200+/$25M+/80+) | `StatsSection.tsx` |
| 4 | — | 1514 | 309 | Trusted-by logo marquee | `LogosMarquee.tsx` |
| 5 | `#howwework` | 1823 | 3606 | How we work — sticky stacking 4 cards with gradient bg | `HowWeWorkSection.tsx` |
| 6 | `#why` | 5429 | 734 | Explore work — 3 project cards | `ExploreWorkSection.tsx` |
| 7 | `#why-1` | 6163 | 1476 | Why subscribe — 4-card grid | `WhySubscribeSection.tsx` |
| 8 | `#price` | 7639 | 1195 | Pricing — 2 cards | `PricingSection.tsx` |
| 9 | `#testimonials` | 8834 | 822 | Testimonials — 3 cards | `TestimonialsSection.tsx` |
| 10 | `#faqs` | 9656 | 1791 | FAQs — categorized accordion | `FaqsSection.tsx` |
| 11 | — | 11512 | 550 | CTA pill + dark Footer | `Footer.tsx` (+ CTA inside) |

## Fonts
- Headings: **Inter Tight** (variable weights, esp. 600/700)
- Body / UI / nav: **Plus Jakarta Sans** (400/500/600)

## Colors (extracted)
- Text primary: `rgb(19,19,20)` (#131314)
- Text secondary: `rgb(135,134,138)` (#87868A)
- Text tertiary: `rgb(113,112,115)` (#717073)
- Pricing/stats accent: pink-purple gradient `#E91E92 → #6633EE` (200+, $25M+, $4,500)
- Background primary: white #FFF
- Background muted: `rgb(247,247,247)` (#F7F7F7) — stat cards, testimonials, FAQ pills
- Background dark: `rgb(19,19,20)` (#131314) — footer, dark pricing card, primary CTA buttons
- Glass overlay: `rgba(235,235,235,0.6)` and `rgba(242,242,242,0.8)` — nav blur

## Favicons / brand
- Logo SVG (white): `https://framerusercontent.com/images/qOR8OKMEI8WuXzivJynhTBiuN1c.png`
- Logo SVG (dark): `https://framerusercontent.com/images/SRWNBGSPqgdhXUTMQCb7g9V0wdI.png`
- Apple touch icon: `https://framerusercontent.com/images/l2gXXYprvpaI1itPq0oQVGF8EIA.png`

## SEO meta
- Title: `Creme Digital - #1 AI Product Development Agency`
- Description: `Turn your idea into a ready to launch MVP in 2-weeks. Trusted by a 100+ startups to build & launch software products.`

## Nav routes
- `/` (Home), `/about`, `/work`, `/blog`, `/contact`, `/book` (Book a Call), `#price`, `#testimonials`, `#faqs`
- For clone: only `/` is implemented; external/route links can stub to `#`.
