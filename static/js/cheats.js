let cheatsActive = false;

// Most of this benefit checker stuff is adapted from NCT. Thanks!
const candidateCache = new Map();
const stateCache = new Map();
const issueCache = new Map();
const answerCache = new Map();

function getCachedCandidate(id) {
  if (id == null) return ["", "Unknown"];
  if (!candidateCache.has(id)) {
    candidateCache.set(id, typeof findCandidate !== "undefined" ? findCandidate(id) : ["", "Unknown"]);
  }
  return candidateCache.get(id);
}

function getCachedState(id) {
  if (id == null) return ["", "Unknown"];
  if (!stateCache.has(id)) {
    stateCache.set(id, typeof findState !== "undefined" ? findState(id) : ["", "Unknown"]);
  }
  return stateCache.get(id);
}

function getCachedIssue(id) {
  if (id == null) return ["", "Unknown"];
  if (!issueCache.has(id)) {
    issueCache.set(id, typeof findIssue !== "undefined" ? findIssue(id) : ["", "Unknown"]);
  }
  return issueCache.get(id);
}

function getCachedAnswer(id) {
  if (id == null) return ["", "Unknown"];
  if (!answerCache.has(id)) {
    answerCache.set(id, typeof findAnswer !== "undefined" ? findAnswer(id) : ["", "Unknown"]);
  }
  return answerCache.get(id);
}

// fast lookup index for answer effects
let _answerEffectsIndex = null;
let _answerFeedbackIndex = null;

function buildAnswerEffectsIndex() {
  _answerEffectsIndex = new Map();
  _answerFeedbackIndex = new Map();

  const pushEffects = (type, arr) => {
    if (!Array.isArray(arr)) return;
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      const ans = item?.fields?.answer;
      if (ans == null) continue;
      if (!_answerEffectsIndex.has(ans)) {
        _answerEffectsIndex.set(ans, []);
      }
      _answerEffectsIndex.get(ans).push([type, item]);
    }
  };

  try {
    pushEffects("global", campaignTrail_temp?.answer_score_global_json);
    pushEffects("state", campaignTrail_temp?.answer_score_state_json);
    pushEffects("issue", campaignTrail_temp?.answer_score_issue_json);

    const feedbackArr = campaignTrail_temp?.answer_feedback_json;
    if (Array.isArray(feedbackArr)) {
      for (let i = 0; i < feedbackArr.length; i++) {
        const item = feedbackArr[i];
        const ans = item?.fields?.answer;
        if (ans == null) continue;
        if (!_answerFeedbackIndex.has(ans)) {
          _answerFeedbackIndex.set(ans, []);
        }
        _answerFeedbackIndex.get(ans).push(item.fields);
      }
    }
  } catch (_) {
    // leave index null on failure; benefitCheck will fall back to scanning if needed
  }
}

function benefitCheck(inputElement) {
  if (!inputElement) return "";
  const answerid = Number(inputElement.value);
  let effects = [];

  if (_answerEffectsIndex === null) {
    // build once on first use
    buildAnswerEffectsIndex();
  }

  if (_answerEffectsIndex && _answerEffectsIndex.has(answerid)) {
    effects = _answerEffectsIndex.get(answerid);
  } else {
    // fallback: scan arrays if index not available
    const globalArr = campaignTrail_temp?.answer_score_global_json || [];
    for (let i = 0; i < globalArr.length; i++) {
      if (globalArr[i].fields.answer === answerid) effects.push(["global", globalArr[i]]);
    }
    const stateArr = campaignTrail_temp?.answer_score_state_json || [];
    for (let i = 0; i < stateArr.length; i++) {
      if (stateArr[i].fields.answer === answerid) effects.push(["state", stateArr[i]]);
    }
    const issueArr = campaignTrail_temp?.answer_score_issue_json || [];
    for (let i = 0; i < issueArr.length; i++) {
      if (issueArr[i].fields.answer === answerid) effects.push(["issue", issueArr[i]]);
    }
  }

  let mods = "";
  const candidateId = campaignTrail_temp?.candidate_id;

  for (let i = 0; i < effects.length; i++) {
    const type = effects[i][0];
    const data = effects[i][1].fields;

    if (type === "global") {
      if (data.candidate && data.candidate !== candidateId) continue;
      const name = getCachedCandidate(data.candidate)[1];
      const name2 = getCachedCandidate(data.affected_candidate)[1];
      mods += `<br><em>Global:</em> Affects ${name2} for ${name} by ${data.global_multiplier}`;
    } else if (type === "issue") {
      if (data.candidate && data.candidate !== candidateId && data.tag !== 'STATE') continue;
      const name = getCachedIssue(data.issue)[1];
      const target = (data.tag === 'STATE')
        ? getCachedState(data.state)[1]
        : getCachedCandidate(data.candidate || candidateId)[1];
      mods += `<br><em>Issue:</em> Affects ${target}'s stance on ${name} by ${data.issue_score} with an importance of ${data.issue_importance}`;
    } else if (type === "state") {
      if (data.candidate && data.candidate !== candidateId) continue;
      const name1 = getCachedState(data.state)[1];
      const test5 = getCachedCandidate(data.affected_candidate)[1];
      const test6 = getCachedCandidate(data.candidate)[1];
      mods += `<br><em>State:</em> Affects ${test5} for ${test6} in ${name1} by ${data.state_multiplier}`;
    }
  }

  let answerfeedback = "";
  if (_answerFeedbackIndex && _answerFeedbackIndex.has(answerid)) {
    const feedbacks = _answerFeedbackIndex.get(answerid);
    for (let i = 0; i < feedbacks.length; i++) {
      const fb = feedbacks[i];
      if (fb.candidate && fb.candidate !== candidateId) continue;
      answerfeedback = `<b>${fb.answer_feedback}</b>`;
      break;
    }
  } else {
    // fallback scan
    const feedbackArr = campaignTrail_temp?.answer_feedback_json || [];
    for (let i = 0; i < feedbackArr.length; i++) {
      const feedback = feedbackArr[i].fields;
      if (answerid === feedback.answer) {
        if (feedback.candidate && feedback.candidate !== candidateId) continue;
        answerfeedback = `<b>${feedback.answer_feedback}</b>`;
        break;
      }
    }
  }

  const answerLookup = getCachedAnswer(answerid);
  const answerText = answerLookup ? answerLookup[1] : "Unknown";

  return `<p><b>Answer: </b>'${answerText}'<br>Feedback: ${answerfeedback}<br>${mods}</p><br><br>`;
}

let benefitCheckAlreadyActivated = false;
let benefitCheckerEnabled = false;

function activateBenefitCheck() {
  if (benefitCheckAlreadyActivated) {
    // ensure it's turned on and observing if re-invoked
    benefitCheckerEnabled = true;
    showBenefitChecker();
    startBenefitObserver();
    // render once immediately in case the DOM is already ready
    try { benefitChecker(); } catch (_) { }
    return;
  }
  benefitCheckAlreadyActivated = true;
  cheatsActive = true;
  const benefitWindow = document.getElementById("benefitwindow");
  if (benefitWindow) benefitWindow.style.display = "block";
  const showBtn = document.getElementById("showBenefitCheckButton");
  if (showBtn) showBtn.style.display = "inline-block";
  benefitCheckerEnabled = true;
  startBenefitObserver();
  // render once immediately to populate the window
  try { benefitChecker(); } catch (_) { }
}

let cheatMenuAlreadyActivated = false;
function activateCheatMenu() {
  if (cheatMenuAlreadyActivated) return;

  const menu = document.getElementById("cheatMenu");
  if (menu) menu.style.display = "inline-block";
  
  cheatMenuAlreadyActivated = true;
  cheatsActive = true;

  const difficultySlider = document.getElementById("difficultySlider");
  const difficultyValue = document.getElementById("difficultyValue");

  if (difficultySlider && difficultyValue) {
    difficultySlider.value = campaignTrail_temp.difficulty_level_multiplier;
    difficultyValue.value = difficultySlider.value;

    difficultySlider.oninput = function () {
      difficultyValue.value = this.value;
      campaignTrail_temp.difficulty_level_multiplier = Number.parseFloat(this.value);
    };

    difficultyValue.oninput = function () {
      difficultySlider.value = this.value;
      campaignTrail_temp.difficulty_level_multiplier = Number.parseFloat(this.value);
    };
  }
}

async function benefitChecker() {
  try {
    const inputs = document.querySelectorAll("#question_form input[name='game_answers']");
    if (inputs.length === 0) return;

    let content = "";
    for (let v = 0; v < inputs.length; v++) {
      content += benefitCheck(inputs[v]);
    }

    content += "<br>Benefit Checker code partially adapted from NCT";

    const benefitContent = document.getElementById("benefitcontent");
    if (benefitContent) benefitContent.innerHTML = content;
  } catch (err) {
    console.error("Benefit checker rendering error:", err);
  }
}

function hideBenefitChecker() {
  const benefitWindow = document.getElementById("benefitwindow");
  if (benefitWindow) benefitWindow.style.display = "none";
  stopBenefitObserver();
}

function showBenefitChecker() {
  const benefitWindow = document.getElementById("benefitwindow");
  if (benefitWindow) benefitWindow.style.display = "block";
  if (benefitCheckerEnabled) startBenefitObserver();
  try { benefitChecker(); } catch (_) { }
}

const targetNode = document.getElementById("game_window");
const config = { attributes: true, childList: true, subtree: true };

let benefitObserver = null;
let benefitRenderScheduled = false;

function renderBenefitChecker(mutationList, observer) {
  if (!benefitCheckerEnabled) return;
  const benefitWindow = document.getElementById("benefitwindow");
  if (!benefitWindow || benefitWindow.style.display === "none") return;
  if (benefitRenderScheduled) return;

  benefitRenderScheduled = true;
  requestAnimationFrame(() => {
    benefitRenderScheduled = false;
    benefitChecker();
  });
}

function startBenefitObserver() {
  if (benefitObserver || !targetNode) return;
  benefitObserver = new MutationObserver(renderBenefitChecker);
  benefitObserver.observe(targetNode, config);
}

function stopBenefitObserver() {
  if (!benefitObserver) return;
  benefitObserver.disconnect();
  benefitObserver = null;
}

// https://www.w3schools.com/howto/howto_js_draggable.asp

// Make the DIV element draggable:
(() => {
  const bw = document.getElementById("benefitwindow");
  if (bw) dragElement(bw);
})();

function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  const header = document.getElementById(elmnt.id + "header");

  // if present, the header is where you move the DIV from:
  if (header) {
    header.onmousedown = dragMouseDown;
    header.ontouchstart = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
    elmnt.ontouchstart = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    //e.preventDefault();
    // get the mouse cursor position at startup:
    const clientX = e.clientX ?? e.touches?.[0]?.clientX;
    const clientY = e.clientY ?? e.touches?.[0]?.clientY;

    pos3 = clientX;
    pos4 = clientY;

    document.onmouseup = closeDragElement;
    document.ontouchend = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    document.addEventListener("touchmove", elementDrag, { passive: false });

    // console.log(pos3, pos4)
  }

  function elementDrag(e) {
    //e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    const clientX = e.clientX ?? e.touches?.[0]?.clientX;
    const clientY = e.clientY ?? e.touches?.[0]?.clientY;

    pos1 = pos3 - clientX;
    pos2 = pos4 - clientY;
    pos3 = clientX;
    pos4 = clientY;

    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement(e) {
    if (e.touches && e.touches.length > 0) return;
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    document.ontouchend = null;
    document.removeEventListener("touchmove", elementDrag);
  }
}

const answerSet = new Set();
const noAnswerSet = new Set();

function setupAutoplayInput(elementId, targetSet) {
  const inputEl = document.getElementById(elementId);
  if (!inputEl) return;

  inputEl.addEventListener("input", function (e) {
    targetSet.clear();
    const pks = e.target.value.split(/[\s,]+/).filter(Boolean);
    for (let i = 0; i < pks.length; i++) {
      targetSet.add(Number(pks[i]));
    }
  });
}

setupAutoplayInput("autoplayYes", answerSet);
setupAutoplayInput("autoplayNo", noAnswerSet);

function autoplay() {
  try {
    // immediately click map visit confirmations to keep autoplay flowing
    const confirm = document.getElementById("confirm_visit_button");
    if (confirm) {
      confirm.click();
      return;
    }

    // fetch all current radio choices directly from the form
    const inputs = document.querySelectorAll("#question_form input[name='game_answers']");
    if (inputs.length === 0) return;

    let clicked = false;

    // check preferred answer choices
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      const pk = Number(input.value);
      if (answerSet.has(pk)) {
        clickAndContinue(input);
        clicked = true;
        break;
      }
    }

    // check fallback choices if no preferred answers exist
    if (!clicked) {
      for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const pk = Number(input.value);
        if (!noAnswerSet.has(pk)) {
          clickAndContinue(input);
          clicked = true;
          break;
        }
      }
    }

    if (!clicked) {
      console.warn("AUTOPLAY: No eligible answer matches criteria.");
    }

    // disable map visits on autoplay
    if (campaignTrail_temp.election_json?.[0]?.fields) {
      campaignTrail_temp.election_json[0].fields.has_visits = false;
    }
  } catch (err) {
    console.error("Autoplay runtime error:", err);
  }
}

function clickAndContinue(inputElement) {
  printAutoplayClickedMessage(inputElement);
  inputElement.click();

  const nextBtn = document.getElementById("answer_select_button");
  if (nextBtn) nextBtn.click();

  // instantly dismiss any feedback text screens
  const okBtn = document.getElementById("ok_button");
  if (okBtn) okBtn.click();
}

const answersPickedAutoplay = new Set();

function printAutoplayClickedMessage(object) {
  const answerDesc = getCachedAnswer(Number(object.value))[1];
  const qNum = (campaignTrail_temp.question_number + 1);
  const autoplayString = `Question ${qNum}) "${answerDesc}" is what AUTOPLAY chose!\n`;
  const autoplayStringToSave = `Question ${qNum}) "${answerDesc}"\n\n`;
  
  console.log(autoplayString);
  answersPickedAutoplay.add(autoplayStringToSave);
}

function printAllAnswersAutoplayPicked() {
  let finalString = "-- AUTOPLAY RESULTS --\n\n";
  const answers = Array.from(answersPickedAutoplay);

  for (let i = 0; i < answers.length; i++) {
    finalString += answers[i];
  }

  const autoplayTextBox = document.getElementById("autoplayAnswers");
  if (autoplayTextBox) {
    autoplayTextBox.style.display = "inline-block";
    autoplayTextBox.value = finalString;
  }
}

let autoplayCount = 0;
let autoplayHandle = null;
let autoplayWaitHandle = null;
let autoplayPending = false;
let autoplayRequested = false;

function isQuestionSetReady() {
  // if code 2 loaded or if there are real inputs on the page, consider ready
  try {
    if (typeof campaignTrail_temp !== "undefined" && campaignTrail_temp?.code2Loaded) return true;
    if (document.querySelectorAll("input.game_answers").length > 0) return true;
    const qf = document.querySelector("#question_form > form");
    if (qf && qf.children && qf.children.length > 0) return true;
  } catch (_) { }
  return false;
}

function enableAutoplayUI(active = false) {
  try {
    const indicator = document.getElementById("cheatIndicator");
    const menu = document.getElementById("autoplayMenu");
    if (indicator) {
      indicator.style.display = "block";
      indicator.dataset.autoplayActive = active ? "1" : "0";
      indicator.style.cursor = "pointer";
      if (active) {
        indicator.style.backgroundColor = "#ff9595";
        indicator.textContent = "AUTO-PLAY ENABLED";
      } else {
        indicator.style.backgroundColor = "#fff59d";
        indicator.textContent = "AUTO-PLAY PENDING...";
      }
    }
    if (menu) menu.style.display = "inline-block";
  } catch (_) { }
}

function disableAutoplayUI() {
  try {
    const indicator = document.getElementById("cheatIndicator");
    const menu = document.getElementById("autoplayMenu");
    if (indicator) {
      indicator.style.display = "block";
      indicator.style.backgroundColor = "#9e9e9e";
      indicator.style.cursor = "pointer";
      indicator.textContent = "AUTO-PLAY DISABLED";
      delete indicator.dataset.autoplayActive;
    }
    if (menu) menu.style.display = "none";
  } catch (_) { }
}

function stopAutoplay() {
  autoplayRequested = false;

  if (autoplayWaitHandle !== null) {
    clearInterval(autoplayWaitHandle);
    autoplayWaitHandle = null;
  }

  if (autoplayHandle !== null) {
    clearInterval(autoplayHandle);
    autoplayHandle = null;
  }

  autoplayPending = false;
  disableAutoplayUI();
}

function startAutoplayWhenReady() {
  if (autoplayRequested || autoplayPending || autoplayHandle !== null) return;

  autoplayPending = true;
  autoplayRequested = true;
  enableAutoplayUI(false);

  const loopIntervalMs = 50;

  if (isQuestionSetReady()) {
    setTimeout(() => {
      autoplayHandle = setInterval(autoplay, loopIntervalMs);
      autoplayPending = false;
      enableAutoplayUI(true);
    }, 1500);
    return;
  }

  autoplayWaitHandle = setInterval(() => {
    if (isQuestionSetReady()) {
      clearInterval(autoplayWaitHandle);
      autoplayWaitHandle = null;

      setTimeout(() => {
        autoplayHandle = setInterval(autoplay, loopIntervalMs);
        autoplayPending = false;
        enableAutoplayUI(true);
      }, 3000);
    }
  }, 100);
}

window.addEventListener("keydown", (e) => {
  if (!e.repeat) {
    if (e.key === "~" || e.key === "`") {
      activateBenefitCheck();
    } else if (e.key === "#") {
      activateCheatMenu();
    } else if (e.key === "@") {
      autoplayCount++;
      if (autoplayCount % 3 === 0) {
        startAutoplayWhenReady();
      }
    } else if (e.key === "$") {
      stopAutoplay();
    }
  }
});

// click handler for the autoplay indicator banner
document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "cheatIndicator") {
    if (autoplayRequested || autoplayHandle !== null) {
      stopAutoplay();
    } else {
      startAutoplayWhenReady();
    }
  }
});

function turnOffVisits() {
  if (campaignTrail_temp?.election_json?.[0]?.fields) {
    campaignTrail_temp.election_json[0].fields.has_visits = false;
    alert("Visits are now disabled");
  }
}

function skipQuestion(e) {
  e.preventDefault();
  const inputVal = document.getElementById("skipQuestionValue")?.value;
  const newQuestion = Number(inputVal);

  if (!newQuestion) {
    alert("Question number cannot be blank!");
    return;
  }

  if (newQuestion < 1) {
    alert("Question number cannot be < 1");
    return;
  }

  if (newQuestion > campaignTrail_temp.questions_json.length) {
    alert("Question number cannot be > amount of questions");
    return;
  }

  const cache = campaignTrail_temp.election_json[0].fields.has_visits;

  campaignTrail_temp.election_json[0].fields.has_visits = false;
  campaignTrail_temp.question_number = newQuestion - 2;
  campaignTrail_temp.skippingQuestion = true;
  document.getElementById("answer_select_button")?.click();
  campaignTrail_temp.election_json[0].fields.has_visits = cache;
}

function addSTSSMoney() {
  if (campaignTrail_temp?.shining_data?.balance != null) {
    campaignTrail_temp.shining_data.balance += 1000000;
  } else {
    alert("You must be playing Sea to Shining Sea mode to use this!");
  }
}