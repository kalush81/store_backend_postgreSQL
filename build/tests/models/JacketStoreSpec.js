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
describe("product model", () => {
    // afterAll(() => {
    //   console.log('reseting test db')
    //   exec("db-migrate down -e test -c 2 ", (error, stdout, stderr) => {
    //     if (error) {
    //       console.log(`error: ${error.message}`);
    //       return;
    //     }
    //     if (stderr) {
    //       console.log(`stderr: ${stderr}`);
    //       return;
    //     }
    //     console.log(`stdout: ${stdout}`);
    //   });
    // });
    it("should have an index method", () => {
        expect(storeProduct.index).toBeDefined();
    });
    it("should return list of products, empty arr ", () => __awaiter(void 0, void 0, void 0, function* () {
        const products = yield storeProduct.index();
        expect(products).toEqual([]);
    }));
    it("create method should add a product", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield storeProduct.create({
            name: "burton snb jacket",
            description: "nice winter jacket",
            quantity: 1,
            price: 100,
            category: "jacket",
        });
        expect(result).toEqual({
            id: 1,
            name: "burton snb jacket",
            description: "nice winter jacket",
            quantity: 1,
            price: 100,
            category: "jacket",
        });
    }));
    it("index method should return a list of products", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield storeProduct.index();
        expect(result).toEqual([
            {
                id: 1,
                name: "burton snb jacket",
                description: "nice winter jacket",
                quantity: 1,
                price: 100,
                category: "jacket",
            },
        ]);
    }));
    it("show method should return the correct product", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield storeProduct.getOnById("1");
        expect(result).toEqual({
            id: 1,
            name: "burton snb jacket",
            description: "nice winter jacket",
            quantity: 1,
            price: 100,
            category: "jacket",
        });
    }));
    it("edit method should edit the product", () => __awaiter(void 0, void 0, void 0, function* () {
        const product = {
            id: 1,
            name: "burton snb jacket",
            description: "nice winter jacket",
            quantity: 5,
            price: 50,
            category: "jacket",
        };
        yield storeProduct.edit(product);
        const result = yield storeProduct.index();
        expect(result).toEqual([product]);
    }));
    it("delete method should remove the product", () => __awaiter(void 0, void 0, void 0, function* () {
        yield storeProduct.delete("1");
        const result = yield storeProduct.index();
        expect(result).toEqual([]);
    }));
    it("create method should add a product", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield storeProduct.create({
            name: "burton snb jacket",
            description: "nice winter jacket",
            quantity: 1,
            price: 100,
            category: "jacket",
        });
        expect(result).toEqual({
            id: 2,
            name: "burton snb jacket",
            description: "nice winter jacket",
            quantity: 1,
            price: 100,
            category: "jacket",
        });
    }));
});
