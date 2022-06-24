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
const jacketStore = new product_1.ProductStore();
productRouter.get("/jackets", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jackets = yield jacketStore.index();
        res.send(jackets);
    }
    catch (err) {
        res.status(400);
        res.json({ err: 'could not send jackets' });
    }
}));
productRouter.get("/products/:id", (_req, res) => {
    try {
        res.send("this is the getOnById route");
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
productRouter.post("/products", (req, res) => {
    const product = {
        name: req.body.name,
        quantity: req.body.quantity,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category
    };
    try {
        res.send("this is the CREATE route");
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
productRouter.put("/products/:id", (req, res) => {
    const product = {
        id: Number(req.params.id),
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        category: req.body.category
    };
    try {
        res.send(`this is the EDIT route, ${product}`);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
productRouter.delete("/products/:id", (_req, res) => {
    try {
        res.send("this is the DELETE route");
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
exports.default = productRouter;
