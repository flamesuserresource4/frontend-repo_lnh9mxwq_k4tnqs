import React from 'react';
import { Github, ExternalLink, Zap } from 'lucide-react';

const NeonFooter = () => {
  return (
    <footer className="relative w-full border-t border-white/10 bg-black/70 py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_30%_at_50%_0%,rgba(34,197,94,0.12),transparent_60%)]" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2 text-white/80">
          <Zap className="h-5 w-5 text-emerald-300" />
          <span className="text-sm">Neural Link — Vapor bio-cyber aesthetic</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition hover:bg-white/10"
            href="#hud"
          >
            <ExternalLink className="h-4 w-4" /> Spec
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition hover:bg-white/10"
            href="#arena"
          >
            <ExternalLink className="h-4 w-4" /> Arena
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition hover:bg-white/10"
            href="https://github.com/" target="_blank" rel="noreferrer"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default NeonFooter;
