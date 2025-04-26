"use client";

import {
  ChevronRight,
  House,
  Github,
  Link as LinkIcon,
  Mail,
  ScrollText,
} from "lucide-react";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarGroupContent,
} from "@/components/ui/sidebar";

const socials = [
  {
    title: "Resume",
    targetBlank: false,
    url: "/resume",
    icon: ScrollText,
  },
  {
    title: "GitHub",
    targetBlank: true,
    url: "https://github.com/treavorgagne",
    icon: Github,
  },
  {
    title: "Mail",
    targetBlank: true,
    url: "mailto:gagnetreavor@gmail.com",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    targetBlank: true,
    url: "https://www.linkedin.com/in/treavorgagne/",
    icon: LinkIcon,
  },
];

export function Nav({ items }) {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="About Me">
              <House size={32} strokeWidth={3} absoluteStrokeWidth />
              <a href="/">
                <span>About Me</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {items.map((item) => (
            <Collapsible key={item.title} asChild className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && (
                      <item.icon
                        size={32}
                        strokeWidth={3}
                        absoluteStrokeWidth
                      />
                    )}
                    <span>{item.title}</span>
                    <ChevronRight
                      size={32}
                      strokeWidth={3}
                      absoluteStrokeWidth
                      className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                    />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <a href={`${item.url}/${subItem.url}`}>
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarGroup>
      <SidebarGroup className="mt-auto">
        <SidebarGroupLabel>Social Links</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {socials.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild tooltip={item.title}>
                  <Link
                    href={item.url}
                    {...(item.targetBlank
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
}
