# pure (brinkmannpaul.com/pure)

The site is shown at **https://brinkmannpaul.com/pure**: brinkmannpaul.com proxies `/pure/*` to this project, which serves everything under `/pure` (see `vercel.json`). `purmethod.com/` and `/blueprint` redirect there. The blueprint calls `https://purmethod.com/api/analyze` directly (CORS allows brinkmannpaul.com), so a long answer never runs through the proxy.

Static site (`index.html`) plus the PURE blueprint: a questionnaire at `/blueprint` and one Vercel function that writes a personal book with Claude, about 190 to 200 pages: a letter, what the method sees in him, his blind spots, three priorities, the ladder, one personal chapter per level of all four pillars, each followed by the method chapter on that level, thirteen weeks, his day, his rules and a closing letter. Read on the phone or saved as a PDF.

### The book format

- **Trim: 12.7 x 20.3 cm (5 x 8 inches)**, the size of a classic small non-fiction book (The War of Art). Set in `@page` in `blueprint/index.html`; the same file can go to a printer later.
- **Length: about 190 to 200 pages.** The method chapters (Paul's own words, `blueprint/book/<lang>.json`) are always complete, about 145 pages with the book's structure. The personal parts the model writes have word ranges in `api/analyze.js` (`CORE_TASK`, `pillarTask`); in the middle of every range a sample book has 207 pages, and the model usually writes a little less. Each written book logs `blueprint words` in the Vercel logs: change the ranges there if books run long or short.
- **Design:** the palette and type of brinkmannpaul.com and pact. Thin-line boxes, one strong line between levels, a light line before the method on a level, Paul's notes on the faintest grey. Print is plain blocks (no grid or flex), because Safari on the iPhone cuts lines in half across a page break inside a grid.
- **No dashes.** `Q.undash` (in `blueprint/questions.js`) turns dashes into commas or colons and number ranges into words. It runs on every written book, on the method chapters and on older books when they are shown. Russian keeps its dash, it is grammar there.

### The levels: one source

`modules.js` holds the levels P0 to R5 in six languages (name, tag, text, science, what each covers) and `modules.css` the accordion that opens them. The landing page (`index.html`, "the 18 levels") and the blueprint's start page (under the building) both use them, so they always show the same. Change a level there, never in one page alone.

## Blueprint

| File | What it does |
| --- | --- |
| `blueprint/questions.js` | all questions in six languages (four pillars P, U, R, E, profile, health check, sexual health, two spoken answers), with what each answer reveals, validation, scoring (his own answers weighted with his habits), traits, blind spots (where what he says and what he does disagree) and the health-check rules. Used by the page and the API, so both check the same thing. Women and men: the first question is "i am a man / a woman"; `showIf.gender` marks questions for one of them, `qf` and `lf` give her wording. Women get their own step "your femininity" (sections can carry `for`): body first and six fields of Paul's view of femininity. |
| `blueprint/copy.js` | the page's other texts in six languages: motivation cards, voice input, consent, the building drawing, the book. |
| `blueprint/book/<lang>.json` | the method chapters of the book, built from `knowledge/*.txt` and translated. |
| `blueprint/index.html`, `blueprint/app.js` | the questionnaire (voice input through the browser's speech recognition, typing as fallback) and the book view. Answers stay in the visitor's browser (localStorage) until they start over. |
| `api/analyze.js` | `GET` says whether the blueprint is open. `POST` validates the answers again, applies the safety rules and writes the book in nine parts at once: the frame (letters, insight, blind spots, priorities, 13 weeks, day, rules) and two halves per pillar. The frame starts first so the others read the knowledge from the prompt cache. A part that comes back incomplete is written once more if time allows. A man in crisis gets the frame only: short and steady. Nothing is stored. |
| `knowledge/*.txt` | the PURE Method itself (`0-pure-structure.txt` the building, `e-ego.txt` the E pillar, `paul-notes.txt` Paul's own experiences for the "from paul's life" boxes). Edit these to change what the blueprint teaches. Every study named here was checked against the paper; keep it that way. `woman/body-first-femininity.txt` is for women only: Paul's stance (body first, femininity, love from fullness) and the checked studies for her body; a woman's book also gets a chapter on her feminine energy. |

### Switch it on (Vercel → project `pur` → Settings → Environment Variables)

- `ANTHROPIC_API_KEY`: the Anthropic API key
- `PUR_BLUEPRINT_ENABLED` = `1`

Without both, the page shows "opens soon" before anyone starts, and the API refuses with 503.

### Free codes

Paul's codes for tests and gifts write one book each, without payment. The field "have a code?" sits open right under the pay button. `api/analyze.js` sends the code to `brinkmannpaul.com/api/blueprint-code` (`check` before writing, `claim` once the book is written), like a payment. The codes are never stored as text: the Vercel project `brinkmannpaul` holds only their fingerprints (`BLUEPRINT_CODE_HASHES`), and Stripe marks a used one. Never write a code into this repo, a commit or a pull request.

Set a monthly spend limit in the Anthropic console. One book costs roughly 2 USD and takes two to three minutes. Preview deployments are open for testing (they sit behind Vercel login).

### Before going live

- Impressum and Datenschutzerklärung on purmethod.com. The questionnaire asks for health data (Art. 9 GDPR); the page asks for explicit consent before sending, but the privacy policy has to name Anthropic as processor.
