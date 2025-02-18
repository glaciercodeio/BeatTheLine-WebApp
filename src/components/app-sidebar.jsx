import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavUser } from "@/components/nav-user";
import { GalleryVerticalEnd, Minus, Plus } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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

const data = {
  navMain: [
    {
      title: "Events",
      url: "#",
      items: [{ title: "Picks", url: "#" }],
    },
    {
      title: "Partners",
      url: "#",
      items: [
        { title: "RecordKeeping", url: "#" },
        { title: "PnL", url: "#", isActive: true },
        { title: "Rendering", url: "#" },
      ],
    },
    {
      title: "Admin",
      url: "#",
      items: [
        { title: "Add Events", url: "/dashboard/admin/events/add" },
        { title: "Modify Events", url: "/dashboard/admin/events" },
        { title: "BTL PnL", url: "#" },
        { title: "Users", url: "/dashboard/admin/users" },
        { title: "WebPage", url: "#" },
        { title: "Settings", url: "#" },
      ],
    },
  ],
};

export function AppSidebar(props) {
  return (
    <Sidebar {...props}>
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
            {data.navMain.map((item) => (
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
        <NavUser user={props.data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
