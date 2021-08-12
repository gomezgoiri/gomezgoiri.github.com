webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index/sections/Contact.jsx":
/*!******************************************!*\
  !*** ./pages/index/sections/Contact.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _IntersectedSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../IntersectedSection */ "./pages/index/IntersectedSection.jsx");
/* harmony import */ var _content_landing_contact_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../content/landing/contact.json */ "./content/landing/contact.json");
var _content_landing_contact_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../content/landing/contact.json */ "./content/landing/contact.json", 1);




var _templateObject;

var _excluded = ["className"];





var twitterUrl = "http://twitter.com/".concat(_content_landing_contact_json__WEBPACK_IMPORTED_MODULE_7__.twitter);
var linkedInUrl = "http://linkedin.es/in/".concat(_content_landing_contact_json__WEBPACK_IMPORTED_MODULE_7__.linkedin, "/");
var githubUrl = "https://github.com/".concat(_content_landing_contact_json__WEBPACK_IMPORTED_MODULE_7__.github, "/");
var orcidUrl = "https://orcid.org/".concat(_content_landing_contact_json__WEBPACK_IMPORTED_MODULE_7__.orcid, "/");
var slideshareUrl = "http://www.slideshare.net/".concat(_content_landing_contact_json__WEBPACK_IMPORTED_MODULE_7__.slideshare, "/");
var cvUrl = '/cv.html';

var Contact = function Contact(_ref) {
  var className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_IntersectedSection__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    isFullScreen: true,
    title: "Contact",
    bgColor: "#434242",
    hdColor: "#fff",
    className: className
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "Do you still want to know more about me? Check the following links or scan the QR code to add me as a contact."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "columns is-vcentered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "column is-6 is-offset-1-desktop is-5-desktop is-offset-2-widescreen is-4-widescreen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "contact-links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: twitterUrl,
    rel: "noopener noreferrer",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "fab fa-twitter-square"
  }), " ", twitterUrl), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: linkedInUrl,
    rel: "noopener noreferrer",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "fab fa-linkedin"
  }), " ", linkedInUrl), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: githubUrl,
    rel: "noopener noreferrer",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "fab fa-github-square"
  }), " ", githubUrl), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: orcidUrl,
    rel: "noopener noreferrer",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "fab fa-orcid"
  }), " My research profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: cvUrl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "fas fa-file-alt"
  }), " My complete CV"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: slideshareUrl,
    rel: "noopener noreferrer",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "fab fa-slideshare"
  }), " Some presentations I made"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "column qr-container is-offset-4-mobile is-4-mobile is-offset-2 is-4 is-3-widescreen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("figure", {
    className: "image is-square"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: _content_landing_contact_json__WEBPACK_IMPORTED_MODULE_7__.contactQr,
    alt: "Scan it and add me to your contacts!"
  }))))));
};

Contact.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(Contact)(_templateObject || (_templateObject = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  a,\n  p {\n    color: #fff;\n    opacity: 0.6;\n  }\n\n  a:hover {\n    opacity: 1;\n  }\n\n  hr {\n    background: white; /* For browsers that do not support gradients */\n    background: linear-gradient(\n      to right,\n      rgba(0, 0, 0, 0),\n      rgba(255, 255, 255, 0.6),\n      rgba(0, 0, 0, 0)\n    );\n  }\n\n  p {\n    margin-bottom: 2em;\n    text-align: center;\n  }\n\n  div.columns {\n    width: 100%;\n  }\n\n  .contact {\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n\n    .contact-links {\n      a {\n        display: block;\n      }\n    }\n  }\n"]))));

/***/ })

})
//# sourceMappingURL=index.js.58e501aec27d1a9c6e7e.hot-update.js.map