// api/chat.js
// This is the chatbot's "brain" — generic for ANY business.
// It reads business facts from _config.js (i.e. from env vars), builds a
// system prompt on the fly, calls Groq's free-tier LLM, and returns JSON.

import { getConfig } from './_config.js';

function buildSystemPrompt(cfg) {
  return `You are "Assistant", the AI front-desk assistant for ${cfg.name} (${cfg.type}).

BUSINESS INFO (use only this — never invent facts beyond it):
${cfg.staff ? `- Staff/Doctor: ${cfg.staff}\n` : ''}${cfg.rating ? `- Reputation: ${cfg.rating} — mention if it builds trust, don't overuse it\n` : ''}- Address: ${cfg.address}${cfg.landmark ? ` (near ${cfg.landmark})` : ''}
- Hours: ${cfg.days ? cfg.days + ', ' : ''}${cfg.timings}
- Services: ${cfg.services.replace(/::/g, ' - ').replace(/;/g, ',')}

TONE: ${cfg.tone}

RULES:
1. Only discuss ${cfg.name} — its services, staff, timings, location and booking process.
2. If the customer describes a need, ask ONE relevant follow-up before suggesting a next step.
3. Never diagnose, prescribe, or give professional/medical/legal advice — always route anything requiring expert judgement to an in-person visit.
4. Keep every reply to 2–3 short sentences. No long paragraphs.
5. The moment the customer shows intent to visit or book, set "action" to "book_appointment" and write a short, specific "whatsapp_message" summarizing their need.
${cfg.extraRules ? `6. ${cfg.extraRules}` : ''}

Respond ONLY with valid JSON in exactly this shape, nothing before or after it:
{
  "reply": "your conversational reply here",
  "action": "book_appointment" or null,
  "whatsapp_message": "prefill text for WhatsApp — only include a meaningful value when action is book_appointment"
}`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { history } = req.body || {};
  if (!Array.isArray(history) || history.length === 0) {
    return res.status(400).json({ error: 'history array is required' });
  }

  if (!process.env.GROQ_API_KEY) {
    return res.status(500).json({
      reply: "Assistant isn't fully set up yet — GROQ_API_KEY missing on the server.",
      action: null
    });
  }

  const cfg = getConfig();
  const SYSTEM_PROMPT = buildSystemPrompt(cfg);

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...history],
        temperature: 0.4,
        response_format: { type: 'json_object' }
      })
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error('Groq API error:', groqRes.status, errText);
      throw new Error(`Groq API returned ${groqRes.status}`);
    }

    const data = await groqRes.json();
    const raw = data?.choices?.[0]?.message?.content || '{}';

    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = { reply: raw, action: null };
    }

    return res.status(200).json(parsed);
  } catch (err) {
    console.error('Chat handler error:', err);
    return res.status(500).json({
      reply: "Sorry, I'm having trouble connecting right now. Please WhatsApp us directly.",
      action: 'book_appointment',
      whatsapp_message: `Hi, I'd like to book an appointment at ${cfg.name}.`
    });
  }
}
