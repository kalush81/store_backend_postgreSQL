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
exports.UserStore = void 0;
const __1 = __importDefault(require(".."));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { pepper, saltRounds } = process.env;
class UserStore {
    create(u) {
        return __awaiter(this, void 0, void 0, function* () {
            const hash = bcrypt_1.default.hashSync(u.password + pepper, parseInt(saltRounds));
            const conn = yield __1.default.connect();
            const sql = "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id;";
            const result = yield conn.query(sql, [u.email, hash]);
            const user_id = result.rows[0];
            return user_id;
        });
    }
    authenticate() {
        return __awaiter(this, void 0, void 0, function* () {
            //to be implemented for login
        });
    }
}
exports.UserStore = UserStore;
