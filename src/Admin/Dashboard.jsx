import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState("all");

  // Fetch users from backend
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/dashboard");
      setUsers(res.data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
      alert("Error loading users data.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete user by ID
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/admin/user/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      // Refresh the list after deletion
      setUsers((prev) => prev.filter((user) => user._id !== id));
      alert("User deleted successfully!");
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete user.");
    }
  };
  const filteredUsers =
    selectedRole === "all"
      ? users
      : users.filter((user) => user.role === selectedRole);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Admin Dashboard
        </h1>

        <div className="mb-4 flex justify-end">
          <select
            className="block w-32 px-2 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="all">All</option>
            <option value="driver">Driver</option>
            <option value="rider">Rider</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-gray-600">
                  ID
                </th>
                <th className="px-6 py-3 text-left font-semibold text-gray-600">
                  Name
                </th>
                <th className="px-6 py-3 text-left font-semibold text-gray-600">
                  Email
                </th>
                <th className="px-6 py-3 text-left font-semibold text-gray-600">
                  Password
                </th>
                <th className="px-6 py-3 text-left font-semibold text-gray-600">
                  Role
                </th>
                <th className="px-6 py-3 text-left font-semibold text-gray-600">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-50">
                    <td className="px-6 py-3">{user._id}</td>
                    <td className="px-6 py-3">{user.name || "N/A"}</td>
                    <td className="px-6 py-3">{user.email}</td>
                    <td className="px-6 py-3 text-red-500 truncate">
                      {user.password}
                    </td>
                    <td className="px-6 py-3 capitalize">{user.role}</td>
                    <td className="px-6 py-3">
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 transition duration-150"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-gray-500 py-4">
                    No users found for this role.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
