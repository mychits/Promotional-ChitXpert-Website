import { FaWhatsapp } from "react-icons/fa";
import React from "react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919845311238"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50
        bg-green-500 text-white   
        w-12 h-12 sm:w-14 sm:h-14
        flex items-center justify-center
        rounded-full
        shadow-lg
        hover:bg-green-600
        transition-all
      "
    >
      <FaWhatsapp className="text-xl sm:text-2xl" />
    </a>
  );
}
