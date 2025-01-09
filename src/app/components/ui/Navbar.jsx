'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <nav
            className={`flex justify-between items-center px-8 py-4 sm:px-20 fixed top-0 left-0 w-full z-30 transition-colors duration-300 ${isScrolled ? "bg-black" : "bg-transparent"
                }`}
        >
            <div className="flex items-center gap-4">
                <Image
                    src="/BTL-Logo-Horz-Lt-Solid.png"
                    alt="Website Logo"
                    width={130}
                    height={50}
                />
            </div>

            <ul className="hidden sm:flex gap-20 text-lg font-medium">
                <li>
                    <a
                        href="#home"
                        className="hover:text-[#72D53C] text-white">
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#about"
                        className="hover:text-[#72D53C] text-white">
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className="hover:text-[#72D53C] text-white">
                        Contact
                    </a>
                </li>
            </ul>

            <div className="flex items-center gap-4">
                <button className="px-4 py-2 text-sm font-medium text-white border border-[#333333] rounded hover:bg-[#131313]">
                    Log in
                </button>
                <button className="px-4 py-2 text-sm font-medium text-black bg-white  rounded hover:bg-gray-100">
                    Sign up
                </button>
            </div>
        </nav>
    );
}
