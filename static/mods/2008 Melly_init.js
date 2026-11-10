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
        "pk": 20,
        "fields": {
            "year": 2016,
            "display_year": "2008 Melly",
            "summary": "President John Bennett, whose popularity ratings have spiked upward following his shooting of Osama Bin Laden, doesn’t have plenty of time left in the Oval Office. His Vice President, Melanie Young, vows to continue the legacy Bennett left while promising an even brighter future for America. Running against her is Senator Erica Zimmerman from Connecticut, who was previously the running mate of former Secretary of State Annabelle Carter during the 2000 election. Will Melanie Young continue the streak of the GOP or does Zimmerman avenge the Democrat loss of 2000?",
            "image_url": "https://preview.redd.it/1k86m6gbp22f1.jpeg?width=320&crop=smart&auto=webp&s=b006a058313a64b18b817adcb626e3253a2c4816",
            "winning_electoral_vote_number": 270,
            "advisor_url": "https://preview.redd.it/ug8dkv17t22f1.jpeg?width=320&crop=smart&auto=webp&s=b731620de96fe51f380ef867d2c9253468e7f401",
            "recommended_reading": "<ul>\n<li><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></li>\n<li><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></li>\n<li><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></li>\n<li><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></li>\n<li><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></li>\n</ul>",
            "has_visits": 1,
            "no_electoral_majority_image": "../static/images/2012-no-majority.jpg"
        }
    }
]

campaignTrail_temp.temp_election_list = [
    {
        "id": 20,
        "year": 2016,
        "is_premium": 0,
        "display_year": "2008 Melly"
    }
]

campaignTrail_temp.credits = "Newinduvidual2700"

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 12240,
        "fields": {
            "first_name": "Melanie",
            "last_name": "Young",
            "election": 20,
            "party": "Republican",
            "state": "Wyomming",
            "priority": 1,
            "description": "Melanie Young is the incumbent Vice President of the United States. She aims to continue the conservative values restored during the Bennett administration as well as to fully eliminate all forms of terrorism. Despite holding some liberal beliefs, Young still retains right-wing characteristics.",
            "color_hex": "#a30039",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://preview.redd.it/heb4f789x41f1.png?width=320&crop=smart&auto=webp&s=acc76937aba40dbc2a1e499cb182584d59d986c1",
            "electoral_victory_message": "<h3>You’ve won the 2008 election! Congratulations!</h3><p>You have secured yourself a spot in the Oval Office next year, with this, you get to continue the War on Terror, spread Conservative values, and enact all your campaign’s promises. Some people consider you as a third term of John Bennett, but don’t let these comments bring you down, there’s a lot of opportunity waiting for you in the White House. May God bless you Ms. President!</p>>",
            "electoral_loss_message": "<h3>You’ve lost the 2008 election…</h3><p>Erica ZImmerman manages to defeat you, avenging the close loss the Democrats suffered at the hands of President John Bennett in 2000. With this, you only have little time until you have to leave the White House, and politics as a whole if you choose to do so. If you want to stay in government, you can run as governor, or senate, or congress, the list goes on. You could also choose to run again in 2012 too.</p>",
            "no_electoral_majority_message": "<h3>How?!</h3><p>Both candidates of the 2008 election have fought hard, but all efforts go to pot. The election has been deadlocked, recounts have been demanded in the battleground states, supreme court buildings are crowded with protests, many are claiming voter fraud, it’s 2000 but worse. You and Zimmerman decide to battle it out in the court for approval.</p>",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 12357,
        "fields": {
            "first_name": "Dana",
            "last_name": "Anderson",
            "election": 20,
            "party": "Republican",
            "state": "Minnesota",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#a30039",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://preview.redd.it/dxgcfhgvhjokpol-p-v0-7igws25u541f1.png?width=320&crop=smart&auto=webp&s=e0e826b6e35b6030301039f2940a293bbd0000db",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "Dana Anderson is the current governor of Minnesota, and she also has close ties with the Bennett administration and its cabinet, particularly Vice President Young. In the state she governs, she has a generally high rating and she proves that she can be someone to cooperate with.",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 12297,
        "fields": {
            "first_name": "Erica",
            "last_name": "Zimmerman",
            "election": 20,
            "party": "Democrat",
            "state": "Connecticut",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#007399",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "123",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 50001,
        "fields": {
            "first_name": "Chesca",
            "last_name": "Chęciński",
            "election": 20,
            "party": "Republican",
            "state": "Alabama",
            "priority": 1,
            "description": "NOT YET A PLAYABLE RUNNING MATE",
            "color_hex": "#a30039",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://preview.redd.it/3re0658qni2f1.png?width=320&crop=smart&auto=webp&s=94239800478ca469ae08e9af9da731e06e0301da",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 50002,
        "fields": {
            "first_name": "Madison",
            "last_name": "Dawson",
            "election": 20,
            "party": "Republican",
            "state": "Indiana",
            "priority": 1,
            "description": "NOT YET A PLAYABLE RUNNING MATE\n\nMadison Dawson is a member of the House of Representatives, and she is also a good friend of yours. She is someone who is very enthusiastic when it comes to making speeches, but at the same time she can have stances that don’t align with the GOP.\n",
            "color_hex": "#a30039",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://preview.redd.it/gv5hc4uqni2f1.png?width=320&crop=smart&auto=webp&s=0a7d2fec72166a8810fc58679bab73a89036111c",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 50003,
        "fields": {
            "first_name": "Scott",
            "last_name": "Samson",
            "election": 20,
            "party": "Turbo Team",
            "state": "Massachusetts",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#a30039",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/candidateexample.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "NOT YET A PLAYABLE RUNNING MATE\n\nScott Samson is the former governor of Massachusetts, though people say he did decent in what he strived to do, he refused to run for a second term, opting to take a break from politics. Selecting him as running mate could boost your numbers in New England, particularly, the projected upset in Connecticut.\n",
            "candidate_score": 1,
            "running_mate": true
        }
    }
]

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 136455,
        "fields": {
            "candidate": 12240,
            "running_mate": 12357
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 142220,
        "fields": {
            "candidate": 1,
            "running_mate": 50001
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 172959,
        "fields": {
            "candidate": 1,
            "running_mate": 50002
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 144847,
        "fields": {
            "candidate": 1,
            "running_mate": 50003
        }
    }
]

campaignTrail_temp.opponents_default_json = [
    {
        "election": 20,
        "candidates": [
            12240,
            12297
        ]
    }
]

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 20,
        "candidates": [
            12240,
            12297
        ]
    }
]

jet_data = {
    "headerColor": "#7c136e",
    "windowColor": "#e4b4e0",
    "containerColor": "#fbbce7",
    "innerWindowColor": "#b257a6",
    "bannerImageUrl": "https://preview.redd.it/hwftw3jqo42f1.jpeg?width=1080&crop=smart&auto=webp&s=646fef0073da580eff0c890547389dcd035b1b79",
    "backgroundImageUrl": "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/optimized/4X/e/5/6/e5699dbdc711b60544e245d9e8452fb6efb8790e_2_690x298.jpeg",
    "endingTextColor": "#000000",
    "customQuote": "\"Use the one you shanked your friend with!\" -John Bennett",
    "gameTitle": "Melly For Me!"
}

//#startcode


corrr = '\n              <h2>Melly For Me!</h2><font id="wittyquote" size="4" color="white"><em>"Use the one you shanked your friend with!" -John Bennett</em></font>\n            ';


nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#7c136e";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#e4b4e0";

document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$(".container")[0].style.backgroundColor = "#fbbce7";

document.getElementById("header").src = "https://preview.redd.it/hwftw3jqo42f1.jpeg?width=1080&crop=smart&auto=webp&s=646fef0073da580eff0c890547389dcd035b1b79";

document.body.background = "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/optimized/4X/e/5/6/e5699dbdc711b60544e245d9e8452fb6efb8790e_2_690x298.jpeg";

document.head.innerHTML += "<style>#results_container {color:#000000;} .inner_window_w_desc {background-color:#b257a6!important;}</style>";

//#endcode

















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
    name: "Melly For Me!",
    tracklist: [
      {
        "name": "Belmont - I Just Threw Out The Love Of My Dreams (cover)",
        "url": "https://audio.jukehost.co.uk/trQUU3BQYH1sfsTfITic7gtiQQCn8l63"
      },
      {
        "name": "Charli xcx - 360",
        "url": "https://audio.jukehost.co.uk/KJhpJARDdg6FjNiFTed5Z0mcjfzPuyzJ"
      },
      {
        "name": "JibJab - 2008 Year In Review",
        "url": "https://audio.jukehost.co.uk/CNnKnNQURLWQtsPusPdfvQWlrpdgf2Yk"
      },
      {
        "name": "JibJab - Time For Some Campaignin’",
        "url": "https://audio.jukehost.co.uk/QKGiK9JNu8fGhd0c8llEnJQhiwzjFD8b"
      },
      {
        "name": "The Clash - Rock The Casbah",
        "url": "https://files.catbox.moe/l7fttj.mp3"
      },
      {
        "name": "Eminem - Mosh",
        "url": "https://audio.jukehost.co.uk/DnqHJx99FiN3f9rUA36jRjgCnd9pCYe1"
      },
      {
        "name": "Veteran Files - California Dreamin’ in Baghdad",
        "url": "https://audio.jukehost.co.uk/gQmrjZAxZCQWaikEntLUDQiY8kyJkVpP"
      },
      {
        "name": "Project WarWave - Jump Around in Fallujah",
        "url": "https://audio.jukehost.co.uk/GeTYzAbUThaAqwGLajnCXS5idIDBji0h"
      },
      {
        "name": "Family Guy - Republican Town",
        "url": "https://audio.jukehost.co.uk/dUhFLR3iKD0YQnrDMMjnbCGYwyBYiAi5"
      }
    ]
  }
}

// Set up new music player

newMusicPlayer()

