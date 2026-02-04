# Oceara Integration Plan
## Connecting Frontend to Backend + Rebrand

---

## Current Architecture

```
/Users/josephhernandez/Desktop/Oceara/
├── tidepool-app/          # Next.js frontend (needs rebrand)
│   ├── src/app/           # Pages & API routes
│   ├── src/components/    # React components
│   ├── src/lib/           # Supabase client, utilities
│   └── .env.local         # Environment variables
│
├── pipeline/              # Python bioinformatics backend
│   ├── app.py             # Flask API
│   ├── orchestrator.py    # Pipeline orchestration
│   ├── steps/             # Processing steps
│   └── config.py          # Configuration
│
└── New project/           # Static marketing site (oceara.io)
    ├── index.html
    ├── demo.html, contact.html, etc.
    └── logo.svg, favicon.svg
```

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Marketing Site** | Static HTML | oceara.io landing pages |
| **Web App** | Next.js 14 | Dashboard, upload, reports |
| **Auth & DB** | Supabase | User auth, sample metadata, results |
| **Compute** | Modal | Run bioinformatics pipeline |
| **AI** | Anthropic Claude | Interpret results, chat |
| **Hosting** | Vercel | Frontend + API routes |
| **Domain** | oceara.io | Already configured |

---

## Phase 1: Rebrand App (2-3 hours)

### 1.1 Rename folder
```bash
mv tidepool-app oceara-app
```

### 1.2 Update package.json
```json
{
  "name": "oceara-app",
  ...
}
```

### 1.3 Global find/replace in codebase
| Find | Replace |
|------|---------|
| `Tidepools` | `Oceara` |
| `Tidepool` | `Oceara` |
| `tidepools` | `oceara` |
| `tidepool` | `oceara` |
| `@tidepools.ai` | `@oceara.io` |

### 1.4 Update branding assets
- Copy `logo.svg` and `favicon.svg` from marketing site
- Update Tailwind config with Oceara colors:
```js
// tailwind.config.ts
colors: {
  'deep-ocean': '#0A2540',
  'ocean-blue': '#00A5E0',
  'seafoam': '#00D4AA',
  'sky-tide': '#7DD3E8',
  'kelp-green': '#2ECC71',
  'mist': '#F8FBFD',
}
```

### 1.5 Update layout.tsx
- Change title to "Oceara"
- Update meta descriptions
- Link to new favicon

---

## Phase 2: Connect Marketing Site to App (1 hour)

### 2.1 Update marketing site links

| Button/Link | Current | New |
|-------------|---------|-----|
| Sign in | `signin.html` | `https://app.oceara.io/login` |
| Book a demo | `demo.html` | Keep (Youform) |
| Dashboard | N/A | `https://app.oceara.io/dashboard` |

### 2.2 Deploy app to Vercel
```bash
cd oceara-app
vercel --prod
```

### 2.3 Configure subdomain
- In Vercel: Add domain `app.oceara.io`
- In DNS: Add CNAME `app` → Vercel

### 2.4 URL structure
| URL | Purpose |
|-----|---------|
| `oceara.io` | Marketing site (static) |
| `app.oceara.io` | Web application |
| `app.oceara.io/login` | Sign in |
| `app.oceara.io/dashboard` | User dashboard |
| `app.oceara.io/upload` | Upload samples |
| `app.oceara.io/sample/[id]` | Sample results |

---

## Phase 3: Configure Backend Services (2-3 hours)

### 3.1 Supabase Setup
1. Create new project or rename existing
2. Update environment variables:
```env
NEXT_PUBLIC_SUPABASE_URL=https://[project].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

### 3.2 Modal Pipeline Deployment
```bash
cd pipeline
modal deploy app.py
```

Update webhook URL:
```env
MODAL_WEBHOOK_URL=https://app.oceara.io/api/webhooks/modal
MODAL_TRIGGER_URL=https://[workspace]--oceara-pipeline-trigger.modal.run
```

### 3.3 Anthropic API
```env
ANTHROPIC_API_KEY=sk-ant-...
```

### 3.4 Update Vercel Environment Variables
In Vercel dashboard → Settings → Environment Variables:
- Add all variables from `.env.local`
- Set for Production, Preview, Development

---

## Phase 4: Test Full Flow (1-2 hours)

### 4.1 Auth Flow
- [ ] Sign up works
- [ ] Sign in works
- [ ] Password reset works
- [ ] Session persists

### 4.2 Upload Flow
- [ ] File upload to Supabase storage
- [ ] Metadata form saves
- [ ] Pipeline triggers on Modal

### 4.3 Processing Flow
- [ ] Pipeline runs on Modal
- [ ] Webhook updates sample status
- [ ] Results appear in dashboard

### 4.4 Results Flow
- [ ] Species list displays
- [ ] Map shows locations
- [ ] AI interpretation works
- [ ] Chat works
- [ ] Report generates

---

## Phase 5: Polish & Launch (2-3 hours)

### 5.1 Update all email references
- `hello@oceara.io`
- `support@oceara.io`
- `security@oceara.io`
- `privacy@oceara.io`

### 5.2 Set up email forwarding
In domain provider or Google Workspace

### 5.3 Final checks
- [ ] All links work
- [ ] Mobile responsive
- [ ] Loading states
- [ ] Error handling
- [ ] 404 page

### 5.4 Remove old references
- Delete `Tidepool-Production-Readiness-Report.md` or rename
- Update any remaining branding

---

## File Changes Summary

### Marketing Site (New project/)
```
index.html        → Update Sign in link to app.oceara.io
signin.html       → Redirect to app.oceara.io/login (or delete)
demo.html         → Keep (Youform)
All other pages   → Keep as-is
```

### App (tidepool-app/ → oceara-app/)
```
package.json      → Rename to oceara-app
tailwind.config   → Add Oceara colors
src/app/layout.tsx → Update title, meta, favicon
src/components/   → Update logo, branding
All .tsx files    → Find/replace Tidepool → Oceara
.env.local        → Update webhook URLs
```

### Pipeline (pipeline/)
```
app.py           → Update any branding in responses
config.py        → Update any URLs
No major changes needed - backend is brand-agnostic
```

---

## Environment Variables Checklist

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Anthropic
ANTHROPIC_API_KEY=

# Modal
MODAL_WEBHOOK_URL=https://app.oceara.io/api/webhooks/modal
MODAL_WEBHOOK_SECRET=
MODAL_TRIGGER_URL=

# Optional
MOCK_PIPELINE=false
DEBUG=false
```

---

## Timeline Estimate

| Phase | Time | Priority |
|-------|------|----------|
| Phase 1: Rebrand | 2-3 hrs | High |
| Phase 2: Connect | 1 hr | High |
| Phase 3: Backend | 2-3 hrs | High |
| Phase 4: Test | 1-2 hrs | High |
| Phase 5: Polish | 2-3 hrs | Medium |
| **Total** | **8-12 hrs** | |

---

## Questions to Resolve

1. **Supabase project**: Create new or use existing?
2. **Modal workspace**: Already deployed or need setup?
3. **Email**: Set up hello@oceara.io forwarding?
4. **Auth**: Keep existing users or fresh start?

---

## Next Step

Ready to start Phase 1 (Rebrand)?

Run: `claude "Start Phase 1 of the Oceara integration plan"`
