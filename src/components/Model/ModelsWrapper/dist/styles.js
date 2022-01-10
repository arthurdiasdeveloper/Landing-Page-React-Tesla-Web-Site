"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.OverlayRoot = exports.Container = void 0;
var styled_components_1 = require("styled-components");
exports.Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nheight: 100vh;\n\nscroll-snap-type: y mandatory;\noverflow-y: scroll;\n"], ["\nheight: 100vh;\n\nscroll-snap-type: y mandatory;\noverflow-y: scroll;\n"])));
exports.OverlayRoot = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  "], ["\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  "])));
var templateObject_1, templateObject_2;
