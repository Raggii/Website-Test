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
exports.SessionDAO = void 0;
const authService_js_1 = __importDefault(require("../../services/authService.js"));
const dbConfig_js_1 = __importDefault(require("../../../config/dbConfig.js"));
class SessionDAO {
    constructor() {
        this.conn = dbConfig_js_1.default;
        this.auth = new authService_js_1.default();
    }
    /**
     * Returns the SessionDAO global instance.
     */
    static get Instance() {
        // if the instance has not yet been instantiated, we instantiate it.
        if (this._instance === null) {
            this._instance = new this();
        }
        // Return the instance
        return this._instance;
    }
    /**
     * Creates a session table that contains session tokens used for creating accounts
     *
     * @param t a transaction that is currently running.
     */
    initSessionsTable(t) {
        return __awaiter(this, void 0, void 0, function* () {
            yield t.none(`CREATE TABLE IF NOT EXISTS sessions (
      id VARCHAR(64) PRIMARY KEY
    );`);
        });
    }
    /**
     * Attempts to generate a register token. But may throw an error if the token already exists
     * in the table.
     *
     * @returns {Promise<string>} Token string.
     */
    generateRegisterToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const uuidString = yield this.auth.generateUuid();
            return yield this.conn.one(`INSERT INTO sessions (id) VALUES ($1);`, uuidString);
        });
    }
    /**
     * Attempet to consome an access token from the sessions table.
     *
     * @param registerToken to be consumed.
     * @param t transaction executer.
     * @returns true if the register token was successfully consumed otherwise false.
     */
    consumeRegisterToken(registerToken, t) {
        return __awaiter(this, void 0, void 0, function* () {
            // If it is a transaction, use that option
            if (t) {
                return ((yield t.oneOrNone(`DELETE FROM sessions WHERE id = $1 RETURNING *;`, registerToken)) !==
                    null);
            }
            return ((yield this.conn.oneOrNone(`DELETE FROM sessions WHERE id = $1 RETURNING *;`, registerToken)) !== null);
        });
    }
    /**
     * Verify that a registration token exists in the database.
     *
     * @param registerToken token to be verified.
     * @returns true if the token exists. Otherwise false.
     */
    registerTokenExists(registerToken) {
        return __awaiter(this, void 0, void 0, function* () {
            return ((yield this.conn.oneOrNone(`SELECT * FROM sessions WHERE id = $1;`, registerToken)) !== null);
        });
    }
}
exports.SessionDAO = SessionDAO;
SessionDAO._instance = null;
//# sourceMappingURL=sessionDAO.js.map