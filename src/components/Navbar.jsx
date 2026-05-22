import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Features",
      path: "/",
    },
    {
      name: "Benefits",
      path: "/benefits",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "Testimonials",
      path: "/testimonials",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="w-full bg-[#f8f8f8] sticky top-0 z-50">
      <div className="max-w-[1800px] mx-auto h-28 flex items-center justify-between px-6 lg:px-16">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="h-24 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">

          {navLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `px-12 py-12 text-[20px] transition ${
                  isActive
                    ? "bg-[#39c69f] text-white rounded-b-[20px]"
                    : "text-gray-500 hover:text-[#39c69f]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Button */}
        <button className="hidden lg:block bg-[#39c69f] hover:bg-[#27b792] transition text-white text-2xl px-10 py-5 rounded-full">
          REQUEST DEMO
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={34} />
          ) : (
            <Menu size={34} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-6 flex flex-col gap-6">

          {navLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium ${
                  isActive
                    ? "text-[#39c69f]"
                    : "text-gray-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <button className="bg-[#39c69f] text-white py-4 rounded-xl font-semibold">
            REQUEST DEMO
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;