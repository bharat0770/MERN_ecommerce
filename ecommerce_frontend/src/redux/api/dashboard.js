"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLineChartQuery = exports.usePieChartQuery = exports.useBarChartQuery = exports.useStatsQuery = void 0;
var react_1 = require("@reduxjs/toolkit/query/react");
var dashboardApi = (0, react_1.createApi)({
    reducerPath: "dashboardApi",
    baseQuery: (0, react_1.fetchBaseQuery)({
        baseUrl: "".concat(import.meta.env.VITE_SERVER, "/api/v1/dashboard/"),
    }),
    endpoints: function (builder) { return ({
        stats: builder.query({
            query: function (email) { return "stats?email=".concat(email); },
            keepUnusedDataFor: 0
        }),
        barChart: builder.query({
            query: function (email) { return "bar?email=".concat(email); },
            keepUnusedDataFor: 0
        }),
        pieChart: builder.query({
            query: function (email) { return "pie?email=".concat(email); },
            keepUnusedDataFor: 0
        }),
        lineChart: builder.query({
            query: function (email) { return "line?email=".concat(email); },
            keepUnusedDataFor: 0
        }),
    }); }
});
exports.default = dashboardApi;
exports.useStatsQuery = dashboardApi.useStatsQuery, exports.useBarChartQuery = dashboardApi.useBarChartQuery, exports.usePieChartQuery = dashboardApi.usePieChartQuery, exports.useLineChartQuery = dashboardApi.useLineChartQuery;
