'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-b from-[#0b0c1d] to-[#0f1222] text-white px-6 py-24 font-sans"
    >
      {/* 🧭 Header */}
      <motion.h1
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl leading-tight font-extrabold text-center mb-3"
      >
        From My Keyboard
      </motion.h1>
      <p className="text-center text-sm text-slate-300/80 mb-12">
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Blog Post: Inspecting Random Websites */}
        <article className="rounded-2xl border border-slate-800/70 bg-white/[0.035] p-6 hover:bg-white/[0.055] hover:border-slate-700/60 transition-colors">
          <h2 className="text-xl font-semibold text-cyan-200 mb-2">
            The Strange Joy of Inspecting Random Websites
          </h2>
          <p className="text-sm text-slate-300/80 mb-1">June 22, 2025</p>
          <p className="text-slate-200/90 mb-4">
            A small habit that makes me weirdly happy.
          </p>
          <Link
            href="/blog/second-post"
            className="inline-block text-sm px-4 py-2 rounded-lg border border-cyan-400/40 text-cyan-200 hover:bg-cyan-400/10 transition-colors"
          >
            Read Post
          </Link>
        </article>

        {/* Blog Post: Tabs as a Personality Test */}
        <article className="rounded-2xl border border-slate-800/70 bg-white/[0.035] p-6 hover:bg-white/[0.055] hover:border-slate-700/60 transition-colors">
          <h2 className="text-xl font-semibold text-cyan-200 mb-2">
            Tabs as a Personality Test
          </h2>
          <p className="text-sm text-slate-300/80 mb-1">July 17, 2025</p>
          <p className="text-slate-200/90 mb-4">
            Why I think our messy browsers say more about us than we realize.
          </p>
          <Link
            href="/blog/first-post"
            className="inline-block text-sm px-4 py-2 rounded-lg border border-cyan-400/40 text-cyan-200 hover:bg-cyan-400/10 transition-colors"
          >
            Read Post
          </Link>
        </article>

        {/* Blog Post: The Emotions of Money */}
        <article className="rounded-2xl border border-slate-800/70 bg-white/[0.035] p-6 hover:bg-white/[0.055] hover:border-slate-700/60 transition-colors">
          <h2 className="text-xl font-semibold text-cyan-200 mb-2">
            The Emotions of Money
          </h2>
          <p className="text-sm text-slate-300/80 mb-1">October 12, 2025</p>
          <p className="text-slate-200/90 mb-4">
            How markets reflect our collective emotions more than our math.
          </p>
          <Link
            href="/blog/third-post"
            className="inline-block text-sm px-4 py-2 rounded-lg border border-cyan-400/40 text-cyan-200 hover:bg-cyan-400/10 transition-colors"
          >
            Read Post
          </Link>
        </article>
      </div>
    </motion.main>
  );
}
