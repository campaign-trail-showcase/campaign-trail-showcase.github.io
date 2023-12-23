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

let modBeingPlayed = ""

const namesOfModsFromValue = {};

if(localStorage.getItem("customModBoxThemesEnabled") === null) {
    localStorage.setItem("customModBoxThemesEnabled", "true");
}

document.getElementById("customThemesButton").innerText = localStorage.getItem("customModBoxThemesEnabled") == "true" ? "Turn Off Mod Box Themes" : "Turn On Mod Box Themes";

let customModBoxThemes = {}

function toggleModBoxThemes() {
    localStorage.setItem("customModBoxThemesEnabled", localStorage.getItem("customModBoxThemesEnabled") == "true" ? "false" : "true");
    location.reload();
}

function extractFromCode1(includes, start, end, rawModText, nameOfMod) {
    if(rawModText == null) {
        return null;
    }

    let codeSnippet = null;
    let temp = {}

    if(!rawModText.includes(includes)) { 
        return null;
    }

    let possibleEndIndices = getAllIndexes(rawModText, end);

    for(let i = 0; i < possibleEndIndices.length; i++) {
        codeSnippet = rawModText.slice(rawModText.indexOf(start), possibleEndIndices[i] + 1);
        if(codeSnippet.length <= 0) {
            continue;
        }

        try {
            eval("temp" + codeSnippet)
        } catch (e){
           // console.log("FAILED" + e)
            codeSnippet = null;
        }

        if(codeSnippet != null) {
            break;
        }
    }

    if(codeSnippet == null) {
        console.log("Could not extract " + includes + " from " + nameOfMod)
    }

    return temp;
}

function getCustomTheme(rawModText, nameOfMod) {
    const temp = extractFromCode1("campaignTrail_temp.modBoxTheme = {", ".modBoxTheme = {", "}", rawModText, nameOfMod);
    if(temp == null) {
        return;
    }

    customModBoxThemes[nameOfMod] = temp.modBoxTheme;
}

function getAllAchievements(rawModText, nameOfMod) {
    temp = extractFromCode1("campaignTrail_temp.achievements = {", ".achievements = {", "}", rawModText, nameOfMod);

    if(temp == null) {
        return;
    }

    allAch[nameOfMod] = temp.achievements;
}

function extractElectionDetails(rawModText, nameOfMod) {

    if(rawModText == null) {
        return null;
    }

    let codeSnippet = null;
    let temp = {}
    let start = ""
    let end = ""

    if(rawModText.includes(".election_json = JSON.parse(")) {
        start = ".election_json = JSON.parse(";
        end = ")"
    } else if(rawModText.includes(".election_json = [")) {
        start = ".election_json = [";
        end = "]"
    } else {
        console.log("Could not extract metadata for mod: " + nameOfMod);
        return null;
    }

    let possibleEndIndices = getAllIndexes(rawModText, end);

    for(let i = 0; i < possibleEndIndices.length; i++) {
        codeSnippet = rawModText.slice(rawModText.indexOf(start), possibleEndIndices[i] + 1);
        if(codeSnippet.length <= 0) {
            continue;
        }

        try {
            eval("temp" + codeSnippet)
        } catch {
            codeSnippet = null;
        }

        if(codeSnippet != null) {
            break;
        }
    }

    if(codeSnippet == null || Object.keys(temp).length == 0) {
        console.log("Could not extract from " + nameOfMod)
    }

    return temp;
}

$(document).ready(async function() {

    favoriteMods = localStorage.getItem("favoriteMods") != null ? localStorage.getItem("favoriteMods") : new Set();

    if(typeof favoriteMods == 'string') {
        favoriteMods = new Set(favoriteMods.split(","));
    }

    customMods = localStorage.getItem("customMods") != null ? localStorage.getItem("customMods") : new Set();

    if(typeof customMods == 'string') {
        let customArr = customMods != '' ? customMods.split(",") : [];
        customMods = new Set(customArr);
    }

    var originalOptions = null;

    $('.tagCheckbox').on('change', filterEntries);

    await loadEntries();
    let mods = document.getElementById('modSelect').childNodes;

    let tagsFound = new Set();

    // Get tags from normal mods and add optional custom tag
    mods.forEach(function(mod) {
        const tags = mod.dataset.tags.split(" ");
        for(let i = 0; i < tags.length; i++) {
            if(tags[i].length == 0) {
                continue;
            }
            tagsFound.add(tags[i]);
        }

        if(customMods.size > 0) {
            tagsFound.add("Custom");
        }
    });

    
    let allModsLength = mods.length - 1;
    let modsLoaded = [];

    // Set up from normal mods
    mods.forEach(async function(mod) {

        if(mod.value == "other") {
            return;
        }

        const modRes = await fetch("../static/mods/" + mod.value + "_init.html");
        const rawModText = await modRes.text();
        
        const temp = extractElectionDetails(rawModText, mod.value);
        getAllAchievements(rawModText, mod.value);
        getCustomTheme(rawModText, mod.value);

        let imageUrl;
        let description;

        if(temp) {
            imageUrl = temp.election_json[0].fields.site_image ?? temp.election_json[0].fields.image_url;
            description =temp.election_json[0].fields.site_description ?? temp.election_json[0].fields.summary;
        }
        else {
            console.log("Missing or cannot read Code 1 for mod: " + mod.value)
            imageUrl = "";
            description = `<h1 style="color:red">COULD NOT GET CODE 1 PLEASE ALERT DEV!</h1>`;
        }

        if(!temp) {
            allModsLength--;
            return;
        }

        modsLoaded.push({"mod":mod, "imageUrl":imageUrl, "description":description});

        if(modsLoaded.length == allModsLength) {
            modsLoaded.sort(modCompare);
            for(let i = 0; i < modsLoaded.length; i++) {
                const modData = modsLoaded[i];
                const modView = createModView(modData.mod, modData.imageUrl, modData.description);
                document.getElementById("mod-grid").appendChild(modView);
                modList.push(modView);
            }
            updateModViews();
        }
    });

    

    // Set up from custom mods
    for(const customModName of customMods) {

        rawModText = localStorage.getItem(customModName + "_code1");

        const temp = extractElectionDetails(rawModText, customModName);

        if(temp == null || temp.election_json == null || temp.election_json[0] == null || temp.election_json[0].fields == null) {
            continue;
        }

        getAllAchievements(rawModText, customModName);
        getCustomTheme(rawModText, customModName);

        let imageUrl = temp.election_json[0].fields.site_image ?? temp.election_json[0].fields.image_url;
        let description = temp.election_json[0].fields.site_description ?? temp.election_json[0].fields.summary;
        
        const modView = createModView({"value" : customModName, "innerText" : customModName, "dataset":{"tags":"Custom"}}, imageUrl, description);
        document.getElementById("mod-grid").appendChild(modView);
        modList.push(modView);
    }

    const modNameParam = getUrlParam("modName");

    if(modNameParam != null) {
        loadModFromButton(modNameParam);
        document.getElementById("goBackButton").style.display = "inline";
    }

    createTagButtons(tagsFound);
});

function createModView(mod, imageUrl, description, isCustom) {
    const modView = document.createElement("div");
    modView.classList.add("community-grid-element")

    modView.setAttribute("mode", mod.dataset.mode);
    modView.setAttribute("tags", mod.dataset.tags);
    modView.setAttribute("awards", mod.dataset.awards);
    modView.setAttribute("mod-name", mod.value);
    modView.setAttribute("mod-display-name", mod.innerText.toLowerCase());
    namesOfModsFromValue[mod.value] = mod.innerText;

    const favText = isFavorite(mod.value) ? UNFAV : FAV; 

    let theme = localStorage.getItem("customModBoxThemesEnabled") == "true" ? customModBoxThemes[mod.value] : null;

    modView.innerHTML = `
    <div class="mod-title" ${theme ? `style="background-color:${theme.header_color};"` : ''}>
        <p ${theme ? `style="color:${theme.header_text_color};"` : ''}>${mod.innerText}</p>
    </div>
    <img class="mod-image" src="${imageUrl}"></img>
    <div ${theme ? `style="background-color:${theme.description_background_color}; color:${theme.description_text_color};"` : ''} class="mod-desc" >${description}</div>
    <div class="hover-button-holder">
        <button ${theme ? `style="background-color:${theme.secondary_color};"` : ''} class="mod-play-button hover-button" onclick="loadModFromButton(\`${mod.value}\`)"><span ${theme ? `style="color:${theme.ui_text_color};"` : ''}>${PLAY}</span></button>
        <button ${theme ? `style="background-color:${theme.secondary_color};"` : ''} class="hover-button" onclick="toggleFavorite(event, \`${mod.value}\`)"><span ${theme ? `style="color:${theme.ui_text_color};"` : ''}>${favText}</span></button>
        <button style="${customMods.has(mod.value) ? "" : "display:none;"}${theme ? `background-color:${theme.secondary_color};"` : ''}" class="hover-button" onclick="deleteCustomMod(event, \`${mod.value}\`)"><span ${theme ? `style="color:${theme.ui_text_color};"` : ''}>${DELETE}</span></button>
    </div>
    ${!customMods.has(mod.value) ? `
    <div ${theme ? `style="background-color:${theme.secondary_color};"` : ''} class="rating-background">
        <div ${theme ? `style="color:${theme.ui_text_color};"` : ''} class="modRating">LOADING FAVORITES...</div>
        <div ${theme ? `style="color:${theme.ui_text_color};"` : ''} class="modPlayCount">LOADING PLAYS...</div>
        ${mod.dataset.awards != null && mod.dataset.awards.length > 0 ? renderAwards(mod.dataset.awards) : ""}
    </div>` : ""}
    `

    if(theme) {
        modView.style.backgroundColor = theme.main_color;
    }

    modView.id = mod.value;

    getFavsAndPlayCount(mod.value, modView);

    return modView;
}

function renderAwards(awards) {
    // onclick="alert('-- AWARDS --\\n${awards.replace('<br>', '\\n')}'
    return `
    <div class="trophy-holder")">
    <span class="tooltiptext">${awards}</span>
        <svg class="mod-trophy" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 512 512" xml:space="preserve">
    <path style="fill:#ECF0F1;" d="M369.059,52.352v153.537c0,14.104-3.141,27.6-7.329,40.049v0.01
    c-16.753,42.384-57.426,72.497-105.474,72.497c-47.975,0-88.98-30.018-105.157-72.298c-0.031-0.063-0.117-0.136-0.138-0.199
    c-2.974-7.779-5.095-15.978-6.257-24.469c-0.346-2.544-0.463-5.11-0.641-7.706c-0.178-2.607-0.117-5.235-0.117-7.884V52.352H369.059
    z"/>
    <rect x="229.813" y="319.869" style="fill:#F8C660;" width="52.352" height="76.434"/>
    <path style="fill:#ECF0F1;" d="M329.283,448.654H182.698v-20.581c0-17.546,14.224-31.771,31.771-31.771h83.043
    c17.546,0,31.771,14.224,31.771,31.771v20.581H329.283z"/>
    <g>
    <path style="fill:#F8C660;" d="M371.164,501.006H140.816v-20.581c0-17.546,14.224-31.771,31.771-31.771h166.806
        c17.546,0,31.771,14.224,31.771,31.771v20.581H371.164z"/>
    <rect x="143.433" y="9.566" style="fill:#F8C660;" width="225.112" height="41.881"/>
    <path style="fill:#F8C660;" d="M151.039,245.948c-31.17-4.24-59.223-18.711-80.415-39.892
        c-25.453-25.453-41.255-60.163-41.255-98.997c0-24.679,19.944-44.237,44.623-44.237h69.956v41.881H74.002
        c-1.55,0-2.454,0.806-2.454,2.356c0,45.2,30.517,82.957,72.398,94.631v4.199C143.947,219.992,146.286,233.499,151.039,245.948z"/>
    <path style="fill:#F8C660;" d="M482.67,107.059c0,38.835-15.737,73.769-41.19,99.222c-21.171,21.161-48.894,35.498-80.024,39.768
        c4.754-12.449,7.603-26.059,7.603-40.161v-4.146c40.834-11.601,71.993-49.41,71.993-94.683c0-1.55-1.519-2.356-3.069-2.356h-68.923
        V62.822h68.923C462.661,62.822,482.67,82.381,482.67,107.059z"/>
    <path style="fill:#F8C660;" d="M314.82,181.996c0,9.537-14.27,15.332-18.725,23.034c-4.596,7.945-2.637,23.153-10.582,27.751
        c-7.701,4.455-19.789-4.714-29.325-4.714c-9.537,0-21.624,9.17-29.325,4.714c-7.945-4.596-5.986-19.806-10.582-27.751
        c-4.455-7.701-18.726-13.496-18.726-23.034s14.27-15.332,18.725-23.034c4.596-7.945,2.637-23.153,10.582-27.751
        c7.701-4.456,19.789,4.714,29.325,4.714c9.537,0,21.624-9.17,29.325-4.714c7.945,4.596,5.986,19.806,10.582,27.751
        C300.55,166.663,314.82,172.458,314.82,181.996z"/>
    </g>
    <g>
    <path style="fill:#231F20;" d="M368.757,255.406c30.472-5.416,58.07-19.807,80.124-41.852
        c28.54-28.54,44.259-66.191,44.259-106.495c0-30.311-24.743-54.708-55.157-54.708h-58.453c0-1.047,0-1.877,0-2.526V9.566
        c0-5.783-5.202-9.566-10.983-9.566H143.435c-5.782,0-9.957,3.783-9.957,9.566v41.881c0,0.129-0.498-0.142-0.494,0.905H73.992
        c-30.401,0-55.133,24.388-55.133,54.698c0,40.226,15.726,77.966,44.283,106.524c21.807,21.795,50.146,36.46,80.351,41.837
        c9.052,20.653,23.513,38.302,42.126,51.346c10.426,7.306,22.196,12.842,33.713,16.576v63.023h-4.865
        c-23.292,0-42.252,18.426-42.252,41.718v10.12c-23.035,0.195-41.881,19.061-41.881,42.232v20.581
        c0,5.783,4.698,10.994,10.481,10.994h230.348c5.782,0,10.46-5.211,10.46-10.994v-20.581c0-23.171-18.847-42.037-41.881-42.232
        v-10.12c0-23.292-18.939-41.718-42.231-41.718h-4.885v-62.974C326.131,313.015,353.777,288.661,368.757,255.406z M82.214,115.174
        h51.263v71.538C105.207,173.57,85.054,145.538,82.214,115.174z M379.53,115.174h50.54c-2.835,30.364-22.27,58.376-50.54,71.562
        V115.174z M437.983,73.292c18.869,0,34.218,15.004,34.218,33.767c0,34.71-13.54,67.234-38.123,91.817
        c-16.244,16.235-35.974,27.586-57.758,33.471c1.671-7.529,2.622-15.211,2.843-22.923c42.885-15.496,72.201-56.357,72.201-102.349
        c0-7.217-6.003-12.843-13.381-12.843h-58.453v-20.94H437.983z M154.417,20.941h204.172v20.941H154.417L154.417,20.941
        L154.417,20.941z M77.948,198.653c-24.6-24.601-38.149-56.961-38.149-91.594c0-18.763,15.339-33.767,34.193-33.767h59.485v20.941
        H74.002c-7.337,0-13.083,5.488-13.083,12.826c0,24.3,7.814,47.135,22.597,66.286c12.701,16.453,30.134,29.018,49.689,36.066
        c0.005,0.192,0.216,12.659,2.723,22.863C114.169,226.347,94.005,214.702,77.948,198.653z M160.799,242.405
        c-0.076-0.199,0-0.396-0.088-0.589c-2.621-6.945-6.294-24.425-6.294-35.927V62.822h204.172v143.067
        c0,11.082-2.356,23.028-6.875,36.515c-15.889,39.843-53.401,65.571-95.538,65.571C214.182,307.975,175.805,281.625,160.799,242.405
        z M360.683,480.426v10.634H151.276v-10.634c0-11.746,9.566-20.777,21.311-20.777h166.806
        C351.138,459.648,360.683,468.68,360.683,480.426z M318.802,428.074v10.634H193.157v-10.634c0-11.746,9.566-20.777,21.311-20.777
        h83.043C309.257,407.297,318.802,416.328,318.802,428.074z M271.685,386.356h-31.411V327.89c5.235,0.668,10.487,1.025,15.813,1.025
        c5.27,0,10.363-0.352,15.598-1.002V386.356z"/>
    <path style="fill:#231F20;" d="M265.132,240.953c4.656,1.641,10.016,3.531,15.5,3.531c3.372,0,6.792-0.715,10.123-2.642
        c8.961-5.184,10.768-15.102,12.221-23.074c0.589-3.233,1.256-6.898,2.181-8.497c0.823-1.422,3.681-3.814,5.978-5.737
        c5.974-5.003,14.157-11.853,14.157-22.54c0-10.686-8.182-17.537-14.157-22.54c-2.296-1.922-5.155-4.316-5.976-5.737
        c-0.926-1.6-1.594-5.264-2.183-8.498c-1.453-7.97-3.26-17.889-12.219-23.071c-8.745-5.06-18.103-1.763-25.624,0.888
        c-3.215,1.134-6.861,2.419-8.946,2.419c-2.085,0-5.73-1.285-8.946-2.419c-7.517-2.649-16.875-5.95-25.623-0.888
        c-8.961,5.184-10.768,15.102-12.22,23.074c-0.589,3.233-1.257,6.897-2.182,8.496c-0.823,1.422-3.681,3.815-5.978,5.738
        c-5.974,5.003-14.157,11.853-14.157,22.54c0,10.686,8.182,17.538,14.157,22.54c2.296,1.923,5.155,4.317,5.976,5.737
        c0.926,1.6,1.594,5.264,2.183,8.498c1.453,7.97,3.26,17.889,12.22,23.072c8.744,5.059,18.103,1.762,25.623-0.889
        c3.215-1.134,6.861-2.419,8.946-2.419S261.916,239.82,265.132,240.953z M240.279,221.204c-2.428,0.855-6.329,2.23-8.146,2.332
        c-0.878-1.629-1.653-5.881-2.134-8.521c-0.895-4.912-1.91-10.479-4.658-15.229c-2.672-4.618-6.732-8.018-10.659-11.306
        c-2.226-1.864-5.882-4.926-6.603-6.484c0.72-1.558,4.377-4.621,6.603-6.484c3.926-3.288,7.987-6.686,10.66-11.306
        c2.747-4.75,3.762-10.317,4.657-15.228c0.481-2.64,1.255-6.893,2.134-8.521c1.816,0.101,5.718,1.476,8.146,2.332
        c4.8,1.692,10.24,3.609,15.907,3.609s11.107-1.917,15.907-3.609c2.428-0.855,6.329-2.231,8.146-2.332
        c0.877,1.629,1.653,5.881,2.134,8.521c0.895,4.912,1.91,10.479,4.658,15.229c2.672,4.618,6.732,8.018,10.659,11.305
        c2.226,1.864,5.882,4.926,6.603,6.484c-0.72,1.558-4.377,4.621-6.603,6.484c-3.926,3.288-7.987,6.686-10.66,11.306
        c-2.747,4.75-3.762,10.317-4.657,15.229c-0.481,2.64-1.255,6.893-2.134,8.521c-1.816-0.101-5.718-1.475-8.146-2.332
        c-4.8-1.692-10.239-3.609-15.907-3.609S245.079,219.512,240.279,221.204z"/>
    </g>
    </svg>
    </div>
    `
}


function configureRatingButtons(modName, modView)
{
    if(!(modName in ratedMods)) {
        return;
    }

    const buttons = modView.getElementsByClassName("rate-button");

    for(let i = 0; i < buttons.length; i++) {
        const button = buttons[i];

        if(button.classList.contains("pressed")) {
            button.classList.remove("pressed")
        }

        if(button.dataset.rate == ratedMods[modName]) {
            button.classList.add("pressed");
        }
    }

}

async function getFavsAndPlayCount(modName, modView) {

    if(customMods.has(modName)) return;
    
    try {
        const res = await fetch('https://cts-backend-w8is.onrender.com/api/get_mod?modName=' + modName, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        })
        const ratingData = await res.json();
        modView.getElementsByClassName("modRating")[0].innerHTML = `<span style="font-weight:bold">${ratingData.favs} FAVORITES</span>` ;
        modView.getElementsByClassName("modPlayCount")[0].innerHTML = `<span style="font-weight:bold">${ratingData.playCount ?? 0} PLAYS</span>` ;
        modView.dataset.favs = ratingData.favs;
        modView.dataset.playCount = ratingData.playCount ?? 0;
    }
    catch {
        modView.getElementsByClassName("modRating")[0].innerHTML = "Failed to get mod info. Try again later.";
        modView.getElementsByClassName("modPlayCount")[0].innerHTML = `` ;
        modView.dataset.playCount = 0;
        modView.dataset.favs = 0;
    }

   
   
}

async function toggleFav(event, modName, favVal) {

    if(customMods.has(modName)) return;

    await fetch('https://cts-backend-w8is.onrender.com/api/rate_mod', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "modName": modName, "rating": favVal })
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
    if(customMods.length == 0) {
        localStorage.removeItem("customMods");
    }
    location.reload();
}

function addCustomMod(code1, code2) {
    const temp = extractElectionDetails(code1, "custom mod being added");

    if(temp == null) {
        alert("Could not add mod from code provided!")
        return;
    }

    const modName = document.getElementById("customModName").value ?? temp.election_json[0].fields.year;
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
    Array.from(tagsFound).sort().forEach(function(tag) {
        const tagButton = document.createElement("div");

        tagButton.classList.add("tag-button");
        tagButton.innerHTML = `
        <input type="checkbox" id="${tag}" name="${tag}" value="${tag}" checked>
        <label style="user-select:none" for="${tag}">${tag.replaceAll("_", " ")}</label><br>
        `;
        tagsGrid.appendChild(tagButton);
        const checkbox = tagButton.getElementsByTagName("INPUT")[0];

        tagButton.addEventListener('click', function (event) {
            if(event.target == tagButton)
            checkbox.click();
        });

        tagList.push(checkbox);
        checkbox.addEventListener("change", updateModViews);
    });
}

function updateModViews(event) {
    const activeTags = new Set();
    for(let i = 0; i < tagList.length; i++) {
        if(tagList[i].checked) {
            activeTags.add(tagList[i].value);
        }
    }


    for(let i = 0; i < modList.length; i++) {
        let shouldShow = false;
        const modMode = modList[i].getAttribute("mode");
        const modTags = modList[i].getAttribute("tags").split(" ");
        for(let j = 0; j < modTags.length; j++) {
            const tag = modTags[j];
            const modName = modList[i].getAttribute("mod-name");
            const modDisplayName = modList[i].getAttribute("mod-display-name");
            if((nameFilter.replace(" ", "") == "" || (modDisplayName.includes(nameFilter) || modName.includes(nameFilter))) && activeTags.has(tag) && (!onlyFavorites || isFavorite(modName)) && (!year || year.test(modName)) && (onlyFavorites || mode == ALL || modMode == mode)) {
                shouldShow = true;
                break;
            }
        }
        modList[i].style.display = shouldShow ? "flex" : "none";
    }
}

function onChangeModSorter(e) {
    if(e.target.value == "chrono") {
        sortModViews(modCompare2)
    }
    else if(e.target.value == "mostFav") {
        sortModViews((a,b) => b.dataset.favs - a.dataset.favs);
    }
    else if(e.target.value == "leastFav") {
        sortModViews((a,b) => a.dataset.favs - b.dataset.favs);
    }
    else if(e.target.value == "mostPlays") {
        sortModViews((a,b) => b.dataset.playCount - a.dataset.playCount);
    }
}

function sortModViews(comparisonFunction) {
    modList.sort(comparisonFunction);
    const modGrid = document.getElementById("mod-grid");
    modGrid.innerHTML = "";
    for(let i = 0; i < modList.length; i++) {
        modGrid.appendChild(modList[i]);
    }
}

function isFavorite(modName) {
    return favoriteMods.has(modName);
}

function setCategory(event, category) {

    const tabs = document.getElementsByClassName("tablinks");
    for(let i = 0; i < tabs.length; i++) {
        const tab = tabs[i];

        tab.className = tab.className.replace(" active", "");
        
        if(tab == event.target) {
            event.currentTarget.className += " active";
        }
    }

    if(category instanceof RegExp) {
        year = category;
        onlyFavorites = false;
    }
    else if(category == "all") {
        year = null;
        onlyFavorites = false;
    }
    else if(category == "favorites") {
        year = null;
        onlyFavorites = true;
    }

    updateModViews();
}

function toggleFavorite(event, modValue) {
    const inFavorites = isFavorite(modValue);
    if(!inFavorites) {
        favoriteMods.add(modValue);
        event.target.innerText = UNFAV;
        toggleFav(event, modValue, 1)
    }
    else {
        favoriteMods.delete(modValue);
        event.target.innerText = FAV;
        toggleFav(event, modValue, -1)
    }
    localStorage.setItem("favoriteMods", Array.from(favoriteMods));
    updateModViews();
}

function loadRandomMod() {
    const modView = choose(modList);
    modView.querySelector(".mod-play-button").click();
}

function loadModFromButton(modValue) {

    if(modValue == "0000Random_Mod") {
        setTimeout(() => updateModViewCount(modValue), 10000);
        loadRandomMod();
        return;
    }

    loadingFromModButton = true;
    e = campaignTrail_temp
    if(customMods.has(modValue)) {
        eval(localStorage.getItem(modValue + "_code1"));
        diff_mod = true
        customMod = modValue;
    }
    else {
        var client = new XMLHttpRequest();
        client.open('GET', "../static/mods/" + modValue + "_init.html");
        client.onreadystatechange = function() {
            eval(client.responseText)
        }
        client.send();
        diff_mod = true
    }
    
    
    $("#modloaddiv")[0].style.display = 'none'
    $("#modLoadReveal")[0].style.display = 'none'
    document.getElementById("featured-mods-area").style.display = "none";
    modded = true;

    modBeingPlayed = modValue;

    if(!customMods.has(modValue)) {
        document.getElementById("copyLinkButton").style.display = "block";
    }
    

    setTimeout(() => updateModViewCount(modValue), 10000);
}

async function copyModLink() {
    const modLink = document.location.href + "?modName=" + modBeingPlayed;
    await window.navigator.clipboard.writeText(modLink);
    alert("Copied link to clipboard!");
}

async function updateModViewCount(modName) {
    if(customMods.has(modName)) return;

    await fetch('https://cts-backend-w8is.onrender.com/api/play_mod', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "modName": modName })
    });
}

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
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
    $('.tagCheckbox:checked').each(function() {
        selectedTags.push($(this).val());
    });

    var filteredOptions = originalOptions.filter(function() {
        var entryTags = $(this).data('tags');

        if (selectedTags.length === 0) {
            // Show all if no tags are selected
            return true;
        }

        //return mods that are tagged and have all checked tags
        return entryTags && (containsAllTags(entryTags, selectedTags));
    });

    var $modSelect = $('#modSelect');
    $modSelect.empty().append(filteredOptions);

    $modSelect.val($modSelect.find('option:first').val());
}

function containsAllTags(entryTags, selectedTags) {
    var entryTagArray = entryTags.split(' ');

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

function modCompare2( a, b ) {
    if ( a.getAttribute("mod-name") < b.getAttribute("mod-name") ){
      return -1;
    }
    if ( a.getAttribute("mod-name") > b.getAttribute("mod-name") ){
      return 1;
    }
    return 0;
}

function modCompare( a, b ) {
    if ( a.mod.value < b.mod.value ){
      return -1;
    }
    if ( a.mod.value > b.mod.value ){
      return 1;
    }
    return 0;
}

function setMode(evt, newMode) {
    const buttons = document.getElementsByClassName("mode-button");
    for(let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        if(button.classList.contains("pressed")) {
            button.classList.remove("pressed")
        }
    }
    evt.target.classList.add("pressed");
    mode = newMode;
    updateModViews();
}