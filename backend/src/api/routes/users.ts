import express from "express";
import { body, param } from "express-validator";

import usersController from "../controllers/usersController";
import { authenticateAccessToken } from "../middlewares/tokenAuth";

const router = express.Router();

// Register a new user
router.post(
  "/register",
  body("username").isAlphanumeric().isLength({ min: 1, max: 30 }),
  body("email").isEmail().exists(),
  body("password").exists().isStrongPassword(),
  body("fname").isAlpha(),
  body("lname").isAlpha(),
  usersController.register
);

// Login a user
router.post("/login", body("username").exists(), body("password").exists(), usersController.login);

// Return a specfic user given a id parameter
router.get("/user/:id", param("id").isInt(), authenticateAccessToken, usersController.user);

export = router;
