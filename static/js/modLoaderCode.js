let loadingFromModButton = false;

const modList = [];
const tagList = [];

$(document).ready(async function() {
    var originalOptions = null;

    $('.tagCheckbox').on('change', filterEntries);

    await loadEntries();
    let mods = document.getElementById('modSelect').childNodes;

    let tagsFound = new Set();

    mods.forEach(function(mod) {
        const tags = mod.dataset.tags.split(" ");
        for(let i = 0; i < tags.length; i++) {
            if(tags[i].length == 0) {
                continue;
            }
            tagsFound.add(tags[i]);
        }
    });

    mods.forEach(async function(mod) {

        if(mod.value == "other") {
            return;
        }

        const modRes = await fetch("../static/mods/" + mod.value + "_init.html");
        const rawModText = await modRes.text();
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
            console.log("Could not extract metadata for mod: " + mod.value);
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
            console.log("Could not extract from " + mod.value)
        }

        let imageUrl = temp.election_json[0].fields.image_url;
        let description = temp.election_json[0].fields.summary.slice(0, 300) + "...";
        
        const modView = createModView(mod, imageUrl, description);
        document.getElementById("mod-grid").appendChild(modView);
        modList.push(modView);
    });

    createTagButtons(tagsFound);
    
});

function createTagButtons(tagsFound) {
    const tagsGrid = document.getElementById("tags");
    tagsFound.forEach(function(tag) {
        const tagButton = document.createElement("div");
        tagButton.classList.add("tag-button");
        tagButton.innerHTML = `
        <input type="checkbox" id="${tag}" name="${tag}" value="${tag}" checked>
        <label for="${tag}">${tag}</label><br>
        `;
        tagsGrid.appendChild(tagButton);
        const checkbox = tagButton.getElementsByTagName("INPUT")[0];
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
        let hasTag = false;
        const modTags = modList[i].getAttribute("tags").split(" ");
        for(let j = 0; j < modTags.length; j++) {
            const tag = modTags[j];
            if(activeTags.has(tag)) {
                hasTag = true;
                break;
            }
        }
        modList[i].style.display = hasTag ? "block" : "none";
    }
}

function createModView(mod, imageUrl, description) {
    const modView = document.createElement("div");
    modView.classList.add("community-grid-element")

    modView.setAttribute("tags", mod.dataset.tags);

    modView.innerHTML = `
    <h2 class="mod-title">${mod.innerText}</h2>
    <img style="width:80%; border: 4px solid white;" src="${imageUrl}"></img>
    <div class="mod-desc">${description}</div>
    <button class="hover-button" onclick="loadModFromButton('${mod.value}')"><span>Load Mod</span></button>
    `

    return modView;
}

function loadModFromButton(modValue) {
    loadingFromModButton = true;
    var client = new XMLHttpRequest();
    client.open('GET', "../static/mods/" + modValue + "_init.html");
    client.onreadystatechange = function() {
        evaluate(client.responseText)
    }
    client.send();
    diff_mod = true
    
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