"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseHandler = void 0;
/**
 * Singlton class used as the primary access point to the database.
 */
class DatabaseHandler {
    /**
     *
     */
    constructor() { }
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
}
exports.DatabaseHandler = DatabaseHandler;
//# sourceMappingURL=dbHandler.js.map