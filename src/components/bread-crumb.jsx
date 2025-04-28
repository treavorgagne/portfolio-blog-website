"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function DynamicBreadcrumb() {
  const pathname = usePathname(); // e.g. "/blogs/my-first-post"
  const segments = pathname.split("/").filter(Boolean); // remove empty parts

  const crumbs = segments.map((segment, i) => {
    const href = "/" + segments.slice(0, i + 1).join("/");
    const label = decodeURIComponent(segment)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

    return (
      <React.Fragment key={label}>
        <BreadcrumbItem className="hidden sm:block">
          {" "}
          {/* Correct key usage here */}
          <BreadcrumbLink asChild>
            <Link href={href}>{label}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {i < segments.length - 1 && (
          <BreadcrumbSeparator className="hidden sm:block" />
        )}
      </React.Fragment>
    );
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Treavor Gagne</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {segments.length > 0 && (
          <BreadcrumbSeparator className="hidden sm:block" />
        )}
        {crumbs}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
