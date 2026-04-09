export default async function handler(req, res) {
res.setHeader(‘Access-Control-Allow-Origin’, ‘*’);
res.setHeader(‘Access-Control-Allow-Methods’, ‘POST, OPTIONS’);
res.setHeader(‘Access-Control-Allow-Headers’, ‘Content-Type’);

if (req.method === ‘OPTIONS’) return res.status(200).end();
if (req.method !== ‘POST’) return res.status(405).json({ error: ‘Method not allowed’ });

const { prompt, lang } = req.body;
if (!prompt) return res.status(400).json({ error: ‘No prompt provided’ });

// Load knowledge files from GitHub
const REPO = ‘https://raw.githubusercontent.com/purmethod/pur/main/knowledge’;
const files = [
‘p0-sexual-control.txt’,
‘p1-sleep.txt’,
‘p2-movement.txt’,
‘p3-food.txt’,
‘p4-breath-p5-temperature.txt’,
‘u0-u5-mind-pillar.txt’,
‘r0-r5-responsibility-pillar.txt’,
];

let knowledge = ‘’;
for (const f of files) {
try {
const r = await fetch(`${REPO}/${f}`);
if (r.ok) knowledge += ‘\n\n’ + await r.text();
} catch (e) {
console.error(‘Failed to load’, f, e.message);
}
}

const system = `You are Paul PUR — architect, certified Wim Hof instructor, calisthenics athlete, creator of the PUR Method. You healed an autoimmune disease through fasting. You rebuilt testosterone through nutrition. You are the brother most men never had.

Your voice: direct, warm, no hedging, no fluff. Speak to one specific man using his name. Tell the truth even when uncomfortable. Combine ancient wisdom with modern neuroscience.

PUR METHOD KNOWLEDGE BASE:
${knowledge}

YOUR TASK: Generate a deeply personalised, comprehensive 90-day blueprint based on his exact quiz answers. This is a BOOK — not a summary. Every section must be 150-300+ words. Reference his specific answers and patterns throughout.

Return ONLY valid JSON. No markdown. No backticks. No text before or after.

{
“identity”: “150+ words — who this man is becoming. His name. His specific situation.”,
“insight”: “200+ words — root causes from his YES answers. Neuroscience. No softening.”,
“physical”: “200+ words — complete physical protocol. Bullets with ·. Exact times, reps. PUR Ladder. ACV. Eating window. Cold shower.”,
“mind”: “200+ words — complete mental protocol. Bullets with ·. Dopamine reset. Attention architecture.”,
“responsibility”: “150+ words — responsibility protocol. Bullets with ·. Specific this week.”,
“sexual”: “200+ words — complete sexual protocol. Bullets with ·. Kegel every 2nd day. Release valve. Pornography neuroscience. Morning erection tracking.”,
“nonneg”: “100+ words — three non-negotiables numbered 1. 2. 3. From worst modules.”,
“ninety”: “250+ words — 90-day roadmap. Month 1, 2, 3 detailed. Biological and mental changes. Use his name.”,
“message”: “200+ words — personal letter from Paul PUR. Raw. Real. His name multiple times. End: — Paul PUR”
}`;

try {
const response = await fetch(‘https://api.anthropic.com/v1/messages’, {
method: ‘POST’,
headers: {
‘Content-Type’: ‘application/json’,
‘x-api-key’: process.env.ANTHROPIC_API_KEY,
‘anthropic-version’: ‘2023-06-01’,
},
body: JSON.stringify({
model: ‘claude-sonnet-4-5’,
max_tokens: 4000,
system,
messages: [{ role: ‘user’, content: prompt }],
}),
});

```
if (!response.ok) {
  const err = await response.text();
  console.error('API error:', response.status, err);
  return res.status(500).json({ error: 'API failed', blueprint: null });
}

const data = await response.json();
const raw = data.content.filter(c => c.type === 'text').map(c => c.text).join('');

let blueprint;
try {
  blueprint = JSON.parse(raw.trim());
} catch {
  const m = raw.match(/\{[\s\S]*\}/);
  if (m) blueprint = JSON.parse(m[0]);
  else throw new Error('No JSON found');
}

return res.status(200).json({ blueprint });
```

} catch (e) {
console.error(‘Error:’, e.message);
return res.status(500).json({ error: e.message, blueprint: null });
}
}
