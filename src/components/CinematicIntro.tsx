import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Heart, Music } from 'lucide-react';
import { siteConfig } from '../data/config';

interface CinematicIntroProps {
  onEnter: () => void;
  onPlayMusic?: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onEnter, onPlayMusic }) => {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    // Sequential cinematic reveals
    const timer1 = setTimeout(() => setStep(1), 600);  // "சில கதைகள் காலத்தால் முடிவதில்லை…"
    const timer2 = setTimeout(() => setStep(2), 2200); // "ஷபி ❤️ சிலம்பரசன்"
    const timer3 = setTimeout(() => setStep(3), 3800); // "எட்டு ஆண்டுகள்… என்றும் தொடரும் காதல்!" & Enter button

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleEnterClick = () => {
    if (onPlayMusic) {
      onPlayMusic();
    }
    onEnter();
  };

  const handleScreenClick = () => {
    if (onPlayMusic) {
      onPlayMusic();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      onClick={handleScreenClick}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-midnight via-burgundy-950 to-midnight px-6 select-none overflow-hidden cursor-pointer"
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-burgundy-900/40 via-midnight/80 to-midnight pointer-events-none" />
      
      {/* Decorative ornate corner borders */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-gold-500/30 rounded-tl-lg pointer-events-none" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-gold-500/30 rounded-tr-lg pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-gold-500/30 rounded-bl-lg pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-gold-500/30 rounded-br-lg pointer-events-none" />

      {/* Skip button top right */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleEnterClick();
        }}
        className="absolute top-8 right-8 z-20 px-4 py-2 text-xs md:text-sm font-medium tracking-wider text-ivory-muted hover:text-gold-300 transition-colors bg-midnight-card/80 border border-gold-500/20 rounded-full hover:border-gold-500/50 backdrop-blur-md cursor-pointer"
        aria-label="அறிமுகத்தை தவிர்க்க"
      >
        தவிர்க்க (Skip) &rarr;
      </button>

      {/* Center Cinematic Content */}
      <div className="relative z-10 max-w-3xl text-center space-y-8 md:space-y-10">
        
        {/* Step 1: Initial poetic thought */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold-500/30 bg-burgundy-900/40 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-gold-400 animate-pulse" />
              <span className="text-sm md:text-base text-gold-200 tracking-wide font-tamil">
                {siteConfig.anniversary.introQuotesTa[0]}
              </span>
              <Sparkles className="w-4 h-4 text-gold-400 animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 2: Couple Name Reveal */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3, ease: 'easeOut' }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-tamil-serif tracking-tight text-ivory">
                <span className="text-ivory">{siteConfig.names.brideTa}</span>
                <span className="inline-block mx-3 md:mx-5 text-rosewine-soft text-3xl sm:text-5xl animate-pulse">
                  <Heart className="w-8 h-8 md:w-12 md:h-12 inline fill-rosewine-soft text-rosewine-soft" />
                </span>
                <span className="text-ivory">{siteConfig.names.groomTa}</span>
              </h1>
              <div className="h-0.5 w-32 md:w-48 mx-auto bg-gradient-to-r from-transparent via-gold-400 to-transparent my-4" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 3: Main Title and Enter Button */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              className="space-y-8"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-medium font-tamil text-gold-300">
                {siteConfig.anniversary.mainTitleTa}
              </p>

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEnterClick();
                  }}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-burgundy-700 via-rosewine-dark to-burgundy-700 text-ivory font-semibold text-lg border border-gold-400/50 shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 cursor-pointer"
                >
                  <Music className="w-5 h-5 text-gold-300 animate-bounce" />
                  <span className="relative z-10 font-tamil">
                    எங்கள் நினைவுகளுக்குள் பயணிக்கலாம்
                  </span>
                  <ArrowRight className="w-5 h-5 text-gold-300 group-hover:translate-x-1.5 transition-transform" />
                  <div className="absolute inset-0 rounded-full bg-gold-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              </div>

              <p className="text-xs md:text-sm text-gold-300/80 tracking-wider font-tamil pt-2 flex items-center justify-center gap-1.5">
                <Music className="w-3.5 h-3.5 text-gold-400" />
                <span>பாடலுடன் கூடிய இனிமையான அனுபவம்</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle bottom credit */}
      <div className="absolute bottom-6 text-center text-xs text-ivory-dim/60 font-tamil">
        இனிய 8ஆம் ஆண்டு திருமண நாள் சிறப்பு அனுபவம்
      </div>
    </motion.div>
  );
};
