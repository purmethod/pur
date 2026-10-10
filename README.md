# purmethod.com

Static site (`index.html`) plus the PURE blueprint: a questionnaire at `/blueprint` and one Vercel function that writes a personal 90-day plan with Claude. The plan is shown as a small book, on the phone or saved as a PDF.

## Blueprint

| File | What it does |
| --- | --- |
| `blueprint/questions.js` | all questions in six languages (four pillars P, U, R, E, profile, health check, two spoken answers), with what each answer reveals, validation, scoring, traits and the health-check rules. Used by the page and the API, so both check the same thing. |
| `blueprint/copy.js` | the page's other texts in six languages: motivation cards, voice input, consent, the building drawing, the book. |
| `blueprint/book/<lang>.json` | the method chapters of the book, built from `knowledge/*.txt` and translated. |
| `blueprint/index.html`, `blueprint/app.js` | the questionnaire (voice input through the browser's speech recognition, typing as fallback) and the book view. Answers stay in the visitor's browser (localStorage) until they start over. |
| `api/analyze.js` | `GET` says whether the blueprint is open. `POST` validates the answers again, applies the safety rules, sends them with the knowledge files to Claude and returns the blueprint as JSON. Nothing is stored. |
| `knowledge/*.txt` | the PURE Method itself (`0-pure-structure.txt` the building, `paul-notes.txt` Paul's own experiences for the "from paul's life" boxes). Edit these to change what the blueprint teaches. |

### Switch it on (Vercel → project `pur` → Settings → Environment Variables)

- `ANTHROPIC_API_KEY`: the Anthropic API key
- `PUR_BLUEPRINT_ENABLED` = `1`

Without both, the page shows "opens soon" before anyone starts, and the API refuses with 503.

Set a monthly spend limit in the Anthropic console. One blueprint costs roughly 0.20 to 0.40 USD (knowledge is prompt-cached).

### Before going live

- Impressum and Datenschutzerklärung on purmethod.com. The questionnaire asks for health data (Art. 9 GDPR); the page asks for explicit consent before sending, but the privacy policy has to name Anthropic as processor.
