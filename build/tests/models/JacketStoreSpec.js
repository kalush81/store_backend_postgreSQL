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
const jacket_1 = require("../../db/models/jacket");
const storeJacket = new jacket_1.JacketStore();
describe("jacket model", () => {
    it("should have an index method", () => {
        expect(storeJacket.index).toBeDefined();
    });
    it("should return list fo jackets, empty arr ", () => __awaiter(void 0, void 0, void 0, function* () {
        const jackets = yield storeJacket.index();
        expect(jackets).toEqual([]);
    }));
    it('create method should add a jacket', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield storeJacket.create({
            name: 'burton snb jacket',
            description: 'nice winter jacket',
            quantity: 1,
            price: 100
        });
        expect(result).toEqual({
            id: 1,
            name: 'burton snb jacket',
            description: 'nice winter jacket',
            quantity: 1,
            price: 100
        });
    }));
    // it('index method should return a list of books', async () => {
    //   const result = await storeJacket.index();
    //   expect(result).toEqual([{
    //     id: "1",
    //     title: 'Bridge to Terabithia',
    //     totalPages: 250,
    //     author: 'Katherine Paterson',
    //     summary: 'Childrens'
    //   }]);
    // });
});
