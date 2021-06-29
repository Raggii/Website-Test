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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const uuid_1 = require("uuid");
class AuthService {
    constructor() {
        /**
         * Number of salt rounds used for hashing.
         */
        this.saltRounds = 16;
    }
    /**
     * Generates a token string for a user with a payload data.
     *
     * @param payload Data stored within the token.
     * @returns {string} JWT token string.
     */
    signToken(payload) {
        return jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
    }
    verifyToken(token) {
        try {
            const content = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            return { content, isValid: true };
        }
        catch (err) {
            return {
                content: null,
                err,
                isValid: false,
            };
        }
    }
    /**
     * Async function that given a password create a hash and salt.
     *
     * @param password The password to be hashed.
     * @returns {Promise<HashResponse>} The Promise of a hash and salt.
     */
    hashPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const salt = yield bcrypt_1.default.genSalt(this.saltRounds);
                const hashedPass = yield bcrypt_1.default.hash(password, salt);
                return {
                    hash: hashedPass,
                    salt,
                    err: null,
                };
            }
            catch (e) {
                return {
                    hash: null,
                    salt: null,
                    err: e,
                };
            }
        });
    }
    /**
     * Given a plain password and a hash compare asynchronously.
     *
     * @param plainPassword The plain text password inputted
     * @param hashedPass The user hash
     * @returns true if the password was used to create the hash. Otherwise false.
     */
    verifyPassword(plainPassword, hashedPass) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield bcrypt_1.default.compare(plainPassword, hashedPass);
                // This is to avoid any null or undefined values.
                if (!response)
                    return false;
                return response;
                // For any errors that could be thrown
            }
            catch (e) {
                return false;
            }
        });
    }
    /**
     * Generates a uuid string
     *
     * @returns uuid string.
     */
    generateUuid() {
        return __awaiter(this, void 0, void 0, function* () {
            return uuid_1.v4();
        });
    }
}
module.exports = AuthService;
//# sourceMappingURL=authService.js.map