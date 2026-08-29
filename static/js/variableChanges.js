const variableChanges = {
  enabled: false,
  loadedModName: null,
  changesByMod: null,
  observer: null,
};

const VARIABLE_CHANGES_STYLE_ID = "variable-changes-style";
const VARIABLE_CHANGES_CSS = `
/* Question screen answer list */
.inner_window_question > .inner_inner_window {
  display: flex;
  flex-direction: column;
}

.inner_window_question > .inner_inner_window > * {
  flex: 0 0 auto;
}

#question_form {
  flex: 1 1 auto;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  scrollbar-width: thin;
}
`;

function syncVariableChangesStyles() {
  const existingStyle = document.getElementById(VARIABLE_CHANGES_STYLE_ID);

  if (variableChanges.enabled) {
    if (!existingStyle) {
      const style = document.createElement("style");
      style.id = VARIABLE_CHANGES_STYLE_ID;
      style.textContent = VARIABLE_CHANGES_CSS;
      document.head.appendChild(style);
    }
  } else {
    existingStyle?.remove();
  }
}

async function fetchModVariableChanges(modName) {
  const response = await fetch(`../static/json/variablechanges/${modName}.json`);
  // most mods have no custom variables, so 404 isn't failure
  return response.ok ? response.json() : null;
}

async function ensureVariableChangesLoaded() {
  const modName = new URLSearchParams(window.location.search).get("modName");
  if (variableChanges.loadedModName === modName) return;

  variableChanges.changesByMod = modName ? await fetchModVariableChanges(modName) : null;
  variableChanges.loadedModName = modName;
}

function resolveTicketChanges(changesByMod, modName) {
  const candidateChanges = changesByMod[modName]?.[campaignTrail_temp.candidate_id];
  if (!candidateChanges) return null;

  const ticketsForCandidate = Object.values(candidateChanges);

  return candidateChanges[campaignTrail_temp.running_mate_id]
    ?? (ticketsForCandidate.length === 1 ? ticketsForCandidate[0] : null);
}

function formatChange(change) {
  return `${change.var} ${change.change}`.replaceAll(" ", "\u00A0");
}

function renderChangeAnnotation(changes) {
  const text = changes?.length ? changes.map(formatChange).join(", ") : "no changes";

  return `<span class="vs-inline">${text}</span>`;
}

function findAnswerLabels() {
  return [...document.querySelectorAll("#question_form input[name='game_answers']")].map((input) => ({
    answerPk: input.value,
    labelElement: document.querySelector(`#question_form label[for="${CSS.escape(input.id)}"]`),
  }));
}

function clearAnnotations() {
  for (const annotation of document.querySelectorAll("#question_form .vs-inline")) {
    annotation.remove();
  }
}

function renderVariableChanges() {
  stopVariableObserver();
  clearAnnotations();

  if (!variableChanges.enabled) return;

  const ticketChanges = variableChanges.changesByMod
    ? resolveTicketChanges(variableChanges.changesByMod, variableChanges.loadedModName)
    : null;

  if (ticketChanges) {
    for (const { answerPk, labelElement } of findAnswerLabels()) {
      const annotation = renderChangeAnnotation(ticketChanges[answerPk]);
      labelElement?.insertAdjacentHTML("beforeend", annotation);
    }
  }

  startVariableObserver();
}

// watcher for question form
function startVariableObserver() {
  const gameWindow = document.getElementById("game_window");
  if (!gameWindow) return;

  variableChanges.observer = new MutationObserver(renderVariableChanges);
  variableChanges.observer.observe(gameWindow, { childList: true, subtree: true });
}

function stopVariableObserver() {
  if (!variableChanges.observer) return;

  variableChanges.observer.disconnect();
  variableChanges.observer = null;
}

function syncVariableChangesButton() {
  const button = document.getElementById("variableChangesButton");
  button.setAttribute("aria-pressed", String(variableChanges.enabled));
  button.textContent = variableChanges.enabled ? "Hide Variable Changes" : "Variable Changes";
}

async function toggleVariableChanges() {
  const enabling = !variableChanges.enabled;
  if (enabling) await ensureVariableChangesLoaded();

  variableChanges.enabled = enabling;
  syncVariableChangesButton();
  syncVariableChangesStyles();
  renderVariableChanges();
}