# Pastoral de la Salud — Design System

> **"El amor que sana"** — The love that heals

A comprehensive design system for the Pastoral de la Salud digital platform, serving the healthcare ministry of the Diocese of Armenia, Colombia.

---

## Quick Start

### 1. Include Design Tokens

```html
<!-- CSS Tokens -->
<link rel="stylesheet" href="tokens/tokens.css">

<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap" rel="stylesheet">
```

### 2. Use Tailwind (Recommended)

Copy `tokens/tailwind.config.js` to your project root and install dependencies:

```bash
npm install -D tailwindcss @tailwindcss/typography @tailwindcss/forms @tailwindcss/aspect-ratio
```

---

## Documentation Structure

```
docs/design/
├── README.md               ← You are here
├── DESIGN-SYSTEM.md        ← Design philosophy & overview
├── STYLE-GUIDE.md          ← Usage guidelines & rules
├── COMPONENTS.md           ← All component specifications
│
├── tokens/
│   ├── tokens.css          ← CSS custom properties
│   ├── tokens.json         ← JSON format for tooling
│   └── tailwind.config.js  ← Tailwind CSS configuration
│
├── components/
│   ├── buttons.md          ← Button specifications
│   ├── cards.md            ← Card specifications
│   ├── forms.md            ← Form element specifications
│   └── navigation.md       ← Navigation specifications
│
├── logos/
│   ├── logo-pastoral-salud.jpeg
│   └── logo-diocesis-armenia.png
│
└── references/
    ├── 1.png               ← UI reference inspiration
    └── 2.png               ← UI reference inspiration
```

---

## Brand Colors

| Color | Token | Hex | Usage |
|-------|-------|-----|-------|
| **Celestial Blue** | `celestial-600` | #0284c7 | Primary actions, links |
| **Healing Green** | `healing-500` | #22c55e | Success, health indicators |
| **Sacred Gold** | `sacred-500` | #f59e0b | Accents, highlights |
| **Slate** | `slate-*` | — | Text, backgrounds, borders |

---

## Typography

| Role | Font | Usage |
|------|------|-------|
| **Display** | Fraunces | Hero text, emotional moments |
| **UI** | DM Sans | Headings, body, buttons |
| **Accent** | Caveat | Taglines, personal touches |

---

## Key Components

### Buttons

```html
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-ghost">Ghost</button>
```

### Cards

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

### Forms

```html
<div class="form-field">
  <label class="form-label">Email</label>
  <input type="email" class="input" />
  <p class="form-helper">We'll send confirmations here.</p>
</div>
```

---

## Design Principles

1. **Serenity Through Clarity** — Calm, uncluttered interfaces
2. **Sacred Warmth** — Compassionate, human-centered design
3. **Accessible Hospitality** — Inclusive for all users
4. **Trustworthy Professionalism** — Credible and reliable

---

## Tech Stack Recommendations

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14+ |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Components | Radix UI (primitives) |
| Animation | Framer Motion |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |

---

## Resources

- **WCAG 2.1 Guidelines**: [w3.org/WAI/WCAG21](https://www.w3.org/WAI/WCAG21/quickref/)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Lucide Icons**: [lucide.dev](https://lucide.dev)
- **Google Fonts**: [fonts.google.com](https://fonts.google.com)

---

## Version

**1.0.0** — Initial release (January 2026)

---

*Pastoral de la Salud — Diócesis de Armenia*
*"El amor que sana"*
