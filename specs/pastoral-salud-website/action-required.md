# Action Required: Pastoral de la Salud Website

Manual steps that must be completed by a human. These cannot be automated.

---

## Before Implementation

### Phase 7: API Routes

- [ ] **Create Google Cloud Project** - Required for Google Sheets API integration
- [ ] **Enable Google Sheets API** - Must be enabled in Google Cloud Console
- [ ] **Create Service Account** - Generate credentials for server-side API access
- [ ] **Download Service Account JSON** - Extract private key and client email
- [ ] **Create Google Spreadsheet** - Create the target spreadsheet and share with service account email
- [ ] **Set environment variables** - Add `GOOGLE_SHEETS_*` vars to `.env.local` and Vercel

### Phase 8: Sanity CMS

- [ ] **Create Sanity.io account** - Free tier at sanity.io/signup
- [ ] **Create Sanity project** - Via CLI or dashboard
- [ ] **Note Project ID** - Required for environment variables
- [ ] **Create API token** - For server-side content fetching
- [ ] **Set environment variables** - Add `SANITY_*` vars to `.env.local` and Vercel

### Phase 9: Wompi Payments

- [ ] **Register Wompi merchant account** - At comercios.wompi.co
- [ ] **Complete business verification** - KYC process with Colombian business documents
- [ ] **Link bank account** - For receiving donation payouts
- [ ] **Get API credentials** - Public key and private/secret keys
- [ ] **Configure webhook URL** - Point to your `/api/wompi/webhook` endpoint
- [ ] **Set environment variables** - Add `WOMPI_*` vars to `.env.local` and Vercel

### Phase 10: Virtual Classroom

- [ ] **Create Google OAuth app** - In Google Cloud Console for NextAuth
- [ ] **Configure OAuth consent screen** - With proper branding and scopes
- [ ] **Get OAuth credentials** - Client ID and Client Secret
- [ ] **Set environment variables** - Add `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `NEXTAUTH_SECRET`

---

## During Implementation

### Domain & Hosting

- [ ] **Register domain** - Suggested: `pastoralsaludarmenia.org` or coordinate subdomain with Diócesis
- [ ] **Create Vercel account** - Free tier at vercel.com
- [ ] **Connect GitHub repository** - For automatic deployments
- [ ] **Configure custom domain** - In Vercel project settings
- [ ] **Set up DNS records** - Point domain to Vercel

### Content

- [ ] **Collect team member photos** - For Quiénes Somos page
- [ ] **Verify emergency phone numbers** - Confirm all numbers are correct and active
- [ ] **Get bank account details** - For donation page (account number, bank, NIT)
- [ ] **Get Nequi number** - For mobile payment option
- [ ] **Collect YouTube video IDs** - For spiritual resources section
- [ ] **Write course descriptions** - Content for Formation section

---

## After Implementation

### Launch Checklist

- [ ] **Test all forms** - Verify data arrives in Google Sheets
- [ ] **Test emergency buttons** - Verify click-to-call works on mobile
- [ ] **Review on multiple devices** - Chrome, Safari, Firefox, iOS, Android
- [ ] **Check Lighthouse scores** - Performance, Accessibility, SEO > 90
- [ ] **Submit to Google Search Console** - For indexing
- [ ] **Set up Google Analytics or Plausible** - Optional, for traffic monitoring

### Ongoing Maintenance

- [ ] **Train content editors** - On using Sanity Studio (after Phase 8)
- [ ] **Set up backup schedule** - Export Sanity content periodically
- [ ] **Monitor form submissions** - Check Google Sheets regularly
- [ ] **Review donation reports** - From Wompi dashboard (after Phase 9)

---

## Environment Variables Summary

Create `.env.local` with:

```bash
# Google Sheets (Phase 7)
GOOGLE_SHEETS_PRIVATE_KEY="..."
GOOGLE_SHEETS_CLIENT_EMAIL="..."
GOOGLE_SHEETS_SPREADSHEET_ID="..."

# Sanity CMS (Phase 8)
NEXT_PUBLIC_SANITY_PROJECT_ID="..."
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="..."

# Wompi Payments (Phase 9)
NEXT_PUBLIC_WOMPI_PUBLIC_KEY="..."
WOMPI_PRIVATE_KEY="..."
WOMPI_EVENTS_SECRET="..."

# NextAuth (Phase 10)
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="https://pastoralsaludarmenia.org"
```

---

> **Note:** These tasks are also listed in context within `implementation-plan.md`
