(function () {
  const state = {
    page: 0,
    scores: {},
    selectedMatch: null,
    matchAssignments: {},
    quizIndex: 0,
    quizScore: 0,
    quizAnswered: false,
    quizResults: [],
    findSelections: {}
  };

  let activity = null;

  function esc(value) { return window.NCSpanish.esc(value); }

  function normalise(value) {
    return String(value || '')
      .trim()
      .toLocaleLowerCase('es')
      .replace(/[“”]/g, '"')
      .replace(/[’]/g, "'")
      .replace(/\s+/g, ' ');
  }

  function withoutAccents(value) {
    return normalise(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function isCorrect(value, answer) {
    const accepted = Array.isArray(answer) ? answer : [answer];
    return accepted.some(item => normalise(value) === normalise(item));
  }

  function accentOnlyError(value, answer) {
    const accepted = Array.isArray(answer) ? answer : [answer];
    return accepted.some(item => withoutAccents(value) === withoutAccents(item) && normalise(value) !== normalise(item));
  }

  function activityChrome() {
    const main = document.getElementById('app-main');
    main.innerHTML = `
      <div class="activity-layout">
        <div class="activity-meta">
          <span class="activity-kicker">${esc(activity.kicker)}</span>
          <span class="activity-instruction">${esc(activity.instruction)}</span>
        </div>
        <section class="activity-stage" id="activity-stage" aria-live="polite"></section>
        <div class="activity-controls" id="activity-controls"></div>
      </div>`;
    document.getElementById('footer-hint').textContent = 'F = full screen';
  }

  function setControls(leftHtml, rightHtml) {
    document.getElementById('activity-controls').innerHTML = `
      <div class="control-group">${leftHtml || ''}</div>
      <div class="control-group">${rightHtml || ''}</div>`;
  }

  function button(id, text, kind, disabled) {
    return `<button class="btn ${kind || 'btn-secondary'}" type="button" id="${id}" ${disabled ? 'disabled' : ''}>${esc(text)}</button>`;
  }

  function showFeedback(text, kind) {
    const stage = document.getElementById('activity-stage');
    let box = stage.querySelector('.feedback');
    if (!box) {
      box = document.createElement('div');
      box.className = 'feedback';
      stage.appendChild(box);
    }
    box.className = `feedback show ${kind === 'good' ? 'good' : 'bad'}`;
    box.textContent = text;
    clearTimeout(showFeedback.timer);
    showFeedback.timer = setTimeout(() => box.classList.remove('show'), 3200);
  }

  function sentenceWithInput(sentence, key, answer) {
    const input = `<span class="inline-gap"><input class="answer-input" type="text" autocomplete="off" spellcheck="false" data-key="${esc(key)}" data-answer="${esc(answer)}" aria-label="Missing Spanish word"></span>`;
    return esc(sentence).replace('___', input);
  }

  function markInput(input, answer) {
    input.classList.remove('correct', 'incorrect', 'revealed');
    if (isCorrect(input.value, answer)) {
      input.classList.add('correct');
      return { correct: true, accent: false };
    }
    input.classList.add('incorrect');
    return { correct: false, accent: accentOnlyError(input.value, answer) };
  }

  function checkTextInputs(scope) {
    const inputs = Array.from(scope.querySelectorAll('.answer-input[data-answer]'));
    let correct = 0;
    let accentErrors = 0;
    inputs.forEach(input => {
      const result = markInput(input, input.dataset.answer);
      if (result.correct) correct += 1;
      if (result.accent) accentErrors += 1;
    });
    return { correct, total: inputs.length, accentErrors };
  }

  function revealTextInputs(scope) {
    scope.querySelectorAll('.answer-input[data-answer]').forEach(input => {
      input.value = input.dataset.answer;
      input.classList.remove('correct', 'incorrect');
      input.classList.add('revealed');
    });
  }

  function resetTextInputs(scope) {
    scope.querySelectorAll('.answer-input[data-answer]').forEach(input => {
      input.value = '';
      input.classList.remove('correct', 'incorrect', 'revealed');
    });
  }

  function statusForScore(result) {
    window.NCSpanish.setStatus(`${result.correct} / ${result.total} correct`);
    if (result.correct === result.total) {
      showFeedback('Excellent — everything is correct.', 'good');
    } else if (result.accentErrors > 0) {
      showFeedback(`${result.correct} / ${result.total}. Check the written accents in the highlighted answers.`, 'bad');
    } else {
      showFeedback(`${result.correct} / ${result.total}. Have another look at the highlighted answers.`, 'bad');
    }
  }

  function renderFamilySelect() {
    const stage = document.getElementById('activity-stage');
    const options = activity.options.map(option => `<option value="${esc(option)}">${esc(option)}</option>`).join('');
    stage.innerHTML = `<div class="family-grid">
      ${activity.items.map((item, index) => `
        <div class="family-row">
          <div class="pronoun-pill">${esc(item[0])}</div>
          <select class="answer-select" data-answer="${esc(item[1])}" aria-label="Possessive forms for ${esc(item[0])}">
            <option value="">Choose the forms…</option>
            ${options}
          </select>
        </div>`).join('')}
    </div>`;

    setControls('', `${button('check', 'Check', 'btn-primary')} ${button('reveal', 'Show answers')} ${button('reset', 'Reset')}`);
    document.getElementById('check').onclick = () => {
      let correct = 0;
      const selects = Array.from(stage.querySelectorAll('.answer-select'));
      selects.forEach(select => {
        select.classList.remove('correct', 'incorrect', 'revealed');
        if (select.value === select.dataset.answer) {
          select.classList.add('correct'); correct += 1;
        } else select.classList.add('incorrect');
      });
      statusForScore({ correct, total: selects.length, accentErrors: 0 });
    };
    document.getElementById('reveal').onclick = () => {
      stage.querySelectorAll('.answer-select').forEach(select => {
        select.value = select.dataset.answer;
        select.classList.remove('correct', 'incorrect');
        select.classList.add('revealed');
      });
      window.NCSpanish.setStatus('Answers shown');
    };
    document.getElementById('reset').onclick = () => renderFamilySelect();
  }

  function renderDragMatch() {
    const stage = document.getElementById('activity-stage');
    const unassigned = activity.items
      .map((item, index) => ({ item, index }))
      .filter(entry => state.matchAssignments[entry.index] == null);

    stage.innerHTML = `
      <div class="match-layout">
        <section class="match-bank">
          <h3>Subjects</h3>
          <div class="match-chips" id="match-bank">
            ${unassigned.map(({item,index}) => `<button class="match-chip ${state.selectedMatch === index ? 'selected' : ''}" type="button" draggable="true" data-index="${index}">${esc(item[0])}</button>`).join('') || '<p>All cards have been placed.</p>'}
          </div>
        </section>
        <section class="match-targets" aria-label="Possessive families">
          ${activity.targets.map(target => {
            const assigned = activity.items.map((item,index) => ({item,index})).filter(entry => state.matchAssignments[entry.index] === target.id);
            return `<div class="match-target" data-target="${esc(target.id)}" tabindex="0">
              <div class="match-target__label">${esc(target.label)}</div>
              <div class="match-target__items">
                ${assigned.map(({item,index}) => `<button type="button" class="target-token" data-index="${index}" title="Click to return this card">${esc(item[0])}</button>`).join('')}
              </div>
            </div>`;
          }).join('')}
        </section>
      </div>`;

    setControls('', `${button('check', 'Check', 'btn-primary')} ${button('reveal', 'Show answers')} ${button('reset', 'Reset')}`);
    wireMatchEvents();

    document.getElementById('check').onclick = checkMatch;
    document.getElementById('reveal').onclick = () => {
      activity.items.forEach((item,index) => state.matchAssignments[index] = item[1]);
      state.selectedMatch = null;
      renderDragMatch();
      document.querySelectorAll('.match-target').forEach(el => el.classList.add('correct'));
      window.NCSpanish.setStatus('Answers shown');
    };
    document.getElementById('reset').onclick = () => {
      state.matchAssignments = {};
      state.selectedMatch = null;
      renderDragMatch();
      window.NCSpanish.setStatus('Activity reset');
    };
  }

  function wireMatchEvents() {
    document.querySelectorAll('.match-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const index = Number(chip.dataset.index);
        state.selectedMatch = state.selectedMatch === index ? null : index;
        renderDragMatch();
      });
      chip.addEventListener('dragstart', event => {
        event.dataTransfer.setData('text/plain', chip.dataset.index);
        event.dataTransfer.effectAllowed = 'move';
      });
    });

    document.querySelectorAll('.match-target').forEach(target => {
      target.addEventListener('dragover', event => {
        event.preventDefault();
        target.classList.add('active');
      });
      target.addEventListener('dragleave', () => target.classList.remove('active'));
      target.addEventListener('drop', event => {
        event.preventDefault();
        const index = Number(event.dataTransfer.getData('text/plain'));
        assignMatch(index, target.dataset.target);
      });
      target.addEventListener('click', event => {
        if (event.target.closest('.target-token')) return;
        if (state.selectedMatch != null) assignMatch(state.selectedMatch, target.dataset.target);
      });
      target.addEventListener('keydown', event => {
        if ((event.key === 'Enter' || event.key === ' ') && state.selectedMatch != null) {
          event.preventDefault();
          assignMatch(state.selectedMatch, target.dataset.target);
        }
      });
    });

    document.querySelectorAll('.target-token').forEach(token => {
      token.addEventListener('click', event => {
        event.stopPropagation();
        delete state.matchAssignments[Number(token.dataset.index)];
        renderDragMatch();
      });
    });
  }

  function assignMatch(index, targetId) {
    state.matchAssignments[index] = targetId;
    state.selectedMatch = null;
    renderDragMatch();
  }

  function checkMatch() {
    const total = activity.items.length;
    let correct = 0;
    activity.items.forEach((item,index) => {
      if (state.matchAssignments[index] === item[1]) correct += 1;
    });

    document.querySelectorAll('.match-target').forEach(target => {
      const targetId = target.dataset.target;
      const assignedIndexes = Object.keys(state.matchAssignments).filter(index => state.matchAssignments[index] === targetId).map(Number);
      target.classList.remove('correct','incorrect');
      if (!assignedIndexes.length) return;
      const allCorrect = assignedIndexes.every(index => activity.items[index][1] === targetId);
      target.classList.add(allCorrect ? 'correct' : 'incorrect');
    });

    statusForScore({ correct, total, accentErrors: 0 });
  }

  function renderGapGrid() {
    const stage = document.getElementById('activity-stage');
    stage.innerHTML = `<div class="gap-grid">
      ${activity.items.map((item,index) => `
        <div class="gap-row">
          <span class="gap-number">${index + 1}</span>
          <div class="gap-sentence">${sentenceWithInput(item[0], `g${index}`, item[1])}</div>
        </div>`).join('')}
    </div>`;

    setControls('', `${button('check', 'Check', 'btn-primary')} ${button('reveal', 'Show answers')} ${button('reset', 'Reset')}`);
    document.getElementById('check').onclick = () => statusForScore(checkTextInputs(stage));
    document.getElementById('reveal').onclick = () => { revealTextInputs(stage); window.NCSpanish.setStatus('Answers shown'); };
    document.getElementById('reset').onclick = () => { resetTextInputs(stage); window.NCSpanish.setStatus('Activity reset'); };
  }

  function renderPagedGroups() {
    const group = activity.groups[state.page];
    const stage = document.getElementById('activity-stage');
    stage.innerHTML = `
      <div class="group-slide">
        <section class="owner-panel">
          <div>
            <div class="owner-symbol">${esc(group.symbol)}</div>
            <h2>${esc(group.owner)}</h2>
            <p>${esc(group.hint)}</p>
          </div>
        </section>
        <section class="group-questions">
          ${group.items.map((item,index) => `
            <div class="group-question">
              <span style="flex:1">${sentenceWithInput(item[0], `p${index}`, item[1])}</span>
            </div>`).join('')}
        </section>
      </div>`;

    const last = state.page === activity.groups.length - 1;
    setControls(
      `${button('prev', 'Previous', 'btn-secondary', state.page === 0)} ${button('next', last ? 'Finish' : 'Next', 'btn-secondary')}`,
      `<span class="score-chip">${state.page + 1} / ${activity.groups.length}</span> ${button('check', 'Check', 'btn-primary')} ${button('reveal', 'Show answers')}`
    );

    restorePageValues(group);

    document.getElementById('prev').onclick = () => { storePageValues(); state.page -= 1; renderPagedGroups(); };
    document.getElementById('next').onclick = () => {
      storePageValues();
      if (last) renderPagedCompletion();
      else { state.page += 1; renderPagedGroups(); }
    };
    document.getElementById('check').onclick = () => {
      const result = checkTextInputs(stage);
      state.scores[state.page] = result;
      storePageValues();
      statusForScore(result);
    };
    document.getElementById('reveal').onclick = () => { revealTextInputs(stage); storePageValues(); window.NCSpanish.setStatus('Answers shown'); };
  }

  function storePageValues() {
    const stage = document.getElementById('activity-stage');
    state.scores[`values-${state.page}`] = Array.from(stage.querySelectorAll('.answer-input')).map(input => input.value);
  }

  function restorePageValues() {
    const values = state.scores[`values-${state.page}`];
    if (!values) return;
    document.querySelectorAll('#activity-stage .answer-input').forEach((input,index) => input.value = values[index] || '');
  }

  function renderPagedCompletion() {
    const stage = document.getElementById('activity-stage');
    const pageResults = activity.groups.map((_,index) => state.scores[index]).filter(Boolean);
    const correct = pageResults.reduce((sum,item) => sum + item.correct, 0);
    const total = activity.groups.reduce((sum,group) => sum + group.items.length, 0);
    const checked = pageResults.length;
    stage.innerHTML = `
      <div class="complete-card"><div class="complete-card__inner">
        <div class="complete-mark">✓</div>
        <h2>Activity complete</h2>
        <p>${checked ? `You checked ${checked} section${checked === 1 ? '' : 's'} and scored ${correct} / ${pageResults.reduce((s,r)=>s+r.total,0)} on those checks.` : 'Use the activity again and check each section as you go.'}</p>
      </div></div>`;
    setControls('', `${button('restart', 'Start again', 'btn-primary')}`);
    document.getElementById('restart').onclick = () => {
      state.page = 0; state.scores = {}; renderPagedGroups(); window.NCSpanish.setStatus('Activity restarted');
    };
    window.NCSpanish.setStatus(`Activity complete · ${total} questions in total`);
  }

  function renderContextPairs() {
    const group = activity.groups[state.page];
    const stage = document.getElementById('activity-stage');
    stage.innerHTML = `
      <div class="context-slide">
        <section class="context-owner">
          <div class="owner-symbol">${esc(group.symbol)}</div>
          <h2>${esc(group.owner)}</h2>
          <p>${esc(group.context)}</p>
        </section>
        <section class="context-questions">
          ${group.items.map((item,index) => `<div class="context-question">${sentenceWithInput(item[0], `c${index}`, item[1])}</div>`).join('')}
        </section>
      </div>`;

    const last = state.page === activity.groups.length - 1;
    setControls(
      `${button('prev', 'Previous', 'btn-secondary', state.page === 0)} ${button('next', last ? 'Finish' : 'Next', 'btn-secondary')}`,
      `<span class="score-chip">${state.page + 1} / ${activity.groups.length}</span> ${button('check', 'Check', 'btn-primary')} ${button('reveal', 'Show answers')}`
    );
    restorePageValues(group);
    document.getElementById('prev').onclick = () => { storePageValues(); state.page -= 1; renderContextPairs(); };
    document.getElementById('next').onclick = () => { storePageValues(); if (last) renderContextCompletion(); else { state.page += 1; renderContextPairs(); } };
    document.getElementById('check').onclick = () => { const result = checkTextInputs(stage); state.scores[state.page] = result; storePageValues(); statusForScore(result); };
    document.getElementById('reveal').onclick = () => { revealTextInputs(stage); storePageValues(); window.NCSpanish.setStatus('Answers shown'); };
  }

  function renderContextCompletion() {
    const stage = document.getElementById('activity-stage');
    const pageResults = activity.groups.map((_,index) => state.scores[index]).filter(Boolean);
    const checkedTotal = pageResults.reduce((sum,item) => sum + item.total, 0);
    const correct = pageResults.reduce((sum,item) => sum + item.correct, 0);
    stage.innerHTML = `<div class="complete-card"><div class="complete-card__inner">
      <div class="complete-mark">✓</div><h2>Activity complete</h2>
      <p>${checkedTotal ? `Score from checked sections: ${correct} / ${checkedTotal}.` : 'You reached the end. Restart to practise again.'}</p>
    </div></div>`;
    setControls('', `${button('restart','Start again','btn-primary')}`);
    document.getElementById('restart').onclick = () => { state.page = 0; state.scores = {}; renderContextPairs(); };
    window.NCSpanish.setStatus('Activity complete');
  }


  function sentenceWithSelect(item, index) {
    const choices = item.options.map(option => `<option value="${esc(option)}">${esc(option)}</option>`).join('');
    const select = `<span class="inline-gap"><select class="answer-select compact-select" data-answer="${esc(item.answer)}" aria-label="Choose the missing form"><option value="">Choose…</option>${choices}</select></span>`;
    return esc(item.sentence).replace('___', select);
  }

  function checkSelects(scope) {
    const selects = Array.from(scope.querySelectorAll('.answer-select[data-answer]'));
    let correct = 0;
    selects.forEach(select => {
      select.classList.remove('correct', 'incorrect', 'revealed');
      if (normalise(select.value) === normalise(select.dataset.answer)) {
        select.classList.add('correct');
        correct += 1;
      } else {
        select.classList.add('incorrect');
      }
    });
    return { correct, total: selects.length, accentErrors: 0 };
  }

  function revealSelects(scope) {
    scope.querySelectorAll('.answer-select[data-answer]').forEach(select => {
      select.value = select.dataset.answer;
      select.classList.remove('correct', 'incorrect');
      select.classList.add('revealed');
    });
  }

  function renderSelectGrid() {
    const stage = document.getElementById('activity-stage');
    stage.innerHTML = `<div class="select-grid">
      ${activity.items.map((item, index) => `
        <div class="select-row">
          ${item.label ? `<span class="owner-clue">${esc(item.label)}</span>` : `<span class="select-number">${index + 1}</span>`}
          <div class="select-sentence">${sentenceWithSelect(item, index)}</div>
        </div>`).join('')}
    </div>`;

    setControls('', `${button('check', 'Check', 'btn-primary')} ${button('reveal', 'Show answers')} ${button('reset', 'Reset')}`);
    document.getElementById('check').onclick = () => statusForScore(checkSelects(stage));
    document.getElementById('reveal').onclick = () => { revealSelects(stage); window.NCSpanish.setStatus('Answers shown'); };
    document.getElementById('reset').onclick = renderSelectGrid;
  }

  function highlightTarget(sentence, target) {
    const lowerSentence = sentence.toLocaleLowerCase('es');
    const lowerTarget = target.toLocaleLowerCase('es');
    const index = lowerSentence.indexOf(lowerTarget);
    if (index < 0) return esc(sentence);
    return `${esc(sentence.slice(0, index))}<mark class="target-highlight">${esc(sentence.slice(index, index + target.length))}</mark>${esc(sentence.slice(index + target.length))}`;
  }

  function renderIdentifyGrid() {
    const stage = document.getElementById('activity-stage');
    stage.innerHTML = `<div class="identify-grid">
      ${activity.items.map((item, index) => `
        <div class="identify-row">
          <span class="select-number">${index + 1}</span>
          <div class="identify-sentence">${highlightTarget(item.sentence, item.target)}</div>
          <select class="answer-select identify-select" data-answer="${esc(item.answer)}" aria-label="Determiner or pronoun">
            <option value="">Choose…</option>
            ${item.options.map(option => `<option value="${esc(option)}">${esc(option)}</option>`).join('')}
          </select>
        </div>`).join('')}
    </div>`;

    setControls('', `${button('check', 'Check', 'btn-primary')} ${button('reveal', 'Show answers')} ${button('reset', 'Reset')}`);
    document.getElementById('check').onclick = () => statusForScore(checkSelects(stage));
    document.getElementById('reveal').onclick = () => { revealSelects(stage); window.NCSpanish.setStatus('Answers shown'); };
    document.getElementById('reset').onclick = renderIdentifyGrid;
  }

  function renderFindWords() {
    const group = activity.groups[state.page];
    const stage = document.getElementById('activity-stage');
    const tokens = group.text.split(/\s+/);
    const selections = new Set(state.findSelections[state.page] || []);
    const correctSet = new Set(group.answerIndexes);

    stage.innerHTML = `
      <div class="find-words-layout">
        <div class="find-counter">Text ${state.page + 1} of ${activity.groups.length}</div>
        <div class="find-text">
          ${tokens.map((token, index) => `<button type="button" class="word-token ${selections.has(index) ? 'selected' : ''}" data-index="${index}" aria-pressed="${selections.has(index)}">${esc(token)}</button>`).join(' ')}
        </div>
        <div class="find-note">Click a word again to deselect it.</div>
      </div>`;

    const last = state.page === activity.groups.length - 1;
    setControls(
      `${button('prev', 'Previous', 'btn-secondary', state.page === 0)} ${button('next', last ? 'Finish' : 'Next', 'btn-secondary')}`,
      `<span class="score-chip">${state.page + 1} / ${activity.groups.length}</span> ${button('check', 'Check', 'btn-primary')} ${button('reveal', 'Show answers')} ${button('clear', 'Clear')}`
    );

    stage.querySelectorAll('.word-token').forEach(word => {
      word.addEventListener('click', () => {
        const index = Number(word.dataset.index);
        const set = new Set(state.findSelections[state.page] || []);
        if (set.has(index)) set.delete(index); else set.add(index);
        state.findSelections[state.page] = [...set];
        word.classList.toggle('selected', set.has(index));
        word.setAttribute('aria-pressed', set.has(index));
        word.classList.remove('correct', 'incorrect', 'revealed');
      });
    });

    document.getElementById('prev').onclick = () => { state.page -= 1; renderFindWords(); };
    document.getElementById('next').onclick = () => {
      if (last) renderFindCompletion();
      else { state.page += 1; renderFindWords(); }
    };
    document.getElementById('check').onclick = () => {
      const selected = new Set(state.findSelections[state.page] || []);
      let correct = 0;
      let wrong = 0;
      stage.querySelectorAll('.word-token').forEach(word => {
        const index = Number(word.dataset.index);
        word.classList.remove('correct', 'incorrect', 'revealed');
        if (!selected.has(index)) return;
        if (correctSet.has(index)) {
          word.classList.add('correct');
          correct += 1;
        } else {
          word.classList.add('incorrect');
          wrong += 1;
        }
      });
      const result = { correct, total: correctSet.size, wrong };
      state.scores[state.page] = result;
      const complete = correct === correctSet.size && wrong === 0;
      window.NCSpanish.setStatus(`${correct} / ${correctSet.size} targets found${wrong ? ` · ${wrong} extra` : ''}`);
      showFeedback(complete ? 'Excellent — you found them all.' : `${correct} of ${correctSet.size} correct targets selected${wrong ? `, with ${wrong} extra.` : '.'}`, complete ? 'good' : 'bad');
    };
    document.getElementById('reveal').onclick = () => {
      state.findSelections[state.page] = [...correctSet];
      stage.querySelectorAll('.word-token').forEach(word => {
        const index = Number(word.dataset.index);
        word.classList.remove('selected', 'correct', 'incorrect');
        if (correctSet.has(index)) {
          word.classList.add('selected', 'revealed');
          word.setAttribute('aria-pressed', 'true');
        } else {
          word.setAttribute('aria-pressed', 'false');
        }
      });
      window.NCSpanish.setStatus('Answers shown');
    };
    document.getElementById('clear').onclick = () => {
      state.findSelections[state.page] = [];
      renderFindWords();
      window.NCSpanish.setStatus('Selections cleared');
    };
  }

  function renderFindCompletion() {
    const stage = document.getElementById('activity-stage');
    const checked = activity.groups.map((_, index) => state.scores[index]).filter(Boolean);
    const correct = checked.reduce((sum, item) => sum + item.correct, 0);
    const total = checked.reduce((sum, item) => sum + item.total, 0);
    const wrong = checked.reduce((sum, item) => sum + (item.wrong || 0), 0);
    stage.innerHTML = `<div class="complete-card"><div class="complete-card__inner">
      <div class="complete-mark">✓</div>
      <h2>Activity complete</h2>
      <p>${checked.length ? `Across the sections you checked: ${correct} / ${total} correct targets${wrong ? `, with ${wrong} extra selection${wrong === 1 ? '' : 's'}.` : '.'}` : 'You reached the end. Check each section as you go to record a score.'}</p>
    </div></div>`;
    setControls('', `${button('restart', 'Start again', 'btn-primary')}`);
    document.getElementById('restart').onclick = () => {
      state.page = 0;
      state.scores = {};
      state.findSelections = {};
      renderFindWords();
    };
    window.NCSpanish.setStatus('Activity complete');
  }

  function clozeTemplateHtml() {
    const template = activity.template;
    let output = '';
    let lastIndex = 0;
    const regex = /\{\{(\d+)\}\}/g;
    let match;
    while ((match = regex.exec(template))) {
      output += esc(template.slice(lastIndex, match.index));
      const index = Number(match[1]);
      const answer = activity.answers[index];
      output += `<span class="inline-gap cloze-gap"><input class="answer-input" type="text" autocomplete="off" spellcheck="false" data-answer="${esc(answer)}" aria-label="Gap ${index + 1}"></span>`;
      lastIndex = regex.lastIndex;
    }
    output += esc(template.slice(lastIndex));
    return output;
  }

  function renderTextCloze() {
    const stage = document.getElementById('activity-stage');
    stage.innerHTML = `<div class="cloze-text">${clozeTemplateHtml()}</div>`;
    setControls('', `${button('check', 'Check', 'btn-primary')} ${button('reveal', 'Show answers')} ${button('reset', 'Reset')}`);
    document.getElementById('check').onclick = () => statusForScore(checkTextInputs(stage));
    document.getElementById('reveal').onclick = () => { revealTextInputs(stage); window.NCSpanish.setStatus('Answers shown'); };
    document.getElementById('reset').onclick = renderTextCloze;
  }

  function renderMatrixSelect() {
    const stage = document.getElementById('activity-stage');
    stage.innerHTML = `<div class="matrix-layout ${activity.sections.length === 1 ? 'matrix-layout--single' : ''}">
      ${activity.sections.map((section, sectionIndex) => `
        <section class="matrix-card">
          <table class="forms-table">
            <thead>
              <tr><th>${esc(section.rowHeader || ((activity.kicker === 'Presente' || activity.kicker === 'Imperfecto' || activity.kicker === 'Pretérito') ? 'Verbo' : 'Objeto'))}</th>${section.headers.map(header => `<th>${esc(header)}</th>`).join('')}</tr>
            </thead>
            <tbody>
              ${section.rows.map((row, rowIndex) => `
                <tr>
                  <th>${esc(row.noun)}</th>
                  ${row.cells.map((cell, cellIndex) => `
                    <td>
                      <select class="answer-select matrix-select" data-answer="${esc(cell.answer)}" aria-label="${esc(section.headers[cellIndex])}: ${esc(row.noun)}">
                        <option value="">Choose…</option>
                        ${cell.options.map(option => `<option value="${esc(option)}">${esc(option)}</option>`).join('')}
                      </select>
                    </td>`).join('')}
                </tr>`).join('')}
            </tbody>
          </table>
        </section>`).join('')}
    </div>`;

    setControls('', `${button('check', 'Check', 'btn-primary')} ${button('reveal', 'Show answers')} ${button('reset', 'Reset')}`);
    document.getElementById('check').onclick = () => statusForScore(checkSelects(stage));
    document.getElementById('reveal').onclick = () => { revealSelects(stage); window.NCSpanish.setStatus('Answers shown'); };
    document.getElementById('reset').onclick = renderMatrixSelect;
  }

  function renderQuiz() {
    const stage = document.getElementById('activity-stage');
    const item = activity.items[state.quizIndex];
    const progress = Math.round((state.quizIndex / activity.items.length) * 100);

    stage.innerHTML = `
      <div class="quiz-layout">
        <section class="quiz-main">
          <div class="quiz-counter">Question ${state.quizIndex + 1} of ${activity.items.length}</div>
          <h2 class="quiz-question">${esc(item[0])}</h2>
          <div class="quiz-options" style="--quiz-cols:${Math.min(item[1].length, 4)}">
            ${item[1].map((option,index) => `<button class="quiz-option" type="button" data-option="${esc(option)}" data-index="${index}"><span>${index + 1}</span> · ${esc(option)}</button>`).join('')}
          </div>
        </section>
        <aside class="quiz-aside">
          <div>
            <div class="quiz-score-big">${state.quizScore}</div>
            <div class="quiz-score-label">correct so far</div>
          </div>
          <div>
            <div class="progress-track"><div class="progress-bar" style="width:${progress}%"></div></div>
            <div class="quiz-score-label" style="margin-top:8px">${state.quizIndex} answered</div>
          </div>
        </aside>
      </div>`;

    setControls(`${button('restart', 'Restart', 'btn-secondary')}`, `${button('next', state.quizIndex === activity.items.length - 1 ? 'Finish' : 'Next', 'btn-primary', !state.quizAnswered)}`);

    stage.querySelectorAll('.quiz-option').forEach(option => option.addEventListener('click', () => chooseQuiz(option)));
    document.getElementById('restart').onclick = resetQuiz;
    document.getElementById('next').onclick = nextQuiz;
    window.NCSpanish.setStatus(`Score ${state.quizScore} · Question ${state.quizIndex + 1} of ${activity.items.length}`);
    document.getElementById('footer-hint').textContent = `Keys 1–${Math.min(item[1].length, 9)} = choose · F = full screen`;
  }

  function chooseQuiz(optionButton) {
    if (state.quizAnswered) return;
    const item = activity.items[state.quizIndex];
    const chosen = optionButton.dataset.option;
    const correct = normalise(chosen) === normalise(item[2]);
    state.quizAnswered = true;
    state.quizResults[state.quizIndex] = correct;
    if (correct) state.quizScore += 1;

    document.querySelectorAll('.quiz-option').forEach(button => {
      button.disabled = true;
      if (normalise(button.dataset.option) === normalise(item[2])) button.classList.add('correct');
      else if (button === optionButton) button.classList.add('incorrect');
    });
    document.getElementById('next').disabled = false;
    document.querySelector('.quiz-score-big').textContent = state.quizScore;
    window.NCSpanish.setStatus(correct ? 'Correct' : `Correct answer: ${item[2]}`);
  }

  function nextQuiz() {
    if (!state.quizAnswered) return;
    if (state.quizIndex === activity.items.length - 1) renderQuizCompletion();
    else {
      state.quizIndex += 1;
      state.quizAnswered = false;
      renderQuiz();
    }
  }

  function renderQuizCompletion() {
    const stage = document.getElementById('activity-stage');
    const percent = Math.round((state.quizScore / activity.items.length) * 100);
    stage.innerHTML = `<div class="complete-card"><div class="complete-card__inner">
      <div class="complete-mark">${percent >= 70 ? '✓' : '↻'}</div>
      <h2>${state.quizScore} / ${activity.items.length}</h2>
      <p>${percent}% correct. ${percent >= 85 ? 'Excellent retrieval.' : percent >= 70 ? 'A strong result.' : 'Try again and use the practice activities to review the forms.'}</p>
    </div></div>`;
    setControls('', `${button('restart','Try again','btn-primary')}`);
    document.getElementById('restart').onclick = resetQuiz;
    window.NCSpanish.setStatus(`Final score ${state.quizScore} / ${activity.items.length}`);
  }

  function resetQuiz() {
    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizAnswered = false;
    state.quizResults = [];
    renderQuiz();
  }

  function handleQuizKeys(event) {
    if (!activity || activity.type !== 'quiz' || state.quizAnswered) return;
    const maxKey = Math.min(activity.items[state.quizIndex][1].length, 9);
    if (/^[1-9]$/.test(event.key) && Number(event.key) <= maxKey) {
      const option = document.querySelector(`.quiz-option[data-index="${Number(event.key)-1}"]`);
      if (option) option.click();
    }
  }

  function init() {
    const id = document.body.dataset.activityId;
    activity = window.SPANISH_PLATFORM.activities[id];
    if (!activity) {
      document.getElementById('app-main').innerHTML = '<p>Activity not found.</p>';
      return;
    }

    activityChrome();
    window.NCSpanish.setStatus('Ready');

    switch (activity.type) {
      case 'family-select': renderFamilySelect(); break;
      case 'drag-match': renderDragMatch(); break;
      case 'gap-grid': renderGapGrid(); break;
      case 'paged-groups': renderPagedGroups(); break;
      case 'context-pairs': renderContextPairs(); break;
      case 'select-grid': renderSelectGrid(); break;
      case 'identify-grid': renderIdentifyGrid(); break;
      case 'find-words': renderFindWords(); break;
      case 'text-cloze': renderTextCloze(); break;
      case 'matrix-select': renderMatrixSelect(); break;
      case 'quiz': renderQuiz(); break;
      default: document.getElementById('activity-stage').textContent = 'Unsupported activity type.';
    }
  }

  document.addEventListener('DOMContentLoaded', () => setTimeout(init, 0));
  document.addEventListener('keydown', handleQuizKeys);
})();
