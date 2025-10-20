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
    title: 'BCanDetect: Breast Cancer Classifier',
    description:
      'A deep learning model that classifies breast cancer from histopathological images using a CNN + ANN hybrid architecture. Achieves 90% accuracy and includes training visualizations, evaluation metrics, and a clean Jupyter Notebook implementation.',
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'ANN', 'Jupyter Notebook'],
    link: 'https://github.com/codebylexis/BCanDetect',
  },
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
    title: 'ReelTime Rentals – Analytics Dashboard',
    description:
      'A KPI dashboard for a fictional movie rental company using PostgreSQL, Streamlit, and Python to visualize performance in 2024.',
    tech: ['Python', 'PostgreSQL', 'Streamlit', 'Faker', 'Pandas'],
    link: 'https://github.com/codebylexis/movie_rental_dashboard',
    live: 'https://reeltime-rentals-2024-analytics.streamlit.app/',
  },
];

export default function Projects(): JSX.Element {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#0b0c1d] to-[#0f1222] py-20 px-6 text-white font-sans overflow-hidden">
      <h1 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-300 via-cyan-200 to-indigo-300 text-transparent bg-clip-text">
        🚀 Projects I’ve Launched
      </h1>

      {/* ✨ Subtle constellation lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="20%"
          y1="40%"
          x2="50%"
          y2="60%"
          stroke="#67e8f933"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <line
          x1="50%"
          y1="60%"
          x2="80%"
          y2="30%"
          stroke="#818cf833"
          strokeWidth="1.5"
          strokeDasharray="3 5"
        />
        <circle cx="20%" cy="40%" r="2" fill="#bae6fd" />
        <circle cx="50%" cy="60%" r="2" fill="#bae6fd" />
        <circle cx="80%" cy="30%" r="2" fill="#bae6fd" />
      </svg>

      {/* 🪐 Floating orbs */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-full blur-2xl opacity-30 animate-ping" />
      <div className="absolute bottom-24 left-16 w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-full blur-xl opacity-25 animate-bounce" />

      {/* 🌟 Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto relative z-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6, type: 'spring' }}
            viewport={{ once: true }}
            className="relative bg-white/[0.04] border border-cyan-300/20 rounded-3xl p-6 backdrop-blur-md shadow-2xl hover:scale-105 hover:border-cyan-300/40 transition-all"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-6 -left-6 w-20 h-20 border border-cyan-400/20 rounded-full"
            />
            <h2 className="text-xl font-bold text-cyan-200 mb-2 z-10 relative">
              {project.title}
            </h2>
            <p className="text-slate-300 mb-4 z-10 relative">
              {project.description}
            </p>
            <p className="text-sm text-slate-400 mb-4">
              🛠 {project.tech.join(', ')}
            </p>
            <div className="flex gap-2 flex-wrap">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-full text-sm font-semibold hover:opacity-90 transition"
              >
                View on GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 border border-cyan-300/40 text-cyan-200 rounded-full text-sm font-semibold hover:bg-cyan-400/10 transition"
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
