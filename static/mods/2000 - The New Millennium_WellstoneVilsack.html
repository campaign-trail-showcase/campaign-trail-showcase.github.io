
campaignTrail_temp.cyoa = true;

// pk -> index lookup for questions
let _questionIdxByPk = null;

function _rebuildQuestionIdxMap() {
  _questionIdxByPk = new Map();
  const arr = campaignTrail_temp.questions_json;
  for (let i = 0; i < arr.length; i++) {
    _questionIdxByPk.set(Number(arr[i].pk), i);
  }
}

// returns the true array index (>= 0) or -1 if not found
function getQuestionIndexFromPk(pk) {
  const n = Number(pk);
  if (!_questionIdxByPk) _rebuildQuestionIdxMap();

  let idx = _questionIdxByPk.get(n);
  // if map is stale, rebuild once
  if (idx == null || campaignTrail_temp.questions_json[idx]?.pk !== n) {
    _rebuildQuestionIdxMap();
    idx = _questionIdxByPk.get(n);
  }
  return idx ?? -1;
}

// index to assign into question_number before nextQuestion()
function getJumpIndexFromPk(pk) {
  const idx = getQuestionIndexFromPk(pk);
  return idx >= 0 ? idx - 1 : -1;
}

// for backwards compatibility
function getQuestionNumberFromPk(pk) {
  return getJumpIndexFromPk(pk);
}

function questionSwapper(pk1, pk2) {
    const questionData = campaignTrail_temp.questions_json;
    
    // find indices of the questions
    const index1 = getQuestionIndexFromPk(pk1);
    const index2 = getQuestionIndexFromPk(pk2);
    
    // validate both questions exist
    if (index1 === -1 || index2 === -1) {
        console.warn(`questionSwapper: Could not find question(s) with pk ${pk1} and/or ${pk2}`);
        return false;
    }
    
    // swap the entire question objects
    [questionData[index1], questionData[index2]] = [questionData[index2], questionData[index1]];
    
    // rebuild the index map since positions changed
    _rebuildQuestionIdxMap();
    
    return true;
}

function answerSwapper(pk1, pk2, takeEffects = true) {
    // hardcoded JSON data for answers
    const answerData = campaignTrail_temp.answers_json;

    // find the indices of the objects with the specified PKs
    const index1 = answerData.findIndex(item => item.pk === pk1);
    const index2 = answerData.findIndex(item => item.pk === pk2);

    // check if objects with those PKs exist
    if (index1 === -1 || index2 === -1) {
        return;
    }

    // swap the question values
    const tempQuestion = answerData[index1].fields.question;
    answerData[index1].fields.question = answerData[index2].fields.question;
    answerData[index2].fields.question = tempQuestion;

    // if takeEffects is true, answers swap effects also
    if (takeEffects) {
        const otherJsons = [
            campaignTrail_temp.answer_score_global_json,
            campaignTrail_temp.answer_score_issue_json,
            campaignTrail_temp.answer_score_state_json
        ];

        otherJsons.forEach(jsonData => {
            jsonData.forEach(item => {
                if (item.fields.answer === pk1) {
                    item.fields.answer = pk2;
                }
            });
        });
    }
}

// CYOA Variables
var Naderdropout = 0;

cyoAdventure = function (a) {
    ans = campaignTrail_temp.player_answers[campaignTrail_temp.player_answers.length-1];
    // question swap CYOA here
    if (ans == 3502 || ans == 3501) {
        if (Naderdropout >= 2) {
            questionSwapper(12852, 13067);
        }
    }

    if (ans === 12854) {
        Naderdropout += 1;
    }

    if (Naderdropout == 1 ) {
        e.candidate_json[16].fields.first_name = "Stephen";
        e.candidate_json[16].fields.last_name = "Gaskin";
    }

    if (Naderdropout == 2 ) {
        e.candidate_json[16].fields.first_name = "Tim";
        e.candidate_json[16].fields.last_name = "Pennny";
    }

}

campaignTrail_temp.questions_json = [
    {
        "model": "campaign_trail.question",
        "pk": 397,
        "fields": {
            "priority": 0,
            "description": "Standing in front of a cheering crowd, you feel as if your life has come to this moment. A gust of cool fresh air comes over you, reminding you of your time in Minnesota. You take a moment to close your eyes and listen to the crowd, becoming a part of its mania. Opening your eyes again you see all the people, you take a moment to look at their features, you find assurance in their joy. You really did it, you’re the Democratic Nominee. Give them a hell of a show.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12852,
        "fields": {
            "description": "There's no 2 ways about it: Nader is a problem. His left wing splinter campaign was started as a response to dominance of Southern Blue Dogs over the Democratic party ever since the ascent of Bill Clinton to office in 1996, and has been polling at alarmingly high numbers in recent years due to much of the same Clinton era fatigue that propelled you to your status as a Democratic Party frontrunner. It will be worth it to pay the price to get rid of him. "
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 367,
        "fields": {
            "priority": 1,
            "description": "After a tense Republican Primary, businessman Steve Forbes was able to edge out a victory over Texas Governor George W. Bush. This comes as an upset as at the start of the race, the popular Texas governor was polling ahead. Forbes is known for running the Forbes magazine, his support for a flat tax, and as a commentator from the more Conservative part of the Republican party. How do you wish to gear your campaign to handle this new threat?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 370,
        "fields": {
            "priority": 1,
            "description": "It appears you have selected Iowa Governor Tom Vilsack as your running mate, this is contrary to a lot of speculation suggesting that you were going to pick someone who more resembled Clinton in home location and ideology. Still, Vilsack is by no means an unpopular character and he could prove beneficial in courting rural and moderate voters. Why did you choose Vilsack as your running mate?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 344,
        "fields": {
            "priority": 2,
            "description": "27 years ago, the Burger court ruled in Roe V Wade that the right to an abortion is constitutionally protected across America. Overturning Roe v. Wade is a major cause of the pro-life Christian right and Forbes has openly declared himself a pro-life candidate. You have fervently supported throughout your career, causing you to see a lot of support among feminists. Abortion currently holds a lukewarm majority support but is still an issue you will be expected to contend with.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 349,
        "fields": {
            "priority": 2,
            "description": "The most obvious part of the Forbes campaign is his advocacy for a flat tax, it has met mixed reception and general curiosity, especially after he managed to clinch the nomination in a heated primary. Many of his supporters say it’s a sound plan to incentivize economic activity and get around loopholes, but it has faced harsh criticism from the left for its regressivism.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 345,
        "fields": {
            "priority": 2,
            "description": "Forbes has criticized your environmentalist position as anti growth and harmful to areas dependent on natural fuels for their economy. Certain states like West Virginia have been hostile to your campaign given their ties to the fossil fuel and coal industries. How would you like to handle the issue of the environment?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12853,
        "fields": {
            "description": "There are few men in politics so openly controversial as this year's Reform Party Candidate, ultraconservative political commentator Pat Buchanan. Having an association with the Republican Party going all the way back to the Nixon administration, after facing failure in 1996 to secure the Republican primary, he's jumped ship and taken his fiery populism to the Reform Party, vowing to restore America by, predictably, retrenching from foreign affairs and closing the border. What do you wish to say or do about Buchanan's candidacy?"
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 346,
        "fields": {
            "priority": 2,
            "description": "Partial-privatization of the social security apparatus has been a major point of Steve Forbes’ campaign and he has claimed that it will yield better returns. This has been met with an array of backlash and supporters, some citing it as a plan that would put seniors at risk, while others extol it as a way to maximize gains for retirees.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 348,
        "fields": {
            "priority": 2,
            "description": "The issue of gay marriage has come to light in accordance with the rising acceptance of homosexuality which has trended into the positives in the twilight of the 90s. Conservatives have been pushing fiercely for an amendment which would outlaw homosexual marriage across the land. Your supporters are of course hoping you will provide pushback on the narrative and offer a more progressive alternative, however gay marriage is still an unpopular policy and 2/3rds of Americans are against it.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 343,
        "fields": {
            "priority": 2,
            "description": "Many say you’ve staked out a position on the dovish side of the foreign policy debate with your opposition to NATO’s bombing of Serbia in the wake of the genocide in Kosovo. Forbes has gone on to say that you are weak on countering foreign dictatorships and would let dictators like Milosevic walk all over America. Some are somewhat uneasy with your dovishness, wanting a harder line on foreign policy. How do you address this?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 347,
        "fields": {
            "priority": 2,
            "description": "Some advisors are suggesting you tone back your socially progressive tone on a lot of issues and try to focus more on economic matters in which you prove to be less controversial. The chief fear is that your progressivism could be the deciding factor in a lot of rural counties which may be able to swing a few states your way. How do you wish to address these concerns?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 351,
        "fields": {
            "priority": 2,
            "description": "Your humble beginnings as a teacher from Minnesota have always been something that has added a bit of luster to the dizzying heights as a senator and now presidential candidate. Forbes on the other hand is a wealthy media magnate who has been blowing large amounts of his own cash from his business on his campaign, many of your advisors are suggesting you make the contrast between you and him on a personal level a bigger part of the campaign.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 350,
        "fields": {
            "priority": 2,
            "description": "The impact of the Monica Lewinsky affair has mostly settled but the stain of it has not fully come off the party yet. While the president being involved in adultery may not be new, it has been weaponized and the extent of it involving a subordinate has drawn shock and disgust. You have been asked to comment on it as the official nominee of the Democratic Party.\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 352,
        "fields": {
            "priority": 3,
            "description": "The race is a dead heat, a slim majority of pollsters are putting Forbes in the lead, enough to make your advisors paranoid. Losing momentum would be the end of your campaign, but it’s hard to sustain your momentum on meager funds and a Forbes dominated media racket. ",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 358,
        "fields": {
            "priority": 3,
            "description": "Conservatives have decried your campaign ever since the primaries as “Socialistic,” “Communistic,” and “Radical,” stoking fears among moderates. Conservative media outlets are feeding into this by spreading the narrative to large parts of America that you are a beltway radical candidate chosen by the ACLU and Liberal college elites. How do you wish to address this sentiment and clear the air?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 362,
        "fields": {
            "priority": 3,
            "description": "Your support for a single-payer National Healthcare system has been a rather major part of your campaign from day 1, even making an appearance as one of your key issues in your famous “Fast Paced Paul” ad. The funding and specifics of such have been relatively light so far due to it not being a hot button topic but with your nomination it has risen to the national conversation. What would you do as president if elected, to make good on your promise of quality universal healthcare for all?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 375,
        "fields": {
            "priority": 3,
            "description": "The Labor Management Relations Act of 1947, better known as the Taft-Hartley Act stands today as a monumental piece of labor relations legislation. Its scope is quite broad, legalizing Right to Work laws, banning general strikes, and banning closed shops. You have spoken against it before, however it has become quite entrenched and accepted in the Democratic party despite President Truman’s overridden veto of it in 1947. Repealing Taft-Hartley is something of a white whale for unionists and leftists.\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 391,
        "fields": {
            "priority": 3,
            "description": "The issue of free trade has increasingly taken a backseat as the Democratic and Republican parties have formed a supermajority on the issue of trade, strongly in the favor of free trade. However you in particular have thus far been an outsider on the issue, being markedly more protectionist and opposing job offshoring, going as far as to vote against The North American Free Trade Agreement that passed with bipartisan support. Many moderate Democrats feel somewhat uncomfortable with your history of protectionism and wish to see a more pro-trade policy taken while many, especially from your home turf in the Midwest, think you should continue to run in opposition to the free trade supermajority.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 356,
        "fields": {
            "priority": 3,
            "description": "Over the course of your campaign you have endorsed some policies that some are worried may cause a ballooning in the debt and the deficit. This has led to Forbes making fiscal responsibility an extensive part of his campaign, hammering you as being fiscally irresponsible on the other hand. How will you intend to address this and ",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 363,
        "fields": {
            "priority": 3,
            "description": "The murder of James Byrd Jr., an African American father from Texas, by a group of white supremacists has spurred new debate about hate crime laws across the country. Despite conservative pushback, President Clinton has spoken about the importance of a law designating and tackling hate crimes. Your key base fervently supports these, however some more right wing swing voters may feel that it is unfair to create such a distinction in crimes.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 360,
        "fields": {
            "priority": 3,
            "description": "The issue of education has been rather prevalent this cycle. Steve Forbes has been an adamant supporter of School Choice and government vouchers as an alternative for offering public schooling. This position has a wide amount of supporters and detractors from different groups ",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 392,
        "fields": {
            "priority": 3,
            "description": "Shock and terror. A terrorist suicide bombing on the USS Cole by Islamic group Al Qaeda leaves 17 dead, including the 2 bombers. This has caused a dramatic call from the American people for some form of military action and a bolstering of defense measures. You have in the past been quite dovish but the popular opinion here might force you to take on a harder line, lest you be discarded as a foolish idealist.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 359,
        "fields": {
            "priority": 3,
            "description": "The returning of Elian Gonzalez of Cuba back to Cuba by the Clinton administration has met backlash from large parts of the Cuban-American population. Cuban-Americans, located extensively in the swing state of Florida, have been demanding a harsher line taken on Cuba, including protection of people who escape from Cuba into Florida and the maintenance of the sanction on Cuba. What is your official position on this?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 364,
        "fields": {
            "priority": 3,
            "description": "Do you support the Kyoto Protocol that would focus on the reduction of greenhouse gas emissions?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 385,
        "fields": {
            "priority": -2,
            "description": "What message would you like to focus on to conclude your campaign?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 382,
        "fields": {
            "priority": -1,
            "description": "With the election coming in mere weeks, your advisors have suggested a tour. What states would you like to focus this end of election rally on?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 13067,
        "fields": {
            "description": "Nader's inclusion on the Democratic ticket has effectively vanquished any left opposition of note, bar some fringe Marxist candidates that are unlikely to crack even 10,000 votes. This is not to say you don't have issues. Fellow Minnesotan, Representative Tim Penny, running under the newly formed American Independent Liberty Party has arisen to position himself as the new \"candidate for the center\" with a platform appealing to both Perot-era Reform Party voters and Blue Dog Democrats who feel increasingly disillusioned with the Wellstone/Nader ticket. How do you wish to deal with him?"
        }
    }
]

campaignTrail_temp.answers_json = [
    {
        "model": "campaign_trail.answer",
        "pk": 3310,
        "fields": {
            "question": 343,
            "description": "I think the question is really do we want to live in a society that would rather buy bombs than food for children? I mean this incessant militarism is toxic and harmful for America’s most vulnerable and needy who need support."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3311,
        "fields": {
            "question": 343,
            "description": "I do not disavow how I voted regarding the bombing of Serbia, however I do want a strong US military and I do wish to counteract dictatorship across the globe, to say otherwise is dishonest politics on his part."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3313,
        "fields": {
            "question": 343,
            "description": "I now regret that decision and would vote differently today. I am an adamant supporter of a strong America and a strong military."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3314,
        "fields": {
            "question": 344,
            "description": "Yes I support abortion, a woman has a choice over what happens to her own body, and the Roe decision was the right call on the part of the Supreme Court, I will appoint judges who support Roe V Wade."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3315,
        "fields": {
            "question": 344,
            "description": "Roe V Wade was an unconstitutional decision and it should ultimately be given back to congress and the states to legislate on. That said, I personally support the legality of abortion and wish to see a bill legalizing it."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3316,
        "fields": {
            "question": 344,
            "description": "I oppose abortion, it is against my values and I am a pro life candidate."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3318,
        "fields": {
            "question": 345,
            "description": "What’s the alternative? We destroy and pollute the environment just so oil and coal CEO’s can make a buck? I’m not going to fold for this"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3319,
        "fields": {
            "question": 345,
            "description": "From day 1 I will seek to create a board creating new, green jobs that will have better pay and be better for the natural beauty of our land. I will make sure that West Virginia and other states are brought forth, not left behind."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3320,
        "fields": {
            "question": 345,
            "description": "I do not want to take away jobs in natural fuels. I understand wholeheartedly the importance of that to many local economies, I simply want to encourage people to be more mindful of their waste and for companies to prioritize being green going forward. It's a transition and we won’t leave people behind."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3321,
        "fields": {
            "question": 345,
            "description": "I am a pro coal and pro oil candidate, I know the importance of these industries to millions of American workers and I will be fighting for them and for their jobs to be kept safe."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3322,
        "fields": {
            "question": 346,
            "description": "The stock market is too volatile to be trusted with people’s retirements. I ask any seniors if they would like to be gambling on their retirement. It's too risky and could come to harm Americans depending on what’s happening on Wall Street. I will keep Social Security the same as it is now."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3323,
        "fields": {
            "question": 346,
            "description": "I think it’s a novel idea, and I would be quite open to implementing it myself."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3324,
        "fields": {
            "question": 346,
            "description": "Right now, social security is actually quite underfunded and I think more could be done to make social security taxes more progressive and improve benefits, instead of making it dependent on corporate profits."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3327,
        "fields": {
            "question": 347,
            "description": "Absolutely not. I am a progressive candidate who is for helping out those in need and that means supporting justice on an economic and social level."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3328,
        "fields": {
            "question": 347,
            "description": "If we are careful we could likely get a best of both worlds situation here. I'll try to angle my speech in different ways based on the crowd and run more regionally segregated ads, but maintain my overall liberal stances for my full platform."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3329,
        "fields": {
            "question": 347,
            "description": "I can afford to downplay or skin back on a few issues, I’m already seen as quite progressive on many issues so taking a more lukewarm and moderate position on some more hot button issues isn't going to turn away much of the left."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3330,
        "fields": {
            "question": 348,
            "description": "I support anti-discrimination protections of homosexuals, they have the dignity to live in a society free of fear and hate. I, however, do not support gay marriage being legalized on the federal level as I believe that marriage is a thing that happens between man and woman and hope to see that discussed and debated on the state level."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3331,
        "fields": {
            "question": 348,
            "description": "The way I see it, I don’t see what’s wrong with a man and another man getting married. If they are in love, then they are in love, why deny them the same rights as you and me? It would be unfair and wrong."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3332,
        "fields": {
            "question": 348,
            "description": "While marriage is certainly a thing between a man and a woman, I don’t see why we can’t create an entirely separate mechanism for gay couples to express their love. Many states already offer civil unions, I don’t see why we can’t all across America."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3333,
        "fields": {
            "question": 349,
            "description": "A flat tax would be regressive and favor the wealthy while harming common Americans. Instead support a targeted tax cut that would instead give relief to struggling families and workers who need it most."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3334,
        "fields": {
            "question": 349,
            "description": "Switching off the progressive tax system would be a mistake and undeniably bad for common Americans, we should do tax cuts across the board given the current budgetary surplus to stimulate the American economy."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3335,
        "fields": {
            "question": 349,
            "description": "Instead of cutting or changing taxes, we should instead focus on using these funds for things like a national healthcare system and to create a board for consumer protection to help common people like you or me."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3337,
        "fields": {
            "question": 350,
            "description": "I don’t see the relevance, I’m not Bill Clinton."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3338,
        "fields": {
            "question": 350,
            "description": "What President Clinton did was a gross violation of trust and a mishandling of his position. I was disgusted to learn of the affair."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3339,
        "fields": {
            "question": 350,
            "description": "What he did was have a relationship that we don’t have the right to commentate on. I don’t think this really belongs in politics, it is solely the business of him and Ms. Lewinsky."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3341,
        "fields": {
            "question": 351,
            "description": "Absolutely, I want to paint a contrast between an honest teacher like me, and a corporate stooge like Forbes who has been rich all his life."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3342,
        "fields": {
            "question": 351,
            "description": "I’m not sure that these character attacks are really “me,” if you get what I mean. I think I’ll just keep it focused on the issues and speak about my fight for progress and unionization."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3344,
        "fields": {
            "question": 352,
            "description": "I have to return to basics, organizing, grassroots, getting union people to talk. I can’t beat Forbes on his own turf."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3345,
        "fields": {
            "question": 352,
            "description": "Forbes is leading exactly because he has all the money in the world to blow on this thing, I need some big investor types to bankroll this and get me back on the map."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3359,
        "fields": {
            "question": 356,
            "description": "At the current surplus, we could have everything I have promised with only minimal tax raises, concentrated entirely on those making over 250k a year."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3360,
        "fields": {
            "question": 356,
            "description": "The American worker is taxed enough, we could make it work without a tax hike, revenues have been rising, I have done the math and concluded that tax hikes are not necessary."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3362,
        "fields": {
            "question": 356,
            "description": "A tax hike isn’t always a bad thing, what the average American will be getting out of this is going to overshadow all costs. I am willing to raise taxes across the board."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3366,
        "fields": {
            "question": 358,
            "description": "I am a Democrat in the tradition of previous Democratic administrations, would you say John F. Kennedy was a Socialist? If not, then I’m not one either. I work for people because that is the Democratic way. I am avowedly not a Socialist."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3367,
        "fields": {
            "question": 358,
            "description": "I’m for what helps the people, if you wanna call that Socialism go ahead, I’m a socialist then for all intents and purposes."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3368,
        "fields": {
            "question": 358,
            "description": "People are demanding radical change and a radical candidate. The American system is in many ways broken and I am offering a radical and stark shakeup for the good of the people, this is what they want, call it what you want."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3369,
        "fields": {
            "question": 358,
            "description": "I can actually be quite conservative on some issues, this is just a bad faith attempt to make my candidacy look bad from a hardline radical conservative."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3370,
        "fields": {
            "question": 359,
            "description": "We can’t just take the citizens of another country willy nilly. These are citizens of another nation, while I do support maintaining the Embargo, the wet feet dry feet policy is more responsible."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3371,
        "fields": {
            "question": 359,
            "description": "The Cuban regime is terrible, it is a dictatorship and treats its citizens terribly. I disagree with the return of Elian Gonzalez and the wet feet dry feet policy, we should try to help Cubans escape their regime, which I continue to support an embargo on."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3372,
        "fields": {
            "question": 359,
            "description": "While I think Wet Feet Dry Feet is a fine policy, the embargo has caused a lot of suffering and pain to the Cuban people so I would like it to be lifted."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3373,
        "fields": {
            "question": 359,
            "description": "I don’t know why Cuban-Americans are so adamant on maintaining the embargo and having the US retain Cuban escapees. It only brings more suffering to the people of Cuba who have suffered enough."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3374,
        "fields": {
            "question": 360,
            "description": "Reverting to a school choice program would endanger the availability of education for low income Americans, for that reason I must oppose it."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3375,
        "fields": {
            "question": 360,
            "description": "This is the exact opposite way in which I’d like to take things, we should be increasing the availability and affordability of an education at all levels, including subsidized higher education and increased programs to help low income students afford supplies and lunch."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3376,
        "fields": {
            "question": 360,
            "description": "I think it could be sensible, but only under the provision that it is not an excuse to prioritize the rights of religious schools over secular ones."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3377,
        "fields": {
            "question": 360,
            "description": "I think school choice could really improve the education curriculum, increased competition in an open market system would do a lot to improve education."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3381,
        "fields": {
            "question": 362,
            "description": "I would be entirely fine with a system that merely offers another option to use a public insurance program while maintaining private healthcare as an option."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3382,
        "fields": {
            "question": 362,
            "description": "Single-payer systems all across the world have shown to be very efficient, I have been a long time supporter of it as a system and have faith it could be implemented."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3384,
        "fields": {
            "question": 362,
            "description": "While I may have supported it in the past, I think I should really just try to avoid giving any concrete support for it, it’s not a big deal anyways."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3385,
        "fields": {
            "question": 363,
            "description": "Absolutely, if we had a way to classify these crimes we could see real effects to tackle and prevent similar tragedies."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3386,
        "fields": {
            "question": 363,
            "description": "It would be unfair to other victims to designate any form of special status for these crimes. Crime is crime and we should handle it with severity."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3387,
        "fields": {
            "question": 363,
            "description": "Sure, hate crime laws are a valid start, but that’s just it, a start, we need more investment in low income communities to help meet needs and provide a better education."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3388,
        "fields": {
            "question": 364,
            "description": "Yes, obviously I do, I would be glad to sign off on this."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3389,
        "fields": {
            "question": 364,
            "description": "I feel like the limits imposed are not nearly universal or balanced enough to be truly fair, while I want to keep the world clean I think it is a bad agreement."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3397,
        "fields": {
            "question": 367,
            "description": "I want to run an aggressive campaign, focusing on building up grassroots support via addressing problems faced by common Americans and attacking Forbes as a rich elitist who is out of touch with common Americans and doesn’t know what a day’s work is like."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3398,
        "fields": {
            "question": 367,
            "description": "It would serve me to pull back and moderate a bit on some key issues, despite my position in the party, I would like to emphasize that I am the Democratic candidate and still on many occasions worked dutifully with President Clinton.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3411,
        "fields": {
            "question": 370,
            "description": "These plains and rocky states could be swung in my honest opinion, we want him putting down work out there. I have definite appeal to farmers and rural working people that I think will show in November."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3412,
        "fields": {
            "question": 370,
            "description": "Vilsack has served Iowa dutifully and I think he is a good man and right for the job."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3429,
        "fields": {
            "question": 375,
            "description": "Yes I do endorse a full repeal of it, it is one of the most dangerously anti-labor bills ever signed and I would be proud to do so."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3430,
        "fields": {
            "question": 375,
            "description": "I think some provisions could be amended in a future bill, certainly, a full repeal seems somewhat overboard, there’s important parts in there that are not necessarily anti labor."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3431,
        "fields": {
            "question": 375,
            "description": "I do not want to repeal Taft-Hartley, as much as I am pro-union, repealing it could endanger the economy and prevent necessary actions from taking place."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3457,
        "fields": {
            "question": 382,
            "description": "The South. All the states that Clinton won like Louisiana, Arkansas, Tennessee, Florida, I will bring my pro labor rhetoric down south to win them over."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3458,
        "fields": {
            "question": 382,
            "description": "I wanna spend the last few days on the campaign trail really giving attention to states that have been neglected by politicians in the past, mainly in the plains and Rockies starting in Missouri."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3459,
        "fields": {
            "question": 382,
            "description": "California has grown a lot bluer but I still want to really get it in the bag and make sure Forbes doesn’t pull an upset. Tour across the West Coast, sneak in Arizona maybe."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3460,
        "fields": {
            "question": 382,
            "description": "The Northeast could use some love, there’s states there that I really can’t take for granted, especially New Hampshire, Ohio, and Pennsylvania"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3468,
        "fields": {
            "question": 385,
            "description": "I am the candidate for the American Majority, I stand for what helps the common man and always have throughout my career."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3469,
        "fields": {
            "question": 385,
            "description": "As president I will create economic justice, for too long the wealthy have trampled on the lower 95% and left the common man with very little."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3470,
        "fields": {
            "question": 385,
            "description": "I am a candidate for social progress, gay liberation, racial equality, and freedom to choose what happens with your body. Nobody should feel secondary in America."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3487,
        "fields": {
            "question": 391,
            "description": "The reason why I voted against it is there should’ve been more focus on risk sharing and retraining. I was not opposed to the mere idea necessarily."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3488,
        "fields": {
            "question": 391,
            "description": "NAFTA and other such deals are a way to beat down workers with plummeting wages and weaken unions. I voted against NAFTA because these kinds of things are the kinds of plots that exist to enrich corporations at the expense of Americans."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3489,
        "fields": {
            "question": 391,
            "description": "I would do more to expand free trade as president, it has brought jobs, lower prices, and better deals for Americans. Free trade is an advancement in American policymaking that has actually brought wealth to American workers, despite what many say."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3490,
        "fields": {
            "question": 392,
            "description": "I want a swift and resounding military resolution to this issue. A unilateral display of US force would throw back these terrorists. No American is safe while there are governments harboring these terrorists "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3491,
        "fields": {
            "question": 392,
            "description": "The whole world is watching this happen, and they too are afraid. We need to rally our allies and work with governments in the Middle East to find whoever did this and to attack them accordingly, we cannot afford to be weak when there are lives of people on the line."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3492,
        "fields": {
            "question": 392,
            "description": "Now is not the time to be rash and involve ourselves in anti-Muslim sentiment. We need to bolster our defenses and be ready for something like this again and be ready to, if necessary, prepare an attack."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3501,
        "fields": {
            "question": 397,
            "description": "Don’t change a thing. We’re going to talk about national healthcare, the environment, a woman’s right to choose, this is our moment, and I would be a fool to blow it on chasing the DC consensus. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3502,
        "fields": {
            "question": 397,
            "description": "As Democrats we can’t stop fighting, and we’ve accomplished so much together, and over the next 4, hell 8, years, we can continue our great work."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12280,
        "fields": {
            "question": 349,
            "description": "Instead of ruining our financial future with this fat, irresponsible tax cut, let’s focus on keeping steady with the surplus so we can focus on paying off America’s debt."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12312,
        "fields": {
            "question": 346,
            "description": "Social Security is a ponzi scheme, I would abolish it and let Americans use their own money on improving their lives themselves."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12439,
        "fields": {
            "question": 348,
            "description": "All this talk is just trying to distract from the real issues, like creating a national healthcare system that will ensure that Americans aren’t reliant on a broken insurance system which only serves wealthy insurance companies at the expense of patients and doctors."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12443,
        "fields": {
            "question": 348,
            "description": "I support an amendment to outlaw gay marriage and civil unions. Homosexuality is a sin, it’s time we treat it that way."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12506,
        "fields": {
            "question": 391,
            "description": "The main concern is that it is a violation of our nation’s sovereignty, I mean these deals are us getting ripped off, selling our American nation to subsidize these foreign nations that don't serve us at all. It’s trampling on the rights of Americans and unfair to taxpayers."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12567,
        "fields": {
            "question": 392,
            "description": "This attack was the result of an irresponsible foreign policy which birthed these groups. It underscores the necessity of a humane and rational foreign policy and that will mean a withdrawal from the Middle East so they can rebuild."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12587,
        "fields": {
            "question": 385,
            "description": "We need to focus on pragmatic, smart, and honest government, that means working with everybody to meet them where they are and doing good even in unideal situations."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12854,
        "fields": {
            "question": 12852,
            "description": "I know what Nader wants more than anything is for there to be some actual progress achieved, but he and I know that there's not enough room for the both of us in this election. I'd be willing to give in on a few places of interest if he'll promise not to run, maybe even endorse me."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12913,
        "fields": {
            "question": 12853,
            "description": "Reform is already on it's last legs, and it being hijacked by right wing extremists has made it even more irrelevant. I have no reason to insert myself or my opinions."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12914,
        "fields": {
            "question": 12853,
            "description": "Buchanan and Forbes both represent the worst excesses of cutthroat right wing extremism. Both want to send our nation backwards with social services slashed to the bone and where human rights are not protected."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12915,
        "fields": {
            "question": 12853,
            "description": "Pat Buchanan is hateful and disgusting. Have you seen his comments defending Nazi war criminals? We should not tolerate such hateful dreck being spilled out in our elections."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12916,
        "fields": {
            "question": 12853,
            "description": "This may be a bit underhanded, but what if we were to start pouring money into Buchanan's campaign? He's only going to take from Forbes and he has a real shot at splitting the conservative vote."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 13068,
        "fields": {
            "question": 13067,
            "description": "This is ridiculous. Is the whole party really going to walk out on me because I quashed the issue of leftist dissent? I don't buy it. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 13069,
        "fields": {
            "question": 13067,
            "description": "I'm sure Penny's a good man, but his platform is nothing but corporate handouts and harsh austerity measures that would strangle our social services with paper thin budgets. I am not afraid to openly criticize his run."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 13070,
        "fields": {
            "question": 13067,
            "description": "All I need to do is appeal to my party's innate sense of unity. We all have a strong shared heritage as Democrats that ties us together. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 13071,
        "fields": {
            "question": 13067,
            "description": "By November most of them will forget about Penny if we just naturally pivot to the center, it's a general election campaign, third parties tend to fade, especially if their voting blocs get what they want."
        }
    }
]

campaignTrail_temp.states_json = [
    {
        "model": "campaign_trail.state",
        "pk": 181,
        "fields": {
            "name": "Alabama",
            "abbr": "AL",
            "electoral_votes": 9,
            "popular_votes": 1672551,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 182,
        "fields": {
            "name": "Alaska",
            "abbr": "AK",
            "electoral_votes": 3,
            "popular_votes": 285560,
            "poll_closing_time": 420,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 183,
        "fields": {
            "name": "Arizona",
            "abbr": "AZ",
            "electoral_votes": 8,
            "popular_votes": 1534113,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 184,
        "fields": {
            "name": "Arkansas",
            "abbr": "AR",
            "electoral_votes": 6,
            "popular_votes": 921781,
            "poll_closing_time": 150,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 185,
        "fields": {
            "name": "California",
            "abbr": "CA",
            "electoral_votes": 54,
            "popular_votes": 10965856,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 186,
        "fields": {
            "name": "Colorado",
            "abbr": "CO",
            "electoral_votes": 8,
            "popular_votes": 1741365,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 187,
        "fields": {
            "name": "Connecticut",
            "abbr": "CT",
            "electoral_votes": 8,
            "popular_votes": 1459525,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 188,
        "fields": {
            "name": "Delaware",
            "abbr": "DE",
            "electoral_votes": 3,
            "popular_votes": 327622,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 189,
        "fields": {
            "name": "Florida",
            "abbr": "FL",
            "electoral_votes": 25,
            "popular_votes": 6963110,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 190,
        "fields": {
            "name": "Georgia",
            "abbr": "GA",
            "electoral_votes": 13,
            "popular_votes": 2596804,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 191,
        "fields": {
            "name": "Hawaii",
            "abbr": "HI",
            "electoral_votes": 4,
            "popular_votes": 367951,
            "poll_closing_time": 360,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 192,
        "fields": {
            "name": "Idaho",
            "abbr": "ID",
            "electoral_votes": 4,
            "popular_votes": 501621,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 193,
        "fields": {
            "name": "Illinois",
            "abbr": "IL",
            "electoral_votes": 22,
            "popular_votes": 4742123,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 194,
        "fields": {
            "name": "Indiana",
            "abbr": "IN",
            "electoral_votes": 12,
            "popular_votes": 2199302,
            "poll_closing_time": 0,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 195,
        "fields": {
            "name": "Iowa",
            "abbr": "IA",
            "electoral_votes": 7,
            "popular_votes": 1315563,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 196,
        "fields": {
            "name": "Kansas",
            "abbr": "KS",
            "electoral_votes": 6,
            "popular_votes": 1072216,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 197,
        "fields": {
            "name": "Kentucky",
            "abbr": "KY",
            "electoral_votes": 8,
            "popular_votes": 1544187,
            "poll_closing_time": 0,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 198,
        "fields": {
            "name": "Louisiana",
            "abbr": "LA",
            "electoral_votes": 9,
            "popular_votes": 1765656,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 199,
        "fields": {
            "name": "Maine",
            "abbr": "ME",
            "electoral_votes": 4,
            "popular_votes": 651817,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 200,
        "fields": {
            "name": "Maryland",
            "abbr": "MD",
            "electoral_votes": 10,
            "popular_votes": 2025480,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 201,
        "fields": {
            "name": "Massachusetts",
            "abbr": "MA",
            "electoral_votes": 12,
            "popular_votes": 2702984,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 202,
        "fields": {
            "name": "Michigan",
            "abbr": "MI",
            "electoral_votes": 18,
            "popular_votes": 4232711,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 203,
        "fields": {
            "name": "Minnesota",
            "abbr": "MN",
            "electoral_votes": 10,
            "popular_votes": 2438685,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 204,
        "fields": {
            "name": "Mississippi",
            "abbr": "MS",
            "electoral_votes": 7,
            "popular_votes": 994926,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 205,
        "fields": {
            "name": "Missouri",
            "abbr": "MO",
            "electoral_votes": 11,
            "popular_votes": 2359892,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 206,
        "fields": {
            "name": "Montana",
            "abbr": "MT",
            "electoral_votes": 3,
            "popular_votes": 410997,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 207,
        "fields": {
            "name": "Nebraska",
            "abbr": "NE",
            "electoral_votes": 5,
            "popular_votes": 697019,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 208,
        "fields": {
            "name": "Nevada",
            "abbr": "NV",
            "electoral_votes": 4,
            "popular_votes": 608970,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 209,
        "fields": {
            "name": "New Hampshire",
            "abbr": "NH",
            "electoral_votes": 4,
            "popular_votes": 569081,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 210,
        "fields": {
            "name": "New Jersey",
            "abbr": "NJ",
            "electoral_votes": 15,
            "popular_votes": 3187226,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 211,
        "fields": {
            "name": "New Mexico",
            "abbr": "NM",
            "electoral_votes": 5,
            "popular_votes": 598605,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 212,
        "fields": {
            "name": "New York",
            "abbr": "NY",
            "electoral_votes": 33,
            "popular_votes": 6831178,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 213,
        "fields": {
            "name": "North Carolina",
            "abbr": "NC",
            "electoral_votes": 14,
            "popular_votes": 2911262,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 214,
        "fields": {
            "name": "North Dakota",
            "abbr": "ND",
            "electoral_votes": 3,
            "popular_votes": 288267,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 215,
        "fields": {
            "name": "Ohio",
            "abbr": "OH",
            "electoral_votes": 21,
            "popular_votes": 4705457,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 216,
        "fields": {
            "name": "Oklahoma",
            "abbr": "OK",
            "electoral_votes": 8,
            "popular_votes": 1234229,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 217,
        "fields": {
            "name": "Oregon",
            "abbr": "OR",
            "electoral_votes": 7,
            "popular_votes": 1533968,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 218,
        "fields": {
            "name": "Pennsylvania",
            "abbr": "PA",
            "electoral_votes": 23,
            "popular_votes": 4913119,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 219,
        "fields": {
            "name": "Rhode Island",
            "abbr": "RI",
            "electoral_votes": 4,
            "popular_votes": 409112,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 220,
        "fields": {
            "name": "South Carolina",
            "abbr": "SC",
            "electoral_votes": 8,
            "popular_votes": 1383777,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 221,
        "fields": {
            "name": "South Dakota",
            "abbr": "SD",
            "electoral_votes": 3,
            "popular_votes": 316269,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 222,
        "fields": {
            "name": "Tennessee",
            "abbr": "TN",
            "electoral_votes": 11,
            "popular_votes": 2076181,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 223,
        "fields": {
            "name": "Texas",
            "abbr": "TX",
            "electoral_votes": 32,
            "popular_votes": 6407637,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 224,
        "fields": {
            "name": "Utah",
            "abbr": "UT",
            "electoral_votes": 5,
            "popular_votes": 770754,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 225,
        "fields": {
            "name": "Vermont",
            "abbr": "VT",
            "electoral_votes": 3,
            "popular_votes": 294308,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 226,
        "fields": {
            "name": "Virginia",
            "abbr": "VA",
            "electoral_votes": 13,
            "popular_votes": 2739447,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 227,
        "fields": {
            "name": "Washington",
            "abbr": "WA",
            "electoral_votes": 11,
            "popular_votes": 2488745,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 228,
        "fields": {
            "name": "Washington DC",
            "abbr": "DC",
            "electoral_votes": 3,
            "popular_votes": 201894,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 229,
        "fields": {
            "name": "West Virginia",
            "abbr": "WV",
            "electoral_votes": 5,
            "popular_votes": 648124,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 230,
        "fields": {
            "name": "Wisconsin",
            "abbr": "WI",
            "electoral_votes": 11,
            "popular_votes": 2598607,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 231,
        "fields": {
            "name": "Wyoming",
            "abbr": "WY",
            "electoral_votes": 3,
            "popular_votes": 218351,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 9
        }
    }
]

campaignTrail_temp.issues_json = [
    {
        "model": "campaign_trail.issue",
        "pk": 27,
        "fields": {
            "name": "Social Progress",
            "description": 0,
            "stance_1": "Buchanan Treatment",
            "stance_desc_1": 0,
            "stance_2": "Regressive",
            "stance_desc_2": 0,
            "stance_3": "Conservative",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Liberal",
            "stance_desc_5": 0,
            "stance_6": "Egalitarian",
            "stance_desc_6": 0,
            "stance_7": "True Egalitarianism",
            "stance_desc_7": 0,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 28,
        "fields": {
            "name": "Economics",
            "description": 0,
            "stance_1": "Friends of Rothbard",
            "stance_desc_1": 0,
            "stance_2": "Privatize!",
            "stance_desc_2": 0,
            "stance_3": "Conservative",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Liberal",
            "stance_desc_5": 0,
            "stance_6": "Tax n' Spend",
            "stance_desc_6": 0,
            "stance_7": "Wellstonian Utopianism",
            "stance_desc_7": 0,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 29,
        "fields": {
            "name": "Institutionalism",
            "description": 0,
            "stance_1": "DC Consensus",
            "stance_desc_1": 0,
            "stance_2": "Institutionalist",
            "stance_desc_2": 0,
            "stance_3": "Slightly Institutionalist",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Slightly Populist",
            "stance_desc_5": 0,
            "stance_6": "Populist",
            "stance_desc_6": 0,
            "stance_7": "Fringe Populists",
            "stance_desc_7": 0,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 30,
        "fields": {
            "name": "Foreign Policy",
            "description": 0,
            "stance_1": "Bombs away!",
            "stance_desc_1": 0,
            "stance_2": "Hawkish",
            "stance_desc_2": 0,
            "stance_3": "Slightly Hawkish",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Slightly Dovish",
            "stance_desc_5": 0,
            "stance_6": "Dovish",
            "stance_desc_6": 0,
            "stance_7": "Lennonland",
            "stance_desc_7": 0,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 31,
        "fields": {
            "name": "Enviornmentalism",
            "description": 0,
            "stance_1": "Drill, Baby, Drill",
            "stance_desc_1": 0,
            "stance_2": "Coal 4 Kids",
            "stance_desc_2": 0,
            "stance_3": "Coal 4 Kids",
            "stance_desc_3": 0,
            "stance_4": "Irrelevant",
            "stance_desc_4": 0,
            "stance_5": "Conscious",
            "stance_desc_5": 0,
            "stance_6": "Conscious",
            "stance_desc_6": 0,
            "stance_7": "Swingin' Green",
            "stance_desc_7": 0,
            "election": 9
        }
    }
]

campaignTrail_temp.state_issue_score_json = [
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 868,
        "fields": {
            "state": 181,
            "issue": 27,
            "state_issue_score": -0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 869,
        "fields": {
            "state": 181,
            "issue": 28,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 870,
        "fields": {
            "state": 181,
            "issue": 29,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 871,
        "fields": {
            "state": 181,
            "issue": 30,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 872,
        "fields": {
            "state": 181,
            "issue": 31,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 873,
        "fields": {
            "state": 182,
            "issue": 27,
            "state_issue_score": -0.485,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 874,
        "fields": {
            "state": 182,
            "issue": 28,
            "state_issue_score": -0.385,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 875,
        "fields": {
            "state": 182,
            "issue": 29,
            "state_issue_score": -0.485,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 876,
        "fields": {
            "state": 182,
            "issue": 30,
            "state_issue_score": -0.485,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 877,
        "fields": {
            "state": 182,
            "issue": 31,
            "state_issue_score": -0.665,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 878,
        "fields": {
            "state": 183,
            "issue": 27,
            "state_issue_score": -0.3,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 879,
        "fields": {
            "state": 183,
            "issue": 28,
            "state_issue_score": -0.2,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 880,
        "fields": {
            "state": 183,
            "issue": 29,
            "state_issue_score": -0.285,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 881,
        "fields": {
            "state": 183,
            "issue": 30,
            "state_issue_score": -0.285,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 882,
        "fields": {
            "state": 183,
            "issue": 31,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 883,
        "fields": {
            "state": 184,
            "issue": 27,
            "state_issue_score": -0.302,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 884,
        "fields": {
            "state": 184,
            "issue": 28,
            "state_issue_score": -0.202,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 885,
        "fields": {
            "state": 184,
            "issue": 29,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 886,
        "fields": {
            "state": 184,
            "issue": 30,
            "state_issue_score": -0.302,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 887,
        "fields": {
            "state": 184,
            "issue": 31,
            "state_issue_score": -0.2,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 888,
        "fields": {
            "state": 185,
            "issue": 27,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 889,
        "fields": {
            "state": 185,
            "issue": 28,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 890,
        "fields": {
            "state": 185,
            "issue": 29,
            "state_issue_score": 0.351,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 891,
        "fields": {
            "state": 185,
            "issue": 30,
            "state_issue_score": 0.351,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 892,
        "fields": {
            "state": 185,
            "issue": 31,
            "state_issue_score": 0.404,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 893,
        "fields": {
            "state": 186,
            "issue": 27,
            "state_issue_score": -0.381,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 894,
        "fields": {
            "state": 186,
            "issue": 28,
            "state_issue_score": -0.5,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 895,
        "fields": {
            "state": 186,
            "issue": 29,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 896,
        "fields": {
            "state": 186,
            "issue": 30,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 897,
        "fields": {
            "state": 186,
            "issue": 31,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 898,
        "fields": {
            "state": 187,
            "issue": 27,
            "state_issue_score": 0.467,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 899,
        "fields": {
            "state": 187,
            "issue": 28,
            "state_issue_score": 0.567,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 900,
        "fields": {
            "state": 187,
            "issue": 29,
            "state_issue_score": 0.467,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 901,
        "fields": {
            "state": 187,
            "issue": 30,
            "state_issue_score": 0.467,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 902,
        "fields": {
            "state": 187,
            "issue": 31,
            "state_issue_score": 0.398,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 903,
        "fields": {
            "state": 188,
            "issue": 27,
            "state_issue_score": 0.278,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 904,
        "fields": {
            "state": 188,
            "issue": 28,
            "state_issue_score": 0.378,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 905,
        "fields": {
            "state": 188,
            "issue": 29,
            "state_issue_score": 0.278,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 906,
        "fields": {
            "state": 188,
            "issue": 30,
            "state_issue_score": 0.278,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 907,
        "fields": {
            "state": 188,
            "issue": 31,
            "state_issue_score": 0.382,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 908,
        "fields": {
            "state": 189,
            "issue": 27,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 909,
        "fields": {
            "state": 189,
            "issue": 28,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 910,
        "fields": {
            "state": 189,
            "issue": 29,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 911,
        "fields": {
            "state": 189,
            "issue": 30,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 912,
        "fields": {
            "state": 189,
            "issue": 31,
            "state_issue_score": -0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 913,
        "fields": {
            "state": 190,
            "issue": 27,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 914,
        "fields": {
            "state": 190,
            "issue": 28,
            "state_issue_score": -0.23,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 915,
        "fields": {
            "state": 190,
            "issue": 29,
            "state_issue_score": -0.33,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 916,
        "fields": {
            "state": 190,
            "issue": 30,
            "state_issue_score": -0.33,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 917,
        "fields": {
            "state": 190,
            "issue": 31,
            "state_issue_score": -0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 918,
        "fields": {
            "state": 191,
            "issue": 27,
            "state_issue_score": 0.602,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 919,
        "fields": {
            "state": 191,
            "issue": 28,
            "state_issue_score": 0.702,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 920,
        "fields": {
            "state": 191,
            "issue": 29,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 921,
        "fields": {
            "state": 191,
            "issue": 30,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 922,
        "fields": {
            "state": 191,
            "issue": 31,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 923,
        "fields": {
            "state": 192,
            "issue": 27,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 924,
        "fields": {
            "state": 192,
            "issue": 28,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 925,
        "fields": {
            "state": 192,
            "issue": 29,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 926,
        "fields": {
            "state": 192,
            "issue": 30,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 927,
        "fields": {
            "state": 192,
            "issue": 31,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 928,
        "fields": {
            "state": 193,
            "issue": 27,
            "state_issue_score": 0.32,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 929,
        "fields": {
            "state": 193,
            "issue": 28,
            "state_issue_score": 0.42,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 930,
        "fields": {
            "state": 193,
            "issue": 29,
            "state_issue_score": 0.32,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 931,
        "fields": {
            "state": 193,
            "issue": 30,
            "state_issue_score": 0.32,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 932,
        "fields": {
            "state": 193,
            "issue": 31,
            "state_issue_score": 0.583,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 933,
        "fields": {
            "state": 194,
            "issue": 27,
            "state_issue_score": -0.41,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 934,
        "fields": {
            "state": 194,
            "issue": 28,
            "state_issue_score": -0.31,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 935,
        "fields": {
            "state": 194,
            "issue": 29,
            "state_issue_score": -0.41,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 936,
        "fields": {
            "state": 194,
            "issue": 30,
            "state_issue_score": -0.41,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 937,
        "fields": {
            "state": 194,
            "issue": 31,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 938,
        "fields": {
            "state": 195,
            "issue": 27,
            "state_issue_score": 0.09,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 939,
        "fields": {
            "state": 195,
            "issue": 28,
            "state_issue_score": 0.19,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 940,
        "fields": {
            "state": 195,
            "issue": 29,
            "state_issue_score": 0.09,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 941,
        "fields": {
            "state": 195,
            "issue": 30,
            "state_issue_score": 0.09,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 942,
        "fields": {
            "state": 195,
            "issue": 31,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 943,
        "fields": {
            "state": 196,
            "issue": 27,
            "state_issue_score": -0.525,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 944,
        "fields": {
            "state": 196,
            "issue": 28,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 945,
        "fields": {
            "state": 196,
            "issue": 29,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 946,
        "fields": {
            "state": 196,
            "issue": 30,
            "state_issue_score": -0.625,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 947,
        "fields": {
            "state": 196,
            "issue": 31,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 948,
        "fields": {
            "state": 197,
            "issue": 27,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 949,
        "fields": {
            "state": 197,
            "issue": 28,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 950,
        "fields": {
            "state": 197,
            "issue": 29,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 951,
        "fields": {
            "state": 197,
            "issue": 30,
            "state_issue_score": -0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 952,
        "fields": {
            "state": 197,
            "issue": 31,
            "state_issue_score": -0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 953,
        "fields": {
            "state": 198,
            "issue": 27,
            "state_issue_score": -0.35,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 954,
        "fields": {
            "state": 198,
            "issue": 28,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 955,
        "fields": {
            "state": 198,
            "issue": 29,
            "state_issue_score": 0.35,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 956,
        "fields": {
            "state": 198,
            "issue": 30,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 957,
        "fields": {
            "state": 198,
            "issue": 31,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 958,
        "fields": {
            "state": 199,
            "issue": 27,
            "state_issue_score": 0.353,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 959,
        "fields": {
            "state": 199,
            "issue": 28,
            "state_issue_score": 0.453,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 960,
        "fields": {
            "state": 199,
            "issue": 29,
            "state_issue_score": 0.353,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 961,
        "fields": {
            "state": 199,
            "issue": 30,
            "state_issue_score": 0.353,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 962,
        "fields": {
            "state": 199,
            "issue": 31,
            "state_issue_score": 0.431,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 963,
        "fields": {
            "state": 200,
            "issue": 27,
            "state_issue_score": 0.41,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 964,
        "fields": {
            "state": 200,
            "issue": 28,
            "state_issue_score": 0.51,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 965,
        "fields": {
            "state": 200,
            "issue": 29,
            "state_issue_score": 0.41,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 966,
        "fields": {
            "state": 200,
            "issue": 30,
            "state_issue_score": 0.41,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 967,
        "fields": {
            "state": 200,
            "issue": 31,
            "state_issue_score": 0.605,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 968,
        "fields": {
            "state": 201,
            "issue": 27,
            "state_issue_score": 0.79,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 969,
        "fields": {
            "state": 201,
            "issue": 28,
            "state_issue_score": 0.85,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 970,
        "fields": {
            "state": 201,
            "issue": 29,
            "state_issue_score": 0.79,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 971,
        "fields": {
            "state": 201,
            "issue": 30,
            "state_issue_score": 0.79,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 972,
        "fields": {
            "state": 201,
            "issue": 31,
            "state_issue_score": 0.846,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 973,
        "fields": {
            "state": 202,
            "issue": 27,
            "state_issue_score": 0.14,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 974,
        "fields": {
            "state": 202,
            "issue": 28,
            "state_issue_score": 0.24,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 975,
        "fields": {
            "state": 202,
            "issue": 29,
            "state_issue_score": 0.14,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 976,
        "fields": {
            "state": 202,
            "issue": 30,
            "state_issue_score": 0.14,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 977,
        "fields": {
            "state": 202,
            "issue": 31,
            "state_issue_score": 0.383,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 978,
        "fields": {
            "state": 203,
            "issue": 27,
            "state_issue_score": 0.217,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 979,
        "fields": {
            "state": 203,
            "issue": 28,
            "state_issue_score": 0.317,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 980,
        "fields": {
            "state": 203,
            "issue": 29,
            "state_issue_score": 0.217,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 981,
        "fields": {
            "state": 203,
            "issue": 30,
            "state_issue_score": 0.217,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 982,
        "fields": {
            "state": 203,
            "issue": 31,
            "state_issue_score": 0.304,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 983,
        "fields": {
            "state": 204,
            "issue": 27,
            "state_issue_score": -0.525,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 984,
        "fields": {
            "state": 204,
            "issue": 28,
            "state_issue_score": -0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 985,
        "fields": {
            "state": 204,
            "issue": 29,
            "state_issue_score": -0.575,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 986,
        "fields": {
            "state": 204,
            "issue": 30,
            "state_issue_score": -0.625,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 987,
        "fields": {
            "state": 204,
            "issue": 31,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 988,
        "fields": {
            "state": 205,
            "issue": 27,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 989,
        "fields": {
            "state": 205,
            "issue": 28,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 990,
        "fields": {
            "state": 205,
            "issue": 29,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 991,
        "fields": {
            "state": 205,
            "issue": 30,
            "state_issue_score": -0.09,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 992,
        "fields": {
            "state": 205,
            "issue": 31,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 993,
        "fields": {
            "state": 206,
            "issue": 27,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 994,
        "fields": {
            "state": 206,
            "issue": 28,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 995,
        "fields": {
            "state": 206,
            "issue": 29,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 996,
        "fields": {
            "state": 206,
            "issue": 30,
            "state_issue_score": -0.378,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 997,
        "fields": {
            "state": 206,
            "issue": 31,
            "state_issue_score": -0.203,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 998,
        "fields": {
            "state": 207,
            "issue": 27,
            "state_issue_score": -0.625,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 999,
        "fields": {
            "state": 207,
            "issue": 28,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1000,
        "fields": {
            "state": 207,
            "issue": 29,
            "state_issue_score": -0.625,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1001,
        "fields": {
            "state": 207,
            "issue": 30,
            "state_issue_score": -0.65,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1002,
        "fields": {
            "state": 207,
            "issue": 31,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1003,
        "fields": {
            "state": 208,
            "issue": 27,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1004,
        "fields": {
            "state": 208,
            "issue": 28,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1005,
        "fields": {
            "state": 208,
            "issue": 29,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1006,
        "fields": {
            "state": 208,
            "issue": 30,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1007,
        "fields": {
            "state": 208,
            "issue": 31,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1008,
        "fields": {
            "state": 209,
            "issue": 27,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1009,
        "fields": {
            "state": 209,
            "issue": 28,
            "state_issue_score": -0.3,
            "weight": 3
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1010,
        "fields": {
            "state": 209,
            "issue": 29,
            "state_issue_score": -0.3,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1011,
        "fields": {
            "state": 209,
            "issue": 30,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1012,
        "fields": {
            "state": 209,
            "issue": 31,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1013,
        "fields": {
            "state": 210,
            "issue": 27,
            "state_issue_score": 0.337,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1014,
        "fields": {
            "state": 210,
            "issue": 28,
            "state_issue_score": 0.437,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1015,
        "fields": {
            "state": 210,
            "issue": 29,
            "state_issue_score": 0.337,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1016,
        "fields": {
            "state": 210,
            "issue": 30,
            "state_issue_score": 0.337,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1017,
        "fields": {
            "state": 210,
            "issue": 31,
            "state_issue_score": 0.448,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1018,
        "fields": {
            "state": 211,
            "issue": 27,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1019,
        "fields": {
            "state": 211,
            "issue": 28,
            "state_issue_score": 0.175,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1020,
        "fields": {
            "state": 211,
            "issue": 29,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1021,
        "fields": {
            "state": 211,
            "issue": 30,
            "state_issue_score": 0.05,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1022,
        "fields": {
            "state": 211,
            "issue": 31,
            "state_issue_score": 0.31,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1023,
        "fields": {
            "state": 212,
            "issue": 27,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1024,
        "fields": {
            "state": 212,
            "issue": 28,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1025,
        "fields": {
            "state": 212,
            "issue": 29,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1026,
        "fields": {
            "state": 212,
            "issue": 30,
            "state_issue_score": 0.654,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1027,
        "fields": {
            "state": 212,
            "issue": 31,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1028,
        "fields": {
            "state": 213,
            "issue": 27,
            "state_issue_score": -0.525,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1029,
        "fields": {
            "state": 213,
            "issue": 28,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1030,
        "fields": {
            "state": 213,
            "issue": 29,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1031,
        "fields": {
            "state": 213,
            "issue": 30,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1032,
        "fields": {
            "state": 213,
            "issue": 31,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1033,
        "fields": {
            "state": 214,
            "issue": 27,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1034,
        "fields": {
            "state": 214,
            "issue": 28,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1035,
        "fields": {
            "state": 214,
            "issue": 29,
            "state_issue_score": 0.8,
            "weight": 3
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1036,
        "fields": {
            "state": 214,
            "issue": 30,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1037,
        "fields": {
            "state": 214,
            "issue": 31,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1038,
        "fields": {
            "state": 215,
            "issue": 27,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1039,
        "fields": {
            "state": 215,
            "issue": 28,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1040,
        "fields": {
            "state": 215,
            "issue": 29,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1041,
        "fields": {
            "state": 215,
            "issue": 30,
            "state_issue_score": -0.031,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1042,
        "fields": {
            "state": 215,
            "issue": 31,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1043,
        "fields": {
            "state": 216,
            "issue": 27,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1044,
        "fields": {
            "state": 216,
            "issue": 28,
            "state_issue_score": -0.62,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1045,
        "fields": {
            "state": 216,
            "issue": 29,
            "state_issue_score": -0.575,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1046,
        "fields": {
            "state": 216,
            "issue": 30,
            "state_issue_score": -0.525,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1047,
        "fields": {
            "state": 216,
            "issue": 31,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1048,
        "fields": {
            "state": 217,
            "issue": 27,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1049,
        "fields": {
            "state": 217,
            "issue": 28,
            "state_issue_score": 0.317,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1050,
        "fields": {
            "state": 217,
            "issue": 29,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1051,
        "fields": {
            "state": 217,
            "issue": 30,
            "state_issue_score": 0.217,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1052,
        "fields": {
            "state": 217,
            "issue": 31,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1053,
        "fields": {
            "state": 218,
            "issue": 27,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1054,
        "fields": {
            "state": 218,
            "issue": 28,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1055,
        "fields": {
            "state": 218,
            "issue": 29,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1056,
        "fields": {
            "state": 218,
            "issue": 30,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1057,
        "fields": {
            "state": 218,
            "issue": 31,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1058,
        "fields": {
            "state": 219,
            "issue": 27,
            "state_issue_score": 0.833,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1059,
        "fields": {
            "state": 219,
            "issue": 28,
            "state_issue_score": 0.85,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1060,
        "fields": {
            "state": 219,
            "issue": 29,
            "state_issue_score": 0.833,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1061,
        "fields": {
            "state": 219,
            "issue": 30,
            "state_issue_score": 0.833,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1062,
        "fields": {
            "state": 219,
            "issue": 31,
            "state_issue_score": 0.766,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1063,
        "fields": {
            "state": 220,
            "issue": 27,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1064,
        "fields": {
            "state": 220,
            "issue": 28,
            "state_issue_score": -0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1065,
        "fields": {
            "state": 220,
            "issue": 29,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1066,
        "fields": {
            "state": 220,
            "issue": 30,
            "state_issue_score": -0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1067,
        "fields": {
            "state": 220,
            "issue": 31,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1068,
        "fields": {
            "state": 221,
            "issue": 27,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1069,
        "fields": {
            "state": 221,
            "issue": 28,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1070,
        "fields": {
            "state": 221,
            "issue": 29,
            "state_issue_score": 0.8,
            "weight": 3
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1071,
        "fields": {
            "state": 221,
            "issue": 30,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1072,
        "fields": {
            "state": 221,
            "issue": 31,
            "state_issue_score": -0.175,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1073,
        "fields": {
            "state": 222,
            "issue": 27,
            "state_issue_score": -0.2,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1074,
        "fields": {
            "state": 222,
            "issue": 28,
            "state_issue_score": -0.1,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1075,
        "fields": {
            "state": 222,
            "issue": 29,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1076,
        "fields": {
            "state": 222,
            "issue": 30,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1077,
        "fields": {
            "state": 222,
            "issue": 31,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1078,
        "fields": {
            "state": 223,
            "issue": 27,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1079,
        "fields": {
            "state": 223,
            "issue": 28,
            "state_issue_score": -0.425,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1080,
        "fields": {
            "state": 223,
            "issue": 29,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1081,
        "fields": {
            "state": 223,
            "issue": 30,
            "state_issue_score": -0.525,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1082,
        "fields": {
            "state": 223,
            "issue": 31,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1083,
        "fields": {
            "state": 224,
            "issue": 27,
            "state_issue_score": -0.849,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1084,
        "fields": {
            "state": 224,
            "issue": 28,
            "state_issue_score": -0.749,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1085,
        "fields": {
            "state": 224,
            "issue": 29,
            "state_issue_score": -0.849,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1086,
        "fields": {
            "state": 224,
            "issue": 30,
            "state_issue_score": -0.849,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1087,
        "fields": {
            "state": 224,
            "issue": 31,
            "state_issue_score": -0.726,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1088,
        "fields": {
            "state": 225,
            "issue": 27,
            "state_issue_score": 0.389,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1089,
        "fields": {
            "state": 225,
            "issue": 28,
            "state_issue_score": 0.489,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1090,
        "fields": {
            "state": 225,
            "issue": 29,
            "state_issue_score": 0.389,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1091,
        "fields": {
            "state": 225,
            "issue": 30,
            "state_issue_score": 0.389,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1092,
        "fields": {
            "state": 225,
            "issue": 31,
            "state_issue_score": 0.496,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1093,
        "fields": {
            "state": 226,
            "issue": 27,
            "state_issue_score": -0.375,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1094,
        "fields": {
            "state": 226,
            "issue": 28,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1095,
        "fields": {
            "state": 226,
            "issue": 29,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1096,
        "fields": {
            "state": 226,
            "issue": 30,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1097,
        "fields": {
            "state": 226,
            "issue": 31,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1098,
        "fields": {
            "state": 227,
            "issue": 27,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1099,
        "fields": {
            "state": 227,
            "issue": 28,
            "state_issue_score": 0.371,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1100,
        "fields": {
            "state": 227,
            "issue": 29,
            "state_issue_score": 0.271,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1101,
        "fields": {
            "state": 227,
            "issue": 30,
            "state_issue_score": 0.271,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1102,
        "fields": {
            "state": 227,
            "issue": 31,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1103,
        "fields": {
            "state": 228,
            "issue": 27,
            "state_issue_score": 0.85,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1104,
        "fields": {
            "state": 228,
            "issue": 28,
            "state_issue_score": 0.85,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1105,
        "fields": {
            "state": 228,
            "issue": 29,
            "state_issue_score": -0.9,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1106,
        "fields": {
            "state": 228,
            "issue": 30,
            "state_issue_score": 0.85,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1107,
        "fields": {
            "state": 228,
            "issue": 31,
            "state_issue_score": 0.85,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1108,
        "fields": {
            "state": 229,
            "issue": 27,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1109,
        "fields": {
            "state": 229,
            "issue": 28,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1110,
        "fields": {
            "state": 229,
            "issue": 29,
            "state_issue_score": 0.9,
            "weight": 3
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1111,
        "fields": {
            "state": 229,
            "issue": 30,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1112,
        "fields": {
            "state": 229,
            "issue": 31,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1113,
        "fields": {
            "state": 230,
            "issue": 27,
            "state_issue_score": 0.11,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1114,
        "fields": {
            "state": 230,
            "issue": 28,
            "state_issue_score": 0.21,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1115,
        "fields": {
            "state": 230,
            "issue": 29,
            "state_issue_score": 0.11,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1116,
        "fields": {
            "state": 230,
            "issue": 30,
            "state_issue_score": 0.11,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1117,
        "fields": {
            "state": 230,
            "issue": 31,
            "state_issue_score": 0.175,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1118,
        "fields": {
            "state": 231,
            "issue": 27,
            "state_issue_score": -0.81,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1119,
        "fields": {
            "state": 231,
            "issue": 28,
            "state_issue_score": -0.71,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1120,
        "fields": {
            "state": 231,
            "issue": 29,
            "state_issue_score": -0.81,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1121,
        "fields": {
            "state": 231,
            "issue": 30,
            "state_issue_score": -0.81,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1122,
        "fields": {
            "state": 231,
            "issue": 31,
            "state_issue_score": -0.4,
            "weight": 1
        }
    }
]

campaignTrail_temp.candidate_issue_score_json = [
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12671,
        "fields": {
            "candidate": 1001,
            "issue": 27,
            "issue_score": 0.6
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12672,
        "fields": {
            "candidate": 1001,
            "issue": 28,
            "issue_score": 0.6
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12673,
        "fields": {
            "candidate": 1001,
            "issue": 29,
            "issue_score": 0.6
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12674,
        "fields": {
            "candidate": 1001,
            "issue": 30,
            "issue_score": 0.65
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12675,
        "fields": {
            "candidate": 1001,
            "issue": 31,
            "issue_score": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12728,
        "fields": {
            "candidate": 50000,
            "issue": 27,
            "issue_score": -0.6
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12729,
        "fields": {
            "candidate": 50000,
            "issue": 28,
            "issue_score": -0.7
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12730,
        "fields": {
            "candidate": 50000,
            "issue": 29,
            "issue_score": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12731,
        "fields": {
            "candidate": 50000,
            "issue": 30,
            "issue_score": -0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12732,
        "fields": {
            "candidate": 50000,
            "issue": 31,
            "issue_score": -0.6
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12969,
        "fields": {
            "candidate": 12917,
            "issue": 27,
            "issue_score": -0.9
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12970,
        "fields": {
            "candidate": 12917,
            "issue": 28,
            "issue_score": -0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12971,
        "fields": {
            "candidate": 12917,
            "issue": 29,
            "issue_score": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12972,
        "fields": {
            "candidate": 12917,
            "issue": 30,
            "issue_score": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12973,
        "fields": {
            "candidate": 12917,
            "issue": 31,
            "issue_score": -0.8
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 13026,
        "fields": {
            "candidate": 12974,
            "issue": 27,
            "issue_score": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 13027,
        "fields": {
            "candidate": 12974,
            "issue": 28,
            "issue_score": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 13028,
        "fields": {
            "candidate": 12974,
            "issue": 29,
            "issue_score": 0.78
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 13029,
        "fields": {
            "candidate": 12974,
            "issue": 30,
            "issue_score": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 13030,
        "fields": {
            "candidate": 12974,
            "issue": 31,
            "issue_score": 1
        }
    }
]

campaignTrail_temp.running_mate_issue_score_json = [
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 273,
        "fields": {
            "candidate": 50004,
            "issue": 27,
            "issue_score": -0.1
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 274,
        "fields": {
            "candidate": 50004,
            "issue": 28,
            "issue_score": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 275,
        "fields": {
            "candidate": 50004,
            "issue": 29,
            "issue_score": -0.7
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 276,
        "fields": {
            "candidate": 50004,
            "issue": 30,
            "issue_score": 0.4
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 277,
        "fields": {
            "candidate": 50004,
            "issue": 31,
            "issue_score": 0.2
        }
    }
]

campaignTrail_temp.candidate_state_multiplier_json = [
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12750,
        "fields": {
            "candidate": 1001,
            "state": 181,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12751,
        "fields": {
            "candidate": 1001,
            "state": 182,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12752,
        "fields": {
            "candidate": 1001,
            "state": 183,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12753,
        "fields": {
            "candidate": 1001,
            "state": 184,
            "state_multiplier": 0.91
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12754,
        "fields": {
            "candidate": 1001,
            "state": 185,
            "state_multiplier": 0.88
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12755,
        "fields": {
            "candidate": 1001,
            "state": 186,
            "state_multiplier": 0.922
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12756,
        "fields": {
            "candidate": 1001,
            "state": 187,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12757,
        "fields": {
            "candidate": 1001,
            "state": 188,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12758,
        "fields": {
            "candidate": 1001,
            "state": 189,
            "state_multiplier": 0.89
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12759,
        "fields": {
            "candidate": 1001,
            "state": 190,
            "state_multiplier": 0.85
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12760,
        "fields": {
            "candidate": 1001,
            "state": 191,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12761,
        "fields": {
            "candidate": 1001,
            "state": 192,
            "state_multiplier": 0.93
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12762,
        "fields": {
            "candidate": 1001,
            "state": 193,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12763,
        "fields": {
            "candidate": 1001,
            "state": 194,
            "state_multiplier": 0.97
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12764,
        "fields": {
            "candidate": 1001,
            "state": 195,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12765,
        "fields": {
            "candidate": 1001,
            "state": 196,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12766,
        "fields": {
            "candidate": 1001,
            "state": 197,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12767,
        "fields": {
            "candidate": 1001,
            "state": 198,
            "state_multiplier": 0.84
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12768,
        "fields": {
            "candidate": 1001,
            "state": 199,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12769,
        "fields": {
            "candidate": 1001,
            "state": 200,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12770,
        "fields": {
            "candidate": 1001,
            "state": 201,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12771,
        "fields": {
            "candidate": 1001,
            "state": 202,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12772,
        "fields": {
            "candidate": 1001,
            "state": 203,
            "state_multiplier": 1.088
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12773,
        "fields": {
            "candidate": 1001,
            "state": 204,
            "state_multiplier": 0.83
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12774,
        "fields": {
            "candidate": 1001,
            "state": 205,
            "state_multiplier": 0.977
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12775,
        "fields": {
            "candidate": 1001,
            "state": 206,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12776,
        "fields": {
            "candidate": 1001,
            "state": 207,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12777,
        "fields": {
            "candidate": 1001,
            "state": 208,
            "state_multiplier": 0.875
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12778,
        "fields": {
            "candidate": 1001,
            "state": 209,
            "state_multiplier": 0.94
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12779,
        "fields": {
            "candidate": 1001,
            "state": 210,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12780,
        "fields": {
            "candidate": 1001,
            "state": 211,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12781,
        "fields": {
            "candidate": 1001,
            "state": 212,
            "state_multiplier": 1.008
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12782,
        "fields": {
            "candidate": 1001,
            "state": 213,
            "state_multiplier": 0.86
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12783,
        "fields": {
            "candidate": 1001,
            "state": 214,
            "state_multiplier": 1.088
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12784,
        "fields": {
            "candidate": 1001,
            "state": 215,
            "state_multiplier": 0.94
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12785,
        "fields": {
            "candidate": 1001,
            "state": 216,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12786,
        "fields": {
            "candidate": 1001,
            "state": 217,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12787,
        "fields": {
            "candidate": 1001,
            "state": 218,
            "state_multiplier": 0.95
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12788,
        "fields": {
            "candidate": 1001,
            "state": 219,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12789,
        "fields": {
            "candidate": 1001,
            "state": 220,
            "state_multiplier": 0.983
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12790,
        "fields": {
            "candidate": 1001,
            "state": 221,
            "state_multiplier": 1.0888
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12791,
        "fields": {
            "candidate": 1001,
            "state": 222,
            "state_multiplier": 0.89
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12792,
        "fields": {
            "candidate": 1001,
            "state": 223,
            "state_multiplier": 0.88
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12793,
        "fields": {
            "candidate": 1001,
            "state": 224,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12794,
        "fields": {
            "candidate": 1001,
            "state": 225,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12795,
        "fields": {
            "candidate": 1001,
            "state": 226,
            "state_multiplier": 0.77
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12796,
        "fields": {
            "candidate": 1001,
            "state": 227,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12797,
        "fields": {
            "candidate": 1001,
            "state": 228,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12798,
        "fields": {
            "candidate": 1001,
            "state": 229,
            "state_multiplier": 0.95
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12799,
        "fields": {
            "candidate": 1001,
            "state": 230,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12800,
        "fields": {
            "candidate": 1001,
            "state": 231,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12801,
        "fields": {
            "candidate": 50000,
            "state": 181,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12802,
        "fields": {
            "candidate": 50000,
            "state": 182,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12803,
        "fields": {
            "candidate": 50000,
            "state": 183,
            "state_multiplier": 1.088
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12804,
        "fields": {
            "candidate": 50000,
            "state": 184,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12805,
        "fields": {
            "candidate": 50000,
            "state": 185,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12806,
        "fields": {
            "candidate": 50000,
            "state": 186,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12807,
        "fields": {
            "candidate": 50000,
            "state": 187,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12808,
        "fields": {
            "candidate": 50000,
            "state": 188,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12809,
        "fields": {
            "candidate": 50000,
            "state": 189,
            "state_multiplier": 1.058
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12810,
        "fields": {
            "candidate": 50000,
            "state": 190,
            "state_multiplier": 1.088
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12811,
        "fields": {
            "candidate": 50000,
            "state": 191,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12812,
        "fields": {
            "candidate": 50000,
            "state": 192,
            "state_multiplier": 1.088
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12813,
        "fields": {
            "candidate": 50000,
            "state": 193,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12814,
        "fields": {
            "candidate": 50000,
            "state": 194,
            "state_multiplier": 1.077
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12815,
        "fields": {
            "candidate": 50000,
            "state": 195,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12816,
        "fields": {
            "candidate": 50000,
            "state": 196,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12817,
        "fields": {
            "candidate": 50000,
            "state": 197,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12818,
        "fields": {
            "candidate": 50000,
            "state": 198,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12819,
        "fields": {
            "candidate": 50000,
            "state": 199,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12820,
        "fields": {
            "candidate": 50000,
            "state": 200,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12821,
        "fields": {
            "candidate": 50000,
            "state": 201,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12822,
        "fields": {
            "candidate": 50000,
            "state": 202,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12823,
        "fields": {
            "candidate": 50000,
            "state": 203,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12824,
        "fields": {
            "candidate": 50000,
            "state": 204,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12825,
        "fields": {
            "candidate": 50000,
            "state": 205,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12826,
        "fields": {
            "candidate": 50000,
            "state": 206,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12827,
        "fields": {
            "candidate": 50000,
            "state": 207,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12828,
        "fields": {
            "candidate": 50000,
            "state": 208,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12829,
        "fields": {
            "candidate": 50000,
            "state": 209,
            "state_multiplier": 1.088
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12830,
        "fields": {
            "candidate": 50000,
            "state": 210,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12831,
        "fields": {
            "candidate": 50000,
            "state": 211,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12832,
        "fields": {
            "candidate": 50000,
            "state": 212,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12833,
        "fields": {
            "candidate": 50000,
            "state": 213,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12834,
        "fields": {
            "candidate": 50000,
            "state": 214,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12835,
        "fields": {
            "candidate": 50000,
            "state": 215,
            "state_multiplier": 1.088
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12836,
        "fields": {
            "candidate": 50000,
            "state": 216,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12837,
        "fields": {
            "candidate": 50000,
            "state": 217,
            "state_multiplier": 1.088
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12838,
        "fields": {
            "candidate": 50000,
            "state": 218,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12839,
        "fields": {
            "candidate": 50000,
            "state": 219,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12840,
        "fields": {
            "candidate": 50000,
            "state": 220,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12841,
        "fields": {
            "candidate": 50000,
            "state": 221,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12842,
        "fields": {
            "candidate": 50000,
            "state": 222,
            "state_multiplier": 1.099
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12843,
        "fields": {
            "candidate": 50000,
            "state": 223,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12844,
        "fields": {
            "candidate": 50000,
            "state": 224,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12845,
        "fields": {
            "candidate": 50000,
            "state": 225,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12846,
        "fields": {
            "candidate": 50000,
            "state": 226,
            "state_multiplier": 1.008
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12847,
        "fields": {
            "candidate": 50000,
            "state": 227,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12848,
        "fields": {
            "candidate": 50000,
            "state": 228,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12849,
        "fields": {
            "candidate": 50000,
            "state": 229,
            "state_multiplier": 1.088
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12850,
        "fields": {
            "candidate": 50000,
            "state": 230,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12851,
        "fields": {
            "candidate": 50000,
            "state": 231,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12918,
        "fields": {
            "candidate": 12917,
            "state": 181,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12919,
        "fields": {
            "candidate": 12917,
            "state": 182,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12920,
        "fields": {
            "candidate": 12917,
            "state": 183,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12921,
        "fields": {
            "candidate": 12917,
            "state": 184,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12922,
        "fields": {
            "candidate": 12917,
            "state": 185,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12923,
        "fields": {
            "candidate": 12917,
            "state": 186,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12924,
        "fields": {
            "candidate": 12917,
            "state": 187,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12925,
        "fields": {
            "candidate": 12917,
            "state": 188,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12926,
        "fields": {
            "candidate": 12917,
            "state": 189,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12927,
        "fields": {
            "candidate": 12917,
            "state": 190,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12928,
        "fields": {
            "candidate": 12917,
            "state": 191,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12929,
        "fields": {
            "candidate": 12917,
            "state": 192,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12930,
        "fields": {
            "candidate": 12917,
            "state": 193,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12931,
        "fields": {
            "candidate": 12917,
            "state": 194,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12932,
        "fields": {
            "candidate": 12917,
            "state": 195,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12933,
        "fields": {
            "candidate": 12917,
            "state": 196,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12934,
        "fields": {
            "candidate": 12917,
            "state": 197,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12935,
        "fields": {
            "candidate": 12917,
            "state": 198,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12936,
        "fields": {
            "candidate": 12917,
            "state": 199,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12937,
        "fields": {
            "candidate": 12917,
            "state": 200,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12938,
        "fields": {
            "candidate": 12917,
            "state": 201,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12939,
        "fields": {
            "candidate": 12917,
            "state": 202,
            "state_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12940,
        "fields": {
            "candidate": 12917,
            "state": 203,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12941,
        "fields": {
            "candidate": 12917,
            "state": 204,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12942,
        "fields": {
            "candidate": 12917,
            "state": 205,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12943,
        "fields": {
            "candidate": 12917,
            "state": 206,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12944,
        "fields": {
            "candidate": 12917,
            "state": 207,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12945,
        "fields": {
            "candidate": 12917,
            "state": 208,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12946,
        "fields": {
            "candidate": 12917,
            "state": 209,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12947,
        "fields": {
            "candidate": 12917,
            "state": 210,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12948,
        "fields": {
            "candidate": 12917,
            "state": 211,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12949,
        "fields": {
            "candidate": 12917,
            "state": 212,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12950,
        "fields": {
            "candidate": 12917,
            "state": 213,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12951,
        "fields": {
            "candidate": 12917,
            "state": 214,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12952,
        "fields": {
            "candidate": 12917,
            "state": 215,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12953,
        "fields": {
            "candidate": 12917,
            "state": 216,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12954,
        "fields": {
            "candidate": 12917,
            "state": 217,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12955,
        "fields": {
            "candidate": 12917,
            "state": 218,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12956,
        "fields": {
            "candidate": 12917,
            "state": 219,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12957,
        "fields": {
            "candidate": 12917,
            "state": 220,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12958,
        "fields": {
            "candidate": 12917,
            "state": 221,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12959,
        "fields": {
            "candidate": 12917,
            "state": 222,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12960,
        "fields": {
            "candidate": 12917,
            "state": 223,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12961,
        "fields": {
            "candidate": 12917,
            "state": 224,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12962,
        "fields": {
            "candidate": 12917,
            "state": 225,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12963,
        "fields": {
            "candidate": 12917,
            "state": 226,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12964,
        "fields": {
            "candidate": 12917,
            "state": 227,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12965,
        "fields": {
            "candidate": 12917,
            "state": 228,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12966,
        "fields": {
            "candidate": 12917,
            "state": 229,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12967,
        "fields": {
            "candidate": 12917,
            "state": 230,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12968,
        "fields": {
            "candidate": 12917,
            "state": 231,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12975,
        "fields": {
            "candidate": 12974,
            "state": 181,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12976,
        "fields": {
            "candidate": 12974,
            "state": 182,
            "state_multiplier": 0.33
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12977,
        "fields": {
            "candidate": 12974,
            "state": 183,
            "state_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12978,
        "fields": {
            "candidate": 12974,
            "state": 184,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12979,
        "fields": {
            "candidate": 12974,
            "state": 185,
            "state_multiplier": 0.055
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12980,
        "fields": {
            "candidate": 12974,
            "state": 186,
            "state_multiplier": 0.135
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12981,
        "fields": {
            "candidate": 12974,
            "state": 187,
            "state_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12982,
        "fields": {
            "candidate": 12974,
            "state": 188,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12983,
        "fields": {
            "candidate": 12974,
            "state": 189,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12984,
        "fields": {
            "candidate": 12974,
            "state": 190,
            "state_multiplier": 0.0095
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12985,
        "fields": {
            "candidate": 12974,
            "state": 191,
            "state_multiplier": 0.115
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12986,
        "fields": {
            "candidate": 12974,
            "state": 192,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12987,
        "fields": {
            "candidate": 12974,
            "state": 193,
            "state_multiplier": 0.07
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12988,
        "fields": {
            "candidate": 12974,
            "state": 194,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12989,
        "fields": {
            "candidate": 12974,
            "state": 195,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12990,
        "fields": {
            "candidate": 12974,
            "state": 196,
            "state_multiplier": 0.045
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12991,
        "fields": {
            "candidate": 12974,
            "state": 197,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12992,
        "fields": {
            "candidate": 12974,
            "state": 198,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12993,
        "fields": {
            "candidate": 12974,
            "state": 199,
            "state_multiplier": 0.135
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12994,
        "fields": {
            "candidate": 12974,
            "state": 200,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12995,
        "fields": {
            "candidate": 12974,
            "state": 201,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12996,
        "fields": {
            "candidate": 12974,
            "state": 202,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12997,
        "fields": {
            "candidate": 12974,
            "state": 203,
            "state_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12998,
        "fields": {
            "candidate": 12974,
            "state": 204,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12999,
        "fields": {
            "candidate": 12974,
            "state": 205,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13000,
        "fields": {
            "candidate": 12974,
            "state": 206,
            "state_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13001,
        "fields": {
            "candidate": 12974,
            "state": 207,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13002,
        "fields": {
            "candidate": 12974,
            "state": 208,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13003,
        "fields": {
            "candidate": 12974,
            "state": 209,
            "state_multiplier": 0.07
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13004,
        "fields": {
            "candidate": 12974,
            "state": 210,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13005,
        "fields": {
            "candidate": 12974,
            "state": 211,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13006,
        "fields": {
            "candidate": 12974,
            "state": 212,
            "state_multiplier": 0.075
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13007,
        "fields": {
            "candidate": 12974,
            "state": 213,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13008,
        "fields": {
            "candidate": 12974,
            "state": 214,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13009,
        "fields": {
            "candidate": 12974,
            "state": 215,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13010,
        "fields": {
            "candidate": 12974,
            "state": 216,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13011,
        "fields": {
            "candidate": 12974,
            "state": 217,
            "state_multiplier": 0.111
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13012,
        "fields": {
            "candidate": 12974,
            "state": 218,
            "state_multiplier": 0.078
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13013,
        "fields": {
            "candidate": 12974,
            "state": 219,
            "state_multiplier": 0.078
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13014,
        "fields": {
            "candidate": 12974,
            "state": 220,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13015,
        "fields": {
            "candidate": 12974,
            "state": 221,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13016,
        "fields": {
            "candidate": 12974,
            "state": 222,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13017,
        "fields": {
            "candidate": 12974,
            "state": 223,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13018,
        "fields": {
            "candidate": 12974,
            "state": 224,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13019,
        "fields": {
            "candidate": 12974,
            "state": 225,
            "state_multiplier": 0.1287
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13020,
        "fields": {
            "candidate": 12974,
            "state": 226,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13021,
        "fields": {
            "candidate": 12974,
            "state": 227,
            "state_multiplier": 0.086
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13022,
        "fields": {
            "candidate": 12974,
            "state": 228,
            "state_multiplier": 0.1287
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13023,
        "fields": {
            "candidate": 12974,
            "state": 229,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13024,
        "fields": {
            "candidate": 12974,
            "state": 230,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 13025,
        "fields": {
            "candidate": 12974,
            "state": 231,
            "state_multiplier": 0.03
        }
    }
]

campaignTrail_temp.answer_score_global_json = [
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1021,
        "fields": {
            "answer": 3397,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1025,
        "fields": {
            "answer": 3398,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1091,
        "fields": {
            "answer": 3487,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.0075
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1093,
        "fields": {
            "answer": 3489,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1142,
        "fields": {
            "answer": 3359,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.0045
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1158,
        "fields": {
            "answer": 3387,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.0012
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1170,
        "fields": {
            "answer": 3322,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.0027
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1222,
        "fields": {
            "answer": 3384,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.0012
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1223,
        "fields": {
            "answer": 3385,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.0045
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1234,
        "fields": {
            "answer": 3314,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.0009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1238,
        "fields": {
            "answer": 3318,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.00006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1239,
        "fields": {
            "answer": 3319,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.0008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1244,
        "fields": {
            "answer": 3329,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.00002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1256,
        "fields": {
            "answer": 3339,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.0005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1276,
        "fields": {
            "answer": 3360,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.0098
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1284,
        "fields": {
            "answer": 3366,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.0006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1286,
        "fields": {
            "answer": 3367,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1288,
        "fields": {
            "answer": 3370,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1290,
        "fields": {
            "answer": 3371,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.0065
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1294,
        "fields": {
            "answer": 3377,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.00527
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1300,
        "fields": {
            "answer": 3381,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1302,
        "fields": {
            "answer": 3382,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1318,
        "fields": {
            "answer": 3321,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12241,
        "fields": {
            "answer": 3501,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.00002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12242,
        "fields": {
            "answer": 3502,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.00002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12260,
        "fields": {
            "answer": 3315,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.0017
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12261,
        "fields": {
            "answer": 3316,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.034
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12285,
        "fields": {
            "answer": 3333,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.0003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12288,
        "fields": {
            "answer": 12280,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.0007
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12290,
        "fields": {
            "answer": 3334,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.0003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12291,
        "fields": {
            "answer": 3335,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.00002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12305,
        "fields": {
            "answer": 3320,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.00004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12310,
        "fields": {
            "answer": 3324,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.00098
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12311,
        "fields": {
            "answer": 3323,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.023
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12313,
        "fields": {
            "answer": 12312,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.3
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12431,
        "fields": {
            "answer": 3330,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.00002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12433,
        "fields": {
            "answer": 3331,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12436,
        "fields": {
            "answer": 3332,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.00002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12441,
        "fields": {
            "answer": 12439,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.0006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12445,
        "fields": {
            "answer": 12443,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12450,
        "fields": {
            "answer": 3311,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.00002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12451,
        "fields": {
            "answer": 3313,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.0002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12455,
        "fields": {
            "answer": 3310,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.00002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12467,
        "fields": {
            "answer": 3328,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.00002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12469,
        "fields": {
            "answer": 3327,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.00002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12475,
        "fields": {
            "answer": 3341,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12480,
        "fields": {
            "answer": 3342,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.00002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12481,
        "fields": {
            "answer": 3337,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.0008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12482,
        "fields": {
            "answer": 3338,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.0002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12486,
        "fields": {
            "answer": 3344,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12487,
        "fields": {
            "answer": 3345,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12491,
        "fields": {
            "answer": 3369,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12492,
        "fields": {
            "answer": 3368,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12505,
        "fields": {
            "answer": 3429,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12520,
        "fields": {
            "answer": 3488,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.0095
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12539,
        "fields": {
            "answer": 12506,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12546,
        "fields": {
            "answer": 3362,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12552,
        "fields": {
            "answer": 3386,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12573,
        "fields": {
            "answer": 12567,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12574,
        "fields": {
            "answer": 3492,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.0043
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12575,
        "fields": {
            "answer": 3491,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12578,
        "fields": {
            "answer": 3373,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12582,
        "fields": {
            "answer": 3372,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12734,
        "fields": {
            "answer": 3431,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 13031,
        "fields": {
            "answer": 12916,
            "candidate": 12917,
            "affected_candidate": 50000,
            "global_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 13032,
        "fields": {
            "answer": 12916,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 13061,
        "fields": {
            "answer": 12915,
            "candidate": 12917,
            "affected_candidate": 12917,
            "global_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 13064,
        "fields": {
            "answer": 12913,
            "candidate": 12917,
            "affected_candidate": 12917,
            "global_multiplier": -0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 13065,
        "fields": {
            "answer": 12913,
            "candidate": 12974,
            "affected_candidate": 12974,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 13066,
        "fields": {
            "answer": 12854,
            "candidate": 12974,
            "affected_candidate": 12974,
            "global_multiplier": -0.086
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 13079,
        "fields": {
            "answer": 13071,
            "candidate": 12974,
            "affected_candidate": 12974,
            "global_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 13080,
        "fields": {
            "answer": 13070,
            "candidate": 12974,
            "affected_candidate": 12974,
            "global_multiplier": 0.022
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 13082,
        "fields": {
            "answer": 13068,
            "candidate": 12974,
            "affected_candidate": 12974,
            "global_multiplier": 0.013
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 13083,
        "fields": {
            "answer": 13069,
            "candidate": 12974,
            "affected_candidate": 12974,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 13084,
        "fields": {
            "answer": 3490,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": -0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 13092,
        "fields": {
            "answer": 3412,
            "candidate": 1001,
            "affected_candidate": 1001,
            "global_multiplier": 0.0022
        }
    }
]

campaignTrail_temp.answer_score_issue_json = [
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 829,
        "fields": {
            "answer": 3397,
            "issue": 27,
            "issue_score": 0.2,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 830,
        "fields": {
            "answer": 3397,
            "issue": 28,
            "issue_score": 0.4,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 831,
        "fields": {
            "answer": 3397,
            "issue": 29,
            "issue_score": 0.2,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 832,
        "fields": {
            "answer": 3397,
            "issue": 30,
            "issue_score": 0.4,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 834,
        "fields": {
            "answer": 3398,
            "issue": 27,
            "issue_score": 0.2,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 835,
        "fields": {
            "answer": 3398,
            "issue": 28,
            "issue_score": 0.2,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 836,
        "fields": {
            "answer": 3398,
            "issue": 29,
            "issue_score": -0.6,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 837,
        "fields": {
            "answer": 3398,
            "issue": 30,
            "issue_score": 0.2,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 992,
        "fields": {
            "answer": 3489,
            "issue": 28,
            "issue_score": -0.1,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 993,
        "fields": {
            "answer": 3310,
            "issue": 30,
            "issue_score": 0.6,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1003,
        "fields": {
            "answer": 3314,
            "issue": 27,
            "issue_score": 0.7,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1004,
        "fields": {
            "answer": 3315,
            "issue": 27,
            "issue_score": -0.2,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1005,
        "fields": {
            "answer": 3316,
            "issue": 27,
            "issue_score": -0.8,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1007,
        "fields": {
            "answer": 3318,
            "issue": 31,
            "issue_score": 0.7,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1008,
        "fields": {
            "answer": 3319,
            "issue": 31,
            "issue_score": -0.45,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1009,
        "fields": {
            "answer": 3320,
            "issue": 31,
            "issue_score": -0.45,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1012,
        "fields": {
            "answer": 3321,
            "issue": 31,
            "issue_score": -0.8,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1013,
        "fields": {
            "answer": 3322,
            "issue": 28,
            "issue_score": 0.25,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1014,
        "fields": {
            "answer": 3323,
            "issue": 28,
            "issue_score": -0.6,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1015,
        "fields": {
            "answer": 3324,
            "issue": 28,
            "issue_score": 0.7,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1020,
        "fields": {
            "answer": 3329,
            "issue": 27,
            "issue_score": -0.2,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1034,
        "fields": {
            "answer": 3341,
            "issue": 29,
            "issue_score": 0.7,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1039,
        "fields": {
            "answer": 3374,
            "issue": 28,
            "issue_score": 0.65,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 1041,
        "fields": {
            "answer": 3377,
            "issue": 28,
            "issue_score": -0.7,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12244,
        "fields": {
            "answer": 3502,
            "issue": 28,
            "issue_score": 0.2,
            "issue_importance": 0.8
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12247,
        "fields": {
            "answer": 3502,
            "issue": 29,
            "issue_score": -0.5,
            "issue_importance": 1.3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12248,
        "fields": {
            "answer": 3502,
            "issue": 27,
            "issue_score": 0.2,
            "issue_importance": 0.8
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12252,
        "fields": {
            "answer": 3501,
            "issue": 27,
            "issue_score": 0.7,
            "issue_importance": 0.8
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12253,
        "fields": {
            "answer": 3501,
            "issue": 29,
            "issue_score": 0.5,
            "issue_importance": 1.3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12254,
        "fields": {
            "answer": 3501,
            "issue": 28,
            "issue_score": 0.7,
            "issue_importance": 0.8
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12286,
        "fields": {
            "answer": 3333,
            "issue": 28,
            "issue_score": 0.2,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12287,
        "fields": {
            "answer": 3334,
            "issue": 28,
            "issue_score": -0.3,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12289,
        "fields": {
            "answer": 12280,
            "issue": 28,
            "issue_score": -0.2,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12292,
        "fields": {
            "answer": 3335,
            "issue": 28,
            "issue_score": 0.7,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12309,
        "fields": {
            "answer": 3322,
            "issue": 29,
            "issue_score": -0.2,
            "issue_importance": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12314,
        "fields": {
            "answer": 12312,
            "issue": 28,
            "issue_score": -0.9,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12434,
        "fields": {
            "answer": 3331,
            "issue": 27,
            "issue_score": 0.8,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12437,
        "fields": {
            "answer": 3332,
            "issue": 27,
            "issue_score": 0.7,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12442,
        "fields": {
            "answer": 12439,
            "issue": 27,
            "issue_score": -0.1,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12446,
        "fields": {
            "answer": 12443,
            "issue": 27,
            "issue_score": -0.7,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12448,
        "fields": {
            "answer": 3311,
            "issue": 29,
            "issue_score": -0.1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12449,
        "fields": {
            "answer": 3311,
            "issue": 30,
            "issue_score": -0.1,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12452,
        "fields": {
            "answer": 3313,
            "issue": 30,
            "issue_score": -0.6,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12454,
        "fields": {
            "answer": 3313,
            "issue": 29,
            "issue_score": -0.3,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12470,
        "fields": {
            "answer": 3327,
            "issue": 27,
            "issue_score": 0.7,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12474,
        "fields": {
            "answer": 3341,
            "issue": 28,
            "issue_score": 0.7,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12477,
        "fields": {
            "answer": 3342,
            "issue": 31,
            "issue_score": 0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12478,
        "fields": {
            "answer": 3342,
            "issue": 27,
            "issue_score": 0.5,
            "issue_importance": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12479,
        "fields": {
            "answer": 3342,
            "issue": 28,
            "issue_score": 0.5,
            "issue_importance": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12488,
        "fields": {
            "answer": 3344,
            "issue": 29,
            "issue_score": 0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12489,
        "fields": {
            "answer": 3345,
            "issue": 29,
            "issue_score": -0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12493,
        "fields": {
            "answer": 3366,
            "issue": 29,
            "issue_score": -0.6,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12497,
        "fields": {
            "answer": 3367,
            "issue": 29,
            "issue_score": 0.7,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12498,
        "fields": {
            "answer": 3368,
            "issue": 27,
            "issue_score": 0.7,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12499,
        "fields": {
            "answer": 3369,
            "issue": 29,
            "issue_score": -0.2,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12500,
        "fields": {
            "answer": 3381,
            "issue": 29,
            "issue_score": -0.3,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12501,
        "fields": {
            "answer": 3381,
            "issue": 28,
            "issue_score": 0.3,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12502,
        "fields": {
            "answer": 3382,
            "issue": 29,
            "issue_score": 0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12503,
        "fields": {
            "answer": 3382,
            "issue": 28,
            "issue_score": 0.7,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12504,
        "fields": {
            "answer": 3429,
            "issue": 28,
            "issue_score": 0.8,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12521,
        "fields": {
            "answer": 3488,
            "issue": 28,
            "issue_score": 0.7,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12540,
        "fields": {
            "answer": 12506,
            "issue": 28,
            "issue_score": 0.7,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12541,
        "fields": {
            "answer": 3487,
            "issue": 28,
            "issue_score": 0.2,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12547,
        "fields": {
            "answer": 3362,
            "issue": 28,
            "issue_score": 0.7,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12548,
        "fields": {
            "answer": 3360,
            "issue": 28,
            "issue_score": 0.1,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12549,
        "fields": {
            "answer": 3359,
            "issue": 28,
            "issue_score": 0.4,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12550,
        "fields": {
            "answer": 3385,
            "issue": 27,
            "issue_score": 2,
            "issue_importance": 0.6
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12551,
        "fields": {
            "answer": 3385,
            "issue": 29,
            "issue_score": 2,
            "issue_importance": -0.6
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12553,
        "fields": {
            "answer": 3386,
            "issue": 27,
            "issue_score": 2,
            "issue_importance": -0.7
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12555,
        "fields": {
            "answer": 3387,
            "issue": 28,
            "issue_score": 0.8,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12556,
        "fields": {
            "answer": 3387,
            "issue": 27,
            "issue_score": 0.6,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12557,
        "fields": {
            "answer": 3374,
            "issue": 29,
            "issue_score": -0.05,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12559,
        "fields": {
            "answer": 3375,
            "issue": 28,
            "issue_score": 0.8,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12561,
        "fields": {
            "answer": 3376,
            "issue": 27,
            "issue_score": 0.6,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12562,
        "fields": {
            "answer": 3376,
            "issue": 28,
            "issue_score": -0.2,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12563,
        "fields": {
            "answer": 3490,
            "issue": 30,
            "issue_score": -0.9,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12566,
        "fields": {
            "answer": 3491,
            "issue": 30,
            "issue_score": -0.6,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12571,
        "fields": {
            "answer": 3492,
            "issue": 30,
            "issue_score": 0.5,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12572,
        "fields": {
            "answer": 12567,
            "issue": 30,
            "issue_score": 0.9,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12590,
        "fields": {
            "answer": 3468,
            "issue": 29,
            "issue_score": 0.7,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12591,
        "fields": {
            "answer": 3469,
            "issue": 28,
            "issue_score": 0.7,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12592,
        "fields": {
            "answer": 3470,
            "issue": 27,
            "issue_score": 0.7,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12593,
        "fields": {
            "answer": 12587,
            "issue": 29,
            "issue_score": -0.7,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12616,
        "fields": {
            "answer": 3389,
            "issue": 31,
            "issue_score": -0.7,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12617,
        "fields": {
            "answer": 3388,
            "issue": 31,
            "issue_score": 0.7,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12735,
        "fields": {
            "answer": 3430,
            "issue": 28,
            "issue_score": 0.4,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12736,
        "fields": {
            "answer": 3431,
            "issue": 27,
            "issue_score": -0.05,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12737,
        "fields": {
            "answer": 3492,
            "issue": 27,
            "issue_score": 0.7,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12739,
        "fields": {
            "answer": 3371,
            "issue": 30,
            "issue_score": -0.8,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12740,
        "fields": {
            "answer": 3370,
            "issue": 30,
            "issue_score": 0.2,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12741,
        "fields": {
            "answer": 3372,
            "issue": 30,
            "issue_score": 0.6,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12742,
        "fields": {
            "answer": 3373,
            "issue": 30,
            "issue_score": 0.8,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 13076,
        "fields": {
            "answer": 13071,
            "issue": 30,
            "issue_score": -0.2,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 13077,
        "fields": {
            "answer": 13071,
            "issue": 29,
            "issue_score": -0.2,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 13078,
        "fields": {
            "answer": 13071,
            "issue": 28,
            "issue_score": -0.2,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 13081,
        "fields": {
            "answer": 13069,
            "issue": 28,
            "issue_score": 0.7,
            "issue_importance": 3
        }
    }
]

campaignTrail_temp.answer_score_state_json = [
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 8860,
        "fields": {
            "answer": 3397,
            "state": 184,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 8861,
        "fields": {
            "answer": 3397,
            "state": 197,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 8862,
        "fields": {
            "answer": 3397,
            "state": 198,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 8863,
        "fields": {
            "answer": 3397,
            "state": 205,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 8864,
        "fields": {
            "answer": 3397,
            "state": 222,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 8945,
        "fields": {
            "answer": 3460,
            "state": 209,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 8946,
        "fields": {
            "answer": 3460,
            "state": 215,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 8947,
        "fields": {
            "answer": 3460,
            "state": 218,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12083,
        "fields": {
            "answer": 3370,
            "state": 189,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12240,
        "fields": {
            "answer": 3501,
            "state": 203,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0009
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12243,
        "fields": {
            "answer": 3501,
            "state": 228,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12249,
        "fields": {
            "answer": 3502,
            "state": 184,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0009
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12250,
        "fields": {
            "answer": 3502,
            "state": 198,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0009
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12251,
        "fields": {
            "answer": 3502,
            "state": 189,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0009
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12255,
        "fields": {
            "answer": 3398,
            "state": 189,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12256,
        "fields": {
            "answer": 3398,
            "state": 190,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12257,
        "fields": {
            "answer": 3398,
            "state": 222,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12258,
        "fields": {
            "answer": 3398,
            "state": 186,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12259,
        "fields": {
            "answer": 3398,
            "state": 183,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12270,
        "fields": {
            "answer": 3314,
            "state": 228,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12273,
        "fields": {
            "answer": 3314,
            "state": 181,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.0005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12274,
        "fields": {
            "answer": 3314,
            "state": 224,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.0005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12275,
        "fields": {
            "answer": 3314,
            "state": 192,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.0005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12276,
        "fields": {
            "answer": 3314,
            "state": 220,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.0005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12278,
        "fields": {
            "answer": 3314,
            "state": 212,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12279,
        "fields": {
            "answer": 3314,
            "state": 185,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12293,
        "fields": {
            "answer": 3319,
            "state": 229,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12294,
        "fields": {
            "answer": 3318,
            "state": 217,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0007
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12295,
        "fields": {
            "answer": 3318,
            "state": 187,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0007
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12296,
        "fields": {
            "answer": 3318,
            "state": 227,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0007
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12297,
        "fields": {
            "answer": 3318,
            "state": 225,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0007
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12298,
        "fields": {
            "answer": 3318,
            "state": 203,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0007
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12299,
        "fields": {
            "answer": 3318,
            "state": 229,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12300,
        "fields": {
            "answer": 3321,
            "state": 181,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12301,
        "fields": {
            "answer": 3321,
            "state": 181,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12302,
        "fields": {
            "answer": 3321,
            "state": 181,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12303,
        "fields": {
            "answer": 3321,
            "state": 181,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12304,
        "fields": {
            "answer": 3321,
            "state": 181,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12306,
        "fields": {
            "answer": 3320,
            "state": 229,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12307,
        "fields": {
            "answer": 3320,
            "state": 218,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12308,
        "fields": {
            "answer": 3320,
            "state": 223,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12457,
        "fields": {
            "answer": 3310,
            "state": 223,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.0008
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12458,
        "fields": {
            "answer": 3310,
            "state": 189,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.0008
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12459,
        "fields": {
            "answer": 3329,
            "state": 198,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12460,
        "fields": {
            "answer": 3329,
            "state": 189,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12461,
        "fields": {
            "answer": 3329,
            "state": 222,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12462,
        "fields": {
            "answer": 3329,
            "state": 184,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12463,
        "fields": {
            "answer": 3329,
            "state": 190,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12464,
        "fields": {
            "answer": 3328,
            "state": 198,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12465,
        "fields": {
            "answer": 3328,
            "state": 189,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0002
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12466,
        "fields": {
            "answer": 3328,
            "state": 222,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0002
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12471,
        "fields": {
            "answer": 3327,
            "state": 198,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.0003
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12472,
        "fields": {
            "answer": 3328,
            "state": 184,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0002
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12473,
        "fields": {
            "answer": 3328,
            "state": 190,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0003
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12494,
        "fields": {
            "answer": 3366,
            "state": 189,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12495,
        "fields": {
            "answer": 3366,
            "state": 184,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12496,
        "fields": {
            "answer": 3366,
            "state": 222,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12508,
        "fields": {
            "answer": 3489,
            "state": 223,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12509,
        "fields": {
            "answer": 3489,
            "state": 185,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12510,
        "fields": {
            "answer": 3489,
            "state": 213,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12511,
        "fields": {
            "answer": 3489,
            "state": 189,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12512,
        "fields": {
            "answer": 3489,
            "state": 183,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12513,
        "fields": {
            "answer": 3489,
            "state": 193,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12515,
        "fields": {
            "answer": 3489,
            "state": 190,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12516,
        "fields": {
            "answer": 3489,
            "state": 195,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.014
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12517,
        "fields": {
            "answer": 3489,
            "state": 194,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.014
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12518,
        "fields": {
            "answer": 3489,
            "state": 197,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12519,
        "fields": {
            "answer": 3489,
            "state": 199,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12522,
        "fields": {
            "answer": 3488,
            "state": 223,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12523,
        "fields": {
            "answer": 3488,
            "state": 185,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12525,
        "fields": {
            "answer": 3488,
            "state": 189,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12526,
        "fields": {
            "answer": 3488,
            "state": 213,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12527,
        "fields": {
            "answer": 3488,
            "state": 183,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12528,
        "fields": {
            "answer": 3488,
            "state": 193,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12529,
        "fields": {
            "answer": 3488,
            "state": 190,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12530,
        "fields": {
            "answer": 3488,
            "state": 195,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12531,
        "fields": {
            "answer": 3488,
            "state": 194,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12532,
        "fields": {
            "answer": 3488,
            "state": 181,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12533,
        "fields": {
            "answer": 3489,
            "state": 218,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12534,
        "fields": {
            "answer": 3489,
            "state": 231,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.0045
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12535,
        "fields": {
            "answer": 3489,
            "state": 229,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.0045
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12536,
        "fields": {
            "answer": 3488,
            "state": 229,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12537,
        "fields": {
            "answer": 3488,
            "state": 231,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12538,
        "fields": {
            "answer": 3488,
            "state": 199,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12542,
        "fields": {
            "answer": 3487,
            "state": 185,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12543,
        "fields": {
            "answer": 3487,
            "state": 223,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12544,
        "fields": {
            "answer": 3487,
            "state": 195,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12545,
        "fields": {
            "answer": 3487,
            "state": 194,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12554,
        "fields": {
            "answer": 3386,
            "state": 223,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12579,
        "fields": {
            "answer": 3373,
            "state": 189,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12580,
        "fields": {
            "answer": 3372,
            "state": 189,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12581,
        "fields": {
            "answer": 3371,
            "state": 189,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12594,
        "fields": {
            "answer": 3457,
            "state": 189,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12595,
        "fields": {
            "answer": 3457,
            "state": 198,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12596,
        "fields": {
            "answer": 3457,
            "state": 184,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12597,
        "fields": {
            "answer": 3457,
            "state": 222,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12598,
        "fields": {
            "answer": 3457,
            "state": 213,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12599,
        "fields": {
            "answer": 3457,
            "state": 190,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12600,
        "fields": {
            "answer": 3458,
            "state": 205,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12601,
        "fields": {
            "answer": 3458,
            "state": 221,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12602,
        "fields": {
            "answer": 3458,
            "state": 214,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12603,
        "fields": {
            "answer": 3458,
            "state": 195,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12604,
        "fields": {
            "answer": 3458,
            "state": 207,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12605,
        "fields": {
            "answer": 3458,
            "state": 186,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12608,
        "fields": {
            "answer": 3459,
            "state": 185,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12609,
        "fields": {
            "answer": 3459,
            "state": 217,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12610,
        "fields": {
            "answer": 3459,
            "state": 227,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12611,
        "fields": {
            "answer": 3459,
            "state": 183,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12612,
        "fields": {
            "answer": 3460,
            "state": 210,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12613,
        "fields": {
            "answer": 3460,
            "state": 212,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12614,
        "fields": {
            "answer": 3460,
            "state": 200,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12615,
        "fields": {
            "answer": 3460,
            "state": 199,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12743,
        "fields": {
            "answer": 3314,
            "state": 201,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12744,
        "fields": {
            "answer": 3387,
            "state": 190,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.00088
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12745,
        "fields": {
            "answer": 3387,
            "state": 197,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.00088
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12746,
        "fields": {
            "answer": 3387,
            "state": 222,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.00088
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12747,
        "fields": {
            "answer": 3487,
            "state": 218,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12748,
        "fields": {
            "answer": 3487,
            "state": 215,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12749,
        "fields": {
            "answer": 3489,
            "state": 215,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13033,
        "fields": {
            "answer": 3316,
            "state": 181,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13034,
        "fields": {
            "answer": 3316,
            "state": 183,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13035,
        "fields": {
            "answer": 3316,
            "state": 184,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13036,
        "fields": {
            "answer": 3316,
            "state": 186,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13037,
        "fields": {
            "answer": 3316,
            "state": 190,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13038,
        "fields": {
            "answer": 3316,
            "state": 192,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13039,
        "fields": {
            "answer": 3316,
            "state": 196,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13040,
        "fields": {
            "answer": 3316,
            "state": 197,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13041,
        "fields": {
            "answer": 3316,
            "state": 198,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13042,
        "fields": {
            "answer": 3316,
            "state": 204,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13043,
        "fields": {
            "answer": 3316,
            "state": 206,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13044,
        "fields": {
            "answer": 3316,
            "state": 207,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13045,
        "fields": {
            "answer": 3316,
            "state": 211,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13046,
        "fields": {
            "answer": 3316,
            "state": 213,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13047,
        "fields": {
            "answer": 3316,
            "state": 214,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13048,
        "fields": {
            "answer": 3316,
            "state": 216,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13049,
        "fields": {
            "answer": 3316,
            "state": 220,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13050,
        "fields": {
            "answer": 3316,
            "state": 221,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13051,
        "fields": {
            "answer": 3316,
            "state": 222,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13052,
        "fields": {
            "answer": 3316,
            "state": 224,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13053,
        "fields": {
            "answer": 3316,
            "state": 226,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13054,
        "fields": {
            "answer": 3316,
            "state": 231,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.028
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13055,
        "fields": {
            "answer": 3371,
            "state": 195,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13056,
        "fields": {
            "answer": 3371,
            "state": 205,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13057,
        "fields": {
            "answer": 3371,
            "state": 215,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13086,
        "fields": {
            "answer": 3411,
            "state": 205,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0045
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13087,
        "fields": {
            "answer": 3411,
            "state": 207,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0045
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13088,
        "fields": {
            "answer": 3411,
            "state": 214,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0045
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13089,
        "fields": {
            "answer": 3411,
            "state": 221,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.0045
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 13091,
        "fields": {
            "answer": 3412,
            "state": 195,
            "candidate": 1001,
            "affected_candidate": 1001,
            "state_multiplier": 0.00888
        }
    }
]

campaignTrail_temp.answer_feedback_json = [
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 712,
        "fields": {
            "answer": 3314,
            "candidate": 1001,
            "answer_feedback": "This is expected, you are in too deep on this position to possibly pull out on it now. Expect to retain your support you’ve held among women and liberals on the issue."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 713,
        "fields": {
            "answer": 3315,
            "candidate": 1001,
            "answer_feedback": "No matter how principled this is, the majority of Americans are for the legality of abortion, and betraying your overwhelmingly pro Roe base is just a further twist of the knife."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 714,
        "fields": {
            "answer": 3316,
            "candidate": 1001,
            "answer_feedback": "This is a bombshell and a shocking betrayal of the feminist part of your base. You have essentially nothing to gain here as pro-lifers are going to vote for Forbes anyways."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 716,
        "fields": {
            "answer": 3318,
            "candidate": 1001,
            "answer_feedback": "West Virginia is going to hate this. Still, you’ve earned a lot of praise by environmentalists for standing ground."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 717,
        "fields": {
            "answer": 3319,
            "candidate": 1001,
            "answer_feedback": "A pretty bold declaration, many are still skeptical and the coal and oil industries are in uproar about this, but it sounds good and will stop the bleeding in some natural gas reliant states."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 718,
        "fields": {
            "answer": 3320,
            "candidate": 1001,
            "answer_feedback": "This is seen as a reversal on your adamantly anti-coal and anti-fossel fuel position, but you can argue that there’s several states that might be up for grabs that you would be abandoning by not taking this stance."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 719,
        "fields": {
            "answer": 3321,
            "candidate": 1001,
            "answer_feedback": "Even if you might’ve needed to backtrack a bit on the issue, you’re going arguably too far and protecting the environment is still a somewhat popular message you’re doing a complete 180 on."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 754,
        "fields": {
            "answer": 3362,
            "candidate": 1001,
            "answer_feedback": "Offering a tax hike with taxes being unpopularly high is unsellable."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 768,
        "fields": {
            "answer": 3385,
            "candidate": 1001,
            "answer_feedback": "This is broadly accepted and popular with both leftists and mainstream Democrats, for once the fractious party has a united cause."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 833,
        "fields": {
            "answer": 3341,
            "candidate": 1001,
            "answer_feedback": " It's true that your background is a bit more relatable and personable to most. You want to really emphasize the grassroots and organic nature of your campaign to appeal to lower and middle class Americans, it worked for you against Boschwitz."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 852,
        "fields": {
            "answer": 3366,
            "candidate": 1001,
            "answer_feedback": "Tying yourself to more moderate and popular figures like Kennedy and Clinton is a good way to rhetorically moderate yourself whilst not going back on promises."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 853,
        "fields": {
            "answer": 3367,
            "candidate": 1001,
            "answer_feedback": "Some get what you’re trying to do here, but a soundbite where you outright proclaim yourself a socialist is very much not the move you wanna take here."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 854,
        "fields": {
            "answer": 3368,
            "candidate": 1001,
            "answer_feedback": "Saying that the American government is outright “broken,” and brandishing the label of a radical is alienating to moderates and even some Liberals."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 861,
        "fields": {
            "answer": 3376,
            "candidate": 1001,
            "answer_feedback": "This is an interesting angle not many have taken. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 868,
        "fields": {
            "answer": 3386,
            "candidate": 1001,
            "answer_feedback": "This is a puzzlingly conservative answer, hate crime laws have broad support within your party and fervent support in your wing of it."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 870,
        "fields": {
            "answer": 3389,
            "candidate": 1001,
            "answer_feedback": "Unexpected, but not taken very harshly given it's obvious flaws and array of opposition including a majority of Democrats. It is also not a large or pressing issue."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 872,
        "fields": {
            "answer": 3397,
            "candidate": 1001,
            "answer_feedback": "This is somewhat of a revival of Clinton’s “Wimp Factor” attacks, digging into Forbes as clueless, ineptly aristocratic, and completely bought out by corporate interests. It definitely sates your left base and builds low propensity support, despite some of your lines on the economy and social issues turning away moderates."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 873,
        "fields": {
            "answer": 3398,
            "candidate": 1001,
            "answer_feedback": "Focusing on uniting the party is going to be a pretty key part of your platform, you need to keep all parts of the party in line and voting if you want to win this."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 878,
        "fields": {
            "answer": 3411,
            "candidate": 1001,
            "answer_feedback": "These are typically red states now, but maybe you can pull something off?\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 880,
        "fields": {
            "answer": 3429,
            "candidate": 1001,
            "answer_feedback": "This is a somewhat controversial take as much of Taft Hartley has become common consensus and sentiment at this point, regardless, leftists and unions are happy to see you go all the way and endorse a full repeal."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 881,
        "fields": {
            "answer": 3430,
            "candidate": 1001,
            "answer_feedback": "Opting to only repeal some of Taft-Hartley is enough to moderate your rhetoric whilst also keeping you in good graces with unions, despite it not being exactly the policy that some on the left want you to pursue. Most of what you want can be achieved by just cutting down or amending a few provisions anyways."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 882,
        "fields": {
            "answer": 3431,
            "candidate": 1001,
            "answer_feedback": "This is a really tough bullet to bite for your supporters. While you want to moderate and broaden your appeal, this is going to depress turnout among your key blocs and harm your carefully curated image as an unabashedly pro-labor politician."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 896,
        "fields": {
            "answer": 3468,
            "candidate": 1001,
            "answer_feedback": "An appeal to the “silent majority?”"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 897,
        "fields": {
            "answer": 3469,
            "candidate": 1001,
            "answer_feedback": "This is your bread and butter, but keep in mind some states like Florida can be somewhat fiscally conservative."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 898,
        "fields": {
            "answer": 3470,
            "candidate": 1001,
            "answer_feedback": "An appeal to civic libertarians may bring in some, but be careful."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 901,
        "fields": {
            "answer": 3487,
            "candidate": 1001,
            "answer_feedback": "Free trade is too popular to not support, even with certain caveats."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 902,
        "fields": {
            "answer": 3488,
            "candidate": 1001,
            "answer_feedback": "Free trade is undeniably popular and a large majority of Americans think that NAFTA was beneficial, this is a swing to the left that is going to alienate many."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 903,
        "fields": {
            "answer": 3489,
            "candidate": 1001,
            "answer_feedback": "This is going to be a hit with the moderate wing of the party who are happy to see you come to their side on the issue, but it’s going to be a source of alienation to many in the Midwest. However, Forbes shares this stance, so many protectionists are unlikely to break for him anyways."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 905,
        "fields": {
            "answer": 3311,
            "candidate": 1001,
            "answer_feedback": "It was an unpopular decision, but you’re only going to hurt yourself by flip flopping. Might as well just try to minimize it as much as possible. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 913,
        "fields": {
            "answer": 3322,
            "candidate": 1001,
            "answer_feedback": "This is seen as a mainstream opinion from your otherwise quite unconventional campaign, make sure to balance your left-populism with unifying policies."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 914,
        "fields": {
            "answer": 3323,
            "candidate": 1001,
            "answer_feedback": "This is a concession on a pretty big issue, the opposition on the left to this as a policy is pretty universal."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 915,
        "fields": {
            "answer": 3324,
            "candidate": 1001,
            "answer_feedback": "While very much what your left wing base wants to hear, moderates and undecided voters groan at tax hikes."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 919,
        "fields": {
            "answer": 3328,
            "candidate": 1001,
            "answer_feedback": "This will shore up some southern support if you can play it right, winning the south is pretty big for you, and Forbes is polling pretty well down there."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 920,
        "fields": {
            "answer": 3329,
            "candidate": 1001,
            "answer_feedback": "It’s maybe a bit of a cynical move, but winning places like Florida and Tennessee is important so I don’t think many can exactly blame you for taking this route."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 928,
        "fields": {
            "answer": 3337,
            "candidate": 1001,
            "answer_feedback": "It’s best to not feed this, you’re entirely unrelated to this scandal, and Republicans are going to struggle to tie it to you in any way."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 929,
        "fields": {
            "answer": 3338,
            "candidate": 1001,
            "answer_feedback": "Why insult Clinton? He’s not in this race, but you don’t have much to gain by trashing on him."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 944,
        "fields": {
            "answer": 3359,
            "candidate": 1001,
            "answer_feedback": "This is not anything to rally around for most, but pledging to raise taxes only on the wealthy is a safe middle ground to appeal to workers skeptical of tax hikes and leftists who want increased revenue."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 945,
        "fields": {
            "answer": 3360,
            "candidate": 1001,
            "answer_feedback": "Pledging to not raise taxes when taxes are already seen as too high is definitely popular, just be true to your promise or you'll end up like former President Bush."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 952,
        "fields": {
            "answer": 3369,
            "candidate": 1001,
            "answer_feedback": "You’re going to have to try quite hard to skin this cat. Forbes isn't seen as particularly radical, for all intents and purposes, he’s seen as closer to the center than you are."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 953,
        "fields": {
            "answer": 3370,
            "candidate": 1001,
            "answer_feedback": "Somewhat unexpected to go with Clinton’s line on this issue, but it’s not very offensive to most people anyways."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 955,
        "fields": {
            "answer": 3373,
            "candidate": 1001,
            "answer_feedback": "Cuba is a communist dictatorship and trying to act in their defense is deeply unpopular. Cuban Americans are outraged, with most choosing to vote for Forbes instead."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 956,
        "fields": {
            "answer": 3374,
            "candidate": 1001,
            "answer_feedback": "This is the expected position of a Democrat."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 957,
        "fields": {
            "answer": 3375,
            "candidate": 1001,
            "answer_feedback": "You were a public school teacher, after all, people can give you some leeway with this take given that you can attest to student hardships personally. This is still seen as somewhat too leftist for America right now, however."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 959,
        "fields": {
            "answer": 3377,
            "candidate": 1001,
            "answer_feedback": "Paul Wellstone, the public school teacher and progressive senator, a school choicer?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 963,
        "fields": {
            "answer": 3381,
            "candidate": 1001,
            "answer_feedback": "Framing it as giving consumers another choice is not terrible rhetoric."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 964,
        "fields": {
            "answer": 3382,
            "candidate": 1001,
            "answer_feedback": "This is a novel take that piques people's interests, many are unfamiliar with it as a policy and are somewhat interested in the idea. People are glad to see you stick to your guns and not give up on the issue."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 966,
        "fields": {
            "answer": 3384,
            "candidate": 1001,
            "answer_feedback": "You’re missing out on ground to introduce novel policy that could potentially gain support among common Americans."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 967,
        "fields": {
            "answer": 3387,
            "candidate": 1001,
            "answer_feedback": "This may be pushing it, you can ride the wave of popular support for the policy without making it a divisive push for greater welfare funding."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 998,
        "fields": {
            "answer": 3388,
            "candidate": 1001,
            "answer_feedback": "This is nothing but expected of you. It is also not a large or pressing issue."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12245,
        "fields": {
            "answer": 3501,
            "candidate": 1001,
            "answer_feedback": "The Liberal Lion roars, earth shivers. Your people, the left, they’re in hysteria. They can hardly believe it as much as you."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12246,
        "fields": {
            "answer": 3502,
            "candidate": 1001,
            "answer_feedback": "Pundits notice an absence in mentioning your more left wing policies, favoring to instead focus on party unity."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12281,
        "fields": {
            "answer": 12280,
            "candidate": 1001,
            "answer_feedback": "Definitely doing a bit of cheating on Ross Perot’s homework here. It’s a hard move to swing though when faced with a right who wants tax cuts and a left that wants a spending splash. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12282,
        "fields": {
            "answer": 3335,
            "candidate": 1001,
            "answer_feedback": "A very “you” answer. It’ll scare off a lot of fiscal moderates and conservatives who came to support the Democratic party during its shift right during the 90s, but you could make up for it in low propensity and union voters if you play your cards right."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12283,
        "fields": {
            "answer": 3334,
            "candidate": 1001,
            "answer_feedback": "Many in your camp are displeased to hear your economic plans involve tax cuts for the rich, but promising a big tax cut tends to draw in a lot of Americans."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12284,
        "fields": {
            "answer": 3333,
            "candidate": 1001,
            "answer_feedback": "This is likely your safest answer. Americans want a tax cut, but framing your tax cut as helpful, and Forbes as just a handout to the wealthy is going to set you apart as the choice for the lower and middle classes."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12429,
        "fields": {
            "answer": 12312,
            "candidate": 1001,
            "answer_feedback": "RON PAUL!?!?!?!?????"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12430,
        "fields": {
            "answer": 3330,
            "candidate": 1001,
            "answer_feedback": "This is undeniably a safer position, and somewhat expected, but some still expected more out of you given your outspokenly pro-gay positions in the past."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12432,
        "fields": {
            "answer": 3331,
            "candidate": 1001,
            "answer_feedback": "This will secure you the gay vote, certainly, but is a nuke of a position, expect to hear this in every single Forbes advertisement over the next year. It’s highly improbable that this will not sink your campaign wholesale."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12435,
        "fields": {
            "answer": 3332,
            "candidate": 1001,
            "answer_feedback": "This is a finesse that is still batting quite far to the left of the mainstream, but calling it something else and speaking about it as a purely legal mechanism separate from marriage will really cushion this blow."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12440,
        "fields": {
            "answer": 12439,
            "candidate": 1001,
            "answer_feedback": "It seems like you’re somewhat insecure about your social platform, it’s true that your economic platform is your centerpiece but it doesn’t paint you well to dodge."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12444,
        "fields": {
            "answer": 12443,
            "candidate": 1001,
            "answer_feedback": "Are… are you okay? Mr. Wellstone? Hello?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12447,
        "fields": {
            "answer": 3313,
            "candidate": 1001,
            "answer_feedback": "Flip flopping is not a good thing to do almost ever, especially given your emphasis on character above political games. However this position is more in line with popular conception."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12456,
        "fields": {
            "answer": 3310,
            "candidate": 1001,
            "answer_feedback": "It’s somewhat surprising to see you stick to your guns so thoroughly, it’ll be popular among your crowd, but you have to consider that the Cold War is only just over and the DC consensus is considerably more hawkish."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12468,
        "fields": {
            "answer": 3327,
            "candidate": 1001,
            "answer_feedback": "It’s gutsy, but you’re willing to commit. Let’s hope that voters can see that and support you in November when it matters."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12476,
        "fields": {
            "answer": 3342,
            "candidate": 1001,
            "answer_feedback": "Not a bad idea to focus on the solutions, but you’re practically giving away a layup here, Forbes is rich out the ears and his campaign is extensively corporate."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12483,
        "fields": {
            "answer": 3339,
            "candidate": 1001,
            "answer_feedback": "What he did was cheat on his wife with his secretary. Most people think that is highly immoral and that you shouldn’t minimize it."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12484,
        "fields": {
            "answer": 3344,
            "candidate": 1001,
            "answer_feedback": "This really is your ground game. You get a good trickle of cash in a smattering of small donors, you’re not making as much as Forbes, but you’re getting money whilst getting people to talk, and that surely has to count for something."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12485,
        "fields": {
            "answer": 3345,
            "candidate": 1001,
            "answer_feedback": "There’s a sense of apprehension regarding donors. You can’t exactly juice them out like Clinton could, nor are your policies the type that are particularly viable for it."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12507,
        "fields": {
            "answer": 12506,
            "candidate": 1001,
            "answer_feedback": "???"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12564,
        "fields": {
            "answer": 3490,
            "candidate": 1001,
            "answer_feedback": "A very hawkish answer, this will be somewhat of a breaking of orthodoxy but that’s nothing new for you. Just make sure not to leave behind all the dovish voters who have supported you since day 1."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12568,
        "fields": {
            "answer": 3491,
            "candidate": 1001,
            "answer_feedback": "A focus on multilateral NATO intervention is a good way to sound tough on terrorism whilst not buying into what many would see as a rash jingoism."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12569,
        "fields": {
            "answer": 12567,
            "candidate": 1001,
            "answer_feedback": "Placing the blame on previous administrations for an Islamist terror attack is the kind of gaffe that Republican strategists live for. This type of rhetoric is incredibly fringe and the majority of Americans did and do support US interventions like the Gulf War.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12570,
        "fields": {
            "answer": 3492,
            "candidate": 1001,
            "answer_feedback": "Some appreciate the focus on calmness and responsibility here, but it’s far away the less popular answer with Forbes calling for a strong military action at the same time."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12576,
        "fields": {
            "answer": 3371,
            "candidate": 1001,
            "answer_feedback": "Certainly a calculated move, this will help you shake off your image as weak on dictatorships and friendly to socialism whilst also appealing to Cuban-Americans."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12577,
        "fields": {
            "answer": 3372,
            "candidate": 1001,
            "answer_feedback": "This is seen as too dovish and left wing by moderates and swing voters. A large contingent of Cuban voters in Florida are opposed to lifting the embargo and are hinging their votes on it."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12588,
        "fields": {
            "answer": 12587,
            "candidate": 1001,
            "answer_feedback": "A reconciliation with the center wing? "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12733,
        "fields": {
            "answer": 3412,
            "candidate": 1001,
            "answer_feedback": "Vilsack is a fine choice for Vice President."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12855,
        "fields": {
            "answer": 12854,
            "candidate": 1001,
            "answer_feedback": "Nader is sensible enough to know that despite you being far more mainstream than he is, he stands no chance of actually winning, and you're acceptable enough to him and his followers to consider his campaign a waste of time and votes. Self proclaimed \"professional hippie\" Stephen Gaskin takes his place, but without Nader and without a stark contrast from the Democratic ticket, Green support collapses."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 13059,
        "fields": {
            "answer": 12916,
            "candidate": 1001,
            "answer_feedback": "It's speculative if this is a waste of money or if this will actually translate into a large amount of defections in your favor. Buchanan even went as far as to flaunt his inflated donation count as a sign that he is a legitimate candidate."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 13060,
        "fields": {
            "answer": 12915,
            "candidate": 1001,
            "answer_feedback": "Like it or not, giving him publicity and playing into his renegade image is directly helping him, and while he's pulling more from Forbes than you, it's still not pretty."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 13062,
        "fields": {
            "answer": 12914,
            "candidate": 1001,
            "answer_feedback": "Voters scratch their heads at how exactly Steve Forbes, a relatively mainstream, if not a bit unorthodox, pro-intervention Republican is exactly like Pat Buchanan. It comes across more like a desperate smear."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 13063,
        "fields": {
            "answer": 12913,
            "candidate": 1001,
            "answer_feedback": "You and Forbes are both content to watch Reform finally sputter out and die an agonizing death. With the Green Party directionless and sinking and the Reform Party becoming more isolated and fringe in the national conversation, it looks like it's shaping up to be a real 2 man race."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 13072,
        "fields": {
            "answer": 13070,
            "candidate": 1001,
            "answer_feedback": "It's too little too late. Picking a moderate, or at least tenured Democrat, was your last chance to mend fences here. You've done nothing but give Penny publicity while doing nothing to keep Conservative Democrats on board."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 13073,
        "fields": {
            "answer": 13071,
            "candidate": 1001,
            "answer_feedback": "Probably the most sensible strategy, and it'll likely pay dividends in marginalizing Penny's support. Nader feels somewhat uncomfortable with the idea of such a big general campaign pivot, but it was likely inevitable, Penny or not."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 13074,
        "fields": {
            "answer": 13068,
            "candidate": 1001,
            "answer_feedback": "Ignoring third party candidates is par for the course. It still makes you uncomfortable how many Conservative Democrats and swing voters are starting to favor Penny, however."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 13075,
        "fields": {
            "answer": 13069,
            "candidate": 1001,
            "answer_feedback": "If there was a way to double down, this is it. The issue is that your base isn't big enough to chart the course to 270 electoral college votes without some serious help from those on the fence."
        }
    }
]

campaignTrail_temp.candidate_image_url = "https://i.imgur.com/xR4wGK6.png";
campaignTrail_temp.running_mate_image_url = "https://i.imgur.com/eNX8mUU.png";
campaignTrail_temp.candidate_last_name = "Wellstone";
campaignTrail_temp.running_mate_last_name = "Vilsack";

const style = document.createElement('style');
style.textContent = `

  #campaign_sign {
    background-color: #0000D1;
    border-style: solid;
    border-width: 0.1em;
    border-color: #c4c4c4;
    width: 280px;
    height: 132px;
    margin: 0 auto;
    text-align: center;
    background-image: url(https://i.imgur.com/HyLa3uf.png);
  }

  #campaign_sign p {
    margin: .1em;
    color: #FFF;
    font-size: 0em;
    padding: .2em;
    font-weight: 700;
    line-height: .5em;
  }

  .inner_window_sign_display {
    margin: 0;
    height: 25%;
    position: relative;
    width: 30%;
    height: 192px;
    background-color: #F8F8F8;
    margin-left: auto;
    margin-right: auto;
    border-style: double;
    border-color: #C9C9C9;
}

`;
document.head.appendChild(style);

campaignTrail_temp.multiple_endings = true;
window.endingPicker = (_out, _totv, aa, quickstats) => {

    function setImage(url) {
        if(url == '' || url == null) return;
        let interval = setInterval(function () {
            const img = document.getElementsByClassName("person_image")[0];
            if (img != null) {
                img.src = url;
                clearInterval(interval);
            }
        }, 50);
    }

if (quickstats[0] > 330) { // Wellstone landslide
    window.setSoundtrack(2);
    setImage("https://i.imgur.com/yXL9GMD.png");
    return`
    <div class="ending-slide">
        <h3 class="endingtitle">Euphoria</h3>
        <p>The crowd booms as you step up to the podium. Hundreds of men and women with lives, all as deep and rich and complex as yours, they all came to see you speak, to see you assume the position as their new leader. It fills you with a sense of pride and gratitude, you know you couldn’t do it without them, as easy as it is to claim it all for yourself, it’s theirs too. Like you did when you got the nomination, all you could do is take in the breeze and the sound of the crowd, it fills you with a certain strength in your heart.</p>
        <p>“Thank you.” Is all you open with. It comes out unexpectedly terse and emotional. You really meant it. “For everything you have done.” You start again. “To think that together, we put a schoolteacher from Minnesota into the White House. You believed in me, in my vision and project, and I promise I will do everything in my power to not let you down.” The crowd cheers. “The real fight has just begun, for affordable healthcare, for clean air, for good schools, for an America in which everybody can prosper, not just the few.”</p>
        <p>“In creating a more perfect union, we move forward with a programme that will detail an expansion of societal wealth that we can all share. It is not because of me, but it is because America wants to believe in a better future. Together we will make a government that works for people!” You receive an expected surge of cheers from your crowd for that statement, but it still feels real. It feels almost unreal, actually, like something from a dream, the kind of thing you might’ve fondly fantasized about in the teacher staffroom in between classes.</p>
        <p>You grip the podium, feel its cold, wooden material against your hands. It’s real. You’re living it. You take a moment in your head to thank everybody before you who has given you this, everybody who believed in you from the start, the day 1 organizers who gave it their all, believing it was a longshot bid, all of them. Just don’t give it all away, don’t let yourself lose the flame, because, in the end at least, it’ll work out fine.</p>
    </div>
    `;
}

    else if(quickstats[0] > 270) {
        window.setSoundtrack(3);
        setImage("https://i.imgur.com/6JmxCwx.png");
        return `
    <div class="ending-slide">
        <h3 class="endingtitle">Nostalgia</h3>
        <p>It wasn’t the cleanest thing ever but you did it. I guess America loves an underdog story. gives you a sense of Deja Vu to see you whip Forbes like you did with Boschwitz all those years back. The feeling of nostalgia is somewhat warm, it feels like memories of days at the park with mom, or when you began biking again and remembered the schoolhood days of biking with friends. A small smile comes on your face just having those memories come back to you.</p>
        <p>Packing to prepare to move to the White House you find a collection of photos, many of them of you as a small boy. It makes you laugh, for a second, to believe that little boy in his corduroy pants is the next president. But it is the next president, and even more that little boy in his corduroy pants, smiling like he has the world, that’s you. It feels like you’re reconciling the different parts of yourself, coming together, it was always Paul Wellstone, and you have always unapologetically been you.</p>
        <p>You wonder if there’s any such thing as destiny, was that little boy always going to be president? Was he always going to become a teacher? Become a senator? It doesn’t really matter, you’re here regardless, and you should be happy, because even if you weren’t destined to have it, that might make it richer, because it was by your merit you’re here.</p>
    </div>
    `;

    }
    else if(quickstats[0] < 270) {
        window.setSoundtrack(4);
        setImage("https://i.imgur.com/za2Xshw.png");
        return `
    <div class="ending-slide">
        <h3 class="endingtitle">Say It Isn't So</h3>
        <p>You tried to suppress the defeatism in your heart, but sometimes you don’t win. It stings, but it’s part of it all, part of living, you tell yourself. You were counted out from the beginning, the establishment wasn’t willing to rally for you, the polls put you behind. Many Democrats thought you were dead on arrival, It wrestles within you for a moment, the possibility. Were you? Was it insurmountable? </p>
        <p>You settle on not knowing. You couldn’t know, because you can’t see other worlds, nor can you do it again. You accept it. Like a dagger through the heart, it slides out your chest, dropping on the floor, it hurts, but you have a life to live. You’re only 56. You have people, you have opportunities, there will always be people who want to hear you. You could keep going, for them, Minnesota will offer you another chance, they have been kind to you.</p>
        <p>The fight is not over, this just was a battle, not the war, you can pick things back up, get back in the game. It will sting, it tends to hurt that way, but you aren’t finished. You can go back to doing what you did before. It was still important, people still believed in you, tens of millions came out to vote for you, that’s something, they took their time to support you. You want to cry for a moment, but it passes, you will live to fight for another day.;</p>
    </div>
    `;

    }
    else if(quickstats[0] < 175) {
        window.setSoundtrack(5);
        setImage("https://i.imgur.com/3M0CDq8.png");
        return `
    <div class="ending-slide">
        <h3 class="endingtitle">Heart of Glass</h3>
        <p>Watching the screen rattle off states, one by one, all for Forbes, you feel like a gutted fish. You knew you were a longshot bid, you knew you didn’t have the same money, the knack for party politicking. But this was different. You tug at your shirt with intensity. This was a collapse, the polls, they didn’t put you in the lead from the gate, but you didn’t think it would be this bad. Is your project, your ideas, are they this unpopular?</p>
        <p>Or was it you? Were you the problem? Should you have let somebody else take up the mantle? Did you not commit enough? Should you have gone even more radical? Or was it just doomed from the start? Should you have retreated? Become a pale, weak, imitation of Clinton? Is that all they wanted of you? Your head buzzes with these questions, but there’s no way you can not put this on your own head, you chose wrong, you acted wrong, you did things wrong. There’s no redo, you can’t go back. You have to live with it forever.</p>
        <p>You have to deal with the fact that the lost potential you represented is gone forever. The America you believed in, it wasn’t going to exist, not for a long time, anyways. The election showed that the America you believe in is not the America that they want to believe in. You almost get angry at them, the voters, for a moment, but it all comes back to you. You will have to live with this ghost haunting you forever.</p> 
    </div>
    `;
 }
}



campaignTrail_temp.jet_data = [{
    "banner_enabled": true,
    "banner_data": {
        "canName": "Wellstone",
        "runName": "Vilsack",
        "runImage": "https://i.imgur.com/eNX8mUU.png",
        "canImage": "https://i.imgur.com/xR4wGK6.png"
    },
    "endings_enabled": false,
    "ending_data": {},
    "cyoa_enabled": true,
    "cyoa_data": {},
    "cyoa_variables": {
        "1768779778719": {
            "id": 1768779778719,
            "name": "Naderdropout",
            "defaultValue": 0
        }
    },
    "cyoa_variable_effects": {},
    "cyoa_question_swaps": {
        "1768780004438": {
            "id": 1768780004438,
            "triggers": [
                3502,
                3501
            ],
            "conditions": [
                {
                    "variable": "Naderdropout",
                    "comparator": ">=",
                    "value": 2
                }
            ],
            "conditionOperator": "AND",
            "swaps": [
                {
                    "pk1": 12852,
                    "pk2": 13067
                }
            ]
        }
    },
    "cyoa_answer_swaps": {}
}
]

