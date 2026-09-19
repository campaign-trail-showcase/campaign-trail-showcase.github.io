/**
 * Basically an import/export engine.
 */

const CTS_DATA_TRANSFER_VERSION = 1;
let ctsTransferImport = null;

// security & utility helpers
// escapes HTML characters to prevent XSS in preview rendering.
function ctsEscapeHtml(str) {
  if (typeof str !== "string") return "";
  return str.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}

// guard against attack vectors
function ctsIsSafeKey(key) {
  return typeof key === "string" && key !== "__proto__" && key !== "constructor" && key !== "prototype";
}

// formats character/byte counts for readable previews
function ctsFormatSize(chars) {
  const n = Number(chars) || 0;
  if (n < 1024) return `${n} chars`;
  return `${n.toLocaleString()} chars (${(n / 1024).toFixed(1)} KB)`;
}

// fast line differential estimation
function ctsQuickDiff(localCode, incomingCode) {
  const localStr = String(localCode || "");
  const incomingStr = String(incomingCode || "");

  if (localStr === incomingStr) return { added: 0, removed: 0, identical: true };

  // if either is empty
  if (!localStr) return { added: incomingStr.split("\n").length, removed: 0, identical: false };
  if (!incomingStr) return { added: 0, removed: localStr.split("\n").length, identical: false };

  // safety cap for deep diffing to protect the UI thread
  if (localStr.length > 250000 || incomingStr.length > 250000) {
    const lLines = localStr.split("\n").length;
    const iLines = incomingStr.split("\n").length;
    return { added: Math.max(0, iLines - lLines), removed: Math.max(0, lLines - iLines), identical: false };
  }

  const localSet = new Set(localStr.split("\n"));
  const incomingLines = incomingStr.split("\n");
  let added = 0;
  for (let i = 0; i < incomingLines.length; i++) {
    if (!localSet.has(incomingLines[i])) added++;
  }

  const incomingSet = new Set(incomingLines);
  const localLines = localStr.split("\n");
  let removed = 0;
  for (let i = 0; i < localLines.length; i++) {
    if (!incomingSet.has(localLines[i])) removed++;
  }

  return { added, removed, identical: false };
}

function ctsDescribeCodeBlock(label, localCode, incomingCode) {
  const l = (localCode || "").length;
  const n = (incomingCode || "").length;

  if (l === 0 && n === 0) return `${label}: empty in both`;
  if (l === 0) return `${label}: added (${ctsFormatSize(n)})`;
  if (n === 0) return `${label}: removed (was ${ctsFormatSize(l)})`;
  if (localCode === incomingCode) return `${label}: identical (${ctsFormatSize(l)})`;

  const diff = ctsQuickDiff(localCode, incomingCode);
  if (diff.identical) return `${label}: identical (${ctsFormatSize(l)})`;

  return `${label}: changed (${ctsFormatSize(l)} &rarr; ${ctsFormatSize(n)}, ~${diff.added} lines added / ~${diff.removed} removed)`;
}

// state extraction
function ctsGetRawAchievements() {
  try {
    const raw = (typeof _rawStorageGetItem === "function")
      ? _rawStorageGetItem.call(localStorage, "unlockedAch")
      : localStorage.getItem("unlockedAch");
    const parsed = raw ? JSON.parse(raw) : {};

    // purge any prototype pollution or synthetic flat keys
    const clean = {};
    for (const k in parsed) {
      if (Object.prototype.hasOwnProperty.call(parsed, k) && ctsIsSafeKey(k)) {
        clean[k] = parsed[k];
      }
    }
    return clean;
  } catch (e) {
    console.error("Import/export: Failed to read achievements:", e);
    return {};
  }
}

function ctsGetLocalFavorites() {
  try {
    if (typeof favoriteMods !== "undefined" && favoriteMods instanceof Set) {
      return new Set(favoriteMods);
    }
    const stored = localStorage.getItem("favoriteMods");
    return new Set(stored ? stored.split(",").filter(Boolean) : []);
  } catch (e) {
    return new Set();
  }
}

function ctsGetLocalPinnedMods() {
  try {
    const stored = localStorage.getItem("pinnedAchMods");
    return new Set(stored ? stored.split(",").filter(Boolean) : []);
  } catch (e) {
    return new Set();
  }
}

// UI & modal management
function openDataTransfer() {
  let modal = document.getElementById("ctsTransferModal");
  if (!modal) {
    modal = ctsBuildTransferModal();
    document.body.appendChild(modal);
  }
  ctsRefreshTransferCounts();
  modal.style.display = "flex";

  window.addEventListener("keydown", ctsHandleModalKeydown);
}

function ctsCloseDataTransfer() {
  const modal = document.getElementById("ctsTransferModal");
  if (modal) modal.style.display = "none";
  window.removeEventListener("keydown", ctsHandleModalKeydown);
}

function ctsHandleModalKeydown(e) {
  if (e.key === "Escape") {
    ctsCloseDataTransfer();
  }
}

function ctsBuildTransferModal() {
  const modal = document.createElement("div");
  modal.id = "ctsTransferModal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "ctsTransferTitle");
  modal.style.cssText = `
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(3px);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  modal.innerHTML = `
    <div style="background: #f7f9fc; border-radius: 12px; width: 92%; max-width: 720px; max-height: 90vh; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 12px 35px rgba(0,0,0,0.45); border: 2px solid rgb(85, 111, 176); font-family: Arial, sans-serif;">
      <div id="ctsTransferTitle" style="background-color: rgb(85, 111, 176); color: #ffffff; padding: 14px 18px; font-weight: bolder; font-size: 18px; text-align: center; border-bottom: 2px solid rgb(76, 98, 154);">
        Import/export data backup
      </div>
      <div style="padding: 20px; overflow-y: auto; display: flex; flex-direction: column; gap: 20px; color: #222;">

        <div class="cts-transfer-section">
          <span class="cts-transfer-section-title">Export backup</span>
          <div class="cts-transfer-hint">Select items to include, then download or copy your backup.</div>
          <div class="cts-transfer-checks">
            <label><input type="checkbox" id="cts-exp-ach" checked> Achievements (<span id="cts-exp-ach-count">?</span>)</label>
            <label><input type="checkbox" id="cts-exp-fav" checked> Favorites (<span id="cts-exp-fav-count">?</span>)</label>
            <label><input type="checkbox" id="cts-exp-mods" checked> Saved mods (<span id="cts-exp-mods-count">?</span>)</label>
          </div>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button id="cts-export-download-btn" class="mode-button" style="padding: 8px 18px; margin: 0;">Download file</button>
            <button id="cts-export-copy-btn" class="mode-button" style="padding: 8px 18px; margin: 0;">Copy to clipboard</button>
          </div>
          <textarea id="cts-export-output" class="cts-transfer-textarea" rows="3" readonly spellcheck="false" placeholder="Your exported JSON will generate here..."></textarea>
        </div>

        <div class="cts-transfer-section">
          <span class="cts-transfer-section-title">Import backup</span>
          <div class="cts-transfer-hint">Drag & drop a JSON file here, browse, or paste text below. Any existing achievements and favorites will be merged.</div>

          <div id="cts-drop-zone" style="border: 2px dashed #4a6ea9; border-radius: 8px; padding: 16px; text-align: center; background: #eef5fc; cursor: pointer; transition: background 0.2s ease;">
            <input type="file" id="cts-import-file" accept=".json,application/json" style="display: none;">
            <span id="cts-drop-text" style="font-size: 13px; color: #335;">📁 Click to browse or drop backup JSON file here</span>
          </div>

          <textarea id="cts-import-paste" class="cts-transfer-textarea" rows="3" spellcheck="false" placeholder="...or paste raw backup JSON here."></textarea>

          <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 10px;">
            <button id="cts-import-load-btn" class="mode-button" style="padding: 8px 18px; margin: 0;">Analyze & preview</button>
          </div>

          <div id="cts-import-preview"></div>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 5px; border-top: 1px solid #d9e2ec; padding-top: 15px;">
          <button id="cts-transfer-close-btn" class="mode-button" style="background-color: #718096; padding: 8px 20px; margin: 0;">Close</button>
          <button id="cts-import-apply-btn" class="mode-button" style="padding: 8px 20px; margin: 0;" disabled>Apply import</button>
        </div>
      </div>
    </div>
  `;

  modal.onclick = (e) => {
    if (e.target === modal) ctsCloseDataTransfer();
  };

  modal.querySelector("#cts-transfer-close-btn").onclick = ctsCloseDataTransfer;
  modal.querySelector("#cts-export-download-btn").onclick = () => ctsDoExport("download");
  modal.querySelector("#cts-export-copy-btn").onclick = () => ctsDoExport("copy");

  // drag-and-drop file attachment
  const dropZone = modal.querySelector("#cts-drop-zone");
  const fileInput = modal.querySelector("#cts-import-file");
  const dropText = modal.querySelector("#cts-drop-text");

  dropZone.onclick = () => fileInput.click();

  dropZone.ondragover = (e) => {
    e.preventDefault();
    dropZone.style.background = "#dbeafe";
  };
  dropZone.ondragleave = () => {
    dropZone.style.background = "#eef5fc";
  };
  dropZone.ondrop = async (e) => {
    e.preventDefault();
    dropZone.style.background = "#eef5fc";
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      await ctsProcessFile(e.dataTransfer.files[0]);
    }
  };

  fileInput.onchange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      await ctsProcessFile(e.target.files[0]);
    }
  };

  modal.querySelector("#cts-import-load-btn").onclick = async () => {
    await ctsHandleImportText(modal.querySelector("#cts-import-paste").value);
  };

  modal.querySelector("#cts-import-apply-btn").onclick = ctsApplyImport;

  return modal;
}

async function ctsProcessFile(file) {
  if (!file) return;
  const dropText = document.getElementById("cts-drop-text");
  if (dropText) dropText.textContent = `Selected: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;

  try {
    const text = typeof file.text === "function"
      ? await file.text()
      : await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result || ""));
          reader.onerror = () => reject(reader.error || new Error("Read failed"));
          reader.readAsText(file);
        });

    const pasteArea = document.getElementById("cts-import-paste");
    if (pasteArea) pasteArea.value = text;
    await ctsHandleImportText(text);
  } catch (err) {
    ctsShowImportError("Failed to read file: " + err.message);
  }
}

function ctsRefreshTransferCounts() {
  const setNum = (id, n) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(n);
  };

  setNum("cts-exp-ach-count", Object.keys(ctsGetRawAchievements()).length);
  setNum("cts-exp-fav-count", ctsGetLocalFavorites().size);
  setNum("cts-exp-mods-count", typeof customMods !== "undefined" && customMods instanceof Set ? customMods.size : 0);
}

// export logic
async function ctsBuildExportPayload() {
  const includeAch = document.getElementById("cts-exp-ach").checked;
  const includeFav = document.getElementById("cts-exp-fav").checked;
  const includeMods = document.getElementById("cts-exp-mods").checked;

  if (!includeAch && !includeFav && !includeMods) {
    await showCustomAlert("Please select at least one category to export.", "Export empty");
    return null;
  }

  const payload = {
    app: "CTS",
    type: "cts-user-data",
    version: CTS_DATA_TRANSFER_VERSION,
    exportedAt: new Date().toISOString(),
  };

  if (includeAch) {
    payload.achievements = ctsGetRawAchievements();
    payload.pinnedMods = Array.from(ctsGetLocalPinnedMods());
  }

  if (includeFav) {
    payload.favorites = Array.from(ctsGetLocalFavorites());
  }

  if (includeMods) {
    const names = typeof getAllCustomModNames === "function"
      ? await getAllCustomModNames()
      : Array.from(typeof customMods !== "undefined" && customMods instanceof Set ? customMods : []);

    payload.customMods = [];
    for (const name of names) {
      try {
        const modData = typeof getModFromDB === "function" ? await getModFromDB(name) : null;
        if (modData && modData.code1) {
          payload.customMods.push({
            name: String(modData.name ?? name),
            code1: String(modData.code1),
            code2: String(modData.code2 || ""),
          });
        }
      } catch (e) {
        console.warn(`Export: Could not load mod "${name}":`, e);
      }
    }
  }

  return payload;
}

async function ctsDoExport(mode) {
  const btn = document.getElementById(mode === "download" ? "cts-export-download-btn" : "cts-export-copy-btn");
  const originalText = btn ? btn.textContent : "";
  if (btn) btn.textContent = "Generating...";

  try {
    const payload = await ctsBuildExportPayload();
    if (!payload) return;

    const text = JSON.stringify(payload, null, 2);
    const output = document.getElementById("cts-export-output");
    if (output) output.value = text;

    if (mode === "download") {
      const stamp = new Date().toISOString().slice(0, 10);
      const blob = new Blob([text], { type: "application/json;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `cts-backup-${stamp}.json`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        URL.revokeObjectURL(url);
        a.remove();
      }, 500);
    } else {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        output.focus();
        output.select();
        document.execCommand("copy");
      }
      if (btn) btn.textContent = "Copied! ✓";
      setTimeout(() => {
        if (btn) btn.textContent = originalText;
      }, 2000);
      return;
    }
  } catch (err) {
    await showCustomAlert("Export failed: " + err.message, "Error");
  } finally {
    if (btn && mode !== "copy") btn.textContent = originalText;
  }
}

// validation & analysis
function ctsValidatePayload(obj) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) {
    return { ok: false, error: "Invalid format: Expected a JSON object." };
  }

  const out = { favorites: null, achievements: null, customMods: null, pinnedMods: null };

  if (obj.favorites !== undefined) {
    if (!Array.isArray(obj.favorites)) return { ok: false, error: '"favorites" must be an array of strings.' };
    out.favorites = obj.favorites.filter((f) => typeof f === "string" && f.length > 0);
  }

  if (obj.pinnedMods !== undefined && Array.isArray(obj.pinnedMods)) {
    out.pinnedMods = obj.pinnedMods.filter((p) => typeof p === "string" && p.length > 0);
  }

  if (obj.achievements !== undefined) {
    if (!obj.achievements || typeof obj.achievements !== "object" || Array.isArray(obj.achievements)) {
      return { ok: false, error: '"achievements" must be a key-value object.' };
    }
    out.achievements = {};
    for (const k in obj.achievements) {
      if (Object.prototype.hasOwnProperty.call(obj.achievements, k) && ctsIsSafeKey(k)) {
        out.achievements[k] = obj.achievements[k];
      }
    }
  }

  if (obj.customMods !== undefined) {
    if (!Array.isArray(obj.customMods)) return { ok: false, error: '"customMods" must be a list.' };
    out.customMods = [];
    for (const m of obj.customMods) {
      if (!m || typeof m !== "object" || typeof m.name !== "string" || typeof m.code1 !== "string") continue;
      out.customMods.push({
        name: String(m.name).slice(0, 100), // enforce realistic name bounds
        code1: String(m.code1),
        code2: typeof m.code2 === "string" ? String(m.code2) : "",
      });
    }
  }

  if (!out.favorites && !out.achievements && !out.customMods) {
    return { ok: false, error: "No achievements, favorites, or custom mods found in this file." };
  }

  return { ok: true, data: out };
}

async function ctsHandleImportText(text) {
  const preview = document.getElementById("cts-import-preview");
  const applyBtn = document.getElementById("cts-import-apply-btn");
  ctsTransferImport = null;

  if (applyBtn) applyBtn.disabled = true;
  if (preview) preview.innerHTML = `<div class="cts-transfer-summary">Analyzing payload...</div>`;

  let parsed;
  try {
    parsed = JSON.parse(String(text || "").trim());
  } catch (e) {
    ctsShowImportError("Malformed JSON: " + e.message);
    return;
  }

  const validation = ctsValidatePayload(parsed);
  if (!validation.ok) {
    ctsShowImportError(validation.error);
    return;
  }

  const data = validation.data;
  const analysis = { favorites: null, achievements: null, mods: [], pinnedMods: data.pinnedMods || [] };

  if (data.favorites) {
    const localFav = ctsGetLocalFavorites();
    analysis.favorites = {
      incoming: data.favorites,
      fresh: data.favorites.filter((f) => !localFav.has(f)),
      already: data.favorites.filter((f) => localFav.has(f)),
    };
  }

  if (data.achievements) {
    const localAch = ctsGetRawAchievements();
    const incomingKeys = Object.keys(data.achievements);
    analysis.achievements = {
      entries: data.achievements,
      freshKeys: incomingKeys.filter((k) => localAch[k] == null),
      alreadyCount: incomingKeys.filter((k) => localAch[k] != null).length,
    };
  }

  if (data.customMods) {
    for (const mod of data.customMods) {
      const existsLocally = typeof customMods !== "undefined" && customMods instanceof Set && customMods.has(mod.name);

      if (!existsLocally) {
        analysis.mods.push({ ...mod, status: "new", decision: "add", diff: null });
        continue;
      }

      let existing = null;
      try {
        existing = typeof getModFromDB === "function" ? await getModFromDB(mod.name) : null;
      } catch (e) {
        existing = null;
      }

      if (!existing || !existing.code1) {
        analysis.mods.push({ ...mod, status: "new", decision: "add", diff: null });
      } else if (existing.code1 === mod.code1 && (existing.code2 || "") === mod.code2) {
        analysis.mods.push({ ...mod, status: "identical", decision: "skip", diff: null });
      } else {
        analysis.mods.push({
          ...mod,
          status: "conflict",
          decision: "skip",
          diff: {
            code1: ctsDescribeCodeBlock("Code 1", existing.code1, mod.code1),
            code2: ctsDescribeCodeBlock("Code 2", existing.code2 || "", mod.code2),
          },
        });
      }
    }
  }

  ctsTransferImport = analysis;
  ctsRenderImportPreview();
  if (applyBtn) applyBtn.disabled = false;
}

function ctsShowImportError(message) {
  const preview = document.getElementById("cts-import-preview");
  if (preview) {
    preview.innerHTML = `<div class="cts-transfer-summary" style="border-color:#e53e3e; color:#c53030;"><b>Import error:</b> ${ctsEscapeHtml(message)}</div>`;
  }
  const applyBtn = document.getElementById("cts-import-apply-btn");
  if (applyBtn) applyBtn.disabled = true;
  ctsTransferImport = null;
}

function ctsRenderImportPreview() {
  const preview = document.getElementById("cts-import-preview");
  if (!preview || !ctsTransferImport) return;

  const { favorites, achievements, mods } = ctsTransferImport;
  let html = `<div class="cts-transfer-summary">`;

  if (achievements) {
    html += `
      <label style="display:block; margin-bottom:6px;">
        <input type="checkbox" id="cts-imp-ach" checked>
        <b>Achievements:</b> <span style="color:#2b6cb0;">${achievements.freshKeys.length} new</span>, ${achievements.alreadyCount} already unlocked (preserved)
      </label>`;
  }

  if (favorites) {
    html += `
      <label style="display:block; margin-bottom:6px;">
        <input type="checkbox" id="cts-imp-fav" checked>
        <b>Favorites:</b> <span style="color:#2b6cb0;">${favorites.fresh.length} new</span>, ${favorites.already.length} already set (preserved)
      </label>`;
  }

  if (mods.length > 0) {
    const fresh = mods.filter((m) => m.status === "new");
    const identical = mods.filter((m) => m.status === "identical");
    const conflicts = mods.filter((m) => m.status === "conflict");

    html += `
      <label style="display:block; margin-bottom:6px;">
        <input type="checkbox" id="cts-imp-mods" checked>
        <b>Saved mods:</b> ${fresh.length} new, ${identical.length} identical (skipped), <span style="color:${conflicts.length > 0 ? "#c05621" : "inherit"}; font-weight:bold;">${conflicts.length} collision(s)</span>
      </label>`;

    if (fresh.length > 0) {
      html += `<div class="cts-transfer-diff" style="color:#2f855a;">Will add: ${fresh.map((m) => ctsEscapeHtml(m.name)).join(", ")}</div>`;
    }
  }

  html += `</div>`;

  const conflicts = mods.filter((m) => m.status === "conflict");
  if (conflicts.length > 0) {
    html += `
      <div class="cts-transfer-hint" style="margin-top:10px; font-weight:bold; color:#744210;">
        Zoinks! Collisions detected: the following mods exist locally with different code.
      </div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 8px;">
        <button class="mode-button" style="padding: 4px 12px; margin: 0; font-size:12px;" onclick="ctsSetAllModDecisions('overwrite')">Override all</button>
        <button class="mode-button" style="padding: 4px 12px; margin: 0; font-size:12px;" onclick="ctsSetAllModDecisions('copy')">Keep both (copy)</button>
        <button class="mode-button" style="padding: 4px 12px; margin: 0; font-size:12px;" onclick="ctsSetAllModDecisions('skip')">Skip all</button>
      </div>`;

    mods.forEach((m, i) => {
      if (m.status !== "conflict") return;
      html += `
        <div class="cts-transfer-conflict">
          <div class="cts-transfer-conflict-name">${ctsEscapeHtml(m.name)}</div>
          <div class="cts-transfer-diff">${m.diff.code1}<br>${m.diff.code2}</div>
          <div class="cts-transfer-decisions">
            <label><input type="radio" name="cts-dec-${i}" value="overwrite"> Override</label>
            <label><input type="radio" name="cts-dec-${i}" value="copy"> Create copy</label>
            <label><input type="radio" name="cts-dec-${i}" value="skip" checked> Skip</label>
          </div>
        </div>`;
    });
  }

  preview.innerHTML = html;
}

function ctsSetAllModDecisions(decision) {
  if (!ctsTransferImport) return;
  ctsTransferImport.mods.forEach((m, i) => {
    if (m.status !== "conflict") return;
    m.decision = decision;
    const radio = document.querySelector(`input[name="cts-dec-${i}"][value="${decision}"]`);
    if (radio) radio.checked = true;
  });
}

function ctsReadModDecisions() {
  if (!ctsTransferImport) return;
  ctsTransferImport.mods.forEach((m, i) => {
    if (m.status !== "conflict") return;
    const selected = document.querySelector(`input[name="cts-dec-${i}"]:checked`);
    m.decision = selected ? selected.value : "skip";
  });
}

function ctsUniqueCopyName(base, reserved) {
  const taken = (name) => (typeof customMods !== "undefined" && customMods instanceof Set && customMods.has(name)) || reserved.has(name);
  let candidate = `${base} (imported)`;
  let n = 2;
  while (taken(candidate)) {
    candidate = `${base} (imported ${n})`;
    n++;
  }
  reserved.add(candidate);
  return candidate;
}

// apply import
async function ctsSaveImportedMod(modName, code1, code2) {
  await saveModToDB(modName, code1, code2 || "");

  // metadata extraction boundary
  try {
    if (typeof extractModMetadata === "function") {
      extractModMetadata(code1, modName);
    }
  } catch (err) {
    console.warn(`Import/export: error extracting metadata for "${modName}":`, err);
  }

  let imageUrl = "";
  let description = "";
  try {
    if (typeof extractElectionDetails === "function") {
      const temp = extractElectionDetails(code1, modName);
      if (temp && temp.election_json && temp.election_json[0] && temp.election_json[0].fields) {
        const fields = temp.election_json[0].fields;
        imageUrl = fields.site_image ?? fields.image_url ?? "";
        description = fields.site_description ?? fields.summary ?? "";
      }
    }
  } catch (e) {
    console.warn(`Import/export: Could not extract election details for "${modName}":`, e);
  }

  if (typeof createModView === "function") {
    const oldModView = modMap.get(modName);
    if (oldModView) {
      if (oldModView.parentNode) oldModView.parentNode.removeChild(oldModView);
      const oldIdx = modList.indexOf(oldModView);
      if (oldIdx !== -1) modList.splice(oldIdx, 1);
      modMap.delete(modName);
    }

    const modView = createModView(
      { value: modName, innerText: modName, dataset: { tags: "Custom" } },
      imageUrl,
      description
    );
    modList.unshift(modView);
    modMap.set(modName, modView);
  }
}

async function ctsApplyImport() {
  if (!ctsTransferImport) return;

  const applyBtn = document.getElementById("cts-import-apply-btn");
  if (applyBtn) {
    applyBtn.disabled = true;
    applyBtn.textContent = "Importing...";
  }

  ctsReadModDecisions();
  const { favorites, achievements, mods, pinnedMods } = ctsTransferImport;

  const wantAch = achievements && document.getElementById("cts-imp-ach")?.checked;
  const wantFav = favorites && document.getElementById("cts-imp-fav")?.checked;
  const wantMods = mods.length > 0 && document.getElementById("cts-imp-mods")?.checked;

  let achAdded = 0;
  let favAdded = 0;
  let modsAdded = 0, modsOverwritten = 0, modsCopied = 0, modsSkipped = 0;
  const reservedCopyNames = new Set();

  try {
    // apply achievements
    if (wantAch) {
      const localAch = ctsGetRawAchievements();
      for (const key of achievements.freshKeys) {
        if (ctsIsSafeKey(key)) {
          localAch[key] = achievements.entries[key];
          unlockedAch[key] = achievements.entries[key];
          achAdded++;
        }
      }

      if (achAdded > 0) {
        try {
          localStorage.setItem("unlockedAch", JSON.stringify(localAch));
        } catch (e) {
          console.error("Import/export: Storage quota exceeded saving achievements:", e);
        }
        window.unlockedAch = createUnlockedAchProxy(localAch);
        if (typeof addAllAchievements === "function") addAllAchievements();
      }

      // merge pinned achievement mods if present
      if (pinnedMods && pinnedMods.length > 0) {
        const localPinned = ctsGetLocalPinnedMods();
        let pinnedChanged = false;
        for (const p of pinnedMods) {
          if (!localPinned.has(p)) {
            localPinned.add(p);
            pinnedAchMods.add(p);
            pinnedChanged = true;
          }
        }
        if (pinnedChanged) {
          localStorage.setItem("pinnedAchMods", Array.from(localPinned).join(","));
        }
      }
    }

    // apply favorites
    if (wantFav) {
      for (const fav of favorites.fresh) {
        favoriteMods.add(fav);
        favAdded++;
      }
      if (favAdded > 0) {
        try {
          localStorage.setItem("favoriteMods", Array.from(favoriteMods).join(","));
        } catch (e) {
          console.error("Import/export: Storage quota exceeded saving favorites:", e);
        }
      }
    }

    // apply custom mods
    if (wantMods) {
      let touchedCustomMods = false;

      for (const mod of mods) {
        if (mod.status === "new" && mod.decision !== "skip") {
          try {
            await ctsSaveImportedMod(mod.name, mod.code1, mod.code2);
            customMods.add(mod.name);
            modsAdded++;
            touchedCustomMods = true;
          } catch (e) {
            console.error(`Import/export: Failed saving new mod "${mod.name}":`, e);
            modsSkipped++;
          }
        } else if (mod.status === "conflict") {
          if (mod.decision === "overwrite") {
            try {
              await ctsSaveImportedMod(mod.name, mod.code1, mod.code2);
              customMods.add(mod.name);
              modsOverwritten++;
              touchedCustomMods = true;
            } catch (e) {
              console.error(`Import/export: Failed overwriting mod "${mod.name}":`, e);
              modsSkipped++;
            }
          } else if (mod.decision === "copy") {
            const copyName = ctsUniqueCopyName(mod.name, reservedCopyNames);
            try {
              await ctsSaveImportedMod(copyName, mod.code1, mod.code2);
              customMods.add(copyName);
              modsCopied++;
              touchedCustomMods = true;
            } catch (e) {
              console.error(`Import/export: Failed creating copy "${copyName}":`, e);
              modsSkipped++;
            }
          } else {
            modsSkipped++;
          }
        } else {
          modsSkipped++;
        }
      }

      // persistence of custom mod registry
      if (touchedCustomMods) {
        if (typeof saveCustomModNames === "function") {
          await saveCustomModNames(customMods);
        }
        if (typeof ctsEnsureCustomTag === "function") {
          ctsEnsureCustomTag();
        }
      }
    }

    // view refresh
    if (favAdded > 0 || modsAdded > 0 || modsOverwritten > 0 || modsCopied > 0) {
      if (typeof updateModViews === "function") updateModViews();
      if (typeof applyModBoxThemes === "function") applyModBoxThemes();
    }

    ctsRefreshTransferCounts();
    ctsTransferImport = null;

    const preview = document.getElementById("cts-import-preview");
    if (preview) preview.innerHTML = "";

    await showCustomAlert(
      `<b>Import succeeded:</b><br>` +
      `• Achievements: <b>${achAdded}</b> added<br>` +
      `• Favorites: <b>${favAdded}</b> added<br>` +
      `• Saved mods: <b>${modsAdded}</b> added, <b>${modsOverwritten}</b> overridden, <b>${modsCopied}</b> copied`,
      "Import complete"
    );

    ctsCloseDataTransfer();
  } catch (globalErr) {
    console.error("Import/export: Critical failure during import:", globalErr);
    await showCustomAlert("Import encountered an unexpected error: " + globalErr.message, "Import error");
  } finally {
    if (applyBtn) {
      applyBtn.disabled = false;
      applyBtn.textContent = "Apply import";
    }
  }
}
