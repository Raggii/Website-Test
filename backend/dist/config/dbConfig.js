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
const roleDAO_1 = require("../api/models/DAOs/roleDAO");
const userDAO_1 = require("../api/models/DAOs/userDAO");
const sessionDAO_1 = require("../api/models/DAOs/sessionDAO");
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
        // Try to create any missing tables
        yield conn
            .tx((t) => __awaiter(this, void 0, void 0, function* () {
            // If we are on a local machine, we want to wipe the database.
            if (process.env.NODE_ENV === "local") {
                yield t.none(`DROP TABLE IF EXISTS role, accounts, sessions;`);
            }
            // initiate tables
            yield roleDAO_1.RoleDAO.Instance.initRoleTable(t);
            yield userDAO_1.UserDAO.Instance.initUserTable(t);
            yield sessionDAO_1.SessionDAO.Instance.initSessionsTable(t);
            return;
        }))
            .catch((e) => {
            console.log("Database initiation went wrong...\n\n");
            console.error(e);
            process_1.exit(1);
        });
    });
}
exports.initDatabase = initDatabase;
exports.default = conn;
//# sourceMappingURL=dbConfig.js.map