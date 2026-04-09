module.exports = async function handler(req, res) {
res.setHeader(‘Access-Control-Allow-Origin’, ‘*’);
res.setHeader(‘Access-Control-Allow-Methods’, ‘POST, OPTIONS’);
res.setHeader(‘Access-Control-Allow-Headers’, ‘Content-Type’);

if (req.method === ‘OPTIONS’) return res.status(200).end();
if (req.method !== ‘POST’) return res.status(405).json({ error: ‘Method not allowed’ });

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
else console.log(‘Knowledge file not found:’, f);
} catch (e) {
console.error(‘Failed to load’, f, e.message);
}
}

if (!knowledge.trim()) {
console.log(‘No knowledge files loaded - using inline knowledge’);
knowledge = `PUR METHOD CORE PROTOCOLS: P0 Sexual Control: Kegel 100 contractions every 2nd day. Release valve technique: at point of no return fully release pelvic floor and exhale. No pornography - Voon et al 2014 identical brain activation to cocaine. Testosterone peaks 145.7% day 7 abstinence (Zhejiang 2003). P1 Sleep: Last meal 15:00. Phone away 18:00. Bed 21:00. Wake 05:00. Testosterone produced during deep sleep. P2 Movement: PUR Ladder - 1 rep 10s rest, 2 reps 20s rest, 3 reps 30s rest. 5 ladders daily. Pull-ups, dips, pistol squats. Outdoor training. P3 Food: 21h fasting window. ACV + Himalayan salt in water first thing. Eating window 13:00-19:00. Food as medicine. P4 Breath: Wim Hof Method - 30 breaths, retention, recovery. Kox et al 2014 reduced inflammation markers. P5 Temperature: Cold shower minimum 2 minutes daily. Noradrenaline +300%, dopamine +250% (Sramek et al). U0 Awareness: Gap between stimulus and response. 90-second rule. Observe before acting. U1 Impulse: See impulse before obeying it. Hunger vs habit vs emotion. U2 Dopamine: No phone first 90 min. No pornography. No social media before noon. Deep work block daily. U3 Attention: 90-min deep work block. Phone in other room. Environment design over willpower. U4 Identity: You act from identity not goals. Write who you are becoming. Values as compass. U5 Emotional: Feel without being controlled. Stoic tradition. Conflict without coldness. R0 Accountability: No one is coming. Radical ownership. Fault vs responsibility. R1 Responsibility: Body as business card. Private promises build self-trust. R2 Principles: Write principles before tested. Red flags early. Non-negotiables. R3 Relationship: Stability not control. Your mood independent of hers. Presence as attraction. R4 Trust: Word is bankable or not. Consistency over time. Self-trust first. R5 Legacy: What remains is mark in people. Daily compass question: is this consistent with who I want to have been.`;
}

// Build prompt
let prompt = ‘’;
if (body.prompt) {
prompt = body.prompt;
} else if (body.profile && body.scores && body.answers) {
const { profile, scores, answers } = body;
const langNames = { en:‘English’, de:‘German’, fr:‘French’, es:‘Spanish’, ar:‘Arabic’, ru:‘Russian’ };

```
const sortedScores = Object.entries(scores)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 5)
  .map(([k, v]) => `${k.toUpperCase()}: ${v}%`);

const problems = answers
  .filter(a => a.triggeredProblem === true)
  .map(a => `[${a.module.toUpperCase()}] ${a.question}`);

const synthesis = answers
  .filter(a => a.module === 'syn')
  .map(a => `${a.question} → ${a.answer === true ? 'YES' : 'NO'}`);

const values = answers
  .filter(a => a.module && a.module.startsWith('meta_'))
  .map(a => `${a.id}: ${a.answer === true ? 'YES' : 'NO'}`);

prompt = `Generate a deeply personalised PUR Method 90-day blueprint for ${profile.name}, age ${profile.age}.
```

LANGUAGE: Write entirely in ${langNames[lang] || ‘English’}.

MODULE SCORES (% problem — higher = more critical):
${Object.entries(scores).map(([k, v]) => `${k.toUpperCase()}: ${v}%`).join(’\n’)}

TOP CRITICAL AREAS: ${sortedScores.join(’ | ’)}

VALUES PROFILE:
${values.join(’\n’)}

CONFIRMED PROBLEMS:
${problems.slice(0, 30).join(’\n’)}

SYNTHESIS:
${synthesis.join(’\n’)}

Write entirely in ${langNames[lang] || ‘English’}. Use ${profile.name}’s name throughout.`;
} else {
return res.status(400).json({ error: ‘Missing fields’ });
}

const system = `You are Paul PUR — architect, certified Wim Hof instructor, calisthenics athlete, creator of the PUR Method. Direct, warm, no hedging. The brother most men never had.

PUR METHOD KNOWLEDGE:
${knowledge}

Generate a comprehensive personalised blueprint. Every section 200-300+ words. Reference his specific answers. Use his name. Return ONLY valid JSON:

{
“identity”: “250+ words who this man is becoming”,
“insight”: “300+ words root causes from his answers with neuroscience”,
“physical”: “300+ words complete physical protocol with bullets starting with ·”,
“mind”: “300+ words complete mental protocol with bullets starting with ·”,
“responsibility”: “250+ words responsibility protocol with bullets starting with ·”,
“sexual”: “300+ words complete sexual protocol with bullets starting with ·”,
“nonneg”: “200+ words three non-negotiables numbered 1. 2. 3.”,
“ninety”: “350+ words 90-day roadmap month by month”,
“message”: “300+ words personal letter from Paul PUR ending with: — Paul PUR”
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
  console.error('Anthropic API error:', response.status, err);
  return res.status(500).json({ error: 'API failed: ' + response.status });
}

const data = await response.json();
const raw = data.content.filter(c => c.type === 'text').map(c => c.text).join('');

let blueprint;
try {
  blueprint = JSON.parse(raw.trim());
} catch {
  const m = raw.match(/\{[\s\S]*\}/);
  if (m) blueprint = JSON.parse(m[0]);
  else throw new Error('No JSON in response');
}

console.log('Blueprint generated successfully for', body.profile?.name || 'user');
return res.status(200).json({ blueprint });
```

} catch (e) {
console.error(‘Handler error:’, e.message);
return res.status(500).json({ error: e.message });
}
};
