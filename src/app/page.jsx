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
              src="https://www.youtube.com/embed/RLH8GVzFYek"
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
          <section className="p-6 sm:p-12 flex flex-col lg:flex-row items-center justify-center">
            <div className="p-5 lg:w-[40%] text-center lg:text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#72D53C] text-white text-2xl sm:text-3xl w-16 h-16 rounded-full flex items-center justify-center">
                  <FaChartLine />
                </div>
                <h1 className="text-left text-4xl font-semibold mt-7 text-black mb-7">
                  Profit
                </h1>
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl mb-10 text-[#000000]">
                These are some of <br /> our data recorded in <br />{" "}
                <span className="text-[#72D53C]">earnings</span> for the
                previous year.
              </p>

              <div className="text-center mt-5 sm:mt-4 mx-auto">
                <div className="text-5xl sm:text-6xl lg:text-8xl font-regular flex flex-col sm:flex-row items-center justify-center text-[#72D53C]">
                  <span className="mr-0 sm:mr-2">6.09%</span>
                  <div className="text-[#ffffff] text-3xl sm:text-5xl lg:text-6xl mt-4 sm:mt-0 bg-[#72D53C] py-2 px-3 sm:py-1 sm:px-4 rounded-2xl flex justify-center items-center">
                    <FaArrowUp
                      style={{
                        transform: "rotate(45deg)",
                        transition: "transform 0.3s",
                      }}
                    />
                  </div>
                </div>
                <p className="text-xl sm:text-base lg:text-lg text-[#000000] font-semibold mt-2">
                  Our annual profit
                </p>
              </div>
            </div>

            <div className="lg:w-[60%] max-w-2xl relative overflow-hidden">
              {/*<PerformanceChart />*/}
              <Image
                src="/images/ROI-BTL.png"
                alt="BTL ROI"
                layout="responsive"
                width={1024}
                height={768}
                objectFit="cover"
                objectPosition="center"
                quality={90}
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
