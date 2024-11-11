"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var dashboard_1 = require("../../redux/api/dashboard");
var react_redux_1 = require("react-redux");
var material_1 = require("@mui/material");
var DashChart_1 = require("../charts/DashChart");
var GenderRatioChart_1 = require("../charts/GenderRatioChart");
var TransactionTable_1 = require("../charts/TransactionTable");
var InventoryProgress_1 = require("../charts/InventoryProgress");
var CircularPrgressBar_1 = require("../charts/CircularPrgressBar");
var Dashboard = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var user = (0, react_redux_1.useSelector)(function (state) { return state.userReducer; }).user;
    var _o = (0, dashboard_1.useStatsQuery)(user === null || user === void 0 ? void 0 : user.email), data = _o.data, isLoading = _o.isLoading, error = _o.error;
    if (isLoading)
        return <material_1.Typography variant="h6">Loading...</material_1.Typography>;
    if (error) {
        return <material_1.Typography variant="h6" color="error">Error occurred</material_1.Typography>;
    }
    var statsData = data === null || data === void 0 ? void 0 : data.message;
    console.log(statsData);
    return (<material_1.Grid container spacing={3} sx={{ padding: 3 }}>
            {/* Revenue */}
            <material_1.Grid item xs={12} sm={6} md={3}>
                <material_1.Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                    <material_1.Typography variant="h6" gutterBottom>Revenue</material_1.Typography>
                    <material_1.Typography variant="h4" gutterBottom>₹{((_a = statsData === null || statsData === void 0 ? void 0 : statsData.count) === null || _a === void 0 ? void 0 : _a.revenue) || 0}</material_1.Typography>
                    <material_1.Typography variant="subtitle1" color="textSecondary">{((_b = statsData === null || statsData === void 0 ? void 0 : statsData.changeInPercent) === null || _b === void 0 ? void 0 : _b.revenue) || 0}%</material_1.Typography>
                    <CircularPrgressBar_1.default name="Revenue" value={((_c = statsData === null || statsData === void 0 ? void 0 : statsData.changeInPercent) === null || _c === void 0 ? void 0 : _c.revenue) || 0} fill="#7f7f7f"/>
                </material_1.Paper>
            </material_1.Grid>

            {/* User */}
            <material_1.Grid item xs={12} sm={6} md={3}>
                <material_1.Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                    <material_1.Typography variant="h6" gutterBottom>User</material_1.Typography>
                    <material_1.Typography variant="h4" gutterBottom>{((_d = statsData === null || statsData === void 0 ? void 0 : statsData.count) === null || _d === void 0 ? void 0 : _d.user) || 0}</material_1.Typography>
                    <material_1.Typography variant="subtitle1" color="textSecondary">{((_e = statsData === null || statsData === void 0 ? void 0 : statsData.changeInPercent) === null || _e === void 0 ? void 0 : _e.userPercent) || 0}%</material_1.Typography>
                    <CircularPrgressBar_1.default name="User" value={((_f = statsData === null || statsData === void 0 ? void 0 : statsData.changeInPercent) === null || _f === void 0 ? void 0 : _f.userPercent) || 0} fill="#f0c76e"/>
                </material_1.Paper>
            </material_1.Grid>
            <material_1.Grid item xs={12} sm={6} md={3}>
                <material_1.Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                    <material_1.Typography variant="h6" gutterBottom>Product</material_1.Typography>
                    <material_1.Typography variant="h4" gutterBottom>{(_g = statsData === null || statsData === void 0 ? void 0 : statsData.count) === null || _g === void 0 ? void 0 : _g.product}</material_1.Typography>
                    <material_1.Typography variant="subtitle1" color="textSecondary">{((_h = statsData === null || statsData === void 0 ? void 0 : statsData.changeInPercent) === null || _h === void 0 ? void 0 : _h.productPercent) || 0}%</material_1.Typography>
                    <CircularPrgressBar_1.default name="User" value={(_j = statsData === null || statsData === void 0 ? void 0 : statsData.changeInPercent) === null || _j === void 0 ? void 0 : _j.productPercent} fill="#66c2a5 "/>
                </material_1.Paper>
            </material_1.Grid>

            {/* Order */}
            <material_1.Grid item xs={12} sm={6} md={3}>
                <material_1.Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                    <material_1.Typography variant="h6" gutterBottom>Order</material_1.Typography>
                    <material_1.Typography variant="h4" gutterBottom>{(_k = statsData === null || statsData === void 0 ? void 0 : statsData.count) === null || _k === void 0 ? void 0 : _k.order}</material_1.Typography>
                    <material_1.Typography variant="subtitle1" color="textSecondary">{(_l = statsData === null || statsData === void 0 ? void 0 : statsData.changeInPercent) === null || _l === void 0 ? void 0 : _l.orderPercent}%</material_1.Typography>
                    <CircularPrgressBar_1.default name="Order" value={(_m = statsData === null || statsData === void 0 ? void 0 : statsData.changeInPercent) === null || _m === void 0 ? void 0 : _m.orderPercent} fill="#8c564b "/>
                </material_1.Paper>
            </material_1.Grid>

            {/* Charts */}
            <material_1.Grid item xs={12} md={8}>
                <material_1.Paper elevation={3} sx={{ padding: 2, }}>
                    <DashChart_1.default data={statsData === null || statsData === void 0 ? void 0 : statsData.chart}/>
                </material_1.Paper>
            </material_1.Grid>

            <material_1.Grid item xs={12} md={4}>
                <material_1.Paper elevation={3} sx={{ padding: 2, }}>
                        <InventoryProgress_1.default data={statsData === null || statsData === void 0 ? void 0 : statsData.categoryCount}/>
                </material_1.Paper>
            </material_1.Grid>

            <material_1.Grid item xs={12} md={6}>
                <material_1.Paper elevation={3} sx={{ padding: 2 }}>
                    <GenderRatioChart_1.default data={statsData === null || statsData === void 0 ? void 0 : statsData.userRatio}/>
                </material_1.Paper>
            </material_1.Grid>

            <material_1.Grid item xs={12} md={6}>
                <material_1.Paper elevation={3} sx={{ padding: 2 }}>
                    <material_1.Typography variant="h6" textAlign="center" gutterBottom>Top Transactions</material_1.Typography>
                    <TransactionTable_1.default data={statsData === null || statsData === void 0 ? void 0 : statsData.modifiedTransactions}/>
                </material_1.Paper>
            </material_1.Grid>
        </material_1.Grid>);
};
exports.default = Dashboard;
