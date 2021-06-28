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
exports.authenticateAccessToken = void 0;
const authService_1 = __importDefault(require("../services/authService"));
const authService = new authService_1.default();
/**
 * Ensures that anyone access this endpoint has a valid access token.
 *
 * @param req endpoint request.
 * @param res enpoint response.
 * @param next function to call for the next middleware level.
 */
function authenticateAccessToken(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const header = req.headers.authorization;
        if (header) {
            const headerVals = header.split(" ");
            const token = headerVals[headerVals.length - 1];
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
    });
}
exports.authenticateAccessToken = authenticateAccessToken;
//# sourceMappingURL=tokenAuth.js.map