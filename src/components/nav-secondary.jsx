import * as React from "react";
import { Github, Link, Mail, ScrollText } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Resume",
    url: "#",
    icon: ScrollText,
  },
  {
    title: "GitHub",
    url: "#",
    icon: Github,
  },
  {
    title: "Mail",
    url: "#",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    url: "#",
    icon: Link,
  },
];

export function NavSecondary() {
  return (
    <SidebarGroup className="mt-auto">
      <SidebarGroupLabel className="ml-lg">Social Links</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
