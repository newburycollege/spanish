(function () {
  function esc(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function basePrefix() {
    return document.body.dataset.pageKind === 'activity' ? '../' : '';
  }

  function currentActivity() {
    const id = document.body.dataset.activityId;
    return id ? window.SPANISH_PLATFORM.activities[id] : null;
  }

  function renderShell() {
    const prefix = basePrefix();
    const isHome = document.body.dataset.pageKind === 'home';
    const activity = currentActivity();
    const title = isHome ? 'Spanish classroom activities' : (activity ? activity.title : 'Spanish activity');

    document.body.innerHTML = `
      <div class="teaching-screen" id="teaching-screen">
        <header class="app-header">
          <a class="brand-link" href="${prefix}index.html" aria-label="Newbury College Spanish home">
            <span class="brand-mark" aria-hidden="true">Ñ</span>
            <span class="brand-copy">
              <strong>Newbury College</strong>
              <span>Español</span>
            </span>
          </a>
          <span class="header-divider" aria-hidden="true"></span>
          <div class="page-title">${esc(title)}</div>
          <div class="header-actions">
            ${isHome ? '' : `<a class="header-button" href="${prefix}index.html">Home</a>`}
            <button class="header-button" type="button" id="fullscreen-btn">Full screen</button>
          </div>
        </header>
        <main class="app-main" id="app-main"></main>
        <footer class="app-footer">
          <span class="footer-status" id="footer-status">Ready</span>
          <span class="footer-hint" id="footer-hint">Designed for a 16:9 teaching display</span>
        </footer>
      </div>`;

    wireFullscreen();
    wireKeys();

    if (isHome) renderHome();
  }

  function renderHome() {
    const data = window.SPANISH_PLATFORM;
    const main = document.getElementById('app-main');
    const typeOrder = ['Match', 'Choose', 'Write', 'Identify', 'Find', 'Gap fill', 'Table', 'Test'];
    const totalActivities = data.catalogue.length;
    const activeSubjects = data.subjects.filter(subject => data.catalogue.some(item => item.subject === subject.id)).length;

    function activityOptions(items) {
      const types = [...new Set(items.map(item => item.typeLabel))]
        .sort((a, b) => {
          const ai = typeOrder.indexOf(a);
          const bi = typeOrder.indexOf(b);
          return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi) || a.localeCompare(b);
        });

      return types.map(type => {
        const options = items
          .filter(item => item.typeLabel === type)
          .map(item => `<option value="${esc(item.id)}">${esc(item.title)}</option>`)
          .join('');
        return `<optgroup label="${esc(type)}">${options}</optgroup>`;
      }).join('');
    }

    const subjectCards = data.subjects.map(subject => {
      const items = data.catalogue.filter(item => item.subject === subject.id);
      const available = subject.status === 'available' && items.length > 0;

      if (!available) {
        return `
          <section class="subject-card subject-card--soon" aria-labelledby="subject-${esc(subject.id)}">
            <span class="subject-eyebrow">Grammar subject</span>
            <h2 id="subject-${esc(subject.id)}">${esc(subject.title)}</h2>
            <p>${esc(subject.description)}</p>
            <div class="coming-soon">Coming soon</div>
          </section>`;
      }

      return `
        <section class="subject-card subject-card--active" aria-labelledby="subject-${esc(subject.id)}" data-subject-card="${esc(subject.id)}">
          <div class="subject-card__top">
            <div>
              <span class="subject-eyebrow">Grammar subject</span>
              <h2 id="subject-${esc(subject.id)}">${esc(subject.title)}</h2>
              <p>${esc(subject.description)}</p>
            </div>
            <span class="subject-count">${items.length} activities</span>
          </div>
          <div class="subject-picker">
            <label for="${esc(subject.id)}-activity-select">Choose an activity</label>
            <select id="${esc(subject.id)}-activity-select" data-subject-picker="${esc(subject.id)}">
              <option value="">Select an activity…</option>
              ${activityOptions(items)}
            </select>
          </div>
          <div class="activity-preview activity-preview--empty" id="${esc(subject.id)}-preview" aria-live="polite">
            <div>
              <span class="activity-type-badge">Activity type</span>
              <strong>Select an activity above</strong>
              <p>Choose a format from this grammar subject.</p>
            </div>
            <a class="open-activity-button is-disabled" href="#" aria-disabled="true">Open</a>
          </div>
        </section>`;
    }).join('');

    main.innerHTML = `
      <div class="home-layout">
        <section class="home-intro">
          <div>
            <h1>Spanish classroom activities</h1>
            <p>Choose a grammar subject, then select an activity by format.</p>
          </div>
          <div class="home-badge">${totalActivities} activities · ${activeSubjects} subjects</div>
        </section>
        <div class="subject-grid">${subjectCards}</div>
      </div>`;

    document.querySelectorAll('[data-subject-picker]').forEach(picker => {
      const subjectId = picker.dataset.subjectPicker;
      const items = data.catalogue.filter(item => item.subject === subjectId);
      const preview = document.getElementById(`${subjectId}-preview`);

      picker.addEventListener('change', () => {
        const item = items.find(activity => activity.id === picker.value);
        if (!item) {
          preview.className = 'activity-preview activity-preview--empty';
          preview.innerHTML = `
            <div>
              <span class="activity-type-badge">Activity type</span>
              <strong>Select an activity above</strong>
              <p>Choose a format from this grammar subject.</p>
            </div>
            <a class="open-activity-button is-disabled" href="#" aria-disabled="true">Open</a>`;
          return;
        }

        preview.className = 'activity-preview';
        preview.innerHTML = `
          <div>
            <span class="activity-type-badge">${esc(item.typeLabel)}</span>
            <strong>${esc(item.title)}</strong>
            <p>${esc(item.description)}</p>
          </div>
          <a class="open-activity-button" href="activities/${esc(item.file)}">Open</a>`;
        window.NCSpanish.setStatus(`${item.typeLabel} · ${item.title}`);
      });
    });

    setStatus(`${totalActivities} activities across ${activeSubjects} grammar subjects`);
    document.getElementById('footer-hint').textContent = 'Choose a grammar subject · F = full screen';
  }

  function wireFullscreen() {
    const btn = document.getElementById('fullscreen-btn');
    if (!btn) return;

    btn.addEventListener('click', async () => {
      try {
        if (!document.fullscreenElement) {
          await document.getElementById('teaching-screen').requestFullscreen();
        } else {
          await document.exitFullscreen();
        }
      } catch (err) {
        setStatus('Full-screen mode is not available in this browser.');
      }
    });

    document.addEventListener('fullscreenchange', () => {
      btn.textContent = document.fullscreenElement ? 'Exit full screen' : 'Full screen';
    });
  }

  function wireKeys() {
    document.addEventListener('keydown', event => {
      if ((event.key === 'f' || event.key === 'F') && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) {
        const btn = document.getElementById('fullscreen-btn');
        if (btn) btn.click();
      }
    });
  }

  function setStatus(text) {
    const el = document.getElementById('footer-status');
    if (el) el.textContent = text;
  }

  window.NCSpanish = { esc, renderShell, setStatus, basePrefix };
  document.addEventListener('DOMContentLoaded', renderShell);
})();
