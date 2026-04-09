module.exports = async function handler(req, res) {
res.setHeader(‘Access-Control-Allow-Origin’, ‘*’);
res.setHeader(‘Access-Control-Allow-Methods’, ‘POST, OPTIONS’);
res.setHeader(‘Access-Control-Allow-Headers’, ‘Content-Type’);
if (req.method === ‘OPTIONS’) return res.status(200).end();
if (req.method !== ‘POST’) return res.status(405).json({ error: ‘Method not allowed’ });

const body = req.body;
const lang = body.lang || ‘en’;

const REPO = ‘https://raw.githubusercontent.com/purmethod/pur/main/knowledge’;
const files = [‘p0-sexual-control.txt’,‘p1-sleep.txt’,‘p2-movement.txt’,‘p3-food.txt’,‘p4-breath-p5-temperature.txt’,‘u0-awareness.txt’,‘u1-impulse.txt’,‘u2-dopamine.txt’,‘u3-u4-u5-mind.txt’,‘r0-accountability.txt’,‘r1-r5-responsibility.txt’];

let knowledge = ‘’;
for (const f of files) {
try {
const r = await fetch(REPO + ‘/’ + f);
if (r.ok) knowledge += ‘\n\n’ + await r.text();
} catch (e) {
console.error(‘Failed:’, f, e.message);
}
}

if (!knowledge.trim()) {
knowledge = ‘P0 Kegel 100 reps every 2nd day, release valve, no porn (Voon 2014). P1 Last meal 15:00, phone 18:00, bed 21:00, wake 05:00. P2 PUR Ladder 1-2-3 reps, 5 ladders daily, outdoor. P3 21h fast, ACV morning, eating 13-19. P4 Wim Hof breathing. P5 Cold shower 2min. U0 90-second rule. U1 Impulse before action. U2 No phone 90min, no porn. U3 Deep work block. U4 Identity over goals. U5 Stoic tradition. R0 Radical ownership. R1 Private promises. R2 Written principles. R3 Stability not control. R4 Word is bankable. R5 Legacy daily compass.’;
}

let prompt = ‘’;
if (body.prompt) {
prompt = body.prompt;
} else if (body.profile && body.scores && body.answers) {
const p = body.profile;
const langNames = { en:‘English’, de:‘German’, fr:‘French’, es:‘Spanish’, ar:‘Arabic’, ru:‘Russian’ };
const problems = body.answers.filter(function(a) { return a.triggeredProblem === true; }).map(function(a) { return ‘[’ + a.module.toUpperCase() + ’] ’ + a.question; });
const synthesis = body.answers.filter(function(a) { return a.module === ‘syn’; }).map(function(a) { return a.question + ’ -> ’ + (a.answer ? ‘YES’ : ‘NO’); });
const values = body.answers.filter(function(a) { return a.module && a.module.startsWith(‘meta_’); }).map(function(a) { return a.id + ’: ’ + (a.answer ? ‘YES’ : ‘NO’); });
const top5 = Object.entries(body.scores).sort(function(a,b) { return b[1]-a[1]; }).slice(0,5).map(function(x) { return x[0].toUpperCase() + ’: ’ + x[1] + ‘%’; });

```
prompt = 'Blueprint for ' + p.name + ', age ' + p.age + '. Language: ' + (langNames[lang] || 'English') + '.\n\nSCORES:\n' + Object.entries(body.scores).map(function(x) { return x[0].toUpperCase() + ': ' + x[1] + '%'; }).join('\n') + '\n\nCRITICAL: ' + top5.join(' | ') + '\n\nVALUES:\n' + values.join('\n') + '\n\nPROBLEMS:\n' + problems.slice(0,20).join('\n') + '\n\nSYNTHESIS:\n' + synthesis.join('\n');
```

} else {
return res.status(400).json({ error: ‘Missing fields’ });
}

const system = ‘You are Paul PUR, creator of the PUR Method. Direct, warm, the brother most men never had.\n\nKNOWLEDGE:\n’ + knowledge + ‘\n\nWrite a personalised blueprint. Each section 150+ words minimum. Use his name. Return ONLY valid JSON with these exact keys: identity, insight, physical, mind, responsibility, sexual, nonneg, ninety, message. Each value a string with real content.’;

try {
const response = await fetch(‘https://api.anthropic.com/v1/messages’, {
method: ‘POST’,
headers: {
‘Content-Type’: ‘application/json’,
‘x-api-key’: process.env.ANTHROPIC_API_KEY,
‘anthropic-version’: ‘2023-06-01’
},
body: JSON.stringify({
model: ‘claude-sonnet-4-5’,
max_tokens: 2000,
system: system,
messages: [{ role: ‘user’, content: prompt }]
})
});

```
if (!response.ok) {
  const err = await response.text();
  console.error('API error:', response.status, err);
  return res.status(500).json({ error: 'API failed: ' + response.status });
}

const data = await response.json();
const raw = data.content.filter(function(c) { return c.type === 'text'; }).map(function(c) { return c.text; }).join('');

let blueprint;
try {
  blueprint = JSON.parse(raw.trim());
} catch(e1) {
  const m = raw.match(/\{[\s\S]*\}/);
  if (m) {
    blueprint = JSON.parse(m[0]);
  } else {
    throw new Error('No JSON in response');
  }
}

console.log('Blueprint generated for', body.profile ? body.profile.name : 'user');
return res.status(200).json({ blueprint: blueprint });
```

} catch (e) {
console.error(‘Handler error:’, e.message);
return res.status(500).json({ error: e.message });
}
};
