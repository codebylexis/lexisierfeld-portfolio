'use client';

import React from 'react';
import type { JSX } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Full-Stack Stock Portfolio Tracker',
    description:
      'Track stock performance with real-time data, user auth, and visualizations.',
    tech: ['Python', 'JavaScript', 'React', 'Tailwind', 'FastAPI', 'MongoDB'],
    link: '#',
  },
  {
    title: 'Coding Interview Tracker Tool',
    description:
      'Track Leetcode progress, filter by topic, and visualize your performance.',
    tech: ['TypeScript', 'Next.js', 'Tailwind', 'Firebase'],
    link: '#',
  },
  {
    title: 'AI Voice Synthesizer',
    description:
      'Generate synthesized speech using Hugging Face / OpenAI APIs.',
    tech: ['Python', 'Flask', 'React', 'Hugging Face', 'OpenAI'],
    link: '#',
  },
  {
    title: 'Reddit Sentiment Analyzer',
    description:
      'Analyze sentiment of Reddit posts by topic or ticker with NLP tools.',
    tech: ['Python', 'PRAW', 'VADER', 'NLTK', 'Streamlit'],
    link: '#',
  },
  {
    title: 'Uber ETA Estimator Clone',
    description:
      'Simulates Uber-style ETA predictions using map APIs and backend logic.',
    tech: ['Python', 'Flask', 'OpenStreetMap', 'React'],
    link: '#',
  },
  {
    title: 'Blog Engine with Markdown Support',
    description:
      'A minimal blog platform with post creation, Markdown rendering, and auth.',
    tech: ['JavaScript', 'Next.js', 'Node.js', 'Express', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'SQL Movie Rental Dashboard',
    description:
      'Analytics dashboard for a mock movie rental business using SQL + Python.',
    tech: ['SQL', 'Python', 'PostgreSQL', 'Streamlit'],
    link: '#',
  },
  {
    title: 'Java File Compression Tool',
    description:
      'A command-line file compressor/decompressor using Huffman encoding.',
    tech: ['Java', 'IntelliJ', 'Java I/O'],
    link: '#',
  },
];

export default function Projects(): JSX.Element {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#0b0c1d] to-[#1a1b2f] py-20 px-6 text-white font-sans overflow-hidden">
      <h1 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
        🚀 Projects I’ve Launched
      </h1>

      {/* ✨ Constellation SVG lines */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="20%" y1="40%" x2="50%" y2="60%" stroke="#a78bfa33" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="50%" y1="60%" x2="80%" y2="30%" stroke="#f9a8d433" strokeWidth="1.5" strokeDasharray="3 5" />
        <circle cx="20%" cy="40%" r="2" fill="#fef3c7" />
        <circle cx="50%" cy="60%" r="2" fill="#fef3c7" />
        <circle cx="80%" cy="30%" r="2" fill="#fef3c7" />
      </svg>

      {/* 🪐 Floating planets */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-2xl opacity-40 animate-ping" />
      <div className="absolute bottom-24 left-16 w-16 h-16 bg-gradient-to-br from-purple-400 to-rose-300 rounded-full blur-xl opacity-30 animate-bounce" />

      {/* 🌟 Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto relative z-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6, type: 'spring' }}
            viewport={{ once: true }}
            className="relative bg-white/10 border border-white/20 rounded-3xl p-6 backdrop-blur-md shadow-2xl hover:scale-105 transition-transform"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-6 -left-6 w-20 h-20 border border-pink-300/30 rounded-full"
            />
            <h2 className="text-xl font-bold text-pink-300 mb-2 z-10 relative">{project.title}</h2>
            <p className="text-gray-300 mb-4 z-10 relative">{project.description}</p>
            <p className="text-sm text-purple-200 mb-4">🛠 {project.tech.join(', ')}</p>
            <a
              href={project.link}
              target="_blank"
              className="inline-block mt-2 px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-semibold hover:bg-purple-700 transition"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>

    </main>
  );
}
