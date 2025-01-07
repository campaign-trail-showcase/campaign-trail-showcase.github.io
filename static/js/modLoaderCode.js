let loadingFromModButton = false;
const UNFAV = "♥";
const FAV = "♡";
const PLAY = "▶";
const DELETE = "X";
const NEW_RELEASE = "new";
const ALL = "all";

const modList = [];
const tagList = [];

let customMods = new Set();
let customMod = false;
let favoriteMods = new Set();

let onlyFavorites = false;

let year = null;

let nameFilter = "";

let mode = ALL;

let allAch = {};

let ratedMods = JSON.parse(localStorage.getItem("ratedMods")) ?? {};

let modBeingPlayed = "";

const namesOfModsFromValue = {};

if (localStorage.getItem("customModBoxThemesEnabled") === null) {
  localStorage.setItem("customModBoxThemesEnabled", "true");
}

document.getElementById("customThemesButton").innerText =
  localStorage.getItem("customModBoxThemesEnabled") == "true"
    ? "Turn Off Mod Box Themes"
    : "Turn On Mod Box Themes";

let customModBoxThemes = {};

function toggleModBoxThemes() {
  localStorage.setItem(
    "customModBoxThemesEnabled",
    localStorage.getItem("customModBoxThemesEnabled") == "true"
      ? "false"
      : "true",
  );
  location.reload();
}

function extractFromCode1(includes, start, end, rawModText, nameOfMod) {
  if (rawModText == null) {
    return null;
  }

  let codeSnippet = null;
  let temp = {};

  if (!rawModText.includes(includes)) {
    return null;
  }

  let possibleEndIndices = getAllIndexes(rawModText, end);

  for (let i = 0; i < possibleEndIndices.length; i++) {
    codeSnippet = rawModText.slice(
      rawModText.indexOf(start),
      possibleEndIndices[i] + 1,
    );
    if (codeSnippet.length <= 0) {
      continue;
    }

    try {
      eval("temp" + codeSnippet);
    } catch (e) {
      // console.log("FAILED" + e)
      codeSnippet = null;
    }

    if (codeSnippet != null) {
      break;
    }
  }

  if (codeSnippet == null) {
    console.log("Could not extract " + includes + " from " + nameOfMod);
  }

  return temp;
}

function getCustomTheme(rawModText, nameOfMod) {
  const temp = extractFromCode1(
    "campaignTrail_temp.modBoxTheme = {",
    ".modBoxTheme = {",
    "}",
    rawModText,
    nameOfMod,
  );
  if (temp == null) {
    return;
  }

  customModBoxThemes[nameOfMod] = temp.modBoxTheme;
}

function getAllAchievements(rawModText, nameOfMod) {
  temp = extractFromCode1(
    "campaignTrail_temp.achievements = {",
    ".achievements = {",
    "}",
    rawModText,
    nameOfMod,
  );

  if (temp == null) {
    return;
  }

  allAch[nameOfMod] = temp.achievements;
}

function extractElectionDetails(rawModText, nameOfMod) {
  if (rawModText == null) {
    return null;
  }

  let codeSnippet = null;
  let temp = {};
  let start = "";
  let end = "";

  if (rawModText.includes(".election_json = JSON.parse(")) {
    start = ".election_json = JSON.parse(";
    end = ")";
  } else if (rawModText.includes(".election_json = [")) {
    start = ".election_json = [";
    end = "]";
  } else {
    console.log("Could not extract metadata for mod: " + nameOfMod);
    return null;
  }

  let possibleEndIndices = getAllIndexes(rawModText, end);

  for (let i = 0; i < possibleEndIndices.length; i++) {
    codeSnippet = rawModText.slice(
      rawModText.indexOf(start),
      possibleEndIndices[i] + 1,
    );
    if (codeSnippet.length <= 0) {
      continue;
    }

    try {
      eval("temp" + codeSnippet);
    } catch {
      codeSnippet = null;
    }

    if (codeSnippet != null) {
      break;
    }
  }

  if (codeSnippet == null || Object.keys(temp).length == 0) {
    console.log("Could not extract from " + nameOfMod);
  }

  return temp;
}

$(document).ready(async function () {
  const modNameParam = getUrlParam("modName");

  favoriteMods =
    localStorage.getItem("favoriteMods") != null
      ? localStorage.getItem("favoriteMods")
      : new Set();

  if (typeof favoriteMods == "string") {
    favoriteMods = new Set(favoriteMods.split(","));
  }

  customMods =
    localStorage.getItem("customMods") != null
      ? localStorage.getItem("customMods")
      : new Set();

  if (typeof customMods == "string") {
    let customArr = customMods != "" ? customMods.split(",") : [];
    customMods = new Set(customArr);
  }

  var originalOptions = null;

  $(".tagCheckbox").on("change", filterEntries);

  await loadEntries();
  let mods = document.getElementById("modSelect").childNodes;

  let tagsFound = new Set();

  // Get tags from normal mods and add optional custom tag
  mods.forEach(function (mod) {
    const tags = mod.dataset.tags.split(" ");
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].length == 0) {
        continue;
      }
      tagsFound.add(tags[i]);
    }

    if (customMods.size > 0) {
      tagsFound.add("Custom");
    }
  });

  let allModsLength = mods.length - 1;
  let modsLoaded = [];

  // Set up from normal mods
  mods.forEach(async function (mod) {
    if (mod.value == "other") {
      return;
    }

    const modRes = await fetch("../static/mods/" + mod.value + "_init.html");
    const rawModText = await modRes.text();

    const temp = extractElectionDetails(rawModText, mod.value);
    getAllAchievements(rawModText, mod.value);
    getCustomTheme(rawModText, mod.value);

    let imageUrl;
    let description;

    if (temp) {
      imageUrl =
        temp.election_json[0].fields.site_image ??
        temp.election_json[0].fields.image_url;
      description =
        temp.election_json[0].fields.site_description ??
        temp.election_json[0].fields.summary;
    } else {
      console.log("Missing or cannot read Code 1 for mod: " + mod.value);
      imageUrl = "";
      description = `<h1 style="color:red">COULD NOT GET CODE 1 PLEASE ALERT DEV!</h1>`;
    }

    if (!temp) {
      allModsLength--;
      return;
    }

    modsLoaded.push({ mod: mod, imageUrl: imageUrl, description: description });

    if (modsLoaded.length == allModsLength) {
      modsLoaded.sort(modCompare);
      for (let i = 0; i < modsLoaded.length; i++) {
        const modData = modsLoaded[i];
        const modView = createModView(
          modData.mod,
          modData.imageUrl,
          modData.description,
        );
        document.getElementById("mod-grid").appendChild(modView);

        if (
          modData.mod.dataset.awardimageurls &&
          modData.mod.dataset.awardimageurls.split(", ").length > 1
        ) {
          cycleAwards(
            modView.querySelector(".mod-trophy"),
            modData.mod.dataset.awardimageurls.split(", "),
            0,
          );
        }

        modList.push(modView);
      }
      updateModViews();
    }
  });

  // Set up from custom mods
  for (const customModName of customMods) {
    rawModText = localStorage.getItem(customModName + "_code1");

    const temp = extractElectionDetails(rawModText, customModName);

    if (
      temp == null ||
      temp.election_json == null ||
      temp.election_json[0] == null ||
      temp.election_json[0].fields == null
    ) {
      continue;
    }

    getAllAchievements(rawModText, customModName);
    getCustomTheme(rawModText, customModName);

    let imageUrl =
      temp.election_json[0].fields.site_image ??
      temp.election_json[0].fields.image_url;
    let description =
      temp.election_json[0].fields.site_description ??
      temp.election_json[0].fields.summary;

    const modView = createModView(
      {
        value: customModName,
        innerText: customModName,
        dataset: { tags: "Custom" },
      },
      imageUrl,
      description,
    );
    document.getElementById("mod-grid").appendChild(modView);
    modList.push(modView);
  }

  createTagButtons(tagsFound);

  if (modNameParam !== null) {
    loadModFromButton(modNameParam);
  }
});

function createModView(mod, imageUrl, description, isCustom) {
  const modView = document.createElement("div");
  modView.classList.add("community-grid-element");

  modView.setAttribute("mode", mod.dataset.mode);
  modView.setAttribute("tags", mod.dataset.tags);
  modView.setAttribute("awardimageurls", mod.dataset.awardimageurls);
  modView.setAttribute("awards", mod.dataset.awards);
  modView.setAttribute("mod-name", mod.value);
  modView.setAttribute("mod-display-name", mod.innerText.toLowerCase());
  namesOfModsFromValue[mod.value] = mod.innerText;

  const favText = isFavorite(mod.value) ? UNFAV : FAV;

  let theme =
    localStorage.getItem("customModBoxThemesEnabled") == "true"
      ? customModBoxThemes[mod.value]
      : null;

  modView.innerHTML = `
    <div class="mod-title" ${theme ? `style="background-color:${theme.header_color};"` : ""}>
        <p ${theme ? `style="color:${theme.header_text_color};"` : ""}>${mod.innerText}</p>
    </div>
    <div class = "mod-img-desc">
    <img class="mod-image" src="${imageUrl}"></img>
    <div ${theme ? `style="background-color:${theme.description_background_color}; color:${theme.description_text_color};"` : ""} class="mod-desc" >${description}</div></div>
    <div class="hover-button-holder">
        <button ${theme ? `style="background-color:${theme.secondary_color};"` : ""} class="mod-play-button hover-button" onclick="loadModFromButton(\`${mod.value}\`)"><span ${theme ? `style="color:${theme.ui_text_color};"` : ""}>${PLAY}</span></button>
        <button ${theme ? `style="background-color:${theme.secondary_color};"` : ""} class="hover-button" onclick="toggleFavorite(event, \`${mod.value}\`)"><span ${theme ? `style="color:${theme.ui_text_color};"` : ""}>${favText}</span></button>
        <button style="${customMods.has(mod.value) ? "" : "display:none;"}${theme ? `background-color:${theme.secondary_color};"` : ""}" class="hover-button" onclick="deleteCustomMod(event, \`${mod.value}\`)"><span ${theme ? `style="color:${theme.ui_text_color};"` : ""}>${DELETE}</span></button>
    </div>
    ${
      !customMods.has(mod.value)
        ? `
    <div ${theme ? `style="background-color:${theme.secondary_color};"` : ""} class="rating-background">
        <div ${theme ? `style="color:${theme.ui_text_color};"` : ""} class="modRating">LOADING FAVORITES...</div>
        <div ${theme ? `style="color:${theme.ui_text_color};"` : ""} class="modPlayCount">LOADING PLAYS...</div>
        ${mod.dataset.awards != null && mod.dataset.awards.length > 0 ? renderAwards(mod.dataset.awards, mod.dataset.awardimageurls) : ""}
    </div>`
        : ""
    }
    `;

  if (theme) {
    modView.style.backgroundColor = theme.main_color;
  }

  modView.id = mod.value;

  getFavsAndPlayCount(mod.value, modView);

  return modView;
}

function renderAwards(awards, rawAwardUrls) {
  // onclick="alert('-- AWARDS --\\n${awards.replace('<br>', '\\n')}'

  let awardUrls = rawAwardUrls.split(", ");
  let awardNames = awards.split(", ");
  let awardImages = `<img class="mod-trophy" src=${awardUrls[0]}></img>`;

  return `
    <div class="trophy-holder")">
    <span class="tooltiptext">${awards.replaceAll(", ", "<br><br>")}</span>
    ${awardImages}
    </div>
    `;
}

function cycleAwards(img, awardUrls, index) {
  img.src = awardUrls[index];
  setTimeout(
    () => cycleAwards(img, awardUrls, (index + 1) % awardUrls.length),
    2000,
  );
}

function configureRatingButtons(modName, modView) {
  if (!(modName in ratedMods)) {
    return;
  }

  const buttons = modView.getElementsByClassName("rate-button");

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    if (button.classList.contains("pressed")) {
      button.classList.remove("pressed");
    }

    if (button.dataset.rate == ratedMods[modName]) {
      button.classList.add("pressed");
    }
  }
}

async function getFavsAndPlayCount(modName, modView) {
  if (customMods.has(modName)) return;

  try {
    const res = await fetch(
      "https://cts-backend-w8is.onrender.com/api/get_mod?modName=" + modName,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    );
    const ratingData = await res.json();
    modView.getElementsByClassName("modRating")[0].innerHTML =
      `<span style="font-weight:bold">${ratingData.favs} FAVORITES</span>`;
    modView.getElementsByClassName("modPlayCount")[0].innerHTML =
      `<span style="font-weight:bold">${ratingData.playCount ?? 0} PLAYS</span>`;
    modView.dataset.favs = ratingData.favs;
    modView.dataset.playCount = ratingData.playCount ?? 0;
  } catch {
    modView.getElementsByClassName("modRating")[0].innerHTML =
      "Failed to get mod info. Try again later.";
    modView.getElementsByClassName("modPlayCount")[0].innerHTML = ``;
    modView.dataset.playCount = 0;
    modView.dataset.favs = 0;
  }
}

async function toggleFav(event, modName, favVal) {
  if (customMods.has(modName)) return;

  await fetch("https://cts-backend-w8is.onrender.com/api/rate_mod", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ modName: modName, rating: favVal }),
  });

  const modView = document.getElementById(modName);
  await getFavsAndPlayCount(modName, modView);
}

function addCustomModButton() {
  const code1 = document.getElementById("codeset1").value;
  const code2 = document.getElementById("codeset2").value;
  addCustomMod(code1, code2);
}

function deleteCustomMod(event, modValue) {
  customMods.delete(modValue);
  localStorage.removeItem(modValue + "_code1");
  localStorage.removeItem(modValue + "_code2");
  localStorage.setItem("customMods", Array.from(customMods));
  if (customMods.length == 0) {
    localStorage.removeItem("customMods");
  }
  location.reload();
}

function addCustomMod(code1, code2) {
  const temp = extractElectionDetails(code1, "custom mod being added");

  if (temp == null) {
    alert("Could not add mod from code provided!");
    return;
  }

  const modName =
    document.getElementById("customModName").value ??
    temp.election_json[0].fields.year;
  customMods.add(modName);
  localStorage.setItem("customMods", Array.from(customMods));
  localStorage.setItem(modName + "_code1", code1);
  localStorage.setItem(modName + "_code2", code2);
  location.reload();
}

function filterMods(event) {
  nameFilter = event.target.value.toLowerCase();
  updateModViews();
}

function createTagButtons(tagsFound) {
  const tagsGrid = document.getElementById("tags");
  Array.from(tagsFound)
    .sort()
    .forEach(function (tag) {
      const tagButton = document.createElement("div");

      tagButton.classList.add("tag-button");
      tagButton.innerHTML = `
        <input type="checkbox" id="${tag}" name="${tag}" value="${tag}" checked>
        <label style="user-select:none" for="${tag}">${tag.replaceAll("_", " ")}</label><br>
        `;
      tagsGrid.appendChild(tagButton);
      const checkbox = tagButton.getElementsByTagName("INPUT")[0];

      tagButton.addEventListener("click", function (event) {
        if (event.target == tagButton) checkbox.click();
      });

      tagList.push(checkbox);
      checkbox.addEventListener("change", updateModViews);
    });
}

function updateModViews(event) {
  const activeTags = new Set();
  for (let i = 0; i < tagList.length; i++) {
    if (tagList[i].checked) {
      activeTags.add(tagList[i].value);
    }
  }

  for (let i = 0; i < modList.length; i++) {
    let shouldShow = false;
    const modMode = modList[i].getAttribute("mode");
    const modTags = modList[i].getAttribute("tags").split(" ");
    for (let j = 0; j < modTags.length; j++) {
      const tag = modTags[j];
      const modName = modList[i].getAttribute("mod-name");
      const modDisplayName = modList[i].getAttribute("mod-display-name");
      if (
        (nameFilter.replace(" ", "") == "" ||
          modDisplayName.includes(nameFilter) ||
          modName.includes(nameFilter)) &&
        activeTags.has(tag) &&
        (!onlyFavorites || isFavorite(modName)) &&
        (!year || year.test(modName)) &&
        (onlyFavorites || mode == ALL || modMode == mode)
      ) {
        shouldShow = true;
        break;
      }
    }
    modList[i].style.display = shouldShow ? "flex" : "none";
  }
}

function onChangeModSorter(e) {
  if (e.target.value == "chrono") {
    sortModViews(modCompare2);
  } else if (e.target.value == "mostFav") {
    sortModViews((a, b) => b.dataset.favs - a.dataset.favs);
  } else if (e.target.value == "leastFav") {
    sortModViews((a, b) => a.dataset.favs - b.dataset.favs);
  } else if (e.target.value == "mostPlays") {
    sortModViews((a, b) => b.dataset.playCount - a.dataset.playCount);
  }
}

function sortModViews(comparisonFunction) {
  modList.sort(comparisonFunction);
  const modGrid = document.getElementById("mod-grid");
  modGrid.innerHTML = "";
  for (let i = 0; i < modList.length; i++) {
    modGrid.appendChild(modList[i]);
  }
}

function isFavorite(modName) {
  return favoriteMods.has(modName);
}

function setCategory(event, category) {
  const tabs = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];

    tab.className = tab.className.replace(" active", "");

    if (tab == event.target) {
      event.currentTarget.className += " active";
    }
  }

  if (category instanceof RegExp) {
    year = category;
    onlyFavorites = false;
  } else if (category == "all") {
    year = null;
    onlyFavorites = false;
  } else if (category == "favorites") {
    year = null;
    onlyFavorites = true;
  }

  updateModViews();
}

function toggleFavorite(event, modValue) {
  const inFavorites = isFavorite(modValue);
  if (!inFavorites) {
    favoriteMods.add(modValue);
    event.target.innerText = UNFAV;
    toggleFav(event, modValue, 1);
  } else {
    favoriteMods.delete(modValue);
    event.target.innerText = FAV;
    toggleFav(event, modValue, -1);
  }
  localStorage.setItem("favoriteMods", Array.from(favoriteMods));
  updateModViews();
}

function loadRandomMod() {
  const modView = choose(modList);
  modView.querySelector(".mod-play-button").click();
}

async function loadModFromButton(modValue) {
  if (modValue == "0000Random_Mod") {
    setTimeout(() => updateModViewCount(modValue), 10000);
    loadRandomMod();
    return;
  }

  document.getElementById("goBackButton").style.display = "inline";
  loadingFromModButton = true;
  e = campaignTrail_temp;
  if (customMods.has(modValue)) {
    eval(localStorage.getItem(modValue + "_code1"));
    diff_mod = true;
    customMod = modValue;
  } else {
    if (!location.href.includes("?modName")) {
      history.replaceState(null, "", "?modName=" + modValue);
    }

    const res = await fetch("../static/mods/" + modValue + "_init.html");
    const modCode = await res.text();
    eval(modCode);

    diff_mod = true;
  }

  $("#modloaddiv")[0].style.display = "none";
  $("#modLoadReveal")[0].style.display = "none";
  document.getElementById("featured-mods-area").style.display = "none";
  modded = true;

  modBeingPlayed = modValue;

  if (!customMods.has(modValue)) {
    document.getElementById("copyLinkButton").style.display = "block";
  }

  const announcement = document.getElementById("announcement");
  if (announcement !== null) {
    announcement.style.display = "none";
  }

  setTimeout(() => updateModViewCount(modValue), 10000);
  window.scrollTo(0, 0); // Scroll to top
}

async function copyModLink() {
  const modLink = document.location.href;

  if (!modLink.includes("?modName")) {
    modLink = modLink + "?modName=" + modBeingPlayed.replaceAll(" ", "%20");
  }

  await window.navigator.clipboard.writeText(modLink);
  alert("Copied link to clipboard!");
}

async function updateModViewCount(modName) {
  if (customMods.has(modName)) return;

  await fetch("https://cts-backend-w8is.onrender.com/api/play_mod", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ modName: modName }),
  });
}

function getAllIndexes(arr, val) {
  var indexes = [],
    i = -1;
  while ((i = arr.indexOf(val, i + 1)) != -1) {
    indexes.push(i);
  }
  return indexes;
}

async function loadEntries() {
  const modList = await fetch("../static/mods/MODLOADERFILE.html");

  $("#modSelect").html(await modList.text());
  //clone so we don't reduce the list of mods every time a tag is selected
  originalOptions = $("#modSelect option").clone();
  filterEntries();
}

function filterEntries() {
  var selectedTags = [];

  // Get all selected tags
  $(".tagCheckbox:checked").each(function () {
    selectedTags.push($(this).val());
  });

  var filteredOptions = originalOptions.filter(function () {
    var entryTags = $(this).data("tags");

    if (selectedTags.length === 0) {
      // Show all if no tags are selected
      return true;
    }

    //return mods that are tagged and have all checked tags
    return entryTags && containsAllTags(entryTags, selectedTags);
  });

  var $modSelect = $("#modSelect");
  $modSelect.empty().append(filteredOptions);

  $modSelect.val($modSelect.find("option:first").val());
}

function containsAllTags(entryTags, selectedTags) {
  var entryTagArray = entryTags.split(" ");

  for (var i = 0; i < selectedTags.length; i++) {
    if (!entryTagArray.includes(selectedTags[i])) {
      return false;
    }
  }

  return true;
}

function getUrlParam(param) {
  var url_string = window.location.href; //window.location.href
  var url = new URL(url_string);
  return url.searchParams.get(param);
}

function modCompare2(a, b) {
  if (a.getAttribute("mod-name") < b.getAttribute("mod-name")) {
    return -1;
  }
  if (a.getAttribute("mod-name") > b.getAttribute("mod-name")) {
    return 1;
  }
  return 0;
}

function modCompare(a, b) {
  if (a.mod.value < b.mod.value) {
    return -1;
  }
  if (a.mod.value > b.mod.value) {
    return 1;
  }
  return 0;
}

function setMode(evt, newMode) {
  const buttons = document.getElementsByClassName("mode-button");
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    if (button.classList.contains("pressed")) {
      button.classList.remove("pressed");
    }
  }
  evt.target.classList.add("pressed");
  mode = newMode;
  updateModViews();
}
