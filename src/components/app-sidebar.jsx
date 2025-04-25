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
    items: [
      {
        title: "Job 1",
        url: "#",
      },
      {
        title: "Job 2",
        url: "#",
      },
      {
        title: "Job 3",
        url: "#",
      },
    ],
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FolderGit,
    items: [
      {
        title: "Genesis",
        url: "#",
      },
      {
        title: "Explorer",
        url: "#",
      },
      {
        title: "Quantum",
        url: "#",
      },
    ],
  },
  {
    title: "Blogs",
    url: "/blogs",
    icon: BookOpenText,
    items: [
      {
        title: "Japan",
        url: "#",
      },
    ],
  },
];

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <Nav items={data} />
        {/* <NavSecondary /> */}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
