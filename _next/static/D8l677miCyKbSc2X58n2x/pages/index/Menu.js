(window.webpackJsonp=window.webpackJsonp||[]).push([["b632"],{"+u/r":function(n,e,t){"use strict";t.r(e);var a,r=t("rt45"),i=t("17x9"),o=t.n(i),c=t("vOnD"),s=t("qiFt"),l=t("3OJY"),u=Object(c.b)(l.default)(a||(a=Object(r.a)(["\n  ","\n  ","\n\n  ",";\n"])),s.default,function(n){return n.css},function(n){var e=n.atTop;return void 0===e||e?"\n          position: absolute;\n          top: 100vh;\n          border-radius: 0 0 10px 10px;\n        ":"\n          position: fixed;\n          top: 10vh;\n          border-radius: 10px;\n        "});u.propTypes={atTop:o.a.bool,css:o.a.arrayOf(o.a.string)},e.default=u},"16Al":function(n,e,t){"use strict";var a=t("WbBG");function r(){}function i(){}i.resetWarningCache=r,n.exports=function(){function n(n,e,t,r,i,o){if(o!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:r};return t.PropTypes=t,t}},"17x9":function(n,e,t){n.exports=t("16Al")()},"3OJY":function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),r=t.n(a);e.default=function(n){var e=n.items,t=void 0===e?[]:e,a=n.selected,i=void 0===a?null:a,o=n.className;return r.a.createElement("aside",{className:o},r.a.createElement("ul",{className:"menu-list"},t.map(function(n){var e=n.href,t=n.label;return r.a.createElement("li",{key:e},r.a.createElement("a",{href:"#".concat(e),className:i===e?"is-active":void 0},t))})))}},"9i8W":function(n,e,t){"use strict";t.r(e);var a,r=t("rt45"),i=t("q1tI"),o=t.n(i),c=t("17x9"),s=t.n(c),l=t("vOnD"),u=Object(l.b)(function(n){var e=n.className,t=n.href;return o.a.createElement("div",{className:e},o.a.createElement("a",{href:t},o.a.createElement("div",{className:"fas fa-chevron-down"})))})(a||(a=Object(r.a)(["\n  position: absolute;\n  top: 94vh;\n  height: 7vh;\n\n  max-height: 52px;\n  border-radius: 10px 10px 0 0;\n  background-color: #222222;\n  ","\n\n  a {\n    display: block;\n    color: #fff;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    font-size: 3vh;\n  }\n\n  @keyframes wiggle {\n    0% {\n      padding-top: 1.5vh;\n    }\n    50% {\n      padding-top: 2.5vh;\n    }\n    100% {\n      padding-top: 1.5vh;\n    }\n  }\n\n  a div {\n    animation-name: wiggle;\n    animation-duration: 1.2s;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n    animation-direction: normal;\n  }\n"])),function(n){return n.css});u.propTypes={css:s.a.arrayOf(s.a.string)},e.default=u},JOTr:function(n,e,t){"use strict";t.r(e);var a,r=t("kOwS"),i=t("qNsG"),o=t("rt45"),c=t("q1tI"),s=t.n(c),l=t("vOnD"),u=t("9i8W"),f=t("+u/r"),d=["atTop","clickHref","className"],p=Object(l.a)(a||(a=Object(o.a)(["\n  right: 3vw;\n  width: 12vw;\n  min-width: 150px;\n"])));e.default=function(n){var e=n.atTop,t=void 0===e||e,a=n.clickHref,o=n.className,c=Object(i.a)(n,d);return s.a.createElement("div",{className:o},s.a.createElement(u.default,{href:a,css:p}),s.a.createElement(f.default,Object(r.a)({atTop:t,css:p},c)))}},WbBG:function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},f4S0:function(n,e,t){"use strict";t.r(e);var a=t("kOwS"),r=t("qNsG"),i=t("q1tI"),o=t.n(i),c=t("JOTr"),s=t("tVCR"),l=["atTop","clickHref"];e.default=function(n){var e=n.atTop,t=void 0===e||e,i=n.clickHref,u=Object(r.a)(n,l);return o.a.createElement("div",null,o.a.createElement(c.default,Object(a.a)({atTop:t,clickHref:i,className:"is-hidden-mobile"},u)),o.a.createElement(s.default,Object(a.a)({className:"is-hidden-tablet"},u)))}},pCzI:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index/Menu",function(){var n=t("f4S0");return{page:n.default||n}}])},qiFt:function(n,e,t){"use strict";t.r(e);var a,r=t("rt45"),i=t("vOnD"),o=Object(i.a)(a||(a=Object(r.a)(["\n  border: 0px;\n  background-color: #222222;\n  color: #fff;\n  padding: 10px 0;\n  font-size: 1.2em;\n  word-wrap: break-word;\n  z-index: 999;\n\n  .menu-list a {\n    color: #fff;\n  }\n\n  .menu-list a:hover {\n    color: #000;\n  }\n"])));e.default=o},tVCR:function(n,e,t){"use strict";t.r(e);var a,r=t("doui"),i=t("qNsG"),o=t("rt45"),c=t("q1tI"),s=t.n(c),l=t("vOnD"),u=t("qiFt"),f=t("3OJY"),d=["className"],p=l.b.div(a||(a=Object(o.a)(["\n  ","\n\n  position: fixed;\n  top: 20vh;\n  right: 0;\n  width: ",";\n  min-width: ",";\n  border-radius: 10px 0 0 10px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  .btn-collapse {\n    margin: 0.5em 0;\n    text-align: center;\n  }\n"])),u.default,function(n){return n.isCollapsed?"4vw":"12vw"},function(n){return!n.isCollapsed&&"150px;"});e.default=function(n){var e=n.className,t=Object(i.a)(n,d),a=Object(c.useState)(!0),o=Object(r.default)(a,2),l=o[0],u=o[1],m=l?"fa-chevron-left":"fa-chevron-right",v=function(){return u(!l)};return s.a.createElement(p,{className:e,isCollapsed:l},s.a.createElement("div",{role:"button",tabIndex:0,"aria-label":"menu","aria-expanded":"false","data-target":"navMenu",className:"btn-collapse fas ".concat(m),onClick:v,onKeyDown:function(n){"Enter"===n.key&&v()}}),!l&&s.a.createElement(f.default,t))}}},[["pCzI","5d41","9da1"]]]);