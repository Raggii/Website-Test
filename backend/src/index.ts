// Get the routers
import routers from "./api/routes/routers";

// Require the middle ware libraries.
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

// Gets the environment variables
dotenv.config();

// Create the express app.
import express from "express";
const app = express();

// Get the constants
const PORT = process.env.PORT || 2999;
const BASE_URL = process.env.BASE_URL || "localhost";

// Adding the middleware
app.use(bodyParser.urlencoded({ extended: false })); // Converts the body automatically dpending on the encoding
app.use(bodyParser.json()); // Automatically converts json data type into JSON object for the req.
app.use(cors()); // Applies CORS variables. But might not work in the future, where we use cookies. Will need to set headers.
app.use(cookieParser());

// use routers
app.use("/api", routers);

// default response
app.get("/", (req, res) => {
  res.send("Chase Bovine Backend");
});

// Starting the server
app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started:`);
  // tslint:disable-next-line:no-console
  console.log(`     Server URL: ${BASE_URL}:${PORT} (PORT: ${PORT})`);
});
