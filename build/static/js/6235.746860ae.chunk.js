"use strict";(self.webpackChunkreact_english_website=self.webpackChunkreact_english_website||[]).push([[6235],{79579:function(e,t,i){i.d(t,{Z:function(){return g}});i(72791);var n=i(81694),a=i.n(n),o=i(38317),r=i(89526),l=i(38302),c=i(4942),s=i(64996),d=function(e){var t,i,n;return{root:e.mixins.gutters({paddingTop:e.spacing(3),paddingBottom:e.spacing(3),marginBottom:e.spacing(3),boxShadow:e.shade.light,color:e.palette.text.primary,"&$noMargin":{margin:0},marginTop:"160px"}),descBlock:(0,c.Z)({display:"flex",alignItems:"center",marginBottom:e.spacing(5)},e.breakpoints.down("sm"),{marginBottom:e.spacing(3)}),titleText:{flex:1},title:(t={position:"relative",textTransform:"capitalize",fontSize:24,fontWeight:400,color:"dark"===e.palette.type?e.palette.primary.main:e.palette.primary.dark},(0,c.Z)(t,e.breakpoints.down("xs"),{textAlign:"center",fontWeight:600,marginBottom:e.spacing(1)}),(0,c.Z)(t,"fontFamily","CookieRun-Regular"),t),description:(i={maxWidth:960,paddingTop:e.spacing(.5)},(0,c.Z)(i,e.breakpoints.down("xs"),{textAlign:"center"}),(0,c.Z)(i,"fontFamily","CookieRun-Regular"),i),content:(0,c.Z)({marginTop:e.spacing(2),padding:e.spacing(1),borderRadius:e.rounded.medium,backgroundColor:e.palette.background.default},e.breakpoints.up("lg"),{padding:e.spacing(2)}),whiteBg:{backgroundColor:"transparent",margin:0,padding:0},noMargin:{},colorMode:{backgroundColor:"dark"===e.palette.type?e.palette.primary.dark:e.palette.primary.main,"& $title":{color:e.palette.grey[100],"&:after":{borderBottom:"5px solid ".concat(e.palette.primary.light)}},"& $description":{color:e.palette.grey[100]}},overflowX:{width:"100%",overflowX:"auto"},iconTitle:(n={borderRadius:e.rounded.small,border:"dark"===e.palette.type?"none":"1px solid ".concat((0,s.$n)(e.palette.primary.dark,.9)),boxShadow:"0 2px 15px -5px ".concat(e.palette.primary.main),background:"dark"===e.palette.type?e.palette.primary.main:(0,s.$n)(e.palette.primary.light,.5),width:48,height:48,textAlign:"center",lineHeight:"44px",verticalAlign:"middle",marginRight:e.spacing(3)},(0,c.Z)(n,e.breakpoints.down("xs"),{display:"none"}),(0,c.Z)(n,"& i",{fontSize:28,verticalAlign:"baseline",color:"dark"===e.palette.type?e.palette.common.white:e.palette.primary.main}),n)}},p=i(80184);function m(e){var t=e.classes,i=e.title,n=e.desc,o=e.children,c=e.whiteBg,s=e.noMargin,d=e.colorMode,m=e.overflowX,g=e.icon;return(0,p.jsx)("div",{children:(0,p.jsxs)(r.Z,{className:a()(t.root,s&&t.noMargin,d&&t.colorMode),elevation:0,children:[(0,p.jsxs)("div",{className:t.descBlock,children:[(0,p.jsx)("span",{className:t.iconTitle,children:(0,p.jsx)("i",{className:g})}),(0,p.jsxs)("div",{className:t.titleText,children:[(0,p.jsx)(l.Z,{variant:"h6",component:"h2",className:t.title,children:i}),(0,p.jsx)(l.Z,{component:"p",className:t.description,children:n})]})]}),(0,p.jsx)("section",{className:a()(t.content,c&&t.whiteBg,m&&t.overflowX),children:o})]})})}m.defaultProps={whiteBg:!1,noMargin:!1,colorMode:!1,overflowX:!1,icon:"ion-ios-bookmark-outline"};var g=(0,o.Z)(d)(m)},6235:function(e,t,i){i.r(t);var n=i(29439),a=i(72791),o=i(38596),r=i(79579),l=i(1288),c=i(26513),s=i(15894),d=(i(74569),i(28931)),p=i(80184),m=(0,o.Z)((function(e){return{root:{padding:"15px"},button:{margin:"10px",backgroundColor:"dark"===e.palette.type?e.palette.primary.dark:e.palette.primary.main,color:(e.palette.type,e.palette.common.white),width:"50%",fontFamily:"CookieRun-Regular",fontSize:"15px",marginTop:"30px","&:hover":{backgroundColor:"dark"===e.palette.type?e.palette.primary.main:e.palette.primary.dark}}}}));t.default=function(e){var t=m(),i=(0,a.useState)({}),o=(0,n.Z)(i,2),g=(o[0],o[1],(0,a.useState)(!1)),u=(0,n.Z)(g,2),h=u[0],f=u[1],x=(0,s.Z)();return x.height,x.width,(0,d.useParams)().id,(0,a.useEffect)((function(){null===localStorage.getItem("user_name")&&(window.location.href="/auth/email"),localStorage.getItem("MyProfileOnce")&&localStorage.removeItem("MyProfileOnce"),localStorage.getItem("ChatMessageOnce")&&localStorage.removeItem("ChatMessageOnce"),f(!0)})),(0,a.useEffect)((function(){}),[h]),(0,p.jsx)("div",{className:t.root,children:(0,p.jsx)(r.Z,{title:"\uc5b4\ud718\ud034\uc988 \ubb38\uc81c\ud480\uc774\ubc29",whiteBg:!0,icon:"ion-ios-grid-outline",desc:"\r \ud034\uc988 \ubb38\uc81c \ud480\uc774\ubc29\uc5d0\uc11c \uc5b4\ud718 \uc554\uae30\ubb38\uc81c\ub97c \ud480\uc5b4\ubcf4\uc138\uc694. (\ud544\uc218 : \uc5b4\ud718 \ub2e8\uc5b4\uc7a5\uc5d0 \uc81c\ub300\ub85c \uc815\ubcf4\uac00 \uc785\ub825\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694.)",children:(0,p.jsx)(l.Z,{container:!0,alignItems:"flex",justify:"center",direction:"column",spacing:3,children:(0,p.jsx)(l.Z,{item:!0,xs:12,children:(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginTop:"0",marginLeft:"100px"},children:[(0,p.jsx)(c.Z,{className:t.button,onClick:function(){window.location.href="/vocab/quiz-memorization/take-quiz"},children:"\uc5b4\ud718\ubb38\uc81c \ud480\uae30"}),(0,p.jsx)(c.Z,{className:t.button,onClick:function(){window.location.href="/vocab/quiz-memorization/result"},children:"\ud034\uc988 \uacb0\uacfc\ubcf4\uae30"})]})})})})})}},15894:function(e,t,i){i.d(t,{Z:function(){return r}});var n=i(29439),a=i(72791);function o(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function r(){var e=(0,a.useState)(o()),t=(0,n.Z)(e,2),i=t[0],r=t[1];return(0,a.useEffect)((function(){function e(){r(o())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),i}}}]);
//# sourceMappingURL=6235.746860ae.chunk.js.map