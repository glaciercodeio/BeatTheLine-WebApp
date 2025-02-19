import React from "react";
import { useState, useMemo } from "react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTablePagination } from "@/components/data-table/data-table-pagination";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import DataTableToolbar from "@/components/data-table/data-table-toolbar";

// Custom multi-value filter function
const multiValueFilterFn = (row, columnId, filterValues) => {
  // If no filter values are provided, include the row.
  if (!filterValues || filterValues.length === 0) return true;
  const cellValue = row.getValue(columnId);
  // Return true if the cell value matches any of the filter values.
  return filterValues.some(
    (val) => String(cellValue).toLowerCase() === String(val).toLowerCase()
  );
};

function generateAvailableFilters(data, columns) {
  return (
    columns
      // Filter to include only columns that should be filterable
      .filter((col) => col.accessorKey && col.enableGlobalFilter !== false)
      .map((col) => {
        // Extract unique values based on the column accessor
        const uniqueValues = new Set(data.map((row) => row[col.accessorKey]));
        const options = Array.from(uniqueValues).map((value) => ({
          label: String(value),
          value: String(value),
        }));
        return {
          id: col.id, // Use col.id (or col.accessorKey if that's what you use)
          title:
            col.filterTitle ||
            (typeof col.header === "string" ? col.header : col.id),
          options,
        };
      })
  );
}

export default function DataTable({
  data,
  columns,
  onClick,
  onModify,
  onDelete,
}) {
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [sorting, setSorting] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState([]);

  // Define a selection column with a header checkbox and a row checkbox.
  const selectionColumn = useMemo(
    () => ({
      id: "select",
      header: ({ table }) => (
        <Checkbox
          // Mark as checked if all page rows are selected,
          // or show an "indeterminate" state if only some are selected.
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() ? "indeterminate" : false)
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    }),
    []
  );

  // Create an action column (with modify and delete icons)
  const actionColumn = useMemo(() => {
    if (!onModify && !onDelete) return null;
    return {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => (
        <div className="flex gap-2">
          {onModify && (
            <button
              onClick={() => onModify(row.original)}
              className="p-1 hover:text-blue-600"
              title="Modify"
            >
              <FaEdit size={16} />
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(row.original.auth_id || row.original.id)}
              className="p-1 hover:text-red-600"
              title="Delete"
            >
              <FaRegTrashAlt size={16} />
            </button>
          )}
        </div>
      ),
    };
  }, [onModify, onDelete]);

  // Prepend the selection column to the columns passed in as a prop.
  const tableColumns = useMemo(() => {
    const cols = [selectionColumn, ...columns];
    if (actionColumn) {
      cols.push(actionColumn);
    }
    return cols;
  }, [selectionColumn, columns, actionColumn]);

  // Enhance columns: if a column has an accessor and is filterable, assign our custom filter function if not already set.
  const enhancedColumns = useMemo(() => {
    return tableColumns.map((col) => {
      if (
        col.accessorKey &&
        col.enableGlobalFilter !== false &&
        !col.filterFn
      ) {
        return {
          ...col,
          filterFn: multiValueFilterFn,
        };
      }
      return col;
    });
  }, [tableColumns]);

  const table = useReactTable({
    data,
    columns: enhancedColumns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), // enable client-side global filtering
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualPagination: false,
    state: {
      rowSelection,
      pagination,
      sorting,
      columnVisibility,
      globalFilter,
      columnFilters,
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    enableRowSelection: true,
    initialState: {
      pagination: {
        pageSize: 10,
        pageIndex: 0,
      },
    },
  });

  const availableFilters = useMemo(
    () => generateAvailableFilters(data, columns),
    [data, columns]
  );

  return (
    <div>
      <DataTableToolbar table={table} availableFilters={availableFilters} />
      <div className="w-full h-full overflow-x-auto overflow-y-auto max-h-[75vh]">
        <div className="h-[63vh] relative overflow-auto">
          <Table className="w-full border rounded-lg" onClick={onClick}>
            <TableHeader className="bg-muted sticky top-[-1px]">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="hover:bg-transparent">
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="px-4 py-2 text-center text-sm font-semibold whitespace-nowrap"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="border-b"
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="px-4 py-2 text-center text-sm max-w-[200px] truncate sm:max-w-none sm:whitespace-normal"
                      >
                        {cell.column.columnDef.renderBadge
                          ? (() => {
                              const cellValue = cell.getValue();
                              const badgeProps = cell.column.columnDef
                                .getBadgeProps
                                ? cell.column.columnDef.getBadgeProps({
                                    value: cellValue,
                                  })
                                : cell.column.columnDef.badgeProps || {
                                    variant: "outline",
                                  };

                              return <Badge {...badgeProps}>{cellValue}</Badge>;
                            })()
                          : flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={table.getHeaderGroups()[0]?.headers.length}
                    className="h-24 text-center"
                  >
                    No data available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination Component */}
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
