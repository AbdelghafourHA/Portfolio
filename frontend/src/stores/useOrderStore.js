import { create } from "zustand";
import API from "../config/axios";

export const useOrderStore = create((set) => ({
  orders: [],
  loading: false,
  error: null,

  /* ================= GET ORDERS ================= */

  getOrders: async () => {
    try {
      set({ loading: true, error: null });

      const res = await API.get("/orders");

      set({
        orders: res.data,
        loading: false,
      });
    } catch (err) {
      set({
        error: err.response?.data?.message || "Failed to fetch orders",
        loading: false,
      });
    }
  },

  /* ================= DELETE ORDER ================= */

  deleteOrder: async (id) => {
    try {
      await API.delete(`/orders/${id}`);

      set((state) => ({
        orders: state.orders.filter((order) => order._id !== id),
      }));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  },

  /* ================= UPDATE STATUS ================= */

  updateStatus: async (id) => {
    try {
      const res = await API.put(`/orders/${id}`);

      set((state) => ({
        orders: state.orders.map((order) =>
          order._id === id ? { ...order, status: res.data.status } : order
        ),
      }));
    } catch (err) {
      console.error("Update failed:", err);
    }
  },

  /* ================= CREATE ORDER (FRONT WEBSITE) ================= */

  createOrder: async (formData) => {
    try {
      const res = await API.post("/orders", formData);
      return res.data;
    } catch (err) {
      throw err.response?.data?.message || "Order failed";
    }
  },
}));
