---
name: Ackerman
description: Trilingual engineering-drafting-sheet marketing site for the Ackerman software agency
colors:
  bg: "#f4f2ec"
  bg-tint: "#ebe9e1"
  paper: "#fbfaf7"
  ink: "#15171c"
  ink-2: "#23262e"
  ink-soft: "rgba(21, 23, 28, 0.66)"
  ink-faint: "rgba(21, 23, 28, 0.45)"
  line: "rgba(21, 23, 28, 0.14)"
  grid-line: "rgba(21, 23, 28, 0.055)"
  grid-line-major: "rgba(21, 23, 28, 0.1)"
  accent: "#2b5bff"
  accent-deep: "#1637b8"
  accent-bright: "#4d7dff"
  accent-soft: "rgba(43, 91, 255, 0.12)"
  logo-ink: "#101321"
  cream: "#f6f4ee"
  ondark-soft: "rgba(246, 244, 238, 0.78)"
  ondark-faint: "rgba(246, 244, 238, 0.55)"
  ondark-line: "rgba(246, 244, 238, 0.16)"
  # Cover-art plate: the neutral tone in the case-study cover set
  cover-slate: "#dfe0e4"
typography:
  # The enumerated ramp every font-size snaps to — a 1px grid.
  # Half-pixel values (0.9063/0.9688rem etc.) are drift, not steps.
  scale:
    micro: "0.6875rem"
    frame-url: "0.7188rem"
    label: "0.75rem"
    small: "0.8125rem"
    meta: "0.875rem"
    body-sm: "0.9375rem"
    control: "1rem"
    brand: "1.05rem"
    body: "1.0625rem"
    lede: "1.0938rem"
    sub: "1.1rem"
    card-title: "1.125rem"
    title: "1.2rem"
    title-lg: "1.25rem"
    heading-sm: "1.3rem"
    heading: "1.5rem"
    heading-lg: "1.6rem"
    # Display ramp: clamp endpoints for headings, including the Urdu/Arabic
    # locale overrides that re-scale Nastaliq and Cairo.
    ur-display: "1.55rem"
    ur-heading: "1.8rem"
    ur-hero: "1.9rem"
    display-2xs: "2.1rem"
    ur-h2-max: "2.35rem"
    stat: "2.4rem"
    hero-sm: "2.5rem"
    display-xs: "2.6rem"
    display-sm: "3rem"
    ar-hero: "3.3rem"
    display-md: "3.6rem"
    display-lg: "4rem"
    display-xl: "4.3rem"
    display-2xl: "4.6rem"
    display-3xl: "5rem"
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(2.9rem, 6.4vw, 6rem)"
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 115"
  headline:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.4rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.08em"
rounded:
  xs: "10px"
  sm: "12px"
  md: "18px"
  cta: "28px"
  phone: "26px"
  pill: "999px"
  # Shape details, not container radii: hairline chrome and highlight corners.
  detail-hairline: "1px"
  detail-bar: "2px"
  detail-highlight: "4px"
  detail-mark: "0.35em"
spacing:
  grid-cell: "72px"
  grid-cell-mobile: "56px"
  gutter: "clamp(1.25rem, 3vw, 3rem)"
  section: "clamp(4.5rem, 9vh, 7rem)"
  section-head-gap: "clamp(2.5rem, 5vh, 4rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.ink-2}"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.6rem"
  button-accent-hover:
    backgroundColor: "{colors.accent-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.6rem"
  eyebrow:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 0.95rem"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "2rem"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 0.95rem"
---

# Design System: Ackerman

## Overview

**Creative North Star: "The Drafting Sheet"**

The site is an engineering drafting sheet that is itself the portfolio: warm paper ruled by a fine blueprint grid, annotated in the margins with monospaced sheet notes, and proven capable by running trilingual (English / Urdu / Arabic) with full RTL mirroring as a live demo. Sections sit on gridded fields with dimension ticks and crosshair marks; content reads as measured drawings — a ruled service index instead of a card grid, numbered process steps, browser-framed product recreations. It deliberately refuses the dark-hero agency template and the fabricated logo wall.

The world is light, precise, and quiet. Cool near-black ink carries all text; a single electric blue does every accent job — headline `mark` highlights, pill dots, index numerals, focus rings, the selection color, and one black→blue gradient inherited from the logo. Depth comes from hairlines first and soft ambient shadow second. Motion is one easing curve applied everywhere, entering low and settling fast.

**Key Characteristics:**
- Warm paper ground (#f4f2ec) with a 72px blueprint grid fading out under a radial mask
- One accent: electric blue #2b5bff; no secondary or tertiary hue anywhere on the sheet
- Archivo (variable width) display, Hanken Grotesk body, IBM Plex Mono annotations
- Hairline borders (rgba(21,23,28,0.14)) structure everything; shadows are ambient, never structural
- Fully mirrored trilingual layout via CSS logical properties; per-locale font wiring (Cairo, Noto Nastaliq Urdu)
- 18px-radius hairline cards, 999px pills, mono uppercase eyebrow pills with a blue dot
- One easing curve — cubic-bezier(0.16, 1, 0.3, 1) — for every transition and entrance

## Colors

An almost-monochrome paper-and-ink ledger with one electric blue voice.

### Primary
- **Electric Blue** (#2b5bff): the only accent. Solid fill behind `mark` headline highlights (white text on it), accent buttons, eyebrow-pill dots, ticker diamonds, active anchor-rail borders, focus-visible outlines, `::selection`, and `caret-color`. Endpoint of the logo gradient.
- **Deep Blue** (#1637b8): the accent's pressed/quiet register — accent-button hover, index numerals (`.svcindex__idx`, `.process__idx`), case-card meta, mailto links, checkmark icons, active language rows. Used where full-voltage blue would shout.
- **Bright Blue** (#4d7dff): reserved lighter step of the same hue; defined in the token set for on-dark accent use.
- **Blue Wash** (rgba(43,91,255,0.12)): `accent-soft` — soft highlight `.hl` inside prose/quotes, chips, row-hover fills, input focus ring (3px spread), avatar circles.
- **Logo Ink** (#101321): the blue-black start of the brand gradient `linear-gradient(135deg, #101321 0%, #1637b8 55%, #2b5bff 100%)` (`--accent-grad`), used on the CTA panel and the logo's foot block.

### Neutral
- **Warm Paper** (#f4f2ec): the page ground (`--bg`); also the browser theme-color.
- **Paper Tint** (#ebe9e1): tinted section bands (`.section--tint`, `.statband`, footer, frame title bars), bounded by 1px hairlines.
- **Bright Paper** (#fbfaf7): raised surfaces — cards, table indexes, menus, form fields, frame bodies. A near-white gradient variant `--surface` (linear-gradient(160deg, rgba(255,255,255,0.85), rgba(251,250,247,0.55))) backs quotes, case cards, and syscards.
- **Cool Ink** (#15171c): all primary text; also the fill of primary buttons, dark flagship band, and phone-frame chrome. **Ink 2** (#23262e) is its hover register.
- **Soft Ink** (rgba(21,23,28,0.66)) / **Faint Ink** (rgba(21,23,28,0.45)): secondary copy and annotations / de-emphasized numerals (grayed process steps), scrollbar thumb.
- **Hairline** (rgba(21,23,28,0.14)): every border, divider, and rule. **Grid Minor** (rgba(21,23,28,0.055)) and **Grid Major** (rgba(21,23,28,0.1)): the blueprint field's two line weights.
- **Cream** (#f6f4ee) with **ondark-soft/faint/line** rgba variants: the on-dark text system for the ink-filled flagship band and dark grid variant (rgba(246,244,238,0.06) grid lines).

### Named Rules
**The One Blue Rule.** #2b5bff (with its deep/bright/wash registers) is the only hue on the sheet. No greens, reds, or status rainbows: even the Kampus status pill's green lives only inside the product sub-world frame. If an element needs emphasis, it gets ink weight, blue, or a hairline — never a new color.

**The Sub-World Rule.** The Kampus product recreation (`.kshot`) carries the product's own palette — greige #cec7b5, dark-warm ink #221e17, amber #f0a41c/#9d6606, warm paper #f6f2ea — scoped as `--k-*` variables that exist only inside device frames. The product keeps its identity; the site keeps its own. Kampus colors never leak onto the sheet, and sheet blue never enters the frame.

**The Highlight Grammar Rule.** Two highlight registers, never mixed: `mark` is solid #2b5bff with white text (AA), padded 0.05em/0.28em, radius 0.35em, box-decoration-break: clone — for display headlines only. `.hl` is the rgba blue wash with inherited text color, radius 4px — for emphasis inside prose and quotes. On the gradient CTA panel, `mark` inverts to rgba(255,255,255,0.16) with white text.

## Typography

**Display Font:** Archivo (variable `wdth` axis; sans-serif fallback)
**Body Font:** Hanken Grotesk (400/500/600; system-ui fallback)
**Label/Mono Font:** IBM Plex Mono (400/500/600; monospace fallback)
**Arabic:** Cairo (display + body). **Urdu:** Noto Nastaliq Urdu (display + body).

**Character:** Engineered and warm — a wide-stretched grotesk speaking in headlines, a humanist grotesk carrying prose, and a typewriter voice doing all the measuring: indexes, coordinates, captions, sheet notes.

Per-locale wiring: `html` carries `.font-en`/`.font-ar`/`.font-ur`, which remap `--font-display`/`--font-body` to Latin, Cairo, or Nastaliq. `--font-mono` is never remapped — annotations and figures stay Latin in every locale.

### Hierarchy
- **Display / hero h1** (600, clamp(2.9rem, 6.4vw, 6rem), lh 1.0, ls −0.035em, font-stretch 115%): hero only. Page-intro h1 runs clamp(2.5rem, 5.6vw, 5rem) at the same stretch.
- **Headline / h2** (600, clamp(2rem, 4.2vw, 3.4rem), lh 1.06, ls −0.025em): section heads; usually contains one `mark`. Process-step h3s are display-scale outliers (clamp(1.9rem, 4.6vw, 3.6rem), stretch 112%).
- **Title / h3** (600, 1.1–1.6rem by component, lh 1.06): card and row titles.
- **Body** (400, 1.0625rem, lh 1.6, `text-wrap: pretty`): prose; secondary copy drops to 0.9375–0.9688rem in Soft Ink. Headings get `text-wrap: balance`.
- **Label / annotation** (mono 500–600, 0.6875–0.8125rem, ls 0.05–0.1em, UPPERCASE): `.anno`, `.sheet-note`, eyebrows, tickers, index numerals, fact pills, footer column heads, mail links. Numbers use `font-variant-numeric: tabular-nums` and are isolated LTR (`direction: ltr; unicode-bidi: isolate`).

### Named Rules
**The Latin Ledger Rule.** Numerals, indexes, URLs, and annotations keep Latin faces and Latin digits in all three locales: `--font-mono` never remaps, and in Urdu the stat/mini numerals switch to `--font-display-latin`. Clean digits, sane metrics, every locale.

**The Nastaliq Air Rule.** Urdu's hanging script gets structural room, not squeezed in: body lh 2.05; heading lh 2.1 with letter-spacing 0 and stretch 100%; display clamps reduced (hero clamp(1.9rem, 3.8vw, 3.4rem), section h2 clamp(1.55rem, 2.9vw, 2.35rem)); `mark`/`.hl` vertical padding zeroed; card h3s at lh 1.9; mono labels at lh 1.8. Arabic (Cairo) needs only a modest version: headings lh 1.5, ls 0, no stretch, hero clamp(2.4rem, 5.4vw, 4.6rem).

## Layout

The sheet model: a fixed 68px transparent nav floats over full-bleed sections; content lives in `.wrap` (max-width 1520px, padding-inline clamp(1.25rem, 3vw, 3rem)). Sections breathe at padding-block clamp(4.5rem, 9vh, 7rem); alternating bands tint to #ebe9e1 with 1px hairlines top and bottom. Section heads are capped at 46rem (centered variant available) with a clamp(2.5rem, 5vh, 4rem) gap before content.

**The blueprint field** (`.grid-field`): a ::before layer draws a two-weight grid — 72px minor cells (rgba .055) and 288px (4×) major cells (rgba .1) — masked by `radial-gradient(130% 100% at 50% 0%)` so the ruling fades away toward the section's lower corners. Content sits above it at z-index 1. `--dark` swaps to cream lines at .06 on the ink band. `--ruled` adds a top datum line (1px major) plus a 5px-tall repeating tick ruler every grid-cell/4 (18px). `.cross` places 18×18px crosshair ticks. `.sheet-note` pins mono uppercase margin notes (0.6875rem, ls 0.1em) to sheet corners (tr/br/bl), hidden below 768px.

Two-column grids (hero 1.05fr/0.95fr, difference, flagship 0.95fr/1.05fr, contact 1.1fr/0.9fr) collapse to one column at 1023px. Card grids: quotes 3-up → 1-up (1023px); syscards and cases 2-up → 1-up; stat band 4-up → 2-up → keeps 2. Breakpoints observed: ≤1199px (modgrid 2-up), ≤1023px (single-column stacking), ≤767px (mobile: burger nav + drawer, grid-cell shrinks to 56px, sheet notes hidden, svcindex compresses). One height breakpoint: ≤800px tall on desktop compresses the hero rhythm so both CTAs and the ticker land in the first viewport.

Direction is structural, not patched: every offset uses logical properties (`inset-inline-start`, `border-inline-end`, `margin-inline-start`, `padding-inline-start`), so `dir="rtl"` mirrors the whole sheet for free. Directional glyphs get `.icon-flip` (`scaleX(-1)` under `[dir="rtl"]`); the ticker reverses animation direction; the drawer slides from the logical start; URLs and figures stay LTR-isolated.

## Elevation & Depth

Hairline-first: structure is drawn with 1px rgba(21,23,28,0.14) borders, and shadows are a soft ambient blue-gray (23,32,63 base) that suggests paper lift, never an outline. The flagship band flips the sheet to solid ink with two faint radial blue glows (rgba(43,91,255,0.22) / rgba(22,55,184,0.18)) as its only depth. The scrolled nav and the sticky anchor rail gain translucency + `backdrop-filter: blur` instead of shadow.

### Shadow Vocabulary
- **shadow-sm** (`0 2px 6px rgba(23, 32, 63, 0.05)`): resting cards, table indexes, buttons.
- **shadow-md** (`0 14px 34px rgba(23, 32, 63, 0.1)`): hover lift target, dropdown menus, the LocaleDemo panel.
- **shadow-lg** (`0 30px 70px rgba(23, 32, 63, 0.16)`): hero device frames and the CTA panel; deepens to rgba(0,0,0,0.45) inside the dark band.

### Named Rules
**The Hairline-First Rule.** Every surface gets its 1px hairline border; shadow is optional atmosphere on top. No hard offset shadows, no glows on light ground, no borders thicker than 1px (the placeholder tag's 1px dashed border is the only dash).

**The Lift Rule.** Hover elevation is exactly `translateY(-4px)` + shadow-md on quotes and case cards, gated behind `@media (hover: hover) and (pointer: fine)`; touch devices never see lifts. Buttons press with `translateY(1px) scale(0.98)` on :active.

## Shapes

Rounded-rectangle drafting hardware: cards, frames, menus, and panels at 18px (`--radius`); inputs and inner rows at 12px (`--radius-sm`); the CTA panel at 28px (radius + 10px); phone frames at 26px with a 10px ink bezel. Everything small and interactive is a full pill (999px): buttons, eyebrows, chips, fact tags, anchor links, tab buttons, frame URL bars, even scrollbar thumbs. Circles mark people and pointers: 44px quote marks/avatars, 38px arrow buttons. The ticker's bullet is a 6px square rotated 45° — a plotted point; the eyebrow's is a 7px blue dot. Crosshair ticks and 1px rules complete the drafting vocabulary. Nothing is sharp-cornered except the sheet itself.

## Components

### Buttons
- **Shape:** full pill (999px radius), 600 weight, 0.9375rem, padding 0.8rem 1.6rem; inline-flex with 0.5rem gap.
- **Primary:** Cool Ink fill, Cream text, shadow-sm → Ink-2 + shadow-md on hover. On the gradient CTA panel it inverts to white fill with ink text.
- **Accent:** Electric Blue fill, white text → Deep Blue on hover. The hero's lead CTA.
- **Ghost:** transparent, ink text, rgba ink border (0.35) → 6% ink wash on hover. **onDark:** cream text, cream border (0.4) → 10% cream wash.
- **Press:** all buttons `translateY(1px) scale(0.98)` on :active; transitions 0.25s on the house curve.

### Eyebrow Pill
Every section opens with one: mono 600 uppercase 0.75rem (ls 0.08em) in Soft Ink, Bright Paper fill, hairline border, 999px, 0.4rem/0.95rem padding, and a 7px Electric Blue dot before the text. On the dark band it swaps to a 6% cream fill with ondark tokens. This device is brief-pinned by the reference world — it is native here, not an inherited habit.

### Navigation
Fixed 68px bar, transparent at top; `.is-scrolled` gains 80% Warm Paper fill, 14px blur + 1.2 saturate backdrop, and a bottom hairline. Brand is Archivo 700 + LogoMark; links 0.9375rem/500 in Soft Ink → Ink on hover; pill language switcher (hairline border, dropdown menu on Bright Paper at 14px radius, shadow-md, active row 700 with Deep Blue check). Below 768px: links and CTA hide behind a 40px burger (hairline border, 10px radius) opening a start-side drawer (min(21rem, 86vw), Warm Paper, hairline end border, display-face links with hairline underlines, language list, bottom-pinned CTA), with a 32% ink overlay; both animate in on the house curve.

### Service Index (signature)
The home services surface is the sheet's ruled drawing index, not a card grid: one hairline table (`.svcindex`, 18px radius, Bright Paper, shadow-sm) of six rows — mono Deep Blue index `01`–`06`, Phosphor icon, title, description, and a 38px circled arrow. Hover (fine pointers only) floods the row with Blue Wash and turns the circle solid Electric Blue, nudging it 3px along the reading direction (mirrored in RTL). Rows re-grid at 1023px and 767px (icon dropped, description reflows).

### Device Frames
`BrowserFrame`: 18px-radius Bright Paper shell, hairline border, shadow-lg; title bar on Paper Tint with three 9px dots (Faint Ink at 50%) and a centered pill URL in mono 0.7188rem, always LTR. `PhoneFrame`: 26px radius, 10px Cool Ink bezel, 18px inner body. Frames are the only windows into other worlds — screenshots and the KampusShot recreation live inside them.

### KampusShot (signature sub-world)
An authored, live-DOM recreation of the Kampus fee dashboard rendered inside the hero's BrowserFrame — always crisp, translates with the page (en/ur/ar content, own `dir`), and carries the product's own world via scoped `--k-*` tokens: greige ground, amber logo gradient, warm-white stat cards and ruled table, amber/green status pills. Urdu names render in Nastaliq at lh 1.9, Arabic in Cairo; all figures stay mono LTR tabular. Demonstration data only, marked aria-hidden.

### LocaleDemo (signature)
The positioning proof: a Bright Paper panel (18px, shadow-md) with three pill tabs (English / اردو / العربية; active tab inverts to Ink/Cream) re-rendering a mini fee card in the chosen script — direction flips, layout mirrors, the Blue Wash "Live" chip and mono LTR numerals hold steady. Swap animates 0.28s on the house curve, sliding ±14px with the text direction; reduced motion swaps instantly.

### Capability Ticker
A full-bleed hairline-banded marquee on Bright Paper at the hero's fold: mono uppercase items with 45°-rotated 6px blue squares, duplicated track scrolling 36s linear, paused on hover, reversed under RTL, and statically wrapped (duplicate hidden) under reduced motion.

### Stat Band / Process / Quotes
- **StatBand:** tinted band; cells split by 1px hairlines; Archivo tabular numerals clamp(2.4rem, 4.5vw, 3.6rem) with Electric Blue suffix `em`s, counted up over 1.4s (exponential ease-out) on first intersection. Renders only with 2+ real figures; dev placeholders show an em-dash plus the dashed mono `.ph-tag`.
- **ProcessScroller:** the signature scroll moment — five numbered steps as huge stretched headlines (mono Deep Blue `01`–`05` indexes); scroll progress inks each step from Faint Ink to full Ink (0.3s linear color transition; all-ink under reduced motion).
- **Quotes:** `--surface` gradient cards (18px, 2rem padding, shadow-sm, hover lift) with a 44px circled quote mark, hairline-topped figcaption, and Blue Wash initial avatars.

### Inputs / Forms
Bright Paper fields, rgba ink border (0.24), 12px radius, 0.75rem/0.95rem padding; labels 600 at 0.9063rem; placeholders Soft Ink. Focus removes the outline for a border swap to Electric Blue plus a 3px Blue Wash ring. Textareas min 8.5rem, vertical resize. Two-column rows collapse at 767px. Global focus-visible elsewhere: 2px Electric Blue outline, 2px offset, 4px radius.

### CTA Panel
The one gradient moment: `--accent-grad` (#101321 → #1637b8 55% → #2b5bff) panel at 28px radius, shadow-lg, centered white text, with a faint white 72px grid overlay (rgba(255,255,255,0.05) lines) so even the climax stays on the drafting sheet. White primary button, mono mailto link with 40%-white underline.

### Reveal & Motion Grammar
One curve everywhere: `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`. Two entrance systems:
- **Hero choreography:** eyebrow → h1 → sub → actions rise 18px (0.65–0.7s, delays 0.1/0.22/0.34/0.46s); the frame stage scales from 0.975 (0.9s). Gated on `html.fonts-ready` (set from `document.fonts.ready`) so the sequence starts only after the display face loads — no mid-swap reflow.
- **Scroll reveals:** every revealed block is `.reveal` (opacity 0, translateY(28px) scale(0.985), 0.75s transition) flipped to `.is-visible` by one shared IntersectionObserver (threshold 0.15, −5% bottom margin). Sibling `.reveal`s under one parent get `--i` indexes (capped at 7) for 70ms stagger steps.
- **Scroll-linked:** ParallaxFrame drifts device frames ±14–20px through the viewport; ProcessScroller inks headings by progress.
- **Reduced-motion contract:** `prefers-reduced-motion: reduce` disables smooth scroll, reveals (visible immediately), hero animation, hover-lift transitions, ticker loop (wraps statically), process graying, ParallaxFrame drift, LocaleDemo slide, and the stat count-up. Every motion island checks it in JS as well as CSS.

### Footer
Paper Tint band with a top hairline overlaid by a centered Electric Blue gradient shimmer (40% opacity); brand + about column, mono uppercase column heads, hairline-topped base row with mono language links (active in Deep Blue 700).

## Do's and Don'ts

### Do:
- **Do** open every section with the eyebrow pill (mono uppercase, blue dot) and put exactly one `mark` highlight in its headline.
- **Do** lay new sections on a `grid-field` variant when they need the sheet feel, and annotate with `.sheet-note`/`.anno` mono notes — hidden below 768px.
- **Do** use logical properties (`inline-start`/`inline-end`) for every horizontal offset, add `.icon-flip` to directional glyphs, and keep URLs/figures `direction: ltr; unicode-bidi: isolate` with tabular-nums.
- **Do** run every transition and entrance on cubic-bezier(0.16, 1, 0.3, 1), stagger siblings via `.reveal` + `--i`, and honor the reduced-motion contract in both CSS and JS.
- **Do** put product imagery inside a BrowserFrame or PhoneFrame; let the product's own palette live there (per the Sub-World Rule).
- **Do** test every surface in all three locales; apply the Urdu clamps/line-heights and Arabic adjustments from globals.css rather than inventing new ones.
- **Do** gate hover lifts behind `(hover: hover) and (pointer: fine)`, and keep them at translateY(-4px) + shadow-md.
- **Do** keep unverified content behind placeholder gating (`.ph-tag`, dev-only rendering) — never ship fabricated stats, quotes, or logos as real.

### Don't:
- **Don't** introduce a second accent hue, a dark-hero opening, or a client logo wall — the world is defined by refusing them.
- **Don't** use `mark` outside display headlines or `.hl` outside prose; never put blue text on the blue fill.
- **Don't** let Kampus greige/amber (or any sub-world palette) escape a device frame, or let sheet blue intrude into one.
- **Don't** draw borders heavier than 1px, add hard offset shadows, or use shadow where a hairline does the job.
- **Don't** remap `--font-mono` per locale or render annotations/digits in Nastaliq or Cairo — the Latin Ledger Rule.
- **Don't** use physical left/right properties, un-mirrored arrows, or fixed `translateX` signs in interactive nudges (mirror them under `[dir="rtl"]`).
- **Don't** start hero entrances before `html.fonts-ready`, or attach reveal animation to elements without the shared `.reveal` observer system.
