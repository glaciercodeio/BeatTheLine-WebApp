import Image from "next/image";
import Navbar from '@/app/components/ui/Navbar';

export default function AboutUs() {
    return (
        <>
            <Navbar initialBackground={false} />

            <div
                className="min-h-screen flex flex-col bg-white relative "
                style={{
                    background: `radial-gradient(circle at top, rgba(114, 213, 60, 0.12) 0%, rgba(255, 255, 255, 0) 60%)`,
                }}>

                <h3 className="text-4xl font-bold text-center mt-32 text-ellipsis text-white">
                    About us
                </h3>
            </div >
        </>
    );
}
