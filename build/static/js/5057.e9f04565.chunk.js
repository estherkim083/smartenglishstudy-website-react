"use strict";(self.webpackChunkreact_english_website=self.webpackChunkreact_english_website||[]).push([[5057],{79579:function(e,t,n){n.d(t,{Z:function(){return m}});n(72791);var o=n(81694),a=n.n(o),i=n(38317),r=n(89526),l=n(38302),c=n(4942),p=n(64996),s=function(e){var t,n,o;return{root:e.mixins.gutters({paddingTop:e.spacing(3),paddingBottom:e.spacing(3),marginBottom:e.spacing(3),boxShadow:e.shade.light,color:e.palette.text.primary,"&$noMargin":{margin:0},marginTop:"160px"}),descBlock:(0,c.Z)({display:"flex",alignItems:"center",marginBottom:e.spacing(5)},e.breakpoints.down("sm"),{marginBottom:e.spacing(3)}),titleText:{flex:1},title:(t={position:"relative",textTransform:"capitalize",fontSize:24,fontWeight:400,color:"dark"===e.palette.type?e.palette.primary.main:e.palette.primary.dark},(0,c.Z)(t,e.breakpoints.down("xs"),{textAlign:"center",fontWeight:600,marginBottom:e.spacing(1)}),(0,c.Z)(t,"fontFamily","CookieRun-Regular"),t),description:(n={maxWidth:960,paddingTop:e.spacing(.5)},(0,c.Z)(n,e.breakpoints.down("xs"),{textAlign:"center"}),(0,c.Z)(n,"fontFamily","CookieRun-Regular"),n),content:(0,c.Z)({marginTop:e.spacing(2),padding:e.spacing(1),borderRadius:e.rounded.medium,backgroundColor:e.palette.background.default},e.breakpoints.up("lg"),{padding:e.spacing(2)}),whiteBg:{backgroundColor:"transparent",margin:0,padding:0},noMargin:{},colorMode:{backgroundColor:"dark"===e.palette.type?e.palette.primary.dark:e.palette.primary.main,"& $title":{color:e.palette.grey[100],"&:after":{borderBottom:"5px solid ".concat(e.palette.primary.light)}},"& $description":{color:e.palette.grey[100]}},overflowX:{width:"100%",overflowX:"auto"},iconTitle:(o={borderRadius:e.rounded.small,border:"dark"===e.palette.type?"none":"1px solid ".concat((0,p.$n)(e.palette.primary.dark,.9)),boxShadow:"0 2px 15px -5px ".concat(e.palette.primary.main),background:"dark"===e.palette.type?e.palette.primary.main:(0,p.$n)(e.palette.primary.light,.5),width:48,height:48,textAlign:"center",lineHeight:"44px",verticalAlign:"middle",marginRight:e.spacing(3)},(0,c.Z)(o,e.breakpoints.down("xs"),{display:"none"}),(0,c.Z)(o,"& i",{fontSize:28,verticalAlign:"baseline",color:"dark"===e.palette.type?e.palette.common.white:e.palette.primary.main}),o)}},d=n(80184);function g(e){var t=e.classes,n=e.title,o=e.desc,i=e.children,c=e.whiteBg,p=e.noMargin,s=e.colorMode,g=e.overflowX,m=e.icon;return(0,d.jsx)("div",{children:(0,d.jsxs)(r.Z,{className:a()(t.root,p&&t.noMargin,s&&t.colorMode),elevation:0,children:[(0,d.jsxs)("div",{className:t.descBlock,children:[(0,d.jsx)("span",{className:t.iconTitle,children:(0,d.jsx)("i",{className:m})}),(0,d.jsxs)("div",{className:t.titleText,children:[(0,d.jsx)(l.Z,{variant:"h6",component:"h2",className:t.title,children:n}),(0,d.jsx)(l.Z,{component:"p",className:t.description,children:o})]})]}),(0,d.jsx)("section",{className:a()(t.content,c&&t.whiteBg,g&&t.overflowX),children:i})]})})}g.defaultProps={whiteBg:!1,noMargin:!1,colorMode:!1,overflowX:!1,icon:"ion-ios-bookmark-outline"};var m=(0,i.Z)(s)(g)},89877:function(e,t,n){var o=n(4942),a=n(55482),i=n(30294),r=n(64648),l=n(30979),c=n(64996);t.Z=function(e){var t,n,p,s;return{root:{flexGrow:1,minHeight:500,zIndex:1,position:"relative",backgroundColor:"dark"===e.palette.type?(0,c.U1)(e.palette.grey[800],.75):(0,c.U1)(e.palette.background.paper,.9),backdropFilter:"saturate(180%) blur(20px)",overflow:"hidden",display:"flex",marginBottom:e.spacing(3),borderRadius:e.rounded.medium,boxShadow:e.shade.light},submitButton:{backgroundColor:"dark"===e.palette.type?e.palette.primary.dark:e.palette.primary.main,color:(e.palette.type,e.palette.common.white),width:"8%",fontFamily:"CookieRun-Regular",fontSize:"15px",marginTop:"30px","&:hover":{backgroundColor:"dark"===e.palette.type?e.palette.primary.main:e.palette.primary.dark}},iconRed:{color:a.Z[500]},iconOrange:{color:i.Z[500]},iconBlue:{color:r.Z[500]},iconCyan:{color:l.Z[500]},appBar:(t={zIndex:130,background:"none"},(0,o.Z)(t,e.breakpoints.up("md"),{width:"calc(100% - ".concat(240,"px)")}),(0,o.Z)(t,"& button",{color:e.palette.primary.main,marginLeft:e.spacing(1)}),t),flex:{flex:1},wrapper:{fontFamily:e.typography.fontFamily,position:"relative",color:e.palette.text.secondary,borderRadius:e.rounded.big,boxShadow:e.shadows[2],background:e.palette.background.paper,border:"1px solid ".concat(e.palette.primary.main),margin:"".concat(e.spacing(2),"px 0")},addBtn:{position:"fixed",bottom:30,right:30,zIndex:1e3},sidebar:{zIndex:120},search:{width:e.spacing(9),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},input:{font:"inherit",padding:"".concat(e.spacing(1),"px ").concat(e.spacing(1),"px ").concat(e.spacing(1),"px ").concat(e.spacing(9),"px"),border:0,display:"block",verticalAlign:"middle",whiteSpace:"normal",background:"none",margin:0,color:"inherit",width:"100%","&:focus":{outline:0}},drawerPaper:(n={},(0,o.Z)(n,e.breakpoints.up("md"),{position:"relative"}),(0,o.Z)(n,"width",240),(0,o.Z)(n,"background","dark"===e.palette.type?(0,c._j)(e.palette.primary.light,.6):(0,c.$n)(e.palette.primary.light,.5)),(0,o.Z)(n,"border","none"),(0,o.Z)(n,"minHeight","100%"),n),selected:{background:"dark"===e.palette.type?(0,c._j)(e.palette.primary.light,.5):(0,c._j)(e.palette.primary.light,.05),borderLeft:"4px solid ".concat(e.palette.secondary.main),paddingLeft:20,"& h3":{color:e.palette.primary.dark}},content:(p={flexGrow:1,zIndex:120,marginBottom:e.spacing(8),marginTop:e.spacing(8),padding:e.spacing(1)},(0,o.Z)(p,e.breakpoints.up("md"),{padding:e.spacing(3),marginBottom:e.spacing(4)}),(0,o.Z)(p,"position","relative"),(0,o.Z)(p,"minWidth",0),p),toolbar:{padding:"".concat(e.spacing(2),"px ").concat(e.spacing(4),"px")},title:{width:205},divider:{margin:"0 20px 0 10px"},column:{flexBasis:"33.33%",overflow:"hidden",paddingRight:"0 !important",paddingTop:5,marginLeft:20},secondaryHeading:(0,o.Z)({fontSize:14,color:e.palette.text.secondary},e.breakpoints.down("xs"),{whiteSpace:"normal",paddingBottom:10}),icon:{verticalAlign:"bottom",height:20,width:20},details:(s={alignItems:"center"},(0,o.Z)(s,e.breakpoints.down("sm"),{padding:"".concat(e.spacing(1),"px ").concat(e.spacing(1),"px ").concat(e.spacing(3),"px")}),(0,o.Z)(s,"& section",{width:"100%"}),s),link:{color:e.palette.secondary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}},avatar:{},fromHeading:{overflow:"hidden",display:"flex",alignItems:"center",paddingLeft:e.spacing(1),"& $avatar":{width:30,height:30,marginRight:20}},topAction:{display:"flex",background:"dark"===e.palette.type?e.palette.grey[700]:e.palette.grey[100],marginBottom:20,alignItems:"center",padding:"0 20px",borderRadius:e.rounded.medium},category:{fontSize:12,textTransform:"uppercase",display:"flex","& svg":{fontSize:16,marginRight:5}},markMenu:{"& svg":{marginRight:10}},headMail:{flex:1},field:{width:"100%",marginTop:0,"& svg":{color:e.palette.grey[400],fontSize:18}},hiddenDropzone:{display:"none"},sendIcon:{marginLeft:10},item:{},preview:{display:"flex",marginBottom:20,"& $item":{maxWidth:160,marginBottom:5,marginRight:5}},emailSummary:{padding:0,"& > div":(0,o.Z)({},e.breakpoints.down("sm"),{flexDirection:"column"})},emailContent:(0,o.Z)({color:e.palette.text.primary,padding:e.spacing(2)},e.breakpoints.down("sm"),{padding:"".concat(e.spacing(2),"px ").concat(e.spacing(2),"px")}),starBtn:{marginRight:10},navIconHide:(0,o.Z)({},e.breakpoints.up("md"),{display:"none"}),textEditor:{background:e.palette.background.paper,minHeight:500,border:"1px solid ".concat(e.palette.divider),padding:"0 10px",color:e.palette.text.primary},toolbarEditor:{marginTop:"20px",background:e.palette.background.default,border:"none","& > div":{background:e.palette.background.paper,"& img":{filter:"dark"===e.palette.type?"invert(100%)":"invert(0%)"},"& a":{color:e.palette.text.primary,"& > div":{borderTopColor:e.palette.text.primary}}}},textPreview:{width:"100%",resize:"none",height:305,border:"1px solid ".concat(e.palette.divider),padding:e.spacing(.5)},buttonUpload:{marginRight:e.spacing()}}}},45057:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var o=n(72791),a=n(79579),i=n(38596),r=n(1288),l=n(1413),c=n(74165),p=n(93433),s=n(15861),d=n(29439),g=n(38317),m=n(72010),u=n(51802),h=n(199),x=n.n(h),f=n(38302),y=(n(32215),n(89877)),b=n(26513),v=n(97104),w=n(74569),k=n.n(w),Z=n(28931),j=n(15063),S=n(44290),I=n(81694),C=n.n(I),T=n(57831),R=n(52417),B=(n(79090),n(80184));function z(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=n.length,a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*o));return t}var M=(0,g.Z)(y.Z)((function(e){var t=e.classes,n="https://english-1.azurewebsites.net/",a=(0,Z.useParams)().id,i=(0,o.useState)(""),g=(0,d.Z)(i,2),h=g[0],y=g[1],w=(0,o.useState)("default/workshop.jpg"),I=(0,d.Z)(w,2),M=I[0],F=I[1],A=(0,T.uI)({onDrop:function(e){console.log(e[0].name.split("."));var t=e[0].name.split("."),n=t.length;"jpg"===t[n-1]||"png"===t[n-1]?(console.log(e),y(e[0]),ae(e[0])):console.log("cannot upload (\ud30c\uc77c\ud655\uc7a5\uc790\uac00 jpg \ub610\ub294 png \uc774\uc5b4\uc57c \ud55c\ub2e4.)")}}),D=(A.acceptedFiles,A.getRootProps),E=A.getInputProps,_=(0,o.useState)(null),N=(0,d.Z)(_,2),H=N[0],P=N[1],L=(0,o.useState)(null),W=(0,d.Z)(L,2),X=W[0],$=W[1],O=(0,o.useState)(null),U=(0,d.Z)(O,2),G=U[0],K=U[1],q=(0,o.useState)(!1),Q=(0,d.Z)(q,2),V=Q[0],Y=Q[1],J=(0,o.useState)((function(){return m.EditorState.createEmpty()})),ee=(0,d.Z)(J,2),te=ee[0],ne=ee[1],oe=function(){var e=(0,s.Z)((0,c.Z)().mark((function e(){var t,o,i,r,l,s,d;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=x()((0,m.convertToRaw)(te.getCurrentContent())),console.log(t),o=document.createElement("div"),document.body.appendChild(o),o.setAttribute("id","newDiv"),document.getElementById("newDiv").innerHTML=t,i=(0,p.Z)(document.getElementById("newDiv").children),r=i.map((function(e){var t=e.textContent.trim();return t+="\n"})),l="",s=0;s<r.length;s++)l+=r[s];console.log(l),null!=a&&void 0!==a?k().post(n+"writing/edit-essay-room/"+a,{topic:G,about_content:l,about_room:X,room_title:H,hash:M},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){})).then((function(e){window.location.href="/writing/essay/"})):(d="",d=""==M?"default/workshop.jpg":M,k().post(n+"writing/create-essay-room/",{topic:G,about_content:l,about_room:X,room_title:H,hash:d,email:localStorage.getItem("email")},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){})).then((function(e){window.location.href="/writing/essay/"})));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){Y(!0)})),(0,o.useEffect)((function(){V&&null!=a&&void 0!==a&&k().get(n+"writing/edit-essay-room/"+a,{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).then((function(e){var t=e.data.topic,n=e.data.about_room,o=e.data.about_content,a=e.data.room_title,i=e.data.hash;if(P(a),$(n),K(t),F(i),""!==o){var r="<div>".concat(o,"</div>");console.log(r),ne(m.EditorState.createWithContent(m.ContentState.createFromBlockArray((0,m.convertFromHTML)(r))))}})).catch((function(e){}))}),[V]);var ae=function(e){var t={contentType:"image/*"};if(null!=a&&void 0!==a){var n=M.split("/")[0];"default"==n&&(n=z(10));var o=(0,S.iH)(j.t,"posts/essayroom/".concat(n,"/").concat(e.name));(0,S.KV)(o,e,t).then((0,s.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("uploaded!!");case 1:case"end":return e.stop()}}),e)}))));var i="".concat(n,"/").concat(e.name);F(i)}else{var r=z(10),l=(0,S.iH)(j.t,"posts/essayroom/".concat(r,"/").concat(e.name));(0,S.KV)(l,e,t).then((0,s.Z)((0,c.Z)().mark((function e(){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("uploaded!!");case 1:case"end":return e.stop()}}),e)}))));var p="".concat(r,"/").concat(e.name);F(p)}};return(0,B.jsxs)(o.Fragment,{children:[(0,B.jsxs)(r.Z,{container:!0,alignItems:"flex-start",justify:"space-around",direction:"row",spacing:3,children:[(0,B.jsx)(r.Z,{item:!0,xs:12,children:(0,B.jsxs)("div",{children:[(0,B.jsx)("div",{className:"row preview"}),(0,B.jsx)("div",(0,l.Z)((0,l.Z)({},D()),{},{className:C()(t.dropItem,"dropZone"),children:(0,B.jsxs)("div",{className:"dropzoneTextStyle",children:[(0,B.jsx)("input",(0,l.Z)({},E())),(0,B.jsx)("div",{className:t.uploadIconSize,children:(0,B.jsx)(R.Z,{})})]})})),(0,B.jsxs)("h4",{style:{fontFamily:"CookieRun-Regular"},children:["ThumbnailFile Upload - ",h.name]})]})}),(0,B.jsx)(r.Z,{item:!0,xs:12,children:(0,B.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginTop:"0"},children:[(0,B.jsx)(f.Z,{component:"h6",style:{fontFamily:"CookieRun-Regular"},children:"Room Title :"}),(0,B.jsx)(v.Z,{placeholder:"\uae00\uc4f0\uae30 \ubc29 \uc774\ub984",inputProps:{"aria-label":"Description"},style:{margin:"20px",marginTop:"-6px",width:"500px"},value:H,onChange:function(e){P(e.target.value)}})]})}),(0,B.jsx)(r.Z,{item:!0,xs:12,children:(0,B.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginTop:"0"},children:[(0,B.jsx)(f.Z,{component:"h6",style:{fontFamily:"CookieRun-Regular"},children:"About Room :"}),(0,B.jsx)(v.Z,{placeholder:"\uae00\uc4f0\uae30 \ubc29\uc5d0 \uad00\ud574\uc11c.",inputProps:{"aria-label":"Description"},style:{margin:"20px",marginTop:"-6px",width:"500px"},value:X,onChange:function(e){$(e.target.value)}})]})}),(0,B.jsx)(r.Z,{item:!0,xs:12,children:(0,B.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginTop:"0"},children:[(0,B.jsx)(f.Z,{component:"h6",style:{fontFamily:"CookieRun-Regular"},children:"Writing Topic :"}),(0,B.jsx)(v.Z,{placeholder:"\uae00\uc4f0\uae30 \uc8fc\uc81c",inputProps:{"aria-label":"Description"},style:{margin:"20px",marginTop:"-6px",width:"500px"},value:G,onChange:function(e){K(e.target.value)}})]})}),(0,B.jsx)(r.Z,{item:!0,xs:12,children:(0,B.jsxs)("div",{style:{display:"flex",flexDirection:"column",margin:"3px"},children:[(0,B.jsx)(f.Z,{component:"h6",style:{fontFamily:"CookieRun-Regular"},children:"About Topic"}),(0,B.jsx)(u.Editor,{editorState:te,editorClassName:t.textEditor,toolbarClassName:t.toolbarEditor,onEditorStateChange:function(e){ne(e)}})]})})]}),(0,B.jsx)(b.Z,{className:t.submitButton,onClick:oe,children:"Finish"})]})})),F=(0,i.Z)((function(e){return{dropItem:{borderColor:e.palette.divider,background:e.palette.background.default,borderRadius:e.rounded.medium,color:e.palette.text.disabled,textAlign:"center"},uploadIconSize:{alignItems:"center","& svg":{width:72,height:72,fill:e.palette.secondary.main}}}}));var A=function(e){var t=F();return(0,o.useEffect)((function(){null===localStorage.getItem("user_name")&&(window.location.href="/auth/email"),localStorage.getItem("MyProfileOnce")&&localStorage.removeItem("MyProfileOnce"),localStorage.getItem("ChatMessageOnce")&&localStorage.removeItem("ChatMessageOnce")})),(0,B.jsx)("div",{children:(0,B.jsx)(a.Z,{title:"EssayWriting Menu",whiteBg:!0,icon:"ion-ios-grid-outline",desc:"\r \uc601\uc5b4\uc5d0\uc138\uc774 \uae00\uc4f0\uae30 \ubc29 \uc0dd\uc131 \ud654\uba74\uc785\ub2c8\ub2e4. \uc601\uc5b4 \uc5d0\uc138\uc774 \uae00\uc4f0\uae30 \ubc29\uc744 \uc0dd\uc131\ud574\ubcf4\uc138\uc694. ",children:(0,B.jsx)(o.Fragment,{children:(0,B.jsx)(r.Z,{container:!0,alignItems:"stretch",justify:"space-around",direction:"row",spacing:3,children:(0,B.jsx)(r.Z,{item:!0,xs:12,children:(0,B.jsx)(M,{classes:t})})})})})})}},15063:function(e,t,n){n.d(t,{db:function(){return c},t:function(){return p}});var o=n(72426),a=n(80797),i=n(69018),r=n(43014),l=(0,o.C6)().length?(0,o.Mq)():(0,o.ZF)({apiKey:"AIzaSyDXlEPMQYhq7o6x21RwfPBQh3sHxo0p4dI",authDomain:"english-website-362600.firebaseapp.com",projectId:"english-website-362600",storageBucket:"english-website-362600.appspot.com",messagingSenderId:"790842426643",appId:"1:790842426643:web:f45d23c026b573e55686e6",measurementId:"G-LX8PL19HD7"}),c=((0,a.IH)(l),(0,r.ad)()),p=(0,i.cF)()},32215:function(){},79090:function(){}}]);
//# sourceMappingURL=5057.e9f04565.chunk.js.map