"use strict";(self.webpackChunkreact_english_website=self.webpackChunkreact_english_website||[]).push([[6221],{79579:function(e,t,o){o.d(t,{Z:function(){return u}});o(72791);var n=o(81694),a=o.n(n),i=o(38317),r=o(89526),l=o(38302),c=o(4942),s=o(64996),p=function(e){var t,o,n;return{root:e.mixins.gutters({paddingTop:e.spacing(3),paddingBottom:e.spacing(3),marginBottom:e.spacing(3),boxShadow:e.shade.light,color:e.palette.text.primary,"&$noMargin":{margin:0},marginTop:"160px"}),descBlock:(0,c.Z)({display:"flex",alignItems:"center",marginBottom:e.spacing(5)},e.breakpoints.down("sm"),{marginBottom:e.spacing(3)}),titleText:{flex:1},title:(t={position:"relative",textTransform:"capitalize",fontSize:24,fontWeight:400,color:"dark"===e.palette.type?e.palette.primary.main:e.palette.primary.dark},(0,c.Z)(t,e.breakpoints.down("xs"),{textAlign:"center",fontWeight:600,marginBottom:e.spacing(1)}),(0,c.Z)(t,"fontFamily","CookieRun-Regular"),t),description:(o={maxWidth:960,paddingTop:e.spacing(.5)},(0,c.Z)(o,e.breakpoints.down("xs"),{textAlign:"center"}),(0,c.Z)(o,"fontFamily","CookieRun-Regular"),o),content:(0,c.Z)({marginTop:e.spacing(2),padding:e.spacing(1),borderRadius:e.rounded.medium,backgroundColor:e.palette.background.default},e.breakpoints.up("lg"),{padding:e.spacing(2)}),whiteBg:{backgroundColor:"transparent",margin:0,padding:0},noMargin:{},colorMode:{backgroundColor:"dark"===e.palette.type?e.palette.primary.dark:e.palette.primary.main,"& $title":{color:e.palette.grey[100],"&:after":{borderBottom:"5px solid ".concat(e.palette.primary.light)}},"& $description":{color:e.palette.grey[100]}},overflowX:{width:"100%",overflowX:"auto"},iconTitle:(n={borderRadius:e.rounded.small,border:"dark"===e.palette.type?"none":"1px solid ".concat((0,s.$n)(e.palette.primary.dark,.9)),boxShadow:"0 2px 15px -5px ".concat(e.palette.primary.main),background:"dark"===e.palette.type?e.palette.primary.main:(0,s.$n)(e.palette.primary.light,.5),width:48,height:48,textAlign:"center",lineHeight:"44px",verticalAlign:"middle",marginRight:e.spacing(3)},(0,c.Z)(n,e.breakpoints.down("xs"),{display:"none"}),(0,c.Z)(n,"& i",{fontSize:28,verticalAlign:"baseline",color:"dark"===e.palette.type?e.palette.common.white:e.palette.primary.main}),n)}},d=o(80184);function g(e){var t=e.classes,o=e.title,n=e.desc,i=e.children,c=e.whiteBg,s=e.noMargin,p=e.colorMode,g=e.overflowX,u=e.icon;return(0,d.jsx)("div",{children:(0,d.jsxs)(r.Z,{className:a()(t.root,s&&t.noMargin,p&&t.colorMode),elevation:0,children:[(0,d.jsxs)("div",{className:t.descBlock,children:[(0,d.jsx)("span",{className:t.iconTitle,children:(0,d.jsx)("i",{className:u})}),(0,d.jsxs)("div",{className:t.titleText,children:[(0,d.jsx)(l.Z,{variant:"h6",component:"h2",className:t.title,children:o}),(0,d.jsx)(l.Z,{component:"p",className:t.description,children:n})]})]}),(0,d.jsx)("section",{className:a()(t.content,c&&t.whiteBg,g&&t.overflowX),children:i})]})})}g.defaultProps={whiteBg:!1,noMargin:!1,colorMode:!1,overflowX:!1,icon:"ion-ios-bookmark-outline"};var u=(0,i.Z)(p)(g)},57745:function(e,t,o){o.d(t,{Z:function(){return S}});var n=o(29439),a=o(72791),i=o(38317),r=o(38302),l=o(10283),c=o(16685),s=o(42953),p=o(44697),d=o(26513),g=o(70272),u=o(58321),m=o(83898),h=o(95808),f=o(43630),x=o(42124),k=o(17447),y=function(e){return{divider:{margin:"".concat(e.spacing(3),"px 0")},textspan:{fontFamily:"CookieRun-Regular"},card:{minWidth:275},num:{fontSize:14,marginLeft:5},button:{marginRight:e.spacing(1)},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:150,height:150},cardSocmed:{width:400},gutterBottom:{marginBottom:e.spacing(3)},title:{fontSize:20,height:30,fontWeight:e.typography.fontWeightMedium},desc:{height:45,overflow:"hidden"},contentProfile:{flex:"1 0 auto",textAlign:"center",marginTop:-70},mediaProfile:{height:0,paddingTop:"66.25%",borderRadius:"50%",width:"120%",left:"-10%",position:"relative",top:-70},avatar:{boxShadow:e.shadows[7]},avatarBig:{width:80,height:80,margin:"-56px auto 10px",background:e.palette.secondary.dark,boxShadow:e.shadows[7]},name:{display:"flex",justifyContent:"center",alignItems:"center"},buttonProfile:{margin:20},bottomLink:{width:"100%"},verified:{fontSize:16,color:e.palette.primary.main}}},Z=o(74569),j=o.n(Z),v=o(15063),w=o(69018),b=o(80184);function C(e){var t=e.classes,o=(e.id,e.cover),i=e.avatar,y=e.name,Z=e.title,C=e.connection,S=e.isVerified,I=e.followers,T=e.liked,N=e.following,F=e.liking,R=e.isfriend,B=(0,a.useState)(""),z=(0,n.Z)(B,2),A=z[0],P=z[1],L=(0,a.useState)(""),M=(0,n.Z)(L,2),O=M[0],E=M[1],D=(0,a.useState)(""),W=(0,n.Z)(D,2),_=W[0],X=W[1],G=(0,a.useState)(!1),H=(0,n.Z)(G,2),K=H[0],$=H[1],q=(0,a.useState)(null),V=(0,n.Z)(q,2),J=V[0],Q=V[1],Y=(0,a.useState)(null),U=(0,n.Z)(Y,2),ee=U[0],te=U[1],oe=(0,a.useState)(null),ne=(0,n.Z)(oe,2),ae=ne[0],ie=ne[1],re=(0,a.useState)(null),le=(0,n.Z)(re,2),ce=le[0],se=le[1],pe="http://127.0.0.1:8000/";(0,a.useEffect)((function(){P("Liked by "+T),E("Followed by "+I),$(!0)})),(0,a.useEffect)((function(){ie(N),se(F),X(R?"\uce5c\uad6c \uc0ad\uc81c":"\uce5c\uad6c \uc5f0\uacb0"),(0,w.Jt)((0,w.iH)(v.t,"profile-img/".concat(i))).then((function(e){Q(e)})).catch((function(e){})),(0,w.Jt)((0,w.iH)(v.t,"profile-img/".concat(o))).then((function(e){te(e)})).catch((function(e){}))}),[K]);return(0,b.jsxs)(l.Z,{className:t.cardSocmed,children:[(0,b.jsx)(c.Z,{className:t.mediaProfile,image:ee,title:"cover"}),(0,b.jsxs)(s.Z,{className:t.contentProfile,children:[(0,b.jsx)(g.Z,{alt:"avatar",src:J,className:t.avatarBig}),(0,b.jsxs)(r.Z,{variant:"h6",className:t.name,gutterBottom:!0,children:[y,S&&(0,b.jsx)(u.Z,{className:t.verified})]}),(0,b.jsx)(r.Z,{className:t.subheading,gutterBottom:!0,children:(0,b.jsx)("span",{className:t.textspan,children:Z})}),(0,b.jsxs)(r.Z,{variant:"caption",component:"p",children:[C,"\xa0connection"]}),(0,b.jsx)(d.Z,{className:t.buttonProfile,size:"large",variant:"outlined",color:"secondary",onClick:function(){"\uce5c\uad6c \uc0ad\uc81c"==_?(X("\uce5c\uad6c \uc5f0\uacb0"),j().post(pe+"mypage/delete-friends/",{name:y},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){})).then((function(e){}))):"\uce5c\uad6c \uc5f0\uacb0"==_&&(X("\uce5c\uad6c \uc0ad\uc81c"),j().post(pe+"mypage/add-friends/",{name:y},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){})).then((function(e){})))},children:_})]}),(0,b.jsx)(k.Z,{}),(0,b.jsx)(p.Z,{children:(0,b.jsxs)(m.Z,{showLabels:!0,className:t.bottomLink,children:[null!=ae&&ae?(0,b.jsx)(h.Z,{label:"Following",icon:(0,b.jsx)(f.Z,{color:"primary"}),onClick:function(){ie(!1),j().post(pe+"mypage/unfollow-friends/",{name:y},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){})).then((function(e){}))}}):(0,b.jsx)(h.Z,{label:"Follow",icon:(0,b.jsx)(f.Z,{color:"secondary"}),onClick:function(){ie(!0),j().post(pe+"mypage/follow-friends/",{name:y},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){})).then((function(e){}))}}),O&&(0,b.jsx)(h.Z,{label:O,icon:(0,b.jsx)(f.Z,{})}),null!=ce&&ce?(0,b.jsx)(h.Z,{label:"Liking",icon:(0,b.jsx)(x.Z,{color:"primary"}),onClick:function(){se(!1),j().post(pe+"mypage/unlike-friends/",{name:y},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){})).then((function(e){}))}}):(0,b.jsx)(h.Z,{label:"Like",icon:(0,b.jsx)(x.Z,{color:"secondary"}),onClick:function(){se(!0),j().post(pe+"mypage/like-friends/",{name:y},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){})).then((function(e){}))}}),A&&(0,b.jsx)(h.Z,{label:A,icon:(0,b.jsx)(x.Z,{})})]})})]})}C.defaultProps={isVerified:!1};var S=(0,i.Z)(y)(C)},6221:function(e,t,o){o.r(t);var n=o(1413),a=o(29439),i=o(4942),r=o(72791),l=o(38596),c=o(13108),s=o(79579),p=o(1288),d=(o(62240),o(57745)),g=(o(23083),o(5088)),u=o(38302),m=o(74569),h=o.n(m),f=o(13880),x=o(26513),k=o(97104),y=o(6168),Z=o(66828),j=o(76782),v=o(29403),w=o(20269),b=o(94026),C=o(85159),S=o(83837),I=o(94135),T=o(49861),N=o(5193),F=o(27752),R=o(44362),B=o(80184),z=(0,l.Z)((function(e){return{root:{padding:"15px"},divider:{color:"black"},grid:{marginTop:"40px"},gridcontainer:{marginTop:"40px"},search:(0,i.Z)({position:"relative",marginTop:"5px",borderRadius:10,borderColor:"black",borderWidth:"5px",height:"50px",backgroundColor:(0,c.Fq)(e.palette.primary.main,.8),"&:hover":{backgroundColor:(0,c.Fq)(e.palette.primary.main,.5)},marginLeft:0,width:"30%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),marginTop:"5px",width:"30%"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:(0,i.Z)({padding:e.spacing(1,1,1,0),marginTop:"8px",paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),button:{margin:"10px",backgroundColor:"dark"===e.palette.type?e.palette.secondary.main:e.palette.secondary.dark,color:(e.palette.type,e.palette.common.white),width:"12%",height:"40px",fontFamily:"CookieRun-Regular",fontSize:"15px",marginTop:"30px","&:hover":{backgroundColor:"dark"===e.palette.type?e.palette.secondary.dark:e.palette.secondary.main}},formControl:{marginTop:"-8px"},select:{width:"140px",backgroundColor:e.palette.primary.light},changeFontFamilyClasses:{fontFamily:"CookieRun-Regular"},dialogtitle:{fontFamily:"CookieRun-Regular",color:e.palette.secondary.dark},dialogPaper:{width:"500px"}}}));t.default=function(e){var t,o=z(),l=(0,r.useState)(""),c=(0,a.Z)(l,2),m=c[0],A=c[1],P=(0,r.useState)(""),L=(0,a.Z)(P,2),M=L[0],O=L[1],E=(0,r.useState)([]),D=(0,a.Z)(E,2),W=D[0],_=D[1],X=function(e,t,o,n,a,i,r,l,c,s,p,d){return{id:e,cover:t,avatar:o,name:n,title:a,connection:i,verified:r,followers:l,liked:c,following:s,liking:p,isfriend:d}},G=(0,r.useState)({group:""}),H=(0,a.Z)(G,2),K=H[0],$=H[1],q=(0,r.useState)(null),V=(0,a.Z)(q,2),J=V[0],Q=V[1],Y=(0,r.useState)(!1),U=(0,a.Z)(Y,2),ee=U[0],te=U[1],oe="http://127.0.0.1:8000/",ne=(0,r.useState)({open:!1,groupName:""}),ae=(0,a.Z)(ne,2),ie=ae[0],re=ae[1],le=(0,r.useState)({open:!1,friends:{},group:"",toGroup:""}),ce=(0,a.Z)(le,2),se=ce[0],pe=ce[1],de=function(e){return function(t){pe((0,n.Z)((0,n.Z)({},se),{},(0,i.Z)({},e,t.target.value)))}},ge=function(){re((0,n.Z)((0,n.Z)({},ie),{},{open:!1}))},ue=function(){pe((0,n.Z)((0,n.Z)({},se),{},{open:!1}))},me=function(e,t){return function(o){console.log(se.friends),se.friends[e][t]=o.target.checked,pe((0,n.Z)((0,n.Z)({},se),{},{friends:se.friends}))}},he=(0,r.useState)([]),fe=(0,a.Z)(he,2),xe=fe[0],ke=fe[1];return(0,r.useEffect)((function(){te(!0),null===localStorage.getItem("user_name")&&(window.location.href="/auth/email"),localStorage.getItem("MyProfileOnce")&&localStorage.removeItem("MyProfileOnce"),localStorage.getItem("ChatMessageOnce")&&localStorage.removeItem("ChatMessageOnce")})),(0,r.useEffect)((function(){if(ee){if(h().get(oe+"mypage/move-groups/",{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).then((function(e){for(var t=e.data.all_datas,o=e.data.all_groups,a={},i=0,r=Object.keys(e.data.all_datas);i<r.length;i++){var l=r[i],c=t[l];if(0!=c.length){for(var s={},p=0;p<c.length;p++)s[c[p]]=!1;a[l]=s}else a[l]={}}ke(o),Q(t),pe((0,n.Z)((0,n.Z)({},se),{},{friends:a}))})).catch((function(e){})),localStorage.getItem("profile-peer-list-group")){var e=localStorage.getItem("profile-peer-list-group");h().get(oe+"mypage/profile-search-based-on-groups/",{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"},params:{group:e}}).then((function(e){for(var t=Object.keys(e.data).length,o=Object.keys(e.data),n=[],a=0;a<t;a++){var i=e.data[o[a]];console.log(i),n[a]=X(o[a],i.cover,i.avatar,i.name,i.title,i.connection,i.verified,i.followers,i.liked,i.following,i.liking,i.isfriend)}_(n)})).catch((function(e){})),localStorage.removeItem("profile-peer-list-group")}if(localStorage.getItem("profile-peer-list-keyword")){var t=localStorage.getItem("profile-peer-list-keyword");h().get(oe+"mypage/profile-search-based-on-friends/",{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"},params:{userinfo:t}}).then((function(e){for(var t=Object.keys(e.data).length,o=Object.keys(e.data),n=[],a=0;a<t;a++){var i=e.data[o[a]];console.log(i),n[a]=X(o[a],i.cover,i.avatar,i.name,i.title,i.connection,i.verified,i.followers,i.liked,i.following,i.liking,i.isfriend)}_(n)})).catch((function(e){})),localStorage.removeItem("profile-peer-list-keyword")}}}),[ee]),(0,B.jsx)("div",{className:o.root,children:(0,B.jsxs)(s.Z,{title:"\uce5c\uad6c/\uadf8\ub8f9 \ud504\ub85c\ud544 \uc870\ud68c",whiteBg:!0,icon:"ion-ios-grid-outline",desc:"\r \uce5c\uad6c/\uadf8\ub8f9 \ud504\ub85c\ud544\ub4e4\uc744 \uac80\uc0c9\ud558\uc5ec \uc870\ud68c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",children:[(0,B.jsx)(u.Z,{component:"p",children:(0,B.jsx)("span",{style:{color:"#EC407A",fontFamily:"CookieRun-Regular",marginLeft:"12px"},children:"\uc720\uc800 \uc774\uba54\uc77c\uacfc \uc774\ub984\uc744 \uac80\uc0c9\ucc3d\uc5d0 \uc785\ub825\ud558\uc5ec \uc5d4\ud130\ub97c \uce58\uba74 \uc870\ud68c\uac00 \ub429\ub2c8\ub2e4."})}),(0,B.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginTop:"10px"},children:[(0,B.jsxs)(Z.Z,{className:o.formControl,children:[(0,B.jsx)(y.Z,{htmlFor:"group-native-helper",children:"\uadf8\ub8f9"}),(0,B.jsxs)(v.Z,{native:!0,value:K.group,onChange:(t="group",function(e){$((0,n.Z)((0,n.Z)({},K),{},(0,i.Z)({},t,e.target.value))),console.log(e.target.value);var o=e.target.value;localStorage.setItem("profile-peer-list-group",o),window.location.reload()}),input:(0,B.jsx)(k.Z,{id:"age-native-helper"}),className:o.select,children:[(0,B.jsx)("option",{value:""}),xe.map((function(e,t){return(0,B.jsx)("option",{value:e,children:e})}))]}),(0,B.jsx)(j.Z,{children:"\uac80\uc0c9\ud560 \uadf8\ub8f9\uc744 \uc120\ud0dd\ud558\uc138\uc694."})]}),(0,B.jsxs)("div",{className:o.search,children:[(0,B.jsx)("div",{className:o.searchIcon,children:(0,B.jsx)(f.Z,{})}),(0,B.jsx)(g.Z,{placeholder:"Search\u2026",classes:{root:o.inputRoot,input:o.inputInput},inputProps:{"aria-label":"search",onChange:function(e){A(e.target.value)}},onKeyPress:function(e){return t=m,void("Enter"===e.key&&t&&(console.log(t),localStorage.setItem("profile-peer-list-keyword",t),window.location.reload()));var t}})]}),(0,B.jsx)(x.Z,{color:"primary",style:{marginLeft:"25px",marginTop:"6px",width:"80px",borderRadius:"6px"},className:o.button,onClick:function(){re((0,n.Z)((0,n.Z)({},ie),{},{open:!0}))},children:"\uadf8\ub8f9\ucd94\uac00"}),(0,B.jsxs)(S.Z,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:ie.open,onClose:ge,classes:{paper:o.dialogPaper},children:[(0,B.jsx)(C.Z,{disableTypography:"true",className:o.dialogtitle,children:"\ucd94\uac00\ud560 \uadf8\ub8f9\uba85\uc744 \uc785\ub825\ud558\uc138\uc694."}),(0,B.jsx)(b.Z,{children:(0,B.jsx)(F.Z,{InputProps:{style:{width:"170%",fontFamily:"CookieRun-Regular",borderColor:"#EC407A",marginTop:"-5px",marginLeft:"15px"},onChange:function(e){O(e.target.value)}},fullWidth:!1,defaultValue:M,onKeyPress:function(e){}})}),(0,B.jsxs)(w.Z,{children:[(0,B.jsx)(x.Z,{onClick:ge,color:"primary",children:"Cancel"}),(0,B.jsx)(x.Z,{color:"primary",onClick:function(){h().post(oe+"mypage/add-groups/",{group:M},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){})).then((function(e){})),re((0,n.Z)((0,n.Z)({},ie),{},{open:!1})),O(""),window.location.reload()},children:"Ok"})]})]}),(0,B.jsx)(x.Z,{color:"primary",style:{marginLeft:"10px",marginTop:"6px",width:"80px",borderRadius:"6px"},className:o.button,onClick:function(){pe((0,n.Z)((0,n.Z)({},se),{},{open:!0}))},children:"\uadf8\ub8f9\uc62e\uae30\uae30"}),(0,B.jsxs)(S.Z,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:se.open,onClose:ue,children:[(0,B.jsx)(C.Z,{disableTypography:"true",className:o.dialogtitle,children:"\uce5c\uad6c \uadf8\ub8f9\uc744 \uc62e\uae30\uc138\uc694. "}),(0,B.jsx)(b.Z,{children:(0,B.jsx)("form",{className:o.container,children:(0,B.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginTop:"0px"},children:[(0,B.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginTop:"0px",padding:"5px"},children:[(0,B.jsxs)(Z.Z,{className:o.formControl,children:[" ",(0,B.jsx)(y.Z,{className:o.changeFontFamilyClasses,children:"\uadf8\ub8f9"}),(0,B.jsxs)(v.Z,{native:!0,value:se.group,onChange:de("group"),input:(0,B.jsx)(k.Z,{className:o.changeFontFamilyClasses}),children:[(0,B.jsx)("option",{value:""}),xe.map((function(e,t){return(0,B.jsx)("option",{value:e,className:o.changeFontFamilyClasses,children:e})}))]})]}),(0,B.jsx)(R.Z,{style:{margin:"20px"}}),(0,B.jsxs)(Z.Z,{className:o.formControl,children:[(0,B.jsx)(y.Z,{className:o.changeFontFamilyClasses,children:"\uc774\ub3d9\uadf8\ub8f9"}),(0,B.jsxs)(v.Z,{native:!0,value:se.toGroup,onChange:de("toGroup"),input:(0,B.jsx)(k.Z,{className:o.changeFontFamilyClasses}),children:[(0,B.jsx)("option",{value:""}),xe.map((function(e,t){return(0,B.jsx)("option",{value:e,className:o.changeFontFamilyClasses,children:e})}))]})]})]}),(0,B.jsxs)(Z.Z,{component:"fieldset",children:[(0,B.jsx)(T.Z,{style:{marginTop:"20px"},children:null!=J&&""!=se.group&&J[se.group].map((function(e,t){return(0,B.jsx)(I.Z,{control:(0,B.jsx)(N.Z,{checked:se.friends[se.group][e],onChange:me(se.group,e),value:e}),label:e},t)}))}),(0,B.jsx)(j.Z,{children:"\ud574\ub2f9\uadf8\ub8f9\uc73c\ub85c \uc774\ub3d9\ud560 \uce5c\uad6c\ub4e4\uc744 \uc120\ud0dd\ud558\uc138\uc694."})]})]})})}),(0,B.jsxs)(w.Z,{children:[(0,B.jsx)(x.Z,{onClick:ue,color:"primary",children:"Cancel"}),(0,B.jsx)(x.Z,{color:"primary",onClick:function(){var e=[],t=se.friends[se.group];console.log(t);for(var o=0,a=Object.keys(t);o<a.length;o++){var i=a[o];1==t[i]&&e.push(i)}console.log(e),h().post(oe+"mypage/move-groups/",{group:se.group,toGroup:se.toGroup,checked:e},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){})).then((function(e){})),pe((0,n.Z)((0,n.Z)({},se),{},{open:!1})),window.location.reload()},children:"Ok"})]})]})]}),(0,B.jsx)(p.Z,{container:!0,alignItems:"stretch",justify:"start",direction:"row",spacing:1,className:o.gridcontainer,children:W.map((function(e,t){return(0,B.jsx)(p.Z,{item:!0,xs:5,className:o.grid,children:(0,B.jsx)(d.Z,{cover:e.cover,avatar:e.avatar,name:e.name,title:e.title,connection:e.connection,isVerified:e.verified,followers:e.followers,liked:e.liked,following:e.following,liking:e.liking,isfriend:e.isfriend})},t.toString())}))})]})})}},15063:function(e,t,o){o.d(t,{db:function(){return c},t:function(){return s}});var n=o(72426),a=o(80797),i=o(69018),r=o(43014),l=(0,n.C6)().length?(0,n.Mq)():(0,n.ZF)({apiKey:"AIzaSyDXlEPMQYhq7o6x21RwfPBQh3sHxo0p4dI",authDomain:"english-website-362600.firebaseapp.com",projectId:"english-website-362600",storageBucket:"english-website-362600.appspot.com",messagingSenderId:"790842426643",appId:"1:790842426643:web:f45d23c026b573e55686e6",measurementId:"G-LX8PL19HD7"}),c=((0,a.IH)(l),(0,r.ad)()),s=(0,i.cF)()},62240:function(e,t,o){e.exports=o.p+"static/media/nature.cf8c8b94a71fde116b4a.jpg"}}]);
//# sourceMappingURL=6221.9beed0d6.chunk.js.map