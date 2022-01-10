"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Container = void 0;
var styled_components_1 = require("styled-components");
var framer_motion_1 = require("framer-motion");
exports.Container = styled_components_1["default"](framer_motion_1.motion.div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  margin-top: -100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  "], ["\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  margin-top: -100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  "])));
var templateObject_1;
