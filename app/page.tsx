'use client';

import React from 'react';
import type { JSX } from 'react';
import { motion } from 'framer-motion';
import StarsBackground from '@/components/StarsBackground';
import ThreePlanet from '@/components/ThreePlanet';

export default function Home(): JSX.Element {
  return (
    <main className="relative flex flex-col items-center justify-center text-center px-6 py-24 min-h-screen bg-gradient-to-br from-[#0b0c1d] to-[#0f1222] overflow-hidden text-white font-sans">

      {/* Scene */}
      <ThreePlanet />
      <StarsBackground />

      {/* ✨ Subtle stars / accents (shifted to cyan/indigo tones) */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-300 rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-20 right-16 w-1.5 h-1.5 bg-indigo-300 rounded-full opacity-70 animate-ping" />
      <div className="absolute bottom-10 left-1/4 w-3 h-3 bg-cyan-400 rounded-full opacity-50 animate-pulse" />
      <div className="absolute bottom-16 right-1/5 w-2 h-2 bg-indigo-400 rounded-full opacity-60 animate-pulse" />

      {/* 🪐 Ambient planets (muted, cyan/indigo) */}
      <div className="absolute w-full h-full pointer-events-none z-0">
        <div className="absolute left-20 top-1/4 w-10 h-10 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-full animate-spin-slow shadow-lg" />
        <div className="absolute bottom-10 left-1/2 w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-full animate-spin-slow shadow-lg" />
      </div>

      {/* 💫 Soft blobs (dialed down, cooler palette) */}
      <div className="absolute top-24 left-16 w-32 h-32 bg-gradient-to-br from-cyan-500 to-indigo-600 opacity-25 rounded-full blur-3xl animate-bounce-slow" />
      <div className="absolute bottom-24 right-16 w-28 h-28 bg-gradient-to-br from-indigo-400 to-cyan-300 opacity-25 rounded-full blur-2xl animate-bounce-slow" />

      {/* 🌠 Shooting star */}
      <div className="absolute top-10 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-shooting-star opacity-80" />

      {/* 🪐 Orbit ring (cyan glow) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute w-96 h-96 border border-cyan-300/30 rounded-full shadow-[0_0_20px_2px_rgba(34,211,238,0.25)]"
      />

      {/* 🌙 Name */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-cyan-200 to-indigo-300 text-transparent bg-clip-text drop-shadow-lg z-10"
      >
        Lexi Sierfeld
      </motion.h1>

      {/* 👩‍🚀 Tagline (short + broad) */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-base max-w-[620px] leading-snug text-slate-300 mt-6 z-10 mx-auto"
      >
        Math major at the University of Pennsylvania exploring data, AI, and software — where analytics meets engineering.
      </motion.p>

      {/* 🚀 CTA Buttons (unified cyan→indigo theme) */}
      <motion.div
        className="flex gap-4 flex-wrap justify-center mt-10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        {[
          { label: 'GitHub', href: 'https://github.com/codebylexis', external: true },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/lexi-sierfeld', external: true },
          { label: 'Email Me', href: 'mailto:sierfeld@sas.upenn.edu', external: true },
          { label: 'View Projects', href: '/projects', external: false }
        ].map((btn, i) => (
          <a
            key={i}
            href={btn.href}
            target={btn.external ? '_blank' : undefined}
            rel={btn.external ? 'noreferrer' : undefined}
            className="bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform border border-cyan-300/20"
          >
            {btn.label}
          </a>
        ))}
      </motion.div>

    </main>
  );
}
