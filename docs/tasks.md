# Tasks — Ayame Landing Page

Ordered checklist. Work top to bottom; don't jump to polish (animation, responsive edge cases) before structure and content are real.

## 0. Setup
- [x] `npm create vite@latest ayame-landing -- --template react`
- [x] Install `lucide-react`
- [x] Add Fraunces + Inter via Google Fonts link in `index.html`
- [x] Create folder structure: `components/`, `hooks/`, `data/`, `styles/`, `assets/`
- [x] Create `styles/tokens.css` with color/type variables from `design_system.md`
- [x] Create `styles/global.css` with resets, base typography, box-sizing

## 1. Static Layout (no data, no animation)
- [x] `Hero.jsx` — static markup + placeholder background image
- [x] `About.jsx` — static two-column layout
- [x] `MenuHighlights.jsx` + `MenuCard.jsx` — static grid, 1–2 hardcoded cards to check styling
- [x] `Gallery.jsx` + `GalleryItem.jsx` — static grid, placeholder images
- [x] `InfoBar.jsx` — static four-item strip
- [x] `ReserveForm.jsx` — static form markup, no submit logic yet
- [x] `Footer.jsx` — static markup
- [x] `IrisMark.jsx` — placeholder SVG (can be a simple circle for now, swap later)
- [x] Assemble all sections in `App.jsx` in correct order
- [x] Sanity check: does the page look like *something*, spacing roughly right, before adding real content?

## 2. Real Content
- [x] Wire real hero copy from `content.md`
- [x] Wire real About copy
- [x] Move menu items into `data/menuItems.js`, render `MenuHighlights` from that array
- [x] Move gallery images into `data/galleryImages.js`, render `Gallery` from that array
- [x] Wire real business info into `InfoBar`
- [x] Wire footer credit line + Instagram link

## 3. Signature Element
- [x] Source or hand-draw a single-stroke iris line-art SVG
- [x] Place large version bleeding off-frame in Hero (low opacity, decorative)
- [x] Place small version as watermark in Footer

## 4. Interactivity
- [x] Reserve form: controlled inputs via `useState`
- [x] Decide + wire form submission target (Formspree recommended — see `tech_stack.md`)
- [x] Form validation: required fields, basic phone/date format check
- [x] Success/error state shown to user after submit (no silent failures)
- [x] Embed Google Maps iframe with correct address in Reserve section
- [x] Anchor nav: Hero CTAs and Footer nav scroll to correct sections (`scrollIntoView` or anchor links)

## 5. Animation Pass
- [x] Build `useScrollReveal` hook (IntersectionObserver wrapper)
- [x] Apply scroll-reveal to section headings across About / Menu / Gallery / Info Bar / Reserve
- [x] Hero load-in animation (fade + rise, once)
- [x] Gallery hover: scale + caption fade-in
- [x] Add `prefers-reduced-motion` media query override — disable transforms/fades for users who request it
- [x] Sanity check: turn on "reduce motion" in OS settings and re-test the page

## 6. Responsive Pass
- [x] Test and fix at 1200px, 768px, 480px breakpoints (see `design_system.md` type scale + `project_brief.md` layout notes)
- [x] Hero: headline scales down, CTAs stack vertically on mobile
- [x] About: stacks to single column on mobile
- [x] Menu cards: 2-col → 1-col on mobile
- [x] Gallery: masonry → simple 2-col grid on mobile
- [x] Info bar: horizontal strip → stacked list on mobile
- [x] Reserve: form/map stack vertically on mobile

## 7. Accessibility Pass
- [x] All images have descriptive `alt` text
- [x] Form has real `<label>` elements tied to inputs (not placeholder-only)
- [x] Keyboard-only pass: can you reach and activate every interactive element with Tab/Enter?
- [x] Visible focus outline on all interactive elements (using `--iris`)
- [x] Check color contrast for `--paper-dim` and `--gold-thread` against `--bg-void`
- [x] Run Lighthouse accessibility audit, fix flagged issues

## 8. Final Polish & Self-Critique
- [x] Run through `design_system.md` Self-Critique Checklist
- [x] Swap all placeholder images for final assets
- [x] Replace placeholder menu items with real menu (or clearly keep as labeled concept data)
- [x] Proofread all copy
- [x] Confirm footer credit line is present and accurate ("concept project, not affiliated with Ayame")
- [x] Test on an actual mobile device, not just devtools

## 9. Deploy
- [x] Push to GitHub
- [ ] Connect repo to Vercel or Netlify
- [ ] Verify deployed site matches local build
- [ ] Add live link + screenshots to portfolio
