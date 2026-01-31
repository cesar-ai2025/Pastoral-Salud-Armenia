# Form Component Specifications

## Overview

Forms are critical for collecting user information. They must be clear, accessible, and forgiving of errors. Healthcare contexts require extra sensitivity.

---

## Form Field Anatomy

```
┌─ Form Field ─────────────────────────────────────────┐
│                                                      │
│  Label *                         ← Label + Required  │
│  ┌──────────────────────────────────────────────┐    │
│  │  Placeholder text...                         │    │ ← Input
│  └──────────────────────────────────────────────┘    │
│  Helper text provides additional context.            │ ← Helper
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## Text Input

### Specifications

| Property | Value |
|----------|-------|
| Height | 40px (default), 32px (sm), 44px (lg) |
| Padding | 12px horizontal |
| Font size | 16px (prevents iOS zoom) |
| Border | 1px solid `slate-200` |
| Border radius | 12px (`radius-lg`) |
| Background | White |

### States

| State | Visual |
|-------|--------|
| Default | Border: `slate-200` |
| Hover | Border: `slate-300` |
| Focus | Border: `celestial-500`, Focus ring |
| Filled | Same as default |
| Disabled | Background: `slate-100`, Text: `slate-400` |
| Error | Border: `error-500`, Focus ring in `error-500` |
| Success | Border: `healing-500` (optional) |

### Placeholder

- Color: `slate-400`
- Should describe expected format, not repeat label
- Example: "tu@correo.com" not "Ingresa tu correo"

---

## Label

### Specifications

| Property | Value |
|----------|-------|
| Font size | 14px (`text-sm`) |
| Font weight | Medium (500) |
| Color | `slate-900` |
| Spacing below | 6px |

### Required Indicator

- Red asterisk: `error-500`
- Position: After label text
- Screen reader: Use `aria-required="true"` on input

---

## Helper Text

### Specifications

| Property | Value |
|----------|-------|
| Font size | 12px (`text-xs`) |
| Color | `slate-500` |
| Spacing above | 6px |

### Usage

- Provide format hints: "Formato: DD/MM/AAAA"
- Explain requirements: "Mínimo 8 caracteres"
- Never repeat the label

---

## Error Messages

### Specifications

| Property | Value |
|----------|-------|
| Font size | 12px (`text-xs`) |
| Color | `error-600` |
| Icon | Error icon (optional) |
| Position | Below input, replaces helper text |

### Writing Guidelines

1. Say what's wrong
2. Say how to fix it
3. Be specific, not generic

```
✓ "El correo debe incluir un @"
✗ "Campo inválido"

✓ "La contraseña debe tener al menos 8 caracteres"
✗ "Error de validación"
```

---

## Textarea

### Specifications

| Property | Value |
|----------|-------|
| Min height | 120px |
| Padding | 12px |
| Resize | Vertical only |
| Character count | Optional, shown below |

### Character Count

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  User's text here...                                 │
│                                                      │
│                                                      │
└──────────────────────────────────────────────────────┘
                                              127/500
```

---

## Select (Dropdown)

### Specifications

- Same dimensions as text input
- Custom chevron icon (right-aligned)
- Native `<select>` for accessibility
- Custom styling via appearance: none

### Placeholder Option

```html
<select>
  <option value="" disabled selected>Selecciona una opción</option>
  <option value="1">Opción 1</option>
  <option value="2">Opción 2</option>
</select>
```

---

## Checkbox

### Specifications

| Property | Value |
|----------|-------|
| Size | 20×20px |
| Border | 2px solid `slate-300` |
| Border radius | 4px (`radius-sm`) |
| Checked background | `celestial-600` |
| Checkmark | White, 2px stroke |

### Layout

```
┌──┐
│✓ │  Label text can wrap to
└──┘  multiple lines if needed
```

- Checkbox aligned to first line of text
- Gap between checkbox and label: 12px
- Clickable area includes label

---

## Radio Button

### Specifications

| Property | Value |
|----------|-------|
| Size | 20×20px |
| Border | 2px solid `slate-300` |
| Border radius | Full (circle) |
| Selected | 6px inner circle, `celestial-600` |

### Group Layout

```
○ Option 1
● Option 2 (selected)
○ Option 3
```

- Vertical stack by default
- Horizontal for ≤3 short options
- Gap between options: 12px

---

## Toggle Switch

### Specifications

| Property | Value |
|----------|-------|
| Track size | 44×24px |
| Knob size | 20×20px |
| Track off | `slate-300` |
| Track on | `celestial-600` |
| Knob | White, subtle shadow |

### Layout

```
Label text                    [====○]
Description if needed
```

- Label on left, toggle on right
- Optional description below label

---

## Form Layout

### Vertical (Default)

```
┌─────────────────────────────────┐
│ Label                           │
│ [Input                        ] │
│                                 │
│ Label                           │
│ [Input                        ] │
│                                 │
│ Label                           │
│ [Input                        ] │
│                                 │
│         [Cancel] [Submit]       │
└─────────────────────────────────┘
```

- Gap between fields: 24px
- Gap between label and input: 6px

### Two-Column

```
┌────────────────────────────────────────────────────┐
│ Label                    Label                     │
│ [Input               ]   [Input               ]    │
│                                                    │
│ Label                                              │
│ [Input                                         ]   │
└────────────────────────────────────────────────────┘
```

- Use for related short fields (first/last name)
- Gap between columns: 16px
- Collapse to single column on mobile

### Field Groups

```
Personal Information
├─ Nombre
├─ Apellido
└─ Correo

Dirección
├─ Calle
├─ Ciudad
└─ País
```

- Group heading: `text-sm`, `font-semibold`, `text-slate-500`
- Margin above group: 32px

---

## Form Actions

### Button Placement

```
                        [Secondary] [Primary]
```

- Right-aligned
- Primary action on the right
- Gap between buttons: 12px

### Mobile Adjustment

```
[Primary (full width)        ]
[Secondary (full width)      ]
```

- Stack vertically
- Primary on top
- Full width buttons

---

## Validation

### When to Validate

| Timing | Use Case |
|--------|----------|
| On blur | Most fields |
| On change | After first blur error |
| On submit | All fields |
| Real-time | Password strength, character count |

### Validation Flow

1. User focuses field
2. User types
3. User blurs field
4. Validate → Show error if invalid
5. User re-focuses and fixes
6. Re-validate on change
7. Clear error when valid

---

## Accessibility

### Labels

- Every input needs a visible label
- Use `<label for="id">` properly
- Don't rely on placeholder alone

### Error Handling

- Use `aria-invalid="true"` on invalid inputs
- Use `aria-describedby` to link error messages
- Announce errors to screen readers

### Keyboard

- Logical tab order
- Enter submits forms
- Escape cancels/closes

### Touch

- Minimum 44×44px touch targets
- 8px minimum spacing between targets

---

## Code Examples

### React/JSX

```jsx
// Form field with error
<div className="form-field">
  <label htmlFor="email" className="form-label">
    Correo electrónico
    <span className="text-error-500 ml-0.5">*</span>
  </label>
  <input
    type="email"
    id="email"
    className={`input ${error ? 'input-error' : ''}`}
    aria-invalid={error ? 'true' : undefined}
    aria-describedby={error ? 'email-error' : 'email-hint'}
  />
  {error ? (
    <p id="email-error" className="form-error">
      {error}
    </p>
  ) : (
    <p id="email-hint" className="form-helper">
      Te enviaremos confirmaciones aquí.
    </p>
  )}
</div>
```

### Tailwind Classes

```html
<!-- Input -->
<input
  type="text"
  class="w-full h-10 px-3 text-base
         bg-white border border-slate-200 rounded-lg
         placeholder:text-slate-400
         hover:border-slate-300
         focus:outline-none focus:border-celestial-500 focus:ring-2 focus:ring-celestial-500/20
         disabled:bg-slate-100 disabled:text-slate-400"
/>

<!-- Input with error -->
<input
  type="text"
  class="... border-error-500 focus:border-error-500 focus:ring-error-500/20"
/>
```

---

## Do's and Don'ts

| Do | Don't |
|----|-------|
| Use clear, descriptive labels | Rely on placeholders as labels |
| Show errors inline near the field | Show all errors at top of form |
| Use specific error messages | Use generic "invalid" messages |
| Mark optional fields (not required) | Mark every required field |
| Group related fields logically | Mix unrelated fields together |
| Preserve data after errors | Clear form on validation failure |
