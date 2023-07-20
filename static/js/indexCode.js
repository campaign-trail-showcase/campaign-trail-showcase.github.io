const yearField = document.getElementById("year")
yearField.innerHTML = new Date().getFullYear()

// INITIAL BIGSHOT

const keyCodes = [66, 73, 71, 83, 72, 79, 84, 13];
const altCodes = [66, 83, 13]; // shortcut
let counter = 0;
let alt_counter = 0;
let initial = false;

document.addEventListener('keydown', function(event) {
    if (campaignTrail_temp.bigshot_mode) {
        return;
    }
    if (event.keyCode === keyCodes[counter]) {
        counter += 1;

        if (counter === keyCodes.length) {
            if (localStorage.getItem("cheated") !== "true") {
                const a = "LOOKING FOR [Irresistible Cheat Codes] THAT WILL [Blow Your Mind!?]\nWELL [Shut Your Mouth] BECAUSE YOU ARE [A Redditor!]\nTRY A LITTLE [Friday Night Work Out]...\nTHEN I'LL SHOW YOU MY\nTHEN I'LL SHOW YOU MY\n1 LEFT.";
                counter = 0;
                localStorage.setItem("cheated", true);
                alert(a);
                initial = true;
                return;
            } else {
                a = initial ? `DON'T WORRY! FOR OUR [No Time Back Guaranttee]\nTHIS IS [One Cheat Code] YOU WILL [Regret] FOR THE REST OF YOUR REDDIT POST!` : `[Heaven], are you WATCHING?`;
                campaignTrail_temp.bigshot_mode = true;
                alert(a);
                return;
            }
        }
    } else {
        counter = 0;
    }
    if (event.keyCode == altCodes[alt_counter] && localStorage.getItem("cheated") == "true") {
        alt_counter += 1;
        if (alt_counter === altCodes.length) {
            a = `ARE YOU GETTING ALL THIS [Mike]!? I'M FINALLY\nI'M FINALLY GONNA BE A BIG SHOT!!!`;
            campaignTrail_temp.bigshot_mode = true;
            alert(a);
        }
        return;
    } else {
        alt_counter = 0;
    }
});


function findCandidate(pk) {
    for (i in campaignTrail_temp.candidate_json) {
        if (campaignTrail_temp.candidate_json[i].pk == pk) {
            return [i, campaignTrail_temp.candidate_json[i].fields.first_name + " " + campaignTrail_temp.candidate_json[i].fields.last_name]
        }
    }
}

function findAnswer(pk) {
    for (i in campaignTrail_temp.answers_json) {
        if (campaignTrail_temp.answers_json[i].pk == pk) {
            return [i, campaignTrail_temp.answers_json[i].fields.description]
        }
    }
}

function findIssue(pk) {
    for (i in campaignTrail_temp.issues_json) {
        if (campaignTrail_temp.issues_json[i].pk == pk) {
            return [i, campaignTrail_temp.issues_json[i].fields.name]
        }
    }
}

function findState(pk) {
    for (i in campaignTrail_temp.states_json) {
        if (campaignTrail_temp.states_json[i].pk == pk) {
            return [i, campaignTrail_temp.states_json[i].fields.name]
        }
    }
}

function benefitCheck(objectid) {
    object = document.getElementById("question_form").children[0].children[(objectid * 3)]
    answerid = object.value
    effects = []
    i = 0
    for (i in campaignTrail_temp.answer_score_global_json) {
        if (campaignTrail_temp.answer_score_global_json[i].fields.answer == answerid) {
            effects.push(["global", campaignTrail_temp.answer_score_global_json[i]])
        }
    }
    i = 0
    for (i in campaignTrail_temp.answer_score_state_json) {
        if (campaignTrail_temp.answer_score_state_json[i].fields.answer == answerid) {
            effects.push(["state", campaignTrail_temp.answer_score_state_json[i]])
        }
    }
    i = 0
    for (i in campaignTrail_temp.answer_score_issue_json) {
        if (campaignTrail_temp.answer_score_issue_json[i].fields.answer == answerid) {
            effects.push(["issue", campaignTrail_temp.answer_score_issue_json[i]])
        }
    }
    i = 0

    console.log(effects)
    mods = ""
    for (_ = 0; _ < effects.length; _++) {
        if (effects[_][0] == "global") {
            affected = findCandidate(effects[_][1].fields.candidate)
            affected1 = findCandidate(effects[_][1].fields.affected_candidate)
            name = affected[1]
            name2 = affected1[1]
            multiplier = effects[_][1].fields.global_multiplier.toString()
            mods += "<br><em>Global:</em> Affects " + name2 + " for " + name + " by " + multiplier
        }
        if (effects[_][0] == "issue") {
            affected = findIssue(effects[_][1].fields.issue)
            name = affected[1]
            multiplier = effects[_][1].fields.issue_score.toString()
            multiplier1 = effects[_][1].fields.issue_importance.toString()
            mods += "<br><em>Issue:</em> Affects " + name + " by " + multiplier + " with a importance of " + multiplier1
        }
        if (effects[_][0] == "state") {
            affected = findState(effects[_][1].fields.state)
            candidatething = findCandidate(effects[_][1].fields.affected_candidate)
            candidatething2 = findCandidate(effects[_][1].fields.candidate)
            name1 = affected[1]
            test5 = candidatething[1]
            test6 = candidatething2[1]
            multiplier = effects[_][1].fields.state_multiplier.toString()
            mods += "<br><em>State:</em> Affects " + test5 + " for " + test6 + " in " + name1 + " by " + multiplier
        }
    }
    answerfeedback = "";
    for (let index = 0; index < campaignTrail_temp.answer_feedback_json.length - 1; index++) {
        if (answerid == campaignTrail_temp.answer_feedback_json[index].fields.answer) {
            answerfeedback = "<b>" + campaignTrail_temp.answer_feedback_json[index].fields.answer_feedback + "</b>"
            break;
        }
    }
    return '<font size="2"><b>Answer: </b>' + findAnswer(answerid)[1] + "'<br>" + "Feedback: " + answerfeedback + "'<br>" + mods + "</font><br><br>"
}

function benefitChecker() {
    questionlength = document.getElementById("question_form").children[0].children.length / 3
    nnn = ""
    for (v = 0; v < questionlength; v++) {
        n = benefitCheck(v)
        nnn += n
    }
    $("#dialogue")[0].innerHTML = nnn
    $("#dialogue").dialog();
}

function difficultyChanger() {
    var sliderValue = parseFloat(document.getElementById("difficultySlider").value);
    sliderValue = isNaN(sliderValue) == NaN ? 0.97 : sliderValue;
    var newVal = Math.pow(sliderValue / 1000, 2);
    campaignTrail_temp.difficulty_level_multiplier = newVal;
    document.getElementById("difficultyMod").innerHTML = `Multiplier: <span contenteditable="true" id='difficulty_mult_bigshot'>${newVal.toFixed(2)}</span>`;
    updateSliderValue(newVal);
    document.getElementById('difficulty_mult_bigshot').addEventListener('input', manuallyAdjustedSlider);
}

function manuallyAdjustedSlider() {
    var multiplier = parseFloat(document.getElementById("difficulty_mult_bigshot").innerText);
    multiplier = isNaN(multiplier) ? 0.97 : multiplier;
    console.log(multiplier)
    var sliderValue = Math.sqrt(multiplier) * 1000;
    document.getElementById("difficultySlider").value = sliderValue;
    campaignTrail_temp.difficulty_level_multiplier = multiplier;
}

function updateSliderValue(newVal) {
    var sliderValue = Math.sqrt(newVal) * 1000;
    document.getElementById("difficultySlider").value = sliderValue;
}

document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
    var link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    if (oldLink) {
        document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
}

changeFavicon("/static/34starcircle-2.png")

$(document).ready(function() {
    var originalOptions = null;

    $('.tagCheckbox').on('change', filterEntries);

    loadEntries();

    function loadEntries() {
        $.ajax({
            type: "GET",
            url: "../static/mods/MODLOADERFILE.html",
            dataType: "text",
            success: function(response) {
                $("#modSelect").html(response);

                // hot load
                let hotload = window.localStorage.getItem("hotload");
                if (hotload) {
                    try {
                        $("#modSelect")[0].value = hotload;
                        campaignTrail_temp.hotload = hotload;
                        $("#submitMod").click();
                    } catch {

                    }
                    window.localStorage.removeItem("hotload") // this should be done whether or not there is an error.
                }

                //clone so we don't reduce the list of mods every time a tag is selected
                originalOptions = $("#modSelect option").clone();
                filterEntries();
            },
            error: function() {
                console.log("Error loading mod loader - couldn't reach server.");
            }
        });
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
});


function uwuifier(a) {
    b = a.split(" I ")
    if (b.length > 0) {
        for (i in b) {
            if (i < b.length - 1) {
                b[i] += " I-I "
            }
        }
    }
    a = b.join("")
    b = a.split("l")
    if (b.length > 0) {
        for (i in b) {
            if (i < b.length - 1) {
                b[i] += "w"
            }
        }
    }
    a = b.join("")
    b = a.split("r")
    if (b.length > 0) {
        for (i in b) {
            if (i < b.length - 1) {
                b[i] += "w"
            }
        }
    }
    a = b.join("")
    b = a.split(" t")
    if (b.length > 0) {
        for (i in b) {
            if (i < b.length - 1) {
                if (b[Number(i) + 1][0] != '-')
                    b[i] += " t-t"
                else
                    b[i] += " t"
            }
        }
    }
    a = b.join("")
    b = a.split("ow")
    if (b.length > 0) {
        for (i in b) {
            if (i < b.length - 1) {
                b[i] += "uw"
            }
        }
    }
    a = b.join("")
    return a
}

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

nct_stuff = {}
nct_stuff.dynamicOverride = false;
nct_stuff.themes = {
    "tct": {
        name: "The Community Trail",
        background: "../static/images/backgrounds/tct_background.png",
        banner: "../static/images/banners/tct_banner.png",
        coloring_window: "#ff6b6b",
        coloring_container: "#930301",
        coloring_title: ""
    },
    "custom": {
        name: "Custom",
        background: "",
        banner: "",
        coloring_window: "",
        coloring_container: "",
        coloring_title: ""
    }
}

nct_stuff.selectedTheme = "";
theme = window.localStorage.getItem("theme");

if (theme == null) {
    nct_stuff.selectedTheme = "tct"
} else {
    nct_stuff.selectedTheme = theme
}

var selectedTheme = nct_stuff.themes[nct_stuff.selectedTheme];

document.getElementById("theme_picker").innerHTML = "<select id='themePicker' onchange='themePicked()'></select>"
document.getElementById("themePicker").innerHTML += "<option value='" + nct_stuff.selectedTheme + "'>" + nct_stuff.themes[nct_stuff.selectedTheme].name + "</option>"


for (key in nct_stuff.themes) {
    const theme = nct_stuff.themes[key];
    if (theme != selectedTheme) {
        document.getElementById("themePicker").innerHTML += "<option value='" + key + "'>" + nct_stuff.themes[key].name + "</option>"
    } 
}

function themePicked() {
    sel = document.getElementById("themePicker").value
    window.localStorage.setItem("theme", sel)
    location.reload()
}

susnum = Math.floor((Math.random() * 8) + 1)
stassennum = Math.floor((Math.random() * 8) + 1)
stassenyear = ["1944", "1948", "1952", "1964", "1968", "1980", "1984", "1988", "1992"]

// Caching frequently accessed elements and values
let correctbannerpar = document.getElementsByClassName("game_header")[0];
let corrr = correctbannerpar.innerHTML;
let header = $('#header')[0];
let gameHeader = document.getElementsByClassName("game_header")[0];
let gameWindow = $("#game_window")[0];
let container = $(".container")[0];
let campaignTrailMusic = document.getElementById('campaigntrailmusic');
// Create a style element
let dynamicStyle = document.createElement('style');
document.head.appendChild(dynamicStyle);

// Update banner and styling
function updateBannerAndStyling() {
    header.src = selectedTheme.banner;
    header.width = 1000;
    document.body.background = selectedTheme.background;
    gameWindow.style.backgroundColor = selectedTheme.coloring_window;
    container.style.backgroundColor = selectedTheme.coloring_container;
    gameHeader.style.backgroundColor = selectedTheme.coloring_title;

    if (selectedTheme.text_col != null) {
        container.style.color = selectedTheme.text_col;
        gameWindow.style.color = "black";
    }
}

// Update inner windows styling
function updateInnerWindowsStyling() {
    let innerWindow2 = document.getElementById("inner_window_2");
    let innerWindow3 = document.getElementById("inner_window_3");
    let innerWindow4 = document.getElementById("inner_window_4");
    let innerWindow5 = document.getElementById("inner_window_5");

    if (innerWindow2 != null) {
        innerWindow2.style.backgroundColor = selectedTheme.coloring_window;
    } else if (innerWindow3 != null) {
        innerWindow3.style.backgroundColor = selectedTheme.coloring_window;
    }

    if (innerWindow4 != null) {
        innerWindow4.style.backgroundColor = selectedTheme.coloring_window;
    }

    if (innerWindow5 != null) {
        innerWindow5.style.backgroundColor = selectedTheme.coloring_window;
    }
}

// Update game header content and styling
function updateGameHeaderContentAndStyling() {
    let gameHeader = $(".game_header")[0];
    if (gameHeader.innerHTML != corrr) {
        gameHeader.innerHTML = corrr;
    }
    gameHeader.style.backgroundColor = selectedTheme.coloring_title;
    updateInnerWindowsStyling();
}

// Update CSS rules in the style element
function updateDynamicStyle() {
    if (nct_stuff.dynamicOverride) {
        return;
    }
    let background_size_css = "";
    if (selectedTheme.background_cover) {
        background_size_css = "background-size: cover"
    }
    let dynaStyle = `
    #header {
        src: ${selectedTheme.banner};
        width: 1000px;
    }
    body {
        background: ${selectedTheme.background};
        ${background_size_css};
    }
    #game_window {
        background-color: ${selectedTheme.coloring_window};
        color: black;
        background-image: ${selectedTheme.window_url ? "url(" + selectedTheme.window_url + ")" : $("#game_window")[0].style.backgroundImage};
    }
    .container {
        background-color: ${selectedTheme.coloring_container};
        color: ${selectedTheme.text_col || "inherit"};
    }
    .game_header {
        background-color: ${selectedTheme.coloring_title};
    }
    #inner_window_2 {
        background-color: ${selectedTheme.coloring_window};
    }
    #inner_window_3 {
        background-color: ${selectedTheme.coloring_window};
    }
    #inner_window_4 {
        background-color: ${selectedTheme.coloring_window};
    }
    #inner_window_5 {
        background-color: ${selectedTheme.coloring_window};
    }  
    #main_content_area {
        color: ${selectedTheme.text_col || "inherit"};
    }
    #main_content_area_reading {
        color: ${selectedTheme.text_col || "inherit"};
    }
    #main_content_area table {
        color: black;
    }
    #menu_container {
        color: black;
    }
    `;
    if (dynamicStyle.innerHTML != dynaStyle) {
        dynamicStyle.innerHTML = dynaStyle;
    }
}

// Update banner, styling, and game header on interval
setInterval(function() {
    if (JSON.stringify(nct_stuff.custom_override) != JSON.stringify(selectedTheme) && !nct_stuff.dynamicOverride && nct_stuff.custom_override) {
        nct_stuff.themes[nct_stuff.selectedTheme] = strCopy(nct_stuff.custom_override);
        selectedTheme = nct_stuff.themes[nct_stuff.selectedTheme];
        $("#game_window")[0].style.backgroundImage = "";
        updateBannerAndStyling()
    } else if (!nct_stuff.custom_override && nct_stuff.selectedTheme == "custom" && modded && selectedTheme.window_url) {
        selectedTheme.window_url = null;
    }
    let gameHeader = $(".game_header")[0];
    if (gameHeader.innerHTML != corrr) {
        gameHeader.innerHTML = corrr;
    }
    gameHeader.style.backgroundColor = selectedTheme.coloring_title;
    updateDynamicStyle();

    //updateGameHeaderContentAndStyling();
}, 100);

function loadJSON(path, varr, callback = () => {}) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                eval(varr + "=JSON.parse(" + JSON.stringify(xhr.responseText.trim()) + ")");
                callback()
            } else {
                return xhr;
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

strCopy = (toCopy) => {
    let copy = JSON.parse(JSON.stringify(toCopy));
    return copy;
}

var campaignTrail_temp = {};
ree = {}

campaignTrail_temp.election_json = {}
campaignTrail_temp.candidate_json = {}
loadJSON("../static/json/election.json", "campaignTrail_temp.election_json", () => {
    ree.election_json = strCopy(campaignTrail_temp.election_json);
})
loadJSON("../static/json/candidate.json", "campaignTrail_temp.candidate_json", () => {
    ree.candidate_json = strCopy(campaignTrail_temp.candidate_json);
})
loadJSON("../static/json/running_mate.json", "campaignTrail_temp.running_mate_json", () => {
    ree.running_mate_json = strCopy(campaignTrail_temp.running_mate_json);
})
loadJSON("../static/json/opponents.json", "campaignTrail_temp.opponents_default_json", () => {
    ree.opponents_default_json = strCopy(campaignTrail_temp.opponents_default_json);
})
loadJSON("../static/json/opponents.json", "campaignTrail_temp.opponents_weighted_json", () => {
    ree.opponents_weighted_json = strCopy(campaignTrail_temp.opponents_weighted_json);
})
loadJSON("../static/json/election_list.json", "campaignTrail_temp.temp_election_list", () => {
    ree.temp_election_list = strCopy(campaignTrail_temp.temp_election_list);
})

campaignTrail_temp.difficulty_level_json = JSON.parse("[{\"model\": \"campaign_trail.difficulty_level\", \"pk\": 1, \"fields\": {\"name\": \"Cakewalk\", \"multiplier\": 1.33}}, {\"model\": \"campaign_trail.difficulty_level\", \"pk\": 2, \"fields\": {\"name\": \"Very Easy\", \"multiplier\": 1.2}}, {\"model\": \"campaign_trail.difficulty_level\", \"pk\": 3, \"fields\": {\"name\": \"Easy\", \"multiplier\": 1.1}}, {\"model\": \"campaign_trail.difficulty_level\", \"pk\": 4, \"fields\": {\"name\": \"Normal\", \"multiplier\": 0.97}}, {\"model\": \"campaign_trail.difficulty_level\", \"pk\": 5, \"fields\": {\"name\": \"Hard\", \"multiplier\": 0.95}}, {\"model\": \"campaign_trail.difficulty_level\", \"pk\": 6, \"fields\": {\"name\": \"Impossible\", \"multiplier\": 0.9}}, {\"model\": \"campaign_trail.difficulty_level\", \"pk\": 7, \"fields\": {\"name\": \"Unthinkable\", \"multiplier\": 0.83}}, {\"model\": \"campaign_trail.difficulty_level\", \"pk\": 8, \"fields\": {\"name\": \"Blowout\", \"multiplier\": 0.75}}, {\"model\": \"campaign_trail.difficulty_level\", \"pk\": 9, \"fields\": {\"name\": \"Disaster\", \"multiplier\": 0.68}}]");
campaignTrail_temp.global_parameter_json = JSON.parse("[{\"model\": \"campaign_trail.global_parameter\", \"pk\": 1, \"fields\": {\"vote_variable\": 1.125, \"max_swing\": 0.12, \"start_point\": 0.94, \"candidate_issue_weight\": 10.0, \"running_mate_issue_weight\": 3.0, \"issue_stance_1_max\": -0.71, \"issue_stance_2_max\": -0.3, \"issue_stance_3_max\": -0.125, \"issue_stance_4_max\": 0.125, \"issue_stance_5_max\": 0.3, \"issue_stance_6_max\": 0.71, \"global_variance\": 0.01, \"state_variance\": 0.005, \"question_count\": 25, \"default_map_color_hex\": \"#C9C9C9\", \"no_state_map_color_hex\": \"#999999\"}}]");
campaignTrail_temp.candidate_dropout_json = JSON.parse("[{\"model\": \"campaign_trail.candidate_dropout\", \"pk\": 1, \"fields\": {\"candidate\": 36, \"affected_candidate\": 18, \"probability\": 1.0}}]");
campaignTrail_temp.show_premium = true;
campaignTrail_temp.premier_ab_test_version = -1;
campaignTrail_temp.credits = "Dan Bryan";

// CUSTOM THEME MANAGER

open_first_gate = (e) => { // gate of opening
    e.preventDefault();
    let menu_area = $("#bonus_menu_area")[0];
    menu_area.style.display = "block";

    /*
        name: "Custom",
        background: "",
        banner: "",
        coloring_window: "",
        coloring_container: "",
        coloring_title: ""
    */

    let th = window.localStorage.getItem("custom_theme");

    menu_area.innerHTML = `
    <div class='prometh'>
    <h3>Custom Theme Menu</h3>
    <p>Background Image URL: <input id='background_url' placeholder='Link directly to the image.' /></p>
    <p>Background Image Covers?: <input id='background_cover' type='checkbox' /></p>
    <p>Banner Image URL (suggested dimensions: 1000x303): <input id='banner_url' placeholder='Link directly to the image.' /></p>
    <p>Window Image URL (<b>OPTIONAL</b>, WILL LOOK BAD IF YOU DON'T KNOW WHAT YOU'RE DOING): <input id='window_url' placeholder='Link directly to the image.' /></p>
    <p>Window Colouring: <input id='window_colour' type='color' /></p>
    <p>Container Colouring: <input id='cont_colour' type='color' /></p>
    <p>Title Colouring: <input id='title_colour' type='color' /></p>
    <p>Text Colouring: <input id='text_colour' type='color' /></p>
    <p>Override Mod Themes? (experimental): <input id='mod_override' type='checkbox' /></p>

    <button id='prometh_save'>Save</button>
    </div>
    `

    if (th) {
        let theme = JSON.parse(th);
        $("#background_url").val(theme.background);
        $("#background_cover")[0].checked = theme.background_cover;
        $("#banner_url").val(theme.banner);
        $("#window_url").val(theme.window_url)
        $("#window_colour").val(theme.coloring_window);
        $("#cont_colour").val(theme.coloring_container);
        $("#title_colour").val(theme.coloring_title);
        $("#text_colour").val(theme.text_col);
        $("#mod_override")[0].checked = theme.mod_override;
    }

    $("#prometheus_button").off("click").click(open_fifth_gate);

    $("#prometh_save").click(() => {
        let theme = {
            name: "Custom",
            background: $("#background_url").val(),
            background_cover: $("#background_cover")[0].checked,
            banner: $("#banner_url").val(),
            coloring_window: $("#window_colour").val(),
            coloring_container: $("#cont_colour").val(),
            coloring_title: $("#title_colour").val(),
            text_col: $("#text_colour").val(),
            mod_override: $("#mod_override")[0].checked,
            window_url: $("#window_url").val()
        }
        nct_stuff.themes[nct_stuff.selectedTheme] = theme;
        selectedTheme = theme;
        updateBannerAndStyling();
        if (theme.mod_override) {
            updateDynamicStyle();
            nct_stuff.custom_override = JSON.parse(JSON.stringify(theme));
        } else {
            nct_stuff.custom_override = null;
        }

        window.localStorage.setItem("custom_theme", JSON.stringify(theme));
    })
}

open_fifth_gate = (e) => { // gate of closing
    e.preventDefault();
    let menu_area = $("#bonus_menu_area")[0];
    menu_area.style.display = "none";

    // close menu
    let m_children = Array.from(menu_area.children);
    m_children.forEach(f => f.remove());

    $("#prometheus_button").off("click").click(open_first_gate);
}


if (nct_stuff.selectedTheme == "custom") {
    let themePicker = $("#theme_picker")[0];

    let theme_man_button = document.createElement("p");
    theme_man_button.innerHTML = "<button id='prometheus_button'><b>Prometheus' Menu</b></button>";

    themePicker.appendChild(theme_man_button);

    var prometheusStyle = document.createElement('style');
    prometheusStyle.innerHTML = `
    #bonus_menu_area {
        position: relative;
        width: 500px;
        height: 200px;
        display: none;
        text-align: right;
        left: 45%;
    }
    
    .prometh {
        position: absolute;
        top: 0;
        right: 0;
        background-color: #595959;
        border: 3px solid black;
        color: white;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        padding: 10px;
    }
    `
    document.head.appendChild(prometheusStyle);

    $("#prometheus_button").click(open_first_gate);

    let th = window.localStorage.getItem("custom_theme");
    if (th) {
        let theme = JSON.parse(th);
        nct_stuff.themes[nct_stuff.selectedTheme] = theme;
        selectedTheme = theme;
        updateBannerAndStyling();
        if (theme.mod_override) {
            updateDynamicStyle();
            nct_stuff.custom_override = JSON.parse(JSON.stringify(theme));
        }
    }
}


updateBannerAndStyling();