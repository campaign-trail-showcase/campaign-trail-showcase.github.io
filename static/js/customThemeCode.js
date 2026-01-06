// Custom theme functions
const DEFAULT_THEME_COLORS = {
    window: '#727C96',
    container: '#222449',
    title: '#3A3360',
    text: ''
};

// track which theme we're currently editing (if any)
let currentEditingThemeId = null;

// populate form fields from theme object
const populateFormFromTheme = (theme, includeThemeName = false) => {
    const fields = {
        themeName: document.getElementById("theme_name"),
        backgroundUrl: document.getElementById("background_url"),
        backgroundCover: document.getElementById("background_cover"),
        bannerUrl: document.getElementById("banner_url"),
        windowUrl: document.getElementById("window_url"),
        windowColor: document.getElementById("window_color"),
        windowColorHex: document.getElementById("window_color_hex"),
        contColor: document.getElementById("cont_color"),
        contColorHex: document.getElementById("cont_color_hex"),
        titleColor: document.getElementById("title_color"),
        titleColorHex: document.getElementById("title_color_hex"),
        textColor: document.getElementById("text_color"),
        textColorHex: document.getElementById("text_color_hex"),
        modOverride: document.getElementById("mod_override")
    };

    // populate theme name when loading or editing
    if (includeThemeName && fields.themeName) {
        fields.themeName.value = theme.name || '';
    }

    fields.backgroundUrl.value = theme.background || '';
    fields.backgroundCover.checked = theme.background_cover || false;
    fields.bannerUrl.value = theme.banner || '';
    fields.windowUrl.value = theme.window_url || '';
    fields.windowColor.value = theme.coloring_window || DEFAULT_THEME_COLORS.window;
    fields.contColor.value = theme.coloring_container || DEFAULT_THEME_COLORS.container;
    fields.titleColor.value = theme.coloring_title || DEFAULT_THEME_COLORS.title;
    fields.textColor.value = theme.text_col || DEFAULT_THEME_COLORS.text;
    fields.modOverride.checked = theme.mod_override || false;

    // sync hex inputs
    fields.windowColorHex.value = (theme.coloring_window || DEFAULT_THEME_COLORS.window).toUpperCase();
    fields.contColorHex.value = (theme.coloring_container || DEFAULT_THEME_COLORS.container).toUpperCase();
    fields.titleColorHex.value = (theme.coloring_title || DEFAULT_THEME_COLORS.title).toUpperCase();
    fields.textColorHex.value = (theme.text_col || DEFAULT_THEME_COLORS.text).toUpperCase();
};

// get theme object from form fields
const getThemeFromForm = () => ({
    name: document.getElementById("theme_name")?.value.trim() || '',
    background: document.getElementById("background_url").value,
    background_cover: document.getElementById("background_cover").checked,
    banner: document.getElementById("banner_url").value,
    window_url: document.getElementById("window_url").value,
    coloring_window: document.getElementById("window_color").value,
    coloring_container: document.getElementById("cont_color").value,
    coloring_title: document.getElementById("title_color").value,
    text_col: document.getElementById("text_color").value,
    mod_override: document.getElementById("mod_override").checked
});

const openCustomThemeMenu = (e) => {
    if (e) e.preventDefault();
    nct_stuff.pauseThemeUpdates = true;
    const menuArea = document.getElementById("custom_theme_menu_area");
    menuArea.style.display = "block";

    // position modal in the center of the screen
    const modal = document.querySelector(".custom_theme_menu");
    if (modal) {
        const width = modal.offsetWidth || 480;
        const height = modal.offsetHeight || 400;
        modal.style.top = `calc(50vh - ${height / 2}px)`;
        modal.style.left = `calc(50vw - ${width / 2}px)`;
    }

    // check if we're editing a currently active saved theme
    const activeThemeId = window.localStorage.getItem("active_custom_theme_id");
    if (activeThemeId && nct_stuff.customThemes[activeThemeId]) {
        // load the active theme for editing
        currentEditingThemeId = activeThemeId;
        const theme = nct_stuff.customThemes[activeThemeId];
        populateFormFromTheme(theme, true);
    } else {
        // when creating a new theme
        currentEditingThemeId = null;
        const defaultTheme = nct_stuff.themes.tct;
        populateFormFromTheme(defaultTheme, false);
    }
};

const closeCustomThemeMenu = (e) => {
    if (e) e.preventDefault();
    nct_stuff.pauseThemeUpdates = false;
    document.getElementById("custom_theme_menu_area").style.display = "none";
};

const updateCustomThemePickerName = (newName) => {
    const themePicker = document.getElementById("themePicker");
    if (!themePicker) return;

    const customOption = themePicker.querySelector("option[value='custom']");
    if (customOption) {
        customOption.textContent = newName || "Custom";
    }
};

const populateCustomThemesInPicker = () => {
    const themePicker = document.getElementById("themePicker");
    if (!themePicker) return;

    // remove any existing custom theme options (though keep the Custom option)
    const existingCustomOptions = themePicker.querySelectorAll("option[value^='custom_']");
    existingCustomOptions.forEach(opt => opt.remove());

    // add each saved theme as a new option
    for (const [themeId, theme] of Object.entries(nct_stuff.customThemes)) {
        const option = document.createElement("option");
        option.value = themeId;
        option.textContent = theme.name;
        themePicker.appendChild(option);
    }
};

const saveCustomTheme = () => {
    const theme = getThemeFromForm();

    if (!theme.name) {
        alert("Please enter a theme name");
        return;
    }

    let themeId;

    // check if we're updating an existing theme
    if (currentEditingThemeId && nct_stuff.customThemes[currentEditingThemeId]) {
        // check if name changed - if so, we need to search by name to see if we're overwriting a different theme
        const existingTheme = nct_stuff.customThemes[currentEditingThemeId];
        if (existingTheme.name === theme.name) {
            themeId = currentEditingThemeId;
        } else {
            // check if another theme with this name exists
            const existingByName = Object.entries(nct_stuff.customThemes).find(([id, t]) => t.name === theme.name);
            if (existingByName) {
                // overwrite it!
                if (!confirm(`A theme named "${theme.name}" already exists. Overwrite it?`)) {
                    return;
                }
                themeId = existingByName[0];
            } else {
                // name changed but no conflict, so keep same ID
                themeId = currentEditingThemeId;
            }
        }
    } else {
        // creating a new theme
        const existingByName = Object.entries(nct_stuff.customThemes).find(([id, t]) => t.name === theme.name);
        if (existingByName) {
            if (!confirm(`A theme named "${theme.name}" already exists. Overwrite it?`)) {
                return;
            }
            themeId = existingByName[0];
        } else {
            // new theme ID
            themeId = `custom_${Date.now()}`;
        }
    }

    nct_stuff.themes.custom = theme;
    selectedTheme = theme;

    // save to custom themes storage
    nct_stuff.customThemes[themeId] = theme;

    // persist to localStorage
    const allCustomThemes = JSON.parse(window.localStorage.getItem("custom_themes") || "{}");
    allCustomThemes[themeId] = theme;
    window.localStorage.setItem("custom_themes", JSON.stringify(allCustomThemes));
    window.localStorage.setItem("active_custom_theme_id", themeId);

    populateCustomThemesInPicker();

    // select the saved theme in the picker
    const themePicker = document.getElementById("themePicker");
    if (themePicker) {
        themePicker.value = themeId;
    }

    updateBannerAndStyling();
    updateDynamicStyle();

    nct_stuff.custom_override = theme.mod_override ? JSON.parse(JSON.stringify(theme)) : null;

    refreshSavedThemesList();
    alert(`Theme "${theme.name}" saved successfully!`);

    // update the currently editing ID
    currentEditingThemeId = themeId;
};

const loadCustomTheme = (themeId) => {
    const theme = nct_stuff.customThemes[themeId];
    if (!theme) return;

    selectedTheme = theme;
    nct_stuff.themes.custom = theme;

    // save this as the active custom theme
    window.localStorage.setItem("active_custom_theme_id", themeId);
    window.localStorage.setItem("theme", "custom");
    nct_stuff.selectedTheme = "custom";

    updateBannerAndStyling();
    updateDynamicStyle();
    updateGameHeaderContentAndStyling();

    // make sure the Add custom theme button is visible
    ensureCustomThemeButton();

    // close the saved themes list if it's in the modal
    const menuArea = document.getElementById("custom_theme_menu_area");
    if (menuArea && menuArea.style.display === "block") {
        closeCustomThemeMenu();
    }
};

const deleteCustomTheme = (themeId) => {
    const theme = nct_stuff.customThemes[themeId];
    if (!theme) return;

    if (!confirm(`Delete theme "${theme.name}"?`)) return;

    delete nct_stuff.customThemes[themeId];

    const allCustomThemes = JSON.parse(window.localStorage.getItem("custom_themes") || "{}");
    delete allCustomThemes[themeId];
    window.localStorage.setItem("custom_themes", JSON.stringify(allCustomThemes));

    // if we're deleting the currently active theme, clear it
    const activeThemeId = window.localStorage.getItem("active_custom_theme_id");
    if (activeThemeId === themeId) {
        window.localStorage.removeItem("active_custom_theme_id");
        currentEditingThemeId = null;
    }

    populateCustomThemesInPicker();

    // if the deleted theme was selected, switch to Custom
    const themePicker = document.getElementById("themePicker");
    if (themePicker && themePicker.value === themeId) {
        themePicker.value = "custom";
    }

    refreshSavedThemesList();
};

const ensureCustomThemeButton = () => {
    const themePickerEl = document.getElementById("theme_picker");
    const existingButton = document.getElementById("custom_theme_button_container");

    if (!existingButton && themePickerEl) {
        const customMenuButton = document.createElement("p");
        customMenuButton.id = "custom_theme_button_container";
        customMenuButton.style.margin = "1em 0 0";
        customMenuButton.innerHTML = "<button id='open_custom_theme'>Add custom theme</button>";
        themePickerEl.appendChild(customMenuButton);
        document.getElementById("open_custom_theme").addEventListener("click", openCustomThemeMenu);
    }
};

const refreshSavedThemesList = () => {
    const savedList = document.getElementById("saved_themes_list");
    if (!savedList) return;

    savedList.innerHTML = "";

    if (Object.keys(nct_stuff.customThemes).length === 0) {
        savedList.innerHTML = "<p style='text-align: center; color: #666;'>No saved themes</p>";
        return;
    }

    for (const [themeId, theme] of Object.entries(nct_stuff.customThemes)) {
        const themeItem = document.createElement("div");
        themeItem.className = "saved_theme_item";
        themeItem.innerHTML = `
      <div class="saved_theme_name">${theme.name}</div>
      <div class="saved_theme_buttons">
        <button onclick="loadCustomTheme('${themeId}')" class="theme-action-btn load-btn">Load</button>
        <button onclick="deleteCustomTheme('${themeId}')" class="theme-action-btn delete-btn">Delete</button>
      </div>
    `;
        savedList.appendChild(themeItem);
    }
};

const customThemeMenuHTML = `
<div id="custom_theme_menu_area" style="display: none;">
  <div class="custom_theme_menu">
    <h3>Create your custom theme</h3>
    <div class="custom_theme_form">
      <div class="form-group">
        <label>Theme name:</label>
        <input id='theme_name' type='text' placeholder='My custom theme' />
      </div>

      <div class="form-group">
        <label>Background image URL:</label>
        <input id='background_url' type='text' placeholder='Image link' />
      </div>
      
      <div class="form-group">
        <label>
          <input id='background_cover' type='checkbox' />
          Background covers entire screen?
        </label>
      </div>
      
      <div class="form-group">
        <label>Banner image URL (recommended: 1000x303):</label>
        <input id='banner_url' type='text' placeholder='Image link' />
      </div>
      
      <div class="form-group">
        <label>Window image URL (optional):</label>
        <input id='window_url' type='text' placeholder='Image link' />
      </div>
      
      <div class="form-group color-input-group">
        <label>Window color:</label>
        <div class="color-input-wrapper">
          <input id='window_color' type='color' class='color-picker' />
          <input id='window_color_hex' type='text' placeholder='#727C96' class='hex-input' maxlength='7' />
        </div>
      </div>
      
      <div class="form-group color-input-group">
        <label>Container color:</label>
        <div class="color-input-wrapper">
          <input id='cont_color' type='color' class='color-picker' />
          <input id='cont_color_hex' type='text' placeholder='#222449' class='hex-input' maxlength='7' />
        </div>
      </div>
      
      <div class="form-group color-input-group">
        <label>Header color:</label>
        <div class="color-input-wrapper">
          <input id='title_color' type='color' class='color-picker' />
          <input id='title_color_hex' type='text' placeholder='#3A3360' class='hex-input' maxlength='7' />
        </div>
      </div>
      
      <div class="form-group color-input-group">
        <label>Text color:</label>
        <div class="color-input-wrapper">
          <input id='text_color' type='color' class='color-picker' />
          <input id='text_color_hex' type='text' placeholder='#000000' class='hex-input' maxlength='7' />
        </div>
      </div>
      
      <div class="form-group">
        <label>
          <input id='mod_override' type='checkbox' />
          Override mod themes? (experimental)
        </label>
      </div>
      
      <div class="form-buttons">
        <button id='save_custom_theme' class='button-primary'>Save</button>
        <button id='close_custom_theme' class='button-secondary'>Close</button>
      </div>

      <div class="saved_themes_section">
        <h4>Saved Themes</h4>
        <div id="saved_themes_list"></div>
      </div>
    </div>
  </div>
</div>
`;

document.body.insertAdjacentHTML('afterbegin', customThemeMenuHTML);

const customThemeStyle = document.createElement('style');
customThemeStyle.innerHTML = `
#custom_theme_menu_area {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 10000;
  pointer-events: none;
}

#custom_theme_menu_area[style*="display: block"] {
  pointer-events: auto;
}

.custom_theme_menu {
  position: absolute;
  background-color: #F8F8F8;
  border: 3px solid #C9C9C9;
  color: #333;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  width: 480px;
  max-height: 80vh;
  overflow-y: auto;
  padding: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  border-radius: 0;
}

.custom_theme_menu h3 {
  margin: 0;
  padding: 15px;
  text-align: center;
  cursor: move;
  user-select: none;
  background-color: #BFE6FF;
  border-bottom: 2px solid #C9C9C9;
  font-size: 1.3em;
  font-weight: 700;
  color: #000;
}

.custom_theme_form {
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 700;
  color: #333;
}

.form-group input[type='text'] {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #C9C9C9;
  border-radius: 3px;
  font-family: monospace;
}

.form-group input[type='text']:focus {
  outline: none;
  border-color: #556FB0;
  background-color: #FFFEF0;
}

.form-group input[type='checkbox'] {
  margin-right: 8px;
  cursor: pointer;
}

.form-group label input[type='checkbox'] {
  vertical-align: middle;
}

.color-input-group {
  margin-bottom: 18px;
}

.color-input-wrapper {
  display: flex;
  gap: 10px;
  align-items: center;
}

.color-picker {
  width: 50px;
  height: 38px;
  border: 1px solid #C9C9C9;
  cursor: pointer;
  border-radius: 3px;
  flex-shrink: 0;
}

.hex-input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #C9C9C9;
  border-radius: 3px;
  font-family: monospace;
  text-transform: uppercase;
}

.hex-input:focus {
  outline: none;
  border-color: #556FB0;
  background-color: #FFFEF0;
}

.form-buttons {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid #C9C9C9;
}

.button-primary,
.button-secondary {
  flex: 1;
  padding: 10px;
  border: 1px solid #999;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 700;
  transition: background-color 0.2s;
}

.button-primary {
  background-color: #E8FBFF;
  color: #000;
}

.button-primary:hover {
  background-color: #D4F5FF;
}

.button-primary:active {
  background-color: #C0EFFF;
}

.button-secondary {
  background-color: #F0F0F0;
  color: #333;
}

.button-secondary:hover {
  background-color: #E0E0E0;
}

.button-secondary:active {
  background-color: #D0D0D0;
}

.saved_themes_section {
  margin-top: 10px;
}

.saved_themes_section h4 {
  margin: 0 0 10px 0;
  font-weight: 700;
  color: #333;
  border-bottom: 1px solid #C9C9C9;
  padding-bottom: 5px;
}

#saved_themes_list {
  max-height: 200px;
  overflow-y: auto;
}

.saved_theme_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin: 5px 0;
  background-color: #F0F0F0;
  border: 1px solid #D9D9D9;
  border-radius: 3px;
}

.saved_theme_name {
  flex: 1;
  font-weight: 600;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.saved_theme_buttons {
  display: flex;
  gap: 5px;
  margin-left: 10px;
}

.theme-action-btn {
  padding: 5px 10px;
  border: 1px solid #999;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 600;
  white-space: nowrap;
}

.theme-action-btn.load-btn {
  background-color: #BFE6FF;
  color: #000;
}

.theme-action-btn.load-btn:hover {
  background-color: #A8D5FF;
}

.theme-action-btn.delete-btn {
  background-color: #FFB0B0;
  color: #333;
}

.theme-action-btn.delete-btn:hover {
  background-color: #FF9090;
}
`;
document.head.appendChild(customThemeStyle);

document.getElementById("save_custom_theme").addEventListener("click", saveCustomTheme);
document.getElementById("close_custom_theme").addEventListener("click", closeCustomThemeMenu);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        const menuArea = document.getElementById("custom_theme_menu_area");
        if (menuArea && menuArea.style.display === "block") {
            closeCustomThemeMenu();
        }
    }
});

// setup color sync between picker and hex input
const setupColorSync = (colorPickerId, hexInputId, updatePreviewFn) => {
    const colorPicker = document.getElementById(colorPickerId);
    const hexInput = document.getElementById(hexInputId);

    if (!colorPicker || !hexInput) return;

    // sync color picker to hex
    colorPicker.addEventListener('input', () => {
        hexInput.value = colorPicker.value.toUpperCase();
        updatePreviewFn();
    });

    // sync hex to color picker
    hexInput.addEventListener('input', () => {
        const hex = hexInput.value.trim();
        if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
            colorPicker.value = hex;
            updatePreviewFn();
        }
    });
};

const setupLiveThemePreview = () => {
    const updatePreview = () => {
        const theme = getThemeFromForm();

        // update body background
        if (theme.background) {
            document.body.style.background = `url('${theme.background}')`;
            document.body.style.backgroundSize = theme.background_cover ? 'cover' : 'auto';
        } else {
            document.body.style.background = theme.coloring_container;
        }

        // update header banner
        const headerEl = document.getElementById("header");
        if (theme.banner && headerEl) {
            headerEl.src = theme.banner;
        }

        // update game window
        const gameWindow = document.getElementById("game_window");
        if (gameWindow) {
            gameWindow.style.backgroundColor = theme.coloring_window;
            gameWindow.style.backgroundImage = theme.window_url ? `url('${theme.window_url}')` : 'none';
        }

        // update container
        const container = document.querySelector(".container");
        if (container) {
            container.style.backgroundColor = theme.coloring_container;
            container.style.color = theme.text_col || 'inherit';
        }

        // update game header
        const gameHeader = document.querySelector(".game_header");
        if (gameHeader) {
            gameHeader.style.backgroundColor = theme.coloring_title;
        }

        // update inner windows
        ["inner_window_2", "inner_window_3", "inner_window_4", "inner_window_5"].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.backgroundColor = theme.coloring_window;
        });
    };

    // setup two-way color sync
    setupColorSync('window_color', 'window_color_hex', updatePreview);
    setupColorSync('cont_color', 'cont_color_hex', updatePreview);
    setupColorSync('title_color', 'title_color_hex', updatePreview);
    setupColorSync('text_color', 'text_color_hex', updatePreview);

    const bgInput = document.getElementById('background_url');
    const bgCoverInput = document.getElementById('background_cover');
    const bannerInput = document.getElementById('banner_url');
    const windowUrlInput = document.getElementById('window_url');

    if (bgInput) bgInput.addEventListener('input', updatePreview);
    if (bgCoverInput) bgCoverInput.addEventListener('change', updatePreview);
    if (bannerInput) bannerInput.addEventListener('input', updatePreview);
    if (windowUrlInput) windowUrlInput.addEventListener('input', updatePreview);
};

const makeDraggable = () => {
    const modal = document.querySelector(".custom_theme_menu");
    if (!modal) return;

    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const header = modal.querySelector("h3");
    if (header) {
        header.style.cursor = "move";
        header.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        modal.style.top = (modal.offsetTop - pos2) + "px";
        modal.style.left = (modal.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
};

const initCustomThemeMenu = () => {
    // always ensure custom theme button exists if Custom theme is active
    if (nct_stuff.selectedTheme === "custom") {
        ensureCustomThemeButton();
    }

    setupLiveThemePreview();
    makeDraggable();
    refreshSavedThemesList();
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCustomThemeMenu);
} else {
    initCustomThemeMenu();
}

const loadSavedThemesFromStorage = () => {
    const savedThemes = JSON.parse(window.localStorage.getItem("custom_themes") || "{}");
    nct_stuff.customThemes = savedThemes;
};

const loadCustomThemeFromStorage = () => {
    if (nct_stuff.selectedTheme === "custom") {
        const activeThemeId = window.localStorage.getItem("active_custom_theme_id");

        if (activeThemeId && nct_stuff.customThemes[activeThemeId]) {
            const theme = nct_stuff.customThemes[activeThemeId];
            nct_stuff.themes.custom = theme;
            selectedTheme = theme;
            updateBannerAndStyling();
            updateDynamicStyle();
            if (theme.mod_override) {
                nct_stuff.custom_override = JSON.parse(JSON.stringify(theme));
            }
            return activeThemeId;
        }

        // load old "custom_theme" just in case
        const th = window.localStorage.getItem("custom_theme");
        if (th) {
            const theme = JSON.parse(th);
            nct_stuff.themes.custom = theme;
            selectedTheme = theme;
            updateBannerAndStyling();
            updateDynamicStyle();
            if (theme.mod_override) {
                nct_stuff.custom_override = JSON.parse(JSON.stringify(theme));
            }
            return true;
        }
    }
    return null;
};

loadSavedThemesFromStorage();
populateCustomThemesInPicker();
const activeThemeId = loadCustomThemeFromStorage();
if (activeThemeId) {
    const themePicker = document.getElementById("themePicker");
    if (themePicker) {
        themePicker.value = activeThemeId;
    }
}