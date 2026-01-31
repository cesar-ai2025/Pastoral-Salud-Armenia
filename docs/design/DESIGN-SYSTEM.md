# Pastoral de la Salud — Design System

> **"El amor que sana"** — The love that heals

---

## Overview

This design system establishes the visual language and component specifications for the Pastoral de la Salud digital platform. It bridges the sacred mission of healthcare ministry with modern, accessible digital experiences.

### Project Context

- **Organization:** Diócesis de Armenia (Diocese of Armenia, Colombia)
- **Ministry:** Pastoral de la Salud (Healthcare Pastoral Ministry)
- **Mission:** Providing compassionate care, spiritual support, and healthcare coordination for the community
- **Tagline:** "El amor que sana" (The love that heals)

---

## Design Philosophy

### Core Principles

#### 1. **Serenity Through Clarity**
Healthcare contexts demand calm. Our interfaces use generous whitespace, soft color transitions, and uncluttered layouts that reduce cognitive load during stressful moments.

#### 2. **Sacred Warmth**
While modern and professional, our design carries warmth that reflects the compassionate nature of pastoral care. This manifests through:
- Organic curves softening rigid geometries
- Golden accents evoking spiritual light
- Photography showcasing human connection

#### 3. **Accessible Hospitality**
Our users span generations and technical comfort levels. Every interaction prioritizes:
- Clear visual hierarchy
- Generous touch targets
- High contrast for readability
- Forgiving error states with gentle guidance

#### 4. **Trustworthy Professionalism**
Healthcare requires trust. Our visual language balances approachability with the credibility expected from institutional platforms.

---

## Aesthetic Direction

### Visual Identity: "Luminous Sanctuary"

Our aesthetic draws from the intersection of:

| Influence | Expression |
|-----------|------------|
| **Colombian Quindío landscape** | Verdant greens, warm earth tones, coffee-region warmth |
| **Sacred art tradition** | Golden light, circular halos, blue celestial tones |
| **Modern healthcare UX** | Clean surfaces, clear typography, intuitive flows |
| **Reference SaaS aesthetic** | Card-based layouts, subtle shadows, metric displays |

### Mood Board Keywords

```
Serene • Luminous • Trustworthy • Warm • Modern
Accessible • Compassionate • Professional • Hopeful
```

### Color Story

Our palette tells a narrative:

- **Celestial Blue** — The sky in our logo, divine presence, trust
- **Healing Green** — The Quindío shield, growth, health, renewal
- **Sacred Gold** — Halos, divine light, hope, warmth
- **Pure White** — Clarity, cleanliness, peace
- **Grounded Slate** — Stability, professionalism, text

---

## Design Tokens

All design decisions are codified in `/docs/design/tokens/`:

| File | Purpose |
|------|---------|
| `tokens.css` | CSS custom properties for all design tokens |
| `tokens.json` | JSON format for build tools and documentation |

### Token Categories

1. **Colors** — Semantic color system with light/dark variants
2. **Typography** — Font families, sizes, weights, line heights
3. **Spacing** — Consistent spatial rhythm (4px base unit)
4. **Shadows** — Elevation system for depth hierarchy
5. **Radii** — Border radius scale
6. **Transitions** — Animation timing and easing
7. **Breakpoints** — Responsive design thresholds

---

## Component Architecture

### Atomic Design Methodology

We follow atomic design principles:

```
Tokens → Atoms → Molecules → Organisms → Templates → Pages
```

### Component Categories

| Category | Examples |
|----------|----------|
| **Foundations** | Colors, Typography, Icons, Spacing |
| **Atoms** | Buttons, Inputs, Labels, Badges |
| **Molecules** | Form fields, Cards, List items, Search |
| **Organisms** | Navigation, Forms, Data tables, Modals |
| **Templates** | Page layouts, Dashboard grids |

See `/docs/design/COMPONENTS.md` for detailed specifications.

---

## Typography System

### Font Selection

| Role | Font | Rationale |
|------|------|-----------|
| **Display** | **Fraunces** | Soft, humanist serif with optical sizing. Conveys warmth and tradition while feeling contemporary. |
| **Headings** | **DM Sans** | Geometric sans with subtle warmth. Clean and modern, excellent for UI. |
| **Body** | **DM Sans** | Highly legible at small sizes, works beautifully for body text. |
| **Accent** | **Caveat** | Handwritten style for taglines and personal touches, echoing the script in the logo. |

### Type Scale

Based on a 1.25 ratio (Major Third) with 16px base:

```
xs:    12px / 0.75rem
sm:    14px / 0.875rem
base:  16px / 1rem
lg:    20px / 1.25rem
xl:    24px / 1.5rem
2xl:   30px / 1.875rem
3xl:   38px / 2.375rem
4xl:   48px / 3rem
5xl:   60px / 3.75rem
```

---

## Spacing System

### Base Unit: 4px

All spacing derives from a 4px grid:

```
space-1:   4px   (0.25rem)
space-2:   8px   (0.5rem)
space-3:   12px  (0.75rem)
space-4:   16px  (1rem)
space-5:   20px  (1.25rem)
space-6:   24px  (1.5rem)
space-8:   32px  (2rem)
space-10:  40px  (2.5rem)
space-12:  48px  (3rem)
space-16:  64px  (4rem)
space-20:  80px  (5rem)
space-24:  96px  (6rem)
```

---

## Elevation System

### Shadow Levels

| Level | Use Case | Shadow |
|-------|----------|--------|
| **0** | Flat, no elevation | none |
| **1** | Subtle lift (hover states) | Soft, tight shadow |
| **2** | Cards, containers | Medium shadow |
| **3** | Dropdowns, popovers | Pronounced shadow |
| **4** | Modals, dialogs | Heavy shadow with backdrop |

---

## Motion Principles

### Animation Guidelines

1. **Purposeful** — Motion communicates, never decorates randomly
2. **Quick** — Most transitions under 300ms
3. **Natural** — Ease-out for entrances, ease-in for exits
4. **Respectful** — Honor `prefers-reduced-motion`

### Timing Tokens

```
duration-instant:  50ms   (micro-interactions)
duration-fast:     150ms  (hover, focus)
duration-normal:   250ms  (standard transitions)
duration-slow:     400ms  (complex animations)
duration-slower:   600ms  (page transitions)
```

### Easing Functions

```
ease-default:    cubic-bezier(0.4, 0, 0.2, 1)
ease-in:         cubic-bezier(0.4, 0, 1, 1)
ease-out:        cubic-bezier(0, 0, 0.2, 1)
ease-bounce:     cubic-bezier(0.34, 1.56, 0.64, 1)
```

---

## Responsive Design

### Breakpoints

```
sm:   640px   (Large phones, landscape)
md:   768px   (Tablets)
lg:   1024px  (Small laptops)
xl:   1280px  (Desktops)
2xl:  1536px  (Large screens)
```

### Mobile-First Approach

All styles begin at mobile and scale up:

```css
/* Mobile base */
.component { padding: var(--space-4); }

/* Tablet and up */
@media (min-width: 768px) {
  .component { padding: var(--space-6); }
}
```

---

## Accessibility Standards

### WCAG 2.1 AA Compliance

| Requirement | Implementation |
|-------------|----------------|
| **Color Contrast** | Minimum 4.5:1 for text, 3:1 for large text |
| **Focus Indicators** | Visible focus rings on all interactive elements |
| **Touch Targets** | Minimum 44×44px for mobile interactions |
| **Screen Readers** | Semantic HTML, ARIA labels where needed |
| **Motion** | Respect `prefers-reduced-motion` |
| **Text Scaling** | Layouts accommodate 200% zoom |

---

## File Structure

```
docs/design/
├── DESIGN-SYSTEM.md          # This file
├── STYLE-GUIDE.md            # Detailed style guidelines
├── COMPONENTS.md             # Component specifications
├── tokens/
│   ├── tokens.css            # CSS custom properties
│   └── tokens.json           # JSON format for tooling
├── components/
│   ├── buttons.md            # Button specifications
│   ├── cards.md              # Card specifications
│   ├── forms.md              # Form specifications
│   └── navigation.md         # Navigation specifications
├── logos/
│   ├── logo-pastoral-salud.jpeg
│   └── logo-diocesis-armenia.png
└── references/
    ├── 1.png                 # UI reference
    └── 2.png                 # UI reference
```

---

## Tech Stack Recommendations

Based on the design requirements and modern best practices:

### Recommended Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Framework** | Next.js 14+ | SSR for SEO, App Router, excellent DX |
| **Language** | TypeScript | Type safety, better tooling |
| **Styling** | Tailwind CSS | Utility-first, design token integration |
| **Components** | Radix UI | Accessible primitives, unstyled |
| **Animation** | Framer Motion | Declarative, gesture support |
| **Icons** | Lucide React | Clean, consistent, customizable |
| **Forms** | React Hook Form + Zod | Performant, type-safe validation |

### Alternative Stack (Simpler)

| Layer | Technology |
|-------|------------|
| **Framework** | Astro or plain HTML |
| **Styling** | Vanilla CSS with tokens |
| **Interactivity** | Alpine.js or vanilla JS |

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-01-31 | Initial design system release |

---

## Contributing

When extending this design system:

1. **Document first** — Update specs before implementing
2. **Token everything** — No magic numbers in code
3. **Accessibility always** — Test with screen readers
4. **Mobile first** — Start small, scale up
5. **Consistent naming** — Follow established patterns

---

*Pastoral de la Salud — Diócesis de Armenia*
*"El amor que sana"*
