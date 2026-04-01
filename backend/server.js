import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

import authRoutes from "./routes/user.route.js";
import orderRoutes from "./routes/order.route.js";

dotenv.config();

const app = express();

// Connect DB
connectDB();

// Middlewares
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-six-beryl-14.vercel.app",
    ],
  })
);

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

/* ================= ROUTES ================= */
// (you will create them next)

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

/* ================= ERRORS ================= */

// 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Server error
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ message: "Server error" });
});

/* ================= START ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
