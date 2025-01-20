'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/app/components/ui/Navbar';
import Image from 'next/image';

export default function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        discord: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (formData.password.length < 8) {
            setError('Password must be at least 8 characters');
            return;
        }

        console.log('Form submitted:', formData);
        router.push('/welcome');
    };

    return (
        <>
            <Navbar initialBackground={false} />
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#111] relative text-white pb-20">
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

                <div className="relative z-20 max-w-lg w-full bg-black/80 p-10 rounded-lg shadow-lg border border-[#E2E7EA] mt-32">
                    <h2 className="text-4xl font-extrabold text-center mb-4 text-[#72D53C]">
                        Create Your Account
                    </h2>
                    <p className="text-lg text-center text-[#E2E7EA] mb-6">
                        Join us and start making smarter bets with our expert insights.
                    </p>

                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-[#E2E7EA] mb-2">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#222] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#72D53C]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#E2E7EA] mb-2">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#222] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#72D53C]"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#E2E7EA] mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#222] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#72D53C]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#E2E7EA] mb-2">Discord Username</label>
                            <input
                                type="text"
                                name="discord"
                                placeholder="e.g. yourname#1234"
                                value={formData.discord}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#222] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#72D53C]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#E2E7EA] mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#222] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#72D53C]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#E2E7EA] mb-2">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#222] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#72D53C]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#72D53C] text-white py-3 rounded-lg font-semibold hover:bg-[#66c038] transition-all"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="mt-6 text-center text-[#E2E7EA]">
                        <p>Already have an account? 
                            <a href="/logIn" className="text-[#72D53C] font-semibold ml-1 hover:underline">
                                Log in
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
