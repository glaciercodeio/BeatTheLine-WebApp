"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/ui/Navbar";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Here you can implement authentication logic
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to log in");
      }

      console.log("User logged in:", data);
      router.push("/dashboard"); // Redirect to dashboard on success
    } catch (error) {
      alert(error.message); // Show error message
    }
  };

  return (
    <>
      <Navbar initialBackground={false} />
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#111] relative text-white">
        <div className="absolute inset-0">
          <Image
            src="/BTL-Graphics-3.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
          <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-black to-transparent z-10"></div>
        </div>

        <div className="relative z-10 max-w-lg w-full bg-black/80 p-10 rounded-lg shadow-lg border border-[#E2E7EA]">
          <h2 className="text-4xl font-extrabold text-center mb-6 text-[#72D53C]">
            Log In
          </h2>
          <p className="text-lg text-center text-[#E2E7EA] mb-8">
            Access your account and start betting smarter.
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#E2E7EA] mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#222] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#72D53C]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#E2E7EA] mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#222] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#72D53C]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#72D53C] text-white py-3 rounded-lg font-semibold hover:bg-[#66c038] transition-all"
            >
              Log In
            </button>
          </form>

          <div className="mt-6 text-center text-[#E2E7EA]">
            <p>
              Don't have an account?
              <a
                href="/signUp"
                className="text-[#72D53C] font-semibold ml-1 hover:underline"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
