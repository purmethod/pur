export default async function handler(req, res) {
if (req.method !== ‘POST’) {
return res.status(405).json({ error: ‘Method not allowed’ });
}

const { prompt } = req.body;
if (!prompt) {
return res.status(400).json({ error: ‘No prompt provided’ });
}

try {
const response = await fetch(‘https://api.anthropic.com/v1/messages’, {
method: ‘POST’,
headers: {
‘Content-Type’: ‘application/json’,
‘x-api-key’: process.env.ANTHROPIC_API_KEY,
‘anthropic-version’: ‘2023-06-01’,
},
body: JSON.stringify({
model: ‘claude-sonnet-4-20250514’,
max_tokens: 1500,
system: `You are Paul PUR — creator of the PUR Method. You speak directly, with conviction, zero hedging, zero fluff. You write like a man who has lived everything he teaches. You talk directly to one specific man using his name. Your voice is direct, warm, powerful — like the older brother who tells you the truth. Generate ONLY a JSON object, no markdown, no preamble, no code blocks.`,
messages: [{ role: ‘user’, content: prompt }],
}),
});

```
const data = await response.json();
const text = data.content.map(c => c.text || '').join('');
const clean = text.replace(/```json|```/g, '').trim();
const blueprint = JSON.parse(clean);

res.status(200).json({ blueprint });
```

} catch (error) {
console.error(‘API Error:’, error);
res.status(500).json({ error: ‘Generation failed’, blueprint: null });
}
}
