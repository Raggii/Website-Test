"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// test route on localhost:PORT/api/auth/test
router.get("/test", (req, res) => {
    res.send("TEST");
});
// Default response
router.get("/", (req, res) => {
    res.send("Welcome to /api/auth");
});
module.exports = router;
//# sourceMappingURL=authentication.js.map