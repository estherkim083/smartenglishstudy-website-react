"use strict";(self.webpackChunkreact_english_website=self.webpackChunkreact_english_website||[]).push([[7831],{17831:function(e,t,a){a.r(t),a.d(t,{default:function(){return X}});var n=a(93433),o=a(29439),l=a(4942),i=a(1413),r=a(45987),c=a(72791),s=a(38596),p=a(23083),u=(a(62240),a(74165)),d=a(15861),m=a(70272),g=a(38302),h=a(67025),x=a(58321),f=a(38317),b=a(64996),y=function(e){var t;return{root:{flexGrow:1},input:{display:"none"},cover:{"& $name, & $subheading":{color:e.palette.common.black,fontFamily:"CookieRun-Regular"},position:"relative",width:"100%",overflow:"hidden",height:200,backgroundColor:"dark"===e.palette.type?(0,b._j)(e.palette.primary.dark,.8):e.palette.primary.dark,display:"flex",justifyContent:"center",alignItems:"flex-end",backgroundSize:"cover",textAlign:"center",boxShadow:e.shadows[7],backgroundPosition:"bottom center",borderRadius:e.rounded.medium},profileTab:(t={marginTop:-72},(0,l.Z)(t,e.breakpoints.down("sm"),{marginTop:-48}),(0,l.Z)(t,"borderRadius","0 0 ".concat(e.rounded.medium," ").concat(e.rounded.medium)),(0,l.Z)(t,"background",(0,b.U1)(e.palette.background.paper,.8)),(0,l.Z)(t,"position","relative"),t),content:{background:(0,b.U1)(e.palette.secondary.main,.3),height:"100%",width:"100%",padding:"70px ".concat(e.spacing(3),"px 30px")},name:{marginTop:"-30px",marginLeft:"15px"},subheading:{},avatar:{marginTop:"50px",margin:"0 auto ".concat(e.spacing(2),"px"),width:87,height:87},opt:{position:"absolute",top:10,right:10,"& button":{color:e.palette.common.white}},verified:{margin:e.spacing(1),position:"relative"},button:{marginTop:e.spacing(1)}}},j=a(21079),Z=a(74569),v=a.n(Z),k=a(69018),S=a(15063),C=a(80184);var w=(0,f.Z)(y)((function(e){var t=(0,c.createRef)(null),a=(0,c.createRef)(null),n=(0,c.useState)(null),l=(0,o.Z)(n,2),i=l[0],r=l[1],s=e.classes,p=e.avatar,f=e.name,b=e.desc,y=e.coverImg,Z=(0,c.useState)(""),w=(0,o.Z)(Z,2),I=w[0],T=w[1];(0,c.useEffect)((function(){T(y)}),[y]);var N=function(e,t){v().post("http://127.0.0.1:8000/mypage/update-img-data/"+e,{img:t},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){e.response&&(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers))})).then((function(e){console.log(e)}))},R=function(e,n){var o,l,c=null===(o=e.target)||void 0===o||null===(l=o.files)||void 0===l?void 0:l[0];console.log(c);var s=localStorage.getItem("email"),p=(0,k.iH)(S.t,"profile-img/".concat(s,"/").concat(c.name));(0,k.KV)(p,c,{contentType:"image/*"}).then((0,d.Z)((0,u.Z)().mark((function e(){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("uploaded!!");case 1:case"end":return e.stop()}}),e)})))),c&&("bg"==n?(I&&(URL.revokeObjectURL(I),a.current.value=null),T(URL.createObjectURL(c)),N("bg-img","".concat(s,"/").concat(c.name))):"profileimg"==n&&(i&&(URL.revokeObjectURL(i),t.current.value=null),r(URL.createObjectURL(c)),N("profile-img","".concat(s,"/").concat(c.name))))};return(0,C.jsxs)("div",{className:s.cover,style:{backgroundImage:"url(".concat(I,")"),backgroundSize:"500px"},children:[(0,C.jsxs)("div",{className:s.opt,children:[(0,C.jsx)("input",{accept:"image/*",className:s.input,id:"icon-button-file-bg",type:"file",ref:a,onChange:function(e){return R(e,"bg")}}),(0,C.jsx)("label",{htmlFor:"icon-button-file-bg",children:(0,C.jsx)(h.Z,{className:s.button,component:"span",children:(0,C.jsx)(j.Z,{})})})]}),(0,C.jsxs)("div",{className:s.content,children:[(0,C.jsx)("input",{accept:"image/*",className:s.input,id:"icon-button-file",type:"file",ref:t,onChange:function(e){return R(e,"profileimg")}}),(0,C.jsx)("label",{htmlFor:"icon-button-file",children:(0,C.jsx)(h.Z,{color:"primary","aria-label":"upload picture",component:"span",children:(0,C.jsx)(m.Z,{alt:f,src:i||p,className:s.avatar})})}),(0,C.jsxs)(g.Z,{variant:"h5",className:s.name,gutterBottom:!0,children:[f,(0,C.jsx)(x.Z,{className:s.verified})]}),(0,C.jsx)(g.Z,{className:s.subheading,gutterBottom:!0,children:b})]})]})})),I=a(1288),T=a(68347),N=a(64033),R=a(88167),A=a(10873),_=a(1370),L=a(41971),z=a(65879),E=a(10283),F=a(93969),M=a(42953),D=a(78096),P=a(80159),O=a(17447),U=a(27752),H=a(80908),W=a(26513),B=a(18310),K=a(37943),J=a.n(K),V=a(57407),G=["children","value","index"];function $(e){var t=e.children,a=e.value,n=e.index,o=(0,r.Z)(e,G);return(0,C.jsx)("div",(0,i.Z)((0,i.Z)({role:"tabpanel",hidden:a!==n,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n)},o),{},{children:a===n&&(0,C.jsx)(L.Z,{p:3,sx:{width:"100%",height:"100%"},children:t})}))}function q(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}}var Q=(0,s.Z)((function(e){return(0,l.Z)({root:{marginTop:"130px",padding:"30px",flexGrow:1},gridList:{width:500,height:450},img:{maxWidth:"none"},appbar:{width:"900px",backgroundColor:e.palette.secondary.main,color:e.palette.common.white},tab:{fontFamily:"CookieRun-Regular",fontWeight:"bold"},card:{marginLeft:"-20px",width:"80%"},title:{fontSize:20,height:30,fontWeight:"bold",fontFamily:"CookieRun-Regular"},divider:{margin:"".concat(e.spacing(3),"px 0")},avatar:{boxShadow:e.shadows[7]},cardAboutMeText:{fontFamily:"CookieRun-Regular",fontSize:"20px",color:e.palette.common.black},cardAboutMeTextSmall:{fontFamily:"CookieRun-Regular",fontSize:"14px",color:e.palette.common.black},cardNumberStat:{fontFamily:"CookieRun-Regular",fontSize:"23px",marginLeft:"80px"},cardNumber:{fontFamily:"CookieRun-Regular",fontSize:"20px",marginLeft:"80px",textAlign:"center"},button:{margin:"10px",backgroundColor:"dark"===e.palette.type?e.palette.primary.dark:e.palette.primary.main,color:(e.palette.type,e.palette.common.white),width:"12%",fontFamily:"CookieRun-Regular",fontSize:"15px",marginTop:"30px","&:hover":{backgroundColor:"dark"===e.palette.type?e.palette.primary.main:e.palette.primary.dark}}},"img",{marginTop:"-20px"})}));var X=function(e){var t=Q(),a=(0,c.useState)(""),l=(0,o.Z)(a,2),r=l[0],s=l[1],u=(0,c.useState)(""),d=(0,o.Z)(u,2),h=d[0],x=d[1],f=(0,c.useState)(""),b=(0,o.Z)(f,2),y=b[0],j=b[1],Z=(0,c.useState)([]),L=(0,o.Z)(Z,2),K=L[0],G=L[1],X=(0,c.useState)(""),Y=(0,o.Z)(X,2),ee=Y[0],te=Y[1],ae=c.useState(0),ne=(0,o.Z)(ae,2),oe=ne[0],le=ne[1],ie=(0,c.useState)(""),re=(0,o.Z)(ie,2),ce=re[0],se=re[1],pe=(0,c.useState)(""),ue=(0,o.Z)(pe,2),de=ue[0],me=ue[1],ge=(0,c.useState)(""),he=(0,o.Z)(ge,2),xe=he[0],fe=he[1],be=(0,c.useState)(!1),ye=(0,o.Z)(be,2),je=ye[0],Ze=ye[1],ve=(0,c.useState)(-1),ke=(0,o.Z)(ve,2),Se=ke[0],Ce=ke[1],we=(0,c.useState)(-1),Ie=(0,o.Z)(we,2),Te=Ie[0],Ne=Ie[1],Re=(0,c.useState)(null),Ae=(0,o.Z)(Re,2),_e=Ae[0],Le=Ae[1],ze=(0,c.useState)(null),Ee=(0,o.Z)(ze,2),Fe=Ee[0],Me=Ee[1],De=(0,c.useState)(null),Pe=(0,o.Z)(De,2),Oe=Pe[0],Ue=Pe[1],He=(0,c.useState)(""),We=(0,o.Z)(He,2),Be=We[0],Ke=We[1],Je=(0,c.useState)(""),Ve=(0,o.Z)(Je,2),Ge=Ve[0],$e=Ve[1],qe=(0,c.useState)(""),Qe=(0,o.Z)(qe,2),Xe=Qe[0],Ye=Qe[1],et=(0,c.useState)(-1),tt=(0,o.Z)(et,2),at=tt[0],nt=tt[1],ot=(0,c.useState)(""),lt=(0,o.Z)(ot,2),it=(lt[0],lt[1],"http://127.0.0.1:8000/"),rt=function(e){return function(){var t=(0,n.Z)(K);t.splice(t.indexOf(e),1),G(t),v().post(it+"mypage/delete-about-hashtags/",{hashtags:e},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){})).then((function(e){console.log(e)}))}};(0,c.useEffect)((function(){var e=localStorage.getItem("user_name"),t=localStorage.getItem("email");null===e&&(window.location.href="/auth/email"),s(e),x(t),se(t);var a="\uc774\uba54\uc77c : ".concat(h);j(a),Ze(!0),localStorage.getItem("MyProfileOnce")||(localStorage.setItem("MyProfileOnce",!0),window.location.reload()),localStorage.getItem("ChatMessageOnce")&&localStorage.removeItem("ChatMessageOnce")}),[r]),(0,c.useEffect)((function(){je&&v().get(it+"mypage/get-my-profile-data/",{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).then((function(e){Ce(e.data.followers_num),Ne(e.data.liked_num),Ye(e.data.register_date),nt(e.data.friends_num),G(e.data.about_hash_tags);var t=e.data.current_profile_img;(0,k.Jt)((0,k.iH)(S.t,"profile-img/".concat(t))).then((function(e){Ke(e)})).catch((function(e){}));var a=e.data.current_bg_img;(0,k.Jt)((0,k.iH)(S.t,"profile-img/".concat(a))).then((function(e){$e(e)})).catch((function(e){}));var n=e.data.profile_imgs,o=e.data.bg_imgs;Me(n),Ue(o),console.log(n),console.log(o);for(var l={},i=function(){var e=n[r];(0,k.Jt)((0,k.iH)(S.t,"profile-img/".concat(n[r]))).then((function(t){l[e]=t})).catch((function(e){}))},r=0;r<n.length;r++)i();var c={},s=function(){var e=o[r];(0,k.Jt)((0,k.iH)(S.t,"profile-img/".concat(o[r]))).then((function(t){c[e]=t})).catch((function(e){}))};for(r=0;r<o.length;r++)s();Le({profile:l,bg:c})})).catch((function(e){}))}),[!je]);var ct=function(e,t){console.log(e),console.log(t),v().post(it+"mypage/delete-img-data/",{img:e,type:t},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){e.response&&(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers))})).then((function(e){console.log(e),window.location.href="/my-profile"}))};return(0,C.jsxs)("div",{className:t.root,children:[(0,C.jsx)(w,{coverImg:Ge,avatar:Be,name:r,desc:y}),(0,C.jsxs)(I.Z,{container:!0,alignItems:"stretch",justify:"space-around",direction:"row",spacing:3,children:[(0,C.jsx)(I.Z,{item:!0,xs:3,children:(0,C.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginTop:"60px",height:"100%"},children:[console.log(_e),null!=_e&&(0,C.jsxs)(T.Z,{cellHeight:160,className:t.gridList,cols:2,children:[Fe.map((function(e,a){var n=_e.profile[e];return(0,C.jsxs)(N.Z,{cols:1,padding:0,children:[(0,C.jsx)("span",{style:{zIndex:100,position:"relative"},onClick:function(){return ct(e,"profile")},children:(0,C.jsx)(V.Z,{})}),(0,C.jsx)("img",{src:n,className:t.img})]},a.toString())})),Oe.map((function(e,a){var n=_e.bg[e];return(0,C.jsxs)(N.Z,{cols:1,padding:0,children:[(0,C.jsx)("span",{style:{zIndex:100,position:"relative"},onClick:function(){return ct(e,"bg")},children:(0,C.jsx)(V.Z,{})}),(0,C.jsx)("img",{src:n,className:t.img})]},a.toString())}))]})]})}),(0,C.jsx)(I.Z,{item:!0,xs:8,children:(0,C.jsx)("div",{style:{display:"flex",flexDirection:"row",marginTop:"30px",height:"100%"},children:(0,C.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginTop:"30px",height:"100%"},children:[(0,C.jsx)(R.Z,{position:"static",color:"default",className:t.appbar,children:(0,C.jsxs)(A.Z,{value:oe,onChange:function(e,t){le(t)},indicatorColor:"secondary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example",children:[(0,C.jsx)(_.Z,(0,i.Z)((0,i.Z)({label:"About Me"},q(0)),{},{className:t.tab})),(0,C.jsx)(_.Z,(0,i.Z)((0,i.Z)({label:"Account Settings"},q(1)),{},{className:t.tab})),(0,C.jsx)(_.Z,(0,i.Z)((0,i.Z)({label:"MyInbox Post"},q(2)),{},{className:t.tab}))]})}),(0,C.jsx)($,{value:oe,index:0,children:(0,C.jsx)(E.Z,{className:t.card,children:(0,C.jsxs)(M.Z,{children:[(0,C.jsx)(g.Z,{variant:"subtitle1",className:t.title,children:"ABOUT ME"}),(0,C.jsx)(O.Z,{className:t.divider}),(0,C.jsxs)(D.Z,{children:[(0,C.jsx)(F.Z,{children:(0,C.jsx)(m.Z,{alt:r,src:p,className:t.avatar})}),(0,C.jsx)(P.Z,{primary:"Name",secondary:r,classes:{primary:t.cardAboutMeText,secondary:t.cardAboutMeTextSmall}})]}),(0,C.jsxs)(D.Z,{children:[(0,C.jsx)(F.Z,{children:(0,C.jsx)(m.Z,{className:t.avatar,children:(0,C.jsx)(z.Z,{})})}),(0,C.jsx)(P.Z,{primary:"Email",secondary:h,classes:{primary:t.cardAboutMeText,secondary:t.cardAboutMeTextSmall}})]}),(0,C.jsxs)(D.Z,{children:[(0,C.jsx)(F.Z,{children:(0,C.jsx)(m.Z,{className:t.avatar,children:(0,C.jsx)(B.Z,{})})}),(0,C.jsx)(P.Z,{primary:"\uac00\uc785\uc77c",secondary:Xe,classes:{primary:t.cardAboutMeText,secondary:t.cardAboutMeTextSmall}})]}),(0,C.jsxs)("div",{style:{display:"flex",flexDirection:"row",height:"100%",padding:"30px"},children:[(0,C.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginTop:"0px"},children:[(0,C.jsx)(g.Z,{component:"p",className:t.cardNumberStat,children:(0,C.jsx)("span",{style:{color:"#EC407A"},children:"\ud314\ub85c\uc5b4\uc218  "})}),(0,C.jsx)(g.Z,{component:"p",className:t.cardNumber,children:(0,C.jsx)("span",{style:{color:"black"},children:Se})})]}),(0,C.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginTop:"0px"},children:[(0,C.jsx)(g.Z,{component:"p",className:t.cardNumberStat,children:(0,C.jsx)("span",{style:{color:"#EC407A"},children:"Like\uc218  "})}),(0,C.jsx)(g.Z,{component:"p",className:t.cardNumber,children:(0,C.jsx)("span",{style:{color:"black"},children:Te})})]}),(0,C.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginTop:"0px"},children:[(0,C.jsx)(g.Z,{component:"p",className:t.cardNumberStat,children:(0,C.jsx)("span",{style:{color:"#EC407A"},children:"\uce5c\uad6c\uc218  "})}),(0,C.jsx)(g.Z,{component:"p",className:t.cardNumber,children:(0,C.jsx)("span",{style:{color:"black"},children:at})})]})]}),(0,C.jsx)(O.Z,{className:t.divider}),(0,C.jsx)(U.Z,{InputProps:{startAdornment:K.map((function(e){return(0,C.jsx)(H.Z,{tabIndex:-1,label:e,className:t.chip,onDelete:rt(e)},e)})),onChange:function(e){te(e.target.value)},onKeyDown:function(e){K.length&&!ee.length&&"backspace"===J()(e)&&G(K.slice(0,K.length-1))}},fullWidth:!0,className:t.input,value:ee,onKeyPress:function(e){return function(e,t){if("Enter"===e.key){var a=t;console.log(a),te("");var o=K;-1===o.indexOf(t)&&(o=[].concat((0,n.Z)(o),[t])),G(o),v().post(it+"mypage/about-edit-hashtags/",{hashtags:a},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){})).then((function(e){console.log(e)}))}}(e,ee)},placeholder:"#\uc790\uc2e0\uc758 \uad00\uc2ec\ubd84\uc57c\ub4e4\uc744 \ud574\uc2dc\ud0dc\uadf8\ub85c \ub4f1\ub85d\ud558\uc138\uc694."})]})})}),(0,C.jsxs)($,{value:oe,index:1,children:[(0,C.jsx)(g.Z,{component:"p",children:(0,C.jsx)("span",{style:{color:"#EC407A",fontFamily:"CookieRun-Regular"},children:"\uc720\ud6a8\ud55c \uc774\uba54\uc77c \ub610\ub294 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uace0 \uc5d4\ud130\ub97c \uce58\uba74 \uac31\uc2e0\ub429\ub2c8\ub2e4.  "})}),(0,C.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginTop:"20px"},children:[(0,C.jsx)(g.Z,{component:"p",children:(0,C.jsx)("span",{style:{color:"#EC407A",fontFamily:"CookieRun-Regular"},children:"\uc774\uba54\uc77c  "})}),(0,C.jsx)(U.Z,{InputProps:{style:{width:"170%",fontFamily:"CookieRun-Regular",borderColor:"#EC407A",marginTop:"-5px",marginLeft:"15px"},onChange:function(e){se(e.target.value)}},fullWidth:!1,defaultValue:ce,onKeyPress:function(e){return function(e,t){if("Enter"===e.key&&t){var a=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email":void 0}(t);void 0==a?(console.log("post this email"),v().post(it+"mypage/my-account/email-change/",{change_email:t},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){})).then((function(e){console.log(e),localStorage.setItem("email",t)}))):console.log("do not post this email")}}(e,ce)}})]}),(0,C.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginTop:"40px"},children:[(0,C.jsx)(g.Z,{component:"p",children:(0,C.jsx)("span",{style:{color:"#EC407A",fontFamily:"CookieRun-Regular"},children:"\ube44\ubc88 \uc7ac\uc124\uc815  "})}),(0,C.jsx)(U.Z,{InputProps:{style:{width:"170%",fontFamily:"CookieRun-Regular",borderColor:"#EC407A",marginTop:"-5px",marginLeft:"15px"},onChange:function(e){me(e.target.value)}},fullWidth:!1,defaultValue:de,onKeyPress:function(e){return t=de,void("Enter"===e.key&&(t&&console.log(t),v().post(it+"mypage/my-account/password-change/",{change_password:t},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){})).then((function(e){console.log(e)}))));var t},type:"password"})]}),(0,C.jsx)(W.Z,{onClick:function(){v().post(it+"mypage/my-account/delete/",{},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){})).then((function(e){console.log(e)})),localStorage.removeItem("user_name"),localStorage.removeItem("email"),localStorage.removeItem("token"),window.location.href="/auth/email"},color:"primary",style:{marginLeft:"-5px"},className:t.button,children:"\uacc4\uc815\uc0ad\uc81c"})]}),(0,C.jsxs)($,{value:oe,index:2,children:[(0,C.jsx)(U.Z,{InputProps:{style:{width:"300%",height:"300px",fontFamily:"CookieRun-Regular",borderColor:"#EC407A",marginTop:"10px",marginLeft:"15px",lineHeight:"25px",padding:"5px"},onChange:function(e){fe(e.target.value)}},fullWidth:!1,defaultValue:xe,placeholder:"MyInbox\uc5d0 \uc800\uc7a5\ud558\uace0 \uc2f6\uc740 \ud14d\uc2a4\ud2b8\uc790\ub8cc\ub97c \uc785\ub825\ud558\uc138\uc694.",minRows:11,multiline:!0}),(0,C.jsx)(W.Z,{onClick:function(){v().post(it+"mypage/inbox-data/",{inbox_text:xe},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){})).then((function(e){console.log(e)})),fe(""),window.location.href="/my-inbox"},color:"primary",style:{marginLeft:"-210px",marginTop:"350px",width:"50%"},className:t.button,children:"\uc800\uc7a5"})]})]})})})]})]})}},15063:function(e,t,a){a.d(t,{db:function(){return c},t:function(){return s}});var n=a(72426),o=a(80797),l=a(69018),i=a(43014),r=(0,n.C6)().length?(0,n.Mq)():(0,n.ZF)({apiKey:"AIzaSyDXlEPMQYhq7o6x21RwfPBQh3sHxo0p4dI",authDomain:"english-website-362600.firebaseapp.com",projectId:"english-website-362600",storageBucket:"english-website-362600.appspot.com",messagingSenderId:"790842426643",appId:"1:790842426643:web:f45d23c026b573e55686e6",measurementId:"G-LX8PL19HD7"}),c=((0,o.IH)(r),(0,i.ad)()),s=(0,l.cF)()},62240:function(e,t,a){e.exports=a.p+"static/media/nature.cf8c8b94a71fde116b4a.jpg"}}]);
//# sourceMappingURL=7831.34b32bb4.chunk.js.map