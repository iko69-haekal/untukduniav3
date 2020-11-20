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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_urlapi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/urlapi */ "./config/urlapi.js");
/* harmony import */ var _components_admin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/admin */ "./components/admin/index.js");






var _s = $RefreshSig$();







var jmbMin = function jmbMin(_ref) {
  _s();

  var image = _ref.image;
  var history = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  function hapus(id) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"]("".concat(_config_urlapi__WEBPACK_IMPORTED_MODULE_6__["api"], "image-management/images/").concat(id), {
      headers: {
        api_token: localStorage.getItem("token")
      }
    }).then(function (res) {
      antd__WEBPACK_IMPORTED_MODULE_4__["message"].success("data berhasil dihapus");
      history.push("/admin/jumbotron");
    })["catch"](function (err) {
      return console.log(err);
    });
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_admin__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
              className: "my-3",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Popconfirm"], {
                title: "yakin ingin menghapus?",
                onConfirm: function onConfirm() {
                  return hapus(data.id);
                },
                okText: "Yes",
                cancelText: "No",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("button", {
                  className: "btn btn-danger mr-2",
                  children: "hapus"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("button", {
                onClick: function onClick(e) {
                  e.preventDefault();
                  history.push("/admin/jumbotron/ubah/" + data.id);
                },
                className: "btn btn-primary",
                children: "ubah"
              })]
            })]
          });
        })
      })
    })
  });
};

_s(jmbMin, "HhEtcB2THlX/YXWQgt8Qz42raAQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

jmbMin.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var image;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_config_urlapi__WEBPACK_IMPORTED_MODULE_6__["api"] + "image-management/images");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vanVtYm90cm9uL2luZGV4LmpzIl0sIm5hbWVzIjpbImptYk1pbiIsImltYWdlIiwiaGlzdG9yeSIsInVzZVJvdXRlciIsImhhcHVzIiwiaWQiLCJBeGlvcyIsImFwaSIsImhlYWRlcnMiLCJhcGlfdG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGhlbiIsInJlcyIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwicHVzaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJkYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJlIiwicHJldmVudERlZmF1bHQiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDNUIsTUFBTUMsT0FBTyxHQUFHQyw2REFBUyxFQUF6Qjs7QUFDQSxXQUFTQyxLQUFULENBQWVDLEVBQWYsRUFBbUI7QUFDakJDLGdEQUFLLFVBQUwsV0FBZ0JDLGtEQUFoQixxQ0FBOENGLEVBQTlDLEdBQW9EO0FBQ2xERyxhQUFPLEVBQUU7QUFDUEMsaUJBQVMsRUFBRUMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCO0FBREo7QUFEeUMsS0FBcEQsRUFLR0MsSUFMSCxDQUtRLFVBQUNDLEdBQUQsRUFBUztBQUNiQyxrREFBTyxDQUFDQyxPQUFSLENBQWdCLHVCQUFoQjtBQUNBYixhQUFPLENBQUNjLElBQVIsQ0FBYSxrQkFBYjtBQUNELEtBUkgsV0FTUyxVQUFDQyxHQUFEO0FBQUEsYUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBVDtBQUFBLEtBVFQ7QUFVRDs7QUFDRCxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLHlEQUFEO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxrQkFDR2hCLEtBQUssQ0FBQ21CLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDbkIsOEJBQ0U7QUFBSyxxQkFBUyxFQUFDLHdCQUFmO0FBQUEsb0NBQ0U7QUFDRSx1QkFBUyxFQUFDLFdBRFo7QUFFRSxtQkFBSyxFQUFFO0FBQUVDLHFCQUFLLEVBQUUsTUFBVDtBQUFpQkMsc0JBQU0sRUFBRTtBQUF6QixlQUZUO0FBR0UsaUJBQUcsRUFBRUYsSUFBSSxDQUFDcEIsS0FIWjtBQUlFLGlCQUFHLEVBQUM7QUFKTixjQURGLGVBT0U7QUFBSyx1QkFBUyxFQUFDLE1BQWY7QUFBQSxzQ0FDRSw4REFBQywrQ0FBRDtBQUNFLHFCQUFLLEVBQUMsd0JBRFI7QUFFRSx5QkFBUyxFQUFFO0FBQUEseUJBQU1HLEtBQUssQ0FBQ2lCLElBQUksQ0FBQ2hCLEVBQU4sQ0FBWDtBQUFBLGlCQUZiO0FBR0Usc0JBQU0sRUFBQyxLQUhUO0FBSUUsMEJBQVUsRUFBQyxJQUpiO0FBQUEsdUNBTUU7QUFBUSwyQkFBUyxFQUFDLHFCQUFsQjtBQUFBO0FBQUE7QUFORixnQkFERixlQVVFO0FBQ0UsdUJBQU8sRUFBRSxpQkFBQ21CLENBQUQsRUFBTztBQUNkQSxtQkFBQyxDQUFDQyxjQUFGO0FBQ0F2Qix5QkFBTyxDQUFDYyxJQUFSLENBQWEsMkJBQTJCSyxJQUFJLENBQUNoQixFQUE3QztBQUNELGlCQUpIO0FBS0UseUJBQVMsRUFBQyxpQkFMWjtBQUFBO0FBQUEsZ0JBVkY7QUFBQSxjQVBGO0FBQUEsWUFERjtBQThCRCxTQS9CQTtBQURIO0FBREY7QUFERixJQURGO0FBd0NELENBdEREOztHQUFNTCxNO1VBQ1lHLHFEOzs7QUFzRGxCSCxNQUFNLENBQUMwQixlQUFQLGlNQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNMcEIsNENBQUssQ0FBQ3FCLEdBQU4sQ0FBVXBCLGtEQUFHLEdBQUcseUJBQWhCLENBREs7O0FBQUE7QUFDbkJOLGVBRG1CO0FBRXZCQSxlQUFLLEdBQUdBLEtBQUssQ0FBQ29CLElBQU4sQ0FBV0EsSUFBbkI7QUFGdUIsMkNBR2hCO0FBQ0xwQixpQkFBSyxFQUFFQTtBQURGLFdBSGdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXpCO0FBT2VELHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2p1bWJvdHJvbi5iMzRkN2U4NGI2YTFkOTE1ZTU2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBtZXNzYWdlLCBQb3Bjb25maXJtIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi8uLi8uLi9jb25maWcvdXJsYXBpXCI7XHJcbmltcG9ydCBBZG1pbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pblwiO1xyXG5cclxuY29uc3Qgam1iTWluID0gKHsgaW1hZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VSb3V0ZXIoKTtcclxuICBmdW5jdGlvbiBoYXB1cyhpZCkge1xyXG4gICAgQXhpb3MuZGVsZXRlKGAke2FwaX1pbWFnZS1tYW5hZ2VtZW50L2ltYWdlcy8ke2lkfWAsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIGFwaV90b2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJkYXRhIGJlcmhhc2lsIGRpaGFwdXNcIik7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKFwiL2FkbWluL2p1bWJvdHJvblwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEFkbWluPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7aW1hZ2UubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNiBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjMwdmhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2RhdGEuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cImdhbWJhciBpb3Qgc21rIHdpcmFidWFuYVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxQb3Bjb25maXJtXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJ5YWtpbiBpbmdpbiBtZW5naGFwdXM/XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm09eygpID0+IGhhcHVzKGRhdGEuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9rVGV4dD1cIlllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dD1cIk5vXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgbXItMlwiPmhhcHVzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoKFwiL2FkbWluL2p1bWJvdHJvbi91YmFoL1wiICsgZGF0YS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgdWJhaFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQWRtaW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5qbWJNaW4uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGxldCBpbWFnZSA9IGF3YWl0IEF4aW9zLmdldChhcGkgKyBcImltYWdlLW1hbmFnZW1lbnQvaW1hZ2VzXCIpO1xyXG4gIGltYWdlID0gaW1hZ2UuZGF0YS5kYXRhO1xyXG4gIHJldHVybiB7XHJcbiAgICBpbWFnZTogaW1hZ2UsXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgam1iTWluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9