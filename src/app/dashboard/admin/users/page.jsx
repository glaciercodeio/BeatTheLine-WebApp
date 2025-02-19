"use client";
import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { createColumnHelper } from "@tanstack/react-table";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { toast } from "sonner";
import { FaPlus, FaFileImport, FaRegTrashAlt, FaSave } from "react-icons/fa";
import { LuChevronsUpDown } from "react-icons/lu";
import DataTable from "@/app/components/ui/data-table";

// Create a column helper
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

// Define columns for the users table. Adjust the fields to match your Supabase users table.
const defaultColumns = [
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

export default function Users() {
  // Table data state
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [rowToModify, setRowToModify] = useState(null);

  // Initialize react-hook-form for the new user form
  const newRowForm = useForm({
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      role: "",
    },
  });

  // Initialize react-hook-form for the modify user form.
  const modifyForm = useForm({
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      role: "",
    },
  });

  // When a row is selected to modify, pre-populate the modify form.
  useEffect(() => {
    if (rowToModify) {
      modifyForm.reset(rowToModify);
    }
  }, [rowToModify, modifyForm]);

  async function loadUsers() {
    try {
      const response = await fetch("/api/admin/users");
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to load users");
      }
      const users = await response.json();
      setData(users);
    } catch (error) {
      toast.error(error.message);
    }
  }

  // Load initial users data from Supabase
  useEffect(() => {
    loadUsers();
  }, []);

  // Add the new user to the table data
  const handleAddUser = async (formData) => {
    try {
      const response = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: Math.random().toString(36).slice(-8),
          name: formData.name,
          lastname: formData.lastname,
          role: formData.role,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to add user");
      }
      await loadUsers();
      //setData((prevData) => [...prevData, result]);
      // Reset the form and close the dialog/sheet.
      newRowForm.reset();
      setOpen(false);

      toast.success("User created successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Update an existing row in the table data.
  const handleUpdateUser = async (formData) => {
    //setData((prevData) =>
    //   prevData.map((user) =>
    //     user.id === rowToModify.id ? { ...user, ...formData } : user
    //   )
    //  );
    // Prepare the update payload without the id field.
    try {
      const { id, ...updates } = formData; // remove id if present

      const response = await fetch("/api/admin/users", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Make sure you send the original email (or id) so the API can locate the record.
          id: rowToModify.id,
          ...updates,
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        toast.error(`Update failed: ${result.error}`);
        return;
      }
      await loadUsers();
      toast.success("User updated successfully!");

      // Close the modify sheet and reset the selected row.
      setSheetOpen(false);
      setRowToModify(null);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Handler for when the modify button is clicked in the DataTable.
  const handleModify = (rowData) => {
    setRowToModify(rowData);
    setSheetOpen(true);
  };

  //DELETE
  const handleDeleteUser = async (userId) => {
    const currentData = [...data];
    try {
      // Optimistically update the local state by removing the user immediately.
      setData((prevData) => prevData.filter((user) => user.id !== userId));
      // Send a DELETE request to your API route.
      const response = await fetch("/api/admin/users", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: userId }),
      });

      const result = await response.json();

      if (!response.ok) {
        // If there's an error, you might want to revert the deletion or show an error message.
        setData(currentData);
        toast.error(`Delete failed: ${result.error}`);
        // Optionally, you can re-fetch the data or undo the optimistic update here.
        return;
      }
      await loadUsers();

      toast.success("User deleted successfully!");
    } catch (error) {
      setData(currentData);
      toast.error(error.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Users</h1>
      {/* Buttons Container */}
      <div className="flex flex-col sm:flex-row justify-between items-center flex-wrap gap-2 p-8 ">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {/* Dialog for adding a new user */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="flex col-span-2 sm:col-span-1 items-center gap-2">
                <FaPlus className="h-4 w-4" />
                Add New User
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add New User</DialogTitle>
              </DialogHeader>
              <FormProvider {...newRowForm}>
                <form
                  onSubmit={newRowForm.handleSubmit(handleAddUser)}
                  className="grid grid-cols-2 gap-4 mt-4"
                >
                  <FormField
                    name="name"
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="lastname"
                    rules={{ required: "LastName is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="LastName" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="email"
                    rules={{ required: "Email is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="role"
                    rules={{ required: "Role is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="admin">Admin</SelectItem>
                              <SelectItem value="partner">Partner</SelectItem>
                              <SelectItem value="user">User</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogFooter className="col-span-2 flex justify-end gap-2 mt-4">
                    <DialogClose asChild>
                      <Button variant="secondary">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Add User</Button>
                  </DialogFooter>
                </form>
              </FormProvider>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Sheet for modifying a user */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent className="sm:max-w-[600px]">
          <SheetHeader>
            <SheetTitle>Modify User</SheetTitle>
            <SheetDescription>
              Update the user information below.
            </SheetDescription>
          </SheetHeader>
          <FormProvider {...modifyForm}>
            <form
              onSubmit={modifyForm.handleSubmit(handleUpdateUser)}
              className="grid grid-cols-1 gap-4 mt-4"
            >
              <FormField
                name="name"
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="lastname"
                rules={{ required: "Last Name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                rules={{ required: "Email is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="role"
                rules={{ required: "Role is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="partner">Partner</SelectItem>
                          <SelectItem value="user">User</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SheetFooter className="flex justify-end gap-2 mt-4">
                <SheetClose asChild>
                  <Button variant="secondary" type="button">
                    Cancel
                  </Button>
                </SheetClose>
                <Button type="submit">Save Changes</Button>
              </SheetFooter>
            </form>
          </FormProvider>
        </SheetContent>
      </Sheet>

      {/* Render the table */}
      <div className="p-4 sm:p-12 w-full">
        <DataTable
          data={data}
          columns={defaultColumns}
          onModify={handleModify}
          onDelete={handleDeleteUser}
        />
      </div>
    </div>
  );
}
