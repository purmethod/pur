export default async function handler(req, res) {
res.setHeader(‘Access-Control-Allow-Origin’, ‘*’);
res.setHeader(‘Access-Control-Allow-Methods’, ‘POST, OPTIONS’);
res.setHeader(‘Access-Control-Allow-Headers’, ‘Content-Type’);

if (req.method === ‘OPTIONS’) return res.status(200).end();
if (req.method !== ‘POST’) return res.status(405).json({ error: ‘Method not allowed’ });

const { prompt, lang } = req.body;
if (!prompt) return res.status(400).json({ error: ‘No prompt provided’ });

const REPO = ‘https://raw.githubusercontent.com/purmethod/pur/main/knowledge’;
const files = [
‘p0-sexual-control.txt’,
‘p1-sleep.txt’,
‘p2-movement.txt’,
‘p3-food.txt’,
‘p4-breath-p5-temperature.txt’,
‘u0-awareness.txt’,
‘u1-impulse.txt’,
‘u2-dopamine.txt’,
‘u3-u4-u5-mind.txt’,
‘r0-accountability.txt’,
‘r1-r5-responsibility.txt’,
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

PUR METHOD KNOWLEDGE BASE — USE THIS AS THE FOUNDATION FOR EVERY SECTION:
${knowledge}

YOUR TASK: Generate a deeply personalised, comprehensive 90-day blueprint based on his exact quiz answers. This is a BOOK — not a summary. Every section must be substantial and rich with content from the knowledge base above, personalised to his specific answers.

CRITICAL RULES:

- Reference his specific YES answers throughout — name his exact patterns
- Use knowledge base content — protocols, science, principles
- Every section minimum 150 words, most sections 200-300 words
- Use his name multiple times
- Return ONLY valid JSON — no markdown, no backticks, no text before or after

JSON:
{
“identity”: “200+ words. Who this man is becoming. His name. His specific situation from his answers. Powerful opening.”,
“insight”: “250+ words. Root causes from his YES answers. Specific neuroscience. Name the exact patterns. No softening. Direct.”,
“physical”: “250+ words. Complete physical protocol. Bullets with ·. Exact times. PUR Ladder with reps and rest. ACV morning protocol. Eating window. Cold shower. Based on his P0-P5 scores.”,
“mind”: “250+ words. Complete mental protocol. Bullets with ·. Dopamine reset plan specific to his answers. Attention architecture. Identity work. Based on his U0-U5 scores.”,
“responsibility”: “200+ words. Responsibility protocol. Bullets with ·. Specific actions this week. Based on R0-R5 scores. Name what he is avoiding.”,
“sexual”: “250+ words. Complete sexual protocol. Bullets with ·. Kegel protocol exact reps and frequency. Release valve technique detailed. Why pornography specifically destroys him — neuroscience. Morning erection as testosterone indicator.”,
“nonneg”: “150+ words. Three non-negotiables numbered 1. 2. 3. From his worst scoring modules. Why each one is non-negotiable for him specifically.”,
“ninety”: “300+ words. 90-day roadmap. Month 1 in detail. Month 2 in detail. Month 3 in detail. What changes biologically, mentally, in relationships. How he feels and who he is in 90 days. Use his name.”,
“message”: “250+ words. Personal letter from Paul PUR. Raw. Real. Specific to his answers. His name multiple times. The truth he needs to hear. End exactly with: — Paul PUR”
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
max_tokens: 8000,
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
