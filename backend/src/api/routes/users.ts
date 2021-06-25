import express from "express";

import usersController from "../controllers/usersController";
import { authenticateAccessToken } from "../middlewares/tokenAuth";

const router = express.Router();

// Register a new user
router.post("/register", usersController.register);
router.get("/example", authenticateAccessToken, usersController.users);
router.get("/user/:id", authenticateAccessToken, usersController.user);

export = router;
