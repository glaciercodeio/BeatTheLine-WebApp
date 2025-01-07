import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Comments = () => {
    const allComments = [
        {
            id: 1,
            user: "John Doe",
            text: "This website is highly secure, I trust it completely.",
            date: "2025-01-03",
        },
        {
            id: 2,
            user: "Jane Smith",
            text: "Great website, very reliable and safe to use.",
            date: "2025-01-02",
        },
        {
            id: 3,
            user: "Chris Johnson",
            text: "Excellent site! I’ll definitely share it with my friends.",
            date: "2025-01-01",
        },
        {
            id: 4,
            user: "Alex Lee",
            text: "It’s a solid betting site, I feel safe using it.",
            date: "2024-12-30",
        },
        {
            id: 5,
            user: "Taylor Brown",
            text: "This platform is top-notch for betting, I highly recommend it!.",
            date: "2024-12-28",
        },
    ];

    const colors = [
        "bg-[#ef4444]",
        "bg-[#10b981]",
        "bg-[#0ea5e9]",
        "bg-[#a855f7]",
        "bg-[#ec4899]",
        "bg-[#eab308]",
        "bg-[#14b8a6]",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        if (currentIndex < allComments.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const goToPrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="mt-12 bg-[#f1f1f1] py-14 pl-12 flex items-center">
            {/* Contenedor text */}
            <div className="w-1/3 flex flex-col ">
                {/* Text */}
                <div className="text-[#000000] text-4xl font-semibold">
                    From Data <br /> to Life-Changing <br /> Results.
                </div>

                {/* Buttons */}
                <div className="flex justify-start space-x-4 mt-4">
                    <button
                        onClick={goToPrev}
                        className="bg-black text-white p-3 rounded-full hover:bg-[#444] transition-all"
                    >
                        <FaArrowLeft size={24} />
                    </button>
                    <button
                        onClick={goToNext}
                        className="bg-black text-white p-3 rounded-full hover:bg-[#444] transition-all"
                    >
                        <FaArrowRight size={24} />
                    </button>
                </div>
            </div>

            {/* Contenedor cards  */}
            <div className="relative w-2/3 overflow-hidden">
                {/* Cards */}
                <div
                    className="flex space-x-8 transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 300}px)` }}
                >
                    {allComments.map((comment, index) => (
                        <div
                            key={comment.id}
                            className="rounded-md bg-[#ffffff] text-white py-8 px-8 flex flex-col justify-between h-72 w-[500px]"
                        >
                            {/* User info */}
                            <div className="flex items-center mb-4">
                                <div
                                    className={`${colors[index % colors.length]} text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl mr-3`}
                                    style={{ minWidth: "32px", minHeight: "32px" }}
                                >
                                    {comment.user.charAt(0).toUpperCase()}
                                </div>
                                <div className="font-bold text-md text-black">{comment.user}</div>
                            </div>

                            {/* Comment text */}
                            <p className="text-2xl font-semibold mb-4 text-black">{comment.text}</p>

                            {/* Date */}
                            <div className="text-sm text-[#727272]">{comment.date}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Comments;
