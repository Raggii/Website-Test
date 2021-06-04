"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersDataAccessObject = void 0;
/**
 *
 */
class UsersDataAccessObject {
    /**
     *
     */
    constructor() { }
    /**
     *
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
     * Determines if a username is unique within the database.
     */
    isUsernameUnique(username) {
        return true;
    }
    /**
     *
     * @param username
     * @param password
     * @returns
     */
    addNewUser(username, password) {
        const userId = "RANDOM_ID_STRING_ASDASD";
        return userId;
    }
}
exports.UsersDataAccessObject = UsersDataAccessObject;
//# sourceMappingURL=usersDAO.js.map