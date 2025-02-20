"use client";
import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { createColumnHelper } from "@tanstack/react-table";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import DataTable from "@/app/components/ui/data-table";
import EventForm from "@/app/components/ui/EventForm";
import { LuChevronsUpDown } from "react-icons/lu";

// Create a column helper
const columnHelper = createColumnHelper();

// Define columns for the events table based on your provided configuration.
const eventColumns = [
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
  }),
  columnHelper.accessor("sport", {
    header: "Sport",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("eventName", {
    header: "Event Name",
    cell: (info) => info.getValue(),
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
  }),
  columnHelper.accessor("marketName", {
    header: "Market Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("betName", {
    header: "Bet Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("position", {
    header: "Position",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("odds", {
    header: "Odds",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("suggestedBetToWin", {
    header: "Suggested Bet to Win",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("suggestedBetSize", {
    header: "Suggested Bet Size",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("stake", {
    header: "Stake",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("potentialPayout", {
    header: "Potential Payout",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("projectedEV", {
    header: "Projected EV %",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("convertedWin", {
    header: "Converted Win %",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("tag", {
    header: "Tag (1)",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("helperColumn", {
    header: "Helper Column",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("result", {
    header: "Result",
    cell: (info) => info.getValue(),
  }),
];

export default function Events() {
  // Table data state
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [rowToModify, setRowToModify] = useState(null);

  // Initialize react-hook-form for the modify event form.
  const modifyForm = useForm({
    defaultValues: {
      sportsbook: "",
      betId: "",
      sport: "",
      eventName: "",
      eventDate: "",
      marketName: "",
      betName: "",
      position: "",
      odds: "",
      suggestedBetToWin: "",
      suggestedBetSize: "",
      stake: "",
      potentialPayout: "",
      projectedEV: "",
      convertedWin: "",
      tag: "",
      helperColumn: "",
      result: "",
    },
  });

  // Pre-populate the modify form when a row is selected.
  useEffect(() => {
    if (rowToModify) {
      modifyForm.reset(rowToModify);
    }
  }, [rowToModify, modifyForm]);

  async function loadEvents() {
    try {
      const response = await fetch("/api/admin/events");
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to load events");
      }
      const events = await response.json();
      setData(events);
    } catch (error) {
      toast.error(error.message);
    }
  }

  // Load events data on mount.
  useEffect(() => {
    loadEvents();
  }, []);

  // Update an existing event.
  const handleUpdateEvent = async (formData) => {
    try {
      const { id, ...updates } = formData;
      const response = await fetch("/api/admin/events", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: rowToModify.id, ...updates }),
      });
      const result = await response.json();
      if (!response.ok) {
        toast.error(`Update failed: ${result.error}`);
        return;
      }
      await loadEvents();
      toast.success("Event updated successfully!");
      setOpen(false);
      setRowToModify(null);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Open the modify sheet when a row is selected.
  const handleModify = (rowData) => {
    setRowToModify(rowData);
    setOpen(true);
  };

  // Delete an event.
  const handleDeleteEvent = async (eventId) => {
    const currentData = [...data];
    try {
      // Optimistically update the UI.
      setData((prevData) => prevData.filter((event) => event.id !== eventId));
      const response = await fetch("/api/admin/events", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: eventId }),
      });
      const result = await response.json();
      if (!response.ok) {
        setData(currentData);
        toast.error(`Delete failed: ${result.error}`);
        return;
      }
      await loadEvents();
      toast.success("Event(s) deleted successfully!");
    } catch (error) {
      setData(currentData);
      toast.error(error.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Events</h1>

      {/* Sheet for modifying an event */}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Modify Event</DialogTitle>
            <DialogDescription>
              Update the event information below.
            </DialogDescription>
          </DialogHeader>
          {/* Render the EventForm component.
            It receives the form instance, submit handler, and an onCancel callback */}
          <EventForm
            newRowForm={modifyForm}
            handleSubmit={handleUpdateEvent}
            onCancel={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Render the events table */}
      <div className="p-4 sm:p-12 w-full">
        <DataTable
          data={data}
          columns={eventColumns}
          onModify={handleModify}
          onDelete={handleDeleteEvent}
        />
      </div>
    </div>
  );
}
