Any mod can have achievements on the Showcase! You don't need to ask anyone to add it.

**Step 1.** Define your achievements your Code 1. This can go near the top.

```javascript

campaignTrail_temp.achievements = {
    "Test" : {
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/1200px-Stray_kitten_Rambo002.jpg",
        "description" : "This is a test MEOW This is a test MEOW This is a test MEOW"
    },
    "Test2" : {
        "image" : "IMAGE URL HERE",
        "description" : "DESCRIPTION HERE"
    },
    "Test33333333333333333333333333333333" : {
        "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/1200px-Stray_kitten_Rambo002.jpg",
        "description" : "This is a test MEOW This is a test MEOW This is a test MEOW This is a test MEOW This is a test MEOW This is a test MEOW This is a test MEOW This is a test MEOW This is a test MEOW"
    }
}
```

Where you replace Test with your achivement's name, image with a url for the achievement image, and description with a basic description of how to unlock it (ex: Die as Paul in 36 - 64 AD). This will work if you add the mod as a custom mod to the mod loader too. So you can test during development.

**Step 2.**

Call this function whenever you want to unlock the achievement. It could be during an end screen, after a choice in CYOA, or whereever else works for you!

```javascript
unlockAchievement("YOUR ACHIEVEMENT NAME HERE");
```

That's all there is to it!