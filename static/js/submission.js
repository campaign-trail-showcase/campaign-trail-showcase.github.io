let displayYear = null;

function extractElectionDetails(rawModText, nameOfMod) {

    if(rawModText == null) {
        return null;
    }

    let codeSnippet = null;
    let temp = {}
    let start = ""
    let end = ""

    if(rawModText.includes(".election_json = JSON.parse(")) {
        start = ".election_json = JSON.parse(";
        end = ")"
    } else if(rawModText.includes(".election_json = [")) {
        start = ".election_json = [";
        end = "]"
    } else {
        console.log("Could not extract metadata for mod: " + nameOfMod);
        return null;
    }

    let possibleEndIndices = getAllIndexes(rawModText, end);

    for(let i = 0; i < possibleEndIndices.length; i++) {
        codeSnippet = rawModText.slice(rawModText.indexOf(start), possibleEndIndices[i] + 1);
        if(codeSnippet.length <= 0) {
            continue;
        }

        try {
            eval("temp" + codeSnippet)
        } catch {
            codeSnippet = null;
        }

        if(codeSnippet != null) {
            break;
        }
    }

    if(codeSnippet == null || Object.keys(temp).length == 0) {
        console.log("Could not extract from " + nameOfMod)
    }

    return temp;
}


function extractCandidates(rawModText, nameOfMod) {

    if(rawModText == null) {
        return null;
    }

    let codeSnippet = null;
    let temp = {}
    let start = ""
    let end = ""

    if(rawModText.includes(".candidate_json = JSON.parse(")) {
        start = ".candidate_json = JSON.parse(";
        end = ")"
    } else if(rawModText.includes(".candidate_json = [")) {
        start = ".candidate_json = [";
        end = "]"
    } else {
        console.log("Could not extract candidates for mod: " + nameOfMod);
        return null;
    }

    let possibleEndIndices = getAllIndexes(rawModText, end);

    for(let i = 0; i < possibleEndIndices.length; i++) {
        codeSnippet = rawModText.slice(rawModText.indexOf(start), possibleEndIndices[i] + 1);
        if(codeSnippet.length <= 0) {
            continue;
        }

        try {
            eval("temp" + codeSnippet)
        } catch {
            codeSnippet = null;
        }

        if(codeSnippet != null) {
            break;
        }
    }

    if(codeSnippet == null || Object.keys(temp).length == 0) {
        console.log("Could not extract from " + nameOfMod)
    }

    return temp;
}

function extractRunningMates(rawModText, nameOfMod) {

    if(rawModText == null) {
        return null;
    }

    let codeSnippet = null;
    let temp = {}
    let start = ""
    let end = ""

    if(rawModText.includes(".running_mate_json = JSON.parse(")) {
        start = ".running_mate_json = JSON.parse(";
        end = ")"
    } else if(rawModText.includes(".running_mate_json = [")) {
        start = ".running_mate_json = [";
        end = "]"
    } else {
        console.log("Could not extract running mates for mod: " + nameOfMod);
        return null;
    }

    let possibleEndIndices = getAllIndexes(rawModText, end);

    for(let i = 0; i < possibleEndIndices.length; i++) {
        codeSnippet = rawModText.slice(rawModText.indexOf(start), possibleEndIndices[i] + 1);
        if(codeSnippet.length <= 0) {
            continue;
        }

        try {
            eval("temp" + codeSnippet)
        } catch {
            codeSnippet = null;
        }

        if(codeSnippet != null) {
            break;
        }
    }

    if(codeSnippet == null || Object.keys(temp).length == 0) {
        console.log("Could not extract from " + nameOfMod)
    }

    return temp;
}


function extractTempElection(rawModText, nameOfMod) {

    if(rawModText == null) {
        return null;
    }

    let codeSnippet = null;
    let temp = {}
    let start = ""
    let end = ""

    if(rawModText.includes(".temp_election_list = JSON.parse(")) {
        start = ".temp_election_list = JSON.parse(";
        end = ")"
    } else if(rawModText.includes(".temp_election_list = [")) {
        start = ".temp_election_list = [";
        end = "]"
    } else {
        console.log("Could not extract temp election for mod: " + nameOfMod);
        return null;
    }

    let possibleEndIndices = getAllIndexes(rawModText, end);

    for(let i = 0; i < possibleEndIndices.length; i++) {
        codeSnippet = rawModText.slice(rawModText.indexOf(start), possibleEndIndices[i] + 1);
        if(codeSnippet.length <= 0) {
            continue;
        }

        try {
            eval("temp" + codeSnippet)
        } catch {
            codeSnippet = null;
        }

        if(codeSnippet != null) {
            break;
        }
    }

    if(codeSnippet == null || Object.keys(temp).length == 0) {
        console.log("Could not extract from " + nameOfMod)
    }

    return temp;
}

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

const code1Picker = document.getElementById("code1");
const code2Area = document.getElementById("code2s");

code1Picker.addEventListener("change", (e) => {
    const code1 = code1Picker.files[0];

    let reader = new FileReader(); // built in API

    reader.addEventListener(
        "load",
        () => {
        
          try {
            let election = extractElectionDetails(reader.result, "uploaded mod").election_json;
            let candidates = extractCandidates(reader.result, "uploaded mod").candidate_json;
            let runningMates = extractRunningMates(reader.result, "uploaded mod").running_mate_json;
            let tempElection = extractTempElection(reader.result, "uploaded mod").temp_election_list[0];

            setUpCode2Submissions(election, candidates, runningMates, tempElection);
          }
          catch(e) {
            alert("There was an error processing your code 1. Are you sure you submitted the right file?");
            console.error("Error submitting: " + e);
          }
          
        },
        false,
      );
    
      if (code1) {
        reader.readAsText(code1);
      }
})

function getLastNameFromPk(candidates, pk) {
    return candidates.filter((x) => x.pk == pk)[0].fields.last_name;
}

function setUpCode2Submissions(election, candidates, runningMates, tempElection) {
    code2Area.innerHTML = "";

    let electionPk = election[0].pk;
    displayYear = tempElection.display_year ?? election[0].fields.display_year;

    document.getElementById("code1").name = displayYear + "_init";

    let modCandidates = candidates.filter((x) => x.fields.election == electionPk);

    let code2Names = modCandidates.filter((x) => x.fields.is_active).map((x) => runningMates.filter((y) => y.fields.candidate == x.pk).map(
        (x) => `${displayYear}_${getLastNameFromPk(candidates, x.fields.candidate)}${getLastNameFromPk(candidates, x.fields.running_mate)}.html`
    ));

    code2Names = code2Names.flat();

    for(let name of code2Names) {
        let id = name.split(".html")[0];
        code2Area.innerHTML += `
        <label style="font-weight:bold" for="${id}">${name}</label>
        <input onchange="checkAllPickers()" class="filePicker" type="file" id="${id}" name="${id}" accept="" />
        <br><br>
        `
    }

    document.getElementById("submitArea").innerHTML += `<button onclick="submitMod()">Submit Mod</button><div>Please only press this button once</div><p style="color:red" id="warning"></p>`
}

function checkAllPickers() {
    let allCode2s = true;
    for (const filePicker of document.getElementsByClassName("filePicker")) {
        if(!filePicker.files[0]) {
            allCode2s = false;
        }
    }

    if(!allCode2s) {
        document.getElementById("warning").innerText =  "Warning: Not all candidates/running mates have a code 2. If this is intentional because a candidate is not playable you are fine. Otherwise make sure all are uploaded before submitting.";
    }
    else {
        document.getElementById("warning").innerText = "";
    }
}

async function submitMod() {
    const data = new FormData();

    let validFileCount = 0;

    for (const filePicker of document.getElementsByClassName("filePicker")) {
        if(filePicker.files[0]) {
            validFileCount++;
            data.append(filePicker.name + ".html", filePicker.files[0], filePicker.name + ".html");
        }
    }

    let anyCode2 = validFileCount > 1;

    if(!anyCode2) {
        alert("You did not upload any Code 2s!");
        return;
    }

    const tags = Array.from(document.getElementsByClassName("tagCheckbox")).filter((x) => x.checked).map((x) => x.name);

    if(tags.length < 1) {
        alert("You must select at least one tag for your mod");
        return;
    }

    data.set('tags', tags);

    if(document.getElementById("fname").value == "") {
        alert("Please specify a mod name");
        return;
    }

    data.set('modName', document.getElementById("fname").value);
    data.set('modDisplayYear', displayYear);
  
    if(document.getElementById("fcontact").value == "") {
        alert("Please add your contact info");
        return;
    }

    data.set('contactInfo', document.getElementById("fcontact").value);

    data.set('additionalInfo', document.getElementById("fadditional").value);

    let req = await fetch('./', {
      method: 'POST',
      body: data,      
    });

    if(!req.ok) {
        alert("There was an error submitting your mod!");
        console.log(req);
    }
    else {
        alert("Mod submitted!");
        window.location.href = "../";
    }
   
}