// api/config.js
// Frontend calls this on page load to get the current business's info
// (name, services, timings, etc.) — so index.html never needs editing.

import { getConfig, parseServices } from './_config.js';

export default async function handler(req, res) {
  const cfg = getConfig();
  return res.status(200).json({
    ...cfg,
    servicesList: parseServices(cfg.services)
  });
}
