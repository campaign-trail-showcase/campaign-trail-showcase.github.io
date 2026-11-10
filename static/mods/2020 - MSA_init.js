campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 21,
        "fields": {
            "year": 2020,
            "summary": "<p>America is in crisis. COVID tears into the nation’s people; the Black Lives Matter riots set it alight; the crashing economy sends the world’s richest country into the gutter; and all the while, the President does nothing. It's so Joever...<br><br><b>President Emilia Nakamura</b> needs to bring her party four more years in the White House... but is it even worth it for her to carry the torch?<br><br><b>Senator Ginger Stripe</b> seeks to restore Republicans to the Oval Office on a message of stability and order after 12 years of Democratic leadership and the chaos of 2020.</p>",
            "image_url": "https://file.garden/aUR1tkyqajV7boaK/msa20redux%20electionimage.png",
            "winning_electoral_vote_number": 270,
            "advisor_url": "https://file.garden/aUR1tkyqajV7boaK/nfYB7.gif",
            "recommended_reading": "<h3>Hey! Thanks for playing!</h3><p>If a lot of things in this mod seem confusing, that's probably because this is based on a polsim that I was in, along with the other people who are featured in this mod. This was a pretty silly project that I worked on for a cumulative three days, probably? Still, I hope you enjoyed it! It's a simple classic-style mod with some limited CYOA with... questionable implementation, but I hope it was fun!<br><br><b>Credits</b><br>Coding - Ginger<br>Mod tools - Strawb & Jet<br>Music player - Moonbeam team<br>Art - Ginger<br>Coding assistance - Strawb, Fallen<br><br><b>Playtesting:</b><br>-Weegee<br>-NBC<br>-Wisest<br>-Ruby<br><br><b>References (that I remember):</b><br>-Biden '88 v. Bush<br>-1992 Perot<br>-1984 Reagan assassination",
            "has_visits": 1,
            "no_electoral_majority_image": "https://thecampaigntrail.net/static/images/2012-no-majority.jpg",
            "creator": "Dan Bryan",
            "is_historical": true,
            "display_year": "2020 - MSA",
            "recommended_reading_enabled": true,
            "site_description": "<p>America is in crisis. COVID tears into the nation’s people; the Black Lives Matter riots set it alight; the crashing economy sends the world’s richest country into the gutter; and all the while, the President does nothing. It's so Joever...<br><br><b>President Emilia Nakamura</b> needs to bring her party four more years in the White House... but is it even worth it for her to carry the torch?<br><br><b>Senator Ginger Stripe</b> seeks to restore Republicans to the Oval Office on a message of stability and order after 12 years of Democratic leadership and the chaos of 2020.</p>"
        }
    }
];

campaignTrail_temp.temp_election_list = [
    {
        "id": 21,
        "year": 2020,
        "is_premium": 0,
        "display_year": "2020 - MSA"
    }
];

RecReading = true;

campaignTrail_temp.credits = "Ginger";

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
        "pk": 2301,
        "fields": {
            "first_name": "Emilia",
            "last_name": "Nakamura",
            "election": 21,
            "party": "Democrat",
            "state": "New York",
            "priority": 1,
            "description": "<p>President Nakamura has been put through the wringer the past few years. After her initiative to finally achieve Medicare for All was stonewalled in committee and her anti-gerrymandering amendment was slaughtered at the hands of the RNC, the president has retreated into the Oval Office to shelter herself from the struggles of negotiating on Capitol Hill. If she wants to win re-election, it'll be a long, long road.</p>",
            "color_hex": "#012767",
            "secondary_color_hex": "#90C0FF",
            "is_active": 1,
            "image_url": "https://file.garden/aUR1tkyqajV7boaK/msa20redux%20nakamura%20thin.png",
            "electoral_victory_message": "<h3>Congratulations! You have won the 2020 election.</h3><p>Despite the COVID-19 pandemic, the BLM riots, and the general chaos of 2020, the Democratic Party has secured another four years in the White House, marking 16 years of Democrats! This is a shocking comeback, with Stripe having been projected to win over 400 electoral votes at one point, so enjoy yourself - this was a hard-earned victory!</p>",
            "electoral_loss_message": "<h3>Sorry! You have lost the 2020 election.</h3><p>Well, it's hard to say this wasn't expected, given the chaos of the COVID-19 pandemic, the struggles of the Democratic administration, and the general turmoil the country has gone through. Hopefully, Stripe will be willing to make amends after the election, and govern in a sensible, moderate manner. As for you, it's time to retire - maybe to a nice beach somewhere tropical...</p>",
            "no_electoral_majority_message": "<h3>Sorry! You have lost the 2020 election.</h3><p>In spite of the 269-269 tie in the electoral college, Republicans control a majority of state delegations in the House of Representatives. After an election in which many of your supporters claimed democracy itself was at stake, what happens now? Perhaps the party will need to go in a completely different direction in 2024.</p>",
            "description_as_running_mate": "",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 2401,
        "fields": {
            "first_name": "Ginger Jeanne",
            "last_name": "Stripe",
            "election": 21,
            "party": "Republican",
            "state": "Maine",
            "priority": 2,
            "description": "Senator Ginger Stripe is an odd figure in this day and age. A moderate Republican lacking the flashy antics of right-wing populist figures, she would ordinarily never get far enough to win the nomination; however, with the utter chaos that 2020 has brought, along with the inaction of the Democrats, her message is looking awfully appealing right now. ",
            "color_hex": "#B80024",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 1,
            "image_url": "https://file.garden/aUR1tkyqajV7boaK/msa20redux%20stripe%20thin.png",
            "electoral_victory_message": "<h3>Congratulations! You have won the 2020 election.</h3><p>Well, it's hard to say this wasn't expected, given the chaos of the COVID-19 pandemic, the struggles of the Democratic administration, and the general turmoil the country has gone through. Still, despite a bitter campaign, you managed to survive and take the White House! Depending on the promises you made during the campaign, you may have some trouble with your cabinet picks, but that's a worry for another day, and you shouldn't have any problem getting your legislative agenda through. Best of luck, Madam President!</p>",
            "electoral_loss_message": "<h3>Sorry! You have lost the 2020 election.</h3><p>Nobody really saw this coming. The national situation was unfavorable to Democrats, given their struggling and stagnant administration and the general chaos of 2020, but somehow Alberich managed a comeback. Your supporters are dumbfounded, and many Republican higher ups blame you for the loss. This probably means the corporate wing of the party will get their turn in 2024, and for you, your career is probably over, given that you're out of the Senate. Hopefully, you'll enjoy retirement.</p>",
            "no_electoral_majority_message": "<h3>Congratulations! You have won the 2020 election.</h3><p>In spite of the 269-269 tie in the electoral college, Republicans control a majority of state delegations in the House of Representatives. A lot of liberals are absolutely distraught and outraged that the election came down to such a technicality, but hey, those are the rules!</p>",
            "description_as_running_mate": "",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 304,
        "fields": {
            "first_name": "Kaeya",
            "last_name": "Alberich",
            "election": 21,
            "party": "Democratic",
            "state": "West Virginia",
            "priority": 5,
            "description": "'",
            "color_hex": "#024D6D",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://file.garden/aUR1tkyqajV7boaK/msa20redux%20alberich%20thin.png",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>Kaeya Alberich is currently the Vice President of the United States. A Democrat from West Virginia, Alberich has been a supporter of your administration's actions so far; in particular, he was crucial in prosecuting Israel for their actions in the Middle East. However, Alberich is a rather weak campaigner, and his stances on abortion may ruffle some feathers. It should be fine, though, as long as he isn't the nominee.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 305,
        "fields": {
            "first_name": "Susan",
            "last_name": "Rice",
            "election": 21,
            "party": "Democrat",
            "state": "Washington DC",
            "priority": 6,
            "description": "'",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://thecampaigntrail.net/static/images/susan-rice-2020.jpg",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>Susan Rice was a UN Ambassador and a National Security Advisor to Barack Obama, and brings decades of foreign policy experience. She would be a true center-left pick, but has never run for elected office. Her foreign policy record would also be a turnoff to progressives.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 306,
        "fields": {
            "first_name": "Karen",
            "last_name": "Bass",
            "election": 21,
            "party": "Democrat",
            "state": "California",
            "priority": 7,
            "description": "'",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://thecampaigntrail.net/static/images/karen-bass-2020.jpg",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>Karen Bass is a Congresswoman from California and Chair of the Congressional Black Caucus. She has taken more progressive policy stances (including support for Medicare For All) than some of the other candidates, with the attendant supporters and detractors.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 307,
        "fields": {
            "first_name": "Gretchen",
            "last_name": "Whitmer",
            "election": 21,
            "party": "Democrat",
            "state": "Michigan",
            "priority": 8,
            "description": "'",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://thecampaigntrail.net/static/images/gretchen-whitmer-2020.jpg",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>Gretchen Whitmer is the Governor of Michigan who could bring some undecideds over the line in that state and region. She is seen as a mainstream Democrat with solid experience. Choosing her would anger some supporters who expect an African-American running-mate after this summer's protests.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 308,
        "fields": {
            "first_name": "Elizabeth",
            "last_name": "Warren",
            "election": 21,
            "party": "Democrat",
            "state": "Massachusetts",
            "priority": 9,
            "description": "'",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://thecampaigntrail.net/static/images/elizabeth-warren-2020.jpg",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>Elizabeth Warren is a Senator from Massachusetts who made a serious run at the Democratic Nomination in 2020. She is generally seen as a solid progressive with a particular interest in financial reform and regulation. Choosing her would anger some supporters who expect an African-American running-mate after this summer's protests.</p>",
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
            "image_url": "https://thecampaigntrail.net/static/images/mike-pence-2020.jpg",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>Mike Pence has served as your Vice President for the past four years, sticking to all of your talking points and staying out of the limelight. Most feel he should be rewarded for this loyalty with another turn on the top of the ticket. He also helps shore up your support with social conservatives.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 310,
        "fields": {
            "first_name": "Nikki",
            "last_name": "Haley",
            "election": 21,
            "party": "Republican",
            "state": "South Carolina",
            "priority": 11,
            "description": "'",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://thecampaigntrail.net/static/images/nikki-haley-2020.jpg",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>Nikki Haley has served as the Governor of South Carolina, and as a UN Ambassador. She could help you moderate your image and try to close the female vote. Choosing her would probably lead to hard feelings between yourself and Pence, but would your voters care?</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 311,
        "fields": {
            "first_name": "Spike",
            "last_name": "Cohen",
            "election": 21,
            "party": "Libertarian",
            "state": "Maryland",
            "priority": 12,
            "description": "'",
            "color_hex": "#FFFF00",
            "secondary_color_hex": "#FFFFC0",
            "is_active": 0,
            "image_url": "'",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "'",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 313,
        "fields": {
            "first_name": "Val",
            "last_name": "Demings",
            "election": 21,
            "party": "Democrat",
            "state": "Florida",
            "priority": 14,
            "description": " ",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://thecampaigntrail.net/static/images/val-demings-2020.jpg",
            "electoral_victory_message": " ",
            "electoral_loss_message": " ",
            "no_electoral_majority_message": " ",
            "description_as_running_mate": "<p>Val Demings is a Congresswoman and former police chief from Florida. She could allow Biden to select a black running mate with more moderate credentials than some of the other choices. However, she has had a limited national profile and may be a disappointment to the more progressive wing of the party.<p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 314,
        "fields": {
            "first_name": "Tammy",
            "last_name": "Duckworth",
            "election": 21,
            "party": "Democrat",
            "state": "Illinois",
            "priority": 15,
            "description": " ",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://thecampaigntrail.net/static/images/tammy-duckworth-2020.jpg",
            "electoral_victory_message": " ",
            "electoral_loss_message": " ",
            "no_electoral_majority_message": " ",
            "description_as_running_mate": "<p>Tammy Duckworth is a Senator from Illinois who served in Iraq and has been active in foreign policy issues. She could help in the Midwest, but was also born in Thailand (as a U.S. citizen) and will need to deflect questions about her eligibility. Additionally, many party activists are expecting an African-American to be selected as well.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 2402,
        "fields": {
            "first_name": "New",
            "last_name": "Running Mate",
            "election": 21,
            "party": "Party",
            "state": "State",
            "priority": 1,
            "description": "Running mate description here.",
            "color_hex": "#CCCCCC",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "",
            "electoral_victory_message": "Winner!",
            "electoral_loss_message": "Loser!",
            "no_electoral_majority_message": "Majority?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 2501,
        "fields": {
            "first_name": "Curtis",
            "last_name": "Sliwa",
            "election": 21,
            "party": "Reform",
            "state": "State",
            "priority": 1,
            "description": "Candidate description here.",
            "color_hex": "#6a3e75",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://file.garden/aUR1tkyqajV7boaK/msa20redux%20sliwa.png",
            "electoral_victory_message": "Winner!",
            "electoral_loss_message": "Loser!",
            "no_electoral_majority_message": "Majority?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 2502,
        "fields": {
            "first_name": "Michael",
            "last_name": "Conrad",
            "election": 21,
            "party": "Transparency",
            "state": "State",
            "priority": 1,
            "description": "Candidate description here.",
            "color_hex": "#bcd5dc",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "",
            "electoral_victory_message": "Winner!",
            "electoral_loss_message": "Loser!",
            "no_electoral_majority_message": "Majority?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 2503,
        "fields": {
            "first_name": "Joe",
            "last_name": "Arpaio",
            "election": 21,
            "party": "Republican",
            "state": "Arizona",
            "priority": 1,
            "description": "Running mate description here.",
            "color_hex": "#B52A00",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://file.garden/aUR1tkyqajV7boaK/msa20redux%20arpaio%20thin.png",
            "electoral_victory_message": "Winner!",
            "electoral_loss_message": "Loser!",
            "no_electoral_majority_message": "Majority?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 2504,
        "fields": {
            "first_name": "New",
            "last_name": "Running Mate",
            "election": 21,
            "party": "Party",
            "state": "State",
            "priority": 1,
            "description": "Running mate description here.",
            "color_hex": "#CCCCCC",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "",
            "electoral_victory_message": "Winner!",
            "electoral_loss_message": "Loser!",
            "no_electoral_majority_message": "Majority?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 2505,
        "fields": {
            "first_name": "New",
            "last_name": "Running Mate",
            "election": 21,
            "party": "Party",
            "state": "State",
            "priority": 1,
            "description": "Running mate description here.",
            "color_hex": "#CCCCCC",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "",
            "electoral_victory_message": "Winner!",
            "electoral_loss_message": "Loser!",
            "no_electoral_majority_message": "Majority?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 2506,
        "fields": {
            "first_name": "New",
            "last_name": "Running Mate",
            "election": 21,
            "party": "Party",
            "state": "State",
            "priority": 1,
            "description": "Running mate description here.",
            "color_hex": "#CCCCCC",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "",
            "electoral_victory_message": "Winner!",
            "electoral_loss_message": "Loser!",
            "no_electoral_majority_message": "Majority?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 2507,
        "fields": {
            "first_name": "New",
            "last_name": "Running Mate",
            "election": 21,
            "party": "Party",
            "state": "State",
            "priority": 1,
            "description": "Running mate description here.",
            "color_hex": "#CCCCCC",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "",
            "electoral_victory_message": "Winner!",
            "electoral_loss_message": "Loser!",
            "no_electoral_majority_message": "Majority?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 2508,
        "fields": {
            "first_name": "Mike",
            "last_name": "Johnson",
            "election": 21,
            "party": "Republican",
            "state": "Louisiana",
            "priority": 1,
            "description": "Running mate description here.",
            "color_hex": "#CCCCCC",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://file.garden/aUR1tkyqajV7boaK/msa20redux%20johnson%20thin.png",
            "electoral_victory_message": "Winner!",
            "electoral_loss_message": "Loser!",
            "no_electoral_majority_message": "Majority?",
            "description_as_running_mate": "<p> Mike Johnson is a mostly ordinary Republican congressman, with one glaring exception. For a brief period in 2019, Mike Johnson served as the Speaker of the House of Representatives, due to a severe miscalculation on the part of Democratic House leadership leading to the Republicans winning the speakership vote on a technicality. For this reason, Johnson has become increasingly respected within the Republican Party, and would be a relatively inoffensive pick for the Vice Presidency, though he would only serve to increase trust among the Republican Party's core base rather than expand the coalition in any way. </p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 2509,
        "fields": {
            "first_name": "Joe",
            "last_name": "Biden",
            "election": 21,
            "party": "Democratic",
            "state": "Delaware",
            "priority": 1,
            "description": "Running mate description here.",
            "color_hex": "#CCCCCC",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://file.garden/aUR1tkyqajV7boaK/msa20redux%20biden%20thin.png",
            "electoral_victory_message": "Winner!",
            "electoral_loss_message": "Loser!",
            "no_electoral_majority_message": "Majority?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 2510,
        "fields": {
            "first_name": "Curtis",
            "last_name": "Sliwa",
            "election": 21,
            "party": "Republican",
            "state": "New York",
            "priority": 1,
            "description": "Running mate description here.",
            "color_hex": "#8E1C31",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://file.garden/aUR1tkyqajV7boaK/msa20redux%20sliwa.png",
            "electoral_victory_message": "Winner!",
            "electoral_loss_message": "Loser!",
            "no_electoral_majority_message": "Majority?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 2511,
        "fields": {
            "first_name": "Glup",
            "last_name": "Shitto",
            "election": 21,
            "party": "Party",
            "state": "State",
            "priority": 1,
            "description": "Running mate description here.",
            "color_hex": "#CCCCCC",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "",
            "electoral_victory_message": "Winner!",
            "electoral_loss_message": "Loser!",
            "no_electoral_majority_message": "Majority?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 2512,
        "fields": {
            "first_name": "Glup",
            "last_name": "Shitto Two",
            "election": 21,
            "party": "Party",
            "state": "State",
            "priority": 1,
            "description": "Running mate description here.",
            "color_hex": "#CCCCCC",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "",
            "electoral_victory_message": "Winner!",
            "electoral_loss_message": "Loser!",
            "no_electoral_majority_message": "Majority?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": true
        }
    }
];

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 2302,
        "fields": {
            "candidate": 2301,
            "running_mate": 304
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 2403,
        "fields": {
            "candidate": 2401,
            "running_mate": 2508
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 2511,
        "fields": {
            "candidate": 2501,
            "running_mate": 2511
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 2512,
        "fields": {
            "candidate": 2502,
            "running_mate": 2512
        }
    }
];

campaignTrail_temp.opponents_default_json = [
    {
        "election": 21,
        "candidates": [
            2301,
            2401,
            2501,
            2502
        ]
    }
];

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 21,
        "candidates": [
            2301,
            2401,
            2501,
            2502
        ]
    }
];

campaignTrail_temp.modBoxTheme = {
    "header_color": "#2d3860",
    "header_text_color": "#ffffff",
    "header_text_shadow": "0px 0px 0px rgba(0, 0, 0, 0.7)",
    "header_margin": "10px",
    "description_background_color": "#111827",
    "description_text_color": "#ffffff",
    "main_color": "#E1E1EA",
    "secondary_color": "#1C233D",
    "secondary_hover_color": "#2d3860",
    "scrollbar_color": "#e1e1ea #ffffff",
    "scrollbar_width": "auto",
    "image_border": "2px solid #111827",
    "ui_text_color": "#ffffff"
};

jet_data = {
    "headerColor": "#2D3860",
    "headerTextColor": "#ffffff",
    "windowColor": "#E1E1EA",
    "containerColor": "#ffffff",
    "innerWindowColor": "#D5D6E3",
    "innerWindowTextColor": "#000000",
    "descriptionWindowColor": "#f8f8f8",
    "descriptionWindowTextColor": "#000000",
    "startButtonColor": "#e8e8e8",
    "bannerImageUrl": "https://file.garden/aUR1tkyqajV7boaK/banner.png",
    "backgroundImageUrl": "https://file.garden/aUR1tkyqajV7boaK/msa20redux%20background.png",
    "gameTitle": "MEEP'S CAMPAIGN TRAIL",
    "customQuote": "",
    "quoteTextColor": "#ffffff",
    "endingTextColor": "#000000",
    "modBoxTheme": {
        "header_color": "#2d3860",
        "header_text_color": "#ffffff",
        "header_image_url": "",
        "header_text_shadow": "1px 1px 2px rgba(0, 0, 0, 0.7)",
        "header_font": "",
        "header_margin": "10px",
        "description_background_color": "#111827",
        "description_text_color": "#ffffff",
        "main_color": "#E1E1EA",
        "secondary_color": "#1C233D",
        "secondary_hover_color": "#2d3860",
        "scrollbar_color": "#e1e1ea #ffffff",
        "scrollbar_width": "auto",
        "image_border": "2px solid #111827",
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
        gameWindow.style.backgroundImage = `url("https://file.garden/aUR1tkyqajV7boaK/msa20redux%20image%20bg.png")`
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
      #results_container { color: #000000;}
      #wittyquote { color: #ffffff; }
      #main_content_area_reading { display: flex; flex-direction: column; }
      #recommended_reading_box { overflow-y: scroll; margin-bottom: 50px; }
      .game_header h2 { color: #ffffff; }
      .inner_window_w_desc { background-color: #D5D6E3 !important; color: #000000; }
      .inner_window_front, .person_description_window, .election_description_window, .description_window_small { background-color: #f8f8f8 !important; color: #000000; }
      .campaign_trail_start_emphasis { background-color: #e8e8e8 !important; }
    `;
    document.head.appendChild(style);
}

corrr = "\n              <h2>MEEP'S CAMPAIGN TRAIL</h2>\n            ";

const theme = nct_stuff.themes[nct_stuff.selectedTheme];

// define / override theme values
theme.coloring_title     = "#2D3860";
theme.coloring_window    = "#E1E1EA";
theme.coloring_container = "#ffffff";
theme.header_image = "https://file.garden/aUR1tkyqajV7boaK/banner.png";
theme.body_background = "https://file.garden/aUR1tkyqajV7boaK/msa20redux%20background.png";

applyTheme(theme);
//#endcode

// This is a modified version of the music player
// used in the mod 1992: Moonbeam.
class Song {
  constructor(title, artist, coverLink, audioLink) {
    this.title = title;
    this.artist = artist;
    this.coverLink = coverLink;
    this.audioLink = audioLink;
  }
  getTitle() { return this.title; }
  getArtist() { return this.artist; }
  getCoverLink() { return this.coverLink; }
  getAudioLink() { return this.audioLink; }
}

class Playlist {
  constructor(songs = []) {
    this.songs = songs;
    this.currentSongIndex = 0;
  }
  addSong(song) { this.songs.push(song); }

  getCurrentSong() {
    if (this.songs.length === 0) {
      return new Song("No Songs", "Add songs to a playlist", "https://itsastronomical.com/assets/music/buttons.png", "");
    }
    return this.songs[this.currentSongIndex];
  }

  playNext() {
    if (this.songs.length === 0) return;
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
  }

  playPrevious() {
    if (this.songs.length === 0) return;
    this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
  }
}

window.Playlist = Playlist;
window.Song = Song;

let activePlaylist = new Playlist();
let audioInstance = null;
let currentVolume = 5;

function changePlaylist(newPlaylist) {
  activePlaylist = newPlaylist;
  activePlaylist.currentSongIndex = 0;

  updateUI(activePlaylist);

  const audio = getAudioElement();
  const song = activePlaylist.getCurrentSong();

  if (song && song.getAudioLink()) {
    audio.src = song.getAudioLink();
    audio.play().catch(e => console.log("Autoplay blocked or waiting for interaction", e));
    updatePlayPauseIcon(true);
  }
}
window.changePlaylist = changePlaylist;

function updateUI(playlist) {
  const currentSong = playlist.getCurrentSong();
  const player = document.getElementById("player") || document.querySelector(".player");

  if (!player || !currentSong) return;

  const cover = player.querySelector(".player__album-art");
  const title = player.querySelector(".player__song-title");
  const artist = player.querySelector(".player__song-artist");

  if (cover) cover.src = currentSong.getCoverLink();
  if (title) title.textContent = currentSong.getTitle();
  if (artist) artist.textContent = currentSong.getArtist();
}
window.updateUI = updateUI;

// helpers
function getAudioElement() {
  if (!audioInstance) {
    audioInstance = document.createElement("audio");
    audioInstance.id = "audio";
    document.body.appendChild(audioInstance);
  }
  return audioInstance;
}

function updatePlayPauseIcon(isPlaying) {
  const btn = document.querySelector(".player__btn--playpause");
  if (btn) {
    if (isPlaying) {
      btn.classList.add("is-playing");
      btn.title = "Pause";
    } else {
      btn.classList.remove("is-playing");
      btn.title = "Play";
    }
  }
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// setup
function setupMusicPlayer() {
  const gameWindow = document.getElementById("game_window");
  if (!gameWindow) {
    console.warn("game_window element not found. Player will not be attached.");
    return;
  }

  // prevent duplicate players
  if (document.getElementById("player") || document.querySelector(".player")) return;

  const defaultSongs = [
    ["Another Day In Paradise", "Phil Collins", "https://file.garden/aUR1tkyqajV7boaK/another%20day%20paradise.jpg", "https://file.garden/aUR1tkyqajV7boaK/another%20day%20in%20paradise.wav"],
["Out of Touch", "Daryl Hall & John Oates", "https://file.garden/aUR1tkyqajV7boaK/out%20of%20touch.jpg", "https://file.garden/aUR1tkyqajV7boaK/out%20of%20touch.mp3"],
["I Wish", "Stevie Wonder", "https://file.garden/aUR1tkyqajV7boaK/i%20wish.jpg", "https://file.garden/aUR1tkyqajV7boaK/i%20wish.mp3"]
  ];

  if (activePlaylist.songs.length === 0) {
    defaultSongs.forEach(data => activePlaylist.addSong(new Song(...data)));
  }

  const savedLayout = localStorage.getItem('walkman_layout');
  const isHorizontal = savedLayout === 'horizontal';
  const playerClass = isHorizontal ? 'player player--horizontal' : 'player';
  const lockClass = isHorizontal ? 'player__lock-switch active' : 'player__lock-switch';

  // inject CSS
  const style = document.createElement("style");
  style.textContent = `
    :root {
      --player-bg: #212121;
      --player-border: #1a1a1a;
      --lcd-bg: #20372f;
      --lcd-text: #a1d8a3;
      --text-primary: #d1d1d1;
      --text-secondary: #888;
      --accent-color: #e0e0e0;
      --button-bg: #4d4d4d;
      --button-border: #353535;
      --icon-color: #d1d1d1;
    }
    .player {
      display: flex;
      background: var(--player-bg);
      border: 2px solid var(--player-border);
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.1);
      font-family: 'Consolas', IBM Courier, Arial, sans-serif;
      width: 100%;
      max-width: 360px;
      margin: 15px auto;
      color: var(--text-primary);
      overflow: hidden;
      transition: max-width 0.3s ease, height 0.3s ease;
    }
    .player__body {
      flex-grow: 1; padding: 8px;
      display: flex; flex-direction: column; gap: 8px;
    }
    .player__header {
      display: flex; justify-content: space-between; align-items: center;
      font-size: 9px; color: var(--text-secondary);
      text-transform: uppercase; letter-spacing: 0.5px;
    }
    .player__brand-sony { font-weight: bold; font-size: 14px; color: var(--accent-color); }
    .player__features { display: flex; gap: 8px; }
    .player__features span {
      border: 1px solid #3b3d44;
      border-radius: 2px;
      padding: 1px 4px;
      background: rgba(0, 0, 0, 0.2);
    }
    .player__window {
      background: #111; border: 1px solid #000;
      border-radius: 4px; padding: 10px;
      box-shadow: inset 0 0 10px rgba(0,0,0,0.7);
      display: flex; align-items: center; justify-content: center;
    }
    .player__window-inner { background: #333; border: 1px solid #444; width: 100%; }
    .player__album-art { display: block; width: 100%; height: auto; object-fit: cover; max-height: 260px; }

    .player__lcd-display {
      background: var(--lcd-bg); border: 2px solid #1a2924;
      border-radius: 4px; padding: 6px 10px;
      box-shadow: inset 0 0 5px rgba(0,0,0,0.5); color: var(--lcd-text);
    }
    .player__song-info {
      text-align: center; padding-bottom: 4px;
      border-bottom: 1px solid #2a4b3e; margin-bottom: 4px;
    }
    .player__song-title { font-size: 14px; font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .player__song-artist { font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .player__progress-container { display: flex; align-items: baseline; gap: 6px; width: 100%; }
    .player__time-current, .player__time-duration { font-size: 11px; min-width: 35px; text-align: center; }

    .progress-bar-stack { position: relative; width: 100%; height: 8px; display: flex; align-items: center; }
    .progress-bar--display, .progress-bar--interactive { position: absolute; top: 0; left: 0; width: 100%; height: 100%; margin: 0; padding: 0; }
    .progress-bar--display { -webkit-appearance: none; appearance: none; }
    .progress-bar--display::-webkit-progress-bar { background-color: #1a2924; border-radius: 4px; }
    .progress-bar--display::-webkit-progress-value { background-color: var(--lcd-text); border-radius: 4px; }
    .progress-bar--interactive { -webkit-appearance: none; appearance: none; background: transparent; cursor: pointer; z-index: 2; }
    .progress-bar--interactive::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 0; height: 8px; }
    .progress-bar--interactive::-moz-range-thumb { width: 0; height: 0; border: 0; background: transparent; }
    .progress-bar--interactive::-moz-range-track { background: transparent; border: none; }
    .progress-bar--display::-moz-progress-bar { background-color: #195905; }

    .player__controls-area { margin-top: 3px; text-align: center; }
    .player__brand-walkman {
      font-size: 12px; font-style: italic; font-weight: bold; color: var(--text-secondary);
      letter-spacing: 1.5px; margin-bottom: 8px;
    }
    .player__controls { display: flex; align-items: center; justify-content: center; gap: 12px; }
    .player__btn {
      border: none; padding: 0;
      width: 32px; height: 32px;
      cursor: pointer; background: var(--button-bg);
      border-radius: 50%; border: 2px solid var(--button-border);
      box-shadow: 0 2px 2px #111, inset 0 -1px 1px rgba(255,255,255,0.1);
      transition: all 0.1s ease-out;
      display: flex; align-items: center; justify-content: center;
    }
    .player__btn:hover { background-color: #606060; }
    .player__btn:active { transform: translateY(1px); box-shadow: 0 1px 1px #111, inset 0 1px 2px rgba(0,0,0,0.5); }
    .player__btn svg { width: 60%; height: 60%; fill: var(--icon-color); transition: fill 0.2s; }
    .player__btn:hover svg { fill: #fff; }
    .player__btn--playpause { width: 38px; height: 38px; }
    .player__btn--playpause .icon-pause { display: none; }
    .player__btn--playpause.is-playing .icon-play { display: none; }
    .player__btn--playpause.is-playing .icon-pause { display: block; }

    .player__side-panel {
      background: #1c1c1c; border-left: 2px solid #111;
      display: flex; flex-direction: column; align-items: center;
      justify-content: space-between;
      padding: 15px 6px;
      width: 50px; box-sizing: border-box;
    }
    .player__volume-group {
      display: flex; flex-direction: column;
      align-items: center; gap: 8px;
      flex-grow: 1;
    }
    .player__side-label {
      font-size: 9px; color: var(--text-secondary);
      transform: rotate(90deg);
      letter-spacing: 0.5px;
      margin: 0.5em 0 1.5em 0;
    }
    .player__volume-area {
      width: 100%; height: 170px;
      display: flex; align-items: center; justify-content: center; position: relative;
    }

    input[type=range].player__volume-slider {
      -webkit-appearance: none; appearance: none;
      width: 150px; height: 20px;
      background: transparent; transform: rotate(-90deg); cursor: pointer;
    }
    input[type=range].player__volume-slider::-webkit-slider-runnable-track {
      width: 100%; height: 6px; background: #050505;
      border: 1px solid #333; border-radius: 3px;
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.9), 0 1px 0 rgba(255,255,255,0.05);
    }
    input[type=range].player__volume-slider::-webkit-slider-thumb {
      -webkit-appearance: none; height: 16px; width: 24px; margin-top: -6px;
      background: repeating-linear-gradient(90deg, #4a4a4a, #4a4a4a 2px, #2a2a2a 3px, #2a2a2a 4px);
      border: 1px solid #111; border-radius: 2px; box-shadow: 0 2px 4px #000;
    }
    input[type=range].player__volume-slider::-moz-range-track {
      width: 100%; height: 6px; background: #050505; border: 1px solid #333; border-radius: 3px;
    }
    input[type=range].player__volume-slider::-moz-range-thumb {
      height: 16px; width: 24px; border: 1px solid #111; border-radius: 2px;
      background: repeating-linear-gradient(90deg, #4a4a4a, #4a4a4a 2px, #2a2a2a 3px, #2a2a2a 4px);
    }

    .player__lock { text-align: center; margin-bottom: 5px; cursor: pointer; }
    .player__lock-label { font-size: 9px; color: var(--text-secondary); }

    .player__lock-switch {
      width: 22px; height: 10px; background: #000;
      border-radius: 8px; border: 1px solid #333;
      margin: 3px auto 0; position: relative;
      transition: background 0.2s;
    }
    .player__lock-switch::after {
      content: ''; position: absolute;
      width: 10px; height: 10px; background: #d32f2f;
      border-radius: 50%; top: -1px; left: -1px;
      border: 1px solid #555; box-shadow: 0 1px 2px rgba(0,0,0,0.5);
      transition: left 0.2s, background 0.2s;
    }

    .player__lock-switch.active::after {
      left: 11px;
      background: #4caf50;
    }

    .player.player--horizontal { max-width: 600px; }

    .player.player--horizontal .player__body {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto 1fr;
      gap: 12px;
      grid-template-areas:
        "window header"
        "window lcd"
        "window controls";
      align-items: center;
      padding-right: 15px;
    }

    .player.player--horizontal .player__window { grid-area: window; height: 100%; margin: 0; }
    .player.player--horizontal .player__header { grid-area: header; align-self: end; border-bottom: 1px solid #333; padding-bottom: 5px; }
    .player.player--horizontal .player__lcd-display { grid-area: lcd; }
    .player.player--horizontal .player__controls-area { grid-area: controls; align-self: start; }
    .player.player--horizontal .player__album-art { max-height: 100%; aspect-ratio: 1/1; }
  `;
  document.head.appendChild(style);

  // create HTML
  const playerContainer = document.createElement("div");
  playerContainer.id = "player";
  playerContainer.className = playerClass;
  playerContainer.innerHTML = `
    <div class="player__body">
      <div class="player__header">
        <span class="player__brand-sony">SONY</span>
        <div class="player__features">
          <span>DOLBY B NR</span>
          <span>EX DBB</span>
        </div>
      </div>
      <div class="player__window">
        <div class="player__window-inner">
          <img src="" alt="Album Cover" class="player__album-art">
        </div>
      </div>
      <div class="player__lcd-display">
        <div class="player__song-info">
          <div class="player__song-title"></div>
          <div class="player__song-artist"></div>
        </div>
        <div class="player__progress-container">
          <span class="player__time-current">00:00</span>
          <div class="progress-bar-stack">
            <progress class="progress-bar--display" value="0" max="100"></progress>
            <input type="range" class="progress-bar--interactive" value="0" min="0" max="100" step="0.1">
          </div>
          <span class="player__time-duration">00:00</span>
        </div>
      </div>
      <div class="player__controls-area">
        <div class="player__brand-walkman">WALKMAN</div>
        <div class="player__controls">
          <button class="player__btn player__btn--prev" id="prevButton" title="Previous">
            <svg class="icon-prev" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path></svg>
          </button>
          <button class="player__btn player__btn--playpause" id="playPauseButton" title="Play/Pause">
            <svg class="icon-play" viewBox="0 0 24 24"><path d="M7.5 5v15l11-7z"></path></svg>
            <svg class="icon-pause" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>
          </button>
          <button class="player__btn player__btn--next" id="nextButton" title="Next">
            <svg class="icon-next" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path></svg>
          </button>
          <button class="player__btn player__btn--stop" id="stopButton" title="Stop">
            <svg class="icon-stop" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12"></rect></svg>
          </button>
        </div>
      </div>
    </div>
    <div class="player__side-panel">
      <div class="player__volume-group">
        <span class="player__side-label">VOLUME</span>
        <div class="player__volume-area">
          <input type="range" class="player__volume-slider" id="volumeSlider" min="0" max="10" step="1" value="${currentVolume}">
        </div>
      </div>
      <div class="player__lock">
        <span class="player__lock-label">HOLD</span>
        <div class="${lockClass}"></div>
      </div>
    </div>
  `;

  gameWindow.insertAdjacentElement("afterend", playerContainer);

  // set up audio & logic
  const audio = getAudioElement();
  const startSong = activePlaylist.getCurrentSong();
  if (startSong && startSong.getAudioLink()) audio.src = startSong.getAudioLink();
  audio.volume = currentVolume / 10;

  const playPauseBtn = playerContainer.querySelector(".player__btn--playpause");
  const prevBtn = playerContainer.querySelector(".player__btn--prev");
  const nextBtn = playerContainer.querySelector(".player__btn--next");
  const stopBtn = playerContainer.querySelector(".player__btn--stop");
  const volumeSlider = playerContainer.querySelector(".player__volume-slider");
  const progressBarDisplay = playerContainer.querySelector(".progress-bar--display");
  const progressBarInteractive = playerContainer.querySelector(".progress-bar--interactive");
  const currentTimeDisplay = playerContainer.querySelector(".player__time-current");
  const durationTimeDisplay = playerContainer.querySelector(".player__time-duration");
  const lockSwitchArea = playerContainer.querySelector(".player__lock");
  const lockSwitch = playerContainer.querySelector(".player__lock-switch");

  // play/pause
  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      updatePlayPauseIcon(true);
    } else {
      audio.pause();
      updatePlayPauseIcon(false);
    }
  });

  // next/prev helper
  const playSongAtIndex = () => {
    updateUI(activePlaylist);
    const song = activePlaylist.getCurrentSong();
    if (song && song.getAudioLink()) {
      audio.src = song.getAudioLink();
      audio.play().catch(e => console.log("Autoplay blocked or waiting for interaction", e));
      updatePlayPauseIcon(true);
    }
  };

  nextBtn.addEventListener("click", () => {
    activePlaylist.playNext();
    playSongAtIndex();
  });

  prevBtn.addEventListener("click", () => {
    activePlaylist.playPrevious();
    playSongAtIndex();
  });

  stopBtn.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    updatePlayPauseIcon(false);
  });

  // layout switch
  lockSwitchArea.addEventListener("click", () => {
    const isNowHorizontal = playerContainer.classList.toggle("player--horizontal");
    lockSwitch.classList.toggle("active");
    localStorage.setItem("walkman_layout", isNowHorizontal ? "horizontal" : "vertical");
  });

  // progress bar & time updates
  const updateProgress = () => {
    if (Number.isFinite(audio.duration) && audio.duration > 0) {
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      const safePercent = isNaN(progressPercent) ? 0 : progressPercent;
      progressBarDisplay.value = safePercent;
      progressBarInteractive.value = safePercent;
      currentTimeDisplay.textContent = formatTime(audio.currentTime);
      durationTimeDisplay.textContent = formatTime(audio.duration);
    }
  };

  audio.addEventListener("timeupdate", updateProgress);
  audio.addEventListener("loadedmetadata", updateProgress);

  audio.addEventListener("ended", () => {
    activePlaylist.playNext();
    playSongAtIndex();
  });

  progressBarInteractive.addEventListener("input", (e) => {
    if (Number.isFinite(audio.duration)) {
      audio.currentTime = (e.target.value / 100) * audio.duration;
    }
  });

  // volume
  volumeSlider.addEventListener("input", (e) => {
    currentVolume = parseInt(e.target.value, 10);
    audio.volume = currentVolume / 10;
  });

  // initial play
  updateUI(activePlaylist);
  audio.play()
    .then(() => updatePlayPauseIcon(true))
    .catch(() => updatePlayPauseIcon(false));
}

// compatibility object wrapper
window.WalkmanPlayer = {
  init: function(targetSelector, initialPlaylist) {
    if (initialPlaylist) activePlaylist = initialPlaylist;
    setupMusicPlayer();
  },
  loadPlaylist: function(newPlaylist) {
    changePlaylist(newPlaylist);
  }
};

setupMusicPlayer();
