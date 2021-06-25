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
exports.UserDAO = void 0;
const dbConfig_js_1 = __importDefault(require("../../../config/dbConfig.js"));
/**
 * Singlton class used as the primary access point to the database for negotiating with the user table.
 */
class UserDAO {
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
    initUserTable(t) {
        return __awaiter(this, void 0, void 0, function* () {
            yield t.none(`CREATE TABLE IF NOT EXISTS accounts (
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
        });
    }
    /**
     * Given some string the find a list of all users that have this username.
     *
     * @param username Some username to get the list of.
     * @returns {String[]} Returns a list of all users that match this username.
     */
    findUsersByUsername(username) {
        return new Promise((resolve, reject) => {
            this.conn
                .query(`SELECT * FROM accounts WHERE username = $1;`, username)
                .then((res) => {
                resolve(res);
            })
                .catch((e) => {
                reject(e);
            });
        });
    }
    /**
     * Given a User object attempt to add it to the database.
     * @param user
     */
    AddUser(user) {
        return new Promise((resolve, reject) => {
            this.conn
                .query(`INSERT INTO accounts (username, fname, lname, email, hash, salt)
        values ($1, $2, $3, $4, $5, $6)
        RETURNING id;`, [user.username, user.fname, user.lname, user.email, user.hash, user.salt] // Replace with actual role id
            )
                .then((res) => {
                resolve(res);
            })
                .catch((e) => {
                reject(e);
            });
        });
    }
    /**
     * Returns a user with a given user id.
     *
     * @param userId The user's id
     * @returns {User} the user that has the id given.
     */
    getUser(userId) {
        return new Promise((resolve, reject) => {
            this.conn
                .query(`SELECT *
        FROM accounts
        WHERE id = $1;`, userId)
                .then((res) => {
                resolve(res);
            })
                .catch((e) => {
                reject(e);
            });
        });
    }
    getAllUsers() {
        return new Promise((resolve, reject) => {
            this.conn
                .query("SELECT * FROM accounts;")
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