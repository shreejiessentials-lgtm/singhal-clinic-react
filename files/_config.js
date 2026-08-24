// api/_config.js
// Single source of truth for business info — read from Vercel Environment Variables.
//
// TO REUSE THIS ENTIRE DEMO FOR A NEW CLIENT: don't touch any code.
// Just create a new Vercel project from this same repo and set these
// env vars differently (Settings → Environment Variables).

export function getConfig() {
  return {
    name: process.env.BIZ_NAME || 'Our Business',
    type: process.env.BIZ_TYPE || 'Local Business',
    staff: process.env.BIZ_STAFF || '',
    rating: process.env.BIZ_RATING || '',
    // format: "Title::Description; Title::Description"
    services: process.env.BIZ_SERVICES || '',
    timings: process.env.BIZ_TIMINGS || '',
    days: process.env.BIZ_DAYS || '',
    address: process.env.BIZ_ADDRESS || '',
    landmark: process.env.BIZ_LANDMARK || '',
    whatsapp: process.env.BIZ_WHATSAPP || '',
    tone: process.env.BIZ_TONE || 'warm, reassuring, concise — like a helpful front-desk person, not a textbook',
    extraRules: process.env.BIZ_EXTRA_RULES || ''
  };
}

export function parseServices(servicesStr) {
  if (!servicesStr) return [];
  return servicesStr.split(';').map(s => {
    const [title, desc] = s.split('::').map(x => (x || '').trim());
    return { title, desc };
  }).filter(s => s.title);
}
