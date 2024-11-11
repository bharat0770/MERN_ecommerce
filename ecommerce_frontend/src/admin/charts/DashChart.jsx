"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var recharts_1 = require("recharts");
var features_1 = require("../../utils/features");
var DashChart = function (_a) {
    var data = _a.data;
    var last6months = (0, features_1.getMonths)().last6months;
    var formattedData = data.sixMonthOrderCount.map(function (count, index) { return ({
        month: last6months[index],
        count: count,
    }); });
    return (<>  
        <recharts_1.ResponsiveContainer width="100%" height={300}>
            <recharts_1.BarChart data={formattedData}>
            <recharts_1.CartesianGrid strokeDasharray="3 3"/>
                <recharts_1.XAxis dataKey="month"/>
                <recharts_1.YAxis />
                <recharts_1.Tooltip /> 
                <recharts_1.Legend />
                <recharts_1.Bar dataKey="count" fill='#7570b3'/>
            </recharts_1.BarChart>
        </recharts_1.ResponsiveContainer>
    </>);
};
exports.default = DashChart;
