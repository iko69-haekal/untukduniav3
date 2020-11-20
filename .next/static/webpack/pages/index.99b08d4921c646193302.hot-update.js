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
            style: {},
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
              style: {
                maxHeight: "86vh",
                width: "100%",
                height: "100%"
              },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb2R1ayIsImdhbGVyeSIsImptYiIsIm1hcCIsImRhdGEiLCJtYXhIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImltYWdlIiwiaSIsImltYWdlX3RpdGxlIiwiZm9udFNpemUiLCJnZXRJbml0aWFsUHJvcHMiLCJBeGlvcyIsImdldCIsImFwaSIsImxlbmd0aCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLElBQVQsT0FBdUM7QUFBQSxNQUF2QkMsTUFBdUIsUUFBdkJBLE1BQXVCO0FBQUEsTUFBZkMsTUFBZSxRQUFmQSxNQUFlO0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPO0FBQ3BELHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsZ0RBQUQsS0FERixlQUVFLDhEQUFDLDBEQUFELEtBRkYsZUFHRSw4REFBQyw2Q0FBRDtBQUFVLGNBQVEsTUFBbEI7QUFBQSxnQkFDR0EsR0FBRyxDQUFDQyxHQUFKLENBQVEsVUFBQ0MsSUFBRCxFQUFVO0FBQ2pCLDRCQUNFO0FBQUEsaUNBQ0U7QUFBSyxpQkFBSyxFQUFFLEVBQVo7QUFBQSxtQ0FDRSw4REFBQyxpREFBRDtBQUNFLG1CQUFLLEVBQUU7QUFDTEMseUJBQVMsRUFBRSxNQUROO0FBRUxDLHFCQUFLLEVBQUUsTUFGRjtBQUdMQyxzQkFBTSxFQUFFO0FBSEgsZUFEVDtBQU1FLGlCQUFHLEVBQUVILElBQUksQ0FBQ0ksS0FOWjtBQU9FLGlCQUFHLEVBQUM7QUFQTjtBQURGO0FBREYsVUFERjtBQWVELE9BaEJBO0FBREgsTUFIRixlQXNCRTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyxhQUFkO0FBQUE7QUFBQSxRQURGLGVBRUU7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bmRleC45OWIwOGQ0OTIxYzY0NjE5MzMwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250YWN0XCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlclwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi9jb25maWcvdXJsYXBpXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcHJvZHVrLCBnYWxlcnksIGptYiB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPjwvSGVhZD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxDYXJvdXNlbCBhdXRvcGxheT5cbiAgICAgICAge2ptYi5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e319PlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjg2dmhcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgIGFsdD1cIkZpcnN0IHNsaWRlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9DYXJvdXNlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG15LTVcIj5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+T1VSIFBST0RVQ1Q8L2g0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC01XCI+XG4gICAgICAgICAge3Byb2R1ay5tYXAoKHByb2R1aywgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi0zXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1ay5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWsuaW1hZ2VfdGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgICAgIHVub3B0aW1pemVkXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRTaXplOiBcIjE2cHRcIiB9fSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWsuaW1hZ2VfdGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIGVuZCBwcm9kdWN0ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS01XCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi00XCI+R0FMRVJZPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAge2dhbGVyeS5tYXAoKGdhbGVyeSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNCBjb2wtNlwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e2dhbGVyeS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtnYWxlcnkuaW1hZ2VfdGl0bGV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogZW5kIGdhbGVyeSAqL31cbiAgICAgIDxDb250YWN0IC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBsZXQgcHJvZHVrID0gYXdhaXQgQXhpb3MuZ2V0KGFwaSArIFwicHJvZHVjdFwiKTtcbiAgbGV0IGdhbGVyeSA9IGF3YWl0IEF4aW9zLmdldChhcGkgKyBcImdhbGxlcnlcIik7XG4gIGxldCBqbWIgPSBhd2FpdCBBeGlvcy5nZXQoYXBpICsgXCJpbWFnZS1tYW5hZ2VtZW50L2ltYWdlc1wiKTtcbiAgam1iID0gam1iLmRhdGEuZGF0YTtcbiAgcHJvZHVrID0gcHJvZHVrLmRhdGEuZGF0YTtcbiAgZ2FsZXJ5ID0gZ2FsZXJ5LmRhdGEuZGF0YTtcbiAgcmV0dXJuIHtcbiAgICBwcm9kdWs6IHByb2R1ay5sZW5ndGggPD0gMyA/IHByb2R1ayA6IHByb2R1ay5zbGljZSgwLCAzKSxcbiAgICBnYWxlcnk6IGdhbGVyeS5sZW5ndGggPD0gNCA/IGdhbGVyeSA6IGdhbGVyeS5zbGljZSgwLCA0KSxcbiAgICBqbWI6IGptYixcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9