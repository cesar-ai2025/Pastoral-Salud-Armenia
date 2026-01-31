# Pastoral de la Salud — Component Specifications

> **"El amor que sana"** — The love that heals

Detailed specifications for all UI components in the design system.

---

## Table of Contents

1. [Buttons](#buttons)
2. [Form Elements](#form-elements)
3. [Cards](#cards)
4. [Navigation](#navigation)
5. [Modals & Dialogs](#modals--dialogs)
6. [Feedback & Alerts](#feedback--alerts)
7. [Data Display](#data-display)
8. [Layout Components](#layout-components)

---

## Buttons

Buttons are the primary interactive elements for user actions.

### Button Variants

#### Primary Button

The main call-to-action. Use sparingly — typically one per section.

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);

  height: var(--btn-height-default);
  padding: 0 var(--btn-padding-x-default);

  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--btn-font-weight);
  line-height: 1;

  color: white;
  background: var(--color-celestial-600);
  border: none;
  border-radius: var(--btn-border-radius);

  cursor: pointer;
  transition: var(--btn-transition);
}

.btn-primary:hover {
  background: var(--color-celestial-700);
  box-shadow: var(--shadow-celestial);
}

.btn-primary:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}

.btn-primary:active {
  background: var(--color-celestial-800);
  transform: scale(0.98);
}

.btn-primary:disabled {
  background: var(--color-slate-300);
  color: var(--color-slate-500);
  cursor: not-allowed;
  box-shadow: none;
}
```

#### Secondary Button

For secondary actions alongside primary buttons.

```css
.btn-secondary {
  /* Same base styles as primary */

  color: var(--color-slate-700);
  background: white;
  border: var(--border-1) solid var(--color-border-default);
}

.btn-secondary:hover {
  background: var(--color-slate-50);
  border-color: var(--color-border-strong);
}
```

#### Ghost Button

Minimal emphasis, often used in navigation or toolbars.

```css
.btn-ghost {
  /* Same base styles */

  color: var(--color-slate-600);
  background: transparent;
  border: none;
}

.btn-ghost:hover {
  background: var(--color-slate-100);
  color: var(--color-slate-900);
}
```

#### Destructive Button

For destructive actions like delete or remove.

```css
.btn-destructive {
  /* Same base styles */

  color: white;
  background: var(--color-error-600);
}

.btn-destructive:hover {
  background: var(--color-error-700);
}
```

### Button Sizes

| Size | Height | Padding X | Font Size | Use Case |
|------|--------|-----------|-----------|----------|
| xs | 28px | 10px | 12px | Dense UI, inline actions |
| sm | 32px | 12px | 14px | Secondary actions |
| default | 40px | 16px | 14px | Standard buttons |
| lg | 44px | 20px | 16px | Prominent CTAs |
| xl | 48px | 24px | 16px | Hero sections |

### Button with Icon

```css
.btn-icon-left svg {
  margin-right: var(--space-2);
  width: 16px;
  height: 16px;
}

.btn-icon-right svg {
  margin-left: var(--space-2);
  width: 16px;
  height: 16px;
}

/* Icon-only button */
.btn-icon-only {
  width: var(--btn-height-default);
  padding: 0;
}
```

### Button States

| State | Visual Treatment |
|-------|------------------|
| Default | Base styles |
| Hover | Darker background, subtle shadow |
| Focus | Focus ring visible |
| Active | Slightly smaller (scale 0.98), darkest |
| Disabled | Grayed out, cursor not-allowed |
| Loading | Spinner replaces text/icon |

### Loading Button

```css
.btn-loading {
  position: relative;
  color: transparent;
  pointer-events: none;
}

.btn-loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: var(--radius-full);
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

## Form Elements

### Text Input

```css
.input {
  display: block;
  width: 100%;
  height: var(--input-height);
  padding: 0 var(--input-padding-x);

  font-family: var(--font-sans);
  font-size: var(--input-font-size);
  color: var(--color-text-primary);

  background: var(--input-bg);
  border: var(--input-border-width) solid var(--input-border);
  border-radius: var(--input-border-radius);

  transition: var(--transition-colors);
}

.input::placeholder {
  color: var(--input-placeholder);
}

.input:hover {
  border-color: var(--input-border-hover);
}

.input:focus {
  outline: none;
  border-color: var(--input-border-focus);
  box-shadow: var(--focus-ring);
}

.input:disabled {
  background: var(--color-slate-100);
  color: var(--color-text-disabled);
  cursor: not-allowed;
}

/* Error state */
.input-error {
  border-color: var(--color-error-500);
}

.input-error:focus {
  box-shadow: 0 0 0 2px var(--color-surface-primary),
              0 0 0 4px var(--color-error-500);
}
```

### Form Field (Label + Input + Helper)

```html
<div class="form-field">
  <label class="form-label" for="email">
    Correo electrónico
    <span class="form-required">*</span>
  </label>
  <input type="email" id="email" class="input" placeholder="tu@correo.com">
  <p class="form-helper">Te enviaremos confirmaciones a este correo.</p>
</div>
```

```css
.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-1-5);
}

.form-label {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-primary);
}

.form-required {
  color: var(--color-error-500);
  margin-left: var(--space-0-5);
}

.form-helper {
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
  margin: 0;
}

.form-error {
  font-size: var(--text-xs);
  color: var(--color-error-600);
  margin: 0;
}
```

### Textarea

```css
.textarea {
  /* Inherits from .input */
  min-height: 120px;
  padding: var(--space-3);
  resize: vertical;
}
```

### Select

```css
.select {
  /* Inherits from .input */
  appearance: none;
  background-image: url("data:image/svg+xml,..."); /* Chevron icon */
  background-repeat: no-repeat;
  background-position: right var(--space-3) center;
  background-size: 16px;
  padding-right: var(--space-10);
}
```

### Checkbox

```css
.checkbox-wrapper {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
}

.checkbox {
  appearance: none;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;

  background: white;
  border: var(--border-2) solid var(--color-border-default);
  border-radius: var(--radius-sm);

  cursor: pointer;
  transition: var(--transition-colors);
}

.checkbox:checked {
  background: var(--color-celestial-600);
  border-color: var(--color-celestial-600);
  background-image: url("data:image/svg+xml,..."); /* Checkmark */
  background-repeat: no-repeat;
  background-position: center;
}

.checkbox:focus-visible {
  box-shadow: var(--focus-ring);
}

.checkbox-label {
  font-size: var(--text-sm);
  color: var(--color-text-primary);
  cursor: pointer;
}
```

### Radio Button

```css
.radio {
  /* Similar to checkbox */
  border-radius: var(--radius-full);
}

.radio:checked {
  background: white;
  border-color: var(--color-celestial-600);
  border-width: 6px;
}
```

### Toggle Switch

```css
.toggle {
  position: relative;
  width: 44px;
  height: 24px;

  background: var(--color-slate-300);
  border-radius: var(--radius-full);
  border: none;

  cursor: pointer;
  transition: var(--transition-colors);
}

.toggle::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;

  background: white;
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-sm);

  transition: var(--transition-transform);
}

.toggle[aria-checked="true"] {
  background: var(--color-celestial-600);
}

.toggle[aria-checked="true"]::after {
  transform: translateX(20px);
}
```

---

## Cards

### Base Card

```css
.card {
  background: var(--card-bg);
  border-radius: var(--card-border-radius);
  padding: var(--card-padding);
  box-shadow: var(--card-shadow);

  transition: var(--transition-shadow);
}
```

### Interactive Card

```css
.card-interactive {
  cursor: pointer;
}

.card-interactive:hover {
  box-shadow: var(--card-shadow-hover);
}

.card-interactive:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring), var(--card-shadow-hover);
}
```

### Card with Image

```html
<article class="card card-with-image">
  <div class="card-image">
    <img src="..." alt="...">
  </div>
  <div class="card-content">
    <h3 class="card-title">Título de la tarjeta</h3>
    <p class="card-description">Descripción breve del contenido.</p>
  </div>
  <div class="card-footer">
    <button class="btn-secondary btn-sm">Más información</button>
  </div>
</article>
```

```css
.card-with-image {
  padding: 0;
  overflow: hidden;
}

.card-image {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-out);
}

.card-interactive:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: var(--space-5);
}

.card-title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
  margin: 0 0 var(--space-2);
}

.card-description {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin: 0;
}

.card-footer {
  padding: var(--space-4) var(--space-5);
  border-top: var(--border-1) solid var(--color-border-subtle);
}
```

### Stats Card

Based on reference design (10K+, 98%, etc.)

```html
<div class="stats-card">
  <div class="stats-value">10K+</div>
  <div class="stats-label">Personas atendidas</div>
</div>
```

```css
.stats-card {
  text-align: center;
  padding: var(--space-6);
}

.stats-value {
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  color: var(--color-celestial-600);
  line-height: var(--leading-none);
}

.stats-label {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-top: var(--space-2);
}
```

### Feature Card

```html
<div class="feature-card">
  <div class="feature-icon">
    <svg>...</svg>
  </div>
  <h3 class="feature-title">Atención personalizada</h3>
  <p class="feature-description">
    Cada persona recibe atención adaptada a sus necesidades específicas.
  </p>
</div>
```

```css
.feature-card {
  padding: var(--space-6);
}

.feature-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--color-celestial-50);
  border-radius: var(--radius-lg);
  color: var(--color-celestial-600);

  margin-bottom: var(--space-4);
}

.feature-title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  margin: 0 0 var(--space-2);
}

.feature-description {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin: 0;
  line-height: var(--leading-relaxed);
}
```

---

## Navigation

### Main Navigation

Based on reference design — clean, minimal header.

```html
<header class="nav">
  <div class="nav-container">
    <a href="/" class="nav-logo">
      <img src="/logo.svg" alt="Pastoral de la Salud">
    </a>

    <nav class="nav-links">
      <a href="/servicios" class="nav-link">Servicios</a>
      <a href="/quienes-somos" class="nav-link">Quiénes somos</a>
      <a href="/recursos" class="nav-link">Recursos</a>
      <a href="/contacto" class="nav-link">Contacto</a>
    </nav>

    <div class="nav-actions">
      <button class="btn-ghost btn-sm">Iniciar sesión</button>
      <button class="btn-primary btn-sm">Solicitar ayuda</button>
    </div>

    <button class="nav-mobile-toggle" aria-label="Menú">
      <svg>...</svg>
    </button>
  </div>
</header>
```

```css
.nav {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);

  height: var(--nav-height);
  background: var(--nav-bg);
  border-bottom: var(--border-1) solid var(--color-border-subtle);
  box-shadow: var(--nav-shadow);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: var(--container-7xl);
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.nav-logo img {
  height: 40px;
  width: auto;
}

.nav-links {
  display: none;
  gap: var(--space-1);
}

@media (min-width: 1024px) {
  .nav-links {
    display: flex;
  }
}

.nav-link {
  padding: var(--nav-item-padding-y) var(--nav-item-padding-x);

  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);
  text-decoration: none;

  border-radius: var(--radius-default);
  transition: var(--transition-colors);
}

.nav-link:hover {
  color: var(--color-text-primary);
  background: var(--color-slate-50);
}

.nav-link.active {
  color: var(--color-celestial-600);
  background: var(--color-celestial-50);
}

.nav-actions {
  display: none;
  gap: var(--space-2);
}

@media (min-width: 1024px) {
  .nav-actions {
    display: flex;
  }
}

.nav-mobile-toggle {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  background: transparent;
  border: none;
  border-radius: var(--radius-default);
  color: var(--color-text-primary);

  cursor: pointer;
}

@media (min-width: 1024px) {
  .nav-mobile-toggle {
    display: none;
  }
}
```

### Breadcrumbs

```html
<nav class="breadcrumbs" aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Inicio</a></li>
    <li><a href="/servicios">Servicios</a></li>
    <li aria-current="page">Visitas domiciliarias</li>
  </ol>
</nav>
```

```css
.breadcrumbs ol {
  display: flex;
  align-items: center;
  gap: var(--space-2);

  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumbs li {
  display: flex;
  align-items: center;
  gap: var(--space-2);

  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.breadcrumbs li:not(:last-child)::after {
  content: '/';
  color: var(--color-text-tertiary);
}

.breadcrumbs a {
  color: var(--color-text-secondary);
  text-decoration: none;
}

.breadcrumbs a:hover {
  color: var(--color-celestial-600);
  text-decoration: underline;
}

.breadcrumbs [aria-current="page"] {
  color: var(--color-text-primary);
  font-weight: var(--font-medium);
}
```

### Tabs

```css
.tabs {
  display: flex;
  gap: var(--space-1);
  border-bottom: var(--border-1) solid var(--color-border-default);
}

.tab {
  padding: var(--space-3) var(--space-4);

  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);

  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;

  cursor: pointer;
  transition: var(--transition-colors);
}

.tab:hover {
  color: var(--color-text-primary);
}

.tab[aria-selected="true"] {
  color: var(--color-celestial-600);
  border-bottom-color: var(--color-celestial-600);
}
```

---

## Modals & Dialogs

### Modal

```html
<div class="modal-backdrop" aria-hidden="true">
  <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div class="modal-header">
      <h2 id="modal-title" class="modal-title">Confirmar acción</h2>
      <button class="modal-close" aria-label="Cerrar">
        <svg>...</svg>
      </button>
    </div>
    <div class="modal-body">
      <p>¿Estás seguro de que deseas continuar?</p>
    </div>
    <div class="modal-footer">
      <button class="btn-secondary">Cancelar</button>
      <button class="btn-primary">Confirmar</button>
    </div>
  </div>
</div>
```

```css
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: var(--z-modal-backdrop);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);

  background: var(--modal-backdrop-bg);

  opacity: 0;
  visibility: hidden;
  transition: opacity var(--duration-normal) var(--ease-default),
              visibility var(--duration-normal) var(--ease-default);
}

.modal-backdrop.open {
  opacity: 1;
  visibility: visible;
}

.modal {
  position: relative;
  z-index: var(--z-modal);

  width: 100%;
  max-width: var(--modal-width-default);
  max-height: calc(100vh - var(--space-8));

  background: var(--modal-bg);
  border-radius: var(--modal-border-radius);
  box-shadow: var(--modal-shadow);

  overflow: hidden;

  transform: scale(0.95) translateY(10px);
  transition: transform var(--duration-normal) var(--ease-out);
}

.modal-backdrop.open .modal {
  transform: scale(1) translateY(0);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--modal-padding);
  border-bottom: var(--border-1) solid var(--color-border-subtle);
}

.modal-title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  margin: 0;
}

.modal-close {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  background: transparent;
  border: none;
  border-radius: var(--radius-default);
  color: var(--color-text-secondary);

  cursor: pointer;
  transition: var(--transition-colors);
}

.modal-close:hover {
  background: var(--color-slate-100);
  color: var(--color-text-primary);
}

.modal-body {
  padding: var(--modal-padding);
  overflow-y: auto;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
  padding: var(--modal-padding);
  border-top: var(--border-1) solid var(--color-border-subtle);
}
```

---

## Feedback & Alerts

### Alert

```html
<div class="alert alert-info" role="alert">
  <svg class="alert-icon">...</svg>
  <div class="alert-content">
    <p class="alert-title">Información importante</p>
    <p class="alert-message">Tu solicitud ha sido recibida y está siendo procesada.</p>
  </div>
  <button class="alert-dismiss" aria-label="Cerrar">
    <svg>...</svg>
  </button>
</div>
```

```css
.alert {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);

  padding: var(--space-4);
  border-radius: var(--radius-lg);
  border: var(--border-1) solid;
}

.alert-info {
  background: var(--color-info-50);
  border-color: var(--color-info-200);
  color: var(--color-info-700);
}

.alert-success {
  background: var(--color-success-50);
  border-color: var(--color-success-200);
  color: var(--color-success-700);
}

.alert-warning {
  background: var(--color-warning-50);
  border-color: var(--color-warning-200);
  color: var(--color-warning-700);
}

.alert-error {
  background: var(--color-error-50);
  border-color: var(--color-error-200);
  color: var(--color-error-700);
}

.alert-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}

.alert-content {
  flex: 1;
}

.alert-title {
  font-weight: var(--font-semibold);
  margin: 0 0 var(--space-1);
}

.alert-message {
  font-size: var(--text-sm);
  margin: 0;
  opacity: 0.9;
}

.alert-dismiss {
  flex-shrink: 0;
  padding: var(--space-1);

  background: transparent;
  border: none;
  border-radius: var(--radius-sm);
  color: inherit;
  opacity: 0.7;

  cursor: pointer;
  transition: opacity var(--duration-fast);
}

.alert-dismiss:hover {
  opacity: 1;
}
```

### Toast Notification

```css
.toast-container {
  position: fixed;
  bottom: var(--space-6);
  right: var(--space-6);
  z-index: var(--z-toast);

  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.toast {
  display: flex;
  align-items: center;
  gap: var(--space-3);

  min-width: 300px;
  max-width: 400px;
  padding: var(--space-4);

  background: var(--color-slate-900);
  color: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);

  animation: slideIn var(--duration-normal) var(--ease-out);
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
```

### Badge

```css
.badge {
  display: inline-flex;
  align-items: center;

  padding: var(--space-0-5) var(--space-2);

  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);

  border-radius: var(--radius-full);
}

.badge-default {
  background: var(--color-slate-100);
  color: var(--color-slate-700);
}

.badge-primary {
  background: var(--color-celestial-100);
  color: var(--color-celestial-700);
}

.badge-success {
  background: var(--color-success-100);
  color: var(--color-success-700);
}

.badge-warning {
  background: var(--color-warning-100);
  color: var(--color-warning-700);
}

.badge-error {
  background: var(--color-error-100);
  color: var(--color-error-700);
}
```

---

## Data Display

### Table

```css
.table-container {
  overflow-x: auto;
  border: var(--border-1) solid var(--color-border-default);
  border-radius: var(--radius-lg);
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--text-sm);
}

.table th {
  padding: var(--space-3) var(--space-4);

  font-weight: var(--font-semibold);
  text-align: left;
  color: var(--color-text-secondary);

  background: var(--color-slate-50);
  border-bottom: var(--border-1) solid var(--color-border-default);
}

.table td {
  padding: var(--space-3) var(--space-4);
  border-bottom: var(--border-1) solid var(--color-border-subtle);
}

.table tbody tr:last-child td {
  border-bottom: none;
}

.table tbody tr:hover {
  background: var(--color-slate-50);
}
```

### Avatar

```css
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: var(--radius-full);
  overflow: hidden;
  background: var(--color-celestial-100);
  color: var(--color-celestial-700);
  font-weight: var(--font-semibold);
}

.avatar-xs { width: 24px; height: 24px; font-size: var(--text-xs); }
.avatar-sm { width: 32px; height: 32px; font-size: var(--text-sm); }
.avatar-md { width: 40px; height: 40px; font-size: var(--text-base); }
.avatar-lg { width: 48px; height: 48px; font-size: var(--text-lg); }
.avatar-xl { width: 64px; height: 64px; font-size: var(--text-xl); }

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Progress Bar

```css
.progress {
  height: 8px;
  background: var(--color-slate-200);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: var(--color-celestial-500);
  border-radius: var(--radius-full);
  transition: width var(--duration-slow) var(--ease-out);
}

.progress-bar-success { background: var(--color-healing-500); }
.progress-bar-warning { background: var(--color-sacred-500); }
.progress-bar-error { background: var(--color-error-500); }
```

---

## Layout Components

### Container

```css
.container {
  width: 100%;
  max-width: var(--container-7xl);
  margin-inline: auto;
  padding-inline: var(--space-4);
}

@media (min-width: 768px) {
  .container {
    padding-inline: var(--space-8);
  }
}

.container-narrow {
  max-width: var(--container-3xl);
}

.container-wide {
  max-width: var(--max-w-screen-2xl);
}
```

### Section

```css
.section {
  padding-block: var(--space-16);
}

@media (min-width: 768px) {
  .section {
    padding-block: var(--space-24);
  }
}

.section-header {
  text-align: center;
  max-width: var(--container-2xl);
  margin-inline: auto;
  margin-bottom: var(--space-12);
}

.section-title {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-4);
}

@media (min-width: 768px) {
  .section-title {
    font-size: var(--text-4xl);
  }
}

.section-description {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 60ch;
  margin-inline: auto;
}
```

### Grid

```css
.grid {
  display: grid;
  gap: var(--space-6);
}

.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

/* Responsive grids */
@media (max-width: 768px) {
  .grid-cols-2,
  .grid-cols-3,
  .grid-cols-4 {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .grid-cols-3,
  .grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### Divider

```css
.divider {
  border: none;
  border-top: var(--border-1) solid var(--color-border-default);
  margin: var(--space-8) 0;
}

.divider-subtle {
  border-color: var(--color-border-subtle);
}
```

---

## Animation Classes

### Entrance Animations

```css
.fade-in {
  animation: fadeIn var(--duration-normal) var(--ease-out);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.slide-up {
  animation: slideUp var(--duration-normal) var(--ease-out);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scale-in {
  animation: scaleIn var(--duration-normal) var(--ease-bounce);
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Stagger Delays

```css
.stagger-1 { animation-delay: 50ms; }
.stagger-2 { animation-delay: 100ms; }
.stagger-3 { animation-delay: 150ms; }
.stagger-4 { animation-delay: 200ms; }
.stagger-5 { animation-delay: 250ms; }
```

---

*Pastoral de la Salud — Diócesis de Armenia*
*"El amor que sana"*
