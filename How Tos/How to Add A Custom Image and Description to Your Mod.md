# How to Add A Custom Image and Description to Your Mod

In your Code 1, you need to add two new properties to campaign_trail.election.fields. This can be done with JSON.Parse but it is trickier. I recommend just using straight javascript.

They are:

1. site_image <- a url to your custom image
2. site_description <- the custom description you want.

Here is an example with JSON.Parse (from 1972)

```javascript
campaignTrail_temp.election_json = JSON.parse("[{\"model\": \"campaign_trail.election\", \"pk\": 10, \"fields\": {\"year\": 1972, \"summary\": \"<p>With the war in Vietnam still raging and unrest at home, it seems the nation hasn't escaped the turmoil of the 60's.</p><ul><li>Richard Nixon is seeking re-election and is well liked within the Republican party.</li><li>George McGovern represents the left and anti-war wing of his party and faces an uphill battle.</li></ul><p>Both candidates are looking to make a statement, as the re-election of Nixon looks almost certain.</p>\", \"image_url\": \"https://i.imgur.com/TZMS9U5.png\", \"winning_electoral_vote_number\": 270, \"advisor_url\": \"https://i.imgur.com/ZlaaB2y.jpg\", \"recommended_reading\": \"<h4 style=\\\"margin-top: 0.5em;\\\">1972 Election Books and Biographies</h4><a href=\\\"https://www.amazon.com/Fear-Loathing-Campaign-Trail-72/dp/1451691572/ref=msx_wsirn_v2_2?pd_rd_w=TYtoy&pf_rd_p=a00f8d34-28d2-4de2-ac45-221da16fb58c&pf_rd_r=KZ29N6HSZWNFKNVHV0C3&pd_rd_r=70e3be3b-6d31-4713-b867-ee292cae5535&pd_rd_wg=rl59B&pd_rd_i=1451691572&psc=1\\\" target=\\\"_blank\\\">Hunter S. Thompson - Fear and Loathing: On the Campaign Trail '72</a></br><a href=\\\"https://www.amazon.com/Nixonland-Rise-President-Fracturing-America/dp/074324303X/ref=sr_1_1?dchild=1&keywords=nixonland&qid=1618449819&s=books&sr=1-1\\\" target=\\\"_blank\\\">Rick Perlstein - Nixonland: The Rise of a President and the Fracturing of America</a></br><a href=\\\"https://www.amazon.com/Making-President-1972-Landmark-Political/dp/0061900672/ref=sr_1_1?keywords=1972+election&qid=1618449901&s=books&sr=1-1\\\" target=\\\"_blank\\\">Theodore White - The Making of the President 1972</a></br><a href=\\\"https://www.amazon.com/Liberals-Moment-McGovern-Insurgency-Democratic/dp/0700616500/ref=sr_1_3?dchild=1&keywords=1972+election&qid=1618449901&s=books&sr=1-3\\\" target=\\\"_blank\\\">Bruce Miroff - The Liberals' Moment: The McGovern Insurgency and the Identity Crisis of the Democratic Party Paperback</a></br><a href=\\\"https://www.politico.com/story/2018/11/07/this-day-in-politics-november-7-963516\\\" target=\\\"_blank\\\">Andrew Glass - Nixon reelected in landslide, Nov. 7, 1972</a>\", \"has_visits\": 1, \"no_electoral_majority_image\": \"/static/images/2012-no-majority.jpg\", \"site_image\": \"https://cdn.discordapp.com/attachments/1131319966839361576/1133919577110229032/a6219acb7ba72f2d0bc886e017ba6b8128-13-george-mcgovern-1972.rhorizontal.w600.jpg\", \"site_description\": \"The only certain thing in 1972 America is that Richard Nixon is going to win re-election. A crowded Democratic field has narrowest to the most unlikely of outcomes: South Dakota Senator George McGovern has won his party's nomination. By defying the conventional party structure and running on an immediate American withdrawal from the Vietnam War, McGovern's chances of winning the election are near zero. But if McGovern expands his coalition, drawing on the raging discontent in the country, he might just do well enough to make a statement, and change the political landscape forever.\"}}, {\"model\": \"campaign_trail.election\", \"pk\": 20, \"fields\": {\"year\": 2016, \"summary\": \"<p>Donald Trump and Hillary Clinton face off in the 2016 election. While he is well-known among the American public, Trump has never served in elected office. Clinton has served as First Lady, Senator, and Secretary of State. Clinton was the presumptive nominee from start to finish, while Trump has shocked the political world.</p><p>How will their campaign play out? Can Trump pull off an upset? Can Clinton continue the legacy of Obama?</p>\", \"image_url\": \"/static/images/2016-election-photo-v2.jpg\" ... (Cut off for brevity)
```

Here is an example with normal javascript (modified from 2016DNC):

```javascript
campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 9,
        "fields": {
            "year": 2000,
            "summary": "<p>As Obama's second term wraps up, a fight for the future of the Democratic Party has begun. Hillary Clinton – who once appeared as the President’s uncontested successor - must now face off against Vermont Senator Bernie Sanders in the long primary process.</p><p>With Vice President Joe Biden out of the running, it appears that this race will <em>mostly</em> be a one-on-one fight between the two wings of the Democratic Party - the progressive, Left-wing flank, against the establishment, liberal flank.</p><button onclick='next0()'>More</button>",
            "image_url": "https://cdn.discordapp.com/attachments/1061855514536988743/1087941793783500810/2016DNC.png",
            "winning_electoral_vote_number": 2382,
            "advisor_url": "https://media.discordapp.net/attachments/1061855514536988743/1120846808655085568/2016dncadvisor.png",
            "site_image": "https://media.discordapp.net/attachments/1061855514536988743/1120846808655085568/2016dncadvisor.png",
            "site_description": "<p>As Obama's second term wraps up, a fight for the future of the Democratic Party has begun. Hillary Clinton – who once appeared as the President’s uncontested successor - must now face off against Vermont Senator Bernie Sanders in the long primary process.</p><p>With Vice President Joe Biden out of the running, it appears that this race will <em>mostly</em> be a one-on-one fight between the two wings of the Democratic Party - the progressive, Left-wing flank, against the establishment, liberal flank. Martin O'Malley will also attempt to make a splash in the primaries.</p>",
            "has_visits": 1,
            "no_electoral_majority_image": "https://media.discordapp.net/attachments/1061855514536988743/1121649441540165702/dnc_onpage.png"
        }
    }
]
```

The above example has also been shortened a bit for readability.



