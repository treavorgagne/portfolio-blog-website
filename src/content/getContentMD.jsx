import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function getPostContent(contentDir, slug) {
  const fullPath = path.join(contentDir, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContent = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(fileContent);
  return { content, data };
}
