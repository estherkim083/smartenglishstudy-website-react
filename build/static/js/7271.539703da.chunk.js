"use strict";(self.webpackChunkreact_english_website=self.webpackChunkreact_english_website||[]).push([[7271],{77271:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var o=n(29439),a=n(72791),l=n(79579),i=n(38596),r=n(1288),c=n(23364),s=n(67025),u=n(28030),g=n(58886),d=n(54789),h=n(21348),p=n(38317),f=n(81694),m=n.n(f),j=n(66556),x=n(46593),Z=n(17631),k=n(9773),b=n(43486),y=n(87023),S=n(5932),w=n(82159),C=n(28931),v=n(94446),_={},I=n(80184),N=(0,i.Z)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));function P(e){var t=N(),n=(0,c.Z)(),o=e.count,a=e.page,l=e.rowsPerPage,i=e.onPageChange;return(0,I.jsxs)("div",{className:t.root,children:[(0,I.jsx)(s.Z,{onClick:function(e){i(e,0)},disabled:0===a,"aria-label":"first page",children:"rtl"===n.direction?(0,I.jsx)(h.Z,{}):(0,I.jsx)(u.Z,{})}),(0,I.jsx)(s.Z,{onClick:function(e){i(e,a-1)},disabled:0===a,"aria-label":"previous page",children:"rtl"===n.direction?(0,I.jsx)(d.Z,{}):(0,I.jsx)(g.Z,{})}),(0,I.jsx)(s.Z,{onClick:function(e){i(e,a+1)},disabled:a>=Math.ceil(o/l)-1,"aria-label":"next page",children:"rtl"===n.direction?(0,I.jsx)(g.Z,{}):(0,I.jsx)(d.Z,{})}),(0,I.jsx)(s.Z,{onClick:function(e){i(e,Math.max(0,Math.ceil(o/l)-1))},disabled:a>=Math.ceil(o/l)-1,"aria-label":"last page",children:"rtl"===n.direction?(0,I.jsx)(u.Z,{}):(0,I.jsx)(h.Z,{})})]})}var R=(0,p.Z)(S.Z)((function(e){var t=e.classes,n=e.datas,l=a.useState(5),i=(0,o.Z)(l,2),r=i[0],c=i[1],s=a.useState(0),u=(0,o.Z)(s,2),g=u[0],d=u[1],h=function(e){switch(e){case e<=10:return _.bgError;case e<=20:return _.bgWarning;case e<=70:return _.bgDefault;case e<=85:return _.bgInfo;case e<=100:return _.bgSuccess;default:return _.bgDefault}},p=(0,a.useState)(!1),f=(0,o.Z)(p,2),S=f[0],N=f[1],R=(0,a.useState)(!1),T=(0,o.Z)(R,2),O=(T[0],T[1]),M=(0,C.useParams)().id,z=null!=n?r-Math.min(r,n.length-g*r):-1,A=(0,C.useHistory)();(0,a.useEffect)((function(){N(!0)})),(0,a.useEffect)((function(){S&&O(!0),console.log(n)}),[S]);var E=function(e,t){A.push("/writing/book/"+M+"/"+e+"/"+t.email)};return(0,I.jsx)("div",{className:t.rootTable,children:(0,I.jsxs)(j.Z,{className:m()(t.table,t.bordered,t.hover),children:[(0,I.jsx)(k.Z,{children:(0,I.jsxs)(b.Z,{children:[(0,I.jsx)(Z.Z,{width:130,className:t.cellTitleStyle,children:"\uc774\ub984\xa0\xa0\u2618"}),(0,I.jsx)(Z.Z,{width:150,align:"right",className:t.cellTitleStyle,children:"\ubc29\ucc38\uc5ec\ub0a0\uc9dc"}),(0,I.jsx)(Z.Z,{width:150,align:"right",className:t.cellTitleStyle,children:"\uc218\uc815\ub0a0\uc9dc"}),(0,I.jsx)(Z.Z,{width:430,align:"center",className:t.cellTitleStyle,children:"\uc5d0\uc138\uc774\uc81c\ubaa9"}),(0,I.jsx)(Z.Z,{width:150,align:"right",className:t.cellTitleStyle,children:"\ucc45\uc9c4\ud589\uc815\ub3c4"})]})}),(0,I.jsxs)(x.Z,{children:[null!=n&&(r>0?Object.entries(n).slice(g*r,g*r+r):Object.entries(n)).map((function(e){var n=(0,o.Z)(e,2),a=n[0],l=n[1];return(0,I.jsxs)(b.Z,{children:[(0,I.jsx)(Z.Z,{padding:"default",className:t.cellRegularStyle,onClick:function(){return E(a,l)},children:l.user_name}),(0,I.jsx)(Z.Z,{align:"right",className:t.cellRegularStyle,onClick:function(){return E(a,l)},children:l.participated_at}),(0,I.jsx)(Z.Z,{align:"right",className:t.cellRegularStyle,onClick:function(){return E(a,l)},children:l.modified_at}),(0,I.jsx)(Z.Z,{align:"center",className:t.cellRegularStyle,onClick:function(){return E(a,l)},children:l.topic}),(0,I.jsxs)(Z.Z,{align:"center",className:t.cellRegularStyle,onClick:function(){return E(a,l)},children:[(0,I.jsx)(v.Z,{variant:"determinate",className:h(parseInt(l.book_progress)),value:parseInt(l.book_progress)})," ",console.log(parseInt(l.book_progress))]})]},a)})),z>0&&(0,I.jsx)(b.Z,{style:{height:0*z},children:(0,I.jsx)(Z.Z,{colSpan:6,className:t.cellRegularStyle,children:". . . . ."})})]}),(0,I.jsx)(y.Z,{children:(0,I.jsx)(b.Z,{children:null!=n&&void 0!=n&&(0,I.jsx)(w.Z,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],colSpan:3,count:Object.keys(n).length,rowsPerPage:r,page:g,SelectProps:{inputProps:{"aria-label":"\ud398\uc774\uc9c0\ub2f9 \uba87\uac1c"},native:!0},onPageChange:function(e,t){d(t)},onRowsPerPageChange:function(e){c(parseInt(e.target.value,10)),d(0)},ActionsComponent:P,labelRowsPerPage:"\ud398\uc774\uc9c0\ub2f9 \uba87\uac1c",labelDisplayedRows:function(e){var t=e.from,n=e.to,o=e.count;return"\uc804\uccb4 ".concat(-1!==o?o:"MORE THAN ".concat(n),"\uac1c, ").concat(t,"-").concat(n)}})})})]})})})),T=n(74569),O=n.n(T),M=n(38956),z=n(55121),A=n(47788),E=n(38302),B=n(97595),F=n(26513),D=n(72741),W=(0,i.Z)((function(e){return{joinButton:{backgroundColor:"dark"===e.palette.type?e.palette.primary.dark:e.palette.primary.main,color:(e.palette.type,e.palette.common.white),width:"8%",fontFamily:"CookieRun-Regular",fontSize:"15px",marginTop:"30px","&:hover":{backgroundColor:"dark"===e.palette.type?e.palette.primary.main:e.palette.primary.dark}}}}));var H=function(e){var t=W(),n=(0,C.useParams)().id,i=(0,a.useState)(!1),c=(0,o.Z)(i,2),s=c[0],u=c[1],g=(0,a.useState)(!1),d=(0,o.Z)(g,2),h=d[0],p=d[1],f=(0,a.useState)({}),m=(0,o.Z)(f,2),j=m[0],x=m[1],Z="https://english-1.azurewebsites.net/",k=(0,a.useState)(null),b=(0,o.Z)(k,2),y=b[0],S=b[1],w=(0,a.useCallback)((function(e){S(y!==e&&e)}),[y]);return(0,a.useEffect)((function(){null===localStorage.getItem("user_name")&&(window.location.href="/auth/"),localStorage.getItem("MyProfileOnce")&&localStorage.removeItem("MyProfileOnce"),localStorage.getItem("ChatMessageOnce")&&localStorage.removeItem("ChatMessageOnce"),u(!0)})),(0,a.useEffect)((function(){s&&O().get(Z+"writing/get-book-writing-room-data/"+n,{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).then((function(e){x(e.data),console.log(e.data),p(!0)})).catch((function(e){}))}),[s]),h?(0,I.jsx)("div",{children:(0,I.jsx)(l.Z,{title:"BookWriting Menu",whiteBg:!0,icon:"ion-ios-grid-outline",desc:"\r \uc601\uc5b4\ucc45 \uae00\uc4f0\uae30 \uba54\ub274 \ud0ed\uc785\ub2c8\ub2e4. \uc601\uc5b4\ucc45 \uae00\uc4f0\uae30 \ubc29\uc744 \ud615\uc131\ud574 Summary \ub610\ub294 \ucc45\uc8fc\uc81c\uae00\uc744 \uc9c1\uc811 \uc791\uc131\ud558\uace0 \uacf5\uc720\ud574\ubcf4\uc138\uc694. ",children:(0,I.jsx)(r.Z,{container:!0,alignItems:"flex-start",justify:"center",direction:"row",style:{padding:"80px",marginTop:"-100px"},spacing:2,children:null!=j&&void 0!=j&&0!=Object.keys(j).length&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(r.Z,{item:!0,md:12,children:[console.log(j),(0,I.jsxs)(M.Z,{expanded:"panel1"===y,onChange:function(){return w("panel1")},children:[(0,I.jsx)(A.Z,{expandIcon:(0,I.jsx)(B.Z,{}),children:(0,I.jsx)(E.Z,{style:{fontSize:"20px",fontWeight:"bold",fontFamily:"CookieRun-Regular"},children:0!=Object.keys(j.room_info.topic).length?j.room_info.topic:""})}),(0,I.jsx)(z.Z,{children:(0,I.jsx)(E.Z,{style:{fontFamily:"CookieRun-Regular"},children:0!=Object.keys(j.room_info.about_content).length?j.room_info.about_content:""})})]})]}),(0,I.jsx)(r.Z,{item:!0,md:12,children:(0,I.jsx)(R,{datas:0!=Object.keys(j.books_info)?j.books_info:null})}),0==j.room_info.participating?(0,I.jsx)(r.Z,{item:!0,md:12,children:(0,I.jsx)(F.Z,{className:t.joinButton,onClick:function(){O().post(Z+"writing/join-book-writing-room/"+n,{},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){})).then((function(e){console.log(e),window.location.href="/writing/book/"+n}))},children:"\ubc29 \ucc38\uc5ec\ud558\uae30"})}):(0,I.jsx)(r.Z,{item:!0,md:12,children:(0,I.jsx)(F.Z,{className:t.joinButton,onClick:function(){O().post(Z+"writing/unjoin-book-writing-room/"+n,{},{headers:{Authorization:localStorage.getItem("token")?"Token "+localStorage.getItem("token"):null,"Content-Type":"application/json",accept:"application/json"}}).catch((function(e){})).then((function(e){console.log(e),window.location.href="/writing/book/"+n}))},children:"\ubc29 \ud0c8\ud1f4\ud558\uae30"})})]})})})}):(0,I.jsx)(D.Z,{})}}}]);
//# sourceMappingURL=7271.539703da.chunk.js.map