(window.webpackJsonp=window.webpackJsonp||[]).push([["f54c"],{"/eQG":function(n,t,e){e("v5Dd");var r=e("WEpk").Object;n.exports=function(n,t){return r.getOwnPropertyDescriptor(n,t)}},"BH8/":function(n,t,e){"use strict";e.r(t),e.d(t,"intersect",function(){return d}),e.d(t,"setTop",function(){return f}),e.d(t,"isOnTop",function(){return p}),e.d(t,"getSelectedSection",function(){return s});var r=e("pLtp"),o=e.n(r),u=e("vYYK"),i=e("zrwo"),c=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(t)switch(t.type){case"set":var e=t.payload,r=e.id,o=e.height;if(o>0)return Object(i.a)({},n,Object(u.a)({},r,o));var c=Object(i.a)({},n);return delete c[r],c}return n},a={onTop:!0,sections:c()};t.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"top":return Object(i.a)({},n,{onTop:t.payload});case"set":return Object(i.a)({},n,{sections:c(n.sections,t)})}return n};var f=function(n){return{type:"top",payload:n}},d=function(n,t){return{type:"set",payload:{id:n,height:t}}},p=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:a).onTop},s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;if(p(n))return null;var t=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:a).sections}(n);return o()(t).reduce(function(n,e){return null===n||t[n]<t[e]?e:n},null)}},"Jo+v":function(n,t,e){n.exports=e("/eQG")},v5Dd:function(n,t,e){var r=e("NsO/"),o=e("vwuL").f;e("zn7N")("getOwnPropertyDescriptor",function(){return function(n,t){return o(r(n),t)}})},vYYK:function(n,t,e){"use strict";e.d(t,"a",function(){return u});var r=e("hfKm"),o=e.n(r);function u(n,t,e){return t in n?o()(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}},ygXU:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index/reducer",function(){var n=e("BH8/");return{page:n.default||n}}])},zrwo:function(n,t,e){"use strict";e.d(t,"a",function(){return d});var r=e("Jo+v"),o=e.n(r),u=e("4mXO"),i=e.n(u),c=e("pLtp"),a=e.n(c),f=e("vYYK");function d(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=a()(e);"function"==typeof i.a&&(r=r.concat(i()(e).filter(function(n){return o()(e,n).enumerable}))),r.forEach(function(t){Object(f.a)(n,t,e[t])})}return n}}},[["ygXU","5d41","9da1"]]]);