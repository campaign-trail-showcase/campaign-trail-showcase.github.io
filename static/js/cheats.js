let cheatsActive = false;

// Most of this benefit checker stuff is adapted from NCT. Thanks!

// fast lookup index for answer effects
let _answerEffectsIndex = null;
function buildAnswerEffectsIndex() {
  _answerEffectsIndex = new Map();

  const push = (type, arr) => {
    if (!Array.isArray(arr)) return;
    for (const item of arr) {
      const ans = item?.fields?.answer;
      if (ans == null) continue;
      if (!_answerEffectsIndex.has(ans)) _answerEffectsIndex.set(ans, []);
      _answerEffectsIndex.get(ans).push([type, item]);
    }
  };

  try {
    push("global", campaignTrail_temp?.answer_score_global_json);
    push("state", campaignTrail_temp?.answer_score_state_json);
    push("issue", campaignTrail_temp?.answer_score_issue_json);
  } catch (_) {
    // leave index null on failure; benefitCheck will fall back to scanning if needed
  }
}

function benefitCheck(objectid) {
  const object =
    document.getElementById("question_form").children[0].children[objectid * 3];
  const answerid = Number(object.value);
  let effects = [];
  if (_answerEffectsIndex == null) {
    // build once on first use
    buildAnswerEffectsIndex();
  }
  if (_answerEffectsIndex && _answerEffectsIndex.has(answerid)) {
    effects = _answerEffectsIndex.get(answerid);
  } else {
    // fallback: scan arrays if index not available
    for (const item of campaignTrail_temp.answer_score_global_json || []) {
      if (item.fields.answer == answerid) effects.push(["global", item]);
    }
    for (const item of campaignTrail_temp.answer_score_state_json || []) {
      if (item.fields.answer == answerid) effects.push(["state", item]);
    }
    for (const item of campaignTrail_temp.answer_score_issue_json || []) {
      if (item.fields.answer == answerid) effects.push(["issue", item]);
    }
  }

  let mods = "";
  for (const effect of effects) {
    const type = effect[0];
    const data = effect[1].fields;

    if (type === "global") {
      const name = findCandidate(data.candidate)[1];
      const name2 = findCandidate(data.affected_candidate)[1];
      mods += `<br><em>Global:</em> Affects ${name2} for ${name} by ${data.global_multiplier}`;
    } else if (type === "issue") {
      const name = findIssue(data.issue)[1];
      mods += `<br><em>Issue:</em> Affects ${name} by ${data.issue_score} with a importance of ${data.issue_importance}`;
    } else if (type === "state") {
      const name1 = findState(data.state)[1];
      const test5 = findCandidate(data.affected_candidate)[1];
      const test6 = findCandidate(data.candidate)[1];
      mods += `<br><em>State:</em> Affects ${test5} for ${test6} in ${name1} by ${data.state_multiplier}`;
    }
  }

  let answerfeedback = "";
  for (
    let index = 0;
    index < (campaignTrail_temp.answer_feedback_json?.length || 0);
    index++
  ) {
    if (
      answerid == campaignTrail_temp.answer_feedback_json[index].fields.answer
    ) {
      answerfeedback = `<b>${campaignTrail_temp.answer_feedback_json[index].fields.answer_feedback}</b>`;
      break;
    }
  }

  return `<p><b>Answer: </b>'${findAnswer(answerid)[1]}'<br>Feedback: ${answerfeedback}<br>${mods}</p><br><br>`;
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
  if (cheatMenuAlreadyActivated) {
    return;
  }

  document.getElementById("cheatMenu").style.display = "inline-block";
  cheatMenuAlreadyActivated = true;
  cheatsActive = true;

  const difficultySlider = document.getElementById("difficultySlider");
  const difficultyValue = document.getElementById("difficultyValue");

  difficultySlider.value = campaignTrail_temp.difficulty_level_multiplier;
  difficultyValue.value = difficultySlider.value;

  difficultySlider.oninput = function () {
    difficultyValue.value = this.value;
    campaignTrail_temp.difficulty_level_multiplier = Number.parseFloat(
      this.value,
    );
  };

  difficultyValue.oninput = function () {
    const cleaned = Number.parseFloat(this.value);
    difficultySlider.value = this.value;
    campaignTrail_temp.difficulty_level_multiplier = Number.parseFloat(
      this.value,
    );
  };
}

async function benefitChecker() {
  try {
    const formEl = document.querySelector("#question_form > form");
    if (!formEl) return;
    const questionlength = formEl.length;
    let content = "";
    for (let v = 0; v < questionlength; v++) {
      content += benefitCheck(v);
    }

    content += "<br>Benefit Checker code partially adapted from NCT";

    const benefitContent = document.getElementById("benefitcontent");
    if (benefitContent) benefitContent.innerHTML = content;
  } catch { }
}

function hideBenefitChecker() {
  const benefitWindow = document.getElementById("benefitwindow");
  benefitWindow.style.display = "none";
  stopBenefitObserver();
}

function showBenefitChecker() {
  const benefitWindow = document.getElementById("benefitwindow");
  benefitWindow.style.display = "block";
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
  if (benefitObserver) return;
  if (!targetNode) return;
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
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    document.getElementById(elmnt.id + "header").ontouchstart = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
    elmnt.ontouchstart = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    //e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX ?? e.touches[0].clientX;
    pos4 = e.clientY ?? e.touches[0].clientY;
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
    pos1 = pos3 - (e.clientX ?? e.touches[0].clientX);
    pos2 = pos4 - (e.clientY ?? e.touches[0].clientY);
    pos3 = e.clientX ?? e.touches[0].clientX;
    pos4 = e.clientY ?? e.touches[0].clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement(e) {
    if (e.touches && e.touches.length > 0) {
      return;
    }
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    document.ontouchend = null;
    document.removeEventListener("touchmove", elementDrag);
  }
}

let answerSet = new Set();
let noAnswerSet = new Set();

function setupAutoplayInput(elementId, targetSet) {
  document.getElementById(elementId).addEventListener("input", function (e) {
    targetSet.clear
    const pks = e.target.value.split(/[\s,]+/).filter(Boolean);
    for (const pk of pks) {
      targetSet.add(Number(pk));
    }
  });
}

setupAutoplayInput("autoplayYes", answerSet);
setupAutoplayInput("autoplayNo", noAnswerSet);

function autoplay() {
  try {
    const confirm = document.getElementById("confirm_visit_button");

    if (confirm) confirm.click();

    const questionLength =
      document.getElementById("question_form").children[0].children.length / 3;

    let clicked = false;
    for (let i = 0; i < questionLength; i++) {
      clicked = checkIfAnswer(i, answerSet);
      if (clicked) {
        break;
      }
    }

    if (!clicked) {
      for (let i = 0; i < questionLength; i++) {
        clicked = clickIfAvailable(i, noAnswerSet);

        if (clicked) {
          break;
        }
      }
    }

    if (clicked == false) {
      console.log("ERROR: Cannot find answer to click!");
    }

    campaignTrail_temp.election_json[0].fields.has_visits = false;
  } catch { }
}

let answersPickedAutoplay = new Set();

function printAutoplayClickedMessage(object) {
  const answerDesc = findAnswer(Number(object.value))[1];
  const autoplayString =
    "Question " +
    (campaignTrail_temp.question_number + 1) +
    ') "' +
    answerDesc +
    '" is what AUTOPLAY chose!\n';
  const autoplayStringToSave =
    "Question " +
    (campaignTrail_temp.question_number + 1) +
    ') "' +
    answerDesc +
    "\n\n";
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
  autoplayTextBox.style.display = "inline-block";
  autoplayTextBox.value = finalString;
}

function checkIfAnswer(i, answerSet) {
  const object =
    document.getElementById("question_form").children[0].children[i * 3];
  const pk = Number(object.value);
  if (answerSet.has(pk)) {
    printAutoplayClickedMessage(object);
    object.click();
    document.getElementById("answer_select_button").click();
    document.getElementById("ok_button").click();
    return true;
  }
  return false;
}

function clickIfAvailable(i, noAnswerSet) {
  const object =
    document.getElementById("question_form").children[0].children[i * 3];
  const pk = Number(object.value);
  if (!noAnswerSet.has(pk)) {
    printAutoplayClickedMessage(object);
    object.click();
    document.getElementById("answer_select_button").click();
    document.getElementById("ok_button").click();
    return true;
  }
  return false;
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

  if (autoplayWaitHandle != null) {
    clearInterval(autoplayWaitHandle);
    autoplayWaitHandle = null;
  }

  if (autoplayHandle != null) {
    clearInterval(autoplayHandle);
    autoplayHandle = null;
  }

  autoplayPending = false;
  disableAutoplayUI();
}

function startAutoplayWhenReady() {
  if (autoplayRequested || autoplayPending || autoplayHandle != null) return;

  autoplayPending = true;
  autoplayRequested = true;
  enableAutoplayUI(false);

  if (isQuestionSetReady()) {
    setTimeout(() => {
      autoplayHandle = setInterval(autoplay, 10);
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
        autoplayHandle = setInterval(autoplay, 10);
        autoplayPending = false;
        enableAutoplayUI(true);
      }, 3000);
    }
  }, 100);
}

window.addEventListener("keydown", (e) => {
  if (!e.repeat) {
    if (e.key == "~" || e.key == "`") {
      activateBenefitCheck();
    } else if (e.key == "#") {
      activateCheatMenu();
    } else if (e.key == "@") {
      autoplayCount++;
      if (autoplayCount % 3 == 0) {
        startAutoplayWhenReady();
      }
    } else if (e.key == "$") {
      stopAutoplay();
    }
  }
});

// click handler for the autoplay indicator banner
document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "cheatIndicator") {
    if (autoplayRequested || autoplayHandle != null) {
      stopAutoplay();
    } else {
      startAutoplayWhenReady();
    }
  }
});

function turnOffVisits() {
  campaignTrail_temp.election_json[0].fields.has_visits = false;
  alert("Visits are now disabled");
}

function skipQuestion(e) {
  e.preventDefault();
  const newQuestion = Number(
    document.getElementById("skipQuestionValue").value,
  );

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
  if (campaignTrail_temp.shining_data.balance) {
    campaignTrail_temp.shining_data.balance += 1000000;
  } else {
    alert("You must be playing Sea to Shining Sea mode to use this!");
  }
}
