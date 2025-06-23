import { getPostBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const post = await getPostBySlug(params.slug);

    return (
      <main className="min-h-screen px-6 py-24 bg-gradient-to-b from-[#0b0c1d] to-[#1a1b2f] text-white font-sans">
        <article className="prose prose-invert max-w-3xl mx-auto">
          <h1>{post.meta.title}</h1>
          <p className="text-sm text-purple-300 mb-6">{post.meta.date}</p>
          <MDXRemote source={post.content} />
        </article>
      </main>
    );
  } catch {
    notFound();
  }
}
