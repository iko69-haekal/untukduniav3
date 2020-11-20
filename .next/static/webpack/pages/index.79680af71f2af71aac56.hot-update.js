webpackHotUpdate_N_E("pages/index",{

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
      galery = _ref.galery,
      jmb = _ref.jmb;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_6__["Carousel"], {
      autoplay: true,
      children: jmb.map(function (data) {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
              style: {
                maxHeight: "86vh"
              },
              width: "100%",
              height: "100%",
              src: data.image,
              alt: "First slide"
            })
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
  var produk, galery, jmb;
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
          _context.next = 8;
          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_config_urlapi__WEBPACK_IMPORTED_MODULE_10__["api"] + "image-management/images");

        case 8:
          jmb = _context.sent;
          jmb = jmb.data.data;
          produk = produk.data.data;
          galery = galery.data.data;
          return _context.abrupt("return", {
            produk: produk.length <= 3 ? produk : produk.slice(0, 3),
            galery: galery.length <= 4 ? galery : galery.slice(0, 4),
            jmb: jmb
          });

        case 13:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb2R1ayIsImdhbGVyeSIsImptYiIsIm1hcCIsImRhdGEiLCJtYXhIZWlnaHQiLCJpbWFnZSIsImkiLCJpbWFnZV90aXRsZSIsImZvbnRTaXplIiwiZ2V0SW5pdGlhbFByb3BzIiwiQXhpb3MiLCJnZXQiLCJhcGkiLCJsZW5ndGgiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxJQUFULE9BQXVDO0FBQUEsTUFBdkJDLE1BQXVCLFFBQXZCQSxNQUF1QjtBQUFBLE1BQWZDLE1BQWUsUUFBZkEsTUFBZTtBQUFBLE1BQVBDLEdBQU8sUUFBUEEsR0FBTztBQUNwRCxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGdEQUFELEtBREYsZUFFRSw4REFBQywwREFBRCxLQUZGLGVBR0UsOERBQUMsNkNBQUQ7QUFBVSxjQUFRLE1BQWxCO0FBQUEsZ0JBQ0dBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLFVBQUNDLElBQUQsRUFBVTtBQUNqQiw0QkFDRTtBQUFBLGlDQUNFO0FBQUEsbUNBQ0UsOERBQUMsaURBQUQ7QUFDRSxtQkFBSyxFQUFFO0FBQ0xDLHlCQUFTLEVBQUU7QUFETixlQURUO0FBSUUsbUJBQUssRUFBQyxNQUpSO0FBS0Usb0JBQU0sRUFBQyxNQUxUO0FBTUUsaUJBQUcsRUFBRUQsSUFBSSxDQUFDRSxLQU5aO0FBT0UsaUJBQUcsRUFBQztBQVBOO0FBREY7QUFERixVQURGO0FBZUQsT0FoQkE7QUFESCxNQUhGLGVBc0JFO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLGFBQWQ7QUFBQTtBQUFBLFFBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLGtCQUNHTixNQUFNLENBQUNHLEdBQVAsQ0FBVyxVQUFDSCxNQUFELEVBQVNPLENBQVQsRUFBZTtBQUN6Qiw4QkFDRTtBQUFLLHFCQUFTLEVBQUMsZUFBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxNQUFmO0FBQUEsc0NBQ0UsOERBQUMsaURBQUQ7QUFDRSx5QkFBUyxFQUFDLGNBRFo7QUFFRSxtQkFBRyxFQUFFUCxNQUFNLENBQUNNLEtBRmQ7QUFHRSxtQkFBRyxFQUFFTixNQUFNLENBQUNRLFdBSGQ7QUFJRSxxQkFBSyxFQUFDLE1BSlI7QUFLRSxzQkFBTSxFQUFDLEtBTFQ7QUFNRSwyQkFBVztBQU5iLGdCQURGLGVBU0U7QUFBSyx5QkFBUyxFQUFDLFdBQWY7QUFBQSx1Q0FDRTtBQUFJLHVCQUFLLEVBQUU7QUFBRUMsNEJBQVEsRUFBRTtBQUFaLG1CQUFYO0FBQWlDLDJCQUFTLEVBQUMsYUFBM0M7QUFBQSw0QkFDR1QsTUFBTSxDQUFDUTtBQURWO0FBREYsZ0JBVEY7QUFBQTtBQURGLGFBQW9DRCxDQUFwQyxDQURGO0FBbUJELFNBcEJBO0FBREgsUUFGRjtBQUFBLE1BdEJGLGVBaURFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBLFFBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsdUNBQWY7QUFBQSxrQkFDR04sTUFBTSxDQUFDRSxHQUFQLENBQVcsVUFBQ0YsTUFBRCxFQUFTTSxDQUFULEVBQWU7QUFDekIsOEJBQ0U7QUFBSyxxQkFBUyxFQUFDLHlCQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLE1BQWY7QUFBQSxxQ0FDRTtBQUNFLHFCQUFLLEVBQUMsTUFEUjtBQUVFLHNCQUFNLEVBQUMsTUFGVDtBQUdFLHlCQUFTLEVBQUMsV0FIWjtBQUlFLG1CQUFHLEVBQUVOLE1BQU0sQ0FBQ0ssS0FKZDtBQUtFLG1CQUFHLEVBQUVMLE1BQU0sQ0FBQ087QUFMZDtBQURGO0FBREYsYUFBOENELENBQTlDLENBREY7QUFhRCxTQWRBO0FBREgsUUFGRjtBQUFBLE1BakRGLGVBc0VFLDhEQUFDLDJEQUFELEtBdEVGLGVBdUVFLDhEQUFDLDBEQUFELEtBdkVGO0FBQUEsSUFERjtBQTJFRDtLQTVFdUJSLEk7QUE4RXhCQSxJQUFJLENBQUNXLGVBQUwsaU1BQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0ZDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUMsbURBQUcsR0FBRyxTQUFoQixDQURFOztBQUFBO0FBQ2pCYixnQkFEaUI7QUFBQTtBQUFBLGlCQUVGVyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVDLG1EQUFHLEdBQUcsU0FBaEIsQ0FGRTs7QUFBQTtBQUVqQlosZ0JBRmlCO0FBQUE7QUFBQSxpQkFHTFUsNENBQUssQ0FBQ0MsR0FBTixDQUFVQyxtREFBRyxHQUFHLHlCQUFoQixDQUhLOztBQUFBO0FBR2pCWCxhQUhpQjtBQUlyQkEsYUFBRyxHQUFHQSxHQUFHLENBQUNFLElBQUosQ0FBU0EsSUFBZjtBQUNBSixnQkFBTSxHQUFHQSxNQUFNLENBQUNJLElBQVAsQ0FBWUEsSUFBckI7QUFDQUgsZ0JBQU0sR0FBR0EsTUFBTSxDQUFDRyxJQUFQLENBQVlBLElBQXJCO0FBTnFCLDJDQU9kO0FBQ0xKLGtCQUFNLEVBQUVBLE1BQU0sQ0FBQ2MsTUFBUCxJQUFpQixDQUFqQixHQUFxQmQsTUFBckIsR0FBOEJBLE1BQU0sQ0FBQ2UsS0FBUCxDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FEakM7QUFFTGQsa0JBQU0sRUFBRUEsTUFBTSxDQUFDYSxNQUFQLElBQWlCLENBQWpCLEdBQXFCYixNQUFyQixHQUE4QkEsTUFBTSxDQUFDYyxLQUFQLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUZqQztBQUdMYixlQUFHLEVBQUVBO0FBSEEsV0FQYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43OTY4MGFmNzFmMmFmNzFhYWM1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250YWN0XCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlclwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi9jb25maWcvdXJsYXBpXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcHJvZHVrLCBnYWxlcnksIGptYiB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPjwvSGVhZD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxDYXJvdXNlbCBhdXRvcGxheT5cbiAgICAgICAge2ptYi5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCI4NnZoXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhLmltYWdlfVxuICAgICAgICAgICAgICAgICAgYWx0PVwiRmlyc3Qgc2xpZGVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0Nhcm91c2VsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXktNVwiPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5PVVIgUFJPRFVDVDwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTVcIj5cbiAgICAgICAgICB7cHJvZHVrLm1hcCgocHJvZHVrLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTNcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVrLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1ay5pbWFnZV90aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgdW5vcHRpbWl6ZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFNpemU6IFwiMTZwdFwiIH19IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Byb2R1ay5pbWFnZV90aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogZW5kIHByb2R1Y3QgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTVcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTRcIj5HQUxFUlk8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICB7Z2FsZXJ5Lm1hcCgoZ2FsZXJ5LCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1tZC00IGNvbC02XCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Z2FsZXJ5LmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2dhbGVyeS5pbWFnZV90aXRsZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBlbmQgZ2FsZXJ5ICovfVxuICAgICAgPENvbnRhY3QgLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGxldCBwcm9kdWsgPSBhd2FpdCBBeGlvcy5nZXQoYXBpICsgXCJwcm9kdWN0XCIpO1xuICBsZXQgZ2FsZXJ5ID0gYXdhaXQgQXhpb3MuZ2V0KGFwaSArIFwiZ2FsbGVyeVwiKTtcbiAgbGV0IGptYiA9IGF3YWl0IEF4aW9zLmdldChhcGkgKyBcImltYWdlLW1hbmFnZW1lbnQvaW1hZ2VzXCIpO1xuICBqbWIgPSBqbWIuZGF0YS5kYXRhO1xuICBwcm9kdWsgPSBwcm9kdWsuZGF0YS5kYXRhO1xuICBnYWxlcnkgPSBnYWxlcnkuZGF0YS5kYXRhO1xuICByZXR1cm4ge1xuICAgIHByb2R1azogcHJvZHVrLmxlbmd0aCA8PSAzID8gcHJvZHVrIDogcHJvZHVrLnNsaWNlKDAsIDMpLFxuICAgIGdhbGVyeTogZ2FsZXJ5Lmxlbmd0aCA8PSA0ID8gZ2FsZXJ5IDogZ2FsZXJ5LnNsaWNlKDAsIDQpLFxuICAgIGptYjogam1iLFxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=