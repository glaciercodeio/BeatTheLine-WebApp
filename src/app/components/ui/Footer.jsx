import Image from "next/image";
import { FaYoutube, FaDiscord } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="px-8 py-6 sm:px-20 bg-gray-50 dark:bg-[#000]">
            <div className="flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto text-gray-600 dark:text-gray-400">
                <Image
                    src="/BTL-Logo-Stkd-Lt-Mono.png"
                    alt="Twitter"
                    width={130}
                    height={20}
                />
                <div className="flex gap-4 mt-4 sm:mt-0">
                    {/* YouTube icon */}
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        <FaYoutube className="text-white hover:text-gray-400 text-xl" />
                    </a>

                    {/* Discord icon */}
                    <a
                        href="https://discord.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        <FaDiscord className="text-white hover:text-gray-400 text-xl" />
                    </a>
                </div>
                <p className="text-sm text-white">&copy; {new Date().getFullYear()} Beat the line. All rights reserved.</p>
            </div>
        </footer>
    );
}
