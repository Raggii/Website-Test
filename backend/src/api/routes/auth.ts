import express from "express";
import { body, param, cookie } from "express-validator";
import authController from "../controllers/authController";
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
  authController.register
);

// Login a user
router.post(
  "/login",
  body("username").exists().trim().escape(),
  body("password").exists().trim().escape(),
  authController.login
);

// Create a registration token
router.post("/createRegisterToken", authenticateAccessToken, authController.createRegisterToken);

// Refresh the short term token
router.post(
  "/refreshLoginToken",
  cookie(process.env.JWT_COOKIE_NAME).exists(),
  cookie(process.env.LONG_TERM_COOKIE_NAME).exists(),
  authController.refreshLoginToken
);

export = router;
