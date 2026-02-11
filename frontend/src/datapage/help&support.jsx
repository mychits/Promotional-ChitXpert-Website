import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Help = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const address =
    "11/36-25, Third Floor, 2nd Main, Kathriguppe Main Road, Banashankari Stage 3, Bengaluru Karnataka - 560085";

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const recipientEmail = "info.mychits@gmail.com";
    const body = `
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Message:
${form.message}
    `;
    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;

    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

 return (
  <div className="bg-blue-50 py-12 px-4 font-sans">
    {/* Page Title */}
    <h1 className="text-center text-3xl md:text-4xl font-bold text-[#053b90] mb-10">
      Help & Support
    </h1>

    <div className="max-w-6xl mx-auto space-y-12">
      {/* Registered Office */}
      <section>
        <h2 className="text-center text-lg font-semibold text-[#053b90] bg-green-100 py-3 rounded-xl shadow-sm mb-6">
          Registered Office
        </h2>

        <div className=" rounded-2xl shadow-md p-6 space-y-4 bg-green-100 font-semibold">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex gap-4 items-start p-4 bg-gray-50 rounded-lg border-l-4 border-blue-400 hover:bg-gray-100 transition"
          >
            <FaMapMarkerAlt className="text-[#053b90] mt-1 text-lg" />
            <span className="text-gray-700">{address}</span>
          </a>

          <a
            href="tel:+919483900777"
            className="flex gap-4 items-center p-4 bg-gray-50 rounded-lg border-l-4 border-blue-400 hover:bg-gray-100 transition"
          >
            <FaPhoneAlt className="text-[#053b90]" />
            <span className="text-gray-700">+91 94839 00777</span>
          </a>

          <a
            href="mailto:info.mychits@gmail.com"
            className="flex gap-4 items-center p-4 bg-gray-50 rounded-lg border-l-4 border-blue-400 hover:bg-gray-100 transition"
          >
            <FaEnvelope className="text-[#053b90]" />
            <span className="text-gray-700">info.mychits@gmail.com</span>
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <h2 className="text-center text-lg font-semibold text-[#053b90] py-3 mb-6">
          Send us a Message
        </h2>

        <div className="bg-white rounded-2xl shadow-md p-8">
          <div className="grid gap-4">
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              name="phone"
              placeholder="Your Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              onClick={handleSubmit}
              className="mt-2 w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r
                 from-blue-600 to-purple-600 hover:opacity-90 transition"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section>
        <h2 className="text-center text-lg font-semibold text-[#053b90]  py-3   mb-6">
          Connect With Us
        </h2>

        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com/MyChits"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg hover:scale-105 transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/my_chits/"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-yellow-400 text-white flex items-center justify-center text-lg hover:scale-105 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/919483900777"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-lg hover:scale-105 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </section>
    </div>
  </div>
);

};

export default Help;
