import React from 'react';
import NeonHero from './components/NeonHero';
import BioHUD from './components/BioHUD';
import ArenaShowcase from './components/ArenaShowcase';
import AudioVibe from './components/AudioVibe';
import NeonFooter from './components/NeonFooter';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <NeonHero />
      <BioHUD />
      <ArenaShowcase />
      <AudioVibe />
      <NeonFooter />
    </div>
  );
};

export default App;
