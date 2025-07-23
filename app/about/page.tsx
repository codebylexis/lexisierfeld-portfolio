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
        {/* Slightly smaller font for about paragraphs */}
        <p className="mb-4 text-base leading-relaxed text-gray-200">
          I’m a Math major at the University of Pennsylvania with a growing passion for coding and problem solving. Originally on a pre-med track, I discovered I love the logic and creativity in math and programming more than memorization.
        </p>
        <p className="mb-4 text-base leading-relaxed text-gray-300">
          Now, I’m minoring in Computer Science and enjoy building full-stack apps, backend systems, and AI-powered projects that combine math and code.
        </p>
        <p className="mb-4 text-base leading-relaxed text-gray-300">
          Outside of coding, I’m on the Penn cheerleading team, surf year-round on the Jersey Shore (yes, even in winter), and love hiking, writing poetry, and running.
        </p>

        {/* Skills Section - keep original font size */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Skills</h2>
          <ul className="text-gray-300 list-disc list-inside space-y-1 text-lg leading-relaxed">
            <li><strong>Programming Languages:</strong> Python, Java, C, OCaml, JavaScript, SQL</li>
            <li><strong>Frameworks & Libraries:</strong> Flask, React, FastAPI, Streamlit, Transformers, PyTorch</li>
            <li><strong>Databases:</strong> PostgreSQL</li>
            <li><strong>Tools & Technologies:</strong> Git, VS Code, Linux, REST APIs, Framer Motion</li>
          </ul>
        </div>

        <p className="mt-6 text-gray-400 italic">
          Always open to connecting — reach out if you want to chat or collaborate.
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
