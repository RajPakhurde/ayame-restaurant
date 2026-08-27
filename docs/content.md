# Content — Ayame Landing Page

All real business details below are confirmed from public sources (Instagram, Zomato, District, Swiggy). Menu items are **placeholder examples** — swap for the real menu before treating this as anything other than a portfolio demo.

---

## Business Info (real)
- **Name:** Ayame
- **Phone:** +91 99679 33447
- **Address:** Sai Sagar Complex, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra
- **Hours:** 12 PM – 1:30 AM, daily
- **Note:** Cover charges applicable
- **Instagram:** [@ayamenavimumbai](https://www.instagram.com/ayamenavimumbai)
- **Tagline (their own words):** "Modern Asian artistry. Designed for those who linger."

---

## Hero
- Eyebrow: `MODERN ASIAN LOUNGE · CBD BELAPUR`
- Headline: `Designed for those who linger.`
- Primary CTA: `Reserve a Table`
- Secondary link: `View Menu`

## About
> Ayame is a modern Asian lounge built for slow evenings — sushi and small plates served with quiet precision, in a room designed to be noticed. Come for a date, a celebration, or just to sit a while longer than planned.

*(2–3 sentences, matches the "linger" theme from their tagline. Adjust once you have real ambience photos to write toward.)*

## Menu Highlights
*(Placeholder examples — replace with real dishes/prices)*

```js
// src/data/menuItems.js
export const menuItems = [
  { name: "Yuzu Salmon Nigiri", description: "Torched salmon, yuzu kosho, micro shiso", price: "₹650" },
  { name: "Ayame Signature Roll", description: "Prawn tempura, avocado, spicy mayo, tobiko", price: "₹725" },
  { name: "Iris Old Fashioned", description: "House infusion, smoked orange, bitters", price: "₹850" },
  { name: "Miso Black Cod", description: "48-hour marinated, charred edge, bok choy", price: "₹1,150" },
  { name: "Truffle Edamame", description: "Steamed edamame, truffle salt, chili oil", price: "₹450" },
  { name: "Matcha Tiramisu", description: "Ceremonial matcha, mascarpone, cocoa dust", price: "₹495" },
];
```
CTA below grid: `See Full Menu` → link out to Zomato/Swiggy listing or a PDF.

## Gallery
*(Captions only — swap in real photography; do not scrape Instagram images without permission)*

```js
// src/data/galleryImages.js
export const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Ayame dining room at night", caption: "The main room" },
  { src: "/images/gallery-2.jpg", alt: "Sushi platter close-up", caption: "Yuzu Salmon Nigiri" },
  { src: "/images/gallery-3.jpg", alt: "Bar and cocktail preparation", caption: "The bar" },
  { src: "/images/gallery-4.jpg", alt: "Private booth seating", caption: "Booth seating" },
  { src: "/images/gallery-5.jpg", alt: "Signature cocktail on marble table", caption: "Iris Old Fashioned" },
  { src: "/images/gallery-6.jpg", alt: "Entrance and signage at dusk", caption: "Entrance" },
];
```

## Info Bar
| Icon | Label | Value |
|---|---|---|
| Clock | Hours | 12 PM – 1:30 AM |
| Map Pin | Location | CBD Belapur, Sector 15 |
| Phone | Reservations | +91 99679 33447 |
| Note | — | Cover charges applicable |

## Reserve
- Section heading: `Reserve a table`
- Form fields: Name, Phone, Date, Time, Party size (number), Submit button label: `Request Reservation`
- Helper line below form: `Prefer to call? +91 99679 33447`
- Map: embed iframe pointed at "Sai Sagar Complex, Sector 15, CBD Belapur, Navi Mumbai"

## Footer
- `@ayamenavimumbai` (linked, prominent)
- Repeat nav: Menu / Reserve / Contact
- Small iris watermark mark
- Credit line: `Concept design & build by [Your Name] — portfolio project, not affiliated with Ayame.`

> **Important:** Keep that footer credit line. Since this is a demo built without the restaurant's involvement, it should never read as their official site.
