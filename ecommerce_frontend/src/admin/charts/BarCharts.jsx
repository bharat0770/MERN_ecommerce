"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var features_1 = require("../../utils/features");
var dashboard_1 = require("../../redux/api/dashboard");
var material_1 = require("@mui/material");
var recharts_1 = require("recharts");
var BarCharts = function () {
    var _a = (0, features_1.getMonths)(), last12months = _a.last12months, last6months = _a.last6months;
    var _b = (0, dashboard_1.useBarChartQuery)("bharatsuthar9324@gmail.com"), data = _b.data, isLoading = _b.isLoading, isError = _b.isError;
    if (isLoading)
        return <div>Loading...</div>;
    var _c = data.message, getOrders = _c.getOrders, getProducts = _c.getProducts, getUsers = _c.getUsers;
    console.log(getOrders);
    var getOrdersData = getOrders.map(function (e, idx) { return ({
        month: last12months[idx],
        orders: e,
    }); });
    var getProductsData = getProducts.map(function (e, idx) { return ({
        month: last6months[idx],
        products: e,
    }); });
    var getUsersData = getUsers.map(function (e, idx) { return ({
        month: last6months[idx],
        users: e,
    }); });
    var combinedData = getUsers.map(function (e, idx) { return ({
        month: last6months[idx],
        users: e,
        products: getProducts[idx],
    }); });
    console.log(combinedData);
    return (<>
        <material_1.Grid item style={{ margin: "20px" }}>
                <material_1.Paper>
                    <recharts_1.ResponsiveContainer width="100%" height={300}>
                        <recharts_1.BarChart data={combinedData}>
                            <recharts_1.CartesianGrid strokeDasharray="3 3"/>
                            <recharts_1.XAxis dataKey="month"/>
                            <recharts_1.YAxis />
                            <recharts_1.Tooltip />
                            <recharts_1.Legend />
                            <recharts_1.Bar dataKey="products" fill="#a9a9a9"/>
                            <recharts_1.Bar dataKey="users" fill="#17becf  "/>
                        </recharts_1.BarChart>
                    </recharts_1.ResponsiveContainer>
                </material_1.Paper>
            </material_1.Grid>
            <material_1.Grid item style={{ margin: "20px" }}>
                <material_1.Paper>
                    <recharts_1.ResponsiveContainer width="100%" height={300}>
                        <recharts_1.BarChart data={getOrdersData}>
                            <recharts_1.CartesianGrid strokeDasharray="3 3"/>
                            <recharts_1.XAxis dataKey="month"/>
                            <recharts_1.YAxis />
                            <recharts_1.Tooltip />
                            <recharts_1.Legend />
                            <recharts_1.Bar dataKey="orders" fill="#ff69b4 "/>
                        </recharts_1.BarChart>
                    </recharts_1.ResponsiveContainer>
                </material_1.Paper>
            </material_1.Grid>
        </>);
};
exports.default = BarCharts;
