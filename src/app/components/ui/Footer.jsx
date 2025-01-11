import Image from "next/image";
import { FaYoutube, FaDiscord } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="px-6 py-8 sm:px-20 bg-gray-50 dark:bg-[#000]">
            <div className="flex flex-col items-center max-w-4xl mx-auto text-gray-600 dark:text-gray-400">
                <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full space-y-6 sm:space-y-0">
                    <div className="sm:order-1">
                        <Image
                            src="/BTL-Logo-Stkd-Lt-Mono.png"
                            alt="Logo"
                            width={130}
                            height={20}
                        />
                    </div>

                    <div className="flex gap-4 sm:order-2">
                        <a
                            href="https://www.youtube.com/@Beattheline"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <FaYoutube className="text-white hover:text-gray-400 text-xl" />
                        </a>
                        <a
                            href="https://discord.gg/RBvpphmxTq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <FaDiscord className="text-white hover:text-gray-400 text-xl" />
                        </a>
                    </div>

                    <div className="flex flex-col sm:order-3 text-center sm:text-left gap-2">
                        <Link href="/termsOfConditions" className="text-sm text-white hover:text-gray-400 transition-colors">
                            Terms and Conditions
                        </Link>
                        <Link href="/privacypolicy" className="text-sm text-white hover:text-gray-400 transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                </div>

                <p className="text-sm text-white mt-6 sm:mt-12 text-center">
                    &copy; {new Date().getFullYear()} Beat the line. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
