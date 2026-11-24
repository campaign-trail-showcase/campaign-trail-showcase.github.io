campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 28,
        "fields": {
            "year": 1976,
            "summary": "<p>The race in 1976 is a dead heat as President Shirley Chisholm seeks to win another historic term in office.</p><p>President Chisholm has spent four years straddling the balance between her activist base and the Democratic establishment. With her renomination an open question, she must choose her lot this time around.</p><p>Governor Meldrim Thomson has made his name from his very loud opposition to the Chisholm agenda.  He must now rally the right to win the election both in decibels and electoral votes.</p>",
            "image_url": "https://gitlab.com/hoorayforjane/assortedprojects/-/raw/main/1976%20Chisholm/1976_Unbought_and_Unbossed.png",
            "winning_electoral_vote_number": 270,
            "advisor_url": "https://gitlab.com/hoorayforjane/assortedprojects/-/raw/main/1976%20Chisholm/Advisor_Image.png",
            "recommended_reading": "Hello there! This is my first ever mod. This mod tries to be a fun representation of a President Shirley Chisholm scenario had she won in 1972. I'm not the best writer or researcher, so some liberties are taken here. If you liked this mod, I hope you suggest it to someone who might be interested in a simple, short scenario. Or you can tell me on Discord (@janeywashere) or Twitter (@EmPol2005) that it's good. Thanks to everyone who helped me make this a reality.\n<h4>Reading</h4><ul><li>Shirley Chisholm, <i>Unbought and Unbossed</i> (1970)</li><li>Shirley Chisholm, <i>The Good Fight</i> (1973)</li><li>Anastasia Curwood, <i>Shirley Chisholm: Champion of Black Feminist Power Politics</i> (2023)</li><li>Shola Lynch, <i>Chisholm '72: Unbought and Unbossed</i> (documentary, 2004)</li></ul>",
            "has_visits": 1,
            "no_electoral_majority_image": "https://gitlab.com/hoorayforjane/assortedprojects/-/raw/main/1976%20Chisholm/Chisholm_Candidate.png",
            "creator": "Jane",
            "display_year": "1976: Unbought and Unbossed",
            "is_historical": true,
            "recommended_reading_enabled": true,
            "site_description": "<p>The race in 1976 is a dead heat as President Shirley Chisholm seeks to win another historic term in office.</p><p>President Chisholm has spent four years straddling the balance between her activist base and the Democratic establishment. With her renomination an open question, she must choose her lot this time around.</p><p>Governor Meldrim Thomson has made his name from his very loud opposition to the Chisholm agenda.  He must now rally the right to win the election both in decibels and electoral votes.</p>"
        }
    }
];

campaignTrail_temp.temp_election_list = [
    {
        "id": 28,
        "year": 1976,
        "is_premium": 0,
        "is_historical": true,
        "display_year": "1976: Unbought and Unbossed"
    }
];

RecReading = true;

campaignTrail_temp.credits = "Jane";

campaignTrail_temp.global_parameter_json = [
    {
        "model": "campaign_trail.global_parameter",
        "pk": 1,
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
            "no_state_map_color_hex": "#999999"
        }
    }
];

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 421,
        "fields": {
            "first_name": "Shirley",
            "last_name": "Chisholm",
            "election": 28,
            "party": "Democrat",
            "state": "New York",
            "priority": 1,
            "description": "<p>Loud. Polarizing. Disorienting. These words were used to describe Chisholm following her shock victory in 1972. Yet her administration has been anything but chaotic. Assembling a prudent cabinet and with a heavy dose of compromise with the Democratic establishment, her domestic agenda has been rather successful. In contrast, her activist foreign policy has put human rights first and allies second, turning her into a lightning rod for racist and sexist criticism.</p><p>The compromises did not stave off challenges from Wallace and Humphrey and her renomination is uncertain. Should she come out on top, she must cast her lot and decide whether to embrace her activist base or finally come to terms with the establishment. </p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 1,
            "image_url": "https://gitlab.com/hoorayforjane/assortedprojects/-/raw/main/1976%20Chisholm/Chisholm_Candidate.png",
            "electoral_victory_message": "<h3>Congratulations! You have won the 1976 election.</h3><p>The American people have given President Chisholm a second term.</p>",
            "electoral_loss_message": "<h3>Sorry, you have lost the 1976 election.</h3><p>Meldrim Thomson will be the next President of the United States.</p>",
            "no_electoral_majority_message": "<h3>No candidate holds a majority in the Electoral College.</h3><p>The House of Representatives, still Democratic, will decide.</p>",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 420,
        "fields": {
            "first_name": "Meldrim",
            "last_name": "Thomson",
            "election": 28,
            "party": "Republican",
            "state": "New Hampshire",
            "priority": 2,
            "description": "<p></p>",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://gitlab.com/hoorayforjane/assortedprojects/-/raw/main/1976%20Chisholm/Thomson_Candidate.png",
            "electoral_victory_message": "<h3>Congratulations! You have won the 1976 election.</h3><p>The American people have given President Chisholm a second term.</p>",
            "electoral_loss_message": "<h3>Sorry, you have lost the 1976 election.</h3><p>Meldrim Thomson will be the next President of the United States.</p>",
            "no_electoral_majority_message": "<h3>No candidate holds a majority in the Electoral College.</h3><p>The House of Representatives, still Democratic, will decide.</p>",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 422,
        "fields": {
            "first_name": "Lester",
            "last_name": "Maddox",
            "election": 28,
            "party": "American Independent",
            "state": "Georgia",
            "priority": 3,
            "description": "<p></p>",
            "color_hex": "#E08A00",
            "secondary_color_hex": "#FFC870",
            "is_active": 0,
            "image_url": "",
            "electoral_victory_message": "<h3>Congratulations! You have won the 1976 election.</h3><p>The American people have given President Chisholm a second term.</p>",
            "electoral_loss_message": "<h3>Sorry, you have lost the 1976 election.</h3><p>Meldrim Thomson will be the next President of the United States.</p>",
            "no_electoral_majority_message": "<h3>No candidate holds a majority in the Electoral College.</h3><p>The House of Representatives, still Democratic, will decide.</p>",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 433,
        "fields": {
            "first_name": "Eugene",
            "last_name": "McCarthy",
            "election": 28,
            "party": "Independent",
            "state": "Minnesota",
            "priority": 4,
            "description": "<p></p>",
            "color_hex": "#2E8B57",
            "secondary_color_hex": "#A0DDB0",
            "is_active": 0,
            "image_url": "",
            "electoral_victory_message": "<h3>Congratulations! You have won the 1976 election.</h3><p>The American people have given President Chisholm a second term.</p>",
            "electoral_loss_message": "<h3>Sorry, you have lost the 1976 election.</h3><p>Meldrim Thomson will be the next President of the United States.</p>",
            "no_electoral_majority_message": "<h3>No candidate holds a majority in the Electoral College.</h3><p>The House of Representatives, still Democratic, will decide.</p>",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 427,
        "fields": {
            "first_name": "Reubin",
            "last_name": "Askew",
            "election": 28,
            "party": "Democrat",
            "state": "Florida",
            "priority": 33,
            "description": null,
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://gitlab.com/hoorayforjane/assortedprojects/-/raw/main/1976%20Chisholm/VP_Askew.png",
            "electoral_victory_message": "<h3>Congratulations! You have won the 1976 election.</h3><p>The American people have given President Chisholm a second term.</p>",
            "electoral_loss_message": "<h3>Sorry, you have lost the 1976 election.</h3><p>Meldrim Thomson will be the next President of the United States.</p>",
            "no_electoral_majority_message": "<h3>No candidate holds a majority in the Electoral College.</h3><p>The House of Representatives, still Democratic, will decide.</p>",
            "description_as_running_mate": "<p>The first of many compromises with the establishment, Vice President Reubin Askew was placed on the ticket following a grand bargain that got you the nomination in order to make the ticket palatable enough for whites and moderates alike. In this regard, he has been of little use, as Nixon handily carried the entire Confederacy in 1972. But he's been a great team player in your administration, staying loyal and holding off people like Muskie from challenging you—with the intention of running in 1980.</p><p>He's willing to step aside for a stronger candidate if rewarded with a prominent post in your second term. But he says if given a more prominent role on the trail this time, he'll make your 1972 choice worth it with his appeal to moderate and 'New South' voters. It's your call, he says.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 428,
        "fields": {
            "first_name": "Frank",
            "last_name": "Church",
            "election": 28,
            "party": "Democrat",
            "state": "Idaho",
            "priority": 34,
            "description": null,
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://gitlab.com/hoorayforjane/assortedprojects/-/raw/main/1976%20Chisholm/VP_Church.png",
            "electoral_victory_message": "<h3>Congratulations! You have won the 1976 election.</h3><p>The American people have given President Chisholm a second term.</p>",
            "electoral_loss_message": "<h3>Sorry, you have lost the 1976 election.</h3><p>Meldrim Thomson will be the next President of the United States.</p>",
            "no_electoral_majority_message": "<h3>No candidate holds a majority in the Electoral College.</h3><p>The House of Representatives, still Democratic, will decide.</p>",
            "description_as_running_mate": "<p>If you want to throw your hat with the activist base, then Pat Caddell says he has the man for you. Senator Frank Church, the face of the Church Committee that you've been working hand-in-hand with, would certainly galvanize your activist base. Gaining a massive profile (with your help) exposing the brutality of America's secret police abroad and at home, Church has a stellar record of independence both politically and personally.</p><p>The senator, for his part, is glad to accept such an offer from you. He's been impressed by your policy on Vietnam and Angola, and thinks he can do much more by your side. With your agreement and second mandate, he'd be able to reach targets that escaped his reach the first time. The same ones that you're thinking of, even. Just let him know if you make the choice.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 429,
        "fields": {
            "first_name": "Walter",
            "last_name": "Mondale",
            "election": 28,
            "party": "Democrat",
            "state": "Minnesota",
            "priority": 35,
            "description": null,
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://gitlab.com/hoorayforjane/assortedprojects/-/raw/main/1976%20Chisholm/VP_Mondale.png",
            "electoral_victory_message": "<h3>Congratulations! You have won the 1976 election.</h3><p>The American people have given President Chisholm a second term.</p>",
            "electoral_loss_message": "<h3>Sorry, you have lost the 1976 election.</h3><p>Meldrim Thomson will be the next President of the United States.</p>",
            "no_electoral_majority_message": "<h3>No candidate holds a majority in the Electoral College.</h3><p>The House of Representatives, still Democratic, will decide.</p>",
            "description_as_running_mate": "<p>With one call from him, all your troubles with the establishment will disappear. You'll finally be able to move from the women's table making decorations to the men's table where they actually decide the important things. Well, he disputes such a characterization, but you get the idea.  The Senator from Minnesota is Humphrey's heir apparent and someone devoted to the New Deal order. He's been good at getting your legislation passed throughout your term.</p><p>Mondale is a loyal party man and will rebuild the coalition that's frayed across the years, but it means disappointing the people that powered your win in '72. He says you need to think about how you can do things like national healthcare that you missed this term as well. He's right, in a sense. There are still four years ahead. Let him know if you agree with him so he can make the call and get the party together behind you.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 423,
        "fields": {
            "first_name": "John",
            "last_name": "Tower",
            "election": 28,
            "party": "Republican",
            "state": "Texas",
            "priority": 37,
            "description": null,
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "",
            "electoral_victory_message": "<h3>Congratulations! You have won the 1976 election.</h3><p>The American people have given President Chisholm a second term.</p>",
            "electoral_loss_message": "<h3>Sorry, you have lost the 1976 election.</h3><p>Meldrim Thomson will be the next President of the United States.</p>",
            "no_electoral_majority_message": "<h3>No candidate holds a majority in the Electoral College.</h3><p>The House of Representatives, still Democratic, will decide.</p>",
            "description_as_running_mate": "<p></p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 430,
        "fields": {
            "first_name": "William",
            "last_name": "Dyke",
            "election": 28,
            "party": "American Independent",
            "state": "Wisconsin",
            "priority": 38,
            "description": null,
            "color_hex": "#E08A00",
            "secondary_color_hex": "#FFC870",
            "is_active": 0,
            "image_url": "",
            "electoral_victory_message": "<h3>Congratulations! You have won the 1976 election.</h3><p>The American people have given President Chisholm a second term.</p>",
            "electoral_loss_message": "<h3>Sorry, you have lost the 1976 election.</h3><p>Meldrim Thomson will be the next President of the United States.</p>",
            "no_electoral_majority_message": "<h3>No candidate holds a majority in the Electoral College.</h3><p>The House of Representatives, still Democratic, will decide.</p>",
            "description_as_running_mate": "<p></p>",
            "candidate_score": 1,
            "running_mate": true
        }
    }
];

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 198002,
        "fields": {
            "candidate": 421,
            "running_mate": 427
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 198005,
        "fields": {
            "candidate": 421,
            "running_mate": 428
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 198006,
        "fields": {
            "candidate": 421,
            "running_mate": 429
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 198007,
        "fields": {
            "candidate": 420,
            "running_mate": 423
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 198001,
        "fields": {
            "candidate": 422,
            "running_mate": 430
        }
    }
];

campaignTrail_temp.opponents_default_json = [
    {
        "election": 28,
        "candidates": [
            421,
            420,
            422,
            433
        ]
    }
];

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 28,
        "candidates": [
            421,
            420,
            422,
            433
        ]
    }
];

campaignTrail_temp.modBoxTheme = {
    "header_color": "#700016",
    "header_text_color": "#ffffff",
    "description_background_color": "#ffffff",
    "description_text_color": "#111827",
    "main_color": "#bfe6ff",
    "secondary_color": "#2563eb",
    "ui_text_color": "#ffffff"
};

jet_data = {
    "headerColor": "#700016",
    "headerTextColor": "#ffffff",
    "windowColor": "#bfe6ff",
    "containerColor": "#ffffff",
    "innerWindowColor": "#e8fbff",
    "innerWindowTextColor": "#000000",
    "descriptionWindowColor": "#f8f8f8",
    "descriptionWindowTextColor": "#000000",
    "startButtonColor": "#e8e8e8",
    "bannerImageUrl": "https://www.newcampaigntrail.com/static/images/banner_classic.png",
    "backgroundImageUrl": "https://www.jetsimon.com/public/static/images/background.jpg",
    "gameTitle": "The Campaign Trail",
    "customQuote": "",
    "quoteTextColor": "#ffffff",
    "endingTextColor": "#000000",
    "modBoxTheme": {
        "header_color": "#700016",
        "header_text_color": "#ffffff",
        "header_image_url": "",
        "header_text_shadow": "",
        "header_font": "",
        "header_margin": "",
        "description_background_color": "#ffffff",
        "description_text_color": "#111827",
        "main_color": "#bfe6ff",
        "secondary_color": "#2563eb",
        "secondary_hover_color": "",
        "scrollbar_color": "",
        "scrollbar_width": "",
        "image_border": "",
        "election_image_display": "",
        "ui_text_color": "#ffffff"
    }
};

//#startcode
function applyTheme(theme) {
    const gameHeader = document.querySelector(".game_header");
    if (gameHeader && theme.coloring_title) {
        gameHeader.style.backgroundColor = theme.coloring_title;
    }

    const gameWindow = document.getElementById("game_window");
    if (gameWindow && theme.coloring_window) {
        gameWindow.style.backgroundColor = theme.coloring_window;
    }

    const container = document.querySelector(".container");
    if (container && theme.coloring_container) {
        container.style.backgroundColor = theme.coloring_container;
    }

    const headerImg = document.getElementById("header");
    if (headerImg && theme.header_image) {
        headerImg.src = theme.header_image;
    }

    if (theme.body_background) {
        document.body.style.backgroundImage = `url("${theme.body_background}")`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
    }

    const style = document.createElement("style");
    style.textContent = `
      #results_container { color: #000000; }
      #wittyquote { color: #ffffff; }
      .game_header h2 { color: #ffffff; }
      .inner_window_w_desc { background-color: #e8fbff !important; color: #000000; }
      .inner_window_front, .person_description_window, .election_description_window, .description_window_small { background-color: #f8f8f8 !important; color: #000000; }
      .campaign_trail_start_emphasis { background-color: #e8e8e8 !important; }
    `;
    document.head.appendChild(style);
}



const theme = nct_stuff.themes[nct_stuff.selectedTheme];

// define / override theme values
theme.coloring_title     = "#700016";
theme.coloring_window    = "#bfe6ff";
theme.coloring_container = "#ffffff";
theme.header_image = "https://gitlab.com/hoorayforjane/assortedprojects/-/raw/main/1976%20Chisholm/Header.png";
theme.body_background = "https://www.jetsimon.com/public/static/images/background.jpg";

applyTheme(theme);

corrr=`\n<h2>The Campaign Trail</h2>`

campaignTrail_temp.achievements = {
  "Bring Us Together" : {
  "image" : "https://gitlab.com/hoorayforjane/assortedprojects/-/raw/main/1976%20Chisholm/Achievement_1.png",
   "description" : "Bring the nation to its feet.",
   "cannotBeCheated" : true
 },
 "All the People" : {
  "image" : "https://gitlab.com/hoorayforjane/assortedprojects/-/raw/main/1976%20Chisholm/Achievement_2.png",
  "description" : "Don't give up on America.",
  "cannotBeCheated" : true
 },
  "Unbought and Unbossed" : {
  "image" : "https://gitlab.com/hoorayforjane/assortedprojects/-/raw/main/1976%20Chisholm/Achievement_3.png",
  "description" : "Stand by your principles.",
  "cannotBeCheated" : true
 }
}
//#endcode
