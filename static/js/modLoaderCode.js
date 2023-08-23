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

function getAllAchievements(rawModText, nameOfMod) {

    if(rawModText == null) {
        return;
    }

    let codeSnippet = null;
    let temp = {}
    let start = ""
    let end = ""

   if(rawModText.includes("campaignTrail_temp.achievements = {")) {
        start = ".achievements = {";
        end = "}"
    } else {
        return;
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
        console.log("Could not extract ach from " + nameOfMod)
    }

    for(ach in temp.achievements) {
        allAch[ach] = temp.achievements[ach];
    }

    return temp;
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

        if(temp == null) {
            continue;
        }

        getAllAchievements(rawModText, customModName);

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
    modView.setAttribute("mod-name", mod.value);
    modView.setAttribute("mod-display-name", mod.innerText.toLowerCase());

    const favText = isFavorite(mod.value) ? UNFAV : FAV; 

    modView.innerHTML = `
    <div class="mod-title">
        <p>${mod.innerText}</p>
    </div>
    <img class="mod-image" src="${imageUrl}"></img>
    <div class="mod-desc">${description}</div>
    <div class="hover-button-holder">
        <button class="hover-button" onclick="loadModFromButton(\`${mod.value}\`)"><span>${PLAY}</span></button>
        <button class="hover-button" onclick="toggleFavorite(event, \`${mod.value}\`)"><span>${favText}</span></button>
        <button style="${customMods.has(mod.value) ? "" : "display:none"}" class="hover-button" onclick="deleteCustomMod(event, \`${mod.value}\`)"><span>${DELETE}</span></button>
    </div>
    ${!customMods.has(mod.value) ? `
    <div class="rating-background">
    <div class="modRating">LOADING FAVORITES...</div>
    </div>` : ""}
    
    `

    modView.id = mod.value;
    getFavs(mod.value, modView);

    return modView;
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

async function getFavs(modName, modView) {

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
        modView.dataset.favs = ratingData.favs;
    }
    catch {
        modView.getElementsByClassName("modRating")[0].innerHTML = "Failed to get total. Try again later.";
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
    await getFavs(modName, modView);
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

    alert("Custom mod added! Reload page to see.")
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
        <label style="user-select:none" for="${tag}">${tag}</label><br>
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

function loadModFromButton(modValue) {
    loadingFromModButton = true;

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
    modded = true
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