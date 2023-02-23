(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{74:function(e,t,a){"use strict";var i=a(4),n=a(12),c=a(2),r=a(19),s=(a(75),a(1)),l=function(e,t){switch(t.type){case"CHANGE":return Object(n.a)(Object(n.a)({},e),{},{value:t.val,isValid:Object(r.d)(t.val,t.validators)});case"TOUCH":return Object(n.a)(Object(n.a)({},e),{},{isTouched:!0});default:return e}};t.a=function(e){var t=Object(c.useReducer)(l,{value:e.initialValue||"",isTouched:!1,isValid:e.initialIsValid||!1}),a=Object(i.a)(t,2),n=a[0],r=a[1],u=e.id,o=e.onInput,d=n.value,p=n.isValid;Object(c.useEffect)((function(){o(u,d,p)}),[u,d,p,o]);var j=function(t){r({type:"CHANGE",val:t.target.value,validators:e.validators})},O=function(){r({type:"TOUCH"})},b="input"===e.element?Object(s.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:j,onBlur:O,value:n.value}):Object(s.jsx)("textarea",{id:e.id,rows:e.rows||5,onChange:j,onBlur:O,value:n.value});return Object(s.jsxs)("div",{className:"form-control ".concat(!n.isValid&&n.isTouched&&"form-control--invalid"),children:[Object(s.jsx)("label",{htmlFor:e.id,children:e.label}),b,!n.isValid&&n.isTouched&&Object(s.jsx)("p",{children:e.errorText})]})}},75:function(e,t,a){},76:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a(4),n=a(28),c=a(12),r=a(2),s=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var i in e.inputs)e.inputs[i]&&(a=i===t.inputId?a&&t.isValid:a&&e.inputs[i].isValid);return Object(c.a)(Object(c.a)({},e),{},{inputs:Object(c.a)(Object(c.a)({},e.inputs),{},Object(n.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.isValid};default:return e}},l=function(e,t){var a=Object(r.useReducer)(s,{inputs:e,isValid:t}),n=Object(i.a)(a,2),c=n[0],l=n[1],u=Object(r.useCallback)((function(e,t,a){l({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),o=Object(r.useCallback)((function(e,t){l({type:"SET_DATA",inputs:e,isValid:t})}),[]);return[c,u,o]}},84:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var i=a(10),n=a.n(i),c=a(15),r=a(4),s=a(2),l=a(3),u=a(74),o=a(9),d=a(27),p=a(26),j=a(18),O=a(19),b=a(76),v=a(25),f=a(16),h=(a(84),a(1));t.default=function(){var e=Object(s.useContext)(f.a),t=Object(v.a)(),a=t.isLoading,i=t.error,T=t.sendRequest,x=t.clearError,V=Object(s.useState)(),_=Object(r.a)(V,2),C=_[0],E=_[1],S=Object(l.h)().snapId,m=Object(l.g)(),A=Object(b.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!0),N=Object(r.a)(A,3),y=N[0],I=N[1],P=N[2];Object(s.useEffect)((function(){var e=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/snap-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"/snaps/").concat(S));case 3:t=e.sent,E(t.snap),P({title:{value:t.snap.title,isValid:!0},description:{value:t.snap.description,isValid:!0}},!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[T,S,P]);var R=function(){var t=Object(c.a)(n.a.mark((function t(a){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,T("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/snap-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL,"/snaps/").concat(S),"PATCH",JSON.stringify({title:y.inputs.title.value,description:y.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+e.token});case 4:m.push("/".concat(e.userId,"/snaps")),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return a?Object(h.jsx)("div",{className:"center-text",children:Object(h.jsx)(j.a,{})}):C||i?Object(h.jsxs)(s.Fragment,{children:[Object(h.jsx)(p.a,{error:i,onClear:x}),!a&&C&&Object(h.jsx)(d.a,{className:"snap-form",children:Object(h.jsxs)("form",{className:"snap-form",onSubmit:R,children:[Object(h.jsx)(u.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(O.c)()],errorText:"Please enter a valid title.",initialValue:C.title,initialIsValid:!0,onInput:I}),Object(h.jsx)(u.a,{id:"description",element:"textarea",label:"Description",validators:[Object(O.b)(5)],errorText:"Please enter a valid description (min. 5 characters).",initialValue:C.description,initialIsValid:!0,onInput:I}),Object(h.jsx)(o.a,{secondary:!0,type:"submit",disabled:!y.isValid,children:"Update snap"})]})})]}):Object(h.jsx)("div",{className:"center-text no-data-found",children:Object(h.jsx)("p",{children:"Could not find snap!"})})}}}]);
//# sourceMappingURL=8.f62efda5.chunk.js.map