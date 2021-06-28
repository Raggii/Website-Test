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
exports.RoleDAO = exports.RoleType = void 0;
const dbConfig_js_1 = __importDefault(require("../../../config/dbConfig.js"));
/**
 * All possible user types
 *
 * - *DEFAULT_ADMIN* --> Root user
 * - *ADMIN* --> Administartor over the system, chosen by the root (DEFAULT_ADMIN)
 * - *VET* --> has a group of users, and has contact to the ADMINs
 * - *USER* --> is only aware of his own VET, and or contact to the ADMIN.
 */
var RoleType;
(function (RoleType) {
    RoleType[RoleType["DEFAULT_ADMIN"] = 0] = "DEFAULT_ADMIN";
    RoleType[RoleType["ADMIN"] = 1] = "ADMIN";
    RoleType[RoleType["VET"] = 2] = "VET";
    RoleType[RoleType["USER"] = 3] = "USER";
})(RoleType = exports.RoleType || (exports.RoleType = {}));
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
                    RoleType.DEFAULT_ADMIN,
                    "DEFAULT_ADMIN",
                ]),
                t.none("INSERT INTO role(id, name) VALUES ($1, $2);", [RoleType.ADMIN, "ADMIN"]),
                t.none("INSERT INTO role(id, name) VALUES ($1, $2);", [RoleType.VET, "VET"]),
                t.none("INSERT INTO role(id, name) VALUES ($1, $2);", [RoleType.USER, "USER"]),
            ]);
        });
    }
}
exports.RoleDAO = RoleDAO;
RoleDAO._instance = null;
//# sourceMappingURL=roleDAO.js.map