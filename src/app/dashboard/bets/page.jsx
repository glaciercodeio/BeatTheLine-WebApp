"use client";

import React, { useState, useEffect } from "react";
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { LuChevronsUpDown } from "react-icons/lu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { EventList } from "./EventList";
import BetEventsContainer from "./BetEventsContainer";

const columnHelper = createColumnHelper();

// Column definitions with sort buttons and custom headers
export const EventTableColumns = [
  columnHelper.accessor("sportsbook", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="w-full flex items-center"
      >
        Sportbook
        <LuChevronsUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: (info) => info.getValue(),
    id: "sportsbook",
    filterTitle: "Sportbook",
  }),
  columnHelper.accessor("betId", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="w-full flex items-center"
      >
        Bet ID
        <LuChevronsUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: (info) => info.getValue(),
    id: "betId",
    filterTitle: "Bet ID",
  }),
  columnHelper.accessor("sport", {
    header: "Sport",
    cell: (info) => info.getValue(),
    id: "sport",
  }),
  columnHelper.accessor("eventName", {
    header: "Event Name",
    cell: (info) => info.getValue(),
    id: "eventName",
  }),
  columnHelper.accessor("eventDate", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="w-full flex items-center"
      >
        Event Date
        <LuChevronsUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: (info) => info.getValue(),
    id: "eventDate",
    filterTitle: "Event Date",
  }),
  columnHelper.accessor("marketName", {
    header: "Market Name",
    cell: (info) => info.getValue(),
    id: "marketName",
  }),
  columnHelper.accessor("betName", {
    header: "Bet Name",
    cell: (info) => info.getValue(),
    id: "betName",
  }),
  columnHelper.accessor("position", {
    header: "Position",
    cell: (info) => info.getValue(),
    id: "position",
  }),
  columnHelper.accessor("odds", {
    header: "Odds",
    cell: (info) => info.getValue(),
    id: "odds",
  }),
  columnHelper.accessor("suggestedBetToWin", {
    header: "Suggested Bet to Win",
    cell: (info) => info.getValue(),
    id: "suggestedBetToWin",
  }),
  columnHelper.accessor("suggestedBetSize", {
    header: "Suggested Bet Size",
    cell: (info) => info.getValue(),
    id: "suggestedBetSize",
  }),
  columnHelper.accessor("stake", {
    header: "Stake",
    cell: (info) => info.getValue(),
    id: "stake",
  }),
  columnHelper.accessor("potentialPayout", {
    header: "Potential Payout",
    cell: (info) => info.getValue(),
    id: "potentialPayout",
  }),
  columnHelper.accessor("projectedEV", {
    header: "Projected EV %",
    cell: (info) => info.getValue(),
    id: "projectedEV",
  }),
  columnHelper.accessor("convertedWin", {
    header: "Converted Win %",
    cell: (info) => info.getValue(),
    id: "convertedWin",
  }),
  columnHelper.accessor("tag", {
    header: "Tag (1)",
    cell: (info) => info.getValue(),
    id: "tag",
  }),
  columnHelper.accessor("helperColumn", {
    header: "Helper Column",
    cell: (info) => info.getValue(),
    id: "helperColumn",
  }),
  columnHelper.accessor("result", {
    header: "Result",
    cell: (info) => info.getValue(),
    id: "result",
  }),
];

// EventCards component renders each event using a custom card layout
export default function EventCards() {
  const [events, setEvents] = useState([]);

  const table = useReactTable({
    data: events,
    columns: EventTableColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  async function loadEvents() {
    try {
      const response = await fetch("/api/admin/events");
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to load events");
      }
      const eventsAPI = await response.json();
      setEvents(eventsAPI);
    } catch (error) {
      toast.error(error.message);
    }
  }

  // Load events data on mount.
  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Betting Events</h1>
      <EventList data={events} />
      {/*<BetEventsContainer data={events} />*/}
    </div>
  );
}
