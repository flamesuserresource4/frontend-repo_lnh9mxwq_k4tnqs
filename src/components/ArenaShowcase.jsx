import React from 'react';
import { MountainSnow, Grid3X3, CloudFog, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Feature = ({ title, items }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h4 className="text-lg font-semibold text-white">{title}</h4>
    <ul className="mt-3 space-y-2 text-sm text-white/70">
      {items.map((t, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ArenaShowcase = () => {
  return (
    <section id="arena" className="relative w-full bg-gradient-to-b from-[#030712] to-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(30%_40%_at_100%_100%,rgba(16,185,129,0.12),transparent_60%),radial-gradient(30%_40%_at_0%_100%,rgba(236,72,153,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-fuchsia-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
            >
              One Beautiful Arena
            </motion.h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Floating dark biome with depth, mist, volumetric rays, and moving energy veins. Edges fade into a void abyss of drifting embers.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-cyan-300">
              <Grid3X3 className="h-4 w-4" /> Hex Grid
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-300">
              <CloudFog className="h-4 w-4" /> Mist
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1 text-fuchsia-300">
              <Sparkles className="h-4 w-4" /> Particles
            </span>
          </div>
        </div>

        {/* Decorative grid panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-0"
        >
          <div className="relative h-80 w-full">
            {/* Animated hex-like grid using gradients */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.06)_95%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.06)_95%)] bg-[length:30px_30px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/10 to-cyan-400/0" />
            <div className="absolute inset-0 animate-pulse bg-[radial-gradient(20%_20%_at_70%_30%,rgba(34,197,94,0.15),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(20%_20%_at_20%_70%,rgba(236,72,153,0.12),transparent_70%)]" />
            <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

            {/* Foreground labels */}
            <div className="relative z-10 flex h-full w-full items-end justify-between p-6 text-white/80">
              <div className="rounded-md bg-black/50 px-3 py-2 text-xs ring-1 ring-white/10">Depth Fog + God Rays</div>
              <div className="rounded-md bg-black/50 px-3 py-2 text-xs ring-1 ring-white/10">Biotech Circuitry Edge</div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Feature
            title="Floor Types"
            items={['Pulsing organic panels', 'Faint hex lines', 'Bio-gunk growth on sides']}
          />
          <Feature
            title="Environment FX"
            items={['Mist layer + dust', 'Dim volumetric rays', 'Moving energy veins']}
          />
          <Feature
            title="Void Edge"
            items={['Drifting embers', 'Color fog', 'Falling circuitry']} 
          />
        </div>
      </div>
    </section>
  );
};

export default ArenaShowcase;
