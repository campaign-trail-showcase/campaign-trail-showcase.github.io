let loadingFromModButton = false;
const UNFAV = "♥";
const FAV = "♡";
const PLAY = "▶";
const DELETE = "X";
const NEW_RELEASE = "new";
const ALL = "all";

const modList = [];
const modMap = new Map();
const tagList = [];
let originalModsData = [];

let customMods = new Set();
let customMod = false;
window.customMod = false;
let favoriteMods = new Set();

let onlyFavorites = false;
let showAllModsLegacy = false;

// cache and observer for lazy loading metadata
const metadataCache = new Map();
const loadedMetadataMods = new Set();
window.loadedMetadataMods = loadedMetadataMods;

const metadataObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const modView = entry.target;
      const modName = modView.getAttribute("mod-name");

      // stop observing once we begin loading its metadata
      observer.unobserve(modView);

      triggerLazyLoad(modView, modName);
    }
  });
}, { rootMargin: "200px" });

async function getModMetadata(modName) {
  if (metadataCache.has(modName)) {
    return metadataCache.get(modName);
  }

  // if it's a local mod, retrieve metadata from indexedDB
  if (customMods.has(modName)) {
    try {
      const modData = await getModFromDB(modName);
      if (modData && modData.code1) {
        const temp = extractElectionDetails(modData.code1, modName);
        extractModMetadata(modData.code1, modName);

        const imageUrl = temp?.election_json?.[0]?.fields?.site_image ?? temp?.election_json?.[0]?.fields?.image_url ?? "";
        const description = temp?.election_json?.[0]?.fields?.site_description ?? temp?.election_json?.[0]?.fields?.summary ?? "";

        const metadata = { imageUrl, description };
        metadataCache.set(modName, metadata);
        return metadata;
      }
    } catch (e) {
      console.error(`Error loading metadata for custom mod ${modName}:`, e);
    }
    return {
      imageUrl: "",
      description: `<h1 style="color:red">FAILED TO LOAD LOCAL MOD INFO</h1>`
    };
  }

  // otherwise, perform standard fetch from server
  try {
    const res = await fetch(`../static/mods/${modName}_init.html`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const rawModText = await res.text();

    const temp = extractElectionDetails(rawModText, modName);
    extractModMetadata(rawModText, modName);

    let imageUrl = "";
    let description = "";

    if (temp?.election_json?.length > 0 && temp.election_json[0].fields) {
      imageUrl = temp.election_json[0].fields.site_image ?? temp.election_json[0].fields.image_url ?? "";
      description = temp.election_json[0].fields.site_description ?? temp.election_json[0].fields.summary ?? "";
    } else {
      description = `<h1 style="color:red">COULD NOT GET CODE 1 PLEASE ALERT DEV!</h1>`;
    }

    const metadata = { imageUrl, description };
    metadataCache.set(modName, metadata);
    return metadata;
  } catch (error) {
    console.error(`Error loading metadata for ${modName}:`, error);
    return {
      imageUrl: "",
      description: `<h1 style="color:red">FAILED TO LOAD MOD INFO</h1>`
    };
  }
}

async function triggerLazyLoad(modView, modName) {
  const meta = await getModMetadata(modName);
  if (!meta) return;

  if (modView._elements.image && meta.imageUrl) {
    modView._elements.image.src = meta.imageUrl;
  }
  if (modView._elements.desc) {
    modView._elements.desc.innerHTML = meta.description;
  }

  applySingleModTheme(modView);
  getFavsAndPlayCount(modName, modView);
}

// mod view template
const modViewTemplate = document.createElement('template');
modViewTemplate.innerHTML = `
  <div class="community-grid-element">
    <div class="mod-title"><p></p></div>
    <div class="mod-img-desc">
      <img class="mod-image" loading="lazy" alt="">
      <div class="mod-desc"></div>
    </div>
    <div class="hover-button-holder">
      <button class="mod-play-button hover-button"><span></span></button>
      <button class="hover-button fav-button"><span></span></button>
      <button class="hover-button delete-button" style="display:none"><span></span></button>
    </div>
    <div class="rating-background">
      <div class="modRating">LOADING FAVORITES...</div>
      <div class="modPlayCount">LOADING PLAYS...</div>
    </div>
  </div>
`;

// IndexedDB setup
const DB_NAME = "CTSUserMods";
const DB_VERSION = 1;
const STORE_NAME = "customMods";
let db = null;
let useIndexedDB = true;

// initialize IndexedDB
async function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      console.warn("IndexedDB failed to open, falling back to localStorage");
      useIndexedDB = false;
      resolve(null);
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      useIndexedDB = true;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      const database = event.target.result;
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        database.createObjectStore(STORE_NAME, { keyPath: "name" });
      }
    };
  });
}

// save mod to IndexedDB
async function saveModToDB(modName, code1, code2) {
  if (!useIndexedDB || !db) {
    // fallback to localStorage
    localStorage.setItem(modName + "_code1", code1);
    localStorage.setItem(modName + "_code2", code2);
    return;
  }

  return new Promise((resolve, reject) => {
    try {
      const transaction = db.transaction([STORE_NAME], "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put({
        name: modName,
        code1: code1,
        code2: code2 || "" // safety fallback
      });

      transaction.oncomplete = () => {
        resolve();
      };

      transaction.onerror = (e) => {
        console.warn(`Transaction failed for ${modName}:`, e);
        // fallback to localStorage
        localStorage.setItem(modName + "_code1", code1);
        localStorage.setItem(modName + "_code2", code2 || "");
        resolve();
      };
    } catch (e) {
      console.error("DB error during save:", e);
      resolve(); // resolve anyway to prevent app hang
    }
  });
}

// get mod from IndexedDB
async function getModFromDB(modName) {
  if (!useIndexedDB || !db) {
    // fallback to localStorage
    const code1 = localStorage.getItem(modName + "_code1");
    const code2 = localStorage.getItem(modName + "_code2");
    return code1 ? { name: modName, code1, code2 } : null;
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(modName);

    request.onsuccess = () => {
      if (request.result) {
        resolve(request.result);
      } else {
        // try number fallback for legacy numeric keys
        if (!isNaN(modName) && modName !== "") {
          const numRequest = store.get(Number(modName));
          numRequest.onsuccess = () => {
            if (numRequest.result) {
              resolve(numRequest.result);
            } else {
              fallbackToLocal();
            }
          };
          numRequest.onerror = () => fallbackToLocal();
        } else {
          fallbackToLocal();
        }
      }
    };

    function fallbackToLocal() {
      // fallback to localStorage
      const code1 = localStorage.getItem(modName + "_code1");
      const code2 = localStorage.getItem(modName + "_code2");
      resolve(code1 ? { name: modName, code1, code2 } : null);
    }
    request.onerror = () => {
      // fallback to localStorage
      const code1 = localStorage.getItem(modName + "_code1");
      const code2 = localStorage.getItem(modName + "_code2");
      resolve(code1 ? { name: modName, code1, code2 } : null);
    };
  });
}

// delete mod from IndexedDB
async function deleteModFromDB(modName) {
  if (!useIndexedDB || !db) {
    // fallback to localStorage
    localStorage.removeItem(modName + "_code1");
    localStorage.removeItem(modName + "_code2");
    return;
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(modName);
    
    // try to delete numeric key if it exists, to fix legacy bugs
    if (!isNaN(modName) && modName !== "") {
      try { store.delete(Number(modName)); } catch (e) {}
    }

    request.onsuccess = () => {
      // also remove from localStorage as cleanup
      localStorage.removeItem(modName + "_code1");
      localStorage.removeItem(modName + "_code2");
      resolve();
    };
    request.onerror = () => {
      console.warn(`Failed to delete ${modName} from IndexedDB`);
      localStorage.removeItem(modName + "_code1");
      localStorage.removeItem(modName + "_code2");
      resolve();
    };
  });
}

// get all custom mod names from IndexedDB
async function getAllCustomModNames() {
  if (!useIndexedDB || !db) {
    // fallback to localStorage
    const stored = localStorage.getItem("customMods");
    return stored ? stored.split(",") : [];
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAllKeys();

    request.onsuccess = () => {
      resolve((request.result || []).map(String));
    };
    request.onerror = () => {
      // Fallback to localStorage
      const stored = localStorage.getItem("customMods");
      resolve(stored ? stored.split(",") : []);
    };
  });
}

// save custom mod names list
async function saveCustomModNames(modNames) {
  // always keep in localStorage for quick access
  const modNamesArray = modNames instanceof Set ? Array.from(modNames) : Array.from(modNames || []);
  if (modNamesArray.length === 0) {
    localStorage.removeItem("customMods");
  } else {
    localStorage.setItem("customMods", modNamesArray.join(","));
  }
}

// migrate localStorage mods to IndexedDB
async function migrateLocalStorageToIndexedDB() {
  const migrationDone = localStorage.getItem("indexedDBMigrationDone");
  if (migrationDone === "true") {
    return; // already migrated
  }

  const customModsStr = localStorage.getItem("customMods");
  if (!customModsStr) {
    localStorage.setItem("indexedDBMigrationDone", "true");
    return;
  }

  const modNames = customModsStr.split(",");
  console.log(`Migrating ${modNames.length} mods from localStorage to IndexedDB...`);

  for (const modName of modNames) {
    const code1 = localStorage.getItem(modName + "_code1");
    const code2 = localStorage.getItem(modName + "_code2");

    if (code1) {
      await saveModToDB(modName, code1, code2 || "");

      // check if DB is active, then remove legacy data to free up quota
      if (useIndexedDB && db) {
        localStorage.removeItem(modName + "_code1");
        localStorage.removeItem(modName + "_code2");
      }

      console.log(`Migrated ${modName} to IndexedDB`);
    }
  }

  try {
    localStorage.setItem("indexedDBMigrationDone", "true");
    console.log("Migration complete!");
  } catch (e) {
    console.warn("Could not set migration flag after cleanup:", e);
  }
}

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

function applySingleModTheme(modView, state = null) {
  state = state || localStorage.getItem("modThemeState");
  const modName = modView.getAttribute("mod-name");
  const theme = customModBoxThemes[modName];
  let applyTheme = false;

  if (state === "default" && theme && !theme._isFallback) {
    applyTheme = true;
  } else if (state === "detailed" && theme) {
    applyTheme = true;
  }

  if (applyTheme) {
    theme.header_image_url ? modView.style.setProperty("--theme-header-bg", `url('${theme.header_image_url}')`) : modView.style.removeProperty("--theme-header-bg");
    theme.header_color ? modView.style.setProperty("--theme-header-color", theme.header_color) : modView.style.removeProperty("--theme-header-color");
    theme.header_text_color ? modView.style.setProperty("--theme-header-text", theme.header_text_color) : modView.style.removeProperty("--theme-header-text");
    theme.description_background_color ? modView.style.setProperty("--theme-desc-bg", theme.description_background_color) : modView.style.removeProperty("--theme-desc-bg");
    theme.description_text_color ? modView.style.setProperty("--theme-desc-text", theme.description_text_color) : modView.style.removeProperty("--theme-desc-text");
    theme.main_color ? modView.style.setProperty("--theme-main-color", theme.main_color) : modView.style.removeProperty("--theme-main-color");
    theme.secondary_color ? modView.style.setProperty("--theme-secondary-color", theme.secondary_color) : modView.style.removeProperty("--theme-secondary-color");
    theme.ui_text_color ? modView.style.setProperty("--theme-ui-text", theme.ui_text_color) : modView.style.removeProperty("--theme-ui-text");
  } else {
    modView.style.removeProperty("--theme-header-bg");
    modView.style.removeProperty("--theme-header-color");
    modView.style.removeProperty("--theme-header-text");
    modView.style.removeProperty("--theme-desc-bg");
    modView.style.removeProperty("--theme-desc-text");
    modView.style.removeProperty("--theme-main-color");
    modView.style.removeProperty("--theme-secondary-color");
    modView.style.removeProperty("--theme-ui-text");
  }
}

function applyModBoxThemes() {
  const state = localStorage.getItem("modThemeState");
  modList.forEach(modView => applySingleModTheme(modView, state));
}

// finds the end index of a code block by balancing brackets/parentheses,
// while ignoring characters inside strings or regex
function findSnippetEnd(text, startIndex, openChar, closeChar) {
  let count = 1;
  let inString = false;
  let inComment = false;
  let stringChar = null; // ' or " or `
  let isEscaped = false;

  for (let i = startIndex; i < text.length; i++) {
    const char = text[i];

    // handle escaping (e.g. \" inside a string)
    if (isEscaped) {
      isEscaped = false;
      continue;
    }
    if (char === "\\") {
      isEscaped = true;
      continue;
    }

    // handle strings
    if (inString) {
      if (char === stringChar) {
        inString = false; // closed the string
      }
      continue;
    }

    // handle single line comments
    if (inComment) {
      if (char === '\n') inComment = false;
      continue;
    }
    if (!inString && char === '/' && text[i + 1] === '/') {
      inComment = true;
      i++; // skip next slash
      continue;
    }

    // enter string mode
    if (char === '"' || char === "'" || char === "`") {
      inString = true;
      stringChar = char;
      continue;
    }

    // handle brackets
    if (char === openChar) {
      count++;
    } else if (char === closeChar) {
      count--;
      if (count === 0) {
        return i; // found the matching closing bracket
      }
    }
  }

  return -1; // likely unclosed bracket
}

function findCodeSnippet(includes, start, end, rawModText, nameOfMod) {
  if (!rawModText || !rawModText.includes(includes)) {
    return null;
  }

  const startIndex = rawModText.indexOf(start);
  if (startIndex === -1) return null;

  const openChar = end === "}" ? "{" : (end === "]" ? "[" : "(");
  const contentStartIndex = startIndex + start.length;
  const endIndex = findSnippetEnd(rawModText, contentStartIndex, openChar, end);

  if (endIndex === -1) {
    console.log(`Could not find closing '${end}' for ${nameOfMod}`);
    return null;
  }

  return rawModText.slice(startIndex, endIndex + 1);
}

function extractFromCode1(includes, start, end, rawModText, nameOfMod) {
  if (!rawModText || !rawModText.includes(includes)) {
    return null;
  }

  const startIndex = rawModText.indexOf(start);
  if (startIndex === -1) return null;

  // Determine the character mapping based on the 'end' param provided
  const openChar = end === "}" ? "{" : (end === "]" ? "[" : "(");

  const contentStartIndex = startIndex + start.length;
  const endIndex = findSnippetEnd(rawModText, contentStartIndex, openChar, end);

  if (endIndex === -1) {
    console.log(`Could not find closing '${end}' for ${nameOfMod}`);
    return null;
  }

  const codeSnippet = rawModText.slice(startIndex, endIndex + 1);

  let temp = {};

  try {
    const runner = new Function("temp", "temp" + codeSnippet);
    runner(temp);
  } catch (e) {
    console.warn(`Error parsing metadata for ${nameOfMod}:`, e);
    return null;
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
    if (themeBaseColor === '#fff') {
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

  return { themeBaseColor, themeTextColor };
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
        theme.header_color, theme.header_text_color
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
        theme.description_background_color, theme.description_text_color
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
        theme.secondary_color, theme.ui_text_color
      );

      // for secondary colors; we lighten/darken based on text color
      const finalContrast = lightenDarkenContrast(themeBaseColor, themeTextColor);
      theme.secondary_color = finalContrast.themeBaseColor;
      theme.ui_text_color = finalContrast.themeTextColor;
    }
  }
}

// regex patterns to extract theme details from raw mod text
const fallbackThemeRegex = new RegExp(
  [
    String.raw`coloring_window\s*=\s*['"](?<winColor>#[A-Fa-f0-9]{6,8})['"]`,
    String.raw`coloring_title\s*=\s*['"](?<titleColor>#[A-Fa-f0-9]{6,8})['"]`,
    String.raw`game_header"\)\.style="background-image: url\((?<headerImg>[^\)]+)\)`,
    String.raw`game_window"\)\.style.backgroundImage = "url\((?<winImg>[^\)]+)\)`,
    String.raw`game_window"\)\.style.borderColor = "(?<borderColor>#[A-Fa-f0-9]{6,8})"`,
    String.raw`text_col\s*=\s*["'](?<textCol>#[A-Fa-f0-9]{6,8}|white|black)["']`,
  ].join('|'),
  'g'
);

function extractFallbackTheme(rawModText, nameOfMod) {
  // only create a theme if a real modBoxTheme doesn't exist
  if (customModBoxThemes[nameOfMod] && customModBoxThemes[nameOfMod].header_color) return;

  // skip the regex scan entirely if none of the markers exist
  if (!rawModText.includes('coloring_') &&
    !rawModText.includes('game_header') &&
    !rawModText.includes('game_window') &&
    !rawModText.includes('text_col')) {
    return;
  }

  const theme = { _isFallback: true };
  let winColor = null, titleColor = null, borderColor = null;

  for (const match of rawModText.matchAll(fallbackThemeRegex)) {
    const g = match.groups;
    if (g.winColor && !winColor) winColor = g.winColor;
    if (g.titleColor && !titleColor) titleColor = g.titleColor;
    if (g.headerImg && !theme.header_image_url) theme.header_image_url = g.headerImg;
    if (g.winImg && !theme.description_background_color) theme.description_background_color = g.winImg;
    if (g.borderColor && !borderColor) borderColor = g.borderColor;
    if (g.textCol && !theme.header_text_color) {
      theme.header_text_color = g.textCol === 'white' ? '#fff' : (g.textCol === 'black' ? '#222' : g.textCol);
    }
  }

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

  // ensure contrast for the theme colors
  ensureThemeContrast(theme);

  // if at least one color was found, save it as a theme
  if ((theme.main_color || theme.header_color || theme.header_image_url) && !customModBoxThemes[nameOfMod]) {
    customModBoxThemes[nameOfMod] = theme;
  }
}

function extractModMetadata(rawModText, nameOfMod) {
  const snippets = [];
  if (window.loadedMetadataMods) {
    window.loadedMetadataMods.add(nameOfMod);
  }

  // find achievements
  const achSnippet = findCodeSnippet(
    "campaignTrail_temp.achievements = {",
    ".achievements = {", "}",
    rawModText, nameOfMod
  );
  if (achSnippet) snippets.push("temp" + achSnippet);

  // find mod themes
  const themeSnippet = findCodeSnippet(
    "campaignTrail_temp.modBoxTheme = {",
    ".modBoxTheme = {", "}",
    rawModText, nameOfMod
  );
  if (themeSnippet) snippets.push("temp" + themeSnippet);

  if (snippets.length > 0) {
    const temp = {};
    try {
      const runner = new Function("temp", snippets.join(";\n"));
      runner(temp);
    } catch (e) {
      console.warn(`Error parsing metadata for ${nameOfMod}:`, e);
    }

    if (temp.achievements) {
      allAch[nameOfMod] = temp.achievements;
    }
    if (temp.modBoxTheme && Object.keys(temp.modBoxTheme).length > 0) {
      customModBoxThemes[nameOfMod] = temp.modBoxTheme;
    }
  }

  // if no theme found, try regex extraction
  if (!customModBoxThemes[nameOfMod]) {
    extractFallbackTheme(rawModText, nameOfMod);
  }
}

function extractElectionDetails(rawModText, nameOfMod) {
  if (!rawModText) return null;

  // determine which format the mod uses
  let start = "";
  let openChar = "";
  let closeChar = "";

  if (rawModText.includes(".election_json = JSON.parse(")) {
    start = ".election_json = JSON.parse(";
    openChar = "(";
    closeChar = ")";
  } else if (rawModText.includes(".election_json = [")) {
    start = ".election_json = [";
    openChar = "[";
    closeChar = "]";
  } else {
    // console.log(`Could not find election_json start for: ${nameOfMod}`);
    return null;
  }

  const startIndex = rawModText.indexOf(start);
  const contentStartIndex = startIndex + start.length;

  const endIndex = findSnippetEnd(rawModText, contentStartIndex, openChar, closeChar);

  if (endIndex === -1) {
    console.log(`Could not extract election details (unclosed) for ${nameOfMod}`);
    return null;
  }

  const codeSnippet = rawModText.slice(startIndex, endIndex + 1);
  let temp = {};

  try {
    const runner = new Function("temp", "temp" + codeSnippet);
    runner(temp);
  } catch (e) {
    console.warn(`Error parsing election details for ${nameOfMod}:`, e);
    return null;
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
  if (url.includes('/static/dba')) {
    const parts = url.split('/');
    const dbaFolder = parts.find(p => p.startsWith('dba'));
    const fileName = parts.pop();
    if (dbaFolder && fileName) {
      return `https://raw.githubusercontent.com/campaign-trail-showcase/campaign-trail-showcase.github.io/refs/heads/main/static/${dbaFolder}/${fileName}`;
    }
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

// preloads icons in small batches
async function preloadInBatches(urls, batchSize = 6) {
  const arr = [...urls];
  let loaded = 0;
  for (let i = 0; i < arr.length; i += batchSize) {
    const batch = arr.slice(i, i + batchSize);
    const results = await Promise.allSettled(batch.map(preloadAwardIcon));
    loaded += results.filter(r => r.status === 'fulfilled').length;
  }
  return loaded;
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
    } catch (e) { }
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
  await initDB();

  // wait for base JSONs to load first
  if (window.baseJSONPromises && window.baseJSONPromises.length > 0) {
    await Promise.all(window.baseJSONPromises);
  }

  // migrate localStorage mods to IndexedDB
  await migrateLocalStorageToIndexedDB();

  // show loading indicator while mods load
  const gridEl = document.getElementById("mod-grid");
  if (gridEl) {
    gridEl.replaceChildren();
    const loader = document.createElement("div");
    loader.id = "loading-mods-text";
    loader.style.textAlign = "center";
    loader.style.margin = "20px";
    loader.textContent = "Loading mods...";
    gridEl.appendChild(loader);
  }

  const modNameParam = getUrlParam("modName");
  const localModParam = getUrlParam("localMod");

  favoriteMods = new Set(
    localStorage.getItem("favoriteMods")?.split(",") || [],
  );

  // Load custom mods list from IndexedDB
  const customModNames = await getAllCustomModNames();
  customMods = new Set(customModNames);

  // if loading a specific mod, skip building the gallery
  if (localModParam || modNameParam) {
    const targetMod = localModParam || modNameParam;

    if (localModParam && !customMods.has(localModParam)) {
      alert(`Zoinks! The local mod "${localModParam}" could not be found in your saved mods.`);
    } else {
      const gridEl = document.getElementById("mod-grid");
      if (gridEl) gridEl.style.display = "none";

      loadModFromButton(targetMod);
      return;
    }
  }

  // Inject the "View all mods" checkbox next to the sorter using a more robust selector
  const sorter = document.querySelector('[onchange="onChangeModSorter(event)"]');
  if (sorter && sorter.parentNode) {
    const legacyControls = createLegacyViewControls();
    // insert after the sorter element
    sorter.parentNode.insertBefore(legacyControls, sorter.nextSibling);
  } else {
    console.warn("Could not find mod sorter dropdown to attach 'View all' checkbox.");
  }

  document.querySelectorAll(".tagCheckbox").forEach(checkbox => {
    checkbox.addEventListener("change", filterEntries);
  });

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

  // populate custom mod shells first, so they always occupy the beginning of the list
  customModNames.forEach((customModName) => {
    const modView = createModView({
      value: customModName,
      innerText: customModName,
      dataset: { tags: "Custom" }
    });
    modList.push(modView);
    modMap.set(customModName, modView);
  });

  // gather standard mods based on query parameters
  const targetMod = getUrlParam("modName");
  const standardModsToLoad = [];

  Array.from(mods).forEach((mod) => {
    const isLinked = targetMod && typeof expandFavoriteSet === 'function' && expandFavoriteSet(new Set([targetMod])).has(mod.value);
    const isDSAClassicLink = targetMod === "2024" && mod.value === "2024 Divided States" || targetMod === "2024 Divided States" && mod.value === "2024";

    if (
      mod.value === "other" ||
      (
        targetMod != null &&
        targetMod != mod.value &&
        !isLinked && !isDSAClassicLink
      )
    ) {
      return;
    }

    namesOfModsFromValue[mod.value] = mod.innerText ?? mod.value;
    standardModsToLoad.push(mod);
  });

  // sort standard mods alphabetically by value
  standardModsToLoad.sort((a, b) => {
    if (a.value < b.value) return -1;
    if (a.value > b.value) return 1;
    return 0;
  });

  // populate standard card shells right after custom ones
  standardModsToLoad.forEach((mod) => {
    if (mod.value === '2024 Divided States') return; // skip special case

    const modView = createModView(mod);

    if (
      mod.dataset.awardimageurls &&
      mod.dataset.awardimageurls.split(", ").length > 1
    ) {
      cycleAwards(modView.querySelector(".trophy-holder"), 0);
    }

    modList.push(modView);
    modMap.set(modView.id, modView);
  });

  // if we are not loading a specific mod, preload all award icons
  if (!modNameParam) {
    const allAwardIconUrls = new Set();
    Array.from(mods).forEach(mod => {
      if (mod.dataset && mod.dataset.awardimageurls) {
        mod.dataset.awardimageurls.split(", ").forEach(url => {
          allAwardIconUrls.add(url);
        });
      }
    });

    if (allAwardIconUrls.size > 0) {
      preloadInBatches(allAwardIconUrls, 6);
    }
  }

  // initialize tags and render views
  createTagButtons(tagsFound);
  updateModViews();
  applyModBoxThemes();
});

function createModView(mod, imageUrl = "", description = "Loading summary...") {
  const modView = modViewTemplate.content.firstElementChild.cloneNode(true);

  // set data attributes
  modView.setAttribute("mode", mod.dataset?.mode || "");
  modView.setAttribute("tags", mod.dataset?.tags || "");
  modView.setAttribute("awardimageurls", mod.dataset?.awardimageurls || "");
  modView.setAttribute("awards", mod.dataset?.awards || "");
  modView.setAttribute("mod-name", mod.value);
  modView.setAttribute("mod-display-name", String(mod.innerText || mod.value || "").toLowerCase());
  modView.id = mod.value;

  namesOfModsFromValue[mod.value] = mod.innerText ?? mod.value;
  modView._tagsArray = mod.dataset?.tags ? mod.dataset.tags.split(" ") : [];

  modView._elements = {
    title: modView.querySelector(".mod-title"),
    titleText: modView.querySelector(".mod-title p"),
    desc: modView.querySelector(".mod-desc"),
    image: modView.querySelector(".mod-image"),
    playBtn: modView.querySelector(".mod-play-button"),
    favBtn: modView.querySelector(".fav-button"),
    deleteBtn: modView.querySelector(".delete-button"),
    ratingBg: modView.querySelector(".rating-background"),
    buttons: modView.querySelectorAll(".hover-button")
  };

  // set text and attributes
  modView._elements.titleText.textContent = mod.innerText;
  modView._elements.image.alt = mod.value + " Box Image";
  modView._elements.desc.innerHTML = description;

  if (imageUrl) {
    modView._elements.image.src = imageUrl;
  }

  // Play button
  modView._elements.playBtn.querySelector("span").textContent = PLAY;
  modView._elements.playBtn.addEventListener("click", () => loadModFromButton(mod.value));

  // determine if this is a custom/local mod
  const isCustom = customMods.has(mod.value) || (mod.dataset && mod.dataset.tags && mod.dataset.tags.split(" ").includes("Custom"));

  // Favorite button
  if (isCustom) {
    modView._elements.favBtn.style.display = "none";
  } else {
    modView._elements.favBtn.style.display = "";
    modView._elements.favBtn.querySelector("span").textContent = isFavorite(mod.value) ? UNFAV : FAV;
    modView._elements.favBtn.addEventListener("click", (e) => toggleFavorite(e, mod.value));
  }

  // Delete button
  if (isCustom) {
    modView._elements.deleteBtn.querySelector("span").textContent = DELETE;
    modView._elements.deleteBtn.style.display = "";
    modView._elements.deleteBtn.addEventListener("click", (e) => deleteCustomMod(e, mod.value));
  } else {
    modView._elements.deleteBtn.style.display = "none";
  }

  // handle rating display
  if (isCustom) {
    if (modView._elements.ratingBg) modView._elements.ratingBg.remove();
  } else if (mod.dataset?.awards && mod.dataset.awards.length > 0) {
    modView._elements.ratingBg.insertAdjacentHTML(
      "beforeend",
      renderAwards(mod.dataset.awards, mod.dataset.awardimageurls)
    );
  }

  return modView;
}

function renderAwards(awards, rawAwardUrls) {
  let awardUrls = rawAwardUrls.split(", ");
  const awardNames = awards.split(",").map(award => award.trim());

  let awardImagesHTML = awardUrls.map((url, index) => {
    const altUrl = getAlternativeIconUrl(url);
    const isFirst = index === 0;
    const style = isFirst
      ? 'opacity: 1; transition: opacity 0.3s ease-in-out;'
      : 'opacity: 0; transition: opacity 0.3s ease-in-out;';

    const srcAttr = isFirst ? `src="${url}"` : `data-src="${url}"`;

    // store the alt URL
    const altAttr = altUrl ? ` data-alt-url="${altUrl}"` : '';

    const onerrorAttr = isFirst && altUrl
      ? ` onerror="this.onerror=null;this.src='${altUrl}'"`
      : '';

    return `<img class="mod-trophy" ${srcAttr} alt="${awardNames[index]} Trophy" style="${style}"${altAttr}${onerrorAttr}>`;
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
  if (!holder) {
    return;
  }

  // clear any existing timeout to prevent multiple loops
  if (holder._awardCycleTimeout) {
    clearTimeout(holder._awardCycleTimeout);
    holder._awardCycleTimeout = null;
  }

  // if not connected, we stop cycling - unless it's in a document fragment
  if (!holder.isConnected && holder.getRootNode().nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
    holder.dataset.cycleIndex = index;
    holder.dataset.isCycling = "false";
    return;
  }

  const images = holder.querySelectorAll(".mod-trophy");
  if (images.length <= 1) return;

  holder.dataset.isCycling = "true";
  holder.dataset.cycleIndex = index;

  images[index].style.opacity = '0';

  const nextIndex = (index + 1) % images.length;
  const nextImg = images[nextIndex];

  ensureTrophySrc(nextImg);
  nextImg.style.opacity = '1';

  // pre-load the image AFTER next so it's cached by the time we need it
  const preloadIndex = (nextIndex + 1) % images.length;
  ensureTrophySrc(images[preloadIndex]);

  holder._awardCycleTimeout = setTimeout(() => {
    cycleAwards(holder, nextIndex);
  }, 2000);
}

// stops all active award cycling timers in the grid
function stopAllAwardCycles(container) {
  const holders = container.querySelectorAll('.trophy-holder');
  for (let i = 0; i < holders.length; i++) {
    const holder = holders[i];
    if (holder._awardCycleTimeout) {
      clearTimeout(holder._awardCycleTimeout);
      holder._awardCycleTimeout = null;
    }
    holder.dataset.isCycling = "false";
  }
}

function ensureTrophySrc(img) {
  if (!img || img.hasAttribute('src')) return; // already loaded or loading

  const url = img.dataset.src;
  if (!url) return;

  // wire up fallback before setting src so the handler is ready if it fails
  const altUrl = img.dataset.altUrl;
  if (altUrl) {
    img.onerror = function () {
      this.onerror = null;
      this.src = altUrl;
    };
  }

  img.src = url;
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
  deleteModFromDB(modValue);
  saveCustomModNames(customMods);

  // remove from the grid
  const modView = modMap.get(modValue);
  if (modView) {
    if (modView.parentNode) modView.parentNode.removeChild(modView);
    const idx = modList.indexOf(modView);
    if (idx !== -1) modList.splice(idx, 1);
    modMap.delete(modValue);
  }

  updateModViews();
}

async function addCustomMod(code1, code2) {
  if (!code1) {
    alert("Code 1 is required!");
    return;
  }

  // ensure code2 is a string to prevent DB errors
  const safeCode2 = code2 || "";
  const temp = extractElectionDetails(code1, "custom mod being added");

  if (!temp) {
    alert("Could not add mod from code provided!");
    return;
  }

  const modName = String(document.getElementById("customModName").value || temp.election_json[0].fields.year);

  // save/update custom mod
  customMods.add(modName);

  // save to storage
  try {
    await saveCustomModNames(customMods);
    await saveModToDB(modName, code1, safeCode2);
  } catch (e) {
    console.error("Failed to save mod to DB:", e);
    alert("There was an error saving the mod to the database. We will try to load it anyway.");
  }

  // remove old mod if it exists
  const oldModView = modMap.get(modName);
  if (oldModView) {
    if (oldModView.parentNode) oldModView.parentNode.removeChild(oldModView);
    const oldIdx = modList.indexOf(oldModView);
    if (oldIdx !== -1) modList.splice(oldIdx, 1);
    modMap.delete(modName);
  }

  // update mod box theme
  extractModMetadata(code1, modName);

  const imageUrl = temp.election_json[0].fields.site_image ?? temp.election_json[0].fields.image_url;
  const description = temp.election_json[0].fields.site_description ?? temp.election_json[0].fields.summary;

  const modView = createModView(
    { value: modName, innerText: modName, dataset: { tags: "Custom" } },
    imageUrl,
    description,
  );

  modList.unshift(modView);
  modMap.set(modName, modView);

  // ensure "Custom" tag is checked so the new mod is visible
  let customTagFound = false;
  for (const tagCheckbox of tagList) {
    if (tagCheckbox.value === "Custom") {
      tagCheckbox.checked = true;
      customTagFound = true;
    }
  }

  // if the "Custom" tag button doesn't exist yet, create it
  if (!customTagFound) {
    const tagsGrid = document.getElementById("tags");
    const tagButton = document.createElement("div");
    tagButton.classList.add("tag-button");

    tagButton.innerHTML = `
      <input type="checkbox" id="Custom" name="Custom" value="Custom" checked>
      <label style="user-select:none" for="Custom">Custom</label><br>
    `;

    const checkbox = tagButton.getElementsByTagName("INPUT")[0];

    tagButton.addEventListener("click", (event) => {
      if (event.target === tagButton) checkbox.click();
    });

    checkbox.addEventListener("change", updateModViews);
    tagList.push(checkbox);
    tagsGrid.appendChild(tagButton);
  }

  // cached code 2
  window.campaignTrail_temp = window.campaignTrail_temp || {};
  window.campaignTrail_temp.custom_code_2 = safeCode2;

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

  // stop all cycling timers before removing elements
  stopAllAwardCycles(modGrid);

  // clear the grid to start fresh
  modGrid.replaceChildren();

  // remove pagination controls
  const paginationContainer = document.getElementById("pagination-controls");
  if (paginationContainer) paginationContainer.replaceChildren();

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
        fragment.appendChild(modView);

        // restart award cycling if needed
        const trophyHolder = modView.querySelector(".trophy-holder");
        if (trophyHolder) {
          const lastIndex = parseInt(trophyHolder.dataset.cycleIndex) || 0;
          cycleAwards(trophyHolder, lastIndex);
        }

        // register card with observer
        metadataObserver.observe(modView);
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
      fragment.appendChild(modView);

      // restart award cycling if needed
      const trophyHolder = modView.querySelector(".trophy-holder");
      if (trophyHolder) {
        const lastIndex = parseInt(trophyHolder.dataset.cycleIndex) || 0;
        cycleAwards(trophyHolder, lastIndex);
      }

      // register card with observer
      metadataObserver.observe(modView);
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
      case "chronoNew":
        sortModViews((a, b) => modCompare2(b, a));
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

  const visibleSet = new Set(visibleMods);
  const otherMods = modList.filter((mod) => !visibleSet.has(mod));

  // re-order the main modList
  modList.length = 0;
  modList.push(...visibleMods, ...otherMods);

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
    // update URL for local mods
    const pageURL = new URL(window.location.href);
    pageURL.searchParams.delete("modName");
    pageURL.searchParams.set("localMod", modValue);
    window.history.replaceState(null, "", `${pageURL.pathname}?${pageURL.searchParams.toString().replaceAll("+", "%20")}`);

    let modData = null;
    try {
      modData = await getModFromDB(modValue);
    } catch (e) {
      console.error("DB error:", e);
    }

    if (!modData || !modData.code1) {
      alert(`Custom mod ${modValue} not found!`);
      return;
    }

    extractModMetadata(modData.code1, modValue);

    if (modData.code2) {
      window.campaignTrail_temp = window.campaignTrail_temp || {};
      window.campaignTrail_temp.custom_code_2 = modData.code2;
    }

    const execCtx = {
      campaignTrail_temp,
      window,
      document,
      $,
      jQuery
    };

    try {
      executeMod(modData.code1, execCtx);
    } catch (e) {
      console.error(`Failed to execute Code 1 for ${modValue}:`, e);
      return;
    }

    diff_mod = true;
    customMod = modValue;
    window.customMod = modValue;
  } else {
    const pageURL = new URL(window.location.href);

    // ensure we switch params if moving from a local mod to an official one
    if (pageURL.searchParams.has("localMod")) {
      pageURL.searchParams.delete("localMod");
    }

    if (!pageURL.searchParams.has("modName") || pageURL.searchParams.get("modName") !== modValue) {
      pageURL.searchParams.set("modName", modValue);
      window.history.replaceState(null, "", `${pageURL.pathname}?${pageURL.searchParams.toString().replaceAll("+", "%20")}`);
    }

    try {
      const res = await fetch(`../static/mods/${modValue}_init.html`);
      if (!res.ok) throw new Error("Network response was not ok");
      const modCode = await res.text();

      extractModMetadata(modCode, modValue);

      // fetch achievements for linked mods if they aren't already loaded
      let linkedMods = [modValue];
      if (typeof expandFavoriteSet === 'function') {
        linkedMods = Array.from(expandFavoriteSet(new Set([modValue])));
      } else if (modValue === "2024" || modValue === "2024 Divided States") {
        linkedMods = ["2024", "2024 Divided States"];
      }

      // update display name if it's not already in the cache
      function updateDisplayNameFromCode(code, value) {
        if (!namesOfModsFromValue[value]) {
          const temp = extractElectionDetails(code, value);
          if (temp?.election_json?.length > 0 && temp.election_json[0].fields) {
            namesOfModsFromValue[value] = temp.election_json[0].fields.display_name || temp.election_json[0].fields.title || value;
          }
        }
      }

      updateDisplayNameFromCode(modCode, modValue);

      for (const linkedMod of linkedMods) {
        if (linkedMod === modValue) continue;

        if (!allAch[linkedMod]) {
          try {
            const linkedRes = await fetch(`../static/mods/${linkedMod}_init.html`);
            if (linkedRes.ok) {
              const linkedCode = await linkedRes.text();
              extractModMetadata(linkedCode, linkedMod);
              updateDisplayNameFromCode(linkedCode, linkedMod);
            }
          } catch (e) {
            console.error(`Error loading linked achievements for ${linkedMod}:`, e);
          }
        }
      }

      executeMod(modCode, {
        campaignTrail_temp,
        window,
        document,
        $,
        jQuery
      });
      diff_mod = true;
      customMod = false;
      window.customMod = false;
    } catch (error) {
      console.error(`Failed to load mod ${modValue}:`, error);
      alert(`Failed to load mod ${modValue}. See console for details.`);
      return;
    }
  }

  if (customThemesButton) {
    customThemesButton.style.display = "none";
  }

  document.getElementById("modloaddiv").style.display = "none";
  document.getElementById("modLoadReveal").style.display = "none";
  document.getElementById("featured-mods-area").style.display = "none";
  modded = true;

  modBeingPlayed = modValue;

  if (!customMods.has(modValue)) {
    document.getElementById("copyLinkButton").style.display = "block";
  }
  document.getElementById("goBackButton").style.display = "inline";

  const announcement = document.getElementById("announcement");
  if (announcement) {
    announcement.style.display = "none";
  }

  setTimeout(() => updateModViewCount(modValue), 10000);
  window.scrollTo(0, 0);
}

async function copyModLink() {
  const modLink = new URL(window.location.href);

  if (!modLink.searchParams.has("modName")) {
    modLink.searchParams.set("modName", modBeingPlayed);
    window.history.replaceState(null, "", `${modLink.pathname}?${modLink.searchParams.toString().replaceAll("+", "%20")}`);
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

async function loadEntries() {
  try {
    const modListResponse = await fetch("../static/mods/MODLOADERFILE.html");
    const modListHTML = await modListResponse.text();

    // parse the HTML string into lightweight virtual elements
    const parser = new DOMParser();
    const doc = parser.parseFromString(modListHTML, "text/html");
    const options = doc.querySelectorAll("option");

    // map elements to JS objects
    originalModsData = Array.from(options).map(opt => ({
      value: opt.value,
      text: opt.textContent.trim(),
      mode: opt.dataset.mode || "",
      tags: opt.dataset.tags || "",
      awards: opt.dataset.awards || "",
      awardimageurls: opt.dataset.awardimageurls || ""
    }));

    filterEntries();
  } catch (error) {
    console.error("Failed to load mod entries:", error);
  }
}

function filterEntries() {
  const selectedTags = [];

  // get all selected tags
  document.querySelectorAll(".tagCheckbox:checked").forEach(checkbox => {
    selectedTags.push(checkbox.value);
  });

  // filter the lightweight objects array
  const filteredData = originalModsData.filter(entry => {
    if (selectedTags.length === 0) {
      return true;
    }
    return entry.tags && containsAllTags(entry.tags, selectedTags);
  });

  const selectElement = document.getElementById("modSelect");

  // clear the select dropdown
  selectElement.replaceChildren();

  // re-build option elements
  const fragment = document.createDocumentFragment();
  filteredData.forEach(data => {
    const opt = document.createElement("option");
    opt.value = data.value;
    opt.textContent = data.text;
    opt.dataset.mode = data.mode;
    opt.dataset.tags = data.tags;
    opt.dataset.awards = data.awards;
    opt.dataset.awardimageurls = data.awardimageurls;
    fragment.appendChild(opt);
  });

  selectElement.appendChild(fragment);

  // set selected value to the first available option
  if (selectElement.options.length > 0) {
    selectElement.value = selectElement.options[0].value;
  }
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
