"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  SquareTerminal,
} from "lucide-react"

import { Nav } from "@/components/nav"
import {
  Sidebar,
  SidebarContent,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  items: [
    {
      title: "Work Experience",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
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
      url: "#",
      icon: Bot,
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
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Japan",
          url: "#",
        }
      ],
    },
  ]
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <Nav items={data.items} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
