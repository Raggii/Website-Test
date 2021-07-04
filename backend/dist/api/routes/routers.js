"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
// required router packages
const express_1 = __importDefault(require("express"));
// getting sub-routers
const auth_1 = __importDefault(require("./auth"));
const users_1 = __importDefault(require("./users"));
// api router
const router = express_1.default.Router();
// mounting sub-routers
router.use("/auth", auth_1.default);
router.use("/users", users_1.default);
// Adding a response
router.get("/", (req, res) => {
    res.send("Welcome to /api :D");
});
module.exports = router;
//# sourceMappingURL=routers.js.map