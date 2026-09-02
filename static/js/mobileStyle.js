const mobileModeButton = document.getElementById("mobileModeButton");
let isMobileMode = localStorage.getItem("mobileMode") === "true";
let mobileStyleElement = null;

const cssRules = `
  @media only screen and (max-width: 768px) {
    #benefitwindow {
        width: 75%!important;
    }

    .inner_window_question,
    #results_container,
    #map_footer,
    #overall_details_container,
    #main_content_area_reading,
    #inner_window_2,
    #inner_window_3,
    #inner_window_4,
    #advisors {
        font-size: 1.8em;
    }

    #inner_window_2,
    #inner_window_3 {
        height: 82%;
    }

    .inner_window_question {
        height: auto;
    }

    #visit_window,
    #opponent_selection_description_window,
    #election_year_form,
    #candidate_description_window,
    #running_mate_description_window {
        height: auto;
    }

    #visit_content {
        height: 79%;
    }

    #map_footer {
        padding-right: 10em;
    }

    #inner_window_2 select,
    #inner_window_3 select,
    #inner_window_4 select {
        font-size: 1em;
        padding: 10px;
    }

    #inner_window_2 button,
    #inner_window_3 button,
    #inner_window_4 button,
    #game_window button,
    #headquarter button,
    #advisorsDiv button {
        font-size: 1em;
        line-height: 2em;
    }

    #inner_window_2,
    #inner_window_3,
    #inner_window_4 {
        overflow: auto;
    }

    #main_content_area {
        overflow: auto;
        overflow-x: hidden;
    }

    #results_container {
        height: 98%;
        overflow: auto;
    }

    #results_container ~ #main_content_area {
        height: 80%;
    }

    #opponent_selection_description_window {
        overflow: visible;
    }

    #title_container {
        font-size: 1.2em;
    }

    #visit_window {
        font-size: 1.8em;
        width: 90%;
        left: 5%;
    }

    .mobile-hide {
        display: none;
    }

    .inner_window_question button,
    #visit_window button,
    #map_footer { 
        line-height: 2.5em; 
    }
    
    #drop_down_area_state { 
        margin-left: auto; 
        margin-right: auto; 
    }

    #game_window {
      position: relative;
      display: flex;
      flex-direction: column;
      min-height: 595px;
      height: auto;
      /* necessary so tooltips don't break */
      overflow-x: visible !important;
      overflow-y: visible !important;
    }

    .inner_window_question {
      min-height: 321px;
      height: auto !important;
      display: flex;
      flex-direction: column;
    }

    #game_window g {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      gap: 8px;
      padding: 5px 0;
    }

    #candidate_pic, img#candidate_pic {
      order: 1;
      width: 13em;
      height: auto;
      flex-shrink: 0;
      margin: 0;
    }


    #running_mate_pic, img#running_mate_pic {
      order: 3;
      width: 13em;
      height: auto;
      flex-shrink: 0;
      margin: 0;
    }

    .inner_window_sign_display {
      order: 2;
      flex: 1;
      min-width: 180px;
      max-width: 290px;
      min-height: 160px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: .5em
    }

    #map_container {
      height: 30.78em;
    }

    .person_description_window {
      display: flex;
      height: 320px;
    }

    .person_summary ul {
      padding: 0;
    }

  }
`;

function applyMobileStyle(enabled) {
  let meta = document.getElementById("mobile-viewport");
  if (enabled) {
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1";
      meta.id = "mobile-viewport";
      document.head.appendChild(meta);
    }
  } else if (meta) {
    meta.remove();
  }

  if (enabled) {
    if (!mobileStyleElement) {
      mobileStyleElement = document.createElement("style");
      mobileStyleElement.id = "mobile-style";
      mobileStyleElement.innerHTML = cssRules;
      document.head.appendChild(mobileStyleElement);
    }
    mobileStyleElement.disabled = false;
  } else if (mobileStyleElement) {
    mobileStyleElement.disabled = true;
  }
}

function updateMobileModeButtonText(enabled) {
  if (mobileModeButton) {
    mobileModeButton.innerText = enabled
      ? "Turn Off Mobile Compatibility"
      : "Turn On Mobile Compatibility";
  }
}

function toggleMobileMode() {
  isMobileMode = !isMobileMode;
  localStorage.setItem("mobileMode", isMobileMode ? "true" : "false");
  applyMobileStyle(isMobileMode);
  updateMobileModeButtonText(isMobileMode);
}

if (mobileModeButton) {
  applyMobileStyle(isMobileMode);
  updateMobileModeButtonText(isMobileMode);
  mobileModeButton.onclick = toggleMobileMode;
}