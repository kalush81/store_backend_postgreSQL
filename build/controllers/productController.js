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
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.edit = exports.create = exports.getOneProduct = exports.getAllProducts = void 0;
const product_1 = require("../db/models/product");
const productStore = new product_1.ProductStore();
const getAllProducts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productStore.index();
        res.send(products.length ? products : { msg: "no products could be found " });
    }
    catch (err) {
        console.log("what is this err?", err);
        res.status(500);
        res.json({ err: "Internal server error" });
    }
});
exports.getAllProducts = getAllProducts;
const getOneProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.getOneProduct = getOneProduct;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = Object.assign({}, req.body);
    try {
        const newProduct = yield productStore.create(product);
        res.send({ msg: "this is created product", product: newProduct });
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
exports.create = create;
// fix the logic
const edit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = Object.assign({ id: req.params.id }, req.body);
    try {
        const edited = yield productStore.edit(product);
        res.send({ msg: `this is edited product`, edited });
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
exports.edit = edit;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield productStore.delete(req.params.id);
        res.send({ msg: "this is id of deleted product", deleted });
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
exports.remove = remove;
