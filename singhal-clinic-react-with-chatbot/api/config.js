// api/config.js
// Frontend calls this on page load to get the current business's info
// (name, services, timings, etc.) — so index.html never needs editing.

import { getConfig, parseServices } from './_config.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const cfg = getConfig();
  return res.status(200).json({
    ...cfg,
    servicesList: parseServices(cfg.services)
  });
}
