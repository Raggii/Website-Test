"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthHandler {
    //
    constructor() {
        //
        this.secret = process.env.JWT_SECRET;
    }
    static get Instance() {
        if (this._instance === null) {
            this._instance = new this();
        }
        return this._instance;
    }
    //
    sign(payload, callback) {
        const jwtString = jsonwebtoken_1.default.sign(payload, this.secret);
        if (callback !== null) {
            callback(jwtString);
        }
        else {
            return jwtString;
        }
    }
}
module.exports = AuthHandler;
//# sourceMappingURL=authHandler.js.map