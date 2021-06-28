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
exports.UserModel = void 0;
const authService_1 = __importDefault(require("../services/authService"));
const userValidation_1 = require("../validations/userValidation");
const roleDAO_1 = require("./DAOs/roleDAO");
const userDAO_1 = require("./DAOs/userDAO");
/**
 * handles data logic for the User model
 */
class UserModel {
    constructor() {
        /**
         * Stores the instance of the user Data Access Object to interact with the database.
         * This will also be lazily instantiated with the userModel.
         */
        this.userDaoInstance = userDAO_1.UserDAO.Instance;
        /**
         * Authentication service is instantiated by the model for authentication.
         */
        this.auth = new authService_1.default();
    }
    /**
     * Determines if a username is unique within the database.
     *
     * @param username Username we want to check if it is unique.
     */
    isUsernameUnique(username) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.userDaoInstance.getUserByUsername(username);
                if (result) {
                    return true;
                }
                return false;
            }
            catch (e) {
                console.error(e);
                return false;
            }
        });
    }
    /**
     * Given a user object we add it to the data base. Also performing sanatizations beforehand
     *
     * @param user A new user that we want to add.
     * @returns The user's ID.
     */
    addNewUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            // This is not really necessary, as functions providing newUser will probably
            // Sanatise the input anyway.
            if (!userValidation_1.isNewUserValid(newUser))
                return null;
            // We need to hash the password
            const { hash, salt, err } = yield this.auth.hashPassword(newUser.password);
            // If there is an error we throw it
            if (err)
                throw new Error(err);
            // We create a user obj and try to add it to the database.
            const user = {
                hash,
                salt,
                username: newUser.username,
                email: newUser.email,
                fname: newUser.fname,
                lname: newUser.lname,
                role_id: roleDAO_1.RoleType.USER,
            };
            try {
                const userId = yield this.userDaoInstance.AddUser(user);
                // We throw an error if the user id is null.
                if (userId === null)
                    throw new Error("Something went wrong trying to add user.");
                return userId;
            }
            catch (e) {
                console.error(e);
                return null;
            }
        });
    }
    /**
     * Given a pair of a user's username and password we verify if it is valid.
     *
     * @param username Attmpt username.
     * @param password Attempt password
     * @returns err contains the error message. isValid defines if the combination is valid.
     */
    isUserValid(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the user exists
                const user = yield this.userDaoInstance.getUserByUsername(username);
                if (!user) {
                    return { err: "Username is invalid", userId: null };
                }
                // Check the password
                if (yield this.auth.verifyPassword(password, user.hash)) {
                    return { err: null, userId: user.id };
                }
                else {
                    return { err: "Password is invalid", userId: null };
                }
            }
            catch (e) {
                return { err: "SOMETHING", userId: null };
            }
        });
    }
    getAllUsers() {
        return this.userDaoInstance.getAllUsers();
    }
    /**
     * Retrieves the user of a given user id.
     *
     * @param userId userId of the user we want to get information about.
     * @returns {getUserResponse} Formatted response of the user object.
     */
    getUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userDaoInstance.getUserById(userId);
            const dtoData = Object.assign({}, user);
            return dtoData;
        });
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=userModel.js.map