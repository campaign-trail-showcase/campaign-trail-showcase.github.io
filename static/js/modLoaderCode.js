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
let showAllModsLegacy = false;
try {
  const legacyView = localStorage.getItem("showAllModsLegacy");
  if (legacyView !== null) {
    showAllModsLegacy = legacyView === "true";
  }
} catch (e) {
  showAllModsLegacy = false;
}

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

let customModBoxThemes = {};

// check if the modThemeState is set in localStorage
if (localStorage.getItem("modThemeState") === null) {
  // if not, check for the legacy 'customModBoxThemesEnabled' setting
  const legacyThemeState = localStorage.getItem("customModBoxThemesEnabled");

  if (legacyThemeState !== null) {
    // migration time!
    // 'true' maps to 'default', and 'false' maps to 'off'
    const newThemeState = legacyThemeState === "true" ? "default" : "off";
    localStorage.setItem("modThemeState", newThemeState);

    // remove old key
    localStorage.removeItem("customModBoxThemesEnabled");
  } else {
    // initialize with default
    localStorage.setItem("modThemeState", "default");
  }
}

function updateButtonText() {
  const state = localStorage.getItem("modThemeState");
  if (state === "off") {
    customThemesButton.innerText = "Mod Themes: Off";
  } else if (state === "default") {
    customThemesButton.innerText = "Mod Themes: Default";
  } else {
    customThemesButton.innerText = "Mod Themes: Detailed";
  }
}
updateButtonText();

const themeStates = ["off", "default", "detailed"];

function toggleModBoxThemes() {
  const currentState = localStorage.getItem("modThemeState");
  const currentIndex = themeStates.indexOf(currentState);
  const nextIndex = (currentIndex + 1) % themeStates.length;
  localStorage.setItem("modThemeState", themeStates[nextIndex]);

  updateButtonText();
  applyModBoxThemes();
}

function applyStyle(element, property, value) {
  if (element) {
    element.style[property] = value;
  }
}

function applyModBoxThemes() {
  const state = localStorage.getItem("modThemeState");

  modList.forEach(modView => {
    const modName = modView.getAttribute("mod-name");
    const theme = customModBoxThemes[modName];
    let applyTheme = false;

    if (state === "default" && theme && !theme._isFallback) {
      applyTheme = true;
    } else if (state === "detailed" && theme) {
      applyTheme = true;
    }

    const modTitle = modView.querySelector(".mod-title");
    const modDesc = modView.querySelector(".mod-desc");
    const buttons = modView.querySelectorAll(".hover-button");
    const ratingBg = modView.querySelector(".rating-background");

    if (applyTheme) {
      if (modTitle) {
        modTitle.style.background = `url('${theme.header_image_url ?? ""}')`;
        applyStyle(modTitle, "backgroundColor", theme.header_color);
        applyStyle(modTitle.querySelector("p"), "color", theme.header_text_color);
      }
      if (modDesc) {
        applyStyle(modDesc, "backgroundColor", theme.description_background_color);
        applyStyle(modDesc, "color", theme.description_text_color);
      }
      applyStyle(modView, "backgroundColor", theme.main_color);
      buttons.forEach(btn => {
        applyStyle(btn, "backgroundColor", theme.secondary_color);
        const span = btn.querySelector("span");
        applyStyle(span, "color", theme.ui_text_color);
      });
      if (ratingBg) {
        applyStyle(ratingBg, "backgroundColor", theme.secondary_color);
        ratingBg.querySelectorAll(".modRating, .modPlayCount").forEach(el => {
          applyStyle(el, "color", theme.ui_text_color);
        });
      }
    } else {
      if (modTitle) {
        modTitle.style.background = "";
        modTitle.style.backgroundColor = "";
        modTitle.querySelector("p").style.color = "";
      }
      if (modDesc) {
        modDesc.style.backgroundColor = "";
        modDesc.style.color = "";
      }
      modView.style.backgroundColor = "";
      buttons.forEach(btn => {
        btn.style.backgroundColor = "";
        const span = btn.querySelector("span");
        if (span) span.style.color = "";
      });
      if (ratingBg) {
        ratingBg.style.backgroundColor = "";
        ratingBg.querySelectorAll(".modRating, .modPlayCount").forEach(el => {
          el.style.color = "";
        });
      }
    }
  });
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
      executeMod("temp" + codeSnippet, { temp });
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

function getContrastYIQ(hexcolor) {
  hexcolor = hexcolor.replace('#', '');
  let r = parseInt(hexcolor.substring(0, 2), 16);
  let g = parseInt(hexcolor.substring(2, 4), 16);
  let b = parseInt(hexcolor.substring(4, 6), 16);
  // YIQ formula for contrast
  let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return yiq >= 128 ? '#222' : '#fff';
}

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(x => x + x).join('');
  }
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  return [r, g, b];
}
function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}
function mixColor(hex, mixWith, percent) {
  let [r1, g1, b1] = hexToRgb(hex);
  let [r2, g2, b2] = hexToRgb(mixWith);
  let r = Math.round(r1 * (1 - percent) + r2 * percent);
  let g = Math.round(g1 * (1 - percent) + g2 * percent);
  let b = Math.round(b1 * (1 - percent) + b2 * percent);
  return rgbToHex(r, g, b);
}

function getContrastRatio(hex1, hex2) {
  // so we can calculate the contrast ratio between two hex colors (WCAG) 
  function luminance([r, g, b]) {
    let a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }
  let lum1 = luminance(hexToRgb(hex1));
  let lum2 = luminance(hexToRgb(hex2));
  let brightest = Math.max(lum1, lum2);
  let darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

function adjustThemeContrast(themeBaseColor, themeTextColor) {
  let ratio = getContrastRatio(themeBaseColor, themeTextColor);
  let tries = 0;

  while (ratio < 4.5 && tries < 5) {
    if (themeBaseColor=== '#fff') {
      themeBaseColor = mixColor(themeBaseColor, '#000', 0.2);
    } else {
      themeBaseColor = mixColor(themeBaseColor, '#fff', 0.2);
    }
    const contrastWhite2 = getContrastRatio(themeBaseColor, '#fff');
    const contrastBlack2 = getContrastRatio(themeBaseColor, '#222');
    themeTextColor = contrastWhite2 > contrastBlack2 ? '#fff' : '#222';
    ratio = getContrastRatio(themeBaseColor, themeTextColor);
    tries++;
  }

  return {themeBaseColor, themeTextColor};
}

function lightenDarkenContrast(themeBaseColor, themeTextColor) {
  let lum = getContrastRatio(themeBaseColor, '#fff');
  if (themeTextColor === '#222' && lum < 2.5) {
    themeBaseColor = mixColor(themeBaseColor, '#fff', 0.3);
    themeTextColor = getContrastYIQ(themeBaseColor);
  } else if (themeTextColor === '#fff' && lum > 6) {
    themeBaseColor = mixColor(themeBaseColor, '#000', 0.3);
    themeTextColor = getContrastYIQ(themeBaseColor);
  }
  return { themeBaseColor, themeTextColor };
}

function ensureThemeContrast(theme) {
  if (theme._isFallback) {
    // adjust text color for header contrast
    if (theme.header_color) {
      const contrastWhite = getContrastRatio(theme.header_color, '#fff');
      const contrastBlack = getContrastRatio(theme.header_color, '#222');
      theme.header_text_color = contrastWhite > contrastBlack ? '#fff' : '#222';
      
      const { themeBaseColor, themeTextColor } = adjustThemeContrast(
        theme.header_color,theme.header_text_color
      );

      theme.header_color = themeBaseColor;
      theme.header_text_color = themeTextColor;
    }
    // adjust text color for description contrast
    if (theme.description_background_color) {
      const contrastWhite = getContrastRatio(theme.description_background_color, '#fff');
      const contrastBlack = getContrastRatio(theme.description_background_color, '#222');
      theme.description_text_color = contrastWhite > contrastBlack ? '#fff' : '#222';

      const { themeBaseColor, themeTextColor } = adjustThemeContrast(
        theme.description_background_color,theme.description_text_color
      );

      // for mod description backgrounds; we lighten/darken based on text color
      const finalContrast = lightenDarkenContrast(themeBaseColor, themeTextColor);
      theme.description_background_color = finalContrast.themeBaseColor;
      theme.description_text_color = finalContrast.themeTextColor;
    }
    // adjust text color for secondary contrast
    if (theme.secondary_color) {
      const contrastWhite = getContrastRatio(theme.secondary_color, '#fff');
      const contrastBlack = getContrastRatio(theme.secondary_color, '#222');
      theme.ui_text_color = contrastWhite > contrastBlack ? '#fff' : '#000';

      const { themeBaseColor, themeTextColor } = adjustThemeContrast(
        theme.secondary_color,theme.ui_text_color
      );

      // for secondary colors; we lighten/darken based on text color
      const finalContrast = lightenDarkenContrast(themeBaseColor, themeTextColor);
      theme.secondary_color = finalContrast.themeBaseColor;
      theme.ui_text_color = finalContrast.themeTextColor;
    }
  }
}

// regex patterns to extract theme details from raw mod text
const winColorRegex = /coloring_window\s*=\s*['"](#[A-Fa-f0-9]{6,8})['"]/;
const titleColorRegex = /coloring_title\s*=\s*['"](#[A-Fa-f0-9]{6,8})['"]/;
const headerImgRegex = /game_header"\)\.style="background-image: url\(([^\)]+)\)/;
const winImgRegex = /game_window"\)\.style.backgroundImage = "url\(([^\)]+)\)/;
const borderColorRegex = /game_window"\)\.style.borderColor = "(#[A-Fa-f0-9]{6,8})"/;

function extractFallbackTheme(rawModText, nameOfMod) {
  // only create a theme if a real modBoxTheme doesn't exist
  if (customModBoxThemes[nameOfMod] && customModBoxThemes[nameOfMod].header_color) return;

  const theme = { _isFallback: true };

  const winColorMatch = rawModText.match(winColorRegex);
  const titleColorMatch = rawModText.match(titleColorRegex);
  const headerImgMatch = rawModText.match(headerImgRegex);
  const winImgMatch = rawModText.match(winImgRegex);
  const borderColorMatch = rawModText.match(borderColorRegex);

  const textColMatch = rawModText.match(/text_col\s*=\s*["'](#[A-Fa-f0-9]{6,8}|white|black)["']/);

  let winColor = winColorMatch ? winColorMatch[1] : null;
  let titleColor = titleColorMatch ? titleColorMatch[1] : null;
  let borderColor = borderColorMatch ? borderColorMatch[1] : null;

  // if winColor and titleColor are the same, generate a lighter/darker variant
  if (winColor && titleColor && winColor === titleColor) {
    theme.main_color = winColor;
    theme.header_color = mixColor(winColor, '#000', 0.15);
    theme.secondary_color = borderColor || mixColor(winColor, '#fff', 0.15);
  } else {
    theme.main_color = winColor;
    theme.header_color = titleColor;
    theme.secondary_color = borderColor || titleColor || winColor;
  }

  if (headerImgMatch) theme.header_image_url = headerImgMatch[1];
  if (winImgMatch) theme.description_background_color = winImgMatch[1];

  // no background color for the description? use main_color, header_color, or white
  if (!theme.description_background_color) {
    // if main_color is set, use it; otherwise, use header_color or white
    if (theme.main_color) {
      const [r, g, b] = hexToRgb(theme.main_color);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      if (brightness < 128) {
        theme.description_background_color = mixColor(theme.main_color, '#000', 0.25);
      } else {
        theme.description_background_color = mixColor(theme.main_color, '#fff', 0.25);
      }
    } else {
      theme.description_background_color = theme.header_color || '#fff';
    }
  }

  // if description_background_color == main_color, mix it with black
  if (theme.description_background_color === theme.main_color) {
    theme.description_background_color = mixColor(theme.main_color, '#000', 0.25);
  }

  // if header_text_color is not set, use text_col if found
  if (textColMatch) {
    theme.header_text_color = textColMatch[1] === 'white' ? '#fff' : (textColMatch[1] === 'black' ? '#222' : textColMatch[1]);
  }

  // ensure contrast for the theme colors 
  ensureThemeContrast(theme);

  // if at least one color was found, save it as a theme
  if ((theme.main_color || theme.header_color || theme.header_image_url) && !customModBoxThemes[nameOfMod]) {
    customModBoxThemes[nameOfMod] = theme;
  }
}

function getCustomTheme(rawModText, nameOfMod) {
  const temp = extractFromCode1(
    "campaignTrail_temp.modBoxTheme = {",
    ".modBoxTheme = {",
    "}",
    rawModText,
    nameOfMod,
  );
  if (temp?.modBoxTheme && Object.keys(temp.modBoxTheme).length > 0) {
    customModBoxThemes[nameOfMod] = temp.modBoxTheme;
  } else {
    extractFallbackTheme(rawModText, nameOfMod);
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

// cache to store award icons
const awardIconCache = {};
const pendingIconLoads = {};
const failedIconUrls = {};

// when testing CTS in forks, the award icons may not be available
// so we provide an alternative URL to load them from
function getAlternativeIconUrl(url) {
  if (url.includes('/static/dba2024/')) {
    const fileName = url.split('/').pop();
    return `https://raw.githubusercontent.com/campaign-trail-showcase/campaign-trail-showcase.github.io/refs/heads/main/static/dba2024/${fileName}`;
  }
  return null;
}

// preload award icons
function preloadAwardIcon(url) {
  // if already cached, return the cached URL
  if (awardIconCache[url]) {
    return Promise.resolve(url);
  }

  // if already pending, return the existing promise
  if (pendingIconLoads[url]) {
    return pendingIconLoads[url];
  }

  // create a new promise for loading the icon
  const loadPromise = new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      awardIconCache[url] = true;
      delete pendingIconLoads[url];
      resolve(url);
    };

    img.onerror = () => {
      // try to load an alternative URL if the primary fails
      const altUrl = getAlternativeIconUrl(url);
      if (altUrl) {
        console.log(`Primary URL failed, trying alternative: ${altUrl}`);
        const altImg = new Image();

        altImg.onload = () => {
          awardIconCache[url] = true;
          awardIconCache[altUrl] = true;
          delete pendingIconLoads[url];
          resolve(url);
        };

        altImg.onerror = () => {
          console.error(`Failed to load award icon: ${url} (and alternative)`);
          failedIconUrls[url] = true;
          delete pendingIconLoads[url];
          reject(url);
        };

        altImg.src = altUrl;
      } else {
        console.error(`Failed to load award icon: ${url}`);
        failedIconUrls[url] = true;
        delete pendingIconLoads[url];
        reject(url);
      }
    };

    img.src = url;
  });

  pendingIconLoads[url] = loadPromise;
  return loadPromise;
}

function createLegacyViewControls() {
  const container = document.createElement("div");
  container.style.display = "inline-flex";
  container.style.alignItems = "center";
  container.style.gap = "6px";
  container.style.marginLeft = "15px";
  container.style.verticalAlign = "middle";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "modMenuLegacyViewCheckbox";
  checkbox.checked = showAllModsLegacy;
  checkbox.style.cursor = "pointer";
  checkbox.addEventListener("change", () => {
    showAllModsLegacy = checkbox.checked;
    try {
      localStorage.setItem("showAllModsLegacy", showAllModsLegacy);
    } catch (e) {}
    currentPage = 1;
    updateModViews();
  });

  const label = document.createElement("label");
  label.htmlFor = "modMenuLegacyViewCheckbox";
  label.innerText = "View all mods";
  label.className = "mod-legacy-view-label";
  label.style.cursor = "pointer";
  label.style.userSelect = "none";

  const loadingSpan = document.createElement("span");
  loadingSpan.id = "mod-menu-loading-message";
  loadingSpan.textContent = "Loading all mods...";
  loadingSpan.style.display = "none";
  loadingSpan.style.fontStyle = "italic";

  container.appendChild(checkbox);
  container.appendChild(label);
  container.appendChild(loadingSpan);
  return container;
}


$(document).ready(async () => {
  // show loading indicator while mods load
  const gridEl = document.getElementById("mod-grid");
  if (gridEl) gridEl.innerHTML = `<div id="loading-mods-text" style="text-align:center;margin:20px;">Loading mods...</div>`;

  const modNameParam = getUrlParam("modName");

  favoriteMods = new Set(
    localStorage.getItem("favoriteMods")?.split(",") || [],
  );
  customMods = new Set(localStorage.getItem("customMods")?.split(",") || []);

  const $modSelect = $("#modSelect");
  const originalOptions = $modSelect.find("option").clone();

  // Inject the "View all mods" checkbox next to the sorter using a more robust selector
  const sorter = document.querySelector('[onchange="onChangeModSorter(event)"]');
  if (sorter && sorter.parentNode) {
    const legacyControls = createLegacyViewControls();
    // insert after the sorter element
    sorter.parentNode.insertBefore(legacyControls, sorter.nextSibling);
  } else {
    console.warn("Could not find mod sorter dropdown to attach 'View all' checkbox.");
  }

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
    // MODIFIED: logic to load both mods when needed
    if (
      mod.value === "other" ||
      ( // Special case for DSA because it uses two code 1s to define achievements. So we need to load both of those to get both sets.
        getUrlParam("modName") != null &&
        getUrlParam("modName") != mod.value &&
        !(getUrlParam("modName") === "2024" && mod.value === "2024 Divided States")
      )
    ) {
      allModsLength--;
      return;
    }

    namesOfModsFromValue[mod.value] = mod.innerText ?? mod.value;

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

  // if we are not loading a specific mod, preload all award icons
  if (!modNameParam) {
    // collect all award icon URLs for preloading
    const allAwardIconUrls = new Set();
    Array.from(mods).forEach(mod => {
      if (mod.dataset && mod.dataset.awardimageurls) {
        mod.dataset.awardimageurls.split(", ").forEach(url => {
          allAwardIconUrls.add(url);
        });
      }
    });

    // preload all award icons
    if (allAwardIconUrls.size > 0) {
      console.log(`Preloading ${allAwardIconUrls.size} award icons...`);
      Promise.allSettled([...allAwardIconUrls].map(preloadAwardIcon))
        .then(results => {
          const loaded = results.filter(r => r.status === 'fulfilled').length;
          console.log(`Preloaded ${loaded}/${allAwardIconUrls.size} award icons`);
        });
    }
  }

  // Set up from custom mods
  let customModsLoaded = [];
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
    customModsLoaded.push(modView);
    modList.push(modView);
  }

  // push custom mods to the mod grid first
  const modGrid = document.getElementById("mod-grid");
  const fragment = document.createDocumentFragment();
  customModsLoaded.forEach(modView => {
    fragment.appendChild(modView);
  });

  modsLoaded.sort(modCompare);
  for (let i = 0; i < modsLoaded.length; i++) {
    const modData = modsLoaded[i];

    // this is a special case for DSA, so we skip this in particular
    if (modData.mod.value === '2024 Divided States') continue;

    const modView = createModView(
      modData.mod,
      modData.imageUrl,
      modData.description,
    );
    fragment.appendChild(modView);

    if (
      modData.mod.dataset.awardimageurls &&
      modData.mod.dataset.awardimageurls.split(", ").length > 1
    ) {
      // find the holder and start the cycling process
      cycleAwards(
        modView.querySelector(".trophy-holder"),
        0,
      );
    }

    modList.push(modView);
  }
  modGrid.appendChild(fragment);

  createTagButtons(tagsFound);
  updateModViews();

  applyModBoxThemes();

  if (modNameParam) {
    customThemesButton.style.display = "none";
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

  modView._tagsArray = mod.dataset.tags ? mod.dataset.tags.split(" ") : [];

  const favText = isFavorite(mod.value) ? UNFAV : FAV;

  modView.innerHTML = `
    <div class="mod-title">
        <p>${mod.innerText}</p>
    </div>
    <div class = "mod-img-desc">
      <img class="mod-image" data-src="${imageUrl}" loading="lazy" alt="${mod.value}BoxImage"></img>
      <div class="mod-desc">${description}</div>
    </div>
    <div class="hover-button-holder">
        <button class="mod-play-button hover-button" onclick="loadModFromButton(\`${mod.value}\`)"><span>${PLAY}</span></button>
        <button class="hover-button" onclick="toggleFavorite(event, \`${mod.value}\`)"><span>${favText}</span></button>
        <button style="${customMods.has(mod.value) ? "" : "display:none;"}" class="hover-button" onclick="deleteCustomMod(event, \`${mod.value}\`)"><span>${DELETE}</span></button>
    </div>
    ${!customMods.has(mod.value)
      ? `
    <div class="rating-background">
        <div class="modRating">LOADING FAVORITES...</div>
        <div class="modPlayCount">LOADING PLAYS...</div>
        ${mod.dataset.awards != null && mod.dataset.awards.length > 0 ? renderAwards(mod.dataset.awards, mod.dataset.awardimageurls) : ""}
    </div>`
      : ""
    }
  `;

  modView.id = mod.value;
  return modView;
}

function renderAwards(awards, rawAwardUrls) {
  let awardUrls = rawAwardUrls.split(", ");

  // create an image tag for each URL. the first is visible, the rest are hidden
  let awardImagesHTML = awardUrls.map((url, index) => {
    // if the primary URL fails, load the alternative URL
    const altUrl = getAlternativeIconUrl(url);
    const style = index === 0 ? 'opacity: 1; transition: opacity 0.3s ease-in-out;' : 'opacity: 0; transition: opacity 0.3s ease-in-out;';
    return `<img class="mod-trophy" src="${url}" style="${style}"${altUrl ? ` onerror="this.onerror=null;this.src='${altUrl}'"` : ""}>`;
  }).join('');

  return `
    <div class="trophy-holder">
      <span class="tooltiptext">${awards.replaceAll(", ", "<br><br>")}</span>
      ${awardImagesHTML}
    </div>
  `;
}

function cycleAwards(holder, index) {
  // ensure the element is still part of the page
  if (!holder || !holder.isConnected) {
    return;
  }

  const images = holder.querySelectorAll(".mod-trophy");
  if (images.length <= 1) {
    return; // no need to cycle if there's only one image
  }

  images[index].style.opacity = '0';
  const nextIndex = (index + 1) % images.length;
  images[nextIndex].style.opacity = '1';

  setTimeout(() => {
    cycleAwards(holder, nextIndex);
  }, 2000);
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

  // remove from the grid
  const modView = document.getElementById(modValue);
  if (modView) {
    modView.parentNode.removeChild(modView);
  }
  const idx = modList.findIndex(mv => mv.id === modValue);
  if (idx !== -1) {
    modList.splice(idx, 1);
  }

  updateModViews();
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

  // save/update custom mod
  customMods.add(modName);
  localStorage.setItem("customMods", Array.from(customMods));
  localStorage.setItem(modName + "_code1", code1);
  localStorage.setItem(modName + "_code2", code2);

  // remove old mod if it exists
  const oldModView = document.getElementById(modName);
  if (oldModView && oldModView.parentNode) {
    oldModView.parentNode.removeChild(oldModView);
  }
  const oldIdx = modList.findIndex(mv => mv.id === modName);
  if (oldIdx !== -1) {
    modList.splice(oldIdx, 1);
  }

  // update mod box theme
  getAllAchievements(code1, modName);
  getCustomTheme(code1, modName);

  const imageUrl =
    temp.election_json[0].fields.site_image ??
    temp.election_json[0].fields.image_url;
  const description =
    temp.election_json[0].fields.site_description ??
    temp.election_json[0].fields.summary;

  const modView = createModView(
    {
      value: modName,
      innerText: modName,
      dataset: { tags: "Custom" },
    },
    imageUrl,
    description,
  );

  const modGrid = document.getElementById("mod-grid");
  modGrid.insertBefore(modView, modGrid.firstChild);
  modList.unshift(modView);

  // ensure "Custom" tag is checked so the new mod is visible
  for (const tagCheckbox of tagList) {
    if (tagCheckbox.value === "Custom") {
      tagCheckbox.checked = true;
    }
  }

  updateModViews();
  applyModBoxThemes();
}

function filterMods(event) {
  nameFilter = event.target.value.toLowerCase();
  currentPage = 1;
  updateModViews();
}

function createTagButtons(tagsFound) {
  const tagsGrid = document.getElementById("tags");
  const fragment = document.createDocumentFragment();
  Array.from(tagsFound)
    .sort()
    .forEach((tag) => {
      const tagButton = document.createElement("div");
      tagButton.classList.add("tag-button");
      tagButton.innerHTML = `
        <input type="checkbox" id="${tag}" name="${tag}" value="${tag}" checked>
        <label style="user-select:none" for="${tag}">${tag.replaceAll("_", " ")}</label><br>
        `;
      const checkbox = tagButton.getElementsByTagName("INPUT")[0];
      tagButton.addEventListener("click", (event) => {
        if (event.target === tagButton) checkbox.click();
      });
      tagList.push(checkbox);
      checkbox.addEventListener("change", updateModViews);
      fragment.appendChild(tagButton);
    });
  tagsGrid.appendChild(fragment);
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
    const modTags = modView._tagsArray || [];
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

function toggleFilterControls(disabled) {
  document.querySelectorAll('.tag-button input').forEach(el => el.disabled = disabled);
  document.querySelectorAll('.tablinks').forEach(el => el.style.pointerEvents = disabled ? 'none' : 'auto');
  const searchInput = document.querySelector('[oninput="filterMods(event)"]');
  if (searchInput) searchInput.disabled = disabled;
}

function updateModViews(event) {
  if (event) {
    currentPage = 1; // reset to first page on filter change
  }

  const modGrid = document.getElementById("mod-grid");

  // clear the grid to start fresh
  while (modGrid.firstChild) {
    modGrid.removeChild(modGrid.firstChild);
  }

  // remove pagination controls as they will be re-added if needed
  const paginationContainer = document.getElementById("pagination-controls");
  if (paginationContainer) paginationContainer.innerHTML = "";

  if (showAllModsLegacy) {
    toggleFilterControls(true);

    const loadingMessage = document.getElementById("mod-menu-loading-message");
    const checkbox = document.getElementById("modMenuLegacyViewCheckbox");
    if (loadingMessage) loadingMessage.style.display = 'inline';
    if (checkbox) checkbox.disabled = true;

    requestAnimationFrame(() => {
      const fragment = document.createDocumentFragment();
      modList.forEach((modView) => {
        modView.style.display = "flex";
        const img = modView.querySelector(".mod-image");
        if (img) img.src = img.getAttribute("data-src") || img.src;
        fragment.appendChild(modView);
        getFavsAndPlayCount(modView.getAttribute("mod-name"), modView);
      });
      modGrid.appendChild(fragment);

      if (loadingMessage) loadingMessage.style.display = 'none';
      if (checkbox) checkbox.disabled = false;
    });

  } else {
    toggleFilterControls(false); // re-enable filters

    const visibleMods = getVisibleMods();
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

    const fragment = document.createDocumentFragment();
    pageMods.forEach((modView) => {
      modView.style.display = "flex";
      // lazy load image only when visible
      const img = modView.querySelector(".mod-image");
      if (img) {
        img.loading = "lazy";
        img.src = img.getAttribute("data-src") || img.src;
      }
      fragment.appendChild(modView);
      // lazy load mod info
      getFavsAndPlayCount(modView.getAttribute("mod-name"), modView);
    });
    modGrid.appendChild(fragment);

    renderPaginationControls(visibleMods.length);
  }
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

  // page input
  const pageInputContainer = document.createElement("span");
  pageInputContainer.classList.add("pagination-input-container");
  
  const pageInput = document.createElement("input");
  pageInput.type = "number";
  pageInput.min = "1";
  pageInput.max = totalPages;
  pageInput.value = currentPage;
  pageInput.id = "pageInput";
  pageInput.classList.add("pagination-input");

  const pageInputLabel = document.createElement("label");
  pageInputLabel.setAttribute("for", "pageInput");
  pageInputLabel.classList.add("sr-only");
  pageInputLabel.textContent = "Page number";

  // go to page button
  const goButton = document.createElement("button");
  goButton.innerText = "Go";
  goButton.classList.add("mode-button", "pagination-go-button");
  goButton.addEventListener("click", () => {
    const inputPage = parseInt(pageInput.value);
    if (inputPage >= 1 && inputPage <= totalPages && inputPage !== currentPage) {
      currentPage = inputPage;
      updateModViews();
    } else {
      // resets new input to current input if new input is invalid page number
      pageInput.value = currentPage; 
    }
  });

  pageInputContainer.appendChild(pageInput);
  pageInputContainer.appendChild(pageInputLabel);
  pageInputContainer.appendChild(goButton);
  paginationContainer.appendChild(pageInputContainer);

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
      // filter out mods that already have favs and play count
      const modsToLoad = visibleMods.filter(modView =>
        !modView.dataset.favs || !modView.dataset.playCount
      );
      // load only those we need to
      const promises = modsToLoad.map((modView) =>
        getFavsAndPlayCount(modView.getAttribute("mod-name"), modView)
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
  while (modGrid.firstChild) {
    modGrid.removeChild(modGrid.firstChild);
  }
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

  if (customMods.has(modValue)) {
    const customModCode = localStorage.getItem(modValue + "_code1");
    executeMod(customModCode, {
      campaignTrail_temp,
      window,
      document,
      $,
      jQuery
    });
    diff_mod = true;
    customMod = modValue;
  } else {
    const pageURL = new URL(window.location.href);
    if (!pageURL.searchParams.has("modName")) {
      pageURL.searchParams.set("modName", modValue);
      window.history.replaceState(null, "", pageURL.href);
    }

    try {
      const res = await fetch(`../static/mods/${modValue}_init.html`);
      const modCode = await res.text();
      executeMod(modCode, {
        campaignTrail_temp,
        window,
        document,
        $,
        jQuery
      });
      diff_mod = true;
    } catch (error) {
      console.error(`Failed to load mod ${modValue}:`, error);
      alert(`Failed to load mod ${modValue}. See console for details.`);
      return;
    }
  }

  if (customThemesButton) {
    customThemesButton.style.display = "none";
  }

  $("#modloaddiv")[0].style.display = "none";
  $("#modLoadReveal")[0].style.display = "none";
  document.getElementById("featured-mods-area").style.display = "none";
  modded = true;

  modBeingPlayed = modValue;

  if (!customMods.has(modValue)) {
    document.getElementById("copyLinkButton").style.display = "block";
    document.getElementById("goBackButton").style.display = "inline";
  }

  const announcement = document.getElementById("announcement");
  if (announcement) {
    announcement.style.display = "none";
  }

  setTimeout(() => updateModViewCount(modValue), 10000);
  window.scrollTo(0, 0); // Scroll to top
}

async function copyModLink() {
  const modLink = new URL(window.location.href);

  if (!modLink.searchParams.has("modName")) {
    modLink.searchParams.set("modName", encodeURIComponent(modBeingPlayed));
  }

  try {
    await window.navigator.clipboard.writeText(modLink.href);
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
      body: JSON.stringify({ modName }),
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
  $modSelect.empty();

  const fragment = document.createDocumentFragment();
  filteredOptions.each(function () {
    fragment.appendChild(this);
  });
  $modSelect[0].appendChild(fragment);

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
  currentPage = 1; // reset to first page when mode changes
  updateModViews();
}