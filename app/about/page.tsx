'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

function SkillPill({ label }: { label: string }) {
  return (
    <span
      title={label}
      className="inline-flex h-9 w-full items-center justify-center rounded-full border border-cyan-300/20 bg-white/[0.04] px-3 text-sm text-slate-200 leading-none whitespace-nowrap truncate"
    >
      {label}
    </span>
  );
}

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative min-h-screen bg-gradient-to-b from-[#0b0c1d] to-[#0f1222] text-white px-6 py-24 overflow-hidden font-sans"
    >
      {/* ✨ Subtle ambient orbs (cyan/indigo theme) */}
      <div className="absolute top-16 left-12 w-24 h-24 bg-cyan-400 rounded-full blur-2xl opacity-20" />
      <div className="absolute bottom-24 right-10 w-20 h-20 bg-indigo-500 rounded-full blur-2xl opacity-20" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-cyan-300 rounded-full blur-xl opacity-20" />

      {/* ✨ Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-cyan-300 via-cyan-200 to-indigo-300 text-transparent bg-clip-text"
      >
        👩‍🚀 About Me
      </motion.h1>

      {/* 🪪 About card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white/[0.06] border border-cyan-300/20 p-8 rounded-3xl backdrop-blur-md shadow-2xl relative z-10"
      >
        {/* Concise technical bio */}
        <div className="space-y-4 text-slate-200 leading-relaxed">
          <p>
            I’m a Math major and Computer Science minor at the University of Pennsylvania, where I
            explore the intersection of algorithms, design, and data.
          </p>
          <p>
            I’m currently the <span className="font-semibold">Lead Engineer at Green Optic Films</span>, developing a
            medical video analysis platform that applies <span className="font-semibold">computer vision</span> and{' '}
            <span className="font-semibold">machine learning</span> to streamline surgical instrument tracking and
            documentation.
          </p>
          <p>
            Built with <span className="font-semibold">Python, PySide, and VLC bindings</span>, the system uses a{' '}
            <span className="font-semibold">modular architecture</span> for multi-source video playback, annotation, and
            data synchronization.
          </p>
          <p>
            Green Optic Films produces data-driven medical content, and I focus on building the tools that make that
            data meaningful for clinical insight and device training.
          </p>
          <p>Outside of work, I surf, write, and am a member of the Penn Cheerleading Team.</p>
        </div>

        {/* subtle divider */}
        <hr className="border-t border-cyan-300/10 my-10" />

        {/* 🧠 Skills (uniform grid) */}
        <div className="mt-14">
          <h2 className="text-2xl font-semibold text-cyan-200 mb-4">Skills</h2>

          <div className="space-y-6 text-slate-300">
            {/* Languages */}
            <div>
              <div className="text-sm uppercase tracking-wide text-slate-400 mb-2">Languages</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {['Python', 'Java', 'C', 'OCaml', 'JavaScript', 'SQL'].map((s) => (
                  <SkillPill key={s} label={s} />
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div>
              <div className="text-sm uppercase tracking-wide text-slate-400 mb-2">Frameworks & Libraries</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {[
                  'Flask',
                  'React',
                  'FastAPI',
                  'Streamlit',
                  'Transformers',
                  'PyTorch',
                  'TensorFlow',
                  'Keras',
                  'SpaCy',
                  'Seaborn',
                  'Scikit-learn',
                ].map((s) => (
                  <SkillPill key={s} label={s} />
                ))}
              </div>
            </div>

            {/* Databases & Tools */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <div className="text-sm uppercase tracking-wide text-slate-400 mb-2">Databases</div>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                  {['PostgreSQL'].map((s) => (
                    <SkillPill key={s} label={s} />
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wide text-slate-400 mb-2">Tools & Tech</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Git', 'VS Code', 'Linux', 'REST APIs', 'Framer Motion', 'Jupyter Notebook', 'IntelliJ'].map((s) => (
                    <SkillPill key={s} label={s} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-slate-400 italic">Always open to connecting — happy to chat or collaborate.</p>
      </motion.div>

      {/* 🌌 Constellation accents (cyan/indigo) */}
      <svg
        className="absolute w-full h-full top-0 left-0 pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="25%" y1="70%" x2="50%" y2="75%" stroke="#67e8f9" strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="50%" y1="75%" x2="75%" y2="70%" stroke="#818cf8" strokeWidth="0.5" strokeDasharray="4 4" />
      </svg>

      {/* 🖼️ Photos */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto relative z-10">
        {[
          { src: '/cheer.jpg', alt: 'Mid-air cheerleading flip' },
          { src: '/moonshot.jpg', alt: 'Lexi with dreamy canal backdrop' },
        ].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-full overflow-hidden w-64 h-64 border-4 border-cyan-300/40 shadow-xl mx-auto hover:scale-105 transition-transform"
          >
            <Image src={img.src} alt={img.alt} width={400} height={400} className="object-cover w-full h-full" />
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
