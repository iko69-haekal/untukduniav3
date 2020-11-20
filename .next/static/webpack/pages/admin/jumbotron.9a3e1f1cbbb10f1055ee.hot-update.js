webpackHotUpdate_N_E("pages/admin/jumbotron",{

/***/ "./pages/admin/jumbotron/index.js":
/*!****************************************!*\
  !*** ./pages/admin/jumbotron/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_urlapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/urlapi */ "./config/urlapi.js");
/* harmony import */ var _components_admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/admin */ "./components/admin/index.js");






var _s = $RefreshSig$();






var jmbMin = function jmbMin(_ref) {
  _s();

  var image = _ref.image;
  var history = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  function hapus(id) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"]("".concat(_config_urlapi__WEBPACK_IMPORTED_MODULE_5__["api"], "gallery/").concat(id), {
      headers: {
        api_token: localStorage.getItem("token")
      }
    }).then(function (res) {
      message.success("data berhasil dihapus");
      history.push("/admin/galery");
    })["catch"](function (err) {
      return console.log(err);
    });
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_admin__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
        className: "row",
        children: image.map(function (data) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
            className: "col-lg-4 col-md-6 mt-4",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
              className: "img-fluid",
              style: {
                width: "100%",
                height: "30vh"
              },
              src: data.image,
              alt: "gambar iot smk wirabuana"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
              className: "my-3",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("button", {
                onClick: function onClick(e) {
                  e.preventDefault();
                  history.push("/admin/jumbotron/ubah/" + data.id);
                },
                className: "btn btn-primary",
                children: "ubah"
              })
            })]
          });
        })
      })
    })
  });
};

_s(jmbMin, "HhEtcB2THlX/YXWQgt8Qz42raAQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

jmbMin.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var image;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_config_urlapi__WEBPACK_IMPORTED_MODULE_5__["api"] + "image-management/images");

        case 2:
          image = _context.sent;
          image = image.data.data;
          return _context.abrupt("return", {
            image: image
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (jmbMin);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vanVtYm90cm9uL2luZGV4LmpzIl0sIm5hbWVzIjpbImptYk1pbiIsImltYWdlIiwiaGlzdG9yeSIsInVzZVJvdXRlciIsImhhcHVzIiwiaWQiLCJBeGlvcyIsImFwaSIsImhlYWRlcnMiLCJhcGlfdG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGhlbiIsInJlcyIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwicHVzaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJkYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJlIiwicHJldmVudERlZmF1bHQiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDNUIsTUFBTUMsT0FBTyxHQUFHQyw2REFBUyxFQUF6Qjs7QUFDQSxXQUFTQyxLQUFULENBQWVDLEVBQWYsRUFBbUI7QUFDakJDLGdEQUFLLFVBQUwsV0FBZ0JDLGtEQUFoQixxQkFBOEJGLEVBQTlCLEdBQW9DO0FBQ2xDRyxhQUFPLEVBQUU7QUFDUEMsaUJBQVMsRUFBRUMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCO0FBREo7QUFEeUIsS0FBcEMsRUFLR0MsSUFMSCxDQUtRLFVBQUNDLEdBQUQsRUFBUztBQUNiQyxhQUFPLENBQUNDLE9BQVIsQ0FBZ0IsdUJBQWhCO0FBQ0FiLGFBQU8sQ0FBQ2MsSUFBUixDQUFhLGVBQWI7QUFDRCxLQVJILFdBU1MsVUFBQ0MsR0FBRDtBQUFBLGFBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQVQ7QUFBQSxLQVRUO0FBVUQ7O0FBQ0Qsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyx5REFBRDtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBQ0doQixLQUFLLENBQUNtQixHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ25CLDhCQUNFO0FBQUsscUJBQVMsRUFBQyx3QkFBZjtBQUFBLG9DQUNFO0FBQ0UsdUJBQVMsRUFBQyxXQURaO0FBRUUsbUJBQUssRUFBRTtBQUFFQyxxQkFBSyxFQUFFLE1BQVQ7QUFBaUJDLHNCQUFNLEVBQUU7QUFBekIsZUFGVDtBQUdFLGlCQUFHLEVBQUVGLElBQUksQ0FBQ3BCLEtBSFo7QUFJRSxpQkFBRyxFQUFDO0FBSk4sY0FERixlQU9FO0FBQUssdUJBQVMsRUFBQyxNQUFmO0FBQUEscUNBQ0U7QUFDRSx1QkFBTyxFQUFFLGlCQUFDdUIsQ0FBRCxFQUFPO0FBQ2RBLG1CQUFDLENBQUNDLGNBQUY7QUFDQXZCLHlCQUFPLENBQUNjLElBQVIsQ0FBYSwyQkFBMkJLLElBQUksQ0FBQ2hCLEVBQTdDO0FBQ0QsaUJBSkg7QUFLRSx5QkFBUyxFQUFDLGlCQUxaO0FBQUE7QUFBQTtBQURGLGNBUEY7QUFBQSxZQURGO0FBcUJELFNBdEJBO0FBREg7QUFERjtBQURGLElBREY7QUErQkQsQ0E3Q0Q7O0dBQU1MLE07VUFDWUcscUQ7OztBQTZDbEJILE1BQU0sQ0FBQzBCLGVBQVAsaU1BQXlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ0xwQiw0Q0FBSyxDQUFDcUIsR0FBTixDQUFVcEIsa0RBQUcsR0FBRyx5QkFBaEIsQ0FESzs7QUFBQTtBQUNuQk4sZUFEbUI7QUFFdkJBLGVBQUssR0FBR0EsS0FBSyxDQUFDb0IsSUFBTixDQUFXQSxJQUFuQjtBQUZ1QiwyQ0FHaEI7QUFDTHBCLGlCQUFLLEVBQUVBO0FBREYsV0FIZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBekI7QUFPZUQscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vanVtYm90cm9uLjlhM2UxZjFjYmJiMTBmMTA1NWVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy91cmxhcGlcIjtcclxuaW1wb3J0IEFkbWluIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2FkbWluXCI7XHJcblxyXG5jb25zdCBqbWJNaW4gPSAoeyBpbWFnZSB9KSA9PiB7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZVJvdXRlcigpO1xyXG4gIGZ1bmN0aW9uIGhhcHVzKGlkKSB7XHJcbiAgICBBeGlvcy5kZWxldGUoYCR7YXBpfWdhbGxlcnkvJHtpZH1gLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBhcGlfdG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIiksXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiZGF0YSBiZXJoYXNpbCBkaWhhcHVzXCIpO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaChcIi9hZG1pbi9nYWxlcnlcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxBZG1pbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAge2ltYWdlLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTYgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIzMHZoXCIgfX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJnYW1iYXIgaW90IHNtayB3aXJhYnVhbmFcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnkucHVzaChcIi9hZG1pbi9qdW1ib3Ryb24vdWJhaC9cIiArIGRhdGEuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHViYWhcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0FkbWluPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuam1iTWluLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBsZXQgaW1hZ2UgPSBhd2FpdCBBeGlvcy5nZXQoYXBpICsgXCJpbWFnZS1tYW5hZ2VtZW50L2ltYWdlc1wiKTtcclxuICBpbWFnZSA9IGltYWdlLmRhdGEuZGF0YTtcclxuICByZXR1cm4ge1xyXG4gICAgaW1hZ2U6IGltYWdlLFxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGptYk1pbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==