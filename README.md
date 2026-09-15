# Newbury College Spanish Activities

A standalone classroom activity platform designed specifically for a 16:9 teaching display.

## Run it

Open `index.html` directly in a browser. No web server, build process, login, cookies, analytics or internet connection is required.

The same folder can also be uploaded unchanged to a simple static host such as GitHub Pages.

## Front-page structure

The front page is organised by **grammar subject**. Every subject has its own dropdown, grouped by activity type, with a short preview before the activity opens.

Current subject boxes:

- **Pronombres** — 31 activities
- **Presente** — 8 activities
- **Imperfecto** — 8 activities
- **Pretérito** — 8 activities
- **Pretérito perfecto** — 8 activities

There are currently **63 activities** in total.

The dropdowns use activity-type labels such as **Match**, **Choose**, **Write**, **Identify**, **Find**, **Gap fill**, **Table** and **Test**.

## CEFR labels

Every activity now has an **approximate target CEFR level**: **A1, A2, B1 or B2**.

The level is shown:

- inside each activity dropdown
- in the activity preview on the front page
- at the top of the activity itself

These labels describe the approximate teaching level of the task. They are not intended to imply that completing one grammar activity demonstrates achievement of the full CEFR level.

The current bank deliberately ranges from simple **A1** form work through **A2/B1** contextual grammar to a smaller number of more demanding **B2** tasks.

## Pronombres

The Pronombres section now covers both possessives and object pronouns.

### Possessive pronouns and determiners

The original bank includes matching, writing, identifying, finding, table, gap-fill and test activities covering forms such as **mi / mío**, **nuestro / el nuestro**, agreement and determiner-versus-pronoun use.

### Direct and indirect object pronouns

New activities include:

- **Direct object pronouns: match** — `me, te, lo, la, nos, os, los, las`
- **Indirect object pronouns: match** — `me, te, le, nos, os, les`
- **Me gusta, me hablas, me ves** — identify direct versus indirect function
- **Me gusta: indirect pronouns** — practise `me, te, le, nos, os, les` with *gustar*
- **Direct object pronouns: replace it**
- **Indirect object pronouns: replace it**
- **Two object pronouns together** — including `se lo / se la / se los / se las`
- **Object pronouns: placement challenge** — infinitives, gerunds and commands

The final placement challenge is intentionally more advanced than the introductory object-pronoun activities.

## Presente

- Regular present: conjugation table
- Present tense in context
- Common present irregulars
- Present tense: test
- Present: match the regular forms
- Present: match common irregulars
- **Present: find the regular verbs**
- **Present: find the irregular verbs**

## Imperfecto

- Imperfect: regular endings
- Imperfect in context
- Imperfect: choose the form
- Imperfect: test
- Imperfect: match the regular forms
- Imperfect: match the irregulars
- **Imperfect: find past habits**
- **Imperfect: find the background** — distinguishes imperfect background from completed events

## Pretérito

This section uses **Pretérito** for the completed past / pretérito indefinido.

- Pretérito: regular endings
- Pretérito: common irregulars
- Ayer: completed actions
- Pretérito: test
- Pretérito: match the regular forms
- Pretérito: match common irregulars
- **Pretérito: find completed actions**
- **Pretérito: find the events** — distinguishes completed events from imperfect background

## Pretérito perfecto

- Pretérito perfecto: haber
- Past participles
- Pretérito perfecto in context
- Pretérito perfecto: test
- Pretérito perfecto: match haber
- Pretérito perfecto: match participles
- **Pretérito perfecto: find haber**
- **Pretérito perfecto: find the participles**

The verb activities use Peninsular Spanish forms, including **vosotros**, and keep Pretérito and Pretérito perfecto as separate teaching areas.

## Structure

- `index.html` — subject-based front page and activity pickers
- `activities/` — one HTML page per activity
- `assets/css/theme.css` — Newbury College Spanish visual theme, CEFR badges and 16:9 layout
- `assets/js/activities.js` — subjects, CEFR mappings, activity catalogue, questions and answers
- `assets/js/platform.js` — shared header, reusable subject home page and full-screen behaviour
- `assets/js/activity-engine.js` — reusable activity types and scoring
- `activities/activity-template.html` — starter page for future activities

## Adding another activity later

The platform is data-driven, so most new activities do not require new JavaScript logic.

### 1. Choose the grammar subject

Open `assets/js/activities.js` and add the activity to one of the existing subject IDs:

- `pronombres`
- `presente`
- `imperfecto`
- `preterito`
- `preterito-perfecto`

You can also add a new subject to the `subjects` array. The front page builds active subject dropdowns automatically.

### 2. Add the activity to the catalogue

Add a catalogue entry with:

- a unique `id`
- the HTML filename
- the grammar `subject`
- a `typeLabel`, such as `Write`, `Choose`, `Find` or `Test`
- a `cefr` value: `A1`, `A2`, `B1` or `B2`
- a short title and description

The `typeLabel` groups activities inside each subject dropdown. The `cefr` value creates the level label automatically.

### 3. Add the activity data

Add an activity object with the same ID to `activities`, including the same `cefr` level.

The reusable activity types currently include:

- `family-select` — choose the correct family or auxiliary form
- `drag-match` — drag/click items into answer families
- `gap-grid` — write answers into a set of sentence gaps
- `paged-groups` — one owner/context at a time with several gaps
- `context-pairs` — paired contextual sentence gaps
- `select-grid` — choose answers from dropdowns in sentences
- `identify-grid` — classify highlighted language
- `find-words` — click target words in a sentence or text
- `text-cloze` — complete a continuous text
- `matrix-select` — complete a table of forms using dropdowns
- `quiz` — one multiple-choice question at a time with scoring

### 4. Add the HTML page

Duplicate `activities/activity-template.html` and change only:

- the `<title>`
- `data-activity-id` on the `<body>`

For example:

```html
<body data-page-kind="activity" data-activity-id="my-new-activity">
```

### 5. Keep it standalone

To preserve offline/local-drive use, avoid:

- CDN scripts or stylesheets
- web fonts
- remote images
- `fetch()` calls to external services
- analytics, cookies or tracking scripts

If an activity needs an image later, add it to a local `assets/images/` folder and use a relative path.

## Teaching-screen controls

- **Full screen** button in the top-right corner
- press **F** to enter or leave full-screen mode when focus is not inside an input
- numbered keys select answers in multiple-choice tests
- activities include their own **Check**, **Show answers**, **Reset**, navigation or scoring controls as appropriate

## Branding

The theme uses the supplied Newbury College styling, including the primary red `#EE3A4E`, dark header, accessible yellow focus state and high-contrast classroom controls. The header uses a self-contained Newbury College / Español lettermark so the package does not depend on an external logo asset.
