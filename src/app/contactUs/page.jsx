'use client'
import { useState } from 'react';
import Navbar from '@/app/components/ui/Navbar';

export default function ContactUs() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(null);
        setLoading(true);

        const payload = {
            email,
            message,
        };

        try {
            const response = await fetch('/api/sendInquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setStatus('Message sent successfully! Check your email for confirmation.');
                setEmail('');
                setMessage('');
            } else {
                setStatus('Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('Error sending message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar initialBackground={false} />
            <div
                className="min-h-screen flex flex-col bg-white relative mb-24"
                style={{
                    background: `radial-gradient(circle at top, rgba(114, 213, 60, 0.12) 0%, rgba(255, 255, 255, 0) 60%)`,
                }}
            >
                <h3 className="text-4xl mb-20 font-bold text-center mt-32 text-white">
                    Contact Us
                </h3>
                <div className="flex flex-col max-w-[1200px] mx-auto gap-10">
                    <div className="w-[70%] mx-auto text-justify">
                        <p className="text-3xl font-medium mb-5">
                            Want to know more? We'd be happy to chat with you.
                        </p>
                        <p>
                            Fill out the form below, and we'll get back to you as soon as possible.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="w-[70%] mx-auto flex flex-col gap-5">
                        <input
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="p-4 border border-gray-300 rounded-lg text-black"
                        />
                        <textarea
                            placeholder="Your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="p-4 border border-gray-300 rounded-lg h-32 text-black"
                        ></textarea>
                        <button
                            type="submit"
                            className={`bg-green-500 text-white py-3 px-6 rounded-lg font-semibold text-black ${
                                loading ? 'opacity-50' : ''
                            }`}
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Inquiry'}
                        </button>
                        {status && (
                            <p className={`mt-2 text-center ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                                {status}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
}
