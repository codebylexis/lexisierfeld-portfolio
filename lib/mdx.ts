import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsPath = path.join(process.cwd(), 'content', 'blog');

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsPath, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);

  return {
    content,
    meta: data,
  };
}
