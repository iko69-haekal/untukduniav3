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






var Carousel = function Carousel() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("nav", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
        id: "carouselExampleIndicators",
        className: "carousel slide",
        "data-ride": "carousel",
        "data-interval": "2700",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("ol", {
          className: "carousel-indicators",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", {
            "data-target": "#carouselExampleIndicators",
            "data-slide-to": "0",
            className: "active"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", {
            "data-target": "#carouselExampleIndicators",
            "data-slide-to": "1"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", {
            "data-target": "#carouselExampleIndicators",
            "data-slide-to": "2"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
          className: "carousel-inner",
          style: {
            maxHeight: "85vh"
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
            className: "carousel-item active",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
              className: "d-block w-100",
              style: {
                width: "100%",
                height: "100%"
              },
              src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM3Njd9",
              alt: "First slide"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
            className: "carousel-item active",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
              className: "d-block w-100",
              style: {
                width: "100%",
                height: "100%"
              },
              src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM3Njd9",
              alt: "First slide"
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("a", {
          className: "carousel-control-prev",
          href: "#carouselExampleIndicators",
          role: "button",
          "data-slide": "prev",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
            className: "carousel-control-prev-icon",
            "aria-hidden": "true"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
            className: "sr-only",
            children: "Previous"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("a", {
          className: "carousel-control-next",
          href: "#carouselExampleIndicators",
          role: "button",
          "data-slide": "next",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
            className: "carousel-control-next-icon",
            "aria-hidden": "true"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
            className: "sr-only",
            children: "Next"
          })]
        })]
      })
    })
  });
};

_c = Carousel;
Carousel.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
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
/* harmony default export */ __webpack_exports__["default"] = (Carousel);

var _c;

$RefreshReg$(_c, "Carousel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsIm1heEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0SW5pdGlhbFByb3BzIiwiQXhpb3MiLCJnZXQiLCJhcGkiLCJqbWIiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixzQkFDRTtBQUFBLDJCQUNFO0FBQUEsNkJBQ0U7QUFDRSxVQUFFLEVBQUMsMkJBREw7QUFFRSxpQkFBUyxFQUFDLGdCQUZaO0FBR0UscUJBQVUsVUFIWjtBQUlFLHlCQUFjLE1BSmhCO0FBQUEsZ0NBTUU7QUFBSSxtQkFBUyxFQUFDLHFCQUFkO0FBQUEsa0NBQ0U7QUFDRSwyQkFBWSw0QkFEZDtBQUVFLDZCQUFjLEdBRmhCO0FBR0UscUJBQVMsRUFBQztBQUhaLFlBREYsZUFNRTtBQUFJLDJCQUFZLDRCQUFoQjtBQUE2Qyw2QkFBYztBQUEzRCxZQU5GLGVBT0U7QUFBSSwyQkFBWSw0QkFBaEI7QUFBNkMsNkJBQWM7QUFBM0QsWUFQRjtBQUFBLFVBTkYsZUFlRTtBQUFLLG1CQUFTLEVBQUMsZ0JBQWY7QUFBZ0MsZUFBSyxFQUFFO0FBQUVDLHFCQUFTLEVBQUU7QUFBYixXQUF2QztBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxzQkFBZjtBQUFBLG1DQUNFO0FBQ0UsdUJBQVMsRUFBQyxlQURaO0FBRUUsbUJBQUssRUFBRTtBQUFFQyxxQkFBSyxFQUFFLE1BQVQ7QUFBaUJDLHNCQUFNLEVBQUU7QUFBekIsZUFGVDtBQUdFLGlCQUFHLEVBQUMsMkpBSE47QUFJRSxpQkFBRyxFQUFDO0FBSk47QUFERixZQURGLGVBU0U7QUFBSyxxQkFBUyxFQUFDLHNCQUFmO0FBQUEsbUNBQ0U7QUFDRSx1QkFBUyxFQUFDLGVBRFo7QUFFRSxtQkFBSyxFQUFFO0FBQUVELHFCQUFLLEVBQUUsTUFBVDtBQUFpQkMsc0JBQU0sRUFBRTtBQUF6QixlQUZUO0FBR0UsaUJBQUcsRUFBQywySkFITjtBQUlFLGlCQUFHLEVBQUM7QUFKTjtBQURGLFlBVEY7QUFBQSxVQWZGLGVBaUNFO0FBQ0UsbUJBQVMsRUFBQyx1QkFEWjtBQUVFLGNBQUksRUFBQyw0QkFGUDtBQUdFLGNBQUksRUFBQyxRQUhQO0FBSUUsd0JBQVcsTUFKYjtBQUFBLGtDQU1FO0FBQ0UscUJBQVMsRUFBQyw0QkFEWjtBQUVFLDJCQUFZO0FBRmQsWUFORixlQVVFO0FBQU0scUJBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUEsWUFWRjtBQUFBLFVBakNGLGVBNkNFO0FBQ0UsbUJBQVMsRUFBQyx1QkFEWjtBQUVFLGNBQUksRUFBQyw0QkFGUDtBQUdFLGNBQUksRUFBQyxRQUhQO0FBSUUsd0JBQVcsTUFKYjtBQUFBLGtDQU1FO0FBQ0UscUJBQVMsRUFBQyw0QkFEWjtBQUVFLDJCQUFZO0FBRmQsWUFORixlQVVFO0FBQU0scUJBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUEsWUFWRjtBQUFBLFVBN0NGO0FBQUE7QUFERjtBQURGLElBREY7QUFnRUQsQ0FqRUQ7O0tBQU1ILFE7QUFrRU5BLFFBQVEsQ0FBQ0ksZUFBVCxpTUFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDVEMsS0FBSyxDQUFDQyxHQUFOLENBQVVDLEdBQUcsR0FBRyx5QkFBaEIsQ0FEUzs7QUFBQTtBQUNyQkMsYUFEcUI7QUFHekJBLGFBQUcsR0FBR0EsR0FBRyxDQUFDQyxJQUFKLENBQVNBLElBQWY7QUFIeUIsMkNBS2xCO0FBQ0xELGVBQUcsRUFBRUE7QUFEQSxXQUxrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUEzQjtBQVNlUix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MzUwNzUwM2I5NzM4YjJjNzJmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ2Fyb3VzZWwgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxuYXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgaWQ9XCJjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcm91c2VsIHNsaWRlXCJcclxuICAgICAgICAgIGRhdGEtcmlkZT1cImNhcm91c2VsXCJcclxuICAgICAgICAgIGRhdGEtaW50ZXJ2YWw9XCIyNzAwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCJcclxuICAgICAgICAgICAgICBkYXRhLXNsaWRlLXRvPVwiMFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPlxyXG4gICAgICAgICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT5cclxuICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWlubmVyXCIgc3R5bGU9e3sgbWF4SGVpZ2h0OiBcIjg1dmhcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwNjc0NDAzODEzNi00NjI3MzgzNGIzZmI/aXhsaWI9cmItMS4yLjEmcT04MCZmbT1qcGcmY3JvcD1lbnRyb3B5JmNzPXRpbnlzcmdiJnc9MTA4MCZmaXQ9bWF4Jml4aWQ9ZXlKaGNIQmZhV1FpT2pNM05qZDlcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiRmlyc3Qgc2xpZGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW0gYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA2NzQ0MDM4MTM2LTQ2MjczODM0YjNmYj9peGxpYj1yYi0xLjIuMSZxPTgwJmZtPWpwZyZjcm9wPWVudHJvcHkmY3M9dGlueXNyZ2Imdz0xMDgwJmZpdD1tYXgmaXhpZD1leUpoY0hCZmFXUWlPak0zTmpkOVwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJGaXJzdCBzbGlkZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiXHJcbiAgICAgICAgICAgIGhyZWY9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiXHJcbiAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBkYXRhLXNsaWRlPVwicHJldlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIlxyXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiXHJcbiAgICAgICAgICAgIGhyZWY9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiXHJcbiAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBkYXRhLXNsaWRlPVwibmV4dFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIlxyXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbkNhcm91c2VsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBsZXQgam1iID0gYXdhaXQgQXhpb3MuZ2V0KGFwaSArIFwiaW1hZ2UtbWFuYWdlbWVudC9pbWFnZXNcIik7XHJcblxyXG4gIGptYiA9IGptYi5kYXRhLmRhdGE7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBqbWI6IGptYixcclxuICB9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==