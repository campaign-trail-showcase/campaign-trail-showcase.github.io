const yearField = document.getElementById("year");
if (yearField) {
  yearField.textContent = new Date().getFullYear();
}

let counter = 0;
let alt_counter = 0;
let initial = false;

// generic function to find an item by primary key (pk) in an array of objects
function findByPk(arr, pk, fieldName) {
  if (!Array.isArray(arr)) return [null, null];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item && item.pk == pk) {
      return [i, fieldName && item.fields ? item.fields[fieldName] : item];
    }
  }
  return [null, null];
}

function findCandidate(pk) {
  const [index, candidate] = findByPk(campaignTrail_temp?.candidate_json, pk);
  if (index !== null && candidate?.fields) {
    const { first_name = "", last_name = "" } = candidate.fields;
    return [index, `${first_name} ${last_name}`.trim()];
  }
  return [null, ""];
}

function findAnswer(pk) {
  return findByPk(campaignTrail_temp?.answers_json, pk, "description");
}

function findIssue(pk) {
  return findByPk(campaignTrail_temp?.issues_json, pk, "name");
}

function findState(pk) {
  return findByPk(campaignTrail_temp?.states_json, pk, "name");
}

function changeFavicon(src) {
  let link = document.getElementById("dynamic-favicon");
  if (!link) {
    link = document.createElement("link");
    link.id = "dynamic-favicon";
    link.rel = "shortcut icon";
    document.head.appendChild(link);
  }
  if (link.href !== src) {
    link.href = src;
  }
}

changeFavicon("/static/showcase-fav.png");

function choose(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}
window.choose = choose;

// deep clone
const strCopy = (obj) => {
  if (typeof structuredClone === "function") {
    try {
      return structuredClone(obj);
    } catch {
      /* fallback for non-cloneable objects */
    }
  }
  return JSON.parse(JSON.stringify(obj));
};

// theme config
const nct_stuff = {
  dynamicOverride: false,
  pauseThemeUpdates: false,
  custom_override: null,
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
if (theme && nct_stuff.themes[theme]) {
  nct_stuff.selectedTheme = theme;
} else if (theme && theme.startsWith("custom")) {
  nct_stuff.selectedTheme = "custom";
} else {
  nct_stuff.selectedTheme = "tct";
}
var selectedTheme = nct_stuff.themes[nct_stuff.selectedTheme];

// render theme picker
const themePickerEl = document.getElementById("theme_picker");
if (themePickerEl) {
  themePickerEl.innerHTML = `<label for="themePicker" class="sr-only">Theme Picker</label>
                             <select id="themePicker" onchange="themePicked()"></select>`;
  const themePicker = document.getElementById("themePicker");
  const options = [`<option value='${nct_stuff.selectedTheme}'>${selectedTheme.name}</option>`];
  for (const key in nct_stuff.themes) {
    if (nct_stuff.themes[key] !== selectedTheme) {
      options.push(`<option value='${key}'>${nct_stuff.themes[key].name}</option>`);
    }
  }
  themePicker.innerHTML = options.join("");
}

function themePicked() {
  const themePicker = document.getElementById("themePicker");
  if (!themePicker) return;
  const sel = themePicker.value;
  const customMenuButton = document.getElementById("open_custom_theme");

  if (sel.startsWith("custom_")) {
    window.localStorage.setItem("theme", "custom");
    window.localStorage.setItem("active_custom_theme_id", sel);
    nct_stuff.selectedTheme = "custom";

    if (typeof loadCustomTheme === "function") loadCustomTheme(sel);
    if (!customMenuButton && typeof ensureCustomThemeButton === "function") {
      ensureCustomThemeButton();
    }
  } else if (sel === "custom") {
    window.localStorage.setItem("theme", "custom");
    nct_stuff.selectedTheme = "custom";

    if (!customMenuButton && typeof ensureCustomThemeButton === "function") {
      ensureCustomThemeButton();
    }

    const activeThemeId = window.localStorage.getItem("active_custom_theme_id");
    if (!activeThemeId || !nct_stuff.customThemes[activeThemeId]) {
      if (typeof openCustomThemeMenu === "function") {
        setTimeout(() => openCustomThemeMenu(), 100);
      }
    } else {
      if (typeof loadCustomTheme === "function") loadCustomTheme(activeThemeId);
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

    if (customMenuButton?.parentElement) {
      customMenuButton.parentElement.remove();
    }
  }
}

// easter eggs
// these are likely NCT leftovers and don't do anything here.
// @todo: check if they're used in a mod there. if not remove it
const susnum = Math.floor(Math.random() * 8 + 1);
const stassennum = Math.floor(Math.random() * 8 + 1);
const stassenyear = ["1944", "1948", "1952", "1964", "1968", "1980", "1984", "1988", "1992"];

// keyboard shortcuts
const handleSelectNavigation = (event, selectId) => {
  const select = document.getElementById(selectId);
  if (!select || !select.options.length) return;

  event.preventDefault();
  const optionsLen = select.options.length;
  let newIndex = select.selectedIndex;

  if (event.key === "ArrowDown") {
    newIndex = (newIndex + 1) % optionsLen;
  } else {
    newIndex = (newIndex - 1 + optionsLen) % optionsLen;
  }

  select.selectedIndex = newIndex;
  select.dispatchEvent(new Event("change"));
};

const keyboardShortcutsHandler = (event) => {
  const key = event?.key;
  if (!key || (typeof key === "string" && key.startsWith("F")) || event.ctrlKey || event.metaKey || event.altKey) {
    return;
  }

  const tgt = event.target;
  if (tgt && (tgt.tagName === "INPUT" || tgt.tagName === "TEXTAREA")) {
    return;
  }

  const gameWindow = document.getElementById("game_window");
  if (!gameWindow || gameWindow.children.length === 0) return;

  const isEnterOrRight = key === "Enter" || key === "ArrowRight";
  const isBackOrLeft = key === "Backspace" || key === "ArrowLeft";
  const isArrowKey = key === "ArrowUp" || key === "ArrowDown";

  // game start
  if (document.querySelector("#game_start") && document.getElementById("modloaddiv")?.style.display === "none") {
    if (isEnterOrRight) {
      event.preventDefault();
      document.getElementById("game_start")?.click();
      return;
    }
  }

  // election year selection
  if (document.querySelector("#election_year_form")) {
    if (isEnterOrRight) {
      event.preventDefault();
      document.getElementById("election_id_button")?.click();
      return;
    }
    if (isArrowKey) {
      handleSelectNavigation(event, "election_id");
      return;
    }
  }

  // candidate selection
  if (document.querySelector("#candidate_form")) {
    if (isEnterOrRight) {
      event.preventDefault();
      document.getElementById("candidate_id_button")?.click();
      return;
    }
    if (isBackOrLeft) {
      event.preventDefault();
      document.getElementById("candidate_id_back")?.click();
      return;
    }
    if (isArrowKey) {
      handleSelectNavigation(event, "candidate_id");
      return;
    }
  }

  // running mate selection
  if (document.querySelector("#running_mate_form")) {
    if (isEnterOrRight) {
      event.preventDefault();
      document.getElementById("running_mate_id_button")?.click();
      return;
    }
    if (isBackOrLeft) {
      event.preventDefault();
      document.getElementById("running_mate_id_back")?.click();
      return;
    }
    if (isArrowKey) {
      handleSelectNavigation(event, "running_mate_id");
      return;
    }
  }

  // opponent/difficulty selection
  if (document.querySelector("#opponent_selection_description_window")) {
    if (isEnterOrRight) {
      event.preventDefault();
      document.getElementById("opponent_selection_id_button")?.click();
      return;
    }
    if (isBackOrLeft) {
      event.preventDefault();
      document.getElementById("opponent_selection_id_back")?.click();
      return;
    }
    if (isArrowKey) {
      handleSelectNavigation(event, "difficulty_level_id");
      return;
    }
  }

  // question form
  if (document.querySelector("#question_form")) {
    const answers = document.querySelectorAll(".game_answers");

    if (isEnterOrRight) {
      event.preventDefault();
      const okButton = document.getElementById("ok_button");
      if (okButton) {
        okButton.click();
      } else {
        document.getElementById("answer_select_button")?.click();
      }
      return;
    }

    if (key === "ArrowLeft") {
      event.preventDefault();
      document.getElementById("view_electoral_map")?.click();
      return;
    }

    if (document.getElementById("ok_button")) return;

    if (/^[1-9]$/.test(key)) {
      const idx = Number(key) - 1;
      if (idx < answers.length) {
        event.preventDefault();
        answers[idx]?.click();
        return;
      }
    }

    if (isArrowKey && answers.length > 0) {
      event.preventDefault();
      let currentIndex = -1;
      for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
          currentIndex = i;
          break;
        }
      }
      let newIndex = key === "ArrowDown"
        ? (currentIndex + 1 >= answers.length ? 0 : currentIndex + 1)
        : (currentIndex - 1 < 0 ? answers.length - 1 : currentIndex - 1);

      answers[newIndex]?.click();
    }
    return;
  }

  // map view
  if (document.getElementById("AdvisorButton")) {
    if (isEnterOrRight) {
      event.preventDefault();
      document.getElementById("resume_questions_button")?.click();
    }
    return;
  }

  // election night
  if (document.getElementById("final_result_button")) {
    if (isEnterOrRight) {
      event.preventDefault();
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

  // final results screen
  const finalMenuButtons = document.querySelectorAll(".final_menu_button");
  if (finalMenuButtons.length > 0) {
    if (key === "ArrowLeft" || key === "ArrowRight") {
      event.preventDefault();
      // exclude the "Play Again" button from navigation
      const navButtons = Array.from(finalMenuButtons).slice(0, -1);
      const currentIndex = navButtons.findIndex((b) => b.disabled);
      if (currentIndex === -1) return;

      const newIndex = key === "ArrowRight"
        ? (currentIndex + 1 >= navButtons.length ? 0 : currentIndex + 1)
        : (currentIndex - 1 < 0 ? navButtons.length - 1 : currentIndex - 1);

      navButtons[newIndex]?.click();
    }
  }
};

document.addEventListener("keydown", keyboardShortcutsHandler);

// DOM cache
const correctbannerpar = document.getElementsByClassName("game_header")[0];

var corrr = correctbannerpar ? correctbannerpar.innerHTML : "";
window.corrr = corrr;

var header = document.getElementById("header");
var gameHeader = document.getElementsByClassName("game_header")[0];
var gameWindow = document.getElementById("game_window");
var container = document.querySelector(".container");
const campaignTrailMusic = document.getElementById("campaigntrailmusic");

const dynamicStyle = document.createElement("style");
dynamicStyle.id = "cts-dynamic-style";
document.head.appendChild(dynamicStyle);

// this only changes src during explicit theme switches
// don't remove this! This is used by 2023 WOKE
function updateBannerAndStyling() {
  header = document.getElementById("header");
  if (header) {
    if (selectedTheme.banner && header.src !== selectedTheme.banner) {
      header.src = selectedTheme.banner;
    }
    if (header.width !== 1000) {
      header.width = 1000;
    }
  }
  updateStyling();
}

function updateStyling() {
  gameWindow = document.getElementById("game_window");
  container = document.querySelector(".container");
  gameHeader = document.getElementsByClassName("game_header")[0];

  if (selectedTheme.background && document.body.background !== selectedTheme.background) {
    document.body.background = selectedTheme.background;
  }

  if (gameWindow) {
    if (gameWindow.style.backgroundColor !== selectedTheme.coloring_window) {
      gameWindow.style.backgroundColor = selectedTheme.coloring_window;
    }
    if (selectedTheme.text_col != null && gameWindow.style.color !== "black") {
      gameWindow.style.color = "black";
    }
  }

  if (container) {
    if (container.style.backgroundColor !== selectedTheme.coloring_container) {
      container.style.backgroundColor = selectedTheme.coloring_container;
    }
    if (selectedTheme.text_col != null && container.style.color !== selectedTheme.text_col) {
      container.style.color = selectedTheme.text_col;
    }
  }

  if (gameHeader && gameHeader.style.backgroundColor !== selectedTheme.coloring_title) {
    gameHeader.style.backgroundColor = selectedTheme.coloring_title;
  }

  // classes for theme styling
  document.body.classList.remove("cts-theme", "classic-theme");
  if (nct_stuff.selectedTheme === "classic") {
    document.body.classList.add("classic-theme");
  } else {
    document.body.classList.add("cts-theme");
  }
}

function updateInnerWindowsStyling() {
  const ids = ["inner_window_2", "inner_window_3", "inner_window_4", "inner_window_5"];
  for (let i = 0; i < ids.length; i++) {
    const el = document.getElementById(ids[i]);
    if (el && el.style.backgroundColor !== selectedTheme.coloring_window) {
      el.style.backgroundColor = selectedTheme.coloring_window;
    }
  }
}

function updateGameHeaderContentAndStyling() {
  const gh = document.querySelector(".game_header");
  const targetCorrr = window.corrr !== undefined ? window.corrr : corrr;
  if (gh) {
    if (gh.innerHTML !== targetCorrr) {
      gh.innerHTML = targetCorrr;
    }
    if (gh.style.backgroundColor !== selectedTheme.coloring_title) {
      gh.style.backgroundColor = selectedTheme.coloring_title;
    }
    updateInnerWindowsStyling();
  }
}

function updateDynamicStyle() {
  if (nct_stuff.dynamicOverride) return;

  const bgCover = selectedTheme.background_cover ? "background-size: cover;" : "";
  const winBg = selectedTheme.window_url
    ? `url(${selectedTheme.window_url})`
    : (gameWindow?.style?.backgroundImage || "none");

  const dynaStyle = `
    #header { src: ${selectedTheme.banner}; width: 1000px; }
    body { background: ${selectedTheme.background}; ${bgCover} }
    #game_window {
      background-color: ${selectedTheme.coloring_window};
      color: black;
      background-image: ${winBg};
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

  if (dynamicStyle.textContent !== dynaStyle) {
    dynamicStyle.textContent = dynaStyle;
  }
}

// header & theme synchronization
let themeUpdateScheduled = false;
let headerObserver = null;
let documentObserver = null;
let currentObservedHeader = null;

// this handles theme updates
function handleThemeUpdates() {
  if (themeUpdateScheduled) return;
  themeUpdateScheduled = true;

  requestAnimationFrame(() => {
    themeUpdateScheduled = false;
    actuallyHandleThemeUpdates();
  });
}

function actuallyHandleThemeUpdates() {
  // skip updates while theme menu is open
  if (nct_stuff.pauseThemeUpdates) return;

  if (
    nct_stuff.custom_override &&
    !nct_stuff.dynamicOverride
  ) {
    nct_stuff.themes[nct_stuff.selectedTheme] = strCopy(nct_stuff.custom_override);
    selectedTheme = nct_stuff.themes[nct_stuff.selectedTheme];
    if (gameWindow && gameWindow.style.backgroundImage !== "") {
      gameWindow.style.backgroundImage = "";
    }
    updateStyling();
  } else {
    // ensure selectedTheme is synced with nct_stuff.selectedTheme
    if (nct_stuff.themes[nct_stuff.selectedTheme]) {
      selectedTheme = nct_stuff.themes[nct_stuff.selectedTheme];
    }
    if (
      !nct_stuff.custom_override &&
      nct_stuff.selectedTheme === "custom" &&
      typeof modded !== "undefined" &&
      modded &&
      selectedTheme.window_url
    ) {
      selectedTheme.window_url = null;
    }
  }

  const gh = document.querySelector(".game_header");
  if (gh) {
    const targetCorrr = window.corrr !== undefined ? window.corrr : corrr;
    if (gh.innerHTML !== targetCorrr) {
      gh.innerHTML = targetCorrr;
    }
    if (gh.style.backgroundColor !== selectedTheme.coloring_title) {
      gh.style.backgroundColor = selectedTheme.coloring_title;
    }
    corrr = gh.innerHTML;
    window.corrr = corrr;
  }

  updateDynamicStyle();
}

// observe game header changes
function observeGameHeader() {
  const gh = document.querySelector(".game_header");
  if (!gh) {
    currentObservedHeader = null;
    if (headerObserver) {
      headerObserver.disconnect();
      headerObserver = null;
    }
    return;
  }

  if (gh === currentObservedHeader && headerObserver) return;

  if (headerObserver) headerObserver.disconnect();
  currentObservedHeader = gh;

  headerObserver = new MutationObserver((mutations) => {
    let shouldUpdate = false;
    for (let i = 0; i < mutations.length; i++) {
      // check for any changes that would require theme updates
      const m = mutations[i];
      if (
        m.type === "childList" ||
        m.type === "characterData" ||
        (m.type === "attributes" && m.attributeName === "style")
      ) {
        shouldUpdate = true;
        break;
      }
    }
    if (shouldUpdate) {
      handleThemeUpdates();
    }
  });

  // observe the game header for all types of changes
  headerObserver.observe(gh, {
    childList: true,
    characterData: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style", "class"],
  });

  handleThemeUpdates();
}

// watch for game_header being added/removed
documentObserver = new MutationObserver(() => {
  const gh = document.querySelector(".game_header");
  if (gh !== currentObservedHeader) {
    observeGameHeader();
  }
});

const targetContainer = document.querySelector(".container") || document.body;
documentObserver.observe(targetContainer, { childList: true, subtree: true });

observeGameHeader();

// also set up a proxy to detect changes to nct_stuff properties
const nct_stuff_proxy = new Proxy(nct_stuff, {
  set(target, property, value) {
    target[property] = value;
    if (
      property === "pauseThemeUpdates" ||
      property === "custom_override" ||
      property === "dynamicOverride" ||
      property === "selectedTheme"
    ) {
      handleThemeUpdates();
    }
    return true;
  },
});
window.nct_stuff = nct_stuff_proxy;

// watchdog interval for mod compatibility
let fallbackInterval = setInterval(() => {
  const gh = document.querySelector(".game_header");
  if (gh && !headerObserver) {
    observeGameHeader();
  }
  const targetCorrr = window.corrr !== undefined ? window.corrr : corrr;
  if (gh && gh.innerHTML !== targetCorrr && !nct_stuff.pauseThemeUpdates) {
    handleThemeUpdates();
  }
}, 1000);

window.addEventListener("beforeunload", () => {
  if (headerObserver) headerObserver.disconnect();
  if (documentObserver) documentObserver.disconnect();
  if (fallbackInterval) clearInterval(fallbackInterval);
});

// JSON loader
async function loadJSON(path, varr, callback = null) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();

    const parts = varr.split(".");
    let obj = window;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!obj[parts[i]]) obj[parts[i]] = {};
      obj = obj[parts[i]];
    }
    obj[parts[parts.length - 1]] = data;

    if (typeof callback === "function") callback(data);
    return data;
  } catch (e) {
    console.error(`Error loading JSON from ${path}:`, e);
    return null;
  }
}

var campaignTrail_temp = campaignTrail_temp || {};
const ree = {};

campaignTrail_temp.election_json = {};
campaignTrail_temp.candidate_json = {};

window.baseJSONPromises = [
  loadJSON("../static/json/election.json", "campaignTrail_temp.election_json", (d) => {
    ree.election_json = strCopy(d);
  }),
  loadJSON("../static/json/candidate.json", "campaignTrail_temp.candidate_json", (d) => {
    ree.candidate_json = strCopy(d);
  }),
  loadJSON("../static/json/running_mate.json", "campaignTrail_temp.running_mate_json", (d) => {
    ree.running_mate_json = strCopy(d);
  }),
  loadJSON("../static/json/opponents.json", "campaignTrail_temp.opponents_default_json", (d) => {
    ree.opponents_default_json = strCopy(d);
  }),
  loadJSON("../static/json/opponents.json", "campaignTrail_temp.opponents_weighted_json", (d) => {
    ree.opponents_weighted_json = strCopy(d);
  }),
  loadJSON("../static/json/election_list.json", "campaignTrail_temp.temp_election_list", (d) => {
    ree.temp_election_list = strCopy(d);
  }),
];

campaignTrail_temp.difficulty_level_json = [
  { model: "campaign_trail.difficulty_level", pk: 1, fields: { name: "Cakewalk", multiplier: 1.33 } },
  { model: "campaign_trail.difficulty_level", pk: 2, fields: { name: "Very Easy", multiplier: 1.2 } },
  { model: "campaign_trail.difficulty_level", pk: 3, fields: { name: "Easy", multiplier: 1.1 } },
  { model: "campaign_trail.difficulty_level", pk: 4, fields: { name: "Normal", multiplier: 0.97 } },
  { model: "campaign_trail.difficulty_level", pk: 5, fields: { name: "Hard", multiplier: 0.95 } },
  { model: "campaign_trail.difficulty_level", pk: 6, fields: { name: "Impossible", multiplier: 0.9 } },
  { model: "campaign_trail.difficulty_level", pk: 7, fields: { name: "Unthinkable", multiplier: 0.83 } },
  { model: "campaign_trail.difficulty_level", pk: 8, fields: { name: "Blowout", multiplier: 0.75 } },
  { model: "campaign_trail.difficulty_level", pk: 9, fields: { name: "Disaster", multiplier: 0.68 } },
];

campaignTrail_temp.global_parameter_json = [
  {
    model: "campaign_trail.global_parameter",
    pk: 1,
    fields: {
      vote_variable: 1.125,
      max_swing: 0.12,
      start_point: 0.94,
      candidate_issue_weight: 10.0,
      running_mate_issue_weight: 3.0,
      issue_stance_1_max: -0.71,
      issue_stance_2_max: -0.3,
      issue_stance_3_max: -0.125,
      issue_stance_4_max: 0.125,
      issue_stance_5_max: 0.3,
      issue_stance_6_max: 0.71,
      global_variance: 0.01,
      state_variance: 0.005,
      question_count: 25,
      default_map_color_hex: "#C9C9C9",
      no_state_map_color_hex: "#999999",
    },
  },
];

campaignTrail_temp.candidate_dropout_json = [
  { model: "campaign_trail.candidate_dropout", pk: 1, fields: { candidate: 36, affected_candidate: 18, probability: 1.0 } },
];

campaignTrail_temp.show_premium = true;
campaignTrail_temp.premier_ab_test_version = -1;
campaignTrail_temp.credits = "Dan Bryan";

updateStyling();