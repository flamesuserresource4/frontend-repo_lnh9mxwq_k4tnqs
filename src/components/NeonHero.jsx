import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Zap, Gamepad2 } from 'lucide-react';
import { motion } from 'framer-motion';

const NeonHero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/BL9Cjn3fkAdLBhXm/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glow overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-24 text-center sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-300 backdrop-blur"
        >
          <Zap className="h-4 w-4" />
          <span className="text-xs tracking-wider">Hi-res Neon Bio-Glow Aesthetic</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
          className="mt-6 bg-gradient-to-r from-emerald-300 via-cyan-300 to-fuchsia-400 bg-clip-text font-extrabold text-4xl leading-tight text-transparent sm:text-6xl"
        >
          Parasite: Neural Link
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="mt-4 max-w-2xl text-balance text-base text-cyan-200/90 sm:text-lg"
        >
          Liquid shaders. Slime trails. Pulsating outlines. Fog, bloom & chromatic aberration. A premium cyber-bio arena built for smooth motion & visceral feedback.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#hud"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-emerald-500/30 transition hover:brightness-110"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Explore Spec
          </a>
          <a
            href="#arena"
            className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 px-4 py-2 text-sm font-medium text-fuchsia-200 backdrop-blur transition hover:bg-fuchsia-400/20"
          >
            <Gamepad2 className="h-4 w-4" />
            See Arena
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NeonHero;
