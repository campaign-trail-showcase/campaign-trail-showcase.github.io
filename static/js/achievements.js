let unlockedAch = localStorage.getItem("unlockedAch")
  ? JSON.parse(localStorage.getItem("unlockedAch"))
  : {};

function findAchievementByName(name) {
  for (mod in allAch) {
    for (a in allAch[mod]) {
      if (a == name) {
        return allAch[mod][a];
      }
    }
  }

  return null;
}

function unlockAchievement(name) {
  const ach = findAchievementByName(name);

  if (ach == null) {
    console.log("There is no achievement with the name '" + name + "'");
    return;
  }

  if (cheatsActive && ach.cannotBeCheated) {
    console.log(`Would unlock '${name}' but won't because cheating!`);
    return;
  }

  if (unlockedAch[name] == null) {
    alert("ACHIEVEMENT UNLOCKED: " + name);
  }

  unlockedAch[name] = ach;
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

// Returns true if the achievement is unlocked
function addAchivement(achName, achData, parent, theme) {
  const ach = document.createElement("div");
  const locked = unlockedAch[achName] == null;

  ach.classList.add("achBox");
  if (locked) {
    ach.classList.add("locked");
  } else if (ach.classList.contains("locked")) {
    ach.classList.remove("locked");
  }
  ach.innerHTML = `
    <div class="achTitle" style="${theme ? `color:${theme.ui_text_color}` : ""}">
        ${achName}
    </div>
    <div class="achImageHolder">
        <img class="achImage" src=${achData.image}></img>
    </div>
    <div class="achText" style="${theme ? `background-color:${theme.description_background_color}; color:${theme.description_text_color}` : ""}">
        ${achData.description}
    </div>
    `;

  if (theme) {
    ach.style.backgroundColor = theme.main_color;
  }

  parent.appendChild(ach);

  return !locked;
}

function addAllAchievements() {
  let achAvail = false;
  achContent.innerHTML = "";
  let names = Object.keys(allAch).sort();
  for (let i = 0; i < names.length; i++) {
    const modName = names[i];

    if (allAch[modName] === null || allAch[modName] === undefined) {
      continue;
    }

    let count = 0;
    let total = Object.values(allAch[modName]).length;
    achAvail = true;
    const holder = document.createElement("div");
    holder.classList.add("achHolder");
    const subHolder = document.createElement("div");
    const labelHolder = document.createElement("div");
    subHolder.classList.add("achSubHolder");
    let theme =
      localStorage.getItem("customModBoxThemesEnabled") == "true"
        ? customModBoxThemes[modName]
        : null;

    for (ach in allAch[modName]) {
      if (addAchivement(ach, allAch[modName][ach], subHolder, theme)) {
        count++;
      }
    }

    const label = document.createElement("p");
    label.innerHTML = `${namesOfModsFromValue[modName]}`;
    labelHolder.innerHTML += `<span style="position:absolute;top:0;right:0;font-style:italic;opacity:80%;padding:8px;font-size:small;">(${((count / total) * 100).toFixed(2)}%)</span>`;
    labelHolder.classList.add("achLabel");
    labelHolder.appendChild(label);

    const toggle = document.createElement("div");
    toggle.classList.add("achToggle");
    labelHolder.appendChild(toggle);
    toggle.innerText = "+";

    subHolder.style.display = "none";
    subHolder.style.visibility = "hidden";
    subHolder.style.maxHeight = "0px";

    labelHolder.onclick = () => {
      if (subHolder.style.visibility != "hidden") {
        toggle.innerText = "+";
        subHolder.style.display = "none";

        setTimeout(() => {
          subHolder.style.visibility = "hidden";
          subHolder.style.maxHeight = "0px";
        }, 5);
      } else {
        toggle.innerText = "-";
        subHolder.style.display = "inline-flex";

        setTimeout(() => {
          subHolder.style.visibility = "visible";
          subHolder.style.maxHeight = "100000px";
        }, 5);
      }

      setTimeout(() => {
        for (let i = 0; i < subHolder.childElementCount; i++) {
          let box = subHolder.children[i];
          box.style.opacity =
            subHolder.style.visibility == "hidden" ? "0%" : "100%";
        }
      }, 6);
    };

    holder.appendChild(labelHolder);
    holder.appendChild(subHolder);

    achContent.append(holder);

    if (theme) {
      labelHolder.style.backgroundColor = theme.header_color;
      labelHolder.style.color = theme.header_text_color;
    }
  }
  if (!achAvail) {
    achContent.innerHTML =
      "No achievements are currently added yet! Check back later!";
  }
}

addAllAchievements();
