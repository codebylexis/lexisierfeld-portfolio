'use client';

import { motion } from 'framer-motion';

export default function BlogHeader() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-400 text-transparent bg-clip-text mb-4 z-10"
      >
        <span role="img" aria-label="blog">📝</span> My Blog
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-purple-200 max-w-xl z-10"
      >
        A space for my thoughts, dev journeys, and code adventures. <br />
        Posts are launching soon — stay tuned! 🚀
      </motion.p>
    </>
  );
}
