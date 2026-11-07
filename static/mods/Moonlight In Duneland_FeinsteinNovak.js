
// Generated mapping code
(function(e,t,n,r,i){function s(e,t,n,r){r=r instanceof Array?r:[];var i={};for(var s=0;s<r.length;s++){i[r[s]]=true}var o=function(e){this.element=e};o.prototype=n;e.fn[t]=function(){var n=arguments;var r=this;this.each(function(){var s=e(this);var u=s.data("plugin-"+t);if(!u){u=new o(s);s.data("plugin-"+t,u);if(u._init){u._init.apply(u,n)}}else if(typeof n[0]=="string"&&n[0].charAt(0)!="_"&&typeof u[n[0]]=="function"){var a=Array.prototype.slice.call(n,1);var f=u[n[0]].apply(u,a);if(n[0]in i){r=f}}});return r}}var o=370,u=215,a=10;var f={stateStyles:{fill:"#333",stroke:"#666","stroke-width":1,"stroke-linejoin":"round",scale:[1,1]},stateHoverStyles:{fill:"#33c",stroke:"#000",scale:[1.1,1.1]},stateSpecificStyles:{},stateSpecificHoverStyles:{},click:null,mouseover:null,mouseout:null,clickState:{},mouseoverState:{},mouseoutState:{},showLabels:true,labelWidth:20,labelHeight:15,labelGap:6,labelRadius:3,labelBackingStyles:{fill:"#333",stroke:"#666","stroke-width":1,"stroke-linejoin":"round",scale:[1,1]},labelBackingHoverStyles:{fill:"#33c",stroke:"#000"},stateSpecificLabelBackingStyles:{},stateSpecificLabelBackingHoverStyles:{},labelTextStyles:{fill:"#fff",stroke:"none","font-weight":300,"stroke-width":0,"font-size":"10px"},labelTextHoverStyles:{},stateSpecificLabelTextStyles:{},stateSpecificLabelTextHoverStyles:{}};var l={_init:function(t){this.options={};e.extend(this.options,f,t);var n=this.element.width();var i=this.element.height();var s=this.element.width()/o;var l=this.element.height()/u;this.scale=Math.min(s,l);this.labelAreaWidth=Math.ceil(a/this.scale);var c=o+Math.max(0,this.labelAreaWidth-a);this.paper=r(this.element.get(0),c,u);this.paper.setSize(n,i);this.paper.setViewBox(-465, -25, 770.8333333333333, 770.8333333333333, false);this.stateHitAreas={};this.stateShapes={};this.topShape=null;this._initCreateStates();this.labelShapes={};this.labelTexts={};this.labelHitAreas={};if(this.options.showLabels){this._initCreateLabels()}},_initCreateStates:function(){var t=this.options.stateStyles;var n=this.paper;var r={"La.":"m 5.5162156,4.1018016 3.253153,-1.98018 4.8090104,7.213513 3.818918,9.4765774 5.233334,6.223423 3.96036,2.970271 9.052253,6.647748 18.528829,13.71982 7.072072,-3.394595 0.565766,0.282883 5.657657,1.838739 2.970271,0.99009 6.364865,4.667567 0.565765,-0.565766 2.404505,-1.98018 0.707207,-0.707207 2.687392,1.272973 0.56576,0.282883 1.13153,2.121622 2.26307,2.545946 1.69729,2.263063 0.42433,5.516216 v 0.141441 l -5.94054,7.77928 4.95045,6.223423 3.39459,4.101802 5.7991,3.960359 14.285587,3.81892 12.02252,3.11171 h 0.14145 v 0 l 23.33783,8.486487 3.3946,1.13153 2.82883,0.56577 4.1018,0.99009 30.69279,6.5063 33.52162,0.99009 8.48649,3.11171 15.41712,-0.84864 9.05225,-1.13154 26.59099,-3.67747 v 0 l 0.14144,3.67747 -0.14144,2.26307 0.14144,2.82883 v 2.97027 0.84865 l 0.14144,4.66757 v 0.42432 3.3946 0 l 0.14145,7.35495 v 2.40451 l 0.14144,6.64774 v 0 0.70721 l 0.14144,5.23333 0.28288,10.18379 v 2.26306 6.22342 5.94055 2.26306 3.25315 l 0.14144,3.81892 0.14144,0.99009 -0.14144,4.38469 0.14144,8.91081 0.14145,4.1018 0.28288,4.52612 0.14144,5.0919 v 4.24324 0 l 0.42432,13.15405 v 0.42433 0.28288 4.1018 l 0.42433,18.10451 v 0 l 0.14144,27.01531 v 0.42433 10.89099 0 6.93063 0 9.05225 0 l 0.14144,0.84865 v 0 l 0.14144,35.07748 v 10.04234 0 5.94054 0 1.83874 0 5.65766 l -0.14144,26.02522 v 0 l 0.14144,12.16397 v 1.55585 45.26126 l -0.42432,15.84145 v 1.41441 l 0.42432,18.10451 0.42433,18.38738 0.42432,18.10451 v 0 0.42432 0 17.96307 0 l 0.28288,9.05225 v 0 30.69279 0 0.99009 0 l -6.78918,8.2036 -45.54415,20.93334 v 0 l -9.05225,4.24324 -35.5018,35.78469 -6.08199,4.1018 -2.26306,0.42432 -8.48649,0.56577 -3.81891,0.14144 -14.70991,6.22342 -17.11442,6.22343 -8.76937,8.91081 -2.82883,2.97027 -9.05225,0.42432 -10.32523,0.28289 -13.578377,-7.63784 -11.598196,-6.22343 -4.526126,-1.27297 -1.131532,0.14144 -9.335135,4.52613 -24.752253,0.84865 -38.1891894,4.80901 v 0 -95.47298 -50.07027 l 0.141441,-18.95315 v 0 l 0.282883,-57.84955 v -4.52613 -0.70721 l 0.141441,-8.62792 0.848649,-26.59099 0.141442,-2.68739 v -1.83874 l -0.141442,-67.89189 v -22.63063 0 -20.50901 -1.98018 l 0.141442,-4.38469 v 0 -4.66757 l 0.141441,-13.29549 v -6.08198 l 0.141441,-8.06217 0.141442,-9.33513 0.141441,-17.68018 0.141442,-8.62793 v 0 -0.14144 l -0.141442,-33.0973 v -3.53604 l 0.424325,-5.09189 v 0 -8.34504 -8.34505 -1.98018 0 -2.12162 -1.41441 0 -1.98018 -5.37478 -4.52612 l 0.141441,-1.13154 v -4.52612 -4.52613 -1.98018 -7.35495 -3.25316 -0.99009 -4.52612 -11.17388 0 -3.96036 l -0.141441,-8.345047 v 0 l 0.141441,-3.11171 v 0 -18.528828 -11.032433 -2.121621 -38.896397 0 l -0.141441,-13.71982 v 0 l 0.565765,-4.6675684 0.282883,-2.121621 z"};var tr={};var i={};for(var s in r){i={};if(this.options.stateSpecificStyles[s]){e.extend(i,t,this.options.stateSpecificStyles[s])}else{i=t}this.stateShapes[s]=n.path(r[s]).attr(i);if(tr[s]){if(this.stateShapes[s].node&&this.stateShapes[s].node.setAttribute){this.stateShapes[s].node.setAttribute("transform",tr[s])}else{this.stateShapes[s].transform(tr[s])}}this.topShape=this.stateShapes[s];this.stateHitAreas[s]=n.path(r[s]).attr({fill:"#000","stroke-width":0,opacity:0,cursor:"pointer"});if(tr[s]){if(this.stateHitAreas[s].node&&this.stateHitAreas[s].node.setAttribute){this.stateHitAreas[s].node.setAttribute("transform",tr[s])}else{this.stateHitAreas[s].transform(tr[s])}}this.stateHitAreas[s].node.dataState=s}this._onClickProxy=e.proxy(this,"_onClick");this._onMouseOverProxy=e.proxy(this,"_onMouseOver"),this._onMouseOutProxy=e.proxy(this,"_onMouseOut");for(var s in this.stateHitAreas){this.stateHitAreas[s].toFront();e(this.stateHitAreas[s].node).bind("mouseout",this._onMouseOutProxy);e(this.stateHitAreas[s].node).bind("click",this._onClickProxy);e(this.stateHitAreas[s].node).bind("mouseover",this._onMouseOverProxy)}},_initCreateLabels:function(){var t=this.paper;var n=[];var r=860;var i=220;var s=this.options.labelWidth;var o=this.options.labelHeight;var u=this.options.labelGap;var a=this.options.labelRadius;var f=s/this.scale;var l=o/this.scale;var c=(s+u)/this.scale;var h=(o+u)/this.scale*.5;var p=a/this.scale;var d=this.options.labelBackingStyles;var v=this.options.labelTextStyles;var m={};for(var g=0,y,b,w;g<n.length;++g){w=n[g];y=(g+1)%2*c+r;b=g*h+i,m={};if(this.options.stateSpecificLabelBackingStyles[w]){e.extend(m,d,this.options.stateSpecificLabelBackingStyles[w])}else{m=d}this.labelShapes[w]=t.rect(y,b,f,l,p).attr(m);m={};if(this.options.stateSpecificLabelTextStyles[w]){e.extend(m,v,this.options.stateSpecificLabelTextStyles[w])}else{e.extend(m,v)}if(m["font-size"]){m["font-size"]=parseInt(m["font-size"])/this.scale+"px"}this.labelTexts[w]=t.text(y+f/2,b+l/2,w).attr(m);this.labelHitAreas[w]=t.rect(y,b,f,l,p).attr({fill:"#000","stroke-width":0,opacity:0,cursor:"pointer"});this.labelHitAreas[w].node.dataState=w}for(var w in this.labelHitAreas){this.labelHitAreas[w].toFront();e(this.labelHitAreas[w].node).bind("mouseout",this._onMouseOutProxy);e(this.labelHitAreas[w].node).bind("click",this._onClickProxy);e(this.labelHitAreas[w].node).bind("mouseover",this._onMouseOverProxy)}},_getStateFromEvent:function(e){var t=e.target&&e.target.dataState||e.dataState;return this._getState(t)},_getState:function(e){var t=this.stateShapes[e];var n=this.stateHitAreas[e];var r=this.labelShapes[e];var i=this.labelTexts[e];var s=this.labelHitAreas[e];return{shape:t,hitArea:n,name:e,labelBacking:r,labelText:i,labelHitArea:s}},_onMouseOut:function(e){var t=this._getStateFromEvent(e);if(!t.hitArea){return}return!this._triggerEvent("mouseout",e,t)},_defaultMouseOutAction:function(t){var n={};if(this.options.stateSpecificStyles[t.name]){e.extend(n,this.options.stateStyles,this.options.stateSpecificStyles[t.name])}else{n=this.options.stateStyles}t.shape.animate(n,this.options.stateHoverAnimation);if(t.labelBacking){var n={};if(this.options.stateSpecificLabelBackingStyles[t.name]){e.extend(n,this.options.labelBackingStyles,this.options.stateSpecificLabelBackingStyles[t.name])}else{n=this.options.labelBackingStyles}t.labelBacking.animate(n,this.options.stateHoverAnimation)}},_onClick:function(e){var t=this._getStateFromEvent(e);if(!t.hitArea){return}return!this._triggerEvent("click",e,t)},_onMouseOver:function(e){var t=this._getStateFromEvent(e);if(!t.hitArea){return}return!this._triggerEvent("mouseover",e,t)},_defaultMouseOverAction:function(t){this.bringShapeToFront(t.shape);this.paper.safari();var n={};if(this.options.stateSpecificHoverStyles[t.name]){e.extend(n,this.options.stateHoverStyles,this.options.stateSpecificHoverStyles[t.name])}else{n=this.options.stateHoverStyles}t.shape.animate(n,this.options.stateHoverAnimation);if(t.labelBacking){var n={};if(this.options.stateSpecificLabelBackingHoverStyles[t.name]){e.extend(n,this.options.labelBackingHoverStyles,this.options.stateSpecificLabelBackingHoverStyles[t.name])}else{n=this.options.labelBackingHoverStyles}t.labelBacking.animate(n,this.options.stateHoverAnimation)}},_triggerEvent:function(t,n,r){var i=r.name;var s=false;var o=e.Event("usmap"+t+i);o.originalEvent=n;if(this.options[t+"State"][i]){s=this.options[t+"State"][i](o,r)===false}if(o.isPropagationStopped()){this.element.trigger(o,[r]);s=s||o.isDefaultPrevented()}if(!o.isPropagationStopped()){var u=e.Event("usmap"+t);u.originalEvent=n;if(this.options[t]){s=this.options[t](u,r)===false||s}if(!u.isPropagationStopped()){this.element.trigger(u,[r]);s=s||u.isDefaultPrevented()}}if(!s){switch(t){case"mouseover":this._defaultMouseOverAction(r);break;case"mouseout":this._defaultMouseOutAction(r);break}}return!s},trigger:function(e,t,n){t=t.replace("usmap","");e=e.toUpperCase();var r=this._getState(e);this._triggerEvent(t,n,r)},bringShapeToFront:function(e){if(this.topShape){e.insertAfter(this.topShape)}this.topShape=e}};var c=[];s(e,"usmap",l,c)})(jQuery,document,window,Raphael)

campaignTrail_temp.questions_json = [
    {
        "model": "campaign_trail.question",
        "pk": 415,
        "fields": {
            "description": "The brisk winter air wraps around you and your beloved like a snake constricting its prey; but between the screeching of fireworks, the hollering of jubilant neighbors, and the feeling of her hand in your own, you find winter's fangs feeling duller than they have in a long while. You turn to her - your partner in affairs temporal and eternal - and smile. She throws her arms around you and buries her face in your coat. ''Happy New Year, Katherine,'' she mutters."
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 416,
        "fields": {
            "description": "You stand in the local park on an especially frigid January day. Layla is in front of you, giving a short speech announcing her campaign, but your focus drifts away from her words and to her figure. She has always had a tendency to bounce, and even here, leaning against a podium three-fourths her height, there is a lightness in her feet which neither the muddy work of politicking nor the weight of winter snow could obstruct. You smile to yourself, imagining-"
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 417,
        "fields": {
            "description": "Snowflakes continue to trickle down from the heavens as you step out of the car and take Layla's hand. You've come to the antique mall down the way; Layla has had her eye on visiting for quite a while now, and you've run out of other things to do for Valentine's Day. She pulls you close as you walk in, snow boots splashing through large puddles of ice-cold runoff water and tromping past small piles of yesterday's snowfall. The building smells of old car leather, furniture, paper, and countless other things, and the aisles are categorized by town names. Each stall is dressed to look like the rooms of homes which never existed."
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 418,
        "fields": {
            "description": "Crisp, cold air fills your lungs as you step out of the car for the last of your little getaways before work really begins. You're to pay a visit to your grandparents, as is Layla. A clear blue sky and lively sun does not mask the February chill, but you think it better that way. Where you are is a kind of museum, a vast area of stoic marble and Indiana limestone and grasses blowing in the wind beneath kindly old trees and pathways looked after for what may as well be time immemorial, before the very asphalt they are forged of was a twinkle in man's eye. Altogether, it is a monument to and home of love - one of the many cemeteries in Lake County. "
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 419,
        "fields": {
            "description": "It is a brisk March evening, and you have to wrap yourself into your autumn coat to stay warm as the wind nips at your fingers. You sit by the big tree in the middle of your backyard, closing your eyes to focus on the cool moistness of the grass and the softened-with-age bark your head rests upon; in front of you, Layla is tending to her garden. She raises vegetables and flowers, and delights in her peppers and cilantro so much she fancies herself a spice trader some days. You smile to yourself; you do not need to see to feel how happy she is, with her skipping across the dirt and cheery humming. Your thoughts drift..."
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 420,
        "fields": {
            "description": "The thirty degree freeze does not hinder you from keeping the top down today, as the sky over Indianapolis Boulevard is cloudless and a beautifully lively shade of blue. The weather gives you solace. Your morning was a rowdy meeting with party officials, and the rest of the day is taken up by a meet-and-greet you are <i>not</i> excited for; but this midday is yours, yours and Layla's, and that means lunch should be a treat. It's only a matter of choice."
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 421,
        "fields": {
            "priority": -2,
            "description": "Chicagoland, as is the springtime routine, has been struck with a night of heavy winds, rain, and thunder. Thankfully, this time it isn't so bad. Instead of flooding or power outages - or at least, with a minimal amount of power outages - you and Layla wake up in the morn to the coolness of the overcast sky and a landscape gleaming with dew. The grass, the asphalt, the concrete is all wet; you smell the dampness in the dirt and the moss on the trees. The sun tiptoes meekly past a thick layer of clouds as you find the forecast predicting another round of rain today."
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 422,
        "fields": {
            "description": "Amidst the humdrum of the primary season, you have taken your wife on a surprise ride around the county. Driving through Lake County is a small, though potent, pleasure of both of yours; she is deceptively large, and even after so many times it still puts a smile on your face how the streets of the north which straddle both that lakefront at the end of the world and those factories which gave birth to it, how they shift into the south end of the county where all the noises you hear are your own and the roads are flanked on either end by modern farmland and ancient Midwestern prairie. Might you like to stop anywhere?"
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 429,
        "fields": {
            "description": "You return home for only a moment amidst the year; but a moment is all it takes to see the toll of time. Your town is at least a decade, or five of them, ten of them, maybe a bit more - however many decades old, and in that span of time, black asphalt has dried gray and cracked like brittle sticks in a forest, and the railways you knew as your parents have rusted and gone dull and there aren't so many trains which pass by anymore. You look to her, and you see in her the same. Silver strands of hair, one more wrinkle than there was yesterday, her voice a little deeper, a little more quiet than it used to be. "
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 430,
        "fields": {
            "description": "Today is the first Tuesday in May and thus the State of Indiana's primary date. Neither you nor Layla have any expectation of actually winning, yet you wait for results none the less excited. After voting in the morning, you attend a stage play put on by a local troop of thespians in Hammond; the theatre is small and humble, but the passion of the performers shines through and it is a wonderful time. Layla, offhandedly, mentions to you her longtime dream of the stage."
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 431,
        "fields": {
            "description": "Unsurprisingly, Layla lost the primary. However, the two of you can take solace in the note that it was shockingly close for a Lake County election, and so you march onwards through the summer. Another long drive along the crossroads of America takes you anywhere from the tip of what was once a glacier tall and wide enough to shake hands with the cosmos to tiny, forested neighborhoods of families who have resided in the area for over a century. What stands out to you the most?"
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 432,
        "fields": {
            "description": "On a sunny afternoon, the two of you take a visit through the local mall. It's quieter than the place was in your youth - she's certainly seen better days - but Southlake is still an institution within the region. On your way through, you split up with Layla and go searching for clothes. Most are quite ordinary, but one item sticks out. It's-"
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 433,
        "fields": {
            "description": "The autumn leaves begin to fall again as summer winds to a close. Amidst the hum-drum of the campaign, you and Layla attend a baseball game: the local minor team, the Railcats, are playing at home. Neither of you are particular baseball enthusiasts but it's a fun date regardless, and as you look over the stadium from your seats you get the itch to make something special of the day."
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 434,
        "fields": {
            "description": "The South Shore Line slides to a halt in Miller. The sky is purple and pink, saturated with the vibrant paint-palette of a beachside sunset. The two of you step off and start walking down to the sands. Layla asks you what the box in your arms is; you simply smile and shake your head. \"It's a surprise,\" you say. At least, it's a surprise for now. You look up, and see the moon wakefully stretching her arms over the horizon."
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 435,
        "fields": {
            "description": "She comes out of the bathroom and your jaw drops. She's beautiful, and that dress only makes her features shine brighter. Her eyes are lit up in the same shade of blue as the sequins at her feet; the moonlight glancing off of her reflects back at you and illuminates your own face. With every step she shimmers and sparkles like the stars above - not even the lights of Chicago, that skyline of promise sitting on the horizon, can smother the deep navy blue sky."
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 436,
        "fields": {
            "description": "You take her hand in yours and spin her close to you. She falls backwards into your arms - is the glow on her face the moon, or simply her expression? It doesn't matter. You spin her around again, twirling in sync and dancing to an invisible beat across the sands of the Dunes. Between turns you see the water glittering ahead, the skyline, the lights, you hear the thundering of the trains behind you, and then she takes your hand again-"
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 437,
        "fields": {
            "description": "The concerns of the world fade to black as all you know is the sand beneath your feet, grains kicked up with each step forward and backwards, and you, your arms and legs shaking in time to her laughter, and her, light as a cloud as her bare feet prance across the Dunes."
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 439,
        "fields": {
            "description": "And finally, after what seems like hours, you give her one last spin and your feet one last twirl and you cannot feel your legs any longer. You fall to the ground, landing on the soft sand, laughing and grinning with her, and she kneels down, and-"
        }
    }
];

campaignTrail_temp.answers_json = [
    {
        "model": "campaign_trail.answer",
        "pk": 3509,
        "fields": {
            "question": 415,
            "description": "''Happy New Year, Layla.''"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3513,
        "fields": {
            "question": 416,
            "description": "-the same light and gentle steps wandering silently through the halls of the county's many libraries, whose brick walls and duly-organized shelves you both have spent countless days of your life within..."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3514,
        "fields": {
            "question": 416,
            "description": "-sweeping those feet clean off the ground, clutching the woman firmly in your arms like a damsel in distress and staring softly into her wide twinkling eyes as her face turns bright-red..."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3515,
        "fields": {
            "question": 416,
            "description": "-watching her steps shift and flow like ribbons of water down a slide, holding her hand and twirling her around as you dance together on the old great gazebo floor under the autumn sun..."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3516,
        "fields": {
            "question": 417,
            "description": "<i>Munster</i>"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3517,
        "fields": {
            "question": 417,
            "description": "<i>Whiting</i>"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3518,
        "fields": {
            "question": 417,
            "description": "<i>Highland</i>"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3519,
        "fields": {
            "question": 417,
            "description": "<i>Dyer</i>"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3520,
        "fields": {
            "question": 418,
            "description": "Say hello."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3523,
        "fields": {
            "question": 419,
            "description": "<i>It's so comfortable here...</i>"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3524,
        "fields": {
            "question": 419,
            "description": "<i>She's like a magician with her plants...</i>"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3525,
        "fields": {
            "question": 419,
            "description": "<i>The night is still so young...</i>"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3526,
        "fields": {
            "question": 420,
            "description": "Could go for some chicken."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3527,
        "fields": {
            "question": 420,
            "description": "Burgers would be nice, I think."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3528,
        "fields": {
            "question": 421,
            "description": "Let's take a drive."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3529,
        "fields": {
            "question": 421,
            "description": "I should walk for a bit."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3530,
        "fields": {
            "question": 421,
            "description": "Why not go into town?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3531,
        "fields": {
            "question": 422,
            "description": "Well, uh, what do you think, Lee? Any preference?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3532,
        "fields": {
            "question": 422,
            "description": "Well, uh, what do you think, Lee? Any preference?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3588,
        "fields": {
            "question": 429,
            "description": "Flowers bloom and die, empires rise and fall, and Father Time continues to scurry onward, as if he is running out of time himself. But he has not claimed the beating of my heart; no, it beats with the same fire that it did when we first met, and nothing can change that."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3589,
        "fields": {
            "question": 429,
            "description": "Some of the streetlamps flicker when I walk by; it is to be expected that things in the world decay. But the feeling of her hand in mine... those goosebumps never lessen, and I prefer it that way."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3590,
        "fields": {
            "question": 429,
            "description": "If given the choice, I would freeze the universe's clock for an extra minute with her; little else matters to me."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3591,
        "fields": {
            "question": 429,
            "description": "I suppose that makes her...  my 'home,' doesn't it?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3592,
        "fields": {
            "question": 430,
            "description": "..."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3596,
        "fields": {
            "question": 431,
            "description": "Besides the highways lies the mammoth which gave life to the County at the turn of the century. The steel yards, the rail yards, the docks and the refineries; chief among them, the Gary Works. Her smokestacks bloom with great pillars of white steam, and you feel you must roll up your sleeves as you approach her. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3597,
        "fields": {
            "question": 431,
            "description": "South of the interstates, the State of Indiana begins proper. Rolling crescent hills and long stretches of prairie cover the land, punctuated by farms which have been in operation since before you were born. You stop at one: Fair Oaks."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3598,
        "fields": {
            "question": 431,
            "description": "Between the metal beasts to the north and the prairieborn life to the south lies a network of pure, concentrated Middle America. Lake County is home to many suburbs; these towns are old enough to have their own histories and yet young enough to be any old American suburb. Until traffic halts and the trains come rolling through Main Street, of course."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3600,
        "fields": {
            "question": 432,
            "description": "-a beautiful semisequinned silverish-blue dress, woven in satin with white muslin lace, sparkling even in the display of the store-"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3601,
        "fields": {
            "question": 432,
            "description": "-and what a disreputable display case it calls home! This dress is too fine, too exquisite for such an unpolished carrier; just the way it shimmers unmoving leaves you-"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3602,
        "fields": {
            "question": 432,
            "description": "-utterly awestruck, and how it flows to the ground with its sequins picking up the lights and carrying them back upwards like the glittering of a vast waterfall, coursing over-"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3603,
        "fields": {
            "question": 432,
            "description": "-the sides of the earth, and now you know you <i>must</i> buy this, and it <i>must</i> be for your beloved, and it <i>must</i> be reserved as a gift at a critical hour."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3604,
        "fields": {
            "question": 433,
            "description": "Why not take a walk around the ring? I remember there being a playground in the stadium, somewhere..."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3605,
        "fields": {
            "question": 433,
            "description": "Isn't there the arcade? We could go there, if it's open."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3606,
        "fields": {
            "question": 433,
            "description": "Well, I am hungry..."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3607,
        "fields": {
            "question": 434,
            "description": "Finally the two of you reach the beach, and by the restroom post you tug on Layla's arm. She turns around and gives you a curious look, and you see the sparkle in her eyes that you've fallen in love with over and over again."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3608,
        "fields": {
            "question": 434,
            "description": "You ask her to close her eyes; she does so. You descend to one knee, pull out the box, and present it to her. She's startled, she tries to say something - but she cannot find anything to say. You hand her the box."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3609,
        "fields": {
            "question": 434,
            "description": "Layla gently opens the box, carefully removing the ribbon tied around the top. She pulls the top off and sees the dress you had bought for her. Rays of moonlight bounce from her shoulders onto the sequinned lower half of the dress, spraying sparkles across the night."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3610,
        "fields": {
            "question": 434,
            "description": "She is stunned. She pulls the dress out and looks it over, wordlessly considering each and every aspect of it. You smile and ask her what she thinks; she sheds tears. You nod your head in the direction of the bathroom; \"go change,\" you say without speaking."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3611,
        "fields": {
            "question": 435,
            "description": "You take her hand and gently walk her to the edge of the waters."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3612,
        "fields": {
            "question": 435,
            "description": "You kiss her hand and she blushes deeply, the pink in her face contrasting with the blues of her dress."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3613,
        "fields": {
            "question": 435,
            "description": "And in a voice soft and genteel, you lean over and clasp your hands around hers and you ask:"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3614,
        "fields": {
            "question": 435,
            "description": "\"May I have this dance?\""
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3615,
        "fields": {
            "question": 436,
            "description": "And it fades into the background."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3616,
        "fields": {
            "question": 436,
            "description": "In the midst of the twists and turns of your dance the world seems to contort and turn into something unintelligible-"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3617,
        "fields": {
            "question": 436,
            "description": "Save for her. Her, whose face illuminates the night brighter than any star in the sky. Her, the object of all your feeling, the woman you live and die for."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3618,
        "fields": {
            "question": 436,
            "description": "She is the moonlight, and you are her starlights sprinkling down from the heavens."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3619,
        "fields": {
            "question": 437,
            "description": "Your dance is indeterminate, random, mostly spinning like salsa, but full of heart and that is all it needs to be. You feel her and she feels you."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3620,
        "fields": {
            "question": 437,
            "description": "There is no breeze but you have made your own and the dune grasses follow your movement, bending in time like background dancers on a grand stage."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3621,
        "fields": {
            "question": 437,
            "description": "And it is a stage! Your stage, the stage of life and love! And the two of you are in total control, giving and taking, back and forth-"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3622,
        "fields": {
            "question": 437,
            "description": "-and the trains continue thundering, and the sand continues to kick up, and the waves crash forward and wet your feet as you continue to feel the night away."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3626,
        "fields": {
            "question": 439,
            "description": "-you take her arm and pull her close;"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3627,
        "fields": {
            "question": 439,
            "description": "she looks into your eyes, beaming wildly, eyes full of love-"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3628,
        "fields": {
            "question": 439,
            "description": "-and you kiss her. You pull her into your arms fully and wrap your lips around hers, and she returns the favor. The night is yours, all yours and only yours, together."
        }
    }
];

campaignTrail_temp.states_json = [
    {
        "model": "campaign_trail.state",
        "pk": 12761,
        "fields": {
            "name": "Lake County",
            "abbr": "La.",
            "electoral_votes": 0,
            "popular_votes": 142546,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 10
        },
        "d": "m 5.5162156,4.1018016 3.253153,-1.98018 4.8090104,7.213513 3.818918,9.4765774 5.233334,6.223423 3.96036,2.970271 9.052253,6.647748 18.528829,13.71982 7.072072,-3.394595 0.565766,0.282883 5.657657,1.838739 2.970271,0.99009 6.364865,4.667567 0.565765,-0.565766 2.404505,-1.98018 0.707207,-0.707207 2.687392,1.272973 0.56576,0.282883 1.13153,2.121622 2.26307,2.545946 1.69729,2.263063 0.42433,5.516216 v 0.141441 l -5.94054,7.77928 4.95045,6.223423 3.39459,4.101802 5.7991,3.960359 14.285587,3.81892 12.02252,3.11171 h 0.14145 v 0 l 23.33783,8.486487 3.3946,1.13153 2.82883,0.56577 4.1018,0.99009 30.69279,6.5063 33.52162,0.99009 8.48649,3.11171 15.41712,-0.84864 9.05225,-1.13154 26.59099,-3.67747 v 0 l 0.14144,3.67747 -0.14144,2.26307 0.14144,2.82883 v 2.97027 0.84865 l 0.14144,4.66757 v 0.42432 3.3946 0 l 0.14145,7.35495 v 2.40451 l 0.14144,6.64774 v 0 0.70721 l 0.14144,5.23333 0.28288,10.18379 v 2.26306 6.22342 5.94055 2.26306 3.25315 l 0.14144,3.81892 0.14144,0.99009 -0.14144,4.38469 0.14144,8.91081 0.14145,4.1018 0.28288,4.52612 0.14144,5.0919 v 4.24324 0 l 0.42432,13.15405 v 0.42433 0.28288 4.1018 l 0.42433,18.10451 v 0 l 0.14144,27.01531 v 0.42433 10.89099 0 6.93063 0 9.05225 0 l 0.14144,0.84865 v 0 l 0.14144,35.07748 v 10.04234 0 5.94054 0 1.83874 0 5.65766 l -0.14144,26.02522 v 0 l 0.14144,12.16397 v 1.55585 45.26126 l -0.42432,15.84145 v 1.41441 l 0.42432,18.10451 0.42433,18.38738 0.42432,18.10451 v 0 0.42432 0 17.96307 0 l 0.28288,9.05225 v 0 30.69279 0 0.99009 0 l -6.78918,8.2036 -45.54415,20.93334 v 0 l -9.05225,4.24324 -35.5018,35.78469 -6.08199,4.1018 -2.26306,0.42432 -8.48649,0.56577 -3.81891,0.14144 -14.70991,6.22342 -17.11442,6.22343 -8.76937,8.91081 -2.82883,2.97027 -9.05225,0.42432 -10.32523,0.28289 -13.578377,-7.63784 -11.598196,-6.22343 -4.526126,-1.27297 -1.131532,0.14144 -9.335135,4.52613 -24.752253,0.84865 -38.1891894,4.80901 v 0 -95.47298 -50.07027 l 0.141441,-18.95315 v 0 l 0.282883,-57.84955 v -4.52613 -0.70721 l 0.141441,-8.62792 0.848649,-26.59099 0.141442,-2.68739 v -1.83874 l -0.141442,-67.89189 v -22.63063 0 -20.50901 -1.98018 l 0.141442,-4.38469 v 0 -4.66757 l 0.141441,-13.29549 v -6.08198 l 0.141441,-8.06217 0.141442,-9.33513 0.141441,-17.68018 0.141442,-8.62793 v 0 -0.14144 l -0.141442,-33.0973 v -3.53604 l 0.424325,-5.09189 v 0 -8.34504 -8.34505 -1.98018 0 -2.12162 -1.41441 0 -1.98018 -5.37478 -4.52612 l 0.141441,-1.13154 v -4.52612 -4.52613 -1.98018 -7.35495 -3.25316 -0.99009 -4.52612 -11.17388 0 -3.96036 l -0.141441,-8.345047 v 0 l 0.141441,-3.11171 v 0 -18.528828 -11.032433 -2.121621 -38.896397 0 l -0.141441,-13.71982 v 0 l 0.565765,-4.6675684 0.282883,-2.121621 z"
    }
];

campaignTrail_temp.issues_json = [
    {
        "model": "campaign_trail.issue",
        "pk": 32,
        "fields": {
            "name": "The Heart",
            "description": "",
            "stance_1": "Flatlined",
            "stance_desc_1": "",
            "stance_2": "Ailing",
            "stance_desc_2": "",
            "stance_3": "Medicated",
            "stance_desc_3": "",
            "stance_4": "Beating Steady",
            "stance_desc_4": "",
            "stance_5": "Sturdy",
            "stance_desc_5": "",
            "stance_6": "Robust",
            "stance_desc_6": "",
            "stance_7": "Iron-forged",
            "stance_desc_7": "",
            "election": 10
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 33,
        "fields": {
            "name": "The Water",
            "description": "",
            "stance_1": "Raging",
            "stance_desc_1": "",
            "stance_2": "Fast Currents",
            "stance_desc_2": "",
            "stance_3": "Flowing Quickly",
            "stance_desc_3": "",
            "stance_4": "Flowing Smoothly",
            "stance_desc_4": "",
            "stance_5": "Slow Pace",
            "stance_desc_5": "",
            "stance_6": "At Peace",
            "stance_desc_6": "",
            "stance_7": "Serenely Still",
            "stance_desc_7": "",
            "election": 10
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 34,
        "fields": {
            "name": "The Night",
            "description": "",
            "stance_1": "Blacked Out",
            "stance_desc_1": "",
            "stance_2": "Eerie",
            "stance_desc_2": "",
            "stance_3": "Dormant",
            "stance_desc_3": "",
            "stance_4": "Living",
            "stance_desc_4": "",
            "stance_5": "Twinkling Lights",
            "stance_desc_5": "",
            "stance_6": "Gleaming",
            "stance_desc_6": "",
            "stance_7": "Stars Above",
            "stance_desc_7": "",
            "election": 10
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 35,
        "fields": {
            "name": "The Fire",
            "description": "",
            "stance_1": "Extinguished",
            "stance_desc_1": "",
            "stance_2": "Mere Embers",
            "stance_desc_2": "",
            "stance_3": "Wilting",
            "stance_desc_3": "",
            "stance_4": "Camp-Ready",
            "stance_desc_4": "",
            "stance_5": "Fueled",
            "stance_desc_5": "",
            "stance_6": "Flaring Up",
            "stance_desc_6": "",
            "stance_7": "Alive!",
            "stance_desc_7": "",
            "election": 10
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 36,
        "fields": {
            "name": "The Dream",
            "description": "",
            "stance_1": "Deep Sleep",
            "stance_desc_1": "",
            "stance_2": "Stirring Silently",
            "stance_desc_2": "",
            "stance_3": "Outlined",
            "stance_desc_3": "",
            "stance_4": "Planned",
            "stance_desc_4": "",
            "stance_5": "Moving Forward",
            "stance_desc_5": "",
            "stance_6": "Within Reach",
            "stance_desc_6": "",
            "stance_7": "Realized",
            "stance_desc_7": "",
            "election": 10
        }
    }
];

campaignTrail_temp.state_issue_score_json = [
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12766,
        "fields": {
            "state": 12761,
            "issue": 32,
            "state_issue_score": 0,
            "weight": 0
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12767,
        "fields": {
            "state": 12761,
            "issue": 33,
            "state_issue_score": 0,
            "weight": 0
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12768,
        "fields": {
            "state": 12761,
            "issue": 34,
            "state_issue_score": 0.45,
            "weight": 0
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12769,
        "fields": {
            "state": 12761,
            "issue": 35,
            "state_issue_score": -0.25,
            "weight": 0
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12770,
        "fields": {
            "state": 12761,
            "issue": 36,
            "state_issue_score": -0.55,
            "weight": 0
        }
    }
];

campaignTrail_temp.candidate_issue_score_json = [
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 328,
        "fields": {
            "candidate": 91,
            "issue": 32,
            "issue_score": 0.75
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 329,
        "fields": {
            "candidate": 91,
            "issue": 33,
            "issue_score": -0.3
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 330,
        "fields": {
            "candidate": 91,
            "issue": 34,
            "issue_score": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 331,
        "fields": {
            "candidate": 91,
            "issue": 35,
            "issue_score": 0.333
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 332,
        "fields": {
            "candidate": 91,
            "issue": 36,
            "issue_score": -0.55
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 333,
        "fields": {
            "candidate": 92,
            "issue": 32,
            "issue_score": 0.333
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 334,
        "fields": {
            "candidate": 92,
            "issue": 33,
            "issue_score": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 335,
        "fields": {
            "candidate": 92,
            "issue": 34,
            "issue_score": -0.1
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 336,
        "fields": {
            "candidate": 92,
            "issue": 35,
            "issue_score": -0.333
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 337,
        "fields": {
            "candidate": 92,
            "issue": 36,
            "issue_score": -0.55
        }
    }
];

campaignTrail_temp.running_mate_issue_score_json = [];

campaignTrail_temp.candidate_state_multiplier_json = [
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12762,
        "fields": {
            "candidate": 91,
            "state": 12761,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12763,
        "fields": {
            "candidate": 92,
            "state": 12761,
            "state_multiplier": 2
        }
    }
];

campaignTrail_temp.answer_score_global_json = [
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1359,
        "fields": {
            "answer": 3588,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1360,
        "fields": {
            "answer": 3590,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1361,
        "fields": {
            "answer": 3591,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.15
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1367,
        "fields": {
            "answer": 3598,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1374,
        "fields": {
            "answer": 3604,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.15
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1376,
        "fields": {
            "answer": 3606,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.15
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1377,
        "fields": {
            "answer": 3607,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.175
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1379,
        "fields": {
            "answer": 3611,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.175
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1381,
        "fields": {
            "answer": 3612,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.175
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1382,
        "fields": {
            "answer": 3619,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.175
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1383,
        "fields": {
            "answer": 3621,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.175
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1384,
        "fields": {
            "answer": 3622,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.175
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1386,
        "fields": {
            "answer": 3626,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.175
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1387,
        "fields": {
            "answer": 3628,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.175
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1442,
        "fields": {
            "answer": 3592,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1451,
        "fields": {
            "answer": 3610,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.175
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1454,
        "fields": {
            "answer": 3614,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.175
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12772,
        "fields": {
            "answer": 3509,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12773,
        "fields": {
            "answer": 3513,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12774,
        "fields": {
            "answer": 3514,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12775,
        "fields": {
            "answer": 3515,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.12
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12776,
        "fields": {
            "answer": 3516,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.12
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12777,
        "fields": {
            "answer": 3517,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12778,
        "fields": {
            "answer": 3518,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12779,
        "fields": {
            "answer": 3519,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12780,
        "fields": {
            "answer": 3520,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.15
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12781,
        "fields": {
            "answer": 3523,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.12
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12782,
        "fields": {
            "answer": 3524,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12783,
        "fields": {
            "answer": 3525,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.075
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12784,
        "fields": {
            "answer": 3526,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12785,
        "fields": {
            "answer": 3527,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12786,
        "fields": {
            "answer": 3528,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.13
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12787,
        "fields": {
            "answer": 3529,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.175
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12788,
        "fields": {
            "answer": 3530,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.09
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12789,
        "fields": {
            "answer": 3531,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.3
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12790,
        "fields": {
            "answer": 3532,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.3
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12792,
        "fields": {
            "answer": 3589,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.075
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12795,
        "fields": {
            "answer": 3596,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.15
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12796,
        "fields": {
            "answer": 3597,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.075
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12797,
        "fields": {
            "answer": 3603,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12798,
        "fields": {
            "answer": 3605,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.15
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12799,
        "fields": {
            "answer": 3608,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.175
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12800,
        "fields": {
            "answer": 3609,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.175
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12801,
        "fields": {
            "answer": 3613,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.175
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12802,
        "fields": {
            "answer": 3615,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.175
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12803,
        "fields": {
            "answer": 3616,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.175
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12804,
        "fields": {
            "answer": 3617,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.175
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12805,
        "fields": {
            "answer": 3618,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.175
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12806,
        "fields": {
            "answer": 3620,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.175
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12807,
        "fields": {
            "answer": 3627,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.175
        }
    }
];

campaignTrail_temp.answer_score_issue_json = [];

campaignTrail_temp.answer_score_state_json = [];

campaignTrail_temp.answer_feedback_json = [
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 999,
        "fields": {
            "answer": 3509,
            "candidate": 91,
            "answer_feedback": "Nothing more is spoken; nothing more needs to be. The both of you peer into the sparkling flashes which soar above the midnight-blue sky and dream of things to come."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1003,
        "fields": {
            "answer": 3513,
            "candidate": 91,
            "answer_feedback": "When Layla finishes her speech and the crowd disperses, you tap her shoulder and ask if she'd like to go to the library. She giggles, in her cheery girlish way, and says ''why not?''"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1004,
        "fields": {
            "answer": 3514,
            "candidate": 91,
            "answer_feedback": "Your daydream carries on a bit farther, with fantastical images of you as a knight in shining armor freeing your princess dance around your head. The crowd's murmuring brings you back to Earth, and you feel that simply being her other half is just as swell."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1005,
        "fields": {
            "answer": 3515,
            "candidate": 91,
            "answer_feedback": "Without you realizing, a wide blush spreads across your face as you stare vacantly at Layla's behind. She notices and thankfully sees right through it, teasing you playfully about your daydreaming for the rest of the day."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1006,
        "fields": {
            "answer": 3516,
            "candidate": 91,
            "answer_feedback": "There is an abundance of technology down this road, from particularly ancient typewriters to black-and-white televisions to Xbox games and Blu-Rays. Layla puppy-eyes you more than once about a CRT monitor that looks like it hasn't been touched in decades, but your eyes land on an old Beatles vinyl tagged with the label of ''Vee-Jay Records.''"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1007,
        "fields": {
            "answer": 3517,
            "candidate": 91,
            "answer_feedback": "The rooms are packed with furniture and decorations all the way to the back wall. You find yourself playing with old dressers and rocking chairs while Layla silently admires signage from the Hammond, Whiting, & East Chicago Electric Railway."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1008,
        "fields": {
            "answer": 3518,
            "candidate": 91,
            "answer_feedback": "You keep Layla's hand in your own, marching down the lanes of odd trinkets and even odder modern contributions. Layla urges you to stop and smell the roses at every display, kindly admiring the locally-produced accoutrements and accessories. She picks up a beautiful silver necklace, and your heart flutters at the thought of her wearing it."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1009,
        "fields": {
            "answer": 3519,
            "candidate": 91,
            "answer_feedback": "Glass-protected displays line up in rows, filled to the brim with what you can only assume are the most premium artifacts. Toys, old books, vinyl records, and retro games go up and down the section, and you catch yourself gawking at one or two particularly rare finds. Layla, meanwhile, gravitates towards the model cars."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1010,
        "fields": {
            "answer": 3520,
            "candidate": 91,
            "answer_feedback": "Strolling through the rows of gravestones to find your family's plot, you see how the names run the gamut of peoples on Earth. There are Polish names, Italian names, Hispanic names, Irish names, Asian names... You find your own ancestry, and as you cross your heart you can feel your papa's firm hand on your shoulder, as if he stood behind you all along."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1013,
        "fields": {
            "answer": 3523,
            "candidate": 91,
            "answer_feedback": "With the setting sun and your warm coat, it's hard not to start drifting into a pleasant sleep. In the distance, the freight trains you've lived with all your life continue their chugging along; the rhythm is soothing, and its familiarity only lulls you further into rest."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1014,
        "fields": {
            "answer": 3524,
            "candidate": 91,
            "answer_feedback": "Opening your eyes again, you find that Layla has stopped bouncing around for the moment. It is a perfect opening; before she knows it, you've already swallowed her in a great hug and slipped one of the many roses she's grown into her hand. Layla is left in a fuzzy state of shock."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1015,
        "fields": {
            "answer": 3525,
            "candidate": 91,
            "answer_feedback": "A night like this can't be wasted. You pull yourself up and tap Layla's shoulder, proposing that the two of you should go down to the Marina and spend an evening on the lake. She smiles and pinches your cheek, saying that you'll go as soon as she finishes checking her plants."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1016,
        "fields": {
            "answer": 3526,
            "candidate": 91,
            "answer_feedback": "Further down the boulevard, you run into a <i>Harold's</i>. The building's a little dingy, with yellowish-beige walls bottling up the smell of frying chicken and the constant hissing sounds of oil and ventilation. But behind the aging signage and simple decor lies the best chicken you've ever had."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1017,
        "fields": {
            "answer": 3527,
            "candidate": 91,
            "answer_feedback": "You pull into the lot of a <i>Schoop's</i> and step inside, gazing at the classic Americana trappings of the place. It's a standard smashburger here, but a damn good one - and you even happened to stumble in when milkshakes are only three dollars."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1018,
        "fields": {
            "answer": 3528,
            "candidate": 91,
            "answer_feedback": "With the top down, the cool post-storm winds blow past you and massage your face as you ride along Cline Avenue with Layla in the passenger seat. The roar of your Chevy's V8 is the only thing either of you can hear. Layla leans on the door in her seat; her hand is on her chin, but you see the corner of her mouth turned upwards in a smile."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1019,
        "fields": {
            "answer": 3529,
            "candidate": 91,
            "answer_feedback": "You step outside your home and take a stroll around the neighborhood. The air is moist and cool. There aren't a lot of people outside, and you've gotten out before the traffic sounds become overbearing. Your only company to break the pure serenity of the moment is your wife's warm hand and sweet lullabies from the birds fluttering about."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1020,
        "fields": {
            "answer": 3530,
            "candidate": 91,
            "answer_feedback": "The two of you slip into the coffeeshop nestled between the aging Family Video and the antebellum trading post for traveling foreigners and local natives. It's peaceful inside, and you've stumbled onto open mic night. Layla decides to volunteer, reading amateur poetry she's written; your heart swells with pride seeing her up there."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1021,
        "fields": {
            "answer": 3531,
            "candidate": 91,
            "answer_feedback": "You look over to your passenger only to find that she's already fallen asleep. Smiling, you wipe the drool from her seatbelt and check to make sure she's comfortable and secure before taking the exit to lead you home."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1022,
        "fields": {
            "answer": 3532,
            "candidate": 91,
            "answer_feedback": "You ask, but don't receive an answer. She's looking out the window into the night sky. You tap her shoulder and ask again... later on, you find yourself laying next to her on the hood of your car, watching the moonlight paint over Duneland in a serene glow."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1036,
        "fields": {
            "answer": 3588,
            "candidate": 91,
            "answer_feedback": "You leave this poem-stub on the nightstand one evening, unsure of what Layla's reaction would be. When you wake the next morning, you find her clinging around you with all her body, the shoulder of your gown damp with tears."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1037,
        "fields": {
            "answer": 3591,
            "candidate": 91,
            "answer_feedback": "Yes, it does."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1038,
        "fields": {
            "answer": 3592,
            "candidate": 91,
            "answer_feedback": "In the wee hours, you begin writing a passion project - a series of vignettes of life throughout the Region, in days gone by and in days yet to come about."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1040,
        "fields": {
            "answer": 3596,
            "candidate": 91,
            "answer_feedback": "Even with only a fraction of the employees, the fires inside the mill are ablaze with pride. It was here that America was built, and you find yourself in agreement with the staff that she has an unpaid debt to the slumbering dragon on the lake."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1041,
        "fields": {
            "answer": 3597,
            "candidate": 91,
            "answer_feedback": "You and Layla take a tour of the farm like you had when you were young schoolkids; unsurprisingly, the cows still moo and the pigs still oink. You find yourself more enamored by the way your wife carries herself beneath the summer sun, her flower-print dress flowing in the gentle breeze as she takes notes with the pen from her wide-brimmed hat."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1042,
        "fields": {
            "answer": 3598,
            "candidate": 91,
            "answer_feedback": "Down I-65 and across the old Lincoln Highway takes you straight through the stretch of Hometowns, USA you grew up in. The downtown storefronts are different, and you mourn a few places which set the backdrop of your childhood, but it's still home all the same."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1047,
        "fields": {
            "answer": 3603,
            "candidate": 91,
            "answer_feedback": "Suffice it to say, you purchase it on the spot and package it away to give to Layla someday."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1048,
        "fields": {
            "answer": 3604,
            "candidate": 91,
            "answer_feedback": "Sunlight falls against the sides of the SteelYard as you two pace the upper walkways. You find the old playground just as you remember it, and you and Layla spend much of the game on the swingset."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1049,
        "fields": {
            "answer": 3605,
            "candidate": 91,
            "answer_feedback": "Of course it's open. You put in a twenty-dollar bill and get fistfuls of tokens in return, spending hours trading cabinets and playing <i>Street Fighter</i> together. At the end, you pull her into your arms and smell the tokens' metal on her hands."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1050,
        "fields": {
            "answer": 3606,
            "candidate": 91,
            "answer_feedback": "The two of you get up and stalk the vendors' corridor in the stadium, picking out what you want to eat. You split a giant hotdog with Layla, and then share a cup of Dippin' Dots with her. The ice cream tastes like memories of old playdates when you were a kid."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1140,
        "fields": {
            "answer": 3589,
            "candidate": 91,
            "answer_feedback": "At night, when you pace the sidewalk in front of your home in consternation, the lights go out intermittently and it makes your soul twist into itself like a cardiac ouroboros. But then she appears at the doorway, and the light returns, and the serpent lies dormant as your thoughts turn to her."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12791,
        "fields": {
            "answer": 3590,
            "candidate": 91,
            "answer_feedback": "So what if the marks of age make themselves known? Time is a petty duke compared to the empress that is Love. Mankind's oldest living stories are tales of affection and the heart; love's eternities surpass even the end of time itself."
        }
    }
];

campaignTrail_temp.candidate_image_url = "https://file.garden/aV8MTnSmtyzzckGy/tct%20images/laylaprofile.png";
campaignTrail_temp.running_mate_image_url = "https://file.garden/aV8MTnSmtyzzckGy/tct%20images/katprofile.png";
campaignTrail_temp.candidate_last_name = "The lovers";
campaignTrail_temp.running_mate_last_name = "by the lake";

// [JETS_ENDINGS_START]
campaignTrail_temp.multiple_endings = true;

const _tctEndingDefs = [
    {
        "id": 1783203063926,
        "variable": 0,
        "operator": ">",
        "amount": 0,
        "endingTitle": "\"Daisy, Daisy, give me your answer do...\"",
        "endingSubtitle": "",
        "endingText": "<p><i>Lights up.</i></p>\n<p>The curtains rise on a girl playing piano, stage right. Center stage, another girl walks paces down a humble set. The sign says \"Main Street,\" and the building facades are storefronts and restaurants. A cardboard sun hangs low over the stage.</p>\n<p>The curtain falls again and rises, this time on a broad highway. A '57 Chevrolet roars down the road, past the noon sun.</p>\n<p>Then, the next scene. This time, the girl walks through a diorama of the Gary Works. Smoke machines spark to life and cover the rafters with false smog, blocking the sun.</p>\n<p>The smog clears as the curtain falls, and the final scene is at night. The girl walks along the Dunes as the girl at the piano changes key. The night is clear, the sand is soft, and the waters are calm. It is picture-book beautiful. Too beautiful.</p>\n<p>The curtain falls once more, and the audience is left to applaud, if they so wish.</p>",
        "endingImage": "",
        "endingHideImage": true,
        "endingSlidesJson": "[\n  {\n    \"variable\": 0,\n    \"operator\": \">\",\n    \"amount\": 0,\n    \"outcomeCondition\": \"win\",\n    \"title\": \"\\\"Daisy, Daisy, give me your answer do...\\\"\",\n    \"subtitle\": \"\",\n    \"content\": \"<p><i>Lights up.</i></p>\\n<p>The curtains rise on a girl playing piano, stage right. Center stage, another girl walks paces down a humble set. The sign says \\\"Main Street,\\\" and the building facades are storefronts and restaurants. A cardboard sun hangs low over the stage.</p>\\n<p>The curtain falls again and rises, this time on a broad highway. A '57 Chevrolet roars down the road, past the noon sun.</p>\\n<p>Then, the next scene. This time, the girl walks through a diorama of the Gary Works. Smoke machines spark to life and cover the rafters with false smog, blocking the sun.</p>\\n<p>The smog clears as the curtain falls, and the final scene is at night. The girl walks along the Dunes as the girl at the piano changes key. The night is clear, the sand is soft, and the waters are calm. It is picture-book beautiful. Too beautiful.</p>\\n<p>The curtain falls once more, and the audience is left to applaud, if they so wish.</p>\",\n    \"image\": false,\n    \"slideGroup\": \"main\",\n    \"variableConditions\": [],\n    \"variableConditionOperator\": \"AND\",\n    \"answerConditionType\": \"ignore\",\n    \"answerConditionAnswer\": \"\",\n    \"answerConditionAnswers\": \"\",\n    \"audio\": {\n      \"title\": \"INTO THE UNKNOWN.\",\n      \"artist\": \"The Blasting Company & Jack Jones\",\n      \"album\": \"Over the Garden Wall\",\n      \"cover\": \"\",\n      \"url\": \"https://file.garden/aV8MTnSmtyzzckGy/moonlight%20soundtrack/Over%20The%20Garden%20Wall%20Official%20Soundtrack%20%EF%BD%9C%20Into%20the%20Unknown%20%E2%80%93%20The%20Blasting%20Company%20%EF%BD%9C%20WaterTower%20-%20WaterTower%20Music.mp3\"\n    }\n  },\n  {\n    \"variable\": 0,\n    \"operator\": \">\",\n    \"amount\": 0,\n    \"outcomeCondition\": \"loss\",\n    \"title\": \"\\\"Daisy, Daisy, give me your answer do...\\\"\",\n    \"subtitle\": \"\",\n    \"content\": \"<p><i>Lights up.</i></p>\\n<p>The curtains rise on a girl playing piano, stage right. Center stage, another girl walks paces down a humble set. The sign says \\\"Main Street,\\\" and the building facades are storefronts and restaurants. A cardboard sun hangs low over the stage.</p>\\n<p>The curtain falls again and rises, this time on a broad highway. A '57 Chevrolet roars down the road, past the noon sun.</p>\\n<p>Then, the next scene. This time, the girl walks through a diorama of the Gary Works. Smoke machines spark to life and cover the rafters with false smog, blocking the sun.</p>\\n<p>The smog clears as the curtain falls, and the final scene is at night. The girl walks along the Dunes as the girl at the piano changes key. The night is clear, the sand is soft, and the waters are calm. It is picture-book beautiful. Too beautiful.</p>\\n<p>The curtain falls once more, and the audience is left to applaud, if they so wish.</p>\",\n    \"image\": false,\n    \"slideGroup\": \"main\",\n    \"variableConditions\": [],\n    \"variableConditionOperator\": \"AND\",\n    \"answerConditionType\": \"ignore\",\n    \"answerConditionAnswer\": \"\",\n    \"answerConditionAnswers\": \"\",\n    \"audio\": {\n      \"title\": \"INTO THE UNKNOWN.\",\n      \"artist\": \"The Blasting Company & Jack Jones\",\n      \"album\": \"Over the Garden Wall\",\n      \"cover\": \"\",\n      \"url\": \"https://file.garden/aV8MTnSmtyzzckGy/moonlight%20soundtrack/Over%20The%20Garden%20Wall%20Official%20Soundtrack%20%EF%BD%9C%20Into%20the%20Unknown%20%E2%80%93%20The%20Blasting%20Company%20%EF%BD%9C%20WaterTower%20-%20WaterTower%20Music.mp3\"\n    }\n  },\n  {\n    \"variable\": 0,\n    \"operator\": \">\",\n    \"amount\": 0,\n    \"outcomeCondition\": \"tie\",\n    \"title\": \"\\\"Daisy, Daisy, give me your answer do...\\\"\",\n    \"subtitle\": \"\",\n    \"content\": \"<p><i>Lights up.</i></p>\\n<p>The curtains rise on a girl playing piano, stage right. Center stage, another girl walks paces down a humble set. The sign says \\\"Main Street,\\\" and the building facades are storefronts and restaurants. A cardboard sun hangs low over the stage.</p>\\n<p>The curtain falls again and rises, this time on a broad highway. A '57 Chevrolet roars down the road, past the noon sun.</p>\\n<p>Then, the next scene. This time, the girl walks through a diorama of the Gary Works. Smoke machines spark to life and cover the rafters with false smog, blocking the sun.</p>\\n<p>The smog clears as the curtain falls, and the final scene is at night. The girl walks along the Dunes as the girl at the piano changes key. The night is clear, the sand is soft, and the waters are calm. It is picture-book beautiful. Too beautiful.</p>\\n<p>The curtain falls once more, and the audience is left to applaud, if they so wish.</p>\",\n    \"image\": \"\",\n    \"slideGroup\": \"main\",\n    \"variableConditions\": [],\n    \"variableConditionOperator\": \"AND\",\n    \"answerConditionType\": \"ignore\",\n    \"answerConditionAnswer\": \"\",\n    \"answerConditionAnswers\": \"\",\n    \"audio\": {\n      \"title\": \"INTO THE UNKNOWN.\",\n      \"artist\": \"The Blasting Company & Jack Jones\",\n      \"album\": \"Over the Garden Wall\",\n      \"cover\": \"\",\n      \"url\": \"https://file.garden/aV8MTnSmtyzzckGy/moonlight%20soundtrack/Over%20The%20Garden%20Wall%20Official%20Soundtrack%20%EF%BD%9C%20Into%20the%20Unknown%20%E2%80%93%20The%20Blasting%20Company%20%EF%BD%9C%20WaterTower%20-%20WaterTower%20Music.mp3\"\n    }\n  }\n]",
        "audioTitle": "INTO THE UNKNOWN.",
        "audioArtist": "The Blasting Company & Jack Jones",
        "audioAlbum": "Over the Garden Wall",
        "audioCover": "",
        "audioUrl": "https://file.garden/aV8MTnSmtyzzckGy/moonlight%20soundtrack/Over%20The%20Garden%20Wall%20Official%20Soundtrack%20%EF%BD%9C%20Into%20the%20Unknown%20%E2%80%93%20The%20Blasting%20Company%20%EF%BD%9C%20WaterTower%20-%20WaterTower%20Music.mp3",
        "endingAccentColor": "#914803",
        "endingBackgroundColor": "#ce92aa",
        "endingTextColor": "#000000",
        "variableConditions": [],
        "variableConditionOperator": "AND",
        "outcomeCondition": "win",
        "answerConditionType": "ignore",
        "answerConditionAnswer": "",
        "answerConditionAnswers": ""
    }
];

const _tctOpMap = {
    ">": (a, b) => a > b,
    ">=": (a, b) => a >= b,
    "==": (a, b) => a == b,
    "<=": (a, b) => a <= b,
    "<": (a, b) => a < b,
    "!=": (a, b) => a != b
};

const _tctGetEndingImageEl = () => {
    const imageContainer = document.querySelector(".person_image");
    if (!imageContainer) return null;
    if (imageContainer.tagName && imageContainer.tagName.toLowerCase() === "img") {
        return imageContainer;
    }
    return imageContainer.querySelector("img");
};

const _tctReadVariable = (name) => {
    if (!name || typeof name !== "string") return undefined;
    if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name)) return undefined;
    try {
        return eval("(typeof " + name + " !== 'undefined') ? " + name + " : undefined;");
    } catch (_err) {
        return undefined;
    }
};

const _tctParseConditionValue = (value) => {
    if (value == null || value === "") return "";
    const n = Number(value);
    if (!Number.isNaN(n)) return n;
    return value;
};

const _tctCheckOutcomeCondition = (entry, finalOutcome) => {
    const cond = String(entry?.outcomeCondition || "ignore");
    if (cond === "ignore") return true;
    return cond === String(finalOutcome || "");
};

const _tctMatchesPrimaryCondition = (entry, quickstats, finalOutcome) => {
    if (!_tctCheckOutcomeCondition(entry, finalOutcome)) return false;

    const cond = String(entry?.outcomeCondition || "ignore");
    if (cond !== "ignore") {
        // explicit outcome match bypasses stat threshold checks
        return true;
    }

    const opFn = _tctOpMap[entry?.operator] || _tctOpMap[">"];
    const left = quickstats?.[Number(entry?.variable) || 0];
    const right = Number(entry?.amount) || 0;
    return opFn(left, right);
};

const _tctCheckExtraConditions = (entry, playerAnswers) => {
    // check variable conditions
    if (Array.isArray(entry.variableConditions) && entry.variableConditions.length > 0) {
        const operator = entry.variableConditionOperator || "AND";
        const results = entry.variableConditions.map((cond) => {
            const left = _tctReadVariable(cond.variable);
            const right = _tctParseConditionValue(cond.value);
            const opFn = _tctOpMap[cond.comparator] || _tctOpMap["=="];
            return opFn(left, right);
        });

        if (operator === "AND") {
            if (!results.every((r) => r)) return false;
        } else if (operator === "OR") {
            if (!results.some((r) => r)) return false;
        }
    }

    const answerType = entry.answerConditionType || "ignore";
    if (answerType !== "ignore") {
        const rawAnswers = String(entry.answerConditionAnswers || entry.answerConditionAnswer || "").trim();
        const answerIds = rawAnswers
            .split(/[\s,]+/)
            .filter((v) => v.length > 0)
            .map((v) => Number(v))
            .filter((v) => Number.isFinite(v));

        if (answerIds.length === 0) return false;

        const hasAny = Array.isArray(playerAnswers) && answerIds.some((id) => playerAnswers.includes(id));
        if (answerType === "has" && !hasAny) return false;
        if (answerType === "not_has" && hasAny) return false;
    }

    return true;
};

const playEndingSong = (title, artist, album, cover, url) => {
    if (!url) return;
    const PlaylistCtor = (typeof window !== "undefined" && window.Playlist)
        || (typeof Playlist !== "undefined" ? Playlist : null);
    const SongCtor = (typeof window !== "undefined" && window.Song)
        || (typeof Song !== "undefined" ? Song : null);
    const changePlaylistFn = (typeof window !== "undefined" && window.changePlaylist)
        || (typeof changePlaylist === "function" ? changePlaylist : null);

    if (PlaylistCtor && SongCtor && typeof changePlaylistFn === "function") {
        try {
            const playlist = new PlaylistCtor();
            const song = new SongCtor(title || "", artist || "", album || "", cover || "", url);
            if (typeof playlist.addSong === "function") {
                playlist.addSong(song);
                changePlaylistFn(playlist);
                return;
            }
        } catch (err) {
            console.warn("Failed to route ending song:", err);
        }
    }

    // fallback for custom players: drive the shared audio element directly
    const audioEl = document.getElementById("audio") || document.querySelector("audio#audio, audio");
    if (!audioEl) return;

    if (audioEl.src !== url) {
        audioEl.src = url;
    }

    const player = document.getElementById("player");
    if (player) {
        const titleEl = player.querySelector("#title");
        const artistEl = player.querySelector("#artist");
        const albumEl = player.querySelector("#album");
        const coverEl = player.querySelector("#cover");
        if (titleEl) titleEl.textContent = title || "";
        if (artistEl) artistEl.textContent = artist || "";
        if (albumEl) albumEl.textContent = album || "";
        if (coverEl && cover) coverEl.src = cover;
    }

    const playPromise = audioEl.play?.();
    if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
    }
};

const styleEndingDescription = () => {
    const desc = document.querySelector("#final_results_description");
    if (!desc) return;

    const e = campaignTrail_temp;
    const theme = e._endingTheme || {};
    const bg = theme.backgroundColor || "#ffffff";
    const fg = theme.textColor || "#000000";
    const border = theme.accentColor || "#11299e";

    Object.assign(desc.style, {
        textAlign: "left",
        width: "72%",
        maxHeight: "20em",
        minHeight: "8em",
        height: "auto",
        display: "block",
        margin: "0 auto",
        overflowY: "auto",
        overflowX: "hidden",
        whiteSpace: "normal",
        overflowWrap: "anywhere",
        wordBreak: "break-word",
        transform: "translateZ(0)",
        backgroundColor: bg,
        color: fg,
        border: "2px solid " + border,
        borderRadius: "4px",
        padding: "10px"
    });

    desc.dataset.endingStyled = "1";
};

const applyEndingImage = (slide) => {
    const imageEl = _tctGetEndingImageEl();
    if (!imageEl || !slide) return;

    if (slide.image === false) {
        imageEl.style.display = "none";
        imageEl.removeAttribute("src");
        return;
    }

    if (!imageEl.dataset.endingStyled) {
        const e = campaignTrail_temp;
        const theme = e._endingTheme || {};
        const border = theme.accentColor || "#11299e";
        Object.assign(imageEl.style, {
            border: "3px solid " + border,
            display: "block",
            width: "210px",
            height: "250px",
            objectFit: "cover"
        });
        imageEl.dataset.endingStyled = "1";
    } else {
        imageEl.style.display = "block";
        const e = campaignTrail_temp;
        const theme = e._endingTheme || {};
        imageEl.style.border = "3px solid " + (theme.accentColor || "#11299e");
    }

    if (slide.image && imageEl.getAttribute("src") !== slide.image) {
        imageEl.src = slide.image;
    }
};

const applyEndingButtons = () => {
    const e = campaignTrail_temp;
    const theme = e._endingTheme || {};
    const imageEl = _tctGetEndingImageEl();
    if (!imageEl || !imageEl.parentNode) return;

    let btnContainer = document.getElementById("ending_slide_buttons");
    if (!btnContainer) {
        btnContainer = document.createElement("div");
        btnContainer.id = "ending_slide_buttons";
        Object.assign(btnContainer.style, {
            display: "flex",
            gap: "20px",
            left: "13px",
            top: "280px",
            position: "absolute"
        });
        imageEl.parentNode.insertBefore(btnContainer, imageEl.nextSibling);
    }

    let buttonsHtml = "";
    if (e.page > 0) {
        buttonsHtml += '<button onclick="endingConstructor(-1)">Back</button>';
    }
    if (e.page < e.endingSlides.length - 1) {
        buttonsHtml += '<button onclick="endingConstructor(1)">Next</button>';
    }

    if (btnContainer.innerHTML !== buttonsHtml) {
        btnContainer.innerHTML = buttonsHtml;
    }

    const buttonBg = theme.accentColor || "#11299e";
    const buttonText = "#ffffff";
    btnContainer.querySelectorAll("button").forEach((btn) => {
        Object.assign(btn.style, {
            backgroundColor: buttonBg,
            border: "1px solid " + buttonBg,
            color: buttonText,
            padding: "4px 10px",
            cursor: "pointer"
        });
    });
};

const syncEndingSlideDom = () => {
    const e = campaignTrail_temp;
    const slide = e.endingSlides?.[e.page];
    if (!slide) return;

    styleEndingDescription();
    applyEndingImage(slide);
    applyEndingButtons();

    if (slide.audio && slide.audio.url) {
        const key = [slide.audio.title || "", slide.audio.artist || "", slide.audio.album || "", slide.audio.url || ""].join("|");
        const globalKey = (typeof window !== "undefined" && window.__tctLastEndingAudioKey) || "";

        const currentAudioEl = document.getElementById("audio") || document.querySelector("audio#audio, audio");
        const currentSrc = currentAudioEl ? (currentAudioEl.currentSrc || currentAudioEl.src || "") : "";
        const sameSrcLoaded = !!currentSrc && currentSrc.includes(slide.audio.url);

        if (e._endingAudioPlayedKey !== key && globalKey !== key && !sameSrcLoaded) {
            playEndingSong(slide.audio.title, slide.audio.artist, slide.audio.album, slide.audio.cover, slide.audio.url);
        }

        e._endingAudioPlayedKey = key;
        if (typeof window !== "undefined") {
            window.__tctLastEndingAudioKey = key;
        }
    }
};

const syncEndingSlideDomDeferred = () => {
    requestAnimationFrame(() => {
        syncEndingSlideDom();
    });
};

const _tctBuildSlides = (entry, quickstats, finalOutcome) => {
    if (entry && entry.endingSlidesJson) {
        try {
            const parsed = JSON.parse(entry.endingSlidesJson);
            if (Array.isArray(parsed) && parsed.length > 0) {
                const normalizeSlide = (slide) => ({
                    variable: Number(slide?.variable ?? 0),
                    operator: slide?.operator || ">",
                    amount: Number(slide?.amount ?? 0),
                    outcomeCondition: slide?.outcomeCondition || "ignore",
                    title: slide?.title || "",
                    subtitle: slide?.subtitle || "",
                    content: slide?.content || "",
                    image: slide?.image,
                    audio: slide?.audio && slide.audio.url ? {
                        title: slide.audio.title || "",
                        artist: slide.audio.artist || "",
                        album: slide.audio.album || "",
                        cover: slide.audio.cover || "",
                        url: slide.audio.url || ""
                    } : undefined
                });

                const hasGroups = parsed.some((slide) => slide && slide.slideGroup);
                if (!hasGroups) {
                    return parsed.map((slide) => normalizeSlide(slide));
                }

                const groupMap = new Map();
                const groupOrder = [];
                for (const slide of parsed) {
                    const groupKey = slide?.slideGroup || "main";
                    if (!groupMap.has(groupKey)) {
                        groupMap.set(groupKey, []);
                        groupOrder.push(groupKey);
                    }
                    groupMap.get(groupKey).push(slide);
                }

                const playerAnswers = campaignTrail_temp?.player_answers || [];
                const selectedSlides = [];

                for (const groupKey of groupOrder) {
                    const groupSlides = groupMap.get(groupKey) || [];
                    let selected = groupSlides.find((slide) => {
                        return _tctMatchesPrimaryCondition(slide, quickstats, finalOutcome)
                            && _tctCheckExtraConditions(slide, playerAnswers);
                    });
                    if (!selected) selected = groupSlides[0];
                    if (selected) selectedSlides.push(normalizeSlide(selected));
                }

                return selectedSlides;
            }
        } catch (err) {
            console.warn("Invalid endingSlidesJson for ending", entry?.id, err);
        }
    }

    const fallbackSlide = {
        title: entry?.endingTitle || "",
        subtitle: entry?.endingSubtitle || "",
        content: entry?.endingText || "",
        image: entry?.endingHideImage ? false : (entry?.endingImage || undefined)
    };

    if (entry?.audioUrl) {
        fallbackSlide.audio = {
            title: entry.audioTitle || "",
            artist: entry.audioArtist || "",
            album: entry.audioAlbum,
            cover: entry.audioCover || "",
            url: entry.audioUrl || ""
        };
    }

    return [fallbackSlide];
};

const _tctConstructSlide = (direction = 1) => {
    const e = campaignTrail_temp;
    if (!Array.isArray(e.endingSlides) || e.endingSlides.length === 0) return "";

    e.page += direction;
    if (e.page < 0) e.page = 0;
    if (e.page >= e.endingSlides.length) e.page = e.endingSlides.length - 1;

    const currentSlide = e.endingSlides[e.page];
    if (!currentSlide) return "";

    let html = "";
    if (currentSlide.title) html += "<h3>" + currentSlide.title + "</h3>";
    if (currentSlide.subtitle) html += "<h4>" + currentSlide.subtitle + "</h4>";
    html += (currentSlide.content || "") + "<br><br>";
    return html;
};

endingConstructor = (direction = 1) => {
    const desc = document.querySelector("#final_results_description");
    if (!desc) return;
    desc.innerHTML = _tctConstructSlide(direction);
    syncEndingSlideDomDeferred();
};

endingPicker = (out, totv, aa, quickstats) => {
    const playerAnswers = campaignTrail_temp?.player_answers || [];
    for (const entry of _tctEndingDefs) {
        let isMatch = false;

        try {
            const parsed = entry.endingSlidesJson ? JSON.parse(entry.endingSlidesJson) : [];
            if (Array.isArray(parsed) && parsed.length > 0) {
                const groupMap = new Map();
                for (const slide of parsed) {
                    const groupKey = slide?.slideGroup || "main";
                    if (!groupMap.has(groupKey)) {
                        groupMap.set(groupKey, []);
                    }
                    groupMap.get(groupKey).push(slide);
                }
                
                const mainSlides = groupMap.get("main") || parsed;
                let validMain = mainSlides.find((slide) => {
                    return _tctMatchesPrimaryCondition(slide, quickstats, out)
                        && _tctCheckExtraConditions(slide, playerAnswers);
                });
                
                if (validMain) isMatch = true;
            } else {
                // legacy format without json slides
                if (_tctMatchesPrimaryCondition(entry, quickstats, out) && _tctCheckExtraConditions(entry, playerAnswers)) {
                    isMatch = true;
                }
            }
        } catch(e) {
            // legacy format without json slides
            if (_tctMatchesPrimaryCondition(entry, quickstats, out) && _tctCheckExtraConditions(entry, playerAnswers)) {
                isMatch = true;
            }
        }

        if (isMatch) {
            const e = campaignTrail_temp;
            e.multiple_endings = true;
            e.page = -1;
            e._endingTheme = {
                accentColor: entry?.endingAccentColor || "#11299e",
                backgroundColor: entry?.endingBackgroundColor || "#ffffff",
                textColor: entry?.endingTextColor || "#000000"
            };
            e.endingSlides = _tctBuildSlides(entry, quickstats, out);
            e._endingAudioPlayedKey = (typeof window !== "undefined" && window.__tctLastEndingAudioKey) || "";

            const html = _tctConstructSlide(1);
            syncEndingSlideDomDeferred();
            return html;
        }
    }

    return "";
};

// [JETS_ENDINGS_END]

campaignTrail_temp.jet_data = [{
    "nicknames": {
        "91": "Layla Feinstein",
        "92": "Homer Stockard"
    },
    "banner_data": {
        "canName": "The lovers",
        "canImage": "https://file.garden/aV8MTnSmtyzzckGy/tct%20images/laylaprofile.png",
        "runName": "by the lake",
        "runImage": "https://file.garden/aV8MTnSmtyzzckGy/tct%20images/katprofile.png"
    },
    "mapping_data": {
        "dx": -465,
        "dy": -25,
        "electionPk": "10",
        "mapSvg": "",
        "x": 770.8333333333333,
        "y": 770.8333333333333
    },
    "cyoa_enabled": false,
    "cyoa_data": {},
    "cyoa_variables": {},
    "cyoa_variable_effects": {},
    "cyoa_question_swaps": {},
    "cyoa_answer_swaps": {},
    "endings_enabled": true,
    "ending_data": {
        "1783203063926": {
            "id": 1783203063926,
            "variable": 0,
            "operator": ">",
            "amount": 0,
            "endingTitle": "\"Daisy, Daisy, give me your answer do...\"",
            "endingSubtitle": "",
            "endingHideImage": true,
            "endingImage": "",
            "endingText": "<p><i>Lights up.</i></p>\n<p>The curtains rise on a girl playing piano, stage right. Center stage, another girl walks paces down a humble set. The sign says \"Main Street,\" and the building facades are storefronts and restaurants. A cardboard sun hangs low over the stage.</p>\n<p>The curtain falls again and rises, this time on a broad highway. A '57 Chevrolet roars down the road, past the noon sun.</p>\n<p>Then, the next scene. This time, the girl walks through a diorama of the Gary Works. Smoke machines spark to life and cover the rafters with false smog, blocking the sun.</p>\n<p>The smog clears as the curtain falls, and the final scene is at night. The girl walks along the Dunes as the girl at the piano changes key. The night is clear, the sand is soft, and the waters are calm. It is picture-book beautiful. Too beautiful.</p>\n<p>The curtain falls once more, and the audience is left to applaud, if they so wish.</p>",
            "endingSlidesJson": "[\n  {\n    \"variable\": 0,\n    \"operator\": \">\",\n    \"amount\": 0,\n    \"outcomeCondition\": \"win\",\n    \"title\": \"\\\"Daisy, Daisy, give me your answer do...\\\"\",\n    \"subtitle\": \"\",\n    \"content\": \"<p><i>Lights up.</i></p>\\n<p>The curtains rise on a girl playing piano, stage right. Center stage, another girl walks paces down a humble set. The sign says \\\"Main Street,\\\" and the building facades are storefronts and restaurants. A cardboard sun hangs low over the stage.</p>\\n<p>The curtain falls again and rises, this time on a broad highway. A '57 Chevrolet roars down the road, past the noon sun.</p>\\n<p>Then, the next scene. This time, the girl walks through a diorama of the Gary Works. Smoke machines spark to life and cover the rafters with false smog, blocking the sun.</p>\\n<p>The smog clears as the curtain falls, and the final scene is at night. The girl walks along the Dunes as the girl at the piano changes key. The night is clear, the sand is soft, and the waters are calm. It is picture-book beautiful. Too beautiful.</p>\\n<p>The curtain falls once more, and the audience is left to applaud, if they so wish.</p>\",\n    \"image\": false,\n    \"slideGroup\": \"main\",\n    \"variableConditions\": [],\n    \"variableConditionOperator\": \"AND\",\n    \"answerConditionType\": \"ignore\",\n    \"answerConditionAnswer\": \"\",\n    \"answerConditionAnswers\": \"\",\n    \"audio\": {\n      \"title\": \"INTO THE UNKNOWN.\",\n      \"artist\": \"The Blasting Company & Jack Jones\",\n      \"album\": \"Over the Garden Wall\",\n      \"cover\": \"\",\n      \"url\": \"https://file.garden/aV8MTnSmtyzzckGy/moonlight%20soundtrack/Over%20The%20Garden%20Wall%20Official%20Soundtrack%20%EF%BD%9C%20Into%20the%20Unknown%20%E2%80%93%20The%20Blasting%20Company%20%EF%BD%9C%20WaterTower%20-%20WaterTower%20Music.mp3\"\n    }\n  },\n  {\n    \"variable\": 0,\n    \"operator\": \">\",\n    \"amount\": 0,\n    \"outcomeCondition\": \"loss\",\n    \"title\": \"\\\"Daisy, Daisy, give me your answer do...\\\"\",\n    \"subtitle\": \"\",\n    \"content\": \"<p><i>Lights up.</i></p>\\n<p>The curtains rise on a girl playing piano, stage right. Center stage, another girl walks paces down a humble set. The sign says \\\"Main Street,\\\" and the building facades are storefronts and restaurants. A cardboard sun hangs low over the stage.</p>\\n<p>The curtain falls again and rises, this time on a broad highway. A '57 Chevrolet roars down the road, past the noon sun.</p>\\n<p>Then, the next scene. This time, the girl walks through a diorama of the Gary Works. Smoke machines spark to life and cover the rafters with false smog, blocking the sun.</p>\\n<p>The smog clears as the curtain falls, and the final scene is at night. The girl walks along the Dunes as the girl at the piano changes key. The night is clear, the sand is soft, and the waters are calm. It is picture-book beautiful. Too beautiful.</p>\\n<p>The curtain falls once more, and the audience is left to applaud, if they so wish.</p>\",\n    \"image\": false,\n    \"slideGroup\": \"main\",\n    \"variableConditions\": [],\n    \"variableConditionOperator\": \"AND\",\n    \"answerConditionType\": \"ignore\",\n    \"answerConditionAnswer\": \"\",\n    \"answerConditionAnswers\": \"\",\n    \"audio\": {\n      \"title\": \"INTO THE UNKNOWN.\",\n      \"artist\": \"The Blasting Company & Jack Jones\",\n      \"album\": \"Over the Garden Wall\",\n      \"cover\": \"\",\n      \"url\": \"https://file.garden/aV8MTnSmtyzzckGy/moonlight%20soundtrack/Over%20The%20Garden%20Wall%20Official%20Soundtrack%20%EF%BD%9C%20Into%20the%20Unknown%20%E2%80%93%20The%20Blasting%20Company%20%EF%BD%9C%20WaterTower%20-%20WaterTower%20Music.mp3\"\n    }\n  },\n  {\n    \"variable\": 0,\n    \"operator\": \">\",\n    \"amount\": 0,\n    \"outcomeCondition\": \"tie\",\n    \"title\": \"\\\"Daisy, Daisy, give me your answer do...\\\"\",\n    \"subtitle\": \"\",\n    \"content\": \"<p><i>Lights up.</i></p>\\n<p>The curtains rise on a girl playing piano, stage right. Center stage, another girl walks paces down a humble set. The sign says \\\"Main Street,\\\" and the building facades are storefronts and restaurants. A cardboard sun hangs low over the stage.</p>\\n<p>The curtain falls again and rises, this time on a broad highway. A '57 Chevrolet roars down the road, past the noon sun.</p>\\n<p>Then, the next scene. This time, the girl walks through a diorama of the Gary Works. Smoke machines spark to life and cover the rafters with false smog, blocking the sun.</p>\\n<p>The smog clears as the curtain falls, and the final scene is at night. The girl walks along the Dunes as the girl at the piano changes key. The night is clear, the sand is soft, and the waters are calm. It is picture-book beautiful. Too beautiful.</p>\\n<p>The curtain falls once more, and the audience is left to applaud, if they so wish.</p>\",\n    \"image\": \"\",\n    \"slideGroup\": \"main\",\n    \"variableConditions\": [],\n    \"variableConditionOperator\": \"AND\",\n    \"answerConditionType\": \"ignore\",\n    \"answerConditionAnswer\": \"\",\n    \"answerConditionAnswers\": \"\",\n    \"audio\": {\n      \"title\": \"INTO THE UNKNOWN.\",\n      \"artist\": \"The Blasting Company & Jack Jones\",\n      \"album\": \"Over the Garden Wall\",\n      \"cover\": \"\",\n      \"url\": \"https://file.garden/aV8MTnSmtyzzckGy/moonlight%20soundtrack/Over%20The%20Garden%20Wall%20Official%20Soundtrack%20%EF%BD%9C%20Into%20the%20Unknown%20%E2%80%93%20The%20Blasting%20Company%20%EF%BD%9C%20WaterTower%20-%20WaterTower%20Music.mp3\"\n    }\n  }\n]",
            "audioTitle": "\"INTO THE UNKNOWN.\"",
            "audioArtist": "\"The Blasting Company & Jack Jones\"",
            "audioAlbum": "\Over the Garden Wall\"",
            "audioCover": "",
            "audioUrl": "https://file.garden/aV8MTnSmtyzzckGy/moonlight%20soundtrack/Over%20The%20Garden%20Wall%20Official%20Soundtrack%20%EF%BD%9C%20Into%20the%20Unknown%20%E2%80%93%20The%20Blasting%20Company%20%EF%BD%9C%20WaterTower%20-%20WaterTower%20Music.mp3",
            "endingAccentColor": "#914803",
            "endingBackgroundColor": "#ce92aa",
            "endingTextColor": "#000000",
            "variableConditions": [],
            "variableConditionOperator": "AND",
            "outcomeCondition": "win",
            "answerConditionType": "ignore",
            "answerConditionAnswer": "",
            "answerConditionAnswers": "",
            "variableConditionEnabled": false,
            "variableConditionName": "",
            "variableConditionValue": ""
        }
    },
    "banner_enabled": true,
    "mapping_enabled": true,
    "player_candidate": 91,
    "bunnyhop_enabled": false,
    "bunnyhop_pools": []
}
]
