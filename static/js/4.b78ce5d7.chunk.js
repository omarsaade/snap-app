(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[4],{70:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return d}));var a=n(27);var i="REQUIRE",r="MINLENGTH",c="MAXLENGTH",s="EMAIL",o=function(){return{type:i}},l=function(e){return{type:r,val:e}},u=function(){return{type:s}},d=function(e,t){var n,o=!0,l=function(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(a.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,s=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,c=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw c}}}}(t);try{for(l.s();!(n=l.n()).done;){var u=n.value;u.type===i&&(o=o&&e.trim().length>0),u.type===r&&(o=o&&e.trim().length>=u.val),u.type===c&&(o=o&&e.trim().length<=u.val),"MIN"===u.type&&(o=o&&+e>=u.val),"MAX"===u.type&&(o=o&&+e<=u.val),u.type===s&&(o=o&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){l.e(d)}finally{l.f()}return o}},71:function(e,t,n){"use strict";var a=n(8),i=n(22),r=n(2),c=n(70),s=(n(72),n(1)),o=function(e,t){switch(t.type){case"CHANGE":return Object(i.a)(Object(i.a)({},e),{},{value:t.val,isValid:Object(c.d)(t.val,t.validators)});case"TOUCH":return Object(i.a)(Object(i.a)({},e),{},{isTouched:!0});default:return e}};t.a=function(e){var t=Object(r.useReducer)(o,{value:e.initialValue||"",isTouched:!1,isValid:e.initialIsValid||!1}),n=Object(a.a)(t,2),i=n[0],c=n[1],l=e.id,u=e.onInput,d=i.value,p=i.isValid;Object(r.useEffect)((function(){u(l,d,p)}),[l,d,p,u]);var j=function(t){c({type:"CHANGE",val:t.target.value,validators:e.validators})},b=function(){c({type:"TOUCH"})},f="input"===e.element?Object(s.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:j,onBlur:b,value:i.value}):Object(s.jsx)("textarea",{id:e.id,rows:e.rows||5,onChange:j,onBlur:b,value:i.value});return Object(s.jsxs)("div",{className:"form-control ".concat(!i.isValid&&i.isTouched&&"form-control--invalid"),children:[Object(s.jsx)("label",{htmlFor:e.id,children:e.label}),f,!i.isValid&&i.isTouched&&Object(s.jsx)("p",{children:e.errorText})]})}},72:function(e,t,n){},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(8),i=n(26),r=n(22),c=n(2),s=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var a in e.inputs)e.inputs[a]&&(n=a===t.inputId?n&&t.isValid:n&&e.inputs[a].isValid);return Object(r.a)(Object(r.a)({},e),{},{inputs:Object(r.a)(Object(r.a)({},e.inputs),{},Object(i.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.isValid};default:return e}},o=function(e,t){var n=Object(c.useReducer)(s,{inputs:e,isValid:t}),i=Object(a.a)(n,2),r=i[0],o=i[1],l=Object(c.useCallback)((function(e,t,n){o({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),u=Object(c.useCallback)((function(e,t){o({type:"SET_DATA",inputs:e,isValid:t})}),[]);return[r,l,u]}},74:function(e,t,n){"use strict";var a=n(8),i=n(2),r=n(9),c=(n(75),n(1));t.a=function(e){var t=Object(i.useState)(),n=Object(a.a)(t,2),s=n[0],o=n[1],l=Object(i.useState)(),u=Object(a.a)(l,2),d=u[0],p=u[1],j=Object(i.useState)(!1),b=Object(a.a)(j,2),f=b[0],v=b[1],m=Object(i.useRef)();return Object(i.useEffect)((function(){if(s){var e=new FileReader;e.onload=function(){p(e.result)},e.readAsDataURL(s)}}),[s]),Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("input",{id:e.id,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg,.webp",ref:m,onChange:function(t){var n,a=f;t.target.files&&1===t.target.files.length?(n=t.target.files[0],o(n),v(!0),a=!0):(v(!1),a=!1),e.onInput(e.id,n,a)}}),Object(c.jsxs)("div",{className:"".concat(e.center&&"centerFC"),children:[Object(c.jsxs)("div",{className:"image-upload__preview",children:[d&&Object(c.jsx)("img",{src:d,alt:"preview"}),!d&&Object(c.jsx)("p",{children:"Please pick an image."})]}),Object(c.jsx)(r.a,{type:"button",secondary:!0,onClick:function(){m.current.click()},children:"Pick image"}),!f&&Object(c.jsx)("p",{children:e.errorText})]})]})}},75:function(e,t,n){},77:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(14),i=n.n(a),r=n(17),c=n(22),s=n(8),o=n(2),l=n(25),u=n(71),d=n(9),p=n(23),j=n(16),b=n(74),f=n(73),v=n(24),m=n(13),O=(n(77),n(70)),h=n(1);t.default=function(){var e=Object(o.useContext)(m.a),t=Object(o.useState)(!0),n=Object(s.a)(t,2),a=n[0],x=n[1],y=Object(v.a)(),g=y.isLoading,w=y.error,T=y.sendRequest,V=y.clearError,I=Object(f.a)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),N=Object(s.a)(I,3),S=N[0],C=N[1],E=N[2],k=function(){a||E(Object(c.a)(Object(c.a)({},S.inputs),{},{name:void 0,image:void 0,motto:void 0}),S.inputs.email.isValid&&S.inputs.password.isValid),a&&E(Object(c.a)(Object(c.a)({},S.inputs),{},{name:{value:"",isValid:!1},image:{value:null,isValid:!1},motto:{value:"",isValid:!1}}),!1),x((function(e){return!e}))},A=function(){var t=Object(r.a)(i.a.mark((function t(n){var r,c,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!a){t.next=11;break}return t.prev=2,t.next=5,T("".concat("https://omar341.onrender.com/api","/users/login"),"POST",JSON.stringify({email:S.inputs.email.value,password:S.inputs.password.value}),{"Content-Type":"application/json"});case 5:r=t.sent,e.login(r.userId,r.token),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(2);case 11:if(a){t.next=27;break}return t.prev=12,(c=new FormData).append("email",S.inputs.email.value),c.append("name",S.inputs.name.value),c.append("password",S.inputs.password.value),c.append("motto",S.inputs.motto.value),c.append("image",S.inputs.image.value),t.next=21,T("".concat("https://omar341.onrender.com/api","/users/signup"),"POST",c);case 21:s=t.sent,e.login(s.userId,s.token),t.next=27;break;case 25:t.prev=25,t.t1=t.catch(12);case 27:case"end":return t.stop()}}),t,null,[[2,9],[12,25]])})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsxs)(o.Fragment,{children:[Object(h.jsx)(p.a,{error:w,onClear:V}),Object(h.jsxs)(l.a,{className:"authentication-form",children:[g&&Object(h.jsx)(j.a,{asOverlay:!0}),Object(h.jsx)("h2",{className:"authentication-form-header",children:"Login Required"}),Object(h.jsxs)("form",{onSubmit:A,children:[!a&&Object(h.jsx)(b.a,{id:"image",center:!0,errorText:"",onInput:C}),!a&&Object(h.jsx)(u.a,{element:"input",id:"name",type:"text",label:"Name",validators:[Object(O.c)()],errorText:"Please enter a name.",onInput:C}),!a&&Object(h.jsx)(u.a,{element:"input",id:"motto",type:"motto",label:"Motto",validators:[Object(O.c)()],errorText:"Please enter a motto.",onInput:C}),!a&&Object(h.jsx)("p",{className:"authentication-form-text",children:"Example: Happiness is Travelling"}),Object(h.jsx)(u.a,{element:"input",id:"email",type:"email",label:"Email",validators:[Object(O.a)()],errorText:"Please enter a valid email address.",onInput:C}),!a&&Object(h.jsx)("p",{className:"authentication-form-text",children:"Example: John@company.com"}),Object(h.jsx)(u.a,{element:"input",id:"password",type:"password",label:"Password",validators:[Object(O.b)(8)],errorText:"Please enter a valid password, at least 8 characters.",placeholder:a?"":"Must be at least 8 characters",onInput:C}),Object(h.jsxs)("div",{className:"authentication-form-actions",children:[Object(h.jsx)(d.a,{type:"submit",secondary:!0,disabled:!S.isValid,children:a?"Login":"Signup"}),a?Object(h.jsx)(d.a,{type:"button",onClick:k,inverse:!0,secondary:!0,children:"Join now"}):Object(h.jsx)(d.a,{type:"button",onClick:k,inverse:!0,secondary:!0,children:"Switch to login"})]})]})]})]})}}}]);
//# sourceMappingURL=4.b78ce5d7.chunk.js.map