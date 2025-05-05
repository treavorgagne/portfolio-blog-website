import { marked } from "marked";
import { notFound } from "next/navigation";
import getPostContent from "@/content/getContentMD";
import path from "path";
const contentDir = path.join(process.cwd(), "src/content/projects");

export default async function Blog({ params }) {
  const { project } = await params;
  const post = getPostContent(contentDir, project);
  if (!post) return notFound();
  const html = marked(post.content);

  return (
    <>
      <h1>{post.data.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
    </>
  );
}
