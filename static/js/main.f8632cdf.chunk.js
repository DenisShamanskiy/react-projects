(this["webpackJsonpreact-projects"]=this["webpackJsonpreact-projects"]||[]).push([[0],[,,,,,,,,,,function(n,t,e){},function(n,t,e){},function(n,t,e){},,function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){},function(n,t,e){"use strict";e.r(t);var u=e(2),c=e.n(u),r=e(4),s=e.n(r),a=(e(10),e(1)),i=e(5),l=(e(11),e(12),e(0)),o=function(n){var t=n.children;return Object(l.jsx)("div",{className:"wrapper",children:t})},j=(e(14),function(n){var t=n.value;return Object(l.jsx)("div",{className:"screen",children:t})}),m=(e(15),function(n){var t=n.children;return Object(l.jsx)("div",{className:"buttonBox",children:t})}),b=(e(16),function(n){var t=n.className,e=n.value,u=n.onClick;return Object(l.jsx)("button",{className:t,onClick:u,children:e})}),O=[["C","+-","%","/"],[7,8,9,"X"],[4,5,6,"-"],[1,2,3,"+"],[0,".","="]],f=function(n){return String(n).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g,"$1 ")},d=function(n){return n.toString().replace(/\s/g,"")},v=function(){var n=Object(u.useState)({sign:"",num:0,result:0}),t=Object(i.a)(n,2),e=t[0],c=t[1];function r(n){n.preventDefault();var t=n.target.innerHTML;d(e.num).length<16&&c(Object(a.a)(Object(a.a)({},e),{},{num:0===e.num&&"0"===t?"0":d(e.num)%1===0?f(Number(d(e.num+t))):f(e.num+t),result:e.sign?e.result:0}))}function s(n){n.preventDefault();var t=n.target.innerHTML;c(Object(a.a)(Object(a.a)({},e),{},{num:e.num.toString().includes(".")?e.num:e.num+t}))}function v(n){c(Object(a.a)(Object(a.a)({},e),{},{sign:n.target.innerHTML,result:!e.result&&e.num?e.num:e.result,num:0}))}function g(){if(e.sign&&e.num){c(Object(a.a)(Object(a.a)({},e),{},{result:"0"===e.num&&"/"===e.sign?"Can't divide with 0":f((n=Number(d(e.result)),t=Number(d(e.num)),u=e.sign,"+"===u?n+t:"-"===u?n-t:"X"===u?n*t:n/t)),sign:"",num:0}))}var n,t,u}function h(){c(Object(a.a)(Object(a.a)({},e),{},{num:e.num?f(-1*d(e.num)):0,result:e.result?f(-1*d(e.result)):0,sign:""}))}function p(){var n=e.num?parseFloat(d(e.num)):0,t=e.result?parseFloat(d(e.result)):0;c(Object(a.a)(Object(a.a)({},e),{},{num:n/=Math.pow(100,1),result:t/=Math.pow(100,1),sign:""}))}function x(){c(Object(a.a)(Object(a.a)({},e),{},{sign:"",num:0,result:0}))}return Object(l.jsxs)("article",{className:"container",children:[Object(l.jsx)("h1",{className:"title",children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"}),Object(l.jsxs)(o,{children:[Object(l.jsx)(j,{value:e.num?e.num:e.result}),Object(l.jsx)(m,{children:O.flat().map((function(n,t){return Object(l.jsx)(b,{className:"="===n?"button_equals":"button",value:n,onClick:"C"===n?x:"+-"===n?h:"%"===n?p:"="===n?g:"/"===n||"X"===n||"-"===n||"+"===n?v:"."===n?s:r},t)}))})]})]})};var g=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(v,{})})};e(17);s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.f8632cdf.chunk.js.map