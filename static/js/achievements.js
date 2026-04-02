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
try {
  const legacyViewAch = localStorage.getItem("showAllModsLegacyAch");
  if (legacyViewAch !== null) {
    showAllModsLegacyAch = legacyViewAch === "true";
  }
} catch (e) {
  showAllModsLegacyAch = false;
}
let isAchUIInitialized = false;
let pinnedAchMods = new Set();

try {
  pinnedAchMods = new Set(
    localStorage.getItem("pinnedAchMods")?.split(",").filter(Boolean) || [],
  );
} catch (e) {
  console.error("Error while loading pinned achievements:", e);
  pinnedAchMods = new Set();
}

function getFavoriteMods() {
  try {
    if (
      window.favoriteMods &&
      window.favoriteMods instanceof Set &&
      window.favoriteMods.size > 0
    ) {
      return window.favoriteMods;
    } else {
      const favModsString = localStorage.getItem("favoriteMods");
      if (favModsString) {
        return new Set(favModsString.split(",").filter(Boolean));
      }
    }
  } catch (e) {
    console.error("Error while loading favorite mods:", e);
  }
  return new Set();
}

// some mods are combined together, but use only one mod link (e.g. 2024 with 2024 DSA)
// ensure that when a user favorites one, the linked counterpart is treated as favorite as well
function expandFavoriteSet(favSet) {
  if (!favSet || !(favSet instanceof Set)) return new Set();

  const expanded = new Set(favSet);

  const linkedPairs = [["2024", "2024 Divided States"]];

  for (const [a, b] of linkedPairs) {
    if (expanded.has(a) && !expanded.has(b)) expanded.add(b);
    if (expanded.has(b) && !expanded.has(a)) expanded.add(a);
  }

  return expanded;
}

let achievementsCache = null;
let modCompletionCache = null;
let lastCacheUpdate = 0;
const CACHE_TTL = 5000; // 5 seconds

function buildAchievementsCache() {
  if (achievementsCache) return achievementsCache;

  achievementsCache = new Map();
  for (const mod in allAch) {
    for (const a in allAch[mod]) {
      achievementsCache.set(a, allAch[mod][a]);
    }
  }
  return achievementsCache;
}

function findAchievementByName(name) {
  let cache = buildAchievementsCache();

  // if the achievement isn't found, the cache might be stale
  // so we invalidate it and rebuild it from current allAch
  if (!cache.has(name)) {
    achievementsCache = null;
    cache = buildAchievementsCache();
  }

  return cache.get(name) || null;
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

  // invalidate cache
  modCompletionCache = null;
  lastCacheUpdate = 0;

  addAllAchievements();
}

const achWindow = document.getElementById("achwindow");
const achButton = document.getElementById("achButton");
const achContent = document.getElementById("achcontent");

function openAchievements() {
  // If the UI hasn't been built yet, build it once.
  if (!isAchUIInitialized) {
    setupAchievementUI();
  }

  // run the render logic.
  addAllAchievements();

  achWindow.style.display = "block";
  centerAchievementsWindow();
}

function setupAchievementUI() {
  // clear the main content area ONCE
  achContent.innerHTML = "";

  // create and cache the static control elements
  searchBarElement = addSearchBar();
  sortingControlsElement = addSortingControls();
  legacyViewControlsElement = addLegacyViewControls();

  // create and cache the container for the dynamic list of mods and pagination
  contentContainerElement = document.createElement("div");
  contentContainerElement.id = "ach-content-container";
  contentContainerElement.style.width = "100%"; // ensure it takes full width in the flex layout

  // append all the static pieces to the DOM in the correct order
  achContent.appendChild(searchBarElement);
  achContent.appendChild(sortingControlsElement);
  achContent.appendChild(legacyViewControlsElement);
  achContent.appendChild(contentContainerElement);

  isAchUIInitialized = true;
}

function centerAchievementsWindow() {
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

const colorContrastCache = new Map();

function getContrastingTextColor(bgColor) {
  if (!bgColor) return '#000000';
  if (colorContrastCache.has(bgColor)) return colorContrastCache.get(bgColor);

  const color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
  if (color.length < 6) return '#000000';

  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  // YIQ formula to determine brightness
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  const result = (yiq >= 128) ? '#000000' : '#FFFFFF';

  colorContrastCache.set(bgColor, result);
  return result;
}

// Returns true if the achievement is unlocked
function addAchivement(achName, achData, parent, theme, lazyLoad = false) {
  const ach = document.createElement("div");
  const locked = unlockedAch[achName] == null;

  ach.classList.add("achBox");
  ach.classList.toggle("locked", locked);

  let themeStyles = {
    titleColor: "",
    textBg: "",
    textColor: "",
    mainBg: "",
    borderColor: "",
  };
  if (theme) {
    if (theme.main_color) {
      const idealTextColor = getContrastingTextColor(theme.main_color);
      themeStyles.titleColor = `color: ${idealTextColor};`;
    } else {
      themeStyles.titleColor = theme.header_text_color
        ? `color:${theme.header_text_color}`
        : "";
    }

    themeStyles.textBg = theme.description_background_color
      ? `background-color:${theme.description_background_color}`
      : "";
    themeStyles.textColor = theme.description_text_color
      ? `color:${theme.description_text_color}`
      : "";
    themeStyles.mainBg = theme.main_color ? theme.main_color : "";
    themeStyles.borderColor = theme.secondary_color ? theme.secondary_color : "";
  }

  const imgSrc = lazyLoad
    ? "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    : achData.image;
  const imgDataSrc = lazyLoad ? `data-src="${achData.image}"` : "";

  ach.innerHTML = `
    <div class="achTitle" style="${themeStyles.titleColor}">
        ${achName}
    </div>
    <div class="achImageHolder">
        <img class="achImage" src="${imgSrc}" ${imgDataSrc}></img>
    </div>
    <div class="achText" style="${themeStyles.textBg}; ${themeStyles.textColor}">
        ${achData.description}
    </div>
    `;

  if (themeStyles.mainBg) {
    ach.style.backgroundColor = themeStyles.mainBg;
  }

  if (themeStyles.borderColor) {
    ach.style.outlineColor = themeStyles.borderColor;
  }

  parent.appendChild(ach);

  return !locked;
}

// observe images locally
const globalImageObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      }
    });
  },
  { rootMargin: "50px" },
);

// lazy load images
function setupLazyLoading(container) {
  if ("IntersectionObserver" in window) {
    container.querySelectorAll("img[data-src]").forEach((img) => {
      globalImageObserver.observe(img);
    });
  } else {
    // fallback for older browsers
    container.querySelectorAll("img[data-src]").forEach((img) => {
      img.src = img.dataset.src;
    });
  }
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
  if (sortingControlsElement) {
    const buttons = sortingControlsElement.querySelectorAll("button");
    buttons.forEach((button) => {
      const buttonText = button.innerText;
      if (buttonText === "Default") {
        button.classList.toggle("active", achSortMethod === "default");
      } else if (buttonText === "Most Complete") {
        button.classList.toggle("active", achSortMethod === "percentComplete");
      } else if (buttonText === "Most Achievements") {
        button.classList.toggle("active", achSortMethod === "mostAch");
      } else if (buttonText === "Least Achievements") {
        button.classList.toggle("active", achSortMethod === "leastAch");
      } else if (buttonText === "Show Favorites Only") {
        button.classList.toggle("active", showOnlyFavoriteMods);
        button.disabled = showAllModsLegacyAch;
      }
    });
    return sortingControlsElement;
  }

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
  controlsContainer.appendChild(
    createButton("Most Complete", "percentComplete"),
  );
  controlsContainer.appendChild(createButton("Most Achievements", "mostAch"));
  controlsContainer.appendChild(createButton("Least Achievements", "leastAch"));

  const favoritesButton = document.createElement("button");
  favoritesButton.innerText = "Show Favorites Only";
  favoritesButton.classList.toggle("active", showOnlyFavoriteMods);
  favoritesButton.disabled = showAllModsLegacyAch;
  favoritesButton.addEventListener("click", () => {
    showOnlyFavoriteMods = !showOnlyFavoriteMods;
    currentAchPage = 1;
    addAllAchievements();
  });
  controlsContainer.appendChild(favoritesButton);

  sortingControlsElement = controlsContainer;
  return sortingControlsElement;
}

function addLegacyViewControls() {
  if (legacyViewControlsElement) {
    const checkbox = legacyViewControlsElement.querySelector(
      "#legacyViewCheckbox",
    );
    if (checkbox) {
      checkbox.checked = showAllModsLegacyAch;
    }
    return legacyViewControlsElement;
  }

  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.gap = "6px";
  container.style.margin = "10px auto -10px auto";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "legacyViewCheckbox";
  checkbox.checked = showAllModsLegacyAch;
  checkbox.style.cursor = "pointer";
  checkbox.addEventListener("change", () => {
    showAllModsLegacyAch = checkbox.checked;
    try {
      localStorage.setItem("showAllModsLegacyAch", showAllModsLegacyAch);
    } catch (e) { }
    if (showAllModsLegacyAch) {
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

  legacyViewControlsElement = container;
  return legacyViewControlsElement;
}

let achievementSearchText = "";
let achSearchQuery = "";

let searchBarElement = null;
let sortingControlsElement = null;
let legacyViewControlsElement = null;
let contentContainerElement = null;

// search bar for achievements
function addSearchBar() {
  if (searchBarElement) {
    // update the input value if query changed externally
    const searchInput = searchBarElement.querySelector(".ach-search-input");
    if (searchInput && searchInput.value !== achSearchQuery) {
      searchInput.value = achSearchQuery;
    }
    return searchBarElement;
  }

  const searchContainer = document.createElement("div");
  searchContainer.classList.add("ach-search-container");

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search achievements or mods...";
  searchInput.classList.add("ach-search-input");
  searchInput.value = achSearchQuery;

  // debounce search to avoid excessive re-renders
  let searchTimeout;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      achSearchQuery = e.target.value.toLowerCase();
      currentAchPage = 1;
      addAllAchievements();
    }, 300);
  });

  searchContainer.appendChild(searchInput);
  searchBarElement = searchContainer;
  return searchBarElement;
}

function getModCompletionData(forceRefresh = false) {
  const now = Date.now();

  if (
    !forceRefresh &&
    modCompletionCache &&
    now - lastCacheUpdate < CACHE_TTL
  ) {
    return modCompletionCache;
  }

  const allModNames = Object.keys(allAch);
  modCompletionCache = allModNames.map((modName) => {
    let count = 0;
    let total = 0;
    if (allAch[modName]) {
      total = Object.keys(allAch[modName]).length;
      for (const achName in allAch[modName]) {
        if (unlockedAch[achName] != null) count++;
      }
    }
    const percentComplete = total > 0 ? (count / total) * 100 : 0;
    return {
      modName,
      count,
      total,
      percentComplete,
      isPinned: pinnedAchMods.has(modName),
      isFavorite: getFavoriteMods().has(modName),
    };
  });

  lastCacheUpdate = now;
  return modCompletionCache;
}

function renderModList(modsToRender, useLazyLoading = false) {
  const fragment = document.createDocumentFragment();

  if (modsToRender.length === 0) {
    const message = document.createElement("p");
    message.style.textAlign = "center";
    message.style.marginTop = "20px";
    message.textContent =
      achSearchQuery.trim().length > 0
        ? "No achievements or mods match your search."
        : showOnlyFavoriteMods
          ? "No achievements found for favorite mods. Uncheck the filter or pin some mods to see them here!"
          : "No achievements are currently added yet! Check back later!";
    fragment.appendChild(message);
    return fragment;
  }

  for (const modData of modsToRender) {
    const {
      modName,
      count,
      total,
      percentComplete,
      displayName,
      filterResult,
    } = modData;

    const holder = document.createElement("div");
    holder.classList.add("achHolder");
    const subHolder = document.createElement("div");
    subHolder.classList.add("achSubHolder");
    const labelHolder = document.createElement("div");

    let theme = null;
    const themeState = localStorage.getItem("modThemeState");
    if (themeState === "default" || themeState === "detailed")
      theme = customModBoxThemes[modName];

    // loop through achievements
    for (const ach in allAch[modName]) {
      if (
        filterResult === true ||
        (filterResult instanceof Set && filterResult.has(ach))
      ) {
        const achObj = allAch[modName][ach];
        addAchivement(ach, achObj, subHolder, theme, useLazyLoading);
      }
    }

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

    if (getFavoriteMods().has(modName)) {
      const favIcon = document.createElement("span");
      favIcon.innerHTML = "⭐";
      favIcon.classList.add("fav-icon");
      favIcon.title = "Favorite mod";
      actionsContainer.appendChild(favIcon);
    }

    labelHolder.innerHTML = `<p>${displayName}</p><span class="mod-completion" style="position:absolute;top:0;right:0;font-style:italic;opacity:80%;padding:8px;font-size:small;">${count}/${total} (${percentComplete.toFixed(2)}%)</span>`;
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

      if (!isVisible && useLazyLoading) {
        requestAnimationFrame(() => setupLazyLoading(subHolder));
      }
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

  return fragment;
}

function getCurrentModName() {
  if (window.modBeingPlayed && allAch[window.modBeingPlayed]) {
    return window.modBeingPlayed;
  }

  // check if RecReading is available and has achievements
  if (window.RecReading && Object.keys(allAch).length > 0) {
    // if only one mod has achievements, assume that's the current one
    const availableMods = Object.keys(allAch);
    if (availableMods.length === 1) {
      return availableMods[0];
    }
  }

  return null;
}

let renderTimeout;
function addAllAchievements() {
  clearTimeout(renderTimeout);
  renderTimeout = setTimeout(() => {
    performRender();
  }, 10);
}

function performRender() {
  if (!contentContainerElement) return;

  // update the state of the static controls
  addSortingControls();
  addLegacyViewControls();

  // get the base data
  const modCompletionData = getModCompletionData();
  let processedData = [...modCompletionData];

  // filter the data (legacy + favorites)
  const currentMod = getCurrentModName();

  if (!showAllModsLegacyAch && currentMod) {
    const linkedMods = Array.from(expandFavoriteSet(new Set([currentMod])));
    processedData = processedData.filter((mod) =>
      linkedMods.includes(mod.modName),
    );
  } else if (showOnlyFavoriteMods) {
    const expandedFavs = expandFavoriteSet(getFavoriteMods());
    // expand favorites to include linked mods (e.g., 2024 <-> 2024 Divided States)
    processedData = processedData.filter(
      (mod) => expandedFavs.has(mod.modName) || mod.isPinned,
    );
  }

  if (achSearchQuery.trim().length > 0) {
    const query = achSearchQuery.trim();

    // map the data to include a "filterResult" property
    processedData = processedData.map((modData) => {
      const modDisplayName =
        namesOfModsFromValue[modData.modName] || modData.modName;

      // does the mod name match?
      if (modDisplayName.toLowerCase().includes(query)) {
        // if so, show achievements
        return { ...modData, displayName: modDisplayName, filterResult: true };
      }

      // if not, check specific achievements
      const matchingAchKeys = new Set();
      if (allAch[modData.modName]) {
        for (const [achName, achData] of Object.entries(
          allAch[modData.modName],
        )) {
          if (
            achName.toLowerCase().includes(query) ||
            (achData.description &&
              achData.description.toLowerCase().includes(query))
          ) {
            matchingAchKeys.add(achName);
          }
        }
      }

      // if we found specific matches, pass the set. otherwise don't
      const result = matchingAchKeys.size > 0 ? matchingAchKeys : false;
      return { ...modData, displayName: modDisplayName, filterResult: result };
    });

    // remove mods with no matches
    processedData = processedData.filter((item) => item.filterResult !== false);
  } else {
    processedData = processedData.map((modData) => ({
      ...modData,
      displayName: namesOfModsFromValue[modData.modName] || modData.modName,
      filterResult: true,
    }));
  }

  // sort the filtered data
  switch (achSortMethod) {
    case "percentComplete":
      processedData.sort(
        (a, b) =>
          b.isPinned - a.isPinned || b.percentComplete - a.percentComplete,
      );
      break;
    case "mostAch":
      processedData.sort(
        (a, b) => b.isPinned - a.isPinned || b.total - a.total,
      );
      break;
    case "leastAch":
      processedData.sort(
        (a, b) => b.isPinned - a.isPinned || a.total - b.total,
      );
      break;
    default:
      processedData.sort(
        (a, b) => b.isPinned - a.isPinned || a.modName.localeCompare(b.modName),
      );
  }

  // clear the dynamic content container
  contentContainerElement.innerHTML = "";

  // paginate and render into the clean container
  if (showAllModsLegacyAch) {
    const fragment = renderModList(processedData, true);
    contentContainerElement.appendChild(fragment);
    requestAnimationFrame(() => setupLazyLoading(contentContainerElement));
  } else {
    totalAchPages = Math.ceil(processedData.length / achievementsPerPage);
    if (currentAchPage > totalAchPages && totalAchPages > 0)
      currentAchPage = totalAchPages;

    const startIndex = (currentAchPage - 1) * achievementsPerPage;
    const endIndex = Math.min(
      startIndex + achievementsPerPage,
      processedData.length,
    );
    const currentPageData = processedData.slice(startIndex, endIndex);

    const fragment = renderModList(currentPageData, false);
    contentContainerElement.appendChild(fragment);

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
  prevButton.addEventListener("click", () => {
    if (currentAchPage > 1) {
      currentAchPage--;
      addAllAchievements();
    }
  });

  const pageInfo = document.createElement("span");
  pageInfo.innerText = `Page ${currentAchPage} of ${totalAchPages}`;
  pageInfo.classList.add("ach-pagination-info");

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

  contentContainerElement.appendChild(paginationContainer);
}

addAllAchievements();
