"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import BetEventCard from "./BetEventCard";
import { FilterIcon, SearchIcon } from "lucide-react";

// Sample data - replace with your actual data
const sampleData = [
  {
    sportsbook: "DraftKings",
    betId: "DK123456",
    sport: "NBA",
    eventName: "Lakers vs Warriors",
    eventDate: "2024-02-23",
    marketName: "Moneyline",
    betName: "Lakers ML",
    position: "Home",
    odds: "-110",
    suggestedBetToWin: "100",
    suggestedBetSize: "110",
    stake: "110",
    potentialPayout: "210",
    projectedEV: "5.5",
    convertedWin: "52.4",
    tag: "Premium",
    helperColumn: "High confidence pick based on recent team performance.",
    result: "Won",
  },
  {
    sportsbook: "FanDuel",
    betId: "FD789012",
    sport: "NFL",
    eventName: "Chiefs vs Bills",
    eventDate: "2024-02-24",
    marketName: "Total Points",
    betName: "Over 54.5",
    position: "Over",
    odds: "-105",
    suggestedBetToWin: "200",
    suggestedBetSize: "210",
    stake: "210",
    potentialPayout: "410",
    projectedEV: "3.8",
    convertedWin: "48.7",
    tag: "Value",
    helperColumn: "Weather conditions favor high-scoring game.",
    result: "Pending",
  },
  // Add more sample data as needed
];

export default function BetEventsContainer({ data }) {
  const [events, setEvents] = useState(data);

  useEffect(() => {
    setEvents(data);
  }, [data]);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 bg-slate-950 text-slate-100">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">Bet Events</h1>
      </div>
      <ScrollArea className="h-[calc(100vh-150px)]">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <BetEventCard key={event.betId} event={event} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
