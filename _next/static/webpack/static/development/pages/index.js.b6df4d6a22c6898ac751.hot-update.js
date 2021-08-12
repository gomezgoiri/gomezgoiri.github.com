webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index/index.jsx":
/*!*******************************!*\
  !*** ./pages/index/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Menu */ "./pages/index/Menu/index.jsx");
/* harmony import */ var _sections_Top__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/Top */ "./pages/index/sections/Top.jsx");
/* harmony import */ var _sections_Profile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/Profile */ "./pages/index/sections/Profile.jsx");
/* harmony import */ var _sections_Experience__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/Experience */ "./pages/index/sections/Experience/index.jsx");
/* harmony import */ var _sections_Technical__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/Technical */ "./pages/index/sections/Technical.jsx");
/* harmony import */ var _sections_Contact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/Contact */ "./pages/index/sections/Contact.jsx");
/* harmony import */ var _sections_MoreInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/MoreInfo */ "./pages/index/sections/MoreInfo.jsx");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reducer */ "./pages/index/reducer.js");
/* harmony import */ var _content_index_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../content/index.json */ "./content/index.json");
var _content_index_json__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../content/index.json */ "./content/index.json", 1);



var _templateObject;














var menuItems = [{
  href: 'profile',
  label: 'Profile'
}, {
  href: 'experience',
  label: 'Experience'
}, {
  href: 'skills',
  label: 'Technical skills'
}, {
  href: 'moreInfo',
  label: 'More info'
}, {
  href: 'contact',
  label: 'Contact'
}];

var Index = function Index(_ref) {
  var className = _ref.className;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(_reducer__WEBPACK_IMPORTED_MODULE_13__["default"]),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var currentSection = Object(_reducer__WEBPACK_IMPORTED_MODULE_13__["getSelectedSection"])(state);
  var onTop = Object(_reducer__WEBPACK_IMPORTED_MODULE_13__["isOnTop"])(state);

  var setCurrentSectionIfNeeded = function setCurrentSectionIfNeeded(section, height) {
    dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_13__["intersect"])(section, height));
  };

  var setOnTop = function setOnTop(v) {
    return dispatch(Object(_reducer__WEBPACK_IMPORTED_MODULE_13__["setTop"])(v));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    httpEquiv: "content-type",
    content: "text/html; charset=utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", null, _content_index_json__WEBPACK_IMPORTED_MODULE_14__.siteTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "author",
    content: "Aitor G\xF3mez Goiri"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "description",
    content: _content_index_json__WEBPACK_IMPORTED_MODULE_14__.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.min.css",
    integrity: "sha512-AyOHI/tIMgoG+32apAs3OdqFowPSDqiz5vLcD2wdhBJ4J/xF1PI6UITcyhS5HCmsiioapRaONqYBvimxzFfnoA==",
    crossOrigin: "anonymous",
    referrerPolicy: "no-referrer"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_sections_Top__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onTop: function onTop(isThere) {
      return setOnTop(isThere);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    clickHref: "#profile",
    atTop: onTop,
    items: menuItems,
    selected: currentSection
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_sections_Profile__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "profile",
    onEnter: setCurrentSectionIfNeeded
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_sections_Experience__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "experience",
    onEnter: setCurrentSectionIfNeeded
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_sections_Technical__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "skills",
    onEnter: setCurrentSectionIfNeeded
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_sections_MoreInfo__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "moreInfo",
    onEnter: setCurrentSectionIfNeeded
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_sections_Contact__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "contact",
    onEnter: setCurrentSectionIfNeeded
  }));
}; // Abilities
// More info (links a las subsecciones con iconos grandes)


Index.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(Index)(_templateObject || (_templateObject = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  h2 {\n    font-size: 54px;\n    text-align: center;\n  }\n\n  h2,\n  h3 {\n    font-weight: 300;\n  }\n"]))));

/***/ })

})
//# sourceMappingURL=index.js.b6df4d6a22c6898ac751.hot-update.js.map