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

let currentPage = 1;
const modsPerPage = 12;

let allAch = {};

let ratedMods = JSON.parse(localStorage.getItem("ratedMods")) ?? {};

let modBeingPlayed = "";

let loadingInterval = null;

const namesOfModsFromValue = {};

const customThemesButton = document.getElementById("customThemesButton");

if (localStorage.getItem("customModBoxThemesEnabled") === null) {
  localStorage.setItem("customModBoxThemesEnabled", "true");
}

customThemesButton.innerText =
  localStorage.getItem("customModBoxThemesEnabled") === "true"
    ? "Turn Off Mod Box Themes"
    : "Turn On Mod Box Themes";

let customModBoxThemes = {};

function toggleModBoxThemes() {
  localStorage.setItem(
    "customModBoxThemesEnabled",
    localStorage.getItem("customModBoxThemesEnabled") === "true"
      ? "false"
      : "true",
  );
  location.reload();
}

function extractFromCode1(includes, start, end, rawModText, nameOfMod) {
  if (!rawModText) {
    return null;
  }

  if (!rawModText.includes(includes)) {
    return null;
  }

  const possibleEndIndices = getAllIndexes(rawModText, end);
  let codeSnippet = null;
  let temp = {};

  for (let i = 0; i < possibleEndIndices.length; i++) {
    codeSnippet = rawModText.slice(
      rawModText.indexOf(start),
      possibleEndIndices[i] + 1,
    );

    if (!codeSnippet || codeSnippet.length <= 0) {
      continue;
    }

    try {
      eval("temp" + codeSnippet);
    } catch (e) {
      // console.log("FAILED" + e)
      codeSnippet = null;
    }

    if (codeSnippet) {
      break;
    }
  }

  if (!codeSnippet) {
    console.log(`Could not extract ${includes} from ${nameOfMod}`);
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
  if (temp?.modBoxTheme) {
    customModBoxThemes[nameOfMod] = temp.modBoxTheme;
  }
}

function getAllAchievements(rawModText, nameOfMod) {
  const temp = extractFromCode1(
    "campaignTrail_temp.achievements = {",
    ".achievements = {",
    "}",
    rawModText,
    nameOfMod,
  );

  if (temp?.achievements) {
    allAch[nameOfMod] = temp.achievements;
  }
}

function extractElectionDetails(rawModText, nameOfMod) {
  if (!rawModText) {
    return null;
  }

  let start, end;

  if (rawModText.includes(".election_json = JSON.parse(")) {
    start = ".election_json = JSON.parse(";
    end = ")";
  } else if (rawModText.includes(".election_json = [")) {
    start = ".election_json = [";
    end = "]";
  } else {
    console.log(`Could not extract metadata for mod: ${nameOfMod}`);
    return null;
  }

  const possibleEndIndices = getAllIndexes(rawModText, end);
  let codeSnippet = null;
  let temp = {};

  for (let i = 0; i < possibleEndIndices.length; i++) {
    codeSnippet = rawModText.slice(
      rawModText.indexOf(start),
      possibleEndIndices[i] + 1,
    );

    if (!codeSnippet || codeSnippet.length <= 0) {
      continue;
    }

    try {
      eval("temp" + codeSnippet);
    } catch {
      codeSnippet = null;
    }

    if (codeSnippet) {
      break;
    }
  }

  if (!codeSnippet || Object.keys(temp).length === 0) {
    console.log(`Could not extract from ${nameOfMod}`);
  }

  return temp;
}

$(document).ready(async () => {
  const modNameParam = getUrlParam("modName");

  favoriteMods = new Set(
    localStorage.getItem("favoriteMods")?.split(",") || [],
  );
  customMods = new Set(localStorage.getItem("customMods")?.split(",") || []);

  const $modSelect = $("#modSelect");
  const originalOptions = $modSelect.find("option").clone();

  $(".tagCheckbox").on("change", filterEntries);

  await loadEntries();
  const mods = document.getElementById("modSelect").childNodes;

  let tagsFound = new Set();

  // Get tags from normal mods and add optional custom tag
  mods.forEach((mod) => {
    if (!mod.dataset || !mod.dataset.tags) return;
    const tags = mod.dataset.tags.split(" ");
    tags.forEach((tag) => {
      if (tag.length > 0) {
        tagsFound.add(tag);
      }
    });

    if (customMods.size > 0) {
      tagsFound.add("Custom");
    }
  });

  let allModsLength = mods.length - 1;
  let modsLoaded = [];

  // Set up from normal mods
  const modPromises = Array.from(mods).map(async (mod) => {
    if (mod.value === "other" || (modNameParam && modNameParam !== mod.value)) {
      return;
    }

    try {
      const modRes = await fetch(`../static/mods/${mod.value}_init.html`);
      const rawModText = await modRes.text();

      const temp = extractElectionDetails(rawModText, mod.value);
      getAllAchievements(rawModText, mod.value);
      getCustomTheme(rawModText, mod.value);

      let imageUrl = "";
      let description = "";
      let loaded = true;

      if (temp?.election_json?.length > 0 && temp.election_json[0].fields) {
        imageUrl = temp.election_json[0].fields.site_image ?? temp.election_json[0].fields.image_url;
        description = temp.election_json[0].fields.site_description ?? temp.election_json[0].fields.summary;
      } else {
        loaded = false;
        console.log(`Missing or cannot read Code 1 for mod: ${mod.value}`);
        description = `<h1 style="color:red">COULD NOT GET CODE 1 PLEASE ALERT DEV!</h1>`;
      }

      if (!loaded) {
        allModsLength--;
        return;
      }

      modsLoaded.push({ mod: mod, imageUrl: imageUrl, description: description });
    } catch (error) {
      console.error(`Error loading mod ${mod.value}:`, error);
      allModsLength--;
    }
  });

  await Promise.all(modPromises);

  modsLoaded.sort(modCompare);
  const modGrid = document.getElementById("mod-grid");
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
  // updateModViews();

  // Set up from custom mods
  for (const customModName of customMods) {
    const rawModText = localStorage.getItem(customModName + "_code1");

    const temp = extractElectionDetails(rawModText, customModName);

    if (
      !temp?.election_json?.[0]?.fields
    ) {
      continue;
    }

    getAllAchievements(rawModText, customModName);
    getCustomTheme(rawModText, customModName);

    const imageUrl =
      temp.election_json[0].fields.site_image ??
      temp.election_json[0].fields.image_url;
    const description =
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
  updateModViews();

  if (modNameParam) {
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
    localStorage.getItem("customModBoxThemesEnabled") === "true"
      ? customModBoxThemes[mod.value]
      : null;

  modView.innerHTML = `
    <div class="mod-title" ${theme ? `style="background:url('${theme.header_image_url ?? ""}'); background-color:${theme.header_color};"` : ""}>
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

  // getFavsAndPlayCount(mod.value, modView);

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

async function getFavsAndPlayCount(modName, modView, force = false) {
  if (customMods.has(modName) || (modView.dataset.infoLoaded === "true" && !force))
    return;

  modView.dataset.infoLoaded = "true"; // mark as loading/loaded

  try {
    const res = await fetch(
      `https://intense-lake-78568-f86393a88bcb.herokuapp.com/api/get_mod?modName=${modName}`,
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
  } catch (error) {
    console.error(`Failed to get mod info for ${modName}:`, error);
    modView.getElementsByClassName("modRating")[0].innerHTML =
      "Failed to get mod info. Try again later.";
    modView.getElementsByClassName("modPlayCount")[0].innerHTML = ``;
    modView.dataset.playCount = 0;
    modView.dataset.favs = 0;
  }
}

async function toggleFav(event, modName, favVal) {
  if (customMods.has(modName)) return;

  try {
    await fetch("https://intense-lake-78568-f86393a88bcb.herokuapp.com/api/rate_mod", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ modName: modName, rating: favVal }),
    });

    const modView = document.getElementById(modName);
    await getFavsAndPlayCount(modName, modView, true);
  } catch (error) {
    console.error(`Failed to toggle favorite for ${modName}:`, error);
  }
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

  if (customMods.size === 0) {
    localStorage.removeItem("customMods");
  } else {
    localStorage.setItem("customMods", Array.from(customMods));
  }

  location.reload();
}

function addCustomMod(code1, code2) {
  const temp = extractElectionDetails(code1, "custom mod being added");

  if (!temp) {
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
    .forEach((tag) => {
      const tagButton = document.createElement("div");

      tagButton.classList.add("tag-button");
      tagButton.innerHTML = `
        <input type="checkbox" id="${tag}" name="${tag}" value="${tag}" checked>
        <label style="user-select:none" for="${tag}">${tag.replaceAll("_", " ")}</label><br>
        `;
      tagsGrid.appendChild(tagButton);
      const checkbox = tagButton.getElementsByTagName("INPUT")[0];

      tagButton.addEventListener("click", (event) => {
        if (event.target === tagButton) checkbox.click();
      });

      tagList.push(checkbox);
      checkbox.addEventListener("change", updateModViews);
    });
}

function getVisibleMods() {
  const activeTags = new Set();
  for (let i = 0; i < tagList.length; i++) {
    if (tagList[i].checked) {
      activeTags.add(tagList[i].value);
    }
  }

  const visibleMods = [];
  for (let i = 0; i < modList.length; i++) {
    const modView = modList[i];
    const modMode = modView.getAttribute("mode");
    const modTags = modView.getAttribute("tags").split(" ");
    const modName = modView.getAttribute("mod-name");
    const modDisplayName = modView.getAttribute("mod-display-name");

    if (
      (nameFilter === "" ||
        modDisplayName.includes(nameFilter) ||
        modName.includes(nameFilter)) &&
      modTags.some((tag) => activeTags.has(tag)) &&
      (!onlyFavorites || isFavorite(modName)) &&
      (!year || year.test(modName)) &&
      (onlyFavorites || mode === ALL || modMode === mode)
    ) {
      visibleMods.push(modView);
    }
  }
  return visibleMods;
}

function updateModViews(event) {
  if (event) {
    currentPage = 1; // reset to first page on filter change
  }

  const visibleMods = getVisibleMods();

  // hide all mods before showing the paginated ones
  modList.forEach((modView) => (modView.style.display = "none"));

  const modGrid = document.getElementById("mod-grid");
  let noFavsMessage = document.getElementById("no-favorites-message");

  if (onlyFavorites && visibleMods.length === 0) {
    if (!noFavsMessage) {
      noFavsMessage = document.createElement("div");
      noFavsMessage.id = "no-favorites-message";
      noFavsMessage.classList.add("no-favorites-message");
      modGrid.appendChild(noFavsMessage);
    }
    noFavsMessage.innerHTML = `You have no favorite mods. Press the ${FAV} button on any mod to see them here!`;
    noFavsMessage.style.display = "block";
  } else if (noFavsMessage) {
    noFavsMessage.style.display = "none";
  }

  const startIndex = (currentPage - 1) * modsPerPage;
  const endIndex = startIndex + modsPerPage;
  const pageMods = visibleMods.slice(startIndex, endIndex);

  pageMods.forEach((modView) => {
    modView.style.display = "flex";
    // lazy load mod info
    getFavsAndPlayCount(modView.getAttribute("mod-name"), modView);
  });

  renderPaginationControls(visibleMods.length);
}

function renderPaginationControls(totalMods) {
  let paginationContainer = document.getElementById("pagination-controls");
  const modGrid = document.getElementById("mod-grid");

  // if the container doesn't exist, create and insert it after the mod grid
  if (!paginationContainer && modGrid) {
    paginationContainer = document.createElement("div");
    paginationContainer.id = "pagination-controls";
    paginationContainer.style.textAlign = "center";
    paginationContainer.style.margin = "20px 0";
    modGrid.parentNode.insertBefore(paginationContainer, modGrid.nextSibling);
  } else if (!paginationContainer) {
    // fallback if modGrid also doesn't exist for some reason
    return;
  }

  paginationContainer.innerHTML = "";
  const totalPages = Math.ceil(totalMods / modsPerPage);

  if (totalPages <= 1) {
    return; // no need for controls if there's only one page or less
  }

  // previous button
  const prevButton = document.createElement("button");
  prevButton.innerText = "Previous";
  prevButton.disabled = currentPage === 1;
  prevButton.classList.add("mode-button");
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updateModViews();
    }
  });
  paginationContainer.appendChild(prevButton);

  // page numbers
  const pageInfo = document.createElement("span");
  pageInfo.innerText = ` Page ${currentPage} of ${totalPages} `;
  pageInfo.classList.add("pagination-info");
  paginationContainer.appendChild(pageInfo);

  // next button
  const nextButton = document.createElement("button");
  nextButton.innerText = "Next";
  nextButton.disabled = currentPage === totalPages;
  nextButton.classList.add("mode-button");
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      updateModViews();
    }
  });
  paginationContainer.appendChild(nextButton);
}

async function onChangeModSorter(e) {
  const sorter = e.target.value;

  const sorterElement = e.target;
  let loadingIndicator = document.getElementById("loading-indicator");
  if (!loadingIndicator) {
    loadingIndicator = document.createElement("span");
    loadingIndicator.id = "loading-indicator";
    sorterElement.parentNode.insertBefore(
      loadingIndicator,
      sorterElement.nextSibling,
    );
  }

  loadingIndicator.innerText = " Sorting mods";
  loadingIndicator.style.display = "inline";
  let dots = 0;
  if (loadingInterval) clearInterval(loadingInterval);
  loadingInterval = setInterval(() => {
    dots = (dots + 1) % 4;
    loadingIndicator.innerText = " Sorting mods" + ".".repeat(dots);
  }, 300);

  try {
    if (sorter === "mostFav" || sorter === "leastFav" || sorter === "mostPlays") {
      const visibleMods = getVisibleMods();
      const promises = visibleMods.map((modView) =>
        getFavsAndPlayCount(modView.getAttribute("mod-name"), modView),
      );
      await Promise.all(promises);
    }

    switch (sorter) {
      case "chrono":
        sortModViews(modCompare2);
        break;
      case "mostFav":
        sortModViews((a, b) => (b.dataset.favs ?? 0) - (a.dataset.favs ?? 0));
        break;
      case "leastFav":
        sortModViews((a, b) => (a.dataset.favs ?? 0) - (b.dataset.favs ?? 0));
        break;
      case "mostPlays":
        sortModViews(
          (a, b) => (b.dataset.playCount ?? 0) - (a.dataset.playCount ?? 0),
        );
        break;
    }
  } finally {
    clearInterval(loadingInterval);
    loadingInterval = null;
    loadingIndicator.style.display = "none";
  }
}

function sortModViews(comparisonFunction) {
  const visibleMods = getVisibleMods();
  visibleMods.sort(comparisonFunction);

  const otherMods = modList.filter((mod) => !visibleMods.includes(mod));

  // re-order the main modList
  modList.length = 0;
  modList.push(...visibleMods, ...otherMods);

  const modGrid = document.getElementById("mod-grid");
  // clear the mod grid and append the sorted views
  const fragment = document.createDocumentFragment();
  modList.forEach((modView) => fragment.appendChild(modView));
  modGrid.appendChild(fragment);

  currentPage = 1;
  updateModViews();
}

function isFavorite(modName) {
  return favoriteMods.has(modName);
}

function setCategory(event, category) {
  const tabs = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];

    tab.className = tab.className.replace(" active", "");

    if (tab === event.target) {
      event.currentTarget.className += " active";
    }
  }

  if (category instanceof RegExp) {
    year = category;
    onlyFavorites = false;
  } else if (category === "all") {
    year = null;
    onlyFavorites = false;
  } else if (category === "favorites") {
    year = null;
    onlyFavorites = true;
  }

  currentPage = 1; // reset to first page when category changes
  updateModViews();
}

function toggleFavorite(event, modValue) {
  const inFavorites = isFavorite(modValue);
  const favText = inFavorites ? FAV : UNFAV; // toggle text *before* updating the set

  if (!inFavorites) {
    favoriteMods.add(modValue);
    toggleFav(event, modValue, 1);
  } else {
    favoriteMods.delete(modValue);
    toggleFav(event, modValue, -1);
  }

  const span = event.currentTarget.querySelector("span");
  if (span) {
    span.innerText = favText; // update the button text robustly
  }
  localStorage.setItem("favoriteMods", Array.from(favoriteMods));
  updateModViews();
}

function loadRandomMod() {
  const modView = choose(modList);
  modView.querySelector(".mod-play-button").click();
}

async function loadModFromButton(modValue) {
  if (modValue === "0000Random_Mod") {
    setTimeout(() => updateModViewCount(modValue), 10000);
    loadRandomMod();
    return;
  }

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

    try {
      const res = await fetch(`../static/mods/${modValue}_init.html`);
      const modCode = await res.text();
      eval(modCode);
      diff_mod = true;
    } catch (error) {
      console.error(`Failed to load mod ${modValue}:`, error);
      alert(`Failed to load mod ${modValue}. See console for details.`);
      return;
    }
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
  if (announcement) {
    announcement.style.display = "none";
  }

  gameStart(new Event('submit'));

  setTimeout(() => updateModViewCount(modValue), 10000);
  window.scrollTo(0, 0); // Scroll to top
}

async function copyModLink() {
  let modLink = document.location.href;

  if (!modLink.includes("?modName")) {
    modLink = modLink + "?modName=" + modBeingPlayed.replaceAll(" ", "%20");
  }

  try {
    await window.navigator.clipboard.writeText(modLink);
    alert("Copied link to clipboard!");
  } catch (err) {
    console.error("Failed to copy: ", err);
    alert("Failed to copy link to clipboard.");
  }
}

async function updateModViewCount(modName) {
  if (customMods.has(modName)) return;

  try {
    await fetch("https://intense-lake-78568-f86393a88bcb.herokuapp.com/api/play_mod", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ modName: modName }),
    });
  } catch (error) {
    console.error(`Failed to update play count for ${modName}:`, error);
  }
}

function getAllIndexes(arr, val) {
  const indexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      indexes.push(i);
    }
  }
  return indexes;
}

async function loadEntries() {
  try {
    const modListResponse = await fetch("../static/mods/MODLOADERFILE.html");
    const modListHTML = await modListResponse.text();
    $("#modSelect").html(modListHTML);
    //clone so we don't reduce the list of mods every time a tag is selected
    originalOptions = $("#modSelect option").clone();
    filterEntries();
  } catch (error) {
    console.error("Failed to load mod entries:", error);
  }
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
  const url_string = window.location.href;
  const url = new URL(url_string);
  return url.searchParams.get(param);
}

function modCompare2(a, b) {
  const nameA = a.getAttribute("mod-name");
  const nameB = b.getAttribute("mod-name");

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
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
