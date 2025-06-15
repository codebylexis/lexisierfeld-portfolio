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
          Hi! I&apos;m <span className="text-pink-300 font-semibold">Lexi Sierfeld</span>, a Math major at <span className="text-purple-300">UPenn</span> who loves building
          AI-powered tools and backend systems that scale.
        </p>
        <p className="mb-4 text-gray-300">
          I transitioned into SWE because I&apos;m obsessed with clean logic, elegant problem-solving, and making things <em>work like magic</em>. I&apos;ve placed in the <span className="text-indigo-300 font-medium">Putnam Competition</span>, and I love blending theory with tech.
        </p>
        <p className="mb-4 text-gray-300">
          My current focus: full-stack dev, backend infra, and fintech tools that actually feel intelligent.
        </p>
      </motion.div>

      {/* ✨ Constellation-style fun facts */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto z-10 relative">
        {[
          '📣 Cheerleader',
          '🏄‍♀️ Surfer',
          '✈️ Traveler',
        ].map((fact, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 * i, duration: 0.6 }}
            className="relative bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-md text-center text-pink-200 text-sm font-medium"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
            {fact}
          </motion.div>
        ))}
      </div>

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
