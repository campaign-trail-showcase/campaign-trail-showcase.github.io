const variableTooltip = {
  data: null,
  jsonLoaded: false,
  active: false,
  candidateId: null,
  runningMateId: null,
  listenersAttached: false,
  modName: null
}

function onAnswerEnter(e) {
  if (!variableTooltip.active) return;

  const gameLabel = e.target.closest('label');
  if (!gameLabel) return;

  const hoverTooltip = document.getElementById("answerHoverTooltip");

  // get input associated with answer text
  const answerInput = document.getElementById(gameLabel.getAttribute('for'));
  if (!answerInput) return;

  const answerPk = answerInput.value;
  const modName = variableTooltip.modName;

  const changes = variableTooltip.data?.[modName]?.[variableTooltip.candidateId]?.[variableTooltip.runningMateId]?.[answerPk];
  const variableChangeText = changes ? changes.map(c => `${c.var}: ${c.change}`).join(", "): "No variable changes";

  hoverTooltip.innerHTML = variableChangeText;
  hoverTooltip.style.display = 'block';

  // position hover window above the answer text
  const rect = e.target.getBoundingClientRect();
  hoverTooltip.style.left = `${rect.left + window.scrollX}px`;
  hoverTooltip.style.top = `${rect.top + window.scrollY - hoverTooltip.offsetHeight - 5}px`;
}

function onAnswerLeave() {
  document.getElementById("answerHoverTooltip").style.display = "none";
}

async function activateVariableTooltip() {
  variableTooltip.modName = new URLSearchParams(window.location.search).get("modName");

  variableTooltip.active = !variableTooltip.active;
  if (!variableTooltip.active) return;

  if (!variableTooltip.jsonLoaded) {
    try {
      const res = await fetch(`../static/json/variablechanges/${variableTooltip.modName}.json`);
      variableTooltip.data = await res.json();
      variableTooltip.jsonLoaded = true;
    } catch (error) {
      return;
    }
  }

  // get candidate and running mate ids
  if (!variableTooltip.candidateId || !variableTooltip.runningMateId) {
    if (window.e?.candidate_id && window.e?.running_mate_id) {
      variableTooltip.candidateId = e.candidate_id;
      variableTooltip.runningMateId = e.running_mate_id;
    } else {
      return;
    }
  }

  // game_window used for delegation for new questions
  const gameWindow = document.getElementById("game_window");
  const tooltip = document.getElementById("answerHoverTooltip");
  if (!gameWindow || !tooltip) return;

  if (!variableTooltip.listenersAttached) {
    variableTooltip.listenersAttached = true;

    gameWindow.addEventListener("mouseenter", onAnswerEnter, true);
    gameWindow.addEventListener("mouseleave", onAnswerLeave, true);
  }
}