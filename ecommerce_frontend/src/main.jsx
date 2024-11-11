"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
var App_tsx_1 = require("./App.tsx");
require("./styles/App.scss");
var react_redux_1 = require("react-redux");
var store_ts_1 = require("./redux/store.ts");
client_1.default.createRoot(document.getElementById('root')).render(<>
  <react_redux_1.Provider store={store_ts_1.store}>
    <App_tsx_1.default />
  </react_redux_1.Provider>
  </>);
