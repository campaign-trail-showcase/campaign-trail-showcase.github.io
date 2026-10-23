// Opening screen.


// Psst: this is for replacing the site_description with this custom modal.
// taken from 2012LBM
(() => {
    const CONFIG = {
        titleColor: '#ffffff',
        imageHeight: '75px',
        imageWidth: '200px',
        imageSrc: 'https://static.wikia.nocookie.net/fallout/images/9/92/USA_Flag_Pre-War_13_star_alt.png',
        margin: '-10px',
        widthCalc: 'calc(100% - 85px)'
    };

    const inner = document.getElementById('inner_window_1');
    if (!inner || inner.children.length < 2) return;
    const [headingEl, contentEl] = inner.children;
    const gameStart = document.getElementById('game_start');
    const gameWindow = document.getElementById('game_window');


    Object.assign(contentEl.style, { marginLeft: CONFIG.margin, width: CONFIG.widthCalc });
    contentEl.innerHTML = generatePrologueHTML(CONFIG);


    function generatePrologueHTML({ titleColor, imageHeight, imageSrc }) {
        return `
	  <div style=\"align-items: center; border-radius: .3em 0 0 .3em; display: flex; height: ${imageHeight}; justify-content: center; overflow: hidden;\">
        <img src=\"${imageSrc}\" alt=\"The American flag.\" style = "transform: scale(0.5)" />
      </div>

  <ul><li><strong>Almost 300 years ago,</strong> America was founded by White men, The Founding Fathers, who chose not abolition.</li><li><strong>Almost 200 years ago,</strong> America prepared to watch a corrupt bargain that would later deliver Hayes the Presidency.</li><li><strong>Almost 100 years ago,</strong> America remembered the crook's stench floating in Washington that stuck to his unelected successor.</li>
    <p>As America is about to enter its 300 year anniversary, <strong><u>has anything changed?</u></strong></p>
    <p>It is easy for someone to acknowledge faults. It is harder to fix them. It is now your time to become the puppet.</p>
    <p>We are on the brink of nuclear war. Our nation is fighting Communism, both internally and externally.<br>Our nation is plagued by the rich, who live in ivory towers and trample the poor.
    <p>We have tried, yet we have failed to change anything. But to stop our wars and injustices, we will face internal and external opposition.<br>But, peace and righteousness shown somewhere quaint shall burn longer than no peace and righteousness at all.</p>
    <p>"Blessed are the peacemakers: for they shall be called the children of God." Matthew 5:9 (NIV) <br>"Those who trust in their riches will fall, but the righteous will thrive like a green leaf." - Proverbs 11:28 (NIV)</p>
    `;
    }
})();
let child = document.getElementById("inner_window_1").children[0];
child.innerHTML = "<h2><i style='color:#2e2e2e;'>One Nation, Under God, Indivisible...</i></h2>";


// Global text variables
e.SelectText = 'You shall see America in the year:';
e.CandidText = 'Please select the man who leads from afar:';
e.VpText = 'Confirm that he is the one to be by your side:';
e.HomeStateText = "Supposedly from:";
e.PartyText = "Member of the:";
e.ElectionPopup = "Election night has dawned upon us. Democracy shall play its course, just as our Founders have always wanted...";
e.LosePopup = "You shouldn't have lost. It is not the noble outcome.";
e.WinPopup = "Victory. Victory by the numbers.";
e.SelAnsContText = "An answer is all we need from you. Simple. Right, friend?";

// Favicon taken from Tough As Texas

document.querySelectorAll("link[rel*='icon']").forEach(el => el.remove());

const favican = document.createElement("link");
favican.rel = "icon";
favican.type = "png";
favican.href = "https://upload.wikimedia.org/wikipedia/commons/6/6d/Enclave_Symbol_Fallout_3_y_New_Vegas.png";
document.title = "2076 - A Steady Hand"; // taken from Little Big Man

document.head.appendChild(favican);

// These don't work. I really do want to figure out how to change the text of these, but, I have no idea on how to do it that works.
// visit_text = "Find the next state that you want the votes to be manipulated by the Enclave. Choose wisely for though the overall impact may be minimal, the opportunities to do so are finite.";
// visit_content = "Votes are to be manipulated in ${state.fields.name}. Confirm your selection.";
// confirm_visit_button = "CONFIRM.";
// no_visit_button = "ABORT.";

function ensureMetaViewport() {
  if (!document.querySelector('meta[name="viewport"]')) {
    const m = document.createElement('meta');
    m.name = 'viewport';
    m.content = 'width=device-width, initial-scale=1';
    document.head.appendChild(m);
  }
}

function applyGlobalStyles(css, id = 'app-theme') {
  if ('adoptedStyleSheets' in document && 'replaceSync' in CSSStyleSheet.prototype) {
    if (!applyGlobalStyles.sheets) applyGlobalStyles.sheets = {};
    if (!applyGlobalStyles.sheets[id]) {
      applyGlobalStyles.sheets[id] = new CSSStyleSheet();
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, applyGlobalStyles.sheets[id]];
    }
    applyGlobalStyles.sheets[id].replaceSync(css);
    return;
  }

  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('style');
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = css;
}

/// Deal with the 'choosing of answers' from LBM. Insert check mark for choosing answers from 2021DE. AND, insert candidate boxes from 2021DE too or LBM or whatever.

const css = `

      button:hover, select:hover {
                background: color-mix(in srgb, #fff 90%, #505168 45%);
                            transition: background-color 0.2s ease-in-out;
                            border-weight: 0.5em;
                            border-radius: 3px;
            }
            
			        #confirm_visit_button {
            background-color: #4ae148 !important;
            color: black !important;
            transition: background-color 0.2s ease-in-out;
            font-weight: bold !important;
        }
        #confirm_visit_button:hover {
            background-color: #3ca73a !important;
        }
                #no_visit_button {
            background-color: #ff6161 !important;
            color: black !important;
            transition: background-color 0.2s ease-in-out;
            font-weight: bold !important;
        }
        #no_visit_button:hover {
            background-color: #dd4949 !important;
        }
        #state_info,
        #overall_result_container {
            height: auto
        }

.person_image img {
    object-fit: cover;
    object-position: top;
}

        #state_result {
            min-height: 100%;
            height: auto;
            max-height: auto;
        }

        #visit_content h3,
        #feedback_window h3,
	#election_night_content h3  {
            display: none;
        }


        .mytooltipa {
            position: relative;
            display: inline-block;
            cursor: pointer;
            background-color: lightblue;
        }

        .mytooltipa .mytooltiptext {
            width: 240px;  /* Adjust as needed */
             text-shadow: none;
            background-color: lightblue;
            color: black;
            text-align: center;
            border-radius: 6px;
            padding: 10px;
            position: absolute;
            z-index: 99;
            bottom: 20%;
            left: 20%;
            margin-left: -90px;
            opacity: 0;
            transition: opacity 0.3s;
            border: 1px solid black;
            pointer-events: none;
            font-size:13px !important;
            line-height:1.5em !important;
            font-weight:normal !important;
            font-style: normal !important;
        }

        .mytooltia .mytooltiptext img {
            max-width: 240px;
            height: auto;
        }


        .mytooltipa:hover .mytooltiptext {
            opacity: 1;
            transition-delay: 0.5s;
        }

.mytooltipa:hover .bubble {
    opacity: 1;
    transition-delay: 0.5s;
}
.bubble {
    position: absolute;
     text-shadow: none;
    width: 250px;
    background: #fff;
    border-radius: 25px;
    padding: 16px;
    text-align: center;
    color: #000;
    opacity: 0;
    z-index: 99;
    bottom: 150%;  /* Shifted up further */
    left: -60px;  /* Shifted left more */
    margin-bottom: 10px;
    border: 1px solid black;
    pointer-events: none;
}

.bubble-bottom-left:before, .bubble-bottom-left:after {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    pointer-events: none;
    left: 62px;  /* Adjusted positioning */
    bottom: -28px;  /* Adjusted positioning */
}

.bubble-bottom-left:after {
    border-left: 35px solid black;
    border-right: 1px solid transparent;
    border-top: 1px solid transparent;
    border-bottom: 28px solid transparent;
}

.bubble-bottom-left:before {
    border-left: 24px solid #fff;
    border-right: 12px solid transparent;
    border-top: 12px solid #fff;
    border-bottom: 20px solid transparent;
    left: 63px;  /* Slight adjustment to position over the black triangle */
    bottom: -27px;  /* Slight adjustment to position over the black triangle */
    z-index: 100;  /* Make sure this is above the black triangle */
}

.mytooltipa:hover .bubble-bottom-left:before,
.mytooltipa:hover .bubble-bottom-left:after {
    opacity: 1;
}

            .inner_window_question h3 {
                background: linear-gradient(to bottom, #ffffff, #f3f3f3, #e7e7e7);
                border: 2.5px solid #a9945a;
                margin: 0.5px 0.5px 0.5px 0.5px;
				padding: 2px;
                border-radius: 10px 10px 15px 15px ;
            }

        .inner_window_question {
            min-height: 331px;
            display: flex;
            flex-direction: column;
            position: relative;
            border-radius: 6px; 
            background-color: #fbfaff
        }

        #question_form br { display: none; }

        #question_form form {
            display: grid;
            grid-template-columns: auto 1fr; 
            align-items: start;         
            row-gap: 1.5px;
            max-width: 930px
        }

        #question_form input[type="radio"] {
            grid-column: 1;
            margin: 0;
            align-self: center;           
        }

        #question_form input[type="radio"] + label {
            grid-column: 2;
            display: block;                  
            padding: 2px 4px; 
            margin: 0;      
            border: none; 
            
            transition: background-color 0.25s ease-in-out;
            cursor: pointer;
            width: min(100%, 930px);
        }


        #question_form input[type="radio"]:checked + label {
            background: #e8f6ff;
            border-bottom-color: #cdedff;
        }

        #question_form input[type="radio"] + label:hover,
        #question_form input[type="radio"] + label:focus {
				background: #d9f5fb;
                font-weight: bold;
        }



.rounded-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 4px solid black;
    margin: 1px;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    min-height: 0;
    
    /* ADD THESE: */
    flex: 1;  /* Allow boxes to grow/shrink equally */
    max-height: 100%;  /* Constrain to parent height */
    box-sizing: border-box;  /* Include border in height calculation */
    flex-shrink: 1;
}
.rounded-box img {
    max-height: 100%;
    min-width: 100%; // Basically, the width needs to be bounded to be exactly 100%. [On 9-8-26: No you don't. This breaks your stuff if you try to do this. Don't do this and don't change this to a proper CSS comment. Yes, the thing won't work. No, it's fine, don't worry about it.]
    width: 100%;
    max-width: 100%;
    object-fit: contain;
    flex-shrink: 1; 
}

.rounded-box h3 {
    flex-shrink: 1;
    min-height: 0;
    overflow: hidden;
}

            body #new_footer {
                order: 9999;                
                margin-top: auto;     
                position: static !important;   
                display: flex !important;   
                flex-wrap: nowrap !important;
                justify-content: center; 
                align-items: center;            
                gap: 5px;                    
                align-self: center !important;
                width: 66% !important;
                height: 30% !important;
                max-width: 900px !important;
                margin: 2px auto 0 !important;
                padding-inline: 12px;
                overflow: hidden;
                box-sizing: border-box;
            }

            .radio-option label .mytooltip {
              pointer-events: auto;
            }

            /* Remove the default appearance of the radio button */
            input[type="radio"] {
              appearance: none;
              -webkit-appearance: none;
              -moz-appearance: none;
            }

            /* Create a custom radio button */
            input[type="radio"] {
              position: relative;
              display: inline-block;
              width: 17.5px; /* reduce width */
              height: 17.5px; /* reduce height */
              border: 2px solid black;
              border-radius: 2px; /* add border radius */
            }

            /* Create the cross icon (hidden when not checked) */
            input[type="radio"]:after {
              content: "";
              position: absolute;
              display: none;
            }

            /* Show the cross icon when checked */
            input[type="radio"]:checked:after {
              display: block;
            }

            input[type="radio"]:checked:after {
                content: "";
                display: inline-block;
                background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Green_check.svg/3840px-Green_check.svg.png");
                background-repeat: no-repeat;
                background-size: contain; /* Or use a specific size like '10px 10px' */
                width: 20px;
                height: 20px;
                position: absolute; /* This takes the pseudo-element out of the document flow */
                left: -0.5px;
                top: -10px;
                z-index: 1;
            }

@keyframes fadeInScale {
  0% {
      opacity: 0;
      transform: scale(0.8);
  }
  100% {
      opacity: 1;
      transform: scale(1);
  }
}

.overlay_window {

      animation: fadeInScale 0.3s cubic-bezier(0.3, 1.2, 0.2, 1) forwards;
    background: #cbcbcbf2;
			background: repeating-linear-gradient(#e3e1e1f2, #rgba(226, 226, 226, 0.95)2px);
  border-radius: 15px 15px 20px 20px;
  box-shadow:
      0 0 10px rgba(179, 191, 204, 0.5),  
      0 0 20px rgba(199, 212, 228, 0.3),  
      0 0 40px rgba(199, 212, 228, 0.1);
  
  height: 62%;
  
  border-width: 6.23px;
  border-style: double;
  border-color: #323136;

}
#visit_window {
            height: auto;
        }

.overlay_window_content {
  color: #303234;
}

		.overlay_window img {
                border: 3px double #e4c30c;
        }


        #overall_result_container,
        #menu_container,
        #state_result_container {
         background-color:transparent
        }

#map_container{
  background-color: #fefefe;
  box-shadow: 
  0 0 10px rgba(252, 241, 171, 0.5),  
  0 0 20px rgba(253, 255, 197, 0.3),  
  0 0 40px rgba(250, 252, 211, 0.1); 
  position: relative;
  overflow: hidden;
}

        #recommended_reading_box {
        margin: 1rem auto;
        overflow-y: auto;
        max-height:70%;
            }

            #map_footer {
                display: flex;
                justify-content: center;
                margin: 1rem !important; /* necessary for the further reading section */
            }

        #state_info h3, 
        #overall_result h3,
        #state_result h3  {
            background-color: #cccccd;
        }
        
            #new_footer img,
            #new_footer video,
            #new_footer canvas {
                max-width: 50%;    
                height: 50%;      
                object-fit: scale-down; 
            }

			/* Achievement tab fixes */
			#achwindow {
				top: 5%;
				left: 25%;
				max-height: 70vh;
			}
			#achcontent {
				overflow: auto;
				overflow-y: scroll;
				max-height: 70vh;
			}
			#achwindowheader { /* sometimes the Achievements header won't load, so this is a lazy fix */
				display: block;
			}
			#cheatMenu, #showBenefitCheckButton {
				margin-top: 1em;
			}
			#achwindow > #achcontent button {
			  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf;
			  font-family: 'Microsoft Sans Serif', sans-serif;
			  color: #fff;
			  background: linear-gradient(#4a4ba9, #4a6ea9);
			}

			#achwindow > #achcontent button:focus {
			  background: linear-gradient(#790303, #4a6ea9);
			  outline: 1px dotted #000;
			  outline-offset: -4px;
			}

			.achSubHolder.visible {
			  display: flex !important;
			  flex-wrap: wrap !important;
			  justify-content: center !important;
			  gap: 15px !important;
			  width: 100% !important;
			  padding: 10px !important;
			  box-sizing: border-box !important;

			  opacity: 1 !important;
			  max-height: none !important;
			  visibility: visible !important;
			}

			.achSubHolder {
			  padding: 0 !important;
			  border: none !important;
			}

			.achBox {
			  margin: 0 !important;
			  width: calc((100% - 30px) / 3) !important;
			  max-width: none !important;
			  height: 350px !important;
			  display: flex !important;
			  flex-direction: column !important;
			  align-items: center !important;
			  justify-content: flex-start !important;
			  padding: 15px !important;
			  box-sizing: border-box !important;
			}

			/* extra media queries */
			@media (max-width: 768px) {
			  .achBox {
				width: calc((100% - 15px) / 2) !important;
			  }
			}

			@media (max-width: 480px) {
			  .achBox {
				width: 100% !important;
			  }
			}

			.achImageHolder {
			  width: 90px !important;
			  height: 90px !important;
			  margin: 0 0 10px 0 !important;
			  flex-shrink: 0 !important;
			}

			.achTitle {
			  width: 100% !important;
			  font-size: 13pt !important;
			  margin: 0 0 10px 0 !important;
			  min-height: 40px !important;
			  display: flex !important;
			  align-items: center;
			  justify-content: center;
			  flex-shrink: 0 !important;
			  line-height: 1.1 !important;
			}

			.achText {
			  display: flex !important;
			  flex-direction: column !important;
			  justify-content: center !important;
			  align-items: center !important;

			  width: 100% !important;
			  height: auto !important;
			  flex-grow: 1 !important;

			  margin: 0 !important;
			  padding: 10px !important;
			  box-sizing: border-box !important;
			  overflow-y: auto !important;
			  text-align: center !important;
			  white-space: normal !important;
			}
			@media (max-width: 768px) {
			  .achSubHolder.visible {
				grid-template-columns: repeat(2, 1fr) !important;
			  }
			}
			@media (max-width: 480px) {
			  .achSubHolder.visible {
				grid-template-columns: 1fr !important;
			  }
			}


`;

// necessary because NCT deals with a couple of
// things differently than CTS
const nctFixes = `
.game_header {
  height: 25px !important;
}
html, body {
        height: 100%;
        margin: 0;
    }
    .container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .content_box {
        flex: 1;
    }
    #game_window {
        min-height: 600px;
        display: flex;
        flex-direction: column;
    }
#custom_vp_switcher {
  border: .1em solid #d23030;
  padding: .25em 1em;
  border-left: none;
  border-right: none;
}

`;

ensureMetaViewport();
applyGlobalStyles(css);

const isLiveSite = window.location.hostname === "www.newcampaigntrail.com" || !!document.querySelector('a[href*="github.com/newcampaigntrail"]');
if (isLiveSite) {
    if (typeof applyGlobalStyles === 'function') {
        applyGlobalStyles(nctFixes, 'nct-fixeroo');
    } else {
        const style = document.createElement('style');
        style.id = 'nct-fixeroo';
        style.textContent = nctFixes;
        document.head.appendChild(style);
    }
}

// This is a dropdown for all the opt-in
// or opt-out features in the mod
(function () {
  'use strict';

  const CONFIG = {
    targetId: 'difficulty_level',
    containerId: 'mod_options_container',
    storageKey: '2076_custom_preferences', //taken from AOC, which was taken from LBM.
    features: [
      {
        id: 'dynamic_en',
        text: "Dynamic election night",
        desc: "Enables a fluid, realistic election night simulation instead of the in-game election night. Similar to that of The Political Process.",
        flag: 'dynamicEN',
        default: false
      }
    ]
  };
  
  const modMenuStyles = new CSSStyleSheet();
	 modMenuStyles.replaceSync(`
            #${CONFIG.targetId} { display: inline-flex; flex-wrap: wrap; gap: 2.5em; align-items: flex-start; }
            #${CONFIG.containerId} { display: flex; flex-direction: column; width: 260px; }
            .mod-desc-box {
                margin-top: 10px; padding: 10px; background: rgba(255,255,255,0.35);
                border: 1px solid #ccc; border-radius: 4px; min-height: 90px;
                font-size: 0.95em; display: flex; flex-direction: column; justify-content: space-between;
            }
            .mod-desc-box p { margin: 0 0 10px 0; line-height: 1.3em; }
            .mod-toggle-row { display: flex; align-items: center; padding-top: 5px; border-top: 1px solid rgba(0,0,0,0.1); }
            .switch { position: relative; display: inline-block; width: 40px; height: 20px; margin-right: 10px; }
            .switch input { opacity: 0; width: 0; height: 0; }
            .inner_window_w_desc .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; transition: .4s; border-radius: 20px; }
            .inner_window_w_desc .slider:before { position: absolute; content: ""; height: 14px; width: 14px; left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%; }
            .inner_window_w_desc input:checked + .slider { background-color: #208604; }
            .inner_window_w_desc input:checked + .slider:before { transform: translateX(20px); }
            .status-label { font-weight: bold; font-size: 0.9em; text-transform: uppercase; }
            .status-enabled { color: #0d3d00; }
            .status-disabled { color: #2d2d2d; }
    `);

  if (!document.getElementById("mod_option_styles")) {
	document.adoptedStyleSheets = [...document.adoptedStyleSheets, modMenuStyles];
  }
  
  // storage
  const getSavedSettings = () => {
    try {
      return JSON.parse(localStorage.getItem(CONFIG.storageKey)) || {};
    } catch (e) { return {}; }
  };

  const saveSettingToStorage = (flag, value) => {
    const current = getSavedSettings();
    current[flag] = value;
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(current));
  };


  // helpers
  const getFlag = (key, def) => {
    window.campaignTrail_temp = window.campaignTrail_temp || {};
    if (!window.campaignTrail_temp.hasOwnProperty(key)) window.campaignTrail_temp[key] = def;
    return window.campaignTrail_temp[key];
  };
  const setFlag = (key, val) => window.campaignTrail_temp[key] = val;

  const createEl = (tag, props = {}, children = []) => {
    const el = document.createElement(tag);
    Object.entries(props).forEach(([key, val]) => {
      if (key === 'style') Object.assign(el.style, val);
      else if (key === 'dataset') Object.assign(el.dataset, val);
      else el[key] = val;
    });
    children.forEach(child => el.appendChild(child));
    return el;
  };

  function manageModOptions() {
    const target = document.getElementById(CONFIG.targetId);
    if (!target || document.getElementById(CONFIG.containerId)) return;

    const frag = document.createDocumentFragment();

    let descText, toggleInput, statusText, dropdown;

    const wrapper = createEl('div', { id: CONFIG.containerId }, [
      createEl('h3', { textContent: 'Special mod settings:' }),
      dropdown = createEl('select', {
        style: { width: '100%', padding: '5px' }
      }),
      createEl('div', { className: 'mod-desc-box' }, [
        descText = createEl('p', {}),
        createEl('div', { className: 'mod-toggle-row' }, [
          createEl('label', { className: 'switch' }, [
            toggleInput = createEl('input', { type: 'checkbox' }),
            createEl('span', { className: 'slider' })
          ]),
          statusText = createEl('span', { className: 'status-label' })
        ])
      ])
    ]);

    const savedSettings = getSavedSettings();

    CONFIG.features.forEach((f, i) => {
      dropdown.add(new Option(f.text, i));

      let initialValue;
      if (savedSettings.hasOwnProperty(f.flag)) {
        initialValue = savedSettings[f.flag];
      } else {
        initialValue = f.default;
      }

      setFlag(f.flag, initialValue);
    });

    const updateState = () => {
      const feat = CONFIG.features[dropdown.value];
      descText.textContent = feat.desc;

      const isOn = getFlag(feat.flag, feat.default);
      toggleInput.checked = isOn;
      toggleInput.dataset.flag = feat.flag;

      statusText.textContent = isOn ? "Enabled" : "Disabled";
      statusText.className = `status-label ${isOn ? 'status-enabled' : 'status-disabled'}`;
    };

    dropdown.addEventListener('change', updateState);

    toggleInput.addEventListener('change', (e) => {
      const flag = e.target.dataset.flag;
      const isChecked = e.target.checked;

      setFlag(flag, isChecked);
      saveSettingToStorage(flag, isChecked);

      updateState();
    });

    updateState();
    frag.appendChild(wrapper);
    target.appendChild(frag);
  }

  window.manageModOptions = manageModOptions;
})();


// This is a catch-all mutation observer so that
// we keep one having them all run at once
function addDynamicEN() {
    var difficultyDiv = document.getElementById("difficulty_level");
    if (difficultyDiv && !document.getElementById("dynamicEN_checkbox")) {

        var dynamicForm = document.createElement("form");
        dynamicForm.name = "dynamic_en_selection";

        var dynamicHeader = document.createElement("h3");
        dynamicHeader.textContent = "Enable dynamic election night?";
        dynamicForm.appendChild(dynamicHeader);

        var dynamicCheckbox = document.createElement("input");
        dynamicCheckbox.type = "checkbox";
        dynamicCheckbox.id = "dynamicEN_checkbox";
        dynamicCheckbox.checked = true;
        dynamicForm.appendChild(dynamicCheckbox);

        difficultyDiv.appendChild(dynamicForm);

        // Initialize flag
        window.campaignTrail_temp = window.campaignTrail_temp || {};
        window.campaignTrail_temp.dynamicEN = true;

        dynamicCheckbox.addEventListener("change", function() {
            if (this.checked) {
                window.campaignTrail_temp.dynamicEN = true;
            } else {
                window.campaignTrail_temp.dynamicEN = false;
            }
        });

        // Adjust difficulty header safely
        var difficultyForm = document.querySelector('form[name="difficulty_level_selection"]');
        if (difficultyForm) {
            var difficultyHeader = difficultyForm.querySelector('h3');
            if (difficultyHeader) {
                difficultyHeader.textContent = "How is America's future?";
            }
        }

        // Style forms safely
        var forms = difficultyDiv.querySelectorAll("form");
        forms.forEach(f => {
            f.style.display = "inline-flex";
			f.style.flexDirection = "column";
			f.style.alignSelf = "center";
        });
    }
}

// Unified observer
const elsToReplace = [
    { selector: "#confirm_visit_button", find: "YES", replace: "CONFIRM" },
    { selector: "#no_visit_button", find: "NO", replace: "ABORT" },
    { 
        selector: ".visit_text", 
        find: "Use this map to click on the next state you wish to visit. Choose wisely and focus your efforts where they will have the most impact.", 
        replace: "Find the next state where you want fraudulent votes to be stuffed beforehand. These opportunities are finite, so choose carefully." 
    },
    { selector: "#no_feedback_button", find: "Don't give me advice", replace: "Shut up already. I don't need narration. I'm in charge here." },
    { selector: "#ok_button", find: "OK", replace: "PROCEED." },
    { selector: "#resume_questions_button", find: "Back to the game", replace: "I'm done map-gazing." }
];

function handleGameWindowMutations() {
    // text replacements
    for (const { selector, find, replace } of elsToReplace) {
        const el = document.querySelector(selector);
        if (el && el.textContent.includes(find)) {
            el.textContent = el.textContent.replace(find, replace);
        }
    }

    // advisor toggle button text
    const advisorBtn = document.querySelector("#AdvisorButton");
    if (advisorBtn) {
        if (advisorBtn.textContent.includes("Disable advisor feedback")) {
            advisorBtn.textContent = advisorBtn.textContent.replace("Disable advisor feedback", "I don't want narration.");
        } else if (advisorBtn.textContent.includes("Enable advisor feedback")) {
            advisorBtn.textContent = advisorBtn.textContent.replace("Enable advisor feedback", "Give me narration again.");
        }
    }

    // visit window renaming
    const visitP = document.querySelector("#visit_content p");
    if (visitP) {
        const match = visitP.textContent.match(/visit (.+?)\s*--/);
        if (match) {
            visitP.innerHTML = `<strong>Votes are to be manipulated in <u style="color: #df0c1a;">${match[1]}.</u> -- Confirm?</strong>`;
        }
    }

    // dynamic election night
    if (typeof addDynamicEN === 'function') {
        addDynamicEN();
    }
}

const targetWindow = document.getElementById("game_window") || document.body;

const unifiedObserver = new MutationObserver(handleGameWindowMutations);

unifiedObserver.observe(targetWindow, {
    childList: true,
    subtree: true
});

// run on initial load
handleGameWindowMutations();


// CSS
child.style.textAlign = "center"; // horizontal centering
child.style.marginTop = "0";      // stick to top

// Forces the background to be centered
function appendStyle() {
    if (!document.querySelector('meta[name="viewport"]')) {
        const metaTag = document.createElement('meta');
        metaTag.name = "viewport";
        metaTag.content = "width=device-width, initial-scale=1";
        document.head.appendChild(metaTag);
    }
}

const gameStart = document.getElementById('game_start');
    const gameWindow = document.getElementById('game_window');

    if (gameStart) {
        gameStart.innerHTML = '<strong>Let us begin, America.</strong>';
        const clearHeight = () => { if (gameWindow) gameWindow.style.removeProperty('height'); };
        if (window.jQuery) $('#game_start').on('click', clearHeight);
        else gameStart.addEventListener('click', clearHeight);
    }

let style = document.createElement('style');
style.type = 'text/css';
style.id = 'dynamic-style';

style.innerHTML = `
  .campaign_trail_start_emphasis {
    background-color: #bcbcbc;
  }
  a:-webkit-any-link {
    color: #000000;
  }
`;

document.head.appendChild(style);

campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 20,
        "fields": {
            "year": 2076,
            "display_year": "2076 - A Steady Hand",
            "summary": "The shining city upon a hill is a promised land. This promised land prefers to wrap itself in a safety blanket of a nostalgic, bygone age. The past is comfy. The problems of today don't really matter at all. Since 2051, the United States of America has stumbled through unresolved crisis after crisis. As the world continues to squabble over resources, America is still standing. In the mean time, however, discontentment brews throughout America's underclass: The poor, the weak, and the weary.<ul><li>Civil strife, the Sino-American War, and class-based resource inequality cast a long shadow over <b>President Dirk Rodney's Administration.</b> And yet, he's gunning up for an illegitimate third-term bid.</li><li>The <b>directionless Democrats</b> have an opportunity to destroy their 'incompetent rivals' for good. Americans want change, but, the question is whether the Democrats even want any change to occur.</li></ul>",
            "site_description": "America's darkest hour has arrived in 2076. As America faces war with China, crises, and general disillusionment, the façade of a retrofuturistic 1950s America is preparing to crumble into ruin. The pre-apocalyptic era of the <i>Fallout</i> series awaits you.",
            "image_url": "https://i.imgur.com/uQnlGMp.png",
            "winning_electoral_vote_number": 270,
            "advisor_url": "https://i.imgur.com/1gAMlcW.gif",
             "recommended_reading": `<div><div style=\"text-align: left;margin: auto 5em;\"> <span id=\"rpage0\" style=\"display: inline-block;\"> <h2>2076 - A Steady Hand</h2><p>The world of pre-war Fallout is fundamentally set in a world that is eerily similar to ours. The world is not peaceful. The world is not naturally a just world. Greed, corruption, and intolerance for those who are not ourselves runs rampant in both worlds. Evil is not necessarily the caricatured type of raving genocidal maniacs who keep conveniently spelling out to the world their plans for world domination (though the world does have some of those types). ‘Evil’ is a moral concept that ranges on a relativistic spectrum.</p><p>Evil begets further evil. Humans are not naturally evil or naturally good. What humanity is is a species that has consistently done evil and good. Hatred, intolerance, and bigotry are considered ‘evil’ because these attributes seek to divide humanity.</p><p>What we see in life is that there is often unrest and no peace. The world itself is not peaceful. We may say that this place in the world is peaceful, but, that is only necessarily true in that subsection of the world. Other sections of the world are in civil strife or outright armed conflict. Hatred, intolerance, and bigotry often take root when a person or society feels that they have no control. There must be an ‘other’ to blame.</p><p>But what ‘other’ is there but ourselves? What ‘other’ is there besides whatever is happening with our little skull of ours? What ‘control’ do we even have in life?</p><p>If our terminal breath results in death and the sands of time shall forget all those in the longest time span possible, where shall we go next?</p><p><br>We have been condemned to die.<br>We have been forced to see injustice, bigotry, and war grip the earth.</p><p>We may try to change, but, there is always going to be someone after who will topple it, not because they are a caricature of evil, but because it is just too sweet to simply let someone else not exploit the situation for their own gain.</p><p>But what can we control then?</p><p>Our own inner peace.</p><p>But how do we attain it? Is it through good works by living a life that brings good to the world?</p><p>That is a start. To choose to try to live a better life, one step at a time, by doing good unto others can make the world a slightly better place. Trying to help your neighbors, giving charity to those who need charity, and doing good for the sake of doing good is in of itself noble. If people deliberately chose, not sparing their outside circumstances, to choose to help the lives of other people who are worse off than them, overall better, the world would be a better place. Doing good makes you, at times, feel that you good because helping out others is, in a sense, sacrificing your own time and effort to serve other people. It's a selfless thing to do in a world that is full of people who always want to one-up each other.</p></span>
             </div>      `, //Taken from Tough as Texas
            "has_visits": 1,
            "no_electoral_majority_image": "../static/images/2012-no-majority.jpg"
        }
    }
]

// From Little Big Man

campaignTrail_temp.difficulty_level_json = [
  {
    "model": "campaign_trail.difficulty_level",
    "pk": 1,
    "fields": {
      "name": "War, war never changes.",
      "multiplier": 0.90
    }
  },
  {
    "model": "campaign_trail.difficulty_level",
    "pk": 2,
    "fields": {
      "name": "A land of War and Peace.",
      "multiplier": 0.95
    }
  }
];

campaignTrail_temp.modBoxTheme = {
"header_color": "#ac9965",
"header_text_color": "#000000",
"header_image_url": "https://i.imgur.com/wVMrEzU.png",
"description_text_color": "#000000",
"description_background_color": "#ffffff",
"main_color": "#929292",
"secondary_color": "#ac9965",
"ui_text_color": "#000000"
}

campaignTrail_temp.temp_election_list = [
    {
        "id": 20,
        "year": 2016,
        "is_premium": 0,
        "display_year": "2076"
    }
]

//Taken from 1964: Midnight. It's just that good for this stuff.

 let changeGameDisp = (hide) => {
  disp = "";
  if (hide) {
    disp = "none";
  }
  document.getElementsByClassName("inner_window_w_desc")[0].style.display = disp
};
e.creditsPage = () => {
  credits_html = `
    <h3>Special Thanks to:</h3>
    <p><font color='#FFA500'>Bailey Lagopus,</font> creator of 2076: The End</p>
    <p>AND</p>
    <p><font color='#ffbf00'>StrawberryMaster,</font> a legendary TCT coder.<br>He helped me by fixing my spaghetti mutation observer memory leakage, optimizing my code, and giving general coding help.<br>He helped me with the feedback image hiding sorcery, question counter wizardry, created an extremely useful variable debug logger, tooltip performance optimization, and even gave me some code for the achievement handlers and the 'anti-cheat' system handler. He also helped playtest and gave me some pointers on how to avoid candidate image stretching.<br>His <font color='#fcc7c7'>Womble</font> repository was very useful! I cannot stress how much he helped me along this journey!</p>
    <p>AND</p>
    <p><font color='#b3ff00'>Cod Author,</font> a major source of understanding for issue scores as well as the issue changing function. Helped format the stupidly large number of endings in this mod, which were a mess and, props to <font color='#b3ff00'>Cod Author</font>. Also helped rewrote one of my ending slides 'Hotline from Beijing to D.C.'.<br>Help is help, no matter where it comes from.</p><br>
    <h3>Coding Tools Used Created By</h3>
    <p><font color='#ffbf00'>Jet's Code 2 Fork - StrawberryMaster</font></p>
    <p>Code 1 Tool - JetSimon<p><br>
    <h3>Writing and Coding mainly done by:</h3>
    <p>Libertas, a Christian<p><br>
    <h3>Banners</h3>
    <p><font color='#FFA500'>Bailey Lagopus</font></p>
    <br><h3>Playtesting</h3>
    <p><font color='#b3ff00'>Cod Author</font> (Hired on 9-30-26)</p><br>
    >p><font color='#ffbf00'>StrawberryMaster</font> (Hired on 10-20-26 for final blind playtesting before release)</p><br>
    <p>None at the Moment (From the start of the mod to 9-30-26)</p><br><br>
 <h3>Coding Bits That I Pillaged</h3>
<p>The original idea of a Pre-Great-War Fallout - 2076: The End (the base mod)</p>
<p>Overall Credit Page - 1964 Midnight</p>
<p>Code on how to hide the electoral map and other buttons - March on Washington</p>
<p>Credit Page of the Credit Page (yes.) for the author's note and author's disclosure - 1936 - March on Washington</p>
<p>Candidate Boxes + Turnout Drift (as provided by <font color='#ffbf00'>StrawberryMaster</font> on <font color='#fcc7c7'>Womble</font>) - Things that Never Were</p>
<p>CYOA Tunnel Function - The W. Team</p>
<p>Much of the underlying CYOA infrastructure - Things that Never Were</p>
<p>Candidate Name Changer in Code 1 - Things that Never Were</p>
<p>vpTable VP switcher - Things that Never Were</p>
<p>Endings - An Assortment from Our Revolution, All the Way, 2008 ICARUS, Hope, Ross for Boss, A Billionaire A Revolutionary, Obamanation</p>
<p>Achievement Pop-ups - Ross for Boss  (as provided by <font color='#ffbf00'>StrawberryMaster</font>)</p>
<p>Candidate Switching Functions - 2008 ICARUS</p>
<p>RNG style coding - 2008 ICARUS</p>
<p>Styling for the Map_Container - All the Way</p>
<p>Mid-Game Character Switching - All the Way</p>
<p>Knowhow on coloring the Background - All the Way</p>
<p>Candidate Issue and State Multiplier Shifting Functions - All the Way</p>
<p>Variable Tracker of 'By the Numbers' - All the Way</p>
<p>Variable Tracker of 'Your Notes' - 2016: Tough as Texas</p>
<p>Variable Tracker of 'Democratic Party' - 2008 ICARUS</p>
<p>FavIcon Code (the little Enclave symbol in the corner of the game) - Actually from Little Big Man</p>
<p>Further Reading Base - 2016: Tough as Texas</p>
<p>Opening Screen Base - Little Big Man</p>
<p>Browser Game Title Base Code - Little Big Man</p>
<p>Removing the light blue background on the map screen - Little Big Man</p>
<p>Question-related code using CSS flexbox to arrange and highlight answers - Little Big Man</p>
<p>'Black Arts' idea - More than Ever</p>
<p>The Fallout 2 and Fallout TV Easter-egg functions - Our Revolution</p>
<p>Inflation and State Issue Shifting Mechanics - Our Revolution</p>
<p><font color='#ffbf00'>StrawberryMaster's</font> <font color='#fcc7c7'>Womble</font>. Seriously! It's that good for many mechanics present in the mod.<br>A few of them listed are the dynamic election, polling graph, restore/remove candidate, turnout changer, and the data visualizations!</p>
<p>Campaign Sign Removal - 1976: Good For Me</p>
<p>Code to Change Issue Score Names and Tooltips Midgame - 21028</p>
<p>Code to Modify the Radio Buttons for Questions - 2021: DE</p>
<p>Tooltip System - Found on Internet Archive through Nina's Website</p>
<p>{{opLast}} function - 1912: The Men in the Arena</p>
<p>Some inspiration for the intro with regards to the /"" thingy - UBCM</p>
<p>Modifying the Game Buttons - From the old #mod-help channel on the orginal The Campaign Trail discord (r.i.p.)</p>
<p>Dynamic Election Toggler (but modified by AI and by <font color='#ffbf00'>StrawberryMaster's</font>) - 2028 - An Old Cycle</p>
<p>And the many, many other mods that have helped contribute to this mod!</p>
<br>
<br>
<h3>Author's Note:</h3>
<br>
    <div style='width: 70%;text-overflow: ellipsis;text-align:center;display: block;margin-left: auto;margin-right: auto;'>
<p>Thank you for playing my mod, even if it is a mishmash of other mods and their ideas. I hope you have fun and manage to master this mod, despite this mod's difficulty!</p>
    </div>
<h3>Author's Disclosure:</h3>
    <div style='width: 70%;text-overflow: ellipsis;text-align:center;display: block;margin-left: auto;margin-right: auto;'>
<p>As I am a rather new coder and don't know much about coding, I have used some AI, such as ChatGPT, Grok, Deepseek, and Claude Sonnet, for some of the coding as part of this mod. Also, for the state modifiers that had to be handcoded, I just gave ChatGPT my array and then told it to only increment by +0.02 to +0.05. Doing it by hand failed to give me a good result, so, I thought that cost-vs-time sink, well, let an Abominable Intelligence do the work for me here. My result was terrible. How much worse could an AI be if I give it a small range such as that plus do some additional automated +/- 0.1 also? But, writing-wise, I wrote the writing entirely on my own, even if I did borrow some ideas from other mods, such as 2076: The End, Things that Never Were, and All the Way. I used AI to give me more context on information that I am not acquainted with for my ending slides. That way, I could manually edit my ending slides. However, I have not used the AI to write for me. The writing is entirely human-written. It is what it is, unfortunately.</p>
    </div>
    <h1><font color='#D3D3D3'>Thanks for playing A Steady Hand!</font></h1>
  `
  changeGameDisp(true);
  var spacer = document.createElement("amongusspacerthisisntarealelement");
  spacer.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
  document
    .getElementsByClassName("inner_window_w_desc")[0]
    .children[1].appendChild(spacer);
    changeGameDisp(true);
    var menuHeader = document.createElement("div");
    menuHeader.classList.add("inner_window_front");
    menuHeader.innerHTML = `<h1 style='font-family: "Times New Roman";'><font color='#D3D3D3'>Credits</font></h1>`;
    menuHeader.id = "SOTUheader";
    menuHeader.style = "height: 50px;background-color:#2d2d2d";
    var newMenu = document.createElement("div");
    newMenu.classList.add("inner_window_front");
    newMenu.id = "SOTUmenu";
    newMenu.style = `height:260px;background-color:#2d2d2d;color:white;overflow-y: scroll;`;

    newMenu.innerHTML = credits_html;
    let z = document.getElementById("game_window");
    var backButton = document.createElement("button");
    backButton.style =
      "position: relative; bottom: -13px; left: -380px; width: 150px; height: 80px;font-size:40px;padding-top:5px;padding-left:8px";
    backButton.id = "backSOTUBtn";
    backButton.innerHTML = `<b>BACK</b>`;
    backButton.onclick = function () {
      document.getElementById("SOTUheader").remove();
      document.getElementById("SOTUmenu").remove();
      document.getElementById("backSOTUBtn").remove();
      changeGameDisp(false);
    };
    z.appendChild(menuHeader);
    z.appendChild(newMenu);
    z.appendChild(backButton);

}

campaignTrail_temp.credits = "<button onclick='e.creditsPage()'>Libertas aka u/Duck_Quacks</button>"

// necessary so that the right election files are loaded -SM
setInterval(() => {
    const electionSelect = document.getElementById("election_id");
    if (electionSelect) {
        if (electionSelect.value === "20") {
            campaignTrail_temp.code2_id = "2073-2076";
        }
    }
}, 100);

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
            "question_count": 30,
            "default_map_color_hex": "#C9C9C9",
            "no_state_map_color_hex": "#999999"
        }
    }
]

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 152,
        "fields": {
            "first_name": "Dirk Edwin",
            "last_name": "Rodney",
            "election": 20,
            "party": "'The Republican Party'",
            "state": "The United States",
            "priority": 1,
            "description": "It's the same old rot that's permeating through America's institutions. Same as it was since that jowly crook hijacked the system and let his successors let the rot embed itself in America's institutions. President Dirk E. Rodney is no exception to that trend. Presidents typically seclude themselves from the plebeians. Right now, Rodney has a rare opportunity to run for an illegal third term. Its a once in a 300-year-thing to 'safeguard America's People'.<br><br>Rodney is not known for his creativity. His policies are merely continuations of plans that have been set in motion long ago. He needs only to rehearse his voice and follow his trusted counsel. It is why he deserves to be called a crook. A liar. A puppet. Puppets don't control the narrative. They never do. He will leave behind no legacy.<br><br>After all, he knows which way the wind blows. As of now, the wind 'says to stay the course'. Change hasn't happened before. Why would it happen now? But change needs not happen overnight. Perhaps, the puppet's strings are not as yankable as they should be. Perhaps, he is something more than that as long as he plays the long con... <b><i>Perhaps...</i><b>",
            "color_hex": "#d53838",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://static01.nyt.com/images/2011/07/02/nyregion/obit-poff/obit-poff-jumbo.jpg",
            "electoral_victory_message": "\\\"<h3>Congratulations, Mr. President</h3><p>In spite of a hard-fought challenge by those 'Democrats', you came out on top. It was really not a contest, was it?.</p><p>You were always the favorite to win, but a lot could have gone wrong. What if the Democrats, such as under Young, dared to rally the American public against the Commies? What if the Enclave failed to save you? On the political front, you can work a Democratic House to agree with your agenda. The Democrats and the Republicans, after all, are under the same banner: The Enclave’s banner. Internationally, there is a war to be won, Mr. President. Let’s show the Commies what true American might is.</p>",
            "electoral_loss_message": "<h3>Just a setback</h3><p>In spite of you being the favorite, things seemed to not click. How? The Enclave were in control the entire time! It was guaranteed from behind the scenes: Rodney would win. Young would fall.</p><p>But let bygones be bygones. Stephenson can’t win. His agenda’s gonna go up in flames anyways. The Enclave and the Elite will ensure that Stephenson can’t govern. Besides, the rumor is that Stephenson’s time will come. A corporate-endorsed impeachment. That’ll get Stephenson rattled for sure…</p>\\\", ",
            "no_electoral_majority_message": "<h3>\"A setback for a while. Congratulations, President Rodney.</h3><p>In spite of you being the favorite, you really made the thing too close for our liking, Rodney. How did you even manage that?  It was guaranteed from behind the scenes: Rodney would win. Stephenson would fall. And the American public should've been none the wiser. Now, you've really done it, Rodney.</p><p>The House is ruled by Democrats, with a comfortable majority. Stephenson might think that those Democrats will vote for him. That is not going to be the case. Enclave and elite money talks. Let Stephenson think that he'll win in the House. The rug'll come slipping from under his feet on the 19th of December. The old Conservative South is still in the Enclave's grasp, Rodney. The rest of the Democrats? You already know how its going to end. And you best be happy that a special someone is going to end up the winner when the balloting's done.</p><p>But you've got an even bigger debt to owe, Rodney. You've forced the Enclave's hand to play a dirty trick. Just so you know, the American people seeing that the Enclave's rigged the election in the halls of the House of Representatives isn't going to win you any favors from the Enclave or the American populace. You think that being in hiding was free, Rodney? You think that your obedience is good enough? Let's get one thing straight: You'll win this war on our terms. Now show the Commies what America's got left, but remember, a man who's been given favors has to pay those favors back.</p>",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 156,
        "fields": {
            "first_name": "Alfred Tabor",
            "last_name": "Richardson",
            "election": 20,
            "party": "The Grand Old Party",
            "state": "'Alabama, Dixie'",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://bloximages.chicago2.vip.townnews.com/lagunabeachindy.com/content/tncms/assets/v3/editorial/4/5e/45e90f9e-ba87-53ea-a77c-d6a3b87b6b0e/66f62e17bc4a4.image.jpg",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "He's the most overt of the puppeteers. It's that clear. He once called himself a true Southerner. It's to live and die for the Republican Party according to this man. And what better way to show his undying loyalty than zealously defending the Rodney Administration? Pushes for automation, invasions of Mexico and Canada, and constant quarantine for the masses are 'some of his policies' that have benefitted America's government and corporations.<br><br>It's an honor to be considered an indispensable part of the Rodney Administration. He's most humbled to be serving America for a third term. Let the public cast scornful glares at the absent President and Vice President. The Enclave protects, just as it does for President Rodney. There is no need to fear anything.<br><br>It wouldn't be right for the ticket to hate each other. The populist Democrats may privately insinuate otherwise, such as Senator Sam Blackwell of West Virginia or Senator Murphy Alston Young of Colorado. Nevertheless, Richardson is loyal. He will stay by the Republicans' side, even if it means some loose ends may need to be cut off...",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 153,
        "fields": {
            "first_name": "George Oliver",
            "last_name": "Neville",
            "election": 20,
            "party": "The Democratic Party",
            "state": "San Diego, California, South West Commonwealth",
            "priority": 0,
            "description": "Governor George O. Neville has had relatively successful consecutive terms as the Governor of California. Winning with comfortable margins as an inoffensive moderate Democrat, Governor Neville isn't all that inspiring. He's guided California smoothly through the 'turbulent' years of 2066 to 2074 without any major hiccups or recall attempts.<br><br>Term-limited, constrained by the ceiling of how electable a moderate Democrat can possibly be during these troubling times, and non-divisive. Neville's quickly approaching his political ceiling in California. He's not exactly politically exciting enough to become Representative or Senator. He's served well; he should retire gracefully.<br><br>California's loss, however, might make America better off. The ever-incompetent President Dirk Edwin Rodney governs over an ever-deteriorating America. Democratic challengers have twice failed to remove that man. And now, President Rodney dares to run for a third term. <b><i>Does America need a new steady hand?</i><b>",
            "color_hex": "#2545b9",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://i.imgur.com/UKB0JFG.png",
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
        "pk": 159,
        "fields": {
            "first_name": "Samuel Ulf",
            "last_name": "Nordeck",
            "election": 20,
            "party": "'The Democratic Party'",
            "state": "Milwaukee, Wisconsin, Midwest Commonwealth",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://i.imgur.com/wwq9YRK.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "Precarious. That is the state of the national Democratic Party at this point in time. President Rodney should never have been elected to the Presidency in the first place. The Democrats now have the greatest opportunity to win back the Presidency from the 'Republicans'. Chairman Samuel Ulf Nordeck is the one to find the right champion.<br><br>The American people clearly want the political pendulum to swing the other way. However, the Democratic camp is disparate and scattered. Back in 2068, failed last-minute conservative hawkish pivots by Democratic President Martin saw President Martin lose to President Rodney. Similarly, in 2072, an unexciting moderate Democrat named Steve Norton also lost to President Rodney. Now, in 2076, It's obvious that the Democrats must pivot left to win.<br><br>The 'Party' won't have any of that. Chairman Nordeck won't either. Anti-war liberals and loud progressives are demanding their turn. The writing on the wall is clear: America is enraged. Only the left can depose Rodney. It's going to be a hard battle this November for the Democrats. And so far, 'the right champion' just hasn't appeared yet...",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 154,
        "fields": {
            "first_name": "Fake",
            "last_name": "'Patriots'",
            "election": 20,
            "party": "Secessionists",
            "state": "Montana",
            "priority": 1,
            "description": "If they knew any better, they would be right in lock-step with us. But, no, we're too 'authoritarian' or whatever.",
            "color_hex": "#b0b37d",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://imgur.com/72U04Wm",
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
        "pk": 162,
        "fields": {
            "first_name": "Libertarian",
            "last_name": "Cowards",
            "election": 20,
            "party": "Secessionists",
            "state": "Idaho",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://imgur.com/72U04Wm",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "Cowards. We are the ones winning the war, don't they know that?",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 155,
        "fields": {
            "first_name": "The",
            "last_name": "Fifth Column",
            "election": 20,
            "party": "Communists and More",
            "state": "DC",
            "priority": 1,
            "description": "Communists. Socialists. They are our enemy. And yet, they have the audacity to vote in our elections?!? They are undermining the very foundations of American society!",
            "color_hex": "#db892b",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://imgur.com/jHbVap0",
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
        "pk": 165,
        "fields": {
            "first_name": "Various",
            "last_name": "Traitors",
            "election": 20,
            "party": "Commies",
            "state": "DC",
            "priority": 1,
            "description": "Sure, the opposition is 'controlled', but, we've also included some of those peacenik and lib-uh-ral folks too. But, they're not the primary concern here. ",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://imgur.com/jHbVap0",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "Sure, the opposition is 'controlled' and simultaneously 'not controlled' but, we've also included some of those peacenik and lib-uh-ral folks too. But, they're not the primary concern here. ",
            "candidate_score": 1,
            "running_mate": true
        }
    }
]

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 113778,
        "fields": {
            "candidate": 152,
            "running_mate": 156
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 118547,
        "fields": {
            "candidate": 153,
            "running_mate": 159
        }
    }
]

campaignTrail_temp.opponents_default_json = [
    {
        "election": 20,
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
        "election": 20,
        "candidates": [
            152,
            153,
            154,
            155
        ]
    }
]

jet_data = {
    "headerColor": "#404040",
    "windowColor": "#878787",
    "containerColor": "#696969",
    "innerWindowColor": "#ffffff",
    "bannerImageUrl": "https://static.wikitide.net/mockelectionswiki/f/ff/Fallout_mod_banner.png",
    "backgroundImageUrl": "https://static.miraheze.org/mockelectionswiki/6/60/952B9326-DD59-46E3-A1E2-26CFA3960A13.png",
    "endingTextColor": "#000000",
    "customQuote": "In God We Trust.",
    "gameTitle": "2076 - A Steady Hand"
}



//#startcode

const startScreenUpdater = setInterval(function() {
		const difficultySelect = document.getElementById("difficulty_level_id");
	const finalScreenID = document.getElementById("opponent_selection_id_button");
	if(finalScreenID) { 
	
	// Taken from TTNW to resolve Neville's name.

			var id = e.candidate_json.map(p=>p.pk).indexOf(153)
        e.candidate_json[id].fields.first_name = "Supposed"
        e.candidate_json[id].fields.last_name = "'Opposition'"
		clearInterval(startScreenUpdater);
	}
	}, 1);

corrr = '\n              <h2>2076: A Steady Hand</h2><font id="wittyquote" size="4" color="white"><em>In God We Trust.</em></font>\n            ';


nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#404040";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#878787";

document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$(".container")[0].style.backgroundColor = "#696969";

document.getElementById("header").src = "https://static.wikitide.net/mockelectionswiki/f/ff/Fallout_mod_banner.png";

document.body.background = "https://static.miraheze.org/mockelectionswiki/6/60/952B9326-DD59-46E3-A1E2-26CFA3960A13.png";

document.head.innerHTML += "<style>#results_container {color:#000000;} .inner_window_w_desc {background-color:#ffffff!important;}</style>";



function addDynamicCSS() {
    var css = `
        .inner_window_question h3 .mytooltip{
            background-color: lightskyblue;
        }

        .mytooltip {
            position: relative;
            display: inline-block;
            cursor: pointer;
            background-color: lightblue;
            display: inline-flex;
        }

        .mytooltip .mytooltiptext {
            width: 240px;
            background-color: lightblue;
            color: black;
            text-align: center;
            border-radius: 6px;
            padding: 10px;
            position: absolute;
            z-index: 99;
            bottom: 20%;
            left: 20%;
            margin-left: -90px;
            opacity: 0;
            transition: opacity 0.3s;
            border: 1px solid black;
            pointer-events: none;
            font-size: 13px !important;
            line-height: 1.5em !important;
            font-weight: normal !important;
            font-style: normal !important;
            display: flex;
            flex-direction: column;
            row-gap: 5px;
        }

        .mytooltip .mytooltiptext img {
            max-width: 240px;
            height: auto;
            display: flex;
            align-self: center;
        }

        .mytooltip:hover .mytooltiptext {
            opacity: 1;
            transition-delay: 0.5s;
        }
    `;

    var styleElem = document.createElement('style');
    styleElem.type = 'text/css';
    
    styleElem.appendChild(document.createTextNode(css));
    
    document.head.appendChild(styleElem);

}


addDynamicCSS();


tooltipList = [
    {searchString: "New Plague", explanationText: "A highly contagious disease that entered the U.S. in the early 2050s. Not our fault that we can't contain it!"},
    {searchString: "Plague", explanationText: "A highly contagious disease that entered the U.S. in the early 2050s. Not our fault that we can't contain it!"},
	{searchString: "Bailey Gordon", explanationText: "<img src='https://static.wikitide.net/mockelectionswiki/7/7a/Bailey_Gordon.jpg' style='width:50%;height:50%;'>The Democrats' preferred choice for Speaker of the House, a moderate who knows which way the wind blows."},
    {searchString: "Joshua Henderson", explanationText: "<img src='https://static.wikitide.net/mockelectionswiki/4/49/Joshua_Henderson.jpg' style='width:50%;height:50%;'>Senator from Michigan. A conservative Democrat and probably likely to go extinct if he doesn't jump ship."},
    {searchString: "Eastern Commonwealth", explanationText: "One of the 13 American Commonwealths. The Commonwealth encompasses West Virginia, Pennsylvania, Delaware, New Jersey, and New York."},
    {searchString: "North Commonwealth", explanationText: "One of the 13 American Commonwealths. The Commonwealth encompasses Wyoming, Montana, North Dakota, and South Dakota."},
    {searchString: "Southwest Commonwealth", explanationText: "One of the 13 American Commonwealths. The Commonwealth encompasses Nevada and the southern half of California."},
    {searchString: "Plains Commonwealth", explanationText: "One of the 13 American Commonwealths. The Commonwealth encompasses Oklahoma, Kansas, Nebraska, Iowa, and Missouri."},
    {searchString: "Texan Commonwealth", explanationText: "One of the 13 American Commonwealths. The Commonwealth encompasses Texas and Arkansas."},
    {searchString: "Chuck Evans", explanationText: "Too overtly corrupt from a political and moral perspective. So corrupt that even the populace knows. Should probably run as far away from the Enclave as possible."},
    {searchString: "Governor Chuck Evans", explanationText: "Too overtly corrupt from a political and moral perspective. So corrupt that even the populace knows. Should probably run as far away from the Enclave as possible."},
    {searchString: "Sino-American War", explanationText: "An extension of the Resource Wars. The Sino-American War began in 2066 after the capture of Anchorage by the Chinese. Fought over the last resources Alaska has and right in America's 'backyard'."},
    {searchString: "Hornwright", explanationText: "Hornwright Industries, a mining company big in the automation sector."},
    {searchString: "Canada", explanationText: "For all intents and purposes, nothing more than our 51st state. Not worth enough to divert our forces to keep 'em down; worth enough to keep us afloat."},
    {searchString: "Wan Yang", explanationText: "A Chinese saboteur arrested over the Niagara Sabotage."},
    {searchString: "HUAC", explanationText: "House Committee on Un-American Activities. Formed in 1938 to investigate internal subversion. Senator Joe McCarthy would be proud of its work."},
    {searchString: "European Commonwealth", explanationText: "<img src='https://static.miraheze.org/mockelectionswiki/4/4c/Fallout-European-Commonwealth.png' style='width:70%;height:70%;'>Formed in 2025 and once encompassed the majority of Western Europe. Fell apart in 2060 after the end of the Euro-Arab War due to the oil wells running dry."},
    {searchString: "European Civil War", explanationText: "Beginning in 2060, the European Commonwealth collapsed into bickering nationstates after the drying up of the Arab oil fields. This war was what caused said collapse."},
    {searchString: "United Nations", explanationText: "Formed in 1946, it united the world’s nations to work out their problems without war. Without any teeth and only able to offer up tacit requests for peace, the world resumed the old sport of war while the U.N. dissolved in 2052."},
    {searchString: "Sam Blackwell", explanationText: "Senator from West Virginia. Investigating the odd investment records of the Dept. of Agriculture. Should've been shot for treason if it weren't for his popularity."},
    {searchString: "Senator Blackwell", explanationText: "Senator from West Virginia. Investigating the odd investment records of the Dept. of Agriculture. Should've been shot for treason if it weren't for his popularity."},
    {searchString: "Senator Sam Blackwell", explanationText: "Senator from West Virginia. Investigating the odd investment records of the Dept. of Agriculture. Should've been shot for treason if it weren't for his popularity."},
    {searchString: "Blackwell", explanationText: "Senator from West Virginia. Investigating the odd investment records of the Dept. of Agriculture. Should've been shot for treason if it weren't for his popularity."},
    {searchString: "Rocky Mountain Arsenal", explanationText: "A toxic waste dump outside of Denver. It leaked in 2075, killing many in Denver. A pretty bad angle for any politician who thinks they can make it big from Colorado."},
    {searchString: "Tom Eckhart", explanationText: "<img src='https://static.wikia.nocookie.net/fallout/images/a/a1/Thomas_Eckhart.png' style='width:5%;height:5%;'>Secretary of Agriculture. A loyal American conservative who knows the best way to win is to do nothing for the commoners."},
    {searchString: "Mike Hampton", explanationText: "<img src='https://static.wikitide.net/mockelectionswiki/1/13/Mike_Hampton.jpg' style='width:35%;height:35%;'>The Senate Whip of the Democrats and the darling of the Democrats' party bosses."},
    {searchString: "John Conrad", explanationText: "<img src='https://static.wikitide.net/mockelectionswiki/5/5a/John_Conrad.jpeg' style='width:35%;height:35%;'>Governor of Nebraska, a social conservative Democrat and economic moderate. Supposedly connects with the farmers like no other according to the Democrats."},
    {searchString: "Sara Edwards", explanationText: "<img src='https://static.wikitide.net/mockelectionswiki/1/12/Sara_Edwards.jpg' style='width:35%;height:35%;'>Senator from Washington, economic moderate Democrat and social liberal. Member of the Senate Foreign Relations Committee."},
    {searchString: "Don Gaither", explanationText: "Your Secretary of Defense, a real go-getter. Always been a loyal member of the administration, trigger happy."},
    {searchString: "Secretary Gaither", explanationText: "Your now former Secretary of Defense, a real go-getter. Always been a loyal member of the administration, trigger happy."},
    {searchString: "Gaither", explanationText: "Your now former Secretary of Defense, a real go-getter. Always been a loyal member of the administration, trigger happy."},
    {searchString: "Secretary Thomas Eckhart", explanationText: "<img src='https://static.wikia.nocookie.net/fallout/images/a/a1/Thomas_Eckhart.png'width:10%;height:10%;'>Secretary of Agriculture. A loyal American conservative who knows the best way to win is to do nothing for the commoners."},
    {searchString: "Secretary Eckhart", explanationText: "<img src='https://static.wikia.nocookie.net/fallout/images/a/a1/Thomas_Eckhart.png'width:10%;height:10%;'>Secretary of Agriculture. A loyal American conservative who knows the best way to win is to do nothing for the commoners."},
    {searchString: "USSA", explanationText: "<img src='https://static.miraheze.org/mockelectionswiki/1/19/USSA.png'style=width:50%;height:50%;'>The United States Space Administration. An administration that thinks America's destiny is in the stars. They put the first man in space in 1961 and landed a man on the moon in 1969. Thank Jack Kennedy for the USSA."},
    {searchString: "P.A.M.", explanationText: "The Predictive Analytic Machine. A machine invented in 2067, it predicts the future based on current data. Garbage. Don't bother too much with it for guesswork."},
    {searchString: "super weapon", explanationText: "<img src='https://static.wikia.nocookie.net/fallout/images/a/ad/LibertyPrimeCA12.jpg'width:70%;height:70%;'>Something the techies are cooking up."},
    {searchString: "Anchorage", explanationText: "<img src='https://www.adn.com/resizer/v2/XTZ5UR2ZGREXLITJ26UPX3TBI4.jpg?auth=63faecc74548620e694bcd1c935c503db7d2a874956c73049598e6d141261e6e'width:70%;height:70%;'>Our land, forever our land."},
    {searchString: "Enclave", explanationText: "<img src='https://static.wikia.nocookie.net/fallout/images/8/8a/Enclave_symbol.svg'style=width:40%;height:40%;'>The true powerbrokers. Why would you ever want to shake 'em off?"},
    {searchString: "President Nixon", explanationText: "<img src='https://file.garden/acbbY0-xLQzlfbzi/Richard_Nixon.png'style=width:35%;height:35%;'>37th President, the proto-fascist-authoritarian and the Enclave’s model."},
    {searchString: "West Tek", explanationText: "<img src='https://static.wikia.nocookie.net/fallout/images/c/cd/F76_West_Tek_Logo_recreated.png'width:10%;height:10%;'>The humming of war. Nationalized and ready to supply the ever hungry American war machine."},
    {searchString: "General Chase", explanationText: "Constantine Chase. A patriot. The stonewall of Anchorage. What else is there to say?"},
    {searchString: "Pan-Immunity Virion", explanationText: "Some sort of general immunity agent to counteract the effects of Chinese biological weapons."},
    {searchString: "PVP", explanationText: "Some sort of general immunity agent to counteract the effects of Chinese biological weapons."},
    {searchString: "Forced Evolutionary Virus", explanationText: "This virus has the potential to mutate cells, seemingly. May be real bad stuff if it gets into the wrong hands..."},
    {searchString: "FEV", explanationText: "This virus has the potential to mutate cells, seemingly. May be real bad stuff if it gets into the wrong hands..."},
    {searchString: "General Winston Adams", explanationText: "<img src='https://file.garden/acbbY0-xLQzlfbzi/Winston_Adams.png'style=width:40%;height:40%;'>A tough man and assistant head of the Army's intelligence collection operations. Authoritative and a nuisance to work under."},
    {searchString: "David Reynolds", explanationText: "<img src='https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Orvin_B_Fjare.jpg/960px-Orvin_B_Fjare.jpg'style=width:40%;height:40%;'>Representative from California. Represents San Diego City's northern half. He's a partisan Republican whose seat is always oh-so vulnerable. And yet, he keeps winning every two years."},
    {searchString: "ATLAS Program", explanationText: "Short for the Atmospheric Terraforming Laser Accelerator System Program. A joint US Army and US Air Force project to modify the weather. Frequently has fallen behind schedule."},
    {searchString: "Dr. Isaac Hammond", explanationText: "Head Researcher for the ATLAS Program. An overemotional man who thinks the ATLAS Program might be useful in saving the world."},
    {searchString: "Lieutenant Colonel James Oberlin", explanationText: "U.S. Army Lieutenant Colonel and newest Chief Army Scientific Advisor for the ATLAS Program. A man who knows about the need for timely results and the correct results, especially in the fight against Communism."},
    {searchString: "Lieutenant Trisha Marcs", explanationText: "U.S. Air Force Lieutenant and researcher for the ATLAS Project. A smart, resourceful, and scientifically-gifted woman. Vital to the functioning of the ATLAS Program."},
    {searchString: "Dr. Hammond", explanationText: "Head Researcher for the ATLAS Program. An overemotional man who thinks the ATLAS Program might be useful in saving the world."},
    {searchString: "Lieutenant Colonel Oberlin", explanationText: "U.S. Army Lieutenant Colonel and newest Chief Army Scientific Advisor for the ATLAS Program. A man who knows about the need for timely results and the correct results, especially in the fight against Communism."},
    {searchString: "Lieutenant Marcs", explanationText: "U.S. Air Force Lieutenant and researcher for the ATLAS Project. A smart, resourceful, and scientifically-gifted woman. Vital to the functioning of the ATLAS Program."},
    {searchString: "Hugo Stolz", explanationText: "<img src='https://static.wikia.nocookie.net/fallout/images/8/8e/FO76SV_Hugo_portrait.png'style=width:40%;height:40%;'>German-born businessman. Supposedly a ruthless capitalist. Board member of Vault-Tec."},
    {searchString: "If Joe Biden could hithhike to the Democratic National Convention", explanationText: "<img src='https://i.ytimg.com/vi/07-V3jTy38o/hq720.jpg'style=width:75%;height:75%;'>'It was a thing that never was in an alternate timeline."}, 
   {searchString: "Kampuchea", explanationText: "<img src='https://upload.wikimedia.org/wikipedia/commons/2/23/Flag_of_the_People%27s_Republic_of_Kampuchea.svg'width:70%;height:70%;'>The People's Republic of Kampuchea, a Communist Vietnamese puppet state. It's a mismanaged land that's been exploited by the 'Communist comrades'. Those Red Vietnamese are incompetent at governance."}, 
    {searchString: "all the way", explanationText: "<img src='https://i.imgur.com/jNiTjY9.gif'width:70%;height:70%;'>oh no"},
    {searchString: "Inchon", explanationText: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Battle_of_Inchon.png/960px-Battle_of_Inchon.png'width:25%;height:25%;'>A victorious amphibious assault that helped sever the North Korean supply lines in South Korea. Orchestrated by none other than famed General, Douglas 'Dugout Doug' MacArthur."},
    {searchString: "Mr. Rodney", explanationText: "A puppet who has outlasted his usefulness, for better or for worse."},
  {searchString: "Mr. Ruthenberg", explanationText: "<img src='https://ethw-images.s3.us-east-va.perf.cloud.ovh.us/ethw/6/63/Women_strike.jpg'style=width:40%;height:40%;'>Eugene Ruthenberg. A 'Jack' that claims to fight for 'the people'."},
    {searchString: "Eugene Ruthenberg", explanationText: "<img src='https://ethw-images.s3.us-east-va.perf.cloud.ovh.us/ethw/6/63/Women_strike.jpg'style=width:40%;height:40%;'>A 'Jack' that claims to fight for 'the people'."},
    {searchString: "Jessica Hull", explanationText: "<img src='https://ethw-images.s3.us-east-va.perf.cloud.ovh.us/ethw/6/63/Women_strike.jpg'style=width:40%;height:40%;'>A 'Jill' that claims to fight for 'the women'."},
   {searchString: "Robert Edwin House", explanationText: "<img src='https://static.wikia.nocookie.net/fallout/images/e/ed/FNV_Brian_Menze_concept_art_15.jpg'style=width:40%;height:40%;'>Not Enclave-affiliated. A maverick and authoritarian. Despicable. Has no love for America. If he did, he would have marched in lockstep with the Enclave's regime."},
   {searchString: "Jim Wycliffe", explanationText: "<img src='https://www.reviewjournal.com/wp-content/uploads/2015/05/web1_cannon-in-uniform-2-star-general_0.jpg'style=width:40%;height:40%;'>Major General of the United States Air Force. A quiet man who's not willing to back down from a fight."},
    {searchString: "Barry Strauss", explanationText: "<img src='https://file.garden/acbbY0-xLQzlfbzi/Barry_Strauss.png'style=width:40%;height:40%;'>Just an office drone who's been assigned to your case. Not like he has any choice in the matter. A pretty swell guy as along as he's not a nervous wreck."},
    {searchString: "Vietnam", explanationText: "A quagmire that set the stage for America's want for more war. 'Gold standard in conflict resolution.' Was a simpler, richer time back then compared to decades after that."},
    {searchString: "Family Assistance Plan", explanationText: "The FAP. A negative income tax that would help people who seek employment. A phase-out plan for supplemental income. Too liberal for conservatives; too conservative for liberals; too much fapping and not enough gooning."},
    {searchString: "FAP", explanationText: "A negative income tax that would help people who seek employment. A phase-out plan for supplemental income. Too liberal for conservatives; too conservative for liberals; too much fapping and not enough gooning."},
   {searchString: "David Allen", explanationText: "Some kid who was supposedly related to a guy baned Elliot. Used to be called 'Dave' or 'little brother' for some reason. His name is now attached to a healthcare bill that you shouldn't care care about."},
   {searchString: "butter bars", explanationText: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/US-O1_insignia.svg/330px-US-O1_insignia.svg.png'style=width:10%;height:10%;'>A term to describe 2nd Lieutenants like yourself, Lieutenant Vaughn."},
    {searchString: "Fishcans", explanationText: "<img src='https://file.garden/acbbY0-xLQzlfbzi/J7Fishcan.png'style=width:40%;height:40%;'>Fishcan. NATO aircraft designation for the Chengdu J-7 fighter jet. A Chinese derivative of the Soviet MiG-21."},   
    {searchString: "Richard Milhous Nixon", explanationText: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Richard_Nixon_official_portrait_as_Vice_President_%28cropped%29.tiff/lossy-page1-960px-Richard_Nixon_official_portrait_as_Vice_President_%28cropped%29.tiff.jpg'style=width:40%;height:40%;'>'President Nixon'. Just walked out of some time machine or something. Why he chose to run as a Democrat in 2076 is anybody's guess."},   
    {searchString: "Roberta Francine Kennedy", explanationText: "<img src='https://file.garden/acbbY0-xLQzlfbzi/WishforTTNW.png'style=width:40%;height:40%;'>'What is this?!? Seriously? When did I wish for Things that Never Were?!?"}, 
   {searchString: "Richardson", explanationText: "That Southern snake. Always ready to sell you out if it meant that he'd win points with the powers-that-be."},
   {searchString: "Bruce Vernon", explanationText: "<img src='https://file.garden/acbbY0-xLQzlfbzi/Bruce_Vernon_2A.png'style=width:40%;height:40%;'>Representative-at-Large from the warzone state of Alaska. Veteran, war hero, and radically hawkish, yet, is moderate on other issues despite Alaska's Republican leanings."},
    {searchString: "Martin Forrestal", explanationText: "<img src='https://file.garden/acbbY0-xLQzlfbzi/Martin_Forrestal.png'style=width:40%;height:40%;'>Senator from Michigan. Agricultural populist who staunchly supports the war effort against Communism. Seemingly left-of-center on other issues."},
    {searchString: "Daniel Sinclair", explanationText: "<img src='https://file.garden/acbbY0-xLQzlfbzi/Senator_Daniel_Sinclair.png'style=width:40%;height:40%;'>Senator from Minnesota. Respected veteran that resonates deeply with anyone who wants an end to this war. Left-of-center on economic issues."},
    {searchString: "Henry Giles", explanationText: "<img src='https://file.garden/acbbY0-xLQzlfbzi/Henry%20Giles.png'style=width:40%;height:40%;'>Governor of Texas. A Republican-turned-Democrat. A union-supporting Democrat and lukewarm detractor of the war."},
    {searchString: "Alexander Finn", explanationText: "<img src='https://file.garden/acbbY0-xLQzlfbzi/Alexander_Finn_Better.png'style=width:40%;height:40%;'>Governor of Iowa. An economic populist who has an axe to grind with corruption. Connects with union workers of the farmers, manufacturers, and trades."},
    {searchString: "Robert Mortimer", explanationText: "<img src='https://file.garden/acbbY0-xLQzlfbzi/Richard_Mortimer.png'style=width:40%;height:40%;'>Representative from Illinois. A working-class populist that fights for the rights of unions and laborers. Strangely silent about the war."},
    {searchString: "Douglas Brown", explanationText: "<img src='https://file.garden/acbbY0-xLQzlfbzi/Douglas_Brown.png'style=width:40%;height:40%;'>Senator from Arkansas. Conservative and Democrat. Should've jumped ship already to become a Republican."},
    {searchString: "Franklin Howe", explanationText: "<img src='https://file.garden/acbbY0-xLQzlfbzi/Franklin_Howe_Candidate.png'style=width:40%;height:40%;'>Representative of California. A conservative Democrat serving a Republican district."},
    {searchString: "Murphy Alston Young", explanationText: "<img src='https://file.garden/acbbY0-xLQzlfbzi/Murphy_A_Young.png'style=width:40%;height:40%;'>Senator of Colorado. Man of the people. Should be easy enough to sink his ship."},
    {searchString: "John Barnett", explanationText: "<img src='https://file.garden/acbbY0-xLQzlfbzi/John_Barnett.png'style=width:40%;height:40%;'>The Governor of Tennessee, a moderate chameleon. The perfect man for any job: Big or small, clean or dirty."},
    {searchString: "Barnett", explanationText: "<img src='https://file.garden/acbbY0-xLQzlfbzi/John_Barnett.png'style=width:40%;height:40%;'>The Governor of Tennessee, a moderate chameleon. The perfect man for any job: Big or small, clean or dirty."},
    {searchString: "Governor Barnett", explanationText: "<img src='https://file.garden/acbbY0-xLQzlfbzi/John_Barnett.png'style=width:40%;height:40%;'>The Governor of Tennessee, a moderate chameleon. The perfect man for any job: Big or small, clean or dirty."},
    {searchString: "Governor John Barnett", explanationText: "<img src='https://file.garden/acbbY0-xLQzlfbzi/John_Barnett.png'style=width:40%;height:40%;'>The Governor of Tennessee, a moderate chameleon. The perfect man for any job: Big or small, clean or dirty."},
    {searchString: "Dirk Edwin Rodney (R-AK) and Alfred Tabor Richardson (R-AL)", explanationText: "You've got a feeling that neither the President nor the Vice President are actually from Alaska and Alabama..."}, 
    {searchString: "Murphy Alston Young (D-CO) and John Barnett (D-TN)", explanationText: "This is the Democratic ticket, unfortunately..."}, 
    {searchString: "Douglas Brown (D-AR) and Franklin Howe (D-TN)", explanationText: "Conservative Democrats usually don't stand a chance, y'know..."},
    {searchString: "George Oliver Neville (D-CA) and Douglas Brown (D-AR)", explanationText: "That's you and Douglas right there."},  
    {searchString: "George Oliver Neville (D-CA) and Edward Stewart (D-NY)", explanationText: "That's you and Edward right there."}, 
    {searchString: "little brother Dave", explanationText: "David Allen. Your younger brother. Not worthy of being liked one bit."}, 
];

campaignTrail_temp.achievements = {
  "Rationality When There is None Left" : {
    "image" : "https://file.garden/acbbY0-xLQzlfbzi/2076ACHIEVEMENTS/RationalityWhenThereIsNone.png",
    "description" : "Accept your fate as a dignified statesman.",
      "cannotBeCheated" : true
  },
  "Nothing Ever Happens" : {
    "image" : "https://file.garden/acbbY0-xLQzlfbzi/2076ACHIEVEMENTS/NothingEverHappens.png",
    "description" : "As Rodney, win the 2076 election while adding no notes.",
      "cannotBeCheated" : true
  },
  "War Never Changes" : {
    "image" : "https://file.garden/acbbY0-xLQzlfbzi/2076ACHIEVEMENTS/WarNeverChanges.png",
    "description" : "Usher in the canon Fallout timeline.",
      "cannotBeCheated" : true
  },
  "A Secret Plan" : {
    "image" : "https://file.garden/acbbY0-xLQzlfbzi/2076ACHIEVEMENTS/ASecretPlan.png",
    "description" : "Kickstart the canon fascist Enclave",
      "cannotBeCheated" : true
  },
  "Let Go, and Begin Again" : {
    "image" : "https://file.garden/acbbY0-xLQzlfbzi/2076ACHIEVEMENTS/LetGoandBeginAgain.png",
    "description" : "Be the man who sold the world to the Enclave.",
      "cannotBeCheated" : true
  },
  "Reaching Out To Find A Way" : {
    "image" : "https://file.garden/acbbY0-xLQzlfbzi/2076ACHIEVEMENTS/ReachingOutToFindAWay.png",
    "description" : "Encounter the Enclave's model statesman.",
      "cannotBeCheated" : true
  },
  "Join the Ranks" : {
    "image" : "https://file.garden/acbbY0-xLQzlfbzi/2076ACHIEVEMENTS/JointheRanks.png",
    "description" : "As Neville, get welcomed aboard to the Enclave.",
      "cannotBeCheated" : true
  },
  "Rodney, Rodney, Rodney" : {
    "image" : "https://file.garden/acbbY0-xLQzlfbzi/2076ACHIEVEMENTS/RodneyRodneyRodney.png",
    "description" : "As a moderate Neville, defame the honorable President.",
      "cannotBeCheated" : true
  },
  "Crash. Out." : {
    "image" : "https://file.garden/acbbY0-xLQzlfbzi/2076ACHIEVEMENTS/CrashOut.png",
    "description" : "As a liberal Neville, explode in rage.",
      "cannotBeCheated" : true
  },
  "The Great Compromiser" : {
    "image" : "https://file.garden/acbbY0-xLQzlfbzi/2076ACHIEVEMENTS/TheGreatCompromiser.png",
    "description" : "As Neville, don't let a schism occur during your campaign.",
      "cannotBeCheated" : true
  },
  "Sellout" : {
    "image" : "https://file.garden/acbbY0-xLQzlfbzi/2076ACHIEVEMENTS/Sellout.png",
    "description" : "As Free States Elliot, choose to approve of the status quo.",
      "cannotBeCheated" : true
  },
  "I'm Dependable" : {
    "image" : "https://file.garden/acbbY0-xLQzlfbzi/2076ACHIEVEMENTS/ImDependable.png",
    "description" : "As Free States Elliot, start a Movement despite reprimanding.",
      "cannotBeCheated" : true
  },
  "Constrained by the Sky" : {
    "image" : "https://file.garden/acbbY0-xLQzlfbzi/2076ACHIEVEMENTS/ConstrainedbytheSky.png",
    "description" : "As Liberal Republican Rodney, be forced to make a flip-flop.",
      "cannotBeCheated" : true
  },
  "An Unfair World" : {
    "image" : "https://file.garden/acbbY0-xLQzlfbzi/2076ACHIEVEMENTS/AnUnfairWorld.png",
    "description" : "Weaponize bigotry and sink your best offramp.",
      "cannotBeCheated" : true
  },
}

//#endcode
