RecReading=true 
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
]


campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 9,
        "fields": {
            "year": 2000,
            "summary": "The administration of President Mario Cuomo has been one of moderate success and popularity, with a steadily growing economy and few controversies. Despite an admittedly strong setback in the 1998 midterms which saw massive losses for the Democratic Party in Congress, this popularity has wavered little, even if many Americans still have a negative outlook on Cuomo's staunch liberalism.</p><p>The Republicans, after a deadlocked convention, have nominated Cuomo's old rival from New York, the former Senator and now Governor Al D'Amato. D'Amato has been controversial with the party base for his hesitance in discussing cultural issues, but nonetheless secured support through his fiery rhetoric on Cuomo's perceived failures. With the president leading in most battleground states, he'll have his work cut out for him, especially with the Reform Party set to perform well once again, though it should be noted that D'Amato generally holds higher favorability ratings with many Americans.",
            "image_url": "https://i.imgur.com/xwdalUO.png",
            "winning_electoral_vote_number": 270,
            "advisor_url": "https://i.imgur.com/nm5FWxH.png",
            "recommended_reading": "<h4 style=\\\"margin-top: 0.5em;\\\">Hey, thanks for playing</h4>Shockingly, I have managed to complete another mod. I made Dynasty 1996 a year and a half ago (or maybe it was two, I don't know,<p></p>time is scary) with the intention of it being a series with at least five entries. Before I had even begun 1996, I actually wanted to begin in<p></p>2004 where you play as incumbent veep Bob Graham running after two terms of Cuomo. Funny how that's now the third mod in the<p></p>series, and yes, you can take that as me saying I plan to make another Dynasty. Past that, it depends on how this one and that future<p></p>one are received, but I had a really fun time doing the writing for the three candidates in this mod. I tried to remain faithful to the speaking<p></p>styles of each one, Trump's side was definitely the most fun while remembering not to default to the way he speaks today.<br><br><br>I have a few other ideas I've always been considering, but at this point I know better than to make promises about any of them.<p></p>I seem to take very long breaks in between actively modding scenarios, but given that I've been involved (and I use that word<p></p>very loosely) in this community for going on five years now, I don't think I'll be fully gone anytime soon. Feel free to screenshot<p></p>this and post it to the Discord if that previous sentence ages like milk. Anyway, I hope you enjoyed playing Dynasty 2000, and<p></p>I hope you'll enjoy any other mods I put out in the future. Maybe a 1996 redux is in order some day? Who can tell.<br><br><h3>-Eye Rash</h3>",
            "has_visits": 1,
            "no_electoral_majority_image": "https://www.jetsimon.com/public/static/images/2012-no-majority.jpg",
            "creator": "Dan Bryan",
            "display_year": "2000 - Dynasty"
        }
    }
]


campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 77,
        "fields": {
            "first_name": "Mario",
            "last_name": "Cuomo",
            "election": 9,
            "party": "Democratic",
            "state": "New York",
            "priority": 1,
            "description": "Ever since his keynote speech at the 1984 Democratic National Convention, Mario Cuomo was considered prime presidential material. Passing up an opportunity to run in both 1988 and 1992, he finally announced a candidacy in the summer of '95, and proceeded to defeat Vice President Dan Quayle in an expected landslide in November of the next year. Since taking office, Cuomo has enjoyed a moderate amount of success and popularity, even despite an admittedly strong setback in the 1998 midterms, seeing the House flip to the GOP while the Senate was retained.</p><p>The general consensus among most politically informed folk is that it's not a matter of if Cuomo will win re-election, but by what margin, as there's hardly a wave of dissatisfaction for the present administration. Even so, while those who personally know the president will refute this claim, he has something of a perception issue with many Americans, being seen as somewhat detached from everyday life. In order to secure victory once again, Cuomo must leverage his successes while keeping in mind the general distaste most Americans still have for liberalism.",
            "color_hex": "#0047ab",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 1,
            "image_url": "https://i.imgur.com/k5iNVqM.png",
            "electoral_victory_message": "<h3>Congratulations! You have won the 2000 election.</h3><p>Confounding the predictions of many experts, you were able to turn the tables on Al Gore, in spite of the economy and Clinton's popularity.</p><p>On the political front, you can push for tax cuts to spur the economy and return the budget surplus to the American people. You might also pursue education and immigration reform, individual Social Security accounts, and new laws to defend the family and the sanctity of life.</p>",
            "electoral_loss_message": "<h3>Sorry! You have lost the 2000 election.</h3><p>Perhaps it was always a long-shot, with the Democrats in such a commanding position after eight years of Bill Clinton. In any case, at least you are still the Governor of Texas.</p><p>Expect Al Gore to unleash a new round of government programs and environmental regulations. You are still youngish, however. If the election was close this time, perhaps you can run again in 2004, or work on behalf your brother Jeb.</p>",
            "no_electoral_majority_message": "<h3>Wow! You have won in a squeaker.</h3><p>No candidate achieved a majority of the electoral votes, marking the first time this has happened since 1824. Fortunately for you, the majority of U.S. states have Republican controlled congressional delegations, and they will cast their votes accordingly.</p><p>Given the incredibly close nature of the election, you will surely be expected to govern as a moderate, conciliatory President. Right??</p>",
            "description_as_running_mate": "''",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 78,
        "fields": {
            "first_name": "Al",
            "last_name": "D'Amato",
            "election": 9,
            "party": "Republican",
            "state": "New York",
            "priority": 2,
            "description": "There are many similarities between Alfonse D'Amato and President Cuomo. Both Catholic, both Italian-American (and damned proud of it), and both men of New York whose careers shaped the political landscape of that state. D'Amato served in the Senate from 1981 until his inauguration as Governor of New York just last year, a position he challenged then-Governor Cuomo for back in 1994, coming up just short. In essence, this presidential election is the culmination of a decades long rivalry between the two, one that D'Amato intends to come out on top of this time.</p><p>Entering the race for the nomination, D'Amato initially trailed far behind Senator John McCain and, embarrassingly, polled below a draft movement for a former governor. Gradually, his theatrical and often fiery rhetoric on the trail resulted in him leading with pledged delegates. Crucially though, he didn't have a majority. Striking a deal to secure the nomination, he polls at a disadvantage for the general election against President Cuomo. The first order of business will be to mollify conservatives concerned with his hesitance to discuss cultural issues of the day.",
            "color_hex": "#cd001a",
            "secondary_color_hex": "#90C0FF",
            "is_active": 1,
            "image_url": "https://i.imgur.com/VhCtqcM.png",
            "electoral_victory_message": "<h3>Congratulations! You have won the 2000 election.</h3><p>Though it was perhaps expected, you could have easily faltered at a number of points. Credit to you for pulling through.</p><p>On the political front, you can continue the Clinton legacy and strengthen Social Security for generations to come. Perhaps you can succeed on health care where Clinton came up short? Or maybe you can create a future of renewable energy for America. Just be wary of a (George or Jeb?) Bush challenge in 2004.</p>",
            "electoral_loss_message": "<h3>Sorry! You have lost the 2000 election.</h3><p>Surely the second-guessing will be intense, but if things were close you could probably run again in 2004.</p><p>It seems that with George W. Bush and a Republican majority, the United States can expect some conservative policy-making over the next four years. Hopefully Bush comes through on his promise to govern in a bipartisan, conciliatory manner. A lot should depend on the margin of his victory, and whether it was large or small.</p>",
            "no_electoral_majority_message": "<h3>Sorry! You have lost in a squeaker.</h3><p>No candidate achieved a majority of the electoral votes, for the first time since 1824. Unfortunately for you, a majority of states have Republican controlled congressional delegations.</p><p>It seems that with George W. Bush and a Republican majority, the United States can expect some conservative policy-making over the next four years. Hopefully Bush comes through on his promise to govern in a bipartisan, conciliatory manner.</p>",
            "description_as_running_mate": "''",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 79,
        "fields": {
            "first_name": "Donald",
            "last_name": "Trump",
            "election": 9,
            "party": "Reform",
            "state": "New York",
            "priority": 3,
            "description": "It certainly can't be said that New Yorkers will be underrepresented in this election cycle, as Donald Trump is arguably the third big-name New Yorker Americans will have a chance to vote for this November. The famous (some would argue infamous) real estate mogul started his career working for his father's company which owned and operated some middle-class apartment buildings in Brooklyn and Queens. Eventually taking the reigns and expanding into Manhattan, Trump now dips his toes into many different ventures, most notably politics this year.</p><p>Arguably too much of an oddball for both the Democratic and Republican parties, Trump slots nicely into the big-tent that is the Reform Party that Ross Perot had formed, a man whom Trump seeks to emulate. The nomination was easy to win, but internal divisions at Reform HQ are already showing, and first on the Trump agenda will be to get his house in order. Most polls have him hovering between six and eight percent, and Trump's strategy and goals for the election aren't yet clear. However, perhaps with the right campaign he can prove that Reform is here to stay. ",
            "color_hex": "#9966cc",
            "secondary_color_hex": "#A1FFA1",
            "is_active": 1,
            "image_url": "https://i.imgur.com/yywD1Jw.png",
            "electoral_victory_message": "<h3>Congratulations! You have won the 2000 election.</h3><p>This was definitely not supposed to happen. Good luck!</p>",
            "electoral_loss_message": "<h3>As expected, you have lost the 2000 election.</h3><p>The legacy of this campaign depends on a couple of factors. First of all, did you receive 5% of the popular vote? If so, congratulations! You will enable the Green Party to run a vigorous campaign in 2004 and present a true choice to the American people. Also, the Democrats were a little peeved that you \"stole\" votes from them in this election. Hopefully that doesn't lead to a backlash.</p>",
            "no_electoral_majority_message": "<h3>Wow! No candidate received 270 electoral votes, but the House will elect George W. Bush as President.</h3><p>Did you receive 5% of the popular vote? If so, congratulations! You will enable the Green Party to run a vigorous campaign in 2004 and present a true choice to the American people. Also, the Democrats were a little peeved that you \"stole\" votes from them in this election. Hopefully that doesn't lead to a backlash, especially since they will lose the vote in the House.</p>",
            "description_as_running_mate": "''",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 80,
        "fields": {
            "first_name": "Ralph",
            "last_name": "Nader",
            "election": 9,
            "party": "Green",
            "state": "Connecticut",
            "priority": 4,
            "description": "<b>[Not playable, context only.]</b></p>There was a time when Ralph Nader was one of the most respected men in America, renowned for his work as a consumer advocate in uncovering the shady practices of large corporations, most notably General Motors. In the decades since his name first entered the public lexicon though, his star has faded. While still known and respected, these days many younger voters may only recognize him as a name on their ballots for president four years ago.</p><p>Nader stands as the presidential nominee for the Green Party, a left-wing environmentalist party which he previously ran under in 1996, to a disappointing result where he barely managed to capture half a percentage point of the popular vote. Returning again with largely the same platform, and even the same running mate, it is unlikely he will improve upon his previous margins by much, if at all due to Donald Trump's own populist third party campaign",
            "color_hex": "#01c104",
            "secondary_color_hex": "#FFFFC0",
            "is_active": 1,
            "image_url": "https://i.imgur.com/n3ZTbrB.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "''",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 81,
        "fields": {
            "first_name": "Bob",
            "last_name": "Graham",
            "election": 9,
            "party": "Democratic",
            "state": "Florida",
            "priority": 5,
            "description": "''",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://i.imgur.com/SPTk25s.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "Serving with you since your inauguration in 1997, Vice President Bob Graham ticked off all the boxes when you picked him as your running mate. Friendly yet firm, personable yet stately, a mountain of experience that exceeds even your own, <i>and</i> he's from a crucial state where he's still well-liked? Really, it was a no-brainer. He hasn't had a lot on his plate in his duties as president of the Senate given the healthy Democratic control, even after the '98 midterms, but he's often the man who gets sent when the administration needs a friendly face representing it.</p><p>While he holds his convictions steadfast, some are of the belief that he's simply too nice to be president, whatever that means. He also has his quirks which may be offputting to some Americans if they knew the extent of them. Even so, he brings a much-needed sense of moderation to the ticket (without requiring much compromise), not to mention the two of you have a good working relationship. And that's to say nothing of the fact that winning Florida again would virtually secure your re-election. All this to say, dropping Graham would be inconceivably idiotic of you.",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 85,
        "fields": {
            "first_name": "John",
            "last_name": "Kasich",
            "election": 9,
            "party": "Republican",
            "state": "Ohio",
            "priority": 9,
            "description": "''",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/TMOUp5V.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "John Kasich is a Congressman from Ohio, serving in the House since the early 80's. Mounting a longshot bid for the presidency this year, he performed surprisingly well in the Midwestern state primaries, even managing to outperform you and come in second place behind Senator McCain in his home state. Emboldened by his somewhat strong performances, he decided to stick it out until the convention, hoping to perhaps play the role as kingmaker.</p><p>When the convention did come around, his wish came true. With neither you nor McCain having a majority, you were faced with a decision to either suffer a potentially damaging deadlock battle, or cut a deal. McCain certainly wouldn't have made one with you, his chance at the nomination still very tangible. Forbes, aside from his flat tax obsession, wanted a say in the appointment of Treasury, Commerce, <i>and</i> OMB. Then came Kasich, with just enough delegates to put you over the top, and all it took was the vice presidency. Inoffensive, seasoned, could help you soothe wary conservatives in the party, AND he's from a vital battleground state? You could do a lot worse.",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 86,
        "fields": {
            "first_name": "John",
            "last_name": "Ashcroft",
            "election": 9,
            "party": "Republican",
            "state": "Missouri",
            "priority": 10,
            "description": "''",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/1eDWxQ0.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "When faced with the decision of either making a deal with one of your primary competitors to secure the nomination or battling it out on the convention floor in the face of a deadlock, you chose the latter. You and Senator McCain, both not the first choice of many conservatives in the party, were forced to slug it out on who the more conservative candidate is. You won out in the end, but only by pledging to select a blood-red conservative as your running mate.</p><p>John Ashcroft's career exists almost entirely in his home state of Missouri, only relatively recently entering Congress when he entered the Senate in 1994. That's not to say he's inexperienced however, as his political career stretches back to the early 70's in various statewide positions. Ashcroft will certainly help you win over the wavering evangelical voters, but his staunch social conservatism and moralistic tendencies may be a touch too much for the voters of a nation entering the 21st century. He's also not afraid to get his hands dirty, as his 1984 gubernatorial bid was infamously extremely negative. Hopefully that doesn't mean he's got a few skeletons he's hiding in his closet.",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 87,
        "fields": {
            "first_name": "George W.",
            "last_name": "Bush",
            "election": 9,
            "party": "Republican",
            "state": "Texas",
            "priority": 11,
            "description": "''",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/7bgL2TA.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "As it turns out, you were able to strike a deal with Kasich to secure the nomination, and all it took was his placement in your hypothetical cabinet. Hardly a compromise considering he would have been a consideration for an appointment anyway. With the agency of choosing your own running mate, you went with the Governor of Texas, George W. Bush, who considered a run this year but seemingly has his eyes set on a Senate seat in 2002.</p><p>The most striking thing about the man is his name, as he is, of course, the son of the former President George Bush. Perhaps in your selection of Bush you're hoping to reignite memories of the Reagan and Bush administrations? Regardless, George Bush is more than just a name. Much like yourself, he's the governor of one of the largest states in the nation, and you could make an argument of executive experience with this ticket (though certainly not enough to outpace Cuomo/Graham). He's also considered pretty likable personally, which could reinforce your attempts at appearing more relatable. It should be noted however that Bush seems to have a penchant for gaffes...",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 88,
        "fields": {
            "first_name": "Bill",
            "last_name": "Weld",
            "election": 9,
            "party": "Republican",
            "state": "Massachusetts",
            "priority": 12,
            "description": "''",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/CocK36S.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "Early on in the primary campaign, something truly strange happened: a draft movement emerged for Bill Weld, the former Governor of Massachusetts. While such an event is not uncommon, what was uncommon was the level of support Weld received in many polls taken, particularly in the Northeast. Some speculate this movement was orchestrated by younger Republicans, by the scant few liberal members of the party, and a few even believe this was set up by Democratic operatives, hoping to weaken the party by causing a rift in the ranks at the convention.</p><p>None of that mattered when Weld himself eventually put to rest the idea of his candidacy. But you, believing there to be a genuine desire for Weld on the national stage, decided to offer him a role as your running mate. This move, in no uncertain terms, greatly disappointed the conservatives in your party. Weld may follow the party line for the most part regarding economics, but he is a moderate, some would argue an outright liberal on cultural issues of the day. Perhaps some moderates will appreciate him, but what're you trying to do here? Flip Massachusetts? Fat chance.",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 89,
        "fields": {
            "first_name": "Richard",
            "last_name": "Lamm",
            "election": 9,
            "party": "Reform",
            "state": "Colorado",
            "priority": 13,
            "description": "''",
            "color_hex": "#00C100",
            "secondary_color_hex": "#A1FFA1",
            "is_active": 0,
            "image_url": "https://i.imgur.com/0hKNcIC.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "In the book you had someone write for your 2000 campaign, it was mentioned that you preferred Oprah Winfrey as your running mate. This, however, could not be manifested, despite multiple attempts on your part to convince her to accept such a position. Instead, you were left with a small pool of choices within the Reform Party. Governor Jesse Ventura, while he will support you, was not interested. Pat Buchanan was a definite no-go. Enter Richard Lamm, the former three-term Governor of Colorado, who himself had attempted a run for the Reform nomination back in 1996.</p><p>Lamm hardly brings star-power to the ticket, but what he does bring is something that's pretty rare in your party: actual political experience. Having a man governed for a decade and change, even if it was a while ago at this point, will grant your campaign an air of legitimacy. Furthermore, he can help solidify your support within Reform HQ. As a former Democrat and avowed environmentalist, he could assist in siphoning off votes from Mario Cuomo, while still maintaining his Reform base appeal vis a vis his support of immigration enforcement and populist rhetoric. ",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 90,
        "fields": {
            "first_name": "Winona",
            "last_name": "LaDuke",
            "election": 9,
            "party": "Green",
            "state": "Minnesota",
            "priority": 14,
            "description": "''",
            "color_hex": "#FFFF00",
            "secondary_color_hex": "#FFFFC0",
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/static/images/winona-laduke-2000.jpg",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "Winona LaDuke is a Native American environmental activist from Minnesota whom Ralph Nader previously ran with in 1996. She returns again to serve as his running mate, which may help reinforce their messaging this year. At the very least it'll help save on campaign material given how strapped for cash the Green Party is, despite the name.",
            "candidate_score": 0,
            "running_mate": true
        }
    }
]


campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 57,
        "fields": {
            "candidate": 80,
            "running_mate": 90
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 56,
        "fields": {
            "candidate": 79,
            "running_mate": 89
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 48,
        "fields": {
            "candidate": 77,
            "running_mate": 81
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 52,
        "fields": {
            "candidate": 78,
            "running_mate": 85
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 53,
        "fields": {
            "candidate": 78,
            "running_mate": 86
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 54,
        "fields": {
            "candidate": 78,
            "running_mate": 87
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 55,
        "fields": {
            "candidate": 78,
            "running_mate": 88
        }
    }
]


campaignTrail_temp.credits = "Eye Rash, banner created by E"


campaignTrail_temp.opponents_default_json = [
    {
        "election": 9,
        "candidates": [
            77,
            78,
            79,
            80
        ]
    }
]


campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 9,
        "candidates": [
            77,
            78,
            79,
            80
        ]
    }
]


campaignTrail_temp.temp_election_list = [
    {
        "id": 9,
        "year": 2000,
        "is_premium": 0,
        "display_year": "2000 - Dynasty"
    }
]


jet_data = {
    "headerColor": "#580f95",
    "windowColor": "#add8e6",
    "containerColor": "#add8e6",
    "innerWindowColor": "#008080",
    "bannerImageUrl": "https://i.imgur.com/9tcRCH0.png",
    "backgroundImageUrl": "https://i.imgur.com/wrDFYBo.png",
    "endingTextColor": "#000000",
    "customQuote": "\"You campaign in poetry. You govern in prose.\"",
    "gameTitle": "DYNASTY: 2000"
}


//#startcode




corrr = '\n              <h2>DYNASTY: 2000</h2><font id="wittyquote" size="4" color="white"><em>"You campaign in poetry. You govern in prose."</em></font>\n            ';




nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#580f95";


nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#add8e6";


document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;


$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;


$(".container")[0].style.backgroundColor = "#add8e6";


document.getElementById("header").src = "https://i.imgur.com/9tcRCH0.png";


document.body.background = "https://i.imgur.com/wrDFYBo.png";


document.head.innerHTML += "<style>#results_container {color:#000000;} .inner_window_w_desc {background-color:#008080!important;}</style>";


 HistHexcolour=["#0047AB","#CD001A","#9966CC","#01C104"];
    HistName=["Mario Cuomo","Al D’Amato","Donald Trump","Ralph Nader"];
    HistEV=[342,196,0,0];
    HistPV=["51,196,407    ","47,139,923","7,627,057","658,268"];
    HistPVP=["48.0%","44.2%","7.2%","0.6%"];


  // Initialise custom music
  
  $("#music_player")[0].children[0].style.display="none"
  $("#music_player")[0].children[1].style.display="none"
  
  document.getElementById("modLoadReveal").style.display="none"
  document.getElementById("modloaddiv").style.display="none"
  
  musicBox = document.getElementById("music_player")
  musicBox.style.display=""
  
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
    z += `<b><select id='selectSoundtrack'><option value='`+soundtracks[e.selectedSoundtrack].name+`'>`+soundtracks[e.selectedSoundtrack].name+"</option>"
    for (i in soundtracks) {
      if (soundtracks[e.selectedSoundtrack] != soundtracks[i]) {
        z += `<option value='`+soundtracks[i].name+`'>`+soundtracks[i].name+`</option>`
      }
    }
    z += `</select></b><br><br>`
    // <label><input type="radio" name="option" value="option1">Option 1</label><br>
    for (i in soundtracks[e.selectedSoundtrack].tracklist) {
      let a = soundtracks[e.selectedSoundtrack].tracklist[i]
      let b = `<label><input class="trackSelector" type="radio" name="trackSelector" value="`+i+`">`+a.name+`</label><br>`
      z += b
    }
    z += "</div><br><br>"
    trackSel.innerHTML = z
  
    // select correct song
  
    musicBox.appendChild(trackSel);
    Array.from(document.getElementById("trackSel").children).filter(f=>{
      return f.tagName == "LABEL"
    }).map(f=>f.children[0])[0].checked = true
  
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
      let newSel = clamp(selected+1, soundtracks[e.selectedSoundtrack].tracklist.length-1, 0)
      let buttons = Array.from(document.getElementById("trackSel").children).filter(f=>{
        return f.tagName == "LABEL"
      }).map(f=>f.children[0])
      //let selectedIndex = buttons.map(f=>f.children[0]).map(f=>f.checked)
      buttons[newSel].click()
    }
  
    for (w = 0; w < 7; w++) {
      document.getElementById("trackSelParent").appendChild(document.createElement("br"))
    }
    
    generateTime();
  }
  
  clamp = function(a, max, min, overflow=true) {
    if (overflow) {
      return a > max ? min : a < min ? max : a;
    }
    return a > max ? max : a < min ? min : a;
  }
  
  
  // Track list
  
  var soundtracks = {
    0: {
      name: "Intro",
      tracklist: [
        {
          "name": "New York Groove - Hello",
          "url": "https://file.garden/akWP9oqfwQIsW8PI/New%20York%20Groove%20-%20Hello.m4a"


            }
          ]
        },
        1: {
          name: "Cuomo",
          tracklist: [
            {
              "name": "Beast Of Burden - The Rolling Stones",
              "url": "https://file.garden/akWP9oqfwQIsW8PI/The%20Rolling%20Stones%20-%20Beast%20of%20Burden.MP3.mp3"
            },
            {
              "name": "Mary Jane’s Last Dance - Tom Petty and the Heartbreakers",
              "url": "https://file.garden/akWP9oqfwQIsW8PI/17%20-%20Mary%20Jane's%20Last%20Dance.mp3"
            },
            {
              "name": "Do It Again - Steely Dan",
              "url": "https://file.garden/akWP9oqfwQIsW8PI/Steely%20Dan%20%E2%80%93%20Do%20It%20Again.mp3"


            }
          ]
        },
        2: {
          name: "D’Amato",
          tracklist: [
            {
              "name": "Apostrophe’ - Frank Zappa",
              "url": "https://file.garden/akWP9oqfwQIsW8PI/Apostrophe%20(')%20-%20Frank%20Zappa"
            },
            {
              "name": "Hold On Loosely - 38 Special",
              "url": "https://file.garden/akWP9oqfwQIsW8PI/38%20Special%20-%20Hold%20On%20Loosely.mp3"
            },
            {
              "name": "Moving Out (Anthony’s Song) - Billy Joel",
              "url": "https://file.garden/akWP9oqfwQIsW8PI/Moving%20Out%20(Anthony's%20Song)%20-%20Billy%20Joel.m4a"


            }
          ]
        },
        3: {
          name: "Trump",
          tracklist: [
            {
              "name": "American Jesus - Bad Religion",
              "url": "https://file.garden/akWP9oqfwQIsW8PI/American%20Jesus%20-%20Bad%20Religion.m4a"
            },
            {
              "name": "Politicians In My Eyes - Death",
              "url": "https://file.garden/akWP9oqfwQIsW8PI/Politicians%20In%20My%20Eyes%20-%20Death.m4a"
            },
            {
              "name": "I Wanna Be Your Dog - The Stooges",
              "url": "https://file.garden/akWP9oqfwQIsW8PI/I%20Wanna%20Be%20Your%20Dog%20-%20The%20Stooges.m4a"
            }
          ]
        }
        
        
    }




  // Set up new music player
  
  newMusicPlayer()
