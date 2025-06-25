import { getPostBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  const mdxSource = await serialize(post.content);

  return (
    <main className="min-h-screen px-6 py-24 bg-gradient-to-b from-[#0b0c1d] to-[#1a1b2f] text-white font-sans">
      <article className="prose prose-invert max-w-3xl mx-auto">
        <h1>{post.meta.title}</h1>
        <p className="text-sm text-purple-300 mb-6">{post.meta.date}</p>
        <MDXRemote {...mdxSource} />
      </article>
    </main>
  );
}
