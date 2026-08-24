# Enseigner Brand Guidelines v1.2

> Last updated: 2026-08-24 (v1.2)
> Status: Draft — reflects the site as it stands after the GCC refocus (Website Brief, Aug 2026)
> Owner: design/development team · questions route to Abu

## Quick Reference

| Element | Value |
|---------|-------|
| Primary Color | #C9A84C |
| Secondary Color | #080D16 |
| Accent Color | #1A9E6D |
| Primary Font | Geist |
| Voice | Precise, Grounded, Operational, Unhyped |

**Positioning in one line:** AI-enabled. Infrastructure-led. GCC-focused, India-proven.

---

## 0. What Changed, and Why It Matters

Enseigner repositioned in August 2026 from a security-systems integrator to an
AI-and-infrastructure company for the GCC. This is not a tone adjustment — it is a
licensing constraint. **Enseigner does not hold a license to operate security systems
in the UAE/GCC.** Copy that markets CCTV, access control, intrusion, or public address
as an Enseigner service is not merely off-brand; it describes work the company cannot
legally sell in this market.

The brand now leads with five core offerings:

1. AI Services & Agentic AI (includes the chatbot)
2. Computer Vision — positioned under AI / Intelligent Operations, **never** under security
3. Track 3D
4. Hospital Management
5. Training Services (formerly "AMC" — the block was reworded, not removed)

Supported by a retained infrastructure foundation: Enterprise Data Centre, Managed
Services, Structured Cabling.

---

## 1. Color Palette

The live site (`components/figma-site/EnseignerCorporateSite.tsx`) carries its own palette
as CSS custom properties on a `themeVars` object, in two modes. These `--site-*` values are
the brand palette. See §7 for the conflict with `app/globals.css`.

### Primary Colors

Enseigner Gold. The single accent that carries the brand — used for CTAs, section labels,
rules, metric numerals, and hover states. Deployed sparingly against a dark ground.

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Gold | #C9A84C | rgb(201,168,76) | CTAs, section labels, key numerals, dividers |
| Gold Dark | #B99032 | rgb(185,144,50) | Light-mode gold — **see accessibility note** |
| Gold Light | #DBB85A | rgb(219,184,90) | Hover state on primary buttons |

### Secondary Colors

The near-black navy ground. Enseigner reads as an engineering company because the page is
mostly dark, dense, and quiet — the ground does as much brand work as the gold.

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Ground | #080D16 | rgb(8,13,22) | Page background (dark mode) |
| Ground Deep | #060B13 | rgb(6,11,19) | Alternating section bands |
| Surface | #0C1422 | rgb(12,20,34) | Cards, panels |
| Surface Raised | #0F1A28 | rgb(15,26,40) | Card hover / active state |

### Accent Colors

Status signalling only, inside the intelligent-operations module grid. Never decorative.

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Signal Green | #1A9E6D | rgb(26,158,109) | On-premise / private / healthy status |
| Signal Blue | #2A7AB5 | rgb(42,122,181) | Compliant / AIOps status |
| Signal Amber | #D4A017 | rgb(212,160,23) | Caution indicator |
| Signal Red | #C0392B | rgb(192,57,43) | Fault indicator |

### Neutral Palette

| Name | Dark Mode | Light Mode | Usage |
|------|-----------|------------|-------|
| Text | #DCE8F5 | #172331 | Headings, body copy |
| Muted | #7A90A8 | #53677D | Supporting copy, captions |
| Background | #080D16 | #F4F7FB | Page ground |
| Background Deep | #060B13 | #E9EEF5 | Alternating bands |
| Card | #0C1422 | #FFFFFF | Panels |
| Divider | rgba(243,210,113,0.5) | rgba(199,146,20,0.55) | Gold-tinted hairlines between cards |

### Accessibility

Measured contrast ratios (WCAG 2.1), computed against the palette above:

| Pair | Ratio | Grade |
|------|-------|-------|
| Text on Ground (dark) | 15.66:1 | AAA |
| Text on Surface (dark) | 14.84:1 | AAA |
| Muted on Ground (dark) | 5.91:1 | AA |
| Gold on Ground (dark) | 8.51:1 | AAA |
| Ground on Gold — primary button (dark) | 8.51:1 | AAA |
| Text on Background (light) | 14.79:1 | AAA |
| Muted on Background (light) | 5.42:1 | AA |
| **Gold Dark on Background (light)** | **2.75:1** | **FAIL** |
| **Background on Gold Dark — primary button (light)** | **2.75:1** | **FAIL** |

**Known defect — light mode gold fails AA.** Every gold-on-light pairing falls below the
4.5:1 threshold, including the primary button and every section label. Dark mode is fully
compliant; light mode is not. Two options when this is scheduled:

- To pass AA for normal text: darken to **#8C6D26** (4.51:1 on `#F4F7FB`, 4.85:1 on white).
- To pass AA for large text only (18px+/bold): **#B08930** (3.02:1) — insufficient for the
  12px mono section labels, which are the most common gold element on the page.

Recommended: `#8C6D26` for light-mode text and button fills, keeping `#B99032` for
decorative rules and borders where contrast rules do not apply.

---

## 2. Typography

### Font Stack

Declared in `app/layout.tsx` via `next/font/google`:

```css
--font-geist-sans: 'Geist', system-ui, -apple-system, sans-serif;
--font-geist-mono: 'Geist Mono', ui-monospace, SFMono-Regular, monospace;
```

Wired in `tailwind.config.ts` under `theme.extend.fontFamily`, so `font-sans` and `font-mono`
both resolve to the loaded Geist faces. `globals.css` must **not** hard-set `font-family` —
doing so is what previously stranded the site on Arial.

```ts
// tailwind.config.ts → theme.extend
fontFamily: {
  sans: ['var(--font-geist-sans)', 'system-ui', '-apple-system', 'sans-serif'],
  mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
}
```

### Type Scale

One ramp, twelve steps. Display roles are fluid `clamp()`; everything below 24px is a fixed
Tailwind step. Headings are uniformly `font-black` (900), uppercase, and tightly tracked —
that weight-plus-uppercase combination is the strongest brand signal after the gold.

| Role | Class | Desktop | Mobile | Weight | Usage |
|------|-------|---------|--------|--------|-------|
| Display 1 | `text-[clamp(2.5rem,5vw,4rem)]` | 64px | 40px | 900 | Page-level titles: hero, final CTA, reference index |
| Display 2 | `text-[clamp(2rem,4vw,3rem)]` | 48px | 32px | 900 | Section headings, article titles |
| Display 3 | `text-[clamp(1.5rem,3vw,2.25rem)]` | 36px | 24px | 900 | Subsection headings |
| Numeral L | `text-5xl` | 48px | 48px | 900 | Metric tiles (aligns to Display 2 max) |
| Numeral M | `text-4xl` | 36px | 36px | 900 | Hero stats, module values (aligns to Display 3 max) |
| Heading 4 | `text-2xl` | 24px | 24px | 900 | Card titles; pull quotes at weight 700, italic |
| Heading 5 | `text-xl` | 20px | 20px | 900 | Secondary card titles |
| Body Large | `text-lg` | 18px | 18px | 400 | Lead paragraphs |
| Body | `text-base` | 16px | 16px | 400 | Standard body copy |
| Body Small | `text-sm` | 14px | 14px | 400 | Dense supporting copy, meta |
| Label | `text-xs` | 12px | 12px | 400–700 | Mono labels, codes, tags, section labels |
| Micro | `text-[10px]` | 10px | 10px | 400 | Mono status chips only |

### Rules

- **Use the ramp.** No new arbitrary `text-[Npx]` values and no new `clamp()` variants.
  The one permitted arbitrary size is the 10px status chip.
- Headings are **always** uppercase and `font-black`. No sentence-case headings.
- Mono is reserved for labels, codes (`AI-01`, `IND-04`), status chips, and metadata —
  never for body copy.
- Body copy is never uppercase and never bold for emphasis; use the gold colour instead.
- Line length caps at `max-w-xl`/`max-w-2xl` for body, `max-w-3xl`/`max-w-4xl` for lead-ins.
- Numerals sit on the same ramp as the display sizes by design — a 48px metric and a 48px
  section heading are intentionally equal weight in the page hierarchy.

---

## 3. Logo Usage

### Variants

| Variant | File | Use Case |
|---------|------|----------|
| Primary (transparent) | `public/enseigner-logo-transparent.png` | Site header and footer |
| Standard | `public/enseigner-logo.png` | Light backgrounds |
| Alternate | `public/Enseigner_Logo.png` | Legacy — audit before use |
| Source | `Logo_Enseigner.png` (repo root) | Master file, not shipped |

Intrinsic dimensions: 1081 × 223 (≈4.85:1 horizontal lockup).

### Rendering

On dark grounds the logo is inverted in CSS rather than swapped for a separate asset:

```tsx
className={themeMode === "dark" ? "brightness-0 invert" : ""}
```

This produces a pure-white mark. It is a workaround, not a designed variant — a proper
white-on-transparent asset should replace it.

### Sizing

| Context | Height |
|---------|--------|
| Header (mobile) | 32px |
| Header (desktop) | 36px |
| Footer | 28px |
| Minimum digital | 24px height |

### Clear Space

Minimum clear space on all sides = the cap height of the wordmark.

### Don'ts

- Don't rotate, skew, or re-proportion the lockup.
- Don't recolour outside white (dark grounds) or the supplied original (light grounds).
- Don't add shadows, glows, or outlines.
- Don't place over the hero photograph without the overlay gradient behind it.
- Don't reconstruct the wordmark by typing "Enseigner" in Geist or Arial.

---

## 4. Voice & Tone

### Brand Personality

| Trait | Description |
|-------|-------------|
| **Precise** | Named systems, real numbers, specific sectors. Never a vague capability claim. |
| **Grounded** | Every claim traces to delivered work. Credibility comes from execution history, not adjectives. |
| **Operational** | Speaks to the person accountable for uptime, not to a boardroom. |
| **Unhyped** | Confident and flat. The scale of the numbers carries the persuasion. |

### Voice Chart

| Trait | We Are | We Are Not |
|-------|--------|------------|
| Precise | Specific, quantified | Hand-waving, "solutions-oriented" |
| Grounded | Evidence-led, verifiable | Aspirational, visionary-for-its-own-sake |
| Operational | Practical, execution-focused | Abstract, strategy-deck |
| Unhyped | Measured, plain | Breathless, superlative-stacked |

### Tone by Context

| Context | Tone | Example |
|---------|------|---------|
| Hero / headline | Declarative, structural | "Engineering Intelligent Enterprise Infrastructure For the GCC" |
| Offering copy | Concrete, mechanism-first | "Classifies, routes, and summarizes service requests." |
| Reference projects | Factual, restrained | "Muthoot Finance — 3,700 branches." |
| Contact / CTA | Direct, low-friction | "Talk to an Expert" |

### Writing Rules

- Lead with the mechanism, then the outcome. "Agents act across the systems that hold the
  answer" beats "transformative AI-driven efficiency."
- Quantify or cut. `70–80% deflection`, `12+ years`, `10,000+ deployments`, `200+ OEMs`.
- British-leaning enterprise spelling, used consistently: *centre*, *modernise*,
  *organisation*, *analyse*. (Note: `-ize` appears in a few places; standardise on `-ise`.)
- Sentences carry one idea. Em dashes for the qualifying clause, not commas stacked three deep.
- Address the operator, not the market.

### Prohibited Terms

| Avoid | Reason |
|-------|--------|
| Security Systems, CCTV, surveillance, video surveillance | No UAE/GCC license to operate. Legal exposure, not style. |
| Access Control, intrusion alarm, biometric access | Removed offering (Website Brief, s.5). |
| PA, Public Address, voice evacuation, command centre (as a product) | Removed offering. |
| Fire alarm, fire & safety | Tied to removed offerings. |
| Security-first | Superseded positioning. Use "AI-enabled" or "Infrastructure-led". |
| AMC, Annual Maintenance Contract | Reworded to "Training Services" (Website Brief, s.4). |
| Hikvision, Axis, HID, Suprema, TOA, Ahuja, Bosch, Honeywell | Surveillance/access/PA OEMs — removed from partner listings. |
| Seamless, cutting-edge, revolutionary, best-in-class | Unhyped voice; unverifiable. |
| Leverage (verb), synergy, holistic | Corporate filler. Use "use". |

### Approved Vocabulary

Agentic AI · AI Services · Computer Vision · Track 3D · Hospital Management ·
Training Services · Enterprise Data Centre · Managed Services · Structured Cabling ·
Intelligent Operations · On-premise · Data residency · Delivery lifecycle · GCC

---

## 5. Imagery Guidelines

### Photography

- **Subject:** Infrastructure and facilities — data halls, racks, ports, terminals,
  campuses. Equipment and space, not stock people in meetings.
- **Treatment:** Heavily dimmed. The hero image runs at `opacity: 0.22` under a directional
  overlay gradient so the photograph reads as texture, not subject.
- **Colour:** Cool and desaturated. Nothing should compete with the gold.
- **Composition:** Wide, architectural, horizon-led. Depth over close-up detail.

### Structural Motifs

These carry more brand weight than the photography and should be preserved:

- **Grid overlay** — a 48–64px gold-tinted line grid at 2.5–4.5% opacity over section grounds.
- **Gold hairline dividers** — 1px gaps between cards, achieved with a gold-tinted parent
  background and a soft outer glow, rather than borders.
- **Corner brackets** — an L-shaped 40px gold rule on the top-left of metric tiles.
- **Scanline texture** — 2px repeating gradient at ~1.2% opacity in the operations section.

### Icons

- Library: **lucide-react**, no substitutions.
- Stroke width: `1.5` uniformly.
- Sizes: 16px (inline), 18px (contact), 22px (card), 24px (feature).
- Container: 44–48px square with a `1px` gold border at 25–35% opacity. Never filled.

---

## 6. Design Components

### Buttons

| Type | Background | Text | Border | Radius |
|------|------------|------|--------|--------|
| Primary | #C9A84C | #080D16 | none | 0 |
| Primary (hover) | #DBB85A | #080D16 | none | 0 |
| Secondary | transparent | Text | 1px Text @25% | 0 |
| Nav CTA | transparent | #C9A84C | 1px #C9A84C | 0 |

All buttons: uppercase, `font-black`, `tracking-[0.1em]`, 15px, `px-8 py-4`.

**Square corners are a brand rule.** Nothing on the corporate site is rounded except the
theme-toggle control and status dots. `--radius: 0.75rem` in `globals.css` belongs to the
shadcn layer (§7) and must not leak into corporate-site components.

### Cards

| Property | Value |
|----------|-------|
| Background | Surface (#0C1422) |
| Hover | Surface Raised (#0F1A28) |
| Radius | 0 |
| Padding | 24–32px (`p-6` to `p-8`) |
| Separation | 1px gold-tinted grid gap, not borders |
| Min height | 320px for offering cards |

**Ragged grids leave holes.** The hairlines are drawn by a gold parent background showing
through a 1px `gap-px`, so any cell left empty in the final row paints as a solid gold block.
A filler cell only turns that into an empty bordered box, and widening a single card to
absorb the remainder leaves it stretched and half-empty. None of those are acceptable.

Run ragged grids on a **six-column track** and split the row evenly instead:

| Items | Layout | Spans |
|-------|--------|-------|
| 5 | 3 + 2 | first three `col-span-2`, last two `col-span-3` |
| 8 | 6 + 2 | first six `col-span-2`, last two `col-span-3` |

Every card in a row keeps the same width, so the shorter final row reads as a deliberate
change of rhythm rather than a gap. Reset the spans at breakpoints where the count already
divides cleanly — 8 items fit 2 and 4 columns exactly, so `xl:col-span-1` there.

Do not set a fixed `min-height` on grid cards. Grid rows already equalise height per row;
a hard minimum only forces dead space into rows whose copy is short.

### Spacing Scale

Tailwind's default 4px scale. Section rhythm in practice:

| Token | Value | Usage |
|-------|-------|-------|
| sm | 8px | Tag gaps |
| md | 16px | Intra-card spacing |
| lg | 24–32px | Card padding |
| xl | 56px | Section header → content |
| 2xl | 96px (`py-24`) | Standard section vertical padding |
| 3xl | 128px+ | Hero padding |

### Layout

- Container: `max-w-7xl`, `px-5` mobile / `px-8` desktop.
- Sections alternate `--site-bg` and `--site-bg-deep` to band the page.
- Breakpoints: `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280.

---

## 7. Known Inconsistencies

Recorded so they get scheduled rather than rediscovered. None are fixed by this document.

1. **Two parallel colour systems.** `app/globals.css` defines a full shadcn HSL token set
   (`--background`, `--primary`, `--radius`…) in a warm gold/teal scheme. The live one-pager
   ignores all of it and uses the `--site-*` hex palette defined inline in
   `EnseignerCorporateSite.tsx`. The shadcn tokens serve only the dormant routes. Either
   reconcile them or delete the unused set — right now "the brand colour" has two answers.
2. ~~Geist is loaded but unused. The site renders in Arial.~~ **Fixed 2026-08-24** —
   `fontFamily` wired in `tailwind.config.ts`, Arial rule removed from `globals.css`.
3. **Light-mode gold fails WCAG AA** (§1).
4. **Palette lives inside a component.** `themeVars` should be extracted to
   `assets/design-tokens.json` / CSS variables so it is editable without touching TSX.
5. **Dormant routes.** `/about`, `/services`, `/contact`, `/partners`, `/colors` all
   redirect to homepage anchors via `next.config.ts`, but their page components still exist
   and still carry pre-refocus security copy. They are unreachable, not corrected — anyone
   re-enabling a route must scrub it first.
6. **Spelling drift.** `-ise` and `-ize` both appear.

---

## 8. Pending Confirmation

Per the Website Brief, these are **not** locked. Do not fill them in by inference.

| Item | Owner | Status |
|------|-------|--------|
| Final wording for the three featured offerings | Enseigner team | Draft copy in place, marked `COPY PENDING` |
| Track 3D / Hospital Management copy | Enseigner team | Draft copy in place |
| Whether Hospital Management stays in the core five | Enseigner team | In, unless told otherwise |
| Public email address | Ramesh / Kumar | Existing `.in` address retained |
| Dubai phone number (Imran's direct vs Vijay's) | Enseigner team | Existing number retained |
| Technology-partner brand list | Enseigner team | Section holds existing names only |
| Subscribe CTA destination | Enseigner team | Points to `#contact`; chatbot site is a later phase |

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-08-24 | Initial guidelines, extracted from the site following the GCC refocus. Documents the shift away from security-systems positioning, records measured contrast data, and logs six known inconsistencies. |
| 1.2 | 2026-08-24 | Nav overflow fixed (labels shortened, links moved to the 12px label step, desktop breakpoint `lg`→`xl`). Ragged grids rebuilt on a six-column track with even 3+2 / 6+2 rows; fixed card min-height removed so short rows sit snug. |
| 1.1 | 2026-08-24 | Typography unified: Geist wired up and applied; type scale collapsed from 8 heading `clamp()` variants and 8 body sizes to a single 12-step ramp; hero capped at 64px, final CTA reduced from 85px. |
