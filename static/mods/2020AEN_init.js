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
            "display_year": "2020AEN",
            "summary": "<p>The 2020 election sees Pete Buttigieg, the Mayor of South Bend, Indiana face off against incumbent President Donald J. Trump. This election is looking to be one of the most important ones in American history as the COVID-19 pandemic is rapidly spreading through America. Will Trump and his bold agenda be allowed another term in the White House or will a young ambitious mayor from Indiana dethrone him? Well that's to be decided. Trump's already said that \"Alfred E. Neuman\" as he calls him cannot become President of the United States. It's a long time until November, we'll see how this cycle plays out, good luck!</p>\n",
            "image_url": "https://media.cnn.com/api/v1/images/stellar/prod/190517143048-buttigieg-trump-split.jpg?q=w_1600,h_900,x_0,y_0,c_fill",
            "winning_electoral_vote_number": 270,
            "advisor_url": "https://i.imgur.com/QEyZ8qy.png",
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
        "display_year": "2020AEN"
    }
]

campaignTrail_temp.credits = "__wastaken, music player by DecstarG, ALL AI  USAGE IN THIS MOD HAS BEEN REMOVED"

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 201,
        "fields": {
            "first_name": "Pete",
            "last_name": "Buttigieg",
            "election": 20,
            "party": "Democrat",
            "state": "Indiana",
            "priority": 1,
            "description": "<em>We can't look for greatness in the past.</em>\n\n<p>The mayor of South Bend Indiana, Pete's standing in the polls quickly started to increase after an endorsement from former vice president Joe Biden who dropped out of the race after a disasterous debate performance tanked his poll numbers. Soon the primary  was down to two canidates, Bernie and Pete, the South Bend Mayor eventually won as Sanders suspended his campaign. But buckle up you'll still have to navigate a relatively hostile electorate, Trump's already started calling you nicknames, but maybe you can do it, maybe you can become the country's first openly gay president! I believe in you Neuma- sorry i meant Butiegsh... excuse me, i believe in you Mayor Pete!",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://i.imgur.com/vUN65iQ.png",
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
        "pk": 209,
        "fields": {
            "first_name": "Susan",
            "last_name": "Rice",
            "election": 20,
            "party": "Democrat",
            "state": "Washington D.C",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://i.imgur.com/9WyzuLM.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "<p><em>I spend every day up at the United Nations where I have to interact with 192 other countries. I know how well the United States is viewed.</em>\n<p>Rice is a former UN Ambassador who has immense experience when it comes to foreign policy, she'll help eliminate so of the concern regarding your foreign policy experience and also brings diversity to the ticket.  During her tenure at the United Nations, Rice championed a human rights and anti-poverty agenda, elevated climate change and women's rights as global priorities, and was recognized for her staunch defense of Israel at the Security Council. \nHer only weakness is that she has never ran for elected office, but more than that she checks all the boxes which is why you picked her as your running mate.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 200,
        "fields": {
            "first_name": "Donald",
            "last_name": "Trump",
            "election": 20,
            "party": "Republican",
            "state": "Florida",
            "priority": 1,
            "description": "My dude you surely have something better to do with your day than looking at the code for this mod.",
            "color_hex": "#ff0000",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://www.newcampaigntrail.com/static/images/donald-trump-2020.jpg",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 204,
        "fields": {
            "first_name": "Mike",
            "last_name": "Pence",
            "election": 20,
            "party": "Republican",
            "state": "Indiana",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#ff0000",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://www.newcampaigntrail.com/static/images/mike-pence-2020.jpg",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "'",
            "candidate_score": 1,
            "running_mate": true
        }
    }
]

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 92850,
        "fields": {
            "candidate": 201,
            "running_mate": 209
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 99239,
        "fields": {
            "candidate": 200,
            "running_mate": 204
        }
    }
]

campaignTrail_temp.opponents_default_json = [
    {
        "election": 20,
        "candidates": [
            201,
            200
        ]
    }
]

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 20,
        "candidates": [
            201,
            200
        ]
    }
]

jet_data = {
    "headerColor": "#c7a343",
    "windowColor": "#00d5ff",
    "containerColor": "#adf1ff",
    "innerWindowColor": "#ffffff",
    "bannerImageUrl": "https://i.imgur.com/gJdRlGK.png",
    "backgroundImageUrl": "https://www.hyperakt.com/_next/image?url=https%3A%2F%2Fwww.hyperakt.com%2Fassets%2Fimages%2Fpete-2020%2FPeteStage2.jpg&w=3840&q=75",
    "endingTextColor": "#000000",
    "customQuote": "For President!",
    "gameTitle": "Mayor Pete Buttigieg"
}

//#startcode


corrr = '\n              <h2>Mayor Pete Buttigieg</h2><font id="wittyquote" size="4" color="white"><em>For President!</em></font>\n            ';


nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#c7a343";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#00d5ff";

document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$(".container")[0].style.backgroundColor = "#adf1ff";

document.getElementById("header").src = "https://i.imgur.com/gJdRlGK.png";

document.body.background = "https://www.hyperakt.com/_next/image?url=https%3A%2F%2Fwww.hyperakt.com%2Fassets%2Fimages%2Fpete-2020%2FPeteStage2.jpg&w=3840&q=75";

document.head.innerHTML += "<style>#results_container {color:#000000;} .inner_window_w_desc {background-color:#ffffff!important;}</style>";

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

    timeTracker = document.createElement("div-timetrack");
    timeTracker.style = `
      text-align:left;
      border-style:solid;
      border-width:3px;
      height:150px;
      width:200px;
      background-color:#979595;
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
  trackSel = document.createElement("div-gusic");
  trackSel.id = "trackSelParent"
  let z = `<br><br><br><br><br><br><br><br><br><br><div id='trackSel' style="text-align:left;border-style:solid;border-width:3px;overflow-y: scroll;overflow-x: hidden;height:200px; width:400px;background-color:#979595;float:right;">`
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

soundtracks = {
  0: {
    name: "Buttijams",
    tracklist: [
      {
        "name": "High Hopes - Panic! At the Disco",
        "url": "https://audio.jukehost.co.uk/OVwfY3X6t5NiId4bVCsjNwM0IBU9k1eY"
      },
      {
        "name": "God's Not Dead - The Newsboys",
        "url": "https://audio.jukehost.co.uk/23S4b4Azao74gpRpatqvL7qy8PUe83b3"
      },
      {
        "name": "Born for This - The Score",
        "url": "https://audio.jukehost.co.uk/7ZRVNvKKsFWP6MTZ7uW13YyhNB6Uj64G"
      },
      {
        "name": "Cut To The Feeling - Carly Rae Jepsen",
        "url": "https://audio.jukehost.co.uk/8lTNyfJlCQyBk42A5VaRX7oYkIiEPr9j"
      },
      {
        "name": "Pete Buttigieg, Unofficial Campaign Song - Mark Contorno",
        "url": "https://audio.jukehost.co.uk/4rYZALKxOZmOnwsDU5A5g59CKrGVzQ4U"
      }
    ]
  }
}

// Set up new music player

newMusicPlayer()
//#endcode