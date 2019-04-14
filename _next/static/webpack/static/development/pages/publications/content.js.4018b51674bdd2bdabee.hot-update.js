webpackHotUpdate("static\\development\\pages\\publications\\content.js",{

/***/ "./pages/publications/content/PublicationPage.jsx":
/*!********************************************************!*\
  !*** ./pages/publications/content/PublicationPage.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var components_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Page */ "./src/components/Page.jsx");
/* harmony import */ var _PublicationIcons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PublicationIcons */ "./pages/publications/PublicationIcons.jsx");



function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  display: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  text-align: center;\n\n  iframe {\n    border: 1px solid #ccc;\n    border-width: 1px 1px 0;\n    margin-bottom: 5px;\n    width: 427px;\n    height: 356px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  clear: both;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var DivClear = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var IFrameContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());
var HiddenH2 = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h2(_templateObject3());

var PublicationPage = function PublicationPage(_ref) {
  var title = _ref.title,
      url = _ref.url,
      authors = _ref.authors,
      description = _ref.description,
      restCitation = _ref.restCitation,
      bodyHtml = _ref.bodyHtml,
      slideshareEmbedCode = _ref.slideshareEmbedCode,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["title", "url", "authors", "description", "restCitation", "bodyHtml", "slideshareEmbedCode"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
    siteTitle: title,
    heroTitle: title,
    titleLink: url,
    description: description,
    topLinks: [{
      href: '/publications.html',
      text: '<< Back to the publications list'
    }]
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("article", {
    itemScope: true,
    itemType: "http://schema.org/ScholarlyArticle"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HiddenH2, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: url,
    rel: "bookmark",
    title: "Permanent link to ",
    itemProp: "url"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    itemProp: "name"
  }, title))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("author", null, authors))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("blockquote", {
    dangerouslySetInnerHTML: {
      __html: restCitation
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PublicationIcons__WEBPACK_IMPORTED_MODULE_6__["default"], other), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DivClear, {
    itemProp: "description",
    dangerouslySetInnerHTML: {
      __html: bodyHtml
    }
  }), slideshareEmbedCode && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(IFrameContainer, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("iframe", {
    title: "Slideshow",
    src: "http://www.slideshare.net/slideshow/embed_code/".concat(slideshareEmbedCode),
    width: "427",
    height: "356",
    frameBorder: "0",
    marginWidth: "0",
    marginHeight: "0",
    scrolling: "no",
    allowFullScreen: true,
    webkitallowfullscreen: "true",
    mozallowfullscreen: "true"
  })))));
};

PublicationPage.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  url: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  authors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  restCitation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  bodyHtml: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  slideshareEmbedCode: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (PublicationPage);

/***/ })

})
//# sourceMappingURL=content.js.4018b51674bdd2bdabee.hot-update.js.map