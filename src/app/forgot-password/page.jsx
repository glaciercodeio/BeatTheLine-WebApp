"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/ui/Navbar";
import Image from "next/image";
import { resetPassword } from "@/app/auth/action";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");
    try {
      const formData = new FormData();
      formData.append("email", email);
      await resetPassword(formData);
      setMessage("A reset link will be sent to your email shortly.");
    } catch (err) {
      setError("Failed to send reset link. Please try again.");
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
            Forgot Password
          </h2>
          <p className="text-lg text-center text-[#E2E7EA] mb-8">
            Enter your email below to receive a password reset link.
          </p>

          {message && <p className="text-green-500 text-center mb-4">{message}</p>}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-[#E2E7EA] mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#222] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#72D53C]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#72D53C] text-white py-3 rounded-lg font-semibold hover:bg-[#66c038] transition-all"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-6 text-center text-[#E2E7EA]">
            <p>
              Remember your password?
              <a
                href="/logIn"
                className="text-[#72D53C] font-semibold ml-1 hover:underline"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
