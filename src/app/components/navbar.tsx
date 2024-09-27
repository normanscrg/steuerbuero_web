"use client";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-primary z-50 shadow-lg">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        {/* Tanja Scheurig Steuerberater - mit Karten-Hintergrund */}
        <div className="bg-white/90 text-xl font-bold text-accent px-4 py-2 rounded-lg shadow-md">
          Tanja Scheurig Steuerberater
        </div>

        {/* Hamburger Icon for mobile view */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-link focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="/"
              className="text-link hover:bg-[#e6d3b5] hover:text-white px-3 py-2 rounded transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/leistungen"
              className="text-link hover:bg-[#e6d3b5] hover:text-white px-3 py-2 rounded transition"
            >
              Leistungen
            </a>
          </li>
          <li>
            <a
              href="/karriere"
              className="text-link hover:bg-[#e6d3b5] hover:text-white px-3 py-2 rounded transition"
            >
              Karriere
            </a>
          </li>
          <li>
            <a
              href="/kontakt"
              className="text-link hover:bg-[#e6d3b5] hover:text-white px-3 py-2 rounded transition"
            >
              Kontakt
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden absolute top-16 left-0 w-full bg-primary text-center space-y-4 py-4 shadow-lg">
            <li>
              <a
                href="/"
                className="block text-link hover:bg-[#e6d3b5] hover:text-white px-3 py-2 rounded transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/leistungen"
                className="block text-link hover:bg-[#e6d3b5] hover:text-white px-3 py-2 rounded transition"
              >
                Leistungen
              </a>
            </li>
            <li>
              <a
                href="/karriere"
                className="block text-link hover:bg-[#e6d3b5] hover:text-white px-3 py-2 rounded transition"
              >
                Karriere
              </a>
            </li>
            <li>
              <a
                href="/kontakt"
                className="block text-link hover:bg-[#e6d3b5] hover:text-white px-3 py-2 rounded transition"
              >
                Kontakt
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
