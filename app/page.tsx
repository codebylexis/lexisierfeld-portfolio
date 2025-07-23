'use client';

import React from 'react';
import type { JSX } from 'react'; 
import { motion } from 'framer-motion';
import StarsBackground from '@/components/StarsBackground';
import ThreePlanet from '@/components/ThreePlanet';


export default function Home(): JSX.Element {
  return (
    <main className="relative flex flex-col items-center justify-center text-center px-6 py-24 min-h-screen bg-gradient-to-br from-[#0b0c1d] to-[#1a1b2f] overflow-hidden text-white font-sans">

<ThreePlanet />

      <StarsBackground />

      {/* 🌟 Stars */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-20 right-16 w-1.5 h-1.5 bg-pink-300 rounded-full opacity-70 animate-ping" />
      <div className="absolute bottom-10 left-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-50 animate-pulse" />
      <div className="absolute bottom-16 right-1/5 w-2 h-2 bg-rose-300 rounded-full opacity-60 animate-pulse" />

{/* 🪐 Animated Planets */}
<div className="absolute w-full h-full pointer-events-none z-0">
  {/* Planet 1 */}
  <div className="absolute left-20 top-1/4 w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-spin-slow shadow-lg" />


  {/* Planet 3 */}
  <div className="absolute bottom-10 left-1/2 w-12 h-12 bg-gradient-to-br from-indigo-500 to-fuchsia-400 rounded-full animate-spin-slow shadow-lg" />
</div>


      {/* 💫 Floating blobs */}
<div className="absolute top-24 left-16 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-500 opacity-30 rounded-full blur-3xl animate-bounce-slow" />
<div className="absolute bottom-24 right-16 w-28 h-28 bg-gradient-to-br from-purple-300 to-pink-300 opacity-30 rounded-full blur-2xl animate-bounce-slow" />

{/* 🌠 Shooting star */}
<div className="absolute top-10 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-shooting-star opacity-80" />

      {/* 🪐 Orbit ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute w-96 h-96 border border-purple-400/30 rounded-full shadow-[0_0_20px_2px_rgba(192,132,252,0.25)]"

      />
      {/* 🌙 Name */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold bg-gradient-to-r from-rose-400 via-pink-300 to-purple-400 text-transparent bg-clip-text drop-shadow-lg z-10"
      >
        Lexi Sierfeld
      </motion.h1>

      {/* 👩‍🚀 Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-lg max-w-2xl text-gray-300 mt-6 z-10"
      >
        Math major at the University of Pennsylvania interested in algorithms, problem solving, and building
        full-stack and AI projects. Currently developing skills in backend development and software engineering.
      </motion.p>

      {/* 🚀 Buttons */}
      <motion.div
        className="flex gap-4 flex-wrap justify-center mt-10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}

      
      >
        {[
          { label: 'GitHub', href: 'https://github.com/codebylexis', color: 'from-gray-700 to-black' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/lexi-sierfeld', color: 'from-purple-500 to-indigo-600' },
          { label: 'Email Me', href: 'mailto:sierfeld@sas.upenn.edu', color: 'from-pink-500 to-rose-400' },
          { label: 'View Projects', href: '/projects', color: 'from-yellow-500 to-pink-500' }
        ].map((btn, i) => (
          <a
            key={i}
            href={btn.href}
            target="_blank"
            className={`bg-gradient-to-r ${btn.color} text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform backdrop-blur-md`}
          >
            {btn.label}
          </a>
        ))}
      </motion.div>

      {/* 🌈 Bottom wave transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-32 fill-[#1a1b2f]">
          <path d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </main>
  );
}
