(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"4IlW":function(e,a,s){"use strict";var t={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var a=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||a>=t.F1&&a<=t.F12)return!1;switch(a){case t.ALT:case t.CAPS_LOCK:case t.CONTEXT_MENU:case t.CTRL:case t.DOWN:case t.END:case t.ESC:case t.HOME:case t.INSERT:case t.LEFT:case t.MAC_FF_META:case t.META:case t.NUMLOCK:case t.NUM_CENTER:case t.PAGE_DOWN:case t.PAGE_UP:case t.PAUSE:case t.PRINT_SCREEN:case t.RIGHT:case t.SHIFT:case t.UP:case t.WIN_KEY:case t.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=t.ZERO&&e<=t.NINE)return!0;if(e>=t.NUM_ZERO&&e<=t.NUM_MULTIPLY)return!0;if(e>=t.A&&e<=t.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case t.SPACE:case t.QUESTION_MARK:case t.NUM_PLUS:case t.NUM_MINUS:case t.NUM_PERIOD:case t.NUM_DIVISION:case t.SEMICOLON:case t.DASH:case t.EQUALS:case t.COMMA:case t.PERIOD:case t.SLASH:case t.APOSTROPHE:case t.SINGLE_QUOTE:case t.OPEN_SQUARE_BRACKET:case t.BACKSLASH:case t.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};a.a=t},M4zP:function(e,a,s){"use strict";var t=s("nKUr"),c=s("8Kt/"),n=s.n(c),l=s("YFqc"),i=s.n(l),r=s("nOHt"),o=s("q1tI");a.a=function(e){var a=Object(r.useRouter)(),s=Object(o.useState)(""),c=s[0],l=s[1];Object(o.useEffect)((function(){localStorage.getItem("token")||localStorage.getItem("email")||(localStorage.clear(),a.replace("/login")),l(localStorage.getItem("name"))}),[]);return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)(n.a,{children:[Object(t.jsx)("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.13.0/css/all.css"}),Object(t.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/startbootstrap-sb-admin-2@4.1.3/css/sb-admin-2.css"}),Object(t.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/startbootstrap-sb-admin-2@4.1.3/vendor/jquery/jquery.js"}),Object(t.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/startbootstrap-sb-admin-2@4.1.3/vendor/jquery-easing/jquery.easing.js"}),Object(t.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/startbootstrap-sb-admin-2@4.1.3/js/sb-admin-2.js"})]}),Object(t.jsxs)("div",{id:"wrapper",children:[Object(t.jsxs)("ul",{className:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",id:"accordionSidebar",children:[Object(t.jsxs)("span",{className:"sidebar-brand d-flex align-items-center justify-content-center",children:[Object(t.jsx)("div",{className:"sidebar-brand-icon rotate-n-15",children:Object(t.jsx)("i",{className:"fas fa-globe-asia"})}),Object(t.jsx)("div",{className:"sidebar-brand-text mx-3",children:"untukdunia"})]}),Object(t.jsx)("hr",{className:"sidebar-divider my-0"}),Object(t.jsx)("li",{className:"nav-item",children:Object(t.jsx)(i.a,{href:"/admin",children:Object(t.jsxs)("a",{className:"nav-link",children:[Object(t.jsx)("i",{className:"fas fa-fw fa-tachometer-alt"}),Object(t.jsx)("span",{children:"Dashboard"})]})})}),Object(t.jsx)("hr",{className:"sideb ar-divider"}),Object(t.jsx)("div",{className:"sidebar-heading",children:"Interface"}),Object(t.jsxs)("li",{className:"nav-item",children:[Object(t.jsxs)("span",{className:"nav-link collapsed","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"true","aria-controls":"collapseTwo",children:[Object(t.jsx)("i",{className:"fas fa-fw fa-cog"}),Object(t.jsx)("span",{children:"content"})]}),Object(t.jsx)("div",{id:"collapseTwo",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordionSidebar",children:Object(t.jsxs)("div",{className:"bg-white py-2 collapse-inner rounded",children:[Object(t.jsx)("h6",{className:"collapse-header",children:"Custom Content:"}),Object(t.jsx)(i.a,{href:"/admin/artikel",children:Object(t.jsx)("a",{className:"collapse-item",children:"Artikel"})}),Object(t.jsx)(i.a,{href:"/admin/galery",children:Object(t.jsx)("a",{className:"collapse-item",children:"Galery"})}),Object(t.jsx)(i.a,{href:"/admin/produk",children:Object(t.jsx)("a",{className:"collapse-item",children:"Produk"})})]})})]}),Object(t.jsxs)("li",{className:"nav-item",children:[Object(t.jsxs)("span",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseUtilities","aria-expanded":"true","aria-controls":"collapseUtilities",children:[Object(t.jsx)("i",{className:"fas fa-fw fa-wrench"}),Object(t.jsx)("span",{children:"Template"})]}),Object(t.jsx)("div",{id:"collapseUtilities",className:"collapse","aria-labelledby":"headingUtilities","data-parent":"#accordionSidebar",children:Object(t.jsxs)("div",{className:"bg-white py-2 collapse-inner rounded",children:[Object(t.jsx)("h6",{className:"collapse-header",children:"Custom Template"}),Object(t.jsx)(i.a,{href:"/admin/jumbotron",children:Object(t.jsx)("a",{className:"collapse-item",children:"Jumbotron"})})]})})]}),Object(t.jsx)("hr",{className:"sidebar-divider"}),Object(t.jsx)("div",{className:"text-center d-none d-md-inline",children:Object(t.jsx)("button",{className:"rounded-circle border-0",id:"sidebarToggle"})})]}),Object(t.jsxs)("div",{id:"content-wrapper",className:"d-flex flex-column",children:[Object(t.jsxs)("div",{id:"content",children:[Object(t.jsxs)("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow",children:[Object(t.jsx)("button",{id:"sidebarToggleTop",className:"btn btn-link d-md-none rounded-circle mr-3",children:Object(t.jsx)("i",{className:"fa fa-bars"})}),Object(t.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(t.jsx)("div",{className:"topbar-divider d-none d-sm-block"}),Object(t.jsxs)("li",{className:"nav-item dropdown no-arrow",children:[Object(t.jsx)("span",{className:"nav-link dropdown-toggle",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(t.jsx)("span",{className:"mr-2 d-none d-lg-inline text-gray-600 small",children:c})}),Object(t.jsx)("div",{className:"dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"userDropdown",children:Object(t.jsxs)("button",{className:"dropdown-item","data-toggle":"modal","data-target":"#logoutModal",children:[Object(t.jsx)("i",{className:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"}),"Logout"]})})]})]})]}),Object(t.jsx)("div",{className:"container-fluid",children:e.children})]}),Object(t.jsx)("footer",{className:"sticky-footer bg-white",children:Object(t.jsx)("div",{className:"container my-auto",children:Object(t.jsx)("div",{className:"copyright text-center my-auto",children:Object(t.jsx)("span",{children:"Copyright \xa9 untukdunia 2020"})})})})]})]}),Object(t.jsx)("a",{className:"scroll-to-top rounded",href:"#page-top",children:Object(t.jsx)("i",{className:"fas fa-angle-up"})}),Object(t.jsx)("div",{className:"modal fade",id:"logoutModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true","data-backdrop":"false",children:Object(t.jsx)("div",{className:"modal-dialog",role:"document",children:Object(t.jsxs)("div",{className:"modal-content",children:[Object(t.jsxs)("div",{className:"modal-header",children:[Object(t.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Ready to Leave?"}),Object(t.jsx)("button",{className:"close",type:"button","data-dismiss":"modal","aria-label":"Close",children:Object(t.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(t.jsx)("div",{className:"modal-body",children:'Select "Logout" below if you are ready to end your current session.'}),Object(t.jsxs)("div",{className:"modal-footer",children:[Object(t.jsx)("button",{className:"btn btn-secondary",type:"button","data-dismiss":"modal",children:"Cancel"}),Object(t.jsx)("button",{onClick:function(){localStorage.clear(),a.replace("/login")},className:"btn btn-primary",children:"Logout"})]})]})})})]})}},NJEC:function(e,a,s){"use strict";var t=s("pVnL"),c=s.n(t),n=s("J4zp"),l=s.n(n),i=s("q1tI"),r=s("TSYQ"),o=s.n(r),d=s("sKbD"),b=s.n(d),j=s("4IlW"),m=s("3S7+"),N=s("2/Rp"),O=s("zvFY"),p=s("YMnH"),u=s("ZvpZ"),h=s("H84U"),E=s("0n0R"),f=function(e,a){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(s[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(t=Object.getOwnPropertySymbols(e);c<t.length;c++)a.indexOf(t[c])<0&&Object.prototype.propertyIsEnumerable.call(e,t[c])&&(s[t[c]]=e[t[c]])}return s},x=i.forwardRef((function(e,a){var s=i.useState(e.visible),t=l()(s,2),n=t[0],r=t[1];i.useEffect((function(){"visible"in e&&r(e.visible)}),[e.visible]),i.useEffect((function(){"defaultVisible"in e&&r(e.defaultVisible)}),[e.defaultVisible]);var d=function(a,s){"visible"in e||r(a),e.onVisibleChange&&e.onVisibleChange(a,s)},b=function(a){d(!1,a),e.onConfirm&&e.onConfirm.call(undefined,a)},x=function(a){d(!1,a),e.onCancel&&e.onCancel.call(undefined,a)},v=i.useContext(h.b).getPrefixCls,g=e.prefixCls,S=e.placement,T=e.children,C=e.overlayClassName,_=f(e,["prefixCls","placement","children","overlayClassName"]),y=v("popover",g),U=v("popconfirm",g),M=o()(U,C),I=i.createElement(p.a,{componentName:"Popconfirm",defaultLocale:u.a.Popconfirm},(function(a){return function(a,s){var t,n=e.okButtonProps,l=e.cancelButtonProps,r=e.title,o=e.cancelText,d=e.okText,j=e.okType,m=e.icon;return i.createElement("div",{className:"".concat(a,"-inner-content")},i.createElement("div",{className:"".concat(a,"-message")},m,i.createElement("div",{className:"".concat(a,"-message-title")},(t=r)?"function"===typeof t?t():t:null)),i.createElement("div",{className:"".concat(a,"-buttons")},i.createElement(N.a,c()({onClick:x,size:"small"},l),o||s.cancelText),i.createElement(N.a,c()({onClick:b},Object(O.a)(j),{size:"small"},n),d||s.okText)))}(y,a)}));return i.createElement(m.a,c()({},_,{prefixCls:y,placement:S,onVisibleChange:function(a){e.disabled||d(a)},visible:n,overlay:I,overlayClassName:M,ref:a}),Object(E.a)(T,{onKeyDown:function(e){var a,s;i.isValidElement(T)&&(null===(s=null===T||void 0===T?void 0:(a=T.props).onKeyDown)||void 0===s||s.call(a,e)),function(e){e.keyCode===j.a.ESC&&n&&d(!1,e)}(e)}}))}));x.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:i.createElement(b.a,null),disabled:!1};a.a=x},hmj4:function(e,a,s){"use strict";s.d(a,"a",(function(){return t}));var t="https://api.untukdunia.com/"}}]);