"use strict";(self.webpackChunkreact_english_website=self.webpackChunkreact_english_website||[]).push([[657],{79579:function(e,t,a){a.d(t,{Z:function(){return g}});a(72791);var i=a(81694),n=a.n(i),o=a(38317),r=a(89526),l=a(38302),c=a(4942),s=a(64996),d=function(e){var t,a,i;return{root:e.mixins.gutters({paddingTop:e.spacing(3),paddingBottom:e.spacing(3),marginBottom:e.spacing(3),boxShadow:e.shade.light,color:e.palette.text.primary,"&$noMargin":{margin:0},marginTop:"160px"}),descBlock:(0,c.Z)({display:"flex",alignItems:"center",marginBottom:e.spacing(5)},e.breakpoints.down("sm"),{marginBottom:e.spacing(3)}),titleText:{flex:1},title:(t={position:"relative",textTransform:"capitalize",fontSize:24,fontWeight:400,color:"dark"===e.palette.type?e.palette.primary.main:e.palette.primary.dark},(0,c.Z)(t,e.breakpoints.down("xs"),{textAlign:"center",fontWeight:600,marginBottom:e.spacing(1)}),(0,c.Z)(t,"fontFamily","CookieRun-Regular"),t),description:(a={maxWidth:960,paddingTop:e.spacing(.5)},(0,c.Z)(a,e.breakpoints.down("xs"),{textAlign:"center"}),(0,c.Z)(a,"fontFamily","CookieRun-Regular"),a),content:(0,c.Z)({marginTop:e.spacing(2),padding:e.spacing(1),borderRadius:e.rounded.medium,backgroundColor:e.palette.background.default},e.breakpoints.up("lg"),{padding:e.spacing(2)}),whiteBg:{backgroundColor:"transparent",margin:0,padding:0},noMargin:{},colorMode:{backgroundColor:"dark"===e.palette.type?e.palette.primary.dark:e.palette.primary.main,"& $title":{color:e.palette.grey[100],"&:after":{borderBottom:"5px solid ".concat(e.palette.primary.light)}},"& $description":{color:e.palette.grey[100]}},overflowX:{width:"100%",overflowX:"auto"},iconTitle:(i={borderRadius:e.rounded.small,border:"dark"===e.palette.type?"none":"1px solid ".concat((0,s.$n)(e.palette.primary.dark,.9)),boxShadow:"0 2px 15px -5px ".concat(e.palette.primary.main),background:"dark"===e.palette.type?e.palette.primary.main:(0,s.$n)(e.palette.primary.light,.5),width:48,height:48,textAlign:"center",lineHeight:"44px",verticalAlign:"middle",marginRight:e.spacing(3)},(0,c.Z)(i,e.breakpoints.down("xs"),{display:"none"}),(0,c.Z)(i,"& i",{fontSize:28,verticalAlign:"baseline",color:"dark"===e.palette.type?e.palette.common.white:e.palette.primary.main}),i)}},p=a(80184);function h(e){var t=e.classes,a=e.title,i=e.desc,o=e.children,c=e.whiteBg,s=e.noMargin,d=e.colorMode,h=e.overflowX,g=e.icon;return(0,p.jsx)("div",{children:(0,p.jsxs)(r.Z,{className:n()(t.root,s&&t.noMargin,d&&t.colorMode),elevation:0,children:[(0,p.jsxs)("div",{className:t.descBlock,children:[(0,p.jsx)("span",{className:t.iconTitle,children:(0,p.jsx)("i",{className:g})}),(0,p.jsxs)("div",{className:t.titleText,children:[(0,p.jsx)(l.Z,{variant:"h6",component:"h2",className:t.title,children:a}),(0,p.jsx)(l.Z,{component:"p",className:t.description,children:i})]})]}),(0,p.jsx)("section",{className:n()(t.content,c&&t.whiteBg,h&&t.overflowX),children:o})]})})}h.defaultProps={whiteBg:!1,noMargin:!1,colorMode:!1,overflowX:!1,icon:"ion-ios-bookmark-outline"};var g=(0,o.Z)(d)(h)},60657:function(e,t,a){a.r(t),a.d(t,{default:function(){return F}});var i=a(72791),n=a(79579),o=a(29439),r=a(38596),l=a(23364),c=a(67025),s=a(28030),d=a(58886),p=a(54789),h=a(21348),g=a(38317),u=a(77690),m=a(81694),f=a.n(m),x=a(38302),b=a(66556),y=a(46593),v=a(17631),Z=a(9773),k=a(43486),w=a(87023),j=a(5932),C=a(48455),S=a(23711),N=a(21079),R=a(82159),T=a(74569),M=a.n(T),z=a(28931),B=a(80184),P=(0,r.Z)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));function W(e){var t=P(),a=(0,l.Z)(),i=e.count,n=e.page,o=e.rowsPerPage,r=e.onPageChange;return(0,B.jsxs)("div",{className:t.root,children:[(0,B.jsx)(c.Z,{onClick:function(e){r(e,0)},disabled:0===n,"aria-label":"first page",children:"rtl"===a.direction?(0,B.jsx)(h.Z,{}):(0,B.jsx)(s.Z,{})}),(0,B.jsx)(c.Z,{onClick:function(e){r(e,n-1)},disabled:0===n,"aria-label":"previous page",children:"rtl"===a.direction?(0,B.jsx)(p.Z,{}):(0,B.jsx)(d.Z,{})}),(0,B.jsx)(c.Z,{onClick:function(e){r(e,n+1)},disabled:n>=Math.ceil(i/o)-1,"aria-label":"next page",children:"rtl"===a.direction?(0,B.jsx)(d.Z,{}):(0,B.jsx)(p.Z,{})}),(0,B.jsx)(c.Z,{onClick:function(e){r(e,Math.max(0,Math.ceil(i/o)-1))},disabled:n>=Math.ceil(i/o)-1,"aria-label":"last page",children:"rtl"===a.direction?(0,B.jsx)(s.Z,{}):(0,B.jsx)(h.Z,{})})]})}var _=(0,g.Z)(j.Z)((function(e){var t=e.classes,a=i.useState(5),n=(0,o.Z)(a,2),r=n[0],l=n[1],c=i.useState(0),s=(0,o.Z)(c,2),d=s[0],p=s[1],h=(0,i.useState)(!1),g=(0,o.Z)(h,2),m=g[0],j=g[1],T=(0,i.useState)(!1),P=(0,o.Z)(T,2),_=(P[0],P[1]),E=(0,i.useState)([]),V=(0,o.Z)(E,2),A=V[0],F=V[1],I=r-Math.min(r,A.length-d*r),L="http://127.0.0.1:8000/",$=(0,z.useHistory)(),H=function(e){console.log(e.id),$.push("/reading/view/"+e.id)};return(0,i.useEffect)((function(){j(!0)})),(0,i.useEffect)((function(){m&&(_(!0),M().get(L+"reading/reading-view/",{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).then((function(e){for(var t,a,i,n,o,r=Object.keys(e.data).length,l=Object.keys(e.data),c=[],s=0;s<r;s++){var d=e.data[l[s]];console.log(d);var p=(t=l[s],a=d.title,i=d.author_name,n=d.created_at,o=d.modified_at,{id:t,title:a,author:i,created_at:n,modified_at:o});c[s]=p}F(c)})).catch((function(e){})))}),[m]),(0,B.jsxs)("div",{className:t.rootTable,children:[(0,B.jsx)(u.Z,{className:t.toolbar,children:(0,B.jsx)("div",{className:t.title,children:(0,B.jsx)(x.Z,{variant:"h6",children:"\ub9ac\ub529 \uc601\uc5b4 \uc790\ub8cc\uc2e4"})})}),(0,B.jsxs)(b.Z,{className:f()(t.table,t.bordered,t.hover),children:[(0,B.jsx)(Z.Z,{children:(0,B.jsxs)(k.Z,{children:[(0,B.jsx)(v.Z,{width:340,className:t.cellTitleStyle,children:"\uc81c\ubaa9"}),(0,B.jsx)(v.Z,{align:"right",className:t.cellTitleStyle,children:"\uae00\uc4f4\uc774"}),(0,B.jsx)(v.Z,{align:"right",className:t.cellTitleStyle,children:"\ub9cc\ub4e0 \ub0a0\uc9dc"}),(0,B.jsx)(v.Z,{align:"right",className:t.cellTitleStyle,children:"\uc218\uc815 \ub0a0\uc9dc"}),(0,B.jsx)(v.Z,{align:"right",className:t.cellTitleStyle,children:"Edit"}),(0,B.jsx)(v.Z,{align:"right",className:t.cellTitleStyle,children:"Delete"})]})}),(0,B.jsxs)(y.Z,{children:[(r>0?A.slice(d*r,d*r+r):A).map((function(e){return(0,B.jsxs)(k.Z,{children:[(0,B.jsx)(v.Z,{padding:"default",className:t.cellRegularStyle,onClick:function(){return H(e)},children:e.title}),(0,B.jsx)(v.Z,{align:"right",className:t.cellRegularStyle,onClick:function(){return H(e)},children:e.author}),(0,B.jsx)(v.Z,{align:"right",className:t.cellRegularStyle,onClick:function(){return H(e)},children:e.created_at}),(0,B.jsx)(v.Z,{align:"right",className:t.cellRegularStyle,onClick:function(){return H(e)},children:e.modified_at}),(0,B.jsx)(v.Z,{align:"right",className:t.cellRegularStyle,children:(0,B.jsx)(C.Z,{color:"textPrimary",href:"/reading/create/"+e.id,className:t.link,children:(0,B.jsx)(N.Z,{})})}),(0,B.jsx)(v.Z,{align:"right",className:t.cellRegularStyle,children:(0,B.jsx)("div",{color:"textPrimary",onClick:function(){return t=e.id,void M().post(L+"reading/reading-delete/"+t,{},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){e.response&&(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers))})).then((function(e){console.log(e),window.location.href="/reading"}));var t},children:(0,B.jsx)(S.Z,{})})})]},e.id)})),I>0&&(0,B.jsx)(k.Z,{style:{height:0*I},children:(0,B.jsx)(v.Z,{colSpan:6,className:t.cellRegularStyle,children:". . . . ."})})]}),(0,B.jsx)(w.Z,{children:(0,B.jsx)(k.Z,{children:(0,B.jsx)(R.Z,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],colSpan:3,count:A.length,rowsPerPage:r,page:d,SelectProps:{inputProps:{"aria-label":"\ud398\uc774\uc9c0\ub2f9 \uba87\uac1c"},native:!0},onPageChange:function(e,t){p(t)},onRowsPerPageChange:function(e){l(parseInt(e.target.value,10)),p(0)},ActionsComponent:W,labelRowsPerPage:"\ud398\uc774\uc9c0\ub2f9 \uba87\uac1c",labelDisplayedRows:function(e){var t=e.from,a=e.to,i=e.count;return"\uc804\uccb4 ".concat(-1!==i?i:"MORE THAN ".concat(a),"\uac1c, ").concat(t,"-").concat(a)}})})})]})]})})),E=a(8826),V=a(63459),A=a(15894);var F=function(e){var t=(0,A.Z)(),a=t.height,o=t.width;return(0,i.useEffect)((function(){null===localStorage.getItem("user_name")&&(window.location.href="/auth/email"),localStorage.getItem("MyProfileOnce")&&localStorage.removeItem("MyProfileOnce"),localStorage.getItem("ChatMessageOnce")&&localStorage.removeItem("ChatMessageOnce")})),(0,B.jsxs)("div",{children:[(0,B.jsx)(n.Z,{title:"Reading Menu",whiteBg:!0,icon:"ion-ios-grid-outline",desc:"\r \ub9ac\ub529 \uba54\ub274 \ud0ed\uc785\ub2c8\ub2e4. \uc601\uc5b4 \ub9ac\ub529 \uc790\ub8cc \uc5c5\ub85c\ub4dc \ubc0f \uc790\ub8cc \uc815\ub9ac, \ub3c5\ud574\uacf5\ubd80\ub97c \ud574\ubd05\uc2dc\ub2e4.",children:(0,B.jsx)("div",{children:(0,B.jsx)(_,{})})}),(0,B.jsx)(E.Z,{color:"secondary","aria-label":"add",style:{position:"relative",marginLeft:"calc(193% - ".concat(o,"px)"),bottom:"calc(190%-".concat(a,"px))")},onClick:function(){window.location.href="/reading/create/"},children:(0,B.jsx)(V.Z,{})})]})}},5932:function(e,t,a){var i=a(4942),n=a(64996);t.Z=function(e){var t;return{root:{paddingRight:e.spacing(1)},rootTable:(t={width:"100%",marginTop:e.spacing(3),overflowX:"auto"},(0,i.Z)(t,"marginTop","50px"),(0,i.Z)(t,"padding","20px"),(0,i.Z)(t,"marginLeft","-30px"),t),cellTitleStyle:{fontFamily:"CookieRun-Regular",fontSize:"15px",fontWeight:"bold"},cellRegularStyle:{fontFamily:"CookieRun-Regular",fontSize:"15px",fontWeight:10},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:(0,n.$n)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},toolbar:{backgroundColor:"dark"===e.palette.type?(0,n._j)(e.palette.primary.main,.6):(0,n.Fq)(e.palette.primary.main,.5),minHeight:48,minWidth:480,"@media (max-width: 500px)":{minWidth:570},"@media (min-width: 500px)":{minWidth:570},"@media (min-width: 600px)":{minWidth:550},"@media (min-width: 1000px)":{minWidth:600}},table:{maxWidth:1500,minWidth:600},title:{flex:"0 0 auto","& h6":{fontSize:18,fontFamily:"CookieRun-Regular",color:"dark"===e.palette.type?(0,n._j)(e.palette.primary.light,.2):(0,n._j)(e.palette.primary.dark,.2)}},hover:{"& tbody tr:hover":{background:"dark"===e.palette.type?(0,n._j)(e.palette.primary.light,.8):(0,n.$n)(e.palette.primary.light,.5)}},bordered:{border:"dark"===e.palette.type?"1px solid ".concat(e.palette.grey[900]):"1px solid ".concat(e.palette.primary.light),"& thead tr":{background:"dark"===e.palette.type?e.palette.grey[900]:e.palette.primary.light},"& td, th":{border:"dark"===e.palette.type?"1px solid ".concat(e.palette.grey[900]):"1px solid ".concat(e.palette.primary.light)},"& tr td, tr th":{"&:first-child":{borderLeft:"none"},"&:last-child":{borderRight:"none"}}}}}},15894:function(e,t,a){a.d(t,{Z:function(){return r}});var i=a(29439),n=a(72791);function o(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function r(){var e=(0,n.useState)(o()),t=(0,i.Z)(e,2),a=t[0],r=t[1];return(0,n.useEffect)((function(){function e(){r(o())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}},8826:function(e,t,a){var i=a(45987),n=a(87462),o=a(72791),r=a(28182),l=a(38317),c=a(26706),s=a(91122),d=o.forwardRef((function(e,t){var a=e.children,l=e.classes,d=e.className,p=e.color,h=void 0===p?"default":p,g=e.component,u=void 0===g?"button":g,m=e.disabled,f=void 0!==m&&m,x=e.disableFocusRipple,b=void 0!==x&&x,y=e.focusVisibleClassName,v=e.size,Z=void 0===v?"large":v,k=e.variant,w=void 0===k?"circular":k,j=(0,i.Z)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return o.createElement(c.Z,(0,n.Z)({className:(0,r.Z)(l.root,d,"large"!==Z&&l["size".concat((0,s.Z)(Z))],f&&l.disabled,"extended"===w&&l.extended,{primary:l.primary,secondary:l.secondary,inherit:l.colorInherit}[h]),component:u,disabled:f,focusRipple:!b,focusVisibleClassName:(0,r.Z)(l.focusVisible,y),ref:t},j),o.createElement("span",{className:l.label},a))}));t.Z=(0,l.Z)((function(e){return{root:(0,n.Z)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(d)},48455:function(e,t,a){var i=a(87462),n=a(45987),o=a(72791),r=a(28182),l=a(91122),c=a(38317),s=a(81175),d=a(69806),p=a(38302),h=o.forwardRef((function(e,t){var a=e.classes,c=e.className,h=e.color,g=void 0===h?"primary":h,u=e.component,m=void 0===u?"a":u,f=e.onBlur,x=e.onFocus,b=e.TypographyClasses,y=e.underline,v=void 0===y?"hover":y,Z=e.variant,k=void 0===Z?"inherit":Z,w=(0,n.Z)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),j=(0,s.Z)(),C=j.isFocusVisible,S=j.onBlurVisible,N=j.ref,R=o.useState(!1),T=R[0],M=R[1],z=(0,d.Z)(t,N);return o.createElement(p.Z,(0,i.Z)({className:(0,r.Z)(a.root,a["underline".concat((0,l.Z)(v))],c,T&&a.focusVisible,"button"===m&&a.button),classes:b,color:g,component:m,onBlur:function(e){T&&(S(),M(!1)),f&&f(e)},onFocus:function(e){C(e)&&M(!0),x&&x(e)},ref:z,variant:k},w))}));t.Z=(0,c.Z)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(h)},63459:function(e,t,a){var i=a(64836),n=a(75263);t.Z=void 0;var o=n(a(72791)),r=(0,i(a(44894)).default)(o.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=r},23711:function(e,t,a){var i=a(64836),n=a(75263);t.Z=void 0;var o=n(a(72791)),r=(0,i(a(44894)).default)(o.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");t.Z=r},21079:function(e,t,a){var i=a(64836),n=a(75263);t.Z=void 0;var o=n(a(72791)),r=(0,i(a(44894)).default)(o.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=r}}]);
//# sourceMappingURL=657.44b60a1d.chunk.js.map