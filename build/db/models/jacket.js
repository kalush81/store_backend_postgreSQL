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
exports.JacketStore = void 0;
const index_1 = __importDefault(require("../index"));
class JacketStore {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield index_1.default.connect();
                const sql = "SELECT * FROM jacket";
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (error) {
                throw new Error(`can not get jackets, ${error}`);
            }
        });
    }
    getOnById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield index_1.default.connect();
                const sql = "SELECT * FROM jacket WHERE id=($1)";
                const result = yield conn.query(sql, [id]);
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`could not get that jacket, ${error}`);
            }
        });
    }
    create(j) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield index_1.default.connect();
                const sql = "INSERT INTO jacket (name, description, quantity, price) VALUES($1, $2, $3, $4) RETURNING *";
                const result = yield conn.query(sql, [
                    j.name,
                    j.description,
                    j.quantity,
                    j.price,
                ]);
                const jacket = result.rows[0];
                conn.release();
                return jacket;
            }
            catch (error) {
                throw new Error(`could not upload new jacket, ${error}`);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield index_1.default.connect();
                const sql = "DELETE FROM jacket WHERE id=($1) RETURNING id";
                const result = yield conn.query(sql, [id]);
                conn.release();
                const deleted_id = result.rows[0].id;
                return deleted_id;
            }
            catch (error) {
                throw new Error(`could not remove jacket, ${error}`);
            }
        });
    }
}
exports.JacketStore = JacketStore;
