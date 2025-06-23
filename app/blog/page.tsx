import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { JSX } from 'react';

interface PostMeta {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
}

export default function Blog(): JSX.Element {
  const posts = getAllPosts();

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#0b0c1d] to-[#1a1b2f] text-white font-sans px-6 py-24 overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/stars.svg')] bg-cover opacity-10 pointer-events-none z-0" />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-400 text-transparent bg-clip-text mb-4 z-10"
      >
        <span role="img" aria-label="blog">📝</span> My Blog
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-purple-200 max-w-xl z-10"
      >
        A space for my thoughts, dev journeys, and code adventures. <br />
        Posts are launching soon — stay tuned! 🚀
      </motion.p>

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

// Read MDX files from /content/blog
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
