
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
var axios_1 = require("axios");
var auth_1 = require("firebase/auth");
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var Header_1 = require("./components/Header");
var loader_1 = require("./components/loader");
var protected_route_1 = require("./components/protected-route");
var firebase_1 = require("./firebase");
var CheckOut_1 = require("./pages/CheckOut");
var Orders_1 = require("./pages/Orders");
var user_1 = require("./redux/api/user");
var cartReducer_1 = require("./redux/reducer/cartReducer");
var userReducer_1 = require("./redux/reducer/userReducer");
// admin routes
var CreateProduct = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require("./admin/management/createProduct"); }); });
var UpdateProduct = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require("./admin/management/updateProduct"); }); });
var Transactions = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require("./admin/management/transactions"); }); });
var TransactionManagement = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require("./admin/management/transactionManagement"); }); });
var CustomerManagement = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require("./admin/management/customers"); }); });
var Dashboard = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require("./admin/management/dashboard"); }); });
var AllProduct = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require("./admin/management/allProducts"); }); });
var BarCharts = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require("./admin/charts/BarCharts"); }); });
var LineCharts = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require("./admin/charts/LineCharts"); }); });
var PieCharts = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require("./admin/charts/PieCharts"); }); });
// user routes
var Home = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require("./pages/Home"); }); });
var Cart = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require("./pages/Cart"); }); });
var Shipping = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require("./pages/Shipping"); }); });
var Login = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require("./pages/Login"); }); });
var Search = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return require("./pages/Search"); }); });
// import { setCart } from "./redux/reducer/cartReducer";
var getCart = function (userId) { return __awaiter(void 0, void 0, void 0, function () {
    var res, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1.default.get("".concat(import.meta.env.VITE_SERVER, "/api/v1/cart/getCart?userId=").concat(userId))];
            case 1:
                res = _a.sent();
                return [2 /*return*/, res];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
function App() {
    var _this = this;
    // dispatch is a function/hook that we use to perform some action on store and selector is used to get data from store
    var _a = (0, react_redux_1.useSelector)(function (state) {
        return state.userReducer;
    }), user = _a.user, loading = _a.loading;
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        (0, auth_1.onAuthStateChanged)(firebase_1.auth, function (user) { return __awaiter(_this, void 0, void 0, function () {
            var data, e_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        if (!user) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, user_1.getUser)(String(user.email))];
                    case 1:
                        data = _b.sent();
                        if ((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.message) {
                            dispatch((0, userReducer_1.userExist)(data.data.message));
                            // dispatch(setCart()) // get carts by creating a middleware in redux 
                        }
                        else {
                            dispatch((0, userReducer_1.userNotExist)());
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        dispatch((0, userReducer_1.userNotExist)());
                        _b.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        e_1 = _b.sent();
                        console.log(e_1.message);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    }, []);
    (0, react_1.useEffect)(function () {
        var fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
            var res, cartItems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getCart(user === null || user === void 0 ? void 0 : user._id)];
                    case 1:
                        res = _a.sent();
                        cartItems = res === null || res === void 0 ? void 0 : res.data.message.cartItems;
                        dispatch((0, cartReducer_1.fetchCart)(cartItems));
                        return [2 /*return*/];
                }
            });
        }); };
        fetchData();
    }, [user]);
    return loading ? (<loader_1.Loader />) : (<react_router_dom_1.BrowserRouter> 
      <Header_1.default user={user}/>
      <react_1.Suspense fallback={<div>Please wait</div>}>
        <react_router_dom_1.Routes>
        {/* adminRoutes */}
        <react_router_dom_1.Route path="admin/product/create" element={<CreateProduct />}/>
        <react_router_dom_1.Route path="admin/product/update" element={<UpdateProduct />}/>
        <react_router_dom_1.Route path="admin/product/process" element={<Transactions />}/>
        <react_router_dom_1.Route path="admin/product/all" element={<AllProduct />}/>
        <react_router_dom_1.Route path="admin/transaction/:id" element={<TransactionManagement />}/>
        <react_router_dom_1.Route path="admin/customers" element={<CustomerManagement />}/>
        {/* adminDashboarRoutes */}
        <react_router_dom_1.Route path="admin/dashboard" element={<Dashboard />}/>
        <react_router_dom_1.Route path="admin/dashboard/bar" element={<BarCharts />}/>
        <react_router_dom_1.Route path="admin/dashboard/pie" element={<PieCharts />}/>
        <react_router_dom_1.Route path="admin/dashboard/line" element={<LineCharts />}/>
        {/* userRoutes */}
          <react_router_dom_1.Route path="/" element={<Home />}/>
          <react_router_dom_1.Route path="/Login" element={<protected_route_1.default isAuthenticated={user ? false : true}>
                <Login />
              </protected_route_1.default>}/>
          <react_router_dom_1.Route path="/Search" element={<Search />}/>
          <react_router_dom_1.Route path="/Orders" element={<Orders_1.default />}/>
          <react_router_dom_1.Route element={<protected_route_1.default isAuthenticated={user ? true : false}/>}>
            <react_router_dom_1.Route path="/shipping" element={<Shipping />}/>
          </react_router_dom_1.Route>

          <react_router_dom_1.Route path="/cart" element={<Cart />}/>
          <react_router_dom_1.Route path="/pay" element={<CheckOut_1.default />}/>
          {/* <Route path="/product/:id" element={<ProductManagement />} /> */}
        </react_router_dom_1.Routes>
      </react_1.Suspense>
      <react_hot_toast_1.Toaster position="bottom-center"/>
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
