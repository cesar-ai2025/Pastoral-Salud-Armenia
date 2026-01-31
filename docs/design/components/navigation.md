# Navigation Component Specifications

## Overview

Navigation components help users move through the platform and understand their location. They must be consistent, accessible, and responsive.

---

## Main Navigation (Header)

Based on the reference design aesthetic.

### Desktop Layout

```
┌────────────────────────────────────────────────────────────────────────────┐
│  [Logo]        Servicios   Quiénes somos   Recursos   Contacto   [Login] [CTA] │
└────────────────────────────────────────────────────────────────────────────┘
```

### Specifications

| Property | Value |
|----------|-------|
| Height | 64px |
| Background | White |
| Border bottom | 1px solid `slate-100` |
| Shadow | `shadow-sm` |
| Position | Sticky top |
| Z-index | 200 (sticky) |
| Max width | 1280px (centered) |
| Horizontal padding | 24px |

### Logo

- Height: 40px
- Link to home
- Accessible alt text

### Nav Links

| Property | Value |
|----------|-------|
| Font size | 14px (`text-sm`) |
| Font weight | Medium (500) |
| Color (default) | `slate-600` |
| Color (hover) | `slate-900` |
| Color (active) | `celestial-600` |
| Padding | 8px 16px |
| Border radius | 8px (`radius-default`) |
| Background (hover) | `slate-50` |
| Background (active) | `celestial-50` |

### Nav Actions (Right Side)

- Gap between items: 8px
- Login: Ghost button (sm)
- CTA: Primary button (sm)

---

## Mobile Navigation

### Mobile Header

```
┌─────────────────────────────────────────┐
│  [Logo]                           [☰]   │
└─────────────────────────────────────────┘
```

| Property | Value |
|----------|-------|
| Height | 56px |
| Hamburger button | 40×40px, ghost style |

### Mobile Menu (Slide-out)

```
┌─────────────────────────────────┐ ┌─────┐
│  [Logo]                    [✕]  │ │     │
├─────────────────────────────────┤ │     │
│  Servicios                  >   │ │     │
│  Quiénes somos              >   │ │░░░░░│
│  Recursos                   >   │ │░░░░░│ ← Backdrop
│  Contacto                   >   │ │░░░░░│
├─────────────────────────────────┤ │     │
│  [Login]                        │ │     │
│  [Solicitar ayuda          ]    │ │     │
└─────────────────────────────────┘ └─────┘
```

| Property | Value |
|----------|-------|
| Width | 100% (max 320px) |
| Background | White |
| Animation | Slide from left, 250ms |
| Backdrop | `slate-900` at 50% opacity |

### Mobile Nav Links

| Property | Value |
|----------|-------|
| Height | 48px |
| Font size | 16px |
| Padding | 16px |
| Border bottom | 1px solid `slate-100` |
| Chevron | Right-aligned, `slate-400` |

---

## Breadcrumbs

### Layout

```
Inicio  /  Servicios  /  Visitas domiciliarias
  ↑           ↑                    ↑
 Link       Link              Current (not linked)
```

### Specifications

| Property | Value |
|----------|-------|
| Font size | 14px (`text-sm`) |
| Color (links) | `slate-500` |
| Color (links hover) | `celestial-600` |
| Color (current) | `slate-900` |
| Font weight (current) | Medium (500) |
| Separator | "/" in `slate-300` |
| Gap | 8px on each side of separator |

### Mobile

- Truncate middle items
- Show: Home / ... / Current
- Or hide entirely if space is limited

---

## Tabs

### Layout

```
┌──────────────────────────────────────────────────────┐
│  [Tab 1]    [Tab 2]    [Tab 3]    [Tab 4]           │
├──────────────────────────────────────────────────────┤
```

### Specifications

| Property | Value |
|----------|-------|
| Container border | 1px bottom `slate-200` |
| Tab padding | 12px 16px |
| Font size | 14px |
| Font weight | Medium |
| Color (default) | `slate-500` |
| Color (hover) | `slate-700` |
| Color (active) | `celestial-600` |
| Active indicator | 2px bottom border `celestial-600` |
| Gap between tabs | 4px |

### Mobile

- Horizontal scroll if too many tabs
- Or convert to dropdown select

---

## Sidebar Navigation

For dashboard/admin sections.

### Layout

```
┌────────────────────┐
│  [Logo]            │
├────────────────────┤
│  📊 Dashboard      │ ← Active
│  👥 Pacientes      │
│  📅 Calendario     │
│  📋 Reportes       │
├────────────────────┤
│  ⚙️ Configuración  │
│  ❓ Ayuda          │
└────────────────────┘
```

### Specifications

| Property | Value |
|----------|-------|
| Width | 240px (desktop), 64px (collapsed) |
| Background | `slate-50` or White |
| Border right | 1px solid `slate-200` |
| Position | Fixed left |

### Sidebar Links

| Property | Value |
|----------|-------|
| Height | 40px |
| Padding | 8px 12px |
| Border radius | 8px |
| Icon size | 20px |
| Gap icon-text | 12px |
| Font size | 14px |
| Color (default) | `slate-600` |
| Color (hover) | `slate-900` |
| Background (hover) | `slate-100` |
| Color (active) | `celestial-600` |
| Background (active) | `celestial-50` |

### Collapsed State

- Show icons only
- Tooltip on hover with label
- Width: 64px

---

## Pagination

### Layout

```
[<]  [1] [2] [3] ... [10]  [>]
```

### Specifications

| Property | Value |
|----------|-------|
| Button size | 36×36px |
| Font size | 14px |
| Border radius | 8px |
| Gap | 4px |
| Color (default) | `slate-600` |
| Background (hover) | `slate-100` |
| Color (active) | White |
| Background (active) | `celestial-600` |
| Disabled | Opacity 0.5 |

### Mobile

- Show fewer page numbers
- Example: [<] [1] ... [5] [>]

---

## Bottom Navigation (Mobile App-style)

For mobile-first applications.

### Layout

```
┌────────────────────────────────────────────────────┐
│  🏠       📅       📋       👤                     │
│ Inicio  Citas  Servicios  Perfil                  │
└────────────────────────────────────────────────────┘
```

### Specifications

| Property | Value |
|----------|-------|
| Height | 64px + safe area |
| Background | White |
| Border top | 1px solid `slate-200` |
| Position | Fixed bottom |
| Item width | Equal (25% each for 4 items) |

### Bottom Nav Items

| Property | Value |
|----------|-------|
| Icon size | 24px |
| Label font size | 12px |
| Color (default) | `slate-400` |
| Color (active) | `celestial-600` |
| Gap icon-label | 4px |

---

## Accessibility

### Keyboard Navigation

- Tab through all navigation items
- Arrow keys within tab groups
- Enter/Space to activate
- Escape to close mobile menu

### Screen Readers

- Use `<nav>` element with `aria-label`
- Mark current page with `aria-current="page"`
- Mobile menu: `aria-expanded` on toggle button
- Landmark roles for main navigation

### Focus Management

- Visible focus indicators
- Trap focus in mobile menu when open
- Return focus to trigger when menu closes

---

## Animation

### Mobile Menu

```css
/* Slide in */
.menu-enter {
  transform: translateX(-100%);
  opacity: 0;
}
.menu-enter-active {
  transform: translateX(0);
  opacity: 1;
  transition: transform 250ms ease-out, opacity 200ms ease-out;
}

/* Backdrop */
.backdrop-enter {
  opacity: 0;
}
.backdrop-enter-active {
  opacity: 1;
  transition: opacity 200ms ease-out;
}
```

### Tab Indicator

- Smooth slide between tabs (optional)
- Use CSS transition on transform

---

## Code Examples

### React/JSX - Main Nav

```jsx
<header className="sticky top-0 z-sticky h-16 bg-white border-b border-slate-100 shadow-sm">
  <div className="container h-full flex items-center justify-between">
    <a href="/" className="flex items-center">
      <img src="/logo.svg" alt="Pastoral de la Salud" className="h-10" />
    </a>

    <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
      <a href="/servicios" className="nav-link">Servicios</a>
      <a href="/quienes-somos" className="nav-link">Quiénes somos</a>
      <a href="/recursos" className="nav-link" aria-current="page">Recursos</a>
      <a href="/contacto" className="nav-link">Contacto</a>
    </nav>

    <div className="hidden lg:flex items-center gap-2">
      <button className="btn btn-ghost btn-sm">Iniciar sesión</button>
      <button className="btn btn-primary btn-sm">Solicitar ayuda</button>
    </div>

    <button
      className="lg:hidden btn btn-ghost p-2"
      aria-label="Menu"
      aria-expanded={isOpen}
    >
      <MenuIcon className="w-6 h-6" />
    </button>
  </div>
</header>
```

### Tailwind Classes - Nav Link

```html
<a
  href="/page"
  class="px-4 py-2 text-sm font-medium text-slate-600 rounded-lg
         hover:text-slate-900 hover:bg-slate-50
         aria-[current=page]:text-celestial-600 aria-[current=page]:bg-celestial-50
         transition-colors"
>
  Link Text
</a>
```

---

## Do's and Don'ts

| Do | Don't |
|----|-------|
| Keep main nav items to 5-7 | Overcrowd with many items |
| Use clear, concise labels | Use jargon or ambiguous terms |
| Show current location clearly | Leave users guessing where they are |
| Make touch targets large enough | Cram items too close together |
| Test with keyboard navigation | Assume mouse-only users |
| Consider mobile from the start | Treat mobile as afterthought |
