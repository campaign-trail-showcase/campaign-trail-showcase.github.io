campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 3,
        "fields": {
            "year": 2008,
            "display_year": "2008",
            "summary": "<div class='k08-election-summary-scroll'>\n<p><b>By mid-2007, to many the 2008 Democratic Primary for President already seemed locked down.</b></p>\n<p>Hillary Clinton was the obvious nominee. It was Her\u2122 time, and after the blue wave that was the 2006 midterms, her victory was easy to imagine. That September however, she shocked the nation by announcing she would not seek the nomination due to health problems. The effect was immediate. The Republican field expanded overnight, with multiple conservatives who'd sat the cycle out getting back in. For Republicans, the prospect of facing someone as inexperienced as Barack Obama was a dream scenario, and once Clinton endorsed him in late December he was the clear Democratic frontrunner. But soon enough, it became clear that Senator Obama was a force to be reckoned with. The short moment of hope Republicans experienced had been replaced by the prospect of a blue tsunami. The Bush administration was widely unpopular, and the Iraq war was losing national support by the day.</p>\n<p>Ohio Congressman Dennis Kucinich was nothing more than a sideshow attraction. It wasn't like Democrats didn't like him, but he wasn't serious. He didn't represent the fundamental change the country was desperate for. Sure, Barack Obama had his faults. Hell, he was against gay marriage and legal marijuana. Dennis made those issues pillars of his campaign! But the Democratic Party at large was more interested in making history, and Dennis Kucinich didn't represent that. Maybe his ideas like the Department of Peace and single-payer healthcare were the future of the party, but he wasn't. The platform Dennis Kucinich spent his career fighting to advance would have its day eventually. Dennis, however, was committed to making that day January 20th, 2009. But that's just crazy, right?</p>\n</div>",
            "image_url": "https://i.imgur.com/pSNtuKP.png",
            "winning_electoral_vote_number": 270,
            "advisor_url": "https://i.imgur.com/pgaMUnY.gif",
            "recommended_reading": "<ul>\n<li><a href=\"https://www.youtube.com/watch?v=Lv0smG7ptcM\">Dennis Kucinich 2008 DNC</a></li>\n<li><a href=\"https://www.youtube.com/watch?v=93dsLSmJFuw\">Meet the Kucinichs</a></li>\n<li><a href=\"https://www.youtube.com/watch?v=TI6PA4v6dZg\">Mike Gravel and Obama Girl (the most 2008 thing you'll ever see)</a></li>\n<li><a href=\"https://www.youtube.com/watch?v=52ufq18UZ_w\">Gravel being based compilation</a></li>\n<li><a href=\"https://www.youtube.com/watch?v=py8cXlLyX18\">Kucinich on Ron Paul</a></li>\n<li><a href=\"https://www.youtube.com/watch?v=eZ4_Z-FSL88\">Paul vs Giuliani</a></li>\n<li><a href=\"https://www.youtube.com/watch?v=0sLMyBG0Ibg\">Barbara Lee 2012 DNC</a></li>\n<li><a href=\"https://www.youtube.com/watch?v=fLlc7kjNPSg\">Thank you to the creator of Icarus whose music player I stole</a></li>\n</ul>",
            "has_visits": 1,
            "no_electoral_majority_image": "https://www.jetsimon.com/public/candidateexample.png",
            "recommended_reading_enabled": true
        }
    }
];

campaignTrail_temp.temp_election_list = [
    {
        "id": 3,
        "year": 2008,
        "is_premium": 0,
        "display_year": "2008"
    }
];

RecReading = true;

campaignTrail_temp.credits = "Rupert Pupkin";

// necessary so that the right election files are loaded -SM
setInterval(() => {
    const electionSelect = document.getElementById("election_id");
    if (electionSelect) {
        if (electionSelect.value === "3") {
            campaignTrail_temp.code2_id = "2008 - Wake Up America";
        }
    }
}, 100);

campaignTrail_temp.global_parameter_json = [
    {
        "model": "campaign_trail.global_parameter",
        "pk": 1,
        "fields": {
            "vote_variable": 1.125,
            "max_swing": 0.12,
            "start_point": 0.94,
            "candidate_issue_weight": 0.1,
            "running_mate_issue_weight": 0.1,
            "issue_stance_1_max": -0.71,
            "issue_stance_2_max": -0.3,
            "issue_stance_3_max": -0.125,
            "issue_stance_4_max": 0.125,
            "issue_stance_5_max": 0.3,
            "issue_stance_6_max": 0.71,
            "global_variance": 0.01,
            "state_variance": 0.005,
            "question_count": 34,
            "default_map_color_hex": "#C9C9C9",
            "no_state_map_color_hex": "#999999"
        }
    }
];

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 16,
        "fields": {
            "first_name": "Dennis",
            "last_name": "Kucinich",
            "election": 3,
            "party": "Democrat",
            "state": "Ohio",
            "priority": 1,
            "description": "Dennis Kucinich has never had much use for the word impossible, which is fortunate, because almost everyone looking at this campaign thinks that's exactly what his chances are. He is a nationally known Congressman, but hardly anyone in Washington believes America is about to elect an anti-war populist from Cleveland whose platform sits well outside the party mainstream. The money, the endorsements, and nearly every conventional measure of political viability point somewhere else.<br><br>Still, Dennis has never been afraid of a fight. With his wife Elizabeth by his side, he knows he's in for an uphill battle. That same kid who watched John F. Kennedy's inauguration sitting in his 11th-grade classroom and felt called to public service is determined to put every ounce of conviction he has into this fight, no matter what anyone has to say about it.",
            "color_hex": "#6eb4f2",
            "secondary_color_hex": "#90C0FF",
            "is_active": 1,
            "image_url": "https://i.imgur.com/SZhpnoj.png",
            "electoral_victory_message": "<div class='k08-ending-loading-copy'></div>",
            "electoral_loss_message": "<h3>Dennis Kucinich has lost the 2008 election.</h3><p>Your campaign nevertheless brought progressive issues to a national audience.</p>",
            "no_electoral_majority_message": "<h3>No candidate has won an Electoral College majority.</h3><p>The election will be decided by the House of Representatives.</p>",
            "description_as_running_mate": null,
            "candidate_score": 0.86
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 18,
        "fields": {
            "first_name": "John",
            "last_name": "NeoCon Artists",
            "election": 3,
            "party": "Republican",
            "state": "Arizona",
            "priority": 2,
            "description": "<p>The Republican nomination remains unsettled. John McCain begins as the establishment favorite, but the country's reaction to tragedy—and to Dennis Kucinich—may produce a very different opponent.</p>",
            "color_hex": "#fe5858",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/640px-John_McCain_official_portrait_2009.jpg",
            "electoral_victory_message": "n/a",
            "electoral_loss_message": "n/a",
            "no_electoral_majority_message": "n/a",
            "description_as_running_mate": null,
            "candidate_score": 1
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 30,
        "fields": {
            "first_name": "Democratic",
            "last_name": "Party",
            "election": 3,
            "party": "Democrat",
            "state": "Euphoria ",
            "priority": 3,
            "description": "",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/zGAzDXW.png",
            "electoral_victory_message": "n/a",
            "electoral_loss_message": "n/a",
            "no_electoral_majority_message": "n/a",
            "description_as_running_mate": "For once, Democrats can allow themselves a little cautious optimism. After eight years of George W. Bush, the country looks exhausted, the Republican brand is battered, and the party can feel a new age somewhere just over the horizon.<br><br>Maybe this is finally the election that puts the traumatic memories of swift boats and hanging chads to bed for good. Democrats are ready for a change they can believe in, and this time it won't slip through their grasp.",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 31,
        "fields": {
            "first_name": "Mike",
            "last_name": "Gravel",
            "election": 3,
            "party": "Democrat",
            "state": "Alaska",
            "priority": 4,
            "description": "",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/WWckXp3.png",
            "electoral_victory_message": "n/a",
            "electoral_loss_message": "n/a",
            "no_electoral_majority_message": "n/a",
            "description_as_running_mate": "<div class='k08-vp-bio-scroll'><p>Mike makes sense ideologically. If you want somebody in the Oval Office every bit as enthusiastic as you are about smashing the military-industrial complex into pieces and setting it on fire, you found him. He endorsed you almost immediately after Senator Obama's assassination, and there's no question he believes in what we're trying to do.</p><p>His r\u00e9sum\u00e9 would be the envy of plenty of sitting Democratic senators, and the man hasn't held elected office in nearly thirty years. He read the Pentagon Papers into the Congressional Record, served in the Army, and his conviction on the war is second to none. Of course, he's also 78 years old and has a habit of turning that conviction into some pretty spectacular rants. Being a veteran helps. Some.</p><p>If we win, Mike could make an excellent Vice President. If we lose, there's about a 100% chance picking Mike Gravel had something to do with it. A ticket can probably survive one candidate as ideologically forceful as you are. Two is a harder sell. If you really think you can make it work, go right ahead. Just don't say you weren't warned.</p></div>",
            "candidate_score": 0.95,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 32,
        "fields": {
            "first_name": "Barbara",
            "last_name": "Lee",
            "election": 3,
            "party": "Democrat",
            "state": "California",
            "priority": 5,
            "description": "",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/33hgr4t.png",
            "electoral_victory_message": "n/a",
            "electoral_loss_message": "n/a",
            "no_electoral_majority_message": "n/a",
            "description_as_running_mate": "<div class='k08-vp-bio-scroll'><p>Congresswoman Barbara Lee is a lot like you, Dennis, and you already know that \u2014 the two of you are friends and have spent years fighting a lot of the same battles in Congress. There's a personal kinship there, too. You know what it was like growing up poor enough that your family sometimes lived in a car; Barbara escaped an abusive relationship as a young woman and spent time homeless while raising two boys. Neither of you came to these issues from a think tank.</p><p>Her lone vote against the Authorization for Use of Military Force was enormously controversial, but after everything that followed, she makes it easy for us to argue that this is the ticket that got it right the first time. She could energize Black voters and women, and nobody would miss the historical significance of putting a Black woman one heartbeat from the presidency. Of course, that includes Americans who aren't entirely comfortable with a Black woman having that much power.</p><p>Barbara would make an excellent Vice President and probably be one of the easiest people on this list for you to actually govern alongside. She's from California, though, which won't help us geographically unless we're getting absolutely massacred. And however well you two understand each other, voters still have to accept a ticket this liberal, this anti-war, and this far outside what they're used to seeing.</p></div>",
            "candidate_score": 0.96,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 33,
        "fields": {
            "first_name": "Ron",
            "last_name": "Paul",
            "election": 3,
            "party": "Republican",
            "state": "Texas",
            "priority": 6,
            "description": "",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://i.imgur.com/ewD6RhT.png",
            "electoral_victory_message": "n/a",
            "electoral_loss_message": "n/a",
            "no_electoral_majority_message": "n/a",
            "description_as_running_mate": "<div class='k08-vp-bio-scroll'><p>Texas Congressman Ron Paul is still serving in the House, and I cannot stress enough how bad of an idea I think this is. Look, I get it. You two are practically kindred spirits when it comes to challenging the war machine, the Federal Reserve and the political establishment. Put the two of you in a room together and I'm sure you could find institutions to abolish until sunrise.</p><p>Yes, Paul built a remarkable following in the Republican primaries. He also didn't win a single primary or caucus. His libertarian philosophy is nowhere near the mainstream, he wants to eliminate the income tax, and then we have to explain his positions on civil rights to Democratic voters. And if you were hoping for somebody young to balance the ticket, Ron is almost 73.</p><p>I understand the appeal of calling this a bipartisan ticket. The problem is that we'd first have to convince the people who nominated you that putting a Republican libertarian on the ticket isn't a repudiation of half the things they voted for. Maybe there's a strange new coalition hiding out there. If you pick Ron, Dennis, we're going to find out the hard way.</p></div>",
            "candidate_score": 0.97,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 34,
        "fields": {
            "first_name": "Deval",
            "last_name": "Patrick",
            "election": 3,
            "party": "Democrat",
            "state": "Massachusetts",
            "priority": 7,
            "description": "",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/IQ0orxw.jpeg",
            "electoral_victory_message": "n/a",
            "electoral_loss_message": "n/a",
            "no_electoral_majority_message": "n/a",
            "description_as_running_mate": "<div class='k08-vp-bio-scroll'><p>Deval Patrick is the current Governor of Massachusetts, and he's considerably more moderate than you are. He also took over from Mitt Romney, so if the Republicans nominate that shitbag, having somebody on the ticket who knows his record firsthand could come in handy. Deval doesn't have an enormous national profile yet, but party leaders would breathe a lot easier with him beside you.</p><p>There's an obvious complication after Senator Obama's assassination. Picking a Black running mate will invite accusations that Deval is some kind of token replacement for Obama rather than somebody chosen on his own merits. Not picking a Black running mate carries risks of its own, though, especially when so many Black Democrats are wondering what happens to the coalition Obama was building.</p><p>Deval gives us youth, executive experience and a bridge back to Democrats who are still nervous about you. But you'd have to meet him halfway. If you select him and then spend the fall running exactly the same campaign you would have run with Mike Gravel, we're wasting the whole point of the pick. If you're prepared to tack toward the center a little, he's a solid choice.</p></div>",
            "candidate_score": 1.03,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 35,
        "fields": {
            "first_name": "Janet",
            "last_name": "Napolitano",
            "election": 3,
            "party": "Democrat",
            "state": "Arizona",
            "priority": 8,
            "description": "",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/oU9d9uL.png",
            "electoral_victory_message": "n/a",
            "electoral_loss_message": "n/a",
            "no_electoral_majority_message": "n/a",
            "description_as_running_mate": "<div class='k08-vp-bio-scroll'><p>Janet Napolitano has an impressive r\u00e9sum\u00e9, Dennis. She's the sitting Governor of Arizona, she has executive experience, and putting her on the ticket would shut up a lot of moderate Democrats who are desperately looking for an excuse to feel good about voting Democratic in November. As painful as choosing somebody this moderate may be for you, it might be what it takes to win.</p><p>She's pragmatic \u2014 some people would say to a fault \u2014 and she's perfectly willing to work with conservatives when she thinks it'll get something done. Moderates call that bipartisanship. Some people in our base are going to call it betrayal. Either way, nobody is going to mistake Janet for somebody you picked because she agrees with you about everything.</p><p>And there's the other problem: she's not going to keep her concerns to herself. If you choose Janet and then spend the fall frightening every swing voter she was supposed to reassure, eventually she's going to tell you so. If you can live with that, she gives this ticket credibility in exactly the places where we need it most.</p></div>",
            "candidate_score": 1.04,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 40,
        "fields": {
            "first_name": "Republican",
            "last_name": "Running Mate",
            "election": 3,
            "party": "Republican",
            "state": "Undecided",
            "priority": 9,
            "description": "",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/candidateexample.png",
            "electoral_victory_message": "n/a",
            "electoral_loss_message": "n/a",
            "no_electoral_majority_message": "n/a",
            "description_as_running_mate": "<p>The Republican nominee has not yet announced a running mate.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 41,
        "fields": {
            "first_name": "Joe",
            "last_name": "Manchin",
            "election": 3,
            "party": "Democrat",
            "state": "West Virginia",
            "priority": 10,
            "description": "",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/candidateexample.png",
            "electoral_victory_message": "n/a",
            "electoral_loss_message": "n/a",
            "no_electoral_majority_message": "n/a",
            "description_as_running_mate": "<p>West Virginia Governor Joe Manchin is presented as proof that even a conservative Democrat considers the Kucinich-Paul alliance beyond the pale.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 42,
        "fields": {
            "first_name": "Joe",
            "last_name": "Lieberman",
            "election": 3,
            "party": "Independent",
            "state": "Connecticut",
            "priority": 11,
            "description": "",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/candidateexample.png",
            "electoral_victory_message": "n/a",
            "electoral_loss_message": "n/a",
            "no_electoral_majority_message": "n/a",
            "description_as_running_mate": "<p>Senator Joe Lieberman gives the Republican ticket a national-unity image, hawkish foreign-policy credentials, and a direct appeal to disaffected Democrats.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 43,
        "fields": {
            "first_name": "Bobby",
            "last_name": "Jindal",
            "election": 3,
            "party": "Republican",
            "state": "Louisiana",
            "priority": 12,
            "description": "",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/candidateexample.png",
            "electoral_victory_message": "n/a",
            "electoral_loss_message": "n/a",
            "no_electoral_majority_message": "n/a",
            "description_as_running_mate": "<p>Louisiana Governor Bobby Jindal adds youth, conservative credibility, and Southern balance to Giuliani's ticket.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 44,
        "fields": {
            "first_name": "Susan",
            "last_name": "Collins",
            "election": 3,
            "party": "Republican",
            "state": "Maine",
            "priority": 13,
            "description": "",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/candidateexample.png",
            "electoral_victory_message": "n/a",
            "electoral_loss_message": "n/a",
            "no_electoral_majority_message": "n/a",
            "description_as_running_mate": "<p>Maine Senator Susan Collins provides Perry with a conspicuously moderate, Northeastern partner meant to reassure independents unsettled by both tickets.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 45,
        "fields": {
            "first_name": "Tim",
            "last_name": "Pawlenty",
            "election": 3,
            "party": "Republican",
            "state": "Minnesota",
            "priority": 14,
            "description": "",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/candidateexample.png",
            "electoral_victory_message": "n/a",
            "electoral_loss_message": "n/a",
            "no_electoral_majority_message": "n/a",
            "description_as_running_mate": "<p>Minnesota Governor Tim Pawlenty gives Perry a lower-key Midwestern complement and a more conventional governing image.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 46,
        "fields": {
            "first_name": "John",
            "last_name": "McCain",
            "election": 3,
            "party": "Republican",
            "state": "Arizona",
            "priority": 15,
            "description": "",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/candidateexample.png",
            "electoral_victory_message": "n/a",
            "electoral_loss_message": "n/a",
            "no_electoral_majority_message": "n/a",
            "description_as_running_mate": "<p>Senator John McCain reunites the Republican establishment behind Romney and supplies national-security experience.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 47,
        "fields": {
            "first_name": "Sarah",
            "last_name": "Palin",
            "election": 3,
            "party": "Republican",
            "state": "Alaska",
            "priority": 16,
            "description": "",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/candidateexample.png",
            "electoral_victory_message": "n/a",
            "electoral_loss_message": "n/a",
            "no_electoral_majority_message": "n/a",
            "description_as_running_mate": "<p>Alaska Governor Sarah Palin is a dramatic conservative choice intended to energize the Republican base and turn the campaign into a crusade against the left.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 48,
        "fields": {
            "first_name": "Bill",
            "last_name": "Frist",
            "election": 3,
            "party": "Republican",
            "state": "Tennessee",
            "priority": 17,
            "description": "",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/candidateexample.png",
            "electoral_victory_message": "n/a",
            "electoral_loss_message": "n/a",
            "no_electoral_majority_message": "n/a",
            "description_as_running_mate": "<p>Former Senate Majority Leader Bill Frist balances Giuliani with social-conservative credentials and deep ties to the national Republican establishment.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 49,
        "fields": {
            "first_name": "George",
            "last_name": "Pataki",
            "election": 3,
            "party": "Republican",
            "state": "New York",
            "priority": 18,
            "description": "",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/candidateexample.png",
            "electoral_victory_message": "n/a",
            "electoral_loss_message": "n/a",
            "no_electoral_majority_message": "n/a",
            "description_as_running_mate": "<p>Former New York Governor George Pataki gives Perry executive experience, Northeastern balance, and a more moderate public face.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 50,
        "fields": {
            "first_name": "Penn",
            "last_name": "Jillette",
            "election": 3,
            "party": "Libertarian",
            "state": "Nevada",
            "priority": 19,
            "description": "<p>Entertainer and libertarian activist Penn Jillette heads a small protest campaign built around civil liberties, opposition to war, and hostility toward the two-party establishment. He is not seriously contesting the presidency, but could matter at the margins in a close election.</p>",
            "color_hex": "#F4D03F",
            "secondary_color_hex": "#FFF3A6",
            "is_active": 0,
            "image_url": "",
            "electoral_victory_message": "n/a",
            "electoral_loss_message": "n/a",
            "no_electoral_majority_message": "n/a",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 51,
        "fields": {
            "first_name": "Other",
            "last_name": "Reform/Others",
            "election": 3,
            "party": "Others",
            "state": "Various",
            "priority": 20,
            "description": "<p>A collection of minor-party and independent candidates. None is individually competitive, but together they draw a small protest vote in most states.</p>",
            "color_hex": "#8E44AD",
            "secondary_color_hex": "#C39BD3",
            "is_active": 0,
            "image_url": "",
            "electoral_victory_message": "n/a",
            "electoral_loss_message": "n/a",
            "no_electoral_majority_message": "n/a",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    }
];

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 3001,
        "fields": {
            "candidate": 16,
            "running_mate": 30
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 3002,
        "fields": {
            "candidate": 18,
            "running_mate": 40
        }
    }];

campaignTrail_temp.opponents_default_json = [
    {
        "election": 3,
        "candidates": [
            16,
            18,
            50,
            51
        ]
    }
];

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 3,
        "candidates": [
            16,
            18,
            50,
            51
        ]
    }
];

campaignTrail_temp.modBoxTheme = {
     "header_color": "#000000",
     "header_image_url": "https://i.imgur.com/jETIa2T.gif",
     "header_text_color": "#8ec3ec",
     "description_text_color": "#000000",
     "description_background_color": "#c56c5e",
     "main_color": "#c56c5e",
     "secondary_color": "#7384b0",
     "ui_text_color": "#000000"
};

jet_data = {
    "headerColor": "#003761",
    "headerTextColor": "#ffffff",
    "windowColor": "#7b3924",
    "containerColor": "#505358",
    "innerWindowColor": "#7b3924",
    "innerWindowTextColor": "#ffffff",
    "descriptionWindowColor": "#333b47",
    "descriptionWindowTextColor": "#dce3fe",
    "startButtonColor": "#ffffff",
    "bannerImageUrl": "https://i.imgur.com/78tR1hM.png",
    "backgroundImageUrl": "https://i.imgur.com/86upNq5.gif",
    "gameTitle": "",
    "customQuote": "The Campaign Trail<br><span style=\"font-size:0.72em;\">“The Republicans want another four to eight year term. If you ask me, it oughta be closer to ten to twenty.”</span>",
    "quoteTextColor": "#ffffff",
    "endingTextColor": "#000000",
   
    
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
        document.body.style.backgroundSize = "auto";
        document.body.style.backgroundRepeat = "repeat";
        document.body.style.backgroundPosition = "top left";
        document.body.style.backgroundAttachment = "fixed";
    }

    const style = document.createElement("style");
    style.textContent = `
      #results_container { color: #000000; }
      #wittyquote { color: #ffffff; }
      .game_header h2 { color: #ffffff; }
      .inner_window_w_desc { background-color: #7b3924 !important; color: #ffffff; }
      .inner_window_front, .person_description_window, .election_description_window, .description_window_small { background-color: #333b47 !important; color: #dce3fe; }
      .campaign_trail_start_emphasis { background-color: #ffffff !important; }
    `;
    document.head.appendChild(style);
}

corrr = '\n              <h2></h2><font id="wittyquote" size="4"><em>The Campaign Trail</em><br><span style="font-size:0.72em;">“The Republicans want another four to eight year term. If you ask me, it oughta be closer to ten to twenty.”</span></font>\n            ';

const theme = nct_stuff.themes[nct_stuff.selectedTheme];

theme.coloring_title     = "#003761";
theme.coloring_window    = "#7b3924";
theme.coloring_container = "#505358";
theme.header_image = "https://i.imgur.com/78tR1hM.png";
theme.body_background = "https://i.imgur.com/86upNq5.gif";

applyTheme(theme);
//#endcode


campaignTrail_temp.candidate_id = 16;
campaignTrail_temp.candidate_first_name = "Dennis";
campaignTrail_temp.candidate_last_name = "Kucinich";
campaignTrail_temp.candidate_image_url = "https://i.imgur.com/SZhpnoj.png";
campaignTrail_temp.running_mate_first_name = "Democratic";
campaignTrail_temp.running_mate_last_name = "Party";
campaignTrail_temp.running_mate_image_url = "https://i.imgur.com/zGAzDXW.png";
campaignTrail_temp.selected_running_mate_id = 30;
if (campaignTrail_temp.global_parameter_json?.[0]?.fields) {
    campaignTrail_temp.global_parameter_json[0].fields.question_count = 34;
}

(function(){
  const cs=campaignTrail_temp.candidate_json=campaignTrail_temp.candidate_json||[];
  function ensure(pk,fields){
    let c=cs.find(x=>Number(x.pk)===pk);
    if(!c){ c={model:'campaign_trail.candidate',pk,fields:{}}; cs.push(c); }
    Object.assign(c.fields,fields);
  }
  ensure(50,{first_name:'Penn',last_name:'Jillette',election:3,party:'Libertarian',state:'Nevada',priority:19,color_hex:'#F4D03F',secondary_color_hex:'#FFF3A6',is_active:0,running_mate:false,candidate_score:1});
  ensure(51,{first_name:'Other',last_name:'Reform/Others',election:3,party:'Others',state:'Various',priority:20,color_hex:'#8E44AD',secondary_color_hex:'#C39BD3',is_active:0,running_mate:false,candidate_score:1});
  ensure(52,{first_name:'Libertarian',last_name:'Party',election:3,party:'Libertarian',state:'Nevada',priority:21,color_hex:'#F4D03F',secondary_color_hex:'#FFF3A6',is_active:0,running_mate:true,candidate_score:0,description_as_running_mate:'<p>A nominal Libertarian running-mate shell used for election-engine compatibility.</p>'});
  ensure(53,{first_name:'Other',last_name:'Parties',election:3,party:'Others',state:'Various',priority:22,color_hex:'#8E44AD',secondary_color_hex:'#C39BD3',is_active:0,running_mate:true,candidate_score:0,description_as_running_mate:'<p>A nominal minor-party running-mate shell used for election-engine compatibility.</p>'});
  ensure(36,{first_name:'Russ',last_name:'Feingold',election:3,party:'Democrat',state:'Wisconsin',priority:9,color_hex:'#0000FF',secondary_color_hex:'#90C0FF',is_active:0,running_mate:true,candidate_score:1.02,image_url:'https://i.imgur.com/v7ZXLUc.png',description_as_running_mate:"<div class='k08-vp-bio-scroll'><p>Russ Feingold may be the closest thing to a best-of-both-worlds choice, Dennis. The Wisconsin senator is a genuine progressive with credibility inside the Democratic Party. He was the lone senator to vote against the PATRIOT Act, helped lead the fight for campaign-finance reform, opposed NAFTA and the Iraq War, and seriously considered running for president himself in 2008.</p><p>At 55, Feingold is relatively young, charismatic, and already a three-term senator from a state we're going to need badly in November. He's Jewish, too, and if we win he'd become the first Jewish Vice President.</p><p>The drawback is balance. Two anti-war Midwestern progressives aren't going to reassure voters looking for a major ideological or geographic counterweight. Patrick or Napolitano would do considerably more of that.</p><p>But if you've managed to keep the progressive movement behind you and convince the Democratic Party you're not trying to burn the institution down, Feingold may be proof those things aren't mutually exclusive. And if you win, he'd make one hell of a vice president.</p></div>"});
  const rm=campaignTrail_temp.running_mate_json=campaignTrail_temp.running_mate_json||[];
  if(!rm.some(x=>Number(x.fields?.candidate)===50)) rm.push({model:'campaign_trail.running_mate',pk:3050,fields:{candidate:50,running_mate:52}});
  if(!rm.some(x=>Number(x.fields?.candidate)===51)) rm.push({model:'campaign_trail.running_mate',pk:3051,fields:{candidate:51,running_mate:53}});
  for(const key of ['opponents_default_json','opponents_weighted_json']){
    const arr=campaignTrail_temp[key]=campaignTrail_temp[key]||[];
    let e=arr.find(x=>Number(x.election)===3);
    if(!e){e={election:3,candidates:[16,18,50,51]};arr.push(e);} 
    e.candidates=[16,18,50,51];
  }
  if(typeof jet_data==='object'){
    jet_data.nicknames=jet_data.nicknames||{};
    Object.assign(jet_data.nicknames,{'16':'Kucinich','18':'Republican','50':'Jillette','51':'Reform/Others','52':'Libertarian Party','53':'Other Parties','36':'Feingold'});
  }
})();


(function(){
  const style=document.createElement("style");
  style.id="k08-ticket-panel-theme";
  style.textContent=`
    .k08-ticket-center-card {
      background:#34477B !important;
    }
    .k08-ticket-center-card,
    .k08-ticket-center-card * {
      box-sizing:border-box;
    }
    .k08-ticket-center-card #k08_center_ticket_banner_wrap {
      background:transparent !important;
    }
  `;
  document.head.appendChild(style);
})();


(function(){
  const style=document.createElement("style");
  style.id="k08-tiled-background-lock";
  style.textContent=`
    html, body {
      background-image:url("https://i.imgur.com/86upNq5.gif") !important;
      background-repeat:repeat !important;
      background-size:auto !important;
      background-position:top left !important;
      background-attachment:fixed !important;
    }
    #wittyquote span {
      display:inline-block;
      margin-top:4px;
      line-height:1.15;
    }
  `;
  document.head.appendChild(style);
})();


(function(){
  const style=document.createElement("style");
  style.id="k08-election-description-scroll";
  style.textContent=`
    .k08-election-summary-scroll {
      max-height:260px !important;
      overflow-y:auto !important;
      overflow-x:hidden !important;
      padding-right:10px !important;
      box-sizing:border-box !important;
    }
    .election_description_window,
    .election_description_window .k08-election-summary-scroll {
      scrollbar-width:auto;
    }
  `;
  document.head.appendChild(style);
})();


(function(){
  const style=document.createElement("style");
  style.id="k08-real-description-scrollbars";
  style.textContent=`
    .k08-election-summary-scroll {
      display:block !important;
      max-height:210px !important;
      overflow-y:scroll !important;
      overflow-x:hidden !important;
      padding-right:12px !important;
      box-sizing:border-box !important;
      line-height:1.22 !important;
    }
    .k08-election-summary-scroll p {
      margin:0 0 .75em 0 !important;
    }

    .k08-vp-bio-scroll {
      display:block !important;
      width:100% !important;
      max-height:190px !important;
      overflow-y:scroll !important;
      overflow-x:hidden !important;
      padding-right:12px !important;
      box-sizing:border-box !important;
      line-height:1.22 !important;
      text-align:left !important;
    }
    .k08-vp-bio-scroll p {
      margin:0 0 .72em 0 !important;
    }
    .k08-vp-bio-scroll p:last-child {
      margin-bottom:0 !important;
    }
  `;
  document.head.appendChild(style);

  function enforce(){
    document.querySelectorAll(".k08-election-summary-scroll").forEach(el=>{
      el.style.setProperty("max-height","210px","important");
      el.style.setProperty("overflow-y","scroll","important");
    });
    document.querySelectorAll(".k08-vp-bio-scroll").forEach(el=>{
      el.style.setProperty("max-height","190px","important");
      el.style.setProperty("overflow-y","scroll","important");
      el.style.setProperty("overflow-x","hidden","important");
    });
  }

  [0,100,300,750,1500].forEach(ms=>setTimeout(enforce,ms));
  new MutationObserver(()=>setTimeout(enforce,10))
    .observe(document.body,{childList:true,subtree:true});
})();


(function(){
  const style=document.createElement("style");
  style.id="k08-scroll-containment";
  style.textContent=`
    /* Election description and running-mate description: scroll internally,
       never paint past the bottom of the dark panel. */
    #election_description,
    #election_description_inner,
    .election_description,
    .election-description,
    #running_mate_description,
    #running_mate_description_inner,
    .running_mate_description,
    .running-mate-description,
    .k08-election-scroll,
    .k08-vp-scroll {
      box-sizing:border-box !important;
      max-height:100% !important;
      overflow-y:auto !important;
      overflow-x:hidden !important;
      overscroll-behavior:contain;
    }

    /* The parent cards need to clip anything that Jets positions beyond them. */
    #election_description_container,
    .election_description_container,
    .election-description-container,
    #running_mate_description_container,
    .running_mate_description_container,
    .running-mate-description-container,
    .k08-scroll-parent {
      overflow:hidden !important;
      box-sizing:border-box !important;
    }
  `;
  document.head.appendChild(style);

  function containVisibleScrollAreas(){
    const all=[...document.querySelectorAll("div")];

    const vpHeading=all.find(el=>/Please select your running mate:/i.test((el.textContent||"").trim()) && el.children.length===0);
    if(vpHeading){
      const panel=vpHeading.closest("div[style]") || vpHeading.parentElement;
      if(panel){
        panel.classList.add("k08-scroll-parent");
        const candidates=[...panel.querySelectorAll("div")].filter(el=>{
          const s=getComputedStyle(el), txt=(el.innerText||"").trim();
          return txt.length>350 && el.scrollHeight>120 && !/Please select your running mate/i.test(txt.slice(0,60));
        });
        const prose=candidates.sort((a,b)=>b.innerText.length-a.innerText.length)[0];
        if(prose){
          prose.classList.add("k08-vp-scroll");
          prose.style.setProperty("max-height","260px","important");
          prose.style.setProperty("padding-right","12px","important");
          prose.style.setProperty("padding-bottom","10px","important");
        }
      }
    }

    const electionHeading=all.find(el=>/Please select the election you will run in:/i.test((el.textContent||"").trim()) && el.children.length===0);
    if(electionHeading){
      const root=electionHeading.parentElement?.parentElement || electionHeading.parentElement;
      if(root){
        const candidates=[...root.querySelectorAll("div")].filter(el=>{
          const txt=(el.innerText||"").trim();
          return txt.length>700 && !/Please select the election/i.test(txt.slice(0,80));
        });
        const prose=candidates.sort((a,b)=>b.innerText.length-a.innerText.length)[0];
        if(prose){
          prose.classList.add("k08-election-scroll");
          prose.style.setProperty("max-height","205px","important");
          prose.style.setProperty("padding-right","12px","important");
          prose.style.setProperty("padding-bottom","10px","important");
          if(prose.parentElement) prose.parentElement.classList.add("k08-scroll-parent");
        }
      }
    }
  }

  new MutationObserver(()=>setTimeout(containVisibleScrollAreas,20))
    .observe(document.body,{childList:true,subtree:true});
  [100,350,800,1500].forEach(ms=>setTimeout(containVisibleScrollAreas,ms));
})();


(function(){
  const style=document.createElement("style");
  style.id="k08-v2919-hard-scroll";
  style.textContent=`
    .k08-vp-bio-scroll{
      display:block !important;
      position:relative !important;
      height:178px !important;
      max-height:178px !important;
      width:100% !important;
      overflow-y:auto !important;
      overflow-x:hidden !important;
      padding:0 14px 12px 0 !important;
      margin:0 !important;
      box-sizing:border-box !important;
      line-height:1.34 !important;
    }
    .k08-vp-bio-scroll p{margin:0 0 .75em 0 !important;}
    .k08-vp-bio-scroll p:last-child{margin-bottom:12px !important;}

    .k08-election-summary-scroll{
      display:block !important;
      position:relative !important;
      height:185px !important;
      max-height:185px !important;
      width:100% !important;
      overflow-y:auto !important;
      overflow-x:hidden !important;
      padding:0 14px 12px 0 !important;
      margin:0 !important;
      box-sizing:border-box !important;
      line-height:1.30 !important;
    }
    .k08-election-summary-scroll p{margin:0 0 .8em 0 !important;}
    .k08-election-summary-scroll p:last-child{margin-bottom:12px !important;}
  `;
  document.head.appendChild(style);

  function hardContain(){
    document.querySelectorAll(".k08-vp-bio-scroll").forEach(el=>{
      el.style.setProperty("height","178px","important");
      el.style.setProperty("max-height","178px","important");
      el.style.setProperty("overflow-y","auto","important");
      el.style.setProperty("overflow-x","hidden","important");
      el.style.setProperty("padding-bottom","12px","important");
    });
    document.querySelectorAll(".k08-election-summary-scroll").forEach(el=>{
      el.style.setProperty("height","185px","important");
      el.style.setProperty("max-height","185px","important");
      el.style.setProperty("overflow-y","auto","important");
      el.style.setProperty("overflow-x","hidden","important");
      el.style.setProperty("padding-bottom","12px","important");
    });
  }
  new MutationObserver(()=>setTimeout(hardContain,15)).observe(document.body,{childList:true,subtree:true});
  [50,200,500,1000,1600].forEach(ms=>setTimeout(hardContain,ms));
})();


(function(){
  const style=document.createElement("style");
  style.id="k08-v2920-startscreen-fix";
  style.textContent=`
    /* The election card must remain tall enough to contain its image/text area
       and must never clip or cover the Continue button below it. */
    .k08-election-summary-scroll{
      height:150px !important;
      max-height:150px !important;
      overflow-y:auto !important;
      overflow-x:hidden !important;
      padding:0 12px 10px 0 !important;
      margin:0 !important;
      box-sizing:border-box !important;
      position:relative !important;
      z-index:1 !important;
    }

    /* VP bio box: keep the scrollbar, but do not clip the overall selector card. */
    .k08-vp-bio-scroll{
      height:165px !important;
      max-height:165px !important;
      overflow-y:auto !important;
      overflow-x:hidden !important;
      padding:0 12px 10px 0 !important;
      box-sizing:border-box !important;
      position:relative !important;
      z-index:1 !important;
    }

    /* Any wrappers we previously marked as scroll parents should not clip controls. */
    .k08-scroll-parent,
    .election_description_container,
    .election-description-container,
    .running_mate_description_container,
    .running-mate-description-container{
      overflow:visible !important;
    }

    /* Keep Continue buttons above long description layers. */
    button,
    input[type="button"],
    input[type="submit"]{
      position:relative;
      z-index:20;
    }
  `;
  document.head.appendChild(style);

  function fixStartScreen(){
    document.querySelectorAll(".k08-election-summary-scroll").forEach(el=>{
      el.style.setProperty("height","150px","important");
      el.style.setProperty("max-height","150px","important");
      el.style.setProperty("overflow-y","auto","important");
      el.style.setProperty("overflow-x","hidden","important");
      el.style.setProperty("z-index","1","important");
      let p=el.parentElement;
      for(let i=0;i<4&&p;i++,p=p.parentElement){
        p.style.setProperty("overflow","visible","important");
      }
    });

    document.querySelectorAll(".k08-vp-bio-scroll").forEach(el=>{
      el.style.setProperty("height","165px","important");
      el.style.setProperty("max-height","165px","important");
      el.style.setProperty("overflow-y","auto","important");
      el.style.setProperty("overflow-x","hidden","important");
      let p=el.parentElement;
      for(let i=0;i<3&&p;i++,p=p.parentElement){
        p.style.setProperty("overflow","visible","important");
      }
    });

    const buttons=[...document.querySelectorAll("button,input[type='button'],input[type='submit']")]
      .filter(b=>/continue/i.test((b.textContent||b.value||"").trim()));
    buttons.forEach(b=>b.style.setProperty("z-index","30","important"));
  }

  new MutationObserver(()=>setTimeout(fixStartScreen,15))
    .observe(document.body,{childList:true,subtree:true});
  [50,200,500,1000,1600].forEach(ms=>setTimeout(fixStartScreen,ms));
})();


(function(){
  const style=document.createElement("style");
  style.id="k08-v2921-election-wrap";
  style.textContent=`
    .k08-election-summary-scroll{
      display:block !important;
      width:auto !important;
      height:220px !important;
      max-height:220px !important;
      overflow-y:auto !important;
      overflow-x:hidden !important;
      padding:0 12px 12px 0 !important;
      margin:0 !important;
      box-sizing:border-box !important;
      line-height:1.30 !important;
    }
    .k08-election-summary-scroll .k08-election-float-image{
      float:left !important;
      width:245px !important;
      max-width:34% !important;
      height:auto !important;
      margin:0 14px 8px 0 !important;
      object-fit:contain !important;
      position:relative !important;
      z-index:1 !important;
    }
    .k08-election-summary-scroll::after{
      content:"";
      display:block;
      clear:both;
    }
    .k08-election-summary-scroll p{
      margin:0 0 .8em 0 !important;
    }
    .k08-election-summary-scroll p:last-child{
      margin-bottom:12px !important;
    }
  `;
  document.head.appendChild(style);

  function wrapElectionDescription(){
    const summary=document.querySelector(".k08-election-summary-scroll");
    if(!summary || summary.dataset.k08Wrapped==="1")return;

    let card=summary.parentElement;
    for(let i=0;i<4 && card;i++,card=card.parentElement){
      const img=[...card.querySelectorAll("img")].find(im=>{
        const r=im.getBoundingClientRect();
        return r.width>=180 && r.height>=100 && !im.closest(".k08-election-summary-scroll");
      });
      if(img){
        img.classList.add("k08-election-float-image");
        summary.insertBefore(img,summary.firstChild);
        summary.dataset.k08Wrapped="1";
        break;
      }
    }
  }

  new MutationObserver(()=>setTimeout(wrapElectionDescription,20))
    .observe(document.body,{childList:true,subtree:true});
  [50,200,500,1000,1600].forEach(ms=>setTimeout(wrapElectionDescription,ms));
})();
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
  constructor() {
    this.songs = [];
    this.currentSongIndex = 0;
  }

  addSong(song) { 
    this.songs.push(song); 
  }

  getCurrentSong() { 
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
let currentVolume = 50;

const ASSETS = {
  btnPrev: "https://i.imgur.com/a2skFGw.png",
  btnPlay: "https://i.imgur.com/fCa72EP.png",
  btnPause: "https://i.imgur.com/1qhhG4D.png",
  btnNext: "https://i.imgur.com/DZ7Igxr.png"
};

function changePlaylist(newPlaylist) {
  activePlaylist = newPlaylist;
  activePlaylist.currentSongIndex = 0;

  updateUI(activePlaylist);

  const audio = getAudioElement();
  const song = activePlaylist.getCurrentSong();

  if (song) {
    audio.src = song.getAudioLink();
    audio.play().catch(e => console.log("Autoplay blocked or waiting for interaction", e));
    updatePlayPauseIcon(true);
  }
}
window.changePlaylist = changePlaylist;

function updateUI(playlist) {
  const currentSong = playlist.getCurrentSong();
  const player = document.getElementById("player");

  if (!player || !currentSong) return;

  const cover = player.querySelector("#cover");
  const title = player.querySelector("#title");
  const artist = player.querySelector("#artist");

  if (cover) cover.src = currentSong.getCoverLink();
  if (title) title.textContent = currentSong.getTitle();
  if (artist) artist.textContent = currentSong.getArtist();
}
window.updateUI = updateUI;

function getAudioElement() {
  if (!audioInstance) {
    audioInstance = document.createElement("audio");
    audioInstance.id = "audio";
    document.body.appendChild(audioInstance);
  }
  return audioInstance;
}

function updatePlayPauseIcon(isPlaying) {
  const btn = document.getElementById("playPauseButton");
  if (!btn) return;

  if (isPlaying) {
    btn.innerHTML = `<img src="${ASSETS.btnPause}" alt="Pause">`;
    btn.classList.add("vista-pause-btn");
    btn.classList.remove("vista-play-btn");
  } else {
    btn.innerHTML = `<img src="${ASSETS.btnPlay}" alt="Play">`;
    btn.classList.add("vista-play-btn");
    btn.classList.remove("vista-pause-btn");
  }
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function setupMusicPlayer() {
  const gameWindow = document.getElementById("game_window");
  if (!gameWindow) {
    console.warn("game_window element not found. Player will not be attached.");
    return;
  }

  if (document.getElementById("player")) return;

  const defaultSongs = [
    ["Wake Up America", "Dennis Kucinich", "https://i.imgur.com/EHTzOp1.png", "https://audio.jukehost.co.uk/01a00ce2-ffac-701b-989c-15e972c46a16"],
    ["Let's Impeach the President", "Neil Young", "https://i.imgur.com/lRGGXlO.png", "https://audio.jukehost.co.uk/01a00ce3-0167-7079-93c7-e5065cace7bb"],
    ["Until The Day Is Done", "R.E.M.", "https://i.imgur.com/B7taeBf.png", "https://audio.jukehost.co.uk/01a00ce3-0167-72ef-a833-e600a131ad6e"],
    ["Orphans", "Beck", "https://i.imgur.com/GYDWJOb.png", "https://audio.jukehost.co.uk/01a00ce3-005f-708f-9a33-f5443fdfb1b5"],
    ["Corporate Welfare Song", "Anne Feeney", "https://i.imgur.com/juGckbt.png", "https://audio.jukehost.co.uk/01a00ce2-af96-73ba-b3b7-5942a42fce87"],
    ["Give Peace a Chance", "John Lennon", "https://i.imgur.com/ez0nQlx.png", "https://audio.jukehost.co.uk/01a00ce3-0107-73e5-90cc-2b861e3447c7"],
    ["Whatever Happened to the 8 Hour Day?", "Anne Feeney", "https://i.imgur.com/juGckbt.png", "https://audio.jukehost.co.uk/01a00ce2-afce-7345-8886-5a14506d2b30"],
    ["Power to the People", "Mike Gravel ft.RX", "https://i.imgur.com/3NC9p5n.png", "https://audio.jukehost.co.uk/01a00ce3-00e4-73c7-98d3-479d89dff935"],
    ["What Are You Fighting For", "Phil Ochs", "https://i.imgur.com/HjmGyD7.png", "https://audio.jukehost.co.uk/01a00ce3-0050-711a-b3f3-1dd2a8816082"],
    ["Insane in the McCain Brain", "InsaneReagan", "https://i.imgur.com/wfQZLBt.png", "https://audio.jukehost.co.uk/01a00ce6-570c-70fc-b451-d51cda839cf4"],
    ["End of the World", "George W. Bush ft.RX", "https://i.imgur.com/X3JhUCw.png", "https://audio.jukehost.co.uk/01a00ce2-aeee-70c8-b51f-70a1833a0995"]
  ];

  if (activePlaylist.songs.length === 0) {
    defaultSongs.forEach(data => activePlaylist.addSong(new Song(...data)));
  }

  const style = document.createElement("style");
  style.textContent = `
    .vista-player {
        width: 960px;
        height: 250px;
        position: relative;
        background: #3f4349 !important;
        background-image: none !important;
        border: 1px solid #a5acb5;
        border-radius: 6px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3) !important;
        overflow: hidden;
        font-family: "Segoe UI", Arial, sans-serif;
        display: flex;
        flex-direction: column;
        margin: 10px auto;
    }

    .vista-title-bar {
        background: linear-gradient(to bottom, #4b6bc6 0%, #3a56a0 100%) !important;
        color: white;
        padding: 6px 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        font-weight: bold;
        border-bottom: 1px solid #2c3f7a;
        user-select: none;
    }

    .vista-title-text {
        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
    }

    .vista-title-controls span {
        margin-left: 8px;
        cursor: pointer;
        font-size: 14px;
        opacity: 0.8;
    }

    .vista-title-controls span:hover {
        opacity: 1;
    }

    .vista-main-content {
        display: flex;
        flex: 1;
        padding: 10px;
    }

    .vista-display-box {
        flex: 1;
        display: flex;
        padding: 10px;
        position: relative;
    }


    .vista-main-content,
    .vista-display-box,
    .vista-controls-container {
        background: #3f4349 !important;
        background-image: none !important;
    }

    .vista-info-container {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        z-index: 20 !important;
    }

    .vista-song-info {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        background: rgba(235, 238, 244, 0.88) !important;
        z-index: 21 !important;
    }

    .vista-title {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        color: #1b254d !important;
    }

    .vista-artist {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        color: #444 !important;
    }

    .vista-cover {
        width: 180px;
        height: 180px;
        border: 1px solid #a5acb5;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        object-fit: cover;
    }

    .vista-now-playing {
        background: linear-gradient(to bottom, #061231 0%, #3a56a0 100%);
        color: white;
        padding: 4px 8px;
        font-size: 12px;
        font-weight: bold;
        border-radius: 3px 3px 0 0;
        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3);
        display: inline-block;
        margin-bottom: -1px;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }

    .vista-info-container {
        position: absolute;
        left: 210px;
        bottom: 20px;
        width: 220px;
    }

    .vista-song-info {
        background: rgba(255, 255, 255, 0.7) !important;
        padding: 10px;
        border-radius: 4px;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        white-space: nowrap;
        position: relative;
        height: 60px;
    }

    .vista-title {
        margin: 0 0 5px 0;
        font-size: 16px;
        color: #1b254d;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .vista-artist {
        margin: 0;
        font-size: 14px;
        color: #555;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .vista-controls-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 10px;
        position: relative;
    }

    .vista-progress-container {
        margin-bottom: 15px;
    }

    .vista-progress-track {
        height: 4px;
        background: #c5cdd9;
        border-radius: 2px;
        cursor: pointer;
        position: relative;
        margin-bottom: 5px;
    }

    .vista-progress-fill {
        height: 100%;
        background: linear-gradient(to right, #172343 0%, #344262 100%) !important;
        border-radius: 2px;
        width: 0%;
        transition: width 0.1s linear;
    }

    .vista-time-display {
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        color: #555;
    }

    .vista-controls {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px; 
        position: relative;
        padding-bottom: 10px;
    }

    .vista-control-btn {
        background: transparent !important;
        border: none !important;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: none !important;
        padding: 0;
        transition: transform 0.1s ease;
    }

    .vista-control-btn:hover {
        transform: scale(1.05);
    }

    .vista-control-btn:active {
        transform: scale(0.95);
    }

    .vista-prev-btn, .vista-next-btn {
        width: 50px;
        height: 50px;
    }

    .vista-prev-btn img, .vista-next-btn img {
        width: auto !important;
        height: 100% !important;
        max-width: 50px;
        max-height: 50px;
        object-fit: contain;
        filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.3));
    }

    .vista-play-btn, .vista-pause-btn {
        width: 65px;
        height: 65px;
    }

    .vista-play-btn img, .vista-pause-btn img {
        width: auto !important;
        height: 100% !important;
        max-width: 65px;
        max-height: 65px;
        object-fit: contain;
        filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.3));
    }

    .vista-volume-container {
        position: absolute;
        right: 20px;
        bottom: 20px;
        width: 140px;
        height: 50px;
        background: rgba(255, 255, 255, 0.7);
        padding: 8px 10px;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 10;
    }

    .vista-volume-control {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        gap: 6px;
    }

    .vista-volume-slider {
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 100%;
        height: 6px;
        margin: 0;
        background: linear-gradient(to right, #263a72 0%, #4b6bc6 var(--volume-level, 50%), #c5cdd9 var(--volume-level, 50%), #c5cdd9 100%);
        border-radius: 3px;
        cursor: pointer;
        transition: background 0.2s ease;
    }

    .vista-volume-icons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 2px;
    }

    .vista-volume-icon {
        width: 16px;
        height: 16px;
        color: #2d3f71;
        opacity: 0.8;
        flex-shrink: 0;
    }

    .vista-volume-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 14px;
        height: 14px;
        background: #fff;
        border-radius: 50%;
        border: 1px solid #a5acb5;
        box-shadow: 0 1px 2px rgba(0,0,0,0.2);
        cursor: pointer;
        transition: transform 0.1s ease;
    }

    .vista-volume-slider::-moz-range-thumb {
        width: 14px;
        height: 14px;
        background: #fff;
        border-radius: 50%;
        border: 1px solid #a5acb5;
        box-shadow: 0 1px 2px rgba(0,0,0,0.2);
        cursor: pointer;
        transition: transform 0.1s ease;
    }

    .vista-player .vista-controls button::before,
    .vista-player .vista-controls button::after {
        content: none !important;
    }
    .vista-title-controls button, .vista-main-content button {
        min-width: auto;
    }
  `;
  document.head.appendChild(style);

  const playerContainer = document.createElement("div");
  playerContainer.className = "vista-player";
  playerContainer.id = "player";
  playerContainer.innerHTML = `
    <div class="vista-title-bar">
        <div class="vista-title-text">Windows Media Player</div>
        <div class="vista-title-controls">
            <button class="vista-minimize">
                <svg width="10" height="1" viewBox="0 0 10 1"><rect width="10" height="1" fill="currentColor"/></svg>
            </button>
            <button class="vista-maximize">
                <svg width="10" height="10" viewBox="0 0 10 10"><rect x="0.5" y="0.5" width="9" height="9" fill="none" stroke="currentColor"/></svg>
            </button>
            <button class="vista-close">
                <svg width="10" height="10" viewBox="0 0 10 10"><path d="M0,0 L10,10 M10,0 L0,10" stroke="currentColor" stroke-width="1.5"/></svg>
            </button>
        </div>
    </div>
    <div class="vista-main-content">
        <div id="display-box" class="vista-display-box">
            <img id="cover" class="vista-cover" src="" alt="Album cover">
            <div id="info-container" class="vista-info-container">
                <div class="vista-now-playing">Now playing</div>
                <div id="song-info" class="vista-song-info">
                    <h3 id="title" class="vista-title"></h3>
                    <p id="artist" class="vista-artist"></p>
                </div>
            </div>
        </div>
        <div id="controls-container" class="vista-controls-container">
            <div class="vista-progress-container">
                <div class="vista-progress-bar">
                    <div class="vista-progress-track" role="slider" aria-valuemin="0" aria-valuemax="100" tabindex="0">
                        <div class="vista-progress-fill"></div>
                    </div>
                    <div class="vista-time-display">
                        <span class="vista-current-time">0:00</span>
                        <span class="vista-duration">0:00</span>
                    </div>
                </div>
            </div>
            <div id="controls" class="vista-controls">
                <button id="prevButton" class="vista-control-btn vista-prev-btn" aria-label="Previous track">
                    <img src="${ASSETS.btnPrev}" alt="Previous">
                </button>
                <button id="playPauseButton" class="vista-control-btn vista-play-btn" aria-label="Play/Pause">
                    <img src="${ASSETS.btnPlay}" alt="Play">
                </button>
                <button id="nextButton" class="vista-control-btn vista-next-btn" aria-label="Next track">
                    <img src="${ASSETS.btnNext}" alt="Next">
                </button>
            </div>
        </div>
    </div>
    <div id="volume-container" class="vista-volume-container">
        <div class="vista-volume-control">
            <input type="range" id="volumeSlider" min="0" max="100" value="50" class="vista-volume-slider" aria-label="Volume control">
            <div class="vista-volume-icons">
                <svg class="vista-volume-icon" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                </svg>
                <svg class="vista-volume-icon" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
            </div>
        </div>
    </div>
  `;

  gameWindow.insertAdjacentElement("afterend", playerContainer);

  const audio = getAudioElement();
  const startSong = activePlaylist.getCurrentSong();
  if (startSong) audio.src = startSong.getAudioLink();
  audio.volume = currentVolume / 100;

  const playPauseBtn = document.getElementById("playPauseButton");
  const prevBtn = document.getElementById("prevButton");
  const nextBtn = document.getElementById("nextButton");
  const volumeSlider = document.getElementById("volumeSlider");
  const progressTrack = playerContainer.querySelector(".vista-progress-track");

  const playSongAtIndex = () => {
    updateUI(activePlaylist);
    const song = activePlaylist.getCurrentSong();
    if (song) {
      audio.src = song.getAudioLink();
      audio.play()
        .then(() => updatePlayPauseIcon(true))
        .catch(e => {
          console.log("Autoplay blocked:", e);
          updatePlayPauseIcon(false);
        });
    }
  };

  playPauseBtn?.addEventListener("click", () => {
    if (audio.paused) {
      audio.play()
        .then(() => updatePlayPauseIcon(true))
        .catch(e => {
          console.log("Playback prevented:", e);
          updatePlayPauseIcon(false);
        });
    } else {
      audio.pause();
      updatePlayPauseIcon(false);
    }
  });

  nextBtn?.addEventListener("click", () => {
    activePlaylist.playNext();
    playSongAtIndex();
  });

  prevBtn?.addEventListener("click", () => {
    activePlaylist.playPrevious();
    playSongAtIndex();
  });

  volumeSlider?.addEventListener("input", (e) => {
    currentVolume = parseInt(e.target.value, 10);
    audio.volume = currentVolume / 100;
    volumeSlider.style.setProperty('--volume-level', `${currentVolume}%`);
  });

  progressTrack?.addEventListener("click", (e) => {
    if (Number.isFinite(audio.duration)) {
      const rect = progressTrack.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      audio.currentTime = pos * audio.duration;
    }
  });

  audio.addEventListener("timeupdate", () => {
    const progressFill = playerContainer.querySelector(".vista-progress-fill");
    const currentTimeDisplay = playerContainer.querySelector(".vista-current-time");
    const durationDisplay = playerContainer.querySelector(".vista-duration");

    if (progressFill && Number.isFinite(audio.duration)) {
      progressFill.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
    }

    if (currentTimeDisplay) {
      currentTimeDisplay.textContent = formatTime(audio.currentTime);
    }
    if (durationDisplay && Number.isFinite(audio.duration)) {
      durationDisplay.textContent = formatTime(audio.duration);
    }
  });

  audio.addEventListener("ended", () => {
    activePlaylist.playNext();
    playSongAtIndex();
  });

  updateUI(activePlaylist);
  audio.play()
    .then(() => updatePlayPauseIcon(true))
    .catch(() => updatePlayPauseIcon(false));
}

setupMusicPlayer();

HistHexcolour = ["#6eb4f2", "#e00000", "#d6a500", "#8E44AD"];
HistName = ["Dennis Kucinich", "Rudy Giuliani", "Penn Jillette", "Reform/Other Candidates"];
HistEV = [285, 253, 0, 0];
HistPV = ["63,549,200", "62,104,900", "3,413,800", "2,100,800"];
HistPVP = ["48.4%", "47.3%", "2.6%", "1.6%"];
