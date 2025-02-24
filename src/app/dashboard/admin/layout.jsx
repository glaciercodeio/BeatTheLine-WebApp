import React from "react";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import AccessDenied from "@/app/components/ui/AccessDenied";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  // If not logged in, redirect to login
  if (error || !data?.user) {
    redirect("/login");
  }

  const reqHeaders = await headers();
  const host = reqHeaders.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const apiUrl = `${protocol}://${host}/api/users`;

  // Fetch additional profile data to check the user's role
  const response = await fetch(
    `${apiUrl}?id=${encodeURIComponent(data?.user.id)}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    }
  );
  const profile = await response.json();

  // If the user is not an admin, display the AccessDenied component.
  if (profile.role !== "admin") {
    return (
      <div className="flex h-screen items-center justify-center">
        <AccessDenied message="You do not have admin access to this section." />
      </div>
    );
  }

  // If the role check passes, simply render the children.
  return <>{children}</>;
}
