export default async function handler(req, res) {
res.setHeader(‘Access-Control-Allow-Origin’, ‘*’);
res.setHeader(‘Access-Control-Allow-Methods’, ‘POST, OPTIONS’);
res.setHeader(‘Access-Control-Allow-Headers’, ‘Content-Type’);

if (req.method === ‘OPTIONS’) return res.status(200).end();
if (req.method !== ‘POST’) return res.status(405).json({ error: ‘Method not allowed’ });

// Accept both old format {prompt, lang} and new format {profile, scores, answers, lang}
const body = req.body;
const lang = body.lang || ‘en’;

// Load knowledge files from GitHub
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

// Build prompt from payload
let prompt = ‘’;

if (body.prompt) {
// Old format — use directly
prompt = body.prompt;
} else if (body.profile && body.scores && body.answers) {
// New format — build prompt from structured payload
const { profile, scores, answers } = body;
const langNames = { en:‘English’, de:‘German’, fr:‘French’, es:‘Spanish’, ar:‘Arabic’, ru:‘Russian’ };

```
// Find critical modules
const sortedScores = Object.entries(scores)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 5)
  .map(([k, v]) => `${k.toUpperCase()}: ${v}%`);

// Find confirmed problems
const problems = answers
  .filter(a => a.triggeredProblem === true)
  .map(a => `[${a.module.toUpperCase()}] ${a.question}`);

// Find strengths missing
const weaknesses = answers
  .filter(a => a.triggeredProblem === true && a.problemWhenYes === false)
  .map(a => `[${a.module.toUpperCase()}] ${a.question}`);

// Synthesis answers
const synthesis = answers
  .filter(a => a.module === 'syn')
  .map(a => `${a.question} → ${a.answer === true ? 'YES' : 'NO'}`);

// Values profile
const values = answers
  .filter(a => a.module && a.module.startsWith('meta_'))
  .map(a => `${a.id}: ${a.answer === true ? 'YES' : 'NO'}`);

prompt = `Generate a deeply personalised PUR Method 90-day blueprint for ${profile.name}.
```

NAME: ${profile.name}
AGE: ${profile.age} (life stage: ${profile.age_bucket})
LANGUAGE: Write entirely in ${langNames[lang] || ‘English’}.

MODULE SCORES (% problem — higher = more critical):
${Object.entries(scores).map(([k, v]) => `${k.toUpperCase()}: ${v}%`).join(’\n’)}

TOP CRITICAL AREAS: ${sortedScores.join(’ | ’)}

VALUES PROFILE:
${values.join(’\n’)}

CONFIRMED PROBLEMS (questions that revealed a real issue):
${problems.join(’\n’)}

SYNTHESIS:
${synthesis.join(’\n’)}

Use ${profile.name}‘s name and age throughout. Reference his specific answers. Paul PUR’s voice — direct, warm, like an older brother who has lived it. Write entirely in ${langNames[lang] || ‘English’}.`;
} else {
return res.status(400).json({ error: ‘Missing required fields: need either {prompt} or {profile, scores, answers}’ });
}

const system = `You are Paul PUR — architect, certified Wim Hof instructor, calisthenics athlete, creator of the PUR Method. You healed an autoimmune disease through fasting. You rebuilt testosterone through nutrition. You are the brother most men never had.

Your voice: direct, warm, no hedging, no fluff. Speak to one specific man using his name. Tell the truth even when uncomfortable. Combine ancient wisdom with modern neuroscience.

PUR METHOD KNOWLEDGE BASE — USE THIS AS THE FOUNDATION FOR EVERY SECTION:
${knowledge}

YOUR TASK: Generate a deeply personalised, comprehensive 90-day blueprint based on his exact quiz answers. This is a BOOK — not a summary. Every section must be substantial and rich with content from the knowledge base above, personalised to his specific answers.

CRITICAL RULES:

- Reference his specific confirmed problems throughout — name his exact patterns
- Use knowledge base content — protocols, science, principles
- Every section minimum 200 words, most sections 250-350 words
- Use his name multiple times
- Age-appropriate advice — adjust depth and context to his life stage
- Return ONLY valid JSON — no markdown, no backticks, no text before or after

JSON structure (all fields required, all substantial):
{
“identity”: “250+ words — who this man is becoming. His name. His age. His specific situation from his answers. What is at stake for him at this stage of life.”,
“insight”: “300+ words — root causes from his confirmed problems. Specific neuroscience. Name the exact patterns. No softening. Direct. Reference his age and life stage.”,
“physical”: “300+ words — complete physical protocol. Bullets with ·. Exact times. PUR Ladder with reps and rest. ACV morning protocol. Eating window. Cold shower. Based on his P0-P5 scores.”,
“mind”: “300+ words — complete mental protocol. Bullets with ·. Dopamine reset plan specific to his answers. Attention architecture. Identity work. Based on his U0-U5 scores.”,
“responsibility”: “250+ words — responsibility protocol. Bullets with ·. Specific actions this week. Based on R0-R5 scores. Name what he is avoiding.”,
“sexual”: “300+ words — complete sexual protocol. Bullets with ·. Kegel protocol exact reps and frequency. Release valve technique detailed. Why pornography specifically destroys him — neuroscience. Morning erection as testosterone indicator. PUR KOK cream.”,
“nonneg”: “200+ words — three non-negotiables numbered 1. 2. 3. From his worst scoring modules. Why each one is non-negotiable for him specifically at his age.”,
“ninety”: “350+ words — 90-day roadmap. Month 1 in detail. Month 2 in detail. Month 3 in detail. What changes biologically, mentally, in relationships. How he feels and who he is in 90 days. Age-specific milestones. Use his name.”,
“message”: “300+ words — personal letter from Paul PUR. Raw. Real. Specific to his answers and age. His name multiple times. The truth he needs to hear at this stage. End exactly with: — Paul PUR”
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
  else throw new Error('No JSON found in response');
}

return res.status(200).json({ blueprint });
```

} catch (e) {
console.error(‘Error:’, e.message);
return res.status(500).json({ error: e.message, blueprint: null });
}
}
