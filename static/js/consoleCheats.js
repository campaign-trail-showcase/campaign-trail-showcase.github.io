const useConsoleCheats = () => {
  if (campaignTrail_temp.candidate_id === undefined) return; // must be in a scenario to use
  if (window.UsingConsoleCheats === true) return;
  window.UsingConsoleCheats = true;
  const e = campaignTrail_temp;
  cheatsActive = true;

  // == IMPROVE SELECTION ==

  function findCssRule(selectorText) {
    const result = [];
    const sheet = document.styleSheets[0];
    if (!sheet || !sheet.rules) return result;
    for (let i = 0; i < sheet.rules.length; i++) {
      const rule = sheet.rules[i];
      if (rule.selectorText === selectorText) {
        result.push(rule);
      }
    }
    return result;
  }

  // == END IMPROVE SELECTION ==

  // == IMPROVE HITBOXES ==

  function improveHitBoxes() {
    const labels = document.querySelectorAll("label");
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      const forAttr = label.getAttribute("for");
      if (!forAttr) continue;
      const id = forAttr.replace(/\[/g, "").replace(/\]/g, "");

      // check if ghost div already exists
      if (document.getElementById(`${id}_ghostDiv`)) continue;

      const text = label.innerHTML;

      // wrap text in div
      label.innerHTML = "";

      const textDiv = document.createElement("div");
      textDiv.style.display = "inline";
      textDiv.innerHTML = text;
      label.appendChild(textDiv);

      // create ghost div
      const ghostDiv = document.createElement("div");
      ghostDiv.id = `${id}_ghostDiv`;
      ghostDiv.className = "_answer_container";
      ghostDiv.style.backgroundColor = "#a552";
      ghostDiv.style.position = "absolute";
      ghostDiv.style.top = "0px";

      // create tooltip
      const tooltip = document.createElement("div");
      tooltip.className = "_answer_container_tooltip";
      tooltip.textContent = "Hello world";
      ghostDiv.appendChild(tooltip);

      label.appendChild(ghostDiv);

      // compute bounds
      const qForm = document.getElementById("question_form");
      const qWidth = qForm ? qForm.getBoundingClientRect().width : 300;
      const top = textDiv.getBoundingClientRect().top - ghostDiv.getBoundingClientRect().top;
      const height = textDiv.getBoundingClientRect().height;

      ghostDiv.style.top = `${top}px`;
      ghostDiv.style.width = `${qWidth}px`;
      ghostDiv.style.height = `${height}px`;
    }
  }

  if (!document.getElementById("answer-container-style")) {
    $(`
      <style id="answer-container-style">
      ._answer_container ._answer_container_tooltip {
          visibility: hidden;
          width: 120px;
          background-color: black;
          color: #fff;
          text-align: center;
          padding: 5px 0;
          border-radius: 6px;
          position: absolute;
          z-index: 1;
      }

      ._answer_container:hover ._answer_container_tooltip {
          visibility: visible;
      }
      </style>
    `).appendTo("head");
  }

  // == END IMPROVE HITBOXES ==

  // entity lookup dictionaries
  const stateNameById = Object.create(null);
  const stateByPk = Object.create(null);
  const stateAbbrToPk = new Map();

  for (let i = 0; i < e.states_json.length; i++) {
    const o = e.states_json[i];
    stateNameById[o.pk] = o.fields.name;
    stateByPk[o.pk] = o;
    stateAbbrToPk.set(o.fields.abbr.toLowerCase(), o.pk);
    stateAbbrToPk.set(o.fields.name.toLowerCase(), o.pk);
  }

  const candidateNameById = Object.create(null);
  for (let i = 0; i < e.candidate_json.length; i++) {
    const o = e.candidate_json[i];
    candidateNameById[o.pk] = `${o.fields.first_name} ${o.fields.last_name}`.trim();
  }

  const issueNameById = Object.create(null);
  for (let i = 0; i < e.issues_json.length; i++) {
    const o = e.issues_json[i];
    issueNameById[o.pk] = o.fields.name;
  }

  const candidate_state_multipliers = {};
  for (let i = 0; i < e.candidate_state_multiplier_json.length; i++) {
    const o = e.candidate_state_multiplier_json[i];
    const candidate = candidateNameById[o.fields.candidate];
    const state = stateNameById[o.fields.state];
    candidate_state_multipliers[candidate] = candidate_state_multipliers[candidate] || {};
    candidate_state_multipliers[candidate][state] = o.fields.state_multiplier;
  }

  function determineStance(issueId, n) {
    const a = e.global_parameter_json[0].fields;
    let i = 1;
    while (true) {
      const v = a["issue_stance_" + i + "_max"];
      if (v === undefined || n <= v) break;
      i++;
    }

    let issue_json = null;
    for (let j = 0; j < e.issues_json.length; j++) {
      if (e.issues_json[j].pk == issueId) {
        issue_json = e.issues_json[j];
        break;
      }
    }

    if (issue_json != null) {
      const stance = issue_json.fields["stance_" + i];
      return `${n} (${stance})`;
    }
    return "NULL";
  }

  const candidate_issue_scores = {};
  for (let i = 0; i < e.candidate_issue_score_json.length; i++) {
    const o = e.candidate_issue_score_json[i];
    const candidate = candidateNameById[o.fields.candidate];
    const issue = issueNameById[o.fields.issue];
    candidate_issue_scores[candidate] = candidate_issue_scores[candidate] || {};
    candidate_issue_scores[candidate][issue] = determineStance(o.fields.issue, o.fields.issue_score);
  }

  const running_mate_issue_scores = {};
  for (let i = 0; i < e.running_mate_issue_score_json.length; i++) {
    const o = e.running_mate_issue_score_json[i];
    const candidate = candidateNameById[o.fields.candidate];
    const issue = issueNameById[o.fields.issue];
    running_mate_issue_scores[candidate] = running_mate_issue_scores[candidate] || {};
    running_mate_issue_scores[candidate][issue] = determineStance(o.fields.issue, o.fields.issue_score);
  }

  const answers = Object.create(null);
  for (let i = 0; i < e.answers_json.length; i++) {
    const o = e.answers_json[i];
    answers[o.pk] = {
      text: o.fields.description,
      question: o.fields.question,
      feedback: "",
      global_effects: [],
      issue_effects: [],
      state_effects: [],
    };
  }

  for (let i = 0; i < e.answer_feedback_json.length; i++) {
    const o = e.answer_feedback_json[i];
    if (o.fields.candidate == e.candidate_id && answers[o.fields.answer]) {
      answers[o.fields.answer].feedback = o.fields.answer_feedback;
    }
  }

  for (let i = 0; i < e.answer_score_global_json.length; i++) {
    const o = e.answer_score_global_json[i];
    if (o.fields.candidate != e.candidate_id) continue;
    const ans = answers[o.fields.answer];
    if (!ans) continue;

    const aff = candidateNameById[o.fields.affected_candidate];
    if (!ans.global_effects.some((eff) => eff.affected_candidate === aff)) {
      ans.global_effects.push({
        affected_candidate: aff,
        global_multiplier: o.fields.global_multiplier,
      });
    }
  }

  for (let i = 0; i < e.answer_score_issue_json.length; i++) {
    const o = e.answer_score_issue_json[i];
    const ans = answers[o.fields.answer];
    if (!ans) continue;
    ans.issue_effects.push({
      issue: issueNameById[o.fields.issue],
      importance: o.fields.issue_importance,
      score: o.fields.issue_score,
    });
  }

  for (let i = 0; i < e.answer_score_state_json.length; i++) {
    const o = e.answer_score_state_json[i];
    if (o.fields.candidate != e.candidate_id) continue;
    const ans = answers[o.fields.answer];
    if (!ans) continue;
    ans.state_effects.push({
      affected_candidate: candidateNameById[o.fields.affected_candidate],
      state: stateNameById[o.fields.state],
      state_multiplier: o.fields.state_multiplier,
    });
  }

  const questions = Object.create(null);
  for (let i = 0; i < e.questions_json.length; i++) {
    const o = e.questions_json[i];
    questions[o.pk] = {
      text: o.fields.description,
      likelihood: o.fields.likelihood,
      priority: o.fields.priority,
      answers: [],
    };
  }

  for (const k in answers) {
    const o = answers[k];
    if (questions[o.question]) {
      questions[o.question].answers.push(o);
    }
  }

  // == COMPUTE RESULTS ==

  // pre-indexed maps for compute_results
  const globalScoreLookup = new Map();
  for (let i = 0; i < e.answer_score_global_json.length; i++) {
    const item = e.answer_score_global_json[i];
    globalScoreLookup.set(
      `${item.fields.answer}_${item.fields.candidate}_${item.fields.affected_candidate}`,
      item.fields.global_multiplier
    );
  }

  const stateIssueScoreLookup = new Map();
  for (let i = 0; i < e.state_issue_score_json.length; i++) {
    const item = e.state_issue_score_json[i];
    stateIssueScoreLookup.set(`${item.fields.state}_${item.fields.issue}`, {
      score: item.fields.state_issue_score,
      weight: item.fields.weight,
    });
  }

  const states_map = new Map();
  for (let i = 0; i < e.states_json.length; i++) {
    states_map.set(e.states_json[i].pk, e.states_json[i]);
  }

  function P(arr, prop) {
    return arr.sort((a, b) => (a[prop] < b[prop] ? -1 : a[prop] > b[prop] ? 1 : 0));
  }

  function compute_results(tentative_answers) {
    const answersArr = [...e.player_answers, ...(tentative_answers ?? [])];
    const candidate_ids = [e.candidate_id, ...e.opponents_list];
    const globalParams = e.global_parameter_json[0].fields;

    // global multipliers calculation
    const s = [];
    for (let a = 0; a < candidate_ids.length; a++) {
      const candId = candidate_ids[a];
      let l = 0;
      for (let r = 0; r < answersArr.length; r++) {
        const mult = globalScoreLookup.get(`${answersArr[r]}_${e.candidate_id}_${candId}`);
        if (mult !== undefined) l += mult;
      }

      let o = (candId === e.candidate_id && l < -0.4) ? 0.6 : 1 + l;
      let c = (candId === e.candidate_id) ? o * e.difficulty_level_multiplier : o;
      s.push({
        candidate: candId,
        global_multiplier: isNaN(c) ? 1 : c,
      });
    }

    // candidate issue scores
    const u = [];
    for (let a = 0; a < candidate_ids.length; a++) {
      const candId = candidate_ids[a];
      const v = [];
      for (let r = 0; r < e.candidate_issue_score_json.length; r++) {
        const item = e.candidate_issue_score_json[r];
        if (item.fields.candidate === candId) {
          v.push({
            issue: item.fields.issue,
            issue_score: item.fields.issue_score,
          });
          if (v.length === e.issues_json.length) break;
        }
      }
      u.push({
        candidate_id: candId,
        issue_scores: v,
      });
    }

    // state multipliers
    const f = [];
    for (let a = 0; a < candidate_ids.length; a++) {
      const candId = candidate_ids[a];
      const m = [];
      for (let r = 0; r < e.candidate_state_multiplier_json.length; r++) {
        const item = e.candidate_state_multiplier_json[r];
        if (item.fields.candidate === candId) {
          const p = item.fields.state_multiplier * s[a].global_multiplier;
          m.push({
            state: item.fields.state,
            state_multiplier: p,
          });
          if (m.length === e.states_json.length) break;
        }
      }
      P(m, "state");
      f.push({
        candidate_id: candId,
        state_multipliers: m,
      });
    }

    // issue stance shifts
    for (let a = 0; a < u[0].issue_scores.length; a++) {
      const currentIssue = u[0].issue_scores[a].issue;
      let h = -1;
      for (let r = 0; r < e.running_mate_issue_score_json.length; r++) {
        if (e.running_mate_issue_score_json[r].fields.issue === currentIssue) {
          h = r;
          break;
        }
      }

      let g = 0, b = 0;
      for (let r = 0; r < answersArr.length; r++) {
        for (let d = 0; d < e.answer_score_issue_json.length; d++) {
          const item = e.answer_score_issue_json[d];
          if (item.fields.issue === currentIssue && item.fields.answer === answersArr[r]) {
            g += item.fields.issue_score * item.fields.issue_importance;
            b += item.fields.issue_importance;
          }
        }
      }

      const runningMateScore = h !== -1 ? e.running_mate_issue_score_json[h].fields.issue_score : 0;
      u[0].issue_scores[a].issue_score =
        (u[0].issue_scores[a].issue_score * globalParams.candidate_issue_weight +
          runningMateScore * globalParams.running_mate_issue_weight +
          g) /
        (globalParams.candidate_issue_weight + globalParams.running_mate_issue_weight + b);
    }

    // answer score state effects
    const ASSJByAnswerPK = new Map();
    for (let i = 0; i < e.answer_score_state_json.length; i++) {
      const assj = e.answer_score_state_json[i];
      if (!ASSJByAnswerPK.has(assj.fields.answer)) {
        ASSJByAnswerPK.set(assj.fields.answer, [assj]);
      } else {
        ASSJByAnswerPK.get(assj.fields.answer).push(assj);
      }
    }

    for (let a = 0; a < candidate_ids.length; a++) {
      const candId = candidate_ids[a];
      const candStateMultipliers = f[a].state_multipliers;
      for (let r = 0; r < candStateMultipliers.length; r++) {
        let w = 0;
        const st = candStateMultipliers[r].state;
        for (let d = 0; d < answersArr.length; d++) {
          const list = ASSJByAnswerPK.get(answersArr[d]);
          if (!list) continue;
          for (let k = 0; k < list.length; k++) {
            const assj = list[k];
            if (
              assj.fields.state === st &&
              assj.fields.candidate === e.candidate_id &&
              assj.fields.affected_candidate === candId
            ) {
              w += assj.fields.state_multiplier;
            }
          }
        }

        if (a === 0) {
          if (e.running_mate_state_id === st) {
            w += 0.004 * candStateMultipliers[r].state_multiplier;
          }
          for (let d = 0; d < e.player_visits.length; d++) {
            if (e.player_visits[d] === st) {
              w += 0.005 * Math.max(0.1, candStateMultipliers[r].state_multiplier);
            }
          }
        }
        candStateMultipliers[r].state_multiplier += w;
      }
    }

    // calculate raw candidate popular vote values per state
    const y = [];
    const stateCount = f[0].state_multipliers.length;
    for (let a = 0; a < stateCount; a++) {
      const statePk = f[0].state_multipliers[a].state;
      const k = [];
      for (let r = 0; r < candidate_ids.length; r++) {
        let scoreSum = 0;
        const issueScores = u[r].issue_scores;
        for (let d = 0; d < issueScores.length; d++) {
          const issueObj = issueScores[d];
          const stateIssueData = stateIssueScoreLookup.get(`${statePk}_${issueObj.issue}`) || { score: 0, weight: 1 };
          const S = issueObj.issue_score * Math.abs(issueObj.issue_score);
          const E = stateIssueData.score * Math.abs(stateIssueData.score);
          scoreSum += globalParams.vote_variable - Math.abs((S - E) * stateIssueData.weight);
        }

        let stateMul = 1;
        const smList = f[r].state_multipliers;
        for (let d = 0; d < smList.length; d++) {
          if (smList[d].state === statePk) {
            stateMul = smList[d].state_multiplier;
            break;
          }
        }
        scoreSum = Math.max(scoreSum * stateMul, 0);
        k.push({
          candidate: candidate_ids[r],
          result: scoreSum,
        });
      }
      y.push({
        state: statePk,
        result: k,
        abbr: states_map.get(statePk)?.fields?.abbr || "",
      });
    }

    // calculate percentages & absolute votes
    for (let a = 0; a < y.length; a++) {
      const stateObj = states_map.get(y[a].state);
      const totalPopVotes = Math.floor(stateObj?.fields?.popular_votes || 0);
      let sumResult = 0;
      for (let r = 0; r < y[a].result.length; r++) sumResult += y[a].result[r].result;
      if (sumResult === 0) sumResult = 1;

      for (let r = 0; r < y[a].result.length; r++) {
        const pct = y[a].result[r].result / sumResult;
        y[a].result[r].percent = pct;
        y[a].result[r].votes = Math.floor(pct * totalPopVotes);
      }
    }

    // electoral votes distribution
    for (let a = 0; a < y.length; a++) {
      const state = states_map.get(y[a].state);
      const ev = state?.fields?.electoral_votes || 0;
      P(y[a].result, "percent");
      y[a].result.reverse();

      if (e.game_type_id == "1") {
        if (state?.fields?.winner_take_all_flg == 1) {
          for (let r = 0; r < y[a].result.length; r++) {
            y[a].result[r].electoral_votes = r === 0 ? ev : 0;
          }
        } else {
          let hVotes = 0;
          for (let r = 0; r < y[a].result.length; r++) hVotes += y[a].result[r].votes;
          const L = Math.ceil(((y[a].result[0]?.votes || 0) / (hVotes || 1)) * ev * 1.25);
          const D = ev - L;
          for (let r = 0; r < y[a].result.length; r++) {
            y[a].result[r].electoral_votes = r === 0 ? L : r === 1 ? D : 0;
          }
        }
      } else if (e.game_type_id == "2" && typeof divideElectoralVotesProp === "function") {
        const V = y[a].result.map((item) => item.percent);
        const q = divideElectoralVotesProp(V, ev);
        for (let r = 0; r < y[a].result.length; r++) {
          y[a].result[r].electoral_votes = q[r];
        }
      }
    }

    return y;
  }

  // diff between pop vote of candidate and pop vote of most popular other candidate
  let ignore_states = [];
  let custom_pop_vote_diff = null;

  // CUSTOM POP VOTE SCRIPTS

  function BOOST(candidate_name) {
    let candidate_pk = null;
    const defaultOpponents = e.opponents_default_json.find((f) => f.election === e.election_id)?.candidates || [];
    const playerAndOpponents = new Set([e.candidate_id, ...defaultOpponents]);

    for (let i = 0; i < campaignTrail_temp.candidate_json.length; i++) {
      const cjson = campaignTrail_temp.candidate_json[i];
      if (!playerAndOpponents.has(cjson.pk)) continue;
      const full_name = `${cjson.fields.first_name} ${cjson.fields.last_name}`;
      if (full_name.toLowerCase().includes(candidate_name.toLowerCase())) {
        if (candidate_pk != null) {
          throw new Error(`Multiple candidates have "${candidate_name}" in their name; please disambiguate`);
        }
        candidate_pk = cjson.pk;
      }
    }

    return (results) => {
      let acc = 0;
      for (let i = 0; i < results.length; i++) {
        const { abbr, result } = results[i];
        if (ignore_states.includes(abbr)) continue;
        let my_votes = 0;
        let second_best = 0;
        for (let j = 0; j < result.length; j++) {
          if (result[j].candidate === candidate_pk) {
            my_votes = result[j].votes;
          } else {
            if (result[j].votes > second_best) second_best = result[j].votes;
          }
        }
        acc += (my_votes - second_best);
      }
      return acc;
    };
  }

  function SABOTAGE(candidate_name) {
    return (results) => -BOOST(candidate_name)(results);
  }

  function pop_vote_diff(results) {
    if (custom_pop_vote_diff != null) {
      return custom_pop_vote_diff(results);
    }
    const cjson = campaignTrail_temp.candidate_json.find((e) => e.pk === campaignTrail_temp.candidate_id);
    if (!cjson) return 0;
    return BOOST(`${cjson.fields.first_name} ${cjson.fields.last_name}`)(results);
  }

  // == END COMPUTE RESULTS ==

  if (!document.getElementById("cheat-input-style")) {
    $(`
      <style id="cheat-input-style">
      input[type="radio"].cheat-hint-applied {
          border: none;
      }
      input[type="radio"].cheat-hint-applied:hover,
      input[type="radio"].cheat-hint-applied:checked {
          border: 2px solid #000;
      }
      </style>
    `).appendTo("head");
  }

  clearInterval(window.tct_cheat_interval);

  // cached state for rendering and sorting
  let lastQuestionNumber = -1;
  let lastPlayerVisitsLength = -1;
  let lastIgnoreStatesLength = -1;
  let cachedPopVoteMap = null;
  let prev_answer_hint_enabled = false;
  let prev_sort_answers_state = false;

  let sort_answers = false;
  let answer_hint_enabled = false;
  let auto_visit = null;

  function colorLerp(r1, g1, b1, r2, g2, b2, n) {
    const r = Math.round(r1 + (r2 - r1) * n);
    const g = Math.round(g1 + (g2 - g1) * n);
    const b = Math.round(b1 + (b2 - b1) * n);
    return `rgb(${r}, ${g}, ${b})`;
  }

  window.tct_cheat_interval = setInterval(function () {
    const questionForm = document.querySelector("form[name='question']");
    const inputs = questionForm ? questionForm.querySelectorAll("input[type='radio']") : [];
    if (!questionForm || inputs.length === 0) return;

    const needsRecalculation =
      lastQuestionNumber !== e.question_number ||
      lastPlayerVisitsLength !== e.player_visits.length ||
      lastIgnoreStatesLength !== ignore_states.length ||
      cachedPopVoteMap === null;

    if (needsRecalculation) {
      lastQuestionNumber = e.question_number;
      lastPlayerVisitsLength = e.player_visits.length;
      lastIgnoreStatesLength = ignore_states.length;
      cachedPopVoteMap = new Map();

      for (let i = 0; i < inputs.length; i++) {
        const id = inputs[i].value;
        cachedPopVoteMap.set(id, pop_vote_diff(compute_results([parseInt(id, 10)])));
      }
    }

    const popVoteMap = cachedPopVoteMap;

    // perform sort only when question changes or sorting toggles
    if (sort_answers && (needsRecalculation || !prev_sort_answers_state)) {
      const parent = inputs[0]?.parentElement;
      if (parent) {
        const items = [];
        for (let i = 0; i < inputs.length; i++) {
          const inp = inputs[i];
          const label = inp.nextElementSibling;
          const br = label ? label.nextElementSibling : null;
          items.push({ inp, label, br, pv: popVoteMap.get(inp.value) || 0 });
        }

        items.sort((a, b) => b.pv - a.pv);
        for (let i = 0; i < items.length; i++) {
          parent.appendChild(items[i].inp);
          if (items[i].label) parent.appendChild(items[i].label);
          if (items[i].br) parent.appendChild(items[i].br);
        }
      }
      prev_sort_answers_state = true;
    } else if (!sort_answers) {
      prev_sort_answers_state = false;
    }

    // apply color hints and tooltips
    if (answer_hint_enabled) {
      let minVotes = Infinity;
      let maxVotes = -Infinity;
      for (const v of popVoteMap.values()) {
        if (v < minVotes) minVotes = v;
        if (v > maxVotes) maxVotes = v;
      }
      const range = maxVotes - minVotes + 1 || 1;

      for (let i = 0; i < inputs.length; i++) {
        const inp = inputs[i];
        const id = inp.value;
        const answer = answers[id];
        if (!answer) continue;

        const numVotes = popVoteMap.get(id) || 0;
        let n = ((numVotes - minVotes + 1) / range) ** 2;
        if (n < 1) n *= 0.9;
        const hintColor = colorLerp(255, 0, 0, 0, 255, 0, n);

        inp.style.appearance = "none";
        inp.style.webkitAppearance = "none";
        inp.style.height = "10px";
        inp.style.width = "25px";
        inp.style.backgroundColor = hintColor;
        inp.classList.add("cheat-hint-applied");

        let str = `Feedback: ${answer.feedback}\n\nPopular vote (after selecting): ${numVotes.toLocaleString()}\n\n`;

        if (answer.issue_effects.length > 0) {
          str += "Issue effects:\n";
          for (let j = 0; j < answer.issue_effects.length; j++) {
            const eff = answer.issue_effects[j];
            str += `\tIssue: ${eff.issue}, Importance: ${eff.importance}, Score: ${eff.score}\n`;
          }
          str += "\n";
        }

        if (answer.global_effects.length > 0) {
          str += "Global effects:\n";
          for (let j = 0; j < answer.global_effects.length; j++) {
            const eff = answer.global_effects[j];
            str += `\tCandidate: ${eff.affected_candidate}, Multiplier: ${eff.global_multiplier}\n`;
          }
          str += "\n";
        }

        if (answer.state_effects.length > 0) {
          str += "State effects:\n";
          for (let j = 0; j < answer.state_effects.length; j++) {
            const eff = answer.state_effects[j];
            str += `\tCandidate: ${eff.affected_candidate}, State: ${eff.state}, Multiplier: ${eff.state_multiplier}\n`;
          }
          str += "\n";
        }

        inp.title = str;
      }
      prev_answer_hint_enabled = true;
    } else if (prev_answer_hint_enabled) {
      for (let i = 0; i < inputs.length; i++) {
        const inp = inputs[i];
        inp.style.appearance = "";
        inp.style.webkitAppearance = "";
        inp.style.height = "";
        inp.style.width = "";
        inp.style.backgroundColor = "";
        inp.title = "";
        inp.classList.remove("cheat-hint-applied");
      }
      prev_answer_hint_enabled = false;
    }

    // Auto-visit automation
    if ($(".visit_text").length > 0 && auto_visit != null) {
      const plugin = $("#map_container").data("plugin-usmap");
      const availableStates = e.states_json.map((st) => st.fields.abbr);

      if (plugin?.options?.click) {
        const visitAndConfirm = (abbr) => {
          plugin.options.click({ target: null }, { name: abbr });
          document.getElementById("confirm_visit_button")?.click();
        };

        if (auto_visit === "all") {
          const firstPath = availableStates[0];
          for (let i = 0; i < availableStates.length; i++) {
            const state = availableStates[i];
            if (state !== firstPath) {
              const pk = stateAbbrToPk.get(state.toLowerCase());
              if (pk) e.player_visits.push(pk);
            }
          }
          visitAndConfirm(firstPath);
        } else {
          const stateExists = availableStates.includes(auto_visit);
          if (stateExists) {
            visitAndConfirm(auto_visit);
          }
        }
      }
    }
  }, 120);

  // == CHEATS ==

  const gcsmj_map = new Map();
  for (let i = 0; i < e.candidate_state_multiplier_json.length; i++) {
    const entry = e.candidate_state_multiplier_json[i];
    const cand = entry.fields.candidate;
    const st = entry.fields.state;
    if (!gcsmj_map.has(cand)) gcsmj_map.set(cand, new Map());
    gcsmj_map.get(cand).set(st, entry);
  }

  function get_candidate_state_mul_json(candidate_pk, state_pk) {
    if (!gcsmj_map.has(candidate_pk)) gcsmj_map.set(candidate_pk, new Map());
    if (!gcsmj_map.get(candidate_pk).has(state_pk)) {
      const new_entry = {
        fields: {
          candidate: candidate_pk,
          state: state_pk,
          state_multiplier: 1,
        },
        model: "campaign_trail.candidate_state_multiplier",
        pk: -1,
      };
      e.candidate_state_multiplier_json.push(new_entry);
      gcsmj_map.get(candidate_pk).set(state_pk, new_entry);
    }
    return gcsmj_map.get(candidate_pk).get(state_pk);
  }

  const cheat_mod_tracker = new Map();
  function cmt_set(candidate_pk, state_pk, val) {
    if (!cheat_mod_tracker.has(candidate_pk)) cheat_mod_tracker.set(candidate_pk, new Map());
    cheat_mod_tracker.get(candidate_pk).set(state_pk, val);
  }
  function cmt_get(candidate_pk, state_pk) {
    return cheat_mod_tracker.get(candidate_pk)?.get(state_pk);
  }

  function add_state_modifier(candidate_pk, state_pk, amt) {
    const obj = get_candidate_state_mul_json(candidate_pk, state_pk);
    cmt_set(candidate_pk, state_pk, (cmt_get(candidate_pk, state_pk) ?? 0) + amt);
    obj.fields.state_multiplier += amt;
    if (isNaN(obj.fields.state_multiplier)) throw new Error("NaN found in state modifier");
    cachedPopVoteMap = null;
  }

  function add_global_modifier(candidate_pk, amt) {
    for (let i = 0; i < e.states_json.length; i++) {
      add_state_modifier(candidate_pk, e.states_json[i].pk, amt);
    }
  }

  function clear_cheat_effects() {
    for (const [candidate_pk, map] of cheat_mod_tracker) {
      for (const [state_pk] of map) {
        add_state_modifier(candidate_pk, state_pk, -cmt_get(candidate_pk, state_pk));
      }
    }
    cachedPopVoteMap = null;
  }

  function state_pk_of_string(str) {
    if (!str) return null;
    const lower = str.trim().toLowerCase();
    if (stateAbbrToPk.has(lower)) return stateAbbrToPk.get(lower);
    return null;
  }

  function candidate_pk_of_string(str) {
    if (!str) return null;
    const lower = str.trim().toLowerCase();
    const electionCandidates = e.candidate_json.filter((elt) => elt.fields.election === e.election_id);
    const elt = electionCandidates.find((cand) => {
      const fullName = `${cand.fields.first_name} ${cand.fields.last_name}`.toLowerCase();
      return fullName.includes(lower);
    });
    return elt ? elt.pk : null;
  }

  // --- Terminal UI & Autocomplete Engine ---
  const terminalContainer = $("<div></div>")
    .addClass("terminal-container")
    .addClass("minimized")
    .draggable()
    .css("position", "absolute");

  const terminalHeader = $("<div></div>")
    .addClass("terminal-header")
    .text("Campaign Trail Terminal")
    .appendTo(terminalContainer);

  const toggleButton = $("<button></button>")
    .addClass("toggle-button")
    .text("+")
    .appendTo(terminalHeader)
    .on("click", function () {
      toggleTerminal();
    });

  function toggleTerminal() {
    if (terminalContainer.hasClass("minimized")) {
      toggleButton.text("-");
      terminalContainer.removeClass("minimized");
      return true;
    } else {
      toggleButton.text("+");
      terminalContainer.addClass("minimized");
      return false;
    }
  }
  window.toggleCampaignTerminal = toggleTerminal;

  const terminalBody = $("<div></div>")
    .addClass("terminal-body")
    .appendTo(terminalContainer);

  function write(msg, color) {
    if (Array.isArray(msg)) {
      msg.forEach((e) => write(e, color));
      return;
    }
    if (typeof msg !== "string") msg = String(msg);
    color = color ?? "#fff";
    const indentMatch = msg.match(/^\t*/);
    const indent = indentMatch ? indentMatch[0].length : 0;
    msg = msg.replace(/^\t+/, "");

    $("<div></div>")
      .text(msg)
      .css({
        color: color,
        "white-space": "pre-wrap",
        "margin-left": `${indent * 24}px`,
      })
      .appendTo(terminalBody);
    terminalBody.scrollTop(terminalBody.prop("scrollHeight"));
  }

  const ORIGINAL_MARSAGLIA = typeof randomNormal === "function" ? randomNormal : null;
  let optrng_enabled = false;
  function set_optimal_rng(enabled) {
    if (enabled && !optrng_enabled) {
      if (typeof randomNormal === "function") {
        randomNormal = (cand) => (cand === e.candidate_id ? 3 : -3);
      }
      optrng_enabled = true;
    } else if (!enabled && optrng_enabled) {
      if (typeof ORIGINAL_MARSAGLIA === "function") {
        randomNormal = ORIGINAL_MARSAGLIA;
      }
      optrng_enabled = false;
    }
  }

  const cmds = [
    {
      prefix: "global",
      usage: [
        "\tglobal [candidate ;] <modifier> - Add a global modifier for a candidate (defaults to player). Examples:",
        "\t\tglobal Joe Biden; 0.05 \t# Boost Joe Biden globally by 0.05",
        "\t\tglobal -0.01 \t# Boost player candidate globally by -0.01",
      ],
      handle: (argstr) => {
        const args = argstr.split(";").map((e) => e.trim());
        let candidate_pk, modifier;
        if (args.length === 2) {
          candidate_pk = candidate_pk_of_string(args[0]);
          modifier = parseFloat(args[1]);
        } else if (args.length === 1) {
          candidate_pk = e.candidate_id;
          modifier = parseFloat(args[0]);
        }

        if (candidate_pk == null || isNaN(modifier)) {
          write("Incorrect usage or unresolved candidate/modifier. Example: global 0.05", "#aaa");
          return;
        }

        const candidate = e.candidate_json.find((c) => c.pk === candidate_pk);
        add_global_modifier(candidate_pk, modifier);
        write(
          `Added global modifier of ${modifier.toFixed(3)} to ${candidate.fields.first_name} ${candidate.fields.last_name}`,
          "#aaa"
        );
      },
    },
    {
      prefix: "state",
      usage: [
        "\tstate [candidate ;] <state> ; <modifier> - Add a state modifier (defaults to player). Examples:",
        "\t\tstate Trump; MI; 0.02 \t# Boost Donald Trump in Michigan by 0.02",
        "\t\tstate Michigan; 0.02 \t# Boost player candidate in Michigan by 0.02",
      ],
      handle: (argstr) => {
        const args = argstr.split(";").map((e) => e.trim());
        let candidate_pk, state_pk, modifier;
        if (args.length === 3) {
          candidate_pk = candidate_pk_of_string(args[0]);
          state_pk = state_pk_of_string(args[1]);
          modifier = parseFloat(args[2]);
        } else if (args.length === 2) {
          candidate_pk = e.candidate_id;
          state_pk = state_pk_of_string(args[0]);
          modifier = parseFloat(args[1]);
        }

        if (candidate_pk == null || state_pk == null || isNaN(modifier)) {
          write("Incorrect usage or unresolved candidate/state/modifier. Example: state MI; 0.02", "#aaa");
          return;
        }

        const candidate = e.candidate_json.find((c) => c.pk === candidate_pk);
        const state = e.states_json.find((s) => s.pk === state_pk);

        add_state_modifier(candidate_pk, state_pk, modifier);
        write(
          `Added state modifier of ${modifier.toFixed(3)} to ${candidate.fields.first_name} ${candidate.fields.last_name} in ${state.fields.name}`,
          "#aaa"
        );
      },
    },
    {
      prefix: "optrng",
      usage: ["\toptrng [on|off] - Toggle optimal RNG rolls for player"],
      handle: (argstr) => {
        if (argstr === "on" && !optrng_enabled) {
          set_optimal_rng(true);
          write("Turned optimal RNG on", "#aaa");
        } else if (argstr === "off" && optrng_enabled) {
          set_optimal_rng(false);
          write("Turned optimal RNG off", "#aaa");
        } else {
          write(`Optimal RNG is currently ${optrng_enabled ? "on" : "off"}`, "#aaa");
        }
      },
    },
    {
      prefix: "answerhints",
      usage: ["\tanswerhints [on|off] - Turns color-coded answer hints on or off"],
      handle: (argstr) => {
        if (argstr === "on" && !answer_hint_enabled) {
          answer_hint_enabled = true;
          write("Turned answer hints on", "#aaa");
        } else if (argstr === "off" && answer_hint_enabled) {
          answer_hint_enabled = false;
          write("Turned answer hints off", "#aaa");
        } else {
          write(`Answer hints are currently ${answer_hint_enabled ? "on" : "off"}`, "#aaa");
        }
      },
    },
    {
      prefix: "ignore",
      usage: [
        "\tignore [state ;]... - Ignore state(s) for answer calculation (or 'ignore all')",
      ],
      handle: (argstr) => {
        const args = argstr.split(";").map((e) => e.trim().toLowerCase()).filter(Boolean);
        const added = [];
        const check_state = (stateStr) => {
          const pk = state_pk_of_string(stateStr);
          if (pk == null) return;
          const abbr = stateByPk[pk].fields.abbr;
          if (!ignore_states.includes(abbr)) {
            ignore_states.push(abbr);
            added.push(abbr);
          }
        };

        for (let i = 0; i < args.length; i++) {
          if (args[i] === "all") {
            for (let j = 0; j < e.states_json.length; j++) {
              check_state(e.states_json[j].fields.abbr);
            }
          } else {
            check_state(args[i]);
          }
        }

        if (added.length > 0) write(`Added states to ignore list: ${added.join(", ")}`, "#aaa");
        write(ignore_states.length > 0 ? `Ignore list: ${ignore_states.join(", ")}` : "Ignore list is empty", "#aaa");
      },
    },
    {
      prefix: "unignore",
      usage: ["\tunignore [state ;]... - Remove state(s) from ignore list (or 'unignore all')"],
      handle: (argstr) => {
        const args = argstr.split(";").map((e) => e.trim().toLowerCase()).filter(Boolean);
        const removed = [];
        const check_state = (stateStr) => {
          const pk = state_pk_of_string(stateStr);
          if (pk == null) return;
          const abbr = stateByPk[pk].fields.abbr;
          if (ignore_states.includes(abbr)) {
            ignore_states = ignore_states.filter((st) => st !== abbr);
            removed.push(abbr);
          }
        };

        for (let i = 0; i < args.length; i++) {
          if (args[i] === "all") {
            ignore_states = [];
            write("Cleared entire ignore list", "#aaa");
            return;
          } else {
            check_state(args[i]);
          }
        }

        if (removed.length > 0) write(`Removed states from ignore list: ${removed.join(", ")}`, "#aaa");
        write(ignore_states.length > 0 ? `Ignore list: ${ignore_states.join(", ")}` : "Ignore list is empty", "#aaa");
      },
    },
    {
      prefix: "autovisit",
      usage: [
        "\tautovisit <state|all|off> - Automatically visit specified state each turn",
      ],
      handle: (argstr) => {
        argstr = argstr.trim().toLowerCase();
        if (argstr === "off") {
          auto_visit = null;
          write("Turned off auto-visit", "#aaa");
        } else if (argstr === "all") {
          auto_visit = "all";
          write("Auto-visit set to 'all' states", "#aaa");
        } else {
          const state_pk = state_pk_of_string(argstr);
          const state = e.states_json.find((s) => s.pk === state_pk);
          if (state) {
            auto_visit = state.fields.abbr;
            write(`Auto-visit set to ${auto_visit} (${state.fields.name})`, "#aaa");
          } else {
            write(auto_visit ? `Auto-visit is currently set to ${auto_visit}` : "Auto-visit is off", "#aaa");
          }
        }
      },
    },
    {
      prefix: "sortanswers",
      usage: ["\tsortanswers [on|off] - Automatically sort answers best-to-worst"],
      handle: (argstr) => {
        argstr = argstr.trim().toLowerCase();
        if (argstr === "off") {
          sort_answers = false;
          write("Turned off answer sorting", "#aaa");
        } else if (argstr === "on") {
          sort_answers = true;
          write("Turned on answer sorting", "#aaa");
        } else {
          write(`Answer sorting is ${sort_answers ? "on" : "off"}`, "#aaa");
        }
      },
    },
    {
      prefix: "answerscript",
      usage: ["\tanswerscript <code> - Inject custom lambda for answer evaluation"],
      handle: (argstr) => {
        argstr = argstr.trim();
        if (argstr === "") {
          custom_pop_vote_diff = null;
          write("Reset answer script to default", "#aaa");
        } else {
          try {
            custom_pop_vote_diff = eval(argstr);
            write(`Loaded custom answer script (${argstr.length} chars)`, "#aaa");
          } catch (err) {
            custom_pop_vote_diff = null;
            write(`Error parsing script: ${err.message}`, "#f55");
          }
        }
        cachedPopVoteMap = null;
      },
    },
    {
      prefix: "reset",
      usage: ["\treset - Reset all cheated effects and parameters to normal"],
      handle: () => {
        ignore_states = [];
        custom_pop_vote_diff = null;
        answer_hint_enabled = true;
        auto_visit = null;
        set_optimal_rng(false);
        sort_answers = false;
        clear_cheat_effects();
        write("Removed all cheated effects and reset cheats", "#aaa");
      },
    },
  ];

  function handleCmd(msg) {
    if (!msg || msg.trim().length === 0) return;
    write(`> ${msg}`);
    const parts = msg.trim().split(" ");
    const cmdName = parts[0].toLowerCase();
    const cmd = cmds.find((c) => c.prefix === cmdName);

    if (!cmd) {
      write(`Command '${cmdName}' not recognized. Type 'reset' or check commands list.`, "#f77");
      return;
    }
    cmd.handle(msg.substring(parts[0].length).trim());
  }

  // --- Autocomplete Provider ---
  function getAutocompletion(currentInput) {
    if (!currentInput) return null;
    const trimmed = currentInput;
    const lower = trimmed.toLowerCase();
    const tokens = trimmed.split(" ");
    const firstWord = tokens[0].toLowerCase();

    // 1. Completing the command word
    if (tokens.length === 1) {
      const match = cmds.find((c) => c.prefix.startsWith(firstWord) && c.prefix !== firstWord);
      if (match) {
        return {
          full: match.prefix + " ",
          ghost: match.prefix.slice(firstWord.length) + " ",
        };
      }
      return null;
    }

    // 2. Completing arguments based on command
    const rest = trimmed.substring(tokens[0].length).trimStart();
    const restLower = rest.toLowerCase();

    if (firstWord === "optrng" || firstWord === "answerhints" || firstWord === "sortanswers") {
      const opts = ["on", "off"];
      const m = opts.find((o) => o.startsWith(restLower) && o !== restLower);
      if (m) {
        return {
          full: `${tokens[0]} ${m}`,
          ghost: m.slice(restLower.length),
        };
      }
    }

    if (firstWord === "autovisit") {
      const opts = ["all", "off", ...e.states_json.map((s) => s.fields.abbr), ...e.states_json.map((s) => s.fields.name)];
      const m = opts.find((o) => o.toLowerCase().startsWith(restLower) && o.toLowerCase() !== restLower);
      if (m) {
        return {
          full: `${tokens[0]} ${m}`,
          ghost: m.slice(restLower.length),
        };
      }
    }

    if (firstWord === "ignore" || firstWord === "unignore") {
      const subParts = rest.split(";");
      const currentToken = subParts[subParts.length - 1].trimStart();
      const currentTokenLower = currentToken.toLowerCase();
      if (currentTokenLower) {
        const opts = ["all", ...e.states_json.map((s) => s.fields.abbr), ...e.states_json.map((s) => s.fields.name)];
        const m = opts.find((o) => o.toLowerCase().startsWith(currentTokenLower) && o.toLowerCase() !== currentTokenLower);
        if (m) {
          subParts[subParts.length - 1] = " " + m;
          const fullStr = `${tokens[0]} ${subParts.join(";").trim()}`;
          return {
            full: fullStr,
            ghost: m.slice(currentTokenLower.length),
          };
        }
      }
    }

    if (firstWord === "global") {
      const subParts = rest.split(";");
      if (subParts.length === 1 && !rest.includes(";")) {
        const candNames = e.candidate_json
          .filter((c) => c.fields.election === e.election_id)
          .map((c) => `${c.fields.first_name} ${c.fields.last_name}`);
        const m = candNames.find((name) => name.toLowerCase().startsWith(restLower) && name.toLowerCase() !== restLower);
        if (m) {
          return {
            full: `${tokens[0]} ${m}; `,
            ghost: m.slice(restLower.length) + "; ",
          };
        }
      }
    }

    if (firstWord === "state") {
      const subParts = rest.split(";");
      if (subParts.length === 1) {
        const candNames = e.candidate_json
          .filter((c) => c.fields.election === e.election_id)
          .map((c) => `${c.fields.first_name} ${c.fields.last_name}`);
        const m = candNames.find((name) => name.toLowerCase().startsWith(restLower) && name.toLowerCase() !== restLower);
        if (m) {
          return {
            full: `${tokens[0]} ${m}; `,
            ghost: m.slice(restLower.length) + "; ",
          };
        }
      } else if (subParts.length === 2) {
        const stPart = subParts[1].trimStart().toLowerCase();
        const opts = [...e.states_json.map((s) => s.fields.abbr), ...e.states_json.map((s) => s.fields.name)];
        const m = opts.find((o) => o.toLowerCase().startsWith(stPart) && o.toLowerCase() !== stPart);
        if (m) {
          return {
            full: `${tokens[0]} ${subParts[0].trim()}; ${m}; `,
            ghost: m.slice(stPart.length) + "; ",
          };
        }
      }
    }

    return null;
  }

  // --- Terminal UI Construction ---
  const terminalActionBar = $("<div></div>")
    .addClass("terminal-footer")
    .appendTo(terminalContainer);

  const inputWrapper = $("<div></div>")
    .addClass("terminal-input-wrapper")
    .css({ position: "relative", flexGrow: "1", display: "flex", alignItems: "center" })
    .appendTo(terminalActionBar);

  const ghostTextSpan = $("<span></span>")
    .addClass("terminal-ghost-hint")
    .css({
      position: "absolute",
      left: "10px",
      color: "rgba(255, 255, 255, 0.38)",
      pointerEvents: "none",
      fontFamily: "monospace",
      fontSize: "14px",
      whiteSpace: "pre",
    })
    .appendTo(inputWrapper);

  let activeSuggestion = null;

  function updateGhostSuggestion(val) {
    activeSuggestion = getAutocompletion(val);
    if (activeSuggestion) {
      ghostTextSpan.text(val + activeSuggestion.ghost);
    } else {
      ghostTextSpan.text("");
    }
  }

  const cmdHistory = [];
  let cmdHistoryIdx = -1;

  const terminalInput = $("<input>")
    .addClass("terminal-input")
    .attr("type", "text")
    .attr("spellcheck", "false")
    .attr("autocomplete", "off")
    .css({ fontFamily: "monospace", fontSize: "14px" })
    .appendTo(inputWrapper)
    .on("input", function () {
      updateGhostSuggestion($(this).val());
    })
    .keydown(function (event) {
      if (event.which === 13) {
        // Enter
        event.preventDefault();
        const val = $(this).val();
        handleCmd(val);
        if (val.trim()) {
          cmdHistory.unshift(val);
          cmdHistoryIdx = -1;
        }
        $(this).val("");
        updateGhostSuggestion("");
      } else if (event.which === 9 || (event.which === 39 && this.selectionStart === $(this).val().length)) {
        // Tab or Right-Arrow at end of input
        if (activeSuggestion) {
          event.preventDefault();
          $(this).val(activeSuggestion.full);
          updateGhostSuggestion(activeSuggestion.full);
        }
      } else if (event.which === 38) {
        // Up Arrow (History)
        event.preventDefault();
        if (cmdHistory.length > 0) {
          cmdHistoryIdx = Math.min(cmdHistoryIdx + 1, cmdHistory.length - 1);
          $(this).val(cmdHistory[cmdHistoryIdx]);
          updateGhostSuggestion(cmdHistory[cmdHistoryIdx]);
        }
      } else if (event.which === 40) {
        // Down Arrow (History)
        event.preventDefault();
        cmdHistoryIdx = Math.max(cmdHistoryIdx - 1, -1);
        const nextVal = cmdHistoryIdx >= 0 ? cmdHistory[cmdHistoryIdx] : "";
        $(this).val(nextVal);
        updateGhostSuggestion(nextVal);
      }
    });

  $("<button></button>")
    .addClass("submit-button")
    .text(">")
    .appendTo(terminalActionBar)
    .on("click", function () {
      handleCmd(terminalInput.val());
      terminalInput.val("");
      updateGhostSuggestion("");
    });

  $("body").append(terminalContainer);

  write("Welcome to the TCT Cheat Menu.", "#aaa");
  write("Press Tab to autocomplete commands, states, and candidates.", "#7af");
  write("Commands:", "#aaa");
  for (let i = 0; i < cmds.length; i++) {
    cmds[i].usage.forEach((msg) => write(msg, "#aaa"));
  }

  if (!document.getElementById("campaign-terminal-style")) {
    $("<style>")
      .attr("id", "campaign-terminal-style")
      .text(`
            .terminal-container {
                position: absolute;
                top: 260px;
                left: 20px;
                background-color: rgba(10, 15, 25, 0.88);
                backdrop-filter: blur(4px);
                color: #fff;
                width: 520px;
                height: 320px;
                border-radius: 8px;
                border: 1px solid rgba(255, 255, 255, 0.15);
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
                z-index: 9999;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                font-size: 14px;
            }

            .terminal-header {
                background-color: rgba(20, 30, 60, 0.5);
                padding: 10px;
                cursor: move;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                font-weight: bold;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }

            .toggle-button, .submit-button {
                width: 24px;
                height: 24px;
                border: none;
                background-color: transparent;
                color: #fff;
                font-size: 18px;
                line-height: 1;
                cursor: pointer;
                border-radius: 4px;
            }
            .toggle-button:hover, .submit-button:hover {
                background-color: rgba(255, 255, 255, 0.15);
            }

            .terminal-body {
                padding: 10px;
                flex-grow: 1;
                overflow-y: auto;
                font-family: monospace;
            }

            .terminal-footer {
                border-top: 1px solid rgba(255, 255, 255, 0.15);
                background-color: rgba(10, 15, 30, 0.4);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding-right: 4px;
            }

            .terminal-input {
                background-color: transparent;
                color: #fff;
                padding: 10px;
                border: none;
                width: 100%;
                box-sizing: border-box;
                outline: none;
                z-index: 2;
            }

            .terminal-container.minimized {
                height: 40px;
                overflow: hidden;
            }
        `)
      .appendTo("head");
  }
};

window.addEventListener("keypress", (e) => {
  if (e.key === "$") {
    if (window.UsingConsoleCheats === true && typeof window.toggleCampaignTerminal === "function") {
      const expanded = window.toggleCampaignTerminal();
      if (expanded) {
        $(".terminal-input")[0]?.focus({ focusVisible: true });
      } else {
        $(".terminal-input")[0]?.blur();
      }
    } else {
      useConsoleCheats();
    }
  }
});

// QOL: play game with keyboard
$(document).ready(() => {
  $(document).keypress((e) => {
    if (e.isDefaultPrevented()) return;
    const key = e.key;

    if (key === "$" && window.UsingConsoleCheats === true) {
      e.preventDefault();
    }

    if (document.activeElement !== document.body) return;

    if (key >= "1" && key <= "5") {
      const radioElts = $(".game_answers");
      const idx = key.charCodeAt(0) - 49;
      if (radioElts[idx]) radioElts[idx].checked = true;
      e.preventDefault();
    } else if (key === "Enter") {
      const okBtn = document.getElementById("ok_button");
      const ansBtn = document.getElementById("answer_select_button");
      if (okBtn) {
        okBtn.click();
        e.preventDefault();
      } else if (ansBtn) {
        ansBtn.click();
        e.preventDefault();
      }
    }
  });
});
