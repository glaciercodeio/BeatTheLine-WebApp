import Image from "next/image";
import Navbar from '@/app/components/ui/Navbar';

export default function AboutUs() {
    return (
        <>
            <Navbar initialBackground={false} />

            <div
                className="min-h-screen flex flex-col bg-white relative mb-24"
                style={{
                    background: `radial-gradient(circle at top, rgba(114, 213, 60, 0.12) 0%, rgba(255, 255, 255, 0) 60%)`,
                }}>

                <h3 className="text-4xl mb-20 font-bold text-center mt-32 text-ellipsis text-white">
                    About Us
                </h3>

                <div className="flex flex-col max-w-[1200px] mx-auto gap-10 ">

                    <div className="w-[70%] mx-auto mb-14 text-justify">
                        <p className="text-3xl font-medium mb-5">Welcome to Beat The Line, where passion for sports meets precision in data-driven betting.</p>
                        <p><span className="font-semibold text-xl text-[#72D53C]">Data Driven Betting.</span> Based in the U.S., we combine cutting-edge data analytics, advanced algorithms, and mathematical strategies to help our partners outsmart the markets. </p>
                        <br />
                        <p>Our approach is built on more than just numbers—we believe in building lasting relationships with the people who trust us. </p>
                        <p>At Beat The Line, we’re not just about results; we’re about empowering our partners with insights, strategies, and support to help them succeed. <span className="font-semibold text-xl text-[#72D53C]">Beating The Market.</span></p>
                        <br />
                        <p>With a relentless drive for innovation and a commitment to staying one step ahead, we focus on <span className="font-semibold text-xl text-[#72D53C]">Identifying Edges</span> to make smarter betting accessible and rewarding for everyone. Together, we can beat the line and achieve greatness.</p>

                    </div>

                    <div className="">
                        <h3 className="text-4xl mb-20 font-bold text-center mt-8 text-ellipsis text-white">
                            Our Team
                        </h3>
                        <div className="w-[100%] flex gap-6">
                            <div>
                                <Image
                                    src="/BTL-SIG-RICKY.png"
                                    alt="Website Logo"
                                    width={530}
                                    height={50}
                                />
                            </div>

                            <div>
                                <Image
                                    src="/BTL-SIG-JACOB.png"
                                    alt="Website Logo"
                                    width={530}
                                    height={50}
                                />
                            </div>

                            <div>
                                <Image
                                    src="/BTL-SIG-JOEL.png"
                                    alt="Website Logo"
                                    width={530}
                                    height={50}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
