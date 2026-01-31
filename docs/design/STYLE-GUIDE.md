# Pastoral de la Salud — Style Guide

> **"El amor que sana"** — The love that heals

This guide provides detailed usage rules for applying the design system consistently across all touchpoints.

---

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Color Usage](#color-usage)
3. [Typography](#typography)
4. [Imagery & Photography](#imagery--photography)
5. [Iconography](#iconography)
6. [Voice & Tone](#voice--tone)
7. [Layout Principles](#layout-principles)
8. [Do's and Don'ts](#dos-and-donts)

---

## Brand Identity

### Logo Usage

The Pastoral de la Salud logo carries deep spiritual symbolism and must be treated with respect.

#### Primary Logo
- **Full logo**: Use when space permits and brand recognition is primary goal
- **Minimum size**: 120px width for digital, 30mm for print
- **Clear space**: Maintain padding equal to the "O" in "PASTORAL" on all sides

#### Logo Variations

| Variant | Use Case |
|---------|----------|
| **Full color** | Primary use on light backgrounds |
| **Monochrome** | Low-contrast applications |
| **Icon only** | Favicons, app icons, constrained spaces |

#### Logo Don'ts

- Never rotate or skew the logo
- Never change the logo colors
- Never place on busy backgrounds without sufficient contrast
- Never add effects (shadows, gradients, etc.)
- Never stretch or distort proportions

### Tagline

**"El amor que sana"** (The love that heals)

- Always rendered in the accent font (Caveat)
- May be separated from logo when used as a standalone phrase
- Minimum size: 14px for digital readability

---

## Color Usage

### Primary Palette

#### Celestial Blue — Trust & Divine Presence

| Token | Hex | Usage |
|-------|-----|-------|
| `celestial-500` | #0ea5e9 | Primary actions, links, focus states |
| `celestial-600` | #0284c7 | Hover states for primary buttons |
| `celestial-700` | #0369a1 | Active/pressed states |
| `celestial-50` | #f0f9ff | Light backgrounds, highlights |
| `celestial-100` | #e0f2fe | Secondary backgrounds |

**Use for:** Primary buttons, links, interactive elements, progress indicators, selections

#### Healing Green — Health & Renewal

| Token | Hex | Usage |
|-------|-----|-------|
| `healing-500` | #22c55e | Success states, health indicators |
| `healing-600` | #16a34a | Hover on success elements |
| `healing-100` | #dcfce7 | Success backgrounds, badges |

**Use for:** Success messages, completion states, health status, positive metrics

#### Sacred Gold — Hope & Warmth

| Token | Hex | Usage |
|-------|-----|-------|
| `sacred-500` | #f59e0b | Accents, highlights, spiritual elements |
| `sacred-400` | #fbbf24 | Premium features, badges |
| `sacred-100` | #fef3c7 | Warning backgrounds |

**Use for:** Accent elements, premium badges, spiritual/inspirational content, warnings

### Semantic Colors

| Color | Token | Usage |
|-------|-------|-------|
| **Success** | `success-*` | Confirmations, completed tasks, positive feedback |
| **Warning** | `warning-*` | Cautions, pending actions, attention needed |
| **Error** | `error-*` | Errors, destructive actions, critical alerts |
| **Info** | `info-*` | Informational messages, tips, guidance |

### Color Accessibility

All color combinations must meet WCAG 2.1 AA standards:

| Text Size | Minimum Contrast |
|-----------|------------------|
| Body text (< 18px) | 4.5:1 |
| Large text (≥ 18px bold, ≥ 24px) | 3:1 |
| UI components | 3:1 |

#### Verified Combinations

| Foreground | Background | Ratio | Pass |
|------------|------------|-------|------|
| `slate-900` | `white` | 15.4:1 | AAA |
| `slate-700` | `white` | 8.6:1 | AAA |
| `slate-600` | `white` | 5.7:1 | AA |
| `celestial-700` | `white` | 5.2:1 | AA |
| `white` | `celestial-600` | 4.5:1 | AA |

### Color in Context

#### Healthcare Content
- Use **Healing Green** for positive health indicators
- Use **Celestial Blue** for neutral/informational health data
- Use **Error Red** sparingly—only for critical medical alerts
- Avoid associating colors with specific conditions (stigma)

#### Spiritual Content
- **Sacred Gold** for blessings, prayers, inspirational quotes
- **Celestial Blue** for peaceful, contemplative sections
- Soft gradients from gold to blue evoke divine light

#### Administrative/Data
- Primary **Celestial Blue** for interactive elements
- **Slate grays** for neutral data presentation
- Reserve brand colors for key actions and highlights

---

## Typography

### Font Loading

Include these fonts from Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap" rel="stylesheet">
```

### Type Hierarchy

#### Display (Fraunces)

For hero sections, page titles, and emotional moments.

```css
.display-1 {
  font-family: var(--font-display);
  font-size: var(--text-5xl);     /* 60px */
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

.display-2 {
  font-family: var(--font-display);
  font-size: var(--text-4xl);     /* 48px */
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}
```

#### Headings (DM Sans)

For section titles and content structure.

| Level | Size | Weight | Use |
|-------|------|--------|-----|
| H1 | 38px (3xl) | Semibold | Page titles |
| H2 | 30px (2xl) | Semibold | Major sections |
| H3 | 24px (xl) | Medium | Subsections |
| H4 | 20px (lg) | Medium | Card titles |
| H5 | 16px (base) | Semibold | Small headings |
| H6 | 14px (sm) | Semibold | Labels, captions |

```css
h1 {
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
  color: var(--color-text-primary);
}
```

#### Body Text (DM Sans)

```css
.body-large {
  font-size: var(--text-lg);      /* 20px */
  line-height: var(--leading-relaxed);
}

.body-default {
  font-size: var(--text-base);    /* 16px */
  line-height: var(--leading-normal);
}

.body-small {
  font-size: var(--text-sm);      /* 14px */
  line-height: var(--leading-normal);
}

.caption {
  font-size: var(--text-xs);      /* 12px */
  line-height: var(--leading-normal);
  color: var(--color-text-secondary);
}
```

#### Accent (Caveat)

For taglines, quotes, and personal touches.

```css
.tagline {
  font-family: var(--font-accent);
  font-size: var(--text-2xl);
  font-weight: var(--font-medium);
  color: var(--color-sacred-600);
}

.quote {
  font-family: var(--font-accent);
  font-size: var(--text-xl);
  font-style: italic;
}
```

### Typography Rules

1. **Never use more than 3 font sizes** on a single screen
2. **Maintain consistent hierarchy** — larger = more important
3. **Line length**: 45-75 characters for body text (use `max-width: 65ch`)
4. **Paragraph spacing**: Use `margin-bottom: 1.5em` between paragraphs
5. **Don't justify text** — it creates uneven spacing

### Responsive Typography

Scale down for mobile:

```css
@media (max-width: 768px) {
  .display-1 { font-size: var(--text-4xl); }  /* 48px */
  .display-2 { font-size: var(--text-3xl); }  /* 38px */
  h1 { font-size: var(--text-2xl); }          /* 30px */
  h2 { font-size: var(--text-xl); }           /* 24px */
}
```

---

## Imagery & Photography

### Photography Style

Our imagery communicates compassion, hope, and community.

#### Characteristics

| Quality | Description |
|---------|-------------|
| **Lighting** | Warm, natural light. Golden hour preferred. Soft shadows. |
| **Color** | Slightly warm color grade. Never oversaturated. |
| **Subjects** | Real people, authentic moments, diverse ages |
| **Composition** | Intimate, focused on human connection |
| **Environment** | Healthcare settings, homes, community spaces, nature |

#### Subject Guidelines

**Do include:**
- Caregivers with patients (with consent)
- Families in supportive moments
- Volunteers in action
- Community gatherings
- Hands held in prayer or comfort
- Nature from Quindío region (coffee landscapes, mountains)

**Avoid:**
- Stock photo aesthetics
- Overly clinical/sterile imagery
- Distressed or suffering subjects without context of hope
- Religious imagery that may exclude (use universal spirituality)

### Image Treatment

#### Overlays

When text overlays images:
```css
.image-overlay {
  background: linear-gradient(
    to bottom,
    rgba(15, 23, 42, 0) 0%,
    rgba(15, 23, 42, 0.7) 100%
  );
}
```

#### Rounded Corners

Images should use consistent radius:
- Cards: `var(--radius-xl)` (16px)
- Avatars: `var(--radius-full)` (circle)
- Hero images: `var(--radius-2xl)` (20px) or no radius

#### Aspect Ratios

| Use Case | Ratio |
|----------|-------|
| Hero banners | 16:9 or 21:9 |
| Cards | 4:3 or 16:9 |
| Thumbnails | 1:1 |
| Profile photos | 1:1 |

### Illustrations

When using illustrations:
- Soft, organic line work
- Match brand colors (Celestial, Healing, Sacred)
- Semi-flat style with subtle gradients
- Convey warmth, not clinical precision

---

## Iconography

### Icon System

Use **Lucide Icons** (lucide.dev) as the primary icon set.

#### Characteristics

- 24×24px default size
- 1.5px stroke weight
- Rounded caps and joins
- Consistent visual weight

#### Size Scale

| Size | Pixels | Use Case |
|------|--------|----------|
| xs | 16px | Inline with small text |
| sm | 20px | Buttons, inputs |
| default | 24px | General UI |
| lg | 32px | Feature highlights |
| xl | 48px | Empty states, onboarding |

#### Icon Colors

- **Primary actions**: `var(--color-celestial-600)`
- **Secondary/neutral**: `var(--color-slate-500)`
- **Success**: `var(--color-healing-600)`
- **Warning**: `var(--color-sacred-600)`
- **Error**: `var(--color-error-600)`
- **On dark backgrounds**: `#ffffff`

### Custom Icons

For ministry-specific concepts not in Lucide:
- Maintain same visual style (stroke, weight)
- Design at 24×24 with 2px padding
- Export as SVG with `currentColor` for flexibility

### Icon + Text Pairing

```css
.icon-text {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.icon-text svg {
  flex-shrink: 0;
}
```

---

## Voice & Tone

### Brand Voice

Our voice is **compassionate**, **hopeful**, and **welcoming**.

#### Voice Characteristics

| Trait | Description | Example |
|-------|-------------|---------|
| **Warm** | Friendly, human, caring | "We're here for you" not "Services available" |
| **Clear** | Simple, jargon-free | "Schedule a visit" not "Submit appointment request" |
| **Hopeful** | Positive, encouraging | "Together, we can help" not "Problems exist" |
| **Respectful** | Dignified, never condescending | "You know what's best for your family" |
| **Inclusive** | Welcoming to all faiths and backgrounds | Avoid exclusive religious language |

### Tone Adaptation

Adjust tone based on context:

| Context | Tone | Example |
|---------|------|---------|
| **Welcome/Onboarding** | Warm, encouraging | "Welcome! We're glad you're here." |
| **Success states** | Celebratory, affirming | "Your appointment is confirmed!" |
| **Errors** | Gentle, helpful | "We couldn't complete that. Let's try again." |
| **Sensitive content** | Empathetic, supportive | "We understand this is difficult." |
| **Data/Reports** | Clear, professional | "15 visits completed this month." |

### Writing Guidelines

#### Headlines
- Action-oriented
- Benefit-focused
- 5-10 words max

```
✓ "Find support when you need it most"
✗ "Pastoral Healthcare Services Information Portal"
```

#### Body Copy
- Short paragraphs (2-3 sentences)
- Active voice
- Second person ("you") for instructions
- First person plural ("we") for the organization

#### Buttons & CTAs
- Start with a verb
- Be specific about the outcome
- 2-4 words

```
✓ "Schedule a Visit"
✓ "Contact Us"
✓ "Learn More"
✗ "Click Here"
✗ "Submit"
```

#### Error Messages

1. Say what happened
2. Say why (if helpful)
3. Say what to do next

```
✓ "We couldn't find that address. Please check the spelling and try again."
✗ "Error 404: Resource not found"
```

### Spanish Language Guidelines

Primary language is Spanish (Colombian):
- Use Colombian Spanish conventions
- Avoid regional slang that may confuse
- Use formal "usted" for professional contexts
- Use informal "tú" for peer support contexts
- Always include accents and ñ properly

---

## Layout Principles

### Grid System

Use a 12-column grid with responsive gutters:

| Breakpoint | Columns | Gutter | Margin |
|------------|---------|--------|--------|
| Mobile | 4 | 16px | 16px |
| Tablet | 8 | 24px | 32px |
| Desktop | 12 | 24px | auto (centered) |

### Container Widths

```css
.container {
  width: 100%;
  max-width: var(--container-7xl); /* 1280px */
  margin-inline: auto;
  padding-inline: var(--space-4);
}

@media (min-width: 768px) {
  .container {
    padding-inline: var(--space-8);
  }
}
```

### Vertical Rhythm

Use consistent spacing between sections:

| Between | Spacing |
|---------|---------|
| Page sections | `var(--space-16)` to `var(--space-24)` |
| Content blocks | `var(--space-8)` to `var(--space-12)` |
| Related items | `var(--space-4)` to `var(--space-6)` |
| Text elements | `var(--space-2)` to `var(--space-4)` |

### Card Layouts

Cards should follow the reference design:

```css
.card {
  background: var(--card-bg);
  border-radius: var(--card-border-radius);
  padding: var(--card-padding);
  box-shadow: var(--card-shadow);
  transition: var(--transition-shadow);
}

.card:hover {
  box-shadow: var(--card-shadow-hover);
}
```

### Whitespace Philosophy

- **Generous**: Don't crowd elements; breathing room reduces stress
- **Purposeful**: Group related items, separate unrelated ones
- **Asymmetric**: Slight asymmetry adds visual interest
- **Responsive**: Reduce spacing on mobile, not eliminate it

---

## Do's and Don'ts

### Color

| Do | Don't |
|----|-------|
| Use semantic colors for states | Use red for non-error content |
| Test contrast ratios | Assume colors are readable |
| Use brand colors for key actions | Overuse brand colors everywhere |

### Typography

| Do | Don't |
|----|-------|
| Use the defined type scale | Create arbitrary sizes |
| Maintain visual hierarchy | Use too many font weights |
| Set appropriate line lengths | Let text span full width |

### Imagery

| Do | Don't |
|----|-------|
| Use authentic, warm photography | Use clinical/sterile stock photos |
| Include diverse representation | Show suffering without hope |
| Optimize for web performance | Use uncompressed images |

### Components

| Do | Don't |
|----|-------|
| Follow component specifications | Modify core component styles |
| Use tokens for all values | Hardcode colors or sizes |
| Test across screen sizes | Design only for desktop |

### Content

| Do | Don't |
|----|-------|
| Write in warm, clear language | Use jargon or technical terms |
| Be encouraging and hopeful | Be clinical or cold |
| Respect user privacy | Ask for unnecessary information |

---

## Quick Reference

### Essential Tokens

```css
/* Primary button */
background: var(--color-celestial-600);
color: white;
padding: var(--space-2-5) var(--space-4);
border-radius: var(--radius-lg);
font-weight: var(--font-medium);

/* Card */
background: var(--color-surface-primary);
border-radius: var(--radius-xl);
padding: var(--space-6);
box-shadow: var(--shadow-sm);

/* Input */
height: var(--input-height);
border: var(--border-1) solid var(--color-border-default);
border-radius: var(--radius-lg);
padding: 0 var(--space-3);
```

### Common Patterns

```css
/* Focus ring */
:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}

/* Smooth hover */
.interactive {
  transition: var(--transition-colors), var(--transition-shadow);
}

/* Text truncation */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

---

*Pastoral de la Salud — Diócesis de Armenia*
*"El amor que sana"*
