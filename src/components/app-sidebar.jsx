"use client";

import * as React from "react";

import { ScrollText, BookOpenText, FolderGit } from "lucide-react";
import { Nav } from "@/components/nav";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";

const data = [
  {
    title: "Work Experience",
    url: "/experiences",
    icon: ScrollText,
    items: [],
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FolderGit,
    items: [],
  },
  {
    title: "Blogs",
    url: "/blogs",
    icon: BookOpenText,
    items: [],
  },
];

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <Nav items={data} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
