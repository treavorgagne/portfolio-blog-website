"use client";

import { useEffect, useState } from "react";
import { ChevronRight, House } from "lucide-react";
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
import { generateNavigationData, socials } from "@/content/data";

export function Nav() {
  const [navData, setNavData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNavData() {
      try {
        const data = await generateNavigationData();
        setNavData(data);
      } catch (error) {
        console.error("Failed to load navigation data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadNavData();
  }, []);

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="About Me">
              <Link href="/">
                <House />
                <span>Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {loading ? (
            <SidebarMenuItem>
              <SidebarMenuButton>
                <span>Loading navigation...</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ) : (
            navData.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && (
                        <Link href={item.url}>
                          <item.icon size={16} strokeWidth={2} />
                        </Link>
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
            ))
          )}
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
