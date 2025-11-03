import React from 'react';
import { Timer as TimerIcon, Trophy, Crosshair, Activity, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Card = ({ icon: Icon, title, desc, accent }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
  >
    <div className={`absolute inset-px rounded-2xl ${accent} opacity-10 blur-2xl`} />
    <div className="relative z-10 flex items-start gap-4">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-black/60 ring-1 ring-white/10">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-white/70">{desc}</p>
      </div>
    </div>
    <div className="pointer-events-none absolute -bottom-10 right-0 h-24 w-24 rounded-full bg-white/10 blur-2xl transition-all group-hover:scale-125" />
  </motion.div>
);

const BioHUD = () => {
  return (
    <section id="hud" className="relative w-full bg-gradient-to-b from-black via-black to-[#030712] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(16,185,129,0.15),transparent_60%),radial-gradient(40%_30%_at_0%_100%,rgba(236,72,153,0.12),transparent_60%),radial-gradient(40%_30%_at_100%_100%,rgba(34,211,238,0.12),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
        >
          Transparent Cyber HUD
        </motion.h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Smooth, premium UI with bio-clock, chain flashes, hex score font and a soft blob crosshair. Velocity amps VFX intensity and motion blur.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            icon={TimerIcon}
            title="Bio-Clock Timer"
            desc="Circular neuron sparks with screen ripple at low time."
            accent="from-emerald-400/60 via-cyan-300/40 to-transparent bg-gradient-to-r"
          />
          <Card
            icon={Zap}
            title="Chain Counter"
            desc="Center glassy pop: x3, x5 — quick radial glitch & HUD flash."
            accent="from-fuchsia-400/60 via-rose-300/40 to-transparent bg-gradient-to-r"
          />
          <Card
            icon={Trophy}
            title="Score"
            desc="Sleek top-left, hex font, subtle neon tick on combo."
            accent="from-cyan-400/60 via-blue-300/40 to-transparent bg-gradient-to-r"
          />
          <Card
            icon={Crosshair}
            title="Crosshair"
            desc="Soft blob pulse dot with adaptive bloom and aim assist hint."
            accent="from-purple-400/60 via-fuchsia-300/40 to-transparent bg-gradient-to-r"
          />
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-emerald-400/5 p-6"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-300">
              <Activity className="h-4 w-4" />
              <span className="text-xs">Parasite Feel</span>
            </div>
            <p className="text-sm text-emerald-100/90">
              Liquid blob with micro-cells, subsurface glow, wet slime trails, faint spores, and micro-tentacles. Pulses like a heartbeat.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-fuchsia-400/5 p-6"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-3 py-1 text-fuchsia-300">
              <Zap className="h-4 w-4" />
              <span className="text-xs">Infection Effect</span>
            </div>
            <p className="text-sm text-fuchsia-100/90">
              Electric tendrils surge, eyes flicker to parasite color, screen ripple, low bass pulse. Text flashes: NEURAL LINK ESTABLISHED.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-cyan-400/5 p-6"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-cyan-300">
              <Activity className="h-4 w-4" />
              <span className="text-xs">Dash VFX</span>
            </div>
            <p className="text-sm text-cyan-100/90">
              Warp line trails, speed bloom, distortion splash, tiny camera shake. Chain dashes trigger a stronger pulse and HUD flash.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BioHUD;
