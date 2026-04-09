const fs = require('fs/promises');
const path = require('path');

function stripCodeFences(text) {
  return String(text || '')
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();
}

function extractJsonObject(text) {
  const cleaned = stripCodeFences(text);
  const first = cleaned.indexOf('{');
  if (first === -1) return null;

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = first; i < cleaned.length; i++) {
    const ch = cleaned[i];

    if (escaped) {
      escaped = false;
      continue;
    }

    if (ch === '\\') {
      escaped = true;
      continue;
    }

    if (ch === '"') {
      inString = !inString;
      continue;
    }

    if (!inString) {
      if (ch === '{') depth++;
      if (ch === '}') depth--;
      if (depth === 0) return cleaned.slice(first, i + 1);
    }
  }

  return null;
}

function parseModelJson(rawText) {
  const jsonCandidate = extractJsonObject(rawText);
  if (!jsonCandidate) throw new Error('no json object found in model response');

  const parsed = JSON.parse(jsonCandidate);

  const blueprint = {
    identity: String(parsed.identity ?? ''),
    insight: String(parsed.insight ?? ''),
    physical: String(parsed.physical ?? ''),
    mind: String(parsed.mind ?? ''),
    responsibility: String(parsed.responsibility ?? ''),
    sexual: String(parsed.sexual ?? ''),
    nonneg: String(parsed.nonneg ?? ''),
    ninety: String(parsed.ninety ?? ''),
    message: String(parsed.message ?? '')
  };

  const allEmpty = Object.values(blueprint).every(v => !v.trim());
  if (allEmpty) throw new Error('parsed blueprint is empty');

  return blueprint;
}

async function readKnowledgeFiles(scores = {}) {
  const knowledgeDir = path.join(process.cwd(), 'knowledge');
  const files = (await fs.readdir(knowledgeDir)).filter(f => f.endsWith('.txt'));

  const ordered = files.sort((a, b) => {
    const aKey = String(a).slice(0, 2).toLowerCase();
    const bKey = String(b).slice(0, 2).toLowerCase();
    const aScore = Number(scores[aKey] || 0);
    const bScore = Number(scores[bKey] || 0);
    return bScore - aScore;
  });

  const chunks = [];
  for (const file of ordered) {
    const fullPath = path.join(knowledgeDir, file);
    const content = await fs.readFile(fullPath, 'utf8');
    chunks.push({
      file,
      key: file.slice(0, 2).toLowerCase(),
      content: content.slice(0, 18000)
    });
  }

  return chunks;
}

function summarizeProfile(profile = {}, answers = []) {
  const values = profile.values || {};
  const answerLines = answers.map(a => {
    const marker =
      a.triggeredProblem === true ? 'problem' :
      a.triggeredProblem === false ? 'strength_or_neutral' :
      'meta';
    return `[${a.module}] [${marker}] ${a.question} => ${a.answer === true ? 'yes' : a.answer === false ? 'no' : 'unanswered'}`;
  });

  return {
    age: Number(profile.age || 0),
    age_bucket: profile.age_bucket || 'unknown',
    values,
    answerLines
  };
}

function buildSystemPrompt(lang) {
  return `
you are the pur method blueprint engine.

you turn questionnaire answers, age, values, life stage, and pur method knowledge files into a deeply personalized long form blueprint.

hard rules

1. return only valid json
2. no markdown
3. no code fences
4. no extra commentary outside json
5. write in the user's selected language
6. write with direct clarity, like an older brother who sees the pattern and tells the truth
7. do not write generic fitness fluff
8. use the knowledge files as source material and organize them around the user's worst modules
9. make the output long enough to feel like a real book blueprint, not a short summary

json shape

{
  "identity": "700 to 1200 words",
  "insight": "1000 to 1600 words",
  "physical": "1200 to 2200 words",
  "mind": "1200 to 2200 words",
  "responsibility": "1200 to 2200 words",
  "sexual": "900 to 1800 words",
  "nonneg": "400 to 900 words",
  "ninety": "1400 to 2600 words",
  "message": "400 to 900 words"
}

content requirements

identity
build a clear identity statement for this specific man

insight
name the actual pattern, contradiction, and root causes based on his answers
include age and life stage interpretation

physical
build an actual protocol
include wake timing, food timing, movement, sleep, cold, breath
explain how habit design manipulates the brain in the right direction

mind
cover dopamine, attention, impulse awareness, identity, emotional regulation
explain how his current loops are built
show how to break them

responsibility
cover boundaries, principles, relationship leadership, trust, responsibility, legacy
adapt this to life stage
if younger, focus harder on identity, standards, discipline, self respect, boundaries, direction, and preventing drift
if older, focus more on stability, reliability, leadership, family structure, and provider values

sexual
cover sexual control, porn, pelvic floor, direction of sexual energy
be direct and practical

nonneg
three hard daily rules
explain why each one matters

ninety
full ninety day path
month one
month two
month three
weekly rhythm
what changes internally and externally

message
raw personal closing in paul pur voice
end exactly with
— Paul PUR
`.trim();
}

function buildUserPrompt({ lang, profile, scores, answers, knowledge }) {
  const summary = summarizeProfile(profile, answers);

  const scoreLines = Object.entries(scores || {})
    .map(([k, v]) => `${k.toUpperCase()}: ${Number(v || 0)}% problem`)
    .join('\n');

  const valueLines = Object.entries(summary.values || {})
    .map(([k, v]) => `${k}: ${v === true ? 'yes' : v === false ? 'no' : 'unknown'}`)
    .join('\n');

  const knowledgeText = knowledge
    .map(k => `FILE: ${k.file}\nMODULE_KEY: ${k.key}\n${k.content}`)
    .join('\n\n====================\n\n');

  return `
selected language: ${lang}

user profile
name: ${profile.name || 'unknown'}
age: ${summary.age || 'unknown'}
age bucket: ${summary.age_bucket || 'unknown'}

values and life direction
${valueLines || 'none'}

module scores
${scoreLines}

question audit
${summary.answerLines.join('\n')}

knowledge base
${knowledgeText}

important interpretation rules

1. age matters mainly for values, responsibility, relationship direction, family structure, boundaries, purpose, and life design
2. age does not erase the need for movement, dopamine control, porn control, food discipline, sleep, and attention architecture
3. if the man is young, focus harder on identity, standards, discipline, self respect, boundaries, direction, and preventing drift
4. if the man is older and oriented toward partnership, children, or stability, focus harder on principles, provider reliability, leadership, trust, boundaries, and long term structure
5. if he wants casual pleasure more than depth, name it without moralizing and explain the cost clearly
6. if he lacks principles, write principles into his blueprint
7. if he lacks boundaries, show how weak boundaries corrupt every pillar
8. the result must feel like something he has never seen before, not generic internet advice
`.trim();
}

function buildFallbackBlueprint(profile, scores) {
  const sorted = Object.entries(scores || {}).sort((a, b) => b[1] - a[1]);
  const worst = sorted.slice(0, 3).map(([k]) => k.toUpperCase()).join(', ');
  const name = profile?.name || 'Reader';
  const age = Number(profile?.age || 0);

  const ageLine =
    age && age <= 24
      ? `${name} is in the identity building phase. drift is expensive here.`
      : age && age <= 34
      ? `${name} is in the structure building phase. vague goals are not enough anymore.`
      : age && age <= 50
      ? `${name} is in the responsibility and stability phase. leadership matters more now.`
      : `${name} is in a phase where legacy and clean priorities matter more than noise.`;

  return {
    identity: `${name} is not missing potential. ${name} is missing order. the man on the other side of the next 90 days is the man who stops living by mood and starts living by structure.`,
    insight: `the highest friction points are ${worst}. ${ageLine} the real issue is not a single bad habit. it is a fragmented operating system. body, mind, and responsibility are pulling in different directions, so life feels noisy, inconsistent, and below potential.`,
    physical: `wake at one consistent time. hydrate before stimulation. use the pur ladder daily. protect the eating window. reduce friction for training and increase friction for comfort. use cold exposure as a deliberate signal that the day will be led, not reacted to. track sleep as a performance foundation, not as an afterthought.`,
    mind: `remove fast dopamine from the first part of the day. no phone first. no unconscious scrolling. observe the impulse before obeying it. turn identity into written language. reduce cue overload. build one daily block of uninterrupted focus. treat porn, algorithmic feeds, and fantasy loops as training systems that shape the brain against discipline.`,
    responsibility: `write principles. write boundaries. identify where the user says yes while meaning no. correct one relationship pattern this week. make word and action match again. no more private collapse hidden behind public competence.`,
    sexual: `train the pelvic floor every second day. remove porn. stop using sexuality only as discharge. observe morning erection and overall drive as system feedback. move sexual energy back into body, presence, and ambition.`,
    nonneg: `1. no self deception\n2. no unconscious escape into screens, porn, or consumption\n3. every day one visible proof of order`,
    ninety: `month one rebuilds order. month two deepens control. month three turns repetition into identity. over 90 days the reader becomes more stable, more directed, less fragmented, more dangerous in the right way, and more trustworthy to himself and others.`,
    message: `${name}, stop waiting for a feeling to save you. build the system. hold the line. repeat it until the new pattern becomes your default. your life will not change because you wanted more. it will change because you stopped letting weaker patterns lead. — Paul PUR`
  };
}

async function callAnthropic({ systemPrompt, userPrompt }) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const model = process.env.ANTHROPIC_MODEL || 'claude-3-7-sonnet-20250219';
  const maxTokens = Number(process.env.ANTHROPIC_MAX_TOKENS || 12000);

  if (!apiKey) throw new Error('missing ANTHROPIC_API_KEY');

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model,
      max_tokens: maxTokens,
      temperature: 0.7,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: userPrompt
        }
      ]
    })
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`anthropic error ${response.status}: ${text}`);
  }

  const data = JSON.parse(text);
  const rawText = Array.isArray(data.content)
    ? data.content.filter(x => x.type === 'text').map(x => x.text).join('\n')
    : '';

  if (!rawText.trim()) throw new Error('empty model text response');
  return rawText;
}

module.exports = async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ ok: true, route: 'analyze' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const lang = body.lang || 'en';
    const profile = body.profile || {};
    const scores = body.scores || {};
    const answers = Array.isArray(body.answers) ? body.answers : [];

    if (!profile.name) {
      return res.status(400).json({ error: 'missing profile.name' });
    }

    const knowledge = await readKnowledgeFiles(scores);
    const systemPrompt = buildSystemPrompt(lang);
    const userPrompt = buildUserPrompt({
      lang,
      profile,
      scores,
      answers,
      knowledge
    });

    let blueprint;
    try {
      const rawModelText = await callAnthropic({ systemPrompt, userPrompt });
      blueprint = parseModelJson(rawModelText);
    } catch (modelErr) {
      console.error('model generation failed, using fallback:', modelErr);
      blueprint = buildFallbackBlueprint(profile, scores);
    }

    return res.status(200).json({ blueprint });
  } catch (err) {
    console.error('analyze route failed:', err);
    return res.status(500).json({
      error: 'analyze_failed',
      message: err.message
    });
  }
};
