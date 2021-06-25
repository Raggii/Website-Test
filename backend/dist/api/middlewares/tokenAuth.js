"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateAccessToken = void 0;
const authService_1 = __importDefault(require("../services/authService"));
const authService = new authService_1.default();
function authenticateAccessToken(req, res, next) {
    const token = req.headers.authorization;
    if (token) {
        const responseToken = authService.verifyToken(token);
        if (!responseToken.isValid) {
            console.error(responseToken.err);
            return res.sendStatus(403);
        }
        else {
            req.body.tokData = responseToken.content;
            next();
        }
    }
    else {
        return res.sendStatus(401);
    }
}
exports.authenticateAccessToken = authenticateAccessToken;
//# sourceMappingURL=tokenAuth.js.map