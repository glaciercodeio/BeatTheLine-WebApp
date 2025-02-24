import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DataTableFilterBar from "./data-table-filterbar";

const DataTableToolbar = ({
  table,
  availableFilters,
  selectedRowIds,
  onMultiDelete,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
        <Input
          placeholder="Search..."
          value={table.getState().globalFilter ?? ""}
          onChange={(e) => table.setGlobalFilter(e.target.value)}
          className="max-w-sm w-full sm:w-auto"
        />
        <DataTableFilterBar table={table} availableFilters={availableFilters} />
      </div>
      <div className="flex justify-end gap-4">
        {selectedRowIds && selectedRowIds.length > 0 && (
          <Button variant="destructive" onClick={onMultiDelete}>
            Delete Selected ({selectedRowIds.length})
          </Button>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Columns</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default DataTableToolbar;
