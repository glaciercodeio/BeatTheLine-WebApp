'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaBasketballBall, FaArrowRight, FaCircle, FaEnvelope, FaInfoCircle, FaHome, FaYoutube, FaDiscord } from 'react-icons/fa';
import Comments from '@/app/components/features/comments/CommenList';
import Link from "next/link";

export default function Home() {
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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="relative flex items-center justify-center sm:justify-start h-[800px] sm:h-128 w-full px-8 sm:px-20 text-white text-center sm:text-left">
        <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-black to-transparent z-10"></div>

        <div className="absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-black to-transparent z-10"></div>

        <div className="absolute inset-0 z-0">
          <Image
            src="/BTL-Graphics-3.png"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </div>

        <div className="relative z-20 max-w-lg px-4 sm:px-0">
          <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight mb-4">
            Welcome to Beat the line
          </h1>
          <p className="text-xl sm:text-2xl mb-8">
            A place to make the best bets.
          </p>

          {/* Buttons container */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="border border-[#E2E7EA] text-[#E2E7EA] px-6 py-2 rounded-md hover:bg-[#E2E7EA] hover:text-black transition-colors">
              Learn More
            </button>

            <Link href="/subscriptions">
              <button className="bg-[#72D53C] text-white px-6 py-2 rounded-md hover:bg-[#66c038] transition-colors">
                Get Started
              </button>
            </Link>
          </div>

          {/* Social media */}
          <div className="flex justify-center sm:justify-start gap-6 text-2xl text-white mt-16">
            {/* Facebook icon */}
            {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaFacebookF className="text-white hover:text-gray-400 text-xl" />
            </a> */}
            {/* Twitter icon */}
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaTwitter className="text-white hover:text-gray-400 text-xl" />
            </a> */}
            {/* Instagram icon */}
            {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaInstagram className="text-white hover:text-gray-400 text-xl" />
            </a> */}
            {/* YouTube icon */}
            <a
              href="https://www.youtube.com/@Beattheline"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaYoutube className="text-white hover:text-gray-400 text-xl" />
            </a>

            {/* Discord icon */}
            <a
              href="https://discord.gg/RBvpphmxTq"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaDiscord className="text-white hover:text-gray-400 text-xl" />
            </a>
          </div>
        </div>
      </header>

      <div className="bg-[#111] py-4">
        <div className="overflow-hidden w-full">
          <div className="flex animate-marquee items-center gap-10">
            <span className="text-3xl font-normal text-white tracking-widest">
              <img src="/MLS.png" alt="MLS Logo" className="inline-block w-20 mr-[300px]" />
            </span>
            <span className="text-3xl font-normal text-white tracking-widest">
              <img src="/NBA.png" alt="NBA Logo" className="inline-block w-20 mr-[300px]" />
            </span>
            <span className="text-3xl font-normal text-white tracking-widest">
              <img src="/NHL.svg" alt="NHL Logo" className="inline-block w-32 mr-[300px]" />
            </span>
            <span className="text-3xl font-normal text-white tracking-widest">
              <img src="/beis.svg" alt="Baseball Logo" className="inline-block w-20 mr-[300px]" />
            </span>
            <span className="text-3xl font-normal text-white tracking-widest">
              <img src="/NFL.svg" alt="NFL Logo" className="inline-block w-20 mr-[300px]" />
            </span>

            <span className="text-3xl font-normal text-white tracking-widest">
              <img src="/MLS.png" alt="MLS Logo" className="inline-block w-20 mr-[300px]" />
            </span>
            <span className="text-3xl font-normal text-white tracking-widest">
              <img src="/NBA.png" alt="NBA Logo" className="inline-block w-20 mr-[300px]" />
            </span>
            <span className="text-3xl font-normal text-white tracking-widest">
              <img src="/NHL.svg" alt="NHL Logo" className="inline-block w-32 mr-[300px]" />
            </span>
            <span className="text-3xl font-normal text-white tracking-widest">
              <img src="/beis.svg" alt="Baseball Logo" className="inline-block w-20 mr-[300px]" />
            </span>
            <span className="text-3xl font-normal text-white tracking-widest">
              <img src="/NFL.svg" alt="NFL Logo" className="inline-block w-20 mr-[300px]" />
            </span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 bg-white dark:bg-[#E2E7EA]">
        {/* Comments section */}
        <section className="">
          <Comments />
        </section>
      </main>
    </div>
  );
};