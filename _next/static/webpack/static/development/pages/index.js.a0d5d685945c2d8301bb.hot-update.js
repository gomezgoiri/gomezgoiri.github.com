webpackHotUpdate("static\\development\\pages\\index.js",{

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




function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  a,\n  p {\n    color: #fff;\n    opacity: 0.6;\n  }\n\n  a:hover {\n    opacity: 1;\n  }\n\n  hr {\n    background: white; /* For browsers that do not support gradients */\n    background: linear-gradient(\n      to right,\n      rgba(0, 0, 0, 0),\n      rgba(255, 255, 255, 0.6),\n      rgba(0, 0, 0, 0)\n    );\n  }\n\n  .contact {\n    .links {\n      display: flex;\n      align-items: center;\n      flex-direction: row;\n      flex-wrap: wrap;\n    }\n\n    .qr-container {\n      max-width: 100px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var twitterUrl = "http://twitter.com/".concat(_content_landing_contact_json__WEBPACK_IMPORTED_MODULE_7__.twitter);
var linkedInUrl = "http://linkedin.es/in/".concat(_content_landing_contact_json__WEBPACK_IMPORTED_MODULE_7__.linkedin, "/");
var githubUrl = "https://github.com/".concat(_content_landing_contact_json__WEBPACK_IMPORTED_MODULE_7__.github, "/");
var slideshareUrl = "http://www.slideshare.net/".concat(_content_landing_contact_json__WEBPACK_IMPORTED_MODULE_7__.slideshare, "/");
var cvUrl = '/cv.html';

var Contact = function Contact(_ref) {
  var className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_IntersectedSection__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    isFullScreen: true,
    title: "Contact",
    bgColor: "#434242",
    hdColor: "#fff",
    className: className
  }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "contact"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "Do you still want to know more about me? Check the following links or scan the QR code to add me as a contact."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "column is-full columns is-vcentered"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "column is-4 links"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: twitterUrl,
    rel: "noopener noreferrer",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "fab fa-twitter-square"
  }), " ", twitterUrl), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: linkedInUrl,
    rel: "noopener noreferrer",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "fab fa-linkedin"
  }), " ", linkedInUrl), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: githubUrl,
    rel: "noopener noreferrer",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "fab fa-github-square"
  }), " ", githubUrl), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: cvUrl
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "fas fa-file-alt"
  }), " My complete CV"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: slideshareUrl,
    rel: "noopener noreferrer",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "fab fa-slideshare"
  }), " Some presentations I made")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "column qr-container is-2"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("figure", {
    className: "image is-square"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: _content_landing_contact_json__WEBPACK_IMPORTED_MODULE_7__.contactQr,
    alt: "Scan it and add me to your contacts!"
  }))))));
};

Contact.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(Contact)(_templateObject()));

/***/ })

})
//# sourceMappingURL=index.js.a0d5d685945c2d8301bb.hot-update.js.map