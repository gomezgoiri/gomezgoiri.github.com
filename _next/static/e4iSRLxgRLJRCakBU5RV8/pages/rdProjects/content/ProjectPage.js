(window.webpackJsonp=window.webpackJsonp||[]).push([["82d4"],{"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"4hZ1":function(e,t,n){"use strict";var a=n("KI45"),r=a(n("0iUn")),i=a(n("MI3g")),l=a(n("a7VT")),c=a(n("AT/M")),o=a(n("sLSF")),s=a(n("Tit0")),u=a(n("dfwq")),m=a(n("ttDY"));Object.defineProperty(t,"__esModule",{value:!0});var d=n("q1tI"),f="undefined"==typeof window;t.default=function(){var e,t=new m.default;function n(n){e=n.props.reduceComponentsToState((0,u.default)(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(a){function u(e){var a;return(0,r.default)(this,u),a=(0,i.default)(this,(0,l.default)(u).call(this,e)),f&&(t.add((0,c.default)(a)),n((0,c.default)(a))),a}return(0,s.default)(u,a),(0,o.default)(u,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),(0,o.default)(u,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(d.Component)}},IClC:function(e,t,n){"use strict";var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("q1tI"));t.HeadManagerContext=r.createContext(null)},IP1Z:function(e,t,n){"use strict";var a=n("2faE"),r=n("rr1i");e.exports=function(e,t,n){t in e?a.f(e,t,r(0,n)):e[t]=n}},VJsP:function(e,t,n){"use strict";var a=n("2GTP"),r=n("Y7ZC"),i=n("JB68"),l=n("sNwI"),c=n("NwJ3"),o=n("tEej"),s=n("IP1Z"),u=n("fNZA");r(r.S+r.F*!n("TuGD")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,r,m,d=i(e),f="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,h=void 0!==v,b=0,E=u(d);if(h&&(v=a(v,p>2?arguments[2]:void 0,2)),null==E||f==Array&&c(E))for(n=new f(t=o(d.length));t>b;b++)s(n,b,h?v(d[b],b):d[b]);else for(m=E.call(d),n=new f;!(r=m.next()).done;b++)s(n,b,h?l(m,v,[r.value,b],!0):r.value);return n.length=b,n}})},VKFn:function(e,t,n){n("bBy9"),n("FlQf"),e.exports=n("ldVq")},Wziy:function(e,t,n){"use strict";var a=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("q1tI")),i=n("imt6");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.enabled,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,i=e.hasQuery;return n&&(!r||r&&(void 0!==i&&i))}t.isAmp=l,t.useAmp=function(){return l(r.default.useContext(i.AmpModeContext))},t.withAmp=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).hybrid,n=void 0!==t&&t;function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=r.default.useContext(i.AmpModeContext);return a.enabled=!0,a.hybrid=n,r.default.createElement(e,t)}return a.__nextAmpOnly=!n,a.getInitialProps=e.getInitialProps,a}},Z4UW:function(e,t,n){"use strict";var a=n("rt45"),r=n("doui"),i=n("q1tI"),l=n.n(i),c=n("vOnD"),o=n("vCQb");function s(){var e=Object(a.a)(["\n  background-color: rgb(255, 255, 255, 0.7);\n\n  .navbar-burger > i {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    transition: transform 0.2s ease 0s;\n  }\n\n  .pressed i {\n    transform-origin: center center;\n    transform: rotate(180deg);\n  }\n\n  .navbar-menu {\n    background-color: transparent;\n  }\n"]);return s=function(){return e},e}t.a=Object(c.b)(function(e){var t=e.hideBrand,n=void 0!==t&&t,a=e.className,c=Object(i.useState)(!1),s=Object(r.default)(c,2),u=s[0],m=s[1],d=function(){return m(!u)};return l.a.createElement("nav",{className:"navbar is-transparent ".concat(a)},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"navbar-brand"},!n&&l.a.createElement(o.a,{className:"navbar-item",href:"/index.html"},"Aitor Gómez Goiri"),l.a.createElement("a",{role:"button",tabIndex:0,"aria-label":"menu","aria-expanded":"false","data-target":"navMenu",onClick:d,onKeyDown:function(e){"Enter"===e.key&&d()},className:"navbar-burger ".concat(u?"pressed":"")},l.a.createElement("i",{className:"fas fa-chevron-down"}))),l.a.createElement("div",{id:"navMenu",className:"navbar-menu ".concat(u?"is-active":"")},l.a.createElement("div",{className:"navbar-end"},l.a.createElement(o.a,{className:"navbar-item",href:"/projects.html"},"Projects"),l.a.createElement(o.a,{className:"navbar-item",href:"/publications.html"},"Publications"),l.a.createElement(o.a,{className:"navbar-item",href:"/research_projects.html"},"R&D Projects"),l.a.createElement(o.a,{className:"navbar-item",href:"/teaching.html"},"Teaching")))))})(s())},cH0p:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rdProjects/content/ProjectPage",function(){var e=n("mtXO");return{page:e.default||e}}])},d04V:function(e,t,n){e.exports=n("0tVQ")},dfwq:function(e,t,n){"use strict";n.r(t);var a=n("p0XB"),r=n.n(a);var i=n("d04V"),l=n.n(i),c=n("yLu3"),o=n.n(c);function s(e){return function(e){if(r()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(o()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return l()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"default",function(){return s})},imt6:function(e,t,n){"use strict";var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("q1tI"));t.AmpModeContext=r.createContext({})},ldVq:function(e,t,n){var a=n("QMMT"),r=n("UWiX")("iterator"),i=n("SBuE");e.exports=n("WEpk").isIterable=function(e){var t=Object(e);return void 0!==t[r]||"@@iterator"in t||i.hasOwnProperty(a(t))}},"m/Pd":function(e,t,n){"use strict";var a=n("KI45")(n("ttDY")),r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI")),l=r(n("4hZ1")),c=n("imt6"),o=n("IClC"),s=n("Wziy");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next-head",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[i.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})];return t||n.push(i.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1",className:e})),n}function m(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}t.defaultHead=u;var d=["name","httpEquiv","charSet","viewport","itemProp"];function f(e,t){return e.reduce(function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(m,[]).reverse().concat(u("",t.isAmp)).filter((n=new a.default,r=new a.default,l=new a.default,c={},function(e){if(e.key&&"number"!=typeof e.key&&0===e.key.indexOf(".$"))return!n.has(e.key)&&(n.add(e.key),!0);switch(e.type){case"title":case"base":if(r.has(e.type))return!1;r.add(e.type);break;case"meta":for(var t=0,i=d.length;t<i;t++){var o=d[t];if(e.props.hasOwnProperty(o))if("charSet"===o||"viewport"===o){if(l.has(o))return!1;l.add(o)}else{var s=e.props[o],u=c[o]||new a.default;if(u.has(s))return!1;u.add(s),c[o]=u}}}return!0})).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+"next-head",a=e.key||t;return i.default.cloneElement(e,{key:a,className:n})});var n,r,l,c}var p=l.default();function v(e){var t=e.children;return i.default.createElement(c.AmpModeContext.Consumer,null,function(e){return i.default.createElement(o.HeadManagerContext.Consumer,null,function(n){return i.default.createElement(p,{reduceComponentsToState:f,handleStateChange:n,isAmp:s.isAmp(e)},t)})})}v.rewind=p.rewind,t.default=v},mtXO:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("t78G"),l=n("vCQb");t.default=function(e){var t=e.title,n=e.url,a=e.description,c=e.bodyHtml,o=e.website,s=e.moreInfo;return r.a.createElement(i.a,{siteTitle:t,heroTitle:t,titleLink:n,description:a,topLinks:[{href:"/research_projects.html",text:"<< Back to the R&D projects list"}]},r.a.createElement("article",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12",dangerouslySetInnerHTML:{__html:c}})),r.a.createElement("div",{className:"row",style:{marginTop:"30px"}},r.a.createElement("div",{className:"col-sm-12 text-center"},o&&r.a.createElement("a",{role:"button",className:"btn btn-default",href:o},"Go to website"),s&&r.a.createElement(l.a,{role:"button",className:"btn btn-default",href:s},"More information")))))}},t78G:function(e,t,n){"use strict";var a=n("qNsG"),r=n("q1tI"),i=n.n(r),l=n("vivp"),c=n("m/Pd"),o=n.n(c),s=function(e){var t=e.siteTitle,n=e.description;return i.a.createElement(o.a,null,i.a.createElement("meta",{httpEquiv:"content-type",content:"text/html; charset=utf-8"}),i.a.createElement("title",null,t),i.a.createElement("meta",{name:"author",content:"Aitor Gómez Goiri"}),i.a.createElement("meta",{name:"description",content:n}),i.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"}),i.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.7.2/css/all.css",integrity:"sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr",crossOrigin:"anonymous"}),i.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"".concat("","/static/css/syntax.css")}))},u=n("Z4UW"),m=n("vCQb"),d=function(e){var t=e.title,n=void 0===t?"":t,a=e.subtitle,r=e.href,l=i.a.createElement("span",{itemProp:"name"},n);return r&&(l=i.a.createElement(m.a,{href:r,rel:"bookmark",title:"Permanent link to ",itemProp:"url"},l)),i.a.createElement("div",{className:"content"},a&&i.a.createElement("h4",null,a),i.a.createElement("h1",null,l))},f=function(e){var t=e.topLinks,n=e.heroTitle,a=e.titleLink,r=e.subtitle,l=e.topNav,c=e.children;return i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"container"},i.a.createElement("header",null,i.a.createElement("div",{className:"level"},t&&i.a.createElement("nav",{className:"level-left breadcrumb","aria-label":"breadcrumbs"},i.a.createElement("ul",{className:"level-item"},t.map(function(e){return i.a.createElement("li",{key:e.href,className:"active"},i.a.createElement(m.a,{href:e.href,className:"link"},e.text))}))),l&&i.a.createElement("div",{className:"level-right"},i.a.createElement("div",{className:"level-item"},l))),i.a.createElement(d,{title:n,subtitle:r,href:a})),i.a.createElement("main",{className:"content"},c)))},p=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"container content has-text-centered"},i.a.createElement("p",null,i.a.createElement("small",null,"Hosted on"," ",i.a.createElement("a",{href:"https://github.com/gomezgoiri/gomezgoiri.github.com"},"GitHub Pages"),", using ",i.a.createElement("a",{href:"https://bulma.io"},"Bulma")," and based on"," ",i.a.createElement("a",{href:"https://github.com/tscanlin/next-blog"},"Tim Scanlin's next-blog"),"."))))};t.a=function(e){var t=e.siteTitle,n=e.description,r=void 0===n?l.description:n,c=e.children,o=Object(a.a)(e,["siteTitle","description","children"]);return i.a.createElement("div",null,i.a.createElement(s,{siteTitle:t?"".concat(t," - ").concat(l.siteTitle):l.siteTitle,description:r}),i.a.createElement(u.a,null),i.a.createElement(f,o,c),i.a.createElement(p,null))}},vivp:function(e){e.exports={siteTitle:"Aitor Gómez Goiri",description:"Aitor's personal website",page:"/",paths:["/","/index.html"],bodyContent:"",bodyHtml:"",dir:"content",base:"index.json",ext:".json",sourceBase:"index.md",sourceExt:".md"}},yLu3:function(e,t,n){e.exports=n("VKFn")}},[["cH0p","5d41","9da1"]]]);