# Requirements: Pastoral de la Salud Website

## Overview

A website for the Pastoral de la Salud (Healthcare Pastoral Ministry) of the Diocese of Armenia, Quindío, Colombia. The site serves as the digital presence for the ministry that accompanies sick people, their families, and caregivers with spiritual, emotional, and material support.

## Business Goals

1. **Increase visibility** of the Pastoral de la Salud ministry in the Quindío region
2. **Facilitate access** to emergency spiritual care through prominent emergency contact information
3. **Recruit volunteers** through an easy registration process
4. **Enable donations** via multiple Colombian payment methods (PSE, Nequi, credit cards)
5. **Provide formation** through course catalogs and registration
6. **Share spiritual resources** including videos, prayers, and downloadable materials

## Target Audience

- **Primary**: Families with sick members seeking spiritual support
- **Secondary**: Potential volunteers interested in serving
- **Tertiary**: Donors and parish communities

## Core Features

### Must Have (MVP)

- [ ] Dual-logo header (Pastoral de la Salud + Diócesis de Armenia)
- [ ] Emergency button visible on all pages with quick access to emergency numbers
- [ ] Home page with hero, services overview, upcoming events
- [ ] About page (Quiénes Somos) with team structure
- [ ] Services pages (3 sub-services: Atención al Enfermo, Apoyo al Cuidador, Obra Social)
- [ ] Emergency page with SOS numbers and guidance
- [ ] Contact form with Habeas Data consent (Colombian Law 1581/2012)
- [ ] Google Sheets integration for form submissions
- [ ] Responsive design (mobile-first)
- [ ] Spanish language throughout

### Should Have (Phase 2)

- [ ] Sanity CMS integration for dynamic content
- [ ] Formation/courses catalog page
- [ ] Course registration form
- [ ] Spiritual resources page with YouTube video embeds
- [ ] News/events section
- [ ] Downloadable resources (PDFs, prayers)

### Nice to Have (Phase 3+)

- [ ] Wompi payment integration for online donations
- [ ] Volunteer management portal
- [ ] Virtual classroom with NextAuth authentication
- [ ] Course certificates generation

## Technical Requirements

### Stack

| Component | Technology | Justification |
|-----------|------------|---------------|
| Framework | Next.js 16 + React 19 | Already configured, SSR for SEO |
| Styling | Tailwind CSS | Design system defined in docs |
| CMS | Sanity.io | Free tier, Spanish-friendly |
| Forms | Google Sheets API | Client requirement |
| Payments | Wompi | Best for Colombia (PSE, Nequi) |
| Videos | YouTube embeds | Free, easy to manage |
| Images | Pexels.com | Free high-quality placeholders |
| Hosting | Vercel | Free tier, optimal for Next.js |

### Design System

- **Fonts**: Fraunces (display), DM Sans (body), Caveat (accent)
- **Colors**: Celestial Blue (primary), Healing Green (secondary), Sacred Gold (accent)
- **Tagline**: "El amor que sana" (The love that heals)
- Detailed design tokens in `/docs/design/tokens/`

### Compliance

- **Habeas Data**: All forms must include explicit consent checkbox per Colombian Law 1581/2012
- **Accessibility**: WCAG 2.1 AA compliance
- **Privacy**: No tracking without consent

## Acceptance Criteria

### Phase 1 (MVP)
- [ ] Site loads in < 3 seconds on 3G connection
- [ ] Lighthouse scores > 90 for Performance, Accessibility, SEO
- [ ] All forms submit successfully to Google Sheets
- [ ] Emergency number is visible and clickable on all pages
- [ ] Site displays correctly on Chrome, Safari, Firefox, and mobile browsers
- [ ] All content is in Spanish with proper accents

### Phase 2
- [ ] Content editors can update team members, services, and news via Sanity
- [ ] YouTube videos load lazily and don't block page render
- [ ] Course registration data flows to Google Sheets

### Phase 3
- [ ] Donations can be completed via bank transfer, Nequi, and credit card
- [ ] Donation receipts are sent automatically
- [ ] Volunteer applications are tracked in a dashboard

## Dependencies

- Google Cloud project for Sheets API
- Sanity.io account (Phase 2)
- Wompi merchant account (Phase 3)
- Domain name (suggested: pastoralsaludarmenia.org)
- Vercel account for hosting

## Related Documents

- `/docs/design/DESIGN-SYSTEM.md` - Complete design specifications
- `/docs/design/tokens/` - CSS and Tailwind tokens
- `/docs/design/components/` - Component specifications
