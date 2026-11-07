campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 20,
        "fields": {
            "year": 2012,
            "display_year": "2012",
            "summary": "\"We can never allow this kind of politics to be normalized. What we're seeing, that's not who we are. No matter what any Washington politician says, America doesn't apologize for itself. It's not American and it isn't normal.\"<p>\n\n<p>That's what Rudy Giuliani had to say when asked about you taking the oath of office last month. Most pundits were able to call it what it was: sour grapes from a man whose time in politics was coming to a humiliating end after losing last year's election to a man he himself dubbed \"the weakest\" candidate in American history. A man too bitter to even attend the inauguration, to the dismay of even some of our harshest critics.<p>\n\nTo be fair, he's not completely wrong. This isn't normal, and nobody seems interested in pretending it is. That's not necessarily a negative, though. Across the country, Americans realized quickly that \"normal\" wasn't working. No matter how turned off they may have been to some of your rhetoric, they knew things had to change. Quickly. Voters have expressed their hopes that a Kucinich administration will ditch ideological gridlock in favor of bipartisan action to \"heal\" the nation after the turmoil and tragedies of 2008.<p>\n\nThat's by far the biggest reason you were able to pull off your long-shot victory last year. It wasn't because Americans woke up that Tuesday suddenly in favor of the Department of Peace and lowering the voting age to 16. People knew their country was in crisis, and so was their way of life. Millions living in constant fear of losing their jobs, homes and retirement because of the actions of robber barons on Wall Street. They decided to cast their vote for the man who promised to punish the bankers and provide relief to the masses. Choosing Russ Feingold as your running mate helped too, as did your assurances that you wouldn't disrupt current trade deals until the economy had time to recover.<p>\n\nBut now you're the leader of the free world. There'll always be a segment of the electorate that refuses to take you seriously, but right now you're their President too. Will a Kucinich administration be able to unify a fractured and frightened populace, or will it only deepen the divide? Maybe a better question is, after an election as brutal as the one last November, is unity a fool's errand?<p>\n\nIs the country even capable of moving forward?<p>\n\nWhatever the answers to those questions are, we know one thing for certain: nothing we do will be easy. But in politics, nothing worth doing ever is.<p>",
            "site_description": "\"We can never allow this kind of politics to be normalized. What we're seeing, that's not who we are. No matter what any Washington politician says, America doesn't apologize for itself. It's not American and it isn't normal.\"<p>\n\n<p>That's what Rudy Giuliani had to say when asked about you taking the oath of office last month. Most pundits were able to call it what it was: sour grapes from a man whose time in politics was coming to a humiliating end after losing last year's election to a man he himself dubbed \"the weakest\" candidate in American history. A man too bitter to even attend the inauguration, to the dismay of even some of our harshest critics.<p>\n\nTo be fair, he's not completely wrong. This isn't normal, and nobody seems interested in pretending it is. That's not necessarily a negative, though. Across the country, Americans realized quickly that \"normal\" wasn't working. No matter how turned off they may have been to some of your rhetoric, they knew things had to change. Quickly. Voters have expressed their hopes that a Kucinich administration will ditch ideological gridlock in favor of bipartisan action to \"heal\" the nation after the turmoil and tragedies of 2008.<p>\n\nThat's by far the biggest reason you were able to pull off your long-shot victory last year. It wasn't because Americans woke up that Tuesday suddenly in favor of the Department of Peace and lowering the voting age to 16. People knew their country was in crisis, and so was their way of life. Millions living in constant fear of losing their jobs, homes and retirement because of the actions of robber barons on Wall Street. They decided to cast their vote for the man who promised to punish the bankers and provide relief to the masses. Choosing Russ Feingold as your running mate helped too, as did your assurances that you wouldn't disrupt current trade deals until the economy had time to recover.<p>\n\nBut now you're the leader of the free world. There'll always be a segment of the electorate that refuses to take you seriously, but right now you're their President too. Will a Kucinich administration be able to unify a fractured and frightened populace, or will it only deepen the divide? Maybe a better question is, after an election as brutal as the one last November, is unity a fool's errand?<p>\n\nIs the country even capable of moving forward?<p>\n\nWhatever the answers to those questions are, we know one thing for certain: nothing we do will be easy. But in politics, nothing worth doing ever is.<p>",
            "image_url": "https://i.imgur.com/ZbOprxw.gif",
            "winning_electoral_vote_number": 270,
            "advisor_url": "https://i.imgur.com/hBYPZqW.png",
            "recommended_reading": "<ul>\n<li><a href=\"https://www.youtube.com/watch?v=YcBQCXClSDM\" target=\"_blank\" rel=\"noopener noreferrer\">Kucinich Political Compass</a></li>\n<li><a href=\"https://www.youtube.com/watch?v=3KU1odfM6KE\" target=\"_blank\" rel=\"noopener noreferrer\">Elizabeth Kucinich on Lies of MAHA</a></li>\n<li><a href=\"https://youtu.be/chIn37dXCqo?si=H9Aioy6pR_0LSNpJ\" target=\"_blank\" rel=\"noopener noreferrer\">Dylan Ratigan on Iran/Saudi Arabia (probably doesn&#x27;t fit here but everyone should see it)</a></li>\n<li><a href=\"https://www.youtube.com/watch?v=xiNIWCP5hck\" target=\"_blank\" rel=\"noopener noreferrer\">Kucinich Wisconsin 2011</a></li>\n<li><a href=\"https://www.youtube.com/watch?v=U7pv7sO5Gng&amp;list=RDU7pv7sO5Gng&amp;start_radio=1\" target=\"_blank\" rel=\"noopener noreferrer\">Thanks to Ryker, I used his Biden &#x27;08 music player</a></li>\n<li><a href=\"https://www.youtube.com/watch?v=LIKUn9Q-7-0\" target=\"_blank\" rel=\"noopener noreferrer\">Feingold 1992 Ad</a></li>\n<li><a href=\"https://www.youtube.com/watch?v=xtnVjM5pTn4\" target=\"_blank\" rel=\"noopener noreferrer\">Interview with Dennis as Cleveland Mayor 1978</a></li>\n</ul>",
            "recommended_reading_enabled": true,
            "has_visits": 1,
            "no_electoral_majority_image": "../static/images/2012-no-majority.jpg"
        }
    }
];

campaignTrail_temp.temp_election_list = [
    {
        "id": 20,
        "year": 2012,
        "is_premium": 0,
        "display_year": "2012"
    }
];

RecReading = true;

campaignTrail_temp.credits = "Rupert Pupkin";

// necessary so that the right election files are loaded -SM
setInterval(() => {
    const electionSelect = document.getElementById("election_id");
    if (electionSelect) {
        if (electionSelect.value === "20") {
            campaignTrail_temp.code2_id = "2012 - The World We See";
        }
    }
}, 100);

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
            "question_count": 44,
            "default_map_color_hex": "#C9C9C9",
            "no_state_map_color_hex": "#999999"
        }
    }
];

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 16,
        "fields": {
            "first_name": "Dennis",
            "last_name": "Kucinich",
            "election": 20,
            "party": "Democrat",
            "state": "Ohio",
            "priority": 1,
            "description": "Against everyone's expectations, you're somehow the 44th President of the United States. Aside from some minor hiccups, you ran as an unapologetic progressive and survived an election that looked unwinnable only months ago. Now comes the more difficult part. The economy is collapsing, America is fighting two wars, and even many Democrats who celebrated your victory aren't convinced that your ambitious agenda is realistic. You promised the country peace, economic justice and a government that answers to ordinary Americans. <p>\n\n<p>There were a few key compromises made during the transition. You put Bill Richardson in as Secretary of State, Gary Hart is over at Homeland Security, and don't forget Secretary of Defense Cleland. You were able to get Barbara Lee in at the U.N. too, though. With four years ahead of you, you'll finally get the chance to find out how much of your vision can survive this Presidency. You're a long way from Cleveland. ",
            "color_hex": "#0a35c1",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://i.imgur.com/UdKshuN.png",
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
        "pk": 30,
        "fields": {
            "first_name": "Russ",
            "last_name": "Feingold",
            "election": 20,
            "party": "Democrat",
            "state": "Wisconsin",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://i.imgur.com/UzdkRFr.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "Russ may be one of the few people in Washington nearly as stubborn as you are. The Wisconsin Senator built his career on campaign finance reform, civil liberties and an independent personality that occasionally made him a headache for both parties. His opposition to the PATRIOT Act and the Iraq War made him a natural partner for you.\n<p>He also brought a career as an accomplished legislator, which helped calm some Republican attacks that you were just a troublemaker who never got anything done. It also meant we got some flak from party leadership about his selection, as now his senate seat doesn't seem so safe. Russ believes deeply in what this administration can accomplish. That doesn't mean he'll always agree with how you try to accomplish it.",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 17,
        "fields": {
            "first_name": "Mitch",
            "last_name": "Republicans",
            "election": 20,
            "party": "Republican",
            "state": "Indiana",
            "priority": 1,
            "description": "<p>Republican nominee.</p>",
            "color_hex": "#d53030",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/candidateexample.png",
            "electoral_victory_message": "The Republican ticket wins.",
            "electoral_loss_message": "The Republican ticket loses.",
            "no_electoral_majority_message": "No candidate has an electoral majority.",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 18,
        "fields": {
            "first_name": "Jill",
            "last_name": "Stein",
            "election": 20,
            "party": "Green",
            "state": "Massachusetts",
            "priority": 3,
            "description": "<p>Green Party nominee.</p>",
            "color_hex": "#00a95c",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "",
            "electoral_victory_message": "Jill Stein wins.",
            "electoral_loss_message": "Jill Stein loses.",
            "no_electoral_majority_message": "No candidate has an electoral majority.",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 19,
        "fields": {
            "first_name": "Virgil",
            "last_name": "Goode",
            "election": 20,
            "party": "Constitution",
            "state": "Virginia",
            "priority": 4,
            "description": "<p>Constitution Party nominee.</p>",
            "color_hex": "#7a3e9d",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "",
            "electoral_victory_message": "Virgil Goode wins.",
            "electoral_loss_message": "Virgil Goode loses.",
            "no_electoral_majority_message": "No candidate has an electoral majority.",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 1573,
        "fields": {
            "first_name": "Gary",
            "last_name": "Johnson",
            "election": 20,
            "party": "Libertarian",
            "state": "New Mexico",
            "priority": 2,
            "description": "<p>Libertarian Party nominee.</p>",
            "color_hex": "#f2c300",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "",
            "electoral_victory_message": "Gary Johnson wins.",
            "electoral_loss_message": "Gary Johnson loses.",
            "no_electoral_majority_message": "No candidate has an electoral majority.",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    }
];

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 500,
        "fields": {
            "candidate": 16,
            "running_mate": 30
        }
    }
];

campaignTrail_temp.opponents_default_json = [
    {
        "election": 20,
        "candidates": [
            16,
            17,
            18,
            19,
            1573
        ]
    }
];

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 20,
        "candidates": [
            16,
            17,
            18,
            19,
            1573
        ]
    }
];

campaignTrail_temp.modBoxTheme = {
    "header_color": "#BFE6FF",
    "header_image_url": "https://i.imgur.com/SyTdX49.png",
    "header_text_color": "#b1d6ff",
    "description_text_color": "#000000",
    "description_background_color": "#ffffff",
    "main_color": "#e8dece",
    "secondary_color": "#042539",
    "ui_text_color": "#f4efef"
};

jet_data = {
    "headerColor": "#db5405",
    "headerTextColor": "#ffffff",
    "windowColor": "#254f71",
    "containerColor": "#000000",
    "innerWindowColor": "#e8dece",
    "innerWindowTextColor": "#000000",
    "descriptionWindowColor": "#f8f8f8",
    "descriptionWindowTextColor": "#000000",
    "startButtonColor": "#000000",
    "bannerImageUrl": "https://i.imgur.com/YYMRKdH.png",
    "backgroundImageUrl": "https://i.imgur.com/8oDoUCI.png",
    "gameTitle": "THE CAMPAIGN TRAIL",
    "customQuote": "",
    "quoteTextColor": "#ffffff",
    "endingTextColor": "#f3ecec"
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
        gameWindow.style.backgroundImage = 'url("https://i.imgur.com/p7iJ0Ud.png")';
        gameWindow.style.backgroundSize = "cover";
        gameWindow.style.backgroundPosition = "center center";
        gameWindow.style.backgroundRepeat = "no-repeat";
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
      .inner_window_w_desc { background-color: #e8dece !important; color: #000000; }
      .inner_window_front, .person_description_window, .election_description_window, .description_window_small { background-color: #f8f8f8 !important; color: #000000; }
      #election_description_window, .election_description_window { max-height: 330px !important; overflow-y: auto !important; overflow-x: hidden !important; box-sizing: border-box !important; }
      .campaign_trail_start_emphasis { background-color: #000000 !important; }
    `;
    document.head.appendChild(style);
    }
//#startcode

const theme = nct_stuff.themes[nct_stuff.selectedTheme];

// define / override theme values
theme.coloring_title     = "#db5405";
theme.coloring_window    = "#254f71";
theme.coloring_container = "#000000";
theme.header_image = "https://i.imgur.com/YYMRKdH.png";
theme.body_background = "https://i.imgur.com/8oDoUCI.png";

applyTheme(theme);

// This is the music player
// used in the mod Biden '08.
class Song {
  constructor(title, artist, coverLink, audioLink) {
    this.title = title;
    this.artist = artist;
    this.coverLink = coverLink;
    this.audioLink = audioLink;
  }
  getTitle() { return this.title; }
  getArtist() { return this.artist; }
  getCoverLink() { return this.coverLink; }
  getAudioLink() { return this.audioLink; }
}

class Playlist {
  constructor() {
    this.songs = [];
    this.currentSongIndex = 0;
  }
  addSong(song) { this.songs.push(song); }
  getCurrentSong() { return this.songs[this.currentSongIndex]; }

  playNext() {
    if (this.songs.length === 0) return;
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
  }

  playPrevious() {
    if (this.songs.length === 0) return;
    this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
  }
}

window.Playlist = Playlist;
window.Song = Song;

let activePlaylist = new Playlist();
let audioInstance = null;
let currentVolume = 1;

// assets
const ASSETS = {
  bg: "https://i.postimg.cc/43VRTVXv/Qbn-Mi4s-Imgur-(1).png",
  infoBg: "",
  btnPrev: "https://file.garden/aNxawo8jlVkymd8s/joe%2008/election%20%2B%20music%20play/emaVVZr%20-%20Imgur.png",
  btnPlay: "https://file.garden/aNxawo8jlVkymd8s/joe%2008/election%20%2B%20music%20play/roCPjJ7%20-%20Imgur.png",
  btnPause: "https://file.garden/aNxawo8jlVkymd8s/joe%2008/election%20%2B%20music%20play/CxAJHDS%20-%20Imgur.png",
  btnNext: "https://file.garden/aNxawo8jlVkymd8s/joe%2008/election%20%2B%20music%20play/prB8JyH%20-%20Imgur.png",
  volIcon: "https://file.garden/aNxawo8jlVkymd8s/joe%2008/election%20%2B%20music%20play/fIQkAed%20-%20Imgur.png"
};

function changePlaylist(newPlaylist) {
  activePlaylist = newPlaylist;
  activePlaylist.currentSongIndex = 0;

  updateUI(activePlaylist);

  const audio = getAudioElement();
  const song = activePlaylist.getCurrentSong();

  if (song) {
    audio.src = song.audioLink;
    audio.play().catch(e => console.log("Autoplay blocked or waiting for interaction", e));
    updatePlayPauseIcon(true);
  }
}
window.changePlaylist = changePlaylist;

function updateUI(playlist) {
  const currentSong = playlist.getCurrentSong();
  const player = document.getElementById("player");

  if (!player || !currentSong) return;

  const cover = player.querySelector("#cover");
  const title = player.querySelector("#title");
  const artist = player.querySelector("#artist");

  if (cover) cover.src = currentSong.getCoverLink();
  if (title) title.textContent = currentSong.getTitle();
  if (artist) artist.textContent = currentSong.getArtist();
}
window.updateUI = updateUI;

// helpers
function getAudioElement() {
  if (!audioInstance) {
    audioInstance = document.createElement("audio");
    audioInstance.id = "audio";
    document.body.appendChild(audioInstance);
  }
  return audioInstance;
}

function updatePlayPauseIcon(isPlaying) {
  const btn = document.getElementById("playPauseButton");
  if (btn) {
    btn.src = isPlaying ? ASSETS.btnPause : ASSETS.btnPlay;
  }
}

// setup
function setupMusicPlayer() {
  const gameWindow = document.getElementById("game_window");
  if (!gameWindow) {
    console.warn("game_window element not found. Player will not be attached.");
    return;
  }

  // prevent duplicate players
  if (document.getElementById("player")) return;

  const defaultSongs = [
    ["Good Shepherd", "Jefferson Airplane", "https://i.imgur.com/Mqy5IIv.jpeg", "https://audio.jukehost.co.uk/01a0bf45-13ef-71d8-8dcc-07da9d8dd559"],
    ["(What's So Funny 'Bout) Peace Love And Understanding", "Jeff Lowe", "https://i.imgur.com/JTCrnNi.jpeg", "https://audio.jukehost.co.uk/01a0bf45-1374-7395-afe1-6d6124e59e2f"],
    ["Rebuild America Keep Hope Alive", "Anne Feeney", "https://i.imgur.com/juGckbt.png", "https://audio.jukehost.co.uk/01a0bf45-1461-70bd-864f-e839174a126c"],
    ["Mr. Richards", "R.E.M.", "https://i.imgur.com/B7taeBf.png", "https://audio.jukehost.co.uk/01a0bf45-1474-723d-b627-b7341669d740"],
    ["Friend Is A Four Letter Word", "Cake", "https://i.imgur.com/DwWrQnW.jpeg", "https://audio.jukehost.co.uk/01a0bf45-140d-7140-b987-ff2e2b2e84e5"],
    ["The Fool On The Hill", "The Beatles", "https://i.imgur.com/dErvElc.png", "https://audio.jukehost.co.uk/01a0bf45-0518-72cb-856e-21563516133e"],
    ["Helpless", "Crosby, Stills, Nash & Young", "https://i.imgur.com/PwCcJrc.jpeg", "https://audio.jukehost.co.uk/01a0bf45-145e-72e4-86e4-1200148cc511"],
    ["United We Stand", "Brotherhood Of Man", "https://i.imgur.com/zNy0BqJ.jpeg", "https://audio.jukehost.co.uk/01a0bf66-ad38-70d6-ae28-1f2fa979e295"],
    ["Hollow Man", "R.E.M.", "https://i.imgur.com/B7taeBf.png", "https://audio.jukehost.co.uk/01a0bf45-13d1-722d-97b8-361e1376badb"],
    ["Complicated Situation", "Black Rebel Motorcycle Club", "https://i.imgur.com/dyRKPFK.jpeg", "https://audio.jukehost.co.uk/01a0bf45-12ee-732e-8840-111ce5b1276e"],
    ["Federal Funding", "Cake", "https://i.imgur.com/drtTCEc.jpeg", "https://audio.jukehost.co.uk/01a0bf45-074b-727c-aa35-95873da9dd36"],
    ["Rock You Like Herman Cain", "???", "https://i.imgur.com/jxgn111.jpeg", "https://audio.jukehost.co.uk/01a0bf45-05ca-72ac-8e9b-52f9c17d4795"],
    ["No One More American Than Me", "Jon Stewart & Stephen Colbert (2010)", "https://i.imgur.com/nSYc7ni.png", "https://audio.jukehost.co.uk/01a0bf45-13dd-73e2-9d3d-54a15bafbe67"]
  ];
  defaultSongs.forEach(data => activePlaylist.addSong(new Song(...data)));

  // inject CSS
  const style = document.createElement("style");
  style.textContent = `
    #player {
      border: 3px solid #8586c0;
      display: flex;
      flex-direction: row;
      height: 191px;
      background:
          linear-gradient(
              135deg,
              rgba(255,255,255,.95),
              rgba(250,252,255,.88),
              rgba(240,246,254,.65),
              rgba(248,251,255,.82),
              rgba(255,255,255,.95)
          )/*,
          url("${ASSETS.bg}")*/;
      box-shadow: inset 0 1px 0 rgba(255,255,255,.7), 0 2px 8px rgba(0,0,0,.18);
      font-family: sans-serif;
    }
    #display-box { display: flex; align-items: center; width: 50%; }
    #cover { width: 176px; height: 176px; border: .125em solid #243956; box-shadow: inset 0 0 0 1px rgba(255,255,255,.4), 0 2px 6px rgba(0,0,0,.25); }
    #info-container {
      display: flex;
      flex-direction: row;
      height: 178px; width: 127px; margin-top: 3px;
      color: black;
      background:
          linear-gradient(
              180deg,
              rgba(255,255,255,.88),
              rgba(238,243,251,.82),
              rgba(214,223,239,.78)
          );
      border-left: 1px solid rgba(90,110,150,.35);
      box-shadow: inset 0 1px 0 rgba(255,255,255,.75);
    }
    #song-info { width: 100%; padding: 5px; }
    #title { font-weight: bold; font-size: 16px; color: #243956; text-shadow: 0 1px 0 rgba(255,255,255,.95); }
    #artist { font-size: 12px; color: #17191e; letter-spacing: .15px; }
    #controls-container {
      display: flex; flex-direction: column; align-items: center;
      margin: 10px; width: 100%; padding-top: 15px;
    }
    .is-vertical #volumeSlider {
      width: 125px; margin: 0;
    }
    #controls { display: flex; flex-direction: row; justify-content: center; width: 80%; gap: 5px; cursor: pointer; }
    #controls img { transition: transform 0.1s; }
    #controls img:active { transform: scale(0.95); }
    #progress-bar-container { width: 100%; }
    #progress-bar { width: 80%; margin: auto; display: flex; margin-top: 20px; cursor: pointer; }
    #volume-container { display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 1em; }
    #volume-display { font-weight: bold; display: none; }

    :root {
      --w7-sdt-w: 10px;
      --w7-sdt-h: 18px;
      --w7-surface: #f0f0f0;
      --w7-sdt-icon: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC7SURBVHgBlZLBCYQwEEVj9CDYgRfbswF7sRAbsArPdhBICDmEzPoDE9CdXeKH0eHP48fINOrSPM+k/mhd16YDtCyLmqZJhM7zxIs6PAF570WQAzJIRLkksd89DUl939eB1Ym3b0wpiQBmIYSXiTFGZYwRgWEY6o8uIPQLZGlu2rYtP54L3g3c912N45gHSEahh4dZERZj2zZyztFxHLnQw/vaLIattbmeULkMdg6XxLFaa3WB7MlCirTIHxVUkxicbwSEAAAAAElFTkSuQmCC");
      --w7-sdt-icon-h: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAMAAABVab95AAAAWlBMVEUAAAAAjf8AVpo8f7G44/v5/f7l9P3g8/za8Pzp9v32+/7u+f695v2z4PmWvdjr9/1onMKu3vjQ4e2Zv9l+pcJLc5GTu9eMtNGCqseLrcVhlbt0l7BWfptOdpOMIi2BAAAAA3RSTlMADUenYG6gAAAAWklEQVQI113GRwKAIAwEwCBBRaUo9vL/b0qWG3MaaqKG2FBcDCw3aWPB6NwW6nYgHUoHaQ9VxwlGKUPVwC7joOlIgeeZQ3pJnd46Z/2miNTqbZl8918efj2yH/8dBY1fB+zGAAAAAElFTkSuQmCC");
      --w7-sdt-icon-a: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACsSURBVHgB3ZKxCoMwEIYvJWOn0r10LHTuVDp1KIU+RN+gT9FZ6AP0LYqDY+nQWXAScXMQdRYh+ouRqEF0cPGHHJfcl7sbfkaFroYlqEefx5lxQK/blu6rjRZ6R34RLcFxAWSkmRZEbUkeLWigZgVymZhuoid264lGjwMvTkhmtYsqvKEGMQQY43jYNwoy//7t0j31b8DPXyBOcVYe5Kr9mDpKdoY6ndoCrDNyDnRZRNbxQWFyAAAAAElFTkSuQmCC");
    }

        input[type=range] {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background: transparent;
          padding: 10px 1px;
          width: 100%;
        }
        input[type=range]:focus-visible {
          outline: 1px dotted #000;
        }

        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          background: var(--w7-sdt-icon);
          filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.125));
          height: var(--w7-sdt-h);
          transform: translateY(-7px);
          width: var(--w7-sdt-w);
        }
        input[type=range]::-webkit-slider-thumb:hover {
          background: var(--w7-sdt-icon-h);
        }
        input[type=range]::-webkit-slider-thumb:active {
          background: var(--w7-sdt-icon-a);
        }

        input[type=range]::-moz-range-thumb {
          background: var(--w7-sdt-icon);
          border: 0;
          border-radius: 0;
          filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.125));
          height: var(--w7-sdt-h);
          width: var(--w7-sdt-w);
        }
        input[type=range]::-moz-range-thumb:hover {
          background: var(--w7-sdt-icon-h);
        }
        input[type=range]::-moz-range-thumb:active {
          background: var(--w7-sdt-icon-a);
        }

        input[type=range]::-webkit-slider-runnable-track {
          background: var(--w7-surface);
          box-shadow: inset 1px 1px 1px #999, inset -1px 0 #999, 0 1px #fff;
          box-sizing: border-box;
          height: 3px;
          width: 100%;
        }
        input[type=range]::-moz-range-track {
          background: var(--w7-surface);
          box-shadow: inset 1px 1px 1px #999, inset -1px 0 #999, 0 1px #fff;
          box-sizing: border-box;
          height: 3px;
          width: 100%;
        }

        .is-vertical {
          display: inline-block;
          height: 150px;
          transform: translateY(50%);
          width: 4px;
        }
        .is-vertical > input[type=range] {
          height: 4px;
          margin: 0 16px 0 10px;
          transform: rotate(270deg) translateX(calc(-50% + 8px));
          transform-origin: left;
          width: 150px;
        }
        .is-vertical > input[type=range]::-webkit-slider-thumb {
          transform: translateY(-8px) scaleX(-1);
        }
        .is-vertical > input[type=range]::-moz-range-thumb {
          transform: translateY(2px) scaleX(-1);
        }

  `;
  document.head.appendChild(style);

  // create HTML
  const playerContainer = document.createElement("div");
  playerContainer.id = "player";
  playerContainer.innerHTML = `
    <div id="display-box">
      <img id="cover" src="">
      <div id="info-container">
        <div id="song-info">
          <h3 id="title"></h3>
          <p id="artist"></p>
        </div>
      </div>
    </div>
    <div id="controls-container">
      <div id="controls">
        <img id="prevButton" src="${ASSETS.btnPrev}" alt="Previous">
        <img id="playPauseButton" src="${ASSETS.btnPlay}" alt="Play/Pause">
        <img id="nextButton" src="${ASSETS.btnNext}" alt="Next">
      </div>
      <div id="progress-bar-container">
        <progress id="progress-bar" value="0" max="100"></progress>
      </div>
    </div>
    <div id="volume-container">
      <img src="${ASSETS.volIcon}" alt="Volume" style="margin-bottom: 1em;">
      <div class="is-vertical" style="height: 126px;">
        <input type="range" id="volumeSlider" min="0" max="9" step="1" value="1">
      </div>
      <span id="volume-display" style="font-weight: bold; display: none;">1</span>
    </div>
  `;

  gameWindow.insertAdjacentElement("afterend", playerContainer);

  // set up audio & logic
  const audio = getAudioElement();
  const startSong = activePlaylist.getCurrentSong();
  if (startSong) audio.src = startSong.audioLink;
  audio.volume = currentVolume / 9;

  const playPauseBtn = document.getElementById("playPauseButton");
  const prevBtn = document.getElementById("prevButton");
  const nextBtn = document.getElementById("nextButton");
  const progressBar = document.getElementById("progress-bar");
  const volumeSlider = document.getElementById("volumeSlider");
  const volDisplay = document.getElementById("volume-display");

  // play/pause
  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      updatePlayPauseIcon(true);
    } else {
      audio.pause();
      updatePlayPauseIcon(false);
    }
  });

  // next/prev
  const playSongAtIndex = () => {
    updateUI(activePlaylist);
    audio.src = activePlaylist.getCurrentSong().audioLink;
    audio.play();
    updatePlayPauseIcon(true);
  };

  nextBtn.addEventListener("click", () => {
    activePlaylist.playNext();
    playSongAtIndex();
  });

  prevBtn.addEventListener("click", () => {
    activePlaylist.playPrevious();
    playSongAtIndex();
  });

  // progress bar
  audio.addEventListener("timeupdate", () => {
    if (Number.isFinite(audio.duration)) {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBar.value = progress;
    }
  });

  audio.addEventListener("ended", () => {
    activePlaylist.playNext();
    playSongAtIndex();
  });

  // native progress click-to-seek functionality
  progressBar.addEventListener("click", (e) => {
    if (Number.isFinite(audio.duration)) {
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.right - rect.left;
      const seekTime = (clickX / width) * audio.duration;
      audio.currentTime = seekTime;
    }
  });

  // volume
  volumeSlider.addEventListener("input", (e) => {
    currentVolume = parseInt(e.target.value, 10);
    volDisplay.textContent = currentVolume;
    audio.volume = currentVolume / 9;
  });

  // initial play
  updateUI(activePlaylist);
  audio.play()
    .then(() => updatePlayPauseIcon(true))
    .catch(() => updatePlayPauseIcon(false));
}
setupMusicPlayer();

//#endcode
