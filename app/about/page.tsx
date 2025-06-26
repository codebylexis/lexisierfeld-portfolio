'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative min-h-screen bg-gradient-to-br from-[#0b0c1d] to-[#1a1b2f] text-white px-6 py-24 overflow-hidden font-sans"
    >
      {/* 🌌 Animated pastel planets */}
      <div className="absolute top-16 left-12 w-24 h-24 bg-pink-400 rounded-full blur-2xl opacity-30 animate-ping" />
      <div className="absolute bottom-24 right-10 w-20 h-20 bg-purple-500 rounded-full blur-2xl opacity-30 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-indigo-400 rounded-full blur-xl opacity-30 animate-pulse" />

      {/* ✨ Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-400 text-transparent bg-clip-text"
      >
        👩‍🚀 About Me
      </motion.h1>

      {/* 🌌 About card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-3xl mx-auto bg-white/10 border border-white/20 p-8 rounded-3xl backdrop-blur-md shadow-2xl relative z-10"
      >
        <p className="mb-4 text-lg text-gray-200">
          I wasn’t always headed for software. I started out pre-med (yes, a pre-med math major), but I kept getting pulled toward the logic puzzles in my math classes — proofs, abstract structures, problems that made me <em>think hard</em>. I realized I love solving problems more than memorizing them.
        </p>
        <p className="mb-4 text-gray-300">
          Now I’m minoring in <span className="text-purple-300">Computer Science</span>, and I build things that let me blend my math brain with code — backend systems, full-stack tools, and AI-powered experiments. I still get excited by a good proof, but I also love writing clean APIs and debugging for way too long just to get something elegant to work.
        </p>
        <p className="mb-4 text-gray-300">
          My focus today is building tools that are logical, fast, and maybe a little magical — the kind that feel like they <em>should</em> exist.
        </p>
        <p className="mt-6 text-gray-300">
          Outside of code, I’m on the <span className="text-pink-300 font-medium">Penn cheerleading team</span>, and I surf <em>year-round</em> on the Jersey Shore (yes, even in winter). I love discovering new countries, writing poetry, going hiking, and I’ve recently started getting into running — still chasing that runner’s high.
        </p>
      </motion.div>

      {/* 🌠 connecting constellation lines */}
      <svg className="absolute w-full h-full top-0 left-0 pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
        <line x1="25%" y1="70%" x2="50%" y2="75%" stroke="#f9a8d4" strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="50%" y1="75%" x2="75%" y2="70%" stroke="#c084fc" strokeWidth="0.5" strokeDasharray="4 4" />
      </svg>

      {/* 🪐 Two orbit photos */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto relative z-10">
        {[
          { src: '/cheer.jpg', alt: 'Mid-air cheerleading flip' },
          { src: '/moonshot.jpg', alt: 'Lexi with dreamy canal backdrop' },
        ].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-full overflow-hidden w-64 h-64 border-4 border-pink-400 shadow-xl mx-auto hover:scale-105 transition-transform"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
