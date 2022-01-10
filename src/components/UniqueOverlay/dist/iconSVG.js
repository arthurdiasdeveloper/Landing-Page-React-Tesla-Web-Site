"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.BurgerSVG = exports.LogoSVG = void 0;
var react_1 = require("react");
exports.LogoSVG = function (_a) {
    var props = __rest(_a, []);
    return (react_1["default"].createElement("svg", __assign({ viewBox: "0 0 102 27", fill: "none" }, props),
        react_1["default"].createElement("path", { d: "M5.106 21.782h8.92V26H.023V.828h5.083v20.954zm37.74-6.103c0 3.377-.8 5.999-2.403 7.866-1.59 1.867-3.803 2.8-6.638 2.8-2.824 0-5.043-.921-6.657-2.765-1.613-1.856-2.431-4.45-2.454-7.78v-4.305c0-3.458.8-6.155 2.403-8.091C28.699 1.456 30.923.482 33.77.482c2.8 0 5.008.957 6.622 2.87 1.613 1.902 2.431 4.576 2.454 8.022v4.305zm-5.1-4.219c0-2.27-.322-3.959-.968-5.065-.645-1.107-1.648-1.66-3.008-1.66-1.349 0-2.345.536-2.99 1.608-.646 1.06-.98 2.68-1.004 4.858v4.478c0 2.201.329 3.826.986 4.875.657 1.037 1.671 1.556 3.043 1.556 1.325 0 2.31-.507 2.956-1.521.645-1.026.974-2.61.985-4.755V11.46zM71.77 23.147c-.98 1.06-2.184 1.862-3.613 2.404-1.418.53-2.974.795-4.668.795-2.893 0-5.14-.893-6.742-2.68-1.602-1.798-2.427-4.409-2.473-7.832v-4.53c0-3.469.755-6.137 2.265-8.004C58.06 1.421 60.273.482 63.178.482c2.731 0 4.789.674 6.172 2.023 1.395 1.348 2.201 3.463 2.42 6.345h-4.944c-.138-1.602-.473-2.692-1.003-3.268-.53-.588-1.36-.882-2.49-.882-1.371 0-2.368.502-2.99 1.505-.623 1.002-.946 2.599-.969 4.788v4.565c0 2.293.34 3.965 1.02 5.013.692 1.038 1.822 1.556 3.389 1.556 1.003 0 1.815-.201 2.438-.605l.45-.31v-4.617h-3.562v-3.838h8.661v10.39zm29.477-7.468c0 3.377-.801 5.999-2.403 7.866-1.59 1.867-3.803 2.8-6.639 2.8-2.823 0-5.042-.921-6.656-2.765-1.613-1.856-2.432-4.45-2.455-7.78v-4.305c0-3.458.801-6.155 2.403-8.091C87.1 1.456 89.324.482 92.171.482c2.8 0 5.008.957 6.621 2.87 1.614 1.902 2.432 4.576 2.455 8.022v4.305zm-5.1-4.219c0-2.27-.323-3.959-.968-5.065-.645-1.107-1.648-1.66-3.008-1.66-1.349 0-2.346.536-2.991 1.608-.646 1.06-.98 2.68-1.003 4.858v4.478c0 2.201.329 3.826.986 4.875.657 1.037 1.67 1.556 3.042 1.556 1.326 0 2.311-.507 2.957-1.521.645-1.026.974-2.61.985-4.755V11.46z", fill: "#000" })));
};
exports.BurgerSVG = function (_a) {
    var props = __rest(_a, []);
    return (react_1["default"].createElement("svg", __assign({ viewBox: "0 0 45 30", fill: "none" }, props),
        react_1["default"].createElement("path", { fill: "#000", d: "M0 0h45v5H0zM0 25h45v5H0zM0 13h45v5H0z" })));
};
