import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";
import { useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();

  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);

  const login = useAuthStore((state) => state.login);
  const loading = useAuthStore((state) => state.loading);
  const error = useAuthStore((state) => state.error);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await login(form);

    if (success) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm">
        <h1 className="text-2xl mb-6 text-center">Admin Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet"
            />
          </div>

          {/* Error */}
          {error && <p className="text-sm text-red-500">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-black text-white rounded-lg hover:opacity-90"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
