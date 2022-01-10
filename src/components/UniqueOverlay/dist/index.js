"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var UniqueOverlay = function () {
    return (react_1["default"].createElement(styles_1.Container, null,
        react_1["default"].createElement(styles_1.Header, null,
            react_1["default"].createElement(styles_1.Logo, null),
            react_1["default"].createElement(styles_1.Burger, null)),
        react_1["default"].createElement(styles_1.Footer, null,
            react_1["default"].createElement("ul", null,
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: '#' }, "UI Clone")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: '#' }, "Made with love")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: '#' }, " by Arthur Dias"))))));
};
exports["default"] = UniqueOverlay;
