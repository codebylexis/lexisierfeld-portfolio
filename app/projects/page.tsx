'use client';

import React from 'react';
import type { JSX } from 'react';
import { motion } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: 'MarketInsightAI: Stock Price Prediction',
    description:
      'A deep learning project using CNNs and NLP to predict stock movements from the top 20 financial news headlines. Features performance graphs, word clouds, and model interpretability.',
    tech: ['Python', 'TensorFlow', 'Keras', 'NLP', 'SpaCy', 'Jupyter Notebook'],
    link: 'https://github.com/codebylexis/stock-news-price-prediction',
  },
  {
    title: 'Kalman Tracker: 2D Physics + Filtering',
    description:
      'A real-time Kalman filter system that tracks a simulated projectile using noisy sensor data. Includes a full physics engine, animated tracking, velocity estimation, Streamlit dashboard, and CSV export.',
    tech: ['Python', 'Kalman Filter', 'Matplotlib', 'Streamlit', 'NumPy'],
    link: 'https://github.com/codebylexis/kalman-tracker',
  },
  {
    title: 'AI Image Caption Generator',
    description:
      'A full-stack app that generates captions for uploaded images using BLIP-2 (Flan-T5-XL) and ViT-GPT2 models with a Flask backend and a React frontend.',
    tech: ['Python', 'React', 'Flask', 'Transformers', 'PyTorch'],
    link: 'https://github.com/codebylexis/ai-image-caption-generator',
  },
  {
    title: 'Sprig: Toy Programming Language',
    description:
      'A simple interpreted language with a Python backend and a React frontend for visualizing abstract syntax trees (ASTs) in real-time.',
    tech: ['Python', 'React', 'FastAPI', 'Framer Motion'],
    link: 'https://github.com/codebylexis/Sprig',
  },
  {
    title: 'ReelTime Rentals – Analytics Dashboard',
    description:
      'A KPI dashboard for a fictional movie rental company using PostgreSQL, Streamlit, and Python to visualize performance in 2024.',
    tech: ['Python', 'PostgreSQL', 'Streamlit', 'Faker', 'Pandas'],
    link: 'https://github.com/codebylexis/movie_rental_dashboard',
    live: 'https://reeltime-rentals-2024-analytics.streamlit.app/',
  },
  {
    title: 'Mini Unix Shell in C',
    description:
      'A basic Unix-like shell built from scratch in C with job control, piping, redirection, and signal handling.',
    tech: ['C', 'POSIX', 'Readline', 'Signals', 'Linux'],
    link: 'https://github.com/codebylexis/mini-shell',
  },
  {
    title: 'Java Huffman File Compressor',
    description:
      'Command-line Java tool that compresses and decompresses files using Huffman encoding with real compression ratio tracking.',
    tech: ['Java', 'VS Code', 'Java I/O'],
    link: 'https://github.com/codebylexis/HuffmanCompressor',
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
            <div className="flex gap-2 flex-wrap">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-semibold hover:bg-purple-700 transition"
              >
                View on GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold hover:bg-indigo-700 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
