(window.webpackJsonp=window.webpackJsonp||[]).push([["6e3c"],{"16Al":function(e,n,t){"use strict";var r=t("WbBG");function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,o,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:a};return t.PropTypes=t,t}},"17x9":function(e,n,t){e.exports=t("16Al")()},Tnbk:function(e,n,t){"use strict";t.r(n),t.d(n,"PlainSection",function(){return f});var r,a,o=t("kOwS"),i=t("qNsG"),c=t("rt45"),s=t("q1tI"),l=t.n(s),u=t("17x9"),p=t.n(u),d=t("vOnD"),b=["className","title","children"],f=d.b.section(r||(r=Object(c.a)(["\n  min-height: ","vh;\n  /* width: 100%; */\n"])),function(e){return e.isFullScreen?"100":"70"});f.propTypes={isFullScreen:p.a.bool,className:p.a.string.isRequired,children:p.a.node.isRequired};var h=Object(d.b)(function(e){var n=e.className,t=e.title,r=e.children,a=Object(i.a)(e,b);return l.a.createElement(f,Object(o.a)({className:"section ".concat(n)},a),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-10-widescreen is-9-tablet is-10-mobile is-offset-1-mobile"},l.a.createElement("h2",{className:"title"},t),l.a.createElement("hr",null),r))))})(a||(a=Object(c.a)(["\n  display: flex;\n  align-items: center;\n\n  background: ",";\n\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: ",";\n  }\n\n  hr {\n    border: 1em;\n    width: 80%;\n    background: white; /* For browsers that do not support gradients */\n    background: linear-gradient(\n      to right,\n      rgba(0, 0, 0, 0),\n      rgba(204, 204, 204, 0.6),\n      rgba(0, 0, 0, 0)\n    );\n  }\n"])),function(e){var n=e.bgColor;return void 0===n?"#fff":n},function(e){var n=e.hdColor;return void 0===n?"#22a39f":n});h.propTypes={bgColor:p.a.string,hdColor:p.a.string},n.default=h},WbBG:function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},mZtW:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index/Section",function(){var e=t("Tnbk");return{page:e.default||e}}])}},[["mZtW","5d41","9da1"]]]);