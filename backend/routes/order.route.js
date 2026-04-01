import express from "express";
import {
  createOrder,
  getOrders,
  deleteOrder,
  updateOrderStatus,
} from "../controllers/order.controller.js";

import { protect, adminOnly } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public
router.post("/", createOrder);

// Admin
router.get("/", protect, adminOnly, getOrders);
router.delete("/:id", protect, adminOnly, deleteOrder);
router.put("/:id", protect, adminOnly, updateOrderStatus);

export default router;
