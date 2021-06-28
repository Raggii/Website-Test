"use strict";
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
const app = express_1.default();
// Get the constants
const PORT = process.env.PORT || 2999;
const BASE_URL = process.env.BASE_URL || "localhost";
// initiate the database.
dbConfig_1.initDatabase().then(() => {
    // initiate the dgaa Service
    dgaaService_1.dgaaService();
    dgaaService_1.startDgaaService();
    // Adding the middleware
    app.use(body_parser_1.default.urlencoded({ extended: false })); // Converts the body automatically dpending on the encoding
    app.use(body_parser_1.default.json()); // Automatically converts json data type into JSON object for the req.
    app.use(cors_1.default()); // Applies CORS variables. But might not work in the future, where we use cookies. Will need to set headers.
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
    app.listen(PORT, () => {
        // tslint:disable-next-line:no-console
        console.log(`Server started:`);
        // tslint:disable-next-line:no-console
        console.log(`     Server URL: ${BASE_URL}:${PORT} (PORT: ${PORT})`);
    });
});
//# sourceMappingURL=index.js.map