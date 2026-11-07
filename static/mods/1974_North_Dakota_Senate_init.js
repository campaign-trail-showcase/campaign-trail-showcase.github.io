HistHexcolour=["#ff0000","#0000FF","#66ff00","#03d8b5"];
HistName=[" Milton Young"," William L. Guy"," James Jungroth"," Kenneth Gardner"];
HistEV=[30,23,0,"0"];
HistPV=["114,852","114,675","6,679","853"];
HistPVP=["48.45%","48.37%","2.82%","0.36%"]; 
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
            "question_count": 24,
            "default_map_color_hex": "#C9C9C9",
            "no_state_map_color_hex": "#999999"
        }
    }
]

campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 20,
        "fields": {
            "year": 2016,
            "display_year": "1974_North_Dakota_Senate",
            "summary": "The 1974 midterms are looking looking to be devastating to the Republicans. The once-popular Richard Nixon was caught in the Watergate Scandal and later resigned this year. This has sent a wave of discontent to every Republican incumbent. The GOP hopes that they can lessen the blow as much as possible, and this race is one of them. Both candidates are highly popular, and many deem this to be a tossup.\n\n<br><br> Milton Young must use his status as the incumbent and political experience to his advantage while showing voters that he can handle six more years.\n<br><br>William Guy must make a case for new leadership in congress, and fend off the spoilers that will try to take him down.",
            "image_url": "https://i.imgur.com/4P7cxWM.png",
            "winning_electoral_vote_number": 270,
            "advisor_url": "https://i.imgur.com/nhpsAED.png",
            "recommended_reading": "<ul>\n<li><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></li>\n<li><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></li>\n<li><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></li>\n<li><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></li>\n<li><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></li>\n</ul>",
            "has_visits": 1,
            "no_electoral_majority_image": "../static/images/2012-no-majority.jpg"
        }
    }
]

campaignTrail_temp.temp_election_list = [
    {
        "id": 20,
        "year": 2016,
        "is_premium": 0,
        "display_year": "1974_North_Dakota_Senate"
    }
]

campaignTrail_temp.credits = "Wah Guy"

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 12761,
        "fields": {
            "first_name": "William ",
            "last_name": "Lewis Guy",
            "election": 20,
            "party": "Democratic-Non Partisan League",
            "state": "Cass",
            "priority": 1,
            "description": "<div style='overflow-y:scroll;height:200px;'>Guy is the former governor of North Dakota. He first entered politics as a state representative after being a teacher. He was first narrowly elected to the governorship in 1960. His victory there established the two-party system in North Dakota as he was the first elected democrat in 20 years to a statewide office. He sought reelection and won narrowly again in 1962. Then easily won in 1964 and 1968. He was succeeded by fellow Democrat Arthur A. Link.\n<br><br> During his tenure, Guy developed the interstate highway system, brought industry to the state, created eight regional mental health districts, paved the way for the construction of the North Dakota Heritage Center, and formed the Theodore Roosevelt Rough Rider Award. Johnson chose him to preside over the South Vietnamese Presidential Elections in 1967. This left Guy with a negative view on the ongoing war.\n<br><br> Guy had considered challenging Young in 1968, but thought he did not have a great chance to win. However, Guy now believes it is his time to strike at Young. Watergate has severely hurt all Republicans, and Guy is very popular in the state. That being said, victory will not come easily. Young is also very popular, and is very experienced in politics. Guy also has enemies who are looking to spoiler his run to prevent him from winning. Guy must cast away the spoilers and make himself seem like a capable bipartisan leader.\n\n",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://i.imgur.com/7CHACCm.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 11002,
        "fields": {
            "first_name": "Democratic",
            "last_name": "NPL",
            "election": 20,
            "party": "Democratic",
            "state": "North Dakota",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://i.imgur.com/7KLefWB.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "The state affiliate party of the National Democratic Party. It was formed by merging the North Dakota Democratic Party with the Non-Partisan League. As you know, the Democratic side did not have a lot of political success unil your victory in 1960, and it has been promising for them ever since. Besides that, the Democrats at large are looking to pick up many seats in both chambers to expand their majorities. This seat is one of them.",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 12818,
        "fields": {
            "first_name": "Milton",
            "last_name": "Young",
            "election": 20,
            "party": "Turbo Team",
            "state": "Idaho",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#ff0000",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/candidateexample.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 13299,
        "fields": {
            "first_name": "James ",
            "last_name": "R. Jungroth",
            "election": 20,
            "party": "Turbo Team",
            "state": "Idaho",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#66ff00",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/candidateexample.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 13354,
        "fields": {
            "first_name": "Kenneth ",
            "last_name": "C. Gardner",
            "election": 20,
            "party": "Turbo Team",
            "state": "Idaho",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#03d8b5",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/candidateexample.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    }
]

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 166355,
        "fields": {
            "candidate": 12761,
            "running_mate": 11002
        }
    }
]

campaignTrail_temp.opponents_default_json = [
    {
        "election": 20,
        "candidates": [
            12761,
            12818,
            13299,
            13354
        ]
    }
]

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 20,
        "candidates": [
            12761,
            12818,
            13299,
            13354
        ]
    }
]

jet_data = {
    "headerColor": "#24a800",
    "windowColor": "#fff700",
    "containerColor": "#00e626",
    "innerWindowColor": "#fff700",
    "bannerImageUrl": "https://i.imgur.com/iUonjQ6.jpeg",
    "backgroundImageUrl": "https://i.imgur.com/9442uuo.png",
    "endingTextColor": "#000000",
    "customQuote": "Bill Guy the Science Nye"
}

//#startcode


corrr = '\n              <h2>THE CAMPAIGN TRAIL</h2><font id="wittyquote" size="4" color="white"><em>Bill! Bill! Bill! Bill!</em></font>\n            ';


nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#24a800";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#fff700";

document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$(".container")[0].style.backgroundColor = "#00e626";

document.getElementById("header").src = "https://i.imgur.com/iUonjQ6.jpeg";

document.body.background = "https://i.imgur.com/9442uuo.png";

document.head.innerHTML += "<style>#results_container {color:#000000;} .inner_window_w_desc {background-color:#fff700!important;}</style>";

//#endcode
