import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrderStore } from "../stores/useOrderStore";
import { useAuthStore } from "../stores/useAuthStore";

export default function Dashboard() {
  const navigate = useNavigate();

  const { orders, getOrders, deleteOrder, updateStatus, loading } =
    useOrderStore();

  const logout = useAuthStore((state) => state.logout);

  const [selected, setSelected] = useState(null);

  /* ================= FETCH ORDERS ================= */

  useEffect(() => {
    getOrders();
  }, []);

  /* ================= STATS (PRO FEATURE) ================= */

  const total = orders.length;
  const pending = orders.filter((o) => o.status === "pending").length;
  const done = orders.filter((o) => o.status === "done").length;

  return (
    <div className="container py-10">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl">Dashboard</h1>

        <button
          onClick={logout}
          className="px-4 py-2 rounded-lg bg-black text-white hover:opacity-90 text-sm md:text-base"
        >
          Logout
        </button>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
          <p className="text-sm text-gray-500">Total</p>
          <h2 className="text-xl font-semibold">{total}</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
          <p className="text-sm text-gray-500">Pending</p>
          <h2 className="text-xl font-semibold">{pending}</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
          <p className="text-sm text-gray-500">Done</p>
          <h2 className="text-xl font-semibold">{done}</h2>
        </div>
      </div>

      {/* ================= LOADING ================= */}
      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {/* ================= EMPTY ================= */}
      {!loading && orders.length === 0 && (
        <p className="text-center text-gray-500">No orders yet</p>
      )}

      {/* ================= DESKTOP TABLE ================= */}
      {!loading && orders.length > 0 && (
        <>
          <div className="hidden md:block bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-sm">
                <tr>
                  <th className="p-4">Name</th>
                  <th>Email</th>
                  <th>Plan</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-t hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelected(order)}
                  >
                    <td className="p-4">{order.name}</td>
                    <td>{order.email}</td>
                    <td className="capitalize">{order.plan}</td>

                    <td
                      className="space-x-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => updateStatus(order._id)}
                        className={`px-3 py-1 rounded text-sm ${
                          order.status === "pending"
                            ? "bg-yellow-200"
                            : "bg-green-200"
                        }`}
                      >
                        {order.status}
                      </button>

                      <button
                        onClick={() => deleteOrder(order._id)}
                        className="px-3 py-1 bg-red-200 rounded text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ================= MOBILE ================= */}
          <div className="md:hidden space-y-4">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white p-4 rounded-xl shadow-sm"
                onClick={() => setSelected(order)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{order.name}</p>
                    <p className="text-sm text-gray-500">{order.email}</p>
                    <p className="text-sm capitalize mt-1">{order.plan}</p>
                  </div>

                  <div
                    className="flex flex-col gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => updateStatus(order._id)}
                      className={`px-3 py-1 rounded text-xs ${
                        order.status === "pending"
                          ? "bg-yellow-200"
                          : "bg-green-200"
                      }`}
                    >
                      {order.status}
                    </button>

                    <button
                      onClick={() => deleteOrder(order._id)}
                      className="px-3 py-1 bg-red-200 rounded text-xs"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ================= MODAL ================= */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl mb-4">Client Details</h2>

            <div className="space-y-2 text-sm">
              <p>
                <strong>Name:</strong> {selected.name}
              </p>
              <p>
                <strong>Email:</strong> {selected.email}
              </p>
              <p>
                <strong>Phone:</strong> {selected.phone}
              </p>
              <p>
                <strong>Plan:</strong> {selected.plan}
              </p>
              <p>
                <strong>Status:</strong> {selected.status}
              </p>
              <p>
                <strong>Message:</strong> {selected.message}
              </p>
            </div>

            <button
              onClick={() => setSelected(null)}
              className="mt-4 px-4 py-2 bg-black text-white rounded w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
