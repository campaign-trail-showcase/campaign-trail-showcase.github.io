let answerTooltipData = {};
let jsonLoaded = false;
let answerTooltipActive = false;

async function activateAnswerTooltip() {
    const modUrl = new URLSearchParams(window.location.search);
    const modName = modUrl.get("modName");

    answerTooltipActive = !answerTooltipActive;
    console.log("Answer hover is", answerTooltipActive ? "ON" : "OFF");
    if (!answerTooltipActive) return; 

    if (!jsonLoaded) {
        try {
            const res = await fetch('../static/json/answer_variables.json');
            answerTooltipData = await res.json();
            jsonLoaded = true;
            console.log("Loaded answer_variables.json:", answerTooltipData);
        } catch (error) {
            console.error("Couldn't load answer_variables.json:", error);
            return;
        }
    }

    let answerHoverTooltip = document.getElementById('answerHoverTooltip');

    // game_window used for delegation for new questions
    const gameWindow = document.getElementById('game_window');
    if (!gameWindow) return;

    gameWindow.addEventListener('mouseover', (event) => {
        if (!answerTooltipActive) return;
        
        const gameLabel = event.target.closest('label');
        if (!gameLabel || !gameWindow.contains(gameLabel)) return;

        // get input associated with answer text
        const answerInput = document.getElementById(event.target.getAttribute('for'));
        if (!answerInput) return;

        const answerPk = answerInput.value;
        let answerTooltipText = "no variable changes";

        if (answerTooltipData[modName] && answerTooltipData[modName][answerPk]) {
            const changes = answerTooltipData[modName][answerPk]; 
            answerTooltipText = changes.map(c => `${c.var} ${c.change}`).join(', ');
        } else if (!answerTooltipData[modName]) {
            answerTooltipText = "No data for this mod";
        }

        answerHoverTooltip.innerHTML = answerTooltipText;
        answerHoverTooltip.style.display = 'block';

        // position hover window above the answer text
        const rect = event.target.getBoundingClientRect();
        answerHoverTooltip.style.left = `${rect.left + window.scrollX}px`;
        answerHoverTooltip.style.top = `${rect.top + window.scrollY - answerHoverTooltip.offsetHeight - 5}px`;
    });

    gameWindow.addEventListener('mouseout', (event) => {
        const answerLabel = event.target.closest('label');
        if (!answerLabel) return;

        // ensure the mouse leaves the text and not child
        if (event.relatedTarget && answerLabel.contains(event.relatedTarget)) return;

        answerHoverTooltip.style.display = 'none';
    });
}
