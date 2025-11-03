import React from 'react';
import { Music, Waves, Volume2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Item = ({ icon: Icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
  >
    <div className="grid h-10 w-10 place-items-center rounded-xl bg-black/60 ring-1 ring-white/10">
      <Icon className="h-5 w-5 text-white" />
    </div>
    <div>
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
    </div>
  </motion.div>
);

const AudioVibe = () => {
  return (
    <section id="audio" className="relative w-full bg-gradient-to-b from-black to-[#020617] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(168,85,247,0.12),transparent_60%),radial-gradient(40%_30%_at_0%_100%,rgba(34,197,94,0.12),transparent_60%),radial-gradient(40%_30%_at_100%_100%,rgba(6,182,212,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
        >
          Audio Vibe
        </motion.h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Wet slime, neural crackle, bass pulses and tech-biological hum. Ambient-first with occasional beat swells and premium UI clicks.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Item icon={Music} title="Score & UI" desc="Doom-like tactile clicks with sleek cyber tone." />
          <Item icon={Waves} title="Ambience" desc="Scorn-inspired murmur, low drones, space to breathe." />
          <Item icon={Volume2} title="Impact" desc="Sub-bass pulses for infection, dash, and chain events." />
          <Item icon={Sparkles} title="Parasite FX" desc="Whispering layers and quiet bio-electric fizz." />
        </div>
      </div>
    </section>
  );
};

export default AudioVibe;
