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
import { EventsContainerColumns } from "@/data/tableColumns/eventsContainerColumn";

import BetEventsContainer from "./BetEventsContainer";

// Column definitions with sort buttons and custom headers
const EventTableColumns = EventsContainerColumns;

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
      <BetEventsContainer data={events} columns={EventTableColumns} />
    </div>
  );
}
