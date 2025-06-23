import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

export interface BlogPost {
  content: MDXRemoteSerializeResult;
  meta: {
    title: string;
    date: string;
    excerpt: string;
  };
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);

  const mdxSource = await serialize(content);

  return {
    content: mdxSource,
    meta: {
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
    },
  };
}
