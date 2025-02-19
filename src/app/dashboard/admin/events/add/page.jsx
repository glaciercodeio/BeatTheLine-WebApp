"use client";
import React, { useState, useRef } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { DataTablePagination } from "@/components/data-table/data-table-pagination";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import {
  FaPlus,
  FaFileImport,
  FaPaste,
  FaRegTrashAlt,
  FaSave,
} from "react-icons/fa";
import CSVUploader from "@/app/components/features/CSVUploader";
import DataTable from "@/app/components/ui/data-table";
import EventForm from "@/app/components/ui/EventForm";
import { LuChevronsUpDown } from "react-icons/lu";

// Create a column helper without TypeScript types
const columnHelper = createColumnHelper();

// Define columns as per your specifications
const defaultColumns = [
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

function AdminCreateEvents() {
  // Table data state
  const [data, setData] = useState([]);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openFileDialog, setOpenFileDialog] = useState(false);
  const textAreaRef = useRef(null);

  // Initialize react-hook-form for the new row form
  const newRowForm = useForm({
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

  const processPastedData = (clipboardData) => {
    const rows = clipboardData
      .trim()
      .split("\n")
      .map((row) => row.split("\t"));

    if (rows.length === 0 || rows[0].length !== defaultColumns.length) {
      toast.error("Invalid data. Column count mismatch.");
      return;
    }

    const newRows = rows.map((row) => {
      const rowData = {};

      defaultColumns.forEach((col, i) => {
        const columnKey = col.id || col.accessorKey; // Ensure correct key mapping
        rowData[columnKey] = row[i] ? row[i].trim() : ""; // Assign cell value
      });

      return rowData;
    });

    setData((prevData) => [...prevData, ...newRows]);
    toast.success("Clipboard has been pasted.");
  };

  // Add the new row to the table data
  const handleAddRow = (formData) => {
    setData((prevData) => [...prevData, formData]);
    newRowForm.reset();
    setOpen(false);
  };

  const handleSaveEvents = async () => {
    console.log("data", data);
    // Validate that there's data to save
    if (!data || data.length === 0) {
      toast.error("No events data to save.");
      return;
    }

    try {
      const response = await fetch("/api/admin/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // 'data' is your table data state
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Failed to save events");
      }
      toast.success(result.message || "Events saved successfully!");
      setData([]); // Clears the table
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDeleteRow = (rowIndex) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData.splice(rowIndex, 1);
      return newData;
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Betting Picks Table</h1>
      {/* Buttons Container */}
      <div className="flex flex-col sm:flex-row justify-between items-center flex-wrap gap-2 p-8">
        <div className="grid grid-cols-2  sm:grid-cols-3 gap-4">
          {/* Dialog for adding a new row */}
          <Dialog open={openAddDialog} onOpenChange={setOpenAddDialog}>
            <DialogTrigger asChild>
              <Button className="flex col-span-2 sm:col-span-1 items-center gap-2">
                <FaPlus className="h-4 w-4" />
                Add New Event
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add New Event</DialogTitle>
              </DialogHeader>
              <EventForm
                newRowForm={newRowForm}
                handleSubmit={handleAddRow}
                onCancel={() => setOpenAddDialog(false)}
              />
            </DialogContent>
          </Dialog>

          {/* Dialog for importing events */}
          <Dialog open={openFileDialog} onOpenChange={setOpenFileDialog}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <FaFileImport className="h-4 w-4" />
                Import CSV
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Import CSV</DialogTitle>
              </DialogHeader>
              <CSVUploader setData={setData} setOpen={setOpenFileDialog} />
            </DialogContent>
          </Dialog>

          <Button
            className="flex items-center gap-2"
            onClick={async () => {
              try {
                // Read clipboard text automatically
                const clipboardText = await navigator.clipboard.readText();
                processPastedData(clipboardText);
              } catch (error) {
                alert(
                  "Please allow clipboard access in your browser settings."
                );
              }
            }}
          >
            <FaPaste className="h-4 w-4" />
            Paste
          </Button>

          {/* Hidden but interactive textarea */}
          <textarea
            ref={textAreaRef}
            className="absolute opacity-0 h-0 w-0"
            onPaste={(event) => {
              event.preventDefault();
              const clipboardData = event.clipboardData.getData("text");
              processPastedData(clipboardData);
            }}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          {/* Clear Table Button */}
          <Button
            className="flex items-center gap-2"
            onClick={() => {
              setData([]); // Clears the table
            }}
          >
            <FaRegTrashAlt className="h-4 w-4" />
            Clear Table
          </Button>

          {/* Submit Button (No Logic Added) */}
          <Button
            className="flex items-center gap-2"
            onClick={handleSaveEvents}
          >
            <FaSave className="h-4 w-4" />
            Save Events
          </Button>
        </div>
      </div>
      {/* Render the table */}
      <DataTable
        data={data}
        columns={defaultColumns}
        onDelete={(rowIndex) => handleDeleteRow(rowIndex)}
        onClick={() => {
          if (textAreaRef.current) {
            textAreaRef.current.value = ""; // Clear previous content
            textAreaRef.current.style.position = "absolute"; // Keep it accessible
            textAreaRef.current.style.opacity = "1"; // Make sure it's interactable
            textAreaRef.current.focus(); // Focus on it
          }
        }}
      />
    </div>
  );
}

export default AdminCreateEvents;
