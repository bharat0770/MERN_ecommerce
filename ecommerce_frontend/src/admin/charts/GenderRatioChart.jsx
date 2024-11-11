"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var recharts_1 = require("recharts");
var GenderRatioChart = function (_a) {
    var data = _a.data;
    var pieData = [
        { name: "male", value: data.male, },
        { name: "female", value: data.female, }
    ];
    var COLORS = ['#377eb8', '#e377c2'];
    console.log(pieData);
    return (<>
            <recharts_1.ResponsiveContainer width="100%" height={300}>
            <recharts_1.PieChart>
            <recharts_1.Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
            {pieData.map(function (entry, index) { return (<recharts_1.Cell key={"cell-".concat(index)} fill={COLORS[index % COLORS.length]}/>); })} 
            </recharts_1.Pie>
            <recharts_1.Tooltip />
            <recharts_1.Legend />
            </recharts_1.PieChart>
            </recharts_1.ResponsiveContainer>
        </>);
};
exports.default = GenderRatioChart;
