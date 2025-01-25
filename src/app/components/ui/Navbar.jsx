"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ initialBackground = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null); // Reference for the dropdown menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const isHomePage = pathname === "/";
  const backgroundClass =
    isHomePage && !isScrolled ? "bg-transparent" : "bg-black";

  return (
    <nav
      className={`flex justify-between items-center px-8 py-4 sm:px-20 fixed top-0 left-0 w-full z-30 transition-colors duration-300 ${backgroundClass}`}
    >
      {/* Logo */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image
            src="/BTL-Logo-Horz-Lt-Solid.png"
            alt="Website Logo"
            width={130}
            height={50}
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-20 text-lg font-medium">
        <li>
          <Link href="/" className="hover:text-[#72D53C] text-white">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/subscriptions"
            className="hover:text-[#72D53C] text-white"
          >
            Subscriptions
          </Link>
        </li>
        <li>
          <Link href="/aboutUs" className="hover:text-[#72D53C] text-white">
            About
          </Link>
        </li>
        <li>
          <Link href="/contactUs" className="hover:text-[#72D53C] text-white">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="relative sm:hidden" ref={dropdownRef}>
        <button
          className="text-white text-2xl"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {isDropdownOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <ul className="absolute right-0 mt-2 bg-black text-white shadow-lg rounded-lg w-48">
            <li className="border-b border-gray-700">
              <Link
                href="/"
                onClick={() => setIsDropdownOpen(false)}
                className="block px-4 py-2 hover:bg-gray-800"
              >
                Home
              </Link>
            </li>
            <li className="border-b border-gray-700">
              <Link
                href="/subscriptions"
                onClick={() => setIsDropdownOpen(false)}
                className="block px-4 py-2 hover:bg-gray-800"
              >
                Subscriptions
              </Link>
            </li>
            <li className="border-b border-gray-700">
              <Link
                href="/aboutUs"
                onClick={() => setIsDropdownOpen(false)}
                className="block px-4 py-2 hover:bg-gray-800"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contactUs"
                onClick={() => setIsDropdownOpen(false)}
                className="block px-4 py-2 hover:bg-gray-800"
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>

      {/* Desktop Buttons

      <div className="hidden sm:flex items-center gap-4">
        <Link href="/logIn">
          <button className="px-4 py-2 text-sm font-medium text-white border border-[#333333] rounded hover:bg-[#131313]">
            Log in
          </button>
        </Link>
        <Link href="/signUp">
          <button className="px-4 py-2 text-sm font-medium text-black bg-white rounded hover:bg-gray-100">
            Sign up
          </button>
        </Link>
      </div>*/}

      <div className="hidden sm:flex items-center gap-4">
        <Link href="/logIn">
          <button className="">
          </button>
        </Link>
        <Link href="/signUp">
          <button className="">
          </button>
        </Link>
      </div>
    </nav>
  );
}
