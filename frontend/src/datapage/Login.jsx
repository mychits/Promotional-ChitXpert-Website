import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // HANDLE LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );
       alert("Login successful!");

      // OPTIONAL: store token
      localStorage.setItem("token", res.data.token);

      // Redirect to Home
      navigate("/home");

    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Invalid credentials. Please register first."
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-emerald-600">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-md w-96"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

          {/* ERROR MESSAGE */}
          {error && (
            <p className="bg-red-100 text-red-700 p-2 rounded mb-3 text-sm text-center">
              {error}
            </p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded"
            required
          />

          <button className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700">
            Login
          </button>

          <p className="text-sm mt-4 text-center">
            New user?
            <Link to="/register" className="text-emerald-600 ml-1">
              Register Now
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
