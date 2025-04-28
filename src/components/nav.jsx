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
    aria: "Checkout My Resume",
  },
  {
    title: "GitHub",
    targetBlank: true,
    url: "https://github.com/treavorgagne",
    icon: Github,
    aria: "Visit my GitHub Profile",
  },
  {
    title: "Mail",
    targetBlank: true,
    url: "mailto:gagnetreavor@gmail.com",
    icon: Mail,
    aria: "Send Me An Email",
  },
  {
    title: "LinkedIn",
    targetBlank: true,
    url: "https://www.linkedin.com/in/treavorgagne/",
    icon: LinkIcon,
    aria: "Visit my LinkedIn Profile",
  },
];

export function Nav({ items }) {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild
              tooltip="About Me"
            >
              <Link href="/">
                <House />
                <span>About Me</span>
              </Link>
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
                          <Link href={`${subItem.url}`}>
                            <span>{subItem.title}</span>
                          </Link>
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
                    aria-label={item.aria}
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
