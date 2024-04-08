import React from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from "../assets/ph_tidal-logo-bold.png";

const Navbar = ({ onNavigation }) => {
  return (
    <div>
      <nav className="relative flex items-center justify-between w-full h-16 px-3 bg-white shadow-lg dark:border-gray-700 md:px-10 lg:px-20 ">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="object-contain w-auto h-10" />
          <p className="__className_cc5883 text-[#432010] dark:text-[#010679] font-bold text-lg">
            CeylonExportHub
          </p>
        </div>
        <ul className="hidden font-semibold text-[#432010] dark:text-[#010679] lg:absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 lg:flex items-center justify-center gap-5">
          <li>
            <Link to="/" className="hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1.5 rounded-md">Home</Link>
          </li>
          <li>
            <Link to="/productCategory" className="hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1.5 rounded-md">Ceylon Product</Link>
          </li>
          <li className="hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1.5 rounded-md">
            <a href="#">Help</a>
          </li>
          <li className="hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1.5 rounded-md">
            <a href="#">Sell An Item</a>
          </li>
        </ul>
        <div className="hidden lg:flex items-center justify-center gap-5 text-[#432010] dark:text-[#010679]  text-sm">
          <Link to="/signup" className="border-gray-900 border rounded-full text-white font-semibold bg-[#fffff] dark:text-[#010679] px-8 py-2 hover:opacity-80">Sign Up</Link>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="block transition lucide-icon AlignJustify 24 lg:hidden hover:opacity-80 "
          role="button"
        >
          <line x1="3" x2="21" y1="6" y2="6"></line>
          <line x1="3" x2="21" y1="12" y2="12"></line>
          <line x1="3" x2="21" y1="18" y2="18"></line>
        </svg>
      </nav>
    </div>
  );
};

export default Navbar;
