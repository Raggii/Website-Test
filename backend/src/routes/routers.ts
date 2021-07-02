// required router packages
import express from "express";

// getting sub-routers
import authenticationRouter from "./authentication";

const router = express.Router();

// mounting sub-routers
router.use("/auth", authenticationRouter);

// Adding a response
router.get("/", (req, res) => {
  res.send("Welcome to /api");
});

export = router;
