/*
 * Mod Title: 2025 NJ
 * Mod Author: AwfulAtSocializing
 * Mod Version: 1.0.1
 * Mod Description: 2025 New Jersey gubernatorial election
 * 
 * Coding License: Apache License 2.0
 * Writing License: Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)
 * 
 * For the coding in this mod, I hereby release the code under the terms and conditions of the Apache License 2.0. The full text of the license can be found at:
 * https://choosealicense.com/licenses/apache-2.0/
 * 
 * For the writing in this mod, including documentation, text files, and other non-software written works, I hereby release the content under the terms and conditions of the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) license. The full text of the license can be found at:
 * https://creativecommons.org/licenses/by-nc/4.0/legalcode
 * 
 * By using, distributing, or modifying this mod, you agree to abide by the terms and conditions of both the Apache License 2.0 and the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) license.
*/

RecReading=true

e = campaignTrail_temp;

nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#415070";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#415070";

document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$(".container")[0].style.backgroundColor = "#647bac";

document.getElementById("header").src = "https://i.imgur.com/JZDmO6w.jpeg";

let observerRunning = false;
let processedNodes = new Set();
const scrollableElementIds = ["overall_result", "state_result", "state_info", "main_content_area", "final_results_description"];
let campaign_sign = null;

async function handleMutations(mutationsList, observer) {
    if (observerRunning) return;
    observerRunning = true;

    // stop observing
    observer.disconnect();

    const state_info = document.getElementById("state_info")
    if (state_info) {
        const state_info_header = state_info.children[0];
        if (state_info_header && state_info_header.textContent !== "COUNTY SUMMARY") {
            state_info_header.textContent = "COUNTY SUMMARY";
        }
    }

    const overall_result = document.getElementById("overall_result");
    if (overall_result) {
        const overall_result_header = overall_result.children[0];
        if (overall_result_header && overall_result_header.textContent === "ELECTORAL VOTES") {
            overall_result_header.textContent = "OVERALL RESULTS";
        }
    }

    const state_result = document.getElementById("state_result");
    if (state_result) {
        const state_result_header = state_result.children[0];
        if (state_result_header && state_result_header.textContent !== "COUNTY RESULTS") {
            state_result_header.textContent = "COUNTY RESULTS";
        }
        const state_result_text = state_result.children[1];
        if (state_result_text) {
            if (state_result_text.textContent === "Click on a state to view final results.") {
                state_result_text.textContent = "Click on a county to view final results.";
            } else if (state_result_text.textContent === "Click on a state to view detailed results (once returns for that state arrive).") {
                state_result_text.textContent = "Click on a county to view detailed results (once returns for that county arrive).";
            } else if (state_result_text.textContent === "Returns for this state are not yet available!") {
                state_result_text.textContent = "Returns for this county are not yet available!";
            }
        }
    }

    const state_results_button = document.getElementById("state_results_button");
    if (state_results_button && state_results_button.textContent === "Results by State") {
        state_results_button.textContent = "Results by County";      
    }

    const headers = document.getElementsByClassName("title_h3");
    for (const header of headers) {
        if (header.textContent === "Election Results and Data by State") {
            header.textContent = "Election Results and Data by County";
        }
    }

    const sort_tab = document.getElementById("sort_tab");
    if (sort_tab && sort_tab.querySelector('option[value="2"]')) {
        const queryTwo = sort_tab.querySelector('option[value="2"]');
        if (queryTwo) {
            queryTwo.remove();
        }
    }

    if (sort_tab && sort_tab.querySelector('option[value="3"]')) {
        const queryThree = sort_tab.querySelector('option[value="3"]');
        if (queryThree.textContent === "Closest States") {
            queryThree.textContent = "Closest Counties"
        }
    }

    const sort_tab_area = document.getElementById("sort_tab_area");
    if (sort_tab_area) {
        const sort_text = sort_tab_area.firstElementChild.firstChild;
        if (sort_text.textContent.startsWith("View states by:")) {
            sort_text.textContent = "View counties by:" + sort_text.textContent.slice("View counties by:".length);
        }
    }

    const state_tab_area = document.getElementById("state_tab_area");
    if (state_tab_area) {
        const state_text = state_tab_area.firstElementChild.firstChild;
        if (state_text.textContent.startsWith("Select a state:")) {
            state_text.textContent = "Select a county:" + state_text.textContent.slice("Select a county:".length);
        }
    }

    // Resume observing
    observer.observe(document.documentElement, { childList: true, subtree: true });
    observerRunning = false;
}

let singleObserver = new MutationObserver(handleMutations);
singleObserver.observe(document.documentElement, { childList: true, subtree: true });

HistHexcolour=["#2a3fde","#d41c18","#bfa72c","#AA0000"];
HistName=[" Mikie Sherrill"," Jack Ciattarelli"," Vic Kaplan"," Joanne Kuniansky"];
HistEV=["0","0","0","0"];
HistPV=["1,896,610","1,417,705","11,880","8,164"];
HistPVP=["56.88%","42.52%","0.36%","0.24%"];

campaignTrail_temp.modBoxTheme = {
     "header_color": "#edb245",
     "header_text_color": "#000000",
     "description_text_color": "#000000",
     "description_background_color": "#f3eea3",
     "main_color": "#e0c467",
     "secondary_color": "#eda92c",
     "ui_text_color": "#000000"
}

document.getElementById("inner_window_1").children[0].innerHTML = `<h3>Do you have what it takes to win a New Jersey gubernatorial election?</h3>`

document.getElementById("inner_window_1").children[1].innerHTML = `<li>Select a candidate and a running mate to find out.</li><li>You will answer questions about your platform and positions, and also about your campaign strategy.</li><li>The answers will affect your popularity for better or worse, both statewide and in individual counties.</li><li>Walk the fine line between appealing to your base and winning a majority of the votes.</li><li>Context details are included for <span class='mytooltip'>highlighted<span class='mytooltiptext'>This is a context detail.</span></span> text.</li>`;

campaignTrail_temp.HomeStateText = "Home County:"

document.body.background = "https://i.imgur.com/jgAM6Q5.jpeg";

document.head.innerHTML += "<style>#results_container {color:#000000;}</style>";
e.election_json = [
    {
        "model":"campaign_trail.election",
        "pk": 20,
        "fields": {
            "year": 2025,
            "summary": "The 2021 and 2024 elections saw New Jersey shift sharply to the right, shocking many in and out of the state. After eight years of Democratic rule, New Jersey could now not only shift - but flip. <list><ul><li>Mikie Sherrill has secured the Democratic nomination in a wide field of candidates, and now moves on to the general election. She is a more moderate candidate, and needs to focus on affordability and opposing some of President Trump's more unpopular decisions.</li>\n<li>Jack Ciattarelli has cruised to the Republican nomination, and faces an uphill battle in the general election. He needs to walk a fine line with his support for President Trump, and focus on affordability despite the unfavorable national environment.</li></ul>\n</list>",
            "image_url":"https://i.imgur.com/t3RGS7i.jpeg",
            "winning_electoral_vote_number": 0,
            "advisor_url":"https://static01.nyt.com/images/2025/11/04/multimedia/eln-POST-2025-11-04-state-nj-36b186/eln-POST-2025-11-04-state-nj-36b186-videoSixteenByNineJumbo1600.jpg",
            "recommended_reading":"<div style='overflow-y:scroll;height:370px;margin-bottom:0px;'><p><b><u>Helpful Sources</b></u></p> <p><a href='https://www.nj.com/politics/2025/10/the-nastiest-race-in-nj-gov-history-just-got-uglier-heres-why-sherrills-cheap-shot-worked.html' target='_blank'>The nastiest race in N.J. gov history just got uglier. Here's why Sherrill's cheap shot worked.</a> <br> <a href='https://www.nytimes.com/2025/10/13/nyregion/opioids-nj-governor-race.html' target='_blank'>Explosive Accusation Shakes Up New Jersey Governor's Race</a> <br> <a href='https://www.tiktok.com/@nytopinion/video/7567718889241546015' target='_blank'>In the New Jersey's governor race, the Democratic candidate, Mikie Sherrill, is polling well. So why is there so much anxiety?</a> <br> <a href='https://newjerseymonitor.com/2024/04/09/republican-jack-ciattarelli-launches-long-anticipated-run-for-governor/' target='_blank'>Republican Jack Ciattarelli launches long-anticipated run for governor</a> <br> <a href='https://newjerseyglobe.com/governor/opinion-trumps-endorsement-of-ciattarelli-is-a-confusing-betrayal-to-the-maga-movement/' target='_blank'>Opinion: Trump's Endorsement of Ciattarelli Is a Confusing Betrayal to the MAGA Movement</a> <br> <a href='https://www.insidernj.com/ciattarelli-outlines-10-point-garden-state-affordability-agenda/' target='_blank'>Ciattarelli Outlines 10-Point Garden State Affordability Agenda</a> <br> <a href='https://newjerseyglobe.com/campaigns/the-new-jersey-globes-2025-convention-tracker/' target='_blank'>The New Jersey Globe's 2025 Convention Tracker</a> <br> <a href='https://www.nj.com/data/2026/03/nj-families-just-got-hit-with-the-nations-biggest-energy-bill-spike-see-the-brutal-numbers.html' target='_blank'>N.J. families just got hit with the nation's biggest energy bill spike. See the brutal numbers.</a> <br> <a href='https://newjerseymonitor.com/briefs/analilia-mejia-wins-nj-special-election/' target='_blank'>Activist Analilia Mejia wins Dem nod in NJ special election</a> <br> <a href='https://whyy.org/articles/new-jersey-election-2026-primary-senate-republican-nomination/' target='_blank'>Justin Murphy wins New Jersey's Republican Senate primary. He'll face Cory Booker in November</a> <br> <p><u><b>Comments</u></b></p> Thank you for playing this mod! This was my first ever mod, and I spent a lot of time struggling with coding and I'm very happy to actually have a finished product to show everyone. I want to give a special thanks to the 2013 NJ mod - the first mod for my home state - which I used for the initial SVG and overall code blueprint. Anyways, go play the mod again! (and also the other 2025 NJ mod, because why not?) <br> <p><u><b>Copyright Stuff</b></u></p> <p>* Mod Title: 2025 NJ<br>* Mod Author: AwfulAtSocializing<br>* Mod Version: 1.0<br>* Mod Description: 2025 New Jersey gubernatorial election<br>* Coding License: Apache License 2.0<br>* Writing License: Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)<br>* For the coding in this mod, I hereby release the code under the terms and conditions of the Apache License 2.0. The full text of the license can be found at: https://choosealicense.com/licenses/apache-2.0/<br>* For the writing in this mod, including documentation, text files, and other non-software written works, I hereby release the content under the terms and conditions of the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) license. The full text of the license can be found at: https://creativecommons.org/licenses/by-nc/4.0/legalcode<br>* By using, distributing, or modifying this mod, you agree to abide by the terms and conditions of both the Apache License 2.0 and the Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) license. <br> <p>.",
            "has_visits": 1,
            "no_electoral_majority_image":"../static/images/2012-no-majority.jpg"
        }
    }
];

e.temp_election_list = [
    {
        "id":20,
        "year":2025,
        "is_premium":0,
        "display_year":"2025 NJ"
    }
];

e.credits = "AwfulAtSocializing";

// necessary so that the right election files are loaded -SM
setInterval(() => {
    const electionSelect = document.getElementById("election_id");
    if (electionSelect) {
        if (electionSelect.value === "20") {
            campaignTrail_temp.code2_id = "2025NJ";
        }
    }
}, 100);

e.global_parameter_json = [
    {
        "model":"campaign_trail.global_parameter",
        "pk":1,
        "fields": {
            "vote_variable": 1.125,
            "max_swing": 0.12,
            "start_point": 0.94,
            "candidate_issue_weight": 10,
            "running_mate_issue_weight": 3,
            "issue_stance_1_max": -0.71,
            "issue_stance_2_max": -0.3,
            "issue_stance_3_max": -0.125,
            "issue_stance_4_max": 0.125,
            "issue_stance_5_max": 0.3,
            "issue_stance_6_max": 0.71,
            "global_variance": 0.01,
            "state_variance": 0.005,
            "question_count": 25,
            "default_map_color_hex": "#C9C9C9",
            "no_state_map_color_hex":"#999999"
        }
    }
];

e.candidate_json = [
    {
        "model":"campaign_trail.candidate",
        "pk":201,
        "fields": {
            "first_name": "Mikie",
            "last_name": "Sherrill",
            "election": 20,
            "party": "Democratic",
            "state": "Essex County",
            "priority": 1,
            "description": "<p>Unsurprisingly, New Jersey Congresswoman Mikie Sherrill has won the Democratic nomination for governor. She won the primaries focusing on her experience, particularly on her service as a Navy helicopter pilot. She faced off against a wide field of diverse candidates and largely succeeded thanks to establishment support, despite a somewhat uninspiring message focused on opposing President Trump.</p><p>In order to win, she must balance her focus on affordability with her focus on Ciattarelli's support of Trump. At the same time, she needs to turn out the more progressive Democratic base, while not sacrificing her relatively moderate message. She is expected to win, but with the polls narrowing to nearly a tossup, that outcome no longer seems so certain.",
            "color_hex":"#2a3fde",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://i.imgur.com/BuA00zb.jpeg",
            "electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>",
            "electoral_loss_message":"<h3>Fake News?</h3>",
            "no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false,
            "scrollable": false
        }
    },
    {
        "model":"campaign_trail.candidate",
        "pk":200,
        "fields": {
            "first_name": "Jack",
            "last_name": "Ciattarelli",
            "election": 20,
            "party": "Republican",
            "state": "Somerset County",
            "priority": 1,
            "description": "<p>Once again, Jack Ciattarelli has won the Republican nomination for governor, this time in a landslide. He already won the nomination back in 2021, and nearly defeated incumbent governor Phil Murphy, losing by just 3% and significantly beating the polls. Since then, he has aligned himself more with President Trump and the MAGA movement, securing an endorsement contested by candidates further to the right.</p><p>In order to win, he needs to balance his support for the unpopular Trump administration, especially since New Jersey still leans Democratic. He will also need to tackle the issue of affordability, and point to rising energy costs in New Jersey. He's unlikely to win, but with the polls narrowing and the poll misses of 2021 and 2024, people are taking a second look at this race.",
            "color_hex": "#d41c18",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://i.imgur.com/2DtKX1e.jpeg",
            "electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>",
            "electoral_loss_message":"<h3>Fake News?</h3>",
            "no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false,
            "scrollable": false
        }
    },
    {
        "model":"campaign_trail.candidate",
        "pk":1003,
        "fields": {
            "first_name": "Dale",
            "last_name": "Caldwell",
            "election": 20,
            "party": "Democratic",
            "state": "Middlesex County",
            "priority": 1,
            "description": "<p>kjsd</p>",
            "color_hex":"#0000ff",
            "secondary_color_hex":null,
            "is_active":0,
            "image_url": "https://i.imgur.com/JeSf4sw.jpeg",
            "electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>",
            "electoral_loss_message":"<h3>Fake News?</h3>",
            "no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>",
            "description_as_running_mate":"<p>Dale Caldwell is the current president of Centenary University, and has worked at many other schools and institutions in the past. His main public service was serving on the New Brunswick Public Schools Board of Education in 1998, serving as president for six years.</p><p>Overall, Caldwell would be a fairly safe choice. He would help to secure significant support from teachers, even though that wasn't looking shaky in the first place. His potential to be the state's first male African American lieutenant governor could also help with African American voters, which have been slowly shifting to the right. He wouldn't make many headlines, but given the oddly close polls, maybe that's a good thing?",
            "candidate_score": 1,
            "running_mate": true,
            "scrollable":false,
            "partner":"1"
        }
    },
    {
        "model":"campaign_trail.candidate",
        "pk":1004,
        "fields": {
            "first_name": "Jim",
            "last_name": "Gannon",
            "election": 20,
            "party": "Republican",
            "state": "Morris County",
            "priority": 1,
            "description": "<p>Jim Gannon is the current Morris County sheriff, and has worked in law enforcement for most of his career. He also worked in the private sector, and has served as a professor at Centenary University. He has consistently won reelection as Morris County sheriff by significant margins, despite the county's gradual leftward shift and unfavorable national environments.</p><p>In summary, Jim Gannon would help balance a more offensive campaign. His experience as Morris County sheriff would help to secure support among police officers, and would be crucial in Morris County itself, where Mikie Sherrill has significant electoral strength. Choosing him would be a safe move overall.</p>",
            "color_hex": "#0000ff",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://i.imgur.com/NQiTTdE.jpeg",
            "electoral_victory_message": "<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>",
            "electoral_loss_message": "<h3>Fake News?</h3>",
            "no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>",
            "description_as_running_mate":"<p>Jim Gannon is the current Morris County sheriff, and has worked in law enforcement for most of his career. He also worked in the private sector, and has served as a professor at Centenary University. He has consistently won reelection as Morris County sheriff by significant margins, despite the county's gradual leftward shift and unfavorable national environments.</p><p>In summary, Jim Gannon would help balance a more offensive campaign. His experience as Morris County sheriff would help to secure support among police officers, and would be crucial in Morris County itself, where Mikie Sherrill has significant electoral strength. Choosing him would be a safe move overall.</p>",
            "candidate_score": 1,
            "running_mate": true,
            "scrollable": false,
            "partner": "1"
        }
    },
    {
        "model":"campaign_trail.candidate",
        "pk":202,
        "fields": {
            "first_name": "Vic",
            "last_name": "Kaplan",
            "election": 20,
            "party": "Libertarian",
            "state": "Hell",
            "priority": 1,
            "description": "Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!",
            "color_hex": "#bfa72c",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "../static/images/barack-obama-2012.jpg",
            "electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>",
            "electoral_loss_message":"<h3>Fake News?</h3>",
            "no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false,
            "scrollable": false
        }
    },
    {
        "model":"campaign_trail.candidate",
        "pk":1006,
        "fields": {
            "first_name": "Dummy",
            "last_name": "Example",
            "election": 20,
            "party": "Example Party",
            "state": "Hell",
            "priority": 1,
            "description": "Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!",
            "color_hex": "#0000ff",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url":"../static/images/barack-obama-2012.jpg",
            "electoral_victory_message": "<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>",
            "electoral_loss_message":"<h3>Fake News?</h3>",
            "no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>",
            "description_as_running_mate":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!",
            "candidate_score": 1,
            "running_mate": true,
            "scrollable": false,
            "partner": "4"
        }
    },
    {
        "model":"campaign_trail.candidate",
        "pk":203,
        "fields": {
            "first_name": "Joanne",
            "last_name": "Kuniansky",
            "election": 20,
            "party": "Example Party",
            "state": "Hell",
            "priority": 1,
            "description": "Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!",
            "color_hex": "#AA0000",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url":"../static/images/barack-obama-2012.jpg",
            "electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>",
            "electoral_loss_message":"<h3>Fake News?</h3>",
            "no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false,
            "scrollable": false
        }
    },
    {
        "model":"campaign_trail.candidate",
        "pk":1008,
        "fields": {
            "first_name": "Dummy",
            "last_name": "Example",
            "election": 20,
            "party": "Example Party",
            "state": "Hell",
            "priority": 1,
            "description": "Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!",
            "color_hex": "#0000ff",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url":"../static/images/barack-obama-2012.jpg",
            "electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>",
            "electoral_loss_message":"<h3>Fake News?</h3>",
            "no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>",
            "description_as_running_mate":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!",
            "candidate_score": 1,
            "running_mate": true,
            "scrollable": false,
            "partner": "6"
        }
    }
];

e.running_mate_json = [
    {
        "model":"campaign_trail.running_mate",
        "pk":2001,
        "fields": {
            "candidate": 201,
            "running_mate": 1003
        }
    },
    {
        "model":"campaign_trail.running_mate",
        "pk":2002,
        "fields": {
            "candidate": 200,
        "running_mate": 1004
        }
    },
    {
        "model":"campaign_trail.running_mate",
        "pk":2003,
        "fields": {
            "candidate": 202,
            "running_mate": 1006
        }
    },
    {
        "model":"campaign_trail.running_mate",
        "pk":2004,
        "fields": {
            "candidate": 203,
            "running_mate": 1008
        }
    }
];

function addDynamicCSS() {
    var css = `
        .inner_window_question h3 .mytooltip{
            background-color: lightskyblue;
        }

        .mytooltip {
            position: relative;
            display: inline-block;
            cursor: pointer;
            background-color: lightblue;
        }

        .mytooltip .mytooltiptext {
            width: 240px;
            background-color: lightblue;
            color: black;
            text-align: center;
            border-radius: 6px;
            padding: 10px;
            position: absolute;
            z-index: 99;
            bottom: 20%;
            left: 20%;
            margin-left: -90px;
            opacity: 0;
            transition: opacity 0.3s;
            border: 1px solid black;
            pointer-events: none;
            font-size: 13px !important;
            line-height: 1.5em !important;
            font-weight: normal !important;
            font-style: normal !important;
        }

        .mytooltip .mytooltiptext img {
            max-width: 240px;
            height: auto;
        }

        .mytooltip:hover .mytooltiptext {
            opacity: 1;
            transition-delay: 0.3s;
        }
    `;

    var styleElem = document.createElement('style');
    styleElem.type = 'text/css';
    
    styleElem.appendChild(document.createTextNode(css));
    
    document.head.appendChild(styleElem);
}


addDynamicCSS();

DEMtooltipList = [
    {searchString: "November 2024", explanationText: "<img src=https://i.imgur.com/F8O9QT1.png> Dear God."},
    {searchString: "crowded field", explanationText: "<img src=https://i.imgur.com/bWlpiii.png> Ranges from outsider progressives to centrist party stalwarts. Good luck being ideologically distinct."},
    {searchString: "military background", explanationText: "<img src=https://i.imgur.com/JlXqXhk.jpeg> A key component of your first House campaign back in 2018, and still is today."},
    {searchString: "military service", explanationText: "<img src=https://i.imgur.com/JlXqXhk.jpeg> A key component of your first House campaign back in 2018, and still is today."},
    {searchString: "Phil Murphy", explanationText: "<img src=https://i.imgur.com/d7bw6Yk.jpeg> Current governor of New Jersey. A bit too far to the left, in your opinion."},
    {searchString: "county line", explanationText: "<img src=https://i.imgur.com/ysTQTfA.jpeg> You used it to win the primary in 2018. Hopefully you don't need it for 2025."},
    {searchString: "more candidates", explanationText: "<img src=https://i.imgur.com/Dylip4Y.jpeg> Main opponent: Ras Baraka, current mayor of Newark and hardcore leftist. Likely a greater opponent for the primary than the convention."},
    {searchString: "regional candidates", explanationText: "<img src=https://i.imgur.com/I07orlw.jpeg> Main opponent: Stephen Sweeney, former State Senate leader. Despite his loss in 2021, he still has a powerful presence in South Jersey."},
    {searchString: "Jack Ciattarelli", explanationText: "<img src=https://i.imgur.com/xSUuLGK.jpeg> The Republican nominee for governor. Once called a 'Never Trumper' — now just another MAGA figure."},
    {searchString: "publishing company", explanationText: "Galen Publishing. Accused of worsening the opioid crisis in New Jersey, but attacks could go... very badly."},
    {searchString: "Donald Trump", explanationText: "<img src=https://i.imgur.com/HetcnBl.jpeg> 47th President of the United States. You won off his unpopularity in 2018. Will it work again?"},
    {searchString: "Trump", explanationText: "<img src=https://i.imgur.com/HetcnBl.jpeg> 47th President of the United States. You won off his unpopularity in 2018. Will it work again?"},
    {searchString: "state of emergency", explanationText: "A tool that can be used by the governor to immediately deploy resources and request federal aid for a crisis."},
    {searchString: "shifted sharply to the right", explanationText: "<img src=https://i.imgur.com/tNFrDpm.png> A key reason for Kamala Harris's poor performance in New Jersey. But maybe Trump will fix that?"},
    {searchString: "consolidating", explanationText: "<img src=https://i.imgur.com/4KLzkVY.jpeg> Merging multiple school districts to shrink overall infrastructure costs. Highly controversial among wealthy families due to mixing them with those less well off."},
    {searchString: "Consolidating", explanationText: "<img src=https://i.imgur.com/4KLzkVY.jpeg> Merging multiple school districts to shrink overall infrastructure costs. Highly controversial among wealthy families due to mixing them with those less well off."},
    {searchString: "district consolidation", explanationText: "<img src=https://i.imgur.com/4KLzkVY.jpeg> Merging multiple school districts to shrink overall infrastructure costs. Highly controversial among wealthy families due to mixing them with those less well off."},
    {searchString: "ANCHOR", explanationText: "A program providing direct tax refunds to homeowners and renters. Mainly criticized for not going far enough."},
    {searchString: "Assembly", explanationText: "<img src=https://i.imgur.com/vMqx1Vb.jpeg> A Democratic near-supermajority, unlikely to see major losses during what should be a blue wave year. Right?"},
    {searchString: "party rivalries", explanationText: "<img src=https://i.imgur.com/IFWtTTr.png> Can these two just shut up?"},
    {searchString: "High Tax Jack", explanationText: "<img src=https://i.imgur.com/t4gx8er.png>"},
    {searchString: "Mamdani", explanationText: "<img src=https://i.imgur.com/0eMDUDR.jpeg> Democratic (socialist) nominee for Mayor of New York City. Basically your polar opposite."},
    {searchString: "Kamala Harris", explanationText: "<img src=https://i.imgur.com/UW0lZle.jpeg> A qualified woman trying to succeed an unpopular elderly Democrat. If only she were unburdened by what has been..."},
    {searchString: "military", explanationText: "<img src=https://i.imgur.com/JlXqXhk.jpeg> A key component of your first House campaign back in 2018, and still is today."},
    {searchString: "New Jersey Education Association", explanationText: "The largest public school labor union in the state, with over 200,000 members."},
    {searchString: "Gateway Tunnel", explanationText: "<img src=https://i.imgur.com/5vfWtNS.jpeg> A multibillion dollar project aimed at building a new railway tunnel from New Jersey to Manhattan. Threatened by Trump's steep budget cuts."}
        
];

REPtooltipList = [
    {searchString: "April 2024", explanationText: "<img src=https://i.imgur.com/OcbuZPT.jpeg> These two again?"},
    {searchString: "Donald Trump", explanationText: "<img src=https://i.imgur.com/HetcnBl.jpeg> 47th President of the United States. De-facto tsar of the Republican Party."},
    {searchString: "Trump", explanationText: "<img src=https://i.imgur.com/HetcnBl.jpeg> 47th President of the United States. De-facto tsar of the Republican Party."},
    {searchString: "Joe Biden", explanationText: "<img src=https://i.imgur.com/tqssVMJ.jpeg> 46th President of the United States. Republicans made a lot of gains in New Jersey because of his unpopularity."},
    {searchString: "Biden", explanationText: "<img src=https://i.imgur.com/tqssVMJ.jpeg> 46th President of the United States. Republicans made a lot of gains in New Jersey because of his unpopularity."},
    {searchString: "Kamala Harris", explanationText: "<img src=https://i.imgur.com/UW0lZle.jpeg> Lost to Donald Trump in 2024, and only won New Jersey by six points."},
    {searchString: "other choices", explanationText: "<img src=https://i.imgur.com/BQ85goL.jpeg> Main opponent: Bill Spadea, radio show host. Much farther to the right than you, and much more annoying."},
    {searchString: "more radical candidates", explanationText: "<img src=https://i.imgur.com/BQ85goL.jpeg> Main opponent: Bill Spadea, radio show host. Much farther to the right than you, and much more annoying."},
    {searchString: "Bill Spadea", explanationText: "<img src=https://i.imgur.com/BQ85goL.jpeg> Can he just shut up?"},
    {searchString: "Spadea", explanationText: "<img src=https://i.imgur.com/BQ85goL.jpeg> Can he just shut up?"},
    {searchString: "Phil Murphy", explanationText: "<img src=https://i.imgur.com/d7bw6Yk.jpeg> Current governor of New Jersey. Governs way too far to the left, and you nearly beat him in 2021 because of it."},
    {searchString: "county line", explanationText: "<img src=https://i.imgur.com/ysTQTfA.jpeg> Very helpful in 2021, and its elimination might help Spadea. Unfortunate."},
    {searchString: "diner", explanationText: "<img src=https://i.imgur.com/BVl2SM8.jpeg> Common in New Jersey, which is nicknamed the diner capital of the world."},
    {searchString: "Immigrant Trust Directive", explanationText: "Restricts NJ police from cooperating with immigration control, forcing federal ICE officials into New Jersey to do the job."},
    {searchString: "Assembly", explanationText: "<img src=https://i.imgur.com/vMqx1Vb.jpeg> A Democratic near-supermajority, unlikely to see major losses during what should be a blue wave year. Right?"},
    {searchString: "military past", explanationText: "<img src=https://i.imgur.com/JlXqXhk.jpeg> A key yet boring part of Sherrill's campaign."},
    {searchString: "publishing company", explanationText: "Galen Publishing, your former company."},
    {searchString: "lenient system", explanationText: "No ID required for in-person voting, not even a driver's license. Ridiculous."},
    {searchString: "funding formula", explanationText: "A complicated formula that gives extra funding to poorer schools with multilingual students, and incentivizes high deficits for towns."},
    {searchString: "Mikie Sherrill", explanationText: "<img src=https://i.imgur.com/pDynlfl.jpeg> The Democratic nominee for governor. Calls herself a moderate but supports the same failed Democratic agenda."},
    {searchString: "snapped to the right", explanationText: "<img src=https://i.imgur.com/tNFrDpm.png> A key reason for Kamala Harris's poor performance in New Jersey. Hopefully it sticks."},
    {searchString: "Jenniffer González-Colón", explanationText: "<img src=https://i.imgur.com/X2mirfv.jpeg> A symbol of Republican gains among Hispanic voters."},
    {searchString: "ambitious agenda", explanationText: "<img src=https://i.imgur.com/pbQza6v.jpeg> An agenda designed to reverse the population outflow caused by Democratic governance."},
    {searchString: "Gateway Tunnel", explanationText: "<img src=https://i.imgur.com/5vfWtNS.jpeg> A multibillion dollar project aimed at building a new railway tunnel from New Jersey to Manhattan. Threatened by Trump's steep budget cuts."}
        
];

  $("#game_start").click((event) => {
    event.preventDefault();
    $("#election_id_button").click((event) => {
        event.preventDefault();
musicMode()
    })
  })


  musicMode = () => {
    // Initialise custom music
  
    $("#music_player")[0].children[0].style.display = "none"
    $("#music_player")[0].children[1].style.display = "none"
  
    document.getElementById("modLoadReveal").style.display = "none"
    document.getElementById("modloaddiv").style.display = "none"
  
    musicBox = document.getElementById("music_player")
    musicBox.style.display = ""
  
    var trackSel;
    e = campaignTrail_temp
    e.selectedSoundtrack = 0
  
    toTime = (seconds) => {
        var date = new Date(null);
        date.setSeconds(seconds);
        return date.toISOString().substr(11, 8);
    }
  
    generateTime = () => {
        // Get the audio element
        var audio = document.getElementById("campaigntrailmusic");
  
        timeTracker = document.createElement("div");
        timeTracker.style = `
  text-align:left;
  border-style:solid;
  border-width:3px;
  height:150px;
  width:200px;
  background-color:#999999;
  float:right;
  padding: 10px;
  `
        $("#trackSelParent")[0].prepend(timeTracker);
        $("#trackSelParent")[0].prepend(document.createElement("br"));
  
        // Create a new element to display the current position of the audio
        var positionDisplay = document.createElement("gg");
        positionDisplay.id = "position-display";
  
        // Create a new slider element to change the time
        var timeSlider = document.createElement("input");
        timeSlider.type = "range";
        timeSlider.min = 0;
        timeSlider.max = 1;
        timeSlider.step = 0.001;
        timeSlider.value = 0;
        timeSlider.style.width = "200px";
        timeSlider.id = "time-slider";
  
        var pausePlay = document.createElement("button");
        pausePlay.id = "position-display";
        pausePlay.innerHTML = "<b>Pause</b>"
        pausePlay.style.width = "100%";
  
  
        pausePlay.addEventListener("click", event => {
            event.preventDefault();
            updatePositionDisplay();
            let audio = document.getElementById("campaigntrailmusic");
            if (audio.paused) {
                audio.play();
                event.target.innerHTML = "<b>Pause</b>";
                return;
            }
            audio.pause();
            event.target.innerHTML = "<b>Play</b>";
            return;
        })
  
        var volumeLabel = document.createElement("gg");
        volumeLabel.id = "volume-label";
        volumeLabel.innerHTML = "<br><b>Volume: </b>"
  
        var volumeSlider = document.createElement("input");
        volumeSlider.type = "range";
        volumeSlider.min = 0;
        volumeSlider.max = 1;
        volumeSlider.step = 0.001;
        volumeSlider.value = 0;
        volumeSlider.style.width = "200px";
        volumeSlider.id = "volume-slider";
  
        volumeSlider.value = audio.volume;
  
        timeTracker.appendChild(pausePlay);
        timeTracker.appendChild(document.createElement("br"));
        timeTracker.appendChild(document.createElement("br"));
        timeTracker.appendChild(positionDisplay);
        timeTracker.appendChild(timeSlider);
        timeTracker.appendChild(volumeLabel);
        timeTracker.appendChild(volumeSlider);
  
        updatePositionDisplay();
  
        //for (let i = 0; i < 10; i++)
        //timeTracker.append(document.createElement("br"));
  
  
        // Function to update the position display
        function updatePositionDisplay() {
            positionDisplay.innerHTML = "<b>Time:</b> " + toTime(audio.currentTime) + "<br>";
            timeSlider.value = audio.duration ? audio.currentTime / audio.duration : 0;
        }
  
        // Function to change the time of the audio
        function changeTime() {
            positionDisplay.innerHTML = "<b>Time:</b> " + toTime(audio.currentTime) + "<br>";
            audio.currentTime = timeSlider.value * audio.duration;
        }
  
        updateVolume = event => {
            audio.volume = event.target.value;
        }
  
        // Update the position display and slider every second
        setInterval(updatePositionDisplay, 1000);
  
        // Listen for changes to the time slider and change the time of the audio
        timeSlider.addEventListener("input", changeTime);
        volumeSlider.addEventListener("input", updateVolume)
    }
  
    function newMusicPlayer() {
        trackSel = document.createElement("div");
        trackSel.id = "trackSelParent"
        let z = `<br><br><br><br><br><br><br><br><br><br><div id='trackSel' style="text-align:left;border-style:solid;border-width:3px;overflow-y: scroll;overflow-x: hidden;height:200px; width:400px;background-color:#999999;float:right;">`
        z += `<b><select id='selectSoundtrack'><option value='` + soundtracks[e.selectedSoundtrack].name + `'>` + soundtracks[e.selectedSoundtrack].name + "</option>"
        for (i in soundtracks) {
            if (soundtracks[e.selectedSoundtrack] != soundtracks[i]) {
                z += `<option value='` + soundtracks[i].name + `'>` + soundtracks[i].name + `</option>`
            }
        }
        z += `</select></b><br><br>`
            // <label><input type="radio" name="option" value="option1">Option 1</label><br>
        for (i in soundtracks[e.selectedSoundtrack].tracklist) {
            let a = soundtracks[e.selectedSoundtrack].tracklist[i]
            let b = `<label><input class="trackSelector" type="radio" name="trackSelector" value="` + i + `">` + a.name + `</label><br>`
            z += b
        }
        z += "</div><br><br>"
        trackSel.innerHTML = z
  
        // select correct song
  
        musicBox.appendChild(trackSel);
        Array.from(document.getElementById("trackSel").children).filter(f => {
            return f.tagName == "LABEL"
        }).map(f => f.children[0])[0].checked = true
  
        // set soundtrack changer
  
        soundtrackSelector = document.getElementById("selectSoundtrack")
        soundtrackSelector.onchange = function() {
            for (i in soundtracks) {
                if (soundtracks[i].name == soundtrackSelector.value) {
                    e.selectedSoundtrack = i
                    break
                }
            }
            document.getElementById("trackSelParent").remove()
            newMusicPlayer()
        }
  
        var matches = document.querySelectorAll('.trackSelector');
  
        for (match in matches) {
            matches[match].onchange = function() {
                audio = $("#campaigntrailmusic")[0];
                audio.src = soundtracks[e.selectedSoundtrack].tracklist[this.value].url
                audio.currentTime = 0
            }
        }
  
        musicBox.children[2].loop = false
        musicBox.children[2].src = soundtracks[e.selectedSoundtrack].tracklist[0].url
  
        musicBox.children[2].onended = function() {
            console.log("next track")
            let selected = Number(document.querySelector('input[name="trackSelector"]:checked').value);
            let newSel = clamp(selected + 1, soundtracks[e.selectedSoundtrack].tracklist.length - 1, 0)
            let buttons = Array.from(document.getElementById("trackSel").children).filter(f => {
                    return f.tagName == "LABEL"
                }).map(f => f.children[0])
                //let selectedIndex = buttons.map(f=>f.children[0]).map(f=>f.checked)
            buttons[newSel].click()
        }
  
        for (w = 0; w < 7; w++) {
            document.getElementById("trackSelParent").appendChild(document.createElement("br"))
        }
  
        generateTime();
    }
  
    clamp = function(a, max, min, overflow = true) {
        if (overflow) {
            return a > max ? min : a < min ? max : a;
        }
        return a > max ? max : a < min ? min : a;
    }
  
  
    // Track list
  
    var soundtracks = {
        0: {
            name: "Jersey Tunes",
            tracklist: [
              {
                "name": "Hackensack - Fountains of Wayne",
                "url": "https://files.catbox.moe/j3h7fz.mp3"
              },
              {
                "name": "I'm From New Jersey - John Gorka",
                "url": "https://files.catbox.moe/1nn7g4.mp3"
              },
              {
                "name": "Red, White and Jersey - Bon Jovi",
                "url": "https://files.catbox.moe/2mkd9x.mp3"
              },
              {
                "name": "Livin On A Prayer - Bon Jovi",
                "url": "https://files.catbox.moe/zr8mn0.mp3"
              },
              {
                "name": "Born To Run - Bruce Springsteen",
                "url": "https://audio.jukehost.co.uk/2ik4UGYooJHszSLdrle1GOT4USpqDV98"
              },
              {
                "name": "Woke Up This Morning - Alabama 3",
                "url": "https://audio.jukehost.co.uk/HIbc7QXc8akYF0YyyyUuiGlzsxqkm6AL"
              }
          ]
        },
    }
  
    // Set up new music player
  
    newMusicPlayer()
}

campaignTrail_temp.achievements = {
    "Not a Purple State..." : {
      "image" : "https://i.imgur.com/I5oUfXl.jpeg",
      "description" : "As Sherrill, win",
      "cannotBeCheated" : true
  },
    "...But a Blue State!" : {
      "image" : "https://i.imgur.com/S7OBwd4.jpeg",
      "description" : "As Sherrill, dominate",
      "cannotBeCheated" : true
  },
    "So Much for the Polls" : {
      "image" : "https://i.imgur.com/VfGsdFP.jpeg",
      "description" : "As Sherrill, decisively win",
      "cannotBeCheated" : true
  },
    "Nothing Ever Happens" : {
      "image" : "https://i.imgur.com/eXNIRTd.jpeg",
      "description" : "As Sherrill, do about as expected",
      "cannotBeCheated" : true
  },
    "2024 All Over Again" : {
      "image" : "https://i.imgur.com/UZcC0r2.jpeg",
      "description" : "As Sherrill, underperform",
      "cannotBeCheated" : true
  },
    "Baraka Coulda Won" : {
      "image" : "https://i.imgur.com/i0sfcdL.jpeg",
      "description" : "As Sherrill, lose",
      "cannotBeCheated" : true
  },
    "True Mandate" : {
      "image" : "https://i.imgur.com/JLWfUOi.jpeg",
      "description" : "As Sherrill, win the largest State Assembly majority in history",
      "cannotBeCheated" : true
  },
    "New Party Foundation" : {
      "image" : "https://i.imgur.com/Lf7vkLI.jpeg",
      "description" : "As Sherrill, win Morris County without a single battleground in the South",
      "cannotBeCheated" : true
  },
    "Blue Tea Party" : {
      "image" : "https://i.imgur.com/xil0ose.jpeg",
      "description" : "As Sherrill, get Analilia Mejia to win",
      "cannotBeCheated" : true
  },
    "What Populism?" : {
      "image" : "https://i.imgur.com/ld7PqBk.jpeg",
      "description" : "As Sherrill, get Tom Malinowski to win",
      "cannotBeCheated" : true
  },
    "No Way, No How" : {
      "image" : "https://i.imgur.com/ToGqy1W.jpeg",
      "description" : "As Sherrill, get Tahesha Way to win",
      "cannotBeCheated" : true
  },
    "Drop the Ball" : {
      "image" : "https://i.imgur.com/jrWJ9t7.jpeg",
      "description" : "As Sherrill, lose the primary",
      "cannotBeCheated" : true
  },
    "So Close..." : {
      "image" : "https://i.imgur.com/aMKoy8y.jpeg",
      "description" : "As Ciattarelli, lose",
      "cannotBeCheated" : true
  },
    "...Yet So Far" : {
      "image" : "https://i.imgur.com/zmYSB5y.jpeg",
      "description" : "As Ciattarelli, lose in a wipeout",
      "cannotBeCheated" : true
  },
    "Blue Tsunami" : {
      "image" : "https://i.imgur.com/mDWWU8o.jpeg",
      "description" : "As Ciattarelli, lose in a landslide",
      "cannotBeCheated" : true
  },
    "Back to 2017" : {
      "image" : "https://i.imgur.com/a2MNjob.jpeg",
      "description" : "As Ciattarelli, lose decisively",
      "cannotBeCheated" : true
  },
    "Single Digits" : {
      "image" : "https://i.imgur.com/WBz8ql6.png",
      "description" : "As Ciattarelli, do about as expected",
      "cannotBeCheated" : true
  },
    "Cheatarelli" : {
      "image" : "https://i.imgur.com/r3foP06.jpeg",
      "description" : "As Ciattarelli, win",
      "cannotBeCheated" : false
  },
    "This is Fine" : {
      "image" : "https://i.imgur.com/DQSFYVA.jpeg",
      "description" : "As Ciattarelli, get Assembly Republicans demolished",
      "cannotBeCheated" : true
  },
    "Slide to the Right" : {
      "image" : "https://i.imgur.com/YjsDiQz.png",
      "description" : "As Ciattarelli, get Justin Murphy to win",
      "cannotBeCheated" : true
  },
    "Blue Lives Matter" : {
      "image" : "https://i.imgur.com/wuvvV15.jpeg",
      "description" : "As Ciattarelli, get Richard Tabor to win",
      "cannotBeCheated" : true
  },
    "Reformer Movement" : {
      "image" : "https://i.imgur.com/dVXajGz.jpeg",
      "description" : "As Ciattarelli, get Alex Zdan to win",
      "cannotBeCheated" : true
  },
    "No Spoiler Here" : {
      "image" : "https://i.imgur.com/75FnSYC.jpeg",
      "description" : "As Ciattarelli, do better despite a third party",
      "cannotBeCheated" : true
  },
    "Trump Effect" : {
      "image" : "https://i.imgur.com/pr97GvO.jpeg",
      "description" : "As Ciattarelli, lose the primary",
      "cannotBeCheated" : true
  },
}
