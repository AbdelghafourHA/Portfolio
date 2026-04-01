import Order from "../models/order.model.js";

/* ================= CREATE ORDER ================= */
// Public (from your website form)

export const createOrder = async (req, res) => {
  try {
    const { name, email, phone, plan, message } = req.body;

    // Basic validation
    if (!name || !email || !phone || !plan || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const order = await Order.create({
      name,
      email,
      phone,
      plan,
      message,
    });

    res.status(201).json({
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/* ================= GET ALL ORDERS ================= */
// Admin only (dashboard)

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/* ================= DELETE ORDER ================= */
// Admin only

export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    await order.deleteOne();

    res.status(200).json({ message: "Order deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/* ================= UPDATE STATUS ================= */
// Admin only

export const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Toggle status
    order.status = order.status === "pending" ? "done" : "pending";

    await order.save();

    res.status(200).json({
      message: "Status updated",
      status: order.status,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
