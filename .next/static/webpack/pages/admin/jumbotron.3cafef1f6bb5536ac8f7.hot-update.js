webpackHotUpdate_N_E("pages/admin/jumbotron",{

/***/ "./components/admin/index.js":
/*!***********************************!*\
  !*** ./components/admin/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);




var _s = $RefreshSig$();






var Admin = function Admin(props) {
  _s();

  var history = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      name = _useState[0],
      Setname = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (!localStorage.getItem("token") && !localStorage.getItem("email")) {
      localStorage.clear();
      history.replace("/login");
    }

    Setname(localStorage.getItem("name"));
  }, []);

  var logout = function logout() {
    localStorage.clear();
    history.replace("/login");
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.13.0/css/all.css"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/startbootstrap-sb-admin-2@4.1.3/css/sb-admin-2.css"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
        src: "https://cdn.jsdelivr.net/npm/startbootstrap-sb-admin-2@4.1.3/vendor/jquery/jquery.js"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
        src: "https://cdn.jsdelivr.net/npm/startbootstrap-sb-admin-2@4.1.3/vendor/jquery-easing/jquery.easing.js"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("script", {
        src: "https://cdn.jsdelivr.net/npm/startbootstrap-sb-admin-2@4.1.3/js/sb-admin-2.js"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      id: "wrapper",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
        className: "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",
        id: "accordionSidebar",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
          className: "sidebar-brand d-flex align-items-center justify-content-center",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "sidebar-brand-icon rotate-n-15",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
              className: "fas fa-globe-asia"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "sidebar-brand-text mx-3",
            children: "untukdunia"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("hr", {
          className: "sidebar-divider my-0"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          className: "nav-item",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/admin",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
              className: "nav-link",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                className: "fas fa-fw fa-tachometer-alt"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                children: "Dashboard"
              })]
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("hr", {
          className: "sideb ar-divider"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "sidebar-heading",
          children: "Interface"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
          className: "nav-item",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
            className: "nav-link collapsed",
            "data-toggle": "collapse",
            "data-target": "#collapseTwo",
            "aria-expanded": "true",
            "aria-controls": "collapseTwo",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
              className: "fas fa-fw fa-cog"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              children: "content"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            id: "collapseTwo",
            className: "collapse",
            "aria-labelledby": "headingTwo",
            "data-parent": "#accordionSidebar",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "bg-white py-2 collapse-inner rounded",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h6", {
                className: "collapse-header",
                children: "Custom Content:"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/admin/artikel",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "collapse-item",
                  children: "Artikel"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/admin/galery",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "collapse-item",
                  children: "Galery"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/admin/produk",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "collapse-item",
                  children: "Produk"
                })
              })]
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
          className: "nav-item",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
            className: "nav-link collapsed",
            href: "#",
            "data-toggle": "collapse",
            "data-target": "#collapseUtilities",
            "aria-expanded": "true",
            "aria-controls": "collapseUtilities",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
              className: "fas fa-fw fa-wrench"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              children: "Template"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            id: "collapseUtilities",
            className: "collapse",
            "aria-labelledby": "headingUtilities",
            "data-parent": "#accordionSidebar",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "bg-white py-2 collapse-inner rounded",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h6", {
                className: "collapse-header",
                children: "Custom Template"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/admin/jumbotron",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  className: "collapse-item",
                  children: "Jumbotron"
                })
              })]
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("hr", {
          className: "sidebar-divider"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "text-center d-none d-md-inline",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
            className: "rounded-circle border-0",
            id: "sidebarToggle"
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        id: "content-wrapper",
        className: "d-flex flex-column",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          id: "content",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("nav", {
            className: "navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
              id: "sidebarToggleTop",
              className: "btn btn-link d-md-none rounded-circle mr-3",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                className: "fa fa-bars"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
              className: "navbar-nav ml-auto",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "topbar-divider d-none d-sm-block"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
                className: "nav-item dropdown no-arrow",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                  className: "nav-link dropdown-toggle",
                  id: "userDropdown",
                  role: "button",
                  "data-toggle": "dropdown",
                  "aria-haspopup": "true",
                  "aria-expanded": "false",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                    className: "mr-2 d-none d-lg-inline text-gray-600 small",
                    children: name
                  })
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                  className: "dropdown-menu dropdown-menu-right shadow animated--grow-in",
                  "aria-labelledby": "userDropdown",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("button", {
                    className: "dropdown-item",
                    "data-toggle": "modal",
                    "data-target": "#logoutModal",
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                      className: "fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                    }), "Logout"]
                  })
                })]
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "container-fluid",
            children: props.children
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("footer", {
          className: "sticky-footer bg-white",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "container my-auto",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "copyright text-center my-auto",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                children: "Copyright \xA9 untukdunia 2020"
              })
            })
          })
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
      className: "scroll-to-top rounded",
      href: "#page-top",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
        className: "fas fa-angle-up"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "modal fade",
      id: "logoutModal",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true",
      "data-backdrop": "false",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "modal-dialog",
        role: "document",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "modal-content",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "modal-header",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
              className: "modal-title",
              id: "exampleModalLabel",
              children: "Ready to Leave?"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
              className: "close",
              type: "button",
              "data-dismiss": "modal",
              "aria-label": "Close",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                "aria-hidden": "true",
                children: "\xD7"
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "modal-body",
            children: "Select \"Logout\" below if you are ready to end your current session."
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "modal-footer",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
              className: "btn btn-secondary",
              type: "button",
              "data-dismiss": "modal",
              children: "Cancel"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
              onClick: logout,
              className: "btn btn-primary",
              children: "Logout"
            })]
          })]
        })
      })
    })]
  });
};

_s(Admin, "+IBUeCfoTN0NrwGKvonwQG1/r84=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Admin;
/* harmony default export */ __webpack_exports__["default"] = (Admin);

var _c;

$RefreshReg$(_c, "Admin");

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

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
false,

/***/ "./node_modules/react/jsx-dev-runtime.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJBZG1pbiIsInByb3BzIiwiaGlzdG9yeSIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwibmFtZSIsIlNldG5hbWUiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2xlYXIiLCJyZXBsYWNlIiwibG9nb3V0IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN2QixNQUFNQyxPQUFPLEdBQUdDLDZEQUFTLEVBQXpCOztBQUR1QixrQkFFQ0Msc0RBQVEsQ0FBQyxFQUFELENBRlQ7QUFBQSxNQUVoQkMsSUFGZ0I7QUFBQSxNQUVWQyxPQUZVOztBQUd2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBRCxJQUFrQyxDQUFDRCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBdkMsRUFBc0U7QUFDcEVELGtCQUFZLENBQUNFLEtBQWI7QUFDQVIsYUFBTyxDQUFDUyxPQUFSLENBQWdCLFFBQWhCO0FBQ0Q7O0FBQ0RMLFdBQU8sQ0FBQ0UsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQUQsQ0FBUDtBQUNELEdBTlEsRUFNTixFQU5NLENBQVQ7O0FBT0EsTUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQkosZ0JBQVksQ0FBQ0UsS0FBYjtBQUNBUixXQUFPLENBQUNTLE9BQVIsQ0FBZ0IsUUFBaEI7QUFDRCxHQUhEOztBQUlBLHNCQUNFO0FBQUEsNEJBQ0UsK0RBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUNFLFdBQUcsRUFBQyxZQUROO0FBRUUsWUFBSSxFQUFDO0FBRlAs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ZUFRRTtBQUFRLHFCQUFPLEVBQUVELE1BQWpCO0FBQXlCLHVCQUFTLEVBQUMsaUJBQW5DO0FBQUE7QUFBQSxjQVJGO0FBQUEsWUFsQkY7QUFBQTtBQURGO0FBVEYsTUF4S0Y7QUFBQSxJQURGO0FBc05ELENBcE9EOztHQUFNWixLO1VBQ1lHLHFEOzs7S0FEWkgsSztBQXNPU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vanVtYm90cm9uLjNjYWZlZjFmNmJiNTUzNmFjOGY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFkbWluID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtuYW1lLCBTZXRuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikgJiYgIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIikpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgIGhpc3RvcnkucmVwbGFjZShcIi9sb2dpblwiKTtcclxuICAgIH1cclxuICAgIFNldG5hbWUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuYW1lXCIpKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICBoaXN0b3J5LnJlcGxhY2UoXCIvbG9naW5cIik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4xMy4wL2Nzcy9hbGwuY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3N0YXJ0Ym9vdHN0cmFwLXNiLWFkbWluLTJANC4xLjMvY3NzL3NiLWFkbWluLTIuY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9zdGFydGJvb3RzdHJhcC1zYi1hZG1pbi0yQDQuMS4zL3ZlbmRvci9qcXVlcnkvanF1ZXJ5LmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3N0YXJ0Ym9vdHN0cmFwLXNiLWFkbWluLTJANC4xLjMvdmVuZG9yL2pxdWVyeS1lYXNpbmcvanF1ZXJ5LmVhc2luZy5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9zdGFydGJvb3RzdHJhcC1zYi1hZG1pbi0yQDQuMS4zL2pzL3NiLWFkbWluLTIuanNcIj48L3NjcmlwdD5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGlkPVwid3JhcHBlclwiPlxyXG4gICAgICAgIDx1bFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBiZy1ncmFkaWVudC1wcmltYXJ5IHNpZGViYXIgc2lkZWJhci1kYXJrIGFjY29yZGlvblwiXHJcbiAgICAgICAgICBpZD1cImFjY29yZGlvblNpZGViYXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpZGViYXItYnJhbmQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1icmFuZC1pY29uIHJvdGF0ZS1uLTE1XCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWdsb2JlLWFzaWFcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItYnJhbmQtdGV4dCBteC0zXCI+dW50dWtkdW5pYTwvZGl2PlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInNpZGViYXItZGl2aWRlciBteS0wXCIgLz5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1mdyBmYS10YWNob21ldGVyLWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkRhc2hib2FyZDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInNpZGViIGFyLWRpdmlkZXJcIiAvPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1oZWFkaW5nXCI+SW50ZXJmYWNlPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgY29sbGFwc2VkXCJcclxuICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNjb2xsYXBzZVR3b1wiXHJcbiAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cInRydWVcIlxyXG4gICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJjb2xsYXBzZVR3b1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZncgZmEtY29nXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDxzcGFuPmNvbnRlbnQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGlkPVwiY29sbGFwc2VUd29cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJoZWFkaW5nVHdvXCJcclxuICAgICAgICAgICAgICBkYXRhLXBhcmVudD1cIiNhY2NvcmRpb25TaWRlYmFyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHktMiBjb2xsYXBzZS1pbm5lciByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY29sbGFwc2UtaGVhZGVyXCI+Q3VzdG9tIENvbnRlbnQ6PC9oNj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vYXJ0aWtlbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjb2xsYXBzZS1pdGVtXCI+QXJ0aWtlbDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4vZ2FsZXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNvbGxhcHNlLWl0ZW1cIj5HYWxlcnk8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluL3Byb2R1a1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjb2xsYXBzZS1pdGVtXCI+UHJvZHVrPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgY29sbGFwc2VkXCJcclxuICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjY29sbGFwc2VVdGlsaXRpZXNcIlxyXG4gICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiY29sbGFwc2VVdGlsaXRpZXNcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWZ3IGZhLXdyZW5jaFwiPjwvaT5cclxuICAgICAgICAgICAgICA8c3Bhbj5UZW1wbGF0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgaWQ9XCJjb2xsYXBzZVV0aWxpdGllc1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImhlYWRpbmdVdGlsaXRpZXNcIlxyXG4gICAgICAgICAgICAgIGRhdGEtcGFyZW50PVwiI2FjY29yZGlvblNpZGViYXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS0yIGNvbGxhcHNlLWlubmVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjb2xsYXBzZS1oZWFkZXJcIj5DdXN0b20gVGVtcGxhdGU8L2g2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi9qdW1ib3Ryb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY29sbGFwc2UtaXRlbVwiPkp1bWJvdHJvbjwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJzaWRlYmFyLWRpdmlkZXJcIiAvPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZC1ub25lIGQtbWQtaW5saW5lXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZSBib3JkZXItMFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJzaWRlYmFyVG9nZ2xlXCJcclxuICAgICAgICAgICAgPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnQtd3JhcHBlclwiIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZCBuYXZiYXItbGlnaHQgYmctd2hpdGUgdG9wYmFyIG1iLTQgc3RhdGljLXRvcCBzaGFkb3dcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBpZD1cInNpZGViYXJUb2dnbGVUb3BcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIGQtbWQtbm9uZSByb3VuZGVkLWNpcmNsZSBtci0zXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGJhci1kaXZpZGVyIGQtbm9uZSBkLXNtLWJsb2NrXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGRyb3Bkb3duIG5vLWFycm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJEcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0yIGQtbm9uZSBkLWxnLWlubGluZSB0ZXh0LWdyYXktNjAwIHNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodCBzaGFkb3cgYW5pbWF0ZWQtLWdyb3ctaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInVzZXJEcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbG9nb3V0TW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaWduLW91dC1hbHQgZmEtc20gZmEtZncgbXItMiB0ZXh0LWdyYXktNDAwXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJzdGlja3ktZm9vdGVyIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG15LWF1dG9cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodCB0ZXh0LWNlbnRlciBteS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Db3B5cmlnaHQgJmNvcHk7IHVudHVrZHVuaWEgMjAyMDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJzY3JvbGwtdG8tdG9wIHJvdW5kZWRcIiBocmVmPVwiI3BhZ2UtdG9wXCI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLXVwXCI+PC9pPlxyXG4gICAgICA8L2E+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9XCJsb2dvdXRNb2RhbFwiXHJcbiAgICAgICAgdGFiSW5kZXg9XCItMVwiXHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIlxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgZGF0YS1iYWNrZHJvcD1cImZhbHNlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICBSZWFkeSB0byBMZWF2ZT9cclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Dlzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgIFNlbGVjdCBcIkxvZ291dFwiIGJlbG93IGlmIHlvdSBhcmUgcmVhZHkgdG8gZW5kIHlvdXIgY3VycmVudFxyXG4gICAgICAgICAgICAgIHNlc3Npb24uXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0fSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZG1pbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==