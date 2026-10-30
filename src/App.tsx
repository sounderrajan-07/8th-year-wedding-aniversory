import React, { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ParticleCanvas } from './components/ParticleCanvas';
import { CinematicIntro } from './components/CinematicIntro';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { PhotoGallery } from './components/PhotoGallery';
import { LoveTimeline } from './components/LoveTimeline';
import { FamilyMemories } from './components/FamilyMemories';
import { InteractiveLetter } from './components/InteractiveLetter';
import { MusicPlayer, MusicPlayerHandle } from './components/MusicPlayer';
import { CinematicEnding } from './components/CinematicEnding';

export const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const musicPlayerRef = useRef<MusicPlayerHandle | null>(null);

  const handleEnterWebsite = () => {
    // Ensure music is playing on enter
    musicPlayerRef.current?.play();
    setShowIntro(false);
  };

  const handleRevisitIntro = () => {
    setShowIntro(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRevisitMemories = () => {
    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleTriggerMusic = () => {
    musicPlayerRef.current?.play();
  };

  return (
    <div className="relative min-h-screen bg-midnight text-ivory font-tamil selection:bg-burgundy-800 selection:text-gold-200">
      
      {/* Background Floating Ambient Particles */}
      <ParticleCanvas />

      {/* Floating Audio Controller (Always mounted for immediate autoplay) */}
      <MusicPlayer ref={musicPlayerRef} autoPlayOnMount={true} />

      {/* Cinematic Full-screen Introduction Overlay */}
      <AnimatePresence>
        {showIntro && (
          <CinematicIntro
            onEnter={handleEnterWebsite}
            onPlayMusic={handleTriggerMusic}
          />
        )}
      </AnimatePresence>

      {/* Main Experience Layout */}
      {!showIntro && (
        <div className="relative z-20 flex flex-col">
          {/* Header Navigation */}
          <Navigation onRevisitIntro={handleRevisitIntro} />

          {/* Main Website Sections */}
          <main className="flex-1">
            <HeroSection />
            <PhotoGallery />
            <LoveTimeline />
            <FamilyMemories />
            <InteractiveLetter />
            <CinematicEnding onRevisitMemories={handleRevisitMemories} />
          </main>
        </div>
      )}

    </div>
  );
};

export default App;
