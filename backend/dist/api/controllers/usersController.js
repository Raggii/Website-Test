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
const authService = new authService_1.default();
const userModel = new userModel_1.UserModel();
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
    // Ensure that the username is unique
    if (!userModel.isUsernameUnique(req.body.username)) {
        return res.status(409).json({
            message: "Username is not unique.",
        });
    }
    // Attempt to add the user data to the database
    yield userModel
        .addNewUser(req.body)
        .then((userId) => {
        // If we don't have the user id this should have failed.
        if (userId === null)
            throw new Error();
        // Create JWT Token
        const jwtToken = authService.signToken({ userId });
        // Success response
        return res.status(201).json({
            message: "User has been successfully.",
            tok: jwtToken,
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
            const jwtToken = authService.signToken({ userId: response.userId });
            return res.status(200).json({ message: "Successfully authenticated!", tok: jwtToken });
        }
        else {
            console.error(response.err);
            return res.status(400).json({ message: "Password or username is invalid." });
        }
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Something went wrong when logging in..." });
    }
});
const users = (req, res) => {
    userModel
        .getAllUsers()
        .then((results) => {
        res.status(200).json({
            results,
        });
    })
        .catch((e) => {
        res.status(500).json({ err: e });
    });
};
const user = (req, res) => {
    userModel
        .getUser(Number.parseInt(req.params.id, 10))
        .then((results) => {
        res.status(200).json({ results });
    })
        .catch((e) => {
        console.error(e);
        res.status(500).json({ err: "Something went wrong..." });
    });
};
exports.default = {
    register,
    login,
    users,
    user,
};
//# sourceMappingURL=usersController.js.map