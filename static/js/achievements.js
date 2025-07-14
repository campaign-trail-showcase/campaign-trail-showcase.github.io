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
    overflow: hidden;
    transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
    max-height: 0;
    opacity: 0;
  }
  .achSubHolder.visible {
    max-height: 2000px;
    opacity: 1;
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
    margin: 15px 0 -10px 0;
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
`;
document.head.appendChild(styleElement);

function openAchievements() {
  addAllAchievements();
  
  achWindow.style.display = "block";
  
  centerAchievementsWindow();
}

function centerAchievementsWindow() {
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

// Returns true if the achievement is unlocked
function addAchivement(achName, achData, parent, theme) {
  const ach = document.createElement("div");
  const locked = unlockedAch[achName] == null;

  ach.classList.add("achBox");
  ach.classList.toggle("locked", locked);
  
  const themeStyles = theme ? {
    titleColor: `color:${theme.ui_text_color}`,
    textBg: `background-color:${theme.description_background_color}`,
    textColor: `color:${theme.description_text_color}`,
    mainBg: theme.main_color
  } : { titleColor: "", textBg: "", textColor: "", mainBg: "" };
  
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

  if (theme) {
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
  
  const defaultButton = document.createElement("button");
  defaultButton.innerText = "Default";
  defaultButton.classList.toggle("active", achSortMethod === "default");
  defaultButton.addEventListener("click", () => {
    achSortMethod = "default";
    updateSortingButtonStates();
    addAllAchievements();
  });
  
  const mostCompleteButton = document.createElement("button");
  mostCompleteButton.innerText = "Most Complete";
  mostCompleteButton.classList.toggle("active", achSortMethod === "percentComplete");
  mostCompleteButton.addEventListener("click", () => {
    achSortMethod = "percentComplete";
    updateSortingButtonStates();
    addAllAchievements();
  });
  
  const mostAchButton = document.createElement("button");
  mostAchButton.innerText = "Most Achievements";
  mostAchButton.classList.toggle("active", achSortMethod === "mostAch");
  mostAchButton.addEventListener("click", () => {
    achSortMethod = "mostAch";
    updateSortingButtonStates();
    addAllAchievements();
  });
  
  const leastAchButton = document.createElement("button");
  leastAchButton.innerText = "Least Achievements";
  leastAchButton.classList.toggle("active", achSortMethod === "leastAch");
  leastAchButton.addEventListener("click", () => {
    achSortMethod = "leastAch";
    updateSortingButtonStates();
    addAllAchievements();
  });
  
  const favoritesButton = document.createElement("button");
  favoritesButton.innerText = "Show Favorites Only";
  favoritesButton.classList.toggle("active", showOnlyFavoriteMods);
  favoritesButton.addEventListener("click", () => {
    showOnlyFavoriteMods = !showOnlyFavoriteMods;
    favoritesButton.classList.toggle("active", showOnlyFavoriteMods);
    currentAchPage = 1;
    addAllAchievements();
  });
  
  controlsContainer.appendChild(defaultButton);
  controlsContainer.appendChild(mostCompleteButton);
  controlsContainer.appendChild(mostAchButton);
  controlsContainer.appendChild(leastAchButton);
  controlsContainer.appendChild(favoritesButton);
  
  return controlsContainer;
  
  function updateSortingButtonStates() {
    defaultButton.classList.toggle("active", achSortMethod === "default");
    mostCompleteButton.classList.toggle("active", achSortMethod === "percentComplete");
    mostAchButton.classList.toggle("active", achSortMethod === "mostAch");
    leastAchButton.classList.toggle("active", achSortMethod === "leastAch");
  }
}

function addAllAchievements() {
  let achAvail = false;
  achContent.innerHTML = "";
  
  achContent.appendChild(addSortingControls());
  
  const fragment = document.createDocumentFragment();

  // if we're playing a mod, show only its achievements
  const showOnlyCurrentMod = window.modBeingPlayed && allAch[window.modBeingPlayed];
  
  let names = Object.keys(allAch).sort();
  
  if (showOnlyCurrentMod) {
    // special case: when playing 2024, also show 2024 Divided States achievements
    if (window.modBeingPlayed === "2024") {
      names = names.filter(modName => modName === "2024" || modName === "2024 Divided States");
    } else {
      names = names.filter(modName => modName === window.modBeingPlayed);
    }
  }
  
  if (showOnlyFavoriteMods) {
    const favMods = getFavoriteMods();
    if (favMods.size > 0 || pinnedAchMods.size > 0) {
      names = names.filter(modName => favMods.has(modName) || pinnedAchMods.has(modName));
    } else {
      console.log("No favorite mods found. Showing all achievements.");
    }
  }
  
  const modCompletionData = names.map(modName => {
    let count = 0;
    let total = 0;
    
    if (allAch[modName]) {
      total = Object.keys(allAch[modName]).length;
      
      for (const achName in allAch[modName]) {
        if (unlockedAch[achName] != null) {
          count++;
        }
      }
    }
    
    const percentComplete = total > 0 ? (count / total) * 100 : 0;
    const favMods = getFavoriteMods();
    
    return {
      modName,
      count,
      total,
      percentComplete,
      // for sorting pinned and favorite mods first
      isPinned: pinnedAchMods.has(modName),
      isFavorite: favMods.has(modName)
    };
  });
  
  switch (achSortMethod) {
    case "percentComplete":
      modCompletionData.sort((a, b) => {
        // pinned mods first, then by percent complete
        if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1;
        return b.percentComplete - a.percentComplete;
      });
      break;
    case "mostAch":
      modCompletionData.sort((a, b) => {
        if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1;
        return b.total - a.total;
      });
      break;
    case "leastAch":
      modCompletionData.sort((a, b) => {
        if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1;
        return a.total - b.total;
      });
      break;
    default:
      // Ordenação padrão: pinados primeiro, depois alfabética
      modCompletionData.sort((a, b) => {
        if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1;
        return a.modName.localeCompare(b.modName);
      });
  }
  
  names = modCompletionData.map(data => data.modName);
  
  totalAchPages = Math.ceil(names.length / achievementsPerPage);
  
  if (currentAchPage > totalAchPages && totalAchPages > 0) {
    currentAchPage = totalAchPages;
  }
  
  const startIndex = (currentAchPage - 1) * achievementsPerPage;
  const endIndex = Math.min(startIndex + achievementsPerPage, names.length);
  
  const currentPageNames = names.slice(startIndex, endIndex);
  
  for (let i = 0; i < currentPageNames.length; i++) {
    const modName = currentPageNames[i];
    const modData = modCompletionData.find(data => data.modName === modName);

    if (!allAch[modName]) {
      continue;
    }

    let count = modData.count;
    let total = modData.total;
    achAvail = true;
    const holder = document.createElement("div");
    holder.classList.add("achHolder");
    const subHolder = document.createElement("div");
    const labelHolder = document.createElement("div");
    subHolder.classList.add("achSubHolder");
    
    const theme =
      localStorage.getItem("customModBoxThemesEnabled") === "true"
        ? customModBoxThemes[modName]
        : null;

    for (const ach in allAch[modName]) {
      if (addAchivement(ach, allAch[modName][ach], subHolder, theme)) {
        // Increment count only if the achievement is unlocked
      }
    }

    const percentage = modData.percentComplete.toFixed(2);
    
    const actionsContainer = document.createElement("div");
    actionsContainer.classList.add("mod-actions");
    
    const pinButton = document.createElement("button");
    pinButton.classList.add("pin-button");
    pinButton.innerHTML = "📌";
    pinButton.title = pinnedAchMods.has(modName) ? "Unpin mod" : "Pin mod";
    pinButton.classList.toggle("pinned", pinnedAchMods.has(modName));
    pinButton.addEventListener("click", (e) => {
      e.stopPropagation();
      togglePinnedMod(modName);
    });
    
    actionsContainer.appendChild(pinButton);
    
    const favMods = getFavoriteMods();
    if (favMods.has(modName)) {
      const favIcon = document.createElement("span");
      favIcon.innerHTML = "⭐";
      favIcon.classList.add("fav-icon");
      favIcon.title = "Favorite mod";
      actionsContainer.appendChild(favIcon);
    }
    
    labelHolder.innerHTML = `
      <p>${namesOfModsFromValue[modName]}</p>
      <span class="mod-completion" style="position:absolute;top:0;right:0;font-style:italic;opacity:80%;padding:8px;font-size:small;">${count}/${total} (${percentage}%)</span>
    `;
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
      subHolder.style.display = isVisible ? "none" : "inline-flex";
    };

    holder.appendChild(labelHolder);
    holder.appendChild(subHolder);

    fragment.appendChild(holder);

    if (theme) {
      if(theme.label_background_image_url) {
        labelHolder.style.backgroundImage = `url("${theme.label_background_image_url}")`;
      }
      else {
        labelHolder.style.backgroundColor = theme.header_color;
      }
      labelHolder.style.color = theme.header_text_color;
    }
  }
  
  if (!achAvail) {
    const message = document.createElement("p");
    message.textContent = showOnlyFavoriteMods 
      ? "No achievements found for favorite mods. Add mods to favorites or pin them to see them here!"
      : "No achievements are currently added yet! Check back later!";
    fragment.appendChild(message);
  }
  
  achContent.appendChild(fragment);
  
  if (totalAchPages > 1) {
    addAchievementPaginationControls(fragment);
  }
}

function addAchievementPaginationControls(fragment) {
  const paginationContainer = document.createElement("div");
  paginationContainer.classList.add("ach-pagination");
  
  // Previous button
  const prevButton = document.createElement("button");
  prevButton.innerText = "Previous";
  prevButton.disabled = currentAchPage === 1;
  prevButton.addEventListener("click", () => {
    if (currentAchPage > 1) {
      currentAchPage--;
      addAllAchievements();
    }
  });
  
  // Page info
  const pageInfo = document.createElement("span");
  pageInfo.innerText = `Page ${currentAchPage} of ${totalAchPages}`;
  pageInfo.classList.add("ach-pagination-info");
  
  // Next button
  const nextButton = document.createElement("button");
  nextButton.innerText = "Next";
  nextButton.disabled = currentAchPage === totalAchPages;
  nextButton.addEventListener("click", () => {
    if (currentAchPage < totalAchPages) {
      currentAchPage++;
      addAllAchievements();
    }
  });
  
  paginationContainer.appendChild(prevButton);
  paginationContainer.appendChild(pageInfo);
  paginationContainer.appendChild(nextButton);
  
  achContent.appendChild(paginationContainer);
}

addAllAchievements();
