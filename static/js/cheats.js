let cheatsActive = false;

// Most of this benefit checker stuff is adapted from NCT. Thanks!

function benefitCheck(objectid) {
  object =
    document.getElementById("question_form").children[0].children[objectid * 3];
  answerid = object.value;
  effects = [];
  i = 0;
  for (i in campaignTrail_temp.answer_score_global_json) {
    if (
      campaignTrail_temp.answer_score_global_json[i].fields.answer == answerid
    ) {
      effects.push(["global", campaignTrail_temp.answer_score_global_json[i]]);
    }
  }
  i = 0;
  for (i in campaignTrail_temp.answer_score_state_json) {
    if (
      campaignTrail_temp.answer_score_state_json[i].fields.answer == answerid
    ) {
      effects.push(["state", campaignTrail_temp.answer_score_state_json[i]]);
    }
  }
  i = 0;
  for (i in campaignTrail_temp.answer_score_issue_json) {
    if (
      campaignTrail_temp.answer_score_issue_json[i].fields.answer == answerid
    ) {
      effects.push(["issue", campaignTrail_temp.answer_score_issue_json[i]]);
    }
  }
  i = 0;

  mods = "";
  for (_ = 0; _ < effects.length; _++) {
    if (effects[_][0] == "global") {
      affected = findCandidate(effects[_][1].fields.candidate);
      affected1 = findCandidate(effects[_][1].fields.affected_candidate);
      name = affected[1];
      name2 = affected1[1];
      multiplier = effects[_][1].fields.global_multiplier.toString();
      mods +=
        "<br><em>Global:</em> Affects " +
        name2 +
        " for " +
        name +
        " by " +
        multiplier;
    }
    if (effects[_][0] == "issue") {
      affected = findIssue(effects[_][1].fields.issue);
      name = affected[1];
      multiplier = effects[_][1].fields.issue_score.toString();
      multiplier1 = effects[_][1].fields.issue_importance.toString();
      mods +=
        "<br><em>Issue:</em> Affects " +
        name +
        " by " +
        multiplier +
        " with a importance of " +
        multiplier1;
    }
    if (effects[_][0] == "state") {
      affected = findState(effects[_][1].fields.state);
      candidatething = findCandidate(effects[_][1].fields.affected_candidate);
      candidatething2 = findCandidate(effects[_][1].fields.candidate);
      name1 = affected[1];
      test5 = candidatething[1];
      test6 = candidatething2[1];
      multiplier = effects[_][1].fields.state_multiplier.toString();
      mods +=
        "<br><em>State:</em> Affects " +
        test5 +
        " for " +
        test6 +
        " in " +
        name1 +
        " by " +
        multiplier;
    }
  }
  answerfeedback = "";
  for (
    let index = 0;
    index < campaignTrail_temp.answer_feedback_json.length - 1;
    index++
  ) {
    if (
      answerid == campaignTrail_temp.answer_feedback_json[index].fields.answer
    ) {
      answerfeedback =
        "<b>" +
        campaignTrail_temp.answer_feedback_json[index].fields.answer_feedback +
        "</b>";
      break;
    }
  }

  return (
    "<p><b>Answer: </b>" +
    findAnswer(answerid)[1] +
    "'<br>" +
    "Feedback: " +
    answerfeedback +
    "'<br>" +
    mods +
    "</p><br><br>"
  );
}

let benefitCheckAlreadyActivated = false;
function activateBenefitCheck() {
  if (benefitCheckAlreadyActivated) {
    return;
  }
  benefitCheckAlreadyActivated = true;
  cheatsActive = true;
  const benefitWindow = document.getElementById("benefitwindow");
  benefitWindow.style.display =
    benefitWindow.style.display != "none" ? "none" : "block";
  document.getElementById("showBenefitCheckButton").style.display =
    "inline-block";
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

function benefitChecker() {
  try {
    questionlength =
      document.getElementById("question_form").children[0].children.length / 3;
    let content = "";
    for (v = 0; v < questionlength; v++) {
      let benefitResult = benefitCheck(v);
      content += benefitResult;
    }

    content += "<br>Benefit Checker code partially adapted from NCT`";

    const benefitContent = document.getElementById("benefitcontent");
    benefitContent.innerHTML = content;
  } catch {}
}

function hideBenefitChecker() {
  const benefitWindow = document.getElementById("benefitwindow");
  benefitWindow.style.display = "none";
}

function showBenefitChecker() {
  const benefitWindow = document.getElementById("benefitwindow");
  benefitWindow.style.display = "block";
}

const targetNode = document.getElementById("game_window");
const config = { attributes: true, childList: true, subtree: true };

function onGameWindowChanged(mutationList, observer) {
  benefitChecker();
}

const observer = new MutationObserver(onGameWindowChanged);
observer.observe(targetNode, config);

// https://www.w3schools.com/howto/howto_js_draggable.asp

// Make the DIV element draggable:
dragElement(document.getElementById("benefitwindow"));

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

document.getElementById("autoplayYes").addEventListener("input", function (e) {
  const splits = e.target.value.split(" ");
  answerSet = new Set();
  for (let i = 0; i < splits.length; i++) {
    const pk = splits[i];
    if (pk) {
      answerSet.add(Number(pk));
    }
  }
});

document.getElementById("autoplayNo").addEventListener("input", function (e) {
  const splits = e.target.value.split(" ");
  noAnswerSet = new Set();
  for (let i = 0; i < splits.length; i++) {
    const pk = splits[i];
    if (pk) {
      noAnswerSet.add(Number(pk));
    }
  }
});

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
  } catch {}
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

window.addEventListener("keydown", (e) => {
  if (!e.repeat) {
    if (e.key == "~" || e.key == "`") {
      activateBenefitCheck();
    } else if (e.key == "#") {
      activateCheatMenu();
    } else if (e.key == "@") {
      autoplayCount++;
      if (autoplayCount == 3) {
        document.getElementById("cheatIndicator").style.display = "block";
        document.getElementById("autoplayMenu").style.display = "inline-block";
        setInterval(autoplay, 10);
      }
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
