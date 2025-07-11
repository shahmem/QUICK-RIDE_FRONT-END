// AdminLogin.jsx
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/admin/login`, form);
      localStorage.setItem("token", res.data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <form
    onSubmit={handleSubmit}
    className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6"
  >
    <h2 className="text-2xl font-semibold text-center text-gray-800">Admin Login</h2>

    <input
      type="email"
      placeholder="Admin Email"
      onChange={(e) => setForm({ ...form, email: e.target.value })}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />

    <input
      type="password"
      placeholder="Password"
      onChange={(e) => setForm({ ...form, password: e.target.value })}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
    >
      Login
    </button>
  </form>
</div>

  );
}
