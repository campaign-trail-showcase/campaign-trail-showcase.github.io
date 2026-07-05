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
    name: "Gresham",
    tracklist: [
      {
        "name": "<i>Rienzi</i> overture, Wagner",
        "url": "https://audio.jukehost.co.uk/019ebed7-fc7a-71f6-bae6-0edea395a700"
      }
    ]
  }
}

// Set up new music player

newMusicPlayer()

campaignTrail_temp.questions_json = [
    {
        "model": "campaign_trail.question",
        "pk": 1042,
        "fields": {
            "priority": 1,
            "description": "Four years ago, you were able to wrench a few Western states from Conkling for the Greenbackers, but he struggled to overcome sectional loyalties, failing to make inroads with the poor farmers of the South or urban labor. The capture of both parties by hard-money bankers and railroad interests has left many in your movement hopeful of an even greater performance this year. While you hope to unite the farmer and labor elements, you also know that a movement cannot have two backbones. Where should we hold the convention, and who should we invite?\n\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1044,
        "fields": {
            "priority": 2,
            "description": "Who could bestow upon the fledgling party the most legitimacy? The answer is clear -- Judge Walter Gresham of Indiana, famous for his integrity, war valor, and pro-labor rulings, is the one man with such a reputation and such a distaste for the two major parties. Republican orator Robert Ingersoll and Indiana Senator Daniel Voorhees have privately confirmed to you that they could get behind a Gresham candidacy. There’s just one problem -- the currency. Gresham has a reputation as a ‘sound money’ man, while the Populist movement is built around currency reform. Some propose free coinage of silver on the same basis as gold, while others reject a specie-based system entirely in favor of a fiat system. Will you try to guide the convention proceedings regarding the currency?\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1043,
        "fields": {
            "priority": 2,
            "description": "With the currency plank handled, you can turn to other economic concerns. What other plank do you want to emphasize?\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1045,
        "fields": {
            "priority": 3,
            "description": "You receive a telegram; you cannot say, exactly, what message you hoped to find within. As you read the short note, you feel calm. You turned it down multiple times, knowing this might happen anyway. You never rejected them too firmly, believing they had a right to elevate whatever man they saw fit. The Populists have chosen you to carry their cause into November. Somehow, the nomination was unanimous. Apparently, they believe in you quite a bit.\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1046,
        "fields": {
            "priority": 4,
            "description": "Seeing the nomination of a civil service reformer as inevitable, Conkling’s men threw their support to Senator Henry W. Blair of New Hampshire, both to deny Blaine a comeback and to keep the spirit of social reform alive. Blair’s signature issue is education, having introduced a bill into Congress to spend down the surplus by distributing funds to the states for public education, with the poor states of the South being the biggest potential beneficiaries -- he has argued that such a plan would put the nation on a path to racial and sectional reconciliation. How will you attack Blair and the Republicans this year?\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1051,
        "fields": {
            "priority": 5,
            "description": "The nomination of William F. Vilas at the head of the Democratic ticket represents a step back from four years ago, when the party gambled on the anti-monopolist Palmer. Vilas sees the economy as guided by natural laws, and that government regulation leads almost always to inefficiency and poverty. On civil service reform and tariff reduction you agree, but on the fundamental question of the emerging plutocracy, you couldn’t be more different. The party has a sizable inflationist wing, however, that was trodden over at the convention, who now eye your candidacy with interest. How will you address the Democracy this election?\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1055,
        "fields": {
            "priority": 6,
            "description": "The convention has gambled by choosing Evander Law as your running mate. A former Confederate general who was present at Gettysburg and Chickamauga, his connection to the agrarian movement in the South and passion for education before and after the war made him a good fit for this moment. Law is proud, however, which led to his arrest at one point by Longsteet for insubordination -- a charge that might have ruined his own reputation in the South, had Longstreet not later ruined his own there by supporting Reconstruction. How will you deploy him?\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1052,
        "fields": {
            "priority": 6,
            "description": "While fusing with the Republicans in the South and with the Democrats out West could in theory bring more states into play, Greenbacker veterans are dead-set against diluting the movement, arguing also that fusion would expose the party to sectional attacks. What overall fusion strategy should we pursue?\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1077,
        "fields": {
            "priority": 6,
            "description": "One thing is clear -- to disrupt a two-party system that commands such loyalty from voters, you’re going to need to fight tooth and nail for every vote. With the wealthier states of the Northeast and Middle West seen as safe for the two parties, you’ve planned a swing around the country -- from Indianapolis into the South, then out West, then back home. You could have had a quiet life as a judge, but your countrymen demanded more of you.\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1065,
        "fields": {
            "priority": 7,
            "description": "With Conkling’s death, the forces opposing reform were scattered, and the Hawley Civil Service Act, basing hiring on merit rather than patronage and protecting officeholders from political firings, glided through Congress and earned President Foster’s signature quickly.\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1059,
        "fields": {
            "priority": 7,
            "description": "Baltimore is your first stop. As a major port, tariff policy gets top billing here, but the Maryland Democracy has protested Vilas’ free-trade stance. The state is dominated by the powerful Senator Gorman, who has proven far more difficult to dislodge than the other protectionist Democrats. How will you approach the tariff?\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1057,
        "fields": {
            "priority": 7,
            "description": "With almost half of its population illiterate, and spending annually just half a million dollars annually on public education for a population of one and a half million, North Carolina has been at the forefront of the Blair bill debate. Both of the state’s Democratic senators support the bill, as well as most of its population. In Wilmington, a poor town roughly equally divided between White and Negro, you plan to give a speech outlining your stance towards the bill.\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1053,
        "fields": {
            "priority": 7,
            "description": "While your party’s message advocates for both the white and black poor, most Southern Negroes are strongly loyal to the party of Lincoln. Republican Henry McNeil Turner, the first Southern bishop of the African Methodist Episcopal Church, was deeply embittered in the failure of Reconstruction, and supported Conkling’s Liberia scheme as a way for Negroes to escape one-party Democratic rule. An endorsement could go a long way.\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1060,
        "fields": {
            "priority": 7,
            "description": "CANAL FIASCO EXPOSED, scream the headlines. It appears that someone on the Senate Foreign Relations Committee did some digging, and learned that Conkling’s Nicaragua Canal has descended into a malaria-plagued nightmare, embarrassing both the Republicans and Senator John Morgan of Alabama, one of the canal’s foremost advocates. While Morgan isn’t naming names, his suspicions are clear to those in the know. Already frustrated at Vilas’ goldbug stance, this was one blow too many; he’s also made it clear that delivering Alabama to Vilas this November is hardly a priority. This does raise questions about foreign policy; in what direction would you push the nation on this issue?\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1068,
        "fields": {
            "priority": 7,
            "description": "In Mississippi, you see some of the worst poverty yet. With few banks, little credit, and little circulating cash, the merchant who supplies penniless farmers with supplies on credit is powerful indeed, holding the lives of dozens, if not hundreds, of struggling souls in his little ledger. The deflationary pressure of the gold standard means that a bale of cotton sells for less each year. Far from the ‘hard money’ consensus in both parties, here inflationist ideas of all kinds, from greenbackism to free silver, give the poor hope of one day being able to pay their debts. Meanwhile, demagogues build support to rewrite the state Constitution to sharply limit the ballot, which could permanently cripple the Populists. \n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1069,
        "fields": {
            "priority": 7,
            "description": "In Texas, the Farmers’ Alliance took root, and has been embarking on a tenuous effort to build a statewide farmers’ cooperative to increase their own bargaining power relative to the railroads and the bankers. Where do you want to speak in the state?\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1063,
        "fields": {
            "priority": 7,
            "description": "As you travel through the Southwest, far from the centers of Republican power, you read of a series of violent outbreaks with dread. Gangs of flamboyant men still loyal to Conkling’s vision have been tyrannizing your supporters in GOP strongholds. Not even the Democrats were willing to do what you’re proposing -- putting a former Confederate a heartbeat from the presidency. Orators are harried out of town in the name of patriotism, the signature evergreen sprigs of the people’s movement stomped into the ground.\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1066,
        "fields": {
            "priority": -7,
            "description": "California is as beautiful as they say; rolling hills, endless sun, waves of the tranquil Pacific lapping lazily on the shores. But the beautiful landscape hides deep tensions between the newest settlers of this rich soil. White and Chinese settlers were drawn alike by tales of gold, but with the mines running dry and jobs going with them, violence has erupted. White mobs have lynched scores of Chinese laborers, driving many more fleeing back to the Celestial Empire. Conkling signed the Chinese Exclusion Act in his first term, reflecting the popular sentiment that White and Chinese are too alike to coexist. How will you address immigration in your speeches?\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1067,
        "fields": {
            "priority": -6,
            "description": "As you swing back East through the mountain states, you hear the same two words over and over again. To many out here, ‘free silver’ means easy money and full employment for the workers, and big profits for the mine owners. The Eastern financial establishment dismisses the idea as radically destabilizing, while veteran Greenbackers argue that debates over what metal to back the currency with are a ruse to herd the discussion away from the real solution of fiat currency. Strong tension exists between you and the party -- many of them view currency reform as essential, but were willing to stop short of endorsing free silver in the platform to get you on the ticket. How will you approach the silver issue?\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1071,
        "fields": {
            "priority": -5,
            "description": "Kansas should be fertile ground for the Populist message, but section, not ideology, still dominates the party system for many. Just as loyalty to the ‘party of the fathers’ circumscribes your influence in the South, so does loyalty to the party that saved the union restrict your appeal up North. To compete with your speech, the local Grand Army of the Republic chapter is hosting a veterans’ event across town, where they will inevitably accuse the Populists of being a Democratic scheme to topple Republicans, gut pensions, and return the party of treason to power. How will you win these voters over?\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1072,
        "fields": {
            "priority": -4,
            "description": "In Minneapolis, social reform predominates over economic; Frances Willard’s powerful Women’s Christian Temperance Union had a productive partnership with President Conkling for a few years, and they pushed strongly for the temperate Blair to win the nomination. But the beer-drinkers’ reaction against the bottle-snatchers has been fierce, and Vilas has made hay of the issue. To what degree will we engage in social debates?\n\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1074,
        "fields": {
            "priority": -3,
            "description": "In Iowa, regulation is the major question, as farmers seek to weaken the state’s powerful railroads. The Interstate Commerce Commission, created over Conkling’s objections, seeks to limit rate discrimination against smaller farmers and businessmen. What stance will you take on business regulation generally?\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1073,
        "fields": {
            "priority": -3,
            "description": "As you pull into Chicago, you contemplate the tragedy of organized labor in the past few years. Jay Gould soundly crushed the Great Southwest Strike with President Conkling’s approval, the attempt to unionize the sugarcane workers in Thibodeaux, Louisiana descended into a race massacre, and the Haymarket Affair here in Chicago discredited the labor movement as violent anarchists in the minds of many. Terence Powderly struggles to keep the Knights of Labor organized as membership crashes, while an organizer named Samuel Gompers has directed his American Federation of Labor cautiously and conservatively, seeking incremental gains instead of a grand realignment of power. The groups feud, making cooperation with both unlikely. Will you attempt to work with either?\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1075,
        "fields": {
            "priority": -2,
            "description": "You’ve been reading Populist papers from around the country to keep abreast of developments in the movement. As you flip through the Progressive Farmer, North Carolina’s leading Populist paper, a story catches your eye.\nNEGRO SCHOOL DESTROYED BY MOB\nFAYETTEVILLE: The State Colored Normal School was burned by a mob yesterday. The mob accused the teachers of stockpiling arms in preparation for a ‘Negro insurrection’ to be carried out soon. Order is currently restored but information is difficult to come by. Unknown dead.\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1076,
        "fields": {
            "priority": -1,
            "description": "Returning to Indianapolis, you feel exhausted. When you began this campaign you enjoyed a place of respect among the American public; the last few months you have been slandered as a radical, a Dixie Trojan horse, a Northern interloper, a socialist, a naive tool of destabilizing agents, a man who threw away the company of the high and mighty to preach to the illiterate and the barefoot. The two-party system has proven resilient, as Blair and Vilas meet for a ‘cordial’ debate in New York without your name being so much as mentioned. Only the most naive harbor hopes of an outright victory, and the rest bicker over what to do in case of a deadlock. In the dying days of the campaign, what will you say to those who have gathered outside your house?\n\n",
            "likelihood": 1
        }
    }
]

campaignTrail_temp.answers_json = [
    {
        "model": "campaign_trail.answer",
        "pk": 5139,
        "fields": {
            "question": 1042,
            "description": "Dallas, near the heart of the Farmers’ Alliance. The Alliance provides the necessary infrastructure to reach the farmers of the South and West. They will be the core of our effort. \n\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5142,
        "fields": {
            "question": 1042,
            "description": "Cincinnati; we cannot hope for success in the biggest states without organized labor behind us. Labor will control the convention and the platform.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5143,
        "fields": {
            "question": 1043,
            "description": "Protection is a form of class legislation that impoverishes the farmer and the laborer to fill the pockets of the plutocrats; we stand for a significant reduction in tariffs.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5144,
        "fields": {
            "question": 1043,
            "description": "In the face of the concentrated Wealth Power that infects our government and encroaches on our liberties, we consider righteous and justified the dissolution of the largest trusts in the course of self-defense.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5145,
        "fields": {
            "question": 1043,
            "description": "The public land is to belong to the public; to actual settlers, not the railroads. Both parties have made promises; both parties have failed. We will restore the public land to its rightful owners.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5147,
        "fields": {
            "question": 1044,
            "description": "The plutocracy is built on a foundation of limited cash and usurious credit; nothing less than the end of metallic standards seriously threatens it. We can educate Gresham on the matter as we go; he’ll come around.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5149,
        "fields": {
            "question": 1044,
            "description": "Greenbackism is a bridge too far, but the free coinage of silver keeps the currency on a metallic basis while expanding circulation to fulfill the needs of an expanding population. \n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5151,
        "fields": {
            "question": 1045,
            "description": "I did not seek it, but if called on...\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5155,
        "fields": {
            "question": 1046,
            "description": "Blair has been a loyal foot-soldier in the GOP as it leads us down the road to plutocracy; he has opposed reform of the currency, he has opposed reform of the tariff, and he has opposed reform of the trusts. He is not for the masses.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5156,
        "fields": {
            "question": 1046,
            "description": "Once I called myself a Republican, when that party was led by men of strong republican virtue; today it is unworthy of that name, rotted through with corruption. That party cannot hope to redeem itself except through the self-reflection and self-righting that follows defeat.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5157,
        "fields": {
            "question": 1046,
            "description": "If we attack Blair too harshly, we’ll play into Northern suspicions that we are simply the radical element of the Democracy fighting under a different banner. We will run more positively in places where we compete with Blair.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5170,
        "fields": {
            "question": 1051,
            "description": "We must remember that many of our potential voters -- poor Southerners and urban laborers -- still feel a strong allegiance to the ‘party of the fathers.’ It’d be best to burn fewer bridges, and direct our attacks more at the Republicans.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5172,
        "fields": {
            "question": 1051,
            "description": "The party of the common man has become as captured by the money power, the railroads, and the trusts as the Grand Old Party, as the coronation of the Bourbon Vilas proves. Both are for the ‘classes’ -- only our ticket speaks for the masses.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5173,
        "fields": {
            "question": 1052,
            "description": "We will pursue fusion wherever we can get it, even if that means dropping off of some tickets ourselves; that is how we make the biggest impact.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5174,
        "fields": {
            "question": 1052,
            "description": "In the South, we will pursue fusion with the Republicans on a pro-Blair bill ticket. Fusing with Western Democrats would open us up to sectional attacks across the North.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5175,
        "fields": {
            "question": 1052,
            "description": "In the West, we will fuse with the Democrats opposed to the goldbug Vilas. Southern Republicans are too loyal to Conkling’s memory, and to his heir.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5176,
        "fields": {
            "question": 1053,
            "description": "Let’s meet with Turner and talk about my support for the Blair bill, along with the Populist platform; he knows how poverty oppresses the Negro as much as any law.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5184,
        "fields": {
            "question": 1055,
            "description": "The roots of the Farmers’ Alliance still penetrate only shallowly into the Florida soil. Let him focus on building up the agrarian movement, and support for our ticket, there.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5189,
        "fields": {
            "question": 1057,
            "description": "We can outflank Blair here. His proposal calls for schooling of both races on a ‘separate but equal’ basis’ -- a sad abandonment of the dreams of decades past.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5190,
        "fields": {
            "question": 1057,
            "description": "The bill is just; if heavy taxation is to be laid on the whole country to benefit the Northern manufacturers, and a surplus develops, can anyone cry foul if some of that surplus is returned to the most impoverished region of the country?\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5191,
        "fields": {
            "question": 1057,
            "description": "I support the bill, but it needs stronger federal supervision of funds. It is too easy, in its current conception, for the states to use the money irresponsibly.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5196,
        "fields": {
            "question": 1059,
            "description": "‘Protection’ is vampirism. Under Conkling, the federal government became not even a Hamltonian scheme for protecting industry, but an instrument of the classes for the increase of their own wealth at the expense of the masses. The apparatus that props up the prices of the necessaries of life, and impoverishes the buyer, must be destroyed.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5197,
        "fields": {
            "question": 1059,
            "description": "We aim to pull from both parties; getting ensnared in the tariff trap will distract from our main appeals. I will focus on it little.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5198,
        "fields": {
            "question": 1059,
            "description": "The surplus is such that we can demand a moderate relaxation of duties. We can protect our industries and our laborers without placing excessive burdens on the people.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5200,
        "fields": {
            "question": 1060,
            "description": "In today’s plutocracy, the government is made the agent of private economic interests; projects are funded with the public money, but their management is hidden from the public. \n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5201,
        "fields": {
            "question": 1060,
            "description": "Many threats we have seen to the founding virtues of the republic, but few so insidious as the abandonment in search of empire. Let this misadventure serve as a lesson to those arsonists who have forgotten what kind of nation we were intended to be.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5202,
        "fields": {
            "question": 1060,
            "description": "The canal is a disaster, but many of our friends in the South and West supported it. Maybe we had best say little here.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5214,
        "fields": {
            "question": 1063,
            "description": "Picking on the weak, while I’m on the other side of the country...rotten curs.\n\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5221,
        "fields": {
            "question": 1065,
            "description": " A victory for men of firm principles, and a great tragedy for the deadheads.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5224,
        "fields": {
            "question": 1066,
            "description": "We must pursue a moderate course on immigration. Those who cannot coexist with Americans must surely be kept out, but immigrants make up a great number of this nation’s toilers in the factories and the fields. \n\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5225,
        "fields": {
            "question": 1066,
            "description": "The foreign pauper is the ace up the sleeve of the Plutocracy -- when it needs someone to break the strike, or to take the job for less, or to prop up their corrupt machinery, they throw the gates wide open. The workingman will never win a fair round until the cheating is ended. \n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5227,
        "fields": {
            "question": 1067,
            "description": "Privately, I am still unsure of such an experiment. But the leading theorists of the party are convinced that the money issue is at the rotten heart of the plutocracy. I’ll come out for free silver, and trust in their analysis.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5228,
        "fields": {
            "question": 1067,
            "description": "I cannot change course here. I am for honest and fair government first and foremost, and a nation that experiments with, and devalues, its currency has no one’s trust. The limited silver plank in the platform will have to be enough.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5232,
        "fields": {
            "question": 1068,
            "description": " The South teeters on the precipice, and only I can get it off.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5235,
        "fields": {
            "question": 1069,
            "description": "At the Texas Exchange in Dallas. The cooperative movement shows what is possible when the people unite against the wealth power; our political movement extends from the same principle.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5236,
        "fields": {
            "question": 1069,
            "description": "Houston is a thriving hub of commerce, with links to the whole South. I will speak there.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5237,
        "fields": {
            "question": 1069,
            "description": "Our strongest support is in the West; El Paso is a fitting place to speak, and be photographed amid the red rocks.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5245,
        "fields": {
            "question": 1071,
            "description": "Who dares challenge my patriotism? I walked into Atlanta on two legs; I left with one shattered by a Confederate musket-ball. If they call me disloyal, let them say it to my face.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5246,
        "fields": {
            "question": 1072,
            "description": "Alcohol saps the vitality of man, and ruins his family, to enrich the whiskey trust. This, like all other schemes oppressing the plain people, must be defeated.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5250,
        "fields": {
            "question": 1073,
            "description": "Weakened as they are, the K of L offer the only possible inroad with urban Catholics. We’ll need to reach out to Powderly.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5253,
        "fields": {
            "question": 1074,
            "description": "Laborers march for an eight-hour day, and by the sweat of their brow they have earned it.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5258,
        "fields": {
            "question": 1076,
            "description": "Democrats and Republicans both invoke the past to avoid the present. Each election, they scratch open the scars of the past to keep our body politic too weak to resist the domination of the wealth power. We propose the only path forward; a rejection of the politics of section, and an embrace of the politics of the masses.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5262,
        "fields": {
            "question": 1077,
            "description": "Could I really deny them?\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20726,
        "fields": {
            "question": 1055,
            "description": "The only way to prove we’re serious about moving past sectionalism is to be seen together, North and South. We’ll meet up with Law for a big event in Atlanta as we pass through.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20975,
        "fields": {
            "question": 1044,
            "description": "We need Gresham on the ticket. We may never have a better opportunity to strike than now, and if we can’t get him, our ticket will be ignored. We must leave currency out of the platform.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20979,
        "fields": {
            "question": 1053,
            "description": "A ‘top-down’ strategy isn’t what we need; we should appeal to the people themselves. If we can get Negro orators from the Colored Farmers’ Alliance to speak for us, we may yet reach a wide crowd.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20989,
        "fields": {
            "question": 1075,
            "description": "The Plutocracy floats along on a river of blood. How far we’ve strayed...\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20993,
        "fields": {
            "question": 1043,
            "description": "The importation of contract labor drives down wages for the workingman; American capital must not be allowed to skirt the needs of American labor by importing the world’s poor.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20995,
        "fields": {
            "question": 1052,
            "description": "Fusion would sap the life out of our movement and make us a fat target for sectional attacks everywhere. We chart our own path.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20997,
        "fields": {
            "question": 1059,
            "description": "The protective system places the greatest burdens on the most humble among us; in the future, we must look to new forms of taxation -- those on land and income rather than consumption, which distribute the burden more fairly.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20999,
        "fields": {
            "question": 1057,
            "description": "Federal funding of education is a sound idea, but the funding to each state should be proportionate to its poverty, not its literacy rate.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21001,
        "fields": {
            "question": 1053,
            "description": "Our best avenue is through the independent Negro papers; let the people know of our candidacy, our platform, and our strength in certain states where the GOP cannot hope to win. \n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21003,
        "fields": {
            "question": 1066,
            "description": "Many urban laborers are immigrants, and we cannot hope to make any inroads in cities without their support. Let’s downplay the platform’s nativist bent.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21005,
        "fields": {
            "question": 1071,
            "description": "It was two great questions that plunged us into war; the questions of race and section. We cannot solve the first without funding for education, but we cannot solve the second so long as the South remains impoverished. This is the way to stability and prosperity for the whole people.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21006,
        "fields": {
            "question": 1071,
            "description": "Just as Lincoln saw, with prophetic vision, the designs of the Slave Power on our republic, so too must we recognize the Money Power; how the Republican party has become a device in the hand of those who wish to crowd out our rights and establish an un-American oligarchy.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21009,
        "fields": {
            "question": 1072,
            "description": "That some Western states have already granted the ballot to women is a sure sign of progress. Linda Slaughter cast a ballot for me at the convention; let her vouch for my commitment to equal suffrage.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21010,
        "fields": {
            "question": 1072,
            "description": "Getting entangled in the social reform movement will only muddy our economic message. We’ll give these debates a wide berth.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21014,
        "fields": {
            "question": 1074,
            "description": "Child labor is a growing scourge. The time has come to protect the most vulnerable among us, wherever they are, with federal regulation.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21015,
        "fields": {
            "question": 1074,
            "description": "Either the railroads will own the people, or the people will own the railroads. We acknowledge this, and support the nationalization of the rails that provide the common transportation and freight of the nation.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21018,
        "fields": {
            "question": 1073,
            "description": "The Knights are on the way out; the AFL can win labor for us without exposing us to accusations of anarchism. Let’s see if we can work something out with Gompers.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21019,
        "fields": {
            "question": 1073,
            "description": "One union is dying, the other is but an infant. Let me simply appeal to the workers directly, promising an alternative to the domination of the two parties.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21023,
        "fields": {
            "question": 1076,
            "description": "For eight years, we have suffered under a party, once great, now thoroughly infected by the forces of greed and of graft. The Republican party must be turned out, and Conklingism rejected.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21024,
        "fields": {
            "question": 1076,
            "description": "The Democracy can ignore us no more. This contest will determine whether the ‘party of the masses’ can turn from its humble supporters and coronate the choice of the railroads without consequence.\n"
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
            "electoral_votes": 10,
            "popular_votes": 154000,
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
            "electoral_votes": 0,
            "popular_votes": 0,
            "poll_closing_time": 1,
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
            "electoral_votes": 0,
            "popular_votes": 0,
            "poll_closing_time": 1,
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
            "electoral_votes": 7,
            "popular_votes": 126000,
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
            "electoral_votes": 8,
            "popular_votes": 197000,
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
            "electoral_votes": 3,
            "popular_votes": 66000,
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
            "electoral_votes": 6,
            "popular_votes": 137000,
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
            "popular_votes": 30000,
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
            "electoral_votes": 4,
            "popular_votes": 60000,
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
            "electoral_votes": 12,
            "popular_votes": 144000,
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
            "electoral_votes": 0,
            "popular_votes": 0,
            "poll_closing_time": 1,
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
            "electoral_votes": 3,
            "popular_votes": 15000,
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
            "electoral_votes": 24,
            "popular_votes": 673000,
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
            "electoral_votes": 15,
            "popular_votes": 495000,
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
            "electoral_votes": 13,
            "popular_votes": 377000,
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
            "electoral_votes": 9,
            "popular_votes": 266000,
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
            "electoral_votes": 13,
            "popular_votes": 276000,
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
            "popular_votes": 109000,
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
            "electoral_votes": 6,
            "popular_votes": 130000,
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
            "electoral_votes": 8,
            "popular_votes": 186000,
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
            "electoral_votes": 14,
            "popular_votes": 303000,
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
            "electoral_votes": 13,
            "popular_votes": 401000,
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
            "electoral_votes": 7,
            "popular_votes": 190000,
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
            "electoral_votes": 9,
            "popular_votes": 121000,
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
            "electoral_votes": 16,
            "popular_votes": 441000,
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
            "popular_votes": 35000,
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
            "popular_votes": 134000,
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
            "electoral_votes": 3,
            "popular_votes": 13000,
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
            "popular_votes": 85000,
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
            "electoral_votes": 9,
            "popular_votes": 261000,
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
            "electoral_votes": 0,
            "popular_votes": 0,
            "poll_closing_time": 1,
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
            "electoral_votes": 36,
            "popular_votes": 1167000,
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
            "electoral_votes": 11,
            "popular_votes": 268000,
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
            "popular_votes": 30000,
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
            "electoral_votes": 23,
            "popular_votes": 785000,
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
            "electoral_votes": 0,
            "popular_votes": 0,
            "poll_closing_time": 1,
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
            "electoral_votes": 3,
            "popular_votes": 53000,
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
            "electoral_votes": 30,
            "popular_votes": 904000,
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
            "popular_votes": 33000,
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
            "popular_votes": 93000,
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
            "electoral_votes": 4,
            "popular_votes": 62000,
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
            "electoral_votes": 12,
            "popular_votes": 260000,
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
            "electoral_votes": 13,
            "popular_votes": 325000,
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
            "electoral_votes": 0,
            "popular_votes": 0,
            "poll_closing_time": 1,
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
            "electoral_votes": 4,
            "popular_votes": 59000,
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
            "electoral_votes": 12,
            "popular_votes": 285000,
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
            "electoral_votes": 4,
            "popular_votes": 80000,
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
            "electoral_votes": 0,
            "popular_votes": 0,
            "poll_closing_time": 1,
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
            "electoral_votes": 6,
            "popular_votes": 132000,
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
            "electoral_votes": 11,
            "popular_votes": 320000,
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
            "popular_votes": 14000,
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
            "name": "Blair Ed. Bill",
            "description": "Does this state support Blair's proposed education bill, which would send millions of dollars to the states to fund public education, especially in the South?",
            "stance_1": "Strongly Supports",
            "stance_desc_1": 0,
            "stance_2": "Supports",
            "stance_desc_2": 0,
            "stance_3": "Weakly Supports",
            "stance_desc_3": 0,
            "stance_4": "On the Fence",
            "stance_desc_4": 0,
            "stance_5": "Weakly Opposes",
            "stance_desc_5": 0,
            "stance_6": "Opposes",
            "stance_desc_6": 0,
            "stance_7": "Strongly Opposes",
            "stance_desc_7": 0,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 101,
        "fields": {
            "name": "Economics",
            "description": "Is this state satisfied with the current status quo of high tariffs and lax business regulation?",
            "stance_1": "Very Conservative",
            "stance_desc_1": 0,
            "stance_2": "Conservative",
            "stance_desc_2": 0,
            "stance_3": "Leans Conservative",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Leans Progressive",
            "stance_desc_5": 0,
            "stance_6": "Progressive",
            "stance_desc_6": 0,
            "stance_7": "Very Progressive",
            "stance_desc_7": 0,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 102,
        "fields": {
            "name": "Foreign Policy",
            "description": "Is this state interested in expanding American borders and influence across the world?",
            "stance_1": "Strongly Imperialist",
            "stance_desc_1": 0,
            "stance_2": "Imperialist",
            "stance_desc_2": 0,
            "stance_3": "Leans Imperialist",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Leans Isolationist",
            "stance_desc_5": 0,
            "stance_6": "Isolationist",
            "stance_desc_6": 0,
            "stance_7": "Strongly Isolationist",
            "stance_desc_7": 0,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 103,
        "fields": {
            "name": "Social Issues",
            "description": "How does this state feel about women's rights and moral reform?",
            "stance_1": "Very Progressive",
            "stance_desc_1": 0,
            "stance_2": "Progressive",
            "stance_desc_2": 0,
            "stance_3": "Leans Progressive",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Leans Conservative",
            "stance_desc_5": 0,
            "stance_6": "Conservative",
            "stance_desc_6": 0,
            "stance_7": "Very Conservative",
            "stance_desc_7": 0,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 104,
        "fields": {
            "name": "Nativism",
            "description": "How much power does the nativist movement have in this state relative to its immigrant communities?",
            "stance_1": "Very Strong",
            "stance_desc_1": 0,
            "stance_2": "Strong",
            "stance_desc_2": 0,
            "stance_3": "Slightly Strong",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Slightly Weak",
            "stance_desc_5": 0,
            "stance_6": "Weak",
            "stance_desc_6": 0,
            "stance_7": "Very Weak",
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
            "state_issue_score": -1,
            "weight": 1.2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3001,
        "fields": {
            "state": 1000,
            "issue": 101,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3002,
        "fields": {
            "state": 1000,
            "issue": 102,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3003,
        "fields": {
            "state": 1000,
            "issue": 103,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3004,
        "fields": {
            "state": 1000,
            "issue": 104,
            "state_issue_score": -0.5,
            "weight": 1
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
            "state_issue_score": -0.5,
            "weight": 0.5
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
            "state_issue_score": -0.5,
            "weight": 0.5
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
            "weight": 1.1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3016,
        "fields": {
            "state": 1003,
            "issue": 101,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3017,
        "fields": {
            "state": 1003,
            "issue": 102,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3018,
        "fields": {
            "state": 1003,
            "issue": 103,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3019,
        "fields": {
            "state": 1003,
            "issue": 104,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3020,
        "fields": {
            "state": 1004,
            "issue": 100,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3021,
        "fields": {
            "state": 1004,
            "issue": 101,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3022,
        "fields": {
            "state": 1004,
            "issue": 102,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3023,
        "fields": {
            "state": 1004,
            "issue": 103,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3024,
        "fields": {
            "state": 1004,
            "issue": 104,
            "state_issue_score": -1,
            "weight": 1.3
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3025,
        "fields": {
            "state": 1005,
            "issue": 100,
            "state_issue_score": 0,
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
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3027,
        "fields": {
            "state": 1005,
            "issue": 102,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3028,
        "fields": {
            "state": 1005,
            "issue": 103,
            "state_issue_score": -0.8,
            "weight": 1.2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3029,
        "fields": {
            "state": 1005,
            "issue": 104,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3030,
        "fields": {
            "state": 1006,
            "issue": 100,
            "state_issue_score": -0.3,
            "weight": 1.1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3031,
        "fields": {
            "state": 1006,
            "issue": 101,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3032,
        "fields": {
            "state": 1006,
            "issue": 102,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3033,
        "fields": {
            "state": 1006,
            "issue": 103,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3034,
        "fields": {
            "state": 1006,
            "issue": 104,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3035,
        "fields": {
            "state": 1007,
            "issue": 100,
            "state_issue_score": 0.7,
            "weight": 1.1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3036,
        "fields": {
            "state": 1007,
            "issue": 101,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3037,
        "fields": {
            "state": 1007,
            "issue": 102,
            "state_issue_score": -0.5,
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
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3040,
        "fields": {
            "state": 1008,
            "issue": 100,
            "state_issue_score": -0.8,
            "weight": 1.2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3041,
        "fields": {
            "state": 1008,
            "issue": 101,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3042,
        "fields": {
            "state": 1008,
            "issue": 102,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3043,
        "fields": {
            "state": 1008,
            "issue": 103,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3044,
        "fields": {
            "state": 1008,
            "issue": 104,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3045,
        "fields": {
            "state": 1009,
            "issue": 100,
            "state_issue_score": -0.8,
            "weight": 1.2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3046,
        "fields": {
            "state": 1009,
            "issue": 101,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3047,
        "fields": {
            "state": 1009,
            "issue": 102,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3048,
        "fields": {
            "state": 1009,
            "issue": 103,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3049,
        "fields": {
            "state": 1009,
            "issue": 104,
            "state_issue_score": -0.5,
            "weight": 1
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
            "state_issue_score": -0.6,
            "weight": 0.5
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
            "state_issue_score": 0.3,
            "weight": 0.9
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3056,
        "fields": {
            "state": 1011,
            "issue": 101,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3057,
        "fields": {
            "state": 1011,
            "issue": 102,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3058,
        "fields": {
            "state": 1011,
            "issue": 103,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3059,
        "fields": {
            "state": 1011,
            "issue": 104,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3060,
        "fields": {
            "state": 1012,
            "issue": 100,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3061,
        "fields": {
            "state": 1012,
            "issue": 101,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3062,
        "fields": {
            "state": 1012,
            "issue": 102,
            "state_issue_score": 0.2,
            "weight": 0.9
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3063,
        "fields": {
            "state": 1012,
            "issue": 103,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3064,
        "fields": {
            "state": 1012,
            "issue": 104,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3065,
        "fields": {
            "state": 1013,
            "issue": 100,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3066,
        "fields": {
            "state": 1013,
            "issue": 101,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3067,
        "fields": {
            "state": 1013,
            "issue": 102,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3068,
        "fields": {
            "state": 1013,
            "issue": 103,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3069,
        "fields": {
            "state": 1013,
            "issue": 104,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3070,
        "fields": {
            "state": 1014,
            "issue": 100,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3071,
        "fields": {
            "state": 1014,
            "issue": 101,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3072,
        "fields": {
            "state": 1014,
            "issue": 102,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3073,
        "fields": {
            "state": 1014,
            "issue": 103,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3074,
        "fields": {
            "state": 1014,
            "issue": 104,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3075,
        "fields": {
            "state": 1015,
            "issue": 100,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3076,
        "fields": {
            "state": 1015,
            "issue": 101,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3077,
        "fields": {
            "state": 1015,
            "issue": 102,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3078,
        "fields": {
            "state": 1015,
            "issue": 103,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3079,
        "fields": {
            "state": 1015,
            "issue": 104,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3080,
        "fields": {
            "state": 1016,
            "issue": 100,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3081,
        "fields": {
            "state": 1016,
            "issue": 101,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3082,
        "fields": {
            "state": 1016,
            "issue": 102,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3083,
        "fields": {
            "state": 1016,
            "issue": 103,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3084,
        "fields": {
            "state": 1016,
            "issue": 104,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3085,
        "fields": {
            "state": 1017,
            "issue": 100,
            "state_issue_score": -0.7,
            "weight": 1.1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3086,
        "fields": {
            "state": 1017,
            "issue": 101,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3087,
        "fields": {
            "state": 1017,
            "issue": 102,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3088,
        "fields": {
            "state": 1017,
            "issue": 103,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3089,
        "fields": {
            "state": 1017,
            "issue": 104,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3090,
        "fields": {
            "state": 1018,
            "issue": 100,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3091,
        "fields": {
            "state": 1018,
            "issue": 101,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3092,
        "fields": {
            "state": 1018,
            "issue": 102,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3093,
        "fields": {
            "state": 1018,
            "issue": 103,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3094,
        "fields": {
            "state": 1018,
            "issue": 104,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3095,
        "fields": {
            "state": 1019,
            "issue": 100,
            "state_issue_score": 0.8,
            "weight": 1.1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3096,
        "fields": {
            "state": 1019,
            "issue": 101,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3097,
        "fields": {
            "state": 1019,
            "issue": 102,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3098,
        "fields": {
            "state": 1019,
            "issue": 103,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3099,
        "fields": {
            "state": 1019,
            "issue": 104,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3100,
        "fields": {
            "state": 1020,
            "issue": 100,
            "state_issue_score": -0.8,
            "weight": 1.1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3101,
        "fields": {
            "state": 1020,
            "issue": 101,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3102,
        "fields": {
            "state": 1020,
            "issue": 102,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3103,
        "fields": {
            "state": 1020,
            "issue": 103,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3104,
        "fields": {
            "state": 1020,
            "issue": 104,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3105,
        "fields": {
            "state": 1021,
            "issue": 100,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3106,
        "fields": {
            "state": 1021,
            "issue": 101,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3107,
        "fields": {
            "state": 1021,
            "issue": 102,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3108,
        "fields": {
            "state": 1021,
            "issue": 103,
            "state_issue_score": -0.8,
            "weight": 1.2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3109,
        "fields": {
            "state": 1021,
            "issue": 104,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3110,
        "fields": {
            "state": 1022,
            "issue": 100,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3111,
        "fields": {
            "state": 1022,
            "issue": 101,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3112,
        "fields": {
            "state": 1022,
            "issue": 102,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3113,
        "fields": {
            "state": 1022,
            "issue": 103,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3114,
        "fields": {
            "state": 1022,
            "issue": 104,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3115,
        "fields": {
            "state": 1023,
            "issue": 100,
            "state_issue_score": -0.8,
            "weight": 1.2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3116,
        "fields": {
            "state": 1023,
            "issue": 101,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3117,
        "fields": {
            "state": 1023,
            "issue": 102,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3118,
        "fields": {
            "state": 1023,
            "issue": 103,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3119,
        "fields": {
            "state": 1023,
            "issue": 104,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3120,
        "fields": {
            "state": 1024,
            "issue": 100,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3121,
        "fields": {
            "state": 1024,
            "issue": 101,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3122,
        "fields": {
            "state": 1024,
            "issue": 102,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3123,
        "fields": {
            "state": 1024,
            "issue": 103,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3124,
        "fields": {
            "state": 1024,
            "issue": 104,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3125,
        "fields": {
            "state": 1025,
            "issue": 100,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3126,
        "fields": {
            "state": 1025,
            "issue": 101,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3127,
        "fields": {
            "state": 1025,
            "issue": 102,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3128,
        "fields": {
            "state": 1025,
            "issue": 103,
            "state_issue_score": -0.8,
            "weight": 1.1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3129,
        "fields": {
            "state": 1025,
            "issue": 104,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3130,
        "fields": {
            "state": 1026,
            "issue": 100,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3131,
        "fields": {
            "state": 1026,
            "issue": 101,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3132,
        "fields": {
            "state": 1026,
            "issue": 102,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3133,
        "fields": {
            "state": 1026,
            "issue": 103,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3134,
        "fields": {
            "state": 1026,
            "issue": 104,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3135,
        "fields": {
            "state": 1027,
            "issue": 100,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3136,
        "fields": {
            "state": 1027,
            "issue": 101,
            "state_issue_score": 1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3137,
        "fields": {
            "state": 1027,
            "issue": 102,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3138,
        "fields": {
            "state": 1027,
            "issue": 103,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3139,
        "fields": {
            "state": 1027,
            "issue": 104,
            "state_issue_score": -0.7,
            "weight": 1.2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3140,
        "fields": {
            "state": 1028,
            "issue": 100,
            "state_issue_score": -0.8,
            "weight": 1.2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3141,
        "fields": {
            "state": 1028,
            "issue": 101,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3142,
        "fields": {
            "state": 1028,
            "issue": 102,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3143,
        "fields": {
            "state": 1028,
            "issue": 103,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3144,
        "fields": {
            "state": 1028,
            "issue": 104,
            "state_issue_score": -0.8,
            "weight": 1.1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3145,
        "fields": {
            "state": 1029,
            "issue": 100,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3146,
        "fields": {
            "state": 1029,
            "issue": 101,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3147,
        "fields": {
            "state": 1029,
            "issue": 102,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3148,
        "fields": {
            "state": 1029,
            "issue": 103,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3149,
        "fields": {
            "state": 1029,
            "issue": 104,
            "state_issue_score": 0.3,
            "weight": 1.1
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
            "state_issue_score": -0.45,
            "weight": 0.5
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
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3156,
        "fields": {
            "state": 1031,
            "issue": 101,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3157,
        "fields": {
            "state": 1031,
            "issue": 102,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3158,
        "fields": {
            "state": 1031,
            "issue": 103,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3159,
        "fields": {
            "state": 1031,
            "issue": 104,
            "state_issue_score": 0.6,
            "weight": 1.2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3160,
        "fields": {
            "state": 1032,
            "issue": 100,
            "state_issue_score": -0.8,
            "weight": 1.2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3161,
        "fields": {
            "state": 1032,
            "issue": 101,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3162,
        "fields": {
            "state": 1032,
            "issue": 102,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3163,
        "fields": {
            "state": 1032,
            "issue": 103,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3164,
        "fields": {
            "state": 1032,
            "issue": 104,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3165,
        "fields": {
            "state": 1033,
            "issue": 100,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3166,
        "fields": {
            "state": 1033,
            "issue": 101,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3167,
        "fields": {
            "state": 1033,
            "issue": 102,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3168,
        "fields": {
            "state": 1033,
            "issue": 103,
            "state_issue_score": -0.8,
            "weight": 1.1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3169,
        "fields": {
            "state": 1033,
            "issue": 104,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3170,
        "fields": {
            "state": 1034,
            "issue": 100,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3171,
        "fields": {
            "state": 1034,
            "issue": 101,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3172,
        "fields": {
            "state": 1034,
            "issue": 102,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3173,
        "fields": {
            "state": 1034,
            "issue": 103,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3174,
        "fields": {
            "state": 1034,
            "issue": 104,
            "state_issue_score": 0,
            "weight": 1
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
            "state_issue_score": -0.45,
            "weight": 0.5
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
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3181,
        "fields": {
            "state": 1036,
            "issue": 101,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3182,
        "fields": {
            "state": 1036,
            "issue": 102,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3183,
        "fields": {
            "state": 1036,
            "issue": 103,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3184,
        "fields": {
            "state": 1036,
            "issue": 104,
            "state_issue_score": -0.8,
            "weight": 1.2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3185,
        "fields": {
            "state": 1037,
            "issue": 100,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3186,
        "fields": {
            "state": 1037,
            "issue": 101,
            "state_issue_score": -0.8,
            "weight": 1.1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3187,
        "fields": {
            "state": 1037,
            "issue": 102,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3188,
        "fields": {
            "state": 1037,
            "issue": 103,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3189,
        "fields": {
            "state": 1037,
            "issue": 104,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3190,
        "fields": {
            "state": 1038,
            "issue": 100,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3191,
        "fields": {
            "state": 1038,
            "issue": 101,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3192,
        "fields": {
            "state": 1038,
            "issue": 102,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3193,
        "fields": {
            "state": 1038,
            "issue": 103,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3194,
        "fields": {
            "state": 1038,
            "issue": 104,
            "state_issue_score": -0.5,
            "weight": 1.1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3195,
        "fields": {
            "state": 1039,
            "issue": 100,
            "state_issue_score": -0.5,
            "weight": 1.1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3196,
        "fields": {
            "state": 1039,
            "issue": 101,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3197,
        "fields": {
            "state": 1039,
            "issue": 102,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3198,
        "fields": {
            "state": 1039,
            "issue": 103,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3199,
        "fields": {
            "state": 1039,
            "issue": 104,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3200,
        "fields": {
            "state": 1040,
            "issue": 100,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3201,
        "fields": {
            "state": 1040,
            "issue": 101,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3202,
        "fields": {
            "state": 1040,
            "issue": 102,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3203,
        "fields": {
            "state": 1040,
            "issue": 103,
            "state_issue_score": -0.7,
            "weight": 1.1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3204,
        "fields": {
            "state": 1040,
            "issue": 104,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3205,
        "fields": {
            "state": 1041,
            "issue": 100,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3206,
        "fields": {
            "state": 1041,
            "issue": 101,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3207,
        "fields": {
            "state": 1041,
            "issue": 102,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3208,
        "fields": {
            "state": 1041,
            "issue": 103,
            "state_issue_score": 0.5,
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
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3210,
        "fields": {
            "state": 1042,
            "issue": 100,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3211,
        "fields": {
            "state": 1042,
            "issue": 101,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3212,
        "fields": {
            "state": 1042,
            "issue": 102,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3213,
        "fields": {
            "state": 1042,
            "issue": 103,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3214,
        "fields": {
            "state": 1042,
            "issue": 104,
            "state_issue_score": -0.5,
            "weight": 1
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
            "state_issue_score": -0.6,
            "weight": 0.5
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
            "state_issue_score": -1,
            "weight": 1.2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3221,
        "fields": {
            "state": 1044,
            "issue": 101,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3222,
        "fields": {
            "state": 1044,
            "issue": 102,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3223,
        "fields": {
            "state": 1044,
            "issue": 103,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3224,
        "fields": {
            "state": 1044,
            "issue": 104,
            "state_issue_score": -0.8,
            "weight": 1.1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3225,
        "fields": {
            "state": 1045,
            "issue": 100,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3226,
        "fields": {
            "state": 1045,
            "issue": 101,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3227,
        "fields": {
            "state": 1045,
            "issue": 102,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3228,
        "fields": {
            "state": 1045,
            "issue": 103,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3229,
        "fields": {
            "state": 1045,
            "issue": 104,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3230,
        "fields": {
            "state": 1046,
            "issue": 100,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3231,
        "fields": {
            "state": 1046,
            "issue": 101,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3232,
        "fields": {
            "state": 1046,
            "issue": 102,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3233,
        "fields": {
            "state": 1046,
            "issue": 103,
            "state_issue_score": -0.6,
            "weight": 1.1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3234,
        "fields": {
            "state": 1046,
            "issue": 104,
            "state_issue_score": -0.8,
            "weight": 1.2
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
            "state_issue_score": -0.5,
            "weight": 0.5
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
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3241,
        "fields": {
            "state": 1048,
            "issue": 101,
            "state_issue_score": 0.3,
            "weight": 0.9
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3242,
        "fields": {
            "state": 1048,
            "issue": 102,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3243,
        "fields": {
            "state": 1048,
            "issue": 103,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3244,
        "fields": {
            "state": 1048,
            "issue": 104,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3245,
        "fields": {
            "state": 1049,
            "issue": 100,
            "state_issue_score": 0.3,
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
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3248,
        "fields": {
            "state": 1049,
            "issue": 103,
            "state_issue_score": -0.3,
            "weight": 1.1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3249,
        "fields": {
            "state": 1049,
            "issue": 104,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3250,
        "fields": {
            "state": 1050,
            "issue": 100,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3251,
        "fields": {
            "state": 1050,
            "issue": 101,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3252,
        "fields": {
            "state": 1050,
            "issue": 102,
            "state_issue_score": 0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3253,
        "fields": {
            "state": 1050,
            "issue": 103,
            "state_issue_score": -0.8,
            "weight": 1.1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3254,
        "fields": {
            "state": 1050,
            "issue": 104,
            "state_issue_score": -0.5,
            "weight": 1
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
            "issue_score": 1
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1001,
        "fields": {
            "candidate": 200,
            "issue": 101,
            "issue_score": -0.4
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1002,
        "fields": {
            "candidate": 200,
            "issue": 102,
            "issue_score": 0.6
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1003,
        "fields": {
            "candidate": 200,
            "issue": 103,
            "issue_score": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1004,
        "fields": {
            "candidate": 200,
            "issue": 104,
            "issue_score": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1005,
        "fields": {
            "candidate": 201,
            "issue": 100,
            "issue_score": -0.9
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1006,
        "fields": {
            "candidate": 201,
            "issue": 101,
            "issue_score": -0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1007,
        "fields": {
            "candidate": 201,
            "issue": 102,
            "issue_score": -0.3
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1008,
        "fields": {
            "candidate": 201,
            "issue": 103,
            "issue_score": -0.6
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1009,
        "fields": {
            "candidate": 201,
            "issue": 104,
            "issue_score": -0.9
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1010,
        "fields": {
            "candidate": 202,
            "issue": 100,
            "issue_score": -0.6
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1011,
        "fields": {
            "candidate": 202,
            "issue": 101,
            "issue_score": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1012,
        "fields": {
            "candidate": 202,
            "issue": 102,
            "issue_score": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1013,
        "fields": {
            "candidate": 202,
            "issue": 103,
            "issue_score": -0.3
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1014,
        "fields": {
            "candidate": 202,
            "issue": 104,
            "issue_score": -1
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
            "issue_score": 0
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
            "state_multiplier": 4
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2501,
        "fields": {
            "candidate": 200,
            "state": 1001,
            "state_multiplier": 1.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2502,
        "fields": {
            "candidate": 200,
            "state": 1002,
            "state_multiplier": 1.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2503,
        "fields": {
            "candidate": 200,
            "state": 1003,
            "state_multiplier": 2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2504,
        "fields": {
            "candidate": 200,
            "state": 1004,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2505,
        "fields": {
            "candidate": 200,
            "state": 1005,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2506,
        "fields": {
            "candidate": 200,
            "state": 1006,
            "state_multiplier": 1.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2507,
        "fields": {
            "candidate": 200,
            "state": 1007,
            "state_multiplier": 1.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2508,
        "fields": {
            "candidate": 200,
            "state": 1008,
            "state_multiplier": 4
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2509,
        "fields": {
            "candidate": 200,
            "state": 1009,
            "state_multiplier": 2.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2510,
        "fields": {
            "candidate": 200,
            "state": 1010,
            "state_multiplier": 1.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2511,
        "fields": {
            "candidate": 200,
            "state": 1011,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2512,
        "fields": {
            "candidate": 200,
            "state": 1012,
            "state_multiplier": 1.05
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2513,
        "fields": {
            "candidate": 200,
            "state": 1013,
            "state_multiplier": 1.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2514,
        "fields": {
            "candidate": 200,
            "state": 1014,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2515,
        "fields": {
            "candidate": 200,
            "state": 1015,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2516,
        "fields": {
            "candidate": 200,
            "state": 1016,
            "state_multiplier": 1.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2517,
        "fields": {
            "candidate": 200,
            "state": 1017,
            "state_multiplier": 2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2518,
        "fields": {
            "candidate": 200,
            "state": 1018,
            "state_multiplier": 1.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2519,
        "fields": {
            "candidate": 200,
            "state": 1019,
            "state_multiplier": 1.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2520,
        "fields": {
            "candidate": 200,
            "state": 1020,
            "state_multiplier": 1.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2521,
        "fields": {
            "candidate": 200,
            "state": 1021,
            "state_multiplier": 1.4
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2522,
        "fields": {
            "candidate": 200,
            "state": 1022,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2523,
        "fields": {
            "candidate": 200,
            "state": 1023,
            "state_multiplier": 4
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2524,
        "fields": {
            "candidate": 200,
            "state": 1024,
            "state_multiplier": 1.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2525,
        "fields": {
            "candidate": 200,
            "state": 1025,
            "state_multiplier": 1.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2526,
        "fields": {
            "candidate": 200,
            "state": 1026,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2527,
        "fields": {
            "candidate": 200,
            "state": 1027,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2528,
        "fields": {
            "candidate": 200,
            "state": 1028,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2529,
        "fields": {
            "candidate": 200,
            "state": 1029,
            "state_multiplier": 1.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2530,
        "fields": {
            "candidate": 200,
            "state": 1030,
            "state_multiplier": 1.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2531,
        "fields": {
            "candidate": 200,
            "state": 1031,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2532,
        "fields": {
            "candidate": 200,
            "state": 1032,
            "state_multiplier": 3
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2533,
        "fields": {
            "candidate": 200,
            "state": 1033,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2534,
        "fields": {
            "candidate": 200,
            "state": 1034,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2535,
        "fields": {
            "candidate": 200,
            "state": 1035,
            "state_multiplier": 1.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2536,
        "fields": {
            "candidate": 200,
            "state": 1036,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2537,
        "fields": {
            "candidate": 200,
            "state": 1037,
            "state_multiplier": 1.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2538,
        "fields": {
            "candidate": 200,
            "state": 1038,
            "state_multiplier": 1.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2539,
        "fields": {
            "candidate": 200,
            "state": 1039,
            "state_multiplier": 1.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2540,
        "fields": {
            "candidate": 200,
            "state": 1040,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2541,
        "fields": {
            "candidate": 200,
            "state": 1041,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2542,
        "fields": {
            "candidate": 200,
            "state": 1042,
            "state_multiplier": 1.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2543,
        "fields": {
            "candidate": 200,
            "state": 1043,
            "state_multiplier": 1.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2544,
        "fields": {
            "candidate": 200,
            "state": 1044,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2545,
        "fields": {
            "candidate": 200,
            "state": 1045,
            "state_multiplier": 2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2546,
        "fields": {
            "candidate": 200,
            "state": 1046,
            "state_multiplier": 2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2547,
        "fields": {
            "candidate": 200,
            "state": 1047,
            "state_multiplier": 1.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2548,
        "fields": {
            "candidate": 200,
            "state": 1048,
            "state_multiplier": 1.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2549,
        "fields": {
            "candidate": 200,
            "state": 1049,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2550,
        "fields": {
            "candidate": 200,
            "state": 1050,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2551,
        "fields": {
            "candidate": 201,
            "state": 1000,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2552,
        "fields": {
            "candidate": 201,
            "state": 1001,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2553,
        "fields": {
            "candidate": 201,
            "state": 1002,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2554,
        "fields": {
            "candidate": 201,
            "state": 1003,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2555,
        "fields": {
            "candidate": 201,
            "state": 1004,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2556,
        "fields": {
            "candidate": 201,
            "state": 1005,
            "state_multiplier": 1.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2557,
        "fields": {
            "candidate": 201,
            "state": 1006,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2558,
        "fields": {
            "candidate": 201,
            "state": 1007,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2559,
        "fields": {
            "candidate": 201,
            "state": 1008,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2560,
        "fields": {
            "candidate": 201,
            "state": 1009,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2561,
        "fields": {
            "candidate": 201,
            "state": 1010,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2562,
        "fields": {
            "candidate": 201,
            "state": 1011,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2563,
        "fields": {
            "candidate": 201,
            "state": 1012,
            "state_multiplier": 1.05
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2564,
        "fields": {
            "candidate": 201,
            "state": 1013,
            "state_multiplier": 1.07
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2565,
        "fields": {
            "candidate": 201,
            "state": 1014,
            "state_multiplier": 1.18
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2566,
        "fields": {
            "candidate": 201,
            "state": 1015,
            "state_multiplier": 1.3
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2567,
        "fields": {
            "candidate": 201,
            "state": 1016,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2568,
        "fields": {
            "candidate": 201,
            "state": 1017,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2569,
        "fields": {
            "candidate": 201,
            "state": 1018,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2570,
        "fields": {
            "candidate": 201,
            "state": 1019,
            "state_multiplier": 1.02
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2571,
        "fields": {
            "candidate": 201,
            "state": 1020,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2572,
        "fields": {
            "candidate": 201,
            "state": 1021,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2573,
        "fields": {
            "candidate": 201,
            "state": 1022,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2574,
        "fields": {
            "candidate": 201,
            "state": 1023,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2575,
        "fields": {
            "candidate": 201,
            "state": 1024,
            "state_multiplier": 0.95
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2576,
        "fields": {
            "candidate": 201,
            "state": 1025,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2577,
        "fields": {
            "candidate": 201,
            "state": 1026,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2578,
        "fields": {
            "candidate": 201,
            "state": 1027,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2579,
        "fields": {
            "candidate": 201,
            "state": 1028,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2580,
        "fields": {
            "candidate": 201,
            "state": 1029,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2581,
        "fields": {
            "candidate": 201,
            "state": 1030,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2582,
        "fields": {
            "candidate": 201,
            "state": 1031,
            "state_multiplier": 1.05
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2583,
        "fields": {
            "candidate": 201,
            "state": 1032,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2584,
        "fields": {
            "candidate": 201,
            "state": 1033,
            "state_multiplier": 1.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2585,
        "fields": {
            "candidate": 201,
            "state": 1034,
            "state_multiplier": 1.085
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2586,
        "fields": {
            "candidate": 201,
            "state": 1035,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2587,
        "fields": {
            "candidate": 201,
            "state": 1036,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2588,
        "fields": {
            "candidate": 201,
            "state": 1037,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2589,
        "fields": {
            "candidate": 201,
            "state": 1038,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2590,
        "fields": {
            "candidate": 201,
            "state": 1039,
            "state_multiplier": 0.3
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2591,
        "fields": {
            "candidate": 201,
            "state": 1040,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2592,
        "fields": {
            "candidate": 201,
            "state": 1041,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2593,
        "fields": {
            "candidate": 201,
            "state": 1042,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2594,
        "fields": {
            "candidate": 201,
            "state": 1043,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2595,
        "fields": {
            "candidate": 201,
            "state": 1044,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2596,
        "fields": {
            "candidate": 201,
            "state": 1045,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2597,
        "fields": {
            "candidate": 201,
            "state": 1046,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2598,
        "fields": {
            "candidate": 201,
            "state": 1047,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2599,
        "fields": {
            "candidate": 201,
            "state": 1048,
            "state_multiplier": 1.02
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2600,
        "fields": {
            "candidate": 201,
            "state": 1049,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2601,
        "fields": {
            "candidate": 201,
            "state": 1050,
            "state_multiplier": 1.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2602,
        "fields": {
            "candidate": 202,
            "state": 1000,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2603,
        "fields": {
            "candidate": 202,
            "state": 1001,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2604,
        "fields": {
            "candidate": 202,
            "state": 1002,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2605,
        "fields": {
            "candidate": 202,
            "state": 1003,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2606,
        "fields": {
            "candidate": 202,
            "state": 1004,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2607,
        "fields": {
            "candidate": 202,
            "state": 1005,
            "state_multiplier": 1.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2608,
        "fields": {
            "candidate": 202,
            "state": 1006,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2609,
        "fields": {
            "candidate": 202,
            "state": 1007,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2610,
        "fields": {
            "candidate": 202,
            "state": 1008,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2611,
        "fields": {
            "candidate": 202,
            "state": 1009,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2612,
        "fields": {
            "candidate": 202,
            "state": 1010,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2613,
        "fields": {
            "candidate": 202,
            "state": 1011,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2614,
        "fields": {
            "candidate": 202,
            "state": 1012,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2615,
        "fields": {
            "candidate": 202,
            "state": 1013,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2616,
        "fields": {
            "candidate": 202,
            "state": 1014,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2617,
        "fields": {
            "candidate": 202,
            "state": 1015,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2618,
        "fields": {
            "candidate": 202,
            "state": 1016,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2619,
        "fields": {
            "candidate": 202,
            "state": 1017,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2620,
        "fields": {
            "candidate": 202,
            "state": 1018,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2621,
        "fields": {
            "candidate": 202,
            "state": 1019,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2622,
        "fields": {
            "candidate": 202,
            "state": 1020,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2623,
        "fields": {
            "candidate": 202,
            "state": 1021,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2624,
        "fields": {
            "candidate": 202,
            "state": 1022,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2625,
        "fields": {
            "candidate": 202,
            "state": 1023,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2626,
        "fields": {
            "candidate": 202,
            "state": 1024,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2627,
        "fields": {
            "candidate": 202,
            "state": 1025,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2628,
        "fields": {
            "candidate": 202,
            "state": 1026,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2629,
        "fields": {
            "candidate": 202,
            "state": 1027,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2630,
        "fields": {
            "candidate": 202,
            "state": 1028,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2631,
        "fields": {
            "candidate": 202,
            "state": 1029,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2632,
        "fields": {
            "candidate": 202,
            "state": 1030,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2633,
        "fields": {
            "candidate": 202,
            "state": 1031,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2634,
        "fields": {
            "candidate": 202,
            "state": 1032,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2635,
        "fields": {
            "candidate": 202,
            "state": 1033,
            "state_multiplier": 0.65
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2636,
        "fields": {
            "candidate": 202,
            "state": 1034,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2637,
        "fields": {
            "candidate": 202,
            "state": 1035,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2638,
        "fields": {
            "candidate": 202,
            "state": 1036,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2639,
        "fields": {
            "candidate": 202,
            "state": 1037,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2640,
        "fields": {
            "candidate": 202,
            "state": 1038,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2641,
        "fields": {
            "candidate": 202,
            "state": 1039,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2642,
        "fields": {
            "candidate": 202,
            "state": 1040,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2643,
        "fields": {
            "candidate": 202,
            "state": 1041,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2644,
        "fields": {
            "candidate": 202,
            "state": 1042,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2645,
        "fields": {
            "candidate": 202,
            "state": 1043,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2646,
        "fields": {
            "candidate": 202,
            "state": 1044,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2647,
        "fields": {
            "candidate": 202,
            "state": 1045,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2648,
        "fields": {
            "candidate": 202,
            "state": 1046,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2649,
        "fields": {
            "candidate": 202,
            "state": 1047,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2650,
        "fields": {
            "candidate": 202,
            "state": 1048,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2651,
        "fields": {
            "candidate": 202,
            "state": 1049,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2652,
        "fields": {
            "candidate": 202,
            "state": 1050,
            "state_multiplier": 0.65
        }
    }
]

campaignTrail_temp.answer_score_global_json = [
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3086,
        "fields": {
            "answer": 5153,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": -0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3088,
        "fields": {
            "answer": 5177,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": -0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3089,
        "fields": {
            "answer": 5178,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3090,
        "fields": {
            "answer": 5179,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3096,
        "fields": {
            "answer": 5229,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3097,
        "fields": {
            "answer": 5230,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3103,
        "fields": {
            "answer": 5249,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": -0.07
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3133,
        "fields": {
            "answer": 5150,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3135,
        "fields": {
            "answer": 5153,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3136,
        "fields": {
            "answer": 5154,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3146,
        "fields": {
            "answer": 5189,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3151,
        "fields": {
            "answer": 5199,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3154,
        "fields": {
            "answer": 5203,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3158,
        "fields": {
            "answer": 5229,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3159,
        "fields": {
            "answer": 5230,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3164,
        "fields": {
            "answer": 5256,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3188,
        "fields": {
            "answer": 5229,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3189,
        "fields": {
            "answer": 5230,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3209,
        "fields": {
            "answer": 5199,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3212,
        "fields": {
            "answer": 5203,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": 0.1032
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3296,
        "fields": {
            "answer": 5199,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": 0.035
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3307,
        "fields": {
            "answer": 5215,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3308,
        "fields": {
            "answer": 5215,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3309,
        "fields": {
            "answer": 5215,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3318,
        "fields": {
            "answer": 5223,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3325,
        "fields": {
            "answer": 5235,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3330,
        "fields": {
            "answer": 5256,
            "candidate": 201,
            "affected_candidate": 202,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3331,
        "fields": {
            "answer": 5256,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20683,
        "fields": {
            "answer": 5139,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20766,
        "fields": {
            "answer": 5197,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20820,
        "fields": {
            "answer": 5258,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20841,
        "fields": {
            "answer": 5214,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": 0.045
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20843,
        "fields": {
            "answer": 5253,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20857,
        "fields": {
            "answer": 5149,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20873,
        "fields": {
            "answer": 5196,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20880,
        "fields": {
            "answer": 5175,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20885,
        "fields": {
            "answer": 5221,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20890,
        "fields": {
            "answer": 5190,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20891,
        "fields": {
            "answer": 5191,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20930,
        "fields": {
            "answer": 20899,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20933,
        "fields": {
            "answer": 20900,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20934,
        "fields": {
            "answer": 5227,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20936,
        "fields": {
            "answer": 5228,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20957,
        "fields": {
            "answer": 5202,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20973,
        "fields": {
            "answer": 20971,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20974,
        "fields": {
            "answer": 5176,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21028,
        "fields": {
            "answer": 5142,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.6
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 34567,
        "fields": {
            "answer": 5142,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21032,
        "fields": {
            "answer": 5144,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21034,
        "fields": {
            "answer": 5145,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21035,
        "fields": {
            "answer": 20993,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21037,
        "fields": {
            "answer": 5151,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21038,
        "fields": {
            "answer": 5155,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21039,
        "fields": {
            "answer": 5156,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21040,
        "fields": {
            "answer": 5157,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21042,
        "fields": {
            "answer": 5170,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21043,
        "fields": {
            "answer": 5172,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21045,
        "fields": {
            "answer": 5184,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21049,
        "fields": {
            "answer": 5174,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21072,
        "fields": {
            "answer": 20995,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21095,
        "fields": {
            "answer": 5173,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21142,
        "fields": {
            "answer": 5262,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21149,
        "fields": {
            "answer": 20979,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21150,
        "fields": {
            "answer": 21001,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21153,
        "fields": {
            "answer": 5200,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21155,
        "fields": {
            "answer": 5201,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21169,
        "fields": {
            "answer": 21003,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21172,
        "fields": {
            "answer": 5245,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21181,
        "fields": {
            "answer": 21009,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21183,
        "fields": {
            "answer": 21010,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21186,
        "fields": {
            "answer": 21014,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21189,
        "fields": {
            "answer": 5250,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21191,
        "fields": {
            "answer": 21018,
            "candidate": 202,
            "affected_candidate": 202,
            "global_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21192,
        "fields": {
            "answer": 20989,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21199,
        "fields": {
            "answer": 21023,
            "candidate": 202,
            "affected_candidate": 201,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21200,
        "fields": {
            "answer": 21024,
            "candidate": 202,
            "affected_candidate": 200,
            "global_multiplier": -0.02
        }
    }
]

campaignTrail_temp.answer_score_issue_json = [
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2643,
        "fields": {
            "answer": 5150,
            "issue": 102,
            "issue_score": -0.1,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2644,
        "fields": {
            "answer": 5150,
            "issue": 103,
            "issue_score": 0,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2650,
        "fields": {
            "answer": 5153,
            "issue": 100,
            "issue_score": 0.1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2651,
        "fields": {
            "answer": 5154,
            "issue": 100,
            "issue_score": 0.25,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2652,
        "fields": {
            "answer": 5154,
            "issue": 101,
            "issue_score": -0.25,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2653,
        "fields": {
            "answer": 5154,
            "issue": 102,
            "issue_score": 0,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2654,
        "fields": {
            "answer": 5154,
            "issue": 103,
            "issue_score": 0.4,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2655,
        "fields": {
            "answer": 5154,
            "issue": 104,
            "issue_score": 0.4,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2656,
        "fields": {
            "answer": 5170,
            "issue": 103,
            "issue_score": 1,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2661,
        "fields": {
            "answer": 5174,
            "issue": 103,
            "issue_score": -1,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2663,
        "fields": {
            "answer": 5175,
            "issue": 103,
            "issue_score": -1,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2664,
        "fields": {
            "answer": 5178,
            "issue": 100,
            "issue_score": 0.45,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2665,
        "fields": {
            "answer": 5178,
            "issue": 101,
            "issue_score": 0.3,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2666,
        "fields": {
            "answer": 5179,
            "issue": 100,
            "issue_score": 0.333,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2667,
        "fields": {
            "answer": 5179,
            "issue": 102,
            "issue_score": 0.25,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2671,
        "fields": {
            "answer": 5189,
            "issue": 103,
            "issue_score": -1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2678,
        "fields": {
            "answer": 5199,
            "issue": 100,
            "issue_score": 0.65,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2686,
        "fields": {
            "answer": 5203,
            "issue": 100,
            "issue_score": 0.1,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2687,
        "fields": {
            "answer": 5203,
            "issue": 101,
            "issue_score": -0.2,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2688,
        "fields": {
            "answer": 5203,
            "issue": 102,
            "issue_score": 0,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2857,
        "fields": {
            "answer": 5191,
            "issue": 103,
            "issue_score": -0.7,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2866,
        "fields": {
            "answer": 5199,
            "issue": 101,
            "issue_score": 0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2867,
        "fields": {
            "answer": 5199,
            "issue": 102,
            "issue_score": 0.5,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2876,
        "fields": {
            "answer": 5215,
            "issue": 100,
            "issue_score": -0.1,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2877,
        "fields": {
            "answer": 5215,
            "issue": 102,
            "issue_score": -0.5,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2885,
        "fields": {
            "answer": 5223,
            "issue": 100,
            "issue_score": 0.2,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20797,
        "fields": {
            "answer": 5227,
            "issue": 101,
            "issue_score": 0.7,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20821,
        "fields": {
            "answer": 5258,
            "issue": 103,
            "issue_score": 0,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20888,
        "fields": {
            "answer": 5190,
            "issue": 103,
            "issue_score": 0.3,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20917,
        "fields": {
            "answer": 20906,
            "issue": 100,
            "issue_score": 0,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21027,
        "fields": {
            "answer": 5142,
            "issue": 104,
            "issue_score": 1,
            "issue_importance": 20
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21029,
        "fields": {
            "answer": 5149,
            "issue": 101,
            "issue_score": 0.8,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21030,
        "fields": {
            "answer": 5143,
            "issue": 101,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21031,
        "fields": {
            "answer": 5144,
            "issue": 101,
            "issue_score": 1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21033,
        "fields": {
            "answer": 5145,
            "issue": 103,
            "issue_score": 1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21036,
        "fields": {
            "answer": 20993,
            "issue": 104,
            "issue_score": -1,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21041,
        "fields": {
            "answer": 5157,
            "issue": 103,
            "issue_score": -1,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21046,
        "fields": {
            "answer": 5184,
            "issue": 103,
            "issue_score": 0.3,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21048,
        "fields": {
            "answer": 20726,
            "issue": 103,
            "issue_score": 0.8,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21144,
        "fields": {
            "answer": 20997,
            "issue": 101,
            "issue_score": 1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21146,
        "fields": {
            "answer": 20999,
            "issue": "100",
            "issue_score": -0.7,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21147,
        "fields": {
            "answer": 20999,
            "issue": 103,
            "issue_score": -0.7,
            "issue_importance": 5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21151,
        "fields": {
            "answer": 21001,
            "issue": 103,
            "issue_score": 1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21154,
        "fields": {
            "answer": 5200,
            "issue": 101,
            "issue_score": 0.5,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21158,
        "fields": {
            "answer": 5235,
            "issue": 101,
            "issue_score": 1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21160,
        "fields": {
            "answer": 5237,
            "issue": 103,
            "issue_score": -1,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21163,
        "fields": {
            "answer": 5224,
            "issue": 104,
            "issue_score": -1.3,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21165,
        "fields": {
            "answer": 5225,
            "issue": 104,
            "issue_score": -0.7,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21166,
        "fields": {
            "answer": 5225,
            "issue": 101,
            "issue_score": 0.7,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21168,
        "fields": {
            "answer": 21003,
            "issue": 104,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21170,
        "fields": {
            "answer": 5228,
            "issue": 101,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21174,
        "fields": {
            "answer": 21005,
            "issue": "100",
            "issue_score": -1,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21176,
        "fields": {
            "answer": 21006,
            "issue": 101,
            "issue_score": 0.8,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21177,
        "fields": {
            "answer": 5246,
            "issue": 104,
            "issue_score": -1,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21180,
        "fields": {
            "answer": 21009,
            "issue": 103,
            "issue_score": -0.8,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21182,
        "fields": {
            "answer": 21010,
            "issue": 103,
            "issue_score": 0,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21184,
        "fields": {
            "answer": 5253,
            "issue": 101,
            "issue_score": 0.6,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21185,
        "fields": {
            "answer": 21014,
            "issue": 104,
            "issue_score": 0,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21187,
        "fields": {
            "answer": 21015,
            "issue": 101,
            "issue_score": 1,
            "issue_importance": 3
        }
    }
]

campaignTrail_temp.answer_score_state_json = [
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20867,
        "fields": {
            "answer": 5144,
            "state": 1031,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20889,
        "fields": {
            "answer": 5190,
            "state": 1032,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20924,
        "fields": {
            "answer": 5232,
            "state": 1023,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20931,
        "fields": {
            "answer": 20899,
            "state": 1031,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21044,
        "fields": {
            "answer": 5184,
            "state": 1008,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21047,
        "fields": {
            "answer": 20726,
            "state": 1008,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21050,
        "fields": {
            "answer": 5174,
            "state": 1003,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21051,
        "fields": {
            "answer": 5174,
            "state": 1003,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21052,
        "fields": {
            "answer": 5174,
            "state": 1017,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21053,
        "fields": {
            "answer": 5174,
            "state": 1017,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21054,
        "fields": {
            "answer": 5174,
            "state": 1041,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21055,
        "fields": {
            "answer": 5174,
            "state": 1041,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21056,
        "fields": {
            "answer": 5174,
            "state": 1045,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21057,
        "fields": {
            "answer": 5174,
            "state": 1045,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": 0.3
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21058,
        "fields": {
            "answer": 5174,
            "state": 1032,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21059,
        "fields": {
            "answer": 5174,
            "state": 1032,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21060,
        "fields": {
            "answer": 5174,
            "state": 1039,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21061,
        "fields": {
            "answer": 5174,
            "state": 1039,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21062,
        "fields": {
            "answer": 5174,
            "state": 1009,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21063,
        "fields": {
            "answer": 5174,
            "state": 1009,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.33
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21064,
        "fields": {
            "answer": 5174,
            "state": 1008,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21065,
        "fields": {
            "answer": 5174,
            "state": 1008,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21066,
        "fields": {
            "answer": 5174,
            "state": 1000,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21067,
        "fields": {
            "answer": 5174,
            "state": 1000,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21068,
        "fields": {
            "answer": 5174,
            "state": 1023,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21070,
        "fields": {
            "answer": 5174,
            "state": 1023,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21073,
        "fields": {
            "answer": 5175,
            "state": 1036,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21074,
        "fields": {
            "answer": 5175,
            "state": 1036,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21075,
        "fields": {
            "answer": 5175,
            "state": 1046,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21076,
        "fields": {
            "answer": 5175,
            "state": 1046,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": 0.35
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21077,
        "fields": {
            "answer": 5175,
            "state": 1011,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21078,
        "fields": {
            "answer": 5175,
            "state": 1011,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.15
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21079,
        "fields": {
            "answer": 5175,
            "state": 1027,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21080,
        "fields": {
            "answer": 5175,
            "state": 1027,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.15
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21081,
        "fields": {
            "answer": 5175,
            "state": 1025,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21082,
        "fields": {
            "answer": 5175,
            "state": 1025,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": 0.15
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21083,
        "fields": {
            "answer": 5175,
            "state": 1050,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21084,
        "fields": {
            "answer": 5175,
            "state": 1050,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.15
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21085,
        "fields": {
            "answer": 5175,
            "state": 1005,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21086,
        "fields": {
            "answer": 5175,
            "state": 1005,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.15
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21087,
        "fields": {
            "answer": 5175,
            "state": 1033,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21088,
        "fields": {
            "answer": 5175,
            "state": 1033,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21089,
        "fields": {
            "answer": 5175,
            "state": 1040,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21090,
        "fields": {
            "answer": 5175,
            "state": 1040,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21091,
        "fields": {
            "answer": 5175,
            "state": 1026,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21092,
        "fields": {
            "answer": 5175,
            "state": 1026,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21093,
        "fields": {
            "answer": 5175,
            "state": 1015,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21094,
        "fields": {
            "answer": 5175,
            "state": 1015,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21096,
        "fields": {
            "answer": 5173,
            "state": 1046,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21097,
        "fields": {
            "answer": 5173,
            "state": 1046,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": 0.35
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21098,
        "fields": {
            "answer": 5173,
            "state": 1036,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21099,
        "fields": {
            "answer": 5173,
            "state": 1036,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21100,
        "fields": {
            "answer": 5173,
            "state": 1027,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21101,
        "fields": {
            "answer": 5173,
            "state": 1027,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.15
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21102,
        "fields": {
            "answer": 5173,
            "state": 1011,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21103,
        "fields": {
            "answer": 5173,
            "state": 1011,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.15
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21104,
        "fields": {
            "answer": 5173,
            "state": 1025,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21105,
        "fields": {
            "answer": 5173,
            "state": 1025,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": 0.15
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21106,
        "fields": {
            "answer": 5173,
            "state": 1050,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21107,
        "fields": {
            "answer": 5173,
            "state": 1050,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.15
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21108,
        "fields": {
            "answer": 5173,
            "state": 1005,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21109,
        "fields": {
            "answer": 5173,
            "state": 1005,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21110,
        "fields": {
            "answer": 5173,
            "state": 1033,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21111,
        "fields": {
            "answer": 5173,
            "state": 1033,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21112,
        "fields": {
            "answer": 5173,
            "state": 1040,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21113,
        "fields": {
            "answer": 5173,
            "state": 1040,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21114,
        "fields": {
            "answer": 5173,
            "state": 1026,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21115,
        "fields": {
            "answer": 5173,
            "state": 1026,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21116,
        "fields": {
            "answer": 5173,
            "state": 1015,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21117,
        "fields": {
            "answer": 5173,
            "state": 1015,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21118,
        "fields": {
            "answer": 5173,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21119,
        "fields": {
            "answer": 5173,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21120,
        "fields": {
            "answer": 5173,
            "state": 1017,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21121,
        "fields": {
            "answer": 5173,
            "state": 1017,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21122,
        "fields": {
            "answer": 5173,
            "state": 1003,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21123,
        "fields": {
            "answer": 5173,
            "state": 1003,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21124,
        "fields": {
            "answer": 5173,
            "state": 1023,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21125,
        "fields": {
            "answer": 5173,
            "state": 1023,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21126,
        "fields": {
            "answer": 5173,
            "state": 1000,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21127,
        "fields": {
            "answer": 5173,
            "state": 1000,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21128,
        "fields": {
            "answer": 5173,
            "state": 1009,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21129,
        "fields": {
            "answer": 5173,
            "state": 1009,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.33
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21130,
        "fields": {
            "answer": 5173,
            "state": 1008,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21131,
        "fields": {
            "answer": 5173,
            "state": 1008,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21132,
        "fields": {
            "answer": 5173,
            "state": 1039,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21133,
        "fields": {
            "answer": 5173,
            "state": 1039,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21134,
        "fields": {
            "answer": 5173,
            "state": 1032,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21135,
        "fields": {
            "answer": 5173,
            "state": 1032,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21136,
        "fields": {
            "answer": 5173,
            "state": 1041,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21137,
        "fields": {
            "answer": 5173,
            "state": 1041,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21138,
        "fields": {
            "answer": 5174,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21139,
        "fields": {
            "answer": 5174,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21140,
        "fields": {
            "answer": 5173,
            "state": 1045,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21141,
        "fields": {
            "answer": 5173,
            "state": 1045,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": 0.3
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21143,
        "fields": {
            "answer": 5196,
            "state": 1019,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21145,
        "fields": {
            "answer": 5191,
            "state": 1032,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21148,
        "fields": {
            "answer": 5176,
            "state": 1009,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21152,
        "fields": {
            "answer": 21001,
            "state": 1009,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21156,
        "fields": {
            "answer": 5202,
            "state": 1000,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": -0.3
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21157,
        "fields": {
            "answer": 5235,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21159,
        "fields": {
            "answer": 5236,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21162,
        "fields": {
            "answer": 5237,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21164,
        "fields": {
            "answer": 5225,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21167,
        "fields": {
            "answer": 21003,
            "state": 1004,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21171,
        "fields": {
            "answer": 5245,
            "state": 1015,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21175,
        "fields": {
            "answer": 21006,
            "state": 1015,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21178,
        "fields": {
            "answer": 5246,
            "state": 1022,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21179,
        "fields": {
            "answer": 5246,
            "state": 1033,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21188,
        "fields": {
            "answer": 5253,
            "state": 1014,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21190,
        "fields": {
            "answer": 5250,
            "state": 1012,
            "candidate": 202,
            "affected_candidate": 202,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21193,
        "fields": {
            "answer": 20989,
            "state": 1000,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21194,
        "fields": {
            "answer": 20989,
            "state": 1008,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21195,
        "fields": {
            "answer": 20989,
            "state": 1032,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21196,
        "fields": {
            "answer": 20989,
            "state": 1041,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21197,
        "fields": {
            "answer": 20989,
            "state": 1042,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21198,
        "fields": {
            "answer": 20989,
            "state": 1009,
            "candidate": 202,
            "affected_candidate": 200,
            "state_multiplier": 0.1
        }
    }
]

campaignTrail_temp.answer_feedback_json = [
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2620,
        "fields": {
            "answer": 5139,
            "candidate": 202,
            "answer_feedback": "The man you hoped to snare for the nomination, the famously fair Walter Q. Gresham, makes a statement suggesting that a third party might be necessary to break the hold of the ‘plutocracy’ on the two parties, but insists that he does not want to be a candidate. That doesn’t discourage you.\n\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2623,
        "fields": {
            "answer": 5142,
            "candidate": 202,
            "answer_feedback": "With labor in control, the Union Labor party is inaugurated. You'd hoped that Walter Gresham, the respected judge, might accept, but he issues a firm refusal, lacking confidence a labor-centered party can achieve anything real now. With farmers underrepresented, Georgist Robert Cowdrey receives the nomination.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2624,
        "fields": {
            "answer": 5143,
            "candidate": 202,
            "answer_feedback": "To many in the convention; the tariff ‘debate’ is a farce -- a show put on by the two parties to create the appearance of a difference when both are, in fact, controlled by the same puppeteers. While most delegates support lower tariffs, this excites few.\n\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2625,
        "fields": {
            "answer": 5144,
            "candidate": 202,
            "answer_feedback": "Gresham’s increasingly critical views of monopoly power make this a good angle to take, though some delegates worry that the country isn’t ready for such aggressive interventions. Your opposition will be deep-pocketed.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2626,
        "fields": {
            "answer": 5145,
            "candidate": 202,
            "answer_feedback": "Land reform was an early rallying cry of the people’s movement, as railroads gobbled up the West. This will help you out there.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2627,
        "fields": {
            "answer": 5146,
            "candidate": 201,
            "answer_feedback": "This story is having a definite effect on your campaign, unfortunately."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2628,
        "fields": {
            "answer": 5147,
            "candidate": 202,
            "answer_feedback": "He does not. In the ‘70s he saw greenbackers as un-republican destabilizers, much as he saw Confederates and immigrants in the two decades prior. He has grown more critical of the status quo since then, but this plank indicates to him that the time is not yet right to break with the two parties.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2630,
        "fields": {
            "answer": 5149,
            "candidate": 202,
            "answer_feedback": "You’re walking a tightrope here. You successfully muscle the convention into dropping the greenback plank over the objections of movement veterans who see the move as the wholesale purchase of the day by the mine owners. Gresham isn’t going to like it...\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2631,
        "fields": {
            "answer": 5150,
            "candidate": 201,
            "answer_feedback": "It's not yet clear whether this attack was actually terrorism. Both you and Trump are coming under some criticism for jumping to that conclusion."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2632,
        "fields": {
            "answer": 5151,
            "candidate": 202,
            "answer_feedback": "Some will accuse you of engineering this result yourself, but the truth is simpler. You dream of an earlier time, when good men were elevated to the halls of power by widespread recognition of their excellence, not by their ability to play the political game. Slowly, you begin to consider the massive undertaking in front of you.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2634,
        "fields": {
            "answer": 5153,
            "candidate": 201,
            "answer_feedback": "Pundits talk a lot about you eschewed ideology to take the attack to Trump."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2635,
        "fields": {
            "answer": 5154,
            "candidate": 201,
            "answer_feedback": "Pundits conclude that your speech was somewhat moderate, unifying, and surprisingly non-controversial. Some just thought it was boring."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2636,
        "fields": {
            "answer": 5155,
            "candidate": 202,
            "answer_feedback": "Attacking Blair’s economic orthodoxy is a good move. While many feel that both parties have been captured by the classes, over the last 8 years the GOP has become the face of the plutocracy, and it never hurts to remind voters of this fact, though Blair has advocated for labor more than most Republicans.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2637,
        "fields": {
            "answer": 5156,
            "candidate": 202,
            "answer_feedback": "Yes, you were once a Republican. You were also part of the American party before that. While the corruption of the GOP is undeniable, partisans counter that you could hardly ‘lose your faith’ in a party you never demonstrated much loyalty to in the first place.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2638,
        "fields": {
            "answer": 5157,
            "candidate": 202,
            "answer_feedback": "Fair enough, but quieting the guns on Blair raises the opposite suspicion in the South -- that, having failed to prevent the redemption of the South by the Democrats, the Republicans are working through you to challenge their power there.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2651,
        "fields": {
            "answer": 5170,
            "candidate": 202,
            "answer_feedback": "This lubrication might make it easier to coax more concessions out of the Democracy in case of a deadlock. But it isn’t going to stop them from intimidating Populist orators in the South or stuffing ballot boxes. Or worse, if necessary.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2653,
        "fields": {
            "answer": 5172,
            "candidate": 202,
            "answer_feedback": "When party is central to one's identity, getting voters to abandon the ‘party of the fathers’ will be difficult. Taking on both parties has the best chance of shaking complacent Democrats awake to the opportunity. The Southern Democracy itself is aware of the threat, and you can expect Populist gains in the region to be marred by fraud.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2654,
        "fields": {
            "answer": 5173,
            "candidate": 202,
            "answer_feedback": "For a party that argues the two-party system is fundamentally oppressive, you seem awfully comfortable playing by its rules. Greenbacker veterans agonize as the movement mortgages its future in search of short-term gains, fusing with Democrats out West and Republicans in the South.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2655,
        "fields": {
            "answer": 5174,
            "candidate": 202,
            "answer_feedback": "Fusing with Southern Republicans proves challenging; with the passage of the Blair bill a distinct possibility, they are hesitant to rock the boat by turning coat. All the way you are dogged by Democratic attacks accusing your candidacy of being a Trojan horse for centralist Yankee meddlers.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2656,
        "fields": {
            "answer": 5175,
            "candidate": 202,
            "answer_feedback": "Fusing with Western Democrats goes relatively smoothly, as the Democracy has little presence out West anyway. But the bloody shirt comes out with a vengeance, with Republicans accusing the movement of finally showing its true colors as a vehicle to deliver the Democrats back to Washington.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2657,
        "fields": {
            "answer": 5176,
            "candidate": 202,
            "answer_feedback": "Endorsing the Blair bill is expected, but Black Southerners have carefully maintained a relationship with the national Republican apparatus for decades -- one of the few avenues to power available to them. Why would they throw that relationship away to gamble on a long-shot third party? You struggle to answer.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2658,
        "fields": {
            "answer": 5177,
            "candidate": 201,
            "answer_feedback": "Your best bet is to focus both on Trump's behavior, along with other economic and social issues that Americans and Democrats find important."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2659,
        "fields": {
            "answer": 5178,
            "candidate": 201,
            "answer_feedback": "You should definitely be discussing pocketbook issues on the trail, but don't forget how unpopular Trump is as well."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2660,
        "fields": {
            "answer": 5179,
            "candidate": 201,
            "answer_feedback": "You should definitely be discussing your qualifications on the trail, but don't forget how unpopular Trump is as well."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2665,
        "fields": {
            "answer": 5184,
            "candidate": 202,
            "answer_feedback": "Florida has few electoral votes, and winning it will be difficult. However, this does allow you to have a Southerner on the ticket without ever having to be photographed next to him, which may be your best bet in trying to walk the tricky sectional tightrope.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2669,
        "fields": {
            "answer": 5189,
            "candidate": 202,
            "answer_feedback": "In the past few decades, southern Blacks have become extremely pragmatic. Most understand that such a bill could only gain Southern support on such a basis, with Negro papers arguing that ‘half a loaf’ is better than none at all. To Negroes, you look naive. To Whites, you look dangerous.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2670,
        "fields": {
            "answer": 5191,
            "candidate": 202,
            "answer_feedback": "The weak federal oversight of the funds was one of the many compromises Blair had to make to build up Southern support for the bill. Talk of ‘federal supervision’ just makes most White Southerners think of Reconstruction.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2674,
        "fields": {
            "answer": 5196,
            "candidate": 202,
            "answer_feedback": "While most Populists see the tariff debate as a means of obscuring the similarity between the two parties, it’s clear you’re in your element here. Extortionate protection was one of the reasons you left the GOP, and decreasing consumer prices is good. Unrelatedly, Gorman is supplying his men with bradawls in preparation for Election Day.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2675,
        "fields": {
            "answer": 5197,
            "candidate": 202,
            "answer_feedback": "The division over the tariff is not just partisan but geographical -- the poorer states of the Deep South & the West are for lower duties, while the wealthier states of the Northeast & Upper South defend the status quo. You have little to gain from hedging on an issue that most of your supporters see as a form of ‘class legislation.’\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2676,
        "fields": {
            "answer": 5198,
            "candidate": 202,
            "answer_feedback": "This puts you in an awkward spot regarding the Blair bill -- a plan of such expense is only made possible by the hefty surplus racked up by decades of high tariffs. Blair argues that you would support the spending while slashing the taxation necessary to sustain it.\n\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2677,
        "fields": {
            "answer": 5199,
            "candidate": 201,
            "answer_feedback": "You can run a more assertively populist campaign without completely throwing Obama overboard."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2678,
        "fields": {
            "answer": 5200,
            "candidate": 202,
            "answer_feedback": "This ties in well with your economically progressive message, though it frustrates Morgan.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2679,
        "fields": {
            "answer": 5201,
            "candidate": 202,
            "answer_feedback": "This is a little high-minded, but you have been consistent in your warnings that America is running adrift of its founding ideas.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2680,
        "fields": {
            "answer": 5203,
            "candidate": 201,
            "answer_feedback": "The reluctance of Bernie to endorse you after a couple of personal meetings fuels rampant speculation about the causes."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2684,
        "fields": {
            "answer": 5227,
            "candidate": 202,
            "answer_feedback": "This shakes up the race. Silver mine owners pour funds into your campaign, while both major parties savage you not only as a destabilizing radical, but as an opportunistic turncoat. Your base is overjoyed, glad to have a true choice this election.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2685,
        "fields": {
            "answer": 5228,
            "candidate": 202,
            "answer_feedback": "By now, the two parties have savaged your reputation so thoroughly that this hedge will win few over -- ‘sound money’ voters already have two conservatives to support. From progressive intellectuals to illiterate sharecroppers, many do not believe the fundamental unfairness of the economy can be addressed without currency reform.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2686,
        "fields": {
            "answer": 5229,
            "candidate": 201,
            "answer_feedback": "You are campaigning hard, but several times you break out into uncontrolled coughing fits that don't escape public notice."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2687,
        "fields": {
            "answer": 5230,
            "candidate": 201,
            "answer_feedback": "Unfortunately, your decision to keep campaigning has really backfired. Your health issue has gotten worse, forcing you to take a significant break from the campaign in October."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2691,
        "fields": {
            "answer": 5245,
            "candidate": 202,
            "answer_feedback": "Sometimes, it’s good to be quiet and let your scars do the talking. As you slowly ascend the stage with the aid of your crutches, the jeers quiet.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2692,
        "fields": {
            "answer": 5246,
            "candidate": 202,
            "answer_feedback": "Temperance is gaining steam in the South, but this position is very unpopular with the German-Americans west of the Mississippi.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2695,
        "fields": {
            "answer": 5249,
            "candidate": 201,
            "answer_feedback": "Trump's comments dominate the airwaves for several days, and even bring some condemnation from notable conservatives."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2696,
        "fields": {
            "answer": 5250,
            "candidate": 202,
            "answer_feedback": "Maybe no organizer could have guided the K of L through the tempest of these last few years, but Powderly has failed utterly. Associating yourself with the withering organization will net you few gains, at the cost of being seen as increasingly radical.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2699,
        "fields": {
            "answer": 5253,
            "candidate": 202,
            "answer_feedback": "This is a familiar rallying cry for urban labor, and one that is difficult to paint with the label of ‘socialist.’ Though they will try.\n\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2702,
        "fields": {
            "answer": 5256,
            "candidate": 201,
            "answer_feedback": "After a few days, Comey does announce that no new evidence was found. Unfortunately for you, there was a definite effect on the polls as early voting began."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2708,
        "fields": {
            "answer": 5215,
            "candidate": 201,
            "answer_feedback": "“Clinton defends Iraq War” is the headline today. Your statement might be factually accurate, but it's out of step with the views of most in your party."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2712,
        "fields": {
            "answer": 5221,
            "candidate": 202,
            "answer_feedback": "But while Foster wins praise from the papers, he will implement the policy sluggishly. The Postal Service, overstuffed over the last eight years with Republican partisans, will throw much of its muscle behind Blair in the coming months.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2713,
        "fields": {
            "answer": 5223,
            "candidate": 201,
            "answer_feedback": "Supports and opponents both note that you are not really rocking the boat on this issue."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2714,
        "fields": {
            "answer": 5224,
            "candidate": 202,
            "answer_feedback": "Democrats are protective of their own status as the party of ‘moderation’ on immigration. They dig up an article from your Know-Nothing days in which you called for an end to allowing the ‘lazy, lousy, filthy, lop-eared, greasy Dutch’ to immigrate. You don’t remember using those exact words. You didn’t use those exact words, right?\n\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2715,
        "fields": {
            "answer": 5225,
            "candidate": 202,
            "answer_feedback": "Immigrant laborers feel betrayed by your words, shocked at how quickly nationality asserts its priority over class. But your coalition is mostly agrarian, and those urban laborers tend to live in states you weren’t winning anyway, so this harsh stance will help you.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2718,
        "fields": {
            "answer": 5235,
            "candidate": 202,
            "answer_feedback": "While derided as a socialistic project by many major papers, farmers across the country have followed the Texas Exchange with curiosity, wondering if they might one day have a way to fight back against ever-decreasing crop prices and discrimination from the bankers and the railroads.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2719,
        "fields": {
            "answer": 5236,
            "candidate": 202,
            "answer_feedback": "Home to a large proportion of the state’s Negroes and deeply invested in the canal project, Houston is a Republican stronghold. Making inroads here is difficult.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20727,
        "fields": {
            "answer": 20726,
            "candidate": 202,
            "answer_feedback": "If you’re going to overcome a status quo where people ‘vote as they shot,’ having two former generals, Union and Confederate, campaigning together is the kind of bold move necessary. But embracing Law shocks Northerners, and Populists begin to feel deeply unwelcome in many small towns across the North.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20732,
        "fields": {
            "answer": 5262,
            "candidate": 202,
            "answer_feedback": "Your leg, still disabled from the war, makes travel difficult. But over the next few months you will see far more of the country than Blair and Vilas combined, and see plain people not represented in the halls of power.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20768,
        "fields": {
            "answer": 5190,
            "candidate": 202,
            "answer_feedback": "Framing the bill as a sectional issue works to your advantage here, and helps to divert discussion away from trickier debates concerning race and constitutionality.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20771,
        "fields": {
            "answer": 5202,
            "candidate": 202,
            "answer_feedback": "The public is surprised to see such a paragon of integrity pull his punches here, but one man takes special notice of your silence. With Vilas attacking the project non-stop, Morgan starts looking for ways to humble the upstart professor...\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20777,
        "fields": {
            "answer": 5232,
            "candidate": 202,
            "answer_feedback": "The election of Tilden cooled Southern rage for a moment, but eight years of a government stuffed with Conkling’s cronies and beholden to Northern industry and finance has left much of the region some combination of penniless, hopeless, and restless. If you can’t channel that anger right now, the demagogues will.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20779,
        "fields": {
            "answer": 5237,
            "candidate": 202,
            "answer_feedback": "As a fusion of both South and West, Texas is a fitting place for the Populist movement to blossom. With this move, you conspicuously appeal to the latter.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20789,
        "fields": {
            "answer": 5214,
            "candidate": 202,
            "answer_feedback": "To choose to play against one cheating opponent is foolish; to choose to play against two? Is it bravery or insanity?\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20819,
        "fields": {
            "answer": 5258,
            "candidate": 202,
            "answer_feedback": "You never had any love for partisan politics, but the never-ending barrage from two fronts has left you thoroughly embittered. You head inside and sit by the telegraph, to see if the people have heard your call.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20976,
        "fields": {
            "answer": 20975,
            "candidate": 202,
            "answer_feedback": "This is simply a bridge too far. The movement is bigger than one man, or one ticket, or one election, and sacrificing the central cause entirely is roundly rejected by the convention. They adopt a full endorsement of greenbackism, and Gresham loses interest in the nomination.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20980,
        "fields": {
            "answer": 20979,
            "candidate": 202,
            "answer_feedback": "This betrays a lack of understanding of what options are available to Negroes in the South. Fiery speeches and long wagon parades urging a break from the ‘party of the fathers’ are tolerated only, barely, when the marchers are white and mostly veterans of the Confederacy. As such, Black Populist support operates through covert networks.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20992,
        "fields": {
            "answer": 20989,
            "candidate": 202,
            "answer_feedback": "As the election nears, more stories of violence, fraud, and intimidation seep out of the South. The Democracy was never going to play fair. You can only hope that you’ve inspired enough people to overcome the crude strategy.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20994,
        "fields": {
            "answer": 20993,
            "candidate": 202,
            "answer_feedback": "Gresham has had nativist tendencies since the ‘50s, and these sentiments are broadly popular within the party’s base in the South and West. If you’re looking to harmonize the platform and the candidate, this is probably the way to go.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20996,
        "fields": {
            "answer": 20995,
            "candidate": 202,
            "answer_feedback": "By rejecting fusion altogether, you may be dooming yourself to split the opposition in some winnable states, but you’re standing by the Populist message that both parties are fundamentally the same, and neither party can claim that you’re a tool of the other.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20998,
        "fields": {
            "answer": 20997,
            "candidate": 202,
            "answer_feedback": "The nation’s Georgists rally around your endorsement of a land tax, while curious consumers, stifled by high prices, are becoming more curious about an income tax. These are new and controversial ideas, however.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21000,
        "fields": {
            "answer": 20999,
            "candidate": 202,
            "answer_feedback": "The crowd looks stonily on, the implications clear. This would relatively benefit the poor-but-literate West at the expense of the South, where literacy rates are lowest. Some Southerners got their hopes up about you, but it looks like they’re going to be ignored again.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21002,
        "fields": {
            "answer": 21001,
            "candidate": 202,
            "answer_feedback": "While most Negro papers are loyal to the Republicans, many are run without close connections to the party apparatus. A few prominent editors make the case for strategic Populist voting in states where your candidacy might successfully contest the Democrats.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21004,
        "fields": {
            "answer": 21003,
            "candidate": 202,
            "answer_feedback": "While immigrant laborers take notice of this, many are still wary of joining your agrarian-centered coalition, and they tend to live in states you have slim chances of winning. Meanwhile, your base was expecting a firm stance in favor of native-born workers, and if you won’t give it to them, Blair will.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21007,
        "fields": {
            "answer": 21005,
            "candidate": 202,
            "answer_feedback": "Every dollar sent southwards to educate the children of traitors and slaves is another dollar diverted from the destitute veteran or the worthy widow. Many partisan Republicans are leery of this idea coming from Blair; you have even less credibility. The North still has its idealists, but the idea has many detractors.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21008,
        "fields": {
            "answer": 21006,
            "candidate": 202,
            "answer_feedback": "This works, to a degree. While many are still strongly loyal to the GOP, Conkling’s presidency has made clear the level of power held by forces willing to take drastic measures to preserve the increasingly unstable economic status quo.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21012,
        "fields": {
            "answer": 21009,
            "candidate": 202,
            "answer_feedback": "Slaughter traverses the Middle West, breaking from most suffragists who are squarely in the Republican camp. Conkling and Willard leaned hard on the new states to enact equal suffrage, but these actions were unpopular in the socially conservative South.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21013,
        "fields": {
            "answer": 21010,
            "candidate": 202,
            "answer_feedback": "Fair enough, but social reform is an important part of the people’s movement as well.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21016,
        "fields": {
            "answer": 21014,
            "candidate": 202,
            "answer_feedback": "Child labor restrictions appeal more to urbanites. This movement will grow with time, but today, only 1 in 6 Southerners and about 1 in 3 Westerners live in an urban area. Most farmers see these proposed bans as unnecessarily disruptive to their regular way of making a living.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21017,
        "fields": {
            "answer": 21015,
            "candidate": 202,
            "answer_feedback": "A cause stretching back to the Greenbackers, nationalization of the railroads is still a fringe view politically. Newspapers warn of creeping socialism.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21020,
        "fields": {
            "answer": 21018,
            "candidate": 202,
            "answer_feedback": "Your overtures are largely ignored. In the AFL’s pragmatic, reformist vision of labor relations, there is little reward and ample risk in linking themselves with a revolutionary third party of wild-eyed prairie inflationists and penniless former Confederates.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21021,
        "fields": {
            "answer": 21019,
            "candidate": 202,
            "answer_feedback": "The fact is that labor simply isn’t organized enough to support any broad-based political movement at this juncture. Your integrity is renowned among the nation’s working class, but the agrarian movement behind you just doesn’t know how to win over these disorganized workers, and working-class Catholics still distrust you.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21025,
        "fields": {
            "answer": 21023,
            "candidate": 202,
            "answer_feedback": "Your old party has fallen so far; a sound loss is greatly needed if that organization is to rediscover its original virtue. You head inside and sit by the telegraph, to see if the people have heard your call.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21026,
        "fields": {
            "answer": 21024,
            "candidate": 202,
            "answer_feedback": "You know this may be burning bridges, but you’re too exhausted to care. You head inside and sit by the telegraph, to see if the people have heard your call.\n"
        }
    }
]



campaignTrail_temp.jet_data = [{
    "nicknames": {
        "200": "William F. Vilas",
        "201": "Henry W. Blair",
        "202": "Walter Q. Gresham",
        "203": "John St. John"
    },
    "mapping_enabled": false,
    "mapping_data": {},
    "endings_enabled": false,
    "ending_data": {
        "1729815981442": {
            "id": 1729815981442,
            "variable": 0,
            "operator": ">",
            "value": 0,
            "endingImage": "",
            "endingText": "Put ending text here, you can and should use <p>HTML tags</p>!"
        }
    }
}
]

campaignTrail_temp.candidate_image_url = 'https://i.imgur.com/0OnhTyv.png';
campaignTrail_temp.running_mate_image_url = 'https://i.imgur.com/Wr3Ng77.jpeg';
campaignTrail_temp.candidate_last_name = 'Gresham';
campaignTrail_temp.running_mate_last_name = 'Law';
campaignTrail_temp.running_mate_state_id = '1031';
campaignTrail_temp.player_answers = [];
campaignTrail_temp.player_visits = [];
campaignTrail_temp.answer_feedback_flg = 1;
campaignTrail_temp.game_start_logging_id = '3663253';

(function(e, t, n, r, i) {
    function s(e, t, n, r) {
        r = r instanceof Array ? r : [];
        var i = {};
        for (var s = 0; s < r.length; s++) {
            i[r[s]] = true
        }
        var o = function(e) {
            this.element = e
        };
        o.prototype = n;
        e.fn[t] = function() {
            var n = arguments;
            var r = this;
            this.each(function() {
                var s = e(this);
                var u = s.data("plugin-" + t);
                if (!u) {
                    u = new o(s);
                    s.data("plugin-" + t, u);
                    if (u._init) {
                        u._init.apply(u, n)
                    }
                } else if (typeof n[0] == "string" && n[0].charAt(0) != "_" && typeof u[n[0]] == "function") {
                    var a = Array.prototype.slice.call(n, 1);
                    var f = u[n[0]].apply(u, a);
                    if (n[0] in i) {
                        r = f
                    }
                }
            });
            return r
        }
    }
    var o = 900,
        u = 595,
        a = 50;
    var f = {
        stateStyles: {
            fill: "#333",
            stroke: "#666",
            "stroke-width": 1,
            "stroke-linejoin": "round",
            scale: [1, 1]
        },
        stateHoverStyles: {
            fill: "#33c",
            stroke: "#000",
            scale: [1.1, 1.1]
        },
        stateHoverAnimation: 500,
        stateSpecificStyles: {},
        stateSpecificHoverStyles: {},
        click: null,
        mouseover: null,
        mouseout: null,
        clickState: {},
        mouseoverState: {},
        mouseoutState: {},
        showLabels: true,
        labelWidth: 20,
        labelHeight: 15,
        labelGap: 6,
        labelRadius: 3,
        labelBackingStyles: {
            fill: "#333",
            stroke: "#666",
            "stroke-width": 1,
            "stroke-linejoin": "round",
            scale: [1, 1]
        },
        labelBackingHoverStyles: {
            fill: "#33c",
            stroke: "#000"
        },
        stateSpecificLabelBackingStyles: {},
        stateSpecificLabelBackingHoverStyles: {},
        labelTextStyles: {
            fill: "#fff",
            stroke: "none",
            "font-weight": 300,
            "stroke-width": 0,
            "font-size": "10px"
        },
        labelTextHoverStyles: {},
        stateSpecificLabelTextStyles: {},
        stateSpecificLabelTextHoverStyles: {}
    };
    var l = {
        _init: function(t) {
            this.options = {};
            e.extend(this.options, f, t);
            var n = this.element.width();
            var i = this.element.height();
            var s = this.element.width() / o;
            var l = this.element.height() / u;
            this.scale = Math.min(s, l);
            this.labelAreaWidth = Math.ceil(a / this.scale);
            var c = o + Math.max(0, this.labelAreaWidth - a);
            this.paper = r(this.element.get(0), c, u);
            this.paper.setSize(n, i);
            this.paper.setViewBox(0, 0, c, u, false);
            this.stateHitAreas = {};
            this.stateShapes = {};
            this.topShape = null;
            this._initCreateStates();
            this.labelShapes = {};
            this.labelTexts = {};
            this.labelHitAreas = {};
            if (this.options.showLabels) {
                this._initCreateLabels()
            }
        },
        _initCreateStates: function() {
            var t = this.options.stateStyles;
            var n = this.paper;
            var r = {
                AL: "M631.30647,460.41572L629.81587,446.09422L627.06763,427.34158L627.22929,413.27709L628.03759,382.23824L627.87593,365.58718L628.04102,359.16812L672.5255,355.54867L672.3777,357.73109L672.53936,359.83269L673.18601,363.22756L676.58089,371.14893L679.00579,381.01024L680.46074,387.15335L682.07734,392.00317L683.5323,398.95458L685.63388,405.25934L688.22045,408.65423L688.70543,412.04909L690.64537,412.8574L690.80703,414.95899L689.02875,419.80881L688.54377,423.04203L688.38211,424.98195L689.99873,429.3468L690.32205,434.68159L689.51373,437.10651L690.16039,437.91481L691.61533,438.72311L691.94347,441.61193L686.34581,441.25838L679.55606,441.90503L654.01366,444.81491L643.6021,446.22168L643.38072,449.09908L645.15899,450.87735L647.74556,452.81727L648.32642,460.75271L642.78436,463.32561L640.03614,463.00229L642.78436,461.06236L642.78436,460.0924L639.71282,454.11096L637.44957,453.46432L635.99462,457.82915L634.70134,460.57738L634.0547,460.41572L631.30647,460.41572Z",
                AR: "M 593.825 343.053 L 589.845 343.77 L 584.733 343.136 L 585.153 341.534 L 588.133 338.967 L 589.077 335.311 L 587.248 332.339 L 508.83 334.853 L 510.43 341.712 L 510.43 349.942 L 511.802 360.916 L 512.031 398.753 L 514.317 400.697 L 517.289 399.325 L 520.033 400.468 L 520.713 407.041 L 576.334 405.901 L 577.48 403.81 L 577.193 400.261 L 575.368 397.289 L 576.966 395.804 L 575.368 393.292 L 576.052 390.782 L 577.42 385.177 L 579.938 383.114 L 579.252 380.83 L 582.91 375.458 L 585.654 374.089 L 585.54 372.596 L 585.195 370.77 L 588.052 365.172 L 590.455 363.915 L 590.898 360.516 L 589.913 358.294 L 587.336 355.515 L 588.275 354.795 L 590.929 352.374 L 591.479 350.355 L 592.759 346.308 L 593.825 343.053 Z",
                CA: "M144.69443,382.19813L148.63451,381.70951L150.12055,379.69807L150.66509,376.75698L147.11357,376.16686L146.5994,375.49864L147.0769,373.46633L146.91762,372.87666L148.84019,372.25707L151.88297,369.42439L152.46453,364.42929L153.84443,361.02718L155.78772,358.86092L159.30659,357.27125L160.96098,355.66642L161.02971,353.55758L160.03638,352.97757L159.01323,351.90484L157.85801,346.05639L155.17281,341.2263L155.73862,337.7213L153.31904,336.69199L84.257718,232.51359L103.15983,164.9121L36.079967,149.21414L34.573071,153.94738L34.41141,161.38376L29.238275,173.18497L26.166727,175.77154L25.843406,176.90316L24.06514,177.71147L22.610196,181.91464L21.801894,185.14785L24.550122,189.35102L26.166727,193.55419L27.29835,197.11072L26.975029,203.57714L25.196764,206.64869L24.550122,212.46847L23.580159,216.18666L25.358424,220.06651L28.106652,224.593L30.369899,229.44282L31.663182,233.48433L31.339862,236.71754L31.016541,237.20252L31.016541,239.3041L36.674657,245.60886L36.189676,248.03377L35.543034,250.29702L34.896392,252.23694L35.058052,260.48163L37.159638,264.19982L39.099564,266.78638L41.847792,267.27137L42.817755,270.01959L41.686132,273.57612L39.584545,275.19273L38.452922,275.19273L37.64462,279.07258L38.129601,281.98247L41.362811,286.3473L42.979415,291.6821L44.434359,296.37025L45.727643,299.4418L49.122513,305.26158L50.577457,307.84814L51.062439,310.75803L52.679043,311.72799L52.679043,314.1529L51.870741,316.09283L50.092476,323.20589L49.607494,325.14581L52.032402,327.89404L56.235574,328.37902L60.762067,330.15729L64.641918,332.25887L67.551807,332.25887L70.461695,335.33042L73.048262,340.18024L74.179886,342.44348L78.059737,344.54507L82.909551,345.35337L84.364495,347.45496L85.011137,350.68817L83.556193,351.33481L83.879514,352.30477L87.112725,353.11307L89.860953,353.27474L93.020842,351.58789L96.900696,355.79106L97.708998,358.05431L100.29557,362.25748L100.61889,365.49069L100.61889,374.867L101.10387,376.64526L111.12682,378.10021L130.84939,380.84843L144.69443,382.19813ZM56.559218,338.48145L57.852506,340.01723L57.690846,341.31052L54.457625,341.22969L53.891811,340.01723L53.245167,338.56228L56.559218,338.48145ZM58.49915,338.48145L59.711608,337.83481L63.268151,339.9364L66.339711,341.14885L65.450575,341.79551L60.924066,341.55301L59.307456,339.9364L58.49915,338.48145ZM79.191764,358.28493L80.970029,360.62901L81.778342,361.59898L83.314121,362.16479L83.879928,360.70984L82.909965,358.93157L80.242562,356.91081L79.191764,357.07247L79.191764,358.28493ZM77.736809,366.93379L79.515085,370.08618L80.727543,372.02612L79.272589,372.2686L77.979305,371.05615C77.979305,371.05615,77.251828,369.6012,77.251828,369.19704C77.251828,368.7929,77.251828,367.01462,77.251828,367.01462L77.736809,366.93379Z",
                CO: "M380.03242,320.96457L384.93566,234.63961L271.5471,221.99565L259.33328,309.93481L380.03242,320.96457Z",
                CT: "M 874.068 178.863 L 870.391 163.984 L 865.672 164.904 L 844.443 169.647 L 845.443 172.873 L 846.898 180.148 L 847.075 189.115 L 845.855 191.29 L 847.776 193.222 L 852.048 189.316 L 855.604 186.083 L 857.544 183.982 L 858.352 184.628 L 861.1 183.173 L 866.274 182.042 L 874.068 178.863 Z",
                DE: "M 825.626 228.279 L 825.994 226.132 L 826.369 224.441 L 824.746 224.839 L 823.131 225.306 L 820.925 227.071 L 822.645 232.114 L 824.908 237.772 L 827.01 247.471 L 828.626 253.776 L 833.638 253.615 L 839.78 252.434 L 837.516 245.048 L 836.546 245.533 L 832.989 243.108 L 831.211 238.42 L 829.271 234.863 L 826.124 231.993 L 825.26 229.895 L 825.626 228.279 Z",
                FL: "M759.8167,439.1428L762.08236,446.4614L765.81206,456.20366L771.14685,465.57996L774.86504,471.88472L779.71486,477.38118L783.75637,481.09937L785.37297,484.00926L784.24135,485.30254L783.43305,486.59582L786.34293,494.03221L789.25282,496.94209L791.83939,502.27689L795.39592,508.09667L799.92241,516.34135L801.2157,523.93939L801.70068,535.90227L802.34732,537.68053L802.024,541.0754L799.59909,542.36869L799.92241,544.30861L799.27577,546.24854L799.59909,548.67344L800.08407,550.61337L797.33585,553.84658L794.2643,555.30152L790.38445,555.46318L788.9295,557.07979L786.5046,558.04975L785.21131,557.56477L784.07969,556.59481L783.75637,553.68492L782.94806,550.29005L779.55319,545.11691L775.99666,542.85367L772.11681,542.53035L771.30851,543.82363L768.23696,539.4588L767.59032,535.90227L765.00375,531.86076L763.22549,530.72913L761.60888,532.83072L759.83062,532.5074L757.72903,527.49592L754.81914,523.61607L751.90925,518.28128L749.32269,515.20973L745.76616,511.49154L747.86774,509.06663L751.10095,503.57017L750.93929,501.95357L746.4128,500.98361L744.79619,501.63025L745.11952,502.27689L747.70608,503.24685L746.25114,507.77335L745.44284,508.25833L743.66457,504.21682L742.37129,499.367L742.04797,496.61877L743.50291,491.93062L743.50291,482.39265L740.43136,478.67446L739.13808,475.60291L733.96494,474.30963L732.02502,473.66299L730.40841,471.07642L727.01354,469.45981L725.88192,466.06494L723.13369,465.09498L720.70878,461.37679L716.50561,459.92185L713.59572,458.4669L711.00916,458.4669L706.96764,459.27521L706.80598,461.21513L707.61429,462.18509L707.1293,463.31672L704.05776,463.15506L700.33957,466.71159L696.78303,468.65151L692.90318,468.65151L689.66997,469.9448L689.34665,467.19657L687.73005,465.25664L684.82016,464.12502L683.20356,462.67007L675.12053,458.79022L667.52249,457.01196L663.15766,457.6586L657.17622,458.14358L651.19478,460.24517L647.71554,460.85813L647.47762,452.80838L644.89105,450.86846L643.11278,449.09019L643.4361,446.01863L653.62072,444.72535L679.16312,441.81546L685.95287,441.16882L691.38887,441.44909L693.97544,445.32895L695.43038,446.78389L703.52854,447.29911L714.34829,446.65247L735.86068,445.35918L741.3064,444.68481L746.41398,444.88932L746.84081,447.79921L749.07381,448.60751L749.30875,443.97751L747.78053,439.80456L749.08893,438.36473L754.64356,438.81948L759.8167,439.1428ZM772.36211,571.54788L774.78703,570.90124L776.08031,570.65875L777.53527,568.31466L779.87935,566.69805L781.17264,567.18304L782.87008,567.50636L783.27423,568.55715L779.79853,569.76961L775.59533,571.22456L773.25125,572.43702L772.36211,571.54788ZM785.86081,566.53639L787.07327,567.58719L789.82151,565.4856L795.15632,561.28241L798.87452,557.40254L801.38027,550.77444L802.35024,549.077L802.5119,545.68212L801.78442,546.1671L800.81446,548.99617L799.3595,553.6035L796.12628,558.8575L791.76144,563.06068L788.36656,565.00061L785.86081,566.53639Z",
                GA: "M672.29229,355.5518L672.29229,357.73422L672.45395,359.83582L673.10059,363.23069L676.49547,371.15206L678.92038,381.01337L680.37532,387.15648L681.99193,392.00629L683.44688,398.9577L685.54847,405.26247L688.13504,408.65735L688.62002,412.05222L690.55995,412.86052L690.72161,414.96212L688.94334,419.81193L688.45836,423.04515L688.2967,424.98508L689.91331,429.34992L690.23663,434.68472L689.42832,437.10963L690.07497,437.91794L691.52992,438.72624L691.73462,441.94433L693.96763,445.29386L696.21807,447.45591L704.13945,447.61757L714.9592,446.97093L736.47159,445.67765L741.91731,445.00328L746.49456,445.03101L746.65622,447.9409L749.24279,448.7492L749.56611,444.38436L747.9495,439.85786L749.08113,438.24126L754.90091,439.04956L759.87832,439.36734L759.1029,433.06855L761.36614,423.0456L762.82109,418.84242L762.3361,416.25586L765.67051,410.01156L765.16021,408.65988L763.2468,409.36446L760.66024,408.07116L760.01359,405.96957L758.72031,402.41304L756.45705,400.31145L753.87049,399.66481L752.25388,394.81499L749.32887,388.47999L745.1257,386.54006L743.0241,384.60013L741.73081,382.01356L739.62923,380.07363L737.36598,378.78034L735.10273,375.87045L732.03118,373.60721L727.50467,371.82893L727.01969,370.37399L724.59478,367.4641L724.1098,366.00915L720.71492,361.03867L717.19505,361.13784L713.44014,358.7817L712.02186,357.48842L711.69854,355.71015L712.56934,353.77023L714.79598,352.66009L714.16204,350.56287L672.29229,355.5518Z",
                ID: "M 148.779 175.128 L 157.25 141.263 L 158.621 137.034 L 161.136 131.09 L 159.879 128.803 L 157.364 128.918 L 156.564 127.889 L 157.021 126.746 L 157.364 123.659 L 161.822 118.172 L 163.651 117.715 L 164.794 116.572 L 165.366 113.371 L 166.28 112.685 L 170.167 106.856 L 174.053 102.512 L 174.282 98.739 L 170.853 96.11 L 169.317 91.709 L 182.942 28.368 L 196.46 30.896 L 192.052 52.279 L 195.612 59.764 L 194.031 64.425 L 196.001 69.066 L 199.139 70.321 L 202.974 79.878 L 206.487 84.315 L 206.994 85.458 L 210.335 86.601 L 210.704 88.698 L 203.733 106.074 L 203.568 108.64 L 206.199 111.962 L 207.104 111.913 L 212.015 108.888 L 212.693 107.793 L 214.255 108.452 L 213.977 113.805 L 216.716 126.388 L 220.634 129.566 L 222.315 131.731 L 221.598 135.815 L 222.664 138.623 L 223.726 139.714 L 226.205 137.362 L 229.054 137.411 L 231.973 138.747 L 234.753 138.065 L 238.547 137.904 L 242.526 139.504 L 245.269 139.208 L 245.766 136.17 L 248.699 135.406 L 249.959 136.921 L 250.4 139.866 L 251.824 141.08 L 243.073 196.085 C 243.073 196.085 155.772 176.632 148.779 175.128 Z",
                IL: "M619.54145,300.34244L619.5727,297.11273L620.14009,292.46677L622.47262,289.55091L624.33927,285.47515L626.57229,281.47982L626.20079,276.22742L624.19558,272.68485L624.0992,269.33817L624.79403,264.06866L623.96862,256.89029L622.90228,241.11284L621.609,226.0955L620.68672,214.4563L620.41421,213.53491L619.60591,210.94834L618.31263,207.23015L616.69602,205.45188L615.24108,202.86532L615.00751,197.37636L569.21108,199.97461L569.4397,202.34656L571.72593,203.03243L572.64041,204.17554L573.09766,206.00452L576.98424,209.43386L577.67012,211.72009L576.98424,215.14943L575.15526,218.80739L574.4694,221.32223L572.18317,223.15122L570.35419,223.83709L565.09587,225.20882L564.41,227.0378L563.72413,229.09541L564.41,230.46715L566.23898,232.06751L566.01036,236.18271L564.18137,237.78307L563.49551,239.38343L563.49551,242.1269L561.66653,242.58414L560.06617,243.72726L559.83755,245.099L560.06617,247.1566L558.3515,248.47117L557.3227,251.27181L557.77994,254.92976L560.06617,262.24569L567.3821,269.79024L572.86903,273.4482L572.64041,277.79203L573.55491,279.16377L579.95634,279.62101L582.69981,280.99275L582.01395,284.65071L579.72772,290.5949L579.04185,293.79562L581.32807,297.6822L587.72951,302.94052L592.30197,303.62639L594.35956,308.65609L596.41717,311.8568L595.50268,314.82889L597.10304,318.9441L598.93202,321.00171L600.34605,320.12102L601.25371,318.04623L603.46679,316.29903L605.59826,315.68463L608.20079,316.86443L611.82778,318.24013L613.01673,317.9419L613.2166,315.68345L611.9293,313.27166L612.23352,310.89494L614.07192,309.54749L617.09446,308.7372L618.35536,308.27868L617.74275,306.8918L616.95138,304.53743L618.38398,303.55647L619.54145,300.34244Z",
                IN: "M619.56954,299.97132L619.63482,297.11274L620.11981,292.58623L622.38305,289.67635L624.16133,285.79648L626.74789,281.59331L626.26291,275.77352L624.48465,273.02529L624.16133,269.79208L624.96963,264.29561L624.48465,257.3442L623.19135,241.33979L621.89807,225.98203L620.9276,214.26201L623.99866,215.15152L625.45361,216.12148L626.58523,215.79816L628.68682,213.85824L631.51639,212.24125L636.60919,212.07921L658.59506,209.81595L664.17079,209.28279L665.67393,225.239L669.92528,262.08055L670.52374,267.85215L670.15224,270.1154L671.38022,271.91077L671.47661,273.28332L668.95532,274.88283L665.41589,276.43414L662.21376,276.98442L661.6153,281.85135L657.04061,285.16382L654.24419,289.17426L654.56751,291.55099L653.98617,293.08519L650.6597,293.08519L649.07417,291.46859L646.58086,292.73079L643.8979,294.23393L644.05957,297.28838L642.86578,297.54641L642.3979,296.52827L640.23102,295.02513L636.9807,296.36661L635.42939,299.37286L633.99155,298.56456L632.5366,296.96505L628.07226,297.45004L622.47943,298.42L619.56954,299.97132Z",
                IA: "M569.19154,199.5843L569.45592,202.3705L571.67964,202.94776L572.63358,204.17309L573.13359,206.02845L576.92643,209.3871L577.6123,211.7786L576.93796,215.20307L575.35565,218.43505L574.55631,221.17684L572.38356,222.77888L570.66805,223.35128L565.08903,225.21148L563.69757,229.06017L564.42621,230.43191L566.26672,232.1145L565.98379,236.15079L564.22064,237.68865L563.44923,239.33179L563.57645,242.10811L561.69014,242.56535L560.06469,243.67026L559.7859,245.02289L560.06469,247.13781L558.51367,248.25388L556.04314,245.1206L554.78057,242.67073L489.04475,245.18558L488.12672,245.35102L486.07432,240.83506L485.8457,234.20499L484.24534,230.08978L483.55948,224.83147L481.27325,221.1735L480.35877,216.37243L477.61529,208.82788L476.47218,203.45524L475.10044,201.28333L473.50008,198.53987L475.45406,193.69604L476.8258,187.98047L474.08233,185.92286L473.62508,183.17939L474.53958,180.66454L476.25425,180.66454L558.90825,179.39506L559.74251,183.57818L561.99469,185.13915L562.2514,186.56224L560.22186,189.95155L560.41227,193.15707L562.92713,196.95527L565.45392,198.24889L568.5332,198.75194L569.19154,199.5843Z",
                KS: "M507.88059,324.38028L495.26233,324.58471L449.17324,324.12748L404.61576,322.06985L379.98602,320.81244L383.87981,256.21747L405.96327,256.89264L446.2524,257.73404L490.55364,258.72162L495.64927,258.72162L497.83367,260.88402L499.85133,260.86264L501.49163,261.87511L501.42913,264.88434L499.60015,266.60971L499.2679,268.84188L501.11098,272.24421L504.06334,275.43927L506.39069,277.05373L507.69146,288.29455L507.88059,324.38028Z",
                KY: "M725.9944,295.2707L723.70108,297.67238L720.12289,301.66642L715.19834,307.13109L713.98257,308.84686L713.92007,310.94844L709.54021,313.11253L703.88209,316.50741L696.65022,318.30626L644.78233,323.20512L629.02277,324.98338L624.40157,325.49609L620.53322,325.46837L620.30627,329.68865L612.12686,329.83321L605.17545,330.47985L597.18797,330.41963L598.39575,329.09955L600.89529,327.5587L601.12392,324.35797L602.03841,322.52899L600.43159,319.99009L601.23342,318.08328L603.49668,316.30502L605.59826,315.65837L608.34649,316.95166L611.90303,318.24494L613.03466,317.92162L613.19632,315.65837L611.90303,313.23346L612.22635,310.97021L614.16628,309.51527L616.75286,308.86862L618.36946,308.22198L617.56116,306.44371L616.91452,304.50378L618.42114,303.50798C618.42442,303.47086,619.6751,299.98569,619.65943,299.85017L622.71265,298.37149L628.03244,297.40153L632.52648,296.91655L633.91892,298.54398L635.44719,299.41478L637.03796,296.30657L640.22504,295.02395L642.43013,296.50798L642.84069,297.50702L644.01421,297.24301L643.85254,294.29008L646.98341,292.54089L649.1315,291.46741L650.66086,293.12822L653.97901,293.08402L654.56634,291.51277L654.19883,289.24953L656.79936,285.25103L661.57591,281.81313L662.28186,276.97727L665.20688,276.52136L668.99834,274.87568L671.44166,273.16744L671.24333,271.60251L670.10088,270.14757L670.6667,267.15266L674.85155,267.03516L677.15146,266.28936L680.49885,267.71846L682.55296,272.0833L687.68525,272.09412L689.73626,274.30231L691.35171,274.15461L693.9534,272.87644L699.19046,273.44981L701.76538,273.66732L703.45296,271.61108L706.07091,270.1852L707.95269,269.4781L708.59933,272.31473L710.64276,273.37307L713.28552,275.45556L713.40299,281.1288L714.21129,282.70121L716.80101,284.25749L717.57265,286.552L721.73254,289.98894L723.53785,293.61218L725.9944,295.2707Z",
                LA: "M607.96706,459.16125L604.68245,455.99511L605.69236,450.49488L605.03101,449.6018L595.76934,450.60836L570.74102,451.06728L570.05683,448.6726L570.96964,440.2169L574.28552,434.27105L579.31688,425.58003L578.74281,423.18201L579.9994,422.50116L580.45833,420.54867L578.17209,418.49274L578.0603,416.55029L576.22964,412.20478L576.08259,405.86618L520.6088,406.79015L520.63737,416.36372L521.32324,425.73725L522.00911,429.62383L524.52396,433.73904L525.43845,438.76875L529.78228,444.25568L530.0109,447.4564L530.69677,448.14227L530.0109,456.60131L527.03881,461.631L528.63917,463.68861L527.95329,466.20345L527.26743,473.51938L525.89569,476.72009L526.01815,480.33654L530.70463,478.81639L542.81798,479.0234L553.16425,482.57993L559.63067,483.71156L563.34886,482.25661L566.58207,483.38824L569.81528,484.3582L570.62358,482.25661L567.39037,481.12499L564.8038,481.60997L562.05557,479.99337C562.05557,479.99337,562.21724,478.70008,562.86388,478.53842C563.51052,478.37676,565.93543,477.56846,565.93543,477.56846L567.71369,479.0234L569.49196,478.05344L572.72517,478.70008L574.18011,481.12499L574.50343,483.38824L579.02992,483.71156L580.80819,485.48982L579.99989,487.10643L578.7066,487.91473L580.32321,489.53133L588.72955,493.08786L592.28608,491.79458L593.25605,489.36967L595.84261,488.72303L597.62088,487.26809L598.91416,488.23805L599.72246,491.14794L597.45922,491.95624L598.10586,492.60288L601.50073,491.3096L603.76398,487.91473L604.57228,487.42975L602.47069,487.10643L603.27899,485.48982L603.11733,484.03488L605.21892,483.5499L606.35054,482.25661L606.99718,483.06491C606.99718,483.06491,606.83552,486.13646,607.64383,486.13646C608.45213,486.13646,611.847,486.78311,611.847,486.78311L615.88851,488.72303L616.85847,490.17798L619.76836,490.17798L620.89999,491.14794L623.16323,488.07639L623.16323,486.62144L621.86995,486.62144L618.47508,483.87322L612.6553,483.06491L609.42209,480.80167L610.55372,478.05344L612.81696,478.37676L612.97862,477.73012L611.20036,476.76016L611.20036,476.27517L614.43357,476.27517L616.21183,473.20363L614.91855,471.2637L614.59523,468.51547L613.14028,468.67713L611.20036,470.77872L610.55372,473.36529L607.48217,472.71864L606.5122,470.94038L608.29047,469.00045L610.1938,465.55485L609.1327,463.14258L607.96706,459.16125Z",
                ME: "M922.83976,78.830719L924.77969,80.932305L927.04294,84.650496L927.04294,86.590422L924.94135,91.278575L923.00142,91.925217L919.60655,94.996766L914.75674,100.49322C914.75674,100.49322,914.1101,100.49322,913.46346,100.49322C912.81682,100.49322,912.49349,98.391636,912.49349,98.391636L910.71523,98.553296L909.74527,100.00824L907.32036,101.46319L906.3504,102.91813L907.967,104.37307L907.48202,105.01972L906.99704,107.76794L905.05711,107.60628L905.05711,105.98968L904.73379,104.69639L903.27885,105.01972L901.50058,101.78651L899.399,103.07979L900.69228,104.53473L901.0156,105.66636L900.2073,106.95964L900.53062,110.03119L900.69228,111.64779L899.07568,114.23436L896.16579,114.71934L895.84247,117.62923L890.50767,120.70078L889.21439,121.18576L887.59778,119.73082L884.52623,123.28735L885.4962,126.52056L884.04125,127.81384L883.87959,132.17867L882.75631,138.43803L880.29406,137.28208L879.80907,134.21052L875.92922,133.07889L875.6059,130.33065L868.33115,106.88983L863.63257,92.250088L865.05311,92.131923L866.5669,92.541822L866.5669,89.955254L867.8752,85.458798L870.46177,80.770645L871.91672,76.729133L869.97679,74.304226L869.97679,68.322789L870.78509,67.352826L871.5934,64.604598L871.43174,63.149654L871.27007,58.29984L873.04834,53.450026L875.95823,44.5587L878.05981,40.355528L879.3531,40.355528L880.64638,40.517188L880.64638,41.648811L881.93967,43.912058L884.68789,44.5587L885.4962,43.750397L885.4962,42.780435L889.53771,39.870546L891.31597,38.092281L892.77092,38.253942L898.75235,40.678849L900.69228,41.648811L909.74527,71.555998L915.7267,71.555998L916.53501,73.495924L916.69667,78.345738L919.60655,80.608984L920.41486,80.608984L920.57652,80.124003L920.09154,78.99238L922.83976,78.830719ZM901.90801,108.97825L903.44379,107.44247L904.81791,108.49327L905.38372,110.91819L903.68628,111.80732L901.90801,108.97825ZM908.61694,103.07763L910.39521,104.93673C910.39521,104.93673,911.6885,105.01755,911.6885,104.69423C911.6885,104.37091,911.93099,102.67347,911.93099,102.67347L912.82013,101.86517L912.01182,100.08689L909.99106,100.81437L908.61694,103.07763Z",
                MD: "M 839.792 252.415 L 833.783 253.619 L 828.64 253.736 L 826.797 246.814 L 824.872 237.644 L 822.299 231.456 L 821.011 227.058 L 813.505 228.68 L 798.629 231.503 L 761.177 239.054 L 762.309 244.066 L 763.279 249.724 L 763.602 249.401 L 765.703 246.976 L 767.967 244.358 L 770.392 243.743 L 771.847 242.288 L 773.625 239.701 L 774.918 240.348 L 777.828 240.024 L 780.415 237.923 L 782.421 236.469 L 784.267 235.985 L 785.911 237.114 L 788.821 238.569 L 790.761 240.348 L 791.973 241.883 L 796.096 243.581 L 796.096 246.491 L 801.592 247.784 L 802.737 248.326 L 804.148 246.298 L 807.03 248.268 L 805.752 250.75 L 804.987 254.735 L 803.209 257.322 L 803.209 259.424 L 803.855 261.202 L 808.919 262.558 L 813.23 262.496 L 816.302 263.466 L 818.404 263.789 L 819.374 261.688 L 817.919 259.586 L 817.919 257.808 L 815.494 255.706 L 813.392 250.21 L 814.685 244.875 L 814.524 242.773 L 813.23 241.48 C 813.23 241.48 814.685 239.863 814.685 239.217 C 814.685 238.57 815.17 237.115 815.17 237.115 L 817.11 235.822 L 819.05 234.205 L 819.535 235.175 L 818.08 236.792 L 816.787 240.51 L 817.11 241.642 L 818.889 241.965 L 819.374 247.461 L 817.272 248.431 L 817.595 251.988 L 818.08 251.826 L 819.212 249.886 L 820.828 251.665 L 819.212 252.958 L 818.889 256.353 L 821.475 259.748 L 825.355 260.233 L 826.972 259.424 L 830.208 263.607 L 831.566 264.144 L 838.22 261.347 L 840.228 257.323 L 839.792 252.415 Z M 823.822 261.443 L 824.954 263.949 L 825.115 265.728 L 826.247 267.587 C 826.247 267.587 827.136 266.697 827.136 266.374 C 827.136 266.051 826.409 263.303 826.409 263.303 L 825.681 260.958 L 823.822 261.443 Z",
                MA: "M 899.623 173.254 L 901.795 172.568 L 902.253 170.853 L 903.281 170.968 L 904.31 173.254 L 903.053 173.711 L 899.166 173.826 L 899.623 173.254 Z M 890.25 174.054 L 892.536 171.425 L 894.137 171.425 L 895.966 172.911 L 893.565 173.94 L 891.393 174.969 L 890.25 174.054 Z M 855.451 152.066 L 873.098 147.425 L 875.361 146.779 L 877.275 143.983 L 881.012 142.32 L 883.901 146.732 L 881.476 151.906 L 881.153 153.361 L 883.093 155.947 L 884.224 155.139 L 886.003 155.139 L 888.266 157.725 L 892.146 163.707 L 895.702 164.192 L 897.966 163.222 L 899.744 161.444 L 898.935 158.695 L 896.834 157.079 L 895.379 157.887 L 894.409 156.594 L 894.894 156.109 L 896.996 155.947 L 898.774 156.755 L 900.714 159.18 L 901.684 162.09 L 902.007 164.515 L 897.804 165.97 L 893.924 167.91 L 890.044 172.436 L 888.104 173.891 L 888.104 172.921 L 890.529 171.466 L 891.014 169.688 L 890.206 166.617 L 887.296 168.072 L 886.488 169.527 L 886.973 171.79 L 884.906 172.79 L 882.159 168.263 L 878.764 163.898 L 876.694 162.086 L 870.16 163.962 L 865.068 165.013 L 844.393 169.605 L 843.725 164.837 L 844.372 154.248 L 848.661 153.359 L 855.451 152.066 Z",
                MI: "M 697.86 177.237 L 694.627 168.992 L 692.364 159.939 L 689.939 156.706 L 687.352 154.928 L 685.736 156.059 L 681.856 157.838 L 679.916 162.849 L 677.168 166.567 L 676.036 167.214 L 674.581 166.567 C 674.581 166.567 671.994 165.112 672.156 164.466 C 672.318 163.819 672.641 159.454 672.641 159.454 L 676.036 158.161 L 676.844 154.766 L 677.491 152.18 L 679.916 150.563 L 679.592 140.54 L 677.976 138.277 L 676.683 137.468 L 675.874 135.367 L 676.683 134.559 L 678.299 134.882 L 678.461 133.265 L 676.036 131.002 L 674.743 128.415 L 672.156 128.415 L 667.63 126.96 L 662.133 123.566 L 659.385 123.566 L 658.738 124.212 L 657.768 123.727 L 654.697 121.464 L 651.787 123.242 L 648.877 125.506 L 649.2 129.062 L 650.17 129.385 L 652.272 129.87 L 652.757 130.679 L 650.17 131.487 L 647.584 131.81 L 646.129 133.589 L 645.805 135.69 L 646.129 137.307 L 646.452 142.803 L 642.896 144.905 L 642.249 144.743 L 642.249 140.54 L 643.542 138.115 L 644.189 135.69 L 643.38 134.882 L 641.441 135.69 L 640.471 139.893 L 637.722 141.025 L 635.944 142.965 L 635.782 143.935 L 636.429 144.743 L 635.782 147.33 L 633.519 147.815 L 633.519 148.946 L 634.328 151.371 L 633.196 157.514 L 631.579 161.556 L 632.226 166.244 L 632.711 167.376 L 631.903 169.801 L 631.579 170.609 L 631.256 173.357 L 634.812 179.338 L 637.722 185.805 L 639.177 190.655 L 638.369 195.343 L 637.399 201.324 L 634.974 206.497 L 634.651 209.246 L 631.392 212.331 L 635.801 212.169 L 657.219 209.906 L 664.497 208.918 L 664.593 210.585 L 671.445 209.372 L 681.743 207.869 L 685.597 207.408 L 685.736 206.821 L 685.897 205.366 L 687.999 201.648 L 689.999 199.91 L 689.777 194.858 L 691.374 193.261 L 692.465 192.918 L 692.687 189.361 L 694.223 186.33 L 695.274 186.937 L 695.435 187.583 L 696.243 187.745 L 698.183 186.775 L 697.86 177.237 Z M 667.794 114.187 L 668.44 116.693 L 671.674 116.855 L 672.967 115.642 C 672.967 115.642 672.886 114.187 672.563 114.026 C 672.239 113.864 670.946 112.166 670.946 112.166 L 668.764 112.409 L 667.147 112.571 L 666.824 113.702 L 667.794 114.187 Z M 567.492 111.213 L 568.208 110.633 L 570.957 109.824 L 574.513 107.561 L 574.513 106.591 L 575.16 105.945 L 581.141 104.975 L 583.566 103.035 L 587.931 100.933 L 588.093 99.64 L 590.033 96.73 L 591.811 95.922 L 593.104 94.143 L 595.367 91.88 L 599.732 89.455 L 604.42 88.97 L 605.552 90.102 L 605.229 91.072 L 601.51 92.042 L 600.055 95.113 L 597.792 95.922 L 597.307 98.347 L 594.882 101.58 L 594.559 104.166 L 595.367 104.651 L 596.337 103.52 L 599.894 100.61 L 601.187 101.903 L 603.45 101.903 L 606.684 102.873 L 608.139 104.005 L 609.593 107.076 L 612.342 109.824 L 616.222 109.663 L 617.676 108.693 L 619.293 109.986 L 620.91 110.471 L 622.203 109.663 L 623.335 109.663 L 624.951 108.693 L 628.993 105.136 L 632.388 104.005 L 639.016 103.681 L 643.542 101.741 L 646.129 100.448 L 647.584 100.61 L 647.584 106.268 L 648.069 106.591 L 650.979 107.4 L 652.918 106.915 L 659.062 105.298 L 660.193 104.166 L 661.648 104.651 L 661.648 111.603 L 664.881 114.674 L 666.175 115.321 L 667.468 116.291 L 666.175 116.614 L 665.366 116.291 L 661.648 115.806 L 659.547 116.453 L 657.283 116.291 L 654.05 117.746 L 652.272 117.746 L 646.452 116.453 L 641.279 116.614 L 639.339 119.201 L 632.388 119.847 L 629.963 120.656 L 628.831 123.727 L 627.538 124.859 L 627.053 124.697 L 625.598 123.081 L 621.071 125.506 L 620.425 125.506 L 619.293 123.889 L 618.485 124.051 L 616.545 128.415 L 615.575 132.457 L 612.394 139.458 L 611.217 138.423 L 609.845 137.392 L 607.904 127.104 L 604.36 125.734 L 602.307 123.448 L 590.187 120.704 L 587.332 119.675 L 579.101 117.502 L 571.211 116.359 L 567.492 111.213 Z",
                MN: "M475.23781,128.82439L474.78056,120.36535L472.95158,113.04943L471.1226,99.560705L470.66535,89.729927L468.83637,86.300584L467.23601,81.270889L467.23601,70.982869L467.92187,67.096282L466.10094,61.644615L496.23336,61.679886L496.55668,53.435202L497.20332,53.273541L499.46657,53.758523L501.40649,54.566825L502.21479,60.063281L503.66974,66.206379L505.28634,67.822984L510.13616,67.822984L510.45948,69.277928L516.76424,69.601249L516.76424,71.702835L521.61405,71.702835L521.93737,70.409551L523.06899,69.277928L525.33224,68.631286L526.62552,69.601249L529.53541,69.601249L533.41526,72.187816L538.75006,74.612723L541.17497,75.097705L541.65995,74.127742L543.11489,73.64276L543.59987,76.552649L546.18644,77.845933L546.67142,77.360951L547.96471,77.522612L547.96471,79.624198L550.55127,80.594161L553.62282,80.594161L555.23943,79.785858L558.47264,76.552649L561.0592,76.067668L561.86751,77.845933L562.35249,79.139216L563.32245,79.139216L564.29241,78.330914L573.18374,78.007593L574.962,81.079142L575.60865,81.079142L576.32226,79.994863L580.76217,79.624198L580.15007,81.903657L576.21135,83.740782L566.96557,87.80191L562.19083,89.808807L559.11928,92.395375L556.69437,95.951905L554.43113,99.831756L552.65286,100.64006L548.12637,105.65153L546.83308,105.81319L542.5053,108.57031L540.04242,111.77542L539.8138,114.96681L539.90816,123.01016L538.53212,124.69891L533.45058,128.45888L531.2205,134.44129L534.09225,136.675L534.77214,139.90198L532.9169,143.14091L533.08769,146.88893L533.45655,153.61933L536.4848,156.62132L539.8138,156.62132L541.70491,159.75392L545.08408,160.25719L548.94324,165.92866L556.03053,170.04541L558.17368,172.92053L558.84483,179.36004L477.63333,180.50483L477.29541,144.82798L476.83817,141.85589L472.72296,138.42655L471.57984,136.59757L471.57984,134.9972L473.63744,133.39685L475.00918,132.02511L475.23781,128.82439Z",
                MS: "M631.55882,459.34458L631.30456,460.60073L626.13142,460.60073L624.67648,459.79243L622.57489,459.46911L615.78515,461.40903L614.00689,460.60073L611.42032,464.8039L610.31778,465.58192L609.19395,463.09394L608.05083,459.20735L604.6215,456.00664L605.7646,450.46209L605.07874,449.5476L603.24976,449.77622L595.33184,450.64959L570.78534,451.02296L570.0156,448.7976L570.88897,440.4208L574.00581,434.74799L579.23288,425.60309L578.78714,423.17049L580.024,422.51424L580.45987,420.59477L578.14239,418.51579L578.02727,416.37431L576.19155,412.25322L576.08255,406.29045L577.41008,403.80948L577.18678,400.39373L575.41729,397.31114L576.94371,395.82893L575.3731,393.32939L575.83035,391.67718L577.40775,385.15081L579.8937,383.11446L579.25203,380.74749L582.91,375.44496L585.74186,374.08854L585.52089,372.41338L585.23276,370.73228L588.10882,365.16461L590.45454,363.9331L590.60617,363.04009L627.94965,359.15892L628.13451,365.44225L628.29617,382.09331L627.48787,413.13216L627.32621,427.19665L630.07445,445.94929L631.55882,459.34458Z",
                MO: "M 558.44 248.113 L 555.92 245.026 L 554.777 242.74 L 490.42 245.14 L 488.134 245.255 L 489.391 247.769 L 489.163 250.056 L 491.677 253.942 L 494.764 258.057 L 497.85 260.801 L 500.011 261.029 L 501.508 261.944 L 501.508 264.916 L 499.679 266.516 L 499.222 268.803 L 501.28 272.232 L 503.794 275.204 L 506.309 277.033 L 507.681 288.693 L 507.995 324.765 L 508.224 329.452 L 508.681 334.835 L 531.114 333.968 L 554.32 333.283 L 575.125 332.482 L 586.779 332.251 L 588.949 335.677 L 588.265 338.985 L 585.177 341.388 L 584.605 343.225 L 589.983 343.682 L 593.878 342.997 L 595.596 337.503 L 597.135 330.447 L 598.357 329.02 L 600.941 327.604 L 600.993 324.554 L 602.009 322.617 L 600.314 320.074 L 598.983 321.058 L 596.991 318.831 L 595.706 314.072 L 596.507 311.553 L 594.563 308.126 L 592.732 303.55 L 587.933 302.751 L 580.964 297.152 L 579.245 293.038 L 580.044 289.838 L 582.104 283.78 L 582.562 280.916 L 580.613 279.885 L 573.758 279.087 L 572.73 277.375 L 572.618 273.145 L 567.131 269.714 L 560.156 261.942 L 557.87 254.626 L 557.639 250.401 L 558.44 248.113 Z",
                MT: "M369.20952,56.969133L338.5352,54.1613L309.27465,50.60477L280.01411,46.563258L247.68201,41.228463L229.25272,37.833593L196.52907,30.900857L192.05005,52.248389L195.47939,59.79293L194.10765,64.365382L195.93663,68.937833L199.13736,70.309572L203.75818,81.079025L206.45328,84.255548L206.91052,85.398666L210.33986,86.541784L210.79711,88.599377L203.70981,106.20333L203.70981,108.71818L206.22466,111.91889L207.13914,111.91889L211.94021,108.9468L212.62609,107.80368L214.22645,108.48955L213.99782,113.74787L216.7413,126.32212L219.71339,128.83696L220.62787,129.52283L222.45686,131.80905L221.99961,135.2384L222.68548,138.66773L223.8286,139.58223L226.11482,137.296L228.85829,137.296L232.05901,138.89636L234.57386,137.98187L238.68907,137.98187L242.34702,139.58223L245.0905,139.12498L245.54774,136.15288L248.51983,135.46702L249.89157,136.83876L250.34882,140.03947L251.77469,140.87411L253.66164,129.83937L360.40731,143.26829L369.20952,56.969133Z",
                NE: "M486.09787,240.70058L489.32848,247.72049L489.19985,250.02301L492.65907,255.51689L495.37836,258.66923L490.32888,258.66923L446.84632,257.73055L406.05946,256.84025L383.80724,256.05638L384.88001,234.72853L352.56177,231.80828L356.9056,187.79842L372.45193,188.82723L392.57072,189.97033L410.40329,191.11345L434.18005,192.25656L444.92531,191.79932L446.98291,194.08554L451.78399,197.05764L452.9271,197.97213L457.27093,196.60039L461.15752,196.14315L463.90099,195.91452L465.72997,197.28626L469.7874,198.88662L472.75949,200.48698L473.21674,202.08734L474.13123,204.14494L475.96021,204.14494L476.75819,204.19111L477.65242,208.87293L480.57268,217.34085L481.14521,221.09756L483.6687,224.87181L484.23829,229.98595L485.84553,234.22632L486.09787,240.70058Z",
                NV: "M196.39273,185.57552L172.75382,314.39827L170.92158,314.74742L169.34882,317.1536L166.97588,317.16429L165.50393,314.42082L162.88546,314.0424L162.11454,312.93477L161.07671,312.88073L158.29834,314.52502L157.98808,321.3105L157.62599,327.08767L157.27742,335.68048L155.83032,337.76964L153.3914,336.69561L84.311514,232.49442L103.30063,164.90951L196.39273,185.57552Z",
                NH: "M 880.799 142.425 L 881.668 141.348 L 882.758 138.057 L 880.215 137.144 L 879.73 134.072 L 875.85 132.941 L 875.527 130.192 L 868.252 106.752 L 863.651 92.209 L 862.754 92.203 L 862.107 93.82 L 861.46 93.335 L 860.491 92.365 L 859.036 94.305 L 858.987 99.337 L 859.299 105.004 L 861.239 107.753 L 861.239 111.794 L 857.52 116.857 L 854.934 117.989 L 854.934 119.12 L 856.066 120.898 L 856.066 129.466 L 855.257 138.681 L 855.096 143.531 L 856.066 144.824 L 855.904 149.351 L 855.419 151.129 L 856.388 151.838 L 873.175 147.414 L 875.35 146.811 L 877.194 144.038 L 880.799 142.425 Z",
                NJ: "M 829.679 188.46 L 827.357 191.194 L 827.357 194.266 L 825.417 197.338 L 825.255 198.954 L 826.549 200.247 L 826.387 202.672 L 824.124 203.804 L 824.932 206.552 L 825.094 207.684 L 827.842 208.007 L 828.812 210.594 L 832.368 213.019 L 834.793 214.635 L 834.793 215.444 L 831.81 218.14 L 830.193 220.403 L 828.738 223.152 L 826.475 224.445 L 826.013 226.047 L 825.77 227.26 L 825.161 229.867 L 826.253 232.111 L 829.487 235.021 L 834.336 237.284 L 838.378 237.931 L 838.54 239.385 L 837.731 240.355 L 838.055 243.104 L 838.863 243.104 L 840.964 240.679 L 841.773 235.829 L 844.521 231.787 L 847.593 225.321 L 848.724 219.825 L 848.077 218.693 L 847.916 209.317 L 846.299 205.922 L 845.168 206.73 L 842.419 207.053 L 841.934 206.568 L 843.066 205.598 L 845.168 203.659 L 845.231 202.565 L 844.846 199.131 L 845.42 196.383 L 845.302 194.414 L 842.495 192.663 L 837.402 191.487 L 833.265 190.106 L 829.679 188.46 Z",
                NY: "M830.37944,188.7456L829.24781,187.77564L826.66123,187.61398L824.39799,185.67406L822.76738,179.54493L819.30892,179.63547L816.86521,176.92727L797.47989,181.30921L754.47811,190.0389L746.94846,191.26689L746.2103,184.79855L747.6384,183.67317L748.93168,182.54155L749.90165,180.92494L751.67991,179.79332L753.61984,178.01505L754.10482,176.39845L756.2064,173.65022L757.33803,172.68026L757.17637,171.71029L755.88308,168.63875L754.10482,168.47709L752.16489,162.33399L755.07478,160.55572L759.43961,159.10078L763.48113,157.80749L766.71434,157.32251L773.01909,157.16085L774.95902,158.45414L776.57562,158.6158L778.67721,157.32251L781.26378,156.19089L786.43691,155.70591L788.5385,153.92764L790.31676,150.69443L791.93337,148.75451L794.03495,148.75451L795.97488,147.62288L796.13654,145.35964L794.6816,143.25805L794.35828,141.80311L795.4899,139.70152L795.4899,138.24658L793.71163,138.24658L791.93337,137.43828L791.12507,136.30665L790.96341,133.72008L796.78318,128.22363L797.42982,127.41533L798.88477,124.50544L801.79466,119.97894L804.54289,116.26075L806.64447,113.83585L809.05957,112.01024L812.14093,110.7643L817.63738,109.47101L820.87059,109.63267L825.39709,108.17773L832.96228,106.10656L833.48207,111.08623L835.90699,117.55267L836.71529,122.72582L835.74533,126.60568L838.3319,131.13218L839.1402,133.23377L838.3319,136.14367L841.2418,137.43695L841.88844,137.76027L844.96,148.75321L844.42371,153.81288L843.93873,164.64415L844.74703,170.14062L845.55533,173.69716L847.01028,180.9719L847.01028,189.05494L845.87865,191.31819L847.71798,193.31098L848.51453,194.9894L846.57461,196.76767L846.89793,198.06095L848.19121,197.73763L849.64616,196.44435L851.9094,193.85778L853.04103,193.21114L854.65763,193.85778L856.92088,194.01944L864.84224,190.13959L867.75213,187.39136L869.04541,185.93642L873.24858,187.55302L869.85371,191.10955L865.97386,194.01944L858.8608,199.35423L856.27424,200.3242L850.45446,202.26412L846.41295,203.39575L845.23821,202.86282L844.99419,199.17429L845.47917,196.42605L845.31751,194.32447L842.504,192.62547L837.9775,191.6555L834.09764,190.52388L830.37944,188.7456Z",
                NC: "M834.98153,294.31554L837.06653,299.23289L840.62306,305.69931L843.04796,308.12422L843.6946,310.38747L841.2697,310.54913L842.078,311.19577L841.75468,315.39894L839.16811,316.69222L838.52147,318.79381L837.22819,321.7037L833.50999,323.3203L831.08509,322.99698L829.63014,322.83532L828.01354,321.54204L828.33686,322.83532L828.33686,323.80529L830.27679,323.80529L831.08509,325.09857L829.14516,331.40333L833.34833,331.40333L833.99498,333.01993L836.25822,330.75669L837.55151,330.2717L835.61158,333.82823L832.54003,338.67805L831.24675,338.67805L830.11512,338.19307L827.3669,338.83971L822.19376,341.26462L815.72734,346.59941L812.33247,351.28756L810.39255,357.75398L809.90757,360.17889L805.21941,360.66387L799.76628,362.00053L789.81987,353.798L777.21033,346.19995L774.30044,345.39164L761.69091,346.84659L757.41445,347.59674L755.79785,344.36352L752.82749,342.24682L736.3381,342.7318L729.06336,343.5401L720.01037,348.06661L713.86726,350.65317L692.68971,353.23975L693.1898,349.18542L694.96807,347.73048L697.71631,347.08383L698.36295,343.36563L702.56613,340.61741L706.44598,339.16245L710.64917,335.60592L715.014,333.50433L715.66064,330.43277L719.5405,326.55292L720.18714,326.39126C720.18714,326.39126,720.18714,327.52289,720.99545,327.52289C721.80375,327.52289,722.93538,327.84621,722.93538,327.84621L725.19863,324.28967L727.30022,323.64302L729.56346,323.96635L731.18008,320.40982L734.08997,317.82324L734.57495,315.72165L734.76245,312.07346L739.03895,312.05094L746.23754,311.19515L761.99477,308.94272L777.13081,306.85615L798.77129,302.1368L818.75461,297.87823L829.93155,295.47242L834.98153,294.31554ZM839.25199,327.52211L841.83857,325.01636L844.99095,322.42978L846.52673,321.78314L846.68839,319.76238L846.04175,313.61926L844.5868,311.27518L843.94015,309.41608L844.66763,309.17358L847.41587,314.67006L847.82002,319.11573L847.65836,322.51062L844.26348,324.04639L841.43441,326.47131L840.30279,327.68377L839.25199,327.52211Z",
                ND: "M475.30528,128.91846L474.69037,120.48479L473.01342,113.66887L471.12193,100.64465L470.66469,89.657624L468.92523,86.580482L467.16862,81.386086L467.19987,70.941816L467.82323,67.117729L465.98913,61.649968L437.34688,61.085941L418.75593,60.439299L392.24361,59.146015L369.29727,57.012146L362.30403,124.18898L417.23627,127.53263L475.30528,128.91846Z",
                OH: "M735.32497,193.32832L729.23143,197.38167L725.35158,199.64492L721.95671,203.36311L717.9152,207.24296L714.68199,208.05126L711.7721,208.53624L706.27564,211.12281L704.17406,211.28447L700.77919,208.21292L695.60605,208.85957L693.01949,207.40462L690.63842,206.05379L685.74585,206.7572L675.56123,208.37381L664.35436,210.55854L665.64765,225.18882L667.42592,238.92999L670.01248,262.37079L670.5783,267.20196L674.70065,267.07294L677.12556,266.26463L680.48936,267.76777L682.55985,272.1326L687.69879,272.1155L689.59053,274.2342L691.3517,274.1689L693.89009,272.82744L696.39426,273.19894L701.81554,273.68162L703.54251,271.54894L705.88816,270.25566L707.95865,269.57481L708.60529,272.32305L710.38357,273.29301L713.85926,275.63708L716.04168,275.55626L717.3748,275.06378L717.55951,272.30225L719.14487,270.84729L719.24403,266.05457C719.24403,266.05457,720.26799,261.94551,720.26799,261.94551L721.56726,261.34423L722.88861,262.49197L723.42676,264.18899L725.14589,263.15157L725.58487,261.69082L724.46818,259.78776L724.53447,257.47333L725.28347,256.40102L727.43623,253.09454L728.48645,251.5512L730.58804,252.03618L732.85129,250.41957L735.92284,247.0247L738.69433,242.94597L739.01466,237.89046L739.49964,232.87897L739.32286,227.57209L738.36802,224.67731L738.71926,223.48753L740.52365,221.73742L738.23486,212.69009L735.32497,193.32832Z",
                OR: "M148.72184,175.53153L157.57154,140.73002L158.62233,136.5005L160.9767,130.87727L160.36119,129.71439L157.84633,129.66821L156.56473,127.99751L157.02197,126.53344L157.52538,123.28656L161.98353,117.79961L163.81251,116.70046L164.95562,115.55735L166.44166,111.99172L170.48872,106.32232L174.05435,102.45992L174.28297,99.008606L171.01411,96.539924L169.2307,91.897299L156.56693,88.285329L141.47784,84.741679L126.04582,84.855985L125.58858,83.484256L120.10163,85.54186L115.64349,84.970301L113.24295,83.36994L111.98553,84.055815L107.29877,83.827183L105.5841,82.455454L100.32578,80.39785L99.525598,80.512166L95.181768,79.02611L93.238477,80.855093L87.065665,80.512166L81.121482,76.396957L81.807347,75.596777L82.035968,67.823604L79.749743,63.937027L75.634535,63.365468L74.94867,60.850621L72.594738,60.384056L66.796213,62.44284L64.532966,68.909258L61.299757,78.932207L58.066547,85.398626L53.055073,99.463087L46.588654,113.04256L38.505631,125.65208L36.565705,128.56197L35.757403,137.12997L36.143498,149.2102L148.72184,175.53153Z",
                PA: "M825.1237,224.69205L826.43212,224.42105L828.76165,223.1678L829.97353,220.68473L831.59014,218.42148L834.82335,215.34992L834.82335,214.54162L832.39844,212.92502L828.8419,210.5001L827.87194,207.91353L825.1237,207.59021L824.96204,206.45858L824.15374,203.71035L826.417,202.57873L826.57866,200.15381L825.28536,198.86052L825.44702,197.24391L827.38696,194.17236L827.38696,191.1008L830.08459,188.45492L829.16431,187.77994L826.64023,187.58703L824.34574,185.64711L822.79582,179.53105L819.29124,179.63157L816.83601,176.92824L798.74502,181.12601L755.74324,189.8557L746.85189,191.31064L746.23122,184.78925L740.86869,189.8569L739.5754,190.34188L735.37311,193.35077L738.28387,212.48822L740.76553,222.21758L744.33733,241.47907L747.60664,240.84139L759.55022,239.33892L797.47685,231.67372L812.35306,228.8504L820.65341,227.22804L820.92052,226.98951L823.02212,225.37289L825.1237,224.69205Z",
                RI: "M 874.07 178.895 L 870.374 163.939 L 876.644 162.094 L 878.835 164.021 L 882.141 168.342 L 884.829 172.744 L 881.83 174.369 L 880.536 174.207 L 879.405 175.985 L 876.98 177.925 L 874.07 178.895 Z",
                SC: "M764.94328,408.16488L763.16622,409.13438L760.57965,407.84109L759.93301,405.7395L758.63973,402.18297L756.37647,400.08137L753.7899,399.43473L752.1733,394.58492L749.42506,388.60347L745.22189,386.66353L743.12029,384.72361L741.82701,382.13704L739.72542,380.1971L737.46217,378.90382L735.19892,375.99393L732.12737,373.73069L727.60086,371.95241L727.11588,370.49747L724.69098,367.58758L724.20599,366.13262L720.81111,360.95949L717.41624,361.12115L713.37472,358.69623L712.08144,357.40295L711.75812,355.62468L712.56642,353.68476L714.82967,352.71478L714.31885,350.4257L720.08695,348.08913L729.20245,343.50013L736.97718,342.69182L753.09158,342.26934L755.72983,344.14677L757.40893,347.50499L761.71128,346.89501L774.32081,345.44005L777.2307,346.24836L789.84024,353.84642L799.94832,361.9681L794.52715,367.42644L791.94058,373.56954L791.4556,379.8743L789.839,380.6826L788.70737,383.43083L786.28247,384.07747L784.18088,387.634L781.43265,390.38223L779.16941,393.7771L777.5528,394.5854L773.99627,397.98027L771.08638,398.14193L772.05635,401.37514L767.04487,406.8716L764.94328,408.16488Z",
                SD: "M476.44687,204.02465L476.39942,203.44378L473.50371,198.59834L475.36394,193.88623L476.85667,187.99969L474.0748,185.91998L473.68964,183.17652L474.48204,180.62217L477.67055,180.63738L477.54747,175.63124L477.21417,145.45699L476.59644,141.68941L472.52412,138.35848L471.54149,136.68152L471.47899,135.0727L473.50111,133.5433L475.03333,131.87763L475.27829,129.22084L417.0212,127.62049L362.22199,124.1714L356.89672,187.86259L371.48699,188.76639L391.43684,189.972L409.17989,190.90059L432.95665,192.20417L444.93935,191.77953L446.90565,194.02471L452.10029,197.27806L452.86418,198.00081L457.40562,196.548L463.94616,195.93309L465.62146,197.26936L469.82597,198.86549L472.77103,200.50132L473.17001,201.98513L474.2095,204.22601L476.44687,204.02465Z",
                TN: "M 696.678 318.254 L 644.785 323.266 L 629.025 325.044 L 624.404 325.557 L 620.536 325.529 L 620.315 329.63 L 612.129 329.894 L 605.178 330.54 L 597.087 330.416 L 595.673 337.489 L 593.903 342.976 L 592.823 346.226 L 591.731 349.717 L 590.978 352.356 L 587.423 355.484 L 589.934 358.299 L 590.911 360.483 L 590.619 362.987 L 692.645 353.255 L 693.049 349.3 L 694.859 347.809 L 697.694 347.06 L 698.366 343.343 L 702.464 340.638 L 706.511 339.144 L 710.595 335.573 L 715.031 333.548 L 715.552 330.481 L 719.617 326.496 L 720.167 326.382 C 720.167 326.382 720.199 327.513 721.007 327.513 C 721.815 327.513 722.947 327.868 722.947 327.868 L 725.21 324.28 L 727.28 323.633 L 729.556 323.928 L 731.154 320.396 L 734.109 317.752 L 734.531 315.813 L 734.84 312.101 L 732.693 311.902 L 730.092 313.93 L 723.098 313.959 L 704.739 316.346 L 696.678 318.254 Z",
                TX: "M361.46423,330.57358L384.15502,331.65952L415.24771,332.80264L412.9131,356.25844L412.61634,374.41196L412.68448,376.49375L417.02831,380.31218L419.01496,381.75934L420.19917,381.19965L420.57254,379.38193L421.71286,381.18555L423.8245,381.22948L423.82183,379.78239L425.49177,380.74966L426.63047,381.15853L426.2712,385.12618L430.35939,385.21969L433.28471,386.41686L437.23945,386.94224L439.62083,389.02122L441.74493,386.94505L445.46987,387.55996L447.69078,390.7849L448.76574,391.10586L448.60527,393.07113L450.81888,393.86342L453.14903,391.80862L455.28205,392.42354L457.51143,392.45902L458.4445,394.89446L464.77259,397.00891L466.36564,396.24198L467.85511,392.06427L468.19583,392.06427L469.10232,392.14591L470.33137,394.21454L474.26125,394.87982L477.59825,396.0027L481.02388,397.19867L482.86446,396.22367L483.57822,393.70883L488.03144,393.75303L489.84018,394.68381L492.63943,392.5773L493.74307,392.6215L494.59411,394.22657L498.64883,394.22657L500.1677,392.19795L502.03507,392.60519L503.9811,395.00847L507.50167,397.05262L510.36043,397.86243L511.87405,398.66227L514.32075,400.65959L517.36379,399.3318L520.05488,400.47068L520.61869,406.57662L520.57893,416.27879L521.26479,425.8128L521.96697,429.41791L524.6423,433.83777L525.54048,438.7885L529.75643,444.32652L529.95245,447.47146L530.69882,448.2573L529.96875,456.63737L527.09665,461.64387L528.62962,463.79674L527.99954,466.13482L527.32997,473.53914L525.82565,476.87714L526.12053,480.37949L520.45565,481.96467L510.59436,486.49117L509.6244,488.43109L507.03783,490.37102L504.93625,491.82596L503.64296,492.63426L497.98485,497.96906L495.23662,500.07065L489.90182,503.30385L484.24371,505.72876L477.93895,509.12363L476.16069,510.57858L470.34091,514.13511L466.94604,514.78175L463.06619,520.2782L459.02468,520.60153L458.05471,522.54145L460.31796,524.48138L458.86301,529.97783L457.56973,534.50433L456.43811,538.38418L455.62981,542.91067L456.43811,545.33558L458.21637,552.28698L459.18634,558.43007L460.9646,561.1783L459.99464,562.63325L456.92309,564.57317L451.26497,560.69332L445.76852,559.5617L444.47523,560.04668L441.24202,559.40004L437.03885,556.32849L431.86572,555.19687L424.26767,551.802L422.16609,547.92214L420.8728,541.45573L417.6396,539.5158L416.99295,537.25255L417.6396,536.60591L417.96292,533.21104L416.66963,532.5644L416.02299,531.59444L417.31627,527.2296L415.69967,524.96636L412.46646,523.67307L409.07159,519.30824L405.51506,512.68016L401.31189,510.09359L401.47355,508.15367L396.13875,495.86747L395.33045,491.6643L393.55219,489.72438L393.39053,488.26943L387.40909,482.93464L384.82252,479.86309L384.82252,478.73146L382.23595,476.62988L375.44621,475.49825L368.00983,474.85161L364.93828,472.58837L360.41179,474.36663L356.85526,475.82158L354.59201,479.05478L353.62205,482.77298L349.25722,488.91607L346.83231,491.34098L344.24574,490.37102L342.46748,489.23939L340.52755,488.59275L336.6477,486.32951L336.6477,485.68286L334.86944,483.74294L329.6963,481.64135L322.25992,473.88165L319.99667,469.1935L319.99667,461.11047L316.76346,454.64405L316.27848,451.89583L314.66188,450.92586L313.53025,448.82428L308.51878,446.72269L307.2255,445.10609L300.11243,437.18472L298.81915,433.95151L294.13099,431.68826L292.67604,427.32339L290.08945,424.41352L288.14954,423.92856L287.50031,419.25092L295.50218,419.93681L324.53717,422.68026L353.57225,424.28062L355.80578,404.8188L359.69233,349.26378L361.29272,330.51646L362.66446,330.54504M461.69381,560.20778L461.128,553.0947L458.37976,545.90078L457.81394,538.86853L459.34972,530.62382L462.66378,523.75323L466.13948,518.33758L469.29188,514.78103L469.93852,515.02353L465.16952,521.65163L460.80468,528.19891L458.78391,534.827L458.46059,540.00016L459.34972,546.14328L461.9363,553.3372L462.42128,558.51034L462.58294,559.9653L461.69381,560.20778Z",
                VT: "M 844.484 154.058 L 844.801 148.712 L 841.91 137.928 L 841.264 137.605 L 838.354 136.312 L 839.162 133.402 L 838.354 131.3 L 835.654 126.66 L 836.624 122.78 L 835.815 117.607 L 833.39 111.141 L 832.585 106.218 L 859.004 99.486 L 859.313 105.008 L 861.229 107.751 L 861.229 111.792 L 857.522 116.85 L 854.935 117.993 L 854.924 119.113 L 856.234 120.633 L 855.923 128.731 L 855.314 137.989 L 855.086 143.546 L 856.056 144.84 L 855.894 149.41 L 855.409 151.1 L 856.423 151.827 L 848.986 153.334 L 844.484 154.058 Z",
                VA: "M831.63885,266.06892L831.49494,264.12189L837.94837,261.57201L837.17796,264.78985L834.25801,268.56896L833.83992,273.15478L834.30167,276.54522L832.4737,281.52338L830.30943,283.43952L828.83909,278.79871L829.28498,273.3496L830.87198,269.16653L831.63885,266.06892ZM834.97904,294.37028L776.80486,306.94571L739.37789,312.22478L732.69956,311.8496L730.11431,313.77598L722.77518,313.99667L714.39307,314.97434L703.47811,316.58896L713.94754,310.97776L713.93442,308.90283L715.45447,306.7567L726.00825,295.25527L729.95497,299.73273L733.73798,300.69671L736.28144,299.55639L738.51866,298.24523L741.05527,299.58875L744.96944,298.16099L746.84617,293.60465L749.44709,294.14467L752.30233,292.01342L754.1016,292.50702L756.92881,288.83045L757.27706,286.74734L756.3134,285.47177L757.31617,283.60514L762.59044,271.32799L763.20721,265.59291L764.4361,265.06937L766.61463,267.51224L770.55049,267.21107L772.4797,259.63744L775.27369,259.07658L776.32344,256.33551L778.90326,253.98863L781.67509,248.29344L781.76002,243.22589L791.58153,247.04871C792.26238,247.38913,792.41441,241.99956,792.41441,241.99956L796.06697,243.59789L796.1353,246.53605L801.91955,247.83554L804.0525,249.01174L805.71242,251.06743L805.05787,254.7161L803.11043,257.30708L803.22028,259.36615L803.80924,261.21906L808.78799,262.48749L813.23926,262.52737L816.30809,263.48601L818.2516,263.79531L818.96641,266.88377L822.15685,267.2863L823.02492,268.48632L822.58543,273.1764L823.96016,274.27895L823.48121,276.20934L824.71062,276.99911L824.48882,278.38371L821.79483,278.28877L821.88379,279.90429L824.16478,281.44716L824.28632,282.85906L826.05943,284.64444L826.55122,287.16857L823.99818,288.54988L825.5704,290.04418L831.37142,288.35835L834.97904,294.37028Z",
                WA: "M102.07324,7.6117734L106.43807,9.0667177L116.1377,11.814946L124.7057,13.754871L144.7516,19.412988L167.70739,25.071104L182.93051,28.278277L169.29815,91.864088L156.85315,88.33877L141.34514,84.768091L126.11585,84.801329L125.66028,83.45663L120.06106,85.635923L115.46563,84.899179L113.31866,83.315125L112.00545,83.973101L107.26979,83.832858L105.57143,82.483225L100.30839,80.370922L99.573419,80.51784L95.184297,78.993392L93.290999,80.810771L87.025093,80.512038L81.099395,76.386336L81.878352,75.453573L81.999575,67.776121L79.717576,63.93642L75.602368,63.32938L74.924958,60.818764L72.649446,60.361832L69.094498,61.592408L66.831251,58.373161L67.154572,55.463272L69.9028,55.139951L71.519405,51.09844L68.932837,49.966816L69.094498,46.248625L73.459331,45.601984L70.711103,42.853756L69.256158,35.740695L69.9028,32.830807L69.9028,24.909444L68.124535,21.676234L70.387782,12.299927L72.489368,12.784908L74.914275,15.694797L77.662503,18.281364L80.895712,20.22129L85.422205,22.322876L88.493756,22.969518L91.403645,24.424462L94.798518,25.394425L97.061764,25.232765L97.061764,22.807857L98.355048,21.676234L100.45663,20.38295L100.77996,21.514574L101.10328,23.292839L98.840029,23.77782L98.516708,25.879406L100.29497,27.334351L101.4266,29.759258L102.07324,31.699183L103.52818,31.537523L103.68984,30.244239L102.71988,28.950955L102.2349,25.717746L103.0432,23.939481L102.39656,22.484537L102.39656,20.22129L104.17483,16.66476L103.0432,14.078192L100.61829,9.2283781L100.94162,8.4200758L102.07324,7.6117734ZM92.616548,13.590738L94.637312,13.429078L95.122294,14.803197L96.658073,13.186582L99.002155,13.186582L99.810458,14.722361L98.274678,16.419801L98.92133,17.228114L98.193853,19.248875L96.819734,19.653021C96.819734,19.653021,95.930596,19.733857,95.930596,19.410536C95.930596,19.087215,97.385551,16.823958,97.385551,16.823958L95.688111,16.258141L95.36479,17.713095L94.637312,18.359737L93.10153,16.09648L92.616548,13.590738Z",
                WV: "M761.18551,238.96731L762.29752,243.91184L763.38096,249.94317L765.51125,247.36283L767.77449,244.29127L770.31287,243.67572L771.76782,242.22078L773.54609,239.63421L774.99107,240.28085L777.90096,239.95753L780.48754,237.85594L782.49443,236.40268L784.33966,235.91769L785.64358,236.93416L789.28683,238.75579L791.22676,240.53406L792.60088,241.82734L791.83916,247.38228L786.00425,244.84106L781.759,243.21904L781.65786,248.39747L778.91022,253.9342L776.38019,256.36086L775.1881,259.11025L772.54452,259.61035L771.64668,263.21223L770.60345,267.1619L766.63521,267.50264L764.31148,265.06376L763.24033,265.62317L762.60765,271.09287L761.25736,274.62737L756.29896,285.58234L757.19565,286.74304L756.98979,288.65158L754.1811,292.53605L752.3726,291.99176L749.40455,294.1515L746.86217,293.57929L744.86294,298.13486C744.86294,298.13486,741.60363,299.56508,740.94003,299.50258C740.77952,299.48746,738.47093,298.25348,738.47093,298.25348L736.13441,299.63285L733.72461,300.67725L729.97992,299.78813L728.85852,298.61985L726.6663,295.59649L723.52371,293.60837L721.81214,289.98513L717.52726,286.51694L716.88061,284.25369L714.29404,282.79874L713.48573,281.18214L713.24324,275.92816L715.42566,275.84733L717.3656,275.03903L717.52726,272.2908L719.14386,270.83585L719.30552,265.82437L720.27548,261.94451L721.56877,261.29787L722.86205,262.42949L723.34704,264.20776L725.12531,263.23779L725.61029,261.62119L724.47867,259.84292L724.47867,257.41801L725.44863,256.12472L727.71188,252.72985L729.00516,251.27491L731.10676,251.75989L733.37,250.14327L736.44155,246.7484L738.70481,242.86854L739.02813,237.21043L739.51311,232.19894L739.51311,227.51078L738.38149,224.43923L739.35145,222.98427L740.63493,221.69099L744.12618,241.51811L748.75719,240.76696L761.18551,238.96731Z",
                WI: "M615.06589,197.36866L614.99915,194.21124L613.82004,189.68474L613.1734,183.54165L612.04178,181.11674L613.01174,178.04519L613.82004,175.1353L615.27499,172.54874L614.62834,169.15387L613.9817,165.59734L614.46668,163.81907L616.40661,161.39416L616.56827,158.64593L615.75997,157.35265L616.40661,154.76608L615.95409,150.59537L618.70232,144.93726L621.61221,138.14752L621.77387,135.88427L621.45055,134.91431L620.64224,135.39929L616.43907,141.70405L613.69084,145.74556L611.75092,147.52383L610.94262,149.78707L608.98767,150.59537L607.85605,152.5353L606.4011,152.21198L606.23944,150.43371L607.53273,148.00881L609.63431,143.32065L611.41258,141.70405L612.40341,139.3462L609.84296,137.44486L607.86814,127.07787L604.32067,125.73589L602.37441,123.42756L590.2447,120.70592L587.36881,119.69387L579.15569,117.52658L571.23777,116.36783L567.47261,111.23716L566.72221,111.79117L565.5243,111.62951L564.87765,110.49789L563.54364,110.79444L562.41201,110.9561L560.63375,111.92606L559.66378,111.27942L560.31043,109.33949L562.25035,106.26794L563.38197,105.13632L561.44205,103.68138L559.34046,104.48968L556.43057,106.4296L548.99419,109.66281L546.0843,110.30945L543.17442,109.82447L542.19269,108.94622L540.07599,111.7814L539.84737,114.52487L539.84737,122.9839L538.70425,124.58427L533.44593,128.47084L531.15971,134.41503L531.61695,134.64365L534.1318,136.70126L534.81766,139.90198L532.98868,143.10269L532.98868,146.98928L533.44593,153.61933L536.41802,156.59143L539.84737,156.59143L541.67635,159.79215L545.10568,160.24939L548.99227,165.96496L556.07957,170.08017L558.13717,172.82364L559.05167,180.25388L559.73753,183.5689L562.02376,185.16926L562.25238,186.541L560.19478,189.97033L560.4234,193.17106L562.93825,197.05764L565.4531,198.20075L568.42519,198.65799L569.76753,200.03811L615.06589,197.36866Z",
                WY: "M360.37668,143.27587L253.63408,129.81881L239.5506,218.27684L352.81521,231.86233L360.37668,143.27587Z"
            };
            var i = {};
            var t = {};

            startTime = performance.now(); 

            const stateShapes = new Array(Object.keys(r).length);
            const stateHitAreas = new Array(Object.keys(r).length);

            for (const s of Object.keys(r)) {
                const pathdat = r[s]
                if (!this.options.stateSpecificStyles[s]) {
                    continue;
                }

                e.extend(i, t, this.options.stateSpecificStyles[s]);

                stateShapes[s] = n.path(pathdat).attr(i);
                this.topShape = stateShapes[s];
                stateHitAreas[s] = n.path(pathdat).attr({
                    fill: "#000",
                    "stroke-width": 0,
                    opacity: 0,
                    cursor: "pointer",
                });
                stateHitAreas[s].node.dataState = s;
            }

            this.stateShapes = stateShapes;
            this.stateHitAreas = stateHitAreas;

              
            endTime = performance.now();
            //console.log("Creating statesc took " + (endTime - startTime) + " milliseconds.");   


            this._onClickProxy = e.proxy(this, "_onClick");
            this._onMouseOverProxy = e.proxy(this, "_onMouseOver"), this._onMouseOutProxy = e.proxy(this, "_onMouseOut");
            for (var s in this.stateHitAreas) {
                this.stateHitAreas[s].toFront();
                e(this.stateHitAreas[s].node).bind("mouseout", this._onMouseOutProxy);
                e(this.stateHitAreas[s].node).bind("click", this._onClickProxy);
                e(this.stateHitAreas[s].node).bind("mouseover", this._onMouseOverProxy)
            }
        },
        _initCreateLabels: function() {
            var t = this.paper;
            var n = ["VT", "NH", "MA", "RI", "CT", "NJ", "DE", "MD", "DC"];
            var r = 1000;
            var i = 230;
            var s = this.options.labelWidth;
            var o = this.options.labelHeight;
            var u = this.options.labelGap;
            var a = this.options.labelRadius;
            var f = s / this.scale;
            var l = o / this.scale;
            var c = (s + u) / this.scale;
            var h = (o + u) / this.scale * .5;
            var p = a / this.scale;
            var d = this.options.labelBackingStyles;
            var v = this.options.labelTextStyles;
            var m = {};
            for (var g = 0, y, b, w; g < n.length; ++g) {
                w = n[g];
                y = (g + 1) % 2 * c + r;
                b = g * h + i;
                m = {};
                if (this.options.stateSpecificLabelBackingStyles[w]) {
                    e.extend(m, d, this.options.stateSpecificLabelBackingStyles[w])
                } else {
                    m = d
                }
                this.labelShapes[w] = t.rect(y, b, f, l, p).attr(m);
                m = {};
                if (this.options.stateSpecificLabelTextStyles[w]) {
                    e.extend(m, v, this.options.stateSpecificLabelTextStyles[w])
                } else {
                    e.extend(m, v)
                }
                if (m["font-size"]) {
                    m["font-size"] = parseInt(m["font-size"]) / this.scale + "px"
                }
                this.labelTexts[w] = t.text(y + f / 2, b + l / 2, w).attr(m);
                this.labelHitAreas[w] = t.rect(y, b, f, l, p).attr({
                    fill: "#000",
                    "stroke-width": 0,
                    opacity: 0,
                    cursor: "pointer"
                });
                this.labelHitAreas[w].node.dataState = w
            }
            for (var w in this.labelHitAreas) {
                this.labelHitAreas[w].toFront();
                e(this.labelHitAreas[w].node).bind("mouseout", this._onMouseOutProxy);
                e(this.labelHitAreas[w].node).bind("click", this._onClickProxy);
                e(this.labelHitAreas[w].node).bind("mouseover", this._onMouseOverProxy)
            }
        },
        _getStateFromEvent: function(e) {
            var t = e.target && e.target.dataState || e.dataState;
            return this._getState(t)
        },
        _getState: function(e) {
            var t = this.stateShapes[e];
            var n = this.stateHitAreas[e];
            var r = this.labelShapes[e];
            var i = this.labelTexts[e];
            var s = this.labelHitAreas[e];
            return {
                shape: t,
                hitArea: n,
                name: e,
                labelBacking: r,
                labelText: i,
                labelHitArea: s
            }
        },
        _onMouseOut: function(e) {
            var t = this._getStateFromEvent(e);
            if (!t.hitArea) {
                return
            }
            return !this._triggerEvent("mouseout", e, t)
        },
        _defaultMouseOutAction: function(t) {
            var n = {};
            if (this.options.stateSpecificStyles[t.name]) {
                e.extend(n, this.options.stateStyles, this.options.stateSpecificStyles[t.name])
            } else {
                n = this.options.stateStyles
            }
            t.shape.animate(n, this.options.stateHoverAnimation);
            if (t.labelBacking) {
                var n = {};
                if (this.options.stateSpecificLabelBackingStyles[t.name]) {
                    e.extend(n, this.options.labelBackingStyles, this.options.stateSpecificLabelBackingStyles[t.name])
                } else {
                    n = this.options.labelBackingStyles
                }
                t.labelBacking.animate(n, this.options.stateHoverAnimation)
            }
        },
        _onClick: function(e) {
            var t = this._getStateFromEvent(e);
            if (!t.hitArea) {
                return
            }
            return !this._triggerEvent("click", e, t)
        },
        _onMouseOver: function(e) {
            var t = this._getStateFromEvent(e);
            if (!t.hitArea) {
                return
            }
            return !this._triggerEvent("mouseover", e, t)
        },
        _defaultMouseOverAction: function(t) {
            this.bringShapeToFront(t.shape);
            this.paper.safari();
            var n = {};
            if (this.options.stateSpecificHoverStyles[t.name]) {
                e.extend(n, this.options.stateHoverStyles, this.options.stateSpecificHoverStyles[t.name])
            } else {
                n = this.options.stateHoverStyles
            }
            t.shape.animate(n, this.options.stateHoverAnimation);
            if (t.labelBacking) {
                var n = {};
                if (this.options.stateSpecificLabelBackingHoverStyles[t.name]) {
                    e.extend(n, this.options.labelBackingHoverStyles, this.options.stateSpecificLabelBackingHoverStyles[t.name])
                } else {
                    n = this.options.labelBackingHoverStyles
                }
                t.labelBacking.animate(n, this.options.stateHoverAnimation)
            }
        },
        _triggerEvent: function(t, n, r) {
            var i = r.name;
            var s = false;
            var o = e.Event("usmap" + t + i);
            o.originalEvent = n;
            if (this.options[t + "State"][i]) {
                s = this.options[t + "State"][i](o, r) === false
            }
            if (o.isPropagationStopped()) {
                this.element.trigger(o, [r]);
                s = s || o.isDefaultPrevented()
            }
            if (!o.isPropagationStopped()) {
                var u = e.Event("usmap" + t);
                u.originalEvent = n;
                if (this.options[t]) {
                    s = this.options[t](u, r) === false || s
                }
                if (!u.isPropagationStopped()) {
                    this.element.trigger(u, [r]);
                    s = s || u.isDefaultPrevented()
                }
            }
            if (!s) {
                switch (t) {
                    case "mouseover":
                        this._defaultMouseOverAction(r);
                        break;
                    case "mouseout":
                        this._defaultMouseOutAction(r);
                        break
                }
            }
            return !s
        },
        trigger: function(e, t, n) {
            t = t.replace("usmap", "");
            e = e.toUpperCase();
            var r = this._getState(e);
            this._triggerEvent(t, n, r)
        },
        bringShapeToFront: function(e) {
            if (this.topShape) {
                e.insertAfter(this.topShape)
            }
            this.topShape = e
        }
    };
    var c = [];
    s(e, "usmap", l, c)
})(jQuery, document, window, Raphael)

campaignTrail_temp.election_json[0]["fields"].advisor_url = "https://i.imgur.com/7ADVoLF.png";

//fails

campaignTrail_temp.candidate_image_url = "https://i.imgur.com/U6pvYZ9.png";
campaignTrail_temp.running_mate_image_url = "https://i.imgur.com/gO8Fekt.png";
campaignTrail_temp.candidate_last_name = "Weaver";
campaignTrail_temp.running_mate_last_name = "The People?";

campaignTrail_temp.cyoa = true

cyoAdventure = function (a) {


e=campaignTrail_temp
ans = campaignTrail_temp.player_answers[campaignTrail_temp.player_answers.length - 1]

// Q1, Cincinnati
if((ans == 5142)) {
    console.log("a")
    campaignTrail_temp.question_number = 24;
    campaignTrail_temp.candidate_json[2]["fields"].first_name = "Robert";
    campaignTrail_temp.candidate_json[2]["fields"].last_name = "Cowdrey";
    campaignTrail_temp.candidate_json[2]["fields"].image_url = "https://i.imgur.com/nGIv9z6.png";
    campaignTrail_temp.candidate_json[2]["fields"].electoral_victory_message = "<h3>Cowdreymania</h3><p>Land tax would fix all of this, you know.</p>";
    campaignTrail_temp.candidate_json[2]["fields"].electoral_loss_message = "<h3>Labor, Divided</h3><p>The farmers and urban laborers of this country may one day be united, but this was far too soon. Your decision to throw your weight behind the nascent labor movement left many agrarians out in the cold, and the resulting United Labor candidacy of Robert Cowdrey failed to rouse the passions of the downtrodden across the nation. Cowdrey picked up a few votes from urban reformers and labor, but little else. What a waste of an opportunity. Maybe things will work out in 1892. Or maybe one of these two parties will dazzle the people enough to prevent a true workingman's party from forming. It's out of your hands now.</p>";
    campaignTrail_temp.candidate_json[2]["fields"].no_electoral_majority_message = "<h3>DEADLOCK</h3><p>Null</p><p>Null</p>";
    campaignTrail_temp.multiple_endings=false
}

// Q1, Cincinnati
if((ans == 5142)) {
    campaignTrail_temp.question_number = 24;
    campaignTrail_temp.candidate_json[2]["fields"].first_name = "Robert";
    campaignTrail_temp.candidate_json[2]["fields"].last_name = "Cowdrey";
    campaignTrail_temp.candidate_json[2]["fields"].image_url = "https://i.imgur.com/nGIv9z6.png";
    campaignTrail_temp.candidate_json[2]["fields"].color_hex = "#e65449";
    campaignTrail_temp.candidate_json[2]["fields"].electoral_victory_message = "<h3>Cowdreymania</h3><p>Land tax would fix all of this, you know.</p>";
    campaignTrail_temp.candidate_json[2]["fields"].electoral_loss_message = "<h3>Labor, Divided</h3><p>The farmers and urban laborers of this country may one day be united, but this was far too soon. Your decision to throw your weight behind the nascent labor movement left many agrarians out in the cold, and the resulting United Labor candidacy of Robert Cowdrey failed to rouse the passions of the downtrodden across the nation. Cowdrey picked up a few votes from urban reformers and labor, but little else. What a waste of an opportunity. Maybe things will work out in 1892. Or maybe one of these two parties will dazzle the people enough to prevent a true workingman's party from forming. It's out of your hands now.</p>";
    campaignTrail_temp.candidate_json[2]["fields"].no_electoral_majority_message = "<h3>DEADLOCK</h3><p>Null</p><p>Null</p>";
    campaignTrail_temp.multiple_endings=false
}

if((ans == 5147 || ans == 20975)) {
    console.log("b")
    campaignTrail_temp.question_number = 24;
    campaignTrail_temp.candidate_json[2]["fields"].first_name = "Leonidas L.";
    campaignTrail_temp.candidate_json[2]["fields"].last_name = "Polk";
    campaignTrail_temp.candidate_json[2]["fields"].image_url = "https://i.imgur.com/tTxyBsJ.png";
    campaignTrail_temp.candidate_json[2]["fields"].electoral_victory_message = "<h3>We polked you in 44 we'll polk you again</h3><p>Leonidas L Polk</p>";
    campaignTrail_temp.candidate_json[2]["fields"].electoral_loss_message = "<h3>The Moment Passes</h3><p>What do you call a movement that refuses to move? That's how you felt watching the campaign. Leonidas L. Polk, the farmer-journalist, was one of the best candidates you could have fielded, such is his reputation among the poor farmers of the country. But in time, the two parties did what they did best, dragging the politically-inexperienced Polk through the dirt until he was unrecognizable. The last time you saw him, he didn't look long for this world. The opportunity was there. You could feel it. But you didn't get the candidate you wanted, and it slipped away. Whoever wins, you know the issues of today cannot be fixed within the current framework. They just don't have the tools. But how long will it take for people to realize that?</p>";
    campaignTrail_temp.candidate_json[2]["fields"].no_electoral_majority_message = "<h3>DEADLOCK</h3><p>Null</p><p>Null</p>";
    campaignTrail_temp.multiple_endings=false
}

if((ans == 5143 || ans ==  5144 || ans == 5145 || ans == 20993)) {
    campaignTrail_temp.candidate_image_url = "https://i.imgur.com/rHfNd9G.jpeg";
    campaignTrail_temp.running_mate_image_url = "https://i.imgur.com/18bkCn6.jpeg";
    campaignTrail_temp.candidate_last_name = "Gresham";
    campaignTrail_temp.running_mate_last_name = "Law";
}
}

endingPicker = (out, totv, aa, quickstats) => {
    used=true
    
    let rScore = -1;
    if(campaignTrail_temp.player_answers.includes(5155)) {rScore = rScore - 2};
    if(campaignTrail_temp.player_answers.includes(5156)) {rScore--};
    if(campaignTrail_temp.player_answers.includes(5172)) {rScore = rScore + 2};
    if(campaignTrail_temp.player_answers.includes(5174)) {rScore = rScore + 2};
    if(campaignTrail_temp.player_answers.includes(5175)) {rScore = rScore - 2};
    if(campaignTrail_temp.player_answers.includes(5196)) {rScore--};
    if(campaignTrail_temp.player_answers.includes(5190)) {rScore++};
    if(campaignTrail_temp.player_answers.includes(5156)) {rScore--};
    if(campaignTrail_temp.player_answers.includes(5225)) {rScore++};
    if(campaignTrail_temp.player_answers.includes(21003)) {rScore--};
    if(campaignTrail_temp.player_answers.includes(21023)) {rScore--};
    if(campaignTrail_temp.player_answers.includes(21024)) {rScore++};
    
    if (out == "tie" && rScore > -1) {
        return "<h3><i>Salus populi suprema lex esto</i></h3><div style='overflow-y:scroll;height:200px;'><p>It takes some time to sink in. That you’d fail seemed such a certainty. In some sense you weren’t prepared for this -- that you would win enough states to deny both parties a majority. You expected the people to stumble blindly into their own doom, as they’re wont to do.</p><p>With no candidate reaching a majority of electoral votes, the election will go to the House, where each state casts one vote. And a couple of those tiny Western states have elected Populist delegations to the House -- enough to deny either side a majority of the states. The path to the Executive Mansion runs through you. You have leverage. Real power, at last. Not much, of course. Demand too much of the two-headed Plutocracy and they’ll be reminded they’re part of the same beast, and cut some deal to cut you out and leave the old system intact.</p><p>You’ve unsurprisingly aligned more with the Democrats, the traditional home of the working class, so you consider what you’ll be able to get from Vilas. The Democrats still have a sizable inflation wing, so some silver coinage seems in the cards. You know the Bourbons will hate it, but stronger labor protections and an 8-hour day will keep the labor wing you struggled so much to court from the Democracy happy. That might be all you get. Small steps, you tell yourself. Perfection is an ideal, and in this fallen world you must take what you can. Hope the promises you’ll hear are genuine. Hope the Republic survives another hundred years. Hope for more people like you.</p></div>"
    } else if (out == "tie") {
        return "<h3><i>Salus populi suprema lex esto</i></h3><div style='overflow-y:scroll;height:200px;'><p>It takes some time to sink in. That you’d fail seemed such a certainty. In some sense you weren’t prepared for this -- that you would win enough states to deny both parties a majority. You expected the people to stumble blindly into their own doom, as they’re wont to do.</p><p>With no candidate reaching a majority of electoral votes, the election will go to the House, where each state casts one vote. And a couple of those tiny Western states have elected Populist delegations to the House -- enough to deny either side a majority of the states. The path to the Executive Mansion runs through you. You have leverage. Real power, at last. Not much, of course. Demand too much of the two-headed Plutocracy and they’ll be reminded they’re part of the same beast, and cut some deal to cut you out and leave the old system intact.</p><p>You’ve unexpectedly aligned more with the Republicans to break the power of the Southern Democracy, and so you’ll get a chance to sit down with Blair and talk concessions. You won’t get them off their tariff-mania -- Blair is too set in his ways and stubborn doctrinaire populists don’t care, even though you know it’s robbery. Not as much on silver coinage as you could expect from the Democracy, but you’ll have to deal with less laissez-faire zealots when trying to get corporate regulations through. Maybe more patronage -- ironic. That might be all you get. Small steps, you tell yourself. Perfection is an ideal, and in this fallen world you must take what you can. Hope the promises you’ll hear are genuine. Hope the Republic survives another hundred years. Hope for more people like you.</p></div>"
    } else if (aa[0].candidate == 201 && rScore > 0) {
        return "<h3><i>O tempora, o mores!</i></h3><div style='overflow-y:scroll;height:200px;'><p>You lose, of course.</p><p>You step away from the telegraph early. The Democrats have it, predictably. Both parties took turns cursing you, slandering you, beating your loyal partisans in the streets, but you bet on those impoverished farmers of the South, in hopes of forcing the Democracy to listen to the people. And the Democracy has indeed been taken down a peg. But the victory is Blair’s, and, according to the media, his alone. Your movement has been diminished to a curious footnote, like those sham reformers who went for Palmer four years earlier.</p><p>What can you expect from this? Hope of offices for those in your movement? The thought makes you laugh. Blair has his own agenda. The kind of reforms you want, he’ll never give. All this work, just to get folded into the issueless scramble over spoils. Maybe you’ll get a post office to tide you over. The Blair bill is no revolution. It’s not enough to stop the Plutocracy. Maybe nothing will be. Perfection is an ideal, and this world is too broken in its obsession with “progress” to even turn its eyes back towards it. Maybe it’s the nature of real republics to die out, before a Conkling comes to put them out of their misery and restore humanity to its natural, low state. There’s just not enough people like you in the world to preserve them. </p></div>"
    } else if (aa[0].candidate == 201) {
        return "<h3><i>O tempora, o mores!</i></h3><div style='overflow-y:scroll;height:200px;'><p>You lose, of course.</p><p>You step away from the telegraph early. The Republicans have it, improbably. Both parties took turns cursing you, slandering you, beating your loyal partisans in the streets, but in time you steered the party back towards its traditional home, the Democracy. And with Blair taking office, you have little to show for it. You can be safely ignored for four years more.</p><p>The arena in which the old men of virtue once did battle has become an issueless scramble over spoils. The Republic -- the real Republic -- barely lasted a century.  Perfection is an ideal, and this world is too broken in its obsession with “progress” to even turn its eyes back towards it. You can take some small comfort in the knowledge that, many years from now, when the names Blair and Vilas and Conkling have been forgotten, the name Gresham will still be spoken in the same breath as Cato -- those men who stood guard over a dying Republic. You won’t live long enough to be loved by the people you were trying to save. But posterity will. Surely.</p></div>"
    } else if (aa[0].candidate == 200 && rScore < 1) {
        return "<h3><i>O tempora, o mores!</i></h3><div style='overflow-y:scroll;height:200px;'><p>You lose, of course.</p><p>You step away from the telegraph early. The Democrats have it, predictably. Both parties took turns cursing you, slandering you, beating your loyal partisans in the streets, beating your loyal partisans in the streets, but in time you steered the party back towards its traditional home, the Democracy. It’s refreshing to see the rascals turned out at last. But the victory belongs to Vilas, and, according to the media, him alone. All that work to send your barefoot faithful to vote the same ballot as the most aristocratic Bourbon. Some movement.</p><p>What can you expect from this? “Reform?” You’ll get to be ruled by rich experts instead of rich fools. The tariff might get cut. The southern feudalism will continue its reign unimpeded, generations doomed to be serfs. The Plutocracy will win, in time.  Perfection is an ideal, and this world is too broken in its obsession with “progress” to even turn its eyes back towards it. Maybe it’s the nature of real republics to die out, before a Conkling comes to put them out of their misery and restore humanity to its natural, low state. There’s just not enough people like you in the world to preserve them.</p></div>"
    } else if (aa[0].candidate == 200) {
        return "<h3><i>O tempora, o mores!</i></h3><div style='overflow-y:scroll;height:200px;'><p>You lose, of course.</p><p>You step away from the telegraph early. The Democrats have it, predictably. Both parties took turns cursing you, slandering you, beating your loyal partisans in the streets, but you bet on those impoverished farmers of the South, in hopes of forcing the Democracy to listen to the people. You lost that bet.</p><p>The arena in which the old men of virtue once did battle has become an issueless scramble over spoils. The Republic -- the real Republic -- barely lasted a century.  Perfection is an ideal, and this world is too broken in its obsession with “progress” to even turn its eyes back towards it. You can take some small comfort in the knowledge that, many years from now, when the names Blair and Vilas and Conkling have been forgotten, the name Gresham will still be spoken in the same breath as Cato -- those men who stood guard over a dying Republic.You won’t live long enough to be loved by the people you were trying to save. But posterity will. Surely.</p></div>"
    } else {
        return "<h3>republic status restored</h3>"
    }
}

campaignTrail_temp.multiple_endings=true