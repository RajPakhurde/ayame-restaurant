# Design System — Ayame Landing Page

## Direction
Premium, moody, restrained. This is an upscale Asian fusion **lounge**, not a casual eatery — the design should feel like it belongs to a place with a cover charge. Avoid generic "restaurant template" defaults: no warm-cream + terracotta palette, no stock steam-rising food photography, no script fonts.

**Motif:** *Ayame* means "iris" (the flower) in Japanese. Use a single iris-purple accent against near-black as the signature color move, plus one line-drawing iris illustration as the page's one memorable visual flourish. Avoid the expected red/gold Asian-restaurant cliché.

## Color Tokens
```css
:root {
  --bg-void: #0B0A0D;      /* page background — near-black, violet undertone */
  --bg-panel: #141217;     /* card / section surfaces */
  --iris: #8B6FD9;         /* primary accent — signature color, use sparingly */
  --iris-dim: #5A4A85;     /* muted accent — dividers, borders */
  --paper: #EDEAE4;        /* primary text on dark */
  --paper-dim: #9C9793;    /* secondary / muted text */
  --gold-thread: #C9A24B;  /* micro-accent only — prices, one hairline rule */
}
```
Rules:
- Never use pure `#000` or `#FFF`.
- `--gold-thread` is a *thread*, not a fill — text and thin rules only, never a background or button color.
- `--iris` should appear in maybe 3–4 places total on the page (CTA button, hero eyebrow, one hover state, signature SVG) — if it starts feeling like it's everywhere, pull it back.

## Typography
| Role | Face | Notes |
|---|---|---|
| Display | Fraunces | Hero headline, section headings. Tight tracking, large sizes. |
| Body | Inter | Descriptions, form labels, paragraph copy. |
| Label/Utility | Inter, uppercase | Eyebrows, info-bar labels. Small size, letter-spacing 0.12em+. |

**Type scale (desktop → mobile):**
| Element | Desktop | Mobile |
|---|---|---|
| Hero headline | 88px | 40px |
| Section heading | 40px | 28px |
| Subhead | 22px | 18px |
| Body | 17px | 16px |
| Label | 12px | 11px |

Line-height: 1.1 for display type, 1.5–1.6 for body.

## Layout Principles
- Full-bleed sections, generous vertical rhythm (min 96px section padding on desktop, 56px mobile).
- **Asymmetric grids** — avoid perfectly centered, evenly-spaced everything. E.g. About section is a 55/45 or 60/40 split, not 50/50.
- Sections divided by a single hairline rule (`1px solid var(--iris-dim)`), not color blocks or heavy shadows.
- Max content width ~1280px, but hero and gallery can go full-bleed edge to edge.

## Signature Element
One thin, single-stroke SVG line drawing of an iris flower:
- Appears large and bleeding off-frame in the hero (low opacity, decorative, behind or beside the headline)
- Reappears tiny (as a watermark/monogram) in the footer
- This is the **one** place to spend visual boldness — everything else on the page stays quiet and typographic.

## Motion Rules
- Hero text: fade + rise on initial load, once only (not looping, not on every scroll back up).
- Scroll reveals: section headings/content fade + rise 12px as they enter viewport, via `IntersectionObserver`. Keep the offset small and quick (~400ms ease-out) — this should read as polish, not a slideshow.
- Gallery hover: subtle scale (1.0 → 1.03) + caption fade-in. No rotation, no bounce.
- **Always respect `prefers-reduced-motion: reduce`** — disable transform/fade animations, keep only opacity or instant state changes.

## Iconography
- `lucide-react`, used only in the Info Bar (clock, map-pin, phone). Don't add icons elsewhere just to fill space — this page's visual interest comes from type and photography, not iconography.

## Imagery Style
- Dark, moody, high-contrast food and interior photography — avoid bright, evenly-lit "menu photo" style shots.
- Consistent color grading across all images (slight cool/violet tint) so the gallery feels curated, not stock-mixed.

## Accessibility Baseline (non-negotiable)
- Text contrast: `--paper` on `--bg-void` passes AA; verify `--paper-dim` and `--gold-thread` against dark backgrounds too.
- Visible focus states on every interactive element (button, link, form field) — a subtle `--iris` outline works well here.
- All images have descriptive `alt` text (not "image1.jpg").
- Form inputs have real `<label>` elements, not just placeholder text.
- Reduced motion respected (see Motion Rules above).

## Self-Critique Checklist (run before calling it done)
- [ ] Does any part of this look like it could be swapped onto a different restaurant with zero changes? If yes, make it more specific to Ayame.
- [ ] Is `--iris` used with restraint, or has it crept into being a default color everywhere?
- [ ] Have I removed one accessory? (Chanel rule — cut the least necessary decorative element.)
- [ ] Does the hero say something true and specific about Ayame, not a generic restaurant hero?
