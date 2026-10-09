# purmethod.com

Static site (`index.html`) plus the PUR blueprint: a questionnaire at `/blueprint` and one Vercel function that writes a personal 90-day plan with Claude.

## Blueprint

| File | What it does |
| --- | --- |
| `blueprint/questions.js` | all 68 questions in six languages, plus validation, scoring and the health-check rules. Used by the page and the API, so both check the same thing. |
| `blueprint/index.html`, `blueprint/app.js` | the questionnaire and the blueprint view. Answers stay in the visitor's browser (localStorage) until they start over. |
| `api/analyze.js` | `GET` says whether the blueprint is open. `POST` validates the answers again, applies the safety rules, sends them with the knowledge files to Claude Opus 5.5 and returns the blueprint as JSON. Nothing is stored. |
| `knowledge/*.txt` | the PUR method itself. Edit these to change what the blueprint teaches. |

### Switch it on (Vercel → project `pur` → Settings → Environment Variables)

- `ANTHROPIC_API_KEY`: the Anthropic API key
- `PUR_BLUEPRINT_ENABLED` = `1`

Without both, the page shows "opens soon" before anyone starts, and the API refuses with 503.

Set a monthly spend limit in the Anthropic console. One blueprint costs roughly 0.20 to 0.40 USD (knowledge is prompt-cached).

### Before going live

- Impressum and Datenschutzerklärung on purmethod.com. The questionnaire asks for health data (Art. 9 GDPR); the page asks for explicit consent before sending, but the privacy policy has to name Anthropic as processor.
