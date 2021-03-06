"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { user, user_test, host, database, database_test, password, password_test, port, ENV, } = process.env;
const pool = new pg_1.Pool({
    user: ENV === "test" ? user_test : user,
    host,
    database: ENV === "test" ? database_test : database,
    password: ENV === "test" ? password_test : password,
    port: Number(port),
});
pool.on("error", (err, client) => {
    client.release();
    console.error("Unexpected error on idle client", err);
    process.exit(-1);
});
exports.default = pool;
