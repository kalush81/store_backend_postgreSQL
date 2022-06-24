"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jacketRoute_1 = __importDefault(require("./jacketRoute"));
const allRoutes = (app) => {
    app.use(jacketRoute_1.default);
};
exports.default = allRoutes;
