
campaignTrail_temp.cyoa = true;

function getQuestionNumberFromPk(pk) {
    return campaignTrail_temp.questions_json.map(q=>q.pk).indexOf(pk)-1;
}

cyoAdventure = function (a) {
    ans = campaignTrail_temp.player_answers[campaignTrail_temp.player_answers.length-1];

}

campaignTrail_temp.questions_json = [
    {
        "model": "campaign_trail.question",
        "pk": 1042,
        "fields": {
            "priority": 1,
            "description": "No one expected this. Polls show that about 20% of Americans already support you! So far, you have been the candidate supported by Americans tired of politics and the two-party system. Your positivity, your energy is something that is fresh in polarized America. But now that it has become clear that you have a chance to become president you also need to say something about your plans for the presidency and prove that you are not joke candidate.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1044,
        "fields": {
            "priority": 2,
            "description": "So far, the largest group of people who support you are young people. What are you going to do to encourage other age groups to vote for you?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1043,
        "fields": {
            "priority": 2,
            "description": "Congratulations! You are the first third party candidate since 1992 to participate in the debate. Good luck!",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1045,
        "fields": {
            "priority": 3,
            "description": "After the unexpected victory in the debate, everyone is waiting for your next move. What will you do?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1046,
        "fields": {
            "priority": 4,
            "description": "\"Crazy Tommy\", says Trump, \"Crazy Tommy is the biggest crook in American history. He was not born in America. He's from Europe. I have proof of that. This is a tremendous fraud.\" Trump's words have caused a huge scandal. Kamala Harris has so far not addressed the allegations, but Tim Walz said in an interview that he is “concerned about this possibility.” How will you respond to these allegations?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1051,
        "fields": {
            "priority": 5,
            "description": "You've lost a lot of support since Trump's accusations. Both Republicans and Democrats accuse you of fraud. Americans are teasing you about whether they are going to vote for you or not. However, you still have time to turn this around. Greg says you need to talk about your plans for America. What will you do?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1055,
        "fields": {
            "priority": 6,
            "description": "What is your stance on immigration?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1065,
        "fields": {
            "priority": 7,
            "description": "There are politicians who are disappointed with Republicans or Democrats. You can take a chance and ask one of them to support you, but some of your supporters may feel betrayed. What will you do?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1059,
        "fields": {
            "priority": 7,
            "description": "During one interview you are asked about your opinion of Biden's presidency. What do you answer?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1057,
        "fields": {
            "priority": 7,
            "description": "The vice presidential debate with Tim Walz and JD Vance is coming up. What strategy should Greg take?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 20940,
        "fields": {
            "priority": 0,
            "description": "You have been invited to Joe Rogan Experience. What beliefs would you like to emphasize in this interview?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 20955,
        "fields": {
            "priority": 0,
            "description": "There are parts of the U.S. that you haven't visited so far during the campaign. Where would you like to go?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 20980,
        "fields": {
            "priority": 0,
            "description": "There's no denying that one of the reasons for your success so far is your celebrity status. Despite the fact that Republicans and Democrats want to convince others that you are not a serious candidate, Greg suggests that you should contact someone famous and invite them to one of your rallies. That way, according to Greg, you would maintain your dominance on social media.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 20995,
        "fields": {
            "priority": 0,
            "description": "There are rumors on social media that during the filming of “The Room” you were notoriously late, mean to the actors, and wasted far more money on the production than necessary. What will be your response?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 21002,
        "fields": {
            "priority": 0,
            "description": "You are one of the most american Americans to live in America, but Greg have French and Italian ancestry. (You are so happy you have Greg as your VP candidate, and you love USA so much...) Maybe it's good idea to have him meet with some ancestry or minority groups in USA?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 21020,
        "fields": {
            "priority": 0,
            "description": "For many Americans, the cost of living is still very high. Many people are also worried about high cost of goods and housing. What is your plan for improving economy if you will be elected president?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 21062,
        "fields": {
            "priority": 0,
            "description": "Many people express concern that as a president from outside the two major parties, you will not be able to cooperate with the Congress. How will you address this?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 21117,
        "fields": {
            "priority": 0,
            "description": "You are participating in second presidential debate. Everything goes well until Donald Trump asks you when will you show your birth certificate. What will you answer?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 21134,
        "fields": {
            "priority": 0,
            "description": "You are often accused of being out of touch with the reality of the average American. People are people, sometimes they just can’t see their own faults. Do you want to say anything about your upbringing and your \"rags to riches\" life story?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 21178,
        "fields": {
            "priority": 0,
            "description": "So far during the campaign you have not mentioned you views on climate change. What is you stance?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 21296,
        "fields": {
            "priority": 0,
            "description": "Harris and Trump are often attacking you on foreign policy. According to them, you are too inexperienced to lead country. Harris says your “unpredictability” will jeopardize U.S. relations with NATO allies, while Trump believes you will not be respected by foreign leaders. What is your response?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 21347,
        "fields": {
            "priority": 0,
            "description": "Unfortunately, rumors about your birth have recently resurfaced on the Internet. An anonymous user has revealed your supposedly real name and claims that you were born in Poland. Because of this, the controversy over your place of birth is again trending on social media.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 21353,
        "fields": {
            "priority": 0,
            "description": "New Orleans, Louisiana. Your home state. A week before the election. You're standing in front of a microphone, around you see tens of thousands of your supporters (Greg invited all your supporters. Good thinking!). So many people, like in Grand Central Station! What do you want to say at the end of the campaign?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 21392,
        "fields": {
            "priority": 0,
            "description": "Where do you want to spend your day during the last day of the campaign?",
            "likelihood": 1
        }
    }
]

campaignTrail_temp.answers_json = [
    {
        "model": "campaign_trail.answer",
        "pk": 5142,
        "fields": {
            "question": 1042,
            "description": "America needs more big things, more infrastructure. Enough of that Mickey Mouse stuff! I will send an American astronaut to Mars by 2030. We need to revive American Dream."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5223,
        "fields": {
            "question": 1065,
            "description": "I inspire myself. I don't need any politicians, you know? I am candidate of change."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20682,
        "fields": {
            "question": 1042,
            "description": "When I was a little kid, I wanted to be, like, you know, a president, you know? Or, I always have interest in politics, you know? Because I like the political aspect of the presidency, et cetera."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20685,
        "fields": {
            "question": 1042,
            "description": "In America we have across the country, the entire world. America is most important and I am the only candidate who cares about America. Trump is a liar and he does not love America like I do. He is a fake conservative."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20693,
        "fields": {
            "question": 1042,
            "description": "Americans are fed up with Democratic Party! They claim to care about minorities, but that's false, you know? I really care about them. I am pro-expression. I am pro - you know, as long as you don't hurt anyone. Be who you want to be!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20700,
        "fields": {
            "question": 1044,
            "description": "I'm not a god, I'm just a simple guy. I can't please everyone. Let's focus on young people. Let's do an AMA on Reddit. Let's create youtube videos, tik-toks, et cetera. Young people love me.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20708,
        "fields": {
            "question": 1044,
            "description": "I like acting better than anything else, but, you know, directing's good. I need to shoot some advertisements, because I need more older people to vote for me. Just me, Greg and our plans for the presidency."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20711,
        "fields": {
            "question": 1044,
            "description": "My background is in psychology and I'm also a stage actor. We can win elections and I should organize many rallies in swing states and talk to people. I understand people. \n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20714,
        "fields": {
            "question": 1044,
            "description": "I don't think we can win this elections, okay? Polls show that I have a lot of support in California. Let's organize big rally there. Maybe I will at least win in California."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20717,
        "fields": {
            "question": 1043,
            "description": "If you want to be president, act like one."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20720,
        "fields": {
            "question": 1045,
            "description": "Let's attack Trump. He's a criminal, you know? If I become president, I will take him to the police. He's just a little chicken, cheep-cheep-cheep-cheep-cheep!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20725,
        "fields": {
            "question": 1045,
            "description": "Let's attack Harris. She's fake, you know? As a director, I have to feel realism from actors, and they can't be plastic. It's the same in politics. I am the only one who is like regular person, you know?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20731,
        "fields": {
            "question": 1045,
            "description": "I am just a simple guy and I like when people enjoy themselves. Me and Greg should go for a trip, California to Louisiana and set up screenings of “The Room” in every state we pass through. We will answer questions before each screening. We can win all this states, okay?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20737,
        "fields": {
            "question": 1045,
            "description": "Well I work very hard, 24/7, several days a week, okay? We need to wait and see what Trump and Harris do.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20742,
        "fields": {
            "question": 1046,
            "description": "Ha ha ha, what a story Donald!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20745,
        "fields": {
            "question": 1046,
            "description": "Donald, leave your stupid comments in you pocket! I'm a real American, okay? Let's organize press conference and denounce this accusations."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20748,
        "fields": {
            "question": 1046,
            "description": "Trump is a liar and a crook, you know? How can you believe him?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20752,
        "fields": {
            "question": 1051,
            "description": "We have big problem in society with the drugs. If I become president, I will ban marihuana. People shouldn't smoke that crap. It's screwing with their heads."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20762,
        "fields": {
            "question": 1051,
            "description": "America is great because we have freedom. If I become president, I will make sure that Americans will have their right to have weapons. If more people had guns, the world would be a safer place to live."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20770,
        "fields": {
            "question": 1051,
            "description": "We are a great nation and I think American people deserve good healthcare. If I become president, I will give every American access to free healthcare. TommyCare, I will name it, ha ha ha. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20778,
        "fields": {
            "question": 1051,
            "description": "Greg, don't plan too much, it may not come out right! I just have to remind people that I am the only alternative to the Republicans and Democrats. You know better, Americans, right? If you want change, vote for Tommy."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20791,
        "fields": {
            "question": 1055,
            "description": "If a lot of people love each other, the world would be a better place to live. I think immigration is great, and If I am elected president, I will make it easier to legally come into our country."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20797,
        "fields": {
            "question": 1055,
            "description": "I think, you know, that we need to protect our borders, but not be too radical. I guess this failed bipartisan Border Security Bill was a good compromise."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20805,
        "fields": {
            "question": 1055,
            "description": "I don't want to talk about it. Don't even ask."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20810,
        "fields": {
            "question": 1055,
            "description": "Immigration is very bad, you know, we need to secure border. If I am elected president, there will be no more illegal border crossing, okay?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20855,
        "fields": {
            "question": 1065,
            "description": "Let's call Mike Pence. He is conflicted with Trump. We might have to be a little more conservative, but it might be worth it, okay?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20866,
        "fields": {
            "question": 1065,
            "description": "Let's call Bernie Sanders. He's a democrat, but he might endorse me, you know?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20882,
        "fields": {
            "question": 1065,
            "description": "Kennedy. Thats very American name. Let's call RFK Jr. and promise him a role in my cabinet or something."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20896,
        "fields": {
            "question": 1059,
            "description": "I don't want to talk about this. Don't even ask. Let's focus on me."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20897,
        "fields": {
            "question": 1057,
            "description": "Greg, you have to be the best. You have to be the best you can be. Attack them both."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20901,
        "fields": {
            "question": 1059,
            "description": "Biden? The worst president in American history, ha ha ha. How could you vote for Harris after four years of Biden?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20910,
        "fields": {
            "question": 1059,
            "description": "Biden? I love president Biden, as a person, as a human being. He is a great American. It's very sad that Democrats betrayed him. If I am elected, I will put his ideas into practice."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20922,
        "fields": {
            "question": 1057,
            "description": "Greg, attack JD Vance, okay? We need to defeat Trump if we want to win."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20928,
        "fields": {
            "question": 1057,
            "description": "Greg, attack Tim Walz, okay? We need to convince some Trump supporters to our cause."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20934,
        "fields": {
            "question": 1057,
            "description": "Walz and Vance will attack you, you know? Don't pay attention to them and talk about our politics."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20941,
        "fields": {
            "question": 20940,
            "description": "We in America, we have the best society, it is equal for everyone. I want us to be even more equal."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20942,
        "fields": {
            "question": 20940,
            "description": "We are multiculture and that is why we are so strong as a country and we forget about it. Immigration is good. Thats what I love about San Francisco."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20943,
        "fields": {
            "question": 20940,
            "description": "In America you shouldn't have 20 or 100 different papers to sign before you open your small business. You should have only one piece of paper to sing. You open business, you pay your small taxes, whatewer you do and be honest and create a better tomorrow."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20944,
        "fields": {
            "question": 20940,
            "description": "We have a beautiful country form east to west, from north to south. We have beaches, you can discover all stuff by traveling. America is the best. I am the candidate which puts America first."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20956,
        "fields": {
            "question": 20955,
            "description": "Let's go to Southeast. We need to win Florida."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20957,
        "fields": {
            "question": 20955,
            "description": "Let's go to Midwest. Maybe we can win Illinois or Ohio?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20958,
        "fields": {
            "question": 20955,
            "description": "Let's go to Northeast. We need New York."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20959,
        "fields": {
            "question": 20955,
            "description": "We are not going anywhere. Let's stay in San Francisco, we need California."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20981,
        "fields": {
            "question": 20980,
            "description": "I don' need any celebrities. I should remeber that we and Greg are actors. Let's do a scene with Greg on my rally in San Francisco. I will play “The Lightning Rod Man.” He will play... this other man. With a Z."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20985,
        "fields": {
            "question": 20980,
            "description": "Let's call Hulk Hogan. Tough guy, real American. He needs to tell people that I am tough too."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20988,
        "fields": {
            "question": 20980,
            "description": "Let's call Taylor Swift. She's very popular and she sing a lot of about love. I always said that people need to love each other."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20990,
        "fields": {
            "question": 20980,
            "description": "I don't need any of this Greg, okay? If some people think that I am not serious, I need to act more serious."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20996,
        "fields": {
            "question": 20995,
            "description": "I don't need to say anything about this. As a director, it's my job to provoke, and when people decided 'The Room' be called a phenomenon, or whatever you call it, it's fine with me. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20997,
        "fields": {
            "question": 20995,
            "description": "Let Greg give a moving interview in which he tells how great an achievement it was for us to make this film and how many sacrifices it cost us."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20999,
        "fields": {
            "question": 20995,
            "description": "Haters are trying to silence me! I bet Trump and Harris are coordinating this hate campaign together, that's what I am thinking, you know?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21003,
        "fields": {
            "question": 21002,
            "description": "Greg should meet with Polish Americans. We can try win states like Michigan and Wisconsin."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21008,
        "fields": {
            "question": 21002,
            "description": "Greg should meet with Italian Americans. Maybe we can win states like New York and New Jersey?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21014,
        "fields": {
            "question": 21002,
            "description": "Greg should meet with Hispanic Community. We need California and Texas. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21021,
        "fields": {
            "question": 21020,
            "description": "Honestly, I don't know, okay? Maybe I can just say that under my presidency everyone could become rich, like I did. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21024,
        "fields": {
            "question": 21020,
            "description": "I am not only an actor, I am also businessman. We need more people to open their businesses. I mean, we need more tax cuts."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21026,
        "fields": {
            "question": 21020,
            "description": "I am rich, but I think we need to raise taxes for wealthiest americans, right? It would be more fair."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21028,
        "fields": {
            "question": 21020,
            "description": "I have my plan for the economy, a very good plan. It's different from Harris and Trump's plan, because only I care about the interests of the people, they care about the interests of their political parties. I will show you this plan soon, okay?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21031,
        "fields": {
            "question": 1046,
            "description": "Maybe I wasn't born in America, but even if I wasn't, I am still the best candidate."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21063,
        "fields": {
            "question": 21002,
            "description": "Greg should visit some states with high percentage of black Americans. It would be good to win in Mississippi and Georgia."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21068,
        "fields": {
            "question": 21062,
            "description": "You know, when I become the president, I guess I will have to work with some Democrats and Republicans. If they love our country, they will work with me. Greg says that we will need \"bipartisanship\"."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21071,
        "fields": {
            "question": 21062,
            "description": "Republicans and Democrats betrayed Americans, they didn’t keep their promise and I don’t care anymore. I don't need them. I will create my own party, Tommy's Party, ha ha ha, and we will win in midterm elections."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21075,
        "fields": {
            "question": 21062,
            "description": "Well, I think I will reach out to Republican Party, okay? If I need to be more conservative to run this country, it's fine."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21082,
        "fields": {
            "question": 21062,
            "description": "Well, I think I will reach out to Democratic Party, okay? Maybe I will need to be more liberal, but I will need to run this country."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21118,
        "fields": {
            "question": 21117,
            "description": "In a few minutes, bitch."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21123,
        "fields": {
            "question": 21117,
            "description": "Birth certificate? What’s that? Man, come on! *Push him jokingly*."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21135,
        "fields": {
            "question": 21134,
            "description": "Yeah, of course! I mean, let's talk more about The Room and how it was difficult for me to create this movie."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21138,
        "fields": {
            "question": 21134,
            "description": "When I was younger I created this business called \"Street Fashion USA\" and I worked hard to achieve succes, you know? Let's talk about how in America everything is possible! "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21141,
        "fields": {
            "question": 21134,
            "description": "Why talk about me? What about Harris and Trump, huh? Trump is a billionaire and Harris is rich too. They are being out of touch, not me."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21147,
        "fields": {
            "question": 21134,
            "description": "They are already saying that I lie about my birthplace, okay? I don't need this. I don't want to talk about it. Everything will be fine."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21179,
        "fields": {
            "question": 21178,
            "description": "I was born not only in America, I was born on planet Earth. Climate change is bad for America, bad for world, you know, and we need to trust sciencist!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21180,
        "fields": {
            "question": 20995,
            "description": "If anyone has reason to be upset, quite\nfrankly it’s me, you know. I gave my actors\njobs. I gave them salary. I’ve spent more\nthan five million dollars on this movie because I cared about it!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21193,
        "fields": {
            "question": 21178,
            "description": "Climate change? More like climate hoax, ha ha ha. Climate was always naturally changing. That's life."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21205,
        "fields": {
            "question": 21178,
            "description": "I guess that we need, you know, fund research into renewable energy sources. But I think it's also important to not implement too many regulations, okay? "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21220,
        "fields": {
            "question": 21178,
            "description": "When I think about climate change, I think CHANGE is most important. Vote for me, vote for change and everything will be fine."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21299,
        "fields": {
            "question": 21296,
            "description": "I guess, you know, I need to reassure Americans that I will maintain US commitment to NATO. Also, that jerk Putin. He wants me to give him Ukraine. Who does he think he is?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21305,
        "fields": {
            "question": 21296,
            "description": "This prick Xi Jinping is the biggest asshole motherfucker piece of shit that ever lived. He think he can stop America? I'm sorry Mr. Winnie Pooh, you don't have chance. We are the best country in the world."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21311,
        "fields": {
            "question": 21296,
            "description": "As a president, I will stand proudly with Israel. Israel is, you know, our great ally and we will help it fight with terrorism."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21321,
        "fields": {
            "question": 21296,
            "description": "When I am elected president, I will immediately stop whatever Israel is doing, okay? I will save Palestine."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21348,
        "fields": {
            "question": 21347,
            "description": "I wasn't born in Europe! It’s not true! It’s bullshit! I wasn't born in Europe! I was not!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21354,
        "fields": {
            "question": 21353,
            "description": "People are fed up. Republicans and Democrats, what's the difference? They called me crazy, they called me a joke, they called me a liar. That's why on November 5 we will all show them that we want change, huh?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21360,
        "fields": {
            "question": 21353,
            "description": "You can love someone deep inside your heart, and there is nothing wrong with it. If you want an America where everyone can be themselves, where, you know, minorities are protected, where everyone is equal, vote for me on November 5."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21376,
        "fields": {
            "question": 21353,
            "description": "If you want an America where traditional values are promoted, where you have the right to own guns, where, you know, freedom is valued, vote for me on November 5."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21393,
        "fields": {
            "question": 21392,
            "description": "Florida."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21395,
        "fields": {
            "question": 21392,
            "description": "California."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21397,
        "fields": {
            "question": 21392,
            "description": "Texas."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21399,
        "fields": {
            "question": 21392,
            "description": "Pennsylvania."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21415,
        "fields": {
            "question": 21117,
            "description": "How dare you talk to me like that?! I am going home. I am going to take a nap."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21418,
        "fields": {
            "question": 21117,
            "description": "You're lying, I was born in USA! You are tearing me apart, Donald!"
        }
    }
]

campaignTrail_temp.states_json = [
    {
        "model": "campaign_trail.state",
        "pk": 1000,
        "fields": {
            "name": "Alabama",
            "abbr": "AL",
            "electoral_votes": 9,
            "popular_votes": 2123372,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1001,
        "fields": {
            "name": "Alaska",
            "abbr": "AK",
            "electoral_votes": 3,
            "popular_votes": 318608,
            "poll_closing_time": 420,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1002,
        "fields": {
            "name": "Arizona",
            "abbr": "AZ",
            "electoral_votes": 11,
            "popular_votes": 2604657,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1003,
        "fields": {
            "name": "Arkansas",
            "abbr": "AR",
            "electoral_votes": 6,
            "popular_votes": 1130635,
            "poll_closing_time": 150,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1004,
        "fields": {
            "name": "California",
            "abbr": "CA",
            "electoral_votes": 55,
            "popular_votes": 14237893,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1005,
        "fields": {
            "name": "Colorado",
            "abbr": "CO",
            "electoral_votes": 9,
            "popular_votes": 2780247,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1006,
        "fields": {
            "name": "Connecticut",
            "abbr": "CT",
            "electoral_votes": 7,
            "popular_votes": 1644920,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1007,
        "fields": {
            "name": "Delaware",
            "abbr": "DE",
            "electoral_votes": 3,
            "popular_votes": 443814,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1008,
        "fields": {
            "name": "Florida",
            "abbr": "FL",
            "electoral_votes": 29,
            "popular_votes": 9502747,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1009,
        "fields": {
            "name": "Georgia",
            "abbr": "GA",
            "electoral_votes": 16,
            "popular_votes": 4141447,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1010,
        "fields": {
            "name": "Hawaii",
            "abbr": "HI",
            "electoral_votes": 4,
            "popular_votes": 428937,
            "poll_closing_time": 360,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1011,
        "fields": {
            "name": "Idaho",
            "abbr": "ID",
            "electoral_votes": 4,
            "popular_votes": 690433,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1012,
        "fields": {
            "name": "Illinois",
            "abbr": "IL",
            "electoral_votes": 20,
            "popular_votes": 5594825,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1013,
        "fields": {
            "name": "Indiana",
            "abbr": "IN",
            "electoral_votes": 11,
            "popular_votes": 2757965,
            "poll_closing_time": 0,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1014,
        "fields": {
            "name": "Iowa",
            "abbr": "IA",
            "electoral_votes": 6,
            "popular_votes": 1566031,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1015,
        "fields": {
            "name": "Kansas",
            "abbr": "KS",
            "electoral_votes": 6,
            "popular_votes": 1194755,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1016,
        "fields": {
            "name": "Kentucky",
            "abbr": "KY",
            "electoral_votes": 8,
            "popular_votes": 1924150,
            "poll_closing_time": 0,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1017,
        "fields": {
            "name": "Louisiana",
            "abbr": "LA",
            "electoral_votes": 8,
            "popular_votes": 2029032,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1018,
        "fields": {
            "name": "Maine",
            "abbr": "ME",
            "electoral_votes": 4,
            "popular_votes": 747927,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1019,
        "fields": {
            "name": "Maryland",
            "abbr": "MD",
            "electoral_votes": 10,
            "popular_votes": 2781446,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1020,
        "fields": {
            "name": "Massachusetts",
            "abbr": "MA",
            "electoral_votes": 11,
            "popular_votes": 3325046,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1021,
        "fields": {
            "name": "Michigan",
            "abbr": "MI",
            "electoral_votes": 16,
            "popular_votes": 4824542,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1022,
        "fields": {
            "name": "Minnesota",
            "abbr": "MN",
            "electoral_votes": 10,
            "popular_votes": 2945233,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1023,
        "fields": {
            "name": "Mississippi",
            "abbr": "MS",
            "electoral_votes": 6,
            "popular_votes": 1211088,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1024,
        "fields": {
            "name": "Missouri",
            "abbr": "MO",
            "electoral_votes": 10,
            "popular_votes": 2828266,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1025,
        "fields": {
            "name": "Montana",
            "abbr": "MT",
            "electoral_votes": 3,
            "popular_votes": 501822,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1026,
        "fields": {
            "name": "Nebraska",
            "abbr": "NE",
            "electoral_votes": 5,
            "popular_votes": 844227,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1027,
        "fields": {
            "name": "Nevada",
            "abbr": "NV",
            "electoral_votes": 6,
            "popular_votes": 1125385,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1028,
        "fields": {
            "name": "New Hampshire",
            "abbr": "NH",
            "electoral_votes": 4,
            "popular_votes": 744296,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1029,
        "fields": {
            "name": "New Jersey",
            "abbr": "NJ",
            "electoral_votes": 14,
            "popular_votes": 3906723,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1030,
        "fields": {
            "name": "New Mexico",
            "abbr": "NM",
            "electoral_votes": 5,
            "popular_votes": 798319,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1031,
        "fields": {
            "name": "New York",
            "abbr": "NY",
            "electoral_votes": 29,
            "popular_votes": 7721795,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1032,
        "fields": {
            "name": "North Carolina",
            "abbr": "NC",
            "electoral_votes": 15,
            "popular_votes": 4741564,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1033,
        "fields": {
            "name": "North Dakota",
            "abbr": "ND",
            "electoral_votes": 3,
            "popular_votes": 344360,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1034,
        "fields": {
            "name": "Ohio",
            "abbr": "OH",
            "electoral_votes": 18,
            "popular_votes": 5536547,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1035,
        "fields": {
            "name": "Oklahoma",
            "abbr": "OK",
            "electoral_votes": 7,
            "popular_votes": 1452992,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1036,
        "fields": {
            "name": "Oregon",
            "abbr": "OR",
            "electoral_votes": 7,
            "popular_votes": 2001336,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1037,
        "fields": {
            "name": "Pennsylvania",
            "abbr": "PA",
            "electoral_votes": 20,
            "popular_votes": 6166729,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1038,
        "fields": {
            "name": "Rhode Island",
            "abbr": "RI",
            "electoral_votes": 4,
            "popular_votes": 464144,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1039,
        "fields": {
            "name": "South Carolina",
            "abbr": "SC",
            "electoral_votes": 9,
            "popular_votes": 2103027,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1040,
        "fields": {
            "name": "South Dakota",
            "abbr": "SD",
            "electoral_votes": 3,
            "popular_votes": 370093,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1041,
        "fields": {
            "name": "Tennessee",
            "abbr": "TN",
            "electoral_votes": 11,
            "popular_votes": 2508027,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1042,
        "fields": {
            "name": "Texas",
            "abbr": "TX",
            "electoral_votes": 38,
            "popular_votes": 8993166,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1043,
        "fields": {
            "name": "Utah",
            "abbr": "UT",
            "electoral_votes": 6,
            "popular_votes": 1143601,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1044,
        "fields": {
            "name": "Vermont",
            "abbr": "VT",
            "electoral_votes": 3,
            "popular_votes": 315067,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1045,
        "fields": {
            "name": "Virginia",
            "abbr": "VA",
            "electoral_votes": 13,
            "popular_votes": 3982752,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1046,
        "fields": {
            "name": "Washington",
            "abbr": "WA",
            "electoral_votes": 12,
            "popular_votes": 3316996,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1047,
        "fields": {
            "name": "Washington DC",
            "abbr": "DC",
            "electoral_votes": 3,
            "popular_votes": 311268,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1048,
        "fields": {
            "name": "West Virginia",
            "abbr": "WV",
            "electoral_votes": 5,
            "popular_votes": 721233,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1049,
        "fields": {
            "name": "Wisconsin",
            "abbr": "WI",
            "electoral_votes": 10,
            "popular_votes": 2976150,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1050,
        "fields": {
            "name": "Wyoming",
            "abbr": "WY",
            "electoral_votes": 3,
            "popular_votes": 255849,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    }
]

campaignTrail_temp.issues_json = [
    {
        "model": "campaign_trail.issue",
        "pk": 100,
        "fields": {
            "name": "Ideology",
            "description": 0,
            "stance_1": "Very Conservative",
            "stance_desc_1": 0,
            "stance_2": "Conservative",
            "stance_desc_2": 0,
            "stance_3": "Leans Conservative",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Leans Liberal",
            "stance_desc_5": 0,
            "stance_6": "Liberal",
            "stance_desc_6": 0,
            "stance_7": "Very Liberal",
            "stance_desc_7": 0,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 101,
        "fields": {
            "name": "Tired of establishment",
            "description": 0,
            "stance_1": "Not really",
            "stance_desc_1": 0,
            "stance_2": "Not really",
            "stance_desc_2": 0,
            "stance_3": "A little",
            "stance_desc_3": 0,
            "stance_4": "A little",
            "stance_desc_4": 0,
            "stance_5": "A little",
            "stance_desc_5": 0,
            "stance_6": "Very ",
            "stance_desc_6": 0,
            "stance_7": "Very ",
            "stance_desc_7": 0,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 102,
        "fields": {
            "name": "Foreign Policy",
            "description": 0,
            "stance_1": "Aggressive",
            "stance_desc_1": 0,
            "stance_2": "Aggressive",
            "stance_desc_2": 0,
            "stance_3": "Moderate",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Moderate",
            "stance_desc_5": 0,
            "stance_6": "Non-Interventionist",
            "stance_desc_6": 0,
            "stance_7": "Non-Interventionist",
            "stance_desc_7": 0,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 103,
        "fields": {
            "name": "Social Issues",
            "description": 0,
            "stance_1": "Very Conservative",
            "stance_desc_1": 0,
            "stance_2": "Conservative",
            "stance_desc_2": 0,
            "stance_3": "Leans Conservative",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Leans Liberal",
            "stance_desc_5": 0,
            "stance_6": "Liberal",
            "stance_desc_6": 0,
            "stance_7": "Very Liberal",
            "stance_desc_7": 0,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 104,
        "fields": {
            "name": "Immigration",
            "description": 0,
            "stance_1": "Very Conservative",
            "stance_desc_1": 0,
            "stance_2": "Conservative",
            "stance_desc_2": 0,
            "stance_3": "Leans Conservative",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Leans Liberal",
            "stance_desc_5": 0,
            "stance_6": "Liberal",
            "stance_desc_6": 0,
            "stance_7": "Very Liberal",
            "stance_desc_7": 0,
            "election": 20
        }
    }
]

campaignTrail_temp.state_issue_score_json = [
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3000,
        "fields": {
            "state": 1000,
            "issue": 100,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3001,
        "fields": {
            "state": 1000,
            "issue": 101,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3002,
        "fields": {
            "state": 1000,
            "issue": 102,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3003,
        "fields": {
            "state": 1000,
            "issue": 103,
            "state_issue_score": -0.65,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3004,
        "fields": {
            "state": 1000,
            "issue": 104,
            "state_issue_score": -0.55,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3005,
        "fields": {
            "state": 1001,
            "issue": 100,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3006,
        "fields": {
            "state": 1001,
            "issue": 101,
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3007,
        "fields": {
            "state": 1001,
            "issue": 102,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3008,
        "fields": {
            "state": 1001,
            "issue": 103,
            "state_issue_score": 0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3009,
        "fields": {
            "state": 1001,
            "issue": 104,
            "state_issue_score": -0.05,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3010,
        "fields": {
            "state": 1002,
            "issue": 100,
            "state_issue_score": -0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3011,
        "fields": {
            "state": 1002,
            "issue": 101,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3012,
        "fields": {
            "state": 1002,
            "issue": 102,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3013,
        "fields": {
            "state": 1002,
            "issue": 103,
            "state_issue_score": 0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3014,
        "fields": {
            "state": 1002,
            "issue": 104,
            "state_issue_score": 0.2,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3015,
        "fields": {
            "state": 1003,
            "issue": 100,
            "state_issue_score": -0.75,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3016,
        "fields": {
            "state": 1003,
            "issue": 101,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3017,
        "fields": {
            "state": 1003,
            "issue": 102,
            "state_issue_score": -0.35,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3018,
        "fields": {
            "state": 1003,
            "issue": 103,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3019,
        "fields": {
            "state": 1003,
            "issue": 104,
            "state_issue_score": -0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3020,
        "fields": {
            "state": 1004,
            "issue": 100,
            "state_issue_score": 0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3021,
        "fields": {
            "state": 1004,
            "issue": 101,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3022,
        "fields": {
            "state": 1004,
            "issue": 102,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3023,
        "fields": {
            "state": 1004,
            "issue": 103,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3024,
        "fields": {
            "state": 1004,
            "issue": 104,
            "state_issue_score": 0.55,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3025,
        "fields": {
            "state": 1005,
            "issue": 100,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3026,
        "fields": {
            "state": 1005,
            "issue": 101,
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3027,
        "fields": {
            "state": 1005,
            "issue": 102,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3028,
        "fields": {
            "state": 1005,
            "issue": 103,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3029,
        "fields": {
            "state": 1005,
            "issue": 104,
            "state_issue_score": 0.35,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3030,
        "fields": {
            "state": 1006,
            "issue": 100,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3031,
        "fields": {
            "state": 1006,
            "issue": 101,
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3032,
        "fields": {
            "state": 1006,
            "issue": 102,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3033,
        "fields": {
            "state": 1006,
            "issue": 103,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3034,
        "fields": {
            "state": 1006,
            "issue": 104,
            "state_issue_score": 0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3035,
        "fields": {
            "state": 1007,
            "issue": 100,
            "state_issue_score": 0.375,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3036,
        "fields": {
            "state": 1007,
            "issue": 101,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3037,
        "fields": {
            "state": 1007,
            "issue": 102,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3038,
        "fields": {
            "state": 1007,
            "issue": 103,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3039,
        "fields": {
            "state": 1007,
            "issue": 104,
            "state_issue_score": 0.45,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3040,
        "fields": {
            "state": 1008,
            "issue": 100,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3041,
        "fields": {
            "state": 1008,
            "issue": 101,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3042,
        "fields": {
            "state": 1008,
            "issue": 102,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3043,
        "fields": {
            "state": 1008,
            "issue": 103,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3044,
        "fields": {
            "state": 1008,
            "issue": 104,
            "state_issue_score": 0.1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3045,
        "fields": {
            "state": 1009,
            "issue": 100,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3046,
        "fields": {
            "state": 1009,
            "issue": 101,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3047,
        "fields": {
            "state": 1009,
            "issue": 102,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3048,
        "fields": {
            "state": 1009,
            "issue": 103,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3049,
        "fields": {
            "state": 1009,
            "issue": 104,
            "state_issue_score": 0.1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3050,
        "fields": {
            "state": 1010,
            "issue": 100,
            "state_issue_score": 0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3051,
        "fields": {
            "state": 1010,
            "issue": 101,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3052,
        "fields": {
            "state": 1010,
            "issue": 102,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3053,
        "fields": {
            "state": 1010,
            "issue": 103,
            "state_issue_score": 0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3054,
        "fields": {
            "state": 1010,
            "issue": 104,
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3055,
        "fields": {
            "state": 1011,
            "issue": 100,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3056,
        "fields": {
            "state": 1011,
            "issue": 101,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3057,
        "fields": {
            "state": 1011,
            "issue": 102,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3058,
        "fields": {
            "state": 1011,
            "issue": 103,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3059,
        "fields": {
            "state": 1011,
            "issue": 104,
            "state_issue_score": -0.1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3060,
        "fields": {
            "state": 1012,
            "issue": 100,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3061,
        "fields": {
            "state": 1012,
            "issue": 101,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3062,
        "fields": {
            "state": 1012,
            "issue": 102,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3063,
        "fields": {
            "state": 1012,
            "issue": 103,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3064,
        "fields": {
            "state": 1012,
            "issue": 104,
            "state_issue_score": 0.1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3065,
        "fields": {
            "state": 1013,
            "issue": 100,
            "state_issue_score": -0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3066,
        "fields": {
            "state": 1013,
            "issue": 101,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3067,
        "fields": {
            "state": 1013,
            "issue": 102,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3068,
        "fields": {
            "state": 1013,
            "issue": 103,
            "state_issue_score": -0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3069,
        "fields": {
            "state": 1013,
            "issue": 104,
            "state_issue_score": -0.33,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3070,
        "fields": {
            "state": 1014,
            "issue": 100,
            "state_issue_score": -0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3071,
        "fields": {
            "state": 1014,
            "issue": 101,
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3072,
        "fields": {
            "state": 1014,
            "issue": 102,
            "state_issue_score": -0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3073,
        "fields": {
            "state": 1014,
            "issue": 103,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3074,
        "fields": {
            "state": 1014,
            "issue": 104,
            "state_issue_score": -0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3075,
        "fields": {
            "state": 1015,
            "issue": 100,
            "state_issue_score": -0.65,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3076,
        "fields": {
            "state": 1015,
            "issue": 101,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3077,
        "fields": {
            "state": 1015,
            "issue": 102,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3078,
        "fields": {
            "state": 1015,
            "issue": 103,
            "state_issue_score": -0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3079,
        "fields": {
            "state": 1015,
            "issue": 104,
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3080,
        "fields": {
            "state": 1016,
            "issue": 100,
            "state_issue_score": -0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3081,
        "fields": {
            "state": 1016,
            "issue": 101,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3082,
        "fields": {
            "state": 1016,
            "issue": 102,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3083,
        "fields": {
            "state": 1016,
            "issue": 103,
            "state_issue_score": -0.35,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3084,
        "fields": {
            "state": 1016,
            "issue": 104,
            "state_issue_score": -0.45,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3085,
        "fields": {
            "state": 1017,
            "issue": 100,
            "state_issue_score": -0.675,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3086,
        "fields": {
            "state": 1017,
            "issue": 101,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3087,
        "fields": {
            "state": 1017,
            "issue": 102,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3088,
        "fields": {
            "state": 1017,
            "issue": 103,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3089,
        "fields": {
            "state": 1017,
            "issue": 104,
            "state_issue_score": -0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3090,
        "fields": {
            "state": 1018,
            "issue": 100,
            "state_issue_score": 0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3091,
        "fields": {
            "state": 1018,
            "issue": 101,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3092,
        "fields": {
            "state": 1018,
            "issue": 102,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3093,
        "fields": {
            "state": 1018,
            "issue": 103,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3094,
        "fields": {
            "state": 1018,
            "issue": 104,
            "state_issue_score": -0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3095,
        "fields": {
            "state": 1019,
            "issue": 100,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3096,
        "fields": {
            "state": 1019,
            "issue": 101,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3097,
        "fields": {
            "state": 1019,
            "issue": 102,
            "state_issue_score": 0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3098,
        "fields": {
            "state": 1019,
            "issue": 103,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3099,
        "fields": {
            "state": 1019,
            "issue": 104,
            "state_issue_score": 0.1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3100,
        "fields": {
            "state": 1020,
            "issue": 100,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3101,
        "fields": {
            "state": 1020,
            "issue": 101,
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3102,
        "fields": {
            "state": 1020,
            "issue": 102,
            "state_issue_score": 0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3103,
        "fields": {
            "state": 1020,
            "issue": 103,
            "state_issue_score": 0.65,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3104,
        "fields": {
            "state": 1020,
            "issue": 104,
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3105,
        "fields": {
            "state": 1021,
            "issue": 100,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3106,
        "fields": {
            "state": 1021,
            "issue": 101,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3107,
        "fields": {
            "state": 1021,
            "issue": 102,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3108,
        "fields": {
            "state": 1021,
            "issue": 103,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3109,
        "fields": {
            "state": 1021,
            "issue": 104,
            "state_issue_score": -0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3110,
        "fields": {
            "state": 1022,
            "issue": 100,
            "state_issue_score": 0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3111,
        "fields": {
            "state": 1022,
            "issue": 101,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3112,
        "fields": {
            "state": 1022,
            "issue": 102,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3113,
        "fields": {
            "state": 1022,
            "issue": 103,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3114,
        "fields": {
            "state": 1022,
            "issue": 104,
            "state_issue_score": -0.25,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3115,
        "fields": {
            "state": 1023,
            "issue": 100,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3116,
        "fields": {
            "state": 1023,
            "issue": 101,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3117,
        "fields": {
            "state": 1023,
            "issue": 102,
            "state_issue_score": -0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3118,
        "fields": {
            "state": 1023,
            "issue": 103,
            "state_issue_score": -0.65,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3119,
        "fields": {
            "state": 1023,
            "issue": 104,
            "state_issue_score": -0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3120,
        "fields": {
            "state": 1024,
            "issue": 100,
            "state_issue_score": -0.65,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3121,
        "fields": {
            "state": 1024,
            "issue": 101,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3122,
        "fields": {
            "state": 1024,
            "issue": 102,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3123,
        "fields": {
            "state": 1024,
            "issue": 103,
            "state_issue_score": -0.05,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3124,
        "fields": {
            "state": 1024,
            "issue": 104,
            "state_issue_score": -0.25,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3125,
        "fields": {
            "state": 1025,
            "issue": 100,
            "state_issue_score": -0.75,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3126,
        "fields": {
            "state": 1025,
            "issue": 101,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3127,
        "fields": {
            "state": 1025,
            "issue": 102,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3128,
        "fields": {
            "state": 1025,
            "issue": 103,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3129,
        "fields": {
            "state": 1025,
            "issue": 104,
            "state_issue_score": -0.2,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3130,
        "fields": {
            "state": 1026,
            "issue": 100,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3131,
        "fields": {
            "state": 1026,
            "issue": 101,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3132,
        "fields": {
            "state": 1026,
            "issue": 102,
            "state_issue_score": -0.35,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3133,
        "fields": {
            "state": 1026,
            "issue": 103,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3134,
        "fields": {
            "state": 1026,
            "issue": 104,
            "state_issue_score": -0.25,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3135,
        "fields": {
            "state": 1027,
            "issue": 100,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3136,
        "fields": {
            "state": 1027,
            "issue": 101,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3137,
        "fields": {
            "state": 1027,
            "issue": 102,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3138,
        "fields": {
            "state": 1027,
            "issue": 103,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3139,
        "fields": {
            "state": 1027,
            "issue": 104,
            "state_issue_score": 0.05,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3140,
        "fields": {
            "state": 1028,
            "issue": 100,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3141,
        "fields": {
            "state": 1028,
            "issue": 101,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3142,
        "fields": {
            "state": 1028,
            "issue": 102,
            "state_issue_score": 0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3143,
        "fields": {
            "state": 1028,
            "issue": 103,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3144,
        "fields": {
            "state": 1028,
            "issue": 104,
            "state_issue_score": -0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3145,
        "fields": {
            "state": 1029,
            "issue": 100,
            "state_issue_score": 0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3146,
        "fields": {
            "state": 1029,
            "issue": 101,
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3147,
        "fields": {
            "state": 1029,
            "issue": 102,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3148,
        "fields": {
            "state": 1029,
            "issue": 103,
            "state_issue_score": 0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3149,
        "fields": {
            "state": 1029,
            "issue": 104,
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3150,
        "fields": {
            "state": 1030,
            "issue": 100,
            "state_issue_score": 0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3151,
        "fields": {
            "state": 1030,
            "issue": 101,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3152,
        "fields": {
            "state": 1030,
            "issue": 102,
            "state_issue_score": 0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3153,
        "fields": {
            "state": 1030,
            "issue": 103,
            "state_issue_score": 0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3154,
        "fields": {
            "state": 1030,
            "issue": 104,
            "state_issue_score": 0.33,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3155,
        "fields": {
            "state": 1031,
            "issue": 100,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3156,
        "fields": {
            "state": 1031,
            "issue": 101,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3157,
        "fields": {
            "state": 1031,
            "issue": 102,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3158,
        "fields": {
            "state": 1031,
            "issue": 103,
            "state_issue_score": 0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3159,
        "fields": {
            "state": 1031,
            "issue": 104,
            "state_issue_score": 0.575,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3160,
        "fields": {
            "state": 1032,
            "issue": 100,
            "state_issue_score": -0.375,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3161,
        "fields": {
            "state": 1032,
            "issue": 101,
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3162,
        "fields": {
            "state": 1032,
            "issue": 102,
            "state_issue_score": -0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3163,
        "fields": {
            "state": 1032,
            "issue": 103,
            "state_issue_score": -0.05,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3164,
        "fields": {
            "state": 1032,
            "issue": 104,
            "state_issue_score": -0.1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3165,
        "fields": {
            "state": 1033,
            "issue": 100,
            "state_issue_score": -0.475,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3166,
        "fields": {
            "state": 1033,
            "issue": 101,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3167,
        "fields": {
            "state": 1033,
            "issue": 102,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3168,
        "fields": {
            "state": 1033,
            "issue": 103,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3169,
        "fields": {
            "state": 1033,
            "issue": 104,
            "state_issue_score": -0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3170,
        "fields": {
            "state": 1034,
            "issue": 100,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3171,
        "fields": {
            "state": 1034,
            "issue": 101,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3172,
        "fields": {
            "state": 1034,
            "issue": 102,
            "state_issue_score": -0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3173,
        "fields": {
            "state": 1034,
            "issue": 103,
            "state_issue_score": -0.05,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3174,
        "fields": {
            "state": 1034,
            "issue": 104,
            "state_issue_score": -0.25,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3175,
        "fields": {
            "state": 1035,
            "issue": 100,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3176,
        "fields": {
            "state": 1035,
            "issue": 101,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3177,
        "fields": {
            "state": 1035,
            "issue": 102,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3178,
        "fields": {
            "state": 1035,
            "issue": 103,
            "state_issue_score": -0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3179,
        "fields": {
            "state": 1035,
            "issue": 104,
            "state_issue_score": -0.1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3180,
        "fields": {
            "state": 1036,
            "issue": 100,
            "state_issue_score": 0.35,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3181,
        "fields": {
            "state": 1036,
            "issue": 101,
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3182,
        "fields": {
            "state": 1036,
            "issue": 102,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3183,
        "fields": {
            "state": 1036,
            "issue": 103,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3184,
        "fields": {
            "state": 1036,
            "issue": 104,
            "state_issue_score": 0.45,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3185,
        "fields": {
            "state": 1037,
            "issue": 100,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3186,
        "fields": {
            "state": 1037,
            "issue": 101,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3187,
        "fields": {
            "state": 1037,
            "issue": 102,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3188,
        "fields": {
            "state": 1037,
            "issue": 103,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3189,
        "fields": {
            "state": 1037,
            "issue": 104,
            "state_issue_score": -0.15,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3190,
        "fields": {
            "state": 1038,
            "issue": 100,
            "state_issue_score": 0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3191,
        "fields": {
            "state": 1038,
            "issue": 101,
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3192,
        "fields": {
            "state": 1038,
            "issue": 102,
            "state_issue_score": 0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3193,
        "fields": {
            "state": 1038,
            "issue": 103,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3194,
        "fields": {
            "state": 1038,
            "issue": 104,
            "state_issue_score": 0.55,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3195,
        "fields": {
            "state": 1039,
            "issue": 100,
            "state_issue_score": -0.575,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3196,
        "fields": {
            "state": 1039,
            "issue": 101,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3197,
        "fields": {
            "state": 1039,
            "issue": 102,
            "state_issue_score": -0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3198,
        "fields": {
            "state": 1039,
            "issue": 103,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3199,
        "fields": {
            "state": 1039,
            "issue": 104,
            "state_issue_score": -0.375,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3200,
        "fields": {
            "state": 1040,
            "issue": 100,
            "state_issue_score": -0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3201,
        "fields": {
            "state": 1040,
            "issue": 101,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3202,
        "fields": {
            "state": 1040,
            "issue": 102,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3203,
        "fields": {
            "state": 1040,
            "issue": 103,
            "state_issue_score": -0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3204,
        "fields": {
            "state": 1040,
            "issue": 104,
            "state_issue_score": -0.45,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3205,
        "fields": {
            "state": 1041,
            "issue": 100,
            "state_issue_score": -0.65,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3206,
        "fields": {
            "state": 1041,
            "issue": 101,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3207,
        "fields": {
            "state": 1041,
            "issue": 102,
            "state_issue_score": -0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3208,
        "fields": {
            "state": 1041,
            "issue": 103,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3209,
        "fields": {
            "state": 1041,
            "issue": 104,
            "state_issue_score": -0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3210,
        "fields": {
            "state": 1042,
            "issue": 100,
            "state_issue_score": -0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3211,
        "fields": {
            "state": 1042,
            "issue": 101,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3212,
        "fields": {
            "state": 1042,
            "issue": 102,
            "state_issue_score": -0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3213,
        "fields": {
            "state": 1042,
            "issue": 103,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3214,
        "fields": {
            "state": 1042,
            "issue": 104,
            "state_issue_score": 0.15,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3215,
        "fields": {
            "state": 1043,
            "issue": 100,
            "state_issue_score": -0.9,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3216,
        "fields": {
            "state": 1043,
            "issue": 101,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3217,
        "fields": {
            "state": 1043,
            "issue": 102,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3218,
        "fields": {
            "state": 1043,
            "issue": 103,
            "state_issue_score": -0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3219,
        "fields": {
            "state": 1043,
            "issue": 104,
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3220,
        "fields": {
            "state": 1044,
            "issue": 100,
            "state_issue_score": 0.75,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3221,
        "fields": {
            "state": 1044,
            "issue": 101,
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3222,
        "fields": {
            "state": 1044,
            "issue": 102,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3223,
        "fields": {
            "state": 1044,
            "issue": 103,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3224,
        "fields": {
            "state": 1044,
            "issue": 104,
            "state_issue_score": -0.05,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3225,
        "fields": {
            "state": 1045,
            "issue": 100,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3226,
        "fields": {
            "state": 1045,
            "issue": 101,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3227,
        "fields": {
            "state": 1045,
            "issue": 102,
            "state_issue_score": -0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3228,
        "fields": {
            "state": 1045,
            "issue": 103,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3229,
        "fields": {
            "state": 1045,
            "issue": 104,
            "state_issue_score": -0.05,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3230,
        "fields": {
            "state": 1046,
            "issue": 100,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3231,
        "fields": {
            "state": 1046,
            "issue": 101,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3232,
        "fields": {
            "state": 1046,
            "issue": 102,
            "state_issue_score": 0.35,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3233,
        "fields": {
            "state": 1046,
            "issue": 103,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3234,
        "fields": {
            "state": 1046,
            "issue": 104,
            "state_issue_score": 0.2,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3235,
        "fields": {
            "state": 1047,
            "issue": 100,
            "state_issue_score": 0.95,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3236,
        "fields": {
            "state": 1047,
            "issue": 101,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3237,
        "fields": {
            "state": 1047,
            "issue": 102,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3238,
        "fields": {
            "state": 1047,
            "issue": 103,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3239,
        "fields": {
            "state": 1047,
            "issue": 104,
            "state_issue_score": 0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3240,
        "fields": {
            "state": 1048,
            "issue": 100,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3241,
        "fields": {
            "state": 1048,
            "issue": 101,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3242,
        "fields": {
            "state": 1048,
            "issue": 102,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3243,
        "fields": {
            "state": 1048,
            "issue": 103,
            "state_issue_score": -0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3244,
        "fields": {
            "state": 1048,
            "issue": 104,
            "state_issue_score": -0.625,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3245,
        "fields": {
            "state": 1049,
            "issue": 100,
            "state_issue_score": -0.125,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3246,
        "fields": {
            "state": 1049,
            "issue": 101,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3247,
        "fields": {
            "state": 1049,
            "issue": 102,
            "state_issue_score": 0.05,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3248,
        "fields": {
            "state": 1049,
            "issue": 103,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3249,
        "fields": {
            "state": 1049,
            "issue": 104,
            "state_issue_score": -0.2,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3250,
        "fields": {
            "state": 1050,
            "issue": 100,
            "state_issue_score": -0.85,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3251,
        "fields": {
            "state": 1050,
            "issue": 101,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3252,
        "fields": {
            "state": 1050,
            "issue": 102,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3253,
        "fields": {
            "state": 1050,
            "issue": 103,
            "state_issue_score": -0.35,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3254,
        "fields": {
            "state": 1050,
            "issue": 104,
            "state_issue_score": -0.75,
            "weight": 1.5
        }
    }
]

campaignTrail_temp.candidate_issue_score_json = [
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1000,
        "fields": {
            "candidate": 200,
            "issue": 100,
            "issue_score": -0.4
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1001,
        "fields": {
            "candidate": 200,
            "issue": 101,
            "issue_score": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1002,
        "fields": {
            "candidate": 200,
            "issue": 102,
            "issue_score": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1003,
        "fields": {
            "candidate": 200,
            "issue": 103,
            "issue_score": -0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1004,
        "fields": {
            "candidate": 200,
            "issue": 104,
            "issue_score": -0.6
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1005,
        "fields": {
            "candidate": 201,
            "issue": 100,
            "issue_score": 0.35
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1006,
        "fields": {
            "candidate": 201,
            "issue": 101,
            "issue_score": -0.2
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1007,
        "fields": {
            "candidate": 201,
            "issue": 102,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1008,
        "fields": {
            "candidate": 201,
            "issue": 103,
            "issue_score": 0.55
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1009,
        "fields": {
            "candidate": 201,
            "issue": 104,
            "issue_score": 0.55
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1010,
        "fields": {
            "candidate": 202,
            "issue": 100,
            "issue_score": -0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1011,
        "fields": {
            "candidate": 202,
            "issue": 101,
            "issue_score": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1012,
        "fields": {
            "candidate": 202,
            "issue": 102,
            "issue_score": 0.6
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1013,
        "fields": {
            "candidate": 202,
            "issue": 103,
            "issue_score": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1014,
        "fields": {
            "candidate": 202,
            "issue": 104,
            "issue_score": 0.7
        }
    }
]

campaignTrail_temp.running_mate_issue_score_json = [
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1045,
        "fields": {
            "candidate": 209,
            "issue": 100,
            "issue_score": 0.3
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1046,
        "fields": {
            "candidate": 209,
            "issue": 101,
            "issue_score": -0.4
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1047,
        "fields": {
            "candidate": 209,
            "issue": 102,
            "issue_score": -0.25
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1048,
        "fields": {
            "candidate": 209,
            "issue": 103,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1049,
        "fields": {
            "candidate": 209,
            "issue": 104,
            "issue_score": 0.45
        }
    }
]

campaignTrail_temp.candidate_state_multiplier_json = [
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2500,
        "fields": {
            "candidate": 200,
            "state": 1000,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2501,
        "fields": {
            "candidate": 200,
            "state": 1001,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2502,
        "fields": {
            "candidate": 200,
            "state": 1002,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2503,
        "fields": {
            "candidate": 200,
            "state": 1003,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2504,
        "fields": {
            "candidate": 200,
            "state": 1004,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2505,
        "fields": {
            "candidate": 200,
            "state": 1005,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2506,
        "fields": {
            "candidate": 200,
            "state": 1006,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2507,
        "fields": {
            "candidate": 200,
            "state": 1007,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2508,
        "fields": {
            "candidate": 200,
            "state": 1008,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2509,
        "fields": {
            "candidate": 200,
            "state": 1009,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2510,
        "fields": {
            "candidate": 200,
            "state": 1010,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2511,
        "fields": {
            "candidate": 200,
            "state": 1011,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2512,
        "fields": {
            "candidate": 200,
            "state": 1012,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2513,
        "fields": {
            "candidate": 200,
            "state": 1013,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2514,
        "fields": {
            "candidate": 200,
            "state": 1014,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2515,
        "fields": {
            "candidate": 200,
            "state": 1015,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2516,
        "fields": {
            "candidate": 200,
            "state": 1016,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2517,
        "fields": {
            "candidate": 200,
            "state": 1017,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2518,
        "fields": {
            "candidate": 200,
            "state": 1018,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2519,
        "fields": {
            "candidate": 200,
            "state": 1019,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2520,
        "fields": {
            "candidate": 200,
            "state": 1020,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2521,
        "fields": {
            "candidate": 200,
            "state": 1021,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2522,
        "fields": {
            "candidate": 200,
            "state": 1022,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2523,
        "fields": {
            "candidate": 200,
            "state": 1023,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2524,
        "fields": {
            "candidate": 200,
            "state": 1024,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2525,
        "fields": {
            "candidate": 200,
            "state": 1025,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2526,
        "fields": {
            "candidate": 200,
            "state": 1026,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2527,
        "fields": {
            "candidate": 200,
            "state": 1027,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2528,
        "fields": {
            "candidate": 200,
            "state": 1028,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2529,
        "fields": {
            "candidate": 200,
            "state": 1029,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2530,
        "fields": {
            "candidate": 200,
            "state": 1030,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2531,
        "fields": {
            "candidate": 200,
            "state": 1031,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2532,
        "fields": {
            "candidate": 200,
            "state": 1032,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2533,
        "fields": {
            "candidate": 200,
            "state": 1033,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2534,
        "fields": {
            "candidate": 200,
            "state": 1034,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2535,
        "fields": {
            "candidate": 200,
            "state": 1035,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2536,
        "fields": {
            "candidate": 200,
            "state": 1036,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2537,
        "fields": {
            "candidate": 200,
            "state": 1037,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2538,
        "fields": {
            "candidate": 200,
            "state": 1038,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2539,
        "fields": {
            "candidate": 200,
            "state": 1039,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2540,
        "fields": {
            "candidate": 200,
            "state": 1040,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2541,
        "fields": {
            "candidate": 200,
            "state": 1041,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2542,
        "fields": {
            "candidate": 200,
            "state": 1042,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2543,
        "fields": {
            "candidate": 200,
            "state": 1043,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2544,
        "fields": {
            "candidate": 200,
            "state": 1044,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2545,
        "fields": {
            "candidate": 200,
            "state": 1045,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2546,
        "fields": {
            "candidate": 200,
            "state": 1046,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2547,
        "fields": {
            "candidate": 200,
            "state": 1047,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2548,
        "fields": {
            "candidate": 200,
            "state": 1048,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2549,
        "fields": {
            "candidate": 200,
            "state": 1049,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2550,
        "fields": {
            "candidate": 200,
            "state": 1050,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2551,
        "fields": {
            "candidate": 201,
            "state": 1000,
            "state_multiplier": 0.839
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2552,
        "fields": {
            "candidate": 201,
            "state": 1001,
            "state_multiplier": 0.737
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2553,
        "fields": {
            "candidate": 201,
            "state": 1002,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2554,
        "fields": {
            "candidate": 201,
            "state": 1003,
            "state_multiplier": 0.741
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2555,
        "fields": {
            "candidate": 201,
            "state": 1004,
            "state_multiplier": 1.244
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2556,
        "fields": {
            "candidate": 201,
            "state": 1005,
            "state_multiplier": 0.878
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2557,
        "fields": {
            "candidate": 201,
            "state": 1006,
            "state_multiplier": 0.884
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2558,
        "fields": {
            "candidate": 201,
            "state": 1007,
            "state_multiplier": 0.915
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2559,
        "fields": {
            "candidate": 201,
            "state": 1008,
            "state_multiplier": 0.959
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2560,
        "fields": {
            "candidate": 201,
            "state": 1009,
            "state_multiplier": 0.942
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2561,
        "fields": {
            "candidate": 201,
            "state": 1010,
            "state_multiplier": 1.285
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2562,
        "fields": {
            "candidate": 201,
            "state": 1011,
            "state_multiplier": 0.528
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2563,
        "fields": {
            "candidate": 201,
            "state": 1012,
            "state_multiplier": 1.223
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2564,
        "fields": {
            "candidate": 201,
            "state": 1013,
            "state_multiplier": 0.769
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2565,
        "fields": {
            "candidate": 201,
            "state": 1014,
            "state_multiplier": 0.846
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2566,
        "fields": {
            "candidate": 201,
            "state": 1015,
            "state_multiplier": 0.669
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2567,
        "fields": {
            "candidate": 201,
            "state": 1016,
            "state_multiplier": 0.666
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2568,
        "fields": {
            "candidate": 201,
            "state": 1017,
            "state_multiplier": 0.844
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2569,
        "fields": {
            "candidate": 201,
            "state": 1018,
            "state_multiplier": 1.11
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2570,
        "fields": {
            "candidate": 201,
            "state": 1019,
            "state_multiplier": 1.589
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2571,
        "fields": {
            "candidate": 201,
            "state": 1020,
            "state_multiplier": 1.103
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2572,
        "fields": {
            "candidate": 201,
            "state": 1021,
            "state_multiplier": 1.119
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2573,
        "fields": {
            "candidate": 201,
            "state": 1022,
            "state_multiplier": 0.98
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2574,
        "fields": {
            "candidate": 201,
            "state": 1023,
            "state_multiplier": 1.006
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2575,
        "fields": {
            "candidate": 201,
            "state": 1024,
            "state_multiplier": 0.738
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2576,
        "fields": {
            "candidate": 201,
            "state": 1025,
            "state_multiplier": 0.692
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2577,
        "fields": {
            "candidate": 201,
            "state": 1026,
            "state_multiplier": 0.634
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2578,
        "fields": {
            "candidate": 201,
            "state": 1027,
            "state_multiplier": 0.918
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2579,
        "fields": {
            "candidate": 201,
            "state": 1028,
            "state_multiplier": 0.977
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2580,
        "fields": {
            "candidate": 201,
            "state": 1029,
            "state_multiplier": 1.004
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2581,
        "fields": {
            "candidate": 201,
            "state": 1030,
            "state_multiplier": 0.98
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2582,
        "fields": {
            "candidate": 201,
            "state": 1031,
            "state_multiplier": 1.12
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2583,
        "fields": {
            "candidate": 201,
            "state": 1032,
            "state_multiplier": 0.963
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2584,
        "fields": {
            "candidate": 201,
            "state": 1033,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2585,
        "fields": {
            "candidate": 201,
            "state": 1034,
            "state_multiplier": 0.81
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2586,
        "fields": {
            "candidate": 201,
            "state": 1035,
            "state_multiplier": 0.485
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2587,
        "fields": {
            "candidate": 201,
            "state": 1036,
            "state_multiplier": 0.913
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2588,
        "fields": {
            "candidate": 201,
            "state": 1037,
            "state_multiplier": 0.984
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2589,
        "fields": {
            "candidate": 201,
            "state": 1038,
            "state_multiplier": 0.896
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2590,
        "fields": {
            "candidate": 201,
            "state": 1039,
            "state_multiplier": 0.965
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2591,
        "fields": {
            "candidate": 201,
            "state": 1040,
            "state_multiplier": 0.638
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2592,
        "fields": {
            "candidate": 201,
            "state": 1041,
            "state_multiplier": 0.81
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2593,
        "fields": {
            "candidate": 201,
            "state": 1042,
            "state_multiplier": 0.854
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2594,
        "fields": {
            "candidate": 201,
            "state": 1043,
            "state_multiplier": 0.656
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2595,
        "fields": {
            "candidate": 201,
            "state": 1044,
            "state_multiplier": 1.487
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2596,
        "fields": {
            "candidate": 201,
            "state": 1045,
            "state_multiplier": 1.079
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2597,
        "fields": {
            "candidate": 201,
            "state": 1046,
            "state_multiplier": 1.188
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2598,
        "fields": {
            "candidate": 201,
            "state": 1047,
            "state_multiplier": 13.948
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2599,
        "fields": {
            "candidate": 201,
            "state": 1048,
            "state_multiplier": 0.597
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2600,
        "fields": {
            "candidate": 201,
            "state": 1049,
            "state_multiplier": 0.994
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2601,
        "fields": {
            "candidate": 201,
            "state": 1050,
            "state_multiplier": 0.481
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2602,
        "fields": {
            "candidate": 202,
            "state": 1000,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2603,
        "fields": {
            "candidate": 202,
            "state": 1001,
            "state_multiplier": 0.766
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2604,
        "fields": {
            "candidate": 202,
            "state": 1002,
            "state_multiplier": 0.766
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2605,
        "fields": {
            "candidate": 202,
            "state": 1003,
            "state_multiplier": 0.766
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2606,
        "fields": {
            "candidate": 202,
            "state": 1004,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2607,
        "fields": {
            "candidate": 202,
            "state": 1005,
            "state_multiplier": 0.766
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2608,
        "fields": {
            "candidate": 202,
            "state": 1006,
            "state_multiplier": 0.601
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2609,
        "fields": {
            "candidate": 202,
            "state": 1007,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2610,
        "fields": {
            "candidate": 202,
            "state": 1008,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2611,
        "fields": {
            "candidate": 202,
            "state": 1009,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2612,
        "fields": {
            "candidate": 202,
            "state": 1010,
            "state_multiplier": 0.766
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2613,
        "fields": {
            "candidate": 202,
            "state": 1011,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2614,
        "fields": {
            "candidate": 202,
            "state": 1012,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2615,
        "fields": {
            "candidate": 202,
            "state": 1013,
            "state_multiplier": 0.601
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2616,
        "fields": {
            "candidate": 202,
            "state": 1014,
            "state_multiplier": 0.601
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2617,
        "fields": {
            "candidate": 202,
            "state": 1015,
            "state_multiplier": 0.601
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2618,
        "fields": {
            "candidate": 202,
            "state": 1016,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2619,
        "fields": {
            "candidate": 202,
            "state": 1017,
            "state_multiplier": 1.16
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2620,
        "fields": {
            "candidate": 202,
            "state": 1018,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2621,
        "fields": {
            "candidate": 202,
            "state": 1019,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2622,
        "fields": {
            "candidate": 202,
            "state": 1020,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2623,
        "fields": {
            "candidate": 202,
            "state": 1021,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2624,
        "fields": {
            "candidate": 202,
            "state": 1022,
            "state_multiplier": 0.601
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2625,
        "fields": {
            "candidate": 202,
            "state": 1023,
            "state_multiplier": 0.766
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2626,
        "fields": {
            "candidate": 202,
            "state": 1024,
            "state_multiplier": 0.766
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2627,
        "fields": {
            "candidate": 202,
            "state": 1025,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2628,
        "fields": {
            "candidate": 202,
            "state": 1026,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2629,
        "fields": {
            "candidate": 202,
            "state": 1027,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2630,
        "fields": {
            "candidate": 202,
            "state": 1028,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2631,
        "fields": {
            "candidate": 202,
            "state": 1029,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2632,
        "fields": {
            "candidate": 202,
            "state": 1030,
            "state_multiplier": 0.766
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2633,
        "fields": {
            "candidate": 202,
            "state": 1031,
            "state_multiplier": 0.766
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2634,
        "fields": {
            "candidate": 202,
            "state": 1032,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2635,
        "fields": {
            "candidate": 202,
            "state": 1033,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2636,
        "fields": {
            "candidate": 202,
            "state": 1034,
            "state_multiplier": 0.601
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2637,
        "fields": {
            "candidate": 202,
            "state": 1035,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2638,
        "fields": {
            "candidate": 202,
            "state": 1036,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2639,
        "fields": {
            "candidate": 202,
            "state": 1037,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2640,
        "fields": {
            "candidate": 202,
            "state": 1038,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2641,
        "fields": {
            "candidate": 202,
            "state": 1039,
            "state_multiplier": 0.601
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2642,
        "fields": {
            "candidate": 202,
            "state": 1040,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2643,
        "fields": {
            "candidate": 202,
            "state": 1041,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2644,
        "fields": {
            "candidate": 202,
            "state": 1042,
            "state_multiplier": 0.601
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2645,
        "fields": {
            "candidate": 202,
            "state": 1043,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2646,
        "fields": {
            "candidate": 202,
            "state": 1044,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2647,
        "fields": {
            "candidate": 202,
            "state": 1045,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2648,
        "fields": {
            "candidate": 202,
            "state": 1046,
            "state_multiplier": 0.766
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2649,
        "fields": {
            "candidate": 202,
            "state": 1047,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2650,
        "fields": {
            "candidate": 202,
            "state": 1048,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2651,
        "fields": {
            "candidate": 202,
            "state": 1049,
            "state_multiplier": 0.578
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2652,
        "fields": {
            "candidate": 202,
            "state": 1050,
            "state_multiplier": 0.578
        }
    }
]

campaignTrail_temp.answer_score_global_json = [
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3286,
        "fields": {
            "answer": 5142,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3318,
        "fields": {
            "answer": 5223,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20684,
        "fields": {
            "answer": 20682,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20691,
        "fields": {
            "answer": 20685,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20697,
        "fields": {
            "answer": 20693,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20719,
        "fields": {
            "answer": 20717,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.78
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20722,
        "fields": {
            "answer": 20720,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20728,
        "fields": {
            "answer": 20725,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20740,
        "fields": {
            "answer": 20737,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20741,
        "fields": {
            "answer": 20737,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20744,
        "fields": {
            "answer": 20742,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.31
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20747,
        "fields": {
            "answer": 20745,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.31
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20750,
        "fields": {
            "answer": 20748,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.31
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20760,
        "fields": {
            "answer": 20752,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20774,
        "fields": {
            "answer": 20770,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20775,
        "fields": {
            "answer": 20762,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20776,
        "fields": {
            "answer": 20752,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20781,
        "fields": {
            "answer": 20778,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20864,
        "fields": {
            "answer": 20855,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20865,
        "fields": {
            "answer": 20855,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20868,
        "fields": {
            "answer": 20866,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20869,
        "fields": {
            "answer": 20866,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20884,
        "fields": {
            "answer": 20882,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20885,
        "fields": {
            "answer": 20882,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20899,
        "fields": {
            "answer": 20896,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20907,
        "fields": {
            "answer": 20901,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20908,
        "fields": {
            "answer": 20901,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20909,
        "fields": {
            "answer": 20901,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20912,
        "fields": {
            "answer": 20910,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20913,
        "fields": {
            "answer": 20910,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20918,
        "fields": {
            "answer": 20897,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20919,
        "fields": {
            "answer": 20897,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20920,
        "fields": {
            "answer": 20897,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20924,
        "fields": {
            "answer": 20922,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20925,
        "fields": {
            "answer": 20922,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20930,
        "fields": {
            "answer": 20928,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20932,
        "fields": {
            "answer": 20928,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20936,
        "fields": {
            "answer": 20934,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20973,
        "fields": {
            "answer": 20959,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20976,
        "fields": {
            "answer": 20942,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20984,
        "fields": {
            "answer": 20981,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20992,
        "fields": {
            "answer": 20990,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20998,
        "fields": {
            "answer": 20997,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21000,
        "fields": {
            "answer": 20999,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21022,
        "fields": {
            "answer": 21021,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21032,
        "fields": {
            "answer": 21031,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.8
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21034,
        "fields": {
            "answer": 20752,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21073,
        "fields": {
            "answer": 21071,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21077,
        "fields": {
            "answer": 21075,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21079,
        "fields": {
            "answer": 21068,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21084,
        "fields": {
            "answer": 21082,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21088,
        "fields": {
            "answer": 21082,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21089,
        "fields": {
            "answer": 21075,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21115,
        "fields": {
            "answer": 20941,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21137,
        "fields": {
            "answer": 21135,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21140,
        "fields": {
            "answer": 21138,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21175,
        "fields": {
            "answer": 20720,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21177,
        "fields": {
            "answer": 20910,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21181,
        "fields": {
            "answer": 21180,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21183,
        "fields": {
            "answer": 21179,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21195,
        "fields": {
            "answer": 21193,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21221,
        "fields": {
            "answer": 21220,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21223,
        "fields": {
            "answer": 21205,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21224,
        "fields": {
            "answer": 21205,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21257,
        "fields": {
            "answer": 20731,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21297,
        "fields": {
            "answer": 20810,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21298,
        "fields": {
            "answer": 20791,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21332,
        "fields": {
            "answer": 20791,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21340,
        "fields": {
            "answer": 20797,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21343,
        "fields": {
            "answer": 20805,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21350,
        "fields": {
            "answer": 21348,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21351,
        "fields": {
            "answer": 21348,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21358,
        "fields": {
            "answer": 21354,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21359,
        "fields": {
            "answer": 21354,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21363,
        "fields": {
            "answer": 21360,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21364,
        "fields": {
            "answer": 21360,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21377,
        "fields": {
            "answer": 21376,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21378,
        "fields": {
            "answer": 21376,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21404,
        "fields": {
            "answer": 20708,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21405,
        "fields": {
            "answer": 20714,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21409,
        "fields": {
            "answer": 21118,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21413,
        "fields": {
            "answer": 21123,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21414,
        "fields": {
            "answer": 21123,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21420,
        "fields": {
            "answer": 21418,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21423,
        "fields": {
            "answer": 20725,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21424,
        "fields": {
            "answer": 21118,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.006
        }
    }
]

campaignTrail_temp.answer_score_issue_json = [
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2885,
        "fields": {
            "answer": 5223,
            "issue": 101,
            "issue_score": 0.63,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20690,
        "fields": {
            "answer": 20685,
            "issue": 100,
            "issue_score": -0.45,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20698,
        "fields": {
            "answer": 20693,
            "issue": 100,
            "issue_score": 0.45,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20723,
        "fields": {
            "answer": 20720,
            "issue": 100,
            "issue_score": 0.51,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20727,
        "fields": {
            "answer": 20725,
            "issue": 100,
            "issue_score": -0.51,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20757,
        "fields": {
            "answer": 20720,
            "issue": 103,
            "issue_score": 0.48,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20758,
        "fields": {
            "answer": 20725,
            "issue": 103,
            "issue_score": -0.48,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20761,
        "fields": {
            "answer": 20752,
            "issue": 103,
            "issue_score": -0.7,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20765,
        "fields": {
            "answer": 20762,
            "issue": 100,
            "issue_score": -0.67,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20766,
        "fields": {
            "answer": 20762,
            "issue": 103,
            "issue_score": -0.51,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20772,
        "fields": {
            "answer": 20770,
            "issue": 100,
            "issue_score": 0.67,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20773,
        "fields": {
            "answer": 20770,
            "issue": 103,
            "issue_score": 0.51,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20780,
        "fields": {
            "answer": 20778,
            "issue": 101,
            "issue_score": 0.65,
            "issue_importance": 6
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20783,
        "fields": {
            "answer": 20700,
            "issue": 101,
            "issue_score": 0.55,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20804,
        "fields": {
            "answer": 20791,
            "issue": 100,
            "issue_score": 0.79,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20857,
        "fields": {
            "answer": 20855,
            "issue": 100,
            "issue_score": -0.47,
            "issue_importance": 6
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20858,
        "fields": {
            "answer": 20855,
            "issue": 103,
            "issue_score": -0.43,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20859,
        "fields": {
            "answer": 20855,
            "issue": 104,
            "issue_score": -0.51,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20860,
        "fields": {
            "answer": 20855,
            "issue": 101,
            "issue_score": -0.61,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20876,
        "fields": {
            "answer": 20866,
            "issue": 100,
            "issue_score": 0.47,
            "issue_importance": 6
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20877,
        "fields": {
            "answer": 20866,
            "issue": 103,
            "issue_score": 0.43,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20878,
        "fields": {
            "answer": 20866,
            "issue": 104,
            "issue_score": 0.55,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20879,
        "fields": {
            "answer": 20866,
            "issue": 101,
            "issue_score": -0.25,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20886,
        "fields": {
            "answer": 20882,
            "issue": 101,
            "issue_score": 0.35,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20887,
        "fields": {
            "answer": 20882,
            "issue": 100,
            "issue_score": -0.35,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20888,
        "fields": {
            "answer": 20882,
            "issue": 103,
            "issue_score": -0.36,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20889,
        "fields": {
            "answer": 20882,
            "issue": 102,
            "issue_score": 0.55,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20900,
        "fields": {
            "answer": 20896,
            "issue": 101,
            "issue_score": 0.45,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20903,
        "fields": {
            "answer": 20901,
            "issue": 100,
            "issue_score": -0.55,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20914,
        "fields": {
            "answer": 20910,
            "issue": 100,
            "issue_score": 0.55,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20921,
        "fields": {
            "answer": 20897,
            "issue": 101,
            "issue_score": 0.36,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20926,
        "fields": {
            "answer": 20922,
            "issue": 100,
            "issue_score": 0.33,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20933,
        "fields": {
            "answer": 20928,
            "issue": 100,
            "issue_score": -0.34,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20939,
        "fields": {
            "answer": 20934,
            "issue": 101,
            "issue_score": 0.44,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20946,
        "fields": {
            "answer": 20941,
            "issue": 100,
            "issue_score": 0.45,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20948,
        "fields": {
            "answer": 20942,
            "issue": 104,
            "issue_score": 0.56,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20949,
        "fields": {
            "answer": 20942,
            "issue": 100,
            "issue_score": 0.35,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20950,
        "fields": {
            "answer": 20943,
            "issue": 103,
            "issue_score": -0.35,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20951,
        "fields": {
            "answer": 20943,
            "issue": 100,
            "issue_score": -0.35,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20952,
        "fields": {
            "answer": 20944,
            "issue": 100,
            "issue_score": -0.45,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20979,
        "fields": {
            "answer": 5142,
            "issue": 101,
            "issue_score": 0.45,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20982,
        "fields": {
            "answer": 20981,
            "issue": 101,
            "issue_score": 0.45,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20987,
        "fields": {
            "answer": 20985,
            "issue": 100,
            "issue_score": -0.52,
            "issue_importance": 6
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20989,
        "fields": {
            "answer": 20988,
            "issue": 100,
            "issue_score": 0.52,
            "issue_importance": 6
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21001,
        "fields": {
            "answer": 20999,
            "issue": 101,
            "issue_score": 0.55,
            "issue_importance": 6
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21023,
        "fields": {
            "answer": 21021,
            "issue": 101,
            "issue_score": 0.44,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21025,
        "fields": {
            "answer": 21024,
            "issue": 103,
            "issue_score": -0.45,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21027,
        "fields": {
            "answer": 21026,
            "issue": 103,
            "issue_score": 0.45,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21029,
        "fields": {
            "answer": 21028,
            "issue": 101,
            "issue_score": 0.4,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21052,
        "fields": {
            "answer": 20997,
            "issue": 101,
            "issue_score": 0.35,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21070,
        "fields": {
            "answer": 21068,
            "issue": 101,
            "issue_score": -0.45,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21074,
        "fields": {
            "answer": 21071,
            "issue": 101,
            "issue_score": 0.6,
            "issue_importance": 8
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21078,
        "fields": {
            "answer": 21075,
            "issue": 101,
            "issue_score": -0.65,
            "issue_importance": 7
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21080,
        "fields": {
            "answer": 21075,
            "issue": 100,
            "issue_score": -0.58,
            "issue_importance": 6
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21081,
        "fields": {
            "answer": 21075,
            "issue": 103,
            "issue_score": -0.58,
            "issue_importance": 6
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21085,
        "fields": {
            "answer": 21082,
            "issue": 100,
            "issue_score": 0.58,
            "issue_importance": 6
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21086,
        "fields": {
            "answer": 21082,
            "issue": 103,
            "issue_score": 0.58,
            "issue_importance": 6
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21087,
        "fields": {
            "answer": 21082,
            "issue": 101,
            "issue_score": -0.65,
            "issue_importance": 7
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21143,
        "fields": {
            "answer": 21141,
            "issue": 101,
            "issue_score": 0.55,
            "issue_importance": 7
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21176,
        "fields": {
            "answer": 20737,
            "issue": 101,
            "issue_score": 0.45,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21184,
        "fields": {
            "answer": 21179,
            "issue": 100,
            "issue_score": 0.56,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21185,
        "fields": {
            "answer": 21179,
            "issue": 103,
            "issue_score": 0.55,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21196,
        "fields": {
            "answer": 21193,
            "issue": 100,
            "issue_score": -0.56,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21197,
        "fields": {
            "answer": 21193,
            "issue": 103,
            "issue_score": -0.55,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21222,
        "fields": {
            "answer": 21220,
            "issue": 101,
            "issue_score": 0.5,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21300,
        "fields": {
            "answer": 21299,
            "issue": 100,
            "issue_score": 0.4,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21306,
        "fields": {
            "answer": 21305,
            "issue": 100,
            "issue_score": -0.4,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21312,
        "fields": {
            "answer": 21311,
            "issue": 100,
            "issue_score": -0.6,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21322,
        "fields": {
            "answer": 21321,
            "issue": 100,
            "issue_score": 0.6,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21333,
        "fields": {
            "answer": 20791,
            "issue": 104,
            "issue_score": 0.8,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21345,
        "fields": {
            "answer": 20797,
            "issue": 100,
            "issue_score": 0.3,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21346,
        "fields": {
            "answer": 20810,
            "issue": 100,
            "issue_score": -0.3,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21357,
        "fields": {
            "answer": 21354,
            "issue": 101,
            "issue_score": 0.6,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21361,
        "fields": {
            "answer": 21360,
            "issue": 100,
            "issue_score": 0.6,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21362,
        "fields": {
            "answer": 21360,
            "issue": 103,
            "issue_score": 0.6,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21390,
        "fields": {
            "answer": 21376,
            "issue": 100,
            "issue_score": -0.6,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21391,
        "fields": {
            "answer": 21376,
            "issue": 103,
            "issue_score": -0.6,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21406,
        "fields": {
            "answer": 21135,
            "issue": 101,
            "issue_score": 0.5,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21412,
        "fields": {
            "answer": 21118,
            "issue": 100,
            "issue_score": 0.6,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21417,
        "fields": {
            "answer": 21415,
            "issue": 101,
            "issue_score": 0.65,
            "issue_importance": 6
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21422,
        "fields": {
            "answer": 21418,
            "issue": 101,
            "issue_score": 0.65,
            "issue_importance": 2
        }
    }
]

campaignTrail_temp.answer_score_state_json = [
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20681,
        "fields": {
            "answer": 5142,
            "state": 1008,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20716,
        "fields": {
            "answer": 20714,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.065
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20769,
        "fields": {
            "answer": 20752,
            "state": 1048,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20784,
        "fields": {
            "answer": 20711,
            "state": 1002,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20785,
        "fields": {
            "answer": 20711,
            "state": 1009,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20787,
        "fields": {
            "answer": 20711,
            "state": 1021,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20853,
        "fields": {
            "answer": 5223,
            "state": 1005,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20854,
        "fields": {
            "answer": 5223,
            "state": 1001,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20861,
        "fields": {
            "answer": 20855,
            "state": 1013,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.055
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20862,
        "fields": {
            "answer": 20855,
            "state": 1050,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20863,
        "fields": {
            "answer": 20855,
            "state": 1035,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20870,
        "fields": {
            "answer": 20855,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20871,
        "fields": {
            "answer": 20866,
            "state": 1044,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.055
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20872,
        "fields": {
            "answer": 20866,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20873,
        "fields": {
            "answer": 20866,
            "state": 1020,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20874,
        "fields": {
            "answer": 20866,
            "state": 1012,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20880,
        "fields": {
            "answer": 5223,
            "state": 1006,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20881,
        "fields": {
            "answer": 5223,
            "state": 1028,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20890,
        "fields": {
            "answer": 20882,
            "state": 1027,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20891,
        "fields": {
            "answer": 20882,
            "state": 1037,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20892,
        "fields": {
            "answer": 20882,
            "state": 1009,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20893,
        "fields": {
            "answer": 20882,
            "state": 1021,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20894,
        "fields": {
            "answer": 20866,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20960,
        "fields": {
            "answer": 20956,
            "state": 1008,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20961,
        "fields": {
            "answer": 20956,
            "state": 1000,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20962,
        "fields": {
            "answer": 20956,
            "state": 1045,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20963,
        "fields": {
            "answer": 20956,
            "state": 1041,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20964,
        "fields": {
            "answer": 20957,
            "state": 1012,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20965,
        "fields": {
            "answer": 20957,
            "state": 1034,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20966,
        "fields": {
            "answer": 20957,
            "state": 1013,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20967,
        "fields": {
            "answer": 20957,
            "state": 1021,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20968,
        "fields": {
            "answer": 20958,
            "state": 1031,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20969,
        "fields": {
            "answer": 20958,
            "state": 1037,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20970,
        "fields": {
            "answer": 20958,
            "state": 1020,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20971,
        "fields": {
            "answer": 20958,
            "state": 1006,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20972,
        "fields": {
            "answer": 20959,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.055
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21004,
        "fields": {
            "answer": 21003,
            "state": 1049,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21005,
        "fields": {
            "answer": 21003,
            "state": 1021,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21007,
        "fields": {
            "answer": 21003,
            "state": 1012,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21009,
        "fields": {
            "answer": 21003,
            "state": 1037,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21010,
        "fields": {
            "answer": 21008,
            "state": 1006,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21011,
        "fields": {
            "answer": 21008,
            "state": 1038,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21012,
        "fields": {
            "answer": 21008,
            "state": 1029,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21013,
        "fields": {
            "answer": 21008,
            "state": 1031,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21015,
        "fields": {
            "answer": 21014,
            "state": 1030,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21016,
        "fields": {
            "answer": 21014,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21017,
        "fields": {
            "answer": 21014,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21018,
        "fields": {
            "answer": 21014,
            "state": 1002,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21039,
        "fields": {
            "answer": 20943,
            "state": 1028,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21040,
        "fields": {
            "answer": 20943,
            "state": 1040,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21041,
        "fields": {
            "answer": 20943,
            "state": 1030,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21042,
        "fields": {
            "answer": 20943,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21064,
        "fields": {
            "answer": 21063,
            "state": 1009,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21065,
        "fields": {
            "answer": 21063,
            "state": 1017,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21066,
        "fields": {
            "answer": 21063,
            "state": 1023,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21067,
        "fields": {
            "answer": 21063,
            "state": 1000,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21092,
        "fields": {
            "answer": 21082,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21095,
        "fields": {
            "answer": 20910,
            "state": 1044,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21096,
        "fields": {
            "answer": 20910,
            "state": 1019,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21097,
        "fields": {
            "answer": 20910,
            "state": 1020,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21098,
        "fields": {
            "answer": 20910,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21099,
        "fields": {
            "answer": 20910,
            "state": 1048,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21100,
        "fields": {
            "answer": 20910,
            "state": 1033,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21101,
        "fields": {
            "answer": 20901,
            "state": 1044,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21102,
        "fields": {
            "answer": 20901,
            "state": 1019,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21103,
        "fields": {
            "answer": 20901,
            "state": 1020,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21104,
        "fields": {
            "answer": 20910,
            "state": 1050,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21105,
        "fields": {
            "answer": 20910,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21106,
        "fields": {
            "answer": 20901,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21107,
        "fields": {
            "answer": 20901,
            "state": 1050,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21108,
        "fields": {
            "answer": 20901,
            "state": 1033,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21109,
        "fields": {
            "answer": 20901,
            "state": 1048,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21110,
        "fields": {
            "answer": 20901,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21113,
        "fields": {
            "answer": 20943,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21149,
        "fields": {
            "answer": 21082,
            "state": 1044,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21150,
        "fields": {
            "answer": 21082,
            "state": 1020,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21151,
        "fields": {
            "answer": 21082,
            "state": 1019,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21152,
        "fields": {
            "answer": 21082,
            "state": 1010,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21153,
        "fields": {
            "answer": 21082,
            "state": 1031,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21154,
        "fields": {
            "answer": 21075,
            "state": 1034,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21155,
        "fields": {
            "answer": 21075,
            "state": 1050,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21156,
        "fields": {
            "answer": 21075,
            "state": 1048,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21157,
        "fields": {
            "answer": 21075,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21158,
        "fields": {
            "answer": 21075,
            "state": 1008,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21159,
        "fields": {
            "answer": 21075,
            "state": 1000,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21160,
        "fields": {
            "answer": 21075,
            "state": 1041,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21161,
        "fields": {
            "answer": 21071,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21162,
        "fields": {
            "answer": 21071,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21163,
        "fields": {
            "answer": 21071,
            "state": 1005,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21164,
        "fields": {
            "answer": 21071,
            "state": 1001,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21165,
        "fields": {
            "answer": 21071,
            "state": 1029,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21166,
        "fields": {
            "answer": 21071,
            "state": 1006,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21167,
        "fields": {
            "answer": 21071,
            "state": 1038,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21168,
        "fields": {
            "answer": 21068,
            "state": 1002,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21169,
        "fields": {
            "answer": 21068,
            "state": 1009,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21170,
        "fields": {
            "answer": 21068,
            "state": 1049,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21171,
        "fields": {
            "answer": 21068,
            "state": 1021,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21172,
        "fields": {
            "answer": 21068,
            "state": 1037,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21173,
        "fields": {
            "answer": 21068,
            "state": 1027,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.021
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21174,
        "fields": {
            "answer": 21068,
            "state": 1008,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21186,
        "fields": {
            "answer": 21179,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21187,
        "fields": {
            "answer": 21179,
            "state": 1012,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21188,
        "fields": {
            "answer": 21179,
            "state": 1020,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21189,
        "fields": {
            "answer": 21179,
            "state": 1031,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21190,
        "fields": {
            "answer": 21179,
            "state": 1036,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21191,
        "fields": {
            "answer": 21179,
            "state": 1044,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21192,
        "fields": {
            "answer": 21179,
            "state": 1046,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21198,
        "fields": {
            "answer": 21193,
            "state": 1013,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21199,
        "fields": {
            "answer": 21193,
            "state": 1016,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21200,
        "fields": {
            "answer": 21193,
            "state": 1033,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21201,
        "fields": {
            "answer": 21193,
            "state": 1041,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21202,
        "fields": {
            "answer": 21193,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21203,
        "fields": {
            "answer": 21193,
            "state": 1048,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21204,
        "fields": {
            "answer": 21193,
            "state": 1050,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21209,
        "fields": {
            "answer": 21205,
            "state": 1005,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21210,
        "fields": {
            "answer": 21205,
            "state": 1006,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21211,
        "fields": {
            "answer": 21205,
            "state": 1010,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21212,
        "fields": {
            "answer": 21205,
            "state": 1020,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21213,
        "fields": {
            "answer": 21205,
            "state": 1022,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21214,
        "fields": {
            "answer": 21193,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21216,
        "fields": {
            "answer": 21179,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21217,
        "fields": {
            "answer": 21179,
            "state": 1013,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21218,
        "fields": {
            "answer": 21179,
            "state": 1041,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21219,
        "fields": {
            "answer": 21193,
            "state": 1036,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21229,
        "fields": {
            "answer": 20700,
            "state": 1001,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21230,
        "fields": {
            "answer": 20700,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21231,
        "fields": {
            "answer": 20700,
            "state": 1011,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21232,
        "fields": {
            "answer": 20700,
            "state": 1026,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21233,
        "fields": {
            "answer": 20700,
            "state": 1033,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21234,
        "fields": {
            "answer": 20700,
            "state": 1035,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21235,
        "fields": {
            "answer": 20700,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21236,
        "fields": {
            "answer": 20700,
            "state": 1043,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21238,
        "fields": {
            "answer": 20709,
            "state": 1007,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21239,
        "fields": {
            "answer": 20709,
            "state": 1008,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21240,
        "fields": {
            "answer": 20709,
            "state": 1018,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21241,
        "fields": {
            "answer": 20709,
            "state": 1028,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21242,
        "fields": {
            "answer": 20709,
            "state": 1037,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21243,
        "fields": {
            "answer": 20709,
            "state": 1044,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21244,
        "fields": {
            "answer": 20709,
            "state": 1048,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21245,
        "fields": {
            "answer": 20708,
            "state": 1006,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21246,
        "fields": {
            "answer": 20708,
            "state": 1007,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21247,
        "fields": {
            "answer": 20708,
            "state": 1008,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21248,
        "fields": {
            "answer": 20708,
            "state": 1018,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21249,
        "fields": {
            "answer": 20708,
            "state": 1028,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21250,
        "fields": {
            "answer": 20708,
            "state": 1037,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21251,
        "fields": {
            "answer": 20708,
            "state": 1044,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21252,
        "fields": {
            "answer": 20708,
            "state": 1048,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.019
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21253,
        "fields": {
            "answer": 20711,
            "state": 1049,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21254,
        "fields": {
            "answer": 20711,
            "state": 1027,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21255,
        "fields": {
            "answer": 20711,
            "state": 1032,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21258,
        "fields": {
            "answer": 20731,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21260,
        "fields": {
            "answer": 20731,
            "state": 1002,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21261,
        "fields": {
            "answer": 20731,
            "state": 1030,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21262,
        "fields": {
            "answer": 20731,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21263,
        "fields": {
            "answer": 20731,
            "state": 1017,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21264,
        "fields": {
            "answer": 20762,
            "state": 1003,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21265,
        "fields": {
            "answer": 20762,
            "state": 1023,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21266,
        "fields": {
            "answer": 20762,
            "state": 1024,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21267,
        "fields": {
            "answer": 20762,
            "state": 1025,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21268,
        "fields": {
            "answer": 20762,
            "state": 1028,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21269,
        "fields": {
            "answer": 20762,
            "state": 1035,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21270,
        "fields": {
            "answer": 20762,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21271,
        "fields": {
            "answer": 20762,
            "state": 1048,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21272,
        "fields": {
            "answer": 20762,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21273,
        "fields": {
            "answer": 20762,
            "state": 1031,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21274,
        "fields": {
            "answer": 20762,
            "state": 1012,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21275,
        "fields": {
            "answer": 20770,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21276,
        "fields": {
            "answer": 20770,
            "state": 1006,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21277,
        "fields": {
            "answer": 20770,
            "state": 1007,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21278,
        "fields": {
            "answer": 20770,
            "state": 1010,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21279,
        "fields": {
            "answer": 20770,
            "state": 1020,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21280,
        "fields": {
            "answer": 20770,
            "state": 1037,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21281,
        "fields": {
            "answer": 20770,
            "state": 1038,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21282,
        "fields": {
            "answer": 20770,
            "state": 1044,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.018
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21283,
        "fields": {
            "answer": 20770,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21284,
        "fields": {
            "answer": 20770,
            "state": 1023,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21285,
        "fields": {
            "answer": 20770,
            "state": 1001,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21295,
        "fields": {
            "answer": 20855,
            "state": 1004,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21301,
        "fields": {
            "answer": 21299,
            "state": 1029,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21302,
        "fields": {
            "answer": 21299,
            "state": 1031,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21303,
        "fields": {
            "answer": 21299,
            "state": 1037,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21304,
        "fields": {
            "answer": 21299,
            "state": 1046,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21307,
        "fields": {
            "answer": 21305,
            "state": 1000,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21308,
        "fields": {
            "answer": 21305,
            "state": 1008,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21309,
        "fields": {
            "answer": 21305,
            "state": 1025,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21310,
        "fields": {
            "answer": 21305,
            "state": 1041,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21313,
        "fields": {
            "answer": 21311,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21314,
        "fields": {
            "answer": 21311,
            "state": 1006,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21315,
        "fields": {
            "answer": 21311,
            "state": 1024,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21316,
        "fields": {
            "answer": 21311,
            "state": 1033,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21317,
        "fields": {
            "answer": 21311,
            "state": 1038,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21318,
        "fields": {
            "answer": 21311,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21319,
        "fields": {
            "answer": 21311,
            "state": 1048,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21320,
        "fields": {
            "answer": 21311,
            "state": 1050,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21323,
        "fields": {
            "answer": 21321,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21324,
        "fields": {
            "answer": 21321,
            "state": 1006,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21325,
        "fields": {
            "answer": 21321,
            "state": 1033,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21326,
        "fields": {
            "answer": 21321,
            "state": 1038,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21327,
        "fields": {
            "answer": 21321,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21328,
        "fields": {
            "answer": 21321,
            "state": 1048,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21329,
        "fields": {
            "answer": 21321,
            "state": 1050,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21330,
        "fields": {
            "answer": 21321,
            "state": 1024,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21334,
        "fields": {
            "answer": 20791,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21335,
        "fields": {
            "answer": 20791,
            "state": 1036,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21336,
        "fields": {
            "answer": 20791,
            "state": 1046,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21337,
        "fields": {
            "answer": 20791,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21338,
        "fields": {
            "answer": 20791,
            "state": 1008,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21339,
        "fields": {
            "answer": 20791,
            "state": 1014,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21365,
        "fields": {
            "answer": 21360,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21366,
        "fields": {
            "answer": 21360,
            "state": 1008,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21367,
        "fields": {
            "answer": 21360,
            "state": 1013,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21368,
        "fields": {
            "answer": 21360,
            "state": 1029,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21369,
        "fields": {
            "answer": 21360,
            "state": 1031,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21370,
        "fields": {
            "answer": 21360,
            "state": 1034,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21371,
        "fields": {
            "answer": 21360,
            "state": 1036,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21372,
        "fields": {
            "answer": 21360,
            "state": 1038,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21373,
        "fields": {
            "answer": 21360,
            "state": 1041,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21374,
        "fields": {
            "answer": 21360,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21375,
        "fields": {
            "answer": 21360,
            "state": 1046,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21379,
        "fields": {
            "answer": 21376,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21380,
        "fields": {
            "answer": 21376,
            "state": 1008,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21381,
        "fields": {
            "answer": 21376,
            "state": 1013,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21382,
        "fields": {
            "answer": 21376,
            "state": 1029,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21383,
        "fields": {
            "answer": 21376,
            "state": 1031,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21384,
        "fields": {
            "answer": 21376,
            "state": 1034,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21385,
        "fields": {
            "answer": 21376,
            "state": 1038,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21386,
        "fields": {
            "answer": 21376,
            "state": 1041,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21387,
        "fields": {
            "answer": 21376,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21388,
        "fields": {
            "answer": 21376,
            "state": 1046,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21389,
        "fields": {
            "answer": 21376,
            "state": 1036,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21394,
        "fields": {
            "answer": 21393,
            "state": 1008,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21396,
        "fields": {
            "answer": 21395,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21398,
        "fields": {
            "answer": 21397,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.014
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21400,
        "fields": {
            "answer": 21399,
            "state": 1037,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.014
        }
    }
]

campaignTrail_temp.answer_feedback_json = [
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2623,
        "fields": {
            "answer": 5142,
            "candidate": 202,
            "answer_feedback": "Many people consider the plan unrealistic, but your optimism is like a breath of fresh air in politics."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20683,
        "fields": {
            "answer": 20682,
            "candidate": 202,
            "answer_feedback": "You must be kidding, aren't you? If you wanted to convince people that you are serious candidate, this was not a good way to do it. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20689,
        "fields": {
            "answer": 20685,
            "candidate": 202,
            "answer_feedback": "It seems that you try convince conservatives to vote for you."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20695,
        "fields": {
            "answer": 20693,
            "candidate": 202,
            "answer_feedback": "It looks like you are trying to convince people who previously voted for the Democrats. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20701,
        "fields": {
            "answer": 20700,
            "candidate": 202,
            "answer_feedback": "This was definitely not a bad idea. Your AMA is getting a lot of attention. Your videos on Youtube have millions of views. It will definitely help you in some states."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20709,
        "fields": {
            "answer": 20708,
            "candidate": 202,
            "answer_feedback": "According to many people, the ads are strange, and Greg looked like he was very embarrassed in them. Nevertheless, such ads can help you reach more people."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20712,
        "fields": {
            "answer": 20711,
            "candidate": 202,
            "answer_feedback": "Sometimes you are awkward, but you seem to be sincere. After every rally, people chant your name. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20715,
        "fields": {
            "answer": 20714,
            "candidate": 202,
            "answer_feedback": "Maybe you will."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20718,
        "fields": {
            "answer": 20717,
            "candidate": 202,
            "answer_feedback": "It was amazing. You absolutely destroyed Trump and Harris with your energy and your positivity! You can really win this elections!"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20721,
        "fields": {
            "answer": 20720,
            "candidate": 202,
            "answer_feedback": "Trump calls you \"Crazy Tommy\", but your attack hurts him a little. No one knows exactly how you will get him arrested though. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20726,
        "fields": {
            "answer": 20725,
            "candidate": 202,
            "answer_feedback": "Kamala Harris calls you a “threat to democracy” who can “hand victory to Trump.” Nonetheless, you have gained some conservative voters."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20738,
        "fields": {
            "answer": 20737,
            "candidate": 202,
            "answer_feedback": "Fair enough. Their attacks on you make them look petty."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20743,
        "fields": {
            "answer": 20742,
            "candidate": 202,
            "answer_feedback": "This is not funny to most people. This is a huge scandal."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20746,
        "fields": {
            "answer": 20745,
            "candidate": 202,
            "answer_feedback": "You seem nervous at the conference. It seems that a lot of people believed Trump's words. This is a huge scandal."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20749,
        "fields": {
            "answer": 20748,
            "candidate": 202,
            "answer_feedback": "Unfortunately many people believe him. You are losing a lot of support."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20753,
        "fields": {
            "answer": 20752,
            "candidate": 202,
            "answer_feedback": "What, are you nuts?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20763,
        "fields": {
            "answer": 20762,
            "candidate": 202,
            "answer_feedback": "Many of your liberal voters are disappointed in you. Kamala Harris calls you a wannabe Trump. But maybe you just need to be more conservative to win?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20771,
        "fields": {
            "answer": 20770,
            "candidate": 202,
            "answer_feedback": "It is definitely an ambitious plan. Donald Trump calls you \"Crazy Tommy\" again. You lose conservatives support, but you hope it will be worth it."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20779,
        "fields": {
            "answer": 20778,
            "candidate": 202,
            "answer_feedback": "Being an alternative is definitely your strong point, but you need to remember that you need to talk also about something other. For now it works, though."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20792,
        "fields": {
            "answer": 20791,
            "candidate": 202,
            "answer_feedback": "This stance is definitely not popular with average Americans now."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20798,
        "fields": {
            "answer": 20797,
            "candidate": 202,
            "answer_feedback": "This may be a good compromise."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20811,
        "fields": {
            "answer": 20810,
            "candidate": 202,
            "answer_feedback": "This definitely will help you win some conservative voters."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20851,
        "fields": {
            "answer": 5223,
            "candidate": 202,
            "answer_feedback": "This was the stance expected of you. Remember, however, that some people expect more than just being an alternative."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20856,
        "fields": {
            "answer": 20855,
            "candidate": 202,
            "answer_feedback": "Pence gives you his endorsement. He is taking part in your campaign in several conservative states. Liberal voters, however, are very disappointed."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20867,
        "fields": {
            "answer": 20866,
            "candidate": 202,
            "answer_feedback": "Sanders doesn't officially endorse you, but he says some positive things about you in interview. However, you may lose the support of conservatives."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20883,
        "fields": {
            "answer": 20882,
            "candidate": 202,
            "answer_feedback": "Kennedy agrees and he speaks at your rally, but he is very controversial figure. His family has issued a statement in support of Kamala Harris. Nevertheless, there are people to whom Kennedy appeals."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20898,
        "fields": {
            "answer": 20896,
            "candidate": 202,
            "answer_feedback": "Fair enough. You don't really need to talk about Biden."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20902,
        "fields": {
            "answer": 20901,
            "candidate": 202,
            "answer_feedback": "Donald Trump says that \"Crazy Tommy might be crazy but even he knows how bad democrats are\"."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20911,
        "fields": {
            "answer": 20910,
            "candidate": 202,
            "answer_feedback": "Praising president Biden is a risky move, but if you're trying to win over people who vote Democrat, it may be a good idea."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20917,
        "fields": {
            "answer": 20897,
            "candidate": 202,
            "answer_feedback": "Greg looks embarrassed at the debate. His attacks of the other two candidates come off awkwardly and he is considered the loser of the debate. He was cranky today."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20923,
        "fields": {
            "answer": 20922,
            "candidate": 202,
            "answer_feedback": "Vance manages to successfully neutralize Greg attacks with accusations of you lying about your birthplace."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20929,
        "fields": {
            "answer": 20928,
            "candidate": 202,
            "answer_feedback": "Walz manages to counter greg's attacks and he exposes Greg's inexperience ."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20935,
        "fields": {
            "answer": 20934,
            "candidate": 202,
            "answer_feedback": "Greg does not allow himself to be provoked and is very calm at the debate. According to many, he was the winner."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20974,
        "fields": {
            "answer": 20941,
            "candidate": 202,
            "answer_feedback": "You seem to be holding more liberal views in this interview."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20975,
        "fields": {
            "answer": 20942,
            "candidate": 202,
            "answer_feedback": "Being a supporter of immigration is not really profitable in this elections."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20977,
        "fields": {
            "answer": 20943,
            "candidate": 202,
            "answer_feedback": "You seem to express some libertarian views."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20978,
        "fields": {
            "answer": 20944,
            "candidate": 202,
            "answer_feedback": "Maybe such words will convince some Trump supporters to vote for you?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21033,
        "fields": {
            "answer": 21031,
            "candidate": 202,
            "answer_feedback": "Why would you say something like that?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21045,
        "fields": {
            "answer": 20981,
            "candidate": 202,
            "answer_feedback": "Unfortunately, it seems that most people underestimate your acting talent and the whole performance is slightly awkward."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21046,
        "fields": {
            "answer": 20985,
            "candidate": 202,
            "answer_feedback": "There were rumors that Hulk Hogan was going to endorse Trump, but you manage to convince him. At one of your rallies, Hogan gives a speech during which he rips off his shirt and calls you a “real American hero\"."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21047,
        "fields": {
            "answer": 20988,
            "candidate": 202,
            "answer_feedback": "Unexpectedly, Taylor Swift agrees to your proposal. She writes on Instagram that \"Tommy fights for the rights and causes I believe need a warrior to champion them\"."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21048,
        "fields": {
            "answer": 20990,
            "candidate": 202,
            "answer_feedback": "You may be right."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21049,
        "fields": {
            "answer": 20996,
            "candidate": 202,
            "answer_feedback": "This is probably for the best. People get bored with these rumors pretty quickly and their attention shifts to something else."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21050,
        "fields": {
            "answer": 20997,
            "candidate": 202,
            "answer_feedback": "If you need to adress these rumors, this may be the best idea to counter them."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21053,
        "fields": {
            "answer": 20999,
            "candidate": 202,
            "answer_feedback": "Suggesting that Harris and Trump are conspiring together against you is probably not a very good idea, but your most hardcore supporters believe it."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21056,
        "fields": {
            "answer": 21021,
            "candidate": 202,
            "answer_feedback": "There are people for whom your plan is not important, because they only vote for you as a protest, but if you want to achieve something in this election, you can't dodge questions like this."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21059,
        "fields": {
            "answer": 21024,
            "candidate": 202,
            "answer_feedback": "Tax cuts are popular with many people."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21060,
        "fields": {
            "answer": 21026,
            "candidate": 202,
            "answer_feedback": "Maybe with these words some liberal voters will switch to your side?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21061,
        "fields": {
            "answer": 21028,
            "candidate": 202,
            "answer_feedback": "It seems that you got away with this question. You just hope that you won't be asked again about this."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21069,
        "fields": {
            "answer": 21068,
            "candidate": 202,
            "answer_feedback": "This is well received among undecided voters, but you most hardcore supporters are disappointed."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21072,
        "fields": {
            "answer": 21071,
            "candidate": 202,
            "answer_feedback": "You core base loves it, but others wonder if this is even realistic. No one right now can predict what will happen in two years."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21076,
        "fields": {
            "answer": 21075,
            "candidate": 202,
            "answer_feedback": "Your core base feels betrayed and disappointed. As for the Republicans, for the time being they are behind Trump, but unofficially they are ready to cooperate in case of your victory."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21083,
        "fields": {
            "answer": 21082,
            "candidate": 202,
            "answer_feedback": "Your core base feels betrayed and disappointed. As for the Democrats, for now they are behind Harris, but unofficially they are ready to cooperate in case of your victory."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21122,
        "fields": {
            "answer": 21118,
            "candidate": 202,
            "answer_feedback": "Wow. Trump definitely didn't expect that you will say something like that. He doesn't know what to say. Video of this moment went viral."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21124,
        "fields": {
            "answer": 21123,
            "candidate": 202,
            "answer_feedback": "You pushed him a little too hard. Trump fell to the ground, and he needed help to get up. Trump and Harris didn't want to continue debate after that. You assure him that you are sorry if he need anything he call you anytime, but he doesn't seem to appreciate it. This situation really hurt your chances to win this elections."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21136,
        "fields": {
            "answer": 21135,
            "candidate": 202,
            "answer_feedback": "It turns out that spending $6 million on movie isn't really relatable to most people."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21139,
        "fields": {
            "answer": 21138,
            "candidate": 202,
            "answer_feedback": "Highlighting this certainly helps you seem like a more \"down to earth\" person."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21142,
        "fields": {
            "answer": 21141,
            "candidate": 202,
            "answer_feedback": "Your core base loves it, but Harris and Trump attack you back. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21148,
        "fields": {
            "answer": 21147,
            "candidate": 202,
            "answer_feedback": "Fair enough."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21182,
        "fields": {
            "answer": 21180,
            "candidate": 202,
            "answer_feedback": "You seem to be petty and disconnected from reality."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21225,
        "fields": {
            "answer": 21179,
            "candidate": 202,
            "answer_feedback": "That may be a good answer if you want to won in more liberal states."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21226,
        "fields": {
            "answer": 21193,
            "candidate": 202,
            "answer_feedback": "This is a good answer if you hope to win in more conservative states."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21227,
        "fields": {
            "answer": 21205,
            "candidate": 202,
            "answer_feedback": "Some people are fine with this answer, but Trump and Harris definitely have a stronger opinion on this."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21228,
        "fields": {
            "answer": 21220,
            "candidate": 202,
            "answer_feedback": "Many people are tired of hearing you talking constantly about being change."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21256,
        "fields": {
            "answer": 20731,
            "candidate": 202,
            "answer_feedback": "It's true that you have a large support in these states, but perhaps displaying “The Room” is overkill. End of the day you will gain popularity in these states, but again you give the impression of an unserious candidate."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21342,
        "fields": {
            "answer": 20805,
            "candidate": 202,
            "answer_feedback": "Unfortunately immigration is important issue in this elections."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21349,
        "fields": {
            "answer": 21348,
            "candidate": 202,
            "answer_feedback": "You got a little bit of a tragedy on you hands, yeah. This hurts you, but fortunately not as much as when Trump first time brought this up. Don't worry, you still have a chance."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21401,
        "fields": {
            "answer": 21354,
            "candidate": 202,
            "answer_feedback": "This seems to be what people wanted to hear. Everyone seems to be full of hope."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21402,
        "fields": {
            "answer": 21360,
            "candidate": 202,
            "answer_feedback": "We will see if your vision of America will convince people to vote for you."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21403,
        "fields": {
            "answer": 21376,
            "candidate": 202,
            "answer_feedback": "We will see if your vision of America will convince people to vote for you."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21416,
        "fields": {
            "answer": 21415,
            "candidate": 202,
            "answer_feedback": "You walk out of the debate. Trump and Harris stay, but everyone is talking about you. Your base loves it."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21419,
        "fields": {
            "answer": 21418,
            "candidate": 202,
            "answer_feedback": "Your strange facial expression while saying this is not really convincing anyone to vote for you. Most people unfortunately don't know that this was James Dean impression."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21426,
        "fields": {
            "answer": 21305,
            "candidate": 202,
            "answer_feedback": "Wow. Very strong words."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21427,
        "fields": {
            "answer": 21299,
            "candidate": 202,
            "answer_feedback": "It seems to me like you’re the foreign policy expert, Tommy!"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21428,
        "fields": {
            "answer": 21311,
            "candidate": 202,
            "answer_feedback": "It seems to me like you’re the foreign policy expert, Tommy!"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21429,
        "fields": {
            "answer": 21321,
            "candidate": 202,
            "answer_feedback": "It seems to me like you’re the foreign policy expert, Tommy!"
        }
    }
]

campaignTrail_temp.candidate_image_url = "https://gcdnb.pbrd.co/images/yV94c4IHKXqV.jpg?o=1";
campaignTrail_temp.running_mate_image_url = "https://gcdnb.pbrd.co/images/snpH4uB9Miuj.jpg?o=1";
campaignTrail_temp.candidate_last_name = "Wisseau";
campaignTrail_temp.running_mate_last_name = "Sestero";



campaignTrail_temp.jet_data = [{
    "banner_enabled": true,
    "banner_data": {
        "canName": "Wisseau",
        "canImage": "https://gcdnb.pbrd.co/images/yV94c4IHKXqV.jpg?o=1",
        "runName": "Sestero",
        "runImage": "https://gcdnb.pbrd.co/images/snpH4uB9Miuj.jpg?o=1"
    },
    "cyoa_enabled": true,
    "cyoa_data": {},
    "endings_enabled": false,
    "ending_data": {
        "1730662396898": {
            "id": 1730662396898,
            "variable": "2",
            "operator": ">",
            "value": 0,
            "endingImage": "",
            "endingText": "Put ending text here, you can and should use <p>HTML tags</p>!"
        },
        "1730662411874": {
            "id": 1730662411874,
            "variable": 0,
            "operator": ">",
            "value": 0,
            "endingImage": "",
            "endingText": "Put ending text here, you can and should use <p>HTML tags</p>!"
        }
    }
}
]