export const SideBarData = {
  navMain: [
    {
      title: "Events",
      url: "#",
      allowedRoles: ["admin", "partner"],
      items: [{ title: "Bets", url: "/dashboard/bets" }],
    },
    {
      title: "Partners",
      url: "#",
      allowedRoles: ["admin", "partner", "user"],
      items: [
        { title: "RecordKeeping", url: "#" },
        { title: "PnL", url: "#", isActive: true },
      ],
    },
    {
      title: "Admin",
      url: "#",
      allowedRoles: ["admin"],
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
