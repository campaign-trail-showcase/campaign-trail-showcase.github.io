campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 15,
        "fields": {
            "year": 1988,
            "summary": "<p>An election seemingly to be dominated by Reagan once again now seems increasingly competitive. After 4 years of pursuing his conservative agenda after the fall of Jimmy Carter, Reagan will have to make sure the voters are in step with his policies. Ohio Senator John Glenn is a famous astronaut, the first American to orbit the Earth, and a moderate senator from a crucial swing state.\n<ul>\n<li>Will Reagan get 4 more years?</li>\n<li>Will Glenn bring this impossible year home for the Democrats?</li>\n</ul>",
            "image_url": "https://i.imgur.com/FGDnCr0.jpeg",
            "winning_electoral_vote_number": 270,
            "advisor_url": "https://imgur.com/Ym44iYB",
            "recommended_reading": "<h4 style=\"margin-top: 0.5em;\">Thanks for Playing!</h4><a href=\"https://www.nasa.gov/people/john-glenn/\" target=\"_blank\">NASA's Glenn Website</a><br><p>This was my first mod and I hope you had fun.<br>My first interest was not the presidents, but of space, like so many.<br>Because of this, I decided to make a John Glenn mod.<br>I didn't really know what I was doing at the start, so things might be a bit messy.<br>I like to thank Jet's tools, Astro's guide and of course, all the playtesters.<br>I am thinking of making a sequel soon, hopefully I master new tricks by then.<br>Anyway, play again!<br> </p>",
            "has_visits": 1,
            "no_electoral_majority_image": "https://www.jetsimon.com/public/static/images/2012-no-majority.jpg",
            "creator": "Dan Bryan",
            "display_year": "1984 - To the Stars!"
        }
    }
]


campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 152,
        "fields": {
            "first_name": "Ronald",
            "last_name": "Reagan",
            "election": 15,
            "party": "Republican",
            "state": "California",
            "priority": 1,
            "description": "<b>NOT PLAYABLE</b>\n<p>\nRonald Reagan is the 40th President. He was a famous actor, slowly entering politics in the 50s during the Second Red Scare. After his acclaimed speech “A Time for Choosing”, he became California Governor in 1966 and won reelection in 1970. In 1976, he failed to snatch away the nomination from Ford. In 1980, he was able to win the presidency, beating Jimmy Carter in a landslide.\n</p>\n<p>\nSince becoming president, he has engaged in his conservative approach. He has raised defense spending, deregulated the economy, and aligned himself with the Christian right. He is still a very popular president, and should sail to reelection. However, as challenger John Glenn wins the Democrat nomination, the race becomes increasingly competitive, and Reagan is urged to not become complacent like Dewey. Can Reagan secure four more years?\n</p>\n",
            "color_hex": "#fc3d21",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 1,
            "image_url": "https://i.postimg.cc/bvmd1cJq/reagan.jpg",
            "electoral_victory_message": "<h3>Reagan wins reelection</h3>\n\n<p>You were supposed to play Glenn</p>",
            "electoral_loss_message": "<h3>Reagan loses in shock!</h3>\n\n<p>You were supposed to play Glenn</p>",
            "no_electoral_majority_message": "<h3>Reagan loses in shock!</h3>\n\n<p>You were supposed to play Glenn</p>",
            "description_as_running_mate": "'",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 153,
        "fields": {
            "first_name": "John",
            "last_name": "Glenn",
            "election": 15,
            "party": "Democrat",
            "state": "Ohio",
            "priority": 2,
            "description": "<p>\nJohn Glenn is the American Hero. He fought 59 combat missions during World War 2, whilst acquiring more in Korea. With his experience in flight, he was chosen to be one of the Mercury 7. He became the 3rd American in space, and first one to orbit the Earth. He was elected Ohio’s senator in a landslide in 1974 and an even bigger one in 1980.\n</p>\n<p>\nHe is thought of as a moderate senator. Not as liberal as Ted Kennedy, but not as conservative as George Wallace. However, he is much more hawkish than other Democrats, having important roles in the Foreign Relations and Armed Service Committees. For a man sculpted by NASA, he is likewise supportive of science and technology, seeing it as America’s destiny. Maintaining his image, he is moderate on the economy, wanting to maintain current New Deal systems without expanding or eliminating them. Many Democrats hope this set of policies can be enough to stop Reagan. He says Democrats must move up, not left. Can Glenn save the Democrats?\n</p>\n",
            "color_hex": "#0b3d91",
            "secondary_color_hex": "#90C0FF",
            "is_active": 1,
            "image_url": "https://i.postimg.cc/pXjkWxVH/glenn-2.jpg",
            "electoral_victory_message": "<h3>Glenn wins in upset!</h3>\n\n<p>You won, good job!</p>",
            "electoral_loss_message": "<h3>Reagan gets 4 more years!</h3>\n\n<p>Time to go back to the Senate and deal with Reagan for 4 more years.</p>\n",
            "no_electoral_majority_message": "<h3>Glenn wins in upset!</h3>\n\n<p>Democrats won the House, meaning you're now POTUS. You won, good job!</p>",
            "description_as_running_mate": "'",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 154,
        "fields": {
            "first_name": "Ron",
            "last_name": "Paul",
            "election": 15,
            "party": "Libertarian",
            "state": "Texas",
            "priority": 3,
            "description": "'",
            "color_hex": "#FFFF00",
            "secondary_color_hex": "#FFFFC0",
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
        "pk": 155,
        "fields": {
            "first_name": "Lenora",
            "last_name": "Fulani/Other",
            "election": 15,
            "party": "Independent",
            "state": "Pennsylvania",
            "priority": 4,
            "description": "'",
            "color_hex": "#00C100",
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
        "pk": 156,
        "fields": {
            "first_name": "George",
            "last_name": "Bush",
            "election": 15,
            "party": "Republican",
            "state": "Texas",
            "priority": 5,
            "description": "'",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/static/images/george-bush-1988.jpg",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>George Bush has served as VP for 4 years. A capable partner, he has had much experience and it makes little sense to throw him off the ticket.</p>\n<b>REAGAN SIDE NOT PLAYABLE GO BACK</b>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 159,
        "fields": {
            "first_name": "Gary",
            "last_name": "Hart",
            "election": 15,
            "party": "Colorado",
            "state": "Colorado",
            "priority": 8,
            "description": "'",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.postimg.cc/L51k8BpC/gary-(1).jpg",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>\nHe has everything you need. He is young and from a different region from you. Before your shock victory in Iowa, he was the guy Reagan was going to face, and Reagan was worried about him. His New Ideas have been very popular with young people, and with Reagan’s advanced age, could secure this crucial voting block. He has also had experience with presidential campaigns, but that was McGovern 72. However, he is another moderate senator, which may upset the liberals in the party. There are also rumors he is also less than faithful to his wife.\n</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 163,
        "fields": {
            "first_name": "Andre",
            "last_name": "Marrou",
            "election": 15,
            "party": "Libertarian",
            "state": "Alaska",
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
        "pk": 164,
        "fields": {
            "first_name": "Other",
            "last_name": "Other",
            "election": 15,
            "party": "Independent",
            "state": "Pennsylvania",
            "priority": 13,
            "description": "'",
            "color_hex": "#00C100",
            "secondary_color_hex": "#A1FFA1",
            "is_active": 0,
            "image_url": "'",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "'",
            "candidate_score": 0,
            "running_mate": true
        }
    }
]


campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 106,
        "fields": {
            "candidate": 155,
            "running_mate": 164
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 105,
        "fields": {
            "candidate": 154,
            "running_mate": 163
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 101,
        "fields": {
            "candidate": 153,
            "running_mate": 159
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 98,
        "fields": {
            "candidate": 152,
            "running_mate": 156
        }
    }
]


campaignTrail_temp.credits = "RandomTexan"


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


campaignTrail_temp.opponents_default_json = [
    {
        "election": 15,
        "candidates": [
            152,
            153,
            154,
            155
        ]
    }
]


campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 15,
        "candidates": [
            152,
            153,
            154,
            155
        ]
    }
]


campaignTrail_temp.temp_election_list = [
    {
        "id": 15,
        "year": 1988,
        "is_premium": 0,
        "display_year": "1984 - To the Stars!"
    }
]


jet_data = {
    "headerColor": "#091534",
    "windowColor": "#1022ff",
    "containerColor": "#3d495f",
    "innerWindowColor": "#b0c2ea",
    "bannerImageUrl": "https://i.imgur.com/XFHXPTS.png",
    "backgroundImageUrl": "https://i.postimg.cc/CL6YgGK3/ey-MFWYS.jpg",
    "endingTextColor": "#000000",
    "customQuote": "\"I've never let people push me around in politics.\" - John Glenn",
    "gameTitle": "TO THE STARS!"
}


//#startcode

corrr = '\n<h2>TO THE STARS!</h2>\n<font id="wittyquote" size="4" color="white"><em>"I\'ve never let people push me around in politics." - John Glenn</em></font>\n';

nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#091534";
nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#1022ff";

document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;
$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;
$(".container")[0].style.backgroundColor = "#3d495f";

document.getElementById("header").src = "https://i.imgur.com/XFHXPTS.png";
document.body.background = "https://i.postimg.cc/CL6YgGK3/ey-MFWYS.jpg";

document.body.style.backgroundSize = "cover"

document.head.innerHTML += "<style>#results_container { color: #000000; } .inner_window_w_desc { background-color: #b0c2ea !important; }</style>";
HistHexcolour=["#0b3d91","#fc3d21","#70ad47","#ffff66"];
HistName=["John Glenn","Ronald Reagan","Lenora Fulani/Other","Ron Paul"];
HistEV=[280,258,0,0];
HistPV=["48,981,864","47,447,087","385,324","347,033"];
HistPVP=["50.4%","48.8%","0.4%","0.4%"];
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

    var positionDisplay = document.createElement("gg");
    positionDisplay.id = "position-display";

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

    function updatePositionDisplay() {
      positionDisplay.innerHTML = "<b>Time:</b> " + toTime(audio.currentTime) + "<br>";
      timeSlider.value = audio.duration ? audio.currentTime / audio.duration : 0;
    }

    function changeTime() {
      positionDisplay.innerHTML = "<b>Time:</b> " + toTime(audio.currentTime) + "<br>";
      audio.currentTime = timeSlider.value * audio.duration;
    }

    updateVolume = event => {
      audio.volume = event.target.value;
    }
    
    setInterval(updatePositionDisplay, 1000);

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

  for (i in soundtracks[e.selectedSoundtrack].tracklist) {
    let a = soundtracks[e.selectedSoundtrack].tracklist[i]
    let b = `<label><input class="trackSelector" type="radio" name="trackSelector" value="`+i+`">`+a.name+`</label><br>`
    z += b
  }

  z += "</div><br><br>"
  trackSel.innerHTML = z

  musicBox.appendChild(trackSel);

  Array.from(document.getElementById("trackSel").children).filter(f=>{
    return f.tagName == "LABEL"
  }).map(f=>f.children[0])[0].checked = true

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
    name: "To Touch The Stars: A Musical Celebration of Space Exploration",
    tracklist: [
      {
        "name": "Witnesses' Waltz - Kristoph Klover",
        "url": "https://audio.jukehost.co.uk/019ff9a1-3455-71ed-9444-f1f63e6e63ad"
      },
      {
        "name": "Big Blue Sky - Stan Clardy",
        "url": "https://audio.jukehost.co.uk/019ff9a2-7305-7094-9289-1960dc51705c"
      },
      {
        "name": "Fire in the Sky - Kristoph Klover",
        "url": "https://audio.jukehost.co.uk/019ff9a3-5233-717e-95ae-e101920884bc"
      },
      {
        "name": "Now's the Time to Touch a Star - Karl Franzen",
        "url": "https://audio.jukehost.co.uk/019ff9a4-3446-72bf-9d8d-685ae795c9cf"
      },
      {
        "name": "Hope Eyrie - Julia Ecklar",
        "url": "https://audio.jukehost.co.uk/019ff9a5-23a7-738c-bce7-bb8b923a2851"
      },
      {
        "name": "Surprise! - Gunnar Madsen",
        "url": "https://audio.jukehost.co.uk/019ff9a5-a315-71df-bfeb-81a219467c6c"
      },
      {
        "name": "The Pioneers of Mars - Karen Linsley",
        "url": "https://audio.jukehost.co.uk/019ff9a6-1b34-70a5-b1e3-f85e613b799f"
      },
      {
        "name": "If We Had No Moon - Christine Lavin",
        "url": "https://audio.jukehost.co.uk/019ff9a6-d236-7014-b07f-1b27db0fe7da"
      },
      {
        "name": "I Want to Go To Mars - The Birdwatchers",
        "url": "https://audio.jukehost.co.uk/019ff9a7-4f36-710d-9f10-d87872b8a613"
      },
      {
        "name": "Star Fire - Julia Ecklar",
        "url": "https://audio.jukehost.co.uk/019ff9a7-b5e4-735c-8766-10b36fcce936"
      },
      {
        "name": "Others Standing By - Kristoph Klover",
        "url": "https://audio.jukehost.co.uk/019ff9a8-362f-70dc-a906-f0883877783c"
      },
      {
        "name": "The Challenge - Karen Linsley",
        "url": "https://audio.jukehost.co.uk/019ff9a8-908d-711f-bd17-7d1d804a02a2"
      },
      {
        "name": "Dog on the Moon - Garry Novikoff",
        "url": "https://audio.jukehost.co.uk/019ff9a9-08ea-7075-8fbd-d0782899b358"
      },
      {
        "name": "Queen Isabella - Kristoph Klover",
        "url": "https://audio.jukehost.co.uk/019ff9a9-5dce-7049-8bcb-4e04f481707a"
      },
      {
        "name": "Legends - Julia Ecklar",
        "url": "https://audio.jukehost.co.uk/019ff9a9-c303-714b-b440-6075e26c206c"
      },
      {
        "name": "Dance on the Ceiling - Gunnar Madsen",
        "url": "https://audio.jukehost.co.uk/019ff9aa-3c0b-7180-8600-905993258ac6"
      }
    ]
  }
};

// Set up new music player

newMusicPlayer()
RecReading = true
//#endcode
