"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var auth_1 = require("firebase/auth");
var fc_1 = require("react-icons/fc");
var firebase_1 = require("../firebase");
var react_hot_toast_1 = require("react-hot-toast");
var user_1 = require("../redux/api/user");
var Login = function () {
    var _a = (0, react_1.useState)(""), gender = _a[0], setGender = _a[1];
    var _b = (0, react_1.useState)(""), birthDate = _b[0], setBirthDate = _b[1];
    var login = (0, user_1.useLoginMutation)()[0];
    var loginHandler = function () { return __awaiter(void 0, void 0, void 0, function () {
        var provider, user, userData, res, err, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    provider = new auth_1.GoogleAuthProvider();
                    return [4 /*yield*/, (0, auth_1.signInWithPopup)(firebase_1.auth, provider)];
                case 1:
                    user = (_a.sent()).user;
                    userData = {
                        name: user.displayName || "Unknown",
                        email: user.email || "No email",
                        photo: user.photoURL || "No photo",
                        role: "user",
                        gender: gender || "unspecified", // You can set this appropriately
                        dob: birthDate, // Set a default or appropriate value
                        _id: user.uid,
                    };
                    return [4 /*yield*/, login(userData)];
                case 2:
                    res = _a.sent();
                    if ('data' in res) {
                        react_hot_toast_1.default.success(res.data ? res.data.message : "Login successful, but no message received");
                    }
                    else {
                        err = res.error;
                        console.error(err);
                        // Uncomment and adjust the following line if you need to access a specific error message
                        // const message = (err.data as MessageResponse).message;
                        // toast.error(message);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    react_hot_toast_1.default.error("Sign in failed");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (<div className="login">

            <div className="userLogin">
                <h1>Login</h1>
                <div className="userForm">
                    <p>Gender</p>
                    <select name="gender" value={gender} onChange={function (e) { return setGender(e.target.value); }}>
                        <option value="">select</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                    <p>Date Of Birth</p>
                    <input type="date" value={birthDate} onChange={function (e) { return setBirthDate(e.target.value); }}/>
                </div>

                <div>
                    <p>already signed in?</p>
                    <button onClick={loginHandler}>
                        <fc_1.FcGoogle className='gicon'/> <span> sign in with Google </span>
                    </button>
                </div>
            </div>
        </div>);
};
exports.default = Login;
