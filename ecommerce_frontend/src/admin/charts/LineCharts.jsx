"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var react_1 = require("react");
var recharts_1 = require("recharts");
var dashboard_1 = require("../../redux/api/dashboard");
var features_1 = require("../../utils/features");
var LineCharts = function () {
    var _a = (0, dashboard_1.useLineChartQuery)("bharatsuthar9324@gmail.com"), data = _a.data, isLoading = _a.isLoading;
    if (isLoading)
        return <div>Loading...</div>;
    console.log(data);
    var _b = data.message, getDiscount = _b.getDiscount, getOrders = _b.getOrders, getProducts = _b.getProducts, getRevenue = _b.getRevenue, getUsers = _b.getUsers;
    var last12months = (0, features_1.getMonths)().last12months;
    var getDiscountData = getDiscount.map(function (e, idx) { return ({
        value: e, month: last12months[idx]
    }); });
    console.log(getDiscountData);
    var getOrdersData = getOrders.map(function (e, idx) { return ({
        value: e, month: last12months[idx]
    }); });
    var getProductsData = getProducts.map(function (e, idx) { return ({
        value: e, month: last12months[idx]
    }); });
    var getRevenueData = getRevenue.map(function (e, idx) { return ({
        value: e, month: last12months[idx]
    }); });
    var getUsersData = getUsers.map(function (e, idx) { return ({
        value: e, month: last12months[idx]
    }); });
    return (<>
      <material_1.Grid item style={{ margin: "20px" }}>
        <h2>DiscountData</h2>
        <material_1.Paper>
          <recharts_1.ResponsiveContainer width={"100%"} height={300}>
            <recharts_1.LineChart data={getDiscountData}>
              <recharts_1.CartesianGrid strokeDasharray="3 3"/>
              <recharts_1.XAxis dataKey={"month"}/>
              <recharts_1.YAxis />
              <recharts_1.Tooltip />
              <recharts_1.Legend />
              <recharts_1.Line dataKey={"value"} type={"monotone"} stroke="#ff7f0e " name="Discount"/>
            </recharts_1.LineChart>
          </recharts_1.ResponsiveContainer>
        </material_1.Paper>
      </material_1.Grid>

      <material_1.Grid item style={{ margin: "20px" }}>
        <h2>OrdersData</h2>
        <material_1.Paper>
          <recharts_1.ResponsiveContainer width={"100%"} height={300}>
            <recharts_1.LineChart data={getOrdersData}>
              <recharts_1.CartesianGrid strokeDasharray="3 3"/>
              <recharts_1.XAxis dataKey={"month"}/>
              <recharts_1.YAxis />
              <recharts_1.Tooltip />
              <recharts_1.Legend />
              <recharts_1.Line dataKey={"value"} type={"monotone"} stroke="#8c564b " name="Orders"/>

            </recharts_1.LineChart>
          </recharts_1.ResponsiveContainer>
        </material_1.Paper>
      </material_1.Grid>
      <material_1.Grid item style={{ margin: "20px" }}>
        <h2>getProductsData</h2>
        <material_1.Paper>
          <recharts_1.ResponsiveContainer width={"100%"} height={300}>
            <recharts_1.LineChart data={getProductsData}>
              <recharts_1.CartesianGrid strokeDasharray="3 3"/>
              <recharts_1.XAxis dataKey={"month"}/>
              <recharts_1.YAxis />
              <recharts_1.Tooltip />
              <recharts_1.Legend />
              <recharts_1.Line dataKey={"value"} type={"monotone"} stroke="#66c2a5 " name="Products"/>
            </recharts_1.LineChart>
          </recharts_1.ResponsiveContainer>
        </material_1.Paper>
      </material_1.Grid>
      <material_1.Grid item style={{ margin: "20px" }}>
        <h2>getRevenueData</h2>
        <material_1.Paper>
          <recharts_1.ResponsiveContainer width={"100%"} height={300}>
            <recharts_1.LineChart data={getRevenueData}>
              <recharts_1.CartesianGrid strokeDasharray="3 3"/>
              <recharts_1.XAxis dataKey={"month"}/>
              <recharts_1.YAxis />
              <recharts_1.Tooltip />
              <recharts_1.Legend />
              <recharts_1.Line dataKey={"value"} type={"monotone"} stroke="#a9a9a9" name="Revenue"/>
            </recharts_1.LineChart>
          </recharts_1.ResponsiveContainer>
        </material_1.Paper>
      </material_1.Grid>
      <material_1.Grid item style={{ margin: "20px" }}>
        <h2>getUsersData</h2>
        <material_1.Paper>
          <recharts_1.ResponsiveContainer width={"100%"} height={300}>
            <recharts_1.LineChart data={getUsersData}>
              <recharts_1.CartesianGrid strokeDasharray="3 3"/>
              <recharts_1.XAxis dataKey={"month"}/>
              <recharts_1.YAxis />
              <recharts_1.Tooltip />
              <recharts_1.Legend />
              <recharts_1.Line dataKey={"value"} type={"monotone"} stroke="#ff69b4 " name="Users"/>
            </recharts_1.LineChart>
          </recharts_1.ResponsiveContainer>
        </material_1.Paper>
      </material_1.Grid>



    </>);
};
exports.default = LineCharts;
