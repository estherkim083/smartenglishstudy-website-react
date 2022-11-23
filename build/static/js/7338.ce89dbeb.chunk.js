"use strict";(self.webpackChunkreact_english_website=self.webpackChunkreact_english_website||[]).push([[7338],{79579:function(e,t,n){n.d(t,{Z:function(){return m}});n(72791);var o=n(81694),a=n.n(o),i=n(38317),r=n(89526),l=n(38302),c=n(4942),s=n(64996),p=function(e){var t,n,o;return{root:e.mixins.gutters({paddingTop:e.spacing(3),paddingBottom:e.spacing(3),marginBottom:e.spacing(3),boxShadow:e.shade.light,color:e.palette.text.primary,"&$noMargin":{margin:0},marginTop:"160px"}),descBlock:(0,c.Z)({display:"flex",alignItems:"center",marginBottom:e.spacing(5)},e.breakpoints.down("sm"),{marginBottom:e.spacing(3)}),titleText:{flex:1},title:(t={position:"relative",textTransform:"capitalize",fontSize:24,fontWeight:400,color:"dark"===e.palette.type?e.palette.primary.main:e.palette.primary.dark},(0,c.Z)(t,e.breakpoints.down("xs"),{textAlign:"center",fontWeight:600,marginBottom:e.spacing(1)}),(0,c.Z)(t,"fontFamily","CookieRun-Regular"),t),description:(n={maxWidth:960,paddingTop:e.spacing(.5)},(0,c.Z)(n,e.breakpoints.down("xs"),{textAlign:"center"}),(0,c.Z)(n,"fontFamily","CookieRun-Regular"),n),content:(0,c.Z)({marginTop:e.spacing(2),padding:e.spacing(1),borderRadius:e.rounded.medium,backgroundColor:e.palette.background.default},e.breakpoints.up("lg"),{padding:e.spacing(2)}),whiteBg:{backgroundColor:"transparent",margin:0,padding:0},noMargin:{},colorMode:{backgroundColor:"dark"===e.palette.type?e.palette.primary.dark:e.palette.primary.main,"& $title":{color:e.palette.grey[100],"&:after":{borderBottom:"5px solid ".concat(e.palette.primary.light)}},"& $description":{color:e.palette.grey[100]}},overflowX:{width:"100%",overflowX:"auto"},iconTitle:(o={borderRadius:e.rounded.small,border:"dark"===e.palette.type?"none":"1px solid ".concat((0,s.$n)(e.palette.primary.dark,.9)),boxShadow:"0 2px 15px -5px ".concat(e.palette.primary.main),background:"dark"===e.palette.type?e.palette.primary.main:(0,s.$n)(e.palette.primary.light,.5),width:48,height:48,textAlign:"center",lineHeight:"44px",verticalAlign:"middle",marginRight:e.spacing(3)},(0,c.Z)(o,e.breakpoints.down("xs"),{display:"none"}),(0,c.Z)(o,"& i",{fontSize:28,verticalAlign:"baseline",color:"dark"===e.palette.type?e.palette.common.white:e.palette.primary.main}),o)}},d=n(80184);function g(e){var t=e.classes,n=e.title,o=e.desc,i=e.children,c=e.whiteBg,s=e.noMargin,p=e.colorMode,g=e.overflowX,m=e.icon;return(0,d.jsx)("div",{children:(0,d.jsxs)(r.Z,{className:a()(t.root,s&&t.noMargin,p&&t.colorMode),elevation:0,children:[(0,d.jsxs)("div",{className:t.descBlock,children:[(0,d.jsx)("span",{className:t.iconTitle,children:(0,d.jsx)("i",{className:m})}),(0,d.jsxs)("div",{className:t.titleText,children:[(0,d.jsx)(l.Z,{variant:"h6",component:"h2",className:t.title,children:n}),(0,d.jsx)(l.Z,{component:"p",className:t.description,children:o})]})]}),(0,d.jsx)("section",{className:a()(t.content,c&&t.whiteBg,g&&t.overflowX),children:i})]})})}g.defaultProps={whiteBg:!1,noMargin:!1,colorMode:!1,overflowX:!1,icon:"ion-ios-bookmark-outline"};var m=(0,i.Z)(p)(g)},89877:function(e,t,n){var o=n(4942),a=n(55482),i=n(30294),r=n(64648),l=n(30979),c=n(64996);t.Z=function(e){var t,n,s,p;return{root:{flexGrow:1,minHeight:500,zIndex:1,position:"relative",backgroundColor:"dark"===e.palette.type?(0,c.U1)(e.palette.grey[800],.75):(0,c.U1)(e.palette.background.paper,.9),backdropFilter:"saturate(180%) blur(20px)",overflow:"hidden",display:"flex",marginBottom:e.spacing(3),borderRadius:e.rounded.medium,boxShadow:e.shade.light},submitButton:{backgroundColor:"dark"===e.palette.type?e.palette.primary.dark:e.palette.primary.main,color:(e.palette.type,e.palette.common.white),width:"8%",fontFamily:"CookieRun-Regular",fontSize:"15px",marginTop:"30px","&:hover":{backgroundColor:"dark"===e.palette.type?e.palette.primary.main:e.palette.primary.dark}},iconRed:{color:a.Z[500]},iconOrange:{color:i.Z[500]},iconBlue:{color:r.Z[500]},iconCyan:{color:l.Z[500]},appBar:(t={zIndex:130,background:"none"},(0,o.Z)(t,e.breakpoints.up("md"),{width:"calc(100% - ".concat(240,"px)")}),(0,o.Z)(t,"& button",{color:e.palette.primary.main,marginLeft:e.spacing(1)}),t),flex:{flex:1},wrapper:{fontFamily:e.typography.fontFamily,position:"relative",color:e.palette.text.secondary,borderRadius:e.rounded.big,boxShadow:e.shadows[2],background:e.palette.background.paper,border:"1px solid ".concat(e.palette.primary.main),margin:"".concat(e.spacing(2),"px 0")},addBtn:{position:"fixed",bottom:30,right:30,zIndex:1e3},sidebar:{zIndex:120},search:{width:e.spacing(9),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},input:{font:"inherit",padding:"".concat(e.spacing(1),"px ").concat(e.spacing(1),"px ").concat(e.spacing(1),"px ").concat(e.spacing(9),"px"),border:0,display:"block",verticalAlign:"middle",whiteSpace:"normal",background:"none",margin:0,color:"inherit",width:"100%","&:focus":{outline:0}},drawerPaper:(n={},(0,o.Z)(n,e.breakpoints.up("md"),{position:"relative"}),(0,o.Z)(n,"width",240),(0,o.Z)(n,"background","dark"===e.palette.type?(0,c._j)(e.palette.primary.light,.6):(0,c.$n)(e.palette.primary.light,.5)),(0,o.Z)(n,"border","none"),(0,o.Z)(n,"minHeight","100%"),n),selected:{background:"dark"===e.palette.type?(0,c._j)(e.palette.primary.light,.5):(0,c._j)(e.palette.primary.light,.05),borderLeft:"4px solid ".concat(e.palette.secondary.main),paddingLeft:20,"& h3":{color:e.palette.primary.dark}},content:(s={flexGrow:1,zIndex:120,marginBottom:e.spacing(8),marginTop:e.spacing(8),padding:e.spacing(1)},(0,o.Z)(s,e.breakpoints.up("md"),{padding:e.spacing(3),marginBottom:e.spacing(4)}),(0,o.Z)(s,"position","relative"),(0,o.Z)(s,"minWidth",0),s),toolbar:{padding:"".concat(e.spacing(2),"px ").concat(e.spacing(4),"px")},title:{width:205},divider:{margin:"0 20px 0 10px"},column:{flexBasis:"33.33%",overflow:"hidden",paddingRight:"0 !important",paddingTop:5,marginLeft:20},secondaryHeading:(0,o.Z)({fontSize:14,color:e.palette.text.secondary},e.breakpoints.down("xs"),{whiteSpace:"normal",paddingBottom:10}),icon:{verticalAlign:"bottom",height:20,width:20},details:(p={alignItems:"center"},(0,o.Z)(p,e.breakpoints.down("sm"),{padding:"".concat(e.spacing(1),"px ").concat(e.spacing(1),"px ").concat(e.spacing(3),"px")}),(0,o.Z)(p,"& section",{width:"100%"}),p),link:{color:e.palette.secondary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}},avatar:{},fromHeading:{overflow:"hidden",display:"flex",alignItems:"center",paddingLeft:e.spacing(1),"& $avatar":{width:30,height:30,marginRight:20}},topAction:{display:"flex",background:"dark"===e.palette.type?e.palette.grey[700]:e.palette.grey[100],marginBottom:20,alignItems:"center",padding:"0 20px",borderRadius:e.rounded.medium},category:{fontSize:12,textTransform:"uppercase",display:"flex","& svg":{fontSize:16,marginRight:5}},markMenu:{"& svg":{marginRight:10}},headMail:{flex:1},field:{width:"100%",marginTop:0,"& svg":{color:e.palette.grey[400],fontSize:18}},hiddenDropzone:{display:"none"},sendIcon:{marginLeft:10},item:{},preview:{display:"flex",marginBottom:20,"& $item":{maxWidth:160,marginBottom:5,marginRight:5}},emailSummary:{padding:0,"& > div":(0,o.Z)({},e.breakpoints.down("sm"),{flexDirection:"column"})},emailContent:(0,o.Z)({color:e.palette.text.primary,padding:e.spacing(2)},e.breakpoints.down("sm"),{padding:"".concat(e.spacing(2),"px ").concat(e.spacing(2),"px")}),starBtn:{marginRight:10},navIconHide:(0,o.Z)({},e.breakpoints.up("md"),{display:"none"}),textEditor:{background:e.palette.background.paper,minHeight:500,border:"1px solid ".concat(e.palette.divider),padding:"0 10px",color:e.palette.text.primary},toolbarEditor:{marginTop:"20px",background:e.palette.background.default,border:"none","& > div":{background:e.palette.background.paper,"& img":{filter:"dark"===e.palette.type?"invert(100%)":"invert(0%)"},"& a":{color:e.palette.text.primary,"& > div":{borderTopColor:e.palette.text.primary}}}},textPreview:{width:"100%",resize:"none",height:305,border:"1px solid ".concat(e.palette.divider),padding:e.spacing(.5)},buttonUpload:{marginRight:e.spacing()}}}},7338:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var o=n(74165),a=n(15861),i=n(29439),r=n(1413),l=n(72791),c=n(93433),s=n(38317),p=n(72010),d=n(51802),g=n(199),m=n.n(g),u=n(1288),h=n(38302),f=(n(32215),n(89877)),x=n(26513),v=n(97104),y=n(74569),b=n.n(y),k=n(28931),w=n(80184);var Z=(0,s.Z)(f.Z)((function(e){var t=e.classes,n="https://english-1.azurewebsites.net/",r=(0,k.useParams)().id,s=(0,l.useState)(null),g=(0,i.Z)(s,2),f=g[0],y=g[1],Z=(0,l.useState)(!1),j=(0,i.Z)(Z,2),S=j[0],I=j[1],C=(0,l.useState)(""),T=(0,i.Z)(C,2),B=(T[0],T[1]),R=(0,l.useState)((function(){return p.EditorState.createEmpty()})),z=(0,i.Z)(R,2),N=z[0],E=z[1],M=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){var t,a,i,l,s,d,g,u,h,x,v;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=m()((0,p.convertToRaw)(N.getCurrentContent())),a=document.createElement("div"),document.body.appendChild(a),a.setAttribute("id","newDiv"),document.getElementById("newDiv").innerHTML=t,i=(0,c.Z)(document.getElementById("newDiv").children),l=i.map((function(e){var t=e.textContent.trim();return t+="\n"})),s="",d=0;d<l.length;d++)s+=l[d];for(v in console.log(s),g=JSON.stringify(localStorage),delete(u=JSON.parse(g)).user_name,delete u.email,delete u.token,h={},x=0,u)h[x]=u[v],localStorage.removeItem(v),x+=1;console.log(h),""!==s&&(null!=r||void 0!==r?b().post(n+"listening/listening-edit-scripts/"+r,{script_file_name:h,title:f,script_text:s},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){e.response&&(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers))})).then((function(e){console.log(e),window.location.href="/listening"})):b().post(n+"listening/listening-create-scripts/",{email:localStorage.getItem("email"),script_file_name:h,title:f,script_text:s},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){e.response&&(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers))})).then((function(e){console.log(e),window.location.href="/listening"})));case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){I(!0)})),(0,l.useEffect)((function(){S&&(null==r&&void 0===r||b().get(n+"listening/listening-get-data/"+r,{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"},params:{id:r}}).then((function(e){var t=e.data.title,n=e.data.script_text;if(B(n),""!==n){var o="<div>".concat(n,"</div>");console.log(o),E(p.EditorState.createWithContent(p.ContentState.createFromBlockArray((0,p.convertFromHTML)(o))))}y(t)})).catch((function(e){})))}),[S]),(0,w.jsxs)(l.Fragment,{children:[(0,w.jsxs)(u.Z,{container:!0,alignItems:"flex-start",justify:"space-around",direction:"row",spacing:3,children:[(0,w.jsx)(u.Z,{item:!0,xs:12,children:(0,w.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginTop:"30px"},children:[(0,w.jsx)(h.Z,{component:"h6",style:{fontFamily:"CookieRun-Regular"},children:"\uc81c\ubaa9 :"}),(0,w.jsx)(v.Z,{placeholder:"Placeholder",inputProps:{"aria-label":"Description"},style:{margin:"20px",marginTop:"-6px",width:"500px"},value:f,onChange:function(e){y(e.target.value)}})]})}),(0,w.jsx)(u.Z,{item:!0,xs:12,children:(0,w.jsx)(d.Editor,{editorState:N,editorClassName:t.textEditor,toolbarClassName:t.toolbarEditor,onEditorStateChange:function(e){E(e)}})})]}),(0,w.jsx)(x.Z,{className:t.submitButton,onClick:M,children:"Finish"})]})})),j=n(79579),S=n(38596),I=n(47084),C=n(10968),T=n(55119),B=n(90464),R=n(52417),z=(n(79090),n(15063)),N=n(44290),E=n(81694),M=n.n(E),P=n(57831),A=(0,S.Z)((function(e){return{root:{width:"100%",marginTop:"200px"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)},dropItem:{borderColor:e.palette.divider,background:e.palette.background.default,borderRadius:e.rounded.medium,color:e.palette.text.disabled,textAlign:"center"},uploadIconSize:{alignItems:"center","& svg":{width:72,height:72,fill:e.palette.secondary.main}},rightIcon:{marginLeft:e.spacing(1),"& svg":{fill:e.palette.common.white}}}}));function L(e,t,n){switch(e){case 0:var o=n.filesArray,a=o.map((function(e){return(0,w.jsxs)("li",{children:[e.name," - ",e.size," bytes"]},e.name)}));return console.log(o.length),(0,w.jsxs)("div",{children:[(0,w.jsx)("div",{className:"row preview"}),(0,w.jsx)("div",(0,r.Z)((0,r.Z)({},n.getRootProps()),{},{className:M()(t.dropItem,"dropZone"),children:(0,w.jsxs)("div",{className:"dropzoneTextStyle",children:[(0,w.jsx)("input",(0,r.Z)({},n.getInputProps())),(0,w.jsx)("div",{className:t.uploadIconSize,children:(0,w.jsx)(R.Z,{})})]})})),(0,w.jsx)("h4",{children:"Files"}),(0,w.jsx)("ul",{children:a})]});case 1:return(0,w.jsx)(Z,{});default:return"Unknown step"}}var _=function(e){var t=(0,l.useState)([]),n=(0,i.Z)(t,2),r=n[0],c=n[1],s=(0,P.uI)({onDrop:function(e){console.log(e);var t=e[0].name.split(".");if("mp3"===t[t.length-1]){var n=r;(n=n.concat(e)).length>5?console.log("Cannot upload more than 5 items."):c(n),console.log(r)}else console.log("cannot upload (\ud30c\uc77c\ud655\uc7a5\uc790\uac00 mp3 \uc774\uc5b4\uc57c \ud55c\ub2e4.)")}}),p=(s.acceptedFiles,s.getRootProps),d=s.getInputProps,g=function(e){console.log(e);for(var t={contentType:"audio/mpeg"},n=0;n<e.length;n++){var i=(0,N.iH)(z.t,"posts/".concat(e[n].name));(0,N.KV)(i,e[n],t).then((0,a.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("uploaded!!");case 1:case"end":return e.stop()}}),e)})))),localStorage.setItem("audio"+n,e[n].name)}y((function(e){return e+1}))},m=A(),u=l.useState(0),f=(0,i.Z)(u,2),v=f[0],y=f[1],b=["\ub9ac\uc2a4\ub2dd mp3 \ud30c\uc77c \uc5c5\ub85c\ub4dc","\ub9ac\uc2a4\ub2dd \ud14d\uc2a4\ud2b8 \uc2a4\ud06c\ub9bd\ud2b8 \uc5c5\ub85c\ub4dc"];return(0,l.useEffect)((function(){null===localStorage.getItem("user_name")&&(window.location.href="/auth/email"),localStorage.getItem("MyProfileOnce")&&localStorage.removeItem("MyProfileOnce"),localStorage.getItem("ChatMessageOnce")&&localStorage.removeItem("ChatMessageOnce")})),(0,w.jsx)("div",{className:m.root,children:(0,w.jsx)(j.Z,{title:"\ub9ac\uc2a4\ub2dd \uc2a4\ud06c\ub9bd\ud2b8 \uc5c5\ub85c\ub4dc",icon:"ion-ios-filing-outline",desc:"\uc5f0\uc2b5\ud558\uace0\uc790 \ud558\ub294 \ub9ac\uc2a4\ub2dd \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc5c5\ub85c\ub4dc\ud558\uc5ec \ub9ac\uc2a4\ub2dd \ube48\uce78 \ucc44\uc6b0\uae30 \uc5f0\uc2b5\uc744 \ud574\ubcf4\uc138\uc694.",children:(0,w.jsx)(I.Z,{activeStep:v,orientation:"vertical",children:b.map((function(e,t){return(0,w.jsxs)(C.Z,{children:[(0,w.jsx)(T.Z,{children:e}),(0,w.jsx)(B.Z,{children:(0,w.jsxs)(h.Z,{children:[L(t,m,{filesArray:r,getRootProps:p,getInputProps:d,handleClick:g}),(n=t,0===n&&(0,w.jsxs)(x.Z,{className:m.button,fullWidth:!0,variant:"contained",onClick:function(){g(r)},color:"secondary",children:["[ \ub3d9\uae30\ud654 - Sync ]  \ud30c\uc77c\uc744 \uba3c\uc800 \uc5c5\ub85c\ub4dc\ud558\uc5ec \ubc84\ud2bc\uc744 \ub20c\ub7ec \ub3d9\uae30\ud654\uc2dc\ucf1c \uc8fc\uc138\uc694.",(0,w.jsx)("span",{className:m.rightIcon,children:(0,w.jsx)(R.Z,{})})]}))]})})]},e);var n}))})})})}},15063:function(e,t,n){n.d(t,{db:function(){return c},t:function(){return s}});var o=n(72426),a=n(80797),i=n(69018),r=n(43014),l=(0,o.C6)().length?(0,o.Mq)():(0,o.ZF)({apiKey:"AIzaSyDXlEPMQYhq7o6x21RwfPBQh3sHxo0p4dI",authDomain:"english-website-362600.firebaseapp.com",projectId:"english-website-362600",storageBucket:"english-website-362600.appspot.com",messagingSenderId:"790842426643",appId:"1:790842426643:web:f45d23c026b573e55686e6",measurementId:"G-LX8PL19HD7"}),c=((0,a.IH)(l),(0,r.ad)()),s=(0,i.cF)()},90464:function(e,t,n){var o=n(87462),a=n(45987),i=n(72791),r=n(28182),l=n(79370),c=n(38317),s=i.forwardRef((function(e,t){var n=e.active,c=(e.alternativeLabel,e.children),s=e.classes,p=e.className,d=(e.completed,e.expanded),g=e.last,m=(e.optional,e.orientation,e.TransitionComponent),u=void 0===m?l.Z:m,h=e.transitionDuration,f=void 0===h?"auto":h,x=e.TransitionProps,v=(0,a.Z)(e,["active","alternativeLabel","children","classes","className","completed","expanded","last","optional","orientation","TransitionComponent","transitionDuration","TransitionProps"]);var y=f;return"auto"!==f||u.muiSupportAuto||(y=void 0),i.createElement("div",(0,o.Z)({className:(0,r.Z)(s.root,p,g&&s.last),ref:t},v),i.createElement(u,(0,o.Z)({in:n||d,className:s.transition,timeout:y,unmountOnExit:!0},x),c))}));t.Z=(0,c.Z)((function(e){return{root:{marginTop:8,marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:"1px solid ".concat("light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600])},last:{borderLeft:"none"},transition:{}}}),{name:"MuiStepContent"})(s)},32215:function(){},79090:function(){}}]);
//# sourceMappingURL=7338.ce89dbeb.chunk.js.map