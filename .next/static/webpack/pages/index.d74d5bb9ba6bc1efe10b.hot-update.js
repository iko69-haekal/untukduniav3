webpackHotUpdate_N_E("pages/index",{

/***/ "./components/carousel/index.js":
/*!**************************************!*\
  !*** ./components/carousel/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");






var Carousels = function Carousels(_ref) {
  var jmb = _ref.jmb;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Carousel"], {
      autoplay: true,
      children: jmb.map(function (data) {
        /*#__PURE__*/
        Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
            className: "d-block w-100",
            style: {
              width: "100%",
              height: "100%",
              maxHeight: "85vh"
            },
            src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM3Njd9",
            alt: "First slide"
          })
        });
      })
    })
  });
};

_c = Carousels;
antd__WEBPACK_IMPORTED_MODULE_3__["Carousel"].getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var jmb;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Axios.get(api + "image-management/images");

        case 2:
          jmb = _context.sent;
          jmb = jmb.data.data;
          return _context.abrupt("return", {
            jmb: jmb
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Carousels);

var _c;

$RefreshReg$(_c, "Carousels");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJDYXJvdXNlbHMiLCJqbWIiLCJtYXAiLCJkYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJDYXJvdXNlbCIsImdldEluaXRpYWxQcm9wcyIsIkF4aW9zIiwiZ2V0IiwiYXBpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFhO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVO0FBQzdCLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsNkNBQUQ7QUFBVSxjQUFRLE1BQWxCO0FBQUEsZ0JBQ0dBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLFVBQUNDLElBQUQsRUFBVTtBQUNqQjtBQUFBO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFDLGVBRFo7QUFFRSxpQkFBSyxFQUFFO0FBQUVDLG1CQUFLLEVBQUUsTUFBVDtBQUFpQkMsb0JBQU0sRUFBRSxNQUF6QjtBQUFpQ0MsdUJBQVMsRUFBRTtBQUE1QyxhQUZUO0FBR0UsZUFBRyxFQUFDLDJKQUhOO0FBSUUsZUFBRyxFQUFDO0FBSk47QUFERjtBQVFELE9BVEE7QUFESDtBQURGLElBREY7QUFnQkQsQ0FqQkQ7O0tBQU1OLFM7QUFrQk5PLDZDQUFRLENBQUNDLGVBQVQsaU1BQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1RDLEtBQUssQ0FBQ0MsR0FBTixDQUFVQyxHQUFHLEdBQUcseUJBQWhCLENBRFM7O0FBQUE7QUFDckJWLGFBRHFCO0FBR3pCQSxhQUFHLEdBQUdBLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQSxJQUFmO0FBSHlCLDJDQUtsQjtBQUNMRixlQUFHLEVBQUVBO0FBREEsV0FMa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBM0I7QUFTZUQsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDc0ZDViYjliYTZiYzFlZmUxMGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcImFudGRcIjtcclxuY29uc3QgQ2Fyb3VzZWxzID0gKHsgam1iIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENhcm91c2VsIGF1dG9wbGF5PlxyXG4gICAgICAgIHtqbWIubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBtYXhIZWlnaHQ6IFwiODV2aFwiIH19XHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDY3NDQwMzgxMzYtNDYyNzM4MzRiM2ZiP2l4bGliPXJiLTEuMi4xJnE9ODAmZm09anBnJmNyb3A9ZW50cm9weSZjcz10aW55c3JnYiZ3PTEwODAmZml0PW1heCZpeGlkPWV5SmhjSEJmYVdRaU9qTTNOamQ5XCJcclxuICAgICAgICAgICAgICBhbHQ9XCJGaXJzdCBzbGlkZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5DYXJvdXNlbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IGptYiA9IGF3YWl0IEF4aW9zLmdldChhcGkgKyBcImltYWdlLW1hbmFnZW1lbnQvaW1hZ2VzXCIpO1xyXG5cclxuICBqbWIgPSBqbWIuZGF0YS5kYXRhO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgam1iOiBqbWIsXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9