(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{70:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return d}));var a=n(28);var i="REQUIRE",r="MINLENGTH",c="MAXLENGTH",l="EMAIL",s=function(){return{type:i}},u=function(e){return{type:r,val:e}},o=function(){return{type:l}},d=function(e,t){var n,s=!0,u=function(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(a.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){s=!0,c=e},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw c}}}}(t);try{for(u.s();!(n=u.n()).done;){var o=n.value;o.type===i&&(s=s&&e.trim().length>0),o.type===r&&(s=s&&e.trim().length>=o.val),o.type===c&&(s=s&&e.trim().length<=o.val),"MIN"===o.type&&(s=s&&+e>=o.val),"MAX"===o.type&&(s=s&&+e<=o.val),o.type===l&&(s=s&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){u.e(d)}finally{u.f()}return s}},71:function(e,t,n){"use strict";var a=n(8),i=n(24),r=n(2),c=n(70),l=(n(72),n(1)),s=function(e,t){switch(t.type){case"CHANGE":return Object(i.a)(Object(i.a)({},e),{},{value:t.val,isValid:Object(c.d)(t.val,t.validators)});case"TOUCH":return Object(i.a)(Object(i.a)({},e),{},{isTouched:!0});default:return e}};t.a=function(e){var t=Object(r.useReducer)(s,{value:e.initialValue||"",isTouched:!1,isValid:e.initialIsValid||!1}),n=Object(a.a)(t,2),i=n[0],c=n[1],u=e.id,o=e.onInput,d=i.value,p=i.isValid;Object(r.useEffect)((function(){o(u,d,p)}),[u,d,p,o]);var f=function(t){c({type:"CHANGE",val:t.target.value,validators:e.validators})},b=function(){c({type:"TOUCH"})},v="input"===e.element?Object(l.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:b,value:i.value}):Object(l.jsx)("textarea",{id:e.id,rows:e.rows||5,onChange:f,onBlur:b,value:i.value});return Object(l.jsxs)("div",{className:"form-control ".concat(!i.isValid&&i.isTouched&&"form-control--invalid"),children:[Object(l.jsx)("label",{htmlFor:e.id,children:e.label}),v,!i.isValid&&i.isTouched&&Object(l.jsx)("p",{children:e.errorText})]})}},72:function(e,t,n){},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(8),i=n(27),r=n(24),c=n(2),l=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var a in e.inputs)e.inputs[a]&&(n=a===t.inputId?n&&t.isValid:n&&e.inputs[a].isValid);return Object(r.a)(Object(r.a)({},e),{},{inputs:Object(r.a)(Object(r.a)({},e.inputs),{},Object(i.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.isValid};default:return e}},s=function(e,t){var n=Object(c.useReducer)(l,{inputs:e,isValid:t}),i=Object(a.a)(n,2),r=i[0],s=i[1],u=Object(c.useCallback)((function(e,t,n){s({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),o=Object(c.useCallback)((function(e,t){s({type:"SET_DATA",inputs:e,isValid:t})}),[]);return[r,u,o]}},76:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(14),i=n.n(a),r=n(17),c=n(8),l=n(2),s=n(3),u=n(71),o=n(9),d=n(18),p=n(25),f=n(16),b=n(70),v=n(73),j=n(26),O=n(13),h=(n(76),n(1));t.default=function(){var e=Object(l.useContext)(O.a),t=Object(j.a)(),n=t.isLoading,a=t.error,y=t.sendRequest,m=t.clearError,x=Object(l.useState)(),V=Object(c.a)(x,2),T=V[0],I=V[1],N=Object(s.h)().snapId,A=Object(s.g)(),C=Object(v.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!0),E=Object(c.a)(C,3),w=E[0],g=E[1],S=E[2];Object(l.useEffect)((function(){var e=function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y("".concat("https://omarapi311.onrender.com/api","/places/").concat(N));case 3:t=e.sent,I(t.place),S({title:{value:t.place.title,isValid:!0},description:{value:t.place.description,isValid:!0}},!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[y,N,S]);var k=function(){var t=Object(r.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,y("".concat("https://omarapi311.onrender.com/api","/places/").concat(N),"PATCH",JSON.stringify({title:w.inputs.title.value,description:w.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+e.token});case 4:A.push("/".concat(e.userId,"/places")),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return n?Object(h.jsx)("div",{className:"center-text",children:Object(h.jsx)(f.a,{})}):T||a?Object(h.jsxs)(l.Fragment,{children:[Object(h.jsx)(p.a,{error:a,onClear:m}),!n&&T&&Object(h.jsx)(d.a,{className:"snap-form",children:Object(h.jsxs)("form",{className:"snap-form",onSubmit:k,children:[Object(h.jsx)(u.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(b.c)()],errorText:"Please enter a valid title.",initialValue:T.title,initialIsValid:!0,onInput:g}),Object(h.jsx)(u.a,{id:"description",element:"textarea",label:"Description",validators:[Object(b.b)(5)],errorText:"Please enter a valid description (min. 5 characters).",initialValue:T.description,initialIsValid:!0,onInput:g}),Object(h.jsx)(o.a,{secondary:!0,type:"submit",disabled:!w.isValid,children:"Update snap"})]})})]}):Object(h.jsx)("div",{className:"center-text no-data-found",children:Object(h.jsx)("p",{children:"Could not find snap!"})})}}}]);
//# sourceMappingURL=6.e691c876.chunk.js.map