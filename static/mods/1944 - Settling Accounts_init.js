campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 12,
        "fields": {
            "year": 1944,
            "summary": "<p>In 1864, Abraham Lincoln lost the Civil War. Since then, the North and South have battled every few decades. Now, in 1944, the North battles the fascist dictator of the Confederacy, Jake Featherston. If it loses, Featherston's genocide will sweep across the continent.</p><p>Three men now run to be elected President: Charles La Follette, the incumbent President from the Socialist Party; Thomas Dewey, the young internationalist from the Democratic Party; and Harold Stassen, the populist firebreather rising from the ashes of the irrelevant Republicans.</p><p>Whoever wins the election will have the potential to determine the future of the continent. Will the United States finally defeat the South? Or is it doomed to watch the South rise again and again?</p>",
            "image_url": "https://cdn.imgchest.com/files/b53263e1c964.png",
            "winning_electoral_vote_number": 197,
            "advisor_url": "https://thecampaigntrail.net/static/images/1940advisors.jpeg",
            "recommended_reading": "<p>Most of the lore for this mod was created by Harry Turtledove, not me! When I had to make up my own lore for the questions, I tried to add in new characters in the way Harry Turtledove would (as slightly out-of-place cameos, mostly).</p><p>If you haven't read the books, I highly recommend you do! I'm providing a link below!</p><p>Also, if you manage to win outright as Harold Stassen on anything but cakewalk, make sure to let me know!</p><p>https://www.amazon.com/Settling-Accounts/dp/B074CBPDWT</p>",
            "has_visits": 1,
            "no_electoral_majority_image": "https://thecampaigntrail.net/static/images/1960-no-majority-photo.jpg",
            "creator": "Neo and RouteVenus with writing help from CTA",
            "display_year": "1944 - Settling Accounts",
            "recommended_reading_enabled": true
        }
    }
];

campaignTrail_temp.temp_election_list = [
    {
        "id": 12,
        "year": 1944,
        "is_premium": 0,
        "display_year": "1944 - Settling Accounts"
    }
];

RecReading = true;

campaignTrail_temp.credits = "BrandonCort, with the help of Jet's Mod tool. ";

campaignTrail_temp.achievements = {
    "Fire Jim Curley" : {
        "image" : "https://upload.wikimedia.org/wikipedia/commons/4/4f/James_Michael_Curley.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        "description" : "Drop Curley as La Follette's running mate"
    },
    "A Republican Martyr" : {
        "image" : "https://cdn.imgchest.com/files/33269e37e2bd.png",
        "description" : "Unlock the secret candidate on the Stassen path"
    },
    "Come for the King Best Not Miss" : {
        "image" : "https://cdn.imgchest.com/files/06ff1feb9aa8.png",
        "description" : "Unlock the secret candidate on the Dewey path"
    }
};

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
];

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 11000,
        "fields": {
            "first_name": "Charles",
            "last_name": "La Follette",
            "election": 12,
            "party": "Socialist",
            "state": "Indiana",
            "priority": 1,
            "description": "<p>Charles La Follette is a man defined by other men. His father, Robert, pushed him to enter Socialist politics when he was still a young man. His boss, President Al Smith, forced Charles to give away Houston and Kentucky. Then, when President Smith was killed during a Confederate bombing raid, Charles found the office of President thrust on him. Unfortunately, he is bound by the ever-growing bureaucracy and an increasingly confident Congress.</p><p>What does Charles believe? No one really knows. President Smith once remarked to a reporter that the only thing the average voter knows about La Follette is his last name, and that the New York Times thinks he’s smart. Is he an isolationist like Smith? An internationalist like his cousin? It's for him to decide.</p>",
            "color_hex": "#ff00e3",
            "secondary_color_hex": "#d786ef",
            "is_active": 1,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/7/71/Deputy_Chief_Counsel%2C_Charles_M._LaFollette_leads_the_prosecution_in_the_Judges%27_Trial_%28cropped%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
            "electoral_victory_message": "<h3>Congratulations! You have won the 1940 election.</h3><p>The two-term tradition is broken, and you have four more years. Don't celebrate too much, however. The debate over how far to go in aiding Britain is far from settled, and the draft is already proving controversial. Domestically, the tensions between organized labor and the southern wing of your party are only going to get worse. Good luck!</p>",
            "electoral_loss_message": "<h3>Sorry! You have lost the 1940 election.</h3><p>It seems the controversies of court packing, the recession of '37, and your attempted purge of conservative Democrats all came home to roost. Regardless, you leave office with a record of domestic achievement that will be debated for generations. Willkie has promised not to dismantle the New Deal, but he will be under enormous pressure from his own party to do exactly that.</p>",
            "no_electoral_majority_message": "<h3>Wow! It's headed to Congress!</h3><p>The Electoral College has failed to produce a winner. The contest goes to the House, where the southern Democrats will likely decide things. They are still furious about the purge attempt in '38, and they are not inclined to do you any favors. Good luck!</p>",
            "description_as_running_mate": "'",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 150000,
        "fields": {
            "first_name": "Harold",
            "last_name": "Stassen",
            "election": 12,
            "party": "Republican",
            "state": "Minnesota",
            "priority": 2,
            "description": "<div style='height: 230px; overflow: auto; margin-top: -1em'><p>There was once a time when the Republican Party was the party of new ideas. The party that would change the paradigm of American politics and shatter the slavocrats that had taken it for granted. The party that would stick up for the common man, no matter his skin color. Those Republicans are no more; President Lincoln dug their grave during the Civil War, and President Blaine buried them during the Second Mexican War. Anyone who knows anything knows that the Republicans are a dead party, the last remnants of a movement that could’ve been great.</p><p>Harold Stassen knows the Republicans have nowhere to go but up; he won the love of the party after giving a spirited defense of both Presidents Blaine and Lincoln. The former governor of Minnesota, he made the news in 1941 when he resigned his commission to defend America from the rampaging Confederate hordes. An opponent of isolationism, ardent defender of unions, and fierce opponent of the South, he promises to do what the Socialists never could and end the Southern threat. Permanently.</p></div>",
            "color_hex": "#ff0000",
            "secondary_color_hex": "#ff7889",
            "is_active": 1,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Gov._Harold_E._Stassen_LCCN2016877428_%28cropped%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
            "electoral_victory_message": "<h3>Congratulations! You have won the 1940 election.</h3><p>Congratulations! You have defeated Franklin Roosevelt and ended the third term before it started. Nobody saw this coming when you walked into the Republican convention four months ago. Your first order of business will be the crisis in Europe. Churchill is desperate for American aid, and Congress will be watching closely to see how far you go. The New Deal programs are likely here to stay in some form, whatever congressional Republicans might prefer. Good luck!\n</p>",
            "electoral_loss_message": "<h3>Sorry! You have lost the 1940 election.</h3><p>Ultimately, the power of incumbency and the war scare in Europe were just a little too much to overcome. You ran a strong campaign for a man with no political experience, and you've established yourself as a figure of real national prominence. What will you do now?  You could run for senate, complete your take-over of the Republican party, or simply promote your ideals as a private citizen. Good luck!</p>",
            "no_electoral_majority_message": "<h3>Wow! It's headed to Congress!</h3><p>No candidate has won a majority in the Electoral College, and the contest moves to the House of Representatives. The southern Democrats hold the balance of power, and they have grievances with Roosevelt going back to the court packing fight and the '38 purge. Whether they are willing to hand the presidency to a Republican to settle those scores remains to be seen. Good luck!</p>",
            "description_as_running_mate": "'",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 11001,
        "fields": {
            "first_name": "Thomas",
            "last_name": "Dewey",
            "election": 12,
            "party": "Democratic",
            "state": "New York",
            "priority": 3,
            "description": "<p>Thomas Dewey, popular Governor of New York, has taken hold of the Democratic Party. He intends to forge it into something new. Something different. Something that will change the paradigm of North American politics. Dewey has ridden a wave of popular anger with the South and promises to do what the Socialists never could and end the Southern threat. Permanently.</p><p>If Robert Taft were still alive, Dewey never would’ve won the nomination. But he’s dead, killed by a people bomber in Philadelphia. Once the dominant faction in the Democratic Party, the isolationist wing Taft led is scattered and uncertain. The time for Dewey and his internationalist supporters is now. To win in the general election, Dewey will have to carefully balance the concerns of isolationist Democrats with his grand visions for the future of the continent.</p>",
            "color_hex": "#0015c6",
            "secondary_color_hex": "#a5abff",
            "is_active": 1,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/1/18/Thomas_Dewey_Waving_from_Train.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
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
        "pk": 11003,
        "fields": {
            "first_name": "Roger ",
            "last_name": "Babson/Others",
            "election": 12,
            "party": "Prohibition",
            "state": "Massachusetts",
            "priority": 4,
            "description": "'",
            "color_hex": "#ffff00",
            "secondary_color_hex": "#A1FFA1",
            "is_active": 0,
            "image_url": "'",
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
        "pk": 11005,
        "fields": {
            "first_name": "Harry",
            "last_name": "Truman",
            "election": 12,
            "party": "Democrat",
            "state": "Missouri",
            "priority": 5,
            "description": "'",
            "color_hex": "#0000ff",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Harry_S._Truman%28_%29_LCCN2016890263_Crop.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>Unfortunately, if you want the nomination, you’ll have to accept Harry Truman as your running mate. Harry is a Senator from Missouri and has been one of the most vocal supporters of occupying and dissolving the Confederacy after the war. He also plays well with party elites, which is why they are forcing him on you. Truman has a few pet ideological issues he refuses to compromise on: the first is healthcare, and the second is ensuring the South never rises again. So long as you agree with him, he’ll be a boon to the ticket.</p><p>That said, Harry Truman is disturbingly good at speaking in front of crowds across the nation. He stumped for Democratic politicians across the nation during the midterms in 1942, and the public loved him. You are going to need to be very careful of his ever-increasing popularity. If he ever ends up more popular with the people than you, party elites may be tempted to jettison you from the ticket and replace him with a man loyal to them.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 11004,
        "fields": {
            "first_name": "William B.",
            "last_name": "Bankhead",
            "election": 12,
            "party": "Democrat",
            "state": "Alabama",
            "priority": 6,
            "description": "'",
            "color_hex": "#0000ff",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://thecampaigntrail.net/static/images/Bankhead-1940.png",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>William Bankhead is the powerful Speaker of the House and one of the most respected figures in the Democratic Party. His selection would soothe Southern conservatives grown restless under Roosevelt's second term, shoring up the Solid South at a moment when the New Deal has strained those loyalties. </p><p>However, Bankhead is in poor health, and his association with the party's conservative wing may dampen enthusiasm among the labor and progressive voters Roosevelt will need to turn out in large numbers to win an unprecedented third term.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 11008,
        "fields": {
            "first_name": "Kenneth",
            "last_name": "Wherry",
            "election": 12,
            "party": "Republican",
            "state": "Nebraska",
            "priority": 7,
            "description": "'",
            "color_hex": "#ff0000",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/7/78/Kenneth_Wherry%2C_Repub._Nat%27l._Committeeman_from_Nebraska%2C_April_1940_LCCN2016877363_%283x4a%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>Kenneth Wherry is the grumpy old senator from Nebraska. Kenneth hates the war with the Confederacy, and he hates the suggestion that the United States should annex the South more. An ardent isolationist, Senator Wherry once filibustered a bill that would send aid to famine-ridden Hungary for more than twenty-eight hours. He vigorously opposes any further aid or support to the United States’ allies in Europe. Wherry is also an economic conservative; he was responsible for many of the cuts made to Blackford’s welfare programs.</p><p>Wherry is a unique figure in the Republican Party; he maintains a large amount of bipartisan support in Nebraska and the Great Plains at large. If you plan on running an economically conservative, isolationist campaign, then Kenneth is your man.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 11006,
        "fields": {
            "first_name": "Arthur W.",
            "last_name": "Mitchell",
            "election": 12,
            "party": "Republican",
            "state": "Illinois",
            "priority": 7,
            "description": "'",
            "color_hex": "#ff0000",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Arthur_W._Mitchell.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<div style='height: 230px; overflow: auto; margin-top: -1em'><p>Arthur is a Black politician from Chicago. He’s famous for speaking in favor of the plight of the Black population in America, both in the North and the South. It was because of his politicking that President Blackford signed a law banning poll taxes in the United States, to the dislike of many culturally conservative (racist) Americans. Arthur was also a big supporter of President Blackford’s welfare and bureaucratic council expansions, despite being a Republican, marking him on the leftward end of the economic spectrum.</p><p>The Republican Party has always had the support of most Black Americans; if you want to lock down their support this November, choosing Arthur as your running mate is the best way to do it. He’d be a historic choice in the best and worst way: he’d be the first non-white man to run for the office of Vice President, and racists across the country might view your ticket with caution. That said, if you want to make progress on civil rights and push the country left on economics, Arthur is a great choice.</p></div>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 11009,
        "fields": {
            "first_name": "Meyer",
            "last_name": "London",
            "election": 12,
            "party": "Socialist",
            "state": "California",
            "priority": 9,
            "description": "'",
            "color_hex": "#ff00d5",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Meyer_London_%28cropped%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<div style='height: 230px; overflow: auto; margin-top: -1em'><p>Currently the junior Senator from California, Meyer London is a Jewish-Lithuanian immigrant who first became known as the lawyer who defended the Communist Ladies Garment Union during their 1910 strike. Since then, he has become an ardent defender of unions and Marxian economics. He hails from the left end of the Socialist Party and has been pushing hard in the past years for the party to stop abandoning its Marxian principles. London is also an ardent isolationist, being the sole vote against fighting the Confederacy in the Great War.</p><p>Getting rid of Jim Curley and replacing him with a Marxian isolationist would make it clear exactly what type of campaign you intend on running. London would help you on the West Coast, if you plan on competing there, and also in the more isolationist Great Plains. But his Marxian economic theories are divisive at best. If you want to shake up the campaign and emphasize the isolationist and Marxian origins of the Socialist Party, London is your man.</p></div>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 1010,
        "fields": {
            "first_name": "Henry L.",
            "last_name": "Stimson",
            "election": 12,
            "party": "Republican",
            "state": "Pennsylvania",
            "priority": 10,
            "description": "'",
            "color_hex": "#ff0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Henry_Lewis_Stimson_1944.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>Henry is one of the leading modern Republican voices. An ardent internationalist, he was sounding the alarm of an incoming invasion from Dixieland well before anyone else expected it. Now his pet issue has become worrying about the Japanese Empire in the Pacific; he encourages any who’ll listen that the world needs to create a multinational organization to ensure no third Great War ever breaks out.</p><p>Stimson has the reputation as a bit of an elder statesman in the Republican Party, and his ideas are always treated seriously. If you choose him to be your running mate, many would criticize his lack of experience in government. Still, if you want an ardent internationalist who allows you to be flexible on other issues, Henry is your man.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 1011,
        "fields": {
            "first_name": "John W. ",
            "last_name": "Bricker",
            "election": 12,
            "party": "Democrat",
            "state": "Ohio",
            "priority": 11,
            "description": "'",
            "color_hex": "#ff0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://thecampaigntrail.net/static/images/Bricker-1940.png",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 1012,
        "fields": {
            "first_name": "Raymond E.",
            "last_name": "Baldwin",
            "election": 12,
            "party": "Republican",
            "state": "Connecticut",
            "priority": 12,
            "description": "'",
            "color_hex": "#ff0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://thecampaigntrail.net/static/images/Baldwin-1940.png",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>Raymond Baldwin is the recently elected Governor of Connecticut, a liberal internationalist and one of Willkie's most prominent convention backers -- indeed his own preferred choice for the vice presidency. His progressive Yankee Republicanism is well suited to appealing to the urban voters Willkie will need to peel away from Roosevelt. </p><p>He is, however, a relatively obscure figure nationally, and brings little institutional heft to a ticket that might benefit from a running mate who can reassure voters there are steady hands somewhere on board.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 1014,
        "fields": {
            "first_name": "Flora",
            "last_name": "Blackford",
            "election": 12,
            "party": "Socialist",
            "state": "New York",
            "priority": 14,
            "description": "'",
            "color_hex": "#ff0080",
            "secondary_color_hex": "#FFFFC0",
            "is_active": 0,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Emily_Sophie_Brown_1921.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<div style='height: 230px; overflow: auto; margin-top: -1em'><p>A longtime Socialist representative from New York City, Flora is one of the most well-known names in Congress. She served as the First Lady when her husband, Hosea Blackford, was elected President; then, after his death, she was reelected to represent her district. Called “The Conscience of Congress,” she is well known for pushing the government to aid Blacks trapped in the Confederacy. Flora also enjoys bipartisan support, with many Democrats growing to like her despite her Marxist tendencies.</p><p>If you replace Jim Curley with Flora Blackford, expect to see a boost in the larger industrial cities throughout the North, and a decline of your support in Jim’s native New England. You’ll have to agree to let Flora have some control over your platform, as she’ll force you to speak out against the mass slaughter Featherston is carrying out. Much of the Great Plains also associates Flora with her late husband’s administration, which let the Dust Bowl run rampant at the end of his administration. If you want to shake things up, but not too much, Flora Blackford is a great choice.</p></div>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 1015,
        "fields": {
            "first_name": "Jim ",
            "last_name": "Curley",
            "election": 12,
            "party": "Socialist",
            "state": "Massachusetts",
            "priority": 15,
            "description": "'",
            "color_hex": "#ff00eb",
            "secondary_color_hex": "#A1FFA1",
            "is_active": 0,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/4/4f/James_Michael_Curley.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>James ‘Jim’ Michael Curley is a powerful politician from Boston, Massachusetts. He served four terms as Mayor of Boston prior to running to represent Boston in Congress. Jim is especially popular with ethnic whites and fellow Roman Catholics. After Al Smith was killed in a Confederate bombing raid, Congress chose him to become your Vice President. Since then, he’s been an irreplaceable part of your administration, helping you to balance your obligations as President and as leader of the Socialist Party of America.</p><p>Jim isn’t without his fair share of baggage. Accusations of criminal activity, bribery, and general corruption shadow him wherever he goes. If you choose to run alongside Jim, you should expect these rumors of corruption to grow. Many white Protestants also dislike the idea of electing a Roman Catholic within a breath of the Presidency. If you want a solid partner in government, and to lock down your support in New England, you can’t do better than Jim.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 150001,
        "fields": {
            "first_name": "Douglas",
            "last_name": "MacArthur",
            "election": 12,
            "party": "Yankeecrat",
            "state": "Arkansas",
            "priority": 1,
            "description": "'",
            "color_hex": "#a73c00",
            "secondary_color_hex": "#c78454",
            "is_active": 0,
            "image_url": "'",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "Majority?",
            "description_as_running_mate": "'",
            "candidate_score": 1,
            "running_mate": false
        }
    }
];

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 194001,
        "fields": {
            "candidate": 11000,
            "running_mate": 1015
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 194002,
        "fields": {
            "candidate": 11000,
            "running_mate": 1014
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 194003,
        "fields": {
            "candidate": 11000,
            "running_mate": 11009
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 194004,
        "fields": {
            "candidate": 11001,
            "running_mate": 11005
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 194006,
        "fields": {
            "candidate": 150000,
            "running_mate": 11006
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 194007,
        "fields": {
            "candidate": 150000,
            "running_mate": 11008
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 194008,
        "fields": {
            "candidate": 150000,
            "running_mate": 1010
        }
    }
];

campaignTrail_temp.opponents_default_json = [
    {
        "election": 12,
        "candidates": [
            11000,
            150000,
            11001,
            11003,
            150001
        ]
    }
];

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 12,
        "candidates": [
            11000,
            150000,
            11001,
            11003,
            150001
        ]
    }
];

campaignTrail_temp.modBoxTheme = {
    "header_color": "#5d0519",
    "header_text_color": "#ffffff",
    "header_text_shadow": "1px 1px 2px rgba(0, 0, 0, 0.7)",
    "description_background_color": "#eee1e3",
    "description_text_color": "#000000",
    "main_color": "#e5d1d5",
    "secondary_color": "#a05665",
    "secondary_hover_color": "#ae6f7c",
    "scrollbar_color": "#a05665 #e5d1d5",
    "scrollbar_width": "auto",
    "image_border": "4px solid #111827",
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
    "bannerImageUrl": "https://cdn.imgchest.com/files/b53263e1c964.png",
    "backgroundImageUrl": "https://assets.penguinrandomhouse.com/series-images/series-SVA-triad.png",
    "gameTitle": "THE CAMPAIGN TRAIL",
    "customQuote": "",
    "quoteTextColor": "#ffffff",
    "endingTextColor": "#000000",
    "modBoxTheme": {
        "header_color": "#5d0519",
        "header_text_color": "#ffffff",
        "header_image_url": "",
        "header_text_shadow": "1px 1px 2px rgba(0, 0, 0, 0.7)",
        "header_font": "",
        "header_margin": "",
        "description_background_color": "#eee1e3",
        "description_text_color": "#000000",
        "main_color": "#e5d1d5",
        "secondary_color": "#a05665",
        "secondary_hover_color": "#ae6f7c",
        "scrollbar_color": "#a05665 #e5d1d5",
        "scrollbar_width": "auto",
        "image_border": "4px solid #111827",
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
	  
	  #results_container .person_image {
          width: 230px;
          object-fit: cover;
      }

	  .person_image img {
        object-fit: cover;
		object-position: top;
      }
    `;
    document.head.appendChild(style);
}



const theme = nct_stuff.themes[nct_stuff.selectedTheme];

// define / override theme values
theme.coloring_title     = "#700016";
theme.coloring_window    = "#bfe6ff";
theme.coloring_container = "#ffffff";
theme.header_image = "https://cdn.imgchest.com/files/b53263e1c964.png";
theme.body_background = "https://assets.penguinrandomhouse.com/series-images/series-SVA-triad.png";

applyTheme(theme);
//#endcode
