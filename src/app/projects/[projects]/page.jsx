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

export default function Project({ params }) {
  const { projects } = params;
  const post = getPostContent(projects);
  if (!post) return notFound();

  return (
    <div className="prose prose-lg max-w-3xl mx-auto p-4">
      <h1>{post.data.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
    </div>
  );
}
