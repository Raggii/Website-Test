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
const userModel_1 = require("../models/userModel");
const authService_1 = __importDefault(require("../services/authService"));
const express_validator_1 = require("express-validator");
const roleModel_1 = require("../models/roleModel");
const authService = new authService_1.default();
const userModel = new userModel_1.UserModel();
const roleModel = new roleModel_1.RoleModel();
/**
 * Performs the registration steps when attempting to add a new user.
 */
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Ensuring that we have the correct elements
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        console.error(errors);
        return res.status(400).json({
            message: "Some user data is missing.",
        });
    }
    // Verify registeration token
    if (!(yield userModel.isValidRegisterToken(req.params.registerToken))) {
        return res.status(403).json({ message: "Register token is invalid" });
    }
    // Ensure that the username is unique
    if (!userModel.isUsernameUnique(req.body.username)) {
        return res.status(409).json({
            message: "Username is not unique.",
        });
    }
    // Attempt to add the user data to the database
    yield userModel
        .addNewUser(req.body, req.params.registerToken)
        .then(({ userId, role }) => {
        // If we don't have the user id this should have failed.
        if (userId === null)
            throw new Error("userId === null");
        // Create JWT Token
        const jwtToken = authService.signToken({ userId, role });
        console.info(`New user with id ${userId} has a jwt token.`);
        // Success response
        return res
            .status(201)
            .cookie(process.env.JWT_COOKIE_NAME, jwtToken, { maxAge: 604800000, httpOnly: false })
            .json({
            message: "User has been successfully.",
        });
    })
        .catch((e) => {
        console.error(e);
        return res.status(500).json({
            message: "Something went wrong trying to sign you up.",
        });
    });
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Ensuring that we have the correct elements
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            console.error(errors);
            return res.status(400).json({
                message: "Some user data is missing.",
            });
        }
        const { username, password } = req.body;
        // Check that the user is valid
        const response = yield userModel.isUserValid(username, password);
        // If the user is valid we return a token
        if (!response.err) {
            // Generate the JWT token for authenticated requests.
            const jwtToken = authService.signToken({
                userId: response.data.userId,
                role: response.data.role,
            });
            return res
                .status(200)
                .cookie(process.env.JWT_COOKIE_NAME, jwtToken, { maxAge: 604800000, httpOnly: false })
                .json({ message: "Successfully authenticated!" });
        }
        else {
            return res.status(400).json({ message: "Password or username is invalid." });
        }
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Something went wrong when logging in..." });
    }
});
const createRegisterToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Verify the user has permission.
    if (!(yield roleModel.isDefaultAdmin((yield userModel.getUser(req.body.tokData.userId)).role_id))) {
        return res.status(403).json({ message: "You lack permission to perform this action" });
    }
    // generate and return the token
    userModel
        .generateRegisterToken()
        .then((regToken) => {
        // If the reg token does not correctly generate
        if (!regToken)
            throw new Error();
        return res.status(200).json({ tok: regToken });
    })
        .catch((e) => {
        console.error(e);
        return res.status(500).json({ err: "Something went wrong..." });
    });
});
const user = (req, res) => {
    // Requested id
    let requestedId;
    try {
        requestedId = Number.parseInt(req.params.id, 10);
    }
    catch (e) {
        return res.status(400).json({ message: "Parameter Id must be an integer" });
    }
    // If we don't have access to the request id (not ours) return a 403
    if (requestedId !== req.body.tokData.userId) {
        console.error(`User with id ${req.body.tokData.userId} tried to access user with id ${requestedId}`);
        return res.sendStatus(403);
    }
    // Return the requested userId's user
    userModel
        .getUser(requestedId)
        .then((data) => {
        return res.status(200).json({ data });
    })
        .catch((e) => {
        console.error(e);
        return res.status(500).json({ err: "Something went wrong..." });
    });
};
exports.default = {
    register,
    login,
    createRegisterToken,
    user,
};
//# sourceMappingURL=usersController.js.map