import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const stats = [
  { label: "Users", value: 1200, icon: "👥" },
  { label: "Revenue", value: "$34,000", icon: "💰" },
  { label: "Orders", value: 560, icon: "📦" },
];

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Sales",
      data: [300, 500, 400, 700, 600, 900, 1000],
      borderColor: "rgba(59, 130, 246, 1)", // Tailwind blue-500
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Monthly Sales Overview" },
  },
};

const users = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "User" },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "User" },
  { id: 4, name: "David", email: "david@example.com", role: "User" },
];

export default function Dashboard() {
  return (
    <div className="p-3 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      {/* Statistik Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white p-3 rounded-lg shadow flex items-center space-x-3"
          >
            <div className="text-3xl">{stat.icon}</div>
            <div>
              <div className="text-sm font-medium">{stat.label}</div>
              <div className="text-xl font-semibold">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <Line
          options={{ ...options, maintainAspectRatio: false }}
          data={data}
          height={180} // buat chart lebih pendek
        />
      </div>

      {/* Table Users */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-3">User List</h2>
        <table className="min-w-full table-auto border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-3 py-1 text-left">ID</th>
              <th className="border border-gray-300 px-3 py-1 text-left">Name</th>
              <th className="border border-gray-300 px-3 py-1 text-left">Email</th>
              <th className="border border-gray-300 px-3 py-1 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr
                key={u.id}
                className="hover:bg-gray-100 cursor-pointer transition-colors"
              >
                <td className="border border-gray-300 px-3 py-1">{u.id}</td>
                <td className="border border-gray-300 px-3 py-1">{u.name}</td>
                <td className="border border-gray-300 px-3 py-1">{u.email}</td>
                <td className="border border-gray-300 px-3 py-1">{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

