(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var c=n(14),a=n.n(c),r=n(17),s=n(8),o=n(2),i=n(3),l=n(24),d=n(25),j=n(9),u=n(29),p=(n(78),n(1)),m=function(e){return Object(p.jsx)("div",{})},b=n(23),O=n(16),h=n(13),x=(n(79),function(e){var t=Object(l.a)(),n=t.isLoading,c=t.error,i=t.sendRequest,x=t.clearError,f=Object(o.useContext)(h.a),v=Object(o.useState)(!1),C=Object(s.a)(v,2),g=C[0],I=C[1],N=Object(o.useState)(!1),_=Object(s.a)(N,2),w=_[0],y=_[1],k=function(){return I(!1)},D=function(){y(!1)},E=function(){var t=Object(r.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(!1),t.prev=1,t.next=4,i("".concat("https://omar341.onrender.com/api","/places/").concat(e.id),"DELETE",null,{Authorization:"Bearer "+f.token});case 4:e.onDelete(e.id),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}();return Object(p.jsxs)(o.Fragment,{children:[Object(p.jsx)(b.a,{error:c,onClear:x}),Object(p.jsx)(u.a,{show:g,onCancel:k,header:e.address,contentClass:"snapItemModalContent",footerClass:"snapItemModalActions",footer:Object(p.jsx)(j.a,{onClick:k,secondary:!0,children:"Close"}),children:Object(p.jsx)("div",{className:"map-container",children:Object(p.jsx)(m,{center:e.coordinates,zoom:14})})}),Object(p.jsx)(u.a,{show:w,onCancel:D,header:"Are you sure?",contentClass:"snapItemModalContent",footerClass:"snapItemModalActions",footer:Object(p.jsxs)(o.Fragment,{children:[Object(p.jsx)(j.a,{onClick:D,inverse:!0,secondary:!0,children:"Cancel"}),Object(p.jsx)(j.a,{onClick:E,danger:!0,secondary:!0,children:"Delete"})]}),children:Object(p.jsx)("p",{children:"Do you want to proceed and delete this snap? You can't undo this action."})}),Object(p.jsxs)(d.a,{className:"snapItem",children:[n&&Object(p.jsx)(O.a,{asOverlay:!0}),Object(p.jsxs)("li",{children:[Object(p.jsx)("div",{className:"snapItemImg",children:Object(p.jsx)("img",{src:"".concat("https://omar341.onrender.com","/").concat(e.image),alt:e.title})}),Object(p.jsxs)("div",{className:"centerFC small-gap",children:[Object(p.jsxs)("div",{className:"centerFC extra-small-gap snapItem__info",children:[Object(p.jsx)("p",{className:"snapItem__info-title",children:e.title}),Object(p.jsx)("p",{className:"snapItem__info-address",children:e.address}),Object(p.jsx)("p",{className:"snapItem__info-description",children:e.description})]}),Object(p.jsxs)("div",{className:"center-flex-row tg snapItem__actions",children:[Object(p.jsx)(j.a,{secondary:!0,children:"View on Map"}),f.userId===e.creatorId&&Object(p.jsx)(j.a,{to:"/places/".concat(e.id),secondary:!0,inverse:!0,children:"Edit"}),f.userId===e.creatorId&&Object(p.jsx)(j.a,{onClick:function(){y(!0)},secondary:!0,danger:!0,children:"Delete"})]})]})]})]})]})}),f=(n(34),n(80),function(e){return 0===e.items.length?Object(p.jsxs)("div",{className:"centerFC medium-gap no-data-found",children:[Object(p.jsx)("p",{children:"No snaps found. Maybe create one?"}),Object(p.jsx)(j.a,{to:"/places/new",secondary:!0,children:"Create Snap"})]}):Object(p.jsx)("ul",{className:"snaps-list",children:e.items.map((function(t){return Object(p.jsx)(x,{id:t.id,image:t.image,title:t.title,description:t.description,address:t.address,creatorId:t.creator,coordinates:t.location,onDelete:e.onDeleteSnap},t.id)}))})}),v=n(28);n(81),t.default=function(){var e=Object(l.a)(),t=e.isLoading,n=e.error,c=e.sendRequest,d=e.clearError,j=Object(o.useState)(!1),u=Object(s.a)(j,2),m=u[0],h=u[1],x=Object(o.useState)(),C=Object(s.a)(x,2),g=C[0],I=C[1],N=Object(i.h)().userId;Object(o.useEffect)((function(){var e=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("".concat("https://omar341.onrender.com/api","/users/").concat(N));case 3:t=e.sent,I(t.user),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e();var t=function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("".concat("https://omar341.onrender.com/api","/places/user/").concat(N));case 3:t=e.sent,h(t.places),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();t()}),[c,N]);return Object(p.jsxs)(o.Fragment,{children:[Object(p.jsx)(b.a,{error:n,onClear:d}),t&&Object(p.jsx)("div",{className:"",children:Object(p.jsx)(O.a,{})}),!t&&g&&Object(p.jsxs)("div",{className:"user-info centerFC extra-small-gap",children:[Object(p.jsx)("div",{className:"user-info__image",children:Object(p.jsx)(v.a,{image:"".concat("https://omar341.onrender.com","/").concat(g.image)})}),Object(p.jsx)("p",{className:"user-info__name",children:g.name}),Object(p.jsx)("p",{className:"user-info__text",children:g.motto})]}),!t&&m&&Object(p.jsx)(f,{items:m,onDeleteSnap:function(e){h((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})}}}]);
//# sourceMappingURL=5.a4e6d399.chunk.js.map