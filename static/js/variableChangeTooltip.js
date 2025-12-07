const variableChangeTooltip = {
  data: null,
  jsonLoaded: false,
  active: false,
  candidateId: null,
  runningMateId: null,
  listenersAttached: false,
  modName: null
}

function onAnswerEnter(e) {
  if (!variableChangeTooltip.active) return;

  const gameLabel = e.target.closest('label');
  if (!gameLabel) return;

  const hoverTooltip = document.getElementById("variableTooltip");

  // get input associated with answer text
  const answerInput = document.getElementById(gameLabel.getAttribute('for'));
  if (!answerInput) return;

  const answerPk = answerInput.value;
  const modName = variableChangeTooltip.modName;

  const changes = variableChangeTooltip.data?.[modName]?.[variableChangeTooltip.candidateId]?.[variableChangeTooltip.runningMateId]?.[answerPk];
  const variableChangeText = changes ? changes.map(c => `${c.var}: ${c.change}`).join(", "): "No variable changes";

  hoverTooltip.innerHTML = variableChangeText;
  hoverTooltip.style.display = 'block';

  // position hover window above the answer text
  const rect = e.target.getBoundingClientRect();
  hoverTooltip.style.left = `${rect.left + window.scrollX}px`;
  hoverTooltip.style.top = `${rect.top + window.scrollY - hoverTooltip.offsetHeight - 5}px`;
}

function onAnswerLeave() {
  document.getElementById("variableTooltip").style.display = "none";
}

async function activateVariableTooltip() {
  variableChangeTooltip.modName = new URLSearchParams(window.location.search).get("modName");

  variableChangeTooltip.active = !variableChangeTooltip.active;
  if (!variableChangeTooltip.active) return;

  if (!variableChangeTooltip.jsonLoaded) {
    try {
      const res = await fetch(`../static/json/variablechanges/${variableChangeTooltip.modName}.json`);
      variableChangeTooltip.data = await res.json();
      variableChangeTooltip.jsonLoaded = true;
    } catch (error) {
      return;
    }
  }

  // get candidate and running mate ids
  if (!variableChangeTooltip.candidateId || !variableChangeTooltip.runningMateId) {
    if (window.e?.candidate_id && window.e?.running_mate_id) {
      variableChangeTooltip.candidateId = e.candidate_id;
      variableChangeTooltip.runningMateId = e.running_mate_id;
    } else {
      return;
    }
  }

  // game_window used for delegation for new questions
  const gameWindow = document.getElementById("game_window");
  const hoverTooltip = document.getElementById("variableTooltip");
  if (!gameWindow || !hoverTooltip) return;

  if (!variableChangeTooltip.listenersAttached) {
    variableChangeTooltip.listenersAttached = true;

    gameWindow.addEventListener("mouseenter", onAnswerEnter, true);
    gameWindow.addEventListener("mouseleave", onAnswerLeave, true);
  }
}