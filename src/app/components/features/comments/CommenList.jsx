import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const calculateFontSize = (text) => {
    const baseSize = 16;  // Base font size in pixels
    const maxLength = 1000; // Define max length to determine scaling

    if (text.length > maxLength) {
        return `${baseSize - 4}px`; // Reduce font size for longer text
    } else if (text.length > 200) {
        return `${baseSize - 2}px`;
    } else {
        return `${baseSize}px`; // Default size
    }
};

const Comments = () => {
    const allComments = [
        {
            id: 1,
            user: "Jacob W.",
            text: "BTL makes high-volume, plus-EV sports betting accessible for busy professionals who don’t have the time or resources to find their own bets. With their system, it’s truly plug-and-play, and the results speak for themselves.",
            date: "2025-01-23",
        },
        {
            id: 2,
            user: "Caroline W.",
            text: "I've been a betting participant with Beat The Line for several months. I made an initial investment and I am happy to say not only have I recouped my investment quickly, I've earned more than I thought possible on a monthly basis. The best advice I received was consistency is key. I encourage others to get involved. Beat the Line provides you with all the tools you need in order to be successful. ",
            date: "2025-01-23",
        },
        {
            id: 3,
            user: "Karl K.",
            text: "I have been using BTL for one year now. I can say without a doubt they are the best in the business. The results speak for themselves. The freedoms this type of return on investment provides makes it a no brainer. You could not make the process simpler or easier.",
            date: "2025-01-23",
        },
        {
            id: 4,
            user: "Brandon P.",
            text: "I began working with BTL in early 2023 and the company has not disappointed. The returns on investment and breadth of options for investment are second to none. I worked full time while utilizing BTL as a side hustle, but it quickly turned into a significant portion of my income for the year. They have a streamlined process that is always updating to find the most profitable avenues available for its clientele. I would certainly recommend BTL to anyone with any amount of free time available and access to a phone, Too Easy! ",
            date: "2025-01-23",
        },
        {
            id: 5,
            user: "Jake S.",
            text: "I’ve been a partner with BTL now for a little over a year and this is something I’ve been looking for  long time. It allows freedom and flexibility with ROI that rivals Wall Street right from your couch, what’s better than that?! The ease of use, explanation of processes, and access to support are all things that will allow anybody to find success when following the formula and systems in place.",
            date: "2025-01-23",
        },
        {
            id: 6,
            user: "Areina S.",
            text: "I was initially skeptical about sports betting as I am not well versed in the world of sports, but BTL made it so simple that anyone can do it! They have a tried and true method to increase your ROI, you only need to take the plunge! You’ll be very happy you did. ",
            date: "2025-01-23",
        },
        {
            id: 7,
            user: "Bob R.",
            text: "I've been using Beat The Line for just over a year now, and it’s been both profitable and eye opening.  My son introduced me to BTL, and at first, I was skeptical - but after seeing the consistent results he was achieving, I decided to give it a try. I’ve mainly bet on NBA and WNBA games, but I'm encouraged by BTL's ongoing research into other sports, which they've added to their offerings as they've grown. What I love about BTL is that they've shown me that it's possible to win at sports betting, and placing bets has become part of my daily routine. By partnering with BTL, I've been able to achieve a level of success in sports betting that I never thought possible. ",
            date: "2025-01-23",
        },
        {
            id: 8,
            user: "Easton A.",
            text: "BTL provides a premier service with 100% transparency and an amazing track record. With consistent betting over the last 9 months I’ve been able to increase my bankroll ~4x. This system has allowed me to pursue other interests and even help pay for flight school. My only regret is I did not start with more capital. ",
            date: "2025-01-23",
        },
        {
            id: 9,
            user: "Nathan G.",
            text: "I have been using BTL for 3 months now and they are the best! If you have the work ethic and drive you can make some big money with them! I would definitely recommend it to anyone looking into sports betting. I never did any betting before I started with BTL so that says a lot!",
            date: "2025-01-23",
        },
        {
            id: 10,
            user: "Aidan G.",
            text: "I’ve been betting with BTL for almost a year now and I couldn’t recommend it more. I have a demanding full time job, but I nevertheless stay consistent and turned BTL into a profitable side hustle that really helped me when I needed it!",
            date: "2025-01-23",
        },
        {
            id: 11,
            user: "Jonathan J.",
            text: "BTL has created a consistent way to generate income from sports betting. They have shown through the years that their approach mitigates risk and maximizes profitability. It is a blessing to be a part of it all.",
            date: "2025-01-23",
        },
        {
            id: 12,
            user: "Mike C.",
            text: "Joining BTL has been a life changing experience for me financially. The group has been a great help since starting my sports betting journey with them. I would recommend BTL to anybody who is looking for a second source of income or to feel more secure financially. As long as you put in the work and dedication the rewards will be astounding!",
            date: "2025-01-23",
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
                <div className="flex justify-start space-x-4 mt-6">
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
                            <p className="text-2xl font-regular mb-4 text-black text-xs"
                            style={{fontSize: calculateFontSize(comment.text),}}>{comment.text}</p>

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
