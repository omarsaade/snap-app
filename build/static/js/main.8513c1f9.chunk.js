(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,,function(e,t,n){"use strict";var c=n(5),a=(n(48),n(1));t.a=function(e){return e.href?Object(a.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"bti"," ").concat(e.danger&&"btdanger"," ").concat(e.whiteBg&&"btnwhite"," ").concat(e.primary&&"button--primary"," ").concat(e.secondary&&"button--secondary"),href:e.href,children:e.children}):e.to?Object(a.jsx)(c.b,{to:e.to,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"bti"," ").concat(e.danger&&"btdanger"," ").concat(e.whiteBg&&"btnwhite"," ").concat(e.primary&&"button--primary"," ").concat(e.secondary&&"button--secondary"),children:e.children}):Object(a.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"bti"," ").concat(e.danger&&"btdanger"," ").concat(e.whiteBg&&"btnwhite"," ").concat(e.primary&&"button--primary"," ").concat(e.secondary&&"button--secondary"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})}},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(2),a=Object(c.createContext)({isLoggedIn:!1,token:null,userId:null,login:function(){},logout:function(){}})},,,function(e,t,n){"use strict";n(58);var c=n(1);t.a=function(e){return Object(c.jsx)("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay"),children:Object(c.jsx)("div",{className:"lds-dual-ring"})})}},,function(e,t,n){"use strict";n(63);var c=n(1);t.a=function(e){return Object(c.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}},function(e,t,n){"use strict";n(62);var c=n(1);t.a=function(e){return Object(c.jsx)("div",{className:"avatar ".concat(e.className),style:e.style,children:Object(c.jsx)("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}})})}},function(e,t,n){"use strict";var c=n(7),a=(n(47),n(1));t.a=function(e){return Object(c.createPortal)(Object(a.jsx)("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}},,,,,function(e,t,n){"use strict";var c=n(30),a=n(9),s=(n(67),n(1));t.a=function(e){return Object(s.jsx)(c.a,{className:"center-text",onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:Object(s.jsx)(a.a,{onClick:e.onClear,secondary:!0,children:"Okay"}),children:Object(s.jsx)("p",{className:"error-modal-text",children:e.error})})}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(14),a=n.n(c),s=n(17),r=n(8),i=n(2),o=(n(1),function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],o=Object(i.useState)(),l=Object(r.a)(o,2),j=l[0],u=l[1],d=Object(i.useRef)([]),b=Object(i.useCallback)(function(){var e=Object(s.a)(a.a.mark((function e(t){var n,s,r,i,o,l,j=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j.length>1&&void 0!==j[1]?j[1]:"GET",s=j.length>2&&void 0!==j[2]?j[2]:null,r=j.length>3&&void 0!==j[3]?j[3]:{},c(!0),i=new AbortController,d.current.push(i),e.prev=6,e.next=9,fetch(t,{method:n,headers:r,body:s,signal:i.signal});case 9:return o=e.sent,e.next=12,o.json();case 12:return l=e.sent,d.current=d.current.filter((function(e){return e!==i})),o.ok,c(!1),e.abrupt("return",l);case 19:e.prev=19,e.t0=e.catch(6),c(!1);case 22:case"end":return e.stop()}}),e,null,[[6,19]])})));return function(t){return e.apply(this,arguments)}}(),[]),h=Object(i.useCallback)((function(){u(null)}),[]);return Object(i.useEffect)((function(){return function(){d.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:n,error:j,sendRequest:b,clearError:h}})},,,function(e,t,n){},function(e,t,n){"use strict";var c=n(24),a=n(2),s=n(7),r=n(69),i=n(20),o=(n(66),n(1)),l=function(e){var t=Object(o.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[Object(o.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:Object(o.jsx)("h2",{children:e.header})}),Object(o.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[Object(o.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),Object(o.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return Object(s.createPortal)(t,document.getElementById("modal-hook"))};t.a=function(e){return Object(o.jsxs)(a.Fragment,{children:[e.show&&Object(o.jsx)(i.a,{onClick:e.onCancel}),Object(o.jsx)(r.a,{in:e.show,timeout:300,classNames:"modal",mountOnEnter:!0,unmountOnExit:!0,children:Object(o.jsx)(l,Object(c.a)({},e))})]})}},,,,,function(e,t,n){},,,,,,,function(e,t,n){},,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c,a=n(2),s=n.n(a),r=n(7),i=n.n(r),o=(n(35),n(3)),l=n(5),j=n(8),u=n(34),d=(n(42),n(1)),b=function(e){return Object(d.jsx)("header",{className:"main-header",children:e.children})},h=n(69),m=(n(44),function(e){var t=Object(d.jsx)(h.a,{in:e.show,timeout:300,classNames:"slide-in-right",mountOnEnter:!0,unmountOnExit:!0,children:Object(d.jsx)("aside",{className:"side-drawer",onClick:e.onClick,children:e.children})});return Object(r.createPortal)(t,document.getElementById("drawer-hook"))}),O=n(20),x=n(33),f=n(9),p=n(13),g=(n(55),function(){var e=Object(a.useContext)(p.a);return Object(d.jsxs)("ul",{className:"center-flex-row medium-gap nav-links",children:[Object(d.jsx)("li",{children:Object(d.jsx)(x.a,{smooth:!0,to:"/#users",exact:!0,children:"All Users"})}),e.isLoggedIn&&Object(d.jsx)("li",{children:Object(d.jsx)(l.c,{to:"/".concat(e.userId,"/places"),children:"My Snaps"})}),e.isLoggedIn&&Object(d.jsx)("li",{children:Object(d.jsx)(l.c,{to:"/places/new",children:"Add Snap"})}),!e.isLoggedIn&&Object(d.jsx)("li",{children:Object(d.jsx)(f.a,{to:"/auth",type:"button",size:"medium",secondary:!0,children:"Get Started"})}),e.isLoggedIn&&Object(d.jsx)("li",{children:Object(d.jsx)(f.a,{type:"button",size:"medium",secondary:!0,onClick:e.logout,children:"Logout"})})]})}),v=(n(56),function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],s=function(){c(!1)};return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(m,{show:n,onClick:s,children:Object(d.jsx)("nav",{className:"main-navigation__drawer-nav",children:Object(d.jsx)(g,{})})}),n&&Object(d.jsx)(O.a,{onClick:s}),Object(d.jsxs)(b,{children:[Object(d.jsxs)("h1",{className:"center-flex-row tg mainNTitle",children:[Object(d.jsx)(u.a,{title:"camera icon"}),Object(d.jsx)(l.b,{to:"/",children:"snap"})]}),Object(d.jsx)("nav",{className:"main-navigation__links",children:Object(d.jsx)(g,{})}),Object(d.jsxs)("button",{className:"mainNavigationBtn",onClick:function(){c(!0)},children:[Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})]})]})}),N=(n(57),function(){return Object(d.jsx)("footer",{className:"footer-section center-text",children:"\xa9 2022 Omar Saade. All rights reserved."})}),y=n(16),I=n(14),C=n.n(I),k=n(17),w=(n(60),function(){return Object(d.jsxs)("section",{className:"center-text small-gap centerFC section-hero",children:[Object(d.jsx)("h1",{className:"hero-heading",children:"Snap"}),Object(d.jsx)("p",{className:"hero-description",children:"A photo sharing platform for people who love architecture."})]})}),S=n(15),T=(n(61),function(){return Object(d.jsxs)("section",{className:"center-text large-gap center-flex-row sectionFeatures",children:[Object(d.jsxs)("div",{className:"feature centerFC tg",children:[Object(d.jsx)("div",{className:"featureIcon",children:Object(d.jsx)(S.a,{title:"share icon"})}),Object(d.jsx)("p",{className:"featureTitle",children:"Share"}),Object(d.jsx)("p",{className:"featureText",children:"Upload favorite snaps and share with others."})]}),Object(d.jsxs)("div",{className:"feature centerFC tg",children:[Object(d.jsx)("div",{className:"featureIcon",children:Object(d.jsx)(S.e,{})}),Object(d.jsx)("p",{className:"featureTitle",children:"Navigate"}),Object(d.jsx)("p",{className:"featureText",children:"Pick one snap interests you. See where it is."})]}),Object(d.jsxs)("div",{className:"feature centerFC tg",children:[Object(d.jsx)("div",{className:"featureIcon",children:Object(d.jsx)(S.c,{})}),Object(d.jsx)("p",{className:"featureTitle",children:"Architecture"}),Object(d.jsx)("p",{className:"featureText",children:"Delve into unique architecture. Be inspired."})]}),Object(d.jsxs)("div",{className:"feature centerFC tg",children:[Object(d.jsx)("div",{className:"featureIcon",children:Object(d.jsx)(S.d,{})}),Object(d.jsx)("p",{className:"featureTitle",children:"Plan"}),Object(d.jsx)("p",{className:"featureText",children:"Explore selected tours. Plan a visit."})]}),Object(d.jsx)("div",{className:"scrollDown",children:Object(d.jsx)(S.b,{})})]})}),_=n(19),E=n(18),F=(n(29),function(e){return Object(d.jsx)(E.a,{className:"userItem",children:Object(d.jsxs)("li",{className:"centerFC medium-gap",children:[Object(d.jsx)("div",{className:"userItem__image",children:Object(d.jsx)(_.a,{image:"".concat("https://omarapi311.onrender.com","/").concat(e.image),alt:e.name})}),Object(d.jsxs)("div",{className:"userItem__info",children:[Object(d.jsx)("p",{className:"userItemInfoName",children:e.name}),Object(d.jsx)("p",{className:"userInfoText",children:e.motto})]}),Object(d.jsxs)(f.a,{to:"/".concat(e.id,"/places"),secondary:!0,children:[e.snapCount," ",1===e.snapCount?"Snap":"Snaps"]})]})})}),D=function(e){return Object(d.jsx)(E.a,{className:"userItem",children:Object(d.jsxs)("li",{className:"centerFC medium-gap",children:[Object(d.jsx)("div",{className:"userItem__image",children:Object(d.jsx)(_.a,{image:e.image,alt:e.name})}),Object(d.jsxs)("div",{className:"userItem__info",children:[Object(d.jsx)("p",{className:"userItemInfoName",children:e.name}),Object(d.jsx)("p",{className:"userInfoText",children:e.motto})]}),Object(d.jsxs)(f.a,{to:"/".concat(e.id,"/places"),secondary:!0,children:[e.snapCount," ",1===e.snapCount?"Snap":"Snaps"]})]})})},L=n.p+"static/media/p12.ffd372f6.jpg",P=n.p+"static/media/p11.be9a79e2.jpeg",z=n.p+"static/media/p15.64120235.jpg",B=(n(64),[{id:123,name:"Sami Clark",motto:"it's Trip Time.",image:L,places:{length:0}},{id:124,name:"Sara Hoblos",motto:"P-P-P-Pick up an arhitecture.",image:P,places:{length:0}},{id:125,name:"Fadi Harb",motto:"If you can't beat life,join life",image:z,places:{length:0}}]),A=function(e){if(0===e.items.length)return Object(d.jsx)("div",{className:"center-text no-data-found",children:Object(d.jsx)("p",{children:"No Users Found."})});var t=B.map((function(e){return Object(d.jsx)(D,{id:e.id,name:e.name,motto:e.motto,image:e.image,snapCount:e.places.length},e.id)}));return Object(d.jsxs)("div",{className:"users-section center-text",id:"users",children:[Object(d.jsx)("h2",{children:"HIGHLIGHTS"}),Object(d.jsxs)("ul",{className:"users-list",children:[t,e.items.map((function(e){return Object(d.jsx)(F,{id:e.id,name:e.name,motto:e.motto,image:e.image,snapCount:e.places.length},e.id)}))]})]})},G=(n(65),function(){return Object(a.useContext)(p.a).isLoggedIn?null:Object(d.jsxs)("div",{className:"aSection centerFC extra-small-gap",children:[Object(d.jsx)("p",{className:"aSectiontext",children:"Join us. Start your journey here."}),Object(d.jsx)(f.a,{to:"/auth",type:"button",size:"medium",primary:!0,inverse:!0,children:"Get Started"})]})}),H=n(25),J=n(26),q=function(){var e=Object(J.a)(),t=e.isLoading,n=e.error,c=e.sendRequest,s=e.clearError,r=Object(a.useState)(),i=Object(j.a)(r,2),o=i[0],l=i[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(k.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("".concat("https://omarapi311.onrender.com/api","/users"));case 3:t=e.sent,l(t.users),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[c]),Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(H.a,{error:n,onClear:s}),Object(d.jsx)(w,{}),Object(d.jsx)(T,{}),t&&Object(d.jsx)("div",{className:"center-flex-row",children:Object(d.jsx)(y.a,{})}),!t&&o&&Object(d.jsx)(A,{items:o}),Object(d.jsx)(G,{})]})},R=s.a.lazy((function(){return n.e(4).then(n.bind(null,82))})),U=s.a.lazy((function(){return n.e(5).then(n.bind(null,85))})),M=s.a.lazy((function(){return n.e(3).then(n.bind(null,83))})),K=s.a.lazy((function(){return n.e(6).then(n.bind(null,84))})),Q=function(){var e,t=function(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(),i=Object(j.a)(r,2),o=i[0],l=i[1],u=Object(a.useState)(null),d=Object(j.a)(u,2),b=d[0],h=d[1],m=Object(a.useCallback)((function(e,t,n){s(t),h(e);var c=n||new Date((new Date).getTime()+36e5);l(c),localStorage.setItem("userData",JSON.stringify({userId:e,token:t,expiration:c.toISOString()}))}),[]),O=Object(a.useCallback)((function(){s(null),h(null),localStorage.removeItem("userData")}),[]);return Object(a.useEffect)((function(){if(n&&o){var e=o.getTime()-(new Date).getTime();c=setTimeout(O,e)}else clearTimeout(c);n&&o||clearTimeout(c)}),[n,O,o]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&m(e.userId,e.token,new Date(e.expiration))}),[m]),{token:n,login:m,logout:O,userId:b}}(),n=t.token,s=t.login,r=t.logout,i=t.userId;return n&&(e=Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{path:"/",exact:!0,children:Object(d.jsx)(q,{})}),Object(d.jsx)(o.b,{path:"/:userId/places",exact:!0,children:Object(d.jsx)(U,{})}),Object(d.jsx)(o.b,{path:"/places/new",exact:!0,children:Object(d.jsx)(M,{})}),Object(d.jsx)(o.b,{path:"/places/:snapId",children:Object(d.jsx)(K,{})}),Object(d.jsx)(o.a,{to:"/"})]})),n||(e=Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{path:"/",exact:!0,children:Object(d.jsx)(q,{})}),Object(d.jsx)(o.b,{path:"/:userId/places",exact:!0,children:Object(d.jsx)(U,{})}),Object(d.jsx)(o.b,{path:"/auth",children:Object(d.jsx)(R,{})}),Object(d.jsx)(o.a,{to:"/auth"})]})),Object(d.jsx)(p.a.Provider,{value:{isLoggedIn:!!n,token:n,userId:i,login:s,logout:r},children:Object(d.jsxs)(l.a,{basename:"/snap-app",children:[Object(d.jsx)(v,{}),Object(d.jsx)("main",{children:Object(d.jsx)(a.Suspense,{fallback:Object(d.jsx)("div",{className:"center-text",children:Object(d.jsx)(y.a,{})}),children:e})}),Object(d.jsx)(N,{})]})})};i.a.render(Object(d.jsx)(Q,{}),document.getElementById("root"))}],[[68,1,2]]]);
//# sourceMappingURL=main.8513c1f9.chunk.js.map