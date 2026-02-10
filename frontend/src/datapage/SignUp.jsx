import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup
} from "firebase/auth";

import { auth } from "../firebase";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    // NAME: only letters, max 15 characters
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]{1,15}$/.test(formData.name)) {
      newErrors.name = "Name must contain only letters (max 15 characters)";
    }

    // COMPANY NAME: only letters, max 20 characters
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    } else if (!/^[A-Za-z\s]{1,20}$/.test(formData.company)) {
      newErrors.company =
        "Company name must contain only letters (max 20 characters)";
    }

    // EMAIL: unchanged (your logic)
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // PHONE: starts with 9/8/7/6 and exactly 10 digits
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9][0-9]{9}$/.test(formData.phone)) {
      newErrors.phone =
        "Phone number must start with 6-9 and be exactly 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("Signup successful!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };


  return (


    <div
      className="min-h-screen w-full bg-bottom bg-no-repeat"
      style={{
        backgroundImage: "url('/sign.jpeg')",
      }}
    >

      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          <div className="relative flex flex-col justify-start pt-24 px-6 md:px-16 text-blue-600">
            <div className="max-w-lg">
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-5 text-left">
                Sign Up <br />
                Chit Fund Managing <br />
                Software for Your Business
              </h1>

              <p className="text-base md:text-lg text-blue-800/80 leading-relaxed text-left mr-10 pr-20" >
                Manage chit groups, auctions and collections easily using{" "}
                <span className="font-semibold">MyChits</span> professional platform.
              </p>
            </div>
          </div>



          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md md:ml-auto">

            <h2 className="text-xl font-bold text-center mb-4 text-blue-600">
              Sign Up for Demo
            </h2>


            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500"
              />
              {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <input
                type="text"
                name="phone"
                placeholder="Phone / WhatsApp"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Submit & Continue
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>

  );
}
