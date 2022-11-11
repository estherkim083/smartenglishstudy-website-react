"use strict";(self.webpackChunkreact_english_website=self.webpackChunkreact_english_website||[]).push([[9747],{95808:function(e,a,n){var t=n(87462),o=n(45987),i=n(72791),r=n(28182),s=n(38317),c=n(26706),l=i.forwardRef((function(e,a){var n=e.classes,s=e.className,l=e.icon,d=e.label,m=e.onChange,p=e.onClick,u=e.selected,f=e.showLabel,v=e.value,h=(0,o.Z)(e,["classes","className","icon","label","onChange","onClick","selected","showLabel","value"]);return i.createElement(c.Z,(0,t.Z)({ref:a,className:(0,r.Z)(n.root,s,u?n.selected:!f&&n.iconOnly),focusRipple:!0,onClick:function(e){m&&m(e,v),p&&p(e)}},h),i.createElement("span",{className:n.wrapper},l,i.createElement("span",{className:(0,r.Z)(n.label,u?n.selected:!f&&n.iconOnly)},d)))}));a.Z=(0,s.Z)((function(e){return{root:{transition:e.transitions.create(["color","padding-top"],{duration:e.transitions.duration.short}),padding:"6px 12px 8px",minWidth:80,maxWidth:168,color:e.palette.text.secondary,flex:"1","&$iconOnly":{paddingTop:16},"&$selected":{paddingTop:6,color:e.palette.primary.main}},selected:{},iconOnly:{},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"},label:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s","&$iconOnly":{opacity:0,transitionDelay:"0s"},"&$selected":{fontSize:e.typography.pxToRem(14)}}}}),{name:"MuiBottomNavigationAction"})(l)},83898:function(e,a,n){var t=n(87462),o=n(45987),i=n(72791),r=(n(57441),n(28182)),s=n(38317),c=i.forwardRef((function(e,a){var n=e.children,s=e.classes,c=e.className,l=e.component,d=void 0===l?"div":l,m=e.onChange,p=e.showLabels,u=void 0!==p&&p,f=e.value,v=(0,o.Z)(e,["children","classes","className","component","onChange","showLabels","value"]);return i.createElement(d,(0,t.Z)({className:(0,r.Z)(s.root,c),ref:a},v),i.Children.map(n,(function(e,a){if(!i.isValidElement(e))return null;var n=void 0===e.props.value?a:e.props.value;return i.cloneElement(e,{selected:n===f,showLabel:void 0!==e.props.showLabel?e.props.showLabel:u,value:n,onChange:m})})))}));a.Z=(0,s.Z)((function(e){return{root:{display:"flex",justifyContent:"center",height:56,backgroundColor:e.palette.background.paper}}}),{name:"MuiBottomNavigation"})(c)},44697:function(e,a,n){var t=n(87462),o=n(45987),i=n(72791),r=n(28182),s=n(38317),c=i.forwardRef((function(e,a){var n=e.disableSpacing,s=void 0!==n&&n,c=e.classes,l=e.className,d=(0,o.Z)(e,["disableSpacing","classes","className"]);return i.createElement("div",(0,t.Z)({className:(0,r.Z)(c.root,l,!s&&c.spacing),ref:a},d))}));a.Z=(0,s.Z)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(c)},42953:function(e,a,n){var t=n(87462),o=n(45987),i=n(72791),r=n(28182),s=n(38317),c=i.forwardRef((function(e,a){var n=e.classes,s=e.className,c=e.component,l=void 0===c?"div":c,d=(0,o.Z)(e,["classes","className","component"]);return i.createElement(l,(0,t.Z)({className:(0,r.Z)(n.root,s),ref:a},d))}));a.Z=(0,s.Z)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(c)},16685:function(e,a,n){var t=n(87462),o=n(45987),i=n(72791),r=n(28182),s=n(38317),c=["video","audio","picture","iframe","img"],l=i.forwardRef((function(e,a){var n=e.children,s=e.classes,l=e.className,d=e.component,m=void 0===d?"div":d,p=e.image,u=e.src,f=e.style,v=(0,o.Z)(e,["children","classes","className","component","image","src","style"]),h=-1!==c.indexOf(m),Z=!h&&p?(0,t.Z)({backgroundImage:'url("'.concat(p,'")')},f):f;return i.createElement(m,(0,t.Z)({className:(0,r.Z)(s.root,l,h&&s.media,-1!=="picture img".indexOf(m)&&s.img),ref:a,style:Z,src:h?p||u:void 0},v),n)}));a.Z=(0,s.Z)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(l)},10283:function(e,a,n){var t=n(87462),o=n(45987),i=n(72791),r=n(28182),s=n(89526),c=n(38317),l=i.forwardRef((function(e,a){var n=e.classes,c=e.className,l=e.raised,d=void 0!==l&&l,m=(0,o.Z)(e,["classes","className","raised"]);return i.createElement(s.Z,(0,t.Z)({className:(0,r.Z)(n.root,c),elevation:d?8:1,ref:a},m))}));a.Z=(0,c.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},44362:function(e,a,n){var t=n(64836),o=n(75263);a.Z=void 0;var i=o(n(72791)),r=(0,t(n(44894)).default)(i.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");a.Z=r},42124:function(e,a,n){var t=n(64836),o=n(75263);a.Z=void 0;var i=o(n(72791)),r=(0,t(n(44894)).default)(i.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");a.Z=r},43630:function(e,a,n){var t=n(64836),o=n(75263);a.Z=void 0;var i=o(n(72791)),r=(0,t(n(44894)).default)(i.createElement("path",{d:"M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"}),"SupervisorAccount");a.Z=r},58321:function(e,a,n){var t=n(64836),o=n(75263);a.Z=void 0;var i=o(n(72791)),r=(0,t(n(44894)).default)(i.createElement("path",{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"}),"VerifiedUser");a.Z=r}}]);
//# sourceMappingURL=9747.b459b75b.chunk.js.map