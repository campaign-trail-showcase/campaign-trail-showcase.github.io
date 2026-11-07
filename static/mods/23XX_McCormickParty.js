
// Generated mapping code
(function(e,t,n,r,i){function s(e,t,n,r){r=r instanceof Array?r:[];var i={};for(var s=0;s<r.length;s++){i[r[s]]=true}var o=function(e){this.element=e};o.prototype=n;e.fn[t]=function(){var n=arguments;var r=this;this.each(function(){var s=e(this);var u=s.data("plugin-"+t);if(!u){u=new o(s);s.data("plugin-"+t,u);if(u._init){u._init.apply(u,n)}}else if(typeof n[0]=="string"&&n[0].charAt(0)!="_"&&typeof u[n[0]]=="function"){var a=Array.prototype.slice.call(n,1);var f=u[n[0]].apply(u,a);if(n[0]in i){r=f}}});return r}}var o=370,u=215,a=10;var f={stateStyles:{fill:"#333",stroke:"#666","stroke-width":1,"stroke-linejoin":"round",scale:[1,1]},stateHoverStyles:{fill:"#33c",stroke:"#000",scale:[1.1,1.1]},stateSpecificStyles:{},stateSpecificHoverStyles:{},click:null,mouseover:null,mouseout:null,clickState:{},mouseoverState:{},mouseoutState:{},showLabels:true,labelWidth:20,labelHeight:15,labelGap:6,labelRadius:3,labelBackingStyles:{fill:"#333",stroke:"#666","stroke-width":1,"stroke-linejoin":"round",scale:[1,1]},labelBackingHoverStyles:{fill:"#33c",stroke:"#000"},stateSpecificLabelBackingStyles:{},stateSpecificLabelBackingHoverStyles:{},labelTextStyles:{fill:"#fff",stroke:"none","font-weight":300,"stroke-width":0,"font-size":"10px"},labelTextHoverStyles:{},stateSpecificLabelTextStyles:{},stateSpecificLabelTextHoverStyles:{}};var l={_init:function(t){this.options={};e.extend(this.options,f,t);var n=this.element.width();var i=this.element.height();var s=this.element.width()/o;var l=this.element.height()/u;this.scale=Math.min(s,l);this.labelAreaWidth=Math.ceil(a/this.scale);var c=o+Math.max(0,this.labelAreaWidth-a);this.paper=r(this.element.get(0),c,u);this.paper.setSize(n,i);this.paper.setViewBox(-285, 60, 880.9523809523811, 880.9523809523811, false);this.stateHitAreas={};this.stateShapes={};this.topShape=null;this._initCreateStates();this.labelShapes={};this.labelTexts={};this.labelHitAreas={};if(this.options.showLabels){this._initCreateLabels()}},_initCreateStates:function(){var t=this.options.stateStyles;var n=this.paper;var r={"Docks":"M304.614,397.851L307.87,411.645L307.626,420.936L304.403,420.922L302.336,420.918L298.895,420.909L298.945,424.632L295.649,424.645L291.383,423.852L287.419,420.112L285.463,418.112L288.867,416.812L286.625,414.319L281.717,411.112L280.841,411.085L278.984,411.05L276.874,411.011L272.949,410.936L273.035,416.967L273.061,418.927L272.933,420.777L272.933,422.654L273.068,426.724L274.092,438.441L273.611,441.388L273.631,444.837L273.654,448.229L273.95,450.449L257.295,449.881L257.463,442.595L249.347,442.516L241.574,442.432L241.532,434.384L237.673,434.332L233.666,434.221L233.703,442.34L233.729,450.55L233.745,456.254L233.765,461.941L229.814,461.875L229.834,472.045L229.897,482.241L230.065,489.472L230.038,490.19L229.232,490.186L226.799,490.155L225.989,490.146L225.156,489.966L223.217,489.538L222.716,489.173L222.295,488.865L222.127,488.428L219.447,487.085L217.406,484.61L216.751,481.915L216.418,481.906L216.05,489.842L211.51,496.717L209.992,497.849L210.459,528.829L209.363,528.38L201.294,532.458L192.678,527.988L189.369,518.111L183.466,512.536L179.68,509.986L178.775,505.459L178.976,496.831L163.114,496.647L162.452,496.638L156.118,496.554L156.101,488.578L151.568,488.539L151.558,480.541L151.545,469.767L146.86,469.864L142.307,469.957L137.773,470.049L133.214,470.142L128.644,470.239L124.167,470.3L119.574,470.34L115.113,470.38L115.116,472.199L113.055,472.243L111.162,472.287L110.362,472.309L107.959,472.362L107.156,472.375L103.403,472.459L102.579,472.432L99.264,472.547L95.323,472.635L91.412,472.718L87.409,472.807L83.343,472.89L79.333,472.978L75.349,473.062L71.195,473.15L67.106,473.238L62.888,473.331L58.76,473.419L54.763,473.502L50.588,473.265L46.18,473.229L46.233,465.055L42.368,465.218L38.802,465.191L38.855,457.602L38.878,453.982L38.908,449.273L34.937,449.207L30.802,449.123L26.881,449.044L22.934,448.758L18.601,446.824L14.17,446.731L9.729,446.687L5.366,446.643L1.165,445.013L1.152,434.085L1.429,393.693L2.097,369.549L2.265,324.08L2.212,318.377L1.896,292.579L1.919,291.274L2.222,266.386L1.942,253.343L2.035,207.265L2.538,185.821L2.854,153.926L3.193,137.857L3.17,136.998L3.256,131.834L4.003,116.554L4.168,113.013L4.053,94.309L3.934,74.798L15.47,66.753L65.884,122.71L77.894,147.827L102.547,166.382L125.464,183.101L129.945,184.212L153.382,190.014L207.111,214.561L233.146,228.35L281.957,197.315L312.11,180.059L333.813,187.792L340.341,182.356L353.896,194.943L356.569,195.895L413.008,249.464L412.399,257.138L353.576,329.394L334.224,346.218L312.229,362.292L302.658,366.557L303.877,370.69L304.021,381.74L304.068,385.547L304.104,388.265L304.272,392.296L304.538,395.807Z", "Towers":"M46.18,473.229L50.588,473.265L54.763,473.502L58.76,473.419L62.888,473.331L67.106,473.238L71.195,473.15L75.349,473.062L79.333,472.978L83.343,472.89L87.409,472.807L91.412,472.718L95.323,472.635L99.264,472.547L102.579,472.432L103.403,472.459L107.156,472.375L107.959,472.362L110.362,472.309L111.162,472.287L113.055,472.243L115.116,472.199L115.113,470.38L119.574,470.34L124.167,470.3L128.644,470.239L133.214,470.142L137.773,470.049L142.307,469.957L146.86,469.864L151.545,469.767L151.558,480.541L151.568,488.539L156.101,488.578L156.118,496.554L162.452,496.638L163.114,496.647L178.976,496.831L178.775,505.459L179.68,509.986L183.466,512.536L189.369,518.111L192.678,527.988L201.294,532.458L209.363,528.38L210.459,528.829L210.617,542.348L210.624,542.885L210.631,543.369L210.677,546.491L210.529,567.3L210.482,570.277L210.473,571.065L210.436,573.42L210.423,574.204L210.413,574.878L210.387,576.899L210.374,577.572L210.311,582.318L210.275,585.506L210.255,587.148L210.229,589.565L210.193,593.519L210.163,597.542L210.14,601.588L210.114,605.59L210.087,609.592L210.064,613.325L210.038,617.63L210.031,625.712L206.097,625.69L202.077,625.664L198.107,625.638L193.475,625.712L193.422,626.848L193.458,631.712L191.417,627.385L186.14,623.414L186.143,623.833L186.143,625.087L186.143,625.505L185.33,625.501L183.934,625.483L182.88,625.475L182.064,625.466L181.267,625.461L179.97,625.448L178.877,625.439L178.08,625.431L177.287,625.426L176.105,625.413L174.907,625.4L174.11,625.391L170.212,625.387L170.172,625.356L169.392,625.351L167.041,625.329L166.258,625.321L166.251,627.398L166.228,633.297L166.205,639.055L166.195,641.339L162.205,641.282L162.218,643.61L162.268,657.401L156.987,658.941L156.72,658.849L154.9,657.872L152.714,657.255L150.666,657.216L150.679,643.531L150.679,641.181L148.559,641.167L146.429,641.176L144.388,641.185L142.234,641.194L139.963,641.225L138.33,641.225L138.201,641.216L138.254,655.09L138.346,657.295L137.773,657.189L134.873,657.176L134.567,657.176L132.845,657.167L132.493,657.167L130.682,657.159L130.695,660.957L128.68,660.948L126.768,660.94L124.763,660.931L114.846,660.891L114.846,661.168L114.876,664.83L109.361,656.309L104.611,650.706L97.687,641.405L94.313,641.449L98.991,647.603L100.914,650.134L102.922,652.775L104.7,655.077L106.408,661.886L106.375,670.913L106.356,673.224L102.991,673.281L98.984,673.347L90.099,673.492L83.103,673.585L79.182,673.624L75.277,673.664L71.247,673.704L67.208,673.743L67.162,665.676L67.165,657.779L62.78,657.836L58.345,657.898L54.124,657.951L50.075,657.955L46.098,657.955L46.075,666.014L46.055,674.042L46.081,681.982L42.118,682.017L38.147,682.039L34.088,682.031L30.15,682.022L30.121,674.152L22.601,674.192L22.117,698.843L22.078,699.846L19.451,698.759L19.243,697.65L18.101,691.409L10.476,689.398L1.231,685.67L3.276,676.93L0.425,672.322L0.415,668.642L0.425,666.714L0.438,664.791L0.382,662.788L0.125,652.885L0,649.451L0.016,645.556L0.01,643.72L0.026,641.55L0.115,639.75L0.224,637.518L0.056,636.475L0.115,629.56L0.145,625.554L0.158,620.694L0.573,618L0.774,609.711L0.78,603.543L0.718,593.545L0.655,586.963L0.616,584.286L0.678,575.683L0.681,571.831L0.688,567.961L0.705,564.064L0.711,560.216L0.728,556.372L0.741,552.48L0.767,548.614L0.8,544.783L0.863,540.956L0.935,537.073L0.968,533.224L0.968,529.362L1.024,520.806L0.984,516.279L1.021,507.018L0.971,505.899L0.975,499.514L1.083,494.467L1.054,490.736L1.159,488.763L1.159,488.495L1.054,478.832L1.169,476.031L1.235,460.531L1.241,457.25L1.208,446.841L1.165,445.013L5.366,446.643L9.729,446.687L14.17,446.731L18.601,446.824L22.934,448.758L26.881,449.044L30.802,449.123L34.937,449.207L38.908,449.273L38.878,453.982L38.855,457.602L38.802,465.191L42.368,465.218L46.233,465.055Z", "Ruins":"M210.087,609.592L210.114,605.59L210.14,601.588L210.163,597.542L210.193,593.519L210.229,589.565L210.255,587.148L210.275,585.506L210.311,582.318L210.374,577.572L210.387,576.899L210.413,574.878L210.423,574.204L210.436,573.42L210.473,571.065L210.482,570.277L210.529,567.3L210.677,546.491L210.631,543.369L210.624,542.885L210.617,542.348L210.459,528.829L210.729,528.618L215.78,518.697L218.542,516.279L225.722,514.962L235.563,520.357L239.299,524.421L245.558,537.619L253.449,540.89L262.217,540.917L269.897,537.768L292.607,531.982L297.348,532.282L298.388,532.467L299.952,532.612L300.752,532.44L301.24,532.453L303.172,532.533L305.124,532.489L305.641,532.475L306.415,532.563L306.092,534.514L305.342,544.563L305.355,545.113L305.368,545.708L305.286,573.993L305.292,574.631L305.414,585.356L305.974,585.51L329.075,593.294L337.178,595.385L369.586,601.487L401.426,607.342L413.324,609.482L433.278,611.058L433.278,612.669L433.278,613.919L433.275,619.527L433.275,625.426L433.275,627.557L433.271,635.559L433.271,641.255L433.271,643.465L433.288,651.564L433.304,659.518L433.321,669.012L433.324,669.522L433.334,675.323L437.433,675.345L442.401,675.358L443.296,679.082L451.142,679.086L457.95,679.095L457.858,675.398L461.812,675.407L461.828,683.421L461.845,691.436L461.858,694.116L461.92,702.825L461.95,707.402L475.28,707.402L477.963,707.402L481.934,707.402L483.201,707.402L483.787,707.402L485.838,707.402L489.894,707.402L491.718,707.402L493.822,707.402L492.532,723.011L492.532,724.037L493.045,728.6L499.409,724.089L500.351,723.038L525.441,723.469L525.599,707.547L534.659,707.622L541.536,707.671L549.461,707.728L557.201,707.781L557.418,726.131L557.428,726.98L557.451,739.711L557.448,740.644L557.438,742.03L557.441,743.372L557.435,743.675L557.454,744.582L557.609,759.212L557.583,762.811L557.909,764.1L558.113,787.933L558.113,788.149L558.182,796.138L558.254,804.106L558.36,812.086L558.403,817.092L558.077,817.118L542.518,817.998L538.646,818.148L534.521,818.28L530.54,818.381L526.6,818.482L522.478,818.588L518.787,818.684L514.669,818.79L510.662,818.891L506.79,818.979L502.784,819.067L498.958,819.133L497.832,819.146L494.833,819.155L479.238,819.027L476.554,819.01L462.842,818.852L434.552,817.734L433.14,817.664L401.511,815.574L398.588,815.293L395.588,815.002L386.252,814.087L385.692,814.021L369.902,812.204L369.813,791.77L369.794,786.534L369.827,770.634L369.83,767.581L369.863,749.043L369.869,746.373L369.876,742.624L369.909,738.457L360.473,738.448L358.294,738.435L354.202,738.448L337.411,738.417L306.362,738.311L305.826,738.307L305.822,737.66L304.469,736.556L300.499,731.922L294.003,730.435L279.959,733.497L275.34,735.852L272.558,731.13L275.162,723.922L274.316,722.488L260.715,722.18L250.411,723.878L250.855,732.133L247.609,732.683L240.764,728.899L233.462,728.142L228.251,723.786L230.315,720.195L235.981,712.723L236.343,708.81L230.012,707.178L224.702,713.664L222.028,722.268L217.258,725.528L210.031,723.724L204.514,726.127L193.412,724.217L188.158,721.198L175.871,725.823L167.545,730.092L166.854,730.056L164.997,729.876L162.146,730.149L156.045,730.008L151.568,733.937L145.853,733.057L137.902,737.291L130.31,737.282L124.361,734.096L121.589,733.827L120.937,733.959L114.553,739.059L109.809,735.5L107.738,729.968L105.19,726.294L98.695,725.735L92.229,720.094L88.479,719.72L83.089,726.228L77.911,728.406L72.88,725.889L65.884,719.882L53.976,716.978L39.283,714.307L38.315,708.229L35.003,707.279L29.08,715.816L26.95,716.129L22.091,704.96L19.451,698.759L22.078,699.846L22.117,698.843L22.601,674.192L30.121,674.152L30.15,682.022L34.088,682.031L38.147,682.039L42.118,682.017L46.081,681.982L46.055,674.042L46.075,666.014L46.098,657.955L50.075,657.955L54.124,657.951L58.345,657.898L62.78,657.836L67.165,657.779L67.162,665.676L67.208,673.743L71.247,673.704L75.277,673.664L79.182,673.624L83.103,673.585L90.099,673.492L98.984,673.347L102.991,673.281L106.356,673.224L106.375,670.913L106.408,661.886L104.7,655.077L102.922,652.775L100.914,650.134L98.991,647.603L94.313,641.449L97.687,641.405L104.611,650.706L109.361,656.309L114.876,664.83L114.846,661.168L114.846,660.891L124.763,660.931L126.768,660.94L128.68,660.948L130.695,660.957L130.682,657.159L132.493,657.167L132.845,657.167L134.567,657.176L134.873,657.176L137.773,657.189L138.346,657.295L138.254,655.09L138.201,641.216L138.33,641.225L139.963,641.225L142.234,641.194L144.388,641.185L146.429,641.176L148.559,641.167L150.679,641.181L150.679,643.531L150.666,657.216L152.714,657.255L154.9,657.872L156.72,658.849L156.987,658.941L162.268,657.401L162.218,643.61L162.205,641.282L166.195,641.339L166.205,639.055L166.228,633.297L166.251,627.398L166.258,625.321L167.041,625.329L169.392,625.351L170.172,625.356L170.212,625.387L174.11,625.391L174.907,625.4L176.105,625.413L177.287,625.426L178.08,625.431L178.877,625.439L179.97,625.448L181.267,625.461L182.064,625.466L182.88,625.475L183.934,625.483L185.33,625.501L186.143,625.505L186.143,625.087L186.143,623.833L186.14,623.414L191.417,627.385L193.458,631.712L193.422,626.848L193.475,625.712L198.107,625.638L202.077,625.664L206.097,625.69L210.031,625.712L210.038,617.63L210.064,613.325Z", "Wilds":"M413.943,376.396L428.613,383.018L475.293,404.094L550.896,419.685L662.928,442.785L699.626,450.696L788.141,452.792L787.878,471.186L817.897,468.222L868.403,463.236L995.898,446.731L996.83,484.09L996.912,496.647L996.872,504.309L997.106,514.509L997.139,519.432L997.179,525.218L997.205,527.962L997.35,544.686L997.356,546.298L997.258,547.081L997.389,551.573L997.452,558.833L997.514,576.586L997.834,584.793L997.797,592.779L998.061,602.764L998.041,605.273L998.094,610.34L998.104,616.142L998.239,616.552L998.255,618.431L973.195,618.295L938.076,617.247L937.523,617.238L908.68,616.653L907.129,616.499L902.359,616.059L869.7,614.28L852.972,614.227L852.989,615.389L853.015,617.542L850.081,617.472L847.109,617.406L844.044,617.335L840.929,617.26L838.529,617.208L837.531,617.185L831.438,617.045L831.47,620.742L823.138,625.255L823.872,620.527L818.348,621.689L815.757,616.71L811.954,616.662L811.971,613.853L782.028,614.628L777.106,613.968L767.845,613.932L760.766,613.096L729.905,612.911L732.779,631.593L731.146,642.237L731.729,644.213L733.405,646.317L721.381,646.08L720.476,646.075L682.158,645.327L681.44,645.318L680.545,647.114L679.244,649.082L678.391,648.479L675.995,648.43L672.067,648.347L671.656,648.338L670.418,648.311L670.003,648.303L669.667,648.298L668.824,648.294L668.057,648.285L666.052,648.267L664.097,648.25L662.082,648.232L660.156,648.215L658.167,648.197L656.258,648.179L655.464,648.171L654.161,648.149L652.291,648.118L652.35,652.673L650.282,652.651L648.36,652.629L648.386,657.137L648.409,660.918L648.514,668.933L646.463,668.911L644.597,668.897L642.44,668.88L640.603,668.871L638.542,668.858L636.636,668.84L634.769,668.814L633.805,668.805L633.094,668.792L631.006,668.761L629.11,668.721L627.029,668.616L625.107,668.585L623.042,668.585L620.606,668.585L620.669,671.719L620.708,672.788L617.35,670.385L605.294,661.322L605.659,664.091L606.091,672.198L606.114,674.236L606.14,676.432L604.886,676.41L603.799,676.393L598.235,676.318L597.998,676.318L597.277,676.305L597.037,676.3L596.813,676.296L588.987,676.19L586.795,676.159L584.935,676.137L581.001,676.085L577.152,676.032L573.079,675.975L569.139,675.922L565.03,675.865L561.03,675.812L557.053,675.856L557.148,683.901L557.247,691.836L557.175,699.723L557.29,705.853L557.405,707.767L557.201,707.781L549.461,707.728L541.536,707.671L534.659,707.622L525.599,707.547L525.441,723.469L500.351,723.038L499.409,724.089L493.045,728.6L492.532,724.037L492.532,723.011L493.822,707.402L491.718,707.402L489.894,707.402L485.838,707.402L483.787,707.402L483.201,707.402L481.934,707.402L477.963,707.402L475.28,707.402L461.95,707.402L461.92,702.825L461.858,694.116L461.845,691.436L461.828,683.421L461.812,675.407L457.858,675.398L457.95,679.095L451.142,679.086L443.296,679.082L442.401,675.358L437.433,675.345L433.334,675.323L433.324,669.522L433.321,669.012L433.304,659.518L433.288,651.564L433.271,643.465L433.271,641.255L433.271,635.559L433.275,627.557L433.275,625.426L433.275,619.527L433.278,613.919L433.278,612.669L433.278,611.058L413.324,609.482L401.426,607.342L369.586,601.487L337.178,595.385L329.075,593.294L305.974,585.51L305.414,585.356L305.292,574.631L305.286,573.993L305.368,545.708L305.355,545.113L305.342,544.563L306.092,534.514L306.415,532.563L305.641,532.475L305.124,532.489L303.172,532.533L301.24,532.453L300.752,532.44L299.952,532.612L298.388,532.467L297.348,532.282L292.607,531.982L269.897,537.768L262.217,540.917L253.449,540.89L245.558,537.619L239.299,524.421L235.563,520.357L225.722,514.962L218.542,516.279L215.78,518.697L210.729,528.618L210.459,528.829L209.992,497.849L211.51,496.717L216.05,489.842L216.418,481.906L216.751,481.915L217.406,484.61L219.447,487.085L222.127,488.428L222.295,488.865L222.716,489.173L223.217,489.538L225.156,489.966L225.989,490.146L226.799,490.155L229.232,490.186L230.038,490.19L230.065,489.472L229.897,482.241L229.834,472.045L229.814,461.875L233.765,461.941L233.745,456.254L233.729,450.55L233.703,442.34L233.666,434.221L237.673,434.332L241.532,434.384L241.574,442.432L249.347,442.516L257.463,442.595L257.295,449.881L273.95,450.449L273.654,448.229L273.631,444.837L273.611,441.388L274.092,438.441L273.068,426.724L272.933,422.654L272.933,420.777L273.061,418.927L273.035,416.967L272.949,410.936L276.874,411.011L278.984,411.05L280.841,411.085L281.717,411.112L286.625,414.319L288.867,416.812L285.463,418.112L287.419,420.112L291.383,423.852L295.649,424.645L298.945,424.632L298.895,420.909L302.336,420.918L304.403,420.922L307.626,420.936L307.87,411.645L304.614,397.851L304.538,395.807L304.272,392.296L304.104,388.265L304.068,385.547L304.021,381.74L303.877,370.69L302.658,366.557L312.229,362.292L334.224,346.218L374.732,375.545L397.857,369.13Z", "Outskirts":"M648.514,668.933L648.409,660.918L648.386,657.137L648.36,652.629L650.282,652.651L652.35,652.673L652.291,648.118L654.161,648.149L655.464,648.171L656.258,648.179L658.167,648.197L660.156,648.215L662.082,648.232L664.097,648.25L666.052,648.267L668.057,648.285L668.824,648.294L669.667,648.298L670.003,648.303L670.418,648.311L671.656,648.338L672.067,648.347L675.995,648.43L678.391,648.479L679.244,649.082L680.545,647.114L681.44,645.318L682.158,645.327L720.476,646.075L721.381,646.08L733.405,646.317L731.729,644.213L731.146,642.237L732.779,631.593L729.905,612.911L760.766,613.096L767.845,613.932L777.106,613.968L782.028,614.628L811.971,613.853L811.954,616.662L815.757,616.71L818.348,621.689L823.872,620.527L823.138,625.255L831.47,620.742L831.438,617.045L837.531,617.185L838.529,617.208L840.929,617.26L844.044,617.335L847.109,617.406L850.081,617.472L853.015,617.542L852.989,615.389L852.972,614.227L869.7,614.28L902.359,616.059L907.129,616.499L908.68,616.653L937.523,617.238L938.076,617.247L973.195,618.295L998.255,618.431L998.301,623.753L998.314,625.197L998.341,628.697L998.354,629.991L998.4,635.881L998.436,636.946L998.723,673.246L998.775,678.91L999.081,703.054L999.111,705.285L999.17,709.726L999.2,712.142L999.332,720.116L999.49,724.336L999.542,728.252L999.493,732.327L999.598,736.234L999.697,744.045L1000,759.969L984.072,759.881L983.957,751.934L979.967,751.912L979.789,743.935L977.768,743.926L975.848,743.922L973.833,743.913L971.865,743.9L969.837,743.887L967.95,743.873L944.588,743.658L945.481,757.654L936.443,768.87L936.654,775.447L905.924,775.368L904.996,775.364L905.016,775.685L904.98,776.151L904.98,776.248L904.601,783.292L898.053,783.204L891.468,783.204L889.216,783.182L888.788,783.182L887.501,783.169L887.07,783.164L887.04,787.256L885.578,787.243L885.552,783.156L885.17,783.151L885.002,783.151L884.317,783.151L881.753,783.138L880.897,783.134L881.272,782.724L881.506,782.324L881.917,781.58L883.3,781.589L883.929,781.594L884.034,781.594L884.768,781.598L885.055,781.598L885.503,781.602L886.237,781.607L886.971,781.611L887.313,781.616L887.564,781.616L887.511,782.038L888.917,782.047L889.282,782.051L891.488,781.814L895.995,781.902L895.979,780.159L896.617,780.164L896.621,779.64L896.627,778.659L894.306,778.615L894.296,779.935L894.293,780.151L893.723,780.146L892.663,777.119L892.67,776.82L892.676,775.285L891.231,775.276L890.849,775.271L890.77,769.503L890.708,764.694L890.303,761.135L888.555,759.194L872.854,759.194L872.926,762.376L872.933,762.675L870.421,763.726L870.879,788.655L863.092,790.556L863.231,798.84L857.756,798.734L857.924,806.767L849.677,806.604L842.062,806.472L841.969,806.472L836.791,806.376L831.421,806.279L826.216,806.186L819.77,806.059L817.209,805.988L813.538,805.804L813.515,816.225L799.539,805.887L789.297,805.817L785.494,805.812L781.481,806.182L781.455,805.293L773.56,805.724L756.658,805.659L749.731,805.632L745.741,805.619L741.806,805.606L737.803,805.597L733.737,805.584L729.76,805.566L725.737,805.544L721.668,805.5L717.688,805.461L713.671,805.346L710.036,805.377L705.582,805.298L705.134,805.298L704.917,789.522L703.547,789.522L699.57,789.513L691.33,789.491L689.351,789.486L685.562,789.456L685.615,791.33L685.664,794.889L685.677,798.413L685.694,801.932L685.7,803.129L685.766,805.527L685.871,813.423L685.99,821.412L686.115,829.264L686.286,837.402L686.378,848.988L686.428,853.219L686.461,857.34L686.49,861.343L686.523,865.35L686.553,869.075L686.711,884.033L686.892,901.282L687.043,918.38L687.096,923.995L687.106,925.636L687.165,932.227L687.076,933.247L684.512,933.221L683.801,933.212L671.181,933.071L660.021,932.953L655.306,932.904L655.244,932.9L651.754,932.825L642.796,932.539L639.322,932.482L635.329,932.407L631.349,932.359L623.52,932.24L622.93,932.236L619.803,932.214L616.906,932.227L607.411,932.161L591.397,932.434L591.394,926.955L591.348,924.677L591.315,921.735L591.269,916.445L591.127,900.297L591.045,892.293L590.969,884.319L575.022,884.143L570.992,884.091L567.051,884.042L563.041,883.989L559.107,883.981L559.028,876.002L558.89,867.984L558.844,860.028L558.788,853.377L558.775,852.19L558.725,848.192L558.58,835.998L558.508,829.039L558.498,827.984L558.465,825.067L558.432,822.322L558.403,817.092L558.36,812.086L558.254,804.106L558.182,796.138L558.113,788.149L558.113,787.933L557.909,764.1L557.583,762.811L557.609,759.212L557.454,744.582L557.435,743.675L557.441,743.372L557.438,742.03L557.448,740.644L557.451,739.711L557.428,726.98L557.418,726.131L557.201,707.781L557.405,707.767L557.29,705.853L557.175,699.723L557.247,691.836L557.148,683.901L557.053,675.856L561.03,675.812L565.03,675.865L569.139,675.922L573.079,675.975L577.152,676.032L581.001,676.085L584.935,676.137L586.795,676.159L588.987,676.19L596.813,676.296L597.037,676.3L597.277,676.305L597.998,676.318L598.235,676.318L603.799,676.393L604.886,676.41L606.14,676.432L606.114,674.236L606.091,672.198L605.659,664.091L605.294,661.322L617.35,670.385L620.708,672.788L620.669,671.719L620.606,668.585L623.042,668.585L625.107,668.585L627.029,668.616L629.11,668.721L631.006,668.761L633.094,668.792L633.805,668.805L634.769,668.814L636.636,668.84L638.542,668.858L640.603,668.871L642.44,668.88L644.597,668.897L646.463,668.911ZM873.42,785.597L873.377,783.12L876.057,783.125ZM547.11,883.774L551.11,883.818L551.114,891.84L547.196,891.783Z"};var tr={};var i={};for(var s in r){i={};if(this.options.stateSpecificStyles[s]){e.extend(i,t,this.options.stateSpecificStyles[s])}else{i=t}this.stateShapes[s]=n.path(r[s]).attr(i);if(tr[s]){if(this.stateShapes[s].node&&this.stateShapes[s].node.setAttribute){this.stateShapes[s].node.setAttribute("transform",tr[s])}else{this.stateShapes[s].transform(tr[s])}}this.topShape=this.stateShapes[s];this.stateHitAreas[s]=n.path(r[s]).attr({fill:"#000","stroke-width":0,opacity:0,cursor:"pointer"});if(tr[s]){if(this.stateHitAreas[s].node&&this.stateHitAreas[s].node.setAttribute){this.stateHitAreas[s].node.setAttribute("transform",tr[s])}else{this.stateHitAreas[s].transform(tr[s])}}this.stateHitAreas[s].node.dataState=s}this._onClickProxy=e.proxy(this,"_onClick");this._onMouseOverProxy=e.proxy(this,"_onMouseOver"),this._onMouseOutProxy=e.proxy(this,"_onMouseOut");for(var s in this.stateHitAreas){this.stateHitAreas[s].toFront();e(this.stateHitAreas[s].node).bind("mouseout",this._onMouseOutProxy);e(this.stateHitAreas[s].node).bind("click",this._onClickProxy);e(this.stateHitAreas[s].node).bind("mouseover",this._onMouseOverProxy)}},_initCreateLabels:function(){var t=this.paper;var n=[];var r=860;var i=220;var s=this.options.labelWidth;var o=this.options.labelHeight;var u=this.options.labelGap;var a=this.options.labelRadius;var f=s/this.scale;var l=o/this.scale;var c=(s+u)/this.scale;var h=(o+u)/this.scale*.5;var p=a/this.scale;var d=this.options.labelBackingStyles;var v=this.options.labelTextStyles;var m={};for(var g=0,y,b,w;g<n.length;++g){w=n[g];y=(g+1)%2*c+r;b=g*h+i,m={};if(this.options.stateSpecificLabelBackingStyles[w]){e.extend(m,d,this.options.stateSpecificLabelBackingStyles[w])}else{m=d}this.labelShapes[w]=t.rect(y,b,f,l,p).attr(m);m={};if(this.options.stateSpecificLabelTextStyles[w]){e.extend(m,v,this.options.stateSpecificLabelTextStyles[w])}else{e.extend(m,v)}if(m["font-size"]){m["font-size"]=parseInt(m["font-size"])/this.scale+"px"}this.labelTexts[w]=t.text(y+f/2,b+l/2,w).attr(m);this.labelHitAreas[w]=t.rect(y,b,f,l,p).attr({fill:"#000","stroke-width":0,opacity:0,cursor:"pointer"});this.labelHitAreas[w].node.dataState=w}for(var w in this.labelHitAreas){this.labelHitAreas[w].toFront();e(this.labelHitAreas[w].node).bind("mouseout",this._onMouseOutProxy);e(this.labelHitAreas[w].node).bind("click",this._onClickProxy);e(this.labelHitAreas[w].node).bind("mouseover",this._onMouseOverProxy)}},_getStateFromEvent:function(e){var t=e.target&&e.target.dataState||e.dataState;return this._getState(t)},_getState:function(e){var t=this.stateShapes[e];var n=this.stateHitAreas[e];var r=this.labelShapes[e];var i=this.labelTexts[e];var s=this.labelHitAreas[e];return{shape:t,hitArea:n,name:e,labelBacking:r,labelText:i,labelHitArea:s}},_onMouseOut:function(e){var t=this._getStateFromEvent(e);if(!t.hitArea){return}return!this._triggerEvent("mouseout",e,t)},_defaultMouseOutAction:function(t){var n={};if(this.options.stateSpecificStyles[t.name]){e.extend(n,this.options.stateStyles,this.options.stateSpecificStyles[t.name])}else{n=this.options.stateStyles}t.shape.animate(n,this.options.stateHoverAnimation);if(t.labelBacking){var n={};if(this.options.stateSpecificLabelBackingStyles[t.name]){e.extend(n,this.options.labelBackingStyles,this.options.stateSpecificLabelBackingStyles[t.name])}else{n=this.options.labelBackingStyles}t.labelBacking.animate(n,this.options.stateHoverAnimation)}},_onClick:function(e){var t=this._getStateFromEvent(e);if(!t.hitArea){return}return!this._triggerEvent("click",e,t)},_onMouseOver:function(e){var t=this._getStateFromEvent(e);if(!t.hitArea){return}return!this._triggerEvent("mouseover",e,t)},_defaultMouseOverAction:function(t){this.bringShapeToFront(t.shape);this.paper.safari();var n={};if(this.options.stateSpecificHoverStyles[t.name]){e.extend(n,this.options.stateHoverStyles,this.options.stateSpecificHoverStyles[t.name])}else{n=this.options.stateHoverStyles}t.shape.animate(n,this.options.stateHoverAnimation);if(t.labelBacking){var n={};if(this.options.stateSpecificLabelBackingHoverStyles[t.name]){e.extend(n,this.options.labelBackingHoverStyles,this.options.stateSpecificLabelBackingHoverStyles[t.name])}else{n=this.options.labelBackingHoverStyles}t.labelBacking.animate(n,this.options.stateHoverAnimation)}},_triggerEvent:function(t,n,r){var i=r.name;var s=false;var o=e.Event("usmap"+t+i);o.originalEvent=n;if(this.options[t+"State"][i]){s=this.options[t+"State"][i](o,r)===false}if(o.isPropagationStopped()){this.element.trigger(o,[r]);s=s||o.isDefaultPrevented()}if(!o.isPropagationStopped()){var u=e.Event("usmap"+t);u.originalEvent=n;if(this.options[t]){s=this.options[t](u,r)===false||s}if(!u.isPropagationStopped()){this.element.trigger(u,[r]);s=s||u.isDefaultPrevented()}}if(!s){switch(t){case"mouseover":this._defaultMouseOverAction(r);break;case"mouseout":this._defaultMouseOutAction(r);break}}return!s},trigger:function(e,t,n){t=t.replace("usmap","");e=e.toUpperCase();var r=this._getState(e);this._triggerEvent(t,n,r)},bringShapeToFront:function(e){if(this.topShape){e.insertAfter(this.topShape)}this.topShape=e}};var c=[];s(e,"usmap",l,c)})(jQuery,document,window,Raphael)

campaignTrail_temp.questions_json = [
    {
        "model": "campaign_trail.question",
        "pk": 415,
        "fields": {
            "description": "You shiver, standing on a stump outside of your meager home in the Upper Wilds. You sniff the air and it stings your nose. Flowing azure waves dance against the sand dunes as thickets of grass and shrubbery rustle in the wind. This coast, this proud and ancient territory, is the only land you've ever known. You look to the waters, then to the half-paved road beside you. You scowl."
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 416,
        "fields": {
            "description": "The ride through the Wilds to the Docks, where Congress sits, is long and arduous. You alternate between biking and walking all through the day into the night, passing beautiful green scenery and numerous other Wilds families on your way up the road, and you are hounded by wild animals at least thrice. Your fellow Radicals, many of them, greet you on the edge of the ward as you stow away your bike for the time being. "
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 417,
        "fields": {
            "description": "You sit in a cold, dimly-lit room next to a fellow Congress-man as the party chair opens up the floor for candidates. The room is silent, aside from a few coughs and throat clearings. There's an understanding on the ground that the Iron Party is weak this year, but nobody believes in themselves enough to step up. Nobody thinks they're a strong enough candidate... well, nobody except for you, right?"
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 418,
        "fields": {
            "description": "Deep breaths, Ellie. You got this."
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 419,
        "fields": {
            "description": "''Because if we trust each other, and we trust ourselves, then I believe the skies will clear. I believe things can and will change. And I believe we'll bring hope back to Neo Ferrum.'' You take a breath after you finish speaking, and you look around the room for people's reactions. Most everyone is staring back at you, wide-eyed and equally curious. It's totally silent; you could hear a pin drop. But then, someone rises to their feet and begins to clap."
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 420,
        "fields": {
            "description": "Sitting down with your comrades, you draw up an ingenious scheme: you are going to run on industrializing and modernizing the Wilds, Ruins, and Outskirts. It's beautiful, really - you'll invest heavily in infrastructure, bringing population out from the Docks and the Towers to the rest of Neo Ferrum, and then you'll start investing in industry. Maybe you can even scavenge the Old American sites for loot and knowledge! And yet... something's not right."
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 421,
        "fields": {
            "priority": -2,
            "description": "But you can't think about that now; there's a campaign to run. Leaving the Radicals' caucus, you find yourself standing on a street corner facing the wind. It's mostly quiet aside from said breeze. You stare across the gray stone street to the next building and sigh. You wonder if that's what every building in the Wilds will look like one day. You start walking..."
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 422,
        "fields": {
            "description": "As the doctors work tirelessly on your wounded body in the real world, your mind goes traveling across time and space. You find yourself soaring through the sky, descending onto the Earth through the clouds, when you see your first stop. It's a city, a ginormous one, on the banks of the lake. Sleek black metal-and-glass towers spiral into the air and pierce the heavens, shining with bright lights atop their tips. The roads run up to and parallel with the lake, as if you were meant to race the roaring waves through town. There is no beach; instead, to the east of the city center, are your sand dunes."
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 429,
        "fields": {
            "description": "You fly well past the city and over to the Wilds. To the south, the great industrial corpses of your time have been replaced with alive, albeit wilting, bodies of steel and stone. You realize where - <i>when</i> - you are."
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 430,
        "fields": {
            "description": "The clouds surround you again, and then clear once more. The city is gone, and so is all the industry. Pristine wilderness exists in their place; more woodland and swamp, an extension of the dunes' domain. Yet it is equally beautiful."
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 431,
        "fields": {
            "description": "You open your eyes with newfound purpose and motive. You understand it now - though man's marks may come and go, the Earth is eternal. Until the end of time, the Wilds will be the Wilds, and they will be beautiful."
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 432,
        "fields": {
            "description": "--ACT II BEGIN--"
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 433,
        "fields": {
            "description": "''Ms. McCormick,'' the reporter asks breathlessly, ''a word for the papers?'' After saying yes to the young man, he sits down with you on a bench. It's cold today; the frigid metal bench doesn't help, and you shiver endlessly beneath your bandages. ''What are your plans regarding how militia enlistment works in Neo Ferrum?''"
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 434,
        "fields": {
            "description": "The sun is bright and hot today as you wander around the Towers, knocking on doors. You need to use a cane now after the shooting, so you're unable to do as much personal canvassing - still, you figure it's worth it to get out there and talk to people. What issue would you like to bring up to folks at their doors today?"
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 435,
        "fields": {
            "description": "You're sitting down for another interview, this time about your welfare plans. It's nice and warm inside, this time, and you notice that the journo's place is put together quite well, with posters and front pages on the walls. It's a humble place. But then you're asked a question, and you have to focus."
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 436,
        "fields": {
            "description": "More campaign work - this time, you're writing letters of support to different addresses in the Towers. What do you want to focus on today, in these letters?"
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 437,
        "fields": {
            "description": "The press is calling again - this time, they'd like to know your specific ideas for ''increasing democracy'' in Neo Ferrum. What are your plans?"
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 439,
        "fields": {
            "description": "The lights are bright; the venue got their hands on pre-collapse fluorescents, somehow. You see the moderators huddled around the table, while behind them the crowd sits in a motley collage of folding chairs. You hobble up to the podium and take your place, shaking Lewison's hand while he smiles. He knows he's vulnerable. You know he's vulnerable. How are you going to take advantage of it tonight?"
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 441,
        "fields": {
            "description": "The last major policy question of the election is about drugs. They've become a contested topic as of late, with some arguing for decriminalization and addiction services while others promote a more authoritarian approach. Where do you stand, Ms. McCormick?"
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 442,
        "fields": {
            "description": "Today is Election Day, and you are once again in the Towers holding a rally. The sun is dazzling above you; the pale blue skies are clear of any clouds. A soft breeze flows through your hair as you speak. You lean forward on your cane, grinning madly, cracking jokes and telling some stories. And then, it's over. You head home - hitching a ride from a friend - and cast your vote."
        }
    }
];

campaignTrail_temp.answers_json = [
    {
        "model": "campaign_trail.answer",
        "pk": 3509,
        "fields": {
            "question": 415,
            "description": "The boys in the Docks get loads of coin every month and barely pay anything. Meanwhile, all twelve people out here get taxed to shit and this is what the roads look like? This is bullshit. Somebody's got to do something."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3513,
        "fields": {
            "question": 416,
            "description": "Wow, surprisingly big crowd today. It's not often we have a full attendance sheet."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3516,
        "fields": {
            "question": 417,
            "description": "I'd like to have a word, if I may?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3520,
        "fields": {
            "question": 418,
            "description": "Hi there. My name's Ellie McCormick, and I'd like to run for Mayor."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3521,
        "fields": {
            "question": 418,
            "description": "Democracy is a venture of trust. It takes a certain amount of trust to get out there as a candidate or a volunteer, to work with others on the shared baseline of a couple of really important ideas. It takes trust to vote, to place your faith in a candidate and platform and believe that things can be improved."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3522,
        "fields": {
            "question": 418,
            "description": "When you go out there, to the Congress and the door-knocking and the letters, it's easy to forget how important trust is. And here, we've lost trust. There's no trust that things will improve under Lewison and his Iron Party."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3523,
        "fields": {
            "question": 419,
            "description": "And then another, then another. One by one, people stand up, and the tension in the room melts away as you feel a warmth deep in your heart."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3526,
        "fields": {
            "question": 420,
            "description": "Something nags at you. There's this feeling you have in you, that you're taking the wrong path."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3527,
        "fields": {
            "question": 420,
            "description": "You admire history. You admire the past. You think about it quite a lot. What you're doing is bringing the past back, in some small way. Or, rather, your interpretation of it."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3528,
        "fields": {
            "question": 421,
            "description": "...and suddenly, darkness."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3531,
        "fields": {
            "question": 422,
            "description": "That's funny. The Wilds, they look the same, even from up here. Kind of crazy to think about."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3588,
        "fields": {
            "question": 429,
            "description": "You see the woodlands, the streams and ponds, leading up to the lake; you see the sand dunes, massive as always, towering above tiny speck-like people below;"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3589,
        "fields": {
            "question": 429,
            "description": "-you see the trees blowing softly in the wind, and the crystal-blue waters, and the beautiful fields of shrubbery and grasses;"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3590,
        "fields": {
            "question": 429,
            "description": "-and you see the wildlife, the birds flying overhead and the raccoons scampering about and the people bustling to and fro and even the fish swimming through the lake and the rivers."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3591,
        "fields": {
            "question": 429,
            "description": "You see all of this, all of it, and you weep."
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
            "description": "The- <i>*cough*</i> the plan's off. We don't need to industrialize what's left. We can, if nothing else, rebuild from the Ruins. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3600,
        "fields": {
            "question": 432,
            "description": "Continue."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3604,
        "fields": {
            "question": 433,
            "description": "To be quite honest, the status quo - limited conscription - is fine by me. We need some kind of protection force from wasteland raiders. In fact, I think we should <i>increase</i> the budget slightly - the Outskirts need more protection."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3605,
        "fields": {
            "question": 433,
            "description": "I think we can scale back our war machine just a bit, y'know? That's a lot of money that can go to our schools and our roads, and where it really matters - the Outskirts - everyone already knows what they're doing with a firearm anyways."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3606,
        "fields": {
            "question": 433,
            "description": "I think, after what happened, this highlights the need for a demilitarization of Neo Ferrum. We're not at war with anyone, we're not dealing with a massive wasteland crisis, it's not like there are huge post-apocalyptic monsters we have to fight - we can afford to take it easy, and we should focus on building a nation of peace."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3607,
        "fields": {
            "question": 434,
            "description": "Let's go with welfare - we'll promote our plan to increase the wealth of the average Ferran. It's all about quality of life and the economy, at the end of the day."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3608,
        "fields": {
            "question": 434,
            "description": "Let's talk general economics. People don't like the state of things, so we should highlight our promises to change the way the economy works. Especially our public works projects, those are good."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3609,
        "fields": {
            "question": 434,
            "description": "Why don't we talk about the militia angle? We're running to make sure that your kids aren't holed up in a dead-end deployment or worse. That motivates people."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3610,
        "fields": {
            "question": 434,
            "description": "We should talk about democracy, and why it's so important to release the grip Lewison has on power. It's putting a lot of trust into the idea that people care, but isn't that what this campaign is all about?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3611,
        "fields": {
            "question": 435,
            "description": "First and foremost, we need a healthcare system in Neo Ferrum. Not everyone can afford to go to the doctor, and some of us don't even have a doctor or hospital nearby. We need drastic improvements to medical infrastructure."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3612,
        "fields": {
            "question": 435,
            "description": "People need more money, plain and simple. My plan is to set up an allowance for every citizen of Neo Ferrum, to be able to afford basic goods and services."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3613,
        "fields": {
            "question": 435,
            "description": "Well, we'll try to increase investment into a welfare system, but, y'know, with the Congress and everything, uh... it might be hard."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3614,
        "fields": {
            "question": 435,
            "description": "We don't have any plans for an improved welfare system in Neo Ferrum."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3615,
        "fields": {
            "question": 436,
            "description": "Let's talk more about my welfare plans, and what I'll do to improve people's lives at the ground level."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3616,
        "fields": {
            "question": 436,
            "description": "Let's talk more about my plans for militia investment and reinvestment."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3617,
        "fields": {
            "question": 436,
            "description": "Let's talk more about my plans to improve Ferran democracy."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3618,
        "fields": {
            "question": 436,
            "description": "Let's talk more about my general economic plans, and what I'll do to pull us out of this crisis."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3619,
        "fields": {
            "question": 437,
            "description": "First of all, we need a Bill of Rights - something to guarantee personal liberties for everyone in Neo Ferrum. Secondly, we should introduce a system of proportional representation for our Congress to ensure that everyone gets a voice."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3620,
        "fields": {
            "question": 437,
            "description": "First of all, we need a Bill of Rights - something to guarantee personal liberties for everyone in Neo Ferrum. Beyond that, we need to increase the amount of polling stations every election. Our communities out east are severely underserved."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3621,
        "fields": {
            "question": 437,
            "description": "First of all, we need a Bill of Rights - something to guarantee personal liberties for everyone in Neo Ferrum. Aside from that, we should create a system where everyone in Neo Ferrum votes by mail, so that voters in the far reaches of the nation still have their voices heard."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3622,
        "fields": {
            "question": 437,
            "description": "First of all, we need a Bill of Rights - something to guarantee personal liberties for everyone in Neo Ferrum. In addition to that, we should abolish the poll tax. Nobody should have to pay a fee, however ''small,'' to vote."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3626,
        "fields": {
            "question": 439,
            "description": "Play it cool. Let's stay stately and professional, and wait for Lewison to splutter out on a tough question. Then we come in with my plan, and it looks like I'm the real leader."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3627,
        "fields": {
            "question": 439,
            "description": "Go on the offensive. Hammer Lewison for his failures at every opportunity. Don't let him get a word in."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3628,
        "fields": {
            "question": 439,
            "description": "Fuck it, let's just wing it."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3632,
        "fields": {
            "question": 441,
            "description": "Addiction is a disease, not a crime. With that in mind, we should couple decriminalization with mandated treatment and rehab for addicts. It may sound harsh, but it's better than the alternatives."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3633,
        "fields": {
            "question": 441,
            "description": "We need to crack down on whoever is producing and distributing these substances in our society. That's how we deal with drug addiction."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3634,
        "fields": {
            "question": 441,
            "description": "To be frank, I prefer a less heavy-handed approach. I think we should prosecute the hardest drugs, but things like cannabis and tobacco are perfectly fine as long as they're regulated."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 3635,
        "fields": {
            "question": 442,
            "description": "No matter what happens, I believe it was worth it."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12866,
        "fields": {
            "question": 418,
            "description": "He takes trust for granted, spends it and tosses it aside for his own sake. It's abusive, and we're here to stop it. But to do that, we have to trust one another. We live in a strange, cloudy world, but it doesn't have to be that way."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12867,
        "fields": {
            "question": 420,
            "description": "But then... you think of the wilds, of the woodlands and wetlands you call home, and the pristine beachfront and the beautiful cerulean waves and the lush patches of forest and the wildlife, oh, the wildlife-"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12868,
        "fields": {
            "question": 420,
            "description": "And you wonder: if the Wilds are as they are now, is it really going back to the past by paving them over?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 12902,
        "fields": {
            "question": 439,
            "description": "Uh..."
        }
    }
];

campaignTrail_temp.states_json = [
    {
        "model": "campaign_trail.state",
        "pk": 12761,
        "fields": {
            "name": "The Docks",
            "abbr": "Docks",
            "electoral_votes": 0,
            "popular_votes": 8971,
            "poll_closing_time": 0,
            "winner_take_all_flg": 1,
            "election": "10"
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 12771,
        "fields": {
            "name": "The Towers",
            "abbr": "Towers",
            "electoral_votes": 0,
            "popular_votes": 10567,
            "poll_closing_time": 40,
            "winner_take_all_flg": 1,
            "election": "10"
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 12781,
        "fields": {
            "name": "The Ruins",
            "abbr": "Ruins",
            "electoral_votes": 0,
            "popular_votes": 6623,
            "poll_closing_time": 80,
            "winner_take_all_flg": 1,
            "election": "10"
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 12791,
        "fields": {
            "name": "The Wilds",
            "abbr": "Wilds",
            "electoral_votes": 0,
            "popular_votes": 2623,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": "10"
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 12801,
        "fields": {
            "name": "The Outskirts",
            "abbr": "Outskirts",
            "electoral_votes": 0,
            "popular_votes": 1452,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": "10"
        }
    }
];

campaignTrail_temp.issues_json = [
    {
        "model": "campaign_trail.issue",
        "pk": 12820,
        "fields": {
            "name": "Militia Enlistment",
            "description": "",
            "stance_1": "Mandatory Service",
            "stance_desc_1": "",
            "stance_2": "Pro-Conscription",
            "stance_desc_2": "",
            "stance_3": "Salute The Troops",
            "stance_desc_3": "",
            "stance_4": "Apathetic",
            "stance_desc_4": "",
            "stance_5": "Give Peace A Chance",
            "stance_desc_5": "",
            "stance_6": "Anti-War",
            "stance_desc_6": "",
            "stance_7": "Burning Draft Cards",
            "stance_desc_7": "",
            "election": 10
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 12829,
        "fields": {
            "name": "Economic State",
            "description": "",
            "stance_1": "Swimming Pools Of Money",
            "stance_desc_1": "",
            "stance_2": "Wealthy",
            "stance_desc_2": "",
            "stance_3": "Affluent",
            "stance_desc_3": "",
            "stance_4": "Not Broke",
            "stance_desc_4": "",
            "stance_5": "Broke",
            "stance_desc_5": "",
            "stance_6": "Impoverished",
            "stance_desc_6": "",
            "stance_7": "Destitute",
            "stance_desc_7": "",
            "election": 10
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 12838,
        "fields": {
            "name": "Democratization",
            "description": "",
            "stance_1": "Bring On Big Brother!",
            "stance_desc_1": "",
            "stance_2": "Machinist",
            "stance_desc_2": "",
            "stance_3": "Pro-Police",
            "stance_desc_3": "",
            "stance_4": "Apathetic",
            "stance_desc_4": "",
            "stance_5": "Anti-Police",
            "stance_desc_5": "",
            "stance_6": "Reform Activist",
            "stance_desc_6": "",
            "stance_7": "No Gods, No Masters",
            "stance_desc_7": "",
            "election": 10
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 12847,
        "fields": {
            "name": "Welfare",
            "description": "",
            "stance_1": "Scroogelike",
            "stance_desc_1": "",
            "stance_2": "Austere",
            "stance_desc_2": "",
            "stance_3": "Conservative",
            "stance_desc_3": "",
            "stance_4": "Quizzical",
            "stance_desc_4": "",
            "stance_5": "Sympathetic",
            "stance_desc_5": "",
            "stance_6": "Generous",
            "stance_desc_6": "",
            "stance_7": "Bleeding-Heart",
            "stance_desc_7": "",
            "election": 10
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 12856,
        "fields": {
            "name": "Drug Policy",
            "description": "",
            "stance_1": "Singaporean",
            "stance_desc_1": "",
            "stance_2": "Law And Order",
            "stance_desc_2": "",
            "stance_3": "Potheads Get A Job",
            "stance_desc_3": "",
            "stance_4": "Live And Let Live",
            "stance_desc_4": "",
            "stance_5": "A Disease, Not A Crime",
            "stance_desc_5": "",
            "stance_6": "Libertarian",
            "stance_desc_6": "",
            "stance_7": "Because I Got High",
            "stance_desc_7": "",
            "election": 10
        }
    }
];

campaignTrail_temp.state_issue_score_json = [
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12824,
        "fields": {
            "state": 12761,
            "issue": 12820,
            "state_issue_score": -0.55,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12825,
        "fields": {
            "state": 12771,
            "issue": 12820,
            "state_issue_score": -0.2,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12826,
        "fields": {
            "state": 12781,
            "issue": 12820,
            "state_issue_score": 0.35,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12827,
        "fields": {
            "state": 12791,
            "issue": 12820,
            "state_issue_score": 0.475,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12828,
        "fields": {
            "state": 12801,
            "issue": 12820,
            "state_issue_score": 0.25,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12833,
        "fields": {
            "state": 12761,
            "issue": 12829,
            "state_issue_score": -0.75,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12834,
        "fields": {
            "state": 12771,
            "issue": 12829,
            "state_issue_score": 0.15,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12835,
        "fields": {
            "state": 12781,
            "issue": 12829,
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12836,
        "fields": {
            "state": 12791,
            "issue": 12829,
            "state_issue_score": 0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12837,
        "fields": {
            "state": 12801,
            "issue": 12829,
            "state_issue_score": 0.7,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12842,
        "fields": {
            "state": 12761,
            "issue": 12838,
            "state_issue_score": -0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12843,
        "fields": {
            "state": 12771,
            "issue": 12838,
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12844,
        "fields": {
            "state": 12781,
            "issue": 12838,
            "state_issue_score": 0.2,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12845,
        "fields": {
            "state": 12791,
            "issue": 12838,
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12846,
        "fields": {
            "state": 12801,
            "issue": 12838,
            "state_issue_score": 0.8,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12851,
        "fields": {
            "state": 12761,
            "issue": 12847,
            "state_issue_score": -0.55,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12852,
        "fields": {
            "state": 12771,
            "issue": 12847,
            "state_issue_score": -0.05,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12853,
        "fields": {
            "state": 12781,
            "issue": 12847,
            "state_issue_score": 0.7,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12854,
        "fields": {
            "state": 12791,
            "issue": 12847,
            "state_issue_score": 0.55,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12855,
        "fields": {
            "state": 12801,
            "issue": 12847,
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12860,
        "fields": {
            "state": 12761,
            "issue": 12856,
            "state_issue_score": -0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12861,
        "fields": {
            "state": 12771,
            "issue": 12856,
            "state_issue_score": -0.25,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12862,
        "fields": {
            "state": 12781,
            "issue": 12856,
            "state_issue_score": 0.25,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12863,
        "fields": {
            "state": 12791,
            "issue": 12856,
            "state_issue_score": 0.35,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 12864,
        "fields": {
            "state": 12801,
            "issue": 12856,
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    }
];

campaignTrail_temp.candidate_issue_score_json = [
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12821,
        "fields": {
            "candidate": 91,
            "issue": 12820,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12822,
        "fields": {
            "candidate": 92,
            "issue": 12820,
            "issue_score": -0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12830,
        "fields": {
            "candidate": 91,
            "issue": 12829,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12831,
        "fields": {
            "candidate": 92,
            "issue": 12829,
            "issue_score": -0.6
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12839,
        "fields": {
            "candidate": 91,
            "issue": 12838,
            "issue_score": 0.55
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12840,
        "fields": {
            "candidate": 92,
            "issue": 12838,
            "issue_score": -0.55
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12848,
        "fields": {
            "candidate": 91,
            "issue": 12847,
            "issue_score": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12849,
        "fields": {
            "candidate": 92,
            "issue": 12847,
            "issue_score": -0.7
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12857,
        "fields": {
            "candidate": 91,
            "issue": 12856,
            "issue_score": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12858,
        "fields": {
            "candidate": 92,
            "issue": 12856,
            "issue_score": -0.7
        }
    }
];

campaignTrail_temp.running_mate_issue_score_json = [
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12823,
        "fields": {
            "candidate": 95,
            "issue": 12820,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12832,
        "fields": {
            "candidate": 95,
            "issue": 12829,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12841,
        "fields": {
            "candidate": 95,
            "issue": 12838,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12850,
        "fields": {
            "candidate": 95,
            "issue": 12847,
            "issue_score": 0
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 12859,
        "fields": {
            "candidate": 95,
            "issue": 12856,
            "issue_score": 0
        }
    }
];

campaignTrail_temp.candidate_state_multiplier_json = [
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12762,
        "fields": {
            "candidate": 91,
            "state": 12761,
            "state_multiplier": 0.75
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12763,
        "fields": {
            "candidate": 92,
            "state": 12761,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12772,
        "fields": {
            "candidate": 91,
            "state": 12771,
            "state_multiplier": 0.75
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12773,
        "fields": {
            "candidate": 92,
            "state": 12771,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12782,
        "fields": {
            "candidate": 91,
            "state": 12781,
            "state_multiplier": 0.75
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12783,
        "fields": {
            "candidate": 92,
            "state": 12781,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12792,
        "fields": {
            "candidate": 91,
            "state": 12791,
            "state_multiplier": 0.75
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12793,
        "fields": {
            "candidate": 92,
            "state": 12791,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12802,
        "fields": {
            "candidate": 91,
            "state": 12801,
            "state_multiplier": 0.75
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 12803,
        "fields": {
            "candidate": 92,
            "state": 12801,
            "state_multiplier": 1
        }
    }
];

campaignTrail_temp.answer_score_global_json = [
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1335,
        "fields": {
            "answer": 3523,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.25
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1386,
        "fields": {
            "answer": 3626,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 1387,
        "fields": {
            "answer": 3628,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12865,
        "fields": {
            "answer": 3509,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12870,
        "fields": {
            "answer": 3596,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12887,
        "fields": {
            "answer": 3614,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": -0.075
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12896,
        "fields": {
            "answer": 3627,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 12903,
        "fields": {
            "answer": 12902,
            "candidate": 91,
            "affected_candidate": 91,
            "global_multiplier": -0.025
        }
    }
];

campaignTrail_temp.answer_score_issue_json = [
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12871,
        "fields": {
            "answer": 3604,
            "issue": "12820",
            "issue_score": -0.2,
            "issue_importance": 1.5,
            "affected_candidate": 91,
            "affected_candidate_shift": -0.2,
            "affected_state": null,
            "affected_state_shift": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12872,
        "fields": {
            "answer": 3605,
            "issue": "12820",
            "issue_score": 0.3,
            "issue_importance": 1.5,
            "affected_candidate": null,
            "affected_candidate_shift": 0,
            "affected_state": null,
            "affected_state_shift": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12874,
        "fields": {
            "answer": 3606,
            "issue": "12820",
            "issue_score": 0.7,
            "issue_importance": 1.5,
            "affected_candidate": null,
            "affected_candidate_shift": 0,
            "affected_state": null,
            "affected_state_shift": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12876,
        "fields": {
            "answer": 3607,
            "issue": 12847,
            "issue_score": 0.5,
            "issue_importance": 2,
            "affected_candidate": "",
            "affected_candidate_shift": 0,
            "affected_state": null,
            "affected_state_shift": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12878,
        "fields": {
            "answer": 3608,
            "issue": 12829,
            "issue_score": 0.4,
            "issue_importance": 2,
            "affected_candidate": null,
            "affected_candidate_shift": 0,
            "affected_state": null,
            "affected_state_shift": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12879,
        "fields": {
            "answer": 3609,
            "issue": "12820",
            "issue_score": 0.4,
            "issue_importance": 2,
            "affected_candidate": null,
            "affected_candidate_shift": 0,
            "affected_state": null,
            "affected_state_shift": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12881,
        "fields": {
            "answer": 3610,
            "issue": 12838,
            "issue_score": 0.4,
            "issue_importance": 2,
            "affected_candidate": null,
            "affected_candidate_shift": 0,
            "affected_state": null,
            "affected_state_shift": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12883,
        "fields": {
            "answer": 3611,
            "issue": 12847,
            "issue_score": 0.5,
            "issue_importance": 1.5,
            "affected_candidate": null,
            "affected_candidate_shift": 0,
            "affected_state": null,
            "affected_state_shift": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12884,
        "fields": {
            "answer": 3612,
            "issue": 12847,
            "issue_score": 0.4,
            "issue_importance": 1.5,
            "affected_candidate": null,
            "affected_candidate_shift": 0,
            "affected_state": null,
            "affected_state_shift": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12885,
        "fields": {
            "answer": 3613,
            "issue": 12847,
            "issue_score": 0.2,
            "issue_importance": 1.5,
            "affected_candidate": null,
            "affected_candidate_shift": 0,
            "affected_state": null,
            "affected_state_shift": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12886,
        "fields": {
            "answer": 3614,
            "issue": 12847,
            "issue_score": -0.1,
            "issue_importance": 1.5,
            "affected_candidate": null,
            "affected_candidate_shift": 0,
            "affected_state": null,
            "affected_state_shift": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12888,
        "fields": {
            "answer": 3615,
            "issue": 12847,
            "issue_score": 0.4,
            "issue_importance": 2,
            "affected_candidate": null,
            "affected_candidate_shift": 0,
            "affected_state": null,
            "affected_state_shift": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12889,
        "fields": {
            "answer": 3616,
            "issue": "12820",
            "issue_score": 0.4,
            "issue_importance": 2,
            "affected_candidate": null,
            "affected_candidate_shift": 0,
            "affected_state": null,
            "affected_state_shift": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12890,
        "fields": {
            "answer": 3617,
            "issue": 12838,
            "issue_score": 0.4,
            "issue_importance": 2,
            "affected_candidate": null,
            "affected_candidate_shift": 0,
            "affected_state": null,
            "affected_state_shift": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12891,
        "fields": {
            "answer": 3618,
            "issue": 12829,
            "issue_score": 0.4,
            "issue_importance": 2,
            "affected_candidate": null,
            "affected_candidate_shift": 0,
            "affected_state": null,
            "affected_state_shift": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12892,
        "fields": {
            "answer": 3619,
            "issue": 12838,
            "issue_score": 0.3,
            "issue_importance": 1.5,
            "affected_candidate": null,
            "affected_candidate_shift": 0,
            "affected_state": null,
            "affected_state_shift": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12893,
        "fields": {
            "answer": 3620,
            "issue": 12838,
            "issue_score": 0.2,
            "issue_importance": 1.5,
            "affected_candidate": null,
            "affected_candidate_shift": 0,
            "affected_state": null,
            "affected_state_shift": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12894,
        "fields": {
            "answer": 3621,
            "issue": "12820",
            "issue_score": 0.15,
            "issue_importance": 1.5,
            "affected_candidate": null,
            "affected_candidate_shift": 0,
            "affected_state": null,
            "affected_state_shift": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12895,
        "fields": {
            "answer": 3622,
            "issue": "12820",
            "issue_score": 0.25,
            "issue_importance": 1.5,
            "affected_candidate": null,
            "affected_candidate_shift": 0,
            "affected_state": null,
            "affected_state_shift": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12897,
        "fields": {
            "answer": 3633,
            "issue": 12856,
            "issue_score": -0.1,
            "issue_importance": 1.5,
            "affected_candidate": null,
            "affected_candidate_shift": 0,
            "affected_state": null,
            "affected_state_shift": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12898,
        "fields": {
            "answer": 3634,
            "issue": 12856,
            "issue_score": 0.4,
            "issue_importance": 1.5,
            "affected_candidate": null,
            "affected_candidate_shift": 0,
            "affected_state": null,
            "affected_state_shift": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 12899,
        "fields": {
            "answer": 3632,
            "issue": 12856,
            "issue_score": 0.2,
            "issue_importance": 1.5,
            "affected_candidate": null,
            "affected_candidate_shift": 0,
            "affected_state": null,
            "affected_state_shift": 0
        }
    }
];

campaignTrail_temp.answer_score_state_json = [
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12875,
        "fields": {
            "answer": 3607,
            "state": 12771,
            "candidate": 91,
            "affected_candidate": 91,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12877,
        "fields": {
            "answer": 3608,
            "state": 12771,
            "candidate": 91,
            "affected_candidate": 91,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12880,
        "fields": {
            "answer": 3609,
            "state": 12771,
            "candidate": 91,
            "affected_candidate": 91,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12882,
        "fields": {
            "answer": 3610,
            "state": 12771,
            "candidate": 91,
            "affected_candidate": 91,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 12900,
        "fields": {
            "answer": 3635,
            "state": 12771,
            "candidate": 91,
            "affected_candidate": 91,
            "state_multiplier": 0.015
        }
    }
];

campaignTrail_temp.answer_feedback_json = [
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 999,
        "fields": {
            "answer": 3509,
            "candidate": 91,
            "answer_feedback": "Neo Ferrum has been a relatively stratified society for most of its existence, but under the Lewison dynasty things are getting worse, faster. It gives you an opening and them a reason to keep you down."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1003,
        "fields": {
            "answer": 3513,
            "candidate": 91,
            "answer_feedback": "It dawns on you quickly enough that this means the Radicals are having a caucus, where they will likely select a candidate to run against Lewison."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1006,
        "fields": {
            "answer": 3516,
            "candidate": 91,
            "answer_feedback": "Heads turn to face you, and the floor is yours."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1013,
        "fields": {
            "answer": 3523,
            "candidate": 91,
            "answer_feedback": "In the end, you are nominated by acclamation. Good luck, Ms. McCormick."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1018,
        "fields": {
            "answer": 3528,
            "candidate": 91,
            "answer_feedback": "''You probably don't even hear it when it happens, right?''"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1021,
        "fields": {
            "answer": 3531,
            "candidate": 91,
            "answer_feedback": "<i>''We're losing her! Hurry up!''</i>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1040,
        "fields": {
            "answer": 3596,
            "candidate": 91,
            "answer_feedback": "Your comrades from the rest of Neo Ferrum are mildly surprised; your family from the Wilds are relieved."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1048,
        "fields": {
            "answer": 3604,
            "candidate": 91,
            "answer_feedback": "This is a fairly conservative answer for a Radical, even if you yourself were shot not long ago. Most people aren't particularly happy with this, coming from you."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1049,
        "fields": {
            "answer": 3605,
            "candidate": 91,
            "answer_feedback": "This is a solid answer, and par for the course in the Radical Party. Though, some are slightly surprised you aren't changing your tone after what happened to you."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1050,
        "fields": {
            "answer": 3606,
            "candidate": 91,
            "answer_feedback": "Very dovish, but understandable given the circumstances. One of Lewison's biggest criticisms is how much he spends on the militia, given the fact it doesn't do anything right now."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1051,
        "fields": {
            "answer": 3607,
            "candidate": 91,
            "answer_feedback": "People are receptive to your plans, and all in all you have a successful day of door-knocking. You even swing a few voters over to your side."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1052,
        "fields": {
            "answer": 3608,
            "candidate": 91,
            "answer_feedback": "It's true; since the beginning of time, everyone has loved it when the pothole down the street gets filled. This is a good strategy, and you make a successful day of it."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1053,
        "fields": {
            "answer": 3609,
            "candidate": 91,
            "answer_feedback": "This is a good way to frame the conversation, though in the Towers more people are supportive of mild increases to the militia budget than not."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1054,
        "fields": {
            "answer": 3610,
            "candidate": 91,
            "answer_feedback": "It's touching, but ''democracy'' is simply not as motivating as pocketbook issues. Still, some people are convinced."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1055,
        "fields": {
            "answer": 3611,
            "candidate": 91,
            "answer_feedback": "This has been a hallmark of the Radical platform for years now, and it seems like this time you have a really good shot at actually getting it implemented."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1056,
        "fields": {
            "answer": 3612,
            "candidate": 91,
            "answer_feedback": "This is a unique idea among politicians today, but it's not a bad one per se. You may have more trouble getting it enacted if you win, however."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1057,
        "fields": {
            "answer": 3613,
            "candidate": 91,
            "answer_feedback": "Much like the Wilds themselves, you share a kindred spirit with past lives. Yours must've been involved in early 21st-century social democratic parties around the world."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1058,
        "fields": {
            "answer": 3614,
            "candidate": 91,
            "answer_feedback": "What kind of Radical are you?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1063,
        "fields": {
            "answer": 3619,
            "candidate": 91,
            "answer_feedback": "A Bill of Rights has been on the table for quite a while, but the Lewisons have consistently shot it down. If they're out of the picture, reform becomes much easier."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1064,
        "fields": {
            "answer": 3620,
            "candidate": 91,
            "answer_feedback": "A Bill of Rights has been on the table for quite a while, but the Lewisons have consistently shot it down. If they're out of the picture, reform becomes much easier."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1065,
        "fields": {
            "answer": 3621,
            "candidate": 91,
            "answer_feedback": "A Bill of Rights has been on the table for quite a while, but the Lewisons have consistently shot it down. If they're out of the picture, reform becomes much easier."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1066,
        "fields": {
            "answer": 3622,
            "candidate": 91,
            "answer_feedback": "A Bill of Rights has been on the table for quite a while, but the Lewisons have consistently shot it down. If they're out of the picture, reform becomes much easier."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1070,
        "fields": {
            "answer": 3626,
            "candidate": 91,
            "answer_feedback": "This was an excellent strategy - Lewison fumbled the ball on economics, and you were able to come off as professional and collected. Great job, Ellie."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1071,
        "fields": {
            "answer": 3627,
            "candidate": 91,
            "answer_feedback": "For a while, this was working, but you went too far. You came off as overly aggressive and, let's face it, emotional. At least it could have gone worse."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1072,
        "fields": {
            "answer": 3628,
            "candidate": 91,
            "answer_feedback": "Shockingly, this works out perfect. You stay on your feet and on the ball the whole time, going toe-to-toe with Lewison on every issue. Aside from a few stutters that you manage to play off, you have an excellent debate performance."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1076,
        "fields": {
            "answer": 3632,
            "candidate": 91,
            "answer_feedback": "This is a surprisingly even-handed take on such a hot-button issue, but it is appreciated - especially by those who've dealt with addiction in their lives and families."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1077,
        "fields": {
            "answer": 3633,
            "candidate": 91,
            "answer_feedback": "This kind of rhetoric is somewhat harsh for a Radical from the Wilds, but it plays over well with moderates."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1078,
        "fields": {
            "answer": 3634,
            "candidate": 91,
            "answer_feedback": "This is in line with your party, and expected from you. Some people still remember that time you showed up to Congress high as balls..."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 1079,
        "fields": {
            "answer": 3635,
            "candidate": 91,
            "answer_feedback": "Good luck, ma'am."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12869,
        "fields": {
            "answer": 3592,
            "candidate": 91,
            "answer_feedback": "<i>''She's stable. My God, we did it.</i>"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12901,
        "fields": {
            "answer": 3600,
            "candidate": 91,
            "answer_feedback": "You open the doors of the hospital and walk outside into the broad daylight."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 12904,
        "fields": {
            "answer": 12902,
            "candidate": 91,
            "answer_feedback": "You had a perfect chance and you blew it! "
        }
    }
];

campaignTrail_temp.candidate_image_url = "https://file.garden/aV8MTnSmtyzzckGy/tct%20images/belmontprofile.png";
campaignTrail_temp.running_mate_image_url = "https://file.garden/aV8MTnSmtyzzckGy/tct%20images/belmontprofile.png";
campaignTrail_temp.candidate_last_name = "McCormick";
campaignTrail_temp.running_mate_last_name = "Radicals";

campaignTrail_temp.jet_data = [{
    "nicknames": {
        "91": "E. McCormick",
        "92": "J. Lewison"
    },
    "banner_data": {
        "canName": "McCormick",
        "canImage": "https://file.garden/aV8MTnSmtyzzckGy/tct%20images/belmontprofile.png",
        "runName": "Radicals",
        "runImage": "https://file.garden/aV8MTnSmtyzzckGy/tct%20images/belmontprofile.png"
    },
    "mapping_data": {
        "dx": -285,
        "dy": 60,
        "x": 880.9523809523811,
        "y": 880.9523809523811
    },
    "mapping_enabled": true,
    "player_candidate": 91,
    "banner_enabled": true
}
]

