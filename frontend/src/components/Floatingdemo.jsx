import React from "react";

export default function Floatingdemo() {
  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50">

      {/* Pulse ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-30 animate-ping"></span>

      <a
        href="/signup"
        className="
        relative
        backdrop-blur-md
        bg-green-500/70
        border border-green-300/40
        text-white

        px-4 py-2 sm:px-5 sm:py-3
        text-sm sm:text-base

        rounded-full
        shadow-lg
        flex items-center gap-2

        hover:scale-110
        hover:bg-green-500
        hover:shadow-green-400/50
        hover:shadow-xl

        transition-all duration-300
        "
      >
         Request a Demo
      </a>
    </div>
  );
}