"use client";

import * as React from "react";

import { ScrollText, BookOpenText, FolderGit } from "lucide-react";
import { Nav } from "@/components/nav";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";

const data = [
  {
    title: "Work Experience",
    icon: ScrollText,
    url: "/experiences",
    items: [
      {
        title: "Overview",
        url: "/experiences",
      },
    ],
  },
  {
    title: "Projects",
    icon: FolderGit,
    url: "/projects",
    items: [
      {
        title: "Overview",
        url: "/projects",
      },
      {
        title: "Portfolio Website v1",
        url: "/projects/portfolio-website",
      },
    ],
  },
  {
    title: "Blogs",
    icon: BookOpenText,
    url: "/blogs",
    items: [
      {
        title: "Overview",
        url: "/blogs",
      },
    ],
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
