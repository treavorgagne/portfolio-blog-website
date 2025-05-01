"use client";

import { Nav } from "@/components/nav";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <Nav />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
