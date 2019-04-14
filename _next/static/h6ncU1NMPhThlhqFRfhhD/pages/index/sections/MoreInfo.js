(window.webpackJsonp=window.webpackJsonp||[]).push([["052e"],{"5kZv":function(e,n,t){"use strict";t.r(n);var a=t("rt45"),r=t("kOwS"),c=t("qNsG"),i=t("q1tI"),s=t.n(i),o=t("vOnD"),l=t("vCQb"),u=t("stkM");function m(){var e=Object(a.a)(["\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    border-radius: 1em;\n    padding: 1rem;\n\n    figure {\n      width: 2em;\n      font-size: 1.5rem;\n    }\n\n    .section-text {\n      h3 {\n        color: #000;\n        font-weight: bold;\n        font-size: 1.5rem;\n      }\n\n      p {\n        color: #7a7a7a;\n        font-size: 1.25rem;\n      }\n    }\n  }\n\n  a:hover {\n    background-color: #fafafa;\n  }\n"]);return m=function(){return e},e}n.default=Object(o.b)(function(e){var n=e.className,t=Object(c.a)(e,["className"]);return s.a.createElement(u.default,Object(r.a)({title:"More stuff",bgColor:"#f3efe0",hdColor:"#22a39f",className:n},t),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-6"},s.a.createElement(l.a,{href:"/projects.html"},s.a.createElement("figure",{className:"fas fa-code-branch"}),s.a.createElement("div",{className:"section-text"},s.a.createElement("h3",null,"Projects"),s.a.createElement("p",null,"Some of my open source contributions explained.")))),s.a.createElement("div",{className:"column is-6"},s.a.createElement(l.a,{href:"/publications.html"},s.a.createElement("figure",{className:"fas fa-scroll"}),s.a.createElement("div",{className:"section-text"},s.a.createElement("h3",null,"Publications"),s.a.createElement("p",null,"What I published during my academic years."))))),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-6"},s.a.createElement(l.a,{href:"/research_projects.html"},s.a.createElement("figure",{className:"fas fa-project-diagram"}),s.a.createElement("div",{className:"section-text"},s.a.createElement("h3",null,"R&D Projects"),s.a.createElement("p",null,"Research projects in which I have taken part.")))),s.a.createElement("div",{className:"column is-6"},s.a.createElement(l.a,{href:"/teaching.html"},s.a.createElement("figure",{className:"fas fa-chalkboard-teacher"}),s.a.createElement("div",{className:"section-text"},s.a.createElement("h3",null,"Teaching"),s.a.createElement("p",null,"Yes, I also taught several topics in the past."))))))})(m())},Tkpm:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index/sections/MoreInfo",function(){var e=t("5kZv");return{page:e.default||e}}])},Tnbk:function(e,n,t){"use strict";t.r(n),t.d(n,"PlainSection",function(){return f});var a=t("kOwS"),r=t("qNsG"),c=t("rt45"),i=t("q1tI"),s=t.n(i),o=t("17x9"),l=t.n(o),u=t("vOnD");function m(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n\n  background: ",";\n\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: ",";\n  }\n\n  hr {\n    border: 1em;\n    width: 80%;\n    background: white; /* For browsers that do not support gradients */\n    background: linear-gradient(\n      to right,\n      rgba(0, 0, 0, 0),\n      rgba(204, 204, 204, 0.6),\n      rgba(0, 0, 0, 0)\n    );\n  }\n"]);return m=function(){return e},e}function d(){var e=Object(c.a)(["\n  min-height: ","vh;\n  /* width: 100%; */\n"]);return d=function(){return e},e}var f=u.b.section(d(),function(e){return e.isFullScreen?"100":"70"});f.propTypes={isFullScreen:l.a.bool,className:l.a.string.isRequired,children:l.a.node.isRequired};var h=Object(u.b)(function(e){var n=e.className,t=e.title,c=e.children,i=Object(r.a)(e,["className","title","children"]);return s.a.createElement(f,Object(a.a)({className:"section ".concat(n)},i),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-10-widescreen is-9-tablet is-10-mobile is-offset-1-mobile"},s.a.createElement("h2",{className:"title"},t),s.a.createElement("hr",null),c))))})(m(),function(e){var n=e.bgColor;return void 0===n?"#fff":n},function(e){var n=e.hdColor;return void 0===n?"#22a39f":n});h.propTypes={bgColor:l.a.string,hdColor:l.a.string},n.default=h},i3cc:function(e,n,t){"use strict";t.r(n);var a=t("kOwS"),r=t("qNsG"),c=t("0iUn"),i=t("sLSF"),s=t("MI3g"),o=t("a7VT"),l=t("Tit0"),u=t("q1tI"),m=t.n(u),d=function(e){function n(e){var t;return Object(c.default)(this,n),(t=Object(s.default)(this,Object(o.default)(n).call(this,e))).ref=m.a.createRef(),t.observer=null,t}return Object(l.default)(n,e),Object(i.default)(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.onIntersect,t=e.options;n&&window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&(this.observer=new window.IntersectionObserver(function(e){e.forEach(function(e){var t=e.intersectionRatio,a=e.intersectionRect;n(t,a.height)})},t),this.observer.observe(this.ref.current))}},{key:"componentWillUnmount",value:function(){this.observer.disconnect()}},{key:"render",value:function(){var e=this.props,n=e.children,t=Object(r.a)(e,["children"]);return delete t.onIntersect,delete t.options,m.a.createElement("div",Object(a.a)({ref:this.ref},t),n)}}]),n}(m.a.Component);d.defaultProps={options:{threshold:0}},n.default=d},stkM:function(e,n,t){"use strict";t.r(n);var a=t("qNsG"),r=t("q1tI"),c=t.n(r),i=t("i3cc"),s=t("Tnbk");n.default=function(e){var n=e.onEnter,t=e.children,r=Object(a.a)(e,["onEnter","children"]);return c.a.createElement(i.default,{onIntersect:function(e,t){t>0&&n(r.id,t)},options:{threshold:[0,.1,.2,.5,.9,1]}},c.a.createElement(s.default,r,t))}}},[["Tkpm","5d41","9da1"]]]);