import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Award, ArrowDown } from 'lucide-react';
import { siteConfig } from '../data/config';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-20 pb-12 px-3 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-burgundy-900/30 via-rosewine-dark/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-20">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left / Bottom on mobile: Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left space-y-4 sm:space-y-6"
          >
            {/* 8th Anniversary Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-400/30 bg-burgundy-950/80 backdrop-blur-md shadow-gold-glow">
              <Award className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-gold-300 font-tamil">
                {siteConfig.anniversary.greetingTa}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-tamil-serif leading-snug text-ivory">
              {siteConfig.anniversary.mainTitleTa}
            </h1>

            {/* Couple Name Display */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5 py-1">
              <span className="text-xl sm:text-3xl font-bold font-tamil-serif text-gold-200">
                {siteConfig.names.brideTa}
              </span>
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-rosewine-soft fill-rosewine-soft inline-block animate-pulse" />
              <span className="text-xl sm:text-3xl font-bold font-tamil-serif text-gold-200">
                {siteConfig.names.groomTa}
              </span>
            </div>

            {/* Poetic description */}
            <p className="text-xs sm:text-base text-ivory-muted font-tamil leading-relaxed max-w-lg mx-auto lg:mx-0">
              இரு மனங்கள் இணைந்து தொடங்கிய பயணம், எட்டு ஆண்டுகளைக் கடந்து பேரன்போடும், பாசத்தோடும், குடும்ப அரவணைப்போடும் இனிதே தொடர்கிறது.
            </p>

            {/* Key Milestones Pill Badges */}
            <div className="grid grid-cols-3 gap-2 pt-1 max-w-sm mx-auto lg:mx-0">
              <div className="p-2 sm:p-2.5 rounded-xl bg-midnight-card/90 border border-gold-500/20 text-center">
                <span className="block text-xl sm:text-2xl font-bold text-gold-400 font-serif">8</span>
                <span className="text-[10px] sm:text-xs text-ivory-dim font-tamil">ஆண்டுகள்</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-midnight-card/90 border border-gold-500/20 text-center">
                <span className="block text-xl sm:text-2xl font-bold text-gold-400 font-serif">2,920+</span>
                <span className="text-[10px] sm:text-xs text-ivory-dim font-tamil">நாட்கள்</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-midnight-card/90 border border-gold-500/20 text-center">
                <span className="block text-xl sm:text-2xl font-bold text-rosewine-light font-serif">∞</span>
                <span className="text-[10px] sm:text-xs text-ivory-dim font-tamil">காதல்</span>
              </div>
            </div>

            {/* Action buttons for mobile */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#gallery"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-midnight font-bold font-tamil text-xs sm:text-sm shadow-gold-glow active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 text-midnight" />
                <span>புகைப்படங்கள்</span>
              </a>

              <a
                href="#timeline"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-burgundy-900/70 border border-gold-500/30 text-gold-200 font-tamil text-xs sm:text-sm active:scale-95"
              >
                <span>காலவரிசை</span>
              </a>
            </div>

          </motion.div>

          {/* Right / Top on mobile: Hero Portrait (NO CROPPED HEADS) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-sm">
              
              {/* Golden Outer Decorative Frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-gold-600/30 via-burgundy-600/30 to-gold-400/30 blur-sm" />
              
              {/* Inner Luxury Container */}
              <div className="relative rounded-2xl overflow-hidden bg-black/90 border-2 border-gold-400/50 shadow-cinematic">
                <div className="relative aspect-[3/4] flex items-center justify-center bg-black/90 group">
                  <img
                    src="/images/romance/looking_with_love.jpg"
                    alt="ஷபி மற்றும் சிலம்பரசன்"
                    className="w-full h-full object-contain object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="eager"
                  />
                  
                  {/* Caption on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-midnight via-midnight/80 to-transparent text-center">
                    <p className="text-sm sm:text-base font-bold font-tamil-serif text-ivory">
                      {siteConfig.names.brideTa} ❤️ {siteConfig.names.groomTa}
                    </p>
                    <p className="text-[11px] text-gold-300 font-tamil mt-0.5">
                      எட்டு ஆண்டுகளின் மறக்க முடியாத காதல் பயணம்
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating aesthetic stamp */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-br from-gold-500 to-gold-700 text-midnight font-bold p-2 rounded-full shadow-gold-glow border border-ivory text-xs flex flex-col items-center justify-center w-12 h-12 transform rotate-12">
                <span className="font-serif text-sm leading-none">8</span>
                <span className="text-[8px] font-tamil leading-tight">ஆண்டுகள்</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator for mobile */}
        <div className="mt-8 sm:mt-12 text-center">
          <a
            href="#gallery"
            className="inline-flex flex-col items-center gap-1 text-ivory-dim hover:text-gold-300 transition-colors"
          >
            <span className="text-[11px] font-tamil">நினைவுகளைக் காண கீழே உருட்டவும்</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-gold-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
