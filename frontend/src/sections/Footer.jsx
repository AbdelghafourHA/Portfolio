import React from "react";
import logo from "../assets/Logo.svg";

export default function Footer() {
  return (
    <footer className="py-8">
      <div
        className=" w-fit
           mx-auto
          flex justify-between gap-8
          
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-2 text-text-secondary text-xs">
          Made By <img src={logo} alt="logo" className="w-4 object-contain" />{" "}
          in 2026.
        </div>
      </div>
    </footer>
  );
}
