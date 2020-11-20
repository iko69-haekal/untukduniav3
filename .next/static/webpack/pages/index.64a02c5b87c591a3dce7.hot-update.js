webpackHotUpdate_N_E("pages/index",{

/***/ "./components/carousel/index.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/contact */ "./components/contact/index.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/footer */ "./components/footer/index.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar/index.js");
/* harmony import */ var _config_urlapi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config/urlapi */ "./config/urlapi.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);














function Home(_ref) {
  var produk = _ref.produk,
      galery = _ref.galery;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_6__["Carousel"], {
      autoplay: true,
      children: jmb.map(function (data) {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
            className: "d-block w-100",
            style: {
              width: "100%",
              height: "100%",
              maxHeight: "85vh"
            },
            src: data.image,
            alt: "First slide"
          })
        });
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
      className: "container my-5",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h4", {
        className: "text-center",
        children: "OUR PRODUCT"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
        className: "row mt-5",
        children: produk.map(function (produk, i) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
            className: "col-md-4 mb-3",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
              className: "card",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
                className: "card-img-top",
                src: produk.image,
                alt: produk.image_title,
                width: "100%",
                height: "200",
                unoptimized: true
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
                className: "card-body",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h5", {
                  style: {
                    fontSize: "16pt"
                  },
                  className: "card-title ",
                  children: produk.image_title
                })
              })]
            })
          }, i);
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
      className: "my-5",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h3", {
        className: "text-center mb-4",
        children: "GALERY"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
        className: "row justify-content-center no-gutters",
        children: galery.map(function (galery, i) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
            className: "col-lg-3 col-md-4 col-6",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
              className: "item",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
                width: "100%",
                height: "100%",
                className: "img-fluid",
                src: galery.image,
                alt: galery.image_title
              })
            })
          }, i);
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_contact__WEBPACK_IMPORTED_MODULE_7__["default"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {})]
  });
}
_c = Home;
Home.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var produk, galery;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_config_urlapi__WEBPACK_IMPORTED_MODULE_10__["api"] + "product");

        case 2:
          produk = _context.sent;
          _context.next = 5;
          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_config_urlapi__WEBPACK_IMPORTED_MODULE_10__["api"] + "gallery");

        case 5:
          galery = _context.sent;
          produk = produk.data.data;
          galery = galery.data.data;
          return _context.abrupt("return", {
            produk: produk.length <= 3 ? produk : produk.slice(0, 3),
            galery: galery.length <= 4 ? galery : galery.slice(0, 4)
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb2R1ayIsImdhbGVyeSIsImptYiIsIm1hcCIsImRhdGEiLCJ3aWR0aCIsImhlaWdodCIsIm1heEhlaWdodCIsImltYWdlIiwiaSIsImltYWdlX3RpdGxlIiwiZm9udFNpemUiLCJnZXRJbml0aWFsUHJvcHMiLCJBeGlvcyIsImdldCIsImFwaSIsImxlbmd0aCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLElBQVQsT0FBa0M7QUFBQSxNQUFsQkMsTUFBa0IsUUFBbEJBLE1BQWtCO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQy9DLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsZ0RBQUQsS0FERixlQUVFLDhEQUFDLDBEQUFELEtBRkYsZUFHRSw4REFBQyw2Q0FBRDtBQUFVLGNBQVEsTUFBbEI7QUFBQSxnQkFDR0MsR0FBRyxDQUFDQyxHQUFKLENBQVEsVUFBQ0MsSUFBRCxFQUFVO0FBQ2pCLDRCQUNFO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFDLGVBRFo7QUFFRSxpQkFBSyxFQUFFO0FBQUVDLG1CQUFLLEVBQUUsTUFBVDtBQUFpQkMsb0JBQU0sRUFBRSxNQUF6QjtBQUFpQ0MsdUJBQVMsRUFBRTtBQUE1QyxhQUZUO0FBR0UsZUFBRyxFQUFFSCxJQUFJLENBQUNJLEtBSFo7QUFJRSxlQUFHLEVBQUM7QUFKTjtBQURGLFVBREY7QUFVRCxPQVhBO0FBREgsTUFIRixlQWlCRTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxhQUFkO0FBQUE7QUFBQSxRQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSxrQkFDR1IsTUFBTSxDQUFDRyxHQUFQLENBQVcsVUFBQ0gsTUFBRCxFQUFTUyxDQUFULEVBQWU7QUFDekIsOEJBQ0U7QUFBSyxxQkFBUyxFQUFDLGVBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsTUFBZjtBQUFBLHNDQUNFLDhEQUFDLGlEQUFEO0FBQ0UseUJBQVMsRUFBQyxjQURaO0FBRUUsbUJBQUcsRUFBRVQsTUFBTSxDQUFDUSxLQUZkO0FBR0UsbUJBQUcsRUFBRVIsTUFBTSxDQUFDVSxXQUhkO0FBSUUscUJBQUssRUFBQyxNQUpSO0FBS0Usc0JBQU0sRUFBQyxLQUxUO0FBTUUsMkJBQVc7QUFOYixnQkFERixlQVNFO0FBQUsseUJBQVMsRUFBQyxXQUFmO0FBQUEsdUNBQ0U7QUFBSSx1QkFBSyxFQUFFO0FBQUVDLDRCQUFRLEVBQUU7QUFBWixtQkFBWDtBQUFpQywyQkFBUyxFQUFDLGFBQTNDO0FBQUEsNEJBQ0dYLE1BQU0sQ0FBQ1U7QUFEVjtBQURGLGdCQVRGO0FBQUE7QUFERixhQUFvQ0QsQ0FBcEMsQ0FERjtBQW1CRCxTQXBCQTtBQURILFFBRkY7QUFBQSxNQWpCRixlQTRDRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLGtCQUFkO0FBQUE7QUFBQSxRQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLHVDQUFmO0FBQUEsa0JBQ0dSLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFVBQUNGLE1BQUQsRUFBU1EsQ0FBVCxFQUFlO0FBQ3pCLDhCQUNFO0FBQUsscUJBQVMsRUFBQyx5QkFBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxNQUFmO0FBQUEscUNBQ0U7QUFDRSxxQkFBSyxFQUFDLE1BRFI7QUFFRSxzQkFBTSxFQUFDLE1BRlQ7QUFHRSx5QkFBUyxFQUFDLFdBSFo7QUFJRSxtQkFBRyxFQUFFUixNQUFNLENBQUNPLEtBSmQ7QUFLRSxtQkFBRyxFQUFFUCxNQUFNLENBQUNTO0FBTGQ7QUFERjtBQURGLGFBQThDRCxDQUE5QyxDQURGO0FBYUQsU0FkQTtBQURILFFBRkY7QUFBQSxNQTVDRixlQWlFRSw4REFBQywyREFBRCxLQWpFRixlQWtFRSw4REFBQywwREFBRCxLQWxFRjtBQUFBLElBREY7QUFzRUQ7S0F2RXVCVixJO0FBeUV4QkEsSUFBSSxDQUFDYSxlQUFMLGlNQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNGQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVDLG1EQUFHLEdBQUcsU0FBaEIsQ0FERTs7QUFBQTtBQUNqQmYsZ0JBRGlCO0FBQUE7QUFBQSxpQkFFRmEsNENBQUssQ0FBQ0MsR0FBTixDQUFVQyxtREFBRyxHQUFHLFNBQWhCLENBRkU7O0FBQUE7QUFFakJkLGdCQUZpQjtBQUdyQkQsZ0JBQU0sR0FBR0EsTUFBTSxDQUFDSSxJQUFQLENBQVlBLElBQXJCO0FBQ0FILGdCQUFNLEdBQUdBLE1BQU0sQ0FBQ0csSUFBUCxDQUFZQSxJQUFyQjtBQUpxQiwyQ0FLZDtBQUNMSixrQkFBTSxFQUFFQSxNQUFNLENBQUNnQixNQUFQLElBQWlCLENBQWpCLEdBQXFCaEIsTUFBckIsR0FBOEJBLE1BQU0sQ0FBQ2lCLEtBQVAsQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBRGpDO0FBRUxoQixrQkFBTSxFQUFFQSxNQUFNLENBQUNlLE1BQVAsSUFBaUIsQ0FBakIsR0FBcUJmLE1BQXJCLEdBQThCQSxNQUFNLENBQUNnQixLQUFQLENBQWEsQ0FBYixFQUFnQixDQUFoQjtBQUZqQyxXQUxjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY0YTAyYzViODdjNTkxYTNkY2U3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRhY3RcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL2NvbmZpZy91cmxhcGlcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwcm9kdWssIGdhbGVyeSB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPjwvSGVhZD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxDYXJvdXNlbCBhdXRvcGxheT5cbiAgICAgICAge2ptYi5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgbWF4SGVpZ2h0OiBcIjg1dmhcIiB9fVxuICAgICAgICAgICAgICAgIHNyYz17ZGF0YS5pbWFnZX1cbiAgICAgICAgICAgICAgICBhbHQ9XCJGaXJzdCBzbGlkZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteS01XCI+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPk9VUiBQUk9EVUNUPC9oND5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtNVwiPlxuICAgICAgICAgIHtwcm9kdWsubWFwKChwcm9kdWssIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWItM1wiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWsuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVrLmltYWdlX3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBcIlxuICAgICAgICAgICAgICAgICAgICB1bm9wdGltaXplZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250U2l6ZTogXCIxNnB0XCIgfX0gY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVrLmltYWdlX3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBlbmQgcHJvZHVjdCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNVwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItNFwiPkdBTEVSWTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgbm8tZ3V0dGVyc1wiPlxuICAgICAgICAgIHtnYWxlcnkubWFwKChnYWxlcnksIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTQgY29sLTZcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtnYWxlcnkuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17Z2FsZXJ5LmltYWdlX3RpdGxlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIGVuZCBnYWxlcnkgKi99XG4gICAgICA8Q29udGFjdCAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufVxuXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgbGV0IHByb2R1ayA9IGF3YWl0IEF4aW9zLmdldChhcGkgKyBcInByb2R1Y3RcIik7XG4gIGxldCBnYWxlcnkgPSBhd2FpdCBBeGlvcy5nZXQoYXBpICsgXCJnYWxsZXJ5XCIpO1xuICBwcm9kdWsgPSBwcm9kdWsuZGF0YS5kYXRhO1xuICBnYWxlcnkgPSBnYWxlcnkuZGF0YS5kYXRhO1xuICByZXR1cm4ge1xuICAgIHByb2R1azogcHJvZHVrLmxlbmd0aCA8PSAzID8gcHJvZHVrIDogcHJvZHVrLnNsaWNlKDAsIDMpLFxuICAgIGdhbGVyeTogZ2FsZXJ5Lmxlbmd0aCA8PSA0ID8gZ2FsZXJ5IDogZ2FsZXJ5LnNsaWNlKDAsIDQpLFxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=