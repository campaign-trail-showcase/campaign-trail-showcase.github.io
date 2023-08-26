let unlockedAch = localStorage.getItem("unlockedAch") ? JSON.parse(localStorage.getItem("unlockedAch")) : {};

function unlockAchievement(name) {
    if(allAch[name] == null) {
        console.log("There is no achievement with the name '" + name +"'");
        return;
    }

    if(cheatsActive && allAch[name].cannotBeCheated) {
        console.log(`Would unlock '${name}' but won't because cheating!`);
        return;
    }

    if(unlockedAch[name] == null) {
        alert("ACHIEVEMENT UNLOCKED: " + name);
    }

    unlockedAch[name] = allAch[name];
    localStorage.setItem("unlockedAch", JSON.stringify(unlockedAch));
    addAllAchievements();
}

const achWindow = document.getElementById("achwindow");
const achButton = document.getElementById("achButton");
const achContent = document.getElementById("achcontent");

function openAchievements() {

    addAllAchievements();
    
    achWindow.style.display = "block";
}

function closeAchievements() {
    achWindow.style.display = "none";
}

dragElement(achWindow);

function addAchivement(achName, achData) {
    const ach = document.createElement("div");
    const locked = unlockedAch[achName] == null;

    ach.classList.add("achBox");
    if(locked) {
        ach.classList.add("locked")
    }
    else if(ach.classList.contains("locked")) {
        ach.classList.remove("locked");
    }
    ach.innerHTML = `
    <div class="achTitle">
        ${achName}
    </div>
    <div class="achImageHolder">
        <img class="achImage" src=${achData.image}></img>
    </div>
    <div class="achText">
        ${achData.description}
    </div>
    `
    achContent.appendChild(ach);
}

function addAllAchievements() {
    let achAvail = false;
    achContent.innerHTML = "";
    for(ach in allAch) {
        achAvail = true;
        addAchivement(ach, allAch[ach])
    }
    if(!achAvail) {
        achContent.innerHTML = "No achievements are currently added yet! Check back later!";
    }
}

addAllAchievements();
