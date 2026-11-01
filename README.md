# pure (brinkmannpaul.com/pure)

The site is shown at **https://brinkmannpaul.com/pure**: brinkmannpaul.com proxies `/pure/*` to this project, which serves everything under `/pure` (see `vercel.json`). `purmethod.com/` and `/blueprint` redirect there. The blueprint calls `https://purmethod.com/api/analyze` directly (CORS allows brinkmannpaul.com), so a long answer never runs through the proxy.

Static site (`index.html`) plus the PURE blueprint: a questionnaire at `/blueprint` and one Vercel function that writes a personal book with Claude, about 150 to 230 A5 pages: a letter, what the method sees in him, his blind spots, three priorities, the ladder, one personal chapter per level of all four pillars, each followed by the method chapter on that level, thirteen weeks, his day, his rules and a closing letter. Read on the phone or saved as a PDF.

## Blueprint

| File | What it does |
| --- | --- |
| `blueprint/questions.js` | all questions in six languages (four pillars P, U, R, E, profile, health check, sexual health, two spoken answers), with what each answer reveals, validation, scoring (his own answers weighted with his habits), traits, blind spots (where what he says and what he does disagree) and the health-check rules. Used by the page and the API, so both check the same thing. |
| `blueprint/copy.js` | the page's other texts in six languages: motivation cards, voice input, consent, the building drawing, the book. |
| `blueprint/book/<lang>.json` | the method chapters of the book, built from `knowledge/*.txt` and translated. |
| `blueprint/index.html`, `blueprint/app.js` | the questionnaire (voice input through the browser's speech recognition, typing as fallback) and the book view. Answers stay in the visitor's browser (localStorage) until they start over. |
| `api/analyze.js` | `GET` says whether the blueprint is open. `POST` validates the answers again, applies the safety rules and writes the book in nine parts at once: the frame (letters, insight, blind spots, priorities, 13 weeks, day, rules) and two halves per pillar. The frame starts first so the others read the knowledge from the prompt cache. A part that comes back incomplete is written once more if time allows. A man in crisis gets the frame only: short and steady. Nothing is stored. |
| `knowledge/*.txt` | the PURE Method itself (`0-pure-structure.txt` the building, `e-ego.txt` the E pillar, `paul-notes.txt` Paul's own experiences for the "from paul's life" boxes). Edit these to change what the blueprint teaches. Every study named here was checked against the paper; keep it that way. |

### Switch it on (Vercel → project `pur` → Settings → Environment Variables)

- `ANTHROPIC_API_KEY`: the Anthropic API key
- `PUR_BLUEPRINT_ENABLED` = `1`

Without both, the page shows "opens soon" before anyone starts, and the API refuses with 503.

Set a monthly spend limit in the Anthropic console. One book costs roughly 2 USD and takes two to three minutes. Preview deployments are open for testing (they sit behind Vercel login).

### Before going live

- Impressum and Datenschutzerklärung on purmethod.com. The questionnaire asks for health data (Art. 9 GDPR); the page asks for explicit consent before sending, but the privacy policy has to name Anthropic as processor.
