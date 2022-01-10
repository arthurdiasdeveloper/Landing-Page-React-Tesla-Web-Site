"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var ModelOverlay_1 = require("../ModelOverlay");
var styles_1 = require("./styles");
var ModelsContext_1 = require("../ModelsContext");
var ModelsWrapper = function (_a) {
    var children = _a.children;
    //Tudos os metodos que foi estipulado na classe ModelsContext, devo
    //criar aqui dentro. 
    var wrapperRef = react_1.useRef(null);
    var _b = react_1.useState([]), registeredModels = _b[0], setRegisteredModels = _b[1];
    //Assim, temoes um modelo novo adicionado dentro dos estados.
    var registerModel = react_1.useCallback(function (model) {
        setRegisteredModels(function (state) { return __spreadArrays(state, [model]); });
    }, []);
    //Para retirar o modelo, precisamos do unregissterModel(Metodo para retirar o modelo do carro).
    var unregisterModel = react_1.useCallback(function (modelName) {
        //O retorno dessa funcao e void, o que temos que fazer e remover
        //do estado.
        setRegisteredModels(function (state) { return state.filter(function (model) { return model.modelName === modelName; }); });
    }, []);
    var getModelByName = react_1.useCallback(function (modelName) {
        return registeredModels.find(function (item) { return item.modelName === modelName; }) || null;
    }, [registeredModels]);
    return (react_1["default"].createElement(ModelsContext_1["default"].Provider, { value: {
            wrapperRef: wrapperRef,
            registeredModels: registeredModels,
            registerModel: registerModel,
            unregisterModel: unregisterModel,
            getModelByName: getModelByName
        } },
        react_1["default"].createElement(styles_1.Container, { ref: wrapperRef },
            react_1["default"].createElement(styles_1.OverlayRoot, null, registeredModels.map(function (item) { return (react_1["default"].createElement(ModelOverlay_1["default"], { key: item.modelName, model: item }, item.overlayNode)); })),
            children)));
};
exports["default"] = ModelsWrapper;
