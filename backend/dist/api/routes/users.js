"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const usersController_1 = __importDefault(require("../controllers/usersController"));
const tokenAuth_1 = require("../middlewares/tokenAuth");
const router = express_1.default.Router();
// Register a new user
router.post("/register", usersController_1.default.register);
router.get("/example", tokenAuth_1.authenticateAccessToken, usersController_1.default.users);
router.get("/user/:id", tokenAuth_1.authenticateAccessToken, usersController_1.default.user);
module.exports = router;
//# sourceMappingURL=users.js.map