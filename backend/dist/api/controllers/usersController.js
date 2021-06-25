"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = require("../models/userModel");
const authService_1 = __importDefault(require("../services/authService"));
const userValidation_1 = require("../validations/userValidation");
const authService = new authService_1.default();
const userModel = new userModel_1.UserModel();
/**
 * Performs the registration steps when attempting to add a new user.
 */
const register = (req, res) => {
    // Ensuring that we have the correct elements // TODO REMOVE VALIDATOR CLASS
    if (!userValidation_1.isNewUserValid(req.body)) {
        res.status(400).json({
            message: "Some user data is missing.",
        });
        return;
    }
    // Ensure that the username is unique
    if (!userModel.isUsernameUnique(req.body.username)) {
        res.status(409).json({
            message: "Username is not unique.",
        });
        return;
    }
    // Attempt to add the user data to the database
    userModel
        .addNewUser(req.body)
        .then((userId) => {
        // If we don't have the user id this should have failed.
        if (userId === null)
            throw new Error();
        // Create JWT Token
        const jwtToken = authService.signToken({ userId });
        // Success response
        res.status(201).json({
            message: "User has been successfully.",
            tok: jwtToken,
        });
    })
        .catch((e) => {
        console.error(e);
        res.status(500).json({
            message: "Something went wrong trying to sign you up.",
        });
    });
};
const login = (req, res) => {
    // Check that we got the correct data.
    if (!req.body.username || !req.body.password) {
        res.status(400).json({
            message: "Username or password are required..",
        });
    }
    // Test that the password is correct.
};
const users = (req, res) => {
    console.error(req.body.tokData);
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
        res.status(500).json({ err: e });
    });
};
exports.default = {
    register,
    login,
    users,
    user,
};
//# sourceMappingURL=usersController.js.map