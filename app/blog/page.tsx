import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface PostMeta {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
}

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0c1d] to-[#1a1b2f] text-white px-6 py-24">
      <h1 className="text-4xl font-bold mb-8">My Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="bg-white/10 p-6 rounded-xl">
            <Link href={`/blog/${post.slug}`} className="text-pink-200 text-2xl font-semibold">
              {post.title}
            </Link>
            <p className="text-purple-300 text-sm">{post.date}</p>
            <p className="text-gray-300">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

function getAllPosts(): PostMeta[] {
  const dir = path.join(process.cwd(), 'app/blog');
  const folders = fs.readdirSync(dir).filter((file) => !file.includes('.'));

  return folders.map((slug) => {
    const file = path.join(dir, slug, 'page.mdx');
    const raw = fs.readFileSync(file, 'utf-8');
    const { data } = matter(raw);

    return {
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      slug,
    };
  });
}
