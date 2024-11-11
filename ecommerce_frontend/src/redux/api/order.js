"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeleteOrderMutation = exports.useUpdateOrderMutation = exports.useOrderDetailsQuery = exports.useMyOrderQuery = exports.useAllOrderQuery = exports.useNewOrderMutation = exports.orderApi = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
exports.orderApi = (0, react_1.createApi)({
    reducerPath: "orderApi",
    baseQuery: (0, react_1.fetchBaseQuery)({
        baseUrl: "".concat(import.meta.env.VITE_SERVER, "/api/v1/order/")
    }),
    tagTypes: ["order"],
    endpoints: function (builder) { return ({
        newOrder: builder.mutation({
            query: function (order) { return ({
                url: "new",
                method: "POST",
                body: order,
            }); },
            invalidatesTags: ["order"]
        }),
        updateOrder: builder.mutation({
            // query: ({ userId, orderId }) => ({
            query: function (orderId) { return ({
                url: "/id?id=".concat(orderId),
                method: "PUT",
            }); },
            invalidatesTags: ["order"]
        }),
        deleteOrder: builder.mutation({
            // query: ({ userId, orderId }) => ({
            query: function (orderId) { return ({
                url: "/id?id=".concat(orderId),
                method: "DELETE",
            }); },
            invalidatesTags: ["order"]
        }),
        myOrder: builder.query({
            query: function (id) { return ("my/?id=".concat(id)); }, // here id will be user id
        }),
        allOrder: builder.query({
            query: function (email) { return ("all/?email=".concat(email)); }, // here id wil be admin id
            providesTags: ["order"]
        }),
        orderDetails: builder.query({
            query: function (id) { return ("id/?id=".concat(id)); }, // here id will be oder id 
        }),
    }); }
});
exports.useNewOrderMutation = exports.orderApi.useNewOrderMutation, exports.useAllOrderQuery = exports.orderApi.useAllOrderQuery, exports.useMyOrderQuery = exports.orderApi.useMyOrderQuery, exports.useOrderDetailsQuery = exports.orderApi.useOrderDetailsQuery, exports.useUpdateOrderMutation = exports.orderApi.useUpdateOrderMutation, exports.useDeleteOrderMutation = exports.orderApi.useDeleteOrderMutation;
