# Card Component Specifications

## Overview

Cards are containers that group related content and actions. They establish visual hierarchy and create scannable layouts.

---

## Base Card

The foundation for all card variants.

**Visual:**
- Background: White (`surface-primary`)
- Border Radius: 16px (`radius-xl`)
- Padding: 24px (`space-6`)
- Shadow: `shadow-sm`

**Behavior:**
- Static by default
- Optional hover effect for interactive cards

---

## Card Variants

### Basic Card

Simple content container.

```
┌────────────────────────────────┐
│                                │
│   Content goes here            │
│                                │
└────────────────────────────────┘
```

---

### Card with Header

For titled sections.

```
┌────────────────────────────────┐
│  Title                    [···]│
├────────────────────────────────┤
│                                │
│   Content                      │
│                                │
└────────────────────────────────┘
```

**Structure:**
- Header padding: 20px
- Border below header: 1px `border-subtle`
- Optional actions in header (icon button)

---

### Card with Image

For visual content (events, articles, profiles).

```
┌────────────────────────────────┐
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
│░░░░░░░░░ IMAGE ░░░░░░░░░░░░░░░░│
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
├────────────────────────────────┤
│  Title                         │
│  Description text here...      │
├────────────────────────────────┤
│  [Secondary] [Primary]         │
└────────────────────────────────┘
```

**Image specifications:**
- Aspect ratio: 16:9 or 4:3
- Border radius: Inherits top corners (16px)
- Object-fit: cover
- Hover effect: Scale 1.05 with overflow hidden

---

### Interactive Card

Entire card is clickable (e.g., navigation).

**Additional states:**
| State | Effect |
|-------|--------|
| Hover | Shadow → `shadow-md`, cursor → pointer |
| Focus | Focus ring around entire card |
| Active | Shadow → `shadow-sm`, slight scale |

**Accessibility:**
- Use `<a>` or `<button>` as card root
- Or use `role="button"` with `tabindex="0"`
- Ensure focus is visible

---

### Stats Card

For metric displays (based on reference design).

```
┌─────────────────┐
│      10K+       │  ← Large, bold, brand color
│ Personas        │  ← Small, secondary text
│ atendidas       │
└─────────────────┘
```

**Specifications:**
- Value: `text-4xl`, `font-bold`, `celestial-600`
- Label: `text-sm`, `text-secondary`
- Centered alignment
- Padding: 24px

---

### Feature Card

For showcasing capabilities.

```
┌────────────────────────────────┐
│  [Icon]                        │
│                                │
│  Feature Title                 │
│                                │
│  Description of the feature    │
│  and its benefits...           │
└────────────────────────────────┘
```

**Specifications:**
- Icon container: 48×48px, `celestial-50` background, `radius-lg`
- Icon: 24px, `celestial-600`
- Title: `text-lg`, `font-semibold`
- Description: `text-sm`, `text-secondary`
- Vertical spacing between elements: 16px

---

### Testimonial Card

For quotes and social proof.

```
┌────────────────────────────────┐
│  "Quote text goes here,        │
│   multiple lines if needed."   │
│                                │
│  ┌────┐                        │
│  │ 👤 │  Name                  │
│  └────┘  Title/Role            │
└────────────────────────────────┘
```

**Specifications:**
- Quote: `text-lg` or `text-base`, optional italic
- Avatar: 40×40px, circular
- Name: `font-medium`
- Title: `text-sm`, `text-secondary`

---

## Card Anatomy

```
┌─ Card Container ────────────────────────────────────┐
│ ┌─ Card Header (optional) ────────────────────────┐ │
│ │  Title                             Actions      │ │
│ └─────────────────────────────────────────────────┘ │
│ ┌─ Card Media (optional) ─────────────────────────┐ │
│ │                                                 │ │
│ │                  Image/Video                    │ │
│ │                                                 │ │
│ └─────────────────────────────────────────────────┘ │
│ ┌─ Card Content ──────────────────────────────────┐ │
│ │                                                 │ │
│ │  Main content area                              │ │
│ │                                                 │ │
│ └─────────────────────────────────────────────────┘ │
│ ┌─ Card Footer (optional) ────────────────────────┐ │
│ │  Metadata        │        Actions               │ │
│ └─────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

---

## Spacing

| Part | Spacing |
|------|---------|
| Card padding | 24px (default), 16px (compact) |
| Between sections | 16px |
| Header/Footer border | 1px `border-subtle` |
| Content gap | 8-12px between elements |

---

## Grid Layouts

### 3-Column Grid (Desktop)

```
┌────────┐ ┌────────┐ ┌────────┐
│  Card  │ │  Card  │ │  Card  │
│   1    │ │   2    │ │   3    │
└────────┘ └────────┘ └────────┘
```

Gap: 24px

### 2-Column Grid (Tablet)

```
┌────────────┐ ┌────────────┐
│   Card 1   │ │   Card 2   │
└────────────┘ └────────────┘
┌────────────┐ ┌────────────┐
│   Card 3   │ │   Card 4   │
└────────────┘ └────────────┘
```

### 1-Column Stack (Mobile)

```
┌──────────────────────────┐
│         Card 1           │
└──────────────────────────┘
┌──────────────────────────┐
│         Card 2           │
└──────────────────────────┘
```

---

## Code Examples

### React/JSX

```jsx
// Basic card
<div className="card">
  <h3 className="text-lg font-semibold mb-2">Card Title</h3>
  <p className="text-sm text-slate-600">Card content goes here.</p>
</div>

// Interactive card
<a href="/detail" className="card card-interactive">
  <h3>Click me</h3>
  <p>This entire card is a link.</p>
</a>

// Card with image
<article className="card p-0 overflow-hidden">
  <div className="aspect-video overflow-hidden">
    <img
      src="/image.jpg"
      alt=""
      className="w-full h-full object-cover transition-transform hover:scale-105"
    />
  </div>
  <div className="p-5">
    <h3 className="text-lg font-semibold">Title</h3>
    <p className="text-sm text-slate-600 mt-2">Description</p>
  </div>
</article>
```

### Tailwind Classes

```html
<!-- Base card -->
<div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
  Content
</div>

<!-- Stats card -->
<div class="bg-white rounded-xl p-6 shadow-sm text-center">
  <div class="text-4xl font-bold text-celestial-600">10K+</div>
  <div class="text-sm text-slate-500 mt-2">Personas atendidas</div>
</div>
```

---

## Accessibility

- Use semantic HTML (`<article>`, `<section>`)
- Interactive cards need keyboard support
- Images need meaningful alt text
- Maintain heading hierarchy within cards
- Sufficient color contrast for all text

---

## Do's and Don'ts

| Do | Don't |
|----|-------|
| Keep content focused and scannable | Overload cards with too much content |
| Use consistent card sizes in grids | Mix drastically different card heights |
| Make entire interactive card clickable | Have conflicting click targets inside |
| Use images that add meaning | Use generic stock photos |
| Maintain visual rhythm in grids | Random spacing between cards |
