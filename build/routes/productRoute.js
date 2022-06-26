"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = require("../db/models/product");
const productRouter = express_1.default.Router();
const productStore = new product_1.ProductStore();
productRouter.get("/products", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productStore.index();
        res.send(products.length ? products : { msg: "no products could be found " });
    }
    catch (err) {
        res.status(400);
        res.json({
            err: `could not send products. Relation products probably doesn't exist`,
        });
    }
}));
productRouter.get("/product/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield productStore.getOnById(req.params.id);
        res.send(product
            ? product
            : { msg: `product with id: ${req.params.id} doesn't exist` });
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
}));
productRouter.post("/product/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = Object.assign({}, req.body);
    try {
        const newProduct = yield productStore.create(product);
        res.send({ msg: "this is the CREATE route", product: newProduct });
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
}));
productRouter.put("/product/:id/edit", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = Object.assign({ id: req.params.id }, req.body);
    try {
        const edited = yield productStore.edit(product);
        res.send({ msg: `this is the EDIT route`, edited });
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
}));
productRouter.delete("/product/:id/delete", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield productStore.delete(req.params.id);
        res.send({ msg: "this is the DELETE route", deleted });
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
}));
exports.default = productRouter;
