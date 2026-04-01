import express from "express";
import { login, logout, getUser } from "../controllers/user.controller.js";
import { protect, adminOnly } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/logout", protect, logout);
router.get("/user", protect, getUser);

// Admin routes
router.get("/dashboard", protect, adminOnly, (req, res) => {
  res.json({
    message: "Access granted",
    user: req.user,
  });
});

export default router;
