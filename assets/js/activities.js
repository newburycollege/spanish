(function () {
  const subjects = [
  {
    "id": "pronombres",
    "title": "Pronombres",
    "description": "Personal, object and possessive pronouns, including gustar and pronoun placement.",
    "status": "available"
  },
  {
    "id": "presente",
    "title": "Presente",
    "description": "Present-tense forms and use.",
    "status": "available"
  },
  {
    "id": "imperfecto",
    "title": "Imperfecto",
    "description": "Past descriptions, habits and background.",
    "status": "available"
  },
  {
    "id": "preterito",
    "title": "Pretérito",
    "description": "Completed past actions and events.",
    "status": "available"
  },
  {
    "id": "preterito-perfecto",
    "title": "Pretérito perfecto",
    "description": "Recent and life-experience past actions.",
    "status": "available"
  }
];

  const catalogue = [
  {
    "id": "possessive-forms",
    "file": "possessive-forms.html",
    "subject": "pronombres",
    "typeLabel": "Choose",
    "icon": "A",
    "title": "Possessive pronouns: forms",
    "description": "Match each subject to the correct set of four forms.",
    "cefr": "A2"
  },
  {
    "id": "drag-match",
    "file": "drag-match.html",
    "subject": "pronombres",
    "typeLabel": "Match",
    "icon": "↔",
    "title": "Match the pronouns",
    "description": "Match each subject to the correct possessive family.",
    "cefr": "A2"
  },
  {
    "id": "one-possessor",
    "file": "one-possessor.html",
    "subject": "pronombres",
    "typeLabel": "Write",
    "icon": "1",
    "title": "One possessor",
    "description": "Practise mío, tuyo and suyo with gender and number.",
    "cefr": "A2"
  },
  {
    "id": "several-possessors",
    "file": "several-possessors.html",
    "subject": "pronombres",
    "typeLabel": "Write",
    "icon": "+",
    "title": "Several possessors",
    "description": "Practise nuestro, vuestro and suyo with agreement.",
    "cefr": "A2"
  },
  {
    "id": "write-possessive",
    "file": "write-possessive.html",
    "subject": "pronombres",
    "typeLabel": "Write",
    "icon": "✎",
    "title": "Write the possessive",
    "description": "Turn ownership statements into possessive-pronoun sentences.",
    "cefr": "A2"
  },
  {
    "id": "yo-mi-mio",
    "file": "yo-mi-mio.html",
    "subject": "pronombres",
    "typeLabel": "Write",
    "icon": "yo",
    "title": "Yo, mi, mío",
    "description": "Choose between a subject pronoun, determiner and pronoun.",
    "cefr": "A2"
  },
  {
    "id": "determiners-pronouns",
    "file": "determiners-pronouns.html",
    "subject": "pronombres",
    "typeLabel": "Write",
    "icon": "D/P",
    "title": "Determiners & pronouns",
    "description": "Supply the correct possessive determiner or pronoun in context.",
    "cefr": "A2"
  },
  {
    "id": "write-pronoun-forms",
    "file": "write-pronoun-forms.html",
    "subject": "pronombres",
    "typeLabel": "Write",
    "icon": "4",
    "title": "Write the four forms",
    "description": "Complete masculine, feminine, singular and plural forms in context.",
    "cefr": "A2"
  },
  {
    "id": "mixed-write",
    "file": "mixed-write.html",
    "subject": "pronombres",
    "typeLabel": "Write",
    "icon": "2",
    "title": "Determiner or pronoun? Write",
    "description": "Write paired determiner and pronoun forms for each owner.",
    "cefr": "A2"
  },
  {
    "id": "mixed-test",
    "file": "mixed-test.html",
    "subject": "pronombres",
    "typeLabel": "Test",
    "icon": "✓",
    "title": "Personal & possessive test",
    "description": "Mixed multiple-choice questions with an instant score.",
    "cefr": "A2"
  },
  {
    "id": "possessive-write-2",
    "file": "possessive-write-2.html",
    "subject": "pronombres",
    "typeLabel": "Write",
    "icon": "✎",
    "title": "Write possessive pronouns 2",
    "description": "Use the owner clue and noun agreement to write the correct pronoun.",
    "cefr": "A2"
  },
  {
    "id": "det-pron-identify-1",
    "file": "det-pron-identify-1.html",
    "subject": "pronombres",
    "typeLabel": "Identify",
    "icon": "D/P",
    "title": "Determiner or pronoun? 1",
    "description": "Identify whether the highlighted possessive is a determiner or pronoun.",
    "cefr": "A2"
  },
  {
    "id": "det-pron-identify-2",
    "file": "det-pron-identify-2.html",
    "subject": "pronombres",
    "typeLabel": "Identify",
    "icon": "D/P",
    "title": "Determiner or pronoun? 2",
    "description": "A second set identifying possessive determiners and pronouns.",
    "cefr": "A2"
  },
  {
    "id": "det-pron-write-1",
    "file": "det-pron-write-1.html",
    "subject": "pronombres",
    "typeLabel": "Write",
    "icon": "✎",
    "title": "Determiners & pronouns: write",
    "description": "Write the correct possessive form from sentence context.",
    "cefr": "A2"
  },
  {
    "id": "possessive-write-context",
    "file": "possessive-write-context.html",
    "subject": "pronombres",
    "typeLabel": "Write",
    "icon": "✎",
    "title": "Write the possessive pronoun",
    "description": "Read the ownership context and complete the follow-up sentence.",
    "cefr": "A2"
  },
  {
    "id": "find-possessives-1",
    "file": "find-possessives-1.html",
    "subject": "pronombres",
    "typeLabel": "Find",
    "icon": "⌕",
    "title": "Find all possessives 1",
    "description": "Click every possessive determiner and pronoun in short texts.",
    "cefr": "A2"
  },
  {
    "id": "find-possessives-2",
    "file": "find-possessives-2.html",
    "subject": "pronombres",
    "typeLabel": "Find",
    "icon": "⌕",
    "title": "Find all possessives 2",
    "description": "Find possessive determiners and pronouns in a longer text.",
    "cefr": "B1"
  },
  {
    "id": "possessive-text-cloze",
    "file": "possessive-text-cloze.html",
    "subject": "pronombres",
    "typeLabel": "Gap fill",
    "icon": "…",
    "title": "Possessive pronouns in a text",
    "description": "Complete a continuous text with the correct possessive pronouns.",
    "cefr": "B1"
  },
  {
    "id": "find-possessive-pronouns",
    "file": "find-possessive-pronouns.html",
    "subject": "pronombres",
    "typeLabel": "Find",
    "icon": "⌕",
    "title": "Find the possessive pronouns",
    "description": "Click the possessive pronoun in each sentence.",
    "cefr": "A2"
  },
  {
    "id": "choose-possessive-form",
    "file": "choose-possessive-form.html",
    "subject": "pronombres",
    "typeLabel": "Choose",
    "icon": "▾",
    "title": "Choose the correct possessive",
    "description": "Choose the form that agrees with the owner, gender and number.",
    "cefr": "A2"
  },
  {
    "id": "whose-is-it",
    "file": "whose-is-it.html",
    "subject": "pronombres",
    "typeLabel": "Table",
    "icon": "▦",
    "title": "Whose is it?",
    "description": "Complete a table of possessive-pronoun forms for different owners and nouns.",
    "cefr": "A2"
  },
  {
    "id": "possessive-choice-2",
    "file": "possessive-choice-2.html",
    "subject": "pronombres",
    "typeLabel": "Choose",
    "icon": "▾",
    "title": "Possessive pronouns: choose 2",
    "description": "Choose the correct pronoun using owner clues and noun agreement.",
    "cefr": "A2"
  },
  {
    "id": "possessive-test",
    "file": "possessive-test.html",
    "subject": "pronombres",
    "typeLabel": "Test",
    "icon": "✓",
    "title": "Possessive pronouns: test",
    "description": "A 16-question multiple-choice test of possessive-pronoun agreement.",
    "cefr": "A2"
  },
  {
    "id": "present-regular-table",
    "file": "present-regular-table.html",
    "subject": "presente",
    "typeLabel": "Table",
    "icon": "▦",
    "title": "Regular present: conjugation table",
    "description": "Choose the correct present-tense forms of hablar, comer and vivir.",
    "cefr": "A1"
  },
  {
    "id": "present-in-context",
    "file": "present-in-context.html",
    "subject": "presente",
    "typeLabel": "Write",
    "icon": "✎",
    "title": "Present tense in context",
    "description": "Write regular and common irregular present-tense forms in everyday sentences.",
    "cefr": "A2"
  },
  {
    "id": "present-irregulars",
    "file": "present-irregulars.html",
    "subject": "presente",
    "typeLabel": "Choose",
    "icon": "▾",
    "title": "Common present irregulars",
    "description": "Choose the correct form of tener, ir, hacer, poder, querer, venir, decir and salir.",
    "cefr": "A2"
  },
  {
    "id": "present-test",
    "file": "present-test.html",
    "subject": "presente",
    "typeLabel": "Test",
    "icon": "✓",
    "title": "Present tense: test",
    "description": "A mixed test of regular and common irregular present-tense forms.",
    "cefr": "A2"
  },
  {
    "id": "imperfect-regular-table",
    "file": "imperfect-regular-table.html",
    "subject": "imperfecto",
    "typeLabel": "Table",
    "icon": "▦",
    "title": "Imperfect: regular endings",
    "description": "Build the imperfect forms of hablar, comer and vivir across all six persons.",
    "cefr": "A2"
  },
  {
    "id": "imperfect-in-context",
    "file": "imperfect-in-context.html",
    "subject": "imperfecto",
    "typeLabel": "Write",
    "icon": "✎",
    "title": "Imperfect in context",
    "description": "Describe past habits, background and repeated actions using the imperfect.",
    "cefr": "B1"
  },
  {
    "id": "imperfect-choose",
    "file": "imperfect-choose.html",
    "subject": "imperfecto",
    "typeLabel": "Choose",
    "icon": "▾",
    "title": "Imperfect: choose the form",
    "description": "Choose the correct regular or irregular imperfect form in context.",
    "cefr": "A2"
  },
  {
    "id": "imperfect-test",
    "file": "imperfect-test.html",
    "subject": "imperfecto",
    "typeLabel": "Test",
    "icon": "✓",
    "title": "Imperfect: test",
    "description": "A mixed test of imperfect forms and typical uses.",
    "cefr": "B1"
  },
  {
    "id": "preterite-regular-table",
    "file": "preterite-regular-table.html",
    "subject": "preterito",
    "typeLabel": "Table",
    "icon": "▦",
    "title": "Pretérito: regular endings",
    "description": "Build regular completed-past forms of hablar, comer and vivir.",
    "cefr": "A2"
  },
  {
    "id": "preterite-irregulars",
    "file": "preterite-irregulars.html",
    "subject": "preterito",
    "typeLabel": "Choose",
    "icon": "▾",
    "title": "Pretérito: common irregulars",
    "description": "Choose common irregular preterite forms including fui, tuve, hice, dije and traje.",
    "cefr": "B1"
  },
  {
    "id": "preterite-story",
    "file": "preterite-story.html",
    "subject": "preterito",
    "typeLabel": "Gap fill",
    "icon": "…",
    "title": "Ayer: completed actions",
    "description": "Complete a short narrative using the pretérito for a sequence of completed events.",
    "cefr": "B1"
  },
  {
    "id": "preterite-test",
    "file": "preterite-test.html",
    "subject": "preterito",
    "typeLabel": "Test",
    "icon": "✓",
    "title": "Pretérito: test",
    "description": "A mixed test of regular and irregular completed-past forms.",
    "cefr": "B1"
  },
  {
    "id": "perfect-auxiliary",
    "file": "perfect-auxiliary.html",
    "subject": "preterito-perfecto",
    "typeLabel": "Choose",
    "icon": "he",
    "title": "Pretérito perfecto: haber",
    "description": "Match each subject to the correct present-tense form of haber.",
    "cefr": "A2"
  },
  {
    "id": "perfect-participles",
    "file": "perfect-participles.html",
    "subject": "preterito-perfecto",
    "typeLabel": "Write",
    "icon": "✎",
    "title": "Past participles",
    "description": "Write regular and common irregular past participles used in the pretérito perfecto.",
    "cefr": "A2"
  },
  {
    "id": "perfect-in-context",
    "file": "perfect-in-context.html",
    "subject": "preterito-perfecto",
    "typeLabel": "Choose",
    "icon": "▾",
    "title": "Pretérito perfecto in context",
    "description": "Choose complete forms for recent actions and life experiences.",
    "cefr": "A2"
  },
  {
    "id": "perfect-test",
    "file": "perfect-test.html",
    "subject": "preterito-perfecto",
    "typeLabel": "Test",
    "icon": "✓",
    "title": "Pretérito perfecto: test",
    "description": "A mixed test of haber, participles and common perfect-tense contexts.",
    "cefr": "B1"
  },
  {
    "id": "present-match-regular",
    "file": "present-match-regular.html",
    "subject": "presente",
    "typeLabel": "Match",
    "icon": "↔",
    "title": "Present: match the regular forms",
    "description": "Match person-and-verb prompts to the correct regular present-tense forms.",
    "cefr": "A1"
  },
  {
    "id": "present-match-irregular",
    "file": "present-match-irregular.html",
    "subject": "presente",
    "typeLabel": "Match",
    "icon": "↔",
    "title": "Present: match common irregulars",
    "description": "Match common irregular present-tense prompts to the correct forms.",
    "cefr": "A2"
  },
  {
    "id": "imperfect-match-regular",
    "file": "imperfect-match-regular.html",
    "subject": "imperfecto",
    "typeLabel": "Match",
    "icon": "↔",
    "title": "Imperfect: match the regular forms",
    "description": "Match person-and-verb prompts to the correct regular imperfect forms.",
    "cefr": "A2"
  },
  {
    "id": "imperfect-match-irregular",
    "file": "imperfect-match-irregular.html",
    "subject": "imperfecto",
    "typeLabel": "Match",
    "icon": "↔",
    "title": "Imperfect: match the irregulars",
    "description": "Match forms of ser, ir and ver to the correct person.",
    "cefr": "A2"
  },
  {
    "id": "preterite-match-regular",
    "file": "preterite-match-regular.html",
    "subject": "preterito",
    "typeLabel": "Match",
    "icon": "↔",
    "title": "Pretérito: match the regular forms",
    "description": "Match person-and-verb prompts to the correct regular completed-past forms.",
    "cefr": "A2"
  },
  {
    "id": "preterite-match-irregular",
    "file": "preterite-match-irregular.html",
    "subject": "preterito",
    "typeLabel": "Match",
    "icon": "↔",
    "title": "Pretérito: match common irregulars",
    "description": "Match common irregular pretérito prompts to their correct forms.",
    "cefr": "B1"
  },
  {
    "id": "perfect-match-haber",
    "file": "perfect-match-haber.html",
    "subject": "preterito-perfecto",
    "typeLabel": "Match",
    "icon": "↔",
    "title": "Pretérito perfecto: match haber",
    "description": "Match each subject to the correct present-tense form of haber.",
    "cefr": "A2"
  },
  {
    "id": "perfect-match-participles",
    "file": "perfect-match-participles.html",
    "subject": "preterito-perfecto",
    "typeLabel": "Match",
    "icon": "↔",
    "title": "Pretérito perfecto: match participles",
    "description": "Match infinitives to the past participles used in the pretérito perfecto.",
    "cefr": "A2"
  },
  {
    "id": "present-find-regular",
    "file": "present-find-regular.html",
    "subject": "presente",
    "typeLabel": "Find",
    "icon": "⌕",
    "title": "Present: find the regular verbs",
    "description": "Click the regular present-tense verb forms in short everyday texts.",
    "cefr": "A1"
  },
  {
    "id": "present-find-irregular",
    "file": "present-find-irregular.html",
    "subject": "presente",
    "typeLabel": "Find",
    "icon": "⌕",
    "title": "Present: find the irregular verbs",
    "description": "Find common irregular and stem-changing present-tense forms in context.",
    "cefr": "A2"
  },
  {
    "id": "imperfect-find-habits",
    "file": "imperfect-find-habits.html",
    "subject": "imperfecto",
    "typeLabel": "Find",
    "icon": "⌕",
    "title": "Imperfect: find past habits",
    "description": "Find imperfect forms describing repeated actions and past background.",
    "cefr": "A2"
  },
  {
    "id": "imperfect-find-mixed-past",
    "file": "imperfect-find-mixed-past.html",
    "subject": "imperfecto",
    "typeLabel": "Find",
    "icon": "⌕",
    "title": "Imperfect: find the background",
    "description": "Separate imperfect background and habitual actions from completed pretérito events.",
    "cefr": "B1"
  },
  {
    "id": "preterite-find-actions",
    "file": "preterite-find-actions.html",
    "subject": "preterito",
    "typeLabel": "Find",
    "icon": "⌕",
    "title": "Pretérito: find completed actions",
    "description": "Find completed pretérito actions in simple sequences.",
    "cefr": "A2"
  },
  {
    "id": "preterite-find-mixed-past",
    "file": "preterite-find-mixed-past.html",
    "subject": "preterito",
    "typeLabel": "Find",
    "icon": "⌕",
    "title": "Pretérito: find the events",
    "description": "Pick out completed pretérito events from texts that also contain imperfect background.",
    "cefr": "B1"
  },
  {
    "id": "perfect-find-haber",
    "file": "perfect-find-haber.html",
    "subject": "preterito-perfecto",
    "typeLabel": "Find",
    "icon": "⌕",
    "title": "Pretérito perfecto: find haber",
    "description": "Find the auxiliary forms he, has, ha, hemos, habéis and han in context.",
    "cefr": "A2"
  },
  {
    "id": "perfect-find-participles-context",
    "file": "perfect-find-participles-context.html",
    "subject": "preterito-perfecto",
    "typeLabel": "Find",
    "icon": "⌕",
    "title": "Pretérito perfecto: find the participles",
    "description": "Find past participles that belong to pretérito perfecto forms in connected text.",
    "cefr": "B1"
  },
  {
    "id": "direct-pronouns-match",
    "file": "direct-pronouns-match.html",
    "subject": "pronombres",
    "typeLabel": "Match",
    "icon": "↔",
    "title": "Direct object pronouns: match",
    "description": "Match direct objects to me, te, lo, la, nos, os, los and las.",
    "cefr": "A2"
  },
  {
    "id": "indirect-pronouns-match",
    "file": "indirect-pronouns-match.html",
    "subject": "pronombres",
    "typeLabel": "Match",
    "icon": "↔",
    "title": "Indirect object pronouns: match",
    "description": "Match recipients and experiencers to me, te, le, nos, os and les.",
    "cefr": "A2"
  },
  {
    "id": "object-pronouns-identify",
    "file": "object-pronouns-identify.html",
    "subject": "pronombres",
    "typeLabel": "Identify",
    "icon": "OD/OI",
    "title": "Me gusta, me hablas, me ves",
    "description": "Decide whether the highlighted object pronoun is direct or indirect.",
    "cefr": "A2"
  },
  {
    "id": "gustar-indirect-pronouns",
    "file": "gustar-indirect-pronouns.html",
    "subject": "pronombres",
    "typeLabel": "Write",
    "icon": "♥",
    "title": "Me gusta: indirect pronouns",
    "description": "Complete gustar sentences with me, te, le, nos, os and les.",
    "cefr": "A1"
  },
  {
    "id": "direct-pronouns-write",
    "file": "direct-pronouns-write.html",
    "subject": "pronombres",
    "typeLabel": "Write",
    "icon": "OD",
    "title": "Direct object pronouns: replace it",
    "description": "Replace the direct object with the correct pronoun.",
    "cefr": "A2"
  },
  {
    "id": "indirect-pronouns-write",
    "file": "indirect-pronouns-write.html",
    "subject": "pronombres",
    "typeLabel": "Write",
    "icon": "OI",
    "title": "Indirect object pronouns: replace it",
    "description": "Replace the recipient or experiencer with the correct indirect pronoun.",
    "cefr": "A2"
  },
  {
    "id": "double-pronouns-choose",
    "file": "double-pronouns-choose.html",
    "subject": "pronombres",
    "typeLabel": "Choose",
    "icon": "2×",
    "title": "Two object pronouns together",
    "description": "Choose the correct direct + indirect object pronoun combination.",
    "cefr": "B1"
  },
  {
    "id": "object-pronoun-placement",
    "file": "object-pronoun-placement.html",
    "subject": "pronombres",
    "typeLabel": "Test",
    "icon": "↗",
    "title": "Object pronouns: placement challenge",
    "description": "Use two pronouns with infinitives, gerunds and commands.",
    "cefr": "B2"
  }
];

  const activities = {
  "possessive-forms": {
    "title": "Possessive pronouns: forms",
    "kicker": "Pronombres posesivos",
    "instruction": "Choose the correct family of forms for each subject.",
    "type": "family-select",
    "options": [
      "mío · mía · míos · mías",
      "tuyo · tuya · tuyos · tuyas",
      "suyo · suya · suyos · suyas",
      "nuestro · nuestra · nuestros · nuestras",
      "vuestro · vuestra · vuestros · vuestras"
    ],
    "items": [
      [
        "yo",
        "mío · mía · míos · mías"
      ],
      [
        "tú",
        "tuyo · tuya · tuyos · tuyas"
      ],
      [
        "usted",
        "suyo · suya · suyos · suyas"
      ],
      [
        "él / ella",
        "suyo · suya · suyos · suyas"
      ],
      [
        "nosotros / nosotras",
        "nuestro · nuestra · nuestros · nuestras"
      ],
      [
        "vosotros / vosotras",
        "vuestro · vuestra · vuestros · vuestras"
      ],
      [
        "ustedes",
        "suyo · suya · suyos · suyas"
      ],
      [
        "ellos / ellas",
        "suyo · suya · suyos · suyas"
      ]
    ],
    "cefr": "A2"
  },
  "drag-match": {
    "title": "Match the pronouns",
    "kicker": "Pronombres posesivos",
    "instruction": "Drag a card to a family, or click a card and then a family.",
    "type": "drag-match",
    "targets": [
      {
        "id": "mio",
        "label": "mío / mía"
      },
      {
        "id": "tuyo",
        "label": "tuyo / tuya"
      },
      {
        "id": "suyo",
        "label": "suyo / suya"
      },
      {
        "id": "nuestro",
        "label": "nuestro / nuestra"
      },
      {
        "id": "vuestro",
        "label": "vuestro / vuestra"
      }
    ],
    "items": [
      [
        "yo",
        "mio"
      ],
      [
        "tú",
        "tuyo"
      ],
      [
        "usted",
        "suyo"
      ],
      [
        "él",
        "suyo"
      ],
      [
        "ella",
        "suyo"
      ],
      [
        "el loro",
        "suyo"
      ],
      [
        "nosotros",
        "nuestro"
      ],
      [
        "vosotras",
        "vuestro"
      ],
      [
        "ustedes",
        "suyo"
      ],
      [
        "ellos",
        "suyo"
      ],
      [
        "los loros",
        "suyo"
      ]
    ],
    "cefr": "A2"
  },
  "one-possessor": {
    "title": "One possessor",
    "kicker": "Formas: un solo poseedor",
    "instruction": "Write the possessive pronoun so that it agrees with the thing owned.",
    "type": "paged-groups",
    "groups": [
      {
        "owner": "yo",
        "symbol": "YO",
        "hint": "mío · mía · míos · mías",
        "items": [
          [
            "El abrigo es ___.",
            "mío"
          ],
          [
            "La bufanda es ___.",
            "mía"
          ],
          [
            "Los zapatos son ___.",
            "míos"
          ],
          [
            "Las botas son ___.",
            "mías"
          ]
        ]
      },
      {
        "owner": "tú",
        "symbol": "TÚ",
        "hint": "tuyo · tuya · tuyos · tuyas",
        "items": [
          [
            "El libro es ___.",
            "tuyo"
          ],
          [
            "La mochila es ___.",
            "tuya"
          ],
          [
            "Los lápices son ___.",
            "tuyos"
          ],
          [
            "Las ceras son ___.",
            "tuyas"
          ]
        ]
      },
      {
        "owner": "él",
        "symbol": "ÉL",
        "hint": "suyo · suya · suyos · suyas",
        "items": [
          [
            "El barco es ___.",
            "suyo"
          ],
          [
            "La bicicleta es ___.",
            "suya"
          ],
          [
            "Los coches son ___.",
            "suyos"
          ],
          [
            "Las canoas son ___.",
            "suyas"
          ]
        ]
      },
      {
        "owner": "ella",
        "symbol": "ELLA",
        "hint": "suyo · suya · suyos · suyas",
        "items": [
          [
            "El helado es ___.",
            "suyo"
          ],
          [
            "La cerveza es ___.",
            "suya"
          ],
          [
            "Los plátanos son ___.",
            "suyos"
          ],
          [
            "Las cerezas son ___.",
            "suyas"
          ]
        ]
      }
    ],
    "cefr": "A2"
  },
  "several-possessors": {
    "title": "Several possessors",
    "kicker": "Formas: varios poseedores",
    "instruction": "Write the possessive pronoun and make it agree with the thing owned.",
    "type": "paged-groups",
    "groups": [
      {
        "owner": "nosotros / nosotras",
        "symbol": "NOS",
        "hint": "nuestro · nuestra · nuestros · nuestras",
        "items": [
          [
            "El jardín es ___.",
            "nuestro"
          ],
          [
            "La casa es ___.",
            "nuestra"
          ],
          [
            "Los árboles son ___.",
            "nuestros"
          ],
          [
            "Las flores son ___.",
            "nuestras"
          ]
        ]
      },
      {
        "owner": "vosotros / vosotras",
        "symbol": "VOS",
        "hint": "vuestro · vuestra · vuestros · vuestras",
        "items": [
          [
            "El plato es ___.",
            "vuestro"
          ],
          [
            "La cuchara es ___.",
            "vuestra"
          ],
          [
            "Los vasos son ___.",
            "vuestros"
          ],
          [
            "Las tazas son ___.",
            "vuestras"
          ]
        ]
      },
      {
        "owner": "ellos / ellas",
        "symbol": "3ª",
        "hint": "suyo · suya · suyos · suyas",
        "items": [
          [
            "El anillo es ___.",
            "suyo"
          ],
          [
            "La sortija es ___.",
            "suya"
          ],
          [
            "Los relojes son ___.",
            "suyos"
          ],
          [
            "Las pulseras son ___.",
            "suyas"
          ]
        ]
      }
    ],
    "cefr": "A2"
  },
  "write-possessive": {
    "title": "Write the possessive",
    "kicker": "Pronombres posesivos",
    "instruction": "Complete each second sentence with a possessive pronoun.",
    "type": "gap-grid",
    "items": [
      [
        "Yo tengo una muñeca. La muñeca es ___.",
        "mía"
      ],
      [
        "Tú tienes un reloj. El reloj es ___.",
        "tuyo"
      ],
      [
        "Usted tiene una raqueta. La raqueta es ___.",
        "suya"
      ],
      [
        "Ella tiene un vestido. El vestido es ___.",
        "suyo"
      ],
      [
        "El perro tiene un hueso. El hueso es ___.",
        "suyo"
      ],
      [
        "Nosotras tenemos un loro. El loro es ___.",
        "nuestro"
      ],
      [
        "Vosotros tenéis una gata. La gata es ___.",
        "vuestra"
      ],
      [
        "Ellas tienen un balón. El balón es ___.",
        "suyo"
      ]
    ],
    "cefr": "A2"
  },
  "yo-mi-mio": {
    "title": "Yo, mi, mío",
    "kicker": "Personales y posesivos",
    "instruction": "Write the missing form. Pay attention to whether the gap needs yo, mi/mis or mío/mía/míos/mías.",
    "type": "gap-grid",
    "items": [
      [
        "___ tengo una bicicleta.",
        "yo"
      ],
      [
        "La bicicleta es ___.",
        "mía"
      ],
      [
        "___ bicicleta es roja.",
        "mi"
      ],
      [
        "___ pelota es nueva.",
        "mi"
      ],
      [
        "La pelota es ___.",
        "mía"
      ],
      [
        "___ juego al fútbol.",
        "yo"
      ],
      [
        "Los lápices son ___.",
        "míos"
      ],
      [
        "Este es ___ hermano.",
        "mi"
      ],
      [
        "A veces ___ como piña.",
        "yo"
      ],
      [
        "¿Dónde están ___ calcetines?",
        "mis"
      ],
      [
        "Ahora ___ ya estoy peinada.",
        "yo"
      ],
      [
        "Estas no son las ___.",
        "mías"
      ]
    ],
    "cefr": "A2"
  },
  "determiners-pronouns": {
    "title": "Determiners & pronouns",
    "kicker": "Determinantes y pronombres",
    "instruction": "Write the missing possessive form. Decide whether the noun is stated or replaced.",
    "type": "gap-grid",
    "items": [
      [
        "Este camión es ___.",
        "mío"
      ],
      [
        "¿Dónde está ___ madre?",
        "tu"
      ],
      [
        "He recogido todas ___ cosas.",
        "mis"
      ],
      [
        "¿Cuáles son las ___?",
        "tuyas"
      ],
      [
        "Coja ___ paraguas, señora.",
        "su"
      ],
      [
        "Esas botas no son ___.",
        "mías"
      ],
      [
        "¿Son ___ esos lápices?",
        "suyos"
      ],
      [
        "La culpa no ha sido ___.",
        "suya"
      ],
      [
        "No pierdas ___ llaves.",
        "tus"
      ],
      [
        "¿Han robado algo ___?",
        "suyo"
      ],
      [
        "Los ___ son de boxeo.",
        "míos"
      ],
      [
        "¿Los perros son ___?",
        "tuyos"
      ]
    ],
    "cefr": "A2"
  },
  "write-pronoun-forms": {
    "title": "Write the four forms",
    "kicker": "Pronombres posesivos",
    "instruction": "Complete the four sentences for each owner.",
    "type": "paged-groups",
    "groups": [
      {
        "owner": "yo",
        "symbol": "YO",
        "hint": "mío · mía · míos · mías",
        "items": [
          [
            "El bigote es ___.",
            "mío"
          ],
          [
            "La barba es ___.",
            "mía"
          ],
          [
            "Los ojos son ___.",
            "míos"
          ],
          [
            "Las orejas son ___.",
            "mías"
          ]
        ]
      },
      {
        "owner": "tú",
        "symbol": "TÚ",
        "hint": "tuyo · tuya · tuyos · tuyas",
        "items": [
          [
            "El dinero es ___.",
            "tuyo"
          ],
          [
            "La casa es ___.",
            "tuya"
          ],
          [
            "Los coches son ___.",
            "tuyos"
          ],
          [
            "Las tarjetas son ___.",
            "tuyas"
          ]
        ]
      },
      {
        "owner": "usted",
        "symbol": "UD",
        "hint": "suyo · suya · suyos · suyas",
        "items": [
          [
            "El sombrero es ___.",
            "suyo"
          ],
          [
            "La camisa es ___.",
            "suya"
          ],
          [
            "Los zapatos son ___.",
            "suyos"
          ],
          [
            "Las gafas son ___.",
            "suyas"
          ]
        ]
      },
      {
        "owner": "Pedro",
        "symbol": "P",
        "hint": "suyo · suya · suyos · suyas",
        "items": [
          [
            "El jardín no es ___.",
            "suyo"
          ],
          [
            "La fuente no es ___.",
            "suya"
          ],
          [
            "Los árboles no son ___.",
            "suyos"
          ],
          [
            "Las flores no son ___.",
            "suyas"
          ]
        ]
      },
      {
        "owner": "mi madre",
        "symbol": "M",
        "hint": "suyo · suya · suyos · suyas",
        "items": [
          [
            "El bolso es ___.",
            "suyo"
          ],
          [
            "La cartera es ___.",
            "suya"
          ],
          [
            "Los relojes son ___.",
            "suyos"
          ],
          [
            "Las pulseras son ___.",
            "suyas"
          ]
        ]
      },
      {
        "owner": "nosotros",
        "symbol": "NOS",
        "hint": "nuestro · nuestra · nuestros · nuestras",
        "items": [
          [
            "El sofá es ___.",
            "nuestro"
          ],
          [
            "La cama es ___.",
            "nuestra"
          ],
          [
            "Los muebles son ___.",
            "nuestros"
          ],
          [
            "Las joyas son ___.",
            "nuestras"
          ]
        ]
      },
      {
        "owner": "vosotras",
        "symbol": "VOS",
        "hint": "vuestro · vuestra · vuestros · vuestras",
        "items": [
          [
            "El cuchillo es ___.",
            "vuestro"
          ],
          [
            "La taza es ___.",
            "vuestra"
          ],
          [
            "Los vasos son ___.",
            "vuestros"
          ],
          [
            "Las cucharas son ___.",
            "vuestras"
          ]
        ]
      },
      {
        "owner": "ellos / ellas / ustedes",
        "symbol": "3ª",
        "hint": "suyo · suya · suyos · suyas",
        "items": [
          [
            "El café es ___.",
            "suyo"
          ],
          [
            "La bebida es ___.",
            "suya"
          ],
          [
            "Los postres son ___.",
            "suyos"
          ],
          [
            "Las tartas son ___.",
            "suyas"
          ]
        ]
      }
    ],
    "cefr": "A2"
  },
  "mixed-write": {
    "title": "Determiner or pronoun?",
    "kicker": "Determinantes y pronombres",
    "instruction": "Complete the paired sentences: first a determiner, then a pronoun.",
    "type": "context-pairs",
    "groups": [
      {
        "owner": "yo",
        "symbol": "YO",
        "context": "Yo tengo un bolígrafo.",
        "items": [
          [
            "Es ___ bolígrafo.",
            "mi"
          ],
          [
            "El bolígrafo es ___.",
            "mío"
          ]
        ]
      },
      {
        "owner": "tú",
        "symbol": "TÚ",
        "context": "Tú tienes una guitarra.",
        "items": [
          [
            "Es ___ guitarra.",
            "tu"
          ],
          [
            "La guitarra es ___.",
            "tuya"
          ]
        ]
      },
      {
        "owner": "Pedro",
        "symbol": "P",
        "context": "Pedro tiene una bufanda.",
        "items": [
          [
            "Es ___ bufanda.",
            "su"
          ],
          [
            "Es ___.",
            "suya"
          ]
        ]
      },
      {
        "owner": "Lucía",
        "symbol": "L",
        "context": "Lucía tiene un osito.",
        "items": [
          [
            "Este es ___ osito.",
            "su"
          ],
          [
            "El osito es ___.",
            "suyo"
          ]
        ]
      },
      {
        "owner": "nosotros",
        "symbol": "NOS",
        "context": "Nosotros tenemos un perro.",
        "items": [
          [
            "Este es ___ perro.",
            "nuestro"
          ],
          [
            "El perro es ___.",
            "nuestro"
          ]
        ]
      },
      {
        "owner": "vosotros",
        "symbol": "VOS",
        "context": "Vosotros tenéis una pelota.",
        "items": [
          [
            "Es ___ pelota.",
            "vuestra"
          ],
          [
            "Es ___.",
            "vuestra"
          ]
        ]
      },
      {
        "owner": "mis padres",
        "symbol": "3ª",
        "context": "Mis padres tienen un coche.",
        "items": [
          [
            "Este es ___ coche.",
            "su"
          ],
          [
            "El coche es ___.",
            "suyo"
          ]
        ]
      }
    ],
    "cefr": "A2"
  },
  "mixed-test": {
    "title": "Personal & possessive test",
    "kicker": "Test mixto",
    "instruction": "Choose the correct option. You will see your score as you go.",
    "type": "quiz",
    "items": [
      [
        "Este coche es ___.",
        [
          "yo",
          "mi",
          "mío"
        ],
        "mío"
      ],
      [
        "¿Vives ___ aquí?",
        [
          "tú",
          "tu",
          "tuya"
        ],
        "tú"
      ],
      [
        "La bicicleta no es ___.",
        [
          "él",
          "su",
          "suya"
        ],
        "suya"
      ],
      [
        "¿Qué hace ___?",
        [
          "ella",
          "su",
          "suya"
        ],
        "ella"
      ],
      [
        "La sombrilla es ___.",
        [
          "nosotros",
          "nuestro",
          "nuestra"
        ],
        "nuestra"
      ],
      [
        "¿Dónde están ___ padres?",
        [
          "vosotros",
          "vuestros",
          "vuestras"
        ],
        "vuestros"
      ],
      [
        "Los gatos son ___.",
        [
          "ellos",
          "sus",
          "suyos"
        ],
        "suyos"
      ],
      [
        "¿Puedo jugar ___ de portero?",
        [
          "yo",
          "mi",
          "mío"
        ],
        "yo"
      ],
      [
        "No olvides ___ gafas.",
        [
          "tú",
          "tus",
          "tuyas"
        ],
        "tus"
      ],
      [
        "___ está trabajando.",
        [
          "Él",
          "Su",
          "Suyo"
        ],
        "Él"
      ],
      [
        "Los guantes son ___.",
        [
          "ella",
          "sus",
          "suyos"
        ],
        "suyos"
      ],
      [
        "Estos son ___ perros.",
        [
          "nosotras",
          "nuestros",
          "nuestras"
        ],
        "nuestros"
      ],
      [
        "¿Tenéis ___ muchos caballos?",
        [
          "vosotros",
          "vuestros",
          "vuestras"
        ],
        "vosotros"
      ],
      [
        "Esta es ___ casa.",
        [
          "ellos",
          "su",
          "suya"
        ],
        "su"
      ],
      [
        "¿Dónde estarán ___ llaves?",
        [
          "yo",
          "mis",
          "mías"
        ],
        "mis"
      ],
      [
        "¿Son ___ estas cosas?",
        [
          "tú",
          "tus",
          "tuyas"
        ],
        "tuyas"
      ],
      [
        "Mi vecino y ___ mujer.",
        [
          "él",
          "su",
          "suya"
        ],
        "su"
      ],
      [
        "Anong y ___ hermano.",
        [
          "ella",
          "su",
          "suyo"
        ],
        "su"
      ],
      [
        "___ estuvimos en España.",
        [
          "Nosotras",
          "Nuestros",
          "Nuestras"
        ],
        "Nosotras"
      ],
      [
        "¿Dónde están ___ zapatos?",
        [
          "vosotros",
          "vuestros",
          "vuestras"
        ],
        "vuestros"
      ],
      [
        "¿De dónde son ___?",
        [
          "ellas",
          "sus",
          "suyas"
        ],
        "ellas"
      ]
    ],
    "cefr": "A2"
  },
  "possessive-write-2": {
    "title": "Write possessive pronouns 2",
    "kicker": "Pronombres posesivos",
    "instruction": "Use the owner clue and the noun to write the correct possessive pronoun.",
    "type": "gap-grid",
    "items": [
      [
        "(yo) Los libros son ___.",
        "míos"
      ],
      [
        "(nosotras) El perro es ___.",
        "nuestro"
      ],
      [
        "(él) La moto es ___.",
        "suya"
      ],
      [
        "(ellas) El coche es ___.",
        "suyo"
      ],
      [
        "(Luisa) Las botas son ___.",
        "suyas"
      ],
      [
        "(tú) La pelota es ___.",
        "tuya"
      ],
      [
        "(Carlos) Las cerezas son ___.",
        "suyas"
      ],
      [
        "(yo) La silla es ___.",
        "mía"
      ],
      [
        "(vosotros) Las bebidas son ___.",
        "vuestras"
      ],
      [
        "(niños) Las galletas son ___.",
        "suyas"
      ]
    ],
    "cefr": "A2"
  },
  "det-pron-identify-1": {
    "title": "Determiner or pronoun? 1",
    "kicker": "Determinantes y pronombres",
    "instruction": "For each highlighted possessive, decide whether it is a determinante or a pronombre.",
    "type": "identify-grid",
    "items": [
      {
        "sentence": "Esta es mi chaqueta.",
        "target": "mi",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "determinante"
      },
      {
        "sentence": "La tuya es aquella.",
        "target": "tuya",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "pronombre"
      },
      {
        "sentence": "¿Es vuestro este lápiz?",
        "target": "vuestro",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "pronombre"
      },
      {
        "sentence": "El azul es vuestro equipo.",
        "target": "vuestro",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "determinante"
      },
      {
        "sentence": "El nuestro es el amarillo.",
        "target": "nuestro",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "pronombre"
      },
      {
        "sentence": "¿Dónde están vuestras cosas?",
        "target": "vuestras",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "determinante"
      },
      {
        "sentence": "Había algunas huellas suyas.",
        "target": "suyas",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "pronombre"
      },
      {
        "sentence": "¿Has perdido tu balón?",
        "target": "tu",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "determinante"
      },
      {
        "sentence": "Jugaremos con el nuestro.",
        "target": "nuestro",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "pronombre"
      },
      {
        "sentence": "Yo preferiría jugar con el mío.",
        "target": "mío",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "pronombre"
      },
      {
        "sentence": "¡Han robado nuestro dinero!",
        "target": "nuestro",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "determinante"
      },
      {
        "sentence": "¿Son tuyos esos pantalones?",
        "target": "tuyos",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "pronombre"
      }
    ],
    "cefr": "A2"
  },
  "det-pron-identify-2": {
    "title": "Determiner or pronoun? 2",
    "kicker": "Determinantes y pronombres",
    "instruction": "For each highlighted possessive, decide whether it is a determinante or a pronombre.",
    "type": "identify-grid",
    "items": [
      {
        "sentence": "Esos son mis juguetes.",
        "target": "mis",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "determinante"
      },
      {
        "sentence": "No son tuyos.",
        "target": "tuyos",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "pronombre"
      },
      {
        "sentence": "Se fue con sus amigos",
        "target": "sus",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "determinante"
      },
      {
        "sentence": "Ese coche no es vuestro.",
        "target": "vuestro",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "pronombre"
      },
      {
        "sentence": "El vuestro es aquel.",
        "target": "vuestro",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "pronombre"
      },
      {
        "sentence": "Danos nuestras muñecas.",
        "target": "nuestras",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "determinante"
      },
      {
        "sentence": "¿Y dónde están las mías?",
        "target": "mías",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "pronombre"
      },
      {
        "sentence": "Las tuyas están allí.",
        "target": "tuyas",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "pronombre"
      },
      {
        "sentence": "Hemos perdido nuestro tren.",
        "target": "nuestro",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "determinante"
      },
      {
        "sentence": "Volveremos a nuestra casa.",
        "target": "nuestra",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "determinante"
      },
      {
        "sentence": "¿Es aquel vuestro padre?",
        "target": "vuestro",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "determinante"
      },
      {
        "sentence": "No. El nuestro tiene bigote.",
        "target": "nuestro",
        "options": [
          "determinante",
          "pronombre"
        ],
        "answer": "pronombre"
      }
    ],
    "cefr": "A2"
  },
  "det-pron-write-1": {
    "title": "Determiners & pronouns: write",
    "kicker": "Determinantes y pronombres",
    "instruction": "Write the correct possessive form in each sentence.",
    "type": "gap-grid",
    "items": [
      [
        "01- Yo tengo un gato. ___ gato es muy cariñoso.",
        "Mi"
      ],
      [
        "02- Yo estoy en la piscina. La piscina es ___.",
        "mía"
      ],
      [
        "03- Tú vives en esa casa. Esa casa es ___.",
        "tuya"
      ],
      [
        "04- Nosotras tenemos un balón. El balón es ___.",
        "nuestro"
      ],
      [
        "05- Vosotros vais en tren. ___ tren es aquel.",
        "Vuestro"
      ],
      [
        "06- Las cigüeñas tienen un nido. ___ nido es muy grande.",
        "Su"
      ],
      [
        "07- Juan tiene dos hermanas. ___ hermanas son gemelas.",
        "Sus"
      ],
      [
        "08- Yo compré los caramelos. Los caramelos son ___.",
        "míos"
      ],
      [
        "09- Carmen lleva el pelo largo. ___ pelo es rubio.",
        "Su"
      ],
      [
        "10- Tenemos dos tías. ___ tías son jóvenes.",
        "Nuestras"
      ],
      [
        "11- Mi padre hace esculturas. Estas esculturas son ___.",
        "suyas"
      ],
      [
        "12- Tú perdiste los lápices. Los lápices eran ___.",
        "tuyos"
      ]
    ],
    "cefr": "A2"
  },
  "possessive-write-context": {
    "title": "Write the possessive pronoun",
    "kicker": "Pronombres posesivos",
    "instruction": "Read who owns the item, then write the possessive pronoun in the follow-up sentence.",
    "type": "gap-grid",
    "items": [
      [
        "Tú conduces un coche azul. El coche es ___.",
        "tuyo"
      ],
      [
        "Luisa vive en un piso. El piso es ___.",
        "suyo"
      ],
      [
        "Ana y yo hicimos una tarta. La tarta es ___.",
        "nuestra"
      ],
      [
        "Vosotros tenéis una casa. La casa es ___.",
        "vuestra"
      ],
      [
        "Juan y Rosa tienen un perro. El perro es ___.",
        "suyo"
      ],
      [
        "Tú cogiste las setas. Las setas son ___.",
        "tuyas"
      ],
      [
        "El gato afiló las garras. Las garras son ___.",
        "suyas"
      ],
      [
        "Yo llevé los pasteles. Los pasteles son ___.",
        "míos"
      ],
      [
        "Ellos encargaron una pizza. La pizza es ___.",
        "suya"
      ],
      [
        "La gallina puso dos huevos. Los huevos son ___.",
        "suyos"
      ]
    ],
    "cefr": "A2"
  },
  "find-possessives-1": {
    "title": "Find all possessives 1",
    "kicker": "Determinantes y pronombres",
    "instruction": "Click every possessive determiner and possessive pronoun in each text.",
    "type": "find-words",
    "groups": [
      {
        "text": "Este verano pasamos nuestras vacaciones en una playa de Galicia. Nuestros abuelos vinieron con nosotros y también vino mi tía con sus hijos.",
        "answerIndexes": [
          3,
          10,
          18,
          21
        ]
      },
      {
        "text": "Alicia es la más joven de mis primas y pasa algunos fines de semana en nuestra casa pues la suya está cerca.",
        "answerIndexes": [
          6,
          15,
          19
        ]
      },
      {
        "text": "Sus padres trabajan los sábados y los míos solo trabajan de lunes a viernes. Ella juega con mis juguetes pues los suyos se los dejó a su prima en la ciudad.",
        "answerIndexes": [
          0,
          7,
          17,
          21,
          26
        ]
      },
      {
        "text": "-¿No habéis traído vuestras bicicletas? - le pregunté",
        "answerIndexes": [
          3
        ]
      },
      {
        "text": "- No. ¿Te importa que use tu bicicleta?.",
        "answerIndexes": [
          6
        ]
      },
      {
        "text": "- Úsala como si fuera tuya. - le digo.",
        "answerIndexes": [
          5
        ]
      }
    ],
    "cefr": "A2"
  },
  "find-possessives-2": {
    "title": "Find all possessives 2",
    "kicker": "Determinantes y pronombres",
    "instruction": "Click every possessive determiner and possessive pronoun in each text.",
    "type": "find-words",
    "groups": [
      {
        "text": "En nuestra casa cada uno tenía sus cosas. El gato era mío y la pelota de mi hermana.",
        "answerIndexes": [
          1,
          6,
          11,
          16
        ]
      },
      {
        "text": "Había dos bicicletas: una mía y otra suya. La mía era mejor que las de mis primos. Las suyas ya estaban algo viejas.",
        "answerIndexes": [
          4,
          7,
          9,
          15,
          18
        ]
      },
      {
        "text": "Nuestro padre tenía un coche y nuestra madre un caballo. Decía que era solo suyo porque solo ella le daba de comer. Por lo tanto era su caballo.",
        "answerIndexes": [
          0,
          6,
          14,
          26
        ]
      },
      {
        "text": "A veces venía por nuestro jardín un perro que no era nuestro aunque yo decía que era mío. Mis padres se reían pero nadie sabía quienes eran sus dueños.",
        "answerIndexes": [
          4,
          11,
          17,
          18,
          27
        ]
      },
      {
        "text": "- Si fuese tuyo - decía mi padre - tendrías que cuidarlo y darle de tu comida.",
        "answerIndexes": [
          3,
          6,
          15
        ]
      }
    ],
    "cefr": "B1"
  },
  "possessive-text-cloze": {
    "title": "Possessive pronouns in a text",
    "kicker": "Pronombres posesivos",
    "instruction": "Complete the text with the correct possessive pronouns.",
    "type": "text-cloze",
    "template": "En nuestra casa cada uno tenía sus cosas. El gato era {{0}} y la pelota de mi hermana. Había dos bicicletas: una {{1}} y otra {{2}}. La {{3}} era mejor que las de mis primos. Las {{4}} ya estaban viejas. Nuestro padre tenía un coche y nuestra madre un caballo. Afirmaba que era solo {{5}} y no {{6}} porque solo ella le daba de comer. – Por lo tanto es mi caballo y no {{7}} – decía. A veces venía por nuestro jardín un perro que no era {{8}} aunque yo decía que era {{9}}. Mis padres se reían pero nadie sabía quienes eran sus dueños. – Si fuese {{10}} – decía mi padre- tendrías que cuidarlo y darle de tu comida y no de la {{11}}.",
    "answers": [
      "mío",
      "mía",
      "suya",
      "mía",
      "suyas",
      "suyo",
      "nuestro",
      "vuestro",
      "nuestro",
      "mío",
      "tuyo",
      "nuestra"
    ],
    "cefr": "B1"
  },
  "find-possessive-pronouns": {
    "title": "Find the possessive pronouns",
    "kicker": "Pronombres posesivos",
    "instruction": "Click the possessive pronoun in each sentence.",
    "type": "find-words",
    "groups": [
      {
        "text": "Esta silla es mía.",
        "answerIndexes": [
          3
        ]
      },
      {
        "text": "La tuya está en la cocina.",
        "answerIndexes": [
          1
        ]
      },
      {
        "text": "Ese paraguas no es nuestro.",
        "answerIndexes": [
          4
        ]
      },
      {
        "text": "Creo que el suyo es ese.",
        "answerIndexes": [
          3
        ]
      },
      {
        "text": "¿Es vuestra esa chaqueta?",
        "answerIndexes": [
          1
        ]
      },
      {
        "text": "¿Son míos esos papeles?",
        "answerIndexes": [
          1
        ]
      },
      {
        "text": "No. Los tuyos están allí.",
        "answerIndexes": [
          2
        ]
      },
      {
        "text": "No tengo coche. Llevo el vuestro.",
        "answerIndexes": [
          5
        ]
      },
      {
        "text": "Ana y Rosa son hijas suyas.",
        "answerIndexes": [
          5
        ]
      },
      {
        "text": "Las nuestras son más jóvenes.",
        "answerIndexes": [
          1
        ]
      }
    ],
    "cefr": "A2"
  },
  "choose-possessive-form": {
    "title": "Choose the correct possessive",
    "kicker": "Pronombres posesivos",
    "instruction": "Choose the correct possessive pronoun for each owner and noun.",
    "type": "select-grid",
    "items": [
      {
        "label": "yo",
        "sentence": "Las naranjas son ___",
        "options": [
          "mías",
          "mío",
          "nuestra",
          "suya",
          "suyas",
          "suyos",
          "tuyas",
          "tuyo",
          "vuestro"
        ],
        "answer": "mías"
      },
      {
        "label": "yo",
        "sentence": "El abrigo es ___",
        "options": [
          "mías",
          "mío",
          "nuestra",
          "suya",
          "suyas",
          "suyos",
          "tuyas",
          "tuyo",
          "vuestro"
        ],
        "answer": "mío"
      },
      {
        "label": "tú",
        "sentence": "El gato es ___",
        "options": [
          "mías",
          "mío",
          "nuestra",
          "suya",
          "suyas",
          "suyos",
          "tuyas",
          "tuyo",
          "vuestro"
        ],
        "answer": "tuyo"
      },
      {
        "label": "tú",
        "sentence": "Las gafas son ___",
        "options": [
          "mías",
          "mío",
          "nuestra",
          "suya",
          "suyas",
          "suyos",
          "tuyas",
          "tuyo",
          "vuestro"
        ],
        "answer": "tuyas"
      },
      {
        "label": "él",
        "sentence": "Los relojes son ___",
        "options": [
          "mías",
          "mío",
          "nuestra",
          "suya",
          "suyas",
          "suyos",
          "tuyas",
          "tuyo",
          "vuestro"
        ],
        "answer": "suyos"
      },
      {
        "label": "ella",
        "sentence": "La silla es ___",
        "options": [
          "mías",
          "mío",
          "nuestra",
          "suya",
          "suyas",
          "suyos",
          "tuyas",
          "tuyo",
          "vuestro"
        ],
        "answer": "suya"
      },
      {
        "label": "nosotros",
        "sentence": "La mesa es ___",
        "options": [
          "mías",
          "mío",
          "nuestra",
          "suya",
          "suyas",
          "suyos",
          "tuyas",
          "tuyo",
          "vuestro"
        ],
        "answer": "nuestra"
      },
      {
        "label": "vosotros",
        "sentence": "El niño es ___",
        "options": [
          "mías",
          "mío",
          "nuestra",
          "suya",
          "suyas",
          "suyos",
          "tuyas",
          "tuyo",
          "vuestro"
        ],
        "answer": "vuestro"
      },
      {
        "label": "ellos",
        "sentence": "La gorra es ___",
        "options": [
          "mías",
          "mío",
          "nuestra",
          "suya",
          "suyas",
          "suyos",
          "tuyas",
          "tuyo",
          "vuestro"
        ],
        "answer": "suya"
      },
      {
        "label": "ellas",
        "sentence": "Las cartas son ___",
        "options": [
          "mías",
          "mío",
          "nuestra",
          "suya",
          "suyas",
          "suyos",
          "tuyas",
          "tuyo",
          "vuestro"
        ],
        "answer": "suyas"
      }
    ],
    "cefr": "A2"
  },
  "whose-is-it": {
    "title": "Whose is it?",
    "kicker": "Pronombres posesivos",
    "instruction": "Choose the correct form for each owner and noun.",
    "type": "matrix-select",
    "sections": [
      {
        "headers": [
          "yo",
          "tú",
          "él/ella"
        ],
        "rows": [
          {
            "noun": "coche",
            "cells": [
              {
                "answer": "mío",
                "options": [
                  "mío",
                  "mía",
                  "míos",
                  "mías"
                ]
              },
              {
                "answer": "tuyo",
                "options": [
                  "tuyo",
                  "tuya",
                  "tuyos",
                  "tuyas"
                ]
              },
              {
                "answer": "suyo",
                "options": [
                  "suyo",
                  "suya",
                  "suyos",
                  "suyas"
                ]
              }
            ]
          },
          {
            "noun": "casa",
            "cells": [
              {
                "answer": "mía",
                "options": [
                  "mía",
                  "mío",
                  "mías",
                  "míos"
                ]
              },
              {
                "answer": "tuya",
                "options": [
                  "tuya",
                  "tuyo",
                  "tuyas",
                  "tuyos"
                ]
              },
              {
                "answer": "suya",
                "options": [
                  "suya",
                  "suyo",
                  "suyas",
                  "suyos"
                ]
              }
            ]
          },
          {
            "noun": "libros",
            "cells": [
              {
                "answer": "míos",
                "options": [
                  "míos",
                  "mío",
                  "mías",
                  "mía"
                ]
              },
              {
                "answer": "tuyos",
                "options": [
                  "tuyos",
                  "tuyo",
                  "tuya",
                  "tuyas"
                ]
              },
              {
                "answer": "suyos",
                "options": [
                  "suyos",
                  "suyo",
                  "suya",
                  "suyas"
                ]
              }
            ]
          },
          {
            "noun": "gafas",
            "cells": [
              {
                "answer": "mías",
                "options": [
                  "mías",
                  "mía",
                  "mío",
                  "míos"
                ]
              },
              {
                "answer": "tuyas",
                "options": [
                  "tuyas",
                  "tuya",
                  "tuyo",
                  "tuyos"
                ]
              },
              {
                "answer": "suyas",
                "options": [
                  "suyas",
                  "suyo",
                  "suya",
                  "suyos"
                ]
              }
            ]
          }
        ]
      },
      {
        "headers": [
          "nosotros/as",
          "vosotros/as",
          "ellos/ellas"
        ],
        "rows": [
          {
            "noun": "dinero",
            "cells": [
              {
                "answer": "nuestro",
                "options": [
                  "nuestro",
                  "nuestra",
                  "nuestros",
                  "nuestras"
                ]
              },
              {
                "answer": "vuestro",
                "options": [
                  "vuestro",
                  "vuestra",
                  "vuestros",
                  "vuestras"
                ]
              },
              {
                "answer": "suyo",
                "options": [
                  "suyo",
                  "suya",
                  "suyos",
                  "suyas"
                ]
              }
            ]
          },
          {
            "noun": "bolsa",
            "cells": [
              {
                "answer": "nuestra",
                "options": [
                  "nuestra",
                  "nuestro",
                  "nuestras",
                  "nuestros"
                ]
              },
              {
                "answer": "vuestra",
                "options": [
                  "vuestra",
                  "vuestro",
                  "vuestras",
                  "vuestros"
                ]
              },
              {
                "answer": "suya",
                "options": [
                  "suya",
                  "suyas",
                  "suyos",
                  "suyo"
                ]
              }
            ]
          },
          {
            "noun": "abrigos",
            "cells": [
              {
                "answer": "nuestros",
                "options": [
                  "nuestros",
                  "nuestra",
                  "nuestras",
                  "nuestro"
                ]
              },
              {
                "answer": "vuestros",
                "options": [
                  "vuestros",
                  "vuestro",
                  "vuestra",
                  "vuestras"
                ]
              },
              {
                "answer": "suyos",
                "options": [
                  "suyos",
                  "suya",
                  "suyas",
                  "suyo"
                ]
              }
            ]
          },
          {
            "noun": "gorras",
            "cells": [
              {
                "answer": "nuestras",
                "options": [
                  "nuestras",
                  "nuestro",
                  "nuestra",
                  "nuestros"
                ]
              },
              {
                "answer": "vuestras",
                "options": [
                  "vuestras",
                  "vuestra",
                  "vuestro",
                  "vuestros"
                ]
              },
              {
                "answer": "suyas",
                "options": [
                  "suyas",
                  "suya",
                  "suyos",
                  "suyo"
                ]
              }
            ]
          }
        ]
      }
    ],
    "cefr": "A2"
  },
  "possessive-choice-2": {
    "title": "Possessive pronouns: choose 2",
    "kicker": "Pronombres posesivos",
    "instruction": "Choose the correct possessive pronoun for each owner clue.",
    "type": "select-grid",
    "items": [
      {
        "sentence": "(yo) Las gafas son ___",
        "options": [
          "mías",
          "mío",
          "míos",
          "mía"
        ],
        "answer": "mías"
      },
      {
        "sentence": "(Juan) Las fresas son ___",
        "options": [
          "suyas",
          "suyo",
          "suya",
          "suyos"
        ],
        "answer": "suyas"
      },
      {
        "sentence": "(tú) Los libros son ___",
        "options": [
          "tuyos",
          "tuya",
          "tuyo",
          "tuyas"
        ],
        "answer": "tuyos"
      },
      {
        "sentence": "(nosotros) Las uvas son ___",
        "options": [
          "nuestras",
          "nuestro",
          "nuestra",
          "nuestros"
        ],
        "answer": "nuestras"
      },
      {
        "sentence": "(yo) El perro es ___",
        "options": [
          "mío",
          "mía",
          "míos",
          "mías"
        ],
        "answer": "mío"
      },
      {
        "sentence": "(Carmen) Los lápices son ___",
        "options": [
          "suyos",
          "suya",
          "suyas",
          "suyo"
        ],
        "answer": "suyos"
      },
      {
        "sentence": "(vosotras) El coche es ___",
        "options": [
          "vuestro",
          "vuestra",
          "vuestros",
          "vuestras"
        ],
        "answer": "vuestro"
      },
      {
        "sentence": "(Ana y Leo) La gata es ___",
        "options": [
          "suya",
          "suyas",
          "suyos",
          "suyo"
        ],
        "answer": "suya"
      },
      {
        "sentence": "(Sara y yo) El balón es ___",
        "options": [
          "nuestro",
          "nuestra",
          "nuestros",
          "nuestras"
        ],
        "answer": "nuestro"
      },
      {
        "sentence": "(José y tú) La bicicleta es ___",
        "options": [
          "vuestra",
          "vuestros",
          "vuestras",
          "vuestro"
        ],
        "answer": "vuestra"
      }
    ],
    "cefr": "A2"
  },
  "possessive-test": {
    "title": "Possessive pronouns: test",
    "kicker": "Pronombres posesivos",
    "instruction": "Choose the correct answer. You will see your score as you go.",
    "type": "quiz",
    "items": [
      [
        "Esta casa es ___.",
        [
          "mío",
          "mía",
          "míos",
          "mías"
        ],
        "mía"
      ],
      [
        "Los libros son ___.",
        [
          "tuyo",
          "tuya",
          "tuyos",
          "tuyas"
        ],
        "tuyos"
      ],
      [
        "El coche es ___.",
        [
          "suyo",
          "suya",
          "suyos",
          "suyas"
        ],
        "suyo"
      ],
      [
        "Las flores son ___.",
        [
          "nuestro",
          "nuestra",
          "nuestros",
          "nuestras"
        ],
        "nuestras"
      ],
      [
        "Los lápices son ___.",
        [
          "vuestro",
          "vuestra",
          "vuestros",
          "vuestras"
        ],
        "vuestros"
      ],
      [
        "¿Son ___ las guitarras?",
        [
          "suyo",
          "suya",
          "suyos",
          "suyas"
        ],
        "suyas"
      ],
      [
        "Esa camisa no es la ___.",
        [
          "tuyo",
          "tuya",
          "tuyos",
          "tuyas"
        ],
        "tuya"
      ],
      [
        "Este jardín es ___.",
        [
          "nuestro",
          "nuestra",
          "nuestros",
          "nuestras"
        ],
        "nuestro"
      ],
      [
        "¿Son ___ estos zapatos?",
        [
          "mío",
          "mía",
          "míos",
          "mías"
        ],
        "míos"
      ],
      [
        "La cartera es ___.",
        [
          "suyo",
          "suya",
          "suyos",
          "suyas"
        ],
        "suya"
      ],
      [
        "Aquella gallina es ___.",
        [
          "vuestro",
          "vuestra",
          "vuestros",
          "vuestras"
        ],
        "vuestra"
      ],
      [
        "¿Es ___ ese perro?",
        [
          "tuyo",
          "tuya",
          "tuyos",
          "tuyas"
        ],
        "tuyo"
      ],
      [
        "Este gorro rojo es ___.",
        [
          "mío",
          "mía",
          "míos",
          "mías"
        ],
        "mío"
      ],
      [
        "¿Serán ___ esos patos?",
        [
          "suyo",
          "suya",
          "suyos",
          "suyas"
        ],
        "suyos"
      ],
      [
        "¿Son ___ estas gafas?",
        [
          "tuyo",
          "tuya",
          "tuyos",
          "tuyas"
        ],
        "tuyas"
      ],
      [
        "Las vacas son ___.",
        [
          "mío",
          "mía",
          "míos",
          "mías"
        ],
        "mías"
      ]
    ],
    "cefr": "A2"
  },
  "present-regular-table": {
    "title": "Regular present: conjugation table",
    "kicker": "Presente",
    "instruction": "Choose the correct present-tense form for each person.",
    "type": "matrix-select",
    "sections": [
      {
        "headers": [
          "yo",
          "tú",
          "él / ella / usted",
          "nosotros/as",
          "vosotros/as",
          "ellos / ellas / ustedes"
        ],
        "rows": [
          {
            "noun": "hablar",
            "cells": [
              {
                "answer": "hablo",
                "options": [
                  "hablo",
                  "hablas",
                  "habla",
                  "hablamos",
                  "habláis",
                  "hablan"
                ]
              },
              {
                "answer": "hablas",
                "options": [
                  "hablo",
                  "hablas",
                  "habla",
                  "hablamos",
                  "habláis",
                  "hablan"
                ]
              },
              {
                "answer": "habla",
                "options": [
                  "hablo",
                  "hablas",
                  "habla",
                  "hablamos",
                  "habláis",
                  "hablan"
                ]
              },
              {
                "answer": "hablamos",
                "options": [
                  "hablo",
                  "hablas",
                  "habla",
                  "hablamos",
                  "habláis",
                  "hablan"
                ]
              },
              {
                "answer": "habláis",
                "options": [
                  "hablo",
                  "hablas",
                  "habla",
                  "hablamos",
                  "habláis",
                  "hablan"
                ]
              },
              {
                "answer": "hablan",
                "options": [
                  "hablo",
                  "hablas",
                  "habla",
                  "hablamos",
                  "habláis",
                  "hablan"
                ]
              }
            ]
          },
          {
            "noun": "comer",
            "cells": [
              {
                "answer": "como",
                "options": [
                  "como",
                  "comes",
                  "come",
                  "comemos",
                  "coméis",
                  "comen"
                ]
              },
              {
                "answer": "comes",
                "options": [
                  "como",
                  "comes",
                  "come",
                  "comemos",
                  "coméis",
                  "comen"
                ]
              },
              {
                "answer": "come",
                "options": [
                  "como",
                  "comes",
                  "come",
                  "comemos",
                  "coméis",
                  "comen"
                ]
              },
              {
                "answer": "comemos",
                "options": [
                  "como",
                  "comes",
                  "come",
                  "comemos",
                  "coméis",
                  "comen"
                ]
              },
              {
                "answer": "coméis",
                "options": [
                  "como",
                  "comes",
                  "come",
                  "comemos",
                  "coméis",
                  "comen"
                ]
              },
              {
                "answer": "comen",
                "options": [
                  "como",
                  "comes",
                  "come",
                  "comemos",
                  "coméis",
                  "comen"
                ]
              }
            ]
          },
          {
            "noun": "vivir",
            "cells": [
              {
                "answer": "vivo",
                "options": [
                  "vivo",
                  "vives",
                  "vive",
                  "vivimos",
                  "vivís",
                  "viven"
                ]
              },
              {
                "answer": "vives",
                "options": [
                  "vivo",
                  "vives",
                  "vive",
                  "vivimos",
                  "vivís",
                  "viven"
                ]
              },
              {
                "answer": "vive",
                "options": [
                  "vivo",
                  "vives",
                  "vive",
                  "vivimos",
                  "vivís",
                  "viven"
                ]
              },
              {
                "answer": "vivimos",
                "options": [
                  "vivo",
                  "vives",
                  "vive",
                  "vivimos",
                  "vivís",
                  "viven"
                ]
              },
              {
                "answer": "vivís",
                "options": [
                  "vivo",
                  "vives",
                  "vive",
                  "vivimos",
                  "vivís",
                  "viven"
                ]
              },
              {
                "answer": "viven",
                "options": [
                  "vivo",
                  "vives",
                  "vive",
                  "vivimos",
                  "vivís",
                  "viven"
                ]
              }
            ]
          }
        ]
      }
    ],
    "cefr": "A1"
  },
  "present-in-context": {
    "title": "Present tense in context",
    "kicker": "Presente",
    "instruction": "Write the correct present-tense form of the verb suggested by the sentence.",
    "type": "gap-grid",
    "items": [
      [
        "Cada mañana yo ___ café antes de trabajar. (tomar)",
        "tomo"
      ],
      [
        "Mis amigos ___ en Madrid. (vivir)",
        "viven"
      ],
      [
        "Tú ___ la cena los martes. (hacer)",
        "haces"
      ],
      [
        "Nosotros ___ al trabajo en autobús. (ir)",
        "vamos"
      ],
      [
        "Mi hermana ___ dos perros. (tener)",
        "tiene"
      ],
      [
        "¿Vosotros ___ español en casa? (hablar)",
        "habláis"
      ],
      [
        "Los sábados ellos ___ al fútbol. (jugar)",
        "juegan"
      ],
      [
        "Yo no ___ salir esta noche. (poder)",
        "puedo"
      ],
      [
        "¿Qué ___ tú para cenar? (querer)",
        "quieres"
      ],
      [
        "Nosotros ___ las noticias por la mañana. (leer)",
        "leemos"
      ]
    ],
    "cefr": "A2"
  },
  "present-irregulars": {
    "title": "Common present irregulars",
    "kicker": "Presente",
    "instruction": "Choose the correct form for the subject shown in each sentence.",
    "type": "select-grid",
    "items": [
      {
        "sentence": "Yo ___ mucha paciencia. (tener)",
        "options": [
          "tengo",
          "tienes",
          "tiene",
          "tenemos"
        ],
        "answer": "tengo"
      },
      {
        "sentence": "Vosotros ___ al gimnasio los viernes. (ir)",
        "options": [
          "vamos",
          "vais",
          "van",
          "voy"
        ],
        "answer": "vais"
      },
      {
        "sentence": "Mi padre ___ la compra los sábados. (hacer)",
        "options": [
          "hago",
          "haces",
          "hace",
          "hacen"
        ],
        "answer": "hace"
      },
      {
        "sentence": "¿Tú ___ venir mañana? (poder)",
        "options": [
          "puedo",
          "puedes",
          "puede",
          "podéis"
        ],
        "answer": "puedes"
      },
      {
        "sentence": "Nosotros ___ aprender más español. (querer)",
        "options": [
          "quiero",
          "quieren",
          "queremos",
          "queréis"
        ],
        "answer": "queremos"
      },
      {
        "sentence": "Ana y Luis ___ en tren. (venir)",
        "options": [
          "vengo",
          "vienes",
          "venís",
          "vienen"
        ],
        "answer": "vienen"
      },
      {
        "sentence": "Yo siempre ___ la verdad. (decir)",
        "options": [
          "digo",
          "dices",
          "dice",
          "decimos"
        ],
        "answer": "digo"
      },
      {
        "sentence": "¿A qué hora ___ vosotros de clase? (salir)",
        "options": [
          "salimos",
          "salís",
          "salen",
          "sales"
        ],
        "answer": "salís"
      },
      {
        "sentence": "Ella ___ una película los domingos. (ver)",
        "options": [
          "veo",
          "ves",
          "ve",
          "ven"
        ],
        "answer": "ve"
      },
      {
        "sentence": "Ellos ___ el autobús a las ocho. (coger)",
        "options": [
          "cojo",
          "coges",
          "coge",
          "cogen"
        ],
        "answer": "cogen"
      }
    ],
    "cefr": "A2"
  },
  "present-test": {
    "title": "Present tense: test",
    "kicker": "Presente",
    "instruction": "Choose the best answer. Use number keys 1–4 if you prefer.",
    "type": "quiz",
    "items": [
      [
        "Yo ___ en Newbury.",
        [
          "vivo",
          "vives",
          "vive",
          "vivimos"
        ],
        "vivo"
      ],
      [
        "Nosotros ___ español los martes.",
        [
          "estudio",
          "estudiáis",
          "estudiamos",
          "estudian"
        ],
        "estudiamos"
      ],
      [
        "¿Vosotros ___ café?",
        [
          "bebéis",
          "bebemos",
          "beben",
          "bebes"
        ],
        "bebéis"
      ],
      [
        "Mi hermana ___ mucho deporte.",
        [
          "hago",
          "haces",
          "hace",
          "hacemos"
        ],
        "hace"
      ],
      [
        "Tú ___ una bicicleta nueva.",
        [
          "tengo",
          "tienes",
          "tiene",
          "tenéis"
        ],
        "tienes"
      ],
      [
        "Ellos ___ al centro en autobús.",
        [
          "voy",
          "vas",
          "van",
          "vamos"
        ],
        "van"
      ],
      [
        "Yo no ___ salir hoy.",
        [
          "puedo",
          "puedes",
          "puede",
          "podemos"
        ],
        "puedo"
      ],
      [
        "¿Qué ___ ustedes?",
        [
          "quiere",
          "queréis",
          "quieren",
          "queremos"
        ],
        "quieren"
      ],
      [
        "María ___ de Colombia.",
        [
          "vengo",
          "vienes",
          "viene",
          "venimos"
        ],
        "viene"
      ],
      [
        "Nosotros ___ la verdad.",
        [
          "digo",
          "dice",
          "decimos",
          "dicen"
        ],
        "decimos"
      ],
      [
        "Tú ___ muchos libros.",
        [
          "leo",
          "lees",
          "lee",
          "leéis"
        ],
        "lees"
      ],
      [
        "Los estudiantes ___ a las nueve.",
        [
          "empieza",
          "empiezas",
          "empiezan",
          "empezamos"
        ],
        "empiezan"
      ]
    ],
    "cefr": "A2"
  },
  "imperfect-regular-table": {
    "title": "Imperfect: regular endings",
    "kicker": "Imperfecto",
    "instruction": "Choose the correct imperfect form for each person.",
    "type": "matrix-select",
    "sections": [
      {
        "headers": [
          "yo",
          "tú",
          "él / ella / usted",
          "nosotros/as",
          "vosotros/as",
          "ellos / ellas / ustedes"
        ],
        "rows": [
          {
            "noun": "hablar",
            "cells": [
              {
                "answer": "hablaba",
                "options": [
                  "hablaba",
                  "hablabas",
                  "hablaba",
                  "hablábamos",
                  "hablabais",
                  "hablaban"
                ]
              },
              {
                "answer": "hablabas",
                "options": [
                  "hablaba",
                  "hablabas",
                  "hablaba",
                  "hablábamos",
                  "hablabais",
                  "hablaban"
                ]
              },
              {
                "answer": "hablaba",
                "options": [
                  "hablaba",
                  "hablabas",
                  "hablaba",
                  "hablábamos",
                  "hablabais",
                  "hablaban"
                ]
              },
              {
                "answer": "hablábamos",
                "options": [
                  "hablaba",
                  "hablabas",
                  "hablaba",
                  "hablábamos",
                  "hablabais",
                  "hablaban"
                ]
              },
              {
                "answer": "hablabais",
                "options": [
                  "hablaba",
                  "hablabas",
                  "hablaba",
                  "hablábamos",
                  "hablabais",
                  "hablaban"
                ]
              },
              {
                "answer": "hablaban",
                "options": [
                  "hablaba",
                  "hablabas",
                  "hablaba",
                  "hablábamos",
                  "hablabais",
                  "hablaban"
                ]
              }
            ]
          },
          {
            "noun": "comer",
            "cells": [
              {
                "answer": "comía",
                "options": [
                  "comía",
                  "comías",
                  "comía",
                  "comíamos",
                  "comíais",
                  "comían"
                ]
              },
              {
                "answer": "comías",
                "options": [
                  "comía",
                  "comías",
                  "comía",
                  "comíamos",
                  "comíais",
                  "comían"
                ]
              },
              {
                "answer": "comía",
                "options": [
                  "comía",
                  "comías",
                  "comía",
                  "comíamos",
                  "comíais",
                  "comían"
                ]
              },
              {
                "answer": "comíamos",
                "options": [
                  "comía",
                  "comías",
                  "comía",
                  "comíamos",
                  "comíais",
                  "comían"
                ]
              },
              {
                "answer": "comíais",
                "options": [
                  "comía",
                  "comías",
                  "comía",
                  "comíamos",
                  "comíais",
                  "comían"
                ]
              },
              {
                "answer": "comían",
                "options": [
                  "comía",
                  "comías",
                  "comía",
                  "comíamos",
                  "comíais",
                  "comían"
                ]
              }
            ]
          },
          {
            "noun": "vivir",
            "cells": [
              {
                "answer": "vivía",
                "options": [
                  "vivía",
                  "vivías",
                  "vivía",
                  "vivíamos",
                  "vivíais",
                  "vivían"
                ]
              },
              {
                "answer": "vivías",
                "options": [
                  "vivía",
                  "vivías",
                  "vivía",
                  "vivíamos",
                  "vivíais",
                  "vivían"
                ]
              },
              {
                "answer": "vivía",
                "options": [
                  "vivía",
                  "vivías",
                  "vivía",
                  "vivíamos",
                  "vivíais",
                  "vivían"
                ]
              },
              {
                "answer": "vivíamos",
                "options": [
                  "vivía",
                  "vivías",
                  "vivía",
                  "vivíamos",
                  "vivíais",
                  "vivían"
                ]
              },
              {
                "answer": "vivíais",
                "options": [
                  "vivía",
                  "vivías",
                  "vivía",
                  "vivíamos",
                  "vivíais",
                  "vivían"
                ]
              },
              {
                "answer": "vivían",
                "options": [
                  "vivía",
                  "vivías",
                  "vivía",
                  "vivíamos",
                  "vivíais",
                  "vivían"
                ]
              }
            ]
          }
        ]
      }
    ],
    "cefr": "A2"
  },
  "imperfect-in-context": {
    "title": "Imperfect in context",
    "kicker": "Imperfecto",
    "instruction": "Write the imperfect form that describes the past habit, background or ongoing situation.",
    "type": "gap-grid",
    "items": [
      [
        "Cuando era niño, yo ___ cerca del mar. (vivir)",
        "vivía"
      ],
      [
        "Todos los veranos nosotros ___ a Galicia. (ir)",
        "íbamos"
      ],
      [
        "Mi padre ___ en una oficina. (trabajar)",
        "trabajaba"
      ],
      [
        "Mientras llovía, ellos ___ la televisión. (ver)",
        "veían"
      ],
      [
        "La casa ___ un jardín enorme. (tener)",
        "tenía"
      ],
      [
        "___ las ocho cuando llegamos. (ser)",
        "Eran"
      ],
      [
        "De pequeños, vosotros ___ mucho en el parque. (jugar)",
        "jugabais"
      ],
      [
        "Los domingos siempre ___ juntos. (comer, nosotros)",
        "comíamos"
      ],
      [
        "En aquella época no ___ internet en casa. (haber)",
        "había"
      ],
      [
        "Tú siempre ___ música mientras estudiabas. (escuchar)",
        "escuchabas"
      ]
    ],
    "cefr": "B1"
  },
  "imperfect-choose": {
    "title": "Imperfect: choose the form",
    "kicker": "Imperfecto",
    "instruction": "Choose the form that correctly completes each past description or habit.",
    "type": "select-grid",
    "items": [
      {
        "sentence": "Antes yo ___ muy tímido. (ser)",
        "options": [
          "era",
          "fui",
          "soy",
          "éramos"
        ],
        "answer": "era"
      },
      {
        "sentence": "Cada verano nosotros ___ a la costa. (ir)",
        "options": [
          "fuimos",
          "íbamos",
          "vamos",
          "iban"
        ],
        "answer": "íbamos"
      },
      {
        "sentence": "De niño tú ___ dibujos animados cada tarde. (ver)",
        "options": [
          "veías",
          "viste",
          "ves",
          "veíamos"
        ],
        "answer": "veías"
      },
      {
        "sentence": "Mis abuelos ___ en un pueblo pequeño. (vivir)",
        "options": [
          "vivieron",
          "vivían",
          "viven",
          "vivíais"
        ],
        "answer": "vivían"
      },
      {
        "sentence": "Vosotros ___ al tenis los sábados. (jugar)",
        "options": [
          "jugabais",
          "jugasteis",
          "jugáis",
          "jugaban"
        ],
        "answer": "jugabais"
      },
      {
        "sentence": "La escuela ___ muy antigua. (ser)",
        "options": [
          "fue",
          "era",
          "es",
          "eran"
        ],
        "answer": "era"
      },
      {
        "sentence": "Yo siempre ___ el desayuno a las siete. (preparar)",
        "options": [
          "preparé",
          "preparaba",
          "preparo",
          "preparabas"
        ],
        "answer": "preparaba"
      },
      {
        "sentence": "Ellos no ___ coche en aquella época. (tener)",
        "options": [
          "tuvieron",
          "tenían",
          "tienen",
          "teníamos"
        ],
        "answer": "tenían"
      },
      {
        "sentence": "¿Qué ___ tú cuando empezó a llover? (hacer)",
        "options": [
          "hiciste",
          "hacías",
          "haces",
          "hacíamos"
        ],
        "answer": "hacías"
      },
      {
        "sentence": "Cuando éramos estudiantes, ___ poco dinero. (tener, nosotros)",
        "options": [
          "tuvimos",
          "teníamos",
          "tenemos",
          "teníais"
        ],
        "answer": "teníamos"
      }
    ],
    "cefr": "A2"
  },
  "imperfect-test": {
    "title": "Imperfect: test",
    "kicker": "Imperfecto",
    "instruction": "Choose the best imperfect form or use.",
    "type": "quiz",
    "items": [
      [
        "Cuando era pequeño, ___ en Madrid.",
        [
          "viví",
          "vivía",
          "vivo",
          "viviré"
        ],
        "vivía"
      ],
      [
        "Nosotros ___ al colegio andando todos los días.",
        [
          "fuimos",
          "íbamos",
          "vamos",
          "iríamos"
        ],
        "íbamos"
      ],
      [
        "¿Cuál es el imperfecto de “ser” para yo?",
        [
          "fui",
          "era",
          "soy",
          "sería"
        ],
        "era"
      ],
      [
        "Vosotros ___ mucho chocolate de niños.",
        [
          "comisteis",
          "comíais",
          "coméis",
          "comeréis"
        ],
        "comíais"
      ],
      [
        "Mi abuelo ___ una moto roja.",
        [
          "tuvo",
          "tenía",
          "tiene",
          "tendría"
        ],
        "tenía"
      ],
      [
        "Ellas ___ la tele mientras cenaban.",
        [
          "vieron",
          "veían",
          "ven",
          "verán"
        ],
        "veían"
      ],
      [
        "En la calle ___ mucha gente.",
        [
          "hubo",
          "había",
          "hay",
          "habrá"
        ],
        "había"
      ],
      [
        "Eran las diez y nosotros todavía ___.",
        [
          "trabajamos",
          "trabajábamos",
          "trabajaremos",
          "trabajamos ayer"
        ],
        "trabajábamos"
      ],
      [
        "Tú siempre ___ con tus primos en verano.",
        [
          "jugaste",
          "jugabas",
          "juegas",
          "jugarás"
        ],
        "jugabas"
      ],
      [
        "El imperfecto suele presentar…",
        [
          "un hecho puntual terminado",
          "hábitos y contexto pasado",
          "una orden",
          "un plan futuro"
        ],
        "hábitos y contexto pasado"
      ],
      [
        "Nosotros ___ jóvenes entonces.",
        [
          "fuimos",
          "éramos",
          "somos",
          "seremos"
        ],
        "éramos"
      ],
      [
        "¿Cuál es la forma correcta de “ir”, vosotros?",
        [
          "ibais",
          "íbais",
          "fuisteis",
          "vais"
        ],
        "ibais"
      ]
    ],
    "cefr": "B1"
  },
  "preterite-regular-table": {
    "title": "Pretérito: regular endings",
    "kicker": "Pretérito",
    "instruction": "Choose the correct completed-past form for each person.",
    "type": "matrix-select",
    "sections": [
      {
        "headers": [
          "yo",
          "tú",
          "él / ella / usted",
          "nosotros/as",
          "vosotros/as",
          "ellos / ellas / ustedes"
        ],
        "rows": [
          {
            "noun": "hablar",
            "cells": [
              {
                "answer": "hablé",
                "options": [
                  "hablé",
                  "hablaste",
                  "habló",
                  "hablamos",
                  "hablasteis",
                  "hablaron"
                ]
              },
              {
                "answer": "hablaste",
                "options": [
                  "hablé",
                  "hablaste",
                  "habló",
                  "hablamos",
                  "hablasteis",
                  "hablaron"
                ]
              },
              {
                "answer": "habló",
                "options": [
                  "hablé",
                  "hablaste",
                  "habló",
                  "hablamos",
                  "hablasteis",
                  "hablaron"
                ]
              },
              {
                "answer": "hablamos",
                "options": [
                  "hablé",
                  "hablaste",
                  "habló",
                  "hablamos",
                  "hablasteis",
                  "hablaron"
                ]
              },
              {
                "answer": "hablasteis",
                "options": [
                  "hablé",
                  "hablaste",
                  "habló",
                  "hablamos",
                  "hablasteis",
                  "hablaron"
                ]
              },
              {
                "answer": "hablaron",
                "options": [
                  "hablé",
                  "hablaste",
                  "habló",
                  "hablamos",
                  "hablasteis",
                  "hablaron"
                ]
              }
            ]
          },
          {
            "noun": "comer",
            "cells": [
              {
                "answer": "comí",
                "options": [
                  "comí",
                  "comiste",
                  "comió",
                  "comimos",
                  "comisteis",
                  "comieron"
                ]
              },
              {
                "answer": "comiste",
                "options": [
                  "comí",
                  "comiste",
                  "comió",
                  "comimos",
                  "comisteis",
                  "comieron"
                ]
              },
              {
                "answer": "comió",
                "options": [
                  "comí",
                  "comiste",
                  "comió",
                  "comimos",
                  "comisteis",
                  "comieron"
                ]
              },
              {
                "answer": "comimos",
                "options": [
                  "comí",
                  "comiste",
                  "comió",
                  "comimos",
                  "comisteis",
                  "comieron"
                ]
              },
              {
                "answer": "comisteis",
                "options": [
                  "comí",
                  "comiste",
                  "comió",
                  "comimos",
                  "comisteis",
                  "comieron"
                ]
              },
              {
                "answer": "comieron",
                "options": [
                  "comí",
                  "comiste",
                  "comió",
                  "comimos",
                  "comisteis",
                  "comieron"
                ]
              }
            ]
          },
          {
            "noun": "vivir",
            "cells": [
              {
                "answer": "viví",
                "options": [
                  "viví",
                  "viviste",
                  "vivió",
                  "vivimos",
                  "vivisteis",
                  "vivieron"
                ]
              },
              {
                "answer": "viviste",
                "options": [
                  "viví",
                  "viviste",
                  "vivió",
                  "vivimos",
                  "vivisteis",
                  "vivieron"
                ]
              },
              {
                "answer": "vivió",
                "options": [
                  "viví",
                  "viviste",
                  "vivió",
                  "vivimos",
                  "vivisteis",
                  "vivieron"
                ]
              },
              {
                "answer": "vivimos",
                "options": [
                  "viví",
                  "viviste",
                  "vivió",
                  "vivimos",
                  "vivisteis",
                  "vivieron"
                ]
              },
              {
                "answer": "vivisteis",
                "options": [
                  "viví",
                  "viviste",
                  "vivió",
                  "vivimos",
                  "vivisteis",
                  "vivieron"
                ]
              },
              {
                "answer": "vivieron",
                "options": [
                  "viví",
                  "viviste",
                  "vivió",
                  "vivimos",
                  "vivisteis",
                  "vivieron"
                ]
              }
            ]
          }
        ]
      }
    ],
    "cefr": "A2"
  },
  "preterite-irregulars": {
    "title": "Pretérito: common irregulars",
    "kicker": "Pretérito",
    "instruction": "Choose the correct completed-past form.",
    "type": "select-grid",
    "items": [
      {
        "sentence": "Ayer yo ___ mucho trabajo. (tener)",
        "options": [
          "tenía",
          "tuve",
          "tengo",
          "tendré"
        ],
        "answer": "tuve"
      },
      {
        "sentence": "Nosotros ___ en casa toda la tarde. (estar)",
        "options": [
          "estuvimos",
          "estábamos",
          "estamos",
          "estaremos"
        ],
        "answer": "estuvimos"
      },
      {
        "sentence": "¿Tú ___ terminar el proyecto? (poder)",
        "options": [
          "podías",
          "pudiste",
          "puedes",
          "podrás"
        ],
        "answer": "pudiste"
      },
      {
        "sentence": "Ella ___ las llaves sobre la mesa. (poner)",
        "options": [
          "ponía",
          "puso",
          "pone",
          "pondrá"
        ],
        "answer": "puso"
      },
      {
        "sentence": "Mis amigos ___ a verme el sábado. (venir)",
        "options": [
          "venían",
          "vinieron",
          "vienen",
          "vendrán"
        ],
        "answer": "vinieron"
      },
      {
        "sentence": "Yo no ___ comprarlo. (querer)",
        "options": [
          "quería",
          "quise",
          "quiero",
          "querré"
        ],
        "answer": "quise"
      },
      {
        "sentence": "Ayer nosotros ___ la verdad. (saber)",
        "options": [
          "sabíamos",
          "supimos",
          "sabemos",
          "sabremos"
        ],
        "answer": "supimos"
      },
      {
        "sentence": "Mi hermana ___ una tarta. (hacer)",
        "options": [
          "hacía",
          "hizo",
          "hace",
          "hará"
        ],
        "answer": "hizo"
      },
      {
        "sentence": "Ellos me ___ que llegarían tarde. (decir)",
        "options": [
          "decían",
          "dijeron",
          "dicen",
          "dirán"
        ],
        "answer": "dijeron"
      },
      {
        "sentence": "Vosotros ___ regalos de España. (traer)",
        "options": [
          "traíais",
          "trajisteis",
          "traéis",
          "traeréis"
        ],
        "answer": "trajisteis"
      },
      {
        "sentence": "El año pasado yo ___ a Sevilla. (ir)",
        "options": [
          "iba",
          "fui",
          "voy",
          "iré"
        ],
        "answer": "fui"
      },
      {
        "sentence": "¿Quién te ___ esa noticia? (dar)",
        "options": [
          "daba",
          "dio",
          "da",
          "dará"
        ],
        "answer": "dio"
      }
    ],
    "cefr": "B1"
  },
  "preterite-story": {
    "title": "Ayer: completed actions",
    "kicker": "Pretérito",
    "instruction": "Complete the story with the pretérito forms of the verbs in brackets.",
    "type": "text-cloze",
    "template": "Ayer {{0}} temprano (levantarse). Después {{1}} café y tostadas (desayunar). A las ocho {{2}} de casa (salir) y {{3}} al trabajo en autobús (ir). {{4}} a las nueve (llegar) y {{5}} una reunión larga (tener). Al mediodía {{6}} con mis compañeros (comer). Por la tarde {{7}} con una clienta (hablar), {{8}} a casa a las seis (volver) y por la noche {{9}} la cena (hacer).",
    "answers": [
      "me levanté",
      "desayuné",
      "salí",
      "fui",
      "llegué",
      "tuve",
      "comí",
      "hablé",
      "volví",
      "hice"
    ],
    "cefr": "B1"
  },
  "preterite-test": {
    "title": "Pretérito: test",
    "kicker": "Pretérito",
    "instruction": "Choose the best completed-past form.",
    "type": "quiz",
    "items": [
      [
        "Ayer yo ___ con Marta.",
        [
          "hablaba",
          "hablé",
          "hablo",
          "he hablado"
        ],
        "hablé"
      ],
      [
        "Nosotros ___ pizza anoche.",
        [
          "comimos",
          "comíamos",
          "comemos",
          "hemos comido"
        ],
        "comimos"
      ],
      [
        "¿Vosotros ___ la película?",
        [
          "visteis",
          "veíais",
          "veis",
          "habéis visto"
        ],
        "visteis"
      ],
      [
        "Ella ___ a Madrid el lunes.",
        [
          "iba",
          "fue",
          "va",
          "ha ido"
        ],
        "fue"
      ],
      [
        "Ayer por la mañana yo ___ tres llamadas.",
        [
          "tenía",
          "tuve",
          "tengo",
          "he tenido"
        ],
        "tuve"
      ],
      [
        "Mi padre ___ la cena.",
        [
          "hacía",
          "hizo",
          "hace",
          "ha hecho"
        ],
        "hizo"
      ],
      [
        "Ellos ___ muy tarde.",
        [
          "vinieron",
          "venían",
          "vienen",
          "han venido"
        ],
        "vinieron"
      ],
      [
        "Tú no ___ entrar.",
        [
          "podías",
          "pudiste",
          "puedes",
          "has podido"
        ],
        "pudiste"
      ],
      [
        "Nosotros ___ la verdad ayer.",
        [
          "sabíamos",
          "supimos",
          "sabemos",
          "hemos sabido"
        ],
        "supimos"
      ],
      [
        "¿Quién ___ las llaves aquí?",
        [
          "ponía",
          "puso",
          "pone",
          "ha puesto"
        ],
        "puso"
      ],
      [
        "Vosotros ___ “no”.",
        [
          "decíais",
          "dijisteis",
          "decís",
          "habéis dicho"
        ],
        "dijisteis"
      ],
      [
        "El pretérito suele presentar…",
        [
          "hábitos sin límite",
          "acciones completadas",
          "descripciones de fondo",
          "planes futuros"
        ],
        "acciones completadas"
      ]
    ],
    "cefr": "B1"
  },
  "perfect-auxiliary": {
    "title": "Pretérito perfecto: haber",
    "kicker": "Pretérito perfecto",
    "instruction": "Choose the correct form of haber for each subject.",
    "type": "family-select",
    "options": [
      "he",
      "has",
      "ha",
      "hemos",
      "habéis",
      "han"
    ],
    "items": [
      [
        "yo",
        "he"
      ],
      [
        "tú",
        "has"
      ],
      [
        "él / ella / usted",
        "ha"
      ],
      [
        "nosotros / nosotras",
        "hemos"
      ],
      [
        "vosotros / vosotras",
        "habéis"
      ],
      [
        "ellos / ellas / ustedes",
        "han"
      ]
    ],
    "cefr": "A2"
  },
  "perfect-participles": {
    "title": "Past participles",
    "kicker": "Pretérito perfecto",
    "instruction": "Write the past participle that completes each perfect-tense form.",
    "type": "gap-grid",
    "items": [
      [
        "He ___ con Ana. (hablar)",
        "hablado"
      ],
      [
        "Has ___ demasiado rápido. (comer)",
        "comido"
      ],
      [
        "Mi hermano ha ___ en Chile. (vivir)",
        "vivido"
      ],
      [
        "Hemos ___ los deberes. (hacer)",
        "hecho"
      ],
      [
        "¿Habéis ___ esta película? (ver)",
        "visto"
      ],
      [
        "Ellos han ___ tres correos. (escribir)",
        "escrito"
      ],
      [
        "He ___ tarde a casa. (volver)",
        "vuelto"
      ],
      [
        "¿Has ___ la mesa? (poner)",
        "puesto"
      ],
      [
        "La profesora ha ___ que sí. (decir)",
        "dicho"
      ],
      [
        "Hemos ___ la ventana. (abrir)",
        "abierto"
      ]
    ],
    "cefr": "A2"
  },
  "perfect-in-context": {
    "title": "Pretérito perfecto in context",
    "kicker": "Pretérito perfecto",
    "instruction": "Choose the form that best completes each recent action or life experience.",
    "type": "select-grid",
    "items": [
      {
        "sentence": "Esta semana yo ___ tres veces al gimnasio. (ir)",
        "options": [
          "fui",
          "iba",
          "he ido",
          "voy"
        ],
        "answer": "he ido"
      },
      {
        "sentence": "¿Alguna vez ___ paella valenciana? (probar, tú)",
        "options": [
          "probaste",
          "has probado",
          "probabas",
          "pruebas"
        ],
        "answer": "has probado"
      },
      {
        "sentence": "Hoy nosotros ___ mucho trabajo. (tener)",
        "options": [
          "tuvimos",
          "teníamos",
          "hemos tenido",
          "tendremos"
        ],
        "answer": "hemos tenido"
      },
      {
        "sentence": "Mis padres nunca ___ a México. (viajar)",
        "options": [
          "viajaron",
          "viajaban",
          "han viajado",
          "viajarán"
        ],
        "answer": "han viajado"
      },
      {
        "sentence": "Esta mañana Marta ___ dos cafés. (beber)",
        "options": [
          "bebió",
          "bebía",
          "ha bebido",
          "beberá"
        ],
        "answer": "ha bebido"
      },
      {
        "sentence": "¿Ya ___ el ejercicio? (terminar, vosotros)",
        "options": [
          "terminasteis",
          "terminabais",
          "habéis terminado",
          "terminaréis"
        ],
        "answer": "habéis terminado"
      },
      {
        "sentence": "Todavía no ___ a Carlos. (ver, yo)",
        "options": [
          "vi",
          "veía",
          "he visto",
          "veré"
        ],
        "answer": "he visto"
      },
      {
        "sentence": "Este mes ellos ___ dos exámenes. (hacer)",
        "options": [
          "hicieron",
          "hacían",
          "han hecho",
          "harán"
        ],
        "answer": "han hecho"
      },
      {
        "sentence": "Últimamente tú ___ mucho. (trabajar)",
        "options": [
          "trabajaste",
          "trabajabas",
          "has trabajado",
          "trabajarás"
        ],
        "answer": "has trabajado"
      },
      {
        "sentence": "Hoy la profesora ___ una noticia importante. (decir)",
        "options": [
          "dijo",
          "decía",
          "ha dicho",
          "dirá"
        ],
        "answer": "ha dicho"
      }
    ],
    "cefr": "A2"
  },
  "perfect-test": {
    "title": "Pretérito perfecto: test",
    "kicker": "Pretérito perfecto",
    "instruction": "Choose the best answer.",
    "type": "quiz",
    "items": [
      [
        "Yo ___ la tarea.",
        [
          "he terminado",
          "has terminado",
          "ha terminado",
          "hemos terminado"
        ],
        "he terminado"
      ],
      [
        "Vosotros ___ muy bien.",
        [
          "habéis trabajado",
          "han trabajado",
          "hemos trabajado",
          "has trabajado"
        ],
        "habéis trabajado"
      ],
      [
        "El participio de “hacer” es…",
        [
          "hacido",
          "hecho",
          "hizo",
          "haciendo"
        ],
        "hecho"
      ],
      [
        "El participio de “ver” es…",
        [
          "vido",
          "visto",
          "vio",
          "viendo"
        ],
        "visto"
      ],
      [
        "¿Alguna vez ___ en un globo?",
        [
          "viajaste",
          "has viajado",
          "viajabas",
          "viajarás"
        ],
        "has viajado"
      ],
      [
        "Esta semana nosotros ___ tres clases.",
        [
          "tuvimos",
          "teníamos",
          "hemos tenido",
          "tendremos"
        ],
        "hemos tenido"
      ],
      [
        "Marta todavía no ___.",
        [
          "ha llegado",
          "llegó ayer",
          "llegaba",
          "llega mañana"
        ],
        "ha llegado"
      ],
      [
        "Ellos ___ el informe hoy.",
        [
          "han escrito",
          "escribieron ayer",
          "escribían",
          "escribirán"
        ],
        "han escrito"
      ],
      [
        "Tú ___ la puerta.",
        [
          "has abierto",
          "he abierto",
          "han abierto",
          "habéis abierto"
        ],
        "has abierto"
      ],
      [
        "Nosotros nunca ___ esa película.",
        [
          "vimos",
          "veíamos",
          "hemos visto",
          "veremos"
        ],
        "hemos visto"
      ],
      [
        "¿Cuál es el auxiliar del pretérito perfecto?",
        [
          "ser",
          "estar",
          "haber",
          "tener"
        ],
        "haber"
      ],
      [
        "La forma para “ellos” es…",
        [
          "he",
          "ha",
          "hemos",
          "han"
        ],
        "han"
      ]
    ],
    "cefr": "B1"
  },
  "present-match-regular": {
    "title": "Present: match the regular forms",
    "kicker": "Presente",
    "instruction": "Match each person-and-verb prompt to the correct present-tense form.",
    "type": "drag-match",
    "bankLabel": "Prompts",
    "targetLabel": "Present-tense forms",
    "targets": [
      {
        "id": "hablo",
        "label": "hablo"
      },
      {
        "id": "comes",
        "label": "comes"
      },
      {
        "id": "vive",
        "label": "vive"
      },
      {
        "id": "hablamos",
        "label": "hablamos"
      },
      {
        "id": "comeis",
        "label": "coméis"
      },
      {
        "id": "viven",
        "label": "viven"
      }
    ],
    "items": [
      [
        "yo · hablar",
        "hablo"
      ],
      [
        "tú · comer",
        "comes"
      ],
      [
        "ella · vivir",
        "vive"
      ],
      [
        "nosotros · hablar",
        "hablamos"
      ],
      [
        "vosotros · comer",
        "comeis"
      ],
      [
        "ellas · vivir",
        "viven"
      ]
    ],
    "cefr": "A1"
  },
  "present-match-irregular": {
    "title": "Present: match common irregulars",
    "kicker": "Presente",
    "instruction": "Match each prompt to the correct present-tense form.",
    "type": "drag-match",
    "bankLabel": "Prompts",
    "targetLabel": "Irregular present forms",
    "targets": [
      {
        "id": "tengo",
        "label": "tengo"
      },
      {
        "id": "puedes",
        "label": "puedes"
      },
      {
        "id": "viene",
        "label": "viene"
      },
      {
        "id": "vamos",
        "label": "vamos"
      },
      {
        "id": "haceis",
        "label": "hacéis"
      },
      {
        "id": "dicen",
        "label": "dicen"
      }
    ],
    "items": [
      [
        "yo · tener",
        "tengo"
      ],
      [
        "tú · poder",
        "puedes"
      ],
      [
        "ella · venir",
        "viene"
      ],
      [
        "nosotros · ir",
        "vamos"
      ],
      [
        "vosotros · hacer",
        "haceis"
      ],
      [
        "ellos · decir",
        "dicen"
      ]
    ],
    "cefr": "A2"
  },
  "imperfect-match-regular": {
    "title": "Imperfect: match the regular forms",
    "kicker": "Imperfecto",
    "instruction": "Match each person-and-verb prompt to the correct imperfect form.",
    "type": "drag-match",
    "bankLabel": "Prompts",
    "targetLabel": "Imperfect forms",
    "targets": [
      {
        "id": "hablaba",
        "label": "hablaba"
      },
      {
        "id": "comias",
        "label": "comías"
      },
      {
        "id": "vivia",
        "label": "vivía"
      },
      {
        "id": "hablabamos",
        "label": "hablábamos"
      },
      {
        "id": "comiais",
        "label": "comíais"
      },
      {
        "id": "vivian",
        "label": "vivían"
      }
    ],
    "items": [
      [
        "yo · hablar",
        "hablaba"
      ],
      [
        "tú · comer",
        "comias"
      ],
      [
        "ella · vivir",
        "vivia"
      ],
      [
        "nosotros · hablar",
        "hablabamos"
      ],
      [
        "vosotros · comer",
        "comiais"
      ],
      [
        "ellas · vivir",
        "vivian"
      ]
    ],
    "cefr": "A2"
  },
  "imperfect-match-irregular": {
    "title": "Imperfect: match the irregulars",
    "kicker": "Imperfecto",
    "instruction": "Match each person-and-verb prompt to the correct imperfect form of ser, ir or ver.",
    "type": "drag-match",
    "bankLabel": "Prompts",
    "targetLabel": "Irregular imperfect forms",
    "targets": [
      {
        "id": "era",
        "label": "era"
      },
      {
        "id": "ibas",
        "label": "ibas"
      },
      {
        "id": "veia",
        "label": "veía"
      },
      {
        "id": "eramos",
        "label": "éramos"
      },
      {
        "id": "ibais",
        "label": "ibais"
      },
      {
        "id": "veian",
        "label": "veían"
      }
    ],
    "items": [
      [
        "yo · ser",
        "era"
      ],
      [
        "tú · ir",
        "ibas"
      ],
      [
        "ella · ver",
        "veia"
      ],
      [
        "nosotros · ser",
        "eramos"
      ],
      [
        "vosotros · ir",
        "ibais"
      ],
      [
        "ellos · ver",
        "veian"
      ]
    ],
    "cefr": "A2"
  },
  "preterite-match-regular": {
    "title": "Pretérito: match the regular forms",
    "kicker": "Pretérito",
    "instruction": "Match each person-and-verb prompt to the correct completed-past form.",
    "type": "drag-match",
    "bankLabel": "Prompts",
    "targetLabel": "Pretérito forms",
    "targets": [
      {
        "id": "hable",
        "label": "hablé"
      },
      {
        "id": "comiste",
        "label": "comiste"
      },
      {
        "id": "vivio",
        "label": "vivió"
      },
      {
        "id": "hablamos",
        "label": "hablamos"
      },
      {
        "id": "comisteis",
        "label": "comisteis"
      },
      {
        "id": "vivieron",
        "label": "vivieron"
      }
    ],
    "items": [
      [
        "yo · hablar",
        "hable"
      ],
      [
        "tú · comer",
        "comiste"
      ],
      [
        "ella · vivir",
        "vivio"
      ],
      [
        "nosotros · hablar",
        "hablamos"
      ],
      [
        "vosotros · comer",
        "comisteis"
      ],
      [
        "ellas · vivir",
        "vivieron"
      ]
    ],
    "cefr": "A2"
  },
  "preterite-match-irregular": {
    "title": "Pretérito: match common irregulars",
    "kicker": "Pretérito",
    "instruction": "Match each person-and-verb prompt to the correct irregular pretérito form.",
    "type": "drag-match",
    "bankLabel": "Prompts",
    "targetLabel": "Irregular pretérito forms",
    "targets": [
      {
        "id": "tuve",
        "label": "tuve"
      },
      {
        "id": "estuviste",
        "label": "estuviste"
      },
      {
        "id": "hizo",
        "label": "hizo"
      },
      {
        "id": "pudimos",
        "label": "pudimos"
      },
      {
        "id": "dijisteis",
        "label": "dijisteis"
      },
      {
        "id": "vinieron",
        "label": "vinieron"
      }
    ],
    "items": [
      [
        "yo · tener",
        "tuve"
      ],
      [
        "tú · estar",
        "estuviste"
      ],
      [
        "él · hacer",
        "hizo"
      ],
      [
        "nosotros · poder",
        "pudimos"
      ],
      [
        "vosotros · decir",
        "dijisteis"
      ],
      [
        "ellos · venir",
        "vinieron"
      ]
    ],
    "cefr": "B1"
  },
  "perfect-match-haber": {
    "title": "Pretérito perfecto: match haber",
    "kicker": "Pretérito perfecto",
    "instruction": "Match each subject to the correct form of haber.",
    "type": "drag-match",
    "bankLabel": "Subjects",
    "targetLabel": "Forms of haber",
    "targets": [
      {
        "id": "he",
        "label": "he"
      },
      {
        "id": "has",
        "label": "has"
      },
      {
        "id": "ha",
        "label": "ha"
      },
      {
        "id": "hemos",
        "label": "hemos"
      },
      {
        "id": "habeis",
        "label": "habéis"
      },
      {
        "id": "han",
        "label": "han"
      }
    ],
    "items": [
      [
        "yo",
        "he"
      ],
      [
        "tú",
        "has"
      ],
      [
        "él / ella / usted",
        "ha"
      ],
      [
        "nosotros / nosotras",
        "hemos"
      ],
      [
        "vosotros / vosotras",
        "habeis"
      ],
      [
        "ellos / ellas / ustedes",
        "han"
      ]
    ],
    "cefr": "A2"
  },
  "perfect-match-participles": {
    "title": "Pretérito perfecto: match participles",
    "kicker": "Pretérito perfecto",
    "instruction": "Match each infinitive to its past participle.",
    "type": "drag-match",
    "bankLabel": "Infinitives",
    "targetLabel": "Past participles",
    "targets": [
      {
        "id": "hablado",
        "label": "hablado"
      },
      {
        "id": "comido",
        "label": "comido"
      },
      {
        "id": "vivido",
        "label": "vivido"
      },
      {
        "id": "hecho",
        "label": "hecho"
      },
      {
        "id": "visto",
        "label": "visto"
      },
      {
        "id": "escrito",
        "label": "escrito"
      },
      {
        "id": "puesto",
        "label": "puesto"
      },
      {
        "id": "vuelto",
        "label": "vuelto"
      }
    ],
    "items": [
      [
        "hablar",
        "hablado"
      ],
      [
        "comer",
        "comido"
      ],
      [
        "vivir",
        "vivido"
      ],
      [
        "hacer",
        "hecho"
      ],
      [
        "ver",
        "visto"
      ],
      [
        "escribir",
        "escrito"
      ],
      [
        "poner",
        "puesto"
      ],
      [
        "volver",
        "vuelto"
      ]
    ],
    "cefr": "A2"
  },
  "present-find-regular": {
    "title": "Present: find the regular verbs",
    "kicker": "Presente",
    "instruction": "Click every regular present-tense verb form in each text.",
    "type": "find-words",
    "groups": [
      {
        "text": "Cada mañana preparo el desayuno, bebo café y camino al trabajo. Mis compañeros llegan a las nueve y empezamos juntos.",
        "answerIndexes": [
          2,
          5,
          8,
          13,
          18
        ]
      },
      {
        "text": "Por la tarde estudiamos español, escribimos mensajes y hablamos con la profesora. Después volvemos a casa y cenamos temprano.",
        "answerIndexes": [
          3,
          5,
          8,
          13,
          17
        ]
      },
      {
        "text": "Los sábados Marta compra fruta, cocina para su familia y limpia la casa. Sus hijos ayudan y ordenan sus habitaciones.",
        "answerIndexes": [
          3,
          5,
          10,
          15,
          17
        ]
      }
    ],
    "cefr": "A1"
  },
  "present-find-irregular": {
    "title": "Present: find the irregular verbs",
    "kicker": "Presente",
    "instruction": "Click every irregular or stem-changing present-tense verb form in each text.",
    "type": "find-words",
    "groups": [
      {
        "text": "Yo tengo dos hermanos. Mi hermana hace mucho deporte y va al gimnasio tres veces por semana. Mi hermano puede cocinar muy bien.",
        "answerIndexes": [
          1,
          6,
          10,
          19
        ]
      },
      {
        "text": "Mis amigos vienen a casa los viernes. Siempre dicen que quieren cenar temprano, pero después salen muy tarde.",
        "answerIndexes": [
          2,
          8,
          10,
          15
        ]
      },
      {
        "text": "Por la mañana yo salgo de casa a las ocho, vuelvo a mediodía y pongo la radio mientras hago la comida.",
        "answerIndexes": [
          4,
          10,
          14,
          18
        ]
      }
    ],
    "cefr": "A2"
  },
  "imperfect-find-habits": {
    "title": "Imperfect: find past habits",
    "kicker": "Imperfecto",
    "instruction": "Click every imperfect verb form in each text.",
    "type": "find-words",
    "groups": [
      {
        "text": "Cuando era niño vivía cerca del mar. Todos los días caminaba a la escuela y después jugaba con mis amigos.",
        "answerIndexes": [
          1,
          3,
          10,
          16
        ]
      },
      {
        "text": "Mi abuela siempre preparaba la cena temprano. Nosotros comíamos juntos y veíamos la televisión después.",
        "answerIndexes": [
          3,
          8,
          11
        ]
      },
      {
        "text": "En verano íbamos al pueblo de mis tíos. Hacía calor, dormíamos con las ventanas abiertas y salíamos cada tarde.",
        "answerIndexes": [
          2,
          8,
          10,
          16
        ]
      }
    ],
    "cefr": "A2"
  },
  "imperfect-find-mixed-past": {
    "title": "Imperfect: find the background",
    "kicker": "Imperfecto",
    "instruction": "The texts mix two past tenses. Click only the imperfect forms.",
    "type": "find-words",
    "groups": [
      {
        "text": "Ayer salí de casa a las ocho. Llovía mucho y las calles estaban casi vacías. De repente vi a Marta en la parada.",
        "answerIndexes": [
          7,
          12
        ]
      },
      {
        "text": "Cuando llegamos al hotel, la gente cenaba en el restaurante y una banda tocaba música. Nosotros dejamos las maletas y bajamos.",
        "answerIndexes": [
          6,
          13
        ]
      },
      {
        "text": "El domingo fui al parque. Hacía buen tiempo, muchos niños jugaban y sus padres hablaban en los bancos. Luego empezó a llover.",
        "answerIndexes": [
          5,
          10,
          14
        ]
      }
    ],
    "cefr": "B1"
  },
  "preterite-find-actions": {
    "title": "Pretérito: find completed actions",
    "kicker": "Pretérito",
    "instruction": "Click every pretérito form showing a completed action.",
    "type": "find-words",
    "groups": [
      {
        "text": "Ayer me levanté a las siete, desayuné rápido, salí de casa y llegué al trabajo antes de las nueve.",
        "answerIndexes": [
          2,
          6,
          8,
          12
        ]
      },
      {
        "text": "El sábado compramos comida, visitamos a unos amigos y volvimos a casa por la noche.",
        "answerIndexes": [
          2,
          4,
          9
        ]
      },
      {
        "text": "Ana escribió un correo, llamó a su madre y después puso la mesa para cenar.",
        "answerIndexes": [
          1,
          4,
          10
        ]
      }
    ],
    "cefr": "A2"
  },
  "preterite-find-mixed-past": {
    "title": "Pretérito: find the events",
    "kicker": "Pretérito",
    "instruction": "The texts mix two past tenses. Click only the pretérito forms.",
    "type": "find-words",
    "groups": [
      {
        "text": "Era tarde y hacía frío cuando salimos del cine. Caminamos hasta el coche y encontramos una nota en el parabrisas.",
        "answerIndexes": [
          6,
          9,
          14
        ]
      },
      {
        "text": "Mientras Marta preparaba la cena, sonó el teléfono. Contestó, habló unos minutos y volvió a la cocina.",
        "answerIndexes": [
          5,
          8,
          9,
          13
        ]
      },
      {
        "text": "La plaza estaba llena de gente cuando empezó el concierto. Los músicos tocaron tres canciones y el público pidió otra.",
        "answerIndexes": [
          7,
          12,
          18
        ]
      }
    ],
    "cefr": "B1"
  },
  "perfect-find-haber": {
    "title": "Pretérito perfecto: find haber",
    "kicker": "Pretérito perfecto",
    "instruction": "Click every form of haber that is being used to build the pretérito perfecto.",
    "type": "find-words",
    "groups": [
      {
        "text": "Hoy he hablado con Marta y ella ha enviado los documentos. Nosotros hemos terminado el trabajo.",
        "answerIndexes": [
          1,
          7,
          12
        ]
      },
      {
        "text": "¿Has visto esta película? Mis amigos la han visto dos veces, pero vosotros no la habéis visto todavía.",
        "answerIndexes": [
          0,
          7,
          15
        ]
      },
      {
        "text": "Esta semana he salido poco, tú has trabajado mucho y Carlos ha estado de viaje.",
        "answerIndexes": [
          2,
          6,
          11
        ]
      }
    ],
    "cefr": "A2"
  },
  "perfect-find-participles-context": {
    "title": "Pretérito perfecto: find the participles",
    "kicker": "Pretérito perfecto",
    "instruction": "Click each past participle that belongs to a pretérito perfecto form.",
    "type": "find-words",
    "groups": [
      {
        "text": "Esta mañana he leído las noticias, he hecho café y he escrito dos correos antes de salir.",
        "answerIndexes": [
          3,
          7,
          11
        ]
      },
      {
        "text": "¿Alguna vez has probado paella valenciana o has visitado Sevilla? Yo he estado allí varias veces.",
        "answerIndexes": [
          3,
          8,
          12
        ]
      },
      {
        "text": "Este mes hemos visto tres películas, hemos vuelto al museo y hemos puesto en práctica muchas ideas nuevas.",
        "answerIndexes": [
          3,
          7,
          12
        ]
      }
    ],
    "cefr": "B1"
  },
  "direct-pronouns-match": {
    "title": "Direct object pronouns: match",
    "kicker": "Pronombres de objeto directo",
    "instruction": "Match each direct object to the pronoun that can replace it.",
    "type": "drag-match",
    "bankLabel": "Direct objects",
    "targetLabel": "Pronouns",
    "targets": [
      {
        "id": "me",
        "label": "me"
      },
      {
        "id": "te",
        "label": "te"
      },
      {
        "id": "lo",
        "label": "lo"
      },
      {
        "id": "la",
        "label": "la"
      },
      {
        "id": "nos",
        "label": "nos"
      },
      {
        "id": "os",
        "label": "os"
      },
      {
        "id": "los",
        "label": "los"
      },
      {
        "id": "las",
        "label": "las"
      }
    ],
    "items": [
      [
        "a mí · ver",
        "me"
      ],
      [
        "a ti · escuchar",
        "te"
      ],
      [
        "a Carlos · conocer",
        "lo"
      ],
      [
        "a Ana · llamar",
        "la"
      ],
      [
        "a nosotros · invitar",
        "nos"
      ],
      [
        "a vosotros · esperar",
        "os"
      ],
      [
        "a los chicos · ver",
        "los"
      ],
      [
        "a las profesoras · escuchar",
        "las"
      ]
    ],
    "cefr": "A2"
  },
  "indirect-pronouns-match": {
    "title": "Indirect object pronouns: match",
    "kicker": "Pronombres de objeto indirecto",
    "instruction": "Match each recipient or experiencer to the correct indirect object pronoun.",
    "type": "drag-match",
    "bankLabel": "Recipients / experiencers",
    "targetLabel": "Pronouns",
    "targets": [
      {
        "id": "me",
        "label": "me"
      },
      {
        "id": "te",
        "label": "te"
      },
      {
        "id": "le",
        "label": "le"
      },
      {
        "id": "nos",
        "label": "nos"
      },
      {
        "id": "os",
        "label": "os"
      },
      {
        "id": "les",
        "label": "les"
      }
    ],
    "items": [
      [
        "a mí · dar",
        "me"
      ],
      [
        "a ti · escribir",
        "te"
      ],
      [
        "a Marta · contar",
        "le"
      ],
      [
        "a nosotros · explicar",
        "nos"
      ],
      [
        "a vosotros · decir",
        "os"
      ],
      [
        "a mis padres · enviar",
        "les"
      ],
      [
        "a Carlos · gustar",
        "le"
      ],
      [
        "a las alumnas · hablar",
        "les"
      ]
    ],
    "cefr": "A2"
  },
  "object-pronouns-identify": {
    "title": "Me gusta, me hablas, me ves",
    "kicker": "Objeto directo e indirecto",
    "instruction": "For each highlighted pronoun, decide whether it functions as objeto directo or objeto indirecto.",
    "type": "identify-grid",
    "items": [
      {
        "sentence": "Me ves todos los días.",
        "target": "Me",
        "options": [
          "directo",
          "indirecto"
        ],
        "answer": "directo"
      },
      {
        "sentence": "Me hablas muy rápido.",
        "target": "Me",
        "options": [
          "directo",
          "indirecto"
        ],
        "answer": "indirecto"
      },
      {
        "sentence": "Me gusta la música latina.",
        "target": "Me",
        "options": [
          "directo",
          "indirecto"
        ],
        "answer": "indirecto"
      },
      {
        "sentence": "Te escucho con atención.",
        "target": "Te",
        "options": [
          "directo",
          "indirecto"
        ],
        "answer": "directo"
      },
      {
        "sentence": "Te escribo un mensaje esta noche.",
        "target": "Te",
        "options": [
          "directo",
          "indirecto"
        ],
        "answer": "indirecto"
      },
      {
        "sentence": "Lo conozco muy bien.",
        "target": "Lo",
        "options": [
          "directo",
          "indirecto"
        ],
        "answer": "directo"
      },
      {
        "sentence": "Le doy las llaves a Marta.",
        "target": "Le",
        "options": [
          "directo",
          "indirecto"
        ],
        "answer": "indirecto"
      },
      {
        "sentence": "Nos invitan a cenar.",
        "target": "Nos",
        "options": [
          "directo",
          "indirecto"
        ],
        "answer": "directo"
      },
      {
        "sentence": "Nos cuentan la historia completa.",
        "target": "Nos",
        "options": [
          "directo",
          "indirecto"
        ],
        "answer": "indirecto"
      },
      {
        "sentence": "Os espero en la entrada.",
        "target": "Os",
        "options": [
          "directo",
          "indirecto"
        ],
        "answer": "directo"
      },
      {
        "sentence": "Os digo la verdad.",
        "target": "Os",
        "options": [
          "directo",
          "indirecto"
        ],
        "answer": "indirecto"
      },
      {
        "sentence": "Las veo desde aquí.",
        "target": "Las",
        "options": [
          "directo",
          "indirecto"
        ],
        "answer": "directo"
      },
      {
        "sentence": "Les mando un correo mañana.",
        "target": "Les",
        "options": [
          "directo",
          "indirecto"
        ],
        "answer": "indirecto"
      }
    ],
    "cefr": "A2"
  },
  "gustar-indirect-pronouns": {
    "title": "Me gusta: indirect pronouns",
    "kicker": "Gustar",
    "instruction": "Write the indirect object pronoun needed in each sentence.",
    "type": "gap-grid",
    "items": [
      [
        "A mí ___ gusta el chocolate.",
        "me"
      ],
      [
        "A ti ___ gustan los videojuegos.",
        "te"
      ],
      [
        "A Marta ___ gusta bailar.",
        "le"
      ],
      [
        "A nosotros ___ gusta la música.",
        "nos"
      ],
      [
        "A vosotros ___ gustan las películas.",
        "os"
      ],
      [
        "A mis padres ___ gusta viajar.",
        "les"
      ],
      [
        "¿A usted ___ gusta esta canción?",
        "le"
      ],
      [
        "A Ana y Pablo ___ gustan los museos.",
        "les"
      ]
    ],
    "cefr": "A1"
  },
  "direct-pronouns-write": {
    "title": "Direct object pronouns: replace it",
    "kicker": "Objeto directo",
    "instruction": "Replace the underlined idea in the first clause with the correct direct object pronoun in the second.",
    "type": "gap-grid",
    "items": [
      [
        "A Marta → ___ veo todos los días.",
        "la"
      ],
      [
        "A Carlos → ___ conozco desde hace años.",
        "lo"
      ],
      [
        "A los profesores → ___ escuchamos.",
        "los"
      ],
      [
        "A Ana y Marta → ___ invitan a la fiesta.",
        "las"
      ],
      [
        "El pan → ___ compro por la mañana.",
        "lo"
      ],
      [
        "Las noticias → ___ leemos en clase.",
        "las"
      ],
      [
        "A nosotros → El profesor ___ escucha.",
        "nos"
      ],
      [
        "A vosotros → ___ espero en la entrada.",
        "os"
      ]
    ],
    "cefr": "A2"
  },
  "indirect-pronouns-write": {
    "title": "Indirect object pronouns: replace it",
    "kicker": "Objeto indirecto",
    "instruction": "Replace the recipient or experiencer with the correct indirect object pronoun.",
    "type": "gap-grid",
    "items": [
      [
        "A Marta → ___ doy el libro.",
        "le"
      ],
      [
        "A mis padres → ___ escribo un mensaje.",
        "les"
      ],
      [
        "A nosotros → El profesor ___ explica la actividad.",
        "nos"
      ],
      [
        "A ti → ___ quiero contar una cosa.",
        "te"
      ],
      [
        "A mí → María ___ cuenta la historia.",
        "me"
      ],
      [
        "A vosotros → ___ voy a decir la verdad.",
        "os"
      ],
      [
        "A Ana y Luis → ___ envían una foto.",
        "les"
      ],
      [
        "A Ana → ___ gusta la película.",
        "le"
      ]
    ],
    "cefr": "A2"
  },
  "double-pronouns-choose": {
    "title": "Two object pronouns together",
    "kicker": "Objeto directo + indirecto",
    "instruction": "Choose the correct pair of object pronouns. Remember that le/les becomes se before lo/la/los/las.",
    "type": "select-grid",
    "items": [
      {
        "label": "Ana + libro",
        "sentence": "El libro para Ana → ___ doy mañana.",
        "options": [
          "se lo",
          "le lo",
          "se la",
          "lo le"
        ],
        "answer": "se lo"
      },
      {
        "label": "Carlos + llave",
        "sentence": "La llave para Carlos → ___ doy ahora.",
        "options": [
          "se la",
          "le la",
          "se lo",
          "la le"
        ],
        "answer": "se la"
      },
      {
        "label": "padres + billetes",
        "sentence": "Los billetes para mis padres → ___ envío por correo.",
        "options": [
          "se los",
          "les los",
          "se las",
          "los les"
        ],
        "answer": "se los"
      },
      {
        "label": "alumnas + notas",
        "sentence": "Las notas para las alumnas → ___ explico después.",
        "options": [
          "se las",
          "les las",
          "se los",
          "las les"
        ],
        "answer": "se las"
      },
      {
        "label": "mí + documento",
        "sentence": "El documento para mí → Marta ___ enseña.",
        "options": [
          "me lo",
          "me la",
          "lo me",
          "se lo"
        ],
        "answer": "me lo"
      },
      {
        "label": "ti + dirección",
        "sentence": "La dirección para ti → Yo ___ escribo aquí.",
        "options": [
          "te la",
          "te lo",
          "la te",
          "se la"
        ],
        "answer": "te la"
      },
      {
        "label": "nosotros + ejercicios",
        "sentence": "Los ejercicios para nosotros → La profesora ___ explica.",
        "options": [
          "nos los",
          "nos las",
          "los nos",
          "se los"
        ],
        "answer": "nos los"
      },
      {
        "label": "vosotros + reglas",
        "sentence": "Las reglas para vosotros → Yo ___ repito.",
        "options": [
          "os las",
          "os los",
          "las os",
          "se las"
        ],
        "answer": "os las"
      }
    ],
    "cefr": "B1"
  },
  "object-pronoun-placement": {
    "title": "Object pronouns: placement challenge",
    "kicker": "Pronombres de objeto",
    "instruction": "Choose the grammatically correct transformation. This activity includes two-pronoun combinations and clitic placement.",
    "type": "quiz",
    "items": [
      [
        "Voy a explicar el problema a Marta. →",
        [
          "Voy a explicárselo.",
          "Voy a le explicarlo.",
          "Voy se lo a explicar.",
          "Lo voy explicarle."
        ],
        "Voy a explicárselo."
      ],
      [
        "Estoy enviando las fotos a mis padres. →",
        [
          "Se las estoy enviando.",
          "Les las estoy enviando.",
          "Estoy se las enviando.",
          "Las estoy enviándoles las."
        ],
        "Se las estoy enviando."
      ],
      [
        "Da el libro a Ana. →",
        [
          "Dáselo.",
          "Se lo da.",
          "Dale lo.",
          "Lo se da."
        ],
        "Dáselo."
      ],
      [
        "No des el libro a Ana. →",
        [
          "No se lo des.",
          "No déselo.",
          "No le lo des.",
          "No lo se des."
        ],
        "No se lo des."
      ],
      [
        "Quiero comprar las entradas para ti. →",
        [
          "Quiero comprártelas.",
          "Quiero te las comprar.",
          "Quiero comprarlas te.",
          "Te quiero comprarlas."
        ],
        "Quiero comprártelas."
      ],
      [
        "Estamos explicando las normas a los alumnos. →",
        [
          "Se las estamos explicando.",
          "Les las estamos explicando.",
          "Estamos se las explicando.",
          "Las estamos explicándoles las."
        ],
        "Se las estamos explicando."
      ],
      [
        "Cuéntanos la historia. Sustituye también «la historia». →",
        [
          "Cuéntanosla.",
          "Nos la cuenta.",
          "Cuenta nos la.",
          "Cuéntala nos."
        ],
        "Cuéntanosla."
      ],
      [
        "No cuentes el secreto a tus amigos. →",
        [
          "No se lo cuentes.",
          "No se los cuentes.",
          "No les lo cuentes.",
          "No cuéntaselo."
        ],
        "No se lo cuentes."
      ]
    ],
    "cefr": "B2"
  }
};

  window.SPANISH_PLATFORM = { subjects, catalogue, activities };
})();
