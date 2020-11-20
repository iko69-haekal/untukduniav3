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
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
            style: {
              backgroundColor: "black",
              maxHeight: "85vh"
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
              style: {
                maxHeight: "86vh",
                width: "100%",
                height: "100%"
              },
              src: data.image,
              alt: "First slide"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
            style: {
              backgroundColor: "black",
              maxHeight: "85vh"
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
              style: {
                maxHeight: "86vh",
                width: "100%",
                height: "100%"
              },
              src: data.image,
              alt: "First slide"
            })
          })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb2R1ayIsImdhbGVyeSIsImptYiIsIm1hcCIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXhIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImltYWdlIiwiaSIsImltYWdlX3RpdGxlIiwiZm9udFNpemUiLCJnZXRJbml0aWFsUHJvcHMiLCJBeGlvcyIsImdldCIsImFwaSIsImxlbmd0aCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLElBQVQsT0FBdUM7QUFBQSxNQUF2QkMsTUFBdUIsUUFBdkJBLE1BQXVCO0FBQUEsTUFBZkMsTUFBZSxRQUFmQSxNQUFlO0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPO0FBQ3BELHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsZ0RBQUQsS0FERixlQUVFLDhEQUFDLDBEQUFELEtBRkYsZUFHRSw4REFBQyw2Q0FBRDtBQUFVLGNBQVEsTUFBbEI7QUFBQSxnQkFDR0EsR0FBRyxDQUFDQyxHQUFKLENBQVEsVUFBQ0MsSUFBRCxFQUFVO0FBQ2pCLDRCQUNFO0FBQUEsa0NBQ0U7QUFBSyxpQkFBSyxFQUFFO0FBQUVDLDZCQUFlLEVBQUUsT0FBbkI7QUFBNEJDLHVCQUFTLEVBQUU7QUFBdkMsYUFBWjtBQUFBLG1DQUNFO0FBQ0UsbUJBQUssRUFBRTtBQUNMQSx5QkFBUyxFQUFFLE1BRE47QUFHTEMscUJBQUssRUFBRSxNQUhGO0FBSUxDLHNCQUFNLEVBQUU7QUFKSCxlQURUO0FBT0UsaUJBQUcsRUFBRUosSUFBSSxDQUFDSyxLQVBaO0FBUUUsaUJBQUcsRUFBQztBQVJOO0FBREYsWUFERixlQWFFO0FBQUssaUJBQUssRUFBRTtBQUFFSiw2QkFBZSxFQUFFLE9BQW5CO0FBQTRCQyx1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TUFBUCxJQUFpQixDQUFqQixHQUFxQmpCLE1BQXJCLEdBQThCQSxNQUFNLENBQUNrQixLQUFQLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQURqQztBQUVMakIsa0JBQU0sRUFBRUEsTUFBTSxDQUFDZ0IsTUFBUCxJQUFpQixDQUFqQixHQUFxQmhCLE1BQXJCLEdBQThCQSxNQUFNLENBQUNpQixLQUFQLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUZqQztBQUdMaEIsZUFBRyxFQUFFQTtBQUhBLFdBUGM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2I4Mjk2NTAzZmIyMjdhY2I5OGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGFjdFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vY29uZmlnL3VybGFwaVwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHByb2R1aywgZ2FsZXJ5LCBqbWIgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD48L0hlYWQ+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8Q2Fyb3VzZWwgYXV0b3BsYXk+XG4gICAgICAgIHtqbWIubWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsIG1heEhlaWdodDogXCI4NXZoXCIgfX0+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjg2dmhcIixcblxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhLmltYWdlfVxuICAgICAgICAgICAgICAgICAgYWx0PVwiRmlyc3Qgc2xpZGVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLCBtYXhIZWlnaHQ6IFwiODV2aFwiIH19PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCI4NnZoXCIsXG5cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgIGFsdD1cIkZpcnN0IHNsaWRlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9DYXJvdXNlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG15LTVcIj5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+T1VSIFBST0RVQ1Q8L2g0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC01XCI+XG4gICAgICAgICAge3Byb2R1ay5tYXAoKHByb2R1aywgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi0zXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1ay5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWsuaW1hZ2VfdGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgICAgIHVub3B0aW1pemVkXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE2cHRcIiB9fSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWsuaW1hZ2VfdGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIGVuZCBwcm9kdWN0ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS01XCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi00XCI+R0FMRVJZPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAge2dhbGVyeS5tYXAoKGdhbGVyeSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNCBjb2wtNlwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e2dhbGVyeS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtnYWxlcnkuaW1hZ2VfdGl0bGV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogZW5kIGdhbGVyeSAqL31cbiAgICAgIDxDb250YWN0IC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBsZXQgcHJvZHVrID0gYXdhaXQgQXhpb3MuZ2V0KGFwaSArIFwicHJvZHVjdFwiKTtcbiAgbGV0IGdhbGVyeSA9IGF3YWl0IEF4aW9zLmdldChhcGkgKyBcImdhbGxlcnlcIik7XG4gIGxldCBqbWIgPSBhd2FpdCBBeGlvcy5nZXQoYXBpICsgXCJpbWFnZS1tYW5hZ2VtZW50L2ltYWdlc1wiKTtcbiAgam1iID0gam1iLmRhdGEuZGF0YTtcbiAgcHJvZHVrID0gcHJvZHVrLmRhdGEuZGF0YTtcbiAgZ2FsZXJ5ID0gZ2FsZXJ5LmRhdGEuZGF0YTtcbiAgcmV0dXJuIHtcbiAgICBwcm9kdWs6IHByb2R1ay5sZW5ndGggPD0gMyA/IHByb2R1ayA6IHByb2R1ay5zbGljZSgwLCAzKSxcbiAgICBnYWxlcnk6IGdhbGVyeS5sZW5ndGggPD0gNCA/IGdhbGVyeSA6IGdhbGVyeS5zbGljZSgwLCA0KSxcbiAgICBqbWI6IGptYixcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9