"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * Reads markdown files from a content directory and generates navigation items
 * @param {string} contentDir - The directory to scan (relative to src/content)
 * @returns {Array} - Array of navigation items with title and url
 */
export default async function getContentNavItems(contentDir) {
  const contentPath = path.join(process.cwd(), "src/content", contentDir);
  const items = [
    {
      title: "Overview",
      url: `/${contentDir}`,
    },
  ];

  try {
    // Read all files in the directory
    const files = fs.readdirSync(contentPath);

    // Filter for markdown files and process each one
    const mdFiles = files.filter((file) => file.endsWith(".md"));

    for (const file of mdFiles) {
      // Read the file content
      const fullPath = path.join(contentPath, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Parse frontmatter to get title
      const { data } = matter(fileContents);

      // Generate slug from filename (remove extension)
      const slug = file.replace(/\.mdx?$/, "");

      // Use frontmatter title or fallback to slug
      const title = data.title;
      const date = data.date;

      items.push({
        title: title,
        date: date,
        url: `/${contentDir}/${slug}`,
      });
    }

    return items;
  } catch (error) {
    console.error(`Error reading content from ${contentDir}:`, error);
    return items;
  }
}
