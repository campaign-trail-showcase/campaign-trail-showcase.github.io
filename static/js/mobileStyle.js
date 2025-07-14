const mobileMode = localStorage.getItem("mobileMode") === "true";
const mobileModeButton = document.getElementById("mobileModeButton");

function toggleMobileMode() {
    const enabled = localStorage.getItem("mobileMode") === "true";
    localStorage.setItem("mobileMode", enabled ? "false" : "true");
    applyMobileStyle();
    mobileModeButton.innerText = enabled
        ? "Turn On Mobile Compatibility (Beta)"
        : "Turn Off Mobile Compatibility (Beta)";
}

function applyMobileStyle() {
    const enabled = localStorage.getItem("mobileMode") === "true";
    const prevStyle = document.getElementById("mobile-style");
    if (prevStyle) prevStyle.remove();
    const prevMeta = document.getElementById("mobile-viewport");
    if (prevMeta) prevMeta.remove();

    if (enabled) {
        const meta = document.createElement("meta");
        meta.name = "viewport";
        meta.content = "width=device-width, initial-scale=1";
        meta.id = "mobile-viewport";
        document.head.appendChild(meta);

        const style = document.createElement("style");
        style.id = "mobile-style";
        style.innerHTML = `
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
        #map_footer { line-height: 2.5em; }
        #drop_down_area_state { margin-left: auto; margin-right: auto; }
      }
    `;
        document.head.appendChild(style);
    }
}

mobileModeButton.innerText = mobileMode
    ? "Turn Off Mobile Compatibility (Beta)"
    : "Turn On Mobile Compatibility (Beta)";

applyMobileStyle();

mobileModeButton.onclick = toggleMobileMode;