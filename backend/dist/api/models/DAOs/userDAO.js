"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDAO = void 0;
const dbConfig_js_1 = __importDefault(require("../../../config/dbConfig.js"));
/**
 * Singlton class used as the primary access point to the database.
 */
class UserDAO {
    /**
     *
     */
    constructor() {
        this.conn = dbConfig_js_1.default;
    }
    /**
     * Returns the Singlton instance, if it is not defined create a new one.
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
     * Given some string the find a list of all users that have this username.
     *
     * @param username Some username to get the list of.
     * @returns {String[]} Returns a list of all users that match this username.
     */
    findUsersByUsername(username) {
        throw new Error("Method not implemented.");
    }
    /**
     * Given a User object attempt to add it to the database.
     * @param user
     */
    AddUser(user) {
        throw new Error("Method not implemented.");
    }
    getAllUsers() {
        return new Promise((resolve, reject) => {
            this.conn
                .query("SELECT * FROM users")
                .then((res) => {
                resolve(res);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
}
exports.UserDAO = UserDAO;
/**
 * Contains the instance.
 */
UserDAO._instance = null;
//# sourceMappingURL=userDAO.js.map