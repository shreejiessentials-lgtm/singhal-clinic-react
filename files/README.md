# AI Business Assistant — Reusable Demo Template
## Setup guide: one-time infra → per-client 10 minutes

This template has 3 working parts:
1. `index.html` — landing page + chat widget (reads all content from `/api/config`, no hardcoding)
2. `api/config.js` — returns business info to the frontend
3. `api/chat.js` — the chatbot brain (calls Groq's free LLM API), also reads business info
4. `api/_config.js` — shared config reader (single source of truth, reads env vars)

**Total for the FIRST client: ~25 min. Every client after that: ~10 min — no code changes, ever.**

---

## ONE-TIME SETUP (do this once, reuse forever)

### Step 1 — Free Groq API key (5 min)
1. https://console.groq.com → sign up → **API Keys → Create API Key**
2. Save the key — you'll paste it as an env var for every project

### Step 2 — GitHub repo (5 min)
1. Create a free GitHub account if you don't have one
2. New repository → upload these files keeping the structure:
   ```
   your-repo/
     index.html
     api/
       _config.js
       config.js
       chat.js
   ```

### Step 3 — Vercel account (2 min)
Sign up at https://vercel.com with "Continue with GitHub"

---

## PER-CLIENT SETUP (repeat this for every new business — no code editing)

### Step 1 — New Vercel project (2 min)
Vercel dashboard → **Add New → Project** → import the SAME repo again.
(Each import creates an independent project with its own URL and its own env vars — the code stays untouched.)

### Step 2 — Set these Environment Variables (5 min)

| Variable | Example (Singhal Clinic) |
|---|---|
| `GROQ_API_KEY` | *(your Groq key from one-time setup)* |
| `BIZ_NAME` | Singhal Clinic |
| `BIZ_TYPE` | General Physician Clinic |
| `BIZ_STAFF` | Dr. Amit Singhal |
| `BIZ_RATING` | 5.0 stars, 2,595 Google reviews |
| `BIZ_SERVICES` | General Consultation::Everyday health concerns and checkups; Fever & Infection Care::Same-day attention for fever, cold, flu; Vaccination & Health Checkups::Routine vaccinations for the family |
| `BIZ_TIMINGS` | ~10 AM–2 PM, 5–8:30 PM |
| `BIZ_DAYS` | Mon–Sat |
| `BIZ_ADDRESS` | 41, GF, Park Plaza Market, CSC-6, Sector 9, Rohini, Delhi 110085 |
| `BIZ_LANDMARK` | Near Metro Pillar No. 400 |
| `BIZ_WHATSAPP` | 917827026512 |
| `BIZ_TONE` | *(optional — leave blank for default)* |
| `BIZ_EXTRA_RULES` | *(optional, e.g. "Never diagnose — always route to the doctor")* |

**`BIZ_SERVICES` format is important:** `Title::Description; Title::Description` — semicolon between services, double-colon between title and description.

### Step 3 — Deploy → Redeploy (1 min)
After adding env vars, go to **Deployments → Redeploy** (env vars only apply after a redeploy).

### Step 4 — Test & send (2 min)
Open the live `.vercel.app` link, test the chat, then send to the client:

> "Maine [Business Name] ke liye ek AI assistant bana ke dekha — customers ka sawaal pooch ke seedha WhatsApp pe booking bhej deta hai. 2 min mein dekh lijiye: [link]. Agar pasand aaye toh live kar dete hain, koi cost nahi lagega."

---

## Once a client says yes (only spend money here)
- Buy a domain (~₹500–800/year) → connect in that project's Vercel → Settings → Domains
- Confirm `BIZ_WHATSAPP` is actually WhatsApp-active before relying on it
- Confirm exact timings/services with the client — env var values above are estimates from public listings until confirmed

Until a client confirms, every new demo costs ₹0 — same Groq key, same code, just new env vars.
