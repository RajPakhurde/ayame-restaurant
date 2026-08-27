# Tech Stack — Ayame Landing Page

## Core
- **React 18** via **Vite** (fast dev server, minimal config, no need for Next.js since this is a single static page with no routing/SSR needs)
- **Plain CSS with CSS variables** (tokens.css) — no Tailwind, no MUI/Chakra. This is a design-showcase piece; hand-rolled CSS reads as more intentional and avoids "component library" sameness.
- **No global state library** — `useState`/`useRef` per component is sufficient.

## Fonts
- Google Fonts: `Fraunces` (display) + `Inter` (body). Load via `<link>` in `index.html` with `display=swap`, or self-host if you want a Lighthouse-perfect score.

## Animations
- **No animation library.** Use:
  - CSS transitions for hover states
  - A small custom `useScrollReveal` hook wrapping native `IntersectionObserver` for scroll-triggered reveals
  - Respect `prefers-reduced-motion` media query — disable non-essential motion for users who request it

## Forms
Reservation form needs somewhere to send submissions since there's no backend. Pick one:
| Option | Effort | Notes |
|---|---|---|
| **Formspree** (recommended) | Low | Free tier, just point form `action` at their endpoint, real emails land in your inbox |
| Getform | Low | Similar to Formspree |
| `mailto:` link | Zero | Works but feels unpolished, opens user's email client |
| Custom serverless function (Vercel Function) | Medium | Only worth it if you want to demonstrate backend/API skills too |

## Maps
- Google Maps **embed iframe** (no API key needed for basic embed) pointed at the CBD Belapur address. No need for `@react-google-maps/api` — overkill for a static pin.

## Images
- Store in `src/assets/` (imported, so Vite hashes/optimizes them) or `public/` if you want direct paths.
- Use `.webp` where possible for weight; provide `alt` text on every image.
- Lazy-load gallery images (`loading="lazy"`).

## Icons
- `lucide-react` — lightweight, tree-shakeable, matches a clean editorial look. Used only for the info bar (clock, pin, phone icons) — don't over-icon the page.

## Linting / formatting
- ESLint (Vite's default React template) + Prettier. Not critical for a portfolio piece but signals code hygiene if someone views the repo.

## Deployment
- **Vercel** or **Netlify** — connect GitHub repo, auto-deploy on push. Both have generous free tiers and give you a shareable URL for the portfolio link.

## package.json — expected core dependencies
```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "lucide-react": "^0.3xx"
  },
  "devDependencies": {
    "vite": "^5.x",
    "@vitejs/plugin-react": "^4.x",
    "eslint": "^8.x"
  }
}
```

## Browser support target
- Latest 2 versions of Chrome, Safari, Firefox, Edge. No IE/legacy support needed.
