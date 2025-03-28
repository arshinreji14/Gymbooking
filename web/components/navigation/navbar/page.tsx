"use client";
import Link from "next/link";
import {  Dumbbell, Calendar, User, LogIn,ShoppingBagIcon } from "lucide-react";

const Navbar: React.FC = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/home", label: "Home", icon: <Dumbbell className="w-8 h-8 text-blue-600" /> },
    { href: "/gymBooking", label: "Gyms", icon: <Calendar className="w-8 h-8 text-green-400" /> },
    { href: "/shope", label: "Shope", icon: <ShoppingBagIcon className="w-8 h-8 text-blue-500" /> },
    { href: "/profile", label: "Profile", icon: <User className="w-8 h-8" /> },
  ];

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <nav className="bg-white shadow-md fixed w-full h-20 z-50 md:top-0 bottom-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className=" items-center justify-between h-16 hidden md:flex">
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
          {/* <div className="md:hidden">
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
          </div> */}
        </div>
        </div>
        {/* Mobile Menu */}
        {/* {isMenuOpen && ( */}
          <div className="md:hidden  ">
          <div className="flex justify-around items-center h-28  pb-10 ">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex flex-col items-center text-gray-600 hover:text-blue-600 md:flex-row md:space-x-2"
          >
            {link.icon}
            <span className=" md:inline">{link.label}</span>
          </Link>
        ))}
      </div>
          </div>
        {/* )} */}
    </nav>
  );
};

export default Navbar;
