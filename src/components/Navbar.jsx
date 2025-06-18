import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
 return (
  <header className="bg-green-700">
    <nav>
    <ul className="flex space-x-6 items-center p-4" style={{ fontSize: "20px", fontFamily: "sans-serif" }}>
      <li>
        <Link to="/dashboard" className="text-white hover:underline hover:text-black">
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/cattle" className="text-white hover:underline hover:text-black">
          Cattle
        </Link>
      </li>
      <li>
        <Link to="/reports" className="text-white hover:underline hover:text-black">
          Reports
        </Link>
      </li>
      <li>
        <Link to="/analytics" className="text-white hover:underline hover:text-black">
          Analytics
        </Link>
      </li>
      <li>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300">
          AI Assistant
        </button>
      </li>
    </ul>
    </nav>
  </header>
 );
};

export default Navbar;
