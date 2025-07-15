const yearField = document.getElementById("year");
yearField.innerHTML = new Date().getFullYear();

let counter = 0;
let alt_counter = 0;
let initial = false;

// generic function to find an item by primary key (pk) in an array of objects
function findByPk(arr, pk, fieldName) {
  for (const item of arr) {
    if (item.pk == pk) {
      return [arr.indexOf(item), fieldName ? item.fields[fieldName] : item];
    }
  }
  return [null, null];
}

function findCandidate(pk) {
  return findByPk(campaignTrail_temp.candidate_json, pk, "first_name") && findByPk(campaignTrail_temp.candidate_json, pk, "last_name")
    ? [
      findByPk(campaignTrail_temp.candidate_json, pk)[0],
      findByPk(campaignTrail_temp.candidate_json, pk, "first_name")[1] +
      " " +
      findByPk(campaignTrail_temp.candidate_json, pk, "last_name")[1],
    ]
    : [null, ""];
}

function findAnswer(pk) {
  return findByPk(campaignTrail_temp.answers_json, pk, "description");
}

function findIssue(pk) {
  return findByPk(campaignTrail_temp.issues_json, pk, "name");
}

function findState(pk) {
  return findByPk(campaignTrail_temp.states_json, pk, "name");
}

function benefitCheck(objectid) {
  const object = document.getElementById("question_form").children[0].children[objectid * 3];
  const answerid = object.value;
  const effects = [];

  campaignTrail_temp.answer_score_global_json.forEach(item => {
    if (item.fields.answer == answerid) effects.push(["global", item]);
  });
  campaignTrail_temp.answer_score_state_json.forEach(item => {
    if (item.fields.answer == answerid) effects.push(["state", item]);
  });
  campaignTrail_temp.answer_score_issue_json.forEach(item => {
    if (item.fields.answer == answerid) effects.push(["issue", item]);
  });

  let mods = "";
  for (const [type, effect] of effects) {
    if (type === "global") {
      const affected = findCandidate(effect.fields.candidate);
      const affected1 = findCandidate(effect.fields.affected_candidate);
      mods += `<br><em>Global:</em> Affects ${affected1[1]} for ${affected[1]} by ${effect.fields.global_multiplier}`;
    }
    if (type === "issue") {
      const affected = findIssue(effect.fields.issue);
      mods += `<br><em>Issue:</em> Affects ${affected[1]} by ${effect.fields.issue_score} with a importance of ${effect.fields.issue_importance}`;
    }
    if (type === "state") {
      const affected = findState(effect.fields.state);
      const candidatething = findCandidate(effect.fields.affected_candidate);
      const candidatething2 = findCandidate(effect.fields.candidate);
      mods += `<br><em>State:</em> Affects ${candidatething[1]} for ${candidatething2[1]} in ${affected[1]} by ${effect.fields.state_multiplier}`;
    }
  }

  let answerfeedback = "";
  for (const item of campaignTrail_temp.answer_feedback_json) {
    if (answerid == item.fields.answer) {
      answerfeedback = `<b>${item.fields.answer_feedback}</b>`;
      break;
    }
  }
  if (!answerfeedback) {
    answerfeedback = "'";
  }
  return (
    `<font size="2"><b>Answer: </b>${findAnswer(answerid)[1]}<br>` +
    `Feedback: ${answerfeedback}<br>` +
    mods +
    "</font><br><br>"
  );
}

document.head = document.head || document.getElementsByTagName("head")[0];

function changeFavicon(src) {
  let link = document.createElement("link"),
    oldLink = document.getElementById("dynamic-favicon");
  link.id = "dynamic-favicon";
  link.rel = "shortcut icon";
  link.href = src;
  if (oldLink) document.head.removeChild(oldLink);
  document.head.appendChild(link);
}

changeFavicon("/static/showcase-fav.png");

function choose(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

window.choose = choose;

const nct_stuff = {
  dynamicOverride: false,
  themes: {
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
    },
  },
  selectedTheme: "",
};

var theme = window.localStorage.getItem("theme");
nct_stuff.selectedTheme = theme || "tct";
let selectedTheme = nct_stuff.themes[nct_stuff.selectedTheme];

const themePickerEl = document.getElementById("theme_picker");
themePickerEl.innerHTML = "<select id='themePicker' onchange='themePicked()'></select>";
const themePicker = document.getElementById("themePicker");
themePicker.innerHTML += `<option value='${nct_stuff.selectedTheme}'>${selectedTheme.name}</option>`;
for (const key in nct_stuff.themes) {
  if (nct_stuff.themes[key] !== selectedTheme) {
    themePicker.innerHTML += `<option value='${key}'>${nct_stuff.themes[key].name}</option>`;
  }
}

function themePicked() {
  const sel = document.getElementById("themePicker").value;
  window.localStorage.setItem("theme", sel);
  nct_stuff.selectedTheme = sel;
  selectedTheme = nct_stuff.themes[nct_stuff.selectedTheme];
  updateBannerAndStyling();
  updateDynamicStyle();
  updateGameHeaderContentAndStyling();
}

const susnum = Math.floor(Math.random() * 8 + 1);
const stassennum = Math.floor(Math.random() * 8 + 1);
const stassenyear = [
  "1944", "1948", "1952", "1964", "1968", "1980", "1984", "1988", "1992",
];

// DOM cache
const correctbannerpar = document.getElementsByClassName("game_header")[0];
var corrr = correctbannerpar.innerHTML;
const header = $("#header")[0];
const gameHeader = document.getElementsByClassName("game_header")[0];
const gameWindow = $("#game_window")[0];
const container = $(".container")[0];
const campaignTrailMusic = document.getElementById("campaigntrailmusic");
const dynamicStyle = document.createElement("style");
document.head.appendChild(dynamicStyle);

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

function updateInnerWindowsStyling() {
  ["inner_window_2", "inner_window_3", "inner_window_4", "inner_window_5"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.backgroundColor = selectedTheme.coloring_window;
  });
}

function updateGameHeaderContentAndStyling() {
  const gameHeader = $(".game_header")[0];
  if (gameHeader.innerHTML != corrr) gameHeader.innerHTML = corrr;
  gameHeader.style.backgroundColor = selectedTheme.coloring_title;
  updateInnerWindowsStyling();
}

function updateDynamicStyle() {
  if (nct_stuff.dynamicOverride) return;
  const background_size_css = selectedTheme.background_cover ? "background-size: cover" : "";
  const dynaStyle = `
    #header { src: ${selectedTheme.banner}; width: 1000px; }
    body { background: ${selectedTheme.background}; ${background_size_css}; }
    #game_window {
      background-color: ${selectedTheme.coloring_window};
      color: black;
      background-image: ${selectedTheme.window_url ? "url(" + selectedTheme.window_url + ")" : gameWindow.style.backgroundImage};
    }
    .container {
      background-color: ${selectedTheme.coloring_container};
      color: ${selectedTheme.text_col || "inherit"};
    }
    .game_header { background-color: ${selectedTheme.coloring_title}; }
    #inner_window_2 { background-color: ${selectedTheme.inner_window_2 ?? selectedTheme.coloring_window}; }
    #inner_window_3 { background-color: ${selectedTheme.inner_window_3 ?? selectedTheme.coloring_window}; }
    #inner_window_4 { background-color: ${selectedTheme.inner_window_4 ?? selectedTheme.coloring_window}; }
    #inner_window_5 { background-color: ${selectedTheme.inner_window_5 ?? selectedTheme.coloring_window}; }
    #main_content_area, #main_content_area_reading { color: ${selectedTheme.text_col || "inherit"}; }
    #main_content_area table, #menu_container { color: black; }
  `;
  if (dynamicStyle.innerHTML != dynaStyle) dynamicStyle.innerHTML = dynaStyle;
}

setInterval(() => {
  if (
    JSON.stringify(nct_stuff.custom_override) != JSON.stringify(selectedTheme) &&
    !nct_stuff.dynamicOverride &&
    nct_stuff.custom_override
  ) {
    nct_stuff.themes[nct_stuff.selectedTheme] = strCopy(nct_stuff.custom_override);
    selectedTheme = nct_stuff.themes[nct_stuff.selectedTheme];
    gameWindow.style.backgroundImage = "";
    updateBannerAndStyling();
  } else if (
    !nct_stuff.custom_override &&
    nct_stuff.selectedTheme == "custom" &&
    typeof modded !== "undefined" &&
    modded &&
    selectedTheme.window_url
  ) {
    selectedTheme.window_url = null;
  }
  const gameHeader = $(".game_header")[0];
  if (gameHeader.innerHTML != corrr) gameHeader.innerHTML = corrr;
  gameHeader.style.backgroundColor = selectedTheme.coloring_title;
  updateDynamicStyle();
}, 100);

async function loadJSON(path, varr, callback = null) {
  const res = await fetch(path);
  if (!res.ok) return;
  const responseText = await res.text();
  eval(varr + "=JSON.parse(" + JSON.stringify(responseText.trim()) + ")");
  if (callback) callback();
}

const strCopy = obj => JSON.parse(JSON.stringify(obj));

var campaignTrail_temp = {};
const ree = {};

campaignTrail_temp.election_json = {};
campaignTrail_temp.candidate_json = {};
loadJSON("../static/json/election.json", "campaignTrail_temp.election_json", () => {
  ree.election_json = strCopy(campaignTrail_temp.election_json);
});
loadJSON("../static/json/candidate.json", "campaignTrail_temp.candidate_json", () => {
  ree.candidate_json = strCopy(campaignTrail_temp.candidate_json);
});
loadJSON("../static/json/running_mate.json", "campaignTrail_temp.running_mate_json", () => {
  ree.running_mate_json = strCopy(campaignTrail_temp.running_mate_json);
});
loadJSON("../static/json/opponents.json", "campaignTrail_temp.opponents_default_json", () => {
  ree.opponents_default_json = strCopy(campaignTrail_temp.opponents_default_json);
});
loadJSON("../static/json/opponents.json", "campaignTrail_temp.opponents_weighted_json", () => {
  ree.opponents_weighted_json = strCopy(campaignTrail_temp.opponents_weighted_json);
});
loadJSON("../static/json/election_list.json", "campaignTrail_temp.temp_election_list", () => {
  ree.temp_election_list = strCopy(campaignTrail_temp.temp_election_list);
});

campaignTrail_temp.difficulty_level_json = JSON.parse(
  '[{"model": "campaign_trail.difficulty_level", "pk": 1, "fields": {"name": "Cakewalk", "multiplier": 1.33}}, {"model": "campaign_trail.difficulty_level", "pk": 2, "fields": {"name": "Very Easy", "multiplier": 1.2}}, {"model": "campaign_trail.difficulty_level", "pk": 3, "fields": {"name": "Easy", "multiplier": 1.1}}, {"model": "campaign_trail.difficulty_level", "pk": 4, "fields": {"name": "Normal", "multiplier": 0.97}}, {"model": "campaign_trail.difficulty_level", "pk": 5, "fields": {"name": "Hard", "multiplier": 0.95}}, {"model": "campaign_trail.difficulty_level", "pk": 6, "fields": {"name": "Impossible", "multiplier": 0.9}}, {"model": "campaign_trail.difficulty_level", "pk": 7, "fields": {"name": "Unthinkable", "multiplier": 0.83}}, {"model": "campaign_trail.difficulty_level", "pk": 8, "fields": {"name": "Blowout", "multiplier": 0.75}}, {"model": "campaign_trail.difficulty_level", "pk": 9, "fields": {"name": "Disaster", "multiplier": 0.68}}]'
);
campaignTrail_temp.global_parameter_json = JSON.parse(
  '[{"model": "campaign_trail.global_parameter", "pk": 1, "fields": {"vote_variable": 1.125, "max_swing": 0.12, "start_point": 0.94, "candidate_issue_weight": 10.0, "running_mate_issue_weight": 3.0, "issue_stance_1_max": -0.71, "issue_stance_2_max": -0.3, "issue_stance_3_max": -0.125, "issue_stance_4_max": 0.125, "issue_stance_5_max": 0.3, "issue_stance_6_max": 0.71, "global_variance": 0.01, "state_variance": 0.005, "question_count": 25, "default_map_color_hex": "#C9C9C9", "no_state_map_color_hex": "#999999"}}]'
);
campaignTrail_temp.candidate_dropout_json = JSON.parse(
  '[{"model": "campaign_trail.candidate_dropout", "pk": 1, "fields": {"candidate": 36, "affected_candidate": 18, "probability": 1.0}}]'
);
campaignTrail_temp.show_premium = true;
campaignTrail_temp.premier_ab_test_version = -1;
campaignTrail_temp.credits = "Dan Bryan";

updateBannerAndStyling();
