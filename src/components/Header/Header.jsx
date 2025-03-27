import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="7.png" className="mr-3 h-12" alt="Logo" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>

          {/* Navigation Links */}
          <div
            className={`lg:flex items-center w-full lg:w-auto transition-all duration-300 ease-in-out ${
              isMenuOpen ? "block" : "hidden"
            } lg:block`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 font-medium">
              {["Home", "About", "Contact", "Github"].map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`} // ✅ Fix for "Home"
                    className={({ isActive }) =>
                      `block py-2 px-4 duration-200 border-b lg:border-0 ${
                        isActive
                          ? "underline text-orange-900"
                          : "hover:text-orange-500"
                      }`
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Login / Get Started Buttons */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/login"
              className="text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-2 mr-2"
            >
              Log in
            </Link>
            <Link
              to="/getstarted"
              className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
