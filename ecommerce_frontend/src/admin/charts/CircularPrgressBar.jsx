"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var recharts_1 = require("recharts");
var CircularPrgressBar = function (_a) {
    var name = _a.name, value = _a.value, fill = _a.fill;
    if (value > 1000) {
        value = 999;
    }
    var formattedData = [
        {
            name: name,
            value: value,
            fill: fill,
        }
    ];
    return (<>
            <recharts_1.ResponsiveContainer width="100%" height={100}>
                <recharts_1.RadialBarChart cx="50%" cy="50%" innerRadius="80%" outerRadius="100%" data={formattedData} startAngle={90} endAngle={450}>
                    <recharts_1.RadialBar dataKey="value"/>
                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="24px">
                        {value}%
                    </text>
                </recharts_1.RadialBarChart>
            </recharts_1.ResponsiveContainer>
        </>);
};
exports.default = CircularPrgressBar;
