import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";
import { Link } from "react-router-dom";

export default function Navbar({ cartItems = [] }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("Users");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="w-full bg-white shadow-sm p-8 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-8 lg:px-16">
        {/* Brand Name */}
        <h1 className="text-5xl font-bold tracking-wide">BookStore</h1>

        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-10 font-bold text-xl mr-20">
            <li className="hover:text-pink-500 transition cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-pink-500 transition cursor-pointer">
              <Link to="/course">Courses</Link>
            </li>
            <li className="hover:text-pink-500 transition cursor-pointer">
              <Link to="/about">About</Link>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              type="search"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Cart Icon with Counter */}
          <div className="relative cursor-pointer">
            <Link to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-700 hover:text-pink-500 transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9m-6-9v9"
                />
              </svg>
            </Link>
            {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartItems.reduce((total, item) => total + (item.quantity || 1), 0)}
            </span>
          )}
          </div>

          {/* Login / Logout Button */}
          {user ? (
            <Logout setUser={setUser} />
          ) : (
            <button
              className="bg-black text-white px-5 py-1.5 rounded hover:bg-gray-800 transition"
              onClick={() => document.getElementById("login_modal").showModal()}
            >
              Login
            </button>
          )}
        </div>

        {/* Modals */}
        <Login />
        <Signup />
      </div>
    </div>
  );
}
