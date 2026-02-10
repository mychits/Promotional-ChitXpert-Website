import React from "react";

export default function Floatingdemo() {
  return (
    <a
      href="/signup"
      className="
      bg-gradient-to-r from-orange-400 to-yellow-400
        fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50
         text-white
        px-4 py-2 sm:px-5 sm:py-3
        text-sm sm:text-base
        rounded-full
        shadow-lg
       
        transition-all
      "
    >
      Request a Demo
    </a>
  );
}
