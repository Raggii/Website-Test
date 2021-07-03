import express from "express";
import { body, param } from "express-validator";

import usersController from "../controllers/usersController";
import { authenticateAccessToken } from "../middlewares/tokenAuth";

const router = express.Router();

// Return a specfic user given a id parameter
router.get(
  "/user/:id",
  param("id").exists().isInt(),
  authenticateAccessToken,
  usersController.user
);

export = router;
