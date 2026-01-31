# Implementation Plan: Pastoral de la Salud Website

## Overview

Build a complete website for the Pastoral de la Salud ministry of the Diocese of Armenia, Colombia. The implementation follows a phased approach: MVP with static content, then CMS integration, then payments/donations.

---

## Phase 1: Foundation & Setup

**Goal**: Configure the development environment, design system, and base components.

### Tasks

- [x] Install Tailwind CSS and required plugins (@tailwindcss/typography, @tailwindcss/forms, @tailwindcss/aspect-ratio)
- [x] Create `tailwind.config.ts` with design tokens (colors, fonts, shadows, animations)
- [x] Update `globals.css` with Google Fonts imports and CSS custom properties
- [x] Install Lucide React for icons
- [x] Copy logo files to `/public/images/`

### Technical Details

```bash
# Dependencies installed
npm install -D tailwindcss @tailwindcss/typography @tailwindcss/forms @tailwindcss/aspect-ratio postcss autoprefixer
npm install lucide-react
```

**Tailwind Config** (`tailwind.config.ts`):
- Custom colors: `celestial` (blue), `healing` (green), `sacred` (gold)
- Custom fonts: `font-display` (Fraunces), `font-sans` (DM Sans), `font-accent` (Caveat)
- Custom shadows: `shadow-celestial`, `shadow-healing`, `shadow-sacred`
- Custom animations: `fade-in`, `slide-up`, `scale-in`, `pulse-gentle`
- Plugin utilities: `.focus-ring`, `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.btn-emergency`, `.card`

**Google Fonts** (in globals.css):
```css
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap');
```

---

## Phase 2: UI Components

**Goal**: Create reusable UI components following the design system.

### Tasks

- [x] Create `components/ui/Button.tsx` with variants (primary, secondary, ghost, emergency, destructive) and sizes
- [x] Create `components/ui/Card.tsx` with variants (default, elevated, outlined, interactive)
- [x] Create `components/ui/Input.tsx` with label, helper text, error states
- [x] Create `components/ui/Select.tsx` with dropdown styling
- [x] Create `components/ui/Checkbox.tsx` with custom styling for Habeas Data consent
- [x] Create `components/ui/Textarea.tsx` for message fields
- [x] Create `components/ui/Badge.tsx` for status labels
- [x] Create `components/ui/Modal.tsx` for dialogs
- [x] Create `components/ui/index.ts` barrel export

### Technical Details

**Component Structure**:
```
components/
├── ui/
│   ├── Button.tsx      # forwardRef, variants, sizes, loading state
│   ├── Card.tsx        # Card, CardHeader, CardTitle, CardContent, CardFooter
│   ├── Input.tsx       # forwardRef, leftIcon, rightIcon, error
│   ├── Select.tsx      # forwardRef, options array
│   ├── Checkbox.tsx    # forwardRef, custom checkbox with label ReactNode
│   ├── Textarea.tsx    # forwardRef, rows, resize
│   ├── Badge.tsx       # variants: default, primary, success, warning, error, info
│   ├── Modal.tsx       # isOpen, onClose, ESC key, click outside
│   └── index.ts
```

**Button Variants**:
- `primary`: Celestial blue background, white text
- `secondary`: White background, slate border
- `ghost`: Transparent, slate text
- `emergency`: Red background, pulsing animation
- `destructive`: Red background for delete actions

---

## Phase 3: Layout Components

**Goal**: Create the site shell with header, footer, and page wrapper.

### Tasks

- [x] Create `components/layout/Header.tsx` with dual logos, navigation, emergency button, mobile menu
- [x] Create `components/layout/Footer.tsx` with links, contact info, social icons
- [x] Create `components/layout/PageLayout.tsx` wrapper component
- [x] Create `components/layout/index.ts` barrel export

### Technical Details

**Header Features**:
- Dual logos: Pastoral (links to home) + Diócesis (links to external site)
- Separator: `border-r` between logos
- Navigation: Dropdown for Servicios submenu
- Emergency button: Always visible, red, links to `/emergencias`
- Mobile: Hamburger menu with slide-down panel

**Navigation Items**:
```typescript
const navItems = [
  { href: '/quienes-somos', label: 'Quiénes Somos' },
  { href: '/servicios', label: 'Servicios', children: [
    { href: '/servicios/atencion-enfermo', label: 'Atención al Enfermo' },
    { href: '/servicios/apoyo-cuidador', label: 'Apoyo al Cuidador' },
    { href: '/servicios/obra-social', label: 'Obra Social' },
  ]},
  { href: '/formacion', label: 'Formación' },
  { href: '/recursos', label: 'Recursos' },
  { href: '/colaborar', label: 'Colaborar' },
  { href: '/contacto', label: 'Contacto' },
]
```

---

## Phase 4: Section Components

**Goal**: Create reusable content section components.

### Tasks

- [x] Create `components/sections/Hero.tsx` with background image, overlay, CTAs
- [x] Create `components/sections/ServiceCard.tsx` with icon, image, link
- [x] Create `components/sections/TeamMember.tsx` with avatar, role badge, bio
- [x] Create `components/sections/CourseCard.tsx` with price, duration, topics
- [x] Create `components/sections/EmergencyNumber.tsx` with click-to-call
- [x] Create `components/sections/VideoEmbed.tsx` for YouTube responsive embeds
- [x] Create `components/sections/NewsItem.tsx` for news/events cards
- [x] Create `components/sections/index.ts` barrel export

### Technical Details

**Hero Props**:
```typescript
interface HeroProps {
  title: string
  subtitle?: string
  tagline?: string  // Uses font-accent (Caveat)
  description?: string
  primaryCTA?: { label: string; href: string; icon?: ReactNode }
  secondaryCTA?: { label: string; href: string }
  backgroundImage?: string
  overlay?: 'light' | 'dark' | 'gradient'
  alignment?: 'left' | 'center'
  size?: 'default' | 'large'
}
```

**EmergencyNumber**: Click-to-call with `tel:` href, primary variant for main number.

---

## Phase 5: Form Components

**Goal**: Create form components with Habeas Data compliance (Colombian Law 1581/2012).

### Tasks

- [x] Create `components/forms/ContactForm.tsx` with validation and API submission
- [x] Create `components/forms/VolunteerForm.tsx` with area of interest, availability
- [x] Create `components/forms/CourseRegistration.tsx` with course selection
- [x] Create `components/forms/DonationForm.tsx` with amount selection, payment methods
- [x] Create `components/forms/index.ts` barrel export

### Technical Details

**Habeas Data Consent Text** (required on ALL forms):
```
Autorizo a la Pastoral de la Salud — Diócesis de Armenia a recolectar,
almacenar y utilizar mis datos personales de conformidad con la
Política de Tratamiento de Datos Personales, en cumplimiento de la
Ley 1581 de 2012 y el Decreto 1377 de 2013.
```

**Contact Form Fields**:
- nombre (required)
- email (required, validated)
- telefono (required)
- tipoConsulta (select: informacion, atencion-enfermo, apoyo-cuidador, formacion, voluntariado, donacion, otro)
- mensaje (required, textarea)
- habeasData (required checkbox)

**Volunteer Form Fields**:
- Personal: nombre, email, telefono, edad, ocupacion, parroquia
- Preferences: areaInteres (select), disponibilidad (select)
- experiencia (textarea), motivacion (textarea, required)
- habeasData (required)

---

## Phase 6: Core Pages (MVP)

**Goal**: Build all MVP pages with static content.

### Tasks

- [x] Update `app/layout.tsx` with metadata, viewport, fonts
- [x] Create `app/page.tsx` (Home) with hero, stats, services, mission, events, courses preview
- [x] Create `app/quienes-somos/page.tsx` with mission, vision, values, history, team
- [x] Create `app/servicios/page.tsx` with service overview cards
- [x] Create `app/servicios/atencion-enfermo/page.tsx` with detailed service info
- [x] Create `app/servicios/apoyo-cuidador/page.tsx` with detailed service info
- [x] Create `app/servicios/obra-social/page.tsx` with detailed service info
- [x] Create `app/emergencias/page.tsx` with emergency numbers grid, guidance
- [x] Create `app/contacto/page.tsx` with ContactForm, map, contact info
- [x] Create `app/formacion/page.tsx` with course catalog
- [x] Create `app/formacion/inscripcion/page.tsx` with CourseRegistration form
- [x] Create `app/recursos/page.tsx` with spiritual resources hub
- [x] Create `app/colaborar/page.tsx` with donate/volunteer options
- [x] Create `app/colaborar/donar/page.tsx` with DonationForm
- [x] Create `app/colaborar/voluntariado/page.tsx` with VolunteerForm

### Technical Details

**Page Metadata Pattern**:
```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',  // Uses template from layout: "Page Title | Pastoral de la Salud"
  description: 'Page description for SEO',
}
```

**Home Page Sections**:
1. Hero (85vh) with tagline, dual CTAs
2. Stats bar (celestial background)
3. Featured services (3 cards)
4. Mission statement (image + text grid)
5. Upcoming events + Volunteer CTA (5-col grid)
6. Courses preview (3 cards)
7. Final CTA (dark background)

**Emergency Numbers** (for emergencias page):
```typescript
const emergencyNumbers = [
  { name: 'Pastoral de la Salud', number: '+57 606 741 2233', isPrimary: true },
  { name: 'Emergencias médicas', number: '123', description: 'Línea Nacional' },
  { name: 'Bomberos', number: '119' },
  { name: 'Policía', number: '112' },
  { name: 'Cruz Roja', number: '+57 606 741 0000' },
]
```

---

## Phase 7: API Routes

**Goal**: Create API endpoints for form submissions to Google Sheets.

### Tasks

- [x] Create `app/api/contact/route.ts` for contact form submissions
- [x] Create `app/api/sheets/route.ts` for volunteer and course registration
- [x] Create `.env.local.example` template with required environment variables
- [x] Add error handling and rate limiting

### Technical Details

**Environment Variables** (`.env.local`):
```
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
GOOGLE_SHEETS_CLIENT_EMAIL="pastoral-salud@project.iam.gserviceaccount.com"
GOOGLE_SHEETS_SPREADSHEET_ID="1abc..."
```

**API Route Pattern**:
```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    // Append to Google Sheet
    // Return success response

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Error al enviar' }, { status: 500 })
  }
}
```

**Google Sheets Structure**:
- Sheet 1: "Contactos" (fecha, nombre, email, telefono, tipo, mensaje)
- Sheet 2: "Voluntarios" (fecha, nombre, email, telefono, edad, parroquia, area, disponibilidad, experiencia, motivacion)
- Sheet 3: "Inscripciones" (fecha, nombre, cedula, email, telefono, curso, nivel)

---

## Phase 8: Sanity CMS Setup [complex]

**Goal**: Set up Sanity CMS for dynamic content management.

### Tasks

- [ ] Create Sanity project and install dependencies
  - [ ] Run `npm create sanity@latest` in `/sanity` folder
  - [ ] Configure project settings
- [ ] Create content schemas
  - [ ] `teamMember` schema
  - [ ] `service` schema
  - [ ] `course` schema
  - [ ] `spiritualVideo` schema
  - [ ] `downloadable` schema
  - [ ] `news` schema
  - [ ] `emergencyNumber` schema
  - [ ] `siteSettings` schema
- [ ] Configure Sanity Studio
- [ ] Migrate static content to CMS
- [ ] Update pages to fetch from Sanity

### Technical Details

**Install Sanity**:
```bash
cd /Users/cesartaveras/Pastoral-Salud-Armenia
npm create sanity@latest -- --project-name "pastoral-salud" --dataset production --output-path sanity
```

**Schema: teamMember**:
```typescript
export default {
  name: 'teamMember',
  title: 'Miembro del Equipo',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nombre', type: 'string' },
    { name: 'role', title: 'Cargo', type: 'string' },
    { name: 'roleType', title: 'Tipo', type: 'string', options: {
      list: ['obispo', 'delegado', 'coordinador', 'asesor', 'voluntario']
    }},
    { name: 'image', title: 'Foto', type: 'image' },
    { name: 'bio', title: 'Biografía', type: 'text' },
    { name: 'order', title: 'Orden', type: 'number' },
  ]
}
```

**Fetching in Next.js**:
```typescript
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

// In page component
const team = await client.fetch(`*[_type == "teamMember"] | order(order asc)`)
```

---

## Phase 9: Wompi Payment Integration [complex]

**Goal**: Enable online donations via Wompi (Colombian payment gateway).

### Tasks

- [ ] Create Wompi merchant account
- [ ] Install Wompi SDK
- [ ] Create payment checkout component
- [ ] Handle payment webhooks
- [ ] Create donation confirmation page
- [ ] Add email notifications for donations

### Technical Details

**Wompi Integration**:
```bash
npm install @wompi/checkout-js
```

**Checkout Component Pattern**:
```typescript
// components/payments/WompiCheckout.tsx
import { useEffect } from 'react'

interface WompiCheckoutProps {
  amountInCents: number
  reference: string
  customerEmail: string
}

export function WompiCheckout({ amountInCents, reference, customerEmail }: WompiCheckoutProps) {
  useEffect(() => {
    const checkout = new WidgetCheckout({
      currency: 'COP',
      amountInCents,
      reference,
      publicKey: process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY,
      redirectUrl: `${window.location.origin}/colaborar/donar/gracias`,
      customerData: { email: customerEmail },
    })
    checkout.open()
  }, [])

  return <div id="wompi-checkout" />
}
```

**Webhook Handler** (`app/api/wompi/webhook/route.ts`):
- Verify signature with Wompi secret
- Update donation status in database
- Send confirmation email

---

## Phase 10: Virtual Classroom (Future)

**Goal**: Add authenticated access to recorded courses.

### Tasks

- [ ] Install NextAuth.js
- [ ] Configure authentication providers
- [ ] Create student dashboard
- [ ] Add video access controls
- [ ] Generate course completion certificates

### Technical Details

**NextAuth Setup**:
```bash
npm install next-auth
```

**Auth Configuration**:
```typescript
// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
})

export { handler as GET, handler as POST }
```

---

## Progress Summary

| Phase | Status | Completion |
|-------|--------|------------|
| Phase 1: Foundation | Complete | 100% |
| Phase 2: UI Components | Complete | 100% |
| Phase 3: Layout Components | Complete | 100% |
| Phase 4: Section Components | Complete | 100% |
| Phase 5: Form Components | Complete | 100% |
| Phase 6: Core Pages | Complete | 100% |
| Phase 7: API Routes | Complete | 100% |
| Phase 8: Sanity CMS | Not Started | 0% |
| Phase 9: Wompi Payments | Not Started | 0% |
| Phase 10: Virtual Classroom | Not Started | 0% |

**Note:** Phases 8-10 require external service setup (Sanity CMS account, Wompi merchant account, Google OAuth credentials) and are intentionally left for future implementation.
