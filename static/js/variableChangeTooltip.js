let answerTooltipData = {};
let jsonLoaded = false;
let answerTooltipActive = false;
let startingCandidateId = null;
let startingRunningMateId = null;

async function activateAnswerTooltip() {
  const modUrl = new URLSearchParams(window.location.search);
  const modName = modUrl.get("modName");

  answerTooltipActive = !answerTooltipActive;
  if (!answerTooltipActive) return;

  if (!jsonLoaded) {
    try {
      const res = await fetch(`../static/json/variablechanges/${modName}.json`);
      answerTooltipData = await res.json();
      jsonLoaded = true;
    } catch (error) {
      return;
    }
  }

  // get candidate and running mate ids
  if (!startingCandidateId || !startingRunningMateId) {
    if (window.e && e.candidate_id && e.running_mate_id) {
      startingCandidateId = e.candidate_id;
      startingRunningMateId = e.running_mate_id;
    } else {
      return;
    }
  }

  let answerHoverTooltip = document.getElementById('answerHoverTooltip');

  // game_window used for delegation for new questions
  const gameWindow = document.getElementById('game_window');
  if (!gameWindow) return;

  gameWindow.addEventListener('mouseover', (event) => {
    if (!answerTooltipActive) return;

    const gameLabel = event.target.closest('label');
    if (!gameLabel || !gameWindow.contains(gameLabel)) return;

    // get input associated with answer text
    const answerInput = document.getElementById(gameLabel.getAttribute('for'));
    if (!answerInput) return;

    const answerPk = answerInput.value;
    let answerTooltipText = "no variable changes";

    if (answerTooltipData[modName] && answerTooltipData[modName][startingCandidateId]
      && answerTooltipData[modName][startingCandidateId][startingRunningMateId]
      && answerTooltipData[modName][startingCandidateId][startingRunningMateId][answerPk]) {
      const changes = answerTooltipData[modName][startingCandidateId][startingRunningMateId][answerPk];
      answerTooltipText = changes.map(c => `${c.var} ${c.change}`).join(', ');
    }

    answerHoverTooltip.innerHTML = answerTooltipText;
    answerHoverTooltip.style.display = 'block';

    // position hover window above the answer text
    const rect = event.target.getBoundingClientRect();
    answerHoverTooltip.style.left = `${rect.left + window.scrollX}px`;
    answerHoverTooltip.style.top = `${rect.top + window.scrollY - answerHoverTooltip.offsetHeight - 5}px`;
  });

  gameWindow.addEventListener('mouseout', (event) => {
    const answerLabel = event.target.closest('label');
    if (!answerLabel) return;

    // ensure the mouse leaves the text and not child
    if (event.relatedTarget && answerLabel.contains(event.relatedTarget)) return;

    answerHoverTooltip.style.display = 'none';
  });
}