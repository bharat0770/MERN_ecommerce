"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var product_1 = require("./api/product");
var user_1 = require("./api/user");
var userReducer_1 = require("./reducer/userReducer");
var cartReducer_1 = require("./reducer/cartReducer");
var order_1 = require("./api/order");
var dashboard_1 = require("./api/dashboard");
exports.store = (0, toolkit_1.configureStore)({
    reducer: (_a = {},
        _a[user_1.userApi.reducerPath] = user_1.userApi.reducer,
        _a[product_1.productApi.reducerPath] = product_1.productApi.reducer,
        _a[order_1.orderApi.reducerPath] = order_1.orderApi.reducer,
        _a[dashboard_1.default.reducerPath] = dashboard_1.default.reducer,
        _a[userReducer_1.default.name] = userReducer_1.default.reducer,
        _a[cartReducer_1.default.name] = cartReducer_1.default.reducer,
        _a),
    // mid() returns  an array of default middlewares and we are  adding userApi's middleware in the  list
    middleware: function (mid) { return mid().concat(user_1.userApi.middleware, product_1.productApi.middleware, order_1.orderApi.middleware, dashboard_1.default.middleware); },
});
