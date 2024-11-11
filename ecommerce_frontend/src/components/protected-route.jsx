"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var protectedRoute = function (_a) {
    var isAuthenticated = _a.isAuthenticated, children = _a.children, isAdmin = _a.isAdmin, adminRoute = _a.adminRoute, _b = _a.redirect, redirect = _b === void 0 ? "/" : _b;
    if (!isAuthenticated)
        return <react_router_dom_1.Navigate to={redirect}/>;
    return children ? children : <react_router_dom_1.Outlet />;
};
exports.default = protectedRoute;
