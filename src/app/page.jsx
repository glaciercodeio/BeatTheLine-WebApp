"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaBasketballBall,
  FaArrowRight,
  FaCircle,
  FaEnvelope,
  FaInfoCircle,
  FaHome,
  FaYoutube,
  FaDiscord,
  FaArrowUp,
  FaChartLine,
} from "react-icons/fa";
import Comments from "@/app/components/features/comments/CommenList";
import PerformanceChart from "@/app/components/features/comments/PerformanceChart";
import Link from "next/link";
import Navbar from "@/app/components/ui/Navbar";

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
    <>
      <Navbar initialBackground={false} />

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
            <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight mb-4 [text-shadow:_2px_2px_0_rgb(0_0_0)] [webkit-text-stroke:2px_black]">
              Welcome to Beat The Line
            </h1>
            {/* <p className="bg-[#424040] text-white border-black text-2xl px-6 py-2 rounded-md transition-colors">*/}
            <p className="text-white text-2xl [text-shadow:_2px_2px_0_rgb(0_0_0)] [webkit-text-stroke:1px_black]">
              We find the edge so you don’t have to.
            </p>

            <br />

            {/* Buttons container */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/aboutUs">
                <button className="bg-white text-black border border-[#72D53C] px-6 py-2 rounded-md hover:bg-[#72D53C] hover:text-white transition-colors">
                  Learn More
                </button>
              </Link>

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
              {/*<a
                href="https://www.youtube.com/@Beattheline"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaYoutube className="text-white hover:text-gray-400 text-xl" />
              </a>
               */}
              {/* Discord icon */}
              {/*
              <a
                href="https://discord.gg/RBvpphmxTq"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaDiscord className="text-white hover:text-gray-400 text-xl" />
              </a>*/}
            </div>
          </div>
        </header>

        {/*<div className="bg-[#111] py-4">
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
            </div>*/}

        {/* Video Section */}
        <section className="p-6 sm:p-12 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-36 bg-[#f1f1f1] text-black">
          <div className="lg:w-[30%] flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
              Follow Us!
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-4 text-center lg:text-left">
              Explore our social media content for additional resources as well
              as tips, tricks, and market analysis directly from
              the BTL founders.
            </p>
            {/* Social media */}
            <div className="flex gap-6 text-3xl mt-6">
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
                <FaYoutube className="text-black hover:text-gray-400" />
              </a>

              {/* Discord icon */}
              <a
                href="https://discord.gg/RBvpphmxTq"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaDiscord className="text-black hover:text-gray-400" />
              </a>
            </div>
          </div>

          <div className="lg:w-[55%] flex justify-center">
            <iframe
              className="w-full aspect-video rounded-lg"
              src="https://www.youtube.com/embed/kE3Upl6aCwk"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Main content */}
        <main className="flex-1 bg-white dark:bg-[#ffffff]">
          {/* Chart section */}
          <section className="p-3 sm:p-12 flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Left Column (Bigger Proportion) */}
            <div className="flex flex-col gap-6 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 items-center w-full lg:w-[40%]">
              <div className="bg-[#72D53C] text-gray-900  inline-flex items-center gap-1 p-6 sm:p-7 lg:p-8 rounded-full shadow-md">
                <span className="text-2xl sm:text-2xl lg:text-3xl xl:text-5xl">
                  💰
                </span>
                <span className="font-bold text-2xl sm:text-2xl lg:text-3xl xl:text-5xl">
                  Profit:
                </span>
                <span className="text-2xl sm:text-2xl lg:text-3xl xl:text-5xl">
                  $166,997.54
                </span>
              </div>

              <div className="bg-[#72D53C] text-gray-900  inline-flex items-center gap-1 p-6 sm:p-7 lg:p-8 rounded-full shadow-md">
                <span className="text-2xl sm:text-2xl lg:text-3xl xl:text-5xl">
                  📈
                </span>
                <span className="font-bold text-2xl sm:text-2xl lg:text-3xl xl::text-5xl">
                  ROI:
                </span>
                <span className="text-2xl sm:text-2xl lg:text-3xl xl:text-5xl">
                  +6.09%
                </span>
              </div>

              <div className="text-center max-w-md mx-auto">
                <p className="text-gray-900 text-3xl font-semibold">
                  *Assumes Betting to Win $100 on all Bets
                </p>
              </div>
            </div>

            {/* Right Column (Chart) */}
            <div className="w-full lg:w-[60%] max-w-5xl flex justify-center">
              <Image
                src="/images/roi-chart/Chart.jpg"
                alt="BTL ROI"
                layout="responsive"
                width={1920}
                height={1080}
                objectFit="cover"
                objectPosition="center"
                quality={100}
                className="rounded-lg shadow-lg"
              />
            </div>
          </section>

          {/* Comments section */}
          <section className="">
            <Comments />
          </section>
        </main>
      </div>
    </>
  );
}
