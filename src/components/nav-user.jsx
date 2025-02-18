"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { LuChevronsUpDown } from "react-icons/lu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function NavUser({ user }) {
  const supabaseClient = createClient();
  const router = useRouter();
  const { isMobile } = useSidebar();
  const [profile, setProfile] = useState(null);

  // Fetch additional user details from your custom users table.
  useEffect(() => {
    async function fetchProfile() {
      if (!user?.id) return;

      const { data, error } = await supabaseClient
        .from("users")
        .select("name, lastname")
        .eq("auth_id", user.id) // assuming "auth_id" links your custom table to auth.users.id
        .single();

      if (error) {
        console.error("Error fetching profile:", error.message);
      } else {
        setProfile(data);
      }
    }

    fetchProfile();
  }, [user, supabaseClient]);

  function getInitials(name, lastname) {
    const firstInitial = name ? name.charAt(0).toUpperCase() : "";
    const lastInitial = lastname ? lastname.charAt(0).toUpperCase() : "";
    return firstInitial + lastInitial;
  }
  // Fall back to user.email if profile data is not available
  const displayName = profile
    ? `${profile.name} ${profile.lastname}`
    : user.email;
  const email = user.email;
  const initials = profile
    ? getInitials(profile.name, profile.lastname)
    : user.email.charAt(0).toUpperCase();

  async function signOut() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    } else {
      // Redirect to the login page (or another page of your choice)
      router.push("/login");
    }
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                {/*<AvatarImage src={user.avatar} alt={user.name} />*/}
                <AvatarFallback className="rounded-lg">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{displayName}</span>
                <span className="truncate text-xs">{email}</span>
              </div>
              <LuChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  {/* <AvatarImage src={avatar} alt={name} />*/}
                  <AvatarFallback className="rounded-lg">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{displayName}</span>
                  <span className="truncate text-xs">{email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <FaUser />
                Account
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={signOut}>
              <FaSignOutAlt />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
