# How to Get Your Mod in the Showcase

Want to see your mod on the Campaign Trail Showcase? Great! The easiest way to submit it is through a pull request on GitHub.

The old mod submission form is no longer in use, so you'll need to add your mod directly to the Showcase repository. Don't worry if you've never made a pull request before — the process is fairly straightforward.

---

### Step 1: Fork and add your files

First, [fork the Campaign Trail Showcase repository](https://github.com/campaign-trail-showcase/campaign-trail-showcase.github.io) on GitHub. Once you've made your fork, add your mod files to the `static/mods` folder.

Your files should use the standard naming format for The Campaign Trail. For example:

```text
static/mods/
├── 2020 - Example_init.html
└── 2020 - Example_FooBar.html
```

The `*_init.html` file, referred to as **Code 1**, contains the basic information for your scenario, including its name. The candidate file, or **Code 2**, contains the actual game content.

The filenames are important, so make sure they match your mod's name and candidates. For example, if your mod is called **2020 - Example**, your Code 1 should be named:

`2020 - Example_init.html`

And if the candidate and running mate have the last names **Foo** and **Bar**, your Code 2 should be:

`2020 - Example_FooBar.html`

---

### Step 2: Register your mod in `mods.json`

Once your files are placed in `static/mods`, open `static/mods/mods.json`.

Scroll down to the bottom of the list and add your mod's entry right before the closing square bracket `]`.

#### Example entry:
```json
  {
    "value": "2020 - Example",
    "text": "2020: Example",
    "mode": "new",
    "tags": "Historical",
    "awards": "",
    "awardimageurls": ""
  }
```

#### Fields breakdown:
* **`value`**: The base file name of your mod (without `_init.html`).
* **`text`**: The display title shown on the mod card in the gallery.
* **`mode`**: Set this to `"new"` for fresh releases so it appears in the *New Releases* tab.
* **`tags`**: Space-separated category tags (see available tags below).
* **`awards`** / **`awardimageurls`**: Leave these as empty strings `""` for new submissions (awards are added by Showcase maintainers during annual award seasons).

#### Available tags:
* `Historical` — Historical elections
* `Althist` — Alternate history scenarios
* `International` — Elections outside the United States
* `State` — Gubernatorial, mayoral, or local/state-level elections
* `Funny` — Joke or humorous scenarios

> **Tip:** You can combine tags by separating them with a space, like `"Historical State"` or `"Althist International"`.

If you are worried about any errors here, copy the full contents of `mods.json` into a free linter like [JSONLint.com](https://jsonlint.com/) or [CodeBeautify JSON Validator](https://codebeautify.org/jsonvalidator) and click on **Validate JSON**. It will immediately pinpoint if you missed a comma or quote.

The most common reason for an error might be a missing or extra comma, usually in the last entry before the final `]`. If you see an error, fix it and try again.

Note that **every** entry in the list must have a comma `,` after its closing brace `}`, **except the very last entry** before the final `]`. See the example below for clarity:

```json
  {
    "value": "PreviousMod",
    "text": "Previous Mod",
    "mode": "",
    "tags": "Historical",
    "awards": "",
    "awardimageurls": ""
  }, // <-- this comma is required
  {
    "value": "2020 - Example",
    "text": "2020: Example",
    "mode": "new",
    "tags": "Historical",
    "awards": "",
    "awardimageurls": ""
  } // <-- this comma is NOT required, as it is the last entry before the closing square bracket
]
```

### Step 3: Test your mod

Before submitting your pull request, test your mod using the **Custom Mod Loader** on the Showcase website:
1. Test your Code 1 and Code 2 to ensure there are no game-breaking errors.
2. Ensure images, soundtracks, and endings load properly. 

---

### Step 4: Submit the pull request

Once you're happy with everything:
1. Commit your changes to your fork.
2. Open a **Pull Request** to the main Showcase repository.
3. Done! From there, we'll take a look at your submission and, assuming everything is in order, get it added to the Showcase.

And that's it! Thanks for taking the time to contribute, and we hope to see your mod in the Showcase soon!