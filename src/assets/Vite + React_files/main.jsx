import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b5451ec6"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=b5451ec6"; const StrictMode = __vite__cjsImport1_react["StrictMode"];
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=b5451ec6"; const createRoot = __vite__cjsImport2_reactDom_client["createRoot"];
import "/src/index.css?t=1731269444858";
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=b5451ec6";
import Root from "/src/components/Root.jsx?t=1731269385856";
import Home from "/src/components/Home.jsx";
import Login from "/src/components/Login.jsx?t=1731268367040";
import Register from "/src/components/Register.jsx?t=1731268367040";
import AuthProvider from "/src/provider/AuthProvider.jsx?t=1731268367040";
import Private from "/src/components/routes/Private.jsx?t=1731269317878";
import Order from "/src/components/Order.jsx?t=1731269444858";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: /* @__PURE__ */ jsxDEV(Root, {}, void 0, false, {
        fileName: "C:/Users/User/Projects/React/auth-milonmela/src/main.jsx",
        lineNumber: 17,
        columnNumber: 12
      }, this),
      children: [
        {
          path: "/",
          element: /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
            fileName: "C:/Users/User/Projects/React/auth-milonmela/src/main.jsx",
            lineNumber: 21,
            columnNumber: 14
          }, this)
        },
        {
          path: "/login",
          element: /* @__PURE__ */ jsxDEV(Login, {}, void 0, false, {
            fileName: "C:/Users/User/Projects/React/auth-milonmela/src/main.jsx",
            lineNumber: 25,
            columnNumber: 14
          }, this)
        },
        {
          path: "/register",
          element: /* @__PURE__ */ jsxDEV(Register, {}, void 0, false, {
            fileName: "C:/Users/User/Projects/React/auth-milonmela/src/main.jsx",
            lineNumber: 29,
            columnNumber: 14
          }, this)
        },
        {
          path: "/private",
          element: /* @__PURE__ */ jsxDEV(Private, { children: /* @__PURE__ */ jsxDEV(Order, {}, void 0, false, {
            fileName: "C:/Users/User/Projects/React/auth-milonmela/src/main.jsx",
            lineNumber: 35,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "C:/Users/User/Projects/React/auth-milonmela/src/main.jsx",
            lineNumber: 34,
            columnNumber: 5
          }, this)
        }
      ]
    }
  ]
);
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(StrictMode, { children: /* @__PURE__ */ jsxDEV(AuthProvider, { children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
    fileName: "C:/Users/User/Projects/React/auth-milonmela/src/main.jsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/User/Projects/React/auth-milonmela/src/main.jsx",
    lineNumber: 45,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "C:/Users/User/Projects/React/auth-milonmela/src/main.jsx",
    lineNumber: 44,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZ0JhO0FBaEJiLFNBQVNBLGtCQUFrQjtBQUMzQixTQUFTQyxrQkFBa0I7QUFDM0IsT0FBTztBQUVQLFNBQVNDLHFCQUFxQkMsc0JBQXNCO0FBQ3BELE9BQU9DLFVBQVU7QUFDakIsT0FBT0MsVUFBVTtBQUNqQixPQUFPQyxXQUFXO0FBQ2xCLE9BQU9DLGNBQWM7QUFDckIsT0FBT0Msa0JBQWtCO0FBQ3pCLE9BQU9DLGFBQWE7QUFDcEIsT0FBT0MsV0FBVztBQUVsQixNQUFNQyxTQUFTVDtBQUFBQSxFQUFvQjtBQUFBLElBQ2pDO0FBQUEsTUFDRVUsTUFBTTtBQUFBLE1BQ05DLFNBQVMsdUJBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUs7QUFBQSxNQUNkQyxVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0VGLE1BQU07QUFBQSxVQUNOQyxTQUFTLHVCQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSztBQUFBLFFBQ2hCO0FBQUEsUUFDQTtBQUFBLFVBQ0VELE1BQU07QUFBQSxVQUNOQyxTQUFTLHVCQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBTTtBQUFBLFFBQ2pCO0FBQUEsUUFDQTtBQUFBLFVBQ0VELE1BQU07QUFBQSxVQUNOQyxTQUFTLHVCQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUztBQUFBLFFBQ3BCO0FBQUEsUUFDQTtBQUFBLFVBQ0VELE1BQU07QUFBQSxVQUNOQyxTQUNFLHVCQUFDLFdBQ0MsaUNBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFNLEtBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFQTtBQUFBLFFBRUo7QUFBQSxNQUFDO0FBQUEsSUFFTDtBQUFBLEVBQUM7QUFDRjtBQUVEWixXQUFXYyxTQUFTQyxlQUFlLE1BQU0sQ0FBQyxFQUFFQztBQUFBQSxFQUMxQyx1QkFBQyxjQUNDLGlDQUFDLGdCQUNDLGlDQUFDLGtCQUFlLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBK0IsS0FEakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBLEtBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUlBO0FBQ0YiLCJuYW1lcyI6WyJTdHJpY3RNb2RlIiwiY3JlYXRlUm9vdCIsImNyZWF0ZUJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXJQcm92aWRlciIsIlJvb3QiLCJIb21lIiwiTG9naW4iLCJSZWdpc3RlciIsIkF1dGhQcm92aWRlciIsIlByaXZhdGUiLCJPcmRlciIsInJvdXRlciIsInBhdGgiLCJlbGVtZW50IiwiY2hpbGRyZW4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmljdE1vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuaW1wb3J0IHsgY3JlYXRlQnJvd3NlclJvdXRlciwgUm91dGVyUHJvdmlkZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFJvb3QgZnJvbSBcIi4vY29tcG9uZW50cy9Sb290LmpzeFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vY29tcG9uZW50cy9Ib21lLmpzeFwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuL2NvbXBvbmVudHMvTG9naW4uanN4XCI7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9SZWdpc3Rlci5qc3hcIjtcbmltcG9ydCBBdXRoUHJvdmlkZXIgZnJvbSBcIi4vcHJvdmlkZXIvQXV0aFByb3ZpZGVyLmpzeFwiO1xuaW1wb3J0IFByaXZhdGUgZnJvbSBcIi4vY29tcG9uZW50cy9yb3V0ZXMvUHJpdmF0ZS5qc3hcIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9jb21wb25lbnRzL09yZGVyLmpzeFwiO1xuXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVCcm93c2VyUm91dGVyKFtcbiAge1xuICAgIHBhdGg6IFwiL1wiLFxuICAgIGVsZW1lbnQ6IDxSb290IC8+LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICBlbGVtZW50OiA8SG9tZSAvPixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2xvZ2luXCIsXG4gICAgICAgIGVsZW1lbnQ6IDxMb2dpbiAvPixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL3JlZ2lzdGVyXCIsXG4gICAgICAgIGVsZW1lbnQ6IDxSZWdpc3RlciAvPixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL3ByaXZhdGVcIixcbiAgICAgICAgZWxlbWVudDogKFxuICAgICAgICAgIDxQcml2YXRlPlxuICAgICAgICAgICAgPE9yZGVyIC8+XG4gICAgICAgICAgPC9Qcml2YXRlPlxuICAgICAgICApLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXSk7XG5cbmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKS5yZW5kZXIoXG4gIDxTdHJpY3RNb2RlPlxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9IC8+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gIDwvU3RyaWN0TW9kZT5cbik7XG4iXSwiZmlsZSI6IkM6L1VzZXJzL1VzZXIvUHJvamVjdHMvUmVhY3QvYXV0aC1taWxvbm1lbGEvc3JjL21haW4uanN4In0=