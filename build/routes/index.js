"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productRoute_1 = __importDefault(require("./productRoute"));
const allRoutes = (app) => {
    app.use(productRoute_1.default);
};
exports.default = allRoutes;
