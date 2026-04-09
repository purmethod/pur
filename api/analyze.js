module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const lang = body.lang || "en";

    if (!process.env.ANTHROPIC_API_KEY) {
      return res.status(500).json({ error: "missing ANTHROPIC_API_KEY on server" });
    }

    const knowledge = await loadKnowledge();

    let prompt = "";
    if (body.prompt) {
      prompt = String(body.prompt).trim();
    } else if (body.profile && body.scores && body.answers) {
      prompt = buildPromptFromPayload(body, lang);
    } else {
      return res.status(400).json({ error: "missing fields" });
    }

    const system = buildSystemPrompt(knowledge, lang);

    const blueprint = await generateBlueprint({
      system,
      prompt
    });

    return res.status(200).json({
      ok: true,
      blueprint
    });
  } catch (error) {
    console.error("handler error:", error);
    return res.status(500).json({
      error: error.message || "unknown server error"
    });
  }
};

async function loadKnowledge() {
  const REPO = "https://raw.githubusercontent.com/purmethod/pur/main/knowledge";
  const files = [
    "p0-sexual-control.txt",
    "p1-sleep.txt",
    "p2-movement.txt",
    "p3-food.txt",
    "p4-breath-p5-temperature.txt",
    "u0-awareness.txt",
    "u1-impulse.txt",
    "u2-dopamine.txt",
    "u3-u4-u5-mind.txt",
    "r0-accountability.txt",
    "r1-r5-responsibility.txt"
  ];

  const chunks = [];

  for (const file of files) {
    try {
      const response = await fetch(`${REPO}/${file}`);
      if (!response.ok) {
        console.warn(`knowledge file missing or inaccessible: ${file} (${response.status})`);
        continue;
      }

      const text = await response.text();
      if (text && text.trim()) {
        chunks.push(`FILE: ${file}\n${text.trim()}`);
      }
    } catch (error) {
      console.warn(`failed to load knowledge file: ${file}`, error.message);
    }
  }

  if (chunks.length > 0) {
    return chunks.join("\n\n====================\n\n");
  }

  return [
    "P0 sexual control: kegel every second day, release valve, no pornography, pelvic floor awareness.",
    "P1 sleep: deep sleep supports hormonal recovery, reduce late light, early wind down, consistent wake time.",
    "P2 movement: PUR Ladder, calisthenics, habit before performance, daily ritual.",
    "P3 food: fasting window, ACV and salt in morning, food as medicine, stable routine.",
    "P4 breath: breath changes state, Wim Hof breathing, CO2 tolerance, conscious regulation.",
    "P5 temperature: cold exposure, discomfort tolerance, noradrenaline response, daily cold shower.",
    "U0 awareness: stimulus, pause, response, 90 second rule, observation before action.",
    "U1 impulse: see the urge before acting, distinguish emotion from need.",
    "U2 dopamine: no pornography, no phone first 90 minutes, recalibrate reward.",
    "U3 U4 U5 mind: attention architecture, identity over goals, emotional regulation, stillness.",
    "R0 accountability: radical ownership, stop blaming, self rescue.",
    "R1 to R5 responsibility: private promises, written principles, relationship leadership, trust, legacy."
  ].join("\n");
}

function buildPromptFromPayload(body, lang) {
  const profile = body.profile || {};
  const scores = body.scores || {};
  const answers = Array.isArray(body.answers) ? body.answers : [];

  const langNames = {
    en: "English",
    de: "German",
    fr: "French",
    es: "Spanish",
    ar: "Arabic",
    ru: "Russian"
  };

  const problems = answers
    .filter((a) => a.triggeredProblem === true)
    .map((a) => `[${String(a.module || "").toUpperCase()}] ${a.question}`);

  const synthesis = answers
    .filter((a) => a.module === "syn")
    .map((a) => `${a.question} -> ${a.answer ? "YES" : "NO"}`);

  const values = answers
    .filter((a) => typeof a.module === "string" && a.module.startsWith("meta_"))
    .map((a) => `${a.id}: ${a.answer ? "YES" : "NO"}`);

  const top5 = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([key, value]) => `${String(key).toUpperCase()}: ${value}%`);

  return [
    `blueprint for ${profile.name || "user"}, age ${profile.age || "unknown"}.`,
    `language: ${langNames[lang] || "English"}.`,
    "",
    "scores:",
    Object.entries(scores).map(([key, value]) => `${String(key).toUpperCase()}: ${value}%`).join("\n"),
    "",
    `critical: ${top5.join(" | ")}`,
    "",
    "values:",
    values.join("\n") || "none provided",
    "",
    "problems:",
    problems.slice(0, 30).join("\n") || "none provided",
    "",
    "synthesis:",
    synthesis.join("\n") || "none provided"
  ].join("\n");
}

function buildSystemPrompt(knowledge, lang) {
  const languageLabels = {
    en: "English",
    de: "German",
    fr: "French",
    es: "Spanish",
    ar: "Arabic",
    ru: "Russian"
  };

  return [
    "you are paul pur, creator of the pur method.",
    "voice: direct, warm, precise, masculine, honest, like the older brother most men never had.",
    `write entirely in ${languageLabels[lang] || "English"}.`,
    "",
    "use the knowledge below as source material for the blueprint.",
    "tailor the blueprint to the user's age, current scores, current dysfunctions, values, and life stage.",
    "if the user is younger, emphasize identity, direction, boundaries, discipline, and foundation.",
    "if the user is older, emphasize responsibility, family, legacy, leadership, stability, and long term consistency.",
    "fitness principles stay universal, but values and responsibility must adapt to age and life phase.",
    "",
    "important:",
    "make every field rich, concrete, and useful.",
    "do not leave any field empty.",
    "do not return markdown fences.",
    "do not return explanations outside the json.",
    "",
    "knowledge:",
    knowledge
  ].join("\n");
}

async function generateBlueprint({ system, prompt }) {
  const schema = {
    type: "object",
    additionalProperties: false,
    properties: {
      identity: { type: "string" },
      insight: { type: "string" },
      physical: { type: "string" },
      mind: { type: "string" },
      responsibility: { type: "string" },
      sexual: { type: "string" },
      nonneg: { type: "string" },
      ninety: { type: "string" },
      message: { type: "string" }
    },
    required: [
      "identity",
      "insight",
      "physical",
      "mind",
      "responsibility",
      "sexual",
      "nonneg",
      "ninety",
      "message"
    ]
  };

  const requestBody = {
    model: "claude-sonnet-4-6",
    max_tokens: 5500,
    system,
    messages: [
      {
        role: "user",
        content: prompt
      }
    ],
    output_config: {
      format: {
        type: "json_schema",
        name: "pur_blueprint",
        schema
      }
    }
  };

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify(requestBody)
  });

  const rawText = await response.text();

  if (!response.ok) {
    console.error("anthropic api error:", response.status, rawText);
    throw new Error(`anthropic api failed with status ${response.status}`);
  }

  let data;
  try {
    data = JSON.parse(rawText);
  } catch (error) {
    console.error("failed to parse anthropic response:", rawText);
    throw new Error("anthropic response was not valid json");
  }

  if (data.stop_reason === "max_tokens") {
    throw new Error("anthropic output hit max_tokens and was cut off");
  }

  if (!Array.isArray(data.content) || !data.content.length || typeof data.content[0].text !== "string") {
    console.error("unexpected anthropic content:", JSON.stringify(data, null, 2));
    throw new Error("anthropic returned no text content");
  }

  const text = data.content[0].text.trim();

  let blueprint;
  try {
    blueprint = JSON.parse(text);
  } catch (error) {
    console.error("failed to parse structured blueprint:", text);
    throw new Error("blueprint json could not be parsed");
  }

  const requiredKeys = [
    "identity",
    "insight",
    "physical",
    "mind",
    "responsibility",
    "sexual",
    "nonneg",
    "ninety",
    "message"
  ];

  for (const key of requiredKeys) {
    if (typeof blueprint[key] !== "string" || !blueprint[key].trim()) {
      throw new Error(`blueprint field missing or empty: ${key}`);
    }
  }

  return blueprint;
}
