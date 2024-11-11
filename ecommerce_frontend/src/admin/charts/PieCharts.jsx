"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var dashboard_1 = require("../../redux/api/dashboard");
var recharts_1 = require("recharts");
var material_1 = require("@mui/material");
var PieCharts = function () {
    var _a = (0, dashboard_1.usePieChartQuery)("bharatsuthar9324@gmail.com"), data = _a.data, isLoading = _a.isLoading, isError = _a.isError;
    if (isLoading)
        return <div>Loading...</div>;
    if (isError)
        return <div>Error loading data...</div>;
    var _b = data.message, adminCustomerRatio = _b.adminCustomerRatio, usersAgeGroup = _b.usersAgeGroup, revenueDistribution = _b.revenueDistribution, stockAvailablity = _b.stockAvailablity, productCategories = _b.productCategories, orderFullfillment = _b.orderFullfillment;
    var COLORS = [
        '#4E79A7',
        '#F28E2B',
        '#E15759',
        '#76B7B2',
        '#59A14F',
        '#EDC949',
        '#AF7AA1',
        '#FF9DA7',
        '#9C755F',
        '#BAB0AC'
    ];
    var renderPieChart = function (title, pieData) {
        return (<>
                <material_1.Grid item>
                    <material_1.Paper style={{ padding: '16px', marginBottom: '24px' }}>
                        <h3 style={{ textAlign: 'center', marginBottom: '16px' }}>{title}</h3>
                        <recharts_1.ResponsiveContainer width="100%" height={300}>
                            <recharts_1.PieChart>
                                <recharts_1.Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} innerRadius={40}>
                                    {pieData.map(function (entry, index) { return (<recharts_1.Cell key={"cell-".concat(index)} fill={COLORS[index % COLORS.length]}/>); })}
                                </recharts_1.Pie>
                                <recharts_1.Tooltip />
                                <recharts_1.Legend />
                            </recharts_1.PieChart>
                        </recharts_1.ResponsiveContainer>
                    </material_1.Paper>
                </material_1.Grid>
            </>);
    };
    var charts = [];
    var _loop_1 = function (key) {
        var value = data.message[key];
        if (Array.isArray(value)) {
            charts.push(renderPieChart(key, value));
        }
        else if (typeof value === "object") {
            var pieData = Object.keys(value).map(function (i) { return ({ name: i, value: value[i] }); });
            charts.push(renderPieChart(key, pieData));
        }
    };
    for (var key in data.message) {
        _loop_1(key);
    }
    ;
    return <div>{charts}</div>;
};
exports.default = PieCharts;
