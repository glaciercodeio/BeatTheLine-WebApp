"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { SideBarData } from "@/data/sideBar";
import { Loader2 } from "lucide-react";

//const data = SideBarData;

export function AppSidebar({ user }) {
  const profile = user;

  if (!profile) {
    return (
      <div
        role="status"
        className="flex items-center justify-center h-full p-4"
      >
        <Loader2 className="mr-2 h-6 w-6 animate-spin text-blue-500" />
        <span className="text-sm font-medium">Loading sidebar...</span>
      </div>
    );
  }

  const userRole = profile.role;

  const navItems = SideBarData.navMain.filter((item) => {
    if (item.allowedRoles) {
      return item.allowedRoles.includes(userRole);
    }
    return true;
  });

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="flex items-center justify-center gap-4">
                <Link href="#">
                  <Image
                    src="/BTL-Logo-Horz-Lt-Solid.png"
                    alt="Website Logo"
                    width={130}
                    height={50}
                  />
                </Link>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={profile} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
