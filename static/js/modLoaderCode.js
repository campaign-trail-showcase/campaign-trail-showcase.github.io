
$(document).ready(async function() {
    var originalOptions = null;

    $('.tagCheckbox').on('change', filterEntries);

    await loadEntries();
    let mods = document.getElementById('modSelect').childNodes;

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
       
        document.getElementById("mod-grid").appendChild(createModView(mod, imageUrl, description));
    });
    
});

function createModView(mod, imageUrl, description) {
    const modView = document.createElement("div");
    modView.classList.add("community-grid-element")

    modView.innerHTML = `
    <h1>${mod.value}</h1>
    <img style="width:80%; border: 4px solid white;" src="${imageUrl}"></img>
    <div class="mod-desc">${description}</div>
    <button>Load Mod</button>
    <p>LOAD MOD BUTTON NOT WORKING YET</p>
    `

    return modView;
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