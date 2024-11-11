"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonths = void 0;
var moment_1 = require("moment");
var getMonths = function () {
    var currentDate = (0, moment_1.default)();
    currentDate.date(1);
    var last6months = [];
    var last12months = [];
    for (var i = 0; i < 6; i++) {
        var monthDate = currentDate.clone().subtract(i, "months");
        var monthName = monthDate.format("MMMM");
        last6months.unshift(monthName);
    }
    for (var i = 0; i < 12; i++) {
        var monthDate = currentDate.clone().subtract(i, "months");
        var monthName = monthDate.format("MMMM");
        last12months.unshift(monthName);
    }
    return {
        last6months: last6months,
        last12months: last12months
    };
};
exports.getMonths = getMonths;
