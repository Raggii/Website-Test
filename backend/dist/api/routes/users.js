"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const usersController_1 = __importDefault(require("../controllers/usersController"));
const tokenAuth_1 = require("../middlewares/tokenAuth");
const router = express_1.default.Router();
// Register a new user
router.post("/register/:registerToken", express_validator_1.body("username").isAlphanumeric().isLength({ min: 1, max: 30 }).trim().escape(), express_validator_1.body("email").isEmail().exists().normalizeEmail(), express_validator_1.body("password").exists().isStrongPassword().trim().escape(), express_validator_1.body("fname").isAlpha().trim().escape(), express_validator_1.body("lname").isAlpha().trim().escape(), express_validator_1.param("registerToken").exists(), usersController_1.default.register);
// Login a user
router.post("/login", express_validator_1.body("username").exists().trim().escape(), express_validator_1.body("password").exists().trim().escape(), usersController_1.default.login);
// Create a registration token
router.get("/createRegisterToken", tokenAuth_1.authenticateAccessToken, usersController_1.default.createRegisterToken);
// Return a specfic user given a id parameter
router.get("/user/:id", express_validator_1.param("id").exists().isInt(), tokenAuth_1.authenticateAccessToken, usersController_1.default.user);
module.exports = router;
//# sourceMappingURL=users.js.map