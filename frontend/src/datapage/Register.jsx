import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Register() {
  const navigate = useNavigate();

  // 🔹 STATE FOR FORM DATA
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // 🔹 HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 🔹 HANDLE REGISTER
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-emerald-600">
        <form
          onSubmit={handleRegister}
          className="bg-white/95 p-8 rounded-xl shadow-2xl w-96"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Register
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded"
            required
          />

          <input
            type="companyname"
            name="companyname"
            placeholder="CompanyName"
            value={formData.companyname}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded"
            required
          />

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
            Create Account
          </button>
        </form>
      </div>
    </>
  );
}
