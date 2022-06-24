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
const product_1 = require("../../db/models/product");
const storeProduct = new product_1.ProductStore();
describe("jacket model", () => {
    it("should have an index method", () => {
        expect(storeProduct.index).toBeDefined();
    });
    it("should return list fo jackets, empty arr ", () => __awaiter(void 0, void 0, void 0, function* () {
        const jackets = yield storeProduct.index();
        expect(jackets).toEqual([]);
    }));
    it("create method should add a jacket", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield storeProduct.create({
            name: "burton snb jacket",
            description: "nice winter jacket",
            quantity: 1,
            price: 100,
            category: 'jacket'
        });
        expect(result).toEqual({
            id: 1,
            name: "burton snb jacket",
            description: "nice winter jacket",
            quantity: 1,
            price: 100,
            category: 'jacket'
        });
    }));
    it("index method should return a list of books", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield storeProduct.index();
        expect(result).toEqual([
            {
                id: 1,
                name: "burton snb jacket",
                description: "nice winter jacket",
                quantity: 1,
                price: 100,
                category: 'jacket'
            },
        ]);
    }));
    it("show method should return the correct book", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield storeProduct.getOnById("1");
        expect(result).toEqual({
            id: 1,
            name: "burton snb jacket",
            description: "nice winter jacket",
            quantity: 1,
            price: 100,
            category: 'jacket'
        });
    }));
    it("delete method should remove the book", () => __awaiter(void 0, void 0, void 0, function* () {
        yield storeProduct.delete("1");
        const result = yield storeProduct.index();
        expect(result).toEqual([]);
    }));
});
