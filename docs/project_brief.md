# Project Brief — Ayame Landing Page

## What
A single-page React landing site for **Ayame**, a modern Asian fusion lounge in CBD Belapur, Navi Mumbai. Built as a **portfolio demo piece** — not an official commission — to showcase frontend design and React skills. Features a custom tightly-spaced Pinterest-style masonry photo gallery displaying 15 unique, high-resolution food and ambience images, a layout locking Hero elements horizontally to the left 50% column and centering them vertically, a 75% dark overlay mask and softened warm cream typography for optimal legibility, upgraded CTA buttons, a fixed glassmorphic navigation header, glassmorphic Menu Highlights with thin gold-thread borders and floating signature badges, a full menu interactive lightbox modal displaying the high-resolution menu sheets, and premium fluid animations using Framer Motion.

## Why
Portfolio piece #1 of 3 (restaurant category). Goal: demonstrate that I can take a real, existing brand and design a page that could plausibly be pitched to them — strong visual identity, conversion-minded structure (hero → menu → reserve), and clean React code.

## Who it's for
- **Primary audience of the finished page (in-universe):** people who've heard of Ayame or found it on Instagram/Zomato and want hours, menu highlights, vibe, and a way to reserve.
- **Real audience (why I'm building it):** recruiters/clients reviewing my portfolio.

## Success criteria
- [x] Looks intentionally designed, not templated — passes the "could this be mistaken for a Wix theme" test (it should not)
- [x] Fully responsive (desktop / tablet / mobile)
- [x] Accessible: keyboard nav, visible focus states, alt text, reduced-motion respected
- [x] Real business info is accurate (hours, phone, address, cover charge note)
- [x] Clearly labeled as a concept/demo project, not Ayame's official site (footer credit + no live claims like "official website of Ayame")
- [ ] Deployed somewhere shareable (Vercel/Netlify) with a link in my portfolio

## Explicit non-goals
- Not a real ordering/reservation backend — form can submit to Formspree/Getform or just log to console; no payment processing.
- Not scraping or reusing Ayame's actual Instagram photos without permission.
- Not a multi-page site — single scrollable landing page with anchor nav only.
- Not CMS-driven — content lives in local data files (`src/data/`).

## Source material
- Instagram: [@ayamenavimumbai](https://www.instagram.com/ayamenavimumbai) — 2,597 followers, tagline "Modern Asian artistry. Designed for those who linger."
- Confirmed business info: Sai Sagar Complex, Sector 15, CBD Belapur, Navi Mumbai · +91 9967933447 · 12PM–1:30AM · cover charge applicable
- Reviews (Zomato/District) describe it as elegant, polished, sushi-forward, ambience-first — good for date nights and small groups.

## Related docs
- `design_system.md` — colors, type, layout tokens, signature element
- `content.md` — actual copy and data for every section
- `tech_stack.md` — stack choices and setup
- `tasks.md` — build checklist in order
