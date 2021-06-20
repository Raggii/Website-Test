"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
/**
 * Connection configuration
 */
const conf = {
    host: process.env.DB_HOST,
    port: Number.parseInt(process.env.DB_PORT, 10),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DBNAME,
    max: Number.parseInt(process.env.DB_MAXCONN, 10),
};
// Initiating the pgp
const pgp = pg_promise_1.default({});
// Connect to the database
exports.default = pgp(conf);
//# sourceMappingURL=dbConfig.js.map