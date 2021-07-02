import express from "express";
const router = express.Router();

// test route on localhost:PORT/api/auth/test
router.get("/test", (req, res) => {
  res.send("TEST");
});

// Default response
router.get("/", (req, res) => {
  res.send("Welcome to /api/auth");
});

export = router;
