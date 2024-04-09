import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
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
            <Link
              to="/"
              className="hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1.5 rounded-md"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/productCategory"
              className="hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1.5 rounded-md"
            >
              Ceylon Product
            </Link>
          </li>
          <li className="hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1.5 rounded-md">
            <a href="#">Help</a>
          </li>
          <li>
            <Link
              to="/selleranitem"
              className="hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1.5 rounded-md"
            >
              Sell An Item
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-center gap-5 text-[#432010] dark:text-[#010679]  text-sm">
          <Link
            to="/signup"
            className="border-gray-900 border rounded-full text-white font-semibold bg-[#fffff] dark:text-[#010679] px-8 py-2 hover:opacity-80"
          >
            Sign Up
          </Link>
          {/* Move the cart icon here */}
          <Link to="/cart" className="relative flex">
            <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
            </svg>
            <span className="absolute top-0 right-0 w-4 h-4 p-0 m-0 font-mono text-sm leading-tight text-center text-white bg-red-600 rounded-full top right">
              5
            </span>
          </Link>
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
