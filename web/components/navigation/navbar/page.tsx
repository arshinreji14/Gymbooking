"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Dumbbell, Calendar, User, LogIn } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/home", label: "Home", icon: <Dumbbell className="w-5 h-5" /> },
    { href: "/gymBooking", label: "Gyms", icon: <Calendar className="w-5 h-5" /> },
    { href: "/profile", label: "Profile", icon: <User className="w-5 h-5" /> },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">
              Iron Paradise
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md flex items-center space-x-2 transition-colors"
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}

            {/* Auth Buttons */}
            <div className="flex items-center space-x-2">
              <Link
                href="/signin"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-2 transition-colors"
              >
                <LogIn className="w-5 h-5" />
                <span>Sign In</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md md:flex items-center space-x-2"
                  onClick={toggleMenu}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}

              {/* Mobile Auth Button */}
              <Link
                href="/signin"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center space-x-2 w-full"
                onClick={toggleMenu}
              >
                <LogIn className="w-5 h-5" />
                <span>Sign In</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
