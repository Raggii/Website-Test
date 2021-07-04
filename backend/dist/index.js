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
const dbConfig_1 = require("./config/dbConfig");
const routers_1 = __importDefault(require("./api/routes/routers"));
// Require the middle ware libraries.
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// Gets the environment variables
dotenv_1.default.config();
// Create the express app.
const express_1 = __importDefault(require("express"));
const dgaaService_1 = require("./api/services/dgaaService");
// Get the constants
const PORT = process.env.PORT || 2999;
const BASE_URL = process.env.BASE_URL || "localhost";
const initiation = () => __awaiter(void 0, void 0, void 0, function* () {
    // initiate the database.
    yield dbConfig_1.initDatabase();
    // initiate the dgaa Service
    yield dgaaService_1.dgaaService();
    dgaaService_1.startDgaaService();
    const app = express_1.default();
    // Adding the middleware
    app.use(body_parser_1.default.urlencoded({ extended: false })); // Converts the body automatically dpending on the encoding
    app.use(body_parser_1.default.json()); // Automatically converts json data type into JSON object for the req.
    app.use(cors_1.default({ origin: process.env.CORS_ORIGIN, credentials: true })); // Applies CORS variables. But might not work in the future, where we use cookies. Will need to set headers.
    app.use(cookie_parser_1.default());
    // use routers
    app.use("/api", routers_1.default);
    // default response
    app.get("/", (req, res) => {
        res.send("Chase Bovine Backend");
    });
    // On exit we want to disconnect from the database.
    process.on("exit", () => {
        dbConfig_1.disconnectDatabase();
    });
    // Starting the server
    app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
        // tslint:disable-next-line:no-console
        console.log(`Server started:`);
        // tslint:disable-next-line:no-console
        console.log(`     Server URL: ${BASE_URL}:${PORT} (PORT: ${PORT})`);
    }));
});
initiation();
//# sourceMappingURL=index.js.map