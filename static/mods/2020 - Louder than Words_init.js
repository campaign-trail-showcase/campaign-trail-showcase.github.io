campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 21,
        "fields": {
            "year": 2020,
            "summary": "<div style='overflow-y:scroll;height:200px;'><p><b>When Donald Trump upset Hillary Clinton in 2016 as an outsider businessman, it broke the political world.</b> So much so that even after four years of a chaotic presidency marked by Trump’s obvious political amateurishness, the Democratic Party has decided that the 2020 contest will be one billionaire against another.</p><p>Former hedge fund manager and philanthropist Tom Steyer had been engaged in liberal political activism for years, supporting liberal political causes and engaging in environmental activism. No one expected that this man who had never even run for political office would win the Democratic nomination. And yet, a shocking victory in South Carolina propelled him towards victory, and Steyer finds himself somewhat of a political anomaly.</p><p>Steyer is a billionaire businessman distrusted by the left, and yet his record and messaging suggests he is an anti-billionaire progressive who admires Bernie Sanders. Whatever he is, Steyer must form a clear identity for himself and unite the fragile Democratic coalition while battling Trump who outshines him on every front.</p><p>The pundits say 2020 is a favorable year for the Democrats, but will that be still the case with a milquetoast unknown like Steyer leading the party?</p><p>Can Steyer’s actions speak <b>Louder than Words</b> to propel him to the presidency?</p></li></ul></p></div>",
            "image_url": "https://i.imgur.com/yB8jIKp.jpg",
            "winning_electoral_vote_number": 270,
            "advisor_url": "https://i.imgur.com/Mcxe9Ax.jpg",
            "recommended_reading": "Nothing Here Yet.",
            "has_visits": 1,
            "no_electoral_majority_image": "https://i.imgur.com/tzBpeAV.jpg",
            "creator": "Dan Bryan",
            "display_year": "2020 - Louder than Words",
            "recommended_reading_enabled": true
        }
    }
];

campaignTrail_temp.temp_election_list = [
    {
        "id": 21,
        "year": 2020,
        "is_premium": 0,
        "display_year": "2020 - Louder than Words"
    }
];

RecReading = true;

campaignTrail_temp.credits = " u/Helios112263 with help from u/lespoon1";

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
        "pk": 300,
        "fields": {
            "first_name": "Tom",
            "last_name": "Steyer",
            "election": 21,
            "party": "Democratic",
            "state": "California",
            "priority": 1,
            "description": "<div style='overflow-y:scroll;height:200px;'<p><b>You Are Tom Steyer.</b></p><p>Your elite and privileged background say you should be some out-of-touch centrist. Your billionaire status and history as a hedge fund manager suggests you should be a Republican. And yet here you are, a firm liberal and an environmental activist who somehow dislikes other billionaires and fawns over Bernie Sanders. No one knows how you got here. Frankly, you can’t believe it either. But you’ve beaten your rivals and now stand as the Democratic nominee for President. And it’s your job now to use your fortunes to defeat Donald Trump, the billionaire who uses his wealth and status to do evil.</p><p>Your path won’t be easy. Progressives don’t quite trust you and most of the public still don’t really know who you are. Now, you have to solidify your identity. Are you a progressive? A liberal? A centrist? During the primaries, you could be anything the voters wanted. But now, you need to solidify your identity. You’ve got your work cut out for you, but you have good vibes and a strong work ethic, and maybe that’s all that the people will want when the alternative is the chaos that is Donald Trump.</p><p><i>Come on, Tom. Let’s get to work.</i><p></div>",
            "color_hex": "#0080ff",
            "secondary_color_hex": "#90C0FF",
            "is_active": 1,
            "image_url": "https://i.imgur.com/uxEeKgA.jpg",
            "electoral_victory_message": "<h3>Congratulations! You have won the 2020 election.</h3><p>Things may have been closer and more contested than you hoped for, but the final result remains. Can you help bring the country back together after a tumultuous few years? Or will you be seen as a lame duck from the first day -- unable to keep the two wings of your party coordinated? Time will tell.</p>",
            "electoral_loss_message": "<h3>Sorry! You have lost the 2020 election.</h3><p>After an election in which many of your supporters claimed democracy itself was at stake, what happens now? Perhaps the party will need to go in a completely different direction in 2024. As for yourself, it seems that your long, illustrious political career has surely drawn to a close.</p>",
            "no_electoral_majority_message": "<h3>Sorry! You have lost the 2020 election.</h3><p>In spite of the 269-269 tie in the electoral college, Republicans control a majority of state delegations in the House of Representatives. After an election in which many of your supporters claimed democracy itself was at stake, what happens now? Perhaps the party will need to go in a completely different direction in 2024.</p>",
            "description_as_running_mate": "",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 301,
        "fields": {
            "first_name": "Donald",
            "last_name": "Trump",
            "election": 21,
            "party": "Republican",
            "state": "Florida",
            "priority": 2,
            "description": "<div style='overflow-y:scroll;height:200px;'<p><b>This man is dangerous.</b></p><p>Both of you are billionaires, and yet you couldn’t be more different. While you chose to use your fortunes fighting for social justice and the environment, Trump chose to use his fortunes to spread hatred and tear America down. He just can’t be allowed to continue to govern by chaos and sow division, and it’s up to you to stop him. That’s why you fought to get him impeached, and that’s why you’re running for president.</p><p>Trump’s not going to be an easy candidate to beat. He outperforms you on charisma, the passion of his supporters, and general institutional support. He’s also the incumbent President, and beats you on “experience”. None of that will matter though, hopefully. People want change; they want a positive, results-focused leader with an actual vision, and you know you can provide that to them. You aren’t afraid of Trump, and you’re ready to fight this immoral monster masquerading as a statesman.</p><p><i>Now let’s go take this fake billionaire down.</i><p></div>",
            "color_hex": "#ff0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 1,
            "image_url": "https://i.imgur.com/wwG4bBt.jpg",
            "electoral_victory_message": "<h3>Congratulations! You have won the 2020 election.</h3><p>For the second time in a row, many analysts saw a victory for you as practically impossible. But whatever they say, it is clear that your Make America Great Again agenda has been vindicated. Where do you take things from here?</p>",
            "electoral_loss_message": "<h3>Sorry! You have lost the 2020 election.</h3><p>After an election in which many of your supporters claimed democracy itself was at stake, what happens now? Many analysts believe the party will need to go in a completely different direction next time. As for yourself, will you take these results sitting down, or will you prepare yourself for an epic political comeback in 2024?</p>",
            "no_electoral_majority_message": "<h3>Congratulations! You have won the 2020 election.</h3><p>In spite of the 269-269 tie in the electoral college, Republicans control a majority of state delegations in the House of Representatives. A lot of liberals are absolutely distraught and outraged that the election came down to such a technicality, but hey, those are the rules!</p>",
            "description_as_running_mate": "",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 302,
        "fields": {
            "first_name": "Cornel",
            "last_name": "West",
            "election": 21,
            "party": "Green",
            "state": "New York",
            "priority": 3,
            "description": "<p>Whether it’s Cornel West, or Jill Stein, or Howie Hawkins leading them, the Green Party are filled with hacks who want to always complain in opposition. You appreciate their dedication to the environment, but all they’ve done so far is complain and prevent real progressives from getting elected to public office. They’re here to stay, though, and you’ll have to put in some extra work to make sure they don’t become a bigger problem for you.</p>",
            "color_hex": "#008040",
            "secondary_color_hex": "#FFFFC0",
            "is_active": 0,
            "image_url": "https://i.imgur.com/YE8rkzY.jpg",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "'",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 303,
        "fields": {
            "first_name": "Daniel",
            "last_name": "Imperato",
            "election": 21,
            "party": "Libertarian",
            "state": "Florida",
            "priority": 4,
            "description": "<p>The Libertarians are odd at their best, and outright deranged at their worst. But you genuinely don’t know what to make of Daniel Imperato, their current nominee for president. He’s given himself a bunch of titles that you’re pretty sure aren’t real, and he doesn’t really seem to be running anything resembling a coherent campaign. For now, though, you’ve got bigger fish to fry, and this Imperato guy is the least of your worries this election.</p>",
            "color_hex": "#c4c400",
            "secondary_color_hex": "#A1FFA1",
            "is_active": 0,
            "image_url": "https://i.imgur.com/H9MQbVS.jpg",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "'",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 304,
        "fields": {
            "first_name": "Tammy",
            "last_name": "Baldwin",
            "election": 21,
            "party": "Democratic",
            "state": "Wisconsin",
            "priority": 5,
            "description": "'",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/HkzYLUT.jpg",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>Senator Tammy Baldwin seems like the natural choice to be your running mate. You’re an establishment-aligned billionaire and she’s a progressive with working-class roots. She’s affable, a record of winning in a purple swing state, and most importantly, Bernie likes her. You have obvious weaknesses with white working-class voters, and Baldwin would do wonders to bridge that gap, and help with suburban female voters too. Although she’s not black like many people hoped your running mate would be post-George Floyd, she IS a lesbian, which would obviously make her a historic choice on another front. Tammy would be a perfect running mate for you on all fronts, but be aware that Trump WILL make some disgusting attacks towards her using her sexuality, so just be ready for that.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 305,
        "fields": {
            "first_name": "Joaquin",
            "last_name": "Castro",
            "election": 21,
            "party": "Democratic",
            "state": "Texas",
            "priority": 6,
            "description": "'",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/yQ6XCtf.jpg",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>Congressman Joaquin Castro would also be an excellent choice for a running mate. Although he doesn’t have the same progressive credentials that other choices might, he’s a solidly mainstream Democrat with good relationships with the party leadership. Joaquin has also been in the spotlight recently with his strong opposition to Trump’s immigration policies, and he would help expand your outreach to Hispanic voters in the Southwest. Texas might not necessarily be winnable, but there are other states like Nevada and Arizona that you need. On the other hand, some would say he’s not experienced enough for the campaign or the vice presidency. Otherwise, Joaquin would be a pretty energetic running mate who would probably fit into your campaign quite nicely.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 306,
        "fields": {
            "first_name": "Pete",
            "last_name": "Buttigieg",
            "election": 21,
            "party": "Democratic",
            "state": "Indiana",
            "priority": 7,
            "description": "'",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/z3PXOjt.jpg",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>Former Mayor Pete Buttigieg was one of your stronger opponents in the primaries, showing an extraordinary amount of strength with young and college-educated voters before he dropped out in exchange for consideration for Cabinet. Although Pete’s number one on your list for UN Ambassador, some have suggested he’d make a great running mate given his national profile and proven electoral strength in the Midwest. Pete is a great speaker, a veteran, and has small-town charm paired with an attractive pragmatic progressive platform. Although Pete and Bernie didn’t have the greatest relationship in the primaries, they still broadly align on most issues, and the primaries have shown he is broadly popular. Just like Tammy, though, he IS gay, and might also be vulnerable to dirty attacks.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 307,
        "fields": {
            "first_name": "Andy",
            "last_name": "Beshear",
            "election": 21,
            "party": "Democratic",
            "state": "Kentucky",
            "priority": 8,
            "description": "'",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/HJlMZ7E.jpg",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>Governor Andy Beshear is a somewhat less likely choice because on the surface, he doesn’t bring any electoral benefits. He’s a straight white man from a deep-red state with not even a full year as the state’s governor. He’s also not someone the most attractive to the working class, as many argue that his political success in Kentucky is solely because of his father’s former service as governor. Andy definitely has a solid record of fighting for liberal causes as state attorney general, though, and so far, he has proven himself to be a steady, likeable leader trying his best. Still, he definitely doesn’t have the experience or the national profile to be running mate to you, and he doesn’t help the ticket in any noticeable way.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 308,
        "fields": {
            "first_name": "Susan",
            "last_name": "Rice",
            "election": 21,
            "party": "Democratic",
            "state": "Washington, D.C.",
            "priority": 9,
            "description": "'",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/WhYmdhS.jpg",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>Former National Security Advisor Susan Rice would be an interesting choice if your focus was solely on policy. With your lack of foreign policy experience (or knowledge for that matter), Susan’s wealth of experience in that area dating back to the Clinton years would definitely make her an effective second-in-command. On the other hand, while she’s a serviceable public speaker, she really has no campaign experience, and struggles with name recognition to the majority of voters, given her non-public roles in the past. She may be an ideal running mate for an elected politician with campaigning skills (like Cheney was to Bush), but to you, Susan wouldn’t be of much help. Still, if you really wanted to make a case for competency and leadership, Susan’s your gal.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 309,
        "fields": {
            "first_name": "Mike",
            "last_name": "Pence",
            "election": 21,
            "party": "Republican",
            "state": "Indiana",
            "priority": 10,
            "description": "'",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://i.imgur.com/DUfZYRA.jpg",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>Mike Pence was once seen as a morally righteous and principled man, placed on the ticket to balance Trump’s moral corruption, but he has thrown that all away to be vice president, the highest office he can ever aspire to. He’s a bigot who hides his hatred for minorities under a calm, pleasant facade as a man of devout faith, and has skirted by, quietly supporting every horrid decision by the Trump administration. He’s a competent enough politician, and Trump chose him for a reason. But it’s up to you to make the best choice and find a second-in-command who’ll beat this so-called “Christian Conservative” like a drum.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 310,
        "fields": {
            "first_name": "Andrew",
            "last_name": "Yang",
            "election": 21,
            "party": "Democratic",
            "state": "New York",
            "priority": 11,
            "description": "'",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://i.imgur.com/atfSXld.jpg",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>Entrepreneur Andrew Yang, a minor primary opponent, is another outside businessman like you, but unlike you, his career has been with the entrepreneur and tech areas. Considered somewhat of a “meme” candidate, Andrew spent most of his campaign pushing a handful of unique technocratic policies that gained him somewhat of a cult following but ultimately didn’t translate into votes. Andrew obviously would be a very strange choice given his lack of any political experience, but given your nomination, he could fit well into the whole “competent outsider businessman” energy that seems to be in the air right now. There are a lot of risks that come with having two rich businessmen on the ticket, but if you had to choose another one, Andrew would be your best choice.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 313,
        "fields": {
            "first_name": "Phil",
            "last_name": "Scott",
            "election": 21,
            "party": "Republican",
            "state": "Vermont",
            "priority": 14,
            "description": " ",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/6PvyK6b.jpg",
            "electoral_victory_message": " ",
            "electoral_loss_message": " ",
            "no_electoral_majority_message": " ",
            "description_as_running_mate": "<p>Well, if you’re really insistent on trying to sell the whole “unity against Trump” message, there’s no better choice on the Republican side than Governor Phil Scott. A man increasingly isolated from his own party, Phil claims to be socially liberal and fiscally conservative, but after years of working with the Vermont legislature, he has begun to look more and more like a moderate Democrat more than anything. Although choosing him would likely cause a big progressive walkout, Phil’s surprisingly friendly relationship with Bernie may actually help calm tensions with him, and he would also help a lot with independent and anti-Trump Republican voters. Phil’s also a proven leader, and with his record-high approvals in Vermont, no one would really say anything very negative about you choosing him.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 314,
        "fields": {
            "first_name": "Bernie",
            "last_name": "Sanders",
            "election": 21,
            "party": "Independent-Democratic",
            "state": "Vermont",
            "priority": 15,
            "description": " ",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/72PaRrF.jpg",
            "electoral_victory_message": " ",
            "electoral_loss_message": " ",
            "no_electoral_majority_message": " ",
            "description_as_running_mate": "<p>You can’t believe it. Even after all the tension between you and him in the primaries, you’ve actually gotten Bernie Sanders to be your running mate. You and Bernie don’t agree on a whole lot of issues, but you love the man anyways, and he seems to like you just fine despite you being a billionaire. Still, you know he’s not the best choice you could be making. Any goodwill you built up with moderates and independents will evaporate if this man’s on the ticket, although progressives will definitely turn out for you. He’ll definitely either make the campaign as an energetic bridge to progressives or break the campaign by taking away your sensible credibility with his aggressive rhetoric. He’s definitely the pick of your heart, but is he the pick of your head?</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 315,
        "fields": {
            "first_name": "Michael",
            "last_name": "Bloomberg",
            "election": 21,
            "party": "Democratic-Independent-Republican",
            "state": "New York",
            "priority": 1,
            "description": "Candidate description here.",
            "color_hex": "#CCCCCC",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://i.imgur.com/1GfCb8N.jpg",
            "electoral_victory_message": "Winner!",
            "electoral_loss_message": "Loser!",
            "no_electoral_majority_message": "Majority?",
            "description_as_running_mate": "<div style='overflow-y:scroll;height:200px;'<p><i><b>ALTERNATE SCENARIO</b></i></p><p>Well, this is awkward. No matter how competitive the primaries were, you definitely weren’t expecting a deadlocked convention leading to multiple ballots and backroom deals. But that’s what happened, and that’s how you got Mike Bloomberg as your running mate. Bloomberg certainly isn’t the worst running mate you could have, given his reasonably successful tenure as Mayor of New York City and broad electoral success in the primaries. On the other hand, having two relatively moderate billionaires on the same ticket isn’t going to enthuse anyone, and Bernie is by no means happy with this deal, already grumbling about a “Corrupt Bargain”. Bloomberg also has a couple of controversies from his time as mayor and business executive surrounding his work environment and policies, but this is the hand you were dealt, and there’s nothing you can do now.</p><p></div>",
            "candidate_score": 0,
            "running_mate": true
        }
    }
];

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 200,
        "fields": {
            "candidate": 300,
            "running_mate": 304
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 201,
        "fields": {
            "candidate": 300,
            "running_mate": 305
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 210,
        "fields": {
            "candidate": 300,
            "running_mate": 306
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 209,
        "fields": {
            "candidate": 300,
            "running_mate": 307
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 202,
        "fields": {
            "candidate": 300,
            "running_mate": 308
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 203,
        "fields": {
            "candidate": 300,
            "running_mate": 310
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 204,
        "fields": {
            "candidate": 300,
            "running_mate": 313
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 205,
        "fields": {
            "candidate": 301,
            "running_mate": 309
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 206,
        "fields": {
            "candidate": 300,
            "running_mate": 314
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 211,
        "fields": {
            "candidate": 300,
            "running_mate": 315
        }
    }
];

campaignTrail_temp.opponents_default_json = [
    {
        "election": 21,
        "candidates": [
            300,
            301,
            302,
            303,
        ]
    }
];

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 21,
        "candidates": [
            300,
            301,
            302,
            303,
        ]
    }
];


e = campaignTrail_temp

const startScreenUpdater = setInterval(function() {
const goBackButton = document.getElementById("candidate_id_back");
const candidateButton = document.getElementById("candidate_id_button");
const runningMateButton = document.getElementById("running_mate_id_button");
const finalScreenBB = document.getElementById("opponent_selection_id_back");
const finalScreenID = document.getElementById("opponent_selection_id_button");

const runningMateSelect = document.getElementById("running_mate_id");
if (runningMateSelect && runningMateSelect.value == "309") {
    if (runningMateButton) {
        runningMateButton.style.display = "none";}
    }
    }
)

jet_data = {
    "headerColor": "#f05b3a",
    "windowColor": "#74988f",
    "containerColor": "#001555",
    "innerWindowColor": "#74988f",
    "bannerImageUrl": "https://i.imgur.com/xW4irJ8.jpg",
    "backgroundImageUrl": "https://i.imgur.com/jQqtAAv.jpg",
    "gameTitle": "ACTIONS SPEAK LOUDER THAN WORDS",
    "customQuote": "“We will pay a heavy price if we insist on navigating the 21st century with a 20th century mindset.”",
    "endingTextColor": "#000000"
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
      .inner_window_w_desc { background-color: #74988f !important; }
    `;
    document.head.appendChild(style);
}

corrr = '\n              <h2>ACTIONS SPEAK LOUDER THAN WORDS</h2><font id="wittyquote" size="4" color="white"><em>“We will pay a heavy price if we insist on navigating the 21st century with a 20th century mindset.”</em></font>\n            ';

const theme = nct_stuff.themes[nct_stuff.selectedTheme];

// define / override theme values
theme.coloring_title     = "#f05b3a";
theme.coloring_window    = "#74988f";
theme.coloring_container = "#001555";
theme.header_image = "https://i.imgur.com/xW4irJ8.jpg";
theme.body_background = "https://i.imgur.com/jQqtAAv.jpg";

applyTheme(theme);

HistHexcolour=["#0080ff","#ff0000","#c4c400","#008040"];
HistName=[" Thomas F. Steyer"," Donald J. Trump"," Daniel J. P. Imperato"," Cornel R. West"];
HistEV=["316","222","0","0"];
HistPV=["83,038,775","70,793,585","3,038,001","1,386,475"];
HistPVP=["52.5%","44.7%","1.9%","0.9%"];

//#endcode