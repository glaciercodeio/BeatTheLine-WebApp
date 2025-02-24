import { createColumnHelper } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { LuChevronsUpDown } from "react-icons/lu";

const columnHelper = createColumnHelper();

const multiValueFilterFn = (row, columnId, filterValues) => {
  // If no filter is set, return true (include the row)
  if (!filterValues || filterValues.length === 0) return true;

  const cellValue = row.getValue(columnId);
  // Return true if the cellValue is in the filterValues array
  return filterValues.some(
    (val) => String(cellValue).toLowerCase() === String(val).toLowerCase()
  );
};

//filterTitle: title for the filter when column has a ui component

export const UserTableColumns = [
  columnHelper.accessor("name", {
    header: "Name",
    id: "name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lastname", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="w-full flex items-center"
      >
        Last Name
        <LuChevronsUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    id: "lastname",
    cell: (info) => info.getValue(),
    filterTitle: "Last Name",
    filterFn: multiValueFilterFn,
  }),
  columnHelper.accessor("email", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() =>
          column.toggleSorting(column.getIsSorted() === "asc" ? false : "asc")
        }
        className="w-full flex items-center justify-center"
      >
        Email
        <LuChevronsUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    id: "email",
    cell: (info) => info.getValue(),
    filterTitle: "Email",
  }),
  columnHelper.accessor("role", {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="w-full flex items-center"
      >
        Role
        <LuChevronsUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    id: "role",
    cell: (info) => info.getValue(),
    filterTitle: "Role",
    renderBadge: true,
    getBadgeProps: ({ value }) => {
      if (value === "admin")
        return { variant: "outline", className: "bg-blue-700" };
      if (value === "partner")
        return { variant: "outline", className: "bg-teal-700" };
      if (value === "user")
        return { variant: "outline", className: "bg-gray-500" };
      return { variant: "destructive", className: "bg-red-500" };
    },
  }),
];
