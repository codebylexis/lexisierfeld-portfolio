'use client';

import { motion } from 'framer-motion';
import type { JSX } from 'react';

export default function Blog(): JSX.Element {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#0b0c1d] to-[#1a1b2f] text-white font-sans px-6 py-24 overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* 🌌 Star background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/stars.svg')] bg-cover opacity-10 pointer-events-none z-0" />

      {/* 🪐 Animated planets */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-tr from-pink-400 to-indigo-400 rounded-full blur-2xl opacity-30 animate-ping" />
      <div className="absolute bottom-32 left-10 w-16 h-16 bg-gradient-to-tr from-purple-400 to-pink-300 rounded-full blur-xl opacity-40 animate-bounce" />

      {/* 💫 Blog Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-400 text-transparent bg-clip-text mb-4 flex items-center gap-2 z-10"
      >
        <span role="img" aria-label="blog">📝</span> My Blog
      </motion.h1>

      {/* 🌟 Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-purple-200 max-w-xl z-10"
      >
        A space for my thoughts, dev journeys, and code adventures. <br />
        Posts are launching soon — stay tuned! 🚀
      </motion.p>

      {/* 🌀 Glassmorphism placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-12 w-full max-w-2xl bg-white/10 border border-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl z-10"
      >
        <p className="text-xl text-gray-300 font-medium">
          ✍️ Blog content is <span className="text-pink-300 font-bold">coming soon</span> — check back soon!
        </p>
      </motion.div>
    </main>
  );
}
