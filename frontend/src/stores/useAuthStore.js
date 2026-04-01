import { create } from "zustand";
import API from "../config/axios";

export const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,

  /* ================= LOGIN ================= */

  login: async (formData) => {
    try {
      set({ loading: true, error: null });

      const res = await API.post("/auth/login", formData);

      const { token, user } = res.data;

      // Save token
      localStorage.setItem("token", token);

      set({
        user,
        token,
        loading: false,
      });

      return true;
    } catch (err) {
      set({
        error: err.response?.data?.message || "Login failed",
        loading: false,
      });

      return false;
    }
  },

  /* ================= LOGOUT ================= */

  logout: () => {
    localStorage.removeItem("token");

    set({
      user: null,
      token: null,
    });

    window.location.href = "/login";
  },

  /* ================= GET CURRENT USER ================= */

  getUser: async () => {
    try {
      set({ loading: true });

      const res = await API.get("/auth/user");

      set({
        user: res.data,
        loading: false,
      });
    } catch (err) {
      set({
        user: null,
        loading: false,
      });
    }
  },
}));
