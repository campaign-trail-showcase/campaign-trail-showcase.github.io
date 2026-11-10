
campaignTrail_temp.cyoa = true;

function getQuestionNumberFromPk(pk) {
    return campaignTrail_temp.questions_json.map(q=>q.pk).indexOf(pk)-1;
}

cyoAdventure = function (a) {
    ans = campaignTrail_temp.player_answers[campaignTrail_temp.player_answers.length-1];

    if (ans == 12671) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(12677);
    }
    else if (ans == 12678) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(12780);
    }
    else if (ans == 12681) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(12780);
    }
    else if (ans == 12899) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(12900);
    }
    else if (ans == 12904) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(12759);
    }
    else if (ans == 12907) {
        campaignTrail_temp.question_number = getQuestionNumberFromPk(12759);
    }
    else {
        return false;
    }
}

campaignTrail_temp.questions_json = [
    {
        "model": "campaign_trail.question",
        "pk": 12354,
        "fields": {
            "priority": 1,
            "description": "As you accept your party's nomination for President, how will you address the crowd tonight?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12418,
        "fields": {
            "priority": 1,
            "description": "What is your overall strategy for the 2008 campaign?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12439,
        "fields": {
            "priority": 1,
            "description": "What is your reasoning behind the selection of Minnesota governor Dana Anderson as your running mate?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12451,
        "fields": {
            "priority": 1,
            "description": "With the death of Osama Bin Laden still relevant in headlines, many want to get their slice of the cake and interview you on your experience in Pakistan. What will you say to these reporters?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12471,
        "fields": {
            "priority": 1,
            "description": "The Lehman Brothers just filed for the largest bankruptcy in history, causing widespread panic across the financial community. Do you see it as necessary for government intervention?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12487,
        "fields": {
            "priority": 1,
            "description": "Word has spread that you have plans for expanding the War on Terrorism in the Middle East, how will you address these claims?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12501,
        "fields": {
            "priority": 1,
            "description": "Every election, candidates have always participated in the traditional three debates against each other. With this year’s election cycle, do you wish to debate against Erica Zimmerman?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12515,
        "fields": {
            "priority": 1,
            "description": "With you more relevant in the news than ever, the hunting incident from 2006 floats back into articles. What do you think about this?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12527,
        "fields": {
            "priority": 1,
            "description": "What is your stance on funding education?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12548,
        "fields": {
            "priority": 1,
            "description": "Another day on the campaign trail, you’re about to conduct a rally in Cleveland, Ohio, on an empty stomach. Your advisors recommend you get something to eat so you’ll have that energy later on, what will you get? Oh, and your rally starts in 20 minutes.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12564,
        "fields": {
            "priority": 1,
            "description": "Throughout the Bennett administration, NATO had been expanded into Eastern Europe, integrating countries such as Poland, Hungary, and Romania. There are also rumors that you plan on continuing this trend.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12580,
        "fields": {
            "priority": 1,
            "description": "On August 1, 2008, Russian forces invaded Georgia under a pretense to protect the minority groups in Abkhazia and South Ossetia, this eventually resulted in a Georgian defeat. In reality, this was probably, in reality, a response to Georgian statements during the Bucharest summit earlier this year. What do you think?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12597,
        "fields": {
            "priority": 1,
            "description": "The Iranian Transitional Government is expected to establish a fully functional government by 2011, and there have been talks of the Pahlavi Dynasty returning to the throne in Iran. Do you support the revival of the monarchy?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12606,
        "fields": {
            "priority": 1,
            "description": "Do you believe that Pakistan has ties to Al-Qaeda and other terrorist organizations?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12623,
        "fields": {
            "priority": 1,
            "description": "An incident involving your running mate Dana Anderson has surfaced, regarding her DUI arrest in 1981. This hurts the image of your campaign, so what do you have to say about this?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12636,
        "fields": {
            "priority": 1,
            "description": "While at a rally in Hartford, Connecticut, your opponent, Erica Zimmerman, asks a really good question. You're promising all these policies and actions in your campaign, but you're the incumbent Vice President, so why can't you start on them now?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12650,
        "fields": {
            "priority": 1,
            "description": "Another day on the campaign trail, what will you talk about in your rally in Jacksonville, Florida?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12670,
        "fields": {
            "priority": 1,
            "description": "A group that swears allegiance to your campaign comes forward to you with a deal. You give them a huge amount of money in exchange for your polling in Ohio, West Virginia, and Pennsylvania, to go in your favor. Do you think this is a good idea?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12684,
        "fields": {
            "priority": 1,
            "description": "Throughout his tenure, President Bennett had always been an advocate against smoking, sprouting rumors that you plan to ban such actions. Is this true?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12696,
        "fields": {
            "priority": 1,
            "description": "Will you give the Kurdish people in Iraq and Iran the right to self determination?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12713,
        "fields": {
            "priority": 1,
            "description": "Another day on the campaign trail, what will you talk about in your rally in Butte, Montana?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12731,
        "fields": {
            "priority": 1,
            "description": "As the campaign comes to a close, reporters rush to ask you on your point of view during the Bagram Air Bombings of 2007, which was an attempt on your life. You haven't been public about this event, will you break your silence?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12743,
        "fields": {
            "priority": 1,
            "description": "Some Republicans believe that with enough momentum, you can turn states like Oregon and Maine into tossups. Do you have plans to visit these places?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12752,
        "fields": {
            "priority": 1,
            "description": "As election day draws closer, you host a rally in Gettysburg, Pennsylvania. How will you address the crowd, the very ones who have supported you since the very beginning?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 12759,
        "fields": {
            "priority": 1,
            "description": "Which state will you visit to close off your campaign?",
            "likelihood": 1
        }
    }
]

campaignTrail_temp.answers_json = [
    {
        "model": "campaign_trail.answer",
        "pk": 12355,
        "fields": {
            "question": 12354,
            "description": "As I stand here tonight, I thank the Republican party for nominating me for President. I promise to continue the legacy of Conservatism in America for a brighter future."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12415,
        "fields": {
            "question": 12354,
            "description": "As Vice President, the people surrounding me this very moment have seen my success during the Bennett Administration, my full potential awaits me in the Oval Office."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12419,
        "fields": {
            "question": 12418,
            "description": "I will campaign on the successes of the Bennett Administration: The Christian values, the War on Terror, the tax cuts, and so much more."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12426,
        "fields": {
            "question": 12418,
            "description": "I stand here as a new woman, not to be affiliated with any past administration. I will set myself apart from the other presidents of our time, bringing new policies to the table."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12432,
        "fields": {
            "question": 12418,
            "description": "I will compare and contrast my stances and policies to the horrible plans the Democrats have for our country. These voters should know that I am the better candidate, and that it should be me sitting in the oval office."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12436,
        "fields": {
            "question": 12418,
            "description": "America should be reminded that I have served this country well, in fact, I went out there to Pakistan to kill off Osama Bin Laden with the President, and I am willing to do anything, and I mean anything, to ensure the prosperity of this country."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12440,
        "fields": {
            "question": 12439,
            "description": "Dana Anderson has governed her state of Minnesota very well. Under her governorship, Minnesota underwent reforms that changed the state for the better."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12443,
        "fields": {
            "question": 12439,
            "description": "Dana Anderson is the principled, moderate politician we all need. With her as Vice President, our administration can excel in bipartisanship."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12447,
        "fields": {
            "question": 12439,
            "description": "Dana Anderson is a good friend of mine, in fact, we've been close friends for a long time. Working in the white house with her will be easy."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12452,
        "fields": {
            "question": 12451,
            "description": "Me and President Bennett did all this for the safety of our nation, for any undecided voters, they should remember our part in the war against terrorism."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12457,
        "fields": {
            "question": 12451,
            "description": "Sure I was downed by a grenade, but we achieved our main objective. Any other scums trying to cause a scene on the global stage should reconsider their foolish agenda."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12462,
        "fields": {
            "question": 12451,
            "description": "The death of Bin Laden was surely our finest hour, but we need to realize that we have achieved our main goal, which was to avenge 9/11. The War on Terrorism should come to a close soon."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12467,
        "fields": {
            "question": 12451,
            "description": "I can campaign fine with one leg, in fact, I've mastered the use of crutches. I'll make sure any terrorists won't walk at all, and that these extremist organizations won't be able to take flight."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12472,
        "fields": {
            "question": 12471,
            "description": "I do, we need to act quickly on President Bennett’s 700 billion dollar relief plan, ensuring other corporations don’t suffer the same fate."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12477,
        "fields": {
            "question": 12471,
            "description": "It is necessary. We need to bail out companies such as the Lehman Brothers to keep businesses afloat, and we can’t let this happen again, which is why we’re doing this."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12480,
        "fields": {
            "question": 12471,
            "description": "Too big to fail is too big to exist, we should’ve dismantled these monopolistic companies years ago!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12484,
        "fields": {
            "question": 12471,
            "description": "I believe we should sit situations like these out, the government shouldn’t be bailing out these corporations and the latter should be more fiscally independent in the future."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12488,
        "fields": {
            "question": 12487,
            "description": "These claims are true. Yes, we are already dealing with Afghanistan, Iraq, and Iran, but we have proven in the past that we can take on multiple threats at once, you can see for yourself in the aforementioned countries, as we have already dismantled the authoritarian governments and are transitioning said nations into democracy."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12492,
        "fields": {
            "question": 12487,
            "description": "Let me clarify myself, I meant that I will expand its coverage, send more men, and devote more time to eliminating Islamic Extremism."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12496,
        "fields": {
            "question": 12487,
            "description": "These allegations are false. Never have I ever advocated for opening up new frontiers nor have I encouraged greater operations, I would like to keep this conflict the way that it is now."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12502,
        "fields": {
            "question": 12501,
            "description": "Let’s do this. These debates help America figure out who’s best for the job."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12506,
        "fields": {
            "question": 12501,
            "description": "Let’s do this. These debates help America figure out who’s best for the job."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12509,
        "fields": {
            "question": 12501,
            "description": "These debates are being rigged by the left-wing media. Publishers such as CNN and MSNBC ensure the Democrat always comes out on top, plus I have better things to do."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12512,
        "fields": {
            "question": 12501,
            "description": "Let’s do this. These debates help America figure out who’s best for the job."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12516,
        "fields": {
            "question": 12515,
            "description": "I would like to deeply apologize to my friend and to America for this horrible accident from two years ago. I would like to reach out to her and I pray that she is all well now."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12519,
        "fields": {
            "question": 12515,
            "description": "Me and my friend have already dubbed it an accident already, there is no need to bring it up."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12522,
        "fields": {
            "question": 12515,
            "description": "This is irrelevant, next question."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12528,
        "fields": {
            "question": 12527,
            "description": "The government should prop up schools with regular funding to keep them afloat. I believe we should help schools through direct monetary funds."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12539,
        "fields": {
            "question": 12527,
            "description": "I would dissolve the Department of Education as president, seeing that schools would be better off getting funds from parents and other NGOs."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12543,
        "fields": {
            "question": 12527,
            "description": "Parents know best, and they should be able to choose where their children go for school."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12549,
        "fields": {
            "question": 12548,
            "description": "President Bennett is at the Texas Roadhouse, I’ll go there to get brunch and to seek advice from my boss."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12554,
        "fields": {
            "question": 12548,
            "description": "I need to make it quick, I’ll go for that hotdog stand."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12558,
        "fields": {
            "question": 12548,
            "description": "Do away with that food nonsense, I’ve got to get to that rally early. I am more concerned for the stomachs of my fellow Americans than my own."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12560,
        "fields": {
            "question": 12548,
            "description": "I’ll get burger and fries from McDonald’s drive thru, it’s better to stay in the car than to dine out."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12565,
        "fields": {
            "question": 12564,
            "description": "I don’t think we should continue this and keep NATO the way it is, Russia already feels threatened, and we shouldn’t poke the bear more."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12569,
        "fields": {
            "question": 12564,
            "description": "Nope, in fact, NATO is too big. We need to kick out some members, especially those new ones we acquired in Eastern Europe."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12572,
        "fields": {
            "question": 12564,
            "description": "These rumors are true, I plan to expand NATO as much as possible. I look forward to inviting Sweden, Finland, and Ukraine, these countries need dire protection from Russia."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12576,
        "fields": {
            "question": 12564,
            "description": "This NATO stuff is too much hard work, the US has gotten too entangled in foreign policy, which is why I want to withdraw from this alliance and focus on America."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12581,
        "fields": {
            "question": 12580,
            "description": "Yes I have heard it many times before, we have to make sure nothing like this ever happens again."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12584,
        "fields": {
            "question": 12580,
            "description": "This rules out any NATO expansion, especially into countries on Russia’s backyard, they won’t like it, and we have already seen what they would do."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12588,
        "fields": {
            "question": 12580,
            "description": " We should just sit back and let this happen, there’s nothing we can do about this situation. If we make another move Russia will attack another country, it’s the sad cycle."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12599,
        "fields": {
            "question": 12597,
            "description": "The Pahlavi family is a close friend of America, they have been unjustifiably exiled from their country by Islamic Extremists. I support the return of the Iranian monarchy."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12603,
        "fields": {
            "question": 12597,
            "description": "It is our job to ensure that people around the world can choose their leaders. America is a beacon of Democracy, and monarchs don't reflect that. Instead, I will push to establish a Republic in Iran."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12607,
        "fields": {
            "question": 12606,
            "description": "We don't just come to conclusions at the slightest bit of evidence. Osama Bin Laden just so happened to flee to Pakistan and stayed there, roaming the desert."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12611,
        "fields": {
            "question": 12606,
            "description": "No? Osama Bin Laden came from Afghanistan, and Pakistan is also fighting against Terrorism. They're also a fellow victim of terrorist attacks, why would their allies do that?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12615,
        "fields": {
            "question": 12606,
            "description": "Yes, I believe Pakistan has been harboring terrorists. How could Osama Bin Laden evade border patrol? It's simple, he didn't. He was allowed in by the Pakistani government."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12619,
        "fields": {
            "question": 12606,
            "description": "Hold your horses, this is going too fast. We could launch a couple of investigations spearheaded by the CIA so we can find out if Pakistan really is connected to these groups."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12624,
        "fields": {
            "question": 12623,
            "description": "This incident was 27 years ago, there's no use talking about this. Instead, we should discuss the plans I have for this nation."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12627,
        "fields": {
            "question": 12623,
            "description": "So what? Nobody is perfect, we've all had our fair share of mistakes in the past, and now we've learned from them, just like Dana Anderson, she is a new woman, different from her past self."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12630,
        "fields": {
            "question": 12623,
            "description": "Let's get this straight, when entering politics, Dana Anderson had already apologized for all her past actions, promising that she will promote cleanliness in her career. In fact, if you look at Minnesota law, there are heftier fines on drunk driving compared to neighboring states."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12634,
        "fields": {
            "question": 12623,
            "description": "Well... We're just going to ignore the scandals that riddled the Archdale administration, and the constant gaffes Senator Thompson made regarding many sensitive topics?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12637,
        "fields": {
            "question": 12636,
            "description": "Well the thing is, I can't do much as Vice President. Whatever I wanted to do during my tenure, I have already done. We can't do everything at once."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12640,
        "fields": {
            "question": 12636,
            "description": "These are way too big for me to take action now, it's best that I start on them when I become president."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12644,
        "fields": {
            "question": 12636,
            "description": "It was only recently when I began developing these ideas, and it just so happened that I formed them in my mind so close to election year. Besides, I've already helped the passage of many bills during my Vice Presidency."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12647,
        "fields": {
            "question": 12636,
            "description": "Just you wait, when you see the policies I enact, you will be thankful and glad to have me as your President."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12651,
        "fields": {
            "question": 12650,
            "description": "Let's talk about how I am the mainstream candidate that everyone should vote for and how I am the right President for America."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12654,
        "fields": {
            "question": 12650,
            "description": "Let's attack Erica Zimmerman on her gaffes and policies that will be terrible for America, she wants to stop fighting terrorism, which won't make them happy, but they will use peacetime to regain their strength and attack America once again!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12657,
        "fields": {
            "question": 12650,
            "description": "I will discuss the successes of the Bennett administration: The revival of Christian values, the lowering of taxes, and the school programs that helped millions of children."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12665,
        "fields": {
            "question": 12650,
            "description": "I would like to bring up NATO, and the plans I have for its future against a growing world of increasing antagonization and terrorism, we need to make sure the alliance stays intact, so that a united front shall be presented against any enemies who dare try to shake the world to its core as it did on September 11."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12675,
        "fields": {
            "question": 12670,
            "description": "No."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12685,
        "fields": {
            "question": 12684,
            "description": "Never have I advocated for a thing, nor do I have any plans for this."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12688,
        "fields": {
            "question": 12684,
            "description": "Banning smoking sounds great on paper, though this will hurt the economy, given the major role companies like Malboro play in global trade."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12690,
        "fields": {
            "question": 12684,
            "description": "This is something new, I have no current plans for a ban on smoking, but I do now, I'll look into this as President."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12693,
        "fields": {
            "question": 12684,
            "description": "I support a full ban on smoking, as well as the selling, purchasing, and possession of cigarettes and the like."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12697,
        "fields": {
            "question": 12696,
            "description": "Everyone deserves self determination. I will allow the Kurds to decide their future, whether or not they want to have a country to live in."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12700,
        "fields": {
            "question": 12696,
            "description": "My vision for a post-war middle east includes an independent Kurdistan, providing a homeland for the locals living in countries where they are constantly looked down upon."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12705,
        "fields": {
            "question": 12696,
            "description": "I believe that in a Democratic Iraq, previously oppressed and marginalized minorities, like the Kurds, can flourish, integrating with the rest of the population."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12709,
        "fields": {
            "question": 12696,
            "description": "I'm not sure if we can trust these Kurds, I will look into this issue in my Presidency, but for now, no guarentees."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12714,
        "fields": {
            "question": 12713,
            "description": "Let's talk about how I am the mainstream candidate that everyone should vote for and how I am the right President for America."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12717,
        "fields": {
            "question": 12713,
            "description": "Let's attack Erica Zimmerman on her gaffes and policies that will be terrible for America, she wants to stop fighting terrorism, which won't make them happy, but they will use peacetime to regain their strength and attack America once again!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12721,
        "fields": {
            "question": 12713,
            "description": "I will discuss the successes of the Bennett administration: The revival of Christian values, the lowering of taxes, and the school programs that helped millions of children."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12726,
        "fields": {
            "question": 12713,
            "description": "I would like to bring up NATO, and the plans I have for its future against a growing world of increasing antagonization and terrorism, we need to make sure the alliance stays intact, so that a united front shall be presented against any enemies who dare try to shake the world to its core as it did on September 11."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12732,
        "fields": {
            "question": 12731,
            "description": "It was horrifying. I was just minding myself and then all of a sudden there were explosions, in a panic I was rushed to safety by our agents."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12735,
        "fields": {
            "question": 12731,
            "description": "These terrorists have wronged me and the safety of our nation, they will get their fair share of misfortune during my tenure."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12739,
        "fields": {
            "question": 12731,
            "description": "I prefer not to talk about it, the bombing still shakes me to this day..."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12741,
        "fields": {
            "question": 12731,
            "description": "This shows the risk that visiting war-torn places pose. I will not be making visits like these again, nor will I allow other non-personnel to do so."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12744,
        "fields": {
            "question": 12743,
            "description": "Maybe we can flip these states, I'll host some last minute rallies in Portland, Oregon and Augusta, Maine."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12749,
        "fields": {
            "question": 12743,
            "description": "We don't have enough time to try and flip these states, let's focus on key tossups like Pennsylvania and Florida."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12753,
        "fields": {
            "question": 12752,
            "description": "We have come a long way, we have offered blood, sweat, and tears for this cause. Let's make it worth it by voting for the Young/Anderson ticket this November 4th."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12756,
        "fields": {
            "question": 12752,
            "description": "I thank you all for voting and supporting me throughout this campaign, I hope to make it up to you all in the Oval Office."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12760,
        "fields": {
            "question": 12759,
            "description": "I will start in Ohio, travel down to West Virginia, and end up in Pennsylvania. These will allow me to carry 46 electoral votes towards the finish line."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12765,
        "fields": {
            "question": 12759,
            "description": "As a woman from Wyoming, I will visit our northern neighbors in Montana, an underappreciated state compared to the tourist attractions that are states like New York and Florida."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12770,
        "fields": {
            "question": 12759,
            "description": "Erica Zimmerman seems to be flipping states that Bennett notably won in 2004, so I will try to counteract her momentum in Tennessee, Alabama, and Connecticut."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12775,
        "fields": {
            "question": 12759,
            "description": "Florida has always been an important state, and it still is today, I will campaign in Miami with a huge rally."
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
            "electoral_votes": 10,
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
            "electoral_votes": 55,
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
            "electoral_votes": 9,
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
            "electoral_votes": 7,
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
            "electoral_votes": 27,
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
            "electoral_votes": 15,
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
            "electoral_votes": 21,
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
            "electoral_votes": 11,
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
            "electoral_votes": 17,
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
            "electoral_votes": 6,
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
            "electoral_votes": 5,
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
            "electoral_votes": 31,
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
            "electoral_votes": 15,
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
            "electoral_votes": 20,
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
            "electoral_votes": 7,
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
            "electoral_votes": 21,
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
            "electoral_votes": 34,
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
            "electoral_votes": 10,
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
            "name": "War on Terror",
            "description": 0,
            "stance_1": "Highly Supportive",
            "stance_desc_1": 0,
            "stance_2": "Supportive",
            "stance_desc_2": 0,
            "stance_3": "Slightly Conservative",
            "stance_desc_3": 0,
            "stance_4": "Neutral",
            "stance_desc_4": 0,
            "stance_5": "Slightly Opposed",
            "stance_desc_5": 0,
            "stance_6": "Opposed",
            "stance_desc_6": 0,
            "stance_7": "Highly Opposed",
            "stance_desc_7": 0,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 28,
        "fields": {
            "name": "Bailouts",
            "description": 0,
            "stance_1": "Highly Supporive",
            "stance_desc_1": 0,
            "stance_2": "Supportive",
            "stance_desc_2": 0,
            "stance_3": "Slightly Supportive",
            "stance_desc_3": 0,
            "stance_4": "Neutral",
            "stance_desc_4": 0,
            "stance_5": "Slightly Opposed",
            "stance_desc_5": 0,
            "stance_6": "Opposed",
            "stance_desc_6": 0,
            "stance_7": "Highly Opposed",
            "stance_desc_7": 0,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 29,
        "fields": {
            "name": "Education",
            "description": 0,
            "stance_1": "Very Conservative",
            "stance_desc_1": 0,
            "stance_2": "Conservative",
            "stance_desc_2": 0,
            "stance_3": "Conservative",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Liberal",
            "stance_desc_5": 0,
            "stance_6": "Liberal",
            "stance_desc_6": 0,
            "stance_7": "Very Liberal",
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
            "stance_1": "Very Conservative",
            "stance_desc_1": 0,
            "stance_2": "Conservative",
            "stance_desc_2": 0,
            "stance_3": "Conservative",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Liberal",
            "stance_desc_5": 0,
            "stance_6": "Liberal",
            "stance_desc_6": 0,
            "stance_7": "Very Liberal",
            "stance_desc_7": 0,
            "election": 9
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 31,
        "fields": {
            "name": "John Bennett",
            "description": 0,
            "stance_1": "Very Unpopular",
            "stance_desc_1": 0,
            "stance_2": "Unpopular",
            "stance_desc_2": 0,
            "stance_3": "Unpopular",
            "stance_desc_3": 0,
            "stance_4": "Neutral",
            "stance_desc_4": 0,
            "stance_5": "Popular",
            "stance_desc_5": 0,
            "stance_6": "Popular",
            "stance_desc_6": 0,
            "stance_7": "Very Popular",
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
            "state_issue_score": 0.55,
            "weight": 0.3
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 869,
        "fields": {
            "state": 181,
            "issue": 28,
            "state_issue_score": -0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 870,
        "fields": {
            "state": 181,
            "issue": 29,
            "state_issue_score": -0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 871,
        "fields": {
            "state": 181,
            "issue": 30,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 872,
        "fields": {
            "state": 181,
            "issue": 31,
            "state_issue_score": -0.15,
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
            "weight": -0.65
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 874,
        "fields": {
            "state": 182,
            "issue": 28,
            "state_issue_score": -0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 875,
        "fields": {
            "state": 182,
            "issue": 29,
            "state_issue_score": -0.345,
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
            "state_issue_score": 0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 878,
        "fields": {
            "state": 183,
            "issue": 27,
            "state_issue_score": 0.365,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 879,
        "fields": {
            "state": 183,
            "issue": 28,
            "state_issue_score": 0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 880,
        "fields": {
            "state": 183,
            "issue": 29,
            "state_issue_score": 0.55,
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
            "state_issue_score": -0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 883,
        "fields": {
            "state": 184,
            "issue": 27,
            "state_issue_score": 0.35,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 884,
        "fields": {
            "state": 184,
            "issue": 28,
            "state_issue_score": 0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 885,
        "fields": {
            "state": 184,
            "issue": 29,
            "state_issue_score": -0.4,
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
            "state_issue_score": -0.1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 888,
        "fields": {
            "state": 185,
            "issue": 27,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 889,
        "fields": {
            "state": 185,
            "issue": 28,
            "state_issue_score": -0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 890,
        "fields": {
            "state": 185,
            "issue": 29,
            "state_issue_score": 0.55,
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
            "state_issue_score": -0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 893,
        "fields": {
            "state": 186,
            "issue": 27,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 894,
        "fields": {
            "state": 186,
            "issue": 28,
            "state_issue_score": 0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 895,
        "fields": {
            "state": 186,
            "issue": 29,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 896,
        "fields": {
            "state": 186,
            "issue": 30,
            "state_issue_score": -0.086,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 897,
        "fields": {
            "state": 186,
            "issue": 31,
            "state_issue_score": -0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 898,
        "fields": {
            "state": 187,
            "issue": 27,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 899,
        "fields": {
            "state": 187,
            "issue": 28,
            "state_issue_score": 0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 900,
        "fields": {
            "state": 187,
            "issue": 29,
            "state_issue_score": 0.12,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 901,
        "fields": {
            "state": 187,
            "issue": 30,
            "state_issue_score": 0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 902,
        "fields": {
            "state": 187,
            "issue": 31,
            "state_issue_score": 0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 903,
        "fields": {
            "state": 188,
            "issue": 27,
            "state_issue_score": 0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 904,
        "fields": {
            "state": 188,
            "issue": 28,
            "state_issue_score": 0.35,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 905,
        "fields": {
            "state": 188,
            "issue": 29,
            "state_issue_score": 0.3,
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
            "state_issue_score": -0.385,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 908,
        "fields": {
            "state": 189,
            "issue": 27,
            "state_issue_score": 0.05,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 909,
        "fields": {
            "state": 189,
            "issue": 28,
            "state_issue_score": 0.05,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 910,
        "fields": {
            "state": 189,
            "issue": 29,
            "state_issue_score": -0.13,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 911,
        "fields": {
            "state": 189,
            "issue": 30,
            "state_issue_score": -0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 912,
        "fields": {
            "state": 189,
            "issue": 31,
            "state_issue_score": 0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 913,
        "fields": {
            "state": 190,
            "issue": 27,
            "state_issue_score": 0.45,
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
            "state_issue_score": 0.35,
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
            "state_issue_score": -0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 918,
        "fields": {
            "state": 191,
            "issue": 27,
            "state_issue_score": 0.85,
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
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 921,
        "fields": {
            "state": 191,
            "issue": 30,
            "state_issue_score": 0.602,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 922,
        "fields": {
            "state": 191,
            "issue": 31,
            "state_issue_score": -0.75,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 923,
        "fields": {
            "state": 192,
            "issue": 27,
            "state_issue_score": -0.85,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 924,
        "fields": {
            "state": 192,
            "issue": 28,
            "state_issue_score": -0.725,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 925,
        "fields": {
            "state": 192,
            "issue": 29,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 926,
        "fields": {
            "state": 192,
            "issue": 30,
            "state_issue_score": -0.807,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 927,
        "fields": {
            "state": 192,
            "issue": 31,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 928,
        "fields": {
            "state": 193,
            "issue": 27,
            "state_issue_score": -0.25,
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
            "state_issue_score": -0.4,
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
            "state_issue_score": 0.535,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 933,
        "fields": {
            "state": 194,
            "issue": 27,
            "state_issue_score": -0.35,
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
            "state_issue_score": -0.45,
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
            "state_issue_score": 0.725,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 938,
        "fields": {
            "state": 195,
            "issue": 27,
            "state_issue_score": -0.75,
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
            "state_issue_score": -0.8,
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
            "state_issue_score": 0.75,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 943,
        "fields": {
            "state": 196,
            "issue": 27,
            "state_issue_score": -0.15,
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
            "state_issue_score": 0.2,
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
            "state_issue_score": -0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 948,
        "fields": {
            "state": 197,
            "issue": 27,
            "state_issue_score": -0.75,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 949,
        "fields": {
            "state": 197,
            "issue": 28,
            "state_issue_score": -0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 950,
        "fields": {
            "state": 197,
            "issue": 29,
            "state_issue_score": -0.45,
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
            "state_issue_score": 0.715,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 953,
        "fields": {
            "state": 198,
            "issue": 27,
            "state_issue_score": 0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 954,
        "fields": {
            "state": 198,
            "issue": 28,
            "state_issue_score": -0.173,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 955,
        "fields": {
            "state": 198,
            "issue": 29,
            "state_issue_score": -0.3,
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
            "state_issue_score": 0.125,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 958,
        "fields": {
            "state": 199,
            "issue": 27,
            "state_issue_score": -0.25,
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
            "state_issue_score": -0.15,
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
            "state_issue_score": -0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 963,
        "fields": {
            "state": 200,
            "issue": 27,
            "state_issue_score": 0.45,
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
            "state_issue_score": 0.5,
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
            "state_issue_score": -0.65,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 968,
        "fields": {
            "state": 201,
            "issue": 27,
            "state_issue_score": -0.6,
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
            "state_issue_score": -0.25,
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
            "state_issue_score": 0.485,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 973,
        "fields": {
            "state": 202,
            "issue": 27,
            "state_issue_score": -0.25,
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
            "state_issue_score": -0.35,
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
            "state_issue_score": 0.385,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 978,
        "fields": {
            "state": 203,
            "issue": 27,
            "state_issue_score": -0.65,
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
            "state_issue_score": -0.7,
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
            "state_issue_score": 0.505,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 983,
        "fields": {
            "state": 204,
            "issue": 27,
            "state_issue_score": -0.5,
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
            "state_issue_score": -0.175,
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
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 988,
        "fields": {
            "state": 205,
            "issue": 27,
            "state_issue_score": -0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 989,
        "fields": {
            "state": 205,
            "issue": 28,
            "state_issue_score": -0.07,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 990,
        "fields": {
            "state": 205,
            "issue": 29,
            "state_issue_score": -0.515,
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
            "state_issue_score": 0.715,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 993,
        "fields": {
            "state": 206,
            "issue": 27,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 994,
        "fields": {
            "state": 206,
            "issue": 28,
            "state_issue_score": -0.278,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 995,
        "fields": {
            "state": 206,
            "issue": 29,
            "state_issue_score": -0.375,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 996,
        "fields": {
            "state": 206,
            "issue": 30,
            "state_issue_score": -0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 997,
        "fields": {
            "state": 206,
            "issue": 31,
            "state_issue_score": -0.205,
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
            "state_issue_score": 0.65,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1003,
        "fields": {
            "state": 208,
            "issue": 27,
            "state_issue_score": 0.515,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1004,
        "fields": {
            "state": 208,
            "issue": 28,
            "state_issue_score": -0.014,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1005,
        "fields": {
            "state": 208,
            "issue": 29,
            "state_issue_score": 0.415,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1006,
        "fields": {
            "state": 208,
            "issue": 30,
            "state_issue_score": -0.114,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1007,
        "fields": {
            "state": 208,
            "issue": 31,
            "state_issue_score": -0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1008,
        "fields": {
            "state": 209,
            "issue": 27,
            "state_issue_score": -0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1009,
        "fields": {
            "state": 209,
            "issue": 28,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1010,
        "fields": {
            "state": 209,
            "issue": 29,
            "state_issue_score": -0.65,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1011,
        "fields": {
            "state": 209,
            "issue": 30,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1012,
        "fields": {
            "state": 209,
            "issue": 31,
            "state_issue_score": 0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1013,
        "fields": {
            "state": 210,
            "issue": 27,
            "state_issue_score": 0.535,
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
            "state_issue_score": 0.335,
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
            "state_issue_score": -0.445,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1018,
        "fields": {
            "state": 211,
            "issue": 27,
            "state_issue_score": 0.05,
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
            "state_issue_score": 0.25,
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
            "state_issue_score": -0.65,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1023,
        "fields": {
            "state": 212,
            "issue": 27,
            "state_issue_score": 0.655,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1024,
        "fields": {
            "state": 212,
            "issue": 28,
            "state_issue_score": 0.754,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1025,
        "fields": {
            "state": 212,
            "issue": 29,
            "state_issue_score": 0.655,
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
            "state_issue_score": -0.85,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1028,
        "fields": {
            "state": 213,
            "issue": 27,
            "state_issue_score": 0.525,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1029,
        "fields": {
            "state": 213,
            "issue": 28,
            "state_issue_score": -0.475,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1030,
        "fields": {
            "state": 213,
            "issue": 29,
            "state_issue_score": 0.4,
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
            "state_issue_score": -0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1033,
        "fields": {
            "state": 214,
            "issue": 27,
            "state_issue_score": -0.835,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1034,
        "fields": {
            "state": 214,
            "issue": 28,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1035,
        "fields": {
            "state": 214,
            "issue": 29,
            "state_issue_score": -0.825,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1036,
        "fields": {
            "state": 214,
            "issue": 30,
            "state_issue_score": -0.655,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1037,
        "fields": {
            "state": 214,
            "issue": 31,
            "state_issue_score": 0.65,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1038,
        "fields": {
            "state": 215,
            "issue": 27,
            "state_issue_score": -0.03,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1039,
        "fields": {
            "state": 215,
            "issue": 28,
            "state_issue_score": 0.069,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1040,
        "fields": {
            "state": 215,
            "issue": 29,
            "state_issue_score": -0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1041,
        "fields": {
            "state": 215,
            "issue": 30,
            "state_issue_score": -0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1042,
        "fields": {
            "state": 215,
            "issue": 31,
            "state_issue_score": 0.145,
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
            "state_issue_score": -0.755,
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
            "state_issue_score": 0.55,
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
            "state_issue_score": -0.35,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1053,
        "fields": {
            "state": 218,
            "issue": 27,
            "state_issue_score": 0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1054,
        "fields": {
            "state": 218,
            "issue": 28,
            "state_issue_score": 0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1055,
        "fields": {
            "state": 218,
            "issue": 29,
            "state_issue_score": 0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1056,
        "fields": {
            "state": 218,
            "issue": 30,
            "state_issue_score": 0.15,
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
            "state_issue_score": 0.835,
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
            "state_issue_score": 0.835,
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
            "state_issue_score": -0.765,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1063,
        "fields": {
            "state": 220,
            "issue": 27,
            "state_issue_score": 0.15,
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
            "state_issue_score": -0.25,
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
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1068,
        "fields": {
            "state": 221,
            "issue": 27,
            "state_issue_score": -0.75,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1069,
        "fields": {
            "state": 221,
            "issue": 28,
            "state_issue_score": -0.425,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1070,
        "fields": {
            "state": 221,
            "issue": 29,
            "state_issue_score": -0.805,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1071,
        "fields": {
            "state": 221,
            "issue": 30,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1072,
        "fields": {
            "state": 221,
            "issue": 31,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1073,
        "fields": {
            "state": 222,
            "issue": 27,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1074,
        "fields": {
            "state": 222,
            "issue": 28,
            "state_issue_score": -0.066,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1075,
        "fields": {
            "state": 222,
            "issue": 29,
            "state_issue_score": 0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1076,
        "fields": {
            "state": 222,
            "issue": 30,
            "state_issue_score": 0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1077,
        "fields": {
            "state": 222,
            "issue": 31,
            "state_issue_score": -0.305,
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
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1083,
        "fields": {
            "state": 224,
            "issue": 27,
            "state_issue_score": -0.845,
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
            "state_issue_score": -0.845,
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
            "state_issue_score": 0.725,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1088,
        "fields": {
            "state": 225,
            "issue": 27,
            "state_issue_score": 0.8,
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
            "state_issue_score": 0.675,
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
            "state_issue_score": -0.95,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1093,
        "fields": {
            "state": 226,
            "issue": 27,
            "state_issue_score": 0.375,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1094,
        "fields": {
            "state": 226,
            "issue": 28,
            "state_issue_score": -0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1095,
        "fields": {
            "state": 226,
            "issue": 29,
            "state_issue_score": 0.45,
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
            "state_issue_score": -0.35,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1098,
        "fields": {
            "state": 227,
            "issue": 27,
            "state_issue_score": 0.45,
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
            "state_issue_score": 0.375,
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
            "state_issue_score": -0.35,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1103,
        "fields": {
            "state": 228,
            "issue": 27,
            "state_issue_score": 0.95,
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
            "state_issue_score": 0.9,
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
            "state_issue_score": -0.96,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1108,
        "fields": {
            "state": 229,
            "issue": 27,
            "state_issue_score": -0.05,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1109,
        "fields": {
            "state": 229,
            "issue": 28,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1110,
        "fields": {
            "state": 229,
            "issue": 29,
            "state_issue_score": -0.05,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1111,
        "fields": {
            "state": 229,
            "issue": 30,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1112,
        "fields": {
            "state": 229,
            "issue": 31,
            "state_issue_score": -0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1113,
        "fields": {
            "state": 230,
            "issue": 27,
            "state_issue_score": -0.9,
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
            "state_issue_score": -0.715,
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
            "state_issue_score": 0.75,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 1118,
        "fields": {
            "state": 231,
            "issue": 27,
            "state_issue_score": -0.9,
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
            "state_issue_score": -0.815,
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
            "state_issue_score": 0.8,
            "weight": 1
        }
    }
]

campaignTrail_temp.candidate_issue_score_json = [
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12292,
        "fields": {
            "candidate": 12240,
            "issue": 27,
            "issue_score": -0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12293,
        "fields": {
            "candidate": 12240,
            "issue": 28,
            "issue_score": 0.25
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12294,
        "fields": {
            "candidate": 12240,
            "issue": 29,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12295,
        "fields": {
            "candidate": 12240,
            "issue": 30,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12296,
        "fields": {
            "candidate": 12240,
            "issue": 31,
            "issue_score": 0.75
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12349,
        "fields": {
            "candidate": 12297,
            "issue": 27,
            "issue_score": 0.65
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12350,
        "fields": {
            "candidate": 12297,
            "issue": 28,
            "issue_score": 0.55
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12351,
        "fields": {
            "candidate": 12297,
            "issue": 29,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12352,
        "fields": {
            "candidate": 12297,
            "issue": 30,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12353,
        "fields": {
            "candidate": 12297,
            "issue": 31,
            "issue_score": -0.65
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12409,
        "fields": {
            "candidate": 12357,
            "issue": 27,
            "issue_score": 0.3
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12410,
        "fields": {
            "candidate": 12357,
            "issue": 28,
            "issue_score": -0.25
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12411,
        "fields": {
            "candidate": 12357,
            "issue": 29,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12412,
        "fields": {
            "candidate": 12357,
            "issue": 30,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12413,
        "fields": {
            "candidate": 12357,
            "issue": 31,
            "issue_score": 0.35
        }
    }
]

campaignTrail_temp.running_mate_issue_score_json = [
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 278,
        "fields": {
            "candidate": 81,
            "issue": 27,
            "issue_score": -0.6
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 279,
        "fields": {
            "candidate": 81,
            "issue": 28,
            "issue_score": -0.6
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 280,
        "fields": {
            "candidate": 81,
            "issue": 29,
            "issue_score": -0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 281,
        "fields": {
            "candidate": 81,
            "issue": 30,
            "issue_score": -0.7
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 282,
        "fields": {
            "candidate": 81,
            "issue": 31,
            "issue_score": -0.45
        }
    }
]

campaignTrail_temp.candidate_state_multiplier_json = [
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12241,
        "fields": {
            "candidate": 12240,
            "state": 181,
            "state_multiplier": 0.47
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12242,
        "fields": {
            "candidate": 12240,
            "state": 182,
            "state_multiplier": 0.65
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12243,
        "fields": {
            "candidate": 12240,
            "state": 183,
            "state_multiplier": 0.42
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12244,
        "fields": {
            "candidate": 12240,
            "state": 184,
            "state_multiplier": 0.59
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12245,
        "fields": {
            "candidate": 12240,
            "state": 185,
            "state_multiplier": 0.31
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12246,
        "fields": {
            "candidate": 12240,
            "state": 186,
            "state_multiplier": 0.46
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12247,
        "fields": {
            "candidate": 12240,
            "state": 187,
            "state_multiplier": 0.47
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12248,
        "fields": {
            "candidate": 12240,
            "state": 188,
            "state_multiplier": 0.24
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12249,
        "fields": {
            "candidate": 12240,
            "state": 189,
            "state_multiplier": 0.49
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12250,
        "fields": {
            "candidate": 12240,
            "state": 190,
            "state_multiplier": 0.36
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12251,
        "fields": {
            "candidate": 12240,
            "state": 191,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12252,
        "fields": {
            "candidate": 12240,
            "state": 192,
            "state_multiplier": 0.72
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12253,
        "fields": {
            "candidate": 12240,
            "state": 193,
            "state_multiplier": 0.6
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12254,
        "fields": {
            "candidate": 12240,
            "state": 194,
            "state_multiplier": 0.72
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12255,
        "fields": {
            "candidate": 12240,
            "state": 195,
            "state_multiplier": 0.79
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12256,
        "fields": {
            "candidate": 12240,
            "state": 196,
            "state_multiplier": 0.54
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12257,
        "fields": {
            "candidate": 12240,
            "state": 197,
            "state_multiplier": 0.76
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12258,
        "fields": {
            "candidate": 12240,
            "state": 198,
            "state_multiplier": 0.53
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12259,
        "fields": {
            "candidate": 12240,
            "state": 199,
            "state_multiplier": 0.44
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12260,
        "fields": {
            "candidate": 12240,
            "state": 200,
            "state_multiplier": 0.19
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12261,
        "fields": {
            "candidate": 12240,
            "state": 201,
            "state_multiplier": 0.69
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12262,
        "fields": {
            "candidate": 12240,
            "state": 202,
            "state_multiplier": 0.54
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12263,
        "fields": {
            "candidate": 12240,
            "state": 203,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12264,
        "fields": {
            "candidate": 12240,
            "state": 204,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12265,
        "fields": {
            "candidate": 12240,
            "state": 205,
            "state_multiplier": 0.64
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12266,
        "fields": {
            "candidate": 12240,
            "state": 206,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12267,
        "fields": {
            "candidate": 12240,
            "state": 207,
            "state_multiplier": 0.86
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12268,
        "fields": {
            "candidate": 12240,
            "state": 208,
            "state_multiplier": 0.21
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12269,
        "fields": {
            "candidate": 12240,
            "state": 209,
            "state_multiplier": 0.76
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12270,
        "fields": {
            "candidate": 12240,
            "state": 210,
            "state_multiplier": 0.4
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12271,
        "fields": {
            "candidate": 12240,
            "state": 211,
            "state_multiplier": 0.45
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12272,
        "fields": {
            "candidate": 12240,
            "state": 212,
            "state_multiplier": 0.25
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12273,
        "fields": {
            "candidate": 12240,
            "state": 213,
            "state_multiplier": 0.35
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12274,
        "fields": {
            "candidate": 12240,
            "state": 214,
            "state_multiplier": 0.89
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12275,
        "fields": {
            "candidate": 12240,
            "state": 215,
            "state_multiplier": 0.49
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12276,
        "fields": {
            "candidate": 12240,
            "state": 216,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12277,
        "fields": {
            "candidate": 12240,
            "state": 217,
            "state_multiplier": 0.46
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12278,
        "fields": {
            "candidate": 12240,
            "state": 218,
            "state_multiplier": 0.48
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12279,
        "fields": {
            "candidate": 12240,
            "state": 219,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12280,
        "fields": {
            "candidate": 12240,
            "state": 220,
            "state_multiplier": 0.54
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12281,
        "fields": {
            "candidate": 12240,
            "state": 221,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12282,
        "fields": {
            "candidate": 12240,
            "state": 222,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12283,
        "fields": {
            "candidate": 12240,
            "state": 223,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12284,
        "fields": {
            "candidate": 12240,
            "state": 224,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12285,
        "fields": {
            "candidate": 12240,
            "state": 225,
            "state_multiplier": 0.12
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12286,
        "fields": {
            "candidate": 12240,
            "state": 226,
            "state_multiplier": 0.28
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12287,
        "fields": {
            "candidate": 12240,
            "state": 227,
            "state_multiplier": 0.29
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12288,
        "fields": {
            "candidate": 12240,
            "state": 228,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12289,
        "fields": {
            "candidate": 12240,
            "state": 229,
            "state_multiplier": 0.48
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12290,
        "fields": {
            "candidate": 12240,
            "state": 230,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12291,
        "fields": {
            "candidate": 12240,
            "state": 231,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12298,
        "fields": {
            "candidate": 12297,
            "state": 181,
            "state_multiplier": 0.52
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12299,
        "fields": {
            "candidate": 12297,
            "state": 182,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12300,
        "fields": {
            "candidate": 12297,
            "state": 183,
            "state_multiplier": 0.58
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12301,
        "fields": {
            "candidate": 12297,
            "state": 184,
            "state_multiplier": 0.41
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12302,
        "fields": {
            "candidate": 12297,
            "state": 185,
            "state_multiplier": 0.69
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12303,
        "fields": {
            "candidate": 12297,
            "state": 186,
            "state_multiplier": 0.53
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12304,
        "fields": {
            "candidate": 12297,
            "state": 187,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12305,
        "fields": {
            "candidate": 12297,
            "state": 188,
            "state_multiplier": 0.86
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12306,
        "fields": {
            "candidate": 12297,
            "state": 189,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12307,
        "fields": {
            "candidate": 12297,
            "state": 190,
            "state_multiplier": 0.74
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12308,
        "fields": {
            "candidate": 12297,
            "state": 191,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12309,
        "fields": {
            "candidate": 12297,
            "state": 192,
            "state_multiplier": 0.25
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12310,
        "fields": {
            "candidate": 12297,
            "state": 193,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12311,
        "fields": {
            "candidate": 12297,
            "state": 194,
            "state_multiplier": 0.26
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12312,
        "fields": {
            "candidate": 12297,
            "state": 195,
            "state_multiplier": 0.21
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12313,
        "fields": {
            "candidate": 12297,
            "state": 196,
            "state_multiplier": 0.46
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12314,
        "fields": {
            "candidate": 12297,
            "state": 197,
            "state_multiplier": 0.26
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12315,
        "fields": {
            "candidate": 12297,
            "state": 198,
            "state_multiplier": 0.45
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12316,
        "fields": {
            "candidate": 12297,
            "state": 199,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12317,
        "fields": {
            "candidate": 12297,
            "state": 200,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12318,
        "fields": {
            "candidate": 12297,
            "state": 201,
            "state_multiplier": 0.25
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12319,
        "fields": {
            "candidate": 12297,
            "state": 202,
            "state_multiplier": 0.45
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12320,
        "fields": {
            "candidate": 12297,
            "state": 203,
            "state_multiplier": 0.39
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12321,
        "fields": {
            "candidate": 12297,
            "state": 204,
            "state_multiplier": 0.44
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12322,
        "fields": {
            "candidate": 12297,
            "state": 205,
            "state_multiplier": 0.4
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12323,
        "fields": {
            "candidate": 12297,
            "state": 206,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12324,
        "fields": {
            "candidate": 12297,
            "state": 207,
            "state_multiplier": 0.12
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12325,
        "fields": {
            "candidate": 12297,
            "state": 208,
            "state_multiplier": 0.67
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12326,
        "fields": {
            "candidate": 12297,
            "state": 209,
            "state_multiplier": 0.13
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12327,
        "fields": {
            "candidate": 12297,
            "state": 210,
            "state_multiplier": 0.56
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12328,
        "fields": {
            "candidate": 12297,
            "state": 211,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12329,
        "fields": {
            "candidate": 12297,
            "state": 212,
            "state_multiplier": 0.64
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12330,
        "fields": {
            "candidate": 12297,
            "state": 213,
            "state_multiplier": 0.65
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12331,
        "fields": {
            "candidate": 12297,
            "state": 214,
            "state_multiplier": 0.11
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12332,
        "fields": {
            "candidate": 12297,
            "state": 215,
            "state_multiplier": 0.55
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12333,
        "fields": {
            "candidate": 12297,
            "state": 216,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12334,
        "fields": {
            "candidate": 12297,
            "state": 217,
            "state_multiplier": 0.54
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12335,
        "fields": {
            "candidate": 12297,
            "state": 218,
            "state_multiplier": 0.49
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12336,
        "fields": {
            "candidate": 12297,
            "state": 219,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12337,
        "fields": {
            "candidate": 12297,
            "state": 220,
            "state_multiplier": 0.46
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12338,
        "fields": {
            "candidate": 12297,
            "state": 221,
            "state_multiplier": 0.17
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12339,
        "fields": {
            "candidate": 12297,
            "state": 222,
            "state_multiplier": 0.555
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12340,
        "fields": {
            "candidate": 12297,
            "state": 223,
            "state_multiplier": 0.6
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12341,
        "fields": {
            "candidate": 12297,
            "state": 224,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12342,
        "fields": {
            "candidate": 12297,
            "state": 225,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12343,
        "fields": {
            "candidate": 12297,
            "state": 226,
            "state_multiplier": 0.63
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12344,
        "fields": {
            "candidate": 12297,
            "state": 227,
            "state_multiplier": 0.65
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12345,
        "fields": {
            "candidate": 12297,
            "state": 228,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12346,
        "fields": {
            "candidate": 12297,
            "state": 229,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12347,
        "fields": {
            "candidate": 12297,
            "state": 230,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12348,
        "fields": {
            "candidate": 12297,
            "state": 231,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12358,
        "fields": {
            "candidate": 12357,
            "state": 181,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12359,
        "fields": {
            "candidate": 12357,
            "state": 182,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12360,
        "fields": {
            "candidate": 12357,
            "state": 183,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12361,
        "fields": {
            "candidate": 12357,
            "state": 184,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12362,
        "fields": {
            "candidate": 12357,
            "state": 185,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12363,
        "fields": {
            "candidate": 12357,
            "state": 186,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12364,
        "fields": {
            "candidate": 12357,
            "state": 187,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12365,
        "fields": {
            "candidate": 12357,
            "state": 188,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12366,
        "fields": {
            "candidate": 12357,
            "state": 189,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12367,
        "fields": {
            "candidate": 12357,
            "state": 190,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12368,
        "fields": {
            "candidate": 12357,
            "state": 191,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12369,
        "fields": {
            "candidate": 12357,
            "state": 192,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12370,
        "fields": {
            "candidate": 12357,
            "state": 193,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12371,
        "fields": {
            "candidate": 12357,
            "state": 194,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12372,
        "fields": {
            "candidate": 12357,
            "state": 195,
            "state_multiplier": 0.0005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12373,
        "fields": {
            "candidate": 12357,
            "state": 196,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12374,
        "fields": {
            "candidate": 12357,
            "state": 197,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12375,
        "fields": {
            "candidate": 12357,
            "state": 198,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12376,
        "fields": {
            "candidate": 12357,
            "state": 199,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12377,
        "fields": {
            "candidate": 12357,
            "state": 200,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12378,
        "fields": {
            "candidate": 12357,
            "state": 201,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12379,
        "fields": {
            "candidate": 12357,
            "state": 202,
            "state_multiplier": 0.0005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12380,
        "fields": {
            "candidate": 12357,
            "state": 203,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12381,
        "fields": {
            "candidate": 12357,
            "state": 204,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12382,
        "fields": {
            "candidate": 12357,
            "state": 205,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12383,
        "fields": {
            "candidate": 12357,
            "state": 206,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12384,
        "fields": {
            "candidate": 12357,
            "state": 207,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12385,
        "fields": {
            "candidate": 12357,
            "state": 208,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12386,
        "fields": {
            "candidate": 12357,
            "state": 209,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12387,
        "fields": {
            "candidate": 12357,
            "state": 210,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12388,
        "fields": {
            "candidate": 12357,
            "state": 211,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12389,
        "fields": {
            "candidate": 12357,
            "state": 212,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12390,
        "fields": {
            "candidate": 12357,
            "state": 213,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12391,
        "fields": {
            "candidate": 12357,
            "state": 214,
            "state_multiplier": 0.0005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12392,
        "fields": {
            "candidate": 12357,
            "state": 215,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12393,
        "fields": {
            "candidate": 12357,
            "state": 216,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12394,
        "fields": {
            "candidate": 12357,
            "state": 217,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12395,
        "fields": {
            "candidate": 12357,
            "state": 218,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12396,
        "fields": {
            "candidate": 12357,
            "state": 219,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12397,
        "fields": {
            "candidate": 12357,
            "state": 220,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12398,
        "fields": {
            "candidate": 12357,
            "state": 221,
            "state_multiplier": 0.0005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12399,
        "fields": {
            "candidate": 12357,
            "state": 222,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12400,
        "fields": {
            "candidate": 12357,
            "state": 223,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12401,
        "fields": {
            "candidate": 12357,
            "state": 224,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12402,
        "fields": {
            "candidate": 12357,
            "state": 225,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12403,
        "fields": {
            "candidate": 12357,
            "state": 226,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12404,
        "fields": {
            "candidate": 12357,
            "state": 227,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12405,
        "fields": {
            "candidate": 12357,
            "state": 228,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12406,
        "fields": {
            "candidate": 12357,
            "state": 229,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12407,
        "fields": {
            "candidate": 12357,
            "state": 230,
            "state_multiplier": 0.0005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12408,
        "fields": {
            "candidate": 12357,
            "state": 231,
            "state_multiplier": 0
        }
    }
]

campaignTrail_temp.answer_score_global_json = [
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12424,
        "fields": {
            "answer": 12419,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12434,
        "fields": {
            "answer": 12432,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12445,
        "fields": {
            "answer": 12443,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12449,
        "fields": {
            "answer": 12447,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12454,
        "fields": {
            "answer": 12452,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12464,
        "fields": {
            "answer": 12462,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12469,
        "fields": {
            "answer": 12467,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12482,
        "fields": {
            "answer": 12480,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12490,
        "fields": {
            "answer": 12488,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12494,
        "fields": {
            "answer": 12492,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12498,
        "fields": {
            "answer": 12496,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.0055
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12504,
        "fields": {
            "answer": 12502,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12505,
        "fields": {
            "answer": 12502,
            "candidate": 12240,
            "affected_candidate": 12297,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12508,
        "fields": {
            "answer": 12506,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12511,
        "fields": {
            "answer": 12509,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.035
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12514,
        "fields": {
            "answer": 12512,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12518,
        "fields": {
            "answer": 12516,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.0005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12521,
        "fields": {
            "answer": 12519,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.0006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12524,
        "fields": {
            "answer": 12522,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.0005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12537,
        "fields": {
            "answer": 12528,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12541,
        "fields": {
            "answer": 12539,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12545,
        "fields": {
            "answer": 12543,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.0025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12551,
        "fields": {
            "answer": 12549,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.0035
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12556,
        "fields": {
            "answer": 12554,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12562,
        "fields": {
            "answer": 12560,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12571,
        "fields": {
            "answer": 12569,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12578,
        "fields": {
            "answer": 12576,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12583,
        "fields": {
            "answer": 12581,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12586,
        "fields": {
            "answer": 12584,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12590,
        "fields": {
            "answer": 12588,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12601,
        "fields": {
            "answer": 12599,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12605,
        "fields": {
            "answer": 12603,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.0025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12609,
        "fields": {
            "answer": 12607,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.0025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12613,
        "fields": {
            "answer": 12611,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.0025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12617,
        "fields": {
            "answer": 12615,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12622,
        "fields": {
            "answer": 12619,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12626,
        "fields": {
            "answer": 12624,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12629,
        "fields": {
            "answer": 12627,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.0075
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12632,
        "fields": {
            "answer": 12630,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12639,
        "fields": {
            "answer": 12637,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.0125
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12643,
        "fields": {
            "answer": 12640,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12646,
        "fields": {
            "answer": 12644,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12649,
        "fields": {
            "answer": 12647,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12653,
        "fields": {
            "answer": 12651,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12656,
        "fields": {
            "answer": 12654,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12667,
        "fields": {
            "answer": 12665,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12687,
        "fields": {
            "answer": 12685,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.0085
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12692,
        "fields": {
            "answer": 12690,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.0025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12695,
        "fields": {
            "answer": 12693,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.0055
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12699,
        "fields": {
            "answer": 12697,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12704,
        "fields": {
            "answer": 12700,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.0045
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12707,
        "fields": {
            "answer": 12705,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12711,
        "fields": {
            "answer": 12709,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.0005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12716,
        "fields": {
            "answer": 12714,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12719,
        "fields": {
            "answer": 12717,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12728,
        "fields": {
            "answer": 12726,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12733,
        "fields": {
            "answer": 12732,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12738,
        "fields": {
            "answer": 12735,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12740,
        "fields": {
            "answer": 12739,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.0025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12742,
        "fields": {
            "answer": 12741,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12746,
        "fields": {
            "answer": 12744,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12751,
        "fields": {
            "answer": 12749,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.0005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12755,
        "fields": {
            "answer": 12753,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12758,
        "fields": {
            "answer": 12756,
            "candidate": 12240,
            "affected_candidate": 12240,
            "global_multiplier": 0.0005
        }
    }
]

campaignTrail_temp.answer_score_issue_json = [
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12425,
        "fields": {
            "answer": 12419,
            "issue": 27,
            "issue_score": 0.5,
            "issue_importance": 0.66
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12429,
        "fields": {
            "answer": 12415,
            "issue": 31,
            "issue_score": 0.35,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12430,
        "fields": {
            "answer": 12419,
            "issue": 31,
            "issue_score": 0.65,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12431,
        "fields": {
            "answer": 12426,
            "issue": 31,
            "issue_score": -0.25,
            "issue_importance": 0.33
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12438,
        "fields": {
            "answer": 12436,
            "issue": 27,
            "issue_score": -0.4,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12455,
        "fields": {
            "answer": 12452,
            "issue": 27,
            "issue_score": -0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12456,
        "fields": {
            "answer": 12452,
            "issue": 31,
            "issue_score": 0.5,
            "issue_importance": 0.66
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12460,
        "fields": {
            "answer": 12457,
            "issue": 27,
            "issue_score": -0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12461,
        "fields": {
            "answer": 12457,
            "issue": 31,
            "issue_score": 0.5,
            "issue_importance": 0.66
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12465,
        "fields": {
            "answer": 12462,
            "issue": 27,
            "issue_score": 0.15,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12470,
        "fields": {
            "answer": 12467,
            "issue": 27,
            "issue_score": -0.65,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12475,
        "fields": {
            "answer": 12472,
            "issue": 28,
            "issue_score": -0.65,
            "issue_importance": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12476,
        "fields": {
            "answer": 12472,
            "issue": 31,
            "issue_score": 0.3,
            "issue_importance": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12479,
        "fields": {
            "answer": 12477,
            "issue": 28,
            "issue_score": -0.5,
            "issue_importance": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12486,
        "fields": {
            "answer": 12484,
            "issue": 28,
            "issue_score": 0.5,
            "issue_importance": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12491,
        "fields": {
            "answer": 12488,
            "issue": 27,
            "issue_score": -0.7,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12495,
        "fields": {
            "answer": 12492,
            "issue": 27,
            "issue_score": -0.6,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12500,
        "fields": {
            "answer": 12496,
            "issue": 27,
            "issue_score": 0.2,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12538,
        "fields": {
            "answer": 12528,
            "issue": 29,
            "issue_score": 0.45,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12542,
        "fields": {
            "answer": 12539,
            "issue": 29,
            "issue_score": 0.75,
            "issue_importance": -0.075
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12546,
        "fields": {
            "answer": 12543,
            "issue": 29,
            "issue_score": 0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12568,
        "fields": {
            "answer": 12565,
            "issue": 30,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12575,
        "fields": {
            "answer": 12572,
            "issue": 30,
            "issue_score": -0.45,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12579,
        "fields": {
            "answer": 12576,
            "issue": 30,
            "issue_score": 0.15,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12587,
        "fields": {
            "answer": 12584,
            "issue": 30,
            "issue_score": 0.25,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12591,
        "fields": {
            "answer": 12588,
            "issue": 30,
            "issue_score": 0.1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12610,
        "fields": {
            "answer": 12607,
            "issue": 27,
            "issue_score": 0.1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12614,
        "fields": {
            "answer": 12611,
            "issue": 27,
            "issue_score": 0.15,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12618,
        "fields": {
            "answer": 12615,
            "issue": 27,
            "issue_score": -1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12621,
        "fields": {
            "answer": 12619,
            "issue": 27,
            "issue_score": -0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12658,
        "fields": {
            "answer": 12654,
            "issue": 27,
            "issue_score": -0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12662,
        "fields": {
            "answer": 12657,
            "issue": 27,
            "issue_score": -0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12663,
        "fields": {
            "answer": 12657,
            "issue": 29,
            "issue_score": -0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12664,
        "fields": {
            "answer": 12657,
            "issue": 31,
            "issue_score": 0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12668,
        "fields": {
            "answer": 12665,
            "issue": 27,
            "issue_score": -0.7,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12669,
        "fields": {
            "answer": 12665,
            "issue": 27,
            "issue_score": -0.7,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12702,
        "fields": {
            "answer": 12697,
            "issue": 30,
            "issue_score": 0.15,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12703,
        "fields": {
            "answer": 12700,
            "issue": 30,
            "issue_score": 0.2,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12708,
        "fields": {
            "answer": 12705,
            "issue": 30,
            "issue_score": -0.2,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12712,
        "fields": {
            "answer": 12709,
            "issue": 30,
            "issue_score": -0.3,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12720,
        "fields": {
            "answer": 12717,
            "issue": 27,
            "issue_score": -0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12723,
        "fields": {
            "answer": 12721,
            "issue": 27,
            "issue_score": -0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12724,
        "fields": {
            "answer": 12721,
            "issue": 29,
            "issue_score": -0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12725,
        "fields": {
            "answer": 12721,
            "issue": 31,
            "issue_score": 0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12729,
        "fields": {
            "answer": 12726,
            "issue": 27,
            "issue_score": -0.7,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12730,
        "fields": {
            "answer": 12726,
            "issue": 27,
            "issue_score": -0.7,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12737,
        "fields": {
            "answer": 12735,
            "issue": 27,
            "issue_score": -0.3,
            "issue_importance": 0.75
        }
    }
]

campaignTrail_temp.answer_score_state_json = [
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12442,
        "fields": {
            "answer": 12440,
            "state": 203,
            "candidate": 12240,
            "affected_candidate": 12240,
            "state_multiplier": 0.0005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12446,
        "fields": {
            "answer": 12443,
            "state": 203,
            "candidate": 12240,
            "affected_candidate": 12240,
            "state_multiplier": 0.0005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12450,
        "fields": {
            "answer": 12447,
            "state": 203,
            "candidate": 12240,
            "affected_candidate": 12240,
            "state_multiplier": 0.0005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12525,
        "fields": {
            "answer": 12506,
            "state": 187,
            "candidate": 12240,
            "affected_candidate": 12240,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12553,
        "fields": {
            "answer": 12549,
            "state": 215,
            "candidate": 12240,
            "affected_candidate": 12240,
            "state_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12557,
        "fields": {
            "answer": 12554,
            "state": 215,
            "candidate": 12240,
            "affected_candidate": 12240,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12563,
        "fields": {
            "answer": 12560,
            "state": 215,
            "candidate": 12240,
            "affected_candidate": 12240,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12598,
        "fields": {
            "answer": 12512,
            "state": 187,
            "candidate": 12240,
            "affected_candidate": 12240,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12633,
        "fields": {
            "answer": 12630,
            "state": 203,
            "candidate": 12240,
            "affected_candidate": 12240,
            "state_multiplier": 0.0005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12747,
        "fields": {
            "answer": 12744,
            "state": 199,
            "candidate": 12240,
            "affected_candidate": 12240,
            "state_multiplier": 0.0005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12748,
        "fields": {
            "answer": 12744,
            "state": 217,
            "candidate": 12240,
            "affected_candidate": 12240,
            "state_multiplier": 0.0005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12762,
        "fields": {
            "answer": 12760,
            "state": 215,
            "candidate": 12240,
            "affected_candidate": 12240,
            "state_multiplier": 0.0006
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12763,
        "fields": {
            "answer": 12760,
            "state": 229,
            "candidate": 12240,
            "affected_candidate": 12240,
            "state_multiplier": 0.0006
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12764,
        "fields": {
            "answer": 12760,
            "state": 218,
            "candidate": 12240,
            "affected_candidate": 12240,
            "state_multiplier": 0.0006
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12767,
        "fields": {
            "answer": 12765,
            "state": 206,
            "candidate": 12240,
            "affected_candidate": 12240,
            "state_multiplier": 0.0008
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12772,
        "fields": {
            "answer": 12770,
            "state": 181,
            "candidate": 12240,
            "affected_candidate": 12240,
            "state_multiplier": 0.0005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12773,
        "fields": {
            "answer": 12770,
            "state": 222,
            "candidate": 12240,
            "affected_candidate": 12240,
            "state_multiplier": 0.0005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12774,
        "fields": {
            "answer": 12770,
            "state": 187,
            "candidate": 12240,
            "affected_candidate": 12240,
            "state_multiplier": 0.0005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12777,
        "fields": {
            "answer": 12775,
            "state": 189,
            "candidate": 12240,
            "affected_candidate": 12240,
            "state_multiplier": 0.0006
        }
    }
]

campaignTrail_temp.answer_feedback_json = [
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12356,
        "fields": {
            "answer": 12355,
            "candidate": 12240,
            "answer_feedback": "Alright, way to get that crowd fired up."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12416,
        "fields": {
            "answer": 12415,
            "candidate": 12240,
            "answer_feedback": "Alright, way to get the crowd fired up."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12423,
        "fields": {
            "answer": 12419,
            "candidate": 12240,
            "answer_feedback": "This motivates your conservative base, but the majority of Americans don't like the defense of the status quo."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12427,
        "fields": {
            "answer": 12426,
            "candidate": 12240,
            "answer_feedback": "It is not the worst idea to separate yourself from President Bennett, but its not the best idea to try and stand out as a unique candidate."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12433,
        "fields": {
            "answer": 12432,
            "candidate": 12240,
            "answer_feedback": "This is a good strategy that will help bolster your campaign, keep it up."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12437,
        "fields": {
            "answer": 12436,
            "candidate": 12240,
            "answer_feedback": "That is quite the firey speech Ms. Vice President, but wasn't your leg blown up by a grenade? Some pundits also note that you're trying to take credit for the death of Bin Laden, which was Bennett's doing."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12441,
        "fields": {
            "answer": 12440,
            "candidate": 12240,
            "answer_feedback": "Though Minnesota isn't a tossup you need to flip, people can note down Anderson's experience as governor."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12444,
        "fields": {
            "answer": 12443,
            "candidate": 12240,
            "answer_feedback": "This appeases moderates, but be careful with alienating your conservative Base."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12448,
        "fields": {
            "answer": 12447,
            "candidate": 12240,
            "answer_feedback": "This type of reasoning is how corrupt dictators select their cabinet, be careful next time."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12453,
        "fields": {
            "answer": 12452,
            "candidate": 12240,
            "answer_feedback": "Highlighting Bennett's hunt for Bin Laden is a great boost to your campaign, just make sure not to take all the credit."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12458,
        "fields": {
            "answer": 12457,
            "candidate": 12240,
            "answer_feedback": "This implies that you plan to continue the War on Terrorism and expand it, which isn't the best thing, but Islamic Extremism isn't good either. Furthermore, this is a strong response, and shows that your administration will play a key role in global politics."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12463,
        "fields": {
            "answer": 12462,
            "candidate": 12240,
            "answer_feedback": "What?! You do remember that conflict is still present in Iraq and Iran, and pulling out so soon can cause regional chaos."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12468,
        "fields": {
            "answer": 12467,
            "candidate": 12240,
            "answer_feedback": "Take flight... Take flight... Huh? Oh sorry, you're response is solid, and people can see your determination and dedication to the cause."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12478,
        "fields": {
            "answer": 12477,
            "candidate": 12240,
            "answer_feedback": "I can see your reasonings, but it’s risky."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12481,
        "fields": {
            "answer": 12480,
            "candidate": 12240,
            "answer_feedback": "Commie!"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12485,
        "fields": {
            "answer": 12484,
            "candidate": 12240,
            "answer_feedback": "You are getting a lot of attention in the news for this answer, perhaps this will establish you as an independent thinker. To be fair, you have spoken against bailouts in the past."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12489,
        "fields": {
            "answer": 12488,
            "candidate": 12240,
            "answer_feedback": "This is a good right-wing answer that motivates your base… At the cost of scaring away undecided voters."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12493,
        "fields": {
            "answer": 12492,
            "candidate": 12240,
            "answer_feedback": "That’s exactly what they thought."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12497,
        "fields": {
            "answer": 12496,
            "candidate": 12240,
            "answer_feedback": "Meh."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12503,
        "fields": {
            "answer": 12502,
            "candidate": 12240,
            "answer_feedback": "Pundits note that both you and Zimmerman came out inconclusive in the debates. People on Internet forums even joke about how the two of you are actively working together against winning the White House due to not actually wanting to run."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12507,
        "fields": {
            "answer": 12506,
            "candidate": 12240,
            "answer_feedback": "In these debates, you manage to show Erica who’s boss, with many subsequently believing you won thanks to you being more prepared."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12510,
        "fields": {
            "answer": 12509,
            "candidate": 12240,
            "answer_feedback": "Wow, you chickened out. Even President Bennett is disappointed in you."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12513,
        "fields": {
            "answer": 12512,
            "candidate": 12240,
            "answer_feedback": "Many consider Erica Zimmerman to be the victor, with you constantly making contradictions and gaffes. Polls are now shifting to the left after your failures."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12517,
        "fields": {
            "answer": 12516,
            "candidate": 12240,
            "answer_feedback": "This sounds forced for some, but it’s a decent response overall."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12520,
        "fields": {
            "answer": 12519,
            "candidate": 12240,
            "answer_feedback": "This is probably the best response you have for this situation."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12523,
        "fields": {
            "answer": 12522,
            "candidate": 12240,
            "answer_feedback": "This is a cold answer that doesn’t resonate well with voters."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12529,
        "fields": {
            "answer": 12528,
            "candidate": 12240,
            "answer_feedback": "What?! This is contradictory to your party’s beliefs, perhaps this will establish you as an independent thinker."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12540,
        "fields": {
            "answer": 12539,
            "candidate": 12240,
            "answer_feedback": "This is an alright, conservative answer that will motivate your base, but it is a hawkish one. Many moderates don’t like the cut of your jib."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12544,
        "fields": {
            "answer": 12543,
            "candidate": 12240,
            "answer_feedback": "This is a good conservative answer that will motivate your base."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12550,
        "fields": {
            "answer": 12549,
            "candidate": 12240,
            "answer_feedback": "The President gives you some really good advice, and adding to this is a really good meal. But a few Democratic advertisers take advantage of your fast consumption, and film you and your lack of manners. This rush of yours is compared to footage of Senator Zimmerman eating at a fancy restaurant with full knowledge of etiquette, this puts to show who the more respectable candidate is."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12555,
        "fields": {
            "answer": 12554,
            "candidate": 12240,
            "answer_feedback": "Hotdogs don’t take long to finish, and you get to the rally early. There you make a great hit, swinging Cleveland citizens to the right."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12559,
        "fields": {
            "answer": 12558,
            "candidate": 12240,
            "answer_feedback": "You get to the rally early, and for the first few minutes, you do well. But your empty stomach takes a toll, and you faint in the middle of it. Next time eat breakfast first."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12561,
        "fields": {
            "answer": 12560,
            "candidate": 12240,
            "answer_feedback": "Due to traffic, you arrive a few minutes late to the rally, and you also get a stain on your blazer. You make up for this by joking about it, raising the morale of your supporters."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12566,
        "fields": {
            "answer": 12565,
            "candidate": 12240,
            "answer_feedback": "This is an understandable response, satisfying everyone across the political spectrum."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12570,
        "fields": {
            "answer": 12569,
            "candidate": 12240,
            "answer_feedback": "What the?! Are you out of your mind?! Not only does this not align at all with your party’s foreign policy, but it also appears hawkish to others. People now see you as a Russian lapdog."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12573,
        "fields": {
            "answer": 12572,
            "candidate": 12240,
            "answer_feedback": "Holy ambitions, batwoman! Did the stories of Georgia not weigh on your conscience?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12577,
        "fields": {
            "answer": 12576,
            "candidate": 12240,
            "answer_feedback": "What?! You’re getting a lot of attention in the news, perhaps this will establish you as an independent thinker… Who doesn’t think."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12582,
        "fields": {
            "answer": 12581,
            "candidate": 12240,
            "answer_feedback": "People note your response as being too vague and unclear."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12585,
        "fields": {
            "answer": 12584,
            "candidate": 12240,
            "answer_feedback": "Good answer."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12589,
        "fields": {
            "answer": 12588,
            "candidate": 12240,
            "answer_feedback": "This is a reasonable take on the situation, though it’s not a good idea to let Russia do their thing."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12600,
        "fields": {
            "answer": 12599,
            "candidate": 12240,
            "answer_feedback": "This is a good, mainstream answer to take."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12604,
        "fields": {
            "answer": 12603,
            "candidate": 12240,
            "answer_feedback": "This is a hot take, but if you think it's the right choice for Iran, then you do you."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12608,
        "fields": {
            "answer": 12607,
            "candidate": 12240,
            "answer_feedback": "This is a reasonable response, but how did Bin Laden evade detection from border guards?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12612,
        "fields": {
            "answer": 12611,
            "candidate": 12240,
            "answer_feedback": "Bringing up the attacks against Pakistan is a good rebuttal to any claims of allegiance."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12616,
        "fields": {
            "answer": 12615,
            "candidate": 12240,
            "answer_feedback": "This is too extreme to say, watch your words because Americans don't want to invade a densely populated country with nuclear weapons and close relations with major powers, notably China. Do you really want to go to war with China?!"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12620,
        "fields": {
            "answer": 12619,
            "candidate": 12240,
            "answer_feedback": "It is good that you are willing to investigate these rumors, but maybe it isn't for the best."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12625,
        "fields": {
            "answer": 12624,
            "candidate": 12240,
            "answer_feedback": "Mainstream media will find anything that can sling mud at either side, and you think you can just dodge the question?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12628,
        "fields": {
            "answer": 12627,
            "candidate": 12240,
            "answer_feedback": "This is an alright response, but this doesn't do much to appease the public."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12631,
        "fields": {
            "answer": 12630,
            "candidate": 12240,
            "answer_feedback": "This is a good answer, clearing your running mate of any past wrongdoings and bringing up her laws against DUI."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12635,
        "fields": {
            "answer": 12634,
            "candidate": 12240,
            "answer_feedback": "You're trying to deflect onto politicians of the other party... This is actually a good comeback, but it's not helping."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12638,
        "fields": {
            "answer": 12637,
            "candidate": 12240,
            "answer_feedback": "A reasonable and decent retort, but its not buying everyone."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12641,
        "fields": {
            "answer": 12640,
            "candidate": 12240,
            "answer_feedback": "Fair."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12645,
        "fields": {
            "answer": 12644,
            "candidate": 12240,
            "answer_feedback": "You reply well, but Zimmerman still makes a good point nonetheless."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12648,
        "fields": {
            "answer": 12647,
            "candidate": 12240,
            "answer_feedback": "Yes, but why can't you start on them NOW?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12652,
        "fields": {
            "answer": 12651,
            "candidate": 12240,
            "answer_feedback": "Alright, way to get that crowd fired up."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12655,
        "fields": {
            "answer": 12654,
            "candidate": 12240,
            "answer_feedback": "Alright! Way to get that crowd fired up!"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12659,
        "fields": {
            "answer": 12657,
            "candidate": 12240,
            "answer_feedback": "Alright, way to get that crowd fired up."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12666,
        "fields": {
            "answer": 12665,
            "candidate": 12240,
            "answer_feedback": "Damn, way to get that crowd fired up."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12676,
        "fields": {
            "answer": 12675,
            "candidate": 12240,
            "answer_feedback": "Good call."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12686,
        "fields": {
            "answer": 12685,
            "candidate": 12240,
            "answer_feedback": "People note your leaning stance towards smoking, maybe healthcare isn't a main talking point in your campaign..."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12689,
        "fields": {
            "answer": 12688,
            "candidate": 12240,
            "answer_feedback": "This is the best answer you can give, now we can move on to more relevant topics."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12691,
        "fields": {
            "answer": 12690,
            "candidate": 12240,
            "answer_feedback": "This appeases everyday civilians at the expense of upsetting corporations."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12694,
        "fields": {
            "answer": 12693,
            "candidate": 12240,
            "answer_feedback": "Smoking is harmful, but you make it seem like a bigger deal with this response. Major corporations are upset and people are afraid that this could spiral into some sort of war on drugs."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12698,
        "fields": {
            "answer": 12697,
            "candidate": 12240,
            "answer_feedback": "This appeases minorities and everyone in general."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12701,
        "fields": {
            "answer": 12700,
            "candidate": 12240,
            "answer_feedback": "Good to know, just make sure you don't anger your Turkish allies, they, too, have a Kurdish population."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12706,
        "fields": {
            "answer": 12705,
            "candidate": 12240,
            "answer_feedback": "This is a solid answer."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12710,
        "fields": {
            "answer": 12709,
            "candidate": 12240,
            "answer_feedback": "This answer is off-putting to some people."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12715,
        "fields": {
            "answer": 12714,
            "candidate": 12240,
            "answer_feedback": "Alright, way to get that crowd fired up."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12718,
        "fields": {
            "answer": 12717,
            "candidate": 12240,
            "answer_feedback": "Alright! Way to get that crowd fired up!"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12722,
        "fields": {
            "answer": 12721,
            "candidate": 12240,
            "answer_feedback": "Alright, way to get that crowd fired up."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12727,
        "fields": {
            "answer": 12726,
            "candidate": 12240,
            "answer_feedback": "Damn, way to get that crowd fired up."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12745,
        "fields": {
            "answer": 12744,
            "candidate": 12240,
            "answer_feedback": "The momentum in the states you visited barely change, and you lose some ground in the swing states aswell. Many consider these rallies a waste of time."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12750,
        "fields": {
            "answer": 12749,
            "candidate": 12240,
            "answer_feedback": "This is a good strategy."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12754,
        "fields": {
            "answer": 12753,
            "candidate": 12240,
            "answer_feedback": "Alright! Way to get that crowd fired up!"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12757,
        "fields": {
            "answer": 12756,
            "candidate": 12240,
            "answer_feedback": "Alright! Way to get that crowd fired up!"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12761,
        "fields": {
            "answer": 12760,
            "candidate": 12240,
            "answer_feedback": "Hopefully you can pull these states out and win the election!"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12766,
        "fields": {
            "answer": 12765,
            "candidate": 12240,
            "answer_feedback": "Hopefully you can pull Montana out and win the election!"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12771,
        "fields": {
            "answer": 12770,
            "candidate": 12240,
            "answer_feedback": "Hopefully you can pull these states out and win the election!"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12776,
        "fields": {
            "answer": 12775,
            "candidate": 12240,
            "answer_feedback": "Hopefully you can pull Florida out and win the election!"
        }
    }
]

campaignTrail_temp.candidate_image_url = "https://preview.redd.it/heb4f789x41f1.png?width=320&crop=smart&auto=webp&s=acc76937aba40dbc2a1e499cb182584d59d986c1";
campaignTrail_temp.running_mate_image_url = "https://preview.redd.it/dxgcfhgvhjokpol-p-v0-7igws25u541f1.png?width=320&crop=smart&auto=webp&s=e0e826b6e35b6030301039f2940a293bbd0000db";
campaignTrail_temp.candidate_last_name = "Young";
campaignTrail_temp.running_mate_last_name = "Anderson";



campaignTrail_temp.jet_data = [{
    "nicknames": {
        "12240": "Melly",
        "12297": "Erica",
        "12357": "Dana",
        "12838": "Scott"
    },
    "banner_enabled": true,
    "banner_data": {
        "canName": "Young",
        "runName": "Anderson",
        "canImage": "https://preview.redd.it/heb4f789x41f1.png?width=320&crop=smart&auto=webp&s=acc76937aba40dbc2a1e499cb182584d59d986c1",
        "runImage": "https://preview.redd.it/dxgcfhgvhjokpol-p-v0-7igws25u541f1.png?width=320&crop=smart&auto=webp&s=e0e826b6e35b6030301039f2940a293bbd0000db"
    },
    "cyoa_enabled": true,
    "cyoa_data": {
        "1748415352120": {
            "answer": "12671",
            "question": "12677",
            "id": 1748415352120
        },
        "1748602826584": {
            "answer": "12678",
            "question": "12780",
            "id": 1748602826584
        },
        "1748602826887": {
            "answer": "12681",
            "question": "12780",
            "id": 1748602826887
        },
        "1748603018955": {
            "answer": "12899",
            "question": "12900",
            "id": 1748603018955
        },
        "1748603403436": {
            "answer": "12904",
            "question": "12759",
            "id": 1748603403436
        },
        "1748603403623": {
            "answer": "12907",
            "question": "12759",
            "id": 1748603403623
        }
    },
    "endings_enabled": false,
    "ending_data": {
        "1747487532561": {
            "id": 1747487532561,
            "variable": 0,
            "operator": ">",
            "value": 0,
            "endingImage": "",
            "endingText": "Put ending text here, you can and should use <p>HTML tags</p>!"
        },
        "1747487575733": {
            "id": 1747487575733,
            "variable": 0,
            "operator": ">",
            "value": 0,
            "endingImage": "",
            "endingText": "Put ending text here, you can and should use <p>HTML tags</p>!"
        }
    },
    "mapping_enabled": false,
    "mapping_data": {}
}
]

