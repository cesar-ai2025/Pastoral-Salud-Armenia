# Button Component Specifications

## Overview

Buttons are the primary interactive elements for user actions. They must be clearly recognizable as clickable and provide immediate visual feedback.

---

## Variants

### Primary Button

The main call-to-action. Use for the most important action on a screen.

**Visual:**
- Background: `celestial-600` (#0284c7)
- Text: White
- Border: None
- Shadow: None (base state)

**States:**
| State | Changes |
|-------|---------|
| Hover | Background → `celestial-700`, Shadow → `shadow-celestial` |
| Active | Background → `celestial-800`, Scale → 0.98 |
| Focus | Focus ring (2px offset, `celestial-500`) |
| Disabled | Background → `slate-300`, Text → `slate-500` |

**Usage:**
- One primary button per section/card
- "Submit", "Save", "Continue", "Solicitar ayuda"

---

### Secondary Button

For secondary actions alongside primary buttons.

**Visual:**
- Background: White
- Text: `slate-700`
- Border: 1px solid `slate-200`

**States:**
| State | Changes |
|-------|---------|
| Hover | Background → `slate-50`, Border → `slate-300` |
| Active | Background → `slate-100`, Scale → 0.98 |
| Focus | Focus ring |
| Disabled | Opacity → 0.5 |

**Usage:**
- "Cancel", "Back", "Skip", "Learn more"

---

### Ghost Button

Minimal visual weight for tertiary actions.

**Visual:**
- Background: Transparent
- Text: `slate-600`
- Border: None

**States:**
| State | Changes |
|-------|---------|
| Hover | Background → `slate-100`, Text → `slate-900` |
| Active | Background → `slate-200` |

**Usage:**
- Navigation items, toolbars, icon buttons

---

### Destructive Button

For irreversible or destructive actions.

**Visual:**
- Background: `error-600` (#dc2626)
- Text: White
- Border: None

**States:**
| State | Changes |
|-------|---------|
| Hover | Background → `error-700` |
| Active | Background → `error-800` |

**Usage:**
- "Delete", "Remove", "Cancel subscription"
- Always require confirmation for critical actions

---

## Sizes

| Size | Height | Padding X | Font Size | Icon Size | Use Case |
|------|--------|-----------|-----------|-----------|----------|
| xs | 28px | 10px | 12px | 14px | Dense UI, tables |
| sm | 32px | 12px | 14px | 16px | Secondary actions |
| default | 40px | 16px | 14px | 16px | Standard use |
| lg | 44px | 20px | 16px | 20px | Important CTAs |
| xl | 48px | 24px | 16px | 20px | Hero sections |

---

## With Icons

### Icon + Text

```
[Icon] Label
```

- Icon size: 16px (default), 14px (sm)
- Gap between icon and text: 8px
- Icons should be meaningful, not decorative

### Icon Only

- Requires `aria-label` for accessibility
- Square button (width = height)
- Tooltip on hover recommended

---

## Loading State

When button triggers async action:

1. Disable button immediately
2. Replace content with spinner
3. Keep button width stable (min-width or explicit width)

```
[🔄] Loading...  →  ✓ Done!
```

---

## Accessibility

- Minimum touch target: 44×44px
- Color contrast: 4.5:1 minimum
- Focus visible: Always show focus ring
- Disabled: Use `aria-disabled` for screen readers
- Loading: Use `aria-busy="true"` during loading

---

## Code Examples

### React/JSX

```jsx
// Primary
<button className="btn btn-primary">
  Solicitar ayuda
</button>

// With icon
<button className="btn btn-primary">
  <PlusIcon className="w-4 h-4" />
  Agregar
</button>

// Loading
<button className="btn btn-primary" disabled aria-busy="true">
  <Spinner className="w-4 h-4 animate-spin" />
  Procesando...
</button>
```

### Tailwind Classes

```html
<!-- Primary -->
<button class="inline-flex items-center justify-center gap-2 h-10 px-4
               text-sm font-medium text-white bg-celestial-600 rounded-lg
               hover:bg-celestial-700 hover:shadow-celestial
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-celestial-500 focus-visible:ring-offset-2
               disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed
               transition-all">
  Solicitar ayuda
</button>
```

---

## Do's and Don'ts

| Do | Don't |
|----|-------|
| Use action verbs ("Save", "Send") | Use vague labels ("Click here", "OK") |
| One primary button per section | Multiple competing primary buttons |
| Consistent sizing within context | Mix button sizes randomly |
| Show loading state for async | Leave user wondering if click worked |
| Use icons to reinforce meaning | Use decorative-only icons |
