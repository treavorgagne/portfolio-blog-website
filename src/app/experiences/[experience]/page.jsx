import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { notFound } from "next/navigation";

const contentDir = path.join(process.cwd(), "src/content/experiences");

const getPostContent = (slug) => {
  console.log(slug);
  const fullPath = path.join(contentDir, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContent = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(fileContent);
  return { content, data };
};

export default async function Experience({ params }) {
  const { experience } = await params;
  const post = getPostContent(experience);
  if (!post) return notFound();

  return (
    <>
      <h1>{post.data.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
    </>
  );
}
