(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{191:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(29),i=a.n(s),r=a(12),c=a(13),l=a(16),d=a(14),m=a(17),p=a(2),u=a(15),h=a(36),b=a.n(h),g=a(37),f=a.n(g),x=a(30),w=a.n(x),y=a(23),k=a.n(y),_=a(27),j=a.n(_),v=a(38),O=a.n(v),S=a(24),I=a.n(S),C=a(3),Q=a.n(C),B=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return n.a.createElement("div",{className:e.overly},n.a.createElement(j.a,{className:e.favoriteIcon}))}}]),t}(n.a.Component);B.prototypes={classes:Q.a.object.isRequired};var E=Object(u.withStyles)(function(e){return{favoriteIcon:{width:"100%",height:"626px",color:"#8b9cce"},overly:{position:"fixed",top:0,bottom:0,left:0,right:0,background:"rgb(0,0,0,0.7)",transition:"all 0.3s ease-in"}}})(B),N=a(77),z=a.n(N),A=a(80),T=a.n(A),W=a(79),R=a.n(W),J=a(78),L=a.n(J),F=a(81),H=a.n(F),V=function(e){function t(e){var a;Object(r.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).updateUserCom=function(e){a.setState({userComment:e.target.value})},a.updateUserName=function(e){a.setState({userName:e.target.value})},a.addComment=function(e){if(13===e.charCode){var t=a.state,o=t.userComment,n=t.userName,s=t.comment,i=t.data;void 0===s[i.code]&&(s[i.code]=[]);var r={};r.text=o,r.user=n,s[i.code].push(r),a.setState(function(e){return{comment:s,totalComments:e.totalComments+1}})}};var o=e.comment,n=e.data;return a.state={userName:"",userComment:"",comment:o,data:n,totalComments:o[n.code]?o[n.code].length:0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,o=t.data,s=this.state.totalComments;return n.a.createElement("div",{className:a.overly},n.a.createElement("div",{className:a.popup},n.a.createElement(z.a,{className:a.clearDeleteBox,onClick:function(){return e.props.dontShowCommentBox()}}),n.a.createElement(b.a,{className:a.card},n.a.createElement(f.a,{className:a.media,image:"images/"+o.display_src}),n.a.createElement(k.a,{component:"p",className:a.caption},o.caption),n.a.createElement(w.a,{className:a.actions},n.a.createElement(I.a,{variant:"outlined",component:"span",className:a.button,onClick:function(){return e.props.increaseLikes(o)}},n.a.createElement(j.a,{className:a.favoriteIcon}),o.likes),n.a.createElement(I.a,{variant:"outlined",component:"span",className:a.chatBtn},n.a.createElement(O.a,null),s))),n.a.createElement("div",{className:a.listOfComment},this.state.comment[o.code].map(function(e,t){return n.a.createElement(L.a,{key:t},n.a.createElement(R.a,{button:!0},n.a.createElement(T.a,{primary:e.user,secondary:e.text})),n.a.createElement(H.a,null))}),n.a.createElement(w.a,null,n.a.createElement("input",{placeholder:"user",value:this.state.userName,onChange:this.updateUserName,className:a.commentInputs}),n.a.createElement("input",{placeholder:"comment",value:this.state.userComment,onChange:this.updateUserCom,className:a.commentInputs,onKeyPress:this.addComment})))))}}]),t}(n.a.Component);V.prototypes={classes:Q.a.object.isRequired};var Y=Object(u.withStyles)(function(e){var t,a,o,n;return{overly:{position:"fixed",top:0,bottom:0,left:0,right:0,background:"rgb(0,0,0,0.7)",transition:"opacity 500ms"},popup:(t={margin:"70px auto",padding:"20px",background:"#fff",borderRadius:"5px",width:"55%",height:"74%",overflow:"auto",boxSizing:"border-box",position:"relative",transition:"all 5s ease-in-out"},Object(p.a)(t,e.breakpoints.down("md"),{width:"70%"}),Object(p.a)(t,e.breakpoints.down("sm"),{width:"86%"}),Object(p.a)(t,e.breakpoints.down("xs"),{width:"90%"}),t),clearDeleteBox:{float:"right",marginTop:"-16px",marginRight:"-15px"},card:(a={maxWidth:568,float:"left",width:"70%",boxShadow:"none"},Object(p.a)(a,e.breakpoints.down("md"),{width:"100%",float:"none",maxWidth:668}),Object(p.a)(a,e.breakpoints.down("sm"),{float:"none",width:"100%",maxWidth:668}),Object(p.a)(a,e.breakpoints.down("xs"),{float:"none",width:"100%",maxWidth:668}),a),media:(o={height:584},Object(p.a)(o,e.breakpoints.down("md"),{height:724}),Object(p.a)(o,e.breakpoints.down("sm"),{height:686}),Object(p.a)(o,e.breakpoints.down("xs"),{height:336}),o),button:{borderRadius:"2px",padding:"3% 20%",fontSize:"18px",color:"#3c5baf"},actions:{justifyContent:"center"},chatBtn:{borderRadius:"2px",padding:"3% 20%",left:"2%",color:"#3c5baf"},favoriteIcon:{fontSize:"20px"},listOfComment:(n={float:"right",width:"38%",marginTop:"44px"},Object(p.a)(n,e.breakpoints.down("md"),{float:"none",width:"100%"}),Object(p.a)(n,e.breakpoints.down("sm"),{float:"none",width:"100%"}),Object(p.a)(n,e.breakpoints.down("xs"),{float:"none",width:"100%"}),Object(p.a)(n,"caption",{paddingTop:"18px",fontSize:"16px"}),n),commentInputs:{width:"100%"}}})(V),q=[{code:"BAcyDyQwcXX",caption:"Lunch #hamont",likes:56,id:"1161022966406956503",display_src:"12552326_495932673919321_1443393332_n.jpg"},{code:"BAcJeJrQca9",caption:"Snow! \u26c4\ufe0f\ud83c\udf28\u2744\ufe0f #lifewithsnickers",likes:59,id:"1160844458347054781",display_src:"12407344_1283694208323785_735653395_n.jpg"},{code:"BAF_KY4wcRY",caption:"Cleaned my office and mounted my recording gear overhead. Stoked for 2016!",likes:79,id:"1154606670337393752",display_src:"923995_1704188643150533_1383710275_n.jpg"},{code:"BAPIPRjQce9",caption:"Making baby pancakes for one early rising baby. \u2615\ufe0f\ud83c\udf74",likes:47,id:"1157179863266871229",display_src:"12407480_1654828594805097_152207166_n.jpg"},{code:"-hZh6IQcfN",caption:"New Stickers just came in. I'll do another mailing in a few weeks if you want some. #javascript",likes:66,id:"1126293663140399053",display_src:"11875511_1562439187344831_813588280_n.jpg"},{code:"-B3eiIwcYV",caption:"Tacos for breakfast. I love you Austin. \ud83c\uddfa\ud83c\uddf8",likes:33,id:"1117418173361145365",display_src:"11917950_927755223968499_1198055371_n.jpg"},{code:"BAhvZrRwcfu",caption:"Tried poke for the first time at @pokehbar. Delicious! It's like a bowl of sushi",likes:30,id:"1162418651480049646",display_src:"12501993_1504179163220771_2060674913_n.jpg"},{code:"BAAJqbOQcW5",caption:"Brunchin'",likes:40,id:"1152964002473690553",display_src:"1516572_445736812276082_2116173059_n.jpg"},{code:"_4jHytwcUA",caption:"2015 can be summed up with one baby and a many lines of code. And sometimes a coding baby. \ud83d\udc76\ud83c\udffc\u2328",likes:62,id:"1150824171912152320",display_src:"10723795_1149927178351091_1859033096_n.jpg"},{code:"_zbaOlQcbn",caption:"Lekker Chocoladeletter",likes:52,id:"1149382879529256679",display_src:"12346073_1035047523184672_768982339_n.jpg"},{code:"_rmvQfQce8",caption:"Just discovered the #hamont farmers market has a new ramen place! \ud83c\udf5c",likes:35,id:"1147180903383025596",display_src:"12331739_1671776806423597_995664526_n.jpg"},{code:"_ep9kiQcVy",caption:"\u26c4\ufe0f",likes:64,id:"1143535906423162226",display_src:"12354078_447337935474115_1484398925_n.jpg"},{code:"_XpJcrwcSn",caption:"6 page spread on flexbox in this months netmag!",likes:74,id:"1141561999742846119",display_src:"12362588_1688046211438811_1395882545_n.jpg"},{code:"_KnU7MwceA",caption:"Hanging out in my office waiting for 5:00 beers to come around.",likes:54,id:"1137894817632733056",display_src:"12301208_1533749386944985_1334730917_n.jpg"},{code:"_HMejJQcY5",caption:"Today I learned that a long pull espresso is called a 'lungo'",likes:18,id:"1136932306813044281",display_src:"12357319_493317964181479_310198908_n.jpg"},{code:"_Fq2zmwcaz",caption:"Awesome hand lettered gift from @eunibae and the HackerYou crew.",likes:48,id:"1136502965197194931",display_src:"12317458_1692845870986430_331905833_n.jpg"},{code:"_A2r0aQcfD",caption:"Some serious hardware meet JavaScript hacks going down this week at hackeryou. Excited for demo day!",likes:57,id:"1135147611821557699",display_src:"12276809_750065668431999_184252508_n.jpg"},{code:"-1rhFawccs",caption:"Some major audio upgrades coming to my next videos \ud83d\ude0d",likes:39,id:"1132002270913873708",display_src:"12331333_1650987978502155_1162510634_n.jpg"},{code:"-pjx-gQcVi",caption:"My baby and me. Thanks to @bearandsparrow for this one.",likes:81,id:"1128590547628442978",display_src:"12298962_863814057068027_460827278_n.jpg"},{code:"-oTZ0zQcWt",caption:"It's too early. Send coffee.",likes:81,id:"1128237044221461933",display_src:"12328347_990748230999662_1512917342_n.jpg"},{code:"-mxKQoQcQh",caption:"They both have figured it out. #lifewithsnickers",likes:47,id:"1127804966031967265",display_src:"12256736_1758525004381641_1136705181_n.jpg"},{code:"-fasqlQceO",caption:"Kaitlin decorated the house for the Christmas. So gezellig! #casabos",likes:46,id:"1125735850454402958",display_src:"12277581_1028556737218368_1184190781_n.jpg"},{code:"-VBgtGQcSf",caption:"Trying the new Hamilton Brewery beer. Big fan.",likes:27,id:"1122810327591928991",display_src:"12224456_175248682823294_1558707223_n.jpg"},{code:"-FpTyHQcau",caption:"I'm in Austin for a conference and doing some training. Enjoying some local brew with my baby.",likes:82,id:"1118481761857291950",display_src:"11326072_550275398458202_1726754023_n.jpg"}],D={BAhvZrRwcfu:[{text:"Totally need to try this.",user:"heavymetaladam"}],BAcJeJrQca9:[],"-hZh6IQcfN":[],"-B3eiIwcYV":[],BAAJqbOQcW5:[],"-1rhFawccs":[],"-pjx-gQcVi":[],"-oTZ0zQcWt":[],"-mxKQoQcQh":[],"-fasqlQceO":[],"-VBgtGQcSf":[],"-FpTyHQcau":[],BAcyDyQwcXX:[{text:"Wes. WE should have lunch.",user:"jdaveknox"},{text:"#adults",user:"jdaveknox"},{text:"@jdaveknox yes!",user:"wesbos"},{text:"\ud83d\ude0d love Hamilton!",user:"willowtreemegs"}],BAPIPRjQce9:[{text:"Those are cute! They're like silver dollar pancakes.",user:"rrsimonsen"},{text:"I like baby pancakes but gluten free please!! I'll bring the coffee!! See you in 6 days!!!!!! \ud83d\ude1d\ud83d\ude1b\ud83d\ude1d\u2665\ufe0f",user:"terzisn"},{text:"... and apparently growing baby. \ud83d\udc40. Yum.",user:"henrihelvetica"},{text:"@wesbos \ud83d\udc4d my daughter is a pancake eating machine!",user:"brentoage"},{text:"Nice stove!",user:"haaps"},{text:"Genius bottle use! Do you make a single batch of batter or make a lot and freeze it?",user:"gobananna"},{text:"@gobananna I just made a batch and put in in a FIFO bottle. Keeps in the fridge for a few days.",user:"wesbos"},{text:"@haaps thanks! It's a Jenn air - so nice to cool with!",user:"wesbos"},{text:"Where would you go and for how long, if you had location freedom? - Greg \ud83c\udf0e",user:"world_greg"}],BAF_KY4wcRY:[{text:"Looking great Wes! I'd like to see the other side of the room too.",user:"axcdnt"},{text:"I've never caught your podcast. Have one right? Btw - they don't have a Canary pillow? \ud83d\ude1d",user:"henrihelvetica"},{text:"Great way to start the year.",user:"pmgllc"},{text:"Are there 4k monitors?",user:"alexbaumgertner"},{text:"@axcdnt that is where I put all the junk. I'll have to clean that side too @henrihelvetica no podcast yet! @pmgllc ohh yeah! @alexbaumgertner yep - the main one is 4K - I'm loving it",user:"wesbos"},{text:"That chrome pillow. \ud83d\ude09",user:"imagesofthisandthat"},{text:"@wesbos is that the Dell 4k? The MacBook Pro powers it well? I also have a Retina\u2122 / x1 setup as well. Very handy.",user:"henrihelvetica"},{text:"#minimalsetups",user:"wesbos"}],_4jHytwcUA:[{text:"that is the sound of success!",user:"mdxprograms"}],_zbaOlQcbn:[{text:"Did she get to eat her letter?",user:"pathiebert"},{text:"Nope @pathiebert! She has too much teeth now (8) so that would definitely be her first cavity \ud83d\ude09",user:"kaitbos"}],_rmvQfQce8:[{text:"A+",user:"mrjoedee"},{text:"I recently went to a ramen place in Philly. So amazing!",user:"jrtashjian"}],_ep9kiQcVy:[{text:"All bundled up!  Where ya goin?",user:"sophie_and_sadie"}],_XpJcrwcSn:[{text:"Super congrats! That's wicked cool and looks great.",user:"pmgllc"},{text:"real live paper magazine? woah haha. flex box is awesome though, could rage quit without it",user:"tjholowaychuk2"},{text:"@tjholowaychuk2 haha yes! Old school stylez!",user:"wesbos"}],_KnU7MwceA:[],_HMejJQcY5:[{text:"\ud83d\udc4c",user:"t_volpe"},{text:"Nice shot, mister!",user:"imagesofthisandthat"}],_Fq2zmwcaz:[{text:"\ud83d\ude0d",user:"melsariffodeen"},{text:"Very cool!",user:"ka11away"}],_A2r0aQcfD:[{text:"Uhu!",user:"lucascaixeta"}],"1rhFawccs":[{text:"What's your lighting source?",user:"seth_mcleod"},{text:"And what are you using for XLR mix adapter? I found a big price jump between $55 range and $170 range.",user:"pmgllc"},{text:"I still need a desk boom for mine mic. Nice upgrades",user:"stolinski"}],"pjx-gQcVi":[],oTZ0zQcWt:[{text:"Love the coat! Where's it from? Lol",user:"_lindersss"}],mxKQoQcQh:[],hZh6IQcfN:[{text:"What do we gotta do to get some :)? @wesbos",user:"jonasbad"},{text:"Might drop by today - real quick. Trade you an illegal pin for these? Lol. @wesbos",user:"henrihelvetica"},{text:"I'm with @jonasbad on this. What we gotta do? :D",user:"datamoshr"},{text:"@jonasbad @datamoshr I'll post them up on my blog soon!",user:"wesbos"},{text:"Want",user:"kamuelafranco"},{text:"want!",user:"josemanuelxyz"},{text:"#Top",user:"gabrielvieira.me"}],fasqlQceO:[{text:"Where's lux at? \ud83d\udca4?",user:"henrihelvetica"},{text:"Love this house during the holidays! And all other times of the year...",user:"danielleplas"}],VBgtGQcSf:[{text:"@dogsandbrew",user:"likea_bos"},{text:"Next on my list!",user:"tomwalsham"},{text:"Is that from collective arts ?",user:"trevorb_91"}],FpTyHQcau:[{text:"@kaitbos  that vest!!! \ud83d\ude0d",user:"courtneyeveline"},{text:"I just love her! @kaitbos",user:"kalibrix"},{text:"@courtneyeveline I know! My friend gave it to her and I wanted a matching one but only Lux can pull it off. She's so fancy \ud83d\ude09",user:"kaitbos"},{text:"Char has that vest!!! Super cute!",user:"jennlensink"},{text:"You'll have to meet her soon @kalibrix!!",user:"kaitbos"},{text:"Haha @kaitbos so true, babies these days are sooo stylish. \ud83d\ude0e",user:"courtneyeveline"},{text:"JavaScript \ud83d\ude04\ud83d\ude06\ud83d\ude4b",user:"lucascaixeta"},{text:"That hoodie is amazing! Where did you get it?",user:"br11x"},{text:"@br11x I did a teespring a few months ago - maybe I'll do another one soon",user:"wesbos"}],B3eiIwcYV:[{text:"If you get in the mood for authentic Italian pizza, check out @backspaceaustin - it's\ud83d\udc4c\ud83c\udffb",user:"dessie.ann"},{text:"\ud83d\ude31 jealous",user:"jenngbrewer"}]},K=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).increaseLikes=function(e){e.likes=e.likes+1,a.setState({likeInc:a.state.likeInc+1,open:!0}),setTimeout(function(){a.setState({open:!1})},300)},a.showCommentBox=function(e){a.setState({openCommentBox:!0,data:e})},a.dontShowCommentBox=function(){a.setState({openCommentBox:!1,data:null})},a.state={open:!1,openCommentBox:!1,data:null,comment:D},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state.comment;return n.a.createElement("div",{className:t.root},q.map(function(o,s){return n.a.createElement(b.a,{className:t.card,key:s},n.a.createElement(f.a,{className:t.media,image:"images/"+o.display_src}),n.a.createElement(k.a,{component:"p",className:t.caption},o.caption),n.a.createElement(w.a,{className:t.actions,disableActionSpacing:!0},n.a.createElement(I.a,{variant:"outlined",component:"span",className:t.button,onClick:function(){return e.increaseLikes(o)}},n.a.createElement(j.a,{className:t.favoriteIcon}),o.likes),n.a.createElement(I.a,{variant:"outlined",component:"span",className:t.chatBtn,onClick:function(){return e.showCommentBox(o)}},n.a.createElement(O.a,null),a[o.code].length)))}),!0===this.state.open?n.a.createElement(E,null):null,!0===this.state.openCommentBox?n.a.createElement(Y,{dontShowCommentBox:this.dontShowCommentBox,data:this.state.data,comment:this.state.comment,increaseLikes:this.increaseLikes}):null)}}]),t}(o.Component),M=Object(u.withStyles)(function(e){var t,a,o;return{root:(t={display:"grid",width:"100%",height:"100%",gridTemplateColumns:"22.5% 22.5% 22.5%",justifyContent:"center"},Object(p.a)(t,e.breakpoints.down("md"),{gridTemplateColumns:"96%"}),Object(p.a)(t,e.breakpoints.down("sm"),{gridTemplateColumns:"96%"}),Object(p.a)(t,e.breakpoints.down("xs"),{gridTemplateColumns:"96%"}),t),card:Object(p.a)({maxWidth:362,marginBottom:"30px",border:"4px solid #dbdbf169"},e.breakpoints.down("md"),{maxWidth:960}),media:(a={height:344},Object(p.a)(a,e.breakpoints.down("md"),{height:724}),Object(p.a)(a,e.breakpoints.down("sm"),{height:686}),Object(p.a)(a,e.breakpoints.down("xs"),{height:336}),a),button:{borderRadius:"2px",padding:"3% 20%",fontSize:"18px",color:"#3c5baf"},actions:{justifyContent:"center"},chatBtn:{borderRadius:"2px",padding:"3% 20%",left:"2%",color:"#3c5baf"},favoriteIcon:{fontSize:"16px"},caption:(o={paddingTop:"18px",fontSize:"16px"},Object(p.a)(o,e.breakpoints.down("md"),{fontSize:"22px"}),Object(p.a)(o,e.breakpoints.down("xs"),{fontSize:"18px"}),o)}})(K),U=a(51),Z=a.n(U),P=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return n.a.createElement("div",{className:e.root},n.a.createElement(Z.a,{container:!0},n.a.createElement(Z.a,{item:!0,xs:12},n.a.createElement(k.a,{className:e.heading},"Reactgram"))),n.a.createElement(M,null))}}]),t}(o.Component),X=Object(u.withStyles)(function(e){var t;return{root:{width:"100%",maxWidth:"100%"},heading:(t={textAlign:"center",fontFamily:"'Berkshire Swash', cursive",color:"#2e3c87",fontSize:"102px",paddingBottom:"30px"},Object(p.a)(t,e.breakpoints.down("md"),{fontSize:"76px"}),Object(p.a)(t,e.breakpoints.down("sm"),{fontSize:"40px"}),Object(p.a)(t,e.breakpoints.down("xs"),{fontSize:"34px"}),t)}})(P);i.a.render(n.a.createElement(X,null),document.getElementById("root"))},82:function(e,t,a){e.exports=a(191)}},[[82,2,1]]]);
//# sourceMappingURL=main.5388a31f.chunk.js.map