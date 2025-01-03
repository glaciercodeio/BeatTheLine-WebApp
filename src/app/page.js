import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaBasketballBall, FaArrowRight, FaCircle, FaEnvelope, FaInfoCircle, FaHome } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 sm:px-20 bg-black bg-opacity-90 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-30">
        <div className="flex items-center gap-4">
          <Image
            src="/BTL-Logo-Horz-Lt-Solid.png"
            alt="Website Logo"
            width={130}
            height={50}
          />
        </div>

        {/* <ul className="hidden sm:flex gap-6 text-sm font-medium">
          <li>
            <a
              href="#home"
              className="hover:underline hover:underline-offset-4 text-white">
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:underline hover:underline-offset-4 text-white">
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:underline hover:underline-offset-4 text-white">
              Contact
            </a>
          </li>
        </ul> */}

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-medium text-white border border-[#333333] rounded hover:bg-[#131313]">
            Log in
          </button>
          <button className="px-4 py-2 text-sm font-medium text-black bg-white  rounded hover:bg-gray-100">
            Sign up
          </button>
        </div>
      </nav>

      {/* Header */}
      <header className="relative flex items-center justify-start h-[650px] sm:h-128 w-full px-8 sm:px-20 text-white text-center sm:text-left mt-[57px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-10"></div>
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

        <div className="relative z-20 max-w-lg">
          <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight mb-4">
            Welcome to Beat the line
          </h1>
          <p className="text-xl sm:text-2xl mb-8">
            A place to make the best bets.
          </p>

          {/* Contenedor de los botones */}
          <div className="flex gap-4 mb-8">
            <button className="border border-[#E2E7EA] text-[#E2E7EA] px-6 py-2 rounded-md hover:bg-[#E2E7EA] hover:text-black transition-colors">
              Learn More
            </button>

            <button className="bg-[#72D53C] text-white px-6 py-2 rounded-md hover:bg-[#66c038] transition-colors">
              Get Started
            </button>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-start gap-6 text-2xl text-white mt-16">
            {/* Icono de facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaFacebookF className="text-white hover:text-gray-400 text-xl" />
            </a>
            {/* Icono de twitter */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaTwitter className="text-white hover:text-gray-400 text-xl" />
            </a>
            {/* Icono de instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaInstagram className="text-white hover:text-gray-400 text-xl" />
            </a>
          </div>
        </div>

        {/*   <div className="absolute pt-10 top-0 right-0 w-[350px] h-full px-4 py-0 text-white z-20">
         
          <div className="bg-[#0f0f0f] bg-opacity-70 backdrop-blur-sm p-6 mb-4 rounded-md">
            <h3 className="text-lg font-semibold text-white mb-4">Basketball</h3>

         
            <div className="flex flex-col mb-4">
         
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-normal text-white">Team A</span>
                </div>
                <span className="text-white text-sm">89</span>
              </div>

           
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-normal text-white">Team B</span>
                </div>
                <span className="text-white text-sm">76</span>
              </div>
            </div>

      
            <div className="border-t border-[#5f5f5f] mt-4 pt-4 flex justify-between items-center">
              <span className="text-white text-sm">Ver más</span>
              <FaArrowRight className="text-white text-sm" />
            </div>
          </div>
        </div> */}

        <div className="absolute top-1/3 right-10 flex flex-col gap-8 items-center z-20">
          {[
            { icon: <FaHome />, text: "Home", href: "#home" },
            { icon: <FaInfoCircle />, text: "About", href: "#about" },
            { icon: <FaEnvelope />, text: "Contact", href: "#contact" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="relative flex items-center group"
            >
              {/* Contenedor iconos header */}
              <div className="w-8 h-8 flex items-center justify-center border border-[#7a7a7a] rounded-full">
                <div className="text-xl text-[#ffffff]">{item.icon}</div>
              </div>
              {/* Texto emergente */}
              <span
                className="absolute right-14 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out text-white px- py-1 rounded-lg"
              >
                {item.text}
              </span>
            </a>
          ))}
        </div>
      </header>

      <div className="bg-[#111] py-6">
        <div className="overflow-hidden w-full">
          <div className="flex animate-marquee w-full gap-10 items-center">
            <span className="text-3xl font-normal text-white tracking-widest">NBA</span>
            <FaCircle className="text-white text-4xl mx-2" />
            <span className="text-3xl font-normal text-white tracking-widest">NFL</span>
            <FaCircle className="text-white text-4xl mx-2" />
            <span className="text-3xl font-normal text-white tracking-widest">MLB</span>
            <FaCircle className="text-white text-4xl mx-2" />
            <span className="text-3xl font-normal text-white tracking-widest">NHL</span>
            <FaCircle className="text-white text-4xl mx-2" />
            <span className="text-3xl font-normal text-white tracking-widest">MLS</span>
            <FaCircle className="text-white text-4xl mx-2" />
            <span className="text-3xl font-normal text-white tracking-widest">UFC</span>
            <FaCircle className="text-white text-4xl mx-2" />
            <span className="text-3xl font-normal text-white tracking-widest">PGA</span>
            <FaCircle className="text-white text-4xl mx-2" />
            <span className="text-3xl font-normal text-white tracking-widest">NCAA</span>

            <FaCircle className="text-white text-4xl mx-2" />
            <span className="text-3xl font-normal text-white tracking-widest">NBA</span>
            <FaCircle className="text-white text-4xl mx-2" />
            <span className="text-3xl font-normal text-white tracking-widest">NFL</span>
            <FaCircle className="text-white text-4xl mx-2" />
            <span className="text-3xl font-normal text-white tracking-widest">MLB</span>
            <FaCircle className="text-white text-4xl mx-2" />
            <span className="text-3xl font-normal text-white tracking-widest">NHL</span>
            <FaCircle className="text-white text-4xl mx-2" />
            <span className="text-3xl font-normal text-white tracking-widest">MLS</span>
            <FaCircle className="text-white text-4xl mx-2" />
            <span className="text-3xl font-normal text-white tracking-widest">UFC</span>
            <FaCircle className="text-white text-4xl mx-2" />
            <span className="text-3xl font-normal text-white tracking-widest">PGA</span>
            <FaCircle className="text-white text-4xl mx-2" />
            <span className="text-3xl font-normal text-white tracking-widest">NCAA</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 px-8 py-16 sm:px-20 bg-white dark:bg-[#E2E7EA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8"></h2>
          <p className="text-gray-700 dark:text-gray-300">
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-8 py-6 sm:px-20 bg-gray-50 dark:bg-[#000]">
        <div className="flex justify-between items-center max-w-4xl mx-auto text-gray-600 dark:text-gray-400">
          <Image
            src="/BTL-Logo-Stkd-Lt-Mono.png"
            alt="Twitter"
            width={130}
            height={20}
          />
          <div className="flex gap-4">
            {/* Icono de facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaFacebookF className="text-white hover:text-gray-400 text-xl" />
            </a>
            {/* Icono de twitter */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaTwitter className="text-white hover:text-gray-400 text-xl" />
            </a>
            {/* Icono de instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaInstagram className="text-white hover:text-gray-400 text-xl" />
            </a>
          </div>
          <p className="text-sm text-white">&copy; {new Date().getFullYear()} Beat the line. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};