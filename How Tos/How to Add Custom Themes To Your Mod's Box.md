# How to Add Custom Themes To Your Mod's Box

Any mod can have a custom theme for it's mod box on the homepage. These are optional and can be enabled or disabled by the user.

To add one, simply add this chunk of code to your Code 1, and replace the relevant colors with new hex color values.

To test out what your theme looks like, you can either fork this repo and locally host the site, OR you can just add a mod with a theme as a custom mod to the site. Custom mods also work with this!

```javascript
campaignTrail_temp.modBoxTheme = {
    "header_color" : "#FFFFFF",
    "header_text_color" : "#000000",
    "description_text_color" : "#FFFFFF",
    "description_background_color" : "#000000",
    "main_color" : "#FF0000",
    "secondary_color" : "#00FF00",
    "ui_text_color": "#000000"
}
```
