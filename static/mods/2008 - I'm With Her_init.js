musicMode = () => {
    songsPlayed = 0;
    // Initialise custom music
  
    $("#music_player")[0].children[0].style.display = "none"
    $("#music_player")[0].children[1].style.display = "none"
  
    document.getElementById("modLoadReveal").style.display = "none"
    document.getElementById("modloaddiv").style.display = "none"
  
    musicBox = document.getElementById("music_player")
    musicBox.style.display = ""
  
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
          z += `<b><select id='selectSoundtrack'><option value='` + soundtracks[e.selectedSoundtrack].name + `'>` + soundtracks[e.selectedSoundtrack].name + "</option>"
          for (i in soundtracks) {
              if (soundtracks[e.selectedSoundtrack] != soundtracks[i]) {
                  z += `<option value='` + soundtracks[i].name + `'>` + soundtracks[i].name + `</option>`
              }
          }
          z += `</select></b><br><br>`
              // <label><input type="radio" name="option" value="option1">Option 1</label><br>
          for (i in soundtracks[e.selectedSoundtrack].tracklist) {
              let a = soundtracks[e.selectedSoundtrack].tracklist[i]
              let b = `<label><input class="trackSelector" type="radio" name="trackSelector" value="` + i + `">` + a.name + `</label><br>`
              z += b
          }
          z += "</div><br><br>"
          trackSel.innerHTML = z
    
          // select correct song
    
          musicBox.appendChild(trackSel);
          Array.from(document.getElementById("trackSel").children).filter(f => {
              return f.tagName == "LABEL"
          }).map(f => f.children[0])[0].checked = true
    
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
              let newSel = clamp(selected + 1, soundtracks[e.selectedSoundtrack].tracklist.length - 1, 0)
              let buttons = Array.from(document.getElementById("trackSel").children).filter(f => {
                      return f.tagName == "LABEL"
                  }).map(f => f.children[0])
                  //let selectedIndex = buttons.map(f=>f.children[0]).map(f=>f.checked)
              buttons[newSel].click()
              songsPlayed++; // Increment the songs played counter
        
           
          }
            
          for (w = 0; w < 7; w++) {
              document.getElementById("trackSelParent").appendChild(document.createElement("br"))
          }
    
          generateTime();
      }
    
      clamp = function(a, max, min, overflow = true) {
          if (overflow) {
              return a > max ? min : a < min ? max : a;
          }
          return a > max ? max : a < min ? min : a;
      }
    
   
      // Track list
    
      var soundtracks = {
          0: {
              name: "Hillary's iPod",
    tracklist: [
      {
        "name": "LEASE - Takeshi Abo",
        "url": "https://audio.jukehost.co.uk/awwcC7DsZxOonCXifi6R1qqbQspnopPc"
      },
      {
        "name": "American Boy - Estelle Feat. Kanye West",
        "url": "https://audio.jukehost.co.uk/wwYsZnd67DPST901g6VCA12Q6EWSABup"
      },
      {
        "name": "I Kissed A Girl - Katy Perry",
        "url": "https://audio.jukehost.co.uk/BEFpKx98BkRM5sMYUUssChxmw39W91az"
      },
      {
        "name": "Umbrella - Rihanna Feat. Jay-Z",
        "url": "https://audio.jukehost.co.uk/aayuwtwtkBvPXaHX7UbX1xfP2WJOIyCz"
      },
      {
        "name": "Stronger - Kanye West",
        "url": "https://audio.jukehost.co.uk/cAbhPrtNhnQ3sG9gWhtbxAKZvuLfhYvj"
      },
      {
        "name": "Paper Plane - M.I.A.",
        "url": "https://audio.jukehost.co.uk/8zzdOZ5461hb1Bz63bfPJe8j9Lxx6ejq"
      },
      {
        "name": "Sweet Escpae - Gwen Stefani Feat. Akon",
        "url": "https://audio.jukehost.co.uk/YIsG5LBZZQdcqTJ6r1uhoLIJsLJgU0yA"
              }
            ]
         },
  
          
          
      }
  
    
      // Set up new music player
    
      newMusicPlayer()
    
  
  }
  
    $("#game_start").click((event) => {
      event.preventDefault();
      $("#election_id_button").click((event) => {
          musicMode()
  
          setInterval(changeFontColour, 200)
    
      })
    })
  
  
  e = campaignTrail_temp;


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
            "question_count": 27,
            "default_map_color_hex": "#C9C9C9",
            "no_state_map_color_hex": "#999999"
        }
    }
]

campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 3,
        "fields": {
            "year": 2012,
            "summary": "<p>As 2008 approaches it seems evermore likely the Clintons will be back in the White House.</p> <ul><li>Hillary Clinton is a former first lady and the current junior senator from New York. She is running on a theme of stability and nostalgia for the Clinton years.</li><li>John McCain is a maverick in his own party and will hope to wrangle the future of America away from Clinton.</li></ul>\n\nWith the Iraq War turning sour and with the economies of the world plummeting Americans are looking for a return to the stability of the 90s. ",
            "image_url": "https://i.imgur.com/vH7fVHk.png",
            "winning_electoral_vote_number": 270,
            "advisor_url": "https://i.imgur.com/R70tLY9.png",
            "recommended_reading": "<div style='overflow-y:scroll;height:320px;'><h3 style='margin-top:</h3> 1.5em;'><h2>Canon Results</h2><p><img src='https://i.imgur.com/cqRxSjI.png' width='675px'><p>Hey all, thanks for playing my 1st mod! I had it around for a while but finally got the motivation to release it. Hope y’all enjoyed and have a good one!<br> <i>2008 I’m With Her!</i></img></div>",
            "has_visits": 1,
            "no_electoral_majority_image": "https://www.jetsimon.com/public/static/images/2012-no-majority.jpg",
            "creator": "Dan Bryan",
            "display_year": "2008"
        }
    }
]

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 200,
        "fields": {
            "first_name": "Hillary",
            "last_name": "Clinton",
            "election": 3,
            "party": "Democrat",
            "state": "New York",
            "priority": 1,
            "description": "<i><b> 'I’m in. And I’m in to win.'</i> </b>\n<p>Hillary Clinton entered the primaries as the frontrunner and came out on top, having defeated Obama and Edwards. She has held office as a senator from New York for the past seven years as well as being a former first lady. If she wins this campaign she will become the first female president in the nations history.</p><p>Clinton has been described as a Centrist Democrat closely aligning with her husband's Third Way Democrats. To win this campaign she has to make amends with the progressives she battled in the primaries while keeping her moderate image to win over a big tent coalition. Clinton starts with a lead, but anything can happen...</p>",
            "color_hex": "#3b4e9b",
            "secondary_color_hex": "#90C0FF",
		"recommended_reading": "Thanks for playing my 1st mod. <br><img src='https://i.imgur.com/2imYIcj.png' width='615px'></img> <br>Here are the canon results",
            "is_active": 1,
            "image_url": "https://i.imgur.com/ukAc3GO.png",
            "electoral_victory_message": "<h3>CLINTON DEFEATS MCCAIN! IN A NAILBITER! THE FIRST FEMALE TO BECOME PRESIDENT!</h3><p>That is what the headlines say. In spite of a hard-fought challenge, you have won the Presidency.</p><p>You have become the first female president in American history. It was closer then most expected but nevertheless you still came out on top.</p>\n<p>Because of this close victory you may not be able to pass your more liberal legislation, however you have been known to work across the aisle to get deals done.</p>\n<p>Anyways get ready to move into the white house and hopefully you'll win again in another four years.</p>",
            "electoral_loss_message": "<h3>MCCAIN DEFEATS CLINTON! 12 YEARS OF REPUBLICANS!</h3><p>That's what the headlines read. Wow... What went wrong Hillary, maybe America wasn't ready for a female president? Maye you handled the recession wrong? Was it the Obama wing?\n</p>Well anyway, your presidential prospects are probably over, no one likes a loser. Obama looks set to win the next primaries and the election in a landslide.</p>\n</p>Get ready to make a concession call that you weren't expected to make...</p>",
            "no_electoral_majority_message": "<h3>ELECTORAL COLLEGE DEADLOCKED!.</h3><p>No candidate achieved a majority of the electoral votes, marking the first time this has happened since 1824. Fortunately for you, the majority of U.S. states have Democrat controlled congressional delegations, and they will cast their votes for you.</p><p>Given the incredibly close nature of this many Republicans, and even some Democrats, may be unwilling to work with you. Welp anyway, Get ready for an interesting four years... </p>",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 345,
        "fields": {
            "first_name": "Evan",
            "last_name": "Bayh",
            "election": 3,
            "party": "Democrat",
            "state": "Indiana",
            "priority": 7,
            "description": "<p>V.P. </p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/q3Wryzw.png",
            "electoral_victory_message": "n/a",
            "electoral_loss_message": "n/a",
            "no_electoral_majority_message": "n/a",
            "description_as_running_mate": "<i><b> 'I’d say there’s only one reason to go into public life and that’s to help people.'</i> </b>\n<p>Evan Bayh is the current Junior Senator from Indiana and the son of famed politician Birch Bayh. He also served as the governor of Indiana for eight years. Throughout his years in politics he has garnered a reputation as a moderate to conservative Democrat. </p><p>He is loved by the establishment and hawkish members of the party. He co-sponsored the Iraq War resolution which has quickly turned into a liability. His selection would further solidify your moderate image and his connection to the 90s may bring that nostalgic feeling back to the limelight.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 332,
        "fields": {
            "first_name": "Tim",
            "last_name": "Kaine",
            "election": 3,
            "party": "Democrat",
            "state": "Virgina",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://i.imgur.com/sN6JUv4.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "<b> 'NOT PLAYABLE'</b> <i><b> 'If we put our faith into action, we can move mountains.'</i> </b>\n\n<p>\nTim Kaine is the current governor of Virginia, a state shifting to the Democratic collumn. He is also known for his past as a catholic missionary and would help to court the religious voters that your husband won over in his two landslides. \n</p><p> He offers a moderate view to an already moderate ticket and would offer little to the left wing of the party. Kaine is also fluent in both Spanish and English and could help in winning over Hispanics. Picking him would help you in Virginia and North Carolina, two swing states, while also bringing back the religious voters of the 90s.\n",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 201,
        "fields": {
            "first_name": "John",
            "last_name": "McCain",
            "election": 3,
            "party": "Republican",
            "state": "Arizona",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#c02a2a",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://i.imgur.com/0ZUKVqP.png",
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
        "pk": 202,
        "fields": {
            "first_name": " ",
            "last_name": "Barr/Others",
            "election": 3,
            "party": "N/A",
            "state": "N/A",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#a600ff",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/candidateexample.png",
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
        "pk": 203,
        "fields": {
            "first_name": "Ralph",
            "last_name": "Nader",
            "election": 3,
            "party": "Green",
            "state": "Connecticut",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#18cd24",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/candidateexample.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    }
]

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 162488,
        "fields": {
            "candidate": 200,
            "running_mate": 345
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 100199,
        "fields": {
            "candidate": 200,
            "running_mate": 332
        }
    }
]

campaignTrail_temp.credits = "<button onclick='credits()'>Many People</button>"

  credits = function() {
    c = ["this mod was made by Bluep10 with help from epicisman7770, borrowed code from red, 2000N, 1960 Happy Warrior and 1968 romney."]
    text = "CREDITS:\n\n"
    for (i in c) {
        text += c[i] + "\n"
    }
    alert(text)
  }

campaignTrail_temp.opponents_default_json = [
    {
        "election": 3,
        "candidates": [
            200,
            201,
            202,
            203
        ]
    }
]

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 3,
        "candidates": [
            200,
            201,
            202,
            203
        ]
    }
]

campaignTrail_temp.temp_election_list = [
    {
        "id": 3,
        "year": 2012,
        "is_premium": 0,
        "display_year": "2008 - I'm With Her"
    }
]

jet_data = {
    "headerColor": "#7bb6f1",
    "windowColor": "#5492d9",
    "containerColor": "#5492d9",
    "innerWindowColor": "#f8f8f8",
    "bannerImageUrl": "https://i.imgur.com/OgBuiTx.png",
    "backgroundImageUrl": "https://i.imgur.com/VJJwGpT.jpeg",
    "endingTextColor": "#000000",
    "customQuote": "",
    "gameTitle": "THE CLINTON TRAIL"
}



//#startcode


corrr = '\n              <h2>THE CLINTON TRAIL</h2>\n            ';


nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#7bb6f1";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#5492d9";

document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$("#game_window")[0].style.borderColor = "#3773b3"

$(".container")[0].style.backgroundColor = "#5492d9";

document.getElementById("header").src = "https://i.imgur.com/OgBuiTx.png";

document.body.background = "https://i.imgur.com/VJJwGpT.jpeg";

document.body.style.backgroundSize = "100% auto";

document.head.innerHTML += "<style>#results_container {color:#000000;} .inner_window_w_desc {background-color:#f8f8f8!important;}</style>";

HistHexcolour=["#3b4e9b","#c02a2a","#18cd24","#a600ff"];
HistName=["Hillary Clinton","John McCain","Ralph Nader","Barr/Others"];
        HistEV=[398,140,0,0];
        HistPV=["71,213,173","57,234,780","2,643,812","260,119"];
        HistPVP=["54.2%","43.6%","2.0%","0.2%"];
RecReading=true

campaignTrail_temp.modBoxTheme = {
    "header_color" : "#2b3e6a",
    "header_text_color" : "#ffffff",
    "description_text_color" : "#FFFFFF",
    "description_background_color" : "#4b67aa",
    "main_color" : "#2a406f",
    "secondary_color" : "#172340",
    "ui_text_color": "#ffffff"

}

//#endcode




