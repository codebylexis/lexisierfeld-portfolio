'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-b from-[#0b0c1d] to-[#1a1b2f] text-white px-6 py-24 font-sans"
    >
      {/* ✨ Animated cosmic blobs */}
      <div className="absolute top-16 left-12 w-24 h-24 bg-pink-400 rounded-full blur-2xl opacity-30 animate-ping" />
      <div className="absolute bottom-24 right-10 w-20 h-20 bg-purple-500 rounded-full blur-2xl opacity-30 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-indigo-400 rounded-full blur-xl opacity-30 animate-pulse" />

      {/* 🚀 Blog Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-400 text-transparent bg-clip-text"
      >
        From My Keyboard
      </motion.h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
        {/* Blog Post: I Taught a Neural Network to Write Poetry */}
        <div className="bg-white/5 border border-pink-500/20 rounded-2xl p-6 hover:bg-white/10 transition">
          <h2 className="text-xl font-semibold text-pink-200 mb-2">
            I Taught a Neural Network to Write Poetry (Because I Already Do)
          </h2>
          <p className="text-sm text-purple-300 mb-1">🗓️ June 26, 2025</p>
          <p className="text-gray-300 mb-4">
            When a poet trains a machine to write like one.
          </p>
          <Link
            href="/blog/third-post"
            className="inline-block bg-pink-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-pink-600 transition"
          >
            Read Post
          </Link>
        </div>

        {/* Blog Post: Inspecting Random Websites */}
        <div className="bg-white/5 border border-pink-500/20 rounded-2xl p-6 hover:bg-white/10 transition">
          <h2 className="text-xl font-semibold text-pink-200 mb-2">
            The Strange Joy of Inspecting Random Websites
          </h2>
          <p className="text-sm text-purple-300 mb-1">🗓️ June 23, 2025</p>
          <p className="text-gray-300 mb-4">
            A small habit that makes me weirdly happy.
          </p>
          <Link
            href="/blog/second-post"
            className="inline-block bg-pink-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-pink-600 transition"
          >
            Read Post
          </Link>
        </div>

        {/* Blog Post: No Slugs, No MDX */}
        <div className="bg-white/5 border border-pink-500/20 rounded-2xl p-6 hover:bg-white/10 transition">
          <h2 className="text-xl font-semibold text-pink-200 mb-2">
            I Built My Blog Without Slugs, MDX, or Headaches
          </h2>
          <p className="text-sm text-purple-300 mb-1">🗓️ June 17, 2025</p>
          <p className="text-gray-300 mb-4">
            Simplifying my blog setup in Next.js 15 — no slugs, no MDX, just working.
          </p>
          <Link
            href="/blog/first-post"
            className="inline-block bg-pink-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-pink-600 transition"
          >
            Read Post
          </Link>
        </div>
      </div>
    </motion.main>
  );
}
