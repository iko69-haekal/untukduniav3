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
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
            style: {
              maxHeight: "86vh",
              width: "100%",
              height: "100%"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb2R1ayIsImdhbGVyeSIsImptYiIsIm1hcCIsImRhdGEiLCJtYXhIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImltYWdlIiwiaSIsImltYWdlX3RpdGxlIiwiZm9udFNpemUiLCJnZXRJbml0aWFsUHJvcHMiLCJBeGlvcyIsImdldCIsImFwaSIsImxlbmd0aCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLElBQVQsT0FBdUM7QUFBQSxNQUF2QkMsTUFBdUIsUUFBdkJBLE1BQXVCO0FBQUEsTUFBZkMsTUFBZSxRQUFmQSxNQUFlO0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPO0FBQ3BELHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsZ0RBQUQsS0FERixlQUVFLDhEQUFDLDBEQUFELEtBRkYsZUFHRSw4REFBQyw2Q0FBRDtBQUFVLGNBQVEsTUFBbEI7QUFBQSxnQkFDR0EsR0FBRyxDQUFDQyxHQUFKLENBQVEsVUFBQ0MsSUFBRCxFQUFVO0FBQ2pCLDRCQUNFO0FBQUEsaUNBQ0U7QUFDRSxpQkFBSyxFQUFFO0FBQ0xDLHVCQUFTLEVBQUUsTUFETjtBQUdMQyxtQkFBSyxFQUFFLE1BSEY7QUFJTEMsb0JBQU0sRUFBRTtBQUpILGFBRFQ7QUFPRSxlQUFHLEVBQUVILElBQUksQ0FBQ0ksS0FQWjtBQVFFLGVBQUcsRUFBQztBQVJOO0FBREYsVUFERjtBQWNELE9BZkE7QUFESCxNQUhGLGVBcUJFO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLGFBQWQ7QUFBQTtBQUFBLFFBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLGtCQUNHUixNQUFNLENBQUNHLEdBQVAsQ0FBVyxVQUFDSCxNQUFELEVBQVNTLENBQVQsRUFBZTtBQUN6Qiw4QkFDRTtBQUFLLHFCQUFTLEVBQUMsZUFBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxNQUFmO0FBQUEsc0NBQ0UsOERBQUMsaURBQUQ7QUFDRSx5QkFBUyxFQUFDLGNBRFo7QUFFRSxtQkFBRyxFQUFFVCxNQUFNLENBQUNRLEtBRmQ7QUFHRSxtQkFBRyxFQUFFUixNQUFNLENBQUNVLFdBSGQ7QUFJRSxxQkFBSyxFQUFDLE1BSlI7QUFLRSxzQkFBTSxFQUFDLEtBTFQ7QUFNRSwyQkFBVztBQU5iLGdCQURGLGVBU0U7QUFBSyx5QkFBUyxFQUFDLFdBQWY7QUFBQSx1Q0FDRTtBQUFJLHVCQUFLLEVBQUU7QUFBRUMsNEJBQVEsRUFBRTtBQUFaLG1CQUFYO0FBQWlDLDJCQUFTLEVBQUMsYUFBM0M7QUFBQSw0QkFDR1gsTUFBTSxDQUFDVTtBQURWO0FBREYsZ0JBVEY7QUFBQTtBQURGLGFBQW9DRCxDQUFwQyxDQURGO0FBbUJELFNBcEJBO0FBREgsUUFGRjtBQUFBLE1BckJGLGVBZ0RFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBLFFBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsdUNBQWY7QUFBQSxrQkFDR1IsTUFBTSxDQUFDRSxHQUFQLENBQVcsVUFBQ0YsTUFBRCxFQUFTUSxDQUFULEVBQWU7QUFDekIsOEJBQ0U7QUFBSyxxQkFBUyxFQUFDLHlCQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLE1BQWY7QUFBQSxxQ0FDRTtBQUNFLHFCQUFLLEVBQUMsTUFEUjtBQUVFLHNCQUFNLEVBQUMsTUFGVDtBQUdFLHlCQUFTLEVBQUMsV0FIWjtBQUlFLG1CQUFHLEVBQUVSLE1BQU0sQ0FBQ08sS0FKZDtBQUtFLG1CQUFHLEVBQUVQLE1BQU0sQ0FBQ1M7QUFMZDtBQURGO0FBREYsYUFBOENELENBQTlDLENBREY7QUFhRCxTQWRBO0FBREgsUUFGRjtBQUFBLE1BaERGLGVBcUVFLDhEQUFDLDJEQUFELEtBckVGLGVBc0VFLDhEQUFDLDBEQUFELEtBdEVGO0FBQUEsSUFERjtBQTBFRDtLQTNFdUJWLEk7QUE2RXhCQSxJQUFJLENBQUNhLGVBQUwsaU1BQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0ZDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUMsbURBQUcsR0FBRyxTQUFoQixDQURFOztBQUFBO0FBQ2pCZixnQkFEaUI7QUFBQTtBQUFBLGlCQUVGYSw0Q0FBSyxDQUFDQyxHQUFOLENBQVVDLG1EQUFHLEdBQUcsU0FBaEIsQ0FGRTs7QUFBQTtBQUVqQmQsZ0JBRmlCO0FBQUE7QUFBQSxpQkFHTFksNENBQUssQ0FBQ0MsR0FBTixDQUFVQyxtREFBRyxHQUFHLHlCQUFoQixDQUhLOztBQUFBO0FBR2pCYixhQUhpQjtBQUlyQkEsYUFBRyxHQUFHQSxHQUFHLENBQUNFLElBQUosQ0FBU0EsSUFBZjtBQUNBSixnQkFBTSxHQUFHQSxNQUFNLENBQUNJLElBQVAsQ0FBWUEsSUFBckI7QUFDQUgsZ0JBQU0sR0FBR0EsTUFBTSxDQUFDRyxJQUFQLENBQVlBLElBQXJCO0FBTnFCLDJDQU9kO0FBQ0xKLGtCQUFNLEVBQUVBLE1BQU0sQ0FBQ2dCLE1BQVAsSUFBaUIsQ0FBakIsR0FBcUJoQixNQUFyQixHQUE4QkEsTUFBTSxDQUFDaUIsS0FBUCxDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FEakM7QUFFTGhCLGtCQUFNLEVBQUVBLE1BQU0sQ0FBQ2UsTUFBUCxJQUFpQixDQUFqQixHQUFxQmYsTUFBckIsR0FBOEJBLE1BQU0sQ0FBQ2dCLEtBQVAsQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBRmpDO0FBR0xmLGVBQUcsRUFBRUE7QUFIQSxXQVBjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZhZjg2OGEwMDFmOTcwNjQwMTYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRhY3RcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL2NvbmZpZy91cmxhcGlcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwcm9kdWssIGdhbGVyeSwgam1iIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+PC9IZWFkPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPENhcm91c2VsIGF1dG9wbGF5PlxuICAgICAgICB7am1iLm1hcCgoZGF0YSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCI4NnZoXCIsXG5cbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzcmM9e2RhdGEuaW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PVwiRmlyc3Qgc2xpZGVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0Nhcm91c2VsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXktNVwiPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5PVVIgUFJPRFVDVDwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTVcIj5cbiAgICAgICAgICB7cHJvZHVrLm1hcCgocHJvZHVrLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTNcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVrLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1ay5pbWFnZV90aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgdW5vcHRpbWl6ZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFNpemU6IFwiMTZwdFwiIH19IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Byb2R1ay5pbWFnZV90aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogZW5kIHByb2R1Y3QgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTVcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTRcIj5HQUxFUlk8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICB7Z2FsZXJ5Lm1hcCgoZ2FsZXJ5LCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1tZC00IGNvbC02XCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Z2FsZXJ5LmltYWdlfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2dhbGVyeS5pbWFnZV90aXRsZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBlbmQgZ2FsZXJ5ICovfVxuICAgICAgPENvbnRhY3QgLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGxldCBwcm9kdWsgPSBhd2FpdCBBeGlvcy5nZXQoYXBpICsgXCJwcm9kdWN0XCIpO1xuICBsZXQgZ2FsZXJ5ID0gYXdhaXQgQXhpb3MuZ2V0KGFwaSArIFwiZ2FsbGVyeVwiKTtcbiAgbGV0IGptYiA9IGF3YWl0IEF4aW9zLmdldChhcGkgKyBcImltYWdlLW1hbmFnZW1lbnQvaW1hZ2VzXCIpO1xuICBqbWIgPSBqbWIuZGF0YS5kYXRhO1xuICBwcm9kdWsgPSBwcm9kdWsuZGF0YS5kYXRhO1xuICBnYWxlcnkgPSBnYWxlcnkuZGF0YS5kYXRhO1xuICByZXR1cm4ge1xuICAgIHByb2R1azogcHJvZHVrLmxlbmd0aCA8PSAzID8gcHJvZHVrIDogcHJvZHVrLnNsaWNlKDAsIDMpLFxuICAgIGdhbGVyeTogZ2FsZXJ5Lmxlbmd0aCA8PSA0ID8gZ2FsZXJ5IDogZ2FsZXJ5LnNsaWNlKDAsIDQpLFxuICAgIGptYjogam1iLFxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=