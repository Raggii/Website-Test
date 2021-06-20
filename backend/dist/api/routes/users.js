"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const usersController_1 = __importDefault(require("../controllers/usersController"));
const router = express_1.default.Router();
// Register a new user
router.post("/register", usersController_1.default.register);
router.get("/example", usersController_1.default.users);
module.exports = router;
//# sourceMappingURL=users.js.map