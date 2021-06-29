import express from "express";
import { body, param } from "express-validator";

import usersController from "../controllers/usersController";
import { authenticateAccessToken } from "../middlewares/tokenAuth";

const router = express.Router();

// Register a new user
router.post(
  "/register/:registerToken",
  body("username").isAlphanumeric().isLength({ min: 1, max: 30 }).trim().escape(),
  body("email").isEmail().exists().normalizeEmail(),
  body("password").exists().isStrongPassword().trim().escape(),
  body("fname").isAlpha().trim().escape(),
  body("lname").isAlpha().trim().escape(),
  param("registerToken").exists(),
  usersController.register
);

// Login a user
router.post(
  "/login",
  body("username").exists().trim().escape(),
  body("password").exists().trim().escape(),
  usersController.login
);

// Create a registration token
router.get("/createRegisterToken", authenticateAccessToken, usersController.createRegisterToken);

// Return a specfic user given a id parameter
router.get(
  "/user/:id",
  param("id").exists().isInt(),
  authenticateAccessToken,
  usersController.user
);

export = router;
