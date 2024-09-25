const useConsoleCheats = () => {
  if (campaignTrail_temp.candidate_id === undefined) return; // must be in a scenario to use
  if (window.UsingConsoleCheats === true) return;
  window.UsingConsoleCheats = true;
  const e = campaignTrail_temp;
  cheatsActive = true;

  // == IMPROVE SELECTION ==

  function findCssRule(selectorText) {
    let result = [];
    const sheet = document.styleSheets[0];
    for (const rule of sheet.rules) {
      if (rule.selectorText === selectorText) {
        result.push(rule);
      }
    }
    return result;
  }

  {
    /*
        const rule = findCssRule('#question_form label:hover')[0];
        rule.style.removeProperty('font-size');
        rule.style.removeProperty('font-weight');
        rule.style.removeProperty('margin-bottom');
        rule.style.setProperty('text-decoration', 'underline');
        rule.style.setProperty('text-decoration-color', '#05e');
        rule.style.setProperty('color', '#05e');
        */
  }

  // == END IMPROVE SELECTION ==

  // == IMPROVE HITBOXES ==

  function improveHitBoxes() {
    const labels = $("label");
    for (const label of labels) {
      const forAttr = label.getAttribute("for"); // game_answers[0]
      const id = forAttr.replaceAll("[", "").replaceAll("]", "");

      // check if ghost div already exists
      if ($(`#${id}_ghostDiv`).length > 0) continue;

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
      tooltip.innerHTML = "Hello world";
      ghostDiv.appendChild(tooltip);

      label.appendChild(ghostDiv);

      // compute bounds
      const top =
        textDiv.getBoundingClientRect().top -
        ghostDiv.getBoundingClientRect().top;
      const width = $("#question_form")[0].getBoundingClientRect().width;
      const height = textDiv.getBoundingClientRect().height;
      ghostDiv.style.top = `${top}px`;
      ghostDiv.style.width = `${width}px`;
      ghostDiv.style.height = `${height}px`;
    }
  }

  $(`
    <style>
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

  // improveHitBoxes();

  /*
    window.addEventListener('DOMNodeInserted', (event) => {
        const elt = event.target;
        if (elt.tagName !== 'input') return;
        console.log(elt.tagName);
    });
    
    $('#question_form > form')[0].addEventListener('DOMNodeInserted', (event) => {
        const elt = event.target;
        console.log(elt);
    });
    */

  // improveHitBoxes();

  // == END IMPROVE HITBOXES ==

  const stateNameById = {};
  const stateByPk = {};

  for (const o of e.states_json) {
    stateNameById[o.pk] = o.fields.name;
    stateByPk[o.pk] = o;
  }

  let candidateNameById = {};

  for (let o of e.candidate_json) {
    candidateNameById[o.pk] = o.fields.first_name + " " + o.fields.last_name;
  }

  let issueNameById = {};

  for (let o of e.issues_json) {
    issueNameById[o.pk] = o.fields.name;
  }

  let candidate_state_multipliers = {};

  for (let o of e.candidate_state_multiplier_json) {
    let candidate = candidateNameById[o.fields.candidate];
    let state = stateNameById[o.fields.state];
    let mult = o.fields.state_multiplier;
    candidate_state_multipliers[candidate] =
      candidate_state_multipliers[candidate] || {};
    candidate_state_multipliers[candidate][state] = mult;

    //if (o.fields.candidate == e.candidate_id) { o.fields.state_multiplier = 1; }
    //if (candidate == "Henry Wallace") { o.fields.state_multiplier = 1; }
  }

  function determineStance(issueId, n) {
    let a = e.global_parameter_json[0].fields;
    let i = 1;
    while (true) {
      let v = a["issue_stance_" + i + "_max"];
      if (v == undefined || n <= v) {
        break;
      }
      i++;
    }

    let issue_json = null;

    for (let o of e.issues_json) {
      if (o.pk == issueId) {
        issue_json = o;
      }
    }

    if (issue_json != null) {
      let stance = issue_json.fields["stance_" + i];
      let str = "" + n + " (" + stance + ")";
      return str;
    } else {
      return "NULL";
    }
  }

  let candidate_issue_scores = {};

  for (let o of e.candidate_issue_score_json) {
    let candidate = candidateNameById[o.fields.candidate];
    let issue = issueNameById[o.fields.issue];
    let score = o.fields.issue_score;

    candidate_issue_scores[candidate] = candidate_issue_scores[candidate] || {};
    candidate_issue_scores[candidate][issue] = determineStance(
      o.fields.issue,
      score,
    );

    //o.fields.issue_score = 0;
  }

  let running_mate_issue_scores = {};

  for (let o of e.running_mate_issue_score_json) {
    let candidate = candidateNameById[o.fields.candidate];
    let issue = issueNameById[o.fields.issue];
    let score = o.fields.issue_score;

    running_mate_issue_scores[candidate] =
      running_mate_issue_scores[candidate] || {};
    running_mate_issue_scores[candidate][issue] = determineStance(
      o.fields.issue,
      score,
    );
  }

  let answers = {};

  for (let o of e.answers_json) {
    let id = o.pk;
    let text = o.fields.description;
    answers[id] = {};
    answers[id].text = text;
    answers[id].question = o.fields.question;
    answers[id].feedback = "";
    answers[id].global_effects = [];
    answers[id].issue_effects = [];
    answers[id].state_effects = [];
  }

  for (let o of e.answer_feedback_json) {
    if (o.fields.candidate != e.candidate_id) {
      continue;
    }

    let id = o.fields.answer;
    let feedback = o.fields.answer_feedback;

    if (answers[id] === undefined) {
      console.log(`answer id=${id} was undefined`);
      continue;
    }
    answers[id].feedback = feedback;
  }

  for (let o of e.answer_score_global_json) {
    if (o.fields.candidate != e.candidate_id) {
      continue;
    }

    let id = o.fields.answer;
    let affected_candidate = candidateNameById[o.fields.affected_candidate];
    let global_multiplier = o.fields.global_multiplier;

    if (answers[id] === undefined) {
      console.log(`answer id=${id} was undefined`);
      continue;
    }
    if (
      answers[id].global_effects.find(
        (e) => e.affected_candidate === affected_candidate,
      ) != null
    )
      continue;
    answers[id].global_effects.push({
      affected_candidate: affected_candidate,
      global_multiplier: global_multiplier,
    });
  }

  for (let o of e.answer_score_issue_json) {
    let id = o.fields.answer;
    let issue = issueNameById[o.fields.issue];
    let importance = o.fields.issue_importance;
    let score = o.fields.issue_score;

    if (answers[id] === undefined) {
      console.log(`answer id=${id} was undefined`);
      continue;
    }
    answers[id].issue_effects.push({
      issue: issue,
      importance: importance,
      score: score,
    });
  }

  for (let o of e.answer_score_state_json) {
    if (o.fields.candidate != e.candidate_id) {
      continue;
    }

    let id = o.fields.answer;
    let affected_candidate = candidateNameById[o.fields.affected_candidate];
    let state = stateNameById[o.fields.state];
    let state_multiplier = o.fields.state_multiplier;

    if (answers[id] === undefined) {
      console.log(`answer id=${id} was undefined`);
      continue;
    }
    answers[id].state_effects.push({
      affected_candidate: affected_candidate,
      state: state,
      state_multiplier: state_multiplier,
    });
  }

  let questions = {};

  for (let o of e.questions_json) {
    let id = o.pk;
    let text = o.fields.description;
    let likelihood = o.fields.likelihood;
    let priority = o.fields.priority;

    questions[id] = {
      text: text,
      likelihood: likelihood,
      priority: priority,
      answers: [],
    };
  }

  for (let k in answers) {
    let o = answers[k];
    if (o.question in questions) {
      questions[o.question].answers.push(o);
    } else {
      console.log(`Stray answer: ${o.text}`);
    }
  }

  //console.log(candidate_state_multipliers);
  //console.log(candidate_issue_scores);
  //console.log(running_mate_issue_scores);
  //console.log(answers);
  //console.log(questions);

  // == COMPUTE RESULTS ==

  // tentative_answers: number[] is an array of answer ids
  // function adapted from A(t)
  function compute_results(tentative_answers) {
    let e = campaignTrail_temp;
    let answers = [...e.player_answers, ...(tentative_answers ?? [])];
    function F() {
      return 0;
    }
    function P(e, t) {
      return e.sort(function (e, i) {
        var a = e[t],
          s = i[t];
        return a < s ? -1 : a > s ? 1 : 0;
      });
    }

    const states_map = new Map();
    e.states_json.forEach((e) => states_map.set(e.pk, e));

    const candidate_ids = [e.candidate_id, ...e.opponents_list];

    var s = [];
    for (a = 0; a < candidate_ids.length; a++) {
      for (var n = [], l = 0, o = 0, _ = 0, r = 0; r < answers.length; r++)
        for (var d = 0; d < e.answer_score_global_json.length; d++)
          if (
            e.answer_score_global_json[d].fields.answer == answers[r] &&
            e.answer_score_global_json[d].fields.candidate == e.candidate_id &&
            e.answer_score_global_json[d].fields.affected_candidate ==
              candidate_ids[a]
          ) {
            n.push(e.answer_score_global_json[d].fields.global_multiplier);
            break;
          }
      for (r = 0; r < n.length; r++) l += n[r];
      if (
        ((o = candidate_ids[a] == e.candidate_id && l < -0.4 ? 0.6 : 1 + l),
        candidate_ids[a] == e.candidate_id)
      )
        var c =
          o *
          (1 + F() * e.global_parameter_json[0].fields.global_variance) *
          e.difficulty_level_multiplier;
      else
        c = o * (1 + F() * e.global_parameter_json[0].fields.global_variance);
      _ = isNaN(c) ? 1 : c;
      s.push({
        candidate: candidate_ids[a],
        global_multiplier: _,
      });
    }

    var u = [];
    for (a = 0; a < candidate_ids.length; a++) {
      var v = [];
      for (
        r = 0;
        r < e.candidate_issue_score_json.length &&
        (e.candidate_issue_score_json[r].fields.candidate != candidate_ids[a] ||
          (v.push({
            issue: e.candidate_issue_score_json[r].fields.issue,
            issue_score: e.candidate_issue_score_json[r].fields.issue_score,
          }),
          v.length != e.issues_json.length));
        r++
      );
      u.push({
        candidate_id: candidate_ids[a],
        issue_scores: v,
      });
    }

    var f = [];
    for (a = 0; a < candidate_ids.length; a++) {
      var m = [];
      for (r = 0; r < e.candidate_state_multiplier_json.length; r++)
        if (
          e.candidate_state_multiplier_json[r].fields.candidate ==
          candidate_ids[a]
        ) {
          var p =
            e.candidate_state_multiplier_json[r].fields.state_multiplier *
            s[a].global_multiplier *
            (1 + F() * e.global_parameter_json[0].fields.global_variance);
          if (
            (m.push({
              state: e.candidate_state_multiplier_json[r].fields.state,
              state_multiplier: p,
            }),
            m.length == e.states_json.length)
          )
            break;
          P(m, "state");
        }
      f.push({
        candidate_id: candidate_ids[a],
        state_multipliers: m,
      });
    }

    for (a = 0; a < u[0].issue_scores.length; a++) {
      var h = -1;
      for (r = 0; r < e.running_mate_issue_score_json.length; r++)
        if (
          e.running_mate_issue_score_json[r].fields.issue ==
          u[0].issue_scores[a].issue
        ) {
          h = r;
          break;
        }
      var g = 0,
        b = 0;
      for (r = 0; r < answers.length; r++)
        for (d = 0; d < e.answer_score_issue_json.length; d++)
          e.answer_score_issue_json[d].fields.issue ==
            u[0].issue_scores[a].issue &&
            e.answer_score_issue_json[d].fields.answer == answers[r] &&
            ((g +=
              e.answer_score_issue_json[d].fields.issue_score *
              e.answer_score_issue_json[d].fields.issue_importance),
            (b += e.answer_score_issue_json[d].fields.issue_importance));
      u[0].issue_scores[a].issue_score =
        (u[0].issue_scores[a].issue_score *
          e.global_parameter_json[0].fields.candidate_issue_weight +
          e.running_mate_issue_score_json[h].fields.issue_score *
            e.global_parameter_json[0].fields.running_mate_issue_weight +
          g) /
        (e.global_parameter_json[0].fields.candidate_issue_weight +
          e.global_parameter_json[0].fields.running_mate_issue_weight +
          b);
    }

    const ASSJByAnswerPK = new Map();
    for (const assj of e.answer_score_state_json) {
      if (!ASSJByAnswerPK.has(assj.fields.answer)) {
        ASSJByAnswerPK.set(assj.fields.answer, [assj]);
      } else {
        ASSJByAnswerPK.get(assj.fields.answer).push(assj);
      }
    }

    for (a = 0; a < candidate_ids.length; a++)
      for (r = 0; r < f[a].state_multipliers.length; r++) {
        var w = 0;
        for (d = 0; d < answers.length; d++) {
          if (!ASSJByAnswerPK.has(answers[d])) continue;
          for (const assj of ASSJByAnswerPK.get(answers[d])) {
            if (
              assj.fields.state == f[a].state_multipliers[r].state &&
              assj.fields.candidate == e.candidate_id &&
              assj.fields.affected_candidate == candidate_ids[a]
            ) {
              w += assj.fields.state_multiplier;
            }
          }
        }
        if (0 == a) {
          e.running_mate_state_id == f[a].state_multipliers[r].state &&
            (w += 0.004 * f[a].state_multipliers[r].state_multiplier);
          for (d = 0; d < e.player_visits.length; d++)
            e.player_visits[d] == f[a].state_multipliers[r].state &&
              (w +=
                0.005 *
                Math.max(0.1, f[a].state_multipliers[r].state_multiplier));
        }
        f[a].state_multipliers[r].state_multiplier += w;
      }

    var y = [];
    for (a = 0; a < f[0].state_multipliers.length; a++) {
      var k = [];
      for (r = 0; r < candidate_ids.length; r++) {
        var $ = 0;
        for (d = 0; d < u[r].issue_scores.length; d++) {
          var T = 0,
            A = 1;
          for (j = 0; j < e.state_issue_score_json.length; j++)
            if (
              e.state_issue_score_json[j].fields.state ==
                f[0].state_multipliers[a].state &&
              e.state_issue_score_json[j].fields.issue ==
                u[0].issue_scores[d].issue
            ) {
              (T = e.state_issue_score_json[j].fields.state_issue_score),
                (A = e.state_issue_score_json[j].fields.weight);
              break;
            }
          var S =
              u[r].issue_scores[d].issue_score *
              Math.abs(u[r].issue_scores[d].issue_score),
            E = T * Math.abs(T);
          $ +=
            e.global_parameter_json[0].fields.vote_variable -
            Math.abs((S - E) * A);
        }
        for (d = 0; d < f[r].state_multipliers.length; d++)
          if (
            f[r].state_multipliers[d].state == f[0].state_multipliers[a].state
          )
            var C = d;
        ($ *= f[r].state_multipliers[C].state_multiplier),
          ($ = Math.max($, 0)),
          k.push({
            candidate: candidate_ids[r],
            result: $,
          });
      }
      y.push({
        state: f[0].state_multipliers[a].state,
        result: k,
      });
    }

    for (a = 0; a < y.length; a++)
      for (r = 0; r < e.states_json.length; r++)
        if (y[a].state == e.states_json[r].pk) {
          y[a].abbr = e.states_json[r].fields.abbr;
          break;
        }

    for (a = 0; a < y.length; a++) {
      var M = 0;
      for (r = 0; r < e.states_json.length; r++)
        if (e.states_json[r].pk == y[a].state) {
          M = Math.floor(e.states_json[r].fields.popular_votes);
          break;
        }
      var x = 0;
      for (r = 0; r < y[a].result.length; r++) x += y[a].result[r].result;
      for (r = 0; r < y[a].result.length; r++) {
        var N = y[a].result[r].result / x;
        (y[a].result[r].percent = N),
          (y[a].result[r].votes = Math.floor(N * M));
      }
    }

    for (a = 0; a < y.length; a++) {
      let state = states_map.get(y[a].state);
      var O = 0;
      if (
        (P(y[a].result, "percent"),
        y[a].result.reverse(),
        (O = state.fields.electoral_votes),
        "1" == e.game_type_id)
      )
        if (1 == state.fields.winner_take_all_flg)
          for (r = 0; r < y[a].result.length; r++)
            y[a].result[r].electoral_votes = 0 == r ? O : 0;
        else {
          O = state.fields.electoral_votes;
          var H = 0;
          for (r = 0; r < y[a].result.length; r++) H += y[a].result[r].votes;
          var L = Math.ceil((y[a].result[0].votes / H) * O * 1.25),
            D = O - L;
          for (r = 0; r < y[a].result.length; r++)
            y[a].result[r].electoral_votes = 0 == r ? L : 1 == r ? D : 0;
        }
      if ("2" == e.game_type_id) {
        var V = [];
        for (r = 0; r < y[a].result.length; r++) V.push(y[a].result[r].percent);
        var q = divideElectoralVotesProp(V, O);
        for (r = 0; r < y[a].result.length; r++)
          y[a].result[r].electoral_votes = q[r];
      }
    }

    return y;
  }

  // diff between pop vote of candidate and pop vote of most popular other candidate
  let ignore_states = [];
  let custom_pop_vote_diff = null;
  /*
    interface CandidateResult {
        candidate: number; // candidate PK
        result: number; // raw result
        electoral_votes: number;
        percent: number;
        votes: number;
    }
    interface StateResult {
        abbr: string; // 'MI'
        state: number; // state PK
        result: CandidateResult[];
    }
    type Results = StateResult[]
    */

  // CUSTOM POP VOTE SCRIPTS

  function BOOST(candidate_name) {
    let candidate_pk;
    for (const cjson of campaignTrail_temp.candidate_json.filter(
      (e) => e.fields.election === campaignTrail_temp.election_id,
    )) {
      const full_name = `${cjson.fields.first_name} ${cjson.fields.last_name}`;
      if (full_name.toLowerCase().includes(candidate_name.toLowerCase())) {
        if (candidate_pk != null) {
          throw new Error(
            `Multiple candidates have "${candidate_name}" in their name; please disambiguate`,
          );
        }
        candidate_pk = cjson.pk;
      }
    }
    return (results) =>
      results.reduce((acc, { abbr, result }) => {
        if (ignore_states.find((e) => e === abbr) != null) {
          return acc;
        }
        let my_votes = result.find((e) => e.candidate === candidate_pk).votes;
        let second_best = result.reduce(
          (acc, cr) =>
            cr.candidate === candidate_pk ? acc : Math.max(acc, cr.votes),
          0,
        );
        let diff = my_votes - second_best;
        return acc + diff;
      }, 0);
  }

  function SABOTAGE(candidate_name) {
    return (results) => -BOOST(candidate_name)(results);
  }

  function pop_vote_diff(results) {
    if (custom_pop_vote_diff != null) {
      return custom_pop_vote_diff(results);
    } else {
      const cjson = campaignTrail_temp.candidate_json.find(
        (e) => e.pk === campaignTrail_temp.candidate_id,
      );
      return BOOST(`${cjson.fields.first_name} ${cjson.fields.last_name}`)(
        results,
      );
    }
    /*
        const cid = campaignTrail_temp.candidate_id;
        let total_diff = 0;
        for (const {abbr, result} of results) {
            if (ignore_states.find(e => e === abbr) != null) {
                continue;
            }
            const our_votes = result.find(e => e.candidate === cid).votes;
            const their_votes = result.reduce(
                (acc, val) => {
                    if (val.candidate === cid) return acc;
                    return Math.max(acc, val.votes);
                },
                0
            );
            total_diff += (our_votes - their_votes);
        }
        return total_diff;
        */
  }

  // == END COMPUTE RESULTS ==

  // add CSS for color hints
  $(`
    <style>
    input {
        border: none;
    }
    
    input:hover {
        border: 2px solid #000;
    }
    
    input:checked {
        border: 2px solid #000;
    }
    </style>
    `).appendTo("head");

  clearInterval(window.tct_cheat_interval);

  // cache on question number and player visits
  let [lastQuestionNumber, lastPlayerVisitsLength, lastIgnoreStatesLength] = [
    -1, -1, -1,
  ];
  let stateToPath = new Map();
  let cachedPopVoteMap = null;

  let sort_answers = false;
  let answer_hint_enabled = false;
  let auto_visit = null;
  window.tct_cheat_interval = setInterval(function () {
    if (
      lastQuestionNumber !== e.question_number ||
      lastPlayerVisitsLength !== e.player_visits.length ||
      lastIgnoreStatesLength !== ignore_states.length ||
      cachedPopVoteMap == null
    ) {
      lastQuestionNumber = e.question_number;
      lastPlayerVisitsLength = e.player_visits.length;
      lastIgnoreStatesLength = ignore_states.length;
      cachedPopVoteMap = new Map();
      $("form[name='question'] > input").each(function () {
        let id = $(this).attr("value");
        cachedPopVoteMap.set(
          id,
          pop_vote_diff(compute_results([parseInt(id)])),
        );
      });
    }
    const popVoteMap = cachedPopVoteMap;

    let minVotes = Array.from(popVoteMap.values()).reduce(
      (acc, val) => (val < acc ? val : acc),
      Infinity,
    );
    let maxVotes = Array.from(popVoteMap.values()).reduce(
      (acc, val) => (val > acc ? val : acc),
      -Infinity,
    );

    function colorLerp(r1, g1, b1, r2, g2, b2, n) {
      let r = r1 + (r2 - r1) * n;
      let g = g1 + (g2 - g1) * n;
      let b = b1 + (b2 - b1) * n;
      return `rgb(${r.toFixed(0)}, ${g.toFixed(0)}, ${b.toFixed(0)})`;
    }

    if (sort_answers) {
      function swap(a, b) {
        a = $(a);
        b = $(b);
        const a2 = a.next();
        const a3 = a2.next();
        const b2 = b.next();
        const b3 = b2.next();
        var tmp = $("<span>").hide();
        a.before(tmp);
        b.before(a);
        b.before(a2);
        b.before(a3);
        tmp.replaceWith(b3);
        b3.before(b);
        b3.before(b2);
      }

      const inputs = $("form[name='question']").children("input");
      // bubble sort lol
      const getPV = (input) => popVoteMap.get($(input).attr("value"));
      let N = inputs.length;
      let swapped = false;
      do {
        swapped = false;
        for (let i = 1; i < N; i++) {
          if (getPV(inputs[i - 1]) < getPV(inputs[i])) {
            swap(inputs[i - 1], inputs[i]);
            let tmp = inputs[i];
            inputs[i] = inputs[i - 1];
            inputs[i - 1] = tmp;
            swapped = true;
          }
        }
        N -= 1;
      } while (swapped);
    }

    $("form[name='question'] > input").each(function () {
      let id = $(this).attr("value");
      let answer = answers[id];
      let str = "";

      str += "Feedback: " + answer.feedback + "\n";
      str += "\n";

      const numVotes = popVoteMap.get(id);

      str += "Popular vote (after selecting): " + numVotes + "\n";
      str += "\n";

      let n = ((numVotes - minVotes + 1) / (maxVotes - minVotes + 1)) ** 2;
      if (n < 1) n *= 0.9;
      const hintColor = colorLerp(255, 0, 0, 0, 255, 0, n);
      if (answer_hint_enabled) {
        $(this).css({
          appearance: "none",
          height: "10px",
          backgroundColor: hintColor,
        });
      } else {
        $(this).css({
          appearance: "",
          height: "",
          backgroundColor: "",
        });
      }

      if (answer.issue_effects.length > 0) {
        str += "Issue effects:" + "\n";
        for (let effect of answer.issue_effects) {
          let issue = effect.issue;
          let importance = effect.importance;
          let score = effect.score;

          str +=
            "\t" +
            "Issue: " +
            issue +
            ", Importance: " +
            importance +
            ", Score: " +
            score +
            "\n";
        }
        str += "\n";
      }

      if (answer.global_effects.length > 0) {
        str += "Global effects:" + "\n";
        for (let effect of answer.global_effects) {
          let affected = effect.affected_candidate;
          let multiplier = effect.global_multiplier;

          str +=
            "\t" +
            "Candidate: " +
            affected +
            ", Multiplier: " +
            multiplier +
            "\n";
        }
        str += "\n";
      }

      if (answer.state_effects.length > 0) {
        str += "State effects:" + "\n";
        for (let effect of answer.state_effects) {
          let affected = effect.affected_candidate;
          let state = effect.state;
          let multiplier = effect.state_multiplier;

          str +=
            "\t" +
            "Candidate: " +
            affected +
            ", State: " +
            state +
            ", Multiplier: " +
            multiplier +
            "\n";
        }
        str += "\n";
      }

      if (answer_hint_enabled) {
        $(this).attr("title", str);
      } else {
        $(this).attr("title", "");
      }
    });

    if (document.activeElement.type === "radio") document.activeElement.blur();

    // Compute state SVG paths
    if (
      stateToPath.size < 1 ||
      !document.body.contains(stateToPath.values().next().value)
    ) {
      stateToPath = new Map();
      const stateNameToAttr = new Map();
      for (const state of e.states_json) {
        stateNameToAttr.set(state.fields.name, state.fields.abbr);
      }
      const get_tooltip = () => $("#state_info")?.children()[1]?.innerHTML;
      for (const path of $("path")) {
        if (
          !path.dispatchEvent(new MouseEvent("mouseover", { cancelable: true }))
        ) {
          const tooltip = get_tooltip();
          const state = stateNameToAttr.get(tooltip);
          if (state == null) continue;
          if (stateToPath.has(state)) continue;
          path.setAttribute("id", state);
          stateToPath.set(state, path);
        }
      }
    }

    const stateAbbrToPk = new Map();
    for (const state of e.states_json) {
      stateAbbrToPk.set(state.fields.abbr, state.pk);
    }
    if ($(".visit_text").length > 0) {
      if (auto_visit == "all") {
        const visitables = Array.from(stateToPath.keys());
        const path = stateToPath.get(visitables[0]);
        for (let i = 1; i < visitables.length; i++) {
          e.player_visits.push(stateAbbrToPk.get(visitables[i]));
        }
        path.dispatchEvent(new MouseEvent("click", { cancelable: true }));
        $("#confirm_visit_button")[0]?.dispatchEvent(
          new MouseEvent("click", { cancelable: true }),
        );
      } else if (auto_visit != null) {
        const path = stateToPath.get(auto_visit);
        if (path == null) {
          console.warn(`State not found on map: ${auto_visit}`);
        } else {
          path.dispatchEvent(new MouseEvent("click", { cancelable: true }));
          $("#confirm_visit_button")[0]?.dispatchEvent(
            new MouseEvent("click", { cancelable: true }),
          );
        }
      }
    }
  }, 10);

  // == CHEATS ==

  // get candidate_state_multiplier_json object, creating one if it doesn't exist
  const gcsmj_map = new Map(); // Map<CandidatePK, Map<StatePK, Object>>
  for (const entry of e.candidate_state_multiplier_json) {
    const candidate_pk = entry.fields.candidate;
    const state_pk = entry.fields.state;
    if (!gcsmj_map.has(candidate_pk)) {
      gcsmj_map.set(candidate_pk, new Map());
    }
    gcsmj_map.get(candidate_pk).set(state_pk, entry);
  }
  function get_candidate_state_mul_json(candidate_pk, state_pk) {
    if (!gcsmj_map.has(candidate_pk)) {
      gcsmj_map.set(candidate_pk, new Map());
    }
    if (!gcsmj_map.get(candidate_pk).has(state_pk)) {
      const new_entry = {
        fields: {
          candidate: candidate_pk,
          state: state_pk,
          state_multiplier: 1,
        },
        model: "campaign_trail.candidate_state_multiplier",
        pk: -1, // hopefully this doesn't matter
      };
      e.candidate_state_multiplier_json.push(new_entry);
      gcsmj_map.get(candidate_pk).set(state_pk, {});
    }
    return gcsmj_map.get(candidate_pk).get(state_pk);
  }

  const cheat_mod_tracker = new Map(); // Map<CandidatePK, Map<StatePK, Number>>
  function cmt_set(candidate_pk, state_pk, val) {
    if (!cheat_mod_tracker.has(candidate_pk)) {
      cheat_mod_tracker.set(candidate_pk, new Map());
    }
    cheat_mod_tracker.get(candidate_pk).set(state_pk, val);
  }
  function cmt_get(candidate_pk, state_pk) {
    if (!cheat_mod_tracker.has(candidate_pk)) {
      return undefined;
    }
    return cheat_mod_tracker.get(candidate_pk).get(state_pk);
  }

  function add_state_modifier(candidate_pk, state_pk, amt) {
    const obj = get_candidate_state_mul_json(candidate_pk, state_pk);
    cmt_set(
      candidate_pk,
      state_pk,
      (cmt_get(candidate_pk, state_pk) ?? 0) + amt,
    );
    obj.fields.state_multiplier += amt;
    if (isNaN(obj.fields.state_multiplier)) {
      throw new Error("NaN found");
    }
  }

  function add_global_modifier(candidate_pk, amt) {
    for (const state_pk of e.states_json.map((e) => e.pk)) {
      add_state_modifier(candidate_pk, state_pk, amt);
    }
  }

  function clear_cheat_effects() {
    for (const [candidate_pk, map] of cheat_mod_tracker) {
      for (const [state_pk, amt] of map) {
        add_state_modifier(
          candidate_pk,
          state_pk,
          -cmt_get(candidate_pk, state_pk),
        );
      }
    }
  }

  // Convert string (ex. "AK" or "Alaska") into a state_pk
  function state_pk_of_string(str) {
    let elt = e.states_json.find(
      (e) =>
        e.fields.name.toLowerCase() === str.toLowerCase() ||
        e.fields.abbr.toLowerCase() === str.toLowerCase(),
    );
    if (elt) return elt.pk;
    return null;
  }

  // Convert string (ex. "Biden") into a candidate_pk
  function candidate_pk_of_string(str) {
    const candidate_json = e.candidate_json.filter(
      (elt) => elt.fields.election === e.election_id,
    );
    let elt = candidate_json.find((elt) => {
      const full_name = `${elt.fields.first_name} ${elt.fields.last_name}`;
      return full_name.toLowerCase().includes(str.toLowerCase());
    });
    if (elt) return elt.pk;
    return null;
  }

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
      $(this).text($(this).text() === "-" ? "+" : "-");
      terminalContainer.toggleClass("minimized");
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

  const terminalBody = $("<div></div>")
    .addClass("terminal-body")
    .appendTo(terminalContainer);

  function write(msg, color) {
    if (Array.isArray(msg)) {
      msg.forEach((e) => write(e, color));
      return;
    }
    if (typeof msg !== "string")
      throw new Error(`Unexpected type of msg: ${msg}`);
    color ??= "#fff";
    let indent = msg.match(/^\t*/)[0].length; // replace tabs at beginning of msg with indents (which persist across line wraps)
    msg = msg.replace(/^\t+/, "");
    const msgDiv = $("<div></div>")
      .text(msg)
      .css({
        color: color,
        "white-space": "pre-wrap",
        "margin-left": `${indent * 30}px`,
      })
      .appendTo(terminalBody);
    terminalBody.scrollTop(terminalBody.prop("scrollHeight"));
  }

  const ORIGINAL_GLOBAL_VARIANCE =
    e.global_parameter_json[0].fields.global_variance;
  let optrng_enabled = false;
  function set_optimal_rng(enabled) {
    if (enabled && !optrng_enabled) {
      e.global_parameter_json[0].fields.global_variance = 0;
      add_global_modifier(e.candidate_id, 0.025);
      for (const state_pk of e.states_json.map((e) => e.pk)) {
        cmt_set(
          e.candidate_id,
          state_pk,
          cmt_get(e.candidate_id, state_pk) - 0.05,
        );
      }
      optrng_enabled = true;
    } else if (!enabled && optrng_enabled) {
      e.global_parameter_json[0].fields.global_variance =
        ORIGINAL_GLOBAL_VARIANCE;
      add_global_modifier(e.candidate_id, -0.05);
      for (const state_pk of e.states_json.map((e) => e.pk)) {
        cmt_set(
          e.candidate_id,
          state_pk,
          cmt_get(e.candidate_id, state_pk) + 0.05,
        );
      }
      optrng_enabled = false;
    }
  }

  const cmds = [
    {
      prefix: "global",
      usage: [
        "\tglobal [candidate ;] <modifier> -  Add a global modifier for a candidate (defaults to player candidate). Examples:",
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
        } else {
          write("Incorrect usage", "#aaa");
          return;
        }

        if (candidate_pk == null) {
          write("Couldn't resolve candidate from name", "#aaa");
          return;
        }

        if (isNaN(modifier)) {
          write("Couldn't resolve modifier", "#aaa");
          return;
        }

        const candidate = e.candidate_json.find((e) => e.pk === candidate_pk);

        add_global_modifier(candidate_pk, modifier);
        write(
          `Added global modifier of ${modifier.toFixed(3)} to ${
            candidate.fields.first_name
          } ${candidate.fields.last_name}`,
          "#aaa",
        );
      },
    },
    {
      prefix: "state",
      usage: [
        "\tstate [candidate ;] <state> ; <modifier> - Add a state modifier for a candidate (defaults to player candidate). Examples:",
        "\t\tstate Trump; MI; 0.02 \t# Boost Donald Trump in Michigan by 0.02",
        "\t\tstate Donald Trump; Michigan; 0.02 \t# Boost Donald Trump in Michigan by 0.02",
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
        } else {
          write("Incorrect usage", "#aaa");
          return;
        }

        if (candidate_pk == null) {
          write("Couldn't resolve candidate from name", "#aaa");
          return;
        }

        if (state_pk == null) {
          write("Couldn't resolve state from name", "#aaa");
          return;
        }

        if (isNaN(modifier)) {
          write("Couldn't resolve modifier", "#aaa");
          return;
        }

        const candidate = e.candidate_json.find((e) => e.pk === candidate_pk);
        const state = e.states_json.find((e) => e.pk === state_pk);

        add_state_modifier(candidate_pk, state_pk, modifier);
        write(
          `Added state modifier of ${modifier.toFixed(3)} to ${
            candidate.fields.first_name
          } ${candidate.fields.last_name} in ${state.fields.name}`,
          "#aaa",
        );
      },
    },
    {
      prefix: "optrng",
      usage: [
        "\toptrng [on|off] - Toggle optimal RNG for player",
        "\t\toptrng \t# View whether optrng is on or off",
        "\t\toptrng on \t# Turns optrng on",
        "\t\toptrng off \t# Turns optrng off",
      ],
      handle: (argstr) => {
        if (argstr === "on" && !optrng_enabled) {
          set_optimal_rng(true);
          write("Turned optimal RNG on", "#aaa");
        } else if (argstr === "off" && optrng_enabled) {
          set_optimal_rng(false);
          write("Turned optimal RNG off", "#aaa");
        } else {
          write(
            `Optimal RNG is currently ${optrng_enabled ? "on" : "off"}`,
            "#aaa",
          );
        }
      },
    },
    {
      prefix: "answerhints",
      usage: ["\tanswerhints [on|off] - Turns answer hints on or off"],
      handle: (argstr) => {
        if (argstr === "on" && !answer_hint_enabled) {
          answer_hint_enabled = true;
          write("Turned answer hints on", "#aaa");
        } else if (argstr === "off" && answer_hint_enabled) {
          answer_hint_enabled = false;
          write("Turned answer hints off", "#aaa");
        } else {
          write(
            `Answer hints are currently ${answer_hint_enabled ? "on" : "off"}`,
            "#aaa",
          );
        }
      },
    },
    {
      prefix: "ignore",
      usage: [
        "\tignore [state ;]... - Ignore a state for color-coding answer hints",
        "\t\tignore \t# List all ignored states",
        "\t\tignore all \t# Ignore all states",
        "\t\tignore GA \t# Ignore Georgia",
        "\t\tignore GA; AL; MS \t# Ignore Georgia, Alabama, and Mississippi",
      ],
      handle: (argstr) => {
        const args = argstr.split(";").map((e) => e.trim().toLowerCase());
        const added = [];
        const check_state = (state) => {
          const pk = state_pk_of_string(state);
          if (pk == null) return;
          state = stateByPk[pk].fields.abbr;
          if (ignore_states.find((e) => e === state) == null) {
            ignore_states.push(state);
            added.push(state);
          }
        };
        for (const arg of args) {
          if (arg.toLowerCase() === "all") {
            for (const state of e.states_json.map((e) => e.fields.abbr)) {
              check_state(state);
            }
          } else {
            check_state(arg);
          }
        }
        if (added.length > 0) {
          write(`Added states to ignore list: ${added.join(", ")}`, "#aaa");
        }
        if (ignore_states.length > 0) {
          write(`Ignore list: ${ignore_states.join(", ")}`, "#aaa");
        } else {
          write("Ignore list is empty", "#aaa");
        }
      },
    },
    {
      prefix: "unignore",
      usage: [
        "\tunignore [state ;]... \t# Unignore states for color-coding answer hints",
      ],
      handle: (argstr) => {
        const args = argstr.split(";").map((e) => e.trim());
        const removed = [];
        const check_state = (state) => {
          const pk = state_pk_of_string(state);
          if (pk == null) return;
          state = stateByPk[pk].fields.abbr;
          if (ignore_states.find((e) => e === state) != null) {
            ignore_states = ignore_states.filter((e) => e !== state);
            removed.push(state);
          }
        };
        for (const arg of args) {
          if (arg.toLowerCase() === "all") {
            for (const state of e.states_json.map((e) => e.fields.abbr)) {
              check_state(state);
            }
          } else {
            check_state(arg);
          }
        }
        if (removed.length > 0) {
          write(
            `Removed states from ignore list: ${removed.join(", ")}`,
            "#aaa",
          );
        }
        if (ignore_states.length > 0) {
          write(`Ignore list: ${ignore_states.join(", ")}`, "#aaa");
        } else {
          write("Ignore list is empty", "#aaa");
        }
      },
    },
    {
      prefix: "autovisit",
      usage: [
        "\tautovisit <state> - Picks a state to automatically apply your visits to",
        "\t\tautovisit MI \t# Automatically apply all visits to Michigan",
        "\t\tautovisit off \t# Turn off auto visits",
      ],
      handle: (argstr) => {
        argstr = argstr.trim().toLowerCase();
        if (argstr === "off" && auto_visit != null) {
          write("Turned off auto-visit", "#aaa");
          auto_visit = null;
        } else {
          const state_pk = state_pk_of_string(argstr);
          const state = e.states_json.find((e) => e.pk === state_pk);
          if (argstr === "all") {
            auto_visit = argstr;
            write(`Auto-visit has been set to ${auto_visit}`, "#aaa");
          } else if (state != null && auto_visit !== state.fields.abbr) {
            auto_visit = state.fields.abbr;
            write(`Auto-visit has been set to ${auto_visit}`, "#aaa");
          } else {
            if (auto_visit == null) {
              write("Auto-visit is off", "#aaa");
            } else {
              write(`Auto-visit is set to ${auto_visit}`, "#aaa");
            }
          }
        }
      },
    },
    {
      prefix: "sortanswers",
      usage: ["\tsortanswers [on|off] - Toggle whether to sort answers"],
      handle: (argstr) => {
        argstr = argstr.trim().toLowerCase();
        if (argstr === "off" && sort_answers) {
          write("Turned off answer sorting", "#aaa");
          sort_answers = false;
        } else if (argstr === "on" && !sort_answers) {
          write("Turned on answer sorting", "#aaa");
          sort_answers = true;
        } else {
          write(`Answer sorting is ${sort_answers ? "on" : "off"}`, "#aaa");
        }
      },
    },
    {
      prefix: "answerscript",
      usage: [
        "\tanswerscript <code> - Inject custom code for evaluating answers",
      ],
      handle: (argstr) => {
        argstr = argstr.trim();
        if (argstr === "") {
          write("Reset answer script to default", "#aaa");
          custom_pop_vote_diff = null;
        } else {
          try {
            custom_pop_vote_diff = eval(argstr);
            write(`Wrote ${argstr.length} chars to answer script`, "#aaa");
          } catch (e) {
            custom_pop_vote_diff = null;
            write(e.toString(), "#aaa");
          }
        }
        cachedPopVoteMap = null;
      },
    },
    {
      prefix: "reset",
      usage: ["\treset - Reset all cheated effects"],
      handle: (argstr) => {
        ignore_states = [];
        custom_pop_vote_diff = null;
        answer_hint_enabled = true;
        auto_visit = null;
        set_optimal_rng(false);
        sort_answers = false;
        clear_cheat_effects();
        write("Removed all cheated effects", "#aaa");
      },
    },
  ];

  function handleCmd(msg) {
    if (msg.length < 1) return;

    write(msg);

    const arg0 = msg.split(" ")[0];
    const cmdFn = cmds.find((cmd) => cmd.prefix === arg0)?.handle;
    if (cmdFn == null) {
      write("Command not recognized", "#aaa");
      return;
    }

    cmdFn(msg.substr(arg0.length).trim());
  }

  const terminalActionBar = $("<div></div>")
    .addClass("terminal-footer")
    .appendTo(terminalContainer);

  const cmdHistory = [];
  let cmdHistoryIdx = -1;
  const terminalInput = $("<input>")
    .addClass("terminal-input")
    .attr("type", "text")
    .appendTo(terminalActionBar)
    .keydown(function (event) {
      if (event.which === 13) {
        // Enter was pressed
        event.preventDefault();
        handleCmd($(this).val());
        cmdHistory.unshift($(this).val());
        cmdHistoryIdx = -1;
        $(this).val("");
      } else if (event.which === 38) {
        // Up was pressed
        event.preventDefault();
        if (cmdHistory.length > 0) {
          cmdHistoryIdx = Math.min(cmdHistoryIdx + 1, cmdHistory.length - 1);
          $(this).val(cmdHistory[cmdHistoryIdx]);
        }
      } else if (event.which === 40) {
        // Down was pressed
        event.preventDefault();
        cmdHistoryIdx = Math.max(cmdHistoryIdx - 1, -1);
        if (cmdHistoryIdx >= 0) {
          $(this).val(cmdHistory[cmdHistoryIdx]);
        } else {
          $(this).val("");
        }
      }
    });

  const submitButton = $("<button></button>")
    .addClass("submit-button")
    .text(">")
    .appendTo(terminalActionBar)
    .on("click", function () {
      handleCmd(terminalInput.val());
      terminalInput.val("");
    });

  $("body").append(terminalContainer);

  write("Welcome to the TCT Cheat Menu.", "#aaa");
  write("Commands:", "#aaa");
  for (const cmd of cmds) {
    cmd.usage.forEach((msg) => write(msg, "#aaa"));
  }

  const styleTag = $("<style>").text(`
            .terminal-container {
                position: absolute;
                top: 260px;
                left: 20px;
                background-color: rgba(0, 0, 0, 0.7);
                color: #fff;
                width: 500px;
                height: 300px;
                border-radius: 8px;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
                z-index: 9999;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                font-size: 14px;
            }
    
            .terminal-header {
                background-color: rgba(0, 0, 50, 0.3);
                padding: 10px;
                cursor: move;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
            
            .toggle-button {
                width: 20px;
                height: 20px;
                border: none;
                background-color: transparent;
                color: #fff;
                font-size: 18px;
                line-height: 1;
                cursor: pointer;
            }
            
            .submit-button {
                margin-right: 4px;
                width: 20px;
                height: 20px;
                border: none;
                background-color: transparent;
                color: #fff;
                font-size: 18px;
                line-height: 1;
                cursor: pointer;
            }
    
            .terminal-body {
                padding: 10px;
                flex-grow: 1;
                overflow-y: auto;
            }
            
            .terminal-footer {
                border-top: 1px solid white;
                background-color: rgba(0, 0, 50, 0.2);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
    
            .terminal-input {
                background-color: rgba(0, 0, 0, 0);
                color: #fff;
                padding: 10px;
                border: none;
                width: 100%;
                box-sizing: border-box;
                outline: none;
            }
            
            .terminal-input:hover {
                border: none;
                border-top: 1px solid #aaa;
            }
    
            .terminal-container.minimized {
                height: 40px;
                overflow: hidden;
            }
        `);

  $("head").append(styleTag);
};

window.addEventListener("keypress", (e) => {
  if (e.key === "$") useConsoleCheats();
});

// QOL: play game with keyboard
$(document).ready(() => {
  $(document).keypress((e) => {
    if (e.isDefaultPrevented()) return;

    const key = e.key;

    if (key === "$") {
      const expanded = toggleTerminal();
      if (expanded) {
        $(".terminal-input")[0].focus({ focusVisible: true });
      } else {
        $(".terminal-input")[0].blur();
      }
      e.preventDefault();
    }

    if (document.activeElement !== document.body) return;

    if (key >= "1" && key <= "5") {
      const radioElts = $(".game_answers");
      const radioElt = radioElts[key.charCodeAt() - "1".charCodeAt()];
      if (radioElt) radioElt.checked = true;
      e.preventDefault();
    } else if (key === "Enter") {
      const tryClick = (id) => {
        const elt = $(id)[0];
        if (elt != null) {
          elt.click();
          return true;
        } else {
          return false;
        }
      };
      tryClick("#ok_button") || tryClick("#answer_select_button");
      e.preventDefault();
    }
  });
});
