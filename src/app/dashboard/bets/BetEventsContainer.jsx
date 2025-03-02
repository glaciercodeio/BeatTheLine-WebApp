"use client";

import { useState, useEffect, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import BetEventCard from "./BetEventCard";
import { FilterIcon, SearchIcon } from "lucide-react";
import DataTableToolbar from "@/components/data-table/data-table-toolbar";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import MasonryCard from "./MasonryCard";

function generateAvailableFilters(data, columns) {
  return columns
    .filter((col) => col.accessorKey && col.enableGlobalFilter !== false)
    .map((col) => {
      const uniqueValues = new Set(data.map((row) => row[col.accessorKey]));
      const options = Array.from(uniqueValues).map((value) => ({
        label: String(value),
        value: String(value),
      }));
      return {
        id: col.id, // or col.accessorKey if that fits your data structure
        title:
          col.filterTitle ||
          (typeof col.header === "string" ? col.header : col.id),
        options,
      };
    });
}

export default function BetEventsContainer({ data, columns }) {
  const memoizedColumns = useMemo(() => columns, [columns]);
  const memoizedData = useMemo(() => data, [data]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState([]);

  const availableFilters = useMemo(
    () => generateAvailableFilters(memoizedData, memoizedColumns),
    [memoizedData, memoizedColumns]
  );

  const table = useReactTable({
    data: memoizedData,
    columns: memoizedColumns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), // enables filtering
    state: {
      globalFilter,
      columnFilters,
    },
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
  });

  const filteredEvents = table.getRowModel().rows.map((row) => row.original);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 ">
      <DataTableToolbar
        table={table}
        availableFilters={availableFilters}
        selectedRowIds={[]}
        onMultiDelete={() => {}}
        filterColumns={false}
      />
      <ScrollArea className="h-[calc(100vh-150px)]">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {filteredEvents.map((event) => (
            <div key={event.Id} className="mb-6 break-inside-avoid">
              <BetEventCard event={event} />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
