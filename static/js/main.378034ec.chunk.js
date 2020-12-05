(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports={historyDisplay:"HistoryDisplay_historyDisplay__3M5KK"}},function(e,t,a){e.exports={display:"Display_display__sr1N6"}},function(e,t,a){e.exports={button:"Button_button__28M4M","button--is-lighter":"Button_button--is-lighter__NKj8y","button--is-memory":"Button_button--is-memory__2HW5v","button--is-equal":"Button_button--is-equal__3_Chq"}},function(e,t,a){e.exports={memory:"Memory_memory__1JHbf"}},function(e,t,a){e.exports={keyboard:"Keyboard_keyboard__1-bT0"}},function(e,t,a){e.exports={app:"App_app__2Vbcz"}},,,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l,n=a(1),r=a(0),c=a.n(r),o=a(6),i=a.n(o),u=a(3),s=a(5),p=a(2),d="RESET_CALCULATOR",y="DELETE_LAST_CHAR_FROM_RESULT_DISPLAY",b="SET_RESULT_DISPLAY_VALUE",O="UPDATE_RESULT_DISPLAY_VALUE",j="CLEAR_HISTORY_DISPLAY_VALUE",v="SET_HISTORY_DISPLAY_VALUE",_="UPDATE_HISTORY_DISPLAY_VALUE",x={historyDisplayValue:"",resultDisplayValue:"0"},E="ADD_VALUE_TO_MEMORY",f="CLEAR_VALUE_FROM_MEMORY",V="SAVE_VALUE_IN_MEMORY",C="SUB_VALUE_FROM_MEMORY",k=null,m="SET_NEW_OPERATION",D="UNSET_NEW_OPERATION_CLICKED",h="SET_EQUALS_CLICKED",S="UNSET_EQUALS_CLICKED",N="SET_SPECIAL_OPERATION_CLICKED",A="UNSET_SPECIAL_OPERATION_CLICKED",L={equalsClicked:!1,newOperationClicked:!1,operation:null,specialOperationClicked:!1},T="CALCULATE_ONE_NUMBERED_OPERATION",H="CALCULATE_TWO_NUMBERED_OPERATION",R="REMEMBER_VALUE_WITHOUT_CALCULATION",g="CLEAR_PREV_VALUE",M="SET_PREV_VALUE";!function(e){e.addition="+",e.subtraction="-",e.multiplication="*",e.division="/",e.negation="+/-",e.squareRoot="sqrt",e.percent="%",e.invertion="1/x",e.squaredPower="x2"}(l||(l={}));var U={result:null,prevValue:null},I=function(e,t,a){var n=0;switch(t){case l.invertion:n=1/Number(e);break;case l.squareRoot:n=Math.sqrt(Number(e));break;case l.squaredPower:n=Math.pow(Number(e),2);break;case l.percent:n=a&&null!==a?Number(e)*Number(a)/100:0}return String(n)},q=function(e,t,a){var n=0;switch(a){case l.addition:n=Number(e)+Number(t);break;case l.subtraction:n=Number(e)-Number(t);break;case l.multiplication:n=Number(e)*Number(t);break;case l.division:n=Number(e)/Number(t);break;default:return"0"}return String(n)},w=Object(s.b)({operationsState:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case m:return a.payload?Object(p.a)(Object(p.a)({},t),{},{equalsClicked:!1,newOperationClicked:!0,operation:null===(e=a.payload)||void 0===e?void 0:e.operation}):Object(p.a)(Object(p.a)({},t),{},{equalsClicked:!1,newOperationClicked:!0});case h:return Object(p.a)(Object(p.a)({},t),{},{equalsClicked:!0});case S:return Object(p.a)(Object(p.a)({},t),{},{equalsClicked:!1});case D:return Object(p.a)(Object(p.a)({},t),{},{equalsClicked:!1,newOperationClicked:!1});case N:return Object(p.a)(Object(p.a)({},t),{},{specialOperationClicked:!0});case A:return Object(p.a)(Object(p.a)({},t),{},{specialOperationClicked:!1});case d:return L;default:return t}},displayState:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case y:return t.resultDisplayValue.length>1?Object(p.a)(Object(p.a)({},t),{},{resultDisplayValue:t.resultDisplayValue.slice(0,t.resultDisplayValue.length-1)}):Object(p.a)(Object(p.a)({},t),{},{resultDisplayValue:x.resultDisplayValue});case b:return a.payload?Object(p.a)(Object(p.a)({},t),{},{resultDisplayValue:a.payload.content}):t;case O:var l,n,r;return a.payload?t.resultDisplayValue===x.resultDisplayValue||(null===(l=a.payload)||void 0===l?void 0:l.newOperationClicked)?t.resultDisplayValue===x.resultDisplayValue&&"."===a.payload.content?Object(p.a)(Object(p.a)({},t),{},{resultDisplayValue:"0."}):Object(p.a)(Object(p.a)({},t),{},{resultDisplayValue:null===(n=a.payload)||void 0===n?void 0:n.content}):Object(p.a)(Object(p.a)({},t),{},{resultDisplayValue:t.resultDisplayValue+=null===(r=a.payload)||void 0===r?void 0:r.content}):t;case j:return Object(p.a)(Object(p.a)({},t),{},{historyDisplayValue:x.historyDisplayValue});case _:return Object(p.a)(Object(p.a)({},t),{},{historyDisplayValue:"".concat(t.historyDisplayValue).concat(null===(e=a.payload)||void 0===e?void 0:e.content)});case v:var c;return a.payload?Object(p.a)(Object(p.a)({},t),{},{historyDisplayValue:null===(c=a.payload)||void 0===c?void 0:c.content}):t;case d:return x;default:return t}},memoryValue:function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,l=arguments.length>1?arguments[1]:void 0;switch(l.type){case E:return String(Number(a)+Number(null===(e=l.payload)||void 0===e?void 0:e.value));case f:return k;case V:var n;return l.payload?null===(n=l.payload)||void 0===n?void 0:n.value:a;case C:return String(Number(a)-Number(null===(t=l.payload)||void 0===t?void 0:t.value));default:return a}},values:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:if(t.payload&&t.payload.leftValue&&t.payload.operation){if(t.payload.operation!==l.percent){var a=I(t.payload.leftValue,t.payload.operation);return t.payload.firstValueFilled?Object(p.a)(Object(p.a)({},e),{},{prevValue:a}):{result:a,prevValue:U.prevValue}}var n=I(t.payload.leftValue,t.payload.operation,e.result);return e.result?Object(p.a)(Object(p.a)({},e),{},{prevValue:n}):{result:n,prevValue:U.prevValue}}return e;case H:if(t.payload&&t.payload.leftValue&&t.payload.rightValue&&t.payload.operation){var r=q(t.payload.leftValue,t.payload.rightValue,t.payload.operation);return Object(p.a)(Object(p.a)({},e),{},{result:r})}return e;case R:var c;return(null===(c=t.payload)||void 0===c?void 0:c.leftValue)?Object(p.a)(Object(p.a)({},e),{},{result:t.payload.leftValue}):e;case M:var o;return t.payload&&t.payload.leftValue?Object(p.a)(Object(p.a)({},e),{},{prevValue:null===(o=t.payload)||void 0===o?void 0:o.leftValue}):e;case g:return Object(p.a)(Object(p.a)({},e),{},{prevValue:U.prevValue});case d:return U;default:return e}}}),P=Object(s.c)(w,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),Y=a(4),B=a.n(Y),K=a(12),F=a.n(K),W=B()(F.a),X=function(){var e=Object(u.c)((function(e){return e.displayState.historyDisplayValue}));return Object(n.jsx)("div",{className:W(),children:e})},J=a(13),Q=a.n(J),z=B()(Q.a),G=function(){var e=Object(u.c)((function(e){return e.displayState.resultDisplayValue}));return Object(n.jsxs)("div",{className:z(),children:[Object(n.jsx)(X,{}),Object(n.jsx)("p",{children:e})]})},Z=a(14),$=a.n(Z),ee=B()($.a),te=function(e){var t={"is-equal":e.isEqual,"is-lighter":e.isLighter,"is-memory":e.isMemory};return Object(n.jsx)("button",{className:ee(t),onClick:e.onClickHandler,value:e.text,disabled:e.disabled,children:e.text})},ae=a(15),le=a.n(ae),ne=B()(le.a),re=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.memoryValue})),a=Object(u.c)((function(e){return e.displayState.resultDisplayValue}));return Object(n.jsxs)("div",{className:ne(),children:[Object(n.jsx)(te,{text:"MC",onClickHandler:function(){e({type:f}),e({type:m})},isMemory:!0,disabled:!t}),Object(n.jsx)(te,{text:"MR",onClickHandler:function(){e({type:b,payload:{content:t}})},isMemory:!0,disabled:!t}),Object(n.jsx)(te,{text:"M+",onClickHandler:function(){e({type:E,payload:{value:a}}),e({type:m})},isMemory:!0}),Object(n.jsx)(te,{text:"M-",onClickHandler:function(){e({type:C,payload:{value:a}}),e({type:m})},isMemory:!0}),Object(n.jsx)(te,{text:"MS",onClickHandler:function(){e({type:V,payload:{value:a}}),e({type:m})},isMemory:!0})]})},ce=a(16),oe=a.n(ce),ie=B()(oe.a),ue=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.displayState})),a=t.historyDisplayValue,c=t.resultDisplayValue,o=Object(u.c)((function(e){return e.operationsState})),i=o.equalsClicked,s=o.newOperationClicked,p=o.operation,x=o.specialOperationClicked,E=Object(u.c)((function(e){return e.values})),f=E.result,V=E.prevValue;Object(r.useEffect)((function(){null!==f&&e({type:b,payload:{content:f}})}),[e,f]),Object(r.useEffect)((function(){x&&null!==V&&e({type:b,payload:{content:V}})}),[e,x,V]);var C=function(t){var a=t.currentTarget;e({type:A}),s?(e({type:D}),e({type:g})):(i||x)&&e({type:d}),e({type:O,payload:{content:a.value,newOperationClicked:s}})},k=function(t){var l=t.currentTarget;if(e({type:A}),e({type:m,payload:{operation:l.value}}),s||i||x)if(i)e({type:v,payload:{content:"".concat(c," ").concat(l.value," ")}});else if(x)e({type:_,payload:{content:"".concat(l.value," ")}});else{var n="".concat(a.slice(0,a.length-2)," ").concat(l.value," ");e({type:v,payload:{content:n}})}else e(null===f?{type:R,payload:{leftValue:c}}:{type:H,payload:{leftValue:f,rightValue:c,operation:p}}),e({type:_,payload:{content:"".concat(c," ").concat(l.value," ")}})},L=function(t){var n=t.currentTarget.value;e({type:N});var r=p?a.lastIndexOf(p)+2:0,o="",u=!i&&r>0?a.slice(0,r):"",s=!i&&a.slice(r).length>0?a.slice(r):c;switch(n){case l.squareRoot:o="".concat(u,"sqrt(").concat(s.trim(),") ");break;case l.squaredPower:o="".concat(u,"sqr(").concat(s.trim(),") ");break;case l.invertion:o="".concat(u,"1/(").concat(s.trim(),") ");break;case l.percent:if(f){var d=String(Number(c)*Number(f)/100);o="".concat(u).concat(d,"  ")}else o="0  "}i&&(e({type:g}),e({type:S})),e({type:v,payload:{content:o}}),e({type:T,payload:{leftValue:c,operation:n,firstValueFilled:!i&&null!==f&&null!==p}})};return Object(n.jsxs)("div",{className:ie(),children:[Object(n.jsx)(te,{text:l.percent,onClickHandler:L}),Object(n.jsx)(te,{text:"CE",onClickHandler:function(){e({type:b,payload:{content:"0"}})}}),Object(n.jsx)(te,{text:"C",onClickHandler:function(){e({type:d})}}),Object(n.jsx)(te,{text:"<-",onClickHandler:function(){i&&a?e({type:j}):i||s||x||e({type:y})}}),Object(n.jsx)(te,{text:l.invertion,onClickHandler:L}),Object(n.jsx)(te,{text:l.squaredPower,onClickHandler:L}),Object(n.jsx)(te,{text:l.squareRoot,onClickHandler:L}),Object(n.jsx)(te,{text:l.division,onClickHandler:k}),Object(n.jsx)(te,{text:"7",onClickHandler:C}),Object(n.jsx)(te,{text:"8",onClickHandler:C}),Object(n.jsx)(te,{text:"9",onClickHandler:C}),Object(n.jsx)(te,{text:l.multiplication,onClickHandler:k}),Object(n.jsx)(te,{text:"4",onClickHandler:C}),Object(n.jsx)(te,{text:"5",onClickHandler:C}),Object(n.jsx)(te,{text:"6",onClickHandler:C}),Object(n.jsx)(te,{text:l.subtraction,onClickHandler:k}),Object(n.jsx)(te,{text:"1",onClickHandler:C}),Object(n.jsx)(te,{text:"2",onClickHandler:C}),Object(n.jsx)(te,{text:"3",onClickHandler:C}),Object(n.jsx)(te,{text:l.addition,onClickHandler:k}),Object(n.jsx)(te,{text:l.negation,onClickHandler:function(){var t=String(-1*Number(c));e(i?{type:R,payload:{leftValue:t}}:{type:b,payload:{content:t}})}}),Object(n.jsx)(te,{text:"0",onClickHandler:C}),Object(n.jsx)(te,{text:".",onClickHandler:C}),Object(n.jsx)(te,{text:"=",onClickHandler:function(){var t=f,a=V||c;i?e({type:v,payload:{content:"".concat(t," ").concat(p," ").concat(a," = ")}}):(e({type:h}),e({type:M,payload:{leftValue:a}}),e(x?{type:_,payload:{content:"= "}}:{type:_,payload:{content:"".concat(c," = ")}})),a&&p&&e({type:H,payload:{leftValue:t,rightValue:a,operation:p}}),e({type:A})},isEqual:!0})]})},se=a(17),pe=a.n(se),de=B()(pe.a);B.a.setSettings({modifierDelimiter:"--"});var ye=function(){return Object(n.jsx)(u.a,{store:P,children:Object(n.jsxs)("div",{className:de(),children:[Object(n.jsx)(G,{}),Object(n.jsx)(re,{}),Object(n.jsx)(ue,{})]})})};a(29);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(ye,{})}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.378034ec.chunk.js.map