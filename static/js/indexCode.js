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
      banner: "../static/images/banners/tct_banner.webp",
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
    custom: {
      name: "Custom",
      background: "../static/images/backgrounds/tct_background.jpg",
      banner: "../static/images/banners/tct_banner.webp",
      coloring_window: "#727C96",
      coloring_container: "#222449",
      coloring_title: "#3A3360",
      text_col: "",
      window_url: "",
      background_cover: false,
      mod_override: false,
    },
  },
  selectedTheme: "",
  customThemes: {},
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
  const themePicker = document.getElementById("themePicker");
  const sel = themePicker.value;
  const customMenuButton = document.getElementById("open_custom_theme");

  // check if a specific custom theme was selected from the dropdown
  if (sel.startsWith("custom_")) {
    window.localStorage.setItem("theme", "custom");
    window.localStorage.setItem("active_custom_theme_id", sel);
    nct_stuff.selectedTheme = "custom";
    
    loadCustomTheme(sel);

    // make sure the "Add custom theme" button is visible
    if (!customMenuButton) {
      ensureCustomThemeButton();
    }

  } else if (sel === "custom") {
    // if "Custom" option selected, show button and optionally open modal
    window.localStorage.setItem("theme", "custom");
    nct_stuff.selectedTheme = "custom";
    
    if (!customMenuButton) {
      ensureCustomThemeButton();
    }
    
    // check if there's an active theme, otherwise open modal
    const activeThemeId = window.localStorage.getItem("active_custom_theme_id");
    if (!activeThemeId || !nct_stuff.customThemes[activeThemeId]) {
      // no active theme, open modal to create one
      setTimeout(() => openCustomThemeMenu(), 100);
    } else {
      loadCustomTheme(activeThemeId);
      // update the selected theme
      selectedTheme = nct_stuff.themes.custom;
      updateBannerAndStyling();
      updateDynamicStyle();
      updateGameHeaderContentAndStyling();
    }

  } else {
    window.localStorage.setItem("theme", sel);
    nct_stuff.selectedTheme = sel;
    selectedTheme = nct_stuff.themes[nct_stuff.selectedTheme];
    updateBannerAndStyling();
    updateDynamicStyle();
    updateGameHeaderContentAndStyling();

    // remove the custom theme button
    if (customMenuButton) {
      customMenuButton.parentElement.remove();
    }
  }
}

const susnum = Math.floor(Math.random() * 8 + 1);
const stassennum = Math.floor(Math.random() * 8 + 1);
const stassenyear = [
  "1944", "1948", "1952", "1964", "1968", "1980", "1984", "1988", "1992",
];

// keyboard shortcuts handler
const keyboardShortcutsHandler = (event) => {
  // only handle shortcuts if #game_window exists and has content
  const gameWindow = document.getElementById("game_window");
  if (!gameWindow || gameWindow.children.length === 0) {
    return;
  }

  // check if we should skip (e.g., if user is typing in an input field)
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
    return;
  }

  // opening menu - Start Game
  if (document.querySelector("#game_start") && document.getElementById("modloaddiv")?.style.display === "none") {
    if (event.key === "Enter" || event.key === "ArrowRight") {
      document.getElementById("game_start")?.click();
      return;
    }
  }

  // election year selection
  if (document.querySelector("#election_year_form")) {
    if (event.key === "Enter" || event.key === "ArrowRight") {
      document.getElementById("election_id_button")?.click();
      return;
    }

    const arrowKey = event.key === "ArrowUp" || event.key === "ArrowDown";
    if (arrowKey) {
      event.preventDefault();
      
      const electionSelect = document.getElementById("election_id");
      if (!electionSelect) return;
      
      const options = Array.from(electionSelect.children);
      const currentIndex = electionSelect.selectedIndex;
      let newIndex;
      
      if (event.key === "ArrowDown") {
        newIndex = currentIndex + 1 >= options.length ? 0 : currentIndex + 1;
      } else {
        newIndex = currentIndex - 1 < 0 ? options.length - 1 : currentIndex - 1;
      }
      
      electionSelect.selectedIndex = newIndex;
      electionSelect.dispatchEvent(new Event('change'));
    }
    return;
  }

  // candidate selection
  if (document.querySelector("#candidate_form")) {
    if (event.key === "Enter" || event.key === "ArrowRight") {
      document.getElementById("candidate_id_button")?.click();
      return;
    }
    if (event.key === "Backspace" || event.key === "ArrowLeft") {
      document.getElementById("candidate_id_back")?.click();
      return;
    }

    const arrowKey = event.key === "ArrowUp" || event.key === "ArrowDown";
    if (arrowKey) {
      event.preventDefault();
      
      const candidateSelect = document.getElementById("candidate_id");
      if (!candidateSelect) return;
      
      const options = Array.from(candidateSelect.children);
      const currentIndex = candidateSelect.selectedIndex;
      let newIndex;
      
      if (event.key === "ArrowDown") {
        newIndex = currentIndex + 1 >= options.length ? 0 : currentIndex + 1;
      } else {
        newIndex = currentIndex - 1 < 0 ? options.length - 1 : currentIndex - 1;
      }
      
      candidateSelect.selectedIndex = newIndex;
      candidateSelect.dispatchEvent(new Event('change'));
    }
    return;
  }

  // running mate selection
  if (document.querySelector("#running_mate_form")) {
    if (event.key === "Enter" || event.key === "ArrowRight") {
      document.getElementById("running_mate_id_button")?.click();
      return;
    }
    if (event.key === "Backspace" || event.key === "ArrowLeft") {
      document.getElementById("running_mate_id_back")?.click();
      return;
    }

    const arrowKey = event.key === "ArrowUp" || event.key === "ArrowDown";
    if (arrowKey) {
      event.preventDefault();
      
      const runningMateSelect = document.getElementById("running_mate_id");
      if (!runningMateSelect) return;
      
      const options = Array.from(runningMateSelect.children);
      const currentIndex = runningMateSelect.selectedIndex;
      let newIndex;
      
      if (event.key === "ArrowDown") {
        newIndex = currentIndex + 1 >= options.length ? 0 : currentIndex + 1;
      } else {
        newIndex = currentIndex - 1 < 0 ? options.length - 1 : currentIndex - 1;
      }
      
      runningMateSelect.selectedIndex = newIndex;
      runningMateSelect.dispatchEvent(new Event('change'));
    }
    return;
  }

  // difficulty/game mode selection
  if (document.querySelector("#opponent_selection_description_window")) {
    if (event.key === "Enter" || event.key === "ArrowRight") {
      document.getElementById("opponent_selection_id_button")?.click();
      return;
    }
    if (event.key === "Backspace" || event.key === "ArrowLeft") {
      document.getElementById("opponent_selection_id_back")?.click();
      return;
    }

    const arrowKey = event.key === "ArrowUp" || event.key === "ArrowDown";
    if (arrowKey) {
      event.preventDefault();
      
      const difficultySelect = document.getElementById("difficulty_level_id");
      if (!difficultySelect) return;
      
      const options = Array.from(difficultySelect.children);
      const currentIndex = difficultySelect.selectedIndex;
      let newIndex;
      
      if (event.key === "ArrowDown") {
        newIndex = currentIndex + 1 >= options.length ? 0 : currentIndex + 1;
      } else {
        newIndex = currentIndex - 1 < 0 ? options.length - 1 : currentIndex - 1;
      }
      
      difficultySelect.selectedIndex = newIndex;
      difficultySelect.dispatchEvent(new Event('change'));
    }
    return;
  }

  // question/answer selection
  if (document.querySelector("#question_form")) {
    const answers = Array.from(document.querySelectorAll(".game_answers"));
    
    if (event.key === "Enter" || event.key === "ArrowRight") {
      // if there's an OK button (feedback), click it
      const okButton = document.getElementById("ok_button");
      if (okButton) {
        okButton.click();
        return;
      }
      
      // otherwise, submit the answer
      document.getElementById("answer_select_button")?.click();
      return;
    }
    
    if (event.key === "ArrowLeft") {
      document.getElementById("view_electoral_map")?.click();
      return;
    }

    // don't handle other keys if feedback window is open
    if (document.getElementById("ok_button")) {
      return;
    }

    // handle number keys (1-5) to select answers
    const numKey = parseInt(event.key);
    if (numKey >= 1 && numKey <= answers.length) {
      event.preventDefault();
      answers[numKey - 1]?.click();
      return;
    }

    // handle arrow keys to navigate answers
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      
      let currentIndex = answers.findIndex(a => a.checked);
      
      if (event.key === "ArrowDown") {
        currentIndex = currentIndex + 1 >= answers.length ? 0 : currentIndex + 1;
      } else {
        currentIndex = currentIndex - 1 < 0 ? answers.length - 1 : currentIndex - 1;
      }
      
      answers[currentIndex]?.click();
    }
    return;
  }

  // map view
  if (document.getElementById("AdvisorButton")) {
    if (event.key === "Enter" || event.key === "ArrowRight") {
      document.getElementById("resume_questions_button")?.click();
    }
    return;
  }

  // election night
  if (document.getElementById("final_result_button")) {
    if (event.key === "Enter" || event.key === "ArrowRight") {
      // handle overlay buttons first
      const electionNightButton = document.querySelector("#election_night_buttons #ok_button");
      if (electionNightButton) {
        electionNightButton.click();
        return;
      }
      
      const winnerButton = document.querySelector("#winner_buttons #ok_button");
      if (winnerButton) {
        winnerButton.click();
        return;
      }
      
      document.getElementById("final_result_button")?.click();
    }
    return;
  }

  // final results screen navigation
  const finalMenuButtons = Array.from(document.querySelectorAll(".final_menu_button"));
  if (finalMenuButtons.length > 0) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      
      // exclude the "Play Again" button from navigation
      const navButtons = finalMenuButtons.slice(0, -1);
      const currentIndex = navButtons.findIndex(b => b.disabled);
      
      if (currentIndex === -1) return;
      
      let newIndex;
      if (event.key === "ArrowRight") {
        newIndex = currentIndex + 1 >= navButtons.length ? 0 : currentIndex + 1;
      } else {
        newIndex = currentIndex - 1 < 0 ? navButtons.length - 1 : currentIndex - 1;
      }
      
      navButtons[newIndex]?.click();
    }
    return;
  }
};

document.addEventListener("keydown", keyboardShortcutsHandler);

// DOM cache
const correctbannerpar = document.getElementsByClassName("game_header")[0];
var corrr = correctbannerpar.innerHTML;
var header = document.getElementById("header");
var gameHeader = document.getElementsByClassName("game_header")[0];
var gameWindow = document.getElementById("game_window");
var container = document.querySelector(".container");
const campaignTrailMusic = document.getElementById("campaigntrailmusic");
const dynamicStyle = document.createElement("style");
document.head.appendChild(dynamicStyle);

// Not removed because used by 2023 WOKE
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
  // classes for theme styling
  document.body.classList.remove('cts-theme', 'classic-theme');
  if (nct_stuff.selectedTheme === "classic") {
    document.body.classList.add('classic-theme');
  } else {
    document.body.classList.add('cts-theme');
  }
}

function updateStyling() {
  document.body.background = selectedTheme.background;
  gameWindow.style.backgroundColor = selectedTheme.coloring_window;
  container.style.backgroundColor = selectedTheme.coloring_container;
  gameHeader.style.backgroundColor = selectedTheme.coloring_title;
  if (selectedTheme.text_col != null) {
    container.style.color = selectedTheme.text_col;
    gameWindow.style.color = "black";
  }
  // classes for theme styling
  document.body.classList.remove('cts-theme', 'classic-theme');
  if (nct_stuff.selectedTheme === "classic") {
    document.body.classList.add('classic-theme');
  } else {
    document.body.classList.add('cts-theme');
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
  // skip updates while theme menu is open
  if (nct_stuff.pauseThemeUpdates) return;

  if (
    JSON.stringify(nct_stuff.custom_override) != JSON.stringify(selectedTheme) &&
    !nct_stuff.dynamicOverride &&
    nct_stuff.custom_override
  ) {
    nct_stuff.themes[nct_stuff.selectedTheme] = strCopy(nct_stuff.custom_override);
    selectedTheme = nct_stuff.themes[nct_stuff.selectedTheme];
    gameWindow.style.backgroundImage = "";
    updateStyling();
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
  corrr = gameHeader.innerHTML;
}, 100);

async function loadJSON(path, varr, callback = null) {
  const res = await fetch(path);
  if (!res.ok) return;
  const responseText = await res.text();
  
  // parse nested property path and assign
  const parts = varr.split('.');
  let obj = window;
  
  // navigate to the parent object
  for (let i = 0; i < parts.length - 1; i++) {
    obj = obj[parts[i]];
  }
  
  // assign to the final property
  obj[parts[parts.length - 1]] = JSON.parse(responseText.trim());
  
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

updateStyling();
