import React from "react";
import Navbar from "@/app/components/ui/Navbar";
export const dynamic = "force-dynamic";

const plans = [
  {
    title: "NFL WEEK PACKAGE ",
    price: "34.99",
    description: "> 20-30 plays a week",
    features: ["Mainly player props", "Include main markets derivatives"],
    link: "https://whop.com/checkout/plan_iRt3y3FvpRETw?d2c=true",
    dates: "September - January",
    cta: "Coming Soon",
    roi: "5.22%",
    record: "1121-984",
  },
  {
    title: "NCAA Men’s Basketball WEEK PACKAGE ",
    price: "34.99",
    description: "> 20-30 plays a week",
    features: ["Mainly player props", "Include main markets derivatives"],
    link: "https://whop.com/checkout/plan_AbEygnLwhQdGN?d2c=true",
    dates: "November - April",
    cta: "Coming Soon",
  },
  {
    title: "NCAA Men’s Football WEEK PACKAGE ",
    price: "24.99",
    description: "> 10-20 plays a week",
    note: "(VARIES BASED ON SLATE)",
    features: ["Mainly player props", "Include main markets derivatives"],
    link: "https://whop.com/checkout/plan_DyPfnMbCn6y1H?d2c=true",
    dates: "August - January",
    cta: "Coming Soon",
  },
  {
    title: "NBA WEEK PACKAGE",
    price: "69.99",
    description: "> 50-75 plays a week",
    features: ["Mainly player props", "Include main markets derivatives"],
    link: "https://whop.com/checkout/plan_Z2iIDcQobDl9C/",
    dates: "October - June",
    cta: "Subscribe",
    roi: "8.27%",
    record: "11892-9653",
    discount: "34.99",
  },
  {
    title: "NHL WEEK PACKAGE",
    price: "29.99",
    description: "> 15-25 plays a week",
    features: ["Mainly player props", "Include main markets derivatives"],
    link: "https://whop.com/checkout/plan_CF68fVwrXeKq6?d2c=true",
    dates: "October - June",
    cta: "Coming Soon",
    roi: "4.11%",
    record: "647-587",
  },
  {
    title: "WNBA WEEK PACKAGE",
    price: "69.99",
    description: "> 50-75 plays a week",
    features: ["Mainly player props", "Include main markets derivatives"],
    link: "https://whop.com/checkout/plan_vUiQ4NLPFyVAC?d2c=true",
    dates: "May - October",
    cta: "Coming Soon",
  },
  {
    title: "MLB WEEK PACKAGE",
    price: "34.99",
    description: "> 30-40 plays a week",
    features: ["Mainly player props", "Include main markets derivatives"],
    link: "https://whop.com/checkout/plan_efTf88L1npUU5?d2c=true",
    dates: "March - November",
    cta: "Coming Soon",
    roi: "2.28%",
    record: "1680-2417",
  } /*,
    {
        title: "SEASON PACKAGE",
        price: "TBD",
        description: "o	Create when we have the training course created",
        note: "(VARIES BASED ON SLATE)",
        features: ["Mainly player props", "Include main markets derivatives"],
    },*/,
];

export default function Subscriptions() {
  const sortedPlans = [...plans].sort((a, b) => {
    if (a.cta === "Subscribe" && b.cta !== "Subscribe") return -1;
    if (a.cta !== "Subscribe" && b.cta === "Subscribe") return 1;
    if (a.cta === "Coming Soon" && b.cta !== "Coming Soon") return -1;
    if (a.cta !== "Coming Soon" && b.cta === "Coming Soon") return 1;
    return 0;
  });

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
          {sortedPlans.map(
            (plan, index) =>
              plan.roi?.trim() &&
              plan.record?.trim() && (
                <div
                  key={index}
                  className={`w-full sm:w-80 rounded-xl p-6 border-2 hover:border-green-600  border-gray-700 hover:bg-gray-800 hover:shadow-lg transition duration-300 flex flex-col ${
                    plan.cta === "Coming Soon"
                      ? "opacity-50 pointer-events-none"
                      : ""
                  }`}
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
                      <p className="text-left">
                        <span className="text-2xl font-medium text-[#9e9e9e]">
                          $
                        </span>
                        <span
                          className={`${
                            plan.discount ? "text-4xl" : "text-5xl"
                          } font-medium ${plan.discount && "line-through"}`}
                        >
                          {plan.price}
                        </span>
                      </p>

                      <p className="text-sm font-medium text-[#9e9e9e]">
                        {plan.description}
                      </p>
                    </div>

                    {plan.discount && (
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-medium text-green-500">
                          <span className="text-2xl">$</span>
                          {plan.discount}
                        </span>
                      </div>
                    )}

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

                  {plan.roi?.trim() && plan.record?.trim() && (
                    <div className="mb-6 bg-gray-700 rounded-lg p-4 space-y-4 border border-gray-600">
                      <div className="flex justify-between items-center pb-2 border-b border-gray-500">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">📈</span>
                          <span className="font-semibold text-green-400">
                            Per-Bet ROI:
                          </span>
                        </div>
                        <span className="font-bold text-lg text-white">
                          {plan.roi}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">📊</span>
                          <span className="font-semibold text-green-400">
                            Record:
                          </span>
                        </div>
                        <span className="font-bold text-lg text-white">
                          {plan.record}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="w-full mt-auto pb-4">
                    <p className="text-xs font-medium text-[#9e9e9e] uppercase tracking-wide">
                      Available From
                    </p>
                    <p className="text-base font-medium italic text-left mt-1">
                      {plan.dates}
                    </p>
                  </div>

                  <a
                    href={plan.link.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-auto"
                  >
                    <button
                      className={`w-full py-3 px-4 rounded-md font-semibold transition ${
                        plan.cta === "Coming Soon"
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-white text-black hover:bg-green-700"
                      }`}
                      disabled={plan.cta !== "Subscribe"}
                    >
                      {plan.cta}
                    </button>
                  </a>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}
