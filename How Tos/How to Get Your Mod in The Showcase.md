# How to Get Your Mod in the Showcase
Want to see your mod on the Campaign Trail Showcase? Great! The easiest way to submit it is through a pull request on GitHub.

The old mod submission form is no longer in use, so you'll need to add your mod directly to the Showcase repository. Don't worry if you've never made a pull request before — the process is fairly straightforward.

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

Once your files are in the `static/mods` folder, open `MODLOADERNAME.html` and add your mod to the appropriate section of the mod loader gallery, usually at the end of the list. You can copy the format of the mods already there and change the relevant information for yours.

For example, this would add **2020 - Example** to the loader while displaying it in the gallery as **2020: Example**:

```html
<option data-mode="new" data-tags="Historical" value="2020 - Example">2020: Example</option>
```

The `data-tags` field is used to categorize your mod in the Showcase. The available tags are:

`Historical` — Historical mods

`Althist` — Alternative history mods

`International` — International mods

`State` — State-level mods

`Funny` — Funny or joke mods

You can also use more than one tag when appropriate, such as `Historical State` or `Althist International`.

Before submitting your pull request, give your mod a quick test to make sure everything works as expected. You can do this using the custom mod loader on the Showcase. It's worth checking both that the mod itself loads correctly and that it appears properly in the mod gallery.

Once you're happy with everything, commit your changes to your fork and open a pull request to the main Showcase repository. From there, we'll take a look at your submission and, assuming everything is in order, get it added to the Showcase.

And that's it! Thanks for taking the time to contribute, and we hope to see your mod in the Showcase soon!
