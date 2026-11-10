function ctsAchievement(achievement, difficultyChecker = true){
	if ((difficultyChecker && campaignTrail_temp.difficulty_level_multiplier<=1)||!difficultyChecker)
		if(campaignTrail_temp.CTS){
		unlockAchievement(achievement);
	}
}
campaignTrail_temp.cyoa = true;
	e = campaignTrail_temp
cyoAdventure = function (a) {
    ans = campaignTrail_temp.player_answers[campaignTrail_temp.player_answers.length-1];
    if(ans == 6136){
		unlockAchievement("Family Reunion");
    }
    if(ans == 6201){
        unlockAchievement("Civilized Debate");
    }
}

campaignTrail_temp.questions_json = [
    {
        "model": "campaign_trail.question",
        "pk": 1300,
        "fields": {
            "priority": 1,
            "description": "(November 5, 2023) One year until election day. As you make the unprecedented move to intervene with your own internal affairs, what approach will you take?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1301,
        "fields": {
            "priority": 2,
            "description": "(November 5, 2023) You have chosen to use the face of Columbia to represent yourself to the people. How will you use that image to your advantage?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1304,
        "fields": {
            "priority": 3,
            "description": "(November 6, 2023) Given that you are not a physical entity, how do you plan on communicating your message to the American people?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1302,
        "fields": {
            "priority": 4,
            "description": "(November 30, 2023) A partisan ego-stroking competition masquerading as a debate is going to be broadcast live on Fox News tonight. \"The Great Red State vs Blue State Debate\" hosted by Sean Hannity, featuring Gavin Newsom of California and Ron DeSantis of Florida. Will you try to influence this in any way?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1305,
        "fields": {
            "priority": 5,
            "description": "(December 2, 2023) Prominent Muslim Americans in Michigan have launched the #AbandonBiden campaign in protest of President Biden's handling of the Israel-Hamas war. With this war being a continual point of division among the American public, will you address it in any way during your messages?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1303,
        "fields": {
            "priority": 6,
            "description": "(December 19, 2023) Today the Colorado Supreme Court ruled in the case Anderson v. Griswold, declaring that Donald Trump is disqualified from the state's primary ballot under the 14th Amendment. With the high likelihood that likeminded officials in other states will try something similar and the rising anger from Trump's supporters, will you make any comment on this event?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1325,
        "fields": {
            "priority": 7,
            "description": "(January 23, 2024) Today the Democratic Party primaries begin in New Hampshire, though everyone already knows who the nominee will be. Since it's a bygone conclusion that Joe Biden will be the party's nominee once again, will you make any effort to influence him before Election Day?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1306,
        "fields": {
            "priority": 8,
            "description": "(February 2024) Things have been oddly uneventful this month, with both sides too busy campaigning in their primaries to fight each other. What would you like to do in this quiet time?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1309,
        "fields": {
            "priority": 9,
            "description": "(March 4, 2024) The Supreme Court has handed down a unanimous ruling in the case Trump v. Anderson (formerly Anderson v. Griswold) stating that efforts by various state governments to remove Donald Trump from their primary ballots via the 14th Amendment are unconstitutional. Will you make any statements on this?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1307,
        "fields": {
            "priority": 10,
            "description": "(March 6, 2024) Nikki Haley has suspended her presidential campaign, quashing what little doubt there was of who will be the Republican Party's nominee this Fall. Now that Donald Trump's nomination is all but assured, will you make any attempt to influence him before Election Day?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1317,
        "fields": {
            "priority": 11,
            "description": "(March 7, 2024) The State of the Union Address is today, which millions of Americans will be watching. Will you make any moves regarding this event?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1308,
        "fields": {
            "priority": 12,
            "description": "(April 15, 2024) The trial for New York v. Donald Trump begins today. As the American people brace themselves for the unprecedented experience of watching a former President go on trial, how will you help them deal with it?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1319,
        "fields": {
            "priority": 13,
            "description": "(May 30, 2024) Guilty. In the case New York v. Donald Trump, Donald Trump has found guilty on 34 felony charges.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1318,
        "fields": {
            "priority": 14,
            "description": "(June 27, 2024) The first Presidential Debate airs tonight, hosted by CNN, the first time that Donald Trump and Joe Biden will have directly confronted each other in years. Will you make any effort to influence this event?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1316,
        "fields": {
            "priority": 15,
            "description": "(July 1, 2024) In a controversial 6-3 decision, in the case Trump v. United States, the Supreme Court has ruled that Presidents have immunity from prosecution for \"official acts\" taken as President. As the ramifications of this decision begin to be considered, would you like to make any input on this?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1320,
        "fields": {
            "priority": 16,
            "description": "(July 4, 2024) Independence Day, otherwise known as your 248th birthday. Fireworks light up the sky in a cascade of colorful sparks. For today at least, most of this land is united in celebration. Any thoughts?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1315,
        "fields": {
            "priority": 17,
            "description": "(July 2024) In the aftermath of the June 27th Debate, an ever-increasing number of Democratic politicians have called on President Biden to withdraw from the presidential race in favor of a younger candidate. Do you have any thoughts on this?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1321,
        "fields": {
            "priority": 18,
            "description": "(July 13, 2024) The unthinkable has occurred... In Butler, Pennsylvania, Donald Trump was subject to an assassination attempt. Thankfully, he only suffered an injury to his ear, but the whole nation is shaken. How do you respond to this event?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1322,
        "fields": {
            "priority": 19,
            "description": "(July 15-18, 2024) The Republican National Convention has arrived, just two days following Trump's near assassination. With everyone still on edge, will you make any moves during these four days?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1311,
        "fields": {
            "priority": 20,
            "description": "(July 21, 2024) After nearly a month of pressuring from his fellow Democrats, President Biden has formally announced his withdrawal from the presidential race. How will you deal with the fallout of this shocking development?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1313,
        "fields": {
            "priority": 21,
            "description": "(August 6, 2024) The DNC has officially certified Vice President Kamala Harris as their new presidential nominee, with Minnesota governor Tim Walz as her running mate. Will you make any attempts to influence these two?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1312,
        "fields": {
            "priority": 22,
            "description": "(August 19-22, 2024) The Democratic National Convention has arrived, wrapping up the chaos that has engulfed the party for the last month. With everyone watching intently as the Democrats make the final transition into the next phase of their campaign, will you make any moves?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1314,
        "fields": {
            "priority": 23,
            "description": "(August 23, 2024) Prominent Independent candidate Robert F. Kennedy Jr. has officially dropped out of the race and endorsed Donald Trump. With millions of disillusioned voters now without a figurehead, will you make any attempt to court these people to your cause?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1323,
        "fields": {
            "priority": 24,
            "description": "(September 10, 2024) The second Presidential Debate, hosted by ABC, airs tonight. This will be the first time that Donald Trump and Kamala Harris confront each other as Presidential nominees. Will you try to influence this event?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1324,
        "fields": {
            "priority": 25,
            "description": "(September 25, 2024) Unbelievably, there has been a second assassination attempt against Donald Trump. This time it occurred at the Trump International Golf Club in Florida, thankfully there were no injuries or deaths. Any response?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 42513,
        "fields": {
            "priority": 26,
            "description": "(October 1, 2024) The vice-presidential debate, hosted by CBS, airs today. This will be the only debate between J. D. Vance and Tim Walz, will you make any attempt to interfere?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 42514,
        "fields": {
            "priority": 27,
            "description": "(November 3, 2024) Election Day is right around the corner. It's time to make your final moves, what will they be?",
            "likelihood": 1
        }
    }
]

campaignTrail_temp.answers_json = [
    {
        "model": "campaign_trail.answer",
        "pk": 6110,
        "fields": {
            "question": 1300,
            "description": "1800, 1860, 1876, 1968, 2000... This country has had divisive elections in the past, and every time the American people has made it through. With the amount of cynicism and dread permeating this election cycle, I need to remind them of that."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6111,
        "fields": {
            "question": 1300,
            "description": "These are unprecedented times... The last election ended with a riot at the Capitol for goodness' sake! With this level of division amongst the people I can't afford to play it cautious. America is in danger, but not from its leaders. The people need to know that if they don't turn things around, they're going to tear their country in half."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6113,
        "fields": {
            "question": 1301,
            "description": "For much of her history, Columbia has been used to symbolize America's heart and I'm going to use her in the same way. A gentle, caring presence is just what the people need to lower tensions."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6115,
        "fields": {
            "question": 1301,
            "description": "During the Civil War, Columbia was used by Union soldiers to symbolize their devotion to the Union. Things aren't that bad, but I'd like to use her the same way. A symbol of a unified America for a divided people to rally around."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6116,
        "fields": {
            "question": 1301,
            "description": "To be honest, Columbia isn't that well known of a national symbol, especially compared to her popularity in the past. People will vaguely recognize her, but not know who she is. I'll use this to my advantage by creating an image from scratch. She'll be characterized like a stern mother, telling the people to get their acts together."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6117,
        "fields": {
            "question": 1302,
            "description": "Let's be honest, this is pure political theatre. The host knows it, the participants know it, and the audience know it. Trying to change that is a fool's errand, but I could still use this to my advantage. I'll run ads during the debate's breaks, where there'll be people watching."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6118,
        "fields": {
            "question": 1302,
            "description": "DeSantis is the one that'll probably be on the attack during the debate. I'll try to influence him to show some restraint when answering. A professional politician, rather than a diet Donald Trump."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6119,
        "fields": {
            "question": 1302,
            "description": "Newsom is the one that will be on defense throughout the debate, I'll try to influence him to lean into that. If he doesn't retaliate against attacks against him, maybe the tension going into the debate will die down."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6120,
        "fields": {
            "question": 1302,
            "description": "Hannity is the one meant to be moderating this debate, right? He's the one that's meant to be keeping this whole thing under control. I'll try to influence him to actually do his job, rather than turning this into a 2 v 1 against Newsom."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6121,
        "fields": {
            "question": 1303,
            "description": "Everyone knows that this is going up to the Supreme Court. If I talk about this case while it's still developing I just risk riling people up for nothing. I'll let the legal process handle this."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6122,
        "fields": {
            "question": 1303,
            "description": "Regardless on your opinion on Trump, you have to admit the Court's argument is flimsy. The Fourteenth Amendment only applies to individuals that have been officially charged by Congress, and Donald Trump hasn't been. I'll let my opposition to the ruling be known, but I'll be clear that it's purely through a legal perspective."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6123,
        "fields": {
            "question": 1303,
            "description": "This wouldn't have been a problem is they just sorted this out earlier. The January 6th Riot was almost three years ago, and yet they only get around to deciding if Trump's eligible less than a year before Election Day? Unbelievable."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6125,
        "fields": {
            "question": 1304,
            "description": "The best way to influence people is through their subconscious. My primary means of communicating with the people will be through their dreams. After all, if a national symbol walked up to you in a dream and talked to you, would you question it?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6126,
        "fields": {
            "question": 1304,
            "description": "I tackle this the same way the politicians do, advertising! I'll take over a few TV signals and broadcast my own series of commercials that spread my message to the nation."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6127,
        "fields": {
            "question": 1304,
            "description": "It's the 21st century, the Digital Age. If I want to get to as many people as possible I need to use the Internet. Social media, online ads, a website, I need to use everything at my disposal."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6129,
        "fields": {
            "question": 1305,
            "description": "Are you insane!? The Middle East has been turning the American people against each other for decades now. I can't afford to bring up such a contentious topic while trying the unify people. I'm not touching the war with a 100-foot pole."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6130,
        "fields": {
            "question": 1305,
            "description": "This is a subject that people are very passionate about, I have to acknowledge that. I'll try my best to encourage people to be civil during their discussions of the war. Everyone has the right to state their case."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6131,
        "fields": {
            "question": 1305,
            "description": "This war's been going on for almost two months now and already too many people have died. This should be something that we can all agree on, the carnage needs to stop. I'll state my support for a ceasefire, not for Israel's sake, not for Palestine's sake, but for simple humanity's sake."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6133,
        "fields": {
            "question": 1306,
            "description": "Everyone else being occupied is the perfect opportunity to ramp up my unity messaging. Time to double my efforts!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6134,
        "fields": {
            "question": 1306,
            "description": "Maybe now would be a good time to try out a new tactic. I go on the attack, directly condemning those that treat their fellow Americans like enemy combatants."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6135,
        "fields": {
            "question": 1306,
            "description": "I'll take this time to do some targeted marketing. The swing states have a unique resistance to partisan subservience, at least on the national level. They may be more willing to hear me out."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6136,
        "fields": {
            "question": 1306,
            "description": "I'm not sure... I've never really had \"free\" time before. What exactly can I- You know... now that I think about it, while I'm here there is one place I'd like to visit."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6137,
        "fields": {
            "question": 1307,
            "description": "Trying to influence Donald Trump is a fool's errand, everyone who's ever worked with him will tell you that. No matter what I say to him, he'll always go back to what's worked for him for the last 8 years. It's better to spend my efforts elsewhere."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6138,
        "fields": {
            "question": 1307,
            "description": "You can only deal with Trump when you're on his level. I'll call Trump out on his divisive rhetoric and say how that if he were a real leader, he'd want to be a leader for ALL Americans!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6140,
        "fields": {
            "question": 1307,
            "description": "Donald may play the part of an egomaniacal strongman, but I know that deep in his heart that he genuinely cares about this country... somewhere... How about I get into his dreams and have a one-on-one conversation with him, we'll see how it goes."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6141,
        "fields": {
            "question": 1308,
            "description": "\"Unprecedented experience\", doesn't that just sum up this country's relationship with Donald Trump in a nutshell? That man's had everyone on a roller-coaster ever since he came down that escalator. This is just the latest episode. Let's save the hysterics for when a verdict is actually handed down."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6142,
        "fields": {
            "question": 1308,
            "description": "Much of the tension coming from this event is caused by the people's ever decreasing faith in the legal system. And this decrease is faith is coming from one place, Donald Trump's mouth. If I give him a little push, he'll drop this pretense of a \"rigged trial\" and people can calm down a little."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6143,
        "fields": {
            "question": 1308,
            "description": "This is a trial. A legal procedure. One that we have to let proceed without interference. I want to encourage everyone to let the parties involved do their jobs, and trust that a well-reasoned decision is made."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6144,
        "fields": {
            "question": 1309,
            "description": "The Judiciary Branch serves to evaluate constitutionality, not bend to popular demand. The Supreme Court have made their decision, and that decision must be respected."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6145,
        "fields": {
            "question": 1309,
            "description": "The people who are opposing this decision are those who would gladly shred the Bill of Rights if it meant Donald Trump would never be President again. Giving states the ability to take candidates away from their voters is a dangerous precedent to set and the fact they can't see that is worthy of open condemnation."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6146,
        "fields": {
            "question": 1309,
            "description": "I would like to applaud the Supreme Court for coming to such a decisive ruling in a short amount of time. This case started under three months ago and held a great deal of significance for how this election would go, so to see it resolved so quickly is wonderful to see."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6153,
        "fields": {
            "question": 1311,
            "description": "Well... guess that's it. A whole presidency cut short by a bad debate performance, incredible. With Biden's sudden transition into a lame duck President, I would like to encourage everyone to be kinder to him for the remainder of his term. He's served this nation for a very long time, let's give him a graceful exit."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6154,
        "fields": {
            "question": 1311,
            "description": "We just witnessed the will of 14,465,519 Americans be overturned through peer pressure, I'm at a loss for words. We know Biden didn't want to drop out, and yet he's been strongarmed into it. How am I expected to convince anyone to trust their government after a stunt like this?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6155,
        "fields": {
            "question": 1311,
            "description": "This isn't an unprecedented decision, remember 1968? Granted, this is a LOT more last minute than 1968, but still not unprecedented. We must respect President Biden's choice and wish for the quick selection of a new candidate, so this election doesn't get any more chaotic."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6156,
        "fields": {
            "question": 1312,
            "description": "There are several protest groups making their way to this convention, and I'd like to make sure things stay civil. Seriously, this election has had enough parallels to 1968."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6157,
        "fields": {
            "question": 1312,
            "description": "President Biden will be the most powerful voice there; it only makes sense that I use it. What's more powerful than a call for unity from the incumbent President?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6158,
        "fields": {
            "question": 1312,
            "description": "Vice President Harris will be the center of attention at the event, it makes sense to influence her. Words of unity from the potential next President will do a lot to decrease tension."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6159,
        "fields": {
            "question": 1312,
            "description": "With this many people watching I can't afford to hold back, I need to use my strongest option. There is only one figure there that can honestly said to be beloved by large part of the country, Barack Obama."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6160,
        "fields": {
            "question": 1313,
            "description": "Tim Walz is the wild card here. Before today, most of the country have never heard of him. If I focus my efforts into influencing him, I can shape his public image from the start and hopefully push him away from being a purely partisan figure."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6162,
        "fields": {
            "question": 1313,
            "description": "Kamala Harris has the potential to be the breath of fresh air this election needs. This whole campaign has been built up as the rematch between Trump and Biden, but with a new candidate the whole tone can change. You know, assuming Kamala goes along with it."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6163,
        "fields": {
            "question": 1313,
            "description": "Harris is going to be an issue; her approval rating is lower than Biden's! I'm not sure what I can do, but I need to improve her PR. How can she unite the people if they don't even like her?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6164,
        "fields": {
            "question": 1314,
            "description": "If RFK Jr. hurled himself of a cliff, these people would fistfight each other over who gets to be the second one to hit the rocks. They're insane. They'll probably still vote for him even though he's dropped out. I won't waste my time trying to court these people, I'd have better luck turning Trump into a Maoist."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6167,
        "fields": {
            "question": 1314,
            "description": "The prevalence of Kennedy's candidacy shows the sheer amount of people unsatisfied with the state of national politics. Millions of people who are disgusted by the same patterns that I am trying to combat. Even if not all of them listen to me, I'd be foolish not to try and reach out."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6168,
        "fields": {
            "question": 1315,
            "description": "Apparently a lot of Democrats haven't realized that the primaries ended back on June 8th. Democratic voters across the nation have made their choice and that choice was for Joe Biden to be their nominee. That choice must be respected."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6169,
        "fields": {
            "question": 1315,
            "description": "People have been voicing concerns about Biden's age for years, and they only decide that he's too old now? FOUR MONTHS BEFORE ELECTION DAY!? It's a little late to be showing buyer's remorse! "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6170,
        "fields": {
            "question": 1315,
            "description": "This is way too sudden! Um... On one hand, there are legitimate concerns about Biden's age... but on the other hand, this is way too late in the race... on the other other hand..."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6172,
        "fields": {
            "question": 1316,
            "description": "The Supreme Court were tasked with determining whether or not Presidents have any immunity under the Constitution, they have fulfilled that task. They did not grant this immunity, merely clarifying it. If there is a desire for limits of the power of the President, then those upset with this decision can go through Congress to create these limits."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6173,
        "fields": {
            "question": 1316,
            "description": "Anyone with sense can see that this was a partisan decision cut right down party lines. Not even our judiciary is free from the poison of partisan politics. I'll make a general statement about this, with vague ties to the recent decision."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6175,
        "fields": {
            "question": 1316,
            "description": "The Court's decision has created a dangerous precedent for this country. Every President past and future has been given de facto freedom from consequence. It's only a matter of time before someone in the office seeks to abuse this freedom. I condemn this decision in the strongest terms."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6176,
        "fields": {
            "question": 1317,
            "description": "Millions of people watch the State of the Union Address, but do any of them really care about it? Chances are most of the things said in this Address will end up forgotten by the end of the weekend."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6177,
        "fields": {
            "question": 1317,
            "description": "Maybe I can influence President Biden to make a few tweaks to his speech. Have him add a few calls for unity in and have him take a more delicate approach to some of the more divisive issues."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6178,
        "fields": {
            "question": 1317,
            "description": "Instead of the Address itself, maybe I'll focus on the Republican's response to it. Sen. Britt's the one delivering it, right? I'll nudge her to tone down whatever speech she cooked up."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6180,
        "fields": {
            "question": 1318,
            "description": "Millions of people will be watching this broadcast, and I need to make use of all this attention. I'll run advertising on this debate, making sure the people get a dose of unity to combat the partisan bile that will inevitably unfold on their screens."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6181,
        "fields": {
            "question": 1318,
            "description": "I need to get Trump under control, ever since his conviction he's been worse than usual. Even if I can get him down to an 8/10 on the MAGA scale, I'll take it."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6182,
        "fields": {
            "question": 1318,
            "description": "President Biden has marketed himself as the candidate of dignity and manners as opposed to Trump, now would be a good time him to act the part. I'll push him to stand above the partisanship, be the unifier he says he is."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6183,
        "fields": {
            "question": 1318,
            "description": "The moderators are the ones in charge, and they need to do their jobs. With how tense everyone is, the last thing we all need is those two talking over each other, going over time, or any other childish tactic to one-up each other."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6184,
        "fields": {
            "question": 1319,
            "description": "Oh boy."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6188,
        "fields": {
            "question": 1320,
            "description": "248 years already? Wow... It's been a long journey, and it hasn't always been easy, but I'm so grateful to have made it this far. My people have fought so hard for me over my life and that's why I'm fighting so hard for them. To remind them that no matter how dark things may seem, the future is still bright."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6192,
        "fields": {
            "question": 1321,
            "description": "It's terrible to say this... but I can use this event to my advantage. The American people just received the clearest example possible about how the polarization in this land has gotten out of control. During this moment of vulnerability I need to hammer it in, WE NEED TO STOP THIS!!!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6193,
        "fields": {
            "question": 1321,
            "description": "This is everything I feared... All the rhetoric, all the blame, all the partisanship, I knew it would end up here eventually. The politicians planted these seeds, and now they're starting to sprout. This is their fault, and I won't let them forget it."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6194,
        "fields": {
            "question": 1321,
            "description": "I can see the faceless masses of the Internet... I see people joking... I see people wishing the bullet struck... Partisanship was their first instinct, even here... A man died in this incident... And they- I- I-"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6195,
        "fields": {
            "question": 1321,
            "description": "Abraham... James... William... John... and now Donald almost joined them. If he hadn't turned his head... This country... I need a moment."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6196,
        "fields": {
            "question": 1322,
            "description": "If I make a move it has to be one that is woven into the whole convention. I'll see if I can influence the party's platform for this year to include a call for unity. After what happened to Trump, surely it can't be that hard."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6198,
        "fields": {
            "question": 1322,
            "description": "J. D. Vance, Trump's new running mate, they seem to be setting him up as a potential leader of the party once Trump is gone. If I influence him, I have the potential to influence not just this convention, but the direction of this party for years to come."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6199,
        "fields": {
            "question": 1322,
            "description": "Donald Trump is the axle that this entire convention is spinning around, if I want to make the biggest impact, I need to aim for him. He's just gone through an assassination attempt, he must be willing to call for a decrease in tension now, right?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6200,
        "fields": {
            "question": 1323,
            "description": "I'm in a tricky position here. With the Biden-Trump debate I knew what to expect because I'd seen them interact before, but with Harris and Trump I don't know what will happen. I'll just put my effort into making sure the moderators do their jobs."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6201,
        "fields": {
            "question": 1323,
            "description": "I'm in a tricky position here. With the Biden-Trump debate I knew what to expect because I'd seen them interact before, but with Harris and Trump I don't know what will happen. I'll try to get both of them to behave, if I can."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6202,
        "fields": {
            "question": 1323,
            "description": "I'm in a tricky position here. With the Biden-Trump debate I knew what to expect because I'd seen them interact before, but with Harris and Trump I don't know what will happen. Maybe it's best if I just stay out of this."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6204,
        "fields": {
            "question": 1324,
            "description": "I'll simply express my gratitude that former President Trump is uninjured. I think we're all thankful that this wasn't a repeat of the horrid events in Butler."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6206,
        "fields": {
            "question": 1324,
            "description": "There were no injuries and no deaths, meaning there's a high chance that this incident won't be nearly as talked about as the last one. If I say anything I'll just draw attention to it and create tension. No comment."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6207,
        "fields": {
            "question": 1324,
            "description": "I CAN'T BELIEVE THIS!!!! A COPYCAT SHOOTING!? What if he was able to get a shot off!? What if there are other copycat shooters waiting to take their shot!? What if-"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6208,
        "fields": {
            "question": 1325,
            "description": "President Biden has already made unity a key point of both his administration and his campaign. I'm not going to take any risk interfering when we're already on the same side."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 6209,
        "fields": {
            "question": 1325,
            "description": "Joe Biden is an... interesting piece to have on the board. An older man is easier to influence, especially one who prides himself on living up to the legacy of America's past glory. I'll start influencing him slowly, building up bit by bit, until his message of unity will be a little more to my taste."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 42533,
        "fields": {
            "question": 42513,
            "description": "Let's be honest, do people really pay attention to the vice-presidential debates? Trump and Harris are the main focus of this campaign, not their running mates. I'll just ignore this."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 42534,
        "fields": {
            "question": 42514,
            "description": "I am trying to return unity to this country, to ALL of it. I will ramp up my messaging across all 50 states and DC. It'll take a lot out of me, but hopefully it will be worth it."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 42548,
        "fields": {
            "question": 42513,
            "description": "Vance is the one that will most likely cause trouble, I'll focus my efforts on him. As long as I can keep him from saying that immigrants are eating people's pet, I'll consider that a win."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 42549,
        "fields": {
            "question": 42513,
            "description": "Walz is still the relative newcomer to this race, this will be the first time many Americans see him speak for an extended period of time. I'll try and make sure he doesn't go on the attack."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 42553,
        "fields": {
            "question": 42514,
            "description": "With just two days left I need to maximize the amount of impact I can make. I'll ramp up my messaging in specifically non-partisan areas, where it will have a higher chance of being listened to."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 42554,
        "fields": {
            "question": 42514,
            "description": "This entire endeavor has been a campaign against partisanship, so the final move will be an all-out assault against that concept. I'll ramp up my messaging in the most partisan areas of the country, we'll see if I can break the barrier."
        }
    }
]

campaignTrail_temp.states_json = [
    {
        "model": "campaign_trail.state",
        "pk": 1100,
        "fields": {
            "name": "Alabama",
            "abbr": "AL",
            "electoral_votes": 9,
            "popular_votes": 3682369,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1101,
        "fields": {
            "name": "Alaska",
            "abbr": "AK",
            "electoral_votes": 3,
            "popular_votes": 597438,
            "poll_closing_time": 420,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1102,
        "fields": {
            "name": "Arizona",
            "abbr": "AZ",
            "electoral_votes": 11,
            "popular_votes": 4096260,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1103,
        "fields": {
            "name": "Arkansas",
            "abbr": "AR",
            "electoral_votes": 6,
            "popular_votes": 1565093,
            "poll_closing_time": 150,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1104,
        "fields": {
            "name": "California",
            "abbr": "CA",
            "electoral_votes": 54,
            "popular_votes": 21742198,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1105,
        "fields": {
            "name": "Colorado",
            "abbr": "CO",
            "electoral_votes": 10,
            "popular_votes": 3636192,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1106,
        "fields": {
            "name": "Connecticut",
            "abbr": "CT",
            "electoral_votes": 7,
            "popular_votes": 2317890,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1107,
        "fields": {
            "name": "Delaware",
            "abbr": "DE",
            "electoral_votes": 3,
            "popular_votes": 745823,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1108,
        "fields": {
            "name": "Florida",
            "abbr": "FL",
            "electoral_votes": 30,
            "popular_votes": 13852098,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1109,
        "fields": {
            "name": "Georgia",
            "abbr": "GA",
            "electoral_votes": 16,
            "popular_votes": 7392348,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1110,
        "fields": {
            "name": "Hawaii",
            "abbr": "HI",
            "electoral_votes": 4,
            "popular_votes": 842026,
            "poll_closing_time": 360,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1111,
        "fields": {
            "name": "Idaho",
            "abbr": "ID",
            "electoral_votes": 4,
            "popular_votes": 982736,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1112,
        "fields": {
            "name": "Illinois",
            "abbr": "IL",
            "electoral_votes": 19,
            "popular_votes": 7905216,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1113,
        "fields": {
            "name": "Indiana",
            "abbr": "IN",
            "electoral_votes": 11,
            "popular_votes": 4687023,
            "poll_closing_time": 0,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1114,
        "fields": {
            "name": "Iowa",
            "abbr": "IA",
            "electoral_votes": 6,
            "popular_votes": 2118973,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1115,
        "fields": {
            "name": "Kansas",
            "abbr": "KS",
            "electoral_votes": 6,
            "popular_votes": 1827563,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1116,
        "fields": {
            "name": "Kentucky",
            "abbr": "KY",
            "electoral_votes": 8,
            "popular_votes": 3397265,
            "poll_closing_time": 0,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1117,
        "fields": {
            "name": "Louisiana",
            "abbr": "LA",
            "electoral_votes": 8,
            "popular_votes": 2934126,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1118,
        "fields": {
            "name": "Maine",
            "abbr": "ME",
            "electoral_votes": 2,
            "popular_votes": 1003894,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1119,
        "fields": {
            "name": "Maryland",
            "abbr": "MD",
            "electoral_votes": 10,
            "popular_votes": 4092748,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1120,
        "fields": {
            "name": "Massachusetts",
            "abbr": "MA",
            "electoral_votes": 11,
            "popular_votes": 4786142,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1121,
        "fields": {
            "name": "Michigan",
            "abbr": "MI",
            "electoral_votes": 15,
            "popular_votes": 8032955,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1122,
        "fields": {
            "name": "Minnesota",
            "abbr": "MN",
            "electoral_votes": 10,
            "popular_votes": 4022197,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1123,
        "fields": {
            "name": "Mississippi",
            "abbr": "MS",
            "electoral_votes": 6,
            "popular_votes": 2064811,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1124,
        "fields": {
            "name": "Missouri",
            "abbr": "MO",
            "electoral_votes": 10,
            "popular_votes": 4362907,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1125,
        "fields": {
            "name": "Montana",
            "abbr": "MT",
            "electoral_votes": 4,
            "popular_votes": 827006,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1126,
        "fields": {
            "name": "Nebraska",
            "abbr": "NE",
            "electoral_votes": 2,
            "popular_votes": 1167923,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1127,
        "fields": {
            "name": "Nevada",
            "abbr": "NV",
            "electoral_votes": 6,
            "popular_votes": 2063853,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1128,
        "fields": {
            "name": "New Hampshire",
            "abbr": "NH",
            "electoral_votes": 4,
            "popular_votes": 983767,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1129,
        "fields": {
            "name": "New Jersey",
            "abbr": "NJ",
            "electoral_votes": 14,
            "popular_votes": 6342874,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1130,
        "fields": {
            "name": "New Mexico",
            "abbr": "NM",
            "electoral_votes": 5,
            "popular_votes": 1275975,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1131,
        "fields": {
            "name": "New York",
            "abbr": "NY",
            "electoral_votes": 28,
            "popular_votes": 12799051,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1132,
        "fields": {
            "name": "North Carolina",
            "abbr": "NC",
            "electoral_votes": 16,
            "popular_votes": 7244901,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1133,
        "fields": {
            "name": "North Dakota",
            "abbr": "ND",
            "electoral_votes": 3,
            "popular_votes": 583117,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1134,
        "fields": {
            "name": "Ohio",
            "abbr": "OH",
            "electoral_votes": 17,
            "popular_votes": 8093568,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1135,
        "fields": {
            "name": "Oklahoma",
            "abbr": "OK",
            "electoral_votes": 7,
            "popular_votes": 2163877,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1136,
        "fields": {
            "name": "Oregon",
            "abbr": "OR",
            "electoral_votes": 8,
            "popular_votes": 2871023,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1137,
        "fields": {
            "name": "Pennsylvania",
            "abbr": "PA",
            "electoral_votes": 19,
            "popular_votes": 8618902,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1138,
        "fields": {
            "name": "Rhode Island",
            "abbr": "RI",
            "electoral_votes": 4,
            "popular_votes": 709218,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1139,
        "fields": {
            "name": "South Carolina",
            "abbr": "SC",
            "electoral_votes": 9,
            "popular_votes": 3471903,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1140,
        "fields": {
            "name": "South Dakota",
            "abbr": "SD",
            "electoral_votes": 3,
            "popular_votes": 570985,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1141,
        "fields": {
            "name": "Tennessee",
            "abbr": "TN",
            "electoral_votes": 11,
            "popular_votes": 4152098,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1142,
        "fields": {
            "name": "Texas",
            "abbr": "TX",
            "electoral_votes": 40,
            "popular_votes": 16978020,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1143,
        "fields": {
            "name": "Utah",
            "abbr": "UT",
            "electoral_votes": 6,
            "popular_votes": 1799432,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1144,
        "fields": {
            "name": "Vermont",
            "abbr": "VT",
            "electoral_votes": 3,
            "popular_votes": 465982,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1145,
        "fields": {
            "name": "Virginia",
            "abbr": "VA",
            "electoral_votes": 13,
            "popular_votes": 5701783,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1146,
        "fields": {
            "name": "Washington",
            "abbr": "WA",
            "electoral_votes": 12,
            "popular_votes": 4962004,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1147,
        "fields": {
            "name": "Washington DC",
            "abbr": "DC",
            "electoral_votes": 3,
            "popular_votes": 483993,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1148,
        "fields": {
            "name": "West Virginia",
            "abbr": "WV",
            "electoral_votes": 4,
            "popular_votes": 1043986,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1149,
        "fields": {
            "name": "Wisconsin",
            "abbr": "WI",
            "electoral_votes": 10,
            "popular_votes": 4603364,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1150,
        "fields": {
            "name": "Wyoming",
            "abbr": "WY",
            "electoral_votes": 3,
            "popular_votes": 289347,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1151,
        "fields": {
            "name": "Maine-1",
            "abbr": "M1",
            "electoral_votes": 1,
            "popular_votes": 999,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1152,
        "fields": {
            "name": "Maine-2",
            "abbr": "M2",
            "electoral_votes": 1,
            "popular_votes": 999,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1153,
        "fields": {
            "name": "Nebraska-1",
            "abbr": "N1",
            "electoral_votes": 1,
            "popular_votes": 999,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1154,
        "fields": {
            "name": "Nebraska-2",
            "abbr": "N2",
            "electoral_votes": 1,
            "popular_votes": 999,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1155,
        "fields": {
            "name": "Nebraska-3",
            "abbr": "N3",
            "electoral_votes": 1,
            "popular_votes": 999,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    }
]

campaignTrail_temp.issues_json = [
    {
        "model": "campaign_trail.issue",
        "pk": 110,
        "fields": {
            "name": "Partisanship",
            "description": 0,
            "stance_1": "Red Dominant",
            "stance_desc_1": 0,
            "stance_2": "Solid Red",
            "stance_desc_2": 0,
            "stance_3": "Tilt Red",
            "stance_desc_3": 0,
            "stance_4": "Swing State",
            "stance_desc_4": 0,
            "stance_5": "Tilt Blue",
            "stance_desc_5": 0,
            "stance_6": "Solid Blue",
            "stance_desc_6": 0,
            "stance_7": "Blue Dominant",
            "stance_desc_7": 0,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 111,
        "fields": {
            "name": "Radicalism",
            "description": 0,
            "stance_1": "Pat Buchanan",
            "stance_desc_1": 0,
            "stance_2": "W. Bush",
            "stance_desc_2": 0,
            "stance_3": "McCain",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Joe Manchin",
            "stance_desc_5": 0,
            "stance_6": "Clinton",
            "stance_desc_6": 0,
            "stance_7": "AOC",
            "stance_desc_7": 0,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 112,
        "fields": {
            "name": "Disillusion",
            "description": 0,
            "stance_1": "Without Hope",
            "stance_desc_1": 0,
            "stance_2": "High",
            "stance_desc_2": 0,
            "stance_3": "Rising",
            "stance_desc_3": 0,
            "stance_4": "Tolerable",
            "stance_desc_4": 0,
            "stance_5": "Dropping",
            "stance_desc_5": 0,
            "stance_6": "Low",
            "stance_desc_6": 0,
            "stance_7": "Optimistic",
            "stance_desc_7": 0,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 113,
        "fields": {
            "name": "Fear",
            "description": 0,
            "stance_1": "Apocalyptic",
            "stance_desc_1": 0,
            "stance_2": "High",
            "stance_desc_2": 0,
            "stance_3": "Rising",
            "stance_desc_3": 0,
            "stance_4": "Comfortable",
            "stance_desc_4": 0,
            "stance_5": "Low",
            "stance_desc_5": 0,
            "stance_6": "Confident",
            "stance_desc_6": 0,
            "stance_7": "Fearless",
            "stance_desc_7": 0,
            "election": 20
        }
    }
]

campaignTrail_temp.state_issue_score_json = [
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3500,
        "fields": {
            "state": 1100,
            "issue": 110,
            "state_issue_score": -0.8342,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3501,
        "fields": {
            "state": 1100,
            "issue": 111,
            "state_issue_score": -0.6981,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3502,
        "fields": {
            "state": 1100,
            "issue": 112,
            "state_issue_score": -0.7188,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3503,
        "fields": {
            "state": 1100,
            "issue": 113,
            "state_issue_score": -0.6741,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3505,
        "fields": {
            "state": 1101,
            "issue": 110,
            "state_issue_score": -0.6322,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3506,
        "fields": {
            "state": 1101,
            "issue": 111,
            "state_issue_score": -0.2925,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3507,
        "fields": {
            "state": 1101,
            "issue": 112,
            "state_issue_score": -0.0197,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3508,
        "fields": {
            "state": 1101,
            "issue": 113,
            "state_issue_score": -0.2925,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3510,
        "fields": {
            "state": 1102,
            "issue": 110,
            "state_issue_score": 0.2101,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3511,
        "fields": {
            "state": 1102,
            "issue": 111,
            "state_issue_score": 0.0137,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3512,
        "fields": {
            "state": 1102,
            "issue": 112,
            "state_issue_score": -0.075,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3513,
        "fields": {
            "state": 1102,
            "issue": 113,
            "state_issue_score": -0.175,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3515,
        "fields": {
            "state": 1103,
            "issue": 110,
            "state_issue_score": -0.7905,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3516,
        "fields": {
            "state": 1103,
            "issue": 111,
            "state_issue_score": -0.6821,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3517,
        "fields": {
            "state": 1103,
            "issue": 112,
            "state_issue_score": -0.6972,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3518,
        "fields": {
            "state": 1103,
            "issue": 113,
            "state_issue_score": -0.6433,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3520,
        "fields": {
            "state": 1104,
            "issue": 110,
            "state_issue_score": 0.8933,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3521,
        "fields": {
            "state": 1104,
            "issue": 111,
            "state_issue_score": 0.7853,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3522,
        "fields": {
            "state": 1104,
            "issue": 112,
            "state_issue_score": -0.9114,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3523,
        "fields": {
            "state": 1104,
            "issue": 113,
            "state_issue_score": -0.8739,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3525,
        "fields": {
            "state": 1105,
            "issue": 110,
            "state_issue_score": 0.7659,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3526,
        "fields": {
            "state": 1105,
            "issue": 111,
            "state_issue_score": 0.6822,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3527,
        "fields": {
            "state": 1105,
            "issue": 112,
            "state_issue_score": -0.4966,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3528,
        "fields": {
            "state": 1105,
            "issue": 113,
            "state_issue_score": -0.227,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3530,
        "fields": {
            "state": 1106,
            "issue": 110,
            "state_issue_score": 0.7143,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3531,
        "fields": {
            "state": 1106,
            "issue": 111,
            "state_issue_score": 0.6153,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3532,
        "fields": {
            "state": 1106,
            "issue": 112,
            "state_issue_score": -0.5022,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3533,
        "fields": {
            "state": 1106,
            "issue": 113,
            "state_issue_score": -0.315,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3535,
        "fields": {
            "state": 1107,
            "issue": 110,
            "state_issue_score": 0.7782,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3536,
        "fields": {
            "state": 1107,
            "issue": 111,
            "state_issue_score": 0.5177,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3537,
        "fields": {
            "state": 1107,
            "issue": 112,
            "state_issue_score": -0.3988,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3538,
        "fields": {
            "state": 1107,
            "issue": 113,
            "state_issue_score": -0.303,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3540,
        "fields": {
            "state": 1108,
            "issue": 110,
            "state_issue_score": -0.6862,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3541,
        "fields": {
            "state": 1108,
            "issue": 111,
            "state_issue_score": -0.6782,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3542,
        "fields": {
            "state": 1108,
            "issue": 112,
            "state_issue_score": -0.6011,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3543,
        "fields": {
            "state": 1108,
            "issue": 113,
            "state_issue_score": -0.4977,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3545,
        "fields": {
            "state": 1109,
            "issue": 110,
            "state_issue_score": 0.0145,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3546,
        "fields": {
            "state": 1109,
            "issue": 111,
            "state_issue_score": 0.079,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3547,
        "fields": {
            "state": 1109,
            "issue": 112,
            "state_issue_score": -0.5832,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3548,
        "fields": {
            "state": 1109,
            "issue": 113,
            "state_issue_score": -0.4079,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3550,
        "fields": {
            "state": 1110,
            "issue": 110,
            "state_issue_score": 0.8922,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3551,
        "fields": {
            "state": 1110,
            "issue": 111,
            "state_issue_score": 0.6543,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3552,
        "fields": {
            "state": 1110,
            "issue": 112,
            "state_issue_score": -0.7903,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3553,
        "fields": {
            "state": 1110,
            "issue": 113,
            "state_issue_score": -0.7395,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3555,
        "fields": {
            "state": 1111,
            "issue": 110,
            "state_issue_score": -0.7231,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3556,
        "fields": {
            "state": 1111,
            "issue": 111,
            "state_issue_score": -0.5433,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3557,
        "fields": {
            "state": 1111,
            "issue": 112,
            "state_issue_score": -0.255,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3558,
        "fields": {
            "state": 1111,
            "issue": 113,
            "state_issue_score": -0.455,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3560,
        "fields": {
            "state": 1112,
            "issue": 110,
            "state_issue_score": 0.7307,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3561,
        "fields": {
            "state": 1112,
            "issue": 111,
            "state_issue_score": 0.8901,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3562,
        "fields": {
            "state": 1112,
            "issue": 112,
            "state_issue_score": -0.6899,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3563,
        "fields": {
            "state": 1112,
            "issue": 113,
            "state_issue_score": -0.8285,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3565,
        "fields": {
            "state": 1113,
            "issue": 110,
            "state_issue_score": -0.7209,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3566,
        "fields": {
            "state": 1113,
            "issue": 111,
            "state_issue_score": -0.6332,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3567,
        "fields": {
            "state": 1113,
            "issue": 112,
            "state_issue_score": -0.3872,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3568,
        "fields": {
            "state": 1113,
            "issue": 113,
            "state_issue_score": -0.533,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3570,
        "fields": {
            "state": 1114,
            "issue": 110,
            "state_issue_score": -0.5907,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3571,
        "fields": {
            "state": 1114,
            "issue": 111,
            "state_issue_score": -0.5089,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3572,
        "fields": {
            "state": 1114,
            "issue": 112,
            "state_issue_score": -0.452,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3573,
        "fields": {
            "state": 1114,
            "issue": 113,
            "state_issue_score": -0.4252,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3575,
        "fields": {
            "state": 1115,
            "issue": 110,
            "state_issue_score": -0.7124,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3576,
        "fields": {
            "state": 1115,
            "issue": 111,
            "state_issue_score": -0.313,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3577,
        "fields": {
            "state": 1115,
            "issue": 112,
            "state_issue_score": -0.013,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3578,
        "fields": {
            "state": 1115,
            "issue": 113,
            "state_issue_score": -0.1313,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3580,
        "fields": {
            "state": 1116,
            "issue": 110,
            "state_issue_score": -0.8903,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3581,
        "fields": {
            "state": 1116,
            "issue": 111,
            "state_issue_score": -0.4906,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3582,
        "fields": {
            "state": 1116,
            "issue": 112,
            "state_issue_score": -0.549,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3583,
        "fields": {
            "state": 1116,
            "issue": 113,
            "state_issue_score": -0.7349,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3585,
        "fields": {
            "state": 1117,
            "issue": 110,
            "state_issue_score": -0.8102,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3586,
        "fields": {
            "state": 1117,
            "issue": 111,
            "state_issue_score": -0.7653,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3587,
        "fields": {
            "state": 1117,
            "issue": 112,
            "state_issue_score": -0.7134,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3588,
        "fields": {
            "state": 1117,
            "issue": 113,
            "state_issue_score": -0.8727,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3590,
        "fields": {
            "state": 1118,
            "issue": 110,
            "state_issue_score": 0.6784,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3591,
        "fields": {
            "state": 1118,
            "issue": 111,
            "state_issue_score": 0.4015,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3592,
        "fields": {
            "state": 1118,
            "issue": 112,
            "state_issue_score": -0.2915,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3593,
        "fields": {
            "state": 1118,
            "issue": 113,
            "state_issue_score": -0.2015,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3595,
        "fields": {
            "state": 1119,
            "issue": 110,
            "state_issue_score": 0.7613,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3596,
        "fields": {
            "state": 1119,
            "issue": 111,
            "state_issue_score": 0.325,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3597,
        "fields": {
            "state": 1119,
            "issue": 112,
            "state_issue_score": -0.2825,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3598,
        "fields": {
            "state": 1119,
            "issue": 113,
            "state_issue_score": -0.425,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3600,
        "fields": {
            "state": 1120,
            "issue": 110,
            "state_issue_score": 0.7615,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3601,
        "fields": {
            "state": 1120,
            "issue": 111,
            "state_issue_score": 0.525,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3602,
        "fields": {
            "state": 1120,
            "issue": 112,
            "state_issue_score": -0.425,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3603,
        "fields": {
            "state": 1120,
            "issue": 113,
            "state_issue_score": -0.425,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3605,
        "fields": {
            "state": 1121,
            "issue": 110,
            "state_issue_score": -0.1172,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3606,
        "fields": {
            "state": 1121,
            "issue": 111,
            "state_issue_score": -0.0131,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3607,
        "fields": {
            "state": 1121,
            "issue": 112,
            "state_issue_score": -0.2985,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3608,
        "fields": {
            "state": 1121,
            "issue": 113,
            "state_issue_score": -0.5105,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3610,
        "fields": {
            "state": 1122,
            "issue": 110,
            "state_issue_score": 0.5907,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3611,
        "fields": {
            "state": 1122,
            "issue": 111,
            "state_issue_score": 0.1733,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3612,
        "fields": {
            "state": 1122,
            "issue": 112,
            "state_issue_score": -0.1799,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3613,
        "fields": {
            "state": 1122,
            "issue": 113,
            "state_issue_score": -0.3917,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3615,
        "fields": {
            "state": 1123,
            "issue": 110,
            "state_issue_score": -0.8195,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3616,
        "fields": {
            "state": 1123,
            "issue": 111,
            "state_issue_score": -0.8352,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3617,
        "fields": {
            "state": 1123,
            "issue": 112,
            "state_issue_score": -0.7235,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3618,
        "fields": {
            "state": 1123,
            "issue": 113,
            "state_issue_score": -0.7235,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3620,
        "fields": {
            "state": 1124,
            "issue": 110,
            "state_issue_score": -0.7751,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3621,
        "fields": {
            "state": 1124,
            "issue": 111,
            "state_issue_score": -0.6793,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3622,
        "fields": {
            "state": 1124,
            "issue": 112,
            "state_issue_score": -0.5979,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3623,
        "fields": {
            "state": 1124,
            "issue": 113,
            "state_issue_score": -0.5279,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3625,
        "fields": {
            "state": 1125,
            "issue": 110,
            "state_issue_score": -0.7563,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3626,
        "fields": {
            "state": 1125,
            "issue": 111,
            "state_issue_score": -0.3622,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3627,
        "fields": {
            "state": 1125,
            "issue": 112,
            "state_issue_score": -0.0136,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3628,
        "fields": {
            "state": 1125,
            "issue": 113,
            "state_issue_score": -0.1836,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3630,
        "fields": {
            "state": 1126,
            "issue": 110,
            "state_issue_score": -0.8322,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3631,
        "fields": {
            "state": 1126,
            "issue": 111,
            "state_issue_score": -0.1688,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3632,
        "fields": {
            "state": 1126,
            "issue": 112,
            "state_issue_score": -0.0136,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3633,
        "fields": {
            "state": 1126,
            "issue": 113,
            "state_issue_score": -0.1836,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3635,
        "fields": {
            "state": 1127,
            "issue": 110,
            "state_issue_score": 0.1782,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3636,
        "fields": {
            "state": 1127,
            "issue": 111,
            "state_issue_score": 0.078,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3637,
        "fields": {
            "state": 1127,
            "issue": 112,
            "state_issue_score": -0.1178,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3638,
        "fields": {
            "state": 1127,
            "issue": 113,
            "state_issue_score": -0.2078,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3640,
        "fields": {
            "state": 1128,
            "issue": 110,
            "state_issue_score": 0.5733,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3641,
        "fields": {
            "state": 1128,
            "issue": 111,
            "state_issue_score": 0.326,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3642,
        "fields": {
            "state": 1128,
            "issue": 112,
            "state_issue_score": -0.1205,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3643,
        "fields": {
            "state": 1128,
            "issue": 113,
            "state_issue_score": -0.175,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3645,
        "fields": {
            "state": 1129,
            "issue": 110,
            "state_issue_score": 0.7047,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3646,
        "fields": {
            "state": 1129,
            "issue": 111,
            "state_issue_score": 0.2767,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3647,
        "fields": {
            "state": 1129,
            "issue": 112,
            "state_issue_score": -0.2767,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3648,
        "fields": {
            "state": 1129,
            "issue": 113,
            "state_issue_score": -0.2767,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3650,
        "fields": {
            "state": 1130,
            "issue": 110,
            "state_issue_score": 0.6132,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3651,
        "fields": {
            "state": 1130,
            "issue": 111,
            "state_issue_score": 0.2267,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3652,
        "fields": {
            "state": 1130,
            "issue": 112,
            "state_issue_score": -0.2267,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3653,
        "fields": {
            "state": 1130,
            "issue": 113,
            "state_issue_score": -0.4267,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3655,
        "fields": {
            "state": 1131,
            "issue": 110,
            "state_issue_score": 0.9016,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3656,
        "fields": {
            "state": 1131,
            "issue": 111,
            "state_issue_score": 0.8998,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3657,
        "fields": {
            "state": 1131,
            "issue": 112,
            "state_issue_score": -0.8034,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3658,
        "fields": {
            "state": 1131,
            "issue": 113,
            "state_issue_score": -0.8334,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3660,
        "fields": {
            "state": 1132,
            "issue": 110,
            "state_issue_score": -0.1671,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3661,
        "fields": {
            "state": 1132,
            "issue": 111,
            "state_issue_score": -0.1248,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3662,
        "fields": {
            "state": 1132,
            "issue": 112,
            "state_issue_score": -0.5124,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3663,
        "fields": {
            "state": 1132,
            "issue": 113,
            "state_issue_score": -0.5126,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3665,
        "fields": {
            "state": 1133,
            "issue": 110,
            "state_issue_score": -0.8101,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3666,
        "fields": {
            "state": 1133,
            "issue": 111,
            "state_issue_score": -0.3982,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3667,
        "fields": {
            "state": 1133,
            "issue": 112,
            "state_issue_score": -0.0147,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3668,
        "fields": {
            "state": 1133,
            "issue": 113,
            "state_issue_score": -0.0947,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3670,
        "fields": {
            "state": 1134,
            "issue": 110,
            "state_issue_score": -0.6032,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3671,
        "fields": {
            "state": 1134,
            "issue": 111,
            "state_issue_score": -0.3866,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3672,
        "fields": {
            "state": 1134,
            "issue": 112,
            "state_issue_score": -0.4375,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3673,
        "fields": {
            "state": 1134,
            "issue": 113,
            "state_issue_score": -0.4375,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3675,
        "fields": {
            "state": 1135,
            "issue": 110,
            "state_issue_score": -0.8644,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3676,
        "fields": {
            "state": 1135,
            "issue": 111,
            "state_issue_score": -0.565,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3677,
        "fields": {
            "state": 1135,
            "issue": 112,
            "state_issue_score": -0.5465,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3678,
        "fields": {
            "state": 1135,
            "issue": 113,
            "state_issue_score": -0.6365,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3680,
        "fields": {
            "state": 1136,
            "issue": 110,
            "state_issue_score": 0.7185,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3681,
        "fields": {
            "state": 1136,
            "issue": 111,
            "state_issue_score": 0.7551,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3682,
        "fields": {
            "state": 1136,
            "issue": 112,
            "state_issue_score": -0.6255,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3683,
        "fields": {
            "state": 1136,
            "issue": 113,
            "state_issue_score": -0.6255,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3685,
        "fields": {
            "state": 1137,
            "issue": 110,
            "state_issue_score": -0.1002,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3686,
        "fields": {
            "state": 1137,
            "issue": 111,
            "state_issue_score": -0.008,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3687,
        "fields": {
            "state": 1137,
            "issue": 112,
            "state_issue_score": -0.5984,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3688,
        "fields": {
            "state": 1137,
            "issue": 113,
            "state_issue_score": -0.6011,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3690,
        "fields": {
            "state": 1138,
            "issue": 110,
            "state_issue_score": 0.7892,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3691,
        "fields": {
            "state": 1138,
            "issue": 111,
            "state_issue_score": 0.124,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3692,
        "fields": {
            "state": 1138,
            "issue": 112,
            "state_issue_score": -0.324,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3693,
        "fields": {
            "state": 1138,
            "issue": 113,
            "state_issue_score": -0.324,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3695,
        "fields": {
            "state": 1139,
            "issue": 110,
            "state_issue_score": -0.7537,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3696,
        "fields": {
            "state": 1139,
            "issue": 111,
            "state_issue_score": -0.5315,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3697,
        "fields": {
            "state": 1139,
            "issue": 112,
            "state_issue_score": -0.7231,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3698,
        "fields": {
            "state": 1139,
            "issue": 113,
            "state_issue_score": -0.7231,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3700,
        "fields": {
            "state": 1140,
            "issue": 110,
            "state_issue_score": -0.8042,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3701,
        "fields": {
            "state": 1140,
            "issue": 111,
            "state_issue_score": -0.411,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3702,
        "fields": {
            "state": 1140,
            "issue": 112,
            "state_issue_score": -0.1911,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3703,
        "fields": {
            "state": 1140,
            "issue": 113,
            "state_issue_score": -0.0411,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3705,
        "fields": {
            "state": 1141,
            "issue": 110,
            "state_issue_score": -0.7902,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3706,
        "fields": {
            "state": 1141,
            "issue": 111,
            "state_issue_score": -0.695,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3707,
        "fields": {
            "state": 1141,
            "issue": 112,
            "state_issue_score": -0.6395,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3708,
        "fields": {
            "state": 1141,
            "issue": 113,
            "state_issue_score": -0.7395,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3710,
        "fields": {
            "state": 1142,
            "issue": 110,
            "state_issue_score": -0.6704,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3711,
        "fields": {
            "state": 1142,
            "issue": 111,
            "state_issue_score": -0.7908,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3712,
        "fields": {
            "state": 1142,
            "issue": 112,
            "state_issue_score": -0.7977,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3713,
        "fields": {
            "state": 1142,
            "issue": 113,
            "state_issue_score": -0.8064,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3715,
        "fields": {
            "state": 1143,
            "issue": 110,
            "state_issue_score": -0.7225,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3716,
        "fields": {
            "state": 1143,
            "issue": 111,
            "state_issue_score": -0.2877,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3717,
        "fields": {
            "state": 1143,
            "issue": 112,
            "state_issue_score": -0.3654,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3718,
        "fields": {
            "state": 1143,
            "issue": 113,
            "state_issue_score": -0.3989,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3720,
        "fields": {
            "state": 1144,
            "issue": 110,
            "state_issue_score": 0.8514,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3721,
        "fields": {
            "state": 1144,
            "issue": 111,
            "state_issue_score": 0.547,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3722,
        "fields": {
            "state": 1144,
            "issue": 112,
            "state_issue_score": -0.4947,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3723,
        "fields": {
            "state": 1144,
            "issue": 113,
            "state_issue_score": -0.3447,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3725,
        "fields": {
            "state": 1145,
            "issue": 110,
            "state_issue_score": 0.5628,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3726,
        "fields": {
            "state": 1145,
            "issue": 111,
            "state_issue_score": 0.245,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3727,
        "fields": {
            "state": 1145,
            "issue": 112,
            "state_issue_score": -0.3145,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3728,
        "fields": {
            "state": 1145,
            "issue": 113,
            "state_issue_score": -0.6145,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3730,
        "fields": {
            "state": 1146,
            "issue": 110,
            "state_issue_score": 0.6139,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3731,
        "fields": {
            "state": 1146,
            "issue": 111,
            "state_issue_score": 0.611,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3732,
        "fields": {
            "state": 1146,
            "issue": 112,
            "state_issue_score": -0.6311,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3733,
        "fields": {
            "state": 1146,
            "issue": 113,
            "state_issue_score": -0.5311,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3735,
        "fields": {
            "state": 1147,
            "issue": 110,
            "state_issue_score": 1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3736,
        "fields": {
            "state": 1147,
            "issue": 111,
            "state_issue_score": 0.9912,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3737,
        "fields": {
            "state": 1147,
            "issue": 112,
            "state_issue_score": -0.9688,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3738,
        "fields": {
            "state": 1147,
            "issue": 113,
            "state_issue_score": -0.8688,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3740,
        "fields": {
            "state": 1148,
            "issue": 110,
            "state_issue_score": -0.8255,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3741,
        "fields": {
            "state": 1148,
            "issue": 111,
            "state_issue_score": -0.0001,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3742,
        "fields": {
            "state": 1148,
            "issue": 112,
            "state_issue_score": -0.544,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3743,
        "fields": {
            "state": 1148,
            "issue": 113,
            "state_issue_score": -0.544,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3745,
        "fields": {
            "state": 1149,
            "issue": 110,
            "state_issue_score": 0.1155,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3746,
        "fields": {
            "state": 1149,
            "issue": 111,
            "state_issue_score": 0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3747,
        "fields": {
            "state": 1149,
            "issue": 112,
            "state_issue_score": -0.2901,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3748,
        "fields": {
            "state": 1149,
            "issue": 113,
            "state_issue_score": -0.4911,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3750,
        "fields": {
            "state": 1150,
            "issue": 110,
            "state_issue_score": -0.8741,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3751,
        "fields": {
            "state": 1150,
            "issue": 111,
            "state_issue_score": -0.352,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3752,
        "fields": {
            "state": 1150,
            "issue": 112,
            "state_issue_score": -0.552,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3753,
        "fields": {
            "state": 1150,
            "issue": 113,
            "state_issue_score": -0.4552,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3755,
        "fields": {
            "state": 1151,
            "issue": 110,
            "state_issue_score": 0.7502,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3756,
        "fields": {
            "state": 1151,
            "issue": 111,
            "state_issue_score": 0.4518,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3757,
        "fields": {
            "state": 1151,
            "issue": 112,
            "state_issue_score": -0.34,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3758,
        "fields": {
            "state": 1151,
            "issue": 113,
            "state_issue_score": -0.34,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3760,
        "fields": {
            "state": 1152,
            "issue": 110,
            "state_issue_score": -0.5166,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3761,
        "fields": {
            "state": 1152,
            "issue": 111,
            "state_issue_score": 0.2002,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3762,
        "fields": {
            "state": 1152,
            "issue": 112,
            "state_issue_score": -0.235,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3763,
        "fields": {
            "state": 1152,
            "issue": 113,
            "state_issue_score": -0.235,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3765,
        "fields": {
            "state": 1153,
            "issue": 110,
            "state_issue_score": -0.7108,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3766,
        "fields": {
            "state": 1153,
            "issue": 111,
            "state_issue_score": -0.1688,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3767,
        "fields": {
            "state": 1153,
            "issue": 112,
            "state_issue_score": -0.321,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3768,
        "fields": {
            "state": 1153,
            "issue": 113,
            "state_issue_score": -0.321,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3770,
        "fields": {
            "state": 1154,
            "issue": 110,
            "state_issue_score": 0.3216,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3771,
        "fields": {
            "state": 1154,
            "issue": 111,
            "state_issue_score": 0.0138,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3772,
        "fields": {
            "state": 1154,
            "issue": 112,
            "state_issue_score": -0.13,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3773,
        "fields": {
            "state": 1154,
            "issue": 113,
            "state_issue_score": -0.13,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3775,
        "fields": {
            "state": 1155,
            "issue": 110,
            "state_issue_score": -0.8967,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3776,
        "fields": {
            "state": 1155,
            "issue": 111,
            "state_issue_score": -0.4672,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3777,
        "fields": {
            "state": 1155,
            "issue": 112,
            "state_issue_score": -0.6033,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3778,
        "fields": {
            "state": 1155,
            "issue": 113,
            "state_issue_score": -0.6033,
            "weight": 1
        }
    }
]

campaignTrail_temp.candidate_issue_score_json = [
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1100,
        "fields": {
            "candidate": 300,
            "issue": 110,
            "issue_score": -0.8672
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1101,
        "fields": {
            "candidate": 300,
            "issue": 111,
            "issue_score": -0.7962
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1102,
        "fields": {
            "candidate": 300,
            "issue": 112,
            "issue_score": -0.6987
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1103,
        "fields": {
            "candidate": 300,
            "issue": 113,
            "issue_score": -0.7893
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1105,
        "fields": {
            "candidate": 301,
            "issue": 110,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1106,
        "fields": {
            "candidate": 301,
            "issue": 111,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1107,
        "fields": {
            "candidate": 301,
            "issue": 112,
            "issue_score": 0.9891
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1108,
        "fields": {
            "candidate": 301,
            "issue": 113,
            "issue_score": 0.4347
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1110,
        "fields": {
            "candidate": 302,
            "issue": 110,
            "issue_score": 0.8326
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1111,
        "fields": {
            "candidate": 302,
            "issue": 111,
            "issue_score": 0.83213
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1112,
        "fields": {
            "candidate": 302,
            "issue": 112,
            "issue_score": -0.8735
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1113,
        "fields": {
            "candidate": 302,
            "issue": 113,
            "issue_score": -0.8952
        }
    }
]

campaignTrail_temp.running_mate_issue_score_json = [
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1145,
        "fields": {
            "candidate": 303,
            "issue": 110,
            "issue_score": 0.3927
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1146,
        "fields": {
            "candidate": 303,
            "issue": 111,
            "issue_score": 0.5132
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1147,
        "fields": {
            "candidate": 303,
            "issue": 112,
            "issue_score": 0.7324
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1148,
        "fields": {
            "candidate": 303,
            "issue": 113,
            "issue_score": 0.3511
        }
    }
]

campaignTrail_temp.candidate_state_multiplier_json = [
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3000,
        "fields": {
            "candidate": 300,
            "state": 1100,
            "state_multiplier": 0.63426
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3001,
        "fields": {
            "candidate": 300,
            "state": 1101,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3002,
        "fields": {
            "candidate": 300,
            "state": 1102,
            "state_multiplier": 0.73524
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3003,
        "fields": {
            "candidate": 300,
            "state": 1103,
            "state_multiplier": 1.156468633
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3004,
        "fields": {
            "candidate": 300,
            "state": 1104,
            "state_multiplier": 1.0791205912
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3005,
        "fields": {
            "candidate": 300,
            "state": 1105,
            "state_multiplier": 0.899
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3006,
        "fields": {
            "candidate": 300,
            "state": 1106,
            "state_multiplier": 0.86
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3007,
        "fields": {
            "candidate": 300,
            "state": 1107,
            "state_multiplier": 0.7465813142
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3008,
        "fields": {
            "candidate": 300,
            "state": 1108,
            "state_multiplier": 0.793293534
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3009,
        "fields": {
            "candidate": 300,
            "state": 1109,
            "state_multiplier": 0.799
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3010,
        "fields": {
            "candidate": 300,
            "state": 1110,
            "state_multiplier": 1.0732388293
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3011,
        "fields": {
            "candidate": 300,
            "state": 1111,
            "state_multiplier": 0.5430459621
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3012,
        "fields": {
            "candidate": 300,
            "state": 1112,
            "state_multiplier": 1.265373294
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3013,
        "fields": {
            "candidate": 300,
            "state": 1113,
            "state_multiplier": 0.502868301
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3014,
        "fields": {
            "candidate": 300,
            "state": 1114,
            "state_multiplier": 0.62442125715
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3015,
        "fields": {
            "candidate": 300,
            "state": 1115,
            "state_multiplier": 0.654119166
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3016,
        "fields": {
            "candidate": 300,
            "state": 1116,
            "state_multiplier": 1.0146272637
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3017,
        "fields": {
            "candidate": 300,
            "state": 1117,
            "state_multiplier": 1.3049377863
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3018,
        "fields": {
            "candidate": 300,
            "state": 1118,
            "state_multiplier": 0.79
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3019,
        "fields": {
            "candidate": 300,
            "state": 1119,
            "state_multiplier": 0.5337945607
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3020,
        "fields": {
            "candidate": 300,
            "state": 1120,
            "state_multiplier": 0.679
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3021,
        "fields": {
            "candidate": 300,
            "state": 1121,
            "state_multiplier": 1.4
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3022,
        "fields": {
            "candidate": 300,
            "state": 1122,
            "state_multiplier": 0.89
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3023,
        "fields": {
            "candidate": 300,
            "state": 1123,
            "state_multiplier": 0.9232
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3024,
        "fields": {
            "candidate": 300,
            "state": 1124,
            "state_multiplier": 0.8231
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3025,
        "fields": {
            "candidate": 300,
            "state": 1125,
            "state_multiplier": 0.7992
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3026,
        "fields": {
            "candidate": 300,
            "state": 1126,
            "state_multiplier": 0.7609104019
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3027,
        "fields": {
            "candidate": 300,
            "state": 1127,
            "state_multiplier": 0.89
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3028,
        "fields": {
            "candidate": 300,
            "state": 1128,
            "state_multiplier": 0.79
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3029,
        "fields": {
            "candidate": 300,
            "state": 1129,
            "state_multiplier": 0.79
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3030,
        "fields": {
            "candidate": 300,
            "state": 1130,
            "state_multiplier": 0.89
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3031,
        "fields": {
            "candidate": 300,
            "state": 1131,
            "state_multiplier": 1.1967815556
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3032,
        "fields": {
            "candidate": 300,
            "state": 1132,
            "state_multiplier": 1.4
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3033,
        "fields": {
            "candidate": 300,
            "state": 1133,
            "state_multiplier": 1.116751001
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3034,
        "fields": {
            "candidate": 300,
            "state": 1134,
            "state_multiplier": 0.89
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3035,
        "fields": {
            "candidate": 300,
            "state": 1135,
            "state_multiplier": 1.03457740949
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3036,
        "fields": {
            "candidate": 300,
            "state": 1136,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3037,
        "fields": {
            "candidate": 300,
            "state": 1137,
            "state_multiplier": 1.4
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3038,
        "fields": {
            "candidate": 300,
            "state": 1138,
            "state_multiplier": 0.592370344
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3039,
        "fields": {
            "candidate": 300,
            "state": 1139,
            "state_multiplier": 1.1320862078
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3040,
        "fields": {
            "candidate": 300,
            "state": 1140,
            "state_multiplier": 1.0226086873
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3041,
        "fields": {
            "candidate": 300,
            "state": 1141,
            "state_multiplier": 1.0121514918
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3042,
        "fields": {
            "candidate": 300,
            "state": 1142,
            "state_multiplier": 0.997
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3043,
        "fields": {
            "candidate": 300,
            "state": 1143,
            "state_multiplier": 1.034710309
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3044,
        "fields": {
            "candidate": 300,
            "state": 1144,
            "state_multiplier": 0.4778631476
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3045,
        "fields": {
            "candidate": 300,
            "state": 1145,
            "state_multiplier": 0.819
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3046,
        "fields": {
            "candidate": 300,
            "state": 1146,
            "state_multiplier": 0.698
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3047,
        "fields": {
            "candidate": 300,
            "state": 1147,
            "state_multiplier": 0.01634
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3048,
        "fields": {
            "candidate": 300,
            "state": 1148,
            "state_multiplier": 1.42
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3049,
        "fields": {
            "candidate": 300,
            "state": 1149,
            "state_multiplier": 0.79
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3050,
        "fields": {
            "candidate": 300,
            "state": 1150,
            "state_multiplier": 1.12
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3051,
        "fields": {
            "candidate": 300,
            "state": 1151,
            "state_multiplier": 0.79
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3052,
        "fields": {
            "candidate": 300,
            "state": 1152,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3053,
        "fields": {
            "candidate": 300,
            "state": 1153,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3054,
        "fields": {
            "candidate": 300,
            "state": 1154,
            "state_multiplier": 0.79
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3055,
        "fields": {
            "candidate": 300,
            "state": 1155,
            "state_multiplier": 1.3
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3056,
        "fields": {
            "candidate": 301,
            "state": 1100,
            "state_multiplier": 0.05689
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3057,
        "fields": {
            "candidate": 301,
            "state": 1101,
            "state_multiplier": 0.05185
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3058,
        "fields": {
            "candidate": 301,
            "state": 1102,
            "state_multiplier": 0.04932
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3059,
        "fields": {
            "candidate": 301,
            "state": 1103,
            "state_multiplier": 0.07299
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3060,
        "fields": {
            "candidate": 301,
            "state": 1104,
            "state_multiplier": 0.08859
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3061,
        "fields": {
            "candidate": 301,
            "state": 1105,
            "state_multiplier": 0.07203
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3062,
        "fields": {
            "candidate": 301,
            "state": 1106,
            "state_multiplier": 0.0826
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3063,
        "fields": {
            "candidate": 301,
            "state": 1107,
            "state_multiplier": 0.0715
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3064,
        "fields": {
            "candidate": 301,
            "state": 1108,
            "state_multiplier": 0.07691
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3065,
        "fields": {
            "candidate": 301,
            "state": 1109,
            "state_multiplier": 0.052875
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3066,
        "fields": {
            "candidate": 301,
            "state": 1110,
            "state_multiplier": 0.1685
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3067,
        "fields": {
            "candidate": 301,
            "state": 1111,
            "state_multiplier": 0.04645
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3068,
        "fields": {
            "candidate": 301,
            "state": 1112,
            "state_multiplier": 0.21545
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3069,
        "fields": {
            "candidate": 301,
            "state": 1113,
            "state_multiplier": 0.0597
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3070,
        "fields": {
            "candidate": 301,
            "state": 1114,
            "state_multiplier": 0.0573
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3071,
        "fields": {
            "candidate": 301,
            "state": 1115,
            "state_multiplier": 0.072878
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3072,
        "fields": {
            "candidate": 301,
            "state": 1116,
            "state_multiplier": 0.1786
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3073,
        "fields": {
            "candidate": 301,
            "state": 1117,
            "state_multiplier": 0.2042
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3074,
        "fields": {
            "candidate": 301,
            "state": 1118,
            "state_multiplier": 0.142
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3075,
        "fields": {
            "candidate": 301,
            "state": 1119,
            "state_multiplier": 0.115
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3076,
        "fields": {
            "candidate": 301,
            "state": 1120,
            "state_multiplier": 0.1493
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3077,
        "fields": {
            "candidate": 301,
            "state": 1121,
            "state_multiplier": 0.1115
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3078,
        "fields": {
            "candidate": 301,
            "state": 1122,
            "state_multiplier": 0.1226
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3079,
        "fields": {
            "candidate": 301,
            "state": 1123,
            "state_multiplier": 0.2114
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3080,
        "fields": {
            "candidate": 301,
            "state": 1124,
            "state_multiplier": 0.1226
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3081,
        "fields": {
            "candidate": 301,
            "state": 1125,
            "state_multiplier": 0.1222
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3082,
        "fields": {
            "candidate": 301,
            "state": 1126,
            "state_multiplier": 0.121
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3083,
        "fields": {
            "candidate": 301,
            "state": 1127,
            "state_multiplier": 0.124
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3084,
        "fields": {
            "candidate": 301,
            "state": 1128,
            "state_multiplier": 0.121
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3085,
        "fields": {
            "candidate": 301,
            "state": 1129,
            "state_multiplier": 0.1105
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3086,
        "fields": {
            "candidate": 301,
            "state": 1130,
            "state_multiplier": 0.1225
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3087,
        "fields": {
            "candidate": 301,
            "state": 1131,
            "state_multiplier": 0.1225
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3088,
        "fields": {
            "candidate": 301,
            "state": 1132,
            "state_multiplier": 0.1386
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3089,
        "fields": {
            "candidate": 301,
            "state": 1133,
            "state_multiplier": 0.1265
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3090,
        "fields": {
            "candidate": 301,
            "state": 1134,
            "state_multiplier": 0.1138
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3091,
        "fields": {
            "candidate": 301,
            "state": 1135,
            "state_multiplier": 0.12959
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3092,
        "fields": {
            "candidate": 301,
            "state": 1136,
            "state_multiplier": 0.12778
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3093,
        "fields": {
            "candidate": 301,
            "state": 1137,
            "state_multiplier": 0.1234
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3094,
        "fields": {
            "candidate": 301,
            "state": 1138,
            "state_multiplier": 0.1032
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3095,
        "fields": {
            "candidate": 301,
            "state": 1139,
            "state_multiplier": 0.1152
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3096,
        "fields": {
            "candidate": 301,
            "state": 1140,
            "state_multiplier": 0.1332
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3097,
        "fields": {
            "candidate": 301,
            "state": 1141,
            "state_multiplier": 0.1342
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3098,
        "fields": {
            "candidate": 301,
            "state": 1142,
            "state_multiplier": 0.126
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3099,
        "fields": {
            "candidate": 301,
            "state": 1143,
            "state_multiplier": 0.1232
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3100,
        "fields": {
            "candidate": 301,
            "state": 1144,
            "state_multiplier": 0.122
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3101,
        "fields": {
            "candidate": 301,
            "state": 1145,
            "state_multiplier": 0.123
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3102,
        "fields": {
            "candidate": 301,
            "state": 1146,
            "state_multiplier": 0.133
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3103,
        "fields": {
            "candidate": 301,
            "state": 1147,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3104,
        "fields": {
            "candidate": 301,
            "state": 1148,
            "state_multiplier": 0.112
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3105,
        "fields": {
            "candidate": 301,
            "state": 1149,
            "state_multiplier": 0.126
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3106,
        "fields": {
            "candidate": 301,
            "state": 1150,
            "state_multiplier": 0.113
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3107,
        "fields": {
            "candidate": 301,
            "state": 1151,
            "state_multiplier": 0.12241
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3108,
        "fields": {
            "candidate": 301,
            "state": 1152,
            "state_multiplier": 0.128
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3109,
        "fields": {
            "candidate": 301,
            "state": 1153,
            "state_multiplier": 0.1476
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3110,
        "fields": {
            "candidate": 301,
            "state": 1154,
            "state_multiplier": 0.01132
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3111,
        "fields": {
            "candidate": 301,
            "state": 1155,
            "state_multiplier": 0.1112
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3112,
        "fields": {
            "candidate": 302,
            "state": 1100,
            "state_multiplier": 0.657876
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3113,
        "fields": {
            "candidate": 302,
            "state": 1101,
            "state_multiplier": 1.231
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3114,
        "fields": {
            "candidate": 302,
            "state": 1102,
            "state_multiplier": 1.649190374
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3115,
        "fields": {
            "candidate": 302,
            "state": 1103,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3116,
        "fields": {
            "candidate": 302,
            "state": 1104,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3117,
        "fields": {
            "candidate": 302,
            "state": 1105,
            "state_multiplier": 1.655
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3118,
        "fields": {
            "candidate": 302,
            "state": 1106,
            "state_multiplier": 1.7304302628
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3119,
        "fields": {
            "candidate": 302,
            "state": 1107,
            "state_multiplier": 1.4
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3120,
        "fields": {
            "candidate": 302,
            "state": 1108,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3121,
        "fields": {
            "candidate": 302,
            "state": 1109,
            "state_multiplier": 1.62002066
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3122,
        "fields": {
            "candidate": 302,
            "state": 1110,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3123,
        "fields": {
            "candidate": 302,
            "state": 1111,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3124,
        "fields": {
            "candidate": 302,
            "state": 1112,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3125,
        "fields": {
            "candidate": 302,
            "state": 1113,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3126,
        "fields": {
            "candidate": 302,
            "state": 1114,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3127,
        "fields": {
            "candidate": 302,
            "state": 1115,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3128,
        "fields": {
            "candidate": 302,
            "state": 1116,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3129,
        "fields": {
            "candidate": 302,
            "state": 1117,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3130,
        "fields": {
            "candidate": 302,
            "state": 1118,
            "state_multiplier": 1.768431254
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3131,
        "fields": {
            "candidate": 302,
            "state": 1119,
            "state_multiplier": 1.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3132,
        "fields": {
            "candidate": 302,
            "state": 1120,
            "state_multiplier": 1.94575972
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3133,
        "fields": {
            "candidate": 302,
            "state": 1121,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3134,
        "fields": {
            "candidate": 302,
            "state": 1122,
            "state_multiplier": 1.8998955
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3135,
        "fields": {
            "candidate": 302,
            "state": 1123,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3136,
        "fields": {
            "candidate": 302,
            "state": 1124,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3137,
        "fields": {
            "candidate": 302,
            "state": 1125,
            "state_multiplier": 1.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3138,
        "fields": {
            "candidate": 302,
            "state": 1126,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3139,
        "fields": {
            "candidate": 302,
            "state": 1127,
            "state_multiplier": 1.999324025
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3140,
        "fields": {
            "candidate": 302,
            "state": 1128,
            "state_multiplier": 1.931027927
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3141,
        "fields": {
            "candidate": 302,
            "state": 1129,
            "state_multiplier": 1.93713633
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3142,
        "fields": {
            "candidate": 302,
            "state": 1130,
            "state_multiplier": 2.5333390176
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3143,
        "fields": {
            "candidate": 302,
            "state": 1131,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3144,
        "fields": {
            "candidate": 302,
            "state": 1132,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3145,
        "fields": {
            "candidate": 302,
            "state": 1133,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3146,
        "fields": {
            "candidate": 302,
            "state": 1134,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3147,
        "fields": {
            "candidate": 302,
            "state": 1135,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3148,
        "fields": {
            "candidate": 302,
            "state": 1136,
            "state_multiplier": 1.423
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3149,
        "fields": {
            "candidate": 302,
            "state": 1137,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3150,
        "fields": {
            "candidate": 302,
            "state": 1138,
            "state_multiplier": 1.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3151,
        "fields": {
            "candidate": 302,
            "state": 1139,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3152,
        "fields": {
            "candidate": 302,
            "state": 1140,
            "state_multiplier": 1.3
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3153,
        "fields": {
            "candidate": 302,
            "state": 1141,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3154,
        "fields": {
            "candidate": 302,
            "state": 1142,
            "state_multiplier": 0.89
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3155,
        "fields": {
            "candidate": 302,
            "state": 1143,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3156,
        "fields": {
            "candidate": 302,
            "state": 1144,
            "state_multiplier": 1.6
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3157,
        "fields": {
            "candidate": 302,
            "state": 1145,
            "state_multiplier": 2.41294711
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3158,
        "fields": {
            "candidate": 302,
            "state": 1146,
            "state_multiplier": 1.704495271
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3159,
        "fields": {
            "candidate": 302,
            "state": 1147,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3160,
        "fields": {
            "candidate": 302,
            "state": 1148,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3161,
        "fields": {
            "candidate": 302,
            "state": 1149,
            "state_multiplier": 1.9285617465
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3162,
        "fields": {
            "candidate": 302,
            "state": 1150,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3163,
        "fields": {
            "candidate": 302,
            "state": 1151,
            "state_multiplier": 1.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3164,
        "fields": {
            "candidate": 302,
            "state": 1152,
            "state_multiplier": 1.23
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3165,
        "fields": {
            "candidate": 302,
            "state": 1153,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3166,
        "fields": {
            "candidate": 302,
            "state": 1154,
            "state_multiplier": 2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 3167,
        "fields": {
            "candidate": 302,
            "state": 1155,
            "state_multiplier": 1
        }
    }
]

campaignTrail_temp.answer_score_global_json = [
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4000,
        "fields": {
            "answer": 6110,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.062
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4001,
        "fields": {
            "answer": 6111,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.0585
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4082,
        "fields": {
            "answer": 6119,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4083,
        "fields": {
            "answer": 6120,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4084,
        "fields": {
            "answer": 6121,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4085,
        "fields": {
            "answer": 6123,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4087,
        "fields": {
            "answer": 6125,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4089,
        "fields": {
            "answer": 6130,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4090,
        "fields": {
            "answer": 6133,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.65
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4092,
        "fields": {
            "answer": 6137,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.0005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4093,
        "fields": {
            "answer": 6138,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4094,
        "fields": {
            "answer": 6141,
            "candidate": 300,
            "affected_candidate": 300,
            "global_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4095,
        "fields": {
            "answer": 6145,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4096,
        "fields": {
            "answer": 6146,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.0001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4099,
        "fields": {
            "answer": 6159,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4100,
        "fields": {
            "answer": 6162,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.15
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4101,
        "fields": {
            "answer": 6163,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.0035
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4102,
        "fields": {
            "answer": 6164,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": -0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4104,
        "fields": {
            "answer": 6167,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4105,
        "fields": {
            "answer": 6175,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4106,
        "fields": {
            "answer": 6176,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4108,
        "fields": {
            "answer": 6181,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4109,
        "fields": {
            "answer": 6183,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4110,
        "fields": {
            "answer": 6188,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4113,
        "fields": {
            "answer": 6194,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4114,
        "fields": {
            "answer": 6195,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4115,
        "fields": {
            "answer": 6198,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 4117,
        "fields": {
            "answer": 6209,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42559,
        "fields": {
            "answer": 6111,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42560,
        "fields": {
            "answer": 6111,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42561,
        "fields": {
            "answer": 6110,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42562,
        "fields": {
            "answer": 6110,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42564,
        "fields": {
            "answer": 6113,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42565,
        "fields": {
            "answer": 6115,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42566,
        "fields": {
            "answer": 6116,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42568,
        "fields": {
            "answer": 6126,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.085
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42570,
        "fields": {
            "answer": 6117,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42571,
        "fields": {
            "answer": 6117,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42572,
        "fields": {
            "answer": 6117,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42575,
        "fields": {
            "answer": 6118,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": -0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42576,
        "fields": {
            "answer": 6118,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42577,
        "fields": {
            "answer": 6118,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42578,
        "fields": {
            "answer": 6119,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42579,
        "fields": {
            "answer": 6119,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42580,
        "fields": {
            "answer": 6120,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42581,
        "fields": {
            "answer": 6120,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42582,
        "fields": {
            "answer": 6129,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42583,
        "fields": {
            "answer": 6129,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42584,
        "fields": {
            "answer": 6130,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42585,
        "fields": {
            "answer": 6130,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42587,
        "fields": {
            "answer": 6131,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42588,
        "fields": {
            "answer": 6131,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.0099
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42589,
        "fields": {
            "answer": 6131,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.0099
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42592,
        "fields": {
            "answer": 6121,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42593,
        "fields": {
            "answer": 6122,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42594,
        "fields": {
            "answer": 6122,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.0055
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42595,
        "fields": {
            "answer": 6123,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42596,
        "fields": {
            "answer": 6208,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42597,
        "fields": {
            "answer": 6209,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42598,
        "fields": {
            "answer": 6209,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42600,
        "fields": {
            "answer": 6133,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42601,
        "fields": {
            "answer": 6133,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42603,
        "fields": {
            "answer": 6135,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42604,
        "fields": {
            "answer": 6134,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42605,
        "fields": {
            "answer": 6134,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42606,
        "fields": {
            "answer": 6134,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42607,
        "fields": {
            "answer": 6144,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42608,
        "fields": {
            "answer": 6144,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42609,
        "fields": {
            "answer": 6146,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42610,
        "fields": {
            "answer": 6140,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.07
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42611,
        "fields": {
            "answer": 6140,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42612,
        "fields": {
            "answer": 6177,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42613,
        "fields": {
            "answer": 6177,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.085
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42614,
        "fields": {
            "answer": 6177,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42615,
        "fields": {
            "answer": 6178,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42616,
        "fields": {
            "answer": 6178,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42617,
        "fields": {
            "answer": 6178,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42618,
        "fields": {
            "answer": 6141,
            "candidate": 302,
            "affected_candidate": 302,
            "global_multiplier": 0.0015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42619,
        "fields": {
            "answer": 6142,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42620,
        "fields": {
            "answer": 6142,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.0015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42621,
        "fields": {
            "answer": 6143,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42622,
        "fields": {
            "answer": 6143,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42623,
        "fields": {
            "answer": 6184,
            "candidate": 300,
            "affected_candidate": 300,
            "global_multiplier": 1.5
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42624,
        "fields": {
            "answer": 6184,
            "candidate": 302,
            "affected_candidate": 302,
            "global_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42625,
        "fields": {
            "answer": 6184,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42626,
        "fields": {
            "answer": 6180,
            "candidate": 302,
            "affected_candidate": 302,
            "global_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42627,
        "fields": {
            "answer": 6180,
            "candidate": 302,
            "affected_candidate": 300,
            "global_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42628,
        "fields": {
            "answer": 6180,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42630,
        "fields": {
            "answer": 6182,
            "candidate": 302,
            "affected_candidate": 300,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42631,
        "fields": {
            "answer": 6182,
            "candidate": 302,
            "affected_candidate": 302,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42632,
        "fields": {
            "answer": 6182,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42633,
        "fields": {
            "answer": 6183,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42634,
        "fields": {
            "answer": 6181,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42635,
        "fields": {
            "answer": 6172,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42636,
        "fields": {
            "answer": 6172,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42640,
        "fields": {
            "answer": 6173,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.056
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42641,
        "fields": {
            "answer": 6173,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.033
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42643,
        "fields": {
            "answer": 6175,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42644,
        "fields": {
            "answer": 6175,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42646,
        "fields": {
            "answer": 6168,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42647,
        "fields": {
            "answer": 6169,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42648,
        "fields": {
            "answer": 6169,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42649,
        "fields": {
            "answer": 6170,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42650,
        "fields": {
            "answer": 6188,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42651,
        "fields": {
            "answer": 6188,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42652,
        "fields": {
            "answer": 6195,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42653,
        "fields": {
            "answer": 6195,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42655,
        "fields": {
            "answer": 6194,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.78
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42656,
        "fields": {
            "answer": 6194,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42657,
        "fields": {
            "answer": 6193,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.85
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42658,
        "fields": {
            "answer": 6193,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.055
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42659,
        "fields": {
            "answer": 6193,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42660,
        "fields": {
            "answer": 6192,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42661,
        "fields": {
            "answer": 6192,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42662,
        "fields": {
            "answer": 6192,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.075
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42663,
        "fields": {
            "answer": 6196,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42664,
        "fields": {
            "answer": 6196,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.0001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42665,
        "fields": {
            "answer": 6198,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42667,
        "fields": {
            "answer": 6199,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.07
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42668,
        "fields": {
            "answer": 6199,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42669,
        "fields": {
            "answer": 6199,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42670,
        "fields": {
            "answer": 6153,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42671,
        "fields": {
            "answer": 6153,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42672,
        "fields": {
            "answer": 6154,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": -0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42673,
        "fields": {
            "answer": 6154,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42674,
        "fields": {
            "answer": 6154,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42676,
        "fields": {
            "answer": 6155,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42677,
        "fields": {
            "answer": 6155,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42678,
        "fields": {
            "answer": 6160,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.11
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42679,
        "fields": {
            "answer": 6160,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.0065
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42680,
        "fields": {
            "answer": 6160,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42681,
        "fields": {
            "answer": 6162,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.0075
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42682,
        "fields": {
            "answer": 6162,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42683,
        "fields": {
            "answer": 6163,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42684,
        "fields": {
            "answer": 6159,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42685,
        "fields": {
            "answer": 6159,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42686,
        "fields": {
            "answer": 6158,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42687,
        "fields": {
            "answer": 6158,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42688,
        "fields": {
            "answer": 6158,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42689,
        "fields": {
            "answer": 6157,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.3
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42690,
        "fields": {
            "answer": 6157,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42691,
        "fields": {
            "answer": 6157,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42692,
        "fields": {
            "answer": 6156,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42693,
        "fields": {
            "answer": 6156,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42694,
        "fields": {
            "answer": 6167,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42695,
        "fields": {
            "answer": 6164,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42696,
        "fields": {
            "answer": 6164,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42697,
        "fields": {
            "answer": 6200,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": -0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42698,
        "fields": {
            "answer": 6200,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.0095
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42699,
        "fields": {
            "answer": 6200,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.0095
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42700,
        "fields": {
            "answer": 6201,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.0045
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42701,
        "fields": {
            "answer": 6201,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.0045
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42702,
        "fields": {
            "answer": 6202,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": -0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42703,
        "fields": {
            "answer": 6202,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.065
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42704,
        "fields": {
            "answer": 6202,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42705,
        "fields": {
            "answer": 6207,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42706,
        "fields": {
            "answer": 6207,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42707,
        "fields": {
            "answer": 6207,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42708,
        "fields": {
            "answer": 6206,
            "candidate": 300,
            "affected_candidate": 300,
            "global_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42709,
        "fields": {
            "answer": 6206,
            "candidate": 302,
            "affected_candidate": 302,
            "global_multiplier": -0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42710,
        "fields": {
            "answer": 6204,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.07
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42711,
        "fields": {
            "answer": 6204,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42712,
        "fields": {
            "answer": 6204,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42713,
        "fields": {
            "answer": 42533,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42714,
        "fields": {
            "answer": 42533,
            "candidate": 300,
            "affected_candidate": 300,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42715,
        "fields": {
            "answer": 42533,
            "candidate": 302,
            "affected_candidate": 302,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42716,
        "fields": {
            "answer": 42548,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42717,
        "fields": {
            "answer": 42548,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42718,
        "fields": {
            "answer": 42549,
            "candidate": 301,
            "affected_candidate": 300,
            "global_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42719,
        "fields": {
            "answer": 42549,
            "candidate": 301,
            "affected_candidate": 302,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 42720,
        "fields": {
            "answer": 42534,
            "candidate": 301,
            "affected_candidate": 301,
            "global_multiplier": 1.3
        }
    }
]

campaignTrail_temp.answer_score_issue_json = [
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3138,
        "fields": {
            "answer": 6110,
            "issue": 112,
            "issue_score": 0.7801,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3139,
        "fields": {
            "answer": 6110,
            "issue": 113,
            "issue_score": 0.6011,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3140,
        "fields": {
            "answer": 6111,
            "issue": 112,
            "issue_score": -0.4114,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3146,
        "fields": {
            "answer": 6113,
            "issue": 113,
            "issue_score": 0.6875,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3150,
        "fields": {
            "answer": 6115,
            "issue": 110,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3151,
        "fields": {
            "answer": 6115,
            "issue": 113,
            "issue_score": 0.2,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3152,
        "fields": {
            "answer": 6117,
            "issue": 110,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3159,
        "fields": {
            "answer": 6120,
            "issue": 110,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3160,
        "fields": {
            "answer": 6120,
            "issue": 111,
            "issue_score": -0.201,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3164,
        "fields": {
            "answer": 6122,
            "issue": 110,
            "issue_score": -0.15,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3165,
        "fields": {
            "answer": 6122,
            "issue": 111,
            "issue_score": -0.1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3166,
        "fields": {
            "answer": 6123,
            "issue": 110,
            "issue_score": 0.2,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3167,
        "fields": {
            "answer": 6123,
            "issue": 111,
            "issue_score": 0.21,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3173,
        "fields": {
            "answer": 6126,
            "issue": 114,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3174,
        "fields": {
            "answer": 6127,
            "issue": 114,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3180,
        "fields": {
            "answer": 6133,
            "issue": 110,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3181,
        "fields": {
            "answer": 6133,
            "issue": 111,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3182,
        "fields": {
            "answer": 6134,
            "issue": 110,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3183,
        "fields": {
            "answer": 6134,
            "issue": 111,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3184,
        "fields": {
            "answer": 6135,
            "issue": 110,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3185,
        "fields": {
            "answer": 6135,
            "issue": 112,
            "issue_score": 0.2,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3188,
        "fields": {
            "answer": 6137,
            "issue": 114,
            "issue_score": 0.213,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3193,
        "fields": {
            "answer": 6141,
            "issue": 112,
            "issue_score": -0.575,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3194,
        "fields": {
            "answer": 6142,
            "issue": 110,
            "issue_score": -0.2375,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3195,
        "fields": {
            "answer": 6142,
            "issue": 111,
            "issue_score": -0.1125,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3196,
        "fields": {
            "answer": 6143,
            "issue": 111,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3197,
        "fields": {
            "answer": 6143,
            "issue": 114,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3198,
        "fields": {
            "answer": 6144,
            "issue": 110,
            "issue_score": -0.375,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3199,
        "fields": {
            "answer": 6144,
            "issue": 111,
            "issue_score": -0.2375,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3201,
        "fields": {
            "answer": 6145,
            "issue": 110,
            "issue_score": -0.4875,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3202,
        "fields": {
            "answer": 6145,
            "issue": 111,
            "issue_score": -0.0375,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3203,
        "fields": {
            "answer": 6145,
            "issue": 112,
            "issue_score": -0.4375,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3206,
        "fields": {
            "answer": 6146,
            "issue": 112,
            "issue_score": 0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3221,
        "fields": {
            "answer": 6154,
            "issue": 112,
            "issue_score": -0.7906,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3225,
        "fields": {
            "answer": 6156,
            "issue": 111,
            "issue_score": 0.1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3240,
        "fields": {
            "answer": 6167,
            "issue": 112,
            "issue_score": -0.7113,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3241,
        "fields": {
            "answer": 6168,
            "issue": 111,
            "issue_score": 0.1875,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3242,
        "fields": {
            "answer": 6169,
            "issue": 112,
            "issue_score": -0.6375,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3246,
        "fields": {
            "answer": 6173,
            "issue": 114,
            "issue_score": 0.411,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3248,
        "fields": {
            "answer": 6175,
            "issue": 112,
            "issue_score": -0.8375,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3275,
        "fields": {
            "answer": 6192,
            "issue": 110,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3276,
        "fields": {
            "answer": 6192,
            "issue": 111,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3277,
        "fields": {
            "answer": 6193,
            "issue": 110,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3278,
        "fields": {
            "answer": 6193,
            "issue": 112,
            "issue_score": -0.89,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 3279,
        "fields": {
            "answer": 6194,
            "issue": 112,
            "issue_score": -1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 42558,
        "fields": {
            "answer": 6111,
            "issue": 113,
            "issue_score": -0.6877,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 42563,
        "fields": {
            "answer": 6111,
            "issue": 110,
            "issue_score": 0.001,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 42567,
        "fields": {
            "answer": 6116,
            "issue": 113,
            "issue_score": -0.53,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 42569,
        "fields": {
            "answer": 6125,
            "issue": 112,
            "issue_score": 0.7,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 42586,
        "fields": {
            "answer": 6130,
            "issue": 111,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 42590,
        "fields": {
            "answer": 6131,
            "issue": 110,
            "issue_score": 0.41,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 42591,
        "fields": {
            "answer": 6131,
            "issue": 111,
            "issue_score": 0.7,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 42602,
        "fields": {
            "answer": 6134,
            "issue": 113,
            "issue_score": -0.25,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 42629,
        "fields": {
            "answer": 6180,
            "issue": 110,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 42637,
        "fields": {
            "answer": 6172,
            "issue": 111,
            "issue_score": 0,
            "issue_importance": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 42638,
        "fields": {
            "answer": 6173,
            "issue": 112,
            "issue_score": -0.712,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 42639,
        "fields": {
            "answer": 6173,
            "issue": 113,
            "issue_score": -0.2,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 42642,
        "fields": {
            "answer": 6175,
            "issue": 113,
            "issue_score": -0.9113,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 42645,
        "fields": {
            "answer": 6168,
            "issue": 112,
            "issue_score": -0.1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 42654,
        "fields": {
            "answer": 6194,
            "issue": 113,
            "issue_score": -1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 42814,
        "fields": {
            "answer": 6207,
            "issue": 113,
            "issue_score": -0.9,
            "issue_importance": 1
        }
    }
]

campaignTrail_temp.answer_score_state_json = [
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 30008,
        "fields": {
            "answer": 6204,
            "state": 1108,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 30210,
        "fields": {
            "answer": 6206,
            "state": 1108,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 35689,
        "fields": {
            "answer": 6119,
            "state": 1104,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36133,
        "fields": {
            "answer": 6127,
            "state": 1100,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.075
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36134,
        "fields": {
            "answer": 6127,
            "state": 1101,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.085
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36135,
        "fields": {
            "answer": 6127,
            "state": 1102,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.075
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36136,
        "fields": {
            "answer": 6127,
            "state": 1103,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0825
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36137,
        "fields": {
            "answer": 6127,
            "state": 1104,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0825
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36138,
        "fields": {
            "answer": 6127,
            "state": 1105,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0925
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36139,
        "fields": {
            "answer": 6127,
            "state": 1106,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0725
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36140,
        "fields": {
            "answer": 6127,
            "state": 1107,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0825
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36141,
        "fields": {
            "answer": 6127,
            "state": 1108,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.065
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36142,
        "fields": {
            "answer": 6127,
            "state": 1109,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0825
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36143,
        "fields": {
            "answer": 6127,
            "state": 1110,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0775
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36144,
        "fields": {
            "answer": 6127,
            "state": 1111,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36145,
        "fields": {
            "answer": 6127,
            "state": 1112,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0975
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36146,
        "fields": {
            "answer": 6127,
            "state": 1113,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0875
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36147,
        "fields": {
            "answer": 6127,
            "state": 1114,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0925
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36148,
        "fields": {
            "answer": 6127,
            "state": 1115,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36149,
        "fields": {
            "answer": 6127,
            "state": 1116,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0825
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36150,
        "fields": {
            "answer": 6127,
            "state": 1117,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.085
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36151,
        "fields": {
            "answer": 6127,
            "state": 1118,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0925
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36152,
        "fields": {
            "answer": 6127,
            "state": 1119,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.085
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36153,
        "fields": {
            "answer": 6127,
            "state": 1120,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36154,
        "fields": {
            "answer": 6127,
            "state": 1121,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0825
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36155,
        "fields": {
            "answer": 6127,
            "state": 1122,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.095
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36156,
        "fields": {
            "answer": 6127,
            "state": 1123,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.075
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36157,
        "fields": {
            "answer": 6127,
            "state": 1124,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.085
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36158,
        "fields": {
            "answer": 6127,
            "state": 1125,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0775
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36159,
        "fields": {
            "answer": 6127,
            "state": 1126,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0825
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36160,
        "fields": {
            "answer": 6127,
            "state": 1127,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36161,
        "fields": {
            "answer": 6127,
            "state": 1128,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36162,
        "fields": {
            "answer": 6127,
            "state": 1129,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0925
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36163,
        "fields": {
            "answer": 6127,
            "state": 1130,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36164,
        "fields": {
            "answer": 6127,
            "state": 1131,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.07
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36165,
        "fields": {
            "answer": 6127,
            "state": 1132,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.075
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36166,
        "fields": {
            "answer": 6127,
            "state": 1133,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.075
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36167,
        "fields": {
            "answer": 6127,
            "state": 1134,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36168,
        "fields": {
            "answer": 6127,
            "state": 1135,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.075
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36169,
        "fields": {
            "answer": 6127,
            "state": 1136,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0975
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36170,
        "fields": {
            "answer": 6127,
            "state": 1137,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0675
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36171,
        "fields": {
            "answer": 6127,
            "state": 1138,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0825
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36172,
        "fields": {
            "answer": 6127,
            "state": 1139,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0825
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36173,
        "fields": {
            "answer": 6127,
            "state": 1140,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36174,
        "fields": {
            "answer": 6127,
            "state": 1141,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0775
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36175,
        "fields": {
            "answer": 6127,
            "state": 1142,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0725
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36176,
        "fields": {
            "answer": 6127,
            "state": 1143,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36177,
        "fields": {
            "answer": 6127,
            "state": 1144,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.085
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36178,
        "fields": {
            "answer": 6127,
            "state": 1145,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36179,
        "fields": {
            "answer": 6127,
            "state": 1146,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0875
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36180,
        "fields": {
            "answer": 6127,
            "state": 1147,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0925
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36181,
        "fields": {
            "answer": 6127,
            "state": 1148,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36182,
        "fields": {
            "answer": 6127,
            "state": 1149,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.0975
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36183,
        "fields": {
            "answer": 6127,
            "state": 1150,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.075
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36581,
        "fields": {
            "answer": 6135,
            "state": 1102,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.65
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36582,
        "fields": {
            "answer": 6135,
            "state": 1109,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.65
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36583,
        "fields": {
            "answer": 6135,
            "state": 1121,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.65
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36584,
        "fields": {
            "answer": 6135,
            "state": 1127,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.65
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36585,
        "fields": {
            "answer": 6135,
            "state": 1132,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.65
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36586,
        "fields": {
            "answer": 6135,
            "state": 1137,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.65
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36587,
        "fields": {
            "answer": 6135,
            "state": 1149,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.65
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 36692,
        "fields": {
            "answer": 6136,
            "state": 1145,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 39771,
        "fields": {
            "answer": 6192,
            "state": 1137,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 39827,
        "fields": {
            "answer": 6193,
            "state": 1137,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 39939,
        "fields": {
            "answer": 6195,
            "state": 1137,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42573,
        "fields": {
            "answer": 6118,
            "state": 1104,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42574,
        "fields": {
            "answer": 6118,
            "state": 1108,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42721,
        "fields": {
            "answer": 42553,
            "state": 1101,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42722,
        "fields": {
            "answer": 42553,
            "state": 1102,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42723,
        "fields": {
            "answer": 42553,
            "state": 1108,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42724,
        "fields": {
            "answer": 42553,
            "state": 1109,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42725,
        "fields": {
            "answer": 42553,
            "state": 1114,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42726,
        "fields": {
            "answer": 42553,
            "state": 1118,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42727,
        "fields": {
            "answer": 42553,
            "state": 1121,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42728,
        "fields": {
            "answer": 42553,
            "state": 1122,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42729,
        "fields": {
            "answer": 42553,
            "state": 1127,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42730,
        "fields": {
            "answer": 42553,
            "state": 1128,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42731,
        "fields": {
            "answer": 42553,
            "state": 1130,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42732,
        "fields": {
            "answer": 42553,
            "state": 1132,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42733,
        "fields": {
            "answer": 42553,
            "state": 1134,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42734,
        "fields": {
            "answer": 42553,
            "state": 1137,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42735,
        "fields": {
            "answer": 42553,
            "state": 1149,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42736,
        "fields": {
            "answer": 42553,
            "state": 1145,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42737,
        "fields": {
            "answer": 42554,
            "state": 1146,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.6
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42738,
        "fields": {
            "answer": 42554,
            "state": 1136,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.6
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42739,
        "fields": {
            "answer": 42554,
            "state": 1104,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.6
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42740,
        "fields": {
            "answer": 42554,
            "state": 1110,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.6
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42741,
        "fields": {
            "answer": 42554,
            "state": 1147,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.6
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42742,
        "fields": {
            "answer": 42554,
            "state": 1131,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.6
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42743,
        "fields": {
            "answer": 42554,
            "state": 1135,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.6
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42744,
        "fields": {
            "answer": 42554,
            "state": 1103,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.6
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42745,
        "fields": {
            "answer": 42554,
            "state": 1117,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.6
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42746,
        "fields": {
            "answer": 42554,
            "state": 1123,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.6
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42747,
        "fields": {
            "answer": 42554,
            "state": 1100,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.6
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42748,
        "fields": {
            "answer": 42554,
            "state": 1139,
            "candidate": 301,
            "affected_candidate": 301,
            "state_multiplier": 0.6
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42749,
        "fields": {
            "answer": 6118,
            "state": 1102,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42750,
        "fields": {
            "answer": 6118,
            "state": 1109,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42751,
        "fields": {
            "answer": 6118,
            "state": 1127,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42752,
        "fields": {
            "answer": 6118,
            "state": 1149,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42753,
        "fields": {
            "answer": 6119,
            "state": 1121,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42754,
        "fields": {
            "answer": 6119,
            "state": 1132,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42755,
        "fields": {
            "answer": 6119,
            "state": 1137,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42756,
        "fields": {
            "answer": 6120,
            "state": 1102,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": -0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42757,
        "fields": {
            "answer": 6120,
            "state": 1109,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": -0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42758,
        "fields": {
            "answer": 6120,
            "state": 1127,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": -0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42759,
        "fields": {
            "answer": 6120,
            "state": 1149,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": -0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42760,
        "fields": {
            "answer": 6120,
            "state": 1121,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": -0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42761,
        "fields": {
            "answer": 6120,
            "state": 1132,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": -0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42762,
        "fields": {
            "answer": 6120,
            "state": 1137,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": -0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42763,
        "fields": {
            "answer": 6133,
            "state": 1102,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42764,
        "fields": {
            "answer": 6133,
            "state": 1109,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42765,
        "fields": {
            "answer": 6133,
            "state": 1127,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42766,
        "fields": {
            "answer": 6133,
            "state": 1149,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42767,
        "fields": {
            "answer": 6133,
            "state": 1121,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42768,
        "fields": {
            "answer": 6133,
            "state": 1132,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42769,
        "fields": {
            "answer": 6133,
            "state": 1137,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42770,
        "fields": {
            "answer": 6140,
            "state": 1121,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42771,
        "fields": {
            "answer": 6140,
            "state": 1132,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42772,
        "fields": {
            "answer": 6140,
            "state": 1137,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42774,
        "fields": {
            "answer": 6184,
            "state": 1121,
            "candidate": 302,
            "affected_candidate": 302,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42775,
        "fields": {
            "answer": 6184,
            "state": 1132,
            "candidate": 302,
            "affected_candidate": 302,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42776,
        "fields": {
            "answer": 6184,
            "state": 1137,
            "candidate": 302,
            "affected_candidate": 302,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42777,
        "fields": {
            "answer": 6181,
            "state": 1102,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42778,
        "fields": {
            "answer": 6181,
            "state": 1109,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42779,
        "fields": {
            "answer": 6181,
            "state": 1127,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42780,
        "fields": {
            "answer": 6181,
            "state": 1149,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42781,
        "fields": {
            "answer": 6188,
            "state": 1121,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42782,
        "fields": {
            "answer": 6188,
            "state": 1132,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42783,
        "fields": {
            "answer": 6188,
            "state": 1137,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42784,
        "fields": {
            "answer": 6188,
            "state": 1102,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42785,
        "fields": {
            "answer": 6188,
            "state": 1109,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42786,
        "fields": {
            "answer": 6188,
            "state": 1127,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42787,
        "fields": {
            "answer": 6188,
            "state": 1149,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42788,
        "fields": {
            "answer": 6194,
            "state": 1102,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42789,
        "fields": {
            "answer": 6194,
            "state": 1109,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42790,
        "fields": {
            "answer": 6194,
            "state": 1127,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42791,
        "fields": {
            "answer": 6194,
            "state": 1149,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42792,
        "fields": {
            "answer": 6195,
            "state": 1102,
            "candidate": 300,
            "affected_candidate": 300,
            "state_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42793,
        "fields": {
            "answer": 6195,
            "state": 1109,
            "candidate": 300,
            "affected_candidate": 300,
            "state_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42794,
        "fields": {
            "answer": 6195,
            "state": 1127,
            "candidate": 300,
            "affected_candidate": 300,
            "state_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42795,
        "fields": {
            "answer": 6195,
            "state": 1149,
            "candidate": 300,
            "affected_candidate": 300,
            "state_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42796,
        "fields": {
            "answer": 6154,
            "state": 1102,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42797,
        "fields": {
            "answer": 6154,
            "state": 1109,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42798,
        "fields": {
            "answer": 6154,
            "state": 1127,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42799,
        "fields": {
            "answer": 6154,
            "state": 1149,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42800,
        "fields": {
            "answer": 6201,
            "state": 1121,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42801,
        "fields": {
            "answer": 6201,
            "state": 1132,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42802,
        "fields": {
            "answer": 6201,
            "state": 1137,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42803,
        "fields": {
            "answer": 6201,
            "state": 1102,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42804,
        "fields": {
            "answer": 6201,
            "state": 1109,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42805,
        "fields": {
            "answer": 6201,
            "state": 1127,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42806,
        "fields": {
            "answer": 6201,
            "state": 1149,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42807,
        "fields": {
            "answer": 6202,
            "state": 1121,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42808,
        "fields": {
            "answer": 6202,
            "state": 1132,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42809,
        "fields": {
            "answer": 6202,
            "state": 1137,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42810,
        "fields": {
            "answer": 6202,
            "state": 1102,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42811,
        "fields": {
            "answer": 6202,
            "state": 1109,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42812,
        "fields": {
            "answer": 6202,
            "state": 1127,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42813,
        "fields": {
            "answer": 6202,
            "state": 1149,
            "candidate": 301,
            "affected_candidate": 302,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42815,
        "fields": {
            "answer": 6204,
            "state": 1102,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42816,
        "fields": {
            "answer": 6204,
            "state": 1109,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42817,
        "fields": {
            "answer": 6204,
            "state": 1127,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 42818,
        "fields": {
            "answer": 6204,
            "state": 1149,
            "candidate": 301,
            "affected_candidate": 300,
            "state_multiplier": 0.006
        }
    }
]

campaignTrail_temp.answer_feedback_json = [
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3004,
        "fields": {
            "answer": 6204,
            "candidate": 301,
            "answer_feedback": "A small wave of well wishes come Donald Trump's way in the days after the incident. Soon after, everyone moves on."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3006,
        "fields": {
            "answer": 6206,
            "candidate": 301,
            "answer_feedback": "The incident quickly fades from memory as Election Day grows closer. Only to be remembered as the Butler incident's lost sibling."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3007,
        "fields": {
            "answer": 6207,
            "candidate": 301,
            "answer_feedback": "...\nWay to keep your cool there. Good job not starting a panic."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3059,
        "fields": {
            "answer": 6110,
            "candidate": 301,
            "answer_feedback": "A message of optimism and perseverance. A rare sight in recent times. It'll definitely help you stand out, assuming you can convince the people you really mean it."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3060,
        "fields": {
            "answer": 6111,
            "candidate": 301,
            "answer_feedback": "With the amount of saber-rattling going on these days, another mouth proclaiming the imminent death of America will be lost in the sea of its peers. Though the most fearful of the populous do turn their heads."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3062,
        "fields": {
            "answer": 6113,
            "candidate": 301,
            "answer_feedback": "With how stressful this election cycle is turning out, a friendly face is definitely appreciated. Though that will only carry you so far."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3063,
        "fields": {
            "answer": 6115,
            "candidate": 301,
            "answer_feedback": "A symbol of unity is always useful, but they only work if the people are willing to be united."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3064,
        "fields": {
            "answer": 6116,
            "candidate": 301,
            "answer_feedback": "I know that since you're a country you don't really know what it's like having a mom, but most people don't really like being lectured at. Don't expect to get far on this."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3065,
        "fields": {
            "answer": 6117,
            "candidate": 301,
            "answer_feedback": "The occasional call for unity interrupting the partisan shouting match is an amusing display of irony for most viewers, but you did get a lot of eyes on you."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3066,
        "fields": {
            "answer": 6119,
            "candidate": 301,
            "answer_feedback": "Newsom took the attacks against him with dignity, with DeSantis lobbing attacks throughout the debate. The conclusion is that either Newsom is a pushover or that DeSantis is a bully."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3067,
        "fields": {
            "answer": 6120,
            "candidate": 301,
            "answer_feedback": "Surprisingly, Hannity does what you hoped. Besides occasionally allowing Ron to go over time, both participants were held to the rules. It wasn't a civil debate, but it could've been worse."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3068,
        "fields": {
            "answer": 6121,
            "candidate": 301,
            "answer_feedback": "As the legal process drags on your opposition will be more than happy to milk this case for all its worth. Let's hope you can keep up."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3070,
        "fields": {
            "answer": 6125,
            "candidate": 301,
            "answer_feedback": "A decent idea on paper, but not as effective as you'd think. You probably should've considered that most people don't remember their dreams after they wake up."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3071,
        "fields": {
            "answer": 6126,
            "candidate": 301,
            "answer_feedback": "Millions of Americans watch in bemusement as a series of commercials with a flag-clad woman telling them to chill out start appearing on their TVs. They're not listening yet, but you've got their attention."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3074,
        "fields": {
            "answer": 6133,
            "candidate": 301,
            "answer_feedback": "Your increased messaging has its desired effect. The desire for unity increases on a nationwide scale, here's hoping that you can build on it."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3075,
        "fields": {
            "answer": 6136,
            "candidate": 301,
            "answer_feedback": "You arrive at Mount Vernon on the morning of the 22nd. You visit your father's tomb and pay your respects. Despite never knowing him, you miss him dearly. \"I will make you proud\" you say to him, as you leave to get back to work."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3076,
        "fields": {
            "answer": 6138,
            "candidate": 301,
            "answer_feedback": "You want to take on the man who bullied his way into the presidency? Alrighty then..."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3077,
        "fields": {
            "answer": 6142,
            "candidate": 301,
            "answer_feedback": "It's a little too late to have him change rhetoric now, but your push has its effect. Trump tones it down and his more level-headed followers follow suit. You know that this won't last, especially if he's found-"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3078,
        "fields": {
            "answer": 6143,
            "candidate": 301,
            "answer_feedback": "Trust? The voting public haven't been able to trust damn near anyone for decades. They're not going to start now, or after the trial, especially if he's found-"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3079,
        "fields": {
            "answer": 6145,
            "candidate": 301,
            "answer_feedback": "You hear that buzzing? Those are the hornets from the nest you just kicked."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3080,
        "fields": {
            "answer": 6146,
            "candidate": 301,
            "answer_feedback": "Well... fair enough. No one can claim they weren't efficient."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3084,
        "fields": {
            "answer": 6159,
            "candidate": 301,
            "answer_feedback": "Barack pulls out strong voice and charm that got him elected back in 2008, giving a speech that enraptures the entire crowd. A face from \"simpler\" times giving a message from \"simpler\" times, and absolutely nailing it. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3085,
        "fields": {
            "answer": 6160,
            "candidate": 301,
            "answer_feedback": "Bit by bit you mold Walz into a perfect tool of unity. A humble former teacher and coach that even some Republicans can't help but like, with all the partisan jabs kept tightly under lock and chain."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3086,
        "fields": {
            "answer": 6163,
            "candidate": 301,
            "answer_feedback": "The woman's been Vice President for almost four years now. I'm not sure how much of a difference perception wise you can make in just three months."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3087,
        "fields": {
            "answer": 6164,
            "candidate": 301,
            "answer_feedback": "You watch as Kennedy's fanatics cling tightly to the torch of \"Independent Thinking\", whatever that means. Some will still vote for Kennedy, some will drift to the two main parties, others will stay at home as an act of \"noble protest\". The nation moves on."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3089,
        "fields": {
            "answer": 6167,
            "candidate": 301,
            "answer_feedback": "The young and disillusioned hear you out, feeling that you to be someone that understands their grievances. The conspiratorial and bitter write you off as a distraction, trying to turn them away from their crusade against \"the enemy\"."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3090,
        "fields": {
            "answer": 6170,
            "candidate": 301,
            "answer_feedback": "Well, would you look at that, I think this is the first time in history that a literal country's been tongue tied. I'll put you down for \"No comment\"."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3091,
        "fields": {
            "answer": 6172,
            "candidate": 301,
            "answer_feedback": "When it comes to Supreme Court decisions most people don't care if it's constitutional, they care if it's \"right\". And to anyone not wearing a MAGA hat, this decision is the dictionary definition of \"wrong\"."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3092,
        "fields": {
            "answer": 6175,
            "candidate": 301,
            "answer_feedback": "Your fears about the future are reflected by the more forward-thinking voters. Unfortunately, most voters only care about the next 4 months, and how this decision can be used to get their side into the White House."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3093,
        "fields": {
            "answer": 6176,
            "candidate": 301,
            "answer_feedback": "The Address goes on unchanged. It's as uneventful as expected, with the exception of a shouting protester and heckling from Representative Greene. It will be banished to the land of historical footnotes, like most Addresses are."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3094,
        "fields": {
            "answer": 6180,
            "candidate": 301,
            "answer_feedback": "Your ads are seen by millions of people, but they don't stay with many. All anyone can talk about is Biden's horrid performance and what it means for the rest of the campaign."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3095,
        "fields": {
            "answer": 6181,
            "candidate": 301,
            "answer_feedback": "Trump's restrained demeanor stands sharply against Biden's doddering performance, with him coming of as a man full of vigor in a competition between old geezers. You've given his polling an accidental boost."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3096,
        "fields": {
            "answer": 6182,
            "candidate": 301,
            "answer_feedback": "Biden ended his debate performance with a few solid calls for unity and civility, but his stumbling performance in the first part of the debate is all anyone will remember."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3097,
        "fields": {
            "answer": 6183,
            "candidate": 301,
            "answer_feedback": "The moderators keep both candidates strictly within the rules of the debate, but both Trump and Biden simply adapt their tactics to fit within the bounds. Combined with Biden's unexpectedly bad performance, this debate has turned out just as divisive as expected."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3098,
        "fields": {
            "answer": 6184,
            "candidate": 301,
            "answer_feedback": "The Blues stamp the word \"Felon\" on every picture of Trump they can find. The Reds proclaim the death of the American justice system. A new powder keg just blew."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3100,
        "fields": {
            "answer": 6188,
            "candidate": 301,
            "answer_feedback": "Happy Birthday, America! ♡"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3104,
        "fields": {
            "answer": 6192,
            "candidate": 301,
            "answer_feedback": "The people hear your message loud and clear. Republican and Democrat alike come together in agreement. Things have gone too far."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3105,
        "fields": {
            "answer": 6196,
            "candidate": 301,
            "answer_feedback": "A few last-minute changes are made to the ending of the platform's preamble denouncing partisan division, though notably tossing blame at the Dems as the \"main contributors\". You suppose it's better than nothing."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3106,
        "fields": {
            "answer": 6199,
            "candidate": 301,
            "answer_feedback": "Trump stands on the convention stage recounting his near-death experience in Butler, getting more emotional than most people have ever seen him. He makes a call for unity and peace for his country. Only time will tell if that call is answered."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3107,
        "fields": {
            "answer": 6200,
            "candidate": 301,
            "answer_feedback": "The moderators do their best, but soon enough the debate devolves into a three-way fight between Trump, Harris, and the two moderators. A pitiful spectacle."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3108,
        "fields": {
            "answer": 6201,
            "candidate": 301,
            "answer_feedback": "You end up creating the single most uncomfortable debate in history as both candidates try and fail to mask their desires to verbally tear each other down. Your only consolation is knowing it probably could've been worse."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 3109,
        "fields": {
            "answer": 6202,
            "candidate": 301,
            "answer_feedback": "\"In Springfield, they're eating the dogs. The people that came in, they're eating the cats. They're eating—they're eating the pets of the people that live there.\"\nIf you had a head, you'd have smashed it through a wall."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42515,
        "fields": {
            "answer": 6127,
            "candidate": 301,
            "answer_feedback": "\"civilityforamerica.com\" goes up on November 7th, along with its associated YouTube, X, and TikTok accounts. It'll take time to gain followers, but it seems the few people that've found you are onboard."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42516,
        "fields": {
            "answer": 6118,
            "candidate": 301,
            "answer_feedback": "Your influencing worked... for the first few questions. Then Newsom made a remark about DeSantis' response to Hurricane Ian and the gloves came off. So much for civility."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42517,
        "fields": {
            "answer": 6129,
            "candidate": 301,
            "answer_feedback": "Probably for the best, though your opposition will be more than happy to fill the space left by your silence."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42518,
        "fields": {
            "answer": 6130,
            "candidate": 301,
            "answer_feedback": "Civil discussion? About Israel and Palestine? HAHAHAHAHAHAHAHAHAHAHAHAHAHA"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42519,
        "fields": {
            "answer": 6131,
            "candidate": 301,
            "answer_feedback": "The Blues say you're a monster to not condemning Israel's genocide. The Reds say you're abandoning America's ally to terrorists. Everyone gets angrier. Well done. :)"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42520,
        "fields": {
            "answer": 6122,
            "candidate": 301,
            "answer_feedback": "Those who loathe Donald Trump ignore your clarification and accuse you of defending the most dangerous man in the country. Though calmer heads appreciate your unbiased argument."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42521,
        "fields": {
            "answer": 6123,
            "candidate": 301,
            "answer_feedback": "Some take this as you wishing that Trump had been charged with treason years ago, which riles up the MAGA crowd."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42522,
        "fields": {
            "answer": 6208,
            "candidate": 301,
            "answer_feedback": "Just because a politician says they stand for unity, doesn't mean that they do, but that's beside the point. The status quo will go on."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42523,
        "fields": {
            "answer": 6209,
            "candidate": 301,
            "answer_feedback": "That's... a morbid way to look at him. Despite that, your influence is having an effect, with Joe's speeches moving away from the \"Battle for the Soul of the Nation\" tone they've usually had."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42524,
        "fields": {
            "answer": 6134,
            "candidate": 301,
            "answer_feedback": "What's the old expression? \"Violence only begets more violence\"? It's a similar principle when it comes to politics. Attacking angry people just makes them angrier."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42525,
        "fields": {
            "answer": 6135,
            "candidate": 301,
            "answer_feedback": "Your targeted marketing hits its mark. With the two parties always fighting over them, swing voters appreciate some positive messaging."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42526,
        "fields": {
            "answer": 6144,
            "candidate": 301,
            "answer_feedback": "Not exactly a strong argument to make these days. Especially with one of the most unpopular Courts in modern history."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42527,
        "fields": {
            "answer": 6137,
            "candidate": 301,
            "answer_feedback": "Sometimes you got to know when to hold 'em and know when to fold 'em. And right now it's folding time."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42528,
        "fields": {
            "answer": 6140,
            "candidate": 301,
            "answer_feedback": "Your conversation with Trump goes relatively well, apart from a not-so-subtle attempt to flirt with you. You can't be certain that he remembered talking to you after waking up, you do notice a chilling of rhetoric for the next rally or two but get a feeling it won't go much further than that."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42529,
        "fields": {
            "answer": 6177,
            "candidate": 301,
            "answer_feedback": "Your influence was a successful, with Biden giving a much more reserved performance than expected. Unfortunately, this left an opening for Rep. Greene to badger the President throughout the whole speech."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42530,
        "fields": {
            "answer": 6178,
            "candidate": 301,
            "answer_feedback": "Senator Britt seems to have taken your hints too literally, giving what many consider to be the dullest response to a State of the Union Address in history. A few days later, SNL parody the response by having Britt played by a text to speech program."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42531,
        "fields": {
            "answer": 6141,
            "candidate": 301,
            "answer_feedback": "Most on the onlookers can't contain their anxieties as the events are unfolding. The implications are too great. Speculation runs rampant of what could come with the verdict, especially if he's found-"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42532,
        "fields": {
            "answer": 6173,
            "candidate": 301,
            "answer_feedback": "This is a sentiment large portions of the country are sympathetic to, but those on the winning side seem to not care."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42535,
        "fields": {
            "answer": 6169,
            "candidate": 301,
            "answer_feedback": "Those who want Biden to stay as the nominee don't appreciate you dragging those older examples back up. Meanwhile every Biden critic feels more vindicated than ever."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42536,
        "fields": {
            "answer": 6168,
            "candidate": 301,
            "answer_feedback": "It seems that politicians' devotion to the \"will of the people\" has its limits. And those limits have been reached. Let's see if the people notice."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42537,
        "fields": {
            "answer": 6193,
            "candidate": 301,
            "answer_feedback": "Your sentiment is one thought by many. The politicians will hold themselves in check for a while, but not forever."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42538,
        "fields": {
            "answer": 6194,
            "candidate": 301,
            "answer_feedback": "All across the nation, thousands of computers and smartphones being to malfunction or even straight up break. Your outburst of anger has left people even further on edge."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42539,
        "fields": {
            "answer": 6195,
            "candidate": 301,
            "answer_feedback": "It makes sense this would bring up some awful memories for you. Take all the time you need."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42540,
        "fields": {
            "answer": 6198,
            "candidate": 301,
            "answer_feedback": "Vance gives a passionate speech about wanting to be a Vice President for all Americans. Most people outside the convention, even Republicans, probably won't see it. However, some part of you hopes that maybe it'll serve as the start of something greater for the elections to come."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42541,
        "fields": {
            "answer": 6153,
            "candidate": 301,
            "answer_feedback": "With Biden no longer the nominee, most Americans are content to ease up on him as they shift their gaze to Harris. It won't be a graceful exit, but it'll definitely be easier on him than suffering another term."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42542,
        "fields": {
            "answer": 6154,
            "candidate": 301,
            "answer_feedback": "Your railing against behind-the-scenes political maneuvering has drawn greater attention to the shadiness of the whole thing than it would have had otherwise. The Reds got a new attack point and the Blues got a new reason to distrust their party, whoops."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42543,
        "fields": {
            "answer": 6155,
            "candidate": 301,
            "answer_feedback": "It seems like everyone's in agreement with you here, they've all had enough chaos so far. Though it is expected that Harris will serve at Biden's replacement, there is a rush to make it official, no time for rage."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42544,
        "fields": {
            "answer": 6162,
            "candidate": 301,
            "answer_feedback": "With her sudden assumption of a presidential campaign, Harris is already working overtime to unite her party behind her. With your pushing, that call unity extends further out. Hopefully, she keeps this up."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42545,
        "fields": {
            "answer": 6156,
            "candidate": 301,
            "answer_feedback": "Chants about Palestine ring outside the Convention Hall for all four days. But thankfully, none of it escalates into something worse. 68' avoided."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42546,
        "fields": {
            "answer": 6157,
            "candidate": 301,
            "answer_feedback": "Biden delivers a passionate speech about the importance of unity, unfortunately his status as a lame duck President has the whole thing written off as a politically flavored retirement speech."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42547,
        "fields": {
            "answer": 6158,
            "candidate": 301,
            "answer_feedback": "You influence Harris enough to give a great acceptance speech. Unfortunately, to your and everyone else's surprise, Harris actually spoke three times during the Convention which leaves your efforts divided in thirds."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42550,
        "fields": {
            "answer": 42533,
            "candidate": 301,
            "answer_feedback": "To you and everyone else's surprise, the debate turned out amazingly civil. Both candidates were respectful of one another, apart from a few flare ups. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42551,
        "fields": {
            "answer": 42548,
            "candidate": 301,
            "answer_feedback": "Vance keeps his composure for most of the debate, but some prodding from the moderator about January 6th, causing a noticeable outburst that soon circulates online."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42552,
        "fields": {
            "answer": 42549,
            "candidate": 301,
            "answer_feedback": "Walz comes out of the debate looking like a pushover, not holding Vance accountable during some very clear opportunities. Democrats are suddenly very anxious about their ticket."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42555,
        "fields": {
            "answer": 42534,
            "candidate": 301,
            "answer_feedback": "Americans from Hawaii to Maine are drenched in your message of unity. Hopefully it will be enough to keep your opposition from victory."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42556,
        "fields": {
            "answer": 42553,
            "candidate": 301,
            "answer_feedback": "Focusing on where your message hits the hardest isn't a bad strategy. Let's just hope it's enough to keep your opposition from reaching victory."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 42557,
        "fields": {
            "answer": 42554,
            "candidate": 301,
            "answer_feedback": "It's a risky strategy. Chipping away at your opposition's strongest source of support will definitely have an impact on the result, but who knows if it'll be to your benefit."
        }
    }
]

campaignTrail_temp.candidate_image_url = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F27%2F2f%2F11%2F272f11b07cb79c202975854f8ed852ba.jpg&f=1&nofb=1&ipt=d074fcbbbadf254fdcf715f218033ee43c542d3ce5f3518268c19c7373bfc148&ipo=images';
campaignTrail_temp.running_mate_image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/ColumbiaStahrArtwork.jpg/240px-ColumbiaStahrArtwork.jpg';
campaignTrail_temp.candidate_last_name = 'The Spirit';
campaignTrail_temp.running_mate_last_name = 'Columbia';
campaignTrail_temp.running_mate_state_id = '';
campaignTrail_temp.player_answers = [];
campaignTrail_temp.player_visits = [];
campaignTrail_temp.answer_feedback_flg = 1;
campaignTrail_temp.game_start_logging_id = '3660535';

endingPicker = (out, totv, aa, quickstats) => {
    let used = false;
    let orderID = [aa[0].candidate, aa[1].candidate, aa[2].candidate];
    let e = campaignTrail_temp;
    let html;  
    e.pages = []
    e.executable = []
    orderID = [aa[0].candidate, aa[1].candidate, aa[2].candidate];
    if (quickstats[0] == 538) {
        unlockAchievement("HOPEMAXXING");
    }
    if (quickstats[0] == 306) {
        unlockAchievement("IT HAPPENED AGAIN");
    }
    if (aa[0].candidate == 300 && aa[0].electoral_votes == 312) {
        unlockAchievement("Art Imitates Life");
    }
    if (aa[0].electoral_votes == 269) {
    unlockAchievement("National Equilibrium");
    }
    if(aa[0].electoral_votes < 269){
        unlockAchievement("Pulled Away from the Abyss");
    }
    if(aa[0].candidate == 302 && aa[0].electoral_votes >= 270){
        unlockAchievement("Kamala's Firestorm");
    }
    if(aa[0].candidate == 300 && aa[0].electoral_votes >= 270){
        unlockAchievement("Donald's Inferno");
    }
}

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
    name: "Tunes of the American Spirit",
    tracklist: [
      {
        "name": "Raindrops Keep Falling On My Head - Cover by 김효린 Kimhyorin",
        "url": "https://files.catbox.moe/xej179.mp3"
      },
      {
        "name": "This Land is Your Land - Cover by folksandhymns",
        "url": "https://files.catbox.moe/89117o.mp3"
      },
      {
        "name": "You And Me Against The World - Cover by Tyra Juliette",
        "url": "https://files.catbox.moe/520vb2.mp3"
      },
      {
        "name": "America The Beautiful - Cover by Jill Andrews",
        "url": "https://files.catbox.moe/u5hb2w.mp3"
      },
      {
        "name": "Brave - Cover by Carley Hutchinson",
        "url": "https://files.catbox.moe/c4b6ee.mp3"
      },
      {
        "name": "American Heart - Faith Hill",
        "url": "https://files.catbox.moe/cfa505.mp3"
      }
    ]
  }
}

// Set up new music player

newMusicPlayer()

campaignTrail_temp.jet_data = [{
    "nicknames": {
        "300": "Red Rage",
        "301": "American Spirit",
        "302": "Blue Rage"
    }
}
]
