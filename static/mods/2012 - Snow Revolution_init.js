campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 20,
        "fields": {
            "year": 2012,
            "display_year": "2012 - Снежная Революция",
            "summary": "The “Tandemocracy” has shattered. What was supposed to be a scripted job-swap between President Dmitry Medvedev and Prime Minister Vladimir Putin has devolved into an all-out political duel.  In a shock move, Medvedev has refused to step aside, instead embracing the protesters' calls for reform.  Over the past four years, Russia has faced financial crisis and war in Georgia, and now a “Snow Revolution” in the streets.\n<br>\n<br>\nRussia now stands at a crossroads: a return to the \"Vertical of Power\" under Putin, or a leap into a messy, uncertain \"New Thaw\" under Medvedev.\n<br>\n<br>\nHow will their election play out?  Will Medvedev hold on or will we see the return of Putin?",
            "image_url": "https://cdn.theatlantic.com/media/mt/international/Dmed%20banner.jpg",
            "winning_electoral_vote_number": 0,
            "advisor_url": "https://president.uz/uploads/052e5329-95b0-f7bd-4f78-cce97f968ba1_lists_slider_5535.jpg",
            "recommended_reading": "<ul>\n<li><a href=https://www.mprnews.org/story/2012/03/04/putin-russia-elections>Putin claims victory in Russia's presidential vote</a></li>\n<li><a href=https://www.theguardian.com/world/2012/mar/04/russian-election-accusations-vote-fixing>Putin makes his presence felt as protesters take to Moscow's streets</a></li>\n<li><a href=https://www.theguardian.com/world/2012/mar/05/putin-protesters-moscow>Russia’s presidential election marked by unequal campaign conditions, active citizens’ engagement, international observers say</a></li>\n<li><a href=https://odihr.osce.org/odihr/elections/88661>Questions on the March 4 Russian Presidential Election</a></li>\n</ul>",
            "site_description": "<p>The “Tandemocracy” has shattered. What was supposed to be a scripted job-swap between President Dmitry Medvedev and Prime Minister Vladimir Putin has devolved into an all-out political duel. In a shock move, Medvedev has refused to step aside, instead embracing the protesters' calls for reform. Over the past four years, Russia has faced financial crisis and war in Georgia, and now a “Snow Revolution” in the streets.</p><p>Russia now stands at a crossroads: a return to the \"Vertical of Power\" under Putin, or a leap into a messy, uncertain \"New Thaw\" under Medvedev.</p><p>How will their election play out?  Will Medvedev hold on or will we see the return of Putin?</p>",
            "has_visits": 1,
            "no_electoral_majority_image": "../static/images/2012-no-majority.jpg"
        }
    }
]

campaignTrail_temp.temp_election_list = [
    {
        "id": 20,
        "year": 2012,
        "is_premium": 0,
        "display_year": "2012 - Снежная Революция"
    }
]

campaignTrail_temp.credits = "u/GlobalMuffin"

// necessary so that the right election files are loaded -SM
setInterval(() => {
    const electionSelect = document.getElementById("election_id");
    if (electionSelect) {
        if (electionSelect.value === "20") {
            campaignTrail_temp.code2_id = "2012 - Snow Revolution";
        }
    }
}, 100);

campaignTrail_temp.modBoxTheme = {
    "header_color": "#1b1e23",
    "header_text_color": "#ffffff",
    "header_text_shadow": "1px 1px 2px rgba(0, 0, 0, 0.7)",
    "description_background_color": "#f8f8f8",
    "description_text_color": "#000000",
    "main_color": "#abb2bf",
    "secondary_color": "#2c313c",
    "secondary_hover_color": "#4c5059",
    "scrollbar_color": "#2c313c #abb2bf",
    "scrollbar_width": "auto",
    "image_border": "4px solid #111827",
    "ui_text_color": "#ffffff"
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
            "question_count": 26,
            "default_map_color_hex": "#C9C9C9",
            "no_state_map_color_hex": "#999999"
        }
    }
]

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 1001,
        "fields": {
            "first_name": "Dmitry",
            "last_name": "Medvedev",
            "election": 20,
            "party": "Independent",
            "state": "Saint Petersburg",
            "priority": 1,
            "description": "<p>We all know what this election was going to be: a disgraceful shame.  But with protests in the streets and a split state apparatus, President Medvedev has found an opportunity no one else may see again: ripping the rug from under Putin.  Medvedev is betting that a liberalized Russia will take their chance on him—all while praying he can outmaneuver the very security services he once commanded.</p>",
            "color_hex": "#969696",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://images.openai.com/static-rsc-4/CWYdlOTwu0HtPHF0kfv2F85QmVc_4guFUEHnWykzSzMUz-w4-K6Tj5M-yYa0QiWR19CEQ9QsXuc4PWUsgGWBI-uVAgUvYhjh7tgs3L1nbMivafem9BIujiDhT4xOA7-evnuqO5izRviFzOf2e9Rk5yN2sV9-8xcQpQhZ9GAqWr1rbAdRThhW_gso4CiqBzTA?purpose=fullsize",
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
        "pk": 1002,
        "fields": {
            "first_name": "Arkady",
            "last_name": "Dvorkovich",
            "election": 20,
            "party": "United Russia",
            "state": "Moscow",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://www.thechessdrum.net/tournaments/Olympiad2018/photos/Arkady_Dvorkovich.jpg",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "<p>Medvedev’s most loyal economic advisor and a leading voice for the \"Liberal\" wing within the government. Dvorkovich has long argued that Russia’s future lies in technology, global markets, and the rule of law. \n<br>\n<br>\nBy naming Dvorkovich as his PM, Medvedev is doubling down on a technocratic, pro-Western vision for Russia, aiming to win over the urban middle class and international investors.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 2001,
        "fields": {
            "first_name": "Vladimir",
            "last_name": "Putin",
            "election": 20,
            "party": "United Russia",
            "state": "Saint Petersburg",
            "priority": 2,
            "description": "<p>For twelve years, Vladimir Putin has been the undisputed architect of Russian stability.  But now, the apprentice has rebelled against the master.  What was originally going to be his “Return of the King” moment, must now become his “Empire Strikes Back.”  To his supporters, he is the only man capable of protecting the state from chaos and foreign interference. To his detractors, he is an autocrat clinging to power. Seeing Medvedev’s \"betrayal\" as a threat to the very foundation of the Russian Federation, Putin is running to reclaim the Presidency and restore the \"Vertical of Power\" by any means necessary.</p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://images.openai.com/static-rsc-4/uOuNBHfMl1ejrZgqa6XUqOg2Ge221TchaevEK9dHohcSzf3kJTX2iDX__iuxNiRuYfcqUMjXKrGF9pFnQgOVMHr5jWRIb55J0uwoRo7eGdCLyzOxvvNRma0eQNWNhXGebXip0XUJE003bvul5URaPRe7OSiwkBDK6vWIf7ByDNIat1khRfymZPMknuq8MpQc?purpose=fullsize",
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
        "pk": 2002,
        "fields": {
            "first_name": "Igor",
            "last_name": "Sechin",
            "election": 20,
            "party": "Independent",
            "state": "Saint Petersburg",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#969696",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Igor_Sechin1_%28cropped%29.jpg/500px-Igor_Sechin1_%28cropped%29.jpg",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "<p>The \"Darth Vader\" of the Kremlin and leader of the Siloviki faction. As Putin's promised Prime Minister, Sechin represents the hardline integration of state security and the energy sector. \n<br>\n<br>\nHis presence on the ticket signals a total crackdown on the dissent in the streets and a definitive pivot away from the “modernization” influence in the Kremlin. \nIf Putin is the face of the state, Sechin is its iron fist.</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 8001,
        "fields": {
            "first_name": "Gennady",
            "last_name": "Zyuganov",
            "election": 20,
            "party": "CPRF",
            "state": "Oryol Oblast",
            "priority": 3,
            "description": "<p>Leader of the Communist Party of the Russian Federation.</p>",
            "color_hex": "#CC0000",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "",
            "electoral_victory_message": "",
            "electoral_loss_message": "",
            "no_electoral_majority_message": "",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 9001,
        "fields": {
            "first_name": "Vladimir",
            "last_name": "Zhirinovsky",
            "election": 20,
            "party": "LDPR",
            "state": "Moscow",
            "priority": 4,
            "description": "<p>Leader of the Liberal Democratic Party of Russia.</p>",
            "color_hex": "#0099CC",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "",
            "electoral_victory_message": "",
            "electoral_loss_message": "",
            "no_electoral_majority_message": "",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    }
]

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 109261,
        "fields": {
            "candidate": 1001,
            "running_mate": 1002
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 143418,
        "fields": {
            "candidate": 2001,
            "running_mate": 2002
        }
    }
]

campaignTrail_temp.opponents_default_json = [
    {
        "election": 20,
        "candidates": [
            1001,
            2001,
            8001,
            9001
        ]
    }
]

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 20,
        "candidates": [
            1001,
            2001,
            8001,
            9001
        ]
    }
]


jet_data = {
    "headerColor": "#1b1e23",
    "windowColor": "#2c313c",
    "containerColor": "#abb2bf",
    "innerWindowColor": "#3e4451",
    "bannerImageUrl": "https://free-russia.com/wp-content/uploads/2023/05/2011-2013.jpg",
    "backgroundImageUrl": "https://img.freepik.com/free-vector/unfocussed-winter-background-with-snowflakes_1393-271.jpg?semt=ais_incoming&w=740&q=80",
    "endingTextColor": "#000000",
    "customQuote": "",
    "gameTitle": "СНЕЖНАЯ РЕВОЛЮЦИЯ"
}

//#startcode


corrr = '\n              <h2>СНЕЖНАЯ РЕВОЛЮЦИЯ</h2>\n            ';


nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#1b1e23";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#2c313c";

document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$(".container")[0].style.backgroundColor = "#abb2bf";

document.getElementById("header").src = "https://free-russia.com/wp-content/uploads/2023/05/2011-2013.jpg";

document.body.background = "https://img.freepik.com/free-vector/unfocussed-winter-background-with-snowflakes_1393-271.jpg?semt=ais_incoming&w=740&q=80";

document.head.innerHTML += "<style>#results_container {color:#FFFFFF;} .inner_window_w_desc {background-color:#3e4451!important;}</style>";

//#endcode

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
    name: "Snow Revolution Soundtrack",
    tracklist: [
      {
        "name": "Swamp Electro (For Young Ladies)",
        "url": "https://audio.jukehost.co.uk/RZtrW5M2iml1kqDcKWTKQ0pyIjfcj5CF"
      },
      {
        "name": "Зима",
        "url": "https://audio.jukehost.co.uk/4iaFFJjfrUL9v0t3kYlWqUGgDXMNhJKl"
      },
      {
        "name": "Kamaz",
        "url": "https://audio.jukehost.co.uk/oTa9JSUf2QWGcu7DwDTWZbrX4ad8XsxW"
      },
    ]
  },        
}

// Set up new music player

newMusicPlayer()

RecReading=true

HistHexcolour=["#0000FF","#969696","#CC0000","#0099CC"];
HistName=[" Vladimir Putin"," Dmitry Medvedev"," Gennady Zyuganov"," Vladimir Zhirinovsky"];
HistEV=[59,24,0,0];
HistPV=["37,969,214","33,381,450","0","0"];
HistPVP=["53.2%","46.8%","0%","0%"];

//#endcode


