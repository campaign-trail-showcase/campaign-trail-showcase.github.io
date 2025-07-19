let unlockedAch = {};
try {
  unlockedAch = localStorage.getItem("unlockedAch")
    ? JSON.parse(localStorage.getItem("unlockedAch"))
    : {};
} catch (e) {
  console.error("Error while loading achievements:", e);
  unlockedAch = {};
}

let currentAchPage = 1;
const achievementsPerPage = 5;
let totalAchPages = 1;

let achSortMethod = "default"; // default, percentComplete, mostAch, leastAch
let showOnlyFavoriteMods = false;
let showAllModsLegacyAch = false;
let pinnedAchMods = new Set();

try {
  pinnedAchMods = new Set(
    localStorage.getItem("pinnedAchMods")?.split(",").filter(Boolean) || []
  );
} catch (e) {
  console.error("Error while loading pinned achievements:", e);
  pinnedAchMods = new Set();
}

function getFavoriteMods() {
  try {
    if (window.favoriteMods && window.favoriteMods instanceof Set && window.favoriteMods.size > 0) {
      return window.favoriteMods;
    } else {
      const favModsString = localStorage.getItem("favoriteMods");
      if (favModsString) {
        return new Set(favModsString.split(',').filter(Boolean));
      }
    }
  } catch (e) {
    console.error("Error while loading favorite mods:", e);
  }
  return new Set();
}

let achievementsCache = null;

function buildAchievementsCache() {
  if (achievementsCache) return achievementsCache;
  
  achievementsCache = {};
  for (const mod in allAch) {
    for (const a in allAch[mod]) {
      achievementsCache[a] = allAch[mod][a];
    }
  }
  return achievementsCache;
}

function findAchievementByName(name) {
  const cache = buildAchievementsCache();
  return cache[name] || null;
}

function unlockAchievement(name) {
  const ach = findAchievementByName(name);

  if (ach == null) {
    console.log("There is no achievement with the name '" + name + "'");
    return;
  }

  if (cheatsActive && ach.cannotBeCheated) {
    console.log(`Would unlock '${name}' but won't because cheating!`);
    return;
  }

  if (unlockedAch[name] == null) {
    alert("ACHIEVEMENT UNLOCKED: " + name);
  }

  unlockedAch[name] = ach;
  try {
    localStorage.setItem("unlockedAch", JSON.stringify(unlockedAch));
  } catch (e) {
    console.error("Error while saving achievements:", e);
  }
  addAllAchievements();
}

const achWindow = document.getElementById("achwindow");
const achButton = document.getElementById("achButton");
const achContent = document.getElementById("achcontent");

const styleElement = document.createElement("style");
styleElement.textContent = `
  .achSubHolder {
    overflow: auto;
    transition: opacity 0.3s ease-out;
    max-height: none;
    opacity: 0;
    display: none;
  }
  .achSubHolder.visible {
    opacity: 1;
    display: inline-flex;
    flex-wrap: wrap;
  }
  .ach-pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    gap: 10px;
  }
  .ach-pagination button, .ach-controls button, .pin-button, .fav-icon {
    padding: 5px 10px;
    background-color: #4a6ea9;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 2px;
  }
  .ach-pagination button:disabled, .ach-controls button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  .ach-pagination-info {
    padding: 5px 10px;
  }
  .ach-controls {
    display: flex;
    justify-content: center;
    margin: 15px 0 0 0;
    flex-wrap: wrap;
  }
  .ach-controls button.active {
    background-color: #2a4e89;
    font-weight: bold;
  }
  .mod-actions {
    position: absolute;
    top: 5px;
    left: 5px;
    display: flex;
    gap: 5px;
    z-index: 10;
  }
  .pin-button, .fav-icon {
    width: 28px;
    height: 28px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 16px;
  }
  .pin-button.pinned {
    background-color: #f0ad4e;
  }
  .fav-icon {
    background-color: #f0ad4e;
    cursor: default;
  }
  .achLabel {
    position: relative;
  }
  .mod-completion {
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
  }

  /* Mobile and small screen responsive styles */
  @media (max-width: 768px) {
    #achwindow {
      width: 95vw !important;
      height: 90vh !important;
      max-width: 95vw !important;
      max-height: 90vh !important;
    }
    
    #achcontent {
      max-height: calc(90vh - 80px);
    }
    
    .ach-controls button {
      padding: 12px 6px;
      font-size: 16px;
      min-height: 44px;
    }
    
    .ach-pagination {
      flex-direction: column;
      gap: 12px;
      margin-top: 20px;
    }
    
    .ach-pagination button {
      padding: 12px 20px;
      font-size: 16px;
      min-height: 44px;
      touch-action: manipulation;
    }
    
    .ach-pagination-info {
      text-align: center;
      padding: 12px;
      font-size: 16px;
    }
    
    .achBox {
      margin: 8px 4px;
      min-width: calc(50% - 8px);
    }
    
    .achBox img {
      width: calc(50% - 8px);      
    }
    
    .achLabel {
      padding: 12px;
      min-height: 40px;
      cursor: pointer;
    }
    
    .achLabel p {
      font-size: 16px;
      margin: 0;
      padding-right: 80px;
    }
    
  }

  @media (max-width: 480px) {
    .achBox {
      min-width: calc(60% - 8px);
    }
    
    .ach-controls {
      padding: 0 5px;
    }
    
    .ach-pagination {
      padding: 0 5px;
    }
    
    .achLabel p {
      font-size: 14px;
      padding-right: 60px;
    }
    
    .mod-completion {
      font-size: 10px;
      padding: 4px;
    }
    
    .achBox img {
      width: calc(40% - 8px);      
    }
    
    .pin-button, .fav-icon {
      width: 32px;
      height: 32px;
      font-size: 16px;
    }
  }
`;
document.head.appendChild(styleElement);

function openAchievements() {
  addAllAchievements();

  achWindow.style.display = "block";

  centerAchievementsWindow();
}

function centerAchievementsWindow() {
  // Skip centering on mobile - use CSS positioning instead
  if (window.innerWidth <= 768) {
    return;
  }
  
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  const achWidth = achWindow.offsetWidth;
  const achHeight = achWindow.offsetHeight;
  
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  const leftPosition = scrollLeft + (windowWidth - achWidth) / 2;
  const topPosition = scrollTop + (windowHeight - achHeight) / 2;
  
  achWindow.style.left = Math.max(0, leftPosition) + "px";
  achWindow.style.top = Math.max(0, topPosition) + "px";
}

function closeAchievements() {
  achWindow.style.display = "none";
}

dragElement(achWindow);

function getContrastingTextColor(bgColor) {
  if (!bgColor) return '#000000';

  const color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
  if (color.length < 6) return '#000000';

  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  // YIQ formula to determine brightness
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

  return (yiq >= 128) ? '#000000' : '#FFFFFF';
}

// Returns true if the achievement is unlocked
function addAchivement(achName, achData, parent, theme) {
  const ach = document.createElement("div");
  const locked = unlockedAch[achName] == null;

  ach.classList.add("achBox");
  ach.classList.toggle("locked", locked);

  let themeStyles = { titleColor: "", textBg: "", textColor: "", mainBg: "" };
  if (theme) {
    if (theme.main_color) {
      const idealTextColor = getContrastingTextColor(theme.main_color);
      themeStyles.titleColor = `color: ${idealTextColor};`;
    } else {
      themeStyles.titleColor = theme.header_text_color ? `color:${theme.header_text_color}` : "";
    }
    
    themeStyles.textBg = theme.description_background_color ? `background-color:${theme.description_background_color}` : "";
    themeStyles.textColor = theme.description_text_color ? `color:${theme.description_text_color}` : "";
    themeStyles.mainBg = theme.main_color ? theme.main_color : "";
  }

  ach.innerHTML = `
    <div class="achTitle" style="${themeStyles.titleColor}">
        ${achName}
    </div>
    <div class="achImageHolder">
        <img class="achImage" src=${achData.image}></img>
    </div>
    <div class="achText" style="${themeStyles.textBg}; ${themeStyles.textColor}">
        ${achData.description}
    </div>
    `;

  if (themeStyles.mainBg) {
    ach.style.backgroundColor = themeStyles.mainBg;
  }

  parent.appendChild(ach);

  return !locked;
}

function togglePinnedMod(modName) {
  if (pinnedAchMods.has(modName)) {
    pinnedAchMods.delete(modName);
  } else {
    pinnedAchMods.add(modName);
  }

  localStorage.setItem("pinnedAchMods", Array.from(pinnedAchMods).join(","));
  
  addAllAchievements();
}

function addSortingControls() {
  const controlsContainer = document.createElement("div");
  controlsContainer.classList.add("ach-controls");
  
  const createButton = (text, sortMethod) => {
    const button = document.createElement("button");
    button.innerText = text;
    button.classList.toggle("active", achSortMethod === sortMethod);
    button.addEventListener("click", () => {
      achSortMethod = sortMethod;
      addAllAchievements();
    });
    return button;
  };
  
  controlsContainer.appendChild(createButton("Default", "default"));
  controlsContainer.appendChild(createButton("Most Complete", "percentComplete"));
  controlsContainer.appendChild(createButton("Most Achievements", "mostAch"));
  controlsContainer.appendChild(createButton("Least Achievements", "leastAch"));
  
  const favoritesButton = document.createElement("button");
  favoritesButton.innerText = "Show Favorites Only";
  favoritesButton.classList.toggle("active", showOnlyFavoriteMods);
  favoritesButton.disabled = showAllModsLegacy;
  favoritesButton.addEventListener("click", () => {
    showOnlyFavoriteMods = !showOnlyFavoriteMods;
    currentAchPage = 1;
    addAllAchievements();
  });
  controlsContainer.appendChild(favoritesButton);
  
  return controlsContainer;
}

function addLegacyViewControls() {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.gap = "6px";
  container.style.margin = "10px auto -10px auto";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "legacyViewCheckbox";
  checkbox.checked = showAllModsLegacy;
  checkbox.style.cursor = "pointer";
  checkbox.addEventListener("change", () => {
    showAllModsLegacy = checkbox.checked;
    if (showAllModsLegacy) {
      showOnlyFavoriteMods = false;
    }
    currentAchPage = 1;
    addAllAchievements();
  });

  const label = document.createElement("label");
  label.htmlFor = "legacyViewCheckbox";
  label.innerText = " View all mods";
  label.style.cursor = "pointer";

  const loadingSpan = document.createElement("span");
  loadingSpan.id = "legacy-view-loading-message";
  loadingSpan.textContent = "Listing all mods, hang on...";
  loadingSpan.style.display = "none";
  loadingSpan.style.fontStyle = "italic";

  container.appendChild(checkbox);
  container.appendChild(label);
  container.appendChild(loadingSpan);

  return container;
}

function renderModList(modNamesToRender, modCompletionData) {
    const fragment = document.createDocumentFragment();
    let achAvail = modNamesToRender.length > 0;

    for (const modName of modNamesToRender) {
        const modData = modCompletionData.find(data => data.modName === modName);
        if (!allAch[modName]) continue;
        const { count, total, percentComplete } = modData;
        const holder = document.createElement("div");
        holder.classList.add("achHolder");
        const subHolder = document.createElement("div");
        subHolder.classList.add("achSubHolder");
        const labelHolder = document.createElement("div");
        
        let theme = null;
        const themeState = localStorage.getItem("modThemeState");
        if (themeState === "default" || themeState === "detailed") theme = customModBoxThemes[modName];
        
        for (const ach in allAch[modName]) {
            addAchivement(ach, allAch[modName][ach], subHolder, theme);
        }
        
        const actionsContainer = document.createElement("div");
        actionsContainer.classList.add("mod-actions");
        const pinButton = document.createElement("button");
        pinButton.classList.add("pin-button");
        pinButton.innerHTML = "📌";
        pinButton.title = pinnedAchMods.has(modName) ? "Unpin mod" : "Pin mod";
        pinButton.classList.toggle("pinned", pinnedAchMods.has(modName));
        pinButton.addEventListener("click", (e) => { e.stopPropagation(); togglePinnedMod(modName); });
        actionsContainer.appendChild(pinButton);
        
        if (getFavoriteMods().has(modName)) {
            const favIcon = document.createElement("span");
            favIcon.innerHTML = "⭐";
            favIcon.classList.add("fav-icon");
            favIcon.title = "Favorite mod";
            actionsContainer.appendChild(favIcon);
        }
        
        labelHolder.innerHTML = `<p>${namesOfModsFromValue[modName]}</p><span class="mod-completion" style="position:absolute;top:0;right:0;font-style:italic;opacity:80%;padding:8px;font-size:small;">${count}/${total} (${percentComplete.toFixed(2)}%)</span>`;
        labelHolder.classList.add("achLabel");
        labelHolder.appendChild(actionsContainer);
        const toggle = document.createElement("div");
        toggle.classList.add("achToggle");
        labelHolder.appendChild(toggle);
        toggle.innerText = "+";
        labelHolder.onclick = () => {
            const isVisible = subHolder.classList.contains("visible");
            toggle.innerText = isVisible ? "+" : "-";
            subHolder.classList.toggle("visible");
        };
        holder.appendChild(labelHolder);
        holder.appendChild(subHolder);
        fragment.appendChild(holder);
        
        if (theme) {
            if (theme.label_background_image_url) {
                labelHolder.style.backgroundImage = `url("${theme.label_background_image_url}")`;
                labelHolder.style.backgroundColor = "";
            } else if (theme.header_color) {
                labelHolder.style.backgroundImage = "";
                labelHolder.style.backgroundColor = theme.header_color;
            }
            labelHolder.style.color = theme.header_text_color ?? "";
        }
    }
    
    if (!achAvail) {
        const message = document.createElement("p");
        message.style.textAlign = "center";
        message.style.marginTop = "20px";
        message.textContent = showOnlyFavoriteMods 
          ? "No achievements found for favorite mods. Uncheck the filter or pin some mods to see them here!"
          : "No achievements are currently added yet! Check back later!";
        fragment.appendChild(message);
    }
    return fragment;
}

function addAllAchievements() {
  achContent.innerHTML = "";
  
  achContent.appendChild(addSortingControls());
  achContent.appendChild(addLegacyViewControls());
  
  // prepare data for all mods first
  let allModNames = Object.keys(allAch);
  const modCompletionData = allModNames.map(modName => {
    let count = 0;
    let total = 0;
    if (allAch[modName]) {
      total = Object.keys(allAch[modName]).length;
      for (const achName in allAch[modName]) {
        if (unlockedAch[achName] != null) count++;
      }
    }
    const percentComplete = total > 0 ? (count / total) * 100 : 0;
    return { modName, count, total, percentComplete, isPinned: pinnedAchMods.has(modName), isFavorite: getFavoriteMods().has(modName) };
  });

  // sort the entire dataset
  switch (achSortMethod) {
    case "percentComplete": modCompletionData.sort((a, b) => (a.isPinned !== b.isPinned) ? (a.isPinned ? -1 : 1) : b.percentComplete - a.percentComplete); break;
    case "mostAch": modCompletionData.sort((a, b) => (a.isPinned !== b.isPinned) ? (a.isPinned ? -1 : 1) : b.total - a.total); break;
    case "leastAch": modCompletionData.sort((a, b) => (a.isPinned !== b.isPinned) ? (a.isPinned ? -1 : 1) : a.total - b.total); break;
    default: modCompletionData.sort((a, b) => (a.isPinned !== b.isPinned) ? (a.isPinned ? -1 : 1) : a.modName.localeCompare(b.modName));
  }
  let sortedNames = modCompletionData.map(data => data.modName);

  if (showAllModsLegacy) {
    const loadingMessageSpan = document.getElementById("legacy-view-loading-message");
    const checkbox = document.getElementById("legacyViewCheckbox");

    if (loadingMessageSpan) loadingMessageSpan.style.display = "inline";
    if (checkbox) checkbox.disabled = true;

    setTimeout(() => {
      const fragment = renderModList(sortedNames, modCompletionData);
      achContent.appendChild(fragment);

      if (loadingMessageSpan) loadingMessageSpan.style.display = "none";
      if (checkbox) checkbox.disabled = false;
    }, 0);

  } else {
    // standard view: filter and paginate
    let namesToShow = sortedNames;

    // special case: when playing 2024, also show 2024 Divided States achievements
    if (window.modBeingPlayed === "2024" || window.modBeingPlayed === "2024 Divided States") {
        namesToShow = namesToShow.filter(modName => modName === "2024" || modName === "2024 Divided States");
    } else if (window.modBeingPlayed && allAch[window.modBeingPlayed]) {
        namesToShow = namesToShow.filter(modName => modName === window.modBeingPlayed);
    }
    if (showOnlyFavoriteMods) {
        const favMods = getFavoriteMods();
        if (favMods.size > 0 || pinnedAchMods.size > 0) {
            namesToShow = namesToShow.filter(modName => favMods.has(modName) || pinnedAchMods.has(modName));
        }
    }

    totalAchPages = Math.ceil(namesToShow.length / achievementsPerPage);
    if (currentAchPage > totalAchPages && totalAchPages > 0) currentAchPage = totalAchPages;
    const startIndex = (currentAchPage - 1) * achievementsPerPage;
    const endIndex = Math.min(startIndex + achievementsPerPage, namesToShow.length);
    const currentPageNames = namesToShow.slice(startIndex, endIndex);

    const fragment = renderModList(currentPageNames, modCompletionData);
    achContent.appendChild(fragment);

    if (totalAchPages > 1) {
      addAchievementPaginationControls();
    }
  }
}

function addAchievementPaginationControls() {
  const paginationContainer = document.createElement("div");
  paginationContainer.classList.add("ach-pagination");
  
  // Previous button
  const prevButton = document.createElement("button");
  prevButton.innerText = "Previous";
  prevButton.disabled = currentAchPage === 1;
  prevButton.addEventListener("click", () => { if (currentAchPage > 1) { currentAchPage--; addAllAchievements(); } });
  
  const pageInfo = document.createElement("span");
  pageInfo.innerText = `Page ${currentAchPage} of ${totalAchPages}`;
  pageInfo.classList.add("ach-pagination-info");
  
  const nextButton = document.createElement("button");
  nextButton.innerText = "Next";
  nextButton.disabled = currentAchPage === totalAchPages;
  nextButton.addEventListener("click", () => { if (currentAchPage < totalAchPages) { currentAchPage++; addAllAchievements(); } });
  
  paginationContainer.appendChild(prevButton);
  paginationContainer.appendChild(pageInfo);
  paginationContainer.appendChild(nextButton);
  
  achContent.appendChild(paginationContainer);
}

addAllAchievements();
