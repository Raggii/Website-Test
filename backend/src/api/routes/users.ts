import express from "express";

const usersController = require("../controllers/usersController");

const router = express.Router();

// Register a new user
router.post("/register", usersController.register);

export = router;
