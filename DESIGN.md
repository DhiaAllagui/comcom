# COMCOM Group — DESIGN.md

## 1. Visual Theme & Atmosphere

**Direction:** Dark Premium Editorial, tech-corporate accent.

COMCOM Group is a UAE Free Zone holding company spanning audiovisual production, large-scale events, advertising, training, tourism and trading. The current site reads as a festival flyer (neon magenta/cyan, heavy glass, loud gradients). The redesign repositions it as an **international holding company with a creative edge** — the gravitas of a corporate/consulting site, with enough visual craft to signal "we build unforgettable experiences."

**Mood keywords:** authoritative · precise · engineered · confident · understated luxury · editorial · global.

**One-line brief:** *A near-black canvas, disciplined grid, one restrained magenta accent used only for signal (not decoration), and a serif/sans pairing that reads like a flagship annual report crossed with a top-tier creative agency deck.*

Anti-brief: no neon glow, no magenta, no busy gradients, no glassmorphism-as-default, no confetti-colored badges.

**Layout reference (added):** [eloqwnt.com](https://www.eloqwnt.com) — a light-theme B2B agency site — is adopted as the **structural and motion** reference, not the visual/color reference (its light palette and pink-red accent are explicitly rejected; COMCOM keeps its dark editorial palette from §2). What's borrowed:
- Rounded "floating panel" section containers that sit on the page background with visible margin around them (see §5).
- Alternating left/right **case-study rows** (image/mockup + copy + 3 inline stat numbers + "Explore →" link) — this becomes the primary pattern for the Divisions section (see §5, §7).
- A continuously-scrolling **marquee stat ticker** directly under the hero.
- A numbered, single-column **services list** with hover-reveal arrows.
- An accordion-style **FAQ** and a horizontally-scrollable **testimonial carousel** with prev/next controls.
- Section-entry motion timing (fade-up on scroll, staggered by row) — kept at L2, described fully in §7.

Everything else (color, type, button shape, card radius, badge style) stays governed by §2–§4 of this document; the reference is not followed where it conflicts with those.

---

## 2. Color Palette & Roles

All colors are CSS variables in `:root`, dark-mode only (this is a dark-native brand, no light toggle).

```css
:root {
  color-scheme: dark;

  /* Base surfaces */
  --bg-void:        #06070A;   /* rgb(6,7,10)     page background */
  --bg-base:         #0A0C10;  /* rgb(10,12,16)   section background */
  --bg-elevated:     #10131A;  /* rgb(16,19,26)   cards */
  --bg-elevated-2:   #161A23;  /* rgb(22,26,35)   hover / nested cards */
  --border-subtle:   rgba(255,255,255,0.07);
  --border-default:  rgba(255,255,255,0.12);
  --border-strong:   rgba(255,255,255,0.20);

  /* Text */
  --text-primary:    #F5F6F8;   /* rgb(245,246,248) */
  --text-secondary:  #A7ADBA;   /* rgb(167,173,186) */
  --text-tertiary:   #6B7280;   /* rgb(107,114,128) */
  --text-on-accent:  #06070A;

  /* Accent — Magenta (single signal color) */
  --accent:          #E31A94;   /* rgb(227,26,148) */
  --accent-strong:   #E843A7;   /* rgb(232,67,167) hover state */
  --accent-dim:      #660B42;   /* rgb(102,11,66)  borders/backgrounds tinted */
  --accent-wash:     rgba(227,26,148,0.10);
  --accent-wash-2:   rgba(227,26,148,0.18);

  /* Functional */
  --success:         #34D399;
  --warning:          #FBBF24;

  /* Overlays */
  --overlay-scrim:   rgba(6,7,10,0.72);
}
```

**Roles:**
- `--bg-void` — html/body background, the deepest layer.
- `--bg-base` — section backgrounds, alternated subtly with `--bg-void` for rhythm (never with a visible seam — use 1px `--border-subtle` top border instead of color jumps).
- `--bg-elevated` / `--bg-elevated-2` — cards, nav, modals. Elevation is expressed through a slightly lighter surface + border, never drop shadows with color.
- `--accent` — used **only** for: primary CTA background, active nav underline, key numerals/stats, link hover, focus rings, small icon accents. Never used for large fills or big background washes. Max one accent-colored element per viewport in most sections.
- Body copy is always `--text-secondary`, never pure white — pure white (`--text-primary`) reserved for headings and emphasis.

**Removed:** neon magenta (#D926A9), neon cyan (#00D2FF), all glassmorphism blur-as-decoration.

---

## 3. Typography Rules

**Font families:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

```css
--font-display: 'Fraunces', 'Iowan Old Style', Georgia, serif;      /* editorial serif — H1/H2, big statements */
--font-body:    'Inter', -apple-system, 'Segoe UI', Roboto, sans-serif; /* all UI text, body copy, nav */
--font-mono:    'JetBrains Mono', 'SF Mono', Consolas, monospace;   /* labels, eyebrows, stats, codes like "01 / 06" */
```

Fraunces (a soft, high-contrast serif with optical sizing) replaces Syne — it's the single biggest lever moving the site from "flyer" to "editorial/corporate." Inter replaces Plus Jakarta Sans for body — more neutral, more "annual report." JetBrains Mono replaces Space Grotesk for small mono labels (eyebrows, division codes, stat units) — a corporate-tech signature already implied by the old design, kept but tightened.

**Forbidden:** Syne, Space Grotesk as body font, any rounded/playful display font, letter-spacing tricks that reduce legibility.

**Scale (desktop / mobile):**

| Token | Desktop | Mobile | Font | Weight | Tracking |
|---|---|---|---|---|---|
| Display / Hero H1 | 88px / 1.02 | 44px / 1.05 | Fraunces | 500 | -0.02em |
| H2 (section title) | 52px / 1.05 | 32px / 1.1 | Fraunces | 500 | -0.015em |
| H3 (card title) | 26px / 1.2 | 22px / 1.25 | Fraunces | 500 | -0.01em |
| Eyebrow / label | 12px / 1.4 | 11px / 1.4 | JetBrains Mono | 500 | 0.14em, uppercase |
| Body large | 19px / 1.6 | 17px / 1.6 | Inter | 400 | 0 |
| Body | 16px / 1.65 | 15px / 1.65 | Inter | 400 | 0 |
| Small / caption | 13px / 1.5 | 13px / 1.5 | Inter | 500 | 0.01em |
| Stat numeral | 56px / 1 | 36px / 1 | Fraunces | 400 | -0.02em |

Body text color is always `--text-secondary`; max line length ~68ch for paragraphs.

**Text decoration rule:** no gradient text, no text-glow. Only exception: the accent color may color a single word/phrase inline within an otherwise white H1 (e.g. "Engineering **Unforgettable** Experiences" where "Unforgettable" is `--accent`) — used at most once per page, in the hero.

---

## 4. Component Stylings

### Buttons

```css
.btn-primary {
  background: var(--accent);
  color: var(--text-on-accent);
  font: 600 14px/1 var(--font-body);
  letter-spacing: 0.01em;
  padding: 14px 28px;
  border-radius: 4px;
  border: 1px solid var(--accent);
  transition: background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
}
.btn-primary:hover   { background: var(--accent-strong); border-color: var(--accent-strong); transform: translateY(-1px); box-shadow: 0 8px 24px -8px var(--accent-wash-2); }
.btn-primary:active  { transform: translateY(0); }
.btn-primary:focus-visible { outline: 2px solid var(--accent-strong); outline-offset: 3px; }
.btn-primary:disabled { background: var(--bg-elevated-2); color: var(--text-tertiary); border-color: var(--border-subtle); cursor: not-allowed; }

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-default);
  font: 600 14px/1 var(--font-body);
  padding: 14px 28px;
  border-radius: 4px;
  transition: border-color 0.25s ease, background 0.25s ease;
}
.btn-secondary:hover  { border-color: var(--border-strong); background: rgba(255,255,255,0.03); }
.btn-secondary:focus-visible { outline: 2px solid var(--accent-strong); outline-offset: 3px; }
```

Buttons are **squared-off (4px radius), never pill-shaped** — pill buttons read as "app/startup," square-ish reads as "institutional."

### Cards (division / achievement / label cards)

```css
.card {
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: 6px;
  padding: 32px;
  transition: border-color 0.35s cubic-bezier(0.16,1,0.3,1), transform 0.35s cubic-bezier(0.16,1,0.3,1), background 0.35s ease;
}
.card:hover {
  border-color: var(--border-default);
  background: var(--bg-elevated-2);
  transform: translateY(-2px);
}
.card:focus-within { outline: 2px solid var(--accent-strong); outline-offset: 2px; }
```

No colored glow shadows on hover. No backdrop-filter blur on cards (they sit on solid surfaces, not over imagery, except the nav — see below). Card top edge may carry a 2px accent-colored bar that appears on hover only (`scaleX` from 0→1), used sparingly for division cards.

### Navbar

- Fixed top, height 76px desktop / 64px mobile.
- Default state (top of page): transparent background, no border, logo + links in `--text-primary`.
- Scrolled state (after 40px scroll): `background: rgba(6,7,10,0.85)`, `backdrop-filter: blur(12px)`, bottom border `1px solid var(--border-subtle)`. This is the **only** permitted backdrop-blur in the system, capped at 12px.
- Nav links: Inter 500, 14px, `--text-secondary`, hover → `--text-primary` with a 2px accent underline sliding in from left (`transform: scaleX(0→1)`, transform-origin left, 0.3s).
- Active/current section link: `--text-primary` with underline persistent.
- Mobile: hamburger → full-screen `--bg-void` overlay, links in Fraunces 32px, staggered fade-up on open.

### Stats block

Numerals in Fraunces, `--accent` color, large; label beneath in JetBrains Mono uppercase `--text-tertiary`. Numerals count up on scroll-into-view (L2 motion, see §7).

### Tags / badges (division codes, label badges)

```css
.badge {
  display: inline-flex; align-items: center; gap: 6px;
  font: 500 11px/1 var(--font-mono);
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--accent-strong);
  background: var(--accent-wash);
  border: 1px solid var(--accent-dim);
  padding: 6px 10px;
  border-radius: 3px;
}
```

Only ever accent-tinted monochrome — never rainbow per-category colors (a common flyer-ism to avoid).

### Links (inline, footer, contact)

Default `--text-secondary`, underline on hover (`text-decoration: underline; text-decoration-color: var(--accent)`), transition color to `--text-primary`.

### Forms (contact section)

```css
.input {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: 4px;
  padding: 14px 16px;
  color: var(--text-primary);
  font: 400 15px/1.4 var(--font-body);
}
.input::placeholder { color: var(--text-tertiary); }
.input:focus { border-color: var(--accent); outline: none; box-shadow: 0 0 0 3px var(--accent-wash); }
.input:invalid:not(:placeholder-shown) { border-color: #F87171; }
```

---

## 5. Layout Principles

- **Container:** max-width 1280px, side padding 24px mobile / 48px tablet / 80px desktop.
- **Grid:** 12-column implicit via Tailwind; division cards 2-col desktop / 1-col mobile; achievements/portfolio 3-col desktop / 2-col tablet / 1-col mobile (bento-style: first item spans 2 cols).
- **Vertical rhythm:** section padding-block 120px desktop / 64px mobile. Sub-block gaps use an 8px-based scale: 8, 16, 24, 32, 48, 64, 96.
- **Section separation:** alternate `--bg-void` and `--bg-base` with a hairline `border-top: 1px solid var(--border-subtle)` at each seam — no gradients between sections.
- **Eyebrow + H2 pattern:** every section opens with a mono uppercase eyebrow (e.g. "// 01 DIVISIONS") in `--accent-strong`, then Fraunces H2, then a max-60ch supporting sentence in `--text-secondary`. This eyebrow/H2 pattern is the section-title signature across the whole site.

**Floating panel containers (new, from eloqwnt reference):** major sections (Divisions, Achievements) are wrapped in a single outer panel — `background: var(--bg-elevated)`, `border-radius: 24px`, generous internal padding (64px desktop / 32px mobile), sitting with visible top/bottom margin against the page's `--bg-void`/`--bg-base` so the rounded edges read clearly. This replaces the previous flat full-bleed section treatment for these two sections only; Ventures/About/Contact/Footer keep the existing flat full-bleed pattern from before — don't apply the panel treatment everywhere or it loses its signature effect.

**Case-study row pattern (new — replaces the current Division card internals):**
Each division becomes one row inside the Divisions panel, alternating image-left/copy-right and copy-left/image-right on desktop (always image-below-copy on mobile, stacked). Row anatomy, top to bottom / left to right:
1. Mono eyebrow: `"{industry/category}, {location or code}"` e.g. `"AUDIOVISUAL PRODUCTION, DUBAI"`.
2. Fraunces H3, division name (e.g. "COMCOM Studios").
3. 2–3 sentence description, `--text-secondary`.
4. **3 inline stat numbers** in a row — Fraunces numeral (32–40px) in `--text-primary` (not accent, to avoid over-using the signal color across many rows) with a small mono label beneath each, gap 32px between stats.
5. "Explore →" link, `--text-primary`, arrow translates 4px right on hover.
6. Image/mockup panel: division's photo treated as a rounded-16px inset card, not full-bleed — this is a deliberate departure from the reference's raw device-mockup screenshots, since COMCOM divisions are shown via photography, not app UI.

Row-to-row divider: a hairline `--border-subtle` rule, not a background color change (panels stay one continuous surface).

**Marquee stat ticker (new):** a thin full-width strip directly beneath the hero, `--bg-base` background, `--border-subtle` top/bottom border, containing short achievement strings (e.g. "/ 6 SPECIALIZED DIVISIONS", "/ 3,500+ EVENT ATTENDEES", "/ UAE FREE ZONE ACCREDITED") repeating in a seamless CSS `translateX` loop — see §7 for animation spec. Text: mono, uppercase, `--text-secondary`, 13px.

**Numbered services-style list (optional pattern, applies if/when a Capabilities-style section is surfaced on the page):** single column, each row = 2-digit mono index + Fraunces label + right-aligned arrow icon, full-width hairline divider between rows, whole row highights (label color shifts to `--accent-strong`, arrow translates right 4px) on hover — no card background change, this list stays flat/borderless except the dividers.

---

## 6. Depth & Elevation

No colored glows. Elevation communicated by:
1. Surface lightness step (`--bg-void` → `--bg-base` → `--bg-elevated` → `--bg-elevated-2`).
2. Border brightness step (`subtle` → `default` → `strong`).
3. Neutral, low-opacity black shadows only, for cards that need to visually lift off imagery:

```css
--shadow-sm: 0 2px 8px -2px rgba(0,0,0,0.4);
--shadow-md: 0 12px 32px -8px rgba(0,0,0,0.5);
--shadow-lg: 0 24px 64px -16px rgba(0,0,0,0.6);
```

Modals/overlays (ProjectModal) use `--overlay-scrim` backdrop + `--shadow-lg` on the panel, panel background `--bg-elevated`.

---

## 7. Animation & Interaction — **Level L2 (Fluid Interaction)**

Rationale: a holding-company site should feel controlled and confident, not a spectacle (no L3 pinning/WebGL) — but static (L1) undersells the "engineered experiences" positioning. L2 gives scroll-reveal, a scroll-aware nav, subtle parallax, and count-up stats.

**Global rules:**
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` ("expo-out") for entrances; `ease` for hovers.
- All scroll-reveal via `IntersectionObserver`, threshold 0.15, `fadeInUp` (opacity 0→1, translateY 24px→0), stagger 80ms between siblings, duration 600ms.
- Respect `prefers-reduced-motion: reduce` — disable all transform-based reveals and count-ups; fall back to instant opacity fade only.

**Signature moments (6 required categories):**

1. **Hero H1 text animation** — the H1 renders with a `clip-path` mask-reveal per line (lines slide up from behind a mask, 700ms, staggered 120ms) on page load. The one accent-colored word ("Unforgettable") gets a 1.5s delayed subtle underline-draw (`stroke-dashoffset` style SVG underline or `background-size` sweep) after the mask reveal completes.
2. **Section H2 scroll animation** — `BlurText`-style: H2 enters on scroll with blur(6px)→blur(0) + opacity 0→1 + translateY 12px→0, 500ms.
3. **Body/eyebrow text** — eyebrow labels animate with a simple `ScrollReveal` fade+letter-spacing tighten (0.22em→0.14em) on scroll-into-view, 400ms.
4. **Element-level interaction** — primary CTA buttons get a magnetic hover (cursor-follow translate up to 6px within button bounds, rAF-throttled, `matchMedia('(hover: hover)')` gated) + a `ClickSpark`-style tiny particle burst (4–6 dots, accent color, radiate + fade, 400ms) on click.
5. **Interactive component** — Portfolio/Achievements grid uses a `SpotlightCard` pattern: each card tracks pointer via `--mx/--my` CSS vars driving a `radial-gradient(circle at var(--mx) var(--my), var(--accent-wash), transparent 60%)` overlay on hover (rAF throttled).
6. **Background ambience** — Hero background: a very restrained `Aurora`-style layer — two large soft radial gradients in `--accent-dim`/`--bg-elevated` tones, slow 20s ease-in-out drift via CSS `@keyframes` transform translate, opacity capped at 0.25, positioned behind hero content, `will-change: transform`, paused via IntersectionObserver when hero scrolls out of view.

**Nav scroll behavior:** background/blur transition described in §4, plus link underline transitions to indicate active section (IntersectionObserver on section ids).

**Stats count-up:** on scroll into view, animate numeral from 0 to target over 1200ms with expo-out easing (`requestAnimationFrame`, not a library dependency needed).

**Parallax:** hero background aurora layer and hero image (if any) move at 0.9x scroll speed max — subtle, never more than 40px total travel.

**Reduced motion fallback:** all of the above degrade to plain opacity fade-in, no blur/translate/parallax/magnetic/spark; aurora background becomes static (no drift animation).

**New patterns from the eloqwnt reference (still L2, no new library dependency):**

- **Marquee ticker:** pure CSS, two duplicated `<span>` groups inside a `flex` track animated with `@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`, `animation: marquee 28s linear infinite`. Pauses on `:hover` (`animation-play-state: paused`) for accessibility/readability, and freezes entirely under `prefers-reduced-motion` (shows a static, non-scrolling row instead — never leave a long ticker running for reduced-motion users).
- **Case-study row reveal:** each division row fades/slides in as a whole (opacity 0→1, translateY 32px→0, 700ms expo-out) via `IntersectionObserver`, threshold 0.2; the row's image and copy animate together (no separate stagger between them — the reference's rows commit as one block, which reads calmer than staggering every sub-element).
- **Stat numerals inside rows:** count up on scroll-into-view exactly like the Hero stats (§7 rule already defined), reused here for consistency.
- **FAQ accordion:** `+`/rotate-45°-to-`×` icon transition (200ms), answer panel expands via `max-height` transition (or a `<details>`-based CSS-only approach is preferred where feasible — simpler, keyboard-accessible by default), one open at a time.
- **Testimonial carousel:** horizontal `overflow-x: auto` with `scroll-snap-type: x mandatory` and snap points per card (native scroll-snap, no JS carousel library needed) plus optional prev/next buttons that call `scrollBy()`; progress indicator bar width reflects `scrollLeft / scrollWidth`.

---

## 8. Do's and Don'ts

**Do:**
1. Use Fraunces exclusively for headings/display numerals; Inter for everything else; JetBrains Mono only for eyebrows/labels/codes.
2. Keep the accent-magenta usage to signal-only elements (CTA, active states, one hero keyword, stat numerals, badges).
3. Use hairline borders (`--border-subtle`/`--border-default`) to separate surfaces instead of shadows or color jumps.
4. Keep card corners near-square (4–6px radius) to read institutional, not app-like.
5. Lead every major section with the eyebrow + Fraunces H2 pattern for consistent editorial rhythm.
6. Cap backdrop-filter blur usage to the navbar only, at ≤12px.
7. Respect `prefers-reduced-motion` everywhere motion is added.
8. Keep body copy at `--text-secondary`, reserving pure white for headings/emphasis only.
9. Use real photography (Unsplash placeholders provided) treated with a subtle darkening overlay (`linear-gradient(180deg, transparent, rgba(6,7,10,0.6))`) so text stays legible over images — never flat color blocks as image placeholders.

**Don'ts:**
1. No neon magenta/cyan anywhere; no multi-color rainbow badges per category.
2. No glassmorphism-by-default on cards (blur is reserved for the nav only).
3. No pill-shaped buttons.
4. No gradient text or text-glow/text-shadow effects.
5. No large full-bleed color gradients as section backgrounds.
6. No more than one accent-colored focal element visible per viewport.
7. No stock "confetti" or festival-style visual language (light leaks, lens flares, glitter).
8. No animation without an `IntersectionObserver`/reduced-motion guard — nothing should force-play off-screen.
9. Don't mix serif into body copy or sans into big display headlines.
10. Don't copy eloqwnt's light palette, pink-red accent, pill buttons, or raw device-mockup screenshots — only its layout rhythm and motion timing are adopted (see §1, §5, §7).
11. Don't let the marquee ticker run under `prefers-reduced-motion` — freeze it to a static row instead.
12. Don't stagger sub-elements within a single case-study row — reveal the row as one block, not element-by-element (that staggering is reserved for grids of separate cards, e.g. Ventures/Portfolio).

---

## 9. Responsive Behavior

**Breakpoints:** mobile <640px, tablet 640–1024px, desktop >1024px (Tailwind defaults `sm/md/lg/xl`).

- **Navbar:** desktop full link row; ≤1024px collapses to hamburger → fullscreen overlay menu (Fraunces 32px links, staggered fade-up).
- **Hero:** H1 88px→44px, stat row goes from 4-across to 2×2 grid on mobile, CTA buttons stack full-width ≤480px.
- **Division/Ventures cards:** 2-col desktop → 1-col ≤768px; card padding 32px→24px.
- **Portfolio/Achievements bento grid:** 3-col (first item 2-col span) desktop → 2-col tablet → 1-col mobile (span resets to 1).
- **Stats:** count-up + parallax disabled below 768px width for perf (replace with simple fade-in), aurora background opacity halved on mobile.
- **Contact form:** two-column (form + info) → single column stacked, info panel first on mobile.
- **Touch targets:** all interactive elements ≥44×44px on touch; magnetic-hover and spotlight-card pointer effects are gated behind `matchMedia('(hover:hover)')` and simply don't run on touch devices.
- **Images:** all `<img>` lazy-loaded, explicit aspect-ratio boxes to prevent layout shift.
- **Case-study rows:** image-left/copy-right alternation collapses to a single order on mobile — copy first, image second, always (never image-first on mobile even if that row was image-left on desktop), for a predictable reading order.
- **Floating panels:** border-radius steps down from 24px desktop to 16px mobile; outer margin against the page background steps down from ~48px to ~20px so panels don't look cramped at small widths.
- **Marquee ticker:** font-size and gap between repeated items shrink slightly on mobile (13px→12px) but the scroll speed (28s loop) stays constant so it doesn't feel rushed on narrow screens.
