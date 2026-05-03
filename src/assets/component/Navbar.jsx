import React from "react";

function Navbar() {
  return (
    <div>
      <div className="bg-red-800 flex gap-11 items-center justify-center text-white fixed w-full">
      
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
