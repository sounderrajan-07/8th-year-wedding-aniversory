import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/config';

interface CinematicEndingProps {
  onRevisitMemories: () => void;
}

export const CinematicEnding: React.FC<CinematicEndingProps> = ({ onRevisitMemories }) => {
  const triggerGrandCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#dfb75c', '#d4a337', '#f472b6', '#fffdfa'],
      disableForReducedMotion: true
    });
  };

  return (
    <section id="ending" className="relative min-h-screen flex items-center justify-center py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-midnight via-burgundy-950 to-black overflow-hidden text-center">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-burgundy-900/30 via-transparent to-transparent pointer-events-none" />

      {/* Decorative Ornate Frame */}
      <div className="absolute top-12 left-12 w-20 h-20 border-t-2 border-l-2 border-gold-500/20 rounded-tl-2xl pointer-events-none hidden sm:block" />
      <div className="absolute top-12 right-12 w-20 h-20 border-t-2 border-r-2 border-gold-500/20 rounded-tr-2xl pointer-events-none hidden sm:block" />
      <div className="absolute bottom-12 left-12 w-20 h-20 border-b-2 border-l-2 border-gold-500/20 rounded-bl-2xl pointer-events-none hidden sm:block" />
      <div className="absolute bottom-12 right-12 w-20 h-20 border-b-2 border-r-2 border-gold-500/20 rounded-br-2xl pointer-events-none hidden sm:block" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-10">
        
        {/* Step 1: Three Poetic Lines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-3"
        >
          <p className="text-xl sm:text-3xl font-medium font-tamil text-gold-200">
            எட்டு ஆண்டுகள்…
          </p>
          <p className="text-xl sm:text-3xl font-medium font-tamil text-gold-300">
            எண்ணற்ற நினைவுகள்…
          </p>
          <p className="text-xl sm:text-3xl font-medium font-tamil text-gold-400">
            அளவில்லாத அன்பு…
          </p>
        </motion.div>

        <div className="h-0.5 w-32 mx-auto bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

        {/* Step 2: Main Congratulations & Couple Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="space-y-5"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold-500/30 bg-burgundy-900/60 shadow-gold-glow">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-sm sm:text-base font-bold font-tamil text-gold-300">
              இனிய திருமண நாள் வாழ்த்துகள்!
            </span>
            <Sparkles className="w-4 h-4 text-gold-400" />
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-tamil-serif text-ivory tracking-wide">
            {siteConfig.names.brideTa}
            <span className="inline-block mx-4 text-rosewine-soft">
              <Heart className="w-10 h-10 sm:w-14 sm:h-14 inline fill-rosewine-soft animate-pulse" />
            </span>
            {siteConfig.names.groomTa}
          </h2>

          <p className="text-lg sm:text-2xl font-tamil text-ivory-soft pt-2">
            உங்கள் காதல் கதை என்றும் தொடரட்டும்…
          </p>
        </motion.div>

        {/* Step 3: Action Buttons (Revisit & Celebrate) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-6 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onRevisitMemories}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-midnight font-bold font-tamil text-base shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <RotateCcw className="w-5 h-5 text-midnight" />
            <span>நினைவுகளை மீண்டும் காண்க (Revisit)</span>
          </button>

          <button
            onClick={triggerGrandCelebration}
            className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-burgundy-900/80 border border-gold-400/40 text-gold-200 hover:text-ivory font-bold font-tamil text-base transition-all duration-300 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-gold-400" />
            <span>வாழ்த்து மழை (Celebrate)</span>
          </button>
        </motion.div>

        {/* Footer Note */}
        <div className="pt-12 text-xs sm:text-sm text-ivory-dim font-tamil">
          <p>© {new Date().getFullYear()} ஷபி & சிலம்பரசன் — எட்டு ஆண்டுகள்… என்றும் தொடரும் காதல்!</p>
          <p className="mt-1 text-[11px] text-ivory-dim/60">அன்போடும் மரியாதையோடும் வடிவமைக்கப்பட்டது</p>
        </div>

      </div>
    </section>
  );
};
