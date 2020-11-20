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







var Carousels = function Carousels() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_3__["Carousel"], {
      autoplay: true,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
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
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
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
      })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJDYXJvdXNlbHMiLCJ3aWR0aCIsImhlaWdodCIsIm1heEhlaWdodCIsIkNhcm91c2VsIiwiZ2V0SW5pdGlhbFByb3BzIiwiQXhpb3MiLCJnZXQiLCJhcGkiLCJqbWIiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixzQkFDRTtBQUFBLDJCQUNFLCtEQUFDLDZDQUFEO0FBQVUsY0FBUSxNQUFsQjtBQUFBLDhCQUNFO0FBQUEsK0JBQ0U7QUFDRSxtQkFBUyxFQUFDLGVBRFo7QUFFRSxlQUFLLEVBQUU7QUFBRUMsaUJBQUssRUFBRSxNQUFUO0FBQWlCQyxrQkFBTSxFQUFFLE1BQXpCO0FBQWlDQyxxQkFBUyxFQUFFO0FBQTVDLFdBRlQ7QUFHRSxhQUFHLEVBQUMsMkpBSE47QUFJRSxhQUFHLEVBQUM7QUFKTjtBQURGLFFBREYsZUFTRTtBQUFBLCtCQUNFO0FBQ0UsbUJBQVMsRUFBQyxlQURaO0FBRUUsZUFBSyxFQUFFO0FBQUVGLGlCQUFLLEVBQUUsTUFBVDtBQUFpQkMsa0JBQU0sRUFBRSxNQUF6QjtBQUFpQ0MscUJBQVMsRUFBRTtBQUE1QyxXQUZUO0FBR0UsYUFBRyxFQUFDLDJKQUhOO0FBSUUsYUFBRyxFQUFDO0FBSk47QUFERixRQVRGO0FBQUE7QUFERixJQURGO0FBc0JELENBdkJEOztLQUFNSCxTO0FBd0JOSSw2Q0FBUSxDQUFDQyxlQUFULGlNQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNUQyxLQUFLLENBQUNDLEdBQU4sQ0FBVUMsR0FBRyxHQUFHLHlCQUFoQixDQURTOztBQUFBO0FBQ3JCQyxhQURxQjtBQUd6QkEsYUFBRyxHQUFHQSxHQUFHLENBQUNDLElBQUosQ0FBU0EsSUFBZjtBQUh5QiwyQ0FLbEI7QUFDTEQsZUFBRyxFQUFFQTtBQURBLFdBTGtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQTNCO0FBU2VULHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ5YzIwOWQxOTU5OTE4NzQ1MDczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJhbnRkXCI7XHJcbmNvbnN0IENhcm91c2VscyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENhcm91c2VsIGF1dG9wbGF5PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIG1heEhlaWdodDogXCI4NXZoXCIgfX1cclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDY3NDQwMzgxMzYtNDYyNzM4MzRiM2ZiP2l4bGliPXJiLTEuMi4xJnE9ODAmZm09anBnJmNyb3A9ZW50cm9weSZjcz10aW55c3JnYiZ3PTEwODAmZml0PW1heCZpeGlkPWV5SmhjSEJmYVdRaU9qTTNOamQ5XCJcclxuICAgICAgICAgICAgYWx0PVwiRmlyc3Qgc2xpZGVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBtYXhIZWlnaHQ6IFwiODV2aFwiIH19XHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA2NzQ0MDM4MTM2LTQ2MjczODM0YjNmYj9peGxpYj1yYi0xLjIuMSZxPTgwJmZtPWpwZyZjcm9wPWVudHJvcHkmY3M9dGlueXNyZ2Imdz0xMDgwJmZpdD1tYXgmaXhpZD1leUpoY0hCZmFXUWlPak0zTmpkOVwiXHJcbiAgICAgICAgICAgIGFsdD1cIkZpcnN0IHNsaWRlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5DYXJvdXNlbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgbGV0IGptYiA9IGF3YWl0IEF4aW9zLmdldChhcGkgKyBcImltYWdlLW1hbmFnZW1lbnQvaW1hZ2VzXCIpO1xyXG5cclxuICBqbWIgPSBqbWIuZGF0YS5kYXRhO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgam1iOiBqbWIsXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9