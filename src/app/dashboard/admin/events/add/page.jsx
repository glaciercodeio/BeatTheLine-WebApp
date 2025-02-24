"use client";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
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
import { EventTableColumns } from "@/data/tableColumns/eventTableColumns";
import { v4 as uuidv4 } from "uuid";

const defaultColumns = EventTableColumns;

export default function AdminCreateEvents() {
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

      // Add a temporary UID if one doesn't exist.
      rowData.id = rowData.id || uuidv4();
      return rowData;
    });

    setData((prevData) => [...prevData, ...newRows]);
    toast.success("Clipboard has been pasted.");
  };

  // Add the new row to the table data
  const handleAddRow = (formData) => {
    const newRow = {
      ...formData,
      id: formData.id || uuidv4(), // Ensure each new row has a unique id.
    };
    setData((prevData) => [...prevData, newRow]);
    newRowForm.reset();
    setOpenAddDialog(false);
  };

  const handleSaveEvents = async () => {
    // Validate that there's data to save
    if (!data || data.length === 0) {
      toast.error("No events data to save.");
      return;
    }

    try {
      const eventsToSave = data.map(({ id, ...rest }) => rest);

      const response = await fetch("/api/admin/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventsToSave), // 'data' is your table data state
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

  const handleDeleteRow = (rowIds) => {
    setData((prevData) => prevData.filter((row) => !rowIds.includes(row.id)));
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
