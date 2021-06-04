"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const usersDAO_1 = require("../model/usersDAO");
const authHandler_1 = __importDefault(require("../handlers/authHandler"));
const router = express_1.default.Router();
const usersDAO = usersDAO_1.UsersDataAccessObject.Instance;
const authHandler = authHandler_1.default.Instance;
// Register a new user
router.post("/register", (req, res) => {
    //
    // Ensuring that we have the username and password
    if (req.body.username === null && req.body.password === null) {
        res.status(400).json({
            message: "Username or password are missing.",
        });
        return;
    }
    // Ensure that the username is unique
    if (usersDAO.isUsernameUnique(req.body.username)) {
        res.status(409).json({
            message: "Username is not unique.",
        });
        return;
    }
    // Attempt to add the user data to the database
    let userId = null;
    try {
        userId = usersDAO.addNewUser(req.body.username, req.body.password);
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong trying to sign you up.",
        });
        return;
    }
    // TODO Create JWT Token
    const jwtToken = authHandler.sign({ userId });
    // Success response
    res.status(201).json({
        message: "User has been successfully.",
    });
});
module.exports = router;
//# sourceMappingURL=users.js.map