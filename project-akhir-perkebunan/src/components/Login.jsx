import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const users = [
  { username: "alice", password: "123", email: "alice@example.com", role: "Admin" },
  { username: "bob", password: "456", email: "bob@example.com", role: "User" },
];

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      onLogin(foundUser);
      navigate("/dashboard");
    } else {
      setError("Username atau password salah");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-xl mb-4 font-semibold">Login</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </label>
        <label className="block mb-4">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </label>
        {error && <p className="text-red-600 mb-3">{error}</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
