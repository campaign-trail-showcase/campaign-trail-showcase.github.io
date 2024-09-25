const yearField = document.getElementById("year");
yearField.innerHTML = new Date().getFullYear();

let counter = 0;
let alt_counter = 0;
let initial = false;

function findCandidate(pk) {
  for (i in campaignTrail_temp.candidate_json) {
    if (campaignTrail_temp.candidate_json[i].pk == pk) {
      return [
        i,
        campaignTrail_temp.candidate_json[i].fields.first_name +
          " " +
          campaignTrail_temp.candidate_json[i].fields.last_name,
      ];
    }
  }
}

function findAnswer(pk) {
  for (i in campaignTrail_temp.answers_json) {
    if (campaignTrail_temp.answers_json[i].pk == pk) {
      return [i, campaignTrail_temp.answers_json[i].fields.description];
    }
  }
}

function findIssue(pk) {
  for (i in campaignTrail_temp.issues_json) {
    if (campaignTrail_temp.issues_json[i].pk == pk) {
      return [i, campaignTrail_temp.issues_json[i].fields.name];
    }
  }
}

function findState(pk) {
  for (i in campaignTrail_temp.states_json) {
    if (campaignTrail_temp.states_json[i].pk == pk) {
      return [i, campaignTrail_temp.states_json[i].fields.name];
    }
  }
}

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

  console.log(effects);
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
    '<font size="2"><b>Answer: </b>' +
    findAnswer(answerid)[1] +
    "'<br>" +
    "Feedback: " +
    answerfeedback +
    "'<br>" +
    mods +
    "</font><br><br>"
  );
}

document.head = document.head || document.getElementsByTagName("head")[0];

function changeFavicon(src) {
  var link = document.createElement("link"),
    oldLink = document.getElementById("dynamic-favicon");
  link.id = "dynamic-favicon";
  link.rel = "shortcut icon";
  link.href = src;
  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
}

changeFavicon("/static/showcase-fav.png");

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

nct_stuff = {};
nct_stuff.dynamicOverride = false;
nct_stuff.themes = {
  tct: {
    name: "Campaign Trail Showcase",
    background: "../static/images/backgrounds/tct_background.jpg",
    banner: "../static/images/banners/tct_banner.png",
    coloring_window: "#727C96",
    coloring_container: "#222449",
    coloring_title: "#3A3360",
    game_window: "A53545",
  },
  classic: {
    name: "Classic",
    background: "",
    banner: "../static/images/banners/banner_classic.png",
    coloring_window: "#E8FBFF",
    coloring_container: "",
    coloring_title: "",
    // Commenting out for now until we can do this without breaking mod themes
    //inner_window_2: "#E8FBFF",
    //inner_window_3: "#E8FBFF",
    //inner_window_4: "#E8FBFF"
  },
};

nct_stuff.selectedTheme = "";
theme = window.localStorage.getItem("theme");

if (theme == null) {
  nct_stuff.selectedTheme = "tct";
} else {
  nct_stuff.selectedTheme = theme;
}

var selectedTheme = nct_stuff.themes[nct_stuff.selectedTheme];

document.getElementById("theme_picker").innerHTML =
  "<select id='themePicker' onchange='themePicked()'></select>";
document.getElementById("themePicker").innerHTML +=
  "<option value='" +
  nct_stuff.selectedTheme +
  "'>" +
  nct_stuff.themes[nct_stuff.selectedTheme].name +
  "</option>";

for (key in nct_stuff.themes) {
  const theme = nct_stuff.themes[key];
  if (theme != selectedTheme) {
    document.getElementById("themePicker").innerHTML +=
      "<option value='" + key + "'>" + nct_stuff.themes[key].name + "</option>";
  }
}

function themePicked() {
  sel = document.getElementById("themePicker").value;
  window.localStorage.setItem("theme", sel);
  location.reload();
}

susnum = Math.floor(Math.random() * 8 + 1);
stassennum = Math.floor(Math.random() * 8 + 1);
stassenyear = [
  "1944",
  "1948",
  "1952",
  "1964",
  "1968",
  "1980",
  "1984",
  "1988",
  "1992",
];

// Caching frequently accessed elements and values
let correctbannerpar = document.getElementsByClassName("game_header")[0];
let corrr = correctbannerpar.innerHTML;
let header = $("#header")[0];
let gameHeader = document.getElementsByClassName("game_header")[0];
let gameWindow = $("#game_window")[0];
let container = $(".container")[0];
let campaignTrailMusic = document.getElementById("campaigntrailmusic");
// Create a style element
let dynamicStyle = document.createElement("style");
document.head.appendChild(dynamicStyle);

// Update banner and styling
function updateBannerAndStyling() {
  header.src = selectedTheme.banner;
  header.width = 1000;
  document.body.background = selectedTheme.background;
  gameWindow.style.backgroundColor = selectedTheme.coloring_window;
  container.style.backgroundColor = selectedTheme.coloring_container;
  gameHeader.style.backgroundColor = selectedTheme.coloring_title;

  if (selectedTheme.text_col != null) {
    container.style.color = selectedTheme.text_col;
    gameWindow.style.color = "black";
  }
}

// Update inner windows styling
function updateInnerWindowsStyling() {
  let innerWindow2 = document.getElementById("inner_window_2");
  let innerWindow3 = document.getElementById("inner_window_3");
  let innerWindow4 = document.getElementById("inner_window_4");
  let innerWindow5 = document.getElementById("inner_window_5");

  if (innerWindow2 != null) {
    innerWindow2.style.backgroundColor = selectedTheme.coloring_window;
  } else if (innerWindow3 != null) {
    innerWindow3.style.backgroundColor = selectedTheme.coloring_window;
  }

  if (innerWindow4 != null) {
    innerWindow4.style.backgroundColor = selectedTheme.coloring_window;
  }

  if (innerWindow5 != null) {
    innerWindow5.style.backgroundColor = selectedTheme.coloring_window;
  }
}

// Update game header content and styling
function updateGameHeaderContentAndStyling() {
  let gameHeader = $(".game_header")[0];
  if (gameHeader.innerHTML != corrr) {
    gameHeader.innerHTML = corrr;
  }
  gameHeader.style.backgroundColor = selectedTheme.coloring_title;
  updateInnerWindowsStyling();
}

// Update CSS rules in the style element
function updateDynamicStyle() {
  if (nct_stuff.dynamicOverride) {
    return;
  }
  let background_size_css = "";
  if (selectedTheme.background_cover) {
    background_size_css = "background-size: cover";
  }
  let dynaStyle = `
    #header {
        src: ${selectedTheme.banner};
        width: 1000px;
    }
    body {
        background: ${selectedTheme.background};
        ${background_size_css};
    }
    #game_window {
        background-color: ${selectedTheme.coloring_window};
        color: black;
        background-image: ${selectedTheme.window_url ? "url(" + selectedTheme.window_url + ")" : $("#game_window")[0].style.backgroundImage};
    }
    .container {
        background-color: ${selectedTheme.coloring_container};
        color: ${selectedTheme.text_col || "inherit"};
    }
    .game_header {
        background-color: ${selectedTheme.coloring_title};
    }
    #inner_window_2 {
        background-color: ${selectedTheme.inner_window_2 ?? selectedTheme.coloring_window};
    }
    #inner_window_3 {
        background-color: ${selectedTheme.inner_window_3 ?? selectedTheme.coloring_window};
    }
    #inner_window_4 {
        background-color: ${selectedTheme.inner_window_4 ?? selectedTheme.coloring_window};
    }
    #inner_window_5 {
        background-color: ${selectedTheme.inner_window_5 ?? selectedTheme.coloring_window};
    }
    #main_content_area {
        color: ${selectedTheme.text_col || "inherit"};
    }
    #main_content_area_reading {
        color: ${selectedTheme.text_col || "inherit"};
    }
    #main_content_area table {
        color: black;
    }
    #menu_container {
        color: black;
    }
    `;
  if (dynamicStyle.innerHTML != dynaStyle) {
    dynamicStyle.innerHTML = dynaStyle;
  }
}

// Update banner, styling, and game header on interval
setInterval(function () {
  if (
    JSON.stringify(nct_stuff.custom_override) !=
      JSON.stringify(selectedTheme) &&
    !nct_stuff.dynamicOverride &&
    nct_stuff.custom_override
  ) {
    nct_stuff.themes[nct_stuff.selectedTheme] = strCopy(
      nct_stuff.custom_override,
    );
    selectedTheme = nct_stuff.themes[nct_stuff.selectedTheme];
    $("#game_window")[0].style.backgroundImage = "";
    updateBannerAndStyling();
  } else if (
    !nct_stuff.custom_override &&
    nct_stuff.selectedTheme == "custom" &&
    modded &&
    selectedTheme.window_url
  ) {
    selectedTheme.window_url = null;
  }
  let gameHeader = $(".game_header")[0];
  if (gameHeader.innerHTML != corrr) {
    gameHeader.innerHTML = corrr;
  }
  gameHeader.style.backgroundColor = selectedTheme.coloring_title;
  updateDynamicStyle();

  //updateGameHeaderContentAndStyling();
}, 100);

async function loadJSON(path, varr, callback = null) {
  const res = await fetch(path);
  if (!res.ok) {
    return;
  }
  const responseText = await res.text();
  eval(varr + "=JSON.parse(" + JSON.stringify(responseText.trim()) + ")");
  if (callback !== null) {
    callback();
  }
}

strCopy = (toCopy) => {
  let copy = JSON.parse(JSON.stringify(toCopy));
  return copy;
};

var campaignTrail_temp = {};
ree = {};

campaignTrail_temp.election_json = {};
campaignTrail_temp.candidate_json = {};
loadJSON(
  "../static/json/election.json",
  "campaignTrail_temp.election_json",
  () => {
    ree.election_json = strCopy(campaignTrail_temp.election_json);
  },
);
loadJSON(
  "../static/json/candidate.json",
  "campaignTrail_temp.candidate_json",
  () => {
    ree.candidate_json = strCopy(campaignTrail_temp.candidate_json);
  },
);
loadJSON(
  "../static/json/running_mate.json",
  "campaignTrail_temp.running_mate_json",
  () => {
    ree.running_mate_json = strCopy(campaignTrail_temp.running_mate_json);
  },
);
loadJSON(
  "../static/json/opponents.json",
  "campaignTrail_temp.opponents_default_json",
  () => {
    ree.opponents_default_json = strCopy(
      campaignTrail_temp.opponents_default_json,
    );
  },
);
loadJSON(
  "../static/json/opponents.json",
  "campaignTrail_temp.opponents_weighted_json",
  () => {
    ree.opponents_weighted_json = strCopy(
      campaignTrail_temp.opponents_weighted_json,
    );
  },
);
loadJSON(
  "../static/json/election_list.json",
  "campaignTrail_temp.temp_election_list",
  () => {
    ree.temp_election_list = strCopy(campaignTrail_temp.temp_election_list);
  },
);

campaignTrail_temp.difficulty_level_json = JSON.parse(
  '[{"model": "campaign_trail.difficulty_level", "pk": 1, "fields": {"name": "Cakewalk", "multiplier": 1.33}}, {"model": "campaign_trail.difficulty_level", "pk": 2, "fields": {"name": "Very Easy", "multiplier": 1.2}}, {"model": "campaign_trail.difficulty_level", "pk": 3, "fields": {"name": "Easy", "multiplier": 1.1}}, {"model": "campaign_trail.difficulty_level", "pk": 4, "fields": {"name": "Normal", "multiplier": 0.97}}, {"model": "campaign_trail.difficulty_level", "pk": 5, "fields": {"name": "Hard", "multiplier": 0.95}}, {"model": "campaign_trail.difficulty_level", "pk": 6, "fields": {"name": "Impossible", "multiplier": 0.9}}, {"model": "campaign_trail.difficulty_level", "pk": 7, "fields": {"name": "Unthinkable", "multiplier": 0.83}}, {"model": "campaign_trail.difficulty_level", "pk": 8, "fields": {"name": "Blowout", "multiplier": 0.75}}, {"model": "campaign_trail.difficulty_level", "pk": 9, "fields": {"name": "Disaster", "multiplier": 0.68}}]',
);
campaignTrail_temp.global_parameter_json = JSON.parse(
  '[{"model": "campaign_trail.global_parameter", "pk": 1, "fields": {"vote_variable": 1.125, "max_swing": 0.12, "start_point": 0.94, "candidate_issue_weight": 10.0, "running_mate_issue_weight": 3.0, "issue_stance_1_max": -0.71, "issue_stance_2_max": -0.3, "issue_stance_3_max": -0.125, "issue_stance_4_max": 0.125, "issue_stance_5_max": 0.3, "issue_stance_6_max": 0.71, "global_variance": 0.01, "state_variance": 0.005, "question_count": 25, "default_map_color_hex": "#C9C9C9", "no_state_map_color_hex": "#999999"}}]',
);
campaignTrail_temp.candidate_dropout_json = JSON.parse(
  '[{"model": "campaign_trail.candidate_dropout", "pk": 1, "fields": {"candidate": 36, "affected_candidate": 18, "probability": 1.0}}]',
);
campaignTrail_temp.show_premium = true;
campaignTrail_temp.premier_ab_test_version = -1;
campaignTrail_temp.credits = "Dan Bryan";

updateBannerAndStyling();
