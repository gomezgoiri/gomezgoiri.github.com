(window.webpackJsonp=window.webpackJsonp||[]).push([["13bf"],{"5kZv":function(e,n,t){"use strict";t.r(n);var a,r=t("rt45"),c=t("kOwS"),i=t("qNsG"),o=t("q1tI"),s=t.n(o),l=t("vOnD"),u=t("vCQb"),m=t("stkM"),f=["className"];n.default=Object(l.b)(function(e){var n=e.className,t=Object(i.a)(e,f);return s.a.createElement(m.default,Object(c.a)({title:"More stuff",bgColor:"#f3efe0",hdColor:"#22a39f",className:n},t),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-6"},s.a.createElement(u.a,{href:"/projects.html"},s.a.createElement("figure",{className:"fas fa-code-branch"}),s.a.createElement("div",{className:"section-text"},s.a.createElement("h3",null,"Projects"),s.a.createElement("p",null,"Some of my open source contributions explained.")))),s.a.createElement("div",{className:"column is-6"},s.a.createElement(u.a,{href:"/publications.html"},s.a.createElement("figure",{className:"fas fa-scroll"}),s.a.createElement("div",{className:"section-text"},s.a.createElement("h3",null,"Publications"),s.a.createElement("p",null,"What I published during my academic years."))))),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-6"},s.a.createElement(u.a,{href:"/research_projects.html"},s.a.createElement("figure",{className:"fas fa-project-diagram"}),s.a.createElement("div",{className:"section-text"},s.a.createElement("h3",null,"R&D Projects"),s.a.createElement("p",null,"Research projects in which I have taken part.")))),s.a.createElement("div",{className:"column is-6"},s.a.createElement(u.a,{href:"/teaching.html"},s.a.createElement("figure",{className:"fas fa-chalkboard-teacher"}),s.a.createElement("div",{className:"section-text"},s.a.createElement("h3",null,"Teaching"),s.a.createElement("p",null,"Yes, I also taught several topics in the past."))))))})(a||(a=Object(r.a)(["\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    border-radius: 1em;\n    padding: 1rem;\n\n    figure {\n      width: 2em;\n      font-size: 1.5rem;\n    }\n\n    .section-text {\n      h3 {\n        color: #000;\n        font-weight: bold;\n        font-size: 1.5rem;\n      }\n\n      p {\n        color: #7a7a7a;\n        font-size: 1.25rem;\n      }\n    }\n  }\n\n  a:hover {\n    background-color: #fafafa;\n  }\n"])))},Tkpm:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index/sections/MoreInfo",function(){var e=t("5kZv");return{page:e.default||e}}])},Tnbk:function(e,n,t){"use strict";t.r(n),t.d(n,"PlainSection",function(){return h});var a,r,c=t("kOwS"),i=t("qNsG"),o=t("rt45"),s=t("q1tI"),l=t.n(s),u=t("17x9"),m=t.n(u),f=t("vOnD"),d=["className","title","children"],h=f.b.section(a||(a=Object(o.a)(["\n  min-height: ","vh;\n  /* width: 100%; */\n"])),function(e){return e.isFullScreen?"100":"70"});h.propTypes={isFullScreen:m.a.bool,className:m.a.string.isRequired,children:m.a.node.isRequired};var b=Object(f.b)(function(e){var n=e.className,t=e.title,a=e.children,r=Object(i.a)(e,d);return l.a.createElement(h,Object(c.a)({className:"section ".concat(n)},r),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-10-widescreen is-9-tablet is-10-mobile is-offset-1-mobile"},l.a.createElement("h2",{className:"title"},t),l.a.createElement("hr",null),a))))})(r||(r=Object(o.a)(["\n  display: flex;\n  align-items: center;\n\n  background: ",";\n\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: ",";\n  }\n\n  hr {\n    border: 1em;\n    width: 80%;\n    background: white; /* For browsers that do not support gradients */\n    background: linear-gradient(\n      to right,\n      rgba(0, 0, 0, 0),\n      rgba(204, 204, 204, 0.6),\n      rgba(0, 0, 0, 0)\n    );\n  }\n"])),function(e){var n=e.bgColor;return void 0===n?"#fff":n},function(e){var n=e.hdColor;return void 0===n?"#22a39f":n});b.propTypes={bgColor:m.a.string,hdColor:m.a.string},n.default=b},i3cc:function(e,n,t){"use strict";t.r(n);var a=t("pbKT"),r=t.n(a),c=t("kOwS"),i=t("qNsG"),o=t("0iUn"),s=t("sLSF"),l=t("Tit0"),u=t("MI3g"),m=t("a7VT"),f=t("q1tI"),d=t.n(f),h=["children"];function b(e){var n=function(){if("undefined"==typeof Reflect||!r.a)return!1;if(r.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(r()(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var t,a=Object(m.default)(e);if(n){var c=Object(m.default)(this).constructor;t=r()(a,arguments,c)}else t=a.apply(this,arguments);return Object(u.default)(this,t)}}var v=function(e){Object(l.default)(t,e);var n=b(t);function t(e){var a;return Object(o.default)(this,t),(a=n.call(this,e)).ref=d.a.createRef(),a.observer=null,a}return Object(s.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.onIntersect,t=e.options;n&&window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&(this.observer=new window.IntersectionObserver(function(e){e.forEach(function(e){var t=e.intersectionRatio,a=e.intersectionRect;n(t,a.height)})},t),this.observer.observe(this.ref.current))}},{key:"componentWillUnmount",value:function(){this.observer.disconnect()}},{key:"render",value:function(){var e=this.props,n=e.children,t=Object(i.a)(e,h);return delete t.onIntersect,delete t.options,d.a.createElement("div",Object(c.a)({ref:this.ref},t),n)}}]),t}(d.a.Component);v.defaultProps={options:{threshold:0}},n.default=v},stkM:function(e,n,t){"use strict";t.r(n);var a=t("qNsG"),r=t("q1tI"),c=t.n(r),i=t("i3cc"),o=t("Tnbk"),s=["onEnter","children"];n.default=function(e){var n=e.onEnter,t=e.children,r=Object(a.a)(e,s);return c.a.createElement(i.default,{onIntersect:function(e,t){t>0&&n(r.id,t)},options:{threshold:[0,.1,.2,.5,.9,1]}},c.a.createElement(o.default,r,t))}}},[["Tkpm","5d41","9da1"]]]);