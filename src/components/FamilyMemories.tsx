import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Home } from 'lucide-react';
import { siteConfig } from '../data/config';

export const FamilyMemories: React.FC = () => {
  const familyCards = [
    {
      id: 'family-home',
      titleTa: 'அன்பின் இல்லறம் — நம் குடும்பம்',
      descTa: 'குடும்பத்தின் சிரிப்பும் பாசமும் நிறைந்த நம் இல்லத்தில், ஒவ்வொரு நாளும் ஒரு புதிய வசந்தம்.',
      imageSrc: '/images/family/family_home.jpg'
    },
    {
      id: 'family-blessings',
      titleTa: 'பெரியோர்களின் நல்லாசிகளுடன்',
      descTa: 'குடும்ப உறவுகளின் அன்பு வாழ்த்துகளோடும் ஆசிகளோடும் இணைந்த இனிய மங்கல நன்னாள்.',
      imageSrc: '/images/wedding/wedding_ceremony.jpg'
    },
    {
      id: 'family-nature',
      titleTa: 'ஒன்றாகக் கழித்த பொன்னான நொடிகள்',
      descTa: 'குடும்பமாக இணைந்து பகிர்ந்துகொண்ட மகிழ்ச்சியும், வாழ்க்கைப் பயணத்தில் நிலைத்திருக்கும் நேசமும்.',
      imageSrc: '/images/moments/grove_hand_in_hand.jpg'
    }
  ];

  return (
    <section id="family" className="py-14 sm:py-20 px-3 sm:px-6 lg:px-8 relative bg-gradient-to-b from-midnight via-burgundy-950/60 to-midnight overflow-hidden">
      
      {/* Background soft ambient rose light */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-rosewine-dark/15 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center space-y-3 mb-10 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-500/30 bg-burgundy-900/40 text-gold-300 text-xs font-tamil">
          <Home className="w-3.5 h-3.5 text-gold-400" />
          <span>குடும்பப் பாசம்</span>
        </div>

        {/* Mandatory Heading from prompt */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-tamil-serif text-ivory">
          இரண்டு இதயங்கள்… அழகான ஒரு குடும்பம்!
        </h2>

        <p className="text-xs sm:text-sm text-ivory-muted font-tamil max-w-md mx-auto leading-relaxed">
          காதலில் இணைந்து குடும்பமாய் மலர்ந்து, எட்டு ஆண்டுகளாக அன்பின் நறுமணம் பரப்பும் எங்கள் இனிய வாழ்க்கை.
        </p>

        <div className="h-0.5 w-20 mx-auto bg-gradient-to-r from-transparent via-gold-400 to-transparent pt-1" />
      </div>

      {/* Family Cards Layout for Mobile */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
        {familyCards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            className="group rounded-2xl overflow-hidden bg-midnight-card border border-gold-500/30 hover:border-gold-400 shadow-lg transition-all duration-300 flex flex-col"
          >
            {/* Image Box - Preserves face completely */}
            <div className="relative aspect-[4/5] bg-black/90 flex items-center justify-center overflow-hidden">
              <img
                src={card.imageSrc}
                alt={card.titleTa}
                loading="lazy"
                className="w-full h-full object-contain object-top group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Card Content */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-midnight-card to-burgundy-950/80 border-t border-gold-500/15">
              <div>
                <h3 className="text-base font-bold font-tamil-serif text-ivory">
                  {card.titleTa}
                </h3>
                <p className="text-xs text-ivory-muted font-tamil mt-1.5 leading-relaxed">
                  {card.descTa}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-gold-500/15 flex items-center justify-between text-[11px] text-gold-400 font-tamil">
                <span>{siteConfig.names.brideTa} ❤️ {siteConfig.names.groomTa}</span>
                <Heart className="w-3.5 h-3.5 text-rosewine-soft fill-rosewine-soft" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};
