import express from "express";

import usersController from "../controllers/usersController";

const router = express.Router();

// Register a new user
router.post("/register", usersController.register);
router.get("/example", usersController.users);

export = router;
