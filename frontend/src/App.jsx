import React from "react";
import { Routes, Route } from "react-router-dom";
import Page from "./pages/Page";
import Dashboard from "./pages/dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./components/protectedRoute";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Page />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
