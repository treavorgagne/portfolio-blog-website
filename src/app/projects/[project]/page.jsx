import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { notFound } from "next/navigation";

const contentDir = path.join(process.cwd(), "src/content/projects");

const getPostContent = (slug) => {
  const fullPath = path.join(contentDir, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContent = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(fileContent);
  return { content, data };
};

export default async function Project({ params }) {
  const { project } = await params;
  const post = getPostContent(project);
  if (!post) return notFound();

  return (
    <>
      <h1>{post.data.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
    </>
  );
}
