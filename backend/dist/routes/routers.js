"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
// required router packages
const express_1 = __importDefault(require("express"));
// getting sub-routers
const authentication_1 = __importDefault(require("./authentication"));
const users_1 = __importDefault(require("./users"));
// api router
const router = express_1.default.Router();
// mounting sub-routers
router.use("/auth", authentication_1.default);
router.use("/users", users_1.default);
// Adding a response
router.get("/", (req, res) => {
    res.send("Welcome to /api");
});
module.exports = router;
//# sourceMappingURL=routers.js.map