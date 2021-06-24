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
exports.initDatabase = exports.disconnectDatabase = void 0;
const pg_promise_1 = __importDefault(require("pg-promise"));
const dotenv_1 = __importDefault(require("dotenv"));
const process_1 = require("process");
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
const conn = pgp(conf);
function disconnectDatabase() {
    conn.$pool.end();
}
exports.disconnectDatabase = disconnectDatabase;
/**
 * Initiates the database with all tables
 */
function initDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        // Try to drop all the tables if it is local
        if (process.env.NODE_ENV === "local") {
            try {
                yield conn.query(`DROP TABLE IF EXISTS role, accounts;`);
            }
            catch (e) {
                console.log("SOMETHING WENT WRONG WITH DROPPING TABLES PLEASE REVIEW DATABASE!");
                console.error(e);
                process_1.exit(1);
            }
        }
        // Try to create any missing tables
        try {
            // create role table
            yield conn.query(`CREATE TABLE IF NOT EXISTS role (
      id SERIAL PRIMARY KEY,
      name VARCHAR(25) UNIQUE NOT NULL
    );`);
            // create user
            yield conn.query(`CREATE TABLE IF NOT EXISTS accounts (
      id serial PRIMARY KEY,
      username VARCHAR(40) UNIQUE NOT NULL,
      fname varchar(50),
      lname varchar(50),
      email varchar(40) NOT NULL,
      hash varchar(72) NOT NULL,
      salt varchar(72) NOT NULL,
      created_on timestamp(6),
      role_id INT,
      FOREIGN KEY (role_id) REFERENCES role (id)
    );`);
        }
        catch (e) {
            console.log("SOMETHING WENT WRONG WITH DROPPING TABLES PLEASE REVIEW DATABASE!");
            console.error(e);
            process_1.exit(1);
        }
    });
}
exports.initDatabase = initDatabase;
exports.default = conn;
//# sourceMappingURL=dbConfig.js.map