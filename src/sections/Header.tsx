"use client";
import { useState } from "react";

export const Header = () => {
  const [currentHash, setCurrentHash] = useState<String>("");

  return (
    <div className="flex justify-center items-center fixed top-3 left-1/2 transform -translate-x-1/2 z-10">
      <nav className="flex gap-x-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#hero"
          onClick={() => setCurrentHash("#hero")}
          className={`nav-item ${
            currentHash === "" || currentHash === "#hero"
              ? "bg-white text-gray-900 hover:bg-white/75 hover:text-gray-900"
              : ""
          } `}
        >
          Home
        </a>
        <a
          href="#projects"
          onClick={() => setCurrentHash("#projects")}
          className={`nav-item ${
            currentHash === "#projects"
              ? "bg-white text-gray-900 hover:bg-white/75 hover:text-gray-900"
              : ""
          }`}
        >
          Projects
        </a>
        <a
          href="#about"
          onClick={() => setCurrentHash("#about")}
          className={`nav-item ${
            currentHash === "#about"
              ? "bg-white text-gray-900 hover:bg-white/75 hover:text-gray-900"
              : ""
          }`}
        >
          About
        </a>
        <a
          href="#contact"
          onClick={() => setCurrentHash("#contact")}
          className={`nav-item ${
            currentHash === "#contact"
              ? "bg-white text-gray-900 hover:bg-white/75 hover:text-gray-900"
              : ""
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
