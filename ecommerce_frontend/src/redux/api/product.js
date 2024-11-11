"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAllProductQuery = exports.useProductDetailsQuery = exports.useDeleteProductMutation = exports.useUpdateProudctMutation = exports.useNewProductsMutation = exports.useSeachProductQuery = exports.useCategoriesQuery = exports.useLatestProductQuery = exports.productApi = void 0;
// import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
var react_1 = require("@reduxjs/toolkit/query/react");
exports.productApi = (0, react_1.createApi)({
    reducerPath: "productApi",
    baseQuery: (0, react_1.fetchBaseQuery)({
        baseUrl: "".concat(import.meta.env.VITE_SERVER, "/api/v1/product/"),
    }),
    tagTypes: ["product"],
    endpoints: function (builder) { return ({
        latestProduct: builder.query({ query: function () { return "latest"; }, providesTags: ["product"] }),
        allProduct: builder.query({ query: function (email) { return "admin-products?email=".concat(email); } }),
        // NOTE : requires admin routes 
        categories: builder.query({ query: function () { return "categories"; }, providesTags: ["product"] }),
        seachProduct: builder.query({
            query: function (_a) {
                var search = _a.search, sort = _a.sort, category = _a.category, price = _a.price, page = _a.page;
                var base = "search/?name=".concat(search, "&page=").concat(page);
                if (sort)
                    base += "&sort=".concat(sort);
                if (price)
                    base += "&price=".concat(price);
                if (category)
                    base += "&category=".concat(category);
                return base;
            },
            providesTags: ["product"]
        }),
        newProducts: builder.mutation({
            query: function (_a) {
                var email = _a.email, formdata = _a.formdata;
                return ({
                    url: "new/?email=".concat(email),
                    method: 'POST',
                    body: formdata,
                });
            },
            invalidatesTags: ["product"],
        }),
        productDetails: builder.query({
            query: function (id) { return "id?id=".concat(id); },
            // query : (id) => `${id}`, 
            providesTags: ["product"],
        }),
        updateProudct: builder.mutation({
            query: function (_a) {
                var id = _a.id, email = _a.email, formdata = _a.formdata;
                return ({
                    url: "/id?id=".concat(id, "&email=").concat(email),
                    method: "PUT",
                    body: formdata,
                });
            }, invalidatesTags: ["product"]
        }),
        deleteProduct: builder.mutation({
            query: function (_a) {
                var email = _a.email, id = _a.id;
                return ({
                    url: "id/?email=".concat(email, "&id=").concat(id),
                    method: "DELETE",
                });
            }, invalidatesTags: ["product"]
        })
    }); }
});
exports.useLatestProductQuery = exports.productApi.useLatestProductQuery, exports.useCategoriesQuery = exports.productApi.useCategoriesQuery, exports.useSeachProductQuery = exports.productApi.useSeachProductQuery, exports.useNewProductsMutation = exports.productApi.useNewProductsMutation, exports.useUpdateProudctMutation = exports.productApi.useUpdateProudctMutation, exports.useDeleteProductMutation = exports.productApi.useDeleteProductMutation, exports.useProductDetailsQuery = exports.productApi.useProductDetailsQuery, exports.useAllProductQuery = exports.productApi.useAllProductQuery;
