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
exports.dgaaService = exports.startDgaaService = void 0;
const userDAO_1 = require("../models/DAOs/userDAO");
const timers_1 = require("timers");
const authService_1 = __importDefault(require("./authService"));
const roleModel_1 = require("../models/roleModel");
const process_1 = require("process");
const authService = new authService_1.default();
const DGAA_SERVICE_DELAY_MS = 1000 * 60 * 5;
function startDgaaService() {
    return __awaiter(this, void 0, void 0, function* () {
        timers_1.setInterval(() => {
            try {
                dgaaService();
            }
            catch (e) {
                console.error(e);
            }
        }, DGAA_SERVICE_DELAY_MS);
    });
}
exports.startDgaaService = startDgaaService;
function dgaaService() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!(yield userDAO_1.UserDAO.Instance.defaultAdminExists())) {
                const { hash, salt, err } = yield authService.hashPassword(process.env.DGAA_PASSWORD);
                if (err) {
                    throw Error("DGAA could not be created");
                }
                const adminUser = {
                    username: process.env.DGAA_USERNAME,
                    email: process.env.DGAA_EMAIL,
                    hash,
                    salt,
                    role_id: roleModel_1.RoleType.DEFAULT_ADMIN,
                };
                yield userDAO_1.UserDAO.Instance.createDefaultAdmin(adminUser);
                console.log("DGAA CREATED...");
            }
            else {
                console.log("DGAA Exists...");
            }
        }
        catch (e) {
            console.error("SOMETHING WENT WRONG...");
            process_1.exit(1);
        }
    });
}
exports.dgaaService = dgaaService;
//# sourceMappingURL=dgaaService.js.map