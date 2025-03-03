"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { updatePassword } from "@/app/auth/actions";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const accessToken = searchParams.get("access_token");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");
  
    try {
      const formData = new FormData();
      formData.append("email", email);
      const response = await resetPassword(formData);
  
      if (response.success) {
        setMessage(response.message);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError("Failed to send reset link. Please try again.");
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#111] text-white">
      <h2 className="text-4xl font-extrabold text-[#72D53C] mb-6">Reset Password</h2>
      <p className="text-lg text-[#E2E7EA] mb-8">Enter your new password below.</p>

      {message && <p className="text-green-500">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#222] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#72D53C]"
        />
        <button
          type="submit"
          className="w-full bg-[#72D53C] text-white py-3 rounded-lg font-semibold hover:bg-[#66c038] transition-all"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
