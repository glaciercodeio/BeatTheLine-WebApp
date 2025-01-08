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
        {
            id: 6,
            user: "Taylor Brown",
            text: "This platform is top-notch for betting, I highly recommend it!.",
            date: "2024-12-28",
        },
        {
            id: 7,
            user: "Taylor Brown",
            text: "This platform is top-notch for betting, I highly recommend it!.",
            date: "2024-12-28",
        },
        {
            id: 8,
            user: "Taylor Brown",
            text: "This platform is top-notch for betting, I highly recommend it!.",
            date: "2024-12-28",
        },
        {
            id: 9,
            user: "Taylor Brown",
            text: "This platform is top-notch for betting, I highly recommend it!.",
            date: "2024-12-28",
        },
        {
            id: 10,
            user: "Taylor Brown",
            text: "This platform is top-notch for betting, I highly recommend it!.",
            date: "2024-12-28",
        },
        {
            id: 11,
            user: "Taylor Brown",
            text: "This platform is top-notch for betting, I highly recommend it!.",
            date: "2024-12-28",
        },
        {
            id: 12,
            user: "Taylor Brown",
            text: "This platform is top-notch for betting, I highly recommend it!.",
            date: "2024-12-28",
        },
        {
            id: 13,
            user: "Taylor Brown",
            text: "This platform is top-notch for betting, I highly recommend it!.",
            date: "2024-12-28",
        },
        {
            id: 14,
            user: "Taylor Brown",
            text: "This platform is top-notch for betting, I highly recommend it!.",
            date: "2024-12-28",
        },
        {
            id: 15,
            user: "Taylor Brown",
            text: "Hello.",
            date: "2024-12-28",
        },
    ];

    const colors = [
        "bg-[#72D53C]",
        /*  "bg-[#ef4444]",
         "bg-[#10b981]",
         "bg-[#0ea5e9]",
         "bg-[#a855f7]",
         "bg-[#ec4899]",
         "bg-[#eab308]",
         "bg-[#14b8a6]", */
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % allComments.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + allComments.length) % allComments.length);
    };

    return (
        <div className="bg-[#f1f1f1] py-14 pl-12 flex items-center flex-col lg:flex-row">
            {/* Text container */}
            <div className="w-1/3 flex flex-col justify-between h-full">
                {/* Text */}
                <div className="text-[#000000] text-4xl font-semibold">
                    From Data <br />
                    to<span className="text-[#72D53C] font-bold"> Life-Changing</span> <br /> Results.
                </div>

                {/* Buttons */}
                <div className="flex justify-start space-x-4 mt-4">
                    <button
                        onClick={goToPrev}
                        className="bg-black text-white p-3 rounded-full hover:bg-[#72D53C] transition-all"
                    >
                        <FaArrowLeft size={24} />
                    </button>
                    <button
                        onClick={goToNext}
                        className="bg-black text-white p-3 rounded-full hover:bg-[#72D53C] transition-all"
                    >
                        <FaArrowRight size={24} />
                    </button>
                </div>
            </div>

            {/* Cards container */}
            <div className="relative w-2/3 overflow-hidden">
                <div
                    className="flex flex-nowrap space-x-8 transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 632}px)`,
                        width: `${allComments.length * 632}px`,
                    }}
                >
                    {allComments.map((comment, index) => (
                        <div
                            key={comment.id}
                            className="rounded-md bg-[#ffffff] text-white py-8 px-8 flex flex-col justify-between h-72 w-[600px] shrink-0"
                        >
                            {/* User info */}
                            <div className="flex items-center mb-4">
                                <div
                                    className={`${colors[index % colors.length]} text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl mr-3`}
                                >
                                    {comment.user.charAt(0).toUpperCase()}
                                </div>
                                <div className="font-bold text-md text-black">{comment.user}</div>
                            </div>

                            {/* Comments */}
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
