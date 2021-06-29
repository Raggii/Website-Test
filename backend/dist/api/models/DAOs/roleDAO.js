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
exports.RoleDAO = void 0;
const dbConfig_js_1 = __importDefault(require("../../../config/dbConfig.js"));
const roleModel_js_1 = require("../roleModel.js");
class RoleDAO {
    constructor() {
        this.conn = dbConfig_js_1.default;
    }
    /**
     * Returns the RoleDAO global instance.
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
     * Initiates the role table, and ensures that all the roles are placed within the table.
     *
     * @param t a transaction that is currently running.
     */
    initRoleTable(t) {
        return __awaiter(this, void 0, void 0, function* () {
            // Create the table
            yield t.none(`CREATE TABLE IF NOT EXISTS role (
      id SERIAL PRIMARY KEY,
      name VARCHAR(25) UNIQUE NOT NULL
    );`);
            // Create all the roles specified by roleModel
            yield t.batch([
                t.none("INSERT INTO role(id, name) VALUES ($1, $2);", [
                    roleModel_js_1.RoleType.DEFAULT_ADMIN,
                    "DEFAULT_ADMIN",
                ]),
                t.none("INSERT INTO role(id, name) VALUES ($1, $2);", [roleModel_js_1.RoleType.ADMIN, "ADMIN"]),
                t.none("INSERT INTO role(id, name) VALUES ($1, $2);", [roleModel_js_1.RoleType.VET, "VET"]),
                t.none("INSERT INTO role(id, name) VALUES ($1, $2);", [roleModel_js_1.RoleType.USER, "USER"]),
            ]);
        });
    }
}
exports.RoleDAO = RoleDAO;
RoleDAO._instance = null;
//# sourceMappingURL=roleDAO.js.map