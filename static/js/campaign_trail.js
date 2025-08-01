/* global campaignTrail_temp, jQuery, $ */

let e = campaignTrail_temp;
e.skippingQuestion = false;

async function evalFromUrl(url, callback = null) {
    const evalRes = await fetch(url);
    const code = await evalRes.text();
    eval(code);

    callback?.();
}

const baseScenarioDict = {
    1844: "1844_Clay_Fillmore.html",
    1860: "1860_Douglas_Guthrie.html",
    1896: "1896_Bryan_Boies.html",
    1916: "1916_Hughes_Burkett.html",
    1948: "1948_Dewey_Bricker.html",
    1960: "1960_Kennedy_Humphrey.html",
    1964: "1964_Goldwater_Miller.html",
    1968: "1968_Humphrey_Connally.html",
    1976: "1976_Carter_Church.html",
    1988: "1988_Bush_Dole.html",
    2000: "2000_Bush_Cheney.html",
    2012: "2012_Obama_Clinton.html",
    2016: "2016_Clinton_Booker.html",
    "2016a": "2016a_Clinton_Booker.html",
    2020: "2020_Biden_Bass.html",
};

// Global Text Variables

// Code 1 Text
e.SelectText = "Please select the election you will run in:";
e.CandidText = "Please select your candidate:";
e.VpText = "Please select your running mate:";
e.PartyText = "Party:";
e.HomeStateText = "Home State:";
// Ending Popups
e.ElectionPopup = "Election night has arrived. Settle in and wait for the returns, however                 long it may take. Best of luck!";
e.WinPopup = "Congratulations! You won this year's election! Click OK to view the                     rest of the returns, or skip straight to the final results. We hope                     you have a nice victory speech prepared for your supporters.";
e.LosePopup = "Sorry. You have lost the election this time. Click OK to view the                     rest of the returns, or skip straight to the final results. We hope                     you have a nice concession speech prepared.";

e.finalPercentDigits = 1; // for PV % in final results
e.statePercentDigits = 2;
e.SelAnsContText = "Please select an answer before continuing!";
e.numberFormat = "en-US";

function substitutePlaceholders(str) {
    if (!str || typeof str !== "string") return str;
    return str.replace(/\{\{(.*?)}\}/g, (_, varName) => {
        try {
            return (window[varName] !== undefined) ? window[varName] : `{{${varName}}}`;
        } catch {
            return `{{${varName}}}`;
        }
    });
}

// eslint-disable-next-line prefer-const
let DEBUG = false;

campaignTrail_temp.issue_font_size = null;
e.shining_data = {};

function debugConsole(...args) {
    if (DEBUG) {
        console.log(...args);
    }
}

function removeIssueDuplicates(array) {
    return array.filter(
        (item, index) => array.map((f) => f.issue).indexOf(item.issue) === index,
    );
}

function openTab(evt, tabName) {
    $(".tabcontent").css("display", "none");
    $(".tablinks").removeClass("active");
    $(".tablinks").attr("disabled", false);
    $(`#${tabName}`).css("display", "block");
    if (evt) {
        evt.currentTarget.classList.add("active");
        evt.currentTarget.disabled = true;
    } else {
        $("#funds")[0].classList.add("active");
        $(".tablinks")[0].disabled = true;
    }
}

const AdvisorFeedbackArr = [1, 0];

function mapCache(skip = false) {
    // preloads poll map
    if (!skip) {
        if (!$("#main_content_area")[0]) {
            return false;
        }
        const election = e.election_json.find((f) => Number(f.pk) === Number(e.election_id));
        if (
            ((e.question_number - 1) % 2 !== 0 && election.fields.has_visits === 1)
            || (e.question_number === e.global_parameter_json[0].fields.question_count)
            || (e.primary_code && e.primary_code.some((f) => f.breakQ === e.question_number))
        ) {
            return false;
        }
    }
    $("#map_container").remove();
    $("#main_content_area").html(
        '<div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ESTIMATED SUPPORT</h3>                        <p>Click on a state to view more info.</p>                    </div>                </div>                <div id="state_result_container">                    <div id="state_info">                        <h3>STATE SUMMARY</h3>                        <p>Click/hover on a state to view more info.</p>                        <p>Precise results will be available on election night.</p>                    </div>                </div>            </div>',
    );
    $("#main_content_area")[0].style.display = "";

    const rr = A(2);
    rFuncRes = rFunc(rr, 0);
    $("#map_container").usmap(rFuncRes);
    $("#main_content_area")[0].style.display = "none";

    return true;
}

function dHondtAllocation(votes, seats, thresh = 0.15) {
    const quotients = votes.splice();
    const allocations = [];
    votes.forEach(() => {
        allocations.push(0);
    });
    const total_votes = votes.reduce((sum, value) => sum + value);
    const perc_votes = [];
    votes.forEach((f) => {
        perc_votes.push(f / total_votes);
    });

    for (let i = 0; i < seats; i++) {
        for (let w = 0; w < votes.length; w++) {
            if (perc_votes[w] < thresh) {
                quotients[w] = 0;
            } else {
                quotients[w] = votes[w] / (allocations[w] + 1);
            }
        }
        index = quotients.indexOf(Math.max(...quotients));
        allocations[index] += 1;
    }

    return allocations;
}

function findFromPK(array, pk) {
    return array.findIndex((x) => x.pk === Number(pk));
}

let states = [];
const initIt = 0;

function fileExists(url) {
    const req = new XMLHttpRequest();
    req.open("GET", url, false);
    console.log(`trying to get file from url ${url}`);
    req.send();
    return req.status === 200;
}

lastUpdatedDate = "2023-08-20";
let RecReading;
let modded = false;

function simpleAdventure(ans) {
    return 1203;
}

let HistHexcolour = ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
let HistName = ["N/A", "N/A", "N/A", "N/A"];
let HistEV = [0, 0, 0, 0];
let HistPV = [0, 0, 0, 0];
let HistPVP = [0, 0, 0, 0];

function histFunction() {
    if (modded === false) {
        // eslint-disable-next-line default-case
        switch (campaignTrail_temp.election_id) {
            case 21: // 2020
                HistHexcolour = ["#0000FF", "#FF0000", "#FFFF00", "#00C100"];
                HistName = [
                    " Joe Biden",
                    " Donald Trump",
                    " Jo Jorgensen",
                    " Howie Hawkins",
                ];
                HistEV = [306, 232, 0, 0];
                HistPV = ["81,268,924", "74,216,154", "1,865,724", "405,035"];
                HistPVP = ["51.3%", "46.9%", "1.2%", "0.4%"];
                break;
            case 20: // 2016
            case 16: // 2016a
                HistHexcolour = ["#FF0000", "#0000FF", "#FFFF00", "#00C100"];
                HistName = [
                    " Donald Trump",
                    " Hillary Clinton",
                    " Gary Johnson",
                    " Jill Stein",
                ];
                HistEV = [306, 232, 0, 0];
                HistPV = ["62,984,828", "65,853,514", "4,489,341", "405,035"];
                HistPVP = ["46.1%", "48.2%", "3.3%", "1.1%"];
                break;
            case 3: // 2012
                HistHexcolour = ["#0000FF", "#FF0000", "#FFFF00", "#00C100"];
                HistName = [
                    " Barack Obama",
                    " Mitt Romney",
                    " Gary Johnson",
                    " Jill Stein",
                ];
                HistEV = [332, 206, 0, 0];
                HistPV = ["65,915,795", "60,933,504", "1,275,971", "469,627"];
                HistPVP = ["51.1%", "47.2%", "1.0%", "0.4%"];
                break;
            case 9: // 2000
                HistHexcolour = ["#FF0000", "#0000FF", "#00C100", "#FFFF00"];
                HistName = [" George W. Bush", " Al Gore", " Ralph Nader", " Pat Buchanan"];
                HistEV = [271, 267, 0, 0];
                HistPV = ["50,456,002", "50,999,897", "2,882,955", "448,895"];
                HistPVP = ["47.9%", "48.4%", "2.7%", "0.4%"];
                break;
            case 15: // 1988
                HistHexcolour = ["#FF0000", "#0000FF", "#FFFF00", "#00C100"];
                HistName = [
                    " George Bush",
                    " Michael Dukakis",
                    " Ron Paul",
                    " Lenora Fulani",
                ];
                HistEV = [426, 112, 0, 0];
                HistPV = ["48,886,597", "41,809,476", "431,750", "217,221"];
                HistPVP = ["53.4%", "45.7%", "0.5%", "0.2%"];
                break;
            case 10: // 1976
                HistHexcolour = ["#0000FF", "#FF0000", "#00C100", "#FFFF00"];
                HistName = [
                    " Jimmy Carter",
                    " Gerald Ford",
                    " Eugene McCarthy",
                    " Roger MacBride",
                ];
                HistEV = [297, 241, 0, 0];
                HistPV = ["40,831,881", "39,148,634", "744,763", "172,557"];
                HistPVP = ["50.1", "48.0", "0.9%", "0.2%"];
                break;
            case 4: // 1968
                HistHexcolour = ["#FF0000", "#0000FF", "#FFFF00", "#FFFFFF"];
                HistName = [
                    " Richard Nixon",
                    " Hubert Humphrey",
                    " George Wallace",
                    " Other",
                ];
                HistEV = [302, 191, 45, 0];
                HistPV = ["31,783,783", "31,271,839", "9,901,118", "243,259"];
                HistPVP = ["43.4%", "42.7%", "13.5%", "0.3%"];
                break;
            case 69: // 1964
                HistHexcolour = ["#0000FF", "#FF0000", "#FFFF00", "#00C100"];
                HistName = [
                    " Lyndon B. Johnson",
                    " Barry Goldwater",
                    " Unpledged electors",
                    " Eric Hass",
                ];
                HistEV = [486, 52, 0, 0];
                HistPV = ["43,129,040", "27,175,754", "210,732", "45,189"];
                HistPVP = ["61.1%", "38.5%", "0.3%", ">0.1%"];
                break;
            case 11: // 1960
                HistHexcolour = ["#0000FF", "#FF0000", "#FFFF00", "#FFFFFF"];
                HistName = [
                    " John Kennedy",
                    " Richard Nixon",
                    " Harry Byrd",
                    " Unpledged",
                ];
                HistEV = [303, 219, 15, 0];
                HistPV = ["34,220,984", "34,108,157", "0", "286,359"];
                HistPVP = ["49.7%", "49.5%", "0", "0.4%"];
                break;
            case 12: // 1948
                HistHexcolour = ["#0000FF", "#FF0000", "#FFFF00", "#00C100"];
                HistName = [
                    " Harry Truman",
                    " Thomas Dewey",
                    " Strom Thurmond",
                    " Henry Wallace",
                ];
                HistEV = [303, 189, 39, 0];
                HistPV = ["24,179,347", "21,991,292", "1,175,930", "1,157,328"];
                HistPVP = ["49.6%", "45.1%", "2.4%", "2.4%"];
                break;
            case 14: // 1916
                HistHexcolour = ["#0000FF", "#FF0000", "#00C100", "#FFFF00"];
                HistName = [
                    " Woodrow Wilson",
                    " Charles Evans Hughes",
                    " Allan Benson",
                    " James Hanly",
                ];
                HistEV = [277, 254, 0, 0];
                HistPV = ["9,126,868", "8,548,728", "590,524", "221,302"];
                HistPVP = ["49.2%", "46.1%", "3.2%", "1.2%"];
                break;
            case 5: // 1896
                HistHexcolour = ["#FF0000", "#0000FF", "#FFFF00", "#FF00FF"];
                HistName = [
                    " William McKinley",
                    " William Jennings Bryan",
                    " John Palmer",
                    " Joshua Levering",
                ];
                HistEV = [271, 176, 0, 0];
                HistPV = ["7,111,607", "6,509,052", "134,645", "131,312"];
                HistPVP = ["51.0%", "46.7%", "1.0%", "0.9%"];
                break;
            case 8: // 1860
                HistHexcolour = ["#FF0000", "#FFFF00", "#00C100", "#0000FF"];
                HistName = [
                    " Abraham Lincoln",
                    " John C. Breckinridge",
                    " John Bell",
                    " Stephen Douglas",
                ];
                HistEV = [180, 72, 39, 12];
                HistPV = ["1,865,908", "848,019", "590,901", "1,380,202"];
                HistPVP = ["39.8%", "18.1%", "12.6%", "29.5%"];
                break;
            case 13: // 1844
                HistHexcolour = ["#0000FF", "#F0C862", "#FFFF00"];
                HistName = [
                    " James K. Polk",
                    " Henry Clay",
                    " James Birney",
                ];
                HistEV = [170, 105, 0];
                HistPV = ["1,339,494", "1,300,004", "62,103"];
                HistPVP = ["49.5%", "48.1%", "2.3%"];
                break;
        }
    }
}

function cyoAdventure(question) {
    const latestAnswer = campaignTrail_temp.player_answers[
    campaignTrail_temp.player_answers.length - 1
        ];
    for (let i = 0; i < campaignTrail_temp.questions_json.length; i++) {
        if (campaignTrail_temp.questions_json[i].pk === question.pk) {
            for (let v = 0; v < campaignTrail_temp.questions_json.length; v++) {
                if (
                    campaignTrail_temp.questions_json[v].pk
                    === simpleAdventure(latestAnswer)
                ) {
                    campaignTrail_temp.questions_json[
                        campaignTrail_temp.question_number
                        ] = campaignTrail_temp.questions_json[v];
                    break;
                }
            }
            break;
        }
    }
}

campaignTrail_temp.margin_format = window.localStorage.getItem("margin_form") ?? "#fff";

function encode(str) {
    const revArray = [];
    const length = str.length - 1;

    for (let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }

    return revArray.join("");
}

function gradient(interval, min, max) {
    if (interval < min) return min;
    if (interval > max) return max;
    return interval;
}

function csrfToken() {
    return (function (e) {
        let t = null;
        if (document.cookie && document.cookie != "") {
            for (let i = document.cookie.split(";"), a = 0; a < i.length; a++) {
                const s = jQuery.trim(i[a]);
                if (s.substring(0, e.length + 1) == `${e}=`) {
                    t = decodeURIComponent(s.substring(e.length + 1));
                    break;
                }
            }
        }
        return t;
    }("csrftoken"));
}

let slrr = "";
let rrr = "";
let starting_mult = 0;
const encrypted = Math.round(Math.random() * 100);
const t = "";
let nnn = "";

function switchPV() {
    // switchingEst, rrr, _, pvswitcher
    swE = document.getElementById("switchingEst");
    if (swE.innerHTML == rrr) {
        swE.innerHTML = slrr;
        pvswitcher.innerText = "PV Estimate";
    } else {
        swE.innerHTML = rrr;
        pvswitcher.innerText = "Switch to State Estimate";
    }
    document.getElementById("ev_est").style.display = "";
}

function evest() {
    document.getElementById("ev_est").style.display = "none";
    swE = document.getElementById("switchingEst");
    swE.innerHTML = nnn;
}

function copy(mainObject) {
    const objectCopy = {}; // objectCopy will store a copy of the mainObject
    let key;
    for (key in mainObject) {
        objectCopy[key] = mainObject[key]; // copies each property to the objectCopy object
    }
    return objectCopy;
}

i = 1;
moddercheckeror = false;
code222 = [];
kill = false;
let important_info = "";

// getResults is a way to get results for an election without using custom endings
// Mainly for backporting achivements to old mods
getResults = function (out, totv, aa, quickstats) {
    // To override
};

function endingPicker(out, totv, aa, quickstats) {
    // out = "win", "loss", or "tie" for your candidate
    // totv = total votes in entire election
    // aa = all final overall results data
    // quickstat = relevant data on candidate performance (format: your candidate's electoral vote count, your candidate's popular vote share, your candidate's raw vote total)

    if (important_info.indexOf("404") > -1) {
        important_info = "return false";
    }

    if (important_info != "") {
        a = new Function("out", "totv", "aa", "quickstats", important_info)(
            out,
            totv,
            aa,
            quickstats,
        );
        return a;
    }

    return "ERROR";
}

function modSelectChange() {
    if ($("#modSelect")[0].value === "other") {
        $("#customMenu")[0].style.display = "block";
    } else {
        $("#customMenu")[0].style.display = "none";
    }
}

function download(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], {
        type: contentType,
    });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function exportResults() {
    const results = {
        election_id: campaignTrail_temp.election_id,
        player_candidate: campaignTrail_temp.candidate_id,
        results: campaignTrail_temp.final_state_results.map((stateResult) => {
            // Get state abbreviation
            const stateAbbreviation = stateResult.abbr;

            // Total votes in the state for percentage calculation
            const totalPopularVotes = stateResult.result.reduce( // Add up all popular votes
                (total, candidateResult) => total + (candidateResult.votes || 0),
                0,
            );

            return {
                state: stateAbbreviation,
                results: stateResult.result.map((candidateResult) => {
                    const candidate = campaignTrail_temp.candidate_json.find(
                        (cand) => cand.pk === candidateResult.candidate,
                    );

                    return {
                        candidate_name: `${candidate.fields.first_name} ${candidate.fields.last_name}`,
                        electoral_votes: candidateResult.electoral_votes,
                        popular_votes: candidateResult.votes || 0,
                        vote_percentage: totalPopularVotes
                            ? ((candidateResult.votes || 0) / totalPopularVotes) * 100
                            : 0, // Avoid NaN if no votes exist
                    };
                }),
            };
        }),
    };

    // Convert the data to JSON and download as a file
    const fileContent = JSON.stringify(results, null, 2);
    const fileName = `election_results_${campaignTrail_temp.election_id}.json`;

    const element = document.createElement("a");
    const fileBlob = new Blob([fileContent], { type: "application/json" });
    element.href = URL.createObjectURL(fileBlob);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

let diff_mod = false;

$("#submitMod").click(() => {
    document.getElementById("featured-mods-area").style.display = "none";
    if ($("#importfile")[0].value != "") {
        const content = document.querySelector(".content");
        const [file] = document.querySelector("input[type=file]").files;
        const reader = new FileReader();

        reader.onload = function (fle) {
            importedtext = fle.target.result;
            importedtext = encode(importedtext);
            importedtext = atob(importedtext);
            campaignTrail_temp.dagakotowaru = importedtext;
        };
        reader.readAsText(file);
    }
    if ($("#modSelect")[0].value == "other") {
        important_info = $("#codeset3")[0].value;
        if (important_info != "") {
            campaignTrail_temp.multiple_endings = true;
        }
        if (!moddercheckeror) {
            e = campaignTrail_temp;
            eval($("#codeset1")[0].value);
            moddercheckeror = true;
        }
    } else {
        evalFromUrl(`../static/mods/${$("#modSelect")[0].value}_init.html`);
        diff_mod = true;
    }
    $("#modloaddiv")[0].style.display = "none";
    $("#modLoadReveal")[0].style.display = "none";
    modded = true;
});

function randomNormal() {
    let x;
    let y;
    let r2;
    do {
        x = 2 * Math.random() - 1;
        y = 2 * Math.random() - 1;
        r2 = x ** 2 + y ** 2;
    } while (r2 >= 1 || r2 === 0);
    return x * Math.sqrt((-2 * Math.log(r2)) / r2);
}

function sortByProp(arr, prop) {
    return arr.sort((e, i) => {
        const a = e[prop];
        const s = i[prop];
        if (a < s) return -1;
        if (a > s) return 1;
        return 0;
    });
}

function divideElectoralVotesProp(e, t) {
    const i = e.map((x) => Math.floor(x * t));
    i[0] += t - i.reduce((a, b) => a + b, 0);
    return i;
}

const shining_menu = (polling) => {
    const game_winArr = Array.from($("#game_window")[0].children);

    const inflation_factor = 1.04 ** (
        2020 - e.election_json.find((f) => f.pk === e.election_id).fields.year
    );

    const uninflatedBalance = e.shining_data.balance / inflation_factor;
    const uninflatedPrev = e.shining_data.prev_balance / inflation_factor;
    const change = uninflatedBalance - uninflatedPrev;

    let projected_change = change;

    const update_projection = () => {
        const our_info = campaignTrail_temp.shining_info.find(
            (f) => f.pk === e.election_id && f.candidate === e.candidate_id,
        );

        projected_change = 0;
        projected_change
            += 5000000
            * e.shining_data.times.fundraising_time
            * (our_info ? our_info.fundraising_effect : 1);
        projected_change -= 500000;

        our_info.lobby.forEach((f) => {
            const x = f.opinion;
            const r = 0.097;
            const x0 = 65.3;
            const y = f.fund_base / (1 + Math.exp(-r * (x - x0)));
            projected_change += y;
        });

        e.shining_data.ad_spending.forEach((f) => {
            projected_change -= f.amount;
        });

        projected_change /= inflation_factor;

        $("#projected_change").html(
            `<b>Estimated change for next turn:</b> <span style='${projected_change > 0 ? "color:green" : projected_change == 0 ? "color:yellow" : "color:red"};'>${projected_change < 0 ? "-$" : "$"}${Math.abs(Math.floor(projected_change)).toLocaleString()}</span>`,
        );
    };

    const DEBT_STRING = uninflatedBalance < 0
        ? "<p style='color:red;font-weight:bolder;'>Campaign currently in debt. Effectiveness will suffer.</p>"
        : "";

    let a_states = "";
    for (const i in e.states_json) {
        a_states += `<option value='${e.states_json[i].pk}'>${e.states_json[i].fields.name}</option>\n`;
    }

    const adSpendTable = `
            <table id="ad_spend_table" style='text-align:center;width: 60%; margin-top: .1em; margin-left: auto; margin-right: auto; background-color: #F9F9F9;color:black;'>
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Amount per Turn</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Table rows will be added dynamically -->
                </tbody>
            </table>
        `;

    const staffTable = `
            <table id="staff_table" style='text-align:center;width: 60%; margin-top: .1em; margin-left: auto; margin-right: auto; background-color: #F9F9F9;color:black;'>
                <thead>
                    <tr>
                        <th>Staff</th>
                        <th style="width: 250px;">Description</th>
                        <th>Cost (one time)</th>
                        <th>Hired?</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Table rows will be added dynamically -->
                </tbody>
            </table>
        `;

    const lobbyTable = `
            <table id="pac_table" style='text-align:center;width: 60%; margin-top: .1em; margin-left: auto; margin-right: auto; background-color: #F9F9F9;color:black;'>
                <thead>
                    <tr>
                        <th style="width: 200px;">Organisation</th>
                        <th style="width: 150px;">Description</th>
                        <th>Relationship</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Table rows will be added dynamically -->
                </tbody>
            </table>
        `;

    const z = `

        <div class="inner_window_front" id="shining_menu_header" style="height: 50px; background-color:#2d2d2d">
            <h1 style='position:absolute;top:50%;left:50%;transform: translate(-50%,-50%);font-family: Arial, "Helvetica Neue", Helvetica, sans-serif; text-align: center; font-size: 3em; line-height: normal; font-style: italic; color: white; margin: 0;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;'>
                State of the Campaign
            </h1>
        </div>
        <div class="shining_tab" style='position: absolute;bottom: 65px;left:50%;transform:translateX(-50%)'>
            <button class="tablinks" onclick="openTab(event, 'funds')">Funds</button>
            <button class="tablinks" onclick="openTab(event, 'campaign_time')">Campaign Time</button>
            <button class="tablinks" onclick="openTab(event, 'ad_campaign')">Ad Campaign</button>
            <button class="tablinks" onclick="openTab(event, 'staff')">Staff</button>
            <button class="tablinks" onclick="openTab(event, 'lobbies')">Lobbies</button>
        </div>
        <div class="inner_window_front" id="shining_menu" style="height: 260px; overflow-y: auto; background-color:#2d2d2d; color:white;">
            <div id="funds" class="tabcontent">
                <h2>Funds</h2>
                <p><b>Current balance:</b> <span id='shining_balance'>$${Math.floor(uninflatedBalance).toLocaleString()}</span></p>
                <p><b>Change in balance from previous turn:</b> <span style='${change > 0 ? "color:green" : change == 0 ? "color:yellow" : "color:red"};'>${change < 0 ? "-$" : "$"}${Math.abs(Math.floor(change)).toLocaleString()}</span></p>
                <p id='projected_change'><b>Estimated change for next turn:</b> <span style='${projected_change > 0 ? "color:green" : projected_change == 0 ? "color:yellow" : "color:red"};'>${projected_change < 0 ? "-$" : "$"}${Math.abs(Math.floor(projected_change)).toLocaleString()}</span></p>
                ${DEBT_STRING}
            </div>
            <div id="campaign_time" class="tabcontent">
                <h2>Campaign Time</h2>
                <div class="time_slider_group">
                    <div class="time_slider">
                        <label for="campaign_time_physical">Physically Campaigning:</label>
                        <input type="range" id="campaign_time_physical" min="0" max="1" step="0.01" value="0.33">
                    </div>
                    <div class="time_slider">
                        <label for="campaign_time_fundraising">Fundraising:</label>
                        <input type="range" id="campaign_time_fundraising" min="0" max="1" step="0.01" value="0.33">
                    </div>
                    <div class="time_slider">
                        <label for="campaign_time_media">Media Engagement:</label>
                        <input type="range" id="campaign_time_media" min="0" max="1" step="0.01" value="0.34">
                    </div>
                </div>
            </div>
            <div id="ad_campaign" class="tabcontent">
                <h2>Ad Campaign</h2>
                <p>Select a state to add ad spending for it:</p>
                <select id='shining_ad_state_sel'>${a_states}</select>
                <p>Enter ad spending amount:</p>
                <input id="ad_spending_amount" placeholder="Amount">
                <input type="range" id="ad_spending_slider" min="0" step="1">
                <button id="add_ad_spending">Add Spending</button>
                <h2>Current Ad Spends</h2>
                <em>Note: will <b>all</b> automatically be cancelled in the event of your campaign running a debt.</em>
                <p>
                <center> <!-- This tag can be explained by laziness -->
                ${adSpendTable}
                </center>
                </p>
            </div>
            <div id="staff" class="tabcontent">
                <h2>Staff</h2>
                <center> <!-- This tag can be explained by laziness -->
                ${staffTable}
                </center>
            </div>
            <div id="lobbies" class="tabcontent">
                <h2>Lobbies</h2>
                <em>Align your answers with an organisation's values in order to have them contribute to fundraising.</em>
                <p>
                <center> <!-- This tag can be explained by laziness -->
                ${lobbyTable}
                </center>
                </p>
            </div>
        </div>
            <button id="shining_back" style="position: relative; bottom: -13px; left: -380px; width: 150px; height: 80px; font-size: 40px; padding-top: 5px; padding-left: 8px;">
                <b>BACK</b>
            </button>

            <style>
                .time_slider_group {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .time_slider {
                    display: flex;
                    align-items: center;
                    margin-bottom: 8px;
                }

                .time_slider label {
                    margin-right: 10px;
                    width: 180px; /* Adjust this width as needed */
                }
            </style>
            `;
    for (i in game_winArr) {
        if (
            game_winArr[i].getAttribute("id") != "main_content_area"
            && game_winArr[i].getAttribute("class") != "game_header"
        ) {
            game_winArr[i].remove();
        }
    }

    const game_window = $("#game_window")[0];
    if ($("#main_content_area")[0]) $("#main_content_area")[0].style.display = "none";

    const inner_window_question = document.createElement("div");
    // inner_window_question.setAttribute("class", "inner_window_question");
    inner_window_question.innerHTML = z;
    game_window.appendChild(inner_window_question);

    $("#shining_back").click(() => {
        questionHTML(polling);
    });

    $("#add_ad_spending").click(() => {
        let currval = $("#ad_spending_amount").val();
        currval = currval.replaceAll(",", "");
        currval = Math.abs(Number(currval));
        currval = isNaN(currval) ? 0 : Math.floor(currval);
        currval = Math.min(e.shining_data.balance / inflation_factor, currval);
        currval = Math.max(0, currval);

        const selectedStatePk = Number($("#shining_ad_state_sel").val());
        const adSpendingAmount = currval;

        const currentState = e.shining_data.ad_spending.find(
            (f) => f.state == selectedStatePk,
        );

        if (currentState) {
            e.shining_data.balance += currentState.amount;
            currentState.amount = adSpendingAmount * inflation_factor;
        } else {
            e.shining_data.ad_spending.push({
                state: selectedStatePk,
                amount: adSpendingAmount * inflation_factor,
            });
        }

        e.shining_data.balance -= adSpendingAmount * inflation_factor;

        update_projection();

        $("#ad_spending_slider").val(0);
        $("#ad_spending_amount").val(0);
        updateSliderMax();
        update_projection();

        const stateName = $("#shining_ad_state_sel option:selected").text();
        update_ad_table();
    });

    const updateSliderMax = () => {
        const currentBalance = parseFloat(
            e.shining_data.balance / inflation_factor,
        );
        const slider = $("#ad_spending_slider");
        slider.attr("max", currentBalance);
        slider.val(0);
        $("#shining_balance").html(
            `$${Math.floor(e.shining_data.balance / inflation_factor).toLocaleString()}`,
        );
    };

    const update_staff_table = () => {
        const tableBody = $("#staff_table tbody");
        tableBody.html("");

        const our_info = campaignTrail_temp.shining_info.find(
            (f) => f.pk === e.election_id && f.candidate === e.candidate_id,
        );

        for (const i in our_info.staff) {
            const targ = our_info.staff[i];
            const hire_str = targ.hired == true
                ? `<em>Hired.</em>`
                : `<button class="hire_button" data-pk="${targ.pk}" style='color:green'>Hire</button>`;
            const newRow = `
                <tr>
                    <td><h4>${targ.name}</h4><img style='width:100px' src='${targ.image}'></img></td>
                    <td>${targ.description}</td>
                    <td>$${Math.floor(targ.cost / inflation_factor).toLocaleString()}</td>
                    <td>${hire_str}</td>
                </tr>
                `;
            tableBody.append(newRow);
            $(`button.hire_button[data-pk="${targ.pk}"]`).click(() => {
                if (e.shining_data.balance < 0) {
                    return;
                }

                e.shining_data.balance -= targ.cost;

                our_info.staff[i].hired = true;
                our_info.staff[i].execute();

                updateSliderMax();
                update_projection();
                update_staff_table();
            });
        }
    };

    const update_pac_table = () => {
        const tableBody = $("#pac_table tbody");
        tableBody.html("");

        const our_info = campaignTrail_temp.shining_info.find(
            (f) => f.pk === e.election_id && f.candidate === e.candidate_id,
        );

        for (const i in our_info.lobby) {
            const targ = our_info.lobby[i];
            const newRow = `
                <tr>
                    <td><h4>${targ.name}</h4><img style='width:100px' src='${targ.image}'></img></td>
                    <td>${targ.description}</td>
                    <td>Opinion: ${Math.floor(targ.opinion)}<br>Max Bonus: $${Math.floor(targ.fund_base / inflation_factor).toLocaleString()}</td>
                </tr>
                `;
            tableBody.append(newRow);
        }
    };

    const update_ad_table = () => {
        const tableBody = $("#ad_spend_table tbody");
        tableBody.html("");

        for (const i in e.shining_data.ad_spending) {
            const targ = e.shining_data.ad_spending[i];
            const newRow = `
                <tr>
                    <td>${e.states_json.find((f) => f.pk === targ.state).fields.name}</td>
                    <td>$${Math.floor(targ.amount / inflation_factor).toLocaleString()}</td>
                    <td><button class="remove_ad_spend" data-state-pk="${targ.state}" style='color:red'>Remove</button></td>
                </tr>
                `;
            tableBody.append(newRow);
            $(`button.remove_ad_spend[data-state-pk="${targ.state}"]`).click(() => {
                e.shining_data.balance += targ.amount;

                e.shining_data.ad_spending.splice(i, 1);

                updateSliderMax();
                update_ad_table();
                update_projection();
            });
        }
    };

    $("#ad_spending_slider").change(() => {
        $("#ad_spending_amount").val($("#ad_spending_slider").val());
        $("#ad_spending_amount").val(Number($("#ad_spending_amount").val()));
    });

    $("#ad_spending_amount").change(() => {
        let currval = $("#ad_spending_amount").val();
        currval = currval.replaceAll(",", "");
        currval = Math.abs(Number(currval));
        currval = isNaN(currval) ? 0 : Math.floor(currval);
        currval = Math.min(e.shining_data.balance / inflation_factor, currval);
        currval = Math.max(0, currval);

        $("#ad_spending_amount").val(currval);
        $("#ad_spending_slider").val(currval);
    });

    function updateSliders(physicalTime, fundraisingTime, mediaTime) {
        $("#campaign_time_physical").val(physicalTime);
        $("#campaign_time_fundraising").val(fundraisingTime);
        $("#campaign_time_media").val(mediaTime);

        e.shining_data.times.physical_time = physicalTime;
        e.shining_data.times.fundraising_time = fundraisingTime;
        e.shining_data.times.media_time = mediaTime;

        update_projection();
    }

    $(
        "#campaign_time_physical, #campaign_time_fundraising, #campaign_time_media",
    ).on("input", () => {
        const physicalTime = parseFloat($("#campaign_time_physical").val());
        const fundraisingTime = parseFloat($("#campaign_time_fundraising").val());
        const mediaTime = parseFloat($("#campaign_time_media").val());

        const total = physicalTime + fundraisingTime + mediaTime;

        // ensure the total time adds up to 1
        if (total !== 0) {
            const adjustment = 1 / total;
            updateSliders(
                physicalTime * adjustment,
                fundraisingTime * adjustment,
                mediaTime * adjustment,
            );
        } else {
            updateSliders(0.33, 0.33, 0.34);
        }
    });

    updateSliders(
        e.shining_data.times.physical_time,
        e.shining_data.times.fundraising_time,
        e.shining_data.times.media_time,
    );

    updateSliderMax();
    $("#ad_spending_slider").val(0);
    $("#ad_spending_amount").val(0);
    update_ad_table();
    update_staff_table();
    update_pac_table();
    update_projection();

    openTab(null, "funds");
};

const shining_cal = (polling) => {
    // run at the start of every turn

    const our_info = campaignTrail_temp.shining_info.find(
        (f) => f.pk === e.election_id && f.candidate === e.candidate_id,
    );

    // opponent visit logic
    if (
        (e.question_number + 1) % 2 == 0
        && e.election_json.find((f) => f.pk === e.election_id).fields.has_visits == 1
    ) {
        const active_opps = e.opponents_list.filter(
            (f) => e.candidate_json.find((_f) => _f.pk === f).fields.is_active === 1,
        );

        // calculate closest state for each oppo
        const closests = {};
        active_opps.forEach((opp) => {
            let closest = polling[0];
            polling.forEach((state) => {
                if (
                    state.result[0].candidate === opp
                    || state.result[1].candidate === opp
                ) {
                    if (
                        Math.abs(state.result[0].percent - state.result[1].percent)
                        < Math.abs(closest.result[0].percent - closest.result[1].percent)
                    ) {
                        closest = state;
                    }
                }
            });
            closests[opp] = closest;
        });

        e.opponent_visits.push({});
        active_opps.forEach((f) => {
            e.opponent_visits[e.opponent_visits.length - 1][f] = closests[f].state;
            const target = e.candidate_state_multiplier_json.find(
                (_f) => _f.fields.state === closests[f].state && _f.fields.candidate === f,
            );

            target.fields.state_multiplier
                += 0.001 * (our_info ? our_info.opponent_visit_effect : 1);
        });
    }

    // update PAC opinions

    our_info.lobby.forEach((f) => {
        const relevant = e.answer_score_issue_json.filter(
            (_f) => _f.fields.issue === f.issue_tie
                && _f.fields.answer === e.player_answers[e.player_answers.length - 1],
        );
        for (const i in relevant) {
            const op_raw = f.issue_link(
                relevant[i].fields.issue_score * relevant[i].fields.issue_importance,
            );
            const op_final = op_raw * 10;
            f.opinion += op_final;
            f.opinion = Math.min(100, f.opinion);
        }
    });

    // update previous balance before we go into the current balance
    e.shining_data.prev_balance = e.shining_data.balance;

    // deal with time spent

    e.shining_data.balance
        += 5000000
        * e.shining_data.times.fundraising_time
        * (our_info ? our_info.fundraising_effect : 1); // base fundraising value
    e.shining_data.balance -= 500000 - 100000 * randomNormal(e.candidate_id); // base upkeep cost with normalised RNG element

    // add to balance based on PAC opinions

    our_info.lobby.forEach((f) => {
        const x = f.opinion;
        const r = 0.097;
        const x0 = 65.3;
        const y = f.fund_base / (1 + Math.exp(-r * (x - x0)));
        e.shining_data.balance += y;
    });

    // if >0.5 of the player's time is not spent on media, this will hurt them
    let media_boost = (e.shining_data.times.media_time - 0.5) * 0.0025;
    media_boost = e.shining_data.balance < 0 ? media_boost - 0.0025 : media_boost; // debt penalty
    e.candidate_state_multiplier_json.forEach((f) => {
        if (f.fields.candidate === e.candidate_id) {
            f.fields.state_multiplier += media_boost;
        }
    });

    // visit multiplier; same deal as above. will halve your visit effects at 0 and double at 1.
    e.shining_data.visit_multiplier
        += (e.shining_data.times.physical_time * 2 - 1) / 50;
    e.shining_data.visit_multiplier = Math.max(
        0,
        e.shining_data.visit_multiplier,
    );
    e.shining_data.visit_multiplier = Math.min(
        2,
        e.shining_data.visit_multiplier,
    );

    // ads
    e.shining_data.ad_spending.forEach((f) => {
        const target = e.candidate_state_multiplier_json.find(
            (_f) => f.state === _f.fields.state && _f.fields.candidate === e.candidate_id,
        );
        const currMult = target.fields.state_multiplier;
        const boost = (currMult * f.amount) / 750000000;
        console.log(target.fields.state_multiplier);
        target.fields.state_multiplier
            += boost * (our_info ? our_info.ad_effect : 1);
        console.log(target.fields.state_multiplier);

        e.shining_data.balance -= f.amount;
    });

    if (e.shining_data.balance < 0) {
        e.shining_data.ad_spending = [];
    }
};

function handleFinalResults(t) {
    let i = 0;
    e.final_overall_results.forEach((f) => {
        const g = f;
        g.popular_votes = 0;
        g.electoral_votes = 0;
    });
    e.final_state_results.forEach((f) => {
        if (f.result_time <= t) {
            i++;
            f.result.forEach((g) => {
                e.final_overall_results.forEach((h) => {
                    if (h.candidate === g.candidate) {
                        const i = h;
                        i.popular_votes += g.votes;
                        i.electoral_votes += g.electoral_votes;
                    }
                });
            });
        }
    });
    e.final_overall_results = [...e.final_overall_results].sort((a, b) => {
        if (b.electoral_votes !== a.electoral_votes) {
            return b.electoral_votes - a.electoral_votes;
        }
        return b.popular_votes - a.popular_votes;
    });
    return i;
}

function onAnswerSelectButtonClicked() {
    const selectedAnswerPk = $("input:radio[name=game_answers]:checked").val();
    debugConsole(
        "answer button clicked, skip question? ",
        campaignTrail_temp.skippingQuestion,
        "selected answer",
        selectedAnswerPk,
    );
    if (!selectedAnswerPk && !campaignTrail_temp.skippingQuestion) {
        // Show "you must select answer"
        advisorFeedback(e.election_id);
    } else {
        // Apply effects
        answerEffects(selectedAnswerPk);
    }
}

function questionHTML() {
    function shuffle(arr) { // Fisher-Yates
        for (let i = arr.length - 1; i >= 1; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    const ansArr = shuffle(
        e.answers_json
            .map((f, idx) => ({ f, idx }))
            .filter(({ f }) => f.fields.question === e.questions_json[e.question_number].pk)
            .slice(0, e.answer_count)
            .map(({ idx }) => ({
                key: idx,
            })),
    );

    const gameWindow = document.querySelector("#game_window");
    const s = ansArr.map((f, idx) => `
            <input type="radio" name="game_answers" class="game_answers" id="game_answers[${idx}]" value = "${e.answers_json[f.key].pk}"/>
            <label for="game_answers[${idx}]">${substitutePlaceholders(e.answers_json[f.key].fields.description)}</label><br>
        `).join("").trim();
    const l = `
        <img id="candidate_pic" src="${e.candidate_image_url}">
        <img id="running_mate_pic" src="${e.running_mate_image_url}">
        <div class="inner_window_sign_display">
            <div id="progress_bar">
                <h3>Question ${e.question_number + 1} of ${e.global_parameter_json[0].fields.question_count}</h3>
            </div>
            <div id="campaign_sign">
                <p>${e.candidate_last_name}</p>
                <p>${e.running_mate_last_name}</p>
            </div>
        </div>
    `.trim();
    const shining_button = Number(e.game_type_id) === 3
        ? `
            <button id="shining_menu_button" class="answer_select_button" style='color:navy;font-weight:bolder;margin-left:1.5em;'>The Campaign</button>
        `
        : "";
    const z = `
        <div class="inner_inner_window">
            <h3>${substitutePlaceholders(e.questions_json[e.question_number].fields.description)}</h3>
            <div id="question_form">
                <form name="question">${s}</form>
            </div>
        </div>
        <p>
            <button id="answer_select_button" class="answer_select_button">CONTINUE</button>
            <button id="view_electoral_map">Latest Polls/Electoral Map</button>
            ${shining_button}
        </p>
        `;
    gameWindow.querySelectorAll(":scope > *:not(#main_content_area):not(.game_header)")
        .forEach((el) => el.remove());
    const mainContentArea = document.querySelector("#main_content_area");
    if (mainContentArea) mainContentArea.style.display = "none";

    const inner_window_question = document.createElement("div");
    inner_window_question.setAttribute("class", "inner_window_question");
    inner_window_question.innerHTML = z;
    gameWindow.appendChild(inner_window_question);

    const ports = document.createElement("g");
    ports.innerHTML = l;
    gameWindow.appendChild(ports);

    // $("#game_window").html(l)
}

function openMap(_e) {
    // startTime = performance.now();
    const gameWindow = document.querySelector("#game_window");
    const mainContentArea = document.querySelector("#main_content_area");
    const advisorButtonText = (e.answer_feedback_flg === 1)
        ? "Disable advisor feedback"
        : "Enable advisor feedback";
    if (mainContentArea) {
        gameWindow.querySelectorAll(":scope > *:not(#main_content_area):not(.game_header)")
            .forEach((el) => el.remove());

        const footer_html = `
            <button id="resume_questions_button">Back to the game</button>
            <button id="margin_switcher">Switch margin colouring gradient</button>
            <button id="AdvisorButton">${advisorButtonText}</button>
        </div>`.trim();
        const ftH = document.createElement("div");
        ftH.id = "map_footer";
        ftH.innerHTML = footer_html;
        gameWindow.appendChild(ftH);
        $("#main_content_area").show();
    } else {
        $("#game_window").html(`
            <div class="game_header">${corrr}</div>
            <div id="main_content_area">
                <div id="map_container"></div>
                <div id="menu_container">
                    <div id="overall_result_container">
                        <div id="overall_result">
                            <h3>ESTIMATED SUPPORT</h3>
                            <p>Click on a state to view more info.</p>
                        </div>
                    </div>
                    <div id="state_result_container">
                        <div id="state_info">
                            <h3>STATE SUMMARY</h3>
                            <p>Click/hover on a state to view more info.</p>
                            <p>Precise results will be available on election night.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="map_footer">
                <button id="resume_questions_button">Back to the game</button>
                <button id="margin_switcher">Switch margin colouring gradient</button>
                <button id="AdvisorButton">${advisorButtonText}</button>
            </div>`.trim());
        const t = rFunc(_e, 0);

        $("#map_container").usmap(t);
    }
}

function visitState(s, o, t) {
    setTimeout(() => mapCache(true), 0); // cache the correct map and prevent visit glitch
    e.player_visits.push(e.states_json[s].pk);
    o(t);
}

function formatNumbers(num) {
    if (typeof num !== "number") {
        num = Number(num);
        if (Number.isNaN(num)) return "";
    }
    return num.toLocaleString(e.numberFormat);
}

e.answer_count = 4;

function primaryResults(states) {
    const t = getSortedCands();
    const stateMap = new Map(states.map((s) => [s.pk, s]));

    const i = t
        .map((item) => {
            const { color } = item;
            return `<li><span style="color:${color}; background-color:${color}">--</span> ${item.last_name}: 0</li>`;
        })
        .join("");
    const s = e.election_json.find((f) => Number(f.pk) === Number(e.election_id));
    const n = s.fields.winning_electoral_vote_number;
    $("#game_window").html(`
        <div class="game_header">${corrr}</div>
        <div id="main_content_area">
            <div id="map_container"></div>
            <div id="menu_container">
                <div id="overall_result_container">
                    <div id="overall_result">
                        <h3>ELECTORAL VOTES</h3>
                        <ul>${i}</ul>
                        <p>0% complete
                            <br>
                            ${n} to win
                        </p>
                    </div>
                </div>
                <div id="state_result_container">
                    <div id="state_result">
                        <h3>STATE RESULTS</h3>
                        <p>Click on a state to view detailed results (once returns for that state arrive).</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="map_footer">
            <button id="final_result_button">Go back to questions</button>
        </div>
        <div class="overlay" id="election_night_overlay"></div>
        <div class="overlay_window" id="election_night_window">
            <div class="overlay_window_content" id="election_night_content">
                <h3>Advisor Feedback</h3>
                <img src="${s.fields.advisor_url}" width="208" height="128"/>
                <p>One of many election nights has arrived. Winning the delegates in these races will be vital to your primary victory.</p>
            </div>
            <div class="overlay_buttons" id="election_night_buttons">
                <button id="ok_button">OK</button>
                <br>
            </div>
        </div>`.trim());

    const stateColorArr = {};
    states.forEach((f) => {
        stateColorArr[f.fields.abbr] = {
            fill: campaignTrail_temp.global_parameter_json[0].fields.default_map_color_hex,
        };
    });

    const lTemp = {
        stateStyles: {
            fill: "transparent",
        },
        stateHoverStyles: {
            fill: "transparent",
        },
        stateSpecificStyles: stateColorArr,
        stateSpecificHoverStyles: stateColorArr,
    };
    $("#map_container").usmap(lTemp);
    const $okButton = $("#ok_button");
    $okButton.click(() => {
        $("#election_night_overlay, #election_night_window").remove();
    });
    $("#final_result_button").click(() => {
        clearTimeout(results_timeout);
        $("#map_footer").html("<i>Processing Results, wait one moment...</i>");
        // HELPFUL CODE HERE
        // campaignTrail_temp.question_number = 0
        // ee = A(return_type=2)
        // o(ee)
        e.question_number++;
        nextQuestion();
    });
    e.final_overall_results = e.final_state_results[0].result.map((f) => ({
        candidate: f.candidate,
        electoral_votes: 0,
        popular_votes: 0,
    }));
    e.final_state_results = e.final_state_results.map((f) => {
        const stObj = stateMap.get(Number(f.state)) ?? states.find((g) => g.pk === Number(f.state));
        if (!stObj) return f;

        return {
            ...f,
            result_time: marginTime(f.result, stObj.fields.poll_closing_time),
        };
    });

    $okButton.click(() => {
        results_timeout = setTimeout(() => {
            !(function t(i, a) {
                const s = [0, 0];
                for (var n = 0; n < e.final_overall_results.length; n++) {
                    e.final_overall_results[n].electoral_votes > s[0]
                    && (s[0] = e.final_overall_results[n].electoral_votes);
                }
                total_votes = 0;
                for (
                    iterator = 0;
                    iterator < e.final_overall_results.length;
                    iterator++
                ) {
                    total_votes += e.final_overall_results[iterator].popular_votes;
                }
                pop_vs = [];
                for (
                    iterator = 0;
                    iterator < e.final_overall_results.length;
                    iterator++
                ) {
                    if (
                        e.final_overall_results[iterator].popular_votes / total_votes
                        > 0
                    ) {
                        pop_vs.push(
                            e.final_overall_results[iterator].popular_votes / total_votes,
                        );
                    } else {
                        pop_vs.push(0);
                    }
                }
                var a = handleFinalResults(i);
                const _ = getSortedCands();
                let r = "";
                const o = "";
                for (var n = 0; n < _.length; n++) {
                    for (let d = 0; d < e.final_overall_results.length; d++) {
                        if (e.final_overall_results[d].candidate == _[n].candidate) {
                            var c = e.final_overall_results[d].electoral_votes;
                            const popvthing = (pop_vs[d] * 100).toFixed(1);
                        }
                    }
                    r
                        += `            <span style="color:${_[n].color
                    }; background-color: ${_[n].color
                    }">--</span> <b>${_[n].last_name
                    }</b> -  ${c
                    }<br>`;
                }
                const p = mapResultColor(i);
                let h = Math.floor((i / 480) * 100);
                const g = $("#state_result_container").html();
                $("#game_window").html("");
                $("#game_window").html(
                    `        <div class="game_header">            ${corrr
                    }        </div>        <div id="main_content_area">            <div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ELECTION TALLY</h3>                        <ul>${r
                    }</ul>                        <p>${h
                    }% complete</br>`
                    + `</div>                </div>                <div id="state_result_container">${g
                    }</div>            </div>        </div>        <div id="map_footer">        <button id="final_result_button">Go back to questions</button>        </div>`,
                );
                $("#map_container").usmap(p);
                $("#final_result_button").click(() => {
                    clearTimeout(results_timeout),
                        $("#map_footer").html(
                            "<i>Processing Results, wait one moment...</i>",
                        );
                    e.question_number++;
                    nextQuestion();
                });
                for (var n = 0; n < e.final_overall_results.length; n++) {
                    e.final_overall_results[n].electoral_votes > s[1]
                    && (s[1] = e.final_overall_results[n].electoral_votes);
                }
                if (s[0] < o && s[1] >= o) {
                    $("#overlay_result_button").click(() => {
                        clearTimeout(results_timeout),
                            $("#map_footer").html(
                                "<i>Processing Results, wait one moment...</i>",
                            );
                        e.question_number++;
                        nextQuestion();
                    });
                } else {
                    i >= 480 || a >= states.length
                        ? ((h = 100),
                            $("#overall_result").html(
                                `            <h3>ELECTION TALLY</h3>            <ul>${r
                                }</ul>            <p>${h
                                }% complete</br>${o
                                } to win</p>`,
                            ))
                        : (results_timeout = setTimeout(() => {
                            t(i, a);
                        }, 2e3));
                }
                i += 120;
            }(0, 0));
        }, 2e3);
    });
}

function primaryFunction(execute, breaks) {
    if (!execute) {
        return false;
    }

    // Get the data for the current question number
    const dat = e.primary_code[breaks.indexOf(e.question_number)];

    // Get the state for the current question
    const stateMap = dat.states;

    const stateMap2 = e.states_json.map((f) => f.pk);

    states = [];

    stateMap.forEach((f, it, arr) => {
        const correctState = stateMap2.indexOf(f);
        states.push(e.states_json[correctState]);
    });

    // Set the final state results to an array with one element (1)
    e.final_state_results = A(1);

    // Filter out those that aren't in the map
    e.final_state_results = e.final_state_results.filter((f) => stateMap.includes(f.state));

    // Use Array.slice() to create a new copy of the filtered array
    const filt = e.final_state_results.slice();

    if (e.primary_states == null) {
        e.primary_states = [];
    } else {
        e.primary_states = JSON.parse(e.primary_states);
    }

    // Add the items from the filtered list to the primary states array,
    // without adding any duplicates
    for (let i = 0; i < filt.length; i++) {
        e.primary_states.push(filt[i]);
    }
    e.primary_states = JSON.stringify(e.primary_states);

    // Call the primaryResults function and pass it the array of states
    primaryResults(states);
    return true;
}

function electionNight() {
    for (var t = getSortedCands(), i = "", a = 0; a < t.length; a++) {
        i
            += `            <li><span style="color:${t[a].color
        }; background-color: ${t[a].color
        }">--</span> ${t[a].last_name
        }:  0</li>`;
    }
    const s = e.election_json.find((f) => Number(f.pk) === Number(e.election_id));
    const n = s.fields.winning_electoral_vote_number;
    $("#game_window").html(
        `        <div class="game_header">            ${corrr
        }        </div>        <div id="main_content_area">            <div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ELECTORAL VOTES</h3>                        <ul>${i
        }</ul>                        <p>0% complete</br>${n
        } to win</p>                    </div>                </div>                <div id="state_result_container">                    <div id="state_result">                        <h3>STATE RESULTS</h3>                        <p>Click on a state to view detailed results (once returns for that state arrive).</p>                    </div>                </div>            </div>        </div>        <div id="map_footer">        <button id="final_result_button">Go to Final Results</button>        </div>        <div class="overlay" id="election_night_overlay"></div>        <div class="overlay_window" id="election_night_window">            <div class="overlay_window_content" id="election_night_content">            <h3>Advisor Feedback</h3>            <img src="${s.fields.advisor_url
        }" width="208" height="128"/>            <p>${e.ElectionPopup}</p>            </div>            <div class="overlay_buttons" id="election_night_buttons">            <button id="ok_button">OK</button><br>            </div>        </div>`,
    );
    const lTemp = (function () {
        for (var t = {}, i = 0; i < e.states_json.length; i++) {
            t[e.states_json[i].fields.abbr] = {
                fill: e.global_parameter_json[0].fields.default_map_color_hex,
            };
        }
        return {
            stateStyles: {
                fill: "transparent",
            },
            stateHoverStyles: {
                fill: "transparent",
            },
            stateSpecificStyles: t,
            stateSpecificHoverStyles: t,
        };
    }());
    $("#map_container").usmap(lTemp),
        $("#ok_button").click(() => {
            $("#election_night_overlay").remove(),
                $("#election_night_window").remove();
        }),
        $("#final_result_button").click(() => {
            clearTimeout(results_timeout),
                $("#map_footer").html(
                    "<i>Processing Results, wait one moment...</i>",
                );
            handleFinalResults(500);
            m();
        });
    e.final_overall_results = [];
    for (let t = 0; t < e.final_state_results[0].result.length; t++) {
        e.final_overall_results.push({
            candidate: e.final_state_results[0].result[t].candidate,
            electoral_votes: 0,
            popular_votes: 0,
        });
    }
    !(function () {
        for (let t = 0; t < e.final_state_results.length; t++) {
            const i = findFromPK(e.states_json, e.final_state_results[t].state);
            const a = marginTime(
                e.final_state_results[t].result,
                e.states_json[i].fields.poll_closing_time,
            );
            e.final_state_results[t].result_time = a;
        }
    }()),
        $("#ok_button").click(() => {
            results_timeout = setTimeout(() => {
                !(function t(i, a) {
                    const s = [0, 0];
                    for (var n = 0; n < e.final_overall_results.length; n++) {
                        e.final_overall_results[n].electoral_votes > s[0]
                        && (s[0] = e.final_overall_results[n].electoral_votes);
                    }
                    total_votes = 0;
                    for (
                        iterator = 0;
                        iterator < e.final_overall_results.length;
                        iterator++
                    ) {
                        total_votes += e.final_overall_results[iterator].popular_votes;
                    }
                    pop_vs = [];
                    for (
                        iterator = 0;
                        iterator < e.final_overall_results.length;
                        iterator++
                    ) {
                        if (
                            e.final_overall_results[iterator].popular_votes / total_votes
                            > 0
                        ) {
                            pop_vs.push(
                                e.final_overall_results[iterator].popular_votes / total_votes,
                            );
                        } else {
                            pop_vs.push(0);
                        }
                    }
                    var a = handleFinalResults(i);
                    const l = findFromPK(e.election_json, e.election_id);
                    const o = e.election_json[l].fields.winning_electoral_vote_number;
                    const _ = getSortedCands();
                    let r = "";
                    for (var n = 0; n < _.length; n++) {
                        for (let d = 0; d < e.final_overall_results.length; d++) {
                            const can1 = e.final_overall_results[d].candidate;
                            const can2 = _[n].candidate;

                            if (DEBUG) {
                                console.log(
                                    "final_overall_results. d:",
                                    d,
                                    "n: ",
                                    n,
                                    "_: ",
                                    _,
                                    " e:",
                                    e,
                                    can1,
                                    can2,
                                );
                            }

                            if (can1 == can2) {
                                var c = e.final_overall_results[d].electoral_votes;
                                var popvthing = (pop_vs[d] * 100).toFixed(1);
                            }
                        }
                        r
                            += `            <span style="color:${_[n].color
                        }; background-color: ${_[n].color
                        }">--</span> <b>${_[n].last_name
                        }</b> -  ${c
                        } / ${popvthing
                        }%<br>`;
                    }
                    const p = mapResultColor(i);
                    let h = Math.floor((i / 480) * 100);
                    const g = $("#state_result_container").html();
                    $("#game_window").html("");
                    $("#game_window").html(
                        `        <div class="game_header">            ${corrr
                        }        </div>        <div id="main_content_area">            <div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ELECTION TALLY</h3>                        <ul>${r
                        }</ul>                        <p>${h
                        }% complete</br>${o
                        } to win</p>                    </div>                </div>                <div id="state_result_container">${g
                        }</div>            </div>        </div>        <div id="map_footer">        <button id="final_result_button">Go to Final Results</button>        </div>`,
                    );
                    $("#map_container").usmap(p);
                    $("#final_result_button").click(() => {
                        clearTimeout(results_timeout),
                            $("#map_footer").html(
                                "<i>Processing Results, wait one moment...</i>",
                            );
                        handleFinalResults(500);
                        m();
                    });
                    for (var n = 0; n < e.final_overall_results.length; n++) {
                        e.final_overall_results[n].electoral_votes > s[1]
                        && (s[1] = e.final_overall_results[n].electoral_votes);
                    }
                    if (s[0] < o && s[1] >= o) {
                        if (e.final_overall_results[0].candidate == e.candidate_id) var b = `${e.WinPopup}`;
                        else if (e.final_overall_results[0].candidate != e.candidate_id) var b = `${e.LosePopup}`;
                        $("#game_window").append(
                            `            <div class="overlay" id="election_night_overlay"></div>            <div class="overlay_window" id="election_night_window">                <div class="overlay_window_content" id="election_night_content">                <h3>Advisor Feedback</h3>                <img src="${e.election_json[l].fields.advisor_url
                            }" width="208" height="128"/><p>${b
                            }</p></div>                <div class="overlay_buttons" id="winner_buttons">                <button id="ok_button">OK</button><br>                <button id="overlay_result_button">Go to Final Results</button>                </div>            </div>`,
                        ),
                            $("#ok_button").click(() => {
                                $("#election_night_overlay").remove(),
                                    $("#election_night_window").remove(),
                                    (results_timeout = setTimeout(() => {
                                        t(i, a);
                                    }, 2e3));
                            }),
                            $("#overlay_result_button").click(() => {
                                $("#election_night_overlay").remove(),
                                    $("#election_night_window").remove(),
                                    clearTimeout(results_timeout),
                                    $("#map_footer").html(
                                        "<i>Processing Results, wait one moment...</i>",
                                    );
                                handleFinalResults(500);
                                m();
                            });
                    } else {
                        i >= 480 || a >= e.states_json.length
                            ? ((h = 100),
                                $("#overall_result").html(
                                    `            <h3>ELECTION TALLY</h3>            <ul>${r
                                    }</ul>            <p>${h
                                    }% complete</br>${o
                                    } to win</p>`,
                                ))
                            : (results_timeout = setTimeout(() => {
                                t(i, a);
                            }, 2e3));
                    }
                    i += 10;
                }(0, 0));
            }, 2e3);
        });
}

function nextQuestion() {
    // calculate shining

    if (Number(e.game_type_id) === 3) {
        const temp_polls = A(2);
        shining_cal(temp_polls);
    }

    const t = A(2);

    if (e.cyoa) {
        if (e.collect_results) {
            const a = A(2);
            e.current_results = [getLatestRes(a)[0], a];
        }
        cyoAdventure(e.questions_json[e.question_number]);
    }
    let a = false;
    if (e.primary) {
        /* Primary code format:
        e.primary_code = [
            {
                "breakQ": 0,
                "states": [1100, 1101, 1102]
            },
            {
                "breakQ": 2,
                "states": [1103, 1104, 1105]
            }
        ]
        */
        primary_breaks = e.primary_code.map((f) => f.breakQ);
        a = primaryFunction(
            primary_breaks.includes(e.question_number),
            primary_breaks,
        );
        if (a) {
            e.corQuestion = true;
            return false;
        }
    }

    // in some mods, the map cache breaks election night after answering the final question
    // we should skip it in that case.
    if (e.question_number < e.global_parameter_json[0].fields.question_count - 1) {
        setTimeout(() => mapCache((skip = false)), 0); // starts new thread for poll map preloading
    }

    if (e.corQuestion) e.corQuestion = false;
    else e.question_number++;

    if (e.player_answers.length < e.question_number) {
        while (e.player_answers.length != e.question_number) {
            e.player_answers.push(null);
        }
    }

    if (e.question_number == e.global_parameter_json[0].fields.question_count) {
        if (e.primary) {
            e.final_state_results = A(1);
            electionNight();
            handleFinalResults(500);
            m();
        } else {
            e.final_state_results = A(1);
            electionNight();
        }
    } else if (e.question_number % 2 == 0) {
        // const i = findFromPK(e.election_json, e.election_id);
        const election = e.election_json.find((f) => Number(f.pk) === Number(e.election_id));
        election.fields.has_visits == 1
            ? (function (e) {
                $("#game_window").html(
                    `        <div class="game_header">            ${corrr
                    }        </div>        <div id="main_content_area">            <div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ESTIMATED SUPPORT</h3>                        <p>Click on a state to view more info.</p>                    </div>                </div>                <div id="state_result_container">                    <div id="state_info">                        <h3>STATE SUMMARY</h3>                        <p>Click/hover on a state to view more info.</p>                        <p>Precise results will be available on election night.</p>                    </div>                </div>            </div>        </div>        <p class="visit_text"><font size="2">Use this map to click on the next state you wish to visit. Choose wisely             and focus your efforts where they will have the most impact.</p>        </div>        `,
                );
                const t = rFunc(e, 1);
                $("#map_container").usmap(t);
            }(t))
            : questionHTML(t);
    } else questionHTML(t);
    if ($("#importfile")[0].value != "") {
        importgame(e.dagakotowaru);
    }
    return true;
}

function answerEffects(t) {
    // eslint-disable-next-line prefer-const
    let stopSpacebar = false;
    if (stopSpacebar && $("#visit_overlay")[0]) {
        debugConsole("Visit overlay is showing, not applying answer effects");
        return;
    }

    const numT = Number(t);
    const numCand = Number(e.candidate_id);

    debugConsole(`Applying answer effects for answer pk ${t}`);
    e.player_answers.push(numT);
    // const electIndex = findFromPK(e.election_json, e.election_id);
    const election = e.election_json.find((f) => Number(f.pk) === Number(e.election_id));
    if (e.answer_feedback_flg === 1) {
        const hasFeedback = e.answer_feedback_json.some(
            (f) => f.fields.answer === numT && f.fields.candidate === numCand,
        );
        if (hasFeedback) {
            const s = e.answer_feedback_json.findIndex(
                (f) => f.fields.answer === numT && f.fields.candidate === numCand,
            );
            const n = `                    <div class="overlay" id="visit_overlay"></div>                    <div class="overlay_window" id="visit_window">                        <div class="overlay_window_content" id="visit_content">                        <h3>Advisor Feedback</h3>                        <img src="${election.fields.advisor_url
            }" width="208" height="128"/>                        <p>${substitutePlaceholders(e.answer_feedback_json[s].fields.answer_feedback)
            }</p>                        </div>                        <div class="overlay_buttons" id="visit_buttons">                        <button id="ok_button">OK</button><br><button id="no_feedback_button">Don't give me advice</button>                                                </div>                    </div>`;
            $("#game_window").append(n);
            $("#ok_button").click(() => nextQuestion());
            $("#no_feedback_button").click(() => {
                e.answer_feedback_flg = 0;
                nextQuestion();
            });
        } else if (!hasFeedback) nextQuestion();
    } else nextQuestion();
}

function advisorFeedback() {
    const i = findFromPK(e.election_json, e.election_id);
    const advDiv = `    <div class="overlay" id="feedback_overlay"></div>    <div class="overlay_window" id="feedback_window">        <div class="overlay_window_content" id="feedback_content">        <h3>Advisor Feedback</h3>        <img src="${e.election_json[i].fields.advisor_url
    }" width="208" height="128"/>        <p>${e.SelAnsContText}</p>        </div>        <div id="visit_buttons">        <button id="ok_button">OK</button><br>        </div>    </div>`;
    $("#game_window").append(advDiv);
    $("#ok_button").click(() => $("#feedback_overlay, #feedback_window").remove());
}

function descHTML(descWindow, id) {
    const candObj = e.candidate_json.find((f) => Number(f.pk) === Number(id));
    const isRM = descWindow === "#running_mate_description_window";
    const idx = isRM ? "running_mate_summary" : "candidate_summary";
    const desc = isRM ? "description_as_running_mate" : "description";
    const imageId = isRM ? "running_mate_image" : "candidate_image";

    $(descWindow).html(`
        <div class="person_image" id="${imageId}">
            <img src="${candObj.fields.image_url}" width="210" height="250"/>
        </div>
        <div class="person_summary" id="${idx}">
            <ul>
                <li>Name: ${candObj.fields.first_name} ${candObj.fields.last_name}</li>
                <li>${e.PartyText} ${candObj.fields.party}</li>
                <li>${e.HomeStateText} ${candObj.fields.state}</li>
            </ul>
        ${candObj.fields[desc]}
        </div>`.trim());
}

function a(e) {
    let t;
    // eslint-disable-next-line default-case
    switch (e) {
        case "1":
            t = "<p><strong>Use the default method of allocating electoral votes for each state.</strong></p>                 <p>In the vast majority of cases, states use a winner-take-all method. For instance,                 if Candiate A defeats Candidate B in a state, worth 20 electoral votes, Candidate                 A will usually win all 20 votes.</p>                 <p>This method tends to concentrate the election into a handful of swing states.                 It also makes it difficult for third-party candidates to win electoral votes. On                 the other hand, it is easier for a single candidate to gain an overall majority of the                 electoral votes.</p>";
            break;
        case "2":
            t = "<p><strong>Allocate each state's electoral votes proportionally.</strong></p>                <p>Under this method, all candidates split the electoral votes in a state, in                 proportion to their popular vote %.</p>                <p>There is still an advantage to winning a state -- the winner of the state will                 always receive a plurality of electoral votes. For instance, in a state with                 4 electoral votes, if Candidate A wins 51% of the vote, they will be awarded 3                 electoral votes.</p>                <p>Compared to a winner-take-all method, this method aligns the electoral vote                 more closely with the popular vote. It also makes it easier to third party                 candidates to increase their electoral vote totals. In some scenarios, this effect                 is highly significant on the final outcome. Some examples are 1860, 1948, 1968, and 2000. </p>";
            break;
        case "3":
            t = `
                    <p><strong style='color:navy'>From sea to shining sea!</strong> - <em>The "advanced mode" Campaign Trail experience.</em></p>
                    <p>You will play with significantly increased control over the financial and internal aspects of your campaign, including:</p>
                    <p>
                    - Campaign finance<br>
                    - Staffing your campaign<br>
                    - Interactions with lobbies<br>
                    - Ad buys
                    </p>
                    <p><b>This is not the recommended experience for new players.</b></p>
                    <p><b>Originally from New Campaign Trail, added with permission.</b></p>
                    `;
            break;
    }
    $("#opponent_selection_description_window").html(t);
}

function realityCheck(cand, running_mate) {
    // checks if we are actually looking at a real candidate pairing
    const pairs = e.running_mate_json
        .map((f) => [f.fields.candidate, f.fields.running_mate]);
    return pairs.some((pr) => pr[0] === cand && pr[1] === running_mate);
}

// Loads up the html for an election when loading the game. From my understanding this sets up the map and such.
// Important for mods because it will load the base scenario code 2 for the mod before loading the custom code 2.
// That way you have less boilerplate
function election_HTML(id, cand, running_mate) {
    const numId = Number(id);
    if (numId !== 16) {
        if (modded) {
            let yearbit;
            let lastnamebit;
            let veeplastname;
            try {
                // ree = the actual base election json unmodded
                yearbit = ree.election_json[findFromPK(ree.election_json, id)].fields.year;
                lastnamebit = ree.candidate_json[
                    findFromPK(ree.candidate_json, campaignTrail_temp.candidate_id)
                    ].fields.last_name;
                veeplastname = ree.candidate_json[
                    findFromPK(ree.candidate_json, campaignTrail_temp.running_mate_id)
                    ].fields.last_name;
                // eslint-disable-next-line no-empty
            } catch {
            }

            // Check if this is a base scenario and if so we need the specific base scenario code 2. Otherwise we can use whatever one with the same year.
            const real = realityCheck(cand, running_mate);

            if (real) {
                return `${yearbit}_${lastnamebit}_${veeplastname}.html`;
            }

            return baseScenarioDict[yearbit];
        }
        // If it's not modded then it must bea real base scenario so just return the real info
        const yearNM = campaignTrail_temp.election_json.find((f) => f.pk === Number(id)).fields.year;
        const candNM = campaignTrail_temp.candidate_json.find((f) => f.pk === Number(cand)).fields.last_name;
        const runNM = campaignTrail_temp.candidate_json.find((f) => f.pk === Number(running_mate)).fields.last_name;
        return `${yearNM}_${candNM}_${runNM}.html`;
    }
    if (numId === 16) {
        // If it's a mod we don't need to get the specific 2016a scenario
        if (modded) {
            return baseScenarioDict["2016a"];
        }
        return (
            `2016a_${campaignTrail_temp.candidate_json[
                findFromPK(campaignTrail_temp.candidate_json, cand)
                ].fields.last_name
            }_${campaignTrail_temp.candidate_json[
                findFromPK(campaignTrail_temp.candidate_json, running_mate)
                ].fields.last_name
            }.html`
        );
    }

    return null;
}

/* eslint-disable no-use-before-define */
function candSel(a) {
    a.preventDefault();

    const numElect = Number(e.election_id) ?? Number(e.election_json[0].pk);
    const n = e.candidate_json
        .filter((f) => Number(f.fields.election) === numElect && [1, true].includes(f.fields.is_active))
        .map((f) => `<option value="${f.pk}">${f.fields.first_name} ${f.fields.last_name}</option>`)
        .join("");

    if (!modded) e.shining = e.shining_info.some((f) => f.pk === numElect);

    document.querySelector("#game_window").innerHTML = `
        <div class="game_header">${corrr}</div>
        <div class="inner_window_w_desc" id="inner_window_3">
            <div id="candidate_form">
                <form name="candidate">
                    <p>
                        <h3>${e.CandidText}</h3>
                        <select name="candidate_id" id="candidate_id">${n}</select>
                    </p>
                </form>
            </div>
        <div class="person_description_window" id="candidate_description_window"></div>
        <p>
            <button class="person_button" id="candidate_id_back">Back</button>
            <button class="person_button" id="candidate_id_button">Continue</button>
        </p>
        </div>`.trim();

    const candId = document.getElementById("candidate_id");
    descHTML("#candidate_description_window", candId.value);
    candId.addEventListener("change", () => {
        descHTML("#candidate_description_window", candId.value);
    });
}

function vpSelect(t) {
    t.preventDefault();
    const candidate_id = document.getElementById("candidate_id");
    const a = candidate_id ? candidate_id.value : e.candidate_id;

    e.candidate_id = Number(a);

    const n = e.running_mate_json
        .filter((f) => f.fields.candidate === e.candidate_id)
        .map((f) => {
            const runObj = e.candidate_json.find((g) => g.pk === Number(f.fields.running_mate));
            return `<option value="${runObj.pk}">${runObj.fields.first_name} ${runObj.fields.last_name}</option>`;
        })
        .join("");

    document.querySelector("#game_window").innerHTML = `
    <div class="game_header">${corrr}</div>
    <div class="inner_window_w_desc" id="inner_window_4">
        <div id="running_mate_form">
            <form name="running mate">
                <p>
                    <h3>${e.VpText}</h3>
                    <select name="running_mate_id" id="running_mate_id">${n}</select>
                </p>
            </form>
        </div>
        <div class="person_description_window" id="running_mate_description_window"></div>
        <p>
            <button class="person_button" id="running_mate_id_back">Back</button>
            <button class="person_button" id="running_mate_id_button">Continue</button>
        </p>
    </div>`.trim();

    const runningMateId = document.querySelector("#running_mate_id");
    descHTML("#running_mate_description_window", runningMateId.value);
    runningMateId.addEventListener("change", () => {
        descHTML("#running_mate_description_window", runningMateId.value);
    });
}

function renderOptions(electionId, candId, runId) {
    const numElectId = Number(electionId);
    const numCandId = Number(candId);
    let difficultyStr = "";
    e.difficulty_level_json.forEach((f) => {
        const difficulty = f;
        const isSelected = difficulty.fields.name === "Normal" ? "selected" : "";
        difficultyStr += `<option value="${difficulty.pk}" ${isSelected}>${difficulty.fields.name}</option>`;
    });
    let shining = "";
    if (e.shining) {
        shining = `<option value=3 style="">Sea to Shining Sea</option>`;
    }
    document.querySelector("#game_window").innerHTML = `
        <div class="game_header">${corrr}</div>
        <div class="inner_window_w_desc" id="inner_window_4">
            <div id="game_options">
                <form name="game_type_selection">
                    <p>
                        <h3>Select your game mode.</h3>
                        <select name="game_type_id" id="game_type_id">
                            <option value="1">Default (Winner-Take-All)</option>
                            <option value="2">Proportional</option>
                            ${shining}
                        </select>
                    </p>
                </form>
            </div>
            <div class="description_window_small" id="opponent_selection_description_window"></div>
            <div id="difficulty_level">
                <form name="difficulty_level_selection">
                <p>
                    <h3>Please choose your difficulty level:</h3>
                    <select name="difficulty_level_id" id="difficulty_level_id"> ${difficultyStr} </select>
                </p>            
                </form>
            </div>
            <p id="opponent_selection_id_button_p">
                <button class="person_button" id="opponent_selection_id_back">Back</button>
                <button class="person_button" id="opponent_selection_id_button">Continue</button>
            </p>        
        </div>`.trim();
    const gameTypeId = document.querySelector("#game_type_id");
    const difficultyLevelId = document.querySelector("#difficulty_level_id");
    a(gameTypeId.value);
    gameTypeId.addEventListener("change", () => {
        a(gameTypeId.value);
    });
    // if (e.shining) $("#game_type_id").val("3");
    $("#opponent_selection_id_button").click(() => {
        document.querySelector("#opponent_selection_id_button").outerHTML = "<em>One moment...</em>";
        const oppArr = [];
        const opponents = [];
        e.candidate_dropout_json.forEach((f) => {
            if (f.fields.candidate === numCandId) {
                oppArr.push(f.fields.affected_candidate);
            }
        });
        const d = e.opponents_default_json.findIndex((f) => f.election === numElectId);
        e.opponents_default_json[d].candidates.forEach((f) => {
            if (f !== numCandId && oppArr.indexOf(f) === -1) {
                opponents.push(f);
            }
        });
        // define ONLY if not already defined - necessary for code 1 base switching gimmicks
        e.election_id = e.election_id || electionId;
        e.candidate_id = e.candidate_id || candId;
        e.running_mate_id = e.running_mate_id || runId;

        e.opponents_list = opponents;
        e.game_type_id = gameTypeId.value;
        e.difficulty_level_id = difficultyLevelId.value;
        e.difficulty_level_multiplier = e.difficulty_level_json.find(
            (f) => f.pk === Number(e.difficulty_level_id),
        ).fields.multiplier;
        starting_mult = encrypted + e.difficulty_level_multiplier;

        if (Number(e.game_type_id) === 3) {
            const default_init = 50000000;
            const boost = randomNormal(e.candidate_id)
                * default_init
                * e.global_parameter_json[0].fields.global_variance
                * 4;

            e.shining_data = {
                balance: (default_init + boost) * e.difficulty_level_multiplier,
                ad_spending: [],
                times: {
                    fundraising_time: 0.33,
                    media_time: 0.33,
                    physical_time: 0.34,
                },
                visit_multiplier: 1,
            };

            e.shining_data.prev_balance = e.shining_data.balance;
        }

        if (campaignTrail_temp.musicOn) {
            document.getElementById("music_player").style.display = "";
            document.getElementById("campaigntrailmusic").src = campaignTrail_temp.musicSrc;
        }
        const aaa = `../static/questionset/${election_HTML(electionId, candId, runId)}`;

        Object.assign(e, {
            ...campaignTrail_temp,
            question_number: 0,
            election_id: Number(campaignTrail_temp.election_id),
            candidate_id: Number(campaignTrail_temp.candidate_id),
            running_mate_id: Number(campaignTrail_temp.running_mate_id),
            difficulty_level_id: Number(campaignTrail_temp.difficulty_level_id),
            game_start_logging_id: Number(campaignTrail_temp.game_start_logging_id),
        });
        // Set up the interval for adding event listeners
        const important_code = setInterval(() => {
            const answerButton = document.querySelector("#answer_select_button");
            if (answerButton) {
                // Use jQuery's off() to remove all click handlers
                const $answerButton = $(answerButton);
                $answerButton.off('click');

                // Add the click handler using jQuery
                $answerButton.on('click', (e) => {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    onAnswerSelectButtonClicked(e);
                });

                // Set up map view click handler
                $("#view_electoral_map").off("click").on("click", (e) => {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    openMap(A(2));
                });

                clearInterval(important_code);
            }
        }, 1000);
        tempFuncO = (e) => {
            if (e.collect_results) {
                const a = A(2);
                e.current_results = [getLatestRes(a)[0], a];
            }
            questionHTML();
        };

        if (!modded) {
            $("#game_window").load(aaa, () => {
                const e = A(2);
                questionHTML(e);
            });
        } else if (
            $("#modSelect")[0].value != "other"
            || e.hotload
            || loadingFromModButton
        ) {
            try {
                $("#game_window").load(aaa, () => {
                    e = campaignTrail_temp;
                    const eArr = e.temp_election_list.findIndex(
                        (a) => a.id === Number(e.election_id),
                    );
                    const candIdx = e.candidate_json.findIndex(
                        (a) => a.pk === Number(e.candidate_id),
                    );
                    const runIdx = e.candidate_json.findIndex(
                        (a) => a.pk === Number(e.running_mate_id),
                    );
                    const year = e.temp_election_list[eArr].display_year;
                    const cand = e.candidate_json[candIdx].fields.last_name;
                    const run = e.candidate_json[runIdx].fields.last_name;

                    const theorId = `${year}_${cand}${run}`;
                    // theorId = $("#modSelect")[0].value

                    if (customMod === false) {
                        evalFromUrl(`../static/mods/${theorId}.html`, () => {
                            tempFuncO(e);
                        });
                    } else {
                        eval(localStorage.getItem(`${customMod}_code2`));
                        tempFuncO(e);
                    }

                    endingUrl = `../static/mods/${theorId}_ending.html`;

                    try {
                        if (fileExists(endingUrl)) {
                            const client2 = new XMLHttpRequest();
                            client2.open("GET", endingUrl);
                            client2.onreadystatechange = function () {
                                important_info = client2.responseText;
                            };
                            client2.send();
                        }
                    } catch (err) {
                        console.error("Error loading code 2", err);
                    }
                });
            } catch (err) {
                console.error("Error loading code 2", err);
            }
        } else {
            // other block case
            $("#game_window").load(aaa, () => {
                eval($("#codeset2")[0].value);
                tempFuncO(e);
            });
        }
        histFunction();
    });
}

/* eslint-enable no-use-before-define */

function importgame(code) {
    starting_mult = encrypted + campaignTrail_temp.difficulty_level_multiplier;
    A(1);
    campaigntrail = JSON.parse(code);
    e.election_id = campaigntrail.election_id;
    e.candidate_id = campaigntrail.player_candidate;
    e.player_answers = campaigntrail.player_answers;
    e.player_visits = campaigntrail.player_visits;
    e.final_overall_results = campaigntrail.overall_results;
    e.final_state_results = campaigntrail.state_results;
    e.difficulty_level_multiplier = campaigntrail.difficulty_multiplier;
    electionNight();
}

function getLatestRes(t) {
    total_v = 0;
    cand_evs = [];
    cand_pvs = [];
    // goes through every state
    // converts the n object to an array of elements
    const nArray = Object.entries(answerEffects).map(([key, value]) => ({ key, value }));

    // goes through every state
    for (let s = 0; s < e.states_json.length; s++) {
        const state = e.states_json[s];

        // finds the matching state in the array

        // reverses and sorts the array by percent
        nArray.sort((a, b) => b.value - a.value);

        // updates the total popular votes
        // total_v += campaignTrail_temp.states_json[s].fields.popular_votes;
    }

    // Use Array.prototype.filter() method to filter e.candidate_json
    const filteredCandidates = e.candidate_json.filter(
        (candidate) => e.opponents_list.includes(candidate.pk)
            || candidate.pk === e.candidate_id,
    );

    // Use Array.prototype.forEach() method to update filteredCandidates
    filteredCandidates.forEach((candidate) => {
        candidate.popvs = 0;
        candidate.evvs = 0;

        t.forEach((state) => {
            const stateIndex = e.states_json
                .map((f) => Number(f.pk))
                .indexOf(Number(state.state));
            const stateElectoralVotes = e.states_json[stateIndex].fields.electoral_votes;

            const candidateIndex = state.result
                .map((f) => Number(f.candidate))
                .indexOf(Number(candidate.pk));
            const candidateResult = state.result[candidateIndex];

            if (e.primary_states) {
                const primaryStates = JSON.parse(e.primary_states);
                const primaryMap = primaryStates.map((f) => f.state);

                if (primaryMap.includes(state.state)) {
                    allocation = dHondtAllocation(
                        state.result.map((f) => f.votes),
                        stateElectoralVotes,
                        0.15,
                    );
                    candidate.evvs += allocation[candidateIndex];
                }
            } else if (candidateIndex == 0 && !e.primary) {
                candidate.evvs += stateElectoralVotes;
            }

            candidate.popvs += candidateResult.votes;
            total_v += candidateResult.votes;
        });
    });
    filteredCandidates.forEach((candidate) => {
        candidate.pvp = candidate.popvs / total_v;
        candidate.popvs = 0;
    });

    // Use Array.prototype.sort() method to sort filteredCandidates in descending order of pvp
    const sortedCandidates = filteredCandidates.sort((a, b) => b.pvp - a.pvp);

    // Use Array.prototype.map() method to create nn2 and nn3 arrays
    nn2 = sortedCandidates.map((candidate) => candidate);
    nn3 = sortedCandidates.map((candidate) => candidate.evvs || 0);

    return [nn2, answerEffects];
}

function setStatePollText(s, t) {
    const results = t.filter(
        ({ abbr }) => abbr === e.states_json[s].fields.abbr,
    );
    let doPrimaryMode = false;

    if (e.primary_states) {
        const primaryStates = JSON.parse(e.primary_states);
        const primaryMap = primaryStates.map((f) => f.state);
        if (primaryMap.includes(results[0].state)) {
            doPrimaryMode = true;
            const trueRes = primaryStates[primaryMap.indexOf(results[0].state)];
            results[0].result = trueRes.result;
        }
    }

    // Flatten the nested "result" property of the elements in the results array
    const flatResults = results.flatMap(({ result }) => result);

    // Filter the flatResults array to keep only the elements with a "percent" property
    // that is greater than or equal to 0.1
    const filteredResults = flatResults.filter(({ percent }) => percent >= 0.1);

    // Sort the filteredResults array in descending order by the "percent" property
    const sortedResults = filteredResults.sort((a, b) => b.percent - a.percent);

    // Map the sortedResults array to create a new array of strings, where each
    // string is formatted as "<b>CANDIDATE_NAME</b> - PERCENT%<br>"
    const formattedResults = sortedResults.map(({ candidate, percent }) => {
        const candidateName = e.candidate_json.find(({ pk }) => pk === candidate)
            ?.fields.last_name;
        if (!doPrimaryMode) {
            return `<b>${candidateName}</b> - ${Math.floor(100 * percent)}%<br>`;
        }
        return `<b>${candidateName}</b> - ${(100 * percent).toFixed(2)}%<br>`;
    });

    const _ = formattedResults.join("");
    slrr = _;
    if (!doPrimaryMode && !e.primary) {
        var c = `<h3>ESTIMATED SUPPORT</h3>                    <ul id='switchingEst'>${_
        }</ul>                    <button id='pvswitcher' onclick='switchPV()'>PV Estimate</button><button onclick='evest()' id='ev_est'>Electoral Vote Estimate</button>`;
    } else if (e.primary && !doPrimaryMode) {
        var c = `<h3>ESTIMATED SUPPORT</h3>                    <ul id='switchingEst'>${_
        }</ul>                    <button id='pvswitcher' onclick='switchPV()'>PV Estimate</button><button onclick='evest()' id='ev_est'>Current Delegate Count</button>`;
    } else {
        var c = `<h3>PRIMARY/CAUCUS RESULT</h3>                    <ul id='switchingEst'>${_
        }</ul>                    <button id='pvswitcher' onclick='switchPV()'>PV Estimate</button><button onclick='evest()' id='ev_est'>Current Delegate Count</button>`;
    }

    $("#overall_result").html(c);
    let u = "";
    for (l = 0; l < e.state_issue_score_json.length; l++) {
        if (e.state_issue_score_json[l].fields.state == e.states_json[s].pk) {
            // Find the issue object that matches the current state_issue_score
            const issue = e.issues_json.find(
                (i) => i.pk == e.state_issue_score_json[l].fields.issue,
            );
            let stanceDesc = null;
            // Use a switch statement to determine the stance based on the state_issue_score
            switch (true) {
                case e.state_issue_score_json[l].fields.state_issue_score
                <= e.global_parameter_json[0].fields.issue_stance_1_max:
                    var v = issue.fields.stance_1;
                    stanceDesc = issue.fields.stance_desc_1;
                    break;
                case e.state_issue_score_json[l].fields.state_issue_score
                <= e.global_parameter_json[0].fields.issue_stance_2_max:
                    v = issue.fields.stance_2;
                    stanceDesc = issue.fields.stance_desc_2;
                    break;
                case e.state_issue_score_json[l].fields.state_issue_score
                <= e.global_parameter_json[0].fields.issue_stance_3_max:
                    v = issue.fields.stance_3;
                    stanceDesc = issue.fields.stance_desc_3;
                    break;
                case e.state_issue_score_json[l].fields.state_issue_score
                <= e.global_parameter_json[0].fields.issue_stance_4_max:
                    v = issue.fields.stance_4;
                    stanceDesc = issue.fields.stance_desc_4;
                    break;
                case e.state_issue_score_json[l].fields.state_issue_score
                <= e.global_parameter_json[0].fields.issue_stance_5_max:
                    v = issue.fields.stance_5;
                    stanceDesc = issue.fields.stance_desc_5;
                    break;
                case e.state_issue_score_json[l].fields.state_issue_score
                <= e.global_parameter_json[0].fields.issue_stance_6_max:
                    v = issue.fields.stance_6;
                    stanceDesc = issue.fields.stance_desc_6;
                    break;
                case e.state_issue_score_json[l].fields.state_issue_score
                > e.global_parameter_json[0].fields.issue_stance_6_max:
                    v = issue.fields.stance_7;
                    stanceDesc = issue.fields.stance_desc_7;
                    break;
            }

            if (stanceDesc == "'" || stanceDesc == null || !isNaN(stanceDesc)) {
                stanceDesc = "";
            }

            let issueDescription = issue.fields.description ?? "";
            if (
                issueDescription == "'"
                || issueDescription == null
                || !isNaN(issueDescription)
            ) {
                issueDescription = "";
            }

            // Add the issue name and stance to the list
            u += `
              <li ${campaignTrail_temp.issue_font_size != null ? `style="font-size: ${campaignTrail_temp.issue_font_size};"` : ""}>
                <span class=${issueDescription ? "tooltip" : ""}>${issue.fields.name}<span style="font-size: 10.4px;" class="tooltiptext">${issueDescription}</span></span>
                <span> -- </span>
                <span class=${stanceDesc ? "tooltip" : ""}>${v}<span style="font-size: 10.4px;" class="tooltiptext">${stanceDesc}</span></span>
              </li>`;
        }
    }
    if (e.primary) {
        /*
        e.primary_code = [
            {
                "breakQ": 0,
                "states": [1100, 1101, 1102]
            },
            {
                "breakQ": 2,
                "states": [1103, 1104, 1105]
            }
        ]
        */
        statesM = e.primary_code.map((f) => f.states).flatMap((f) => f);
        if (statesM.includes(e.states_json[s].pk)) {
            for (i = 0; i < e.primary_code.length; i++) {
                if (e.primary_code[i].states.includes(e.states_json[s].pk)) {
                    break;
                }
            }
            onQText = `Primary on Question ${e.primary_code[i].breakQ + 1}`;
        } else {
            onQText = "";
        }
        var f = `                    <h3>STATE SUMMARY</h3>                    <p>${e.states_json[s].fields.name
        }</p>                    <ul>${u
        }</ul>                    <p>Delegates: ${e.states_json[s].fields.electoral_votes
        }</p><p>${onQText
        }</p>`;
    } else {
        var f = `                    <h3>STATE SUMMARY</h3>                    <p>${e.states_json[s].fields.name
            }</p>                    <ul>${u
            }</ul>                    <p>Electoral Votes: ${e.states_json[s].fields.electoral_votes
            }</p>`
            + `                    <p>Popular Votes: ${e.states_json[s].fields.popular_votes.toLocaleString()
            }</p>`;
    }
    $("#state_info").html(f);
}

rFunc = (t, i) => {
    for (var a = {}, s = 0; s < t.length; s++) {
        const item = t[s];
        // Find the result with the highest percent
        const maxResult = Math.max(...item.result.map((r) => r.percent));
        const winner = item.result.find((r) => r.percent === maxResult).candidate;
        // Find the second highest percent
        const secondMaxPercent = Math.max(
            ...item.result
                .filter((r) => r.percent !== maxResult)
                .map((r) => r.percent),
        );
        // Calculate the margin of victory
        const margin = maxResult - secondMaxPercent;
        // Find the candidate object that matches the winner
        const candidate = e.candidate_json.find((c) => c.pk === winner);
        // Add the result to the map

        const latest_oppo_visit = e.opponent_visits[e.opponent_visits.length - 1];
        if (
            e.game_type_id === "3"
            && i == 1
            && Object.values(latest_oppo_visit).includes(item.state)
        ) {
            let cand = Object.keys(latest_oppo_visit)[
                Object.values(latest_oppo_visit).indexOf(item.state)
                ];
            cand = e.candidate_json.find((f) => f.pk === Number(cand));

            a[item.abbr] = {
                fill: candidate
                    ? r2h(
                        _interpolateColor(
                            h2r("#000000"),
                            _interpolateColor(
                                h2r(cand.fields.color_hex),
                                h2r(candidate.fields.color_hex),
                                gradient(Math.log(margin + 1) * 4.5, 0, 1),
                            ),
                            gradient(0.7, 0, 1),
                        ),
                    )
                    : null,
            };
        } else {
            a[item.abbr] = {
                fill: candidate
                    ? r2h(
                        _interpolateColor(
                            h2r(campaignTrail_temp.margin_format),
                            h2r(candidate.fields.color_hex),
                            gradient(Math.log(margin + 1) * 4.5, 0, 1),
                        ),
                    )
                    : null,
            };
        }
    }

    const c = function (i, a) {
        res = getLatestRes(t);
        nn2 = res[0];
        nnn = "";

        vv = "";

        for (zzz = 0; zzz < nn2.length; zzz++) {
            vv
                += `<b>${nn2[zzz].fields.last_name
            }</b> - ${(nn2[zzz].pvp * 100).toFixed(1)
            }%<br>`;
            if (nn3[zzz] > 0) {
                nnn
                    += `<b>${nn2[zzz].fields.last_name}</b> - ${nn3[zzz]}<br>`;
            }
        }

        rrr = vv;
        evestt = 0;

        for (let s = 0; s < e.states_json.length; s++) {
            if (e.states_json[s].fields.abbr == a.name) {
                setStatePollText(s, t);
                break;
            }
        }
    };
    const u = findFromPK(e.election_json, e.election_id);
    if (i == 0) {
        var v = {
            stateStyles: {
                fill: "transparent",
            },
            stateHoverStyles: {
                fill: "transparent",
            },
            stateSpecificStyles: a,
            stateSpecificHoverStyles: a,
            click: c,
            mouseover: c,
        };
    }
    if (i == 1) {
        v = {
            stateStyles: {
                fill: "transparent",
            },
            stateHoverStyles: {
                fill: "transparent",
            },
            stateSpecificStyles: a,
            stateSpecificHoverStyles: a,
            click(i, a) {
                for (var s = 0; s < e.states_json.length; s++) {
                    if (e.states_json[s].fields.abbr == a.name) {
                        const n = `                    <div class="overlay" id="visit_overlay"></div>    \t            <div class="overlay_window" id="visit_window">                    \t<div class="overlay_window_content" id="visit_content">                    \t<h3>Advisor Feedback</h3>                    \t<img src="${e.election_json[u].fields.advisor_url
                        }" width="208" height="128"/>                    \t<p>You have chosen to visit ${e.states_json[s].fields.name
                        } -- is this correct?</p>                \t    </div>                    \t<div class="overlay_buttons" id="visit_buttons">                    \t<button id="confirm_visit_button">YES</button><br>                    \t<button id="no_visit_button">NO</button>                    \t</div>                \t</div>`;
                        $("#game_window").append(n);
                        $("#confirm_visit_button").click(() => visitState(s, questionHTML, t));
                        $("#no_visit_button").click(() => {
                            $("#visit_overlay").remove();
                            $("#visit_window").remove();
                        });
                        break;
                    }
                }
            },
            mouseover: c,
        };
    }
    return v;
};

/**
 * Dictates how long it takes until the results in a particular state are called
 * @param results The parameter used for this is e.final_state_results[t].result
 * @param time The parameter used for this is e.states_json[i].fields.poll_closing_time
 * @returns {number} Time at which the state's results are called
 */
function marginTime(results, time) {
    results.sort((a, b) => b.votes - a.votes);
    const voteMargin = (
        results[0].votes - results[1].votes
    ) / (
        results[0].votes + results[1].votes
    );
    if (voteMargin < 0.0025) return 480;
    if (voteMargin < 0.005) return 460;
    if (voteMargin < 0.01) return time > 200 ? 440 : time + 240;
    if (voteMargin < 0.015) return time > 260 ? 440 : time + 180;
    if (voteMargin < 0.03) return time > 270 ? 420 : time + 150;
    if (voteMargin < 0.045) return time > 300 ? 420 : time + 120;
    if (voteMargin < 0.066) return time > 330 ? 420 : time + 90;
    if (voteMargin < 0.085) return time > 340 ? 420 : time + 80;
    if (voteMargin < 0.1) return time > 350 ? 420 : time + 70;
    if (voteMargin < 0.12) return time > 360 ? 420 : time + 60;
    if (voteMargin < 0.14) return time > 370 ? 420 : time + 50;
    if (voteMargin < 0.16) return time > 380 ? 420 : time + 40;
    if (voteMargin < 0.18) return time > 390 ? 420 : time + 30;
    if (voteMargin < 0.2) return time > 400 ? 420 : time + 20;
    if (voteMargin < 0.25) return time > 410 ? 420 : time + 10;
    return time;
}

function mapResultColor(time) {
    const stateColor = {};
    e.final_state_results.forEach((f) => {
        const s = e.candidate_json.find((g) => g.pk === f.result[0].candidate);
        if (f.result_time <= time) {
            stateColor[f.abbr] = {
                fill: s.fields.color_hex,
            };
        } else {
            stateColor[f.abbr] = {
                fill: campaignTrail_temp.global_parameter_json[0].fields.default_map_color_hex,
            };
        }
    });
    return {
        stateStyles: {
            fill: "transparent",
        },
        stateHoverStyles: {
            fill: "transparent",
        },
        stateSpecificStyles: stateColor,
        stateSpecificHoverStyles: stateColor,
        click(i, a) {
            const stateResElement = $("#state_result");
            const stateResults = e.final_state_results.find((f) => f.abbr === a.name);
            if (!stateResults) return;
            if (stateResults.result_time > time) {
                const returnStr = "<h3>STATE RESULTS</h3><p>Returns for this state are not yet available!</p>";
                stateResElement.html(returnStr);
                return;
            }
            const stateObj = e.states_json.find((f) => f.fields.abbr === a.name);
            if (!stateObj) return;
            const resultHtml = stateResults.result
                .slice(0, 4)
                .filter((f) => f.votes > 0)
                .map((f) => {
                    const candObj = e.candidate_json.find((g) => g.pk === f.candidate);
                    if (!candObj) return "";
                    return `
                        <li>
                            <span style="color:${candObj.fields.color_hex}; background-color: ${candObj.fields.color_hex}">--</span> 
                            ${candObj.fields.last_name}: ${(100 * f.percent).toFixed(1)}%
                        </li>
                        `;
                }).join("");
            const evField = e.primary ? "Delegates:" : "Electoral Votes:";
            const returnStr = `
                <h3>STATE RESULTS</h3>
                <p>${stateObj.fields.name}</p>
                <p>${evField} ${stateObj.fields.electoral_votes}
                    <ul>${resultHtml}</ul>
                </p>
            `;
            stateResElement.html(returnStr);
        },
    };
}

function m() {
    if (e.primary) {
        const t = e.final_state_results;
        const filteredCandidates = e.candidate_json.filter(
            (candidate) => e.opponents_list.includes(candidate.pk)
                || candidate.pk === e.candidate_id,
        );

        const total_v = e.final_state_results
            .reduce((sum, f) => sum + f.result.reduce((s, g) => s + g.votes, 0), 0);

        // Use Array.prototype.forEach() method to update filteredCandidates
        filteredCandidates.forEach((candidate) => {
            const cand = candidate;
            cand.popvs = 0;
            cand.evvs = 0;

            t.forEach((state) => {
                const stateObj = e.states_json.find((f) => f.pk === Number(state.state));
                const stateElectoralVotes = stateObj.fields.electoral_votes;

                const candResObj = state.result.find((f) => f.candidate === Number(candidate.pk));
                const candIndex = state.result.indexOf(candResObj);

                if (e.primary_states) {
                    const primaryStates = JSON.parse(e.primary_states);

                    if (primaryStates.some((f) => f.state === state.state)) {
                        const allocation = dHondtAllocation(
                            state.result.map((f) => f.votes),
                            stateElectoralVotes,
                            0.15,
                        );
                        cand.evvs += allocation[candIndex];
                    }
                } else if (candIndex === 0 && !e.primary) {
                    cand.evvs += stateElectoralVotes;
                }

                cand.popvs += candResObj.votes;
            });

            cand.pvp = cand.popvs / total_v;
            cand.popvs = 0;
        });
        filtMap = filteredCandidates.map((f) => f.pk);

        for (i = 0; i < e.final_overall_results.length; i++) {
            trueIndex = filtMap.indexOf(e.final_overall_results[i].candidate);
            e.final_overall_results[i].electoral_votes = filteredCandidates[trueIndex].evvs;
        }
    }
    for (
        var t = JSON.stringify({
                election_id: e.election_id,
                candidate_id: e.candidate_id,
                running_mate_id: e.running_mate_id,
                difficulty_level_id: e.difficulty_level_multiplier,
                game_start_logging_id: e.game_start_logging_id,
                game_type_id: e.game_type_id,
            }),
            i = [],
            a = 0;
        a < e.opponents_list.length;
        a++
    ) {
        i.push({
            candidate_id: e.opponents_list[a],
        });
    }
    i = JSON.stringify(i);
    let s = [];
    for (a = 0; a < e.player_answers.length; a++) {
        s.push({
            answer_id: e.player_answers[a],
        });
    }
    s = JSON.stringify(s);
    let n = [];
    const l = e.election_json.find((f) => Number(f.pk) === Number(e.election_id));
    const o = l.fields.winning_electoral_vote_number;
    for (a = 0; a < e.final_overall_results.length; a++) {
        // At high and low difficulty the game may skip a candidate existing
        // If it doesn't exist we need to make a dummy one that we flag as fake with -1
        if (!e.final_overall_results[a]) {
            e.final_overall_results[a] = {
                candidate: -1,
                electoral_votes: 0,
                popular_votes: 0,
            };
        }

        n.push({
            candidate_id: e.final_overall_results[a].candidate,
            electoral_votes: e.final_overall_results[a].electoral_votes,
            popular_votes: e.final_overall_results[a].popular_votes,
            player_candidate_flg:
                e.candidate_id == e.final_overall_results[a].candidate,
            winning_candidate_flg: e.final_overall_results[a].electoral_votes >= o,
        });
    }
    n = JSON.stringify(n);
    let _ = [];
    for (a = 0; a < e.final_state_results.length; a++) {
        for (let r = 0; r < e.final_state_results[a].result.length; r++) {
            _.push({
                state_id: e.final_state_results[a].state,
                candidate_id: e.final_state_results[a].result[r].candidate,
                electoral_votes: e.final_state_results[a].result[r].electoral_votes,
                popular_votes: e.final_state_results[a].result[r].votes,
                player_candidate_flg:
                    e.candidate_id == e.final_state_results[a].result[r].candidate,
                winning_candidate_flg: r == 0,
            });
        }
    }
    _ = JSON.stringify(_);
    let d = [];
    for (temp_visit_counter = {}, a = 0; a < e.player_visits.length; ++a) {
        temp_visit_counter[e.player_visits[a]]
        || (temp_visit_counter[e.player_visits[a]] = 0),
            (temp_visit_counter[e.player_visits[a]] += 1);
    }
    for (a = 0; a < Object.keys(temp_visit_counter).length; a++) {
        d.push({
            candidate_id: e.candidate_id,
            state_id: +Object.keys(temp_visit_counter)[a],
            visit_count: temp_visit_counter[Object.keys(temp_visit_counter)[a]],
        });
    }
    d = JSON.stringify(d);
    date = new Date();
    date2 = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    try {
        date2 += ` ${date.toString().match(/\(([A-Za-z\s].*)\)/)[1]}`;
    } catch {
    }

    (e.historical_overall = "None"),
        (e.percentile = "None"),
        (e.game_results_url = "None"),
        overallResultsHtml();
    $.ajax({
        type: "POST",
        url: "https://a4ca-124-149-140-70.ngrok.io/",
        data: JSON.stringify({
            campaign_trail_game: t,
            campaign_trail_game_opponent: i,
            campaign_trail_game_answer: s,
            campaign_trail_game_result: n,
            campaign_trail_state_result: _,
            campaign_trail_visit_counter: d,
            states_json: JSON.stringify(e.states_json),
            date: date2,
        }),
        dataType: "text",
        success(t) {
            // $("#game_window").append(t), e.historical_overall = campaignTrail_temp.historical_overall, e.percentile = campaignTrail_temp.percentile, e.game_results_url = campaignTrail_temp.game_results_url, p()
            game_id = Number(t);
            if (!isNaN(t)) {
                e.game_id = Number(t);
            } else {
            }
        },
        error(t) {
            // e.historical_overall = "None", e.percentile = "None", e.game_results_url = "None", p()
        },
    });
}

function overallResultsHtml() {
    const candObj = e.candidate_json.find((f) => f.pk === e.candidate_id);
    const electJson = e.election_json.find((f) => Number(f.pk) === Number(e.election_id));
    const overallResults = e.final_overall_results;
    const winningNum = electJson.fields.winning_electoral_vote_number;
    let s;
    if (overallResults[0].candidate === e.candidate_id
        && overallResults[0].electoral_votes >= winningNum) {
        s = candObj.fields.electoral_victory_message;
        e.final_outcome = "win";
    } else if (overallResults[0].electoral_votes >= winningNum) {
        s = candObj.fields.electoral_loss_message;
        e.final_outcome = "loss";
    } else {
        s = candObj.fields.no_electoral_majority_message;
        e.final_outcome = "tie";
    }
    const n = e.candidate_json.find((f) => f.pk === overallResults[0].candidate);
    /* let l;
    if (overallResults[0].electoral_votes >= winningNum) l = n.fields.image_url;
    else l = t.fields.no_electoral_majority_image; */
    const l = overallResults[0].electoral_votes >= winningNum
        ? n.fields.image_url
        : electJson.fields.no_electoral_majority_image;
    const totalPV = e.final_overall_results.reduce((sum, f) => sum + f.popular_votes, 0);

    if (Number(important_info.indexOf("<html>")) === -1 && important_info !== "") {
        campaignTrail_temp.multiple_endings = true;
    }
    const candResults = e.final_overall_results.find((f) => f.candidate === e.candidate_id);
    window.quickstats = [
        candResults.electoral_votes,
        (candResults.popular_votes / totalPV) * 100,
        candResults.popular_votes,
    ]; // format: electoral vote count, popular vote proportion, popular vote vote count

    const testTest = endingPicker(e.final_outcome, totalPV, e.final_overall_results, quickstats);
    getResults(e.final_outcome, totalPV, e.final_overall_results, quickstats);

    if (campaignTrail_temp.multiple_endings) {
        if (testTest) {
            s = testTest;
        }
    }

    const diff_mult_string = Number((starting_mult - encrypted).toFixed(2))
    !== Number(campaignTrail_temp.difficulty_level_multiplier.toFixed(2))
        ? `${campaignTrail_temp.difficulty_level_multiplier.toFixed(1)}; <em>Cheated difficulty</em>`
        : campaignTrail_temp.difficulty_level_multiplier.toFixed(1);

    const difficulty_string = `<div id='difficulty_mult'><br><b>Difficulty Multiplier:</b> ${diff_mult_string}</div><br>`;

    const r = e.final_overall_results
        .filter((f) => f.candidate !== -1)
        .map((f) => {
            const candObj2 = e.candidate_json.find((g) => g.pk === f.candidate);
            const colorHex = candObj2.fields.color_hex;
            const fName = `${candObj2.fields.first_name} ${candObj2.fields.last_name}`;
            return `
            <tr>
                <td style="text-align: left;">
                    <span style="background-color: ${colorHex}; color: ${colorHex};">----</span> ${fName}
                </td>
                <td>${f.electoral_votes}</td>
                <td>${formatNumbers(f.popular_votes)}</td>
                <td>${((f.popular_votes / totalPV) * 100).toFixed(1)}%</td>
            </tr>
        `;
        }).join("").trim();

    const c = e.game_results_url !== "None"
        ? `
            <h4>
                Final Results: 
                <a target="_blank" href="${e.game_results_url}">Game Link</a> (use link to view this result on its own page)
            </h4>
        `.trim()
        : "";

    const u = `
        <div class="game_header">${corrr}</div>
        <div id="main_content_area">
            <div id="results_container">
                <img class="person_image" src="${l}"/>
                <div id="final_results_description">${s}</div>
                ${difficulty_string}
                <div id="overall_vote_statistics">
                    ${c}
                    <table class="final_results_table">
                        <br>
                        <tr>
                            <th>Candidate</th>
                            <th>${e.primary ? "Delegates" : "Electoral Votes"}</th>
                            <th>Popular Votes</th>
                            <th>Popular Vote %</th>
                        </tr>
                        ${r}
                    </table>
                </div>
            </div>
        </div>
        <div id="map_footer">
            <button class="final_menu_button" id="overall_results_button" disabled="disabled">Final Election Results</button>
            <button class="final_menu_button" id="final_election_map_button">Election Map</button>
            <button class="final_menu_button" id="state_results_button">Results by State</button>
            <button class="final_menu_button" id="overall_details_button">Overall Results Details</button>
            <button class="final_menu_button" id="recommended_reading_button">Further Reading</button>
            <button class="final_menu_button" id="play_again_button">Play Again!</button>
        </div>
    `.trim();

    $("#game_window").html(u);
    const $prev = $("#difficulty_mult");

    /* vvvv = setInterval(() => {
        if ($prev) {
            if ($("#difficulty_mult").innerHTML !== $prev.innerHTML) {
                location.reload();
                clearInterval(vvvv);
                document.body.innerHTML = "";
            }
        }
    }, 100); */

    if ($prev.length) {
        const targ = $prev[0];

        const prevObs = new MutationObserver((mutations, obs) => {
            const reload = mutations.some((f) => f.type === "childList" || f.type === "characterData");
            if (reload) {
                window.location.reload();
                obs.disconnect();
            }
        });

        prevObs.observe(targ, {
            childList: true,
            characterData: true,
            subtree: true,
        });
    }

    const electYear = electJson.fields.year;
    const candFName = `${candObj.fields.first_name} ${candObj.fields.last_name}`;
    let p;

    if (e.final_outcome === "win") p = `I won the ${electYear} election as ${candFName}. How would you do?`;
    else if (e.final_outcome === "loss") p = `I lost the ${electYear} election as ${candFName}. How would you do?`;
    else if (e.final_outcome === "tie") {
        p = `I deadlocked the ${electYear} Electoral College as ${candFName}. How would you do?`;
    }
    $("#fb_share_button").click(() => {
        FB.ui(
            {
                display: "popup",
                method: "feed",
                link: `https://www.americanhistoryusa.com${e.game_results_url}`,
                picture: `https://www.americanhistoryusa.com${e.candidate_image_url}`,
                name: p,
                description:
                    "Click to see the Electoral College map from my game, and then try it yourself!",
            },
            (e) => {
            },
        );
    });
}

function getSortedCands() {
    const candsArr = [];
    const mainCand = e.candidate_json.find((f) => f.pk === Number(e.candidate_id));
    candsArr.push({
        candidate: e.candidate_id,
        priority: mainCand.fields.priority,
        color: mainCand.fields.color_hex,
        last_name: mainCand.fields.last_name,
    });
    e.opponents_list.forEach((f) => {
        const opps = e.candidate_json.find((g) => g.pk === Number(f));
        candsArr.push({
            candidate: f,
            priority: opps.fields.priority,
            color: opps.fields.color_hex,
            last_name: opps.fields.last_name,
        });
    });
    sortByProp(candsArr, "priority");
    return candsArr;
}

function finalMapScreenHtml() {
    const coloredResults = mapResultColor(500);
    const candsArray = getSortedCands();
    const election = e.election_json.find((f) => Number(f.pk) === Number(e.election_id));
    const candResultText = candsArray.map((f) => {
        const s = e.final_overall_results.find((g) => g.candidate === f.candidate);
        const l = s ? s.electoral_votes : 0;
        return `
            <li>
                <span style="color:${f.color}; background-color: ${f.color}">--</span> ${f.last_name}: ${l}
            </li>
        `;
    }).join("");
    const resHtml = `
        <div class="game_header">${corrr}</div>
        <div id="main_content_area">
            <div id="map_container"></div>
            <div id="menu_container">
                <div id="overall_result_container">
                    <div id="overall_result">
                        <h3>ELECTORAL VOTES</h3>
                        <ul>${candResultText}</ul>
                        <p>${election.fields.winning_electoral_vote_number} to win</p>
                    </div>
                </div>
                <div id="state_result_container">
                    <div id="state_result">
                        <h3>STATE RESULTS</h3>
                        <p>Click on a state to view final results.</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="map_footer">
            <button class="final_menu_button" id="overall_results_button">Final Election Results</button>
            <button class="final_menu_button" id="final_election_map_button" disabled="disabled">Election Map</button>
            <button class="final_menu_button" id="state_results_button">Results by State</button>
            <button class="final_menu_button" id="overall_details_button">Overall Results Details</button>
            <button class="final_menu_button" id="recommended_reading_button"> Further Reading </button>
            <button class="final_menu_button" id="play_again_button">Play Again!</button>
        </div>`.trim();
    $("#game_window").html(resHtml);
    $("#map_container").usmap(coloredResults);
}

const k = (e) => e.map((f) => `<option value="${f.state}">${f.name}</option>`).join("");

function stateResultsHtml() {
    const stateBase = [];
    const stateEVs = [];
    const statePVMargin = [];

    e.final_state_results.forEach((f) => {
        const n = e.states_json.find((g) => g.pk === f.state);
        stateBase.push({
            state: n.pk,
            name: n.fields.name,
        });
        stateEVs.push({
            state: n.pk,
            name: n.fields.name,
            electoral_votes: n.fields.electoral_votes,
        });
        statePVMargin.push({
            state: n.pk,
            name: n.fields.name,
            pct_margin: f.result[0].percent - f.result[1].percent,
        });
    });

    sortByProp(stateBase, "name");
    stateEVs.sort((a, b) => b.electoral_votes - a.electoral_votes);
    sortByProp(statePVMargin, "pct_margin");
    const l = [];
    const o = [];
    e.final_overall_results.forEach((f) => {
        const candObj = e.candidate_json.find((c) => c.pk === f.candidate);
        const d = e.final_state_results
            .filter((r) => r.result[0].candidate === f.candidate)
            .map((r) => {
                const pct_margin = r.result[0].percent - r.result[1].percent;
                const stateObj = e.states_json.find((g) => g.pk === r.state);
                return {
                    state: stateObj.pk,
                    name: stateObj.fields.name,
                    pct_margin,
                };
            })
            .sort((a, b) => a.pct_margin - b.pct_margin);
        const c = e.final_state_results
            .flatMap((g) => g.result
                .filter((h) => h.candidate === f.candidate)
                .map((h) => {
                    const stateObj = e.states_json.find((i) => i.pk === g.state);
                    return {
                        state: stateObj.pk,
                        name: stateObj.fields.name,
                        vote_pct: h.percent,
                    };
                }))
            .sort((a, b) => b.vote_pct - a.vote_pct);
        l.push({
            candidate: f.candidate,
            last_name: candObj.fields.last_name,
            values: d,
        });
        o.push({
            candidate: f.candidate,
            last_name: candObj.fields.last_name,
            values: c,
        });
    });
    const m = l
        .map((f, idx) => (f.values.length > 0
            ? `<option value="${10 + idx}">Closest ${f.last_name} Wins</option>`
            : ""))
        .filter(Boolean)
        .join("");
    const g = o
        .map((f, idx) => (f.values.length > 0
            ? `<option value="${20 + idx}">Highest ${f.last_name} %</option>`
            : ""))
        .filter(Boolean)
        .join("");

    const j = `
        <div class="game_header">${corrr}</div>
        <div id="main_content_area">
            <div id="results_container">
                <h3 class="title_h3">Election Results and Data by State</h3>
                    <div id="drop_down_area_state">
                        <div id="sort_tab_area">
                            <p>View states by:
                                <select id="sort_tab">
                                    <option value="1">Alphabetical</option>
                                    <option value="2">Most Electoral Votes</option>
                                    <option value="3">Closest States</option>
                                    ${m}
                                    ${g}
                                </select>
                            </p>
                        </div>
                        <div id="state_tab_area">
                            <p>Select a state:
                                <select id="state_tab">${k(stateBase)}</select>
                            </p>
                        </div>
                    </div>
                <div id="state_result_data_summary">${T(stateBase[0].state)}</div>
            </div>
            <div id="results_container_description"></div>
        </div>
        <div id="map_footer">
            <button class="final_menu_button" id="overall_results_button">Final Election Results</button>
            <button class="final_menu_button" id="final_election_map_button">Election Map</button>
            <button class="final_menu_button" id="state_results_button" disabled="disabled">Results by State</button>
            <button class="final_menu_button" id="overall_details_button">Overall Results Details</button>
            <button class="final_menu_button" id="recommended_reading_button">Further Reading</button>
            <button class="final_menu_button" id="play_again_button">Play Again!</button>
        </div>
    `.trim();
    $("#game_window").html(j);
    const $stateTab = $("#state_tab");
    $("#sort_tab").change(() => {
        let candIdx;
        let optionsHtml;
        const $sortTab = $("#sort_tab");
        const $sortTabValue = Number($sortTab.val());

        if ($sortTabValue === 1) optionsHtml = k(stateBase);
        else if ($sortTabValue === 2) optionsHtml = k(stateEVs);
        else if ($sortTabValue === 3) optionsHtml = k(statePVMargin);
        else if ($sortTabValue >= 10 && $sortTabValue <= 19) {
            candIdx = $sortTabValue - 10;
            optionsHtml = k(l[candIdx].values);
        } else {
            candIdx = $sortTabValue - 20;
            optionsHtml = k(o[candIdx].values);
        }
        $stateTab.html(optionsHtml);
        const n = T($stateTab.val());
        $("#state_result_data_summary").html(n);
    });
    $stateTab.change(() => {
        const e = T($stateTab.val());
        $("#state_result_data_summary").html(e);
    });
}

function overallDetailsHtml() {
    const totalPV = e.final_overall_results.reduce((sum, f) => sum + f.popular_votes, 0);

    const a = e.final_overall_results.map((f) => {
        const candObj = e.candidate_json.find((g) => g.pk === f.candidate);
        const colorHex = candObj.fields.color_hex;
        return `
            <tr>
                <td style="text-align: left;">
                    <span style="background-color: ${colorHex}; color: ${colorHex};">----</span>
                    ${candObj.fields.first_name} ${candObj.fields.last_name}
                </td>
                <td>${f.electoral_votes}</td>
                <td>${formatNumbers(f.popular_votes)}</td>
                <td>${((f.popular_votes / totalPV) * 100).toFixed(e.finalPercentDigits)}%</td>
            </tr>
        `;
    }).join("").replace(/>\s+</g, "><");

    const l = e.percentile !== "None"
        ? `<p>You have done better than approximately <strong>${e.percentile}%</strong> of the games that have been played with your candidate and difficulty level.</p>`
        : "";
    let _ = "";
    if (e.historical_overall !== "None") {
        const o = e.historical_overall.map((f) => {
            const colorHex = f.color_hex;
            return `
            <tr>
                <td style="text-align: left;">
                    <span style="background-color: ${colorHex}; color: ${colorHex};">----</span> ${f.name}
                </td>
                <td>${f.winning_pct.toFixed(2)}</td>
                <td>${f.electoral_votes_avg.toFixed(1)}</td>
                <td>${formatNumbers(f.popular_votes_avg)}</td>
                <td>${f.popular_vote_pct_avg.toFixed(2)}</td>
                <td>${f.electoral_votes_min} - ${f.electoral_votes_max}</td>
                <td>${formatNumbers(f.popular_votes_min)} - ${formatNumbers(f.popular_votes_max)}</td>
            </tr>
            `;
        }).join("");

        _ = `
            <div id="overall_stat_details">
                <h4>Historical Results - Your Candidate and Difficulty Level</h4>
                <table>
                    <tr>
                        <th>Candidate</th>
                        <th>Candidate</th>
                        <th>Win %</th>
                        <th>EV Avg.</th>
                        <th>PV Avg.</th>
                        <th>PV % Avg.</th>
                        <th>EV Range</th>
                        <th>PV Range</th>
                    </tr>
                    ${o}
                </table>
            </div>
        `;
    }

    const currentURL = window.location.href;
    const urlParts = currentURL.split("/");
    const base_url = urlParts[2];
    const game_url = e.game_id ? `https://${base_url}/games/viewGame.html#${e.game_id}` : null;

    const histRes = HistName.map((name, i) => `
        <tr>
            <td style="text-align: left;">
                <span style="background-color:${HistHexcolour[i]}; color:${HistHexcolour[i]};">----</span>${name}
            </td>
            <td>${HistEV[i]}</td>
            <td>${HistPV[i]}</td>
            <td>${HistPVP[i]}</td>
        </tr>
    `).join("").trim();

    const r = `
            <div class="game_header">${corrr}</div>
            <div id="main_content_area">
                <div id="overall_details_container">
                    <h3>Overall Election Details</h3>
                    <div id="overall_election_details">
                        <h4>Results - This Game</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Candidate</th>
                                    <th>Electoral Votes</th>
                                    <th>Popular Votes</th>
                                    <th>Popular Vote %</th>
                                </tr>
                                ${a}
                            </tbody>
                        </table>
                        ${l}
                    </div>
                    <div id="overall_election_details">
                        <h4>Results - Historical</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Candidate</th>
                                    <th>Electoral Votes</th>
                                    <th>Popular Votes</th>
                                    <th>Popular Vote %</th>
                                </tr>
                                ${histRes}
                            </tbody>
                        </table>
                        <p>
                            <b>
                                <a style="font-size: 15px;" href="${game_url}">GAME LINK</a>
                                <br>
                                <button id="ExportFileButton" onclick="exportResults()" style="position: absolute; margin-top: 10px; margin-left: -70px;">Export Game as File</button>
                            </b>
                        </p>
                        <br><br><br>
                    </div>
                </div>
                <div id="map_footer">
                    <button class="final_menu_button" id="overall_results_button">Final Election Results</button>
                    <button class="final_menu_button" id="final_election_map_button">Election Map</button>
                    <button class="final_menu_button" id="state_results_button">Results by State</button>
                    <button class="final_menu_button" id="overall_details_button" disabled="disabled">Overall Results Details</button>
                    <button class="final_menu_button" id="recommended_reading_button">Further Reading</button>
                    <button class="final_menu_button" id="play_again_button">Play Again!</button>
                </div>
            </div>
        </div>
    `.trim();
    $("#game_window").html(r);
}

function furtherReadingHtml() {
    const election = e.election_json.find((f) => Number(f.pk) === Number(e.election_id));
    let contentHTML = "";
    if (RecReading !== true && modded === true) {
        // Modded and no recommended reading
        contentHTML = `
        <p>This election has no further reading.</p>
    `.trim();
    } else {
        // Has recommended reading (modded or base game)
        contentHTML = `
        <p>
            Are you interested in exploring the ${election.fields.year} election further?
            This page contains some further reading to get you up to speed.
        </p>
        <div id="recommended_reading_box">
            ${election.fields.recommended_reading}
        </div>
    `.trim();
    }

    const i = `
        <div class="game_header">${corrr}</div>
        <div id="main_content_area_reading">
            <h3 class="results_tab_header">Further Reading</h3>
            ${contentHTML}
        </div>
        <div id="map_footer" style="margin-top:-35px">
            <button class="final_menu_button" id="overall_results_button">
                Final Election Results
            </button>
            <button class="final_menu_button" id="final_election_map_button">
                Election Map
            </button>
            <button class="final_menu_button" id="state_results_button">
                Results by State
            </button>
            <button class="final_menu_button" id="overall_details_button">
                Overall Results Details
            </button>
            <button class="final_menu_button" id="recommended_reading_button" disabled="disabled">
                Further Reading
            </button>
            <button class="final_menu_button" id="play_again_button">
                Play Again!
            </button>
        </div>
    `;

    $("#game_window").html(i);
}

function beginNewGameHtml() {
    const election = e.election_json.find((f) => Number(f.pk) === Number(e.election_id));
    $("#game_window").append(`
        <div class="overlay" id="new_game_overlay"></div>
        <div class="overlay_window" id="new_game_window">
            <div class="overlay_window_content" id="election_night_content">
                <h3>Advisor Feedback</h3>
                <img src="${election.fields.advisor_url}" width="208" height="128"/>
                <p>Are you sure you want to begin a new game?</p>
            </div>
            <div class="overlay_buttons" id="new_game_buttons">
                <button id="new_game_button">Yes</button>
                <br>
                <button id="cancel_button">No</button>
            </div>
        </div>`.trim());

    $("#new_game_button").click(() => {
        if (modded) {
            const hotload = e.hotload || $("#modSelect")[0].value;
            if (hotload !== "other") {
                window.localStorage.setItem("hotload", hotload);
            }
        }
        window.location.reload();
    });
    $("#cancel_button").click(() => {
        $("#new_game_overlay").remove();
        $("#new_game_window").remove();
    });
}

function T(t) {
    const numT = Number(t);

    return e.final_state_results
        .filter((result) => result.state === numT)
        .map((result) => {
             const rows = result.result.map((f) => {
                const candidate = e.candidate_json.find((g) => g.pk === Number(f.candidate));
                const fullName = `${candidate.fields.first_name} ${candidate.fields.last_name}`;
                return `
                    <tr>
                        <td>${fullName}</td>
                        <td>${formatNumbers(f.votes)}</td>
                        <td>${(f.percent * 100).toFixed(e.statePercentDigits)}</td>
                        <td>${f.electoral_votes}</td>
                    </tr>
                `;
            }).join("");

            return `
                <h4>Results - This Game</h4>
                <table>
                    <tr>
                        <th>Candidate</th>
                        <th>Popular Votes</th>
                        <th>Popular Vote %</th>
                        <th>Electoral Votes</th>
                    </tr>
                    ${rows}
                </table>
            `;
        }).join("");
}

function A(t) {
    // let candIdOpponents = [e.candidate_id, ...e.opponents_list];
    // candIdOpponents = [...new Set(candIdOpponents.filter((x) => Number(x)))];
    const candIdOpponents = [...new Set([e.candidate_id, ...e.opponents_list].filter((x) => Number(x)))];
    // global answer scores
    const gAnsScoresMap = new Map();
    e.answer_score_global_json.forEach((f) => {
        const {
            answer, candidate, affected_candidate, global_multiplier,
        } = f.fields;
        const key = `${answer}_${candidate}_${affected_candidate}`;
        gAnsScoresMap.set(key, global_multiplier);
    });

    const candsGAnsScores = candIdOpponents.map((candidate) => {
        const ansScores = e.player_answers.map((answer) => {
            const key = `${answer}_${e.candidate_id}_${candidate}`;
            return gAnsScoresMap.get(key) ?? 0;
        });

        const cumulScores = ansScores.reduce((acc, score) => acc + score, 0);

        const o = candidate === e.candidate_id && cumulScores < -0.4 ? 0.6 : 1 + cumulScores;

        const variance = e.global_parameter_json[0].fields.global_variance;
        const rand = 1 + randomNormal(candidate) * variance;

        const c = candidate === e.candidate_id
            ? o * rand * e.difficulty_level_multiplier
            : o * rand;

        return {
            candidate,
            global_multiplier: Number.isNaN(c) ? 1 : c,
        };
    });

    const candsIssueScores = candIdOpponents.map((candidate) => {
        const v = e.candidate_issue_score_json
            .filter((item) => item.fields.candidate === candidate)
            .map((item) => ({
                issue: item.fields.issue,
                issue_score: item.fields.issue_score,
            }));

        return {
            candidate_id: candidate,
            issue_scores: removeIssueDuplicates(v),
        };
    });

    const candsStateMults = candIdOpponents.map((f, idx) => {
        e.candidate_state_multiplier_json = e.candidate_state_multiplier_json.filter(
            (f) => f.model === "campaign_trail.candidate_state_multiplier"
        );
        const stateMults = e.candidate_state_multiplier_json
            .filter((g) => g.fields.candidate === f)
            .map((g) => {
                const rand = randomNormal(g.fields.candidate);
                const p = g.fields.state_multiplier
                    * candsGAnsScores[idx].global_multiplier
                    * (1 + rand * e.global_parameter_json[0].fields.global_variance);

                return {
                    state: g.fields.state,
                    state_multiplier: p,
                };
            }).sort((a, b) => a.state - b.state);

        return {
            candidate_id: f,
            state_multipliers: stateMults,
        };
    });

    candsIssueScores[0].issue_scores = candsIssueScores[0].issue_scores.map((f) => {
        const { issue } = f;
        const runIssue = e.running_mate_issue_score_json.find((f) => f.fields.issue === issue);
        if (!runIssue) {
            console.warn(`No running mate issue for issue ${issue}`);
            return f;
        }

        const playerAns = e.player_answers;

        const { g, b } = e.answer_score_issue_json
            .filter(
                (answ) => answ.fields.issue === issue && playerAns.includes(answ.fields.answer),
            )
            .reduce((acc, answ) => {
                acc.g += answ.fields.issue_score * answ.fields.issue_importance;
                acc.b += answ.fields.issue_importance;
                return acc;
            }, { g: 0, b: 0 });

        const globalParam = e.global_parameter_json[0];

        const finalScore = (f.issue_score
                * globalParam.fields.candidate_issue_weight
                + runIssue.fields.issue_score
                * globalParam.fields.running_mate_issue_weight
                + g)
            / (
                globalParam.fields.candidate_issue_weight
                + globalParam.fields.running_mate_issue_weight
                + b
            );

        return {
            ...f,
            issue_score: finalScore,
        };
    });

    candIdOpponents.forEach((cand, idx) => {
        candsStateMults[idx].state_multipliers.forEach((mult) => {
            const { state } = mult;

            const w = e.player_answers
                .reduce((acc, playerAns) => acc + e.answer_score_state_json.reduce((acc2, ans) => ((
                    ans.fields.state === state
                    && ans.fields.answer === playerAns
                    && ans.fields.candidate === e.candidate_id
                    && ans.fields.affected_candidate === cand)
                    ? acc2 + ans.fields.state_multiplier
                    : acc2), 0), 0);

            let boost = 0;
            if (idx === 0) {
                if (e.running_mate_state_id === state) boost += 0.004 * mult.state_multiplier;
            }
            e.player_visits.forEach((h) => {
                if (h === state) {
                    boost += 0.005
                        * Math.max(0.1, mult.state_multiplier)
                        * (e.shining_data.visit_multiplier ?? 1);
                }
            });
            // eslint-disable-next-line no-param-reassign
            mult.state_multiplier += w + boost;
        });
    });

    const calcStatePolls = candsStateMults[0].state_multipliers.map((f) => {
        const finalStatePoll = candIdOpponents.map((candId, r) => {
            const hasSm = candsStateMults[r].state_multipliers.some((s) => s.state === f.state);
            if (!hasSm) {
                return {
                    candidate: candId,
                    result: 0,
                };
            }
            let score = candsIssueScores[r].issue_scores.reduce((acc, iss) => {
                const globalParam = e.global_parameter_json[0];
                const match = e.state_issue_score_json.find(
                    (s) => s.fields.state === f.state && s.fields.issue === iss.issue,
                );

                let stateScore = 0;
                let issueWeight = 1;

                if (match) {
                    stateScore = match.fields.state_issue_score;
                    issueWeight = match.fields.weight;
                }

                const S = iss.issue_score * Math.abs(iss.issue_score);
                const E = stateScore * Math.abs(stateScore);

                return acc + (globalParam.fields.vote_variable - Math.abs((S - E) * issueWeight));
            }, 0);

            const sm = candsStateMults[r].state_multipliers.find((s) => s.state === f.state);
            const C = sm ? sm.state_multiplier : 0;

            if (DEBUG) {
                console.log(`From key ${r} into f, state multiplier: ${C}`);
            }

            score *= C;
            score = Math.max(score, 0);

            return {
                candidate: candId,
                result: score,
            };
        });

        return {
            state: f.state,
            result: finalStatePoll,
        };
    });

    const stateMap = new Map(e.states_json.map((f) => [f.pk, f.fields.abbr]));

    calcStatePolls.forEach((f) => {
        // eslint-disable-next-line no-param-reassign
        f.abbr = stateMap.get(f.state)
            ?? e.states_json.find((g) => g.pk === f.state)?.fields.abbr
            ?? null;
    });

    calcStatePolls.forEach((f) => {
        const state = e.states_json.find((g) => g.pk === f.state);
        const M = state ? Math.floor(state.fields.popular_votes * (0.95 + 0.1 * Math.random())) : 0;

        const total = f.result.reduce((acc, g) => acc + g.result, 0);

        f.result.forEach((g) => {
            /* eslint-disable no-param-reassign */
            const N = g.result / total;
            g.percent = N;
            g.votes = Math.floor(N * M);
            /* eslint-enable no-param-reassign */
        });
    });

    calcStatePolls.forEach((f) => {
        const state = e.states_json.find((g) => g.pk === f.state);
        const O = state ? state.fields.electoral_votes : 0;
        f.result.sort((a, b) => b.percent - a.percent);
        const gameType = Number(e.game_type_id);
        if ([1, 3].includes(gameType)) {
            if (state.fields.winner_take_all_flg === 1) {
                f.result.forEach((g, idx) => {
                    g.electoral_votes = idx === 0 ? O : 0;
                });
            } else {
                const H = f.result.reduce((acc, g) => acc + g.votes, 0);
                const L = Math.ceil((f.result[0].votes / H) * O * 1.25);
                const D = O - L;
                f.result.forEach((g, idx) => {
                    const h = g;
                    switch (idx) {
                        case 0:
                            h.electoral_votes = L;
                            break;
                        case 1:
                            h.electoral_votes = D;
                            break;
                        default:
                            h.electoral_votes = 0;
                    }
                });
            }
        }

        if (gameType === 2) {
            const V = f.result.map((g) => g.percent);
            const q = divideElectoralVotesProp(V, O);
            f.result.forEach((g, idx) => {
                // eslint-disable-next-line no-param-reassign
                g.electoral_votes = q[idx];
            });
        }
    });

    if (e.primary_states) {
        const primaryStates = JSON.parse(e.primary_states);
        // Create a new copy of the primary states array using the spread operator
        const primM = [...primaryStates].map((f) => f.state);

        calcStatePolls.forEach((f) => {
            if (primM.includes(f.state)) {
                const indexOfed = primM.findIndex((state) => state === f.state);
                // eslint-disable-next-line no-param-reassign
                f.result = primaryStates[indexOfed].result;
            }
        });
    }

    if (t === 1) return calcStatePolls;
    if (t === 2) {
        return calcStatePolls.map((f) => {
            const res = f.result.map((candidate) => {
                const G = 1 + randomNormal() * e.global_parameter_json[0].fields.global_variance;
                return {
                    ...candidate,
                    result: candidate.result * G,
                };
            });
            const stateData = e.states_json.find((state) => state.pk === f.state);
            const M = Math.floor(stateData.fields.popular_votes * (0.95 + 0.1 * Math.random()));
            const total = res.reduce((acc, candidate) => acc + candidate.result, 0);
            const N = res.map((candidate) => ({
                ...candidate,
                percent: candidate.result / total,
                votes: Math.floor(candidate.percent * M),
            }));
            return {
                ...f,
                result: N,
            };
        });
    }
}

const gameStart = (a) => {
    a.preventDefault();

    document.getElementById("modloaddiv").style.display = "none";
    document.getElementById("modLoadReveal").style.display = "none";
    document.getElementById("featured-mods-area").style.display = "none";

    const tempOptions = e.temp_election_list.map((election) => {
        if (election.is_premium === 0 || [1, true].includes(e.show_premium)) {
            return `<option value="${election.id}">${election.display_year}</option>`;
        }

        return `<option value="${election.id}" disabled>${election.display_year}</option>`;
    }).join("");

    e.election_id ??= e.election_json[0].pk;
    const election = e.election_json.find((f) => Number(f.pk) === Number(e.election_id));
    document.getElementById("game_window").innerHTML = `
        <div class="game_header">${corrr}</div>
        <div class="inner_window_w_desc" id="inner_window_2">
            <div id="election_year_form">
                <form name="election_year">
                    <p>
                        <h3>${e.SelectText}</h3>
                        <select name="election_id" id="election_id">${tempOptions}</select>
                    </p>
                </form>
                <div class="election_description_window" id="election_description_window">
                    <div id="election_image">
                        <img src="${election.fields.image_url}" width="300" height="160"/>
                    </div>
                    <div id="election_summary">${election.fields.summary}</div>
                </div>
            </div>
        <p>
            <button id="election_id_button">Continue</button>
        </p>
        <p id="credits">This scenario was made by ${e.credits}.</p>
    `;

    const electionId = document.getElementById("election_id");
    electionId.value = e.election_id;
    electionId.addEventListener("change", () => {
        const selectedElection = e.election_json.find((f) => Number(f.pk) === Number(electionId.value));
        e.election_id = selectedElection.pk;

        document.getElementById("election_description_window").innerHTML = `
            <div id="election_image">
                <img src="${selectedElection.fields.image_url}" width="300" height="160"/>
            </div>
            <div id="election_summary">${selectedElection.fields.summary}</div>
        `;
    });

    document.getElementById("election_id_button").addEventListener("click", candSel);
};

// $("#game_start").click(gameStart);
document.getElementById("game_start").addEventListener("click", gameStart);
document.getElementById("skip_to_final")?.addEventListener("click", () => {
    e.final_state_results = A(1);
    electionNight();
});

document.addEventListener("DOMContentLoaded", () => {
    const handlers = {
        "#candidate_id_button": (event) => vpSelect(event),
        "#candidate_id_back": (event) => gameStart(event),
        "#running_mate_id_button": (event) => {
            const runningMateId = document.querySelector("#running_mate_id");
            event.preventDefault();
            if (!(document.getElementById("question_form") || document.querySelector(".visit_text"))) {
                renderOptions(e.election_id, e.candidate_id, runningMateId.value);
            }
        },
        "#running_mate_id_back": (event) => candSel(event),
        "#opponent_selection_id_back": (event) => vpSelect(event),
        "#view_electoral_map": () => openMap(A(2)),
        "#shining_menu_button": () => shining_menu(A(2)),
        "#answer_select_button": (event) => onAnswerSelectButtonClicked(event),
        "#resume_questions_button": () => questionHTML(A(2)),
        "#AdvisorButton": (event) => {
            event.preventDefault();

            campaignTrail_temp.answer_feedback_flg = 1 - campaignTrail_temp.answer_feedback_flg;

            const newButtonText = (campaignTrail_temp.answer_feedback_flg === 1)
                ? "Disable advisor feedback"
                : "Enable advisor feedback";

            $(event.target).text(newButtonText);
        },
        "#margin_switcher": (event) => {
            event.preventDefault();

            campaignTrail_temp.margin_format = campaignTrail_temp.margin_format === "#c9c9c9"
                ? "#fff"
                : "#c9c9c9";
            window.localStorage.setItem(
                "margin_form",
                campaignTrail_temp.margin_format,
            );

            const pollingData = A(2);
            const mapOptions = rFunc(pollingData, 0);

            $("#map_container").remove();
            $('#main_content_area').prepend('<div id="map_container"></div>');

            $("#map_container").usmap(mapOptions);
        },
        "#overall_results_button": () => overallResultsHtml(),
        "#final_election_map_button": () => finalMapScreenHtml(),
        "#state_results_button": () => stateResultsHtml(),
        "#overall_details_button": () => overallDetailsHtml(),
        "#recommended_reading_button": () => furtherReadingHtml(),
        "#play_again_button": () => beginNewGameHtml(),
    };

    document.body.addEventListener("click", (event) => {
        Object.entries(handlers).some(([selector, handler]) => {
            if (event.target.matches(selector)) {
                event.preventDefault();
                if (handler.length === 1) handler(event);
                else handler();
                return true;
            }
            return false;
        });
    });
});

let curElectSelect = null;

const fix1964 = () => {
    const electionSelect = document.querySelector("#election_id");
    const electionId = Number(electionSelect.value);
    const credits = document.querySelector("#credits");
    if (electionId === 69) {
        credits.innerHTML = "This scenario was made by Tex.";
    } else if (electionId > -1 && !modded) {
        credits.innerHTML = "This scenario was made by Dan Bryan.";
    }
};

const fix1964Observer = new MutationObserver((mut, obs) => {
    const newElectSelect = document.querySelector("#election_id");
    if (newElectSelect && newElectSelect !== curElectSelect) {
        if (curElectSelect) {
            curElectSelect.removeEventListener("change", fix1964);
        }
        curElectSelect = newElectSelect;
        curElectSelect.addEventListener("change", fix1964);
        fix1964();
    }
    if (document.querySelector(".inner_window_question")) obs.disconnect();
});

fix1964Observer.observe(document.body, {
    childList: true,
    subtree: true,
});
