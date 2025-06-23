import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import BlogHeader from '@/components/BlogHeader';

interface PostMeta {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
}

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#0b0c1d] to-[#1a1b2f] text-white font-sans px-6 py-24 overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* 🌌 Star background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/stars.svg')] bg-cover opacity-10 pointer-events-none z-0" />

      {/* 🪐 Animated planets */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-tr from-pink-400 to-indigo-400 rounded-full blur-2xl opacity-30 animate-ping" />
      <div className="absolute bottom-32 left-10 w-16 h-16 bg-gradient-to-tr from-purple-400 to-pink-300 rounded-full blur-xl opacity-40 animate-bounce" />

      {/* 📝 Blog Header Component (client) */}
      <div className="z-10">
        <BlogHeader />
      </div>

      {/* 📝 Blog Post List */}
      <div className="mt-12 w-full max-w-2xl space-y-6 z-10">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md hover:bg-white/20 transition text-left"
          >
            <h2 className="text-2xl font-bold text-pink-200">{post.title}</h2>
            <p className="text-gray-300 mt-2">{post.excerpt}</p>
            <p className="text-sm text-purple-300 mt-1">{post.date}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

// Server-side: Read MDX files from /content/blog
function getAllPosts(): PostMeta[] {
  const dir = path.join(process.cwd(), 'content', 'blog');
  const files = fs.readdirSync(dir);

  return files.map((filename) => {
    const slug = filename.replace('.mdx', '');
    const fileContent = fs.readFileSync(path.join(dir, filename), 'utf-8');
    const { data } = matter(fileContent);

    return {
      title: data.title,
      slug,
      date: data.date,
      excerpt: data.excerpt,
    };
  });
}
