import React, { useState, useEffect } from "react";

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

    const [visibleComments, setVisibleComments] = useState(3);
    const [randomColors, setRandomColors] = useState([]);

    const loadMoreComments = () => {
        setVisibleComments((prev) => Math.min(prev + 3, allComments.length));
    };

    useEffect(() => {
        const generatedColors = allComments.map(() => colors[Math.floor(Math.random() * colors.length)]);
        setRandomColors(generatedColors);
    }, []);

    return (
        <div className="mt-12">
            {/* Grid container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
                {allComments.slice(0, visibleComments).map((comment, index) => (
                    <div
                        key={comment.id}
                        className="border border-[#1f1f1f] bg-black text-white py-12 px-20 flex flex-col justify-between h-full"
                    >
                        {/* User info */}
                        <div className="flex items-center mb-4">
                            <div
                                className={`${randomColors[index]} text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl mr-3`}
                                style={{ minWidth: "32px", minHeight: "32px" }}
                            >
                                {comment.user.charAt(0).toUpperCase()}
                            </div>
                            <div className="font-bold text-md">{comment.user}</div>
                        </div>

                        {/* Comment text */}
                        <p className="text-2xl font-semibold mb-4">{comment.text}</p>

                        {/* Date */}
                        <div className="text-sm text-[#727272]">{comment.date}</div>
                    </div>
                ))}
            </div>

            {visibleComments < allComments.length && (
                <button
                    onClick={loadMoreComments}
                    className="block mx-auto mt-8 px-8 py-4 text-sm font-semibold text-white bg-[#000000] hover:bg-white hover:text-black transition-all duration-200"
                >
                    Load More
                </button>

            )}
        </div>
    );
};

export default Comments;
