import { marked } from "marked";
import { notFound } from "next/navigation";
import getPostContent from "@/content/getContentMD";
import path from "path";
const contentDir = path.join(process.cwd(), "src/content/experiences");

export default async function Blog({ params }) {
  const { experience } = await params;
  const post = getPostContent(contentDir, experience);
  if (!post) return notFound();
  const html = marked(post.content);

  return (
    <>
      <h1>{post.data.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
    </>
  );
}
