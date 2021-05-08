// required router packages
const express = require("express");
const router = express.Router();

// getting routers
const authenticationRouter = require("./authentication");

// using the routers
router.use("/auth", authenticationRouter);

// Default response
router.get("/", (req, res) => {
  res.send("Welcome to /api");
});

module.exports = router;
