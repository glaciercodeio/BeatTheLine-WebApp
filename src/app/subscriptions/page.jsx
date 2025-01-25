import React from "react";
import Navbar from "@/app/components/ui/Navbar";
export const dynamic = "force-dynamic";

const plans = [
    {
        title: "NFL WEEK PACKAGE ",
        price: "34.99",
        description: "> 20-30 plays a week",
        features: ["Mainly player props", "Include derivatives main markets (lower limit bets)"],
        link: "https://www.whop.com/beattheline-nfl/"
    },
    {
        title: "NCAA Men’s Basketball WEEK PACKAGE ",
        price: "34.99",
        description: "> 20-30 plays a week",
        features: ["Mainly player props", "One main market a day + derivatives main markets"],
        link: "https://whop.com/beattheline-ncaab/"
    },
    {
        title: "NCAA Men’s Football WEEK PACKAGE ",
        price: "24.99",
        description: "> 10-20 plays a week",
        note: "(VARIES BASED ON SLATE)",
        features: ["Mainly player props", "Include derivatives main markets"],
        link: "https://whop.com/beattheline-ncaaf/"
    },
    {
        title: "NBA WEEK PACKAGE",
        price: "69.99",
        description: "> 50-75 plays a week",
        features: ["Mainly player props", "Include derivatives main markets"],
        link: "https://whop.com/beattheline-nba/"
    },
    {
        title: "NHL WEEK PACKAGE",
        price: "29.99",
        description: "> 15-25 plays a week",
        features: ["Mainly player props", "Include derivatives main markets"],
        link: "https://whop.com/beattheline-nhl/"
    },
    {
        title: "WNBA WEEK PACKAGE",
        price: "69.99",
        description: "> 50-75 plays a week",
        features: ["Mainly player props", "Include derivatives main markets"],
        link: "https://whop.com/beattheline-wnba/"
    },
    {
        title: "MLB WEEK PACKAGE",
        price: "34.99",
        description: "> 30-40 plays a week",
        features: ["Mainly player props", "Include derivatives main markets"],
        link: "https://whop.com/beattheline-mlb/ "
    }/*,
    {
        title: "SEASON PACKAGE",
        price: "TBD",
        description: "o	Create when we have the training course created",
        note: "(VARIES BASED ON SLATE)",
        features: ["Mainly player props", "Include derivatives main markets"],
    },*/,
];

export default function Subscriptions() {
  return (
    <>
      <Navbar initialBackground={false} />

      <div
        className="min-h-screen flex flex-col bg-white relative "
        style={{
          background: `radial-gradient(circle at top, rgba(114, 213, 60, 0.12) 0%, rgba(255, 255, 255, 0) 60%)`,
        }}
      >
        <h3 className="text-4xl font-bold text-center mt-32 text-ellipsis">
          Choose your plan
        </h3>

        <div className="flex-grow flex flex-wrap justify-center gap-6 p-6 w-full max-w-6xl mx-auto mt-10 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="w-full sm:w-80 rounded-xl p-6 border border-[#252525] hover:border-green-700 hover:bg-green-50 dark:hover:bg-gray-800 hover:shadow-lg transition duration-300 flex flex-col"
              style={{
                minHeight: "550px",
                maxHeight: "550px",
                overflow: "hidden",
              }}
            >
              <div className="pb-4">
                <h3 className="text-lg font-semibold text-left">
                  {plan.title}
                </h3>
              </div>

              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <p className="text-5xl font-medium text-left">
                    <span className="text-2xl font-medium text-[#9e9e9e]">
                      $
                    </span>
                    {plan.price}
                  </p>

                  <p className="text-sm font-medium text-[#9e9e9e]">
                    {plan.description}
                  </p>
                </div>

                <p className="text-sm mt-2 font-medium text-[#9e9e9e]">
                  {plan.note}
                </p>
              </div>

              <ul className="mb-6 space-y-2 text-sm overflow-hidden">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-700 font-bold">✔</span>{" "}
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={plan.link.trim()} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full mt-auto"
              >
                <button className="w-full py-3 px-4 rounded-md font-semibold transition bg-white text-black hover:bg-green-700 hover">
                  Select Plan
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
