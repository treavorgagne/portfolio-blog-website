"use client";

import {
  ScrollText,
  BookOpenText,
  FolderGit,
  Github,
  Link,
  Mail,
} from "lucide-react";
import getContentNavItems from "./getContentNavItems";

// This function will generate the navigation data dynamically
export async function generateNavigationData() {
  // Get items for each content section
  const experienceItems = await getContentNavItems("./experiences");
  const projectItems = await getContentNavItems("./projects");
  const blogItems = await getContentNavItems("./blogs");

  const data = [
    {
      title: "Work Experience",
      icon: ScrollText,
      url: "/experiences",
      items: experienceItems,
    },
    {
      title: "Projects",
      icon: FolderGit,
      url: "/projects",
      items: projectItems,
    },
    {
      title: "Blogs",
      icon: BookOpenText,
      url: "/blogs",
      items: blogItems,
    },
  ];

  return data;
}

// Social links remain static
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
    icon: Link,
    aria: "Visit my LinkedIn Profile",
  },
];

export { socials };
