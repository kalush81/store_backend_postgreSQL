"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = require("../controllers/productController");
const productRouter = express_1.default.Router();
productRouter.get("/products", productController_1.getAllProducts);
productRouter.get("/product/:id", productController_1.getOneProduct);
productRouter.post("/product/create", productController_1.create);
productRouter.put("/product/:id/edit", productController_1.edit); //the logic is wrong here !
productRouter.delete("/product/:id/delete", productController_1.remove);
exports.default = productRouter;
