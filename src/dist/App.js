"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Page_1 = require("./components/Page");
var GlobalStyles_1 = require("./styles/GlobalStyles");
function App() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Page_1["default"], null),
        react_1["default"].createElement(GlobalStyles_1.GlobalStyles, null)));
}
exports["default"] = App;
