(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7],{77:function(e,n,t){},78:function(e,n,t){},79:function(e,n,t){"use strict";var a=t(10),c=t.n(a),s=t(15),r=t(4),o=t(2),i=t(27),l=t(9),d=t(29),j=(t(77),t(1)),p=function(e){var n=Object(o.useRef)(),t=e.center,a=e.zoom;return Object(o.useEffect)((function(){var e=new window.google.maps.Map(n.current,{center:t,zoom:a});new window.google.maps.Marker({position:t,map:e})}),[t,a]),Object(j.jsx)("div",{ref:n,className:"map ".concat(e.className),style:e.style})},m=t(26),u=t(18),b=t(16),x=t(25);t(78),n.a=function(e){var n=Object(x.a)(),t=n.isLoading,a=n.error,O=n.sendRequest,h=n.clearError,f=Object(o.useContext)(b.a),v=Object(o.useState)(!1),g=Object(r.a)(v,2),_=g[0],w=g[1],y=Object(o.useState)(!1),C=Object(r.a)(y,2),N=C[0],k=C[1],E=function(){return w(!1)},D=function(){k(!1)},z=function(){var n=Object(s.a)(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return k(!1),n.prev=1,n.next=4,O("https://snap-app-omarsaade.onrender.com/api/snaps/".concat(e.id),"DELETE",null,{Authorization:"Bearer "+f.token});case 4:e.onDelete(e.id),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(1);case 9:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(){return n.apply(this,arguments)}}();return Object(j.jsxs)(o.Fragment,{children:[Object(j.jsx)(m.a,{error:a,onClear:h}),Object(j.jsx)(d.a,{show:_,onCancel:E,header:e.address,contentClass:"snap-item__modal-content",footerClass:"snap-item__modal-actions",footer:Object(j.jsx)(l.a,{onClick:E,secondary:!0,children:"Close"}),children:Object(j.jsx)("div",{className:"map-container",children:Object(j.jsx)(p,{center:e.coordinates,zoom:14})})}),Object(j.jsx)(d.a,{show:N,onCancel:D,header:"Are you sure?",contentClass:"snap-item__modal-content",footerClass:"snap-item__modal-actions",footer:Object(j.jsxs)(o.Fragment,{children:[Object(j.jsx)(l.a,{onClick:D,inverse:!0,secondary:!0,children:"Cancel"}),Object(j.jsx)(l.a,{onClick:z,danger:!0,secondary:!0,children:"Delete"})]}),children:Object(j.jsx)("p",{children:"Do you want to proceed and delete this snap? You can't undo this action."})}),Object(j.jsxs)(i.a,{className:"snap-item",children:[t&&Object(j.jsx)(u.a,{asOverlay:!0}),Object(j.jsxs)("li",{children:[Object(j.jsx)("div",{className:"snap-item__image",children:Object(j.jsx)("img",{src:"https://snap-app-omarsaade.onrender.com/".concat(e.image),alt:e.title})}),Object(j.jsxs)("div",{className:"center-flex-column small-gap",children:[Object(j.jsxs)("div",{className:"center-flex-column extra-small-gap snap-item__info",children:[Object(j.jsx)("p",{className:"snap-item__info-title",children:e.title}),Object(j.jsx)("p",{className:"snap-item__info-address",children:e.address}),Object(j.jsx)("p",{className:"snap-item__info-description",children:e.description})]}),Object(j.jsxs)("div",{className:"center-flex-row tiny-gap snap-item__actions",children:[Object(j.jsx)(l.a,{onClick:function(){return w(!0)},secondary:!0,children:"View on Map"}),f.userId===e.creatorId&&Object(j.jsx)(l.a,{to:"/snaps/".concat(e.id),secondary:!0,inverse:!0,children:"Edit"}),f.userId===e.creatorId&&Object(j.jsx)(l.a,{onClick:function(){k(!0)},secondary:!0,danger:!0,children:"Delete"})]})]})]})]})]})}},87:function(e,n,t){},91:function(e,n,t){"use strict";t.r(n);var a=t(10),c=t.n(a),s=t(15),r=t(4),o=t(2),i=t(25),l=t(79),d=t(9),j=t(18),p=(t(87),t(1));n.default=function(){var e=Object(i.a)(),n=e.isLoading,t=e.sendRequest,a=Object(o.useState)(),m=Object(r.a)(a,2),u=m[0],b=m[1],x=Object(o.useCallback)(Object(s.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("https://snap-app-omarsaade.onrender.com/api/snaps/random");case 3:n=e.sent,b(n.snap),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[t]);return Object(o.useEffect)((function(){x()}),[x]),Object(p.jsxs)("div",{className:"center-flex-column",children:[Object(p.jsxs)("div",{className:"center-text random-hero center-flex-column extra-small-gap",children:[Object(p.jsx)("p",{className:"random-hero-text",children:"Here is your randomly generated snap."}),Object(p.jsx)(d.a,{primary:!0,inverse:!0,type:"button",size:"medium",onClick:function(){x()},children:"Try again"})]}),n&&Object(p.jsx)("div",{className:"center-text",children:Object(p.jsx)(j.a,{})}),!n&&!u&&Object(p.jsx)("p",{className:"center-text no-data-found",children:"Something went wrong. Please try again."}),!n&&u&&Object(p.jsx)("ul",{className:"random-snap",children:u.map((function(e){return Object(p.jsx)(l.a,{id:e.id,image:e.image,title:e.title,description:e.description,address:e.address,creatorId:e.creator,coordinates:e.location,onDelete:""},e.id)}))})]})}}}]);
//# sourceMappingURL=7.98f2ce6f.chunk.js.map