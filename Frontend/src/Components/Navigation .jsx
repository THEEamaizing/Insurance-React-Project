import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for the menu

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-lg font-bold text-gray-900 dark:text-white">
          WELCOME JUBILEE
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300">
          <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
          <li><a href="/About" className="hover:text-blue-500 transition">About</a></li>
          <li><a href="/Products" className="hover:text-blue-500 transition">Products</a></li>
          <li><a href="/Vision" className="hover:text-blue-500 transition">Vision</a></li>
          <li><a href="/Contract" className="hover:text-blue-500 transition">Contract</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-2/3 h-full bg-white dark:bg-gray-900 shadow-lg p-6`}
      >
        <button
          className="absolute top-4 right-4 text-gray-700 dark:text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        <ul className="flex flex-col gap-6 mt-10 text-gray-700 dark:text-gray-300">
          <li><a href="/" className="hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="/About" className="hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="/Products" className="hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>Products</a></li>
          <li><a href="/Vision" className="hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>Vision</a></li>
          <li><a href="/Contract" className="hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>Contract</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

  
  