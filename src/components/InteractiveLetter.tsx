import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { loveLetterData } from '../data/letter';

export const InteractiveLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    if (!isOpen) {
      // Trigger subtle golden celebration confetti
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#dfb75c', '#d4a337', '#fb7185', '#ffffff'],
        disableForReducedMotion: true
      });
    }
    setIsOpen(!isOpen);
  };

  return (
    <section id="letter" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-midnight overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-burgundy-900/20 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-burgundy-900/40 text-gold-300 text-xs sm:text-sm font-tamil">
          <Mail className="w-3.5 h-3.5 text-gold-400" />
          <span>சிறப்பு வாழ்த்து மடல்</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-tamil-serif text-ivory">
          ஊடாடும் காதல் மடல்
        </h2>

        <p className="text-sm sm:text-base text-ivory-muted font-tamil max-w-xl mx-auto leading-relaxed">
          மடலைத் திறந்து, எட்டு ஆண்டுகளின் பொன்னான அன்பிற்குச் சமர்ப்பிக்கப்பட்ட வாழ்த்து வரிகளை வாசியுங்கள்.
        </p>

        <div className="h-0.5 w-24 mx-auto bg-gradient-to-r from-transparent via-gold-400 to-transparent pt-2" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Envelope Interactive Box */}
        {!isOpen && (
          <motion.div
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleToggleOpen}
            className="w-full max-w-lg cursor-pointer p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-burgundy-950 via-midnight-card to-burgundy-900 border-2 border-gold-400/50 shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 text-center relative overflow-hidden group"
          >
            {/* Stamp on Envelope */}
            <div className="absolute top-4 right-4 w-14 h-14 border border-dashed border-gold-400/60 rounded-lg flex flex-col items-center justify-center bg-burgundy-900/80">
              <Heart className="w-5 h-5 text-rosewine-soft fill-rosewine-soft" />
              <span className="text-[9px] text-gold-300 font-tamil mt-0.5">8 ஆண்டுகள்</span>
            </div>

            <div className="w-20 h-20 mx-auto rounded-full bg-burgundy-900/80 border border-gold-400 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <Mail className="w-10 h-10 text-gold-400" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-tamil-serif text-ivory">
              வாழ்த்துக் கடிதத்தைத் திறக்க கிளிக் செய்க
            </h3>

            <p className="text-xs sm:text-sm text-gold-300/90 font-tamil mt-3">
              அன்பான ஷபி & சிலம்பரசன் அவர்களுக்கு சமர்ப்பிக்கப்பட்ட வாழ்த்து
            </p>

            <div className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold-500 text-midnight font-bold text-xs font-tamil shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-midnight" />
              <span>மடலைத் திறக்கவும் (Open Letter)</span>
            </div>
          </motion.div>
        )}

        {/* Opened Letter Paper Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-full relative rounded-3xl bg-gradient-to-b from-[#240c1b] via-[#1a0814] to-[#12040d] border-2 border-gold-400/60 shadow-2xl p-5 sm:p-12 text-ivory space-y-5 sm:space-y-6"
            >
              {/* Ornate corner motifs */}
              <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-gold-400/40 pointer-events-none" />
              <div className="absolute top-4 right-4 w-10 h-10 border-t border-r border-gold-400/40 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-10 h-10 border-b border-l border-gold-400/40 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-gold-400/40 pointer-events-none" />

              {/* Top Badge */}
              <div className="flex items-center justify-between border-b border-gold-500/20 pb-4">
                <span className="text-xs font-tamil text-gold-300 px-3 py-1 rounded-full bg-burgundy-900/60 border border-gold-500/30">
                  {loveLetterData.dateBadgeTa}
                </span>

                <button
                  onClick={handleToggleOpen}
                  className="text-xs font-tamil text-ivory-dim hover:text-gold-300 underline cursor-pointer"
                >
                  மடலை மடிக்க (Close)
                </button>
              </div>

              {/* Salutation */}
              <h3 className="text-xl sm:text-2xl font-bold font-tamil-serif text-gold-300">
                {loveLetterData.salutationTa}
              </h3>

              {/* Letter Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-ivory-soft font-tamil leading-relaxed">
                {loveLetterData.paragraphsTa.map((p, i) => (
                  <p key={i} className="indent-4 sm:indent-6">
                    {p}
                  </p>
                ))}
              </div>

              {/* Closing Greeting */}
              <div className="pt-6 border-t border-gold-500/20 text-center sm:text-right space-y-2">
                <p className="text-lg sm:text-xl font-bold font-tamil text-gold-400">
                  {loveLetterData.closingGreetingTa}
                </p>
                <p className="text-xl sm:text-2xl font-bold font-tamil-serif text-ivory">
                  {loveLetterData.signatureTa}
                </p>
              </div>

              {/* Re-fold Button */}
              <div className="pt-4 text-center">
                <button
                  onClick={handleToggleOpen}
                  className="px-6 py-2.5 rounded-full bg-midnight-card border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-tamil hover:bg-gold-500/10 transition-colors"
                >
                  மடலை மீண்டும் உறையில் வைக்கவும்
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
