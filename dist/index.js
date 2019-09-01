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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ActionType;
(function (ActionType) {
    ActionType[ActionType["ADD"] = 0] = "ADD";
    ActionType[ActionType["DELETE"] = 1] = "DELETE";
})(ActionType || (ActionType = {}));
var reducer = function (state, action) {
    var newState = __assign({}, state);
    switch (action.type) {
        case ActionType.ADD:
            newState[action.key] = action.value;
            break;
        case ActionType.DELETE:
            delete newState[action.key];
            break;
    }
    return newState;
};
exports.useKV = function () {
    var _a = react_1.default.useReducer(function (state, action) { return reducer(state, action); }, {}), nextState = _a[0], dispatch = _a[1];
    var add = function (key, value) {
        return dispatch({ type: ActionType.ADD, key: key, value: value });
    };
    var del = function (key) { return dispatch({ type: ActionType.DELETE, key: key }); };
    return [nextState, add, del];
};
