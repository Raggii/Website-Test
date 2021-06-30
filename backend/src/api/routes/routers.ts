// required router packages
import express from "express";

// getting sub-routers
import authenticationRouter from "./auth";
import usersRouter from "./users";

// api router
const router = express.Router();

// mounting sub-routers
router.use("/auth", authenticationRouter);
router.use("/users", usersRouter);

// Adding a response
router.get("/", (req, res) => {
  res.send("Welcome to /api :D");
});

export = router;
