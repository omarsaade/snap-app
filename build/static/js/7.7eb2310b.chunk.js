(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7],{77:function(e,n,t){},78:function(e,n,t){},79:function(e,n,t){"use strict";var a=t(10),c=t.n(a),s=t(15),r=t(4),o=t(2),i=t(27),d=t(9),l=t(29),j=(t(77),t(1)),u=function(e){var n=Object(o.useRef)(),t=e.center,a=e.zoom;return Object(o.useEffect)((function(){var e=new window.google.maps.Map(n.current,{center:t,zoom:a});new window.google.maps.Marker({position:t,map:e})}),[t,a]),Object(j.jsx)("div",{ref:n,className:"map ".concat(e.className),style:e.style})},p=t(26),O=t(18),m=t(16),b=t(25);t(78),n.a=function(e){var n=Object(b.a)(),t=n.isLoading,a=n.error,_=n.sendRequest,x=n.clearError,f=Object(o.useContext)(m.a),h=Object(o.useState)(!1),v=Object(r.a)(h,2),C=v[0],E=v[1],S=Object(o.useState)(!1),T=Object(r.a)(S,2),N=T[0],g=T[1],R=function(){return E(!1)},D=function(){g(!1)},w=function(){var n=Object(s.a)(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!1),n.prev=1,n.next=4,_("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/snap-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"/snaps/").concat(e.id),"DELETE",null,{Authorization:"Bearer "+f.token});case 4:e.onDelete(e.id),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(1);case 9:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(){return n.apply(this,arguments)}}();return Object(j.jsxs)(o.Fragment,{children:[Object(j.jsx)(p.a,{error:a,onClear:x}),Object(j.jsx)(l.a,{show:C,onCancel:R,header:e.address,contentClass:"snap-item__modal-content",footerClass:"snap-item__modal-actions",footer:Object(j.jsx)(d.a,{onClick:R,secondary:!0,children:"Close"}),children:Object(j.jsx)("div",{className:"map-container",children:Object(j.jsx)(u,{center:e.coordinates,zoom:14})})}),Object(j.jsx)(l.a,{show:N,onCancel:D,header:"Are you sure?",contentClass:"snap-item__modal-content",footerClass:"snap-item__modal-actions",footer:Object(j.jsxs)(o.Fragment,{children:[Object(j.jsx)(d.a,{onClick:D,inverse:!0,secondary:!0,children:"Cancel"}),Object(j.jsx)(d.a,{onClick:w,danger:!0,secondary:!0,children:"Delete"})]}),children:Object(j.jsx)("p",{children:"Do you want to proceed and delete this snap? You can't undo this action."})}),Object(j.jsxs)(i.a,{className:"snap-item",children:[t&&Object(j.jsx)(O.a,{asOverlay:!0}),Object(j.jsxs)("li",{children:[Object(j.jsx)("div",{className:"snap-item__image",children:Object(j.jsx)("img",{src:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/snap-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ASSET_URL,"/").concat(e.image),alt:e.title})}),Object(j.jsxs)("div",{className:"center-flex-column small-gap",children:[Object(j.jsxs)("div",{className:"center-flex-column extra-small-gap snap-item__info",children:[Object(j.jsx)("p",{className:"snap-item__info-title",children:e.title}),Object(j.jsx)("p",{className:"snap-item__info-address",children:e.address}),Object(j.jsx)("p",{className:"snap-item__info-description",children:e.description})]}),Object(j.jsxs)("div",{className:"center-flex-row tiny-gap snap-item__actions",children:[Object(j.jsx)(d.a,{onClick:function(){return E(!0)},secondary:!0,children:"View on Map"}),f.userId===e.creatorId&&Object(j.jsx)(d.a,{to:"/snaps/".concat(e.id),secondary:!0,inverse:!0,children:"Edit"}),f.userId===e.creatorId&&Object(j.jsx)(d.a,{onClick:function(){g(!0)},secondary:!0,danger:!0,children:"Delete"})]})]})]})]})]})}},87:function(e,n,t){},91:function(e,n,t){"use strict";t.r(n);var a=t(10),c=t.n(a),s=t(15),r=t(4),o=t(2),i=t(25),d=t(79),l=t(9),j=t(18),u=(t(87),t(1));n.default=function(){var e=Object(i.a)(),n=e.isLoading,t=e.sendRequest,a=Object(o.useState)(),p=Object(r.a)(a,2),O=p[0],m=p[1],b=Object(o.useCallback)(Object(s.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/snap-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"/snaps/random"));case 3:n=e.sent,m(n.snap),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[t]);return Object(o.useEffect)((function(){b()}),[b]),Object(u.jsxs)("div",{className:"center-flex-column",children:[Object(u.jsxs)("div",{className:"center-text random-hero center-flex-column extra-small-gap",children:[Object(u.jsx)("p",{className:"random-hero-text",children:"Here is your randomly generated snap."}),Object(u.jsx)(l.a,{primary:!0,inverse:!0,type:"button",size:"medium",onClick:function(){b()},children:"Try again"})]}),n&&Object(u.jsx)("div",{className:"center-text",children:Object(u.jsx)(j.a,{})}),!n&&!O&&Object(u.jsx)("p",{className:"center-text no-data-found",children:"Something went wrong. Please try again."}),!n&&O&&Object(u.jsx)("ul",{className:"random-snap",children:O.map((function(e){return Object(u.jsx)(d.a,{id:e.id,image:e.image,title:e.title,description:e.description,address:e.address,creatorId:e.creator,coordinates:e.location,onDelete:""},e.id)}))})]})}}}]);
//# sourceMappingURL=7.7eb2310b.chunk.js.map