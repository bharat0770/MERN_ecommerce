"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.userNotExist = exports.userExist = exports.userReducer = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    user: null,
    loading: true,
};
exports.userReducer = (0, toolkit_1.createSlice)({
    name: "userReducer",
    initialState: initialState,
    reducers: {
        userExist: function (state, action) {
            state.loading = false;
            state.user = action.payload;
        },
        userNotExist: function (state) {
            state.loading = false;
            state.user = null;
        },
    },
});
exports.default = exports.userReducer;
exports.userExist = (_a = exports.userReducer.actions, _a.userExist), exports.userNotExist = _a.userNotExist;
