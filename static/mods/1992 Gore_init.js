RecReading=true

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
        "pk": 9,
        "fields": {
            "year": 1992,
            "summary": "<p>Al Gore attempts to secure a second term, while eccentric businessman Ross Perot is a newcomer to the national stage. Key issues include the economic recession and President Gore's “Agenda 2000.”</p> <ul><li>Gore attempts to emphasize the ongoing (albeit sluggish) economic recovery, defend his own key initiatives, and poke plenty of holes in his unconventional opponent.</li><li>Perot's star power catapulted him to the Republican nomination, but this is a whole new ball game. If he lets his momentum slow for even a second, everything could come crashing down.</li></ul>",
            "image_url": "https://i.imgur.com/2MyqKmV.png",
            "winning_electoral_vote_number": 270,
            "advisor_url": "https://i.imgur.com/8Ffzxsl.png",
            "recommended_reading": "<h4 style=\\\"margin-top: 0.5em;\\\">In-Universe Lore and Further Reading</h4><img src='https://i.imgur.com/xqIzdN9.png' width='120px'></img><br><p>This alternate history scenario presumes that Al Gore was elected President in 1988 and explores what a pre-Clinton era Gore presidency might have looked like. Here are some sources if you want to read more about Gore's 1988 campaign, and a link to the collage that originally inspired this scenario (also created by me). Thanks for playing.</p><a href='https://www.c-span.org/video/?1546-1/gore-campaign-interview'> Gore Campaign Interview (<em>C-SPAN</em>, 2/15/1988)</a><br><a href='https://www.nytimes.com/1988/04/22/opinion/this-gore-campaign-and-the-next.html'> Opinion | This Gore Campaign, and the Next (<em>New York Times</em>, 4/22/1988)</a><br><a href='https://www.salon.com/2022/12/18/the-first-climate-change-candidate-inside-al-gores-oddly-prescient-1988-presidential-run/'> The first climate change candidate: Inside Al Gore's oddly prescient 1988 presidential run (<em>Salon</em>, 12/18/2022)</a><br><a href='https://archive.nytimes.com/www.nytimes.com/library/politics/camp/022500wh-dem-abort.html'> Gore's Shifts on Abortion Policy Roil His Campaign (<em>New York Times</em>, 2/25/2000)</a><p></p><a href='https://imgur.com/lJsL8E3'> Click here to see the lore collage that inspired this scenario.</a>",
            "has_visits": 1,
            "no_electoral_majority_image": "https://www.jetsimon.com/public/static/images/2012-no-majority.jpg",
            "creator": "Martha",
            "display_year": "1992 Gore"
        }
    }
]

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 78,
        "fields": {
            "first_name": "Al",
            "last_name": "Gore",
            "election": 9,
            "party": "Democratic",
            "state": "Tennessee",
            "priority": 1,
            "description": "<p>Elected narrowly against George Bush in 1988, Al Gore is the youngest elected president in American history. However, he has quickly become unpopular with the American public, owing to the ongoing recession and his own stiff personality. He has seen some success pushing his “Agenda 2000” through Congress, particularly with education reform and scientific research. He is polling unusually poorly for a sitting President, but his unconventional opponent could change that — or make it even worse.</p>",
            "color_hex": "#0042aa",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 1,
            "image_url": "https://i.imgur.com/24SPNZX.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "''",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 77,
        "fields": {
            "first_name": "Ross",
            "last_name": "Perot",
            "election": 9,
            "party": "Republican",
            "state": "Texas",
            "priority": 2,
            "description": "<p>Ross Perot's path to the nomination is about as unlikely as it gets in politics. He started his odyssey not in the small towns of Iowa or New Hampshire, but on nationally-syndicated talk shows like <em>Face the Nation</em> and <em>Larry King Live.</em> His persona as a no-nonsense outsider businessman captivated Republican voters, launching Perot all the way to the Republican nomination. He currently leads Gore in opinion polling by a considerable margin.</p><p>But Perot's job is far from finished. He has a nonexistent ground game, a huge trust problem with the Christian right, and zero experience in electioneering beyond the primary contest (which was basically a fluke). Can he keep his delicate house of cards intact all the way to November, or will it collapse before then? Only time will tell.</p>",
            "color_hex": "#be1631",
            "secondary_color_hex": "#90C0FF",
            "is_active": 1,
            "image_url": "https://i.imgur.com/E03L2Qu.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "''",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 79,
        "fields": {
            "first_name": "Ralph",
            "last_name": "Nader",
            "election": 9,
            "party": "Independent",
            "state": "Connecticut",
            "priority": 3,
            "description": "Ralph Nader runs as an independent left-wing presidential candidate in this election. He is perhaps best known for pusblishing a book about automobile safety entitled “Unsafe at Any Speed,” which led to controversy and reform in the automotive industry. He represents an alternative for leftist voters who are frustrated with the conservatism of President Gore.",
            "color_hex": "#aaaaaa",
            "secondary_color_hex": "#A1FFA1",
            "is_active": 0,
            "image_url": "https://i.imgur.com/RO9WKJa.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "''",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 80,
        "fields": {
            "first_name": "Irwin",
            "last_name": "Schiff/Others",
            "election": 9,
            "party": "Libertarian/Others",
            "state": "Various",
            "priority": 4,
            "description": "''",
            "color_hex": "#ffc677",
            "secondary_color_hex": "#FFFFC0",
            "is_active": 0,
            "image_url": "''",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "''",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 85,
        "fields": {
            "first_name": "Paul",
            "last_name": "Simon",
            "election": 9,
            "party": "Democratic",
            "state": "Illinois",
            "priority": 9,
            "description": "''",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/n8GIJEg.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "<p>Paul Simon was elected Vice President alongside Al Gore in 1988. The two were seen as something of an odd couple during the election season, but Simon has since become a strong ally of Gore, helping his standing with northern leaders and pushing hard for his agenda on Capitol Hill. There's no reason for Gore not to have Simon on the ticket this year.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 81,
        "fields": {
            "first_name": "John",
            "last_name": "Danforth",
            "election": 9,
            "party": "Republican",
            "state": "Missouri",
            "priority": 5,
            "description": "''",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://i.imgur.com/XvP0mzB.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "<p>John Danforth is a Senator from Missouri and a respected Republican voice in the Senate. He could appeal to both moderates and conservatives while building a valuable bridge between your campaign and the Republican establishment, between which relations are almost nonexistent right now. He could also help Perot in his native Missouri, a crucial bellwether state.</p><p>However, Danforth is a stalwart opponent of the death penalty, which could pose a slight problem given the current attitude towards crime in the wake of the Los Angeles riots.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 82,
        "fields": {
            "first_name": "Nancy",
            "last_name": "Kassebaum",
            "election": 9,
            "party": "Republican",
            "state": "Kansas",
            "priority": 6,
            "description": "''",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://i.imgur.com/EP7RpKl.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "<p>Senator Nancy Landon Kassebaum would definitely make for a moderate voice as Perot's running mate. She has extensive experience in foreign policy, establishing herself as a strong opponent to the Apartheid regime in South Africa. She could also come in handy with female voters, with the possibility of being the first female Vice President in American history.</p><p>On the other hand, someone as moderate as her would only further frustrate the Moral Majority at Perot's right flank, and her status as a woman would invite charges of tokenism. This is unfair, given how experienced she is, but it's the world we live in right now.",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 83,
        "fields": {
            "first_name": "Trent",
            "last_name": "Lott",
            "election": 9,
            "party": "Republican",
            "state": "Mississippi",
            "priority": 7,
            "description": "''",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://i.imgur.com/vRYSh6N.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "<p>Senator Trent Lott is a potentially game-changing pick. He could mend fences simultaneously with the Republican establishment and Christian conservative wings, while putting Perot on even footing with Gore in his native South. He doesn't have any apparent likability problems either, with his southern charm and mannerisms.</p><p>Obviously, Lott is also pretty conservative, and any gains he makes for Perot in the South would be at the expense of the North. It would take a delicate balancing game to play Lott right.",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 84,
        "fields": {
            "first_name": "Bob",
            "last_name": "Dole",
            "election": 9,
            "party": "Republican",
            "state": "Kansas",
            "priority": 8,
            "description": "''",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://i.imgur.com/rJxUAy5.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "<p>Bob Dole is a titan in Republican politics. He was the running mate of Gerald Ford in 1976, outperforming all expectations and coming within a hair's breadth of the White House (or, to be more specific, the naval observatory). Since then, he has remained in the Senate, becoming Minority Leader in 1987.</p><p>He was also the clear frontrunner this year until you swiftly dethroned him. He doesn't think very highly of you, but he could help unite the party. He also reinforces your message of deficit reduction, as an avowed deficit hawk himself. However, he offers little to the ticket in terms of charisma or dynamic campaigning. ",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 86,
        "fields": {
            "first_name": "John",
            "last_name": "McCain",
            "election": 9,
            "party": "Republican",
            "state": "Arizona",
            "priority": 10,
            "description": "''",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/TfH72T0.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "<p>Senator John McCain of Arizona is a Navy veteran, a political maverick, and a conservative outsider who draws heavy support from the west. Sound familiar? His selection would essentially mean doubling down on Perot's core persona and appeal. It could also do a lot for him in his native Southwest region.</p><p>However, McCain is a tad light on experience, and some of Perot's advisors are pushing him to balance out his own populist presence with a more steady, establishmentarian Republican in the number two spot. McCain does little for Perot, in that respect.",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 89,
        "fields": {
            "first_name": "Barry",
            "last_name": "Commoner",
            "election": 9,
            "party": "Independent",
            "state": "Missouri",
            "priority": 13,
            "description": "''",
            "color_hex": "#00C100",
            "secondary_color_hex": "#A1FFA1",
            "is_active": 0,
            "image_url": "https://i.imgur.com/UKJFYlT.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "<p>Barry Commoner is an ecologist and professor who originally gained notoriety for his anti-nucelar proliferation activism in the 1950s. He has since been a leading voice on many environmental issues and is considered an eco-socialist. His only previous political activity was as the nominee of the Citizens' Party in 1980, but he has generously offered to serve as Ralph Nader's running mate in this election.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 90,
        "fields": {
            "first_name": "Harry",
            "last_name": "Browne/Others",
            "election": 9,
            "party": "Libertarian/Various",
            "state": "California",
            "priority": 14,
            "description": "''",
            "color_hex": "#FFFF00",
            "secondary_color_hex": "#FFFFC0",
            "is_active": 0,
            "image_url": "''",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "''",
            "candidate_score": 0,
            "running_mate": true
        }
    }
]

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 57,
        "fields": {
            "candidate": 80,
            "running_mate": 90
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 56,
        "fields": {
            "candidate": 79,
            "running_mate": 89
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 48,
        "fields": {
            "candidate": 77,
            "running_mate": 81
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 52,
        "fields": {
            "candidate": 78,
            "running_mate": 85
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 49,
        "fields": {
            "candidate": 77,
            "running_mate": 82
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 50,
        "fields": {
            "candidate": 77,
            "running_mate": 83
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 51,
        "fields": {
            "candidate": 77,
            "running_mate": 84
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 95317,
        "fields": {
            "candidate": 77,
            "running_mate": 86
        }
    }
]

campaignTrail_temp.credits = "Martha, with special thanks to Liquid Astro for coding work"

campaignTrail_temp.opponents_default_json = [
    {
        "election": 9,
        "candidates": [
            78,
            77,
            79,
            80
        ]
    }
]

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 9,
        "candidates": [
            78,
            77,
            79,
            80
        ]
    }
]

campaignTrail_temp.temp_election_list = [
    {
        "id": 9,
        "year": 1992,
        "is_premium": 0,
        "display_year": "1992 Gore"
    }
]

jet_data = {
    "headerColor": "#700016",
    "windowColor": "#BFE6FF",
    "containerColor": "#FFFFFF",
    "innerWindowColor": "#E8FBFF",
    "bannerImageUrl": "https://i.imgur.com/y4nJqk1.png",
    "backgroundImageUrl": "https://i.imgur.com/hdCGKKe.png",
    "endingTextColor": "#000000",
    "customQuote": "",
    "gameTitle": "The Campaign Trail"
}

//#startcode


corrr = '\n              <h2>The Campaign Trail</h2>\n            ';


nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#700016";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#BFE6FF";

document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$(".container")[0].style.backgroundColor = "#FFFFFF";

document.getElementById("header").src = "https://i.imgur.com/y4nJqk1.png";

document.body.background = "https://i.imgur.com/hdCGKKe.png";

document.head.innerHTML += "<style>#results_container {color:#000000;} .inner_window_w_desc {background-color:#E8FBFF!important;}</style>";

HistHexcolour=["#0042aa","#be1631","#aaaaaa","#ffc677"]; HistName=[" Al Gore"," Ross Perot"," Ralph Nader"," Irwin Schiff/Others"]; HistEV=[385,153,0,0]; HistPV=["53,875,445","48,346,105","1,514,944","1,072,513"]; HistPVP=["51.6%","46.3%","1.5%","0.7%"];

//#endcode

 // MUSIC MODE






 musicMode = () => {


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
 
 
            name: "Songs Albert Jr. Plays On His Walkman",
 
 
            tracklist: [
 
 
              {
 
 
                "name": "They Might Be Giants - Birdhouse In Your Soul",
 
 
                "url": "https://files.catbox.moe/cce6dy.mp3"
 
 
              },
              {
 
 
                "name": "R.E.M. - Superman",
 
 
                "url": "https://files.catbox.moe/fr75bv.mp3"
 
 
              },
              {
 
 
                "name": "Public Image Ltd. - Rise",
 
 
                "url": "https://files.catbox.moe/w56565.mp3"
 
 
              },
              {
 
 
                "name": "Madness - Our House",
 
 
                "url": "https://files.catbox.moe/d8wpd1.mp3"
 
 
              },
              {
 
 
                "name": "Cheap Trick - Surrender",
 
 
                "url": "https://files.catbox.moe/ybtdrj.mp3"
 
 
              },
              {
 
 
                "name": "Tom Petty & The Heartbreakers - Learning to Fly",
 
 
                "url": "https://files.catbox.moe/mcz9xp.mp3"
 
 
              },
              {
 
 
                "name": "U2 - Where The Streets Have No Name",
 
 
                "url": "https://files.catbox.moe/d5ohme.mp3"
 
 
              }
          ]
 
 
        }
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
  e.collect_results = true; 

  campaignTrail_temp.modBoxTheme = {
     "header_color": "#2b3d79",
     "header_text_color": "#ffffff",
     "description_text_color": "#000000",
     "description_background_color": "#ebebeb",
     "main_color": "#b4393a",
     "secondary_color": "#124679",
     "ui_text_color": "#FFFFFF"
}