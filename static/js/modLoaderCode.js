let allAch = {};

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
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

async function loadMod(modValue) {
    e = campaignTrail_temp;

    const res = await fetch("./static/mods/" + modValue + "_init.html");
    const modCode = await res.text();

    document.body.style.display = "initial";

    getAllAchievements(modCode, modValue);

    eval(modCode);

    diff_mod = true
    loadingFromModButton = true;
    modded = true;
    modBeingPlayed = modValue;
}

loadMod("1924");
const namesOfModsFromValue = {"1924" : "1924: 'Silent Cal' in The Silent Decade"}