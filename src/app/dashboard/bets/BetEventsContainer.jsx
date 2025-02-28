"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import BetEventCard from "./BetEventCard";
import { FilterIcon, SearchIcon } from "lucide-react";

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
            <BetEventCard key={event.Id} event={event} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
