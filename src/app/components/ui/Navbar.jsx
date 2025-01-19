"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ initialBackground = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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

  const isHomePage = pathname === "/";
  const backgroundClass =
    isHomePage && !isScrolled ? "bg-transparent" : "bg-black";
  //const backgroundClass =
  //initialBackground || isScrolled ? "bg-black" : "bg-transparent";

  //const backgroundClass =
  //  initialBackground || isScrolled
  //     ? "bg-black"
  //    : "bg-black bg-opacity-90 dark:bg-transparent shadow-md";

  return (
    <nav
      className={`flex justify-between items-center px-8 py-4 sm:px-20 fixed top-0 left-0 w-full z-30 transition-colors duration-300 ${backgroundClass}`}
    >
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

      <div className="flex items-center gap-4">
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
      </div>
    </nav>
  );
}
