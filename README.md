# Newbury College Spanish Activities

A standalone classroom activity platform designed specifically for a 16:9 teaching display.

## Run it

Open `index.html` directly in a browser. No web server, build process, login, cookies, analytics or internet connection is required.

The same folder can also be uploaded unchanged to a simple static host such as GitHub Pages.

## Front-page structure

The front page is organised by **grammar subject**. Every active subject has its own dropdown, grouped by activity type, with a short preview before the activity opens.

Current subject boxes:

- **Pronombres** — 23 activities
- **Presente** — 4 activities
- **Imperfecto** — 4 activities
- **Pretérito** — 4 activities
- **Pretérito perfecto** — 4 activities

There are currently **39 activities** in total.

The dropdowns use activity-type labels such as **Match**, **Choose**, **Write**, **Identify**, **Find**, **Gap fill**, **Table** and **Test**.

## New tense activity banks

### Presente

- Regular present: conjugation table
- Present tense in context
- Common present irregulars
- Present tense: test

### Imperfecto

- Imperfect: regular endings
- Imperfect in context
- Imperfect: choose the form
- Imperfect: test

### Pretérito

This section uses **Pretérito** for the completed past / pretérito indefinido.

- Pretérito: regular endings
- Pretérito: common irregulars
- Ayer: completed actions
- Pretérito: test

### Pretérito perfecto

- Pretérito perfecto: haber
- Past participles
- Pretérito perfecto in context
- Pretérito perfecto: test

The new activities use Peninsular Spanish forms, including **vosotros**, and keep Pretérito and Pretérito perfecto as separate teaching areas.

## Structure

- `index.html` — subject-based front page and activity pickers
- `activities/` — one HTML page per activity
- `assets/css/theme.css` — Newbury College Spanish visual theme and 16:9 layout
- `assets/js/activities.js` — subjects, activity catalogue, questions and answers
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

You can also add a new subject to the `subjects` array. The front page now builds active subject dropdowns automatically.

### 2. Add the activity to the catalogue

Add a catalogue entry with:

- a unique `id`
- the HTML filename
- the grammar `subject`
- a `typeLabel`, such as `Write`, `Choose` or `Test`
- a short title and description

The `typeLabel` groups activities inside each subject dropdown.

### 3. Add the activity data

Add an activity object with the same ID to `activities`.

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
