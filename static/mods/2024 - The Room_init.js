
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
]

campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 20,
        "fields": {
            "year": 2024,
            "summary": " When Tommy Wisseau started presidential campaign, no one thought that he could decide the outcome of the US presidential election.\nEveryone thought it was a joke. Neither he nor his running mate, Greg Sestero, have any political experience. They are also  famous for acting in “The Room” movie, which, according to many, is the worst movie in the history of cinema.<p> Over time, however, Tommy started gaining a lot of support. His authenticity and sincere love for America were a fresh breath of air in a politics for years dominated by Republicans and Democrats. It became clear that Tommy's actions could change the course of history. Tommy faces many obstacles - his strange accent, lack of experience and controversy over his birthplace. However, he will not relent until he makes the America a better place to live when a lot of people love each other.",
            "image_url": "https://gcdnb.pbrd.co/images/IWXtuYXbvvyp.jpg?o=1",
            "winning_electoral_vote_number": 270,
            "advisor_url": "https://i.ytimg.com/vi/205HoJK51C8/hqdefault.jpg",
            "recommended_reading": "\n",
            "has_visits": 1,
            "no_electoral_majority_image": "https://gcdnb.pbrd.co/images/CWMUAsfnwLJ7.jpg?o=1",
            "creator": "Denny",
            "display_year": "2024"
        }
    }
]

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 200,
        "fields": {
            "first_name": "Donald",
            "last_name": "Trump",
            "election": 20,
            "party": "Republican",
            "state": "New York",
            "priority": 1,
            "description": "<p>Donald Trump has shocked the political establishment by winning the Republican nomination in a divisive contest. He has taken a hard line on immigration and tax cuts, along with unorthodox positions on many other issues. He must unite his own party while finding some way to peel off potential Clinton voters -- or to blunt their enthusiasm for Clinton enough that they stay home. Will he continue the strategy of relentless attack that served him so well in the primary season?</p>",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://gcdnb.pbrd.co/images/Bsjt2kziGBmW.jpg?o=1",
            "electoral_victory_message": "<h3>Congratulations! You have won the 2016 election.</h3><p>In spite of a hard-fought challenge from Hillary Clinton, you have shocked the world with your election victory.</p><p>On the political front, you have the bully pulpit in your favor, but support in Congress in uncertain. Will you govern as a more traditional conservative, or will you make a break from orthodoxy?</p>",
            "electoral_loss_message": "<h3>Sorry! You have lost the 2016 election.</h3><p>Many of your supporters are despondent that you have faltered to the likes of Hillary Clinton. Republicans in general believe this was a very winnable election, and are enraged that you came in to blow it. Luckily, there are any number of ways for you to take advantage of your newfound exposure. One rumor even has you founding a television station to profit from the aggrieved sensibilities of your followers. The future is in your hands.</p>",
            "no_electoral_majority_message": "<h3>Wow! You have pulled out 2016 election.</h3><p>No candidate secured a majority in the Electoral College. However, the Republicans won a majority in Congress and will elevate you to the Presidency. Time will tell how things go in that regard. Any mutual affection between you and Congress is predicted to be short-lived, but you've pulled off a number of surprises to get this far.</p>",
            "description_as_running_mate": "'",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 201,
        "fields": {
            "first_name": "Kamala",
            "last_name": "Harris",
            "election": 20,
            "party": "Democrat",
            "state": "California",
            "priority": 2,
            "description": "<p>As expected, Hillary Clinton has carried her party's nomination, and now faces an unexpected opponent in Donald Trump. She was traditionally known as a mainstream Democrat, but tacked significantly to the left during the primary campaign. Clinton enters the general election in a strong position, but she'll be under relentless attack on a number of fronts. Can she make the case that she truly in touch with the American people -- or that Trump would be an even worse option?</p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://gcdnb.pbrd.co/images/iZlRd6NqJeLA.jpg?o=1",
            "electoral_victory_message": "<h3>Congratulations! You have won the 2016 election.</h3><p>In spite of a hard-fought challenge from Donald Trump, you have become the first woman elected to serve as President.</p><p>On the political front, it is unclear how much of your agenda you will be able to push forward with the current Congress. Hopefully your victory has helped Democrats further down the ballot. Start packing and prepare to move back into the White House!</p>",
            "electoral_loss_message": "<h3>Sorry! You have lost the 2016 election.</h3><p>Many of your supporters are despondent that you have faltered to the likes of Donald Trump. Many in the left wing of the party are furious that you pushed their candidate aside, only to lose. Time will tell how Trump operates as President. As for you, a long and sometimes ambiguous political career seems to be coming to its end.</p>",
            "no_electoral_majority_message": "<h3>Sorry! You have lost the 2016 election.</h3><p>No candidate secured a majority in the Electoral College. However, the Republicans won a majority in Congress and will elevate Trump to the Presidency. Time will tell how things go in that regard. As for you, a long and sometimes ambiguous political career seems to be coming to its end.</p>",
            "description_as_running_mate": "'",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 202,
        "fields": {
            "first_name": "Tommy",
            "last_name": "Wisseau",
            "election": 20,
            "party": "Independent",
            "state": "Louisiana",
            "priority": 3,
            "description": "Nobody loves America more than Tommy Wisseau.  Tommy is a true American.<p>Raised in Louisiana, from where he moved to San Francisco where he worked as a street vendor selling toys to tourists. Then, thanks to his hard work, he became rich.<p>As a result, he was able to realize his dream - to become an actor. Most people only know Tommy from the movie “The Room.” But Tommy is much more than “The Room.” Tommy is a walking example of the American Dream.<p>Just as he once fulfilled his dream of being an actor, he is now ready to become president.",
            "color_hex": "#FFFF00",
            "secondary_color_hex": "#FFFFC0",
            "is_active": 1,
            "image_url": "https://gcdnb.pbrd.co/images/wK1PmNpQTo4m.jpg?o=1",
            "electoral_victory_message": "<h3> You got the results of the elections back - You definitely became 47th president of the United States!</h3><p>Unbelievable. Simply unbelievable. You became president.  No one expected it. Despite the accusations, despite the attacks from both parties, the people decided to elect you. The day after the election, Kamala Harris called to congratulate you on your win. Donald Trump accuses you of “stealing the election,” but it looks like his political career is over after his defeat. What now? Greg says you have to try to work with Congress. Maybe you will start your own party?  But for now don't plan too much, it may not come out right. Right now Americans love you. You are their favourite president!",
            "electoral_loss_message": "<h3> \"Haughhhh-augh! Why, America, why, why?! Why is this happening to me? Why?! Everybody betray me! I fed up with this world!\"</h3><p> Unfortunately, you lose the elections. Enthusiasm was not enough. You gave it your all, but  America decided. You lost perhaps because of the controversy over your birthplace, perhaps because of your inexperience.  </p><p> What now? Maybe you will start your own party? You can also run again in 2028. However, you can be proud of yourself. For a long time, no one has threatened two-party system as much as you have. </p>",
            "no_electoral_majority_message": "<h3> \"- Greg, when will election results be called? - They are  coming. They will be here in a few minutes. - When, Greg?! - Just give them five minutes. Just give them five, okay?\"</h3><p> It turned out that no one got 270 electoral votes. It looks like the president and vice president will be elected by Congress and it's very doubtful that the Republican majority will elect you.</p><p> What now? Maybe you will start your own party? You have support of millions of people! You can also run again in 2028. However, you can be really proud of yourself. Last situation like that? In 1837! Maybe it is beginning of an end of two-party system? </p>",
            "description_as_running_mate": "'",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 204,
        "fields": {
            "first_name": "J.D",
            "last_name": "Vance",
            "election": 20,
            "party": "Republican",
            "state": "Ohio",
            "priority": 5,
            "description": "'",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/static/images/mike-pence-2016.jpg",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>Mike Pence is a former Congressman and the current Governor of Indiana. He is a popular figure among social conservatives and would help assuage concern about Trump among party insiders. He would add executive experience to the ticket and make few mistakes on the campaign trail, but he could also undercut Trump's outsider credentials.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 209,
        "fields": {
            "first_name": "Tim",
            "last_name": "Walz",
            "election": 20,
            "party": "Democrat",
            "state": "Minnesota",
            "priority": 9,
            "description": "'",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/static/images/tim-kaine-2016.jpg",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "<p>Tim Kaine has served as a Governor and Senator from Virginia, and shares similar political views to Hillary Clinton. He is fluent in both Spanish and English.</p><p>A lot of people see Kaine as a safe, experienced pick. He has little to offer to the wing of the party that supported Bernie Sanders during the nomination fight.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 50000,
        "fields": {
            "first_name": "Greg",
            "last_name": "Sestero",
            "election": 20,
            "party": "Independent",
            "state": "California",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://gcdnb.pbrd.co/images/T5FgwVvLX35B.jpg?o=1",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "<p>Greg, like Tommy, lives in California. Greg, like Tommy, is known from the movie “The Room.” Greg, like Tommy, has no experience in politics.<p>Greg, however, has qualities that Tommy lacks. He has international experience - he has worked as a model in Italy and France. He has Italian-French roots, which could help Tommy. He is also more “serious,” making him the perfect running mate for Tommy. Greg Sestero no longer wants to be known as Mark from “The Room.” He wants to become the next vice president of the United States.<p>",
            "candidate_score": 1,
            "running_mate": true
        }
    }
]

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 155,
        "fields": {
            "candidate": 201,
            "running_mate": 209
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 150,
        "fields": {
            "candidate": 200,
            "running_mate": 204
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 115623,
        "fields": {
            "candidate": 202,
            "running_mate": 50000
        }
    }
]

campaignTrail_temp.credits = "Denny"

campaignTrail_temp.opponents_default_json = [
    {
        "election": 20,
        "candidates": [
            200,
            201,
            202
        ]
    }
]

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 20,
        "candidates": [
            200,
            201,
            202
        ]
    }
]

campaignTrail_temp.temp_election_list = [
    {
        "id": 20,
        "year": 2016,
        "is_premium": 0,
        "display_year": "2024"
    }
]

jet_data = {
    "headerColor": "#700016",
    "windowColor": "#BFE6FF",
    "containerColor": "#FFFFFF",
    "innerWindowColor": "#E8FBFF",
    "bannerImageUrl": "https://gcdnb.pbrd.co/images/Lh4o4Hw3f4yj.jpg?o=1",
    "backgroundImageUrl": "https://pbs.twimg.com/tweet_video_thumb/DrV20iDVAAErEH3.jpg",
    "endingTextColor": "#000000",
    "customQuote": "People are very strange these days."
}

//#startcode


corrr = '\n              <h2>THE CAMPAIGN TRAIL</h2><font id="wittyquote" size="4" color="white"><em>People are very strange these days.</em></font>\n            ';


nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#700016";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#BFE6FF";

document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$(".container")[0].style.backgroundColor = "#FFFFFF";

document.getElementById("header").src = "https://gcdnb.pbrd.co/images/Lh4o4Hw3f4yj.jpg?o=1";

document.body.background = "https://pbs.twimg.com/tweet_video_thumb/DrV20iDVAAErEH3.jpg";

document.head.innerHTML += "<style>#results_container {color:#000000;} .inner_window_w_desc {background-color:#E8FBFF!important;}</style>";
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
    name: "I'm tired. I'm wasted, I love you America!",
    tracklist: [
      {
        "name": "The Room Soundtrack - Crazy",
        "url": "https://audio.jukehost.co.uk/JpO4nAVErQsmgQlbBGO3LGeDzYW7xRCU"
      },
      {
        "name": "The Neighbourhood - Scary Love",
        "url": "https://audio.jukehost.co.uk/MDEEtBoyRgc2I9HVpI1CO6Q7W5qfzqgS"
      },
      {
        "name": "The Room Soundtrack - I Will",
        "url": "https://audio.jukehost.co.uk/cWkDJC2Tbtp6rue522AWa85rf4gy9qtG"
      },
      {
        "name": "The Room Soundtrack - Street",
        "url": "https://audio.jukehost.co.uk/BT9nIhh2stQdIbwvMY9AIwCakXv6kByj"
      },
      {
        "name": "Songify The Room (Youre Tearing Me Apart)",
        "url": "https://audio.jukehost.co.uk/NtMs3y5pQ9T4iNVIptPJFXal5bb6bMAb"
      },              
    ]
  }
}

// Set up new music player

newMusicPlayer()

RecReading=true

      

styling = document.createElement("style");
document.head.appendChild(styling);

styling.innerHTML = `
#opponent_selection_id_back {
    display: none;
}
`

let z = new MutationObserver((mutationsList, observer) => {
    let runningMateSummary = document.querySelector("#running_mate_summary");
    if (runningMateSummary) {
        $("#running_mate_id_button").click();
        observer.disconnect()
    }
});
//#startcode

RecReading = true

HistHexcolour=["#FFFF00","#0000FF","#FF0000","#C1BFBD"]; HistName=[" Tommy Wisseau"," Kamala Harris"," Donald Trump"," Denny"]; HistEV=[270,138,130,0]; HistPV=["49,037,568","44,693,525","42,543,687","0"]; HistPVP=["36.0%","32.8%","31.2%"," 0.0%"];
//#endcode